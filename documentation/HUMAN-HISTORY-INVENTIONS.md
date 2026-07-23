# Human History Inventions

The invention-history collection lives at `/inventions`. The collection includes complete dossiers for:

- `/inventions/steam-engine`
- `/inventions/printing-press`
- `/inventions/electrical-telegraph`
- `/inventions/electric-light`
- `/inventions/airplane`

Each dossier follows the same research structure: necessity, earlier methods, global prior art, contributors, experiments and failures, milestones, working principle, anatomy, later improvements, real historical objects, consequences, modern descendants, myths, glossary, research questions and selected sources.

## Add another invention

1. Open `src/data/inventions.ts`.
2. Create a new object that satisfies the `Invention` type.
3. Add it to the exported `INVENTIONS` array.
4. Use Wikimedia Commons file names and include creator, licence, source URL, caption and accurate alternative text for every image.
5. Prefer museums, libraries, archives, UNESCO records and peer-reviewed or institutional sources.
6. Distinguish documented failures from reasonable historical reconstruction using the `evidence` field.

The collection landing page, search, dynamic route generation, homepage cards and sitemap all read from `INVENTIONS`, so a correctly structured record is automatically integrated throughout the website.

## Editorial standard

Avoid single-genius narratives. Separate the original need from the final system, identify collaborators and enabling industries, distinguish invention from commercialization, explain limitations and harms, and make uncertain claims explicit.
