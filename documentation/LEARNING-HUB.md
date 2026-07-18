# EduVerse Learning Hub

The Learning Hub organizes 25 extended learning experiences into five collections:

- **Learn** — structured lessons and study paths
- **Explore** — discoveries, inventions, space and open questions
- **Tools** — formula, graph, conversion and calculation tools
- **Practice** — challenges, quizzes, puzzles and feedback
- **Resources** — reference and language support

## Routes

- Directory: `/learning-hub`
- Detail template: `/learning-hub/[slug]`

All entries are generated from `src/data/learning-hub.ts`. In-depth reading collections are stored in `src/data/feature-guides.ts`, and the complete element list is in `src/data/periodic-elements.ts`. Reusable directory, icon and interactive-experience components are stored in `src/components/learning-hub`.

The completed hub includes:

- Three virtual laboratories for motion, density and waves
- Six formula models, eleven unit conversions and ten science calculators
- Linear, quadratic and sine graph exploration
- All 118 IUPAC elements with search and family filters
- Ten daily/quiz questions, five prediction activities and five puzzle rooms
- Ten myth corrections, thirty dictionary terms and four mistake-diagnosis cases
- Eight research-led reading collections with three detailed topics each
- Guided study routes, bilingual terminology and three downloadable PDF packs

## Add another experience

1. Add one `HubFeature` object to `HUB_FEATURES` in `src/data/learning-hub.ts`.
2. Use a unique lowercase hyphenated `slug`.
3. Assign one existing `HubGroup` and icon key.
4. Provide at least four learning outcomes, one collection and related valid slugs.
5. If it is interactive, add a matching case and component in `feature-experience.tsx`.
6. Run `npm run typecheck`, `npm test` and `npm run build`.

The detail route and directory card are generated automatically.
