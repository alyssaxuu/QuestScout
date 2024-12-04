# QuestScout
https://github.com/user-attachments/assets/aaeaf332-64be-4a9a-8b0f-80386f9e67ba

Mini chrome extension built in 24 hours for the [Google Chrome Built-in AI Challenge](https://googlechromeai.devpost.com/). You can try it by using the development build folder (chrome-mv3-dev) in chrome://extensions. At the moment it can only be run in Ness Labs articles, like https://nesslabs.com/time-anxiety :)

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.


## Making production build (not working as expected - please use dev build!)

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
