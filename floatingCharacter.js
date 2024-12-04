import FunnyFound from "./assets/funny-found.svg"
import FunnyReadingSVG from "./assets/funny-reading.svg"
import HappyFound from "./assets/happy-found.svg"
import HappyReadingSVG from "./assets/happy-reading.svg"
import LoveFound from "./assets/love-found.svg"
import LoveReadingSVG from "./assets/love-reading.svg"
import SadFound from "./assets/sad-found.svg"
import SadReadingSVG from "./assets/sad-reading.svg"
import ScaredFound from "./assets/scared-found.svg"
import ScaredReadingSVG from "./assets/scared-reading.svg"
import SurprisedFound from "./assets/surprised-found.svg"
import SurprisedReadingSVG from "./assets/surprised-reading.svg"
import VHappyFound from "./assets/vhappy-found.svg"
import VHappyReadingSVG from "./assets/vhappy-reading.svg"
import WaitingRead from "./assets/waiting-read.svg"
import { SpeechBubble } from "./speechBubble.js"

export class FloatingCharacter {
  constructor() {
    this.element = document.createElement("div")
    this.element.id = "floating-circle"
    this.element.style.position = "absolute"
    this.element.style.width = "80px"
    this.element.style.height = "80px"
    this.element.style.borderRadius = "50%"
    this.element.style.zIndex = "9999999999999"
    this.element.style.transformOrigin = "center top"
    this.element.style.top = "10px"
    this.element.style.opacity = "0"
    this.element.style.transform = "scale(.5)"
    this.element.style.transition =
      "transform .5s ease-in-out, opacity .5s ease-in-out"
    document.body.appendChild(this.element)

    const avatar = document.createElement("img")
    avatar.src = HappyFound // Default to happy face
    avatar.style.width = "100%"
    avatar.style.height = "100%"
    avatar.style.userSelect = "none"
    this.element.appendChild(avatar)
    this.avatar = avatar

    this.bubble = new SpeechBubble(this) // Initialize the speech bubble

    // Mood-to-image mapping
    this.moods = {
      funny: { image: FunnyReadingSVG, found: FunnyFound },
      happy: { image: VHappyReadingSVG, found: VHappyFound },
      love: { image: LoveReadingSVG, found: LoveFound },
      sad: { image: SadReadingSVG, found: SadFound },
      scared: { image: ScaredReadingSVG, found: ScaredFound },
      surprised: { image: SurprisedReadingSVG, found: SurprisedFound },
      neutral: { image: HappyReadingSVG, found: HappyFound },
      waiting: { image: WaitingRead, found: WaitingRead }
    }
  }

  async moveToElement(element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft

    this.element.style.left = `${rect.left + rect.width + scrollLeft}px`
    this.element.style.top = `${rect.top + scrollTop - 10}px`

    // Wait for the transition to complete
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  async showInCorner() {
    setTimeout(() => {
      this.element.style.transform = "scale(1)"
      this.element.style.right = "350px"
      this.element.style.top = "30px"
      this.element.style.opacity = "1"
      this.element.style.position = "fixed"
      //this.element.style.transition = "all 1s ease-in-out"
    }, 100)
    await new Promise((resolve) => setTimeout(resolve, 400))
  }

  remove() {
    if (this.element) {
      this.element.remove() // Remove the DOM element
    }
  }

  updateMood(mood, found = false, surprise = false) {
    const moodData = this.moods[mood]
    if (!moodData) {
      console.warn(`Mood "${mood}" not found.`)
      return
    }

    // Update the avatar image
    this.avatar.src = found ? moodData.found : moodData.image

    // Add "jump" animation if the mood is surprise
    if (surprise) {
      this.element.style.transition = "transform 0.2s ease-in-out"
      this.element.style.transform = "scale(1.2)"

      // Reset to normal scale after the jump
      setTimeout(() => {
        this.element.style.transform = "scale(1)"
        this.element.style.transition = "all 1s ease-in-out"
      }, 200)
    }
  }

  ready() {
    this.updateMood("happy", false)
    this.element.style.position = "absolute"
    this.element.style.right = "auto"
    this.element.style.left = "auto"
    this.element.style.transition = "all 1s ease-in-out"
  }

  async speak(message) {
    await this.bubble.show(message)
  }

  async showWithChoices(message, choices) {
    const result = await this.bubble.showWithChoices(message, choices)
    return result
  }

  async showWithInput(message, placeholder) {
    const result = await this.bubble.showWithInput(message, placeholder)
    return result
  }
}
