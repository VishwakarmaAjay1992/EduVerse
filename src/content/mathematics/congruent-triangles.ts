import type { LessonContent } from "@/lib/lesson-content-types";

export const congruentTriangles: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "congruent-triangles",
  "title": "Congruent Triangles",
  "objectives": [
    "Explain what congruent triangles are.",
    "Use SSS, SAS, ASA, AAS and RHS congruence tests.",
    "Match corresponding sides and angles correctly.",
    "Use congruence to prove equal lengths or angles.",
    "Recognise why AAA is not a congruence test."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "Two triangles are congruent when they are exactly the same size and shape. One triangle may be moved, rotated or reflected, but if it can fit exactly on top of the other, the triangles are congruent.",
        "Congruence is powerful because once two triangles are known to be congruent, every pair of corresponding sides and angles is equal."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Congruent triangles",
      "body": "Congruent triangles have equal corresponding sides and equal corresponding angles. The order of letters matters: $\\triangle ABC \\cong \\triangle DEF$ means $A$ matches $D$, $B$ matches $E$, and $C$ matches $F$."
    },
    {
      "kind": "table",
      "heading": "Congruence tests",
      "headers": [
        "Test",
        "Information needed",
        "Meaning"
      ],
      "rows": [
        [
          "SSS",
          "Three sides equal",
          "Side-Side-Side"
        ],
        [
          "SAS",
          "Two sides and the included angle equal",
          "Side-Angle-Side"
        ],
        [
          "ASA",
          "Two angles and the included side equal",
          "Angle-Side-Angle"
        ],
        [
          "AAS",
          "Two angles and a non-included side equal",
          "Angle-Angle-Side"
        ],
        [
          "RHS/HL",
          "Right angle, hypotenuse and one side equal",
          "Right-Hypotenuse-Side"
        ]
      ],
      "note": "AAA proves similarity, not congruence. It fixes the shape but not the size."
    },
    {
      "kind": "theory",
      "heading": "Corresponding parts",
      "paragraphs": [
        "The most common mistake in congruence is matching the wrong sides. Always read triangle names in order or mark equal sides and angles with ticks and arcs.",
        "After proving triangles congruent, you may use CPCTC: Corresponding Parts of Congruent Triangles are Congruent."
      ]
    },
    {
      "kind": "example",
      "prompt": "Triangles $ABC$ and $DEF$ have $AB=DE$, $BC=EF$ and $AC=DF$. Are they congruent?",
      "steps": [
        "All three pairs of corresponding sides are equal.",
        "This matches the SSS congruence test."
      ],
      "answer": "Yes, $\\triangle ABC \\cong \\triangle DEF$ by SSS."
    },
    {
      "kind": "example",
      "prompt": "In triangles $PQR$ and $XYZ$, $PQ=XY$, $QR=YZ$, and $\\angle Q=\\angle Y$. Which congruence test applies?",
      "steps": [
        "The equal angle is between the two equal sides in each triangle.",
        "This is side-angle-side."
      ],
      "answer": "The triangles are congruent by SAS."
    },
    {
      "kind": "example",
      "prompt": "Why does AAA not prove congruence?",
      "steps": [
        "AAA makes all angles equal, so the triangles have the same shape.",
        "But one triangle could be a larger scaled copy of the other.",
        "Same shape does not guarantee same size."
      ],
      "answer": "AAA proves similarity, not congruence."
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Engineering",
          "text": "Congruent triangles are used to prove symmetry and stability in frames."
        },
        {
          "area": "Manufacturing",
          "text": "Identical triangular parts must be congruent so they fit the same assembly."
        },
        {
          "area": "Proofs",
          "text": "Many geometry proofs split a figure into triangles and prove them congruent."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Using SSA as a congruence rule.",
          "right": "SSA is generally not reliable because it can create two different triangles."
        },
        {
          "wrong": "Forgetting that order matters in triangle names.",
          "right": "If $\\triangle ABC \\cong \\triangle DEF$, then $AC$ matches $DF$, not necessarily $DE$."
        },
        {
          "wrong": "Thinking AAA proves congruence.",
          "right": "AAA proves similarity only."
        }
      ]
    },
    {
      "kind": "practice",
      "heading": "Practice questions",
      "questions": [
        {
          "prompt": "Which test uses three equal side pairs?",
          "options": [
            "SAS",
            "SSS",
            "ASA",
            "AAA"
          ],
          "answer": 1,
          "explanation": "SSS means Side-Side-Side."
        },
        {
          "prompt": "Which test is for right triangles using hypotenuse and one side?",
          "options": [
            "RHS/HL",
            "AAA",
            "SSS",
            "AAS"
          ],
          "answer": 0,
          "explanation": "Right-Hypotenuse-Side is a special right-triangle test."
        },
        {
          "prompt": "AAA proves:",
          "options": [
            "congruence only",
            "similarity only",
            "neither similarity nor congruence",
            "right angles"
          ],
          "answer": 1,
          "explanation": "AAA fixes the shape but not size."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "If two triangles are congruent, their corresponding sides are:",
          "options": [
            "proportional only",
            "equal",
            "always parallel",
            "different"
          ],
          "answer": 1,
          "explanation": "Congruence means same size and shape."
        },
        {
          "prompt": "SAS requires the angle to be:",
          "options": [
            "outside the two sides",
            "included between the two sides",
            "a right angle always",
            "unknown"
          ],
          "answer": 1,
          "explanation": "SAS uses two sides and their included angle."
        },
        {
          "prompt": "CPCTC is used after proving:",
          "options": [
            "parallel lines",
            "triangle congruence",
            "area equality",
            "a circle theorem"
          ],
          "answer": 1,
          "explanation": "It lets you claim corresponding parts are equal."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Congruent triangles have the same size and shape.",
        "Main tests: SSS, SAS, ASA, AAS and RHS/HL.",
        "AAA proves similarity, not congruence.",
        "After congruence, corresponding sides and angles are equal."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "understand-congruence",
          "label": "Understand congruence"
        },
        {
          "key": "choose-a-congruence-test",
          "label": "Choose a congruence test"
        },
        {
          "key": "match-corresponding-parts",
          "label": "Match corresponding parts"
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
