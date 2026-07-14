-- ============================================================================
-- EduVerse — Phase 2.5B MIGRATION: Knowledge Engine upgrade
-- ADDITIVE ONLY. Extends the Phase 2 schema (eduverse-schema.sql).
-- Nothing is dropped or restructured. The only changes to existing tables are
-- backward-compatible column ADDs with defaults. Safe to run once, in order,
-- against a Phase 2 database.
--
-- Design rules carried over from Phase 2 and Part A:
--   * Subjects are ROWS. Kinds are ROWS. No Mathematics/Physics tables.
--   * A "Knowledge Object" = any row addressable by (entity_type_id, entity_id).
--     Identity is convention, reusing the pattern already used by tags,
--     bookmarks and search_documents. We do NOT duplicate objects into a
--     central table — we register their TYPES and link them with a graph.
-- ============================================================================

BEGIN;

-- Optional but recommended for AI-readiness (semantic search). If the host
-- lacks pgvector, comment out this line and the embeddings table below.
CREATE EXTENSION IF NOT EXISTS vector;

-- ===========================================================================
-- SECTION 1 — OBJECT TYPE REGISTRY (extend, don't replace, entity_types)
-- ===========================================================================
-- entity_types already exists (Phase 2) and already keys tags/bookmarks/search.
-- We enrich it so it doubles as the Knowledge Object Type registry.
ALTER TABLE entity_types
  ADD COLUMN IF NOT EXISTS name         text,
  ADD COLUMN IF NOT EXISTS category     text NOT NULL DEFAULT 'content',   -- structural|knowledge|assessment|media|reference|people|content
  ADD COLUMN IF NOT EXISTS is_graph_node boolean NOT NULL DEFAULT true,     -- can it be a node in knowledge_edges?
  ADD COLUMN IF NOT EXISTS renderer_key text;                              -- frontend component hint

-- Register the NEW physical object tables introduced below (INSERTs, no DDL churn).
INSERT INTO entity_types (slug, name, category) VALUES
  ('subject',          'Subject',          'structural'),
  ('unit',             'Unit',             'reference'),
  ('constant',         'Constant',         'reference'),
  ('reference',        'Reference',        'reference'),
  ('learning_outcome', 'Learning Outcome', 'content')
ON CONFLICT (slug) DO NOTHING;

-- Backfill names for pre-existing types (cosmetic, safe).
UPDATE entity_types SET name = initcap(replace(slug,'_',' ')) WHERE name IS NULL;

-- Widen the knowledge_items vocabulary (statement-like objects share one table).
-- 'unit','constant','reference' get dedicated tables instead (richer structure).
INSERT INTO knowledge_types (slug) VALUES
  ('equation'),('proof'),('experiment'),('concept')
ON CONFLICT (slug) DO NOTHING;

-- Media sub-kind for interactive simulations authored as specs.
INSERT INTO media_types (slug) VALUES ('simulation_spec')
ON CONFLICT (slug) DO NOTHING;

-- Block kinds needed by the universal lesson template (from the Math module).
INSERT INTO block_types (slug) VALUES
  ('introduction'),('scientist_ref'),('proof'),('interactive_graph'),
  ('practice_set'),('mcq_set'),('common_mistakes'),('summary'),('references'),
  ('constant_ref'),('unit_ref'),('experiment_ref'),('concept_ref')
ON CONFLICT (slug) DO NOTHING;

-- ===========================================================================
-- SECTION 2 — DIFFICULTY LEVELS (kind-as-data lookup)
-- ===========================================================================
CREATE TABLE IF NOT EXISTS difficulty_levels (
  id    smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug  text NOT NULL UNIQUE,      -- 'foundational','easy','intermediate','advanced','university'
  label text NOT NULL,
  rank  smallint NOT NULL UNIQUE CHECK (rank BETWEEN 1 AND 5)
);
INSERT INTO difficulty_levels (slug, label, rank) VALUES
  ('foundational','Foundational',1),('easy','Easy',2),
  ('intermediate','Intermediate',3),('advanced','Advanced',4),
  ('university','University',5)
ON CONFLICT (slug) DO NOTHING;
-- Existing smallint difficulty columns (1-5) map onto rank; no destructive change.

-- ===========================================================================
-- SECTION 3 — RELATIONSHIP VOCABULARY  ("Knowledge Relationships")
-- ===========================================================================
CREATE TABLE IF NOT EXISTS relation_types (
  id           smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug         text NOT NULL UNIQUE,
  name         text NOT NULL,
  inverse_slug text,              -- human label when traversed backward
  symmetric    boolean NOT NULL DEFAULT false,
  category     text NOT NULL DEFAULT 'semantic'  -- structural|semantic|attribution|pedagogical
);
INSERT INTO relation_types (slug, name, inverse_slug, symmetric, category) VALUES
  ('part_of',       'is part of',        'has_part',         false,'structural'),
  ('references',    'references',        'referenced_by',    false,'semantic'),
  ('defines',       'defines',           'defined_by',       false,'semantic'),
  ('proves',        'proves',            'proven_by',        false,'semantic'),
  ('expresses',     'expresses',         'expressed_by',     false,'semantic'),
  ('uses_formula',  'uses formula',      'used_in',          false,'semantic'),
  ('discovered_by', 'discovered by',     'discovered',       false,'attribution'),
  ('has_unit',      'has unit',          'unit_of',          false,'semantic'),
  ('has_constant',  'has constant',      'constant_in',      false,'semantic'),
  ('depends_on',    'depends on',        'prerequisite_for', false,'pedagogical'),
  ('example_of',    'is example of',     'has_example',      false,'pedagogical'),
  ('illustrated_by','illustrated by',    'illustrates',      false,'semantic'),
  ('simulated_by',  'simulated by',      'simulates',        false,'semantic'),
  ('assessed_by',   'assessed by',       'assesses',         false,'pedagogical'),
  ('cites',         'cites',             'cited_by',         false,'reference'),
  ('applies_to',    'applies to',        'applied_in',       false,'semantic'),
  ('related_to',    'related to',        'related_to',       true, 'semantic')
ON CONFLICT (slug) DO NOTHING;

-- ===========================================================================
-- SECTION 4 — THE KNOWLEDGE GRAPH  ("Knowledge Links")
-- ===========================================================================
-- One generic edge table. Nodes are existing rows addressed by (type,id).
-- Same polymorphic shape as taggings/bookmarks — idiomatic to the schema.
CREATE TABLE IF NOT EXISTS knowledge_edges (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  from_type_id  smallint NOT NULL REFERENCES entity_types(id),
  from_id       uuid     NOT NULL,
  relation_id   smallint NOT NULL REFERENCES relation_types(id),
  to_type_id    smallint NOT NULL REFERENCES entity_types(id),
  to_id         uuid     NOT NULL,
  weight        numeric(5,3) NOT NULL DEFAULT 1.0,   -- ranking strength
  origin        text NOT NULL DEFAULT 'authored'
                CHECK (origin IN ('authored','derived','structural')),
  metadata      jsonb NOT NULL DEFAULT '{}',
  created_by    uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at    timestamptz NOT NULL DEFAULT now(),
  UNIQUE (from_type_id, from_id, relation_id, to_type_id, to_id),
  CHECK (NOT (from_type_id = to_type_id AND from_id = to_id))   -- no self loops
);
CREATE INDEX IF NOT EXISTS knowledge_edges_from_idx
  ON knowledge_edges(from_type_id, from_id, relation_id);   -- forward traversal
CREATE INDEX IF NOT EXISTS knowledge_edges_to_idx
  ON knowledge_edges(to_type_id, to_id, relation_id);       -- reverse traversal
CREATE INDEX IF NOT EXISTS knowledge_edges_relation_idx
  ON knowledge_edges(relation_id);

-- ===========================================================================
-- SECTION 5 — RICH REFERENCE OBJECTS (cross-subject, no subject_id)
-- ===========================================================================
-- Units: symbol, dimension, SI base — queryable structured data, not prose.
CREATE TABLE IF NOT EXISTS units (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text NOT NULL UNIQUE,          -- 'newton','metre','kilogram'
  name        text NOT NULL,
  symbol      text NOT NULL,                 -- 'N','m','kg'
  quantity    text,                          -- 'force','length','mass'
  dimension   text,                          -- 'M L T^-2'
  si_base     boolean NOT NULL DEFAULT false,
  metadata    jsonb NOT NULL DEFAULT '{}',   -- conversions, aliases
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Constants: numeric value + uncertainty + a unit reference (fix-once reuse).
CREATE TABLE IF NOT EXISTS constants (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text NOT NULL UNIQUE,          -- 'speed-of-light','planck','G'
  name        text NOT NULL,
  symbol      text,                          -- 'c','h','G'
  value       numeric,                       -- 299792458
  uncertainty numeric,
  unit_id     uuid REFERENCES units(id) ON DELETE SET NULL,
  exact       boolean NOT NULL DEFAULT false,
  metadata    jsonb NOT NULL DEFAULT '{}',
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- References/citations: reusable across lessons, objects, subjects.
CREATE TABLE IF NOT EXISTS reference_sources (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text NOT NULL UNIQUE,
  ref_type    text NOT NULL DEFAULT 'book'
              CHECK (ref_type IN ('book','paper','article','web','video','course','other')),
  title       text NOT NULL,
  authors     text,
  year        int,
  publisher   text,
  url         text,
  doi         text,
  metadata    jsonb NOT NULL DEFAULT '{}',
  created_at  timestamptz NOT NULL DEFAULT now()
);
-- (entity_type slug 'reference' registered above points at reference_sources.)

-- ===========================================================================
-- SECTION 6 — LEARNING OUTCOMES (reusable, attach to any object)
-- ===========================================================================
CREATE TABLE IF NOT EXISTS learning_outcomes (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_type_id  smallint NOT NULL REFERENCES entity_types(id),  -- usually lesson/topic
  owner_id       uuid NOT NULL,
  statement      text NOT NULL,          -- "The learner will be able to ..."
  bloom_level    text,                   -- remember|understand|apply|analyze|evaluate|create
  sort_order     int NOT NULL DEFAULT 0,
  created_at     timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS learning_outcomes_owner_idx
  ON learning_outcomes(owner_type_id, owner_id);
-- Prerequisites are modeled as knowledge_edges(relation='depends_on'),
-- so they are traversable (learning paths) rather than a static list.

-- ===========================================================================
-- SECTION 7 — CMS: VERSIONING + AUDIT
-- ===========================================================================
-- Generic version history for ANY object (lesson, knowledge_item, unit, ...).
CREATE TABLE IF NOT EXISTS object_versions (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type_id smallint NOT NULL REFERENCES entity_types(id),
  entity_id      uuid NOT NULL,
  version_no     int NOT NULL,
  snapshot       jsonb NOT NULL,          -- full serialized state at this version
  status         text NOT NULL DEFAULT 'draft'
                 CHECK (status IN ('draft','in_review','published','archived')),
  change_note    text,
  author_id      uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (entity_type_id, entity_id, version_no)
);
CREATE INDEX IF NOT EXISTS object_versions_entity_idx
  ON object_versions(entity_type_id, entity_id, version_no DESC);

-- Audit trail for every CMS mutation (who/what/before/after).
CREATE TABLE IF NOT EXISTS audit_log (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id       uuid REFERENCES users(id) ON DELETE SET NULL,
  action         text NOT NULL,          -- 'create','update','delete','publish','link'
  entity_type_id smallint REFERENCES entity_types(id),
  entity_id      uuid,
  before         jsonb,
  after          jsonb,
  created_at     timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS audit_log_entity_idx ON audit_log(entity_type_id, entity_id);
CREATE INDEX IF NOT EXISTS audit_log_actor_idx  ON audit_log(actor_id, created_at DESC);

-- ===========================================================================
-- SECTION 8 — AI-READY TABLES
-- ===========================================================================
-- 8a. Embeddings for semantic + graph-augmented search (one row per object).
CREATE TABLE IF NOT EXISTS embeddings (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type_id smallint NOT NULL REFERENCES entity_types(id),
  entity_id      uuid NOT NULL,
  model          text NOT NULL,           -- e.g. 'text-embedding-3-small'
  embedding      vector(1536),            -- dimension configurable per model
  content_hash   text,                    -- skip re-embed if unchanged
  created_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (entity_type_id, entity_id, model)
);
-- Approximate-nearest-neighbour index (HNSW) for fast vector search.
CREATE INDEX IF NOT EXISTS embeddings_vec_idx
  ON embeddings USING hnsw (embedding vector_cosine_ops);
CREATE INDEX IF NOT EXISTS embeddings_entity_idx
  ON embeddings(entity_type_id, entity_id);

-- 8b. Learning event stream — backbone for analytics, recommendations, tutor.
-- Partitioned by month; create partitions as time advances.
CREATE TABLE IF NOT EXISTS learning_events (
  id             uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id        uuid REFERENCES users(id) ON DELETE SET NULL,
  entity_type_id smallint REFERENCES entity_types(id),
  entity_id      uuid,
  event_type     text NOT NULL,           -- 'view','complete','answer','search','bookmark','hint'
  payload        jsonb NOT NULL DEFAULT '{}',
  created_at     timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id, created_at)
) PARTITION BY RANGE (created_at);
CREATE TABLE IF NOT EXISTS learning_events_default
  PARTITION OF learning_events DEFAULT;
CREATE INDEX IF NOT EXISTS learning_events_user_idx
  ON learning_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS learning_events_entity_idx
  ON learning_events(entity_type_id, entity_id);

-- 8c. Per-user knowledge state (mastery / knowledge tracing / spaced repetition).
-- Powers personalized learning, the AI tutor, adaptive review scheduling.
CREATE TABLE IF NOT EXISTS user_knowledge_state (
  user_id        uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entity_type_id smallint NOT NULL REFERENCES entity_types(id),  -- concept/knowledge_item/lesson
  entity_id      uuid NOT NULL,
  mastery        numeric(4,3) NOT NULL DEFAULT 0,   -- 0..1 estimated mastery
  confidence     numeric(4,3) NOT NULL DEFAULT 0,   -- model confidence
  attempts       int NOT NULL DEFAULT 0,
  last_seen_at   timestamptz,
  review_due_at  timestamptz,                        -- spaced repetition scheduler
  updated_at     timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, entity_type_id, entity_id)
);
CREATE INDEX IF NOT EXISTS uks_due_idx
  ON user_knowledge_state(user_id, review_due_at);

-- ===========================================================================
-- SECTION 9 — STRUCTURAL BACK-FILL (seed the graph from EXISTING data)
-- ===========================================================================
-- This is the compatibility bridge: the graph starts connected on day one by
-- projecting relationships already stored in Phase 2 tables into edges.
-- (Resolve entity_type ids by slug so this is portable.)

-- 9a. content tree parent -> part_of
INSERT INTO knowledge_edges (from_type_id, from_id, relation_id, to_type_id, to_id, origin)
SELECT (SELECT id FROM entity_types WHERE slug='content_node'),
       n.id,
       (SELECT id FROM relation_types WHERE slug='part_of'),
       (SELECT id FROM entity_types WHERE slug='content_node'),
       n.parent_id,
       'structural'
FROM content_nodes n
WHERE n.parent_id IS NOT NULL
ON CONFLICT DO NOTHING;

-- 9b. lesson_knowledge -> references
INSERT INTO knowledge_edges (from_type_id, from_id, relation_id, to_type_id, to_id, origin)
SELECT (SELECT id FROM entity_types WHERE slug='lesson'),
       lk.lesson_id,
       (SELECT id FROM relation_types WHERE slug='references'),
       (SELECT id FROM entity_types WHERE slug='knowledge_item'),
       lk.knowledge_item_id,
       'structural'
FROM lesson_knowledge lk
ON CONFLICT DO NOTHING;

-- 9c. scientist_contributions -> discovered_by (knowledge_item -> scientist)
INSERT INTO knowledge_edges (from_type_id, from_id, relation_id, to_type_id, to_id, origin)
SELECT (SELECT id FROM entity_types WHERE slug='knowledge_item'),
       sc.knowledge_item_id,
       (SELECT id FROM relation_types WHERE slug='discovered_by'),
       (SELECT id FROM entity_types WHERE slug='scientist'),
       sc.scientist_id,
       'structural'
FROM scientist_contributions sc
ON CONFLICT DO NOTHING;

-- 9d. questions scoped to a node -> assessed_by (node <- question)
INSERT INTO knowledge_edges (from_type_id, from_id, relation_id, to_type_id, to_id, origin)
SELECT (SELECT id FROM entity_types WHERE slug='content_node'),
       q.node_id,
       (SELECT id FROM relation_types WHERE slug='assessed_by'),
       (SELECT id FROM entity_types WHERE slug='question'),
       q.id,
       'structural'
FROM questions q
WHERE q.node_id IS NOT NULL
ON CONFLICT DO NOTHING;

COMMIT;

-- ============================================================================
-- POST-MIGRATION NOTES
-- ----------------------------------------------------------------------------
-- * The existing junction tables (lesson_knowledge, scientist_contributions)
--   remain the systems of record; the graph is a projected + authored layer.
-- * knowledge_items.subject_id stays NOT NULL for subject-owned items. Truly
--   cross-subject objects (units, constants, references, scientists) live in
--   their own subject-less tables and attach to subjects via
--   knowledge_edges(relation='applies_to'). If cross-subject knowledge_items
--   are later needed, relax that column in a separate, explicit migration.
-- * learning_events: add monthly partitions ahead of time, e.g.
--     CREATE TABLE learning_events_2026_08 PARTITION OF learning_events
--       FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');
-- * embeddings: set vector dimension to match your chosen model; rebuild the
--   HNSW index if you change models.
-- ============================================================================
