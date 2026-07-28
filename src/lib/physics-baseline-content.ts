import audit from "@/data/physics-audit.json";
import dictionary from "@/data/physics-dictionary.json";
import type { LessonContent, LessonSection } from "@/lib/lesson-content-types";

type AuditLesson = {
  chapter: string;
  chapterSlug: string;
  topic: string;
  title: string;
  slug: string;
  difficulty: number;
  minutes: number;
  sub: string[];
  prereq: string[];
};

type DictionaryTerm = { slug: string; title: string; definition: string; explanation?: string };

const lessons = audit as AuditLesson[];
const terms = dictionary as DictionaryTerm[];

function relatedTerms(lesson: AuditLesson): DictionaryTerm[] {
  const words = `${lesson.title} ${lesson.sub.join(" ")}`.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 4);
  return terms
    .map((term) => ({ term, score: words.reduce((n, w) => n + (term.title.toLowerCase().includes(w) ? 1 : 0), 0) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((x) => x.term);
}

export function generatePhysicsBaseline(chapterSlug: string, lessonSlug: string): LessonContent | null {
  const lesson = lessons.find((item) => item.chapterSlug === chapterSlug && item.slug === lessonSlug);
  if (!lesson) return null;
  const concepts = lesson.sub.length ? lesson.sub : [lesson.title];
  const related = relatedTerms(lesson);
  const sections: LessonSection[] = [
    {
      kind: "overview",
      paragraphs: [
        `${lesson.title} is part of ${lesson.chapter}. This lesson builds the physical meaning first, then connects the idea to equations, units, diagrams and applications.`,
        `The central concepts are ${concepts.join(", ")}. Read actively: predict outcomes, identify assumptions and check every answer against units and limiting cases.`,
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: lesson.title,
      body: `${concepts[0]} is the main idea developed in this lesson. A complete understanding includes what it means, how it is measured or represented, and when it applies.`,
    },
    {
      kind: "theory",
      heading: "Core ideas",
      paragraphs: concepts.map((concept) => `${concept} should be understood through its physical meaning, observable effects and relationship to other quantities—not as an isolated phrase or formula.`),
      list: [
        "Identify the system and its surroundings.",
        "List known quantities with units and choose a positive direction or reference where needed.",
        "State the physical principle before substituting numbers.",
        "Check dimensions, sign, scale and whether the result is physically reasonable.",
      ],
    },
    {
      kind: "example",
      prompt: `A learner is given a new problem involving ${lesson.title}. How should the solution be organized?`,
      steps: [
        "Draw or describe the physical situation and define the system.",
        "Write the known quantities and the required unknown, including units.",
        `Select the principle connected to ${concepts[0]}.`,
        "Rearrange symbolically, substitute values, calculate and check the result.",
      ],
      answer: "A correct solution shows the governing principle, complete working, units and a reasonableness check.",
    },
    {
      kind: "realWorld",
      heading: "Applications",
      items: [
        { area: "Engineering", text: `${lesson.title} supports prediction, design, measurement and safety decisions in real systems.` },
        { area: "Everyday science", text: `The same principles help explain observations involving motion, energy, matter, waves, fields or measurement.` },
      ],
    },
    {
      kind: "mistakes",
      items: [
        { wrong: "Choosing an equation only because it contains the desired symbol.", right: "Choose the equation from the physical principle and stated assumptions." },
        { wrong: "Dropping units during calculation.", right: "Carry units through the work and use them as an error check." },
        { wrong: "Memorizing the final result without understanding the model.", right: "Explain what changes, what remains constant and why the relationship applies." },
      ],
    },
    {
      kind: "practice",
      heading: "Concept practice",
      stepKey: "practice",
      questions: [
        {
          prompt: `What is the best first step in a ${lesson.title} problem?`,
          options: ["Identify the system, knowns, unknowns and governing principle", "Substitute numbers immediately", "Ignore diagrams", "Choose the longest equation"],
          answer: 0,
          explanation: "Physics problem solving starts with the system, quantities, units and governing principle.",
        },
        {
          prompt: "Which check is most useful after calculating a result?",
          options: ["Units, sign, scale and limiting behavior", "Number of decimal places only", "Whether the answer is large", "Whether no diagram was used"],
          answer: 0,
          explanation: "Dimensional and physical reasonableness checks catch many errors.",
        },
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson mastery check",
      passMark: 75,
      questions: concepts.slice(0, 4).map((concept) => ({
        type: "mc" as const,
        prompt: `Which statement best describes how to study ${concept}?`,
        options: ["Connect meaning, representation, units and applications", "Memorize a word only", "Ignore prerequisites", "Avoid checking assumptions"],
        answer: 0,
        marks: 1,
        explanation: "Mastery requires connected conceptual and applied understanding.",
      })),
    },
    ...(related.length
      ? [{
          kind: "cards" as const,
          heading: "Related Physics Dictionary concepts",
          columns: 2 as const,
          items: related.map((term) => ({ title: term.title, text: term.definition })),
        }]
      : []),
    {
      kind: "summary",
      points: [
        `Explain the meaning of ${concepts[0]} in your own words.`,
        "State the relevant assumptions before applying a relationship.",
        "Use diagrams, symbols and units consistently.",
        "Practice retrieval and mixed problems rather than rereading alone.",
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [
        { key: "practice", label: "Complete the concept practice" },
        { key: "quiz", label: "Pass the lesson mastery check" },
      ],
    },
  ];

  return {
    subjectSlug: "physics",
    chapterSlug,
    lessonSlug,
    title: lesson.title,
    objectives: [
      `Explain the main ideas in ${lesson.title}.`,
      "Select and apply an appropriate physical principle.",
      "Use units, diagrams and reasonableness checks correctly.",
      "Connect the lesson to related concepts and applications.",
    ],
    sections,
  };
}
