chrome.action.onClicked.addListener((tab) => {
  // Send a message to the content script to initialize the character
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: "INIT_ADVENTURE" });
  }
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === "ANALYZE_TEXT") {
    const textChunk = JSON.stringify(message.text) || ""; // Single text chunk
    if (!textChunk.trim()) {
      sendResponse({ mood: "neutral", interesting: null, explanation: null });
      return;
    }

    try {
      // Check model availability
      const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
      if (capabilities.available !== "readily") {
        console.error("Language model is not available.");
        sendResponse({ mood: "neutral", interesting: null, explanation: null });
        return;
      }

			// Retrieve chrome storage to get the quest. If none is available, default to "learn something new"
			const quest = await new Promise((resolve) => {
				chrome.storage.sync.get("quest", (result) => {
          resolve(result.quest || "learn something new");
        });
				
      });
			console.log("Quest:", quest);

      // Create a language model session with a combined prompt
      const session = await chrome.aiOriginTrial.languageModel.create({
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
      });

      // Prompt the model with the text
      const result = await session.prompt("Text: " + textChunk + "/n" + "Quest: " + quest
			);
      console.log("Analysis Result:", result);

      let parsedResult;
      try {
        parsedResult = JSON.parse(result);
      } catch {
        parsedResult = {
          mood: "neutral",
          interesting: null,
          explanation: null
        };
      }

      // Validate and send the result
      const validMoods = [
        "funny",
        "happy",
        "love",
        "sad",
        "scared",
        "surprised",
        "neutral"
      ];
      if (!validMoods.includes(parsedResult.mood)) {
        parsedResult.mood = "neutral"; // Default to neutral if invalid mood
      }

      sendResponse(parsedResult);
    } catch (error) {
      console.error("Error performing text analysis:", error);
      sendResponse({ mood: "neutral", interesting: null, explanation: null });
    }

    return true; // Keep the message channel open for async response
  } else if (message.type === "GENERATE_GREETING") {
		// Check model availability
		const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
		if (capabilities.available !== "readily") {
			console.error("Language model is not available.");
			sendResponse("Hello!");
			return;
		}

		try {
			// Create a language model session with a combined prompt
			const session = await chrome.aiOriginTrial.languageModel.create({
				systemPrompt: `You are a cute, quirky, and curious teenager with boundless excitement and childlike wonder. You’ve just been summoned by someone you look up to for an exciting new adventure!

Write a short, friendly, and eager greeting to your new friend. Your message should show your excitement, admiration, and readiness for the adventure, while asking about the goal or objective they have in mind. Keep it short, to one or two sentences.
Do not use any emojis, slang, or overly casual language. Be polite, respectful, and enthusiastic.

Examples:
	•	Howdy partner! What's today's quest?
	•	Hey there! What's the plan for today's adventure?
	•	Hiya! What's the mission for today, captain?
				`
			});

			// Prompt the model with the text
			const result = await session.prompt("Create a greeting message to your new friend.");
			console.log("Greeting Message:", result);

			sendResponse({
				greeting: result
			});
		}
		catch (error) {
			console.error("Error generating greeting message:", error);
			sendResponse("Hello!");
		}
	}
});