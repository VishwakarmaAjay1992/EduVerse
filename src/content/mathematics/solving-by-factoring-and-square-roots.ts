import type { LessonContent } from "@/lib/lesson-content-types";

export const solvingByFactoringAndSquareRoots: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "quadratic-equations",
  lessonSlug: "solving-by-factoring-and-square-roots",
  title: "Solving by Factoring and Square Roots",
  objectives: [
    "Recognise a quadratic equation and identify its coefficients.",
    "State and apply the zero product property.",
    "Solve quadratic equations by factoring.",
    "Solve quadratic equations using the square root method.",
    "Recognise when a quadratic equation has no real solution.",
    "Set up and solve simple real-world quadratic word problems.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A quadratic equation is an equation where the highest power of the variable is 2, written in the standard form $ax^2 + bx + c = 0$ with $a \\neq 0$. Unlike a linear equation, a quadratic equation can have zero, one, or two solutions — because a squared term can be reached from two different starting values.",
        "This lesson covers two direct solving methods that work well when an equation is already in a convenient form: factoring, which relies on the zero product property, and the square root method, which works whenever the equation isolates a single squared expression.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson depends on confident factoring from Factoring Techniques (common factor, trinomial factoring, difference of squares) and comfortable square roots from Square Roots and Cube Roots, including the idea that $x^2 = k$ has two solutions, $\\pm\\sqrt{k}$.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Quadratic equation and standard form",
      body: "A quadratic equation has the standard form $ax^2 + bx + c = 0$, where $a$, $b$ and $c$ are constants and $a \\neq 0$. If $a$ were 0, the $x^2$ term would disappear and the equation would become linear.",
    },
    {
      kind: "theory",
      heading: "The zero product property",
      paragraphs: [
        "The zero product property states that if the product of two factors equals zero, then at least one of those factors must itself be zero. This is the key idea that turns a factored quadratic into two simple equations you already know how to solve.",
        "The property only applies when one side of the equation is exactly zero — factoring an equation that equals, say, 12 does NOT let you set each factor equal to 12.",
      ],
    },
    {
      kind: "formula",
      latex: "\\text{If } pq = 0, \\text{ then } p = 0 \\text{ or } q = 0",
      caption: "This only works when the product equals zero — never any other number.",
    },
    {
      kind: "quadraticSolverExplorer",
      heading: "Interactive: factoring and square-root solving laboratory",
    },
    {
      kind: "theory",
      heading: "Solving by factoring",
      paragraphs: [
        "To solve by factoring: rearrange the equation so one side is zero, factor the other side completely, apply the zero product property to split it into simple equations, and solve each one.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $x^2 + 5x + 6 = 0$ by factoring.",
      steps: [
        "The equation already has zero on one side.",
        "Factor the trinomial: two numbers multiplying to 6 and adding to 5 are 2 and 3, so $(x+2)(x+3) = 0$.",
        "Apply the zero product property: $x + 2 = 0$ or $x + 3 = 0$.",
        "Solve each: $x = -2$ or $x = -3$.",
      ],
      answer:
        "$x = -2$ or $x = -3$. Check: $(-2)^2+5(-2)+6 = 4-10+6=0$ ✓ and $(-3)^2+5(-3)+6=9-15+6=0$ ✓",
    },
    {
      kind: "example",
      prompt: "Solve $x^2 - 3x = 18$ by factoring.",
      steps: [
        "Rearrange so one side is zero: $x^2 - 3x - 18 = 0$.",
        "Factor: numbers multiplying to $-18$ and adding to $-3$ are $-6$ and $3$, so $(x-6)(x+3)=0$.",
        "Apply the zero product property: $x - 6 = 0$ or $x + 3 = 0$.",
        "Solve each: $x = 6$ or $x = -3$.",
      ],
      answer: "$x = 6$ or $x = -3$. Check: $6^2-3(6)=36-18=18$ ✓ and $(-3)^2-3(-3)=9+9=18$ ✓",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Zero must be on one side first",
      body: "Before factoring, always rearrange so the equation reads '... = 0'. Factoring $x^2 - 3x = 18$ directly and setting factors equal to parts of 18 is a common and serious error.",
    },
    {
      kind: "theory",
      heading: "Solving by the square root method",
      paragraphs: [
        "When an equation isolates a squared expression — either $x^2 = k$ or $(x - h)^2 = k$ — take the square root of both sides. Because both a positive and a negative number square to the same positive result, you must include both the positive and negative root, written $\\pm$.",
        "If $k$ is negative, there is no real solution, since no real number squares to a negative value.",
      ],
    },
    {
      kind: "formula",
      latex: "x^2 = k \\ \\Longrightarrow \\ x = \\pm\\sqrt{k} \\quad (k \\ge 0)",
      caption: "Always include both the positive and negative root.",
    },
    {
      kind: "example",
      prompt: "Solve $x^2 = 25$.",
      steps: [
        "Take the square root of both sides: $x = \\pm\\sqrt{25}$.",
        "Simplify: $x = \\pm 5$.",
      ],
      answer: "$x = 5$ or $x = -5$.",
    },
    {
      kind: "example",
      prompt: "Solve $(x - 3)^2 = 16$.",
      steps: [
        "Take the square root of both sides: $x - 3 = \\pm\\sqrt{16} = \\pm 4$.",
        "Add 3 to both sides: $x = 3 \\pm 4$.",
        "This gives two values: $x = 7$ or $x = -1$.",
      ],
      answer: "$x = 7$ or $x = -1$. Check: $(7-3)^2=16$ ✓ and $(-1-3)^2=16$ ✓",
    },
    {
      kind: "example",
      prompt: "Solve $x^2 + 4 = 0$.",
      steps: [
        "Subtract 4 from both sides: $x^2 = -4$.",
        "A square can never be negative, so there is no real value of $x$ that works.",
      ],
      answer: "No real solution.",
    },
    {
      kind: "theory",
      heading: "Simple quadratic word problems",
      paragraphs: [
        "Quadratic equations often arise from area problems, since area involves multiplying two lengths together, and from problems about falling or thrown objects, since gravity produces a squared-time relationship. Setting up the equation from the words is exactly like the linear word-problem process — define the unknown, translate the relationship, then solve.",
      ],
    },
    {
      kind: "example",
      prompt: "A square garden has an area of 81 m². Find the length of one side.",
      steps: [
        "Let $x$ = the side length. Area of a square is $x^2$.",
        "Set up the equation: $x^2 = 81$.",
        "Take the square root: $x = \\pm 9$.",
        "A length cannot be negative, so reject $x = -9$.",
      ],
      answer: "The side length is 9 m.",
    },
    {
      kind: "example",
      prompt:
        "A rectangular photo is 4 cm longer than it is wide, and its area is 96 cm². Find its width.",
      steps: [
        "Let $x$ = the width. The length is $x + 4$.",
        "Area equation: $x(x + 4) = 96$.",
        "Expand: $x^2 + 4x = 96$, so $x^2 + 4x - 96 = 0$.",
        "Factor: numbers multiplying to $-96$ and adding to 4 are 12 and $-8$, so $(x+12)(x-8) = 0$.",
        "Solve: $x = -12$ or $x = 8$. A width cannot be negative, so reject $x = -12$.",
      ],
      answer: "The width is 8 cm (and the length is 12 cm). Check: $8 \\times 12 = 96$ ✓",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Reject impossible answers",
      body: "A quadratic equation often produces two mathematically valid roots, but in a real-world context (length, time, price, age) only one may make sense. Always check both roots against the situation before giving a final answer.",
    },
    {
      kind: "realWorld",
      heading: "Where these methods apply",
      items: [
        {
          area: "Area problems",
          text: "Finding a missing side length when an area and a relationship between sides are known.",
        },
        {
          area: "Projectile motion",
          text: "Finding when a thrown or dropped object hits the ground, since height involves time squared.",
        },
        {
          area: "Design",
          text: "Sizing a square or circular component to meet an area or material requirement.",
        },
        {
          area: "Business",
          text: "Simple revenue models where price and quantity are linked, producing a squared relationship.",
        },
        {
          area: "Construction",
          text: "Finding dimensions of a square foundation or panel from a required area.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "Standard form of a quadratic equation?",
          back: "$ax^2+bx+c=0$, with $a \\neq 0$.",
        },
        { front: "Zero product property?", back: "If $pq=0$, then $p=0$ or $q=0$." },
        {
          front: "Before factoring, what must be true?",
          back: "One side of the equation must equal zero.",
        },
        { front: "Solving $x^2=k$?", back: "$x=\\pm\\sqrt{k}$, valid only when $k \\ge 0$." },
        { front: "What if $x^2 = $ a negative number?", back: "No real solution exists." },
        {
          front: "Why check both roots in a word problem?",
          back: "One root is often not physically sensible (e.g. negative length).",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: factoring and square roots",
      stepKey: "quadraticFactoringPractice",
      questions: [
        {
          prompt: "Solve $x^2 + 7x + 10 = 0$.",
          options: ["$x=-2, x=-5$", "$x=2, x=5$", "$x=-2, x=5$", "$x=2, x=-5$"],
          answer: 0,
          explanation: "$(x+2)(x+5)=0$, so $x=-2$ or $x=-5$.",
        },
        {
          prompt: "Solve $x^2 - 2x - 15 = 0$.",
          options: ["$x=5, x=-3$", "$x=-5, x=3$", "$x=5, x=3$", "$x=-5, x=-3$"],
          answer: 0,
          explanation: "$(x-5)(x+3)=0$, so $x=5$ or $x=-3$.",
        },
        {
          prompt: "Solve $x^2 = 49$.",
          options: ["$x=\\pm 7$", "$x=7$ only", "$x=\\pm 24.5$", "No solution"],
          answer: 0,
          explanation: "$x=\\pm\\sqrt{49}=\\pm 7$.",
        },
        {
          prompt: "Solve $(x+2)^2 = 9$.",
          options: ["$x=1, x=-5$", "$x=1, x=5$", "$x=-1, x=-5$", "$x=7, x=-11$"],
          answer: 0,
          explanation: "$x+2=\\pm 3$, so $x=1$ or $x=-5$.",
        },
        {
          prompt: "Solve $x^2 - 16 = 0$.",
          options: ["$x=\\pm 4$", "$x=\\pm 8$", "$x=16$", "$x=-4$ only"],
          answer: 0,
          explanation: "Difference of squares: $(x+4)(x-4)=0$, so $x=\\pm4$.",
        },
        {
          prompt: "Solve $x^2 + 9 = 0$.",
          options: ["No real solution", "$x=\\pm3$", "$x=\\pm9$", "$x=-9$"],
          answer: 0,
          explanation: "$x^2=-9$ has no real solution, since squares can't be negative.",
        },
        {
          prompt: "Solve $2x^2 - 5x - 3 = 0$.",
          options: ["$x=3, x=-0.5$", "$x=-3, x=0.5$", "$x=3, x=0.5$", "$x=-3, x=-0.5$"],
          answer: 0,
          explanation: "$(2x+1)(x-3)=0$, so $x=-0.5$ or $x=3$.",
        },
        {
          prompt: "A square photo frame has area 144 cm². Find its side length.",
          options: ["12 cm", "24 cm", "72 cm", "14.4 cm"],
          answer: 0,
          explanation: "$x^2=144 \\Rightarrow x=12$ (rejecting the negative root).",
        },
        {
          prompt:
            "A rectangle's length is 3 cm more than its width, and its area is 40 cm². Find the width.",
          options: ["5 cm", "8 cm", "3 cm", "13 cm"],
          answer: 0,
          explanation:
            "$x(x+3)=40 \\Rightarrow x^2+3x-40=0 \\Rightarrow (x+8)(x-5)=0 \\Rightarrow x=5$ (rejecting $x=-8$).",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Factoring before moving everything to one side, e.g. factoring $x(x-3)=18$ as $x=18$ or $x-3=18$.",
          right:
            "Rearrange to '... = 0' first: $x^2-3x-18=0$, then factor and apply the zero product property.",
        },
        {
          wrong:
            "Forgetting the negative root when using the square root method, e.g. writing $x^2=25 \\Rightarrow x=5$ only.",
          right: "Both $5^2=25$ and $(-5)^2=25$, so the correct answer is $x=\\pm 5$.",
        },
        {
          wrong: "Claiming $x^2=-9$ has solutions $x=\\pm3$.",
          right: "No real number squares to a negative number, so $x^2=-9$ has no real solution.",
        },
        {
          wrong: "Accepting a negative length or time as a valid final answer in a word problem.",
          right:
            "Reject any root that doesn't make physical sense in context, even though it's a valid solution to the equation.",
        },
        {
          wrong:
            "Sign errors when finding factor pairs, e.g. using 6 and $-1$ for a trinomial needing product $-6$ and sum $-5$.",
          right:
            "Double-check that the chosen numbers satisfy BOTH the product and the sum conditions before writing the factored form.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A quadratic equation has standard form $ax^2+bx+c=0$ with $a \\neq 0$, and can have 0, 1 or 2 real solutions.",
        "The zero product property: if $pq=0$, then $p=0$ or $q=0$ — but only when one side is exactly zero.",
        "Solve by factoring: rearrange to zero, factor, apply the zero product property, solve each factor.",
        "Solve by square roots when a squared expression is isolated: take $\\pm\\sqrt{\\phantom{x}}$ of both sides.",
        "A negative value under the square root (after isolating $x^2$) means no real solution.",
        "In word problems, always check which root(s) make physical sense before giving a final answer.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: factoring and square roots",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Solve $x^2 + 8x + 15 = 0$.",
          options: ["$x=-3, x=-5$", "$x=3, x=5$", "$x=-3, x=5$", "$x=3, x=-5$"],
          answer: 0,
          marks: 1,
          explanation: "$(x+3)(x+5)=0$, so $x=-3$ or $x=-5$.",
        },
        {
          type: "mc",
          prompt: "Solve $x^2 = 64$.",
          options: ["$x=\\pm 8$", "$x=8$ only", "$x=\\pm 32$", "No solution"],
          answer: 0,
          marks: 1,
          explanation: "$x=\\pm\\sqrt{64}=\\pm 8$.",
        },
        {
          type: "tf",
          prompt: "The equation $x^2 + 1 = 0$ has a real solution.",
          answer: false,
          marks: 1,
          explanation:
            "$x^2=-1$ has no real solution, since no real number squares to a negative value.",
        },
        {
          type: "mc",
          prompt: "Solve $(x-1)^2 = 25$.",
          options: ["$x=6, x=-4$", "$x=6, x=4$", "$x=-6, x=4$", "$x=26, x=-24$"],
          answer: 0,
          marks: 2,
          explanation: "$x-1=\\pm5$, so $x=6$ or $x=-4$.",
        },
        {
          type: "mc",
          prompt: "Solve $3x^2 - 12 = 0$.",
          options: ["$x=\\pm 2$", "$x=\\pm 4$", "$x=\\pm 6$", "$x=2$ only"],
          answer: 0,
          marks: 2,
          explanation: "$3x^2=12 \\Rightarrow x^2=4 \\Rightarrow x=\\pm 2$.",
        },
        {
          type: "matching",
          prompt: "Match each equation to its solution set.",
          left: ["$x^2-25=0$", "$x^2+4x+3=0$", "$x^2=9$", "$x^2+16=0$"],
          options: ["No real solution", "$x=\\pm 3$", "$x=-1,x=-3$", "$x=\\pm 5$"],
          answer: [3, 2, 1, 0],
          marks: 4,
          explanation:
            "Each equation solves via difference of squares, trinomial factoring, or the square-root method.",
        },
        {
          type: "mc",
          prompt: "Solve $x^2 - 5x - 24 = 0$.",
          options: ["$x=8, x=-3$", "$x=-8, x=3$", "$x=8, x=3$", "$x=-8, x=-3$"],
          answer: 0,
          marks: 2,
          explanation: "$(x-8)(x+3)=0$, so $x=8$ or $x=-3$.",
        },
        {
          type: "multi",
          prompt: "Select every equation with exactly two real solutions.",
          options: ["$x^2=36$", "$x^2+9=0$", "$x^2-7x+12=0$", "$(x-2)^2=0$"],
          answers: [0, 2],
          marks: 3,
          explanation:
            "$x^2+9=0$ has no real solution, and $(x-2)^2=0$ has exactly one repeated root ($x=2$), not two distinct solutions.",
        },
        {
          type: "mc",
          prompt: "A square plot of land has an area of 225 m². Find its perimeter.",
          options: ["60 m", "15 m", "225 m", "30 m"],
          answer: 0,
          marks: 2,
          explanation:
            "Side $=\\sqrt{225}=15$ m (rejecting the negative root), so perimeter $=4 \\times 15=60$ m.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "quadraticSolverExplorer", label: "Use the factoring and square-root laboratory" },
        { key: "quadraticFactoringPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
