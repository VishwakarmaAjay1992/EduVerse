# Inventions in Human History

The inventions collection is a statically generated, data-driven section.

## Add the next invention

1. Copy `src/data/inventions/steam-engine.ts` to a new file named for the invention slug.
2. Complete every field defined in `src/data/inventions/types.ts`.
3. Add locally licensed images under `public/inventions/<slug>/` and record creator, source, licence, caption and alternative text in the data file.
4. Create an original diagram where a technical cutaway is useful.
5. Import the new record in `src/data/inventions/index.ts` and append it to `INVENTIONS`.
6. Add reciprocal `relatedInventions` slugs where relevant.
7. Extend `tests/unit/inventions.test.ts` if the new invention needs special validation.

The `/inventions` directory, `/inventions/[slug]` route, sitemap, filters, related links and previous/next navigation all derive from `INVENTIONS` automatically.

## Image policy

Prefer local public-domain or Creative Commons files from museums, archives or Wikimedia Commons. Verify the licence on the specific item page before bundling a file. Do not rely on a collection search page as proof of an individual image licence. Original EduVerse SVGs must be labelled as educational illustrations and should not imitate a copyrighted diagram.
