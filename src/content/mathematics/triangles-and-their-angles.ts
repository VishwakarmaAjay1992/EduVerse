import type { LessonContent } from "@/lib/lesson-content-types";

export const trianglesAndTheirAngles: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "triangles-and-their-angles",
  "title": "Triangles and Their Angles",
  "objectives": [
    "Classify triangles by sides and by angles.",
    "Use the angle-sum property of a triangle.",
    "Find missing interior and exterior angles.",
    "Recognise isosceles and equilateral triangle facts.",
    "Apply triangle angle facts in multi-step problems."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "Triangles are the simplest polygons, but they are also the building blocks of geometry. Any polygon can be split into triangles, and many proofs in geometry begin by drawing a triangle inside a more complicated shape.",
        "In this lesson you learn how triangle sides and angles are named, why the angles inside every triangle add to $180^\\circ$, and how to use that fact to solve missing-angle problems."
      ]
    },
    {
      "kind": "theory",
      "heading": "Types of triangles",
      "paragraphs": [
        "Triangles can be classified by their sides or by their angles. A triangle may have two labels at once — for example, an isosceles right triangle has two equal sides and one right angle."
      ]
    },
    {
      "kind": "table",
      "heading": "Triangle classification",
      "headers": [
        "Classification",
        "Meaning",
        "Important fact"
      ],
      "rows": [
        [
          "Equilateral",
          "Three equal sides",
          "All angles are $60^\\circ$"
        ],
        [
          "Isosceles",
          "Two equal sides",
          "Base angles are equal"
        ],
        [
          "Scalene",
          "No equal sides",
          "No angles are forced to be equal"
        ],
        [
          "Right-angled",
          "One angle is $90^\\circ$",
          "The other two angles add to $90^\\circ$"
        ],
        [
          "Acute",
          "All angles less than $90^\\circ$",
          "All angles are sharp"
        ],
        [
          "Obtuse",
          "One angle greater than $90^\\circ$",
          "Only one angle can be obtuse"
        ]
      ]
    },
    {
      "kind": "formula",
      "latex": "A+B+C=180^\\circ",
      "caption": "Interior angles of a triangle"
    },
    {
      "kind": "theory",
      "heading": "Why the angles add to $180^\\circ$",
      "paragraphs": [
        "Draw a line through one vertex parallel to the opposite side. The two other angles can be moved to that straight line using alternate interior angle facts. The three angles now sit on a straight line, so they add to $180^\\circ$.",
        "This argument is a simple example of proof: we do not just measure many triangles; we explain why every triangle must behave the same way."
      ]
    },
    {
      "kind": "callout",
      "variant": "remember",
      "title": "Exterior angle theorem",
      "body": "An exterior angle of a triangle equals the sum of the two opposite interior angles. If the remote interior angles are $45^\\circ$ and $70^\\circ$, the exterior angle is $115^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "Find the missing angle in a triangle with angles $52^\\circ$, $68^\\circ$ and $x$.",
      "steps": [
        "Use the angle sum: $52+68+x=180$.",
        "Add known angles: $120+x=180$.",
        "Subtract 120: $x=60$."
      ],
      "answer": "The missing angle is $60^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "An isosceles triangle has vertex angle $40^\\circ$. Find each base angle.",
      "steps": [
        "The base angles are equal, so call each one $x$.",
        "Use the angle sum: $40+x+x=180$.",
        "So $2x=140$ and $x=70$."
      ],
      "answer": "Each base angle is $70^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "An exterior angle of a triangle is $128^\\circ$. One opposite interior angle is $53^\\circ$. Find the other opposite interior angle.",
      "steps": [
        "Exterior angle = sum of opposite interior angles.",
        "So $128=53+x$.",
        "Subtract 53: $x=75$."
      ],
      "answer": "The other angle is $75^\\circ$."
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Architecture",
          "text": "Triangular roof trusses are strong because triangle shapes do not easily deform."
        },
        {
          "area": "Navigation",
          "text": "Triangulation uses angles from known points to locate an unknown position."
        },
        {
          "area": "Design",
          "text": "Patterns, tiles and structural frames often depend on triangle symmetry and angle facts."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Assuming every triangle has a right angle.",
          "right": "Only right-angled triangles contain $90^\\circ$. Most triangles do not."
        },
        {
          "wrong": "Making the exterior angle add to $180^\\circ$ with the two remote angles.",
          "right": "The exterior angle equals the sum of the two remote interior angles; it is supplementary only to its adjacent interior angle."
        }
      ]
    },
    {
      "kind": "practice",
      "heading": "Practice questions",
      "questions": [
        {
          "prompt": "A triangle has angles $35^\\circ$ and $80^\\circ$. Find the third angle.",
          "options": [
            "$55^\\circ$",
            "$65^\\circ$",
            "$75^\\circ$",
            "$145^\\circ$"
          ],
          "answer": 1,
          "explanation": "$180-35-80=65$."
        },
        {
          "prompt": "An equilateral triangle has each angle equal to:",
          "options": [
            "$45^\\circ$",
            "$60^\\circ$",
            "$90^\\circ$",
            "$120^\\circ$"
          ],
          "answer": 1,
          "explanation": "Three equal angles share $180^\\circ$, so each is $60^\\circ$."
        },
        {
          "prompt": "An isosceles triangle has equal base angles of $48^\\circ$. What is the vertex angle?",
          "options": [
            "$84^\\circ$",
            "$96^\\circ$",
            "$132^\\circ$",
            "$48^\\circ$"
          ],
          "answer": 0,
          "explanation": "$180-48-48=84$."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "The interior angles of every triangle add to:",
          "options": [
            "$90^\\circ$",
            "$180^\\circ$",
            "$270^\\circ$",
            "$360^\\circ$"
          ],
          "answer": 1,
          "explanation": "A triangle has angle sum $180^\\circ$."
        },
        {
          "prompt": "A triangle with sides all different is called:",
          "options": [
            "equilateral",
            "isosceles",
            "scalene",
            "regular"
          ],
          "answer": 2,
          "explanation": "Scalene means no equal sides."
        },
        {
          "prompt": "If an exterior angle is $110^\\circ$ and one remote interior angle is $40^\\circ$, the other remote angle is:",
          "options": [
            "$50^\\circ$",
            "$70^\\circ$",
            "$110^\\circ$",
            "$150^\\circ$"
          ],
          "answer": 1,
          "explanation": "$110-40=70$."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Triangles can be classified by sides and angles.",
        "The interior angles of a triangle always add to $180^\\circ$.",
        "In an isosceles triangle, equal sides face equal angles.",
        "An exterior angle equals the sum of the two opposite interior angles."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "classify-triangle-types",
          "label": "Classify triangle types"
        },
        {
          "key": "use-angle-sum",
          "label": "Use angle sum"
        },
        {
          "key": "solve-exterior-angle-problems",
          "label": "Solve exterior angle problems"
        },
        {
          "key": "pass-the-quiz",
          "label": "Pass the quiz"
        }
      ],
      "requireQuizPass": true
    }
  ]
};
