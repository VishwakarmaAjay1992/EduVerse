import type { LessonContent } from "@/lib/lesson-content-types";

export const estimationAndApproximation: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "whole-numbers-and-arithmetic",
  lessonSlug: "estimation-and-approximation",
  title: "Estimation and Approximation",
  objectives: [
    "Round numbers to make quick estimates",
    "Use front-end estimation and compatible numbers",
    "Check whether an answer is reasonable",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "You do not always need an exact answer. Estimation gives a quick, close-enough result — useful for checking a shopping total, judging whether a calculation looks right, or making a fast decision. A good estimate is easy to work out in your head and near the true value.",
      ],
    },
    {
      kind: "theory",
      heading: "Estimating by rounding",
      paragraphs: [
        "Round each number to a convenient place — often its leading digit — then calculate with the rounded values. The rougher the rounding, the faster the estimate but the larger the possible error.",
      ],
    },
    {
      kind: "theory",
      heading: "Front-end estimation and compatible numbers",
      paragraphs: [
        "Front-end estimation keeps only the leading digits and treats the rest as zeros: 487 + 312 becomes 400 + 300 = 700 as a quick lower estimate. Compatible numbers are values chosen to divide or multiply neatly: to estimate 356 divided by 7, use 350 divided by 7 = 50.",
      ],
    },
    {
      kind: "theory",
      heading: "Checking reasonableness",
      paragraphs: [
        "Estimation is the fastest way to catch a mistake. If a careful calculation gives 7,990 for 487 + 312, the estimate of about 800 tells you a place-value slip has crept in. Always ask: is my exact answer close to my estimate?",
      ],
    },
    {
      kind: "example",
      prompt: "Estimate 487 + 312.",
      steps: [
        "Round each to the nearest hundred: 487 rounds to 500, 312 rounds to 300.",
        "Add the rounded values: 500 + 300.",
      ],
      answer: "About 800 (the exact answer, 799, is very close).",
    },
    {
      kind: "example",
      prompt: "Estimate 62 x 19.",
      steps: ["Round to friendly numbers: 62 rounds to 60, 19 rounds to 20.", "Multiply: 60 x 20."],
      answer: "About 1,200 (the exact answer is 1,178).",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Rounding one number up and forgetting it pulls the estimate above the true value.",
          right:
            "Notice the direction of your rounding; rounding both numbers up gives an over-estimate, both down gives an under-estimate.",
        },
        {
          wrong: "Skipping the reasonableness check after an exact calculation.",
          right:
            "Compare your exact answer with a quick estimate to catch place-value and keying errors.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Estimate by rounding numbers to convenient values, then calculating.",
        "Front-end estimation and compatible numbers make mental estimates easy.",
        "Use an estimate to check that an exact answer is reasonable.",
      ],
    },
  ],
};
