# AGENTS guide for knc-website
- Owner: repo root; applies to all files.
- Purpose: give agents commands and style guardrails.
- No other AGENTS files exist; treat this as root scope.
- Keep instructions up to date when toolchains change.
- Prefer pnpm workflows; npm/yarn allowed only if required.
- Node 22 LTS recommended; align with Next.js 16 support.
- Repository uses App Router; stay compatible with React 19.
- All changes must keep TypeScript strict on.
- No Cursor or Copilot rules currently present.
## 2) Tooling and package management
- Install dependencies: `pnpm install` (workspace root).
- Lockfile: `pnpm-lock.yaml`; do not edit manually.
- Workspace uses `pnpm-workspace.yaml`; packages list includes root only.
- Ignored native deps: `sharp`, `unrs-resolver` (per workspace).
- Use `pnpm dlx` for one-off CLIs when possible.
- Keep `node_modules` vendored locally; no global installs assumed.
- Avoid adding new package managers without discussion.
- Prefer ESM modules; CommonJS discouraged.
- Keep dependency versions aligned with Next.js 16 peer ranges.
## 3) Build and runtime commands
- Dev server: `pnpm dev` (Next.js).
- Build: `pnpm build`.
- Start production build: `pnpm start` after build.
- Lint: `pnpm lint` runs eslint with Next core web vitals config.
- Type check occurs during Next build; keep `tsconfig.json` strict.
- Hot reload enabled in dev; restart dev server after config changes.
- Env vars: use `.env.local`; keep secrets out of repo.
- Asset base: `public/` for static files.
- Path alias: `@/*` maps to repo root.
## 4) Testing status
- No automated test runner configured yet.
- There is no `test` script in package.json.
- If you add tests, prefer Vitest or Jest with TS + Next support.
- Document any new test commands in this file if added.
- For single-test runs once introduced, use framework filters (e.g., `pnpm test -- <pattern>`).
- Until tests exist, validate via lint + `pnpm build` for type safety.
- Avoid adding snapshot tests unless justified.
- Keep test files colocated near sources (`*.test.ts[x]`).
- Mock external requests; do not hit networks in tests.
## 5) Linting and formatting
- ESLint config: `eslint.config.mjs` extends `eslint-config-next` (core-web-vitals + typescript).
- Overrides include global ignores for `.next/`, `out/`, `build/`, `next-env.d.ts`.
- Run lint: `pnpm lint`.
- Fixes: use `pnpm lint --fix` for auto-fixable issues.
- No Prettier configured; follow project formatting conventions manually.
- Keep imports sorted logically (framework, libs, aliases, relatives).
- Avoid disabling ESLint rules; if necessary, prefer scoped `/* eslint-disable-next-line */` with rationale.
- Avoid wildcard `any`; use explicit types or generics.
- Do not commit lint warnings; aim for clean runs.
## 6) TypeScript and typing
- `strict` mode enabled; do not disable.
- `noEmit` true; rely on Next build for output.
- Target `ES2017`; module resolution `bundler`.
- Prefer explicit return types on exported functions/components.
- Use `Readonly` or `as const` to lock literals when helpful.
- Prefer `unknown` over `any` for unsafe inputs.
- Type React props with interfaces or type aliases; keep names descriptive.
- Use Next.js types like `Metadata`, `NextConfig`, `React.ReactNode`.
- Keep path alias `@/` for absolute imports; avoid relative `../../../` chains.
## 7) React/Next patterns
- App Router structure in `app/`; favor server components unless client needs exist.
- Add "use client" only when needed (stateful/hooks/event handlers).
- Use `next/font` for fonts; avoid manual `<link>` for same fonts.
- Use `Image` from `next/image` for optimized images.
- Metadata: export `metadata` object from layout/page when adjusting SEO.
- Keep layouts light; avoid heavy client logic in `layout.tsx`.
- Use `fetch` with Next caching options where relevant.
- For navigation, use `Link` from `next/link` instead of anchor when internal.
- Avoid direct DOM access; use refs/hooks instead.
## 8) Styling and Tailwind
- Tailwind CSS v4 via `@import "tailwindcss"` in `app/globals.css`.
- Theme variables set with `@theme inline`; respect `--font-geist-*` variables.
- Prefer utility-first classes; keep class lists concise and readable.
- Use dark mode aware colors; existing palette uses `bg-zinc`, `text-zinc`.
- Place global styles only in `app/globals.css`; avoid component-level global overrides.
- Keep custom CSS minimal; prefer Tailwind utilities.
- For new themes, adjust CSS vars in `:root` and dark media query.
- Use `className` strings; avoid `clsx` unless necessary for conditionals.
- Keep layout responsive using Tailwind breakpoints (`sm`, `md`, etc.).
## 9) Imports and module boundaries
- Order imports: 1) builtin/node, 2) external libs, 3) alias `@/…`, 4) relative, 5) styles/assets.
- Keep side-effect imports (CSS) at bottom of import list.
- Prefer named imports over default when library supports it.
- Avoid deep imports into Next internals.
- Do not use absolute filesystem paths; rely on alias.
- Remove unused imports; ESLint will flag.
- Avoid circular dependencies; refactor shared pieces into utility modules.
- Keep client components separate from server utilities.
- Re-export shared helpers from index barrels only when it reduces path length.
## 10) Naming conventions
- Components: `PascalCase` for React components and files exporting components.
- Hooks: `useCamelCase` names; place in `app/` or `lib/` when added.
- Types/interfaces: `PascalCase`; enums discouraged—prefer unions.
- Constants: `SCREAMING_SNAKE_CASE` for immutable values.
- Functions/variables: `camelCase`.
- Files: prefer kebab-case or match component name (e.g., `MyWidget.tsx`).
- CSS variables: `--kebab-case`.
- Keep prop names descriptive; avoid abbreviations.
- Avoid Hungarian notation or prefixing booleans with `is`/`has` only when meaningful.
## 11) Error handling and logging
- Favor fail-fast checks with informative errors; avoid silent failures.
- Use `Error` with clear messages; include actionable context.
- Avoid `console.log` in production paths; use `console.error` sparingly for unexpected issues.
- For data fetching, handle network errors and loading states explicitly.
- Prefer returning typed fallbacks over `undefined` drifting through the UI.
- Validate external inputs; never trust query params unparsed.
- For client components, guard optional data before rendering.
- Keep try/catch blocks narrow; rethrow with added context when needed.
- Avoid swallowing errors with empty catches.
## 12) Accessibility and UX
- Use semantic HTML elements; prefer `<button>` over clickable `<div>`.
- Provide `alt` text for images; required by `next/image`.
- Maintain focus states; let Tailwind defaults stand unless improved.
- Ensure color contrast for text in both light and dark modes.
- Use `aria-*` attributes when custom controls are built.
- Avoid auto-focus unless essential; respect user control.
- Keep motion minimal; allow reduced motion if animations added.
- Ensure form inputs have labels.
- Support keyboard navigation for interactive elements.
## 13) Data and state management
- Use React state/hooks for local UI; avoid heavy state libraries unless justified.
- Prefer server components for data fetching to leverage caching.
- Use `useEffect` sparingly; avoid deriving state from props when possible.
- Memoize expensive computations with `useMemo`/`useCallback` when measurable benefit.
- Lift state only when shared; avoid prop drilling with context unless stable.
- Keep derived values pure; avoid mutating props.
- Use `URL`/`URLSearchParams` for query handling instead of string concat.
- For forms, keep controlled inputs; validate before submission.
- Clean up subscriptions or timers in effects.
## 14) File and project hygiene
- Keep `public/` for static assets; avoid storing build artifacts.
- Do not commit `.env*` files or secrets.
- Remove dead code and commented-out blocks.
- Keep README updated when behavior changes.
- Use small, focused components; avoid monolithic files.
- Prefer dependency-light solutions before adding packages.
- Keep git history clean; avoid committing generated files.
- Run lint before pushing; build if config changes.
- Update this AGENTS file when workflows change.
## 15) Collaboration and PR tips
- Describe changes clearly in PRs; link relevant issues.
- Keep diffs small and reviewable.
- Add screenshots/GIFs for UI changes.
- Note any new env vars or migration steps.
- Ensure accessibility considerations are documented.
- If adding tests, show commands and scope run.
- Respect existing patterns before refactors; discuss large changes.
- Avoid force-push to shared branches unless necessary.
- Ask for clarification when requirements are uncertain.
