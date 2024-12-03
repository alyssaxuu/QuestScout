import Found from "./assets/found.svg"
import FunnyReadingSVG from "./assets/funny-reading.svg"
import HappyReadingSVG from "./assets/happy-reading.svg"
import LoveReadingSVG from "./assets/love-reading.svg"
import SadReadingSVG from "./assets/sad-reading.svg"
import ScaredReadingSVG from "./assets/scared-reading.svg"
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
      funny: { image: FunnyReadingSVG },
      happy: { image: HappyReadingSVG },
      love: { image: LoveReadingSVG },
      sad: { image: SadReadingSVG },
      scared: { image: ScaredReadingSVG },
      surprised: { image: SurprisedReadingSVG }
    }
  }

  moveToElement(element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft

    this.element.style.left = `${rect.left + rect.width + scrollLeft}px`
    this.element.style.top = `${rect.top + scrollTop - 10}px`
  }

  updateMood(mood, customMessage) {
    const moodData = this.moods[mood]
    if (!moodData) {
      console.warn(`Mood "${mood}" not found.`)
      return
    }
    // if (!customMessage) {
    //   console.warn(`Custom message is required for mood "${mood}".`)
    //   return
    // }
    this.avatar.src = moodData.image // Update character image
    // this.bubble.show(customMessage) // Show the bubble with the provided message
  }

  async speak(message) {
    this.avatar.src = Found
    await this.bubble.show(message)
  }
}
