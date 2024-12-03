export class SpeechBubble {
  constructor(floatingCharacter) {
    this.character = floatingCharacter

    // Create the wrapper for the character and the speech bubble
    this.wrapper = document.createElement("div")
    this.wrapper.classList.add("speech-bubble-wrapper")
    this.character.element.appendChild(this.wrapper)

    // Create the speech bubble element
    this.element = document.createElement("div")
    this.element.id = "speech-bubble"
    this.element.classList.add("speech-bubble")
    this.wrapper.appendChild(this.element)

    // Create the message container
    this.messageContainer = document.createElement("div")
    this.messageContainer.classList.add("speech-bubble-message")
    this.element.appendChild(this.messageContainer)

    // Create the acknowledge button
    this.button = document.createElement("button")
    this.button.textContent = "Great find!"
    this.button.classList.add("speech-bubble-button")
    this.wrapper.appendChild(this.button)

    // Attach click event for the button
    this.button.addEventListener("click", () => {
      this.hide()
      if (this.resolveShow) {
        this.resolveShow()
      }
    })

    // Create the full-page background
    this.background = document.createElement("div")
    this.background.classList.add("speech-bubble-background")
    document.body.appendChild(this.background)

    // Hide the speech bubble when clicking the background
    this.background.addEventListener("click", () => {
      this.hide()
      if (this.resolveShow) {
        this.resolveShow()
      }
    })

    // Inject CSS for styling
    this.injectStyles()
  }

  async show(message) {
    this.messageContainer.textContent = "" // Clear any existing text
    this.wrapper.style.display = "flex"
    this.background.style.display = "block" // Show the background

    // Trigger the scale animation
    requestAnimationFrame(() => {
      this.wrapper.classList.add("speech-bubble-active")
    })

    await this.animateText(message) // Animate the text appearance

    return new Promise((resolve) => {
      this.resolveShow = resolve // Store resolve to be called when button or background is clicked
    })
  }

  async animateText(message) {
    for (let i = 0; i < message.length; i++) {
      this.messageContainer.textContent += message[i]
      await new Promise((resolve) => setTimeout(resolve, 10)) // Delay for each character
    }
  }

  hide() {
    this.wrapper.classList.remove("speech-bubble-active")
    this.background.style.display = "none" // Hide the background

    setTimeout(() => {
      this.wrapper.style.display = "none"
    }, 300) // Wait for the animation to complete
  }

  injectStyles() {
    const style = document.createElement("style")
    style.textContent = `
      .speech-bubble-wrapper {
        position: absolute;
        top: 0;
        left: 120%; /* Position to the right of the character */
        display: none;
        opacity: 0;
        transform: scale(0);
        transform-origin: top left;
        transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        width: 300px;
      }

      .speech-bubble-active {
        opacity: 1;
        transform: scale(1);
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
        top: 20px; /* Adjust to position the arrow */
        left: -10px; /* Adjust to position the arrow */
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

      .speech-bubble-button {
        padding: 12px 24px;
        background-color: #E2FFCC;
        color: #000000;
        border: none;
        border-radius: 24px;
        cursor: pointer;
        font-size: 18px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        transition: transform 0.2s ease-in-out;
        width: auto;
      }

      .speech-bubble-button:hover {
        transform: scale(1.02);
      }

      .speech-bubble-button:active {
        transform: scale(0.98);
      }

      .speech-bubble-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0); /* Semi-transparent overlay */
        z-index: 999; /* Above other content but below speech bubble */
        display: none; /* Hidden by default */
      }
    `
    document.head.appendChild(style)
  }
}
