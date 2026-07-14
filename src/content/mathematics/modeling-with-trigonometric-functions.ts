import type { LessonContent } from "@/lib/lesson-content-types";
export const modelingWithTrigonometricFunctions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "trigonometric-equations-and-applications",
  lessonSlug: "modeling-with-trigonometric-functions",
  title: "Modeling with Trigonometric Functions",
  objectives: [
    "Identify amplitude, period and phase shift in $y = a\\sin(bx + c) + d$",
    "Sketch transformed sine and cosine graphs",
    "Model real-world periodic phenomena (tides, temperature, sound)",
    "Read and interpret trig-graph features",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Many real-world quantities repeat in cycles — tides, daylight hours, sound waves, heart rhythms. The sine and cosine functions model these naturally once you understand how to stretch, shift and flip them.",
      ],
    },
    {
      kind: "theory",
      heading: "The general sinusoidal model",
      paragraphs: [
        String.raw`$y = a\sin(bx + c) + d$ where $a$ controls the amplitude (vertical stretch), $b$ controls the period ($\text{period} = 360°/b$ or $2\pi/b$), $c$ shifts the graph horizontally, and $d$ shifts it vertically.`,
      ],
    },
    {
      kind: "formula",
      latex: String.raw`\text{Period} = \frac{360°}{b} \qquad \text{Amplitude} = |a|`,
    },
    {
      kind: "theory",
      heading: "Reading a trig graph",
      paragraphs: [
        "To identify the model from a graph: amplitude is half the distance from peak to trough; the period is the horizontal distance between two consecutive peaks; the vertical shift $d$ is the midline; and the phase shift slides the starting point.",
      ],
    },
    { kind: "trigGraphExplorer", heading: "Explore trigonometric graphs" },
    {
      kind: "realWorld",
      heading: "Where sinusoidal models appear",
      items: [
        {
          area: "Oceanography",
          text: "Tides follow a roughly sinusoidal pattern with a period of about 12.4 hours.",
        },
        {
          area: "Music / acoustics",
          text: "Sound is a pressure wave; a pure tone is a perfect sine wave whose frequency sets the pitch.",
        },
        {
          area: "Climate",
          text: "Average monthly temperature over a year traces a sine curve with a period of 12 months.",
        },
        {
          area: "Engineering",
          text: "AC electricity oscillates as a sine wave at 50 Hz (or 60 Hz), powering the grid.",
        },
      ],
    },
    {
      kind: "example",
      prompt: String.raw`A Ferris wheel has radius 10 m and its centre is 12 m above the ground. It completes one revolution every 60 seconds. Model the height $h$ of a rider.`,
      steps: [
        "Amplitude = 10 (the radius). Vertical shift $d$ = 12 (the centre height). Period = 60 s, so $b = 360°/60 = 6$.",
        String.raw`$h = 10\sin(6t - 90°) + 12$ (shifted by $-90°$ so the rider starts at the bottom).`,
      ],
      answer: String.raw`$h = 10\sin(6t - 90°) + 12$ metres.`,
    },
    {
      kind: "example",
      prompt: String.raw`A graph has peaks at $y = 5$ and troughs at $y = 1$. Find the amplitude and midline.`,
      steps: ["Amplitude = (5 − 1)/2 = 2.", "Midline $d$ = (5 + 1)/2 = 3."],
      answer: "Amplitude = 2, midline $y = 3$.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Confusing frequency and period.",
          right: String.raw`Period is the time for one cycle; frequency is cycles per unit time ($f = 1/T$).`,
        },
        {
          wrong: String.raw`Thinking amplitude can be negative.`,
          right: String.raw`Amplitude $= |a|$ is always positive (it's a distance).`,
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice",
      stepKey: "practice",
      questions: [
        {
          prompt: String.raw`Period of $y = \sin 2x$ (in degrees)?`,
          options: ["90°", "180°", "360°", "720°"],
          answer: 1,
          explanation: "360°/2 = 180°.",
        },
        {
          prompt: String.raw`Amplitude of $y = 3\cos x$?`,
          options: ["1", "3", "6", "1/3"],
          answer: 1,
          explanation: "|a| = 3.",
        },
        {
          prompt: "The midline of a graph with max 8 and min 2 is…",
          options: ["3", "5", "6", "10"],
          answer: 1,
          explanation: "(8+2)/2 = 5.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`$y = a\sin(bx+c)+d$: $|a|$ = amplitude, $360°/b$ = period, $d$ = midline.`,
        "Tides, sound, temperature and AC electricity follow sinusoidal models.",
        String.raw`Amplitude $= |a|$ is always positive; period $= 360°/b$ or $2\pi/b$.`,
        "Read amplitude and midline from a graph's peaks and troughs.",
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
          prompt: String.raw`Amplitude of $y = 4\sin x$?`,
          options: ["1", "2", "4", "8"],
          answer: 2,
          explanation: "|a| = 4.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: String.raw`Period of $y = \cos 3x$ in degrees?`,
          options: ["60°", "90°", "120°", "360°"],
          answer: 2,
          explanation: "360°/3 = 120°.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: "A wave peaks at 7 and troughs at 1. The amplitude is…",
          options: ["3", "4", "6", "8"],
          answer: 0,
          explanation: "(7−1)/2 = 3.",
        },
        {
          type: "mc",
          marks: 2,
          prompt: String.raw`In $y = 2\sin x + 5$, the midline is…`,
          options: ["y = 2", "y = 5", "y = 7", "y = 3"],
          answer: 1,
          explanation: "d = 5 is the vertical shift / midline.",
        },
        {
          type: "tf",
          marks: 1,
          prompt: "Amplitude can be negative.",
          answer: false,
          explanation: "Amplitude = |a|, always positive.",
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
