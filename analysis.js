export const analyzeAllText = async (character, analyzedElements) => {
  let interactionQueue = null // Stores the clicked highlight's details

  const elements = Array.from(
    document.querySelectorAll(
      ".entry-content p, .entry-content span, .entry-content li"
    )
  ).filter((el) => {
    const identifier = el.innerText.trim()
    return (
      !el.classList.contains("analyzed-text") && // Skip already-analyzed elements
      !analyzedElements.has(identifier) // Skip already-tracked elements
    )
  })

  for (const element of elements) {
    const identifier = element.innerText.trim()

    // Skip already-analyzed elements
    if (
      analyzedElements.has(identifier) ||
      element.classList.contains("analyzed-text")
    )
      continue

    // Highlight the current element
    element.classList.add("currently-analyzing")

    // Move the character to the element
    character.moveToElement(element)

    const text = element.innerText.trim()
    if (!text) continue

    //await character.speak(`How are you today?`)

    // Analyze text and get the mood
    const mood = await analyzeTextForMood(text)

    // Check for noteworthy text
    const noteworthy = await analyzeTextForNoteworthy(text)

    // Mark the element as analyzed visually and in the set
    element.classList.remove("currently-analyzing")
    element.classList.add("analyzed-text")
    analyzedElements.add(identifier)

    // Update the character mood
    character.updateMood(mood)

    // If there's noteworthy text, highlight it
    if (noteworthy.interesting && noteworthy.explanation) {
      handleHighlightInteraction(
        element,
        noteworthy.interesting,
        noteworthy.explanation,
        character,
        (highlightData) => {
          interactionQueue = highlightData // Queue the highlight interaction
        }
      )
    }

    // Wait for 5 seconds before moving to the next element
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Process queued interaction if it exists
    if (interactionQueue) {
      const { highlight, explanation } = interactionQueue
      isPaused = true
      await handleQueuedInteraction(highlight, explanation, character)
      interactionQueue = null // Clear the queue
      isPaused = false
    }
  }
}

// Helper function to handle highlight interaction
const handleHighlightInteraction = (
  element,
  textToHighlight,
  explanation,
  character,
  queueInteraction
) => {
  const regex = new RegExp(`(${textToHighlight})`, "i")
  element.innerHTML = element.innerHTML.replace(
    regex,
    `<span class="highlighted-text" style="background-color: yellow; cursor: pointer;">$1</span>`
  )

  const highlight = element.querySelector(".highlighted-text")

  // Check if the highlight exists
  if (!highlight) return
  highlight.addEventListener("click", () => {
    queueInteraction({ highlight, explanation }) // Queue the highlight interaction
  })
}

// Helper function to process queued interaction
const handleQueuedInteraction = async (highlight, explanation, character) => {
  console.log(highlight)
  await character.moveToElement(highlight)
  await character.speak(explanation) // Wait for the character to finish speaking
}

// Helper function to analyze text and get the mood
const analyzeTextForMood = async (text) => {
  try {
    return await new Promise((resolve) => {
      chrome.runtime.sendMessage({ type: "ANALYZE_TEXT", text }, (response) => {
        const validMoods = [
          "funny",
          "happy",
          "love",
          "sad",
          "scared",
          "surprised",
          "neutral"
        ]
        const mood = response?.mood
        resolve(validMoods.includes(mood) ? mood : "neutral") // Default to neutral if invalid mood
      })
    })
  } catch {
    return "neutral" // Default to neutral if an error occurs
  }
}

// Helper function to analyze text for noteworthy snippets
const analyzeTextForNoteworthy = async (text) => {
  try {
    return await new Promise((resolve) => {
      chrome.runtime.sendMessage(
        { type: "ANALYZE_INTERESTING", text },
        (response) => {
          if (response?.interesting && response?.explanation) {
            resolve({
              interesting: response.interesting,
              explanation: response.explanation
            })
          } else {
            resolve({ interesting: null, explanation: null })
          }
        }
      )
    })
  } catch {
    return { interesting: null, explanation: null } // Default to null if an error occurs
  }
}
