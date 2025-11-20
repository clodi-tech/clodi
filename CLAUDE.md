# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Clodi, a freelance product engineer based in Varzi, Italy. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm start

# Run ESLint
npm run lint
```

## Architecture

### Framework & Routing
- Uses Next.js App Router (`app/` directory)
- Single-page application currently with just the home page at [app/page.tsx](app/page.tsx)
- Root layout in [app/layout.tsx](app/layout.tsx) includes Vercel Analytics and Speed Insights

### Styling
- Tailwind CSS 4 with custom inline theme configuration in [app/globals.css](app/globals.css)
- Custom CSS variables: `--background` (#000000) and `--foreground` (#ffffff)
- Dark theme by default
- Google Fonts loaded via Next.js font optimization in [lib/fonts.ts](lib/fonts.ts):
  - Rajdhani (sans-serif, weights: 300-700)
  - Space Mono (monospace, weights: 400, 700)

### Path Aliases
- `@/*` maps to the root directory (configured in [tsconfig.json](tsconfig.json))
- Example: `import { fontSans } from "@/lib/fonts"`

### TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler
- JSX: react-jsx (React 19's automatic JSX transform)

## Code Organization

- `/app` - Next.js App Router pages and layouts
- `/lib` - Shared utilities and configurations (currently only fonts)
- `/public` - Static assets (currently empty)
- ESLint configured with Next.js core-web-vitals and TypeScript presets

## Current State

The application is in early development with placeholder content in Italian on the home page. The structure indicates plans for:
- Logo and profile image display
- Project showcase section (3 projects planned)
- Email capture form
