import type { LessonContent } from "@/lib/lesson-content-types";

export const decimalNotationAndOperations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "fractions-and-decimals",
  lessonSlug: "decimal-notation-and-operations",
  title: "Decimal Notation and Operations",
  objectives: [
    "Understand decimal place value",
    "Add, subtract, multiply and divide decimals",
    "Round decimals to a given place",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Decimals extend place value past the ones column to describe parts of a whole using tenths, hundredths and beyond. They are simply another way of writing fractions whose denominators are powers of ten, and they follow the same place-value rules you already know.",
      ],
    },
    {
      kind: "theory",
      heading: "Decimal place value",
      paragraphs: [
        "The digits after the decimal point stand for tenths, hundredths, thousandths, and so on — each worth one tenth of the place to its left. So 3.47 means 3 ones, 4 tenths and 7 hundredths, that is 3 + 4/10 + 7/100.",
      ],
    },
    {
      kind: "theory",
      heading: "Adding and subtracting decimals",
      paragraphs: [
        "Line up the decimal points so matching places sit above one another, then add or subtract exactly as with whole numbers. Filling empty places with zeros can help keep the columns straight.",
      ],
    },
    {
      kind: "theory",
      heading: "Multiplying decimals",
      paragraphs: [
        "Multiply as if there were no decimal points, then count the total number of decimal places in the two factors and give the answer that many places. For 0.3 x 0.4: 3 x 4 = 12, and there are two decimal places in total, so the answer is 0.12.",
      ],
    },
    {
      kind: "theory",
      heading: "Dividing decimals",
      paragraphs: [
        "Turn the divisor into a whole number by shifting its decimal point, and shift the dividend's point by the same amount. Then divide normally. For 4.8 ÷ 0.6, shift both one place to get 48 ÷ 6 = 8.",
      ],
    },
    {
      kind: "theory",
      heading: "Rounding decimals",
      paragraphs: [
        "Rounding a decimal works just like rounding whole numbers: look at the digit immediately to the right of the place you are rounding to. If it is 5 or more, round up; otherwise round down. So 3.47 rounded to one decimal place is 3.5.",
      ],
    },
    {
      kind: "example",
      prompt: "Work out 0.3 x 0.4.",
      steps: [
        "Ignore the points and multiply: 3 x 4 = 12.",
        "Count decimal places in the factors: one in 0.3 and one in 0.4, so two in total.",
        "Place the point so the answer has two decimal places.",
      ],
      answer: "0.3 x 0.4 = 0.12.",
    },
    {
      kind: "example",
      prompt: "Round 3.47 to one decimal place.",
      steps: [
        "The first decimal place holds 4; look at the next digit, 7.",
        "Since 7 is 5 or more, round the 4 up to 5.",
      ],
      answer: "3.47 rounded to one decimal place is 3.5.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Lining decimals up on the right instead of by the decimal point when adding.",
          right:
            "Align the decimal points so tenths sit under tenths and hundredths under hundredths.",
        },
        {
          wrong: "Losing track of decimal places when multiplying (writing 0.3 x 0.4 = 1.2).",
          right:
            "Count the total decimal places in the factors and give the answer that many: 0.3 x 0.4 = 0.12.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Decimal places are tenths, hundredths, thousandths — each a tenth of the one before.",
        "Add and subtract by lining up the decimal points.",
        "Multiply ignoring points, then restore the total number of decimal places.",
        "Divide by making the divisor whole, shifting both points equally.",
        "Round decimals using the same next-digit rule as whole numbers.",
      ],
    },
  ],
};
