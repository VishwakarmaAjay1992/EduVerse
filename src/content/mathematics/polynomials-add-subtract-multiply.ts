import type { LessonContent } from "@/lib/lesson-content-types";

export const polynomialsAddSubtractMultiply: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "polynomials-and-factoring",
  lessonSlug: "polynomials-add-subtract-multiply",
  title: "Polynomials: Add, Subtract, Multiply",
  objectives: [
    "Identify the degree, terms and coefficients of a polynomial.",
    "Classify polynomials as monomials, binomials or trinomials.",
    "Add and subtract polynomials by combining like terms.",
    "Multiply a polynomial by a monomial using the distributive property.",
    "Expand the product of two binomials using the FOIL method.",
    "Recognise and apply the special product patterns for perfect squares and differences of squares.",
    "Multiply larger polynomials by extending the distributive property.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A polynomial is an expression built from variables and constants using only addition, subtraction and multiplication by whole-number powers — no division by a variable, no roots of a variable, no negative exponents. Expressions like $3x^2 - 5x + 7$ and $x^3 + 2$ are polynomials; expressions like $1/x$ or $\\sqrt{x}$ are not.",
        "This lesson builds the arithmetic of polynomials: combining like terms to add or subtract them, and expanding brackets to multiply them, including two special product patterns worth memorising because they appear constantly in later factoring work.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes comfort with the laws of indices (especially $x^m \\times x^n = x^{m+n}$), collecting like terms, and distributing a single term across a bracket, e.g. $3(x+2) = 3x+6$.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Polynomial, degree, term, coefficient",
      body: "A polynomial is a sum of terms, each of which is a constant times a non-negative whole-number power of the variable. The degree of a term is that power; the degree of the whole polynomial is its highest term's degree. In $4x^3 - 2x^2 + x - 5$, the terms are $4x^3$, $-2x^2$, $x$ and $-5$; the polynomial's degree is 3; and the coefficients are 4, $-2$, 1 and $-5$.",
    },
    {
      kind: "table",
      heading: "Naming polynomials by their number of terms",
      headers: ["Number of terms", "Name", "Example"],
      rows: [
        ["1", "Monomial", "$5x^2$"],
        ["2", "Binomial", "$x + 7$"],
        ["3", "Trinomial", "$x^2 + 3x - 4$"],
        ["4 or more", "Polynomial (general term)", "$x^3 - 2x^2 + x - 5$"],
      ],
    },
    {
      kind: "theory",
      heading: "Adding and subtracting polynomials",
      paragraphs: [
        "Adding or subtracting polynomials means combining like terms — terms with exactly the same variable raised to exactly the same power. Unlike terms, such as $3x^2$ and $3x$, can never be combined, no matter how similar their coefficients look.",
        "When subtracting one polynomial from another, distribute the negative sign across every term of the polynomial being subtracted before combining like terms — this is the most common place mistakes happen.",
      ],
    },
    {
      kind: "example",
      prompt: "Simplify $(3x^2 + 4x - 5) + (x^2 - 6x + 2)$.",
      steps: [
        "Group like terms: $(3x^2 + x^2) + (4x - 6x) + (-5 + 2)$.",
        "Combine each group: $4x^2 - 2x - 3$.",
      ],
      answer: "$4x^2 - 2x - 3$",
    },
    {
      kind: "example",
      prompt: "Simplify $(5x^2 - 3x + 8) - (2x^2 - 7x + 1)$.",
      steps: [
        "Distribute the subtraction sign across the second polynomial: $5x^2 - 3x + 8 - 2x^2 + 7x - 1$.",
        "Group like terms: $(5x^2 - 2x^2) + (-3x + 7x) + (8 - 1)$.",
        "Combine each group: $3x^2 + 4x + 7$.",
      ],
      answer: "$3x^2 + 4x + 7$",
    },
    {
      kind: "theory",
      heading: "Multiplying a polynomial by a monomial",
      paragraphs: [
        "To multiply a polynomial by a single term, distribute that term across every term inside the polynomial, multiplying coefficients and adding exponents of matching variables.",
      ],
    },
    {
      kind: "example",
      prompt: "Expand $4x(2x^2 - 3x + 5)$.",
      steps: [
        "Distribute $4x$ across each term: $4x \\cdot 2x^2 - 4x \\cdot 3x + 4x \\cdot 5$.",
        "Multiply each pair: $8x^3 - 12x^2 + 20x$.",
      ],
      answer: "$8x^3 - 12x^2 + 20x$",
    },
    {
      kind: "theory",
      heading: "Multiplying two binomials: the FOIL method",
      paragraphs: [
        "FOIL stands for First, Outer, Inner, Last — the four pairwise products needed to expand two binomials multiplied together. Multiply the First terms of each bracket, then the Outer pair, then the Inner pair, then the Last terms, and finally combine any like terms among the four results.",
      ],
    },
    {
      kind: "formula",
      latex: "(a + b)(c + d) = ac + ad + bc + bd",
      caption: "First (ac), Outer (ad), Inner (bc), Last (bd) — then simplify.",
    },
    {
      kind: "polynomialMultiplyExplorer",
      heading: "Interactive: area model and FOIL step-by-step",
    },
    {
      kind: "example",
      prompt: "Expand $(x + 3)(x + 5)$.",
      steps: [
        "First: $x \\times x = x^2$.",
        "Outer: $x \\times 5 = 5x$.",
        "Inner: $3 \\times x = 3x$.",
        "Last: $3 \\times 5 = 15$.",
        "Combine like terms: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$.",
      ],
      answer: "$x^2 + 8x + 15$",
    },
    {
      kind: "example",
      prompt: "Expand $(2x - 1)(3x + 4)$.",
      steps: [
        "First: $2x \\times 3x = 6x^2$.",
        "Outer: $2x \\times 4 = 8x$.",
        "Inner: $-1 \\times 3x = -3x$.",
        "Last: $-1 \\times 4 = -4$.",
        "Combine like terms: $6x^2 + 8x - 3x - 4 = 6x^2 + 5x - 4$.",
      ],
      answer: "$6x^2 + 5x - 4$",
    },
    {
      kind: "theory",
      heading: "Special products worth memorising",
      paragraphs: [
        "Two binomial products appear so often that it pays to recognise them instantly rather than FOIL them out each time: squaring a binomial, and multiplying a sum by a difference of the same two terms.",
      ],
    },
    {
      kind: "formula",
      latex:
        "(a + b)^2 = a^2 + 2ab + b^2 \\qquad (a - b)^2 = a^2 - 2ab + b^2 \\qquad (a + b)(a - b) = a^2 - b^2",
      caption:
        "Perfect square and difference-of-squares patterns. Note the middle term vanishes in the third pattern.",
    },
    {
      kind: "example",
      prompt: "Expand $(x + 4)^2$ using the perfect-square pattern.",
      steps: [
        "Match to $(a+b)^2 = a^2 + 2ab + b^2$ with $a = x$, $b = 4$.",
        "Substitute: $x^2 + 2(x)(4) + 4^2$.",
        "Simplify: $x^2 + 8x + 16$.",
      ],
      answer: "$x^2 + 8x + 16$",
    },
    {
      kind: "example",
      prompt: "Expand $(x + 6)(x - 6)$ using the difference-of-squares pattern.",
      steps: [
        "Match to $(a+b)(a-b) = a^2 - b^2$ with $a = x$, $b = 6$.",
        "Substitute: $x^2 - 6^2$.",
        "Simplify: $x^2 - 36$. Notice the middle terms ($6x$ and $-6x$) cancel exactly.",
      ],
      answer: "$x^2 - 36$",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Recognise the pattern before expanding",
      body: "If you see the same two terms with matching signs squared, or the same two terms with opposite signs multiplied, use the special product pattern directly — it's faster and less error-prone than FOIL-ing every time.",
    },
    {
      kind: "theory",
      heading: "Multiplying larger polynomials",
      paragraphs: [
        "When one bracket has more than two terms, extend the same idea: multiply every term of the first bracket by every term of the second, then combine like terms. There is no upper limit on the size of either polynomial — the distributive property scales up directly.",
      ],
    },
    {
      kind: "example",
      prompt: "Expand $(x + 2)(x^2 - 3x + 4)$.",
      steps: [
        "Multiply $x$ by every term: $x^3 - 3x^2 + 4x$.",
        "Multiply $2$ by every term: $2x^2 - 6x + 8$.",
        "Add the two results: $x^3 - 3x^2 + 4x + 2x^2 - 6x + 8$.",
        "Combine like terms: $x^3 - x^2 - 2x + 8$.",
      ],
      answer: "$x^3 - x^2 - 2x + 8$",
    },
    {
      kind: "realWorld",
      heading: "Where polynomial arithmetic appears",
      items: [
        {
          area: "Area and volume",
          text: "Expressing the area of a rectangle with algebraic side lengths, or the volume of a box, as a polynomial.",
        },
        {
          area: "Physics",
          text: "Combining polynomial expressions for position, velocity or force in terms of time or distance.",
        },
        {
          area: "Finance",
          text: "Modelling total cost or revenue as a polynomial in the number of units produced or sold.",
        },
        {
          area: "Computer graphics",
          text: "Polynomial curves are combined and manipulated to describe smooth shapes.",
        },
        {
          area: "Engineering",
          text: "Combining stress or load polynomial models when analysing structures.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "What is the degree of $3x^2$?", back: "2." },
        { front: "What does a binomial have?", back: "Exactly two terms." },
        { front: "What does FOIL stand for?", back: "First, Outer, Inner, Last." },
        { front: "$(a+b)^2 = \\ ?$", back: "$a^2 + 2ab + b^2$." },
        { front: "$(a+b)(a-b) = \\ ?$", back: "$a^2 - b^2$ — the middle terms cancel." },
        {
          front: "What must you do before combining like terms when subtracting polynomials?",
          back: "Distribute the negative sign across every term of the polynomial being subtracted.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: adding, subtracting and multiplying polynomials",
      stepKey: "polynomialArithmeticPractice",
      questions: [
        {
          prompt: "What is the degree of $7x^4 - 3x^2 + 1$?",
          options: ["1", "2", "3", "4"],
          answer: 3,
          explanation: "The highest power of $x$ present is 4.",
        },
        {
          prompt: "Simplify $(2x^2 + 5x - 3) + (x^2 - 2x + 6)$.",
          options: ["$3x^2 + 3x + 3$", "$3x^2 + 7x + 3$", "$2x^2 + 3x + 3$", "$3x^2 + 3x - 3$"],
          answer: 0,
          explanation: "Combine like terms: $(2x^2+x^2)+(5x-2x)+(-3+6) = 3x^2+3x+3$.",
        },
        {
          prompt: "Simplify $(4x^2 - 3x + 2) - (x^2 + 5x - 7)$.",
          options: ["$3x^2 - 8x + 9$", "$3x^2 + 2x - 5$", "$5x^2 - 8x - 5$", "$3x^2 - 8x - 5$"],
          answer: 0,
          explanation: "Distribute the minus: $4x^2-3x+2-x^2-5x+7$. Combine: $3x^2-8x+9$.",
        },
        {
          prompt: "Expand $3x(2x^2 - 5x + 1)$.",
          options: [
            "$6x^3 - 15x^2 + 3x$",
            "$6x^2 - 15x + 3$",
            "$5x^3 - 8x^2 + 4x$",
            "$6x^3 - 5x^2 + 3x$",
          ],
          answer: 0,
          explanation:
            "Distribute $3x$: $3x \\cdot 2x^2 - 3x \\cdot 5x + 3x \\cdot 1 = 6x^3 - 15x^2 + 3x$.",
        },
        {
          prompt: "Expand $(x + 2)(x + 9)$.",
          options: ["$x^2 + 11x + 18$", "$x^2 + 9x + 18$", "$x^2 + 11x + 11$", "$x^2 + 18x + 11$"],
          answer: 0,
          explanation: "FOIL: $x^2 + 9x + 2x + 18 = x^2 + 11x + 18$.",
        },
        {
          prompt: "Expand $(x - 3)(x + 8)$.",
          options: ["$x^2 + 5x - 24$", "$x^2 - 5x - 24$", "$x^2 + 5x + 24$", "$x^2 - 11x - 24$"],
          answer: 0,
          explanation: "FOIL: $x^2 + 8x - 3x - 24 = x^2 + 5x - 24$.",
        },
        {
          prompt: "Expand $(x + 7)^2$ using the perfect-square pattern.",
          options: ["$x^2 + 14x + 49$", "$x^2 + 7x + 49$", "$x^2 + 49$", "$x^2 + 14x + 14$"],
          answer: 0,
          explanation: "$(a+b)^2 = a^2+2ab+b^2$ with $a=x,b=7$: $x^2 + 14x + 49$.",
        },
        {
          prompt: "Expand $(x + 10)(x - 10)$ using the difference-of-squares pattern.",
          options: ["$x^2 - 100$", "$x^2 + 100$", "$x^2 - 20x - 100$", "$x^2 - 20x + 100$"],
          answer: 0,
          explanation: "$(a+b)(a-b)=a^2-b^2$ with $a=x,b=10$: $x^2 - 100$.",
        },
        {
          prompt: "Expand $(2x + 3)(x - 5)$.",
          options: [
            "$2x^2 - 7x - 15$",
            "$2x^2 + 7x - 15$",
            "$2x^2 - 13x - 15$",
            "$2x^2 - 7x + 15$",
          ],
          answer: 0,
          explanation: "FOIL: $2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Combining unlike terms, e.g. treating $3x^2 + 2x$ as $5x^3$ or $5x^2$.",
          right:
            "Only terms with identical variables raised to identical powers can combine: $3x^2$ and $2x$ stay separate.",
        },
        {
          wrong:
            "Forgetting to distribute the negative sign across every term when subtracting polynomials.",
          right:
            "Subtracting $(2x^2+5x-7)$ means changing the sign of every term inside: $-2x^2-5x+7$.",
        },
        {
          wrong:
            "Multiplying only two of the four FOIL products, e.g. skipping the Outer or Inner term.",
          right:
            "All four products — First, Outer, Inner, Last — are required before combining like terms.",
        },
        {
          wrong:
            "Applying the perfect-square pattern as $(a+b)^2 = a^2+b^2$, dropping the middle term.",
          right: "The correct pattern includes a middle term: $(a+b)^2 = a^2+2ab+b^2$.",
        },
        {
          wrong: "Adding exponents when adding like terms, e.g. $x^2+x^2=x^4$.",
          right: "Adding like terms adds coefficients, not exponents: $x^2+x^2=2x^2$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A polynomial's degree is its highest term's exponent; terms are named monomial, binomial or trinomial by count.",
        "Add or subtract polynomials by combining like terms, distributing any negative sign first.",
        "Multiply a polynomial by a monomial by distributing across every term.",
        "FOIL (First, Outer, Inner, Last) expands the product of two binomials.",
        "Memorise the special products $(a+b)^2=a^2+2ab+b^2$, $(a-b)^2=a^2-2ab+b^2$ and $(a+b)(a-b)=a^2-b^2$.",
        "Larger polynomial products extend the same distributive idea across every term pair.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: polynomial arithmetic",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "What is the degree of the polynomial $5x^3 - 2x + 9$?",
          options: ["9", "3", "2", "5"],
          answer: 1,
          marks: 1,
          explanation: "The highest exponent present is 3.",
        },
        {
          type: "mc",
          prompt: "Simplify $(3x^2 - x + 4) + (2x^2 + 5x - 1)$.",
          options: ["$5x^2 + 4x + 3$", "$5x^2 - 4x + 3$", "$x^2 + 4x + 3$", "$5x^2 + 4x - 3$"],
          answer: 0,
          marks: 1,
          explanation: "Combine like terms: $(3x^2+2x^2)+(-x+5x)+(4-1)=5x^2+4x+3$.",
        },
        {
          type: "tf",
          prompt: "$(a-b)^2 = a^2 - b^2$.",
          answer: false,
          marks: 1,
          explanation: "The correct expansion keeps a middle term: $(a-b)^2 = a^2 - 2ab + b^2$.",
        },
        {
          type: "mc",
          prompt: "Expand $(x - 4)(x - 9)$.",
          options: ["$x^2 - 13x + 36$", "$x^2 + 13x + 36$", "$x^2 - 5x + 36$", "$x^2 - 13x - 36$"],
          answer: 0,
          marks: 2,
          explanation: "FOIL: $x^2 - 9x - 4x + 36 = x^2 - 13x + 36$.",
        },
        {
          type: "mc",
          prompt: "Expand $(3x - 2)^2$.",
          options: ["$9x^2 - 12x + 4$", "$9x^2 - 4$", "$9x^2 + 12x + 4$", "$3x^2 - 12x + 4$"],
          answer: 0,
          marks: 2,
          explanation: "$(a-b)^2=a^2-2ab+b^2$ with $a=3x,b=2$: $9x^2 - 12x + 4$.",
        },
        {
          type: "matching",
          prompt: "Match each product to its expanded form.",
          left: ["$(x+5)(x-5)$", "$(x+5)^2$", "$(x-5)^2$", "$(x+1)(x+5)$"],
          options: ["$x^2+10x+25$", "$x^2-10x+25$", "$x^2-25$", "$x^2+6x+5$"],
          answer: [2, 0, 1, 3],
          marks: 4,
          explanation: "Each expansion follows directly from the special-product patterns or FOIL.",
        },
        {
          type: "mc",
          prompt: "Expand $2x(x^2 + 3x - 4)$.",
          options: [
            "$2x^3 + 6x^2 - 8x$",
            "$2x^3 + 3x^2 - 4x$",
            "$2x^2 + 6x - 8$",
            "$2x^3 + 6x - 8x$",
          ],
          answer: 0,
          marks: 2,
          explanation: "Distribute $2x$: $2x^3 + 6x^2 - 8x$.",
        },
        {
          type: "multi",
          prompt: "Select every polynomial that is a trinomial.",
          options: ["$x^2 + 3x - 1$", "$5x^3$", "$x^2 - 9$", "$2x^2 + x + 7$"],
          answers: [0, 3],
          marks: 3,
          explanation:
            "A trinomial has exactly three terms; $5x^3$ is a monomial and $x^2-9$ is a binomial.",
        },
        {
          type: "mc",
          prompt: "Expand $(x + 3)(x^2 - 2x + 5)$.",
          options: [
            "$x^3 + x^2 - x + 15$",
            "$x^3 - x^2 - x + 15$",
            "$x^3 + x^2 + x + 15$",
            "$x^3 - 2x^2 + 5x$",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "$x(x^2-2x+5) + 3(x^2-2x+5) = x^3-2x^2+5x + 3x^2-6x+15 = x^3 + x^2 - x + 15$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "polynomialMultiplyExplorer",
          label: "Use the polynomial multiplication laboratory",
        },
        { key: "polynomialArithmeticPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
