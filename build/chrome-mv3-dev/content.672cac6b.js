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
})({"dqf9b":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/alyssax/LocalExperiments/ai-test/test-ai/content.ts",
    "bundleId": "3716c965672cac6b",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 57363
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
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
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1] : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"71ecL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tinyHappySvg = require("./assets/tiny-happy.svg");
var _tinyHappySvgDefault = parcelHelpers.interopDefault(_tinyHappySvg);
var _tinyMehSvg = require("./assets/tiny-meh.svg");
var _tinyMehSvgDefault = parcelHelpers.interopDefault(_tinyMehSvg);
var _tinySadSvg = require("./assets/tiny-sad.svg");
var _tinySadSvgDefault = parcelHelpers.interopDefault(_tinySadSvg);
// Inject styles for the floating circle, speech bubble, and analyzed text highlight
const styles = `
  #floating-circle {
    position: absolute; /* Positioning relative to the page */
    width: 80px;
    height: 80px;
    border-radius: 50%;
    z-index: 10000;
    user-select: none;
    transition: all 1s ease-in-out;
  }
  #floating-circle img {
    user-select: none;
    width: 100%;
    height: 100%;
  }
  #speech-bubble {
    position: absolute;
    background-color: #f0f0f0;
    padding: 12px 16px;
    border-radius: 12px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 10001;
    transition: transform 0.2s ease-in-out;
  }
  #speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 10px;
    background-color: #f0f0f0;
    clip-path: polygon(50% 0, 0% 100%, 100% 100%);
  }
  .analyzed-text {
    background-color: yellow !important;
  }
`;
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);
const circle = document.createElement("div");
circle.id = "floating-circle";
document.body.appendChild(circle);
const tinyAvatar = document.createElement("img");
tinyAvatar.src = (0, _tinyHappySvgDefault.default);
circle.appendChild(tinyAvatar);
const speechBubble = document.createElement("div");
speechBubble.id = "speech-bubble";
document.body.appendChild(speechBubble);
const moods = {
    happy: {
        image: (0, _tinyHappySvgDefault.default),
        message: "I'm feeling great! \uD83D\uDE0A"
    },
    meh: {
        image: (0, _tinyMehSvgDefault.default),
        message: "I'm okay... \uD83E\uDD14"
    },
    sad: {
        image: (0, _tinySadSvgDefault.default),
        message: "I'm not feeling great. \uD83D\uDE14"
    }
};
// Move the circle to a specific paragraph
const moveCircleToElement = (element)=>{
    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const x = rect.left + scrollLeft - 100; // Position slightly left of the element
    const y = rect.top + scrollTop - 10; // Position slightly above the element
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    // Update the speech bubble's position relative to the circle
    updateSpeechBubblePosition();
};
const updateSpeechBubblePosition = ()=>{
    const rect = circle.getBoundingClientRect();
    speechBubble.style.left = `${rect.left + rect.width / 2 - speechBubble.offsetWidth / 2}px`;
    speechBubble.style.top = `${rect.top - speechBubble.offsetHeight - 10}px`;
};
const showSpeechBubble = (message)=>{
    speechBubble.textContent = message;
    updateSpeechBubblePosition();
    speechBubble.style.display = "block";
    setTimeout(()=>{
        speechBubble.style.display = "none";
    }, 3000);
};
// Extract visible text elements from ".entry-content"
const getVisibleTextElements = ()=>{
    const container = document.querySelector(".entry-content");
    if (!container) return [];
    const elements = container.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a, span");
    return Array.from(elements).filter((el)=>{
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0 && !el.classList.contains("analyzed-text");
    });
};
const analyzeTextWithServiceWorker = async (text)=>{
    try {
        const sentimentScore = await new Promise((resolve)=>{
            chrome.runtime.sendMessage({
                type: "ANALYZE_TEXT",
                text
            }, (response)=>{
                if (chrome.runtime.lastError) {
                    resolve(0);
                    return;
                }
                const { sentimentScore } = response || {};
                resolve(sentimentScore || 0);
            });
        });
        return sentimentScore;
    } catch  {
        return 0;
    }
};
const analyzeVisibleText = async ()=>{
    const visibleElements = getVisibleTextElements();
    for (const element of visibleElements){
        const text = element.innerText.trim();
        if (!text) continue;
        // Highlight the current element with a dashed border
        element.classList.add("currently-analyzing");
        // Move the circle to the paragraph being analyzed
        moveCircleToElement(element);
        // Analyze the text
        const sentimentScore = await analyzeTextWithServiceWorker(text);
        // Highlight the element as analyzed and remove the current analyzing border
        element.classList.remove("currently-analyzing");
        element.classList.add("analyzed-text");
        // Determine mood based on score
        let finalMood = "meh";
        if (sentimentScore > 0.3) finalMood = "happy";
        else if (sentimentScore < -0.3) finalMood = "sad";
        const { image, message } = moods[finalMood];
        tinyAvatar.src = image;
        showSpeechBubble(message);
        // Wait for 5 seconds before moving to the next element
        await new Promise((resolve)=>setTimeout(resolve, 5000));
    }
};
// Listen for scrolling and analyze visible content
let analyzeTimeout;
window.addEventListener("scroll", ()=>{
    clearTimeout(analyzeTimeout);
    analyzeTimeout = setTimeout(analyzeVisibleText, 300); // Debounce to prevent excessive analysis
});
// Initialize
analyzeVisibleText();

},{"./assets/tiny-happy.svg":"5Oq2h","./assets/tiny-meh.svg":"7g2Jq","./assets/tiny-sad.svg":"dgx8p","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"5Oq2h":[function(require,module,exports) {
module.exports = require("1e27ebbe2d1f1e5d").getBundleURL("4JeIZ") + "tiny-happy.100fe8a3.svg" + "?" + Date.now();

},{"1e27ebbe2d1f1e5d":"lSi2Y"}],"lSi2Y":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7g2Jq":[function(require,module,exports) {
module.exports = require("aa02bb047e91189d").getBundleURL("4JeIZ") + "tiny-meh.e45b8800.svg" + "?" + Date.now();

},{"aa02bb047e91189d":"lSi2Y"}],"dgx8p":[function(require,module,exports) {
module.exports = require("205deb76d3bb86e6").getBundleURL("4JeIZ") + "tiny-sad.e87cc034.svg" + "?" + Date.now();

},{"205deb76d3bb86e6":"lSi2Y"}],"6dfwG":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dqf9b","71ecL"], "71ecL", "parcelRequire3b30")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4xL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTFiMjI0NTBjYjUyNGJhNDQuanMiLCJjb250ZW50LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1kZmFiYjE0ZDhiMWZiZDcyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9idW5kbGUtdXJsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1kMjYzZTkyZjc5OTgwNjI0LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS00MGUxZjczNjI4ZTRiM2JhLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkPWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIHk9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSD1uZXcgU2V0KGQpLF89ZT0+SC5oYXMoZSksRz1kLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFo9XyhcIi0tZHJ5LXJ1blwiKSxwPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLHE9cCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFM9MCxjPSguLi5lKT0+cCgpJiZ1KGBcXHV7MUY3RTF9ICR7UysrfWAsLi4uZSk7dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYWx5c3NheC9Mb2NhbEV4cGVyaW1lbnRzL2FpLXRlc3QvdGVzdC1haS9jb250ZW50LnRzXCIsXCJidW5kbGVJZFwiOlwiMzcxNmM5NjU2NzJjYWM2YlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjU3MzYzfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9YS5jb2RlZnJhbWV8fGEuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgcz1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uICQoKXtsZXQgZT1nbG9iYWxUaGlzLndpbmRvdz8udHJ1c3RlZFR5cGVzO2lmKHR5cGVvZiBlPlwidVwiKXJldHVybjtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0cnVzdGVkLXR5cGVzXCJdJyk/LmNvbnRlbnQ/LnNwbGl0KFwiIFwiKSxvPXQ/dFt0Py5sZW5ndGgtMV06dm9pZCAwO3JldHVybiB0eXBlb2YgZTxcInVcIj9lLmNyZWF0ZVBvbGljeShvfHxgdHJ1c3RlZC1odG1sLSR7c31gLHtjcmVhdGVIVE1MOmE9PmF9KTp2b2lkIDB9dmFyIFQ9JCgpO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyl9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gRigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1zO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke3N9IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke3N9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7c30gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBOKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUYoKTtlPU4odCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIFc9YCR7RX0ke21vZHVsZS5pZH1fX2AsaSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2k/LmRpc2Nvbm5lY3QoKSxpPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpXfSksaS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBqKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1qKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2kucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHRpbnlIYXBweVNWRyBmcm9tIFwiLi9hc3NldHMvdGlueS1oYXBweS5zdmdcIjtcbmltcG9ydCB0aW55TWVoU1ZHIGZyb20gXCIuL2Fzc2V0cy90aW55LW1laC5zdmdcIjtcbmltcG9ydCB0aW55U2FkU1ZHIGZyb20gXCIuL2Fzc2V0cy90aW55LXNhZC5zdmdcIjtcblxuLy8gSW5qZWN0IHN0eWxlcyBmb3IgdGhlIGZsb2F0aW5nIGNpcmNsZSwgc3BlZWNoIGJ1YmJsZSwgYW5kIGFuYWx5emVkIHRleHQgaGlnaGxpZ2h0XG5jb25zdCBzdHlsZXMgPSBgXG4gICNmbG9hdGluZy1jaXJjbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogUG9zaXRpb25pbmcgcmVsYXRpdmUgdG8gdGhlIHBhZ2UgKi9cbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgfVxuICAjZmxvYXRpbmctY2lyY2xlIGltZyB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICNzcGVlY2gtYnViYmxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICAjc3BlZWNoLWJ1YmJsZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAwJSAxMDAlLCAxMDAlIDEwMCUpO1xuICB9XG4gIC5hbmFseXplZC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuc3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gc3R5bGVzO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXG5jb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY2lyY2xlLmlkID0gXCJmbG9hdGluZy1jaXJjbGVcIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcblxuY29uc3QgdGlueUF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG50aW55QXZhdGFyLnNyYyA9IHRpbnlIYXBweVNWRztcbmNpcmNsZS5hcHBlbmRDaGlsZCh0aW55QXZhdGFyKTtcblxuY29uc3Qgc3BlZWNoQnViYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnNwZWVjaEJ1YmJsZS5pZCA9IFwic3BlZWNoLWJ1YmJsZVwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGVlY2hCdWJibGUpO1xuXG5jb25zdCBtb29kcyA9IHtcbiAgaGFwcHk6IHsgaW1hZ2U6IHRpbnlIYXBweVNWRywgbWVzc2FnZTogXCJJJ20gZmVlbGluZyBncmVhdCEg8J+YilwiIH0sXG4gIG1laDogeyBpbWFnZTogdGlueU1laFNWRywgbWVzc2FnZTogXCJJJ20gb2theS4uLiDwn6SUXCIgfSxcbiAgc2FkOiB7IGltYWdlOiB0aW55U2FkU1ZHLCBtZXNzYWdlOiBcIkknbSBub3QgZmVlbGluZyBncmVhdC4g8J+YlFwiIH0sXG59O1xuXG4vLyBNb3ZlIHRoZSBjaXJjbGUgdG8gYSBzcGVjaWZpYyBwYXJhZ3JhcGhcbmNvbnN0IG1vdmVDaXJjbGVUb0VsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuXG4gIGNvbnN0IHggPSByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gMTAwOyAvLyBQb3NpdGlvbiBzbGlnaHRseSBsZWZ0IG9mIHRoZSBlbGVtZW50XG4gIGNvbnN0IHkgPSByZWN0LnRvcCArIHNjcm9sbFRvcCAtIDEwOyAvLyBQb3NpdGlvbiBzbGlnaHRseSBhYm92ZSB0aGUgZWxlbWVudFxuXG4gIGNpcmNsZS5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gIGNpcmNsZS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcblxuICAvLyBVcGRhdGUgdGhlIHNwZWVjaCBidWJibGUncyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgY2lyY2xlXG4gIHVwZGF0ZVNwZWVjaEJ1YmJsZVBvc2l0aW9uKCk7XG59O1xuXG5jb25zdCB1cGRhdGVTcGVlY2hCdWJibGVQb3NpdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgcmVjdCA9IGNpcmNsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgc3BlZWNoQnViYmxlLnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMiAtIHNwZWVjaEJ1YmJsZS5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xuICBzcGVlY2hCdWJibGUuc3R5bGUudG9wID0gYCR7cmVjdC50b3AgLSBzcGVlY2hCdWJibGUub2Zmc2V0SGVpZ2h0IC0gMTB9cHhgO1xufTtcblxuY29uc3Qgc2hvd1NwZWVjaEJ1YmJsZSA9IChtZXNzYWdlKSA9PiB7XG4gIHNwZWVjaEJ1YmJsZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIHVwZGF0ZVNwZWVjaEJ1YmJsZVBvc2l0aW9uKCk7XG4gIHNwZWVjaEJ1YmJsZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHNwZWVjaEJ1YmJsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0sIDMwMDApO1xufTtcblxuLy8gRXh0cmFjdCB2aXNpYmxlIHRleHQgZWxlbWVudHMgZnJvbSBcIi5lbnRyeS1jb250ZW50XCJcbmNvbnN0IGdldFZpc2libGVUZXh0RWxlbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktY29udGVudFwiKTtcbiAgaWYgKCFjb250YWluZXIpIHJldHVybiBbXTtcblxuICBjb25zdCBlbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwicCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbGksIGEsIHNwYW5cIik7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnRzKS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodCAmJiByZWN0LmJvdHRvbSA+IDAgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucyhcImFuYWx5emVkLXRleHRcIik7XG4gIH0pO1xufTtcblxuY29uc3QgYW5hbHl6ZVRleHRXaXRoU2VydmljZVdvcmtlciA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2VudGltZW50U2NvcmUgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICAgIHsgdHlwZTogXCJBTkFMWVpFX1RFWFRcIiwgdGV4dCB9LFxuICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICByZXNvbHZlKDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB7IHNlbnRpbWVudFNjb3JlIH0gPSByZXNwb25zZSB8fCB7fTtcbiAgICAgICAgICByZXNvbHZlKHNlbnRpbWVudFNjb3JlIHx8IDApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbnRpbWVudFNjb3JlO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuY29uc3QgYW5hbHl6ZVZpc2libGVUZXh0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB2aXNpYmxlRWxlbWVudHMgPSBnZXRWaXNpYmxlVGV4dEVsZW1lbnRzKCk7XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIHZpc2libGVFbGVtZW50cykge1xuICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmlubmVyVGV4dC50cmltKCk7XG4gICAgaWYgKCF0ZXh0KSBjb250aW51ZTtcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudCBlbGVtZW50IHdpdGggYSBkYXNoZWQgYm9yZGVyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudGx5LWFuYWx5emluZ1wiKTtcblxuICAgIC8vIE1vdmUgdGhlIGNpcmNsZSB0byB0aGUgcGFyYWdyYXBoIGJlaW5nIGFuYWx5emVkXG4gICAgbW92ZUNpcmNsZVRvRWxlbWVudChlbGVtZW50KTtcblxuICAgIC8vIEFuYWx5emUgdGhlIHRleHRcbiAgICBjb25zdCBzZW50aW1lbnRTY29yZSA9IGF3YWl0IGFuYWx5emVUZXh0V2l0aFNlcnZpY2VXb3JrZXIodGV4dCk7XG5cbiAgICAvLyBIaWdobGlnaHQgdGhlIGVsZW1lbnQgYXMgYW5hbHl6ZWQgYW5kIHJlbW92ZSB0aGUgY3VycmVudCBhbmFseXppbmcgYm9yZGVyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudGx5LWFuYWx5emluZ1wiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmFseXplZC10ZXh0XCIpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIG1vb2QgYmFzZWQgb24gc2NvcmVcbiAgICBsZXQgZmluYWxNb29kID0gXCJtZWhcIjtcbiAgICBpZiAoc2VudGltZW50U2NvcmUgPiAwLjMpIGZpbmFsTW9vZCA9IFwiaGFwcHlcIjtcbiAgICBlbHNlIGlmIChzZW50aW1lbnRTY29yZSA8IC0wLjMpIGZpbmFsTW9vZCA9IFwic2FkXCI7XG5cbiAgICBjb25zdCB7IGltYWdlLCBtZXNzYWdlIH0gPSBtb29kc1tmaW5hbE1vb2RdO1xuICAgIHRpbnlBdmF0YXIuc3JjID0gaW1hZ2U7XG4gICAgc2hvd1NwZWVjaEJ1YmJsZShtZXNzYWdlKTtcblxuICAgIC8vIFdhaXQgZm9yIDUgc2Vjb25kcyBiZWZvcmUgbW92aW5nIHRvIHRoZSBuZXh0IGVsZW1lbnRcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDAwKSk7XG4gIH1cbn07XG5cbi8vIExpc3RlbiBmb3Igc2Nyb2xsaW5nIGFuZCBhbmFseXplIHZpc2libGUgY29udGVudFxubGV0IGFuYWx5emVUaW1lb3V0O1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICBjbGVhclRpbWVvdXQoYW5hbHl6ZVRpbWVvdXQpO1xuICBhbmFseXplVGltZW91dCA9IHNldFRpbWVvdXQoYW5hbHl6ZVZpc2libGVUZXh0LCAzMDApOyAvLyBEZWJvdW5jZSB0byBwcmV2ZW50IGV4Y2Vzc2l2ZSBhbmFseXNpc1xufSk7XG5cbi8vIEluaXRpYWxpemVcbmFuYWx5emVWaXNpYmxlVGV4dCgpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJzRKZUlaJykgKyBcInRpbnktaGFwcHkuMTAwZmU4YTMuc3ZnXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidW5kbGVVUkwgPSB7fTtcblxuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMQ2FjaGVkKGlkKSB7XG4gIHZhciB2YWx1ZSA9IGJ1bmRsZVVSTFtpZF07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHZhbHVlID0gZ2V0QnVuZGxlVVJMKCk7XG4gICAgYnVuZGxlVVJMW2lkXSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRCdW5kbGVVUkwoKSB7XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBtYXRjaGVzID0gKCcnICsgZXJyLnN0YWNrKS5tYXRjaCgvKGh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcL1teKVxcbl0rL2cpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCB0d28gc3RhY2sgZnJhbWVzIHdpbGwgYmUgdGhpcyBmdW5jdGlvbiBhbmQgZ2V0QnVuZGxlVVJMQ2FjaGVkLlxuICAgICAgLy8gVXNlIHRoZSAzcmQgb25lLCB3aGljaCB3aWxsIGJlIGEgcnVudGltZSBpbiB0aGUgb3JpZ2luYWwgYnVuZGxlLlxuICAgICAgcmV0dXJuIGdldEJhc2VVUkwobWF0Y2hlc1syXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcvJztcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVVSTCh1cmwpIHtcbiAgcmV0dXJuICgnJyArIHVybCkucmVwbGFjZSgvXigoPzpodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC8uKylcXC9bXi9dKyQvLCAnJDEnKSArICcvJztcbn0gLy8gVE9ETzogUmVwbGFjZSB1c2VzIHdpdGggYG5ldyBVUkwodXJsKS5vcmlnaW5gIHdoZW4gaWUxMSBpcyBubyBsb25nZXIgc3VwcG9ydGVkLlxuXG5cbmZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSAoJycgKyB1cmwpLm1hdGNoKC8oaHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvW14vXSsvKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWdpbiBub3QgZm91bmQnKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzWzBdO1xufVxuXG5leHBvcnRzLmdldEJ1bmRsZVVSTCA9IGdldEJ1bmRsZVVSTENhY2hlZDtcbmV4cG9ydHMuZ2V0QmFzZVVSTCA9IGdldEJhc2VVUkw7XG5leHBvcnRzLmdldE9yaWdpbiA9IGdldE9yaWdpbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCc0SmVJWicpICsgXCJ0aW55LW1laC5lNDViODgwMC5zdmdcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCc0SmVJWicpICsgXCJ0aW55LXNhZC5lODdjYzAzNC5zdmdcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC42NzJjYWM2Yi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);