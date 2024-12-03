import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  const [response, setResponse] = useState("")

  const getModel = async () => {
    try {
      console.log("getModel started")
      const { available, defaultTemperature, defaultTopK, maxTopK } =
        await chrome.aiOriginTrial.languageModel.capabilities()
      console.log("Capabilities:", {
        available,
        defaultTemperature,
        defaultTopK,
        maxTopK
      })

      if (available !== "no") {
        console.log("Creating session...")
        try {
          const session = await chrome.aiOriginTrial.languageModel.create({
            systemPrompt:
              "You are a helpful assistant that provides information based on user queries."
          })
          const result = await session.prompt(data)
          setResponse(result)
        } catch (error) {
          console.error("Error in create session:", error)
        }
      } else {
        console.log("Model is not available")
      }
    } catch (error) {
      console.error("Error in getModel:", error)
    }
  }

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input
        onChange={(e) => setData(e.target.value)}
        value={data}
        placeholder="Ask me anything..."
      />
      <button
        onClick={() => {
          getModel()
        }}>
        Get Response
      </button>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
