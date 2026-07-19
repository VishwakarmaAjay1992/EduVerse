import type { LessonContent } from "@/lib/lesson-content-types";

export const exponentialGrowthAndDecay: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "exponentials-and-logarithms",
  lessonSlug: "exponential-growth-and-decay",
  title: "Exponential Growth and Decay",
  objectives: [
    "Recognise and write exponential functions in the form $y = a \\cdot b^t$.",
    "Distinguish exponential growth ($b>1$) from exponential decay ($0<b<1$).",
    "Apply the compound interest formula to real financial situations.",
    "Understand how compounding frequency affects growth.",
    "Recognise the number $e$ and its role in continuous growth.",
    "Model real-world growth and decay situations, such as population and radioactive decay.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "So far, every function you've studied has grown or changed at a steady rate — a fixed amount added or subtracted per step. Exponential functions behave completely differently: they grow (or shrink) by a fixed PERCENTAGE per step, which means the actual amount of change gets larger and larger (for growth) or smaller and smaller (for decay) as time goes on.",
        "This lesson introduces the exponential function $y = a \\cdot b^t$, connects it to compound interest — one of its most important real applications — and introduces the special number $e$, which appears naturally whenever growth happens continuously rather than in discrete steps.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes comfort with the laws of indices (especially fractional and negative exponents) from Exponents and the Laws of Indices, and with evaluating functions from What Is a Function?.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Exponential function",
      body: "An exponential function has the form $y = a \\cdot b^t$, where $a$ is the starting value (at $t=0$), $b$ is the growth factor (also called the base), and $t$ is usually time. The variable appears in the exponent — this is what makes it 'exponential' and gives it a completely different shape from a polynomial.",
    },
    {
      kind: "theory",
      heading: "Growth vs decay",
      paragraphs: [
        "If $b > 1$, the function represents exponential growth — each step multiplies the value by $b$, making it larger. If $0 < b < 1$, the function represents exponential decay — each step multiplies the value by a fraction, making it smaller. If $b = 1$, the value never changes at all.",
        "A growth factor is often written as $b = 1 + r$ for a growth rate $r$ (as a decimal), or $b = 1 - r$ for a decay rate $r$. A 5% growth rate gives $b=1.05$; a 5% decay rate gives $b=0.95$.",
      ],
    },
    {
      kind: "exponentialGrowthExplorer",
      heading: "Interactive: exponential grapher and compound interest calculator",
    },
    {
      kind: "example",
      prompt:
        "A bacteria colony starts with 200 cells and triples every hour. Write a function for the population after $t$ hours, and find the population after 4 hours.",
      steps: [
        "Starting value $a=200$; growth factor $b=3$ (tripling).",
        "Function: $P(t) = 200 \\cdot 3^t$.",
        "Substitute $t=4$: $P(4) = 200 \\cdot 3^4 = 200 \\cdot 81 = 16{,}200$.",
      ],
      answer: "$P(t) = 200 \\cdot 3^t$; after 4 hours, there are 16,200 cells.",
    },
    {
      kind: "example",
      prompt:
        "A car worth 20,000 riyals depreciates by 15% per year. Write a function for its value after $t$ years, and find its value after 5 years.",
      steps: [
        "Starting value $a=20{,}000$; decay rate 15% means $b = 1 - 0.15 = 0.85$.",
        "Function: $V(t) = 20{,}000 \\cdot 0.85^t$.",
        "Substitute $t=5$: $V(5) = 20{,}000 \\cdot 0.85^5 \\approx 20{,}000 \\times 0.4437 \\approx 8{,}874$.",
      ],
      answer:
        "$V(t) = 20{,}000 \\cdot 0.85^t$; after 5 years, the car is worth approximately 8,874 riyals.",
    },
    {
      kind: "theory",
      heading: "Compound interest",
      paragraphs: [
        "Compound interest is a direct application of exponential growth: interest earned is added to the principal, so future interest is calculated on a growing amount. The formula accounts for how often interest compounds per year (annually, monthly, daily, and so on).",
      ],
    },
    {
      kind: "formula",
      latex: "A = P\\left(1 + \\dfrac{r}{n}\\right)^{nt}",
      caption:
        "P is the principal, r is the annual rate (as a decimal), n is compounds per year, t is years.",
    },
    {
      kind: "example",
      prompt:
        "1,000 riyals is invested at 6% annual interest, compounded monthly, for 3 years. Find the final amount.",
      steps: [
        "Identify values: $P=1000$, $r=0.06$, $n=12$, $t=3$.",
        "Substitute: $A = 1000\\left(1+\\dfrac{0.06}{12}\\right)^{12 \\times 3} = 1000(1.005)^{36}$.",
        "Evaluate: $A \\approx 1000 \\times 1.1967 \\approx 1{,}196.68$.",
      ],
      answer: "The investment grows to approximately 1,196.68 riyals.",
    },
    {
      kind: "theory",
      heading: "The number e and continuous growth",
      paragraphs: [
        "As the compounding frequency $n$ increases without bound — compounding not just daily but every second, then continuously — the compound interest formula approaches a limit involving a special irrational number, $e \\approx 2.71828$. This leads to the continuous compounding formula.",
      ],
    },
    {
      kind: "formula",
      latex: "A = Pe^{rt}",
      caption: "The continuous-compounding formula, using Euler's number e.",
    },
    {
      kind: "example",
      prompt:
        "1,000 riyals is invested at 6% annual interest, compounded continuously, for 3 years. Compare this to the monthly compounding result above.",
      steps: [
        "Substitute into the continuous formula: $A = 1000 \\cdot e^{0.06 \\times 3} = 1000 \\cdot e^{0.18}$.",
        "Evaluate: $A \\approx 1000 \\times 1.1972 \\approx 1{,}197.22$.",
      ],
      answer:
        "Continuous compounding gives approximately 1,197.22 riyals — only slightly more than the 1,196.68 riyals from monthly compounding, showing that more frequent compounding has diminishing extra benefit.",
    },
    {
      kind: "callout",
      variant: "didyouknow",
      title: "e appears everywhere in continuous change",
      body: "The number $e$ isn't just for finance — it appears in population models, radioactive decay, cooling curves, and many other situations where growth or decay happens continuously and smoothly rather than in discrete jumps.",
    },
    {
      kind: "realWorld",
      heading: "Where exponential growth and decay appear",
      items: [
        { area: "Finance", text: "Compound interest, investment growth, and loan balances." },
        {
          area: "Biology",
          text: "Population growth in bacteria, cells, and (over short periods) larger organisms.",
        },
        {
          area: "Physics",
          text: "Radioactive decay, and the cooling of a hot object toward room temperature.",
        },
        {
          area: "Technology",
          text: "The spread of information or adoption of a new technology, at least initially.",
        },
        { area: "Medicine", text: "Drug concentration decaying in the bloodstream over time." },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "General form of an exponential function?", back: "$y = a \\cdot b^t$." },
        { front: "When does $y=a \\cdot b^t$ represent growth?", back: "When $b > 1$." },
        { front: "When does it represent decay?", back: "When $0 < b < 1$." },
        { front: "Compound interest formula?", back: "$A = P(1+r/n)^{nt}$." },
        { front: "Continuous compounding formula?", back: "$A = Pe^{rt}$." },
        { front: "Approximate value of e?", back: "$e \\approx 2.71828$." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: exponential growth and decay",
      stepKey: "exponentialGrowthPractice",
      questions: [
        {
          prompt: "Is $y = 50 \\cdot 1.1^t$ growth or decay?",
          options: ["Growth", "Decay", "Neither", "Cannot be determined"],
          answer: 0,
          explanation: "$b=1.1>1$, so this is growth.",
        },
        {
          prompt: "Is $y = 300 \\cdot 0.7^t$ growth or decay?",
          options: ["Decay", "Growth", "Neither", "Cannot be determined"],
          answer: 0,
          explanation: "$b=0.7$, which is between 0 and 1, so this is decay.",
        },
        {
          prompt:
            "A population starts at 500 and grows by 8% per year. What is the growth factor $b$?",
          options: ["1.08", "0.92", "8", "1.8"],
          answer: 0,
          explanation: "8% growth means $b=1+0.08=1.08$.",
        },
        {
          prompt:
            "Using $P(t)=500(1.08)^t$, find the population after 3 years (to the nearest whole number).",
          options: ["630", "540", "610", "650"],
          answer: 0,
          explanation: "$500 \\times 1.08^3 \\approx 629.86 \\approx 630$.",
        },
        {
          prompt:
            "A substance decays by 20% per hour, starting at 100 g. What is the decay factor?",
          options: ["0.8", "1.2", "0.2", "20"],
          answer: 0,
          explanation: "20% decay means $b=1-0.20=0.8$.",
        },
        {
          prompt:
            "800 riyals is invested at 5% annual interest, compounded annually, for 2 years. Find the amount (to the nearest riyal).",
          options: ["882", "840", "800", "900"],
          answer: 0,
          explanation: "$A=800(1.05)^2 \\approx 882$.",
        },
        {
          prompt: "Which formula uses the number e?",
          options: [
            "Continuous compounding",
            "Annual compounding",
            "Simple interest",
            "None of these",
          ],
          answer: 0,
          explanation: "$A=Pe^{rt}$ is the continuous compounding formula.",
        },
        {
          prompt:
            "What happens to the compound amount as compounding frequency n increases (with fixed rate and time)?",
          options: [
            "It increases, approaching continuous compounding",
            "It decreases",
            "It stays exactly the same",
            "It becomes negative",
          ],
          answer: 0,
          explanation:
            "More frequent compounding increases the amount slightly, approaching the continuous-compounding limit.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Using $b = r$ directly instead of $b = 1+r$ for growth.",
          right:
            "The growth factor is $1$ plus the growth rate as a decimal: 8% growth gives $b=1.08$, not $b=0.08$.",
        },
        {
          wrong: "Using $b = 1+r$ for decay instead of $b=1-r$.",
          right: "For decay, subtract the rate: a 20% decay rate gives $b=1-0.20=0.8$.",
        },
        {
          wrong:
            "Forgetting to convert the annual rate to a decimal before substituting into the compound interest formula.",
          right: "5% must be entered as 0.05, not 5, in the formula $A=P(1+r/n)^{nt}$.",
        },
        {
          wrong:
            "Using the wrong exponent in the compound interest formula, e.g. using just $t$ instead of $nt$.",
          right:
            "The exponent must be the TOTAL number of compounding periods: $n \\times t$, not just $t$.",
        },
        {
          wrong: "Confusing $e$ with a variable rather than a fixed constant.",
          right:
            "$e$ is a specific irrational number, approximately 2.71828, not a variable to solve for.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "An exponential function has the form $y = a \\cdot b^t$: $a$ is the starting value, $b$ is the growth/decay factor.",
        "$b>1$ means growth; $0<b<1$ means decay.",
        "A growth rate $r$ gives $b=1+r$; a decay rate $r$ gives $b=1-r$.",
        "Compound interest: $A = P(1+r/n)^{nt}$, where $n$ is compounds per year.",
        "As compounding frequency increases without bound, the formula approaches continuous compounding: $A=Pe^{rt}$.",
        "Exponential models describe population growth, radioactive decay, investment growth, and many natural processes.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: exponential growth and decay",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Is $y = 20 \\cdot 2^t$ growth or decay?",
          options: ["Growth", "Decay", "Neither", "Cannot be determined"],
          answer: 0,
          marks: 1,
          explanation: "$b=2>1$, so this is growth.",
        },
        {
          type: "mc",
          prompt: "A population of 1,000 grows by 4% per year. What is the growth factor?",
          options: ["1.04", "0.96", "4", "104"],
          answer: 0,
          marks: 1,
          explanation: "4% growth gives $b=1.04$.",
        },
        {
          type: "tf",
          prompt: "In $y=a \\cdot b^t$, a decay factor $b$ must be greater than 1.",
          answer: false,
          marks: 1,
          explanation: "A decay factor must satisfy $0<b<1$.",
        },
        {
          type: "mc",
          prompt:
            "Using $P(t)=1000(1.04)^t$, find the population after 5 years (to the nearest whole number).",
          options: ["1217", "1200", "1050", "1400"],
          answer: 0,
          marks: 2,
          explanation: "$1000 \\times 1.04^5 \\approx 1216.65 \\approx 1217$.",
        },
        {
          type: "mc",
          prompt:
            "600 riyals is invested at 4% annual interest, compounded annually, for 3 years. Find the amount (nearest riyal).",
          options: ["675", "672", "600", "700"],
          answer: 0,
          marks: 2,
          explanation: "$A=600(1.04)^3 \\approx 674.90 \\approx 675$.",
        },
        {
          type: "matching",
          prompt: "Match each scenario to its correct growth/decay factor.",
          left: ["12% growth", "12% decay", "50% growth", "50% decay"],
          options: ["1.5", "0.5", "1.12", "0.88"],
          answer: [2, 3, 0, 1],
          marks: 4,
          explanation: "Growth uses $1+r$; decay uses $1-r$, with $r$ as a decimal.",
        },
        {
          type: "mc",
          prompt:
            "1,500 riyals is invested at 5% annual interest, compounded monthly, for 2 years. Find the amount (nearest riyal).",
          options: ["1657", "1650", "1575", "1700"],
          answer: 0,
          marks: 2,
          explanation: "$A=1500(1+0.05/12)^{24} \\approx 1657$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about exponential functions.",
          options: [
            "In $y=a \\cdot b^t$, $a$ is the starting value.",
            "A growth factor of $b=1$ means constant value over time.",
            "Decay requires $b > 1$.",
            "The formula $A=Pe^{rt}$ models continuous growth or decay.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "Decay requires $0<b<1$, not $b>1$.",
        },
        {
          type: "mc",
          prompt:
            "A radioactive sample of 80 g decays by 10% per year. How much remains after 4 years (to 1 decimal place)?",
          options: ["52.5 g", "48.0 g", "56.7 g", "40.0 g"],
          answer: 0,
          marks: 2,
          explanation: "$80 \\times 0.9^4 \\approx 52.5$ g.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "exponentialGrowthExplorer",
          label: "Use the exponential and compound interest laboratory",
        },
        { key: "exponentialGrowthPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
