import type { LessonContent } from "@/lib/lesson-content-types";

export const rationalExpressions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "polynomials-and-factoring",
  lessonSlug: "rational-expressions",
  title: "Rational Expressions",
  objectives: [
    "Define a rational expression and identify values that must be excluded from its domain.",
    "Simplify rational expressions by factoring and cancelling common factors.",
    "Multiply and divide rational expressions.",
    "Add and subtract rational expressions, including finding a common denominator.",
    "Determine domain restrictions before and after simplifying an expression.",
    "Apply rational expressions to real-world rate and work problems.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A rational expression is a fraction whose numerator and denominator are both polynomials, such as $\\dfrac{x^2-9}{x^2+x-6}$. Rational expressions behave a lot like ordinary numeric fractions — they can be simplified, multiplied, divided, added and subtracted — but they carry an extra responsibility: keeping track of which values of the variable would make the denominator zero.",
        "This lesson brings together factoring from the previous lesson with fraction arithmetic, and introduces the important idea of domain restrictions.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson depends on confident factoring from Factoring Techniques, and on the arithmetic of ordinary numeric fractions — finding common denominators, multiplying fractions, and dividing by multiplying by a reciprocal.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Rational expression and domain restriction",
      body: "A rational expression is a fraction $\\dfrac{P(x)}{Q(x)}$ where $P$ and $Q$ are polynomials and $Q(x) \\neq 0$. A domain restriction is any value of the variable that makes the denominator zero — these values must always be excluded, since division by zero is undefined.",
    },
    {
      kind: "theory",
      heading: "Simplifying rational expressions",
      paragraphs: [
        "To simplify a rational expression, factor both the numerator and denominator completely, then cancel any factors that appear in both. This is exactly the same idea as simplifying a numeric fraction like $\\dfrac{12}{18} = \\dfrac{6 \\times 2}{6 \\times 3} = \\dfrac{2}{3}$, just with algebraic factors instead of numbers.",
        "Crucially, the domain restrictions come from the original (unfactored, uncancelled) denominator — cancelling a factor doesn't undo the restriction it represented, because the original expression was never defined there in the first place.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Restrictions survive simplification",
      body: "Even after a factor cancels, any value that made it zero is still excluded from the domain. For $\\dfrac{(x+3)(x-3)}{(x+3)(x-2)}$ simplifying to $\\dfrac{x-3}{x-2}$, $x=-3$ is still excluded, even though the simplified form no longer shows it.",
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{x^2-9}{x^2+x-6}$ and state its domain restrictions.",
      steps: [
        "Factor the numerator: $x^2-9 = (x+3)(x-3)$.",
        "Factor the denominator: $x^2+x-6 = (x+3)(x-2)$.",
        "Cancel the common factor $(x+3)$: $\\dfrac{(x+3)(x-3)}{(x+3)(x-2)} = \\dfrac{x-3}{x-2}$.",
        "Find the restrictions from the ORIGINAL denominator: $(x+3)(x-2)=0$ when $x=-3$ or $x=2$.",
      ],
      answer: "Simplified: $\\dfrac{x-3}{x-2}$, with $x \\neq -3$ and $x \\neq 2$.",
    },
    {
      kind: "rationalExpressionExplorer",
      heading: "Interactive: simplify step by step and find domain restrictions",
    },
    {
      kind: "theory",
      heading: "Multiplying and dividing rational expressions",
      paragraphs: [
        "Multiplying rational expressions works exactly like multiplying numeric fractions: factor everything first, then multiply numerators together and denominators together, cancelling common factors wherever they appear (not only within one fraction, but across both).",
        "Dividing by a rational expression means multiplying by its reciprocal — flip the second fraction, then proceed exactly as with multiplication.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\dfrac{A}{B} \\times \\dfrac{C}{D} = \\dfrac{AC}{BD} \\qquad \\dfrac{A}{B} \\div \\dfrac{C}{D} = \\dfrac{A}{B} \\times \\dfrac{D}{C} = \\dfrac{AD}{BC}",
      caption: "Factor first, then multiply or use the reciprocal for division.",
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{x+2}{x-1} \\times \\dfrac{x^2-1}{x^2+4x+4}$.",
      steps: [
        "Factor everything: $\\dfrac{x+2}{x-1} \\times \\dfrac{(x+1)(x-1)}{(x+2)^2}$.",
        "Multiply across: $\\dfrac{(x+2)(x+1)(x-1)}{(x-1)(x+2)^2}$.",
        "Cancel $(x-1)$ and one factor of $(x+2)$: $\\dfrac{x+1}{x+2}$.",
      ],
      answer:
        "$\\dfrac{x+1}{x+2}$, with $x \\neq 1$, $x \\neq -1$ and $x \\neq -2$ (from the original denominators).",
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{x^2-4}{x+3} \\div \\dfrac{x-2}{x+3}$.",
      steps: [
        "Rewrite as multiplication by the reciprocal: $\\dfrac{x^2-4}{x+3} \\times \\dfrac{x+3}{x-2}$.",
        "Factor: $\\dfrac{(x+2)(x-2)}{x+3} \\times \\dfrac{x+3}{x-2}$.",
        "Cancel $(x-2)$ and $(x+3)$: $x+2$.",
      ],
      answer:
        "$x + 2$, with $x \\neq -3$ and $x \\neq 2$ (both original denominators, including the one that moved to the top when dividing).",
    },
    {
      kind: "theory",
      heading: "Adding and subtracting rational expressions",
      paragraphs: [
        "Like numeric fractions, rational expressions need a common denominator before adding or subtracting. Factor each denominator, identify the least common denominator (LCD) — the smallest expression that contains every factor needed — and rewrite each fraction with that denominator before combining numerators.",
      ],
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{3}{x} + \\dfrac{2}{x+1}$.",
      steps: [
        "The denominators share no common factor, so the LCD is their product: $x(x+1)$.",
        "Rewrite each fraction with the LCD: $\\dfrac{3(x+1)}{x(x+1)} + \\dfrac{2x}{x(x+1)}$.",
        "Add the numerators: $\\dfrac{3(x+1) + 2x}{x(x+1)} = \\dfrac{3x+3+2x}{x(x+1)} = \\dfrac{5x+3}{x(x+1)}$.",
      ],
      answer: "$\\dfrac{5x+3}{x(x+1)}$, with $x \\neq 0$ and $x \\neq -1$.",
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{1}{x-2} - \\dfrac{3}{x+2}$.",
      steps: [
        "LCD is $(x-2)(x+2)$.",
        "Rewrite: $\\dfrac{x+2}{(x-2)(x+2)} - \\dfrac{3(x-2)}{(x-2)(x+2)}$.",
        "Subtract numerators: $\\dfrac{(x+2) - 3(x-2)}{(x-2)(x+2)} = \\dfrac{x+2-3x+6}{(x-2)(x+2)} = \\dfrac{-2x+8}{(x-2)(x+2)}$.",
      ],
      answer: "$\\dfrac{-2x+8}{(x-2)(x+2)}$, with $x \\neq 2$ and $x \\neq -2$.",
    },
    {
      kind: "realWorld",
      heading: "Where rational expressions appear",
      items: [
        {
          area: "Rates",
          text: "Combined work rates, like how long two people take to finish a job together, involve adding rational expressions.",
        },
        {
          area: "Concentration",
          text: "Mixing solutions of different concentrations produces ratios that are simplified as rational expressions.",
        },
        {
          area: "Physics",
          text: "Formulas for combined resistance in parallel circuits use rational expressions.",
        },
        {
          area: "Average speed",
          text: "Average speed over a variable distance and time is naturally expressed as a rational expression.",
        },
        {
          area: "Economics",
          text: "Average cost per unit, as a function of quantity produced, is a rational expression.",
        },
      ],
    },
    {
      kind: "example",
      prompt:
        "One pipe can fill a tank in $x$ hours, and a second, faster pipe can fill it in $x - 2$ hours. Write a single rational expression for their combined rate of filling the tank (tanks per hour).",
      steps: [
        "The first pipe's rate is $\\dfrac{1}{x}$ tanks per hour; the second's is $\\dfrac{1}{x-2}$ tanks per hour.",
        "Combined rate is the sum: $\\dfrac{1}{x} + \\dfrac{1}{x-2}$.",
        "LCD is $x(x-2)$: $\\dfrac{x-2}{x(x-2)} + \\dfrac{x}{x(x-2)} = \\dfrac{(x-2)+x}{x(x-2)} = \\dfrac{2x-2}{x(x-2)}$.",
      ],
      answer:
        "Combined rate: $\\dfrac{2x-2}{x(x-2)}$ tanks per hour, with $x \\neq 0$ and $x \\neq 2$.",
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What must you do before cancelling factors in a rational expression?",
          back: "Factor the numerator and denominator completely.",
        },
        {
          front: "Where do domain restrictions come from?",
          back: "Values that make the ORIGINAL (unfactored) denominator equal to zero.",
        },
        {
          front: "How do you divide by a rational expression?",
          back: "Multiply by its reciprocal (flip the second fraction).",
        },
        {
          front: "What's needed before adding rational expressions?",
          back: "A common denominator (the LCD).",
        },
        {
          front: "Do restrictions disappear after cancelling a factor?",
          back: "No — they still apply, even though the simplified form no longer shows them.",
        },
        {
          front: "What is the LCD of $\\dfrac{1}{x}$ and $\\dfrac{1}{x+1}$?",
          back: "$x(x+1)$, since the two denominators share no common factor.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: rational expressions",
      stepKey: "rationalExpressionsPractice",
      questions: [
        {
          prompt: "Simplify $\\dfrac{x^2-16}{x^2-2x-8}$.",
          options: [
            "$\\dfrac{x-4}{x-4} = 1$",
            "$\\dfrac{x+4}{x+2}$",
            "$\\dfrac{x-4}{x+2}$",
            "$\\dfrac{x+4}{x-2}$",
          ],
          answer: 1,
          explanation:
            "Numerator: $(x+4)(x-4)$. Denominator: $(x-4)(x+2)$. Cancel $(x-4)$: $\\dfrac{x+4}{x+2}$.",
        },
        {
          prompt: "What values are excluded from the domain of $\\dfrac{x+1}{x^2-9}$?",
          options: ["$x=3, x=-3$", "$x=1$", "$x=9,x=-9$", "None"],
          answer: 0,
          explanation: "$x^2-9=0$ when $x=3$ or $x=-3$.",
        },
        {
          prompt: "Simplify $\\dfrac{2x}{x+3} \\times \\dfrac{x+3}{4}$.",
          options: ["$\\dfrac{x}{2}$", "$\\dfrac{2x}{4}$", "$x$", "$\\dfrac{x}{4}$"],
          answer: 0,
          explanation: "Cancel $(x+3)$: $\\dfrac{2x}{4} = \\dfrac{x}{2}$.",
        },
        {
          prompt: "Simplify $\\dfrac{x^2-1}{x} \\div \\dfrac{x+1}{x^2}$.",
          options: ["$x(x-1)$", "$\\dfrac{x-1}{x}$", "$x-1$", "$x^2-1$"],
          answer: 0,
          explanation:
            "Multiply by the reciprocal: $\\dfrac{(x+1)(x-1)}{x} \\times \\dfrac{x^2}{x+1} = x(x-1)$.",
        },
        {
          prompt: "Simplify $\\dfrac{2}{x} + \\dfrac{3}{x+1}$.",
          options: [
            "$\\dfrac{5x+2}{x(x+1)}$",
            "$\\dfrac{5}{2x+1}$",
            "$\\dfrac{5x+3}{x(x+1)}$",
            "$\\dfrac{2x+3}{x(x+1)}$",
          ],
          answer: 0,
          explanation:
            "LCD $x(x+1)$: $\\dfrac{2(x+1)+3x}{x(x+1)} = \\dfrac{2x+2+3x}{x(x+1)} = \\dfrac{5x+2}{x(x+1)}$.",
        },
        {
          prompt: "Simplify $\\dfrac{1}{x-3} - \\dfrac{2}{x+3}$.",
          options: [
            "$\\dfrac{-x+9}{(x-3)(x+3)}$",
            "$\\dfrac{x+9}{(x-3)(x+3)}$",
            "$\\dfrac{-x-9}{(x-3)(x+3)}$",
            "$\\dfrac{3x}{(x-3)(x+3)}$",
          ],
          answer: 0,
          explanation:
            "LCD $(x-3)(x+3)$: $\\dfrac{(x+3)-2(x-3)}{(x-3)(x+3)} = \\dfrac{x+3-2x+6}{(x-3)(x+3)} = \\dfrac{-x+9}{(x-3)(x+3)}$.",
        },
        {
          prompt: "What is excluded from the domain of $\\dfrac{x-5}{x^2+2x}$?",
          options: ["$x=0, x=-2$", "$x=5$", "$x=0$", "$x=2,x=-2$"],
          answer: 0,
          explanation: "$x^2+2x = x(x+2) = 0$ when $x=0$ or $x=-2$.",
        },
        {
          prompt: "Simplify $\\dfrac{x^2+5x+6}{x^2-4}$.",
          options: [
            "$\\dfrac{x+3}{x-2}$",
            "$\\dfrac{x+2}{x-2}$",
            "$\\dfrac{x+3}{x+2}$",
            "$\\dfrac{x-3}{x-2}$",
          ],
          answer: 0,
          explanation:
            "Numerator: $(x+2)(x+3)$. Denominator: $(x+2)(x-2)$. Cancel $(x+2)$: $\\dfrac{x+3}{x-2}$.",
        },
        {
          prompt:
            "A car travels $d$ km in $t$ hours, and returns the same distance in $t+1$ hours. Write its combined average rate expression for total distance over total time.",
          options: [
            "$\\dfrac{2d}{2t+1}$",
            "$\\dfrac{2d}{t^2+t}$",
            "$\\dfrac{d}{t+1}$",
            "$\\dfrac{2d}{t}$",
          ],
          answer: 0,
          explanation:
            "Total distance $=2d$; total time $=t+(t+1)=2t+1$; combined rate $=\\dfrac{2d}{2t+1}$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Cancelling terms that are added or subtracted rather than multiplied, e.g. cancelling the $x$ in $\\dfrac{x+3}{x}$ to get $3$.",
          right:
            "Only common FACTORS (things multiplied) can be cancelled — $\\dfrac{x+3}{x}$ does not simplify by cancelling the x's.",
        },
        {
          wrong:
            "Finding domain restrictions from the simplified denominator instead of the original.",
          right:
            "Always find restrictions from the original, unfactored, uncancelled denominator — cancelled factors still represent excluded values.",
        },
        {
          wrong:
            "Adding numerators and denominators separately without finding a common denominator, e.g. $\\dfrac{1}{x}+\\dfrac{1}{x+1} = \\dfrac{2}{2x+1}$.",
          right:
            "Fractions must share a common denominator before their numerators can be combined.",
        },
        {
          wrong: "Forgetting to flip the second fraction when dividing rational expressions.",
          right:
            "Dividing means multiplying by the reciprocal: flip the second fraction, then multiply.",
        },
        {
          wrong:
            "Leaving a rational expression's numerator or denominator unfactored, missing a cancellation opportunity.",
          right:
            "Always factor both completely first — cancellations can only be spotted once everything is fully factored.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A rational expression is a fraction of two polynomials; its domain excludes any value making the original denominator zero.",
        "Simplify by factoring numerator and denominator fully, then cancelling common factors — restrictions survive the cancellation.",
        "Multiply rational expressions by factoring, then multiplying numerators and denominators, cancelling common factors across both.",
        "Divide by multiplying by the reciprocal of the second expression.",
        "Add or subtract using a common denominator (the LCD), just like numeric fractions.",
        "Rational expressions model rates, work problems, and average-value situations in real life.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: rational expressions",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Simplify $\\dfrac{x^2-4}{x^2-x-6}$.",
          options: [
            "$\\dfrac{x-2}{x-3}$",
            "$\\dfrac{x+2}{x-3}$",
            "$\\dfrac{x-2}{x+3}$",
            "$\\dfrac{x+2}{x+3}$",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "Numerator: $(x+2)(x-2)$. Denominator: $(x-3)(x+2)$. Cancel $(x+2)$: $\\dfrac{x-2}{x-3}$.",
        },
        {
          type: "mc",
          prompt: "What values must be excluded from $\\dfrac{3}{x^2-16}$?",
          options: ["$x=4,x=-4$", "$x=3$", "$x=16,x=-16$", "None"],
          answer: 0,
          marks: 1,
          explanation: "$x^2-16=0$ when $x=4$ or $x=-4$.",
        },
        {
          type: "tf",
          prompt:
            "Domain restrictions can be found using the simplified denominator instead of the original.",
          answer: false,
          marks: 1,
          explanation: "Restrictions must always come from the original, unfactored denominator.",
        },
        {
          type: "mc",
          prompt: "Simplify $\\dfrac{x+2}{3x} \\times \\dfrac{6x^2}{x+2}$.",
          options: ["$2x$", "$3x$", "$6x$", "$\\dfrac{1}{2x}$"],
          answer: 0,
          marks: 2,
          explanation: "Cancel $(x+2)$: $\\dfrac{6x^2}{3x} = 2x$.",
        },
        {
          type: "mc",
          prompt: "Simplify $\\dfrac{x^2-25}{x+4} \\div \\dfrac{x-5}{x+4}$.",
          options: ["$x+5$", "$x-5$", "$\\dfrac{x-5}{x+4}$", "$(x+5)(x+4)$"],
          answer: 0,
          marks: 2,
          explanation:
            "Multiply by reciprocal: $\\dfrac{(x+5)(x-5)}{x+4} \\times \\dfrac{x+4}{x-5} = x+5$.",
        },
        {
          type: "matching",
          prompt: "Match each operation to its correctly simplified result.",
          left: [
            "$\\dfrac{1}{x} + \\dfrac{1}{x+1}$",
            "$\\dfrac{2}{x} \\times \\dfrac{x}{4}$",
            "$\\dfrac{x^2-1}{x-1}$",
            "$\\dfrac{6}{x} \\div \\dfrac{2}{x}$",
          ],
          options: ["$3$", "$x+1$", "$\\dfrac{2x+1}{x(x+1)}$", "$\\dfrac{1}{2}$"],
          answer: [2, 3, 1, 0],
          marks: 4,
          explanation:
            "Each operation resolves to its listed simplified result after factoring and cancelling appropriately.",
        },
        {
          type: "mc",
          prompt: "Simplify $\\dfrac{2}{x-1} + \\dfrac{1}{x+2}$.",
          options: [
            "$\\dfrac{3x+3}{(x-1)(x+2)}$",
            "$\\dfrac{3}{2x+1}$",
            "$\\dfrac{x+5}{(x-1)(x+2)}$",
            "$\\dfrac{3x}{(x-1)(x+2)}$",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "LCD $(x-1)(x+2)$: $\\dfrac{2(x+2)+(x-1)}{(x-1)(x+2)} = \\dfrac{2x+4+x-1}{(x-1)(x+2)} = \\dfrac{3x+3}{(x-1)(x+2)}$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about rational expressions.",
          options: [
            "Restrictions come from the original denominator, not the simplified one.",
            "You can cancel terms that are added, just like factors.",
            "Dividing by a rational expression means multiplying by its reciprocal.",
            "A common denominator is required before adding or subtracting.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "Only common factors (multiplied terms) can be cancelled — added or subtracted terms cannot.",
        },
        {
          type: "mc",
          prompt:
            "Two workers can complete a job in $x$ hours and $x+3$ hours alone, respectively. Write their combined rate as a single rational expression.",
          options: [
            "$\\dfrac{2x+3}{x(x+3)}$",
            "$\\dfrac{1}{x} + \\dfrac{1}{x+3}$ unsimplified",
            "$\\dfrac{2x+3}{2x+3}$",
            "$\\dfrac{x+3}{x(x+3)}$",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "$\\dfrac{1}{x} + \\dfrac{1}{x+3} = \\dfrac{(x+3)+x}{x(x+3)} = \\dfrac{2x+3}{x(x+3)}$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "rationalExpressionExplorer", label: "Use the rational expressions laboratory" },
        { key: "rationalExpressionsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
