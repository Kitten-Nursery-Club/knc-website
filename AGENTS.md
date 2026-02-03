# AGENTS guide for knc-website

- Owner: repo root; applies to all files
- Purpose: give agents commands and style guardrails
- Keep instructions updated when toolchains change

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server (Next.js) |
| `pnpm build` | Production build |
| `pnpm start` | Run production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint --fix` | Auto-fix lint issues |

No test runner configured. Until tests exist, validate via `pnpm lint && pnpm build`.

## Tech Stack

- **Framework**: Next.js 16 with App Router, React 19
- **State**: TanStack React Query (v5) for server state
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **HTTP**: Axios for API requests
- **Carousel**: Embla Carousel for sliders
- **Fonts**: next/font (Google Fonts)

## TypeScript

- `strict: true` enabled
- Target: ES2017, module: esnext, resolution: bundler
- Prefer `unknown` over `any`
- Use explicit return types on exported functions
- Use `Readonly` or `as const` for literal types

## ESLint Rules

- Quotes: double (`"`) with `avoidEscape: true`
- Semicolons: never
- Disabled: `@next/next/no-dangerous-html`, `react/no-danger`
- Run `pnpm lint --fix` for auto-fixes

## React/Next Patterns

- App Router in `app/`, server components by default
- Use `"use client"` only for state/hooks/events
- Use `next/font` for Google Fonts
- Use `next/image` for optimized images
- Use `Link` from `next/link` for internal navigation
- Export `metadata` from layout/page for SEO
- Providers wrapper in `app/providers.tsx` for React Query

## React Query Guidelines

- Create client via `createQueryClient()` in `lib/query-client.ts`
- Default staleTime: 1 minute, refetchOnWindowFocus: false, retry: 1
- Wrap app in `QueryClientProvider` via `Providers` component
- Use `ReactQueryDevtools` for debugging (bottom-left)

## Styling and Tailwind

- Tailwind v4 via `@import "tailwindcss"` in globals.css
- No tailwind.config.ts (CSS-first configuration)
- Theme vars: `--font-*` and `--color-*` prefixed
- Fonts use CSS variables: `--font-sofia-sans`, `--font-press-start`
- Dark mode aware with `bg-zinc`, `text-zinc` palette
- Use `className` strings; avoid `clsx` unless needed

## Imports Order

1. Node/builtin imports
2. External libraries
3. Alias `@/…` imports
4. Relative imports
5. CSS side-effect imports

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `SiteHeader.tsx` |
| Hooks | useCamelCase | `useAuth` |
| Types | PascalCase | `ProvidersProps` |
| Constants | SCREAMING_SNAKE_CASE | `DEFAULT_STALE_TIME` |
| Variables/functions | camelCase | `queryClient` |
| Files | kebab-case or PascalCase | `site-header.tsx` |
| CSS variables | --kebab-case | `--font-geist-sans` |

## Error Handling

- Use `Error` with clear, actionable messages
- Handle network errors explicitly in data fetching
- Return typed fallbacks instead of `undefined`
- Never swallow errors with empty catch blocks
- Validate external inputs (query params, API responses)

## File Structure

- `app/` - App Router pages/layouts/providers
- `lib/` - Utilities, API clients, query client
- `components/` - Shared React components
- `public/` - Static assets

## Additional Guidelines

- Avoid `console.log` in production paths
- Use semantic HTML (`<button>`, not clickable `<div>`)
- Provide `alt` text for all images
- Ensure keyboard navigation support
- Keep components focused; avoid monolithic files
- Do not commit `.env*` or secrets
- Remove dead code and unused imports
