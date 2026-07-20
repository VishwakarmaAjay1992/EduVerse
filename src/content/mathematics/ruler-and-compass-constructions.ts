import type { LessonContent } from "@/lib/lesson-content-types";

export const rulerAndCompassConstructions: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "transformations-and-symmetry",
  "lessonSlug": "ruler-and-compass-constructions",
  "title": "Ruler and Compass Constructions",
  "objectives": [
    "Define key vocabulary for constructions.",
    "Use the main formula or theorem for constructions.",
    "Solve missing-value problems step by step.",
    "Recognise common mistakes in diagrams and calculations.",
    "Apply the topic to real-life measurement, design or reasoning problems."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops the next major idea in geometry: constructions. You will connect definitions, diagrams, formulas and reasoning so that the topic becomes more than a list of rules.",
        "The goal is to read a diagram carefully, choose the correct property, and then show each calculation clearly."
      ]
    },
    {
      "kind": "theory",
      "heading": "Core vocabulary",
      "paragraphs": [
        "Important words in this lesson include: bisect a line, bisect an angle, construct perpendiculars, construct triangles, loci. Each word names a specific part of the diagram or a specific transformation, so careful vocabulary prevents wrong calculations.",
        "Before solving, mark the known information on the diagram mentally: equal sides, parallel lines, right angles, centres, radii, axes or scale factors."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\text{perpendicular bisector}",
      "caption": "Key formula or idea for constructions"
    },
    {
      "kind": "table",
      "heading": "Quick reference",
      "headers": [
        "Item",
        "Meaning",
        "Use"
      ],
      "rows": [
        [
          "Bisect A Line",
          "A central idea in constructions",
          "Start by identifying it in the diagram"
        ],
        [
          "Bisect An Angle",
          "A related measurement or property",
          "Use it to choose the correct formula"
        ],
        [
          "Construct Perpendiculars",
          "A second related property",
          "Often needed in multi-step questions"
        ],
        [
          "Units",
          "Length, area, angle or volume units",
          "Write the correct unit in the answer"
        ]
      ]
    },
    {
      "kind": "example",
      "prompt": "A problem gives information about bisect a line and asks for bisect an angle. Explain the first step.",
      "steps": [
        "List the known values from the diagram.",
        "Identify the correct relationship or formula.",
        "Substitute the values carefully before simplifying."
      ],
      "answer": "The first step is not calculation; it is choosing the property that connects the given information to the unknown."
    },
    {
      "kind": "example",
      "prompt": "Use the key idea of constructions to solve a missing value problem.",
      "steps": [
        "Write the rule: $\\text{perpendicular bisector}$.",
        "Substitute the known values from the question.",
        "Solve the resulting equation or simplify the expression.",
        "Check that the answer has the correct unit or angle size."
      ],
      "answer": "The final answer should follow logically from the diagram and the formula, not from guessing by appearance."
    },
    {
      "kind": "example",
      "prompt": "A student gets an answer that looks possible by eye. Why is that not enough in constructions?",
      "steps": [
        "Diagrams are often not drawn to scale.",
        "A visual estimate can be misleading.",
        "Use the marked information and theorem instead of measuring the screen."
      ],
      "answer": "Geometry answers must be justified by properties, formulas or proof, not by appearance alone."
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Design and architecture",
          "text": "Constructions appears in floor plans, elevations, tiling layouts and structural drawings."
        },
        {
          "area": "Engineering",
          "text": "Accurate geometry prevents parts from being the wrong size, angle or position."
        },
        {
          "area": "Everyday measurement",
          "text": "Packaging, maps, shadows, patterns and object dimensions use these geometric ideas."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Trusting a diagram because it looks accurate.",
          "right": "Use given measurements and marked properties; many exam diagrams are not to scale."
        },
        {
          "wrong": "Forgetting units.",
          "right": "Angles use degrees; lengths use cm/m; areas use square units; volumes use cubic units."
        },
        {
          "wrong": "Using a formula without checking conditions.",
          "right": "Every theorem has conditions such as parallel lines, a right angle, a centre or a regular polygon."
        }
      ]
    },
    {
      "kind": "practice",
      "heading": "Practice questions",
      "questions": [
        {
          "prompt": "Which action should come first in a constructions problem?",
          "options": [
            "Guess from the picture",
            "Identify the given properties",
            "Write the answer only",
            "Ignore units"
          ],
          "answer": 1,
          "explanation": "Geometry starts with reading the diagram and given facts."
        },
        {
          "prompt": "Why can a diagram be misleading?",
          "options": [
            "It is always exact",
            "It may not be drawn to scale",
            "It has no labels",
            "It is never useful"
          ],
          "answer": 1,
          "explanation": "Diagrams guide reasoning but are often not to scale."
        },
        {
          "prompt": "What should appear in a final measurement answer?",
          "options": [
            "Only a number",
            "Correct unit",
            "A random diagram",
            "No explanation"
          ],
          "answer": 1,
          "explanation": "Units show what kind of quantity was found."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "The safest way to solve constructions problems is to:",
          "options": [
            "measure the screen",
            "use definitions and formulas",
            "copy a friend's answer",
            "ignore markings"
          ],
          "answer": 1,
          "explanation": "Geometry is based on marked facts and logical rules."
        },
        {
          "prompt": "A square unit is used for:",
          "options": [
            "length",
            "area",
            "angle",
            "mass"
          ],
          "answer": 1,
          "explanation": "Area is measured in square units."
        },
        {
          "prompt": "A cubic unit is used for:",
          "options": [
            "volume",
            "angle",
            "speed",
            "ratio only"
          ],
          "answer": 0,
          "explanation": "Volume is measured in cubic units."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Constructions depends on precise vocabulary and diagram reading.",
        "Choose the theorem or formula that matches the conditions.",
        "Show substitutions and units clearly.",
        "Do not rely only on what a diagram appears to show."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "learn-key-vocabulary",
          "label": "Learn key vocabulary"
        },
        {
          "key": "use-the-main-formula",
          "label": "Use the main formula"
        },
        {
          "key": "solve-examples",
          "label": "Solve examples"
        },
        {
          "key": "complete-practice",
          "label": "Complete practice"
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
