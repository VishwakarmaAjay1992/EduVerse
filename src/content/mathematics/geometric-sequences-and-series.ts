import type { LessonContent } from "@/lib/lesson-content-types";

export const geometricSequencesAndSeries: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "sequences-and-series",
  lessonSlug: "geometric-sequences-and-series",
  title: "Geometric Sequences and Series",
  objectives: [
    "Identify a geometric sequence and its common ratio.",
    "Find the nth term of a geometric sequence using a formula.",
    "Find the sum of the first n terms of a geometric series.",
    "Determine when an infinite geometric series converges and find its sum.",
    "Use geometric series to express recurring decimals as exact fractions.",
    "Apply geometric sequences and series to real-world situations.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "While an arithmetic sequence adds a constant amount between terms, a geometric sequence multiplies by a constant amount instead. This single difference produces very different behaviour: geometric sequences can grow explosively (or shrink rapidly toward zero), which connects them directly to the exponential functions from the previous chapter.",
        "This lesson develops the nth-term and sum formulas for geometric sequences, and introduces one of the most surprising results in this course: an infinite series — literally adding infinitely many numbers — can sometimes add up to a single finite value.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds on Arithmetic Sequences and Series and connects closely to Exponential Growth and Decay — a geometric sequence is essentially an exponential function evaluated only at whole-number inputs.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Geometric sequence",
      body: "A geometric sequence is a list of numbers where each term after the first is found by multiplying the previous term by a constant amount, called the common ratio $r$.",
    },
    {
      kind: "theory",
      heading: "Finding the common ratio",
      paragraphs: [
        "To find the common ratio, divide any term by the term before it — the result should be the same no matter which consecutive pair you pick.",
      ],
    },
    {
      kind: "example",
      prompt: "Is $3, 6, 12, 24, 48, \\ldots$ a geometric sequence? If so, find the common ratio.",
      steps: [
        "Check consecutive ratios: $6\\div3=2$, $12\\div6=2$, $24\\div12=2$, $48\\div24=2$.",
        "Every ratio is the same, 2.",
      ],
      answer: "Yes, this is geometric with common ratio $r=2$.",
    },
    {
      kind: "theory",
      heading: "The nth term formula",
      paragraphs: [
        "To reach the nth term, start at the first term and multiply by the common ratio $(n-1)$ times.",
      ],
    },
    {
      kind: "formula",
      latex: "a_n = a_1 \\cdot r^{n-1}",
      caption: "$a_1$ is the first term, $r$ is the common ratio, $n$ is the term number you want.",
    },
    {
      kind: "geometricSequenceExplorer",
      heading: "Interactive: build a geometric sequence and test convergence",
    },
    {
      kind: "example",
      prompt: "Find the 7th term of the geometric sequence $5, 10, 20, 40, \\ldots$.",
      steps: [
        "Identify $a_1=5$ and $r=2$.",
        "Substitute into the formula: $a_7 = 5 \\cdot 2^{7-1} = 5 \\cdot 2^6$.",
        "Simplify: $a_7 = 5 \\times 64 = 320$.",
      ],
      answer: "$a_7 = 320$.",
    },
    {
      kind: "example",
      prompt: "A geometric sequence has $a_1=4$ and $a_4=32$. Find the common ratio.",
      steps: [
        "Substitute into the nth-term formula: $32 = 4 \\cdot r^{4-1} = 4r^3$.",
        "Divide both sides by 4: $r^3 = 8$.",
        "Take the cube root: $r = 2$.",
      ],
      answer: "$r = 2$.",
    },
    {
      kind: "theory",
      heading: "The sum of a finite geometric series",
      paragraphs: [
        "Because each term is a multiple of the one before it, the sum formula for a geometric series looks quite different from the arithmetic case — it comes from a clever subtraction trick rather than pairing.",
      ],
    },
    {
      kind: "formula",
      latex: "S_n = \\dfrac{a_1(1 - r^n)}{1 - r} \\quad (r \\neq 1)",
      caption: "The sum of the first n terms of a geometric series.",
    },
    {
      kind: "example",
      prompt: "Find the sum of the first 8 terms of $2, 6, 18, 54, \\ldots$.",
      steps: [
        "Identify $a_1=2$, $r=3$, $n=8$.",
        "Substitute: $S_8 = \\dfrac{2(1-3^8)}{1-3}$.",
        "Evaluate $3^8=6561$: $S_8 = \\dfrac{2(1-6561)}{-2} = \\dfrac{2(-6560)}{-2}$.",
        "Simplify: $S_8 = 6560$.",
      ],
      answer: "$S_8 = 6560$.",
    },
    {
      kind: "theory",
      heading: "Infinite geometric series",
      paragraphs: [
        "When $|r| < 1$, each successive term gets smaller in magnitude, shrinking toward zero. Even though there are infinitely many terms, the total sum still approaches — and equals, in the limit — a single finite number. When $|r| \\ge 1$, the terms don't shrink, and the sum grows without bound (diverges), so no finite sum exists.",
      ],
    },
    {
      kind: "formula",
      latex: "S_\\infty = \\dfrac{a_1}{1-r} \\quad (|r| < 1 \\text{ only})",
      caption: "The infinite sum formula — only valid when the series converges.",
    },
    {
      kind: "example",
      prompt:
        "Find the sum of the infinite geometric series $8 + 4 + 2 + 1 + \\dfrac{1}{2} + \\cdots$.",
      steps: [
        "Identify $a_1=8$ and $r = \\dfrac{4}{8} = 0.5$.",
        "Check convergence: $|0.5| < 1$, so the series converges.",
        "Apply the formula: $S_\\infty = \\dfrac{8}{1-0.5} = \\dfrac{8}{0.5}$.",
        "Simplify: $S_\\infty = 16$.",
      ],
      answer: "$S_\\infty = 16$.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Always check |r| < 1 first",
      body: "The infinite sum formula only makes sense when the series actually converges. If $|r| \\ge 1$, state that the series diverges and has no finite sum — don't apply the formula anyway.",
    },
    {
      kind: "theory",
      heading: "Recurring decimals as geometric series",
      paragraphs: [
        "A recurring decimal like $0.\\overline{3} = 0.333\\ldots$ is secretly an infinite geometric series: $0.3 + 0.03 + 0.003 + \\cdots$, with $a_1=0.3$ and $r=0.1$. This gives a clean way to convert any recurring decimal into an exact fraction.",
      ],
    },
    {
      kind: "example",
      prompt: "Express $0.\\overline{3}$ as an exact fraction using the infinite series formula.",
      steps: [
        "Write as a series: $0.3+0.03+0.003+\\cdots$, so $a_1=0.3$, $r=0.1$.",
        "Apply the formula: $S_\\infty = \\dfrac{0.3}{1-0.1} = \\dfrac{0.3}{0.9}$.",
        "Simplify: $S_\\infty = \\dfrac{1}{3}$.",
      ],
      answer: "$0.\\overline{3} = \\dfrac{1}{3}$.",
    },
    {
      kind: "realWorld",
      heading: "Where geometric sequences and series appear",
      items: [
        {
          area: "Finance",
          text: "Compound interest is a geometric sequence with common ratio $1+r$.",
        },
        { area: "Biology", text: "Cell division doubling produces a geometric sequence." },
        {
          area: "Physics",
          text: "A bouncing ball's successive rebound heights often form a geometric sequence.",
        },
        {
          area: "Technology",
          text: "Doubling storage or processing capacity over successive generations.",
        },
        {
          area: "Medicine",
          text: "Drug elimination from the body, halving over successive time intervals.",
        },
      ],
    },
    {
      kind: "example",
      prompt:
        "A ball is dropped from 10 m and bounces back up to 60% of its previous height each time. Find the total vertical distance it travels (down and up), assuming it bounces forever.",
      steps: [
        "The first drop is 10 m (not doubled, since it only happens once).",
        "Every bounce afterward involves going up AND back down the same height, so each bounce height contributes twice, except this still forms a geometric pattern in the up-distances: $6, 3.6, 2.16, \\ldots$ with $r=0.6$.",
        "Sum of up-distances (doubled for down-then-up, except the very first drop): total $= 10 + 2 \\times \\dfrac{6}{1-0.6}$.",
        "Evaluate: $\\dfrac{6}{0.4}=15$, so total $=10+2(15)=10+30=40$.",
      ],
      answer: "The ball travels a total of 40 m.",
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What defines a geometric sequence?",
          back: "A constant ratio r is multiplied between consecutive terms.",
        },
        { front: "nth term formula?", back: "$a_n = a_1 \\cdot r^{n-1}$." },
        { front: "Sum of n terms formula?", back: "$S_n = \\dfrac{a_1(1-r^n)}{1-r}$." },
        { front: "When does an infinite geometric series converge?", back: "When $|r| < 1$." },
        {
          front: "Infinite sum formula?",
          back: "$S_\\infty = \\dfrac{a_1}{1-r}$, only valid for $|r|<1$.",
        },
        {
          front: "How is a recurring decimal a geometric series?",
          back: "Each repeating block is a term with ratio a power of 0.1 (or similar).",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: geometric sequences and series",
      stepKey: "geometricSequencesPractice",
      questions: [
        {
          prompt: "Find the common ratio of $4, 12, 36, 108, \\ldots$.",
          options: ["3", "4", "2", "8"],
          answer: 0,
          explanation: "$12\\div4=3$.",
        },
        {
          prompt: "Find the 6th term of $2, 6, 18, 54, \\ldots$.",
          options: ["486", "324", "162", "648"],
          answer: 0,
          explanation: "$a_6=2\\times3^5=2\\times243=486$.",
        },
        {
          prompt: "A geometric sequence has $a_1=3$ and $r=2$. Find $a_8$.",
          options: ["384", "192", "768", "96"],
          answer: 0,
          explanation: "$a_8=3\\times2^7=3\\times128=384$.",
        },
        {
          prompt: "A geometric sequence has $a_1=5$ and $a_3=45$. Find a possible value of $r$.",
          options: ["3", "9", "2", "6"],
          answer: 0,
          explanation: "$45=5r^2 \\Rightarrow r^2=9 \\Rightarrow r=\\pm3$.",
        },
        {
          prompt: "Find the sum of the first 5 terms of $1, 3, 9, 27, \\ldots$.",
          options: ["121", "120", "81", "243"],
          answer: 0,
          explanation: "$S_5=\\dfrac{1(1-3^5)}{1-3}=\\dfrac{1-243}{-2}=121$.",
        },
        {
          prompt: "Does the infinite series $4+2+1+0.5+\\cdots$ converge?",
          options: [
            "Yes, since |r|=0.5<1",
            "No, since it keeps adding forever",
            "Yes, since a\u2081=4",
            "Cannot be determined",
          ],
          answer: 0,
          explanation: "The ratio 0.5 has absolute value less than 1, so the series converges.",
        },
        {
          prompt: "Find the sum of the infinite series $4+2+1+0.5+\\cdots$.",
          options: ["8", "7", "6", "10"],
          answer: 0,
          explanation: "$S_\\infty=\\dfrac{4}{1-0.5}=8$.",
        },
        {
          prompt: "Express $0.\\overline{6}$ as an exact fraction.",
          options: ["2/3", "6/10", "3/5", "6/9"],
          answer: 0,
          explanation: "$a_1=0.6, r=0.1$: $S_\\infty=\\dfrac{0.6}{0.9}=\\dfrac{2}{3}$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Using $n$ instead of $(n-1)$ in the nth-term formula, e.g. $a_7=5\\times2^7$.",
          right: "The exponent is $(n-1)$: $a_7=5\\times2^{7-1}=5\\times2^6$.",
        },
        {
          wrong: "Applying the infinite sum formula when $|r| \\ge 1$.",
          right:
            "The infinite sum only exists when $|r|<1$; otherwise the series diverges and has no finite sum.",
        },
        {
          wrong:
            "Confusing a geometric sequence's common ratio with an arithmetic sequence's common difference.",
          right:
            "Geometric sequences MULTIPLY by $r$; arithmetic sequences ADD $d$. Check by dividing consecutive terms, not subtracting.",
        },
        {
          wrong:
            "Forgetting the negative sign for a negative common ratio, which alternates the sign of each term.",
          right:
            "If $a_2/a_1$ is negative, the terms alternate sign — check by computing several ratios, not just one.",
        },
        {
          wrong: "Assuming the sum formula works the same when $r=1$.",
          right:
            "When $r=1$, every term equals $a_1$, so $S_n = n \\cdot a_1$ directly — the standard formula divides by zero and fails.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A geometric sequence multiplies by a constant common ratio $r$ between terms.",
        "nth term: $a_n = a_1 \\cdot r^{n-1}$.",
        "Sum of n terms: $S_n = \\dfrac{a_1(1-r^n)}{1-r}$ (for $r \\neq 1$).",
        "An infinite geometric series converges only when $|r|<1$, with sum $S_\\infty=\\dfrac{a_1}{1-r}$.",
        "Recurring decimals can be written as infinite geometric series and converted to exact fractions.",
        "Geometric sequences model compound interest, population doubling, and repeated halving processes.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: geometric sequences and series",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Find the common ratio of $6, 18, 54, 162, \\ldots$.",
          options: ["3", "12", "2", "6"],
          answer: 0,
          marks: 1,
          explanation: "$18\\div6=3$.",
        },
        {
          type: "mc",
          prompt: "Find the 5th term of $3, 6, 12, 24, \\ldots$.",
          options: ["48", "24", "96", "40"],
          answer: 0,
          marks: 1,
          explanation: "$a_5=3\\times2^4=48$.",
        },
        {
          type: "tf",
          prompt: "An infinite geometric series always has a finite sum.",
          answer: false,
          marks: 1,
          explanation: "Only converges when $|r|<1$; otherwise it diverges.",
        },
        {
          type: "mc",
          prompt: "A geometric sequence has $a_1=2$ and $a_4=54$. Find $r$.",
          options: ["3", "9", "27", "6"],
          answer: 0,
          marks: 2,
          explanation: "$54=2r^3 \\Rightarrow r^3=27 \\Rightarrow r=3$.",
        },
        {
          type: "mc",
          prompt: "Find the sum of the first 6 terms of $1, 2, 4, 8, \\ldots$.",
          options: ["63", "64", "31", "127"],
          answer: 0,
          marks: 2,
          explanation: "$S_6=\\dfrac{1(1-2^6)}{1-2}=\\dfrac{1-64}{-1}=63$.",
        },
        {
          type: "matching",
          prompt: "Match each series to whether it converges or diverges.",
          left: ["$r=0.5$", "$r=1.5$", "$r=-0.9$", "$r=2$"],
          options: ["Diverges", "Converges", "Converges", "Diverges"],
          answer: [1, 0, 2, 3],
          marks: 4,
          explanation: "Convergence requires $|r|<1$; $|-0.9|=0.9<1$ so it converges too.",
        },
        {
          type: "mc",
          prompt: "Find the sum of the infinite series $9+3+1+\\dfrac{1}{3}+\\cdots$.",
          options: ["13.5", "12", "9", "27"],
          answer: 0,
          marks: 2,
          explanation: "$a_1=9,r=1/3$: $S_\\infty=\\dfrac{9}{1-1/3}=\\dfrac{9}{2/3}=13.5$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about geometric series.",
          options: [
            "The common ratio can be negative.",
            "$S_n=\\dfrac{a_1(1-r^n)}{1-r}$ works for any r except r=1.",
            "An infinite series with r=2 has a finite sum.",
            "Recurring decimals can be expressed as infinite geometric series.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "With $r=2$, $|r| \\ge 1$, so the infinite series diverges and has no finite sum.",
        },
        {
          type: "mc",
          prompt:
            "Express $0.\\overline{45}$ (repeating block '45') as an exact fraction, given $a_1=0.45$ and $r=0.01$.",
          options: ["5/11", "45/100", "9/20", "1/2"],
          answer: 0,
          marks: 2,
          explanation:
            "$S_\\infty=\\dfrac{0.45}{1-0.01}=\\dfrac{0.45}{0.99}=\\dfrac{45}{99}=\\dfrac{5}{11}$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "geometricSequenceExplorer", label: "Use the geometric sequence laboratory" },
        { key: "geometricSequencesPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
