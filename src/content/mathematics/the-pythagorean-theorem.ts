import type { LessonContent } from "@/lib/lesson-content-types";

export const thePythagoreanTheorem: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "triangles-and-congruence",
  "lessonSlug": "the-pythagorean-theorem",
  "title": "The Pythagorean Theorem",
  "objectives": [
    "Identify the hypotenuse of a right-angled triangle.",
    "Use $a^2+b^2=c^2$ to find a missing side.",
    "Decide whether three side lengths can form a right triangle.",
    "Apply Pythagoras in real-world distance problems.",
    "Avoid using the theorem on non-right triangles."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "The Pythagorean theorem is one of the most famous results in mathematics. It connects the side lengths of a right-angled triangle and lets us find distances we cannot measure directly.",
        "It works only for right triangles. The longest side, opposite the right angle, is called the hypotenuse."
      ]
    },
    {
      "kind": "formula",
      "latex": "a^2+b^2=c^2",
      "caption": "Pythagorean theorem, where $c$ is the hypotenuse"
    },
    {
      "kind": "theory",
      "heading": "Understanding the formula",
      "paragraphs": [
        "The two shorter sides are often called the legs. Squaring each leg length and adding the squares gives the square of the hypotenuse.",
        "The theorem can be rearranged. If you know the hypotenuse and one leg, subtract the known leg square from the hypotenuse square to find the missing leg square."
      ]
    },
    {
      "kind": "callout",
      "variant": "tip",
      "title": "First find the hypotenuse",
      "body": "Before substituting numbers, mark the side opposite the right angle. That side must be $c$ in $a^2+b^2=c^2$."
    },
    {
      "kind": "example",
      "prompt": "A right triangle has legs 6 cm and 8 cm. Find the hypotenuse.",
      "steps": [
        "Use $a^2+b^2=c^2$.",
        "$6^2+8^2=c^2$.",
        "$36+64=100$, so $c^2=100$.",
        "Take the square root: $c=10$."
      ],
      "answer": "The hypotenuse is 10 cm."
    },
    {
      "kind": "example",
      "prompt": "A ladder is 13 m long and reaches a wall 12 m high. How far is the foot of the ladder from the wall?",
      "steps": [
        "The ladder is the hypotenuse because it is opposite the right angle between wall and ground.",
        "Let the distance from the wall be $x$.",
        "$x^2+12^2=13^2$.",
        "$x^2+144=169$, so $x^2=25$.",
        "$x=5$."
      ],
      "answer": "The foot of the ladder is 5 m from the wall."
    },
    {
      "kind": "example",
      "prompt": "Do side lengths 9, 12 and 15 form a right triangle?",
      "steps": [
        "The longest side is 15, so check whether $9^2+12^2=15^2$.",
        "$81+144=225$.",
        "$15^2=225$.",
        "The two sides are equal."
      ],
      "answer": "Yes. The triangle is right-angled."
    },
    {
      "kind": "realWorld",
      "heading": "Where this is used",
      "items": [
        {
          "area": "Construction",
          "text": "Builders check corners using the 3-4-5 triangle rule, a simple Pythagorean triple."
        },
        {
          "area": "Screens and rooms",
          "text": "A diagonal measurement across a rectangle uses Pythagoras."
        },
        {
          "area": "Maps",
          "text": "Straight-line distance between grid points is found using a right triangle."
        }
      ]
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Using the longest side as a leg.",
          "right": "The longest side is the hypotenuse and must be $c$."
        },
        {
          "wrong": "Forgetting the square root at the end.",
          "right": "After finding $c^2=100$, the side is $c=10$, not 100."
        },
        {
          "wrong": "Using Pythagoras on any triangle.",
          "right": "It applies only to right-angled triangles."
        }
      ]
    },
    {
      "kind": "practice",
      "heading": "Practice questions",
      "questions": [
        {
          "prompt": "A right triangle has legs 5 and 12. Find the hypotenuse.",
          "options": [
            "13",
            "17",
            "60",
            "7"
          ],
          "answer": 0,
          "explanation": "$5^2+12^2=25+144=169$, so $c=13$."
        },
        {
          "prompt": "A right triangle has hypotenuse 10 and one leg 6. Find the other leg.",
          "options": [
            "4",
            "8",
            "12",
            "16"
          ],
          "answer": 1,
          "explanation": "$x^2+36=100$, so $x^2=64$ and $x=8$."
        },
        {
          "prompt": "Which set is a Pythagorean triple?",
          "options": [
            "2, 3, 4",
            "5, 6, 7",
            "8, 15, 17",
            "7, 8, 10"
          ],
          "answer": 2,
          "explanation": "$8^2+15^2=64+225=289=17^2$."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Pythagoras works only for:",
          "options": [
            "equilateral triangles",
            "right-angled triangles",
            "isosceles triangles",
            "all polygons"
          ],
          "answer": 1,
          "explanation": "The theorem relates the sides of a right triangle."
        },
        {
          "prompt": "In $a^2+b^2=c^2$, $c$ is:",
          "options": [
            "any side",
            "the shortest side",
            "the hypotenuse",
            "an angle"
          ],
          "answer": 2,
          "explanation": "$c$ is the hypotenuse."
        },
        {
          "prompt": "If $a=7$ and $b=24$, then $c$ is:",
          "options": [
            "25",
            "31",
            "17",
            "49"
          ],
          "answer": 0,
          "explanation": "$49+576=625$, so $c=25$."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "The hypotenuse is opposite the right angle.",
        "For right triangles, $a^2+b^2=c^2$.",
        "To find a missing leg, subtract squares before taking the square root.",
        "Pythagorean triples are whole-number side sets such as 3-4-5 and 5-12-13."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "identify-the-hypotenuse",
          "label": "Identify the hypotenuse"
        },
        {
          "key": "find-a-missing-hypotenuse",
          "label": "Find a missing hypotenuse"
        },
        {
          "key": "find-a-missing-leg",
          "label": "Find a missing leg"
        },
        {
          "key": "use-pythagorean-triples",
          "label": "Use Pythagorean triples"
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
