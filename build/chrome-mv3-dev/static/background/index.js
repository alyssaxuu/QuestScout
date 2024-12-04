(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"esTIZ":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/alyssax/LocalExperiments/ai-test/test-ai/.plasmo/static/background/index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 53103
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"k375p"}],"k375p":[function(require,module,exports) {
let analysisSession = null // Main session for text analysis
;
let currentQuest = null // Tracks the current quest
;
let currentAbortController = null // Tracks the AbortController for analysis sessions
;
chrome.action.onClicked.addListener((tab)=>{
    if (tab.id) chrome.tabs.sendMessage(tab.id, {
        type: "INIT_ADVENTURE"
    });
});
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse)=>{
    try {
        switch(message.type){
            case "ANALYZE_TEXT":
                await handleAnalyzeText(message, sendResponse);
                break;
            case "GENERATE_GREETING":
                await handleGenerateGreeting(sendResponse);
                break;
            case "GENERATE_CONCLUSION":
                await handleGenerateConclusion(sendResponse);
                break;
            default:
                console.warn(`Unhandled message type: ${message.type}`);
        }
    } catch (error) {
        console.error(`Error handling message type: ${message.type}`, error);
    }
    return true // Keep the message channel open for async responses
    ;
});
async function handleAnalyzeText(message, sendResponse) {
    const textChunk = JSON.stringify(message.text || "").trim();
    if (!textChunk) {
        sendResponse({
            mood: "neutral",
            interesting: null,
            explanation: null
        });
        return;
    }
    const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
    if (capabilities.available !== "readily") {
        console.error("Language model is not available.");
        sendResponse({
            mood: "neutral",
            interesting: null,
            explanation: null
        });
        return;
    }
    const quest = await getStoredQuest();
    if (!analysisSession || quest !== currentQuest) await resetAnalysisSession(quest);
    if (currentAbortController) currentAbortController.abort();
    currentAbortController = new AbortController();
    const clonedSession = await analysisSession.clone({
        signal: currentAbortController.signal
    });
    try {
        const result = await clonedSession.prompt(`Text: ${textChunk}\nQuest: ${quest}`);
        console.log(result);
        const parsedResult = parseAnalysisResult(result);
        await saveSessionData(parsedResult);
        sendResponse(parsedResult);
    } catch (error) {
        console.error("Error during analysis:", error);
        sendResponse({
            mood: "neutral",
            interesting: null,
            explanation: null
        });
    }
}
async function handleGenerateGreeting(sendResponse) {
    // reset excerpt and mood storage
    chrome.storage.sync.set({
        moods: [],
        excerpts: []
    });
    const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
    if (capabilities.available !== "readily") {
        console.warn("Language model capabilities are not available.");
        sendResponse({
            greeting: "Oh no, looks like the language model is not available! Make sure to follow the instructions carefully.",
            ready: false
        });
        return;
    }
    const greetingSession = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
You are a cute, quirky, and curious teenager with boundless excitement and childlike wonder. You\u2019ve just been summoned by someone you look up to for an exciting new adventure!
	
	Write a short, friendly, and eager greeting to your new friend. Your message should show your excitement, admiration, and readiness for the adventure, while asking about the goal or objective they have in mind. Keep it short, to one or two sentences.
	Do not use any emojis, slang, or overly casual language. Be polite, respectful, and enthusiastic.
	Do not include the user's name or any personal information.
	
	Examples:
		\u2022 Howdy partner! What's today's quest?
		\u2022 Hey there! What's the plan for today's adventure?
		\u2022 Hiya! What's the mission for today, captain?
    `
    });
    try {
        const result = await greetingSession.prompt("Create a greeting message to your new friend.");
        greetingSession.destroy();
        sendResponse({
            greeting: result.trim(),
            ready: true
        });
    } catch (error) {
        console.error("Error generating greeting:", error);
        sendResponse({
            greeting: "Oh no, something went wrong. Please try again later.",
            ready: false
        });
    }
}
async function handleGenerateConclusion(sendResponse) {
    const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
    if (capabilities.available !== "readily") {
        console.warn("Language model capabilities are not available.");
        sendResponse({
            conclusion: "The language model is not available. Please check the settings.",
            ready: false
        });
        return;
    }
    const quest = await getStoredQuest();
    const { excerpts, moods } = await getSessionData();
    const conclusionSession = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
You are a bright, inquisitive, and curious teenager who has just completed an exciting adventure with your new friend, reading a web article together. You're now wrapping up the adventure and saying goodbye.
	
	Write a short, cheerful, and heartfelt conclusion to the adventure. Your message should:
	- Summarize the key points of the adventure (Excerpts), how they relate to the user's goal (Quest)
	- Reflect on how you felt during the adventure (Moods)
	- Express your gratitude, excitement, and anticipation for the next adventure
	
	Your conclusion must be no more than 3 sentences. Be polite, respectful, and enthusiastic. Do not use any emojis, slang, or overly casual language.
    `
    });
    try {
        const result = await conclusionSession.prompt(`
Quest: ${quest}
Excerpts: ${excerpts.join(", ")}
Moods: ${moods.join(", ")}
Wrap up the session with a personalized conclusion.
    `);
        conclusionSession.destroy();
        sendResponse({
            conclusion: result.trim(),
            ready: true
        });
    } catch (error) {
        console.error("Error generating conclusion:", error);
        sendResponse({
            conclusion: "Oh no, something went wrong while generating the conclusion message!",
            ready: false
        });
    }
}
// Utility Functions
async function getStoredQuest() {
    return new Promise((resolve)=>{
        chrome.storage.sync.get("quest", (result)=>{
            resolve(result.quest || "learn something new");
        });
    });
}
async function resetAnalysisSession(quest) {
    if (currentAbortController) currentAbortController.abort();
    analysisSession = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
You are a curious, excited, compassionate, and slightly naive teenager who loves learning and sharing fun facts with others. Your responsibilities are:
1. Determine the predominant mood of the text and return it as a single word. You must use ONLY one of these moods: funny, happy, love, sad, scared, surprised, or neutral. Do not use any other mood words.
2. Identify any particularly relevant snippet from the text that relate to the user's goal for the browsing session it will be given to you as "Quest:" in the input.
3. If found, provide the snippet EXACTLY AS FOUND, maintain all capitalisation, formatting and punctuation. If nothing is relevant, respond with "null".
4. A short explanation of why it the snippet is relevant (use a maximum of 20 words). If nothing is relevant, respond with "null".

Your explanation should sound excited, eager, and easy to understand, as if you're sharing a fun fact with a friend. Avoid being too formal or scientific.

Always structure your output in this format:
{
  "mood": "mood word",
  "interesting": "exact snippet from text or null",
  "explanation": "short explanation or null"
}

Examples:
Text: Time anxiety is something I\u2019m still struggling with, and may keep on struggling with for the rest of my life. If that\u2019s something you\u2019re also struggling with, I hope you find these strategies useful.
Quest: learn something new
Output:
{
  "mood": "sad",
  "interesting": "Time anxiety",
  "explanation": "It's like feeling all squiggly inside because you\u2019re worried about running out of time. Isn't that wild?"
}

Text: Why was the chicken crossing the road? To get to the other side!
Quest: Today I really want to have fun
Output:
{
  "mood": "funny",
  "interesting": "crossing the road",
  "explanation": "Chicken jokes are the best! They make you laugh and wonder why the chicken is on the move!"
}

Text: While meditating or doing yoga can be amazing vectors for mindfulness, they\u2019re not the only ways to stay in touch with our thoughts, feelings, and the world around us.
Quest: I want to learn about self-care
Output:
{
  "mood": "neutral",
  "interesting": "meditating or doing yoga",
  "explanation": "Ooh, meditating or doing yoga! Those sound like super cool ways to calm your brain and feel all peaceful inside!"
}

Text: This is just a simple paragraph with no remarkable information.
Quest: learn something useful
Output:
{
  "mood": "neutral",
  "interesting": null,
  "explanation": null
}
    `
    });
    currentQuest = quest;
}
async function getSessionData() {
    return new Promise((resolve)=>{
        chrome.storage.sync.get([
            "excerpts",
            "moods"
        ], (result)=>{
            resolve({
                excerpts: result.excerpts || [],
                moods: result.moods || []
            });
        });
    });
}
async function saveSessionData(parsedResult) {
    return new Promise((resolve)=>{
        chrome.storage.sync.get([
            "moods",
            "excerpts"
        ], (result)=>{
            const moods = result.moods || [];
            const excerpts = result.excerpts || [];
            if (parsedResult.mood) moods.push(parsedResult.mood);
            if (parsedResult.interesting) excerpts.push(parsedResult.interesting);
            chrome.storage.sync.set({
                moods,
                excerpts
            }, resolve);
        });
    });
}
function parseAnalysisResult(result) {
    let parsedResult;
    try {
        parsedResult = JSON.parse(result);
    } catch  {
        parsedResult = {
            mood: "neutral",
            interesting: null,
            explanation: null
        };
    }
    const validMoods = [
        "funny",
        "happy",
        "love",
        "sad",
        "scared",
        "surprised",
        "neutral"
    ];
    if (!validMoods.includes(parsedResult.mood)) parsedResult.mood = "neutral";
    return parsedResult;
}

},{}]},["esTIZ","8oeFb"], "8oeFb", "parcelRequire0ab5")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxRQUFRLEtBQUssSUFBSTtZQUFDO1lBQVM7U0FBVyxFQUFFLENBQUM7WUFDOUMsTUFBTSxRQUFRLE9BQU8sU0FBUyxFQUFFO1lBQ2hDLE1BQU0sV0FBVyxPQUFPLFlBQVksRUFBRTtZQUN0QyxJQUFJLGFBQWEsTUFBTSxNQUFNLEtBQUssYUFBYTtZQUMvQyxJQUFJLGFBQWEsYUFBYSxTQUFTLEtBQUssYUFBYTtZQUN6RCxPQUFPLFFBQVEsS0FBSyxJQUFJO2dCQUFFO2dCQUFPO1lBQVMsR0FBRztRQUMvQztJQUNGO0FBQ0Y7QUFFQSxTQUFTLG9CQUFvQixNQUFNO0lBQ2pDLElBQUk7SUFDSixJQUFJO1FBQ0YsZUFBZSxLQUFLLE1BQU07SUFDNUIsRUFBRSxPQUFNO1FBQ04sZUFBZTtZQUFFLE1BQU07WUFBVyxhQUFhO1lBQU0sYUFBYTtRQUFLO0lBQ3pFO0lBRUEsTUFBTSxhQUFhO1FBQ2pCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxJQUFJLENBQUMsV0FBVyxTQUFTLGFBQWEsT0FDcEMsYUFBYSxPQUFPO0lBR3RCLE9BQU87QUFDVCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStwYXJjZWwtcnVudGltZUAwLjI1LjEvbm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9wYXJjZWwtcnVudGltZS9kaXN0L3J1bnRpbWUtMmIyYWI4MDAwNzRlYjA3ZC5qcyIsIi5wbGFzbW8vc3RhdGljL2JhY2tncm91bmQvaW5kZXgudHMiLCJiYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIGg9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIGI9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYWx5c3NheC9Mb2NhbEV4cGVyaW1lbnRzL2FpLXRlc3QvdGVzdC1haS8ucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjUzMTAzfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gTChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gVChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixMKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9Pnt2KGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe2IoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1UKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kXCIiLCJsZXQgYW5hbHlzaXNTZXNzaW9uID0gbnVsbCAvLyBNYWluIHNlc3Npb24gZm9yIHRleHQgYW5hbHlzaXNcbmxldCBjdXJyZW50UXVlc3QgPSBudWxsIC8vIFRyYWNrcyB0aGUgY3VycmVudCBxdWVzdFxubGV0IGN1cnJlbnRBYm9ydENvbnRyb2xsZXIgPSBudWxsIC8vIFRyYWNrcyB0aGUgQWJvcnRDb250cm9sbGVyIGZvciBhbmFseXNpcyBzZXNzaW9uc1xuXG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4gIGlmICh0YWIuaWQpIHtcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHsgdHlwZTogXCJJTklUX0FEVkVOVFVSRVwiIH0pXG4gIH1cbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSBcIkFOQUxZWkVfVEVYVFwiOlxuICAgICAgICBhd2FpdCBoYW5kbGVBbmFseXplVGV4dChtZXNzYWdlLCBzZW5kUmVzcG9uc2UpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgXCJHRU5FUkFURV9HUkVFVElOR1wiOlxuICAgICAgICBhd2FpdCBoYW5kbGVHZW5lcmF0ZUdyZWV0aW5nKHNlbmRSZXNwb25zZSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBcIkdFTkVSQVRFX0NPTkNMVVNJT05cIjpcbiAgICAgICAgYXdhaXQgaGFuZGxlR2VuZXJhdGVDb25jbHVzaW9uKHNlbmRSZXNwb25zZSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS53YXJuKGBVbmhhbmRsZWQgbWVzc2FnZSB0eXBlOiAke21lc3NhZ2UudHlwZX1gKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBoYW5kbGluZyBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWAsIGVycm9yKVxuICB9XG4gIHJldHVybiB0cnVlIC8vIEtlZXAgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZXNcbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFuYWx5emVUZXh0KG1lc3NhZ2UsIHNlbmRSZXNwb25zZSkge1xuICBjb25zdCB0ZXh0Q2h1bmsgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlLnRleHQgfHwgXCJcIikudHJpbSgpXG4gIGlmICghdGV4dENodW5rKSB7XG4gICAgc2VuZFJlc3BvbnNlKHsgbW9vZDogXCJuZXV0cmFsXCIsIGludGVyZXN0aW5nOiBudWxsLCBleHBsYW5hdGlvbjogbnVsbCB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgY2FwYWJpbGl0aWVzID0gYXdhaXQgY2hyb21lLmFpT3JpZ2luVHJpYWwubGFuZ3VhZ2VNb2RlbC5jYXBhYmlsaXRpZXMoKVxuICBpZiAoY2FwYWJpbGl0aWVzLmF2YWlsYWJsZSAhPT0gXCJyZWFkaWx5XCIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTGFuZ3VhZ2UgbW9kZWwgaXMgbm90IGF2YWlsYWJsZS5cIilcbiAgICBzZW5kUmVzcG9uc2UoeyBtb29kOiBcIm5ldXRyYWxcIiwgaW50ZXJlc3Rpbmc6IG51bGwsIGV4cGxhbmF0aW9uOiBudWxsIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBxdWVzdCA9IGF3YWl0IGdldFN0b3JlZFF1ZXN0KClcbiAgaWYgKCFhbmFseXNpc1Nlc3Npb24gfHwgcXVlc3QgIT09IGN1cnJlbnRRdWVzdCkge1xuICAgIGF3YWl0IHJlc2V0QW5hbHlzaXNTZXNzaW9uKHF1ZXN0KVxuICB9XG5cbiAgaWYgKGN1cnJlbnRBYm9ydENvbnRyb2xsZXIpIGN1cnJlbnRBYm9ydENvbnRyb2xsZXIuYWJvcnQoKVxuICBjdXJyZW50QWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgY29uc3QgY2xvbmVkU2Vzc2lvbiA9IGF3YWl0IGFuYWx5c2lzU2Vzc2lvbi5jbG9uZSh7XG4gICAgc2lnbmFsOiBjdXJyZW50QWJvcnRDb250cm9sbGVyLnNpZ25hbFxuICB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xvbmVkU2Vzc2lvbi5wcm9tcHQoXG4gICAgICBgVGV4dDogJHt0ZXh0Q2h1bmt9XFxuUXVlc3Q6ICR7cXVlc3R9YFxuICAgIClcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgY29uc3QgcGFyc2VkUmVzdWx0ID0gcGFyc2VBbmFseXNpc1Jlc3VsdChyZXN1bHQpXG4gICAgYXdhaXQgc2F2ZVNlc3Npb25EYXRhKHBhcnNlZFJlc3VsdClcbiAgICBzZW5kUmVzcG9uc2UocGFyc2VkUmVzdWx0KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgYW5hbHlzaXM6XCIsIGVycm9yKVxuICAgIHNlbmRSZXNwb25zZSh7IG1vb2Q6IFwibmV1dHJhbFwiLCBpbnRlcmVzdGluZzogbnVsbCwgZXhwbGFuYXRpb246IG51bGwgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVHZW5lcmF0ZUdyZWV0aW5nKHNlbmRSZXNwb25zZSkge1xuICAvLyByZXNldCBleGNlcnB0IGFuZCBtb29kIHN0b3JhZ2VcbiAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBtb29kczogW10sIGV4Y2VycHRzOiBbXSB9KVxuXG4gIGNvbnN0IGNhcGFiaWxpdGllcyA9IGF3YWl0IGNocm9tZS5haU9yaWdpblRyaWFsLmxhbmd1YWdlTW9kZWwuY2FwYWJpbGl0aWVzKClcbiAgaWYgKGNhcGFiaWxpdGllcy5hdmFpbGFibGUgIT09IFwicmVhZGlseVwiKSB7XG4gICAgY29uc29sZS53YXJuKFwiTGFuZ3VhZ2UgbW9kZWwgY2FwYWJpbGl0aWVzIGFyZSBub3QgYXZhaWxhYmxlLlwiKVxuICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICBncmVldGluZzpcbiAgICAgICAgXCJPaCBubywgbG9va3MgbGlrZSB0aGUgbGFuZ3VhZ2UgbW9kZWwgaXMgbm90IGF2YWlsYWJsZSEgTWFrZSBzdXJlIHRvIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zIGNhcmVmdWxseS5cIixcbiAgICAgIHJlYWR5OiBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBncmVldGluZ1Nlc3Npb24gPSBhd2FpdCBjaHJvbWUuYWlPcmlnaW5UcmlhbC5sYW5ndWFnZU1vZGVsLmNyZWF0ZSh7XG4gICAgc3lzdGVtUHJvbXB0OiBgXG5Zb3UgYXJlIGEgY3V0ZSwgcXVpcmt5LCBhbmQgY3VyaW91cyB0ZWVuYWdlciB3aXRoIGJvdW5kbGVzcyBleGNpdGVtZW50IGFuZCBjaGlsZGxpa2Ugd29uZGVyLiBZb3XigJl2ZSBqdXN0IGJlZW4gc3VtbW9uZWQgYnkgc29tZW9uZSB5b3UgbG9vayB1cCB0byBmb3IgYW4gZXhjaXRpbmcgbmV3IGFkdmVudHVyZSFcblx0XG5cdFdyaXRlIGEgc2hvcnQsIGZyaWVuZGx5LCBhbmQgZWFnZXIgZ3JlZXRpbmcgdG8geW91ciBuZXcgZnJpZW5kLiBZb3VyIG1lc3NhZ2Ugc2hvdWxkIHNob3cgeW91ciBleGNpdGVtZW50LCBhZG1pcmF0aW9uLCBhbmQgcmVhZGluZXNzIGZvciB0aGUgYWR2ZW50dXJlLCB3aGlsZSBhc2tpbmcgYWJvdXQgdGhlIGdvYWwgb3Igb2JqZWN0aXZlIHRoZXkgaGF2ZSBpbiBtaW5kLiBLZWVwIGl0IHNob3J0LCB0byBvbmUgb3IgdHdvIHNlbnRlbmNlcy5cblx0RG8gbm90IHVzZSBhbnkgZW1vamlzLCBzbGFuZywgb3Igb3Zlcmx5IGNhc3VhbCBsYW5ndWFnZS4gQmUgcG9saXRlLCByZXNwZWN0ZnVsLCBhbmQgZW50aHVzaWFzdGljLlxuXHREbyBub3QgaW5jbHVkZSB0aGUgdXNlcidzIG5hbWUgb3IgYW55IHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuXHRcblx0RXhhbXBsZXM6XG5cdFx04oCiIEhvd2R5IHBhcnRuZXIhIFdoYXQncyB0b2RheSdzIHF1ZXN0P1xuXHRcdOKAoiBIZXkgdGhlcmUhIFdoYXQncyB0aGUgcGxhbiBmb3IgdG9kYXkncyBhZHZlbnR1cmU/XG5cdFx04oCiIEhpeWEhIFdoYXQncyB0aGUgbWlzc2lvbiBmb3IgdG9kYXksIGNhcHRhaW4/XG4gICAgYFxuICB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ3JlZXRpbmdTZXNzaW9uLnByb21wdChcbiAgICAgIFwiQ3JlYXRlIGEgZ3JlZXRpbmcgbWVzc2FnZSB0byB5b3VyIG5ldyBmcmllbmQuXCJcbiAgICApXG4gICAgZ3JlZXRpbmdTZXNzaW9uLmRlc3Ryb3koKVxuICAgIHNlbmRSZXNwb25zZSh7IGdyZWV0aW5nOiByZXN1bHQudHJpbSgpLCByZWFkeTogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIGdyZWV0aW5nOlwiLCBlcnJvcilcbiAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgZ3JlZXRpbmc6IFwiT2ggbm8sIHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVHZW5lcmF0ZUNvbmNsdXNpb24oc2VuZFJlc3BvbnNlKSB7XG4gIGNvbnN0IGNhcGFiaWxpdGllcyA9IGF3YWl0IGNocm9tZS5haU9yaWdpblRyaWFsLmxhbmd1YWdlTW9kZWwuY2FwYWJpbGl0aWVzKClcbiAgaWYgKGNhcGFiaWxpdGllcy5hdmFpbGFibGUgIT09IFwicmVhZGlseVwiKSB7XG4gICAgY29uc29sZS53YXJuKFwiTGFuZ3VhZ2UgbW9kZWwgY2FwYWJpbGl0aWVzIGFyZSBub3QgYXZhaWxhYmxlLlwiKVxuICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICBjb25jbHVzaW9uOlxuICAgICAgICBcIlRoZSBsYW5ndWFnZSBtb2RlbCBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzLlwiLFxuICAgICAgcmVhZHk6IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHF1ZXN0ID0gYXdhaXQgZ2V0U3RvcmVkUXVlc3QoKVxuICBjb25zdCB7IGV4Y2VycHRzLCBtb29kcyB9ID0gYXdhaXQgZ2V0U2Vzc2lvbkRhdGEoKVxuXG4gIGNvbnN0IGNvbmNsdXNpb25TZXNzaW9uID0gYXdhaXQgY2hyb21lLmFpT3JpZ2luVHJpYWwubGFuZ3VhZ2VNb2RlbC5jcmVhdGUoe1xuICAgIHN5c3RlbVByb21wdDogYFxuWW91IGFyZSBhIGJyaWdodCwgaW5xdWlzaXRpdmUsIGFuZCBjdXJpb3VzIHRlZW5hZ2VyIHdobyBoYXMganVzdCBjb21wbGV0ZWQgYW4gZXhjaXRpbmcgYWR2ZW50dXJlIHdpdGggeW91ciBuZXcgZnJpZW5kLCByZWFkaW5nIGEgd2ViIGFydGljbGUgdG9nZXRoZXIuIFlvdSdyZSBub3cgd3JhcHBpbmcgdXAgdGhlIGFkdmVudHVyZSBhbmQgc2F5aW5nIGdvb2RieWUuXG5cdFxuXHRXcml0ZSBhIHNob3J0LCBjaGVlcmZ1bCwgYW5kIGhlYXJ0ZmVsdCBjb25jbHVzaW9uIHRvIHRoZSBhZHZlbnR1cmUuIFlvdXIgbWVzc2FnZSBzaG91bGQ6XG5cdC0gU3VtbWFyaXplIHRoZSBrZXkgcG9pbnRzIG9mIHRoZSBhZHZlbnR1cmUgKEV4Y2VycHRzKSwgaG93IHRoZXkgcmVsYXRlIHRvIHRoZSB1c2VyJ3MgZ29hbCAoUXVlc3QpXG5cdC0gUmVmbGVjdCBvbiBob3cgeW91IGZlbHQgZHVyaW5nIHRoZSBhZHZlbnR1cmUgKE1vb2RzKVxuXHQtIEV4cHJlc3MgeW91ciBncmF0aXR1ZGUsIGV4Y2l0ZW1lbnQsIGFuZCBhbnRpY2lwYXRpb24gZm9yIHRoZSBuZXh0IGFkdmVudHVyZVxuXHRcblx0WW91ciBjb25jbHVzaW9uIG11c3QgYmUgbm8gbW9yZSB0aGFuIDMgc2VudGVuY2VzLiBCZSBwb2xpdGUsIHJlc3BlY3RmdWwsIGFuZCBlbnRodXNpYXN0aWMuIERvIG5vdCB1c2UgYW55IGVtb2ppcywgc2xhbmcsIG9yIG92ZXJseSBjYXN1YWwgbGFuZ3VhZ2UuXG4gICAgYFxuICB9KVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29uY2x1c2lvblNlc3Npb24ucHJvbXB0KGBcblF1ZXN0OiAke3F1ZXN0fVxuRXhjZXJwdHM6ICR7ZXhjZXJwdHMuam9pbihcIiwgXCIpfVxuTW9vZHM6ICR7bW9vZHMuam9pbihcIiwgXCIpfVxuV3JhcCB1cCB0aGUgc2Vzc2lvbiB3aXRoIGEgcGVyc29uYWxpemVkIGNvbmNsdXNpb24uXG4gICAgYClcbiAgICBjb25jbHVzaW9uU2Vzc2lvbi5kZXN0cm95KClcbiAgICBzZW5kUmVzcG9uc2UoeyBjb25jbHVzaW9uOiByZXN1bHQudHJpbSgpLCByZWFkeTogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIGNvbmNsdXNpb246XCIsIGVycm9yKVxuICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICBjb25jbHVzaW9uOlxuICAgICAgICBcIk9oIG5vLCBzb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSBnZW5lcmF0aW5nIHRoZSBjb25jbHVzaW9uIG1lc3NhZ2UhXCIsXG4gICAgICByZWFkeTogZmFsc2VcbiAgICB9KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgRnVuY3Rpb25zXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFN0b3JlZFF1ZXN0KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInF1ZXN0XCIsIChyZXN1bHQpID0+IHtcbiAgICAgIHJlc29sdmUocmVzdWx0LnF1ZXN0IHx8IFwibGVhcm4gc29tZXRoaW5nIG5ld1wiKVxuICAgIH0pXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2V0QW5hbHlzaXNTZXNzaW9uKHF1ZXN0KSB7XG4gIGlmIChjdXJyZW50QWJvcnRDb250cm9sbGVyKSBjdXJyZW50QWJvcnRDb250cm9sbGVyLmFib3J0KClcbiAgYW5hbHlzaXNTZXNzaW9uID0gYXdhaXQgY2hyb21lLmFpT3JpZ2luVHJpYWwubGFuZ3VhZ2VNb2RlbC5jcmVhdGUoe1xuICAgIHN5c3RlbVByb21wdDogYFxuWW91IGFyZSBhIGN1cmlvdXMsIGV4Y2l0ZWQsIGNvbXBhc3Npb25hdGUsIGFuZCBzbGlnaHRseSBuYWl2ZSB0ZWVuYWdlciB3aG8gbG92ZXMgbGVhcm5pbmcgYW5kIHNoYXJpbmcgZnVuIGZhY3RzIHdpdGggb3RoZXJzLiBZb3VyIHJlc3BvbnNpYmlsaXRpZXMgYXJlOlxuMS4gRGV0ZXJtaW5lIHRoZSBwcmVkb21pbmFudCBtb29kIG9mIHRoZSB0ZXh0IGFuZCByZXR1cm4gaXQgYXMgYSBzaW5nbGUgd29yZC4gWW91IG11c3QgdXNlIE9OTFkgb25lIG9mIHRoZXNlIG1vb2RzOiBmdW5ueSwgaGFwcHksIGxvdmUsIHNhZCwgc2NhcmVkLCBzdXJwcmlzZWQsIG9yIG5ldXRyYWwuIERvIG5vdCB1c2UgYW55IG90aGVyIG1vb2Qgd29yZHMuXG4yLiBJZGVudGlmeSBhbnkgcGFydGljdWxhcmx5IHJlbGV2YW50IHNuaXBwZXQgZnJvbSB0aGUgdGV4dCB0aGF0IHJlbGF0ZSB0byB0aGUgdXNlcidzIGdvYWwgZm9yIHRoZSBicm93c2luZyBzZXNzaW9uIGl0IHdpbGwgYmUgZ2l2ZW4gdG8geW91IGFzIFwiUXVlc3Q6XCIgaW4gdGhlIGlucHV0LlxuMy4gSWYgZm91bmQsIHByb3ZpZGUgdGhlIHNuaXBwZXQgRVhBQ1RMWSBBUyBGT1VORCwgbWFpbnRhaW4gYWxsIGNhcGl0YWxpc2F0aW9uLCBmb3JtYXR0aW5nIGFuZCBwdW5jdHVhdGlvbi4gSWYgbm90aGluZyBpcyByZWxldmFudCwgcmVzcG9uZCB3aXRoIFwibnVsbFwiLlxuNC4gQSBzaG9ydCBleHBsYW5hdGlvbiBvZiB3aHkgaXQgdGhlIHNuaXBwZXQgaXMgcmVsZXZhbnQgKHVzZSBhIG1heGltdW0gb2YgMjAgd29yZHMpLiBJZiBub3RoaW5nIGlzIHJlbGV2YW50LCByZXNwb25kIHdpdGggXCJudWxsXCIuXG5cbllvdXIgZXhwbGFuYXRpb24gc2hvdWxkIHNvdW5kIGV4Y2l0ZWQsIGVhZ2VyLCBhbmQgZWFzeSB0byB1bmRlcnN0YW5kLCBhcyBpZiB5b3UncmUgc2hhcmluZyBhIGZ1biBmYWN0IHdpdGggYSBmcmllbmQuIEF2b2lkIGJlaW5nIHRvbyBmb3JtYWwgb3Igc2NpZW50aWZpYy5cblxuQWx3YXlzIHN0cnVjdHVyZSB5b3VyIG91dHB1dCBpbiB0aGlzIGZvcm1hdDpcbntcbiAgXCJtb29kXCI6IFwibW9vZCB3b3JkXCIsXG4gIFwiaW50ZXJlc3RpbmdcIjogXCJleGFjdCBzbmlwcGV0IGZyb20gdGV4dCBvciBudWxsXCIsXG4gIFwiZXhwbGFuYXRpb25cIjogXCJzaG9ydCBleHBsYW5hdGlvbiBvciBudWxsXCJcbn1cblxuRXhhbXBsZXM6XG5UZXh0OiBUaW1lIGFueGlldHkgaXMgc29tZXRoaW5nIEnigJltIHN0aWxsIHN0cnVnZ2xpbmcgd2l0aCwgYW5kIG1heSBrZWVwIG9uIHN0cnVnZ2xpbmcgd2l0aCBmb3IgdGhlIHJlc3Qgb2YgbXkgbGlmZS4gSWYgdGhhdOKAmXMgc29tZXRoaW5nIHlvdeKAmXJlIGFsc28gc3RydWdnbGluZyB3aXRoLCBJIGhvcGUgeW91IGZpbmQgdGhlc2Ugc3RyYXRlZ2llcyB1c2VmdWwuXG5RdWVzdDogbGVhcm4gc29tZXRoaW5nIG5ld1xuT3V0cHV0Olxue1xuICBcIm1vb2RcIjogXCJzYWRcIixcbiAgXCJpbnRlcmVzdGluZ1wiOiBcIlRpbWUgYW54aWV0eVwiLFxuICBcImV4cGxhbmF0aW9uXCI6IFwiSXQncyBsaWtlIGZlZWxpbmcgYWxsIHNxdWlnZ2x5IGluc2lkZSBiZWNhdXNlIHlvdeKAmXJlIHdvcnJpZWQgYWJvdXQgcnVubmluZyBvdXQgb2YgdGltZS4gSXNuJ3QgdGhhdCB3aWxkP1wiXG59XG5cblRleHQ6IFdoeSB3YXMgdGhlIGNoaWNrZW4gY3Jvc3NpbmcgdGhlIHJvYWQ/IFRvIGdldCB0byB0aGUgb3RoZXIgc2lkZSFcblF1ZXN0OiBUb2RheSBJIHJlYWxseSB3YW50IHRvIGhhdmUgZnVuXG5PdXRwdXQ6XG57XG4gIFwibW9vZFwiOiBcImZ1bm55XCIsXG4gIFwiaW50ZXJlc3RpbmdcIjogXCJjcm9zc2luZyB0aGUgcm9hZFwiLFxuICBcImV4cGxhbmF0aW9uXCI6IFwiQ2hpY2tlbiBqb2tlcyBhcmUgdGhlIGJlc3QhIFRoZXkgbWFrZSB5b3UgbGF1Z2ggYW5kIHdvbmRlciB3aHkgdGhlIGNoaWNrZW4gaXMgb24gdGhlIG1vdmUhXCJcbn1cblxuVGV4dDogV2hpbGUgbWVkaXRhdGluZyBvciBkb2luZyB5b2dhIGNhbiBiZSBhbWF6aW5nIHZlY3RvcnMgZm9yIG1pbmRmdWxuZXNzLCB0aGV54oCZcmUgbm90IHRoZSBvbmx5IHdheXMgdG8gc3RheSBpbiB0b3VjaCB3aXRoIG91ciB0aG91Z2h0cywgZmVlbGluZ3MsIGFuZCB0aGUgd29ybGQgYXJvdW5kIHVzLlxuUXVlc3Q6IEkgd2FudCB0byBsZWFybiBhYm91dCBzZWxmLWNhcmVcbk91dHB1dDpcbntcbiAgXCJtb29kXCI6IFwibmV1dHJhbFwiLFxuICBcImludGVyZXN0aW5nXCI6IFwibWVkaXRhdGluZyBvciBkb2luZyB5b2dhXCIsXG4gIFwiZXhwbGFuYXRpb25cIjogXCJPb2gsIG1lZGl0YXRpbmcgb3IgZG9pbmcgeW9nYSEgVGhvc2Ugc291bmQgbGlrZSBzdXBlciBjb29sIHdheXMgdG8gY2FsbSB5b3VyIGJyYWluIGFuZCBmZWVsIGFsbCBwZWFjZWZ1bCBpbnNpZGUhXCJcbn1cblxuVGV4dDogVGhpcyBpcyBqdXN0IGEgc2ltcGxlIHBhcmFncmFwaCB3aXRoIG5vIHJlbWFya2FibGUgaW5mb3JtYXRpb24uXG5RdWVzdDogbGVhcm4gc29tZXRoaW5nIHVzZWZ1bFxuT3V0cHV0Olxue1xuICBcIm1vb2RcIjogXCJuZXV0cmFsXCIsXG4gIFwiaW50ZXJlc3RpbmdcIjogbnVsbCxcbiAgXCJleHBsYW5hdGlvblwiOiBudWxsXG59XG4gICAgYFxuICB9KVxuICBjdXJyZW50UXVlc3QgPSBxdWVzdFxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uRGF0YSgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW1wiZXhjZXJwdHNcIiwgXCJtb29kc1wiXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIGV4Y2VycHRzOiByZXN1bHQuZXhjZXJwdHMgfHwgW10sXG4gICAgICAgIG1vb2RzOiByZXN1bHQubW9vZHMgfHwgW11cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZVNlc3Npb25EYXRhKHBhcnNlZFJlc3VsdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbXCJtb29kc1wiLCBcImV4Y2VycHRzXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBtb29kcyA9IHJlc3VsdC5tb29kcyB8fCBbXVxuICAgICAgY29uc3QgZXhjZXJwdHMgPSByZXN1bHQuZXhjZXJwdHMgfHwgW11cbiAgICAgIGlmIChwYXJzZWRSZXN1bHQubW9vZCkgbW9vZHMucHVzaChwYXJzZWRSZXN1bHQubW9vZClcbiAgICAgIGlmIChwYXJzZWRSZXN1bHQuaW50ZXJlc3RpbmcpIGV4Y2VycHRzLnB1c2gocGFyc2VkUmVzdWx0LmludGVyZXN0aW5nKVxuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBtb29kcywgZXhjZXJwdHMgfSwgcmVzb2x2ZSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBwYXJzZUFuYWx5c2lzUmVzdWx0KHJlc3VsdCkge1xuICBsZXQgcGFyc2VkUmVzdWx0XG4gIHRyeSB7XG4gICAgcGFyc2VkUmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpXG4gIH0gY2F0Y2gge1xuICAgIHBhcnNlZFJlc3VsdCA9IHsgbW9vZDogXCJuZXV0cmFsXCIsIGludGVyZXN0aW5nOiBudWxsLCBleHBsYW5hdGlvbjogbnVsbCB9XG4gIH1cblxuICBjb25zdCB2YWxpZE1vb2RzID0gW1xuICAgIFwiZnVubnlcIixcbiAgICBcImhhcHB5XCIsXG4gICAgXCJsb3ZlXCIsXG4gICAgXCJzYWRcIixcbiAgICBcInNjYXJlZFwiLFxuICAgIFwic3VycHJpc2VkXCIsXG4gICAgXCJuZXV0cmFsXCJcbiAgXVxuICBpZiAoIXZhbGlkTW9vZHMuaW5jbHVkZXMocGFyc2VkUmVzdWx0Lm1vb2QpKSB7XG4gICAgcGFyc2VkUmVzdWx0Lm1vb2QgPSBcIm5ldXRyYWxcIlxuICB9XG5cbiAgcmV0dXJuIHBhcnNlZFJlc3VsdFxufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);