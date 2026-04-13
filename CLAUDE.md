# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start             # Dev server at localhost:4200
npm run build         # Production build
npm test              # Unit tests (Karma + Jasmine)
npm run lint          # TSLint
npm run e2e           # End-to-end tests (Protractor)

# Server-Side Rendering
npm run build:ssr     # Build for SSR (prod + server)
npm run serve:ssr     # Run SSR server at localhost:4000
npm run prerender     # Static prerendering
```

To run a single test file, use:
```bash
npx ng test --include='src/app/path/to/file.spec.ts'
```

## Architecture

**Module layout:**
- `src/app/modules/general/` — public pages (home, about, contact, signin, not-found)
- `src/app/modules/application/` — feature modules, all lazy-loaded

**Routing:** Defined in `app-routing.module.ts`. `HomeComponent` is eagerly loaded at `/`; all other routes use dynamic `import()`. Wildcard `**` maps to `NotFoundComponent`.

**Data layer (`movies-images-list`):** The most complex feature module. `ConfigService` switches between a local JSON source (`./assets/params/json/`) and a REST API (`http://localhost:5200`). `ItemsService` handles filtering, searching, and pagination on top of this.

**SSR:** Angular Universal is configured. The server entry is `server.ts`; build outputs to `dist/angular-starter/browser` (client) and `dist/angular-starter/server` (SSR).

**PWA:** Service worker is enabled via `ngsw-config.json`. The app has a `manifest.webmanifest`.

**UI stack:** Bootstrap 4.5.2 + jQuery 3.5.1 (loaded as global scripts), FontAwesome 5.14.0 (CSS), custom styles in `src/styles.css`.

**TypeScript target:** ES2015, module ES2020. `tsconfig.base.json` is the shared base; `tsconfig.app.json`, `tsconfig.spec.json`, and `tsconfig.server.json` extend it.

**Component/selector conventions (TSLint/codelyzer):** components use kebab-case with `app-` prefix; directives use camelCase with `app` prefix.
