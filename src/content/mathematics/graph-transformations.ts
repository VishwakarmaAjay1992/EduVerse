import type { LessonContent } from "@/lib/lesson-content-types";

export const graphTransformations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "functions-and-graphs",
  lessonSlug: "graph-transformations",
  title: "Graph Transformations",
  objectives: [
    "Translate a graph horizontally and vertically.",
    "Stretch or compress a graph vertically.",
    "Reflect a graph across the x-axis or y-axis.",
    "Combine multiple transformations and apply them in the correct order.",
    "Predict a transformed graph's equation from a description, and vice versa.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Once you know the shape of a basic graph — a parabola, a cubic, an absolute value V — you can predict exactly how that shape moves, stretches, or flips just by looking at small changes to its equation. This lesson develops a systematic toolkit for these graph transformations: translations (shifts), stretches (resizing), and reflections (flips).",
        "Every transformation you'll learn here works the same way regardless of which base graph you start with, which is what makes this such a powerful sketching shortcut.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds on Families of Graphs — you should be comfortable with the basic shapes of linear, quadratic, cubic, reciprocal and absolute value graphs before transforming them.",
      ],
    },
    {
      kind: "theory",
      heading: "Vertical translations",
      paragraphs: [
        "Adding a constant $k$ outside the function, $y = f(x) + k$, shifts the entire graph vertically: up if $k>0$, down if $k<0$. Every point moves by the same amount, so the shape itself never changes — only its position.",
      ],
    },
    {
      kind: "theory",
      heading: "Horizontal translations",
      paragraphs: [
        "Replacing $x$ with $(x-h)$ inside the function, $y = f(x-h)$, shifts the graph horizontally: right if $h>0$, left if $h<0$. This one trips people up because the sign appears reversed from what you might expect — $f(x-3)$ shifts RIGHT by 3, not left.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Horizontal shifts feel backwards",
      body: "$f(x-h)$ shifts the graph in the POSITIVE direction when $h$ is positive (to the right), even though you're subtracting. Think of it as asking 'where does the graph need x to be, to behave like the original graph did at x=0?' — it needs a bigger x, so the whole graph moves right.",
    },
    {
      kind: "graphTransformationExplorer",
      heading: "Interactive: build up a transformation step by step",
    },
    {
      kind: "example",
      prompt: "Describe the transformation from $y=x^2$ to $y=(x-4)^2+2$.",
      steps: [
        "The $-4$ inside the brackets shifts the graph 4 units to the right.",
        "The $+2$ outside shifts the graph 2 units up.",
      ],
      answer: "The graph of $y=x^2$ is translated 4 units right and 2 units up.",
    },
    {
      kind: "theory",
      heading: "Vertical stretches and compressions",
      paragraphs: [
        "Multiplying the whole function by a constant $a$, $y = a \\cdot f(x)$, stretches the graph vertically away from the x-axis if $|a|>1$, or compresses it toward the x-axis if $0<|a|<1$. The x-intercepts stay in the same place, since $0$ multiplied by anything is still $0$.",
      ],
    },
    {
      kind: "example",
      prompt: "Compare $y = x^2$ and $y = 3x^2$ at $x=2$.",
      steps: [
        "$y=x^2$ at $x=2$: $y=4$.",
        "$y=3x^2$ at $x=2$: $y=3(4)=12$.",
        "The output is 3 times as large — every point is pulled 3 times further from the x-axis.",
      ],
      answer: "$y=3x^2$ is $y=x^2$ stretched vertically by a factor of 3.",
    },
    {
      kind: "theory",
      heading: "Reflections",
      paragraphs: [
        "Multiplying the whole function by $-1$, $y = -f(x)$, reflects the graph across the x-axis — every point flips from above to below (or vice versa). Replacing $x$ with $-x$, $y = f(-x)$, reflects the graph across the y-axis instead.",
      ],
    },
    {
      kind: "formula",
      latex:
        "y = -f(x) \\ \\text{reflects across the x-axis} \\qquad y = f(-x) \\ \\text{reflects across the y-axis}",
      caption: "Where the minus sign appears determines which axis the reflection happens across.",
    },
    {
      kind: "example",
      prompt: "Describe the transformation from $y = x^2 - 4$ to $y = -(x^2-4)$.",
      steps: [
        "The whole expression is negated, matching the pattern $y=-f(x)$.",
        "This reflects the graph across the x-axis.",
      ],
      answer: "The graph is reflected across the x-axis: it now opens downward instead of upward.",
    },
    {
      kind: "theory",
      heading: "Combining transformations",
      paragraphs: [
        "When several transformations apply at once, as in $y = a \\cdot f(x-h) + k$, apply them to the input in this order: horizontal shift first (inside the function), then any stretch/reflection (multiplying the function), then vertical shift last (added outside). Working through them in this order — rather than all at once — avoids mistakes.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Describe every transformation from $y=x^2$ to $y = -2(x+1)^2 + 5$, and find the new vertex.",
      steps: [
        "$(x+1)$ shifts the graph 1 unit LEFT (since $h=-1$).",
        "The factor of 2 stretches the graph vertically by a factor of 2.",
        "The negative sign reflects the graph across the x-axis.",
        "The $+5$ shifts the graph 5 units up.",
        "The original vertex $(0,0)$ moves to $(-1, 5)$.",
      ],
      answer:
        "Left 1, vertically stretched by 2, reflected across the x-axis, up 5. New vertex: $(-1, 5)$.",
    },
    {
      kind: "table",
      heading: "Transformation summary",
      headers: ["Change to equation", "Effect on graph"],
      rows: [
        ["$f(x) + k$", "Shift up by $k$ (or down if $k<0$)"],
        ["$f(x-h)$", "Shift right by $h$ (or left if $h<0$)"],
        ["$a \\cdot f(x)$, $|a|>1$", "Vertical stretch by factor $a$"],
        ["$a \\cdot f(x)$, $0<|a|<1$", "Vertical compression by factor $a$"],
        ["$-f(x)$", "Reflect across the x-axis"],
        ["$f(-x)$", "Reflect across the y-axis"],
      ],
    },
    {
      kind: "realWorld",
      heading: "Where transformations appear",
      items: [
        {
          area: "Signal processing",
          text: "Shifting and scaling a waveform in time and amplitude.",
        },
        {
          area: "Physics",
          text: "Shifting a motion graph to account for a different starting time or position.",
        },
        {
          area: "Animation and games",
          text: "Moving, scaling and flipping sprites uses exactly these transformations.",
        },
        {
          area: "Data normalisation",
          text: "Shifting and scaling data so it fits a standard range.",
        },
        {
          area: "Engineering design",
          text: "Adjusting a standard curve (like a cam profile) by shifting and scaling it to new specifications.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Effect of $f(x)+k$?", back: "Vertical shift: up if k>0, down if k<0." },
        { front: "Effect of $f(x-h)$?", back: "Horizontal shift: right if h>0, left if h<0." },
        {
          front: "Effect of $a \\cdot f(x)$ with $|a|>1$?",
          back: "Vertical stretch away from the x-axis.",
        },
        { front: "Effect of $-f(x)$?", back: "Reflection across the x-axis." },
        { front: "Effect of $f(-x)$?", back: "Reflection across the y-axis." },
        {
          front: "Order to apply combined transformations?",
          back: "Horizontal shift, then stretch/reflection, then vertical shift.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: graph transformations",
      stepKey: "graphTransformationsPractice",
      questions: [
        {
          prompt: "How does $y = x^2 + 5$ transform $y = x^2$?",
          options: ["Shifts up 5", "Shifts down 5", "Shifts right 5", "Stretches by 5"],
          answer: 0,
          explanation: "Adding outside the function shifts the graph up.",
        },
        {
          prompt: "How does $y = (x-3)^2$ transform $y = x^2$?",
          options: ["Shifts right 3", "Shifts left 3", "Shifts up 3", "Shifts down 3"],
          answer: 0,
          explanation: "$f(x-h)$ shifts right when $h>0$; here $h=3$.",
        },
        {
          prompt: "How does $y = (x+2)^2$ transform $y = x^2$?",
          options: ["Shifts left 2", "Shifts right 2", "Shifts up 2", "Shifts down 2"],
          answer: 0,
          explanation: "$(x+2) = (x - (-2))$, so $h=-2$, shifting left.",
        },
        {
          prompt: "How does $y = 4x^2$ transform $y = x^2$?",
          options: [
            "Vertical stretch by 4",
            "Vertical compression by 4",
            "Horizontal shift by 4",
            "Reflection",
          ],
          answer: 0,
          explanation:
            "Multiplying the whole function by a number greater than 1 stretches it vertically.",
        },
        {
          prompt: "How does $y = -x^2$ transform $y = x^2$?",
          options: [
            "Reflects across the x-axis",
            "Reflects across the y-axis",
            "Shifts down",
            "Compresses",
          ],
          answer: 0,
          explanation: "A leading negative sign reflects the graph across the x-axis.",
        },
        {
          prompt: "What is the vertex of $y = (x-2)^2 - 5$, given $y=x^2$ has vertex $(0,0)$?",
          options: ["$(2,-5)$", "$(-2,5)$", "$(2,5)$", "$(-2,-5)$"],
          answer: 0,
          explanation: "Shift right 2 and down 5: vertex $(2,-5)$.",
        },
        {
          prompt: "Describe the transformation from $y=x^2$ to $y = 0.5x^2$.",
          options: [
            "Vertical compression by 0.5",
            "Vertical stretch by 0.5",
            "Horizontal shift",
            "Reflection",
          ],
          answer: 0,
          explanation: "A factor with $|a|<1$ compresses the graph toward the x-axis.",
        },
        {
          prompt: "Find the vertex of $y = -3(x+1)^2 + 4$.",
          options: ["$(-1,4)$", "$(1,4)$", "$(-1,-4)$", "$(1,-4)$"],
          answer: 0,
          explanation: "$(x+1)$ means shift left 1; $+4$ means shift up 4. Vertex: $(-1,4)$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Reading $f(x-3)$ as a shift LEFT by 3.",
          right:
            "$f(x-h)$ shifts RIGHT when $h$ is positive — the sign appears reversed from intuition.",
        },
        {
          wrong: "Confusing $-f(x)$ (reflect across x-axis) with $f(-x)$ (reflect across y-axis).",
          right:
            "The position of the minus sign matters: outside the function reflects vertically; inside reflects horizontally.",
        },
        {
          wrong:
            "Applying transformations in the wrong order, e.g. shifting vertically before applying a stretch.",
          right:
            "Apply horizontal shift, then stretch/reflection, then vertical shift, in that order.",
        },
        {
          wrong: "Assuming a vertical stretch changes the x-intercepts.",
          right:
            "Vertical stretches leave x-intercepts unchanged, since $a \\times 0 = 0$ regardless of $a$.",
        },
        {
          wrong: "Forgetting that $0<|a|<1$ compresses rather than stretches.",
          right:
            "Only $|a|>1$ stretches the graph; a fraction between 0 and 1 compresses it toward the x-axis.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "$f(x)+k$ shifts vertically; $f(x-h)$ shifts horizontally (note the reversed sign for $h$).",
        "$a \\cdot f(x)$ stretches vertically if $|a|>1$, compresses if $0<|a|<1$.",
        "$-f(x)$ reflects across the x-axis; $f(-x)$ reflects across the y-axis.",
        "Combined transformations should be applied in order: horizontal shift, then stretch/reflection, then vertical shift.",
        "Vertical stretches and reflections leave x-intercepts unchanged.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: graph transformations",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "How does $y = x^2 - 7$ transform $y = x^2$?",
          options: ["Shifts down 7", "Shifts up 7", "Shifts left 7", "Shifts right 7"],
          answer: 0,
          marks: 1,
          explanation: "Adding a negative constant outside shifts the graph down.",
        },
        {
          type: "mc",
          prompt: "How does $y = (x+5)^2$ transform $y = x^2$?",
          options: ["Shifts left 5", "Shifts right 5", "Shifts up 5", "Shifts down 5"],
          answer: 0,
          marks: 1,
          explanation: "$(x+5)=(x-(-5))$, so $h=-5$, shifting left.",
        },
        {
          type: "tf",
          prompt: "$f(x-4)$ shifts a graph 4 units to the left.",
          answer: false,
          marks: 1,
          explanation: "$f(x-h)$ with $h=4$ shifts the graph RIGHT by 4, not left.",
        },
        {
          type: "mc",
          prompt: "How does $y = \\dfrac{1}{4}x^2$ transform $y = x^2$?",
          options: [
            "Vertical compression by 1/4",
            "Vertical stretch by 4",
            "Horizontal shift",
            "Reflection",
          ],
          answer: 0,
          marks: 2,
          explanation: "A factor between 0 and 1 compresses the graph toward the x-axis.",
        },
        {
          type: "mc",
          prompt: "Find the vertex of $y = (x+3)^2 - 2$, given $y=x^2$ has vertex $(0,0)$.",
          options: ["$(-3,-2)$", "$(3,2)$", "$(-3,2)$", "$(3,-2)$"],
          answer: 0,
          marks: 2,
          explanation: "Shift left 3 and down 2: vertex $(-3,-2)$.",
        },
        {
          type: "matching",
          prompt: "Match each transformation to its effect on $y=x^2$.",
          left: ["$y=x^2+3$", "$y=(x-1)^2$", "$y=2x^2$", "$y=-x^2$"],
          options: ["Shift right 1", "Reflect across x-axis", "Shift up 3", "Stretch by 2"],
          answer: [2, 0, 3, 1],
          marks: 4,
          explanation: "Each equation change matches a specific, standard transformation.",
        },
        {
          type: "mc",
          prompt: "Describe the full transformation from $y=x^2$ to $y = -0.5(x-2)^2 + 3$.",
          options: [
            "Right 2, compressed by 0.5, reflected, up 3",
            "Left 2, stretched by 0.5, reflected, down 3",
            "Right 2, stretched by 0.5, up 3",
            "Left 2, compressed by 0.5, up 3",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "$(x-2)$ shifts right 2; the 0.5 compresses; the negative reflects; the +3 shifts up.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about transformations.",
          options: [
            "$f(x-h)$ shifts right when $h$ is positive.",
            "$-f(x)$ reflects across the y-axis.",
            "Vertical stretches leave x-intercepts unchanged.",
            "Combined transformations are applied: horizontal shift, then stretch/reflection, then vertical shift.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "$-f(x)$ reflects across the x-axis, not the y-axis; that role belongs to $f(-x)$.",
        },
        {
          type: "mc",
          prompt: "Find the vertex of $y = 2(x-1)^2 - 4$.",
          options: ["$(1,-4)$", "$(-1,4)$", "$(1,4)$", "$(-1,-4)$"],
          answer: 0,
          marks: 2,
          explanation: "Shift right 1 and down 4: vertex $(1,-4)$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "graphTransformationExplorer", label: "Use the transformation laboratory" },
        { key: "graphTransformationsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
