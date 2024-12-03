chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'ANALYZE_TEXT') {
    const textChunk = JSON.stringify(message.text) || ''; // Single text chunk
    if (!textChunk.trim()) {
      sendResponse({ mood: 'neutral' });
      return;
    }

    try {
      // Check model availability
      const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
      if (capabilities.available !== 'readily') {
        console.error('Language model is not available.');
        sendResponse({ mood: 'neutral' });
        return;
      }

      // Create a language model session
      const session = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
You are an empathetic, thoughtful scientist, tasked with interpreting the emotional tone of text.
Your job is to identify the predominant feeling expressed in the following text and return it as a single word representing the mood. Use one of these words as your response:
- funny
- happy
- love
- sad
- scared
- surprised
- neutral (if no clear mood is detected)

ONLY respond with one of these words. Do not add additional context or explanation.

Examples:
Input: Time anxiety is something I’m still struggling with, and may keep on struggling with for the rest of my life. If that’s something you’re also struggling with, I hope you find these strategies useful.
Output: sad

Input: Haha, that joke about the chicken crossing the road really cracked me up!
Output: funny

Input: I can't believe the effort they put into this presentation. It truly moved me.
Output: love

Input: While meditating or doing yoga can be amazing vectors for mindfulness, they’re not the only ways to stay in touch with our thoughts, feelings, and the world around us.
Output: neutral
        `
      });

      const result = await session.prompt("Input: " + textChunk);
      console.log('Mood Analysis Result:', result);

      const mood = ['funny', 'happy', 'love', 'sad', 'scared', 'surprised', 'neutral'].includes(result.trim().toLowerCase())
        ? result.trim().toLowerCase()
        : 'neutral';

      sendResponse({ mood });
    } catch (error) {
      console.error('Error performing mood analysis:', error);
      sendResponse({ mood: 'neutral' });
    }

    return true; // Keep the message channel open for async response
  }

  if (message.type === 'ANALYZE_INTERESTING') {
    const textChunk = JSON.stringify(message.text) || ''; // Single text chunk
    if (!textChunk.trim()) {
      sendResponse({ interesting: null });
      return;
    }

    try {
      // Check model availability
      const capabilities = await chrome.aiOriginTrial.languageModel.capabilities();
      if (capabilities.available !== 'readily') {
        console.error('Language model is not available.');
        sendResponse({ interesting: null });
        return;
      }

      // Create a language model session for interesting analysis
      const session = await chrome.aiOriginTrial.languageModel.create({
        systemPrompt: `
You are a curious, detail-oriented researcher tasked with identifying noteworthy or interesting snippets from a text.
Your goal is to:
1. Extract a specific word or phrase from the text that is particularly noteworthy or interesting.
2. Provide a short explanation (1-2 sentences) of why it is interesting.

ONLY perform this analysis if something is very noteworthy. If nothing stands out as particularly noteworthy, respond with "nothing".

Respond in this format:
{
  "interesting": "exact text from paragraph",
  "explanation": "short explanation of why it is interesting"
}

Examples:
Input: Time anxiety is something I’m still struggling with, and may keep on struggling with for the rest of my life. If that’s something you’re also struggling with, I hope you find these strategies useful.
Output:
{
  "interesting": "Time anxiety",
  "explanation": "It introduces a unique concept about how individuals experience stress related to the passage of time."
}

Input: While meditating or doing yoga can be amazing vectors for mindfulness, they’re not the only ways to stay in touch with our thoughts, feelings, and the world around us.
Output:
{
  "interesting": "meditating or doing yoga",
  "explanation": "This highlights specific activities that promote mindfulness and improve mental well-being."
}

Input: This is just a simple paragraph with no remarkable information.
Output: nothing
        `
      });

      const result = await session.prompt("Input: " + textChunk);
      console.log('Interesting Analysis Result:', result);

      let parsedResult;
      try {
        parsedResult = JSON.parse(result);
      } catch {
        parsedResult = { interesting: null, explanation: null };
      }

      if (parsedResult.interesting && parsedResult.explanation) {
        sendResponse(parsedResult);
      } else {
        sendResponse({ interesting: null, explanation: null });
      }
    } catch (error) {
      console.error('Error performing interesting analysis:', error);
      sendResponse({ interesting: null, explanation: null });
    }

    return true; // Keep the message channel open for async response
  }
});