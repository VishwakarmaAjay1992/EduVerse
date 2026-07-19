import type { LessonContent } from "@/lib/lesson-content-types";

export const exponentialAndLogarithmicEquations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "exponentials-and-logarithms",
  lessonSlug: "exponential-and-logarithmic-equations",
  title: "Exponential and Logarithmic Equations",
  objectives: [
    "Solve exponential equations by matching bases.",
    "Solve exponential equations by taking logarithms of both sides.",
    "Solve logarithmic equations by converting to exponential form.",
    "Solve logarithmic equations that require combining logs first.",
    "Check solutions and reject values outside a logarithm's domain.",
    "Interpret logarithmic scales, such as pH, decibels and the Richter scale.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "This lesson brings together everything from the last two lessons — exponential functions and logarithm laws — to solve equations where the variable sits in an exponent or inside a logarithm. These two equation types are inverse operations of each other, so the general strategy is always to 'undo' whichever operation is trapping the variable.",
        "You'll also meet a handful of real logarithmic scales — pH, decibels, and the Richter scale — where a small change in the number represents a huge change in the underlying quantity, precisely because the scale is logarithmic.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson requires confidence with both Exponential Growth and Decay and Logarithms and Their Laws — particularly converting between exponential and logarithmic form, and the three log laws.",
      ],
    },
    {
      kind: "theory",
      heading: "Solving exponential equations: matching bases",
      paragraphs: [
        "If both sides of an exponential equation can be written using the same base, the exponents must be equal (since the exponential function is one-to-one). This is the fastest method whenever it's possible.",
      ],
    },
    {
      kind: "formula",
      latex: "\\text{If } b^m = b^n \\ (b>0, b \\neq 1), \\text{ then } m = n",
      caption: "Matching bases turns an exponential equation into a simple linear one.",
    },
    {
      kind: "example",
      prompt: "Solve $4^x = 64$.",
      steps: [
        "Rewrite both sides with base 2 (or notice 64 as a power of 4 directly): $64 = 4^3$.",
        "Now the bases match: $4^x = 4^3$.",
        "Since the bases are equal, the exponents are equal: $x = 3$.",
      ],
      answer: "$x = 3$.",
    },
    {
      kind: "theory",
      heading: "Solving exponential equations: taking logs of both sides",
      paragraphs: [
        "When the bases can't be matched neatly, take the logarithm of both sides. This brings the variable out of the exponent (using the power law), turning the equation into ordinary algebra.",
      ],
    },
    {
      kind: "expLogEquationExplorer",
      heading: "Interactive: exponential and logarithmic equation solver",
    },
    {
      kind: "example",
      prompt: "Solve $5^x = 40$, giving your answer to 3 decimal places.",
      steps: [
        "Take the log of both sides: $\\log(5^x) = \\log(40)$.",
        "Apply the power law: $x \\log(5) = \\log(40)$.",
        "Divide both sides by $\\log(5)$: $x = \\dfrac{\\log(40)}{\\log(5)}$.",
        "Evaluate: $x \\approx 2.292$.",
      ],
      answer: "$x \\approx 2.292$.",
    },
    {
      kind: "example",
      prompt:
        "A population modelled by $P(t) = 300(1.15)^t$ is expected to reach 900. Find $t$, to 2 decimal places.",
      steps: [
        "Set up the equation: $300(1.15)^t = 900$.",
        "Divide both sides by 300: $1.15^t = 3$.",
        "Take the log of both sides: $t \\log(1.15) = \\log(3)$.",
        "Solve for $t$: $t = \\dfrac{\\log(3)}{\\log(1.15)} \\approx 7.86$.",
      ],
      answer: "The population reaches 900 after approximately 7.86 years.",
    },
    {
      kind: "theory",
      heading: "Solving logarithmic equations",
      paragraphs: [
        "To solve a logarithmic equation, first isolate the logarithm on one side, then convert to exponential form using the definition $\\log_b(x) = y \\Leftrightarrow b^y = x$. If the equation has multiple logarithms, combine them into a single logarithm first using the product or quotient law.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $\\log_3(x) = 4$.",
      steps: ["Convert to exponential form: $x = 3^4$.", "Evaluate: $x = 81$."],
      answer: "$x = 81$.",
    },
    {
      kind: "example",
      prompt: "Solve $2\\log(x) = 6$.",
      steps: [
        "Divide both sides by 2: $\\log(x) = 3$.",
        "Convert to exponential form (base 10): $x = 10^3$.",
        "Evaluate: $x = 1000$.",
      ],
      answer: "$x = 1000$.",
    },
    {
      kind: "example",
      prompt: "Solve $\\log(x) + \\log(x - 3) = 1$, checking for any values that must be rejected.",
      steps: [
        "Combine using the product law: $\\log(x(x-3)) = 1$.",
        "Convert to exponential form: $x(x-3) = 10^1 = 10$.",
        "Expand and rearrange: $x^2 - 3x - 10 = 0$.",
        "Factor: $(x-5)(x+2) = 0$, giving $x=5$ or $x=-2$.",
        "Check the domain: both $x$ and $x-3$ must be positive for the original logs to be defined. At $x=-2$: $\\log(-2)$ is undefined, so reject it.",
      ],
      answer: "$x = 5$ (the solution $x=-2$ is rejected as outside the domain).",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Always check the domain of log equations",
      body: "A logarithm is only defined for a positive argument. After solving, substitute each candidate solution back into every log in the ORIGINAL equation — if any log ends up taking a zero or negative input, that solution must be rejected.",
    },
    {
      kind: "theory",
      heading: "Logarithmic scales",
      paragraphs: [
        "Several real measurement scales are logarithmic, which means a fixed increase on the scale corresponds to a MULTIPLICATION of the underlying quantity, not just an addition. This compresses an enormous range of values into a manageable set of numbers.",
      ],
    },
    {
      kind: "table",
      heading: "Common logarithmic scales",
      headers: ["Scale", "Formula idea", "What a change of 1 unit means"],
      rows: [
        [
          "pH (acidity)",
          "$\\text{pH} = -\\log[\\text{H}^+]$",
          "A change of 1 pH unit means a 10× change in hydrogen ion concentration",
        ],
        [
          "Decibels (sound)",
          "$\\text{dB} = 10\\log(I/I_0)$",
          "An increase of 10 dB means the sound intensity is 10× greater",
        ],
        [
          "Richter scale (earthquakes)",
          "Based on $\\log$ of wave amplitude",
          "An increase of 1 on the scale means about 10× greater ground shaking",
        ],
      ],
    },
    {
      kind: "example",
      prompt:
        "An earthquake measuring 6.0 on the Richter scale releases how many times more ground-shaking amplitude than one measuring 4.0?",
      steps: [
        "The Richter scale is logarithmic (base 10), so each whole-number increase means a 10× increase in amplitude.",
        "The difference is $6.0 - 4.0 = 2$ units.",
        "Amplitude ratio: $10^2 = 100$.",
      ],
      answer:
        "The magnitude-6.0 earthquake has about 100 times the ground-shaking amplitude of the magnitude-4.0 one.",
    },
    {
      kind: "realWorld",
      heading: "Where these equations and scales appear",
      items: [
        {
          area: "Finance",
          text: "Finding how long an investment takes to reach a target value requires solving an exponential equation.",
        },
        {
          area: "Science",
          text: "Radioactive half-life calculations use exponential and logarithmic equations.",
        },
        {
          area: "Audio engineering",
          text: "Adjusting sound levels relies on understanding the decibel scale.",
        },
        {
          area: "Chemistry",
          text: "Determining acidity or alkalinity uses the logarithmic pH scale.",
        },
        {
          area: "Geology",
          text: "Comparing earthquake severity uses the logarithmic Richter (or modern moment magnitude) scale.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "When can you match bases to solve an exponential equation?",
          back: "When both sides can be written as powers of the same base.",
        },
        {
          front: "General strategy when bases don't match?",
          back: "Take the log of both sides, then use the power law.",
        },
        { front: "Steps to solve $\\log_b(x)=y$?", back: "Convert to exponential form: $x=b^y$." },
        {
          front: "What must you always check after solving a log equation?",
          back: "That every log in the original equation has a positive argument.",
        },
        {
          front: "What does a change of 1 pH unit represent?",
          back: "A 10 times change in hydrogen ion concentration.",
        },
        {
          front: "What does an increase of 10 dB represent?",
          back: "A 10 times increase in sound intensity.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: exponential and logarithmic equations",
      stepKey: "expLogEquationsPractice",
      questions: [
        {
          prompt: "Solve $3^x = 81$.",
          options: ["4", "3", "27", "9"],
          answer: 0,
          explanation: "$81=3^4$, so $x=4$.",
        },
        {
          prompt: "Solve $2^x = 5$, to 3 decimal places.",
          options: ["2.322", "2.5", "1.609", "3.219"],
          answer: 0,
          explanation: "$x=\\log(5)/\\log(2) \\approx 2.322$.",
        },
        {
          prompt: "Solve $\\log_4(x) = 3$.",
          options: ["64", "12", "81", "16"],
          answer: 0,
          explanation: "$x=4^3=64$.",
        },
        {
          prompt: "Solve $5\\log(x) = 10$.",
          options: ["100", "10", "1000", "50"],
          answer: 0,
          explanation: "$\\log(x)=2 \\Rightarrow x=10^2=100$.",
        },
        {
          prompt: "Solve $\\log(x) + \\log(2) = 1$.",
          options: ["5", "10", "8", "0.5"],
          answer: 0,
          explanation: "$\\log(2x)=1 \\Rightarrow 2x=10 \\Rightarrow x=5$.",
        },
        {
          prompt:
            "An earthquake of magnitude 5.0 compared to one of magnitude 3.0 has how many times the amplitude?",
          options: ["100", "10", "2", "1000"],
          answer: 0,
          explanation: "Difference of 2 units means $10^2=100$ times the amplitude.",
        },
        {
          prompt: "500(1.1)\u02e3 = 1000. Solve for x to 2 decimal places.",
          options: ["7.27", "5.00", "10.00", "2.00"],
          answer: 0,
          explanation: "$1.1^x=2 \\Rightarrow x=\\log(2)/\\log(1.1) \\approx 7.27$.",
        },
        {
          prompt: "Solve $\\log(x) + \\log(x+3) = 1$ and identify any rejected root.",
          options: [
            "x=2 (x=-5 rejected)",
            "x=-5 (x=2 rejected)",
            "x=2 and x=-5 both valid",
            "No solution",
          ],
          answer: 0,
          explanation:
            "$x(x+3)=10 \\Rightarrow x^2+3x-10=0 \\Rightarrow (x+5)(x-2)=0$; $x=-5$ makes the original logs undefined.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Forgetting to check the domain after solving a logarithmic equation, and reporting both roots of a quadratic.",
          right:
            "Substitute every solution back into the ORIGINAL logs — reject any that make a log's argument zero or negative.",
        },
        {
          wrong: "Taking the log of only one side of an equation.",
          right:
            "Whatever operation you apply, apply it to both sides to keep the equation balanced.",
        },
        {
          wrong: "Applying the power law backwards, e.g. writing $\\log(x^n)$ as $(\\log x)^n$.",
          right:
            "The power law moves the exponent out in front as a MULTIPLIER: $\\log(x^n) = n\\log(x)$.",
        },
        {
          wrong: "Assuming a 2-unit increase on a logarithmic scale means twice the quantity.",
          right:
            "On a base-10 logarithmic scale, each 1-unit increase means a 10× increase, so 2 units means $10^2=100$ times, not 2 times.",
        },
        {
          wrong: "Combining logs with different bases directly using the product law.",
          right: "The log laws only combine logarithms that share the SAME base.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Match bases when possible: if $b^m=b^n$, then $m=n$.",
        "Otherwise, take the log of both sides and use the power law to bring the exponent down.",
        "Solve $\\log_b(x)=y$ by converting to exponential form: $x=b^y$.",
        "Combine multiple logs with the product/quotient law before converting to exponential form.",
        "Always check solutions against the domain of the ORIGINAL logarithmic equation, rejecting any invalid roots.",
        "Logarithmic scales (pH, decibels, Richter) compress huge ranges: each unit typically represents a ×10 change.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: exponential and logarithmic equations",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Solve $2^x = 32$.",
          options: ["5", "4", "16", "6"],
          answer: 0,
          marks: 1,
          explanation: "$32=2^5$.",
        },
        {
          type: "mc",
          prompt: "Solve $\\log_2(x) = 6$.",
          options: ["64", "12", "36", "32"],
          answer: 0,
          marks: 1,
          explanation: "$x=2^6=64$.",
        },
        {
          type: "tf",
          prompt:
            "When solving a logarithmic equation, you should always check that solutions keep every log argument positive.",
          answer: true,
          marks: 1,
          explanation:
            "Logs are undefined for zero or negative arguments, so this check is essential.",
        },
        {
          type: "mc",
          prompt: "Solve $3^x = 50$, to 3 decimal places.",
          options: ["3.561", "3.5", "2.500", "4.000"],
          answer: 0,
          marks: 2,
          explanation: "$x=\\log(50)/\\log(3) \\approx 3.561$.",
        },
        {
          type: "mc",
          prompt: "Solve $4\\log(x) = 8$.",
          options: ["100", "10", "1000", "10000"],
          answer: 0,
          marks: 2,
          explanation: "$\\log(x)=2 \\Rightarrow x=100$.",
        },
        {
          type: "matching",
          prompt: "Match each equation type to the correct first step.",
          left: ["$5^x=17$", "$\\log_2(x)=7$", "$\\log(x)+\\log(x-1)=1$", "$3\\log(x)=9$"],
          options: [
            "Divide by 3 first",
            "Convert to exponential form directly",
            "Combine logs using the product law",
            "Take the log of both sides",
          ],
          answer: [3, 1, 2, 0],
          marks: 4,
          explanation: "Each equation type calls for a different natural first move.",
        },
        {
          type: "mc",
          prompt:
            "A city's population is modelled by $P(t)=50000(1.03)^t$. How many years until it reaches 100,000, to the nearest year?",
          options: ["23", "20", "33", "50"],
          answer: 0,
          marks: 2,
          explanation: "$1.03^t=2 \\Rightarrow t=\\log(2)/\\log(1.03) \\approx 23.4 \\approx 23$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about solving these equations.",
          options: [
            "Matching bases only works when both sides can be written as powers of the same base.",
            "Taking logs of both sides is valid even when bases don't match.",
            "Every solution to the algebra is automatically valid in the original log equation.",
            "The Richter and decibel scales are both logarithmic.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "Algebraic solutions to log equations must always be checked against the domain of the original logs.",
        },
        {
          type: "mc",
          prompt:
            "An earthquake of magnitude 7.0 has how many times the amplitude of one measuring 5.0?",
          options: ["100", "2", "10", "1000"],
          answer: 0,
          marks: 2,
          explanation: "A 2-unit difference on a base-10 log scale means $10^2=100$ times.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "expLogEquationExplorer", label: "Use the exponential and log equation solver" },
        { key: "expLogEquationsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
