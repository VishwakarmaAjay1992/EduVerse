import type { LessonContent } from "@/lib/lesson-content-types";

export const fractionsDecimalsAndRecurringDecimals: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "fractions-and-decimals",
  lessonSlug: "fractions-decimals-and-recurring-decimals",
  title: "Fractions, Decimals and Recurring Decimals",
  objectives: [
    "Convert fractions to decimals",
    "Tell terminating decimals from recurring ones",
    "Convert a recurring decimal back to a fraction",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Fractions and decimals are two languages for the same numbers, and you can always translate between them. Some fractions turn into neat, finite decimals; others produce a digit or block of digits that repeats forever. This lesson shows how to move between the two forms and what the repeating case really means.",
      ],
    },
    {
      kind: "theory",
      heading: "Fraction to decimal",
      paragraphs: [
        "To turn a fraction into a decimal, divide the numerator by the denominator. For example, 3/4 = 3 ÷ 4 = 0.75, and 1/3 = 1 ÷ 3 = 0.333..., where the 3 repeats without end.",
      ],
    },
    {
      kind: "theory",
      heading: "Terminating or recurring?",
      paragraphs: [
        "Write the fraction in its lowest terms and look at the denominator. If its only prime factors are 2 and 5, the decimal terminates; otherwise it recurs. So 3/8 terminates (8 = 2 x 2 x 2) and equals 0.375, while 1/6 recurs (6 = 2 x 3) and equals 0.1666...",
        "A repeating decimal is often written with a dot or bar over the repeating digits, so 0.1666... can be written as 0.16 with a dot over the 6.",
      ],
    },
    {
      kind: "theory",
      heading: "Recurring decimal to fraction",
      paragraphs: [
        "A repeating decimal can be turned back into an exact fraction using a short algebra trick. Call the decimal x, multiply by a power of ten that shifts one full repeating block past the point, then subtract the original to cancel the repeating tail.",
        "For x = 0.777..., multiply by 10: 10x = 7.777... Subtract: 10x - x = 7, so 9x = 7 and x = 7/9. When two digits repeat, multiply by 100 instead.",
      ],
    },
    {
      kind: "example",
      prompt: "Convert 5/8 to a decimal.",
      steps: [
        "Divide: 5 ÷ 8.",
        "8 goes into 5.000: 0.6 gives 4.8, remainder 0.20; 0.62 gives 4.96, remainder 0.04; continue to 0.625 exactly.",
      ],
      answer: "5/8 = 0.625 (a terminating decimal).",
    },
    {
      kind: "example",
      prompt: "Convert the recurring decimal 0.2727... to a fraction.",
      steps: [
        "Let x = 0.2727... Two digits repeat, so multiply by 100: 100x = 27.2727...",
        "Subtract the original: 100x - x = 27, so 99x = 27.",
        "Solve and simplify: x = 27/99 = 3/11.",
      ],
      answer: "0.2727... = 3/11.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Assuming every fraction gives a neat, terminating decimal.",
          right:
            "Only fractions whose lowest-terms denominator uses just the primes 2 and 5 terminate; others recur.",
        },
        {
          wrong: "Treating a rounded value like 0.33 as exactly equal to 1/3.",
          right: "1/3 = 0.333... forever; 0.33 is only an approximation.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Convert a fraction to a decimal by dividing the numerator by the denominator.",
        "A lowest-terms fraction terminates only if its denominator's prime factors are 2 and 5.",
        "Recurring decimals repeat a digit or block forever, shown with a dot or bar.",
        "Convert a recurring decimal to a fraction by shifting past one repeat and subtracting.",
      ],
    },
  ],
};
