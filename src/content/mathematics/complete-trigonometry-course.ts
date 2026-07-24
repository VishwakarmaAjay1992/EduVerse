import type { LessonContent } from "@/lib/lesson-content-types";

export const completeTrigonometryCourse: LessonContent[] = [
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "degree-and-radian-measure-of-angles",
    "title": "Degree and Radian Measure of Angles",
    "objectives": [
      "Interpret an angle as directed rotation between two rays",
      "Measure angles in revolutions, degrees, and radians",
      "Convert exactly between degrees and radians",
      "Identify complementary, supplementary, coterminal, and quadrantal angles",
      "Sketch positive and negative angles in standard position"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Trigonometry begins with rotation. An angle records how far and in which direction a ray turns from an initial side to a terminal side.",
          "Degrees divide one revolution into 360 equal parts. Radians compare arc length with radius, so they connect angle measure directly to circle geometry and later to calculus."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "angle-measure"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Radian measure",
        "body": "For a central angle, $\\theta=\\frac{s}{r}$, where $s$ is the subtended arc length and $r$ is the radius. One full revolution is $2\\pi$ radians."
      },
      {
        "kind": "callout",
        "variant": "remember",
        "title": "Orientation convention",
        "body": "Counter-clockwise rotation is positive; clockwise rotation is negative. Angles in standard position start on the positive $x$-axis."
      },
      {
        "kind": "theory",
        "heading": "Revolutions, degrees, and radians",
        "paragraphs": [
          "A revolution measures a complete turn. Half a revolution is a straight angle; one quarter is a right angle.",
          "Because a circle has circumference $2\\pi r$, one revolution has radian measure $2\\pi$."
        ],
        "list": [
          "$1\\text{ rev}=360^\\circ=2\\pi$ radians",
          "$\\frac12\\text{ rev}=180^\\circ=\\pi$ radians",
          "$\\frac14\\text{ rev}=90^\\circ=\\frac{\\pi}{2}$ radians"
        ]
      },
      {
        "kind": "theory",
        "heading": "Complementary and supplementary angles",
        "paragraphs": [
          "Two acute angles are complementary when their measures add to $90^\\circ$ or $\\frac{\\pi}{2}$. Two angles are supplementary when their measures add to $180^\\circ$ or $\\pi$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Coterminal angles",
        "paragraphs": [
          "Angles that finish on the same terminal side are coterminal. Add or subtract complete revolutions without changing the terminal side."
        ],
        "list": [
          "Degrees: $\\theta+360^\\circ k$",
          "Radians: $\\theta+2\\pi k$",
          "$k$ may be any integer"
        ]
      },
      {
        "kind": "theory",
        "heading": "Standard position and quadrants",
        "paragraphs": [
          "An angle is in standard position when its vertex is at the origin and its initial side lies on the positive $x$-axis. The terminal side may lie in a quadrant or directly on an axis."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\theta_{\\text{rad}}=\\theta_{\\text{deg}}\\frac{\\pi}{180}",
        "caption": "Convert degrees to radians."
      },
      {
        "kind": "formula",
        "latex": "\\theta_{\\text{deg}}=\\theta_{\\text{rad}}\\frac{180}{\\pi}",
        "caption": "Convert radians to degrees."
      },
      {
        "kind": "formula",
        "latex": "\\theta_{\\text{coterminal}}=\\theta+2\\pi k\\quad\\text{or}\\quad\\theta+360^\\circ k",
        "caption": "All coterminal angles."
      },
      {
        "kind": "example",
        "prompt": "Convert $225^\\circ$ to radians.",
        "steps": [
          "Multiply by $\\pi/180$: $225(\\pi/180)$.",
          "Reduce $225/180$ to $5/4$."
        ],
        "answer": "$225^\\circ=\\frac{5\\pi}{4}$ radians."
      },
      {
        "kind": "example",
        "prompt": "Find one positive and one negative angle coterminal with $-50^\\circ$.",
        "steps": [
          "Add $360^\\circ$: $-50^\\circ+360^\\circ=310^\\circ$.",
          "Subtract $360^\\circ$: $-50^\\circ-360^\\circ=-410^\\circ$."
        ],
        "answer": "Examples are $310^\\circ$ and $-410^\\circ$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using $180/\\pi$ when converting degrees to radians.",
            "right": "Degrees to radians uses $\\pi/180$; radians to degrees uses $180/\\pi$."
          },
          {
            "wrong": "Treating a negative angle as a negative length.",
            "right": "The sign describes direction of rotation, not the size of a physical side or radius."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Engineering",
            "text": "Radians are the natural unit in rotational kinematics and oscillation formulas."
          },
          {
            "area": "Navigation",
            "text": "Bearings and headings are directed angle measurements."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Which measure equals one quarter revolution?",
            "options": [
              "45°",
              "90°",
              "π radians",
              "2π radians"
            ],
            "answer": 1,
            "explanation": "One quarter of 360° is 90°, equal to π/2 radians."
          },
          {
            "prompt": "Convert $7\\pi/6$ to degrees.",
            "options": [
              "150°",
              "180°",
              "210°",
              "240°"
            ],
            "answer": 2,
            "explanation": "$(7π/6)(180/π)=210°$."
          },
          {
            "prompt": "Which angle is coterminal with $40^\\circ$?",
            "options": [
              "−40°",
              "140°",
              "320°",
              "400°"
            ],
            "answer": 3,
            "explanation": "$40°+360°=400°$."
          },
          {
            "prompt": "A complement of $\\pi/5$ is…",
            "options": [
              "$3π/10$",
              "$4π/5$",
              "$π/5$",
              "$7π/10$"
            ],
            "answer": 0,
            "explanation": "$π/2−π/5=3π/10$."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "One revolution is $360^\\circ=2\\pi$ radians.",
          "Radians are dimensionless ratios of arc length to radius.",
          "Standard-position angles begin on the positive $x$-axis.",
          "Coterminal angles differ by an integer multiple of a full revolution."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "right-triangle-trigonometry",
    "title": "Right Triangle Trigonometry",
    "objectives": [
      "Define sine, cosine, and tangent as right-triangle ratios",
      "Recognize side names relative to a chosen acute angle",
      "Use exact ratios for $30^\\circ$, $45^\\circ$, and $60^\\circ$",
      "Find unknown sides and angles in right triangles",
      "Model height, distance, and incline problems"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Right-triangle trigonometry translates an angle into fixed ratios of side lengths. Similar right triangles with the same acute angle have proportional corresponding sides, so their sine, cosine, and tangent values agree.",
          "The side labels opposite and adjacent depend on the selected angle; the hypotenuse never changes because it is always opposite the right angle."
        ]
      },
      {
        "kind": "figure",
        "caption": "A right triangle labels sides relative to the chosen acute angle.",
        "figure": {
          "type": "rightTriangle",
          "opposite": "opposite",
          "adjacent": "adjacent",
          "hypotenuse": "hypotenuse",
          "angle": "θ"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Trigonometric ratios",
        "body": "For an acute angle $\\theta$ in a right triangle, $\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}}$, and $\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Calculator mode",
        "body": "Check whether the problem uses degrees or radians before evaluating a trigonometric function or its inverse."
      },
      {
        "kind": "theory",
        "heading": "Why the ratios are constant",
        "paragraphs": [
          "Any two right triangles sharing an acute angle are similar by angle-angle similarity. Their corresponding sides scale by the same factor, so each side ratio remains unchanged."
        ]
      },
      {
        "kind": "theory",
        "heading": "Choosing a ratio",
        "paragraphs": [
          "Identify the known and unknown sides relative to the marked angle. Choose the ratio that uses both and avoids unnecessary intermediate steps."
        ],
        "list": [
          "Opposite and hypotenuse → sine",
          "Adjacent and hypotenuse → cosine",
          "Opposite and adjacent → tangent"
        ]
      },
      {
        "kind": "theory",
        "heading": "Special triangles",
        "paragraphs": [
          "A $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle has side ratio $1:1:\\sqrt2$. A $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle has side ratio $1:\\sqrt3:2$. These produce exact values without a calculator."
        ]
      },
      {
        "kind": "theory",
        "heading": "Solving for an angle",
        "paragraphs": [
          "When side lengths are known, apply the matching inverse function: $\\theta=\\sin^{-1}(o/h)$, $\\cos^{-1}(a/h)$, or $\\tan^{-1}(o/a)$. The superscript $-1$ means inverse function, not reciprocal."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\sin\\theta=\\frac{o}{h},\\qquad \\cos\\theta=\\frac{a}{h},\\qquad \\tan\\theta=\\frac{o}{a}",
        "caption": "The three primary right-triangle ratios."
      },
      {
        "kind": "formula",
        "latex": "a^2+b^2=c^2",
        "caption": "Pythagorean theorem for a right triangle."
      },
      {
        "kind": "example",
        "prompt": "A ramp rises $1.2$ m over a horizontal run of $5.0$ m. Find its angle of inclination.",
        "steps": [
          "Opposite $=1.2$, adjacent $=5.0$, so use tangent.",
          "$\\tan\\theta=1.2/5.0=0.24$.",
          "$\\theta=\\tan^{-1}(0.24)$."
        ],
        "answer": "$\\theta\\approx13.5^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Find the exact hypotenuse when a $30^\\circ$ angle has opposite side $7$.",
        "steps": [
          "$\\sin30^\\circ=7/h$.",
          "Since $\\sin30^\\circ=1/2$, solve $1/2=7/h$."
        ],
        "answer": "$h=14$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Labelling the adjacent side as the hypotenuse.",
            "right": "The hypotenuse is opposite the $90^\\circ$ angle and is the longest side."
          },
          {
            "wrong": "Using $\\sin^{-1}x$ to mean $1/\\sin x$.",
            "right": "Inverse sine returns an angle; the reciprocal of sine is cosecant."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Construction",
            "text": "Roof pitches, stair slopes, and setting-out measurements use right-triangle ratios."
          },
          {
            "area": "Surveying",
            "text": "Angles of elevation and measured baselines determine inaccessible heights and distances."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Which ratio uses opposite and hypotenuse?",
            "options": [
              "sine",
              "cosine",
              "tangent",
              "cotangent"
            ],
            "answer": 0,
            "explanation": "Sine is opposite divided by hypotenuse."
          },
          {
            "prompt": "What is $\\cos60^\\circ$?",
            "options": [
              "0",
              "1/2",
              "√2/2",
              "√3/2"
            ],
            "answer": 1,
            "explanation": "From the 30-60-90 triangle, cos 60° = 1/2."
          },
          {
            "prompt": "A ladder is 8 m long and its foot is 3 m from a wall. Which equation finds the angle with the ground?",
            "options": [
              "sin θ=3/8",
              "cos θ=3/8",
              "tan θ=8/3",
              "cos θ=8/3"
            ],
            "answer": 1,
            "explanation": "Adjacent is 3 and hypotenuse is 8."
          },
          {
            "prompt": "If $\\tan\\theta=1$ and $0^\\circ<\\theta<90^\\circ$, then θ is…",
            "options": [
              "30°",
              "45°",
              "60°",
              "90°"
            ],
            "answer": 1,
            "explanation": "tan 45° = 1."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Sine, cosine, and tangent are invariant ratios in similar right triangles.",
          "Side names opposite and adjacent are relative to the selected angle.",
          "Special triangles provide exact values at $30^\\circ$, $45^\\circ$, and $60^\\circ$.",
          "Inverse trigonometric functions recover an angle from a ratio."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "the-unit-circle",
    "title": "The Unit Circle",
    "objectives": [
      "Connect real numbers, oriented arcs, and angles on the unit circle",
      "Define sine and cosine as coordinates",
      "Use reference angles and quadrant signs",
      "Recall exact coordinates for standard angles",
      "Apply the Pythagorean identity"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "The unit circle extends sine and cosine beyond acute angles. A point reached by rotating through $\\theta$ radians has coordinates $(\\cos\\theta,\\sin\\theta)$.",
          "Because the radius equals 1, the radian measure of the angle equals the signed arc length swept from $(1,0)$. This creates a direct bridge from angles to real-number inputs."
        ]
      },
      {
        "kind": "unitCircleExplorer",
        "heading": "Explore angle, coordinates, and exact values"
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Unit circle",
        "body": "The unit circle is $x^2+y^2=1$. At angle $\\theta$, the terminal point is $(x,y)=(\\cos\\theta,\\sin\\theta)$."
      },
      {
        "kind": "callout",
        "variant": "remember",
        "title": "Reference angle",
        "body": "The reference angle is the acute angle between the terminal side and the $x$-axis. Exact magnitudes come from the reference angle; the quadrant determines signs."
      },
      {
        "kind": "theory",
        "heading": "Coordinates and signs",
        "paragraphs": [
          "Cosine is the horizontal coordinate and sine is the vertical coordinate. Therefore cosine is positive on the right half-plane and sine is positive on the upper half-plane."
        ],
        "list": [
          "Quadrant I: sine and cosine positive",
          "Quadrant II: sine positive, cosine negative",
          "Quadrant III: both negative",
          "Quadrant IV: sine negative, cosine positive"
        ]
      },
      {
        "kind": "theory",
        "heading": "Standard-angle coordinates",
        "paragraphs": [
          "Memorize the first-quadrant coordinates at $0$, $\\pi/6$, $\\pi/4$, $\\pi/3$, and $\\pi/2$. Reflect them through the axes to obtain the remaining angles."
        ]
      },
      {
        "kind": "theory",
        "heading": "Symmetry",
        "paragraphs": [
          "Reflecting a point across the $x$-axis changes the sign of sine but not cosine. Reflecting across the $y$-axis changes the sign of cosine but not sine. These geometric facts lead to even and odd identities."
        ]
      },
      {
        "kind": "theory",
        "heading": "Reference-angle workflow",
        "paragraphs": [
          "Reduce the angle to a coterminal angle in $[0,2\\pi)$. Identify the quadrant, find the acute reference angle, recall the standard value, and attach the correct sign."
        ]
      },
      {
        "kind": "formula",
        "latex": "(x,y)=(\\cos\\theta,\\sin\\theta)",
        "caption": "Coordinates on the unit circle."
      },
      {
        "kind": "formula",
        "latex": "\\sin^2\\theta+\\cos^2\\theta=1",
        "caption": "The Pythagorean identity follows from $x^2+y^2=1$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\sin(5\\pi/6)$ and $\\cos(5\\pi/6)$ exactly.",
        "steps": [
          "$5\\pi/6$ is in Quadrant II.",
          "Its reference angle is $\\pi/6$.",
          "At $\\pi/6$, sine is $1/2$ and cosine is $\\sqrt3/2$; in Quadrant II cosine is negative."
        ],
        "answer": "$\\sin(5\\pi/6)=1/2$ and $\\cos(5\\pi/6)=-\\sqrt3/2$."
      },
      {
        "kind": "example",
        "prompt": "If $\\cos\\theta=-3/5$ and $\\theta$ is in Quadrant III, find $\\sin\\theta$.",
        "steps": [
          "Use $\\sin^2\\theta+\\cos^2\\theta=1$.",
          "$\\sin^2\\theta=1-9/25=16/25$.",
          "In Quadrant III sine is negative."
        ],
        "answer": "$\\sin\\theta=-4/5$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Assigning $(\\sin\\theta,\\cos\\theta)$ to a point.",
            "right": "The order is $(x,y)=(\\cos\\theta,\\sin\\theta)$."
          },
          {
            "wrong": "Using a positive square root without checking the quadrant.",
            "right": "The Pythagorean identity gives two signs; the terminal quadrant selects the correct one."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Periodic motion",
            "text": "A rotating point projected onto horizontal and vertical axes produces cosine and sine motion."
          },
          {
            "area": "Computer graphics",
            "text": "Rotations in two dimensions use the coordinate pair $(\\cos\\theta,\\sin\\theta)$."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "What are the coordinates at $\\theta=\\pi$?",
            "options": [
              "(1,0)",
              "(0,1)",
              "(−1,0)",
              "(0,−1)"
            ],
            "answer": 2,
            "explanation": "At π the terminal point lies on the negative x-axis."
          },
          {
            "prompt": "In Quadrant IV, which statement is true?",
            "options": [
              "sin and cos positive",
              "sin positive, cos negative",
              "sin negative, cos positive",
              "both negative"
            ],
            "answer": 2,
            "explanation": "Quadrant IV is below the x-axis and right of the y-axis."
          },
          {
            "prompt": "The reference angle for $7\\pi/6$ is…",
            "options": [
              "π/6",
              "π/3",
              "5π/6",
              "7π/6"
            ],
            "answer": 0,
            "explanation": "$7π/6−π=π/6$."
          },
          {
            "prompt": "If $\\sin\\theta=12/13$ and θ is in Quadrant II, $\\cos\\theta$ is…",
            "options": [
              "5/13",
              "−5/13",
              "12/13",
              "−12/13"
            ],
            "answer": 1,
            "explanation": "The 5-12-13 relation gives magnitude 5/13, and cosine is negative in II."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "The unit circle defines sine and cosine for every real angle.",
          "Cosine is the $x$-coordinate; sine is the $y$-coordinate.",
          "Reference angles supply exact magnitudes while quadrants supply signs.",
          "The identity $\\sin^2\\theta+\\cos^2\\theta=1$ is the unit-circle equation."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "the-six-trigonometric-functions",
    "title": "The Six Trigonometric Functions",
    "objectives": [
      "Define all six trigonometric functions from coordinates",
      "Use quotient and reciprocal identities",
      "Determine domains and undefined values",
      "Evaluate exact values with reference angles",
      "Solve elementary equations involving any trigonometric function"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Sine and cosine are the coordinate functions of the unit circle. Tangent, cotangent, secant, and cosecant are built from their quotients and reciprocals.",
          "These definitions make domain restrictions essential: division by zero creates undefined function values at specific quadrantal angles."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "six-functions"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Coordinate definition",
        "body": "For a point $(x,y)$ on the unit circle: $\\sin\\theta=y$, $\\cos\\theta=x$, $\\tan\\theta=y/x$, $\\csc\\theta=1/y$, $\\sec\\theta=1/x$, and $\\cot\\theta=x/y$."
      },
      {
        "kind": "callout",
        "variant": "remember",
        "title": "Undefined is not zero",
        "body": "A function is undefined when its defining denominator is zero. For example $\\tan(\\pi/2)$ is undefined because $\\cos(\\pi/2)=0$."
      },
      {
        "kind": "theory",
        "heading": "Quotient identities",
        "paragraphs": [
          "Tangent and cotangent compare sine and cosine. Their signs follow from dividing the coordinate signs in each quadrant."
        ],
        "list": [
          "$\\tan\\theta=\\sin\\theta/\\cos\\theta$",
          "$\\cot\\theta=\\cos\\theta/\\sin\\theta$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Reciprocal identities",
        "paragraphs": [
          "Cosecant, secant, and cotangent are reciprocals of sine, cosine, and tangent respectively."
        ],
        "list": [
          "$\\csc\\theta=1/\\sin\\theta$",
          "$\\sec\\theta=1/\\cos\\theta$",
          "$\\cot\\theta=1/\\tan\\theta$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Domains and ranges",
        "paragraphs": [
          "Sine and cosine are defined for all real inputs. Tangent and secant are undefined where cosine is zero; cotangent and cosecant are undefined where sine is zero."
        ]
      },
      {
        "kind": "theory",
        "heading": "Solving simple equations",
        "paragraphs": [
          "Find the reference angle from the absolute value, determine every quadrant with the required sign, and then state all angles in the requested interval."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta},\\qquad \\cot\\theta=\\frac{\\cos\\theta}{\\sin\\theta}",
        "caption": "Quotient identities."
      },
      {
        "kind": "formula",
        "latex": "\\csc\\theta=\\frac1{\\sin\\theta},\\qquad \\sec\\theta=\\frac1{\\cos\\theta},\\qquad \\cot\\theta=\\frac1{\\tan\\theta}",
        "caption": "Reciprocal identities."
      },
      {
        "kind": "example",
        "prompt": "Evaluate all six functions at $\\theta=3\\pi/4$.",
        "steps": [
          "The unit-circle point is $(-\\sqrt2/2,\\sqrt2/2)$.",
          "So sine is $\\sqrt2/2$ and cosine is $-\\sqrt2/2$.",
          "Use quotients and reciprocals for the remaining functions."
        ],
        "answer": "$\\tan=-1$, $\\csc=\\sqrt2$, $\\sec=-\\sqrt2$, $\\cot=-1$."
      },
      {
        "kind": "example",
        "prompt": "Solve $\\sec\\theta=-2$ for $0\\le\\theta<2\\pi$.",
        "steps": [
          "Convert to cosine: $\\cos\\theta=-1/2$.",
          "The reference angle is $\\pi/3$.",
          "Cosine is negative in Quadrants II and III."
        ],
        "answer": "$\\theta=2\\pi/3$ or $4\\pi/3$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Taking a reciprocal but forgetting to rationalize or simplify.",
            "right": "Simplify exact values consistently, for example $1/(\\sqrt2/2)=\\sqrt2$."
          },
          {
            "wrong": "Including an angle where the function is undefined.",
            "right": "Check the original function's denominator, especially for tangent, cotangent, secant, and cosecant."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Signals",
            "text": "Tangent relates slope to direction angle; secant and cosecant appear in transformed wave models."
          },
          {
            "area": "Calculus",
            "text": "Derivatives and integrals of all six functions rely on their quotient and reciprocal relationships."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Where is tangent undefined?",
            "options": [
              "where sine is 0",
              "where cosine is 0",
              "where tangent is 1",
              "at every quadrantal angle"
            ],
            "answer": 1,
            "explanation": "tan θ = sin θ / cos θ."
          },
          {
            "prompt": "If $\\sin\\theta=-3/5$, then $\\csc\\theta$ is…",
            "options": [
              "−5/3",
              "5/3",
              "−3/5",
              "3/5"
            ],
            "answer": 0,
            "explanation": "Cosecant is the reciprocal of sine."
          },
          {
            "prompt": "Which function is positive in Quadrants II and IV?",
            "options": [
              "sine",
              "cosine",
              "tangent",
              "none"
            ],
            "answer": 3,
            "explanation": "Tangent is negative in II and IV; sine and cosine are each positive in only one of those quadrants."
          },
          {
            "prompt": "$\\cot\\theta$ equals…",
            "options": [
              "sin/cos",
              "cos/sin",
              "1/cos",
              "1/sin"
            ],
            "answer": 1,
            "explanation": "Cotangent is cos θ / sin θ."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "All six functions can be defined from a unit-circle point.",
          "Quotient and reciprocal identities connect the functions.",
          "Zeros of denominators determine undefined inputs.",
          "Reference angles and quadrant signs evaluate exact values and solve equations."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "foundational-trigonometric-identities",
    "title": "Foundational Trigonometric Identities",
    "objectives": [
      "Distinguish an identity from an equation true only for selected inputs",
      "Use reciprocal, quotient, and Pythagorean identities",
      "Generate the three Pythagorean forms",
      "Simplify trigonometric expressions",
      "Verify identities by transforming one side"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "A trigonometric identity is an equation that is true for every input where both sides are defined. Identities let us replace one expression with an equivalent form, much as algebraic factoring does.",
          "The foundational family comes from coordinate definitions and the unit-circle equation. These identities support simplification, equation solving, graph analysis, and later calculus."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "unit-circle"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Identity",
        "body": "An identity is valid for every input in the common domain of its two sides. Verification is an algebraic argument, not a check of a few numerical examples."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Verification strategy",
        "body": "Usually work on the more complicated side, rewrite in sine and cosine when helpful, and avoid changing both sides independently."
      },
      {
        "kind": "theory",
        "heading": "Reciprocal and quotient identities",
        "paragraphs": [
          "These identities follow directly from the definitions of tangent, cotangent, secant, and cosecant."
        ]
      },
      {
        "kind": "theory",
        "heading": "Pythagorean identities",
        "paragraphs": [
          "Start from $\\sin^2\\theta+\\cos^2\\theta=1$. Divide by $\\cos^2\\theta$ or $\\sin^2\\theta$ to obtain two more identities."
        ],
        "list": [
          "$1+\\tan^2\\theta=\\sec^2\\theta$",
          "$1+\\cot^2\\theta=\\csc^2\\theta$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Simplifying expressions",
        "paragraphs": [
          "Factor, combine fractions with a common denominator, use conjugates, or substitute identities. Preserve domain restrictions even if a cancelled factor disappears from the final expression."
        ]
      },
      {
        "kind": "theory",
        "heading": "Verifying an identity",
        "paragraphs": [
          "Choose a target form, transform one side using valid identities and algebra, and stop when it exactly matches the other side. Every line should be reversible on the common domain."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\sin^2\\theta+\\cos^2\\theta=1",
        "caption": "Primary Pythagorean identity."
      },
      {
        "kind": "formula",
        "latex": "1+\\tan^2\\theta=\\sec^2\\theta",
        "caption": "Divide the primary identity by $\\cos^2\\theta$."
      },
      {
        "kind": "formula",
        "latex": "1+\\cot^2\\theta=\\csc^2\\theta",
        "caption": "Divide the primary identity by $\\sin^2\\theta$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\frac{1-\\cos^2 x}{\\sin x}$.",
        "steps": [
          "Use $1-\\cos^2x=\\sin^2x$.",
          "Then $\\sin^2x/\\sin x=\\sin x$ where $\\sin x\\ne0$."
        ],
        "answer": "The expression simplifies to $\\sin x$ on its original domain."
      },
      {
        "kind": "example",
        "prompt": "Verify $\\frac{1-\\sin x}{\\cos x}=\\frac{\\cos x}{1+\\sin x}$.",
        "steps": [
          "Multiply the left numerator and denominator by the conjugate $1+\\sin x$.",
          "The numerator becomes $1-\\sin^2x=\\cos^2x$.",
          "Cancel one factor of cosine on the common domain."
        ],
        "answer": "The left side becomes $\\cos x/(1+\\sin x)$, matching the right side."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Checking several calculator values and calling it a proof.",
            "right": "Numerical checks can detect errors, but an identity requires symbolic verification."
          },
          {
            "wrong": "Cancelling terms across addition, such as in $(1+\\sin x)/\\sin x$.",
            "right": "Cancellation applies to common factors, not separate terms in a sum."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Algebraic simplification",
            "text": "Identities reduce complicated wave expressions before solving or differentiating."
          },
          {
            "area": "Physics",
            "text": "Resolving oscillations into sine and cosine often requires equivalent identity forms."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Which is a Pythagorean identity?",
            "options": [
              "sin+cos=1",
              "1+tan²=sec²",
              "tan=cos/sin",
              "csc=1/cos"
            ],
            "answer": 1,
            "explanation": "Dividing sin²+cos²=1 by cos² gives 1+tan²=sec²."
          },
          {
            "prompt": "$1-\\sin^2x$ equals…",
            "options": [
              "cos x",
              "cos²x",
              "tan²x",
              "sec²x"
            ],
            "answer": 1,
            "explanation": "Rearrange the primary Pythagorean identity."
          },
          {
            "prompt": "The best first step for $\\frac{\\tan x}{\\sec x}$ is often…",
            "options": [
              "differentiate",
              "rewrite in sine and cosine",
              "square both sides",
              "take an inverse"
            ],
            "answer": 1,
            "explanation": "tan/sec = (sin/cos)/(1/cos)=sin."
          },
          {
            "prompt": "When verifying an identity, you should…",
            "options": [
              "change both sides until they look similar",
              "work mainly on one side",
              "substitute one angle only",
              "cancel any repeated term"
            ],
            "answer": 1,
            "explanation": "Transform one side through equivalent expressions until it matches the other."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Identities are equations valid throughout a common domain.",
          "Reciprocal and quotient identities come from the six function definitions.",
          "Three Pythagorean identities are generated from the unit circle.",
          "Verification uses valid algebraic transformations, not isolated numerical checks."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "foundations-of-trigonometry",
    "lessonSlug": "beyond-the-unit-circle",
    "title": "Beyond the Unit Circle",
    "objectives": [
      "Define trigonometric functions using any point on a terminal side",
      "Relate a circle of radius $r$ to the unit circle",
      "Use coordinates and radius to evaluate all six functions",
      "Recognize homogeneous scaling of terminal-side points",
      "Apply trigonometry to general circles and coordinate geometry"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "The unit circle is convenient, but the coordinate definitions extend to any nonzero point $(x,y)$ on an angle's terminal side. The distance $r=\\sqrt{x^2+y^2}$ normalizes the point back to the unit circle.",
          "Scaling a terminal-side point changes $x$, $y$, and $r$ by the same factor, so their ratios—and therefore the trigonometric values—do not change."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "six-functions"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "General-coordinate definitions",
        "body": "For a nonzero point $(x,y)$ on the terminal side, let $r=\\sqrt{x^2+y^2}$. Then $\\sin\\theta=y/r$, $\\cos\\theta=x/r$, and $\\tan\\theta=y/x$."
      },
      {
        "kind": "callout",
        "variant": "remember",
        "title": "Radius is positive",
        "body": "Use $r=\\sqrt{x^2+y^2}>0$. The signs of trigonometric functions come from $x$ and $y$, not from assigning a negative radius in this rectangular-coordinate definition."
      },
      {
        "kind": "theory",
        "heading": "Normalizing to the unit circle",
        "paragraphs": [
          "Divide the coordinates by $r$. The point $(x/r,y/r)$ lies on the unit circle because $(x/r)^2+(y/r)^2=1$."
        ]
      },
      {
        "kind": "theory",
        "heading": "All six functions",
        "paragraphs": [
          "Once $x$, $y$, and $r$ are known, every function follows from ratios. This approach is especially useful when the terminal side passes through a convenient lattice point."
        ],
        "list": [
          "$\\sin=y/r$, $\\cos=x/r$, $\\tan=y/x$",
          "$\\csc=r/y$, $\\sec=r/x$, $\\cot=x/y$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Quadrant information",
        "paragraphs": [
          "The coordinate signs immediately identify the quadrant and therefore the signs of the six functions. A point on an axis produces a quadrantal angle and may make some functions undefined."
        ]
      },
      {
        "kind": "theory",
        "heading": "Circle equations",
        "paragraphs": [
          "For a circle centered at the origin with radius $r$, a point at parameter angle $\\theta$ has coordinates $(r\\cos\\theta,r\\sin\\theta)$. This parametrization underlies circular motion."
        ]
      },
      {
        "kind": "formula",
        "latex": "r=\\sqrt{x^2+y^2}",
        "caption": "Distance from the origin."
      },
      {
        "kind": "formula",
        "latex": "(x,y)=(r\\cos\\theta,r\\sin\\theta)",
        "caption": "A circle of radius $r$ centered at the origin."
      },
      {
        "kind": "example",
        "prompt": "The terminal side of $\\theta$ passes through $(-8,15)$. Find the six functions.",
        "steps": [
          "Compute $r=\\sqrt{(-8)^2+15^2}=17$.",
          "Use the general-coordinate ratios.",
          "The point is in Quadrant II, confirming sine positive and cosine negative."
        ],
        "answer": "$\\sin=15/17$, $\\cos=-8/17$, $\\tan=-15/8$, $\\csc=17/15$, $\\sec=-17/8$, $\\cot=-8/15$."
      },
      {
        "kind": "example",
        "prompt": "Write a parametrization of the circle $x^2+y^2=25$.",
        "steps": [
          "The radius is $5$.",
          "Use $x=r\\cos t$ and $y=r\\sin t$."
        ],
        "answer": "$x=5\\cos t$, $y=5\\sin t$, $0\\le t<2\\pi$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using $r=x+y$.",
            "right": "The radius is the Euclidean distance $\\sqrt{x^2+y^2}$."
          },
          {
            "wrong": "Changing trig values when a point is scaled.",
            "right": "Points on the same ray give identical ratios because numerator and denominator scale together."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Robotics",
            "text": "Circular trajectories use coordinate equations with an arbitrary radius."
          },
          {
            "area": "Analytic geometry",
            "text": "A line through the origin can supply a convenient point for exact trigonometric values."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "For point $(3,−4)$, $r$ is…",
            "options": [
              "1",
              "5",
              "7",
              "25"
            ],
            "answer": 1,
            "explanation": "$r=√(9+16)=5$."
          },
          {
            "prompt": "At point $(−5,12)$, cosine is…",
            "options": [
              "5/13",
              "−5/13",
              "12/13",
              "−12/13"
            ],
            "answer": 1,
            "explanation": "r=13 and cos=x/r."
          },
          {
            "prompt": "Which parametrizes a radius-4 circle?",
            "options": [
              "x=cos t,y=sin t",
              "x=4t,y=4t",
              "x=4cos t,y=4sin t",
              "x=cos4t,y=sin4t"
            ],
            "answer": 2,
            "explanation": "Multiplying both unit-circle coordinates by 4 gives radius 4."
          },
          {
            "prompt": "If a terminal-side point is doubled, tangent…",
            "options": [
              "doubles",
              "halves",
              "stays the same",
              "becomes undefined"
            ],
            "answer": 2,
            "explanation": "The ratio y/x is unchanged."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Any nonzero terminal-side point defines the same trigonometric ratios as its normalized unit-circle point.",
          "The positive radius is $r=\\sqrt{x^2+y^2}$.",
          "General circle coordinates are $(r\\cos\\theta,r\\sin\\theta)$.",
          "Scaling a point along a ray leaves all six trigonometric values unchanged."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-graphs-and-applications-of-radian-measure",
    "lessonSlug": "graphs-of-sine-and-cosine-functions",
    "title": "Graphs of the Sine and Cosine Functions",
    "objectives": [
      "Graph the fundamental sine and cosine functions",
      "Identify amplitude, period, midline, phase shift, domain, and range",
      "Graph transformations of sinusoids",
      "Determine even and odd symmetry",
      "Construct a sinusoidal equation from graph features"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "As a point travels around the unit circle, its vertical coordinate traces a sine wave and its horizontal coordinate traces a cosine wave. Both functions are smooth, continuous, and periodic.",
          "Transformations change the wave's height, cycle length, horizontal position, and midline. Reading these parameters from an equation or graph is central to modeling cyclic data."
        ]
      },
      {
        "kind": "trigGraphExplorer",
        "heading": "Explore transformations of trigonometric graphs"
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Sinusoid",
        "body": "A sinusoid is a transformed sine or cosine graph of the form $y=A\\sin(B(x-C))+D$ or $y=A\\cos(B(x-C))+D$."
      },
      {
        "kind": "callout",
        "variant": "remember",
        "title": "Period formula",
        "body": "For sine and cosine, period $P=2\\pi/|B|$. The phase shift is $C$, not necessarily the raw constant visible before factoring $B$."
      },
      {
        "kind": "theory",
        "heading": "Fundamental cycles",
        "paragraphs": [
          "$y=\\sin x$ starts at the midline and rises; $y=\\cos x$ starts at a maximum. Each repeats every $2\\pi$ and has range $[-1,1]$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Transformation parameters",
        "paragraphs": [
          "The absolute value $|A|$ is amplitude. A negative $A$ reflects the graph across its midline. $D$ is the vertical shift and the midline is $y=D$."
        ],
        "list": [
          "Amplitude $=|A|$",
          "Period $=2\\pi/|B|$",
          "Phase shift $=C$",
          "Range $[D-|A|,D+|A|]$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Quarter-point graphing",
        "paragraphs": [
          "One cycle is organized by five key points separated by $P/4$: start, quarter-cycle, half-cycle, three-quarter-cycle, and end. Apply vertical and horizontal transformations to these points."
        ]
      },
      {
        "kind": "theory",
        "heading": "Symmetry",
        "paragraphs": [
          "Sine is odd: $\\sin(-x)=-\\sin x$. Cosine is even: $\\cos(-x)=\\cos x$. The graph of sine has origin symmetry; cosine has $y$-axis symmetry."
        ]
      },
      {
        "kind": "theory",
        "heading": "Writing an equation from a graph",
        "paragraphs": [
          "Read the maximum and minimum to find amplitude and midline. Measure the horizontal length of one cycle for the period, then choose sine or cosine and locate a convenient phase shift."
        ]
      },
      {
        "kind": "formula",
        "latex": "y=A\\sin(B(x-C))+D",
        "caption": "General transformed sine model."
      },
      {
        "kind": "formula",
        "latex": "y=A\\cos(B(x-C))+D",
        "caption": "General transformed cosine model."
      },
      {
        "kind": "formula",
        "latex": "P=\\frac{2\\pi}{|B|}",
        "caption": "Period of a sine or cosine transformation."
      },
      {
        "kind": "example",
        "prompt": "Describe $y=-3\\cos(2(x-\\pi/4))+1$.",
        "steps": [
          "Amplitude is $|-3|=3$ and the negative sign reflects the cosine shape.",
          "Period is $2\\pi/2=\\pi$.",
          "Phase shift is right $\\pi/4$ and midline is $y=1$.",
          "Range is $[1-3,1+3]$."
        ],
        "answer": "Amplitude $3$, period $\\pi$, shift right $\\pi/4$, midline $y=1$, range $[-2,4]$."
      },
      {
        "kind": "example",
        "prompt": "A sinusoid has maximum $9$, minimum $1$, and period $6$. Find amplitude, midline, and a possible $B$.",
        "steps": [
          "Amplitude is half the vertical range: $(9-1)/2=4$.",
          "Midline is the average: $(9+1)/2=5$.",
          "$B=2\\pi/P=\\pi/3$."
        ],
        "answer": "A possible model is $y=4\\cos((\\pi/3)x)+5$ if the graph begins at a maximum."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Calling $A$ the amplitude when $A<0$.",
            "right": "Amplitude is a nonnegative distance, so use $|A|$."
          },
          {
            "wrong": "Using $2\\pi B$ for the period.",
            "right": "The horizontal scaling is reciprocal: $P=2\\pi/|B|$."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Seasonal data",
            "text": "Daylight hours and average temperature can be approximated by sinusoidal models."
          },
          {
            "area": "Sound and vibration",
            "text": "Simple harmonic motion is represented by sine and cosine with physical amplitude and frequency."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The amplitude of $y=-5\\sin x$ is…",
            "options": [
              "−5",
              "5",
              "2π",
              "1/5"
            ],
            "answer": 1,
            "explanation": "Amplitude is |A|."
          },
          {
            "prompt": "The period of $y=\\cos(4x)$ is…",
            "options": [
              "8π",
              "4π",
              "π/2",
              "2π"
            ],
            "answer": 2,
            "explanation": "$2π/4=π/2$."
          },
          {
            "prompt": "The midline of $y=2\\sin x-3$ is…",
            "options": [
              "y=2",
              "y=−3",
              "x=−3",
              "y=−1"
            ],
            "answer": 1,
            "explanation": "The vertical shift D is −3."
          },
          {
            "prompt": "Which function is even?",
            "options": [
              "sine",
              "cosine",
              "tangent",
              "cosecant"
            ],
            "answer": 1,
            "explanation": "cos(−x)=cos x."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Sine and cosine are smooth periodic functions with fundamental period $2\\pi$.",
          "Amplitude, period, phase shift, and vertical shift determine a sinusoid.",
          "Five quarter-cycle points provide an efficient graphing method.",
          "Sine is odd and cosine is even."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-graphs-and-applications-of-radian-measure",
    "lessonSlug": "graphs-of-the-other-trigonometric-functions",
    "title": "Graphs of the Other Trigonometric Functions",
    "objectives": [
      "Graph tangent, cotangent, secant, and cosecant",
      "Locate vertical asymptotes and zeros",
      "Identify periods, domains, and ranges",
      "Transform tangent and cotangent graphs",
      "Use sine or cosine guide curves for reciprocal graphs"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "The remaining four trigonometric functions are periodic but not sinusoidal. Tangent and cotangent have repeated increasing or decreasing branches separated by vertical asymptotes.",
          "Secant and cosecant are reciprocal graphs. Their branches sit outside the bands $-1<y<1$ and inherit vertical asymptotes from zeros of cosine and sine."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "reciprocal-graphs"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Vertical asymptote",
        "body": "A vertical asymptote occurs where a function is undefined and nearby values grow without bound in magnitude. For tangent, these are zeros of cosine."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Guide-function method",
        "body": "Graph the related cosine or sine curve lightly first. Its zeros become asymptotes; its maxima and minima become vertices of secant or cosecant branches."
      },
      {
        "kind": "theory",
        "heading": "Tangent and cotangent",
        "paragraphs": [
          "Tangent has period $\\pi$, zeros at $k\\pi$, and vertical asymptotes at $\\pi/2+k\\pi$. Cotangent also has period $\\pi$, with zeros and asymptotes interchanged."
        ]
      },
      {
        "kind": "theory",
        "heading": "Secant and cosecant",
        "paragraphs": [
          "Secant is $1/\\cos x$ and cosecant is $1/\\sin x$. Their ranges are $(-\\infty,-1]\\cup[1,\\infty)$ because reciprocals of numbers between $-1$ and $1$ have magnitude at least 1."
        ]
      },
      {
        "kind": "theory",
        "heading": "Transformations",
        "paragraphs": [
          "For $y=A\\tan(B(x-C))+D$, the period is $\\pi/|B|$ and the central point is $(C,D)$. For secant and cosecant, use the transformed cosine or sine guide function with the same parameters."
        ]
      },
      {
        "kind": "theory",
        "heading": "Domain notation",
        "paragraphs": [
          "State excluded inputs explicitly or with set notation. A graph crossing an asymptote is never valid; each branch approaches but does not touch the asymptote."
        ]
      },
      {
        "kind": "formula",
        "latex": "P_{\\tan}=P_{\\cot}=\\frac{\\pi}{|B|}",
        "caption": "Period for transformed tangent and cotangent."
      },
      {
        "kind": "formula",
        "latex": "\\operatorname{range}(\\sec x)=\\operatorname{range}(\\csc x)=(-\\infty,-1]\\cup[1,\\infty)",
        "caption": "Ranges of the reciprocal functions."
      },
      {
        "kind": "example",
        "prompt": "Find the period and asymptotes of $y=\\tan(2x)$.",
        "steps": [
          "Period is $\\pi/2$.",
          "Asymptotes occur when $2x=\\pi/2+k\\pi$.",
          "Solve for $x$."
        ],
        "answer": "Period $\\pi/2$; asymptotes $x=\\pi/4+k\\pi/2$."
      },
      {
        "kind": "example",
        "prompt": "Sketching $y=2\\sec x-1$: identify branch vertices and range.",
        "steps": [
          "Use the guide curve $y=2\\cos x-1$.",
          "At cosine maxima, secant has vertex $y=1$; at cosine minima, vertex $y=-3$.",
          "The reciprocal branches extend away from the midline."
        ],
        "answer": "Range is $(-\\infty,-3]\\cup[1,\\infty)$; asymptotes occur at $x=\\pi/2+k\\pi$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Drawing tangent as a continuous sine wave.",
            "right": "Tangent has separate branches and vertical asymptotes."
          },
          {
            "wrong": "Taking the reciprocal of an entire transformed guide value for $A\\sec x+D$.",
            "right": "Transform the secant function as written; use the matching guide $A\\cos x+D$, not $1/(A\\cos x+D)$."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Optics",
            "text": "Secant factors appear when path length changes with angle."
          },
          {
            "area": "Calculus",
            "text": "Asymptotes and domains matter when integrating or differentiating reciprocal trigonometric functions."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The fundamental period of tangent is…",
            "options": [
              "π/2",
              "π",
              "2π",
              "4π"
            ],
            "answer": 1,
            "explanation": "tan(x+π)=tan x."
          },
          {
            "prompt": "Where does $\\sec x$ have vertical asymptotes?",
            "options": [
              "sin x=0",
              "cos x=0",
              "tan x=0",
              "sec x=1"
            ],
            "answer": 1,
            "explanation": "Secant is 1/cos x."
          },
          {
            "prompt": "The range of cosecant excludes…",
            "options": [
              "all negative values",
              "all positive values",
              "values between −1 and 1",
              "only zero"
            ],
            "answer": 2,
            "explanation": "|csc x|≥1."
          },
          {
            "prompt": "The period of $\\cot(3x)$ is…",
            "options": [
              "3π",
              "π/3",
              "2π/3",
              "6π"
            ],
            "answer": 1,
            "explanation": "π/|3|=π/3."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Tangent and cotangent have period $\\pi$ and asymptotic branches.",
          "Secant and cosecant are reciprocal graphs guided by cosine and sine.",
          "Zeros of a denominator become vertical asymptotes.",
          "Transformations alter period, branch location, scale, and midline."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-graphs-and-applications-of-radian-measure",
    "lessonSlug": "applications-of-radian-measure",
    "title": "Applications of Radian Measure",
    "objectives": [
      "Compute arc length and sector area",
      "Relate angular displacement, angular speed, and linear speed",
      "Convert between revolutions and radians in motion problems",
      "Solve wheel, pulley, gear, and rotating-disk applications",
      "Explain why radian measure is required in circle formulas"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Radian measure makes circular formulas compact because $\\theta=s/r$. Multiplying an angular quantity by radius converts it to a linear quantity along the circle.",
          "This relationship governs rotating wheels, gears, turbines, hard drives, amusement rides, and any system in which a point moves around a circle."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "sector-motion"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Angular speed",
        "body": "Angular speed is $\\omega=\\theta/t$, usually measured in radians per unit time. Linear speed along a circle is $v=s/t=r\\omega$."
      },
      {
        "kind": "callout",
        "variant": "remember",
        "title": "Use radians",
        "body": "The formulas $s=r\\theta$ and $A=\\frac12r^2\\theta$ require $\\theta$ in radians. Convert degrees first."
      },
      {
        "kind": "theory",
        "heading": "Arc length",
        "paragraphs": [
          "Arc length is the fraction of the circumference swept by the central angle. In radians the fraction calculation collapses to $s=r\\theta$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Sector area",
        "paragraphs": [
          "A sector is the portion of a disk bounded by two radii and their arc. Its area is the same fraction of the circle's area as $\\theta$ is of $2\\pi$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Linear and angular speed",
        "paragraphs": [
          "All points on a rigid rotating object share angular speed, but points farther from the axis travel faster linearly because $v=r\\omega$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Rotational conversions",
        "paragraphs": [
          "Convert revolutions per minute to radians per minute by multiplying by $2\\pi$. Convert linear units carefully, especially when a final answer requires miles per hour or metres per second."
        ]
      },
      {
        "kind": "formula",
        "latex": "s=r\\theta",
        "caption": "Arc length, with $\\theta$ in radians."
      },
      {
        "kind": "formula",
        "latex": "A=\\frac12r^2\\theta",
        "caption": "Area of a sector."
      },
      {
        "kind": "formula",
        "latex": "\\omega=\\frac{\\theta}{t},\\qquad v=r\\omega",
        "caption": "Angular and linear speed."
      },
      {
        "kind": "example",
        "prompt": "A wheel of radius $0.35$ m turns through $120^\\circ$. Find the arc distance travelled by a point on its rim.",
        "steps": [
          "Convert $120^\\circ=2\\pi/3$ radians.",
          "Use $s=r\\theta=0.35(2\\pi/3)$."
        ],
        "answer": "$s\\approx0.733$ m."
      },
      {
        "kind": "example",
        "prompt": "A disk rotates at $900$ rpm. Find the linear speed at radius $0.08$ m.",
        "steps": [
          "Convert angular speed: $900(2\\pi)=1800\\pi$ rad/min.",
          "Use $v=r\\omega=0.08(1800\\pi)=144\\pi$ m/min.",
          "Divide by 60 for metres per second."
        ],
        "answer": "$v=2.4\\pi\\approx7.54$ m/s."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using degrees directly in $s=r\\theta$.",
            "right": "Convert the angle to radians before applying the formula."
          },
          {
            "wrong": "Assuming every point on a wheel has the same linear speed.",
            "right": "Every point has the same angular speed; linear speed grows with radius."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Mechanical systems",
            "text": "Gear ratios and belt drives transfer angular and linear speed."
          },
          {
            "area": "Transportation",
            "text": "Wheel radius and rotational rate determine vehicle speed."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "For fixed angular speed, doubling radius makes linear speed…",
            "options": [
              "half",
              "unchanged",
              "double",
              "four times"
            ],
            "answer": 2,
            "explanation": "v=rω."
          },
          {
            "prompt": "A full revolution has angular displacement…",
            "options": [
              "π/2",
              "π",
              "2π",
              "360π"
            ],
            "answer": 2,
            "explanation": "One revolution is 2π radians."
          },
          {
            "prompt": "Sector area for $r=3$, $θ=2$ is…",
            "options": [
              "3",
              "6",
              "9",
              "18"
            ],
            "answer": 2,
            "explanation": "A=1/2·9·2=9."
          },
          {
            "prompt": "If $s=10$ and $r=4$, θ is…",
            "options": [
              "0.4 rad",
              "2.5 rad",
              "6 rad",
              "40 rad"
            ],
            "answer": 1,
            "explanation": "θ=s/r=2.5."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Radian measure turns circular proportions into direct multiplication.",
          "Arc length is $s=r\\theta$ and sector area is $A=\\frac12r^2\\theta$.",
          "Angular speed is shared across a rigid body; linear speed depends on radius.",
          "Unit conversion is an essential part of rotational applications."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-identities",
    "lessonSlug": "using-trigonometric-identities",
    "title": "Using Trigonometric Identities",
    "objectives": [
      "State and apply even–odd identities",
      "Use sum and difference identities for sine, cosine, and tangent",
      "Apply cofunction identities",
      "Find exact values of non-standard angles",
      "Verify identities with a valid algebraic chain"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Trigonometric identities describe relationships that hold for every input in their common domain. Symmetry on the unit circle gives the even–odd identities, while angle addition gives the sum and difference formulas.",
          "The aim is not to memorize disconnected rules. Each identity becomes useful when it changes an expression into a form suited to exact evaluation, simplification, proof, or equation solving."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "unit-circle"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Identity toolkit",
        "body": "An identity may be substituted into an expression whenever both forms are defined. Domain restrictions remain part of the statement."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Choose the identity that moves the expression toward a clear target. When verifying, transform one side rather than manipulating both sides independently."
      },
      {
        "kind": "theory",
        "heading": "Even and odd identities",
        "paragraphs": [
          "Cosine and secant are even; sine, cosecant, tangent, and cotangent are odd. These facts follow from reflection across the coordinate axes."
        ],
        "list": [
          "$\\sin(-x)=-\\sin x$",
          "$\\cos(-x)=\\cos x$",
          "$\\tan(-x)=-\\tan x$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Sum and difference formulas",
        "paragraphs": [
          "Angle addition formulas let us break a difficult angle into familiar angles. The cosine formula changes the sign in the middle; the sine formula keeps the operation sign."
        ],
        "list": [
          "$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta$",
          "$\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Tangent and cofunction identities",
        "paragraphs": [
          "The tangent addition formula is obtained by dividing the sine addition formula by the cosine addition formula. Cofunction identities connect complementary angles."
        ],
        "list": [
          "$\\tan(\\alpha\\pm\\beta)=\\dfrac{\\tan\\alpha\\pm\\tan\\beta}{1\\mp\\tan\\alpha\\tan\\beta}$",
          "$\\sin(\\pi/2-x)=\\cos x$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Verification workflow",
        "paragraphs": [
          "Factor, find a common denominator, multiply by a conjugate, or rewrite in sine and cosine. State excluded inputs when an algebraic cancellation changes the visible form."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\sin(\\alpha+\\beta)=\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta",
        "caption": "Sine addition identity."
      },
      {
        "kind": "formula",
        "latex": "\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta",
        "caption": "Cosine difference identity."
      },
      {
        "kind": "formula",
        "latex": "\\tan(\\alpha+\\beta)=\\frac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}",
        "caption": "Tangent addition identity, where defined."
      },
      {
        "kind": "example",
        "prompt": "Find $\\sin75^\\circ$ exactly.",
        "steps": [
          "Write $75^\\circ=45^\\circ+30^\\circ$.",
          "Apply the sine addition identity.",
          "Substitute exact special-angle values and simplify."
        ],
        "answer": "$\\sin75^\\circ=\\frac{\\sqrt6+\\sqrt2}{4}$."
      },
      {
        "kind": "example",
        "prompt": "Verify $\\frac{\\sin(x+y)}{\\cos x\\cos y}=\\tan x+\\tan y$.",
        "steps": [
          "Expand $\\sin(x+y)$.",
          "Split the numerator over the common denominator.",
          "Cancel the appropriate cosine factors on the common domain."
        ],
        "answer": "The left side becomes $\\tan y+\\tan x$, which matches the right side."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Changing the middle sign incorrectly in the cosine formulas.",
            "right": "Cosine uses the opposite sign: $\\cos(\\alpha+\\beta)$ contains a minus."
          },
          {
            "wrong": "Testing several values and calling the result a verification.",
            "right": "A verification requires symbolic transformations valid throughout the common domain."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Signal processing",
            "text": "Phase-shifted waves are expanded and combined with angle identities."
          },
          {
            "area": "Calculus",
            "text": "Identity transformations simplify derivatives, integrals, and limits."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "$\\cos(-x)$ equals…",
            "options": [
              "−cos x",
              "cos x",
              "sin x",
              "−sin x"
            ],
            "answer": 1,
            "explanation": "Cosine is even."
          },
          {
            "prompt": "$\\sin(45^\\circ+30^\\circ)$ begins with…",
            "options": [
              "sin45 sin30 + cos45 cos30",
              "sin45 cos30 + cos45 sin30",
              "cos45 cos30 − sin45 sin30",
              "tan45 + tan30"
            ],
            "answer": 1,
            "explanation": "Use the sine addition formula."
          },
          {
            "prompt": "A useful first move for an expression containing secant and tangent is often…",
            "options": [
              "convert to degrees",
              "rewrite with sine and cosine",
              "differentiate",
              "square every term"
            ],
            "answer": 1,
            "explanation": "Sine and cosine expose common factors and Pythagorean identities."
          },
          {
            "prompt": "$\\sin(\\pi/2-x)$ equals…",
            "options": [
              "−sin x",
              "cos x",
              "tan x",
              "sec x"
            ],
            "answer": 1,
            "explanation": "This is a cofunction identity."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Even–odd identities encode function symmetry.",
          "Sum and difference formulas evaluate compound angles and support proofs.",
          "Cofunction identities connect complementary angles.",
          "Identity verification is a controlled sequence of equivalent expressions."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-identities",
    "lessonSlug": "multiple-angle-identities",
    "title": "Multiple-Angle Identities",
    "objectives": [
      "Derive and use double-angle identities",
      "Use half-angle and power-reduction identities",
      "Convert products to sums and sums to products",
      "Find exact values from partial information",
      "Choose signs correctly in half-angle calculations"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Multiple-angle identities are consequences of the sum and difference formulas. They rewrite functions of $2x$ or $x/2$, reduce powers, and exchange products with sums.",
          "These forms are especially valuable in equation solving and calculus, where one representation may be much easier to manipulate than another."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "sinusoid"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Multiple-angle identity",
        "body": "A multiple-angle identity relates a trigonometric function of a scaled angle to functions of the original angle."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Before applying a half-angle formula, locate the half-angle's quadrant. The radical sign must agree with that quadrant."
      },
      {
        "kind": "theory",
        "heading": "Double-angle formulas",
        "paragraphs": [
          "Set $\\alpha=\\beta=x$ in the addition identities. Cosine has three equivalent double-angle forms, chosen according to the known function."
        ],
        "list": [
          "$\\sin2x=2\\sin x\\cos x$",
          "$\\cos2x=\\cos^2x-\\sin^2x=1-2\\sin^2x=2\\cos^2x-1$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Half-angle formulas",
        "paragraphs": [
          "Solve a cosine double-angle identity for $\\sin^2(x/2)$ or $\\cos^2(x/2)$ and take the square root with the correct sign."
        ],
        "list": [
          "$\\sin(x/2)=\\pm\\sqrt{\\frac{1-\\cos x}{2}}$",
          "$\\cos(x/2)=\\pm\\sqrt{\\frac{1+\\cos x}{2}}$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Power reduction",
        "paragraphs": [
          "Power-reduction formulas replace squared sine or cosine with first powers at double angles. They are indispensable when averaging periodic quantities or integrating even powers."
        ],
        "list": [
          "$\\sin^2x=\\frac{1-\\cos2x}{2}$",
          "$\\cos^2x=\\frac{1+\\cos2x}{2}$"
        ]
      },
      {
        "kind": "theory",
        "heading": "Product–sum conversions",
        "paragraphs": [
          "Product-to-sum formulas linearize products. Sum-to-product formulas expose factors and are useful in equations and wave interference."
        ],
        "list": [
          "$2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B)$"
        ]
      },
      {
        "kind": "formula",
        "latex": "\\sin(2x)=2\\sin x\\cos x",
        "caption": "Double-angle formula for sine."
      },
      {
        "kind": "formula",
        "latex": "\\cos(2x)=1-2\\sin^2x=2\\cos^2x-1",
        "caption": "Equivalent cosine double-angle forms."
      },
      {
        "kind": "formula",
        "latex": "\\sin^2x=\\frac{1-\\cos2x}{2},\\quad \\cos^2x=\\frac{1+\\cos2x}{2}",
        "caption": "Power-reduction identities."
      },
      {
        "kind": "example",
        "prompt": "If $\\sin x=3/5$ and $x$ is in Quadrant II, find $\\sin2x$ and $\\cos2x$.",
        "steps": [
          "In Quadrant II, $\\cos x=-4/5$.",
          "Use $\\sin2x=2\\sin x\\cos x$.",
          "Use $\\cos2x=1-2\\sin^2x$."
        ],
        "answer": "$\\sin2x=-24/25$ and $\\cos2x=7/25$."
      },
      {
        "kind": "example",
        "prompt": "Find $\\cos15^\\circ$ using a half-angle formula.",
        "steps": [
          "Regard $15^\\circ$ as half of $30^\\circ$.",
          "Because $15^\\circ$ is in Quadrant I, choose the positive root.",
          "Substitute $\\cos30^\\circ=\\sqrt3/2$."
        ],
        "answer": "$\\cos15^\\circ=\\frac{\\sqrt{2+\\sqrt3}}{2}$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Forgetting that a half-angle formula has a plus-or-minus sign.",
            "right": "Determine the quadrant of the half-angle before choosing the sign."
          },
          {
            "wrong": "Assuming $\\sin2x=2\\sin x$.",
            "right": "The correct formula is $2\\sin x\\cos x$."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Electrical engineering",
            "text": "Harmonic analysis uses multiple-angle and product-to-sum identities."
          },
          {
            "area": "Calculus",
            "text": "Power-reduction formulas make many trigonometric integrals manageable."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "$\\sin2x$ equals…",
            "options": [
              "2 sin x",
              "2 sin x cos x",
              "sin²x−cos²x",
              "1−2sin x"
            ],
            "answer": 1,
            "explanation": "Use the sine double-angle identity."
          },
          {
            "prompt": "$\\cos2x$ can equal…",
            "options": [
              "1−2sin²x",
              "1−sin²x",
              "2cos x−1",
              "sin x cos x"
            ],
            "answer": 0,
            "explanation": "One standard cosine double-angle form is 1−2sin²x."
          },
          {
            "prompt": "$\\cos^2x$ equals…",
            "options": [
              "(1−cos2x)/2",
              "(1+cos2x)/2",
              "1+sin²x",
              "cos2x/2"
            ],
            "answer": 1,
            "explanation": "This is the cosine power-reduction formula."
          },
          {
            "prompt": "The sign in a half-angle formula depends on…",
            "options": [
              "the quadrant of x only",
              "the quadrant of x/2",
              "whether x is positive",
              "calculator mode"
            ],
            "answer": 1,
            "explanation": "Locate the half-angle itself."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Double-angle formulas follow directly from addition identities.",
          "Half-angle formulas require a quadrant-based sign choice.",
          "Power reduction replaces squares with first powers.",
          "Product–sum conversions reveal useful alternative structures."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-equations",
    "lessonSlug": "inverse-sine-and-cosine-functions",
    "title": "Inverse Sine and Cosine Functions",
    "objectives": [
      "Explain why sine and cosine require restricted domains to have inverses",
      "State the domains and ranges of arcsine and arccosine",
      "Evaluate exact inverse-function values",
      "Simplify compositions while respecting principal ranges",
      "Solve elementary equations with inverse sine or cosine"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Sine and cosine are not one-to-one on all real numbers, so their graphs fail the horizontal-line test. Restricting each to a carefully selected interval creates a one-to-one function with the full range $[-1,1]$.",
          "Their inverses return principal angles. A calculator's inverse key therefore gives one representative angle, not every solution of a trigonometric equation."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "inverse-restrictions"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Principal value",
        "body": "$\\arcsin x$ returns the unique angle in $[-\\pi/2,\\pi/2]$ with sine $x$. $\\arccos x$ returns the unique angle in $[0,\\pi]$ with cosine $x$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Always distinguish an inverse function from a reciprocal: $\\sin^{-1}x=\\arcsin x$, while $1/\\sin x=\\csc x$."
      },
      {
        "kind": "theory",
        "heading": "Restricting the original functions",
        "paragraphs": [
          "Sine is restricted to $[-\\pi/2,\\pi/2]$ and cosine to $[0,\\pi]$. On these intervals each is one-to-one and still attains every value from $-1$ to $1$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Domain and range reversal",
        "paragraphs": [
          "The inverse swaps the original function's domain and range. Therefore both arcsine and arccosine have domain $[-1,1]$, but their output ranges differ."
        ]
      },
      {
        "kind": "theory",
        "heading": "Compositions",
        "paragraphs": [
          "$\\sin(\\arcsin x)=x$ for every $x\\in[-1,1]$. In the reverse order, $\\arcsin(\\sin x)=x$ only when $x$ lies in the principal arcsine interval."
        ]
      },
      {
        "kind": "theory",
        "heading": "Recovering all equation solutions",
        "paragraphs": [
          "Use the principal angle as a reference, then use unit-circle symmetry and periodicity to list every solution in the requested interval or in general form."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\arcsin:[-1,1]\\to[-\\pi/2,\\pi/2]",
        "caption": "Domain and range of inverse sine."
      },
      {
        "kind": "formula",
        "latex": "\\arccos:[-1,1]\\to[0,\\pi]",
        "caption": "Domain and range of inverse cosine."
      },
      {
        "kind": "formula",
        "latex": "\\sin(\\arcsin x)=x,\\quad \\cos(\\arccos x)=x",
        "caption": "Inverse compositions on $[-1,1]$."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\arcsin(-\\sqrt2/2)$ and $\\arccos(-\\sqrt2/2)$.",
        "steps": [
          "Find standard angles with the required function value.",
          "Choose the result inside each inverse function's principal range."
        ],
        "answer": "$\\arcsin(-\\sqrt2/2)=-\\pi/4$ and $\\arccos(-\\sqrt2/2)=3\\pi/4$."
      },
      {
        "kind": "example",
        "prompt": "Simplify $\\arccos(\\cos(5\\pi/3))$.",
        "steps": [
          "$5\\pi/3$ is outside $[0,\\pi]$.",
          "Find the angle in $[0,\\pi]$ with the same cosine.",
          "Cosine is $1/2$ at $\\pi/3$."
        ],
        "answer": "$\\arccos(\\cos(5\\pi/3))=\\pi/3$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Returning $5\\pi/3$ from arccos because its cosine is correct.",
            "right": "Arccos outputs only values in $[0,\\pi]$."
          },
          {
            "wrong": "Treating arcsin as cosecant.",
            "right": "Arcsine is an inverse function; cosecant is a reciprocal."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Surveying software",
            "text": "Inverse functions recover an angle from measured component ratios."
          },
          {
            "area": "Robotics",
            "text": "Principal inverse angles are used when converting coordinates to joint or heading angles."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The range of arcsin is…",
            "options": [
              "[0,2π]",
              "[−π/2,π/2]",
              "[0,π]",
              "all real numbers"
            ],
            "answer": 1,
            "explanation": "This restricted interval makes sine one-to-one."
          },
          {
            "prompt": "$\\arccos(-1)$ is…",
            "options": [
              "−π",
              "0",
              "π/2",
              "π"
            ],
            "answer": 3,
            "explanation": "Cos π = −1 and π is in the principal range."
          },
          {
            "prompt": "$\\sin(\\arcsin 0.4)$ equals…",
            "options": [
              "−0.4",
              "0.4",
              "arcsin 0.4",
              "undefined"
            ],
            "answer": 1,
            "explanation": "The inverse composition returns the input."
          },
          {
            "prompt": "$\\arcsin(2)$ is…",
            "options": [
              "π/2",
              "2π",
              "undefined over the reals",
              "1/2"
            ],
            "answer": 2,
            "explanation": "The domain is [−1,1]."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Domain restrictions make sine and cosine invertible.",
          "Inverse functions return principal angles in fixed ranges.",
          "Compositions simplify only under the correct domain conditions.",
          "Equation solving requires adding symmetry and periodicity after finding a principal angle."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-equations",
    "lessonSlug": "the-other-inverse-trigonometric-functions",
    "title": "The Other Inverse Trigonometric Functions",
    "objectives": [
      "State principal domains and ranges for arctangent, arccotangent, arcsecant, and arccosecant",
      "Evaluate exact inverse values",
      "Simplify inverse-trigonometric compositions",
      "Construct triangles to evaluate expressions such as $\\sin(\\arctan x)$",
      "Use range restrictions to select valid principal angles"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Tangent, cotangent, secant, and cosecant also need restricted domains before inverse functions can be defined. The restrictions are selected to make each function one-to-one while covering its natural range.",
          "Arctangent is especially important because its domain is every real number. Arcsecant and arccosecant accept only values whose magnitude is at least one."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "inverse-restrictions"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Inverse tangent",
        "body": "$\\arctan x$ is the unique angle in $(-\\pi/2,\\pi/2)$ whose tangent is $x$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "When evaluating a nested expression, draw a reference triangle for the principal angle and use the stated range to determine signs."
      },
      {
        "kind": "theory",
        "heading": "Arctangent and arccotangent",
        "paragraphs": [
          "Arctangent has domain all real numbers and range $(-\\pi/2,\\pi/2)$. A common convention gives arccotangent range $(0,\\pi)$; use the convention stated by the course."
        ]
      },
      {
        "kind": "theory",
        "heading": "Arcsecant and arccosecant",
        "paragraphs": [
          "Their domains are $(-\\infty,-1]\\cup[1,\\infty)$. Principal ranges omit angles where the corresponding reciprocal function is undefined or duplicate-valued."
        ]
      },
      {
        "kind": "theory",
        "heading": "Triangle method",
        "paragraphs": [
          "Let $\\theta$ equal the inverse expression. Translate the defining ratio into a right triangle, determine the missing side with Pythagoras, and evaluate the requested function."
        ]
      },
      {
        "kind": "theory",
        "heading": "Composition limits",
        "paragraphs": [
          "$\\tan(\\arctan x)=x$ for all real $x$. The reverse composition equals $x$ only when $x$ is inside the principal arctangent range."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\arctan:\\mathbb{R}\\to(-\\pi/2,\\pi/2)",
        "caption": "Domain and principal range of inverse tangent."
      },
      {
        "kind": "formula",
        "latex": "\\operatorname{dom}(\\operatorname{arcsec})=(-\\infty,-1]\\cup[1,\\infty)",
        "caption": "Real domain of inverse secant."
      },
      {
        "kind": "formula",
        "latex": "\\tan(\\arctan x)=x",
        "caption": "Inverse composition for every real input."
      },
      {
        "kind": "example",
        "prompt": "Evaluate $\\arctan(-\\sqrt3)$.",
        "steps": [
          "Tangent has magnitude $\\sqrt3$ at a reference angle $\\pi/3$.",
          "The arctangent range allows negative Quadrant IV angles but excludes Quadrant II.",
          "Choose the negative principal angle."
        ],
        "answer": "$\\arctan(-\\sqrt3)=-\\pi/3$."
      },
      {
        "kind": "example",
        "prompt": "Find $\\sin(\\arctan(3/4))$.",
        "steps": [
          "Let $\\theta=\\arctan(3/4)$, so opposite $=3$ and adjacent $=4$.",
          "The hypotenuse is $5$.",
          "The principal arctangent angle lies in Quadrant I because the ratio is positive."
        ],
        "answer": "$\\sin(\\arctan(3/4))=3/5$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Choosing a Quadrant II answer for a negative arctangent.",
            "right": "The principal arctangent range uses Quadrants I and IV."
          },
          {
            "wrong": "Allowing an arcsecant input between −1 and 1.",
            "right": "No real secant value has magnitude below one."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Computer graphics",
            "text": "Arctangent converts slopes into orientation angles."
          },
          {
            "area": "Navigation",
            "text": "Inverse tangent helps recover headings from north–east displacement components."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The domain of arctan is…",
            "options": [
              "[−1,1]",
              "all real numbers",
              "[0,π]",
              "|x|≥1"
            ],
            "answer": 1,
            "explanation": "Tangent reaches every real value on its restricted interval."
          },
          {
            "prompt": "$\\arctan(1)$ is…",
            "options": [
              "π/6",
              "π/4",
              "π/2",
              "3π/4"
            ],
            "answer": 1,
            "explanation": "tan π/4 = 1."
          },
          {
            "prompt": "Which is in the real domain of arcsec?",
            "options": [
              "0",
              "1/2",
              "−3/4",
              "−2"
            ],
            "answer": 3,
            "explanation": "Arcsec requires |x|≥1."
          },
          {
            "prompt": "To find $\\cos(\\arctan x)$, a useful method is…",
            "options": [
              "differentiate",
              "construct a right triangle",
              "convert x to degrees",
              "use sector area"
            ],
            "answer": 1,
            "explanation": "The tangent ratio determines two sides of a reference triangle."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Every inverse trigonometric function uses a one-to-one restriction.",
          "Arctangent accepts all real inputs and returns angles in Quadrants I or IV.",
          "Arcsecant and arccosecant require input magnitude at least one.",
          "Reference triangles simplify nested inverse-trigonometric expressions."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-equations",
    "lessonSlug": "inverse-functions-and-trigonometric-equations",
    "title": "Inverse Functions and Trigonometric Equations",
    "objectives": [
      "Use inverse trigonometric functions to obtain reference angles",
      "Find all solutions on a specified interval",
      "Express general solution families",
      "Solve equations of the form $A\\sin(Bx-C)+D=k$",
      "Check candidate solutions against the original equation"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "An inverse trigonometric function gives one principal angle. A trigonometric equation generally has more solutions because the functions repeat and often share a value at symmetric points in a cycle.",
          "A complete solution therefore combines inverse functions, unit-circle symmetry, periodicity, and interval restrictions."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "unit-circle"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Reference solution",
        "body": "A reference solution is the principal angle obtained from an inverse function. It is a starting point, not automatically the complete answer set."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Isolate the trigonometric function first. If the resulting ratio lies outside the function's range, the equation has no real solution."
      },
      {
        "kind": "theory",
        "heading": "Sine equations",
        "paragraphs": [
          "For $\\sin x=a$, use $\\alpha=\\arcsin a$. Over one full cycle, the solutions are $x=\\alpha$ and $x=\\pi-\\alpha$, interpreted modulo $2\\pi$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Cosine equations",
        "paragraphs": [
          "For $\\cos x=a$, use $\\alpha=\\arccos a$ in $[0,\\pi]$. The second angle in a full cycle is $2\\pi-\\alpha$ unless it coincides with the first."
        ]
      },
      {
        "kind": "theory",
        "heading": "Tangent equations",
        "paragraphs": [
          "Tangent has period $\\pi$, so one principal solution generates the complete family $x=\\arctan a+k\\pi$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Transformed inputs",
        "paragraphs": [
          "After solving for the inner angle $u=Bx-C$, solve the linear equations for $x$. A transformed period can create more or fewer solutions inside a fixed interval."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\sin x=a:\\quad x=\\arcsin a+2\\pi k\\ \\text{or}\\ x=\\pi-\\arcsin a+2\\pi k",
        "caption": "General sine solution."
      },
      {
        "kind": "formula",
        "latex": "\\cos x=a:\\quad x=\\pm\\arccos a+2\\pi k",
        "caption": "Compact general cosine solution."
      },
      {
        "kind": "formula",
        "latex": "\\tan x=a:\\quad x=\\arctan a+\\pi k",
        "caption": "General tangent solution."
      },
      {
        "kind": "example",
        "prompt": "Solve $2\\sin x-1=0$ for $0\\le x<2\\pi$.",
        "steps": [
          "Isolate sine: $\\sin x=1/2$.",
          "The reference angle is $\\pi/6$.",
          "Sine is positive in Quadrants I and II."
        ],
        "answer": "$x=\\pi/6$ or $x=5\\pi/6$."
      },
      {
        "kind": "example",
        "prompt": "Solve $\\cos(2x)=-\\sqrt2/2$ for $0\\le x<2\\pi$.",
        "steps": [
          "Let $u=2x$, so $0\\le u<4\\pi$.",
          "Within two cycles, cosine is $-\\sqrt2/2$ at $u=3\\pi/4,5\\pi/4,11\\pi/4,13\\pi/4$.",
          "Divide each value by 2."
        ],
        "answer": "$x=3\\pi/8,5\\pi/8,11\\pi/8,13\\pi/8$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Reporting only the calculator's principal angle.",
            "right": "Use symmetry and periodicity to find every required solution."
          },
          {
            "wrong": "Applying the interval for $x$ directly to the transformed angle $Bx-C$.",
            "right": "Translate the interval to the inner angle before enumerating cycles."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "AC circuits",
            "text": "Phase times satisfying a voltage or current threshold are found by solving trigonometric equations."
          },
          {
            "area": "Astronomy",
            "text": "Periodic visibility and altitude conditions lead to interval-based trigonometric equations."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Solutions of $\\tan x=1$ repeat every…",
            "options": [
              "π/2",
              "π",
              "2π",
              "4π"
            ],
            "answer": 1,
            "explanation": "Tangent's period is π."
          },
          {
            "prompt": "On $[0,2π)$, $\\cos x=0$ at…",
            "options": [
              "0 and π",
              "π/2 and 3π/2",
              "π/4 and 7π/4",
              "only π/2"
            ],
            "answer": 1,
            "explanation": "Cosine is zero on the vertical axis."
          },
          {
            "prompt": "If isolating sine gives $\\sin x=1.4$, the real equation has…",
            "options": [
              "one solution",
              "two solutions",
              "infinitely many solutions",
              "no solution"
            ],
            "answer": 3,
            "explanation": "Sine values lie between −1 and 1."
          },
          {
            "prompt": "For $\\sin x=a$, the second one-cycle solution is based on…",
            "options": [
              "$2π−α$",
              "$π−α$",
              "$π+α$",
              "$α/2$"
            ],
            "answer": 1,
            "explanation": "Sine has equal values at supplementary angles."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Inverse functions provide principal reference angles.",
          "Unit-circle symmetry supplies other solutions in one cycle.",
          "Periodicity generates general solution families.",
          "Transformed arguments require careful interval conversion and final checking."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "trigonometric-equations",
    "lessonSlug": "solving-general-trigonometric-equations",
    "title": "Solving General Trigonometric Equations",
    "objectives": [
      "Solve equations by factoring",
      "Use identities to rewrite equations in one function",
      "Solve equations containing multiple angles",
      "Recognize quadratic form in a trigonometric expression",
      "Detect extraneous or excluded solutions"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "General trigonometric equations often combine several functions, powers, or angles. The strategy is algebraic: simplify, use identities, factor or substitute, then solve each elementary trigonometric equation.",
          "Because identities and division steps can alter visible restrictions, every candidate should be checked against the original equation."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "sinusoid"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Trigonometric polynomial",
        "body": "An equation such as $2\\sin^2x-3\\sin x+1=0$ is quadratic in $\\sin x$. A temporary variable makes its algebraic structure explicit."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Before dividing by a trigonometric expression, consider the case in which that expression is zero; otherwise valid solutions may be lost."
      },
      {
        "kind": "theory",
        "heading": "Factoring",
        "paragraphs": [
          "Move all terms to one side and factor. Apply the zero-product property, then solve each trigonometric factor separately."
        ]
      },
      {
        "kind": "theory",
        "heading": "Rewriting with identities",
        "paragraphs": [
          "Use Pythagorean, reciprocal, quotient, or multiple-angle identities to express the equation in one function or one angle."
        ]
      },
      {
        "kind": "theory",
        "heading": "Quadratic substitution",
        "paragraphs": [
          "Let $u=\\sin x$, $u=\\cos x$, or another repeated expression. Solve the algebraic equation, reject values outside the function's range, then return to $x$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Multiple-angle equations",
        "paragraphs": [
          "Solve first for the entire inner angle. Expand the interval accordingly, list all inner-angle solutions, then divide or otherwise isolate $x$."
        ]
      },
      {
        "kind": "formula",
        "latex": "2\\sin^2x-3\\sin x+1=(2\\sin x-1)(\\sin x-1)",
        "caption": "A quadratic trigonometric factorization."
      },
      {
        "kind": "formula",
        "latex": "\\sin2x=2\\sin x\\cos x",
        "caption": "A multiple-angle identity that often exposes factors."
      },
      {
        "kind": "formula",
        "latex": "\\sin^2x=1-\\cos^2x",
        "caption": "Rewrite in a single function."
      },
      {
        "kind": "example",
        "prompt": "Solve $2\\sin^2x-3\\sin x+1=0$ on $[0,2\\pi)$.",
        "steps": [
          "Factor as $(2\\sin x-1)(\\sin x-1)=0$.",
          "Solve $\\sin x=1/2$ and $\\sin x=1$.",
          "List the corresponding unit-circle angles."
        ],
        "answer": "$x=\\pi/6,\\pi/2,5\\pi/6$."
      },
      {
        "kind": "example",
        "prompt": "Solve $\\sin2x=\\sin x$ on $[0,2\\pi)$.",
        "steps": [
          "Rewrite $\\sin2x$ as $2\\sin x\\cos x$.",
          "Move terms and factor: $\\sin x(2\\cos x-1)=0$.",
          "Solve both factors over the interval."
        ],
        "answer": "$x=0,\\pi/3,\\pi,5\\pi/3$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Dividing by $\\sin x$ and losing the solutions where $\\sin x=0$.",
            "right": "Factor first or handle the zero case separately."
          },
          {
            "wrong": "Keeping a substitution value such as $\\cos x=3/2$.",
            "right": "Reject algebraic roots outside the trigonometric function's range."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Control systems",
            "text": "Periodic set-point equations may reduce to trigonometric polynomials."
          },
          {
            "area": "Wave interference",
            "text": "Equal-amplitude and node conditions create factorizable trigonometric equations."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "A good substitution for $3\\cos^2x-2\\cos x-1=0$ is…",
            "options": [
              "u=x²",
              "u=cos x",
              "u=sin 2x",
              "u=tan x"
            ],
            "answer": 1,
            "explanation": "The equation is quadratic in cos x."
          },
          {
            "prompt": "Before dividing by $\\cos x$, you should…",
            "options": [
              "change to degrees",
              "check the case cos x=0",
              "take arccos of both sides",
              "square the equation"
            ],
            "answer": 1,
            "explanation": "Division could discard zero-factor solutions."
          },
          {
            "prompt": "$\\sin2x=0$ implies…",
            "options": [
              "$2x=kπ$",
              "$x=2kπ$ only",
              "$x=π/2$ only",
              "no solutions"
            ],
            "answer": 0,
            "explanation": "Sine is zero at integer multiples of π."
          },
          {
            "prompt": "An algebraic root $\\sin x=-1.2$ should be…",
            "options": [
              "rounded",
              "accepted",
              "rejected",
              "converted to cosine"
            ],
            "answer": 2,
            "explanation": "Sine's range is [−1,1]."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Treat general trigonometric equations as algebraic structures.",
          "Factoring prevents solution loss and separates elementary cases.",
          "Identities can reduce an equation to one function.",
          "Range checks and substitution into the original equation protect against invalid answers."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "beyond-right-triangles",
    "lessonSlug": "the-law-of-sines",
    "title": "The Law of Sines",
    "objectives": [
      "State and apply the Law of Sines",
      "Solve ASA and AAS triangles",
      "Analyze the ambiguous SSA case",
      "Find triangle area from two sides and an included angle",
      "Solve bearings and indirect-distance applications"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "The Law of Sines extends right-triangle ratios to every triangle. Each side is paired with its opposite angle, and the three side-to-sine ratios are equal.",
          "It is most direct when at least one complete opposite pair is known. With SSA information, the inverse sine may correspond to two possible angles, one, or none."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "law-of-sines"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Opposite pair",
        "body": "A side and the angle directly opposite it form an opposite pair. Correct pairing is essential in every Law of Sines proportion."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Sketch and label the triangle before calculating. Keep full calculator precision until the final rounded answer."
      },
      {
        "kind": "theory",
        "heading": "ASA and AAS cases",
        "paragraphs": [
          "Two angles determine the third through the $180^\\circ$ angle sum. Then one known side and its opposite angle provide a complete pair for the Law of Sines."
        ]
      },
      {
        "kind": "theory",
        "heading": "SSA and the ambiguous case",
        "paragraphs": [
          "When an acute angle is recovered with arcsine, its supplement may have the same sine. Test whether each candidate leaves a positive third angle and satisfies the side–angle ordering."
        ]
      },
      {
        "kind": "theory",
        "heading": "Triangle area",
        "paragraphs": [
          "Dropping an altitude shows that the area from sides $a$ and $b$ with included angle $C$ is $K=\\tfrac12ab\\sin C$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Bearings and applications",
        "paragraphs": [
          "Convert compass bearings into interior triangle angles. A clear diagram prevents confusion between a bearing measured from north and the triangle's included angle."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}",
        "caption": "Law of Sines."
      },
      {
        "kind": "formula",
        "latex": "K=\\frac12ab\\sin C",
        "caption": "Area from two sides and their included angle."
      },
      {
        "kind": "formula",
        "latex": "A+B+C=180^\\circ",
        "caption": "Triangle angle sum."
      },
      {
        "kind": "example",
        "prompt": "In a triangle, $A=42^\\circ$, $B=71^\\circ$, and $a=8$. Find $b$.",
        "steps": [
          "Pair $a=8$ with $A=42^\\circ$ and $b$ with $B=71^\\circ$.",
          "Set $b/\\sin71^\\circ=8/\\sin42^\\circ$.",
          "Solve and round at the end."
        ],
        "answer": "$b\\approx11.30$."
      },
      {
        "kind": "example",
        "prompt": "Given $A=30^\\circ$, $a=7$, and $b=10$, determine the possible values of $B$.",
        "steps": [
          "Use $\\sin B=b\\sin A/a=5/7$.",
          "The acute solution is $B_1\\approx45.58^\\circ$.",
          "The supplement $B_2\\approx134.42^\\circ$ also leaves a positive third angle."
        ],
        "answer": "Two triangles are possible: $B\\approx45.58^\\circ$ or $134.42^\\circ$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Pairing a side with an adjacent angle.",
            "right": "Every side must be paired with its opposite angle."
          },
          {
            "wrong": "Accepting only the acute arcsine result in an SSA problem.",
            "right": "Test the supplementary angle whenever it can produce a valid triangle."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Surveying",
            "text": "A measured baseline and sight angles determine inaccessible distances."
          },
          {
            "area": "Navigation",
            "text": "Courses and bearings form oblique triangles solved with the Law of Sines."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The Law of Sines is immediately usable when you know…",
            "options": [
              "only three angles",
              "a side and its opposite angle",
              "three sides only",
              "one angle only"
            ],
            "answer": 1,
            "explanation": "A complete opposite pair anchors the proportion."
          },
          {
            "prompt": "The ambiguous case occurs with…",
            "options": [
              "ASA",
              "AAS",
              "SSA",
              "SSS"
            ],
            "answer": 2,
            "explanation": "SSA can produce zero, one, or two triangles."
          },
          {
            "prompt": "Area from sides 6 and 9 with included angle 30° is…",
            "options": [
              "13.5",
              "27",
              "54",
              "81"
            ],
            "answer": 0,
            "explanation": "K=1/2·6·9·1/2=13.5."
          },
          {
            "prompt": "If larger side b is opposite angle B, then compared with a smaller side a…",
            "options": [
              "B must be smaller",
              "B must be larger",
              "B must equal A",
              "no relationship exists"
            ],
            "answer": 1,
            "explanation": "In a triangle, larger sides face larger angles."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "The Law of Sines matches each side with its opposite angle.",
          "ASA and AAS produce a unique triangle.",
          "SSA may produce zero, one, or two triangles.",
          "The sine area formula and bearing diagrams extend the law to applications."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "beyond-right-triangles",
    "lessonSlug": "the-law-of-cosines",
    "title": "The Law of Cosines",
    "objectives": [
      "Apply the Law of Cosines in SAS and SSS cases",
      "Solve an oblique triangle completely",
      "Classify triangles from side lengths",
      "Use Heron's formula for area",
      "Model distances and resultant displacements"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "The Law of Cosines generalizes the Pythagorean theorem. It is the natural choice when two sides and their included angle are known, or when all three sides are known.",
          "Once one angle–side pair has been established, the remaining information may be found with either cosine or sine methods, while guarding against rounding error."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "law-of-cosines"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Included angle",
        "body": "In the formula for side $c$, angle $C$ is the angle between sides $a$ and $b$ and is opposite $c$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "For SSS data, solve first for the largest angle. This gives a strong reasonableness check and avoids an ambiguous sine step."
      },
      {
        "kind": "theory",
        "heading": "SAS case",
        "paragraphs": [
          "Substitute the two known sides and the included angle to calculate the opposite side. The result is unique."
        ]
      },
      {
        "kind": "theory",
        "heading": "SSS case",
        "paragraphs": [
          "Rearrange the law to isolate a cosine, then apply arccos. The triangle inequality must hold before a triangle exists."
        ]
      },
      {
        "kind": "theory",
        "heading": "Pythagorean connection",
        "paragraphs": [
          "When $C=90^\\circ$, $\\cos C=0$, so the Law of Cosines becomes $c^2=a^2+b^2$. The sign of $\\cos C$ also distinguishes acute and obtuse angles."
        ]
      },
      {
        "kind": "theory",
        "heading": "Heron's formula",
        "paragraphs": [
          "When all three sides are known, compute the semiperimeter $s=(a+b+c)/2$ and area $K=\\sqrt{s(s-a)(s-b)(s-c)}$."
        ]
      },
      {
        "kind": "formula",
        "latex": "c^2=a^2+b^2-2ab\\cos C",
        "caption": "Law of Cosines for side $c$."
      },
      {
        "kind": "formula",
        "latex": "\\cos C=\\frac{a^2+b^2-c^2}{2ab}",
        "caption": "Angle form of the Law of Cosines."
      },
      {
        "kind": "formula",
        "latex": "K=\\sqrt{s(s-a)(s-b)(s-c)},\\quad s=\\frac{a+b+c}{2}",
        "caption": "Heron's formula."
      },
      {
        "kind": "example",
        "prompt": "Two sides are 9 and 12 with included angle $60^\\circ$. Find the opposite side.",
        "steps": [
          "Use $c^2=9^2+12^2-2(9)(12)\\cos60^\\circ$.",
          "Evaluate: $c^2=81+144-108=117$.",
          "Take the positive square root."
        ],
        "answer": "$c=\\sqrt{117}=3\\sqrt{13}\\approx10.82$."
      },
      {
        "kind": "example",
        "prompt": "Find the largest angle of a triangle with sides 5, 7, and 10.",
        "steps": [
          "The largest angle $C$ is opposite side 10.",
          "$\\cos C=(5^2+7^2-10^2)/(2\\cdot5\\cdot7)=-13/35$.",
          "Apply arccos."
        ],
        "answer": "$C\\approx111.8^\\circ$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using a non-included angle in an SAS substitution.",
            "right": "The cosine term must use the angle between the two known sides."
          },
          {
            "wrong": "Rounding an intermediate angle before finding the last side.",
            "right": "Carry full precision through the calculation and round only final results."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Civil engineering",
            "text": "Diagonal checks and triangulated surveys use cosine calculations."
          },
          {
            "area": "Navigation",
            "text": "Two displacement legs and their included turn determine direct distance from the start."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The Law of Cosines is the direct choice for…",
            "options": [
              "ASA",
              "AAS",
              "SAS",
              "one side only"
            ],
            "answer": 2,
            "explanation": "SAS gives two sides and their included angle."
          },
          {
            "prompt": "If $C=90^\\circ$, the cosine law becomes…",
            "options": [
              "the sine rule",
              "the Pythagorean theorem",
              "Heron's formula",
              "sector area"
            ],
            "answer": 1,
            "explanation": "cos 90°=0."
          },
          {
            "prompt": "The semiperimeter of sides 6, 8, 10 is…",
            "options": [
              "12",
              "18",
              "24",
              "48"
            ],
            "answer": 0,
            "explanation": "(6+8+10)/2=12."
          },
          {
            "prompt": "For three known sides, first verify…",
            "options": [
              "the unit circle",
              "the triangle inequality",
              "the angle is acute",
              "all sides are integers"
            ],
            "answer": 1,
            "explanation": "The sum of any two sides must exceed the third."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "The Law of Cosines solves SAS and SSS triangles.",
          "It reduces to Pythagoras for a right angle.",
          "The largest side is paired with the largest angle.",
          "Heron's formula finds area directly from three sides."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "polar-coordinates-and-applications",
    "lessonSlug": "polar-coordinates-and-equations",
    "title": "Polar Coordinates and Equations",
    "objectives": [
      "Plot points in polar coordinates",
      "Find equivalent polar representations",
      "Convert points between polar and rectangular coordinates",
      "Convert equations between coordinate systems",
      "Interpret symmetry in polar descriptions"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Polar coordinates locate a point by a directed distance $r$ from the origin and an angle $\\theta$ from the positive $x$-axis. They are often more natural than rectangular coordinates for rotationally symmetric curves.",
          "A single point has infinitely many polar descriptions because complete turns may be added to the angle and a negative radius reverses direction."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "polar-coordinates"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Polar point",
        "body": "The ordered pair $(r,\\theta)$ means travel a directed distance $r$ along the ray at angle $\\theta$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "When converting equations, use identities rather than replacing symbols blindly. In particular, $x^2+y^2=r^2$ often simplifies an entire equation."
      },
      {
        "kind": "theory",
        "heading": "Equivalent coordinates",
        "paragraphs": [
          "$(r,\\theta+2\\pi k)$ describes the same point. Also $(-r,\\theta+(2k+1)\\pi)$ reaches the same location by reversing the radius."
        ]
      },
      {
        "kind": "theory",
        "heading": "Point conversions",
        "paragraphs": [
          "Rectangular coordinates satisfy $x=r\\cos\\theta$ and $y=r\\sin\\theta$. Conversely, $r^2=x^2+y^2$ and the quadrant must be used when recovering $\\theta$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Equation conversions",
        "paragraphs": [
          "Replace $x$, $y$, or $r^2$ with an appropriate identity, then simplify. Some equations have a cleaner polar form; others are cleaner in rectangular form."
        ]
      },
      {
        "kind": "theory",
        "heading": "Polar geometry",
        "paragraphs": [
          "Equations such as $r=a$ describe circles centered at the pole. Equations such as $\\theta=\\alpha$ describe lines through the pole."
        ]
      },
      {
        "kind": "formula",
        "latex": "x=r\\cos\\theta,\\qquad y=r\\sin\\theta",
        "caption": "Polar to rectangular conversion."
      },
      {
        "kind": "formula",
        "latex": "r^2=x^2+y^2,\\qquad \\tan\\theta=\\frac{y}{x}",
        "caption": "Rectangular to polar relationships."
      },
      {
        "kind": "formula",
        "latex": "(r,\\theta)\\equiv(r,\\theta+2\\pi k)\\equiv(-r,\\theta+(2k+1)\\pi)",
        "caption": "Equivalent polar representations."
      },
      {
        "kind": "example",
        "prompt": "Convert $(r,\\theta)=(4,5\\pi/6)$ to rectangular coordinates.",
        "steps": [
          "Use $x=4\\cos(5\\pi/6)$ and $y=4\\sin(5\\pi/6)$.",
          "Substitute exact unit-circle values."
        ],
        "answer": "$(x,y)=(-2\\sqrt3,2)$."
      },
      {
        "kind": "example",
        "prompt": "Convert $x^2+y^2=6x$ to polar form.",
        "steps": [
          "Replace $x^2+y^2$ with $r^2$ and $x$ with $r\\cos\\theta$.",
          "Obtain $r^2=6r\\cos\\theta$.",
          "The simplified curve equation is $r=6\\cos\\theta$, with the pole included."
        ],
        "answer": "$r=6\\cos\\theta$, a circle of radius 3 centered at $(3,0)$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using arctangent without correcting the quadrant.",
            "right": "Use the signs of $x$ and $y$, or an atan2-style interpretation, to select the angle."
          },
          {
            "wrong": "Assuming a polar point has only one coordinate pair.",
            "right": "Adding full turns or reversing the radius gives equivalent representations."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Radar",
            "text": "Targets are naturally reported by range and bearing."
          },
          {
            "area": "Robotics",
            "text": "Range sensors and rotating scanners generate polar measurements."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "For $(r,θ)=(2,π/2)$, the rectangular point is…",
            "options": [
              "(2,0)",
              "(0,2)",
              "(−2,0)",
              "(0,−2)"
            ],
            "answer": 1,
            "explanation": "x=0 and y=2."
          },
          {
            "prompt": "$x^2+y^2$ equals…",
            "options": [
              "r",
              "r²",
              "θ²",
              "tan θ"
            ],
            "answer": 1,
            "explanation": "This is the radial-distance identity."
          },
          {
            "prompt": "A coordinate equivalent to $(3,π/4)$ is…",
            "options": [
              "(3,5π/4)",
              "(−3,5π/4)",
              "(−3,π/4)",
              "(3,3π/4)"
            ],
            "answer": 1,
            "explanation": "Reverse r and add π."
          },
          {
            "prompt": "The polar equation $r=5$ describes…",
            "options": [
              "a vertical line",
              "a circle centered at the pole",
              "a parabola",
              "one point"
            ],
            "answer": 1,
            "explanation": "Every point lies five units from the pole."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Polar coordinates encode distance and direction.",
          "A point has infinitely many equivalent polar representations.",
          "The standard conversion identities connect polar and rectangular systems.",
          "Polar equations often simplify curves with circular symmetry."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "polar-coordinates-and-applications",
    "lessonSlug": "graphing-polar-equations",
    "title": "Graphing Polar Equations",
    "objectives": [
      "Test polar equations for common symmetries",
      "Create a polar value table",
      "Graph circles, cardioids, limacons, roses, and lemniscates",
      "Determine key radii and pole crossings",
      "Relate algebraic parameters to curve shape"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "A polar graph is traced as the angle changes and the signed radius determines the point. Negative radii can reflect a point through the pole, creating loops and petals that are unfamiliar in rectangular graphing.",
          "Symmetry tests, strategic angles, zeros, and maximum radius provide a reliable sketch before technology is used for confirmation."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "polar-curves"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Pole crossing",
        "body": "A polar curve passes through the pole whenever $r=0$ for some allowed angle."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Build a table at standard angles and include angles that make sine or cosine zero or extreme. Do not rely only on a calculator window."
      },
      {
        "kind": "theory",
        "heading": "Symmetry tests",
        "paragraphs": [
          "Replacing $\\theta$ by $-\\theta$ tests symmetry about the polar axis. Replacing $\\theta$ by $\\pi-\\theta$ tests symmetry about the vertical axis. Replacing $r$ by $-r$ tests symmetry about the pole."
        ]
      },
      {
        "kind": "theory",
        "heading": "Circles and limacons",
        "paragraphs": [
          "Equations $r=a\\cos\\theta$ and $r=a\\sin\\theta$ are circles. Equations $r=a\\pm b\\cos\\theta$ or $a\\pm b\\sin\\theta$ produce limacons, including cardioids when $|a|=|b|$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Rose curves",
        "paragraphs": [
          "For $r=a\\cos(n\\theta)$ or $a\\sin(n\\theta)$, odd $n$ gives $n$ petals and even $n$ gives $2n$ petals."
        ]
      },
      {
        "kind": "theory",
        "heading": "Lemniscates",
        "paragraphs": [
          "Equations $r^2=a^2\\cos2\\theta$ or $r^2=a^2\\sin2\\theta$ trace two-loop figures. Only angles yielding $r^2\\ge0$ produce real points."
        ]
      },
      {
        "kind": "formula",
        "latex": "r=a\\pm b\\cos\\theta\\quad\\text{or}\\quad r=a\\pm b\\sin\\theta",
        "caption": "Limacon family."
      },
      {
        "kind": "formula",
        "latex": "r=a\\cos(n\\theta)\\quad\\text{or}\\quad r=a\\sin(n\\theta)",
        "caption": "Rose-curve family."
      },
      {
        "kind": "formula",
        "latex": "r^2=a^2\\cos2\\theta",
        "caption": "A lemniscate aligned with the polar axis."
      },
      {
        "kind": "example",
        "prompt": "Describe $r=4\\cos3\\theta$.",
        "steps": [
          "This is a rose curve with odd $n=3$, so it has three petals.",
          "The maximum radius is 4.",
          "A cosine rose has one petal centered on the polar axis."
        ],
        "answer": "A three-petal rose with petal length 4."
      },
      {
        "kind": "example",
        "prompt": "Find the pole crossings of $r=2-2\\sin\\theta$ on $[0,2\\pi)$.",
        "steps": [
          "Set $r=0$: $2-2\\sin\\theta=0$.",
          "Thus $\\sin\\theta=1$.",
          "On the interval, $\\theta=\\pi/2$."
        ],
        "answer": "The cardioid reaches the pole at $\\theta=\\pi/2$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Counting only $n$ petals for every rose curve.",
            "right": "Even $n$ produces $2n$ petals; odd $n$ produces $n$."
          },
          {
            "wrong": "Discarding negative $r$ values.",
            "right": "A negative radius plots in the opposite direction and is part of the curve."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Antenna design",
            "text": "Radiation patterns are commonly shown as polar curves."
          },
          {
            "area": "Acoustics",
            "text": "Directional microphone sensitivity is represented by cardioid and related patterns."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "$r=3\\cos2θ$ has how many petals?",
            "options": [
              "2",
              "3",
              "4",
              "6"
            ],
            "answer": 2,
            "explanation": "Even n gives 2n petals."
          },
          {
            "prompt": "A cardioid occurs in the limacon family when…",
            "options": [
              "a=0",
              "|a|=|b|",
              "b=0",
              "a²+b²=1"
            ],
            "answer": 1,
            "explanation": "Equal magnitudes create the cusp at the pole."
          },
          {
            "prompt": "To find a pole crossing, solve…",
            "options": [
              "θ=0",
              "r=0",
              "r=1",
              "dr/dθ=0 only"
            ],
            "answer": 1,
            "explanation": "The pole has radius zero."
          },
          {
            "prompt": "Replacing θ with −θ tests symmetry about…",
            "options": [
              "the pole",
              "the polar axis",
              "the vertical axis",
              "the line θ=π/4"
            ],
            "answer": 1,
            "explanation": "This is the polar-axis symmetry test."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Polar graphing uses signed radius and changing direction.",
          "Symmetry and key-angle tables organize an accurate sketch.",
          "Parameter relationships classify limacons, roses, and lemniscates.",
          "Zeros of radius identify pole crossings."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "polar-coordinates-and-applications",
    "lessonSlug": "polar-representations-of-complex-numbers",
    "title": "Polar Representations of Complex Numbers",
    "objectives": [
      "Plot complex numbers in the complex plane",
      "Convert between rectangular and polar form",
      "Find modulus and argument",
      "Use trigonometric and exponential notation",
      "Interpret complex conjugates geometrically"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "A complex number $z=x+iy$ is a point or vector in the complex plane. Polar form describes the same number by its modulus $r$ and argument $\\theta$.",
          "This representation exposes multiplication as a combination of scaling and rotation, preparing for efficient powers and roots."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "complex-plane"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Modulus and argument",
        "body": "For $z=x+iy$, the modulus is $|z|=\\sqrt{x^2+y^2}$. An argument is any angle $\\theta$ locating the point; arguments differ by $2\\pi k$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Use the quadrant of $(x,y)$ when finding an argument. A raw arctangent value may point to the wrong quadrant."
      },
      {
        "kind": "theory",
        "heading": "Rectangular form",
        "paragraphs": [
          "The real part is the horizontal coordinate and the imaginary part is the vertical coordinate. Addition and subtraction are component-wise."
        ]
      },
      {
        "kind": "theory",
        "heading": "Trigonometric polar form",
        "paragraphs": [
          "Substitute $x=r\\cos\\theta$ and $y=r\\sin\\theta$ to obtain $z=r(\\cos\\theta+i\\sin\\theta)$. The abbreviation $\\operatorname{cis}\\theta$ is sometimes used."
        ]
      },
      {
        "kind": "theory",
        "heading": "Exponential form",
        "paragraphs": [
          "Euler's identity $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ gives the compact form $z=re^{i\\theta}$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Conjugates",
        "paragraphs": [
          "The conjugate $\\bar z=x-iy$ reflects $z$ across the real axis. It has the same modulus and an opposite argument modulo $2\\pi$."
        ]
      },
      {
        "kind": "formula",
        "latex": "z=x+iy=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}",
        "caption": "Equivalent rectangular, trigonometric, and exponential forms."
      },
      {
        "kind": "formula",
        "latex": "r=|z|=\\sqrt{x^2+y^2}",
        "caption": "Modulus of a complex number."
      },
      {
        "kind": "formula",
        "latex": "z\\bar z=|z|^2",
        "caption": "Product with the complex conjugate."
      },
      {
        "kind": "example",
        "prompt": "Write $z=-1+i\\sqrt3$ in polar form.",
        "steps": [
          "$r=\\sqrt{1+3}=2$.",
          "The point is in Quadrant II with reference angle $\\pi/3$.",
          "Therefore an argument is $2\\pi/3$."
        ],
        "answer": "$z=2(\\cos(2\\pi/3)+i\\sin(2\\pi/3))=2e^{2\\pi i/3}$."
      },
      {
        "kind": "example",
        "prompt": "Convert $4e^{-i\\pi/6}$ to rectangular form.",
        "steps": [
          "Use $x=4\\cos(-\\pi/6)$ and $y=4\\sin(-\\pi/6)$.",
          "Substitute exact values."
        ],
        "answer": "$z=2\\sqrt3-2i$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Using $\\arctan(y/x)$ without checking the quadrant.",
            "right": "Locate the complex point first and select the corresponding argument."
          },
          {
            "wrong": "Writing the modulus as a negative number.",
            "right": "The modulus is a nonnegative distance from the origin."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Electrical engineering",
            "text": "AC phasors use polar complex numbers to encode amplitude and phase."
          },
          {
            "area": "Control theory",
            "text": "Frequency response is analyzed through complex magnitude and argument."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "The modulus of $3+4i$ is…",
            "options": [
              "3",
              "4",
              "5",
              "7"
            ],
            "answer": 2,
            "explanation": "√(9+16)=5."
          },
          {
            "prompt": "Multiplying an argument by adding $2π$ changes…",
            "options": [
              "the complex number",
              "only its representation",
              "the modulus",
              "the real part only"
            ],
            "answer": 1,
            "explanation": "Arguments differing by full turns are coterminal."
          },
          {
            "prompt": "The conjugate of $2-5i$ is…",
            "options": [
              "−2+5i",
              "2+5i",
              "−2−5i",
              "5+2i"
            ],
            "answer": 1,
            "explanation": "Change the sign of the imaginary part."
          },
          {
            "prompt": "$e^{iθ}$ equals…",
            "options": [
              "sinθ+i cosθ",
              "cosθ+i sinθ",
              "cosθ−i sinθ",
              "θ+i"
            ],
            "answer": 1,
            "explanation": "Euler's identity."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Complex numbers are points in a two-dimensional plane.",
          "Modulus and argument provide polar coordinates for a complex number.",
          "Trigonometric and exponential forms are equivalent.",
          "Conjugation reflects a complex number across the real axis."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "polar-coordinates-and-applications",
    "lessonSlug": "complex-products-powers-quotients-and-roots",
    "title": "Complex Products, Powers, Quotients, and Roots",
    "objectives": [
      "Multiply and divide complex numbers in polar form",
      "Apply De Moivre's theorem",
      "Compute integer powers efficiently",
      "Find all $n$th roots of a complex number",
      "Interpret products and roots as rotations and scalings"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Polar form turns complex multiplication into multiplication of moduli and addition of arguments. Division reverses those operations.",
          "De Moivre's theorem extends the pattern to powers, while roots distribute evenly around a circle in the complex plane."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "complex-plane"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "De Moivre's theorem",
        "body": "For integer $n$, $[r(\\cos\\theta+i\\sin\\theta)]^n=r^n[\\cos(n\\theta)+i\\sin(n\\theta)]$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "When finding roots, list exactly $n$ values using $k=0,1,\\ldots,n-1$. Further values repeat."
      },
      {
        "kind": "theory",
        "heading": "Products",
        "paragraphs": [
          "Multiply moduli and add arguments. Geometrically, the product scales by one modulus and rotates by one argument."
        ]
      },
      {
        "kind": "theory",
        "heading": "Quotients",
        "paragraphs": [
          "Divide moduli and subtract arguments, provided the divisor is nonzero."
        ]
      },
      {
        "kind": "theory",
        "heading": "Powers",
        "paragraphs": [
          "De Moivre's theorem avoids repeated rectangular multiplication. Reduce the final argument modulo $2\\pi$ when a principal representation is wanted."
        ]
      },
      {
        "kind": "theory",
        "heading": "Roots",
        "paragraphs": [
          "The $n$th roots have modulus $r^{1/n}$ and arguments $(\\theta+2\\pi k)/n$. They are equally spaced by $2\\pi/n$."
        ]
      },
      {
        "kind": "formula",
        "latex": "z_1z_2=r_1r_2\\operatorname{cis}(\\theta_1+\\theta_2)",
        "caption": "Product rule in polar form."
      },
      {
        "kind": "formula",
        "latex": "\\frac{z_1}{z_2}=\\frac{r_1}{r_2}\\operatorname{cis}(\\theta_1-\\theta_2)",
        "caption": "Quotient rule, $z_2\\ne0$."
      },
      {
        "kind": "formula",
        "latex": "z_k=r^{1/n}\\operatorname{cis}\\left(\\frac{\\theta+2\\pi k}{n}\\right),\\quad k=0,\\ldots,n-1",
        "caption": "All $n$th roots."
      },
      {
        "kind": "example",
        "prompt": "Compute $[2\\operatorname{cis}(\\pi/6)]^4$.",
        "steps": [
          "Raise the modulus: $2^4=16$.",
          "Multiply the argument: $4(\\pi/6)=2\\pi/3$.",
          "Write the result in polar or rectangular form."
        ],
        "answer": "$16\\operatorname{cis}(2\\pi/3)=-8+8\\sqrt3i$."
      },
      {
        "kind": "example",
        "prompt": "Find the cube roots of $8$.",
        "steps": [
          "Write $8=8\\operatorname{cis}(0)$.",
          "Each root has modulus $2$ and argument $(2\\pi k)/3$.",
          "Use $k=0,1,2$."
        ],
        "answer": "$2$, $-1+i\\sqrt3$, and $-1-i\\sqrt3$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Adding moduli when multiplying.",
            "right": "Multiply moduli; add arguments."
          },
          {
            "wrong": "Giving only the principal root.",
            "right": "An $n$th-root problem has $n$ distinct complex roots when the number is nonzero."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Digital signal processing",
            "text": "Complex exponentials simplify oscillation, filtering, and phase calculations."
          },
          {
            "area": "Electrical networks",
            "text": "Products and quotients of phasors encode gain and phase shift."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "When multiplying polar complex numbers, arguments are…",
            "options": [
              "multiplied",
              "added",
              "divided",
              "unchanged"
            ],
            "answer": 1,
            "explanation": "Multiplication combines rotations by adding angles."
          },
          {
            "prompt": "The fourth roots of a nonzero complex number are separated by…",
            "options": [
              "π/4",
              "π/2",
              "π",
              "2π"
            ],
            "answer": 1,
            "explanation": "Spacing is 2π/4=π/2."
          },
          {
            "prompt": "In De Moivre's theorem, the modulus is…",
            "options": [
              "multiplied by n",
              "raised to power n",
              "divided by n",
              "left unchanged"
            ],
            "answer": 1,
            "explanation": "The modulus becomes r^n."
          },
          {
            "prompt": "For a quotient, arguments are…",
            "options": [
              "added",
              "subtracted",
              "squared",
              "ignored"
            ],
            "answer": 1,
            "explanation": "Division subtracts the divisor's argument."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Polar multiplication combines scaling and rotation.",
          "Quotients divide moduli and subtract arguments.",
          "De Moivre's theorem computes powers directly.",
          "The $n$th roots are equally spaced around a circle."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "vectors",
    "lessonSlug": "vector-properties-and-operations",
    "title": "Vector Properties and Operations",
    "objectives": [
      "Distinguish vectors from scalars",
      "Represent vectors geometrically and by components",
      "Add, subtract, and scale vectors",
      "Compute magnitude and direction",
      "Resolve application quantities into components"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "A vector has both magnitude and direction. Displacement, velocity, acceleration, and force are vectors; distance, speed, mass, and temperature are scalars.",
          "Component notation converts geometric arrows into ordered pairs, allowing vector operations to use familiar algebra."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "vector-addition"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Vector",
        "body": "A vector is a directed quantity. In the plane, $\\mathbf v=\\langle v_x,v_y\\rangle$ records horizontal and vertical components."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Draw a quick arrow or component diagram before calculating. It reveals sign errors and clarifies whether a result should point left, right, up, or down."
      },
      {
        "kind": "theory",
        "heading": "Geometric representation",
        "paragraphs": [
          "Equivalent vectors have the same magnitude and direction even if they begin at different points. The vector from $P(x_1,y_1)$ to $Q(x_2,y_2)$ is $\\langle x_2-x_1,y_2-y_1\\rangle$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Addition and subtraction",
        "paragraphs": [
          "Add components to combine vectors. Geometrically, head-to-tail addition produces the resultant; subtraction adds the opposite vector."
        ]
      },
      {
        "kind": "theory",
        "heading": "Scalar multiplication",
        "paragraphs": [
          "Multiplying by a positive scalar changes magnitude. A negative scalar also reverses direction."
        ]
      },
      {
        "kind": "theory",
        "heading": "Magnitude and direction",
        "paragraphs": [
          "Magnitude follows Pythagoras. A direction angle is recovered from the components with quadrant awareness."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\langle a,b\\rangle+\\langle c,d\\rangle=\\langle a+c,b+d\\rangle",
        "caption": "Component-wise addition."
      },
      {
        "kind": "formula",
        "latex": "\\|\\mathbf v\\|=\\sqrt{v_x^2+v_y^2}",
        "caption": "Vector magnitude."
      },
      {
        "kind": "formula",
        "latex": "\\mathbf{PQ}=\\langle x_2-x_1,y_2-y_1\\rangle",
        "caption": "Vector from point $P$ to point $Q$."
      },
      {
        "kind": "example",
        "prompt": "Let $\\mathbf u=\\langle3,-2\\rangle$ and $\\mathbf v=\\langle-1,5\\rangle$. Find $2\\mathbf u-\\mathbf v$.",
        "steps": [
          "$2\\mathbf u=\\langle6,-4\\rangle$.",
          "Subtract component-wise: $\\langle6,-4\\rangle-\\langle-1,5\\rangle$."
        ],
        "answer": "$2\\mathbf u-\\mathbf v=\\langle7,-9\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Find the magnitude and direction of $\\langle-3,3\\rangle$.",
        "steps": [
          "Magnitude is $\\sqrt{9+9}=3\\sqrt2$.",
          "The vector lies in Quadrant II with reference angle $45^\\circ$."
        ],
        "answer": "Magnitude $3\\sqrt2$; direction angle $135^\\circ$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Adding vector magnitudes instead of components.",
            "right": "Combine components first; then find the magnitude of the resultant."
          },
          {
            "wrong": "Using a principal arctangent angle without checking the component signs.",
            "right": "Use the quadrant to correct the direction angle."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Structural engineering",
            "text": "Forces are resolved into horizontal and vertical components."
          },
          {
            "area": "Navigation",
            "text": "Successive displacement vectors combine to a single resultant route."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Which is a vector quantity?",
            "options": [
              "speed",
              "temperature",
              "mass",
              "velocity"
            ],
            "answer": 3,
            "explanation": "Velocity includes direction."
          },
          {
            "prompt": "$\\langle2,3\\rangle+\\langle-5,1\\rangle$ is…",
            "options": [
              "⟨7,4⟩",
              "⟨−3,4⟩",
              "⟨−3,2⟩",
              "⟨10,3⟩"
            ],
            "answer": 1,
            "explanation": "Add corresponding components."
          },
          {
            "prompt": "The magnitude of $\\langle6,8\\rangle$ is…",
            "options": [
              "10",
              "14",
              "48",
              "100"
            ],
            "answer": 0,
            "explanation": "√(36+64)=10."
          },
          {
            "prompt": "Multiplying a vector by −2…",
            "options": [
              "only rotates it 90°",
              "doubles magnitude and reverses direction",
              "halves magnitude",
              "does not change it"
            ],
            "answer": 1,
            "explanation": "A negative scalar reverses direction."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Vectors combine magnitude with direction.",
          "Components make geometric operations algebraic.",
          "Magnitude comes from the Pythagorean theorem.",
          "Direction recovery requires quadrant awareness."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "vectors",
    "lessonSlug": "the-unit-vector-and-vector-applications",
    "title": "The Unit Vector and Vector Applications",
    "objectives": [
      "Normalize a nonzero vector",
      "Use the principal unit vectors $\\mathbf i$ and $\\mathbf j$",
      "Create a vector from magnitude and direction",
      "Resolve forces into components",
      "Solve equilibrium and navigation applications"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "A unit vector has magnitude one and records direction without scale. Dividing a nonzero vector by its magnitude produces the unit vector in the same direction.",
          "Conversely, multiplying a direction unit vector by a desired magnitude constructs a vector for force, velocity, displacement, or another directed quantity."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "unit-vector"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Unit vector",
        "body": "For nonzero $\\mathbf v$, the normalized vector is $\\hat{\\mathbf v}=\\mathbf v/\\|\\mathbf v\\|$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Normalization is undefined for the zero vector because it has no direction and its magnitude cannot be used as a divisor."
      },
      {
        "kind": "theory",
        "heading": "Principal unit vectors",
        "paragraphs": [
          "$\\mathbf i=\\langle1,0\\rangle$ and $\\mathbf j=\\langle0,1\\rangle$. Thus $\\langle a,b\\rangle=a\\mathbf i+b\\mathbf j$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Magnitude–direction form",
        "paragraphs": [
          "A vector of magnitude $M$ and direction angle $\\theta$ is $M\\langle\\cos\\theta,\\sin\\theta\\rangle$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Forces",
        "paragraphs": [
          "Resolve each force into components, add all components, and find the magnitude and direction of the resultant. Equilibrium occurs when the total vector is zero."
        ]
      },
      {
        "kind": "theory",
        "heading": "Navigation and wind",
        "paragraphs": [
          "Ground velocity equals air velocity plus wind velocity. Bearings must first be translated into standard component directions."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\hat{\\mathbf v}=\\frac{\\mathbf v}{\\|\\mathbf v\\|}",
        "caption": "Unit vector in the direction of $\\mathbf v$."
      },
      {
        "kind": "formula",
        "latex": "\\mathbf v=M\\langle\\cos\\theta,\\sin\\theta\\rangle",
        "caption": "Vector from magnitude and standard direction angle."
      },
      {
        "kind": "formula",
        "latex": "\\mathbf i=\\langle1,0\\rangle,\\qquad \\mathbf j=\\langle0,1\\rangle",
        "caption": "Principal unit vectors."
      },
      {
        "kind": "example",
        "prompt": "Find a unit vector in the direction of $\\langle-5,12\\rangle$.",
        "steps": [
          "The magnitude is $\\sqrt{25+144}=13$.",
          "Divide each component by 13."
        ],
        "answer": "$\\langle-5/13,12/13\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Write a force of 80 N at $35^\\circ$ above the positive horizontal axis in component form.",
        "steps": [
          "Use $\\mathbf F=80\\langle\\cos35^\\circ,\\sin35^\\circ\\rangle$.",
          "Evaluate each component."
        ],
        "answer": "$\\mathbf F\\approx\\langle65.53,45.89\\rangle$ N."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Dividing a vector by the sum of its components.",
            "right": "Normalize by the magnitude $\\sqrt{x^2+y^2}$."
          },
          {
            "wrong": "Using bearing degrees directly as a standard direction angle.",
            "right": "Convert the bearing from its north/south reference to the standard angle measured from positive $x$."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Construction",
            "text": "Cable tensions and loads are resolved into component forces."
          },
          {
            "area": "Aviation",
            "text": "Air velocity and wind velocity combine to determine ground track."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "A unit vector has magnitude…",
            "options": [
              "0",
              "1",
              "π",
              "depends on direction"
            ],
            "answer": 1,
            "explanation": "Its defining property is magnitude one."
          },
          {
            "prompt": "$\\mathbf i$ equals…",
            "options": [
              "⟨0,1⟩",
              "⟨1,0⟩",
              "⟨1,1⟩",
              "⟨−1,0⟩"
            ],
            "answer": 1,
            "explanation": "i points along positive x."
          },
          {
            "prompt": "A vector of magnitude 5 at angle 0 has components…",
            "options": [
              "⟨0,5⟩",
              "⟨5,0⟩",
              "⟨5,5⟩",
              "⟨−5,0⟩"
            ],
            "answer": 1,
            "explanation": "cos0=1 and sin0=0."
          },
          {
            "prompt": "The zero vector can be normalized…",
            "options": [
              "always",
              "only in degrees",
              "never",
              "only in 3D"
            ],
            "answer": 2,
            "explanation": "Its magnitude is zero and it has no defined direction."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Unit vectors separate direction from magnitude.",
          "The vectors $\\mathbf i$ and $\\mathbf j$ form the standard component basis.",
          "Magnitude and direction create components through cosine and sine.",
          "Vector addition models forces, wind, currents, and navigation."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "vectors",
    "lessonSlug": "the-dot-product",
    "title": "The Dot Product",
    "objectives": [
      "Compute the dot product algebraically and geometrically",
      "Find the angle between vectors",
      "Test vectors for orthogonality",
      "Compute scalar and vector projections",
      "Calculate work done by a constant force"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "The dot product converts two vectors into a scalar. It measures directional alignment: positive for generally aligned vectors, zero for perpendicular vectors, and negative for generally opposed vectors.",
          "This single operation links components, angles, projection, and physical work."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "dot-product"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Dot product",
        "body": "For $\\mathbf u=\\langle u_1,u_2\\rangle$ and $\\mathbf v=\\langle v_1,v_2\\rangle$, $\\mathbf u\\cdot\\mathbf v=u_1v_1+u_2v_2$."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "If solving for an angle, keep full precision in the cosine ratio and verify the ratio lies in $[-1,1]$ before applying arccos."
      },
      {
        "kind": "theory",
        "heading": "Geometric meaning",
        "paragraphs": [
          "The component formula equals $\\|\\mathbf u\\|\\|\\mathbf v\\|\\cos\\theta$, where $\\theta$ is the smaller angle between nonzero vectors."
        ]
      },
      {
        "kind": "theory",
        "heading": "Orthogonality",
        "paragraphs": [
          "Nonzero vectors are perpendicular exactly when their dot product is zero."
        ]
      },
      {
        "kind": "theory",
        "heading": "Projection",
        "paragraphs": [
          "The scalar projection of $\\mathbf u$ onto $\\mathbf v$ measures signed length in the $\\mathbf v$ direction. Multiplying by the unit vector in that direction gives the vector projection."
        ]
      },
      {
        "kind": "theory",
        "heading": "Work",
        "paragraphs": [
          "For a constant force $\\mathbf F$ moving an object through displacement $\\mathbf d$, work is $W=\\mathbf F\\cdot\\mathbf d=Fd\\cos\\theta$."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\mathbf u\\cdot\\mathbf v=u_1v_1+u_2v_2=\\|\\mathbf u\\|\\|\\mathbf v\\|\\cos\\theta",
        "caption": "Algebraic and geometric dot-product forms."
      },
      {
        "kind": "formula",
        "latex": "\\operatorname{proj}_{\\mathbf v}\\mathbf u=\\frac{\\mathbf u\\cdot\\mathbf v}{\\|\\mathbf v\\|^2}\\mathbf v",
        "caption": "Vector projection of $\\mathbf u$ onto $\\mathbf v$."
      },
      {
        "kind": "formula",
        "latex": "W=\\mathbf F\\cdot\\mathbf d",
        "caption": "Work by a constant force."
      },
      {
        "kind": "example",
        "prompt": "Find the angle between $\\langle1,2\\rangle$ and $\\langle3,-1\\rangle$.",
        "steps": [
          "Dot product: $1(3)+2(-1)=1$.",
          "Magnitudes are $\\sqrt5$ and $\\sqrt{10}$.",
          "$\\cos\\theta=1/\\sqrt{50}$."
        ],
        "answer": "$\\theta=\\arccos(1/\\sqrt{50})\\approx81.9^\\circ$."
      },
      {
        "kind": "example",
        "prompt": "Find the projection of $\\mathbf u=\\langle4,2\\rangle$ onto $\\mathbf v=\\langle1,1\\rangle$.",
        "steps": [
          "$\\mathbf u\\cdot\\mathbf v=6$ and $\\|\\mathbf v\\|^2=2$.",
          "Multiply $(6/2)\\mathbf v$."
        ],
        "answer": "$\\operatorname{proj}_{\\mathbf v}\\mathbf u=\\langle3,3\\rangle$."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Expecting the dot product to be a vector.",
            "right": "The dot product is a scalar; projection produces a vector."
          },
          {
            "wrong": "Dividing projection by $\\|\\mathbf v\\|$ instead of its square.",
            "right": "The vector-projection coefficient uses $\\|\\mathbf v\\|^2$."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Structural mechanics",
            "text": "Dot products resolve loads along structural members."
          },
          {
            "area": "Physics",
            "text": "Mechanical work depends on the force component parallel to displacement."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "If $\\mathbf u\\cdot\\mathbf v=0$ for nonzero vectors, they are…",
            "options": [
              "parallel",
              "perpendicular",
              "equal",
              "opposite"
            ],
            "answer": 1,
            "explanation": "Zero dot product characterizes orthogonality."
          },
          {
            "prompt": "$\\langle2,3\\rangle\\cdot\\langle4,-1\\rangle$ is…",
            "options": [
              "5",
              "8",
              "11",
              "⟨8,−3⟩"
            ],
            "answer": 0,
            "explanation": "2·4+3·(−1)=5."
          },
          {
            "prompt": "A negative dot product indicates an angle that is…",
            "options": [
              "acute",
              "right",
              "obtuse",
              "zero"
            ],
            "answer": 2,
            "explanation": "Cosine is negative for obtuse angles."
          },
          {
            "prompt": "Work is zero when force and displacement are…",
            "options": [
              "parallel",
              "perpendicular",
              "equal in magnitude",
              "both positive"
            ],
            "answer": 1,
            "explanation": "cos90°=0."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "The dot product measures alignment between vectors.",
          "The angle formula connects components with geometry.",
          "A zero dot product identifies perpendicular vectors.",
          "Projection and work are direct applications of the dot product."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "parametric-equations",
    "lessonSlug": "sketching-curves-described-by-parametric-equations",
    "title": "Sketching Curves Described by Parametric Equations",
    "objectives": [
      "Plot parametric curves from a value table",
      "Eliminate a parameter when possible",
      "Determine the traced portion of a curve",
      "Identify orientation and repeated tracing",
      "Recognize common line, circle, parabola, and ellipse parametrizations"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "Parametric equations describe $x$ and $y$ separately as functions of a third variable, often time $t$. They reveal not only the geometric curve but also how a point moves along it.",
          "Eliminating the parameter may identify the familiar rectangular curve, while the parameter interval determines the actual portion, orientation, and repetition."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "parametric-curve"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Parametric curve",
        "body": "A pair $x=f(t)$ and $y=g(t)$ assigns a point $(x(t),y(t))$ to each allowed parameter value."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Use a table with increasing parameter values and connect points in that order. The order—not just the set of points—determines orientation."
      },
      {
        "kind": "theory",
        "heading": "Value tables",
        "paragraphs": [
          "Choose parameter values that simplify both component functions. Plot the resulting ordered pairs and add arrows in increasing-$t$ direction."
        ]
      },
      {
        "kind": "theory",
        "heading": "Eliminating the parameter",
        "paragraphs": [
          "Solve one equation for $t$ or use an identity such as $\\sin^2t+\\cos^2t=1$. Then substitute into the other equation."
        ]
      },
      {
        "kind": "theory",
        "heading": "Restrictions",
        "paragraphs": [
          "A rectangular equation may describe a larger curve than the parametrization. Translate the parameter interval into restrictions on $x$, $y$, or orientation."
        ]
      },
      {
        "kind": "theory",
        "heading": "Common parametrizations",
        "paragraphs": [
          "Lines may use $x=x_0+at$, $y=y_0+bt$. Circles and ellipses use cosine and sine components. Parabolas often use $x=t$, $y=t^2$ or a shifted form."
        ]
      },
      {
        "kind": "formula",
        "latex": "x=f(t),\\qquad y=g(t)",
        "caption": "General planar parametrization."
      },
      {
        "kind": "formula",
        "latex": "x=h+k\\cos t,\\qquad y=m+k\\sin t",
        "caption": "Circle of radius $|k|$ centered at $(h,m)$."
      },
      {
        "kind": "formula",
        "latex": "x=x_0+at,\\qquad y=y_0+bt",
        "caption": "Line through $(x_0,y_0)$ with direction $\\langle a,b\\rangle$."
      },
      {
        "kind": "example",
        "prompt": "Identify and orient $x=2\\cos t$, $y=2\\sin t$, $0\\le t\\le2\\pi$.",
        "steps": [
          "Eliminate $t$: $x^2/4+y^2/4=1$.",
          "At $t=0$, the point is $(2,0)$.",
          "As $t$ increases slightly, $y$ becomes positive."
        ],
        "answer": "The circle $x^2+y^2=4$ is traced once counter-clockwise from $(2,0)$."
      },
      {
        "kind": "example",
        "prompt": "Eliminate $t$ from $x=t-1$, $y=t^2+2$.",
        "steps": [
          "Solve $t=x+1$.",
          "Substitute into $y=t^2+2$."
        ],
        "answer": "$y=(x+1)^2+2$, a parabola opening upward."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Ignoring the parameter interval after eliminating $t$.",
            "right": "State the portion and direction represented by the allowed $t$ values."
          },
          {
            "wrong": "Connecting table points in spatial order instead of increasing-$t$ order.",
            "right": "Orientation follows the parameter, not nearest-neighbour geometry."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Computer animation",
            "text": "Object paths are naturally represented by time-based parametric equations."
          },
          {
            "area": "CAD",
            "text": "Curves and tool paths use parametrizations to control position and direction."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "A parameter is…",
            "options": [
              "always the x-coordinate",
              "a third variable controlling x and y",
              "the slope only",
              "a fixed constant"
            ],
            "answer": 1,
            "explanation": "Both coordinates are functions of the parameter."
          },
          {
            "prompt": "$x=\\cos t$, $y=\\sin t$ describes…",
            "options": [
              "a line",
              "a unit circle",
              "a parabola",
              "a hyperbola"
            ],
            "answer": 1,
            "explanation": "The identity x²+y²=1 applies."
          },
          {
            "prompt": "Orientation is determined by…",
            "options": [
              "the curve's colour",
              "increasing parameter values",
              "the largest coordinate",
              "the equation after elimination only"
            ],
            "answer": 1,
            "explanation": "Track points as t increases."
          },
          {
            "prompt": "Eliminating $t$ may lose information about…",
            "options": [
              "the curve type",
              "orientation and restrictions",
              "all coordinates",
              "the origin"
            ],
            "answer": 1,
            "explanation": "The rectangular relation does not encode the traversal."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "Parametric equations describe both shape and motion.",
          "A table provides points and orientation.",
          "Elimination identifies a rectangular relation when possible.",
          "Parameter intervals control the traced portion and repeated traversal."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  },
  {
    "subjectSlug": "mathematics",
    "chapterSlug": "parametric-equations",
    "lessonSlug": "parametric-descriptions-for-oriented-curves",
    "title": "Parametric Descriptions for Oriented Curves",
    "objectives": [
      "Construct parametrizations with a specified orientation",
      "Change speed without changing the geometric path",
      "Parametrize line segments, circles, ellipses, and cycloids",
      "Model projectile motion",
      "Interpret position, velocity, and time from a parametric model"
    ],
    "sections": [
      {
        "kind": "overview",
        "paragraphs": [
          "A curve can have many parametrizations. Replacing $t$ by a shifted, scaled, or reversed expression can change starting point, speed, direction, or number of traversals without changing the geometric path.",
          "Time-based parametrizations also model physical motion, including rolling circles and projectiles."
        ]
      },
      {
        "kind": "figure",
        "figure": {
          "type": "trigonometry",
          "kind": "projectile"
        }
      },
      {
        "kind": "callout",
        "variant": "definition",
        "title": "Orientation",
        "body": "Orientation is the direction in which the curve is traced as the parameter increases."
      },
      {
        "kind": "callout",
        "variant": "tip",
        "title": "Study strategy",
        "body": "Test the start point and one slightly later point. This is often faster and safer than trying to infer direction from signs alone."
      },
      {
        "kind": "theory",
        "heading": "Controlling direction and speed",
        "paragraphs": [
          "Replacing $t$ by $-t$ usually reverses direction. Replacing $t$ by $ct$ changes traversal speed and may change how many times a periodic curve is traced on a fixed interval."
        ]
      },
      {
        "kind": "theory",
        "heading": "Line segments",
        "paragraphs": [
          "The interpolation $\\mathbf r(t)=(1-t)\\mathbf P+t\\mathbf Q$, $0\\le t\\le1$, moves from point $P$ to point $Q$."
        ]
      },
      {
        "kind": "theory",
        "heading": "Circular and cycloidal motion",
        "paragraphs": [
          "Phase shifts set the starting point on a circle. A cycloid combines horizontal translation with the rotation of a point on a rolling circle."
        ]
      },
      {
        "kind": "theory",
        "heading": "Projectile motion",
        "paragraphs": [
          "Ignoring air resistance, horizontal velocity is constant while vertical position includes gravitational acceleration. The parameter $t$ represents elapsed time."
        ]
      },
      {
        "kind": "formula",
        "latex": "\\mathbf r(t)=(1-t)\\mathbf P+t\\mathbf Q,\\quad 0\\le t\\le1",
        "caption": "Line segment from $P$ to $Q$."
      },
      {
        "kind": "formula",
        "latex": "x(t)=v_0\\cos\\theta\\,t",
        "caption": "Horizontal projectile position from the origin."
      },
      {
        "kind": "formula",
        "latex": "y(t)=s_0+v_0\\sin\\theta\\,t-\\frac12gt^2",
        "caption": "Vertical projectile position."
      },
      {
        "kind": "example",
        "prompt": "Parametrize the line segment from $(2,-1)$ to $(8,5)$.",
        "steps": [
          "Use $(1-t)P+tQ$ for $0\\le t\\le1$.",
          "Simplify each component."
        ],
        "answer": "$x=2+6t$, $y=-1+6t$, $0\\le t\\le1$."
      },
      {
        "kind": "example",
        "prompt": "A ball is launched from 1.5 m with speed 20 m/s at $30^\\circ$. Write its position model using $g=9.8$ m/s².",
        "steps": [
          "Horizontal component: $20\\cos30^\\circ=10\\sqrt3$.",
          "Vertical component: $20\\sin30^\\circ=10$.",
          "Insert these values into the projectile equations."
        ],
        "answer": "$x=10\\sqrt3\\,t$, $y=1.5+10t-4.9t^2$, for $t\\ge0$ until impact."
      },
      {
        "kind": "mistakes",
        "items": [
          {
            "wrong": "Changing a circle's orientation by negating only one coordinate without checking the new path.",
            "right": "Test points and verify both path and direction after any parameter change."
          },
          {
            "wrong": "Using degrees inside a time-dependent sine or cosine model without matching calculator or software conventions.",
            "right": "State the angular unit and use radians in standard mathematical models."
          }
        ]
      },
      {
        "kind": "realWorld",
        "items": [
          {
            "area": "Architecture and fabrication",
            "text": "Parametric paths guide CNC machines and describe designed curves."
          },
          {
            "area": "Sports science",
            "text": "Projectile parametrizations estimate trajectory, peak height, and range."
          }
        ]
      },
      {
        "kind": "practice",
        "heading": "Practice and check your reasoning",
        "stepKey": "practice",
        "questions": [
          {
            "prompt": "Replacing $t$ with $-t$ commonly…",
            "options": [
              "doubles the radius",
              "reverses orientation",
              "moves the curve upward",
              "eliminates the parameter"
            ],
            "answer": 1,
            "explanation": "It reverses the parameter progression."
          },
          {
            "prompt": "At $t=0$, $(1-t)P+tQ$ equals…",
            "options": [
              "Q",
              "P",
              "P+Q",
              "the midpoint"
            ],
            "answer": 1,
            "explanation": "Substitute t=0."
          },
          {
            "prompt": "Projectile horizontal acceleration without air resistance is…",
            "options": [
              "g",
              "−g",
              "0",
              "v₀"
            ],
            "answer": 2,
            "explanation": "Horizontal velocity remains constant."
          },
          {
            "prompt": "Changing $t$ to $2t$ on a periodic path generally changes…",
            "options": [
              "only colour",
              "traversal speed",
              "the coordinate axes",
              "gravity"
            ],
            "answer": 1,
            "explanation": "The parameter runs through the cycle twice as fast."
          }
        ]
      },
      {
        "kind": "summary",
        "points": [
          "A geometric curve admits many parametrizations.",
          "Parameter changes control starting point, direction, and speed.",
          "Interpolation gives a direct line-segment model.",
          "Projectile equations combine constant horizontal velocity with vertical acceleration."
        ]
      },
      {
        "kind": "completion",
        "steps": [
          {
            "key": "practice",
            "label": "Complete the practice questions"
          }
        ]
      }
    ]
  }
];
