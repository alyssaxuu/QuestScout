# QuestScout
[![thumbnail](https://github.com/user-attachments/assets/014cbdf9-d87a-4b8b-bf8e-2dd5d4f84a29)](https://www.youtube.com/watch?v=eMjvKiUyagY)

Stay focused and engaged while reading with your own fun, interactive AI companion 📖

QuestScout is a curious, playful sidekick that captures your browsing intent, highlights relevant content, and visibly reacts to what you read. At the end of your session, it delivers a personalized digest of its favorite highlights to keep you engaged and focused.

It was (hastily 😅) developed in 24 hours for the [Google Chrome Built-in AI Challenge](https://googlechromeai.devpost.com/), using the new [Prompt API for Chrome Extensions](https://developer.chrome.com/docs/extensions/ai/prompt-api).

👉 [Try it out!](#installation-for-testing)

Made by [Alyssa X](https://twitter.com/alyssaxuu) & [Leo](https://www.linkedin.com/in/leonorfurtado/).

## Table of contents
- [Installation for testing](#installation-for-testing)
- [How to use](#how-to-use)
- [Development setup](#development-setup)
- [Production build](#production-build)

## Installation for testing
1. Make sure to follow the instructions outlined [in this doc](https://docs.google.com/document/d/1VG8HIyz361zGduWgNG7R_R8Xkv0OOJ8b5C9QKeCjU0c/edit?tab=t.0#heading=h.witohboigk0o) to enable the Prompt API.
2. Turn off the chrome://flags/#text-safety-classifier flag (from testing it seems flaky without, also based on [this post](https://groups.google.com/a/chromium.org/g/chrome-ai-dev-preview/c/WNB2xMpMyGE)).
3. Download the Build.zip file from the releases page, and upload the folder in chrome://extensions/ to install the extension.
4. Pin the extension to make it easier to activate.

## How to use
1. Go to any Ness Labs article, for example [this one](https://nesslabs.com/time-anxiety). [Here's](https://nesslabs.com/articles) a list of 100 of them to try instead.
2. Click on the extension icon (the tiny character).
3. The character should appear, and you can choose to let it "roam free" (learn something new), or specify an intention (quest) for your reading session.
4. The character will start reading with you, reacting and highlighting anything relevant to its quest.
5. You can click on a highlight to learn what the character has to say about it.
6. The character will wait for you to scroll down the page, so that you can read together.
7. At the end, the character will tell you what it enjoyed the most about the reading session.

## Character states
Throughout the session, the character will switch between the following states. It can be:
- **Reading**: It will move across the right side of paragraphs and sections of text, and display different emotions based on what it's reading.
- **Talking**: When starting a new session, clicking on a highlight, or concluding a session, the character will face you. For highlights, it will also emote based on the content.
- **Waiting**: The character follows you on the page, so when it reaches the bottom of the visible scroll area, it will stop and look at you. When you scroll down, it will resume reading.
  
<img width="531" alt="states" src="https://github.com/user-attachments/assets/60b66f28-3bf7-41e0-ad4f-9a913c34590b">

## Development setup
First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.


## Production build
> ❗️ Not working as expected, please use the zip file, or the development version (build/chrome-mv3-dev)

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for the extension.

Feel free to reach out to us at hi@alyssax.com, to [Alyssa](https://twitter.com/alyssaxuu) or [Leo](https://www.linkedin.com/in/leonorfurtado/) directly if you have any questions or feedback! Hope you find this useful 💜
