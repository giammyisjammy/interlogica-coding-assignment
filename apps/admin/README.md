<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://pr.new/vitejs/vite"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Admin ⚡

This is the project which was supposed to hold the admin panel.

I planned to leverage two main components

- [react-admin](https://marmelab.com/react-admin/) has an excellent UI/UX out of the box and felt like it would make me focus on coding the high value bits - i.e. the business logic - instead of getting into the way. I like tools like these. [Why reinvent a (potentially square) wheel when I can stand on the shoulders of giants?](https://en.wikipedia.org/wiki/Code_reuse)
- Some identity provider to handle authentication/authorization. Probably I would have chose [Passport.js](https://www.passportjs.org) because it has official support both on the [Nest.js site](<(https://docs.nestjs.com/recipes/passport)>) and [Next.js documentation](https://nextjs.org/docs/pages/building-your-application/routing/authenticating#bring-your-own-database). [Iron session](https://iron-session-example.vercel.app) looked like a valid alternative.

Honestly, I don't think there's much more to talk about. Apart from these high level critical decisions, I felt that pretty much the rest of this app was an exercise of technique. I preferred to dive into some more interesting aspects for this challenge and stopped here.

> [Link to the Docs](https://vitejs.dev) in case you're interested to learn more about Vite.
