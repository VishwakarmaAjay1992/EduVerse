import type { LessonContent } from "@/lib/lesson-content-types";

export const additionAndSubtraction: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "whole-numbers-and-arithmetic",
  lessonSlug: "addition-and-subtraction",
  title: "Addition and Subtraction",
  objectives: [
    "Add and subtract multi-digit whole numbers using column methods",
    "Regroup correctly when carrying and borrowing",
    "Use mental strategies for quick calculation",
    "Translate word problems into additions and subtractions",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Addition combines quantities; subtraction finds the difference between them or takes one away from another. Because our numbers are built on place value, both operations work column by column — ones with ones, tens with tens — and the only extra idea we need is regrouping.",
      ],
    },
    {
      kind: "theory",
      heading: "The column method",
      paragraphs: [
        "Write the numbers so that matching places line up: ones under ones, tens under tens, and so on. Then work from the right, one column at a time. Keeping the columns aligned is the whole secret; most mistakes come from misalignment.",
      ],
    },
    {
      kind: "theory",
      heading: "Carrying in addition",
      paragraphs: [
        "When a column adds to ten or more, it will not fit in a single place, so you regroup: write down the ones digit of the result and carry the tens digit into the next column to the left. Carrying is just place value in action — ten ones become one ten.",
      ],
    },
    {
      kind: "theory",
      heading: "Borrowing in subtraction",
      paragraphs: [
        "When the digit on top is smaller than the one below it, you cannot subtract directly, so you borrow: take one unit from the next place to the left, which is worth ten in the current column. Borrowing across a zero means you first borrow into the zero from the place beyond it.",
      ],
    },
    {
      kind: "theory",
      heading: "Mental strategies",
      paragraphs: ["For quick work you do not always need the full column method:"],
      list: [
        "Round and adjust: 198 + 47 = 200 + 47 - 2 = 245.",
        "Break apart: 63 + 28 = 63 + 20 + 8 = 91.",
        "Count up to subtract: 83 - 68 = count from 68 to 83 = 15.",
      ],
    },
    {
      kind: "example",
      prompt: "Add 487 + 256.",
      steps: [
        "Ones: 7 + 6 = 13. Write 3, carry 1.",
        "Tens: 8 + 5 = 13, plus the carried 1 = 14. Write 4, carry 1.",
        "Hundreds: 4 + 2 = 6, plus the carried 1 = 7.",
      ],
      answer: "487 + 256 = 743.",
    },
    {
      kind: "example",
      prompt: "Subtract 503 - 278 (borrowing across a zero).",
      steps: [
        "Ones: 3 - 8 cannot be done. Borrow, but the tens digit is 0, so first borrow from the hundreds: 5 hundreds becomes 4 hundreds and the tens digit becomes 10.",
        "Now borrow 1 ten for the ones: tens become 9, ones become 13. 13 - 8 = 5.",
        "Tens: 9 - 7 = 2. Hundreds: 4 - 2 = 2.",
      ],
      answer: "503 - 278 = 225.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Lining numbers up on the left instead of by place value.",
          right: "Always align on the right so ones sit under ones and tens under tens.",
        },
        {
          wrong: "Forgetting to add a carried digit into the next column.",
          right: "Write the carry clearly and include it before moving on.",
        },
        {
          wrong: "Borrowing across a zero incorrectly.",
          right: "Borrow into the zero from the next place first, then borrow from it.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Line numbers up by place value and work from the ones column leftward.",
        "Carrying regroups ten ones into one ten (and so on) during addition.",
        "Borrowing regroups one unit from the left into ten in the current column during subtraction.",
        "Mental strategies like round-and-adjust and breaking apart speed up everyday calculation.",
      ],
    },
  ],
};
