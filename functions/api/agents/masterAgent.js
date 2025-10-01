import { handleStandardChat } from './standardAgent';
import { handleRagChat } from './ragAgent';
import { handleEditRequest } from './editAgent';
import { handleFileCreationRequest } from './fileCreationAgent';
import { error, json } from '../utils';
import axios from 'axios';
import { AI_MODELS } from './config';

const getRoutingChoice = async (text, context, apiKey) => {
    const contextProvided = context && context.files && context.files.length > 0;

    const prompt = `You are a master routing agent. Classify the user's query into ONE category: 'edit', 'rag', or 'standard'.

CATEGORIES:

1. 'edit' - Use when the query requests CODE CHANGES or MODIFICATIONS:
   - Keywords: edit, modify, change, update, fix, refactor, add, remove, replace, correct, improve, optimize, insert, delete, substitute, swap, rewrite, adjust, implement, create (when adding to existing files)
   - Examples: 
     * "change the button color to red"
     * "fix the bug in the login function"
     * "add error handling"
     * "update the API endpoint"
     * "make the header bigger"
   - IMPORTANT: Choose 'edit' if the user wants ANY kind of code modification!

2. 'rag' - Use when the query needs PROJECT-WIDE SEARCH:
   - The query asks about code NOT in the provided context
   - Questions about how different parts interact
   - Examples: "how does authentication work?", "where is this function called?"

3. 'standard' - Use for QUESTIONS and EXPLANATIONS:
   - General questions or explanations
   - Questions about the provided file context
   - Examples: "what does this do?", "explain this function", "hello"

QUERY: "${text}"
FILE CONTEXT PROVIDED: ${contextProvided ? 'Yes' : 'No'}

CRITICAL: If the query asks to CHANGE, MODIFY, FIX, or UPDATE code, you MUST respond with 'edit'.

Respond with ONLY ONE WORD: edit, rag, or standard`;

    const model = AI_MODELS.CHAT_MODEL;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const requestBody = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            maxOutputTokens: 10,
        }
    };

    try {
        const geminiResponse = await axios.post(apiUrl, requestBody, { headers: { 'Content-Type': 'application/json' } });
        const choice = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'standard';
        const trimmedChoice = choice.trim().toLowerCase();
        console.log(`[MASTER AGENT ROUTING]`);
        console.log(`  Query: "${text}"`);
        console.log(`  Context Provided: ${contextProvided}`);
        console.log(`  Routing Decision: ${trimmedChoice}`);
        return trimmedChoice;
    } catch (err) {
        console.error(`[MASTER AGENT ERROR] Routing failed:`, err.response?.data || err.message);
        console.log(`[MASTER AGENT] Defaulting to 'standard' agent due to routing error`);
        // Default to standard agent on routing failure
        return 'standard';
    }
}

export const routeRequest = async (body, env, user) => {
    const { text, action, context, projectId } = body;
    const apiKey = env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error('GEMINI_API_KEY is not set in the environment variables.');
        return error(500, { message: 'AI service configuration error.' });
    }

    // Explicitly handle file creation actions
    if (action && ['create_file', 'delete_file', 'rename_file', 'create_book_structure'].includes(action)) {
        console.log(`Routing to File Creation Agent for action: ${action}`);
        return await handleFileCreationRequest(body, env, user);
    }

    // Explicitly handle the summarization action
    if (action === 'summarize_for_title') {
        console.log('Routing to Standard Agent for title summarization');
        // Use a specific prompt for summarization
        const summarizationBody = {
            ...body,
            text: `Summarize the following text into a short, concise chat title (3-5 words). Do not use quotes. Text: "${text}"`
        };
        return await handleStandardChat(summarizationBody, env, user);
    }
    
    const choice = await getRoutingChoice(text, context, apiKey);

    let agentResponse;
    // Pass projectId along to the agents
    const agentBody = { text, context, projectId, history: body.history }; 

    if (choice.includes('edit')) {
        console.log('Routing to Edit Agent');
        agentResponse = await handleEditRequest(agentBody, env, user);
    } else if (choice.includes('rag')) {
        console.log('Routing to RAG Agent');
        agentResponse = await handleRagChat(agentBody, env, user);
    } else {
        console.log('Routing to Standard Agent');
        agentResponse = await handleStandardChat(agentBody, env, user);
    }

    // Clone the response to log its body without consuming the original response stream
    try {
        const clonedResponse = agentResponse.clone();
        const responseBody = await clonedResponse.json();
        console.log('Master Agent Output:', JSON.stringify(responseBody, null, 2));
    } catch (e) {
        // This might fail if the response isn't valid JSON, but we don't want to break the request.
        console.error('Could not log master agent output:', e);
    }

    return agentResponse;
};
