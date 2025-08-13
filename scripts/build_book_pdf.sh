#!/bin/bash

# Generic book build script
# Compiles markdown files into a properly formatted PDF for self-publishing.

# Change to the script's directory to ensure correct file paths
cd "$(dirname "$0")"

echo "Building Book PDF..."

# Parse arguments and environment
# Priority: CLI flags > environment vars > defaults
usage() {
	echo "Usage: $0 [-t|--title TITLE] [-a|--author AUTHOR] [-s|--subtitle SUBTITLE] [-o|--output OUTPUT.pdf] [-d|--dir SOURCE_DIR]"
	echo "Environment vars: BOOK_TITLE, BOOK_AUTHOR, BOOK_SUBTITLE, OUTPUT_PDF, SOURCE_DIR"
}

BOOK_TITLE_DEFAULT="Untitled Book"
BOOK_AUTHOR_DEFAULT="Unknown Author"
BOOK_SUBTITLE_DEFAULT=""

BOOK_TITLE="${BOOK_TITLE:-}" 
BOOK_AUTHOR="${BOOK_AUTHOR:-}" 
BOOK_SUBTITLE="${BOOK_SUBTITLE:-}"
OUTPUT_PDF="${OUTPUT_PDF:-}"
SOURCE_DIR="${SOURCE_DIR:-}"

while [ $# -gt 0 ]; do
	case "$1" in
		-t|--title)
			BOOK_TITLE="$2"; shift ;;
		-a|--author)
			BOOK_AUTHOR="$2"; shift ;;
		-s|--subtitle)
			BOOK_SUBTITLE="$2"; shift ;;
		-o|--output)
			OUTPUT_PDF="$2"; shift ;;
		-d|--dir)
			SOURCE_DIR="$2"; shift ;;
		-h|--help)
			usage; exit 0 ;;
		*)
			echo "Unknown option: $1"; usage; exit 1 ;;
	 esac
	shift
done

# Default source directory: current directory (this script's directory)
if [ -z "$SOURCE_DIR" ]; then
	SOURCE_DIR="$(pwd)"
fi

# Auto-detect source dir if no files found in current dir
if [ ! -f "$SOURCE_DIR/prologue.md" ] && [ -z "$(find "$SOURCE_DIR" -maxdepth 1 -type f -name 'chapter_*.md' 2>/dev/null)" ] && [ ! -f "$SOURCE_DIR/epilogue.md" ]; then
	if [ -f "../prologue.md" ] || [ -n "$(find .. -maxdepth 1 -type f -name 'chapter_*.md' 2>/dev/null)" ] || [ -f "../epilogue.md" ]; then
		SOURCE_DIR="$(cd .. && pwd)"
	fi
fi

# Fill in defaults for title/author/subtitle
if [ -z "$BOOK_TITLE" ]; then BOOK_TITLE="$BOOK_TITLE_DEFAULT"; fi
if [ -z "$BOOK_AUTHOR" ]; then BOOK_AUTHOR="$BOOK_AUTHOR_DEFAULT"; fi
if [ -z "$BOOK_SUBTITLE" ]; then BOOK_SUBTITLE="$BOOK_SUBTITLE_DEFAULT"; fi

# Derive default output name from title if not provided
if [ -z "$OUTPUT_PDF" ]; then
	TITLE_SAFE=$(printf '%s' "$BOOK_TITLE" | tr -cs '[:alnum:]' '_' | sed 's/^_*//; s/_*$//')
	if [ -z "$TITLE_SAFE" ]; then TITLE_SAFE="book"; fi
	OUTPUT_PDF="${TITLE_SAFE}.pdf"
fi

