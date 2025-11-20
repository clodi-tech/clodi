# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Clodi, a freelance product engineer based in Varzi, Italy. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Check for type errors (fast, no build)
npm run types

# Run ESLint
npm run lint

# Build for production (to run locally only for big changes)
npm run build
```

## Architecture

### Framework & Routing

- Uses Next.js App Router (`app/` directory)
- Single-page application currently with just the home page at [app/page.tsx](app/page.tsx)
- Root layout in [app/layout.tsx](app/layout.tsx) includes Vercel Analytics and Speed Insights

### Styling

- Tailwind CSS 4 with custom inline theme configuration in [app/globals.css](app/globals.css)
- Custom CSS variables: `--background`, `--foreground`
- Dark theme by default
- Google Fonts loaded via Next.js font optimization in [lib/fonts.ts](lib/fonts.ts):
  - Rajdhani (sans-serif, weights: 300-700)
  - Space Mono (monospace, weights: 400, 700)

### Path Aliases

- `@/*` maps to the root directory
- Example: `import { fontSans } from "@/lib/fonts"`

## Code Organization

- `/app` - Next.js App Router pages and layouts
- `/lib` - Shared utilities and configurations
- `/public` - Static assets

## Business Logic

### Home Page Structure

The home page ([app/page.tsx](app/page.tsx)) is structured into four main sections:

1. **Header Section**

   - Logo
   - Profile image + greeting ("HEY CIAO")

2. **Introduction Section**

   - Name introduction ("SONO CLODI")
   - Tagline about creating custom tech projects

3. **Projects Showcase**

   - Section title ("MIEI PROGETTI")
   - 3 project cards with title and description

4. **Contact/CTA Section**
   - Icon
   - CTA text ("il prossimo potrebbe essere il tuo")
   - Email input field
   - Submit button

Each section should be tackled and refined one at a time.

## Maintaining This File

After making significant changes to the codebase (new architecture patterns, business logics, major refactors, new conventions), review and update this CLAUDE.md file.

Do not add information that can be easily discovered by reading configuration files or is self-evident from the code structure.
