import type { LessonContent } from "@/lib/lesson-content-types";

export const similarTrianglesAndScale: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "similar-triangles-and-scale",
  "title": "Similar Triangles and Scale",
  "objectives": [
    "Explain similarity as same shape but possibly different size.",
    "Use AA, SAS and SSS similarity tests.",
    "Find scale factors between similar triangles.",
    "Calculate missing side lengths using proportional ratios.",
    "Apply similarity in maps, shadows and models."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "Similar triangles have the same shape but not necessarily the same size. Their corresponding angles are equal, and their corresponding side lengths are in the same ratio.",
        "Similarity is the mathematics behind scale drawings, maps, models, shadows and indirect measurement."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Similar triangles",
      "body": "$\\triangle ABC \\sim \\triangle DEF$ means the angles match in order and the side ratios are equal: $\\frac{AB}{DE}=\\frac{BC}{EF}=\\frac{AC}{DF}$."
    },
    {
      "kind": "table",
      "heading": "Similarity tests",
      "headers": [
        "Test",
        "Information needed"
      ],
      "rows": [
        [
          "AA",
          "Two pairs of equal angles"
        ],
        [
          "SAS similarity",
          "Two side ratios equal and the included angle equal"
        ],
        [
          "SSS similarity",
          "All three side ratios equal"
        ]
      ]
    },
    {
      "kind": "formula",
      "latex": "\\frac{\\text{new length}}{\\text{original length}}=\\text{scale factor}",
      "caption": "Scale factor between similar figures"
    },
    {
      "kind": "example",
      "prompt": "Two similar triangles have corresponding sides 4 cm and 10 cm. What is the scale factor from the smaller triangle to the larger triangle?",
      "steps": [
        "Scale factor $=10/4$.",
        "$10/4=2.5$."
      ],
      "answer": "The scale factor is 2.5."
    },
    {
      "kind": "example",
      "prompt": "Triangles are similar. A side of 6 cm matches a side of 18 cm. Another side is 7 cm in the small triangle. Find the matching large side.",
      "steps": [
        "Scale factor from small to large is $18/6=3$.",
        "Multiply the matching small side by 3: $7\\times3=21$."
      ],
      "answer": "The matching large side is 21 cm."
    },
    {
      "kind": "example",
      "prompt": "A 1.5 m stick casts a 2 m shadow. At the same time, a tree casts a 10 m shadow. Estimate the tree height.",
      "steps": [
        "The sun creates similar right triangles: height/shadow ratios are equal.",
        "$\\frac{1.5}{2}=\\frac{h}{10}$.",
        "Multiply by 10: $h=7.5$."
      ],
      "answer": "The tree is approximately 7.5 m tall."
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Maps",
          "text": "A map is a scaled version of real land distances."
        },
        {
          "area": "Photography",
          "text": "Similar triangles explain how cameras project large scenes onto small sensors."
        },
        {
          "area": "Architecture",
          "text": "Scale models preserve shape while changing size."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Using addition instead of multiplication for scale.",
          "right": "Similar figures use a constant multiplier, not a constant difference."
        },
        {
          "wrong": "Matching the wrong sides.",
          "right": "Always pair sides opposite equal angles."
        },
        {
          "wrong": "Assuming equal angles mean equal size.",
          "right": "Equal angles show same shape, not necessarily same size."
        }
      ]
    },
    {
      "kind": "practice",
      "heading": "Practice questions",
      "questions": [
        {
          "prompt": "A side 5 cm matches 20 cm. Scale factor small to large?",
          "options": [
            "4",
            "15",
            "25",
            "0.25"
          ],
          "answer": 0,
          "explanation": "$20/5=4$."
        },
        {
          "prompt": "If scale factor is 3 and a small side is 9 cm, large side is:",
          "options": [
            "3 cm",
            "12 cm",
            "27 cm",
            "81 cm"
          ],
          "answer": 2,
          "explanation": "$9\\times3=27$."
        },
        {
          "prompt": "AA similarity needs:",
          "options": [
            "one equal angle",
            "two equal angles",
            "three equal sides",
            "one equal side"
          ],
          "answer": 1,
          "explanation": "Two equal angles are enough because the third automatically matches."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Similar triangles always have:",
          "options": [
            "equal areas",
            "equal side lengths",
            "equal corresponding angles",
            "equal perimeter"
          ],
          "answer": 2,
          "explanation": "Similarity means same shape."
        },
        {
          "prompt": "If large/small scale factor is 2, area scale factor is:",
          "options": [
            "2",
            "4",
            "6",
            "8"
          ],
          "answer": 1,
          "explanation": "Areas scale by the square of the length scale factor."
        },
        {
          "prompt": "Which situation commonly uses similar triangles?",
          "options": [
            "finding shadows and heights",
            "adding integers",
            "counting primes",
            "factoring cubics only"
          ],
          "answer": 0,
          "explanation": "Shadow-height problems are classic similarity applications."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Similar triangles have equal corresponding angles and proportional side lengths.",
        "AA is the most common similarity test.",
        "Scale factor is a multiplier between corresponding lengths.",
        "Areas scale by the square of the length scale factor."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "recognise-similarity",
          "label": "Recognise similarity"
        },
        {
          "key": "find-scale-factor",
          "label": "Find scale factor"
        },
        {
          "key": "use-proportions",
          "label": "Use proportions"
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
