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
})({"7ZQTk":[function(require,module,exports) {
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
    "entryFilePath": "/Users/alyssax/LocalExperiments/ai-test/test-ai/content.js",
    "bundleId": "ff11838d8c879f6f",
    "envHash": "e792fbbdaa78ee84",
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

},{}],"6cTCN":[function(require,module,exports) {
var _floatingCharacterJs = require("./floatingCharacter.js");
var _initAdventureJs = require("./initAdventure.js");
let isInitialized = false // Prevent multiple initializations
;
let character = null // Reference to the floating character
;
const analyzedElements = new Set() // Track analyzed elements
;
// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if (message.type === "INIT_ADVENTURE") {
        if (isInitialized) window.location.reload();
        else {
            // Start a new adventure
            console.log("Starting analysis...");
            isInitialized = true;
            // Add the floating character and start analysis
            character = new (0, _floatingCharacterJs.FloatingCharacter)();
            (0, _initAdventureJs.initAdventure)(character);
            sendResponse({
                status: "Character initialized and analysis started"
            });
        }
    }
});

},{"./floatingCharacter.js":"lQosz","./initAdventure.js":"4PZhD"}],"lQosz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FloatingCharacter", ()=>FloatingCharacter);
var _funnyFoundSvg = require("./assets/funny-found.svg");
var _funnyFoundSvgDefault = parcelHelpers.interopDefault(_funnyFoundSvg);
var _funnyReadingSvg = require("./assets/funny-reading.svg");
var _funnyReadingSvgDefault = parcelHelpers.interopDefault(_funnyReadingSvg);
var _happyFoundSvg = require("./assets/happy-found.svg");
var _happyFoundSvgDefault = parcelHelpers.interopDefault(_happyFoundSvg);
var _happyReadingSvg = require("./assets/happy-reading.svg");
var _happyReadingSvgDefault = parcelHelpers.interopDefault(_happyReadingSvg);
var _loveFoundSvg = require("./assets/love-found.svg");
var _loveFoundSvgDefault = parcelHelpers.interopDefault(_loveFoundSvg);
var _loveReadingSvg = require("./assets/love-reading.svg");
var _loveReadingSvgDefault = parcelHelpers.interopDefault(_loveReadingSvg);
var _sadFoundSvg = require("./assets/sad-found.svg");
var _sadFoundSvgDefault = parcelHelpers.interopDefault(_sadFoundSvg);
var _sadReadingSvg = require("./assets/sad-reading.svg");
var _sadReadingSvgDefault = parcelHelpers.interopDefault(_sadReadingSvg);
var _scaredFoundSvg = require("./assets/scared-found.svg");
var _scaredFoundSvgDefault = parcelHelpers.interopDefault(_scaredFoundSvg);
var _scaredReadingSvg = require("./assets/scared-reading.svg");
var _scaredReadingSvgDefault = parcelHelpers.interopDefault(_scaredReadingSvg);
var _surprisedFoundSvg = require("./assets/surprised-found.svg");
var _surprisedFoundSvgDefault = parcelHelpers.interopDefault(_surprisedFoundSvg);
var _surprisedReadingSvg = require("./assets/surprised-reading.svg");
var _surprisedReadingSvgDefault = parcelHelpers.interopDefault(_surprisedReadingSvg);
var _vhappyFoundSvg = require("./assets/vhappy-found.svg");
var _vhappyFoundSvgDefault = parcelHelpers.interopDefault(_vhappyFoundSvg);
var _vhappyReadingSvg = require("./assets/vhappy-reading.svg");
var _vhappyReadingSvgDefault = parcelHelpers.interopDefault(_vhappyReadingSvg);
var _waitingReadSvg = require("./assets/waiting-read.svg");
var _waitingReadSvgDefault = parcelHelpers.interopDefault(_waitingReadSvg);
var _speechBubbleJs = require("./speechBubble.js");
class FloatingCharacter {
    constructor(){
        this.element = document.createElement("div");
        this.element.id = "floating-circle";
        this.element.style.position = "absolute";
        this.element.style.width = "80px";
        this.element.style.height = "80px";
        this.element.style.borderRadius = "50%";
        this.element.style.zIndex = "9999999999999";
        this.element.style.transformOrigin = "center top";
        this.element.style.top = "10px";
        this.element.style.opacity = "0";
        this.element.style.transform = "scale(.5)";
        this.element.style.transition = "transform .5s ease-in-out, opacity .5s ease-in-out";
        document.body.appendChild(this.element);
        const avatar = document.createElement("img");
        avatar.src = (0, _happyFoundSvgDefault.default // Default to happy face
        );
        avatar.style.width = "100%";
        avatar.style.height = "100%";
        avatar.style.userSelect = "none";
        this.element.appendChild(avatar);
        this.avatar = avatar;
        this.bubble = new (0, _speechBubbleJs.SpeechBubble)(this) // Initialize the speech bubble
        ;
        // Mood-to-image mapping
        this.moods = {
            funny: {
                image: (0, _funnyReadingSvgDefault.default),
                found: (0, _funnyFoundSvgDefault.default)
            },
            happy: {
                image: (0, _vhappyReadingSvgDefault.default),
                found: (0, _vhappyFoundSvgDefault.default)
            },
            love: {
                image: (0, _loveReadingSvgDefault.default),
                found: (0, _loveFoundSvgDefault.default)
            },
            sad: {
                image: (0, _sadReadingSvgDefault.default),
                found: (0, _sadFoundSvgDefault.default)
            },
            scared: {
                image: (0, _scaredReadingSvgDefault.default),
                found: (0, _scaredFoundSvgDefault.default)
            },
            surprised: {
                image: (0, _surprisedReadingSvgDefault.default),
                found: (0, _surprisedFoundSvgDefault.default)
            },
            neutral: {
                image: (0, _happyReadingSvgDefault.default),
                found: (0, _happyFoundSvgDefault.default)
            },
            waiting: {
                image: (0, _waitingReadSvgDefault.default),
                found: (0, _waitingReadSvgDefault.default)
            }
        };
    }
    async moveToElement(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        this.element.style.left = `${rect.left + rect.width + scrollLeft}px`;
        this.element.style.top = `${rect.top + scrollTop - 10}px`;
        // Wait for the transition to complete
        await new Promise((resolve)=>setTimeout(resolve, 1000));
    }
    async showInCorner() {
        setTimeout(()=>{
            this.element.style.transform = "scale(1)";
            this.element.style.right = "350px";
            this.element.style.top = "30px";
            this.element.style.opacity = "1";
            this.element.style.position = "fixed";
        //this.element.style.transition = "all 1s ease-in-out"
        }, 100);
        await new Promise((resolve)=>setTimeout(resolve, 400));
    }
    remove() {
        if (this.element) this.element.remove() // Remove the DOM element
        ;
    }
    updateMood(mood, found = false, surprise = false) {
        const moodData = this.moods[mood];
        if (!moodData) {
            console.warn(`Mood "${mood}" not found.`);
            return;
        }
        // Update the avatar image
        this.avatar.src = found ? moodData.found : moodData.image;
        // Add "jump" animation if the mood is surprise
        if (surprise) {
            this.element.style.transition = "transform 0.2s ease-in-out";
            this.element.style.transform = "scale(1.2)";
            // Reset to normal scale after the jump
            setTimeout(()=>{
                this.element.style.transform = "scale(1)";
                this.element.style.transition = "all 1s ease-in-out";
            }, 200);
        }
    }
    ready() {
        this.updateMood("happy", false);
        this.element.style.position = "absolute";
        this.element.style.right = "auto";
        this.element.style.left = "auto";
        this.element.style.transition = "all 1s ease-in-out";
    }
    async speak(message, action = "OK") {
        await this.bubble.show(message, action);
    }
    async showWithChoices(message, choices) {
        const result = await this.bubble.showWithChoices(message, choices);
        return result;
    }
    async showWithInput(message, placeholder) {
        const result = await this.bubble.showWithInput(message, placeholder);
        return result;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG","./assets/funny-found.svg":"acTn1","./assets/funny-reading.svg":"7Dcvn","./assets/happy-found.svg":"6Btp5","./assets/happy-reading.svg":"fR9ZU","./assets/love-found.svg":"jtx1b","./assets/love-reading.svg":"3DjDH","./assets/sad-found.svg":"6oTK1","./assets/sad-reading.svg":"gbmBw","./assets/scared-found.svg":"h6xdR","./assets/scared-reading.svg":"fuXGL","./assets/surprised-found.svg":"bP6Bi","./assets/surprised-reading.svg":"jqkJ5","./assets/vhappy-found.svg":"5UvUv","./assets/vhappy-reading.svg":"dYU3M","./assets/waiting-read.svg":"ahKIe","./speechBubble.js":"i5QyI"}],"6dfwG":[function(require,module,exports) {
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

},{}],"acTn1":[function(require,module,exports) {
module.exports = require("37f5d127cbaf31e4").getBundleURL("lTIPU") + "funny-found.e485d2a1.svg" + "?" + Date.now();

},{"37f5d127cbaf31e4":"lSi2Y"}],"lSi2Y":[function(require,module,exports) {
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

},{}],"7Dcvn":[function(require,module,exports) {
module.exports = require("f471704d3c8a0e0c").getBundleURL("lTIPU") + "funny-reading.c1f1f57c.svg" + "?" + Date.now();

},{"f471704d3c8a0e0c":"lSi2Y"}],"6Btp5":[function(require,module,exports) {
module.exports = require("b0a3a98be39eed93").getBundleURL("lTIPU") + "happy-found.ff63ac68.svg" + "?" + Date.now();

},{"b0a3a98be39eed93":"lSi2Y"}],"fR9ZU":[function(require,module,exports) {
module.exports = require("6c73efd567be3c9").getBundleURL("lTIPU") + "happy-reading.b6e214a3.svg" + "?" + Date.now();

},{"6c73efd567be3c9":"lSi2Y"}],"jtx1b":[function(require,module,exports) {
module.exports = require("f6ce9ff76c72bd95").getBundleURL("lTIPU") + "love-found.36ae052c.svg" + "?" + Date.now();

},{"f6ce9ff76c72bd95":"lSi2Y"}],"3DjDH":[function(require,module,exports) {
module.exports = require("bd128c3d9842c31f").getBundleURL("lTIPU") + "love-reading.5f3c2504.svg" + "?" + Date.now();

},{"bd128c3d9842c31f":"lSi2Y"}],"6oTK1":[function(require,module,exports) {
module.exports = require("742f3b48cc0ab415").getBundleURL("lTIPU") + "sad-found.3271be76.svg" + "?" + Date.now();

},{"742f3b48cc0ab415":"lSi2Y"}],"gbmBw":[function(require,module,exports) {
module.exports = require("c96f50268920d45f").getBundleURL("lTIPU") + "sad-reading.963e032e.svg" + "?" + Date.now();

},{"c96f50268920d45f":"lSi2Y"}],"h6xdR":[function(require,module,exports) {
module.exports = require("757fb940632f08ba").getBundleURL("lTIPU") + "scared-found.f2e83b96.svg" + "?" + Date.now();

},{"757fb940632f08ba":"lSi2Y"}],"fuXGL":[function(require,module,exports) {
module.exports = require("dbe7ebf3eeef0383").getBundleURL("lTIPU") + "scared-reading.48c24092.svg" + "?" + Date.now();

},{"dbe7ebf3eeef0383":"lSi2Y"}],"bP6Bi":[function(require,module,exports) {
module.exports = require("5dc407270ddf1f96").getBundleURL("lTIPU") + "surprised-found.d9d53329.svg" + "?" + Date.now();

},{"5dc407270ddf1f96":"lSi2Y"}],"jqkJ5":[function(require,module,exports) {
module.exports = require("b5645bfcf2ab5db3").getBundleURL("lTIPU") + "surprised-reading.a3e12d8b.svg" + "?" + Date.now();

},{"b5645bfcf2ab5db3":"lSi2Y"}],"5UvUv":[function(require,module,exports) {
module.exports = require("59897838e07bb3ba").getBundleURL("lTIPU") + "vhappy-found.5ca6b1ba.svg" + "?" + Date.now();

},{"59897838e07bb3ba":"lSi2Y"}],"dYU3M":[function(require,module,exports) {
module.exports = require("36587b0e7cee397b").getBundleURL("lTIPU") + "vhappy-reading.692c964d.svg" + "?" + Date.now();

},{"36587b0e7cee397b":"lSi2Y"}],"ahKIe":[function(require,module,exports) {
module.exports = require("715fcb4f23ab5fe6").getBundleURL("lTIPU") + "waiting-read.c8830ede.svg" + "?" + Date.now();

},{"715fcb4f23ab5fe6":"lSi2Y"}],"i5QyI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpeechBubble", ()=>SpeechBubble);
class SpeechBubble {
    constructor(floatingCharacter){
        this.character = floatingCharacter;
        // Create the wrapper for the character, speech bubble, and blurred background
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("speech-bubble-wrapper");
        this.character.element.appendChild(this.wrapper);
        // Create the blurred background
        this.blurBackground = document.createElement("div");
        this.blurBackground.classList.add("speech-bubble-blur-background");
        this.wrapper.appendChild(this.blurBackground);
        // Create the speech bubble element
        this.element = document.createElement("div");
        this.element.id = "speech-bubble";
        this.element.classList.add("speech-bubble");
        this.wrapper.appendChild(this.element);
        // Create the message container
        this.messageContainer = document.createElement("div");
        this.messageContainer.classList.add("speech-bubble-message");
        this.element.appendChild(this.messageContainer);
        // Create the button container (used for both single and multiple buttons)
        this.buttonContainer = document.createElement("div");
        this.buttonContainer.classList.add("speech-bubble-buttons");
        this.wrapper.appendChild(this.buttonContainer);
        // Inject CSS for styling
        this.injectStyles();
    }
    // Show with a single button
    async show(message, action = "OK") {
        this.messageContainer.textContent = "" // Clear any existing text
        ;
        this.buttonContainer.innerHTML = "" // Clear previous buttons
        ;
        const button = document.createElement("button");
        button.textContent = action;
        button.classList.add("speech-bubble-button");
        this.buttonContainer.appendChild(button);
        this.wrapper.style.display = "flex";
        this.blurBackground.style.display = "block" // Show the background
        ;
        // Trigger the scale animation
        requestAnimationFrame(()=>{
            this.wrapper.classList.add("speech-bubble-active");
            this.blurBackground.classList.add("blur-active");
        });
        await this.animateText(message) // Animate the text appearance
        ;
        return new Promise((resolve)=>{
            button.addEventListener("click", async ()=>{
                await this.hide();
                resolve() // Resolve when button is clicked
                ;
            });
        });
    }
    // Show with multiple choices
    async showWithChoices(message, choices) {
        this.messageContainer.textContent = "" // Clear any existing text
        ;
        this.buttonContainer.innerHTML = "" // Clear previous buttons
        ;
        this.wrapper.style.display = "flex";
        this.blurBackground.style.display = "block" // Show the background
        ;
        // Trigger the scale animation
        requestAnimationFrame(()=>{
            this.wrapper.classList.add("speech-bubble-active");
            this.blurBackground.classList.add("blur-active");
        });
        this.animateText(message) // Animate the text appearance
        ;
        return new Promise((resolve)=>{
            choices.forEach((choice)=>{
                const button = document.createElement("button");
                button.textContent = choice.label;
                button.classList.add("speech-bubble-button");
                this.buttonContainer.appendChild(button);
                button.addEventListener("click", async ()=>{
                    await this.hide();
                    resolve(choice.value) // Resolve the promise with the button's value
                    ;
                });
            });
        });
    }
    // Show with input field
    // Show with input field
    // Show with multiline input field
    async showWithInput(message, placeholder = "") {
        this.messageContainer.textContent = "" // Clear any existing text
        ;
        this.buttonContainer.innerHTML = "" // Clear previous buttons
        ;
        const inputContainer = document.createElement("div");
        inputContainer.classList.add("speech-bubble-input-container");
        const textarea = document.createElement("textarea");
        textarea.placeholder = placeholder;
        textarea.classList.add("speech-bubble-textarea");
        inputContainer.appendChild(textarea);
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit";
        submitButton.classList.add("speech-bubble-button");
        //submitButton.disabled = true // Initially disable the button
        inputContainer.appendChild(submitButton);
        this.buttonContainer.appendChild(inputContainer);
        this.wrapper.style.display = "flex";
        this.blurBackground.style.display = "block" // Show the background
        ;
        // Trigger the scale animation
        requestAnimationFrame(()=>{
            this.wrapper.classList.add("speech-bubble-active");
            this.blurBackground.classList.add("blur-active");
        });
        await this.animateText(message) // Animate the text appearance
        ;
        return new Promise((resolve)=>{
            let resolved = false // Flag to ensure resolve is called only once
            ;
            const validateInput = ()=>{
                const userInput = textarea.value.trim();
            //submitButton.disabled = userInput === "" // Disable button if input is empty
            };
            const submitInput = async ()=>{
                const userInput = textarea.value.trim();
                if (userInput && !resolved) {
                    resolved = true // Prevent multiple resolves
                    ;
                    await this.hide();
                    resolve(userInput) // Resolve with the input value
                    ;
                } else textarea.classList.add("invalid") // Add an invalid class for visual feedback
                ;
            };
            // Handle input change
            textarea.addEventListener("input", validateInput);
            // Handle button click
            submitButton.addEventListener("click", submitInput);
            // Handle pressing Enter key
            textarea.addEventListener("keydown", (event)=>{
                if (event.key === "Enter") {
                    event.preventDefault() // Prevent newline in the textarea
                    ;
                    submitInput();
                }
            });
            console.log("Waiting for user input...");
        });
    }
    async animateText(message) {
        if (this.currentAnimation) // Cancel any ongoing animation
        this.currentAnimation.cancelled = true;
        const animationState = {
            cancelled: false
        };
        this.currentAnimation = animationState;
        this.messageContainer.textContent = "" // Clear any existing text
        ;
        for(let i = 0; i < message.length; i++){
            if (animationState.cancelled) // Stop the animation if it's cancelled
            return;
            this.messageContainer.textContent += message[i];
            await new Promise((resolve)=>setTimeout(resolve, 20)) // Delay for each character
            ;
        }
        // Clear the animation state once completed
        if (this.currentAnimation === animationState) this.currentAnimation = null;
    }
    remove() {
        if (this.element) this.element.remove() // Remove the DOM element
        ;
    }
    async hide() {
        this.wrapper.classList.remove("speech-bubble-active");
        this.blurBackground.classList.remove("blur-active");
        await new Promise((resolve)=>setTimeout(resolve, 300)) // Wait for the animation to complete
        ;
        this.wrapper.style.display = "none";
    }
    injectStyles() {
        const style = document.createElement("style");
        style.textContent = `
      .speech-bubble-wrapper {
        position: absolute;
        top: 0;
        left: 120%;
        display: none;
        opacity: 0;
        transform: scale(0.5);
        transform-origin: top left;
        transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 300px;
        z-index: -1;
      }

      .speech-bubble-active {
        opacity: 1;
        transform: scale(1);
      }

      .speech-bubble-blur-background {
        position: absolute;
        top: -50px;
        left: -50px;
        width: 300px;
        height: 200px;
        background-color: rgba(255, 255, 255, 0.7);
        filter: blur(15px);
        border-radius: 24px;
        z-index: -1;
        display: none;
        transition: opacity 0.3s ease-in-out;
      }

      .blur-active {
        display: block;
        opacity: 1;
      }

      .speech-bubble {
        position: relative;
        background-color: #EFF0F2;
        padding: 20px 24px;
        border-radius: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        width: 100%;
        box-sizing: border-box;
      }

      .speech-bubble::after {
        content: "";
        position: absolute;
        top: 20px;
        left: -10px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #EFF0F2;
      }

      .speech-bubble-message {
        color: #000000;
        font-size: 18px;
        line-height: 1.4;
        margin: 0;
        text-align: left;
      }

      .speech-bubble-buttons {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 0px;
        align-items: flex-end;
        width: 100%;
      }

      .speech-bubble-input-container {
        display: flex;
        gap: 8px;
        width: 100%;
        margin-top: 0px;
        align-items: flex-end;
				flex-direction: column;
      }

      .speech-bubble-textarea {
  width: 100%;
  height: 150px; /* Set the height for multiline input */
  padding: 8px;
  border: 4px solid #EFF0F2;
  border-radius: 16px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
  resize: vertical; /* Allow resizing vertically */
  background-color: #fff;
	resize: none!important;
  outline: none;
	border-radius: 30px;
	padding: 12px 18px;
}

.speech-bubble-textarea:focus {
  border-color: #D9FFB0; /* Highlight border on focus */
	background-color: #FFF!important;
}

.invalid {
		border-color: #E72070;
}

      .speech-bubble-button {
        padding: 12px 24px;
        background-color: #E2FFCC;
        color: #000000;
        border: none;
        border-radius: 24px;
        cursor: pointer;
        font-size: 18px;
        text-align: center;
        width: fit-content;
      }

      .speech-bubble-button:hover {
        transform: scale(1.02);
      }

      .speech-bubble-button:active {
        transform: scale(0.98);
      }
    `;
        document.head.appendChild(style);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"4PZhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAdventure", ()=>initAdventure);
var _analysisJs = require("./analysis.js");
let analyzedElements = new Set() // Track analyzed elements
;
// Function to request a greeting from the background script
const requestGreeting = async ()=>{
    return new Promise((resolve)=>{
        chrome.runtime.sendMessage({
            type: "GENERATE_GREETING"
        }, (response)=>{
            console.log("Received greeting:", response.greeting);
            resolve({
                greeting: response.greeting,
                ready: response.ready
            });
        });
    });
};
const initAdventure = async (character)=>{
    character.showInCorner();
    // Request a greeting from the background script
    const greeting = await requestGreeting();
    // Add the floating character to the top right of the page
    console.log(greeting);
    if (!greeting.ready) character.speak(greeting.greeting);
    else {
        // Show adventure options
        const choice = await character.showWithChoices(greeting.greeting, [
            {
                label: "Roam free",
                value: "explore"
            },
            {
                label: "I have a quest for you!",
                value: "quest"
            }
        ]);
        if (choice === "quest") {
            const quest = await character.showWithInput("What\u2019s today's quest?", "E.g. Help me find uplifting concepts to make me feel better");
            // Save the quest in chrome storage
            chrome.storage.sync.set({
                quest: quest
            });
            character.ready();
            (0, _analysisJs.analyzeAllText)(character, analyzedElements);
        } else {
            chrome.storage.sync.set({
                quest: "learn something new"
            });
            character.ready();
            (0, _analysisJs.analyzeAllText)(character, analyzedElements);
        }
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        console.log("User selected:", choice);
        console.log("Character initialized and analysis started");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG","./analysis.js":"frlXt"}],"frlXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyzeAllText", ()=>analyzeAllText);
const analyzeAllText = async (character, analyzedElements)=>{
    let isCanceled = false // Flag to cancel current processing
    ;
    // Get all elements to analyze
    const elements = Array.from(document.querySelectorAll(".entry-content p, .entry-content span, .entry-content li")).filter((el)=>{
        const identifier = el.innerText.trim();
        return !el.classList.contains("analyzed-text") && // Skip already-analyzed elements
        !analyzedElements.has(identifier) // Skip already-tracked elements
        ;
    });
    const resetCancellation = ()=>{
        isCanceled = false;
    };
    const isVisibleInViewport = (el)=>{
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };
    for(let i = 0; i < elements.length; i++){
        const element = elements[i];
        const identifier = element.innerText.trim();
        // Skip already-analyzed elements
        if (analyzedElements.has(identifier) || element.classList.contains("analyzed-text")) continue;
        // Wait until the element is visible in the viewport
        while(!isVisibleInViewport(element)){
            if (!isCanceled) character.updateMood("waiting");
            await new Promise((resolve)=>setTimeout(resolve, 100)) // Check every 100ms
            ;
        }
        if (!isCanceled) character.updateMood("neutral");
        // Cancel the current analysis if required
        if (isCanceled) {
            i-- // Retry the current paragraph on resumption
            ;
            await new Promise((resolve)=>setTimeout(resolve, 100)) // Wait briefly before resuming
            ;
            continue;
        }
        // Move the character to the element
        await character.moveToElement(element);
        // Highlight the current element with a dashed border
        element.classList.add("currently-analyzing");
        element.style.outline = "2px dashed #CDCDCD";
        element.style.borderRadius = "15px";
        element.style.outlineOffset = "4px";
        element.style.boxSizing = "border-box";
        if (isCanceled) {
            console.log("Movement canceled due to highlight interaction");
            removeHighlight(element);
            continue;
        }
        const text = element.innerText.trim();
        if (!text) {
            removeHighlight(element);
            continue;
        }
        // Combined analysis for mood and noteworthy text
        const analysisResult = await analyzeTextCombined(text);
        if (isCanceled) {
            console.log("Analysis canceled due to highlight interaction");
            removeHighlight(element);
            continue;
        }
        // Mark the element as analyzed visually and in the set
        element.classList.add("analyzed-text");
        analyzedElements.add(identifier);
        // Update the character mood
        const { mood, interesting, explanation } = analysisResult;
        if (isCanceled) {
            console.log("Mood update canceled due to highlight interaction");
            continue;
        }
        character.updateMood(mood, false, mood !== "neutral");
        // If there's noteworthy text, highlight it
        if (interesting && explanation) handleHighlightInteraction(element, interesting, explanation, mood, character, ()=>{
            isCanceled = true // Trigger cancellation
            ;
        }, async ()=>{
            resetCancellation() // Resume processing
            ;
        });
        // Wait for 2 seconds before moving to the next element
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        removeHighlight(element);
        if (isCanceled) console.log("Wait interrupted due to highlight interaction");
    }
    // Generate a conclusion once the last element is analyzed
    if (elements.length > 0) {
        console.log("Analysis complete. Generating conclusion...");
        // Call the background script to generate the conclusion
        chrome.runtime.sendMessage({
            type: "GENERATE_CONCLUSION"
        }, (response)=>{
            if (response && response.ready) {
                console.log("Conclusion generated:", response.conclusion);
                character.updateMood("neutral", true);
                character.speak(response.conclusion, "Thanks for your help!");
            } else {
                console.error("Error generating conclusion:", response.conclusion);
                character.updateMood("neutral", true);
                character.speak("Oops, I couldn't wrap up the adventure this time. Let's try again later!", "Thanks for your help!");
            }
        });
    }
};
// Remove the highlight from the element
const removeHighlight = (element)=>{
    element.style.outline = "";
    element.style.outlineOffset = "";
};
// Helper function for combined analysis
const analyzeTextCombined = async (text)=>{
    try {
        return await new Promise((resolve)=>{
            chrome.runtime.sendMessage({
                type: "ANALYZE_TEXT",
                text
            }, (response)=>{
                resolve({
                    mood: response?.mood || "neutral",
                    interesting: response?.interesting || null,
                    explanation: response?.explanation || null
                });
            });
        });
    } catch  {
        return {
            mood: "neutral",
            interesting: null,
            explanation: null
        } // Default to neutral if an error occurs
        ;
    }
};
// Helper function to handle highlight interaction
const handleHighlightInteraction = (element, textToHighlight, explanation, mood, character, onPause, onResume)=>{
    const sanitizedText = textToHighlight.replace(/[/\\'""]/g, "") // Remove specific characters
    ;
    const regex = new RegExp(`(${sanitizedText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "i" // Only match the first instance
    );
    element.innerHTML = element.innerHTML.replace(regex, `<span class="highlighted-text" style="background-color: yellow; cursor: pointer;">$1</span>`);
    const highlight = element.querySelector(".highlighted-text");
    // Check if the highlight exists
    if (!highlight) return;
    highlight.addEventListener("click", async ()=>{
        onPause() // Pause processing
        ;
        await character.moveToElement(highlight);
        character.updateMood(mood, true) // Update the character mood
        ;
        await character.speak(explanation, "Great find!") // Wait for the character to finish speaking
        ;
        character.updateMood("neutral") // Reset the character mood
        ;
        onResume() // Resume processing
        ;
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}]},["7ZQTk","6cTCN"], "6cTCN", "parcelRequire0ab5")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLENBQUMsQ0FBQyxFQUFFLGNBQWMsUUFBUSx1QkFBdUIsUUFBUSxDQUFDLENBQUMsRUFDM0QsSUFBSSxnQ0FBZ0M7O0lBRXRDLFFBQVEsWUFBWSxRQUFRLFVBQVUsUUFDcEMsT0FDQSxDQUFDLDJGQUEyRixDQUFDO0lBRy9GLE1BQU0sWUFBWSxRQUFRLGNBQWM7SUFFeEMsZ0NBQWdDO0lBQ2hDLElBQUksQ0FBQyxXQUFXO0lBRWhCLFVBQVUsaUJBQWlCLFNBQVM7UUFDbEMsVUFBVSxtQkFBbUI7O1FBQzdCLE1BQU0sVUFBVSxjQUFjO1FBQzlCLFVBQVUsV0FBVyxNQUFNLE1BQU0sNEJBQTRCOztRQUM3RCxNQUFNLFVBQVUsTUFBTSxhQUFhLGVBQWUsNENBQTRDOztRQUM5RixVQUFVLFdBQVcsV0FBVywyQkFBMkI7O1FBQzNELFdBQVcsb0JBQW9COztJQUNqQztBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjUuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1iYzVjZWJlMTZkNzJkYTU2LmpzIiwiY29udGVudC5qcyIsImZsb2F0aW5nQ2hhcmFjdGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS01MTBkNmUwNGQ2NTQzODFmLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9idW5kbGUtdXJsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS0xYjA1MjZmYzMyYWIzYmMyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS00MmFjNTczZGI4MDRhOGEyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS01MDI0ZjliMGU2ODRiMTgwLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS03ZGQ5MTllNTdjOTJhNzhhLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS03NTEzYWNlY2M1MjEwZjFmLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1mMzI3MzI2MzExMDhmNjFiLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS0xODcwMDI1ZGJkYWExOGRjLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1mMzNmMWJlZjE4YTJlZTM1LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS05ZGIyMzlmMjdhZDk2YTIxLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS0xMTg4MGUwMDAzMTMyMjEyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1hMDBhM2UyZGQ3OWM0YWM2LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1mOWY0ZTdkNzk2OWM3MGEwLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS1kZWQwOGJlYjdmNDFkNzFjLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS04NjUxZWY1MTZiNGU4MTZhLmpzIiwic3BlZWNoQnViYmxlLmpzIiwiaW5pdEFkdmVudHVyZS5qcyIsImFuYWx5c2lzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkPWdsb2JhbFRoaXMucHJvY2Vzcz8uYXJndnx8W107dmFyIHk9KCk9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHx7fTt2YXIgSD1uZXcgU2V0KGQpLF89ZT0+SC5oYXMoZSksRz1kLmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFo9XyhcIi0tZHJ5LXJ1blwiKSxwPSgpPT5fKFwiLS12ZXJib3NlXCIpfHx5KCkuVkVSQk9TRT09PVwidHJ1ZVwiLHE9cCgpO3ZhciB1PShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB4PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksdj0oLi4uZSk9PnUoXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxtPSguLi5lKT0+dShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLFM9MCxjPSguLi5lKT0+cCgpJiZ1KGBcXHV7MUY3RTF9ICR7UysrfWAsLi4uZSk7dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6dHJ1ZSxcImlzQmFja2dyb3VuZFwiOmZhbHNlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJzY3JpcHQtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYWx5c3NheC9Mb2NhbEV4cGVyaW1lbnRzL2FpLXRlc3QvdGVzdC1haS9jb250ZW50LmpzXCIsXCJidW5kbGVJZFwiOlwiZmYxMTgzOGQ4Yzg3OWY2ZlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjUzMTAzfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9YS5jb2RlZnJhbWV8fGEuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgcz1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uICQoKXtsZXQgZT1nbG9iYWxUaGlzLndpbmRvdz8udHJ1c3RlZFR5cGVzO2lmKHR5cGVvZiBlPlwidVwiKXJldHVybjtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0cnVzdGVkLXR5cGVzXCJdJyk/LmNvbnRlbnQ/LnNwbGl0KFwiIFwiKSxvPXQ/dFt0Py5sZW5ndGgtMV06dm9pZCAwO3JldHVybiB0eXBlb2YgZTxcInVcIj9lLmNyZWF0ZVBvbGljeShvfHxgdHJ1c3RlZC1odG1sLSR7c31gLHtjcmVhdGVIVE1MOmE9PmF9KTp2b2lkIDB9dmFyIFQ9JCgpO2Z1bmN0aW9uIGcoKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocyl9ZnVuY3Rpb24gZigpe3JldHVybiFnKCl9ZnVuY3Rpb24gRigpe2xldCBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5pZD1zO2xldCB0PWBcbiAgPHN0eWxlPlxuICAgICMke3N9IHtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgICBib3gtc2hhZG93OiAjMzMzIDQuN3B4IDQuN3B4O1xuICAgIH1cblxuICAgICMke3N9OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICBjb2xvcjogIzQ0NDtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwge1xuICAgICAgMCUge1xuICAgICAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICBcbiAgICAgIDEwMCUge1xuICAgICAgICBmaWxsOiAjMzMzO1xuICAgICAgfVxuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0xIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjhzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTIge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgIyR7c30gLnN2Zy1lbGVtLTMge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDFzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuXG4gICAgIyR7c30gLmhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICA8L3N0eWxlPlxuICBcbiAgPHN2ZyBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI2NCAzNTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEzOS4yMjEgMjgyLjI0M0MxNTQuMjUyIDI4Mi4yNDMgMTY2LjkwMyAyOTQuODQ5IDE2MS4zMzggMzA4LjgxMkMxNTkuNDg5IDMxMy40NTQgMTU3LjE1IDMxNy45MTMgMTU0LjM0NyAzMjIuMTA5QzE0Ni40NjQgMzMzLjkwOSAxMzUuMjYgMzQzLjEwNyAxMjIuMTUxIDM0OC41MzhDMTA5LjA0MyAzNTMuOTY5IDk0LjYxODIgMzU1LjM5IDgwLjcwMjIgMzUyLjYyMUM2Ni43ODYxIDM0OS44NTIgNTQuMDAzNCAzNDMuMDE4IDQzLjk3MDUgMzMyLjk4M0MzMy45Mzc1IDMyMi45NDcgMjcuMTA1IDMxMC4xNjIgMjQuMzM2OSAyOTYuMjQyQzIxLjU2ODkgMjgyLjMyMyAyMi45ODk1IDI2Ny44OTUgMjguNDE5MyAyNTQuNzgzQzMzLjg0OTEgMjQxLjY3MSA0My4wNDQxIDIzMC40NjQgNTQuODQxNiAyMjIuNTc5QzU5LjAzNTMgMjE5Ljc3NyA2My40OTA4IDIxNy40MzggNjguMTI5NSAyMTUuNTg4QzgyLjA5MTUgMjEwLjAyMSA5NC42OTc4IDIyMi42NzEgOTQuNjk3OCAyMzcuNzAzTDk0LjY5NzggMjU1LjAyN0M5NC42OTc4IDI3MC4wNTggMTA2Ljg4MyAyODIuMjQzIDEyMS45MTQgMjgyLjI0M0gxMzkuMjIxWlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0xXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTE5Mi4yNjEgMTQyLjAyOEMxOTIuMjYxIDEyNi45OTYgMjA0Ljg2NyAxMTQuMzQ2IDIxOC44MjkgMTE5LjkxM0MyMjMuNDY4IDEyMS43NjMgMjI3LjkyMyAxMjQuMTAyIDIzMi4xMTcgMTI2LjkwNEMyNDMuOTE1IDEzNC43ODkgMjUzLjExIDE0NS45OTYgMjU4LjUzOSAxNTkuMTA4QzI2My45NjkgMTcyLjIyIDI2NS4zOSAxODYuNjQ4IDI2Mi42MjIgMjAwLjU2N0MyNTkuODU0IDIxNC40ODcgMjUzLjAyMSAyMjcuMjcyIDI0Mi45ODggMjM3LjMwOEMyMzIuOTU1IDI0Ny4zNDMgMjIwLjE3MyAyNTQuMTc3IDIwNi4yNTYgMjU2Ljk0NkMxOTIuMzQgMjU5LjcxNSAxNzcuOTE2IDI1OC4yOTQgMTY0LjgwNyAyNTIuODYzQzE1MS42OTkgMjQ3LjQzMiAxNDAuNDk1IDIzOC4yMzQgMTMyLjYxMiAyMjYuNDM0QzEyOS44MDggMjIyLjIzOCAxMjcuNDcgMjE3Ljc3OSAxMjUuNjIgMjEzLjEzN0MxMjAuMDU2IDE5OS4xNzQgMTMyLjcwNyAxODYuNTY4IDE0Ny43MzggMTg2LjU2OEwxNjUuMDQ0IDE4Ni41NjhDMTgwLjA3NiAxODYuNTY4IDE5Mi4yNjEgMTc0LjM4MyAxOTIuMjYxIDE1OS4zNTJMMTkyLjI2MSAxNDIuMDI4WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0yXCIgPjwvcGF0aD5cbiAgICA8cGF0aCBkPVwiTTk1LjY1MjIgMTY0LjEzNUM5NS42NTIyIDE3OS4xNjcgODMuMjI3OSAxOTEuNzI1IDY4LjgwMTMgMTg3LjUwNUM1OS41MTQ1IDE4NC43ODggNTAuNjQzMiAxODAuNjYzIDQyLjUxMDYgMTc1LjIyN0MyNi43ODA2IDE2NC43MTQgMTQuNTIwNiAxNDkuNzcyIDcuMjgwODkgMTMyLjI4OUMwLjA0MTE4MyAxMTQuODA3IC0xLjg1MzA1IDk1LjU2OTcgMS44Mzc3MiA3Ny4wMTA0QzUuNTI4NDkgNTguNDUxMSAxNC42Mzg1IDQxLjQwMzMgMjguMDE1NyAyOC4wMjI4QzQxLjM5MyAxNC42NDIzIDU4LjQzNjYgNS41MzAwNiA3Ni45OTE0IDEuODM4MzlDOTUuNTQ2MSAtMS44NTMyOSAxMTQuNzc5IDAuMDQxNDE2MiAxMzIuMjU3IDcuMjgyOUMxNDkuNzM1IDE0LjUyNDQgMTY0LjY3NCAyNi43ODc0IDE3NS4xODQgNDIuNTIxMkMxODAuNjIgNTAuNjU3NiAxODQuNzQ0IDU5LjUzMzIgMTg3LjQ2IDY4LjgyNDVDMTkxLjY3OCA4My4yNTE5IDE3OS4xMTkgOTUuNjc1OSAxNjQuMDg4IDk1LjY3NTlMMTIyLjg2OSA5NS42NzU5QzEwNy44MzcgOTUuNjc1OSA5NS42NTIyIDEwNy44NjEgOTUuNjUyMiAxMjIuODkyTDk1LjY1MjIgMTY0LjEzNVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tM1wiPjwvcGF0aD5cbiAgPC9zdmc+XG4gIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+Q29udGV4dCBJbnZhbGlkYXRlZCwgUHJlc3MgdG8gUmVsb2FkPC9zcGFuPlxuICBgO3JldHVybiBlLmlubmVySFRNTD1UP1QuY3JlYXRlSFRNTCh0KTp0LGUuc3R5bGUucG9pbnRlckV2ZW50cz1cIm5vbmVcIixlLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIixlLnN0eWxlLmJvdHRvbT1cIjE0LjdweFwiLGUuc3R5bGUucmlnaHQ9XCIxNC43cHhcIixlLnN0eWxlLmZvbnRGYW1pbHk9XCJzYW5zLXNlcmlmXCIsZS5zdHlsZS5kaXNwbGF5PVwiZmxleFwiLGUuc3R5bGUuanVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIixlLnN0eWxlLmFsaWduSXRlbXM9XCJjZW50ZXJcIixlLnN0eWxlLnBhZGRpbmc9XCIxNC43cHhcIixlLnN0eWxlLmdhcD1cIjE0LjdweFwiLGUuc3R5bGUuYm9yZGVyUmFkaXVzPVwiNC43cHhcIixlLnN0eWxlLnpJbmRleD1cIjIxNDc0ODM2NDdcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zdHlsZS50cmFuc2l0aW9uPVwiYWxsIDAuNDdzIGVhc2UtaW4tb3V0XCIsZX1mdW5jdGlvbiBOKGUpe3JldHVybiBuZXcgUHJvbWlzZSh0PT57ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhmKCkmJihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpKSx0KCkpOmdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e2YoKSYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKX0pfSl9dmFyIGs9KCk9PntsZXQgZTtpZihmKCkpe2xldCB0PUYoKTtlPU4odCl9cmV0dXJue3Nob3c6YXN5bmMoe3JlbG9hZEJ1dHRvbjp0PSExfT17fSk9Pnthd2FpdCBlO2xldCBvPWcoKTtvLnN0eWxlLm9wYWNpdHk9XCIxXCIsdCYmKG8ub25jbGljaz1yPT57ci5zdG9wUHJvcGFnYXRpb24oKSxnbG9iYWxUaGlzLmxvY2F0aW9uLnJlbG9hZCgpfSxvLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIiksby5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCIsby5zdHlsZS5wb2ludGVyRXZlbnRzPVwiYWxsXCIpfSxoaWRlOmFzeW5jKCk9Pnthd2FpdCBlO2xldCB0PWcoKTt0LnN0eWxlLm9wYWNpdHk9XCIwXCJ9fX07dmFyIFc9YCR7RX0ke21vZHVsZS5pZH1fX2AsaSxBPSExLE09aygpO2FzeW5jIGZ1bmN0aW9uIGgoKXtjKFwiU2NyaXB0IFJ1bnRpbWUgLSByZWxvYWRpbmdcIiksQT9nbG9iYWxUaGlzLmxvY2F0aW9uPy5yZWxvYWQ/LigpOk0uc2hvdyh7cmVsb2FkQnV0dG9uOiEwfSl9ZnVuY3Rpb24gUigpe2k/LmRpc2Nvbm5lY3QoKSxpPWw/LnJ1bnRpbWUuY29ubmVjdCh7bmFtZTpXfSksaS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntoKCl9KSxpLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihlPT57ZS5fX3BsYXNtb19jc19yZWxvYWRfXyYmaCgpLGUuX19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fJiYoQT0hMCl9KX1mdW5jdGlvbiBqKCl7aWYobD8ucnVudGltZSl0cnl7UigpLHNldEludGVydmFsKFIsMjRlMyl9Y2F0Y2h7cmV0dXJufX1qKCk7UChhc3luYyBlPT57YyhcIlNjcmlwdCBydW50aW1lIC0gb24gdXBkYXRlZCBhc3NldHNcIiksZS5maWx0ZXIobz0+by5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKG89PkwobW9kdWxlLmJ1bmRsZSxvLmlkKSkmJihNLnNob3coKSxsPy5ydW50aW1lP2kucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2NoYW5nZWRfXzohMH0pOnNldFRpbWVvdXQoKCk9PntoKCl9LDQ3MDApKX0pO1xuIiwiaW1wb3J0IHsgRmxvYXRpbmdDaGFyYWN0ZXIgfSBmcm9tIFwiLi9mbG9hdGluZ0NoYXJhY3Rlci5qc1wiXG5pbXBvcnQgeyBpbml0QWR2ZW50dXJlIH0gZnJvbSBcIi4vaW5pdEFkdmVudHVyZS5qc1wiXG5cbmxldCBpc0luaXRpYWxpemVkID0gZmFsc2UgLy8gUHJldmVudCBtdWx0aXBsZSBpbml0aWFsaXphdGlvbnNcbmxldCBjaGFyYWN0ZXIgPSBudWxsIC8vIFJlZmVyZW5jZSB0byB0aGUgZmxvYXRpbmcgY2hhcmFjdGVyXG5jb25zdCBhbmFseXplZEVsZW1lbnRzID0gbmV3IFNldCgpIC8vIFRyYWNrIGFuYWx5emVkIGVsZW1lbnRzXG5cbi8vIExpc3RlbiBmb3IgbWVzc2FnZXMgZnJvbSB0aGUgYmFja2dyb3VuZCBzY3JpcHRcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJJTklUX0FEVkVOVFVSRVwiKSB7XG4gICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGFydCBhIG5ldyBhZHZlbnR1cmVcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgYW5hbHlzaXMuLi5cIilcbiAgICAgIGlzSW5pdGlhbGl6ZWQgPSB0cnVlXG5cbiAgICAgIC8vIEFkZCB0aGUgZmxvYXRpbmcgY2hhcmFjdGVyIGFuZCBzdGFydCBhbmFseXNpc1xuICAgICAgY2hhcmFjdGVyID0gbmV3IEZsb2F0aW5nQ2hhcmFjdGVyKClcbiAgICAgIGluaXRBZHZlbnR1cmUoY2hhcmFjdGVyKVxuXG4gICAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6IFwiQ2hhcmFjdGVyIGluaXRpYWxpemVkIGFuZCBhbmFseXNpcyBzdGFydGVkXCIgfSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgRnVubnlGb3VuZCBmcm9tIFwiLi9hc3NldHMvZnVubnktZm91bmQuc3ZnXCJcbmltcG9ydCBGdW5ueVJlYWRpbmdTVkcgZnJvbSBcIi4vYXNzZXRzL2Z1bm55LXJlYWRpbmcuc3ZnXCJcbmltcG9ydCBIYXBweUZvdW5kIGZyb20gXCIuL2Fzc2V0cy9oYXBweS1mb3VuZC5zdmdcIlxuaW1wb3J0IEhhcHB5UmVhZGluZ1NWRyBmcm9tIFwiLi9hc3NldHMvaGFwcHktcmVhZGluZy5zdmdcIlxuaW1wb3J0IExvdmVGb3VuZCBmcm9tIFwiLi9hc3NldHMvbG92ZS1mb3VuZC5zdmdcIlxuaW1wb3J0IExvdmVSZWFkaW5nU1ZHIGZyb20gXCIuL2Fzc2V0cy9sb3ZlLXJlYWRpbmcuc3ZnXCJcbmltcG9ydCBTYWRGb3VuZCBmcm9tIFwiLi9hc3NldHMvc2FkLWZvdW5kLnN2Z1wiXG5pbXBvcnQgU2FkUmVhZGluZ1NWRyBmcm9tIFwiLi9hc3NldHMvc2FkLXJlYWRpbmcuc3ZnXCJcbmltcG9ydCBTY2FyZWRGb3VuZCBmcm9tIFwiLi9hc3NldHMvc2NhcmVkLWZvdW5kLnN2Z1wiXG5pbXBvcnQgU2NhcmVkUmVhZGluZ1NWRyBmcm9tIFwiLi9hc3NldHMvc2NhcmVkLXJlYWRpbmcuc3ZnXCJcbmltcG9ydCBTdXJwcmlzZWRGb3VuZCBmcm9tIFwiLi9hc3NldHMvc3VycHJpc2VkLWZvdW5kLnN2Z1wiXG5pbXBvcnQgU3VycHJpc2VkUmVhZGluZ1NWRyBmcm9tIFwiLi9hc3NldHMvc3VycHJpc2VkLXJlYWRpbmcuc3ZnXCJcbmltcG9ydCBWSGFwcHlGb3VuZCBmcm9tIFwiLi9hc3NldHMvdmhhcHB5LWZvdW5kLnN2Z1wiXG5pbXBvcnQgVkhhcHB5UmVhZGluZ1NWRyBmcm9tIFwiLi9hc3NldHMvdmhhcHB5LXJlYWRpbmcuc3ZnXCJcbmltcG9ydCBXYWl0aW5nUmVhZCBmcm9tIFwiLi9hc3NldHMvd2FpdGluZy1yZWFkLnN2Z1wiXG5pbXBvcnQgeyBTcGVlY2hCdWJibGUgfSBmcm9tIFwiLi9zcGVlY2hCdWJibGUuanNcIlxuXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdDaGFyYWN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcy5lbGVtZW50LmlkID0gXCJmbG9hdGluZy1jaXJjbGVcIlxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IFwiODBweFwiXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiODBweFwiXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuekluZGV4ID0gXCI5OTk5OTk5OTk5OTk5XCJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCJjZW50ZXIgdG9wXCJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudG9wID0gXCIxMHB4XCJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoLjUpXCJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9XG4gICAgICBcInRyYW5zZm9ybSAuNXMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgLjVzIGVhc2UtaW4tb3V0XCJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudClcblxuICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBhdmF0YXIuc3JjID0gSGFwcHlGb3VuZCAvLyBEZWZhdWx0IHRvIGhhcHB5IGZhY2VcbiAgICBhdmF0YXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIlxuICAgIGF2YXRhci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIlxuICAgIGF2YXRhci5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYXZhdGFyKVxuICAgIHRoaXMuYXZhdGFyID0gYXZhdGFyXG5cbiAgICB0aGlzLmJ1YmJsZSA9IG5ldyBTcGVlY2hCdWJibGUodGhpcykgLy8gSW5pdGlhbGl6ZSB0aGUgc3BlZWNoIGJ1YmJsZVxuXG4gICAgLy8gTW9vZC10by1pbWFnZSBtYXBwaW5nXG4gICAgdGhpcy5tb29kcyA9IHtcbiAgICAgIGZ1bm55OiB7IGltYWdlOiBGdW5ueVJlYWRpbmdTVkcsIGZvdW5kOiBGdW5ueUZvdW5kIH0sXG4gICAgICBoYXBweTogeyBpbWFnZTogVkhhcHB5UmVhZGluZ1NWRywgZm91bmQ6IFZIYXBweUZvdW5kIH0sXG4gICAgICBsb3ZlOiB7IGltYWdlOiBMb3ZlUmVhZGluZ1NWRywgZm91bmQ6IExvdmVGb3VuZCB9LFxuICAgICAgc2FkOiB7IGltYWdlOiBTYWRSZWFkaW5nU1ZHLCBmb3VuZDogU2FkRm91bmQgfSxcbiAgICAgIHNjYXJlZDogeyBpbWFnZTogU2NhcmVkUmVhZGluZ1NWRywgZm91bmQ6IFNjYXJlZEZvdW5kIH0sXG4gICAgICBzdXJwcmlzZWQ6IHsgaW1hZ2U6IFN1cnByaXNlZFJlYWRpbmdTVkcsIGZvdW5kOiBTdXJwcmlzZWRGb3VuZCB9LFxuICAgICAgbmV1dHJhbDogeyBpbWFnZTogSGFwcHlSZWFkaW5nU1ZHLCBmb3VuZDogSGFwcHlGb3VuZCB9LFxuICAgICAgd2FpdGluZzogeyBpbWFnZTogV2FpdGluZ1JlYWQsIGZvdW5kOiBXYWl0aW5nUmVhZCB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbW92ZVRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3JlY3QubGVmdCArIHJlY3Qud2lkdGggKyBzY3JvbGxMZWZ0fXB4YFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSBgJHtyZWN0LnRvcCArIHNjcm9sbFRvcCAtIDEwfXB4YFxuXG4gICAgLy8gV2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGVcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgfVxuXG4gIGFzeW5jIHNob3dJbkNvcm5lcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5yaWdodCA9IFwiMzUwcHhcIlxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRvcCA9IFwiMzBweFwiXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCJcbiAgICAgIC8vdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAxcyBlYXNlLWluLW91dFwiXG4gICAgfSwgMTAwKVxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDQwMCkpXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpIC8vIFJlbW92ZSB0aGUgRE9NIGVsZW1lbnRcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNb29kKG1vb2QsIGZvdW5kID0gZmFsc2UsIHN1cnByaXNlID0gZmFsc2UpIHtcbiAgICBjb25zdCBtb29kRGF0YSA9IHRoaXMubW9vZHNbbW9vZF1cbiAgICBpZiAoIW1vb2REYXRhKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE1vb2QgXCIke21vb2R9XCIgbm90IGZvdW5kLmApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGF2YXRhciBpbWFnZVxuICAgIHRoaXMuYXZhdGFyLnNyYyA9IGZvdW5kID8gbW9vZERhdGEuZm91bmQgOiBtb29kRGF0YS5pbWFnZVxuXG4gICAgLy8gQWRkIFwianVtcFwiIGFuaW1hdGlvbiBpZiB0aGUgbW9vZCBpcyBzdXJwcmlzZVxuICAgIGlmIChzdXJwcmlzZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0XCJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuMilcIlxuXG4gICAgICAvLyBSZXNldCB0byBub3JtYWwgc2NhbGUgYWZ0ZXIgdGhlIGp1bXBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMXMgZWFzZS1pbi1vdXRcIlxuICAgICAgfSwgMjAwKVxuICAgIH1cbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMudXBkYXRlTW9vZChcImhhcHB5XCIsIGZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5yaWdodCA9IFwiYXV0b1wiXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmxlZnQgPSBcImF1dG9cIlxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMXMgZWFzZS1pbi1vdXRcIlxuICB9XG5cbiAgYXN5bmMgc3BlYWsobWVzc2FnZSwgYWN0aW9uID0gXCJPS1wiKSB7XG4gICAgYXdhaXQgdGhpcy5idWJibGUuc2hvdyhtZXNzYWdlLCBhY3Rpb24pXG4gIH1cblxuICBhc3luYyBzaG93V2l0aENob2ljZXMobWVzc2FnZSwgY2hvaWNlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYnViYmxlLnNob3dXaXRoQ2hvaWNlcyhtZXNzYWdlLCBjaG9pY2VzKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGFzeW5jIHNob3dXaXRoSW5wdXQobWVzc2FnZSwgcGxhY2Vob2xkZXIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmJ1YmJsZS5zaG93V2l0aElucHV0KG1lc3NhZ2UsIHBsYWNlaG9sZGVyKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnbFRJUFUnKSArIFwiZnVubnktZm91bmQuZTQ4NWQyYTEuc3ZnXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidW5kbGVVUkwgPSB7fTtcblxuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMQ2FjaGVkKGlkKSB7XG4gIHZhciB2YWx1ZSA9IGJ1bmRsZVVSTFtpZF07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHZhbHVlID0gZ2V0QnVuZGxlVVJMKCk7XG4gICAgYnVuZGxlVVJMW2lkXSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRCdW5kbGVVUkwoKSB7XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBtYXRjaGVzID0gKCcnICsgZXJyLnN0YWNrKS5tYXRjaCgvKGh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcL1teKVxcbl0rL2cpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCB0d28gc3RhY2sgZnJhbWVzIHdpbGwgYmUgdGhpcyBmdW5jdGlvbiBhbmQgZ2V0QnVuZGxlVVJMQ2FjaGVkLlxuICAgICAgLy8gVXNlIHRoZSAzcmQgb25lLCB3aGljaCB3aWxsIGJlIGEgcnVudGltZSBpbiB0aGUgb3JpZ2luYWwgYnVuZGxlLlxuICAgICAgcmV0dXJuIGdldEJhc2VVUkwobWF0Y2hlc1syXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcvJztcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVVSTCh1cmwpIHtcbiAgcmV0dXJuICgnJyArIHVybCkucmVwbGFjZSgvXigoPzpodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC8uKylcXC9bXi9dKyQvLCAnJDEnKSArICcvJztcbn0gLy8gVE9ETzogUmVwbGFjZSB1c2VzIHdpdGggYG5ldyBVUkwodXJsKS5vcmlnaW5gIHdoZW4gaWUxMSBpcyBubyBsb25nZXIgc3VwcG9ydGVkLlxuXG5cbmZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSAoJycgKyB1cmwpLm1hdGNoKC8oaHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvW14vXSsvKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWdpbiBub3QgZm91bmQnKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzWzBdO1xufVxuXG5leHBvcnRzLmdldEJ1bmRsZVVSTCA9IGdldEJ1bmRsZVVSTENhY2hlZDtcbmV4cG9ydHMuZ2V0QmFzZVVSTCA9IGdldEJhc2VVUkw7XG5leHBvcnRzLmdldE9yaWdpbiA9IGdldE9yaWdpbjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCdsVElQVScpICsgXCJmdW5ueS1yZWFkaW5nLmMxZjFmNTdjLnN2Z1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2xUSVBVJykgKyBcImhhcHB5LWZvdW5kLmZmNjNhYzY4LnN2Z1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2xUSVBVJykgKyBcImhhcHB5LXJlYWRpbmcuYjZlMjE0YTMuc3ZnXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnbFRJUFUnKSArIFwibG92ZS1mb3VuZC4zNmFlMDUyYy5zdmdcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCdsVElQVScpICsgXCJsb3ZlLXJlYWRpbmcuNWYzYzI1MDQuc3ZnXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnbFRJUFUnKSArIFwic2FkLWZvdW5kLjMyNzFiZTc2LnN2Z1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2xUSVBVJykgKyBcInNhZC1yZWFkaW5nLjk2M2UwMzJlLnN2Z1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2xUSVBVJykgKyBcInNjYXJlZC1mb3VuZC5mMmU4M2I5Ni5zdmdcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCdsVElQVScpICsgXCJzY2FyZWQtcmVhZGluZy40OGMyNDA5Mi5zdmdcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCdsVElQVScpICsgXCJzdXJwcmlzZWQtZm91bmQuZDlkNTMzMjkuc3ZnXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnbFRJUFUnKSArIFwic3VycHJpc2VkLXJlYWRpbmcuYTNlMTJkOGIuc3ZnXCIgKyBcIj9cIiArIERhdGUubm93KCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnbFRJUFUnKSArIFwidmhhcHB5LWZvdW5kLjVjYTZiMWJhLnN2Z1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2xUSVBVJykgKyBcInZoYXBweS1yZWFkaW5nLjY5MmM5NjRkLnN2Z1wiICsgXCI/XCIgKyBEYXRlLm5vdygpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJ2xUSVBVJykgKyBcIndhaXRpbmctcmVhZC5jODgzMGVkZS5zdmdcIiArIFwiP1wiICsgRGF0ZS5ub3coKTsiLCJleHBvcnQgY2xhc3MgU3BlZWNoQnViYmxlIHtcbiAgY29uc3RydWN0b3IoZmxvYXRpbmdDaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNoYXJhY3RlciA9IGZsb2F0aW5nQ2hhcmFjdGVyXG5cbiAgICAvLyBDcmVhdGUgdGhlIHdyYXBwZXIgZm9yIHRoZSBjaGFyYWN0ZXIsIHNwZWVjaCBidWJibGUsIGFuZCBibHVycmVkIGJhY2tncm91bmRcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtYnViYmxlLXdyYXBwZXJcIilcbiAgICB0aGlzLmNoYXJhY3Rlci5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcilcblxuICAgIC8vIENyZWF0ZSB0aGUgYmx1cnJlZCBiYWNrZ3JvdW5kXG4gICAgdGhpcy5ibHVyQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0aGlzLmJsdXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtYnViYmxlLWJsdXItYmFja2dyb3VuZFwiKVxuICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmJsdXJCYWNrZ3JvdW5kKVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBzcGVlY2ggYnViYmxlIGVsZW1lbnRcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGhpcy5lbGVtZW50LmlkID0gXCJzcGVlY2gtYnViYmxlXCJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNwZWVjaC1idWJibGVcIilcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KVxuXG4gICAgLy8gQ3JlYXRlIHRoZSBtZXNzYWdlIGNvbnRhaW5lclxuICAgIHRoaXMubWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0aGlzLm1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNwZWVjaC1idWJibGUtbWVzc2FnZVwiKVxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2VDb250YWluZXIpXG5cbiAgICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBjb250YWluZXIgKHVzZWQgZm9yIGJvdGggc2luZ2xlIGFuZCBtdWx0aXBsZSBidXR0b25zKVxuICAgIHRoaXMuYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRoaXMuYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtYnViYmxlLWJ1dHRvbnNcIilcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5idXR0b25Db250YWluZXIpXG5cbiAgICAvLyBJbmplY3QgQ1NTIGZvciBzdHlsaW5nXG4gICAgdGhpcy5pbmplY3RTdHlsZXMoKVxuICB9XG5cbiAgLy8gU2hvdyB3aXRoIGEgc2luZ2xlIGJ1dHRvblxuICBhc3luYyBzaG93KG1lc3NhZ2UsIGFjdGlvbiA9IFwiT0tcIikge1xuICAgIHRoaXMubWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCIgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHRleHRcbiAgICB0aGlzLmJ1dHRvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiIC8vIENsZWFyIHByZXZpb3VzIGJ1dHRvbnNcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhY3Rpb25cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNwZWVjaC1idWJibGUtYnV0dG9uXCIpXG4gICAgdGhpcy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIHRoaXMuYmx1ckJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiAvLyBTaG93IHRoZSBiYWNrZ3JvdW5kXG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBzY2FsZSBhbmltYXRpb25cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtYnViYmxlLWFjdGl2ZVwiKVxuICAgICAgdGhpcy5ibHVyQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmx1ci1hY3RpdmVcIilcbiAgICB9KVxuXG4gICAgYXdhaXQgdGhpcy5hbmltYXRlVGV4dChtZXNzYWdlKSAvLyBBbmltYXRlIHRoZSB0ZXh0IGFwcGVhcmFuY2VcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuaGlkZSgpXG4gICAgICAgIHJlc29sdmUoKSAvLyBSZXNvbHZlIHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIFNob3cgd2l0aCBtdWx0aXBsZSBjaG9pY2VzXG4gIGFzeW5jIHNob3dXaXRoQ2hvaWNlcyhtZXNzYWdlLCBjaG9pY2VzKSB7XG4gICAgdGhpcy5tZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIiAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGV4dFxuICAgIHRoaXMuYnV0dG9uQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCIgLy8gQ2xlYXIgcHJldmlvdXMgYnV0dG9uc1xuXG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgIHRoaXMuYmx1ckJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiAvLyBTaG93IHRoZSBiYWNrZ3JvdW5kXG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBzY2FsZSBhbmltYXRpb25cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtYnViYmxlLWFjdGl2ZVwiKVxuICAgICAgdGhpcy5ibHVyQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwiYmx1ci1hY3RpdmVcIilcbiAgICB9KVxuXG4gICAgdGhpcy5hbmltYXRlVGV4dChtZXNzYWdlKSAvLyBBbmltYXRlIHRoZSB0ZXh0IGFwcGVhcmFuY2VcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBjaG9pY2UubGFiZWxcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzcGVlY2gtYnViYmxlLWJ1dHRvblwiKVxuICAgICAgICB0aGlzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5oaWRlKClcbiAgICAgICAgICByZXNvbHZlKGNob2ljZS52YWx1ZSkgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSB3aXRoIHRoZSBidXR0b24ncyB2YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gU2hvdyB3aXRoIGlucHV0IGZpZWxkXG4gIC8vIFNob3cgd2l0aCBpbnB1dCBmaWVsZFxuICAvLyBTaG93IHdpdGggbXVsdGlsaW5lIGlucHV0IGZpZWxkXG4gIGFzeW5jIHNob3dXaXRoSW5wdXQobWVzc2FnZSwgcGxhY2Vob2xkZXIgPSBcIlwiKSB7XG4gICAgdGhpcy5tZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIiAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGV4dFxuICAgIHRoaXMuYnV0dG9uQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCIgLy8gQ2xlYXIgcHJldmlvdXMgYnV0dG9uc1xuXG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNwZWVjaC1idWJibGUtaW5wdXQtY29udGFpbmVyXCIpXG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKVxuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKFwic3BlZWNoLWJ1YmJsZS10ZXh0YXJlYVwiKVxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhKVxuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNwZWVjaC1idWJibGUtYnV0dG9uXCIpXG4gICAgLy9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlIC8vIEluaXRpYWxseSBkaXNhYmxlIHRoZSBidXR0b25cbiAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pXG5cbiAgICB0aGlzLmJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcilcblxuICAgIHRoaXMud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICB0aGlzLmJsdXJCYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIgLy8gU2hvdyB0aGUgYmFja2dyb3VuZFxuXG4gICAgLy8gVHJpZ2dlciB0aGUgc2NhbGUgYW5pbWF0aW9uXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwic3BlZWNoLWJ1YmJsZS1hY3RpdmVcIilcbiAgICAgIHRoaXMuYmx1ckJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcImJsdXItYWN0aXZlXCIpXG4gICAgfSlcblxuICAgIGF3YWl0IHRoaXMuYW5pbWF0ZVRleHQobWVzc2FnZSkgLy8gQW5pbWF0ZSB0aGUgdGV4dCBhcHBlYXJhbmNlXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCByZXNvbHZlZCA9IGZhbHNlIC8vIEZsYWcgdG8gZW5zdXJlIHJlc29sdmUgaXMgY2FsbGVkIG9ubHkgb25jZVxuXG4gICAgICBjb25zdCB2YWxpZGF0ZUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VySW5wdXQgPSB0ZXh0YXJlYS52YWx1ZS50cmltKClcbiAgICAgICAgLy9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB1c2VySW5wdXQgPT09IFwiXCIgLy8gRGlzYWJsZSBidXR0b24gaWYgaW5wdXQgaXMgZW1wdHlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3VibWl0SW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IHRleHRhcmVhLnZhbHVlLnRyaW0oKVxuICAgICAgICBpZiAodXNlcklucHV0ICYmICFyZXNvbHZlZCkge1xuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZSAvLyBQcmV2ZW50IG11bHRpcGxlIHJlc29sdmVzXG4gICAgICAgICAgYXdhaXQgdGhpcy5oaWRlKClcbiAgICAgICAgICByZXNvbHZlKHVzZXJJbnB1dCkgLy8gUmVzb2x2ZSB3aXRoIHRoZSBpbnB1dCB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpIC8vIEFkZCBhbiBpbnZhbGlkIGNsYXNzIGZvciB2aXN1YWwgZmVlZGJhY2tcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlXG4gICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdmFsaWRhdGVJbnB1dClcblxuICAgICAgLy8gSGFuZGxlIGJ1dHRvbiBjbGlja1xuICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRJbnB1dClcblxuICAgICAgLy8gSGFuZGxlIHByZXNzaW5nIEVudGVyIGtleVxuICAgICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gUHJldmVudCBuZXdsaW5lIGluIHRoZSB0ZXh0YXJlYVxuICAgICAgICAgIHN1Ym1pdElucHV0KClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc29sZS5sb2coXCJXYWl0aW5nIGZvciB1c2VyIGlucHV0Li4uXCIpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGFuaW1hdGVUZXh0KG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50QW5pbWF0aW9uKSB7XG4gICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYW5pbWF0aW9uXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24uY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvblN0YXRlID0geyBjYW5jZWxsZWQ6IGZhbHNlIH1cbiAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBhbmltYXRpb25TdGF0ZVxuXG4gICAgdGhpcy5tZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIiAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGV4dFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uU3RhdGUuY2FuY2VsbGVkKSB7XG4gICAgICAgIC8vIFN0b3AgdGhlIGFuaW1hdGlvbiBpZiBpdCdzIGNhbmNlbGxlZFxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5tZXNzYWdlQ29udGFpbmVyLnRleHRDb250ZW50ICs9IG1lc3NhZ2VbaV1cbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwKSkgLy8gRGVsYXkgZm9yIGVhY2ggY2hhcmFjdGVyXG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIGFuaW1hdGlvbiBzdGF0ZSBvbmNlIGNvbXBsZXRlZFxuICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb24gPT09IGFuaW1hdGlvblN0YXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKSAvLyBSZW1vdmUgdGhlIERPTSBlbGVtZW50XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGlkZSgpIHtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcInNwZWVjaC1idWJibGUtYWN0aXZlXCIpXG4gICAgdGhpcy5ibHVyQmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1hY3RpdmVcIilcblxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpIC8vIFdhaXQgZm9yIHRoZSBhbmltYXRpb24gdG8gY29tcGxldGVcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH1cblxuICBpbmplY3RTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIilcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5zcGVlY2gtYnViYmxlLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMTIwJTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgIH1cblxuICAgICAgLnNwZWVjaC1idWJibGUtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cblxuICAgICAgLnNwZWVjaC1idWJibGUtYmx1ci1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01MHB4O1xuICAgICAgICBsZWZ0OiAtNTBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgIGZpbHRlcjogYmx1cigxNXB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmJsdXItYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIC5zcGVlY2gtYnViYmxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMEYyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDI0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC5zcGVlY2gtYnViYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICNFRkYwRjI7XG4gICAgICB9XG5cbiAgICAgIC5zcGVlY2gtYnViYmxlLW1lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIC5zcGVlY2gtYnViYmxlLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuc3BlZWNoLWJ1YmJsZS1pbnB1dC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAuc3BlZWNoLWJ1YmJsZS10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MHB4OyAvKiBTZXQgdGhlIGhlaWdodCBmb3IgbXVsdGlsaW5lIGlucHV0ICovXG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI0VGRjBGMjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIEFsbG93IHJlc2l6aW5nIHZlcnRpY2FsbHkgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0cmVzaXplOiBub25lIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcblx0cGFkZGluZzogMTJweCAxOHB4O1xufVxuXG4uc3BlZWNoLWJ1YmJsZS10ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI0Q5RkZCMDsgLyogSGlnaGxpZ2h0IGJvcmRlciBvbiBmb2N1cyAqL1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQge1xuXHRcdGJvcmRlci1jb2xvcjogI0U3MjA3MDtcbn1cblxuICAgICAgLnNwZWVjaC1idWJibGUtYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJGRkNDO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIC5zcGVlY2gtYnViYmxlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgICB9XG5cbiAgICAgIC5zcGVlY2gtYnViYmxlLWJ1dHRvbjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgICAgfVxuICAgIGBcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBhbmFseXplQWxsVGV4dCB9IGZyb20gXCIuL2FuYWx5c2lzLmpzXCJcblxubGV0IGFuYWx5emVkRWxlbWVudHMgPSBuZXcgU2V0KCkgLy8gVHJhY2sgYW5hbHl6ZWQgZWxlbWVudHNcblxuLy8gRnVuY3Rpb24gdG8gcmVxdWVzdCBhIGdyZWV0aW5nIGZyb20gdGhlIGJhY2tncm91bmQgc2NyaXB0XG5jb25zdCByZXF1ZXN0R3JlZXRpbmcgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJHRU5FUkFURV9HUkVFVElOR1wiIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBncmVldGluZzpcIiwgcmVzcG9uc2UuZ3JlZXRpbmcpXG4gICAgICByZXNvbHZlKHsgZ3JlZXRpbmc6IHJlc3BvbnNlLmdyZWV0aW5nLCByZWFkeTogcmVzcG9uc2UucmVhZHkgfSlcbiAgICB9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5pdEFkdmVudHVyZSA9IGFzeW5jIChjaGFyYWN0ZXIpID0+IHtcbiAgY2hhcmFjdGVyLnNob3dJbkNvcm5lcigpXG5cbiAgLy8gUmVxdWVzdCBhIGdyZWV0aW5nIGZyb20gdGhlIGJhY2tncm91bmQgc2NyaXB0XG4gIGNvbnN0IGdyZWV0aW5nID0gYXdhaXQgcmVxdWVzdEdyZWV0aW5nKClcblxuICAvLyBBZGQgdGhlIGZsb2F0aW5nIGNoYXJhY3RlciB0byB0aGUgdG9wIHJpZ2h0IG9mIHRoZSBwYWdlXG5cbiAgY29uc29sZS5sb2coZ3JlZXRpbmcpXG5cbiAgaWYgKCFncmVldGluZy5yZWFkeSkge1xuICAgIGNoYXJhY3Rlci5zcGVhayhncmVldGluZy5ncmVldGluZylcbiAgfSBlbHNlIHtcbiAgICAvLyBTaG93IGFkdmVudHVyZSBvcHRpb25zXG4gICAgY29uc3QgY2hvaWNlID0gYXdhaXQgY2hhcmFjdGVyLnNob3dXaXRoQ2hvaWNlcyhncmVldGluZy5ncmVldGluZywgW1xuICAgICAgeyBsYWJlbDogXCJSb2FtIGZyZWVcIiwgdmFsdWU6IFwiZXhwbG9yZVwiIH0sXG4gICAgICB7IGxhYmVsOiBcIkkgaGF2ZSBhIHF1ZXN0IGZvciB5b3UhXCIsIHZhbHVlOiBcInF1ZXN0XCIgfVxuICAgIF0pXG5cbiAgICBpZiAoY2hvaWNlID09PSBcInF1ZXN0XCIpIHtcbiAgICAgIGNvbnN0IHF1ZXN0ID0gYXdhaXQgY2hhcmFjdGVyLnNob3dXaXRoSW5wdXQoXG4gICAgICAgIFwiV2hhdOKAmXMgdG9kYXkncyBxdWVzdD9cIixcbiAgICAgICAgXCJFLmcuIEhlbHAgbWUgZmluZCB1cGxpZnRpbmcgY29uY2VwdHMgdG8gbWFrZSBtZSBmZWVsIGJldHRlclwiXG4gICAgICApXG5cbiAgICAgIC8vIFNhdmUgdGhlIHF1ZXN0IGluIGNocm9tZSBzdG9yYWdlXG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IHF1ZXN0OiBxdWVzdCB9KVxuICAgICAgY2hhcmFjdGVyLnJlYWR5KClcbiAgICAgIGFuYWx5emVBbGxUZXh0KGNoYXJhY3RlciwgYW5hbHl6ZWRFbGVtZW50cylcbiAgICB9IGVsc2Uge1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBxdWVzdDogXCJsZWFybiBzb21ldGhpbmcgbmV3XCIgfSlcbiAgICAgIGNoYXJhY3Rlci5yZWFkeSgpXG4gICAgICBhbmFseXplQWxsVGV4dChjaGFyYWN0ZXIsIGFuYWx5emVkRWxlbWVudHMpXG4gICAgfVxuXG4gICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pXG5cbiAgICBjb25zb2xlLmxvZyhcIlVzZXIgc2VsZWN0ZWQ6XCIsIGNob2ljZSlcbiAgICBjb25zb2xlLmxvZyhcIkNoYXJhY3RlciBpbml0aWFsaXplZCBhbmQgYW5hbHlzaXMgc3RhcnRlZFwiKVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYW5hbHl6ZUFsbFRleHQgPSBhc3luYyAoY2hhcmFjdGVyLCBhbmFseXplZEVsZW1lbnRzKSA9PiB7XG4gIGxldCBpc0NhbmNlbGVkID0gZmFsc2UgLy8gRmxhZyB0byBjYW5jZWwgY3VycmVudCBwcm9jZXNzaW5nXG5cbiAgLy8gR2V0IGFsbCBlbGVtZW50cyB0byBhbmFseXplXG4gIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZW50cnktY29udGVudCBwLCAuZW50cnktY29udGVudCBzcGFuLCAuZW50cnktY29udGVudCBsaVwiXG4gICAgKVxuICApLmZpbHRlcigoZWwpID0+IHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gZWwuaW5uZXJUZXh0LnRyaW0oKVxuICAgIHJldHVybiAoXG4gICAgICAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5hbHl6ZWQtdGV4dFwiKSAmJiAvLyBTa2lwIGFscmVhZHktYW5hbHl6ZWQgZWxlbWVudHNcbiAgICAgICFhbmFseXplZEVsZW1lbnRzLmhhcyhpZGVudGlmaWVyKSAvLyBTa2lwIGFscmVhZHktdHJhY2tlZCBlbGVtZW50c1xuICAgIClcbiAgfSlcblxuICBjb25zdCByZXNldENhbmNlbGxhdGlvbiA9ICgpID0+IHtcbiAgICBpc0NhbmNlbGVkID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGlzVmlzaWJsZUluVmlld3BvcnQgPSAoZWwpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9XG4gICAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApXG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgaWRlbnRpZmllciA9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuXG4gICAgLy8gU2tpcCBhbHJlYWR5LWFuYWx5emVkIGVsZW1lbnRzXG4gICAgaWYgKFxuICAgICAgYW5hbHl6ZWRFbGVtZW50cy5oYXMoaWRlbnRpZmllcikgfHxcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5hbHl6ZWQtdGV4dFwiKVxuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyBXYWl0IHVudGlsIHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XG4gICAgd2hpbGUgKCFpc1Zpc2libGVJblZpZXdwb3J0KGVsZW1lbnQpKSB7XG4gICAgICBpZiAoIWlzQ2FuY2VsZWQpIHtcbiAgICAgICAgY2hhcmFjdGVyLnVwZGF0ZU1vb2QoXCJ3YWl0aW5nXCIpXG4gICAgICB9XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKSAvLyBDaGVjayBldmVyeSAxMDBtc1xuICAgIH1cbiAgICBpZiAoIWlzQ2FuY2VsZWQpIHtcbiAgICAgIGNoYXJhY3Rlci51cGRhdGVNb29kKFwibmV1dHJhbFwiKVxuICAgIH1cblxuICAgIC8vIENhbmNlbCB0aGUgY3VycmVudCBhbmFseXNpcyBpZiByZXF1aXJlZFxuICAgIGlmIChpc0NhbmNlbGVkKSB7XG4gICAgICBpLS0gLy8gUmV0cnkgdGhlIGN1cnJlbnQgcGFyYWdyYXBoIG9uIHJlc3VtcHRpb25cbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpIC8vIFdhaXQgYnJpZWZseSBiZWZvcmUgcmVzdW1pbmdcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gTW92ZSB0aGUgY2hhcmFjdGVyIHRvIHRoZSBlbGVtZW50XG4gICAgYXdhaXQgY2hhcmFjdGVyLm1vdmVUb0VsZW1lbnQoZWxlbWVudClcblxuICAgIC8vIEhpZ2hsaWdodCB0aGUgY3VycmVudCBlbGVtZW50IHdpdGggYSBkYXNoZWQgYm9yZGVyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudGx5LWFuYWx5emluZ1wiKVxuICAgIGVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwiMnB4IGRhc2hlZCAjQ0RDRENEXCJcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiXG4gICAgZWxlbWVudC5zdHlsZS5vdXRsaW5lT2Zmc2V0ID0gXCI0cHhcIlxuICAgIGVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCJcbiAgICBpZiAoaXNDYW5jZWxlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJNb3ZlbWVudCBjYW5jZWxlZCBkdWUgdG8gaGlnaGxpZ2h0IGludGVyYWN0aW9uXCIpXG4gICAgICByZW1vdmVIaWdobGlnaHQoZWxlbWVudClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgIGlmICghdGV4dCkge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0KGVsZW1lbnQpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIENvbWJpbmVkIGFuYWx5c2lzIGZvciBtb29kIGFuZCBub3Rld29ydGh5IHRleHRcbiAgICBjb25zdCBhbmFseXNpc1Jlc3VsdCA9IGF3YWl0IGFuYWx5emVUZXh0Q29tYmluZWQodGV4dClcbiAgICBpZiAoaXNDYW5jZWxlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJBbmFseXNpcyBjYW5jZWxlZCBkdWUgdG8gaGlnaGxpZ2h0IGludGVyYWN0aW9uXCIpXG4gICAgICByZW1vdmVIaWdobGlnaHQoZWxlbWVudClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gTWFyayB0aGUgZWxlbWVudCBhcyBhbmFseXplZCB2aXN1YWxseSBhbmQgaW4gdGhlIHNldFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFuYWx5emVkLXRleHRcIilcbiAgICBhbmFseXplZEVsZW1lbnRzLmFkZChpZGVudGlmaWVyKVxuXG4gICAgLy8gVXBkYXRlIHRoZSBjaGFyYWN0ZXIgbW9vZFxuICAgIGNvbnN0IHsgbW9vZCwgaW50ZXJlc3RpbmcsIGV4cGxhbmF0aW9uIH0gPSBhbmFseXNpc1Jlc3VsdFxuICAgIGlmIChpc0NhbmNlbGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1vb2QgdXBkYXRlIGNhbmNlbGVkIGR1ZSB0byBoaWdobGlnaHQgaW50ZXJhY3Rpb25cIilcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNoYXJhY3Rlci51cGRhdGVNb29kKG1vb2QsIGZhbHNlLCBtb29kICE9PSBcIm5ldXRyYWxcIilcblxuICAgIC8vIElmIHRoZXJlJ3Mgbm90ZXdvcnRoeSB0ZXh0LCBoaWdobGlnaHQgaXRcbiAgICBpZiAoaW50ZXJlc3RpbmcgJiYgZXhwbGFuYXRpb24pIHtcbiAgICAgIGhhbmRsZUhpZ2hsaWdodEludGVyYWN0aW9uKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBpbnRlcmVzdGluZyxcbiAgICAgICAgZXhwbGFuYXRpb24sXG4gICAgICAgIG1vb2QsXG4gICAgICAgIGNoYXJhY3RlcixcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlzQ2FuY2VsZWQgPSB0cnVlIC8vIFRyaWdnZXIgY2FuY2VsbGF0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICByZXNldENhbmNlbGxhdGlvbigpIC8vIFJlc3VtZSBwcm9jZXNzaW5nXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBXYWl0IGZvciAyIHNlY29uZHMgYmVmb3JlIG1vdmluZyB0byB0aGUgbmV4dCBlbGVtZW50XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXG4gICAgcmVtb3ZlSGlnaGxpZ2h0KGVsZW1lbnQpXG4gICAgaWYgKGlzQ2FuY2VsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2FpdCBpbnRlcnJ1cHRlZCBkdWUgdG8gaGlnaGxpZ2h0IGludGVyYWN0aW9uXCIpXG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgYSBjb25jbHVzaW9uIG9uY2UgdGhlIGxhc3QgZWxlbWVudCBpcyBhbmFseXplZFxuICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUubG9nKFwiQW5hbHlzaXMgY29tcGxldGUuIEdlbmVyYXRpbmcgY29uY2x1c2lvbi4uLlwiKVxuXG4gICAgLy8gQ2FsbCB0aGUgYmFja2dyb3VuZCBzY3JpcHQgdG8gZ2VuZXJhdGUgdGhlIGNvbmNsdXNpb25cbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJHRU5FUkFURV9DT05DTFVTSU9OXCJcbiAgICAgIH0sXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlYWR5KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJDb25jbHVzaW9uIGdlbmVyYXRlZDpcIiwgcmVzcG9uc2UuY29uY2x1c2lvbilcbiAgICAgICAgICBjaGFyYWN0ZXIudXBkYXRlTW9vZChcIm5ldXRyYWxcIiwgdHJ1ZSlcbiAgICAgICAgICBjaGFyYWN0ZXIuc3BlYWsocmVzcG9uc2UuY29uY2x1c2lvbiwgXCJUaGFua3MgZm9yIHlvdXIgaGVscCFcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyBjb25jbHVzaW9uOlwiLCByZXNwb25zZS5jb25jbHVzaW9uKVxuICAgICAgICAgIGNoYXJhY3Rlci51cGRhdGVNb29kKFwibmV1dHJhbFwiLCB0cnVlKVxuICAgICAgICAgIGNoYXJhY3Rlci5zcGVhayhcbiAgICAgICAgICAgIFwiT29wcywgSSBjb3VsZG4ndCB3cmFwIHVwIHRoZSBhZHZlbnR1cmUgdGhpcyB0aW1lLiBMZXQncyB0cnkgYWdhaW4gbGF0ZXIhXCIsXG4gICAgICAgICAgICBcIlRoYW5rcyBmb3IgeW91ciBoZWxwIVwiXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG59XG5cbi8vIFJlbW92ZSB0aGUgaGlnaGxpZ2h0IGZyb20gdGhlIGVsZW1lbnRcbmNvbnN0IHJlbW92ZUhpZ2hsaWdodCA9IChlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwiXCJcbiAgZWxlbWVudC5zdHlsZS5vdXRsaW5lT2Zmc2V0ID0gXCJcIlxufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGNvbWJpbmVkIGFuYWx5c2lzXG5jb25zdCBhbmFseXplVGV4dENvbWJpbmVkID0gYXN5bmMgKHRleHQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogXCJBTkFMWVpFX1RFWFRcIiwgdGV4dCB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgbW9vZDogcmVzcG9uc2U/Lm1vb2QgfHwgXCJuZXV0cmFsXCIsXG4gICAgICAgICAgaW50ZXJlc3Rpbmc6IHJlc3BvbnNlPy5pbnRlcmVzdGluZyB8fCBudWxsLFxuICAgICAgICAgIGV4cGxhbmF0aW9uOiByZXNwb25zZT8uZXhwbGFuYXRpb24gfHwgbnVsbFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4geyBtb29kOiBcIm5ldXRyYWxcIiwgaW50ZXJlc3Rpbmc6IG51bGwsIGV4cGxhbmF0aW9uOiBudWxsIH0gLy8gRGVmYXVsdCB0byBuZXV0cmFsIGlmIGFuIGVycm9yIG9jY3Vyc1xuICB9XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBoYW5kbGUgaGlnaGxpZ2h0IGludGVyYWN0aW9uXG5jb25zdCBoYW5kbGVIaWdobGlnaHRJbnRlcmFjdGlvbiA9IChcbiAgZWxlbWVudCxcbiAgdGV4dFRvSGlnaGxpZ2h0LFxuICBleHBsYW5hdGlvbixcbiAgbW9vZCxcbiAgY2hhcmFjdGVyLFxuICBvblBhdXNlLFxuICBvblJlc3VtZVxuKSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFRleHQgPSB0ZXh0VG9IaWdobGlnaHQucmVwbGFjZSgvWy9cXFxcJ1wiXCJdL2csIFwiXCIpIC8vIFJlbW92ZSBzcGVjaWZpYyBjaGFyYWN0ZXJzXG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7c2FuaXRpemVkVGV4dC5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIil9KWAsXG4gICAgXCJpXCIgLy8gT25seSBtYXRjaCB0aGUgZmlyc3QgaW5zdGFuY2VcbiAgKVxuICBlbGVtZW50LmlubmVySFRNTCA9IGVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoXG4gICAgcmVnZXgsXG4gICAgYDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0ZWQtdGV4dFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93OyBjdXJzb3I6IHBvaW50ZXI7XCI+JDE8L3NwYW4+YFxuICApXG5cbiAgY29uc3QgaGlnaGxpZ2h0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2hsaWdodGVkLXRleHRcIilcblxuICAvLyBDaGVjayBpZiB0aGUgaGlnaGxpZ2h0IGV4aXN0c1xuICBpZiAoIWhpZ2hsaWdodCkgcmV0dXJuXG5cbiAgaGlnaGxpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgb25QYXVzZSgpIC8vIFBhdXNlIHByb2Nlc3NpbmdcbiAgICBhd2FpdCBjaGFyYWN0ZXIubW92ZVRvRWxlbWVudChoaWdobGlnaHQpXG4gICAgY2hhcmFjdGVyLnVwZGF0ZU1vb2QobW9vZCwgdHJ1ZSkgLy8gVXBkYXRlIHRoZSBjaGFyYWN0ZXIgbW9vZFxuICAgIGF3YWl0IGNoYXJhY3Rlci5zcGVhayhleHBsYW5hdGlvbiwgXCJHcmVhdCBmaW5kIVwiKSAvLyBXYWl0IGZvciB0aGUgY2hhcmFjdGVyIHRvIGZpbmlzaCBzcGVha2luZ1xuICAgIGNoYXJhY3Rlci51cGRhdGVNb29kKFwibmV1dHJhbFwiKSAvLyBSZXNldCB0aGUgY2hhcmFjdGVyIG1vb2RcbiAgICBvblJlc3VtZSgpIC8vIFJlc3VtZSBwcm9jZXNzaW5nXG4gIH0pXG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC44Yzg3OWY2Zi5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);