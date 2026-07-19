import type { LessonContent } from "@/lib/lesson-content-types";

export const perimeterAndAreaOfBasicShapes: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "measurement-and-units",
  lessonSlug: "perimeter-and-area-of-basic-shapes",
  title: "Perimeter and Area of Basic Shapes",
  objectives: [
    "Explain the difference between perimeter (distance around) and area (space inside) and use the correct units for each.",
    "Calculate the perimeter and area of squares and rectangles.",
    "Use the formulas for the area of triangles, parallelograms and trapeziums.",
    "Calculate the circumference and area of a circle.",
    "Split composite shapes into simpler pieces to find total area and perimeter.",
    "Find a missing length when the perimeter or area is known (reverse calculations).",
    "Solve practical problems about flooring, tiling, fencing and landscaping.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "How much skirting board runs around a room? How many tiles cover its floor? The first question asks for perimeter — the total distance around a shape's boundary. The second asks for area — the amount of flat space the shape encloses.",
        "The two are measured differently: perimeter in ordinary length units (cm, m), area in square units (cm², m²). In this lesson you will build the standard formula toolkit for rectangles, triangles, parallelograms, trapeziums and circles, learn to dissect composite shapes, and run the formulas backwards to find missing lengths.",
      ],
    },
    {
      kind: "theory",
      heading: "Before you start",
      paragraphs: [
        "You should be fluent with multiplying decimals, comfortable converting metric length units from the previous lesson, and able to substitute values into a simple formula. The square-root skills from the roots lesson will reappear when we reverse an area calculation for a square.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Perimeter and area",
      body: "The perimeter of a 2-D shape is the total length of its boundary, measured in length units such as cm or m. The area is the amount of surface the shape covers, measured in square units such as cm² or m² — the number of $1 \\times 1$ unit squares that fit inside. For a circle, the perimeter has a special name: the circumference.",
    },
    {
      kind: "theory",
      heading: "Squares and rectangles",
      paragraphs: [
        "A rectangle with length $l$ and width $w$ has perimeter $P = 2(l + w)$ — two lengths plus two widths — and area $A = l \\times w$, because the unit squares fill it in $w$ rows of $l$.",
        "A square is a rectangle with all sides equal to $s$, so $P = 4s$ and $A = s^2$. This is exactly why $s^2$ is read as 's squared'.",
      ],
    },
    {
      kind: "formula",
      latex:
        "P_{\\text{rect}} = 2(l + w) \\qquad A_{\\text{rect}} = l \\times w \\qquad P_{\\square} = 4s \\qquad A_{\\square} = s^2",
      caption: "Rectangle and square formulas.",
    },
    {
      kind: "figure",
      figure: { type: "array", rows: 4, cols: 7 },
      caption:
        "A 7 × 4 rectangle contains 28 unit squares, so its area is 28 square units — area is counting squares.",
    },
    {
      kind: "theory",
      heading: "Triangles",
      paragraphs: [
        "Every triangle is half of a parallelogram: put two identical triangles together along a matching side and they form one. So the triangle's area is half of base times height, $A = \\tfrac{1}{2}bh$.",
        "The height must be the perpendicular height — the straight-up distance from the base to the opposite vertex — not the length of a slanted side. The perimeter of a triangle is simply the sum of its three sides.",
      ],
    },
    {
      kind: "formula",
      latex: "A_{\\triangle} = \\tfrac{1}{2} \\times b \\times h",
      caption: "b is the base and h is the perpendicular height to that base.",
    },
    {
      kind: "theory",
      heading: "Parallelograms and trapeziums",
      paragraphs: [
        "A parallelogram with base $b$ and perpendicular height $h$ has area $A = b \\times h$. Imagine slicing a right-angled triangle off one end and sliding it to the other: the shape becomes a rectangle with the same base and height.",
        "A trapezium has one pair of parallel sides, $a$ and $b$, a distance $h$ apart. Its area is the average of the parallel sides times the height: $A = \\tfrac{1}{2}(a + b)h$.",
        "For the perimeter of either shape you need the actual side lengths, including any slant sides — the perpendicular height is not a side, so it never appears in a perimeter.",
      ],
    },
    {
      kind: "formula",
      latex: "A_{\\parallel} = b \\times h \\qquad A_{\\text{trap}} = \\tfrac{1}{2}(a + b)\\,h",
      caption: "In both formulas h is the perpendicular distance, never a slant length.",
    },
    {
      kind: "theory",
      heading: "Circles",
      paragraphs: [
        "A circle of radius $r$ has circumference $C = 2\\pi r$ (equivalently $\\pi d$, where $d = 2r$ is the diameter) and area $A = \\pi r^2$.",
        "The number $\\pi \\approx 3.14159$ is the ratio of any circle's circumference to its diameter. Answers can be left exact 'in terms of $\\pi$', such as $25\\pi$ cm², or given as rounded decimals.",
      ],
    },
    {
      kind: "formula",
      latex: "C = 2\\pi r = \\pi d \\qquad A_{\\circ} = \\pi r^2",
      caption:
        "Use the radius for area; be careful not to substitute the diameter into $\\pi r^2$.",
    },
    {
      kind: "perimeterAreaExplorer",
      heading: "Interactive: perimeter and area laboratory",
    },
    {
      kind: "example",
      prompt: "A rectangular majlis floor measures 6.5 m by 4 m. Find its perimeter and area.",
      steps: [
        "Perimeter: $P = 2(l + w) = 2(6.5 + 4) = 2 \\times 10.5 = 21$ m.",
        "Area: $A = l \\times w = 6.5 \\times 4 = 26$ m².",
      ],
      answer: "Perimeter 21 m; area 26 m².",
    },
    {
      kind: "example",
      prompt:
        "A triangular sail has a base of 3.2 m and a perpendicular height of 4.5 m. Find its area.",
      steps: [
        "Use $A = \\tfrac{1}{2}bh$ with $b = 3.2$ and $h = 4.5$.",
        "$A = \\tfrac{1}{2} \\times 3.2 \\times 4.5 = \\tfrac{1}{2} \\times 14.4 = 7.2$.",
      ],
      answer: "The sail's area is 7.2 m².",
    },
    {
      kind: "example",
      prompt:
        "A trapezium-shaped garden bed has parallel sides of 5 m and 3 m that are 2.4 m apart. Find its area.",
      steps: [
        "Use $A = \\tfrac{1}{2}(a + b)h$ with $a = 5$, $b = 3$, $h = 2.4$.",
        "Average the parallel sides: $\\tfrac{1}{2}(5 + 3) = 4$.",
        "Multiply by the height: $4 \\times 2.4 = 9.6$.",
      ],
      answer: "The bed's area is 9.6 m².",
    },
    {
      kind: "example",
      prompt:
        "A circular fountain has a radius of 1.5 m. Find its circumference and area, giving answers to one decimal place.",
      steps: [
        "Circumference: $C = 2\\pi r = 2\\pi \\times 1.5 = 3\\pi \\approx 9.42$.",
        "Area: $A = \\pi r^2 = \\pi \\times 1.5^2 = 2.25\\pi \\approx 7.07$.",
        "Round each to one decimal place and attach units.",
      ],
      answer: "Circumference ≈ 9.4 m; area ≈ 7.1 m².",
    },
    {
      kind: "theory",
      heading: "Composite shapes",
      paragraphs: [
        "An L-shaped room or a window with a semicircular top is a composite shape. To find its area, split it into rectangles, triangles and circle parts, find each area, then add (or subtract a cut-out).",
        "Perimeter needs more care: trace the outside boundary only. Internal dividing lines you drew for the area calculation are not part of the perimeter, and a side shared with a cut-out may be partly missing.",
      ],
    },
    {
      kind: "example",
      prompt:
        "An L-shaped floor is a 8 m × 5 m rectangle with a 3 m × 2 m rectangular corner removed. Find its area and perimeter.",
      steps: [
        "Area by subtraction: $8 \\times 5 - 3 \\times 2 = 40 - 6 = 34$ m².",
        "Perimeter: walking around the L, the two cut edges (3 m and 2 m) replace parts of the original sides, but every horizontal distance still totals $8 + 8$ and every vertical distance still totals $5 + 5$.",
        "So the perimeter equals that of the full rectangle: $2(8 + 5) = 26$ m.",
      ],
      answer:
        "Area 34 m²; perimeter 26 m. (A rectangular notch does not change the perimeter of an L-shape.)",
    },
    {
      kind: "theory",
      heading: "Reverse calculations: finding a missing length",
      paragraphs: [
        "If you know a perimeter or area, you can run the formula backwards. A rectangle with area 54 cm² and length 9 cm must have width $54 \\div 9 = 6$ cm. A square with area 81 m² has side $\\sqrt{81} = 9$ m.",
        "For perimeter: a rectangle with $P = 30$ cm and length 9 cm satisfies $2(9 + w) = 30$, so $9 + w = 15$ and $w = 6$ cm.",
      ],
    },
    {
      kind: "example",
      prompt: "A triangle has area 24 cm² and base 8 cm. Find its perpendicular height.",
      steps: [
        "Start from $A = \\tfrac{1}{2}bh$: $24 = \\tfrac{1}{2} \\times 8 \\times h$.",
        "Simplify: $24 = 4h$.",
        "Divide: $h = 24 \\div 4 = 6$.",
      ],
      answer: "The height is 6 cm.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Units checklist",
      body: "Before finalising any answer: perimeter carries a length unit (m), area carries a square unit (m²), and all lengths must be in the same unit before you calculate — convert 45 cm to 0.45 m first, not afterwards.",
    },
    {
      kind: "realWorld",
      heading: "Perimeter and area on the job",
      items: [
        {
          area: "Flooring",
          text: "Tiles and carpets are ordered by floor area in m², usually with 10% extra for cutting waste.",
        },
        {
          area: "Fencing",
          text: "Fence panels, garden edging and skirting boards are bought by perimeter length.",
        },
        {
          area: "Painting",
          text: "Paint coverage is quoted in m² per litre, so wall area decides how many tins to buy.",
        },
        {
          area: "Landscaping",
          text: "Turf, gravel and paving are priced per square metre of ground covered.",
        },
        {
          area: "Farming",
          text: "Field areas determine seed and fertiliser quantities; irrigation pipe follows the perimeter.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Area of a rectangle?", back: "$A = l \\times w$." },
        {
          front: "Area of a triangle?",
          back: "$A = \\tfrac{1}{2}bh$, with perpendicular height $h$.",
        },
        {
          front: "Area of a trapezium?",
          back: "$A = \\tfrac{1}{2}(a + b)h$ — average the parallel sides, times height.",
        },
        { front: "Circumference of a circle?", back: "$C = 2\\pi r = \\pi d$." },
        { front: "Area of a circle?", back: "$A = \\pi r^2$ — radius squared, not diameter." },
        { front: "Units for area?", back: "Square units: cm², m², km²." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: perimeter and area",
      stepKey: "perimeterAreaPractice",
      questions: [
        {
          prompt: "Find the perimeter of a rectangle 12 cm by 7 cm.",
          options: ["19 cm", "38 cm", "84 cm", "26 cm"],
          answer: 1,
          explanation: "$P = 2(12 + 7) = 2 \\times 19 = 38$ cm.",
        },
        {
          prompt: "Find the area of the same 12 cm by 7 cm rectangle.",
          options: ["38 cm²", "84 cm", "84 cm²", "19 cm²"],
          answer: 2,
          explanation: "$A = 12 \\times 7 = 84$, with square units: 84 cm².",
        },
        {
          prompt: "A square tile has side 25 cm. What is its area?",
          options: ["100 cm²", "125 cm²", "500 cm²", "625 cm²"],
          answer: 3,
          explanation: "$25^2 = 625$ cm².",
        },
        {
          prompt: "Find the area of a triangle with base 10 cm and perpendicular height 6 cm.",
          options: ["16 cm²", "30 cm²", "60 cm²", "120 cm²"],
          answer: 1,
          explanation: "$A = \\tfrac{1}{2} \\times 10 \\times 6 = 30$ cm².",
        },
        {
          prompt: "A parallelogram has base 9 m and perpendicular height 4 m. Its area is",
          options: ["13 m²", "18 m²", "36 m²", "72 m²"],
          answer: 2,
          explanation: "$A = b \\times h = 9 \\times 4 = 36$ m².",
        },
        {
          prompt:
            "A trapezium has parallel sides 6 cm and 10 cm, which are 5 cm apart. Its area is",
          options: ["30 cm²", "40 cm²", "80 cm²", "21 cm²"],
          answer: 1,
          explanation: "$A = \\tfrac{1}{2}(6 + 10) \\times 5 = 8 \\times 5 = 40$ cm².",
        },
        {
          prompt:
            "Taking $\\pi \\approx 3.14$, the circumference of a circle with radius 5 cm is about",
          options: ["15.7 cm", "31.4 cm", "78.5 cm", "62.8 cm"],
          answer: 1,
          explanation: "$C = 2\\pi r \\approx 2 \\times 3.14 \\times 5 = 31.4$ cm.",
        },
        {
          prompt: "A rectangle has area 72 m² and length 9 m. Its width is",
          options: ["8 m", "63 m", "6 m", "12 m"],
          answer: 0,
          explanation: "$w = A \\div l = 72 \\div 9 = 8$ m.",
        },
        {
          prompt: "A square courtyard has area 144 m². How much edging strip surrounds it?",
          options: ["12 m", "24 m", "48 m", "144 m"],
          answer: 2,
          explanation: "Side $= \\sqrt{144} = 12$ m, so perimeter $= 4 \\times 12 = 48$ m.",
        },
        {
          prompt:
            "A floor is an 6 m × 4 m rectangle joined to a 2 m × 3 m rectangle. Its total area is",
          options: ["24 m²", "26 m²", "30 m²", "36 m²"],
          answer: 2,
          explanation: "$6 \\times 4 + 2 \\times 3 = 24 + 6 = 30$ m².",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Mixing up the two measures — quoting an area when the question asks how much fencing is needed.",
          right:
            "Fencing, edging and borders follow the perimeter; tiles, paint and turf cover the area.",
        },
        {
          wrong: "Using a slant side as the height of a triangle or parallelogram.",
          right:
            "Height means perpendicular height — the right-angled distance from the base. Slant sides belong in the perimeter only.",
        },
        {
          wrong: "Substituting the diameter into $A = \\pi r^2$.",
          right: "Halve the diameter first. For $d = 10$: $r = 5$, so $A = 25\\pi$, not $100\\pi$.",
        },
        {
          wrong: "Writing area with a length unit: 'the area is 26 m'.",
          right: "Area always takes square units: 26 m².",
        },
        {
          wrong: "Calculating with mixed units, e.g. 2 m × 50 cm = 100.",
          right:
            "Convert first: $2\\text{ m} \\times 0.5\\text{ m} = 1\\text{ m}^2$ (or $200 \\times 50 = 10{,}000$ cm²).",
        },
        {
          wrong: "Adding internal dividing lines into the perimeter of a composite shape.",
          right:
            "Perimeter is only the outer boundary — trace around the outside edge and ignore construction lines.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Perimeter is the distance around (length units); area is the space inside (square units).",
        "Rectangle: $P = 2(l + w)$, $A = lw$. Square: $P = 4s$, $A = s^2$.",
        "Triangle: $A = \\tfrac{1}{2}bh$; parallelogram: $A = bh$; trapezium: $A = \\tfrac{1}{2}(a + b)h$ — always with perpendicular height.",
        "Circle: $C = 2\\pi r$ and $A = \\pi r^2$; use the radius, not the diameter, in the area formula.",
        "Composite shapes: add or subtract simple areas, but trace only the outer boundary for perimeter.",
        "Reverse the formulas (divide, or square-root for a square) to find missing lengths, and keep every length in the same unit.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: perimeter and area",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "The perimeter of a square with side 8.5 cm is",
          options: ["17 cm", "34 cm", "72.25 cm", "68 cm"],
          answer: 1,
          marks: 1,
          explanation: "$P = 4 \\times 8.5 = 34$ cm.",
        },
        {
          type: "mc",
          prompt: "The area of a triangle with base 14 cm and perpendicular height 5 cm is",
          options: ["19 cm²", "70 cm²", "35 cm²", "140 cm²"],
          answer: 2,
          marks: 1,
          explanation: "$A = \\tfrac{1}{2} \\times 14 \\times 5 = 35$ cm².",
        },
        {
          type: "tf",
          prompt: "A shape's area is always numerically larger than its perimeter.",
          answer: false,
          marks: 1,
          explanation:
            "Not at all — a 1 cm × 2 cm rectangle has area 2 cm² but perimeter 6 cm. The two measure different things and are not directly comparable.",
        },
        {
          type: "mc",
          prompt:
            "Taking $\\pi \\approx 3.14$, the area of a circular table top with diameter 1.2 m is about",
          options: ["1.13 m²", "4.52 m²", "3.77 m²", "0.57 m²"],
          answer: 0,
          marks: 2,
          explanation:
            "Radius $= 0.6$ m, so $A = \\pi \\times 0.6^2 = 0.36\\pi \\approx 1.13$ m². Using the diameter by mistake gives the wrong 4.52 m².",
        },
        {
          type: "matching",
          prompt: "Match each shape to its area formula.",
          left: ["Rectangle", "Triangle", "Trapezium", "Circle"],
          options: ["$\\tfrac{1}{2}(a + b)h$", "$\\pi r^2$", "$l \\times w$", "$\\tfrac{1}{2}bh$"],
          answer: [2, 3, 0, 1],
          marks: 4,
          explanation:
            "Each area formula pairs with its shape; note both triangle and trapezium formulas use perpendicular height.",
        },
        {
          type: "mc",
          prompt: "A rectangle has perimeter 42 m and width 8 m. Its length is",
          options: ["13 m", "26 m", "34 m", "17 m"],
          answer: 0,
          marks: 2,
          explanation: "$2(l + 8) = 42 \\Rightarrow l + 8 = 21 \\Rightarrow l = 13$ m.",
        },
        {
          type: "multi",
          prompt: "Select every true statement.",
          options: [
            "Perimeter is measured in square units.",
            "The height in $A = \\tfrac{1}{2}bh$ must be perpendicular to the base.",
            "The circumference of a circle is $\\pi$ times its diameter.",
            "Cutting a rectangular notch from a rectangle always reduces its perimeter.",
          ],
          answers: [1, 2],
          marks: 3,
          explanation:
            "Perimeter uses length units, and an L-shaped notch leaves the perimeter unchanged (the cut edges replace equal removed lengths).",
        },
        {
          type: "mc",
          prompt:
            "A 5 m × 4 m room is tiled with square tiles of side 50 cm. How many tiles are needed (no waste)?",
          options: ["20", "40", "80", "400"],
          answer: 2,
          marks: 2,
          explanation:
            "Room area $= 20$ m²; each tile is $0.5 \\times 0.5 = 0.25$ m²; $20 \\div 0.25 = 80$ tiles.",
        },
        {
          type: "mc",
          prompt:
            "A landscaper edges a trapezium lawn with parallel sides 12 m and 8 m, height 5 m, and slant sides 5.4 m and 6.4 m. The total edging length is",
          options: ["25 m", "50 m", "31.8 m", "100 m"],
          answer: 2,
          marks: 2,
          explanation:
            "Perimeter adds the four actual sides: $12 + 8 + 5.4 + 6.4 = 31.8$ m — the 5 m height is not a side.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "perimeterAreaExplorer",
          label: "Use the interactive perimeter and area laboratory",
        },
        { key: "perimeterAreaPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
