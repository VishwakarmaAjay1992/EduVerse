# Electromagnetic Waves Build Fix

Fixed the two `react/no-unescaped-entities` lint failures reported by the Vercel production build in:

- `src/components/interactive/electromagnetic-wave-explorer.tsx`

Corrections:

- `one photon's energy` → `one photon&apos;s energy`
- `Snell's law` → `Snell&apos;s law`

Validation performed:

- TypeScript TSX transpilation of the corrected component: passed with zero syntax diagnostics.
- Project-wide JSX text scan for raw apostrophes: zero remaining matches.
- ZIP integrity test: passed.

A full local Next.js build was not rerun because dependency installation did not complete in the available package environment. The user-provided Vercel log confirmed that compilation had already succeeded and failed only on these two ESLint violations.
