import type { LessonContent } from "@/lib/lesson-content-types";

export const understandingPlaceValue: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "whole-numbers-and-arithmetic",
  lessonSlug: "understanding-place-value",
  title: "Understanding Place Value",
  objectives: [
    "Identify the place value of any digit in a whole number",
    "Write whole numbers in expanded form",
    "Compare and order whole numbers",
    "Round whole numbers to a given place",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Every whole number, no matter how large, is built from just ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. What makes numbers powerful is not the digits themselves but where they sit. The 5 in 5 means five; the 5 in 500 means five hundred. That idea — a digit's value depends on its position — is called place value, and it is the foundation of all arithmetic.",
        "In this lesson you will learn to read the value of each position, break numbers apart into those values, compare numbers, and round them.",
      ],
    },
    {
      kind: "theory",
      heading: "Digits and positions",
      paragraphs: [
        "Our number system is base ten: each position is worth ten times the position immediately to its right. Reading from the right, the positions are ones, tens, hundreds, thousands, ten-thousands, and so on.",
        "Consider the number 4,285. Each digit occupies a position, and its value is the digit multiplied by that position's worth:",
      ],
      list: [
        "4 is in the thousands place → 4 × 1,000 = 4,000",
        "2 is in the hundreds place → 2 × 100 = 200",
        "8 is in the tens place → 8 × 10 = 80",
        "5 is in the ones place → 5 × 1 = 5",
      ],
    },
    {
      kind: "figure",
      caption: "Each digit of 4,285 sits in a place worth ten times the one to its right.",
      figure: { type: "placeValue", number: 4285 },
    },
    {
      kind: "theory",
      heading: "The role of zero",
      paragraphs: [
        "Zero is a placeholder: it holds a position open so the other digits keep their correct value. In 603, the zero in the tens place tells us there are no tens, which is what separates 603 from 63. Dropping a zero silently changes the number, so placeholders matter.",
      ],
    },
    {
      kind: "theory",
      heading: "Expanded form",
      paragraphs: [
        "Expanded form writes a number as the sum of the values of its digits. It makes place value explicit and is the bridge to addition and subtraction.",
        "For 4,285:",
      ],
      list: [
        "4,285 = 4,000 + 200 + 80 + 5",
        "or, showing each position: 4,285 = (4 × 1,000) + (2 × 100) + (8 × 10) + (5 × 1)",
      ],
    },
    {
      kind: "theory",
      heading: "Comparing and ordering numbers",
      paragraphs: [
        "To compare two whole numbers, line them up by place value and compare from the largest place downward. The first position where they differ decides which is larger.",
        "Compare 5,280 and 5,208. The thousands (5) match, the hundreds (2) match, but in the tens place 8 beats 0. So 5,280 is greater: 5,280 > 5,208.",
        "We write comparisons with three symbols: > means 'greater than', < means 'less than', and = means 'equal to'.",
      ],
    },
    {
      kind: "theory",
      heading: "Rounding",
      paragraphs: [
        "Rounding replaces a number with a nearby, simpler one to a chosen place. To round, look at the single digit just to the right of the place you are rounding to:",
      ],
      list: [
        "If that digit is 5 or more, round up (increase the rounding digit by one).",
        "If it is 4 or less, round down (leave the rounding digit unchanged).",
        "Either way, replace every digit to the right with zeros.",
      ],
    },
    {
      kind: "figure",
      caption:
        "Rounding 2,749 to the nearest hundred: it falls just below the midpoint 2,750, so it rounds down to 2,700.",
      figure: { type: "numberLine", min: 2700, max: 2800, step: 50, highlight: 2749 },
    },
    {
      kind: "example",
      prompt: "What is the value of the digit 7 in 37,412?",
      steps: [
        "Find the position of 7. Reading from the right: 2 is ones, 1 is tens, 4 is hundreds, 7 is thousands.",
        "Multiply the digit by its position's worth: 7 × 1,000.",
      ],
      answer: "The 7 has a value of 7,000 (seven thousand).",
    },
    {
      kind: "example",
      prompt: "Write 6,043 in expanded form.",
      steps: [
        "Identify each digit's place: 6 thousands, 0 hundreds, 4 tens, 3 ones.",
        "The 0 in the hundreds place contributes nothing but holds the position.",
        "Add the non-zero values.",
      ],
      answer: "6,043 = 6,000 + 40 + 3.",
    },
    {
      kind: "example",
      prompt: "Round 2,749 to the nearest hundred.",
      steps: [
        "The hundreds digit is 7. Look at the digit to its right (the tens digit): 4.",
        "Since 4 is less than 5, round down — the hundreds digit stays 7.",
        "Replace the tens and ones with zeros.",
      ],
      answer: "2,749 rounded to the nearest hundred is 2,700.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Treating 603 and 63 as the same because 'the zero is nothing'.",
          right:
            "Zero is a placeholder. It keeps the 6 in the hundreds place, so 603 is ten times larger than 63.",
        },
        {
          wrong:
            "When rounding, looking at the rounding digit itself instead of the digit to its right.",
          right:
            "Always check the single digit immediately to the right of the place you are rounding to; that digit decides up or down.",
        },
        {
          wrong:
            "Reading a digit's value from the digit alone (e.g. saying the 2 in 4,285 is 'two').",
          right:
            "A digit's value is the digit times its position. The 2 sits in the hundreds place, so it means 200.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "In base ten, each position is worth ten times the one to its right: ones, tens, hundreds, thousands, …",
        "A digit's value equals the digit multiplied by its position's worth.",
        "Zero is a placeholder that keeps other digits in their correct positions.",
        "Expanded form writes a number as the sum of its place values.",
        "Compare numbers from the largest place down; the first differing place decides.",
        "To round, check the digit to the right of the rounding place: 5 or more rounds up, 4 or less rounds down.",
      ],
    },
    {
      kind: "history",
      paragraphs: [
        "The place-value system we use — the Hindu–Arabic numerals with a symbol for zero — developed in India and reached Europe through the mathematician al-Khwarizmi and later Fibonacci. Before it, systems like Roman numerals had no positional zero, which made arithmetic far harder. The humble idea that position carries value is one of the most important inventions in the history of mathematics.",
      ],
    },
  ],
};
