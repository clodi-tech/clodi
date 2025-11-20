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
- Custom CSS variables:
  - `--background`, `--foreground`
  - `--light`, `--mid`, `--dark`
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
  - `/lib/components` - Reusable React components
  - `/lib/actions.ts` - Server actions (e.g., email submission)
  - `/lib/types.ts` - TypeScript type and interface definitions
  - `/lib/const.ts` - Application constants and data
- `/public` - Static assets

## Business Logic

### Home Page Structure

The home page ([app/page.tsx](app/page.tsx)) is structured into three main sections:

1. **Hero Section**

   - Logo
   - Horizontal layout: "HEY CIAO" + profile image + "SONO CLODI"
     - Uses `MyTitle` component for signature titles (first word in gray-mid, second word in white)
     - Profile image with rounded corners and dark border
   - Tagline in small, light gray text

2. **Projects Showcase**

   - Section title
   - Dynamic list of project cards mapped from `projects` constant

3. **Contact/CTA Section**
   - Heart handshake icon
   - CTA text
   - `EmailForm` component with:
     - Server action form using `next/form` and `useActionState`
     - Email input with label wrapper for accessibility
     - Submit button with pending state
     - Success message on submission
     - Telegram notification integration via server action
