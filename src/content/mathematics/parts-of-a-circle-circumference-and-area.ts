import type { LessonContent } from "@/lib/lesson-content-types";

export const partsOfACircleCircumferenceAndArea: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "circles",
  "lessonSlug": "parts-of-a-circle-circumference-and-area",
  "title": "Parts of a Circle, Circumference and Area",
  "objectives": [
    "Understand parts of a circle, circumference and area definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops parts of a circle, circumference and area beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A circle is the set of all points in a plane at a fixed distance from a fixed centre. That fixed distance is the radius."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Radius: line segment from centre to circle.",
        "Diameter: line through centre joining two points on circle; $d=2r$.",
        "Chord: line segment joining two points on circle.",
        "Arc: part of the circumference.",
        "Sector: region bounded by two radii and an arc.",
        "Tangent: line touching the circle at exactly one point."
      ]
    },
    {
      "kind": "formula",
      "latex": "C=2\\pi r=\\pi d",
      "caption": "Circumference"
    },
    {
      "kind": "formula",
      "latex": "A=\\pi r^2",
      "caption": "Area of circle"
    },
    {
      "kind": "formula",
      "latex": "\\text{arc length}=\\frac{\\theta}{360^\\circ}\\times2\\pi r",
      "caption": "Arc length"
    },
    {
      "kind": "formula",
      "latex": "\\text{sector area}=\\frac{\\theta}{360^\\circ}\\times\\pi r^2",
      "caption": "Sector area"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Circumference is the distance around a circle. It is a perimeter, so it uses length units.",
        "Area measures the surface covered by the circle, so it uses square units.",
        "The number $\\pi$ is the constant ratio of circumference to diameter for every circle."
      ],
      "list": [
        "For sectors and arcs, the fraction of the circle is controlled by the central angle divided by $360^\\circ$."
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
      "prompt": "Find area of diameter 10 m.",
      "steps": [
        "Radius is half diameter: $r=5$.",
        "Use $A=\\pi r^2$.",
        "$A=25\\pi$."
      ],
      "answer": "$25\\pi$ m², about 78.5 m²."
    },
    {
      "kind": "example",
      "prompt": "Find arc length for radius 12 cm and central angle $90^\\circ$.",
      "steps": [
        "Fraction of circle is $90/360=1/4$.",
        "Circumference is $2\\pi(12)=24\\pi$.",
        "Arc length is $1/4\\times24\\pi=6\\pi$."
      ],
      "answer": "$6\\pi$ cm."
    },
    {
      "kind": "example",
      "prompt": "Find sector area with radius 6 cm and angle $120^\\circ$.",
      "steps": [
        "Fraction is $120/360=1/3$.",
        "Circle area is $36\\pi$.",
        "Sector area is $12\\pi$."
      ],
      "answer": "$12\\pi$ cm²."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Diameter is:",
          "options": [
            "half radius",
            "twice radius",
            "same as radius",
            "arc"
          ],
          "answer": 1,
          "explanation": "$d=2r$."
        },
        {
          "prompt": "Circle area formula:",
          "options": [
            "$2πr$",
            "$πr^2$",
            "$πd$",
            "$bh$"
          ],
          "answer": 1,
          "explanation": "Area is $πr^2$."
        },
        {
          "prompt": "Circumference formula:",
          "options": [
            "$2πr$",
            "$πr^2$",
            "$1/2bh$",
            "$l×w$"
          ],
          "answer": 0,
          "explanation": "Circumference is distance around."
        },
        {
          "prompt": "Radius 3, circumference:",
          "options": [
            "$3π$",
            "$6π$",
            "$9π$",
            "$12π$"
          ],
          "answer": 1,
          "explanation": "$2πr=6π$."
        },
        {
          "prompt": "Radius 4, area:",
          "options": [
            "$8π$",
            "$16π$",
            "$4π$",
            "$32π$"
          ],
          "answer": 1,
          "explanation": "$πr^2=16π$."
        },
        {
          "prompt": "A tangent touches circle at:",
          "options": [
            "two points",
            "one point",
            "centre only",
            "no points"
          ],
          "answer": 1,
          "explanation": "Tangent touches once."
        },
        {
          "prompt": "A chord through centre is:",
          "options": [
            "radius",
            "diameter",
            "arc",
            "sector"
          ],
          "answer": 1,
          "explanation": "It is a diameter."
        },
        {
          "prompt": "90° sector is what fraction of circle?",
          "options": [
            "1/2",
            "1/3",
            "1/4",
            "1/6"
          ],
          "answer": 2,
          "explanation": "$90/360=1/4$."
        },
        {
          "prompt": "Arc is:",
          "options": [
            "part of circumference",
            "area inside",
            "line through centre",
            "radius"
          ],
          "answer": 0,
          "explanation": "An arc is curved boundary part."
        },
        {
          "prompt": "Area units are:",
          "options": [
            "cm",
            "cm²",
            "cm³",
            "degrees"
          ],
          "answer": 1,
          "explanation": "Area uses square units."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "If diameter is 14, radius is:",
          "options": [
            "7",
            "14",
            "28",
            "49"
          ],
          "answer": 0,
          "explanation": "Radius is half diameter."
        },
        {
          "prompt": "Circumference with diameter 20:",
          "options": [
            "$10π$",
            "$20π$",
            "$40π$",
            "$400π$"
          ],
          "answer": 1,
          "explanation": "$C=πd=20π$."
        },
        {
          "prompt": "Area radius 10:",
          "options": [
            "$20π$",
            "$50π$",
            "$100π$",
            "$200π$"
          ],
          "answer": 2,
          "explanation": "$π×10^2=100π$."
        },
        {
          "prompt": "A sector uses:",
          "options": [
            "central angle",
            "only chord",
            "only tangent",
            "diameter squared only"
          ],
          "answer": 0,
          "explanation": "Sector fraction uses central angle."
        },
        {
          "prompt": "180° sector is:",
          "options": [
            "quarter circle",
            "semicircle",
            "full circle",
            "minor arc only"
          ],
          "answer": 1,
          "explanation": "180° is half of 360°."
        },
        {
          "prompt": "A line from centre to circle:",
          "options": [
            "radius",
            "chord",
            "arc",
            "tangent"
          ],
          "answer": 0,
          "explanation": "That is the radius."
        },
        {
          "prompt": "A line joining two circle points:",
          "options": [
            "chord",
            "sector",
            "radius only",
            "area"
          ],
          "answer": 0,
          "explanation": "This is a chord."
        },
        {
          "prompt": "$π$ is ratio of:",
          "options": [
            "C to d",
            "A to r",
            "d to C",
            "radius to area"
          ],
          "answer": 0,
          "explanation": "$π=C/d$."
        },
        {
          "prompt": "Sector area radius 3 angle 40°:",
          "options": [
            "$π$",
            "$2π$",
            "$3π$",
            "$4π$"
          ],
          "answer": 0,
          "explanation": "$(40/360)×9π=π$."
        },
        {
          "prompt": "Arc length radius 9 angle 60°:",
          "options": [
            "$3π$",
            "$6π$",
            "$9π$",
            "$18π$"
          ],
          "answer": 0,
          "explanation": "$(60/360)×18π=3π$."
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
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Parts of a Circle, Circumference and Area",
          "back": "A circle is the set of all points in a plane at a fixed distance from a fixed centre. That fixed distance is the radius."
        },
        {
          "front": "Radius",
          "back": "Radius: line segment from centre to circle."
        },
        {
          "front": "Diameter",
          "back": "Diameter: line through centre joining two points on circle; $d=2r$."
        },
        {
          "front": "Chord",
          "back": "Chord: line segment joining two points on circle."
        }
      ]
    },
    {
      "kind": "imageGallery",
      "heading": "PDF visual reference: circle parts, area, arc and sector",
      "note": "The uploaded PDFs add coloured intuition for circle area and formula-guide pages for arcs and sectors.",
      "images": [
        { "src": "/geometry-pdf/visual-proofs/visual-proof-04.webp", "alt": "Circle area sector rearrangement", "caption": "Coloured circle sectors rearranged into a near-rectangle, giving the idea behind $A=\\pi r^2$." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-12.webp", "alt": "Circle terminology and chord theorem", "caption": "Circle terminology and basic circle theorems about arc, chord, perpendicular from centre to chord and tangents." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-14.webp", "alt": "Arc sector and segment formulas", "caption": "Arc and sector formulas with a segment theorem illustration." }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Parts of a Circle, Circumference and Area is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
