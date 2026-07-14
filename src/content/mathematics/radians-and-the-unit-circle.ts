import type { LessonContent } from "@/lib/lesson-content-types";
export const radiansAndTheUnitCircle: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "the-unit-circle-and-identities",
  lessonSlug: "radians-and-the-unit-circle",
  title: "Radians and the Unit Circle",
  objectives: [
    "Define the unit circle and radian measure",
    "Convert between degrees and radians",
    "Use coordinates on the unit circle as $\\cos\\theta$ and $\\sin\\theta$",
    "Identify quadrants and the sign of each ratio",
    "Find reference angles",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "So far we have measured angles in degrees. There is a second unit — the radian — that arises naturally from circles and is essential in calculus and physics. The unit circle ties both systems together and extends trigonometry beyond right triangles to every angle from $0°$ to $360°$ and beyond.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The unit circle",
      body: "A circle of radius 1 centred at the origin. Any point on it has coordinates $(\\cos\\theta,\\,\\sin\\theta)$.",
    },
    {
      kind: "theory",
      heading: "Radian measure",
      paragraphs: [
        String.raw`One radian is the angle at the centre of a circle when the arc length equals the radius. A full circle is $2\pi$ radians, so $360° = 2\pi\;\text{rad}$.`,
      ],
      list: [
        String.raw`To convert degrees to radians: multiply by $\frac{\pi}{180}$`,
        String.raw`To convert radians to degrees: multiply by $\frac{180}{\pi}$`,
        String.raw`Key values: $90° = \frac{\pi}{2}$, $180° = \pi$, $270° = \frac{3\pi}{2}$, $360° = 2\pi$`,
      ],
    },
    {
      kind: "formula",
      latex: String.raw`\theta_{\text{rad}} = \theta_{\text{deg}} \times \frac{\pi}{180}`,
      caption: "Degrees to radians.",
    },
    {
      kind: "theory",
      heading: "Coordinates as trig values",
      paragraphs: [
        String.raw`On the unit circle the $x$-coordinate of the point is $\cos\theta$ and the $y$-coordinate is $\sin\theta$. This definition works for every angle, not just acute ones.`,
      ],
    },
    {
      kind: "theory",
      heading: "Quadrant signs",
      paragraphs: [
        "As the angle grows from $0°$ to $360°$, the signs of sine, cosine and tangent change by quadrant. A useful mnemonic is ASTC (All Students Take Calculus):",
      ],
      list: [
        "Quadrant I (0°–90°): all positive",
        "Quadrant II (90°–180°): only sin positive",
        "Quadrant III (180°–270°): only tan positive",
        "Quadrant IV (270°–360°): only cos positive",
      ],
    },
    {
      kind: "theory",
      heading: "Reference angles",
      paragraphs: [
        String.raw`The reference angle is the acute angle between the terminal side and the $x$-axis. It lets you evaluate trig functions for any angle by finding the value at the reference angle and then attaching the correct sign from the quadrant.`,
      ],
    },
    { kind: "unitCircleExplorer", heading: "Explore the unit circle" },
    {
      kind: "example",
      prompt: String.raw`Convert $150°$ to radians.`,
      steps: [
        String.raw`Multiply by $\frac{\pi}{180}$: $150 \times \frac{\pi}{180} = \frac{150\pi}{180}$.`,
        String.raw`Simplify: $\frac{5\pi}{6}$.`,
      ],
      answer: String.raw`$150° = \frac{5\pi}{6}$ rad.`,
    },
    {
      kind: "example",
      prompt: String.raw`Find the reference angle and the sign of $\sin 210°$.`,
      steps: [
        String.raw`$210°$ is in Quadrant III ($180°$–$270°$).`,
        String.raw`Reference angle = $210° - 180° = 30°$.`,
        String.raw`In Quadrant III, sine is negative.`,
      ],
      answer: String.raw`Reference angle $30°$; $\sin 210° = -\sin 30° = -\frac{1}{2}$.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Forgetting to simplify the fraction when converting to radians.",
          right: String.raw`Always reduce: $\frac{150\pi}{180} = \frac{5\pi}{6}$, not $\frac{150\pi}{180}$.`,
        },
        {
          wrong: "Getting the quadrant wrong for angles like $270°$.",
          right:
            "$270°$ lies on the negative $y$-axis (boundary of III and IV), so $\\cos 270° = 0$ and $\\sin 270° = -1$.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice",
      stepKey: "practice",
      questions: [
        {
          prompt: "Convert 90° to radians.",
          options: ["π/4", "π/2", "π", "2π"],
          answer: 1,
          explanation: "90 × π/180 = π/2.",
        },
        {
          prompt: "In which quadrant is 200°?",
          options: ["I", "II", "III", "IV"],
          answer: 2,
          explanation: "180°–270° → Quadrant III.",
        },
        {
          prompt: "What is the reference angle for 315°?",
          options: ["45°", "60°", "30°", "15°"],
          answer: 0,
          explanation: "360° − 315° = 45°.",
        },
        {
          prompt: String.raw`Is $\cos 150°$ positive or negative?`,
          options: ["Positive", "Negative"],
          answer: 1,
          explanation: "150° is in Quadrant II where cosine is negative.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`A radian is the angle whose arc equals the radius; $360° = 2\pi$ rad.`,
        String.raw`On the unit circle, $(\cos\theta,\sin\theta)$ are the coordinates.`,
        "ASTC tells you which ratios are positive in each quadrant.",
        "The reference angle is the acute angle to the $x$-axis — use it with the quadrant sign.",
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
          prompt: "How many radians in a full circle?",
          options: ["π", "2π", "π/2", "4π"],
          answer: 1,
          explanation: "A full turn is 2π radians.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Convert 60° to radians.",
          options: ["π/6", "π/4", "π/3", "π/2"],
          answer: 2,
          explanation: "60 × π/180 = π/3.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "On the unit circle, the x-coordinate represents…",
          options: ["sin θ", "cos θ", "tan θ", "the radius"],
          answer: 1,
          explanation: "The x-coordinate is cos θ.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "In which quadrant is sin positive and cos negative?",
          options: ["I", "II", "III", "IV"],
          answer: 1,
          explanation: "Quadrant II: sin +, cos −.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`What is $\cos 180°$?`,
          options: ["0", "1", "−1", "undefined"],
          answer: 2,
          explanation: "The point at 180° is (−1, 0), so cos 180° = −1.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: "What is the reference angle for 225°?",
          options: ["45°", "135°", "225°", "30°"],
          answer: 0,
          explanation: "225° − 180° = 45°.",
        },
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [{ key: "practice", label: "Complete the practice section" }],
    },
  ],
};
