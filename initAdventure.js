import { analyzeAllText } from "./analysis.js"

let analyzedElements = new Set() // Track analyzed elements

// Function to request a greeting from the background script
const requestGreeting = async () => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: "GENERATE_GREETING" }, (response) => {
      console.log("Received greeting:", response.greeting)
      resolve({ greeting: response.greeting, ready: response.ready })
    })
  })
}

export const initAdventure = async (character) => {
  character.showInCorner()

  // Request a greeting from the background script
  const greeting = await requestGreeting()

  // Add the floating character to the top right of the page

  console.log(greeting)

  if (!greeting.ready) {
    character.speak(greeting.greeting)
  } else {
    // Show adventure options
    const choice = await character.showWithChoices(greeting.greeting, [
      { label: "Roam free", value: "explore" },
      { label: "I have a quest for you!", value: "quest" }
    ])

    if (choice === "quest") {
      const quest = await character.showWithInput(
        "What’s your next adventure?",
        "So many quests for you to do..."
      )

      // Save the quest in chrome storage
      chrome.storage.sync.set({ quest: quest })
      character.ready()
      analyzeAllText(character, analyzedElements)
    } else {
      character.ready()
      analyzeAllText(character, analyzedElements)
    }

    console.log("User selected:", choice)
    console.log("Character initialized and analysis started")
  }
}
