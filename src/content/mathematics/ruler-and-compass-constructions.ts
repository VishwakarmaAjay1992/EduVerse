import type { LessonContent } from "@/lib/lesson-content-types";

export const rulerAndCompassConstructions: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "transformations-and-constructions",
  "lessonSlug": "ruler-and-compass-constructions",
  "title": "Ruler and Compass Constructions",
  "objectives": [
    "Understand ruler and compass constructions definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops ruler and compass constructions beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "A construction is an exact geometric drawing made using only a straightedge/ruler for lines and a compass for arcs and circles."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Perpendicular bisector: line that cuts a segment into two equal parts at $90^\\circ$.",
        "Angle bisector: ray that divides an angle into two equal angles.",
        "Equidistant: the same distance from two or more objects.",
        "Locus: set of points satisfying a rule."
      ]
    },
    {
      "kind": "formula",
      "latex": "PA=PB",
      "caption": "Points on perpendicular bisector are equidistant from endpoints"
    },
    {
      "kind": "formula",
      "latex": "\\angle AOC=\\angle COB",
      "caption": "Angle bisector creates equal angles"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Construction is about preserving exact distances with a compass, not estimating with a ruler scale.",
        "Arcs are used to create equal distances. When two arcs intersect, the intersection point satisfies two distance conditions at once.",
        "A perpendicular bisector is the locus of points equidistant from two endpoints."
      ],
      "list": [
        "An angle bisector is the locus of points equidistant from the two arms of an angle."
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
      "prompt": "Construct the perpendicular bisector of AB.",
      "steps": [
        "Open compass to more than half of AB.",
        "Draw arcs above and below AB from A.",
        "Without changing compass width, draw arcs from B to intersect the first arcs.",
        "Join the two arc intersections."
      ],
      "answer": "The joined line is the perpendicular bisector of AB."
    },
    {
      "kind": "example",
      "prompt": "Construct an angle bisector.",
      "steps": [
        "From the angle vertex, draw an arc cutting both arms.",
        "From the two cut points, draw equal-radius arcs inside the angle.",
        "Join the vertex to the intersection of those arcs."
      ],
      "answer": "The ray divides the angle into two equal angles."
    },
    {
      "kind": "example",
      "prompt": "Construct a 60° angle.",
      "steps": [
        "Draw a ray AB.",
        "With compass at A, draw an arc cutting ray at C.",
        "With same radius at C, cut the arc at D.",
        "Join A to D."
      ],
      "answer": "Angle DAB is 60°."
    },
    {
      "kind": "example",
      "prompt": "Construct a triangle with sides 5 cm, 6 cm and 7 cm.",
      "steps": [
        "Draw base AB = 7 cm.",
        "From A draw arc radius 5 cm.",
        "From B draw arc radius 6 cm.",
        "Their intersection is C; join AC and BC."
      ],
      "answer": "Triangle ABC has sides 5, 6 and 7 cm."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Perpendicular bisector meets segment at:",
          "options": [
            "90° and midpoint",
            "60°",
            "endpoint only",
            "random point"
          ],
          "answer": 0,
          "explanation": "It is perpendicular and bisects."
        },
        {
          "prompt": "Compass is used to copy:",
          "options": [
            "distances",
            "colours",
            "text",
            "prices"
          ],
          "answer": 0,
          "explanation": "Compass preserves equal distances."
        },
        {
          "prompt": "Angle bisector makes:",
          "options": [
            "two equal angles",
            "two equal lengths only",
            "circle",
            "parallel lines"
          ],
          "answer": 0,
          "explanation": "It splits an angle equally."
        },
        {
          "prompt": "Points on perpendicular bisector are equidistant from:",
          "options": [
            "segment endpoints",
            "circle centre only",
            "angle arms only",
            "all vertices"
          ],
          "answer": 0,
          "explanation": "$PA=PB$."
        },
        {
          "prompt": "A locus is:",
          "options": [
            "set of points following a rule",
            "a measuring tape",
            "a theorem only",
            "a triangle"
          ],
          "answer": 0,
          "explanation": "Locus describes all positions satisfying a condition."
        },
        {
          "prompt": "To construct 60°, use:",
          "options": [
            "equilateral triangle idea",
            "protractor only",
            "calculator",
            "area formula"
          ],
          "answer": 0,
          "explanation": "Same-radius arcs form equilateral triangle."
        },
        {
          "prompt": "Straightedge is used for:",
          "options": [
            "drawing straight lines",
            "measuring angles only",
            "drawing arcs",
            "colouring"
          ],
          "answer": 0,
          "explanation": "It draws lines."
        },
        {
          "prompt": "Changing compass width during equal arcs is:",
          "options": [
            "wrong",
            "required always",
            "irrelevant",
            "only for text"
          ],
          "answer": 0,
          "explanation": "Keep width same when equal distances are needed."
        },
        {
          "prompt": "Angle bisector locus points are equidistant from:",
          "options": [
            "angle arms",
            "endpoints only",
            "circle arcs",
            "parallel sides"
          ],
          "answer": 0,
          "explanation": "Distance to both arms is equal."
        },
        {
          "prompt": "Construction accuracy depends on:",
          "options": [
            "clear arcs and sharp points",
            "guessing",
            "thick lines only",
            "rounding"
          ],
          "answer": 0,
          "explanation": "Precise arcs matter."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Perpendicular means:",
          "options": [
            "90°",
            "180°",
            "360°",
            "45°"
          ],
          "answer": 0,
          "explanation": "Perpendicular lines meet at right angle."
        },
        {
          "prompt": "Bisect means:",
          "options": [
            "cut into two equal parts",
            "double",
            "rotate",
            "shade"
          ],
          "answer": 0,
          "explanation": "Bisect means divide equally."
        },
        {
          "prompt": "For perpendicular bisector arcs, compass radius should be:",
          "options": [
            "more than half segment",
            "less than half always",
            "zero",
            "any tiny length"
          ],
          "answer": 0,
          "explanation": "Arcs must intersect."
        },
        {
          "prompt": "A 60° construction relates to:",
          "options": [
            "equilateral triangle",
            "square",
            "circle area",
            "trapezium"
          ],
          "answer": 0,
          "explanation": "Equilateral angles are 60°."
        },
        {
          "prompt": "To copy a length, use:",
          "options": [
            "compass",
            "calculator only",
            "protractor",
            "scale factor only"
          ],
          "answer": 0,
          "explanation": "Compass transfers length."
        },
        {
          "prompt": "A ruler in construction acts as:",
          "options": [
            "straightedge",
            "compass",
            "protractor",
            "calculator"
          ],
          "answer": 0,
          "explanation": "It draws straight lines."
        },
        {
          "prompt": "Angle bisector from vertex passes through:",
          "options": [
            "intersection of equal arcs",
            "random point",
            "midpoint of opposite side always",
            "circle centre only"
          ],
          "answer": 0,
          "explanation": "Equal arcs locate bisector."
        },
        {
          "prompt": "Perpendicular bisector of chord passes through circle:",
          "options": [
            "centre",
            "tangent only",
            "arc only",
            "outside point only"
          ],
          "answer": 0,
          "explanation": "Chord perpendicular bisector passes through centre."
        },
        {
          "prompt": "Locus equidistant from two points is:",
          "options": [
            "perpendicular bisector",
            "angle bisector",
            "circle only",
            "parallel line"
          ],
          "answer": 0,
          "explanation": "This is a key locus fact."
        },
        {
          "prompt": "Locus at fixed distance from a point is:",
          "options": [
            "circle",
            "line",
            "triangle",
            "rectangle"
          ],
          "answer": 0,
          "explanation": "All points a fixed distance from centre form a circle."
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
          "wrong": "Measuring every construction with a ruler only.",
          "right": "Use compass arcs to create exact equal distances."
        },
        {
          "wrong": "Changing compass radius when equal arcs are required.",
          "right": "Keep the compass width unchanged for matching distances."
        },
        {
          "wrong": "Drawing very thick construction lines.",
          "right": "Use thin accurate lines so intersections are clear."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Ruler and Compass Constructions",
          "back": "A construction is an exact geometric drawing made using only a straightedge/ruler for lines and a compass for arcs and circles."
        },
        {
          "front": "Perpendicular bisector",
          "back": "Perpendicular bisector: line that cuts a segment into two equal parts at $90^\\circ$."
        },
        {
          "front": "Angle bisector",
          "back": "Angle bisector: ray that divides an angle into two equal angles."
        },
        {
          "front": "Equidistant",
          "back": "Equidistant: the same distance from two or more objects."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Ruler and Compass Constructions is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
