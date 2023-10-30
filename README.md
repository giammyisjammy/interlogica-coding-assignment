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

- `api`: an [Express](https://expressjs.com/) server
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

## Things that can be improved

- Architecture
  - Use same version of common libraries (e.g. React, typescript) across various apps and packages
- Backend
  - Integration with `tRPC` for better typechecking
- Frontend
  - Real design system! Right now the `ui` package serves only to demonstrate the architectural benefits of this approach (please don't try to glean any design best-practices from stuff like this!)
  - Performance audit
  - Accessibility audit
