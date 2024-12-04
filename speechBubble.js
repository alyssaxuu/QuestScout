export class SpeechBubble {
  constructor(floatingCharacter) {
    this.character = floatingCharacter

    // Create the wrapper for the character, speech bubble, and blurred background
    this.wrapper = document.createElement("div")
    this.wrapper.classList.add("speech-bubble-wrapper")
    this.character.element.appendChild(this.wrapper)

    // Create the blurred background
    this.blurBackground = document.createElement("div")
    this.blurBackground.classList.add("speech-bubble-blur-background")
    this.wrapper.appendChild(this.blurBackground)

    // Create the speech bubble element
    this.element = document.createElement("div")
    this.element.id = "speech-bubble"
    this.element.classList.add("speech-bubble")
    this.wrapper.appendChild(this.element)

    // Create the message container
    this.messageContainer = document.createElement("div")
    this.messageContainer.classList.add("speech-bubble-message")
    this.element.appendChild(this.messageContainer)

    // Create the button container (used for both single and multiple buttons)
    this.buttonContainer = document.createElement("div")
    this.buttonContainer.classList.add("speech-bubble-buttons")
    this.wrapper.appendChild(this.buttonContainer)

    // Inject CSS for styling
    this.injectStyles()
  }

  // Show with a single button
  async show(message, action = "OK") {
    this.messageContainer.textContent = "" // Clear any existing text
    this.buttonContainer.innerHTML = "" // Clear previous buttons

    const button = document.createElement("button")
    button.textContent = action
    button.classList.add("speech-bubble-button")
    this.buttonContainer.appendChild(button)

    this.wrapper.style.display = "flex"
    this.blurBackground.style.display = "block" // Show the background

    // Trigger the scale animation
    requestAnimationFrame(() => {
      this.wrapper.classList.add("speech-bubble-active")
      this.blurBackground.classList.add("blur-active")
    })

    await this.animateText(message) // Animate the text appearance

    return new Promise((resolve) => {
      button.addEventListener("click", async () => {
        await this.hide()
        resolve() // Resolve when button is clicked
      })
    })
  }

  // Show with multiple choices
  async showWithChoices(message, choices) {
    this.messageContainer.textContent = "" // Clear any existing text
    this.buttonContainer.innerHTML = "" // Clear previous buttons

    this.wrapper.style.display = "flex"
    this.blurBackground.style.display = "block" // Show the background

    // Trigger the scale animation
    requestAnimationFrame(() => {
      this.wrapper.classList.add("speech-bubble-active")
      this.blurBackground.classList.add("blur-active")
    })

    this.animateText(message) // Animate the text appearance

    return new Promise((resolve) => {
      choices.forEach((choice) => {
        const button = document.createElement("button")
        button.textContent = choice.label
        button.classList.add("speech-bubble-button")
        this.buttonContainer.appendChild(button)

        button.addEventListener("click", async () => {
          await this.hide()
          resolve(choice.value) // Resolve the promise with the button's value
        })
      })
    })
  }

  // Show with input field
  // Show with input field
  // Show with multiline input field
  async showWithInput(message, placeholder = "") {
    this.messageContainer.textContent = "" // Clear any existing text
    this.buttonContainer.innerHTML = "" // Clear previous buttons

    const inputContainer = document.createElement("div")
    inputContainer.classList.add("speech-bubble-input-container")

    const textarea = document.createElement("textarea")
    textarea.placeholder = placeholder
    textarea.classList.add("speech-bubble-textarea")
    inputContainer.appendChild(textarea)

    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.classList.add("speech-bubble-button")
    inputContainer.appendChild(submitButton)

    this.buttonContainer.appendChild(inputContainer)

    this.wrapper.style.display = "flex"
    this.blurBackground.style.display = "block" // Show the background

    // Trigger the scale animation
    requestAnimationFrame(() => {
      this.wrapper.classList.add("speech-bubble-active")
      this.blurBackground.classList.add("blur-active")
    })

    await this.animateText(message) // Animate the text appearance

    return new Promise((resolve) => {
      let resolved = false // Flag to ensure resolve is called only once

      submitButton.addEventListener("click", async () => {
        const userInput = textarea.value.trim()
        if (userInput && !resolved) {
          resolved = true // Prevent multiple resolves
          await this.hide()
          resolve(userInput) // Resolve with the input value
        }
      })

      // Optional: Add additional safeguards like a timeout or debug logs.
      console.log("Waiting for user input...")
    })
  }

  async animateText(message) {
    if (this.currentAnimation) {
      // Cancel any ongoing animation
      this.currentAnimation.cancelled = true
    }

    const animationState = { cancelled: false }
    this.currentAnimation = animationState

    this.messageContainer.textContent = "" // Clear any existing text

    for (let i = 0; i < message.length; i++) {
      if (animationState.cancelled) {
        // Stop the animation if it's cancelled
        return
      }

      this.messageContainer.textContent += message[i]
      await new Promise((resolve) => setTimeout(resolve, 20)) // Delay for each character
    }

    // Clear the animation state once completed
    if (this.currentAnimation === animationState) {
      this.currentAnimation = null
    }
  }

  remove() {
    if (this.element) {
      this.element.remove() // Remove the DOM element
    }
  }

  async hide() {
    this.wrapper.classList.remove("speech-bubble-active")
    this.blurBackground.classList.remove("blur-active")

    await new Promise((resolve) => setTimeout(resolve, 300)) // Wait for the animation to complete
    this.wrapper.style.display = "none"
  }

  injectStyles() {
    const style = document.createElement("style")
    style.textContent = `
      .speech-bubble-wrapper {
        position: absolute;
        top: 0;
        left: 120%;
        display: none;
        opacity: 0;
        transform: scale(0.5);
        transform-origin: top left;
        transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 300px;
        z-index: -1;
      }

      .speech-bubble-active {
        opacity: 1;
        transform: scale(1);
      }

      .speech-bubble-blur-background {
        position: absolute;
        top: -50px;
        left: -50px;
        width: 300px;
        height: 200px;
        background-color: rgba(255, 255, 255, 0.7);
        filter: blur(15px);
        border-radius: 24px;
        z-index: -1;
        display: none;
        transition: opacity 0.3s ease-in-out;
      }

      .blur-active {
        display: block;
        opacity: 1;
      }

      .speech-bubble {
        position: relative;
        background-color: #EFF0F2;
        padding: 20px 24px;
        border-radius: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        width: 100%;
        box-sizing: border-box;
      }

      .speech-bubble::after {
        content: "";
        position: absolute;
        top: 20px;
        left: -10px;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #EFF0F2;
      }

      .speech-bubble-message {
        color: #000000;
        font-size: 18px;
        line-height: 1.4;
        margin: 0;
        text-align: left;
      }

      .speech-bubble-buttons {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 0px;
        align-items: flex-end;
        width: 100%;
      }

      .speech-bubble-input-container {
        display: flex;
        gap: 8px;
        width: 100%;
        margin-top: 0px;
        align-items: flex-end;
				flex-direction: column;
      }

      .speech-bubble-textarea {
  width: 100%;
  height: 100px; /* Set the height for multiline input */
  padding: 8px;
  border: 4px solid #EFF0F2;
  border-radius: 16px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
  resize: vertical; /* Allow resizing vertically */
  background-color: #fff;
	resize: none!important;
  outline: none;
	border-radius: 30px;
	padding: 12px 18px;
}

.speech-bubble-textarea:focus {
  border-color: #D9FFB0; /* Highlight border on focus */
}

      .speech-bubble-button {
        padding: 12px 24px;
        background-color: #E2FFCC;
        color: #000000;
        border: none;
        border-radius: 24px;
        cursor: pointer;
        font-size: 18px;
        text-align: center;
        width: fit-content;
      }

      .speech-bubble-button:hover {
        transform: scale(1.02);
      }

      .speech-bubble-button:active {
        transform: scale(0.98);
      }
    `
    document.head.appendChild(style)
  }
}
