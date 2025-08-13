var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// ../api/dbConfig.js
var query;
var init_dbConfig = __esm({
  "../api/dbConfig.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    query = /* @__PURE__ */ __name(async (text, params, env2) => {
      if (!env2.DB) {
        throw new Error("Database binding not found.");
      }
      const d1Query = text.replace(/\$\d+/g, "?");
      try {
        const stmt = env2.DB.prepare(d1Query).bind(...params);
        const { results } = await stmt.all();
        return { rows: results };
      } catch (err) {
        console.error("Error executing query with D1:", {
          message: err.message,
          stack: err.stack
        });
        throw err;
      }
    }, "query");
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs
var subtle;
var init_web = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/crypto/web.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    subtle = globalThis.crypto?.subtle;
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs
var webcrypto, createCipher, createDecipher, pseudoRandomBytes, Cipher, Decipher;
var init_node = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/crypto/node.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    webcrypto = new Proxy(globalThis.crypto, { get(_, key) {
      if (key === "CryptoKey") {
        return globalThis.CryptoKey;
      }
      if (typeof globalThis.crypto[key] === "function") {
        return globalThis.crypto[key].bind(globalThis.crypto);
      }
      return globalThis.crypto[key];
    } });
    createCipher = /* @__PURE__ */ notImplemented("crypto.createCipher");
    createDecipher = /* @__PURE__ */ notImplemented("crypto.createDecipher");
    pseudoRandomBytes = /* @__PURE__ */ notImplemented("crypto.pseudoRandomBytes");
    Cipher = /* @__PURE__ */ notImplementedClass("crypto.Cipher");
    Decipher = /* @__PURE__ */ notImplementedClass("crypto.Decipher");
  }
});

// ../node_modules/unenv/dist/runtime/node/crypto.mjs
var init_crypto = __esm({
  "../node_modules/unenv/dist/runtime/node/crypto.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_web();
    init_node();
  }
});

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs
var workerdCrypto, Certificate, checkPrime, checkPrimeSync, constants, Cipheriv, createCipheriv, createDecipheriv, createDiffieHellman, createDiffieHellmanGroup, createECDH, createHash, createHmac, createPrivateKey, createPublicKey, createSecretKey, createSign, createVerify, Decipheriv, diffieHellman, DiffieHellman, DiffieHellmanGroup, ECDH, fips, generateKey, generateKeyPair, generateKeyPairSync, generateKeySync, generatePrime, generatePrimeSync, getCipherInfo, getCiphers, getCurves, getDiffieHellman, getFips, getHashes, getRandomValues, hash, Hash, hkdf, hkdfSync, Hmac, KeyObject, pbkdf2, pbkdf2Sync, privateDecrypt, privateEncrypt, publicDecrypt, publicEncrypt, randomBytes, randomFill, randomFillSync, randomInt, randomUUID, scrypt, scryptSync, secureHeapUsed, setEngine, setFips, sign, Sign, subtle2, timingSafeEqual, verify, Verify, X509Certificate, webcrypto2, crypto_default;
var init_crypto2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/node/crypto.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto();
    workerdCrypto = process.getBuiltinModule("node:crypto");
    ({
      Certificate,
      checkPrime,
      checkPrimeSync,
      constants,
      Cipheriv: (
        // @ts-expect-error
        Cipheriv
      ),
      createCipheriv,
      createDecipheriv,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createECDH,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      createSign,
      createVerify,
      Decipheriv: (
        // @ts-expect-error
        Decipheriv
      ),
      diffieHellman,
      DiffieHellman,
      DiffieHellmanGroup,
      ECDH,
      fips,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCipherInfo,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hash,
      Hash,
      hkdf,
      hkdfSync,
      Hmac,
      KeyObject,
      pbkdf2,
      pbkdf2Sync,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      scrypt,
      scryptSync,
      secureHeapUsed,
      setEngine,
      setFips,
      sign,
      Sign,
      subtle: subtle2,
      timingSafeEqual,
      verify,
      Verify,
      X509Certificate
    } = workerdCrypto);
    webcrypto2 = {
      // @ts-expect-error
      CryptoKey: webcrypto.CryptoKey,
      getRandomValues,
      randomUUID,
      subtle: subtle2
    };
    crypto_default = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      Certificate,
      Cipher,
      Cipheriv,
      Decipher,
      Decipheriv,
      ECDH,
      Sign,
      Verify,
      X509Certificate,
      constants,
      createCipheriv,
      createDecipheriv,
      createECDH,
      createSign,
      createVerify,
      diffieHellman,
      getCipherInfo,
      hash,
      privateDecrypt,
      privateEncrypt,
      publicDecrypt,
      publicEncrypt,
      scrypt,
      scryptSync,
      sign,
      verify,
      // default-only export from unenv
      // @ts-expect-error unenv has unknown type
      createCipher,
      // @ts-expect-error unenv has unknown type
      createDecipher,
      // @ts-expect-error unenv has unknown type
      pseudoRandomBytes,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      DiffieHellman,
      DiffieHellmanGroup,
      Hash,
      Hmac,
      KeyObject,
      checkPrime,
      checkPrimeSync,
      createDiffieHellman,
      createDiffieHellmanGroup,
      createHash,
      createHmac,
      createPrivateKey,
      createPublicKey,
      createSecretKey,
      generateKey,
      generateKeyPair,
      generateKeyPairSync,
      generateKeySync,
      generatePrime,
      generatePrimeSync,
      getCiphers,
      getCurves,
      getDiffieHellman,
      getFips,
      getHashes,
      getRandomValues,
      hkdf,
      hkdfSync,
      pbkdf2,
      pbkdf2Sync,
      randomBytes,
      randomFill,
      randomFillSync,
      randomInt,
      randomUUID,
      secureHeapUsed,
      setEngine,
      setFips,
      subtle: subtle2,
      timingSafeEqual,
      // default-only export from workerd
      fips,
      // special-cased deep merged symbols
      webcrypto: webcrypto2
    };
  }
});

// node-built-in-modules:crypto
var require_crypto = __commonJS({
  "node-built-in-modules:crypto"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_crypto2();
    module.exports = crypto_default;
  }
});

// ../node_modules/bcryptjs/dist/bcrypt.js
var require_bcrypt = __commonJS({
  "../node_modules/bcryptjs/dist/bcrypt.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    (function(global2, factory) {
      if (typeof define === "function" && define["amd"])
        define([], factory);
      else if (typeof __require === "function" && typeof module === "object" && module && module["exports"])
        module["exports"] = factory();
      else
        (global2["dcodeIO"] = global2["dcodeIO"] || {})["bcrypt"] = factory();
    })(exports, function() {
      "use strict";
      var bcrypt2 = {};
      var randomFallback = null;
      function random(len) {
        if (typeof module !== "undefined" && module && module["exports"])
          try {
            return require_crypto()["randomBytes"](len);
          } catch (e) {
          }
        try {
          var a;
          (self["crypto"] || self["msCrypto"])["getRandomValues"](a = new Uint32Array(len));
          return Array.prototype.slice.call(a);
        } catch (e) {
        }
        if (!randomFallback)
          throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
        return randomFallback(len);
      }
      __name(random, "random");
      var randomAvailable = false;
      try {
        random(1);
        randomAvailable = true;
      } catch (e) {
      }
      randomFallback = null;
      bcrypt2.setRandomFallback = function(random2) {
        randomFallback = random2;
      };
      bcrypt2.genSaltSync = function(rounds, seed_length) {
        rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof rounds !== "number")
          throw Error("Illegal arguments: " + typeof rounds + ", " + typeof seed_length);
        if (rounds < 4)
          rounds = 4;
        else if (rounds > 31)
          rounds = 31;
        var salt = [];
        salt.push("$2a$");
        if (rounds < 10)
          salt.push("0");
        salt.push(rounds.toString());
        salt.push("$");
        salt.push(base64_encode(random(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
        return salt.join("");
      };
      bcrypt2.genSalt = function(rounds, seed_length, callback) {
        if (typeof seed_length === "function")
          callback = seed_length, seed_length = void 0;
        if (typeof rounds === "function")
          callback = rounds, rounds = void 0;
        if (typeof rounds === "undefined")
          rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
        else if (typeof rounds !== "number")
          throw Error("illegal arguments: " + typeof rounds);
        function _async(callback2) {
          nextTick2(function() {
            try {
              callback2(null, bcrypt2.genSaltSync(rounds));
            } catch (err) {
              callback2(err);
            }
          });
        }
        __name(_async, "_async");
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt2.hashSync = function(s, salt) {
        if (typeof salt === "undefined")
          salt = GENSALT_DEFAULT_LOG2_ROUNDS;
        if (typeof salt === "number")
          salt = bcrypt2.genSaltSync(salt);
        if (typeof s !== "string" || typeof salt !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof salt);
        return _hash(s, salt);
      };
      bcrypt2.hash = function(s, salt, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s === "string" && typeof salt === "number")
            bcrypt2.genSalt(salt, function(err, salt2) {
              _hash(s, salt2, callback2, progressCallback);
            });
          else if (typeof s === "string" && typeof salt === "string")
            _hash(s, salt, callback2, progressCallback);
          else
            nextTick2(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof salt)));
        }
        __name(_async, "_async");
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      function safeStringCompare(known, unknown) {
        var right = 0, wrong = 0;
        for (var i = 0, k = known.length; i < k; ++i) {
          if (known.charCodeAt(i) === unknown.charCodeAt(i))
            ++right;
          else
            ++wrong;
        }
        if (right < 0)
          return false;
        return wrong === 0;
      }
      __name(safeStringCompare, "safeStringCompare");
      bcrypt2.compareSync = function(s, hash2) {
        if (typeof s !== "string" || typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof s + ", " + typeof hash2);
        if (hash2.length !== 60)
          return false;
        return safeStringCompare(bcrypt2.hashSync(s, hash2.substr(0, hash2.length - 31)), hash2);
      };
      bcrypt2.compare = function(s, hash2, callback, progressCallback) {
        function _async(callback2) {
          if (typeof s !== "string" || typeof hash2 !== "string") {
            nextTick2(callback2.bind(this, Error("Illegal arguments: " + typeof s + ", " + typeof hash2)));
            return;
          }
          if (hash2.length !== 60) {
            nextTick2(callback2.bind(this, null, false));
            return;
          }
          bcrypt2.hash(s, hash2.substr(0, 29), function(err, comp) {
            if (err)
              callback2(err);
            else
              callback2(null, safeStringCompare(comp, hash2));
          }, progressCallback);
        }
        __name(_async, "_async");
        if (callback) {
          if (typeof callback !== "function")
            throw Error("Illegal callback: " + typeof callback);
          _async(callback);
        } else
          return new Promise(function(resolve, reject) {
            _async(function(err, res) {
              if (err) {
                reject(err);
                return;
              }
              resolve(res);
            });
          });
      };
      bcrypt2.getRounds = function(hash2) {
        if (typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof hash2);
        return parseInt(hash2.split("$")[2], 10);
      };
      bcrypt2.getSalt = function(hash2) {
        if (typeof hash2 !== "string")
          throw Error("Illegal arguments: " + typeof hash2);
        if (hash2.length !== 60)
          throw Error("Illegal hash length: " + hash2.length + " != 60");
        return hash2.substring(0, 29);
      };
      var nextTick2 = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
      function stringToBytes(str) {
        var out = [], i = 0;
        utfx.encodeUTF16toUTF8(function() {
          if (i >= str.length) return null;
          return str.charCodeAt(i++);
        }, function(b) {
          out.push(b);
        });
        return out;
      }
      __name(stringToBytes, "stringToBytes");
      var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
      var BASE64_INDEX = [
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        1,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        -1,
        -1,
        -1,
        -1,
        -1
      ];
      var stringFromCharCode = String.fromCharCode;
      function base64_encode(b, len) {
        var off2 = 0, rs = [], c1, c2;
        if (len <= 0 || len > b.length)
          throw Error("Illegal len: " + len);
        while (off2 < len) {
          c1 = b[off2++] & 255;
          rs.push(BASE64_CODE[c1 >> 2 & 63]);
          c1 = (c1 & 3) << 4;
          if (off2 >= len) {
            rs.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off2++] & 255;
          c1 |= c2 >> 4 & 15;
          rs.push(BASE64_CODE[c1 & 63]);
          c1 = (c2 & 15) << 2;
          if (off2 >= len) {
            rs.push(BASE64_CODE[c1 & 63]);
            break;
          }
          c2 = b[off2++] & 255;
          c1 |= c2 >> 6 & 3;
          rs.push(BASE64_CODE[c1 & 63]);
          rs.push(BASE64_CODE[c2 & 63]);
        }
        return rs.join("");
      }
      __name(base64_encode, "base64_encode");
      function base64_decode(s, len) {
        var off2 = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
        if (len <= 0)
          throw Error("Illegal len: " + len);
        while (off2 < slen - 1 && olen < len) {
          code = s.charCodeAt(off2++);
          c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          code = s.charCodeAt(off2++);
          c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c1 == -1 || c2 == -1)
            break;
          o = c1 << 2 >>> 0;
          o |= (c2 & 48) >> 4;
          rs.push(stringFromCharCode(o));
          if (++olen >= len || off2 >= slen)
            break;
          code = s.charCodeAt(off2++);
          c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          if (c3 == -1)
            break;
          o = (c2 & 15) << 4 >>> 0;
          o |= (c3 & 60) >> 2;
          rs.push(stringFromCharCode(o));
          if (++olen >= len || off2 >= slen)
            break;
          code = s.charCodeAt(off2++);
          c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
          o = (c3 & 3) << 6 >>> 0;
          o |= c4;
          rs.push(stringFromCharCode(o));
          ++olen;
        }
        var res = [];
        for (off2 = 0; off2 < olen; off2++)
          res.push(rs[off2].charCodeAt(0));
        return res;
      }
      __name(base64_decode, "base64_decode");
      var utfx = function() {
        "use strict";
        var utfx2 = {};
        utfx2.MAX_CODEPOINT = 1114111;
        utfx2.encodeUTF8 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = /* @__PURE__ */ __name(function() {
              return null;
            }, "src");
          while (cp !== null || (cp = src()) !== null) {
            if (cp < 128)
              dst(cp & 127);
            else if (cp < 2048)
              dst(cp >> 6 & 31 | 192), dst(cp & 63 | 128);
            else if (cp < 65536)
              dst(cp >> 12 & 15 | 224), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            else
              dst(cp >> 18 & 7 | 240), dst(cp >> 12 & 63 | 128), dst(cp >> 6 & 63 | 128), dst(cp & 63 | 128);
            cp = null;
          }
        };
        utfx2.decodeUTF8 = function(src, dst) {
          var a, b, c, d, fail = /* @__PURE__ */ __name(function(b2) {
            b2 = b2.slice(0, b2.indexOf(null));
            var err = Error(b2.toString());
            err.name = "TruncatedError";
            err["bytes"] = b2;
            throw err;
          }, "fail");
          while ((a = src()) !== null) {
            if ((a & 128) === 0)
              dst(a);
            else if ((a & 224) === 192)
              (b = src()) === null && fail([a, b]), dst((a & 31) << 6 | b & 63);
            else if ((a & 240) === 224)
              ((b = src()) === null || (c = src()) === null) && fail([a, b, c]), dst((a & 15) << 12 | (b & 63) << 6 | c & 63);
            else if ((a & 248) === 240)
              ((b = src()) === null || (c = src()) === null || (d = src()) === null) && fail([a, b, c, d]), dst((a & 7) << 18 | (b & 63) << 12 | (c & 63) << 6 | d & 63);
            else throw RangeError("Illegal starting byte: " + a);
          }
        };
        utfx2.UTF16toUTF8 = function(src, dst) {
          var c1, c2 = null;
          while (true) {
            if ((c1 = c2 !== null ? c2 : src()) === null)
              break;
            if (c1 >= 55296 && c1 <= 57343) {
              if ((c2 = src()) !== null) {
                if (c2 >= 56320 && c2 <= 57343) {
                  dst((c1 - 55296) * 1024 + c2 - 56320 + 65536);
                  c2 = null;
                  continue;
                }
              }
            }
            dst(c1);
          }
          if (c2 !== null) dst(c2);
        };
        utfx2.UTF8toUTF16 = function(src, dst) {
          var cp = null;
          if (typeof src === "number")
            cp = src, src = /* @__PURE__ */ __name(function() {
              return null;
            }, "src");
          while (cp !== null || (cp = src()) !== null) {
            if (cp <= 65535)
              dst(cp);
            else
              cp -= 65536, dst((cp >> 10) + 55296), dst(cp % 1024 + 56320);
            cp = null;
          }
        };
        utfx2.encodeUTF16toUTF8 = function(src, dst) {
          utfx2.UTF16toUTF8(src, function(cp) {
            utfx2.encodeUTF8(cp, dst);
          });
        };
        utfx2.decodeUTF8toUTF16 = function(src, dst) {
          utfx2.decodeUTF8(src, function(cp) {
            utfx2.UTF8toUTF16(cp, dst);
          });
        };
        utfx2.calculateCodePoint = function(cp) {
          return cp < 128 ? 1 : cp < 2048 ? 2 : cp < 65536 ? 3 : 4;
        };
        utfx2.calculateUTF8 = function(src) {
          var cp, l = 0;
          while ((cp = src()) !== null)
            l += utfx2.calculateCodePoint(cp);
          return l;
        };
        utfx2.calculateUTF16asUTF8 = function(src) {
          var n = 0, l = 0;
          utfx2.UTF16toUTF8(src, function(cp) {
            ++n;
            l += utfx2.calculateCodePoint(cp);
          });
          return [n, l];
        };
        return utfx2;
      }();
      Date.now = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      var BCRYPT_SALT_LEN = 16;
      var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
      var BLOWFISH_NUM_ROUNDS = 16;
      var MAX_EXECUTION_TIME = 100;
      var P_ORIG = [
        608135816,
        2242054355,
        320440878,
        57701188,
        2752067618,
        698298832,
        137296536,
        3964562569,
        1160258022,
        953160567,
        3193202383,
        887688300,
        3232508343,
        3380367581,
        1065670069,
        3041331479,
        2450970073,
        2306472731
      ];
      var S_ORIG = [
        3509652390,
        2564797868,
        805139163,
        3491422135,
        3101798381,
        1780907670,
        3128725573,
        4046225305,
        614570311,
        3012652279,
        134345442,
        2240740374,
        1667834072,
        1901547113,
        2757295779,
        4103290238,
        227898511,
        1921955416,
        1904987480,
        2182433518,
        2069144605,
        3260701109,
        2620446009,
        720527379,
        3318853667,
        677414384,
        3393288472,
        3101374703,
        2390351024,
        1614419982,
        1822297739,
        2954791486,
        3608508353,
        3174124327,
        2024746970,
        1432378464,
        3864339955,
        2857741204,
        1464375394,
        1676153920,
        1439316330,
        715854006,
        3033291828,
        289532110,
        2706671279,
        2087905683,
        3018724369,
        1668267050,
        732546397,
        1947742710,
        3462151702,
        2609353502,
        2950085171,
        1814351708,
        2050118529,
        680887927,
        999245976,
        1800124847,
        3300911131,
        1713906067,
        1641548236,
        4213287313,
        1216130144,
        1575780402,
        4018429277,
        3917837745,
        3693486850,
        3949271944,
        596196993,
        3549867205,
        258830323,
        2213823033,
        772490370,
        2760122372,
        1774776394,
        2652871518,
        566650946,
        4142492826,
        1728879713,
        2882767088,
        1783734482,
        3629395816,
        2517608232,
        2874225571,
        1861159788,
        326777828,
        3124490320,
        2130389656,
        2716951837,
        967770486,
        1724537150,
        2185432712,
        2364442137,
        1164943284,
        2105845187,
        998989502,
        3765401048,
        2244026483,
        1075463327,
        1455516326,
        1322494562,
        910128902,
        469688178,
        1117454909,
        936433444,
        3490320968,
        3675253459,
        1240580251,
        122909385,
        2157517691,
        634681816,
        4142456567,
        3825094682,
        3061402683,
        2540495037,
        79693498,
        3249098678,
        1084186820,
        1583128258,
        426386531,
        1761308591,
        1047286709,
        322548459,
        995290223,
        1845252383,
        2603652396,
        3431023940,
        2942221577,
        3202600964,
        3727903485,
        1712269319,
        422464435,
        3234572375,
        1170764815,
        3523960633,
        3117677531,
        1434042557,
        442511882,
        3600875718,
        1076654713,
        1738483198,
        4213154764,
        2393238008,
        3677496056,
        1014306527,
        4251020053,
        793779912,
        2902807211,
        842905082,
        4246964064,
        1395751752,
        1040244610,
        2656851899,
        3396308128,
        445077038,
        3742853595,
        3577915638,
        679411651,
        2892444358,
        2354009459,
        1767581616,
        3150600392,
        3791627101,
        3102740896,
        284835224,
        4246832056,
        1258075500,
        768725851,
        2589189241,
        3069724005,
        3532540348,
        1274779536,
        3789419226,
        2764799539,
        1660621633,
        3471099624,
        4011903706,
        913787905,
        3497959166,
        737222580,
        2514213453,
        2928710040,
        3937242737,
        1804850592,
        3499020752,
        2949064160,
        2386320175,
        2390070455,
        2415321851,
        4061277028,
        2290661394,
        2416832540,
        1336762016,
        1754252060,
        3520065937,
        3014181293,
        791618072,
        3188594551,
        3933548030,
        2332172193,
        3852520463,
        3043980520,
        413987798,
        3465142937,
        3030929376,
        4245938359,
        2093235073,
        3534596313,
        375366246,
        2157278981,
        2479649556,
        555357303,
        3870105701,
        2008414854,
        3344188149,
        4221384143,
        3956125452,
        2067696032,
        3594591187,
        2921233993,
        2428461,
        544322398,
        577241275,
        1471733935,
        610547355,
        4027169054,
        1432588573,
        1507829418,
        2025931657,
        3646575487,
        545086370,
        48609733,
        2200306550,
        1653985193,
        298326376,
        1316178497,
        3007786442,
        2064951626,
        458293330,
        2589141269,
        3591329599,
        3164325604,
        727753846,
        2179363840,
        146436021,
        1461446943,
        4069977195,
        705550613,
        3059967265,
        3887724982,
        4281599278,
        3313849956,
        1404054877,
        2845806497,
        146425753,
        1854211946,
        1266315497,
        3048417604,
        3681880366,
        3289982499,
        290971e4,
        1235738493,
        2632868024,
        2414719590,
        3970600049,
        1771706367,
        1449415276,
        3266420449,
        422970021,
        1963543593,
        2690192192,
        3826793022,
        1062508698,
        1531092325,
        1804592342,
        2583117782,
        2714934279,
        4024971509,
        1294809318,
        4028980673,
        1289560198,
        2221992742,
        1669523910,
        35572830,
        157838143,
        1052438473,
        1016535060,
        1802137761,
        1753167236,
        1386275462,
        3080475397,
        2857371447,
        1040679964,
        2145300060,
        2390574316,
        1461121720,
        2956646967,
        4031777805,
        4028374788,
        33600511,
        2920084762,
        1018524850,
        629373528,
        3691585981,
        3515945977,
        2091462646,
        2486323059,
        586499841,
        988145025,
        935516892,
        3367335476,
        2599673255,
        2839830854,
        265290510,
        3972581182,
        2759138881,
        3795373465,
        1005194799,
        847297441,
        406762289,
        1314163512,
        1332590856,
        1866599683,
        4127851711,
        750260880,
        613907577,
        1450815602,
        3165620655,
        3734664991,
        3650291728,
        3012275730,
        3704569646,
        1427272223,
        778793252,
        1343938022,
        2676280711,
        2052605720,
        1946737175,
        3164576444,
        3914038668,
        3967478842,
        3682934266,
        1661551462,
        3294938066,
        4011595847,
        840292616,
        3712170807,
        616741398,
        312560963,
        711312465,
        1351876610,
        322626781,
        1910503582,
        271666773,
        2175563734,
        1594956187,
        70604529,
        3617834859,
        1007753275,
        1495573769,
        4069517037,
        2549218298,
        2663038764,
        504708206,
        2263041392,
        3941167025,
        2249088522,
        1514023603,
        1998579484,
        1312622330,
        694541497,
        2582060303,
        2151582166,
        1382467621,
        776784248,
        2618340202,
        3323268794,
        2497899128,
        2784771155,
        503983604,
        4076293799,
        907881277,
        423175695,
        432175456,
        1378068232,
        4145222326,
        3954048622,
        3938656102,
        3820766613,
        2793130115,
        2977904593,
        26017576,
        3274890735,
        3194772133,
        1700274565,
        1756076034,
        4006520079,
        3677328699,
        720338349,
        1533947780,
        354530856,
        688349552,
        3973924725,
        1637815568,
        332179504,
        3949051286,
        53804574,
        2852348879,
        3044236432,
        1282449977,
        3583942155,
        3416972820,
        4006381244,
        1617046695,
        2628476075,
        3002303598,
        1686838959,
        431878346,
        2686675385,
        1700445008,
        1080580658,
        1009431731,
        832498133,
        3223435511,
        2605976345,
        2271191193,
        2516031870,
        1648197032,
        4164389018,
        2548247927,
        300782431,
        375919233,
        238389289,
        3353747414,
        2531188641,
        2019080857,
        1475708069,
        455242339,
        2609103871,
        448939670,
        3451063019,
        1395535956,
        2413381860,
        1841049896,
        1491858159,
        885456874,
        4264095073,
        4001119347,
        1565136089,
        3898914787,
        1108368660,
        540939232,
        1173283510,
        2745871338,
        3681308437,
        4207628240,
        3343053890,
        4016749493,
        1699691293,
        1103962373,
        3625875870,
        2256883143,
        3830138730,
        1031889488,
        3479347698,
        1535977030,
        4236805024,
        3251091107,
        2132092099,
        1774941330,
        1199868427,
        1452454533,
        157007616,
        2904115357,
        342012276,
        595725824,
        1480756522,
        206960106,
        497939518,
        591360097,
        863170706,
        2375253569,
        3596610801,
        1814182875,
        2094937945,
        3421402208,
        1082520231,
        3463918190,
        2785509508,
        435703966,
        3908032597,
        1641649973,
        2842273706,
        3305899714,
        1510255612,
        2148256476,
        2655287854,
        3276092548,
        4258621189,
        236887753,
        3681803219,
        274041037,
        1734335097,
        3815195456,
        3317970021,
        1899903192,
        1026095262,
        4050517792,
        356393447,
        2410691914,
        3873677099,
        3682840055,
        3913112168,
        2491498743,
        4132185628,
        2489919796,
        1091903735,
        1979897079,
        3170134830,
        3567386728,
        3557303409,
        857797738,
        1136121015,
        1342202287,
        507115054,
        2535736646,
        337727348,
        3213592640,
        1301675037,
        2528481711,
        1895095763,
        1721773893,
        3216771564,
        62756741,
        2142006736,
        835421444,
        2531993523,
        1442658625,
        3659876326,
        2882144922,
        676362277,
        1392781812,
        170690266,
        3921047035,
        1759253602,
        3611846912,
        1745797284,
        664899054,
        1329594018,
        3901205900,
        3045908486,
        2062866102,
        2865634940,
        3543621612,
        3464012697,
        1080764994,
        553557557,
        3656615353,
        3996768171,
        991055499,
        499776247,
        1265440854,
        648242737,
        3940784050,
        980351604,
        3713745714,
        1749149687,
        3396870395,
        4211799374,
        3640570775,
        1161844396,
        3125318951,
        1431517754,
        545492359,
        4268468663,
        3499529547,
        1437099964,
        2702547544,
        3433638243,
        2581715763,
        2787789398,
        1060185593,
        1593081372,
        2418618748,
        4260947970,
        69676912,
        2159744348,
        86519011,
        2512459080,
        3838209314,
        1220612927,
        3339683548,
        133810670,
        1090789135,
        1078426020,
        1569222167,
        845107691,
        3583754449,
        4072456591,
        1091646820,
        628848692,
        1613405280,
        3757631651,
        526609435,
        236106946,
        48312990,
        2942717905,
        3402727701,
        1797494240,
        859738849,
        992217954,
        4005476642,
        2243076622,
        3870952857,
        3732016268,
        765654824,
        3490871365,
        2511836413,
        1685915746,
        3888969200,
        1414112111,
        2273134842,
        3281911079,
        4080962846,
        172450625,
        2569994100,
        980381355,
        4109958455,
        2819808352,
        2716589560,
        2568741196,
        3681446669,
        3329971472,
        1835478071,
        660984891,
        3704678404,
        4045999559,
        3422617507,
        3040415634,
        1762651403,
        1719377915,
        3470491036,
        2693910283,
        3642056355,
        3138596744,
        1364962596,
        2073328063,
        1983633131,
        926494387,
        3423689081,
        2150032023,
        4096667949,
        1749200295,
        3328846651,
        309677260,
        2016342300,
        1779581495,
        3079819751,
        111262694,
        1274766160,
        443224088,
        298511866,
        1025883608,
        3806446537,
        1145181785,
        168956806,
        3641502830,
        3584813610,
        1689216846,
        3666258015,
        3200248200,
        1692713982,
        2646376535,
        4042768518,
        1618508792,
        1610833997,
        3523052358,
        4130873264,
        2001055236,
        3610705100,
        2202168115,
        4028541809,
        2961195399,
        1006657119,
        2006996926,
        3186142756,
        1430667929,
        3210227297,
        1314452623,
        4074634658,
        4101304120,
        2273951170,
        1399257539,
        3367210612,
        3027628629,
        1190975929,
        2062231137,
        2333990788,
        2221543033,
        2438960610,
        1181637006,
        548689776,
        2362791313,
        3372408396,
        3104550113,
        3145860560,
        296247880,
        1970579870,
        3078560182,
        3769228297,
        1714227617,
        3291629107,
        3898220290,
        166772364,
        1251581989,
        493813264,
        448347421,
        195405023,
        2709975567,
        677966185,
        3703036547,
        1463355134,
        2715995803,
        1338867538,
        1343315457,
        2802222074,
        2684532164,
        233230375,
        2599980071,
        2000651841,
        3277868038,
        1638401717,
        4028070440,
        3237316320,
        6314154,
        819756386,
        300326615,
        590932579,
        1405279636,
        3267499572,
        3150704214,
        2428286686,
        3959192993,
        3461946742,
        1862657033,
        1266418056,
        963775037,
        2089974820,
        2263052895,
        1917689273,
        448879540,
        3550394620,
        3981727096,
        150775221,
        3627908307,
        1303187396,
        508620638,
        2975983352,
        2726630617,
        1817252668,
        1876281319,
        1457606340,
        908771278,
        3720792119,
        3617206836,
        2455994898,
        1729034894,
        1080033504,
        976866871,
        3556439503,
        2881648439,
        1522871579,
        1555064734,
        1336096578,
        3548522304,
        2579274686,
        3574697629,
        3205460757,
        3593280638,
        3338716283,
        3079412587,
        564236357,
        2993598910,
        1781952180,
        1464380207,
        3163844217,
        3332601554,
        1699332808,
        1393555694,
        1183702653,
        3581086237,
        1288719814,
        691649499,
        2847557200,
        2895455976,
        3193889540,
        2717570544,
        1781354906,
        1676643554,
        2592534050,
        3230253752,
        1126444790,
        2770207658,
        2633158820,
        2210423226,
        2615765581,
        2414155088,
        3127139286,
        673620729,
        2805611233,
        1269405062,
        4015350505,
        3341807571,
        4149409754,
        1057255273,
        2012875353,
        2162469141,
        2276492801,
        2601117357,
        993977747,
        3918593370,
        2654263191,
        753973209,
        36408145,
        2530585658,
        25011837,
        3520020182,
        2088578344,
        530523599,
        2918365339,
        1524020338,
        1518925132,
        3760827505,
        3759777254,
        1202760957,
        3985898139,
        3906192525,
        674977740,
        4174734889,
        2031300136,
        2019492241,
        3983892565,
        4153806404,
        3822280332,
        352677332,
        2297720250,
        60907813,
        90501309,
        3286998549,
        1016092578,
        2535922412,
        2839152426,
        457141659,
        509813237,
        4120667899,
        652014361,
        1966332200,
        2975202805,
        55981186,
        2327461051,
        676427537,
        3255491064,
        2882294119,
        3433927263,
        1307055953,
        942726286,
        933058658,
        2468411793,
        3933900994,
        4215176142,
        1361170020,
        2001714738,
        2830558078,
        3274259782,
        1222529897,
        1679025792,
        2729314320,
        3714953764,
        1770335741,
        151462246,
        3013232138,
        1682292957,
        1483529935,
        471910574,
        1539241949,
        458788160,
        3436315007,
        1807016891,
        3718408830,
        978976581,
        1043663428,
        3165965781,
        1927990952,
        4200891579,
        2372276910,
        3208408903,
        3533431907,
        1412390302,
        2931980059,
        4132332400,
        1947078029,
        3881505623,
        4168226417,
        2941484381,
        1077988104,
        1320477388,
        886195818,
        18198404,
        3786409e3,
        2509781533,
        112762804,
        3463356488,
        1866414978,
        891333506,
        18488651,
        661792760,
        1628790961,
        3885187036,
        3141171499,
        876946877,
        2693282273,
        1372485963,
        791857591,
        2686433993,
        3759982718,
        3167212022,
        3472953795,
        2716379847,
        445679433,
        3561995674,
        3504004811,
        3574258232,
        54117162,
        3331405415,
        2381918588,
        3769707343,
        4154350007,
        1140177722,
        4074052095,
        668550556,
        3214352940,
        367459370,
        261225585,
        2610173221,
        4209349473,
        3468074219,
        3265815641,
        314222801,
        3066103646,
        3808782860,
        282218597,
        3406013506,
        3773591054,
        379116347,
        1285071038,
        846784868,
        2669647154,
        3771962079,
        3550491691,
        2305946142,
        453669953,
        1268987020,
        3317592352,
        3279303384,
        3744833421,
        2610507566,
        3859509063,
        266596637,
        3847019092,
        517658769,
        3462560207,
        3443424879,
        370717030,
        4247526661,
        2224018117,
        4143653529,
        4112773975,
        2788324899,
        2477274417,
        1456262402,
        2901442914,
        1517677493,
        1846949527,
        2295493580,
        3734397586,
        2176403920,
        1280348187,
        1908823572,
        3871786941,
        846861322,
        1172426758,
        3287448474,
        3383383037,
        1655181056,
        3139813346,
        901632758,
        1897031941,
        2986607138,
        3066810236,
        3447102507,
        1393639104,
        373351379,
        950779232,
        625454576,
        3124240540,
        4148612726,
        2007998917,
        544563296,
        2244738638,
        2330496472,
        2058025392,
        1291430526,
        424198748,
        50039436,
        29584100,
        3605783033,
        2429876329,
        2791104160,
        1057563949,
        3255363231,
        3075367218,
        3463963227,
        1469046755,
        985887462
      ];
      var C_ORIG = [
        1332899944,
        1700884034,
        1701343084,
        1684370003,
        1668446532,
        1869963892
      ];
      function _encipher(lr, off2, P, S) {
        var n, l = lr[off2], r = lr[off2 + 1];
        l ^= P[0];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[1];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[2];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[3];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[4];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[5];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[6];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[7];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[8];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[9];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[10];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[11];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[12];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[13];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[14];
        n = S[l >>> 24];
        n += S[256 | l >> 16 & 255];
        n ^= S[512 | l >> 8 & 255];
        n += S[768 | l & 255];
        r ^= n ^ P[15];
        n = S[r >>> 24];
        n += S[256 | r >> 16 & 255];
        n ^= S[512 | r >> 8 & 255];
        n += S[768 | r & 255];
        l ^= n ^ P[16];
        lr[off2] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
        lr[off2 + 1] = l;
        return lr;
      }
      __name(_encipher, "_encipher");
      function _streamtoword(data, offp) {
        for (var i = 0, word = 0; i < 4; ++i)
          word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
        return { key: word, offp };
      }
      __name(_streamtoword, "_streamtoword");
      function _key(key, P, S) {
        var offset = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
        for (i = 0; i < plen; i += 2)
          lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      __name(_key, "_key");
      function _ekskey(data, key, P, S) {
        var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
        for (var i = 0; i < plen; i++)
          sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
        offp = 0;
        for (i = 0; i < plen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
        for (i = 0; i < slen; i += 2)
          sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
      }
      __name(_ekskey, "_ekskey");
      function _crypt(b, salt, rounds, callback, progressCallback) {
        var cdata = C_ORIG.slice(), clen = cdata.length, err;
        if (rounds < 4 || rounds > 31) {
          err = Error("Illegal number of rounds (4-31): " + rounds);
          if (callback) {
            nextTick2(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.length !== BCRYPT_SALT_LEN) {
          err = Error("Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN);
          if (callback) {
            nextTick2(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        rounds = 1 << rounds >>> 0;
        var P, S, i = 0, j;
        if (Int32Array) {
          P = new Int32Array(P_ORIG);
          S = new Int32Array(S_ORIG);
        } else {
          P = P_ORIG.slice();
          S = S_ORIG.slice();
        }
        _ekskey(salt, b, P, S);
        function next() {
          if (progressCallback)
            progressCallback(i / rounds);
          if (i < rounds) {
            var start = Date.now();
            for (; i < rounds; ) {
              i = i + 1;
              _key(b, P, S);
              _key(salt, P, S);
              if (Date.now() - start > MAX_EXECUTION_TIME)
                break;
            }
          } else {
            for (i = 0; i < 64; i++)
              for (j = 0; j < clen >> 1; j++)
                _encipher(cdata, j << 1, P, S);
            var ret = [];
            for (i = 0; i < clen; i++)
              ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
            if (callback) {
              callback(null, ret);
              return;
            } else
              return ret;
          }
          if (callback)
            nextTick2(next);
        }
        __name(next, "next");
        if (typeof callback !== "undefined") {
          next();
        } else {
          var res;
          while (true)
            if (typeof (res = next()) !== "undefined")
              return res || [];
        }
      }
      __name(_crypt, "_crypt");
      function _hash(s, salt, callback, progressCallback) {
        var err;
        if (typeof s !== "string" || typeof salt !== "string") {
          err = Error("Invalid string / salt: Not a string");
          if (callback) {
            nextTick2(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var minor, offset;
        if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
          err = Error("Invalid salt version: " + salt.substring(0, 2));
          if (callback) {
            nextTick2(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        if (salt.charAt(2) === "$")
          minor = String.fromCharCode(0), offset = 3;
        else {
          minor = salt.charAt(2);
          if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
            err = Error("Invalid salt revision: " + salt.substring(2, 4));
            if (callback) {
              nextTick2(callback.bind(this, err));
              return;
            } else
              throw err;
          }
          offset = 4;
        }
        if (salt.charAt(offset + 2) > "$") {
          err = Error("Missing salt rounds");
          if (callback) {
            nextTick2(callback.bind(this, err));
            return;
          } else
            throw err;
        }
        var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
        s += minor >= "a" ? "\0" : "";
        var passwordb = stringToBytes(s), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
        function finish(bytes) {
          var res = [];
          res.push("$2");
          if (minor >= "a")
            res.push(minor);
          res.push("$");
          if (rounds < 10)
            res.push("0");
          res.push(rounds.toString());
          res.push("$");
          res.push(base64_encode(saltb, saltb.length));
          res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
          return res.join("");
        }
        __name(finish, "finish");
        if (typeof callback == "undefined")
          return finish(_crypt(passwordb, saltb, rounds));
        else {
          _crypt(passwordb, saltb, rounds, function(err2, bytes) {
            if (err2)
              callback(err2, null);
            else
              callback(null, finish(bytes));
          }, progressCallback);
        }
      }
      __name(_hash, "_hash");
      bcrypt2.encodeBase64 = base64_encode;
      bcrypt2.decodeBase64 = base64_decode;
      return bcrypt2;
    });
  }
});

// node-built-in-modules:buffer
import libDefault from "buffer";
var require_buffer = __commonJS({
  "node-built-in-modules:buffer"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// ../node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "../node_modules/safe-buffer/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var buffer = require_buffer();
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node-built-in-modules:stream
import libDefault2 from "stream";
var require_stream = __commonJS({
  "node-built-in-modules:stream"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/util/legacy-types.mjs
var isRegExp, isDate, isBoolean, isNull, isNullOrUndefined, isNumber, isString, isSymbol, isUndefined, isFunction, isBuffer, isObject, isError, isPrimitive;
var init_legacy_types = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/util/legacy-types.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    isRegExp = /* @__PURE__ */ __name((val) => val instanceof RegExp, "isRegExp");
    isDate = /* @__PURE__ */ __name((val) => val instanceof Date, "isDate");
    isBoolean = /* @__PURE__ */ __name((val) => typeof val === "boolean", "isBoolean");
    isNull = /* @__PURE__ */ __name((val) => val === null, "isNull");
    isNullOrUndefined = /* @__PURE__ */ __name((val) => val === null || val === void 0, "isNullOrUndefined");
    isNumber = /* @__PURE__ */ __name((val) => typeof val === "number", "isNumber");
    isString = /* @__PURE__ */ __name((val) => typeof val === "string", "isString");
    isSymbol = /* @__PURE__ */ __name((val) => typeof val === "symbol", "isSymbol");
    isUndefined = /* @__PURE__ */ __name((val) => val === void 0, "isUndefined");
    isFunction = /* @__PURE__ */ __name((val) => typeof val === "function", "isFunction");
    isBuffer = /* @__PURE__ */ __name((val) => {
      return val && typeof val === "object" && typeof val.copy === "function" && typeof val.fill === "function" && typeof val.readUInt8 === "function";
    }, "isBuffer");
    isObject = /* @__PURE__ */ __name((val) => val !== null && typeof val === "object" && Object.getPrototypeOf(val).isPrototypeOf(Object), "isObject");
    isError = /* @__PURE__ */ __name((val) => val instanceof Error, "isError");
    isPrimitive = /* @__PURE__ */ __name((val) => {
      if (typeof val === "object") {
        return val === null;
      }
      return typeof val !== "function";
    }, "isPrimitive");
  }
});

// ../node_modules/unenv/dist/runtime/node/internal/util/log.mjs
var init_log = __esm({
  "../node_modules/unenv/dist/runtime/node/internal/util/log.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../node_modules/unenv/dist/runtime/node/util.mjs
import types from "node:util/types";
import { default as default2 } from "node:util/types";
var TextDecoder2, TextEncoder2, _errnoException, _exceptionWithHostPort, getSystemErrorMap, getSystemErrorName, parseEnv, styleText;
var init_util = __esm({
  "../node_modules/unenv/dist/runtime/node/util.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    init_legacy_types();
    init_log();
    TextDecoder2 = globalThis.TextDecoder;
    TextEncoder2 = globalThis.TextEncoder;
    _errnoException = /* @__PURE__ */ notImplemented("util._errnoException");
    _exceptionWithHostPort = /* @__PURE__ */ notImplemented("util._exceptionWithHostPort");
    getSystemErrorMap = /* @__PURE__ */ notImplemented("util.getSystemErrorMap");
    getSystemErrorName = /* @__PURE__ */ notImplemented("util.getSystemErrorName");
    parseEnv = /* @__PURE__ */ notImplemented("util.parseEnv");
    styleText = /* @__PURE__ */ notImplemented("util.styleText");
  }
});

// ../node_modules/@cloudflare/unenv-preset/dist/runtime/node/util.mjs
var workerdUtil, MIMEParams, MIMEType, TextDecoder3, TextEncoder3, _extend, aborted, callbackify, debug3, debuglog, deprecate, format, formatWithOptions, getCallSite, inherits, inspect, isArray, isDeepStrictEqual, log3, parseArgs, promisify, stripVTControlCharacters, toUSVString, transferableAbortController, transferableAbortSignal, types2, util_default;
var init_util2 = __esm({
  "../node_modules/@cloudflare/unenv-preset/dist/runtime/node/util.mjs"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_util();
    workerdUtil = process.getBuiltinModule("node:util");
    ({
      MIMEParams,
      MIMEType,
      TextDecoder: TextDecoder3,
      TextEncoder: TextEncoder3,
      _extend: (
        // @ts-expect-error missing types?
        _extend
      ),
      aborted,
      callbackify,
      debug: debug3,
      debuglog,
      deprecate,
      format,
      formatWithOptions,
      getCallSite: (
        // @ts-expect-error unknown type
        getCallSite
      ),
      inherits,
      inspect,
      isArray,
      isDeepStrictEqual,
      log: log3,
      parseArgs,
      promisify,
      stripVTControlCharacters,
      toUSVString,
      transferableAbortController,
      transferableAbortSignal
    } = workerdUtil);
    types2 = workerdUtil.types;
    util_default = {
      /**
       * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
       */
      _errnoException,
      _exceptionWithHostPort,
      // @ts-expect-error unenv has unknown type
      getSystemErrorMap,
      // @ts-expect-error unenv has unknown type
      getSystemErrorName,
      isBoolean,
      isBuffer,
      isDate,
      isError,
      isFunction,
      isNull,
      isNullOrUndefined,
      isNumber,
      isObject,
      isPrimitive,
      isRegExp,
      isString,
      isSymbol,
      isUndefined,
      // @ts-expect-error unenv has unknown type
      parseEnv,
      // @ts-expect-error unenv has unknown type
      styleText,
      /**
       * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
       */
      _extend,
      aborted,
      callbackify,
      debug: debug3,
      debuglog,
      deprecate,
      format,
      formatWithOptions,
      getCallSite,
      inherits,
      inspect,
      isArray,
      isDeepStrictEqual,
      log: log3,
      MIMEParams,
      MIMEType,
      parseArgs,
      promisify,
      stripVTControlCharacters,
      TextDecoder: TextDecoder3,
      TextEncoder: TextEncoder3,
      toUSVString,
      transferableAbortController,
      transferableAbortSignal,
      // special-cased deep merged symbols
      types: types2
    };
  }
});

// node-built-in-modules:util
var require_util = __commonJS({
  "node-built-in-modules:util"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_util2();
    module.exports = util_default;
  }
});

// ../node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "../node_modules/jws/lib/data-stream.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var Stream = require_stream();
    var util = require_util();
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer2.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer2.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick(function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }.bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    __name(DataStream, "DataStream");
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = /* @__PURE__ */ __name(function write(data) {
      this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data)]);
      this.emit("data", data);
    }, "write");
    DataStream.prototype.end = /* @__PURE__ */ __name(function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    }, "end");
    module.exports = DataStream;
  }
});

