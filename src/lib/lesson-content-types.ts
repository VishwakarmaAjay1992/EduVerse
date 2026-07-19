export type Figure =
  | { type: "placeValue"; number: number }
  | { type: "array"; rows: number; cols: number }
  | { type: "fractionBar"; parts: number; shaded: number }
  | {
      type: "rightTriangle";
      opposite?: string;
      adjacent?: string;
      hypotenuse?: string;
      angle?: string;
    }
  | { type: "numberLine"; min: number; max: number; step: number; highlight?: number }
  | { type: "conic"; kind: "circle" | "parabola" | "ellipse" | "hyperbola" }
  | { type: "geoPrimitives" }
  | { type: "angleTypes" }
  | { type: "parallelTransversal"; relationship: "corresponding" | "alternate" | "cointerior" }
  | { type: "angleExplorer" }
  | { type: "derivedFlow" }
  | { type: "scalarVector" }
  | { type: "accuracyPrecision" }
  | { type: "parallax" };

export interface QuizItem {
  prompt: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export interface InfoCard {
  title: string;
  icon?: string;
  value?: string;
  unit?: string;
  text?: string;
}

// ── Interactive activity data (reusable, subject-agnostic) ──
export interface InstrumentScenario {
  scenario: string;
  icon?: string;
  options: string[];
  answer: number;
  why: string;
}
export interface ClassifyItem {
  term: string;
  category: string; // e.g. "Scalar" | "Vector"
}
export interface PracticeQuestion {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

// ── Graded quiz question types ──
export type GradedQuestion =
  | {
      type: "mc";
      prompt: string;
      options: string[];
      answer: number;
      marks: number;
      explanation: string;
    }
  | { type: "tf"; prompt: string; answer: boolean; marks: number; explanation: string }
  | {
      type: "matching";
      prompt: string;
      left: string[];
      options: string[];
      answer: number[];
      marks: number;
      explanation: string;
    }
  | {
      type: "multi";
      prompt: string;
      options: string[];
      answers: number[];
      marks: number;
      explanation: string;
    };

export type LessonSection =
  | { kind: "overview"; paragraphs: string[] }
  | { kind: "figure"; caption?: string; figure: Figure }
  | { kind: "formula"; latex: string; caption?: string }
  | { kind: "theory"; heading: string; paragraphs: string[]; list?: string[] }
  | {
      kind: "callout";
      variant: "definition" | "remember" | "tip" | "didyouknow";
      title?: string;
      body: string;
    }
  | { kind: "cards"; heading?: string; columns?: 2 | 3 | 4; items: InfoCard[] }
  | { kind: "table"; heading?: string; headers: string[]; rows: string[][]; note?: string }
  | {
      kind: "comparison";
      heading?: string;
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | { kind: "realWorld"; heading?: string; items: { area: string; text: string }[] }
  | { kind: "example"; prompt: string; steps: string[]; answer: string }
  | { kind: "mistakes"; items: { wrong: string; right: string }[] }
  | { kind: "motionExplorer"; heading?: string }
  | { kind: "motionGraphExplorer"; heading?: string }
  | { kind: "forceExplorer"; heading?: string }
  | { kind: "pressureExplorer"; heading?: string }
  | { kind: "dimensionalAnalysisExplorer"; heading?: string }
  | { kind: "measurementUncertaintyExplorer"; heading?: string }
  | { kind: "integerNumberLineExplorer"; heading?: string }
  | { kind: "integerRulesExplorer"; heading?: string }
  | { kind: "rationalNumberExplorer"; heading?: string }
  | { kind: "algebraExpressionExplorer"; heading?: string }
  | { kind: "simplifyingExpressionsExplorer"; heading?: string }
  | { kind: "equationBalanceExplorer"; heading?: string }
  | { kind: "factorPrimeExplorer"; heading?: string; mode: "factors" | "primes" | "hcfLcm" }
  | { kind: "coordinateDataExplorer"; heading?: string; mode: "coordinates" | "data" }
  | { kind: "energyExplorer"; heading?: string }
  | { kind: "densityExplorer"; heading?: string }
  | { kind: "kinematicsExplorer"; heading?: string; mode: "suvat" | "vector" | "projectile" }
  | { kind: "instrumentActivity"; heading?: string; scenarios: InstrumentScenario[] }
  | {
      kind: "classifyActivity";
      heading?: string;
      categories: string[];
      items: ClassifyItem[];
      stepKey?: string;
    }
  | { kind: "practice"; heading?: string; questions: PracticeQuestion[]; stepKey?: string }
  | { kind: "gradedQuiz"; heading?: string; questions: GradedQuestion[]; passMark?: number }
  | { kind: "flashcards"; cards: { front: string; back: string }[] }
  | { kind: "quiz"; questions: QuizItem[] }
  | { kind: "summary"; points: string[] }
  | { kind: "completion"; steps: { key: string; label: string }[]; requireQuizPass?: boolean }
  | { kind: "unitCircleExplorer"; heading?: string }
  | { kind: "trigGraphExplorer"; heading?: string }
  | { kind: "rootsExplorer"; heading?: string }
  | { kind: "standardFormExplorer"; heading?: string }
  | { kind: "unitConverterExplorer"; heading?: string }
  | { kind: "perimeterAreaExplorer"; heading?: string }
  | { kind: "volumeSurfaceExplorer"; heading?: string }
  | { kind: "history"; paragraphs: string[] };

export interface LessonContent {
  subjectSlug: string;
  chapterSlug: string;
  lessonSlug: string;
  title: string;
  objectives: string[];
  sections: LessonSection[];
}
