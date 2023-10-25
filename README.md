# Interlogica coding assignment

This is my proposed solution for the Interlogica coding assignment. official starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Running this project

Make sure you have installed the following toolchain in your machine:

- [Docker](https://docs.docker.com/engine/install/)
- [Volta](https://docs.volta.sh/guide/getting-started)

> Volta will switch to the appropriate `node` and `pnpm` version. As an alternative, take a look at `package.json` under the `volta` section to

After this clone the repository and install the dependencies:

```sh
pnpm i
```

Then run the following command:

```sh
pnpm dev
```

## What's inside?

This repository includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