// ../node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "../node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    __name(getParamSize, "getParamSize");
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    __name(getParamBytesForAlg, "getParamBytesForAlg");
    module.exports = getParamBytesForAlg;
  }
});

// ../node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "../node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    __name(base64Url, "base64Url");
    function signatureAsBuffer(signature) {
      if (Buffer2.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer2.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    __name(signatureAsBuffer, "signatureAsBuffer");
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    __name(derToJose, "derToJose");
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    __name(countPadding, "countPadding");
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    __name(joseToDer, "joseToDer");
    module.exports = {
      derToJose,
      joseToDer
    };
  }
});

// ../node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "../node_modules/buffer-equal-constant-time/index.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_buffer().Buffer;
    var SlowBuffer = require_buffer().SlowBuffer;
    module.exports = bufferEq;
    function bufferEq(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      var c = 0;
      for (var i = 0; i < a.length; i++) {
        c |= a[i] ^ b[i];
      }
      return c === 0;
    }
    __name(bufferEq, "bufferEq");
    bufferEq.install = function() {
      Buffer2.prototype.equal = SlowBuffer.prototype.equal = /* @__PURE__ */ __name(function equal(that) {
        return bufferEq(this, that);
      }, "equal");
    };
    var origBufEqual = Buffer2.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer2.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// ../node_modules/jwa/index.js
var require_jwa = __commonJS({
  "../node_modules/jwa/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var crypto = require_crypto();
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = require_util();
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    __name(checkIsPublicKey, "checkIsPublicKey");
    function checkIsPrivateKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    __name(checkIsPrivateKey, "checkIsPrivateKey");
    function checkIsSecretKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    __name(checkIsSecretKey, "checkIsSecretKey");
    function fromBase64(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    __name(fromBase64, "fromBase64");
    function toBase64(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i = 0; i < padding; ++i) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    __name(toBase64, "toBase64");
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    __name(typeError, "typeError");
    function bufferOrString(obj) {
      return Buffer2.isBuffer(obj) || typeof obj === "string";
    }
    __name(bufferOrString, "bufferOrString");
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    __name(normalizeInput, "normalizeInput");
    function createHmacSigner(bits) {
      return /* @__PURE__ */ __name(function sign2(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      }, "sign");
    }
    __name(createHmacSigner, "createHmacSigner");
    var bufferEqual;
    var timingSafeEqual2 = "timingSafeEqual" in crypto ? /* @__PURE__ */ __name(function timingSafeEqual3(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      return crypto.timingSafeEqual(a, b);
    }, "timingSafeEqual") : /* @__PURE__ */ __name(function timingSafeEqual3(a, b) {
      if (!bufferEqual) {
        bufferEqual = require_buffer_equal_constant_time();
      }
      return bufferEqual(a, b);
    }, "timingSafeEqual");
    function createHmacVerifier(bits) {
      return /* @__PURE__ */ __name(function verify2(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual2(Buffer2.from(signature), Buffer2.from(computedSig));
      }, "verify");
    }
    __name(createHmacVerifier, "createHmacVerifier");
    function createKeySigner(bits) {
      return /* @__PURE__ */ __name(function sign2(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      }, "sign");
    }
    __name(createKeySigner, "createKeySigner");
    function createKeyVerifier(bits) {
      return /* @__PURE__ */ __name(function verify2(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      }, "verify");
    }
    __name(createKeyVerifier, "createKeyVerifier");
    function createPSSKeySigner(bits) {
      return /* @__PURE__ */ __name(function sign2(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      }, "sign");
    }
    __name(createPSSKeySigner, "createPSSKeySigner");
    function createPSSKeyVerifier(bits) {
      return /* @__PURE__ */ __name(function verify2(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      }, "verify");
    }
    __name(createPSSKeyVerifier, "createPSSKeyVerifier");
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return /* @__PURE__ */ __name(function sign2() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      }, "sign");
    }
    __name(createECDSASigner, "createECDSASigner");
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return /* @__PURE__ */ __name(function verify2(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      }, "verify");
    }
    __name(createECDSAVerifer, "createECDSAVerifer");
    function createNoneSigner() {
      return /* @__PURE__ */ __name(function sign2() {
        return "";
      }, "sign");
    }
    __name(createNoneSigner, "createNoneSigner");
    function createNoneVerifier() {
      return /* @__PURE__ */ __name(function verify2(thing, signature) {
        return signature === "";
      }, "verify");
    }
    __name(createNoneVerifier, "createNoneVerifier");
    module.exports = /* @__PURE__ */ __name(function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match2 = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
      if (!match2)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match2[1] || match2[3]).toLowerCase();
      var bits = match2[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    }, "jwa");
  }
});

// ../node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "../node_modules/jws/lib/tostring.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_buffer().Buffer;
    module.exports = /* @__PURE__ */ __name(function toString3(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer2.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    }, "toString");
  }
});

// ../node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "../node_modules/jws/lib/sign-stream.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require_stream();
    var toString3 = require_tostring();
    var util = require_util();
    function base64url(string, encoding) {
      return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    __name(base64url, "base64url");
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString3(header), "binary");
      var encodedPayload = base64url(toString3(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    __name(jwsSecuredInput, "jwsSecuredInput");
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    __name(jwsSign, "jwsSign");
    function SignStream(opts) {
      var secret = opts.secret || opts.privateKey || opts.key;
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }.bind(this));
      this.payload.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }.bind(this));
    }
    __name(SignStream, "SignStream");
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = /* @__PURE__ */ __name(function sign2() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    }, "sign");
    SignStream.sign = jwsSign;
    module.exports = SignStream;
  }
});

// ../node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "../node_modules/jws/lib/verify-stream.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require_stream();
    var toString3 = require_tostring();
    var util = require_util();
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject3(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    __name(isObject3, "isObject");
    function safeJsonParse(thing) {
      if (isObject3(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e) {
        return void 0;
      }
    }
    __name(safeJsonParse, "safeJsonParse");
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
    }
    __name(headerFromJWS, "headerFromJWS");
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    __name(securedInputFromJWS, "securedInputFromJWS");
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    __name(signatureFromJWS, "signatureFromJWS");
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer2.from(payload, "base64").toString(encoding);
    }
    __name(payloadFromJWS, "payloadFromJWS");
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    __name(isValidJws, "isValidJws");
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString3(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    __name(jwsVerify, "jwsVerify");
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString3(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    __name(jwsDecode, "jwsDecode");
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret || opts.publicKey || opts.key;
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }.bind(this));
      this.signature.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }.bind(this));
    }
    __name(VerifyStream, "VerifyStream");
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = /* @__PURE__ */ __name(function verify2() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    }, "verify");
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module.exports = VerifyStream;
  }
});

