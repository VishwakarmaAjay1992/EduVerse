import type { LessonContent } from "@/lib/lesson-content-types";
export const fundamentalIdentities: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "the-unit-circle-and-identities",
  lessonSlug: "fundamental-identities",
  title: "Fundamental Identities",
  objectives: [
    "State the Pythagorean identity $\\sin^2\\theta + \\cos^2\\theta = 1$",
    "Use the quotient identity $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$",
    "Find one trig value from another using identities",
    "Prove simple identities",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "An identity is an equation true for every angle where both sides are defined. Two identities — the Pythagorean and the quotient — unlock a huge number of simplifications and are used throughout higher mathematics.",
      ],
    },
    {
      kind: "theory",
      heading: "The Pythagorean identity",
      paragraphs: [
        String.raw`On the unit circle a point has coordinates $(\cos\theta,\sin\theta)$ and lies on a circle of radius 1. The distance formula gives $\cos^2\theta + \sin^2\theta = 1$. This is the Pythagorean identity — it works for every angle.`,
      ],
    },
    {
      kind: "formula",
      latex: String.raw`\sin^2\theta + \cos^2\theta = 1`,
      caption: "True for all angles.",
    },
    {
      kind: "theory",
      heading: "The quotient identity",
      paragraphs: [
        String.raw`Tangent is defined as opposite over adjacent. On the unit circle that becomes $\frac{\sin\theta}{\cos\theta}$, giving the quotient identity.`,
      ],
    },
    {
      kind: "formula",
      latex: String.raw`\tan\theta = \frac{\sin\theta}{\cos\theta}`,
      caption: String.raw`Defined when $\cos\theta \neq 0$. This is why $\tan 90°$ is undefined.`,
    },
    {
      kind: "theory",
      heading: "Finding missing values",
      paragraphs: [
        String.raw`If you know $\sin\theta$ and the quadrant, you can find $\cos\theta$ by rearranging: $\cos\theta = \pm\sqrt{1 - \sin^2\theta}$. The quadrant tells you the sign.`,
      ],
    },
    {
      kind: "example",
      prompt: String.raw`Given $\sin\theta = \frac{3}{5}$ and $\theta$ is acute, find $\cos\theta$.`,
      steps: [
        String.raw`Use $\cos^2\theta = 1 - \sin^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$.`,
        String.raw`Take the positive root (acute angle → Quadrant I → cos positive): $\cos\theta = \frac{4}{5}$.`,
      ],
      answer: String.raw`$\cos\theta = \frac{4}{5}$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Given $\sin\theta = 0.6$ and $\cos\theta = 0.8$, find $\tan\theta$.`,
      steps: [String.raw`$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{0.6}{0.8}$.`],
      answer: String.raw`$\tan\theta = 0.75$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Show that $\frac{\sin^2\theta}{\cos^2\theta} + 1 = \frac{1}{\cos^2\theta}$.`,
      steps: [
        String.raw`Left side: $\frac{\sin^2\theta}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} = \frac{\sin^2\theta + \cos^2\theta}{\cos^2\theta}$.`,
        String.raw`By the Pythagorean identity the numerator is 1.`,
      ],
      answer: String.raw`$= \frac{1}{\cos^2\theta}$ ✓`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: String.raw`Forgetting the ± when solving $\cos\theta = \sqrt{1-\sin^2\theta}$.`,
          right: "The quadrant decides the sign — always check before dropping the ±.",
        },
        {
          wrong: String.raw`Thinking $\sin^2\theta$ means $\sin(\theta^2)$.`,
          right: String.raw`$\sin^2\theta$ means $(\sin\theta)^2$ — the square of the sine value.`,
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice",
      stepKey: "practice",
      questions: [
        {
          prompt: String.raw`If $\cos\theta = \frac{12}{13}$ (acute), what is $\sin\theta$?`,
          options: ["5/13", "12/13", "5/12", "13/5"],
          answer: 0,
          explanation: String.raw`$\sin^2\theta = 1 - 144/169 = 25/169$, so $\sin\theta = 5/13$.`,
        },
        {
          prompt: String.raw`$\tan\theta = \frac{\sin\theta}{?}$`,
          options: ["sin θ", "cos θ", "tan θ", "1"],
          answer: 1,
          explanation: "The quotient identity: tan θ = sin θ / cos θ.",
        },
        {
          prompt: String.raw`$\sin^2 30° + \cos^2 30° = ?$`,
          options: ["0", "0.5", "1", "√3"],
          answer: 2,
          explanation: "The Pythagorean identity always equals 1.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`$\sin^2\theta + \cos^2\theta = 1$ for every angle.`,
        String.raw`$\tan\theta = \sin\theta / \cos\theta$ when $\cos\theta \neq 0$.`,
        "Use the identity + the quadrant sign to find one ratio from another.",
        String.raw`$\sin^2\theta$ means $(\sin\theta)^2$, not $\sin(\theta^2)$.`,
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
          prompt: String.raw`$\sin^2\theta + \cos^2\theta = ?$`,
          options: ["0", "1", "sin θ", "cos θ"],
          answer: 1,
          explanation: "The Pythagorean identity.",
        },
        {
          type: "tf",
          marks: 1,
          prompt: String.raw`$\tan 90°$ is defined.`,
          answer: false,
          explanation: String.raw`$\cos 90° = 0$, so $\tan 90° = \sin 90° / \cos 90°$ is undefined.`,
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`If $\sin\theta = 0.8$ (acute), find $\cos\theta$.`,
          options: ["0.2", "0.6", "0.36", "0.8"],
          answer: 1,
          explanation: String.raw`$\cos\theta = \sqrt{1 - 0.64} = \sqrt{0.36} = 0.6$.`,
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`Given $\sin\theta = 3/5$, $\cos\theta = 4/5$, find $\tan\theta$.`,
          options: ["3/4", "4/3", "5/3", "3/5"],
          answer: 0,
          explanation: "tan = sin/cos = (3/5)/(4/5) = 3/4.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`Which is equivalent to $\frac{1}{\cos^2\theta}$?`,
          options: [
            String.raw`$1+\sin^2\theta$`,
            String.raw`$\tan^2\theta+1$`,
            String.raw`$\sin^2\theta$`,
            String.raw`$\cos^2\theta$`,
          ],
          answer: 1,
          explanation: String.raw`Divide the Pythagorean identity by $\cos^2\theta$: $\tan^2\theta + 1 = 1/\cos^2\theta$.`,
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
