import type { LessonContent } from "@/lib/lesson-content-types";

export const orderOfOperations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "whole-numbers-and-arithmetic",
  lessonSlug: "order-of-operations",
  title: "Order of Operations",
  objectives: [
    "Apply the standard order of operations (BODMAS / PEMDAS)",
    "Evaluate expressions with nested brackets",
    "Avoid the most common ordering errors",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "When an expression mixes several operations, the answer depends on the order you carry them out. To make sure everyone gets the same result, mathematics fixes a standard order. Two common names for it are BODMAS and PEMDAS; they describe the same rule.",
      ],
    },
    {
      kind: "theory",
      heading: "The order",
      paragraphs: ["Work through an expression in this order:"],
      list: [
        "Brackets (Parentheses) first.",
        "Orders / Indices (Exponents) next.",
        "Multiplication and Division, working left to right.",
        "Addition and Subtraction, working left to right.",
      ],
    },
    {
      kind: "theory",
      heading: "Same rank means left to right",
      paragraphs: [
        "Multiplication and division sit at the same level, so you do them in the order they appear from left to right — not all multiplication before all division. The same is true of addition and subtraction. This is the step most people get wrong.",
      ],
    },
    {
      kind: "theory",
      heading: "Nested brackets",
      paragraphs: [
        "When brackets sit inside brackets, work from the innermost outward. Resolve the deepest bracket first, then treat its result as a single value in the bracket around it.",
      ],
    },
    {
      kind: "example",
      prompt: "Evaluate 3 + 4 x 2.",
      steps: ["Multiplication comes before addition: 4 x 2 = 8.", "Then add: 3 + 8."],
      answer: "3 + 4 x 2 = 11 (not 14).",
    },
    {
      kind: "example",
      prompt: "Evaluate 20 - 3^2 + (2 x 5).",
      steps: [
        "Brackets first: 2 x 5 = 10.",
        "Then the index: 3^2 = 9.",
        "Now left to right for + and -: 20 - 9 = 11, then 11 + 10 = 21.",
      ],
      answer: "20 - 3^2 + (2 x 5) = 21.",
    },
    {
      kind: "example",
      prompt: "Evaluate 2 x (3 + (8 - 5)).",
      steps: [
        "Innermost bracket: 8 - 5 = 3.",
        "Next bracket: 3 + 3 = 6.",
        "Finally multiply: 2 x 6.",
      ],
      answer: "2 x (3 + (8 - 5)) = 12.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Working strictly left to right and ignoring precedence (3 + 4 x 2 = 14).",
          right: "Do multiplication and division before addition and subtraction (3 + 4 x 2 = 11).",
        },
        {
          wrong: "Doing all multiplication before all division.",
          right: "Multiplication and division share a rank; do them left to right as they appear.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Follow brackets, then indices, then multiplication and division, then addition and subtraction.",
        "Operations of the same rank are done left to right.",
        "For nested brackets, work from the innermost outward.",
      ],
    },
  ],
};