// ../node_modules/jws/index.js
var require_jws = __commonJS({
  "../node_modules/jws/index.js"(exports) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports.ALGORITHMS = ALGORITHMS;
    exports.sign = SignStream.sign;
    exports.verify = VerifyStream.verify;
    exports.decode = VerifyStream.decode;
    exports.isValid = VerifyStream.isValid;
    exports.createSign = /* @__PURE__ */ __name(function createSign2(opts) {
      return new SignStream(opts);
    }, "createSign");
    exports.createVerify = /* @__PURE__ */ __name(function createVerify2(opts) {
      return new VerifyStream(opts);
    }, "createVerify");
  }
});

// ../node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS({
  "../node_modules/jsonwebtoken/decode.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var jws = require_jws();
    module.exports = function(jwt2, options) {
      options = options || {};
      var decoded = jws.decode(jwt2, options);
      if (!decoded) {
        return null;
      }
      var payload = decoded.payload;
      if (typeof payload === "string") {
        try {
          var obj = JSON.parse(payload);
          if (obj !== null && typeof obj === "object") {
            payload = obj;
          }
        } catch (e) {
        }
      }
      if (options.complete === true) {
        return {
          header: decoded.header,
          payload,
          signature: decoded.signature
        };
      }
      return payload;
    };
  }
});

// ../node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS({
  "../node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var JsonWebTokenError = /* @__PURE__ */ __name(function(message, error4) {
      Error.call(this, message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = "JsonWebTokenError";
      this.message = message;
      if (error4) this.inner = error4;
    }, "JsonWebTokenError");
    JsonWebTokenError.prototype = Object.create(Error.prototype);
    JsonWebTokenError.prototype.constructor = JsonWebTokenError;
    module.exports = JsonWebTokenError;
  }
});

// ../node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS({
  "../node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = /* @__PURE__ */ __name(function(message, date) {
      JsonWebTokenError.call(this, message);
      this.name = "NotBeforeError";
      this.date = date;
    }, "NotBeforeError");
    NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
    NotBeforeError.prototype.constructor = NotBeforeError;
    module.exports = NotBeforeError;
  }
});

// ../node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS({
  "../node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var JsonWebTokenError = require_JsonWebTokenError();
    var TokenExpiredError = /* @__PURE__ */ __name(function(message, expiredAt) {
      JsonWebTokenError.call(this, message);
      this.name = "TokenExpiredError";
      this.expiredAt = expiredAt;
    }, "TokenExpiredError");
    TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
    TokenExpiredError.prototype.constructor = TokenExpiredError;
    module.exports = TokenExpiredError;
  }
});

