import type { LessonContent } from "@/lib/lesson-content-types";

export const congruentTriangles: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "congruent-triangles",
  "title": "Congruent Triangles",
  "objectives": [
    "Understand congruent triangles definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops congruent triangles beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "Congruent triangles are triangles that have exactly the same size and shape. Their matching sides and matching angles are equal."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "SSS: three corresponding sides equal.",
        "SAS: two sides and the included angle equal.",
        "ASA/AAS: enough matching angles and a side to fix the triangle.",
        "RHS/HL: right angle, hypotenuse and one side equal."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\triangle ABC \\cong \\triangle DEF",
      "caption": "Triangle congruence notation"
    },
    {
      "kind": "formula",
      "latex": "\\text{CPCTC}",
      "caption": "Corresponding parts of congruent triangles are congruent"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Congruence means one triangle could be moved by rotation, reflection or translation until it sits exactly on the other.",
        "The order of letters matters. If $\\triangle ABC\\cong\\triangle DEF$, then A matches D, B matches E and C matches F.",
        "AAA is not a congruence test because it fixes shape but not size."
      ],
      "list": [
        "After proving triangles congruent, you may use CPCTC to prove another side or angle equal."
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
      "prompt": "Triangles ABC and PQR have AB=PQ, AC=PR, and angle A=angle P. Prove congruent.",
      "steps": [
        "The equal angle is between the two equal sides.",
        "Use SAS congruence.",
        "Therefore $\\triangle ABC\\cong\\triangle PQR$."
      ],
      "answer": "Congruent by SAS."
    },
    {
      "kind": "example",
      "prompt": "Two right triangles have equal hypotenuse and one equal leg. Which test applies?",
      "steps": [
        "Both have a right angle.",
        "Hypotenuse and one corresponding side are equal.",
        "Use RHS/HL."
      ],
      "answer": "Congruent by RHS/HL."
    },
    {
      "kind": "example",
      "prompt": "If $\\triangle ABC\\cong\\triangle DEF$ and AC=12 cm, find DF.",
      "steps": [
        "Correspondence: A matches D and C matches F.",
        "So AC matches DF.",
        "Corresponding sides are equal."
      ],
      "answer": "DF = 12 cm."
    },
    {
      "kind": "example",
      "prompt": "Why is AAA not enough for congruence?",
      "steps": [
        "AAA gives equal angles only.",
        "Triangles can be similar but different sizes.",
        "So AAA proves similarity, not congruence."
      ],
      "answer": "AAA is not a congruence rule."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Which proves congruence?",
          "options": [
            "AAA",
            "SSS",
            "Same perimeter only",
            "Same area only"
          ],
          "answer": 1,
          "explanation": "SSS is a valid congruence test."
        },
        {
          "prompt": "CPCTC is used after:",
          "options": [
            "proving congruence",
            "finding area",
            "drawing circle",
            "measuring perimeter"
          ],
          "answer": 0,
          "explanation": "It uses corresponding parts after congruence."
        },
        {
          "prompt": "SAS needs the angle to be:",
          "options": [
            "outside the sides",
            "included between the two sides",
            "any angle",
            "right angle only"
          ],
          "answer": 1,
          "explanation": "SAS uses the included angle."
        },
        {
          "prompt": "AAA proves:",
          "options": [
            "congruence",
            "similarity only",
            "area equality",
            "perimeter equality"
          ],
          "answer": 1,
          "explanation": "AAA fixes shape, not size."
        },
        {
          "prompt": "RHS applies to:",
          "options": [
            "all triangles",
            "right triangles",
            "circles",
            "quadrilaterals"
          ],
          "answer": 1,
          "explanation": "It is for right triangles."
        },
        {
          "prompt": "If triangles are congruent, corresponding angles are:",
          "options": [
            "equal",
            "supplementary",
            "always right",
            "unknown"
          ],
          "answer": 0,
          "explanation": "Congruence preserves angles."
        },
        {
          "prompt": "If $△ABC≅△XYZ$, B corresponds to:",
          "options": [
            "X",
            "Y",
            "Z",
            "A"
          ],
          "answer": 1,
          "explanation": "Letter order gives correspondence."
        },
        {
          "prompt": "Same area guarantees congruence?",
          "options": [
            "Yes",
            "No",
            "Only triangles",
            "Only right triangles"
          ],
          "answer": 1,
          "explanation": "Different shapes can have same area."
        },
        {
          "prompt": "SSS uses:",
          "options": [
            "three angles",
            "three sides",
            "two sides only",
            "one side one angle"
          ],
          "answer": 1,
          "explanation": "SSS means side-side-side."
        },
        {
          "prompt": "Reflection can map congruent triangles?",
          "options": [
            "Yes",
            "No",
            "Only enlargement",
            "Only circle"
          ],
          "answer": 0,
          "explanation": "Reflections preserve size and shape."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Valid congruence test:",
          "options": [
            "SSA always",
            "SAS",
            "AAA",
            "Perimeter only"
          ],
          "answer": 1,
          "explanation": "SAS is valid."
        },
        {
          "prompt": "After $△ABC≅△DEF$, angle C equals:",
          "options": [
            "D",
            "E",
            "F",
            "A"
          ],
          "answer": 2,
          "explanation": "C corresponds to F."
        },
        {
          "prompt": "RHS means right angle, hypotenuse and:",
          "options": [
            "one side",
            "two angles",
            "area",
            "perimeter"
          ],
          "answer": 0,
          "explanation": "RHS/HL uses one leg."
        },
        {
          "prompt": "Congruent figures have:",
          "options": [
            "same shape and size",
            "same shape only",
            "same colour",
            "same position"
          ],
          "answer": 0,
          "explanation": "Both size and shape match."
        },
        {
          "prompt": "AAS is:",
          "options": [
            "valid",
            "invalid always",
            "area formula",
            "circle theorem"
          ],
          "answer": 0,
          "explanation": "Two angles and a side determine a triangle."
        },
        {
          "prompt": "CPCTC helps prove:",
          "options": [
            "matching parts equal",
            "volume",
            "radius",
            "scale factor"
          ],
          "answer": 0,
          "explanation": "Corresponding parts are equal."
        },
        {
          "prompt": "Same three sides imply:",
          "options": [
            "SSS congruence",
            "AAA only",
            "no conclusion",
            "circle"
          ],
          "answer": 0,
          "explanation": "SSS proves congruence."
        },
        {
          "prompt": "The symbol $\\cong$ means:",
          "options": [
            "similar",
            "congruent",
            "parallel",
            "perpendicular"
          ],
          "answer": 1,
          "explanation": "It denotes congruence."
        },
        {
          "prompt": "A triangle can be congruent after rotation?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "Rotation preserves size and shape."
        },
        {
          "prompt": "In SAS, the angle is:",
          "options": [
            "between given sides",
            "opposite any side",
            "not needed",
            "outside triangle"
          ],
          "answer": 0,
          "explanation": "Included angle is required."
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
          "wrong": "Using AAA to prove congruence.",
          "right": "AAA proves similarity, not same size."
        },
        {
          "wrong": "Ignoring letter order.",
          "right": "Use the congruence statement to match vertices correctly."
        },
        {
          "wrong": "Using CPCTC before proving congruence.",
          "right": "First prove triangles congruent, then use CPCTC."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Congruent Triangles",
          "back": "Congruent triangles are triangles that have exactly the same size and shape. Their matching sides and matching angles are equal."
        },
        {
          "front": "SSS",
          "back": "SSS: three corresponding sides equal."
        },
        {
          "front": "SAS",
          "back": "SAS: two sides and the included angle equal."
        },
        {
          "front": "ASA/AAS",
          "back": "ASA/AAS: enough matching angles and a side to fix the triangle."
        }
      ]
    },
    {
      "kind": "imageGallery",
      "heading": "PDF visual reference: congruent triangles",
      "note": "This page from the uploaded guide summarises the triangle congruency conditions students should memorise and apply in proof questions.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-06.webp", "alt": "Congruency criteria SSS SAS ASA AAS RHS", "caption": "Congruency criteria: SSS, SAS, ASA/AAS and RHS, with the reminder that corresponding sides and angles are equal." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
