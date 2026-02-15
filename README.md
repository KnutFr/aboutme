# aboutme

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

Personal website monorepo — a blog and a landing page, built with Astro.

| App  | URL                                          | Dev port |
| ---- | -------------------------------------------- | -------- |
| Blog | [blog.knutech.net](https://blog.knutech.net) | 4321     |
| Me   | [me.knutech.net](https://me.knutech.net)     | 4322     |

## Tech Stack

**Framework** - [Astro](https://astro.build/)
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)
**Component Framework** - [React](https://react.dev/)
**Styling** - [Tailwind CSS](https://tailwindcss.com/)
**Monorepo** - [pnpm workspaces](https://pnpm.io/workspaces) + [Nx](https://nx.dev/)
**Code Formatting** - [Prettier](https://prettier.io/)
**Linting** - [ESLint](https://eslint.org)
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/)

## Project Structure

```
aboutme/
├── apps/
│   ├── blog/              # Blog (Astro + Content Collections)
│   └── me/                # Personal landing page (Astro)
├── libs/
│   └── shared-styles/     # Shared Tailwind + CSS variables
└── nx.json                # Nx monorepo config
```

## Getting Started

```bash
pnpm install          # Install dependencies
pnpm dev:blog         # Start blog dev server (localhost:4321)
pnpm dev:me           # Start me dev server (localhost:4322)
```

## Commands

| Command             | Action                                    |
| :------------------ | :---------------------------------------- |
| `pnpm install`      | Install dependencies                      |
| `pnpm dev:blog`     | Start blog dev server at `localhost:4321` |
| `pnpm dev:me`       | Start me dev server at `localhost:4322`   |
| `pnpm build:blog`   | Build blog for production                 |
| `pnpm build:me`     | Build me for production                   |
| `pnpm build:all`    | Build all apps via Nx                     |
| `pnpm preview:blog` | Preview blog build locally                |
| `pnpm preview:me`   | Preview me build locally                  |
| `pnpm format:check` | Check formatting with Prettier            |
| `pnpm format`       | Format code with Prettier                 |
| `pnpm lint`         | Lint with ESLint                          |
| `pnpm cz`           | Commit with Commitizen                    |

## Deployment

Both apps are deployed independently via [Cloudflare Pages](https://pages.cloudflare.com/). Each push to `main` triggers a build and deployment through Cloudflare's GitHub integration.

## License

Licensed under the MIT License.