// ../node_modules/ms/index.js
var require_ms = __commonJS({
  "../node_modules/ms/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse2(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match2 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match2) {
        return;
      }
      var n = parseFloat(match2[1]);
      var type = (match2[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse2, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// ../node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS({
  "../node_modules/jsonwebtoken/lib/timespan.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ms = require_ms();
    module.exports = function(time3, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1e3);
      if (typeof time3 === "string") {
        var milliseconds = ms(time3);
        if (typeof milliseconds === "undefined") {
          return;
        }
        return Math.floor(timestamp + milliseconds / 1e3);
      } else if (typeof time3 === "number") {
        return timestamp + time3;
      } else {
        return;
      }
    };
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var debug4 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug4;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug4 = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = /* @__PURE__ */ __name((value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    }, "makeSafeRegex");
    var createToken = /* @__PURE__ */ __name((name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug4(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    }, "createToken");
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = /* @__PURE__ */ __name((options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    }, "parseOptions");
    module.exports = parseOptions;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = /* @__PURE__ */ __name((a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    }, "compareIdentifiers");
    var rcompareIdentifiers = /* @__PURE__ */ __name((a, b) => compareIdentifiers(b, a), "rcompareIdentifiers");
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var debug4 = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      static {
        __name(this, "SemVer");
      }
      constructor(version2, options) {
        options = parseOptions(options);
        if (version2 instanceof _SemVer) {
          if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
            return version2;
          } else {
            version2 = version2.version;
          }
        } else if (typeof version2 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
        }
        if (version2.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug4("SemVer", version2, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version2.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version2}`);
        }
        this.raw = version2;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug4("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug4("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug4("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release2, identifier, identifierBase) {
        if (release2.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match2 = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match2 || match2[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release2) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release2}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var parse2 = /* @__PURE__ */ __name((version2, options, throwErrors = false) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      try {
        return new SemVer(version2, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    }, "parse");
    module.exports = parse2;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/valid.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var parse2 = require_parse();
    var valid = /* @__PURE__ */ __name((version2, options) => {
      const v = parse2(version2, options);
      return v ? v.version : null;
    }, "valid");
    module.exports = valid;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/clean.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var parse2 = require_parse();
    var clean = /* @__PURE__ */ __name((version2, options) => {
      const s = parse2(version2.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    }, "clean");
    module.exports = clean;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/inc.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var inc = /* @__PURE__ */ __name((version2, release2, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version2 instanceof SemVer ? version2.version : version2,
          options
        ).inc(release2, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    }, "inc");
    module.exports = inc;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/diff.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var parse2 = require_parse();
    var diff = /* @__PURE__ */ __name((version1, version2) => {
      const v1 = parse2(version1, null, true);
      const v2 = parse2(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (lowVersion.compareMain(highVersion) === 0) {
          if (lowVersion.minor && !lowVersion.patch) {
            return "minor";
          }
          return "patch";
        }
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    }, "diff");
    module.exports = diff;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/major.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var major = /* @__PURE__ */ __name((a, loose) => new SemVer(a, loose).major, "major");
    module.exports = major;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/minor.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var minor = /* @__PURE__ */ __name((a, loose) => new SemVer(a, loose).minor, "minor");
    module.exports = minor;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/patch.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var patch = /* @__PURE__ */ __name((a, loose) => new SemVer(a, loose).patch, "patch");
    module.exports = patch;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/prerelease.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var parse2 = require_parse();
    var prerelease = /* @__PURE__ */ __name((version2, options) => {
      const parsed = parse2(version2, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    }, "prerelease");
    module.exports = prerelease;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var compare = /* @__PURE__ */ __name((a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose)), "compare");
    module.exports = compare;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/rcompare.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var rcompare = /* @__PURE__ */ __name((a, b, loose) => compare(b, a, loose), "rcompare");
    module.exports = rcompare;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/compare-loose.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var compareLoose = /* @__PURE__ */ __name((a, b) => compare(a, b, true), "compareLoose");
    module.exports = compareLoose;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/compare-build.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var compareBuild = /* @__PURE__ */ __name((a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    }, "compareBuild");
    module.exports = compareBuild;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/sort.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compareBuild = require_compare_build();
    var sort = /* @__PURE__ */ __name((list, loose) => list.sort((a, b) => compareBuild(a, b, loose)), "sort");
    module.exports = sort;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/rsort.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compareBuild = require_compare_build();
    var rsort = /* @__PURE__ */ __name((list, loose) => list.sort((a, b) => compareBuild(b, a, loose)), "rsort");
    module.exports = rsort;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var gt = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) > 0, "gt");
    module.exports = gt;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var lt = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) < 0, "lt");
    module.exports = lt;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var eq = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) === 0, "eq");
    module.exports = eq;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var neq = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) !== 0, "neq");
    module.exports = neq;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var gte = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) >= 0, "gte");
    module.exports = gte;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var lte = /* @__PURE__ */ __name((a, b, loose) => compare(a, b, loose) <= 0, "lte");
    module.exports = lte;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = /* @__PURE__ */ __name((a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    }, "cmp");
    module.exports = cmp;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/coerce.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var parse2 = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = /* @__PURE__ */ __name((version2, options) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      if (typeof version2 === "number") {
        version2 = String(version2);
      }
      if (typeof version2 !== "string") {
        return null;
      }
      options = options || {};
      let match2 = null;
      if (!options.rtl) {
        match2 = version2.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version2)) && (!match2 || match2.index + match2[0].length !== version2.length)) {
          if (!match2 || next.index + next[0].length !== match2.index + match2[0].length) {
            match2 = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match2 === null) {
        return null;
      }
      const major = match2[2];
      const minor = match2[3] || "0";
      const patch = match2[4] || "0";
      const prerelease = options.includePrerelease && match2[5] ? `-${match2[5]}` : "";
      const build = options.includePrerelease && match2[6] ? `+${match2[6]}` : "";
      return parse2(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    }, "coerce");
    module.exports = coerce;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var LRUCache = class {
      static {
        __name(this, "LRUCache");
      }
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      static {
        __name(this, "Range");
      }
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug4("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug4("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug4("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug4("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug4("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug4("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version2) {
        if (!version2) {
          return false;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version2, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug4 = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = /* @__PURE__ */ __name((c) => c.value === "<0.0.0-0", "isNullSet");
    var isAny = /* @__PURE__ */ __name((c) => c.value === "", "isAny");
    var isSatisfiable = /* @__PURE__ */ __name((comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    }, "isSatisfiable");
    var parseComparator = /* @__PURE__ */ __name((comp, options) => {
      debug4("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug4("caret", comp);
      comp = replaceTildes(comp, options);
      debug4("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug4("xrange", comp);
      comp = replaceStars(comp, options);
      debug4("stars", comp);
      return comp;
    }, "parseComparator");
    var isX = /* @__PURE__ */ __name((id) => !id || id.toLowerCase() === "x" || id === "*", "isX");
    var replaceTildes = /* @__PURE__ */ __name((comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    }, "replaceTildes");
    var replaceTilde = /* @__PURE__ */ __name((comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug4("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug4("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug4("tilde return", ret);
        return ret;
      });
    }, "replaceTilde");
    var replaceCarets = /* @__PURE__ */ __name((comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    }, "replaceCarets");
    var replaceCaret = /* @__PURE__ */ __name((comp, options) => {
      debug4("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug4("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug4("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug4("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug4("caret return", ret);
        return ret;
      });
    }, "replaceCaret");
    var replaceXRanges = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    }, "replaceXRanges");
    var replaceXRange = /* @__PURE__ */ __name((comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug4("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug4("xRange return", ret);
        return ret;
      });
    }, "replaceXRange");
    var replaceStars = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    }, "replaceStars");
    var replaceGTE0 = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    }, "replaceGTE0");
    var hyphenReplace = /* @__PURE__ */ __name((incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    }, "hyphenReplace");
    var testSet = /* @__PURE__ */ __name((set, version2, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version2)) {
          return false;
        }
      }
      if (version2.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug4(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }, "testSet");
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static {
        __name(this, "Comparator");
      }
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug4("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug4("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version2) {
        debug4("Comparator.test", version2, this.options.loose);
        if (this.semver === ANY || version2 === ANY) {
          return true;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version2, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug4 = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var satisfies = /* @__PURE__ */ __name((version2, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version2);
    }, "satisfies");
    module.exports = satisfies;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/to-comparators.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var toComparators = /* @__PURE__ */ __name((range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" ")), "toComparators");
    module.exports = toComparators;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = /* @__PURE__ */ __name((versions2, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions2.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    }, "maxSatisfying");
    module.exports = maxSatisfying;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = /* @__PURE__ */ __name((versions2, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions2.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    }, "minSatisfying");
    module.exports = minSatisfying;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/min-version.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = /* @__PURE__ */ __name((range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            /* istanbul ignore next */
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    }, "minVersion");
    module.exports = minVersion;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/valid.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var validRange = /* @__PURE__ */ __name((range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    }, "validRange");
    module.exports = validRange;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/outside.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = /* @__PURE__ */ __name((version2, range, hilo, options) => {
      version2 = new SemVer(version2, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version2, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
          return false;
        }
      }
      return true;
    }, "outside");
    module.exports = outside;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/gtr.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var outside = require_outside();
    var gtr = /* @__PURE__ */ __name((version2, range, options) => outside(version2, range, ">", options), "gtr");
    module.exports = gtr;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/ltr.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var outside = require_outside();
    var ltr = /* @__PURE__ */ __name((version2, range, options) => outside(version2, range, "<", options), "ltr");
    module.exports = ltr;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/intersects.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var intersects = /* @__PURE__ */ __name((r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    }, "intersects");
    module.exports = intersects;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/simplify.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var satisfies = require_satisfies();
    var compare = require_compare();
    module.exports = (versions2, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions2.sort((a, b) => compare(a, b, options));
      for (const version2 of v) {
        const included = satisfies(version2, range, options);
        if (included) {
          prev = version2;
          if (!first) {
            first = version2;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/ranges/subset.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = /* @__PURE__ */ __name((sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
      return true;
    }, "subset");
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = /* @__PURE__ */ __name((sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    }, "simpleSubset");
    var higherGT = /* @__PURE__ */ __name((a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    }, "higherGT");
    var lowerLT = /* @__PURE__ */ __name((a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    }, "lowerLT");
    module.exports = subset;
  }
});

// ../node_modules/jsonwebtoken/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "../node_modules/jsonwebtoken/node_modules/semver/index.js"(exports, module) {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var internalRe = require_re();
    var constants2 = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse2 = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse: parse2,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants2.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants2.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// ../node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
var require_asymmetricKeyDetailsSupported = __commonJS({
  "../node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var semver = require_semver2();
    module.exports = semver.satisfies(process.version, ">=15.7.0");
  }
});

// ../node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
var require_rsaPssKeyDetailsSupported = __commonJS({
  "../node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var semver = require_semver2();
    module.exports = semver.satisfies(process.version, ">=16.9.0");
  }
});

// ../node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
var require_validateAsymmetricKey = __commonJS({
  "../node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
    var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
    var allowedAlgorithmsForKeys = {
      "ec": ["ES256", "ES384", "ES512"],
      "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    };
    var allowedCurves = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
    module.exports = function(algorithm, key) {
      if (!algorithm || !key) return;
      const keyType = key.asymmetricKeyType;
      if (!keyType) return;
      const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
      if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
      }
      if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
      }
      if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch (keyType) {
          case "ec":
            const keyCurve = key.asymmetricKeyDetails.namedCurve;
            const allowedCurve = allowedCurves[algorithm];
            if (keyCurve !== allowedCurve) {
              throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
            }
            break;
          case "rsa-pss":
            if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
              const length = parseInt(algorithm.slice(-3), 10);
              const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
              if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
              }
              if (saltLength !== void 0 && saltLength > length >> 3) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
              }
            }
            break;
        }
      }
    };
  }
});

// ../node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS({
  "../node_modules/jsonwebtoken/lib/psSupported.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var semver = require_semver2();
    module.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
  }
});

// ../node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS({
  "../node_modules/jsonwebtoken/verify.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = require_NotBeforeError();
    var TokenExpiredError = require_TokenExpiredError();
    var decode = require_decode();
    var timespan = require_timespan();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var PS_SUPPORTED = require_psSupported();
    var jws = require_jws();
    var { KeyObject: KeyObject2, createSecretKey: createSecretKey2, createPublicKey: createPublicKey2 } = require_crypto();
    var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
    var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var HS_ALGS = ["HS256", "HS384", "HS512"];
    if (PS_SUPPORTED) {
      PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
      RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
    }
    module.exports = function(jwtString, secretOrPublicKey, options, callback) {
      if (typeof options === "function" && !callback) {
        callback = options;
        options = {};
      }
      if (!options) {
        options = {};
      }
      options = Object.assign({}, options);
      let done;
      if (callback) {
        done = callback;
      } else {
        done = /* @__PURE__ */ __name(function(err, data) {
          if (err) throw err;
          return data;
        }, "done");
      }
      if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
        return done(new JsonWebTokenError("clockTimestamp must be a number"));
      }
      if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
        return done(new JsonWebTokenError("nonce must be a non-empty string"));
      }
      if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
        return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
      }
      const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
      if (!jwtString) {
        return done(new JsonWebTokenError("jwt must be provided"));
      }
      if (typeof jwtString !== "string") {
        return done(new JsonWebTokenError("jwt must be a string"));
      }
      const parts = jwtString.split(".");
      if (parts.length !== 3) {
        return done(new JsonWebTokenError("jwt malformed"));
      }
      let decodedToken;
      try {
        decodedToken = decode(jwtString, { complete: true });
      } catch (err) {
        return done(err);
      }
      if (!decodedToken) {
        return done(new JsonWebTokenError("invalid token"));
      }
      const header = decodedToken.header;
      let getSecret;
      if (typeof secretOrPublicKey === "function") {
        if (!callback) {
          return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
        }
        getSecret = secretOrPublicKey;
      } else {
        getSecret = /* @__PURE__ */ __name(function(header2, secretCallback) {
          return secretCallback(null, secretOrPublicKey);
        }, "getSecret");
      }
      return getSecret(header, function(err, secretOrPublicKey2) {
        if (err) {
          return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
        }
        const hasSignature = parts[2].trim() !== "";
        if (!hasSignature && secretOrPublicKey2) {
          return done(new JsonWebTokenError("jwt signature is required"));
        }
        if (hasSignature && !secretOrPublicKey2) {
          return done(new JsonWebTokenError("secret or public key must be provided"));
        }
        if (!hasSignature && !options.algorithms) {
          return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject2)) {
          try {
            secretOrPublicKey2 = createPublicKey2(secretOrPublicKey2);
          } catch (_) {
            try {
              secretOrPublicKey2 = createSecretKey2(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
            } catch (_2) {
              return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
            }
          }
        }
        if (!options.algorithms) {
          if (secretOrPublicKey2.type === "secret") {
            options.algorithms = HS_ALGS;
          } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
            options.algorithms = RSA_KEY_ALGS;
          } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
            options.algorithms = EC_KEY_ALGS;
          } else {
            options.algorithms = PUB_KEY_ALGS;
          }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
          return done(new JsonWebTokenError("invalid algorithm"));
        }
        if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
          try {
            validateAsymmetricKey(header.alg, secretOrPublicKey2);
          } catch (e) {
            return done(e);
          }
        }
        let valid;
        try {
          valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
        } catch (e) {
          return done(e);
        }
        if (!valid) {
          return done(new JsonWebTokenError("invalid signature"));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
          if (typeof payload.nbf !== "number") {
            return done(new JsonWebTokenError("invalid nbf value"));
          }
          if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
            return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
          }
        }
        if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
          if (typeof payload.exp !== "number") {
            return done(new JsonWebTokenError("invalid exp value"));
          }
          if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
          }
        }
        if (options.audience) {
          const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
          const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
          const match2 = target.some(function(targetAudience) {
            return audiences.some(function(audience) {
              return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
            });
          });
          if (!match2) {
            return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
          }
        }
        if (options.issuer) {
          const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
          if (invalid_issuer) {
            return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
          }
        }
        if (options.subject) {
          if (payload.sub !== options.subject) {
            return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
          }
        }
        if (options.jwtid) {
          if (payload.jti !== options.jwtid) {
            return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
          }
        }
        if (options.nonce) {
          if (payload.nonce !== options.nonce) {
            return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
          }
        }
        if (options.maxAge) {
          if (typeof payload.iat !== "number") {
            return done(new JsonWebTokenError("iat required when maxAge is specified"));
          }
          const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
          if (typeof maxAgeTimestamp === "undefined") {
            return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
          if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
          }
        }
        if (options.complete === true) {
          const signature = decodedToken.signature;
          return done(null, {
            header,
            payload,
            signature
          });
        }
        return done(null, payload);
      });
    };
  }
});

// ../node_modules/lodash.includes/index.js
var require_lodash = __commonJS({
  "../node_modules/lodash.includes/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var freeParseInt = parseInt;
    function arrayMap(array, iteratee) {
      var index = -1, length = array ? array.length : 0, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    __name(arrayMap, "arrayMap");
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    __name(baseFindIndex, "baseFindIndex");
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    __name(baseIndexOf, "baseIndexOf");
    function baseIsNaN(value) {
      return value !== value;
    }
    __name(baseIsNaN, "baseIsNaN");
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    __name(baseTimes, "baseTimes");
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    __name(baseValues, "baseValues");
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    __name(overArg, "overArg");
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    var nativeMax = Math.max;
    function arrayLikeKeys(value, inherited) {
      var result = isArray3(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    __name(arrayLikeKeys, "arrayLikeKeys");
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    __name(baseKeys, "baseKeys");
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    __name(isIndex, "isIndex");
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    __name(isPrototype, "isPrototype");
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString3(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }
    __name(includes, "includes");
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty2.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    __name(isArguments, "isArguments");
    var isArray3 = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction3(value);
    }
    __name(isArrayLike, "isArrayLike");
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    __name(isArrayLikeObject, "isArrayLikeObject");
    function isFunction3(value) {
      var tag = isObject3(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    __name(isFunction3, "isFunction");
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    __name(isLength, "isLength");
    function isObject3(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    __name(isObject3, "isObject");
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isString3(value) {
      return typeof value == "string" || !isArray3(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    __name(isString3, "isString");
    function isSymbol2(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    __name(isSymbol2, "isSymbol");
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign2 = value < 0 ? -1 : 1;
        return sign2 * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    __name(toFinite, "toFinite");
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    __name(toInteger, "toInteger");
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol2(value)) {
        return NAN;
      }
      if (isObject3(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject3(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    __name(toNumber, "toNumber");
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    __name(keys, "keys");
    function values(object) {
      return object ? baseValues(object, keys(object)) : [];
    }
    __name(values, "values");
    module.exports = includes;
  }
});

// ../node_modules/lodash.isboolean/index.js
var require_lodash2 = __commonJS({
  "../node_modules/lodash.isboolean/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var boolTag = "[object Boolean]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isBoolean3(value) {
      return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
    }
    __name(isBoolean3, "isBoolean");
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    module.exports = isBoolean3;
  }
});

// ../node_modules/lodash.isinteger/index.js
var require_lodash3 = __commonJS({
  "../node_modules/lodash.isinteger/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isInteger(value) {
      return typeof value == "number" && value == toInteger(value);
    }
    __name(isInteger, "isInteger");
    function isObject3(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    __name(isObject3, "isObject");
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isSymbol2(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    __name(isSymbol2, "isSymbol");
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign2 = value < 0 ? -1 : 1;
        return sign2 * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    __name(toFinite, "toFinite");
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    __name(toInteger, "toInteger");
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol2(value)) {
        return NAN;
      }
      if (isObject3(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject3(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    __name(toNumber, "toNumber");
    module.exports = isInteger;
  }
});

// ../node_modules/lodash.isnumber/index.js
var require_lodash4 = __commonJS({
  "../node_modules/lodash.isnumber/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var numberTag = "[object Number]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isNumber3(value) {
      return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
    }
    __name(isNumber3, "isNumber");
    module.exports = isNumber3;
  }
});

// ../node_modules/lodash.isplainobject/index.js
var require_lodash5 = __commonJS({
  "../node_modules/lodash.isplainobject/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    __name(isHostObject, "isHostObject");
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    __name(overArg, "overArg");
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isPlainObject2(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    __name(isPlainObject2, "isPlainObject");
    module.exports = isPlainObject2;
  }
});

// ../node_modules/lodash.isstring/index.js
var require_lodash6 = __commonJS({
  "../node_modules/lodash.isstring/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var stringTag = "[object String]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var isArray3 = Array.isArray;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isString3(value) {
      return typeof value == "string" || !isArray3(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    __name(isString3, "isString");
    module.exports = isString3;
  }
});

// ../node_modules/lodash.once/index.js
var require_lodash7 = __commonJS({
  "../node_modules/lodash.once/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var FUNC_ERROR_TEXT = "Expected a function";
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function before(n, func) {
      var result;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = void 0;
        }
        return result;
      };
    }
    __name(before, "before");
    function once2(func) {
      return before(2, func);
    }
    __name(once2, "once");
    function isObject3(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    __name(isObject3, "isObject");
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function isSymbol2(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    __name(isSymbol2, "isSymbol");
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign2 = value < 0 ? -1 : 1;
        return sign2 * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    __name(toFinite, "toFinite");
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    __name(toInteger, "toInteger");
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol2(value)) {
        return NAN;
      }
      if (isObject3(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject3(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    __name(toNumber, "toNumber");
    module.exports = once2;
  }
});

// ../node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS({
  "../node_modules/jsonwebtoken/sign.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var timespan = require_timespan();
    var PS_SUPPORTED = require_psSupported();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var jws = require_jws();
    var includes = require_lodash();
    var isBoolean3 = require_lodash2();
    var isInteger = require_lodash3();
    var isNumber3 = require_lodash4();
    var isPlainObject2 = require_lodash5();
    var isString3 = require_lodash6();
    var once2 = require_lodash7();
    var { KeyObject: KeyObject2, createSecretKey: createSecretKey2, createPrivateKey: createPrivateKey2 } = require_crypto();
    var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
    if (PS_SUPPORTED) {
      SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
    }
    var sign_options_schema = {
      expiresIn: { isValid: /* @__PURE__ */ __name(function(value) {
        return isInteger(value) || isString3(value) && value;
      }, "isValid"), message: '"expiresIn" should be a number of seconds or string representing a timespan' },
      notBefore: { isValid: /* @__PURE__ */ __name(function(value) {
        return isInteger(value) || isString3(value) && value;
      }, "isValid"), message: '"notBefore" should be a number of seconds or string representing a timespan' },
      audience: { isValid: /* @__PURE__ */ __name(function(value) {
        return isString3(value) || Array.isArray(value);
      }, "isValid"), message: '"audience" must be a string or array' },
      algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
      header: { isValid: isPlainObject2, message: '"header" must be an object' },
      encoding: { isValid: isString3, message: '"encoding" must be a string' },
      issuer: { isValid: isString3, message: '"issuer" must be a string' },
      subject: { isValid: isString3, message: '"subject" must be a string' },
      jwtid: { isValid: isString3, message: '"jwtid" must be a string' },
      noTimestamp: { isValid: isBoolean3, message: '"noTimestamp" must be a boolean' },
      keyid: { isValid: isString3, message: '"keyid" must be a string' },
      mutatePayload: { isValid: isBoolean3, message: '"mutatePayload" must be a boolean' },
      allowInsecureKeySizes: { isValid: isBoolean3, message: '"allowInsecureKeySizes" must be a boolean' },
      allowInvalidAsymmetricKeyTypes: { isValid: isBoolean3, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
    };
    var registered_claims_schema = {
      iat: { isValid: isNumber3, message: '"iat" should be a number of seconds' },
      exp: { isValid: isNumber3, message: '"exp" should be a number of seconds' },
      nbf: { isValid: isNumber3, message: '"nbf" should be a number of seconds' }
    };
    function validate(schema, allowUnknown, object, parameterName) {
      if (!isPlainObject2(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
      }
      Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
          if (!allowUnknown) {
            throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
          }
          return;
        }
        if (!validator.isValid(object[key])) {
          throw new Error(validator.message);
        }
      });
    }
    __name(validate, "validate");
    function validateOptions(options) {
      return validate(sign_options_schema, false, options, "options");
    }
    __name(validateOptions, "validateOptions");
    function validatePayload(payload) {
      return validate(registered_claims_schema, true, payload, "payload");
    }
    __name(validatePayload, "validatePayload");
    var options_to_payload = {
      "audience": "aud",
      "issuer": "iss",
      "subject": "sub",
      "jwtid": "jti"
    };
    var options_for_objects = [
      "expiresIn",
      "notBefore",
      "noTimestamp",
      "audience",
      "issuer",
      "subject",
      "jwtid"
    ];
    module.exports = function(payload, secretOrPrivateKey, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
      const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
      const header = Object.assign({
        alg: options.algorithm || "HS256",
        typ: isObjectPayload ? "JWT" : void 0,
        kid: options.keyid
      }, options.header);
      function failure(err) {
        if (callback) {
          return callback(err);
        }
        throw err;
      }
      __name(failure, "failure");
      if (!secretOrPrivateKey && options.algorithm !== "none") {
        return failure(new Error("secretOrPrivateKey must have a value"));
      }
      if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject2)) {
        try {
          secretOrPrivateKey = createPrivateKey2(secretOrPrivateKey);
        } catch (_) {
          try {
            secretOrPrivateKey = createSecretKey2(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
          } catch (_2) {
            return failure(new Error("secretOrPrivateKey is not valid key material"));
          }
        }
      }
      if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
      } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== "private") {
          return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
          return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
      }
      if (typeof payload === "undefined") {
        return failure(new Error("payload is required"));
      } else if (isObjectPayload) {
        try {
          validatePayload(payload);
        } catch (error4) {
          return failure(error4);
        }
        if (!options.mutatePayload) {
          payload = Object.assign({}, payload);
        }
      } else {
        const invalid_options = options_for_objects.filter(function(opt) {
          return typeof options[opt] !== "undefined";
        });
        if (invalid_options.length > 0) {
          return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
        }
      }
      if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
      }
      if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
      }
      try {
        validateOptions(options);
      } catch (error4) {
        return failure(error4);
      }
      if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
          validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error4) {
          return failure(error4);
        }
      }
      const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
      if (options.noTimestamp) {
        delete payload.iat;
      } else if (isObjectPayload) {
        payload.iat = timestamp;
      }
      if (typeof options.notBefore !== "undefined") {
        try {
          payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.nbf === "undefined") {
          return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
        try {
          payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.exp === "undefined") {
          return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== "undefined") {
          if (typeof payload[claim] !== "undefined") {
            return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
          }
          payload[claim] = options[key];
        }
      });
      const encoding = options.encoding || "utf8";
      if (typeof callback === "function") {
        callback = callback && once2(callback);
        jws.createSign({
          header,
          privateKey: secretOrPrivateKey,
          payload,
          encoding
        }).once("error", callback).once("done", function(signature) {
          if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
          }
          callback(null, signature);
        });
      } else {
        let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
      }
    };
  }
});

// ../node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS({
  "../node_modules/jsonwebtoken/index.js"(exports, module) {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = {
      decode: require_decode(),
      verify: require_verify(),
      sign: require_sign(),
      JsonWebTokenError: require_JsonWebTokenError(),
      NotBeforeError: require_NotBeforeError(),
      TokenExpiredError: require_TokenExpiredError()
    };
  }
});

// api/utils.js
var json, error3;
var init_utils2 = __esm({
  "api/utils.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    json = /* @__PURE__ */ __name((data, options) => {
      return new Response(JSON.stringify(data), {
        status: options?.status || 200,
        headers: { "Content-Type": "application/json", ...options?.headers }
      });
    }, "json");
    error3 = /* @__PURE__ */ __name((status, data) => {
      return json(data, { status });
    }, "error");
  }
});

// api/node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return /* @__PURE__ */ __name(function wrap() {
    return fn.apply(thisArg, arguments);
  }, "wrap");
}
var init_bind = __esm({
  "api/node_modules/axios/lib/helpers/bind.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(bind, "bind");
  }
});

// api/node_modules/axios/lib/utils.js
function isBuffer2(val) {
  return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && isFunction2(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray2(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = /* @__PURE__ */ __name((val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray2(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }, "assignValue");
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction2(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
var toString, getPrototypeOf, iterator, toStringTag, kindOf, kindOfTest, typeOfTest, isArray2, isUndefined2, isArrayBuffer, isString2, isFunction2, isNumber2, isObject2, isBoolean2, isPlainObject, isDate2, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, isReadableStream, isRequest, isResponse, isHeaders, trim, _global, isContextDefined, extend, stripBOM, inherits2, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase, hasOwnProperty, isRegExp2, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, toJSONObject, isAsyncFn, isThenable, _setImmediate, asap, isIterable, utils_default;
var init_utils3 = __esm({
  "api/node_modules/axios/lib/utils.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_bind();
    ({ toString } = Object.prototype);
    ({ getPrototypeOf } = Object);
    ({ iterator, toStringTag } = Symbol);
    kindOf = /* @__PURE__ */ ((cache) => (thing) => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null));
    kindOfTest = /* @__PURE__ */ __name((type) => {
      type = type.toLowerCase();
      return (thing) => kindOf(thing) === type;
    }, "kindOfTest");
    typeOfTest = /* @__PURE__ */ __name((type) => (thing) => typeof thing === type, "typeOfTest");
    ({ isArray: isArray2 } = Array);
    isUndefined2 = typeOfTest("undefined");
    __name(isBuffer2, "isBuffer");
    isArrayBuffer = kindOfTest("ArrayBuffer");
    __name(isArrayBufferView, "isArrayBufferView");
    isString2 = typeOfTest("string");
    isFunction2 = typeOfTest("function");
    isNumber2 = typeOfTest("number");
    isObject2 = /* @__PURE__ */ __name((thing) => thing !== null && typeof thing === "object", "isObject");
    isBoolean2 = /* @__PURE__ */ __name((thing) => thing === true || thing === false, "isBoolean");
    isPlainObject = /* @__PURE__ */ __name((val) => {
      if (kindOf(val) !== "object") {
        return false;
      }
      const prototype3 = getPrototypeOf(val);
      return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(toStringTag in val) && !(iterator in val);
    }, "isPlainObject");
    isDate2 = kindOfTest("Date");
    isFile = kindOfTest("File");
    isBlob = kindOfTest("Blob");
    isFileList = kindOfTest("FileList");
    isStream = /* @__PURE__ */ __name((val) => isObject2(val) && isFunction2(val.pipe), "isStream");
    isFormData = /* @__PURE__ */ __name((thing) => {
      let kind;
      return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction2(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
      kind === "object" && isFunction2(thing.toString) && thing.toString() === "[object FormData]"));
    }, "isFormData");
    isURLSearchParams = kindOfTest("URLSearchParams");
    [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
    trim = /* @__PURE__ */ __name((str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), "trim");
    __name(forEach, "forEach");
    __name(findKey, "findKey");
    _global = (() => {
      if (typeof globalThis !== "undefined") return globalThis;
      return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
    })();
    isContextDefined = /* @__PURE__ */ __name((context2) => !isUndefined2(context2) && context2 !== _global, "isContextDefined");
    __name(merge, "merge");
    extend = /* @__PURE__ */ __name((a, b, thisArg, { allOwnKeys } = {}) => {
      forEach(b, (val, key) => {
        if (thisArg && isFunction2(val)) {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      }, { allOwnKeys });
      return a;
    }, "extend");
    stripBOM = /* @__PURE__ */ __name((content) => {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }, "stripBOM");
    inherits2 = /* @__PURE__ */ __name((constructor, superConstructor, props, descriptors2) => {
      constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
      constructor.prototype.constructor = constructor;
      Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
      });
      props && Object.assign(constructor.prototype, props);
    }, "inherits");
    toFlatObject = /* @__PURE__ */ __name((sourceObj, destObj, filter2, propFilter) => {
      let props;
      let i;
      let prop;
      const merged = {};
      destObj = destObj || {};
      if (sourceObj == null) return destObj;
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
      } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
      return destObj;
    }, "toFlatObject");
    endsWith = /* @__PURE__ */ __name((str, searchString, position) => {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      const lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }, "endsWith");
    toArray = /* @__PURE__ */ __name((thing) => {
      if (!thing) return null;
      if (isArray2(thing)) return thing;
      let i = thing.length;
      if (!isNumber2(i)) return null;
      const arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    }, "toArray");
    isTypedArray = /* @__PURE__ */ ((TypedArray) => {
      return (thing) => {
        return TypedArray && thing instanceof TypedArray;
      };
    })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
    forEachEntry = /* @__PURE__ */ __name((obj, fn) => {
      const generator = obj && obj[iterator];
      const _iterator = generator.call(obj);
      let result;
      while ((result = _iterator.next()) && !result.done) {
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
      }
    }, "forEachEntry");
    matchAll = /* @__PURE__ */ __name((regExp, str) => {
      let matches;
      const arr = [];
      while ((matches = regExp.exec(str)) !== null) {
        arr.push(matches);
      }
      return arr;
    }, "matchAll");
    isHTMLForm = kindOfTest("HTMLFormElement");
    toCamelCase = /* @__PURE__ */ __name((str) => {
      return str.toLowerCase().replace(
        /[-_\s]([a-z\d])(\w*)/g,
        /* @__PURE__ */ __name(function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        }, "replacer")
      );
    }, "toCamelCase");
    hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
    isRegExp2 = kindOfTest("RegExp");
    reduceDescriptors = /* @__PURE__ */ __name((obj, reducer) => {
      const descriptors2 = Object.getOwnPropertyDescriptors(obj);
      const reducedDescriptors = {};
      forEach(descriptors2, (descriptor, name) => {
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
          reducedDescriptors[name] = ret || descriptor;
        }
      });
      Object.defineProperties(obj, reducedDescriptors);
    }, "reduceDescriptors");
    freezeMethods = /* @__PURE__ */ __name((obj) => {
      reduceDescriptors(obj, (descriptor, name) => {
        if (isFunction2(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
          return false;
        }
        const value = obj[name];
        if (!isFunction2(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
          descriptor.writable = false;
          return;
        }
        if (!descriptor.set) {
          descriptor.set = () => {
            throw Error("Can not rewrite read-only method '" + name + "'");
          };
        }
      });
    }, "freezeMethods");
    toObjectSet = /* @__PURE__ */ __name((arrayOrString, delimiter) => {
      const obj = {};
      const define2 = /* @__PURE__ */ __name((arr) => {
        arr.forEach((value) => {
          obj[value] = true;
        });
      }, "define");
      isArray2(arrayOrString) ? define2(arrayOrString) : define2(String(arrayOrString).split(delimiter));
      return obj;
    }, "toObjectSet");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    toFiniteNumber = /* @__PURE__ */ __name((value, defaultValue) => {
      return value != null && Number.isFinite(value = +value) ? value : defaultValue;
    }, "toFiniteNumber");
    __name(isSpecCompliantForm, "isSpecCompliantForm");
    toJSONObject = /* @__PURE__ */ __name((obj) => {
      const stack = new Array(10);
      const visit = /* @__PURE__ */ __name((source, i) => {
        if (isObject2(source)) {
          if (stack.indexOf(source) >= 0) {
            return;
          }
          if (!("toJSON" in source)) {
            stack[i] = source;
            const target = isArray2(source) ? [] : {};
            forEach(source, (value, key) => {
              const reducedValue = visit(value, i + 1);
              !isUndefined2(reducedValue) && (target[key] = reducedValue);
            });
            stack[i] = void 0;
            return target;
          }
        }
        return source;
      }, "visit");
      return visit(obj, 0);
    }, "toJSONObject");
    isAsyncFn = kindOfTest("AsyncFunction");
    isThenable = /* @__PURE__ */ __name((thing) => thing && (isObject2(thing) || isFunction2(thing)) && isFunction2(thing.then) && isFunction2(thing.catch), "isThenable");
    _setImmediate = ((setImmediateSupported, postMessageSupported) => {
      if (setImmediateSupported) {
        return setImmediate;
      }
      return postMessageSupported ? ((token, callbacks) => {
        _global.addEventListener("message", ({ source, data }) => {
          if (source === _global && data === token) {
            callbacks.length && callbacks.shift()();
          }
        }, false);
        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, "*");
        };
      })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
    })(
      typeof setImmediate === "function",
      isFunction2(_global.postMessage)
    );
    asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
    isIterable = /* @__PURE__ */ __name((thing) => thing != null && isFunction2(thing[iterator]), "isIterable");
    utils_default = {
      isArray: isArray2,
      isArrayBuffer,
      isBuffer: isBuffer2,
      isFormData,
      isArrayBufferView,
      isString: isString2,
      isNumber: isNumber2,
      isBoolean: isBoolean2,
      isObject: isObject2,
      isPlainObject,
      isReadableStream,
      isRequest,
      isResponse,
      isHeaders,
      isUndefined: isUndefined2,
      isDate: isDate2,
      isFile,
      isBlob,
      isRegExp: isRegExp2,
      isFunction: isFunction2,
      isStream,
      isURLSearchParams,
      isTypedArray,
      isFileList,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits: inherits2,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      forEachEntry,
      matchAll,
      isHTMLForm,
      hasOwnProperty,
      hasOwnProp: hasOwnProperty,
      // an alias to avoid ESLint no-prototype-builtins detection
      reduceDescriptors,
      freezeMethods,
      toObjectSet,
      toCamelCase,
      noop,
      toFiniteNumber,
      findKey,
      global: _global,
      isContextDefined,
      isSpecCompliantForm,
      toJSONObject,
      isAsyncFn,
      isThenable,
      setImmediate: _setImmediate,
      asap,
      isIterable
    };
  }
});

// api/node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config2, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config2 && (this.config = config2);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
var prototype, descriptors, AxiosError_default;
var init_AxiosError = __esm({
  "api/node_modules/axios/lib/core/AxiosError.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    __name(AxiosError, "AxiosError");
    utils_default.inherits(AxiosError, Error, {
      toJSON: /* @__PURE__ */ __name(function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: utils_default.toJSONObject(this.config),
          code: this.code,
          status: this.status
        };
      }, "toJSON")
    });
    prototype = AxiosError.prototype;
    descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL"
      // eslint-disable-next-line func-names
    ].forEach((code) => {
      descriptors[code] = { value: code };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype, "isAxiosError", { value: true });
    AxiosError.from = (error4, code, config2, request, response, customProps) => {
      const axiosError = Object.create(prototype);
      utils_default.toFlatObject(error4, axiosError, /* @__PURE__ */ __name(function filter2(obj) {
        return obj !== Error.prototype;
      }, "filter"), (prop) => {
        return prop !== "isAxiosError";
      });
      AxiosError.call(axiosError, error4.message, code, config2, request, response);
      axiosError.cause = error4;
      axiosError.name = error4.name;
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    AxiosError_default = AxiosError;
  }
});

// api/node_modules/axios/lib/helpers/null.js
var null_default;
var init_null = __esm({
  "api/node_modules/axios/lib/helpers/null.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    null_default = null;
  }
});

// api/node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(/* @__PURE__ */ __name(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }, "each")).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, /* @__PURE__ */ __name(function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  }, "defined"));
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (utils_default.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  __name(convertValue, "convertValue");
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(/* @__PURE__ */ __name(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        }, "each"));
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  __name(defaultVisitor, "defaultVisitor");
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, /* @__PURE__ */ __name(function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    }, "each"));
    stack.pop();
  }
  __name(build, "build");
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var predicates, toFormData_default;
var init_toFormData = __esm({
  "api/node_modules/axios/lib/helpers/toFormData.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_AxiosError();
    init_null();
    __name(isVisitable, "isVisitable");
    __name(removeBrackets, "removeBrackets");
    __name(renderKey, "renderKey");
    __name(isFlatArray, "isFlatArray");
    predicates = utils_default.toFlatObject(utils_default, {}, null, /* @__PURE__ */ __name(function filter(prop) {
      return /^is[A-Z]/.test(prop);
    }, "filter"));
    __name(toFormData, "toFormData");
    toFormData_default = toFormData;
  }
});

// api/node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, /* @__PURE__ */ __name(function replacer(match2) {
    return charMap[match2];
  }, "replacer"));
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2, AxiosURLSearchParams_default;
var init_AxiosURLSearchParams = __esm({
  "api/node_modules/axios/lib/helpers/AxiosURLSearchParams.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_toFormData();
    __name(encode, "encode");
    __name(AxiosURLSearchParams, "AxiosURLSearchParams");
    prototype2 = AxiosURLSearchParams.prototype;
    prototype2.append = /* @__PURE__ */ __name(function append(name, value) {
      this._pairs.push([name, value]);
    }, "append");
    prototype2.toString = /* @__PURE__ */ __name(function toString2(encoder) {
      const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
      } : encode;
      return this._pairs.map(/* @__PURE__ */ __name(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
      }, "each"), "").join("&");
    }, "toString");
    AxiosURLSearchParams_default = AxiosURLSearchParams;
  }
});

// api/node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  if (utils_default.isFunction(options)) {
    options = {
      serialize: options
    };
  }
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
var init_buildURL = __esm({
  "api/node_modules/axios/lib/helpers/buildURL.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_AxiosURLSearchParams();
    __name(encode2, "encode");
    __name(buildURL, "buildURL");
  }
});

// api/node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager, InterceptorManager_default;
var init_InterceptorManager = __esm({
  "api/node_modules/axios/lib/core/InterceptorManager.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    InterceptorManager = class {
      static {
        __name(this, "InterceptorManager");
      }
      constructor() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      }
      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
      eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }
      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
      clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }
      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
      forEach(fn) {
        utils_default.forEach(this.handlers, /* @__PURE__ */ __name(function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        }, "forEachHandler"));
      }
    };
    InterceptorManager_default = InterceptorManager;
  }
});

// api/node_modules/axios/lib/defaults/transitional.js
var transitional_default;
var init_transitional = __esm({
  "api/node_modules/axios/lib/defaults/transitional.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    transitional_default = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };
  }
});

// api/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
var URLSearchParams_default;
var init_URLSearchParams = __esm({
  "api/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_AxiosURLSearchParams();
    URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;
  }
});

// api/node_modules/axios/lib/platform/browser/classes/FormData.js
var FormData_default;
var init_FormData = __esm({
  "api/node_modules/axios/lib/platform/browser/classes/FormData.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    FormData_default = typeof FormData !== "undefined" ? FormData : null;
  }
});

// api/node_modules/axios/lib/platform/browser/classes/Blob.js
var Blob_default;
var init_Blob = __esm({
  "api/node_modules/axios/lib/platform/browser/classes/Blob.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Blob_default = typeof Blob !== "undefined" ? Blob : null;
  }
});

// api/node_modules/axios/lib/platform/browser/index.js
var browser_default;
var init_browser = __esm({
  "api/node_modules/axios/lib/platform/browser/index.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_URLSearchParams();
    init_FormData();
    init_Blob();
    browser_default = {
      isBrowser: true,
      classes: {
        URLSearchParams: URLSearchParams_default,
        FormData: FormData_default,
        Blob: Blob_default
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    };
  }
});

// api/node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  navigator: () => _navigator,
  origin: () => origin
});
var hasBrowserEnv, _navigator, hasStandardBrowserEnv, hasStandardBrowserWebWorkerEnv, origin;
var init_utils4 = __esm({
  "api/node_modules/axios/lib/platform/common/utils.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
    _navigator = typeof navigator === "object" && navigator || void 0;
    hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
    hasStandardBrowserWebWorkerEnv = (() => {
      return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
      self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
    })();
    origin = hasBrowserEnv && window.location.href || "http://localhost";
  }
});

// api/node_modules/axios/lib/platform/index.js
var platform_default;
var init_platform = __esm({
  "api/node_modules/axios/lib/platform/index.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_browser();
    init_utils4();
    platform_default = {
      ...utils_exports,
      ...browser_default
    };
  }
});

// api/node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: /* @__PURE__ */ __name(function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }, "visitor")
  }, options));
}
var init_toURLEncodedForm = __esm({
  "api/node_modules/axios/lib/helpers/toURLEncodedForm.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_toFormData();
    init_platform();
    __name(toURLEncodedForm, "toURLEncodedForm");
  }
});

// api/node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match2) => {
    return match2[0] === "[]" ? "" : match2[1] || match2[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  __name(buildPath, "buildPath");
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default;
var init_formDataToJSON = __esm({
  "api/node_modules/axios/lib/helpers/formDataToJSON.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    __name(parsePropPath, "parsePropPath");
    __name(arrayToObject, "arrayToObject");
    __name(formDataToJSON, "formDataToJSON");
    formDataToJSON_default = formDataToJSON;
  }
});

// api/node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults, defaults_default;
var init_defaults = __esm({
  "api/node_modules/axios/lib/defaults/index.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_AxiosError();
    init_transitional();
    init_toFormData();
    init_toURLEncodedForm();
    init_platform();
    init_formDataToJSON();
    __name(stringifySafely, "stringifySafely");
    defaults = {
      transitional: transitional_default,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [/* @__PURE__ */ __name(function transformRequest(data, headers) {
        const contentType = headers.getContentType() || "";
        const hasJSONContentType = contentType.indexOf("application/json") > -1;
        const isObjectPayload = utils_default.isObject(data);
        if (isObjectPayload && utils_default.isHTMLForm(data)) {
          data = new FormData(data);
        }
        const isFormData2 = utils_default.isFormData(data);
        if (isFormData2) {
          return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
        }
        if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
          return data;
        }
        if (utils_default.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils_default.isURLSearchParams(data)) {
          headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
          return data.toString();
        }
        let isFileList2;
        if (isObjectPayload) {
          if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
            return toURLEncodedForm(data, this.formSerializer).toString();
          }
          if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
            const _FormData = this.env && this.env.FormData;
            return toFormData_default(
              isFileList2 ? { "files[]": data } : data,
              _FormData && new _FormData(),
              this.formSerializer
            );
          }
        }
        if (isObjectPayload || hasJSONContentType) {
          headers.setContentType("application/json", false);
          return stringifySafely(data);
        }
        return data;
      }, "transformRequest")],
      transformResponse: [/* @__PURE__ */ __name(function transformResponse(data) {
        const transitional2 = this.transitional || defaults.transitional;
        const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
        const JSONRequested = this.responseType === "json";
        if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
          return data;
        }
        if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
          const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
          const strictJSONParsing = !silentJSONParsing && JSONRequested;
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
              }
              throw e;
            }
          }
        }
        return data;
      }, "transformResponse")],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: platform_default.classes.FormData,
        Blob: platform_default.classes.Blob
      },
      validateStatus: /* @__PURE__ */ __name(function validateStatus(status) {
        return status >= 200 && status < 300;
      }, "validateStatus"),
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": void 0
        }
      }
    };
    utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
      defaults.headers[method] = {};
    });
    defaults_default = defaults;
  }
});

// api/node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf, parseHeaders_default;
var init_parseHeaders = __esm({
  "api/node_modules/axios/lib/helpers/parseHeaders.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    ignoreDuplicateOf = utils_default.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ]);
    parseHeaders_default = /* @__PURE__ */ __name((rawHeaders) => {
      const parsed = {};
      let key;
      let val;
      let i;
      rawHeaders && rawHeaders.split("\n").forEach(/* @__PURE__ */ __name(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
          return;
        }
        if (key === "set-cookie") {
          if (parsed[key]) {
            parsed[key].push(val);
          } else {
            parsed[key] = [val];
          }
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
      }, "parser"));
      return parsed;
    }, "default");
  }
});

// api/node_modules/axios/lib/core/AxiosHeaders.js
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match2;
  while (match2 = tokensRE.exec(str)) {
    tokens[match2[1]] = match2[2];
  }
  return tokens;
}
function matchHeaderValue(context2, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value)) return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: /* @__PURE__ */ __name(function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      }, "value"),
      configurable: true
    });
  });
}
var $internals, isValidHeaderName, AxiosHeaders, AxiosHeaders_default;
var init_AxiosHeaders = __esm({
  "api/node_modules/axios/lib/core/AxiosHeaders.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_parseHeaders();
    $internals = Symbol("internals");
    __name(normalizeHeader, "normalizeHeader");
    __name(normalizeValue, "normalizeValue");
    __name(parseTokens, "parseTokens");
    isValidHeaderName = /* @__PURE__ */ __name((str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim()), "isValidHeaderName");
    __name(matchHeaderValue, "matchHeaderValue");
    __name(formatHeader, "formatHeader");
    __name(buildAccessors, "buildAccessors");
    AxiosHeaders = class {
      static {
        __name(this, "AxiosHeaders");
      }
      constructor(headers) {
        headers && this.set(headers);
      }
      set(header, valueOrRewrite, rewrite) {
        const self2 = this;
        function setHeader(_value, _header, _rewrite) {
          const lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error("header name must be a non-empty string");
          }
          const key = utils_default.findKey(self2, lHeader);
          if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
            self2[key || _header] = normalizeValue(_value);
          }
        }
        __name(setHeader, "setHeader");
        const setHeaders = /* @__PURE__ */ __name((headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite)), "setHeaders");
        if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
          setHeaders(parseHeaders_default(header), valueOrRewrite);
        } else if (utils_default.isObject(header) && utils_default.isIterable(header)) {
          let obj = {}, dest, key;
          for (const entry of header) {
            if (!utils_default.isArray(entry)) {
              throw TypeError("Object iterator must return a key-value pair");
            }
            obj[key = entry[0]] = (dest = obj[key]) ? utils_default.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
          }
          setHeaders(obj, valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
      get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils_default.findKey(this, header);
          if (key) {
            const value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils_default.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils_default.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils_default.findKey(this, header);
          return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
      }
      delete(header, matcher) {
        const self2 = this;
        let deleted = false;
        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            const key = utils_default.findKey(self2, _header);
            if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
              delete self2[key];
              deleted = true;
            }
          }
        }
        __name(deleteHeader, "deleteHeader");
        if (utils_default.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
      clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while (i--) {
          const key = keys[i];
          if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
      normalize(format2) {
        const self2 = this;
        const headers = {};
        utils_default.forEach(this, (value, header) => {
          const key = utils_default.findKey(headers, header);
          if (key) {
            self2[key] = normalizeValue(value);
            delete self2[header];
            return;
          }
          const normalized = format2 ? formatHeader(header) : String(header).trim();
          if (normalized !== header) {
            delete self2[header];
          }
          self2[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
      concat(...targets) {
        return this.constructor.concat(this, ...targets);
      }
      toJSON(asStrings) {
        const obj = /* @__PURE__ */ Object.create(null);
        utils_default.forEach(this, (value, header) => {
          value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
        });
        return obj;
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
      }
      getSetCookie() {
        return this.get("set-cookie") || [];
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
      static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target) => computed.set(target));
        return computed;
      }
      static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
          accessors: {}
        };
        const accessors = internals.accessors;
        const prototype3 = this.prototype;
        function defineAccessor(_header) {
          const lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype3, _header);
            accessors[lHeader] = true;
          }
        }
        __name(defineAccessor, "defineAccessor");
        utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
      }
    };
    AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
    utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
      let mapped = key[0].toUpperCase() + key.slice(1);
      return {
        get: /* @__PURE__ */ __name(() => value, "get"),
        set(headerValue) {
          this[mapped] = headerValue;
        }
      };
    });
    utils_default.freezeMethods(AxiosHeaders);
    AxiosHeaders_default = AxiosHeaders;
  }
});

// api/node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config2 = this || defaults_default;
  const context2 = response || config2;
  const headers = AxiosHeaders_default.from(context2.headers);
  let data = context2.data;
  utils_default.forEach(fns, /* @__PURE__ */ __name(function transform(fn) {
    data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
  }, "transform"));
  headers.normalize();
  return data;
}
var init_transformData = __esm({
  "api/node_modules/axios/lib/core/transformData.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_defaults();
    init_AxiosHeaders();
    __name(transformData, "transformData");
  }
});

// api/node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}
var init_isCancel = __esm({
  "api/node_modules/axios/lib/cancel/isCancel.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(isCancel, "isCancel");
  }
});

// api/node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config2, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config2, request);
  this.name = "CanceledError";
}
var CanceledError_default;
var init_CanceledError = __esm({
  "api/node_modules/axios/lib/cancel/CanceledError.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_AxiosError();
    init_utils3();
    __name(CanceledError, "CanceledError");
    utils_default.inherits(CanceledError, AxiosError_default, {
      __CANCEL__: true
    });
    CanceledError_default = CanceledError;
  }
});

// api/node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}
var init_settle = __esm({
  "api/node_modules/axios/lib/core/settle.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_AxiosError();
    __name(settle, "settle");
  }
});

// api/node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url) {
  const match2 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match2 && match2[1] || "";
}
var init_parseProtocol = __esm({
  "api/node_modules/axios/lib/helpers/parseProtocol.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(parseProtocol, "parseProtocol");
  }
});

// api/node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return /* @__PURE__ */ __name(function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  }, "push");
}
var speedometer_default;
var init_speedometer = __esm({
  "api/node_modules/axios/lib/helpers/speedometer.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(speedometer, "speedometer");
    speedometer_default = speedometer;
  }
});

// api/node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = /* @__PURE__ */ __name((args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }, "invoke");
  const throttled = /* @__PURE__ */ __name((...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  }, "throttled");
  const flush = /* @__PURE__ */ __name(() => lastArgs && invoke(lastArgs), "flush");
  return [throttled, flush];
}
var throttle_default;
var init_throttle = __esm({
  "api/node_modules/axios/lib/helpers/throttle.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(throttle, "throttle");
    throttle_default = throttle;
  }
});

// api/node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer, progressEventDecorator, asyncDecorator;
var init_progressEventReducer = __esm({
  "api/node_modules/axios/lib/helpers/progressEventReducer.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_speedometer();
    init_throttle();
    init_utils3();
    progressEventReducer = /* @__PURE__ */ __name((listener, isDownloadStream, freq = 3) => {
      let bytesNotified = 0;
      const _speedometer = speedometer_default(50, 250);
      return throttle_default((e) => {
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : void 0;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
          loaded,
          total,
          progress: total ? loaded / total : void 0,
          bytes: progressBytes,
          rate: rate ? rate : void 0,
          estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
          event: e,
          lengthComputable: total != null,
          [isDownloadStream ? "download" : "upload"]: true
        };
        listener(data);
      }, freq);
    }, "progressEventReducer");
    progressEventDecorator = /* @__PURE__ */ __name((total, throttled) => {
      const lengthComputable = total != null;
      return [(loaded) => throttled[0]({
        lengthComputable,
        total,
        loaded
      }), throttled[1]];
    }, "progressEventDecorator");
    asyncDecorator = /* @__PURE__ */ __name((fn) => (...args) => utils_default.asap(() => fn(...args)), "asyncDecorator");
  }
});

// api/node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default;
var init_isURLSameOrigin = __esm({
  "api/node_modules/axios/lib/helpers/isURLSameOrigin.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_platform();
    isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
      url = new URL(url, platform_default.origin);
      return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
    })(
      new URL(platform_default.origin),
      platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent)
    ) : () => true;
  }
});

// api/node_modules/axios/lib/helpers/cookies.js
var cookies_default;
var init_cookies = __esm({
  "api/node_modules/axios/lib/helpers/cookies.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_platform();
    cookies_default = platform_default.hasStandardBrowserEnv ? (
      // Standard browser envs support document.cookie
      {
        write(name, value, expires, path, domain2, secure) {
          const cookie = [name + "=" + encodeURIComponent(value)];
          utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
          utils_default.isString(path) && cookie.push("path=" + path);
          utils_default.isString(domain2) && cookie.push("domain=" + domain2);
          secure === true && cookie.push("secure");
          document.cookie = cookie.join("; ");
        },
        read(name) {
          const match2 = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match2 ? decodeURIComponent(match2[3]) : null;
        },
        remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      }
    ) : (
      // Non-standard browser env (web workers, react-native) lack needed support.
      {
        write() {
        },
        read() {
          return null;
        },
        remove() {
        }
      }
    );
  }
});

// api/node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
var init_isAbsoluteURL = __esm({
  "api/node_modules/axios/lib/helpers/isAbsoluteURL.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(isAbsoluteURL, "isAbsoluteURL");
  }
});

// api/node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
var init_combineURLs = __esm({
  "api/node_modules/axios/lib/helpers/combineURLs.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(combineURLs, "combineURLs");
  }
});

// api/node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
var init_buildFullPath = __esm({
  "api/node_modules/axios/lib/core/buildFullPath.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_isAbsoluteURL();
    init_combineURLs();
    __name(buildFullPath, "buildFullPath");
  }
});

// api/node_modules/axios/lib/core/mergeConfig.js
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config3 = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  __name(getMergedValue, "getMergedValue");
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  __name(mergeDeepProperties, "mergeDeepProperties");
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  __name(valueFromConfig2, "valueFromConfig2");
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  __name(defaultToConfig2, "defaultToConfig2");
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  __name(mergeDirectKeys, "mergeDirectKeys");
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: /* @__PURE__ */ __name((a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true), "headers")
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), /* @__PURE__ */ __name(function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  }, "computeConfigValue"));
  return config3;
}
var headersToObject;
var init_mergeConfig = __esm({
  "api/node_modules/axios/lib/core/mergeConfig.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_AxiosHeaders();
    headersToObject = /* @__PURE__ */ __name((thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing, "headersToObject");
    __name(mergeConfig, "mergeConfig");
  }
});

// api/node_modules/axios/lib/helpers/resolveConfig.js
var resolveConfig_default;
var init_resolveConfig = __esm({
  "api/node_modules/axios/lib/helpers/resolveConfig.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_platform();
    init_utils3();
    init_isURLSameOrigin();
    init_cookies();
    init_buildFullPath();
    init_mergeConfig();
    init_AxiosHeaders();
    init_buildURL();
    resolveConfig_default = /* @__PURE__ */ __name((config2) => {
      const newConfig = mergeConfig({}, config2);
      let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
      newConfig.headers = headers = AxiosHeaders_default.from(headers);
      newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config2.params, config2.paramsSerializer);
      if (auth) {
        headers.set(
          "Authorization",
          "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : ""))
        );
      }
      let contentType;
      if (utils_default.isFormData(data)) {
        if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
          headers.setContentType(void 0);
        } else if ((contentType = headers.getContentType()) !== false) {
          const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
          headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
        }
      }
      if (platform_default.hasStandardBrowserEnv) {
        withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
          const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
          if (xsrfValue) {
            headers.set(xsrfHeaderName, xsrfValue);
          }
        }
      }
      return newConfig;
    }, "default");
  }
});

// api/node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported, xhr_default;
var init_xhr = __esm({
  "api/node_modules/axios/lib/adapters/xhr.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_settle();
    init_transitional();
    init_AxiosError();
    init_CanceledError();
    init_parseProtocol();
    init_platform();
    init_AxiosHeaders();
    init_progressEventReducer();
    init_resolveConfig();
    isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
    xhr_default = isXHRAdapterSupported && function(config2) {
      return new Promise(/* @__PURE__ */ __name(function dispatchXhrRequest(resolve, reject) {
        const _config = resolveConfig_default(config2);
        let requestData = _config.data;
        const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
          flushUpload && flushUpload();
          flushDownload && flushDownload();
          _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
          _config.signal && _config.signal.removeEventListener("abort", onCanceled);
        }
        __name(done, "done");
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        request.timeout = _config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          const responseHeaders = AxiosHeaders_default.from(
            "getAllResponseHeaders" in request && request.getAllResponseHeaders()
          );
          const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          const response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config2,
            request
          };
          settle(/* @__PURE__ */ __name(function _resolve(value) {
            resolve(value);
            done();
          }, "_resolve"), /* @__PURE__ */ __name(function _reject(err) {
            reject(err);
            done();
          }, "_reject"), response);
          request = null;
        }
        __name(onloadend, "onloadend");
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = /* @__PURE__ */ __name(function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          }, "handleLoad");
        }
        request.onabort = /* @__PURE__ */ __name(function handleAbort() {
          if (!request) {
            return;
          }
          reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config2, request));
          request = null;
        }, "handleAbort");
        request.onerror = /* @__PURE__ */ __name(function handleError() {
          reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config2, request));
          request = null;
        }, "handleError");
        request.ontimeout = /* @__PURE__ */ __name(function handleTimeout() {
          let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
          const transitional2 = _config.transitional || transitional_default;
          if (_config.timeoutErrorMessage) {
            timeoutErrorMessage = _config.timeoutErrorMessage;
          }
          reject(new AxiosError_default(
            timeoutErrorMessage,
            transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
            config2,
            request
          ));
          request = null;
        }, "handleTimeout");
        requestData === void 0 && requestHeaders.setContentType(null);
        if ("setRequestHeader" in request) {
          utils_default.forEach(requestHeaders.toJSON(), /* @__PURE__ */ __name(function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
          }, "setRequestHeader"));
        }
        if (!utils_default.isUndefined(_config.withCredentials)) {
          request.withCredentials = !!_config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = _config.responseType;
        }
        if (onDownloadProgress) {
          [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
          request.addEventListener("progress", downloadThrottled);
        }
        if (onUploadProgress && request.upload) {
          [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
          request.upload.addEventListener("progress", uploadThrottled);
          request.upload.addEventListener("loadend", flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
          onCanceled = /* @__PURE__ */ __name((cancel) => {
            if (!request) {
              return;
            }
            reject(!cancel || cancel.type ? new CanceledError_default(null, config2, request) : cancel);
            request.abort();
            request = null;
          }, "onCanceled");
          _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
          if (_config.signal) {
            _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
          }
        }
        const protocol = parseProtocol(_config.url);
        if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
          reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config2));
          return;
        }
        request.send(requestData || null);
      }, "dispatchXhrRequest"));
    };
  }
});

// api/node_modules/axios/lib/helpers/composeSignals.js
var composeSignals, composeSignals_default;
var init_composeSignals = __esm({
  "api/node_modules/axios/lib/helpers/composeSignals.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_CanceledError();
    init_AxiosError();
    init_utils3();
    composeSignals = /* @__PURE__ */ __name((signals, timeout) => {
      const { length } = signals = signals ? signals.filter(Boolean) : [];
      if (timeout || length) {
        let controller = new AbortController();
        let aborted2;
        const onabort = /* @__PURE__ */ __name(function(reason) {
          if (!aborted2) {
            aborted2 = true;
            unsubscribe();
            const err = reason instanceof Error ? reason : this.reason;
            controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
          }
        }, "onabort");
        let timer = timeout && setTimeout(() => {
          timer = null;
          onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
        }, timeout);
        const unsubscribe = /* @__PURE__ */ __name(() => {
          if (signals) {
            timer && clearTimeout(timer);
            timer = null;
            signals.forEach((signal2) => {
              signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
            });
            signals = null;
          }
        }, "unsubscribe");
        signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
        const { signal } = controller;
        signal.unsubscribe = () => utils_default.asap(unsubscribe);
        return signal;
      }
    }, "composeSignals");
    composeSignals_default = composeSignals;
  }
});

// api/node_modules/axios/lib/helpers/trackStream.js
var streamChunk, readBytes, readStream, trackStream;
var init_trackStream = __esm({
  "api/node_modules/axios/lib/helpers/trackStream.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    streamChunk = /* @__PURE__ */ __name(function* (chunk, chunkSize) {
      let len = chunk.byteLength;
      if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
      }
      let pos = 0;
      let end;
      while (pos < len) {
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
      }
    }, "streamChunk");
    readBytes = /* @__PURE__ */ __name(async function* (iterable, chunkSize) {
      for await (const chunk of readStream(iterable)) {
        yield* streamChunk(chunk, chunkSize);
      }
    }, "readBytes");
    readStream = /* @__PURE__ */ __name(async function* (stream) {
      if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
      }
      const reader = stream.getReader();
      try {
        for (; ; ) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          yield value;
        }
      } finally {
        await reader.cancel();
      }
    }, "readStream");
    trackStream = /* @__PURE__ */ __name((stream, chunkSize, onProgress, onFinish) => {
      const iterator2 = readBytes(stream, chunkSize);
      let bytes = 0;
      let done;
      let _onFinish = /* @__PURE__ */ __name((e) => {
        if (!done) {
          done = true;
          onFinish && onFinish(e);
        }
      }, "_onFinish");
      return new ReadableStream({
        async pull(controller) {
          try {
            const { done: done2, value } = await iterator2.next();
            if (done2) {
              _onFinish();
              controller.close();
              return;
            }
            let len = value.byteLength;
            if (onProgress) {
              let loadedBytes = bytes += len;
              onProgress(loadedBytes);
            }
            controller.enqueue(new Uint8Array(value));
          } catch (err) {
            _onFinish(err);
            throw err;
          }
        },
        cancel(reason) {
          _onFinish(reason);
          return iterator2.return();
        }
      }, {
        highWaterMark: 2
      });
    }, "trackStream");
  }
});

// api/node_modules/axios/lib/adapters/fetch.js
var isFetchSupported, isReadableStreamSupported, encodeText, test, supportsRequestStream, DEFAULT_CHUNK_SIZE, supportsResponseStream, resolvers, getBodyLength, resolveBodyLength, fetch_default;
var init_fetch = __esm({
  "api/node_modules/axios/lib/adapters/fetch.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_platform();
    init_utils3();
    init_AxiosError();
    init_composeSignals();
    init_trackStream();
    init_AxiosHeaders();
    init_progressEventReducer();
    init_resolveConfig();
    init_settle();
    isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
    isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
    encodeText = isFetchSupported && (typeof TextEncoder === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
    test = /* @__PURE__ */ __name((fn, ...args) => {
      try {
        return !!fn(...args);
      } catch (e) {
        return false;
      }
    }, "test");
    supportsRequestStream = isReadableStreamSupported && test(() => {
      let duplexAccessed = false;
      const hasContentType = new Request(platform_default.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          duplexAccessed = true;
          return "half";
        }
      }).headers.has("Content-Type");
      return duplexAccessed && !hasContentType;
    });
    DEFAULT_CHUNK_SIZE = 64 * 1024;
    supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
    resolvers = {
      stream: supportsResponseStream && ((res) => res.body)
    };
    isFetchSupported && ((res) => {
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
        !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config2) => {
          throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config2);
        });
      });
    })(new Response());
    getBodyLength = /* @__PURE__ */ __name(async (body) => {
      if (body == null) {
        return 0;
      }
      if (utils_default.isBlob(body)) {
        return body.size;
      }
      if (utils_default.isSpecCompliantForm(body)) {
        const _request = new Request(platform_default.origin, {
          method: "POST",
          body
        });
        return (await _request.arrayBuffer()).byteLength;
      }
      if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
        return body.byteLength;
      }
      if (utils_default.isURLSearchParams(body)) {
        body = body + "";
      }
      if (utils_default.isString(body)) {
        return (await encodeText(body)).byteLength;
      }
    }, "getBodyLength");
    resolveBodyLength = /* @__PURE__ */ __name(async (headers, body) => {
      const length = utils_default.toFiniteNumber(headers.getContentLength());
      return length == null ? getBodyLength(body) : length;
    }, "resolveBodyLength");
    fetch_default = isFetchSupported && (async (config2) => {
      let {
        url,
        method,
        data,
        signal,
        cancelToken,
        timeout,
        onDownloadProgress,
        onUploadProgress,
        responseType,
        headers,
        withCredentials = "same-origin",
        fetchOptions
      } = resolveConfig_default(config2);
      responseType = responseType ? (responseType + "").toLowerCase() : "text";
      let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
      let request;
      const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
        composedSignal.unsubscribe();
      });
      let requestContentLength;
      try {
        if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
          let _request = new Request(url, {
            method: "POST",
            body: data,
            duplex: "half"
          });
          let contentTypeHeader;
          if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
            headers.setContentType(contentTypeHeader);
          }
          if (_request.body) {
            const [onProgress, flush] = progressEventDecorator(
              requestContentLength,
              progressEventReducer(asyncDecorator(onUploadProgress))
            );
            data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
          }
        }
        if (!utils_default.isString(withCredentials)) {
          withCredentials = withCredentials ? "include" : "omit";
        }
        const isCredentialsSupported = "credentials" in Request.prototype;
        request = new Request(url, {
          ...fetchOptions,
          signal: composedSignal,
          method: method.toUpperCase(),
          headers: headers.normalize().toJSON(),
          body: data,
          duplex: "half",
          credentials: isCredentialsSupported ? withCredentials : void 0
        });
        let response = await fetch(request, fetchOptions);
        const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
        if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
          const options = {};
          ["status", "statusText", "headers"].forEach((prop) => {
            options[prop] = response[prop];
          });
          const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
          const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
            responseContentLength,
            progressEventReducer(asyncDecorator(onDownloadProgress), true)
          ) || [];
          response = new Response(
            trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
              flush && flush();
              unsubscribe && unsubscribe();
            }),
            options
          );
        }
        responseType = responseType || "text";
        let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config2);
        !isStreamResponse && unsubscribe && unsubscribe();
        return await new Promise((resolve, reject) => {
          settle(resolve, reject, {
            data: responseData,
            headers: AxiosHeaders_default.from(response.headers),
            status: response.status,
            statusText: response.statusText,
            config: config2,
            request
          });
        });
      } catch (err) {
        unsubscribe && unsubscribe();
        if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
          throw Object.assign(
            new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config2, request),
            {
              cause: err.cause || err
            }
          );
        }
        throw AxiosError_default.from(err, err && err.code, config2, request);
      }
    });
  }
});

// api/node_modules/axios/lib/adapters/adapters.js
var knownAdapters, renderReason, isResolvedHandle, adapters_default;
var init_adapters = __esm({
  "api/node_modules/axios/lib/adapters/adapters.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_null();
    init_xhr();
    init_fetch();
    init_AxiosError();
    knownAdapters = {
      http: null_default,
      xhr: xhr_default,
      fetch: fetch_default
    };
    utils_default.forEach(knownAdapters, (fn, value) => {
      if (fn) {
        try {
          Object.defineProperty(fn, "name", { value });
        } catch (e) {
        }
        Object.defineProperty(fn, "adapterName", { value });
      }
    });
    renderReason = /* @__PURE__ */ __name((reason) => `- ${reason}`, "renderReason");
    isResolvedHandle = /* @__PURE__ */ __name((adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false, "isResolvedHandle");
    adapters_default = {
      getAdapter: /* @__PURE__ */ __name((adapters) => {
        adapters = utils_default.isArray(adapters) ? adapters : [adapters];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for (let i = 0; i < length; i++) {
          nameOrAdapter = adapters[i];
          let id;
          adapter = nameOrAdapter;
          if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === void 0) {
              throw new AxiosError_default(`Unknown adapter '${id}'`);
            }
          }
          if (adapter) {
            break;
          }
          rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
          const reasons = Object.entries(rejectedReasons).map(
            ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
          );
          let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
          throw new AxiosError_default(
            `There is no suitable adapter to dispatch the request ` + s,
            "ERR_NOT_SUPPORT"
          );
        }
        return adapter;
      }, "getAdapter"),
      adapters: knownAdapters
    };
  }
});

// api/node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError_default(null, config2);
  }
}
function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = AxiosHeaders_default.from(config2.headers);
  config2.data = transformData.call(
    config2,
    config2.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
    config2.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config2.adapter || defaults_default.adapter);
  return adapter(config2).then(/* @__PURE__ */ __name(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData.call(
      config2,
      config2.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, "onAdapterResolution"), /* @__PURE__ */ __name(function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config2,
          config2.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  }, "onAdapterRejection"));
}
var init_dispatchRequest = __esm({
  "api/node_modules/axios/lib/core/dispatchRequest.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_transformData();
    init_isCancel();
    init_defaults();
    init_CanceledError();
    init_AxiosHeaders();
    init_adapters();
    __name(throwIfCancellationRequested, "throwIfCancellationRequested");
    __name(dispatchRequest, "dispatchRequest");
  }
});

// api/node_modules/axios/lib/env/data.js
var VERSION;
var init_data = __esm({
  "api/node_modules/axios/lib/env/data.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    VERSION = "1.10.0";
  }
});

// api/node_modules/axios/lib/helpers/validator.js
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validators, deprecatedWarnings, validator_default;
var init_validator = __esm({
  "api/node_modules/axios/lib/helpers/validator.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_data();
    init_AxiosError();
    validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
      validators[type] = /* @__PURE__ */ __name(function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      }, "validator");
    });
    deprecatedWarnings = {};
    validators.transitional = /* @__PURE__ */ __name(function transitional(validator, version2, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      __name(formatMessage, "formatMessage");
      return (value, opt, opts) => {
        if (validator === false) {
          throw new AxiosError_default(
            formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
            AxiosError_default.ERR_DEPRECATED
          );
        }
        if (version2 && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version2 + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    }, "transitional");
    validators.spelling = /* @__PURE__ */ __name(function spelling(correctSpelling) {
      return (value, opt) => {
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
      };
    }, "spelling");
    __name(assertOptions, "assertOptions");
    validator_default = {
      assertOptions,
      validators
    };
  }
});

// api/node_modules/axios/lib/core/Axios.js
var validators2, Axios, Axios_default;
var init_Axios = __esm({
  "api/node_modules/axios/lib/core/Axios.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_buildURL();
    init_InterceptorManager();
    init_dispatchRequest();
    init_mergeConfig();
    init_buildFullPath();
    init_validator();
    init_AxiosHeaders();
    validators2 = validator_default.validators;
    Axios = class {
      static {
        __name(this, "Axios");
      }
      constructor(instanceConfig) {
        this.defaults = instanceConfig || {};
        this.interceptors = {
          request: new InterceptorManager_default(),
          response: new InterceptorManager_default()
        };
      }
      /**
       * Dispatch a request
       *
       * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
       * @param {?Object} config
       *
       * @returns {Promise} The Promise to be fulfilled
       */
      async request(configOrUrl, config2) {
        try {
          return await this._request(configOrUrl, config2);
        } catch (err) {
          if (err instanceof Error) {
            let dummy = {};
            Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
            const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
            try {
              if (!err.stack) {
                err.stack = stack;
              } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
                err.stack += "\n" + stack;
              }
            } catch (e) {
            }
          }
          throw err;
        }
      }
      _request(configOrUrl, config2) {
        if (typeof configOrUrl === "string") {
          config2 = config2 || {};
          config2.url = configOrUrl;
        } else {
          config2 = configOrUrl || {};
        }
        config2 = mergeConfig(this.defaults, config2);
        const { transitional: transitional2, paramsSerializer, headers } = config2;
        if (transitional2 !== void 0) {
          validator_default.assertOptions(transitional2, {
            silentJSONParsing: validators2.transitional(validators2.boolean),
            forcedJSONParsing: validators2.transitional(validators2.boolean),
            clarifyTimeoutError: validators2.transitional(validators2.boolean)
          }, false);
        }
        if (paramsSerializer != null) {
          if (utils_default.isFunction(paramsSerializer)) {
            config2.paramsSerializer = {
              serialize: paramsSerializer
            };
          } else {
            validator_default.assertOptions(paramsSerializer, {
              encode: validators2.function,
              serialize: validators2.function
            }, true);
          }
        }
        if (config2.allowAbsoluteUrls !== void 0) {
        } else if (this.defaults.allowAbsoluteUrls !== void 0) {
          config2.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
          config2.allowAbsoluteUrls = true;
        }
        validator_default.assertOptions(config2, {
          baseUrl: validators2.spelling("baseURL"),
          withXsrfToken: validators2.spelling("withXSRFToken")
        }, true);
        config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders = headers && utils_default.merge(
          headers.common,
          headers[config2.method]
        );
        headers && utils_default.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (method) => {
            delete headers[method];
          }
        );
        config2.headers = AxiosHeaders_default.concat(contextHeaders, headers);
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(/* @__PURE__ */ __name(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        }, "unshiftRequestInterceptors"));
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(/* @__PURE__ */ __name(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        }, "pushResponseInterceptors"));
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
          const chain = [dispatchRequest.bind(this), void 0];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config2);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config2;
        i = 0;
        while (i < len) {
          const onFulfilled = requestInterceptorChain[i++];
          const onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error4) {
            onRejected.call(this, error4);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error4) {
          return Promise.reject(error4);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
      }
      getUri(config2) {
        config2 = mergeConfig(this.defaults, config2);
        const fullPath = buildFullPath(config2.baseURL, config2.url, config2.allowAbsoluteUrls);
        return buildURL(fullPath, config2.params, config2.paramsSerializer);
      }
    };
    utils_default.forEach(["delete", "get", "head", "options"], /* @__PURE__ */ __name(function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data: (config2 || {}).data
        }));
      };
    }, "forEachMethodNoData"));
    utils_default.forEach(["post", "put", "patch"], /* @__PURE__ */ __name(function forEachMethodWithData(method) {
      function generateHTTPMethod(isForm) {
        return /* @__PURE__ */ __name(function httpMethod(url, data, config2) {
          return this.request(mergeConfig(config2 || {}, {
            method,
            headers: isForm ? {
              "Content-Type": "multipart/form-data"
            } : {},
            url,
            data
          }));
        }, "httpMethod");
      }
      __name(generateHTTPMethod, "generateHTTPMethod");
      Axios.prototype[method] = generateHTTPMethod();
      Axios.prototype[method + "Form"] = generateHTTPMethod(true);
    }, "forEachMethodWithData"));
    Axios_default = Axios;
  }
});

// api/node_modules/axios/lib/cancel/CancelToken.js
var CancelToken, CancelToken_default;
var init_CancelToken = __esm({
  "api/node_modules/axios/lib/cancel/CancelToken.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_CanceledError();
    CancelToken = class _CancelToken {
      static {
        __name(this, "CancelToken");
      }
      constructor(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        let resolvePromise;
        this.promise = new Promise(/* @__PURE__ */ __name(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        }, "promiseExecutor"));
        const token = this;
        this.promise.then((cancel) => {
          if (!token._listeners) return;
          let i = token._listeners.length;
          while (i-- > 0) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = (onfulfilled) => {
          let _resolve;
          const promise = new Promise((resolve) => {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = /* @__PURE__ */ __name(function reject() {
            token.unsubscribe(_resolve);
          }, "reject");
          return promise;
        };
        executor(/* @__PURE__ */ __name(function cancel(message, config2, request) {
          if (token.reason) {
            return;
          }
          token.reason = new CanceledError_default(message, config2, request);
          resolvePromise(token.reason);
        }, "cancel"));
      }
      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }
      /**
       * Subscribe to the cancel signal
       */
      subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }
      /**
       * Unsubscribe from the cancel signal
       */
      unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }
      toAbortSignal() {
        const controller = new AbortController();
        const abort2 = /* @__PURE__ */ __name((err) => {
          controller.abort(err);
        }, "abort");
        this.subscribe(abort2);
        controller.signal.unsubscribe = () => this.unsubscribe(abort2);
        return controller.signal;
      }
      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      static source() {
        let cancel;
        const token = new _CancelToken(/* @__PURE__ */ __name(function executor(c) {
          cancel = c;
        }, "executor"));
        return {
          token,
          cancel
        };
      }
    };
    CancelToken_default = CancelToken;
  }
});

// api/node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return /* @__PURE__ */ __name(function wrap(arr) {
    return callback.apply(null, arr);
  }, "wrap");
}
var init_spread = __esm({
  "api/node_modules/axios/lib/helpers/spread.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(spread, "spread");
  }
});

// api/node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}
var init_isAxiosError = __esm({
  "api/node_modules/axios/lib/helpers/isAxiosError.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    __name(isAxiosError, "isAxiosError");
  }
});

// api/node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode, HttpStatusCode_default;
var init_HttpStatusCode = __esm({
  "api/node_modules/axios/lib/helpers/HttpStatusCode.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    HttpStatusCode = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511
    };
    Object.entries(HttpStatusCode).forEach(([key, value]) => {
      HttpStatusCode[value] = key;
    });
    HttpStatusCode_default = HttpStatusCode;
  }
});

// api/node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context2 = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context2);
  utils_default.extend(instance, Axios_default.prototype, context2, { allOwnKeys: true });
  utils_default.extend(instance, context2, null, { allOwnKeys: true });
  instance.create = /* @__PURE__ */ __name(function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  }, "create");
  return instance;
}
var axios, axios_default;
var init_axios = __esm({
  "api/node_modules/axios/lib/axios.js"() {
    "use strict";
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils3();
    init_bind();
    init_Axios();
    init_mergeConfig();
    init_defaults();
    init_formDataToJSON();
    init_CanceledError();
    init_CancelToken();
    init_isCancel();
    init_data();
    init_toFormData();
    init_AxiosError();
    init_spread();
    init_isAxiosError();
    init_AxiosHeaders();
    init_adapters();
    init_HttpStatusCode();
    __name(createInstance, "createInstance");
    axios = createInstance(defaults_default);
    axios.Axios = Axios_default;
    axios.CanceledError = CanceledError_default;
    axios.CancelToken = CancelToken_default;
    axios.isCancel = isCancel;
    axios.VERSION = VERSION;
    axios.toFormData = toFormData_default;
    axios.AxiosError = AxiosError_default;
    axios.Cancel = axios.CanceledError;
    axios.all = /* @__PURE__ */ __name(function all(promises) {
      return Promise.all(promises);
    }, "all");
    axios.spread = spread;
    axios.isAxiosError = isAxiosError;
    axios.mergeConfig = mergeConfig;
    axios.AxiosHeaders = AxiosHeaders_default;
    axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
    axios.getAdapter = adapters_default.getAdapter;
    axios.HttpStatusCode = HttpStatusCode_default;
    axios.default = axios;
    axios_default = axios;
  }
});

// api/node_modules/axios/index.js
var Axios2, AxiosError2, CanceledError2, isCancel2, CancelToken2, VERSION2, all2, Cancel, isAxiosError2, spread2, toFormData2, AxiosHeaders2, HttpStatusCode2, formToJSON, getAdapter, mergeConfig2;
var init_axios2 = __esm({
  "api/node_modules/axios/index.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_axios();
    ({
      Axios: Axios2,
      AxiosError: AxiosError2,
      CanceledError: CanceledError2,
      isCancel: isCancel2,
      CancelToken: CancelToken2,
      VERSION: VERSION2,
      all: all2,
      Cancel,
      isAxiosError: isAxiosError2,
      spread: spread2,
      toFormData: toFormData2,
      AxiosHeaders: AxiosHeaders2,
      HttpStatusCode: HttpStatusCode2,
      formToJSON,
      getAdapter,
      mergeConfig: mergeConfig2
    } = axios_default);
  }
});

// api/agents/standardAgent.js
var handleStandardChat;
var init_standardAgent = __esm({
  "api/agents/standardAgent.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_axios2();
    init_utils2();
    handleStandardChat = /* @__PURE__ */ __name(async (body, env2, user) => {
      const { text, context: requestContext, history } = body;
      const apiKey = env2.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("GEMINI_API_KEY is not set in the environment variables.");
        return error3(500, { message: "AI service configuration error." });
      }
      let historyText = "";
      if (history && history.length > 0) {
        historyText = "Here is the conversation history:\n---\n" + history.map((msg) => `${msg.author}: ${msg.text}`).join("\n") + "\n---\n\n";
      }
      let fileContextText = "";
      if (requestContext?.files && requestContext.files.length > 0) {
        const fileContents = requestContext.files.map(
          (file) => `File: "${file.fileName}"
---
${file.fileContent}
---`
        ).join("\n\n");
        fileContextText = `Given the following file contexts:

${fileContents}

`;
      }
      const prompt = `${fileContextText}${historyText}Now, answer the user's question:
User: ${text}
---
AI:`;
      const model = "gemini-1.5-flash";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const requestBody = {
        contents: [{ parts: [{ text: prompt }] }]
      };
      try {
        const geminiResponse = await axios_default.post(apiUrl, requestBody, { headers: { "Content-Type": "application/json" } });
        const generatedText = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return json({ result: generatedText });
      } catch (err) {
        console.error(`[AI ERROR] in Standard Agent:`, err.response?.data || err.message);
        const errorMessage = err.response?.data?.error?.message || "AI request failed.";
        return error3(err.response?.status || 500, { message: `AI service error: ${errorMessage}` });
      }
    }, "handleStandardChat");
  }
});

// api/services/cloudflareKVVectorStore.js
var cosineSimilarity, cloudflareKVVectorStore, getVectorStore;
var init_cloudflareKVVectorStore = __esm({
  "api/services/cloudflareKVVectorStore.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    cosineSimilarity = /* @__PURE__ */ __name((vecA, vecB) => {
      const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
      const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
      const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
      if (magnitudeA === 0 || magnitudeB === 0) return 0;
      return dotProduct / (magnitudeA * magnitudeB);
    }, "cosineSimilarity");
    cloudflareKVVectorStore = {
      async upsert(embeddings, env2) {
        if (!env2.VECTOR_STORE_KV) {
          throw new Error("VECTOR_STORE_KV binding not configured");
        }
        const kv = env2.VECTOR_STORE_KV;
        try {
          const operations = embeddings.map(async (embedding) => {
            const key = `vector:${embedding.id}`;
            const value = JSON.stringify({
              id: embedding.id,
              values: embedding.values,
              metadata: embedding.metadata
            });
            return kv.put(key, value);
          });
          await Promise.all(operations);
          const projectId = embeddings[0]?.metadata?.projectId;
          if (projectId) {
            const indexKey = `project_index:${projectId}`;
            const existingIndex = await kv.get(indexKey, "json") || [];
            const newIds = embeddings.map((e) => e.id);
            const updatedIndex = [.../* @__PURE__ */ new Set([...existingIndex, ...newIds])];
            await kv.put(indexKey, JSON.stringify(updatedIndex));
          }
          console.log(`Successfully stored ${embeddings.length} embeddings in KV`);
          return { success: true };
        } catch (error4) {
          console.error("Failed to store embeddings in KV:", error4);
          throw error4;
        }
      },
      async delete(ids, env2) {
        if (!env2.VECTOR_STORE_KV) {
          throw new Error("VECTOR_STORE_KV binding not configured");
        }
        const kv = env2.VECTOR_STORE_KV;
        try {
          const operations = ids.map((id) => kv.delete(`vector:${id}`));
          await Promise.all(operations);
          const projectIndices = await kv.list({ prefix: "project_index:" });
          for (const indexKey of projectIndices.keys) {
            const index = await kv.get(indexKey.name, "json") || [];
            const updatedIndex = index.filter((id) => !ids.includes(id));
            if (updatedIndex.length !== index.length) {
              await kv.put(indexKey.name, JSON.stringify(updatedIndex));
            }
          }
          console.log(`Successfully deleted ${ids.length} embeddings from KV`);
          return { success: true, deletedCount: ids.length };
        } catch (error4) {
          console.error("Failed to delete embeddings from KV:", error4);
          throw error4;
        }
      },
      async query(queryVector, options, env2) {
        if (!env2.VECTOR_STORE_KV) {
          throw new Error("VECTOR_STORE_KV binding not configured");
        }
        const { topK = 10, returnMetadata = true, projectId } = options;
        const kv = env2.VECTOR_STORE_KV;
        try {
          let vectorIds = [];
          if (projectId) {
            const indexKey = `project_index:${projectId}`;
            vectorIds = await kv.get(indexKey, "json") || [];
          } else {
            const allVectors = await kv.list({ prefix: "vector:" });
            vectorIds = allVectors.keys.map((key) => key.name.replace("vector:", ""));
          }
          if (vectorIds.length === 0) {
            return { matches: [] };
          }
          const vectorPromises = vectorIds.map(async (id) => {
            const vectorData = await kv.get(`vector:${id}`, "json");
            return vectorData;
          });
          const vectors = (await Promise.all(vectorPromises)).filter(Boolean);
          const similarities = vectors.map((vector) => {
            const similarity = cosineSimilarity(queryVector, vector.values);
            return {
              id: vector.id,
              score: similarity,
              metadata: vector.metadata
            };
          });
          similarities.sort((a, b) => b.score - a.score);
          const topMatches = similarities.slice(0, topK);
          const matches = topMatches.map((match2) => {
            const result = {
              id: match2.id,
              score: match2.score
            };
            if (returnMetadata) {
              result.metadata = match2.metadata;
            }
            return result;
          });
          console.log(`Found ${matches.length} matches in KV store for project ${projectId || "all"}`);
          return { matches };
        } catch (error4) {
          console.error("Failed to query KV vector store:", error4);
          throw error4;
        }
      }
    };
    getVectorStore = /* @__PURE__ */ __name((env2) => {
      console.log("Using Cloudflare KV vector store");
      return cloudflareKVVectorStore;
    }, "getVectorStore");
  }
});

// api/agents/ragAgent.js
var handleRagChat;
var init_ragAgent = __esm({
  "api/agents/ragAgent.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils2();
    init_dbConfig();
    init_axios2();
    init_cloudflareKVVectorStore();
    handleRagChat = /* @__PURE__ */ __name(async (body, env2, user) => {
      const { text, history, projectId } = body;
      if (!projectId) {
        return error3(400, { message: "Project ID is required for RAG chat." });
      }
      const apiKey = env2.GEMINI_API_KEY;
      const embeddingModel = "text-embedding-004";
      const embeddingApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${embeddingModel}:embedContent?key=${apiKey}`;
      let queryVector;
      try {
        const embeddingRequestBody = {
          model: `models/${embeddingModel}`,
          content: {
            parts: [{ text }]
          },
          taskType: "RETRIEVAL_QUERY"
        };
        const embeddingResponse = await axios_default.post(embeddingApiUrl, embeddingRequestBody, {
          headers: { "Content-Type": "application/json" }
        });
        queryVector = embeddingResponse.data.embedding.values;
      } catch (err) {
        console.error(`[AI ERROR] in RAG Agent - Embedding generation failed:`, err.response?.data || err.message);
        const errorMessage = err.response?.data?.error?.message || "Failed to generate text embedding.";
        return error3(err.response?.status || 500, { message: `AI service error: ${errorMessage}` });
      }
      const index = getVectorStore(env2);
      const topK = 3;
      const vectorResponse = await index.query(queryVector, { topK, returnMetadata: true, projectId }, env2);
      const matchedFiles = vectorResponse.matches;
      console.log(`Vector search returned ${matchedFiles.length} total matches.`);
      const projectIdStr = String(projectId);
      const projectFilteredFiles = matchedFiles.filter(
        (match2) => match2.metadata && String(match2.metadata.projectId) === projectIdStr
      );
      console.log(`After project filtering: ${projectFilteredFiles.length} matches for project ${projectId}.`);
      if (projectFilteredFiles.length > 0) {
        console.log(
          `Matched files from project ${projectId}:`,
          projectFilteredFiles.map((match2) => match2.metadata.fileName).join(", ")
        );
      }
      if (projectFilteredFiles.length === 0) {
        return json({
          result: "I couldn't find any relevant files in the project to answer your question. This might be because your project hasn't been indexed yet. Try indexing your project first by clicking the 'Index Project' button in the Project Explorer, then ask your question again."
        });
      }
      const fileIds = projectFilteredFiles.map((match2) => match2.metadata.fileId);
      const placeholders = fileIds.map(() => "?").join(",");
      const filesResult = await query(`SELECT file_id, name, content FROM files WHERE file_id IN (${placeholders})`, fileIds, env2);
      const fileContents = filesResult.rows;
      let contextText = "Here is the context from relevant files in the project:\n\n";
      contextText += fileContents.map((file) => `File: "${file.name}"
---
${file.content}
---
`).join("\n\n");
      let historyText = "";
      if (history && history.length > 0) {
        historyText = "Here is the conversation history:\n---\n" + history.map((msg) => `${msg.author}: ${msg.text}`).join("\n") + "\n---\n\n";
      }
      const prompt = `${contextText}

${historyText}Based on the provided context and history, answer the user's question:
User: ${text}
---
AI:`;
      const llmModel = "gemini-1.5-flash";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${llmModel}:generateContent?key=${apiKey}`;
      const requestBody = {
        contents: [{ parts: [{ text: prompt }] }]
      };
      try {
        const geminiResponse = await axios_default.post(apiUrl, requestBody, { headers: { "Content-Type": "application/json" } });
        const generatedText = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        return json({ result: generatedText });
      } catch (err) {
        console.error(`[AI ERROR] in RAG Agent:`, err.response?.data || err.message);
        const errorMessage = err.response?.data?.error?.message || "AI request failed.";
        return error3(err.response?.status || 500, { message: `AI service error: ${errorMessage}` });
      }
    }, "handleRagChat");
  }
});

// api/agents/editAgent.js
var generateId, handleEditRequest, discoverFiles, discoverFilesWithRAG, generateDiffs, minimizeDiff, getAllOccurrences, generateDiffForFile, generateEditSummary;
var init_editAgent = __esm({
  "api/agents/editAgent.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils2();
    init_dbConfig();
    init_axios2();
    init_cloudflareKVVectorStore();
    generateId = /* @__PURE__ */ __name(() => {
      return "id-" + Math.random().toString(36).substr(2, 9) + "-" + Date.now().toString(36);
    }, "generateId");
    handleEditRequest = /* @__PURE__ */ __name(async (body, env2, user) => {
      const { text, context: context2, projectId, history } = body;
      if (!projectId) {
        return error3(400, { message: "Project ID is required for edit requests." });
      }
      const apiKey = env2.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("GEMINI_API_KEY is not set in the environment variables.");
        return error3(500, { message: "AI service configuration error." });
      }
      console.log(`[Edit Agent] Processing edit request: "${text}" for project ${projectId}`);
      try {
        console.log("[Edit Agent] Phase 1: File Discovery");
        const discoveredFiles = await discoverFiles(text, context2, projectId, env2);
        if (discoveredFiles.length === 0) {
          return json({
            result: "I couldn't identify any files that need to be edited based on your request. Please specify which files you'd like me to modify or provide more context about the changes you want to make.",
            editSummary: {
              phase: "file_discovery",
              filesFound: 0,
              message: "No files identified for editing"
            }
          });
        }
        console.log(`[Edit Agent] Found ${discoveredFiles.length} files for editing:`, discoveredFiles.map((f) => f.name));
        console.log("[Edit Agent] Phase 2: Diff Generation");
        const diffs = await generateDiffs(discoveredFiles, text, context2, apiKey);
        if (diffs.length === 0) {
          return json({
            result: "I analyzed the relevant files but no changes were needed. This could mean the requested changes are already applied, or the query wasn't specific enough to identify what needs to be modified.",
            editSummary: {
              phase: "diff_generation",
              filesFound: discoveredFiles.length,
              diffsGenerated: 0,
              message: "No changes could be generated"
            }
          });
        }
        console.log(`[Edit Agent] Generated ${diffs.length} diffs`);
        const filesWithEdits = discoveredFiles.filter(
          (file) => diffs.some((diff) => diff.fileName === file.name)
        );
        const summary = generateEditSummary(filesWithEdits, diffs);
        return json({
          result: summary.message,
          editSummary: summary,
          suggestions: diffs,
          // Return the processed diffs
          filesToOpen: filesWithEdits.map((f) => ({
            file_id: f.file_id,
            name: f.name,
            content: f.content,
            type: f.type
          }))
        });
      } catch (err) {
        console.error(`[Edit Agent] Error:`, err.message);
        return error3(500, {
          message: "An error occurred while processing your edit request.",
          details: err.message
        });
      }
    }, "handleEditRequest");
    discoverFiles = /* @__PURE__ */ __name(async (editRequest, context2, projectId, env2) => {
      console.log("[File Discovery] Starting file discovery");
      const files = [];
      const fileNames = /* @__PURE__ */ new Set();
      if (context2 && context2.files && context2.files.length > 0) {
        console.log(`[File Discovery] Using ${context2.files.length} files from context`);
        for (const contextFile of context2.files) {
          try {
            const fileResult = await query(
              'SELECT file_id, name, content, type FROM files WHERE name = ? AND project_id = ? AND type = "file"',
              [contextFile.fileName, projectId],
              env2
            );
            if (fileResult.rows.length > 0) {
              files.push({
                file_id: fileResult.rows[0].file_id,
                name: fileResult.rows[0].name,
                content: fileResult.rows[0].content,
                type: fileResult.rows[0].type,
                source: "context"
              });
              fileNames.add(fileResult.rows[0].name);
            }
          } catch (error4) {
            console.warn(`[File Discovery] Error fetching file ${contextFile.fileName}:`, error4.message);
          }
        }
      }
      console.log("[File Discovery] Using RAG to discover additional relevant files");
      const ragFiles = await discoverFilesWithRAG(editRequest, projectId, env2);
      ragFiles.forEach((ragFile) => {
        if (!fileNames.has(ragFile.name)) {
          files.push(ragFile);
          fileNames.add(ragFile.name);
        }
      });
      console.log(`[File Discovery] Discovered ${files.length} files total`);
      console.log(`[File Discovery] Files: ${Array.from(fileNames).join(", ")}`);
      return files;
    }, "discoverFiles");
    discoverFilesWithRAG = /* @__PURE__ */ __name(async (editRequest, projectId, env2) => {
      try {
        console.log(`[RAG Discovery] Starting RAG search for: "${editRequest}" in project ${projectId}`);
        const apiKey = env2.GEMINI_API_KEY;
        const embeddingModel = "text-embedding-004";
        const embeddingApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${embeddingModel}:embedContent?key=${apiKey}`;
        const embeddingRequestBody = {
          model: `models/${embeddingModel}`,
          content: {
            parts: [{ text: editRequest }]
          },
          taskType: "RETRIEVAL_QUERY"
        };
        const embeddingResponse = await axios_default.post(embeddingApiUrl, embeddingRequestBody, {
          headers: { "Content-Type": "application/json" }
        });
        const queryVector = embeddingResponse.data.embedding.values;
        console.log(`[RAG Discovery] Generated embedding vector of length ${queryVector.length}`);
        const index = getVectorStore(env2);
        const vectorResponse = await index.query(queryVector, { topK: 10, returnMetadata: true, projectId }, env2);
        console.log(`[RAG Discovery] Vector search returned ${vectorResponse.matches?.length || 0} matches`);
        const projectIdStr = String(projectId);
        const relevantFiles = vectorResponse.matches.filter(
          (match2) => match2.metadata && String(match2.metadata.projectId) === projectIdStr
        );
        console.log(`[RAG Discovery] Filtered to ${relevantFiles.length} files for project ${projectId}`);
        if (relevantFiles.length === 0) {
          console.log("[RAG Discovery] No relevant files found via RAG - checking if project is indexed");
          const allFilesResult = await query(
            'SELECT file_id, name, content, type FROM files WHERE project_id = ? AND type = "file" ORDER BY name LIMIT 20',
            [projectId],
            env2
          );
          console.log(`[RAG Discovery] Fallback: Found ${allFilesResult.rows.length} total files in project`);
          if (allFilesResult.rows.length === 0) {
            console.log("[RAG Discovery] No files found in project at all");
            return [];
          }
          return allFilesResult.rows.slice(0, 5).map((file) => ({
            ...file,
            source: "fallback"
          }));
        }
        const fileIds = relevantFiles.map((match2) => match2.metadata.fileId);
        const placeholders = fileIds.map(() => "?").join(",");
        const filesResult = await query(
          `SELECT file_id, name, content, type FROM files WHERE file_id IN (${placeholders})`,
          fileIds,
          env2
        );
        console.log(`[RAG Discovery] Successfully retrieved ${filesResult.rows.length} files from database`);
        filesResult.rows.forEach((file) => {
          console.log(`[RAG Discovery] - ${file.name} (${file.content?.length || 0} chars)`);
          console.log(`[RAG Discovery] - Content preview: "${file.content?.substring(0, 100)}..."`);
        });
        return filesResult.rows.map((file) => ({
          ...file,
          source: "rag"
        }));
      } catch (error4) {
        console.error("[RAG Discovery] RAG discovery failed:", error4.message);
        console.error("[RAG Discovery] Full error:", error4);
        try {
          const fallbackResult = await query(
            'SELECT file_id, name, content, type FROM files WHERE project_id = ? AND type = "file" ORDER BY name LIMIT 5',
            [projectId],
            env2
          );
          console.log(`[RAG Discovery] Emergency fallback: Found ${fallbackResult.rows.length} files`);
          return fallbackResult.rows.map((file) => ({
            ...file,
            source: "emergency_fallback"
          }));
        } catch (fallbackError) {
          console.error("[RAG Discovery] Even fallback failed:", fallbackError.message);
          return [];
        }
      }
    }, "discoverFilesWithRAG");
    generateDiffs = /* @__PURE__ */ __name(async (files, editRequest, context2, apiKey) => {
      console.log("[Diff Generation] Starting diff generation");
      const allDiffs = [];
      for (const file of files) {
        try {
          const diffsForFile = await generateDiffForFile(file, editRequest, context2, apiKey);
          if (diffsForFile && diffsForFile.length > 0) {
            const diffsWithContext = diffsForFile.map((diff) => ({
              ...diff,
              fileName: file.name,
              fileId: file.file_id
            }));
            allDiffs.push(...diffsWithContext);
          }
        } catch (error4) {
          console.error(`[Diff Generation] Error generating diff for ${file.name}:`, error4.message);
        }
      }
      console.log(`[Diff Generation] Generated a total of ${allDiffs.length} diffs`);
      return allDiffs;
    }, "generateDiffs");
    minimizeDiff = /* @__PURE__ */ __name((oldC, newC, context2) => {
      let oldContent = String(oldC || "");
      let newContent = String(newC || "");
      let prefixLen = 0;
      while (prefixLen < oldContent.length && prefixLen < newContent.length && oldContent[prefixLen] === newContent[prefixLen]) {
        prefixLen++;
      }
      oldContent = oldContent.substring(prefixLen);
      newContent = newContent.substring(prefixLen);
      let suffixLen = 0;
      while (suffixLen < oldContent.length && suffixLen < newContent.length && oldContent[oldContent.length - 1 - suffixLen] === newContent[newContent.length - 1 - suffixLen]) {
        suffixLen++;
      }
      oldContent = oldContent.substring(0, oldContent.length - suffixLen);
      newContent = newContent.substring(0, newContent.length - suffixLen);
      oldContent = oldContent.trim();
      newContent = newContent.trim();
      if (oldContent === "" && newContent !== "") {
        return {
          oldContent: oldC,
          newContent: newC,
          minimized: false
        };
      }
      if (newContent.includes(oldContent) && oldContent !== newContent) {
        return {
          oldContent: oldC,
          newContent: newC,
          minimized: false
        };
      }
      return {
        oldContent,
        newContent,
        minimized: true
      };
    }, "minimizeDiff");
    getAllOccurrences = /* @__PURE__ */ __name((source, search) => {
      const indices = [];
      if (!search) return indices;
      let i = -1;
      while ((i = source.indexOf(search, i + 1)) !== -1) {
        indices.push(i);
      }
      return indices;
    }, "getAllOccurrences");
    generateDiffForFile = /* @__PURE__ */ __name(async (file, editRequest, context2, apiKey) => {
      console.log(`[Diff Generation] Generating diff for file: ${file.name}`);
      if (!file.content || file.content.length < 10) {
        console.log(`[Diff Generation] Skipping ${file.name} due to small or empty content.`);
        return [];
      }
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`;
      const systemInstruction = {
        role: "system",
        parts: [{
          text: `You are an expert programmer and an AI assistant that specializes in editing code.
Your task is to analyze the user's edit request and the provided file content, and then generate a precise set of changes to fulfill the request.

You MUST follow these rules:
1.  Analyze the user's request: "${editRequest}".
2.  Analyze the full content of the file: \`${file.name}\`.
3.  Identify the exact parts of the file that need to be changed.
4.  For each change, provide the original content to be replaced (\`oldContent\`) and the new content to insert (\`newContent\`).
5.  The \`oldContent\` MUST be an exact substring from the original file.
6.  You MUST output your response as a valid JSON object. Do not include any text outside the JSON block.
7.  The JSON object should have a single key, "changes", which is an array of change objects.
8.  Each change object must have two keys: "oldContent" and "newContent".
9.  If NO changes are needed (e.g., the code is already correct or the request is irrelevant), return an empty array: \`{ "changes": [] }\`.
10. Ensure that the generated \`newContent\` includes proper indentation and formatting that matches the surrounding code.
11. Only provide changes for this file. Do not suggest creating new files or modifying other files.
12. Be precise. Do not replace more code than necessary. The \`oldContent\` should be as minimal as possible while still being unique enough to locate.

Example Response:
\`\`\`json
{
    "changes": [
        {
      "oldContent": "const oldVariable = 'value';",
      "newContent": "const newVariable = 'newValue';"
    },
    {
      "oldContent": "<p>Some old text</p>",
      "newContent": "<p>Some new, updated text</p>"
    }
  ]
}
\`\`\`
`
        }]
      };
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [{
              text: `Here is the file \`${file.name}\`:

\`\`\`
${file.content}
\`\`\``
            }]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0
        },
        systemInstruction
      };
      try {
        const response = await axios_default.post(apiUrl, requestBody, {
          headers: { "Content-Type": "application/json" }
        });
        if (!response.data || !response.data.candidates || response.data.candidates.length === 0) {
          console.warn(`[Diff Generation] No candidates returned for ${file.name}.`);
          return [];
        }
        const rawJson = response.data.candidates[0].content.parts[0].text;
        const parsedResponse = JSON.parse(rawJson);
        const rawChanges = parsedResponse.changes || [];
        if (rawChanges.length === 0) {
          console.log(`[Diff Generation] LLM reported no changes needed for ${file.name}.`);
          return [];
        }
        console.log(`[Diff Generation] Received ${rawChanges.length} raw changes from LLM for ${file.name}.`);
        const processedChanges = [];
        const fileContent = file.content;
        const occurrenceTracker = /* @__PURE__ */ new Map();
        for (const change of rawChanges) {
          const { oldContent: oldContentFull, newContent: newContentFull } = change;
          if (!oldContentFull || !fileContent.includes(oldContentFull)) {
            console.warn(`[Diff Generation] Skipping change because oldContent is not in file.`, { oldContent: oldContentFull });
            continue;
          }
          const { oldContent, newContent, minimized } = minimizeDiff(oldContentFull, newContentFull);
          const occurrences = getAllOccurrences(fileContent, oldContentFull);
          const currentCount = occurrenceTracker.get(oldContentFull) || 0;
          if (currentCount >= occurrences.length) {
            console.warn(`[Diff Generation] Skipping change due to ambiguous occurrence.`, { oldContentFull });
            continue;
          }
          const occurrenceIndex = currentCount;
          occurrenceTracker.set(oldContentFull, currentCount + 1);
          const length = oldContent.length;
          let replacementType = "block";
          if (length <= 15) replacementType = "word";
          else if (length <= 50) replacementType = "phrase";
          else if (length <= 150) replacementType = "sentence";
          processedChanges.push({
            id: generateId(),
            oldContentFull,
            newContentFull,
            oldContent,
            newContent,
            occurrenceIndex,
            // 0-based index of this specific occurrence
            replacementType,
            context: change.context
            // Keep original context if provided
          });
        }
        console.log(`[Diff Generation] Processed ${processedChanges.length} changes for ${file.name}.`);
        return processedChanges;
      } catch (error4) {
        console.error(`[Diff Generation] API call failed for ${file.name}:`, error4.response ? error4.response.data : error4.message);
        if (error4 instanceof SyntaxError && error4.response) {
          console.error("Raw LLM Response:", error4.response.data.candidates[0].content.parts[0].text);
        }
        return [];
      }
    }, "generateDiffForFile");
    generateEditSummary = /* @__PURE__ */ __name((files, diffs) => {
      const fileCount = files.length;
      const diffCount = diffs.length;
      if (diffCount === 0) {
        return {
          phase: "summary",
          message: "I analyzed the files but found no changes were needed. The code may already be correct.",
          filesAnalyzed: fileCount,
          suggestionsMade: 0
        };
      }
      const fileNames = [...new Set(diffs.map((d) => d.fileName))].join(", ");
      return {
        phase: "summary",
        message: `I've prepared ${diffCount} change${diffCount > 1 ? "s" : ""} in ${fileCount} file${fileCount > 1 ? "s" : ""}: ${fileNames}. Please review the suggestions in the editor.`,
        filesAnalyzed: fileCount,
        suggestionsMade: diffCount
      };
    }, "generateEditSummary");
  }
});

