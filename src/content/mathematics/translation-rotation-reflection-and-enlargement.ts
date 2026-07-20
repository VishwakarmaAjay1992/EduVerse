import type { LessonContent } from "@/lib/lesson-content-types";

export const translationRotationReflectionAndEnlargement: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "transformations-and-constructions",
  "lessonSlug": "translation-rotation-reflection-and-enlargement",
  "title": "Translation, Rotation, Reflection and Enlargement",
  "objectives": [
    "Understand translation, rotation, reflection and enlargement definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops translation, rotation, reflection and enlargement beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A transformation moves or changes a figure according to a rule. The original is the object; the new figure is the image."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Translation: slide every point the same distance and direction.",
        "Rotation: turn around a fixed centre by an angle.",
        "Reflection: mirror image across a line.",
        "Enlargement: resize from a centre using a scale factor.",
        "Isometry: transformation preserving lengths and angles."
      ]
    },
    {
      "kind": "formula",
      "latex": "(x,y)\\to(x+a,y+b)",
      "caption": "Translation by vector $(a,b)$"
    },
    {
      "kind": "formula",
      "latex": "(x,y)\\to(-x,y)",
      "caption": "Reflection in y-axis"
    },
    {
      "kind": "formula",
      "latex": "(x,y)\\to(x,-y)",
      "caption": "Reflection in x-axis"
    },
    {
      "kind": "formula",
      "latex": "(x,y)\\to(kx,ky)",
      "caption": "Enlargement about origin, scale factor k"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Translations, rotations and reflections are congruence transformations because they preserve size and shape.",
        "Enlargements preserve shape but change size unless the scale factor is 1, so they produce similar figures.",
        "Coordinate rules make transformations precise. Apply the rule to every vertex and then join the image points."
      ],
      "list": [
        "For rotations, specify centre, angle and direction. Missing any of these makes the transformation unclear."
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
      "prompt": "Translate point A(2, -1) by vector (5, 3).",
      "steps": [
        "Add 5 to x-coordinate and 3 to y-coordinate.",
        "New point is $(2+5,-1+3)$.",
        "Simplify."
      ],
      "answer": "A' = (7, 2)."
    },
    {
      "kind": "example",
      "prompt": "Reflect P(4, -6) in the x-axis.",
      "steps": [
        "Reflection in x-axis keeps x same.",
        "Change sign of y.",
        "$P'=(4,6)$."
      ],
      "answer": "(4, 6)."
    },
    {
      "kind": "example",
      "prompt": "Enlarge point (3, -2) from origin with scale factor 4.",
      "steps": [
        "Multiply both coordinates by 4.",
        "$(3,-2)\\to(12,-8)$.",
        "This is four times as far from origin."
      ],
      "answer": "(12, -8)."
    },
    {
      "kind": "example",
      "prompt": "Rotate (2, 1) by 90° anticlockwise about origin.",
      "steps": [
        "Rule is $(x,y)\\to(-y,x)$.",
        "$(2,1)\\to(-1,2)$.",
        "Check distance from origin is unchanged."
      ],
      "answer": "(-1, 2)."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Translation is a:",
          "options": [
            "slide",
            "turn",
            "mirror",
            "resize"
          ],
          "answer": 0,
          "explanation": "Translation slides a figure."
        },
        {
          "prompt": "Reflection in x-axis maps (3,4) to:",
          "options": [
            "(3,-4)",
            "(-3,4)",
            "(-3,-4)",
            "(4,3)"
          ],
          "answer": 0,
          "explanation": "x same, y changes sign."
        },
        {
          "prompt": "Reflection in y-axis maps (3,4) to:",
          "options": [
            "(3,-4)",
            "(-3,4)",
            "(-3,-4)",
            "(4,3)"
          ],
          "answer": 1,
          "explanation": "y same, x changes sign."
        },
        {
          "prompt": "Enlargement scale 2 makes lengths:",
          "options": [
            "same",
            "double",
            "half",
            "negative"
          ],
          "answer": 1,
          "explanation": "Lengths multiply by scale factor."
        },
        {
          "prompt": "Rotation needs centre and:",
          "options": [
            "angle/direction",
            "area",
            "price",
            "volume"
          ],
          "answer": 0,
          "explanation": "Rotation is not complete without angle and direction."
        },
        {
          "prompt": "Translation by (1,-5) maps (2,3) to:",
          "options": [
            "(3,-2)",
            "(1,8)",
            "(-3,4)",
            "(2,-15)"
          ],
          "answer": 0,
          "explanation": "Add coordinates."
        },
        {
          "prompt": "Which preserves size?",
          "options": [
            "translation",
            "enlargement scale 3",
            "stretch",
            "dilation only"
          ],
          "answer": 0,
          "explanation": "Translation is an isometry."
        },
        {
          "prompt": "90° anticlockwise rule:",
          "options": [
            "(x,y)->(-y,x)",
            "(x,y)->(y,-x)",
            "(x,y)->(-x,-y)",
            "(x,y)->(x,-y)"
          ],
          "answer": 0,
          "explanation": "Standard origin rule."
        },
        {
          "prompt": "A mirror line is used in:",
          "options": [
            "reflection",
            "translation",
            "rotation only",
            "enlargement only"
          ],
          "answer": 0,
          "explanation": "Reflection uses a mirror line."
        },
        {
          "prompt": "Scale factor less than 1 gives:",
          "options": [
            "reduction",
            "larger image",
            "same always",
            "reflection"
          ],
          "answer": 0,
          "explanation": "It makes a smaller similar image."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Translate (0,0) by (-2,5):",
          "options": [
            "(-2,5)",
            "(2,-5)",
            "(5,-2)",
            "(0,0)"
          ],
          "answer": 0,
          "explanation": "Add vector."
        },
        {
          "prompt": "Reflect (-7,2) in y-axis:",
          "options": [
            "(7,2)",
            "(-7,-2)",
            "(2,-7)",
            "(7,-2)"
          ],
          "answer": 0,
          "explanation": "Change x sign."
        },
        {
          "prompt": "Enlargement scale 3: area factor:",
          "options": [
            "3",
            "6",
            "9",
            "27"
          ],
          "answer": 2,
          "explanation": "Area factor is $3^2$."
        },
        {
          "prompt": "Rotation preserves:",
          "options": [
            "distance from centre",
            "area only not shape",
            "nothing",
            "currency"
          ],
          "answer": 0,
          "explanation": "Each point stays same distance from centre."
        },
        {
          "prompt": "180° rotation about origin:",
          "options": [
            "(x,y)->(-x,-y)",
            "(x,y)->(y,x)",
            "(x,y)->(x,-y)",
            "(x,y)->(-x,y)"
          ],
          "answer": 0,
          "explanation": "Both signs change."
        },
        {
          "prompt": "Reflection creates:",
          "options": [
            "mirror image",
            "bigger image always",
            "random shape",
            "curved image"
          ],
          "answer": 0,
          "explanation": "A reflection mirrors."
        },
        {
          "prompt": "Object means:",
          "options": [
            "original figure",
            "new figure",
            "axis",
            "scale factor"
          ],
          "answer": 0,
          "explanation": "Object is before transformation."
        },
        {
          "prompt": "Image means:",
          "options": [
            "after transformation",
            "before transformation",
            "centre only",
            "angle only"
          ],
          "answer": 0,
          "explanation": "Image is result."
        },
        {
          "prompt": "Translation preserves angles?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "It is an isometry."
        },
        {
          "prompt": "Enlargement preserves angles?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "Similar figures have equal angles."
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
          "wrong": "Moving only one vertex in a transformation.",
          "right": "Apply the same rule to every vertex."
        },
        {
          "wrong": "Forgetting direction in rotation.",
          "right": "State clockwise or anticlockwise and the centre."
        },
        {
          "wrong": "Thinking enlargement changes angles.",
          "right": "Enlargement changes lengths but keeps angles equal."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Translation, Rotation, Reflection and Enlargement",
          "back": "A transformation moves or changes a figure according to a rule. The original is the object; the new figure is the image."
        },
        {
          "front": "Translation",
          "back": "Translation: slide every point the same distance and direction."
        },
        {
          "front": "Rotation",
          "back": "Rotation: turn around a fixed centre by an angle."
        },
        {
          "front": "Reflection",
          "back": "Reflection: mirror image across a line."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Translation, Rotation, Reflection and Enlargement is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
