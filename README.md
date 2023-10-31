# Interlogica coding assignment

This is my proposed solution for the Interlogica coding assignment. It uses a Turborepo starter with multiple apps all working in harmony and sharing packages.

## Table of Contents

- [Running this project](#running-this-project)
- [What's inside?](#whats-inside)
  - [Apps and Packages](#apps-and-packages)
  - [Utilities](#utilities)
- [Post mortem](#post-mortem)
  - [Pain point # 1](#pain-point--1-time-management)
  - [Pain point # 2](#pain-point--2-personal-resources)
  - [Happy point # 1](#happy-point--1-it-wasinteresting)
  - [Happy point # 2](#happy-point--2-it-wassatisfactory)
  - [Things that can be improved](#things-that-can-be-improved)

I documented my thought process and decisions in various READMEs across the project.

### Apps

- [admin](apps/admin/README.md)
- [api](apps/api/README.md)
- [storefront](apps/storefront/README.md)

### Packages

- [database](packages/database/README.md)
- [eslint-config-custom](packages/eslint-config-custom/README.md)
- [jest-presets](packages/jest-presets/README.md)
- [logger](packages/logger/README.md)
- [tsconfig](packages/tsconfig/README.md)
- [ui](packages/ui/README.md)

## Running this project

Make sure you have installed the following toolchain in your machine:

- [Docker](https://docs.docker.com/engine/install/)
- [Volta](https://docs.volta.sh/guide/getting-started)

> ℹ️ Volta will switch to the appropriate `node` and `pnpm` version. As an alternative, take a look at `package.json` in the root of the project section to know which version to use.
>
> ```json
> // ./package.json
> {
>   "private": true,
>   // ...
>   "volta": {
>     "node": /* node version */,
>     "pnpm": /* pnpm version */
>   }
> }
> ```

You can then clone the repository and install the dependencies with:

```sh
pnpm i
```

Make sure to [set up the database](packages/database/README.md) according to the guide in `packages/database`.

To build all apps and packages, run the following command:

```bash
pnpm build
```

Or, in alternative, run the following command to develop all apps and packages:

```bash
pnpm dev # Spins up everything
pnpm dev --filter=admin # Spins up only selected project
```

## What's inside?

This repository includes the following packages and apps:

### Apps and Packages

- `api`: an [Nest.js](https://nestjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `database`: [Prisma](https://prisma.io/) ORM wrapper to manage & access your database
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repository has some additional tools already setup:

- [Turborepo](https://turbo.build/repo/docs) for task running, building and managing task dependencies
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [Prisma](https://prisma.io/) for database ORM
- [Docker Compose](https://docs.docker.com/compose/) for local database

## Post mortem

A couple of thoughts after finishing this task.

I'll first address the pain points I found throughout the exercise and the talk about the happy bits.

> ⚠️ Disclaimer: in the following paragraphs I'm not trying to blame anyone. I just report my observation. I'll try to keep the most neutral tone possible but I also talk about sensitive topics, like emotion management. Please forgive me in advance for possible slips/bad wording or any shortcomings whatsoever.

### Pain point # 1: Time Management

This challenge looked pretty straightforward at a first glance. However I found it a little bit too challenging to fit it into the time constraint given.

Being conscious from the very start that I wouldn't be able to finish in the given time was distressing. I guess I felt victim of some self-imposed expectations that were a tad too high for the context. I felt that this impacted my ability to "be in the zone" when coding in more than one occasion. Definitively I could have made a better work to handle my emotional state along the way.

That being said, I'm perfectly conscious that the solution DOESN'T represent a production ready product.

What I did is to build it as thoroughly as possible in my spare time, document my thought process and documented the time used. I preferred not to ask questions for clarification because my only contact with the company was a third-party recruiter - clearly a non-tech person - and preferred not to bother with the back-and-forth communication at this point of the process.

Of course that would not be the case in a workplace environment. There, communication is king.

Even if the interviewer said that this would be an exercise worth a couple of hours of work, I preferred to invest enough time to get something closer to production quality code. I estimate that I've put something in the 20/30-ish hours of work into this exercise.

Of course I've cut some corners, for example I reused another exercise from a CSS course I bought for the `storefront` app. It was originally a React App for a shoe shop but, since it's still an original work of mine, I thought I could've tried to fit it into the solution. I also thought that presented myself as a frontend developer, that would have been a good presentation of what I'm working on lately.
It still presented some challenges, I'm looking forward to discuss these in person.

I do hope that this gives a better insight into my abilities than a dirty prototype hacked together as quickly as possible. =)

### Pain point # 2: Personal Resources

Sadly, I don't own a very performant laptop. I missed my last company's M2 MacBook Pro when my Windows box hang for long minutes, trying to find the resources to run 3 different projects (up to 11 counting the dependencies), a container for the database and the IDE. All while trying to fit it into the limitation of WSL. And disconnecting because of long waiting times.

I would lie if I said this wasn't the most frustrating part of the exercise. I think I've spent something like 10+ hours just to put the database part together because my machine hanged when tring to deal with the Docker part of the backend (and STILL it didn't work 'cause of some external dependency(!)). And I'm sure I've looked up most of the documentation for the backend code on my phone while Docker tried to not trip over on a migration command.

I guess 4GB of vram for Docker/WSL are really too few for any serious web development task in 2023 ¯\\\_(• ̥̆ •)\_/¯

But I also came up with quite a few interesting insights on myself while doing this exercise.

### Happy point # 1: it was...interesting!

I decided to spent most of my time challenging myself programming the database/backend part; which I know being my weakest link in terms of proficiency and knowledge.
I had the occasion to finally put into use some of the cool libraries I discovered during the last year (Prisma, Nest.js, Turborepo, Vite), getting a grasp of what problems they're trying to solve and the trade-offs made to solve them.

I think I got the right architectural approach, which is to make each program do one thing well (see the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)). That was the rationale behind the libraries and framework choices. For example, separating into different apps the `admin` and the `storefront` features allowed me to leverage a better selection tooling and libraries.

A non exaustive list of the benefits:

- Vite [improves the DX](https://vitejs.dev/guide/why.html) allowing quicker iteration,
- Next.js SSG and SSR [makes better performing pages](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation#when-should-i-use-static-generation) which is critical for an e-commerce,
- Nest.js [CRUD generator](https://docs.nestjs.com/recipes/crud-generator) looked like a drastic time saver to me.

> ☝️ It would make much less sense to do one big frontend project because the `storefront` doesn't need complete CRUD integration and the `admin` feature is actually much more difficult to put together in a SSR context.

Nevertheless, putting everything together was a daunting challenge. I placed a bet on the excellent ecosystem around Turborepo for the integration but I had to do some of the hardwork by myself: there were no integrations with Nest.js out of the box, no (satisfactory) boilerplate projects around and virtually no guides around. So I had to figure out a way to nail a minimal working integration in the time given (far from a trivial task!). I ended up with a good enough result in terms of DX and stability but by the time I finished these I had to concentrate my attention elsewhere or I would fall behind schedule.

But I think it was totally worth it because it gave me an insight on the exceptional work done by the people in the FOSS community and a precious hands on experience to take home.

### Happy point # 2: it was...satisfactory!

It felt very rewarding to put this together!

I cannot blame myself too harshly for not being able to finish the project (I suspect the time constraint is intentionally too short). I feel that I've learned some very valuable knowledge while doing this.
I'm also happy for the effort put into this challenge, I managed to organize my schedule to free up a very important slice of time and that gave me the possibility to put into practice what I learned mostly in the last year.

### Things that can be improved

Of course my take is far from a perfect solution. There are many more things I would've loved to work on that added so much value to the finished product. Unfortunately, for the reasons explained before, I had to cut corners and prioritize ruthlessly, striving to put together a functional product before doing the fancy stuff.

Here are some of the things I thought about but didn't implemented:

- Architecture
  - Hoist common libraries (e.g. React, typescript) at root level for consistency across apps and packages
- Backend
  - Integration with `tRPC` for better typechecking
- Frontend
  - Real design system! Right now the `ui` package serves only to demonstrate the architectural benefits of this approach
  - Static Site Generation: the whole point of choosing Next.js over other technology. Sadly, I had to make a compromise on this because things changed radically from version 12 to 13 and time was scarce.
  - Different CSS tooling. I resorted to [styled-components](https://styled-components.com) because it was the way to go a couple of years ago. Nowadays I'd opt for [vanilla-extract](https://vanilla-extract.style) because it has great type safety, good community support and is more consistent in an SSR setup.
  - Responsive and mobile styles. The `storefront` app comes from another exercise and I picked it at a point in which it doesn't really have responsive styles.
  - Image optimizations
    - Automatically generate image previews using `next/image`
    - Cache generated preview images using Redis caching
    - Open Graph and social meta tags (possibly automatically generated from the content) which makes social sharing look professional by default
  - Leverage Next.js router with `next/link` instead of plain anchor tags
  - Social images for the various pages
  - Automatic pretty URLs
  - Support for dark mode
  - Performance audit
  - Accessibility audit
