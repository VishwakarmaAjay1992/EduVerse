-- ============================================================================
-- EduVerse — Production PostgreSQL Schema (v1.0)
-- Subject-agnostic educational platform.
-- Design rules:
--   1. No subject-specific tables. Subjects are ROWS in `subjects`.
--   2. Content "kinds" (node types, block types, knowledge types, media types,
--      question types, entity types) are LOOKUP TABLES, so new kinds are
--      INSERTs — never ALTER TABLE / ALTER TYPE.
--   3. Flexible per-kind fields live in validated JSONB `payload` columns.
--   4. Fully normalized core (3NF); JSONB used only for kind-specific
--      attributes that would otherwise force sparse columns.
-- Requires: PostgreSQL 14+
-- ============================================================================

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;   -- gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS pg_trgm;    -- trigram search (autocomplete)
CREATE EXTENSION IF NOT EXISTS unaccent;   -- diacritics-insensitive search

-- ---------------------------------------------------------------------------
-- 0. Shared trigger: keep updated_at fresh
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END $$ LANGUAGE plpgsql;

-- ===========================================================================
-- SECTION A — IDENTITY & ACCESS
-- ===========================================================================

CREATE TABLE roles (
  id          smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug        text NOT NULL UNIQUE,          -- 'student','teacher','reviewer','moderator','admin','super_admin'
  name        text NOT NULL,
  description text,
  permissions jsonb NOT NULL DEFAULT '[]'    -- ["content.create","content.publish",...]
);

CREATE TABLE users (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email         citext,                       -- see note; if citext ext unavailable use text + lower index
  email_norm    text GENERATED ALWAYS AS (lower(email::text)) STORED,
  password_hash text,                         -- Argon2id digest; NULL for OAuth-only accounts
  display_name  text NOT NULL,
  avatar_media_id uuid,                       -- FK added after media_assets exists
  locale        text NOT NULL DEFAULT 'en',
  status        text NOT NULL DEFAULT 'active'
                CHECK (status IN ('active','suspended','deleted')),
  settings      jsonb NOT NULL DEFAULT '{}',  -- theme, font size, reduced motion...
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX users_email_uq ON users(email_norm) WHERE email IS NOT NULL;
CREATE TRIGGER users_touch BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- A user may hold a role globally (subject_id NULL) or scoped to one subject.
CREATE TABLE user_roles (
  user_id    uuid    NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_id    smallint NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  subject_id uuid,                             -- FK added after subjects exists
  granted_by uuid REFERENCES users(id),
  granted_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, role_id, subject_id)
);

-- ===========================================================================
-- SECTION B — SUBJECT REGISTRY & GENERIC CONTENT TREE
-- ===========================================================================

CREATE TABLE subjects (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text NOT NULL UNIQUE,            -- 'mathematics','physics','biology',...
  name        text NOT NULL,
  description text,
  icon        text,                            -- icon key
  theme       jsonb NOT NULL DEFAULT '{}',     -- {"primary":"#0EA5E9","accent":...}
  sort_order  int  NOT NULL DEFAULT 0,
  status      text NOT NULL DEFAULT 'draft'
              CHECK (status IN ('draft','published','archived')),
  metadata    jsonb NOT NULL DEFAULT '{}',
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);
CREATE TRIGGER subjects_touch BEFORE UPDATE ON subjects
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

ALTER TABLE user_roles
  ADD CONSTRAINT user_roles_subject_fk
  FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE;

-- Node kinds are DATA: category, chapter, topic today; 'skill','module',
-- 'level'... tomorrow — inserted, never migrated.
CREATE TABLE node_types (
  id    smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug  text NOT NULL UNIQUE,                  -- 'category','chapter','topic'
  name  text NOT NULL,
  depth_hint int                                -- suggested tree depth (1,2,3)
);

-- ONE self-referencing tree serves every subject at any depth.
-- Categories, Chapters and Topics are ROWS of this table, not tables.
CREATE TABLE content_nodes (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id   uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  parent_id    uuid REFERENCES content_nodes(id) ON DELETE CASCADE,
  node_type_id smallint NOT NULL REFERENCES node_types(id),
  slug         text NOT NULL,
  title        text NOT NULL,
  description  text,
  sort_order   int  NOT NULL DEFAULT 0,
  level_tag    text,                           -- 'beginner','intermediate','advanced','university'
  status       text NOT NULL DEFAULT 'draft'
               CHECK (status IN ('draft','published','archived')),
  metadata     jsonb NOT NULL DEFAULT '{}',
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE (subject_id, parent_id, slug)
);
CREATE INDEX content_nodes_parent_idx  ON content_nodes(parent_id, sort_order);
CREATE INDEX content_nodes_subject_idx ON content_nodes(subject_id, node_type_id);
CREATE TRIGGER content_nodes_touch BEFORE UPDATE ON content_nodes
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ===========================================================================
-- SECTION C — MEDIA (Images, Videos, Animations = rows, not tables)
-- ===========================================================================

