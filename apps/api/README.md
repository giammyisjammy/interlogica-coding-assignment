<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Wait...there's nothing here! Why?

Because my time for coding ran out :P

Jokes aside, I chose Nest.js because I was familiar with [Angular](https://angular.io/docs) (which inspired heavily the architecture of this project) and I already used Nest with success for a past exercise.

The defining features that sold me the idea were his [first class Prisma integration](https://docs.nestjs.com/recipes/prisma) and a pretty good [CRUD generator](https://docs.nestjs.com/recipes/crud-generator) which looked like it could solve a large part of my use case in one fell swoop with `nest g resource`.

I had some reserves about choosing Nest.js: I was considering going with an [Express](https://expressjs.com/)/[tRPC](https://trpc.io) but I didn't like the fact that I had to write much of the code by myself (maybe an oversight by me, I don't really know much about the Express ecosystem).
And [looking at this discussion](https://github.com/trpc/trpc/discussions/1504) didn't look like any official support was going to come soon. I thought figuring out a way to integrate Nest.js with tRPC added too much complexity for a take home project and I was worried about it clashing with [another great library](https://marmelab.com/react-admin/) I planned to include in the `admin` app (which **does** have [first class support for Nest.js](https://marmelab.com/react-admin/DataProviderList.html)).

In the end, I scratched completely the inclusion of tRPC in favour of the CRUD generator benefits and my familiarity with the Nest.js architecture.

I was planning to include an adapter for [react-admin](https://marmelab.com/react-admin) which would have made trivially simple managing the CRUD operations from the `admin` package. But I had to cut scope because my time ran out.