// api/services/vectorStoreService.js
var vectorStoreService_exports = {};
__export(vectorStoreService_exports, {
  getVectorStore: () => getVectorStore2
});
var cosineSimilarity2, localVectorStore, storeInitialized, globalStore, inMemoryStore, vectorizeAvailable, vectorizeFailureCount, MAX_VECTORIZE_FAILURES, createVectorizeWrapper, getVectorStore2;
var init_vectorStoreService = __esm({
  "api/services/vectorStoreService.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    cosineSimilarity2 = /* @__PURE__ */ __name((vecA, vecB) => {
      const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
      const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
      const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
      if (magnitudeA === 0 || magnitudeB === 0) {
        return 0;
      }
      return dotProduct / (magnitudeA * magnitudeB);
    }, "cosineSimilarity");
    localVectorStore = [];
    storeInitialized = false;
    globalStore = globalThis.QUILLMIND_VECTOR_STORE || (globalThis.QUILLMIND_VECTOR_STORE = []);
    inMemoryStore = {
      async upsert(embeddings) {
        if (!storeInitialized) {
          console.log("Initializing in-memory vector store for this worker instance.");
          if (globalStore.length > 0) {
            localVectorStore = [...globalStore];
            console.log(`Loaded ${localVectorStore.length} embeddings from global store.`);
          }
          storeInitialized = true;
        }
        console.log(`Before upsert: store has ${localVectorStore.length} embeddings`);
        embeddings.forEach((embedding) => {
          const existingIndex = localVectorStore.findIndex((v) => v.id === embedding.id);
          if (existingIndex > -1) {
            console.log(`Updating existing embedding: ${embedding.id}`);
            localVectorStore[existingIndex] = embedding;
          } else {
            console.log(`Adding new embedding: ${embedding.id}`);
            localVectorStore.push(embedding);
          }
        });
        globalStore.length = 0;
        globalStore.push(...localVectorStore);
        console.log(`Upserted ${embeddings.length} embeddings. Total store size: ${localVectorStore.length}`);
        console.log(`Current embeddings in store: ${localVectorStore.map((v) => v.id).join(", ")}`);
        return { success: true };
      },
      async delete(ids) {
        if (globalStore.length > 0 && localVectorStore.length === 0) {
          localVectorStore = [...globalStore];
          console.log(`Loaded ${localVectorStore.length} embeddings from global store for deletion.`);
        }
        const initialLength = localVectorStore.length;
        localVectorStore = localVectorStore.filter((v) => !ids.includes(v.id));
        const deletedCount = initialLength - localVectorStore.length;
        globalStore.length = 0;
        globalStore.push(...localVectorStore);
        console.log(`Deleted ${deletedCount} embeddings. Total store size: ${localVectorStore.length}`);
        return { success: true, deletedCount };
      },
      async query(queryVector, { topK, returnMetadata, projectId }) {
        if (globalStore.length > 0 && localVectorStore.length === 0) {
          localVectorStore = [...globalStore];
          console.log(`Loaded ${localVectorStore.length} embeddings from global store for query.`);
        }
        console.log(`Query called on worker instance. Store has ${localVectorStore.length} embeddings.`);
        console.log(`Available embeddings: ${localVectorStore.map((v) => v.id).join(", ")}`);
        let relevantVectors = localVectorStore;
        if (projectId) {
          relevantVectors = localVectorStore.filter(
            (v) => v.metadata && v.metadata.projectId === projectId
          );
          console.log(`Filtered to ${relevantVectors.length} embeddings for project ${projectId}.`);
        }
        if (relevantVectors.length === 0) {
          console.log("No relevant embeddings found for the query/project, returning no matches.");
          return { matches: [] };
        }
        const similarities = relevantVectors.map((storedVector) => {
          const similarity = cosineSimilarity2(queryVector, storedVector.values);
          return {
            id: storedVector.id,
            score: similarity,
            metadata: storedVector.metadata,
            values: storedVector.values
          };
        });
        similarities.sort((a, b) => b.score - a.score);
        const topMatches = similarities.slice(0, topK);
        const matches = topMatches.map((match2) => {
          const result = { score: match2.score };
          if (returnMetadata) {
            result.metadata = match2.metadata;
          }
          return result;
        });
        console.log(`Found ${matches.length} matches in in-memory store.`);
        return { matches };
      }
    };
    vectorizeAvailable = true;
    vectorizeFailureCount = 0;
    MAX_VECTORIZE_FAILURES = 3;
    createVectorizeWrapper = /* @__PURE__ */ __name((vectorizeIndex) => {
      return {
        async upsert(embeddings) {
          if (!vectorizeAvailable) {
            console.log("Vectorize marked as unavailable, using in-memory store directly.");
            return await inMemoryStore.upsert(embeddings);
          }
          try {
            console.log("Attempting to upsert to Cloudflare Vectorize...");
            const result = await vectorizeIndex.upsert(embeddings);
            console.log(`Successfully upserted ${embeddings.length} embeddings to Vectorize.`);
            vectorizeFailureCount = 0;
            return result;
          } catch (error4) {
            console.error("Vectorize upsert failed, falling back to in-memory store:", error4.message);
            vectorizeFailureCount++;
            if (vectorizeFailureCount >= MAX_VECTORIZE_FAILURES) {
              console.warn(`Vectorize has failed ${vectorizeFailureCount} times. Marking as unavailable for this session.`);
              vectorizeAvailable = false;
            }
            return await inMemoryStore.upsert(embeddings);
          }
        },
        async delete(ids) {
          if (!vectorizeAvailable) {
            console.log("Vectorize marked as unavailable, using in-memory store directly.");
            return await inMemoryStore.delete(ids);
          }
          try {
            console.log("Attempting to delete from Cloudflare Vectorize...");
            const result = await vectorizeIndex.deleteByIds(ids);
            console.log(`Successfully deleted ${ids.length} embeddings from Vectorize.`);
            vectorizeFailureCount = 0;
            return result;
          } catch (error4) {
            console.error("Vectorize delete failed, falling back to in-memory store:", error4.message);
            vectorizeFailureCount++;
            if (vectorizeFailureCount >= MAX_VECTORIZE_FAILURES) {
              console.warn(`Vectorize has failed ${vectorizeFailureCount} times. Marking as unavailable for this session.`);
              vectorizeAvailable = false;
            }
            return await inMemoryStore.delete(ids);
          }
        },
        async query(queryVector, options) {
          if (!vectorizeAvailable) {
            console.log("Vectorize marked as unavailable, using in-memory store directly.");
            return await inMemoryStore.query(queryVector, options);
          }
          try {
            console.log("Attempting to query Cloudflare Vectorize...");
            const { topK, returnMetadata, projectId } = options;
            const expandedTopK = projectId ? Math.max(topK * 3, 10) : topK;
            const result = await vectorizeIndex.query(queryVector, {
              topK: expandedTopK,
              returnMetadata
            });
            if (projectId && result.matches) {
              const projectFilteredMatches = result.matches.filter(
                (match2) => match2.metadata && match2.metadata.projectId === projectId
              );
              result.matches = projectFilteredMatches.slice(0, topK);
              console.log(`Filtered Vectorize results to ${result.matches.length} matches for project ${projectId}.`);
            }
            console.log(`Successfully queried Vectorize, found ${result.matches?.length || 0} matches.`);
            vectorizeFailureCount = 0;
            return result;
          } catch (error4) {
            console.error("Vectorize query failed, falling back to in-memory store:", error4.message);
            vectorizeFailureCount++;
            if (vectorizeFailureCount >= MAX_VECTORIZE_FAILURES) {
              console.warn(`Vectorize has failed ${vectorizeFailureCount} times. Marking as unavailable for this session.`);
              vectorizeAvailable = false;
            }
            return await inMemoryStore.query(queryVector, options);
          }
        }
      };
    }, "createVectorizeWrapper");
    getVectorStore2 = /* @__PURE__ */ __name((env2) => {
      if (env2.VECTORIZE_INDEX) {
        console.log("Cloudflare Vectorize index available, using with fallback to in-memory store.");
        return createVectorizeWrapper(env2.VECTORIZE_INDEX);
      } else {
        console.log("Using in-memory vector store for local development.");
        return inMemoryStore;
      }
    }, "getVectorStore");
  }
});