CREATE TABLE media_types (
  id   smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE                    -- 'image','video','animation','svg','audio','pdf'
);

CREATE TABLE media_assets (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  media_type_id smallint NOT NULL REFERENCES media_types(id),
  storage_key   text NOT NULL,                 -- object-store key or CDN path
  mime_type     text NOT NULL,
  title         text,
  alt_text      text,                          -- REQUIRED for images at app layer (a11y)
  caption       text,
  width_px      int,
  height_px     int,
  duration_s    numeric(8,2),                  -- video/audio/animation
  byte_size     bigint,
  checksum_sha256 text,
  metadata      jsonb NOT NULL DEFAULT '{}',   -- e.g. {"loop":true,"poster":"...","frames":...}
  uploaded_by   uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at    timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX media_assets_type_idx ON media_assets(media_type_id);

ALTER TABLE users
  ADD CONSTRAINT users_avatar_fk
  FOREIGN KEY (avatar_media_id) REFERENCES media_assets(id) ON DELETE SET NULL;

-- ===========================================================================
-- SECTION D — KNOWLEDGE ITEMS (Formulas, Laws, Theorems, Definitions,
--             Examples = rows of ONE reusable table)
-- ===========================================================================

CREATE TABLE knowledge_types (
  id   smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE                    -- 'formula','law','theorem','definition','example','principle'
);

CREATE TABLE knowledge_items (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id        uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  knowledge_type_id smallint NOT NULL REFERENCES knowledge_types(id),
  slug              text NOT NULL,
  title             text NOT NULL,             -- "Pythagorean Theorem", "Ohm's Law"
  statement         text NOT NULL,             -- plain-language statement (also a11y text)
  payload           jsonb NOT NULL DEFAULT '{}',
      -- formula:    {"latex":"a^2+b^2=c^2","variables":[{"sym":"a","meaning":"leg"}],"units":"..."}
      -- law:        {"latex":"F=ma","conditions":"...","limitations":"..."}
      -- theorem:    {"latex":"...","proof_sketch":"...","corollaries":[...]}
      -- definition: {"term":"Derivative","notation":"f'(x)"}
      -- example:    {"problem":"...","solution_steps":[...],"answer":"..."}
  difficulty        smallint CHECK (difficulty BETWEEN 1 AND 5),
  status            text NOT NULL DEFAULT 'draft'
                    CHECK (status IN ('draft','published','archived')),
  created_by        uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now(),
  UNIQUE (subject_id, knowledge_type_id, slug)
);
CREATE INDEX knowledge_items_subject_type_idx
  ON knowledge_items(subject_id, knowledge_type_id, status);
CREATE TRIGGER knowledge_items_touch BEFORE UPDATE ON knowledge_items
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Scientists are people (real entity), shared across ALL subjects.
CREATE TABLE scientists (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            text NOT NULL UNIQUE,        -- 'isaac-newton'
  full_name       text NOT NULL,
  birth_year      int,
  death_year      int,
  nationality     text,
  biography       text,
  portrait_media_id uuid REFERENCES media_assets(id) ON DELETE SET NULL,
  metadata        jsonb NOT NULL DEFAULT '{}', -- awards, fields, links
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);
CREATE TRIGGER scientists_touch BEFORE UPDATE ON scientists
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- M:N — Newton ↔ Laws of Motion (physics) AND ↔ Calculus (math).
CREATE TABLE scientist_contributions (
  scientist_id      uuid NOT NULL REFERENCES scientists(id) ON DELETE CASCADE,
  knowledge_item_id uuid NOT NULL REFERENCES knowledge_items(id) ON DELETE CASCADE,
  contribution_note text,
  year              int,
  PRIMARY KEY (scientist_id, knowledge_item_id)
);

-- ===========================================================================
-- SECTION E — LESSONS & BLOCK-BASED CONTENT
-- ===========================================================================

CREATE TABLE lessons (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  node_id      uuid NOT NULL REFERENCES content_nodes(id) ON DELETE CASCADE, -- its topic
  slug         text NOT NULL,
  title        text NOT NULL,
  summary      text,
  reading_time_min smallint,
  sort_order   int NOT NULL DEFAULT 0,
  status       text NOT NULL DEFAULT 'draft'
               CHECK (status IN ('draft','in_review','published','archived')),
  seo          jsonb NOT NULL DEFAULT '{}',    -- meta title/description, og image key
  author_id    uuid REFERENCES users(id) ON DELETE SET NULL,
  published_at timestamptz,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE (node_id, slug)
);
CREATE INDEX lessons_node_idx   ON lessons(node_id, sort_order);
CREATE INDEX lessons_status_idx ON lessons(status) WHERE status = 'published';
CREATE TRIGGER lessons_touch BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Block kinds are DATA: adding 'chemical_equation' or 'code_runner' later
-- is an INSERT here + one frontend renderer. No migration.
CREATE TABLE block_types (
  id   smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE
       -- 'theory','history','definition','example','image','video','animation',
       -- 'formula_ref','law_ref','theorem_ref','derivation','units',
       -- 'application','numerical','simulation','revision_note','previous_question'
);

CREATE TABLE lesson_blocks (
  id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id         uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  block_type_id     smallint NOT NULL REFERENCES block_types(id),
  sort_order        int NOT NULL,
  payload           jsonb NOT NULL DEFAULT '{}',  -- text (markdown/latex), step lists, sim config...
  media_id          uuid REFERENCES media_assets(id)    ON DELETE SET NULL, -- for image/video/animation blocks
  knowledge_item_id uuid REFERENCES knowledge_items(id) ON DELETE SET NULL, -- for *_ref blocks (reuse!)
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lesson_id, sort_order)
);
CREATE INDEX lesson_blocks_lesson_idx    ON lesson_blocks(lesson_id, sort_order);
CREATE INDEX lesson_blocks_knowledge_idx ON lesson_blocks(knowledge_item_id)
  WHERE knowledge_item_id IS NOT NULL;