# Create the formatted manuscript with all pre-content and LaTeX settings.
rm -f formatted_manuscript.md
cat > formatted_manuscript.md << EOF
---
geometry:
- paperwidth=6in
- paperheight=9in
- margin=1in
fontsize: 12pt
documentclass: book
classoption: openright
secnumdepth: 0
header-includes: |
  \usepackage{fancyhdr}
  \usepackage{tocloft}
  \usepackage{ifthen}
  \usepackage{etoolbox}
  \setlength{\parindent}{1.2em}
  \setlength{\parskip}{0.35em}
  \tolerance=1000
  \emergencystretch=3em
  \raggedbottom
  
  \renewcommand{\contentsname}{Table of Contents}
  \renewcommand{\cfttoctitlefont}{\hfill\Large\bfseries}
  \renewcommand{\cftaftertoctitle}{\hfill\mbox{}}
  \makeatletter

  \newcommand{\MyTitle}{$BOOK_TITLE}
  \newcommand{\MyAuthor}{$BOOK_AUTHOR}
  \newcommand{\MySubtitle}{$BOOK_SUBTITLE}

  \newcommand{\halftitlepage}{
    \cleardoublepage
    \thispagestyle{empty}
    \vspace*{\fill}
    \begin{center}
      {\Huge \bfseries \MyTitle\par}
    \end{center}
    \vspace*{\fill}
  }

  \renewcommand{\maketitle}{
    \cleardoublepage
    \thispagestyle{empty}
    \vspace*{\fill}
    \begin{center}
      {\Huge \bfseries \MyTitle\par}
      \ifthenelse{\equal{\MySubtitle}{}}{}{\vspace{2em}{\Large \textit{\MySubtitle}\par}}
      \vspace{4em}
      {\large \MyAuthor\par}
    \end{center}
    \vspace*{\fill}
  }
  
  \newcommand{\copyrightpage}{
    \clearpage
    \thispagestyle{empty}
    \vspace*{\fill}
    \noindent Copyright © \the\year\ \MyAuthor\par
    \noindent All rights reserved.\par
    \vspace*{\fill}
  }

  % Optional: define \dedicationpage yourself by editing the script if needed

  \let\oldchapter\chapter
  \renewcommand\chapter[1]{
    \cleardoublepage
    \phantomsection
    \addcontentsline{toc}{chapter}{#1}
    \thispagestyle{empty}
    \vspace*{\fill}
    \begin{center}
      {\Huge \bfseries #1\par}
    \end{center}
    \vspace*{\fill}
  }

  \let\oldsection\section
  \renewcommand\section[1]{
    \clearpage
    \phantomsection
    \addcontentsline{toc}{section}{#1}
    \vspace{2em}
    \begin{center}
    {\Large \bfseries #1\par}
    \end{center}
    \vspace{1em}
  }

  \pagestyle{fancy}
  \fancyhf{}
  \fancyhead[LE]{\textit{\MyAuthor}}
  \fancyhead[RO]{\textit{\MyTitle}}
  \fancyfoot[C]{\thepage}

  \fancypagestyle{plain}{
    \fancyhf{}
    \fancyfoot[C]{\thepage}
  }
  
  \fancypagestyle{tocstyle}{
    \fancyhf{}
    \fancyfoot[C]{\thepage}
    \renewcommand{\headrulewidth}{0pt}
    \renewcommand{\footrulewidth}{0pt}
  }
  \makeatother
---
\frontmatter
\halftitlepage
\maketitle
\copyrightpage

\cleardoublepage
\pagestyle{empty}
\renewcommand{\headrulewidth}{0pt}
\tableofcontents
\clearpage
\pagestyle{fancy}
\renewcommand{\headrulewidth}{0.4pt}
\mainmatter
EOF

# Collect files in order: prologue, chapters (sorted), epilogue
ITEMS=()

# Helper to extract a title from the first H1 in a file; fallback based on filename
extract_title() {
	local path="$1"
	local base
	base="$(basename "$path")"
	local t
	t="$(grep -m1 '^# ' "$path" | sed 's/^# //')"
	if [ -n "$t" ]; then
		printf '%s' "$t"
		return 0
	fi
	case "$base" in
		prologue.md)
			printf '%s' "Prologue" ;;
		epilogue.md)
			printf '%s' "Epilogue" ;;
		chapter_*.md)
			local n
			n="$(printf '%s' "$base" | sed -n 's/^chapter_\([0-9][0-9]*\)\.md$/\1/p')"
			if [ -n "$n" ]; then printf 'Chapter %s' "$n"; else printf '%s' "Chapter"; fi ;;
		*)
			printf '%s' "Untitled" ;;
	esac
}

if [ -f "$SOURCE_DIR/prologue.md" ]; then
	ITEMS+=("$SOURCE_DIR/prologue.md")
fi

CHAPTER_LIST=$(find "$SOURCE_DIR" -maxdepth 1 -type f -name 'chapter_*.md' 2>/dev/null | sort -V)
if [ -n "$CHAPTER_LIST" ]; then
	while IFS= read -r f; do
		ITEMS+=("$f")
	done <<__CH_END__
$CHAPTER_LIST
__CH_END__
fi

if [ -f "$SOURCE_DIR/epilogue.md" ]; then
	ITEMS+=("$SOURCE_DIR/epilogue.md")
fi

# Process each collected file
for file in "${ITEMS[@]}"; do
	title="$(extract_title "$file")"
	echo "Adding $title..."
	
	echo -e "\n# $title\n" >> formatted_manuscript.md
	
	grep -v '^# ' "$file" >> formatted_manuscript.md
done

# Add Author Bio at the end.
if [ -f "$SOURCE_DIR/author_bio.md" ]; then
	echo "Adding Author Bio..."
	cat >> formatted_manuscript.md << 'AUTHORBIO'

\cleardoublepage
\phantomsection
\thispagestyle{empty}
\vspace{6em}
\begin{center}
{\Large \bfseries About the Author}
\end{center}
\vspace{2em}

AUTHORBIO
	grep -v '^# ' "$SOURCE_DIR/author_bio.md" >> formatted_manuscript.md
	cat >> formatted_manuscript.md << 'AUTHOREND'

\vspace*{\fill}
\clearpage
\thispagestyle{empty}
AUTHOREND
fi

# Generate PDF with proper LaTeX processing.
echo "Converting to PDF..."
pandoc formatted_manuscript.md -o "$OUTPUT_PDF" \
	--standalone

if [ $? -eq 0 ]; then
	echo "✅ PDF successfully generated: $OUTPUT_PDF"
	echo "📄 File size: $(ls -lh "$OUTPUT_PDF" | awk '{print $5}')"
else
    echo "❌ Error generating PDF"
    exit 1
fi

# Clean up temporary file.
# rm -f formatted_manuscript.md

echo "🎉 Book build complete!"