// api/agents/fileCreationAgent.js
var generateId2, handleFileCreationRequest, createFile, deleteFile, renameFile, createBookStructure, checkExistingFiles, generateFileContent, generateExistingFilesSuggestions, getFileType;
var init_fileCreationAgent = __esm({
  "api/agents/fileCreationAgent.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils2();
    init_dbConfig();
    init_axios2();
    init_cloudflareKVVectorStore();
    generateId2 = /* @__PURE__ */ __name(() => {
      return "id-" + Math.random().toString(36).substr(2, 9) + "-" + Date.now().toString(36);
    }, "generateId");
    handleFileCreationRequest = /* @__PURE__ */ __name(async (body, env2, user) => {
      const { action, projectId, ...params } = body;
      if (!projectId) {
        return error3(400, { message: "Project ID is required for file operations." });
      }
      const apiKey = env2.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("GEMINI_API_KEY is not set in the environment variables.");
        return error3(500, { message: "AI service configuration error." });
      }
      console.log(`[File Creation Agent] Processing ${action} request for project ${projectId}`);
      try {
        switch (action) {
          case "create_file":
            return await createFile(params, projectId, env2);
          case "delete_file":
            return await deleteFile(params, projectId, env2);
          case "rename_file":
            return await renameFile(params, projectId, env2);
          case "create_book_structure":
            return await createBookStructure(params, projectId, env2, apiKey);
          default:
            return error3(400, { message: `Unknown action: ${action}` });
        }
      } catch (err) {
        console.error(`[File Creation Agent] Error:`, err.message);
        return error3(500, {
          message: "An error occurred while processing your file operation request.",
          details: err.message
        });
      }
    }, "handleFileCreationRequest");
    createFile = /* @__PURE__ */ __name(async (params, projectId, env2) => {
      const { name, type = "file", parent_id = null, content = "" } = params;
      if (!name) {
        return error3(400, { message: "File name is required." });
      }
      try {
        const result = await query(
          "INSERT INTO files (name, type, parent_id, project_id, content) VALUES (?, ?, ?, ?, ?) RETURNING file_id, project_id, parent_id, name, type, created_at, updated_at",
          [name, type, parent_id, projectId, content],
          env2
        );
        const fileId = result.rows[0].file_id;
        const createdFile = {
          file_id: fileId,
          name,
          type,
          parent_id,
          project_id: projectId,
          content
        };
        return json({
          result: `Successfully created ${type}: ${name}`,
          file: createdFile
        });
      } catch (err) {
        console.error("[File Creation Agent] Error creating file:", err.message);
        return error3(500, { message: "Failed to create file." });
      }
    }, "createFile");
    deleteFile = /* @__PURE__ */ __name(async (params, projectId, env2) => {
      const { fileId } = params;
      if (!fileId) {
        return error3(400, { message: "File ID is required for deletion." });
      }
      try {
        await query(
          "DELETE FROM files WHERE file_id = ? AND project_id = ?",
          [fileId, projectId],
          env2
        );
        return json({
          result: `Successfully deleted file with ID: ${fileId}`
        });
      } catch (err) {
        console.error("[File Creation Agent] Error deleting file:", err.message);
        return error3(500, { message: "Failed to delete file." });
      }
    }, "deleteFile");
    renameFile = /* @__PURE__ */ __name(async (params, projectId, env2) => {
      const { fileId, newName } = params;
      if (!fileId || !newName) {
        return error3(400, { message: "File ID and new name are required for renaming." });
      }
      try {
        await query(
          "UPDATE files SET name = ? WHERE file_id = ? AND project_id = ?",
          [newName, fileId, projectId],
          env2
        );
        return json({
          result: `Successfully renamed file to: ${newName}`
        });
      } catch (err) {
        console.error("[File Creation Agent] Error renaming file:", err.message);
        return error3(500, { message: "Failed to rename file." });
      }
    }, "renameFile");
    createBookStructure = /* @__PURE__ */ __name(async (params, projectId, env2, apiKey) => {
      const { numberOfChapters, bookTitle, storyGoal } = params;
      if (!numberOfChapters || !bookTitle || !storyGoal) {
        return error3(400, { message: "Number of chapters, book title, and story goal are required." });
      }
      console.log(`[Book Structure] Creating book structure: ${numberOfChapters} chapters, title: "${bookTitle}", goal: "${storyGoal}"`);
      try {
        const filesToCreate = [
          "prologue.md",
          ...Array.from({ length: numberOfChapters }, (_, i) => `chapter_${i + 1}.md`),
          "epilogue.md",
          "author_bio.md"
        ];
        const existingFiles = await checkExistingFiles(filesToCreate, projectId, env2);
        const filesToActuallyCreate = filesToCreate.filter((fileName) => !existingFiles.includes(fileName));
        console.log(`[Book Structure] Files to create: ${filesToActuallyCreate.join(", ")}`);
        console.log(`[Book Structure] Files already exist: ${existingFiles.join(", ")}`);
        console.log(`[Book Structure] Starting content generation for ${filesToActuallyCreate.length} files`);
        const allProjectFiles = await query(
          'SELECT file_id, name, content FROM files WHERE project_id = ? AND type = "file"',
          [projectId],
          env2
        );
        const createdFiles = [];
        const suggestions = [];
        for (const fileName of filesToActuallyCreate) {
          try {
            const result = await query(
              "INSERT INTO files (name, type, parent_id, project_id, content) VALUES (?, ?, ?, ?, ?) RETURNING file_id, project_id, parent_id, name, type, created_at, updated_at",
              [fileName, "file", null, projectId, ""],
              env2
            );
            const fileId = result.rows[0].file_id;
            const newFile = {
              file_id: fileId,
              name: fileName,
              type: "file",
              parent_id: null,
              project_id: projectId,
              content: ""
            };
            createdFiles.push(newFile);
            console.log(`[Book Structure] Successfully created empty file ${fileName}`);
            const tempFile = { name: fileName };
            const content = await generateFileContent(tempFile, bookTitle, storyGoal, allProjectFiles.rows, apiKey, env2, projectId);
            if (content && content.trim()) {
              suggestions.push({
                id: generateId2(),
                fileName,
                fileId,
                file_id: fileId,
                // Also include with underscore for compatibility
                content,
                type: "full_content_suggestion",
                // Convert to inline suggestion format
                originalRange: { startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 1 },
                suggestionRange: { startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 1 },
                deleteRange: { startLineNumber: 1, startColumn: 1, endLineNumber: 1, endColumn: 1 },
                text: content
              });
              console.log(`[Book Structure] Generated content suggestion for ${fileName}: ${content.length} characters`);
            }
          } catch (err) {
            console.error(`[Book Structure] Error creating file ${fileName}:`, err.message);
            try {
              const result = await query(
                "INSERT INTO files (name, type, parent_id, project_id, content) VALUES (?, ?, ?, ?, ?) RETURNING file_id, project_id, parent_id, name, type, created_at, updated_at",
                [fileName, "file", null, projectId, ""],
                env2
              );
              const fileId = result.rows[0].file_id;
              createdFiles.push({
                file_id: fileId,
                name: fileName,
                type: "file",
                parent_id: null,
                project_id: projectId,
                content: ""
              });
            } catch (fallbackErr) {
              console.error(`[Book Structure] Failed to create file ${fileName} even as fallback:`, fallbackErr.message);
            }
          }
        }
        console.log(`[Book Structure] Generating suggestions for ${existingFiles.length} existing files`);
        const existingFilesSuggestions = await generateExistingFilesSuggestions(
          existingFiles,
          projectId,
          bookTitle,
          storyGoal,
          allProjectFiles.rows,
          apiKey,
          env2
        );
        const allSuggestions = [...suggestions, ...existingFilesSuggestions];
        console.log(`[Book Structure] Total suggestions generated: ${allSuggestions.length}`);
        console.log(`[Book Structure] Suggestions breakdown:`, allSuggestions.map((s) => ({
          fileName: s.fileName,
          type: s.type,
          hasOldContent: !!s.oldContentFull,
          hasNewContent: !!s.newContentFull
        })));
        return json({
          result: `Successfully created book structure with ${createdFiles.length} new files. ${existingFiles.length} files already existed.`,
          createdFiles,
          existingFiles,
          suggestions: allSuggestions,
          bookStructure: {
            title: bookTitle,
            goal: storyGoal,
            chapters: numberOfChapters,
            files: filesToCreate
          }
        });
      } catch (err) {
        console.error("[Book Structure] Error creating book structure:", err.message);
        return error3(500, { message: "Failed to create book structure." });
      }
    }, "createBookStructure");
    checkExistingFiles = /* @__PURE__ */ __name(async (filesToCreate, projectId, env2) => {
      const existingFiles = [];
      for (const fileName of filesToCreate) {
        const exactMatch = await query(
          'SELECT name FROM files WHERE name = ? AND project_id = ? AND type = "file"',
          [fileName, projectId],
          env2
        );
        if (exactMatch.rows.length > 0) {
          existingFiles.push(fileName);
          continue;
        }
        const baseFileName = fileName.replace(/\.md$/, "");
        const variation = baseFileName.replace(/_/g, "");
        const variationFileName = `${variation}.md`;
        const variationMatch = await query(
          'SELECT name FROM files WHERE name = ? AND project_id = ? AND type = "file"',
          [variationFileName, projectId],
          env2
        );
        if (variationMatch.rows.length > 0) {
          existingFiles.push(fileName);
        }
      }
      return existingFiles;
    }, "checkExistingFiles");
    generateFileContent = /* @__PURE__ */ __name(async (file, bookTitle, storyGoal, allProjectFiles, apiKey, env2, projectId) => {
      const fileType = getFileType(file.name);
      let ragContext = "";
      try {
        const { getVectorStore: getVectorStore3 } = await Promise.resolve().then(() => (init_vectorStoreService(), vectorStoreService_exports));
        const searchQuery = `${bookTitle} ${storyGoal} ${fileType} ${file.name}`;
        const embeddingModel = "text-embedding-004";
        const embeddingApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${embeddingModel}:embedContent?key=${apiKey}`;
        const embeddingRequestBody = {
          model: `models/${embeddingModel}`,
          content: {
            parts: [{ text: searchQuery }]
          },
          taskType: "RETRIEVAL_QUERY"
        };
        const embeddingResponse = await axios_default.post(embeddingApiUrl, embeddingRequestBody, {
          headers: { "Content-Type": "application/json" }
        });
        const queryVector = embeddingResponse.data.embedding.values;
        const vectorStore = getVectorStore3(env2);
        const ragResults = await vectorStore.query(queryVector, {
          topK: 5,
          returnMetadata: true,
          projectId
        }, env2);
        if (ragResults && ragResults.matches && ragResults.matches.length > 0) {
          const fileIds = ragResults.matches.map((match2) => match2.metadata.fileId);
          const fileContents = await query(
            `SELECT file_id, name, content FROM files WHERE file_id IN (${fileIds.map(() => "?").join(", ")}) AND type = "file"`,
            fileIds,
            env2
          );
          ragContext = fileContents.rows.map(
            (file2) => `File: ${file2.name}
---
${file2.content}
---`
          ).join("\n\n");
          console.log(`[Book Structure] RAG found ${ragResults.matches.length} relevant files for ${file.name}`);
        }
      } catch (ragError) {
        console.warn(`[Book Structure] RAG search failed for ${file.name}:`, ragError.message);
      }
      const directContext = allProjectFiles.filter((f) => f.name !== file.name && f.content.trim()).map((f) => `File: ${f.name}
---
${f.content}
---`).join("\n\n");
      const contextText = ragContext || directContext || "No other files with content yet.";
      const prompt = `You are a creative writing assistant helping to create a book structure.

Book Title: "${bookTitle}"
Story Goal: "${storyGoal}"
Current File: "${file.name}"
File Type: ${fileType}

Context from other files in the project:
${contextText}

Please generate ${fileType} content for "${file.name}". 
- For prologue/chapters/epilogue: Create a compelling story structure with placeholder content, scene descriptions, and character notes
- For author bio: Create a professional author biography template
- Keep the content substantial but leave room for the author to expand
- Use markdown formatting appropriately
- Make it engaging and aligned with the story goal

IMPORTANT: Generate ONLY the raw markdown content for this file. Do NOT wrap it in code blocks like \`\`\`markdown\`\`\`. Do NOT add any explanations or additional text outside the file content.

Content for ${file.name}:`;
      try {
        const model = "gemini-1.5-flash";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const requestBody = {
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
          }
        };
        const response = await axios_default.post(apiUrl, requestBody, {
          headers: { "Content-Type": "application/json" }
        });
        let generatedContent = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
        generatedContent = generatedContent.replace(/^```markdown\s*\n?/i, "").replace(/^```\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
        console.log(`[Book Structure] Generated content for ${file.name}: ${generatedContent.length} characters`);
        return generatedContent;
      } catch (err) {
        console.error(`[Book Structure] Error generating content for ${file.name}:`, err.message);
        return `# ${file.name.replace(".md", "").replace(/_/g, " ").toUpperCase()}

[Content to be written for ${bookTitle}]`;
      }
    }, "generateFileContent");
    generateExistingFilesSuggestions = /* @__PURE__ */ __name(async (existingFiles, projectId, bookTitle, storyGoal, allProjectFiles, apiKey, env2) => {
      const suggestions = [];
      for (const fileName of existingFiles) {
        try {
          const fileData = await query(
            'SELECT file_id, name, content FROM files WHERE name = ? AND project_id = ? AND type = "file"',
            [fileName, projectId],
            env2
          );
          if (fileData.rows.length === 0) continue;
          const file = fileData.rows[0];
          const fileType = getFileType(fileName);
          const contextText = allProjectFiles.filter((f) => f.name !== fileName && f.content.trim()).map((f) => `File: ${f.name}
---
${f.content}
---`).join("\n\n");
          const prompt = `You are a creative writing assistant helping to enhance a book.

Book Title: "${bookTitle}"
Story Goal: "${storyGoal}"
Current File: "${fileName}"
File Type: ${fileType}

Current content of ${fileName}:
---
${file.content}
---

Context from other files:
${contextText || "No other files with content yet."}

Please provide 2-3 specific suggestions to improve this ${fileType} content to better align with the book's title and story goal. Focus on:
- Enhancing narrative flow
- Strengthening character development
- Improving scene descriptions
- Better alignment with the overall story goal

Format each suggestion as a brief improvement recommendation (1-2 sentences each).`;
          const model = "gemini-1.5-flash";
          const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
          const requestBody = {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500
            }
          };
          const response = await axios_default.post(apiUrl, requestBody, {
            headers: { "Content-Type": "application/json" }
          });
          const suggestionText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
          if (suggestionText) {
            suggestions.push({
              id: generateId2(),
              fileName,
              fileId: file.file_id,
              file_id: file.file_id,
              // Also include with underscore for compatibility
              oldContentFull: file.content,
              newContentFull: `${file.content}

<!-- AI Book Structure Suggestions -->
${suggestionText}`,
              type: "edit_agent_suggestion",
              // This will be categorized as editAgentSuggestion
              suggestionText,
              occurrenceIndex: 0
            });
            console.log(`[Book Structure] Generated suggestions for existing file ${fileName}`);
          }
        } catch (err) {
          console.error(`[Book Structure] Error generating suggestions for ${fileName}:`, err.message);
        }
      }
      return suggestions;
    }, "generateExistingFilesSuggestions");
    getFileType = /* @__PURE__ */ __name((fileName) => {
      const name = fileName.toLowerCase();
      if (name.includes("prologue")) return "prologue";
      if (name.includes("chapter")) return "chapter";
      if (name.includes("epilogue")) return "epilogue";
      if (name.includes("author") || name.includes("bio")) return "author biography";
      return "content";
    }, "getFileType");
  }
});

