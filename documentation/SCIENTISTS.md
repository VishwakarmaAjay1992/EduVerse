# Scientist collection

The scientist section is intentionally data-driven. The directory and profile routes do not need a new page component for each person.

## Add another scientist

1. Open `src/data/scientists.ts`.
2. Add one object to the end of the `SCIENTISTS` array.
3. Use a unique sequential `rank` and URL-safe `slug`.
4. Complete every research field, including at least three authoritative sources.
5. Add a portrait and an original document, instrument, prototype or clearly labelled replica from Wikimedia Commons or another source that permits reuse.
6. Include the image creator or collection, licence and source page. Do not enter only the direct image URL.
7. Run `npm run lint`, `npm run typecheck`, `npm run test` and `npm run build`.

The following update automatically after a data entry is added:

- Scientist directory cards
- Search and field filters
- Individual profile route
- Previous and next navigation
- Static route generation
- Homepage and collection counts where applicable

## Editorial checklist

- Prefer primary and institutional sources: museums, archives, universities, scientific societies and prize institutions.
- Separate discovery from later engineering, manufacturing or clinical development.
- Credit collaborators and predecessors when the historical record requires it.
- Do not describe a replica as an original prototype.
- Avoid claims such as “invented first” unless an authoritative source supports the exact wording.
- Use original educational summaries rather than copying source text.
- Verify dates, units, names and image licences before publishing.
