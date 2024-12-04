import { FloatingCharacter } from "./floatingCharacter.js"
import { initAdventure } from "./initAdventure.js"

let isInitialized = false // Prevent multiple initializations
let character = null // Reference to the floating character
const analyzedElements = new Set() // Track analyzed elements

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "INIT_ADVENTURE") {
    if (isInitialized) {
      window.location.reload()
    } else {
      // Start a new adventure
      console.log("Starting analysis...")
      isInitialized = true

      // Add the floating character and start analysis
      character = new FloatingCharacter()
      initAdventure(character)

      sendResponse({ status: "Character initialized and analysis started" })
    }
  }
})
