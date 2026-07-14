import type { LessonContent } from "@/lib/lesson-content-types";
export const lawOfSinesAndCosines: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "trigonometric-equations-and-applications",
  lessonSlug: "law-of-sines-and-law-of-cosines",
  title: "Law of Sines and Law of Cosines",
  objectives: [
    "State and apply the sine rule",
    "Recognise the ambiguous case",
    "State and apply the cosine rule",
    "Find the area of a triangle using $\\frac{1}{2}ab\\sin C$",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "SOHCAHTOA only works in right-angled triangles. For any triangle — acute, obtuse, or right-angled — the sine rule and cosine rule let you find missing sides and angles.",
      ],
    },
    {
      kind: "theory",
      heading: "The sine rule",
      paragraphs: ["In any triangle ABC with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$:"],
    },
    {
      kind: "formula",
      latex: String.raw`\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}`,
      caption: "Use when you know an angle and its opposite side.",
    },
    {
      kind: "callout",
      variant: "tip",
      body: "Use the sine rule when you have a known angle–side pair (a side and the angle directly opposite it) plus one more piece.",
    },
    {
      kind: "theory",
      heading: "The ambiguous case (SSA)",
      paragraphs: [
        "When you know two sides and an angle not between them (SSA), there may be zero, one, or two valid triangles. The sine rule can give a second solution where the unknown angle is obtuse. Always check both possibilities.",
      ],
    },
    {
      kind: "theory",
      heading: "The cosine rule",
      paragraphs: [
        "When you have two sides and the included angle (SAS), or all three sides (SSS), use the cosine rule:",
      ],
    },
    {
      kind: "formula",
      latex: String.raw`c^2 = a^2 + b^2 - 2ab\cos C`,
      caption: "Generalises Pythagoras — when C = 90° the cos term vanishes.",
    },
    {
      kind: "theory",
      heading: "Area formula",
      paragraphs: [
        "With two sides and the included angle you can find the area without needing the height:",
      ],
    },
    { kind: "formula", latex: String.raw`\text{Area} = \tfrac{1}{2}ab\sin C` },
    {
      kind: "example",
      prompt: String.raw`In triangle ABC, $A = 40°$, $a = 8$, $B = 65°$. Find $b$.`,
      steps: [
        String.raw`Sine rule: $\frac{8}{\sin 40°} = \frac{b}{\sin 65°}$.`,
        String.raw`$b = \frac{8 \sin 65°}{\sin 40°} = \frac{8 \times 0.9063}{0.6428}$.`,
      ],
      answer: String.raw`$b \approx 11.28$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Find side $c$ given $a=5$, $b=7$, $C=60°$.`,
      steps: [
        String.raw`$c^2 = 25 + 49 - 2(5)(7)\cos 60° = 74 - 70(0.5) = 39$.`,
        String.raw`$c = \sqrt{39}$.`,
      ],
      answer: String.raw`$c \approx 6.24$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Find the area of a triangle with sides 6 and 10 and included angle 50°.`,
      steps: [String.raw`Area $= \frac{1}{2}(6)(10)\sin 50° = 30 \times 0.766$.`],
      answer: String.raw`Area $\approx 22.98$ square units.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Using the sine rule when you have SAS (two sides and the included angle).",
          right: "SAS needs the cosine rule; the sine rule needs an angle–side pair.",
        },
        {
          wrong: "Forgetting the ambiguous case in SSA problems.",
          right: "Always check if the supplementary angle also gives a valid triangle.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice",
      stepKey: "practice",
      questions: [
        {
          prompt: "Which rule needs an angle–side pair?",
          options: ["Sine rule", "Cosine rule"],
          answer: 0,
          explanation: "The sine rule uses a/sin A = b/sin B.",
        },
        {
          prompt: "Which rule works for SSS (three sides known)?",
          options: ["Sine rule", "Cosine rule"],
          answer: 1,
          explanation: "The cosine rule rearranges to find an angle from three sides.",
        },
        {
          prompt: String.raw`Area = ½ab sin C requires which angle?`,
          options: ["Any angle", "The included angle", "The largest angle"],
          answer: 1,
          explanation: "C must be the angle between sides a and b.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`Sine rule: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ — use with an angle–side pair.`,
        String.raw`Cosine rule: $c^2 = a^2 + b^2 - 2ab\cos C$ — use for SAS or SSS.`,
        String.raw`Area $= \frac{1}{2}ab\sin C$ — two sides and the included angle.`,
        "Watch for the ambiguous case (SSA) with the sine rule.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson quiz",
      passMark: 60,
      questions: [
        {
          type: "mc",
          marks: 1,
          prompt: "Which rule needs a known angle–side pair?",
          options: ["Sine", "Cosine", "Either"],
          answer: 0,
          explanation: "Sine rule.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "The cosine rule generalises which theorem?",
          options: ["Pythagoras", "Euclid's", "Thales'"],
          answer: 0,
          explanation: "When C=90° the cos term vanishes, giving Pythagoras.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`Area = ½(5)(8) sin 30° = ?`,
          options: ["10", "20", "40", "5"],
          answer: 0,
          explanation: "½×5×8×0.5 = 10.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: "SSA can give how many possible triangles?",
          options: ["Always 1", "0, 1, or 2", "Always 2"],
          answer: 1,
          explanation: "The ambiguous case.",
        },
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [{ key: "practice", label: "Complete the practice" }],
    },
  ],
};
