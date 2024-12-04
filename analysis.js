export const analyzeAllText = async (character, analyzedElements) => {
  let isCanceled = false // Flag to cancel current processing

  // Get all elements to analyze
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

  const resetCancellation = () => {
    isCanceled = false
  }

  const isVisibleInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i]
    const identifier = element.innerText.trim()

    // Skip already-analyzed elements
    if (
      analyzedElements.has(identifier) ||
      element.classList.contains("analyzed-text")
    ) {
      continue
    }

    // Wait until the element is visible in the viewport
    while (!isVisibleInViewport(element)) {
      if (!isCanceled) {
        character.updateMood("waiting")
      }
      await new Promise((resolve) => setTimeout(resolve, 100)) // Check every 100ms
    }
    if (!isCanceled) {
      character.updateMood("neutral")
    }

    // Cancel the current analysis if required
    if (isCanceled) {
      i-- // Retry the current paragraph on resumption
      await new Promise((resolve) => setTimeout(resolve, 100)) // Wait briefly before resuming
      continue
    }

    // Move the character to the element
    await character.moveToElement(element)

    // Highlight the current element with a dashed border
    element.classList.add("currently-analyzing")
    element.style.outline = "2px dashed #CDCDCD"
    element.style.borderRadius = "15px"
    element.style.outlineOffset = "4px"
    element.style.boxSizing = "border-box"
    if (isCanceled) {
      console.log("Movement canceled due to highlight interaction")
      removeHighlight(element)
      continue
    }

    const text = element.innerText.trim()
    if (!text) {
      removeHighlight(element)
      continue
    }

    // Combined analysis for mood and noteworthy text
    const analysisResult = await analyzeTextCombined(text)
    if (isCanceled) {
      console.log("Analysis canceled due to highlight interaction")
      removeHighlight(element)
      continue
    }

    // Mark the element as analyzed visually and in the set
    element.classList.add("analyzed-text")
    analyzedElements.add(identifier)

    // Update the character mood
    const { mood, interesting, explanation } = analysisResult
    if (isCanceled) {
      console.log("Mood update canceled due to highlight interaction")
      continue
    }
    character.updateMood(mood, false, mood !== "neutral")

    // If there's noteworthy text, highlight it
    if (interesting && explanation) {
      handleHighlightInteraction(
        element,
        interesting,
        explanation,
        mood,
        character,
        () => {
          isCanceled = true // Trigger cancellation
        },
        async () => {
          resetCancellation() // Resume processing
        }
      )
    }

    // Wait for 2 seconds before moving to the next element
    await new Promise((resolve) => setTimeout(resolve, 1000))
    removeHighlight(element)
    if (isCanceled) {
      console.log("Wait interrupted due to highlight interaction")
    }
  }

  // Generate a conclusion once the last element is analyzed
  if (elements.length > 0) {
    console.log("Analysis complete. Generating conclusion...")

    // Call the background script to generate the conclusion
    chrome.runtime.sendMessage(
      {
        type: "GENERATE_CONCLUSION"
      },
      (response) => {
        if (response && response.ready) {
          console.log("Conclusion generated:", response.conclusion)
          character.updateMood("neutral", true)
          character.speak(response.conclusion, "Thanks for your help!")
        } else {
          console.error("Error generating conclusion:", response.conclusion)
          character.updateMood("neutral", true)
          character.speak(
            "Oops, I couldn't wrap up the adventure this time. Let's try again later!",
            "Thanks for your help!"
          )
        }
      }
    )
  }
}

// Remove the highlight from the element
const removeHighlight = (element) => {
  element.style.outline = ""
  element.style.outlineOffset = ""
}

// Helper function for combined analysis
const analyzeTextCombined = async (text) => {
  try {
    return await new Promise((resolve) => {
      chrome.runtime.sendMessage({ type: "ANALYZE_TEXT", text }, (response) => {
        resolve({
          mood: response?.mood || "neutral",
          interesting: response?.interesting || null,
          explanation: response?.explanation || null
        })
      })
    })
  } catch {
    return { mood: "neutral", interesting: null, explanation: null } // Default to neutral if an error occurs
  }
}

// Helper function to handle highlight interaction
const handleHighlightInteraction = (
  element,
  textToHighlight,
  explanation,
  mood,
  character,
  onPause,
  onResume
) => {
  const sanitizedText = textToHighlight.replace(/[/\\'""]/g, "") // Remove specific characters
  const regex = new RegExp(
    `(${sanitizedText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "i" // Only match the first instance
  )
  element.innerHTML = element.innerHTML.replace(
    regex,
    `<span class="highlighted-text" style="background-color: yellow; cursor: pointer;">$1</span>`
  )

  const highlight = element.querySelector(".highlighted-text")

  // Check if the highlight exists
  if (!highlight) return

  highlight.addEventListener("click", async () => {
    onPause() // Pause processing
    await character.moveToElement(highlight)
    character.updateMood(mood, true) // Update the character mood
    await character.speak(explanation, "Great find!") // Wait for the character to finish speaking
    character.updateMood("neutral") // Reset the character mood
    onResume() // Resume processing
  })
}
