import type { LessonContent } from "@/lib/lesson-content-types";

export const fromArithmeticToAlgebra: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "introduction-to-algebraic-thinking",
  lessonSlug: "from-arithmetic-to-algebra",
  title: "From Arithmetic to Algebra",
  objectives: [
    "Explain how algebra generalises familiar arithmetic",
    "Use letters to represent unknown or changing numbers",
    "Identify variables, constants, coefficients, terms and operations",
    "Translate verbal descriptions into algebraic expressions",
    "Interpret algebraic notation such as 4x, x² and 3(a + 2)",
    "Substitute numerical values into expressions using the correct order of operations",
    "Recognise like and unlike terms",
    "Use expressions to model simple real-life situations",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Arithmetic asks questions about particular numbers, such as $7+5$ or $12\div3$. Algebra keeps the same operations but introduces letters so that one statement can describe many possible numbers. This lets us represent unknown values, changing values and general rules.",
        "In this lesson you will learn to read algebra as a precise language. You will translate words into expressions, substitute values, and identify the building blocks from which expressions are made.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Algebraic expression",
      body: "An algebraic expression is a mathematical phrase made from numbers, variables and operations. For example, $3x+5$ is an expression. It does not contain an equals sign, so it is not an equation.",
    },
    {
      kind: "theory",
      heading: "Why move from arithmetic to algebra?",
      paragraphs: [
        "A calculation such as $4\times6=24$ answers one particular question. The algebraic statement $4n$ describes four times any number $n$. When $n=6$ it gives 24; when $n=10$ it gives 40.",
        "Algebra is useful because the same rule can be reused. A taxi fare, for example, might be a fixed ₹8 fee plus ₹2 for every kilometre. If $d$ is the distance, the total fare can be represented by $8+2d$.",
      ],
      list: [
        "A letter can stand for a number that is not yet known.",
        "A letter can stand for a number that changes.",
        "A letter can describe every number that follows a rule.",
        "The ordinary rules of arithmetic still apply.",
      ],
    },
    {
      kind: "table",
      heading: "The language of expressions",
      headers: ["Word", "Meaning", "Example"],
      rows: [
        ["Variable", "A letter or symbol representing a number", "$x$ in $4x+7$"],
        ["Constant", "A number whose value is fixed", "$7$ in $4x+7$"],
        ["Coefficient", "A numerical factor multiplying a variable", "$4$ in $4x$"],
        ["Term", "A part separated by addition or subtraction signs", "$4x$ and $7$"],
        ["Expression", "A combination of terms and operations", "$4x+7$"],
        ["Equation", "A statement that two expressions are equal", "$4x+7=19$"],
      ],
      note: "A minus sign belongs to the term that follows it. In $5x-3$, the terms are $5x$ and $-3$.",
    },
    {
      kind: "theory",
      heading: "Reading algebraic notation",
      paragraphs: [
        "Algebra normally omits the multiplication sign between a number and a letter. Therefore $5x$ means $5\times x$, and $ab$ means $a\times b$. The number is written before the variable.",
        "Powers show repeated multiplication. The expression $x^2$ means $x\times x$, while $x^3$ means $x\times x\times x$. A power applies only to the base immediately before it unless brackets are used.",
      ],
    },
    {
      kind: "cards",
      heading: "Common notation",
      columns: 3,
      items: [
        { title: "Multiplication", value: "6x", text: "Means 6 × x, not the two-digit number 6x." },
        {
          title: "Division",
          value: "x/4",
          text: "Means x divided by 4 and may also be written as a fraction.",
        },
        { title: "Power", value: "x²", text: "Means x × x. It is not the same as 2x." },
        {
          title: "Grouping",
          value: "3(x + 2)",
          text: "The factor 3 multiplies the complete quantity in brackets.",
        },
        { title: "Implied coefficient", value: "x", text: "The coefficient is 1 because x = 1x." },
        {
          title: "Negative variable",
          value: "−y",
          text: "The coefficient is −1 because −y = −1y.",
        },
      ],
    },
    {
      kind: "example",
      prompt: "Identify the terms, variables, coefficients and constants in $7a-3b+12$.",
      steps: [
        "Terms are separated by addition or subtraction: $7a$, $-3b$ and $12$.",
        "The variables are $a$ and $b$.",
        "The coefficients are 7 and −3.",
        "The constant term is 12.",
      ],
      answer: "Terms: $7a,-3b,12$; variables: $a,b$; coefficients: $7,-3$; constant: $12$.",
    },
    {
      kind: "theory",
      heading: "Translating words into expressions",
      paragraphs: [
        "Translation means replacing mathematical words with symbols while preserving the order of operations. Start by identifying the unknown quantity, then follow the operations in the order described.",
        "Words such as ‘sum’, ‘difference’, ‘product’ and ‘quotient’ often signal a grouped quantity. For example, ‘three times the sum of $x$ and 4’ is $3(x+4)$, not $3x+4$.",
      ],
    },
    {
      kind: "table",
      heading: "Useful translation clues",
      headers: ["Language", "Operation", "Example"],
      rows: [
        ["sum, increased by, more than, total", "Addition", "5 more than x → $x+5$"],
        ["difference, decreased by, less than", "Subtraction", "7 less than n → $n-7$"],
        ["product, times, twice, of", "Multiplication", "twice y → $2y$"],
        ["quotient, divided by, per", "Division", "a divided by 6 → $a/6$"],
        ["square, squared", "Power of 2", "the square of t → $t^2$"],
        ["sum of … and …", "Grouped addition", "half the sum of p and 8 → $(p+8)/2$"],
      ],
      note: "The phrase ‘5 less than x’ reverses the spoken order: it means x − 5.",
    },
    {
      kind: "example",
      prompt: "Write an expression for ‘nine more than four times a number $n$’.",
      steps: ["Four times the number is $4n$.", "Nine more means add 9 after forming $4n$."],
      answer: "$4n+9$.",
    },
    {
      kind: "example",
      prompt: "Write an expression for ‘the difference between 20 and three times $x$’.",
      steps: [
        "Three times $x$ is $3x$.",
        "The difference between 20 and $3x$ keeps that order: $20-3x$.",
      ],
      answer: "$20-3x$.",
    },
    {
      kind: "example",
      prompt: "Write an expression for ‘five times the sum of $m$ and 2’.",
      steps: [
        "The sum of $m$ and 2 is $m+2$.",
        "The complete sum is multiplied by 5, so use brackets.",
      ],
      answer: "$5(m+2)$.",
    },
    {
      kind: "algebraExpressionExplorer",
      heading: "Interactive algebra expression laboratory",
    },
    {
      kind: "theory",
      heading: "Substitution: replacing a variable with a value",
      paragraphs: [
        "To evaluate an expression, substitute the given number for each occurrence of the variable. Put negative substituted values in brackets so that their signs and powers are clear.",
        "After substitution, use the normal order of operations: brackets and powers first, then multiplication and division, then addition and subtraction.",
      ],
      list: [
        "Write the original expression.",
        "Replace each variable with its given value, using brackets when helpful.",
        "Calculate powers before multiplication.",
        "Complete addition and subtraction last.",
      ],
    },
    {
      kind: "example",
      prompt: "Evaluate $3x+7$ when $x=4$.",
      steps: ["Substitute 4 for $x$: $3(4)+7$.", "Multiply: $12+7$.", "Add: $19$."],
      answer: "$3x+7=19$ when $x=4$.",
    },
    {
      kind: "example",
      prompt: "Evaluate $2a-b$ when $a=-3$ and $b=5$.",
      steps: ["Substitute using brackets: $2(-3)-(5)$.", "Multiply: $-6-5$.", "Subtract: $-11$."],
      answer: "$-11$.",
    },
    {
      kind: "example",
      prompt: "Evaluate $x^2+2x$ when $x=-4$.",
      steps: [
        "Substitute: $(-4)^2+2(-4)$.",
        "Calculate the power: $16+2(-4)$.",
        "Multiply: $16-8$.",
        "Subtract: $8$.",
      ],
      answer: "$8$.",
    },
    {
      kind: "example",
      prompt: "The perimeter of a rectangle is $2l+2w$. Find it when $l=8$ cm and $w=5$ cm.",
      steps: ["Substitute: $2(8)+2(5)$.", "Multiply: $16+10$.", "Add: $26$."],
      answer: "The perimeter is 26 cm.",
    },
    {
      kind: "theory",
      heading: "Like terms and unlike terms",
      paragraphs: [
        "Like terms have exactly the same variable part, including the same powers. Their coefficients may be different. For example, $5x$, $-2x$ and $x$ are like terms.",
        "Terms such as $3x$, $3y$ and $3x^2$ are unlike because their variable parts differ. Constants are like terms with other constants.",
      ],
    },
    {
      kind: "comparison",
      heading: "Checking whether terms are alike",
      left: {
        title: "Like terms",
        items: ["$4x$ and $-7x$", "$3a^2$ and $8a^2$", "$5xy$ and $-xy$", "$12$ and $-3$"],
      },
      right: {
        title: "Unlike terms",
        items: ["$4x$ and $4y$", "$a$ and $a^2$", "$xy$ and $x$", "$6$ and $6n$"],
      },
    },
    {
      kind: "example",
      prompt: "Which terms in $4x+7y-2x+9$ are like terms?",
      steps: [
        "Compare the variable parts, not just the coefficients.",
        "$4x$ and $-2x$ both have variable part $x$.",
        "$7y$ has variable part $y$ and 9 is a constant.",
      ],
      answer: "$4x$ and $-2x$ are like terms. The other terms are unlike them.",
    },
    {
      kind: "realWorld",
      heading: "Where algebraic expressions are used",
      items: [
        {
          area: "Shopping",
          text: "The price of n identical items costing ₹12 each is $12n$.",
        },
        { area: "Travel", text: "Distance at speed v for time t is represented by $vt$." },
        {
          area: "Construction",
          text: "The area of a rectangle with changing length and width is $lw$.",
        },
        {
          area: "Technology",
          text: "Computer programs use variables to store values that change while a program runs.",
        },
        {
          area: "Finance",
          text: "A fixed fee plus a charge per use can be modelled by an expression such as $15+3n$.",
        },
        {
          area: "Science",
          text: "Formulas such as $F=ma$ express general relationships between quantities.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        { wrong: "Writing 4 + x as 4x.", right: "$4+x$ is addition; $4x$ means multiplication." },
        {
          wrong: "Translating ‘5 less than n’ as $5-n$.",
          right: "Begin with n and subtract 5: $n-5$.",
        },
        { wrong: "Treating $x^2$ as $2x$.", right: "$x^2=x\times x$, while $2x=x+x$." },
        {
          wrong: "Substituting $x=-3$ into $x^2$ as $-3^2=-9$.",
          right: "Use brackets: $(-3)^2=9$.",
        },
        {
          wrong: "Calling $3x+4=10$ an expression.",
          right: "It is an equation because it contains an equals sign.",
        },
        {
          wrong: "Calling $2x$ and $2x^2$ like terms.",
          right: "Their powers differ, so their variable parts are not identical.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: algebra language and substitution",
      stepKey: "algebraPractice",
      questions: [
        {
          prompt: "Which part of $6x+11$ is the coefficient?",
          options: ["x", "6", "11", "6x + 11"],
          answer: 1,
          explanation: "The coefficient is the numerical factor multiplying x, so it is 6.",
        },
        {
          prompt: "Which expression means ‘7 more than n’?",
          options: ["7n", "7 − n", "n + 7", "n/7"],
          answer: 2,
          explanation: "Start with n and add 7.",
        },
        {
          prompt: "Which expression means ‘four times the difference between x and 3’?",
          options: ["4x − 3", "4(x − 3)", "x − 12", "4(3 − x)"],
          answer: 1,
          explanation: "The difference x − 3 must be formed first, so it is grouped.",
        },
        {
          prompt: "Evaluate $5a-2$ when $a=3$.",
          options: ["7", "13", "15", "17"],
          answer: 1,
          explanation: "$5(3)-2=15-2=13$.",
        },
        {
          prompt: "Evaluate $b^2$ when $b=-5$.",
          options: ["−25", "−10", "10", "25"],
          answer: 3,
          explanation: "$(-5)^2=(-5)(-5)=25$.",
        },
        {
          prompt: "Which pair consists of like terms?",
          options: ["3x and 3y", "4a and −2a", "x and x²", "5 and 5m"],
          answer: 1,
          explanation: "Both terms have exactly the variable part a.",
        },
        {
          prompt: "How many terms are in $4x-3y+8$?",
          options: ["1", "2", "3", "4"],
          answer: 2,
          explanation: "The terms are 4x, −3y and 8.",
        },
        {
          prompt:
            "A phone plan costs ₹20 plus ₹3 per gigabyte g. Which expression gives the total?",
          options: ["23g", "20g + 3", "20 + 3g", "3(20 + g)"],
          answer: 2,
          explanation: "20 is the fixed charge and 3g is the usage charge.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Algebra extends arithmetic by using variables to represent unknown or changing numbers.",
        "An expression contains terms and operations but no equals sign.",
        "A coefficient multiplies a variable; a constant has no variable.",
        "Translate verbal phrases carefully, paying attention to order and grouping.",
        "Substitute values using brackets and then follow the order of operations.",
        "Like terms have identical variable parts, including identical powers.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: From Arithmetic to Algebra",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which is an algebraic expression rather than an equation?",
          options: ["3x + 5", "3x + 5 = 20", "x = 4", "7 = 7"],
          answer: 0,
          marks: 2,
          explanation: "An expression does not contain an equals sign.",
        },
        {
          type: "mc",
          prompt: "What is the coefficient of y in $-8y+3$?",
          options: ["8", "−8", "3", "y"],
          answer: 1,
          marks: 2,
          explanation: "The coefficient includes its sign, so it is −8.",
        },
        {
          type: "tf",
          prompt: "$x^2$ and $2x$ mean the same thing.",
          answer: false,
          marks: 1,
          explanation: "$x^2=x\times x$, whereas $2x=x+x$.",
        },
        {
          type: "mc",
          prompt: "Translate ‘6 less than twice n’.",
          options: ["6 − 2n", "2(n − 6)", "2n − 6", "6n − 2"],
          answer: 2,
          marks: 2,
          explanation: "Twice n is 2n; 6 less means subtract 6.",
        },
        {
          type: "mc",
          prompt: "Evaluate $2x^2-3$ when $x=-2$.",
          options: ["−11", "1", "5", "11"],
          answer: 2,
          marks: 3,
          explanation: "$2(-2)^2-3=2(4)-3=5$.",
        },
        {
          type: "matching",
          prompt: "Match each algebra word to its example.",
          left: ["Variable", "Coefficient", "Constant", "Expression"],
          options: ["x in 5x + 2", "5 in 5x", "2 in 5x + 2", "5x + 2"],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation: "Each example illustrates the standard vocabulary of an expression.",
        },
        {
          type: "multi",
          prompt: "Select every term that is like $4a^2$.",
          options: ["−7a²", "a²", "4a", "3b²", "12a²"],
          answers: [0, 1, 4],
          marks: 3,
          explanation: "Like terms must have exactly the variable part a².",
        },
        {
          type: "tf",
          prompt: "The expression for ‘half the sum of x and 10’ is $(x+10)/2$.",
          answer: true,
          marks: 1,
          explanation: "The sum is grouped before division by 2.",
        },
        {
          type: "mc",
          prompt: "A rectangle has length l and width w. Which expression is its perimeter?",
          options: ["lw", "2l + 2w", "l + w", "2lw"],
          answer: 1,
          marks: 2,
          explanation: "The perimeter is l + w + l + w = 2l + 2w.",
        },
        {
          type: "mc",
          prompt: "Evaluate $3a-b$ when $a=4$ and $b=-2$.",
          options: ["10", "12", "14", "16"],
          answer: 2,
          marks: 2,
          explanation: "$3(4)-(-2)=12+2=14$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "algebraExpressionExplorer", label: "Use the interactive expression laboratory" },
        { key: "algebraPractice", label: "Answer every practice question" },
      ],
      requireQuizPass: true,
    },
  ],
};
