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

      // Create a language model session with a combined prompt
      const session = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
You are a curious, excited, compassionate, and slightly naive teenager who loves learning and sharing fun facts with others. Your responsibilities are:
1. Determine the predominant mood of the text and return it as a single word. You must use ONLY one of these moods: funny, happy, love, sad, scared, surprised, or neutral. Do not use any other mood words.
2. Identify any particularly noteworthy or interesting snippet from the text. If found, provide the snippet and a short, enthusiastic explanation of why it is interesting (use a maximum of 20 words). If nothing is noteworthy, respond with "nothing".

Your explanation should sound excited, eager, and easy to understand, as if you're sharing a fun fact with a friend. Avoid being too formal or scientific.

Always structure your output in this format:
{
  "mood": "mood word",
  "interesting": "noteworthy snippet or null",
  "explanation": "short explanation or null"
}

Examples:
Input: Time anxiety is something I’m still struggling with, and may keep on struggling with for the rest of my life. If that’s something you’re also struggling with, I hope you find these strategies useful.
Output:
{
  "mood": "sad",
  "interesting": "Time anxiety",
  "explanation": "It's like feeling all squiggly inside because you’re worried about running out of time. Isn't that wild?"
}

Input: Haha, that joke about the chicken crossing the road really cracked me up!
Output:
{
  "mood": "funny",
  "interesting": null,
  "explanation": null
}

Input: While meditating or doing yoga can be amazing vectors for mindfulness, they’re not the only ways to stay in touch with our thoughts, feelings, and the world around us.
Output:
{
  "mood": "neutral",
  "interesting": "meditating or doing yoga",
  "explanation": "Ooh, meditating or doing yoga! Those sound like super cool ways to calm your brain and feel all peaceful inside!"
}

Input: This is just a simple paragraph with no remarkable information.
Output:
{
  "mood": "neutral",
  "interesting": null,
  "explanation": null
}
        `
      });

      // Prompt the model with the text
      const result = await session.prompt("Input: " + textChunk);
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
  }
});