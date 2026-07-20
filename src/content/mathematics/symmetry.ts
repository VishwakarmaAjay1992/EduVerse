import type { LessonContent } from "@/lib/lesson-content-types";

export const symmetry: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "transformations-and-constructions",
  "lessonSlug": "symmetry",
  "title": "Symmetry",
  "objectives": [
    "Understand symmetry definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops symmetry beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A figure has symmetry if it can be transformed and still match itself exactly."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Line symmetry: a figure matches itself after reflection in a mirror line.",
        "Rotational symmetry: a figure matches itself after rotation less than $360^\\circ$.",
        "Order of rotational symmetry: number of times the figure matches itself in a full turn.",
        "Centre of rotation: fixed point about which the shape turns."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\text{angle of rotation}=\\frac{360^\\circ}{\\text{order}}",
      "caption": "Smallest angle for regular rotational symmetry"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Line symmetry is checked by folding or reflecting. Each point on one side must have a matching point the same perpendicular distance from the mirror line.",
        "Rotational symmetry is checked by turning around the centre. The shape may match itself several times before completing a full turn.",
        "Regular polygons have line symmetry and rotational symmetry equal to the number of sides."
      ],
      "list": [
        "Some shapes have rotational symmetry but no line symmetry, and some have line symmetry but low rotational symmetry."
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
      "prompt": "Find the order of rotational symmetry of a square.",
      "steps": [
        "A square matches after 90°, 180°, 270° and 360°.",
        "That is four positions in one full turn.",
        "Order is 4."
      ],
      "answer": "Order 4."
    },
    {
      "kind": "example",
      "prompt": "Find the smallest angle of rotation for a regular pentagon.",
      "steps": [
        "Regular pentagon has order 5.",
        "Use $360/5$.",
        "Calculate 72."
      ],
      "answer": "$72^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "How many lines of symmetry does a rectangle that is not a square have?",
      "steps": [
        "It has one vertical and one horizontal line through the centre.",
        "Diagonals do not work unless it is a square.",
        "So there are 2 lines."
      ],
      "answer": "2 lines."
    },
    {
      "kind": "example",
      "prompt": "A regular hexagon has how many lines of symmetry?",
      "steps": [
        "A regular n-gon has n lines of symmetry.",
        "Here n=6.",
        "Therefore 6 lines."
      ],
      "answer": "6 lines."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "A square has rotational symmetry order:",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "answer": 2,
          "explanation": "It matches four times in a full turn."
        },
        {
          "prompt": "Regular hexagon has lines of symmetry:",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 3,
          "explanation": "Regular n-gon has n lines."
        },
        {
          "prompt": "A non-square rectangle has lines of symmetry:",
          "options": [
            "0",
            "1",
            "2",
            "4"
          ],
          "answer": 2,
          "explanation": "Vertical and horizontal midlines."
        },
        {
          "prompt": "Order 6 means smallest angle:",
          "options": [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          "answer": 2,
          "explanation": "$360/6=60$."
        },
        {
          "prompt": "Line symmetry uses:",
          "options": [
            "reflection",
            "translation",
            "area",
            "volume"
          ],
          "answer": 0,
          "explanation": "Mirror line/reflection."
        },
        {
          "prompt": "Rotational symmetry uses:",
          "options": [
            "turning",
            "sliding only",
            "mirror only",
            "stretching"
          ],
          "answer": 0,
          "explanation": "It is about rotation."
        },
        {
          "prompt": "A circle has lines of symmetry:",
          "options": [
            "0",
            "1",
            "2",
            "infinitely many"
          ],
          "answer": 3,
          "explanation": "Any diameter is a symmetry line."
        },
        {
          "prompt": "Equilateral triangle order:",
          "options": [
            "1",
            "2",
            "3",
            "6"
          ],
          "answer": 2,
          "explanation": "Matches every 120°."
        },
        {
          "prompt": "Isosceles triangle usually has lines:",
          "options": [
            "1",
            "2",
            "3",
            "0"
          ],
          "answer": 0,
          "explanation": "One through vertex and midpoint of base."
        },
        {
          "prompt": "Angle for order 4:",
          "options": [
            "45°",
            "60°",
            "90°",
            "180°"
          ],
          "answer": 2,
          "explanation": "$360/4=90$."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "A regular pentagon lines of symmetry:",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 2,
          "explanation": "Regular n-gon has n lines."
        },
        {
          "prompt": "Order of rotational symmetry for circle:",
          "options": [
            "1",
            "2",
            "infinite",
            "0"
          ],
          "answer": 2,
          "explanation": "A circle matches at every angle."
        },
        {
          "prompt": "A parallelogram generally has line symmetry:",
          "options": [
            "0",
            "1",
            "2",
            "4"
          ],
          "answer": 0,
          "explanation": "Ordinary parallelogram has no mirror line."
        },
        {
          "prompt": "Rhombus usually has lines along:",
          "options": [
            "diagonals",
            "sides only",
            "none always",
            "arcs"
          ],
          "answer": 0,
          "explanation": "Rhombus diagonals are symmetry lines if it is a standard rhombus? In school geometry, a rhombus has symmetry along diagonals only when shaped accordingly; a square has four."
        },
        {
          "prompt": "Regular octagon smallest rotation:",
          "options": [
            "45°",
            "60°",
            "90°",
            "120°"
          ],
          "answer": 0,
          "explanation": "$360/8=45$."
        },
        {
          "prompt": "Line symmetry means two halves:",
          "options": [
            "match exactly",
            "have same area only",
            "different shapes",
            "are rotated"
          ],
          "answer": 0,
          "explanation": "They mirror each other."
        },
        {
          "prompt": "Rotational order at least:",
          "options": [
            "1",
            "2",
            "0",
            "infinite only"
          ],
          "answer": 0,
          "explanation": "Every shape matches after 360°, so order at least 1."
        },
        {
          "prompt": "A capital H has line symmetry?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "It has vertical and horizontal symmetry in block form."
        },
        {
          "prompt": "A regular polygon with 12 sides has rotational order:",
          "options": [
            "6",
            "10",
            "12",
            "24"
          ],
          "answer": 2,
          "explanation": "Order equals number of sides."
        },
        {
          "prompt": "Mirror line points are:",
          "options": [
            "same perpendicular distance",
            "same colour only",
            "random",
            "always at centre"
          ],
          "answer": 0,
          "explanation": "Reflection distances are equal."
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
          "wrong": "Counting 360° as the smallest rotation.",
          "right": "Order includes the full-turn match, but smallest non-zero match may be less than 360°."
        },
        {
          "wrong": "Assuming equal area halves mean symmetry.",
          "right": "The halves must match exactly as mirror images."
        },
        {
          "wrong": "Confusing line symmetry and rotational symmetry.",
          "right": "Line symmetry uses reflection; rotational symmetry uses turning."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Symmetry",
          "back": "A figure has symmetry if it can be transformed and still match itself exactly."
        },
        {
          "front": "Line symmetry",
          "back": "Line symmetry: a figure matches itself after reflection in a mirror line."
        },
        {
          "front": "Rotational symmetry",
          "back": "Rotational symmetry: a figure matches itself after rotation less than $360^\\circ$."
        },
        {
          "front": "Order of rotational symmetry",
          "back": "Order of rotational symmetry: number of times the figure matches itself in a full turn."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Symmetry is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
