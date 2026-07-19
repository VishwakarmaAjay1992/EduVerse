import type { LessonContent } from "@/lib/lesson-content-types";

export const compositeAndInverseFunctions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "functions-and-graphs",
  lessonSlug: "composite-and-inverse-functions",
  title: "Composite and Inverse Functions",
  objectives: [
    "Compute the composition of two functions, $f(g(x))$.",
    "Recognise that function composition is generally not commutative.",
    "Explain what it means for a function to be invertible.",
    "Find the inverse of a function algebraically.",
    "Verify that two functions are inverses of each other.",
    "Explain the graphical relationship between a function and its inverse.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Composition lets you chain functions together, feeding the output of one directly into another. Inversion runs a function backwards, recovering the original input from an output. Both ideas appear constantly — converting between units, encoding and decoding information, and undoing a calculation to check your work all rely on these two operations.",
        "This lesson develops both skills algebraically and connects the inverse function to a striking visual fact: a function and its inverse are always mirror images of each other across the line $y=x$.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds directly on What Is a Function? — you should be comfortable with function notation and evaluating functions by substitution, and confident solving linear equations.",
      ],
    },
    {
      kind: "theory",
      heading: "Composing functions",
      paragraphs: [
        "The composite function $f(g(x))$, also written $(f \\circ g)(x)$, means: first apply $g$ to $x$, then apply $f$ to that result. Work from the inside out — always evaluate the innermost function first.",
      ],
    },
    {
      kind: "formula",
      latex: "(f \\circ g)(x) = f(g(x))",
      caption: "Apply g first, then apply f to the result.",
    },
    {
      kind: "compositeInverseExplorer",
      heading: "Interactive: composing functions and finding inverses",
    },
    {
      kind: "example",
      prompt: "Given $f(x) = 2x + 1$ and $g(x) = x - 3$, find $f(g(4))$.",
      steps: [
        "Work from the inside out: first find $g(4) = 4 - 3 = 1$.",
        "Now apply $f$ to that result: $f(1) = 2(1) + 1 = 3$.",
      ],
      answer: "$f(g(4)) = 3$.",
    },
    {
      kind: "example",
      prompt: "Given $f(x) = x^2$ and $g(x) = x + 2$, find a general expression for $f(g(x))$.",
      steps: [
        "Substitute the entire expression for $g(x)$ into $f$: $f(g(x)) = f(x+2)$.",
        "Apply the rule for $f$: square the input: $(x+2)^2$.",
        "Expand if needed: $(x+2)^2 = x^2 + 4x + 4$.",
      ],
      answer: "$f(g(x)) = x^2 + 4x + 4$.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Order matters",
      body: "In general, $f(g(x)) \\neq g(f(x))$. Composition is usually not commutative — always check which function is applied first before assuming the order doesn't matter.",
    },
    {
      kind: "example",
      prompt:
        "Using $f(x)=2x+1$ and $g(x)=x-3$ from above, show that $f(g(x)) \\neq g(f(x))$ in general.",
      steps: [
        "$f(g(x)) = f(x-3) = 2(x-3)+1 = 2x-6+1=2x-5$.",
        "$g(f(x)) = g(2x+1) = (2x+1)-3 = 2x-2$.",
        "Compare: $2x-5$ and $2x-2$ are different expressions.",
      ],
      answer:
        "$f(g(x)) = 2x-5$ while $g(f(x)) = 2x-2$ — confirming the two composites are not equal.",
    },
    {
      kind: "theory",
      heading: "Invertibility",
      paragraphs: [
        "A function is invertible if it has an inverse function that exactly undoes it: applying $f$ then $f^{-1}$ (or $f^{-1}$ then $f$) always returns the original input. A function is invertible exactly when it passes the horizontal line test — no horizontal line crosses its graph more than once — because otherwise the inverse would need to send one input to two different outputs, breaking the function rule.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Inverse function",
      body: "The inverse of a function $f$, written $f^{-1}$, satisfies $f^{-1}(f(x)) = x$ and $f(f^{-1}(x)) = x$ for every valid $x$. The notation $f^{-1}$ does NOT mean $1/f$ — it's a different function entirely.",
    },
    {
      kind: "theory",
      heading: "Finding an inverse algebraically",
      paragraphs: [
        "To find $f^{-1}(x)$: replace $f(x)$ with $y$, swap $x$ and $y$, then solve the new equation for $y$. The result, rewritten as $f^{-1}(x)$, is the inverse function.",
      ],
    },
    {
      kind: "example",
      prompt: "Find the inverse of $f(x) = 2x + 3$.",
      steps: [
        "Replace $f(x)$ with $y$: $y = 2x+3$.",
        "Swap $x$ and $y$: $x = 2y+3$.",
        "Solve for $y$: $x-3=2y \\Rightarrow y=\\dfrac{x-3}{2}$.",
      ],
      answer: "$f^{-1}(x) = \\dfrac{x-3}{2}$.",
    },
    {
      kind: "example",
      prompt:
        "Verify that $f(x)=2x+3$ and $f^{-1}(x)=\\dfrac{x-3}{2}$ are genuine inverses by checking $f(f^{-1}(x))=x$.",
      steps: [
        "Substitute $f^{-1}(x)$ into $f$: $f\\left(\\dfrac{x-3}{2}\\right) = 2\\left(\\dfrac{x-3}{2}\\right)+3$.",
        "Simplify: $= (x-3)+3 = x$.",
      ],
      answer: "$f(f^{-1}(x)) = x$ ✓, confirming they are correct inverses of each other.",
    },
    {
      kind: "theory",
      heading: "The graphical relationship between a function and its inverse",
      paragraphs: [
        "If the point $(a,b)$ lies on the graph of $f$, then the point $(b,a)$ lies on the graph of $f^{-1}$ — the coordinates simply swap. This means the graph of $f^{-1}$ is always the reflection of the graph of $f$ across the line $y=x$.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Given $f(3) = 9$ for some function $f$, state a point that must lie on the graph of $f^{-1}$.",
      steps: [
        "$f(3)=9$ means the point $(3,9)$ is on the graph of $f$.",
        "The inverse swaps coordinates, so $(9,3)$ must be on the graph of $f^{-1}$.",
      ],
      answer: "$(9, 3)$ lies on the graph of $f^{-1}$.",
    },
    {
      kind: "realWorld",
      heading: "Where composition and inverses appear",
      items: [
        {
          area: "Unit conversion",
          text: "Converting Celsius to Fahrenheit and back uses a function and its inverse.",
        },
        {
          area: "Cryptography",
          text: "Encoding a message and decoding it are inverse operations.",
        },
        {
          area: "Multi-step processes",
          text: "Applying tax then a discount (or vice versa) is function composition, and order changes the result.",
        },
        {
          area: "Computer science",
          text: "Chaining data-processing functions together is composition in action.",
        },
        {
          area: "Navigation",
          text: "Converting between coordinate systems and back relies on inverse transformations.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "What does $f(g(x))$ mean?", back: "Apply g first, then apply f to the result." },
        {
          front: "Is composition commutative in general?",
          back: "No — $f(g(x))$ usually does not equal $g(f(x))$.",
        },
        {
          front: "Steps to find an inverse algebraically?",
          back: "Replace f(x) with y, swap x and y, solve for y.",
        },
        { front: "What does $f^{-1}(x)$ NOT mean?", back: "It does not mean $1/f(x)$." },
        {
          front: "Graphical relationship between f and $f^{-1}$?",
          back: "Mirror images of each other across the line y = x.",
        },
        {
          front: "Test for invertibility?",
          back: "The horizontal line test — no horizontal line crosses the graph more than once.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: composite and inverse functions",
      stepKey: "compositeInversePractice",
      questions: [
        {
          prompt: "Given $f(x)=x+5$ and $g(x)=2x$, find $f(g(3))$.",
          options: ["11", "16", "6", "13"],
          answer: 0,
          explanation: "$g(3)=6$, then $f(6)=6+5=11$.",
        },
        {
          prompt: "Given $f(x)=x+5$ and $g(x)=2x$, find $g(f(3))$.",
          options: ["16", "11", "8", "13"],
          answer: 0,
          explanation: "$f(3)=8$, then $g(8)=16$.",
        },
        {
          prompt: "Given $f(x)=x^2$ and $g(x)=x-1$, find $f(g(x))$ as an expression.",
          options: ["$x^2-2x+1$", "$x^2-1$", "$x^2-2x-1$", "$x^2+1$"],
          answer: 0,
          explanation: "$f(g(x))=f(x-1)=(x-1)^2=x^2-2x+1$.",
        },
        {
          prompt: "Find the inverse of $f(x) = x - 7$.",
          options: ["$f^{-1}(x)=x+7$", "$f^{-1}(x)=x-7$", "$f^{-1}(x)=7-x$", "$f^{-1}(x)=-x-7$"],
          answer: 0,
          explanation: "Swap and solve: $x=y-7 \\Rightarrow y=x+7$.",
        },
        {
          prompt: "Find the inverse of $f(x) = 4x - 1$.",
          options: [
            "$f^{-1}(x)=\\dfrac{x+1}{4}$",
            "$f^{-1}(x)=\\dfrac{x-1}{4}$",
            "$f^{-1}(x)=4x+1$",
            "$f^{-1}(x)=\\dfrac{x}{4}+1$",
          ],
          answer: 0,
          explanation: "$x=4y-1 \\Rightarrow x+1=4y \\Rightarrow y=\\dfrac{x+1}{4}$.",
        },
        {
          prompt:
            "If $(2, 7)$ lies on the graph of $f$, which point must lie on the graph of $f^{-1}$?",
          options: ["$(7,2)$", "$(2,7)$", "$(-2,-7)$", "$(7,-2)$"],
          answer: 0,
          explanation: "The inverse swaps coordinates: $(a,b) \\to (b,a)$.",
        },
        {
          prompt: "The graph of $f^{-1}$ is the reflection of the graph of $f$ across which line?",
          options: ["$y=x$", "$y=-x$", "$x=0$", "$y=0$"],
          answer: 0,
          explanation: "Swapping coordinates corresponds to reflecting across the line $y=x$.",
        },
        {
          prompt:
            "Given $f(x)=3x+2$, verify $f^{-1}(x)=\\dfrac{x-2}{3}$ by finding $f(f^{-1}(5))$.",
          options: ["5", "17", "1", "7"],
          answer: 0,
          explanation: "$f^{-1}(5)=(5-2)/3=1$; then $f(1)=3(1)+2=5$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Computing $g(x)$ first when asked for $g(f(x))$ instead of $f(x)$ first.",
          right:
            "Work from the inside out: in $g(f(x))$, evaluate $f$ first, then apply $g$ to that result.",
        },
        {
          wrong: "Assuming $f(g(x))$ always equals $g(f(x))$.",
          right:
            "Composition is generally not commutative — always compute each order separately unless told otherwise.",
        },
        {
          wrong: "Writing $f^{-1}(x)$ as $\\dfrac{1}{f(x)}$.",
          right:
            "$f^{-1}$ is a completely different function — the notation means 'inverse', not 'reciprocal'.",
        },
        {
          wrong: "Forgetting to swap x and y before solving when finding an inverse.",
          right:
            "The swap step is essential — solving for y without swapping just gives back the original function.",
        },
        {
          wrong: "Assuming every function has an inverse.",
          right:
            "Only functions that pass the horizontal line test (each output has only one input) are invertible.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "$(f \\circ g)(x) = f(g(x))$: apply $g$ first, then $f$ — always work inside-out.",
        "Composition is generally not commutative: $f(g(x)) \\neq g(f(x))$ in general.",
        "A function is invertible if it passes the horizontal line test.",
        "Find an inverse by replacing $f(x)$ with $y$, swapping $x$ and $y$, and solving for $y$.",
        "Verify an inverse by checking $f(f^{-1}(x))=x$ (or the other order).",
        "The graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y=x$.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: composite and inverse functions",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Given $f(x)=x+3$ and $g(x)=2x$, find $f(g(5))$.",
          options: ["13", "16", "10", "8"],
          answer: 0,
          marks: 1,
          explanation: "$g(5)=10$, then $f(10)=13$.",
        },
        {
          type: "mc",
          prompt: "Given $f(x)=x+3$ and $g(x)=2x$, find $g(f(5))$.",
          options: ["16", "13", "10", "11"],
          answer: 0,
          marks: 1,
          explanation: "$f(5)=8$, then $g(8)=16$.",
        },
        {
          type: "tf",
          prompt: "$f(g(x))$ always equals $g(f(x))$ for any two functions.",
          answer: false,
          marks: 1,
          explanation: "Composition is generally not commutative.",
        },
        {
          type: "mc",
          prompt: "Find the inverse of $f(x) = 5x + 10$.",
          options: [
            "$f^{-1}(x)=\\dfrac{x-10}{5}$",
            "$f^{-1}(x)=\\dfrac{x+10}{5}$",
            "$f^{-1}(x)=5x-10$",
            "$f^{-1}(x)=\\dfrac{x}{5}-10$",
          ],
          answer: 0,
          marks: 2,
          explanation: "$x=5y+10 \\Rightarrow x-10=5y \\Rightarrow y=\\dfrac{x-10}{5}$.",
        },
        {
          type: "mc",
          prompt: "Given $f(x)=x^2$ and $g(x)=x+3$, find $f(g(2))$.",
          options: ["25", "13", "7", "16"],
          answer: 0,
          marks: 2,
          explanation: "$g(2)=5$, then $f(5)=25$.",
        },
        {
          type: "matching",
          prompt: "Match each function to its inverse.",
          left: ["$f(x)=x+6$", "$f(x)=3x$", "$f(x)=x-2$", "$f(x)=\\dfrac{x}{4}$"],
          options: [
            "$f^{-1}(x)=x+2$",
            "$f^{-1}(x)=4x$",
            "$f^{-1}(x)=x-6$",
            "$f^{-1}(x)=\\dfrac{x}{3}$",
          ],
          answer: [2, 3, 0, 1],
          marks: 4,
          explanation: "Each inverse undoes its function's operation in reverse order.",
        },
        {
          type: "mc",
          prompt:
            "If $(4, 11)$ lies on the graph of $f$, which point lies on the graph of $f^{-1}$?",
          options: ["$(11,4)$", "$(4,11)$", "$(-4,-11)$", "$(11,-4)$"],
          answer: 0,
          marks: 2,
          explanation: "The inverse swaps coordinates.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about inverse functions.",
          options: [
            "The graph of $f^{-1}$ reflects the graph of $f$ across $y=x$.",
            "$f^{-1}(x) = 1/f(x)$.",
            "$f(f^{-1}(x)) = x$ for a valid inverse.",
            "Every function has an inverse.",
          ],
          answers: [0, 2],
          marks: 3,
          explanation: "$f^{-1}$ is not the reciprocal, and not every function is invertible.",
        },
        {
          type: "mc",
          prompt: "Find the inverse of $f(x) = \\dfrac{x-4}{2}$.",
          options: [
            "$f^{-1}(x)=2x+4$",
            "$f^{-1}(x)=2x-4$",
            "$f^{-1}(x)=\\dfrac{x+4}{2}$",
            "$f^{-1}(x)=\\dfrac{x}{2}+4$",
          ],
          answer: 0,
          marks: 2,
          explanation: "$x=\\dfrac{y-4}{2} \\Rightarrow 2x=y-4 \\Rightarrow y=2x+4$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "compositeInverseExplorer", label: "Use the composition and inverse laboratory" },
        { key: "compositeInversePractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
