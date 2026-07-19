import type { LessonContent } from "@/lib/lesson-content-types";

export const linearInequalities: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "linear-equations-and-inequalities",
  lessonSlug: "linear-inequalities",
  title: "Linear Inequalities",
  objectives: [
    "Interpret the four inequality symbols: <, >, ≤ and ≥.",
    "Solve one-step and two-step linear inequalities.",
    "Solve inequalities involving brackets and fractions.",
    "Explain why the inequality sign reverses when multiplying or dividing by a negative number.",
    "Represent an inequality's solution on a number line using open and closed circles.",
    "Write a solution set in interval notation.",
    "Solve simple compound inequalities.",
    "Apply inequalities to real-life situations involving limits, budgets, speed and capacity.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "An equation says two things are exactly equal. An inequality says one thing is bigger, smaller, or bigger-or-equal, smaller-or-equal — it describes a whole range of possible values rather than a single number.",
        "Solving a linear inequality uses almost the same steps as solving a linear equation, with one crucial extra rule: multiplying or dividing both sides by a negative number reverses the direction of the inequality. This lesson develops that rule carefully, along with number-line representation and interval notation.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes confidence solving linear equations (from the earlier lesson in this chapter) and comfort with positive and negative numbers, since the sign-flip rule depends on understanding how multiplying by a negative affects order.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The four inequality symbols",
      body: "$x < a$ means $x$ is less than $a$. $x > a$ means $x$ is greater than $a$. $x \\le a$ means $x$ is less than or equal to $a$. $x \\ge a$ means $x$ is greater than or equal to $a$. The symbols $<$ and $>$ are strict (they exclude $a$ itself); $\\le$ and $\\ge$ include $a$.",
    },
    {
      kind: "theory",
      heading: "Solving one-step and two-step inequalities",
      paragraphs: [
        "Adding or subtracting the same number from both sides of an inequality never changes its direction — this works exactly like equations. The same is true for multiplying or dividing by a positive number.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $x + 5 > 12$.",
      steps: ["Subtract 5 from both sides: $x > 7$."],
      answer: "$x > 7$ — every number greater than 7 (not including 7 itself).",
    },
    {
      kind: "example",
      prompt: "Solve $3x - 4 \\le 11$.",
      steps: [
        "Add 4 to both sides: $3x \\le 15$.",
        "Divide both sides by 3 (positive — no sign change): $x \\le 5$.",
      ],
      answer: "$x \\le 5$ — every number less than or equal to 5.",
    },
    {
      kind: "theory",
      heading: "Why the sign reverses when dividing by a negative",
      paragraphs: [
        "Start with a true statement: $2 < 5$. Multiply both sides by $-1$: naively you'd get $-2 < -5$, but that's false — $-2$ is actually greater than $-5$ on the number line. To keep the statement true, the inequality sign must flip: $-2 > -5$.",
        "This happens because multiplying by a negative number reverses order on the number line: it reflects every number through zero, so what was 'more' becomes 'less' and vice versa. The rule applies whenever you multiply or divide both sides of an inequality by a negative number — not when you multiply or divide by a positive one.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "The one extra rule for inequalities",
      body: "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign: $<$ becomes $>$, and $\\le$ becomes $\\ge$ (and vice versa). This is the single biggest difference from solving equations.",
    },
    {
      kind: "example",
      prompt: "Solve $-2x + 6 > 14$.",
      steps: [
        "Subtract 6 from both sides: $-2x > 8$.",
        "Divide both sides by $-2$ — the inequality sign flips: $x < -4$.",
      ],
      answer:
        "$x < -4$. Notice the sign changed from $>$ to $<$ because we divided by a negative number.",
    },
    {
      kind: "inequalityExplorer",
      heading: "Interactive: step-by-step inequality solver and number-line practice",
    },
    {
      kind: "theory",
      heading: "Inequalities with brackets",
      paragraphs: [
        "Just as with equations, distribute any bracket first, then solve the resulting inequality using the usual steps — watching for any point where you multiply or divide by a negative.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $2(x + 3) \\le 16$.",
      steps: [
        "Distribute the 2: $2x + 6 \\le 16$.",
        "Subtract 6 from both sides: $2x \\le 10$.",
        "Divide both sides by 2 (positive — no sign change): $x \\le 5$.",
      ],
      answer: "$x \\le 5$.",
    },
    {
      kind: "example",
      prompt: "Solve $\\dfrac{x}{4} - 1 \\ge 2$.",
      steps: [
        "Add 1 to both sides: $\\dfrac{x}{4} \\ge 3$.",
        "Multiply both sides by 4 (positive — no sign change): $x \\ge 12$.",
      ],
      answer: "$x \\ge 12$.",
    },
    {
      kind: "theory",
      heading: "Number lines: open and closed circles",
      paragraphs: [
        "On a number line, a solution like $x > 7$ is shown as a ray starting just after 7 and continuing forever to the right. Since 7 itself is not included, an open circle (unfilled) marks the endpoint.",
        "A solution like $x \\le 5$ is a ray extending left from 5, including 5 itself, so a closed circle (filled) marks the endpoint. Open circles pair with the strict symbols $<$ and $>$; closed circles pair with $\\le$ and $\\ge$.",
      ],
    },
    {
      kind: "theory",
      heading: "Interval notation",
      paragraphs: [
        "Interval notation is a compact way to write a solution set. A round bracket (or parenthesis) means the endpoint is excluded, matching an open circle. A square bracket means the endpoint is included, matching a closed circle. Infinity always takes a round bracket, since it is never actually reached.",
      ],
    },
    {
      kind: "table",
      heading: "Number line, inequality and interval notation",
      headers: ["Inequality", "Circle", "Interval notation"],
      rows: [
        ["$x > 7$", "open, shaded right", "$(7, \\infty)$"],
        ["$x \\le 5$", "closed, shaded left", "$(-\\infty, 5]$"],
        ["$x < -4$", "open, shaded left", "$(-\\infty, -4)$"],
        ["$x \\ge 12$", "closed, shaded right", "$[12, \\infty)$"],
      ],
    },
    {
      kind: "theory",
      heading: "Compound inequalities",
      paragraphs: [
        "A compound inequality combines two conditions on the same variable, often written as a single chain such as $-2 \\le x < 5$, meaning $x$ is greater than or equal to $-2$ AND less than 5. On a number line, this is a finite segment between the two endpoints, with the circle style at each end matching its own symbol.",
        "Compound inequalities can also be solved by applying the same operation to all three parts at once, keeping the middle part isolated.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $-1 \\le 2x + 3 < 9$.",
      steps: [
        "Subtract 3 from all three parts: $-4 \\le 2x < 6$.",
        "Divide all three parts by 2 (positive — no sign change): $-2 \\le x < 3$.",
      ],
      answer: "$-2 \\le x < 3$, shown as a segment from $-2$ (closed circle) to 3 (open circle).",
    },
    {
      kind: "example",
      prompt:
        "A lift has a safe capacity limit: the total weight must not exceed 480 kg. If 5 people of average weight $x$ kg each want to use it, what values of $x$ keep the lift safe?",
      steps: [
        "The total weight is $5x$, and safety requires $5x \\le 480$.",
        "Divide both sides by 5 (positive — no sign change): $x \\le 96$.",
      ],
      answer:
        "The average weight per person must be at most 96 kg for the lift to remain within its safe limit.",
    },
    {
      kind: "realWorld",
      heading: "Where inequalities appear",
      items: [
        { area: "Budgets", text: "Spending must stay less than or equal to the money available." },
        {
          area: "Speed limits",
          text: "A driver's speed must remain less than or equal to the posted limit.",
        },
        {
          area: "Safety capacity",
          text: "The number of people or weight in a lift, bus or venue must not exceed a maximum.",
        },
        {
          area: "Exam grades",
          text: "A minimum mark is often required to pass or achieve a certain grade.",
        },
        {
          area: "Manufacturing tolerances",
          text: "A measured part must fall within an acceptable range to be usable.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "What does $x \\ge 4$ mean?", back: "$x$ is greater than or equal to 4." },
        {
          front: "When do you flip the inequality sign?",
          back: "When multiplying or dividing both sides by a negative number.",
        },
        {
          front: "Open circle or closed circle for $x < 3$?",
          back: "Open circle at 3 — 3 itself is excluded.",
        },
        { front: "Interval notation for $x \\ge 12$?", back: "$[12, \\infty)$." },
        {
          front: "First step for $2(x+3) \\le 16$?",
          back: "Distribute the bracket: $2x + 6 \\le 16$.",
        },
        {
          front: "What does a compound inequality like $-2 \\le x < 5$ describe?",
          back: "All values of $x$ between $-2$ (included) and 5 (excluded).",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: linear inequalities",
      stepKey: "linearInequalitiesPractice",
      questions: [
        {
          prompt: "Solve $x - 4 < 9$.",
          options: ["$x < 5$", "$x < 13$", "$x > 13$", "$x < -5$"],
          answer: 1,
          explanation: "Add 4 to both sides: $x < 13$.",
        },
        {
          prompt: "Solve $2x \\ge 18$.",
          options: ["$x \\ge 9$", "$x \\ge 36$", "$x \\le 9$", "$x \\ge 16$"],
          answer: 0,
          explanation: "Divide both sides by 2 (positive): $x \\ge 9$.",
        },
        {
          prompt: "Solve $4x + 3 > 19$.",
          options: ["$x > 4$", "$x > 5.5$", "$x > 5$", "$x > 22$"],
          answer: 0,
          explanation: "Subtract 3: $4x > 16$. Divide by 4: $x > 4$.",
        },
        {
          prompt: "Solve $-3x > 15$.",
          options: ["$x > -5$", "$x < -5$", "$x < 5$", "$x > 5$"],
          answer: 1,
          explanation: "Divide both sides by $-3$ — sign flips: $x < -5$.",
        },
        {
          prompt: "Solve $-x + 2 \\le 9$.",
          options: ["$x \\ge -7$", "$x \\le -7$", "$x \\le 7$", "$x \\ge 7$"],
          answer: 0,
          explanation: "Subtract 2: $-x \\le 7$. Divide by $-1$ — sign flips: $x \\ge -7$.",
        },
        {
          prompt: "Solve $3(x - 1) < 12$.",
          options: ["$x < 3$", "$x < 4$", "$x < 5$", "$x < 13$"],
          answer: 2,
          explanation: "Distribute: $3x - 3 < 12$. Add 3: $3x < 15$. Divide by 3: $x < 5$.",
        },
        {
          prompt: "Which interval notation matches $x \\le -2$?",
          options: ["$(-2, \\infty)$", "$(-\\infty, -2]$", "$[-2, \\infty)$", "$(-\\infty, -2)$"],
          answer: 1,
          explanation:
            "'Less than or equal to' shades left and includes the endpoint: a square bracket next to $-2$.",
        },
        {
          prompt: "Solve $-4 < 2x \\le 10$.",
          options: ["$-2 < x \\le 5$", "$-2 \\le x < 5$", "$-8 < x \\le 20$", "$2 < x \\le 5$"],
          answer: 0,
          explanation: "Divide all three parts by 2 (positive): $-2 < x \\le 5$.",
        },
        {
          prompt:
            "A parking garage allows vehicles up to 2 metres tall. A van is $x$ metres tall. Which inequality describes vans that fit?",
          options: ["$x < 2$", "$x \\le 2$", "$x > 2$", "$x = 2$"],
          answer: 1,
          explanation:
            "'Up to' includes the limit itself, so the van's height must satisfy $x \\le 2$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Dividing both sides of $-3x > 15$ by $-3$ without flipping the sign, giving $x > -5$.",
          right:
            "Dividing by a negative number reverses the inequality: the correct result is $x < -5$.",
        },
        {
          wrong: "Using an open circle for $x \\ge 4$.",
          right:
            "'Greater than or equal to' includes the endpoint, so it needs a closed (filled) circle at 4.",
        },
        {
          wrong:
            "Writing interval notation with a square bracket next to infinity, like $[7, \\infty]$.",
          right:
            "Infinity is never actually reached, so it always takes a round bracket: $[7, \\infty)$.",
        },
        {
          wrong: "Distributing incorrectly in $2(x+3) \\le 16$, e.g. getting $2x + 3 \\le 16$.",
          right: "Every term inside the bracket must be multiplied: $2(x+3) = 2x + 6$.",
        },
        {
          wrong:
            "Forgetting to check whether a sign flip occurred anywhere in a multi-step inequality.",
          right:
            "Check each multiplication or division step individually — the sign only flips on the steps that involve a negative number.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "$<, >, \\le, \\ge$ compare values rather than asserting exact equality.",
        "Adding or subtracting from both sides never changes the inequality's direction.",
        "Multiplying or dividing both sides by a negative number reverses the inequality sign.",
        "Open circles pair with strict inequalities ($<, >$); closed circles pair with $\\le, \\ge$.",
        "Interval notation uses round brackets for excluded endpoints and infinity, square brackets for included endpoints.",
        "Compound inequalities describe a range between two values and can be solved by operating on all three parts at once.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: linear inequalities",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Solve $x + 7 \\ge 15$.",
          options: ["$x \\ge 8$", "$x \\ge 22$", "$x \\le 8$", "$x \\ge -8$"],
          answer: 0,
          marks: 1,
          explanation: "Subtract 7 from both sides: $x \\ge 8$.",
        },
        {
          type: "mc",
          prompt: "Solve $5x < 30$.",
          options: ["$x < 6$", "$x > 6$", "$x < 35$", "$x < 150$"],
          answer: 0,
          marks: 1,
          explanation: "Divide both sides by 5 (positive): $x < 6$.",
        },
        {
          type: "tf",
          prompt:
            "Dividing both sides of an inequality by a positive number reverses the inequality sign.",
          answer: false,
          marks: 1,
          explanation:
            "Only dividing or multiplying by a negative number reverses the sign; positive operations preserve it.",
        },
        {
          type: "mc",
          prompt: "Solve $-5x + 3 \\ge 18$.",
          options: ["$x \\ge -3$", "$x \\le -3$", "$x \\ge 3$", "$x \\le 3$"],
          answer: 1,
          marks: 2,
          explanation: "Subtract 3: $-5x \\ge 15$. Divide by $-5$, sign flips: $x \\le -3$.",
        },
        {
          type: "mc",
          prompt: "Which graph correctly represents $x < 6$?",
          options: [
            "Open circle at 6, shading right",
            "Open circle at 6, shading left",
            "Closed circle at 6, shading left",
            "Closed circle at 6, shading right",
          ],
          answer: 1,
          marks: 2,
          explanation:
            "'Less than' shades toward smaller numbers (left) and excludes 6, so an open circle at 6 shaded left.",
        },
        {
          type: "matching",
          prompt: "Match each inequality to its correct interval notation.",
          left: ["$x > 3$", "$x \\le -1$", "$x \\ge 0$", "$x < 9$"],
          options: ["$(-\\infty, -1]$", "$[0, \\infty)$", "$(3, \\infty)$", "$(-\\infty, 9)$"],
          answer: [2, 0, 1, 3],
          marks: 4,
          explanation:
            "Each inequality's direction and endpoint inclusion determines the correct bracket style and side.",
        },
        {
          type: "mc",
          prompt: "Solve $3(2x - 1) \\ge 15$.",
          options: ["$x \\ge 2$", "$x \\ge 3$", "$x \\ge 8/3$", "$x \\ge 16/6$"],
          answer: 1,
          marks: 2,
          explanation:
            "Distribute: $6x - 3 \\ge 15$. Add 3: $6x \\ge 18$. Divide by 6: $x \\ge 3$.",
        },
        {
          type: "multi",
          prompt: "Select every inequality whose solution requires flipping the sign at some step.",
          options: ["$-2x < 10$", "$3x - 1 \\le 8$", "$\\dfrac{x}{-4} \\ge 3$", "$5 - x > 2$"],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "The first, third and fourth each involve dividing (or effectively multiplying) by a negative number to isolate $x$; the second only involves positive operations.",
        },
        {
          type: "mc",
          prompt:
            "A monthly budget allows spending of at most 1,200 riyals. If rent is a fixed 700 riyals and the rest ($x$ riyals) covers everything else, which inequality describes valid values of $x$?",
          options: ["$x \\le 500$", "$x \\ge 500$", "$x \\le 1{,}200$", "$x \\le 1{,}900$"],
          answer: 0,
          marks: 2,
          explanation: "$700 + x \\le 1200 \\Rightarrow x \\le 500$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "inequalityExplorer", label: "Use the inequality-solving laboratory" },
        { key: "linearInequalitiesPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
