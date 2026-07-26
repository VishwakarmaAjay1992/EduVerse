# Vercel Build Fix — Linear Equations Question Bank

## Error corrected

Vercel failed during strict TypeScript validation because `noUncheckedIndexedAccess` treats ordinary array access such as `points[0]` and `points[1]` as possibly `undefined`, even after checking `points.length >= 2`.

## Changes

- Updated `src/components/figures/linear-question-diagram.tsx` to read the first two points into variables and verify both before returning the line segment tuple.
- Updated the Fisher–Yates shuffle in `src/components/interactive/solved-question-bank.tsx` to guard indexed array values before swapping them.
- Declared assertion–reason options as a fixed four-item tuple in `src/data/linear-equations-question-bank-1-mark.ts`, preventing the same strict-indexing error for `arOptions[0]` and `arOptions[1]`.

## Validation

- Question-bank data files passed strict TypeScript checking with `noUncheckedIndexedAccess` enabled.
- The two new TSX components passed targeted strict TypeScript checking.
