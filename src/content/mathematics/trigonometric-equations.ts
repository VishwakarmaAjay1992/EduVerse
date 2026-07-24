import type { LessonContent } from "@/lib/lesson-content-types";
export const trigonometricEquations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "trigonometric-equations",
  lessonSlug: "trigonometric-equations",
  title: "Trigonometric Equations",
  objectives: [
    "Solve equations like $\\sin\\theta = k$ for $0° \\le \\theta \\le 360°$",
    "Find principal and secondary solutions using symmetry",
    "Solve equations that require an identity first",
    "Understand general solutions",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        String.raw`A trigonometric equation asks: for which angles does a trig expression equal a given value? Unlike identities (true for all angles), equations have specific solutions. The unit circle and reference angles are your main tools.`,
      ],
    },
    {
      kind: "theory",
      heading: "Solving sin θ = k",
      paragraphs: [
        String.raw`Step 1: Find the reference angle $\alpha = \sin^{-1}|k|$. Step 2: Decide which quadrants give the correct sign. Step 3: Write the solutions in the required range. For $\sin\theta > 0$, solutions are in Quadrants I and II; for $\sin\theta < 0$, Quadrants III and IV.`,
      ],
    },
    {
      kind: "theory",
      heading: "Solving cos θ = k",
      paragraphs: [
        String.raw`Same method: reference angle $\alpha = \cos^{-1}|k|$. Positive → Quadrants I and IV. Negative → Quadrants II and III.`,
      ],
    },
    {
      kind: "theory",
      heading: "Equations requiring identities",
      paragraphs: [
        String.raw`Some equations need rearranging first. For example, $2\sin^2\theta - 1 = 0$ becomes $\sin^2\theta = \frac{1}{2}$, then $\sin\theta = \pm\frac{1}{\sqrt 2}$, which you solve in all four quadrants.`,
      ],
    },
    {
      kind: "example",
      prompt: String.raw`Solve $\sin\theta = 0.5$ for $0° \le \theta \le 360°$.`,
      steps: [
        String.raw`Reference angle: $\sin^{-1}(0.5) = 30°$.`,
        String.raw`Sin is positive in Quadrants I and II.`,
        String.raw`Solutions: $\theta = 30°$ and $\theta = 180° - 30° = 150°$.`,
      ],
      answer: String.raw`$\theta = 30°$ or $\theta = 150°$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Solve $\cos\theta = -\frac{\sqrt 3}{2}$ for $0° \le \theta \le 360°$.`,
      steps: [
        String.raw`Reference angle: $\cos^{-1}\!\left(\frac{\sqrt 3}{2}\right) = 30°$.`,
        String.raw`Cos is negative in Quadrants II and III.`,
        String.raw`$\theta = 180° - 30° = 150°$ or $\theta = 180° + 30° = 210°$.`,
      ],
      answer: String.raw`$\theta = 150°$ or $\theta = 210°$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Solve $2\sin^2\theta = 1$ for $0° \le \theta \le 360°$.`,
      steps: [
        String.raw`$\sin^2\theta = \frac{1}{2}$, so $\sin\theta = \pm\frac{1}{\sqrt 2}$.`,
        String.raw`Reference angle $= 45°$.`,
        String.raw`Four solutions (sin positive in I, II; negative in III, IV): $45°, 135°, 225°, 315°$.`,
      ],
      answer: String.raw`$\theta = 45°, 135°, 225°, 315°$.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Only finding one solution when there are two (or four) in the range.",
          right: "Always check every quadrant where the sign matches.",
        },
        {
          wrong: String.raw`Writing $\sin^{-1}(-0.5) = -30°$ and stopping.`,
          right:
            "The calculator gives the principal value; use the reference angle and quadrant signs to find all solutions in $[0°, 360°]$.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice",
      stepKey: "practice",
      questions: [
        {
          prompt: String.raw`How many solutions does $\cos\theta = 0.5$ have in $[0°,360°]$?`,
          options: ["1", "2", "3", "4"],
          answer: 1,
          explanation: "Cos positive → Quadrants I and IV → two solutions (60° and 300°).",
        },
        {
          prompt: String.raw`Solve $\tan\theta = 1$ in $[0°,360°]$. One solution is 45°. The other is…`,
          options: ["135°", "225°", "315°", "270°"],
          answer: 1,
          explanation: "Tan positive in I and III → 45° and 225°.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Find the reference angle from the inverse function.",
        "Use quadrant signs to locate all solutions in the required range.",
        "Some equations need an identity to simplify before solving.",
        String.raw`$\sin\theta = k$ can have 0, 1, or 2 solutions in $[0°, 360°]$.`,
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson quiz",
      passMark: 60,
      questions: [
        {
          type: "mc",
          marks: 1,
          prompt: String.raw`$\sin\theta = 0.5$: reference angle?`,
          options: ["30°", "45°", "60°", "90°"],
          answer: 0,
          explanation: "sin⁻¹(0.5) = 30°.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`How many solutions does $\sin\theta = -1$ have in $[0°,360°]$?`,
          options: ["0", "1", "2", "4"],
          answer: 1,
          explanation: "Only θ = 270°.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`Solve $\cos\theta = 0$ in $[0°,360°]$.`,
          options: ["0° and 180°", "90° and 270°", "0° only", "180° only"],
          answer: 1,
          explanation: "cos = 0 on the y-axis: 90° and 270°.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`$2\sin^2\theta - 1 = 0$ has how many solutions in $[0°,360°]$?`,
          options: ["1", "2", "3", "4"],
          answer: 3,
          explanation: "sin θ = ±1/√2 → solutions in all four quadrants.",
        },
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [{ key: "practice", label: "Complete the practice" }],
    },
  ],
};
