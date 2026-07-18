import type { LessonContent } from "@/lib/lesson-content-types";

export const directAndInverseProportion: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "percentages-ratio-and-proportion",
  lessonSlug: "direct-and-inverse-proportion",
  title: "Direct and Inverse Proportion",
  objectives: [
    "Distinguish between direct and inverse proportion.",
    "Recognise proportional relationships in tables and graphs.",
    "Find and use the constant of proportionality.",
    "Solve direct and inverse proportion problems with the unitary method.",
    "Apply proportional reasoning to speed, cost, workforce and mixture problems.",
    "Spot common misconceptions where things look proportional but are not.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Proportion is what happens when two quantities change together in a predictable way. Sometimes they grow and shrink together — that is direct proportion. Sometimes one grows while the other shrinks — that is inverse proportion.",
        "In both cases there is a constant relationship hiding inside the numbers. Once you find that constant, every question about the pair becomes easy.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Direct and inverse proportion",
      body: "Two quantities $x$ and $y$ are in direct proportion when $y = k x$ for some constant $k \\neq 0$. They are in inverse proportion when $y = \\dfrac{k}{x}$ for some constant $k \\neq 0$. The number $k$ is called the constant of proportionality.",
    },
    {
      kind: "theory",
      heading: "Direct proportion",
      paragraphs: [
        "In direct proportion, if you double one quantity you double the other; if you halve one, you halve the other. The ratio $\\dfrac{y}{x}$ stays constant.",
        "You will see direct proportion when a cost is per unit (5 riyals per kilogram) or a rate is fixed (60 km per hour). The graph of a directly proportional relationship is a straight line passing through the origin, with equation $y = kx$.",
      ],
      list: [
        "Symbol: $y \\propto x$, read 'y is proportional to x'.",
        "Formula: $y = kx$.",
        "Fingerprint in a table: the ratio $\\tfrac{y}{x}$ is the same in every row.",
        "Graph: a straight line through the origin.",
      ],
    },
    {
      kind: "theory",
      heading: "Inverse proportion",
      paragraphs: [
        "In inverse proportion, one quantity increases exactly as fast as the other decreases. Doubling one halves the other; tripling one thirds the other. The product $x \\times y$ stays constant.",
        "This is the pattern for problems where a fixed total is being shared out. If it takes 4 workers 6 hours to build a wall, then 8 workers should take 3 hours — twice the workforce, half the time.",
      ],
      list: [
        "Symbol: $y \\propto \\dfrac{1}{x}$, read 'y is inversely proportional to x'.",
        "Formula: $y = \\dfrac{k}{x}$, or equivalently $xy = k$.",
        "Fingerprint in a table: the product $x \\times y$ is the same in every row.",
        "Graph: a curve (hyperbola) that never touches either axis.",
      ],
    },
    {
      kind: "comparison",
      heading: "Direct vs inverse — spot the difference",
      left: {
        title: "Direct proportion",
        items: [
          "As $x$ increases, $y$ increases in the same ratio.",
          "$\\dfrac{y}{x}$ is constant.",
          "Formula: $y = kx$.",
          "Graph: straight line through the origin.",
          "Example: cost of petrol against litres bought.",
        ],
      },
      right: {
        title: "Inverse proportion",
        items: [
          "As $x$ increases, $y$ decreases in the same ratio.",
          "$x \\, y$ is constant.",
          "Formula: $y = \\dfrac{k}{x}$.",
          "Graph: curve approaching (but not touching) both axes.",
          "Example: time to finish a job against number of workers.",
        ],
      },
    },
    {
      kind: "theory",
      heading: "Finding the constant of proportionality",
      paragraphs: [
        "In direct proportion, $k = \\dfrac{y}{x}$. Choose any pair of values from the table or problem and divide.",
        "In inverse proportion, $k = x \\, y$. Multiply any pair.",
        "Once you know $k$, you have a formula that gives $y$ for any $x$ (or vice versa).",
      ],
    },
    {
      kind: "example",
      prompt:
        "The table shows the mass of copper wire against its length. Show that mass is directly proportional to length and find the formula.",
      steps: [
        "Table: 2 m weighs 30 g; 5 m weighs 75 g; 8 m weighs 120 g.",
        "Test $\\dfrac{y}{x}$ in every row: $\\tfrac{30}{2} = 15$, $\\tfrac{75}{5} = 15$, $\\tfrac{120}{8} = 15$.",
        "The ratio is constant, so $y$ is directly proportional to $x$.",
        "The constant of proportionality is $k = 15$ g per metre, giving the formula $y = 15x$.",
      ],
      answer:
        "Mass $y$ is directly proportional to length $x$ with $y = 15x$, i.e. 15 g per metre.",
    },
    {
      kind: "example",
      prompt:
        "It takes 6 workers 8 hours to paint a hall. If the number of workers is inversely proportional to the time, how long will 4 workers take (assuming they work at the same rate)?",
      steps: [
        "Let $x$ = number of workers, $y$ = hours. Then $xy = k$.",
        "Substitute the given pair: $6 \\times 8 = 48$, so $k = 48$.",
        "For 4 workers: $4 \\times y = 48$, so $y = 12$.",
      ],
      answer: "4 workers will take 12 hours.",
    },
    {
      kind: "theory",
      heading: "The unitary method",
      paragraphs: [
        "The unitary method is a friendly way to solve proportion problems without needing to remember any formula. The idea is simple: work out the value for one unit first, then multiply by the number of units you want.",
        "It works for both direct and inverse proportion, provided you take care with which quantity is changing.",
      ],
    },
    {
      kind: "example",
      prompt:
        "If 8 pens cost 60 riyals, how much do 14 pens cost, assuming the cost is directly proportional to the number of pens?",
      steps: [
        "Find the cost of one pen: $60 \\div 8 = 7.50$ riyals.",
        "Multiply by 14: $7.50 \\times 14 = 105$ riyals.",
      ],
      answer: "14 pens cost 105 riyals.",
    },
    {
      kind: "example",
      prompt:
        "A car travelling at 60 km/h takes 4 hours to reach a city. How long does the same journey take at 80 km/h?",
      steps: [
        "Time and speed are inversely proportional for a fixed distance.",
        "The distance is fixed: $60 \\times 4 = 240$ km, so $k = 240$.",
        "At 80 km/h: $\\text{time} = \\tfrac{240}{80} = 3$ hours.",
      ],
      answer: "The journey takes 3 hours at 80 km/h.",
    },
    {
      kind: "table",
      heading: "Reading proportion from a table",
      headers: ["$x$", "$y_{\\text{direct}}$", "$y_{\\text{inverse}}$"],
      rows: [
        ["1", "4", "24"],
        ["2", "8", "12"],
        ["3", "12", "8"],
        ["4", "16", "6"],
        ["6", "24", "4"],
      ],
      note: "In the direct column, $\\tfrac{y}{x} = 4$ throughout. In the inverse column, $xy = 24$ throughout.",
    },
    {
      kind: "theory",
      heading: "Graphs of direct and inverse proportion",
      paragraphs: [
        "The graph of $y = kx$ is a straight line through the origin with gradient $k$. If your data plots on such a line, direct proportion is confirmed.",
        "The graph of $y = \\dfrac{k}{x}$ is a curve called a rectangular hyperbola. It sweeps down from top left to bottom right in the first quadrant, gets closer and closer to both axes but never touches them.",
        "A straight line that does not pass through the origin (such as $y = 3x + 2$) is a linear relationship but not a proportional one, because doubling $x$ does not double $y$.",
      ],
    },
    {
      kind: "cards",
      heading: "Recognising proportion",
      columns: 3,
      items: [
        {
          title: "Constant ratio",
          value: "$\\dfrac{y}{x} = k$",
          text: "Direct proportion in a table.",
        },
        {
          title: "Constant product",
          value: "$x y = k$",
          text: "Inverse proportion in a table.",
        },
        {
          title: "Line through origin",
          value: "$y = kx$",
          text: "Direct proportion on a graph.",
        },
        {
          title: "Curve, not line",
          value: "$y = \\dfrac{k}{x}$",
          text: "Inverse proportion on a graph.",
        },
        {
          title: "Line, but not through origin",
          value: "$y = mx + c$, $c \\neq 0$",
          text: "Linear but not proportional.",
        },
      ],
    },
    {
      kind: "example",
      prompt:
        "The variable $y$ is directly proportional to $x$. When $x = 3$, $y = 21$. Find $y$ when $x = 8$.",
      steps: [
        "Because $y$ is directly proportional to $x$, we have $y = kx$.",
        "Substitute the known pair: $21 = 3k$, so $k = 7$.",
        "Use the formula: when $x = 8$, $y = 7 \\times 8 = 56$.",
      ],
      answer: "$y = 56$.",
    },
    {
      kind: "example",
      prompt:
        "The variable $y$ is inversely proportional to $x$. When $x = 5$, $y = 12$. Find $y$ when $x = 20$.",
      steps: [
        "Because $y$ is inversely proportional to $x$, we have $xy = k$.",
        "Substitute the known pair: $5 \\times 12 = 60$, so $k = 60$.",
        "Use the formula: when $x = 20$, $y = \\tfrac{60}{20} = 3$.",
      ],
      answer: "$y = 3$.",
    },
    {
      kind: "theory",
      heading: "Common misconceptions",
      paragraphs: [
        "Not every situation that involves 'the more, the more' is direct proportion. For example, temperature in Fahrenheit and temperature in Celsius both rise together, but they are not proportional because $0^\\circ$C corresponds to $32^\\circ$F, not $0^\\circ$F.",
        "Similarly, not every 'more equals less' relationship is inverse proportion. A shopkeeper's profit might drop as prices rise because customers leave, but the relationship is unlikely to be a perfect $y = k/x$ curve.",
        "The safest habit is to check the fingerprint numerically: constant ratio for direct proportion, constant product for inverse proportion. If neither holds, it is neither.",
      ],
    },
    {
      kind: "realWorld",
      heading: "Where proportion appears",
      items: [
        {
          area: "Shopping",
          text: "The cost of a fixed-price item is directly proportional to how many you buy.",
        },
        {
          area: "Travel",
          text: "For a fixed distance, journey time is inversely proportional to speed.",
        },
        {
          area: "Cooking",
          text: "Recipe ingredients are in direct proportion to the number of servings.",
        },
        {
          area: "Physics",
          text: "For a fixed force, pressure is inversely proportional to the area over which it is applied.",
        },
        {
          area: "Currency",
          text: "The number of riyals you receive from a bank is directly proportional to the number of dollars you exchange at a fixed rate.",
        },
      ],
    },
    {
      kind: "classifyActivity",
      heading: "Activity — direct or inverse?",
      categories: ["Direct proportion", "Inverse proportion"],
      items: [
        {
          term: "The cost of 1 kg of rice at a fixed price against the number of kilograms bought",
          category: "Direct proportion",
        },
        {
          term: "The number of workers building a wall against the time taken to finish (fixed job size)",
          category: "Inverse proportion",
        },
        {
          term: "The distance travelled at a fixed speed against time",
          category: "Direct proportion",
        },
        {
          term: "The speed of a car against the time taken to travel a fixed distance",
          category: "Inverse proportion",
        },
        {
          term: "The mass of a metal bar of fixed density against its volume",
          category: "Direct proportion",
        },
        {
          term: "The number of children sharing a pizza equally against the size of each slice",
          category: "Inverse proportion",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Formula for direct proportion?", back: "$y = kx$." },
        { front: "Formula for inverse proportion?", back: "$y = \\tfrac{k}{x}$, or $xy = k$." },
        {
          front: "How to detect direct proportion from a table?",
          back: "The ratio $\\tfrac{y}{x}$ is the same in every row.",
        },
        {
          front: "How to detect inverse proportion from a table?",
          back: "The product $x \\, y$ is the same in every row.",
        },
        {
          front: "Shape of the graph of $y = kx$?",
          back: "A straight line through the origin with gradient $k$.",
        },
        {
          front: "Shape of the graph of $y = \\tfrac{k}{x}$?",
          back: "A hyperbola in the first quadrant approaching both axes.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: direct and inverse proportion",
      stepKey: "proportionPractice",
      questions: [
        {
          prompt:
            "If 5 kg of flour costs 40 riyals, how much do 12 kg cost at the same price per kilogram?",
          options: ["48 riyals", "72 riyals", "80 riyals", "96 riyals"],
          answer: 3,
          explanation: "$40 \\div 5 = 8$ riyals per kg; $8 \\times 12 = 96$.",
        },
        {
          prompt:
            "It takes 3 taps 20 minutes to fill a tank. How long will it take 5 taps to fill the same tank?",
          options: ["8 minutes", "12 minutes", "15 minutes", "33 minutes"],
          answer: 1,
          explanation: "Inverse: $3 \\times 20 = 60$; $60 \\div 5 = 12$ minutes.",
        },
        {
          prompt: "Which relationship is directly proportional?",
          options: ["$y = 3x + 2$", "$y = \\tfrac{6}{x}$", "$y = 4x$", "$y = x^2$"],
          answer: 2,
          explanation: "Only $y = 4x$ has the form $y = kx$.",
        },
        {
          prompt: "Which relationship is inversely proportional?",
          options: ["$y = 2x$", "$xy = 10$", "$y = x + 5$", "$y = 3x^2$"],
          answer: 1,
          explanation: "$xy = 10$ rearranges to $y = \\tfrac{10}{x}$.",
        },
        {
          prompt:
            "$y$ is directly proportional to $x$. When $x = 4$, $y = 20$. Find $y$ when $x = 9$.",
          options: ["36", "45", "50", "80"],
          answer: 1,
          explanation: "$k = \\tfrac{20}{4} = 5$; $y = 5 \\times 9 = 45$.",
        },
        {
          prompt:
            "$y$ is inversely proportional to $x$. When $x = 2$, $y = 30$. Find $y$ when $x = 12$.",
          options: ["5", "6", "10", "15"],
          answer: 0,
          explanation: "$k = 2 \\times 30 = 60$; $y = \\tfrac{60}{12} = 5$.",
        },
        {
          prompt:
            "A car travels 240 km at 80 km/h. How long does the same journey take at 60 km/h?",
          options: ["3 hours", "3.5 hours", "4 hours", "4.5 hours"],
          answer: 2,
          explanation: "Fixed distance; $\\tfrac{240}{60} = 4$ hours.",
        },
        {
          prompt: "Which table shows direct proportion?",
          options: [
            "$x = 1, 2, 3$; $y = 4, 9, 14$",
            "$x = 1, 2, 3$; $y = 6, 12, 18$",
            "$x = 1, 2, 3$; $y = 12, 6, 4$",
            "$x = 1, 2, 3$; $y = 5, 5, 5$",
          ],
          answer: 1,
          explanation: "The ratio $\\tfrac{y}{x}$ is always 6.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Treating 'the more, the more' as automatic direct proportion.",
          right:
            "Only if $\\tfrac{y}{x}$ is constant is the relationship directly proportional. Otherwise it is just an increasing relationship.",
        },
        {
          wrong: "Assuming that a straight-line graph always shows direct proportion.",
          right:
            "Direct proportion requires a straight line through the origin. Any line of the form $y = mx + c$ with $c \\neq 0$ is not proportional.",
        },
        {
          wrong: "In inverse proportion, subtracting instead of using the constant product rule.",
          right: "Compute $k = xy$ from a known pair, then use it in every other row.",
        },
        {
          wrong: "Mixing units when comparing rates (e.g., 60 km/h and 3 minutes).",
          right: "Convert time and distance to consistent units before dividing or multiplying.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Direct proportion: $y = kx$; the ratio $\\tfrac{y}{x}$ is constant; the graph is a line through the origin.",
        "Inverse proportion: $y = \\tfrac{k}{x}$; the product $xy$ is constant; the graph is a hyperbola.",
        "The constant of proportionality is the key: find it from one known pair and reuse it.",
        "The unitary method — 'find one, then scale' — solves most everyday proportion problems.",
        "Check numerically before deciding a relationship is proportional; not every trend is.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: direct and inverse proportion",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt:
            "If $y$ is directly proportional to $x$ and $y = 24$ when $x = 6$, what is $y$ when $x = 10$?",
          options: ["30", "36", "40", "48"],
          answer: 2,
          marks: 2,
          explanation: "$k = \\tfrac{24}{6} = 4$; $y = 4 \\times 10 = 40$.",
        },
        {
          type: "mc",
          prompt:
            "If $y$ is inversely proportional to $x$ and $y = 8$ when $x = 3$, what is $y$ when $x = 6$?",
          options: ["4", "6", "16", "24"],
          answer: 0,
          marks: 2,
          explanation: "$k = 3 \\times 8 = 24$; $y = \\tfrac{24}{6} = 4$.",
        },
        {
          type: "tf",
          prompt: "If $y = 5x + 3$, then $y$ is directly proportional to $x$.",
          answer: false,
          marks: 1,
          explanation: "The graph does not pass through the origin (the intercept is 3).",
        },
        {
          type: "mc",
          prompt:
            "A machine fills 40 bottles in 5 minutes. At the same rate, how many bottles will it fill in 12 minutes?",
          options: ["48", "72", "84", "96"],
          answer: 3,
          marks: 2,
          explanation: "Rate is 8 per minute; $8 \\times 12 = 96$.",
        },
        {
          type: "mc",
          prompt:
            "If 10 workers can complete a job in 6 days, how many days will 15 workers take at the same rate?",
          options: ["3 days", "4 days", "5 days", "9 days"],
          answer: 1,
          marks: 2,
          explanation: "Inverse: $10 \\times 6 = 60$; $60 \\div 15 = 4$ days.",
        },
        {
          type: "matching",
          prompt: "Match each relationship to its type.",
          left: ["$y = 3x$", "$xy = 12$", "$y = 2x - 5$", "$y = \\tfrac{7}{x}$"],
          options: [
            "Direct proportion",
            "Inverse proportion",
            "Linear but not proportional",
            "Inverse proportion",
          ],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation:
            "The first is $y = kx$; the second and last are $xy = k$; the third has a non-zero intercept.",
        },
        {
          type: "multi",
          prompt: "Select every statement that is true.",
          options: [
            "In direct proportion, $\\tfrac{y}{x}$ is the same for all pairs.",
            "In inverse proportion, doubling $x$ halves $y$.",
            "The graph of inverse proportion is a straight line.",
            "The unitary method finds the value for one unit before scaling.",
            "If $y = 4$ when $x = 0$ and $y = 8$ when $x = 4$, then $y$ is directly proportional to $x$.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "Inverse graphs are curves, and a directly proportional graph must pass through the origin.",
        },
        {
          type: "mc",
          prompt: "A rectangle has area 48 cm². Which of these is true about its length and width?",
          options: [
            "They are directly proportional.",
            "They are inversely proportional with product 48.",
            "Their sum is constant.",
            "Neither directly nor inversely proportional.",
          ],
          answer: 1,
          marks: 2,
          explanation:
            "For a fixed area, $\\text{length} \\times \\text{width} = 48$, which is the inverse proportion relationship.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [{ key: "proportionPractice", label: "Complete the practice questions" }],
      requireQuizPass: true,
    },
  ],
};
