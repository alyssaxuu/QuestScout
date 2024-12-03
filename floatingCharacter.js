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
import { SpeechBubble } from "./speechBubble.js"

export class FloatingCharacter {
  constructor() {
    this.element = document.createElement("div")
    this.element.id = "floating-circle"
    this.element.style.position = "absolute"
    this.element.style.width = "80px"
    this.element.style.height = "80px"
    this.element.style.borderRadius = "50%"
    this.element.style.zIndex = "10000"
    this.element.style.transition = "all 1s ease-in-out"
    document.body.appendChild(this.element)

    const avatar = document.createElement("img")
    avatar.src = HappyReadingSVG // Default to happy face
    avatar.style.width = "100%"
    avatar.style.height = "100%"
    avatar.style.userSelect = "none"
    this.element.appendChild(avatar)
    this.avatar = avatar

    this.bubble = new SpeechBubble(this) // Initialize the speech bubble

    // Mood-to-image mapping
    this.moods = {
      funny: { image: FunnyReadingSVG, found: FunnyFound },
      happy: { image: HappyReadingSVG, found: HappyFound },
      love: { image: LoveReadingSVG, found: LoveFound },
      sad: { image: SadReadingSVG, found: SadFound },
      scared: { image: ScaredReadingSVG, found: ScaredFound },
      surprised: { image: SurprisedReadingSVG, found: SurprisedFound },
      neutral: { image: HappyReadingSVG, found: HappyFound }
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

  updateMood(mood, found = false) {
    const moodData = this.moods[mood]
    if (!moodData) {
      console.warn(`Mood "${mood}" not found.`)
      return
    }

    this.avatar.src = found ? moodData.found : moodData.image
  }

  async speak(message) {
    await this.bubble.show(message)
  }
}
