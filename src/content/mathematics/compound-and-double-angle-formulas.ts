import type { LessonContent } from "@/lib/lesson-content-types";
export const compoundAndDoubleAngleFormulas: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "the-unit-circle-and-identities",
  lessonSlug: "compound-and-double-angle-formulas",
  title: "Compound and Double Angle Formulas",
  objectives: [
    "State and use the addition formulas for sine and cosine",
    "Derive and apply double-angle formulas",
    "Simplify expressions using compound-angle identities",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        String.raw`When two angles are added or subtracted inside a trig function, the result is not the sum of the individual functions — $\sin(A+B) \neq \sin A + \sin B$. The addition formulas give the correct expansion and open the door to double-angle and half-angle results.`,
      ],
    },
    {
      kind: "theory",
      heading: "Addition formulas",
      paragraphs: [
        "These identities expand a trig function of a sum or difference into products of functions of the individual angles:",
      ],
    },
    { kind: "formula", latex: String.raw`\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B` },
    {
      kind: "formula",
      latex: String.raw`\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B`,
      caption: "Note the sign flip: cosine uses the opposite sign.",
    },
    {
      kind: "theory",
      heading: "Double-angle formulas",
      paragraphs: [
        String.raw`Setting $B = A$ in the addition formulas gives the double-angle identities:`,
      ],
    },
    { kind: "formula", latex: String.raw`\sin 2A = 2\sin A\cos A` },
    {
      kind: "formula",
      latex: String.raw`\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A`,
      caption: "Three equivalent forms — choose the one that simplifies your problem.",
    },
    {
      kind: "callout",
      variant: "tip",
      body: String.raw`$\cos 2A$ has three forms because you can substitute $\sin^2 A = 1-\cos^2 A$ or vice versa. Pick whichever leaves you with only the function you need.`,
    },
    {
      kind: "example",
      prompt: String.raw`Find the exact value of $\sin 75°$.`,
      steps: [
        String.raw`Write $75° = 45° + 30°$.`,
        String.raw`$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30°$.`,
        String.raw`$= \frac{\sqrt 2}{2}\cdot\frac{\sqrt 3}{2} + \frac{\sqrt 2}{2}\cdot\frac{1}{2} = \frac{\sqrt 6 + \sqrt 2}{4}$.`,
      ],
      answer: String.raw`$\sin 75° = \frac{\sqrt 6+\sqrt 2}{4} \approx 0.9659$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Given $\sin\theta = \frac{3}{5}$ (acute), find $\sin 2\theta$.`,
      steps: [
        String.raw`First find $\cos\theta = \frac{4}{5}$ (Pythagorean identity).`,
        String.raw`$\sin 2\theta = 2\sin\theta\cos\theta = 2 \cdot \frac{3}{5}\cdot\frac{4}{5}$.`,
      ],
      answer: String.raw`$\sin 2\theta = \frac{24}{25}$.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: String.raw`Writing $\sin(A+B) = \sin A + \sin B$.`,
          right: "Use the addition formula: the trig of a sum is not the sum of the trigs.",
        },
        {
          wrong: String.raw`Mixing up the sign in the cosine formula.`,
          right: String.raw`Cosine flips the sign: $\cos(A+B)$ uses a minus, $\cos(A-B)$ uses a plus.`,
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice",
      stepKey: "practice",
      questions: [
        {
          prompt: String.raw`$\sin(A+B) = \sin A\cos B + ?$`,
          options: [
            String.raw`$\cos A\sin B$`,
            String.raw`$\sin A\sin B$`,
            String.raw`$\cos A\cos B$`,
          ],
          answer: 0,
          explanation: "The addition formula.",
        },
        {
          prompt: String.raw`$\cos 2A = 2\cos^2 A - ?$`,
          options: ["0", "1", "2"],
          answer: 1,
          explanation: String.raw`$\cos 2A = 2\cos^2 A - 1$.`,
        },
        {
          prompt: String.raw`$\sin 2\theta = ?$`,
          options: [
            String.raw`$2\sin\theta$`,
            String.raw`$\sin^2\theta$`,
            String.raw`$2\sin\theta\cos\theta$`,
          ],
          answer: 2,
          explanation: "The double-angle formula for sine.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`$\sin(A\pm B) = \sin A\cos B \pm \cos A\sin B$.`,
        String.raw`$\cos(A\pm B) = \cos A\cos B \mp \sin A\sin B$ (note the sign flip).`,
        String.raw`$\sin 2A = 2\sin A\cos A$; $\cos 2A$ has three equivalent forms.`,
        "Use addition formulas to find exact values of non-standard angles like $75°$ or $15°$.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson quiz",
      passMark: 60,
      questions: [
        {
          type: "tf",
          marks: 1,
          prompt: String.raw`$\sin(A+B) = \sin A + \sin B$.`,
          answer: false,
          explanation: "Must use the addition formula.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: String.raw`$\sin 2A = ?$`,
          options: [
            String.raw`$2\sin A$`,
            String.raw`$\sin^2 A$`,
            String.raw`$2\sin A\cos A$`,
            String.raw`$\sin A + \cos A$`,
          ],
          answer: 2,
          explanation: "Double-angle formula for sine.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`Which is NOT a form of $\cos 2A$?`,
          options: [
            String.raw`$\cos^2A-\sin^2A$`,
            String.raw`$2\cos^2A-1$`,
            String.raw`$2\sin A\cos A$`,
            String.raw`$1-2\sin^2A$`,
          ],
          answer: 2,
          explanation: String.raw`$2\sin A\cos A$ is $\sin 2A$, not $\cos 2A$.`,
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`$\cos(A+B)$ uses which sign between its two terms?`,
          options: ["plus", "minus"],
          answer: 1,
          explanation: String.raw`$\cos(A+B) = \cos A\cos B - \sin A\sin B$.`,
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
