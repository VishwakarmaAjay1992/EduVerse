import type { LessonContent } from "@/lib/lesson-content-types";

export const weakChapterReviews: LessonContent[] = [
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-lines-and-angles",
    "lessonSlug": "foundations-lines-and-angles-expert-mastery-review",
    "title": "Foundations, Lines and Angles Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Foundations, Lines and Angles.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Identify and name points, lines, rays, segments and planes",
      "Use angles on a straight line and around a point",
      "Use diagrams as mathematical arguments, not only decorations."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Foundations, Lines and Angles**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Points, Lines, Planes and Angles",
            "text": "Identify and name points, lines, rays, segments and planes"
          },
          {
            "title": "Angle Relationships",
            "text": "Use angles on a straight line and around a point"
          },
          {
            "title": "Geometry Visual Proofs and Formula Guide",
            "text": "Use diagrams as mathematical arguments, not only decorations."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A point, a line (extends both ways), a ray (one endpoint, extends one way) and a segment (two endpoints).",
        "figure": {
          "type": "geoPrimitives"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Points, Lines, Planes and Angles",
            "Points, lines and planes are the undefined building blocks of geometry.",
            "Estimate first: if the angle clearly looks obtuse, pick the scale that gives a value above 90°."
          ],
          [
            "Angle Relationships",
            "Angles on a straight line add to 180°; angles around a point add to 360°.",
            "These equalities hold only when the two lines cut by the transversal are parallel."
          ],
          [
            "Geometry Visual Proofs and Formula Guide",
            "A visual proof must be translated into a sequence of mathematical statements.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "An angle measures 137°. Classify it.",
        "steps": [
          "Compare with 90° and 180°: 137° is more than 90° but less than 180°."
        ],
        "answer": "It is an obtuse angle."
      },
      {
        "kind": "example",
        "prompt": "Two lines cross. One of the four angles is 50°. Find the other three.",
        "steps": [
          "The angle vertically opposite the 50° angle is also 50°.",
          "Each angle next to the 50° angle sits on a straight line with it, so it is 180° − 50° = 130°.",
          "The remaining angle is vertically opposite a 130° angle, so it is 130°."
        ],
        "answer": "The four angles are 50°, 130°, 50° and 130°."
      },
      {
        "kind": "example",
        "prompt": "Expert reasoning: diagnose an invalid shortcut in Geometry Visual Proofs and Formula Guide.",
        "steps": [
          "Identify the target skill: Use diagrams as mathematical arguments, not only decorations..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Application challenge: translate a practical situation into the mathematics of Points, Lines, Planes and Angles.",
        "steps": [
          "Identify the target skill: Identify and name points, lines, rays, segments and planes.",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Proof challenge: identify the assumptions needed in Angle Relationships.",
        "steps": [
          "Identify the target skill: Use angles on a straight line and around a point.",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for Geometry Visual Proofs and Formula Guide.",
        "steps": [
          "Identify the target skill: Use diagrams as mathematical arguments, not only decorations..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Reading the wrong protractor scale (getting 43° instead of 137°).",
            "right": "Estimate first: if the angle clearly looks obtuse, pick the scale that gives a value above 90°."
          },
          {
            "wrong": "Confusing a line, a ray and a segment.",
            "right": "A line extends both ways forever, a ray one way from an endpoint, a segment has two endpoints."
          },
          {
            "wrong": "Assuming alternate or corresponding angles are equal even when the lines are not parallel.",
            "right": "These equalities hold only when the two lines cut by the transversal are parallel."
          },
          {
            "wrong": "Adding co-interior angles as if they were equal.",
            "right": "Co-interior (C-shape) angles are supplementary — they add to 180°, they are not equal."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Points, lines and planes are the undefined building blocks of geometry.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Points, lines and planes are the undefined building blocks of geometry."
          },
          {
            "prompt": "True or false: Angles on a straight line add to 180°; angles around a point add to 360°.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Angles on a straight line add to 180°; angles around a point add to 360°."
          },
          {
            "prompt": "True or false: A visual proof must be translated into a sequence of mathematical statements.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A visual proof must be translated into a sequence of mathematical statements."
          },
          {
            "prompt": "True or false: Reading the wrong protractor scale (getting 43° instead of 137°).",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Estimate first: if the angle clearly looks obtuse, pick the scale that gives a value above 90°."
          },
          {
            "prompt": "True or false: Confusing a line, a ray and a segment.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "A line extends both ways forever, a ray one way from an endpoint, a segment has two endpoints."
          },
          {
            "prompt": "True or false: Assuming alternate or corresponding angles are equal even when the lines are not parallel.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "These equalities hold only when the two lines cut by the transversal are parallel."
          },
          {
            "prompt": "True or false: Adding co-interior angles as if they were equal.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Co-interior (C-shape) angles are supplementary — they add to 180°, they are not equal."
          },
          {
            "prompt": "Which action best demonstrates mastery of Points, Lines, Planes and Angles?",
            "options": [
              "Identify and name points, lines, rays, segments and planes",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Identify and name points, lines, rays, segments and planes"
          },
          {
            "prompt": "Which action best demonstrates mastery of Angle Relationships?",
            "options": [
              "Use angles on a straight line and around a point",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Use angles on a straight line and around a point"
          },
          {
            "prompt": "Which action best demonstrates mastery of Geometry Visual Proofs and Formula Guide?",
            "options": [
              "Use diagrams as mathematical arguments, not only decorations.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Use diagrams as mathematical arguments, not only decorations."
          }
        ],
        "stepKey": "foundations-lines-and-anglesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Points, lines and planes are the undefined building blocks of geometry.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Points, lines and planes are the undefined building blocks of geometry."
          },
          {
            "type": "mc",
            "prompt": "True or false: Angles on a straight line add to 180°; angles around a point add to 360°.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Angles on a straight line add to 180°; angles around a point add to 360°."
          },
          {
            "type": "mc",
            "prompt": "True or false: A visual proof must be translated into a sequence of mathematical statements.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "A visual proof must be translated into a sequence of mathematical statements."
          },
          {
            "type": "mc",
            "prompt": "True or false: Reading the wrong protractor scale (getting 43° instead of 137°).",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Estimate first: if the angle clearly looks obtuse, pick the scale that gives a value above 90°."
          },
          {
            "type": "mc",
            "prompt": "True or false: Confusing a line, a ray and a segment.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "A line extends both ways forever, a ray one way from an endpoint, a segment has two endpoints."
          },
          {
            "type": "mc",
            "prompt": "True or false: Assuming alternate or corresponding angles are equal even when the lines are not parallel.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "These equalities hold only when the two lines cut by the transversal are parallel."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Points, lines and planes are the undefined building blocks of geometry.",
          "Angles on a straight line add to 180°; angles around a point add to 360°.",
          "A visual proof must be translated into a sequence of mathematical statements."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "foundations-lines-and-anglesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "triangles-and-congruence",
    "lessonSlug": "triangles-and-congruence-expert-mastery-review",
    "title": "Triangles and Congruence Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Triangles and Congruence.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Understand definitions and vocabulary.",
      "Understand definitions and vocabulary.",
      "Understand congruent triangles definitions.",
      "Understand similar triangles and scale definitions."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Triangles and Congruence**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Triangles and Their Angles",
            "text": "Understand definitions and vocabulary."
          },
          {
            "title": "The Pythagorean Theorem",
            "text": "Understand definitions and vocabulary."
          },
          {
            "title": "Congruent Triangles",
            "text": "Understand congruent triangles definitions."
          },
          {
            "title": "Similar Triangles and Scale",
            "text": "Understand similar triangles and scale definitions."
          }
        ]
      },
      {
        "kind": "imageGallery",
        "heading": "Recreated visual extension",
        "note": "This recreated proof adds deeper visual thinking to the triangle lesson.",
        "images": [
          {
            "src": "/geometry-recreated/visual-proofs/visual-proof-08.svg",
            "alt": "Recreated Viviani theorem visual proof",
            "caption": "Recreated Viviani’s theorem proof for an equilateral triangle: the sum of distances from an interior point to the sides equals the altitude."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Triangles and Their Angles",
            "Triangles and Their Angles is a core geometry skill used in many later chapters.",
            "The unknown equals $180^\\circ$ minus the sum of known angles."
          ],
          [
            "The Pythagorean Theorem",
            "The Pythagorean Theorem is a core geometry skill used in many later chapters.",
            "Use $a^2+b^2=c^2$."
          ],
          [
            "Congruent Triangles",
            "Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "AAA proves similarity, not same size."
          ],
          [
            "Similar Triangles and Scale",
            "Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "Area scale factor is the square of the length scale factor."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
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
        "prompt": "Proof challenge: identify the assumptions needed in Triangles and Their Angles.",
        "steps": [
          "Identify the target skill: Understand definitions and vocabulary..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for The Pythagorean Theorem.",
        "steps": [
          "Identify the target skill: Understand definitions and vocabulary..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
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
          },
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
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Triangles and Their Angles is a core geometry skill used in many later chapters.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Triangles and Their Angles is a core geometry skill used in many later chapters."
          },
          {
            "prompt": "True or false: The Pythagorean Theorem is a core geometry skill used in many later chapters.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "The Pythagorean Theorem is a core geometry skill used in many later chapters."
          },
          {
            "prompt": "True or false: Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "prompt": "True or false: Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "prompt": "True or false: Adding known angles and forgetting to subtract from 180°.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "The unknown equals $180^\\circ$ minus the sum of known angles."
          },
          {
            "prompt": "True or false: Treating exterior angle as part of the interior sum.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Exterior angle equals the two remote interior angles, and is supplementary to the adjacent interior angle."
          },
          {
            "prompt": "True or false: Assuming all isosceles triangles are equilateral.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Equilateral is a special case; most isosceles triangles have only two equal sides."
          },
          {
            "prompt": "True or false: Using $a+b=c$.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use $a^2+b^2=c^2$."
          },
          {
            "prompt": "True or false: Putting a leg as c when finding hypotenuse.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "c must be the side opposite the right angle."
          },
          {
            "prompt": "True or false: Rounding too early.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Keep exact values until the final step."
          },
          {
            "prompt": "Which action best demonstrates mastery of Triangles and Their Angles?",
            "options": [
              "Understand definitions and vocabulary.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Understand definitions and vocabulary."
          },
          {
            "prompt": "Which action best demonstrates mastery of The Pythagorean Theorem?",
            "options": [
              "Understand definitions and vocabulary.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Understand definitions and vocabulary."
          }
        ],
        "stepKey": "triangles-and-congruenceExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Triangles and Their Angles is a core geometry skill used in many later chapters.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Triangles and Their Angles is a core geometry skill used in many later chapters."
          },
          {
            "type": "mc",
            "prompt": "True or false: The Pythagorean Theorem is a core geometry skill used in many later chapters.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "The Pythagorean Theorem is a core geometry skill used in many later chapters."
          },
          {
            "type": "mc",
            "prompt": "True or false: Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "type": "mc",
            "prompt": "True or false: Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "type": "mc",
            "prompt": "True or false: Adding known angles and forgetting to subtract from 180°.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "The unknown equals $180^\\circ$ minus the sum of known angles."
          },
          {
            "type": "mc",
            "prompt": "True or false: Treating exterior angle as part of the interior sum.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Exterior angle equals the two remote interior angles, and is supplementary to the adjacent interior angle."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Triangles and Their Angles is a core geometry skill used in many later chapters.",
          "The Pythagorean Theorem is a core geometry skill used in many later chapters.",
          "Congruent Triangles is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
          "Similar Triangles and Scale is not only memorising formulas; it is about choosing the correct relationship from the diagram."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "triangles-and-congruenceExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "quadrilaterals-and-polygons",
    "lessonSlug": "quadrilaterals-and-polygons-expert-mastery-review",
    "title": "Quadrilaterals and Polygons Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Quadrilaterals and Polygons.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Understand the quadrilateral family definitions.",
      "Understand interior and exterior angles of polygons definitions."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Quadrilaterals and Polygons**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "The Quadrilateral Family",
            "text": "Understand the quadrilateral family definitions."
          },
          {
            "title": "Interior and Exterior Angles of Polygons",
            "text": "Understand interior and exterior angles of polygons definitions."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "The Quadrilateral Family",
            "The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "Area of parallelogram and trapezium needs perpendicular height."
          ],
          [
            "Interior and Exterior Angles of Polygons",
            "Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "Use $(n-2)\\times180^\\circ$."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "A quadrilateral has angles 80°, 95°, 110° and x. Find x.",
        "steps": [
          "Use $360^\\circ$ angle sum.",
          "$80+95+110+x=360$.",
          "$285+x=360$, so $x=75$."
        ],
        "answer": "$75^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Find the interior angle sum of a decagon.",
        "steps": [
          "A decagon has $n=10$ sides.",
          "Use $(n-2)180$.",
          "$(10-2)180=1440$."
        ],
        "answer": "$1440^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Expert reasoning: diagnose an invalid shortcut in The Quadrilateral Family.",
        "steps": [
          "Identify the target skill: Understand the quadrilateral family definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Application challenge: translate a practical situation into the mathematics of Interior and Exterior Angles of Polygons.",
        "steps": [
          "Identify the target skill: Understand interior and exterior angles of polygons definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Proof challenge: identify the assumptions needed in The Quadrilateral Family.",
        "steps": [
          "Identify the target skill: Understand the quadrilateral family definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for Interior and Exterior Angles of Polygons.",
        "steps": [
          "Identify the target skill: Understand interior and exterior angles of polygons definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using slanted side instead of perpendicular height for area.",
            "right": "Area of parallelogram and trapezium needs perpendicular height."
          },
          {
            "wrong": "Forgetting a square is a rectangle.",
            "right": "A square satisfies the definition of a rectangle and a rhombus."
          },
          {
            "wrong": "Assuming all quadrilaterals have equal opposite sides.",
            "right": "That is true for parallelograms, not every quadrilateral."
          },
          {
            "wrong": "Using $n\\times180$ for interior sum.",
            "right": "Use $(n-2)\\times180^\\circ$."
          },
          {
            "wrong": "Dividing by n for an irregular polygon.",
            "right": "Only regular polygons have equal interior angles."
          },
          {
            "wrong": "Thinking exterior angle sum changes with n.",
            "right": "The exterior angles always sum to $360^\\circ$ for convex polygons."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "prompt": "True or false: Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "prompt": "True or false: Using slanted side instead of perpendicular height for area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Area of parallelogram and trapezium needs perpendicular height."
          },
          {
            "prompt": "True or false: Forgetting a square is a rectangle.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "A square satisfies the definition of a rectangle and a rhombus."
          },
          {
            "prompt": "True or false: Assuming all quadrilaterals have equal opposite sides.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "That is true for parallelograms, not every quadrilateral."
          },
          {
            "prompt": "True or false: Using $n\\times180$ for interior sum.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use $(n-2)\\times180^\\circ$."
          },
          {
            "prompt": "True or false: Dividing by n for an irregular polygon.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Only regular polygons have equal interior angles."
          },
          {
            "prompt": "True or false: Thinking exterior angle sum changes with n.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "The exterior angles always sum to $360^\\circ$ for convex polygons."
          },
          {
            "prompt": "Which action best demonstrates mastery of The Quadrilateral Family?",
            "options": [
              "Understand the quadrilateral family definitions.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Understand the quadrilateral family definitions."
          },
          {
            "prompt": "Which action best demonstrates mastery of Interior and Exterior Angles of Polygons?",
            "options": [
              "Understand interior and exterior angles of polygons definitions.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Understand interior and exterior angles of polygons definitions."
          }
        ],
        "stepKey": "quadrilaterals-and-polygonsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "type": "mc",
            "prompt": "True or false: Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "type": "mc",
            "prompt": "True or false: Using slanted side instead of perpendicular height for area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Area of parallelogram and trapezium needs perpendicular height."
          },
          {
            "type": "mc",
            "prompt": "True or false: Forgetting a square is a rectangle.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "A square satisfies the definition of a rectangle and a rhombus."
          },
          {
            "type": "mc",
            "prompt": "True or false: Assuming all quadrilaterals have equal opposite sides.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "That is true for parallelograms, not every quadrilateral."
          },
          {
            "type": "mc",
            "prompt": "True or false: Using $n\\times180$ for interior sum.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Use $(n-2)\\times180^\\circ$."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "The Quadrilateral Family is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
          "Interior and Exterior Angles of Polygons is not only memorising formulas; it is about choosing the correct relationship from the diagram."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "quadrilaterals-and-polygonsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "circles",
    "lessonSlug": "circles-expert-mastery-review",
    "title": "Circles Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Circles.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Understand parts of a circle, circumference and area definitions.",
      "Understand circle theorems and proofs definitions."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Circles**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Parts of a Circle, Circumference and Area",
            "text": "Understand parts of a circle, circumference and area definitions."
          },
          {
            "title": "Circle Theorems and Proofs",
            "text": "Understand circle theorems and proofs definitions."
          }
        ]
      },
      {
        "kind": "imageGallery",
        "heading": "Recreated visual extension",
        "note": "This recreated diagram helps students see why the circle area formula works.",
        "images": [
          {
            "src": "/geometry-recreated/visual-proofs/visual-proof-04.svg",
            "alt": "Recreated circle area sector rearrangement",
            "caption": "Recreated circle sectors rearranged into a near-rectangle, giving the idea behind $A=pi r^2$."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Parts of a Circle, Circumference and Area",
            "Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "Always halve the diameter first when using $A=πr^2$."
          ],
          [
            "Circle Theorems and Proofs",
            "Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "First check the chord or arc involved."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find circumference of radius 7 cm using $\\pi=22/7$.",
        "steps": [
          "Use $C=2\\pi r$.",
          "$C=2\\times22/7\\times7$.",
          "$C=44$."
        ],
        "answer": "44 cm."
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
        "prompt": "Expert reasoning: diagnose an invalid shortcut in Parts of a Circle, Circumference and Area.",
        "steps": [
          "Identify the target skill: Understand parts of a circle, circumference and area definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Application challenge: translate a practical situation into the mathematics of Circle Theorems and Proofs.",
        "steps": [
          "Identify the target skill: Understand circle theorems and proofs definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Proof challenge: identify the assumptions needed in Parts of a Circle, Circumference and Area.",
        "steps": [
          "Identify the target skill: Understand parts of a circle, circumference and area definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for Circle Theorems and Proofs.",
        "steps": [
          "Identify the target skill: Understand circle theorems and proofs definitions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using diameter as radius in area formula.",
            "right": "Always halve the diameter first when using $A=πr^2$."
          },
          {
            "wrong": "Writing area answers in cm instead of cm².",
            "right": "Area uses square units."
          },
          {
            "wrong": "Using $πr^2$ for circumference.",
            "right": "Circumference uses $2πr$ or $πd$."
          },
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
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "prompt": "True or false: Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "prompt": "True or false: Using diameter as radius in area formula.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Always halve the diameter first when using $A=πr^2$."
          },
          {
            "prompt": "True or false: Writing area answers in cm instead of cm².",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Area uses square units."
          },
          {
            "prompt": "True or false: Using $πr^2$ for circumference.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Circumference uses $2πr$ or $πd$."
          },
          {
            "prompt": "True or false: Using the centre theorem when angles are not on the same arc.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "First check the chord or arc involved."
          },
          {
            "prompt": "True or false: Forgetting opposite cyclic angles add to 180°.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use supplementary angles in cyclic quadrilaterals."
          },
          {
            "prompt": "True or false: Assuming every line touching a diagram is tangent.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "A tangent must touch at exactly one point and is perpendicular to the radius there."
          },
          {
            "prompt": "Which action best demonstrates mastery of Parts of a Circle, Circumference and Area?",
            "options": [
              "Understand parts of a circle, circumference and area definitions.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Understand parts of a circle, circumference and area definitions."
          },
          {
            "prompt": "Which action best demonstrates mastery of Circle Theorems and Proofs?",
            "options": [
              "Understand circle theorems and proofs definitions.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Understand circle theorems and proofs definitions."
          }
        ],
        "stepKey": "circlesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "type": "mc",
            "prompt": "True or false: Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram."
          },
          {
            "type": "mc",
            "prompt": "True or false: Using diameter as radius in area formula.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Always halve the diameter first when using $A=πr^2$."
          },
          {
            "type": "mc",
            "prompt": "True or false: Writing area answers in cm instead of cm².",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Area uses square units."
          },
          {
            "type": "mc",
            "prompt": "True or false: Using $πr^2$ for circumference.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "Circumference uses $2πr$ or $πd$."
          },
          {
            "type": "mc",
            "prompt": "True or false: Using the centre theorem when angles are not on the same arc.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "First check the chord or arc involved."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
          "Circle Theorems and Proofs is not only memorising formulas; it is about choosing the correct relationship from the diagram."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "circlesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "functions",
    "lessonSlug": "functions-expert-mastery-review",
    "title": "Functions Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Functions.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Functions and Their Graphs.",
      "Explain the central ideas of Combining Functions; Shifting and Scaling Graphs.",
      "Explain the central ideas of Trigonometric Functions.",
      "Explain the central ideas of Graphing with Software."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Functions**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Functions and Their Graphs",
            "text": "Explain the central ideas of Functions and Their Graphs."
          },
          {
            "title": "Combining Functions; Shifting and Scaling Graphs",
            "text": "Explain the central ideas of Combining Functions; Shifting and Scaling Graphs."
          },
          {
            "title": "Trigonometric Functions",
            "text": "Explain the central ideas of Trigonometric Functions."
          },
          {
            "title": "Graphing with Software",
            "text": "Explain the central ideas of Graphing with Software."
          },
          {
            "title": "Exponential Functions",
            "text": "Explain the central ideas of Exponential Functions."
          },
          {
            "title": "Inverse Functions and Logarithms",
            "text": "Explain the central ideas of Inverse Functions and Logarithms."
          },
          {
            "title": "Functions Chapter Review",
            "text": "Connect the major ideas in Functions."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for functions and their graphs.",
        "figure": {
          "type": "calculus",
          "kind": "function"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Functions and Their Graphs",
            "Treat a function as a rule with one output for every permitted input, and move fluently among formulas, graphs, tables, and verbal models.",
            "State the domain and verify a graph in more than one representation."
          ],
          [
            "Combining Functions; Shifting and Scaling Graphs",
            "Build new functions by arithmetic and composition, then interpret shifts, stretches, compressions, and reflections directly from an equation.",
            "State the domain and verify a graph in more than one representation."
          ],
          [
            "Trigonometric Functions",
            "Review circular definitions of the six trigonometric functions, their domains, periodicity, symmetry, and the identities needed throughout calculus.",
            "State the domain and verify a graph in more than one representation."
          ],
          [
            "Graphing with Software",
            "Use graphing technology critically: select a revealing window, detect sampling artifacts, and verify numerical pictures with algebra and calculus.",
            "State the domain and verify a graph in more than one representation."
          ],
          [
            "Exponential Functions",
            "Study exponential functions as constant-percentage-change models and use their algebraic laws, graphs, and the special base e.",
            "State the domain and verify a graph in more than one representation."
          ],
          [
            "Inverse Functions and Logarithms",
            "Understand one-to-one functions, inverse graphs, logarithms as inverse exponentials, and the laws that make logarithmic equations manageable.",
            "State the domain and verify a graph in more than one representation."
          ],
          [
            "Functions Chapter Review",
            "6 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find the natural domain of $f(x)=\\sqrt{4-x}/(x-1)$.",
        "steps": [
          "Require $4-x\\ge0$, so $x\\le4$.",
          "Exclude $x=1$ because the denominator cannot be zero.",
          "Intersect the conditions."
        ],
        "answer": "The domain is $(-\\infty,1)\\cup(1,4]$."
      },
      {
        "kind": "example",
        "prompt": "For $f(x)=x^2$ and $g(x)=2x-3$, find $(f\\circ g)(x)$.",
        "steps": [
          "Substitute $g(x)$ into the input of $f$.",
          "Square the entire expression: $(2x-3)^2$.",
          "Expand only if useful."
        ],
        "answer": "$(f\\circ g)(x)=4x^2-12x+9$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\sin(5\\pi/6)$ and $\\cos(5\\pi/6)$.",
        "steps": [
          "The reference angle is $\\pi/6$.",
          "The terminal side lies in Quadrant II, where sine is positive and cosine is negative.",
          "Use the special-angle values."
        ],
        "answer": "$\\sin(5\\pi/6)=1/2$ and $\\cos(5\\pi/6)=-\\sqrt3/2$."
      },
      {
        "kind": "example",
        "prompt": "A graphing window makes $y=x^3-3x$ look nearly linear. What should you do?",
        "steps": [
          "Zoom to include the turning points near $x=\\pm1$.",
          "Create a table or evaluate the derivative to verify changes in direction.",
          "Do not infer global behavior from one window."
        ],
        "answer": "Use several windows and algebraic checks before accepting the graph."
      },
      {
        "kind": "example",
        "prompt": "A quantity starts at 500 and grows by 6% per year. Model it after $t$ years.",
        "steps": [
          "A 6% increase gives growth factor $1.06$.",
          "Multiply the initial amount by the factor raised to time."
        ],
        "answer": "$A(t)=500(1.06)^t$."
      },
      {
        "kind": "example",
        "prompt": "Solve $3^{2x-1}=20$.",
        "steps": [
          "Take natural logarithms.",
          "Use $(2x-1)\\ln3=\\ln20$.",
          "Solve the resulting linear equation."
        ],
        "answer": "$x=(1+\\ln20/\\ln3)/2$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Ignoring domain restrictions or graph scale.",
            "right": "State the domain and verify a graph in more than one representation."
          },
          {
            "wrong": "Ignoring domain restrictions or graph scale.",
            "right": "State the domain and verify a graph in more than one representation."
          },
          {
            "wrong": "Ignoring domain restrictions or graph scale.",
            "right": "State the domain and verify a graph in more than one representation."
          },
          {
            "wrong": "Ignoring domain restrictions or graph scale.",
            "right": "State the domain and verify a graph in more than one representation."
          },
          {
            "wrong": "Ignoring domain restrictions or graph scale.",
            "right": "State the domain and verify a graph in more than one representation."
          },
          {
            "wrong": "Ignoring domain restrictions or graph scale.",
            "right": "State the domain and verify a graph in more than one representation."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Treat a function as a rule with one output for every permitted input, and move fluently among formulas, graphs, tables, and verbal models.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Treat a function as a rule with one output for every permitted input, and move fluently among formulas, graphs, tables, and verbal models."
          },
          {
            "prompt": "True or false: Build new functions by arithmetic and composition, then interpret shifts, stretches, compressions, and reflections directly from an equation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Build new functions by arithmetic and composition, then interpret shifts, stretches, compressions, and reflections directly from an equation."
          },
          {
            "prompt": "True or false: Review circular definitions of the six trigonometric functions, their domains, periodicity, symmetry, and the identities needed throughout calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Review circular definitions of the six trigonometric functions, their domains, periodicity, symmetry, and the identities needed throughout calculus."
          },
          {
            "prompt": "True or false: Use graphing technology critically: select a revealing window, detect sampling artifacts, and verify numerical pictures with algebra and calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use graphing technology critically: select a revealing window, detect sampling artifacts, and verify numerical pictures with algebra and calculus."
          },
          {
            "prompt": "True or false: Study exponential functions as constant-percentage-change models and use their algebraic laws, graphs, and the special base e.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Study exponential functions as constant-percentage-change models and use their algebraic laws, graphs, and the special base e."
          },
          {
            "prompt": "True or false: Understand one-to-one functions, inverse graphs, logarithms as inverse exponentials, and the laws that make logarithmic equations manageable.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Understand one-to-one functions, inverse graphs, logarithms as inverse exponentials, and the laws that make logarithmic equations manageable."
          },
          {
            "prompt": "True or false: 6 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "6 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Ignoring domain restrictions or graph scale.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the domain and verify a graph in more than one representation."
          },
          {
            "prompt": "True or false: Ignoring domain restrictions or graph scale.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the domain and verify a graph in more than one representation."
          },
          {
            "prompt": "True or false: Ignoring domain restrictions or graph scale.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the domain and verify a graph in more than one representation."
          },
          {
            "prompt": "True or false: Ignoring domain restrictions or graph scale.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the domain and verify a graph in more than one representation."
          },
          {
            "prompt": "True or false: Ignoring domain restrictions or graph scale.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the domain and verify a graph in more than one representation."
          }
        ],
        "stepKey": "functionsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Treat a function as a rule with one output for every permitted input, and move fluently among formulas, graphs, tables, and verbal models.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Treat a function as a rule with one output for every permitted input, and move fluently among formulas, graphs, tables, and verbal models."
          },
          {
            "type": "mc",
            "prompt": "True or false: Build new functions by arithmetic and composition, then interpret shifts, stretches, compressions, and reflections directly from an equation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Build new functions by arithmetic and composition, then interpret shifts, stretches, compressions, and reflections directly from an equation."
          },
          {
            "type": "mc",
            "prompt": "True or false: Review circular definitions of the six trigonometric functions, their domains, periodicity, symmetry, and the identities needed throughout calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Review circular definitions of the six trigonometric functions, their domains, periodicity, symmetry, and the identities needed throughout calculus."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use graphing technology critically: select a revealing window, detect sampling artifacts, and verify numerical pictures with algebra and calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use graphing technology critically: select a revealing window, detect sampling artifacts, and verify numerical pictures with algebra and calculus."
          },
          {
            "type": "mc",
            "prompt": "True or false: Study exponential functions as constant-percentage-change models and use their algebraic laws, graphs, and the special base e.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Study exponential functions as constant-percentage-change models and use their algebraic laws, graphs, and the special base e."
          },
          {
            "type": "mc",
            "prompt": "True or false: Understand one-to-one functions, inverse graphs, logarithms as inverse exponentials, and the laws that make logarithmic equations manageable.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Understand one-to-one functions, inverse graphs, logarithms as inverse exponentials, and the laws that make logarithmic equations manageable."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Treat a function as a rule with one output for every permitted input, and move fluently among formulas, graphs, tables, and verbal models.",
          "Build new functions by arithmetic and composition, then interpret shifts, stretches, compressions, and reflections directly from an equation.",
          "Review circular definitions of the six trigonometric functions, their domains, periodicity, symmetry, and the identities needed throughout calculus.",
          "Use graphing technology critically: select a revealing window, detect sampling artifacts, and verify numerical pictures with algebra and calculus.",
          "Study exponential functions as constant-percentage-change models and use their algebraic laws, graphs, and the special base e.",
          "Understand one-to-one functions, inverse graphs, logarithms as inverse exponentials, and the laws that make logarithmic equations manageable.",
          "6 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "functionsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "limits-and-continuity",
    "lessonSlug": "limits-and-continuity-expert-mastery-review",
    "title": "Limits and Continuity Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Limits and Continuity.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Rates of Change and Tangents to Curves.",
      "Explain the central ideas of Limit of a Function and Limit Laws.",
      "Explain the central ideas of The Precise Definition of a Limit.",
      "Explain the central ideas of One-Sided Limits."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Limits and Continuity**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Rates of Change and Tangents to Curves",
            "text": "Explain the central ideas of Rates of Change and Tangents to Curves."
          },
          {
            "title": "Limit of a Function and Limit Laws",
            "text": "Explain the central ideas of Limit of a Function and Limit Laws."
          },
          {
            "title": "The Precise Definition of a Limit",
            "text": "Explain the central ideas of The Precise Definition of a Limit."
          },
          {
            "title": "One-Sided Limits",
            "text": "Explain the central ideas of One-Sided Limits."
          },
          {
            "title": "Continuity",
            "text": "Explain the central ideas of Continuity."
          },
          {
            "title": "Limits Involving Infinity; Asymptotes of Graphs",
            "text": "Explain the central ideas of Limits Involving Infinity; Asymptotes of Graphs."
          },
          {
            "title": "Limits and Continuity Chapter Review",
            "text": "Connect the major ideas in Limits and Continuity."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for rates of change and tangents to curves.",
        "figure": {
          "type": "calculus",
          "kind": "limit"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Rates of Change and Tangents to Curves",
            "Average rate of change gives a secant slope; shrinking the time or input interval leads to instantaneous rate and tangent slope.",
            "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          ],
          [
            "Limit of a Function and Limit Laws",
            "Evaluate limits from graphs, tables, algebra, and limit laws, while distinguishing the nearby behavior of a function from its value at the point.",
            "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          ],
          [
            "The Precise Definition of a Limit",
            "Translate the intuitive idea of closeness into the epsilon-delta definition and construct delta choices that guarantee a required output tolerance.",
            "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          ],
          [
            "One-Sided Limits",
            "Analyze approach from the left and right separately; a two-sided limit exists exactly when both one-sided limits agree.",
            "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          ],
          [
            "Continuity",
            "Continuity joins limit behavior to function value and enables fundamental existence results such as the Intermediate Value Theorem.",
            "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          ],
          [
            "Limits Involving Infinity; Asymptotes of Graphs",
            "Describe unbounded behavior with infinite limits and long-run behavior with limits at infinity, then identify vertical and horizontal asymptotes.",
            "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          ],
          [
            "Limits and Continuity Chapter Review",
            "6 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find the average rate of change of $f(x)=x^2$ from $x=2$ to $x=2+h$.",
        "steps": [
          "Compute $[f(2+h)-f(2)]/h$.",
          "Expand $(2+h)^2-4=4h+h^2$.",
          "Cancel $h$ for $h\\ne0$."
        ],
        "answer": "The average rate is $4+h$, approaching $4$ as $h\\to0$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\lim_{x\\to2}(x^2+3x-1)$.",
        "steps": [
          "Polynomials are continuous.",
          "Substitute $x=2$."
        ],
        "answer": "The limit is $4+6-1=9$."
      },
      {
        "kind": "example",
        "prompt": "Show that $\\lim_{x\\to3}(2x+1)=7$.",
        "steps": [
          "We need $|2x+1-7|=2|x-3|<\\varepsilon$.",
          "Choose $\\delta=\\varepsilon/2$.",
          "Then $0<|x-3|<\\delta$ implies the required inequality."
        ],
        "answer": "The epsilon-delta condition is satisfied."
      },
      {
        "kind": "example",
        "prompt": "Evaluate the limit of $f(x)=|x|/x$ as $x\\to0$.",
        "steps": [
          "For $x<0$, $f(x)=-1$.",
          "For $x>0$, $f(x)=1$.",
          "The one-sided limits differ."
        ],
        "answer": "The two-sided limit does not exist."
      },
      {
        "kind": "example",
        "prompt": "Explain why $x^3+x$ takes the value 10 between 1 and 3.",
        "steps": [
          "The polynomial is continuous on $[1,3]$.",
          "$f(1)=2$ and $f(3)=30$.",
          "$10$ lies between these endpoint values, so the Intermediate Value Theorem applies."
        ],
        "answer": "There is at least one $c\\in(1,3)$ with $c^3+c=10$."
      },
      {
        "kind": "example",
        "prompt": "Find the horizontal asymptote of $(3x^2-x)/(2x^2+5)$.",
        "steps": [
          "Divide numerator and denominator by $x^2$.",
          "Terms containing $1/x$ or $1/x^2$ vanish as $|x|\\to\\infty$."
        ],
        "answer": "The limit is $3/2$, so $y=3/2$ is a horizontal asymptote."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Substituting the point before checking an indeterminate or one-sided form.",
            "right": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "wrong": "Substituting the point before checking an indeterminate or one-sided form.",
            "right": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "wrong": "Substituting the point before checking an indeterminate or one-sided form.",
            "right": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "wrong": "Substituting the point before checking an indeterminate or one-sided form.",
            "right": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "wrong": "Substituting the point before checking an indeterminate or one-sided form.",
            "right": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "wrong": "Substituting the point before checking an indeterminate or one-sided form.",
            "right": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Average rate of change gives a secant slope; shrinking the time or input interval leads to instantaneous rate and tangent slope.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Average rate of change gives a secant slope; shrinking the time or input interval leads to instantaneous rate and tangent slope."
          },
          {
            "prompt": "True or false: Evaluate limits from graphs, tables, algebra, and limit laws, while distinguishing the nearby behavior of a function from its value at the point.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Evaluate limits from graphs, tables, algebra, and limit laws, while distinguishing the nearby behavior of a function from its value at the point."
          },
          {
            "prompt": "True or false: Translate the intuitive idea of closeness into the epsilon-delta definition and construct delta choices that guarantee a required output tolerance.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Translate the intuitive idea of closeness into the epsilon-delta definition and construct delta choices that guarantee a required output tolerance."
          },
          {
            "prompt": "True or false: Analyze approach from the left and right separately; a two-sided limit exists exactly when both one-sided limits agree.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Analyze approach from the left and right separately; a two-sided limit exists exactly when both one-sided limits agree."
          },
          {
            "prompt": "True or false: Continuity joins limit behavior to function value and enables fundamental existence results such as the Intermediate Value Theorem.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Continuity joins limit behavior to function value and enables fundamental existence results such as the Intermediate Value Theorem."
          },
          {
            "prompt": "True or false: Describe unbounded behavior with infinite limits and long-run behavior with limits at infinity, then identify vertical and horizontal asymptotes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Describe unbounded behavior with infinite limits and long-run behavior with limits at infinity, then identify vertical and horizontal asymptotes."
          },
          {
            "prompt": "True or false: 6 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "6 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Substituting the point before checking an indeterminate or one-sided form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "prompt": "True or false: Substituting the point before checking an indeterminate or one-sided form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "prompt": "True or false: Substituting the point before checking an indeterminate or one-sided form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "prompt": "True or false: Substituting the point before checking an indeterminate or one-sided form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          },
          {
            "prompt": "True or false: Substituting the point before checking an indeterminate or one-sided form.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Analyze nearby behavior first and verify both sides when a two-sided limit is requested."
          }
        ],
        "stepKey": "limits-and-continuityExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Average rate of change gives a secant slope; shrinking the time or input interval leads to instantaneous rate and tangent slope.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Average rate of change gives a secant slope; shrinking the time or input interval leads to instantaneous rate and tangent slope."
          },
          {
            "type": "mc",
            "prompt": "True or false: Evaluate limits from graphs, tables, algebra, and limit laws, while distinguishing the nearby behavior of a function from its value at the point.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Evaluate limits from graphs, tables, algebra, and limit laws, while distinguishing the nearby behavior of a function from its value at the point."
          },
          {
            "type": "mc",
            "prompt": "True or false: Translate the intuitive idea of closeness into the epsilon-delta definition and construct delta choices that guarantee a required output tolerance.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Translate the intuitive idea of closeness into the epsilon-delta definition and construct delta choices that guarantee a required output tolerance."
          },
          {
            "type": "mc",
            "prompt": "True or false: Analyze approach from the left and right separately; a two-sided limit exists exactly when both one-sided limits agree.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Analyze approach from the left and right separately; a two-sided limit exists exactly when both one-sided limits agree."
          },
          {
            "type": "mc",
            "prompt": "True or false: Continuity joins limit behavior to function value and enables fundamental existence results such as the Intermediate Value Theorem.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Continuity joins limit behavior to function value and enables fundamental existence results such as the Intermediate Value Theorem."
          },
          {
            "type": "mc",
            "prompt": "True or false: Describe unbounded behavior with infinite limits and long-run behavior with limits at infinity, then identify vertical and horizontal asymptotes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Describe unbounded behavior with infinite limits and long-run behavior with limits at infinity, then identify vertical and horizontal asymptotes."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Average rate of change gives a secant slope; shrinking the time or input interval leads to instantaneous rate and tangent slope.",
          "Evaluate limits from graphs, tables, algebra, and limit laws, while distinguishing the nearby behavior of a function from its value at the point.",
          "Translate the intuitive idea of closeness into the epsilon-delta definition and construct delta choices that guarantee a required output tolerance.",
          "Analyze approach from the left and right separately; a two-sided limit exists exactly when both one-sided limits agree.",
          "Continuity joins limit behavior to function value and enables fundamental existence results such as the Intermediate Value Theorem.",
          "Describe unbounded behavior with infinite limits and long-run behavior with limits at infinity, then identify vertical and horizontal asymptotes.",
          "6 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "limits-and-continuityExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "derivatives",
    "lessonSlug": "derivatives-expert-mastery-review",
    "title": "Derivatives Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Derivatives.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Tangents and the Derivative at a Point.",
      "Explain the central ideas of The Derivative as a Function.",
      "Explain the central ideas of Differentiation Rules.",
      "Explain the central ideas of The Derivative as a Rate of Change."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Derivatives**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Tangents and the Derivative at a Point",
            "text": "Explain the central ideas of Tangents and the Derivative at a Point."
          },
          {
            "title": "The Derivative as a Function",
            "text": "Explain the central ideas of The Derivative as a Function."
          },
          {
            "title": "Differentiation Rules",
            "text": "Explain the central ideas of Differentiation Rules."
          },
          {
            "title": "The Derivative as a Rate of Change",
            "text": "Explain the central ideas of The Derivative as a Rate of Change."
          },
          {
            "title": "Derivatives of Trigonometric Functions",
            "text": "Explain the central ideas of Derivatives of Trigonometric Functions."
          },
          {
            "title": "The Chain Rule",
            "text": "Explain the central ideas of The Chain Rule."
          },
          {
            "title": "Implicit Differentiation",
            "text": "Explain the central ideas of Implicit Differentiation."
          },
          {
            "title": "Derivatives of Inverse Functions and Logarithms",
            "text": "Explain the central ideas of Derivatives of Inverse Functions and Logarithms."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for tangents and the derivative at a point.",
        "figure": {
          "type": "calculus",
          "kind": "derivative"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Tangents and the Derivative at a Point",
            "Define the derivative at a point from secant slopes and use it to write the equation of the tangent line.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "The Derivative as a Function",
            "View the derivative itself as a new function, interpret its graph, and connect differentiability with continuity and corners or cusps.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "Differentiation Rules",
            "Apply constant, power, sum, product, quotient, and higher-derivative rules efficiently while keeping algebraic simplification under control.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "The Derivative as a Rate of Change",
            "Interpret derivatives in units: velocity, acceleration, marginal change, growth rate, and other instantaneous rates.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "Derivatives of Trigonometric Functions",
            "Differentiate the six trigonometric functions and combine those derivatives with algebraic rules.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "The Chain Rule",
            "Differentiate nested functions by multiplying the outer derivative, evaluated at the inner function, by the derivative of the inner function.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "Implicit Differentiation",
            "Differentiate equations that define y indirectly, treating y as a function of x and solving the resulting equation for dy/dx.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "Derivatives of Inverse Functions and Logarithms",
            "Differentiate inverse functions and logarithms, including bases other than e, using inverse-function structure and logarithmic differentiation.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "Inverse Trigonometric Functions",
            "Use restricted domains to define inverse trigonometric functions and apply their derivative formulas in composite expressions.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ],
          [
            "Related Rates",
            "Translate a changing geometric or physical relationship into an equation, differentiate with respect to time, and solve for the requested rate.",
            "Mark the structure before differentiating and perform a quick derivative check."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find the tangent line to $f(x)=x^2$ at $x=3$.",
        "steps": [
          "Use the derivative limit or the known derivative $f'(x)=2x$.",
          "The slope at 3 is 6 and the point is $(3,9)$.",
          "Use point-slope form."
        ],
        "answer": "$y-9=6(x-3)$, or $y=6x-9$."
      },
      {
        "kind": "example",
        "prompt": "Where is $f(x)=|x|$ not differentiable?",
        "steps": [
          "For $x<0$, the derivative is $-1$.",
          "For $x>0$, the derivative is $1$.",
          "The one-sided derivatives at zero disagree."
        ],
        "answer": "$f$ is not differentiable at $x=0$."
      },
      {
        "kind": "example",
        "prompt": "Differentiate $f(x)=x^3e^x$.",
        "steps": [
          "Use the product rule.",
          "Differentiate $x^3$ and $e^x$.",
          "Factor the result if helpful."
        ],
        "answer": "$f'(x)=3x^2e^x+x^3e^x=x^2e^x(x+3)$."
      },
      {
        "kind": "example",
        "prompt": "If $s(t)=t^3-6t^2+9t$, find velocity and acceleration.",
        "steps": [
          "Differentiate position once for velocity.",
          "Differentiate velocity for acceleration."
        ],
        "answer": "$v(t)=3t^2-12t+9$ and $a(t)=6t-12$."
      },
      {
        "kind": "example",
        "prompt": "Differentiate $y=\\sin x\\tan x$.",
        "steps": [
          "Use the product rule.",
          "Use $(\\sin x)'=\\cos x$ and $(\\tan x)'=\\sec^2x$."
        ],
        "answer": "$y'=\\cos x\\tan x+\\sin x\\sec^2x$."
      },
      {
        "kind": "example",
        "prompt": "Differentiate $y=(3x^2+1)^5$.",
        "steps": [
          "Outer function: $u^5$; inner function: $u=3x^2+1$.",
          "Differentiate the outer and multiply by $u'=6x$."
        ],
        "answer": "$y'=30x(3x^2+1)^4$."
      },
      {
        "kind": "example",
        "prompt": "Find $dy/dx$ on $x^2+xy+y^2=7$.",
        "steps": [
          "Differentiate every term with respect to $x$.",
          "Use the product rule on $xy$.",
          "Collect the terms containing $y'$."
        ],
        "answer": "$y'=-(2x+y)/(x+2y)$."
      },
      {
        "kind": "example",
        "prompt": "Differentiate $y=\\ln(x^2+1)$.",
        "steps": [
          "Apply the chain rule to the logarithm.",
          "Multiply $1/(x^2+1)$ by $2x$."
        ],
        "answer": "$y'=2x/(x^2+1)$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Dropping a product, quotient, or chain-rule factor.",
            "right": "Mark the structure before differentiating and perform a quick derivative check."
          },
          {
            "wrong": "Dropping a product, quotient, or chain-rule factor.",
            "right": "Mark the structure before differentiating and perform a quick derivative check."
          },
          {
            "wrong": "Dropping a product, quotient, or chain-rule factor.",
            "right": "Mark the structure before differentiating and perform a quick derivative check."
          },
          {
            "wrong": "Dropping a product, quotient, or chain-rule factor.",
            "right": "Mark the structure before differentiating and perform a quick derivative check."
          },
          {
            "wrong": "Dropping a product, quotient, or chain-rule factor.",
            "right": "Mark the structure before differentiating and perform a quick derivative check."
          },
          {
            "wrong": "Dropping a product, quotient, or chain-rule factor.",
            "right": "Mark the structure before differentiating and perform a quick derivative check."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Define the derivative at a point from secant slopes and use it to write the equation of the tangent line.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Define the derivative at a point from secant slopes and use it to write the equation of the tangent line."
          },
          {
            "prompt": "True or false: View the derivative itself as a new function, interpret its graph, and connect differentiability with continuity and corners or cusps.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "View the derivative itself as a new function, interpret its graph, and connect differentiability with continuity and corners or cusps."
          },
          {
            "prompt": "True or false: Apply constant, power, sum, product, quotient, and higher-derivative rules efficiently while keeping algebraic simplification under control.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Apply constant, power, sum, product, quotient, and higher-derivative rules efficiently while keeping algebraic simplification under control."
          },
          {
            "prompt": "True or false: Interpret derivatives in units: velocity, acceleration, marginal change, growth rate, and other instantaneous rates.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Interpret derivatives in units: velocity, acceleration, marginal change, growth rate, and other instantaneous rates."
          },
          {
            "prompt": "True or false: Differentiate the six trigonometric functions and combine those derivatives with algebraic rules.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate the six trigonometric functions and combine those derivatives with algebraic rules."
          },
          {
            "prompt": "True or false: Differentiate nested functions by multiplying the outer derivative, evaluated at the inner function, by the derivative of the inner function.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate nested functions by multiplying the outer derivative, evaluated at the inner function, by the derivative of the inner function."
          },
          {
            "prompt": "True or false: Differentiate equations that define y indirectly, treating y as a function of x and solving the resulting equation for dy/dx.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate equations that define y indirectly, treating y as a function of x and solving the resulting equation for dy/dx."
          },
          {
            "prompt": "True or false: Differentiate inverse functions and logarithms, including bases other than e, using inverse-function structure and logarithmic differentiation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate inverse functions and logarithms, including bases other than e, using inverse-function structure and logarithmic differentiation."
          },
          {
            "prompt": "True or false: Use restricted domains to define inverse trigonometric functions and apply their derivative formulas in composite expressions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use restricted domains to define inverse trigonometric functions and apply their derivative formulas in composite expressions."
          },
          {
            "prompt": "True or false: Translate a changing geometric or physical relationship into an equation, differentiate with respect to time, and solve for the requested rate.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Translate a changing geometric or physical relationship into an equation, differentiate with respect to time, and solve for the requested rate."
          },
          {
            "prompt": "True or false: Approximate a differentiable function near a known point by its tangent line and estimate propagated change with differentials.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Approximate a differentiable function near a known point by its tangent line and estimate propagated change with differentials."
          },
          {
            "prompt": "True or false: 11 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "11 numbered sections are consolidated in this review."
          }
        ],
        "stepKey": "derivativesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Define the derivative at a point from secant slopes and use it to write the equation of the tangent line.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Define the derivative at a point from secant slopes and use it to write the equation of the tangent line."
          },
          {
            "type": "mc",
            "prompt": "True or false: View the derivative itself as a new function, interpret its graph, and connect differentiability with continuity and corners or cusps.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "View the derivative itself as a new function, interpret its graph, and connect differentiability with continuity and corners or cusps."
          },
          {
            "type": "mc",
            "prompt": "True or false: Apply constant, power, sum, product, quotient, and higher-derivative rules efficiently while keeping algebraic simplification under control.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Apply constant, power, sum, product, quotient, and higher-derivative rules efficiently while keeping algebraic simplification under control."
          },
          {
            "type": "mc",
            "prompt": "True or false: Interpret derivatives in units: velocity, acceleration, marginal change, growth rate, and other instantaneous rates.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Interpret derivatives in units: velocity, acceleration, marginal change, growth rate, and other instantaneous rates."
          },
          {
            "type": "mc",
            "prompt": "True or false: Differentiate the six trigonometric functions and combine those derivatives with algebraic rules.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Differentiate the six trigonometric functions and combine those derivatives with algebraic rules."
          },
          {
            "type": "mc",
            "prompt": "True or false: Differentiate nested functions by multiplying the outer derivative, evaluated at the inner function, by the derivative of the inner function.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Differentiate nested functions by multiplying the outer derivative, evaluated at the inner function, by the derivative of the inner function."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Define the derivative at a point from secant slopes and use it to write the equation of the tangent line.",
          "View the derivative itself as a new function, interpret its graph, and connect differentiability with continuity and corners or cusps.",
          "Apply constant, power, sum, product, quotient, and higher-derivative rules efficiently while keeping algebraic simplification under control.",
          "Interpret derivatives in units: velocity, acceleration, marginal change, growth rate, and other instantaneous rates.",
          "Differentiate the six trigonometric functions and combine those derivatives with algebraic rules.",
          "Differentiate nested functions by multiplying the outer derivative, evaluated at the inner function, by the derivative of the inner function.",
          "Differentiate equations that define y indirectly, treating y as a function of x and solving the resulting equation for dy/dx.",
          "Differentiate inverse functions and logarithms, including bases other than e, using inverse-function structure and logarithmic differentiation."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "derivativesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "applications-of-derivatives",
    "lessonSlug": "applications-of-derivatives-expert-mastery-review",
    "title": "Applications of Derivatives Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Applications of Derivatives.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Extreme Values of Functions.",
      "Explain the central ideas of The Mean Value Theorem.",
      "Explain the central ideas of Monotonic Functions and the First Derivative Test.",
      "Explain the central ideas of Concavity and Curve Sketching."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Applications of Derivatives**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Extreme Values of Functions",
            "text": "Explain the central ideas of Extreme Values of Functions."
          },
          {
            "title": "The Mean Value Theorem",
            "text": "Explain the central ideas of The Mean Value Theorem."
          },
          {
            "title": "Monotonic Functions and the First Derivative Test",
            "text": "Explain the central ideas of Monotonic Functions and the First Derivative Test."
          },
          {
            "title": "Concavity and Curve Sketching",
            "text": "Explain the central ideas of Concavity and Curve Sketching."
          },
          {
            "title": "Indeterminate Forms and L’Hôpital’s Rule",
            "text": "Explain the central ideas of Indeterminate Forms and L’Hôpital’s Rule."
          },
          {
            "title": "Applied Optimization",
            "text": "Explain the central ideas of Applied Optimization."
          },
          {
            "title": "Newton’s Method",
            "text": "Explain the central ideas of Newton’s Method."
          },
          {
            "title": "Antiderivatives",
            "text": "Explain the central ideas of Antiderivatives."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for extreme values of functions.",
        "figure": {
          "type": "calculus",
          "kind": "mean-value"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Extreme Values of Functions",
            "Find absolute and local extrema using critical points, endpoints, and the Extreme Value Theorem on closed intervals.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "The Mean Value Theorem",
            "Connect average and instantaneous change through Rolle’s Theorem and the Mean Value Theorem.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Monotonic Functions and the First Derivative Test",
            "Use the sign of the first derivative to locate intervals of increase and decrease and to classify local extrema.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Concavity and Curve Sketching",
            "Use the second derivative to identify concavity and inflection behavior, then assemble a disciplined curve-sketching analysis.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Indeterminate Forms and L’Hôpital’s Rule",
            "Resolve suitable 0/0 and infinity/infinity limits by differentiating numerator and denominator, while checking the rule’s hypotheses.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Applied Optimization",
            "Convert a verbal constraint into a one-variable objective function, determine its feasible domain, and justify the optimum.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Newton’s Method",
            "Approximate roots through tangent-line iteration and understand convergence, stopping criteria, and failure modes.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Antiderivatives",
            "Reverse differentiation to construct families of antiderivatives and use initial conditions to select a particular member.",
            "Use the complete sign/endpoint analysis required by the theorem."
          ],
          [
            "Applications of Derivatives Chapter Review",
            "8 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find the absolute extrema of $f(x)=x^2-4x+1$ on $[0,5]$.",
        "steps": [
          "Critical point: $f'(x)=2x-4=0$, so $x=2$.",
          "Evaluate at $x=0,2,5$.",
          "Compare the values."
        ],
        "answer": "Absolute minimum $-3$ at $x=2$; absolute maximum $6$ at $x=5$."
      },
      {
        "kind": "example",
        "prompt": "Find the Mean Value Theorem point for $f(x)=x^2$ on $[1,3]$.",
        "steps": [
          "The average slope is $(9-1)/(3-1)=4$.",
          "Solve $f'(c)=2c=4$."
        ],
        "answer": "$c=2$."
      },
      {
        "kind": "example",
        "prompt": "Analyze monotonicity of $f(x)=x^3-3x$.",
        "steps": [
          "Compute $f'=3(x-1)(x+1)$.",
          "Make a sign chart around $-1$ and $1$."
        ],
        "answer": "Increasing on $(-\\infty,-1)\\cup(1,\\infty)$ and decreasing on $(-1,1)$."
      },
      {
        "kind": "example",
        "prompt": "Find concavity of $f(x)=x^4-6x^2$.",
        "steps": [
          "Compute $f''=12x^2-12$.",
          "Solve $f''=0$ at $x=\\pm1$.",
          "Use a sign chart."
        ],
        "answer": "Concave up for $|x|>1$ and concave down for $|x|<1$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\lim_{x\\to0}(e^x-1)/x$.",
        "steps": [
          "The form is $0/0$.",
          "Apply L’Hôpital’s Rule once.",
          "$d(e^x-1)/dx=e^x$ and $d(x)/dx=1$."
        ],
        "answer": "The limit is $1$."
      },
      {
        "kind": "example",
        "prompt": "A rectangle has perimeter 40 m. Maximize its area.",
        "steps": [
          "Let sides be $x$ and $20-x$.",
          "Area is $A=x(20-x)$.",
          "Set $A'=20-2x=0$ and check the feasible interval."
        ],
        "answer": "The maximum occurs at $x=10$; the rectangle is a 10 m square."
      },
      {
        "kind": "example",
        "prompt": "Use one Newton step for $x^2-2=0$ from $x_0=1.5$.",
        "steps": [
          "Use $x_1=x_0-(x_0^2-2)/(2x_0)$.",
          "Substitute $x_0=1.5$."
        ],
        "answer": "$x_1=1.416666\\ldots$."
      },
      {
        "kind": "example",
        "prompt": "Find the antiderivative satisfying $F'(x)=3x^2-4$ and $F(1)=2$.",
        "steps": [
          "Integrate term by term: $F=x^3-4x+C$.",
          "Use $F(1)=2$ to get $1-4+C=2$."
        ],
        "answer": "$F(x)=x^3-4x+5$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Listing critical numbers without testing intervals or endpoints.",
            "right": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "wrong": "Listing critical numbers without testing intervals or endpoints.",
            "right": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "wrong": "Listing critical numbers without testing intervals or endpoints.",
            "right": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "wrong": "Listing critical numbers without testing intervals or endpoints.",
            "right": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "wrong": "Listing critical numbers without testing intervals or endpoints.",
            "right": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "wrong": "Listing critical numbers without testing intervals or endpoints.",
            "right": "Use the complete sign/endpoint analysis required by the theorem."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Find absolute and local extrema using critical points, endpoints, and the Extreme Value Theorem on closed intervals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Find absolute and local extrema using critical points, endpoints, and the Extreme Value Theorem on closed intervals."
          },
          {
            "prompt": "True or false: Connect average and instantaneous change through Rolle’s Theorem and the Mean Value Theorem.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Connect average and instantaneous change through Rolle’s Theorem and the Mean Value Theorem."
          },
          {
            "prompt": "True or false: Use the sign of the first derivative to locate intervals of increase and decrease and to classify local extrema.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use the sign of the first derivative to locate intervals of increase and decrease and to classify local extrema."
          },
          {
            "prompt": "True or false: Use the second derivative to identify concavity and inflection behavior, then assemble a disciplined curve-sketching analysis.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use the second derivative to identify concavity and inflection behavior, then assemble a disciplined curve-sketching analysis."
          },
          {
            "prompt": "True or false: Resolve suitable 0/0 and infinity/infinity limits by differentiating numerator and denominator, while checking the rule’s hypotheses.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Resolve suitable 0/0 and infinity/infinity limits by differentiating numerator and denominator, while checking the rule’s hypotheses."
          },
          {
            "prompt": "True or false: Convert a verbal constraint into a one-variable objective function, determine its feasible domain, and justify the optimum.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Convert a verbal constraint into a one-variable objective function, determine its feasible domain, and justify the optimum."
          },
          {
            "prompt": "True or false: Approximate roots through tangent-line iteration and understand convergence, stopping criteria, and failure modes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Approximate roots through tangent-line iteration and understand convergence, stopping criteria, and failure modes."
          },
          {
            "prompt": "True or false: Reverse differentiation to construct families of antiderivatives and use initial conditions to select a particular member.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Reverse differentiation to construct families of antiderivatives and use initial conditions to select a particular member."
          },
          {
            "prompt": "True or false: 8 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "8 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Listing critical numbers without testing intervals or endpoints.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "prompt": "True or false: Listing critical numbers without testing intervals or endpoints.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use the complete sign/endpoint analysis required by the theorem."
          },
          {
            "prompt": "True or false: Listing critical numbers without testing intervals or endpoints.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use the complete sign/endpoint analysis required by the theorem."
          }
        ],
        "stepKey": "applications-of-derivativesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Find absolute and local extrema using critical points, endpoints, and the Extreme Value Theorem on closed intervals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Find absolute and local extrema using critical points, endpoints, and the Extreme Value Theorem on closed intervals."
          },
          {
            "type": "mc",
            "prompt": "True or false: Connect average and instantaneous change through Rolle’s Theorem and the Mean Value Theorem.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Connect average and instantaneous change through Rolle’s Theorem and the Mean Value Theorem."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use the sign of the first derivative to locate intervals of increase and decrease and to classify local extrema.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use the sign of the first derivative to locate intervals of increase and decrease and to classify local extrema."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use the second derivative to identify concavity and inflection behavior, then assemble a disciplined curve-sketching analysis.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use the second derivative to identify concavity and inflection behavior, then assemble a disciplined curve-sketching analysis."
          },
          {
            "type": "mc",
            "prompt": "True or false: Resolve suitable 0/0 and infinity/infinity limits by differentiating numerator and denominator, while checking the rule’s hypotheses.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Resolve suitable 0/0 and infinity/infinity limits by differentiating numerator and denominator, while checking the rule’s hypotheses."
          },
          {
            "type": "mc",
            "prompt": "True or false: Convert a verbal constraint into a one-variable objective function, determine its feasible domain, and justify the optimum.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Convert a verbal constraint into a one-variable objective function, determine its feasible domain, and justify the optimum."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Find absolute and local extrema using critical points, endpoints, and the Extreme Value Theorem on closed intervals.",
          "Connect average and instantaneous change through Rolle’s Theorem and the Mean Value Theorem.",
          "Use the sign of the first derivative to locate intervals of increase and decrease and to classify local extrema.",
          "Use the second derivative to identify concavity and inflection behavior, then assemble a disciplined curve-sketching analysis.",
          "Resolve suitable 0/0 and infinity/infinity limits by differentiating numerator and denominator, while checking the rule’s hypotheses.",
          "Convert a verbal constraint into a one-variable objective function, determine its feasible domain, and justify the optimum.",
          "Approximate roots through tangent-line iteration and understand convergence, stopping criteria, and failure modes.",
          "Reverse differentiation to construct families of antiderivatives and use initial conditions to select a particular member."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "applications-of-derivativesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "integrals",
    "lessonSlug": "integrals-expert-mastery-review",
    "title": "Integrals Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Integrals.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Area and Estimating with Finite Sums.",
      "Explain the central ideas of Sigma Notation and Limits of Finite Sums.",
      "Explain the central ideas of The Definite Integral.",
      "Explain the central ideas of The Fundamental Theorem of Calculus."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Integrals**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Area and Estimating with Finite Sums",
            "text": "Explain the central ideas of Area and Estimating with Finite Sums."
          },
          {
            "title": "Sigma Notation and Limits of Finite Sums",
            "text": "Explain the central ideas of Sigma Notation and Limits of Finite Sums."
          },
          {
            "title": "The Definite Integral",
            "text": "Explain the central ideas of The Definite Integral."
          },
          {
            "title": "The Fundamental Theorem of Calculus",
            "text": "Explain the central ideas of The Fundamental Theorem of Calculus."
          },
          {
            "title": "Indefinite Integrals and the Substitution Method",
            "text": "Explain the central ideas of Indefinite Integrals and the Substitution Method."
          },
          {
            "title": "Definite Integral Substitutions and the Area Between Curves",
            "text": "Explain the central ideas of Definite Integral Substitutions and the Area Between Curves."
          },
          {
            "title": "Integrals Chapter Review",
            "text": "Connect the major ideas in Integrals."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for area and estimating with finite sums.",
        "figure": {
          "type": "calculus",
          "kind": "riemann-sum"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Area and Estimating with Finite Sums",
            "Approximate signed area and accumulated change with finite sums using left, right, midpoint, upper, or lower sample values.",
            "Remember that definite integrals measure signed net accumulation."
          ],
          [
            "Sigma Notation and Limits of Finite Sums",
            "Use sigma notation and standard finite-sum formulas to rewrite and evaluate limiting sums.",
            "Remember that definite integrals measure signed net accumulation."
          ],
          [
            "The Definite Integral",
            "Define the definite integral as a limit of Riemann sums and use its linearity, interval, comparison, and symmetry properties.",
            "Remember that definite integrals measure signed net accumulation."
          ],
          [
            "The Fundamental Theorem of Calculus",
            "Connect accumulation and differentiation through both parts of the Fundamental Theorem of Calculus.",
            "Remember that definite integrals measure signed net accumulation."
          ],
          [
            "Indefinite Integrals and the Substitution Method",
            "Recognize reverse chain-rule structure and perform indefinite substitution, including the constant of integration.",
            "Remember that definite integrals measure signed net accumulation."
          ],
          [
            "Definite Integral Substitutions and the Area Between Curves",
            "Change limits correctly in definite substitutions and compute area between curves with top-minus-bottom or right-minus-left slices.",
            "Remember that definite integrals measure signed net accumulation."
          ],
          [
            "Integrals Chapter Review",
            "6 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Estimate $\\int_0^2x^2dx$ with a right sum using four equal subintervals.",
        "steps": [
          "$\\Delta x=0.5$ and right endpoints are $0.5,1,1.5,2$.",
          "Compute $0.5[(0.5)^2+1^2+(1.5)^2+2^2]$."
        ],
        "answer": "The estimate is $3.75$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\sum_{k=1}^{20}(3k-2)$.",
        "steps": [
          "Use linearity of sigma notation.",
          "$3\\sum k-2\\sum1=3(20)(21)/2-40$."
        ],
        "answer": "The sum is $590$."
      },
      {
        "kind": "example",
        "prompt": "Use properties to evaluate $\\int_0^2(3x+1)dx$.",
        "steps": [
          "An antiderivative is $3x^2/2+x$.",
          "Evaluate at 2 and 0."
        ],
        "answer": "The value is $8$."
      },
      {
        "kind": "example",
        "prompt": "Differentiate $G(x)=\\int_1^{x^2}\\cos t\\,dt$.",
        "steps": [
          "FTC gives $\\cos(x^2)$ at the moving upper limit.",
          "Multiply by the derivative of $x^2$."
        ],
        "answer": "$G'(x)=2x\\cos(x^2)$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\int 2x\\cos(x^2)dx$.",
        "steps": [
          "Let $u=x^2$, so $du=2x\\,dx$.",
          "Integrate $\\cos u$."
        ],
        "answer": "$\\sin(x^2)+C$."
      },
      {
        "kind": "example",
        "prompt": "Find the area between $y=x$ and $y=x^2$ on $[0,1]$.",
        "steps": [
          "On this interval, $x\\ge x^2$.",
          "Integrate top minus bottom.",
          "$\\int_0^1(x-x^2)dx$."
        ],
        "answer": "The area is $1/6$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Treating a definite integral as always-positive area.",
            "right": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "wrong": "Treating a definite integral as always-positive area.",
            "right": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "wrong": "Treating a definite integral as always-positive area.",
            "right": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "wrong": "Treating a definite integral as always-positive area.",
            "right": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "wrong": "Treating a definite integral as always-positive area.",
            "right": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "wrong": "Treating a definite integral as always-positive area.",
            "right": "Remember that definite integrals measure signed net accumulation."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Approximate signed area and accumulated change with finite sums using left, right, midpoint, upper, or lower sample values.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Approximate signed area and accumulated change with finite sums using left, right, midpoint, upper, or lower sample values."
          },
          {
            "prompt": "True or false: Use sigma notation and standard finite-sum formulas to rewrite and evaluate limiting sums.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use sigma notation and standard finite-sum formulas to rewrite and evaluate limiting sums."
          },
          {
            "prompt": "True or false: Define the definite integral as a limit of Riemann sums and use its linearity, interval, comparison, and symmetry properties.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Define the definite integral as a limit of Riemann sums and use its linearity, interval, comparison, and symmetry properties."
          },
          {
            "prompt": "True or false: Connect accumulation and differentiation through both parts of the Fundamental Theorem of Calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Connect accumulation and differentiation through both parts of the Fundamental Theorem of Calculus."
          },
          {
            "prompt": "True or false: Recognize reverse chain-rule structure and perform indefinite substitution, including the constant of integration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Recognize reverse chain-rule structure and perform indefinite substitution, including the constant of integration."
          },
          {
            "prompt": "True or false: Change limits correctly in definite substitutions and compute area between curves with top-minus-bottom or right-minus-left slices.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Change limits correctly in definite substitutions and compute area between curves with top-minus-bottom or right-minus-left slices."
          },
          {
            "prompt": "True or false: 6 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "6 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Treating a definite integral as always-positive area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "prompt": "True or false: Treating a definite integral as always-positive area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "prompt": "True or false: Treating a definite integral as always-positive area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "prompt": "True or false: Treating a definite integral as always-positive area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Remember that definite integrals measure signed net accumulation."
          },
          {
            "prompt": "True or false: Treating a definite integral as always-positive area.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Remember that definite integrals measure signed net accumulation."
          }
        ],
        "stepKey": "integralsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Approximate signed area and accumulated change with finite sums using left, right, midpoint, upper, or lower sample values.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Approximate signed area and accumulated change with finite sums using left, right, midpoint, upper, or lower sample values."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use sigma notation and standard finite-sum formulas to rewrite and evaluate limiting sums.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use sigma notation and standard finite-sum formulas to rewrite and evaluate limiting sums."
          },
          {
            "type": "mc",
            "prompt": "True or false: Define the definite integral as a limit of Riemann sums and use its linearity, interval, comparison, and symmetry properties.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Define the definite integral as a limit of Riemann sums and use its linearity, interval, comparison, and symmetry properties."
          },
          {
            "type": "mc",
            "prompt": "True or false: Connect accumulation and differentiation through both parts of the Fundamental Theorem of Calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Connect accumulation and differentiation through both parts of the Fundamental Theorem of Calculus."
          },
          {
            "type": "mc",
            "prompt": "True or false: Recognize reverse chain-rule structure and perform indefinite substitution, including the constant of integration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Recognize reverse chain-rule structure and perform indefinite substitution, including the constant of integration."
          },
          {
            "type": "mc",
            "prompt": "True or false: Change limits correctly in definite substitutions and compute area between curves with top-minus-bottom or right-minus-left slices.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Change limits correctly in definite substitutions and compute area between curves with top-minus-bottom or right-minus-left slices."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Approximate signed area and accumulated change with finite sums using left, right, midpoint, upper, or lower sample values.",
          "Use sigma notation and standard finite-sum formulas to rewrite and evaluate limiting sums.",
          "Define the definite integral as a limit of Riemann sums and use its linearity, interval, comparison, and symmetry properties.",
          "Connect accumulation and differentiation through both parts of the Fundamental Theorem of Calculus.",
          "Recognize reverse chain-rule structure and perform indefinite substitution, including the constant of integration.",
          "Change limits correctly in definite substitutions and compute area between curves with top-minus-bottom or right-minus-left slices.",
          "6 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "integralsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "applications-of-definite-integrals",
    "lessonSlug": "applications-of-definite-integrals-expert-mastery-review",
    "title": "Applications of Definite Integrals Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Applications of Definite Integrals.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Volumes Using Cross-Sections.",
      "Explain the central ideas of Volumes Using Cylindrical Shells.",
      "Explain the central ideas of Arc Length.",
      "Explain the central ideas of Areas of Surfaces of Revolution."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Applications of Definite Integrals**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Volumes Using Cross-Sections",
            "text": "Explain the central ideas of Volumes Using Cross-Sections."
          },
          {
            "title": "Volumes Using Cylindrical Shells",
            "text": "Explain the central ideas of Volumes Using Cylindrical Shells."
          },
          {
            "title": "Arc Length",
            "text": "Explain the central ideas of Arc Length."
          },
          {
            "title": "Areas of Surfaces of Revolution",
            "text": "Explain the central ideas of Areas of Surfaces of Revolution."
          },
          {
            "title": "Work and Fluid Forces",
            "text": "Explain the central ideas of Work and Fluid Forces."
          },
          {
            "title": "Moments and Centers of Mass",
            "text": "Explain the central ideas of Moments and Centers of Mass."
          },
          {
            "title": "Applications of Definite Integrals Chapter Review",
            "text": "Connect the major ideas in Applications of Definite Integrals."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for volumes using cross-sections.",
        "figure": {
          "type": "calculus",
          "kind": "volume"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Volumes Using Cross-Sections",
            "Model volume by integrating cross-sectional area, including disk, washer, and known-shape slices.",
            "Label a typical element and derive the integrand from it."
          ],
          [
            "Volumes Using Cylindrical Shells",
            "Model a solid as a stack of cylindrical shells and choose radius, height, and thickness consistently.",
            "Label a typical element and derive the integrand from it."
          ],
          [
            "Arc Length",
            "Derive and evaluate arc length by accumulating short line segments along a smooth curve.",
            "Label a typical element and derive the integrand from it."
          ],
          [
            "Areas of Surfaces of Revolution",
            "Accumulate frustum-like bands to find the surface area generated by rotating a curve.",
            "Label a typical element and derive the integrand from it."
          ],
          [
            "Work and Fluid Forces",
            "Express variable work and hydrostatic force as integrals built from force, displacement, pressure, and area elements.",
            "Label a typical element and derive the integrand from it."
          ],
          [
            "Moments and Centers of Mass",
            "Compute moments, mass, and centers of mass for rods and planar regions with constant or variable density.",
            "Label a typical element and derive the integrand from it."
          ],
          [
            "Applications of Definite Integrals Chapter Review",
            "6 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Rotate $y=x$ on $[0,2]$ about the x-axis. Find the volume.",
        "steps": [
          "Use disks with radius $x$.",
          "$V=\\pi\\int_0^2x^2dx$."
        ],
        "answer": "$V=8\\pi/3$."
      },
      {
        "kind": "example",
        "prompt": "Rotate the region under $y=x$ on $[0,1]$ about the y-axis using shells.",
        "steps": [
          "Radius $=x$, height $=x$.",
          "$V=2\\pi\\int_0^1x^2dx$."
        ],
        "answer": "$V=2\\pi/3$."
      },
      {
        "kind": "example",
        "prompt": "Find the arc length of $y=x^{3/2}$ on $[0,1]$ as an integral.",
        "steps": [
          "Compute $y'=(3/2)\\sqrt{x}$.",
          "Insert into the arc-length formula."
        ],
        "answer": "$L=\\int_0^1\\sqrt{1+9x/4}\\,dx$."
      },
      {
        "kind": "example",
        "prompt": "Set up the surface area from rotating $y=x^2+1$, $0\\le x\\le1$, about the x-axis.",
        "steps": [
          "Radius is $x^2+1$.",
          "Slope is $2x$."
        ],
        "answer": "$S=2\\pi\\int_0^1(x^2+1)\\sqrt{1+4x^2}\\,dx$."
      },
      {
        "kind": "example",
        "prompt": "A spring force is $F(x)=30x$ N. Find work from 0.1 m to 0.3 m.",
        "steps": [
          "Integrate force over displacement.",
          "$W=\\int_{0.1}^{0.3}30x\\,dx$."
        ],
        "answer": "$W=1.2$ J."
      },
      {
        "kind": "example",
        "prompt": "Find the centroid of a uniform rectangle $0\\le x\\le4$, $0\\le y\\le2$.",
        "steps": [
          "Symmetry places the centroid halfway across each dimension.",
          "Equivalently compute moments divided by area."
        ],
        "answer": "$(\\bar x,\\bar y)=(2,1)$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using an inconsistent radius, height, density, or slice thickness.",
            "right": "Label a typical element and derive the integrand from it."
          },
          {
            "wrong": "Using an inconsistent radius, height, density, or slice thickness.",
            "right": "Label a typical element and derive the integrand from it."
          },
          {
            "wrong": "Using an inconsistent radius, height, density, or slice thickness.",
            "right": "Label a typical element and derive the integrand from it."
          },
          {
            "wrong": "Using an inconsistent radius, height, density, or slice thickness.",
            "right": "Label a typical element and derive the integrand from it."
          },
          {
            "wrong": "Using an inconsistent radius, height, density, or slice thickness.",
            "right": "Label a typical element and derive the integrand from it."
          },
          {
            "wrong": "Using an inconsistent radius, height, density, or slice thickness.",
            "right": "Label a typical element and derive the integrand from it."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Model volume by integrating cross-sectional area, including disk, washer, and known-shape slices.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Model volume by integrating cross-sectional area, including disk, washer, and known-shape slices."
          },
          {
            "prompt": "True or false: Model a solid as a stack of cylindrical shells and choose radius, height, and thickness consistently.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Model a solid as a stack of cylindrical shells and choose radius, height, and thickness consistently."
          },
          {
            "prompt": "True or false: Derive and evaluate arc length by accumulating short line segments along a smooth curve.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Derive and evaluate arc length by accumulating short line segments along a smooth curve."
          },
          {
            "prompt": "True or false: Accumulate frustum-like bands to find the surface area generated by rotating a curve.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Accumulate frustum-like bands to find the surface area generated by rotating a curve."
          },
          {
            "prompt": "True or false: Express variable work and hydrostatic force as integrals built from force, displacement, pressure, and area elements.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Express variable work and hydrostatic force as integrals built from force, displacement, pressure, and area elements."
          },
          {
            "prompt": "True or false: Compute moments, mass, and centers of mass for rods and planar regions with constant or variable density.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compute moments, mass, and centers of mass for rods and planar regions with constant or variable density."
          },
          {
            "prompt": "True or false: 6 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "6 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Using an inconsistent radius, height, density, or slice thickness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Label a typical element and derive the integrand from it."
          },
          {
            "prompt": "True or false: Using an inconsistent radius, height, density, or slice thickness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Label a typical element and derive the integrand from it."
          },
          {
            "prompt": "True or false: Using an inconsistent radius, height, density, or slice thickness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Label a typical element and derive the integrand from it."
          },
          {
            "prompt": "True or false: Using an inconsistent radius, height, density, or slice thickness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Label a typical element and derive the integrand from it."
          },
          {
            "prompt": "True or false: Using an inconsistent radius, height, density, or slice thickness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Label a typical element and derive the integrand from it."
          }
        ],
        "stepKey": "applications-of-definite-integralsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Model volume by integrating cross-sectional area, including disk, washer, and known-shape slices.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Model volume by integrating cross-sectional area, including disk, washer, and known-shape slices."
          },
          {
            "type": "mc",
            "prompt": "True or false: Model a solid as a stack of cylindrical shells and choose radius, height, and thickness consistently.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Model a solid as a stack of cylindrical shells and choose radius, height, and thickness consistently."
          },
          {
            "type": "mc",
            "prompt": "True or false: Derive and evaluate arc length by accumulating short line segments along a smooth curve.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Derive and evaluate arc length by accumulating short line segments along a smooth curve."
          },
          {
            "type": "mc",
            "prompt": "True or false: Accumulate frustum-like bands to find the surface area generated by rotating a curve.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Accumulate frustum-like bands to find the surface area generated by rotating a curve."
          },
          {
            "type": "mc",
            "prompt": "True or false: Express variable work and hydrostatic force as integrals built from force, displacement, pressure, and area elements.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Express variable work and hydrostatic force as integrals built from force, displacement, pressure, and area elements."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compute moments, mass, and centers of mass for rods and planar regions with constant or variable density.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compute moments, mass, and centers of mass for rods and planar regions with constant or variable density."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Model volume by integrating cross-sectional area, including disk, washer, and known-shape slices.",
          "Model a solid as a stack of cylindrical shells and choose radius, height, and thickness consistently.",
          "Derive and evaluate arc length by accumulating short line segments along a smooth curve.",
          "Accumulate frustum-like bands to find the surface area generated by rotating a curve.",
          "Express variable work and hydrostatic force as integrals built from force, displacement, pressure, and area elements.",
          "Compute moments, mass, and centers of mass for rods and planar regions with constant or variable density.",
          "6 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "applications-of-definite-integralsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "integrals-and-transcendental-functions",
    "lessonSlug": "integrals-and-transcendental-functions-expert-mastery-review",
    "title": "Integrals and Transcendental Functions Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Integrals and Transcendental Functions.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of The Logarithm Defined as an Integral.",
      "Explain the central ideas of Exponential Change and Separable Differential Equations.",
      "Explain the central ideas of Hyperbolic Functions.",
      "Explain the central ideas of Relative Rates of Growth."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Integrals and Transcendental Functions**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "The Logarithm Defined as an Integral",
            "text": "Explain the central ideas of The Logarithm Defined as an Integral."
          },
          {
            "title": "Exponential Change and Separable Differential Equations",
            "text": "Explain the central ideas of Exponential Change and Separable Differential Equations."
          },
          {
            "title": "Hyperbolic Functions",
            "text": "Explain the central ideas of Hyperbolic Functions."
          },
          {
            "title": "Relative Rates of Growth",
            "text": "Explain the central ideas of Relative Rates of Growth."
          },
          {
            "title": "Integrals and Transcendental Functions Chapter Review",
            "text": "Connect the major ideas in Integrals and Transcendental Functions."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for the logarithm defined as an integral.",
        "figure": {
          "type": "calculus",
          "kind": "exponential"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "The Logarithm Defined as an Integral",
            "Define the natural logarithm by area under 1/x, establish its properties, and recover exponential functions as inverses.",
            "State the interval on which each logarithmic or differential-equation step is valid."
          ],
          [
            "Exponential Change and Separable Differential Equations",
            "Solve separable equations and model exponential growth, decay, and other proportional-rate processes.",
            "State the interval on which each logarithmic or differential-equation step is valid."
          ],
          [
            "Hyperbolic Functions",
            "Develop hyperbolic sine, cosine, and related functions, their identities, graphs, and derivatives.",
            "State the interval on which each logarithmic or differential-equation step is valid."
          ],
          [
            "Relative Rates of Growth",
            "Compare asymptotic growth rates and organize logarithmic, power, and exponential functions into a hierarchy.",
            "State the interval on which each logarithmic or differential-equation step is valid."
          ],
          [
            "Integrals and Transcendental Functions Chapter Review",
            "4 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Differentiate $\\ln(x^2+4)$.",
        "steps": [
          "Use $(\\ln u)'=u'/u$.",
          "Here $u'=2x$."
        ],
        "answer": "$2x/(x^2+4)$."
      },
      {
        "kind": "example",
        "prompt": "Solve $y'=3y$, $y(0)=5$.",
        "steps": [
          "Separate or recognize proportional growth.",
          "The general solution is $y=Ce^{3x}$.",
          "Use the initial value."
        ],
        "answer": "$y=5e^{3x}$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\cosh^2x-\\sinh^2x$.",
        "steps": [
          "Insert the exponential definitions or use the fundamental identity."
        ],
        "answer": "The expression equals $1$."
      },
      {
        "kind": "example",
        "prompt": "Compare $x^{10}$ and $2^x$ as $x\\to\\infty$.",
        "steps": [
          "Exponential functions eventually dominate every fixed power.",
          "Equivalently, repeated L’Hôpital application gives $x^{10}/2^x\\to0$."
        ],
        "answer": "$2^x$ grows faster."
      },
      {
        "kind": "example",
        "prompt": "Proof challenge: identify the assumptions needed in Integrals and Transcendental Functions Chapter Review.",
        "steps": [
          "Identify the target skill: Connect the major ideas in Integrals and Transcendental Functions..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for The Logarithm Defined as an Integral.",
        "steps": [
          "Identify the target skill: Explain the central ideas of The Logarithm Defined as an Integral..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Forgetting positivity and domain restrictions of logarithms.",
            "right": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "wrong": "Forgetting positivity and domain restrictions of logarithms.",
            "right": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "wrong": "Forgetting positivity and domain restrictions of logarithms.",
            "right": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "wrong": "Forgetting positivity and domain restrictions of logarithms.",
            "right": "State the interval on which each logarithmic or differential-equation step is valid."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Define the natural logarithm by area under 1/x, establish its properties, and recover exponential functions as inverses.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Define the natural logarithm by area under 1/x, establish its properties, and recover exponential functions as inverses."
          },
          {
            "prompt": "True or false: Solve separable equations and model exponential growth, decay, and other proportional-rate processes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Solve separable equations and model exponential growth, decay, and other proportional-rate processes."
          },
          {
            "prompt": "True or false: Develop hyperbolic sine, cosine, and related functions, their identities, graphs, and derivatives.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Develop hyperbolic sine, cosine, and related functions, their identities, graphs, and derivatives."
          },
          {
            "prompt": "True or false: Compare asymptotic growth rates and organize logarithmic, power, and exponential functions into a hierarchy.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compare asymptotic growth rates and organize logarithmic, power, and exponential functions into a hierarchy."
          },
          {
            "prompt": "True or false: 4 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "4 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Forgetting positivity and domain restrictions of logarithms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "prompt": "True or false: Forgetting positivity and domain restrictions of logarithms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "prompt": "True or false: Forgetting positivity and domain restrictions of logarithms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "prompt": "True or false: Forgetting positivity and domain restrictions of logarithms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the interval on which each logarithmic or differential-equation step is valid."
          },
          {
            "prompt": "Which action best demonstrates mastery of The Logarithm Defined as an Integral?",
            "options": [
              "Explain the central ideas of The Logarithm Defined as an Integral.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Explain the central ideas of The Logarithm Defined as an Integral."
          },
          {
            "prompt": "Which action best demonstrates mastery of Exponential Change and Separable Differential Equations?",
            "options": [
              "Explain the central ideas of Exponential Change and Separable Differential Equations.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Explain the central ideas of Exponential Change and Separable Differential Equations."
          },
          {
            "prompt": "Which action best demonstrates mastery of Hyperbolic Functions?",
            "options": [
              "Explain the central ideas of Hyperbolic Functions.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Explain the central ideas of Hyperbolic Functions."
          }
        ],
        "stepKey": "integrals-and-transcendental-functionsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Define the natural logarithm by area under 1/x, establish its properties, and recover exponential functions as inverses.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Define the natural logarithm by area under 1/x, establish its properties, and recover exponential functions as inverses."
          },
          {
            "type": "mc",
            "prompt": "True or false: Solve separable equations and model exponential growth, decay, and other proportional-rate processes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Solve separable equations and model exponential growth, decay, and other proportional-rate processes."
          },
          {
            "type": "mc",
            "prompt": "True or false: Develop hyperbolic sine, cosine, and related functions, their identities, graphs, and derivatives.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Develop hyperbolic sine, cosine, and related functions, their identities, graphs, and derivatives."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compare asymptotic growth rates and organize logarithmic, power, and exponential functions into a hierarchy.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compare asymptotic growth rates and organize logarithmic, power, and exponential functions into a hierarchy."
          },
          {
            "type": "mc",
            "prompt": "True or false: 4 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "4 numbered sections are consolidated in this review."
          },
          {
            "type": "mc",
            "prompt": "True or false: Forgetting positivity and domain restrictions of logarithms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "marks": 1,
            "explanation": "State the interval on which each logarithmic or differential-equation step is valid."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Define the natural logarithm by area under 1/x, establish its properties, and recover exponential functions as inverses.",
          "Solve separable equations and model exponential growth, decay, and other proportional-rate processes.",
          "Develop hyperbolic sine, cosine, and related functions, their identities, graphs, and derivatives.",
          "Compare asymptotic growth rates and organize logarithmic, power, and exponential functions into a hierarchy.",
          "4 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "integrals-and-transcendental-functionsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "techniques-of-integration",
    "lessonSlug": "techniques-of-integration-expert-mastery-review",
    "title": "Techniques of Integration Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Techniques of Integration.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Using Basic Integration Formulas.",
      "Explain the central ideas of Integration by Parts.",
      "Explain the central ideas of Trigonometric Integrals.",
      "Explain the central ideas of Trigonometric Substitutions."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Techniques of Integration**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Using Basic Integration Formulas",
            "text": "Explain the central ideas of Using Basic Integration Formulas."
          },
          {
            "title": "Integration by Parts",
            "text": "Explain the central ideas of Integration by Parts."
          },
          {
            "title": "Trigonometric Integrals",
            "text": "Explain the central ideas of Trigonometric Integrals."
          },
          {
            "title": "Trigonometric Substitutions",
            "text": "Explain the central ideas of Trigonometric Substitutions."
          },
          {
            "title": "Integration of Rational Functions by Partial Fractions",
            "text": "Explain the central ideas of Integration of Rational Functions by Partial Fractions."
          },
          {
            "title": "Integral Tables and Computer Algebra Systems",
            "text": "Explain the central ideas of Integral Tables and Computer Algebra Systems."
          },
          {
            "title": "Numerical Integration",
            "text": "Explain the central ideas of Numerical Integration."
          },
          {
            "title": "Improper Integrals",
            "text": "Explain the central ideas of Improper Integrals."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for using basic integration formulas.",
        "figure": {
          "type": "calculus",
          "kind": "integral"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Using Basic Integration Formulas",
            "Select and combine basic antiderivative rules, algebraic simplification, substitution, and identities before using advanced methods.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Integration by Parts",
            "Reverse the product rule through integration by parts and choose u strategically for repeated or cyclic integrals.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Trigonometric Integrals",
            "Integrate powers and products of trigonometric functions using parity, identities, and substitutions.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Trigonometric Substitutions",
            "Use right-triangle substitutions to simplify radicals involving a²−x², a²+x², or x²−a².",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Integration of Rational Functions by Partial Fractions",
            "Decompose proper rational functions into simpler fractions according to the factorization of the denominator.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Integral Tables and Computer Algebra Systems",
            "Use integral tables and computer algebra as verifiable tools rather than black boxes, checking domains and differentiating results.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Numerical Integration",
            "Approximate definite integrals by trapezoidal and Simpson rules and relate step size to error.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Improper Integrals",
            "Replace infinite intervals or unbounded integrands by limits and classify each improper integral as convergent or divergent.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Probability",
            "Interpret nonnegative normalized functions as probability densities and compute probabilities, means, and spread by integration.",
            "Simplify and classify the integrand, then choose the method."
          ],
          [
            "Techniques of Integration Chapter Review",
            "9 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\int(3x^2-4/x)dx$.",
        "steps": [
          "Use the power rule on $3x^2$.",
          "Use the logarithmic rule on $1/x$."
        ],
        "answer": "$x^3-4\\ln|x|+C$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\int xe^x dx$.",
        "steps": [
          "Choose $u=x$ and $dv=e^x dx$.",
          "Then $du=dx$ and $v=e^x$.",
          "Apply integration by parts."
        ],
        "answer": "$xe^x-e^x+C$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\int\\sin^3x\\cos x\\,dx$.",
        "steps": [
          "Save $\\cos x\\,dx$ and set $u=\\sin x$.",
          "Then integrate $u^3$."
        ],
        "answer": "$\\sin^4x/4+C$."
      },
      {
        "kind": "example",
        "prompt": "Set up $\\int dx/\\sqrt{9-x^2}$ with a trigonometric substitution.",
        "steps": [
          "Let $x=3\\sin\\theta$.",
          "Then $dx=3\\cos\\theta d\\theta$ and the radical is $3\\cos\\theta$."
        ],
        "answer": "The integral becomes $\\int d\\theta=\\arcsin(x/3)+C$."
      },
      {
        "kind": "example",
        "prompt": "Decompose $1/(x^2-1)$.",
        "steps": [
          "Factor the denominator as $(x-1)(x+1)$.",
          "Set $1=A(x+1)+B(x-1)$.",
          "Solve $A=1/2$, $B=-1/2$."
        ],
        "answer": "$1/(x^2-1)=1/[2(x-1)]-1/[2(x+1)]$."
      },
      {
        "kind": "example",
        "prompt": "A CAS reports $\\int dx/(x^2-1)=\\tfrac12\\ln((x-1)/(x+1))$. How do you verify it?",
        "steps": [
          "Differentiate the reported expression.",
          "Simplify to $1/(x^2-1)$.",
          "Note that absolute values are needed for a real antiderivative on intervals."
        ],
        "answer": "A domain-aware form is $\\tfrac12\\ln|(x-1)/(x+1)|+C$."
      },
      {
        "kind": "example",
        "prompt": "Approximate $\\int_0^2x^2dx$ with Simpson’s Rule using $n=2$.",
        "steps": [
          "$h=1$ and values are $0,1,4$.",
          "$S_2=(1/3)(0+4(1)+4)$."
        ],
        "answer": "$S_2=8/3$, exact for this quadratic."
      },
      {
        "kind": "example",
        "prompt": "Determine whether $\\int_1^\\infty x^{-2}dx$ converges.",
        "steps": [
          "Replace infinity by $b$.",
          "Evaluate $[-1/x]_1^b$.",
          "Take $b\\to\\infty$."
        ],
        "answer": "It converges to $1$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Choosing an advanced technique before simplifying.",
            "right": "Simplify and classify the integrand, then choose the method."
          },
          {
            "wrong": "Choosing an advanced technique before simplifying.",
            "right": "Simplify and classify the integrand, then choose the method."
          },
          {
            "wrong": "Choosing an advanced technique before simplifying.",
            "right": "Simplify and classify the integrand, then choose the method."
          },
          {
            "wrong": "Choosing an advanced technique before simplifying.",
            "right": "Simplify and classify the integrand, then choose the method."
          },
          {
            "wrong": "Choosing an advanced technique before simplifying.",
            "right": "Simplify and classify the integrand, then choose the method."
          },
          {
            "wrong": "Choosing an advanced technique before simplifying.",
            "right": "Simplify and classify the integrand, then choose the method."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Select and combine basic antiderivative rules, algebraic simplification, substitution, and identities before using advanced methods.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Select and combine basic antiderivative rules, algebraic simplification, substitution, and identities before using advanced methods."
          },
          {
            "prompt": "True or false: Reverse the product rule through integration by parts and choose u strategically for repeated or cyclic integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Reverse the product rule through integration by parts and choose u strategically for repeated or cyclic integrals."
          },
          {
            "prompt": "True or false: Integrate powers and products of trigonometric functions using parity, identities, and substitutions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Integrate powers and products of trigonometric functions using parity, identities, and substitutions."
          },
          {
            "prompt": "True or false: Use right-triangle substitutions to simplify radicals involving a²−x², a²+x², or x²−a².",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use right-triangle substitutions to simplify radicals involving a²−x², a²+x², or x²−a²."
          },
          {
            "prompt": "True or false: Decompose proper rational functions into simpler fractions according to the factorization of the denominator.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Decompose proper rational functions into simpler fractions according to the factorization of the denominator."
          },
          {
            "prompt": "True or false: Use integral tables and computer algebra as verifiable tools rather than black boxes, checking domains and differentiating results.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use integral tables and computer algebra as verifiable tools rather than black boxes, checking domains and differentiating results."
          },
          {
            "prompt": "True or false: Approximate definite integrals by trapezoidal and Simpson rules and relate step size to error.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Approximate definite integrals by trapezoidal and Simpson rules and relate step size to error."
          },
          {
            "prompt": "True or false: Replace infinite intervals or unbounded integrands by limits and classify each improper integral as convergent or divergent.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Replace infinite intervals or unbounded integrands by limits and classify each improper integral as convergent or divergent."
          },
          {
            "prompt": "True or false: Interpret nonnegative normalized functions as probability densities and compute probabilities, means, and spread by integration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Interpret nonnegative normalized functions as probability densities and compute probabilities, means, and spread by integration."
          },
          {
            "prompt": "True or false: 9 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "9 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Choosing an advanced technique before simplifying.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Simplify and classify the integrand, then choose the method."
          },
          {
            "prompt": "True or false: Choosing an advanced technique before simplifying.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Simplify and classify the integrand, then choose the method."
          }
        ],
        "stepKey": "techniques-of-integrationExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Select and combine basic antiderivative rules, algebraic simplification, substitution, and identities before using advanced methods.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Select and combine basic antiderivative rules, algebraic simplification, substitution, and identities before using advanced methods."
          },
          {
            "type": "mc",
            "prompt": "True or false: Reverse the product rule through integration by parts and choose u strategically for repeated or cyclic integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Reverse the product rule through integration by parts and choose u strategically for repeated or cyclic integrals."
          },
          {
            "type": "mc",
            "prompt": "True or false: Integrate powers and products of trigonometric functions using parity, identities, and substitutions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Integrate powers and products of trigonometric functions using parity, identities, and substitutions."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use right-triangle substitutions to simplify radicals involving a²−x², a²+x², or x²−a².",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use right-triangle substitutions to simplify radicals involving a²−x², a²+x², or x²−a²."
          },
          {
            "type": "mc",
            "prompt": "True or false: Decompose proper rational functions into simpler fractions according to the factorization of the denominator.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Decompose proper rational functions into simpler fractions according to the factorization of the denominator."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use integral tables and computer algebra as verifiable tools rather than black boxes, checking domains and differentiating results.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use integral tables and computer algebra as verifiable tools rather than black boxes, checking domains and differentiating results."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Select and combine basic antiderivative rules, algebraic simplification, substitution, and identities before using advanced methods.",
          "Reverse the product rule through integration by parts and choose u strategically for repeated or cyclic integrals.",
          "Integrate powers and products of trigonometric functions using parity, identities, and substitutions.",
          "Use right-triangle substitutions to simplify radicals involving a²−x², a²+x², or x²−a².",
          "Decompose proper rational functions into simpler fractions according to the factorization of the denominator.",
          "Use integral tables and computer algebra as verifiable tools rather than black boxes, checking domains and differentiating results.",
          "Approximate definite integrals by trapezoidal and Simpson rules and relate step size to error.",
          "Replace infinite intervals or unbounded integrands by limits and classify each improper integral as convergent or divergent."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "techniques-of-integrationExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "first-order-differential-equations",
    "lessonSlug": "first-order-differential-equations-expert-mastery-review",
    "title": "First-Order Differential Equations Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across First-Order Differential Equations.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Solutions, Slope Fields, and Euler’s Method.",
      "Explain the central ideas of First-Order Linear Equations.",
      "Explain the central ideas of Applications.",
      "Explain the central ideas of Graphical Solutions of Autonomous Equations."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **First-Order Differential Equations**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Solutions, Slope Fields, and Euler’s Method",
            "text": "Explain the central ideas of Solutions, Slope Fields, and Euler’s Method."
          },
          {
            "title": "First-Order Linear Equations",
            "text": "Explain the central ideas of First-Order Linear Equations."
          },
          {
            "title": "Applications",
            "text": "Explain the central ideas of Applications."
          },
          {
            "title": "Graphical Solutions of Autonomous Equations",
            "text": "Explain the central ideas of Graphical Solutions of Autonomous Equations."
          },
          {
            "title": "Systems of Equations and Phase Planes",
            "text": "Explain the central ideas of Systems of Equations and Phase Planes."
          },
          {
            "title": "First-Order Differential Equations Chapter Review",
            "text": "Connect the major ideas in First-Order Differential Equations."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for solutions, slope fields, and euler’s method.",
        "figure": {
          "type": "calculus",
          "kind": "slope-field"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Solutions, Slope Fields, and Euler’s Method",
            "Read and sketch slope fields, verify proposed solutions, solve initial-value problems numerically with Euler’s method, and estimate error.",
            "Substitute initial data and verify the final solution in the original equation."
          ],
          [
            "First-Order Linear Equations",
            "Solve first-order linear equations with an integrating factor that turns the left side into a product derivative.",
            "Substitute initial data and verify the final solution in the original equation."
          ],
          [
            "Applications",
            "Build and analyze differential-equation models for growth, mixing, cooling, circuits, and other applied processes.",
            "Substitute initial data and verify the final solution in the original equation."
          ],
          [
            "Graphical Solutions of Autonomous Equations",
            "Find equilibrium solutions of autonomous equations and classify their stability from a phase line.",
            "Substitute initial data and verify the final solution in the original equation."
          ],
          [
            "Systems of Equations and Phase Planes",
            "Represent coupled first-order equations as systems and analyze trajectories, equilibrium points, and phase portraits.",
            "Substitute initial data and verify the final solution in the original equation."
          ],
          [
            "First-Order Differential Equations Chapter Review",
            "5 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Use one Euler step for $y'=x+y$, $y(0)=1$, with $h=0.1$.",
        "steps": [
          "At $(0,1)$ the slope is 1.",
          "$y_1=y_0+h f(x_0,y_0)=1+0.1(1)$."
        ],
        "answer": "$y(0.1)\\approx1.1$."
      },
      {
        "kind": "example",
        "prompt": "Solve $y'+2y=4$.",
        "steps": [
          "The integrating factor is $e^{2x}$.",
          "Then $(e^{2x}y)'=4e^{2x}$.",
          "Integrate and divide by $e^{2x}$."
        ],
        "answer": "$y=2+Ce^{-2x}$."
      },
      {
        "kind": "example",
        "prompt": "A culture follows $P'=0.2P$, $P(0)=100$. Find $P(t)$.",
        "steps": [
          "Recognize exponential growth.",
          "Use the initial value."
        ],
        "answer": "$P(t)=100e^{0.2t}$."
      },
      {
        "kind": "example",
        "prompt": "Analyze equilibria of $y'=y(1-y)$.",
        "steps": [
          "Equilibria occur at $y=0$ and $y=1$.",
          "The sign is negative below 0, positive between 0 and 1, and negative above 1."
        ],
        "answer": "$y=0$ is unstable and $y=1$ is stable."
      },
      {
        "kind": "example",
        "prompt": "Write $x'=2x-y$, $y'=x+2y$ in matrix form.",
        "steps": [
          "Place dependent variables in $\\mathbf u=\\langle x,y\\rangle^T$.",
          "Collect coefficients in a matrix."
        ],
        "answer": "$\\mathbf u'=\\begin{pmatrix}2&-1\\\\1&2\\end{pmatrix}\\mathbf u$."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for First-Order Differential Equations Chapter Review.",
        "steps": [
          "Identify the target skill: Connect the major ideas in First-Order Differential Equations..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Giving a general solution without applying the initial condition.",
            "right": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "wrong": "Giving a general solution without applying the initial condition.",
            "right": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "wrong": "Giving a general solution without applying the initial condition.",
            "right": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "wrong": "Giving a general solution without applying the initial condition.",
            "right": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "wrong": "Giving a general solution without applying the initial condition.",
            "right": "Substitute initial data and verify the final solution in the original equation."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Read and sketch slope fields, verify proposed solutions, solve initial-value problems numerically with Euler’s method, and estimate error.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Read and sketch slope fields, verify proposed solutions, solve initial-value problems numerically with Euler’s method, and estimate error."
          },
          {
            "prompt": "True or false: Solve first-order linear equations with an integrating factor that turns the left side into a product derivative.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Solve first-order linear equations with an integrating factor that turns the left side into a product derivative."
          },
          {
            "prompt": "True or false: Build and analyze differential-equation models for growth, mixing, cooling, circuits, and other applied processes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Build and analyze differential-equation models for growth, mixing, cooling, circuits, and other applied processes."
          },
          {
            "prompt": "True or false: Find equilibrium solutions of autonomous equations and classify their stability from a phase line.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Find equilibrium solutions of autonomous equations and classify their stability from a phase line."
          },
          {
            "prompt": "True or false: Represent coupled first-order equations as systems and analyze trajectories, equilibrium points, and phase portraits.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Represent coupled first-order equations as systems and analyze trajectories, equilibrium points, and phase portraits."
          },
          {
            "prompt": "True or false: 5 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "5 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Giving a general solution without applying the initial condition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "prompt": "True or false: Giving a general solution without applying the initial condition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "prompt": "True or false: Giving a general solution without applying the initial condition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "prompt": "True or false: Giving a general solution without applying the initial condition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "prompt": "True or false: Giving a general solution without applying the initial condition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Substitute initial data and verify the final solution in the original equation."
          },
          {
            "prompt": "Which action best demonstrates mastery of Solutions, Slope Fields, and Euler’s Method?",
            "options": [
              "Explain the central ideas of Solutions, Slope Fields, and Euler’s Method.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Explain the central ideas of Solutions, Slope Fields, and Euler’s Method."
          }
        ],
        "stepKey": "first-order-differential-equationsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Read and sketch slope fields, verify proposed solutions, solve initial-value problems numerically with Euler’s method, and estimate error.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Read and sketch slope fields, verify proposed solutions, solve initial-value problems numerically with Euler’s method, and estimate error."
          },
          {
            "type": "mc",
            "prompt": "True or false: Solve first-order linear equations with an integrating factor that turns the left side into a product derivative.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Solve first-order linear equations with an integrating factor that turns the left side into a product derivative."
          },
          {
            "type": "mc",
            "prompt": "True or false: Build and analyze differential-equation models for growth, mixing, cooling, circuits, and other applied processes.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Build and analyze differential-equation models for growth, mixing, cooling, circuits, and other applied processes."
          },
          {
            "type": "mc",
            "prompt": "True or false: Find equilibrium solutions of autonomous equations and classify their stability from a phase line.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Find equilibrium solutions of autonomous equations and classify their stability from a phase line."
          },
          {
            "type": "mc",
            "prompt": "True or false: Represent coupled first-order equations as systems and analyze trajectories, equilibrium points, and phase portraits.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Represent coupled first-order equations as systems and analyze trajectories, equilibrium points, and phase portraits."
          },
          {
            "type": "mc",
            "prompt": "True or false: 5 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "5 numbered sections are consolidated in this review."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Read and sketch slope fields, verify proposed solutions, solve initial-value problems numerically with Euler’s method, and estimate error.",
          "Solve first-order linear equations with an integrating factor that turns the left side into a product derivative.",
          "Build and analyze differential-equation models for growth, mixing, cooling, circuits, and other applied processes.",
          "Find equilibrium solutions of autonomous equations and classify their stability from a phase line.",
          "Represent coupled first-order equations as systems and analyze trajectories, equilibrium points, and phase portraits.",
          "5 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "first-order-differential-equationsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "infinite-sequences-and-series",
    "lessonSlug": "infinite-sequences-and-series-expert-mastery-review",
    "title": "Infinite Sequences and Series Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Infinite Sequences and Series.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Sequences.",
      "Explain the central ideas of Infinite Series.",
      "Explain the central ideas of The Integral Test.",
      "Explain the central ideas of Comparison Tests."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Infinite Sequences and Series**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Sequences",
            "text": "Explain the central ideas of Sequences."
          },
          {
            "title": "Infinite Series",
            "text": "Explain the central ideas of Infinite Series."
          },
          {
            "title": "The Integral Test",
            "text": "Explain the central ideas of The Integral Test."
          },
          {
            "title": "Comparison Tests",
            "text": "Explain the central ideas of Comparison Tests."
          },
          {
            "title": "Absolute Convergence; The Ratio and Root Tests",
            "text": "Explain the central ideas of Absolute Convergence; The Ratio and Root Tests."
          },
          {
            "title": "Alternating Series and Conditional Convergence",
            "text": "Explain the central ideas of Alternating Series and Conditional Convergence."
          },
          {
            "title": "Power Series",
            "text": "Explain the central ideas of Power Series."
          },
          {
            "title": "Taylor and Maclaurin Series",
            "text": "Explain the central ideas of Taylor and Maclaurin Series."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for sequences.",
        "figure": {
          "type": "calculus",
          "kind": "series"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Sequences",
            "Describe sequence convergence, monotonicity, boundedness, recursive behavior, and limits obtained from algebra or the squeeze principle.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Infinite Series",
            "Interpret a series through its partial sums and recognize geometric and telescoping structures.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "The Integral Test",
            "Compare a positive decreasing series with an improper integral and use the resulting remainder estimates.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Comparison Tests",
            "Use direct and limit comparison to transfer known convergence behavior to a new positive-term series.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Absolute Convergence; The Ratio and Root Tests",
            "Test absolute convergence through ratios or nth roots, especially for factorials and exponential powers.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Alternating Series and Conditional Convergence",
            "Distinguish absolute from conditional convergence and bound the remainder of a qualifying alternating series.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Power Series",
            "Determine the radius and interval of convergence of a power series and differentiate or integrate inside that interval.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Taylor and Maclaurin Series",
            "Construct Taylor and Maclaurin polynomials and series from derivatives at a center.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "Convergence of Taylor Series",
            "Prove that a Taylor series represents its function by controlling the remainder term.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ],
          [
            "The Binomial Series and Applications of Taylor Series",
            "Use the generalized binomial series and standard Taylor expansions to approximate functions, limits, and integrals.",
            "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find $\\lim_{n\\to\\infty}(3n+1)/(n+5)$.",
        "steps": [
          "Divide numerator and denominator by $n$.",
          "Terms $1/n$ vanish."
        ],
        "answer": "The limit is $3$."
      },
      {
        "kind": "example",
        "prompt": "Sum $\\sum_{n=0}^\\infty 3(1/4)^n$.",
        "steps": [
          "It is geometric with $a=3$ and $r=1/4$.",
          "Use $a/(1-r)$."
        ],
        "answer": "The sum is $4$."
      },
      {
        "kind": "example",
        "prompt": "Test $\\sum_{n=2}^\\infty1/(n\\ln^2n)$.",
        "steps": [
          "Use $f(x)=1/(x\\ln^2x)$, positive and decreasing eventually.",
          "The improper integral equals $1/\\ln2$, finite."
        ],
        "answer": "The series converges."
      },
      {
        "kind": "example",
        "prompt": "Test $\\sum1/(n^2+1)$.",
        "steps": [
          "For $n\\ge1$, $0<1/(n^2+1)<1/n^2$.",
          "The p-series with $p=2$ converges."
        ],
        "answer": "The series converges by comparison."
      },
      {
        "kind": "example",
        "prompt": "Test $\\sum n!/3^n$.",
        "steps": [
          "The ratio is $(n+1)/3$.",
          "It eventually exceeds 1 and tends to infinity."
        ],
        "answer": "The series diverges."
      },
      {
        "kind": "example",
        "prompt": "How many terms ensure error below $0.01$ for $\\sum(-1)^{n-1}/n$?",
        "steps": [
          "The alternating remainder is at most $1/(N+1)$.",
          "Require $1/(N+1)<0.01$."
        ],
        "answer": "Take at least $N=100$ terms."
      },
      {
        "kind": "example",
        "prompt": "Find the radius of $\\sum n(x-2)^n/5^n$.",
        "steps": [
          "Use the ratio test.",
          "The limiting ratio is $|x-2|/5$."
        ],
        "answer": "The radius is $5$; endpoints require separate tests."
      },
      {
        "kind": "example",
        "prompt": "Write the degree-3 Maclaurin polynomial for $e^x$.",
        "steps": [
          "All derivatives of $e^x$ at zero equal 1.",
          "Use coefficients $1/n!$."
        ],
        "answer": "$T_3(x)=1+x+x^2/2+x^3/6$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using a convergence test without checking its hypotheses.",
            "right": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          },
          {
            "wrong": "Using a convergence test without checking its hypotheses.",
            "right": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          },
          {
            "wrong": "Using a convergence test without checking its hypotheses.",
            "right": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          },
          {
            "wrong": "Using a convergence test without checking its hypotheses.",
            "right": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          },
          {
            "wrong": "Using a convergence test without checking its hypotheses.",
            "right": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          },
          {
            "wrong": "Using a convergence test without checking its hypotheses.",
            "right": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Describe sequence convergence, monotonicity, boundedness, recursive behavior, and limits obtained from algebra or the squeeze principle.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Describe sequence convergence, monotonicity, boundedness, recursive behavior, and limits obtained from algebra or the squeeze principle."
          },
          {
            "prompt": "True or false: Interpret a series through its partial sums and recognize geometric and telescoping structures.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Interpret a series through its partial sums and recognize geometric and telescoping structures."
          },
          {
            "prompt": "True or false: Compare a positive decreasing series with an improper integral and use the resulting remainder estimates.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compare a positive decreasing series with an improper integral and use the resulting remainder estimates."
          },
          {
            "prompt": "True or false: Use direct and limit comparison to transfer known convergence behavior to a new positive-term series.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use direct and limit comparison to transfer known convergence behavior to a new positive-term series."
          },
          {
            "prompt": "True or false: Test absolute convergence through ratios or nth roots, especially for factorials and exponential powers.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Test absolute convergence through ratios or nth roots, especially for factorials and exponential powers."
          },
          {
            "prompt": "True or false: Distinguish absolute from conditional convergence and bound the remainder of a qualifying alternating series.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Distinguish absolute from conditional convergence and bound the remainder of a qualifying alternating series."
          },
          {
            "prompt": "True or false: Determine the radius and interval of convergence of a power series and differentiate or integrate inside that interval.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Determine the radius and interval of convergence of a power series and differentiate or integrate inside that interval."
          },
          {
            "prompt": "True or false: Construct Taylor and Maclaurin polynomials and series from derivatives at a center.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Construct Taylor and Maclaurin polynomials and series from derivatives at a center."
          },
          {
            "prompt": "True or false: Prove that a Taylor series represents its function by controlling the remainder term.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Prove that a Taylor series represents its function by controlling the remainder term."
          },
          {
            "prompt": "True or false: Use the generalized binomial series and standard Taylor expansions to approximate functions, limits, and integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use the generalized binomial series and standard Taylor expansions to approximate functions, limits, and integrals."
          },
          {
            "prompt": "True or false: 10 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "10 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Using a convergence test without checking its hypotheses.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State positivity, monotonicity, absolute values, or endpoint checks explicitly."
          }
        ],
        "stepKey": "infinite-sequences-and-seriesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Describe sequence convergence, monotonicity, boundedness, recursive behavior, and limits obtained from algebra or the squeeze principle.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Describe sequence convergence, monotonicity, boundedness, recursive behavior, and limits obtained from algebra or the squeeze principle."
          },
          {
            "type": "mc",
            "prompt": "True or false: Interpret a series through its partial sums and recognize geometric and telescoping structures.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Interpret a series through its partial sums and recognize geometric and telescoping structures."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compare a positive decreasing series with an improper integral and use the resulting remainder estimates.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compare a positive decreasing series with an improper integral and use the resulting remainder estimates."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use direct and limit comparison to transfer known convergence behavior to a new positive-term series.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use direct and limit comparison to transfer known convergence behavior to a new positive-term series."
          },
          {
            "type": "mc",
            "prompt": "True or false: Test absolute convergence through ratios or nth roots, especially for factorials and exponential powers.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Test absolute convergence through ratios or nth roots, especially for factorials and exponential powers."
          },
          {
            "type": "mc",
            "prompt": "True or false: Distinguish absolute from conditional convergence and bound the remainder of a qualifying alternating series.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Distinguish absolute from conditional convergence and bound the remainder of a qualifying alternating series."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Describe sequence convergence, monotonicity, boundedness, recursive behavior, and limits obtained from algebra or the squeeze principle.",
          "Interpret a series through its partial sums and recognize geometric and telescoping structures.",
          "Compare a positive decreasing series with an improper integral and use the resulting remainder estimates.",
          "Use direct and limit comparison to transfer known convergence behavior to a new positive-term series.",
          "Test absolute convergence through ratios or nth roots, especially for factorials and exponential powers.",
          "Distinguish absolute from conditional convergence and bound the remainder of a qualifying alternating series.",
          "Determine the radius and interval of convergence of a power series and differentiate or integrate inside that interval.",
          "Construct Taylor and Maclaurin polynomials and series from derivatives at a center."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "infinite-sequences-and-seriesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "parametric-equations-and-polar-coordinates",
    "lessonSlug": "parametric-equations-and-polar-coordinates-expert-mastery-review",
    "title": "Parametric Equations and Polar Coordinates Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Parametric Equations and Polar Coordinates.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Parametrizations of Plane Curves.",
      "Explain the central ideas of Calculus with Parametric Curves.",
      "Explain the central ideas of Polar Coordinates.",
      "Explain the central ideas of Graphing Polar Coordinate Equations."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Parametric Equations and Polar Coordinates**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Parametrizations of Plane Curves",
            "text": "Explain the central ideas of Parametrizations of Plane Curves."
          },
          {
            "title": "Calculus with Parametric Curves",
            "text": "Explain the central ideas of Calculus with Parametric Curves."
          },
          {
            "title": "Polar Coordinates",
            "text": "Explain the central ideas of Polar Coordinates."
          },
          {
            "title": "Graphing Polar Coordinate Equations",
            "text": "Explain the central ideas of Graphing Polar Coordinate Equations."
          },
          {
            "title": "Areas and Lengths in Polar Coordinates",
            "text": "Explain the central ideas of Areas and Lengths in Polar Coordinates."
          },
          {
            "title": "Conic Sections",
            "text": "Explain the central ideas of Conic Sections."
          },
          {
            "title": "Conics in Polar Coordinates",
            "text": "Explain the central ideas of Conics in Polar Coordinates."
          },
          {
            "title": "Parametric Equations and Polar Coordinates Chapter Review",
            "text": "Connect the major ideas in Parametric Equations and Polar Coordinates."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for parametrizations of plane curves.",
        "figure": {
          "type": "calculus",
          "kind": "polar"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Parametrizations of Plane Curves",
            "Represent plane curves with a parameter, track orientation, eliminate the parameter, and model motion.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Calculus with Parametric Curves",
            "Differentiate, integrate, and measure parametric curves, including tangent slope, second derivative, area, and arc length.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Polar Coordinates",
            "Convert between rectangular and polar coordinates while accounting for non-unique polar representations.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Graphing Polar Coordinate Equations",
            "Graph polar equations by symmetry, key angles, zeros, maxima, and curve families such as roses, cardioids, and lemniscates.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Areas and Lengths in Polar Coordinates",
            "Compute areas and arc lengths directly in polar coordinates with angular bounds chosen from the geometry.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Conic Sections",
            "Recognize parabolas, ellipses, and hyperbolas from their geometric definitions and standard equations.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Conics in Polar Coordinates",
            "Express conics relative to a focus and directrix in polar form and interpret eccentricity.",
            "Sketch the curve and track parameter direction and coordinate factors."
          ],
          [
            "Parametric Equations and Polar Coordinates Chapter Review",
            "7 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Eliminate the parameter from $x=2t+1$, $y=t^2$.",
        "steps": [
          "Solve $t=(x-1)/2$.",
          "Substitute into $y=t^2$."
        ],
        "answer": "$y=(x-1)^2/4$ with orientation determined by increasing $t$."
      },
      {
        "kind": "example",
        "prompt": "Find $dy/dx$ for $x=t^2$, $y=t^3$.",
        "steps": [
          "$dx/dt=2t$ and $dy/dt=3t^2$.",
          "Divide when $t\\ne0$."
        ],
        "answer": "$dy/dx=3t/2$."
      },
      {
        "kind": "example",
        "prompt": "Convert $(r,\\theta)=(2,\\pi/3)$ to rectangular coordinates.",
        "steps": [
          "Use $x=r\\cos\\theta$ and $y=r\\sin\\theta$."
        ],
        "answer": "$(x,y)=(1,\\sqrt3)$."
      },
      {
        "kind": "example",
        "prompt": "Identify the curve $r=2\\cos\\theta$.",
        "steps": [
          "Multiply by $r$: $r^2=2r\\cos\\theta$.",
          "Use $r^2=x^2+y^2$ and $r\\cos\\theta=x$."
        ],
        "answer": "It is the circle $(x-1)^2+y^2=1$."
      },
      {
        "kind": "example",
        "prompt": "Find the area inside $r=2$ from $0$ to $\\pi/2$.",
        "steps": [
          "Use $A=\\tfrac12\\int r^2d\\theta$.",
          "$A=\\tfrac12\\int_0^{\\pi/2}4d\\theta$."
        ],
        "answer": "The area is $\\pi$."
      },
      {
        "kind": "example",
        "prompt": "Classify $9x^2+4y^2=36$.",
        "steps": [
          "Divide by 36.",
          "$x^2/4+y^2/9=1$."
        ],
        "answer": "It is an ellipse with semiaxes 2 and 3."
      },
      {
        "kind": "example",
        "prompt": "For $r=6/(1+2\\cos\\theta)$, identify the conic type.",
        "steps": [
          "Compare with $r=ed/(1+e\\cos\\theta)$.",
          "The eccentricity is $e=2>1$."
        ],
        "answer": "The conic is a hyperbola."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Losing orientation, bounds, or the polar Jacobian.",
            "right": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "wrong": "Losing orientation, bounds, or the polar Jacobian.",
            "right": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "wrong": "Losing orientation, bounds, or the polar Jacobian.",
            "right": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "wrong": "Losing orientation, bounds, or the polar Jacobian.",
            "right": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "wrong": "Losing orientation, bounds, or the polar Jacobian.",
            "right": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "wrong": "Losing orientation, bounds, or the polar Jacobian.",
            "right": "Sketch the curve and track parameter direction and coordinate factors."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Represent plane curves with a parameter, track orientation, eliminate the parameter, and model motion.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Represent plane curves with a parameter, track orientation, eliminate the parameter, and model motion."
          },
          {
            "prompt": "True or false: Differentiate, integrate, and measure parametric curves, including tangent slope, second derivative, area, and arc length.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate, integrate, and measure parametric curves, including tangent slope, second derivative, area, and arc length."
          },
          {
            "prompt": "True or false: Convert between rectangular and polar coordinates while accounting for non-unique polar representations.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Convert between rectangular and polar coordinates while accounting for non-unique polar representations."
          },
          {
            "prompt": "True or false: Graph polar equations by symmetry, key angles, zeros, maxima, and curve families such as roses, cardioids, and lemniscates.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Graph polar equations by symmetry, key angles, zeros, maxima, and curve families such as roses, cardioids, and lemniscates."
          },
          {
            "prompt": "True or false: Compute areas and arc lengths directly in polar coordinates with angular bounds chosen from the geometry.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compute areas and arc lengths directly in polar coordinates with angular bounds chosen from the geometry."
          },
          {
            "prompt": "True or false: Recognize parabolas, ellipses, and hyperbolas from their geometric definitions and standard equations.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Recognize parabolas, ellipses, and hyperbolas from their geometric definitions and standard equations."
          },
          {
            "prompt": "True or false: Express conics relative to a focus and directrix in polar form and interpret eccentricity.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Express conics relative to a focus and directrix in polar form and interpret eccentricity."
          },
          {
            "prompt": "True or false: 7 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "7 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Losing orientation, bounds, or the polar Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "prompt": "True or false: Losing orientation, bounds, or the polar Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "prompt": "True or false: Losing orientation, bounds, or the polar Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch the curve and track parameter direction and coordinate factors."
          },
          {
            "prompt": "True or false: Losing orientation, bounds, or the polar Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch the curve and track parameter direction and coordinate factors."
          }
        ],
        "stepKey": "parametric-equations-and-polar-coordinatesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Represent plane curves with a parameter, track orientation, eliminate the parameter, and model motion.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Represent plane curves with a parameter, track orientation, eliminate the parameter, and model motion."
          },
          {
            "type": "mc",
            "prompt": "True or false: Differentiate, integrate, and measure parametric curves, including tangent slope, second derivative, area, and arc length.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Differentiate, integrate, and measure parametric curves, including tangent slope, second derivative, area, and arc length."
          },
          {
            "type": "mc",
            "prompt": "True or false: Convert between rectangular and polar coordinates while accounting for non-unique polar representations.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Convert between rectangular and polar coordinates while accounting for non-unique polar representations."
          },
          {
            "type": "mc",
            "prompt": "True or false: Graph polar equations by symmetry, key angles, zeros, maxima, and curve families such as roses, cardioids, and lemniscates.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Graph polar equations by symmetry, key angles, zeros, maxima, and curve families such as roses, cardioids, and lemniscates."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compute areas and arc lengths directly in polar coordinates with angular bounds chosen from the geometry.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compute areas and arc lengths directly in polar coordinates with angular bounds chosen from the geometry."
          },
          {
            "type": "mc",
            "prompt": "True or false: Recognize parabolas, ellipses, and hyperbolas from their geometric definitions and standard equations.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Recognize parabolas, ellipses, and hyperbolas from their geometric definitions and standard equations."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Represent plane curves with a parameter, track orientation, eliminate the parameter, and model motion.",
          "Differentiate, integrate, and measure parametric curves, including tangent slope, second derivative, area, and arc length.",
          "Convert between rectangular and polar coordinates while accounting for non-unique polar representations.",
          "Graph polar equations by symmetry, key angles, zeros, maxima, and curve families such as roses, cardioids, and lemniscates.",
          "Compute areas and arc lengths directly in polar coordinates with angular bounds chosen from the geometry.",
          "Recognize parabolas, ellipses, and hyperbolas from their geometric definitions and standard equations.",
          "Express conics relative to a focus and directrix in polar form and interpret eccentricity.",
          "7 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "parametric-equations-and-polar-coordinatesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "calculus-reference-and-proof-appendices",
    "lessonSlug": "calculus-reference-and-proof-appendices-expert-mastery-review",
    "title": "Calculus Reference and Proof Appendices Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Calculus Reference and Proof Appendices.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Recall the essential facts about Real Numbers and the Real Line.",
      "Recall the essential facts about Mathematical Induction.",
      "Recall the essential facts about Lines, Circles, and Parabolas.",
      "Recall the essential facts about Proofs of Limit Theorems."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Calculus Reference and Proof Appendices**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Real Numbers and the Real Line",
            "text": "Recall the essential facts about Real Numbers and the Real Line."
          },
          {
            "title": "Mathematical Induction",
            "text": "Recall the essential facts about Mathematical Induction."
          },
          {
            "title": "Lines, Circles, and Parabolas",
            "text": "Recall the essential facts about Lines, Circles, and Parabolas."
          },
          {
            "title": "Proofs of Limit Theorems",
            "text": "Recall the essential facts about Proofs of Limit Theorems."
          },
          {
            "title": "Commonly Occurring Limits",
            "text": "Recall the essential facts about Commonly Occurring Limits."
          },
          {
            "title": "Theory of the Real Numbers",
            "text": "Recall the essential facts about Theory of the Real Numbers."
          },
          {
            "title": "Complex Numbers",
            "text": "Recall the essential facts about Complex Numbers."
          },
          {
            "title": "Distributive Law for Vector Cross Products",
            "text": "Recall the essential facts about Distributive Law for Vector Cross Products."
          }
        ]
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Real Numbers and the Real Line",
            "Intervals, inequalities, absolute value, and completeness language used throughout calculus.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Mathematical Induction",
            "Base step, inductive hypothesis, and inductive step for statements indexed by positive integers.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Lines, Circles, and Parabolas",
            "Coordinate-geometry formulas that support tangent, optimization, and conic calculations.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Proofs of Limit Theorems",
            "Epsilon-delta proof patterns for sums, products, reciprocals, and compositions.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Commonly Occurring Limits",
            "Standard limits used to derive derivatives and evaluate indeterminate forms.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Theory of the Real Numbers",
            "Least-upper-bound ideas underlying completeness, convergence, and existence theorems.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Complex Numbers",
            "Rectangular and polar forms, arithmetic, roots, and Euler’s relation.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Distributive Law for Vector Cross Products",
            "A component proof of bilinearity and distributivity of the cross product.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Mixed Derivative and Increment Theorems",
            "Conditions under which mixed partials agree and how increments decompose into linear and error terms.",
            "State the method, keep notation consistent and verify the final result."
          ],
          [
            "Brief Table of Integrals",
            "A compact reference of algebraic, exponential, logarithmic, trigonometric, inverse-trigonometric, and hyperbolic antiderivatives.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Foundation check: explain the first justified step in a problem about Real Numbers and the Real Line.",
        "steps": [
          "Identify the target skill: Recall the essential facts about Real Numbers and the Real Line..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Method comparison: show how a result in Mathematical Induction should be verified.",
        "steps": [
          "Identify the target skill: Recall the essential facts about Mathematical Induction..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Expert reasoning: diagnose an invalid shortcut in Lines, Circles, and Parabolas.",
        "steps": [
          "Identify the target skill: Recall the essential facts about Lines, Circles, and Parabolas..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Application challenge: translate a practical situation into the mathematics of Proofs of Limit Theorems.",
        "steps": [
          "Identify the target skill: Recall the essential facts about Proofs of Limit Theorems..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Proof challenge: identify the assumptions needed in Commonly Occurring Limits.",
        "steps": [
          "Identify the target skill: Recall the essential facts about Commonly Occurring Limits..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "example",
        "prompt": "Communication challenge: write a complete solution for Theory of the Real Numbers.",
        "steps": [
          "Identify the target skill: Recall the essential facts about Theory of the Real Numbers..",
          "State the relevant definition, theorem or formula before manipulating symbols.",
          "Carry out the method in a logical order and preserve restrictions, units and notation.",
          "Check the conclusion using substitution, an inverse process, a graph, a limiting case or a geometric property."
        ],
        "answer": "A complete solution states the governing idea, applies it correctly and verifies that the conclusion satisfies the original conditions."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Apply a memorised rule without checking its conditions.",
            "right": "State the assumptions, use the rule in a justified order and verify the result."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Intervals, inequalities, absolute value, and completeness language used throughout calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Intervals, inequalities, absolute value, and completeness language used throughout calculus."
          },
          {
            "prompt": "True or false: Base step, inductive hypothesis, and inductive step for statements indexed by positive integers.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Base step, inductive hypothesis, and inductive step for statements indexed by positive integers."
          },
          {
            "prompt": "True or false: Coordinate-geometry formulas that support tangent, optimization, and conic calculations.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Coordinate-geometry formulas that support tangent, optimization, and conic calculations."
          },
          {
            "prompt": "True or false: Epsilon-delta proof patterns for sums, products, reciprocals, and compositions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Epsilon-delta proof patterns for sums, products, reciprocals, and compositions."
          },
          {
            "prompt": "True or false: Standard limits used to derive derivatives and evaluate indeterminate forms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Standard limits used to derive derivatives and evaluate indeterminate forms."
          },
          {
            "prompt": "True or false: Least-upper-bound ideas underlying completeness, convergence, and existence theorems.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Least-upper-bound ideas underlying completeness, convergence, and existence theorems."
          },
          {
            "prompt": "True or false: Rectangular and polar forms, arithmetic, roots, and Euler’s relation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Rectangular and polar forms, arithmetic, roots, and Euler’s relation."
          },
          {
            "prompt": "True or false: A component proof of bilinearity and distributivity of the cross product.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A component proof of bilinearity and distributivity of the cross product."
          },
          {
            "prompt": "True or false: Conditions under which mixed partials agree and how increments decompose into linear and error terms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Conditions under which mixed partials agree and how increments decompose into linear and error terms."
          },
          {
            "prompt": "True or false: A compact reference of algebraic, exponential, logarithmic, trigonometric, inverse-trigonometric, and hyperbolic antiderivatives.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "A compact reference of algebraic, exponential, logarithmic, trigonometric, inverse-trigonometric, and hyperbolic antiderivatives."
          },
          {
            "prompt": "True or false: Apply a memorised rule without checking its conditions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "State the assumptions, use the rule in a justified order and verify the result."
          },
          {
            "prompt": "Which action best demonstrates mastery of Real Numbers and the Real Line?",
            "options": [
              "Recall the essential facts about Real Numbers and the Real Line.",
              "Ignore the required conditions",
              "Skip verification",
              "Use an unrelated formula"
            ],
            "answer": 0,
            "explanation": "Recall the essential facts about Real Numbers and the Real Line."
          }
        ],
        "stepKey": "calculus-reference-and-proof-appendicesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Intervals, inequalities, absolute value, and completeness language used throughout calculus.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Intervals, inequalities, absolute value, and completeness language used throughout calculus."
          },
          {
            "type": "mc",
            "prompt": "True or false: Base step, inductive hypothesis, and inductive step for statements indexed by positive integers.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Base step, inductive hypothesis, and inductive step for statements indexed by positive integers."
          },
          {
            "type": "mc",
            "prompt": "True or false: Coordinate-geometry formulas that support tangent, optimization, and conic calculations.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Coordinate-geometry formulas that support tangent, optimization, and conic calculations."
          },
          {
            "type": "mc",
            "prompt": "True or false: Epsilon-delta proof patterns for sums, products, reciprocals, and compositions.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Epsilon-delta proof patterns for sums, products, reciprocals, and compositions."
          },
          {
            "type": "mc",
            "prompt": "True or false: Standard limits used to derive derivatives and evaluate indeterminate forms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Standard limits used to derive derivatives and evaluate indeterminate forms."
          },
          {
            "type": "mc",
            "prompt": "True or false: Least-upper-bound ideas underlying completeness, convergence, and existence theorems.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Least-upper-bound ideas underlying completeness, convergence, and existence theorems."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Intervals, inequalities, absolute value, and completeness language used throughout calculus.",
          "Base step, inductive hypothesis, and inductive step for statements indexed by positive integers.",
          "Coordinate-geometry formulas that support tangent, optimization, and conic calculations.",
          "Epsilon-delta proof patterns for sums, products, reciprocals, and compositions.",
          "Standard limits used to derive derivatives and evaluate indeterminate forms.",
          "Least-upper-bound ideas underlying completeness, convergence, and existence theorems.",
          "Rectangular and polar forms, arithmetic, roots, and Euler’s relation.",
          "A component proof of bilinearity and distributivity of the cross product."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "calculus-reference-and-proof-appendicesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "vectors-and-the-geometry-of-space",
    "lessonSlug": "vectors-and-the-geometry-of-space-expert-mastery-review",
    "title": "Vectors and the Geometry of Space Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Vectors and the Geometry of Space.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Three-Dimensional Coordinate Systems.",
      "Explain the central ideas of Vectors.",
      "Explain the central ideas of The Dot Product.",
      "Explain the central ideas of The Cross Product."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Vectors and the Geometry of Space**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Three-Dimensional Coordinate Systems",
            "text": "Explain the central ideas of Three-Dimensional Coordinate Systems."
          },
          {
            "title": "Vectors",
            "text": "Explain the central ideas of Vectors."
          },
          {
            "title": "The Dot Product",
            "text": "Explain the central ideas of The Dot Product."
          },
          {
            "title": "The Cross Product",
            "text": "Explain the central ideas of The Cross Product."
          },
          {
            "title": "Lines and Planes in Space",
            "text": "Explain the central ideas of Lines and Planes in Space."
          },
          {
            "title": "Cylinders and Quadric Surfaces",
            "text": "Explain the central ideas of Cylinders and Quadric Surfaces."
          },
          {
            "title": "Vectors and the Geometry of Space Chapter Review",
            "text": "Connect the major ideas in Vectors and the Geometry of Space."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for three-dimensional coordinate systems.",
        "figure": {
          "type": "calculus",
          "kind": "vector-space"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Three-Dimensional Coordinate Systems",
            "Extend Cartesian geometry to three dimensions, including distance, spheres, coordinate planes, and traces.",
            "Keep component, magnitude, and orientation notation distinct."
          ],
          [
            "Vectors",
            "Represent magnitude and direction with vectors and perform component operations, normalization, and decomposition.",
            "Keep component, magnitude, and orientation notation distinct."
          ],
          [
            "The Dot Product",
            "Use the dot product for angles, orthogonality, projection, and work.",
            "Keep component, magnitude, and orientation notation distinct."
          ],
          [
            "The Cross Product",
            "Use the cross product to construct perpendicular vectors, areas, volumes, and orientation.",
            "Keep component, magnitude, and orientation notation distinct."
          ],
          [
            "Lines and Planes in Space",
            "Write vector and parametric equations for lines and normal-vector equations for planes; analyze intersections and distances.",
            "Keep component, magnitude, and orientation notation distinct."
          ],
          [
            "Cylinders and Quadric Surfaces",
            "Identify cylinders and quadric surfaces from equations and visualize them through traces and symmetry.",
            "Keep component, magnitude, and orientation notation distinct."
          ],
          [
            "Vectors and the Geometry of Space Chapter Review",
            "6 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Find the distance from $(1,2,3)$ to $(4,6,3)$.",
        "steps": [
          "Subtract coordinates to get $\\langle3,4,0\\rangle$.",
          "Take its magnitude."
        ],
        "answer": "The distance is $5$."
      },
      {
        "kind": "example",
        "prompt": "Find a unit vector in the direction $\\langle3,4,0\\rangle$.",
        "steps": [
          "Its magnitude is 5.",
          "Divide each component by 5."
        ],
        "answer": "$\\langle3/5,4/5,0\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Find the angle between $\\langle1,0,1\\rangle$ and $\\langle1,1,0\\rangle$.",
        "steps": [
          "The dot product is 1.",
          "Each magnitude is $\\sqrt2$.",
          "$\\cos\\theta=1/2$."
        ],
        "answer": "$\\theta=\\pi/3$."
      },
      {
        "kind": "example",
        "prompt": "Compute $\\langle1,0,0\\rangle\\times\\langle0,1,0\\rangle$.",
        "steps": [
          "Apply the determinant or right-hand rule."
        ],
        "answer": "The result is $\\langle0,0,1\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Write the plane through $(1,0,2)$ with normal $\\langle2,-1,3\\rangle$.",
        "steps": [
          "Use $\\mathbf n\\cdot(\\mathbf r-\\mathbf r_0)=0$.",
          "Expand components."
        ],
        "answer": "$2(x-1)-y+3(z-2)=0$."
      },
      {
        "kind": "example",
        "prompt": "Identify $z=x^2+y^2$.",
        "steps": [
          "Horizontal traces are circles.",
          "Vertical traces are parabolas."
        ],
        "answer": "It is an elliptic paraboloid opening upward."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Confusing a vector with its magnitude or reversing cross-product order.",
            "right": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "wrong": "Confusing a vector with its magnitude or reversing cross-product order.",
            "right": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "wrong": "Confusing a vector with its magnitude or reversing cross-product order.",
            "right": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "wrong": "Confusing a vector with its magnitude or reversing cross-product order.",
            "right": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "wrong": "Confusing a vector with its magnitude or reversing cross-product order.",
            "right": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "wrong": "Confusing a vector with its magnitude or reversing cross-product order.",
            "right": "Keep component, magnitude, and orientation notation distinct."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Extend Cartesian geometry to three dimensions, including distance, spheres, coordinate planes, and traces.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Extend Cartesian geometry to three dimensions, including distance, spheres, coordinate planes, and traces."
          },
          {
            "prompt": "True or false: Represent magnitude and direction with vectors and perform component operations, normalization, and decomposition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Represent magnitude and direction with vectors and perform component operations, normalization, and decomposition."
          },
          {
            "prompt": "True or false: Use the dot product for angles, orthogonality, projection, and work.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use the dot product for angles, orthogonality, projection, and work."
          },
          {
            "prompt": "True or false: Use the cross product to construct perpendicular vectors, areas, volumes, and orientation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Use the cross product to construct perpendicular vectors, areas, volumes, and orientation."
          },
          {
            "prompt": "True or false: Write vector and parametric equations for lines and normal-vector equations for planes; analyze intersections and distances.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Write vector and parametric equations for lines and normal-vector equations for planes; analyze intersections and distances."
          },
          {
            "prompt": "True or false: Identify cylinders and quadric surfaces from equations and visualize them through traces and symmetry.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Identify cylinders and quadric surfaces from equations and visualize them through traces and symmetry."
          },
          {
            "prompt": "True or false: 6 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "6 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Confusing a vector with its magnitude or reversing cross-product order.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "prompt": "True or false: Confusing a vector with its magnitude or reversing cross-product order.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "prompt": "True or false: Confusing a vector with its magnitude or reversing cross-product order.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "prompt": "True or false: Confusing a vector with its magnitude or reversing cross-product order.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Keep component, magnitude, and orientation notation distinct."
          },
          {
            "prompt": "True or false: Confusing a vector with its magnitude or reversing cross-product order.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Keep component, magnitude, and orientation notation distinct."
          }
        ],
        "stepKey": "vectors-and-the-geometry-of-spaceExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Extend Cartesian geometry to three dimensions, including distance, spheres, coordinate planes, and traces.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Extend Cartesian geometry to three dimensions, including distance, spheres, coordinate planes, and traces."
          },
          {
            "type": "mc",
            "prompt": "True or false: Represent magnitude and direction with vectors and perform component operations, normalization, and decomposition.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Represent magnitude and direction with vectors and perform component operations, normalization, and decomposition."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use the dot product for angles, orthogonality, projection, and work.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use the dot product for angles, orthogonality, projection, and work."
          },
          {
            "type": "mc",
            "prompt": "True or false: Use the cross product to construct perpendicular vectors, areas, volumes, and orientation.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Use the cross product to construct perpendicular vectors, areas, volumes, and orientation."
          },
          {
            "type": "mc",
            "prompt": "True or false: Write vector and parametric equations for lines and normal-vector equations for planes; analyze intersections and distances.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Write vector and parametric equations for lines and normal-vector equations for planes; analyze intersections and distances."
          },
          {
            "type": "mc",
            "prompt": "True or false: Identify cylinders and quadric surfaces from equations and visualize them through traces and symmetry.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Identify cylinders and quadric surfaces from equations and visualize them through traces and symmetry."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Extend Cartesian geometry to three dimensions, including distance, spheres, coordinate planes, and traces.",
          "Represent magnitude and direction with vectors and perform component operations, normalization, and decomposition.",
          "Use the dot product for angles, orthogonality, projection, and work.",
          "Use the cross product to construct perpendicular vectors, areas, volumes, and orientation.",
          "Write vector and parametric equations for lines and normal-vector equations for planes; analyze intersections and distances.",
          "Identify cylinders and quadric surfaces from equations and visualize them through traces and symmetry.",
          "6 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "vectors-and-the-geometry-of-spaceExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "vector-valued-functions-and-motion-in-space",
    "lessonSlug": "vector-valued-functions-and-motion-in-space-expert-mastery-review",
    "title": "Vector-Valued Functions and Motion in Space Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Vector-Valued Functions and Motion in Space.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Curves in Space and Their Tangents.",
      "Explain the central ideas of Integrals of Vector Functions; Projectile Motion.",
      "Explain the central ideas of Arc Length in Space.",
      "Explain the central ideas of Curvature and Normal Vectors of a Curve."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Vector-Valued Functions and Motion in Space**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Curves in Space and Their Tangents",
            "text": "Explain the central ideas of Curves in Space and Their Tangents."
          },
          {
            "title": "Integrals of Vector Functions; Projectile Motion",
            "text": "Explain the central ideas of Integrals of Vector Functions; Projectile Motion."
          },
          {
            "title": "Arc Length in Space",
            "text": "Explain the central ideas of Arc Length in Space."
          },
          {
            "title": "Curvature and Normal Vectors of a Curve",
            "text": "Explain the central ideas of Curvature and Normal Vectors of a Curve."
          },
          {
            "title": "Tangential and Normal Components of Acceleration",
            "text": "Explain the central ideas of Tangential and Normal Components of Acceleration."
          },
          {
            "title": "Velocity and Acceleration in Polar Coordinates",
            "text": "Explain the central ideas of Velocity and Acceleration in Polar Coordinates."
          },
          {
            "title": "Vector-Valued Functions and Motion in Space Chapter Review",
            "text": "Connect the major ideas in Vector-Valued Functions and Motion in Space."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for curves in space and their tangents.",
        "figure": {
          "type": "calculus",
          "kind": "space-curve"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Curves in Space and Their Tangents",
            "Describe a space curve by a vector-valued function and compute velocity, speed, tangent direction, and smoothness.",
            "Use vector quantities first, then take magnitudes or components."
          ],
          [
            "Integrals of Vector Functions; Projectile Motion",
            "Integrate vector components and solve constant-acceleration motion, including three-dimensional projectile models.",
            "Use vector quantities first, then take magnitudes or components."
          ],
          [
            "Arc Length in Space",
            "Measure space curves with the speed integral and reparametrize by arc length.",
            "Use vector quantities first, then take magnitudes or components."
          ],
          [
            "Curvature and Normal Vectors of a Curve",
            "Quantify bending through curvature and define the unit tangent, normal, and osculating circle.",
            "Use vector quantities first, then take magnitudes or components."
          ],
          [
            "Tangential and Normal Components of Acceleration",
            "Decompose acceleration into tangential and normal components to separate change of speed from change of direction.",
            "Use vector quantities first, then take magnitudes or components."
          ],
          [
            "Velocity and Acceleration in Polar Coordinates",
            "Express velocity and acceleration in moving radial and transverse directions for polar motion.",
            "Use vector quantities first, then take magnitudes or components."
          ],
          [
            "Vector-Valued Functions and Motion in Space Chapter Review",
            "6 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "For $\\mathbf r(t)=\\langle\\cos t,\\sin t,t\\rangle$, find velocity.",
        "steps": [
          "Differentiate components."
        ],
        "answer": "$\\mathbf v(t)=\\langle-\\sin t,\\cos t,1\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "A projectile has $\\mathbf r_0=0$, $\\mathbf v_0=\\langle10,0,20\\rangle$, and gravity $\\langle0,0,-9.8\\rangle$.",
        "steps": [
          "Use $\\mathbf r=\\mathbf r_0+\\mathbf v_0t+\\tfrac12\\mathbf at^2$."
        ],
        "answer": "$\\mathbf r(t)=\\langle10t,0,20t-4.9t^2\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Set up arc length for $\\mathbf r(t)=\\langle t,t^2,t^3\\rangle$, $0\\le t\\le1$.",
        "steps": [
          "Differentiate: $\\mathbf r'=\\langle1,2t,3t^2\\rangle$.",
          "Take the magnitude."
        ],
        "answer": "$L=\\int_0^1\\sqrt{1+4t^2+9t^4}\\,dt$."
      },
      {
        "kind": "example",
        "prompt": "Find the curvature of a circle of radius $R$.",
        "steps": [
          "A unit-speed circle turns at constant rate $1/R$.",
          "Equivalently apply the cross-product formula."
        ],
        "answer": "$\\kappa=1/R$."
      },
      {
        "kind": "example",
        "prompt": "A particle moves at constant speed 5 on a circle of radius 2. Find normal acceleration.",
        "steps": [
          "Tangential acceleration is zero.",
          "$a_N=v^2/R$."
        ],
        "answer": "$a_N=25/2$ toward the center."
      },
      {
        "kind": "example",
        "prompt": "For circular motion with constant $r=R$ and $\\dot\\theta=\\omega$, find acceleration.",
        "steps": [
          "$\\dot r=\\ddot r=\\ddot\\theta=0$.",
          "Substitute in the polar acceleration formula."
        ],
        "answer": "$\\mathbf a=-R\\omega^2\\mathbf e_r$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Equating velocity with speed or normal acceleration with total acceleration.",
            "right": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "wrong": "Equating velocity with speed or normal acceleration with total acceleration.",
            "right": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "wrong": "Equating velocity with speed or normal acceleration with total acceleration.",
            "right": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "wrong": "Equating velocity with speed or normal acceleration with total acceleration.",
            "right": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "wrong": "Equating velocity with speed or normal acceleration with total acceleration.",
            "right": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "wrong": "Equating velocity with speed or normal acceleration with total acceleration.",
            "right": "Use vector quantities first, then take magnitudes or components."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Describe a space curve by a vector-valued function and compute velocity, speed, tangent direction, and smoothness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Describe a space curve by a vector-valued function and compute velocity, speed, tangent direction, and smoothness."
          },
          {
            "prompt": "True or false: Integrate vector components and solve constant-acceleration motion, including three-dimensional projectile models.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Integrate vector components and solve constant-acceleration motion, including three-dimensional projectile models."
          },
          {
            "prompt": "True or false: Measure space curves with the speed integral and reparametrize by arc length.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Measure space curves with the speed integral and reparametrize by arc length."
          },
          {
            "prompt": "True or false: Quantify bending through curvature and define the unit tangent, normal, and osculating circle.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Quantify bending through curvature and define the unit tangent, normal, and osculating circle."
          },
          {
            "prompt": "True or false: Decompose acceleration into tangential and normal components to separate change of speed from change of direction.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Decompose acceleration into tangential and normal components to separate change of speed from change of direction."
          },
          {
            "prompt": "True or false: Express velocity and acceleration in moving radial and transverse directions for polar motion.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Express velocity and acceleration in moving radial and transverse directions for polar motion."
          },
          {
            "prompt": "True or false: 6 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "6 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Equating velocity with speed or normal acceleration with total acceleration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "prompt": "True or false: Equating velocity with speed or normal acceleration with total acceleration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "prompt": "True or false: Equating velocity with speed or normal acceleration with total acceleration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "prompt": "True or false: Equating velocity with speed or normal acceleration with total acceleration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use vector quantities first, then take magnitudes or components."
          },
          {
            "prompt": "True or false: Equating velocity with speed or normal acceleration with total acceleration.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Use vector quantities first, then take magnitudes or components."
          }
        ],
        "stepKey": "vector-valued-functions-and-motion-in-spaceExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Describe a space curve by a vector-valued function and compute velocity, speed, tangent direction, and smoothness.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Describe a space curve by a vector-valued function and compute velocity, speed, tangent direction, and smoothness."
          },
          {
            "type": "mc",
            "prompt": "True or false: Integrate vector components and solve constant-acceleration motion, including three-dimensional projectile models.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Integrate vector components and solve constant-acceleration motion, including three-dimensional projectile models."
          },
          {
            "type": "mc",
            "prompt": "True or false: Measure space curves with the speed integral and reparametrize by arc length.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Measure space curves with the speed integral and reparametrize by arc length."
          },
          {
            "type": "mc",
            "prompt": "True or false: Quantify bending through curvature and define the unit tangent, normal, and osculating circle.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Quantify bending through curvature and define the unit tangent, normal, and osculating circle."
          },
          {
            "type": "mc",
            "prompt": "True or false: Decompose acceleration into tangential and normal components to separate change of speed from change of direction.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Decompose acceleration into tangential and normal components to separate change of speed from change of direction."
          },
          {
            "type": "mc",
            "prompt": "True or false: Express velocity and acceleration in moving radial and transverse directions for polar motion.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Express velocity and acceleration in moving radial and transverse directions for polar motion."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Describe a space curve by a vector-valued function and compute velocity, speed, tangent direction, and smoothness.",
          "Integrate vector components and solve constant-acceleration motion, including three-dimensional projectile models.",
          "Measure space curves with the speed integral and reparametrize by arc length.",
          "Quantify bending through curvature and define the unit tangent, normal, and osculating circle.",
          "Decompose acceleration into tangential and normal components to separate change of speed from change of direction.",
          "Express velocity and acceleration in moving radial and transverse directions for polar motion.",
          "6 numbered sections are consolidated in this review."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "vector-valued-functions-and-motion-in-spaceExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "partial-derivatives",
    "lessonSlug": "partial-derivatives-expert-mastery-review",
    "title": "Partial Derivatives Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Partial Derivatives.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Functions of Several Variables.",
      "Explain the central ideas of Limits and Continuity in Higher Dimensions.",
      "Explain the central ideas of Partial Derivatives.",
      "Explain the central ideas of The Chain Rule."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Partial Derivatives**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Functions of Several Variables",
            "text": "Explain the central ideas of Functions of Several Variables."
          },
          {
            "title": "Limits and Continuity in Higher Dimensions",
            "text": "Explain the central ideas of Limits and Continuity in Higher Dimensions."
          },
          {
            "title": "Partial Derivatives",
            "text": "Explain the central ideas of Partial Derivatives."
          },
          {
            "title": "The Chain Rule",
            "text": "Explain the central ideas of The Chain Rule."
          },
          {
            "title": "Directional Derivatives and Gradient Vectors",
            "text": "Explain the central ideas of Directional Derivatives and Gradient Vectors."
          },
          {
            "title": "Tangent Planes and Differentials",
            "text": "Explain the central ideas of Tangent Planes and Differentials."
          },
          {
            "title": "Extreme Values and Saddle Points",
            "text": "Explain the central ideas of Extreme Values and Saddle Points."
          },
          {
            "title": "Lagrange Multipliers",
            "text": "Explain the central ideas of Lagrange Multipliers."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for functions of several variables.",
        "figure": {
          "type": "calculus",
          "kind": "surface"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Functions of Several Variables",
            "Work with functions whose inputs contain several variables, and interpret graphs, level curves, level surfaces, domains, and ranges.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Limits and Continuity in Higher Dimensions",
            "Study limits and continuity in higher dimensions, where infinitely many approach paths must agree.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Partial Derivatives",
            "Differentiate with respect to one variable at a time and interpret partial derivatives as slopes, rates, and cross-sections.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "The Chain Rule",
            "Apply multivariable chain rules along paths and through dependency trees.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Directional Derivatives and Gradient Vectors",
            "Find the rate of change in any direction and use the gradient for steepest ascent and normals to level sets.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Tangent Planes and Differentials",
            "Approximate a surface by its tangent plane and estimate total change with differentials.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Extreme Values and Saddle Points",
            "Classify critical points with the second-derivative test and check boundaries for absolute extrema.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Lagrange Multipliers",
            "Optimize a function under one or more equality constraints using parallel gradients.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Taylor’s Formula for Two Variables",
            "Extend linear approximation to a quadratic Taylor model in two variables.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ],
          [
            "Partial Derivatives with Constrained Variables",
            "Differentiate relations among constrained variables and keep track of which variables are held constant.",
            "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Describe level curves of $f(x,y)=x^2+y^2$.",
        "steps": [
          "Set $f(x,y)=c$.",
          "$x^2+y^2=c$."
        ],
        "answer": "For $c\\ge0$, the level curves are circles of radius $\\sqrt c$."
      },
      {
        "kind": "example",
        "prompt": "Does $(x^2-y^2)/(x^2+y^2)$ have a limit at the origin?",
        "steps": [
          "Along $y=0$ the value approaches 1.",
          "Along $x=0$ the value approaches -1."
        ],
        "answer": "The limit does not exist."
      },
      {
        "kind": "example",
        "prompt": "Find partial derivatives of $f=x^2y+e^{xy}$.",
        "steps": [
          "Hold $y$ fixed for $f_x$.",
          "Hold $x$ fixed for $f_y$."
        ],
        "answer": "$f_x=2xy+ye^{xy}$ and $f_y=x^2+xe^{xy}$."
      },
      {
        "kind": "example",
        "prompt": "If $z=x^2+y^2$, $x=t$, $y=t^2$, find $dz/dt$.",
        "steps": [
          "Use $z_x=2x$, $z_y=2y$, $x'=1$, $y'=2t$.",
          "Substitute $x=t$, $y=t^2$."
        ],
        "answer": "$dz/dt=2t+4t^3$."
      },
      {
        "kind": "example",
        "prompt": "Find the directional derivative of $f=x^2+y^2$ at $(1,2)$ toward $\\langle3,4\\rangle$.",
        "steps": [
          "$\\nabla f(1,2)=\\langle2,4\\rangle$.",
          "Unit direction is $\\langle3/5,4/5\\rangle$.",
          "Take the dot product."
        ],
        "answer": "$D_{\\mathbf u}f=22/5$."
      },
      {
        "kind": "example",
        "prompt": "Find the tangent plane to $z=x^2+y^2$ at $(1,2,5)$.",
        "steps": [
          "$f_x=2x$, $f_y=2y$.",
          "At $(1,2)$ the slopes are 2 and 4."
        ],
        "answer": "$z-5=2(x-1)+4(y-2)$."
      },
      {
        "kind": "example",
        "prompt": "Classify the critical point of $f=x^2-y^2$.",
        "steps": [
          "The only critical point is $(0,0)$.",
          "$D=f_{xx}f_{yy}-f_{xy}^2=2(-2)-0<0$."
        ],
        "answer": "The origin is a saddle point."
      },
      {
        "kind": "example",
        "prompt": "Find extrema of $f=x+y$ subject to $x^2+y^2=1$.",
        "steps": [
          "Solve $\\langle1,1\\rangle=\\lambda\\langle2x,2y\\rangle$.",
          "Thus $x=y$ and $2x^2=1$."
        ],
        "answer": "Maximum $\\sqrt2$ and minimum $-\\sqrt2$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Treating a multivariable limit as if one path were enough.",
            "right": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          },
          {
            "wrong": "Treating a multivariable limit as if one path were enough.",
            "right": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          },
          {
            "wrong": "Treating a multivariable limit as if one path were enough.",
            "right": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          },
          {
            "wrong": "Treating a multivariable limit as if one path were enough.",
            "right": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          },
          {
            "wrong": "Treating a multivariable limit as if one path were enough.",
            "right": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          },
          {
            "wrong": "Treating a multivariable limit as if one path were enough.",
            "right": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Work with functions whose inputs contain several variables, and interpret graphs, level curves, level surfaces, domains, and ranges.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Work with functions whose inputs contain several variables, and interpret graphs, level curves, level surfaces, domains, and ranges."
          },
          {
            "prompt": "True or false: Study limits and continuity in higher dimensions, where infinitely many approach paths must agree.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Study limits and continuity in higher dimensions, where infinitely many approach paths must agree."
          },
          {
            "prompt": "True or false: Differentiate with respect to one variable at a time and interpret partial derivatives as slopes, rates, and cross-sections.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate with respect to one variable at a time and interpret partial derivatives as slopes, rates, and cross-sections."
          },
          {
            "prompt": "True or false: Apply multivariable chain rules along paths and through dependency trees.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Apply multivariable chain rules along paths and through dependency trees."
          },
          {
            "prompt": "True or false: Find the rate of change in any direction and use the gradient for steepest ascent and normals to level sets.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Find the rate of change in any direction and use the gradient for steepest ascent and normals to level sets."
          },
          {
            "prompt": "True or false: Approximate a surface by its tangent plane and estimate total change with differentials.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Approximate a surface by its tangent plane and estimate total change with differentials."
          },
          {
            "prompt": "True or false: Classify critical points with the second-derivative test and check boundaries for absolute extrema.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Classify critical points with the second-derivative test and check boundaries for absolute extrema."
          },
          {
            "prompt": "True or false: Optimize a function under one or more equality constraints using parallel gradients.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Optimize a function under one or more equality constraints using parallel gradients."
          },
          {
            "prompt": "True or false: Extend linear approximation to a quadratic Taylor model in two variables.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Extend linear approximation to a quadratic Taylor model in two variables."
          },
          {
            "prompt": "True or false: Differentiate relations among constrained variables and keep track of which variables are held constant.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Differentiate relations among constrained variables and keep track of which variables are held constant."
          },
          {
            "prompt": "True or false: 10 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "10 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Treating a multivariable limit as if one path were enough.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "For existence, justify all paths; for nonexistence, two conflicting paths suffice."
          }
        ],
        "stepKey": "partial-derivativesExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Work with functions whose inputs contain several variables, and interpret graphs, level curves, level surfaces, domains, and ranges.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Work with functions whose inputs contain several variables, and interpret graphs, level curves, level surfaces, domains, and ranges."
          },
          {
            "type": "mc",
            "prompt": "True or false: Study limits and continuity in higher dimensions, where infinitely many approach paths must agree.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Study limits and continuity in higher dimensions, where infinitely many approach paths must agree."
          },
          {
            "type": "mc",
            "prompt": "True or false: Differentiate with respect to one variable at a time and interpret partial derivatives as slopes, rates, and cross-sections.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Differentiate with respect to one variable at a time and interpret partial derivatives as slopes, rates, and cross-sections."
          },
          {
            "type": "mc",
            "prompt": "True or false: Apply multivariable chain rules along paths and through dependency trees.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Apply multivariable chain rules along paths and through dependency trees."
          },
          {
            "type": "mc",
            "prompt": "True or false: Find the rate of change in any direction and use the gradient for steepest ascent and normals to level sets.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Find the rate of change in any direction and use the gradient for steepest ascent and normals to level sets."
          },
          {
            "type": "mc",
            "prompt": "True or false: Approximate a surface by its tangent plane and estimate total change with differentials.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Approximate a surface by its tangent plane and estimate total change with differentials."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Work with functions whose inputs contain several variables, and interpret graphs, level curves, level surfaces, domains, and ranges.",
          "Study limits and continuity in higher dimensions, where infinitely many approach paths must agree.",
          "Differentiate with respect to one variable at a time and interpret partial derivatives as slopes, rates, and cross-sections.",
          "Apply multivariable chain rules along paths and through dependency trees.",
          "Find the rate of change in any direction and use the gradient for steepest ascent and normals to level sets.",
          "Approximate a surface by its tangent plane and estimate total change with differentials.",
          "Classify critical points with the second-derivative test and check boundaries for absolute extrema.",
          "Optimize a function under one or more equality constraints using parallel gradients."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "partial-derivativesExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "multiple-integrals",
    "lessonSlug": "multiple-integrals-expert-mastery-review",
    "title": "Multiple Integrals Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Multiple Integrals.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Double and Iterated Integrals over Rectangles.",
      "Explain the central ideas of Double Integrals over General Regions.",
      "Explain the central ideas of Area by Double Integration.",
      "Explain the central ideas of Double Integrals in Polar Form."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Multiple Integrals**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Double and Iterated Integrals over Rectangles",
            "text": "Explain the central ideas of Double and Iterated Integrals over Rectangles."
          },
          {
            "title": "Double Integrals over General Regions",
            "text": "Explain the central ideas of Double Integrals over General Regions."
          },
          {
            "title": "Area by Double Integration",
            "text": "Explain the central ideas of Area by Double Integration."
          },
          {
            "title": "Double Integrals in Polar Form",
            "text": "Explain the central ideas of Double Integrals in Polar Form."
          },
          {
            "title": "Triple Integrals in Rectangular Coordinates",
            "text": "Explain the central ideas of Triple Integrals in Rectangular Coordinates."
          },
          {
            "title": "Moments and Centers of Mass",
            "text": "Explain the central ideas of Moments and Centers of Mass."
          },
          {
            "title": "Triple Integrals in Cylindrical and Spherical Coordinates",
            "text": "Explain the central ideas of Triple Integrals in Cylindrical and Spherical Coordinates."
          },
          {
            "title": "Substitutions in Multiple Integrals",
            "text": "Explain the central ideas of Substitutions in Multiple Integrals."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for double and iterated integrals over rectangles.",
        "figure": {
          "type": "calculus",
          "kind": "double-integral"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Double and Iterated Integrals over Rectangles",
            "Define double integrals over rectangles, evaluate them as iterated integrals, and apply Fubini’s Theorem.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Double Integrals over General Regions",
            "Set variable limits for general planar regions and choose the order of integration strategically.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Area by Double Integration",
            "Recover planar area by integrating the constant function one over a region.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Double Integrals in Polar Form",
            "Transform double integrals to polar coordinates and include the Jacobian factor r.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Triple Integrals in Rectangular Coordinates",
            "Accumulate over three-dimensional regions with triple integrals and carefully describe the bounds.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Moments and Centers of Mass",
            "Compute mass, moments, centers of mass, and moments of inertia of two- and three-dimensional bodies.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Triple Integrals in Cylindrical and Spherical Coordinates",
            "Choose cylindrical or spherical coordinates to exploit symmetry and include the correct volume factor.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Substitutions in Multiple Integrals",
            "Transform multiple integrals with a coordinate substitution and the absolute Jacobian determinant.",
            "Sketch cross-sections and include the coordinate scale factor."
          ],
          [
            "Multiple Integrals Chapter Review",
            "8 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\int_0^1\\int_0^2(x+y)dy\\,dx$.",
        "steps": [
          "Integrate with respect to $y$ first.",
          "Then integrate the resulting function of $x$."
        ],
        "answer": "The value is $3$."
      },
      {
        "kind": "example",
        "prompt": "Reverse the order for $0\\le x\\le1$, $x\\le y\\le1$.",
        "steps": [
          "Describe the triangular region.",
          "For fixed $y$, $0\\le x\\le y$ and $0\\le y\\le1$."
        ],
        "answer": "The reversed integral uses $\\int_0^1\\int_0^y(\\cdots)dx\\,dy$."
      },
      {
        "kind": "example",
        "prompt": "Find the area of $0\\le y\\le x$, $0\\le x\\le2$.",
        "steps": [
          "Integrate 1 over the region.",
          "$A=\\int_0^2\\int_0^x1\\,dy\\,dx$."
        ],
        "answer": "$A=2$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\iint_R(x^2+y^2)dA$ over the unit disk.",
        "steps": [
          "Use polar coordinates: integrand $r^2$ and $dA=rdrd\\theta$.",
          "Integrate $0\\le r\\le1$, $0\\le\\theta\\le2\\pi$."
        ],
        "answer": "The value is $\\pi/2$."
      },
      {
        "kind": "example",
        "prompt": "Find the volume of the unit cube by a triple integral.",
        "steps": [
          "Integrate 1 over $0\\le x,y,z\\le1$."
        ],
        "answer": "The volume is $1$."
      },
      {
        "kind": "example",
        "prompt": "Locate the center of mass of a uniform solid ball centered at the origin.",
        "steps": [
          "The density and region are symmetric across all coordinate planes.",
          "All first moments vanish."
        ],
        "answer": "The center of mass is $(0,0,0)$."
      },
      {
        "kind": "example",
        "prompt": "Set up the volume of a sphere of radius $a$ in spherical coordinates.",
        "steps": [
          "Use $0\\le\\rho\\le a$, $0\\le\\phi\\le\\pi$, $0\\le\\theta\\le2\\pi$.",
          "Include $\\rho^2\\sin\\phi$."
        ],
        "answer": "$V=\\int_0^{2\\pi}\\int_0^\\pi\\int_0^a\\rho^2\\sin\\phi\\,d\\rho d\\phi d\\theta=4\\pi a^3/3$."
      },
      {
        "kind": "example",
        "prompt": "Use $u=x+y$, $v=x-y$. Find the Jacobian $\\partial(x,y)/\\partial(u,v)$.",
        "steps": [
          "Solve $x=(u+v)/2$, $y=(u-v)/2$.",
          "Compute the determinant."
        ],
        "answer": "The absolute Jacobian is $1/2$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Writing bounds before understanding the region or omitting the Jacobian.",
            "right": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "wrong": "Writing bounds before understanding the region or omitting the Jacobian.",
            "right": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "wrong": "Writing bounds before understanding the region or omitting the Jacobian.",
            "right": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "wrong": "Writing bounds before understanding the region or omitting the Jacobian.",
            "right": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "wrong": "Writing bounds before understanding the region or omitting the Jacobian.",
            "right": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "wrong": "Writing bounds before understanding the region or omitting the Jacobian.",
            "right": "Sketch cross-sections and include the coordinate scale factor."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Define double integrals over rectangles, evaluate them as iterated integrals, and apply Fubini’s Theorem.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Define double integrals over rectangles, evaluate them as iterated integrals, and apply Fubini’s Theorem."
          },
          {
            "prompt": "True or false: Set variable limits for general planar regions and choose the order of integration strategically.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Set variable limits for general planar regions and choose the order of integration strategically."
          },
          {
            "prompt": "True or false: Recover planar area by integrating the constant function one over a region.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Recover planar area by integrating the constant function one over a region."
          },
          {
            "prompt": "True or false: Transform double integrals to polar coordinates and include the Jacobian factor r.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Transform double integrals to polar coordinates and include the Jacobian factor r."
          },
          {
            "prompt": "True or false: Accumulate over three-dimensional regions with triple integrals and carefully describe the bounds.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Accumulate over three-dimensional regions with triple integrals and carefully describe the bounds."
          },
          {
            "prompt": "True or false: Compute mass, moments, centers of mass, and moments of inertia of two- and three-dimensional bodies.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Compute mass, moments, centers of mass, and moments of inertia of two- and three-dimensional bodies."
          },
          {
            "prompt": "True or false: Choose cylindrical or spherical coordinates to exploit symmetry and include the correct volume factor.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Choose cylindrical or spherical coordinates to exploit symmetry and include the correct volume factor."
          },
          {
            "prompt": "True or false: Transform multiple integrals with a coordinate substitution and the absolute Jacobian determinant.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Transform multiple integrals with a coordinate substitution and the absolute Jacobian determinant."
          },
          {
            "prompt": "True or false: 8 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "8 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Writing bounds before understanding the region or omitting the Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "prompt": "True or false: Writing bounds before understanding the region or omitting the Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch cross-sections and include the coordinate scale factor."
          },
          {
            "prompt": "True or false: Writing bounds before understanding the region or omitting the Jacobian.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Sketch cross-sections and include the coordinate scale factor."
          }
        ],
        "stepKey": "multiple-integralsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Define double integrals over rectangles, evaluate them as iterated integrals, and apply Fubini’s Theorem.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Define double integrals over rectangles, evaluate them as iterated integrals, and apply Fubini’s Theorem."
          },
          {
            "type": "mc",
            "prompt": "True or false: Set variable limits for general planar regions and choose the order of integration strategically.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Set variable limits for general planar regions and choose the order of integration strategically."
          },
          {
            "type": "mc",
            "prompt": "True or false: Recover planar area by integrating the constant function one over a region.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Recover planar area by integrating the constant function one over a region."
          },
          {
            "type": "mc",
            "prompt": "True or false: Transform double integrals to polar coordinates and include the Jacobian factor r.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Transform double integrals to polar coordinates and include the Jacobian factor r."
          },
          {
            "type": "mc",
            "prompt": "True or false: Accumulate over three-dimensional regions with triple integrals and carefully describe the bounds.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Accumulate over three-dimensional regions with triple integrals and carefully describe the bounds."
          },
          {
            "type": "mc",
            "prompt": "True or false: Compute mass, moments, centers of mass, and moments of inertia of two- and three-dimensional bodies.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Compute mass, moments, centers of mass, and moments of inertia of two- and three-dimensional bodies."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Define double integrals over rectangles, evaluate them as iterated integrals, and apply Fubini’s Theorem.",
          "Set variable limits for general planar regions and choose the order of integration strategically.",
          "Recover planar area by integrating the constant function one over a region.",
          "Transform double integrals to polar coordinates and include the Jacobian factor r.",
          "Accumulate over three-dimensional regions with triple integrals and carefully describe the bounds.",
          "Compute mass, moments, centers of mass, and moments of inertia of two- and three-dimensional bodies.",
          "Choose cylindrical or spherical coordinates to exploit symmetry and include the correct volume factor.",
          "Transform multiple integrals with a coordinate substitution and the absolute Jacobian determinant."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "multiple-integralsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "integrals-and-vector-fields",
    "lessonSlug": "integrals-and-vector-fields-expert-mastery-review",
    "title": "Integrals and Vector Fields Expert Mastery Review",
    "objectives": [
      "Connect the main definitions, formulas and representations across Integrals and Vector Fields.",
      "Solve mixed problems progressing from foundation to expert level.",
      "Select and justify efficient mathematical methods.",
      "Diagnose common errors and verify conclusions independently.",
      "Explain the central ideas of Line Integrals.",
      "Explain the central ideas of Vector Fields and Line Integrals: Work, Circulation, and Flux.",
      "Explain the central ideas of Path Independence, Conservative Fields, and Potential Functions.",
      "Explain the central ideas of Green’s Theorem in the Plane."
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "This **Expert Mastery Review** consolidates every lesson in **Integrals and Vector Fields**. It is designed to move from secure foundations through multi-step applications to proof, modelling and error analysis.",
          "Attempt each worked example before reading the solution. Then complete the mixed practice and mastery assessment. Use the skills map to identify exactly which lesson to revisit."
        ]
      },
      {
        "kind": "cards",
        "heading": "Chapter skills map",
        "columns": 3,
        "items": [
          {
            "title": "Line Integrals",
            "text": "Explain the central ideas of Line Integrals."
          },
          {
            "title": "Vector Fields and Line Integrals: Work, Circulation, and Flux",
            "text": "Explain the central ideas of Vector Fields and Line Integrals: Work, Circulation, and Flux."
          },
          {
            "title": "Path Independence, Conservative Fields, and Potential Functions",
            "text": "Explain the central ideas of Path Independence, Conservative Fields, and Potential Functions."
          },
          {
            "title": "Green’s Theorem in the Plane",
            "text": "Explain the central ideas of Green’s Theorem in the Plane."
          },
          {
            "title": "Surfaces and Area",
            "text": "Explain the central ideas of Surfaces and Area."
          },
          {
            "title": "Surface Integrals",
            "text": "Explain the central ideas of Surface Integrals."
          },
          {
            "title": "Stokes’ Theorem",
            "text": "Explain the central ideas of Stokes’ Theorem."
          },
          {
            "title": "The Divergence Theorem and a Unified Theory",
            "text": "Explain the central ideas of The Divergence Theorem and a Unified Theory."
          }
        ]
      },
      {
        "kind": "figure",
        "caption": "A responsive conceptual diagram for line integrals.",
        "figure": {
          "type": "calculus",
          "kind": "vector-field"
        }
      },
      {
        "kind": "table",
        "heading": "Concept, method and verification map",
        "headers": [
          "Lesson",
          "Core idea",
          "Expert accuracy check"
        ],
        "rows": [
          [
            "Line Integrals",
            "Integrate scalar fields along curves with respect to arc length and interpret line mass or accumulated density.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Vector Fields and Line Integrals: Work, Circulation, and Flux",
            "Integrate vector fields along oriented curves to compute work, circulation, and flux.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Path Independence, Conservative Fields, and Potential Functions",
            "Recognize conservative fields, find potentials, and use path independence and the fundamental theorem for line integrals.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Green’s Theorem in the Plane",
            "Convert circulation around a plane curve to a double integral of scalar curl, including area and flux forms.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Surfaces and Area",
            "Parametrize surfaces and calculate area from the cross product of tangent vectors.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Surface Integrals",
            "Integrate scalar or vector fields over oriented surfaces and compute flux.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Stokes’ Theorem",
            "Relate circulation around a space curve to the surface integral of curl.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "The Divergence Theorem and a Unified Theory",
            "Relate outward flux through a closed surface to the volume integral of divergence and see the major integral theorems as one pattern.",
            "Choose and state compatible curve and normal orientations before applying a theorem."
          ],
          [
            "Integrals and Vector Fields Chapter Review",
            "8 numbered sections are consolidated in this review.",
            "State the method, keep notation consistent and verify the final result."
          ]
        ]
      },
      {
        "kind": "theory",
        "heading": "Expert chapter strategy",
        "paragraphs": [
          "Strong mathematical work connects definitions, representations, formulas and verification. Do not treat the lessons as isolated procedures: identify the structure of the problem, select a justified method and explain why its assumptions apply.",
          "When several methods are available, compare them for efficiency and reliability. Keep exact values until the end, preserve domains and orientation, and use an independent check such as substitution, graphing, dimensional analysis, symmetry, differentiation or integration."
        ],
        "list": [
          "Translate the problem into mathematical notation.",
          "State the theorem, definition or model and its conditions.",
          "Carry out the method with clear intermediate steps.",
          "Interpret the result and verify it independently."
        ]
      },
      {
        "kind": "example",
        "prompt": "Compute $\\int_C x\\,ds$ along $\\mathbf r(t)=\\langle t,t\\rangle$, $0\\le t\\le1$.",
        "steps": [
          "$x=t$ and $\\|\\mathbf r'\\|=\\sqrt2$.",
          "Integrate $t\\sqrt2$."
        ],
        "answer": "The value is $\\sqrt2/2$."
      },
      {
        "kind": "example",
        "prompt": "Compute work of $\\mathbf F=\\langle y,x\\rangle$ from $(0,0)$ to $(1,1)$ along $\\mathbf r(t)=\\langle t,t\\rangle$.",
        "steps": [
          "$\\mathbf F(\\mathbf r)=\\langle t,t\\rangle$ and $\\mathbf r'=\\langle1,1\\rangle$.",
          "Integrate the dot product $2t$ from 0 to 1."
        ],
        "answer": "The work is $1$."
      },
      {
        "kind": "example",
        "prompt": "Show $\\mathbf F=\\langle2x,2y\\rangle$ is conservative and compute work from $(0,0)$ to $(1,2)$.",
        "steps": [
          "A potential is $\\phi=x^2+y^2$.",
          "Use endpoint potential difference."
        ],
        "answer": "Work $=\\phi(1,2)-\\phi(0,0)=5$."
      },
      {
        "kind": "example",
        "prompt": "Use Green’s Theorem for $P=-y$, $Q=x$ around the unit circle.",
        "steps": [
          "Scalar curl is $Q_x-P_y=1-(-1)=2$.",
          "Integrate 2 over the unit disk."
        ],
        "answer": "The circulation is $2\\pi$."
      },
      {
        "kind": "example",
        "prompt": "Parametrize the plane $z=x+y$ above the unit square.",
        "steps": [
          "Take $x=u$, $y=v$.",
          "Then $z=u+v$."
        ],
        "answer": "$\\mathbf r(u,v)=\\langle u,v,u+v\\rangle$, $0\\le u,v\\le1$."
      },
      {
        "kind": "example",
        "prompt": "Find flux of $\\mathbf F=\\langle0,0,1\\rangle$ upward through the unit disk in the xy-plane.",
        "steps": [
          "The upward normal is $\\mathbf k$.",
          "$\\mathbf F\\cdot\\mathbf n=1$.",
          "Integrate over disk area."
        ],
        "answer": "The flux is $\\pi$."
      },
      {
        "kind": "example",
        "prompt": "State how to compute circulation around the boundary of a surface.",
        "steps": [
          "Choose a compatible orientation.",
          "Integrate $(\\nabla\\times\\mathbf F)\\cdot\\mathbf n$ over the surface."
        ],
        "answer": "Stokes’ Theorem converts the boundary line integral to a surface integral of curl."
      },
      {
        "kind": "example",
        "prompt": "Find outward flux of $\\mathbf F=\\langle x,y,z\\rangle$ through the unit sphere.",
        "steps": [
          "Divergence is $3$.",
          "Integrate 3 over the unit ball of volume $4\\pi/3$."
        ],
        "answer": "The flux is $4\\pi$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Ignoring orientation in line or surface integrals.",
            "right": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "wrong": "Ignoring orientation in line or surface integrals.",
            "right": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "wrong": "Ignoring orientation in line or surface integrals.",
            "right": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "wrong": "Ignoring orientation in line or surface integrals.",
            "right": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "wrong": "Ignoring orientation in line or surface integrals.",
            "right": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "wrong": "Ignoring orientation in line or surface integrals.",
            "right": "Choose and state compatible curve and normal orientations before applying a theorem."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Mixed chapter practice",
        "questions": [
          {
            "prompt": "True or false: Integrate scalar fields along curves with respect to arc length and interpret line mass or accumulated density.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Integrate scalar fields along curves with respect to arc length and interpret line mass or accumulated density."
          },
          {
            "prompt": "True or false: Integrate vector fields along oriented curves to compute work, circulation, and flux.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Integrate vector fields along oriented curves to compute work, circulation, and flux."
          },
          {
            "prompt": "True or false: Recognize conservative fields, find potentials, and use path independence and the fundamental theorem for line integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Recognize conservative fields, find potentials, and use path independence and the fundamental theorem for line integrals."
          },
          {
            "prompt": "True or false: Convert circulation around a plane curve to a double integral of scalar curl, including area and flux forms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Convert circulation around a plane curve to a double integral of scalar curl, including area and flux forms."
          },
          {
            "prompt": "True or false: Parametrize surfaces and calculate area from the cross product of tangent vectors.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Parametrize surfaces and calculate area from the cross product of tangent vectors."
          },
          {
            "prompt": "True or false: Integrate scalar or vector fields over oriented surfaces and compute flux.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Integrate scalar or vector fields over oriented surfaces and compute flux."
          },
          {
            "prompt": "True or false: Relate circulation around a space curve to the surface integral of curl.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Relate circulation around a space curve to the surface integral of curl."
          },
          {
            "prompt": "True or false: Relate outward flux through a closed surface to the volume integral of divergence and see the major integral theorems as one pattern.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "Relate outward flux through a closed surface to the volume integral of divergence and see the major integral theorems as one pattern."
          },
          {
            "prompt": "True or false: 8 numbered sections are consolidated in this review.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "explanation": "8 numbered sections are consolidated in this review."
          },
          {
            "prompt": "True or false: Ignoring orientation in line or surface integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "prompt": "True or false: Ignoring orientation in line or surface integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Choose and state compatible curve and normal orientations before applying a theorem."
          },
          {
            "prompt": "True or false: Ignoring orientation in line or surface integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 1,
            "explanation": "Choose and state compatible curve and normal orientations before applying a theorem."
          }
        ],
        "stepKey": "integrals-and-vector-fieldsExpertReviewPractice"
      },
      {
        "kind": "gradedQuiz",
        "heading": "Expert chapter mastery assessment",
        "questions": [
          {
            "type": "mc",
            "prompt": "True or false: Integrate scalar fields along curves with respect to arc length and interpret line mass or accumulated density.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Integrate scalar fields along curves with respect to arc length and interpret line mass or accumulated density."
          },
          {
            "type": "mc",
            "prompt": "True or false: Integrate vector fields along oriented curves to compute work, circulation, and flux.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Integrate vector fields along oriented curves to compute work, circulation, and flux."
          },
          {
            "type": "mc",
            "prompt": "True or false: Recognize conservative fields, find potentials, and use path independence and the fundamental theorem for line integrals.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Recognize conservative fields, find potentials, and use path independence and the fundamental theorem for line integrals."
          },
          {
            "type": "mc",
            "prompt": "True or false: Convert circulation around a plane curve to a double integral of scalar curl, including area and flux forms.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Convert circulation around a plane curve to a double integral of scalar curl, including area and flux forms."
          },
          {
            "type": "mc",
            "prompt": "True or false: Parametrize surfaces and calculate area from the cross product of tangent vectors.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Parametrize surfaces and calculate area from the cross product of tangent vectors."
          },
          {
            "type": "mc",
            "prompt": "True or false: Integrate scalar or vector fields over oriented surfaces and compute flux.",
            "options": [
              "True",
              "False"
            ],
            "answer": 0,
            "marks": 1,
            "explanation": "Integrate scalar or vector fields over oriented surfaces and compute flux."
          }
        ],
        "passMark": 4
      },
      {
        "kind": "summary",
        "points": [
          "Integrate scalar fields along curves with respect to arc length and interpret line mass or accumulated density.",
          "Integrate vector fields along oriented curves to compute work, circulation, and flux.",
          "Recognize conservative fields, find potentials, and use path independence and the fundamental theorem for line integrals.",
          "Convert circulation around a plane curve to a double integral of scalar curl, including area and flux forms.",
          "Parametrize surfaces and calculate area from the cross product of tangent vectors.",
          "Integrate scalar or vector fields over oriented surfaces and compute flux.",
          "Relate circulation around a space curve to the surface integral of curl.",
          "Relate outward flux through a closed surface to the volume integral of divergence and see the major integral theorems as one pattern."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "integrals-and-vector-fieldsExpertReviewPractice",
            "label": "Complete the mixed expert chapter practice"
          }
        ],
        "requireQuizPass": true
      }
    ]
  }
];
