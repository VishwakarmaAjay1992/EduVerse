import type { LessonContent } from "@/lib/lesson-content-types";

export const interiorAndExteriorAnglesOfPolygons: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "quadrilaterals-and-polygons",
  "lessonSlug": "interior-and-exterior-angles-of-polygons",
  "title": "Interior and Exterior Angles of Polygons",
  "objectives": [
    "Understand interior and exterior angles of polygons definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops interior and exterior angles of polygons beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A polygon is a closed plane figure formed by straight sides. Interior angles are inside the polygon; exterior angles are formed by extending sides."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Regular polygon: all sides equal and all interior angles equal.",
        "Interior angle: angle inside the polygon at a vertex.",
        "Exterior angle: angle between a side and the extension of the next side.",
        "Convex polygon: every interior angle is less than $180^\\circ$."
      ]
    },
    {
      "kind": "formula",
      "latex": "S=(n-2)\\times180^\\circ",
      "caption": "Sum of interior angles"
    },
    {
      "kind": "formula",
      "latex": "\\text{each interior angle}=\\frac{(n-2)180^\\circ}{n}",
      "caption": "Each interior angle of a regular polygon"
    },
    {
      "kind": "formula",
      "latex": "\\text{each exterior angle}=\\frac{360^\\circ}{n}",
      "caption": "Each exterior angle of a regular polygon"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "A polygon with $n$ sides can be divided into $n-2$ triangles from one vertex. This explains the interior angle sum formula.",
        "The exterior angles of any convex polygon add to $360^\\circ$ because walking around the polygon makes one full turn.",
        "For regular polygons, divide the total by the number of equal angles."
      ],
      "list": [
        "Interior angle and adjacent exterior angle form a straight line, so they add to $180^\\circ$."
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
      "prompt": "Find the interior angle sum of a decagon.",
      "steps": [
        "A decagon has $n=10$ sides.",
        "Use $(n-2)180$.",
        "$(10-2)180=1440$."
      ],
      "answer": "$1440^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "Find each interior angle of a regular hexagon.",
      "steps": [
        "Interior sum $=(6-2)180=720$.",
        "Regular means six equal interior angles.",
        "$720/6=120$."
      ],
      "answer": "$120^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "Find each exterior angle of a regular 12-gon.",
      "steps": [
        "Exterior angles sum to $360^\\circ$.",
        "There are 12 equal exterior angles.",
        "$360/12=30$."
      ],
      "answer": "$30^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "A regular polygon has each exterior angle $24^\\circ$. How many sides?",
      "steps": [
        "Use $n=360/\\text{exterior angle}$.",
        "$n=360/24$.",
        "$n=15$."
      ],
      "answer": "15 sides."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Interior sum of pentagon:",
          "options": [
            "360°",
            "540°",
            "720°",
            "900°"
          ],
          "answer": 1,
          "explanation": "$(5-2)180=540$."
        },
        {
          "prompt": "Exterior angle sum of convex polygon:",
          "options": [
            "180°",
            "360°",
            "540°",
            "depends on sides"
          ],
          "answer": 1,
          "explanation": "One full turn is 360°."
        },
        {
          "prompt": "Each exterior angle of regular octagon:",
          "options": [
            "30°",
            "45°",
            "60°",
            "135°"
          ],
          "answer": 1,
          "explanation": "$360/8=45$."
        },
        {
          "prompt": "Each interior angle of regular octagon:",
          "options": [
            "45°",
            "90°",
            "120°",
            "135°"
          ],
          "answer": 3,
          "explanation": "$180-45=135$."
        },
        {
          "prompt": "A 20-sided polygon interior sum:",
          "options": [
            "3240°",
            "3600°",
            "1800°",
            "4000°"
          ],
          "answer": 0,
          "explanation": "$(20-2)180=3240$."
        },
        {
          "prompt": "Regular polygon means:",
          "options": [
            "equal sides and angles",
            "equal sides only",
            "equal angles only",
            "curved"
          ],
          "answer": 0,
          "explanation": "Both sides and angles are equal."
        },
        {
          "prompt": "If exterior angle is 40°, number of sides:",
          "options": [
            "8",
            "9",
            "10",
            "12"
          ],
          "answer": 1,
          "explanation": "$360/40=9$."
        },
        {
          "prompt": "Interior and adjacent exterior angle add to:",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°"
          ],
          "answer": 1,
          "explanation": "They form a straight line."
        },
        {
          "prompt": "Hexagon has sides:",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 1,
          "explanation": "Hexa means six."
        },
        {
          "prompt": "Triangulating an n-gon gives:",
          "options": [
            "n triangles",
            "n-1 triangles",
            "n-2 triangles",
            "2n triangles"
          ],
          "answer": 2,
          "explanation": "From one vertex, it forms n-2 triangles."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Interior sum formula:",
          "options": [
            "$(n-2)180°$",
            "$n×180°$",
            "$360/n$",
            "$πr^2$"
          ],
          "answer": 0,
          "explanation": "This is polygon interior sum."
        },
        {
          "prompt": "Regular pentagon each exterior:",
          "options": [
            "72°",
            "108°",
            "120°",
            "540°"
          ],
          "answer": 0,
          "explanation": "$360/5=72$."
        },
        {
          "prompt": "Regular pentagon each interior:",
          "options": [
            "72°",
            "90°",
            "108°",
            "120°"
          ],
          "answer": 2,
          "explanation": "$180-72=108$."
        },
        {
          "prompt": "A polygon with 7 sides is:",
          "options": [
            "hexagon",
            "heptagon",
            "octagon",
            "nonagon"
          ],
          "answer": 1,
          "explanation": "Heptagon has seven sides."
        },
        {
          "prompt": "Exterior angle 15° gives sides:",
          "options": [
            "15",
            "24",
            "30",
            "45"
          ],
          "answer": 1,
          "explanation": "$360/15=24$."
        },
        {
          "prompt": "Interior sum of quadrilateral:",
          "options": [
            "180°",
            "360°",
            "540°",
            "720°"
          ],
          "answer": 1,
          "explanation": "$(4-2)180=360$."
        },
        {
          "prompt": "If n=12, interior sum:",
          "options": [
            "1800°",
            "1440°",
            "2160°",
            "1080°"
          ],
          "answer": 0,
          "explanation": "$(12-2)180=1800$."
        },
        {
          "prompt": "Convex polygon exterior sum:",
          "options": [
            "always 360°",
            "always 180°",
            "n×360°",
            "impossible"
          ],
          "answer": 0,
          "explanation": "One complete turn."
        },
        {
          "prompt": "Regular polygon with 10 sides each exterior:",
          "options": [
            "18°",
            "36°",
            "72°",
            "144°"
          ],
          "answer": 1,
          "explanation": "$360/10=36$."
        },
        {
          "prompt": "Each interior angle regular decagon:",
          "options": [
            "144°",
            "36°",
            "120°",
            "150°"
          ],
          "answer": 0,
          "explanation": "$180-36=144$."
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
          "wrong": "Using $n\\times180$ for interior sum.",
          "right": "Use $(n-2)\\times180^\\circ$."
        },
        {
          "wrong": "Dividing by n for an irregular polygon.",
          "right": "Only regular polygons have equal interior angles."
        },
        {
          "wrong": "Thinking exterior angle sum changes with n.",
          "right": "The exterior angles always sum to $360^\\circ$ for convex polygons."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Interior and Exterior Angles of Polygons",
          "back": "A polygon is a closed plane figure formed by straight sides. Interior angles are inside the polygon; exterior angles are formed by extending sides."
        },
        {
          "front": "Regular polygon",
          "back": "Regular polygon: all sides equal and all interior angles equal."
        },
        {
          "front": "Interior angle",
          "back": "Interior angle: angle inside the polygon at a vertex."
        },
        {
          "front": "Exterior angle",
          "back": "Exterior angle: angle between a side and the extension of the next side."
        }
      ]
    },
    {
      "kind": "imageGallery",
      "heading": "Visual connection: polygons",
      "note": "The uploaded formula guide includes polygon vocabulary and exterior-angle facts that support regular and irregular polygon work.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-11.webp", "alt": "Polygon convex polygon and concave polygon guide", "caption": "Polygon, convex polygon and concave polygon definitions, with the exterior-angle result for a polygon." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
