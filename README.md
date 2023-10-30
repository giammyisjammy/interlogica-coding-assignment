# Interlogica coding assignment

This is my proposed solution for the Interlogica coding assignment. It uses a Turborepo starter with multiple apps all working in harmony and sharing packages.

## Running this project

Make sure you have installed the following toolchain in your machine:

- [Docker](https://docs.docker.com/engine/install/)
- [Volta](https://docs.volta.sh/guide/getting-started)

> Volta will switch to the appropriate `node` and `pnpm` version. As an alternative, take a look at `package.json` in the root of the project section to know which version to use.
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

To build all apps and packages, run the following command:

```bash
pnpm build
```

Or, in alternative, run the following command to develop all apps and packages:

```bash
pnpm dev
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

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [Prisma](https://prisma.io/) for database ORM
- [Docker Compose](https://docs.docker.com/compose/) for local database

### Database

I used [Prisma](https://prisma.io/) to manage & access the database. As such you will need a database for this project, either locally or hosted in the cloud.

To make this process easier, I put a [`docker-compose.yml`](https://docs.docker.com/compose/) file to deploy a MySQL server locally with a new database named `bakery`:

```bash
cd interlogica-coding-assignment
docker-compose up -d
```

Once deployed you will need to copy the `.env.example` file to `.env` in order for Prisma to have a `DATABASE_URL` environment variable to access.

```bash
cp .env.example .env
```

If you added a custom database name, or use a cloud based database, you will need to update the `DATABASE_URL` in your `.env` accordingly.

Once deployed & up & running, you will need to create & deploy migrations to your database to add the necessary tables. This can be done using [Prisma Migrate](https://www.prisma.io/migrate):

```bash
npx prisma migrate dev
```

If you need to push any existing migrations to the database, you can use either the Prisma db push or the Prisma migrate deploy command(s):

```bash
pnpm db:push

# OR

pnpm db:migrate:deploy
```

There is slight difference between the two commands & [Prisma offers a breakdown on which command is best to use](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push#choosing-db-push-or-prisma-migrate).

An optional additional step is to seed some initial or fake data to your database using [Prisma's seeding functionality](https://www.prisma.io/docs/guides/database/seed-database).

To do this update check the seed script located in `packages/database/src/seed.ts` & add or update any users you wish to seed to the database.

Once edited run the following command to run tell Prisma to run the seed script defined in the Prisma configuration:

```bash
pnpm db:seed
```

For further more information on migrations, seeding & more, I recommend reading through the [Prisma Documentation](https://www.prisma.io/docs/).

## Post mortem

A couple of thoughts after finishing this task.

I'll first address the pain points I found throughout the exercise and the talk about the happy bits.

> Disclaimer: in the following paragraphs I'm not trying to blame anyone. I just report my observation. I'll try to keep the most neutral tone possible but I also talk about sensitive topics, like emotion management. Please forgive me in advance for possible slips/bad wording or any shortcomings whatsoever.

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

## Pain point # 2: Personal Resources

Sadly, I don't own a very performant laptop. I missed my last company's M2 MacBook Pro when my Windows box hang for long minutes, trying to find the resources to run 3 different projects (up to 11 counting the dependencies), a container for the database and the IDE. All while trying to fit it into the limitation of WSL. And disconnecting because of long waiting times.

I would lie if I said this wasn't the most frustrating part of the exercise. I think I've spent something like 10+ hours just to put the database part together because my machine hanged when tring to deal with the Docker part of the backend (and STILL it didn't work 'cause of some external dependency(!)). And I'm sure I've looked up most of the documentation for the backend code on my phone while Docker tried to not trip over on a migration command.

I guess 4GB of vram for Docker/WSL are really too few for any serious web development task in 2023 ¯\\\_(• ̥̆ •)\_/¯

But I also came up with quite a few interesting insights on myself while doing this exercise.

## Happy point: it was...interesting!

I decided to spent most of my time challenging myself programming the database/backend part; which I know being my weakest link in terms of proficiency and knowledge.
I had the occasion to finally put into use some of the cool libraries I discovered during the last year (Prisma, Nest.js, Turborepo, Vite), getting a grasp of what problems they're trying to solve and the trade-offs made to solve them.

## Happy point: it was...satisfactory!

It felt very rewarding to put this together! I cannot blame myself too harshly for not being able to finish the project (I suspect the time constraint is intentionally too short). I feel that I've learned some very valuable knowledge while doing this.
I'm also happy for the effort put into this challenge, I managed to organize my schedule to free up a very important slice of time and that gave me the possibility to put into practice what I learned mostly in the last year.

## Things that can be improved

Of course my take is far from a perfect solution. There are many more things I would've loved to work on that added so much value to the finished product. Unfortunately, for the reasons explained before, I had to drastically cut the scope and prioritize ruthlessly, putting functionality above everything else.

Here are some of the things I thought about but didn't implemented:

- Architecture
  - Use same version of common libraries (e.g. React, typescript) across various apps and packages
- Backend
  - Integration with `tRPC` for better typechecking
- Frontend
  - Real design system! Right now the `ui` package serves only to demonstrate the architectural benefits of this approach
  - Performance audit
  - Accessibility audit
  - Responsive and mobile styles
  - Image handling
    - Automatically generate image previews using next/image
    - Cache generated preview images using Redis caching
    - Open Graph and social meta tags (possibly automatically generated from the content) which makes social sharing look professional by default
  - Leverage Next router with next/link instead of plain anchor tags
  - Social images for the various pages
  - Automatic pretty URLs
  - Support for dark mode
