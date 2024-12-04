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
      character.updateMood("waiting")
      await new Promise((resolve) => setTimeout(resolve, 100)) // Check every 100ms
    }
    character.updateMood("happy")

    // Cancel the current analysis if required
    if (isCanceled) {
      i-- // Retry the current paragraph on resumption
      await new Promise((resolve) => setTimeout(resolve, 100)) // Wait briefly before resuming
      continue
    }

    // Highlight the current element
    element.classList.add("currently-analyzing")

    // Move the character to the element
    await character.moveToElement(element)
    if (isCanceled) {
      console.log("Movement canceled due to highlight interaction")
      element.classList.remove("currently-analyzing")
      continue
    }

    const text = element.innerText.trim()
    if (!text) continue

    // Combined analysis for mood and noteworthy text
    const analysisResult = await analyzeTextCombined(text)
    if (isCanceled) {
      console.log("Analysis canceled due to highlight interaction")
      element.classList.remove("currently-analyzing")
      continue
    }

    // Mark the element as analyzed visually and in the set
    element.classList.remove("currently-analyzing")
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

    // Wait for 3 seconds before moving to the next element
    await new Promise((resolve) => setTimeout(resolve, 3000))
    if (isCanceled) {
      console.log("Wait interrupted due to highlight interaction")
    }
  }
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
  const regex = new RegExp(
    `(${textToHighlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
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
    await character.speak(explanation) // Wait for the character to finish speaking
    character.updateMood("happy") // Reset the character mood
    onResume() // Resume processing
  })
}
