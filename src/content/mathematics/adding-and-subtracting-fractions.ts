import type { LessonContent } from "@/lib/lesson-content-types";

export const addingAndSubtractingFractions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "fractions-and-decimals",
  lessonSlug: "adding-and-subtracting-fractions",
  title: "Adding and Subtracting Fractions",
  objectives: [
    "Add and subtract fractions with the same denominator",
    "Use the lowest common denominator for unlike fractions",
    "Add and subtract mixed numbers",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "You can only add or subtract fractions when they are counted in the same-sized pieces — that is, when they share a denominator. Once the pieces match, the arithmetic is simple. The main work is getting the denominators to agree.",
      ],
    },
    {
      kind: "theory",
      heading: "Same denominator",
      paragraphs: [
        "When two fractions have the same denominator, add or subtract the numerators and keep the denominator unchanged. The pieces are the same size, so you are just counting them: 2/7 + 3/7 = 5/7.",
      ],
    },
    {
      kind: "theory",
      heading: "Different denominators: the common denominator",
      paragraphs: [
        "When denominators differ, rewrite each fraction with a common denominator — usually the lowest common denominator (the lowest common multiple of the denominators). Then add or subtract as before.",
        "For 1/2 + 1/3, the lowest common denominator is 6. Rewrite as 3/6 + 2/6 = 5/6.",
      ],
    },
    {
      kind: "theory",
      heading: "Mixed numbers",
      paragraphs: [
        "To add or subtract mixed numbers, either convert them to improper fractions first, or handle the whole parts and fraction parts separately and then combine. Simplify the result and carry between the parts when the fractions add to more than one whole.",
      ],
    },
    {
      kind: "example",
      prompt: "Work out 3/4 + 1/6.",
      steps: [
        "The lowest common denominator of 4 and 6 is 12.",
        "Rewrite: 3/4 = 9/12 and 1/6 = 2/12.",
        "Add the numerators: 9/12 + 2/12 = 11/12.",
      ],
      answer: "3/4 + 1/6 = 11/12.",
    },
    {
      kind: "example",
      prompt: "Work out 5/6 - 1/4.",
      steps: [
        "The lowest common denominator of 6 and 4 is 12.",
        "Rewrite: 5/6 = 10/12 and 1/4 = 3/12.",
        "Subtract: 10/12 - 3/12 = 7/12.",
      ],
      answer: "5/6 - 1/4 = 7/12.",
    },
    {
      kind: "example",
      prompt: "Work out 2 3/4 + 1 1/2.",
      steps: [
        "Add the whole parts: 2 + 1 = 3.",
        "Add the fraction parts with a common denominator: 3/4 + 2/4 = 5/4 = 1 1/4.",
        "Combine: 3 + 1 1/4.",
      ],
      answer: "2 3/4 + 1 1/2 = 4 1/4.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Adding the denominators too: 1/2 + 1/3 = 2/5.",
          right:
            "Find a common denominator and add only the numerators: 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
        },
        {
          wrong: "Leaving an answer like 5/4 unconverted in a mixed-number problem.",
          right:
            "Convert improper results back to mixed numbers and carry into the whole part: 5/4 = 1 1/4.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Fractions can be added or subtracted only when they share a denominator.",
        "With the same denominator, combine the numerators and keep the denominator.",
        "For unlike fractions, rewrite over the lowest common denominator first.",
        "For mixed numbers, combine whole and fraction parts and carry when needed.",
      ],
    },
  ],
};
