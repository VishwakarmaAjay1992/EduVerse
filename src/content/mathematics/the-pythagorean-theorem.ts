import type { LessonContent } from "@/lib/lesson-content-types";

export const thePythagoreanTheorem: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "the-pythagorean-theorem",
  "title": "The Pythagorean Theorem",
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
        "This textbook-style lesson studies the pythagorean theorem with definitions, theorem statements, worked examples, self-study practice and quizzes.",
        "Do not only memorise the final formula. Learn what each word means, draw the diagram, mark the given information, write the correct relationship, then solve step by step."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "In a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs."
    },
    {
      "kind": "theory",
      "heading": "Vocabulary you must know",
      "paragraphs": [
        "Geometry questions are mostly language plus diagram reading. These terms should be clear before solving."
      ],
      "list": [
        "Right triangle: triangle with one $90^\\circ$ angle.",
        "Hypotenuse: side opposite the right angle and the longest side.",
        "Legs: the two shorter sides that form the right angle.",
        "Pythagorean triple: three whole numbers satisfying $a^2+b^2=c^2$, such as 3,4,5."
      ]
    },
    {
      "kind": "formula",
      "latex": "a^2+b^2=c^2",
      "caption": "Pythagorean theorem"
    },
    {
      "kind": "formula",
      "latex": "c=\\sqrt{a^2+b^2}",
      "caption": "Finding hypotenuse"
    },
    {
      "kind": "formula",
      "latex": "a=\\sqrt{c^2-b^2}",
      "caption": "Finding a missing leg"
    },
    {
      "kind": "theory",
      "heading": "In-depth explanation",
      "paragraphs": [
        "The theorem is about squares of lengths, not direct addition of lengths. A triangle with legs 3 and 4 has hypotenuse 5, not 7.",
        "Use the largest side as the hypotenuse when testing whether a triangle is right-angled.",
        "The converse is also useful: if the side lengths satisfy $a^2+b^2=c^2$, the triangle is right-angled."
      ],
      "list": [
        "Exact answers may include surds, such as $5\\sqrt2$. Decimal answers should be rounded only at the end.",
        "The theorem underlies the distance formula in coordinate geometry."
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
      "kind": "history",
      "paragraphs": [
        "The theorem is named after Pythagoras, but right-triangle relationships were known in several ancient cultures. It remains important because it connects geometry with measurement, algebra and coordinate distance."
      ]
    },
    {
      "kind": "example",
      "prompt": "A right triangle has legs 6 cm and 8 cm. Find the hypotenuse.",
      "steps": [
        "$c^2=6^2+8^2$.",
        "$c^2=36+64=100$.",
        "$c=10$."
      ],
      "answer": "10 cm."
    },
    {
      "kind": "example",
      "prompt": "A 13 m ladder has its foot 5 m from a wall. How high does it reach?",
      "steps": [
        "The ladder is the hypotenuse.",
        "$13^2=h^2+5^2$.",
        "$169=h^2+25$, so $h^2=144$ and $h=12$."
      ],
      "answer": "12 m."
    },
    {
      "kind": "example",
      "prompt": "Check whether sides 7, 24 and 25 form a right triangle.",
      "steps": [
        "Largest side is 25.",
        "$7^2+24^2=49+576=625$.",
        "$25^2=625$, so the equality holds."
      ],
      "answer": "Yes, it is right-angled."
    },
    {
      "kind": "example",
      "prompt": "Find the diagonal of a rectangle 9 cm by 12 cm.",
      "steps": [
        "The diagonal is the hypotenuse of a right triangle.",
        "$d^2=9^2+12^2=225$.",
        "$d=15$."
      ],
      "answer": "15 cm."
    },
    {
      "kind": "example",
      "prompt": "A square has side 10 cm. Find exact diagonal.",
      "steps": [
        "Diagonal makes a right triangle with legs 10 and 10.",
        "$d^2=10^2+10^2=200$.",
        "$d=\\sqrt{200}=10\\sqrt2$."
      ],
      "answer": "$10\\sqrt2$ cm."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Legs 5 and 12. Hypotenuse:",
          "options": [
            "13",
            "15",
            "17",
            "60"
          ],
          "answer": 0,
          "explanation": "$25+144=169$, root 13."
        },
        {
          "prompt": "Hypotenuse 10, one leg 6. Other leg:",
          "options": [
            "4",
            "6",
            "8",
            "16"
          ],
          "answer": 2,
          "explanation": "$100-36=64$, root 8."
        },
        {
          "prompt": "Pythagorean triple:",
          "options": [
            "2,3,4",
            "6,8,10",
            "5,5,10",
            "7,8,9"
          ],
          "answer": 1,
          "explanation": "6-8-10 is a multiple of 3-4-5."
        },
        {
          "prompt": "Hypotenuse is:",
          "options": [
            "shortest side",
            "opposite right angle",
            "horizontal side",
            "any side"
          ],
          "answer": 1,
          "explanation": "Definition."
        },
        {
          "prompt": "Sides 9,40,41:",
          "options": [
            "right triangle",
            "not right",
            "equilateral",
            "impossible"
          ],
          "answer": 0,
          "explanation": "$9^2+40^2=41^2$."
        },
        {
          "prompt": "Square side 7 diagonal:",
          "options": [
            "7",
            "14",
            "$7\\sqrt2$",
            "$49\\sqrt2$"
          ],
          "answer": 2,
          "explanation": "$d=\\sqrt{98}=7\\sqrt2$."
        },
        {
          "prompt": "If $a=8$, $c=17$, then $b$:",
          "options": [
            "9",
            "12",
            "15",
            "25"
          ],
          "answer": 2,
          "explanation": "$289-64=225$."
        },
        {
          "prompt": "Theorem applies to:",
          "options": [
            "all triangles",
            "right triangles only",
            "circles",
            "all polygons"
          ],
          "answer": 1,
          "explanation": "Needs right angle."
        },
        {
          "prompt": "Distance from (0,0) to (3,4):",
          "options": [
            "5",
            "7",
            "12",
            "25"
          ],
          "answer": 0,
          "explanation": "3-4-5."
        },
        {
          "prompt": "In $a^2+b^2=c^2$, c is:",
          "options": [
            "any side",
            "hypotenuse",
            "area",
            "perimeter"
          ],
          "answer": 1,
          "explanation": "c is hypotenuse."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "15 m ladder, foot 9 m from wall. Height:",
          "options": [
            "6 m",
            "10 m",
            "12 m",
            "18 m"
          ],
          "answer": 2,
          "explanation": "$225-81=144$."
        },
        {
          "prompt": "Are 10,24,26 right triangle?",
          "options": [
            "Yes",
            "No"
          ],
          "answer": 0,
          "explanation": "$100+576=676$."
        },
        {
          "prompt": "Find c if a=9,b=12:",
          "options": [
            "15",
            "18",
            "21",
            "25"
          ],
          "answer": 0,
          "explanation": "$81+144=225$."
        },
        {
          "prompt": "Missing leg c=25, other leg=7:",
          "options": [
            "18",
            "20",
            "24",
            "26"
          ],
          "answer": 2,
          "explanation": "$625-49=576$."
        },
        {
          "prompt": "The theorem relates:",
          "options": [
            "squares on sides",
            "angles only",
            "volume only",
            "perimeter only"
          ],
          "answer": 0,
          "explanation": "Squared lengths."
        },
        {
          "prompt": "Garden 3 m by 4 m diagonal:",
          "options": [
            "5 m",
            "7 m",
            "12 m",
            "25 m"
          ],
          "answer": 0,
          "explanation": "3-4-5."
        },
        {
          "prompt": "Which is hypotenuse in 8,15,17?",
          "options": [
            "8",
            "15",
            "17",
            "any"
          ],
          "answer": 2,
          "explanation": "Largest side."
        },
        {
          "prompt": "If $a^2+b^2<c^2$, triangle is:",
          "options": [
            "right",
            "obtuse",
            "equilateral",
            "impossible"
          ],
          "answer": 1,
          "explanation": "Largest angle is obtuse."
        },
        {
          "prompt": "If $a^2+b^2>c^2$, triangle is:",
          "options": [
            "acute",
            "right",
            "obtuse",
            "straight"
          ],
          "answer": 0,
          "explanation": "Largest angle is acute."
        },
        {
          "prompt": "Exact diagonal of square side 10:",
          "options": [
            "$10\\sqrt2$",
            "20",
            "100",
            "$5\\sqrt2$"
          ],
          "answer": 0,
          "explanation": "$\\sqrt{200}=10\\sqrt2$."
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
          "wrong": "Using $a+b=c$.",
          "right": "Use $a^2+b^2=c^2$."
        },
        {
          "wrong": "Putting a leg as c when finding hypotenuse.",
          "right": "c must be the side opposite the right angle."
        },
        {
          "wrong": "Rounding too early.",
          "right": "Keep exact values until the final step."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Main definition",
          "back": "In a right triangle, the square of the hypotenuse equals the sum of the squares of the two legs."
        },
        {
          "front": "Key formula",
          "back": "a^2+b^2=c^2"
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
      "kind": "imageGallery",
      "heading": "Visual connection: Pythagorean theorem proofs",
      "note": "This recreated visual proof directly supports the lesson and helps students see why the theorem works.",
      "images": [
        { "src": "/geometry-recreated/visual-proofs/visual-proof-06.svg", "alt": "Recreated rearrangement proof of Pythagoras", "caption": "The same coloured right-triangle pieces are rearranged to show that the square on the hypotenuse has area $c^2=a^2+b^2$." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-03.webp", "alt": "Right triangle with hypotenuse perpendicular and base", "caption": "The Geometry guide page also labels the right triangle sides and states the Pythagorean relation." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "The Pythagorean Theorem is a core geometry skill used in many later chapters.",
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
