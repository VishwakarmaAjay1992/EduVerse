import type { LessonContent } from "@/lib/lesson-content-types";

export const multiplicationAndDivision: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "whole-numbers-and-arithmetic",
  lessonSlug: "multiplication-and-division",
  title: "Multiplication and Division",
  objectives: [
    "Understand multiplication as repeated addition and as arrays",
    "Multiply multi-digit numbers using long multiplication",
    "Divide using long division",
    "Interpret remainders in context",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Multiplication is a shortcut for adding equal groups, and division is its reverse: splitting a total into equal groups or finding how many groups fit. Mastering both, along with the times tables that support them, unlocks almost all the arithmetic that follows.",
      ],
    },
    {
      kind: "theory",
      heading: "What multiplication means",
      paragraphs: [
        "The product 4 x 3 can be read as four groups of three (4 + 4 + 4, or 3 + 3 + 3 + 3) or as a rectangle of 4 rows and 3 columns holding 12 items. The array picture is useful because it shows why order does not matter: 4 x 3 and 3 x 4 fill the same rectangle.",
      ],
    },
    {
      kind: "figure",
      caption:
        "Four rows of three dots — the same twelve dots whether you count by rows or columns.",
      figure: { type: "array", rows: 4, cols: 3 },
    },
    {
      kind: "theory",
      heading: "Long multiplication",
      paragraphs: [
        "To multiply larger numbers, multiply by each digit of the second number separately, then add the partial products. The key place-value step is the shift: when you multiply by a tens digit, the result is a number of tens, so you write a zero in the ones place before adding.",
      ],
    },
    {
      kind: "theory",
      heading: "Division and remainders",
      paragraphs: [
        "Division asks how many times one number fits into another. Long division works place by place from the left: divide, multiply, subtract, bring down the next digit, and repeat. When nothing is left over the division is exact; otherwise the leftover is the remainder.",
        "What the remainder means depends on the question. Sharing 25 sweets among 4 children gives 6 each with 1 left over; asking how many 4-seat cars are needed for 25 people means you round up to 7.",
      ],
    },
    {
      kind: "example",
      prompt: "Multiply 34 x 27.",
      steps: [
        "Multiply by the ones digit: 34 x 7 = 238.",
        "Multiply by the tens digit: 34 x 2 = 68, but this is 2 tens, so write 680.",
        "Add the partial products: 238 + 680.",
      ],
      answer: "34 x 27 = 918.",
    },
    {
      kind: "example",
      prompt: "Divide 856 by 7.",
      steps: [
        "8 divided by 7 is 1, remainder 1. Bring down the 5 to make 15.",
        "15 divided by 7 is 2, remainder 1. Bring down the 6 to make 16.",
        "16 divided by 7 is 2, remainder 2.",
      ],
      answer: "856 divided by 7 = 122 remainder 2.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Forgetting the place-value zero when multiplying by a tens digit.",
          right:
            "Multiplying by a tens digit gives tens, so shift left by writing a zero first (34 x 2 becomes 680, not 68).",
        },
        {
          wrong: "Ignoring the remainder or always rounding it down.",
          right:
            "Read the question: sometimes the remainder is the answer, sometimes you round up, sometimes you round down.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Multiplication is repeated addition of equal groups; the array picture shows order does not matter.",
        "Long multiplication adds partial products, shifting left for each higher place.",
        "Long division proceeds divide-multiply-subtract-bring down, place by place.",
        "The meaning of a remainder depends on the situation the problem describes.",
      ],
    },
  ],
};
