import type { LessonContent } from "@/lib/lesson-content-types";

export const fractionsAsPartsOfAWhole: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "fractions-and-decimals",
  lessonSlug: "fractions-as-parts-of-a-whole",
  title: "Fractions as Parts of a Whole",
  objectives: [
    "Read a fraction in terms of its numerator and denominator",
    "Find equivalent fractions",
    "Simplify a fraction to its lowest terms",
    "Compare and order fractions",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A fraction describes a part of a whole. When something is split into equal pieces, a fraction tells us how many of those pieces we are talking about. Fractions let us name amounts that sit between whole numbers, which is exactly what we could not do with whole numbers alone.",
      ],
    },
    {
      kind: "theory",
      heading: "Numerator and denominator",
      paragraphs: [
        "A fraction is written as one number over another, such as 3/4. The bottom number, the denominator, says how many equal parts the whole is divided into. The top number, the numerator, says how many of those parts we take.",
        "So 3/4 means: split the whole into 4 equal parts and take 3 of them.",
      ],
    },
    {
      kind: "figure",
      caption: "3/4 — a whole split into four equal parts, with three shaded.",
      figure: { type: "fractionBar", parts: 4, shaded: 3 },
    },
    {
      kind: "theory",
      heading: "Equivalent fractions",
      paragraphs: [
        "Different-looking fractions can name the same amount. If you multiply (or divide) the numerator and denominator by the same non-zero number, the value does not change — you are just cutting each part into more (or fewer) pieces.",
        "For example, 3/4 and 6/8 cover the same amount of the bar: each of the four parts has simply been split in two.",
      ],
    },
    {
      kind: "figure",
      caption: "6/8 shades the same amount as 3/4 — the fractions are equivalent.",
      figure: { type: "fractionBar", parts: 8, shaded: 6 },
    },
    {
      kind: "theory",
      heading: "Simplifying",
      paragraphs: [
        "A fraction is in its lowest terms when the numerator and denominator share no common factor other than 1. To simplify, divide both by their greatest common factor. Simplified fractions are easier to read and compare.",
      ],
    },
    {
      kind: "theory",
      heading: "Comparing fractions",
      paragraphs: [
        "If two fractions have the same denominator, the one with the larger numerator is larger. If the denominators differ, rewrite both with a common denominator first, then compare numerators. A quick shortcut is to cross-multiply: for a/b and c/d, compare a x d with c x b.",
      ],
    },
    {
      kind: "example",
      prompt: "Simplify 12/18.",
      steps: [
        "Find the greatest common factor of 12 and 18: it is 6.",
        "Divide the numerator and denominator by 6: 12 ÷ 6 = 2 and 18 ÷ 6 = 3.",
      ],
      answer: "12/18 = 2/3.",
    },
    {
      kind: "example",
      prompt: "Which is larger, 5/8 or 2/3?",
      steps: [
        "Use a common denominator of 24.",
        "5/8 = 15/24 and 2/3 = 16/24.",
        "Compare numerators: 16 is greater than 15.",
      ],
      answer: "2/3 is larger than 5/8.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Simplifying only the numerator or only the denominator.",
          right:
            "Divide both the numerator and denominator by the same factor, or the value changes.",
        },
        {
          wrong: "Deciding 1/8 is bigger than 1/2 because 8 is bigger than 2.",
          right:
            "With the same numerator, a bigger denominator means smaller pieces: 1/2 is much bigger than 1/8.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "The denominator is how many equal parts the whole is split into; the numerator is how many are taken.",
        "Multiplying or dividing top and bottom by the same number gives an equivalent fraction.",
        "Simplify by dividing both parts by their greatest common factor.",
        "Compare fractions using a common denominator or by cross-multiplying.",
      ],
    },
  ],
};
