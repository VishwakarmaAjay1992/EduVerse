# Vercel invention diagram tuple type fix

The production build failed because `ProcessDiagram` accepted `string[][]`, so TypeScript correctly treated destructured values as `string | undefined`.

Fixes:
- Changed `stages` to `Array<[string, string]>`
- Changed `insights` to `Array<[string, string]>`
- Explicitly typed the telephone and automobile stage arrays as fixed two-value tuples

This guarantees every diagram row contains both a label and description.
