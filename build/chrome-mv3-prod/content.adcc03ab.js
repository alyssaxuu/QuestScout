var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,n,s,a,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="function"==typeof o[a]&&o[a],l=r.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,n){if(!l[e]){if(!t[e]){var s="function"==typeof o[a]&&o[a];if(!n&&s)return s(e,!0);if(r)return r(e,!0);if(d&&"string"==typeof e)return d(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}p.resolve=function(n){var s=t[e][1][n];return null!=s?s:n},p.cache={};var u=l[e]=new c.Module(e);t[e][0].call(u.exports,p,u,u.exports,this)}return l[e].exports;function p(e){var t=p.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=t,c.cache=l,c.parent=r,c.register=function(e,n){t[e]=[function(e,t){t.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return o[a]}}),o[a]=c;for(var u=0;u<n.length;u++)c(n[u]);if(s){var p=c(s);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof e&&e.amd?e(function(){return p}):i&&(this[i]=p)}}({asLfT:[function(e,t,n){e("71c4f8ae1412947a").register(JSON.parse('{"4v9jK":"content.adcc03ab.js","5r5ZE":"funny-found.2b1f6d4c.svg","8a72c":"funny-reading.bd6a9604.svg","4YjGm":"happy-found.1027214b.svg","XCWgX":"happy-reading.d6039f49.svg","2Hkrb":"love-found.6ea99884.svg","9tTva":"love-reading.1808d740.svg","1srNx":"sad-found.768f8849.svg","hVxwI":"sad-reading.1866b6b4.svg","9hfwo":"scared-found.f300bb18.svg","aF1aG":"scared-reading.91d7a5fc.svg","3jHG2":"surprised-found.a94fee4c.svg","lR5CL":"surprised-reading.62a265c9.svg","iMXss":"vhappy-found.2a337fb1.svg","jHdgv":"vhappy-reading.f32a79ae.svg","1vVNF":"waiting-read.853b3197.svg"}'))},{"71c4f8ae1412947a":"amLA4"}],amLA4:[function(e,t,n){var s={};t.exports.register=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},t.exports.resolve=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}},{}],bnPzj:[function(e,t,n){var s=e("./floatingCharacter.js"),a=e("./initAdventure.js");let i=!1,o=null;chrome.runtime.onMessage.addListener((e,t,n)=>{"INIT_ADVENTURE"===e.type&&(i?window.location.reload():(console.log("Starting analysis..."),i=!0,o=new s.FloatingCharacter,(0,a.initAdventure)(o),n({status:"Character initialized and analysis started"})))})},{"./floatingCharacter.js":"WnRvI","./initAdventure.js":"jWWXu"}],WnRvI:[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"FloatingCharacter",()=>z);var a=e("./assets/funny-found.svg"),i=s.interopDefault(a),o=e("./assets/funny-reading.svg"),r=s.interopDefault(o),l=e("./assets/happy-found.svg"),d=s.interopDefault(l),c=e("./assets/happy-reading.svg"),u=s.interopDefault(c),p=e("./assets/love-found.svg"),f=s.interopDefault(p),h=e("./assets/love-reading.svg"),b=s.interopDefault(h),g=e("./assets/sad-found.svg"),m=s.interopDefault(g),v=e("./assets/sad-reading.svg"),y=s.interopDefault(v),x=e("./assets/scared-found.svg"),w=s.interopDefault(x),L=e("./assets/scared-reading.svg"),j=s.interopDefault(L),C=e("./assets/surprised-found.svg"),E=s.interopDefault(C),T=e("./assets/surprised-reading.svg"),k=s.interopDefault(T),D=e("./assets/vhappy-found.svg"),A=s.interopDefault(D),U=e("./assets/vhappy-reading.svg"),B=s.interopDefault(U),R=e("./assets/waiting-read.svg"),F=s.interopDefault(R),M=e("./speechBubble.js");class z{constructor(){this.element=document.createElement("div"),this.element.id="floating-circle",this.element.style.position="absolute",this.element.style.width="80px",this.element.style.height="80px",this.element.style.borderRadius="50%",this.element.style.zIndex="9999999999999",this.element.style.transformOrigin="center top",this.element.style.top="10px",this.element.style.opacity="0",this.element.style.transform="scale(.5)",this.element.style.transition="transform .5s ease-in-out, opacity .5s ease-in-out",document.body.appendChild(this.element);let e=document.createElement("img");e.src=d.default,e.style.width="100%",e.style.height="100%",e.style.userSelect="none",this.element.appendChild(e),this.avatar=e,this.bubble=new M.SpeechBubble(this),this.moods={funny:{image:r.default,found:i.default},happy:{image:B.default,found:A.default},love:{image:b.default,found:f.default},sad:{image:y.default,found:m.default},scared:{image:j.default,found:w.default},surprised:{image:k.default,found:E.default},neutral:{image:u.default,found:d.default},waiting:{image:F.default,found:F.default}}}async moveToElement(e){let t=e.getBoundingClientRect(),n=window.scrollY||document.documentElement.scrollTop,s=window.scrollX||document.documentElement.scrollLeft;this.element.style.left=`${t.left+t.width+s}px`,this.element.style.top=`${t.top+n-10}px`,await new Promise(e=>setTimeout(e,1e3))}async showInCorner(){setTimeout(()=>{this.element.style.transform="scale(1)",this.element.style.right="350px",this.element.style.top="30px",this.element.style.opacity="1",this.element.style.position="fixed"},100),await new Promise(e=>setTimeout(e,400))}remove(){this.element&&this.element.remove()}updateMood(e,t=!1,n=!1){let s=this.moods[e];if(!s){console.warn(`Mood "${e}" not found.`);return}this.avatar.src=t?s.found:s.image,n&&(this.element.style.transition="transform 0.2s ease-in-out",this.element.style.transform="scale(1.2)",setTimeout(()=>{this.element.style.transform="scale(1)",this.element.style.transition="all 1s ease-in-out"},200))}ready(){this.updateMood("happy",!1),this.element.style.position="absolute",this.element.style.right="auto",this.element.style.left="auto",this.element.style.transition="all 1s ease-in-out"}async speak(e,t="OK"){await this.bubble.show(e,t)}async showWithChoices(e,t){let n=await this.bubble.showWithChoices(e,t);return n}async showWithInput(e,t){let n=await this.bubble.showWithInput(e,t);return n}}},{"./assets/funny-found.svg":"lMHha","./assets/funny-reading.svg":"lYtfZ","./assets/happy-found.svg":"a77QP","./assets/happy-reading.svg":"1IE6h","./assets/love-found.svg":"0FPUG","./assets/love-reading.svg":"gzUS4","./assets/sad-found.svg":"kMnqU","./assets/sad-reading.svg":"jgJE4","./assets/scared-found.svg":"h50jS","./assets/scared-reading.svg":"5hDSn","./assets/surprised-found.svg":"2770g","./assets/surprised-reading.svg":"kD9Dy","./assets/vhappy-found.svg":"fcZvo","./assets/vhappy-reading.svg":"8jsLG","./assets/waiting-read.svg":"hIqsU","./speechBubble.js":"fwyL8","@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],lMHha:[function(e,t,n){t.exports=e("273d29b2c546ccef").getBundleURL("4v9jK")+e("e67e8d2a3e9a7375").resolve("5r5ZE")},{"273d29b2c546ccef":"6haDs",e67e8d2a3e9a7375:"amLA4"}],"6haDs":[function(e,t,n){var s={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n.getBundleURL=function(e){var t=s[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),s[e]=t),t},n.getBaseURL=a,n.getOrigin=function(e){var t=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!t)throw Error("Origin not found");return t[0]}},{}],lYtfZ:[function(e,t,n){t.exports=e("800f78779e16375b").getBundleURL("4v9jK")+e("b81c141811fa78ee").resolve("8a72c")},{"800f78779e16375b":"6haDs",b81c141811fa78ee:"amLA4"}],a77QP:[function(e,t,n){t.exports=e("d5a5710fa9676048").getBundleURL("4v9jK")+e("17e5ddece6258e09").resolve("4YjGm")},{d5a5710fa9676048:"6haDs","17e5ddece6258e09":"amLA4"}],"1IE6h":[function(e,t,n){t.exports=e("85062bfcb93a0d9c").getBundleURL("4v9jK")+e("beccd8fab0633f1c").resolve("XCWgX")},{"85062bfcb93a0d9c":"6haDs",beccd8fab0633f1c:"amLA4"}],"0FPUG":[function(e,t,n){t.exports=e("893d3bc42a2c09e5").getBundleURL("4v9jK")+e("9bc04ab668188bfc").resolve("2Hkrb")},{"893d3bc42a2c09e5":"6haDs","9bc04ab668188bfc":"amLA4"}],gzUS4:[function(e,t,n){t.exports=e("ced67a3203ee3f05").getBundleURL("4v9jK")+e("4d9d2115196a9c5a").resolve("9tTva")},{ced67a3203ee3f05:"6haDs","4d9d2115196a9c5a":"amLA4"}],kMnqU:[function(e,t,n){t.exports=e("b9d4fc0d0515bde4").getBundleURL("4v9jK")+e("ff6e1c66b411f1a8").resolve("1srNx")},{b9d4fc0d0515bde4:"6haDs",ff6e1c66b411f1a8:"amLA4"}],jgJE4:[function(e,t,n){t.exports=e("bc41d4ac92238d87").getBundleURL("4v9jK")+e("8ee8b36c74bfd44a").resolve("hVxwI")},{bc41d4ac92238d87:"6haDs","8ee8b36c74bfd44a":"amLA4"}],h50jS:[function(e,t,n){t.exports=e("7e01c7e4996149b1").getBundleURL("4v9jK")+e("742b9cc88af5fbf1").resolve("9hfwo")},{"7e01c7e4996149b1":"6haDs","742b9cc88af5fbf1":"amLA4"}],"5hDSn":[function(e,t,n){t.exports=e("19783a3c2337f13").getBundleURL("4v9jK")+e("d3ee3e8d8a24b865").resolve("aF1aG")},{"19783a3c2337f13":"6haDs",d3ee3e8d8a24b865:"amLA4"}],"2770g":[function(e,t,n){t.exports=e("43aa37fad75e31ef").getBundleURL("4v9jK")+e("da6e0b0bfbf07af0").resolve("3jHG2")},{"43aa37fad75e31ef":"6haDs",da6e0b0bfbf07af0:"amLA4"}],kD9Dy:[function(e,t,n){t.exports=e("e7ea76ed4741d905").getBundleURL("4v9jK")+e("5d6dabbcc79d02f4").resolve("lR5CL")},{e7ea76ed4741d905:"6haDs","5d6dabbcc79d02f4":"amLA4"}],fcZvo:[function(e,t,n){t.exports=e("5e0ec420523ecdeb").getBundleURL("4v9jK")+e("84b39ad4a538541e").resolve("iMXss")},{"5e0ec420523ecdeb":"6haDs","84b39ad4a538541e":"amLA4"}],"8jsLG":[function(e,t,n){t.exports=e("9e23bf53fafc7768").getBundleURL("4v9jK")+e("3ce0aa259f7fdf4e").resolve("jHdgv")},{"9e23bf53fafc7768":"6haDs","3ce0aa259f7fdf4e":"amLA4"}],hIqsU:[function(e,t,n){t.exports=e("429a22f982a7ec0f").getBundleURL("4v9jK")+e("4fdad0694f42d319").resolve("1vVNF")},{"429a22f982a7ec0f":"6haDs","4fdad0694f42d319":"amLA4"}],fwyL8:[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"SpeechBubble",()=>a);class a{constructor(e){this.character=e,this.wrapper=document.createElement("div"),this.wrapper.classList.add("speech-bubble-wrapper"),this.character.element.appendChild(this.wrapper),this.blurBackground=document.createElement("div"),this.blurBackground.classList.add("speech-bubble-blur-background"),this.wrapper.appendChild(this.blurBackground),this.element=document.createElement("div"),this.element.id="speech-bubble",this.element.classList.add("speech-bubble"),this.wrapper.appendChild(this.element),this.messageContainer=document.createElement("div"),this.messageContainer.classList.add("speech-bubble-message"),this.element.appendChild(this.messageContainer),this.buttonContainer=document.createElement("div"),this.buttonContainer.classList.add("speech-bubble-buttons"),this.wrapper.appendChild(this.buttonContainer),this.injectStyles()}async show(e,t="OK"){this.messageContainer.textContent="",this.buttonContainer.innerHTML="";let n=document.createElement("button");return n.textContent=t,n.classList.add("speech-bubble-button"),this.buttonContainer.appendChild(n),this.wrapper.style.display="flex",this.blurBackground.style.display="block",requestAnimationFrame(()=>{this.wrapper.classList.add("speech-bubble-active"),this.blurBackground.classList.add("blur-active")}),await this.animateText(e),new Promise(e=>{n.addEventListener("click",async()=>{await this.hide(),e()})})}async showWithChoices(e,t){return this.messageContainer.textContent="",this.buttonContainer.innerHTML="",this.wrapper.style.display="flex",this.blurBackground.style.display="block",requestAnimationFrame(()=>{this.wrapper.classList.add("speech-bubble-active"),this.blurBackground.classList.add("blur-active")}),this.animateText(e),new Promise(e=>{t.forEach(t=>{let n=document.createElement("button");n.textContent=t.label,n.classList.add("speech-bubble-button"),this.buttonContainer.appendChild(n),n.addEventListener("click",async()=>{await this.hide(),e(t.value)})})})}async showWithInput(e,t=""){this.messageContainer.textContent="",this.buttonContainer.innerHTML="";let n=document.createElement("div");n.classList.add("speech-bubble-input-container");let s=document.createElement("textarea");s.placeholder=t,s.classList.add("speech-bubble-textarea"),n.appendChild(s);let a=document.createElement("button");return a.textContent="Submit",a.classList.add("speech-bubble-button"),n.appendChild(a),this.buttonContainer.appendChild(n),this.wrapper.style.display="flex",this.blurBackground.style.display="block",requestAnimationFrame(()=>{this.wrapper.classList.add("speech-bubble-active"),this.blurBackground.classList.add("blur-active")}),await this.animateText(e),new Promise(e=>{let t=!1,n=async()=>{let n=s.value.trim();n&&!t?(t=!0,await this.hide(),e(n)):s.classList.add("invalid")};s.addEventListener("input",()=>{s.value.trim()}),a.addEventListener("click",n),s.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),n())}),console.log("Waiting for user input...")})}async animateText(e){this.currentAnimation&&(this.currentAnimation.cancelled=!0);let t={cancelled:!1};this.currentAnimation=t,this.messageContainer.textContent="";for(let n=0;n<e.length;n++){if(t.cancelled)return;this.messageContainer.textContent+=e[n],await new Promise(e=>setTimeout(e,20))}this.currentAnimation===t&&(this.currentAnimation=null)}remove(){this.element&&this.element.remove()}async hide(){this.wrapper.classList.remove("speech-bubble-active"),this.blurBackground.classList.remove("blur-active"),await new Promise(e=>setTimeout(e,300)),this.wrapper.style.display="none"}injectStyles(){let e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],jWWXu:[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"initAdventure",()=>r);var a=e("./analysis.js");let i=new Set,o=async()=>new Promise(e=>{chrome.runtime.sendMessage({type:"GENERATE_GREETING"},t=>{console.log("Received greeting:",t.greeting),e({greeting:t.greeting,ready:t.ready})})}),r=async e=>{e.showInCorner();let t=await o();if(console.log(t),t.ready){let n=await e.showWithChoices(t.greeting,[{label:"Roam free",value:"explore"},{label:"I have a quest for you!",value:"quest"}]);if("quest"===n){let t=await e.showWithInput("What\u2019s today's quest?","E.g. Help me find uplifting concepts to make me feel better");chrome.storage.sync.set({quest:t}),e.ready(),(0,a.analyzeAllText)(e,i)}else chrome.storage.sync.set({quest:"learn something new"}),e.ready(),(0,a.analyzeAllText)(e,i);window.scrollTo({top:0,behavior:"smooth"}),console.log("User selected:",n),console.log("Character initialized and analysis started")}else e.speak(t.greeting)}},{"./analysis.js":"ezHT0","@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],ezHT0:[function(e,t,n){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(n),s.export(n,"analyzeAllText",()=>a);let a=async(e,t)=>{let n=!1,s=Array.from(document.querySelectorAll(".entry-content p, .entry-content span, .entry-content li")).filter(e=>{let n=e.innerText.trim();return!e.classList.contains("analyzed-text")&&!t.has(n)}),a=()=>{n=!1},l=e=>{let t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)};for(let d=0;d<s.length;d++){let c=s[d],u=c.innerText.trim();if(t.has(u)||c.classList.contains("analyzed-text"))continue;for(;!l(c);)n||e.updateMood("waiting"),await new Promise(e=>setTimeout(e,100));if(n||e.updateMood("neutral"),n){d--,await new Promise(e=>setTimeout(e,100));continue}if(await e.moveToElement(c),c.classList.add("currently-analyzing"),c.style.outline="2px dashed #CDCDCD",c.style.borderRadius="15px",c.style.outlineOffset="4px",c.style.boxSizing="border-box",n){console.log("Movement canceled due to highlight interaction"),i(c);continue}let p=c.innerText.trim();if(!p){i(c);continue}let f=await o(p);if(n){console.log("Analysis canceled due to highlight interaction"),i(c);continue}c.classList.add("analyzed-text"),t.add(u);let{mood:h,interesting:b,explanation:g}=f;if(n){console.log("Mood update canceled due to highlight interaction");continue}e.updateMood(h,!1,"neutral"!==h),b&&g&&r(c,b,g,h,e,()=>{n=!0},async()=>{a()}),await new Promise(e=>setTimeout(e,1e3)),i(c),n&&console.log("Wait interrupted due to highlight interaction")}s.length>0&&(console.log("Analysis complete. Generating conclusion..."),chrome.runtime.sendMessage({type:"GENERATE_CONCLUSION"},t=>{t&&t.ready?(console.log("Conclusion generated:",t.conclusion),e.updateMood("neutral",!0),e.speak(t.conclusion,"Thanks for your help!")):(console.error("Error generating conclusion:",t.conclusion),e.updateMood("neutral",!0),e.speak("Oops, I couldn't wrap up the adventure this time. Let's try again later!","Thanks for your help!"))}))},i=e=>{e.style.outline="",e.style.outlineOffset=""},o=async e=>{try{return await new Promise(t=>{chrome.runtime.sendMessage({type:"ANALYZE_TEXT",text:e},e=>{t({mood:e?.mood||"neutral",interesting:e?.interesting||null,explanation:e?.explanation||null})})})}catch{return{mood:"neutral",interesting:null,explanation:null}}},r=(e,t,n,s,a,i,o)=>{let r=t.replace(/[/\\'""]/g,""),l=RegExp(`(${r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"i");e.innerHTML=e.innerHTML.replace(l,'<span class="highlighted-text" style="background-color: yellow; cursor: pointer;">$1</span>');let d=e.querySelector(".highlighted-text");d&&d.addEventListener("click",async()=>{i(),await a.moveToElement(d),a.updateMood(s,!0),await a.speak(n,"Great find!"),a.updateMood("neutral"),o()})}},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}]},["asLfT","bnPzj"],"bnPzj","parcelRequire0ab5"),globalThis.define=t;