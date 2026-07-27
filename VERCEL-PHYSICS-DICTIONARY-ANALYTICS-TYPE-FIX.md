# Physics Dictionary Analytics Type Build Fix

## Vercel error

The production build failed while type-checking `src/components/physics-dictionary-experience.tsx` because the Physics Dictionary emitted two analytics event names that were not included in the `AnalyticsEvent` string union.

## Fix applied

Added these events to `src/lib/analytics.ts`:

- `physics_dictionary_search`
- `physics_dictionary_term_opened`

Also removed the unused `cn` import from `src/components/search-experience.tsx`.

## Validation

- Every `trackEvent(...)` string used in `src` is now included in `AnalyticsEvent`.
- 359 TypeScript/TSX source files transpile with zero syntax diagnostics.
- A complete local Next.js build could not be run because the package registry returned HTTP 503 during dependency installation.
