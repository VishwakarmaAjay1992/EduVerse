/**
 * Extended ("premium") scientist profile schema.
 *
 * DESIGN CONTRACT
 * ---------------
 * This type is deliberately SEPARATE from the base `Scientist` type in
 * `@/data/scientists`. The base type drives the roster, the cards and the
 * hero — every scientist has one. This type is the optional deep-dive layer.
 *
 * Because it is additive:
 *   - profiles without a deep-dive entry render exactly as they do today,
 *   - no existing page component needs changing to keep working,
 *   - deep-dive sections appear only where content exists.
 *
 * Every top-level field is optional for the same reason: a profile can be
 * upgraded section by section rather than all at once.
 *
 * PHASE 2 NOTE
 * ------------
 * These shapes intentionally mirror the API DTOs planned for the Prisma
 * backend, so swapping static content for live API calls is a data-source
 * change rather than a component rewrite.
 */

/** A single dated event on the life timeline. */
export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  /** Optional flag for the handful of genuinely pivotal moments. */
  pivotal?: boolean;
};

/** Structured early-life detail. Each field is a short paragraph. */
export type EarlyLifeDetail = {
  childhood?: string;
  family?: string;
  education?: string;
  difficulties?: string;
  finances?: string;
  personalLife?: string;
  influences?: string;
  booksRead?: string;
  teachersAndMentors?: string;
  stories?: string[];
};

/** A major discovery, broken down the way a lesson would teach it. */
export type Discovery = {
  name: string;
  period: string;
  background: string;
  problem: string;
  method: string;
  discovery: string;
  importance: string;
  modernApplications: string[];
};

/** Books, papers, experiments, instruments and inventions. */
export type WorkItem = {
  title: string;
  year: string;
  kind: "Book" | "Paper" | "Experiment" | "Invention" | "Instrument" | "Project";
  description: string;
};

/** An equation with a worked example, rendered via KaTeX. */
export type EquationEntry = {
  name: string;
  /** KaTeX display-mode source, without delimiters. */
  latex: string;
  explanation: string;
  variables: { symbol: string; meaning: string }[];
  workedExample: {
    problem: string;
    /** Ordered solution steps. `latex` renders as display math when present. */
    steps: { text: string; latex?: string }[];
    answer: string;
  };
  modernUse: string;
};

/** How the scientist's work connects to a modern school/university subject. */
export type SubjectConnection = {
  field:
    | "Physics"
    | "Chemistry"
    | "Mathematics"
    | "Statistics"
    | "Engineering"
    | "Computer Science"
    | "Astronomy"
    | "Biology"
    | "Medicine";
  description: string;
};

/** The world the science happened in. */
export type HistoricalContext = {
  worldEvents?: string;
  politics?: string;
  wars?: string;
  universities?: string;
  scientificCommunity?: string;
  technology?: string;
};

/**
 * Opposition, controversy and discrimination.
 *
 * `status` exists because the brief requires verified history to be
 * separated from popular myth. Never silently present a legend as fact.
 */
export type BacklashEntry = {
  type:
    | "Religious opposition"
    | "Political pressure"
    | "Government restriction"
    | "Academic conflict"
    | "Priority dispute"
    | "Discrimination"
    | "Gender bias"
    | "Racism"
    | "Imprisonment"
    | "Exile"
    | "Public criticism"
    | "Controversy";
  title: string;
  description: string;
  status: "Verified" | "Disputed" | "Myth";
};

/** A challenge, tagged by the kind of difficulty it was. */
export type ChallengeEntry = {
  category:
    | "Financial"
    | "Scientific"
    | "Personal"
    | "Professional"
    | "Health"
    | "Social"
    | "Educational";
  description: string;
};

/** Awards, honours and formal recognition. */
export type Achievement = {
  title: string;
  year: string;
  description: string;
};

/** A short trivia card. */
export type TriviaCard = {
  title: string;
  content: string;
};

/** An image-generation brief. Text only — no copyrighted images embedded. */
export type VisualPrompt = {
  category:
    | "Hero portrait"
    | "Young scientist"
    | "Laboratory"
    | "Major discovery"
    | "Experiment"
    | "Equipment"
    | "Timeline infographic"
    | "Mind map"
    | "Achievement infographic"
    | "Scientific diagram"
    | "Map"
    | "Portrait gallery"
    | "Quote card";
  prompt: string;
};

/** A slot for a public-domain or licensed image, with its caption. */
export type PhotoPlaceholder = {
  slot:
    | "Portrait"
    | "Childhood"
    | "University"
    | "Laboratory"
    | "Notebooks"
    | "Instruments"
    | "Historic location"
    | "Statue"
    | "Memorial"
    | "Museum exhibit";
  caption: string;
  /** Where a suitably licensed image can be sourced from. */
  suggestedSource: string;
};

/** A cross-link to another scientist, with the reason for the link. */
export type RelatedScientist = {
  slug: string;
  name: string;
  reason: string;
};

/** A cross-link into the EduVerse curriculum. */
export type RelatedTopic = {
  title: string;
  href: string;
  description: string;
};

/** A verified quotation. */
export type QuoteEntry = {
  text: string;
  source: string;
  /** Guards against the many misattributed "science quotes" in circulation. */
  status: "Verified" | "Widely attributed" | "Paraphrase";
};

export type McqQuestion = {
  question: string;
  options: string[];
  /** Zero-based index into `options`. */
  answer: number;
  explanation: string;
};

export type TrueFalseQuestion = {
  statement: string;
  answer: boolean;
  explanation: string;
};

export type WrittenQuestion = {
  question: string;
  /** Model answer, revealed on demand. */
  modelAnswer: string;
  marks: number;
};

export type ProfileQuiz = {
  mcq: McqQuestion[];
  trueFalse: TrueFalseQuestion[];
  shortAnswer: WrittenQuestion[];
  longAnswer: WrittenQuestion[];
};

/** The complete deep-dive profile. Keyed by scientist slug. */
export type ScientistProfile = {
  /** Must match a `slug` in `@/data/scientists`. */
  slug: string;
  /** Short, SEO-focused description override for this profile's metadata. */
  seoDescription?: string;
  timeline?: TimelineEvent[];
  earlyLifeDetail?: EarlyLifeDetail;
  turningPoints?: string[];
  failures?: string[];
  studentLessons?: string[];
  discoveries?: Discovery[];
  works?: WorkItem[];
  equations?: EquationEntry[];
  connections?: SubjectConnection[];
  historicalContext?: HistoricalContext;
  backlash?: BacklashEntry[];
  challengesDetailed?: ChallengeEntry[];
  achievements?: Achievement[];
  funFacts?: string[];
  didYouKnow?: TriviaCard[];
  visualPrompts?: VisualPrompt[];
  photoPlaceholders?: PhotoPlaceholder[];
  relatedScientists?: RelatedScientist[];
  relatedTopics?: RelatedTopic[];
  quotes?: QuoteEntry[];
  quiz?: ProfileQuiz;
};
