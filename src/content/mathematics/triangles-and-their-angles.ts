import type { LessonContent } from "@/lib/lesson-content-types";

export const trianglesAndTheirAngles: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "triangles-and-their-angles",
  "title": "Triangles and Their Angles",
  "objectives": [
    "Understand definitions and vocabulary.",
    "Apply the main theorem or formula.",
    "Solve worked and self-study problems.",
    "Avoid common exam mistakes."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This textbook-style lesson studies triangles and their angles with definitions, theorem statements, worked examples, self-study practice and quizzes.",
        "Do not only memorise the final formula. Learn what each word means, draw the diagram, mark the given information, write the correct relationship, then solve step by step."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A triangle is a closed plane figure formed by three straight sides. Its three interior angles always add to $180^\\circ$."
    },
    {
      "kind": "theory",
      "heading": "Vocabulary you must know",
      "paragraphs": [
        "Geometry questions are mostly language plus diagram reading. These terms should be clear before solving."
      ],
      "list": [
        "Equilateral triangle: three equal sides and three equal angles of $60^\\circ$.",
        "Isosceles triangle: at least two equal sides; equal sides face equal angles.",
        "Scalene triangle: no equal sides.",
        "Right triangle: one angle is $90^\\circ$.",
        "Acute triangle: all angles are less than $90^\\circ$.",
        "Obtuse triangle: one angle is greater than $90^\\circ$.",
        "Exterior angle: an outside angle formed when one side of the triangle is extended."
      ]
    },
    {
      "kind": "formula",
      "latex": "A+B+C=180^\\circ",
      "caption": "Interior angle sum"
    },
    {
      "kind": "formula",
      "latex": "\\text{exterior angle}=\\text{sum of two remote interior angles}",
      "caption": "Exterior angle theorem"
    },
    {
      "kind": "theory",
      "heading": "In-depth explanation",
      "paragraphs": [
        "The angle sum theorem can be proved by drawing a line through one vertex parallel to the opposite side. The two base angles move to that parallel line as alternate interior angles, making a straight line of $180^\\circ$.",
        "In an isosceles triangle, the equal-side marks and equal-angle marks are connected. If two sides are equal, the angles opposite them are equal; if two angles are equal, the opposite sides are equal.",
        "Exterior angles save time: the outside angle equals the two non-adjacent interior angles added together. The adjacent interior angle is supplementary to the exterior angle."
      ],
      "list": [
        "When angles contain algebra, write an equation from the angle fact first, then solve for the variable.",
        "Check reasonableness: a triangle cannot contain two right angles or two obtuse angles because the angle sum would exceed $180^\\circ$."
      ]
    },
    {
      "kind": "table",
      "heading": "How to choose the method",
      "headers": [
        "Question clue",
        "Use this idea",
        "Why"
      ],
      "rows": [
        [
          "Two angles are known",
          "Angle sum / complementary angles",
          "The total angle relationship fixes the missing value."
        ],
        [
          "A right triangle is shown",
          "Pythagorean theorem if sides are involved",
          "Right angle connects side lengths through squares."
        ],
        [
          "An exterior angle is shown",
          "Exterior angle theorem",
          "It connects the outside angle to the two remote inside angles."
        ]
      ]
    },
    {
      "kind": "example",
      "prompt": "Find the third angle of a triangle with angles $47^\\circ$ and $58^\\circ$.",
      "steps": [
        "Use angle sum: $47+58+x=180$.",
        "$105+x=180$.",
        "$x=75$."
      ],
      "answer": "The third angle is $75^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "An isosceles triangle has vertex angle $38^\\circ$. Find each base angle.",
      "steps": [
        "Base angles are equal, so call each $x$.",
        "$38+x+x=180$.",
        "$2x=142$, so $x=71$."
      ],
      "answer": "Each base angle is $71^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "An exterior angle is $132^\\circ$. One remote interior angle is $57^\\circ$. Find the other remote angle.",
      "steps": [
        "Use exterior angle theorem: $132=57+x$.",
        "Subtract 57 from both sides.",
        "$x=75$."
      ],
      "answer": "The other remote angle is $75^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "The angles of a triangle are $2x$, $3x$ and $4x$. Find all angles.",
      "steps": [
        "$2x+3x+4x=180$.",
        "$9x=180$, so $x=20$.",
        "Angles are $40^\\circ$, $60^\\circ$ and $80^\\circ$."
      ],
      "answer": "$40^\\circ$, $60^\\circ$, $80^\\circ$."
    },
    {
      "kind": "example",
      "prompt": "An isosceles triangle has one base angle $52^\\circ$. Find the vertex angle.",
      "steps": [
        "Both base angles are $52^\\circ$.",
        "$52+52+v=180$.",
        "$v=76$."
      ],
      "answer": "The vertex angle is $76^\\circ$."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "A triangle has angles $29^\\circ$ and $96^\\circ$. Find the third angle.",
          "options": [
            "$45^\\circ$",
            "$55^\\circ$",
            "$65^\\circ$",
            "$75^\\circ$"
          ],
          "answer": 1,
          "explanation": "$180-29-96=55$."
        },
        {
          "prompt": "Each angle of an equilateral triangle is:",
          "options": [
            "$30^\\circ$",
            "$45^\\circ$",
            "$60^\\circ$",
            "$90^\\circ$"
          ],
          "answer": 2,
          "explanation": "$180/3=60$."
        },
        {
          "prompt": "Base angles of an isosceles triangle are $64^\\circ$. Vertex angle is:",
          "options": [
            "$52^\\circ$",
            "$64^\\circ$",
            "$116^\\circ$",
            "$128^\\circ$"
          ],
          "answer": 0,
          "explanation": "$180-64-64=52$."
        },
        {
          "prompt": "A triangle has angles $x$, $x+20$ and $2x$. Find $x$.",
          "options": [
            "$35^\\circ$",
            "$40^\\circ$",
            "$45^\\circ$",
            "$50^\\circ$"
          ],
          "answer": 1,
          "explanation": "$4x+20=180$, so $x=40$."
        },
        {
          "prompt": "Exterior angle $118^\\circ$, one remote angle $46^\\circ$. Other remote angle:",
          "options": [
            "$62^\\circ$",
            "$72^\\circ$",
            "$82^\\circ$",
            "$134^\\circ$"
          ],
          "answer": 1,
          "explanation": "$118-46=72$."
        },
        {
          "prompt": "A right triangle has one acute angle $35^\\circ$. Other acute angle:",
          "options": [
            "$45^\\circ$",
            "$55^\\circ$",
            "$65^\\circ$",
            "$145^\\circ$"
          ],
          "answer": 1,
          "explanation": "The acute angles add to $90^\\circ$."
        },
        {
          "prompt": "Triangle with no equal sides:",
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
          "prompt": "Can a triangle have two obtuse angles?",
          "options": [
            "Yes",
            "No",
            "Only if isosceles",
            "Only if scalene"
          ],
          "answer": 1,
          "explanation": "Two obtuse angles exceed $180^\\circ$."
        },
        {
          "prompt": "Angles in ratio $2:3:4$, smallest angle:",
          "options": [
            "$20^\\circ$",
            "$40^\\circ$",
            "$60^\\circ$",
            "$80^\\circ$"
          ],
          "answer": 1,
          "explanation": "One part is $20^\\circ$, smallest is $40^\\circ$."
        },
        {
          "prompt": "Equal sides are opposite:",
          "options": [
            "supplementary angles",
            "equal angles",
            "right angles",
            "exterior angles"
          ],
          "answer": 1,
          "explanation": "Isosceles theorem."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Triangle angle sum is:",
          "options": [
            "$90^\\circ$",
            "$180^\\circ$",
            "$270^\\circ$",
            "$360^\\circ$"
          ],
          "answer": 1,
          "explanation": "Always $180^\\circ$."
        },
        {
          "prompt": "Exterior angle theorem uses:",
          "options": [
            "remote interior angles",
            "area",
            "diameter",
            "volume"
          ],
          "answer": 0,
          "explanation": "Exterior equals sum of remote interior angles."
        },
        {
          "prompt": "Obtuse triangle has:",
          "options": [
            "one angle over $90^\\circ$",
            "two right angles",
            "all 60°",
            "no sides"
          ],
          "answer": 0,
          "explanation": "Obtuse means greater than $90^\\circ$."
        },
        {
          "prompt": "If vertex angle is $100^\\circ$ in isosceles triangle, each base angle:",
          "options": [
            "$40^\\circ$",
            "$50^\\circ$",
            "$80^\\circ$",
            "$100^\\circ$"
          ],
          "answer": 0,
          "explanation": "$(180-100)/2=40$."
        },
        {
          "prompt": "Angles $30,70,80$ form a triangle?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "They add to 180."
        },
        {
          "prompt": "Three equal angles mean:",
          "options": [
            "equilateral",
            "scalene",
            "obtuse",
            "right only"
          ],
          "answer": 0,
          "explanation": "Each angle is 60°."
        },
        {
          "prompt": "Angles $4x,5x,6x$, find $x$.",
          "options": [
            "$10^\\circ$",
            "$12^\\circ$",
            "$15^\\circ$",
            "$18^\\circ$"
          ],
          "answer": 1,
          "explanation": "$15x=180$."
        },
        {
          "prompt": "Straight angle:",
          "options": [
            "$90^\\circ$",
            "$180^\\circ$",
            "$270^\\circ$",
            "$360^\\circ$"
          ],
          "answer": 1,
          "explanation": "Straight line angle."
        },
        {
          "prompt": "Equal angles in isosceles are:",
          "options": [
            "opposite equal sides",
            "outside only",
            "random",
            "always 90°"
          ],
          "answer": 0,
          "explanation": "Equal sides face equal angles."
        },
        {
          "prompt": "Remote interior angles are used with:",
          "options": [
            "exterior angle theorem",
            "area of circle",
            "volume of cone",
            "surface area"
          ],
          "answer": 0,
          "explanation": "Correct theorem."
        }
      ]
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Architecture",
          "text": "Geometry checks slopes, frames, tile layouts, trusses and diagonals."
        },
        {
          "area": "Surveying",
          "text": "Angles and right-triangle distances help locate positions accurately."
        },
        {
          "area": "Design and graphics",
          "text": "Shapes, proportions and distances depend on these relationships."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Adding known angles and forgetting to subtract from 180°.",
          "right": "The unknown equals $180^\\circ$ minus the sum of known angles."
        },
        {
          "wrong": "Treating exterior angle as part of the interior sum.",
          "right": "Exterior angle equals the two remote interior angles, and is supplementary to the adjacent interior angle."
        },
        {
          "wrong": "Assuming all isosceles triangles are equilateral.",
          "right": "Equilateral is a special case; most isosceles triangles have only two equal sides."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Main definition",
          "back": "A triangle is a closed plane figure formed by three straight sides. Its three interior angles always add to $180^\\circ$."
        },
        {
          "front": "Key formula",
          "back": "A+B+C=180^\\circ"
        },
        {
          "front": "Problem method",
          "back": "Draw, label, choose formula, substitute, solve, and check units."
        },
        {
          "front": "Exam tip",
          "back": "Write reasons for geometry statements, not only final answers."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Triangles and Their Angles is a core geometry skill used in many later chapters.",
        "The diagram must be labelled before substituting values into formulas.",
        "Practise both direct questions and multi-step word problems.",
        "Use exact values where possible, then round only at the final step."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "definitions",
          "label": "Study definitions"
        },
        {
          "key": "examples",
          "label": "Work through solved examples"
        },
        {
          "key": "practice",
          "label": "Complete practice set"
        },
        {
          "key": "quiz",
          "label": "Pass the quiz"
        }
      ],
      "requireQuizPass": true
    }
  ]
};
