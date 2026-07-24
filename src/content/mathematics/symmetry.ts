import type { LessonContent } from "@/lib/lesson-content-types";

export const symmetry: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "transformations-and-symmetry",
  lessonSlug: "symmetry",
  title: "Symmetry",
  objectives: [
    "Identify and describe line symmetry and rotational symmetry in common shapes and patterns.",
    "Calculate the order and smallest angle of rotational symmetry.",
    "Analyse symmetry in polygons, logos, tilings and coordinate figures.",
    "Solve symmetry questions from beginner to expert level with clear reasoning.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A shape is **symmetric** when a transformation can be applied and the shape still matches itself exactly. Symmetry is one of the most important ideas in geometry because it helps us see structure quickly and reason efficiently about shape.",
        "In this lesson you will study the two main school-level types: **line symmetry** and **rotational symmetry**. Along the way, you will connect them to regular polygons, decorative design, nature, and the logic of geometric classification.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Definitions",
      body: "A figure has **line symmetry** if it matches itself after reflection in a line. That line is called a **line of symmetry**. A figure has **rotational symmetry** if it matches itself after a turn through an angle less than $360^\\circ$ about a point. The number of matching positions in one full turn is its **order of rotational symmetry**.",
    },
    {
      kind: "formula",
      latex: "\text{smallest angle of rotational symmetry}=\frac{360^\circ}{\text{order}}",
      caption: "This formula works whenever the rotational order is known.",
    },
    {
      kind: "imageGallery",
      heading: "Symmetry illustrations",
      images: [
        {
          src: "/geometry-recreated/symmetry-gallery.svg",
          alt: "Examples of line symmetry and rotational symmetry in common shapes.",
          caption: "Squares, rectangles, circles, kites, regular polygons and motifs all illustrate different symmetry patterns.",
        },
        {
          src: "/geometry-recreated/symmetry-in-patterns.svg",
          alt: "Pattern-based examples of symmetry in art and design.",
          caption: "Wall tiles, logos, rosettes and repeated ornaments often combine reflections and rotations.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "Understanding line symmetry",
      paragraphs: [
        "A line of symmetry splits a figure into two mirror-image halves. If you folded the figure along that line, one half would fit exactly on the other. Every point on one side has a matching point on the other side at the same perpendicular distance from the line.",
        "Some shapes have no lines of symmetry, some have one, and some have many. A circle is the extreme case because every diameter is a line of symmetry, so it has infinitely many.",
      ],
      list: [
        "An isosceles triangle usually has exactly one line of symmetry.",
        "A non-square rectangle has two lines of symmetry.",
        "A square has four lines of symmetry.",
        "A scalene triangle has no line of symmetry.",
      ],
    },
    {
      kind: "theory",
      heading: "Understanding rotational symmetry",
      paragraphs: [
        "A shape has rotational symmetry if you can rotate it about a centre and it matches itself before a full turn is completed. The **order** is the number of matching positions in a full $360^\\circ$ turn, including the starting position.",
        "For a regular polygon with $n$ sides, the order of rotational symmetry is $n$, and the smallest angle is $360^\\circ/n$. Many shapes have rotational symmetry without having the same number of reflection symmetries.",
      ],
      list: [
        "A parallelogram has rotational symmetry of order 2 but no line symmetry in general.",
        "A non-square rectangle has rotational symmetry of order 2.",
        "A regular pentagon has rotational symmetry of order 5 and line symmetry 5.",
      ],
    },
    {
      kind: "table",
      heading: "Common shapes and their symmetry",
      headers: ["Shape", "Lines of symmetry", "Rotational order", "Smallest angle"],
      rows: [
        ["Equilateral triangle", "3", "3", "$120^\\circ$"],
        ["Square", "4", "4", "$90^\\circ$"],
        ["Rectangle (not square)", "2", "2", "$180^\\circ$"],
        ["Rhombus (not square)", "2", "2", "$180^\\circ$"],
        ["Parallelogram", "0", "2", "$180^\\circ$"],
        ["Regular hexagon", "6", "6", "$60^\\circ$"],
        ["Circle", "infinitely many", "infinitely many", "any angle"],
      ],
    },
    {
      kind: "example",
      prompt: "How many lines of symmetry does a non-square rectangle have?",
      steps: [
        "A non-square rectangle can be reflected in the vertical line through its centre and in the horizontal line through its centre.",
        "The diagonals are not symmetry lines unless the rectangle is a square.",
        "So there are 2 lines of symmetry.",
      ],
      answer: "2 lines of symmetry.",
    },
    {
      kind: "example",
      prompt: "Find the order and smallest angle of rotational symmetry of a regular octagon.",
      steps: [
        "A regular octagon has 8 equal sides and 8 equal angles, so its rotational symmetry order is 8.",
        "Use $360^\\circ/8$ for the smallest angle.",
        "$360^\\circ/8=45^\\circ$.",
      ],
      answer: "Order 8, smallest angle $45^\\circ$.",
    },
    {
      kind: "example",
      prompt: "Which symmetries does a parallelogram have?",
      steps: [
        "A general parallelogram does not reflect onto itself across a line, so it has no line symmetry.",
        "However, a half-turn of $180^\\circ$ about the centre maps it onto itself.",
        "Therefore it has rotational symmetry of order 2.",
      ],
      answer: "No line symmetry, rotational symmetry of order 2.",
    },
    {
      kind: "example",
      prompt: "A logo has rotational symmetry of order 5. What is the smallest angle that maps it onto itself?",
      steps: [
        "Use the formula $\\text{angle}=360^\\circ/\\text{order}$.",
        "$360^\\circ/5=72^\\circ$.",
      ],
      answer: "$72^\\circ$.",
    },
    {
      kind: "example",
      prompt: "A regular polygon has 12 lines of symmetry. Identify the polygon and state its rotational order.",
      steps: [
        "A regular $n$-gon has $n$ lines of symmetry.",
        "So the polygon is a regular 12-gon, also called a dodecagon.",
        "Its rotational order is also 12.",
      ],
      answer: "A regular dodecagon with rotational order 12.",
    },
    {
      kind: "example",
      prompt: "A shape has rotational symmetry of order 3 and exactly 3 lines of symmetry. Name a familiar example.",
      steps: [
        "Order 3 means the shape matches every $120^\\circ$.",
        "Having 3 lines of symmetry suggests a regular 3-sided figure.",
        "The familiar example is an equilateral triangle.",
      ],
      answer: "An equilateral triangle.",
    },
    {
      kind: "example",
      prompt: "Does the capital letter N have line symmetry or rotational symmetry? Assume a standard block font.",
      steps: [
        "Reflecting N in a vertical or horizontal line does not reproduce the same letter.",
        "A half-turn of $180^\\circ$ does map N onto itself in a standard block font.",
        "So N has rotational symmetry of order 2 but no line symmetry.",
      ],
      answer: "Rotational symmetry of order 2, no line symmetry.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Counting only the extra matching positions and forgetting the starting position when finding rotational order.",
          right: "The order counts all matching positions in a full turn, including the starting position.",
        },
        {
          wrong: "Assuming every quadrilateral has at least one line of symmetry.",
          right: "Many do not. A general parallelogram has none.",
        },
        {
          wrong: "Mixing up the number of sides with the smallest rotation angle directly.",
          right: "Use $360^\\circ/n$ for a regular $n$-gon.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Symmetry in the real world",
      items: [
        {
          area: "Design",
          text: "Patterns in flooring, ceilings, facades and textile motifs use line and rotational symmetry to create balance.",
        },
        {
          area: "Nature",
          text: "Snowflakes, flowers, starfish and many molecular structures show strong symmetry.",
        },
        {
          area: "Branding",
          text: "Many logos use symmetry because the human eye finds it memorable and stable.",
        },
        {
          area: "Mathematics and science",
          text: "Symmetry is used to classify shapes, solve equations and describe deep laws of physics.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Symmetry practice",
      stepKey: "symmetryPractice",
      questions: [
        {
          prompt: "A regular hexagon has rotational symmetry order",
          options: ["2", "3", "6", "12"],
          answer: 2,
          explanation: "A regular hexagon matches 6 times in a full turn.",
        },
        {
          prompt: "The smallest angle of rotation for a square is",
          options: ["$45^\\circ$", "$60^\\circ$", "$90^\\circ$", "$180^\\circ$"],
          answer: 2,
          explanation: "$360^\\circ/4=90^\\circ$.",
        },
        {
          prompt: "Which shape has no line symmetry in general?",
          options: ["kite", "parallelogram", "square", "circle"],
          answer: 1,
          explanation: "A general parallelogram has rotational symmetry only.",
        },
        {
          prompt: "A regular pentagon has how many lines of symmetry?",
          options: ["3", "4", "5", "10"],
          answer: 2,
          explanation: "A regular $n$-gon has $n$ lines of symmetry.",
        },
        {
          prompt: "A circle has rotational symmetry of",
          options: ["order 1", "order 2", "order 360", "infinite order"],
          answer: 3,
          explanation: "Any rotation angle maps a circle onto itself.",
        },
        {
          prompt: "An isosceles triangle usually has",
          options: ["0 lines of symmetry", "1 line of symmetry", "2 lines of symmetry", "3 lines of symmetry"],
          answer: 1,
          explanation: "The line passes through the apex and midpoint of the base.",
        },
        {
          prompt: "If a pattern has rotational order 8, its smallest angle is",
          options: ["$30^\\circ$", "$40^\\circ$", "$45^\\circ$", "$60^\\circ$"],
          answer: 2,
          explanation: "$360^\\circ/8=45^\\circ$.",
        },
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Symmetry mastery check",
      passMark: 6,
      questions: [
        {
          type: "mc",
          prompt: "A regular decagon has smallest angle of rotational symmetry",
          options: ["$18^\\circ$", "$24^\\circ$", "$36^\\circ$", "$72^\\circ$"],
          answer: 2,
          marks: 2,
          explanation: "$360^\\circ/10=36^\\circ$.",
        },
        {
          type: "tf",
          prompt: "A non-square rectangle has 4 lines of symmetry.",
          answer: false,
          marks: 2,
          explanation: "It has only 2: one vertical and one horizontal.",
        },
        {
          type: "multi",
          prompt: "Select every figure that has rotational symmetry of order 2.",
          options: ["parallelogram", "equilateral triangle", "rectangle", "capital N in a block font"],
          answers: [0, 2, 3],
          marks: 3,
          explanation: "An equilateral triangle has order 3, not 2.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Line symmetry means a figure matches itself in a mirror line.",
        "Rotational symmetry means a figure matches itself after a turn about a centre.",
        "Rotational order counts the number of matching positions in one full turn.",
        "The smallest rotation angle is $360^\\circ$ divided by the order.",
        "Regular polygons have equal numbers of sides, lines of symmetry and rotational order.",
      ],
    },
    {
      kind: "completion",
      steps: [{ key: "symmetryPractice", label: "Complete the symmetry practice set" }],
      requireQuizPass: true,
    },
  ],
};
