# SPACZE — Spaxora

Next.js App Router with TypeScript and React. The landing page is a Server Component; the interactive demo is a Client Component using React state.

## Development
Use Node.js 20.9 or newer.
```sh
npm install
npm run dev
```
Open http://localhost:3000.

## Validation and production
```sh
npm run typecheck
npm run build
npm start
```
A package lock must be generated and committed after the first successful installation. Dependencies have not been installed in this environment.

## Structure
- app/page.tsx: landing page
- app/layout.tsx: root layout and metadata
- app/globals.css: responsive brand styles
- components/workspace-preview.tsx: interactive demo
- lib/demo-data.ts: sample workspace content
- docs/product-design.md: complete 00–14 product scope

## Current scope
Demo data only. Approval actions remain in browser memory. Authentication, database, real AI, integrations, and publishing are not implemented.
Google Fonts is loaded through CSS with local fallbacks.

## Validation status
Source/configuration reviewed. No shell or browser runtime was available; installation, TypeScript checking, production build, and browser checks remain pending.
