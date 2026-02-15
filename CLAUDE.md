# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website monorepo containing two Astro apps: a blog and a landing page. Built with pnpm workspaces + Nx for orchestration.

- **Blog** (`apps/blog/`) — blog.knutech.net, port 4321
- **Me** (`apps/me/`) — me.knutech.net, port 4322
- **Shared styles** (`libs/shared-styles/`) — Tailwind + OKLch color system, imported as `@knutech/shared-styles/base.css`

## Commands

```bash
pnpm install              # Install deps (never use npm/yarn)
pnpm dev:blog             # Dev server for blog (port 4321)
pnpm dev:me               # Dev server for me (port 4322)
pnpm build:blog           # Build blog
pnpm build:me             # Build me
pnpm build:all            # Build all apps via Nx
pnpm lint                 # ESLint
pnpm format:check         # Prettier check
pnpm format               # Prettier fix
pnpm cz                   # Conventional commit via Commitizen
```

## Architecture

- **Monorepo**: pnpm workspaces (`apps/*`) with Nx caching (`nx.json`)
- **Framework**: Astro 5 with strict TypeScript, React for interactive components
- **Styling**: Tailwind CSS 4 with shared OKLch color variables and light/dark mode via `data-theme` attribute
- **Content**: Blog posts in `apps/blog/src/content/blog/*.md` using Astro Content Collections with schema validation
- **Path aliases**: `@layouts/*` in each app, `@knutech/shared-styles/*` for shared lib (defined in `tsconfig.base.json`)
- **Deployment**: Cloudflare Pages (each app deployed independently)
- **CI**: GitHub Actions — builds both apps on push/PR to main

## Code Quality

- **Pre-commit**: Husky + lint-staged runs Prettier on staged files
- **Commits**: Conventional Commits enforced via Commitizen (`pnpm cz`)
- **Prettier config**: 2-space indent, semicolons, double quotes, trailing commas (es5), LF line endings
- **ESLint**: Configured with `eslint-plugin-astro` and `@typescript-eslint/parser`

## Build Output

Build artifacts go to `dist/apps/{app-name}`. Nx caches builds for incremental rebuilds.
