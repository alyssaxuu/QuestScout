import { analyzeAllText } from "./analysis.js"
import { FloatingCharacter } from "./floatingCharacter.js"

const character = new FloatingCharacter()
const analyzedElements = new Set() // Track analyzed elements

// Start analyzing all paragraphs from top to bottom
analyzeAllText(character, analyzedElements)
