import type { LessonContent } from "@/lib/lesson-content-types";

export const prismsCylindersPyramidsConesAndSpheres: LessonContent = {
  "subjectSlug": "mathematics",
  "chapterSlug": "mensuration-and-3d-geometry",
  "lessonSlug": "prisms-cylinders-pyramids-cones-and-spheres",
  "title": "Prisms, Cylinders, Pyramids, Cones and Spheres",
  "objectives": [
    "Understand prisms, cylinders, pyramids, cones and spheres definitions.",
    "Use formulas and theorems correctly.",
    "Solve textbook-style and real-world problems.",
    "Practise exam-style reasoning questions."
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "This lesson develops prisms, cylinders, pyramids, cones and spheres beyond short notes. You will study definitions, theorems, worked examples, and self-study problems.",
        "For best learning, copy each diagram in your notebook, mark the given information, then solve before checking the answer."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Textbook definition",
      "body": "Three-dimensional solids occupy space. Volume measures the space inside; surface area measures the total outside area."
    },
    {
      "kind": "theory",
      "heading": "Important vocabulary",
      "paragraphs": [
        "Before solving problems, make sure the language is clear. Geometry questions often become easy when every word in the diagram is understood correctly."
      ],
      "list": [
        "Prism: solid with identical parallel cross-sections.",
        "Cylinder: circular prism-like solid with constant circular cross-section.",
        "Pyramid: solid with polygon base and triangular faces meeting at an apex.",
        "Cone: circular base and curved surface meeting at an apex.",
        "Sphere: set of all points in space at a fixed distance from a centre."
      ]
    },
    {
      "kind": "formula",
      "latex": "V_{\\text{prism}}=\\text{area of cross-section}\\times\\text{length}",
      "caption": "Volume of prism"
    },
    {
      "kind": "formula",
      "latex": "V_{\\text{cylinder}}=\\pi r^2h",
      "caption": "Volume of cylinder"
    },
    {
      "kind": "formula",
      "latex": "V_{\\text{pyramid}}=\\frac13Bh",
      "caption": "Volume of pyramid"
    },
    {
      "kind": "formula",
      "latex": "V_{\\text{cone}}=\\frac13\\pi r^2h",
      "caption": "Volume of cone"
    },
    {
      "kind": "formula",
      "latex": "V_{\\text{sphere}}=\\frac43\\pi r^3",
      "caption": "Volume of sphere"
    },
    {
      "kind": "formula",
      "latex": "SA_{\\text{sphere}}=4\\pi r^2",
      "caption": "Surface area of sphere"
    },
    {
      "kind": "theory",
      "heading": "Core ideas explained in depth",
      "paragraphs": [
        "Prisms and cylinders have constant cross-sections, so their volume is base area multiplied by height/length.",
        "Pyramids and cones have one-third the volume of a prism or cylinder with the same base and height.",
        "Surface area requires adding every exposed face. For nets, calculate each face and sum them."
      ],
      "list": [
        "Units are important: volume uses cubic units such as cm³, while surface area uses square units such as cm²."
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
      "prompt": "Find volume of a cylinder radius 3 cm and height 10 cm.",
      "steps": [
        "Use $V=\\pi r^2h$.",
        "$V=\\pi(3^2)(10)$.",
        "$V=90\\pi$."
      ],
      "answer": "$90\\pi$ cm³."
    },
    {
      "kind": "example",
      "prompt": "Find volume of a rectangular prism 8 cm by 5 cm by 4 cm.",
      "steps": [
        "Use $V=lwh$.",
        "$V=8\\times5\\times4$.",
        "$V=160$."
      ],
      "answer": "160 cm³."
    },
    {
      "kind": "example",
      "prompt": "A cone has radius 6 cm and height 12 cm. Find volume.",
      "steps": [
        "Use $V=\\frac13\\pi r^2h$.",
        "$V=\\frac13\\pi(36)(12)$.",
        "$V=144\\pi$."
      ],
      "answer": "$144\\pi$ cm³."
    },
    {
      "kind": "example",
      "prompt": "Find surface area of a sphere radius 5 cm.",
      "steps": [
        "Use $SA=4\\pi r^2$.",
        "$SA=4\\pi(25)$.",
        "$SA=100\\pi$."
      ],
      "answer": "$100\\pi$ cm²."
    },
    {
      "kind": "practice",
      "heading": "Self-study practice questions",
      "questions": [
        {
          "prompt": "Volume units are:",
          "options": [
            "cm",
            "cm²",
            "cm³",
            "degrees"
          ],
          "answer": 2,
          "explanation": "Volume uses cubic units."
        },
        {
          "prompt": "Cylinder volume:",
          "options": [
            "$πr^2h$",
            "$2πr$",
            "$4πr^2$",
            "$1/2bh$"
          ],
          "answer": 0,
          "explanation": "Base area $πr^2$ times height."
        },
        {
          "prompt": "Cone volume is what fraction of matching cylinder?",
          "options": [
            "1/2",
            "1/3",
            "2/3",
            "same"
          ],
          "answer": 1,
          "explanation": "Cone is one-third."
        },
        {
          "prompt": "Sphere volume formula:",
          "options": [
            "$4πr^2$",
            "$4/3πr^3$",
            "$πr^2h$",
            "$lwh$"
          ],
          "answer": 1,
          "explanation": "Sphere volume is $4/3πr^3$."
        },
        {
          "prompt": "Surface area units are:",
          "options": [
            "m",
            "m²",
            "m³",
            "kg"
          ],
          "answer": 1,
          "explanation": "Surface area is square units."
        },
        {
          "prompt": "Rectangular prism volume 2×3×4:",
          "options": [
            "9",
            "12",
            "24",
            "36"
          ],
          "answer": 2,
          "explanation": "$2×3×4=24$."
        },
        {
          "prompt": "A prism has constant:",
          "options": [
            "cross-section",
            "radius only",
            "apex",
            "curved point"
          ],
          "answer": 0,
          "explanation": "A prism keeps the same cross-section."
        },
        {
          "prompt": "Pyramid volume:",
          "options": [
            "$Bh$",
            "$1/3Bh$",
            "$2Bh$",
            "$B+h$"
          ],
          "answer": 1,
          "explanation": "Pyramid is one-third base area times height."
        },
        {
          "prompt": "Sphere surface area:",
          "options": [
            "$4πr^2$",
            "$4/3πr^3$",
            "$πd$",
            "$πr^2h$"
          ],
          "answer": 0,
          "explanation": "This is sphere surface area."
        },
        {
          "prompt": "A net helps find:",
          "options": [
            "surface area",
            "only volume",
            "only angle",
            "currency"
          ],
          "answer": 0,
          "explanation": "Nets show all faces."
        }
      ]
    },
    {
      "kind": "quiz",
      "questions": [
        {
          "prompt": "Cylinder radius 2 height 7 volume:",
          "options": [
            "$14π$",
            "$28π$",
            "$49π$",
            "$4π$"
          ],
          "answer": 1,
          "explanation": "$π×4×7=28π$."
        },
        {
          "prompt": "Cone radius 3 height 6 volume:",
          "options": [
            "$18π$",
            "$27π$",
            "$54π$",
            "$9π$"
          ],
          "answer": 0,
          "explanation": "$1/3×π×9×6=18π$."
        },
        {
          "prompt": "Sphere radius 3 volume:",
          "options": [
            "$12π$",
            "$27π$",
            "$36π$",
            "$108π$"
          ],
          "answer": 2,
          "explanation": "$4/3π×27=36π$."
        },
        {
          "prompt": "Prism volume uses:",
          "options": [
            "cross-section area × length",
            "perimeter only",
            "diameter only",
            "angle sum"
          ],
          "answer": 0,
          "explanation": "Constant cross-section rule."
        },
        {
          "prompt": "A pyramid has faces meeting at:",
          "options": [
            "apex",
            "diameter",
            "arc",
            "parallel chord"
          ],
          "answer": 0,
          "explanation": "The top point is apex."
        },
        {
          "prompt": "Volume of cube side 5:",
          "options": [
            "25",
            "75",
            "125",
            "625"
          ],
          "answer": 2,
          "explanation": "$5^3=125$."
        },
        {
          "prompt": "Cylinder is like prism with:",
          "options": [
            "circular cross-section",
            "triangular cross-section",
            "square only",
            "no base"
          ],
          "answer": 0,
          "explanation": "Its cross-section is a circle."
        },
        {
          "prompt": "Surface area means:",
          "options": [
            "outside area",
            "space inside",
            "angle size",
            "mass"
          ],
          "answer": 0,
          "explanation": "Surface area covers outside."
        },
        {
          "prompt": "Sphere has:",
          "options": [
            "no flat faces",
            "six faces",
            "one apex",
            "two circular bases"
          ],
          "answer": 0,
          "explanation": "A sphere is completely curved."
        },
        {
          "prompt": "Pyramid vs prism same base/height volume ratio:",
          "options": [
            "1:3",
            "3:1",
            "1:1",
            "2:1"
          ],
          "answer": 0,
          "explanation": "Pyramid volume is one-third prism."
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
          "wrong": "Mixing surface area and volume formulas.",
          "right": "Decide whether the question asks outside covering or inside capacity."
        },
        {
          "wrong": "Forgetting the one-third for cones and pyramids.",
          "right": "Use $1/3$ for solids tapering to an apex."
        },
        {
          "wrong": "Using diameter as radius.",
          "right": "Halve diameter before substituting into formulas with r."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "Prisms, Cylinders, Pyramids, Cones and Spheres",
          "back": "Three-dimensional solids occupy space. Volume measures the space inside; surface area measures the total outside area."
        },
        {
          "front": "Prism",
          "back": "Prism: solid with identical parallel cross-sections."
        },
        {
          "front": "Cylinder",
          "back": "Cylinder: circular prism-like solid with constant circular cross-section."
        },
        {
          "front": "Pyramid",
          "back": "Pyramid: solid with polygon base and triangular faces meeting at an apex."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Prisms, Cylinders, Pyramids, Cones and Spheres is not only memorising formulas; it is about choosing the correct relationship from the diagram.",
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
