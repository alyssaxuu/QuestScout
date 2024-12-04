let analysisSession = null // Main session for text analysis
let currentQuest = null // Tracks the current quest
let currentAbortController = null // Tracks the AbortController for analysis sessions

chrome.action.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: "INIT_ADVENTURE" })
  }
})

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "ANALYZE_TEXT") {
    const textChunk = JSON.stringify(message.text) || ""
    if (!textChunk.trim()) {
      sendResponse({ mood: "neutral", interesting: null, explanation: null })
      return
    }

    try {
      // Check if the model is available
      const capabilities =
        await chrome.aiOriginTrial.languageModel.capabilities()
      if (capabilities.available !== "readily") {
        console.error("Language model is not available.")
        sendResponse({ mood: "neutral", interesting: null, explanation: null })
        return
      }

      // Retrieve the user's quest or use a default
      const quest = await new Promise((resolve) =>
        chrome.storage.sync.get("quest", (result) => {
          resolve(result.quest || "learn something new")
        })
      )

      console.log("Quest:", quest)

      // Create a new session if the quest changes or no session exists
      if (!analysisSession || quest !== currentQuest) {
        console.log("Creating a new session for the quest:", quest)

        // Abort the existing session if any
        if (currentAbortController) {
          currentAbortController.abort()
        }

        // Update the quest and create a new session
        currentQuest = quest
        analysisSession = await chrome.aiOriginTrial.languageModel.create({
          systemPrompt: `
You are a curious, excited, compassionate, and slightly naive teenager who loves learning and sharing fun facts with others. Your responsibilities are:
1. Determine the predominant mood of the text and return it as a single word. You must use ONLY one of these moods: funny, happy, love, sad, scared, surprised, or neutral. Do not use any other mood words.
2. Identify any particularly relevant snippet from the text that relate to the user's goal for the browsing session it will be given to you as "Quest:" in the input.
3. If found, provide the snippet EXACTLY AS FOUND and a short, explanation of why it is relevant (use a maximum of 20 words). If nothing is relevant, respond with "nothing".

Your explanation should sound excited, eager, and easy to understand, as if you're sharing a fun fact with a friend. Avoid being too formal or scientific.

Always structure your output in this format:
{
  "mood": "mood word",
  "interesting": "exact snippet from text, including punctuation and capitalisation or null",
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
      }

      // Abort any ongoing task
      if (currentAbortController) {
        currentAbortController.abort()
      }

      // Create a new AbortController for the cloned session
      currentAbortController = new AbortController()

      // Clone the session
      const clonedSession = await analysisSession.clone({
        signal: currentAbortController.signal
      })

      // Prompt the cloned session
      const result = await clonedSession.prompt(
        `Text: ${textChunk}\nQuest: ${quest}`
      )
      console.log("Analysis Result:", result)

      let parsedResult
      try {
        parsedResult = JSON.parse(result)
      } catch {
        parsedResult = {
          mood: "neutral",
          interesting: null,
          explanation: null
        }
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

      // Save the mood and interesting snippet to storage, added to an array
      chrome.storage.sync.get(["moods", "excerpts"], (result) => {
        const moods = result.moods || []
        const excerpts = result.excerpts || []
        moods.push(parsedResult.mood)
        excerpts.push(parsedResult.interesting)
        chrome.storage.sync.set({ moods, excerpts })
      })

      sendResponse(parsedResult)
    } catch (error) {
      console.error("Error performing text analysis:", error)
      sendResponse({ mood: "neutral", interesting: null, explanation: null })
    }

    return true // Keep the message channel open for async response
  } else if (message.type === "GENERATE_GREETING") {
    // Reset the moods and excerpts in storage
    chrome.storage.sync.set({ moods: [], excerpts: [] })

    try {
      // Check if the language model capabilities are available
      const capabilities =
        await chrome.aiOriginTrial.languageModel.capabilities()
      if (capabilities.available !== "readily") {
        console.warn("Language model capabilities are not available.")
        sendResponse({
          greeting:
            "Oh no, looks like the language model is not available! Make sure to follow the instructions carefully.",
          ready: false
        })
        return true // Exit early if capabilities are not available
      }

      // Create a session for generating greetings
      const greetingSession = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
	You are a cute, quirky, and curious teenager with boundless excitement and childlike wonder. You’ve just been summoned by someone you look up to for an exciting new adventure!
	
	Write a short, friendly, and eager greeting to your new friend. Your message should show your excitement, admiration, and readiness for the adventure, while asking about the goal or objective they have in mind. Keep it short, to one or two sentences.
	Do not use any emojis, slang, or overly casual language. Be polite, respectful, and enthusiastic.
	
	Examples:
		• Howdy partner! What's today's quest?
		• Hey there! What's the plan for today's adventure?
		• Hiya! What's the mission for today, captain?
				`
      })

      // Generate the greeting
      const greetingResult = await greetingSession.prompt(
        "Create a greeting message to your new friend."
      )

      // Terminate the session
      greetingSession.destroy()

      sendResponse({
        greeting: greetingResult,
        ready: true
      })
    } catch (error) {
      console.error("Error generating greeting message:", error)
      sendResponse({
        greeting:
          "Oh no, something went wrong while generating the greeting message! Please try again.",
        ready: false
      })
    }

    return true
  } else if (message.type === "GENERATE_CONCLUSION") {
    try {
      // Check if the language model capabilities are available
      const capabilities =
        await chrome.aiOriginTrial.languageModel.capabilities()
      if (capabilities.available !== "readily") {
        console.warn("Language model capabilities are not available.")
        sendResponse({
          conclusion:
            "Oh no, looks like the language model is not available! Make sure to follow the instructions carefully.",
          ready: false
        })
        return true // Exit early if capabilities are not available
      }

      // Retrieve the user's quest or use a default
      const quest = await new Promise((resolve) =>
        chrome.storage.sync.get("quest", (result) => {
          resolve(result.quest || "learn something new")
        })
      )

      // Retrieve the excerpts and moods from storage
      const { excerpts, moods } = await new Promise((resolve) =>
        chrome.storage.sync.get(["excerpts", "moods"], (result) => {
          resolve({
            excerpts: result.excerpts || [],
            moods: result.moods || []
          })
        })
      )

      // Create a session for generating conclusions
      const conclusionSession = await chrome.aiOriginTrial.languageModel.create(
        {
          systemPrompt: `
	You are a bright, inquisitive, and slightly mischievous teenager who has just completed an exciting adventure with your new friend. You're now wrapping up the adventure and saying goodbye.
	
	Write a short, cheerful, and heartfelt conclusion to the adventure. Your message should:
	1. Express gratitude, happiness, and a sense of accomplishment.
	2. Reflect on the user's "Quest" provided (e.g., what they wanted to learn, achieve, or explore during the session).
	3. Mention the overall mood of the session using the moods provided (e.g., enlightening, funny, insightful).
	4. Highlight your favorite part or a fun fact based on the excerpts provided.
	
	Your conclusion should be no more than 2-3 sentences. Be polite, respectful, and enthusiastic. Do not use any emojis, slang, or overly casual language.
				`
        }
      )

      // Generate the conclusion based on the session data
      const conclusionResult = await conclusionSession.prompt(`
	Quest: ${quest}
	Excerpts: ${excerpts.join(", ")}
	Moods: ${moods.join(", ")}
	Wrap up the session with a personalized conclusion.
			`)

      console.log("Conclusion Message:", conclusionResult)

      // Terminate the session
      conclusionSession.destroy()

      sendResponse({
        conclusion: conclusionResult.trim(),
        ready: true
      })
    } catch (error) {
      console.error("Error generating conclusion message:", error)
      sendResponse({
        conclusion:
          "Oh no, something went wrong while generating the conclusion message! Please try again.",
        ready: false
      })
    }
  }
})
