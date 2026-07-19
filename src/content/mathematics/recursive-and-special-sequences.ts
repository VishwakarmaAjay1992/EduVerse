import type { LessonContent } from "@/lib/lesson-content-types";

export const recursiveAndSpecialSequences: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "sequences-and-series",
  lessonSlug: "recursive-and-special-sequences",
  title: "Recursive and Special Sequences",
  objectives: [
    "Define a sequence using a recurrence relation.",
    "Generate terms of a sequence from a recurrence relation and initial values.",
    "Explain how the Fibonacci sequence is generated.",
    "Recognise the golden ratio and its connection to the Fibonacci sequence.",
    "Interpret and evaluate sums written in sigma notation.",
    "Convert between sigma notation and an expanded sum.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Not every interesting sequence fits the arithmetic or geometric pattern. A recursive sequence defines each term using one or more previous terms, rather than a direct formula in terms of $n$. This lesson introduces recurrence relations in general, explores the most famous recursive sequence of all — the Fibonacci sequence — and its surprising connection to the golden ratio, and introduces sigma notation, the standard shorthand mathematicians use to write long sums compactly.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds on Arithmetic Sequences and Series and Geometric Sequences and Series — you should be comfortable with sequence notation ($a_n$) and with evaluating a sequence term by term.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Recurrence relation",
      body: "A recurrence relation defines each term of a sequence using one or more previous terms, together with one or more starting values. To generate the sequence, you must work forward from the start — there's no way to jump directly to a distant term without first computing the ones before it (unless a separate direct formula happens to exist).",
    },
    {
      kind: "example",
      prompt:
        "A sequence is defined by $a_1 = 3$ and $a_n = 2a_{n-1} + 1$ for $n > 1$. Find the first 5 terms.",
      steps: [
        "$a_1 = 3$ (given).",
        "$a_2 = 2a_1+1 = 2(3)+1=7$.",
        "$a_3 = 2a_2+1 = 2(7)+1=15$.",
        "$a_4 = 2a_3+1 = 2(15)+1=31$.",
        "$a_5 = 2a_4+1 = 2(31)+1=63$.",
      ],
      answer: "$3, 7, 15, 31, 63$.",
    },
    {
      kind: "theory",
      heading: "The Fibonacci sequence",
      paragraphs: [
        "The Fibonacci sequence is defined by the recurrence relation $F_n = F_{n-1} + F_{n-2}$, with starting values $F_1=1$ and $F_2=1$ — each term is the sum of the two terms before it. It appears throughout nature, from the spiral patterns of shells and sunflower seed heads to the branching of trees.",
      ],
    },
    {
      kind: "formula",
      latex: "F_1 = 1, \\quad F_2 = 1, \\quad F_n = F_{n-1} + F_{n-2} \\ (n > 2)",
      caption: "The Fibonacci recurrence relation and its two starting values.",
    },
    {
      kind: "recursiveSequenceExplorer",
      heading: "Interactive: generate Fibonacci terms and explore sigma notation",
    },
    {
      kind: "example",
      prompt: "List the first 10 terms of the Fibonacci sequence.",
      steps: [
        "Start with $F_1=1$, $F_2=1$.",
        "$F_3=F_2+F_1=1+1=2$.",
        "$F_4=F_3+F_2=2+1=3$.",
        "Continue: $F_5=3+2=5$, $F_6=5+3=8$, $F_7=8+5=13$, $F_8=13+8=21$, $F_9=21+13=34$, $F_{10}=34+21=55$.",
      ],
      answer: "$1, 1, 2, 3, 5, 8, 13, 21, 34, 55$.",
    },
    {
      kind: "theory",
      heading: "The golden ratio",
      paragraphs: [
        "As you compute the ratio of consecutive Fibonacci terms ($F_n / F_{n-1}$), the values settle down and approach a fixed irrational number called the golden ratio, denoted $\\varphi$ (phi), approximately 1.618. This number has its own remarkable algebraic property: it satisfies $\\varphi = 1 + \\dfrac{1}{\\varphi}$.",
      ],
    },
    {
      kind: "formula",
      latex: "\\varphi = \\dfrac{1+\\sqrt{5}}{2} \\approx 1.618034\\ldots",
      caption: "The exact value of the golden ratio.",
    },
    {
      kind: "example",
      prompt:
        "Compute $F_{10}/F_9$ and $F_9/F_8$ from the Fibonacci sequence above, and compare both to the golden ratio.",
      steps: [
        "$F_{10}/F_9 = 55/34 \\approx 1.6176$.",
        "$F_9/F_8 = 34/21 \\approx 1.6190$.",
        "Both are already very close to $\\varphi \\approx 1.6180$, and the approximation improves further out in the sequence.",
      ],
      answer: "$55/34 \\approx 1.6176$ and $34/21 \\approx 1.6190$, both near the golden ratio.",
    },
    {
      kind: "theory",
      heading: "Sigma notation",
      paragraphs: [
        "Sigma notation (using the Greek capital letter $\\Sigma$) is a compact way to write a sum of many terms that follow a pattern. It specifies a formula for each term, and a starting and ending value for the index variable (often $k$ or $i$).",
      ],
    },
    {
      kind: "formula",
      latex: "\\sum_{k=1}^{n} f(k) = f(1) + f(2) + f(3) + \\cdots + f(n)",
      caption: "Sigma notation: sum the expression f(k) for every whole-number k from 1 to n.",
    },
    {
      kind: "example",
      prompt: "Expand and evaluate $\\displaystyle\\sum_{k=1}^{5} k^2$.",
      steps: [
        "Expand by substituting $k=1,2,3,4,5$: $1^2+2^2+3^2+4^2+5^2$.",
        "Evaluate each term: $1+4+9+16+25$.",
        "Add: $55$.",
      ],
      answer: "$\\displaystyle\\sum_{k=1}^{5} k^2 = 55$.",
    },
    {
      kind: "example",
      prompt: "Write $3 + 6 + 9 + 12 + 15$ using sigma notation.",
      steps: [
        "Each term is $3$ times the term number: term $k$ is $3k$.",
        "There are 5 terms, from $k=1$ to $k=5$.",
      ],
      answer: "$\\displaystyle\\sum_{k=1}^{5} 3k$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Sigma notation connects to sequence sums",
      body: "The arithmetic and geometric sum formulas from the last two lessons are themselves shortcuts for evaluating specific sigma sums — $\\displaystyle\\sum_{k=1}^n (a_1+(k-1)d)$ for arithmetic series, and $\\displaystyle\\sum_{k=1}^n a_1 r^{k-1}$ for geometric series.",
    },
    {
      kind: "realWorld",
      heading: "Where recursive and special sequences appear",
      items: [
        {
          area: "Nature",
          text: "Fibonacci numbers appear in flower petal counts, pinecone spirals, and shell growth patterns.",
        },
        {
          area: "Art and architecture",
          text: "The golden ratio is used deliberately in composition and proportion.",
        },
        {
          area: "Computer science",
          text: "Recursive algorithms and data structures rely directly on recurrence relations.",
        },
        {
          area: "Finance",
          text: "Amortisation schedules for loans are defined recursively, one payment period at a time.",
        },
        {
          area: "Statistics",
          text: "Sigma notation is the standard language for writing means, variances, and other formulas.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What does a recurrence relation define?",
          back: "Each term using one or more previous terms, plus starting values.",
        },
        {
          front: "Fibonacci recurrence relation?",
          back: "$F_n = F_{n-1}+F_{n-2}$, with $F_1=F_2=1$.",
        },
        { front: "Approximate value of the golden ratio?", back: "$\\varphi \\approx 1.618$." },
        {
          front: "Exact value of the golden ratio?",
          back: "$\\varphi = \\dfrac{1+\\sqrt{5}}{2}$.",
        },
        {
          front: "What does $\\sum_{k=1}^{n} f(k)$ mean?",
          back: "Sum f(k) for every whole number k from 1 to n.",
        },
        {
          front: "How do consecutive Fibonacci ratios behave?",
          back: "They approach the golden ratio as n increases.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: recursive and special sequences",
      stepKey: "recursiveSequencesPractice",
      questions: [
        {
          prompt: "A sequence is defined by $a_1=2$, $a_n=3a_{n-1}-1$. Find $a_3$.",
          options: ["14", "5", "13", "17"],
          answer: 0,
          explanation: "$a_2=3(2)-1=5$; $a_3=3(5)-1=14$.",
        },
        {
          prompt: "Find $F_7$ in the Fibonacci sequence (starting $F_1=1,F_2=1$).",
          options: ["13", "8", "21", "12"],
          answer: 0,
          explanation: "Sequence: 1,1,2,3,5,8,13 — so $F_7=13$.",
        },
        {
          prompt: "Which recurrence relation generates the Fibonacci sequence?",
          options: [
            "$F_n=F_{n-1}+F_{n-2}$",
            "$F_n=F_{n-1} \\times F_{n-2}$",
            "$F_n=F_{n-1}-F_{n-2}$",
            "$F_n=2F_{n-1}$",
          ],
          answer: 0,
          explanation: "Each term is the sum of the previous two.",
        },
        {
          prompt: "Approximately what value does $F_n/F_{n-1}$ approach as n grows?",
          options: ["1.618", "2", "1.5", "3.14"],
          answer: 0,
          explanation: "This is the golden ratio.",
        },
        {
          prompt: "Evaluate $\\displaystyle\\sum_{k=1}^{4} k$.",
          options: ["10", "8", "9", "24"],
          answer: 0,
          explanation: "$1+2+3+4=10$.",
        },
        {
          prompt: "Evaluate $\\displaystyle\\sum_{k=1}^{4} 2k$.",
          options: ["20", "10", "24", "16"],
          answer: 0,
          explanation: "$2+4+6+8=20$.",
        },
        {
          prompt: "Write $4+8+12+16$ in sigma notation.",
          options: [
            "$\\sum_{k=1}^{4} 4k$",
            "$\\sum_{k=1}^{4} k^4$",
            "$\\sum_{k=0}^{4} 4k$",
            "$\\sum_{k=1}^{16} k$",
          ],
          answer: 0,
          explanation: "Each term is $4k$ for $k=1$ to $4$.",
        },
        {
          prompt: "Evaluate $\\displaystyle\\sum_{k=1}^{3} k^2$.",
          options: ["14", "9", "36", "6"],
          answer: 0,
          explanation: "$1+4+9=14$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Trying to compute a distant Fibonacci term without first working through the earlier ones.",
          right:
            "Recursive sequences generally must be computed step by step from the start — there's no shortcut without a separate closed-form formula.",
        },
        {
          wrong: "Confusing the golden ratio's approximate decimal value with its exact form.",
          right:
            "$\\varphi \\approx 1.618$ is an approximation; the exact value is $\\dfrac{1+\\sqrt{5}}{2}$.",
        },
        {
          wrong:
            "Forgetting to include BOTH Fibonacci starting values ($F_1=1$ and $F_2=1$) before applying the recurrence.",
          right:
            "The recurrence relation only works for $n>2$; the first two terms must be given directly.",
        },
        {
          wrong:
            "Misreading the bounds of sigma notation, e.g. treating $\\sum_{k=1}^{4}$ as 5 terms.",
          right:
            "$\\sum_{k=1}^{4}$ means $k=1,2,3,4$ — exactly 4 terms, since both endpoints are included.",
        },
        {
          wrong:
            "Applying the wrong formula inside sigma notation, e.g. using $k$ when the sum specifies $k^2$.",
          right:
            "Substitute the exact expression given after the sigma symbol for each value of $k$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A recurrence relation defines each term using previous terms, plus starting values.",
        "The Fibonacci sequence: $F_n=F_{n-1}+F_{n-2}$, starting from $F_1=F_2=1$.",
        "The ratio of consecutive Fibonacci terms approaches the golden ratio, $\\varphi=\\dfrac{1+\\sqrt5}{2}\\approx1.618$.",
        "Sigma notation $\\sum_{k=1}^{n}f(k)$ is shorthand for the sum $f(1)+f(2)+\\cdots+f(n)$.",
        "Arithmetic and geometric sum formulas are themselves specific cases of sigma sums.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: recursive and special sequences",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "A sequence is defined by $a_1=1$, $a_n=2a_{n-1}+3$. Find $a_3$.",
          options: ["17", "5", "13", "10"],
          answer: 2,
          marks: 1,
          explanation: "$a_2=2(1)+3=5$; $a_3=2(5)+3=13$.",
        },
        {
          type: "mc",
          prompt: "Find $F_8$ in the Fibonacci sequence.",
          options: ["21", "13", "34", "20"],
          answer: 0,
          marks: 1,
          explanation: "Sequence: 1,1,2,3,5,8,13,21 — $F_8=21$.",
        },
        {
          type: "tf",
          prompt: "The golden ratio is a rational number.",
          answer: false,
          marks: 1,
          explanation: "$\\varphi = (1+\\sqrt5)/2$ is irrational, since $\\sqrt5$ is irrational.",
        },
        {
          type: "mc",
          prompt: "Evaluate $\\displaystyle\\sum_{k=1}^{5} k$.",
          options: ["15", "10", "20", "25"],
          answer: 0,
          marks: 2,
          explanation: "$1+2+3+4+5=15$.",
        },
        {
          type: "mc",
          prompt: "Evaluate $\\displaystyle\\sum_{k=2}^{5} k^2$.",
          options: ["54", "55", "30", "50"],
          answer: 0,
          marks: 2,
          explanation: "$4+9+16+25=54$.",
        },
        {
          type: "matching",
          prompt: "Match each sigma expression to its expanded value.",
          left: [
            "$\\sum_{k=1}^{3} k$",
            "$\\sum_{k=1}^{3} 2k$",
            "$\\sum_{k=1}^{3} k^2$",
            "$\\sum_{k=1}^{4} 1$",
          ],
          options: ["4", "6", "14", "12"],
          answer: [1, 3, 2, 0],
          marks: 4,
          explanation:
            "Each sigma expression expands to a specific sum: 1+2+3=6; 2+4+6=12; 1+4+9=14; 1+1+1+1=4.",
        },
        {
          type: "mc",
          prompt:
            "A sequence is defined by $a_1=5$, $a_n=a_{n-1}+2n$. Find $a_3$ (note n changes each step: $a_2=a_1+2(2)$, $a_3=a_2+2(3)$).",
          options: ["15", "13", "9", "11"],
          answer: 0,
          marks: 2,
          explanation: "$a_2=5+4=9$; $a_3=9+6=15$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about the Fibonacci sequence and golden ratio.",
          options: [
            "$F_1=1$ and $F_2=1$ are the required starting values.",
            "The golden ratio satisfies $\\varphi = 1+1/\\varphi$.",
            "Fibonacci ratios approach the golden ratio as n increases.",
            "The golden ratio is exactly 1.6.",
          ],
          answers: [0, 1, 2],
          marks: 3,
          explanation: "The golden ratio is irrational, approximately 1.618, not exactly 1.6.",
        },
        {
          type: "mc",
          prompt: "Write $5+10+15+20+25$ in sigma notation.",
          options: [
            "$\\sum_{k=1}^{5} 5k$",
            "$\\sum_{k=1}^{5} k^5$",
            "$\\sum_{k=0}^{5} 5k$",
            "$\\sum_{k=1}^{25} k$",
          ],
          answer: 0,
          marks: 2,
          explanation: "Each term is $5k$ for $k=1$ to $5$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "recursiveSequenceExplorer",
          label: "Use the Fibonacci and sigma notation laboratory",
        },
        { key: "recursiveSequencesPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