// api/agents/masterAgent.js
var getRoutingChoice, routeRequest;
var init_masterAgent = __esm({
  "api/agents/masterAgent.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_standardAgent();
    init_ragAgent();
    init_editAgent();
    init_fileCreationAgent();
    init_utils2();
    init_axios2();
    getRoutingChoice = /* @__PURE__ */ __name(async (text, context2, apiKey) => {
      const contextProvided = context2 && context2.files && context2.files.length > 0;
      const prompt = `You are a master routing agent. Your job is to classify a user's query into one of three categories based on the query and whether file context is provided.

Categories:
1. 'edit': The query requests to modify, edit, change, update, fix, or refactor code. This includes:
   - Direct edit requests: "edit this file", "modify the function", "change the code", "update the component"
   - Fix requests: "fix this bug", "correct the error", "resolve the issue"
   - Refactor requests: "refactor this code", "improve the structure", "optimize this function"
   - Add/remove requests: "add a new feature", "remove this line", "insert new code"
   - Replace requests: "replace this with", "substitute the code", "swap the implementation"

2. 'rag': The query requires searching across the entire project's files to be answered properly. This is for questions about how different parts of the code interact, broad project-level questions, or questions about files that are NOT provided in the context.

3. 'standard': The query is a general conversation topic OR it can be answered using ONLY the specific file context that has been provided by the user.

**Analysis:**
- **User Query:** "${text}"
- **File Context Provided:** ${contextProvided ? "Yes" : "No"}

**Decision Logic:**
- If the query contains edit-related keywords (edit, modify, change, update, fix, refactor, add, remove, replace, correct, improve, optimize, insert, substitute, swap) AND requests code changes, choose 'edit'.
- If the query is general (e.g., "hello", "what is react?"), choose 'standard'.
- If File Context is 'Yes' and the query is about that context (e.g., "explain this function", "what does this code do?"), choose 'standard'.
- If the query is about the project but requires knowledge beyond the provided context (e.g., "how does authentication work?", "where is this function used?"), choose 'rag'.
- If File Context is 'No' and the query is about the project, choose 'rag'.

Respond with only the single word: 'edit', 'rag', or 'standard'.`;
      const model = "gemini-1.5-flash";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const requestBody = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 10
        }
      };
      try {
        const geminiResponse = await axios_default.post(apiUrl, requestBody, { headers: { "Content-Type": "application/json" } });
        const choice = geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text || "standard";
        console.log(`Routing choice for query "${text}" (Context Provided: ${contextProvided}): ${choice.trim()}`);
        return choice.trim().toLowerCase();
      } catch (err) {
        console.error(`[AI ERROR] in Master Agent Routing:`, err.response?.data || err.message);
        return "standard";
      }
    }, "getRoutingChoice");
    routeRequest = /* @__PURE__ */ __name(async (body, env2, user) => {
      const { text, action, context: context2, projectId } = body;
      const apiKey = env2.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("GEMINI_API_KEY is not set in the environment variables.");
        return error3(500, { message: "AI service configuration error." });
      }
      if (action && ["create_file", "delete_file", "rename_file", "create_book_structure"].includes(action)) {
        console.log(`Routing to File Creation Agent for action: ${action}`);
        return await handleFileCreationRequest(body, env2, user);
      }
      if (action === "summarize_for_title") {
        console.log("Routing to Standard Agent for title summarization");
        const summarizationBody = {
          ...body,
          text: `Summarize the following text into a short, concise chat title (3-5 words). Do not use quotes. Text: "${text}"`
        };
        return await handleStandardChat(summarizationBody, env2, user);
      }
      const choice = await getRoutingChoice(text, context2, apiKey);
      let agentResponse;
      const agentBody = { text, context: context2, projectId, history: body.history };
      if (choice.includes("edit")) {
        console.log("Routing to Edit Agent");
        agentResponse = await handleEditRequest(agentBody, env2, user);
      } else if (choice.includes("rag")) {
        console.log("Routing to RAG Agent");
        agentResponse = await handleRagChat(agentBody, env2, user);
      } else {
        console.log("Routing to Standard Agent");
        agentResponse = await handleStandardChat(agentBody, env2, user);
      }
      try {
        const clonedResponse = agentResponse.clone();
        const responseBody = await clonedResponse.json();
        console.log("Master Agent Output:", JSON.stringify(responseBody, null, 2));
      } catch (e) {
        console.error("Could not log master agent output:", e);
      }
      return agentResponse;
    }, "routeRequest");
  }
});

