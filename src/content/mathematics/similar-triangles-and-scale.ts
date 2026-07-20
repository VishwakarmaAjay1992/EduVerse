import type { LessonContent } from "@/lib/lesson-content-types";

export const similarTrianglesAndScale: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "similar-triangles-and-scale",
  "title": "Similar Triangles and Scale",
  "objectives": [
    "Understand similar triangles and scale definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops similar triangles and scale beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "Similar triangles have the same shape but not necessarily the same size. Corresponding angles are equal and corresponding sides are in the same ratio."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Scale factor: multiplier from one figure to a similar figure.",
        "AA similarity: two equal angles are enough for triangle similarity.",
        "Corresponding sides: sides in matching positions.",
        "Enlargement: transformation that changes size by a scale factor."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\frac{AB}{DE}=\\frac{BC}{EF}=\\frac{AC}{DF}",
      "caption": "Corresponding side ratios"
    },
    {
      "kind": "formula",
      "latex": "\\text{scale factor}=\\frac{\\text{new length}}{\\text{original length}}",
      "caption": "Scale factor"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Similarity is why maps, models and drawings work. The angles stay the same while all lengths are multiplied by one scale factor.",
        "AA is enough because once two angles match, the third angle also matches by the triangle angle sum.",
        "Area scale factor is the square of the length scale factor; volume scale factor is the cube of the length scale factor."
      ],
      "list": [
        "Set proportions carefully with matching sides in the same order."
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
      "prompt": "Triangles are similar with scale factor 3 from small to large. A small side is 7 cm. Find matching large side.",
      "steps": [
        "Multiply by the scale factor.",
        "Large side = $7\\times3$.",
        "Calculate 21."
      ],
      "answer": "21 cm."
    },
    {
      "kind": "example",
      "prompt": "Similar triangles have sides 4 and 10 corresponding. Another small side is 6. Find matching large side.",
      "steps": [
        "Scale factor $=10/4=2.5$.",
        "Large side $=6\\times2.5$.",
        "Calculate 15."
      ],
      "answer": "15."
    },
    {
      "kind": "example",
      "prompt": "A 1:50 model has a wall 8 cm long. Find real length.",
      "steps": [
        "Scale 1:50 means real is 50 times model.",
        "$8\\times50=400$ cm.",
        "Convert: 400 cm = 4 m."
      ],
      "answer": "4 m."
    },
    {
      "kind": "example",
      "prompt": "Two triangles have angles 35°, 65°, 80° and 35°, 80°, 65°. Are they similar?",
      "steps": [
        "All three angle measures match.",
        "Two matching angles are enough.",
        "So they are similar by AA."
      ],
      "answer": "Yes, similar by AA."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Similar triangles have:",
          "options": [
            "same shape",
            "same size always",
            "same colour",
            "same area always"
          ],
          "answer": 0,
          "explanation": "Similarity means same shape."
        },
        {
          "prompt": "Scale factor from 5 to 20 is:",
          "options": [
            "2",
            "4",
            "15",
            "25"
          ],
          "answer": 1,
          "explanation": "$20/5=4$."
        },
        {
          "prompt": "AA similarity needs:",
          "options": [
            "two equal angles",
            "three sides equal",
            "same area",
            "one angle only"
          ],
          "answer": 0,
          "explanation": "Two equal angles prove triangle similarity."
        },
        {
          "prompt": "Length scale factor 3 gives area factor:",
          "options": [
            "3",
            "6",
            "9",
            "27"
          ],
          "answer": 2,
          "explanation": "Area factor is $3^2=9$."
        },
        {
          "prompt": "A map scale 1:1000 means 2 cm represents:",
          "options": [
            "20 cm",
            "200 cm",
            "2000 cm",
            "2 cm"
          ],
          "answer": 2,
          "explanation": "$2\\times1000=2000$ cm."
        },
        {
          "prompt": "Corresponding sides must be:",
          "options": [
            "added",
            "matched in order",
            "ignored",
            "perpendicular"
          ],
          "answer": 1,
          "explanation": "Correct matching is essential."
        },
        {
          "prompt": "If small side 9, large side 12, scale factor large/small:",
          "options": [
            "3/4",
            "4/3",
            "21",
            "108"
          ],
          "answer": 1,
          "explanation": "$12/9=4/3$."
        },
        {
          "prompt": "Similar triangles always have equal:",
          "options": [
            "angles",
            "side lengths",
            "areas",
            "perimeters"
          ],
          "answer": 0,
          "explanation": "Angles match; lengths are proportional."
        },
        {
          "prompt": "If scale factor is 1, similar figures are also:",
          "options": [
            "congruent",
            "larger",
            "smaller",
            "impossible"
          ],
          "answer": 0,
          "explanation": "Same shape and same size."
        },
        {
          "prompt": "Volume factor for length scale 2 is:",
          "options": [
            "2",
            "4",
            "6",
            "8"
          ],
          "answer": 3,
          "explanation": "Volume factor is $2^3=8$."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "AA proves:",
          "options": [
            "similarity",
            "congruence always",
            "area only",
            "perimeter only"
          ],
          "answer": 0,
          "explanation": "AA is a similarity test."
        },
        {
          "prompt": "Small side 3, large side 12. Scale factor:",
          "options": [
            "3",
            "4",
            "9",
            "15"
          ],
          "answer": 1,
          "explanation": "12/3=4."
        },
        {
          "prompt": "If lengths double, areas:",
          "options": [
            "double",
            "triple",
            "quadruple",
            "unchanged"
          ],
          "answer": 2,
          "explanation": "Area factor $2^2=4$."
        },
        {
          "prompt": "Similar triangles have side ratios:",
          "options": [
            "equal",
            "random",
            "always 1",
            "negative"
          ],
          "answer": 0,
          "explanation": "Corresponding side ratios are equal."
        },
        {
          "prompt": "A photo enlarged by scale 1.5 has a 10 cm width become:",
          "options": [
            "6.67 cm",
            "11.5 cm",
            "15 cm",
            "150 cm"
          ],
          "answer": 2,
          "explanation": "$10\\times1.5=15$."
        },
        {
          "prompt": "Two equal angles imply the third:",
          "options": [
            "also equal",
            "right only",
            "obtuse only",
            "unknown"
          ],
          "answer": 0,
          "explanation": "Angle sum forces the third to match."
        },
        {
          "prompt": "Corresponding sides are:",
          "options": [
            "matching positions",
            "opposite colours",
            "only longest sides",
            "unrelated"
          ],
          "answer": 0,
          "explanation": "They occupy matching positions."
        },
        {
          "prompt": "Length factor 5 gives area factor:",
          "options": [
            "5",
            "10",
            "25",
            "125"
          ],
          "answer": 2,
          "explanation": "$5^2=25$."
        },
        {
          "prompt": "A scale drawing 1:20: 6 cm means:",
          "options": [
            "12 cm",
            "26 cm",
            "120 cm",
            "1.2 cm"
          ],
          "answer": 2,
          "explanation": "$6\\times20=120$."
        },
        {
          "prompt": "Similarity symbol is often:",
          "options": [
            "~",
            "=",
            "⊥",
            "∥"
          ],
          "answer": 0,
          "explanation": "~ denotes similarity."
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
          "wrong": "Using the same scale factor for area.",
          "right": "Area scale factor is the square of the length scale factor."
        },
        {
          "wrong": "Matching the wrong sides in a proportion.",
          "right": "Use angles or position to match corresponding sides."
        },
        {
          "wrong": "Thinking similar means identical size.",
          "right": "Similar means same shape; congruent means same shape and size."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Similar Triangles and Scale",
          "back": "Similar triangles have the same shape but not necessarily the same size. Corresponding angles are equal and corresponding sides are in the same ratio."
        },
        {
          "front": "Scale factor",
          "back": "Scale factor: multiplier from one figure to a similar figure."
        },
        {
          "front": "AA similarity",
          "back": "AA similarity: two equal angles are enough for triangle similarity."
        },
        {
          "front": "Corresponding sides",
          "back": "Corresponding sides: sides in matching positions."
        }
      ]
    },
    {
      "kind": "imageGallery",
      "heading": "PDF visual reference: similarity and triangle theorems",
      "note": "These pages strengthen the similarity lesson with AA, SAS and SSS similarity conditions plus proportionality and area-ratio theorems.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-07.webp", "alt": "Similarity conditions and triangle theorems", "caption": "Similarity conditions and key theorems: Pythagoras, angle bisector theorem, basic proportionality and midpoint theorem." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-08.webp", "alt": "Area ratios of similar triangles and Apollonius theorem", "caption": "Apollonius theorem and the area-ratio rules for similar triangles." },
        { "src": "/geometry-pdf/visual-proofs/visual-proof-12.webp", "alt": "Law of cosines visual proof", "caption": "A proof-without-words diagram for the Law of Cosines, useful when similarity and non-right-triangle relationships appear together." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
