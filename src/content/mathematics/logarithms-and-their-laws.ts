import type { LessonContent } from "@/lib/lesson-content-types";

export const logarithmsAndTheirLaws: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "exponentials-and-logarithms",
  lessonSlug: "logarithms-and-their-laws",
  title: "Logarithms and Their Laws",
  objectives: [
    "Define a logarithm as the inverse of exponentiation.",
    "Convert between exponential form and logarithmic form.",
    "Apply the product, quotient, and power laws of logarithms.",
    "Use the change-of-base formula to evaluate any logarithm.",
    "Recognise and use the natural logarithm, $\\ln$.",
    "Evaluate logarithms using both mental methods and a calculator.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A logarithm answers a very specific question: 'to what power must I raise this base, to get this result?' Logarithms are the inverse operation of exponentiation, in exactly the same way subtraction is the inverse of addition and division is the inverse of multiplication.",
        "This lesson defines logarithms precisely, develops the three core logarithm laws — which mirror the laws of exponents — and introduces two special logarithms you'll see constantly: the common logarithm (base 10) and the natural logarithm (base $e$).",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson depends on Exponential Growth and Decay and the laws of indices — you should be comfortable with $b^n$ notation and with the number $e$ from the previous lesson.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Logarithm",
      body: "The logarithm base $b$ of a number $x$, written $\\log_b(x)$, is the exponent to which $b$ must be raised to produce $x$. In symbols: $\\log_b(x) = y$ means exactly the same thing as $b^y = x$.",
    },
    {
      kind: "theory",
      heading: "Converting between exponential and logarithmic form",
      paragraphs: [
        "Every exponential equation $b^y = x$ can be rewritten as a logarithmic equation $\\log_b(x) = y$, and vice versa. Practising this conversion both ways builds the intuition needed for everything else in this lesson.",
      ],
    },
    {
      kind: "formula",
      latex: "b^y = x \\quad \\Longleftrightarrow \\quad \\log_b(x) = y",
      caption: "These two statements always mean exactly the same thing.",
    },
    {
      kind: "example",
      prompt:
        "Convert $2^5 = 32$ into logarithmic form, and evaluate $\\log_5(125)$ by converting to exponential form first.",
      steps: [
        "For $2^5=32$: the base is 2, the exponent is 5, so $\\log_2(32) = 5$.",
        "For $\\log_5(125)$: this asks 'to what power must 5 be raised to get 125?' Since $5^3=125$, the answer is 3.",
      ],
      answer: "$\\log_2(32)=5$ and $\\log_5(125)=3$.",
    },
    {
      kind: "theory",
      heading: "The three logarithm laws",
      paragraphs: [
        "The logarithm laws come directly from the laws of exponents, since a logarithm is just an exponent in disguise. Each law turns a multiplication, division, or power inside a logarithm into a simpler addition, subtraction, or multiplication outside it.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\log_b(mn) = \\log_b(m) + \\log_b(n) \\qquad \\log_b\\left(\\dfrac{m}{n}\\right) = \\log_b(m) - \\log_b(n) \\qquad \\log_b(m^n) = n \\log_b(m)",
      caption:
        "Product, quotient and power laws — each converts a harder operation inside the log into an easier one outside it.",
    },
    {
      kind: "logarithmExplorer",
      heading: "Interactive: log law step-by-step and change-of-base calculator",
    },
    {
      kind: "example",
      prompt: "Given $\\log_b(2) = 0.301$ and $\\log_b(3) = 0.477$, find $\\log_b(6)$.",
      steps: [
        "Recognise $6 = 2 \\times 3$, so use the product law.",
        "$\\log_b(6) = \\log_b(2 \\times 3) = \\log_b(2) + \\log_b(3)$.",
        "Substitute: $0.301 + 0.477 = 0.778$.",
      ],
      answer: "$\\log_b(6) = 0.778$.",
    },
    {
      kind: "example",
      prompt: "Given $\\log_b(20) = 1.301$ and $\\log_b(4) = 0.602$, find $\\log_b(5)$.",
      steps: [
        "Recognise $5 = 20 \\div 4$, so use the quotient law.",
        "$\\log_b(5) = \\log_b(20) - \\log_b(4)$.",
        "Substitute: $1.301 - 0.602 = 0.699$.",
      ],
      answer: "$\\log_b(5) = 0.699$.",
    },
    {
      kind: "example",
      prompt: "Given $\\log_b(3) = 0.477$, find $\\log_b(81)$.",
      steps: [
        "Recognise $81 = 3^4$, so use the power law.",
        "$\\log_b(81) = \\log_b(3^4) = 4\\log_b(3)$.",
        "Substitute: $4 \\times 0.477 = 1.908$.",
      ],
      answer: "$\\log_b(81) = 1.908$.",
    },
    {
      kind: "theory",
      heading: "Change of base",
      paragraphs: [
        "Calculators typically only compute two kinds of logarithm directly: common logarithms (base 10, often written just $\\log$) and natural logarithms (base $e$, written $\\ln$). The change-of-base formula lets you evaluate a logarithm of ANY base using either of these.",
      ],
    },
    {
      kind: "formula",
      latex: "\\log_b(x) = \\dfrac{\\log(x)}{\\log(b)} = \\dfrac{\\ln(x)}{\\ln(b)}",
      caption: "Divide the log (in any common base) of x by the log of b, in that same base.",
    },
    {
      kind: "example",
      prompt: "Use the change-of-base formula to evaluate $\\log_7(50)$ to 3 decimal places.",
      steps: [
        "Apply the formula: $\\log_7(50) = \\dfrac{\\log(50)}{\\log(7)}$.",
        "Evaluate each part: $\\log(50) \\approx 1.699$, $\\log(7) \\approx 0.845$.",
        "Divide: $1.699 \\div 0.845 \\approx 2.011$.",
      ],
      answer: "$\\log_7(50) \\approx 2.011$.",
    },
    {
      kind: "theory",
      heading: "The natural logarithm",
      paragraphs: [
        "The natural logarithm, $\\ln(x)$, is simply $\\log_e(x)$ — the logarithm with base $e$. It appears constantly wherever continuous growth or decay is involved, exactly because $e$ itself arises from continuous compounding.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "log with no base means base 10",
      body: "When you see $\\log(x)$ with no small base number written, it conventionally means $\\log_{10}(x)$ — the common logarithm. $\\ln(x)$ always specifically means $\\log_e(x)$.",
    },
    {
      kind: "realWorld",
      heading: "Where logarithms appear",
      items: [
        { area: "Sound", text: "The decibel scale for loudness is logarithmic." },
        { area: "Earthquakes", text: "The Richter scale for earthquake magnitude is logarithmic." },
        { area: "Chemistry", text: "The pH scale for acidity is defined using a logarithm." },
        {
          area: "Finance",
          text: "Solving for time in a compound interest formula requires a logarithm.",
        },
        {
          area: "Computer science",
          text: "Algorithm efficiency is often described using logarithms, e.g. binary search.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Definition of $\\log_b(x)$?", back: "The exponent y such that $b^y=x$." },
        { front: "Product law?", back: "$\\log_b(mn) = \\log_b(m) + \\log_b(n)$." },
        { front: "Quotient law?", back: "$\\log_b(m/n) = \\log_b(m) - \\log_b(n)$." },
        { front: "Power law?", back: "$\\log_b(m^n) = n\\log_b(m)$." },
        { front: "Change of base formula?", back: "$\\log_b(x) = \\ln(x)/\\ln(b)$." },
        { front: "What does $\\ln(x)$ mean?", back: "$\\log_e(x)$, the natural logarithm." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: logarithms and their laws",
      stepKey: "logarithmsPractice",
      questions: [
        {
          prompt: "Convert $3^4 = 81$ into logarithmic form.",
          options: ["$\\log_3(81)=4$", "$\\log_4(81)=3$", "$\\log_{81}(3)=4$", "$\\log_3(4)=81$"],
          answer: 0,
          explanation: "Base 3, exponent 4, result 81.",
        },
        {
          prompt: "Evaluate $\\log_2(16)$.",
          options: ["4", "8", "2", "16"],
          answer: 0,
          explanation: "$2^4=16$.",
        },
        {
          prompt: "Given $\\log_b(5)=0.699$ and $\\log_b(2)=0.301$, find $\\log_b(10)$.",
          options: ["1", "0.398", "1.398", "0.699"],
          answer: 0,
          explanation: "$10=5\\times2$, so $\\log_b(10)=0.699+0.301=1.0$.",
        },
        {
          prompt: "Given $\\log_b(12)=1.079$ and $\\log_b(4)=0.602$, find $\\log_b(3)$.",
          options: ["0.477", "1.681", "0.602", "1.079"],
          answer: 0,
          explanation: "$3=12\\div4$, so $\\log_b(3)=1.079-0.602=0.477$.",
        },
        {
          prompt: "Given $\\log_b(2)=0.301$, find $\\log_b(8)$.",
          options: ["0.903", "0.602", "2.408", "0.301"],
          answer: 0,
          explanation: "$8=2^3$, so $\\log_b(8)=3\\times0.301=0.903$.",
        },
        {
          prompt:
            "Which expression correctly applies the change-of-base formula for $\\log_5(30)$?",
          options: [
            "$\\log(30)/\\log(5)$",
            "$\\log(5)/\\log(30)$",
            "$\\log(30) - \\log(5)$",
            "$\\log(30) \\times \\log(5)$",
          ],
          answer: 0,
          explanation: "Change of base divides log of the value by log of the base.",
        },
        {
          prompt: "What is $\\ln(x)$?",
          options: ["$\\log_e(x)$", "$\\log_{10}(x)$", "$\\log_x(e)$", "$e \\times \\log(x)$"],
          answer: 0,
          explanation: "The natural log is base e.",
        },
        {
          prompt: "Evaluate $\\log_4(1)$.",
          options: ["0", "1", "4", "Undefined"],
          answer: 0,
          explanation: "$4^0=1$ for any positive base, so $\\log_4(1)=0$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Applying the product law to a sum, e.g. writing $\\log(m+n) = \\log(m)+\\log(n)$.",
          right:
            "The product law applies to MULTIPLICATION inside the log: $\\log(mn) = \\log(m)+\\log(n)$. There is no simple rule for $\\log(m+n)$.",
        },
        {
          wrong:
            "Forgetting to distribute the exponent to the whole base of the power law, e.g. treating $\\log(2 \\cdot 3^4)$ as $4\\log(2 \\cdot 3)$.",
          right:
            "The power law only applies to the entire logged quantity being raised to a power: $\\log(3^4) = 4\\log(3)$, but $2 \\cdot 3^4$ needs the product and power laws combined carefully.",
        },
        {
          wrong: "Assuming $\\log(x)$ with no base means base $e$.",
          right:
            "No base written conventionally means base 10; $\\ln(x)$ is the specific notation for base $e$.",
        },
        {
          wrong: "Trying to evaluate $\\log_b(0)$ or $\\log_b$ of a negative number.",
          right:
            "Logarithms are only defined for positive numbers — there's no power that makes a positive base produce 0 or a negative result.",
        },
        {
          wrong: "Getting the change-of-base fraction upside down.",
          right:
            "$\\log_b(x) = \\log(x)/\\log(b)$ — the value you want the log OF goes on top, the base goes on the bottom.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "$\\log_b(x) = y$ means $b^y = x$ — a logarithm is an exponent in disguise.",
        "Product law: $\\log_b(mn) = \\log_b(m)+\\log_b(n)$.",
        "Quotient law: $\\log_b(m/n) = \\log_b(m)-\\log_b(n)$.",
        "Power law: $\\log_b(m^n) = n\\log_b(m)$.",
        "Change of base: $\\log_b(x) = \\ln(x)/\\ln(b)$ (or using base-10 log instead of ln).",
        "$\\log(x)$ with no base means base 10; $\\ln(x)$ specifically means base $e$.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: logarithms and their laws",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Convert $5^3 = 125$ into logarithmic form.",
          options: [
            "$\\log_5(125)=3$",
            "$\\log_3(125)=5$",
            "$\\log_{125}(5)=3$",
            "$\\log_5(3)=125$",
          ],
          answer: 0,
          marks: 1,
          explanation: "Base 5, exponent 3.",
        },
        {
          type: "mc",
          prompt: "Evaluate $\\log_3(27)$.",
          options: ["3", "9", "27", "1"],
          answer: 0,
          marks: 1,
          explanation: "$3^3=27$.",
        },
        {
          type: "tf",
          prompt: "$\\log_b(m+n) = \\log_b(m) + \\log_b(n)$.",
          answer: false,
          marks: 1,
          explanation: "The product law applies to $\\log_b(mn)$, multiplication, not addition.",
        },
        {
          type: "mc",
          prompt: "Given $\\log_b(9)=0.954$ and $\\log_b(3)=0.477$, find $\\log_b(27)$.",
          options: ["1.431", "0.477", "2.862", "0.954"],
          answer: 0,
          marks: 2,
          explanation: "$27=9\\times3$, so $\\log_b(27)=0.954+0.477=1.431$.",
        },
        {
          type: "mc",
          prompt: "Given $\\log_b(2)=0.301$, find $\\log_b(32)$.",
          options: ["1.505", "0.602", "0.301", "3.010"],
          answer: 0,
          marks: 2,
          explanation: "$32=2^5$, so $\\log_b(32)=5 \\times 0.301=1.505$.",
        },
        {
          type: "matching",
          prompt: "Match each expression to the correct law it demonstrates.",
          left: [
            "$\\log(6)=\\log(2)+\\log(3)$",
            "$\\log(4)=\\log(8)-\\log(2)$",
            "$\\log(9)=2\\log(3)$",
            "$\\log_b(x)=\\ln(x)/\\ln(b)$",
          ],
          options: ["Change of base", "Product law", "Power law", "Quotient law"],
          answer: [1, 3, 2, 0],
          marks: 4,
          explanation: "Each equation is a direct instance of the named log law.",
        },
        {
          type: "mc",
          prompt: "Use the change-of-base formula to estimate $\\log_6(40)$ (to 2 decimal places).",
          options: ["2.06", "1.85", "6.67", "0.45"],
          answer: 0,
          marks: 2,
          explanation: "$\\log(40)/\\log(6) \\approx 1.602/0.778 \\approx 2.06$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about logarithms.",
          options: [
            "$\\log_b(1) = 0$ for any valid base $b$.",
            "$\\log_b(b) = 1$ for any valid base $b$.",
            "Logarithms are defined for negative numbers.",
            "$\\ln(x)$ means $\\log_e(x)$.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "Logarithms are only defined for positive arguments.",
        },
        {
          type: "mc",
          prompt: "Evaluate $\\log_5(1)$.",
          options: ["0", "1", "5", "Undefined"],
          answer: 0,
          marks: 2,
          explanation: "$5^0=1$ for any base, so $\\log_5(1)=0$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "logarithmExplorer", label: "Use the logarithm laws laboratory" },
        { key: "logarithmsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
