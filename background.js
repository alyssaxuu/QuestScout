let analysisSession = null // Main session for text analysis
let currentQuest = null // Tracks the current quest
let currentAbortController = null // Tracks the AbortController for analysis sessions

chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: "INIT_ADVENTURE" })
  }
})

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  try {
    switch (message.type) {
      case "ANALYZE_TEXT":
        await handleAnalyzeText(message, sendResponse)
        break

      case "GENERATE_GREETING":
        await handleGenerateGreeting(sendResponse)
        break

      case "GENERATE_CONCLUSION":
        await handleGenerateConclusion(sendResponse)
        break

      default:
        console.warn(`Unhandled message type: ${message.type}`)
    }
  } catch (error) {
    console.error(`Error handling message type: ${message.type}`, error)
  }
  return true // Keep the message channel open for async responses
})

async function handleAnalyzeText(message, sendResponse) {
  const textChunk = JSON.stringify(message.text || "").trim()
  if (!textChunk) {
    sendResponse({ mood: "neutral", interesting: null, explanation: null })
    return
  }

  const capabilities = await chrome.aiOriginTrial.languageModel.capabilities()
  if (capabilities.available !== "readily") {
    console.error("Language model is not available.")
    sendResponse({ mood: "neutral", interesting: null, explanation: null })
    return
  }

  const quest = await getStoredQuest()
  if (!analysisSession || quest !== currentQuest) {
    await resetAnalysisSession(quest)
  }

  if (currentAbortController) currentAbortController.abort()
  currentAbortController = new AbortController()

  const clonedSession = await analysisSession.clone({
    signal: currentAbortController.signal
  })

  try {
    const result = await clonedSession.prompt(
      `Text: ${textChunk}\nQuest: ${quest}`
    )
    console.log(result)
    const parsedResult = parseAnalysisResult(result)
    await saveSessionData(parsedResult)
    sendResponse(parsedResult)
  } catch (error) {
    console.error("Error during analysis:", error)
    sendResponse({ mood: "neutral", interesting: null, explanation: null })
  }
}

async function handleGenerateGreeting(sendResponse) {
  // reset excerpt and mood storage
  chrome.storage.sync.set({ moods: [], excerpts: [] })

  const capabilities = await chrome.aiOriginTrial.languageModel.capabilities()
  if (capabilities.available !== "readily") {
    console.warn("Language model capabilities are not available.")
    sendResponse({
      greeting:
        "Oh no, looks like the language model is not available! Make sure to follow the instructions carefully.",
      ready: false
    })
    return
  }

  const greetingSession = await chrome.aiOriginTrial.languageModel.create({
    systemPrompt: `
You are a cute, quirky, and curious teenager with boundless excitement and childlike wonder. You’ve just been summoned by someone you look up to for an exciting new adventure!
	
	Write a short, friendly, and eager greeting to your new friend. Your message should show your excitement, admiration, and readiness for the adventure, while asking about the goal or objective they have in mind. Keep it short, to one or two sentences.
	Do not use any emojis, slang, or overly casual language. Be polite, respectful, and enthusiastic.
	Do not include the user's name or any personal information.
	
	Examples:
		• Howdy partner! What's today's quest?
		• Hey there! What's the plan for today's adventure?
		• Hiya! What's the mission for today, captain?
    `
  })

  try {
    const result = await greetingSession.prompt(
      "Create a greeting message to your new friend."
    )
    greetingSession.destroy()
    sendResponse({ greeting: result.trim(), ready: true })
  } catch (error) {
    console.error("Error generating greeting:", error)
    sendResponse({
      greeting: "Oh no, something went wrong. Please try again later.",
      ready: false
    })
  }
}

async function handleGenerateConclusion(sendResponse) {
  const capabilities = await chrome.aiOriginTrial.languageModel.capabilities()
  if (capabilities.available !== "readily") {
    console.warn("Language model capabilities are not available.")
    sendResponse({
      conclusion:
        "The language model is not available. Please check the settings.",
      ready: false
    })
    return
  }

  const quest = await getStoredQuest()
  const { excerpts, moods } = await getSessionData()

  const conclusionSession = await chrome.aiOriginTrial.languageModel.create({
    systemPrompt: `
You are a bright, inquisitive, and slightly mischievous teenager who has just completed an exciting adventure with your new friend, reading a web article together. You're now wrapping up the adventure and saying goodbye.
	
	Write a short, cheerful, and heartfelt conclusion to the adventure. Your message should:
	- Summarize the key points of the adventure (Excerpts), how they relate to the user's goal (Quest)
	- Reflect on how you felt during the adventure (Moods)
	- Express your gratitude, excitement, and anticipation for the next adventure
	
	Your conclusion must be no more than 3 sentences. Be polite, respectful, and enthusiastic. Do not use any emojis, slang, or overly casual language.
    `
  })

  try {
    const result = await conclusionSession.prompt(`
Quest: ${quest}
Excerpts: ${excerpts.join(", ")}
Moods: ${moods.join(", ")}
Wrap up the session with a personalized conclusion.
    `)
    conclusionSession.destroy()
    sendResponse({ conclusion: result.trim(), ready: true })
  } catch (error) {
    console.error("Error generating conclusion:", error)
    sendResponse({
      conclusion:
        "Oh no, something went wrong while generating the conclusion message!",
      ready: false
    })
  }
}

// Utility Functions

async function getStoredQuest() {
  return new Promise((resolve) => {
    chrome.storage.sync.get("quest", (result) => {
      resolve(result.quest || "learn something new")
    })
  })
}

async function resetAnalysisSession(quest) {
  if (currentAbortController) currentAbortController.abort()
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
Text: Time anxiety is something I’m still struggling with, and may keep on struggling with for the rest of my life. If that’s something you’re also struggling with, I hope you find these strategies useful.
Quest: learn something new
Output:
{
  "mood": "sad",
  "interesting": "Time anxiety",
  "explanation": "It's like feeling all squiggly inside because you’re worried about running out of time. Isn't that wild?"
}

Text: Why was the chicken crossing the road? To get to the other side!
Quest: Today I really want to have fun
Output:
{
  "mood": "funny",
  "interesting": "crossing the road",
  "explanation": "Chicken jokes are the best! They make you laugh and wonder why the chicken is on the move!"
}

Text: While meditating or doing yoga can be amazing vectors for mindfulness, they’re not the only ways to stay in touch with our thoughts, feelings, and the world around us.
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
  })
  currentQuest = quest
}

async function getSessionData() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["excerpts", "moods"], (result) => {
      resolve({
        excerpts: result.excerpts || [],
        moods: result.moods || []
      })
    })
  })
}

async function saveSessionData(parsedResult) {
  return new Promise((resolve) => {
    chrome.storage.sync.get(["moods", "excerpts"], (result) => {
      const moods = result.moods || []
      const excerpts = result.excerpts || []
      if (parsedResult.mood) moods.push(parsedResult.mood)
      if (parsedResult.interesting) excerpts.push(parsedResult.interesting)
      chrome.storage.sync.set({ moods, excerpts }, resolve)
    })
  })
}

function parseAnalysisResult(result) {
  let parsedResult
  try {
    parsedResult = JSON.parse(result)
  } catch {
    parsedResult = { mood: "neutral", interesting: null, explanation: null }
  }

  const validMoods = [
    "funny",
    "happy",
    "love",
    "sad",
    "scared",
    "surprised",
    "neutral"
  ]
  if (!validMoods.includes(parsedResult.mood)) {
    parsedResult.mood = "neutral"
  }

  return parsedResult
}
