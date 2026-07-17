import type { LessonContent } from "@/lib/lesson-content-types";

export const simplifyingExpressions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "introduction-to-algebraic-thinking",
  lessonSlug: "simplifying-expressions",
  title: "Simplifying Expressions",
  objectives: [
    "Explain what it means for two expressions to be equivalent",
    "Identify like terms by comparing their variable parts",
    "Collect like terms accurately, including negative coefficients",
    "Use the distributive property to expand a single bracket",
    "Handle a negative factor outside a bracket",
    "Factorise a two-term expression by taking out a common factor",
    "Check expansion and factorisation by reversing the operation",
    "Simplify expressions while preserving their value",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Simplifying an expression means rewriting it in a shorter or more useful form without changing its value. The original and simplified expressions must give the same result for every permitted value of the variables.",
        "The three key skills in this lesson are collecting like terms, expanding brackets and factorising. Expansion and factorisation are reverse processes, so each can be used to check the other.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Equivalent expressions",
      body: "Two expressions are equivalent when they have the same value for every allowed value of their variables. For example, $3x+2x$ and $5x$ are equivalent.",
    },
    {
      kind: "theory",
      heading: "The simplification principle",
      paragraphs: [
        "Simplification changes the appearance of an expression, not its meaning. You may combine terms only when their variable parts are identical. You may remove brackets only by multiplying the outside factor by every term inside.",
        "A useful check is substitution: choose a convenient value for the variable and evaluate both forms. Matching results for one value does not prove equivalence, but a mismatch immediately proves that an error has occurred.",
      ],
    },
    {
      kind: "formula",
      latex: "ax+bx=(a+b)x",
      caption: "Like variable parts stay the same; only their coefficients are added.",
    },
    {
      kind: "theory",
      heading: "Collecting like terms",
      paragraphs: [
        "Like terms have the same variables raised to the same powers. Think of the variable part as the unit. Just as 3 metres plus 5 metres equals 8 metres, $3x+5x=8x$.",
        "The sign before a term belongs to its coefficient. In $7x-10x$, the coefficients are 7 and −10, so the result is $-3x$.",
      ],
      list: [
        "Group terms with identical variable parts.",
        "Add or subtract their coefficients.",
        "Keep the common variable part unchanged.",
        "Combine constants with constants.",
        "Do not combine unlike terms.",
      ],
    },
    {
      kind: "table",
      heading: "Like-term test",
      headers: ["Pair", "Like terms?", "Reason"],
      rows: [
        ["$4x$ and $9x$", "Yes", "Both variable parts are x"],
        ["$3a^2$ and $-5a^2$", "Yes", "Both variable parts are a²"],
        ["$2xy$ and $7xy$", "Yes", "Both contain exactly xy"],
        ["$6x$ and $6y$", "No", "Different variables"],
        ["$5m$ and $5m^2$", "No", "Different powers"],
        ["$8ab$ and $8a$", "No", "The variable parts ab and a differ"],
      ],
    },
    {
      kind: "example",
      prompt: "Simplify $6x+3x$.",
      steps: ["Both terms have variable part x.", "Add the coefficients: $6+3=9$.", "Keep the x."],
      answer: "$6x+3x=9x$.",
    },
    {
      kind: "example",
      prompt: "Simplify $8a-11a$.",
      steps: [
        "Write the coefficients as 8 and −11.",
        "Calculate $8+(-11)=-3$.",
        "Keep the variable a.",
      ],
      answer: "$-3a$.",
    },
    {
      kind: "example",
      prompt: "Simplify $4x+7+2x-3$.",
      steps: [
        "Group x terms: $4x+2x=6x$.",
        "Group constants: $7-3=4$.",
        "Write the unlike groups together.",
      ],
      answer: "$6x+4$.",
    },
    {
      kind: "example",
      prompt: "Simplify $5p-2q-3p+7q$.",
      steps: [
        "Combine p terms: $5p-3p=2p$.",
        "Combine q terms: $-2q+7q=5q$.",
        "The p and q terms remain separate.",
      ],
      answer: "$2p+5q$.",
    },
    {
      kind: "simplifyingExpressionsExplorer",
      heading: "Interactive simplification laboratory",
    },
    {
      kind: "theory",
      heading: "Expanding a single bracket",
      paragraphs: [
        "The distributive property says that multiplying a sum is the same as multiplying each term separately and then adding the results. The outside factor must reach every term inside the bracket.",
        "This is often visualised as an area model: a rectangle with one side $a$ and the other side split into lengths $b$ and $c$ has total area $ab+ac$. Therefore $a(b+c)=ab+ac$.",
      ],
    },
    {
      kind: "formula",
      latex: "a(b+c)=ab+ac",
      caption: "The factor a is distributed to both terms inside the bracket.",
    },
    {
      kind: "formula",
      latex: "a(b-c)=ab-ac",
      caption: "Subtraction inside the bracket is distributed in the same way.",
    },
    {
      kind: "example",
      prompt: "Expand $4(x+3)$.",
      steps: [
        "Multiply 4 by x: $4\times x=4x$.",
        "Multiply 4 by 3: $4\times3=12$.",
        "Join the products with the original plus sign.",
      ],
      answer: "$4x+12$.",
    },
    {
      kind: "example",
      prompt: "Expand $5(2y-7)$.",
      steps: [
        "Multiply 5 by $2y$: $10y$.",
        "Multiply 5 by −7: −35.",
        "Keep the signs produced by each product.",
      ],
      answer: "$10y-35$.",
    },
    {
      kind: "theory",
      heading: "Expanding with a negative factor",
      paragraphs: [
        "A negative outside factor changes the sign of every term inside the bracket because each term is multiplied by a negative number. Work term by term rather than trying to change signs by memory alone.",
      ],
    },
    {
      kind: "example",
      prompt: "Expand $-3(2x-5)$.",
      steps: [
        "$-3\times2x=-6x$.",
        "$-3\times(-5)=+15$ because two negatives multiply to a positive.",
        "Combine the two products.",
      ],
      answer: "$-6x+15$.",
    },
    {
      kind: "example",
      prompt: "Expand and simplify $2(x+4)+3x$.",
      steps: [
        "Expand the bracket: $2x+8+3x$.",
        "Collect x terms: $2x+3x=5x$.",
        "Keep the constant 8.",
      ],
      answer: "$5x+8$.",
    },
    {
      kind: "theory",
      heading: "Factorising: reversing expansion",
      paragraphs: [
        "Factorising rewrites a sum as a product. For a simple two-term expression, identify a factor shared by every term, place it outside a bracket, and divide each original term by that factor to find what remains inside.",
        "For complete numerical factorisation, take out the highest common factor. You can check the result by expanding the bracket; it should reproduce the starting expression exactly.",
      ],
    },
    {
      kind: "formula",
      latex: "ab+ac=a(b+c)",
      caption: "Factorising is the reverse of the distributive property.",
    },
    {
      kind: "example",
      prompt: "Factorise $8x+12$ completely.",
      steps: [
        "The highest common factor of 8 and 12 is 4.",
        "$8x\div4=2x$.",
        "$12\div4=3$.",
        "Place 4 outside the bracket.",
      ],
      answer: "$4(2x+3)$.",
    },
    {
      kind: "example",
      prompt: "Factorise $15a-10$ completely.",
      steps: [
        "The highest common factor of 15 and 10 is 5.",
        "$15a\div5=3a$.",
        "$-10\div5=-2$.",
        "Check: $5(3a-2)=15a-10$.",
      ],
      answer: "$5(3a-2)$.",
    },
    {
      kind: "comparison",
      heading: "Expansion and factorisation",
      left: {
        title: "Expand",
        items: [
          "Starts with a product",
          "Removes brackets",
          "Multiply the outside factor by every term",
          "$3(x+4)\rightarrow3x+12$",
        ],
      },
      right: {
        title: "Factorise",
        items: [
          "Starts with a sum or difference",
          "Creates brackets",
          "Take out a shared factor",
          "$3x+12\rightarrow3(x+4)$",
        ],
      },
    },
    {
      kind: "realWorld",
      heading: "Why simplify and factorise?",
      items: [
        { area: "Mental calculation", text: "$7\times48+7\times52$ factorises to $7(48+52)=700$." },
        {
          area: "Geometry",
          text: "An area written as $3x+12$ can be factorised as $3(x+4)$ to reveal possible side lengths.",
        },
        {
          area: "Programming",
          text: "Equivalent expressions can reduce repeated calculations in software.",
        },
        {
          area: "Science formulas",
          text: "Collecting like terms makes models easier to interpret and solve.",
        },
        {
          area: "Finance",
          text: "Several charges with the same rate can be combined into one term.",
        },
        {
          area: "Later algebra",
          text: "Expansion and factorisation are essential for equations, quadratics and algebraic fractions.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Combining $3x+4$ as $7x$.",
          right: "A variable term and a constant are unlike, so the expression stays $3x+4$.",
        },
        {
          wrong: "Combining $2x+5x^2$ as $7x^2$.",
          right: "x and x² are different variable parts and cannot be collected.",
        },
        { wrong: "Expanding $3(x+5)$ as $3x+5$.", right: "Multiply both terms: $3x+15$." },
        {
          wrong: "Expanding $-2(x-4)$ as $-2x-8$.",
          right: "$-2\times(-4)=+8$, so the result is $-2x+8$.",
        },
        { wrong: "Factorising $6x+9$ as $3(2x+9)$.", right: "Divide every term by 3: $3(2x+3)$." },
        {
          wrong: "Changing an expression's value while simplifying.",
          right: "Use expansion or substitution to check equivalence.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: simplify, expand and factorise",
      stepKey: "simplifyingPractice",
      questions: [
        {
          prompt: "Simplify $7x+4x$.",
          options: ["11", "11x", "28x", "7x + 4"],
          answer: 1,
          explanation: "Add the coefficients and keep x: 7 + 4 = 11.",
        },
        {
          prompt: "Simplify $9a-12a$.",
          options: ["−3a", "3a", "−3", "21a"],
          answer: 0,
          explanation: "$9+(-12)=-3$, so the result is −3a.",
        },
        {
          prompt: "Simplify $3x+8+5x-2$.",
          options: ["8x + 6", "8x + 10", "6x + 8", "16x"],
          answer: 0,
          explanation: "$3x+5x=8x$ and $8-2=6$.",
        },
        {
          prompt: "Expand $6(y+2)$.",
          options: ["6y + 2", "6y + 8", "6y + 12", "12y"],
          answer: 2,
          explanation: "Multiply 6 by both y and 2.",
        },
        {
          prompt: "Expand $4(3x-5)$.",
          options: ["12x − 5", "7x − 9", "12x − 20", "12x + 20"],
          answer: 2,
          explanation: "$4\times3x=12x$ and $4\times(-5)=-20$.",
        },
        {
          prompt: "Expand $-2(a+7)$.",
          options: ["−2a + 7", "−2a − 14", "2a − 14", "−9a"],
          answer: 1,
          explanation: "The negative factor multiplies both terms.",
        },
        {
          prompt: "Factorise $10x+15$ completely.",
          options: ["5(2x + 3)", "10(x + 15)", "5(2x + 15)", "15(10x + 1)"],
          answer: 0,
          explanation: "The HCF is 5 and the terms inside are 2x and 3.",
        },
        {
          prompt: "Factorise $12y-8$ completely.",
          options: ["2(6y − 8)", "4(3y − 2)", "8(12y − 1)", "4(3y − 8)"],
          answer: 1,
          explanation: "The HCF is 4: 12y ÷ 4 = 3y and −8 ÷ 4 = −2.",
        },
        {
          prompt: "Which expression is equivalent to $3(x+4)+2x$?",
          options: ["5x + 4", "5x + 12", "6x + 12", "3x + 8"],
          answer: 1,
          explanation: "Expand to 3x + 12 + 2x, then collect to 5x + 12.",
        },
        {
          prompt: "Which pair is not like terms?",
          options: ["4x and −x", "3a² and 8a²", "5xy and −2xy", "7m and 7m²"],
          answer: 3,
          explanation: "m and m² have different powers.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Equivalent expressions have the same value for every allowed variable value.",
        "Only terms with identical variable parts can be collected.",
        "When collecting like terms, operate on coefficients and keep the variable part.",
        "To expand a bracket, multiply the outside factor by every term inside.",
        "A negative outside factor affects the sign of every product.",
        "To factorise, take out a common factor and divide every term by it.",
        "Expansion and factorisation are inverse processes and provide a natural check.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: Simplifying Expressions",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Simplify $5x+9x$.",
          options: ["14", "14x", "45x", "5x + 9"],
          answer: 1,
          marks: 2,
          explanation: "The terms are like, so add the coefficients to obtain 14x.",
        },
        {
          type: "mc",
          prompt: "Simplify $8a-3a+6$.",
          options: ["5a + 6", "11a + 6", "5a", "11a"],
          answer: 0,
          marks: 2,
          explanation: "$8a-3a=5a$; the constant remains 6.",
        },
        {
          type: "tf",
          prompt: "$4x$ and $4x^2$ are like terms.",
          answer: false,
          marks: 1,
          explanation: "Their variable powers differ.",
        },
        {
          type: "mc",
          prompt: "Expand $7(x-3)$.",
          options: ["7x − 3", "7x − 21", "7x + 21", "4x"],
          answer: 1,
          marks: 2,
          explanation: "Distribute 7 to both terms: 7x − 21.",
        },
        {
          type: "mc",
          prompt: "Expand $-4(2y-5)$.",
          options: ["−8y − 20", "−8y + 20", "8y − 20", "−6y + 1"],
          answer: 1,
          marks: 3,
          explanation: "$-4(2y)=-8y$ and $-4(-5)=+20$.",
        },
        {
          type: "mc",
          prompt: "Factorise $18x+12$ completely.",
          options: ["2(9x + 6)", "3(6x + 4)", "6(3x + 2)", "12(18x + 1)"],
          answer: 2,
          marks: 3,
          explanation: "The highest common factor is 6.",
        },
        {
          type: "matching",
          prompt: "Match each expression to its equivalent simplified form.",
          left: ["$2x+5x$", "$3(a+4)$", "$12y-8$ factorised", "$4m-7+2m+3$"],
          options: ["$7x$", "$3a+12$", "$4(3y-2)$", "$6m-4$"],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation: "Collect, expand or factorise using the appropriate rule.",
        },
        {
          type: "multi",
          prompt: "Select every expression equivalent to $6x+12$.",
          options: ["$6(x+2)$", "$3(2x+4)$", "$2(3x+6)$", "$6(x+12)$", "$3x+9x$"],
          answers: [0, 1, 2],
          marks: 3,
          explanation: "Expanding the first three expressions produces 6x + 12.",
        },
        {
          type: "tf",
          prompt: "Factorising $9x-6$ completely gives $3(3x-2)$.",
          answer: true,
          marks: 1,
          explanation: "3 is the HCF, and expanding returns 9x − 6.",
        },
        {
          type: "mc",
          prompt: "Simplify $4p-3q-7p+8q$.",
          options: ["11p + 11q", "−3p + 5q", "3p − 5q", "−11p + 5q"],
          answer: 1,
          marks: 3,
          explanation: "$4p-7p=-3p$ and $-3q+8q=5q$.",
        },
        {
          type: "mc",
          prompt: "Expand and simplify $5(x+2)-2x$.",
          options: ["3x + 2", "3x + 10", "7x + 10", "5x"],
          answer: 1,
          marks: 3,
          explanation: "$5x+10-2x=3x+10$.",
        },
        {
          type: "multi",
          prompt: "Which statements are always true?",
          options: [
            "Only like terms can be collected",
            "An outside factor multiplies every term in a bracket",
            "Factorising changes the value of an expression",
            "Expansion and factorisation are inverse processes",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "Correct simplification preserves value; factorising does not change it.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "simplifyingExpressionsExplorer",
          label: "Use the interactive simplification laboratory",
        },
        { key: "simplifyingPractice", label: "Answer every practice question" },
      ],
      requireQuizPass: true,
    },
  ],
};
