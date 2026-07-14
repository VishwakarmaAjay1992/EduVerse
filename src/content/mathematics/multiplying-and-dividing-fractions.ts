import type { LessonContent } from "@/lib/lesson-content-types";

export const multiplyingAndDividingFractions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "fractions-and-decimals",
  lessonSlug: "multiplying-and-dividing-fractions",
  title: "Multiplying and Dividing Fractions",
  objectives: [
    "Multiply fractions",
    "Find the reciprocal of a fraction",
    "Divide fractions by multiplying by the reciprocal",
    "Find a fraction of a quantity",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Multiplying and dividing fractions is, surprisingly, easier than adding them — there is no need for a common denominator. Two short rules cover everything, and division turns out to be multiplication in disguise.",
      ],
    },
    {
      kind: "theory",
      heading: "Multiplying fractions",
      paragraphs: [
        "Multiply the numerators together and the denominators together, then simplify. For example, 2/3 x 4/5 = 8/15. You can also cancel common factors before multiplying to keep the numbers small.",
      ],
    },
    {
      kind: "theory",
      heading: "Reciprocals",
      paragraphs: [
        "The reciprocal of a fraction is that fraction turned upside down: the reciprocal of 3/4 is 4/3. A fraction multiplied by its reciprocal always gives 1, which is the key to dividing.",
      ],
    },
    {
      kind: "theory",
      heading: "Dividing fractions",
      paragraphs: [
        "To divide by a fraction, multiply by its reciprocal. So 2/3 ÷ 4/5 becomes 2/3 x 5/4 = 10/12 = 5/6. Flip the divisor (the fraction you are dividing by), never the first fraction.",
      ],
    },
    {
      kind: "theory",
      heading: "A fraction of a quantity",
      paragraphs: [
        "The word 'of' means multiply. To find 3/4 of 20, calculate 3/4 x 20 = 60/4 = 15. This is how fractions are used to take a share of an amount.",
      ],
    },
    {
      kind: "example",
      prompt: "Work out 3/8 x 2/9.",
      steps: [
        "Cancel common factors: 3 and 9 share 3 (giving 1 and 3); 2 and 8 share 2 (giving 1 and 4).",
        "The problem becomes 1/4 x 1/3.",
        "Multiply across: 1 x 1 over 4 x 3.",
      ],
      answer: "3/8 x 2/9 = 1/12.",
    },
    {
      kind: "example",
      prompt: "Work out 5/6 ÷ 2/3.",
      steps: [
        "Multiply by the reciprocal of 2/3, which is 3/2: 5/6 x 3/2.",
        "Multiply across: 15/12.",
        "Simplify: 15/12 = 5/4 = 1 1/4.",
      ],
      answer: "5/6 ÷ 2/3 = 1 1/4.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Looking for a common denominator before multiplying.",
          right:
            "Multiplication needs no common denominator — just multiply numerators and denominators.",
        },
        {
          wrong: "Flipping the first fraction instead of the divisor when dividing.",
          right: "Keep the first fraction; multiply by the reciprocal of the second.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Multiply fractions by multiplying numerators and denominators, then simplifying.",
        "The reciprocal of a fraction is it turned upside down; a fraction times its reciprocal is 1.",
        "Divide by multiplying by the reciprocal of the divisor.",
        "A fraction 'of' a quantity means multiply the fraction by the quantity.",
      ],
    },
  ],
};
