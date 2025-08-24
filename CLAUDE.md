# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development
- `npm run dev` or `pnpm dev` - Start development server
- `npm run build` or `pnpm build` - Build for production  
- `npm run preview` or `pnpm preview` - Preview production build locally

### Package Management
This project uses **pnpm** as the package manager, not npm. Always use pnpm commands when available.

## Project Architecture

### Tech Stack
- **Astro** - Static site generator with component islands
- **React** - For interactive components (client-side only)
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **shadcn/ui** - Component library (configured in `components.json`)

### Key Directories
- `src/components/react/` - React components with client-side interactivity
- `src/components/ui/` - shadcn/ui components
- `src/layouts/` - Astro layout components  
- `src/pages/` - File-based routing (supports i18n with language folders)
- `src/lib/` - Utility functions and configurations
- `src/styles/` - Global CSS styles

### Core Functionality
The main application is a **screen wake prevention tool** that uses the browser's Wake Lock API. The primary component is `KeepScreenAwake.tsx` which:
- Manages wake lock state with local storage persistence
- Provides a timer showing active duration
- Offers theme customization with color pickers
- Includes FAQ and language switching sections

### Internationalization (i18n)
- **8 supported languages**: English (default), Chinese, Japanese, Korean, Spanish, French, German, Russian
- **Translation system**: Centralized in `src/lib/i18n.ts`
- **URL structure**: Language-specific routes (`/zh`, `/ja`, etc.)
- **Auto-detection**: Redirects users based on browser language preference
- **Language switching**: Interactive menu component at page bottom

### Styling Conventions (from Info.md)
- Use `cursor-pointer` for interactive elements
- Follow flat design principles - minimize card shadows
- Leverage Tailwind CSS utilities
- Component styling uses inline styles for theme colors

### Key Configuration Files
- `astro.config.mjs` - Astro configuration with React, sitemap, and Tailwind
- `components.json` - shadcn/ui configuration using "new-york" style
- `tsconfig.json` - TypeScript config with path aliases (`@/*` → `./src/*`)

### State Management
- Uses React hooks and local storage for persistence
- Wake lock state, timer data, and theme preferences are stored locally
- No external state management library

### Development Guidelines
- Interactive elements must have `cursor-pointer` class
- Minimize shadows, prefer flat design aesthetic  
- Use pnpm for package management
- Follow existing TypeScript patterns and shadcn/ui components
- Maintain translations in `i18n.ts` when adding user-facing text