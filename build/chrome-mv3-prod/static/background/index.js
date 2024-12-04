var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,n,o,a,i){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof r[a]&&r[a],l=s.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(e,n){if(!l[e]){if(!t[e]){var o="function"==typeof r[a]&&r[a];if(!n&&o)return o(e,!0);if(s)return s(e,!0);if(u&&"string"==typeof e)return u(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}g.resolve=function(n){var o=t[e][1][n];return null!=o?o:n},g.cache={};var c=l[e]=new d.Module(e);t[e][0].call(c.exports,g,c,c.exports,this)}return l[e].exports;function g(e){var t=g.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=t,d.cache=l,d.parent=s,d.register=function(e,n){t[e]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return r[a]}}),r[a]=d;for(var c=0;c<n.length;c++)d(n[c]);if(o){var g=d(o);"object"==typeof exports&&"undefined"!=typeof module?module.exports=g:"function"==typeof e&&e.amd?e(function(){return g}):i&&(this[i]=g)}}({kgW6q:[function(e,t,n){e("../../../background")},{"../../../background":"dHFmR"}],dHFmR:[function(e,t,n){let o=null,a=null,i=null;async function r(e,t){let n=JSON.stringify(e.text||"").trim();if(!n){t({mood:"neutral",interesting:null,explanation:null});return}let r=await chrome.aiOriginTrial.languageModel.capabilities();if("readily"!==r.available){console.error("Language model is not available."),t({mood:"neutral",interesting:null,explanation:null});return}let s=await u();o&&s===a||await d(s),i&&i.abort(),i=new AbortController;let l=await o.clone({signal:i.signal});try{let e=await l.prompt(`Text: ${n}
Quest: ${s}`);console.log(e);let o=function(e){let t;try{t=JSON.parse(e)}catch{t={mood:"neutral",interesting:null,explanation:null}}return["funny","happy","love","sad","scared","surprised","neutral"].includes(t.mood)||(t.mood="neutral"),t}(e);await g(o),t(o)}catch(e){console.error("Error during analysis:",e),t({mood:"neutral",interesting:null,explanation:null})}}async function s(e){chrome.storage.sync.set({moods:[],excerpts:[]});let t=await chrome.aiOriginTrial.languageModel.capabilities();if("readily"!==t.available){console.warn("Language model capabilities are not available."),e({greeting:"Oh no, looks like the language model is not available! Make sure to follow the instructions carefully.",ready:!1});return}let n=await chrome.aiOriginTrial.languageModel.create({systemPrompt:`
You are a cute, quirky, and curious teenager with boundless excitement and childlike wonder. You\u2019ve just been summoned by someone you look up to for an exciting new adventure!
	
	Write a short, friendly, and eager greeting to your new friend. Your message should show your excitement, admiration, and readiness for the adventure, while asking about the goal or objective they have in mind. Keep it short, to one or two sentences.
	Do not use any emojis, slang, or overly casual language. Be polite, respectful, and enthusiastic.
	Do not include the user's name or any personal information.
	
	Examples:
		\u2022 Howdy partner! What's today's quest?
		\u2022 Hey there! What's the plan for today's adventure?
		\u2022 Hiya! What's the mission for today, captain?
    `});try{let t=await n.prompt("Create a greeting message to your new friend.");n.destroy(),e({greeting:t.trim(),ready:!0})}catch(t){console.error("Error generating greeting:",t),e({greeting:"Oh no, something went wrong. Please try again later.",ready:!1})}}async function l(e){let t=await chrome.aiOriginTrial.languageModel.capabilities();if("readily"!==t.available){console.warn("Language model capabilities are not available."),e({conclusion:"The language model is not available. Please check the settings.",ready:!1});return}let n=await u(),{excerpts:o,moods:a}=await c(),i=await chrome.aiOriginTrial.languageModel.create({systemPrompt:`
You are a bright, inquisitive, and curious teenager who has just completed an exciting adventure with your new friend, reading a web article together. You're now wrapping up the adventure and saying goodbye.
	
	Write a short, cheerful, and heartfelt conclusion to the adventure. Your message should:
	- Summarize the key points of the adventure (Excerpts), how they relate to the user's goal (Quest)
	- Reflect on how you felt during the adventure (Moods)
	- Express your gratitude, excitement, and anticipation for the next adventure
	
	Your conclusion must be no more than 3 sentences. Be polite, respectful, and enthusiastic. Do not use any emojis, slang, or overly casual language.
    `});try{let t=await i.prompt(`
Quest: ${n}
Excerpts: ${o.join(", ")}
Moods: ${a.join(", ")}
Wrap up the session with a personalized conclusion.
    `);i.destroy(),e({conclusion:t.trim(),ready:!0})}catch(t){console.error("Error generating conclusion:",t),e({conclusion:"Oh no, something went wrong while generating the conclusion message!",ready:!1})}}async function u(){return new Promise(e=>{chrome.storage.sync.get("quest",t=>{e(t.quest||"learn something new")})})}async function d(e){i&&i.abort(),o=await chrome.aiOriginTrial.languageModel.create({systemPrompt:`
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
    `}),a=e}async function c(){return new Promise(e=>{chrome.storage.sync.get(["excerpts","moods"],t=>{e({excerpts:t.excerpts||[],moods:t.moods||[]})})})}async function g(e){return new Promise(t=>{chrome.storage.sync.get(["moods","excerpts"],n=>{let o=n.moods||[],a=n.excerpts||[];e.mood&&o.push(e.mood),e.interesting&&a.push(e.interesting),chrome.storage.sync.set({moods:o,excerpts:a},t)})})}chrome.action.onClicked.addListener(e=>{e.id&&chrome.tabs.sendMessage(e.id,{type:"INIT_ADVENTURE"})}),chrome.runtime.onMessage.addListener(async(e,t,n)=>{try{switch(e.type){case"ANALYZE_TEXT":await r(e,n);break;case"GENERATE_GREETING":await s(n);break;case"GENERATE_CONCLUSION":await l(n);break;default:console.warn(`Unhandled message type: ${e.type}`)}}catch(t){console.error(`Error handling message type: ${e.type}`,t)}return!0})},{}]},["kgW6q"],"kgW6q","parcelRequire0ab5"),globalThis.define=t;