# EduVerse Physics Dictionary

## Included in this release

- 692 unique physics concepts across 17 subject areas.
- Searchable dictionary index at `/physics-dictionary`.
- One permanent page for every term at `/physics-dictionary/[slug]`.
- Definition, extended context, formula, SI unit and aliases where applicable.
- High-interest concept filter based on common curriculum and learner search intent.
- Related concept navigation.
- Automatic matching to existing EduVerse Physics lessons.
- Universal Search integration under the `Physics concept` result type.
- Header, homepage and Physics subject-page entry points.
- Sitemap entries and `DefinedTerm` structured data.

## Important content note

`high-interest` identifies common school, university and general-learning search intent. It is not presented as measured Google keyword volume. Exact search-volume prioritization should later be refined using the site's Google Search Console query data.

## Content source and editing

The generated content file is:

```text
src/data/physics-dictionary.json
```

The reproducible generator is:

```text
scripts/generate_physics_dictionary.py
```

To add a term, place it in the appropriate category block using:

```text
Title|Definition|Formula|Unit|alias one;alias two
```

Then run:

```bash
python scripts/generate_physics_dictionary.py
```

Avoid the `|` character inside definitions or formulas because it is the generator field delimiter. Use `abs(...)` for absolute value notation in the source file.
