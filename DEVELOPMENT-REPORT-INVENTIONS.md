# Inventions Foundation — Steam Engine Stage

## Implemented

- Data-driven invention registry and TypeScript schema
- `/inventions` searchable and filterable directory
- `/inventions/steam-engine` statically generated article route
- Reusable invention cards, hero, information panel, contributor profiles, article sections, credited images, working-principle steps, components, cutaway, timeline, comparison, facts, references, related links, previous/next navigation, and mobile/desktop tables of contents
- Original local responsive SVG cutaway with accessible title and description
- Navigation, sitemap, SEO metadata, and Learning Hub gateway integration
- Unit test and extension documentation

## Image status

The original SVG cutaway is bundled at `public/inventions/steam-engine/steam-engine-cutaway.svg`.

Optional historical and modern photographs are not bundled because an item-level licence could not be safely selected during this stage. The exact metadata slots and candidate source collections are included in `src/data/inventions/steam-engine.ts`; adding a photograph without a verified licence would be less safe than leaving the optional slot intentionally empty.

## Verification status

Static content, route-file, required-person, required-component, local-asset, SVG accessibility, and internal-reference checks passed.

A full `npm ci`, lint, typecheck, unit-test and Next.js production build could not be run because the environment's npm package gateway returned HTTP 503 for required packages. The failure occurred before dependency installation and is not a reported application-code error. Run the following when the registry is available:

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
```
