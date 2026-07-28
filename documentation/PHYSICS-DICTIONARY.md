# EduVerse Physics Dictionary

## Included in this release

- 1,000 unique physics concepts across 26 subject areas.
- 308 new concepts added in advanced mechanics, aerodynamics, materials, electronics, photonics, particle physics, plasma physics, geophysics and medical physics.
- Searchable dictionary index at `/physics-dictionary`.
- One permanent page for every term at `/physics-dictionary/[slug]`.
- Definition, extended context, formula, SI unit and aliases where applicable.
- High-interest concept filter based on common curriculum and learner search intent.
- Related concept navigation.
- Automatic matching to existing EduVerse Physics lessons.
- Universal Search integration under the `Physics concept` result type.
- Header, homepage and Physics subject-page entry points.
- Sitemap entries and `DefinedTerm` structured data.

## Coverage added in the 1,000-concept expansion

- Advanced Mechanics and Continuum Physics
- Fluid Dynamics and Aerodynamics
- Materials and Solid-State Physics
- Electronics and Semiconductor Devices
- Electromagnetic Waves, RF and Photonics
- Particle Physics and Field Theory
- Plasma Physics
- Geophysics, Atmospheric and Environmental Physics
- Medical and Biological Physics

## Important content note

`high-interest` identifies common school, university and general-learning search intent. It is not presented as measured Google keyword volume. Exact search-volume prioritization should later be refined using the site's Google Search Console query data.

## Content source and editing

The deployed content file is:

```text
src/data/physics-dictionary.json
```

The original 692-entry generator is:

```text
scripts/generate_physics_dictionary.py
```

The reproducible 1,000-entry expansion is:

```text
scripts/expand_physics_dictionary_to_1000.py
```

To rebuild the dictionary from the original source and then apply this expansion:

```bash
python scripts/generate_physics_dictionary.py
python scripts/expand_physics_dictionary_to_1000.py
```

To add concepts beyond 1,000 later, extend the structured rows in the expansion script or add a new versioned expansion script. Keep every slug unique and ensure each `relatedTerms` slug exists.

Avoid the `|` character inside definitions or formulas because it is the generator field delimiter. Use `abs(...)` for absolute-value notation in generator source.
