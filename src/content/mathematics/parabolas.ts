import type { LessonContent } from "@/lib/lesson-content-types";

export const parabolas: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "quadratic-equations",
  lessonSlug: "parabolas",
  title: "Parabolas",
  objectives: [
    "Identify the shape and key features of a parabola.",
    "Convert a quadratic function between standard form and vertex form.",
    "Find a parabola's vertex, axis of symmetry, and y-intercept from its equation.",
    "Find a parabola's x-intercepts (roots) and connect them to the discriminant.",
    "Determine whether a parabola opens upward or downward and interpret its vertex as a maximum or minimum.",
    "Apply parabolas to real-world maximum and minimum problems.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Every quadratic function $y = ax^2+bx+c$ graphs as a parabola — a smooth, symmetric U-shaped (or upside-down U-shaped) curve. Rather than plotting point by point, you can sketch a parabola quickly once you know a handful of key features: its vertex (the turning point), its axis of symmetry, and where it crosses the axes.",
        "This lesson connects the algebra from the previous two lessons directly to the graph: the roots you solved for are exactly the x-intercepts, and the discriminant tells you how many times the curve crosses the x-axis before you even draw it.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson depends on Solving by Factoring and Square Roots and Completing the Square and the Quadratic Formula — you should be comfortable finding roots and calculating the discriminant, and familiar with plotting points on the coordinate plane from The Cartesian Plane.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Parabola, vertex, axis of symmetry",
      body: "A parabola is the U-shaped graph of a quadratic function. Its vertex is the single turning point — the minimum point if the parabola opens upward, or the maximum point if it opens downward. The axis of symmetry is the vertical line through the vertex; the parabola is a mirror image of itself across this line.",
    },
    {
      kind: "theory",
      heading: "Standard form and vertex form",
      paragraphs: [
        "Standard form, $y = ax^2+bx+c$, is convenient for reading off the y-intercept directly ($c$). Vertex form, $y = a(x-h)^2+k$, is convenient for reading off the vertex directly: the vertex is at $(h, k)$.",
        "In both forms, $a$ controls the parabola's width and direction: a positive $a$ opens upward (the vertex is a minimum), and a negative $a$ opens downward (the vertex is a maximum). A larger $|a|$ makes the parabola narrower; a smaller $|a|$ makes it wider.",
      ],
    },
    {
      kind: "formula",
      latex:
        "y = ax^2+bx+c \\quad \\Longleftrightarrow \\quad y = a(x-h)^2+k, \\quad h = -\\dfrac{b}{2a}, \\quad k = f(h)",
      caption:
        "The vertex's x-coordinate always equals $-b/(2a)$, whichever form you started from.",
    },
    {
      kind: "example",
      prompt: "Find the vertex of $y = x^2 - 6x + 5$ using the standard-form formula.",
      steps: [
        "Identify coefficients: $a=1$, $b=-6$, $c=5$.",
        "Find the x-coordinate of the vertex: $h = -\\dfrac{b}{2a} = -\\dfrac{-6}{2(1)} = 3$.",
        "Find the y-coordinate by substituting $x=3$: $y = 3^2-6(3)+5 = 9-18+5=-4$.",
      ],
      answer: "Vertex at $(3, -4)$. Since $a=1>0$, this is a minimum point.",
    },
    {
      kind: "example",
      prompt: "Convert $y = x^2 - 6x + 5$ into vertex form.",
      steps: [
        "Using the vertex found above, $(h,k)=(3,-4)$.",
        "Write in vertex form: $y = a(x-h)^2+k = 1(x-3)^2-4$.",
      ],
      answer: "$y = (x-3)^2 - 4$.",
    },
    {
      kind: "theory",
      heading: "Roots, y-intercept, and the discriminant",
      paragraphs: [
        "The y-intercept of $y=ax^2+bx+c$ is always $(0, c)$, found by substituting $x=0$. The x-intercepts (roots) are found by solving $ax^2+bx+c=0$ using any of the methods from the last two lessons — and the discriminant tells you how many x-intercepts to expect before you solve.",
      ],
    },
    {
      kind: "table",
      heading: "Discriminant and the graph",
      headers: ["Discriminant", "x-intercepts", "Picture"],
      rows: [
        ["Positive", "Two", "Parabola crosses the x-axis at two points"],
        ["Zero", "One (the vertex itself)", "Parabola's vertex touches the x-axis"],
        ["Negative", "None", "Parabola stays entirely above or below the x-axis"],
      ],
    },
    {
      kind: "parabolaGraphExplorer",
      heading: "Interactive: parabola grapher with live vertex, axis and intercepts",
    },
    {
      kind: "example",
      prompt: "Find the x-intercepts and y-intercept of $y = x^2 - x - 6$.",
      steps: [
        "y-intercept: substitute $x=0$: $y = 0-0-6=-6$, giving $(0,-6)$.",
        "x-intercepts: solve $x^2-x-6=0$ by factoring: $(x-3)(x+2)=0$.",
        "So $x=3$ or $x=-2$, giving intercepts $(3,0)$ and $(-2,0)$.",
      ],
      answer: "y-intercept $(0,-6)$; x-intercepts $(3,0)$ and $(-2,0)$.",
    },
    {
      kind: "example",
      prompt: "Without solving, state how many x-intercepts $y = 2x^2 - 4x + 5$ has.",
      steps: [
        "Calculate the discriminant: $b^2-4ac = (-4)^2-4(2)(5) = 16-40=-24$.",
        "A negative discriminant means no real roots.",
      ],
      answer:
        "No x-intercepts — the parabola stays entirely above the x-axis (since $a=2>0$, it opens upward and its minimum value is positive).",
    },
    {
      kind: "theory",
      heading: "Maximum and minimum applications",
      paragraphs: [
        "Because a parabola's vertex is its single highest or lowest point, quadratic models are the natural tool for optimisation problems — finding a maximum profit, a maximum height, or a minimum cost. The vertex's y-coordinate gives the optimal value, and its x-coordinate gives the input that achieves it.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A ball is thrown upward, and its height in metres after $t$ seconds is $h(t) = -5t^2+20t+1$. Find the maximum height and when it occurs.",
      steps: [
        "Identify coefficients: $a=-5$, $b=20$, $c=1$.",
        "Find the time of the vertex: $t = -\\dfrac{b}{2a} = -\\dfrac{20}{2(-5)} = 2$.",
        "Find the maximum height by substituting $t=2$: $h(2) = -5(2)^2+20(2)+1 = -20+40+1=21$.",
      ],
      answer:
        "The ball reaches a maximum height of 21 m at $t=2$ seconds. Since $a=-5<0$, the parabola opens downward, confirming this is a maximum.",
    },
    {
      kind: "example",
      prompt:
        "A shop's weekly profit in riyals from selling shirts at $x$ riyals each is modelled by $P(x) = -10x^2+400x-2000$. Find the price that maximises profit, and the maximum profit.",
      steps: [
        "Identify coefficients: $a=-10$, $b=400$, $c=-2000$.",
        "Find the vertex's x-coordinate: $x = -\\dfrac{400}{2(-10)} = 20$.",
        "Find the maximum profit: $P(20) = -10(20)^2+400(20)-2000 = -4000+8000-2000=2000$.",
      ],
      answer:
        "A price of 20 riyals maximises profit, giving a maximum weekly profit of 2,000 riyals.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Sign of a tells you max or min",
      body: "If $a>0$, the parabola opens upward and the vertex is a minimum. If $a<0$, the parabola opens downward and the vertex is a maximum. Check this sign before deciding whether a real-world problem wants you to look for a peak or a trough.",
    },
    {
      kind: "realWorld",
      heading: "Where parabolas appear",
      items: [
        {
          area: "Projectile motion",
          text: "The height of a thrown or launched object over time follows a parabola.",
        },
        {
          area: "Business",
          text: "Profit and revenue models often peak at a single optimal price, modelled by a parabola.",
        },
        {
          area: "Architecture",
          text: "Parabolic arches and suspension-bridge cables distribute load efficiently.",
        },
        {
          area: "Satellite dishes",
          text: "Parabolic reflectors focus signals to a single point (the focus).",
        },
        {
          area: "Sports",
          text: "The path of a kicked or thrown ball closely follows a parabolic arc.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Vertex x-coordinate formula?", back: "$h = -b/(2a)$." },
        { front: "Vertex form of a quadratic?", back: "$y=a(x-h)^2+k$, vertex at $(h,k)$." },
        { front: "y-intercept of $y=ax^2+bx+c$?", back: "$(0, c)$." },
        {
          front: "When does the parabola open upward?",
          back: "When $a > 0$; the vertex is then a minimum.",
        },
        {
          front: "When does the parabola open downward?",
          back: "When $a < 0$; the vertex is then a maximum.",
        },
        {
          front: "How many x-intercepts if the discriminant is negative?",
          back: "None — the parabola never crosses the x-axis.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: parabolas",
      stepKey: "parabolasPractice",
      questions: [
        {
          prompt: "Find the vertex of $y = x^2 - 4x + 3$.",
          options: ["$(2,-1)$", "$(2,3)$", "$(-2,-1)$", "$(4,3)$"],
          answer: 0,
          explanation: "$h=-(-4)/2=2$; $y=4-8+3=-1$. Vertex $(2,-1)$.",
        },
        {
          prompt: "What is the y-intercept of $y = 3x^2 + 2x - 7$?",
          options: ["$(0,-7)$", "$(0,2)$", "$(0,3)$", "$(-7,0)$"],
          answer: 0,
          explanation: "Substituting $x=0$ gives $y=-7$.",
        },
        {
          prompt: "Does $y = -2x^2 + 8x - 3$ open upward or downward?",
          options: ["Downward (maximum)", "Upward (minimum)", "Neither", "Cannot be determined"],
          answer: 0,
          explanation: "Since $a=-2<0$, the parabola opens downward, with a maximum at the vertex.",
        },
        {
          prompt: "Find the x-intercepts of $y = x^2 - 5x + 6$.",
          options: ["$x=2, x=3$", "$x=-2, x=-3$", "$x=2, x=-3$", "$x=6, x=-1$"],
          answer: 0,
          explanation: "$(x-2)(x-3)=0$, so $x=2$ or $x=3$.",
        },
        {
          prompt: "Without solving, how many x-intercepts does $y = x^2 + 2x + 5$ have?",
          options: ["0", "1", "2", "3"],
          answer: 0,
          explanation: "Discriminant $=4-20=-16$, negative, so no x-intercepts.",
        },
        {
          prompt: "Convert $y = x^2 + 4x + 1$ into vertex form.",
          options: ["$y=(x+2)^2-3$", "$y=(x+2)^2+3$", "$y=(x-2)^2-3$", "$y=(x+4)^2-3$"],
          answer: 0,
          explanation: "$h=-4/2=-2$; $y=4-8+1=-3$. Vertex form: $y=(x+2)^2-3$.",
        },
        {
          prompt:
            "A ball's height is $h(t)=-5t^2+30t$. At what time does it reach its maximum height?",
          options: ["3 s", "5 s", "6 s", "30 s"],
          answer: 0,
          explanation: "$t=-30/(2\\times-5)=3$.",
        },
        {
          prompt: "For the same ball, $h(t)=-5t^2+30t$, what is the maximum height?",
          options: ["45 m", "30 m", "15 m", "90 m"],
          answer: 0,
          explanation: "$h(3)=-5(9)+30(3)=-45+90=45$.",
        },
        {
          prompt: "Which value of $a$ makes a parabola both narrower and opening downward?",
          options: ["$a=-3$", "$a=-0.5$", "$a=3$", "$a=0.5$"],
          answer: 0,
          explanation:
            "A more negative $a$ (larger magnitude) narrows the parabola while keeping it opening downward.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Forgetting the negative sign in the vertex formula, e.g. computing $h = b/(2a)$ instead of $h=-b/(2a)$.",
          right: "The formula requires the negative sign: $h = -b/(2a)$.",
        },
        {
          wrong:
            "Reading the vertex as $(k,h)$ instead of $(h,k)$ from vertex form $y=a(x-h)^2+k$.",
          right:
            "In $y=a(x-h)^2+k$, the vertex is $(h,k)$ — the x-coordinate comes from inside the bracket (with a sign flip), the y-coordinate is the added constant.",
        },
        {
          wrong: "Assuming every parabola crosses the x-axis twice.",
          right: "The number of x-intercepts depends on the discriminant: it could be 0, 1, or 2.",
        },
        {
          wrong: "Confusing the sign of $a$: assuming a negative $a$ means a minimum.",
          right:
            "A negative $a$ means the parabola opens downward, so the vertex is a MAXIMUM, not a minimum.",
        },
        {
          wrong:
            "Substituting the wrong value when finding the y-intercept, e.g. using $x=1$ instead of $x=0$.",
          right: "The y-intercept always comes from substituting $x=0$, giving the point $(0, c)$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A parabola is the graph of a quadratic function; its vertex is the single minimum ($a>0$) or maximum ($a<0$) point.",
        "The vertex's x-coordinate is always $h=-b/(2a)$; substitute back to find $k$.",
        "Vertex form $y=a(x-h)^2+k$ reads the vertex off directly; standard form $y=ax^2+bx+c$ reads the y-intercept $(0,c)$ off directly.",
        "x-intercepts are the roots of $ax^2+bx+c=0$; the discriminant predicts how many there are (0, 1, or 2) before solving.",
        "Real-world maximum/minimum problems (height, profit, area) are solved by finding the vertex of the modelling parabola.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: parabolas",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Find the vertex of $y = x^2 - 2x - 3$.",
          options: ["$(1,-4)$", "$(1,-3)$", "$(-1,-4)$", "$(2,-3)$"],
          answer: 0,
          marks: 1,
          explanation: "$h=1$; $y=1-2-3=-4$. Vertex $(1,-4)$.",
        },
        {
          type: "mc",
          prompt: "What is the y-intercept of $y = -2x^2 + x + 9$?",
          options: ["$(0,9)$", "$(0,-2)$", "$(9,0)$", "$(0,1)$"],
          answer: 0,
          marks: 1,
          explanation: "Substituting $x=0$ gives $y=9$.",
        },
        {
          type: "tf",
          prompt: "A parabola with $a > 0$ has a maximum point at its vertex.",
          answer: false,
          marks: 1,
          explanation:
            "A positive $a$ means the parabola opens upward, so the vertex is a minimum, not a maximum.",
        },
        {
          type: "mc",
          prompt: "Find the x-intercepts of $y = x^2 + x - 12$.",
          options: ["$x=3, x=-4$", "$x=-3, x=4$", "$x=3, x=4$", "$x=-3, x=-4$"],
          answer: 0,
          marks: 2,
          explanation: "$(x-3)(x+4)=0$, so $x=3$ or $x=-4$.",
        },
        {
          type: "mc",
          prompt: "Without solving, how many x-intercepts does $y = -x^2 + 4x - 4$ have?",
          options: ["1", "0", "2", "Cannot be determined"],
          answer: 0,
          marks: 2,
          explanation:
            "Discriminant $=16-16=0$, so exactly one x-intercept (the vertex touches the axis).",
        },
        {
          type: "matching",
          prompt: "Match each equation to its vertex.",
          left: ["$y=(x-2)^2+5$", "$y=(x+1)^2-3$", "$y=x^2$", "$y=(x-4)^2-1$"],
          options: ["$(0,0)$", "$(-1,-3)$", "$(4,-1)$", "$(2,5)$"],
          answer: [3, 1, 0, 2],
          marks: 4,
          explanation: "In vertex form $y=a(x-h)^2+k$, the vertex is directly $(h,k)$.",
        },
        {
          type: "mc",
          prompt:
            "A stone thrown from a cliff has height $h(t)=-5t^2+10t+20$. Find the maximum height.",
          options: ["25 m", "20 m", "15 m", "30 m"],
          answer: 0,
          marks: 2,
          explanation: "$t=-10/(2\\times-5)=1$; $h(1)=-5+10+20=25$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about parabolas.",
          options: [
            "Every parabola is symmetric about its axis of symmetry.",
            "The vertex's x-coordinate is $-b/(2a)$.",
            "A wider parabola has a larger $|a|$.",
            "The y-intercept of $y=ax^2+bx+c$ is always $(0,c)$.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "A LARGER $|a|$ makes the parabola NARROWER, not wider — a smaller $|a|$ makes it wider.",
        },
        {
          type: "mc",
          prompt:
            "A company's profit is $P(x)=-4x^2+160x-1200$, where $x$ is price. Find the price that maximises profit.",
          options: ["20", "40", "30", "160"],
          answer: 0,
          marks: 2,
          explanation: "$x=-160/(2\\times-4)=20$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "parabolaGraphExplorer", label: "Use the parabola grapher" },
        { key: "parabolasPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
