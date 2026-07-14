import type { LessonContent } from "@/lib/lesson-content-types";

export const mixedNumbersAndImproperFractions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "fractions-and-decimals",
  lessonSlug: "mixed-numbers-and-improper-fractions",
  title: "Mixed Numbers and Improper Fractions",
  objectives: [
    "Convert between improper fractions and mixed numbers",
    "Place fractions on a number line",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Sometimes a fraction describes more than one whole. There are two ways to write such an amount: as an improper fraction or as a mixed number. Both mean the same thing, and switching between them is a skill you will use constantly when calculating with fractions.",
      ],
    },
    {
      kind: "theory",
      heading: "Two ways to write the same amount",
      paragraphs: [
        "An improper fraction has a numerator greater than or equal to its denominator, such as 7/4. A mixed number combines a whole number with a proper fraction, such as 1 3/4. Both describe the same quantity: one whole and three quarters.",
      ],
    },
    {
      kind: "theory",
      heading: "Improper fraction to mixed number",
      paragraphs: [
        "Divide the numerator by the denominator. The quotient is the whole-number part, and the remainder over the denominator is the fraction part. For 7/4: 7 ÷ 4 = 1 remainder 3, so 7/4 = 1 3/4.",
      ],
    },
    {
      kind: "theory",
      heading: "Mixed number to improper fraction",
      paragraphs: [
        "Multiply the whole number by the denominator, add the numerator, and place the result over the denominator. For 2 3/5: (2 x 5) + 3 = 13, so 2 3/5 = 13/5.",
      ],
    },
    {
      kind: "theory",
      heading: "Fractions on the number line",
      paragraphs: [
        "Every fraction has a place on the number line. Because 7/4 equals 1 3/4, it sits three quarters of the way from 1 to 2.",
      ],
    },
    {
      kind: "figure",
      caption: "7/4 = 1 3/4 = 1.75, sitting three quarters of the way from 1 to 2.",
      figure: { type: "numberLine", min: 0, max: 2, step: 1, highlight: 1.75 },
    },
    {
      kind: "example",
      prompt: "Convert 23/5 to a mixed number.",
      steps: [
        "Divide: 23 ÷ 5 = 4 remainder 3.",
        "The whole part is 4; the remainder 3 goes over the denominator 5.",
      ],
      answer: "23/5 = 4 3/5.",
    },
    {
      kind: "example",
      prompt: "Convert 3 2/7 to an improper fraction.",
      steps: [
        "Multiply the whole number by the denominator: 3 x 7 = 21.",
        "Add the numerator: 21 + 2 = 23.",
        "Place over the denominator 7.",
      ],
      answer: "3 2/7 = 23/7.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Forgetting to add the numerator when converting a mixed number (writing 2 3/5 as 10/5).",
          right:
            "Multiply the whole by the denominator and then add the numerator: (2 x 5) + 3 = 13, so 13/5.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Improper fractions and mixed numbers are two ways of writing the same amount.",
        "Improper to mixed: divide, taking the quotient as the whole and the remainder over the denominator.",
        "Mixed to improper: whole x denominator + numerator, all over the denominator.",
        "Fractions occupy precise positions between whole numbers on the number line.",
      ],
    },
  ],
};