CREATE TRIGGER lesson_blocks_touch BEFORE UPDATE ON lesson_blocks
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Curated M:N between lessons and knowledge items ("Formulas used in this
-- lesson" panel; also powers the Formula Library's "appears in" backlinks).
CREATE TABLE lesson_knowledge (
  lesson_id         uuid NOT NULL REFERENCES lessons(id)         ON DELETE CASCADE,
  knowledge_item_id uuid NOT NULL REFERENCES knowledge_items(id) ON DELETE CASCADE,
  sort_order        int NOT NULL DEFAULT 0,
  PRIMARY KEY (lesson_id, knowledge_item_id)
);

-- ===========================================================================
-- SECTION F — ASSESSMENT (Practice Questions, MCQs, Quizzes, Attempts)
-- ===========================================================================

CREATE TABLE question_types (
  id   smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE
       -- 'mcq_single','mcq_multi','true_false','numeric','fill_blank',
       -- 'ordering','descriptive'  (practice questions = descriptive/numeric)
);

CREATE TABLE questions (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id       uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  node_id          uuid REFERENCES content_nodes(id) ON DELETE SET NULL,  -- usually a topic
  lesson_id        uuid REFERENCES lessons(id)       ON DELETE SET NULL,  -- optional finer link
  question_type_id smallint NOT NULL REFERENCES question_types(id),
  prompt           text NOT NULL,               -- markdown + latex
  explanation      text,                        -- shown after answering
  payload          jsonb NOT NULL DEFAULT '{}', -- numeric: {"answer":9.8,"tolerance":0.1,"unit":"m/s^2"}
                                                -- fill_blank: {"blanks":[...]}
  difficulty       smallint CHECK (difficulty BETWEEN 1 AND 5),
  stats            jsonb NOT NULL DEFAULT '{}', -- p_value, discrimination (updated by jobs)
  status           text NOT NULL DEFAULT 'draft'
                   CHECK (status IN ('draft','in_review','published','archived')),
  created_by       uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at       timestamptz NOT NULL DEFAULT now(),
  updated_at       timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX questions_scope_idx ON questions(subject_id, node_id, status);
CREATE TRIGGER questions_touch BEFORE UPDATE ON questions
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Normalized options for choice-based questions (MCQ single/multi, ordering).
CREATE TABLE question_options (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id uuid NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  sort_order  int NOT NULL,
  body        text NOT NULL,                   -- markdown + latex
  is_correct  boolean NOT NULL DEFAULT false,
  feedback    text,                            -- per-option explanation
  UNIQUE (question_id, sort_order)
);
CREATE INDEX question_options_q_idx ON question_options(question_id);

CREATE TABLE flashcards (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  node_id    uuid REFERENCES content_nodes(id) ON DELETE SET NULL,
  front      text NOT NULL,
  back       text NOT NULL,
  hint       text,
  media_id   uuid REFERENCES media_assets(id) ON DELETE SET NULL,
  status     text NOT NULL DEFAULT 'draft'
             CHECK (status IN ('draft','published','archived')),
  created_by uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX flashcards_scope_idx ON flashcards(subject_id, node_id, status);
CREATE TRIGGER flashcards_touch BEFORE UPDATE ON flashcards
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TABLE quizzes (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id   uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
  node_id      uuid REFERENCES content_nodes(id) ON DELETE SET NULL,
  slug         text NOT NULL,
  title        text NOT NULL,
  description  text,
  time_limit_s int,                            -- NULL = untimed (a11y default)
  settings     jsonb NOT NULL DEFAULT '{}',    -- shuffle, pass mark, attempts allowed
  status       text NOT NULL DEFAULT 'draft'
               CHECK (status IN ('draft','published','archived')),
  created_by   uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE (subject_id, slug)
);
CREATE TRIGGER quizzes_touch BEFORE UPDATE ON quizzes
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- M:N — the same question can appear in many quizzes.
CREATE TABLE quiz_questions (
  quiz_id     uuid NOT NULL REFERENCES quizzes(id)   ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES questions(id) ON DELETE RESTRICT,
  sort_order  int NOT NULL,
  points      numeric(6,2) NOT NULL DEFAULT 1,
  PRIMARY KEY (quiz_id, question_id),
  UNIQUE (quiz_id, sort_order)
);

CREATE TABLE quiz_attempts (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id     uuid NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  user_id     uuid NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
  started_at  timestamptz NOT NULL DEFAULT now(),
  finished_at timestamptz,
  status      text NOT NULL DEFAULT 'in_progress'
              CHECK (status IN ('in_progress','submitted','graded','abandoned')),
  score       numeric(8,2),
  max_score   numeric(8,2),
  metadata    jsonb NOT NULL DEFAULT '{}'
);
CREATE INDEX quiz_attempts_user_idx ON quiz_attempts(user_id, started_at DESC);
CREATE INDEX quiz_attempts_quiz_idx ON quiz_attempts(quiz_id);
-- At scale: PARTITION BY RANGE (started_at) — see design doc §7.

CREATE TABLE attempt_answers (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id     uuid NOT NULL REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id    uuid NOT NULL REFERENCES questions(id)     ON DELETE RESTRICT,
  response       jsonb NOT NULL,               -- {"option_ids":[...]} | {"value":9.8} | {"text":"..."}
  is_correct     boolean,
  points_awarded numeric(6,2),
  answered_at    timestamptz NOT NULL DEFAULT now(),
  UNIQUE (attempt_id, question_id)             -- idempotent answer upserts
);

-- ===========================================================================
-- SECTION G — LEARNER STATE (Progress, Bookmarks)
-- ===========================================================================

CREATE TABLE user_progress (
  user_id      uuid NOT NULL REFERENCES users(id)   ON DELETE CASCADE,
  lesson_id    uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  status       text NOT NULL DEFAULT 'in_progress'
               CHECK (status IN ('not_started','in_progress','completed')),
  percent      smallint NOT NULL DEFAULT 0 CHECK (percent BETWEEN 0 AND 100),
  last_position jsonb NOT NULL DEFAULT '{}',   -- {"block_sort_order": 7}
  completed_at timestamptz,
  updated_at   timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);
CREATE INDEX user_progress_lesson_idx ON user_progress(lesson_id);

-- Polymorphic targets are constrained through a lookup table so the set of
-- bookmarkable/taggable/searchable kinds is itself data.
CREATE TABLE entity_types (
  id   smallint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE
       -- 'lesson','content_node','knowledge_item','scientist','question',
       -- 'quiz','flashcard','media_asset'
);

CREATE TABLE bookmarks (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  entity_type_id smallint NOT NULL REFERENCES entity_types(id),
  entity_id      uuid NOT NULL,
  note           text,
  created_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, entity_type_id, entity_id)
);
CREATE INDEX bookmarks_user_idx ON bookmarks(user_id, created_at DESC);

-- ===========================================================================
-- SECTION H — TAGS (cross-subject discovery)
-- ===========================================================================

CREATE TABLE tags (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug       text NOT NULL UNIQUE,             -- 'trigonometry','jee','ib-hl','energy'
  name       text NOT NULL,
  kind       text NOT NULL DEFAULT 'topic'
             CHECK (kind IN ('topic','curriculum','exam','skill','misc')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE taggings (
  tag_id         uuid NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  entity_type_id smallint NOT NULL REFERENCES entity_types(id),
  entity_id      uuid NOT NULL,
  tagged_by      uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at     timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (tag_id, entity_type_id, entity_id)
);
CREATE INDEX taggings_entity_idx ON taggings(entity_type_id, entity_id);

-- ===========================================================================
-- SECTION I — SEARCH INDEX (denormalized read model, rebuilt by triggers/jobs)
-- ===========================================================================

CREATE TABLE search_documents (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type_id smallint NOT NULL REFERENCES entity_types(id),
  entity_id      uuid NOT NULL,
  subject_id     uuid REFERENCES subjects(id) ON DELETE CASCADE,   -- NULL = cross-subject (scientists)
  title          text NOT NULL,
  body           text NOT NULL,
  url_path       text NOT NULL,                -- precomputed canonical path
  level_tag      text,
  tsv            tsvector GENERATED ALWAYS AS (
                   setweight(to_tsvector('simple', unaccent(coalesce(title,''))), 'A') ||
                   setweight(to_tsvector('english', unaccent(coalesce(body,''))), 'B')
                 ) STORED,
  updated_at     timestamptz NOT NULL DEFAULT now(),
  UNIQUE (entity_type_id, entity_id)
);
CREATE INDEX search_documents_tsv_gin  ON search_documents USING gin(tsv);
CREATE INDEX search_documents_trgm    ON search_documents USING gin (title gin_trgm_ops); -- autocomplete
CREATE INDEX search_documents_subject ON search_documents(subject_id, entity_type_id);

-- Population strategy: AFTER INSERT/UPDATE triggers on lessons, knowledge_items,
-- scientists, questions, quizzes enqueue/refresh rows here (or a nightly
-- reconciliation job); the API only ever queries this table.

-- ===========================================================================
-- SECTION J — SEED: LOOKUP DATA (kinds are rows — the expansion mechanism)
-- ===========================================================================

INSERT INTO roles (slug, name) VALUES
 ('student','Student'),('teacher','Teacher'),('reviewer','Reviewer'),
 ('moderator','Moderator'),('admin','Admin'),('super_admin','Super Admin');

INSERT INTO node_types (slug, name, depth_hint) VALUES
 ('category','Category',1),('chapter','Chapter',2),('topic','Topic',3);

INSERT INTO media_types (slug) VALUES
 ('image'),('video'),('animation'),('svg'),('audio'),('pdf');

INSERT INTO knowledge_types (slug) VALUES
 ('formula'),('law'),('theorem'),('definition'),('example'),('principle');

INSERT INTO block_types (slug) VALUES
 ('theory'),('history'),('definition'),('example'),('image'),('video'),
 ('animation'),('formula_ref'),('law_ref'),('theorem_ref'),('derivation'),
 ('units'),('application'),('numerical'),('simulation'),('revision_note'),
 ('previous_question');

INSERT INTO question_types (slug) VALUES
 ('mcq_single'),('mcq_multi'),('true_false'),('numeric'),('fill_blank'),
 ('ordering'),('descriptive');

INSERT INTO entity_types (slug) VALUES
 ('lesson'),('content_node'),('knowledge_item'),('scientist'),('question'),
 ('quiz'),('flashcard'),('media_asset');

-- Launch subjects (Chemistry, Biology, CS... are future INSERTs, not DDL):
INSERT INTO subjects (slug, name, status, sort_order) VALUES
 ('mathematics','Mathematics','published',1),
 ('physics','Physics','published',2);

COMMIT;

-- ============================================================================
-- NOTE: `citext` requires: CREATE EXTENSION IF NOT EXISTS citext; (add above
-- BEGIN if your host supports it; otherwise change email to text — the
-- generated email_norm column + unique index already enforce case-insensitive
-- uniqueness either way.)
-- ============================================================================