// api/services/indexingService.js
var indexSingleFile, indexProjectFiles, removeFileFromIndex;
var init_indexingService = __esm({
  "api/services/indexingService.js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_dbConfig();
    init_axios2();
    init_cloudflareKVVectorStore();
    indexSingleFile = /* @__PURE__ */ __name(async (fileId, env2) => {
      console.log(`Starting indexing for file ID: ${fileId}`);
      const fileResult = await query("SELECT file_id, name, content, project_id FROM files WHERE file_id = $1 AND type = 'file'", [fileId], env2);
      if (!fileResult.rows || fileResult.rows.length === 0) {
        console.log(`File ${fileId} not found or is not a file. Nothing to index.`);
        return { success: true, message: "File not found or not indexable." };
      }
      const file = fileResult.rows[0];
      if (!file.content || file.content.trim() === "") {
        console.log(`File ${fileId} has no content. Nothing to index.`);
        return { success: true, message: "File has no content to index." };
      }
      const apiKey = env2.GEMINI_API_KEY;
      const embeddingModel = "text-embedding-004";
      const embeddingApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${embeddingModel}:embedContent?key=${apiKey}`;
      try {
        const embeddingRequestBody = {
          model: `models/${embeddingModel}`,
          content: {
            parts: [{ text: file.content }]
          },
          taskType: "RETRIEVAL_DOCUMENT"
        };
        const embeddingResponse = await axios_default.post(embeddingApiUrl, embeddingRequestBody, {
          headers: { "Content-Type": "application/json" }
        });
        const vector = embeddingResponse.data.embedding.values;
        const embedding = {
          id: `file-${file.file_id}`,
          values: vector,
          metadata: {
            projectId: file.project_id,
            fileId: file.file_id,
            fileName: file.name
          }
        };
        const index = getVectorStore(env2);
        await index.upsert([embedding], env2);
        console.log(`Successfully indexed file ${fileId} (${file.name}).`);
        return { success: true, message: `Indexed file ${file.name}.` };
      } catch (err) {
        console.error(`Failed to generate embedding for file ${fileId} (${file.name}):`, err.response?.data || err.message);
        return { success: false, message: "Failed to index file." };
      }
    }, "indexSingleFile");
    indexProjectFiles = /* @__PURE__ */ __name(async (projectId, env2) => {
      console.log(`Starting indexing for project ID: ${projectId}`);
      const filesResult = await query("SELECT file_id, name, content FROM files WHERE project_id = $1 AND type = 'file'", [projectId], env2);
      const files = filesResult.rows;
      if (!files || files.length === 0) {
        console.log(`No files found for project ${projectId}. Nothing to index.`);
        return { success: true, message: "No files to index." };
      }
      const apiKey = env2.GEMINI_API_KEY;
      const embeddingModel = "text-embedding-004";
      const embeddingApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${embeddingModel}:embedContent?key=${apiKey}`;
      const embeddings = [];
      for (const file of files) {
        if (file.content && file.content.trim() !== "") {
          try {
            const embeddingRequestBody = {
              model: `models/${embeddingModel}`,
              content: {
                parts: [{ text: file.content }]
              },
              taskType: "RETRIEVAL_DOCUMENT"
            };
            const embeddingResponse = await axios_default.post(embeddingApiUrl, embeddingRequestBody, {
              headers: { "Content-Type": "application/json" }
            });
            const vector = embeddingResponse.data.embedding.values;
            embeddings.push({
              id: `file-${file.file_id}`,
              // Vectorize requires string IDs
              values: vector,
              metadata: {
                projectId,
                fileId: file.file_id,
                fileName: file.name
              }
            });
          } catch (err) {
            console.error(`Failed to generate embedding for file ${file.file_id} (${file.name}):`, err.response?.data || err.message);
          }
        }
      }
      if (embeddings.length === 0) {
        console.log("No valid content found to generate embeddings.");
        return { success: true, message: "No content to index." };
      }
      const index = getVectorStore(env2);
      try {
        await index.upsert(embeddings, env2);
        console.log(`Successfully indexed ${embeddings.length} files for project ${projectId}.`);
        return { success: true, message: `Indexed ${embeddings.length} files.` };
      } catch (err) {
        console.error(`Failed to insert embeddings into vector store for project ${projectId}:`, err);
        return { success: false, message: "Failed to index files." };
      }
    }, "indexProjectFiles");
    removeFileFromIndex = /* @__PURE__ */ __name(async (fileId, env2) => {
      console.log(`Removing file ID: ${fileId} from vector store`);
      try {
        const index = getVectorStore(env2);
        await index.delete([`file-${fileId}`], env2);
        console.log(`Successfully removed file ${fileId} from vector store.`);
        return { success: true, message: `Removed file from index.` };
      } catch (err) {
        console.error(`Failed to remove file ${fileId} from vector store:`, err.message);
        return { success: false, message: "Failed to remove file from index." };
      }
    }, "removeFileFromIndex");
  }
});

// api/[[catchall]].js
var import_bcryptjs, import_jsonwebtoken, authenticate, buildFileTree, onRequest, handleAiAction;
var init_catchall = __esm({
  "api/[[catchall]].js"() {
    init_functionsRoutes_0_9404583045329116();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_dbConfig();
    import_bcryptjs = __toESM(require_bcrypt());
    import_jsonwebtoken = __toESM(require_jsonwebtoken());
    init_utils2();
    init_masterAgent();
    init_indexingService();
    authenticate = /* @__PURE__ */ __name((request, env2) => {
      const authHeader = request.headers.get("authorization");
      const token = authHeader && authHeader.split(" ")[1];
      if (token == null) {
        return { error: error3(401, { message: "No token provided." }) };
      }
      const secret = env2.JWT_SECRET;
      if (!secret) {
        return { error: error3(500, { message: "Internal server configuration error." }) };
      }
      try {
        const user = import_jsonwebtoken.default.verify(token, secret);
        return { user };
      } catch (err) {
        return { error: error3(403, { message: "Invalid or expired token." }) };
      }
    }, "authenticate");
    buildFileTree = /* @__PURE__ */ __name((files) => {
      const fileMap = {};
      const tree = [];
      files.forEach((file) => {
        fileMap[file.file_id] = { ...file, children: [] };
      });
      files.forEach((file) => {
        if (file.parent_id) {
          const parent = fileMap[file.parent_id];
          if (parent) {
            parent.children.push(fileMap[file.file_id]);
          } else {
            tree.push(fileMap[file.file_id]);
          }
        } else {
          tree.push(fileMap[file.file_id]);
        }
      });
      return tree;
    }, "buildFileTree");
    onRequest = /* @__PURE__ */ __name(async (context2) => {
      const { request, env: env2, params } = context2;
      const url = new URL(request.url);
      const path = url.pathname;
      const pathSegments = path.split("/").filter(Boolean);
      console.log(`--- Request received for: ${path} ---`);
      console.log("Environment keys:", Object.keys(env2));
      if (pathSegments[0] !== "api") {
        return new Response("Not Found.", { status: 404 });
      }
      const resource = pathSegments[1];
      const id = pathSegments[2];
      const subResource = pathSegments[3];
      let user;
      if (!(resource === "auth" && (id === "login" || id === "register"))) {
        const authResult = authenticate(request, env2);
        if (authResult.error) return authResult.error;
        user = authResult.user;
      }
      try {
        if (resource === "auth") {
          if (id === "register") {
            const { username, email, password } = await request.json();
            if (!username || !email || !password) return error3(400, { message: "Username, email, and password are required." });
            const checkUserQuery = "SELECT user_id FROM users WHERE email = $1";
            const existingUserResult = await query(checkUserQuery, [email], env2);
            if (existingUserResult.rows.length > 0) return error3(409, { message: "Email already registered." });
            const hashedPassword = await import_bcryptjs.default.hash(password, 10);
            const insertUserQuery = `INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING user_id, username, email, created_at;`;
            const newUserResult = await query(insertUserQuery, [username, email, hashedPassword], env2);
            return json({ message: "User registered successfully!", user: newUserResult.rows[0] }, { status: 201 });
          }
          if (id === "login") {
            const { email, password } = await request.json();
            if (!email || !password) return error3(400, { message: "Email and password are required." });
            const findUserQuery = "SELECT user_id, email, username, password_hash FROM users WHERE email = $1";
            const userResult = await query(findUserQuery, [email], env2);
            if (userResult.rows.length === 0) return error3(401, { message: "Invalid credentials." });
            const user2 = userResult.rows[0];
            const isMatch = await import_bcryptjs.default.compare(password, user2.password_hash);
            if (!isMatch) return error3(401, { message: "Invalid credentials." });
            const secret = env2.JWT_SECRET;
            if (!secret) return error3(500, { message: "Internal server configuration error." });
            const payload = { userId: user2.user_id, username: user2.username };
            const token = import_jsonwebtoken.default.sign(payload, secret, { expiresIn: env2.JWT_EXPIRES_IN || "1h" });
            return json({ message: "Login successful!", accessToken: token, user: { userId: user2.user_id, username: user2.username, email: user2.email } });
          }
        }
        if (resource === "projects") {
          const userId = user.userId;
          if (request.method === "GET" && !id) {
            const result = await query("SELECT project_id, name, created_at, updated_at FROM projects WHERE user_id = $1 ORDER BY created_at DESC", [userId], env2);
            const projects = result.rows.map((p) => ({ ...p, id: p.project_id }));
            return json(projects);
          }
          if (request.method === "POST" && !id) {
            const { name } = await request.json();
            if (!name) return error3(400, { message: "Project name is required." });
            const result = await query("INSERT INTO projects (user_id, name) VALUES ($1, $2) RETURNING project_id, user_id, name, created_at, updated_at;", [userId, name], env2);
            return json(result.rows[0], { status: 201 });
          }
          if (request.method === "DELETE" && id && !subResource) {
            const ownerResult = await query("SELECT user_id FROM projects WHERE project_id = $1", [id], env2);
            if (ownerResult.rows.length === 0) return error3(404, { message: "Project not found." });
            if (ownerResult.rows[0].user_id !== userId) return error3(403, { message: "Forbidden: You do not own this project." });
            await query("DELETE FROM projects WHERE project_id = $1", [id], env2);
            return json({ message: `Project ${id} deleted successfully` });
          }
          if (id && subResource === "files") {
            const ownerResult = await query("SELECT user_id FROM projects WHERE project_id = $1", [id], env2);
            if (ownerResult.rows.length === 0) return error3(404, { message: "Project not found." });
            if (ownerResult.rows[0].user_id !== userId) return error3(403, { message: "Forbidden." });
            if (request.method === "GET") {
              const result = await query("SELECT file_id, parent_id, name, type, content, created_at, updated_at FROM files WHERE project_id = $1 ORDER BY name ASC", [id], env2);
              const fileTree = buildFileTree(result.rows);
              return json(fileTree);
            }
            if (request.method === "POST") {
              const { name, type, parent_id = null, content = null } = await request.json();
              if (!name || !type) return error3(400, { message: "File name and type are required." });
              if (type !== "file" && type !== "folder") return error3(400, { message: 'Type must be "file" or "folder".' });
              const result = await query(
                "INSERT INTO files (project_id, parent_id, name, type, content) VALUES ($1, $2, $3, $4, $5) RETURNING file_id, project_id, parent_id, name, type, created_at, updated_at;",
                [id, parent_id, name, type, type === "file" ? content || "" : null],
                env2
              );
              const newFile = { ...result.rows[0], id: result.rows[0].file_id };
              if (type === "file" && content && content.trim() !== "") {
                try {
                  await indexSingleFile(newFile.file_id, env2);
                  console.log(`Auto-indexed new file: ${newFile.name}`);
                } catch (indexError) {
                  console.error(`Failed to auto-index new file ${newFile.name}:`, indexError);
                }
              }
              return json(newFile, { status: 201 });
            }
          }
          if (id && subResource === "index" && request.method === "POST") {
            const ownerResult = await query("SELECT user_id FROM projects WHERE project_id = $1", [id], env2);
            if (ownerResult.rows.length === 0) return error3(404, { message: "Project not found." });
            if (ownerResult.rows[0].user_id !== userId) return error3(403, { message: "Forbidden." });
            const result = await indexProjectFiles(id, env2);
            if (result.success) {
              return json({ message: result.message });
            } else {
              return error3(500, { message: result.message });
            }
          }
        }
        if (resource === "files" && id) {
          const ownerCheck = await query("SELECT p.user_id FROM files f JOIN projects p ON f.project_id = p.project_id WHERE f.file_id = $1", [id], env2);
          if (ownerCheck.rows.length === 0) return error3(404, { message: "File not found." });
          if (ownerCheck.rows[0].user_id !== user.userId) return error3(403, { message: "Forbidden." });
          if (request.method === "GET") {
            const result = await query("SELECT file_id, project_id, parent_id, name, type, content, created_at, updated_at FROM files WHERE file_id = $1", [id], env2);
            if (result.rows.length === 0) return error3(404, { message: "File not found." });
            return json({ ...result.rows[0], id: result.rows[0].file_id });
          }
          if (request.method === "PUT") {
            const { content, name } = await request.json();
            if (typeof content !== "string") return error3(400, { message: "Content must be a string." });
            const fileInfoResult = await query("SELECT file_id, name, type FROM files WHERE file_id = $1", [id], env2);
            const fileInfo = fileInfoResult.rows[0];
            if (name) {
              await query("UPDATE files SET content = $1, name = $2 WHERE file_id = $3", [content, name, id], env2);
            } else {
              await query("UPDATE files SET content = $1 WHERE file_id = $2", [content, id], env2);
            }
            if (fileInfo && fileInfo.type === "file" && content && content.trim() !== "") {
              try {
                await indexSingleFile(id, env2);
                console.log(`Auto-reindexed updated file: ${fileInfo.name}`);
              } catch (indexError) {
                console.error(`Failed to auto-reindex updated file ${fileInfo.name}:`, indexError);
              }
            }
            return json({ message: `File ${id} updated.` });
          }
          if (request.method === "DELETE") {
            const fileCheck = await query("SELECT type FROM files WHERE file_id = $1", [id], env2);
            if (fileCheck.rows.length === 0) return error3(404, { message: "File not found." });
            const getFilesToDeleteQuery = `
          WITH RECURSIVE sub_files AS (
            SELECT file_id, type FROM files WHERE file_id = $1
            UNION ALL
            SELECT f.file_id, f.type FROM files f
            INNER JOIN sub_files sf ON f.parent_id = sf.file_id
          )
          SELECT file_id FROM sub_files WHERE type = 'file';
        `;
            const filesToDeleteResult = await query(getFilesToDeleteQuery, [id], env2);
            const fileIdsToDelete = filesToDeleteResult.rows.map((row) => row.file_id);
            for (const fileId of fileIdsToDelete) {
              try {
                await removeFileFromIndex(fileId, env2);
                console.log(`Removed file ${fileId} from vector store`);
              } catch (indexError) {
                console.error(`Failed to remove file ${fileId} from vector store:`, indexError);
              }
            }
            const deleteQuery = `
          WITH RECURSIVE sub_files AS (
            SELECT file_id FROM files WHERE file_id = $1
            UNION ALL
            SELECT f.file_id FROM files f
            INNER JOIN sub_files sf ON f.parent_id = sf.file_id
          )
          DELETE FROM files WHERE file_id IN (SELECT file_id FROM sub_files);
        `;
            await query(deleteQuery, [id], env2);
            return json({ message: `File or folder ${id} and all its contents deleted successfully` });
          }
          if (request.method === "PATCH") {
            const { name, parent_id } = await request.json();
            const updates = [];
            const values = [];
            let i = 1;
            if (name !== void 0) {
              updates.push(`name = $${i++}`);
              values.push(name);
            }
            if (parent_id !== void 0) {
              if (parent_id) {
                const parentCheck = await query("SELECT type FROM files WHERE file_id = $1", [parent_id], env2);
                if (parentCheck.rows.length === 0 || parentCheck.rows[0].type !== "folder") {
                  return error3(400, { message: "Invalid parent folder." });
                }
              }
              updates.push(`parent_id = $${i++}`);
              values.push(parent_id);
            }
            if (updates.length > 0) {
              values.push(id);
              const queryText = `UPDATE files SET ${updates.join(", ")}, updated_at = NOW() WHERE file_id = $${i}`;
              await query(queryText, values, env2);
              return json({ message: `File ${id} updated.` });
            }
            return json({ message: "No update performed." });
          }
        }
        if (resource === "ai" && id === "gemini-action") {
          const authResult = authenticate(request, env2);
          if (authResult.error) return authResult.error;
          const user2 = authResult.user;
          const body = await request.json();
          return await handleAiAction(body, env2, user2);
        }
        return new Response("API route not found.", { status: 404 });
      } catch (e) {
        console.error("Error in API handler:", e.stack);
        return error3(500, { message: "An internal server error occurred.", details: e.message });
      }
    }, "onRequest");
    handleAiAction = /* @__PURE__ */ __name(async (body, env2, user) => {
      try {
        return routeRequest(body, env2, user);
      } catch (err) {
        console.error(`[AI ERROR] for user ${user?.userId}:`, err.response?.data || err.message);
        const errorMessage = err.response?.data?.error?.message || "AI request failed.";
        return error3(err.response?.status || 500, { message: `AI service error: ${errorMessage}` });
      }
    }, "handleAiAction");
  }
});

// ../.wrangler/tmp/pages-IhpGUp/functionsRoutes-0.9404583045329116.mjs
var routes;
var init_functionsRoutes_0_9404583045329116 = __esm({
  "../.wrangler/tmp/pages-IhpGUp/functionsRoutes-0.9404583045329116.mjs"() {
    init_catchall();
    routes = [
      {
        routePath: "/api/:catchall*",
        mountPath: "/api",
        method: "",
        middlewares: [],
        modules: [onRequest]
      }
    ];
  }
});

// ../.wrangler/tmp/bundle-Xemezu/middleware-loader.entry.ts
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../.wrangler/tmp/bundle-Xemezu/middleware-insertion-facade.js
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../node_modules/wrangler/templates/pages-template-worker.ts
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// ../node_modules/path-to-regexp/dist.es2015/index.js
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count3 = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count3--;
          if (count3 === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count3++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count3)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode3 = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith2 = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith2), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode3(token));
    } else {
      var prefix = escapeString(encode3(token.prefix));
      var suffix = escapeString(encode3(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env2, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context2 = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env: env2,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context2);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error4) {
      if (isFailOpen) {
        const response = await env2["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error4;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error4 = reduceError(e);
    return Response.json(error4, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-Xemezu/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// ../node_modules/wrangler/templates/middleware/common.ts
init_functionsRoutes_0_9404583045329116();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-Xemezu/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

bcryptjs/dist/bcrypt.js:
  (**
   * @license bcrypt.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
   * Released under the Apache License, Version 2.0
   * see: https://github.com/dcodeIO/bcrypt.js for details
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=functionsWorker-0.6968769530124421.mjs.map
