import type { LessonContent } from "@/lib/lesson-content-types";

export const circleTheoremsAndProofs: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "circles",
  "lessonSlug": "circle-theorems-and-proofs",
  "title": "Circle Theorems and Proofs",
  "objectives": [
    "Understand circle theorems and proofs definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops circle theorems and proofs beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "Circle theorems are exact angle relationships formed by chords, tangents, radii and arcs in a circle."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Angle at centre: angle made by two radii.",
        "Angle at circumference: angle whose vertex lies on the circle.",
        "Cyclic quadrilateral: quadrilateral with all vertices on one circle.",
        "Tangent-radius theorem: tangent is perpendicular to radius at point of contact."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\angle AOB=2\\angle ACB",
      "caption": "Angle at centre is twice angle at circumference on same arc"
    },
    {
      "kind": "formula",
      "latex": "\\text{Opposite angles of cyclic quadrilateral}=180^\\circ",
      "caption": "Cyclic quadrilateral theorem"
    },
    {
      "kind": "formula",
      "latex": "\\text{radius}\\perp\\text{tangent}",
      "caption": "Tangent-radius theorem"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Circle theorem questions depend heavily on identifying the same arc. Angles standing on the same chord or arc are equal.",
        "An angle in a semicircle is a right angle because the central angle is $180^\\circ$, so the circumference angle is half of it.",
        "Opposite angles in a cyclic quadrilateral are supplementary. This is often hidden inside complex diagrams."
      ],
      "list": [
        "A proof should name the theorem used after each angle statement."
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
      "prompt": "Central angle AOB is $110^\\circ$. Find angle ACB on the same arc.",
      "steps": [
        "Angle at centre is twice angle at circumference.",
        "So $110=2\\angle ACB$.",
        "Divide by 2."
      ],
      "answer": "$55^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "Angle in a semicircle is formed by diameter AB and point C on circle. Find angle ACB.",
      "steps": [
        "AB is a diameter, so central angle is $180^\\circ$.",
        "Angle at circumference is half.",
        "$180/2=90$."
      ],
      "answer": "$90^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "A cyclic quadrilateral has one angle $73^\\circ$. Find the opposite angle.",
      "steps": [
        "Opposite angles in cyclic quadrilateral add to $180^\\circ$.",
        "Opposite angle $=180-73$.",
        "Calculate 107."
      ],
      "answer": "$107^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "A tangent touches circle at T and radius OT is drawn. Find angle between tangent and OT.",
      "steps": [
        "Use tangent-radius theorem.",
        "A tangent is perpendicular to radius at contact point.",
        "Perpendicular means $90^\\circ$."
      ],
      "answer": "$90^\\circ$."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Angle at centre is how many times angle at circumference on same arc?",
          "options": [
            "same",
            "twice",
            "half",
            "three times"
          ],
          "answer": 1,
          "explanation": "Centre angle is twice."
        },
        {
          "prompt": "Angle in semicircle is:",
          "options": [
            "45°",
            "60°",
            "90°",
            "180°"
          ],
          "answer": 2,
          "explanation": "It is a right angle."
        },
        {
          "prompt": "Opposite angles in cyclic quadrilateral add to:",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°"
          ],
          "answer": 1,
          "explanation": "They are supplementary."
        },
        {
          "prompt": "Tangent and radius meet at:",
          "options": [
            "0°",
            "45°",
            "90°",
            "180°"
          ],
          "answer": 2,
          "explanation": "They are perpendicular."
        },
        {
          "prompt": "Angles in same segment are:",
          "options": [
            "equal",
            "supplementary",
            "right always",
            "zero"
          ],
          "answer": 0,
          "explanation": "Same chord/same arc gives equal angles."
        },
        {
          "prompt": "If centre angle 84°, circumference angle:",
          "options": [
            "42°",
            "84°",
            "168°",
            "96°"
          ],
          "answer": 0,
          "explanation": "Half of 84."
        },
        {
          "prompt": "Cyclic quadrilateral has all vertices:",
          "options": [
            "on a circle",
            "inside triangle",
            "on a line",
            "at centre"
          ],
          "answer": 0,
          "explanation": "All four vertices lie on one circle."
        },
        {
          "prompt": "If cyclic angle is 125°, opposite is:",
          "options": [
            "55°",
            "65°",
            "125°",
            "235°"
          ],
          "answer": 0,
          "explanation": "$180-125=55$."
        },
        {
          "prompt": "Radius to tangent point is:",
          "options": [
            "parallel",
            "perpendicular",
            "curved",
            "equal to tangent always"
          ],
          "answer": 1,
          "explanation": "Tangent-radius theorem."
        },
        {
          "prompt": "Circle proofs need:",
          "options": [
            "reasons/theorems",
            "only final number",
            "no diagram",
            "guesses"
          ],
          "answer": 0,
          "explanation": "Reasons justify geometry steps."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Centre angle 150°, circumference angle:",
          "options": [
            "75°",
            "100°",
            "150°",
            "300°"
          ],
          "answer": 0,
          "explanation": "Half of centre angle."
        },
        {
          "prompt": "Opposite cyclic angles 92° and x. x:",
          "options": [
            "88°",
            "92°",
            "180°",
            "268°"
          ],
          "answer": 0,
          "explanation": "$180-92=88$."
        },
        {
          "prompt": "Tangent touches a circle at:",
          "options": [
            "one point",
            "two points",
            "centre",
            "all points"
          ],
          "answer": 0,
          "explanation": "A tangent has one contact point."
        },
        {
          "prompt": "Angle in same segment theorem says angles are:",
          "options": [
            "equal",
            "different always",
            "right always",
            "reflex"
          ],
          "answer": 0,
          "explanation": "They stand on same arc."
        },
        {
          "prompt": "Diameter creates angle at circumference:",
          "options": [
            "right angle",
            "acute only",
            "obtuse only",
            "straight"
          ],
          "answer": 0,
          "explanation": "Angle in semicircle theorem."
        },
        {
          "prompt": "Radius is drawn from:",
          "options": [
            "centre",
            "outside point",
            "any chord midpoint only",
            "tangent line only"
          ],
          "answer": 0,
          "explanation": "Radius starts at centre."
        },
        {
          "prompt": "Cyclic quadrilateral opposite angle to 40°:",
          "options": [
            "40°",
            "50°",
            "140°",
            "320°"
          ],
          "answer": 2,
          "explanation": "$180-40=140$."
        },
        {
          "prompt": "A proof statement should include:",
          "options": [
            "the theorem used",
            "only drawing",
            "price",
            "random measurement"
          ],
          "answer": 0,
          "explanation": "Reasons are essential."
        },
        {
          "prompt": "If circumference angle is 38°, centre angle same arc:",
          "options": [
            "19°",
            "38°",
            "76°",
            "142°"
          ],
          "answer": 2,
          "explanation": "Centre is twice."
        },
        {
          "prompt": "Tangent-radius angle is:",
          "options": [
            "$90°$",
            "$60°$",
            "$45°$",
            "$180°$"
          ],
          "answer": 0,
          "explanation": "Perpendicular means $90°$."
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
          "wrong": "Using the centre theorem when angles are not on the same arc.",
          "right": "First check the chord or arc involved."
        },
        {
          "wrong": "Forgetting opposite cyclic angles add to 180°.",
          "right": "Use supplementary angles in cyclic quadrilaterals."
        },
        {
          "wrong": "Assuming every line touching a diagram is tangent.",
          "right": "A tangent must touch at exactly one point and is perpendicular to the radius there."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Circle Theorems and Proofs",
          "back": "Circle theorems are exact angle relationships formed by chords, tangents, radii and arcs in a circle."
        },
        {
          "front": "Angle at centre",
          "back": "Angle at centre: angle made by two radii."
        },
        {
          "front": "Angle at circumference",
          "back": "Angle at circumference: angle whose vertex lies on the circle."
        },
        {
          "front": "Cyclic quadrilateral",
          "back": "Cyclic quadrilateral: quadrilateral with all vertices on one circle."
        }
      ]
    },
    {
      "kind": "imageGallery",
      "heading": "PDF visual reference: circle theorems",
      "note": "These pages support the circle theorem lesson with chord, tangent, arc, sector, segment and cyclic-quadrilateral results.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-12.webp", "alt": "Circle theorem reference page 12", "caption": "Chord, arc and tangent facts from the uploaded Geometry formula guide." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-13.webp", "alt": "Circle theorem reference page 13", "caption": "Equal chords, angles in the same segment and cyclic quadrilateral facts." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-15.webp", "alt": "Circle theorem remembered results", "caption": "Important remembered results for tangents, arcs and cyclic quadrilaterals." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
