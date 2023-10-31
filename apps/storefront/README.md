<p align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Storefront</h1>
</p>

## Overview

This is actually an old project of mine reused and adapted to necessity. It comes from an exercise from a [CSS course](https://courses.joshwcomeau.com) I bought some time ago.

I thought that, having presented myself as a frontend developer, this would have been a good presentation card to show.

The exercise was originally geared towards using [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) efficiently. Of course this has it's drawbacks: the ideal choice would have been to use [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) because that's what I would use today for solving a two-dimensional layout challenge. Flexbox **can** handle of two-dimensional layout (leveraging the [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) property) but it's kinda clunky compared to CSS Grid - which has way more features to handle these challenges. You see all kinds of quirks in the flex grid when you resize the viewport (including one very big cake sitting in the bottom row alone). I think Flexbox really shines when it comes to dealing with layout in one dimension at a time — either as a row or as a column — but I didn't really saw value in refactoring this aspect at this point of the development.

What I really liked of this project was the concept of [optical alignment](https://www.joshwcomeau.com/css/pixel-perfection/#going-the-extra-mile-3) which you can see throughout the grid but particularly in the Header component. I feel that today it is a detail that is becoming more and more important which separates amazing professional interfaces from just good ones.

Sadly, I had to cut corners when it came to connecting the app to the `api` because I got stuck into generating the Prisma client.

```bash
➜  interlogica-coding-assignment git:(main) ✗ npx prisma migrate dev # The failing command
Environment variables loaded from .env
Prisma schema loaded from packages/database/prisma/schema.prisma
Datasource "db": MySQL database "bakery" at "127.0.0.1:3306"

- Drift detected: Your database schema is not in sync with your migration history.

The following is a summary of the differences between the expected database schema given your migrations files, and the actual schema of the database.

It should be understood as the set of changes to get from the expected schema to the actual schema.

[+] Added tables
  - Ingredient
  - Product
  - ProductIngredients
  - Storefront
  - User

- The following migration(s) are applied to the database but missing from the local migrations directory: 20231030105227_first

✔ We need to reset the MySQL database "bakery" at "127.0.0.1:3306"
Do you want to continue? All data will be lost. … yes

✔ Enter a name for the new migration: … first
Applying migration `20231031131742_first`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20231031131742_first/
    └─ migration.sql

Your database is now in sync with your schema.

Running generate... (Use --skip-generate to skip the generators)
warn Preview feature "referentialIntegrity" is deprecated. The functionality can be used without specifying it as a preview feature.
warn The `referentialIntegrity` attribute is deprecated. Please use `relationMode` instead. Learn more at https://pris.ly/d/relation-mode
> Downloading Prisma engines for Node-API for debian-openssl-3.0.x [                    ] 0%Error: Failed to fetch the engine file at https://binaries.prisma.sh/all_commits/73e60b76d394f8d37d8ebd1f8918c79029f0db86/debian-openssl-3.0.x/libquery_engine.so.node.gz. 404 Not Found
```

Sadly I couldn't find a quick solution for this. The web hive mind proposed some solutions but were all either time expensive, uneffective or both.

- May be some symlink magic made by Volta/pnpm which broke the download [in a similar way of this Ubuntu user](https://github.com/prisma/prisma/issues/13717)
- May be a missing/broken file from the [Prisma mirrors](https://binaries.prisma.sh). Solved by the Prisma maintainers re-running the build at a specific commit (unfortunately I cannot find the Github discussion link anymore)
- May be some SSL support but the solution from [here](https://github.com/prisma/prisma/issues/13133) didn't work for me
- May be some WSL/Windows specific black magic. [This guy](https://github.com/prisma/prisma/issues/1642#issuecomment-587985335) solved it by reinstalling his WSL box and re-running the command. Sadly, it is out of question for me because I cannot afford to go throughout a complete Linux reinstall on my machine ATM.

## Documentation

Visit [https://nextjs.org/docs](https://nextjs.org/docs) to view the full documentation.
