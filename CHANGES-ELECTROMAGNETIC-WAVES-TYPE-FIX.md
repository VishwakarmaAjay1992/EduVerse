# Electromagnetic Waves TypeScript Build Fix

## Vercel error resolved

File:

`src/components/interactive/electromagnetic-wave-explorer.tsx`

The `CommunicationLab` component previously rendered values directly from:

```tsx
stages[active][0]
stages[active][1]
```

With `noUncheckedIndexedAccess` enabled, TypeScript correctly treats `stages[active]` as potentially undefined because `active` is a runtime number.

The component now resolves the selected stage safely:

```tsx
const activeStage = stages[active] ?? stages[0];
```

and renders:

```tsx
activeStage[0]
activeStage[1]
```

This preserves the existing interface while providing a guaranteed fallback.

## Validation

- Targeted strict-null TypeScript check with `noUncheckedIndexedAccess`: passed.
- Corrected component syntax check: passed.
- Previous apostrophe lint fixes remain included.
- ZIP integrity check: passed.
- `node_modules` and `.next` are excluded.
