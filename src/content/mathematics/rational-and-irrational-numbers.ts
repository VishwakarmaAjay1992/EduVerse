import type { LessonContent } from "@/lib/lesson-content-types";

export const rationalAndIrrationalNumbers: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "integers-and-rational-numbers",
  lessonSlug: "rational-and-irrational-numbers",
  title: "Rational and Irrational Numbers",
  objectives: [
    "Describe natural, whole, integer, rational, irrational and real numbers",
    "Write rational numbers in the form $p/q$ with $q\ne0$",
    "Use decimal behaviour to distinguish rational from irrational numbers",
    "Classify square roots using perfect squares",
    "Compare and order rational and irrational values using approximations",
    "Explain why infinitely many rational numbers lie between any two distinct rational numbers",
    "Recognise famous irrational numbers including $\sqrt2$, $\pi$ and $e$",
    "Avoid common errors when combining rational and irrational numbers",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Not every number is an integer or a fraction written in a familiar form. The real number system contains nested families: counting numbers, whole numbers, integers, rational numbers and irrational numbers. Understanding how these sets fit together helps you classify values, predict decimal behaviour and choose suitable exact or approximate forms.",
        "The central dividing line is this: rational numbers can be expressed as a ratio of integers, while irrational numbers cannot. Together, rational and irrational numbers make up all real numbers.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Rational number",
      body: "A rational number is any number that can be written as $\frac pq$, where $p$ and $q$ are integers and $q\ne0$. The word rational comes from ratio.",
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Irrational number",
      body: "An irrational number is a real number that cannot be written as $\frac pq$ for integers $p$ and non-zero $q$. Its decimal expansion is non-terminating and non-repeating.",
    },
    {
      kind: "theory",
      heading: "The real-number family",
      paragraphs: [
        "Number sets are nested. Every natural number is a whole number; every whole number is an integer; every integer is rational because $n=n/1$; and every rational number is real.",
        "Textbooks differ on whether zero belongs to the natural numbers. In this lesson, natural numbers mean $1,2,3,\ldots$, while whole numbers mean $0,1,2,3,\ldots$. Always check the convention used in your course.",
      ],
    },
    {
      kind: "table",
      heading: "Number sets and examples",
      headers: ["Set", "Description", "Examples"],
      rows: [
        [
          "Natural numbers $\mathbb N$",
          "Counting numbers beginning at 1 in this course",
          "$1,2,3,\ldots$",
        ],
        ["Whole numbers", "Natural numbers together with zero", "$0,1,2,3,\ldots$"],
        [
          "Integers $\mathbb Z$",
          "Whole numbers and their negatives",
          "$\ldots,-2,-1,0,1,2,\ldots$",
        ],
        [
          "Rational numbers $\mathbb Q$",
          "Ratios $p/q$ with integer $p,q$ and $q\ne0$",
          "$-5,\frac38,0.25,0.\overline{6}$",
        ],
        [
          "Irrational numbers",
          "Real numbers not expressible as an integer ratio",
          "$\sqrt2,\pi,e$",
        ],
        [
          "Real numbers $\mathbb R$",
          "All rational and irrational numbers",
          "Every point on the continuous number line",
        ],
      ],
    },
    {
      kind: "theory",
      heading: "Many forms can hide a rational number",
      paragraphs: [
        "A rational number does not need to look like a fraction. Integers, terminating decimals and repeating decimals are all rational.",
        "For example, $-7=-7/1$, $0.125=125/1000=1/8$, and $0.333\ldots=1/3$. The representation changes, but the number remains in the same set.",
      ],
      list: [
        "Every integer is rational.",
        "Every terminating decimal is rational because it can be written over a power of 10.",
        "Every eventually repeating decimal is rational.",
        "A decimal that continues forever without a repeating block is irrational.",
      ],
    },
    {
      kind: "formula",
      latex: "\mathbb Q=\left\{\frac pq:p,q\in\mathbb Z,\ q\ne0\right\}",
      caption: "The formal description of the rational numbers.",
    },
    {
      kind: "example",
      prompt: "Show that $0.45$ is rational.",
      steps: [
        "Write the terminating decimal over a power of ten: $0.45=45/100$.",
        "Simplify by dividing numerator and denominator by 5: $45/100=9/20$.",
        "Both 9 and 20 are integers and the denominator is non-zero.",
      ],
      answer: "$0.45=9/20$, so it is rational.",
    },
    {
      kind: "example",
      prompt: "Convert $0.\overline{27}=0.272727\ldots$ to a fraction.",
      steps: [
        "Let $x=0.272727\ldots$.",
        "Two digits repeat, so multiply by 100: $100x=27.272727\ldots$.",
        "Subtract the original equation: $100x-x=27$.",
        "Thus $99x=27$, so $x=27/99=3/11$.",
      ],
      answer: "$0.\overline{27}=3/11$, so it is rational.",
    },
    {
      kind: "theory",
      heading: "Decimal behaviour",
      paragraphs: [
        "When a fraction is written in lowest terms, its decimal terminates exactly when the denominator has no prime factors other than 2 and 5. This happens because powers of 10 are built from 2s and 5s: $10^n=2^n5^n$.",
        "Other rational denominators produce repeating decimals. Irrational decimals neither terminate nor settle into a repeating block.",
      ],
    },
    {
      kind: "table",
      heading: "Terminating, repeating or irrational?",
      headers: ["Number", "Decimal behaviour", "Classification"],
      rows: [
        ["$3/8$", "$0.375$ terminates", "Rational"],
        ["$5/12$", "$0.41666\ldots$ eventually repeats", "Rational"],
        ["$7/11$", "$0.636363\ldots$ repeats", "Rational"],
        ["$\sqrt2$", "$1.41421356\ldots$ does not repeat", "Irrational"],
        ["$\pi$", "$3.14159265\ldots$ does not repeat", "Irrational"],
      ],
    },
    {
      kind: "theory",
      heading: "Square roots and perfect squares",
      paragraphs: [
        "The square root of a perfect-square integer is an integer and therefore rational. Examples include $\sqrt{49}=7$ and $\sqrt{121}=11$.",
        "If a positive integer is not a perfect square, its square root is irrational. For example, $\sqrt{12}$ is irrational, although it can be simplified to $2\sqrt3$.",
        "Do not classify a square root from its symbol alone. $\sqrt{16}$ is rational, while $\sqrt{17}$ is irrational.",
      ],
    },
    {
      kind: "cards",
      heading: "Famous irrational numbers",
      columns: 3,
      items: [
        {
          title: "$\sqrt2$",
          icon: "SquareRadical",
          value: "1.41421356…",
          text: "The diagonal of a unit square. Its irrationality was known in ancient Greek mathematics.",
        },
        {
          title: "$\pi$",
          icon: "Circle",
          value: "3.14159265…",
          text: "The ratio of a circle's circumference to its diameter.",
        },
        {
          title: "$e$",
          icon: "TrendingUp",
          value: "2.71828182…",
          text: "The natural base of exponential growth, important in calculus and continuous change.",
        },
      ],
    },
    {
      kind: "rationalNumberExplorer",
      heading: "Interactive real-number classification laboratory",
    },
    {
      kind: "theory",
      heading: "Comparing exact and approximate values",
      paragraphs: [
        "Irrational numbers are often kept in exact form, such as $\sqrt5$ or $\pi$, because a decimal can only approximate them. To compare or place them on a number line, calculate enough decimal digits for the decision you need.",
        "For example, $\sqrt5\approx2.236$ and $9/4=2.25$, so $\sqrt5<9/4$. The approximation is used to compare, while $\sqrt5$ remains the exact value.",
      ],
    },
    {
      kind: "example",
      prompt: "Order $\sqrt3$, $1.7$ and $7/4$ from least to greatest.",
      steps: [
        "Approximate the irrational value: $\sqrt3\approx1.732$.",
        "Convert the fraction: $7/4=1.75$.",
        "Compare $1.700$, $1.732$ and $1.750$.",
      ],
      answer: "$1.7<\sqrt3<7/4$.",
    },
    {
      kind: "example",
      prompt: "Classify $\sqrt{81}$ using the smallest number set in this lesson.",
      steps: ["$81=9^2$, so $\sqrt{81}=9$.", "9 is a counting number."],
      answer: "$\sqrt{81}$ is natural (and therefore also whole, integer, rational and real).",
    },
    {
      kind: "example",
      prompt: "Classify $-\sqrt{25}$ using the smallest set.",
      steps: [
        "$\sqrt{25}=5$, so $-\sqrt{25}=-5$.",
        "−5 is not whole or natural, but it is an integer.",
      ],
      answer: "$-\sqrt{25}$ is an integer (and therefore rational and real).",
    },
    {
      kind: "example",
      prompt: "Classify $\sqrt{10}$.",
      steps: [
        "10 is not a perfect square.",
        "The square root of a positive non-perfect-square integer cannot be written as a ratio of integers.",
      ],
      answer: "$\sqrt{10}$ is irrational.",
    },
    {
      kind: "theory",
      heading: "Rational numbers are dense",
      paragraphs: [
        "Between any two distinct rational numbers there are infinitely many rational numbers. One quick construction is their average: if $a<b$, then $(a+b)/2$ is rational and lies between them.",
        "You can repeat the midpoint process forever, so rational numbers do not have immediate neighbours on the real number line. Even a very small interval contains infinitely many rational values.",
        "Irrational numbers are also dense in the real numbers: every interval contains irrational values too. The number line has no gaps even though rational and irrational numbers are different sets.",
      ],
    },
    {
      kind: "example",
      prompt: "Find three rational numbers between $1/3$ and $1/2$.",
      steps: [
        "Use a common denominator: $1/3=8/24$ and $1/2=12/24$.",
        "Fractions with numerators between 8 and 12 are $9/24$, $10/24$ and $11/24$.",
        "They may be simplified, but all remain between the endpoints.",
      ],
      answer: "For example, $3/8$, $5/12$ and $11/24$.",
    },
    {
      kind: "example",
      prompt: "Use the midpoint method to find a rational number between $-2/3$ and $1/5$.",
      steps: [
        "Add the endpoints: $-2/3+1/5=-10/15+3/15=-7/15$.",
        "Divide by 2: $(-7/15)/2=-7/30$.",
        "The average of two distinct values lies between them.",
      ],
      answer: "$-7/30$ is one rational number between $-2/3$ and $1/5$.",
    },
    {
      kind: "theory",
      heading: "What happens under arithmetic operations?",
      paragraphs: [
        "Rational numbers are closed under addition, subtraction and multiplication: combining two rational numbers with these operations always gives another rational number. Division also gives a rational result provided the divisor is not zero.",
        "Rules involving irrational numbers need care. A non-zero rational times an irrational number is irrational, and a rational plus an irrational number is irrational. But two irrational numbers can combine to give either an irrational or a rational value.",
      ],
    },
    {
      kind: "table",
      heading: "Operations and classifications",
      headers: ["Operation", "Example", "Outcome"],
      rows: [
        ["Rational + rational", "$2/3+1/6=5/6$", "Always rational"],
        ["Rational × rational", "$(-4)(3/5)=-12/5$", "Always rational"],
        ["Rational + irrational", "$3+\sqrt2$", "Irrational"],
        ["Non-zero rational × irrational", "$5\sqrt3$", "Irrational"],
        ["Irrational + irrational", "$\sqrt2+(-\sqrt2)=0$", "Can be rational"],
        ["Irrational × irrational", "$\sqrt2\cdot\sqrt2=2$", "Can be rational"],
      ],
      note: "Do not assume that combining two irrational numbers must produce an irrational answer.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Measurement",
          text: "A square with side 1 metre has diagonal $\sqrt2$ metres—an exact irrational length that instruments can only approximate.",
        },
        {
          area: "Circles",
          text: "Circumference and area calculations use $\pi$. Keeping $\pi$ in exact form avoids premature rounding.",
        },
        {
          area: "Finance and data",
          text: "Most recorded monetary and measured values are rational approximations because devices store a finite number of decimal places.",
        },
        {
          area: "Growth models",
          text: "The irrational number $e$ appears in continuous growth, decay, probability and calculus.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Calling every decimal irrational.",
          right:
            "Terminating and repeating decimals are rational; only non-terminating, non-repeating decimals are irrational.",
        },
        {
          wrong: "Calling every square root irrational.",
          right:
            "Square roots of perfect squares are integers and rational, such as $\sqrt{64}=8$.",
        },
        {
          wrong: "Saying $\pi=3.14$ exactly.",
          right: "$3.14$ is a rational approximation; $\pi$ is an exact irrational value.",
        },
        {
          wrong: "Assuming irrational + irrational is always irrational.",
          right: "$\sqrt2+(-\sqrt2)=0$, so two irrational numbers can sum to a rational number.",
        },
        {
          wrong: "Using a denominator of zero in $p/q$.",
          right:
            "A rational representation requires $q\ne0$ because division by zero is undefined.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Guided practice",
      stepKey: "rationalNumberPractice",
      questions: [
        {
          prompt: "What is the smallest set containing −8?",
          options: ["Natural", "Whole", "Integer", "Irrational"],
          answer: 2,
          explanation:
            "−8 is an integer; it is also rational and real, but integer is the smallest listed set.",
        },
        {
          prompt: "Which number is irrational?",
          options: ["$0.125$", "$7/9$", "$\sqrt{11}$", "$-4$"],
          answer: 2,
          explanation: "11 is not a perfect square, so $\sqrt{11}$ is irrational.",
        },
        {
          prompt: "Which decimal is rational?",
          options: [
            "$0.1010010001\ldots$ with growing zero blocks",
            "$0.\overline{36}$",
            "$\pi$",
            "$\sqrt7$",
          ],
          answer: 1,
          explanation: "A repeating decimal is rational.",
        },
        {
          prompt: "What is the smallest set containing $\sqrt{49}$?",
          options: ["Natural", "Integer", "Rational", "Irrational"],
          answer: 0,
          explanation: "$\sqrt{49}=7$, a natural number.",
        },
        {
          prompt: "Which statement about $0.333\ldots$ is correct?",
          options: [
            "It is irrational",
            "It equals $1/3$",
            "It is only approximately $1/3$",
            "It terminates",
          ],
          answer: 1,
          explanation: "The repeating decimal $0.333\ldots$ is exactly $1/3$.",
        },
        {
          prompt: "Which is greater?",
          options: ["$\sqrt5$", "$2.2$", "They are equal", "Cannot be compared"],
          answer: 0,
          explanation: "$\sqrt5\approx2.236$, which is greater than 2.2.",
        },
        {
          prompt: "Which number lies between $1/4$ and $1/2$?",
          options: ["$1/8$", "$3/8$", "$5/8$", "$3/4$"],
          answer: 1,
          explanation: "$1/4=2/8$ and $1/2=4/8$, so $3/8$ lies between them.",
        },
        {
          prompt: "What type of number is $\sqrt2\cdot\sqrt2$?",
          options: ["Natural", "Irrational", "Not real", "Undefined"],
          answer: 0,
          explanation: "$\sqrt2\cdot\sqrt2=2$, which is natural.",
        },
        {
          prompt: "Which fraction has a terminating decimal?",
          options: ["$1/6$", "$3/20$", "$2/9$", "$5/12$"],
          answer: 1,
          explanation: "20 has only 2 and 5 as prime factors, so $3/20=0.15$ terminates.",
        },
        {
          prompt: "Which statement is always true?",
          options: [
            "Irrational + irrational is irrational",
            "Rational + rational is rational",
            "Irrational × irrational is irrational",
            "Every real number is rational",
          ],
          answer: 1,
          explanation: "Rational numbers are closed under addition.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A rational number can be written as $p/q$ for integers $p,q$ with $q\ne0$.",
        "Terminating and repeating decimals are rational; non-terminating, non-repeating decimals are irrational.",
        "Natural numbers are nested inside whole numbers, integers, rational numbers and real numbers.",
        "Square roots of perfect squares are rational; square roots of positive non-perfect-square integers are irrational.",
        "Use decimal approximations to compare irrational values, but preserve exact forms when possible.",
        "Infinitely many rational and irrational numbers lie in every interval of the real number line.",
        "Two irrational numbers may combine to produce either rational or irrational results.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Rational and irrational number mastery quiz",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which is the smallest set containing 0?",
          options: ["Natural under this lesson's convention", "Whole", "Irrational", "Not real"],
          answer: 1,
          marks: 1,
          explanation:
            "In this lesson natural numbers begin at 1, so zero is whole but not natural.",
        },
        {
          type: "tf",
          prompt: "Every integer is a rational number.",
          answer: true,
          marks: 1,
          explanation: "Any integer $n$ can be written as $n/1$.",
        },
        {
          type: "mc",
          prompt: "Which value is irrational?",
          options: ["$\sqrt{100}$", "$0.\overline{4}$", "$\sqrt{13}$", "$-7/2$"],
          answer: 2,
          marks: 1,
          explanation: "13 is not a perfect square, so $\sqrt{13}$ is irrational.",
        },
        {
          type: "mc",
          prompt: "Which decimal behaviour identifies a rational number?",
          options: [
            "It must terminate",
            "It terminates or eventually repeats",
            "It never repeats",
            "It must contain infinitely many digits",
          ],
          answer: 1,
          marks: 1,
          explanation: "Rational decimals are terminating or eventually periodic.",
        },
        {
          type: "matching",
          prompt: "Match each number to its smallest set.",
          left: ["$6$", "$0$", "$-3$", "$5/8$", "$\pi$"],
          options: ["Natural", "Whole", "Integer", "Rational", "Irrational"],
          answer: [0, 1, 2, 3, 4],
          marks: 5,
          explanation: "The set hierarchy places each value in the smallest applicable category.",
        },
        {
          type: "multi",
          prompt: "Select all rational numbers.",
          options: ["$0.75$", "$\sqrt{36}$", "$\sqrt7$", "$0.121212\ldots$", "$\pi$"],
          answers: [0, 1, 3],
          marks: 2,
          explanation: "Terminating and repeating decimals are rational, and $\sqrt{36}=6$.",
        },
        {
          type: "tf",
          prompt: "There is a next rational number immediately after $1/2$.",
          answer: false,
          marks: 1,
          explanation:
            "Between any two distinct rational numbers lies another rational number, so no rational has an immediate neighbour.",
        },
        {
          type: "mc",
          prompt: "Which is the correct increasing order?",
          options: ["$1.4<\sqrt2<3/2$", "$\sqrt2<1.4<3/2$", "$3/2<\sqrt2<1.4$", "$1.4<3/2<\sqrt2$"],
          answer: 0,
          marks: 1,
          explanation: "$\sqrt2\approx1.414$ and $3/2=1.5$.",
        },
        {
          type: "mc",
          prompt: "What is the midpoint between $1/3$ and $2/3$?",
          options: ["$1/6$", "$1/2$", "$2/3$", "$1$"],
          answer: 1,
          marks: 1,
          explanation: "$(1/3+2/3)/2=1/2$.",
        },
        {
          type: "tf",
          prompt: "The sum of two irrational numbers must be irrational.",
          answer: false,
          marks: 1,
          explanation: "$\sqrt2+(-\sqrt2)=0$, a rational counterexample.",
        },
        {
          type: "multi",
          prompt: "Select all statements that are always true.",
          options: [
            "Rational + rational is rational",
            "Non-zero rational × irrational is irrational",
            "Irrational × irrational is irrational",
            "Rational ÷ non-zero rational is rational",
          ],
          answers: [0, 1, 3],
          marks: 2,
          explanation: "The third statement is not always true because $\sqrt2\cdot\sqrt2=2$.",
        },
        {
          type: "mc",
          prompt: "Why is $3.14$ not equal to $\pi$?",
          options: [
            "3.14 is negative",
            "3.14 is a rational approximation while $\pi$ is irrational",
            "3.14 is not real",
            "$\pi$ terminates",
          ],
          answer: 1,
          marks: 1,
          explanation:
            "$3.14=157/50$ is rational; it approximates but does not equal the exact irrational number $\pi$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "rationalNumberExplorer",
          label: "Use the classification, density and square-root explorer",
        },
        { key: "rationalNumberPractice", label: "Answer all guided-practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
