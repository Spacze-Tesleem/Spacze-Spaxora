# SPACZE — Spaxora

Next.js App Router with TypeScript, React, and Tailwind CSS v4. The landing page is a Server Component; the interactive demo is a Client Component using React state.

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

## Styling
Tailwind v4 uses @tailwindcss/postcss and CSS theme tokens in app/globals.css. Use utilities such as bg-spacze-ink, text-spacze-muted, and font-display. Existing draft styles are in the components layer so utilities can override them. Preflight is intentionally omitted to preserve the existing browser defaults during incremental migration.

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
