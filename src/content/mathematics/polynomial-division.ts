import type { LessonContent } from "@/lib/lesson-content-types";

export const polynomialDivision: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "polynomials-and-factoring",
  lessonSlug: "polynomial-division",
  title: "Polynomial Division",
  objectives: [
    "Divide a polynomial by a monomial.",
    "Divide a polynomial by a binomial using long division.",
    "Divide a polynomial by a linear binomial using synthetic division.",
    "State and apply the remainder theorem.",
    "State and apply the factor theorem to test whether a binomial is a factor.",
    "Interpret the quotient and remainder of a polynomial division correctly.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Just as whole numbers can be divided with a quotient and a remainder, polynomials can too. Dividing $x^3 - 4x^2 + 5x - 2$ by $x - 1$ produces a quotient polynomial and possibly a remainder, exactly like dividing 47 by 5 gives a quotient of 9 and a remainder of 2.",
        "This lesson develops two methods for dividing by a linear expression — long division, which works generally, and synthetic division, a faster shortcut — and introduces the remainder and factor theorems, two powerful shortcuts that avoid full division altogether in many situations.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds on Polynomials: Add, Subtract, Multiply — you should be comfortable expanding brackets and combining like terms, since polynomial long division repeatedly multiplies and subtracts polynomial expressions.",
      ],
    },
    {
      kind: "theory",
      heading: "Dividing a polynomial by a monomial",
      paragraphs: [
        "The simplest case divides every term of the polynomial by the monomial separately, exactly like distributing a multiplication in reverse.",
      ],
    },
    {
      kind: "example",
      prompt: "Divide $\\dfrac{12x^3 - 8x^2 + 4x}{4x}$.",
      steps: [
        "Divide each term by $4x$ separately: $\\dfrac{12x^3}{4x} - \\dfrac{8x^2}{4x} + \\dfrac{4x}{4x}$.",
        "Simplify each: $3x^2 - 2x + 1$.",
      ],
      answer: "$3x^2 - 2x + 1$",
    },
    {
      kind: "theory",
      heading: "Long division of polynomials",
      paragraphs: [
        "Polynomial long division mirrors the long division you already know for numbers: at each stage, divide the leading term of what remains by the leading term of the divisor, multiply that result by the whole divisor, subtract, and bring down the next term. Repeat until the remaining degree is smaller than the divisor's degree.",
      ],
    },
    {
      kind: "example",
      prompt: "Divide $x^2 + 5x + 6$ by $x + 2$ using long division.",
      steps: [
        "Divide the leading terms: $x^2 \\div x = x$. This is the first term of the quotient.",
        "Multiply the divisor by $x$: $x(x + 2) = x^2 + 2x$.",
        "Subtract from the dividend: $(x^2 + 5x + 6) - (x^2 + 2x) = 3x + 6$.",
        "Divide the new leading term: $3x \\div x = 3$. This is the next quotient term.",
        "Multiply the divisor by 3: $3(x + 2) = 3x + 6$.",
        "Subtract: $(3x + 6) - (3x + 6) = 0$.",
      ],
      answer: "Quotient $x + 3$, remainder 0 — so $x^2+5x+6 = (x+2)(x+3)$ exactly.",
    },
    {
      kind: "example",
      prompt: "Divide $2x^2 + 3x - 2$ by $x + 2$ using long division.",
      steps: [
        "Divide leading terms: $2x^2 \\div x = 2x$.",
        "Multiply: $2x(x + 2) = 2x^2 + 4x$. Subtract: $(2x^2+3x-2) - (2x^2+4x) = -x - 2$.",
        "Divide leading terms: $-x \\div x = -1$.",
        "Multiply: $-1(x+2) = -x-2$. Subtract: $(-x-2)-(-x-2) = 0$.",
      ],
      answer: "Quotient $2x - 1$, remainder 0.",
    },
    {
      kind: "theory",
      heading: "Synthetic division",
      paragraphs: [
        "Synthetic division is a streamlined shortcut for dividing by a linear binomial of the form $x - r$. It uses only the coefficients of the dividend, arranged in a compact table, and avoids writing out the variable at every step.",
        "Write the root $r$ (from $x - r$) on the left and the dividend's coefficients along the top, including zeros for any missing powers. Bring down the first coefficient, then repeatedly multiply by $r$ and add to the next coefficient. The final numbers are the quotient's coefficients, with the very last one the remainder.",
      ],
    },
    {
      kind: "polynomialDivisionExplorer",
      heading: "Interactive: synthetic division table and remainder theorem check",
    },
    {
      kind: "example",
      prompt: "Use synthetic division to divide $x^3 - 4x^2 + 5x - 2$ by $x - 1$.",
      steps: [
        "Root is $r = 1$ (from $x - 1$). Coefficients: 1, $-4$, 5, $-2$.",
        "Bring down the first coefficient: 1.",
        "Multiply by 1: $1 \\times 1 = 1$. Add to $-4$: $-4 + 1 = -3$.",
        "Multiply by 1: $-3 \\times 1 = -3$. Add to 5: $5 + (-3) = 2$.",
        "Multiply by 1: $2 \\times 1 = 2$. Add to $-2$: $-2 + 2 = 0$.",
      ],
      answer: "Coefficients 1, $-3$, 2, remainder 0 — quotient $x^2 - 3x + 2$, remainder 0.",
    },
    {
      kind: "theory",
      heading: "The remainder theorem",
      paragraphs: [
        "The remainder theorem states that dividing a polynomial $p(x)$ by $x - r$ leaves a remainder equal to $p(r)$ — the value of the polynomial evaluated directly at $x = r$. This means you can find a remainder without performing any division at all.",
      ],
    },
    {
      kind: "formula",
      latex: "\\text{Remainder of } p(x) \\div (x - r) = p(r)",
      caption:
        "Substituting r into the polynomial gives the same value as the remainder from division.",
    },
    {
      kind: "example",
      prompt:
        "Use the remainder theorem to find the remainder when $p(x) = x^3 - 4x^2 + 5x - 2$ is divided by $x - 1$, without performing division.",
      steps: ["Evaluate $p(1) = 1^3 - 4(1)^2 + 5(1) - 2$.", "Simplify: $1 - 4 + 5 - 2 = 0$."],
      answer: "The remainder is 0, matching the synthetic division result above.",
    },
    {
      kind: "theory",
      heading: "The factor theorem",
      paragraphs: [
        "The factor theorem is a direct consequence of the remainder theorem: if $p(r) = 0$, then $(x - r)$ is a factor of $p(x)$, and dividing by it gives an exact quotient with no remainder. This makes it easy to test candidate factors of a polynomial before committing to a full division.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Remainder zero means exact factor",
      body: "If $p(r) = 0$, then $(x - r)$ divides $p(x)$ exactly (remainder 0), and $(x - r)$ is a factor of $p(x)$. This single check can save a lot of unnecessary long division.",
    },
    {
      kind: "example",
      prompt: "Is $(x - 2)$ a factor of $p(x) = x^3 + 2x^2 - 5x - 6$?",
      steps: [
        "By the factor theorem, test $p(2)$.",
        "$p(2) = 2^3 + 2(2)^2 - 5(2) - 6 = 8 + 8 - 10 - 6 = 0$.",
      ],
      answer: "Yes — since $p(2) = 0$, $(x - 2)$ is a factor of $p(x)$.",
    },
    {
      kind: "realWorld",
      heading: "Where polynomial division appears",
      items: [
        {
          area: "Engineering",
          text: "Simplifying transfer functions and system models expressed as polynomial ratios.",
        },
        {
          area: "Root-finding",
          text: "Testing candidate roots and factoring down a polynomial to solve higher-degree equations.",
        },
        {
          area: "Curve fitting",
          text: "Simplifying and analysing polynomial models used to approximate data.",
        },
        {
          area: "Computer science",
          text: "Polynomial and modular arithmetic in coding theory and cryptography.",
        },
        {
          area: "Physics",
          text: "Simplifying expressions for motion or energy that involve polynomial ratios.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "How do you divide a polynomial by a monomial?",
          back: "Divide each term of the polynomial by the monomial separately.",
        },
        {
          front: "What does synthetic division require of the divisor?",
          back: "It must be linear, in the form $x - r$.",
        },
        { front: "Remainder theorem: remainder of $p(x) \\div (x-r) = \\ ?$", back: "$p(r)$." },
        {
          front: "Factor theorem: if $p(r) = 0$, then...",
          back: "$(x - r)$ is a factor of $p(x)$.",
        },
        {
          front: "In long division, what do you do after subtracting?",
          back: "Bring down the next term and repeat the process.",
        },
        {
          front: "What does a remainder of 0 tell you?",
          back: "The divisor divides the dividend exactly, with no leftover.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: polynomial division",
      stepKey: "polynomialDivisionPractice",
      questions: [
        {
          prompt: "Divide $\\dfrac{15x^3 - 10x^2 + 5x}{5x}$.",
          options: ["$3x^2 - 2x + 1$", "$3x^2 - 2x$", "$3x^3 - 2x^2 + x$", "$3x^2 + 2x + 1$"],
          answer: 0,
          explanation: "Divide each term by $5x$: $3x^2 - 2x + 1$.",
        },
        {
          prompt: "Divide $x^2 + 7x + 10$ by $x + 2$.",
          options: [
            "$x + 5$, remainder 0",
            "$x + 5$, remainder 2",
            "$x + 2$, remainder 0",
            "$x - 5$, remainder 0",
          ],
          answer: 0,
          explanation: "$(x+2)(x+5) = x^2+7x+10$, so the division is exact with quotient $x+5$.",
        },
        {
          prompt: "Divide $x^2 - x - 12$ by $x - 4$.",
          options: [
            "$x + 3$, remainder 0",
            "$x - 3$, remainder 0",
            "$x + 3$, remainder 4",
            "$x - 4$, remainder 3",
          ],
          answer: 0,
          explanation: "$(x-4)(x+3) = x^2-x-12$, exact division, quotient $x+3$.",
        },
        {
          prompt:
            "Using synthetic division with root $r=3$, what are the coefficients of $x^2 + 2x - 15$?",
          options: ["1, 2, -15", "1, -15, 2", "3, 1, 2", "1, 2, 3"],
          answer: 0,
          explanation:
            "List the polynomial's coefficients in order: 1 (for $x^2$), 2 (for $x$), $-15$ (constant).",
        },
        {
          prompt: "Divide $x^3 + 3x^2 - 4$ by $x - 1$ using synthetic division (root $r=1$).",
          options: [
            "$x^2 + 4x + 4$, remainder 0",
            "$x^2 + 4x + 4$, remainder 4",
            "$x^2 + 3x - 4$, remainder 0",
            "$x^2 + 4x$, remainder $-4$",
          ],
          answer: 0,
          explanation:
            "Coefficients 1,3,0,-4 with r=1: bring down 1; 1×1+3=4; 4×1+0=4; 4×1+(-4)=0. Quotient $x^2+4x+4$, remainder 0.",
        },
        {
          prompt:
            "Use the remainder theorem to find the remainder when $p(x)=x^3-2x^2+3x-1$ is divided by $x-2$.",
          options: ["5", "3", "1", "-1"],
          answer: 0,
          explanation: "$p(2) = 8-8+6-1=5$.",
        },
        {
          prompt: "Is $(x-3)$ a factor of $p(x)=x^3-27$?",
          options: [
            "Yes, since $p(3)=0$",
            "No, since $p(3) \\ne 0$",
            "Cannot be determined",
            "Only if x=0",
          ],
          answer: 0,
          explanation: "$p(3) = 27-27=0$, so by the factor theorem $(x-3)$ is a factor.",
        },
        {
          prompt: "Is $(x+1)$ a factor of $p(x)=x^3+2x^2-x+3$?",
          options: [
            "No, since $p(-1) \\ne 0$",
            "Yes, since $p(-1)=0$",
            "Cannot be determined",
            "Only for positive x",
          ],
          answer: 0,
          explanation: "$p(-1) = -1+2+1+3=5 \\ne 0$, so $(x+1)$ is not a factor.",
        },
        {
          prompt: "Divide $x^2 + 5x + 6$ by $x + 3$. What is the quotient?",
          options: ["$x + 2$", "$x + 3$", "$x - 2$", "$x + 6$"],
          answer: 0,
          explanation: "$(x+3)(x+2) = x^2+5x+6$, quotient $x+2$, remainder 0.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Forgetting to include a zero coefficient for a missing power when setting up synthetic division, e.g. dividing $x^3 - 8$ using only coefficients 1, $-8$.",
          right:
            "Every power must be represented: $x^3 + 0x^2 + 0x - 8$ uses coefficients 1, 0, 0, $-8$.",
        },
        {
          wrong:
            "Subtracting incorrectly in long division by forgetting to flip the sign of every term being subtracted.",
          right:
            "Subtracting a polynomial means changing the sign of each of its terms before combining.",
        },
        {
          wrong: "Using synthetic division to divide by a non-linear divisor, like $x^2 + 1$.",
          right:
            "Synthetic division only works for linear divisors of the form $x - r$; use long division for higher-degree divisors.",
        },
        {
          wrong:
            "Confusing the sign of $r$ in synthetic division, e.g. using $r = 2$ for the divisor $x + 2$.",
          right: "Rewrite the divisor as $x - r$ first: $x + 2 = x - (-2)$, so $r = -2$.",
        },
        {
          wrong: "Concluding a binomial is a factor just because the remainder looks small.",
          right:
            "Only a remainder of exactly 0 confirms the binomial is a factor — any nonzero remainder means it is not.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Divide a polynomial by a monomial by dividing each term separately.",
        "Long division of polynomials repeats: divide leading terms, multiply, subtract, bring down.",
        "Synthetic division is a fast shortcut for dividing by $x - r$, using only coefficients.",
        "The remainder theorem: the remainder of $p(x) \\div (x-r)$ equals $p(r)$.",
        "The factor theorem: if $p(r) = 0$, then $(x-r)$ is a factor of $p(x)$.",
        "Always double-check by confirming the quotient times the divisor, plus the remainder, reconstructs the original polynomial.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: polynomial division",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Divide $\\dfrac{8x^2 - 12x}{4x}$.",
          options: ["$2x - 3$", "$2x - 12$", "$8x - 3$", "$2x^2 - 3$"],
          answer: 0,
          marks: 1,
          explanation: "Divide each term by $4x$: $2x - 3$.",
        },
        {
          type: "mc",
          prompt: "Divide $x^2 - 9x + 20$ by $x - 5$.",
          options: [
            "$x - 4$, remainder 0",
            "$x + 4$, remainder 0",
            "$x - 4$, remainder 5",
            "$x - 5$, remainder 4",
          ],
          answer: 0,
          marks: 1,
          explanation: "$(x-5)(x-4) = x^2-9x+20$, exact division.",
        },
        {
          type: "tf",
          prompt:
            "Synthetic division can be used to divide by any polynomial divisor, regardless of its degree.",
          answer: false,
          marks: 1,
          explanation: "Synthetic division only works for linear divisors of the form $x - r$.",
        },
        {
          type: "mc",
          prompt:
            "Use the remainder theorem to find the remainder when $p(x) = 2x^3 - 3x^2 + x - 4$ is divided by $x - 2$.",
          options: ["6", "2", "-4", "10"],
          marks: 2,
          answer: 1,
          explanation: "$p(2) = 2(8) - 3(4) + 2 - 4 = 16 - 12 + 2 - 4 = 2$.",
        },
        {
          type: "mc",
          prompt:
            "Which value of $r$ shows that $(x + 3)$ is a factor of $p(x) = x^3 + 3x^2 - x - 3$?",
          options: ["$p(-3) = 0$", "$p(3) = 0$", "$p(-3) \\ne 0$", "$p(0) = -3$"],
          answer: 0,
          marks: 2,
          explanation:
            "$(x+3) = x-(-3)$, so test $r=-3$: $p(-3) = -27+27+3-3=0$, confirming it's a factor.",
        },
        {
          type: "matching",
          prompt: "Match each divisor with its correct value of r for synthetic division.",
          left: ["$x - 4$", "$x + 4$", "$x - 1$", "$x + 7$"],
          options: ["$-7$", "$-4$", "$4$", "$1$"],
          answer: [2, 1, 3, 0],
          marks: 4,
          explanation:
            "Rewrite each divisor as $x - r$: $x-4 \\Rightarrow r=4$; $x+4=x-(-4) \\Rightarrow r=-4$; $x-1 \\Rightarrow r=1$; $x+7=x-(-7) \\Rightarrow r=-7$.",
        },
        {
          type: "mc",
          prompt: "Divide $x^3 - 6x^2 + 11x - 6$ by $x - 1$ using synthetic division.",
          options: [
            "$x^2 - 5x + 6$, remainder 0",
            "$x^2 - 5x + 6$, remainder 1",
            "$x^2 - 6x + 11$, remainder $-6$",
            "$x^2 + 5x - 6$, remainder 0",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "Coefficients 1,-6,11,-6 with r=1: 1; -6+1=-5; 11+(-5)=6; -6+6=0. Quotient $x^2-5x+6$, remainder 0.",
        },
        {
          type: "multi",
          prompt: "Select every statement that is true.",
          options: [
            "If $p(r) = 0$, then $(x - r)$ is a factor of $p(x)$.",
            "The remainder of $p(x) \\div (x - r)$ always equals $p(-r)$.",
            "Synthetic division can replace long division for any linear divisor $x - r$.",
            "A nonzero remainder means the divisor is not a factor of the dividend.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation: "The remainder theorem states the remainder equals $p(r)$, not $p(-r)$.",
        },
        {
          type: "mc",
          prompt:
            "Divide $x^3 - 1$ by $x - 1$ using synthetic division (remember to include zero coefficients).",
          options: [
            "$x^2 + x + 1$, remainder 0",
            "$x^2 - x + 1$, remainder 0",
            "$x^2 + x + 1$, remainder $-1$",
            "$x^2 - 1$, remainder 0",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "Coefficients 1, 0, 0, -1 with r=1: 1; 0+1=1; 0+1=1; -1+1=0. Quotient $x^2+x+1$, remainder 0.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "polynomialDivisionExplorer", label: "Use the polynomial division laboratory" },
        { key: "polynomialDivisionPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
