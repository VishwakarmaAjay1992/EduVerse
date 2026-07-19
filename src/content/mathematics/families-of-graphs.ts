import type { LessonContent } from "@/lib/lesson-content-types";

export const familiesOfGraphs: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "functions-and-graphs",
  lessonSlug: "families-of-graphs",
  title: "Families of Graphs",
  objectives: [
    "Recognise the characteristic shape of linear, quadratic, cubic and reciprocal graphs.",
    "Identify key features of each graph family: intercepts, symmetry, and asymptotic behaviour.",
    "Sketch and interpret piecewise functions.",
    "Sketch and interpret absolute value graphs.",
    "Match an equation to its graph family and vice versa.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Different types of functions produce visually distinctive graph shapes — once you recognise these shapes, you can sketch a rough graph almost instantly, without plotting dozens of points. This lesson tours the essential graph families: straight lines, parabolas, cubic curves, reciprocal curves, absolute value V-shapes, and piecewise functions built from several rules.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes comfort with function notation from What Is a Function? and with parabolas from the Quadratic Equations chapter.",
      ],
    },
    {
      kind: "theory",
      heading: "Linear graphs",
      paragraphs: [
        "A linear function $y = mx + c$ produces a straight line. Every straight (non-vertical) line is the graph of some linear function, and it's the only family here with no curvature at all.",
      ],
    },
    {
      kind: "theory",
      heading: "Quadratic graphs",
      paragraphs: [
        "A quadratic function $y = ax^2 + bx + c$ produces a parabola — symmetric about a vertical axis, with a single turning point (vertex). This family was studied in depth in the Quadratic Equations chapter.",
      ],
    },
    {
      kind: "theory",
      heading: "Cubic graphs",
      paragraphs: [
        "A cubic function $y = ax^3 + bx^2 + cx + d$ has an S-shaped curve. The simplest cubic, $y = x^3$, passes through the origin, is symmetric about the origin (rotating it 180° gives the same graph), and — unlike a parabola — has no maximum or minimum overall; it keeps rising (or falling) without bound in both directions.",
      ],
    },
    {
      kind: "theory",
      heading: "Reciprocal graphs",
      paragraphs: [
        "A reciprocal function $y = \\dfrac{k}{x}$ produces two separate curved branches, one in each of a pair of opposite quadrants. The graph never touches the axes — as $x$ approaches 0, $y$ shoots off toward infinity, and as $x$ grows large, $y$ approaches 0 but never quite reaches it. These 'never touches' lines are called asymptotes.",
      ],
    },
    {
      kind: "functionFamiliesExplorer",
      heading: "Interactive: explore each graph family",
    },
    {
      kind: "table",
      heading: "Graph families at a glance",
      headers: ["Family", "Equation", "Key feature"],
      rows: [
        ["Linear", "$y=mx+c$", "Straight line, constant slope"],
        ["Quadratic", "$y=ax^2+bx+c$", "Parabola with one turning point"],
        ["Cubic", "$y=ax^3+bx^2+cx+d$", "S-shaped curve, no overall max/min"],
        ["Reciprocal", "$y=k/x$", "Two branches, asymptotes at both axes"],
        ["Absolute value", "$y=|x|$", "V-shape, sharp corner at the vertex"],
      ],
    },
    {
      kind: "theory",
      heading: "Absolute value graphs",
      paragraphs: [
        "The absolute value function $y = |x|$ strips away any negative sign, so its graph is a V-shape with a sharp corner at the origin: for $x \\ge 0$, $y=x$; for $x<0$, $y=-x$. Every point on the graph is at or above the x-axis, since absolute value is always non-negative.",
      ],
    },
    {
      kind: "example",
      prompt: "Sketch $y = |x - 2|$ by finding its value at $x=-1, 0, 2, 4, 5$.",
      steps: [
        "$x=-1$: $y=|-1-2|=|-3|=3$.",
        "$x=0$: $y=|0-2|=|-2|=2$.",
        "$x=2$: $y=|2-2|=|0|=0$.",
        "$x=4$: $y=|4-2|=|2|=2$.",
        "$x=5$: $y=|5-2|=|3|=3$.",
      ],
      answer:
        "The graph is a V-shape with its corner (vertex) at $(2, 0)$ — the whole $y=|x|$ shape shifted 2 units right.",
    },
    {
      kind: "theory",
      heading: "Piecewise functions",
      paragraphs: [
        "A piecewise function is defined by different rules on different intervals of the domain. To evaluate a piecewise function at a given input, first identify which interval that input falls into, then apply only the rule for that interval.",
      ],
    },
    {
      kind: "formula",
      latex: "f(x) = \\begin{cases} -x & x < 0 \\\\ x^2 & x \\ge 0 \\end{cases}",
      caption:
        "An example piecewise function — different rules apply depending on whether x is negative or non-negative.",
    },
    {
      kind: "example",
      prompt: "For the piecewise function above, find $f(-3)$ and $f(4)$.",
      steps: [
        "For $f(-3)$: since $-3 < 0$, use the rule $f(x)=-x$: $f(-3) = -(-3)=3$.",
        "For $f(4)$: since $4 \\ge 0$, use the rule $f(x)=x^2$: $f(4)=4^2=16$.",
      ],
      answer: "$f(-3) = 3$ and $f(4) = 16$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Check which piece applies first",
      body: "The most common mistake with piecewise functions is applying the wrong rule. Always identify which interval the input belongs to before doing any arithmetic.",
    },
    {
      kind: "realWorld",
      heading: "Where these graph families appear",
      items: [
        {
          area: "Linear",
          text: "Constant-rate situations like a taxi fare that increases steadily with distance.",
        },
        {
          area: "Quadratic",
          text: "Projectile height over time, and area/profit optimisation problems.",
        },
        { area: "Cubic", text: "Volume as a function of a scaling side length." },
        {
          area: "Reciprocal",
          text: "Inverse proportion, such as speed needed to cover a fixed distance in varying time.",
        },
        {
          area: "Piecewise",
          text: "Tax brackets, shipping costs with different rates by weight, and tiered pricing.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Shape of a linear graph?", back: "A straight line." },
        {
          front: "Shape of a cubic graph?",
          back: "An S-shaped curve, no overall maximum or minimum.",
        },
        { front: "What is an asymptote?", back: "A line the graph approaches but never touches." },
        { front: "Shape of $y=|x|$?", back: "A V-shape with a sharp corner at the vertex." },
        {
          front: "How do you evaluate a piecewise function?",
          back: "Identify which interval the input falls into, then apply only that rule.",
        },
        {
          front: "Does a reciprocal graph touch the axes?",
          back: "No — it has asymptotes at both axes.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: families of graphs",
      stepKey: "familiesOfGraphsPractice",
      questions: [
        {
          prompt: "Which family produces a straight-line graph?",
          options: ["Linear", "Quadratic", "Cubic", "Reciprocal"],
          answer: 0,
          explanation: "$y=mx+c$ always graphs as a straight line.",
        },
        {
          prompt: "Which family has an S-shaped curve with no overall maximum or minimum?",
          options: ["Cubic", "Quadratic", "Reciprocal", "Absolute value"],
          answer: 0,
          explanation: "Cubic functions like $y=x^3$ keep rising or falling without bound.",
        },
        {
          prompt: "What is an asymptote?",
          options: [
            "A line the graph approaches but never touches",
            "The graph's turning point",
            "The graph's y-intercept",
            "A line of symmetry",
          ],
          answer: 0,
          explanation: "Asymptotes describe behaviour the graph approaches but never reaches.",
        },
        {
          prompt: "Evaluate $|{-7}|$.",
          options: ["7", "-7", "0", "14"],
          answer: 0,
          explanation: "Absolute value strips the negative sign: $|-7|=7$.",
        },
        {
          prompt: "For $f(x)=|x-3|$, find $f(1)$.",
          options: ["2", "-2", "4", "1"],
          answer: 0,
          explanation: "$f(1)=|1-3|=|-2|=2$.",
        },
        {
          prompt:
            "For the piecewise function $f(x) = x+1$ if $x<2$, $f(x)=2x$ if $x \\ge 2$, find $f(5)$.",
          options: ["10", "6", "9", "11"],
          answer: 0,
          explanation: "Since $5 \\ge 2$, use $f(x)=2x$: $f(5)=10$.",
        },
        {
          prompt: "For the same piecewise function, find $f(-1)$.",
          options: ["0", "-1", "1", "-2"],
          answer: 0,
          explanation: "Since $-1<2$, use $f(x)=x+1$: $f(-1)=0$.",
        },
        {
          prompt: "The vertex of $y = |x + 4|$ is at:",
          options: ["$(-4, 0)$", "$(4, 0)$", "$(0, 4)$", "$(0, -4)$"],
          answer: 0,
          explanation: "$y=|x-h|$ has its vertex at $(h,0)$; here $h=-4$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Applying the wrong piece of a piecewise function, e.g. checking the interval after doing the arithmetic.",
          right:
            "Always identify which interval the input belongs to FIRST, then apply only that rule.",
        },
        {
          wrong: "Thinking a reciprocal graph touches the x- or y-axis.",
          right: "Reciprocal graphs have asymptotes at both axes and never actually touch them.",
        },
        {
          wrong: "Assuming every absolute value graph has its vertex at the origin.",
          right:
            "The vertex moves with any shift inside or outside the absolute value bars, e.g. $y=|x-3|$ has vertex $(3,0)$.",
        },
        {
          wrong: "Confusing a cubic graph's shape with a parabola's.",
          right:
            "A cubic is S-shaped with no overall turning point; a parabola has exactly one turning point (the vertex).",
        },
        {
          wrong: "Evaluating $|{-5}|$ as $-5$.",
          right: "Absolute value is always non-negative: $|-5|=5$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Linear graphs are straight lines; quadratic graphs are parabolas with one turning point.",
        "Cubic graphs are S-shaped with no overall maximum or minimum.",
        "Reciprocal graphs have two branches and asymptotes at both axes.",
        "Absolute value graphs are V-shaped, always non-negative, with a sharp corner at the vertex.",
        "Piecewise functions apply different rules on different intervals — always check which interval an input falls into first.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: families of graphs",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which family produces a parabola?",
          options: ["Quadratic", "Linear", "Cubic", "Reciprocal"],
          answer: 0,
          marks: 1,
          explanation: "Quadratic functions $y=ax^2+bx+c$ graph as parabolas.",
        },
        {
          type: "mc",
          prompt: "Evaluate $|{-12}|$.",
          options: ["12", "-12", "0", "24"],
          answer: 0,
          marks: 1,
          explanation: "$|-12|=12$.",
        },
        {
          type: "tf",
          prompt: "A reciprocal graph touches both axes.",
          answer: false,
          marks: 1,
          explanation: "Reciprocal graphs have asymptotes and never touch either axis.",
        },
        {
          type: "mc",
          prompt: "The vertex of $y = |x - 5|$ is at:",
          options: ["$(5, 0)$", "$(-5, 0)$", "$(0, 5)$", "$(0, -5)$"],
          answer: 0,
          marks: 2,
          explanation: "The vertex of $y=|x-h|$ is $(h,0)$.",
        },
        {
          type: "mc",
          prompt: "For $f(x)=3x$ if $x \\le 0$, $f(x)=x^2$ if $x>0$, find $f(-2)$.",
          options: ["-6", "4", "6", "-4"],
          answer: 0,
          marks: 2,
          explanation: "Since $-2 \\le 0$, use $f(x)=3x$: $f(-2)=-6$.",
        },
        {
          type: "matching",
          prompt: "Match each equation to its graph family.",
          left: ["$y=2x-1$", "$y=x^3$", "$y=\\dfrac{4}{x}$", "$y=x^2+1$"],
          options: ["Cubic", "Quadratic", "Linear", "Reciprocal"],
          answer: [2, 0, 3, 1],
          marks: 4,
          explanation: "Each equation's form matches its named family directly.",
        },
        {
          type: "mc",
          prompt:
            "For the same piecewise function ($f(x)=3x$ if $x \\le 0$, $f(x)=x^2$ if $x>0$), find $f(3)$.",
          options: ["9", "6", "-9", "3"],
          answer: 0,
          marks: 2,
          explanation: "Since $3>0$, use $f(x)=x^2$: $f(3)=9$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about graph families.",
          options: [
            "A cubic graph can have no turning points at all.",
            "A quadratic graph always has exactly one turning point.",
            "An absolute value graph can dip below the x-axis.",
            "A reciprocal graph has two separate branches.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "Absolute value output is always non-negative, so its graph never dips below the x-axis.",
        },
        {
          type: "mc",
          prompt: "Which equation would produce a V-shaped graph?",
          options: ["$y=|x+2|$", "$y=x^2+2$", "$y=2x+1$", "$y=2/x$"],
          answer: 0,
          marks: 2,
          explanation: "Absolute value functions produce V-shaped graphs.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "functionFamiliesExplorer", label: "Explore each graph family" },
        { key: "familiesOfGraphsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
