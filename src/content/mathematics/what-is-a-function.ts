import type { LessonContent } from "@/lib/lesson-content-types";

export const whatIsAFunction: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "functions-and-graphs",
  lessonSlug: "what-is-a-function",
  title: "What Is a Function?",
  objectives: [
    "Explain what a function is using the mapping and machine models.",
    "Identify the domain and range of a function.",
    "Read and use function notation, such as $f(x)$.",
    "Evaluate a function at a given input.",
    "Apply the vertical line test to decide whether a graph represents a function.",
    "Distinguish functions from relations that are not functions.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A function is one of the most important ideas in mathematics: a precise rule that connects every allowed input to exactly one output. You've already been using functions informally — an equation like $y = 2x+3$ assigns exactly one $y$ value to every $x$ value you choose.",
        "This lesson makes the idea of a function precise, introduces the notation mathematicians use to describe them, and gives you a fast visual test — the vertical line test — for recognising whether any given graph actually represents a function.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes comfort with evaluating expressions by substitution and with plotting points on the coordinate plane from The Cartesian Plane.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Function",
      body: "A function is a rule that assigns exactly one output to each allowed input. If a rule ever assigns two different outputs to the same input, it is not a function.",
    },
    {
      kind: "theory",
      heading: "Two ways to picture a function: mappings and machines",
      paragraphs: [
        "A mapping diagram shows a set of inputs on one side and a set of outputs on the other, with arrows connecting each input to its output. For a function, every input has exactly one arrow leaving it — though two different inputs are allowed to share the same output.",
        "A function machine is a more dynamic picture: you feed a number in, the machine applies its rule, and exactly one number comes out. Both pictures capture the same core requirement — one output per input, guaranteed every time.",
      ],
    },
    {
      kind: "functionMachineExplorer",
      heading: "Interactive: function machine and vertical line test",
    },
    {
      kind: "theory",
      heading: "Domain and range",
      paragraphs: [
        "The domain of a function is the complete set of allowed input values. The range is the complete set of output values the function actually produces. Some functions accept every real number as input; others have restrictions — for example, you cannot divide by zero, and you cannot take the square root of a negative number (within real numbers).",
      ],
    },
    {
      kind: "example",
      prompt: "Find the domain of $f(x) = \\dfrac{1}{x-3}$.",
      steps: [
        "The expression is undefined whenever the denominator is zero.",
        "Set the denominator equal to zero: $x - 3 = 0 \\Rightarrow x = 3$.",
        "Every other real number is allowed.",
      ],
      answer: "Domain: all real numbers except $x = 3$.",
    },
    {
      kind: "example",
      prompt: "Find the domain of $g(x) = \\sqrt{x - 4}$.",
      steps: [
        "A square root requires a non-negative value underneath it.",
        "Set up the inequality: $x - 4 \\ge 0$.",
        "Solve: $x \\ge 4$.",
      ],
      answer: "Domain: $x \\ge 4$.",
    },
    {
      kind: "theory",
      heading: "Function notation",
      paragraphs: [
        "Function notation $f(x)$ names a function $f$ and shows what it does to an input $x$. It is read 'f of x', and it does NOT mean $f$ multiplied by $x$ — it means 'the output the function $f$ produces when given the input $x$'. To evaluate $f(3)$, substitute 3 everywhere $x$ appears in the rule.",
      ],
    },
    {
      kind: "example",
      prompt: "Given $f(x) = 3x^2 - 2x + 1$, find $f(2)$ and $f(-1)$.",
      steps: [
        "Substitute $x=2$: $f(2) = 3(2)^2 - 2(2) + 1 = 12 - 4 + 1 = 9$.",
        "Substitute $x=-1$: $f(-1) = 3(-1)^2 - 2(-1) + 1 = 3 + 2 + 1 = 6$.",
      ],
      answer: "$f(2) = 9$ and $f(-1) = 6$.",
    },
    {
      kind: "theory",
      heading: "The vertical line test",
      paragraphs: [
        "The vertical line test is a quick visual check: if you can draw ANY vertical line that crosses a graph more than once, the graph does not represent a function, because that would mean one input (the shared x-value) produces two different outputs.",
        "A straight line (that isn't vertical), a parabola opening up or down, and a cubic curve all pass the vertical line test. A circle and a sideways parabola both fail it.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Does the graph of $x = y^2$ represent a function of $x$? Use the vertical line test to justify your answer.",
      steps: [
        "Pick a positive x-value, say $x=4$.",
        "Solve for y: $y^2=4 \\Rightarrow y = \\pm 2$.",
        "A vertical line at $x=4$ crosses the graph at both $y=2$ and $y=-2$ — two points.",
      ],
      answer:
        "No — this graph fails the vertical line test, so it does not represent $y$ as a function of $x$.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Functions can repeat outputs, never inputs",
      body: "It's completely fine for a function to send two different inputs to the same output (like $f(x)=x^2$ sending both 2 and $-2$ to 4). What's never allowed is one input producing two different outputs.",
    },
    {
      kind: "realWorld",
      heading: "Where functions appear",
      items: [
        {
          area: "Finance",
          text: "Interest calculations map a starting amount and time to exactly one final balance.",
        },
        {
          area: "Science",
          text: "Physical formulas like distance = speed × time assign exactly one output to each input.",
        },
        {
          area: "Technology",
          text: "Every well-designed computer function returns exactly one result for a given input.",
        },
        {
          area: "Everyday life",
          text: "A vending machine is a function: press one button (input), get exactly one item (output).",
        },
        {
          area: "Data analysis",
          text: "A price-lookup table only works reliably if each product code maps to exactly one price.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "What defines a function?", back: "Each input has exactly one output." },
        { front: "Domain?", back: "The set of allowed input values." },
        { front: "Range?", back: "The set of output values a function actually produces." },
        {
          front: "How do you read $f(x)$?",
          back: "'f of x' — the output of function f for input x, not f times x.",
        },
        {
          front: "Vertical line test — what does failing it mean?",
          back: "The graph is NOT a function; some input has two outputs.",
        },
        {
          front: "Can two inputs share the same output?",
          back: "Yes — that's allowed; only one-input-two-outputs is forbidden.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: what is a function?",
      stepKey: "whatIsAFunctionPractice",
      questions: [
        {
          prompt: "Which relationship describes a function?",
          options: [
            "Every input has exactly one output",
            "Every output has exactly one input",
            "Inputs and outputs must both be positive",
            "There must be the same number of inputs and outputs",
          ],
          answer: 0,
          explanation:
            "A function requires exactly one output per input; multiple inputs sharing an output is fine.",
        },
        {
          prompt: "Given $f(x) = 4x - 5$, find $f(3)$.",
          options: ["7", "12", "-5", "3"],
          answer: 0,
          explanation: "$f(3) = 4(3)-5 = 12-5=7$.",
        },
        {
          prompt: "Given $g(x) = x^2 + 1$, find $g(-2)$.",
          options: ["5", "-3", "3", "-5"],
          answer: 0,
          explanation: "$g(-2) = (-2)^2+1 = 4+1=5$.",
        },
        {
          prompt: "Find the domain of $h(x) = \\dfrac{2}{x+5}$.",
          options: [
            "All reals except $x=-5$",
            "All reals except $x=5$",
            "$x \\ge -5$",
            "All real numbers",
          ],
          answer: 0,
          explanation: "The denominator is zero when $x=-5$, which must be excluded.",
        },
        {
          prompt: "Find the domain of $k(x) = \\sqrt{x+7}$.",
          options: ["$x \\ge -7$", "$x \\le -7$", "$x \\ge 7$", "All real numbers"],
          answer: 0,
          explanation: "Requires $x+7 \\ge 0 \\Rightarrow x \\ge -7$.",
        },
        {
          prompt: "A circle graph fails the vertical line test. What does this mean?",
          options: [
            "It does not represent y as a function of x",
            "It has no domain",
            "It has no range",
            "It is not a valid graph",
          ],
          answer: 0,
          explanation:
            "A vertical line crosses a circle twice at most x-values, so it fails the test.",
        },
        {
          prompt: "Given $f(x) = 2x^2 - 3x$, find $f(0)$.",
          options: ["0", "-3", "2", "Undefined"],
          answer: 0,
          explanation: "$f(0) = 2(0)^2-3(0)=0$.",
        },
        {
          prompt:
            "Which of these could be a function's mapping: {(1,2), (2,4), (1,5)} or {(1,2), (2,4), (3,5)}?",
          options: ["{(1,2), (2,4), (3,5)} only", "{(1,2), (2,4), (1,5)} only", "Both", "Neither"],
          answer: 0,
          explanation:
            "The first set repeats input 1 with two different outputs (2 and 5), so it's not a function; the second set has one output per input.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Reading $f(x)$ as $f$ multiplied by $x$.",
          right:
            "$f(x)$ means 'the output of function $f$ for input $x$' — it's notation, not multiplication.",
        },
        {
          wrong:
            "Concluding a relation isn't a function because two different inputs share an output.",
          right:
            "That's allowed. Only one input producing two different outputs breaks the function rule.",
        },
        {
          wrong: "Forgetting to exclude values that make a denominator zero when stating a domain.",
          right:
            "Always check for denominators (and square roots of negatives) before stating the domain.",
        },
        {
          wrong:
            "Applying the vertical line test with a horizontal line instead of a vertical one.",
          right:
            "The test specifically uses VERTICAL lines, since we're checking for repeated outputs at a single x-value.",
        },
        {
          wrong: "Confusing domain (inputs) with range (outputs).",
          right: "Domain is what goes IN; range is what comes OUT.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A function assigns exactly one output to each allowed input.",
        "The domain is the set of allowed inputs; the range is the set of resulting outputs.",
        "Function notation $f(x)$ names the output for input $x$; evaluate by substitution.",
        "The vertical line test: if any vertical line crosses a graph more than once, it is not a function.",
        "Two different inputs sharing an output is fine; one input with two outputs is not.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: what is a function?",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Given $f(x) = 5x + 2$, find $f(4)$.",
          options: ["22", "20", "9", "7"],
          answer: 0,
          marks: 1,
          explanation: "$f(4)=5(4)+2=22$.",
        },
        {
          type: "mc",
          prompt: "Find the domain of $f(x) = \\dfrac{3}{x-6}$.",
          options: [
            "All reals except $x=6$",
            "All reals except $x=-6$",
            "$x \\ge 6$",
            "All real numbers",
          ],
          answer: 0,
          marks: 1,
          explanation: "The denominator is zero at $x=6$.",
        },
        {
          type: "tf",
          prompt: "A function can send two different inputs to the same output.",
          answer: true,
          marks: 1,
          explanation:
            "This is allowed — the restriction is only on one input producing two outputs.",
        },
        {
          type: "mc",
          prompt: "Given $g(x) = x^2 - 4x$, find $g(3)$.",
          options: ["-3", "3", "-12", "21"],
          answer: 0,
          marks: 2,
          explanation: "$g(3) = 9-12=-3$.",
        },
        {
          type: "mc",
          prompt: "Which graph passes the vertical line test?",
          options: [
            "A parabola opening upward",
            "A circle",
            "A sideways parabola $x=y^2$",
            "An ellipse",
          ],
          answer: 0,
          marks: 2,
          explanation: "A standard parabola $y=ax^2+bx+c$ passes the test; the others do not.",
        },
        {
          type: "matching",
          prompt: "Match each function to the correct domain.",
          left: [
            "$f(x)=\\dfrac{1}{x}$",
            "$f(x)=\\sqrt{x}$",
            "$f(x)=x^2$",
            "$f(x)=\\dfrac{1}{x+2}$",
          ],
          options: [
            "All reals except $x=-2$",
            "All real numbers",
            "$x \\ge 0$",
            "All reals except $x=0$",
          ],
          answer: [3, 2, 1, 0],
          marks: 4,
          explanation:
            "Domains exclude values that cause division by zero or a negative under a square root.",
        },
        {
          type: "mc",
          prompt: "Given $h(x) = 2x^2 + 3x - 1$, find $h(-2)$.",
          options: ["1", "-3", "9", "-1"],
          answer: 0,
          marks: 2,
          explanation: "$h(-2)=2(4)+3(-2)-1=8-6-1=1$.",
        },
        {
          type: "multi",
          prompt: "Select every statement that correctly describes a function.",
          options: [
            "Each input has exactly one output.",
            "Each output has exactly one input.",
            "A vertical line crosses its graph at most once.",
            "It must be a straight line.",
          ],
          answers: [0, 2],
          marks: 3,
          explanation: "Functions can be curved, and multiple inputs can share an output.",
        },
        {
          type: "mc",
          prompt: "Find the domain of $f(x) = \\sqrt{5 - x}$.",
          options: ["$x \\le 5$", "$x \\ge 5$", "$x \\le -5$", "All real numbers"],
          answer: 0,
          marks: 2,
          explanation: "Requires $5-x \\ge 0 \\Rightarrow x \\le 5$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "functionMachineExplorer",
          label: "Use the function machine and vertical line test",
        },
        { key: "whatIsAFunctionPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
