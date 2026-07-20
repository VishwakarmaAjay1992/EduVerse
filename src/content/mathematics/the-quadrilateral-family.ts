import type { LessonContent } from "@/lib/lesson-content-types";

export const theQuadrilateralFamily: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "quadrilaterals-and-polygons",
  "lessonSlug": "the-quadrilateral-family",
  "title": "The Quadrilateral Family",
  "objectives": [
    "Understand the quadrilateral family definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops the quadrilateral family beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A quadrilateral is a closed plane figure with four straight sides. The interior angles of every quadrilateral add to $360^\\circ$."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Parallelogram: both pairs of opposite sides are parallel.",
        "Rectangle: parallelogram with four right angles.",
        "Rhombus: parallelogram with four equal sides.",
        "Square: rectangle and rhombus together.",
        "Trapezium/trapezoid: a quadrilateral with at least one pair of parallel sides, depending on convention."
      ]
    },
    {
      "kind": "formula",
      "latex": "A+B+C+D=360^\\circ",
      "caption": "Interior angle sum of a quadrilateral"
    },
    {
      "kind": "formula",
      "latex": "A_{\\text{parallelogram}}=bh",
      "caption": "Area of parallelogram"
    },
    {
      "kind": "formula",
      "latex": "A_{\\text{trapezium}}=\\frac12(a+b)h",
      "caption": "Area of trapezium/trapezoid"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Quadrilaterals form a family tree. A square is not separate from rectangles and rhombi; it belongs to both groups.",
        "Opposite sides and angles of a parallelogram are equal. Consecutive angles are supplementary because parallel lines create co-interior angles.",
        "Diagonals give useful tests: parallelogram diagonals bisect each other, rectangle diagonals are equal, rhombus diagonals are perpendicular, and square diagonals are both equal and perpendicular."
      ],
      "list": [
        "Naming conventions for trapezium/trapezoid vary by country, so read the textbook definition used in your course."
      ]
    },
    {
      "kind": "table",
      "heading": "Problem-solving guide",
      "headers": [
        "When you see this",
        "What to use",
        "Reason"
      ],
      "rows": [
        [
          "A diagram has equal marks",
          "Use the matching theorem or definition",
          "Equal marks are information, not decoration."
        ],
        [
          "A formula is needed",
          "Identify each variable before substitution",
          "Most mistakes come from using the wrong length or angle."
        ],
        [
          "A proof-style question appears",
          "Write reasons after each statement",
          "Geometry answers must be justified."
        ]
      ]
    },
    {
      "kind": "example",
      "prompt": "A quadrilateral has angles 80°, 95°, 110° and x. Find x.",
      "steps": [
        "Use $360^\\circ$ angle sum.",
        "$80+95+110+x=360$.",
        "$285+x=360$, so $x=75$."
      ],
      "answer": "$75^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "Find the area of a parallelogram with base 14 cm and height 9 cm.",
      "steps": [
        "Use $A=bh$.",
        "$A=14\\times9$.",
        "Calculate 126."
      ],
      "answer": "126 cm²."
    },
    {
      "kind": "example",
      "prompt": "A rectangle is 12 cm by 7 cm. Find perimeter and area.",
      "steps": [
        "Perimeter $=2(l+w)=2(12+7)=38$.",
        "Area $=lw=12\\times7=84$.",
        "Include units."
      ],
      "answer": "Perimeter 38 cm; area 84 cm²."
    },
    {
      "kind": "example",
      "prompt": "A trapezium has parallel sides 10 cm and 16 cm, height 5 cm. Find area.",
      "steps": [
        "Use $A=\\frac12(a+b)h$.",
        "$A=\\frac12(10+16)5$.",
        "$A=65$."
      ],
      "answer": "65 cm²."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Quadrilateral angle sum:",
          "options": [
            "180°",
            "270°",
            "360°",
            "540°"
          ],
          "answer": 2,
          "explanation": "Any quadrilateral splits into two triangles."
        },
        {
          "prompt": "A square is also:",
          "options": [
            "rectangle and rhombus",
            "circle",
            "triangle",
            "only kite"
          ],
          "answer": 0,
          "explanation": "It has right angles and equal sides."
        },
        {
          "prompt": "Opposite sides of parallelogram are:",
          "options": [
            "equal and parallel",
            "perpendicular always",
            "curved",
            "unequal always"
          ],
          "answer": 0,
          "explanation": "This is a parallelogram property."
        },
        {
          "prompt": "Area of parallelogram:",
          "options": [
            "$bh$",
            "$l+w$",
            "$2πr$",
            "$a^2+b^2$"
          ],
          "answer": 0,
          "explanation": "Base times perpendicular height."
        },
        {
          "prompt": "Rectangle diagonals are:",
          "options": [
            "equal",
            "perpendicular always",
            "unequal always",
            "radii"
          ],
          "answer": 0,
          "explanation": "Rectangle diagonals are equal and bisect each other."
        },
        {
          "prompt": "Rhombus has:",
          "options": [
            "four equal sides",
            "four right angles always",
            "no parallel sides",
            "curved sides"
          ],
          "answer": 0,
          "explanation": "All rhombus sides are equal."
        },
        {
          "prompt": "A square side 9 has area:",
          "options": [
            "18",
            "36",
            "81",
            "90"
          ],
          "answer": 2,
          "explanation": "$9^2=81$."
        },
        {
          "prompt": "A kite usually has:",
          "options": [
            "two pairs adjacent equal sides",
            "all sides parallel",
            "no equal sides",
            "curved sides"
          ],
          "answer": 0,
          "explanation": "Kite has adjacent equal pairs."
        },
        {
          "prompt": "Consecutive angles in parallelogram add to:",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°"
          ],
          "answer": 1,
          "explanation": "They are co-interior angles."
        },
        {
          "prompt": "Trapezium area uses:",
          "options": [
            "sum of parallel sides and height",
            "radius only",
            "diagonal only",
            "perimeter only"
          ],
          "answer": 0,
          "explanation": "$A=1/2(a+b)h$."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Four-sided polygon is:",
          "options": [
            "triangle",
            "quadrilateral",
            "pentagon",
            "hexagon"
          ],
          "answer": 1,
          "explanation": "Quad means four."
        },
        {
          "prompt": "Area rectangle 8 by 11:",
          "options": [
            "19",
            "38",
            "88",
            "176"
          ],
          "answer": 2,
          "explanation": "$8×11=88$."
        },
        {
          "prompt": "Parallelogram opposite angles are:",
          "options": [
            "equal",
            "always right",
            "supplementary only",
            "random"
          ],
          "answer": 0,
          "explanation": "Opposite angles are equal."
        },
        {
          "prompt": "Rectangle is a parallelogram?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "Both pairs of opposite sides are parallel."
        },
        {
          "prompt": "Rhombus diagonals are:",
          "options": [
            "perpendicular",
            "curved",
            "parallel",
            "zero"
          ],
          "answer": 0,
          "explanation": "They meet at right angles."
        },
        {
          "prompt": "Quadrilateral with all sides equal and four right angles:",
          "options": [
            "square",
            "kite",
            "trapezium",
            "ordinary parallelogram"
          ],
          "answer": 0,
          "explanation": "This defines a square."
        },
        {
          "prompt": "If three quadrilateral angles are 90°, 90°, 90°, fourth is:",
          "options": [
            "90°",
            "180°",
            "270°",
            "0°"
          ],
          "answer": 0,
          "explanation": "Sum must be 360°."
        },
        {
          "prompt": "Parallelogram base 12 height 4 area:",
          "options": [
            "16",
            "24",
            "48",
            "96"
          ],
          "answer": 2,
          "explanation": "$12×4=48$."
        },
        {
          "prompt": "Square perimeter side 6:",
          "options": [
            "12",
            "24",
            "36",
            "18"
          ],
          "answer": 1,
          "explanation": "$4×6=24$."
        },
        {
          "prompt": "Diagonals of parallelogram:",
          "options": [
            "bisect each other",
            "always equal",
            "always perpendicular",
            "do not meet"
          ],
          "answer": 0,
          "explanation": "They cut each other in half."
        }
      ]
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Architecture",
          "text": "Geometric reasoning helps check drawings, dimensions and layouts."
        },
        {
          "area": "Engineering",
          "text": "Shapes and measurements are used to design safe structures."
        },
        {
          "area": "Computer graphics",
          "text": "Transformations and geometry control images, animations and 3D models."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Using slanted side instead of perpendicular height for area.",
          "right": "Area of parallelogram and trapezium needs perpendicular height."
        },
        {
          "wrong": "Forgetting a square is a rectangle.",
          "right": "A square satisfies the definition of a rectangle and a rhombus."
        },
        {
          "wrong": "Assuming all quadrilaterals have equal opposite sides.",
          "right": "That is true for parallelograms, not every quadrilateral."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "The Quadrilateral Family",
          "back": "A quadrilateral is a closed plane figure with four straight sides. The interior angles of every quadrilateral add to $360^\\circ$."
        },
        {
          "front": "Parallelogram",
          "back": "Parallelogram: both pairs of opposite sides are parallel."
        },
        {
          "front": "Rectangle",
          "back": "Rectangle: parallelogram with four right angles."
        },
        {
          "front": "Rhombus",
          "back": "Rhombus: parallelogram with four equal sides."
        }
      ]
    },
    {
      "kind": "imageGallery",
      "heading": "PDF visual reference: quadrilaterals",
      "note": "These pages from the uploaded Geometry guide expand the quadrilateral family with cyclic quadrilateral, parallelogram, rhombus, rectangle, square and trapezium facts.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-08.webp", "alt": "Quadrilateral and cyclic quadrilateral basics", "caption": "Quadrilateral definition and cyclic quadrilateral property: opposite angles are supplementary." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-09.webp", "alt": "Parallelogram rhombus rectangle properties", "caption": "Parallelogram, rhombus and rectangle definitions with side, angle and diagonal properties." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-10.webp", "alt": "Square trapezium and area facts", "caption": "Square and trapezium definitions plus important area facts for figures on the same base and between the same parallel lines." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
        "Draw or redraw the diagram, mark known values, write the relevant formula, substitute carefully, and check the reasonableness of the answer.",
        "For exam preparation, practise mixed problems where more than one fact is needed."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "read-definitions",
          "label": "Read definitions"
        },
        {
          "key": "study-examples",
          "label": "Study solved examples"
        },
        {
          "key": "complete-practice",
          "label": "Complete practice"
        },
        {
          "key": "pass-quiz",
          "label": "Pass the quiz"
        }
      ],
      "requireQuizPass": true
    }
  ]
};
