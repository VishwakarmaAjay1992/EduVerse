import type { LessonContent } from "@/lib/lesson-content-types";

export const completingTheSquareAndTheQuadraticFormula: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "quadratic-equations",
  lessonSlug: "completing-the-square-and-the-quadratic-formula",
  title: "Completing the Square and the Quadratic Formula",
  objectives: [
    "Solve a quadratic equation by completing the square.",
    "Derive the quadratic formula from completing the square on the general equation.",
    "Use the quadratic formula to solve any quadratic equation.",
    "Calculate the discriminant and use it to predict the number and type of roots.",
    "Interpret the discriminant's sign as two real roots, one repeated root, or no real roots.",
    "Choose an efficient method for a given quadratic equation.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Factoring and the square root method work well for many quadratics, but not all of them — some trinomials simply don't factor neatly over whole numbers. Completing the square is a technique that works on every quadratic equation, and it also unlocks the single most useful formula in algebra: the quadratic formula, which solves any quadratic equation directly from its coefficients.",
        "This lesson builds completing the square step by step, uses it to derive the quadratic formula from scratch, and introduces the discriminant — a small calculation that instantly tells you how many real solutions an equation has, before you even solve it.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds directly on Solving by Factoring and Square Roots — you should be comfortable with the square root method and with the perfect-square pattern $(a+b)^2 = a^2+2ab+b^2$ from Polynomials: Add, Subtract, Multiply.",
      ],
    },
    {
      kind: "theory",
      heading: "Completing the square",
      paragraphs: [
        "Completing the square rewrites a quadratic expression so that a perfect-square trinomial appears, which can then be solved with the square root method. The key step: to turn $x^2 + bx$ into a perfect square, add $(b/2)^2$ — and whatever you add to one side of an equation, you must add to the other side too.",
      ],
    },
    {
      kind: "formula",
      latex: "x^2 + bx + \\left(\\dfrac{b}{2}\\right)^2 = \\left(x + \\dfrac{b}{2}\\right)^2",
      caption: "Adding the square of half the x-coefficient always completes a perfect square.",
    },
    {
      kind: "example",
      prompt: "Solve $x^2 + 6x + 5 = 0$ by completing the square.",
      steps: [
        "Move the constant to the right: $x^2 + 6x = -5$.",
        "Halve the x-coefficient ($6 \\div 2 = 3$) and square it ($3^2=9$); add to both sides: $x^2+6x+9 = -5+9$.",
        "The left side is now a perfect square: $(x+3)^2 = 4$.",
        "Take the square root of both sides: $x + 3 = \\pm 2$.",
        "Solve: $x = -1$ or $x = -5$.",
      ],
      answer:
        "$x = -1$ or $x = -5$. Check: $(-1)^2+6(-1)+5=1-6+5=0$ ✓ and $(-5)^2+6(-5)+5=25-30+5=0$ ✓",
    },
    {
      kind: "example",
      prompt: "Solve $x^2 - 4x - 1 = 0$ by completing the square.",
      steps: [
        "Move the constant to the right: $x^2 - 4x = 1$.",
        "Halve the x-coefficient ($-4 \\div 2=-2$) and square it (4); add to both sides: $x^2-4x+4 = 1+4$.",
        "The left side is a perfect square: $(x-2)^2 = 5$.",
        "Take the square root: $x - 2 = \\pm\\sqrt{5}$.",
        "Solve: $x = 2 + \\sqrt{5} \\approx 4.24$ or $x = 2 - \\sqrt{5} \\approx -0.24$.",
      ],
      answer: "$x = 2 \\pm \\sqrt{5}$ (exact form), approximately 4.24 or $-0.24$.",
    },
    {
      kind: "theory",
      heading: "Deriving the quadratic formula",
      paragraphs: [
        "Completing the square on the general equation $ax^2+bx+c=0$ produces a formula that works for every quadratic equation, without needing to factor or complete the square each time. First divide every term by $a$, then complete the square exactly as before.",
      ],
    },
    {
      kind: "formula",
      latex: "x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
      caption: "The quadratic formula — works on any equation in the form $ax^2+bx+c=0$.",
    },
    {
      kind: "example",
      prompt: "Solve $2x^2 + 3x - 5 = 0$ using the quadratic formula.",
      steps: [
        "Identify the coefficients: $a=2$, $b=3$, $c=-5$.",
        "Substitute into the formula: $x = \\dfrac{-3 \\pm \\sqrt{3^2 - 4(2)(-5)}}{2(2)}$.",
        "Simplify inside the root: $x = \\dfrac{-3 \\pm \\sqrt{9+40}}{4} = \\dfrac{-3 \\pm \\sqrt{49}}{4} = \\dfrac{-3 \\pm 7}{4}$.",
        "Evaluate both cases: $x = \\dfrac{4}{4}=1$ or $x = \\dfrac{-10}{4}=-2.5$.",
      ],
      answer:
        "$x = 1$ or $x = -2.5$. Check: $2(1)^2+3(1)-5=0$ ✓ and $2(-2.5)^2+3(-2.5)-5=12.5-7.5-5=0$ ✓",
    },
    {
      kind: "theory",
      heading: "The discriminant",
      paragraphs: [
        "The expression under the square root in the quadratic formula, $b^2-4ac$, is called the discriminant. Its sign — without doing any further work — tells you exactly how many real solutions the equation has, because it determines whether the square root produces a real number, zero, or an impossible (negative) value.",
      ],
    },
    {
      kind: "table",
      heading: "The discriminant and the nature of the roots",
      headers: ["Discriminant $b^2-4ac$", "Nature of roots", "Graph meaning"],
      rows: [
        ["Positive", "Two distinct real roots", "Parabola crosses the x-axis twice"],
        ["Zero", "One repeated real root", "Parabola touches the x-axis at exactly one point"],
        ["Negative", "No real roots (two complex roots)", "Parabola never touches the x-axis"],
      ],
    },
    {
      kind: "quadraticFormulaExplorer",
      heading: "Interactive: discriminant explorer and completing-the-square walkthrough",
    },
    {
      kind: "example",
      prompt: "Without solving, determine the nature of the roots of $x^2 - 6x + 9 = 0$.",
      steps: [
        "Identify coefficients: $a=1$, $b=-6$, $c=9$.",
        "Calculate the discriminant: $b^2-4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0$.",
        "A discriminant of zero means one repeated real root.",
      ],
      answer: "One repeated real root (in fact $x=3$, since $x^2-6x+9=(x-3)^2$).",
    },
    {
      kind: "example",
      prompt: "Without solving, determine the nature of the roots of $x^2 + 2x + 5 = 0$.",
      steps: [
        "Identify coefficients: $a=1$, $b=2$, $c=5$.",
        "Calculate the discriminant: $b^2-4ac = 2^2 - 4(1)(5) = 4 - 20 = -16$.",
        "A negative discriminant means no real roots.",
      ],
      answer: "No real roots — the parabola never crosses the x-axis.",
    },
    {
      kind: "theory",
      heading: "Choosing an efficient method",
      paragraphs: [
        "Factoring is fastest when the trinomial factors neatly with small whole numbers. The square root method is fastest when the equation is already a squared expression equal to a constant. Completing the square is useful for deriving other results (like finding a parabola's vertex) but is rarely the quickest way to just find roots. The quadratic formula always works, making it the reliable fallback whenever factoring isn't obvious.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Check the discriminant first",
      body: "Calculating $b^2-4ac$ before solving tells you what to expect: a perfect-square discriminant usually means the equation factors nicely; a non-square positive discriminant means irrational roots; a negative discriminant means don't bother looking for real solutions at all.",
    },
    {
      kind: "realWorld",
      heading: "Where these tools matter",
      items: [
        {
          area: "Engineering",
          text: "The discriminant predicts whether a system reaches a critical state (like resonance) without fully solving the equation.",
        },
        {
          area: "Physics",
          text: "Projectile motion equations use the quadratic formula to find when an object reaches a given height.",
        },
        {
          area: "Economics",
          text: "Break-even and profit-maximisation problems often require the quadratic formula when factoring fails.",
        },
        {
          area: "Computer graphics",
          text: "Ray-sphere intersection calculations use the discriminant to test whether a ray hits an object at all.",
        },
        {
          area: "Architecture",
          text: "Completing the square helps find the vertex of parabolic arches and cable curves.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "What do you add to complete the square on $x^2+bx$?", back: "$(b/2)^2$." },
        { front: "The quadratic formula?", back: "$x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$." },
        {
          front: "What is the discriminant?",
          back: "$b^2-4ac$, the expression under the square root in the quadratic formula.",
        },
        { front: "Discriminant positive?", back: "Two distinct real roots." },
        { front: "Discriminant zero?", back: "One repeated real root." },
        { front: "Discriminant negative?", back: "No real roots." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: completing the square and the quadratic formula",
      stepKey: "quadraticFormulaPractice",
      questions: [
        {
          prompt: "What must be added to complete the square on $x^2 + 10x$?",
          options: ["25", "10", "5", "100"],
          answer: 0,
          explanation: "Half of 10 is 5, and $5^2=25$.",
        },
        {
          prompt: "Solve $x^2 + 4x - 5 = 0$ by completing the square.",
          options: ["$x=1, x=-5$", "$x=-1, x=5$", "$x=1, x=5$", "$x=-1, x=-5$"],
          answer: 0,
          explanation:
            "$x^2+4x+4=5+4 \\Rightarrow (x+2)^2=9 \\Rightarrow x+2=\\pm3 \\Rightarrow x=1$ or $x=-5$.",
        },
        {
          prompt: "Calculate the discriminant of $2x^2 - 3x + 1 = 0$.",
          options: ["1", "9", "17", "-7"],
          answer: 0,
          explanation: "$b^2-4ac = (-3)^2 - 4(2)(1) = 9-8=1$.",
        },
        {
          prompt: "The discriminant of an equation is $-12$. How many real roots does it have?",
          options: ["0", "1", "2", "Cannot be determined"],
          answer: 0,
          explanation: "A negative discriminant means no real roots.",
        },
        {
          prompt: "The discriminant of an equation is 0. How many real roots does it have?",
          options: ["1 (repeated)", "0", "2", "Infinitely many"],
          answer: 0,
          explanation: "A discriminant of exactly zero gives one repeated real root.",
        },
        {
          prompt: "Solve $x^2 + 2x - 4 = 0$ using the quadratic formula (exact form).",
          options: [
            "$x=-1\\pm\\sqrt{5}$",
            "$x=1\\pm\\sqrt{5}$",
            "$x=-2\\pm\\sqrt{5}$",
            "$x=-1\\pm\\sqrt{20}$",
          ],
          answer: 0,
          explanation:
            "$x=\\dfrac{-2\\pm\\sqrt{4+16}}{2}=\\dfrac{-2\\pm\\sqrt{20}}{2}=\\dfrac{-2\\pm2\\sqrt5}{2}=-1\\pm\\sqrt5$.",
        },
        {
          prompt: "Solve $3x^2 - 5x - 2 = 0$ using the quadratic formula.",
          options: ["$x=2, x=-1/3$", "$x=-2, x=1/3$", "$x=2, x=1/3$", "$x=-2, x=-1/3$"],
          answer: 0,
          explanation:
            "$x=\\dfrac{5\\pm\\sqrt{25+24}}{6}=\\dfrac{5\\pm7}{6}$, giving $x=2$ or $x=-1/3$.",
        },
        {
          prompt: "Without solving, how many real roots does $4x^2 - 12x + 9 = 0$ have?",
          options: ["1 (repeated)", "0", "2", "Cannot be determined"],
          answer: 0,
          explanation: "Discriminant $=144-144=0$, so 1 repeated root.",
        },
        {
          prompt: "Without solving, how many real roots does $x^2 + x + 3 = 0$ have?",
          options: ["0", "1", "2", "3"],
          answer: 0,
          explanation: "Discriminant $=1-12=-11$, negative, so no real roots.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Adding $b^2$ instead of $(b/2)^2$ when completing the square.",
          right: "The value to add is half the x-coefficient, squared: $(b/2)^2$, not $b^2$.",
        },
        {
          wrong:
            "Forgetting to divide by $a$ first when completing the square on $ax^2+bx+c$ with $a \\neq 1$.",
          right:
            "Divide every term by $a$ before completing the square, since the perfect-square pattern needs a leading coefficient of 1.",
        },
        {
          wrong:
            "Misidentifying $b$ as positive when the equation has a subtraction, e.g. reading $b=4$ from $x^2-4x-1=0$.",
          right: "Include the sign: in $x^2-4x-1=0$, $b=-4$, not 4.",
        },
        {
          wrong: "Computing the discriminant as $b^2+4ac$ instead of $b^2-4ac$.",
          right: "The discriminant is $b^2-4ac$ — the minus sign is essential.",
        },
        {
          wrong: "Forgetting the $\\pm$ in the quadratic formula and reporting only one root.",
          right:
            "The quadratic formula always produces two values (unless the discriminant is zero) — evaluate both the $+$ and $-$ cases.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Completing the square: move the constant across, add $(b/2)^2$ to both sides, factor as a perfect square, then use the square root method.",
        "The quadratic formula $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ comes from completing the square on the general equation and solves any quadratic.",
        "The discriminant $b^2-4ac$ predicts the number of real roots without solving: positive gives two, zero gives one repeated, negative gives none.",
        "Factoring and square roots are often faster for simple equations; the quadratic formula always works as a reliable fallback.",
        "Always include both the $+$ and $-$ cases when applying the quadratic formula.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: completing the square and the quadratic formula",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "What must be added to complete the square on $x^2 - 8x$?",
          options: ["16", "8", "4", "64"],
          answer: 0,
          marks: 1,
          explanation: "Half of $-8$ is $-4$, and $(-4)^2=16$.",
        },
        {
          type: "mc",
          prompt: "Solve $x^2 - 2x - 8 = 0$ by completing the square.",
          options: ["$x=4, x=-2$", "$x=-4, x=2$", "$x=4, x=2$", "$x=-4, x=-2$"],
          answer: 0,
          marks: 2,
          explanation:
            "$x^2-2x+1=8+1 \\Rightarrow (x-1)^2=9 \\Rightarrow x-1=\\pm3 \\Rightarrow x=4$ or $x=-2$.",
        },
        {
          type: "tf",
          prompt: "The discriminant of $x^2+6x+9=0$ is zero.",
          answer: true,
          marks: 1,
          explanation: "$b^2-4ac = 36-36=0$.",
        },
        {
          type: "mc",
          prompt: "Calculate the discriminant of $x^2 - 3x - 10 = 0$.",
          options: ["49", "-31", "9", "29"],
          answer: 0,
          marks: 1,
          explanation: "$(-3)^2-4(1)(-10)=9+40=49$.",
        },
        {
          type: "mc",
          prompt: "How many real roots does $2x^2+3x+5=0$ have?",
          options: ["0", "1", "2", "Cannot be determined"],
          answer: 0,
          marks: 2,
          explanation: "Discriminant $=9-40=-31$, negative, so no real roots.",
        },
        {
          type: "matching",
          prompt: "Match each discriminant value to its meaning.",
          left: ["Discriminant = 16", "Discriminant = 0", "Discriminant = -5", "Discriminant = 1"],
          options: ["Two real roots", "No real roots", "One repeated root", "Two real roots"],
          answer: [0, 2, 1, 3],
          marks: 4,
          explanation:
            "Positive discriminants (16 and 1) give two real roots; zero gives one repeated root; negative gives none.",
        },
        {
          type: "mc",
          prompt: "Solve $x^2 - 4x + 1 = 0$ using the quadratic formula (exact form).",
          options: [
            "$x=2\\pm\\sqrt3$",
            "$x=2\\pm\\sqrt{12}$",
            "$x=4\\pm\\sqrt3$",
            "$x=-2\\pm\\sqrt3$",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "$x=\\dfrac{4\\pm\\sqrt{16-4}}{2}=\\dfrac{4\\pm\\sqrt{12}}{2}=\\dfrac{4\\pm2\\sqrt3}{2}=2\\pm\\sqrt3$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about the quadratic formula.",
          options: [
            "It works for every quadratic equation with $a \\neq 0$.",
            "It requires the equation to already be factorable.",
            "The $\\pm$ symbol produces up to two solutions.",
            "It is derived by completing the square on $ax^2+bx+c=0$.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "The quadratic formula works even when an equation does NOT factor nicely — that is one of its main advantages.",
        },
        {
          type: "mc",
          prompt: "Solve $5x^2 + 2x - 3 = 0$ using the quadratic formula.",
          options: ["$x=3/5, x=-1$", "$x=-3/5, x=1$", "$x=3/5, x=1$", "$x=-3/5, x=-1$"],
          answer: 0,
          marks: 2,
          explanation:
            "$x=\\dfrac{-2\\pm\\sqrt{4+60}}{10}=\\dfrac{-2\\pm8}{10}$, giving $x=0.6$ or $x=-1$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "quadraticFormulaExplorer", label: "Use the discriminant and formula laboratory" },
        { key: "quadraticFormulaPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
