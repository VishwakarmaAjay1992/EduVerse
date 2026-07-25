# Ray Optics Build Fix

Fixed the TypeScript build failure in:

`src/components/interactive/ray-optics-explorer.tsx`

## Changes

- Replaced JSX text containing `P_{eq}` and `f_{eq}` with semantic HTML subscript elements so React no longer interprets `{eq}` as a JavaScript expression.
- Corrected a malformed hidden control character in the glass-slab approximation formula.

## Validation

- Targeted TypeScript validation with strict checking and `noUncheckedIndexedAccess`: passed.
- No remaining `_ {identifier}`-style JSX formula expressions were found in the Ray Optics component.
- Full dependency-backed Next.js build was not rerun locally because `npm ci` did not complete within the available environment time.
