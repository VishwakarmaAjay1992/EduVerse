import type { LessonContent } from "@/lib/lesson-content-types";

export const romanNumerals: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "whole-numbers-and-arithmetic",
  lessonSlug: "roman-numerals-and-historical-number-systems",
  title: "Roman Numerals and Historical Number Systems",
  objectives: [
    "Read and write Roman numerals",
    "Recognise how ancient systems recorded numbers",
    "Explain why positional notation eventually replaced them",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Long before the digits we use today, people counted with tallies, symbols and words. Different civilisations invented different systems, each solving the same problem in its own way. Looking at a few of them shows why the place-value system you learned in the last lesson was such a leap forward.",
      ],
    },
    {
      kind: "theory",
      heading: "Roman numerals",
      paragraphs: [
        "The Roman system uses seven letters, each with a fixed value:",
        "Numbers are formed by combining these symbols. Usually you add values from largest to smallest, but when a smaller symbol appears before a larger one, you subtract it. That subtractive rule keeps numbers short.",
      ],
      list: [
        "I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000",
        "Additive: VIII = 5 + 1 + 1 + 1 = 8",
        "Subtractive: IV = 5 - 1 = 4, and IX = 10 - 1 = 9",
        "A symbol is never repeated more than three times in a row.",
      ],
    },
    {
      kind: "theory",
      heading: "Other ancient systems",
      paragraphs: [
        "The Egyptians used picture-symbols (hieroglyphs), with a different mark for 1, 10, 100 and so on, and simply repeated them as needed — a purely additive system.",
        "The Babylonians used base sixty rather than base ten. Traces of their system survive today: sixty seconds in a minute, sixty minutes in an hour, and 360 degrees in a circle.",
      ],
    },
    {
      kind: "theory",
      heading: "Why positional notation won",
      paragraphs: [
        "None of these systems had a true zero acting as a placeholder, and none used position to carry value. That made arithmetic awkward: try multiplying MCMXCIV by XLII. The Hindu-Arabic place-value system made calculation fast and mechanical, which is exactly why it spread across the world.",
      ],
    },
    {
      kind: "example",
      prompt: "Write the year 2024 in Roman numerals.",
      steps: [
        "Break it into place values: 2000 + 20 + 4.",
        "2000 = MM, 20 = XX, and 4 = IV (subtractive).",
        "Join them from largest to smallest.",
      ],
      answer: "2024 = MMXXIV.",
    },
    {
      kind: "example",
      prompt: "What number is XLII?",
      steps: [
        "XL is a subtractive pair: 50 - 10 = 40.",
        "II is additive: 1 + 1 = 2.",
        "Add the parts: 40 + 2.",
      ],
      answer: "XLII = 42.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Writing 4 as IIII or 40 as XXXX.",
          right:
            "A symbol repeats at most three times; use the subtractive form: IV for 4, XL for 40.",
        },
        {
          wrong: "Reading IX as 11 by adding the symbols.",
          right: "A smaller symbol before a larger one is subtracted: IX = 10 - 1 = 9.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Roman numerals use seven letters combined by adding, with subtraction for pairs like IV and IX.",
        "Egyptian numerals were additive; Babylonian numerals used base sixty.",
        "These systems lacked a positional zero, making arithmetic hard.",
        "The place-value system replaced them because it makes calculation simple.",
      ],
    },
  ],
};
