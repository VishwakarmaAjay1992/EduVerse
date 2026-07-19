import type { LessonContent } from "@/lib/lesson-content-types";

export const volumeAndSurfaceAreaBasics: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "measurement-and-units",
  lessonSlug: "volume-and-surface-area-basics",
  title: "Volume and Surface Area Basics",
  objectives: [
    "Explain the difference between volume (space inside a solid) and surface area (total area of its faces).",
    "Use cubic units correctly and convert between mm³, cm³ and m³.",
    "Calculate the volume and surface area of cubes and cuboids.",
    "Calculate the volume of any prism as cross-section area times length, including cylinders.",
    "Recognise pyramids and cones and the one-third volume relationship at an introductory level.",
    "Use nets to understand and compute surface area.",
    "Connect volume to capacity ($1\\text{ cm}^3 = 1\\text{ ml}$) and solve tank, box and room problems, including missing dimensions.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "How much water fills a tank, and how much paint covers its outside? These are the two headline questions of 3-D measurement. Volume measures the space inside a solid, counted in unit cubes (cm³, m³). Surface area measures the total area of all its faces, counted in square units (cm², m²) — imagine unfolding the solid flat and measuring the wrapping.",
        "In this lesson you will master cuboids, extend one powerful idea — cross-section × length — to every prism including the cylinder, preview pyramids and cones, and use nets to see exactly where surface-area formulas come from.",
      ],
    },
    {
      kind: "theory",
      heading: "Before you start",
      paragraphs: [
        "This lesson builds directly on the previous one: you will need the area formulas for rectangles, triangles and circles, confident metric conversions, and the cube-root idea for reversing a cube's volume. If $A = \\pi r^2$ and $\\sqrt[3]{64} = 4$ both feel comfortable, you are ready.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Volume and surface area",
      body: "The volume of a solid is the amount of 3-D space it occupies, measured in cubic units (cm³, m³): the number of $1 \\times 1 \\times 1$ unit cubes that fill it. The surface area is the total area of every face of the solid, measured in square units (cm², m²). Volume answers 'how much fits inside?'; surface area answers 'how much material covers the outside?'",
    },
    {
      kind: "theory",
      heading: "Cubes and cuboids",
      paragraphs: [
        "A cuboid (rectangular prism) with length $l$, width $w$ and height $h$ contains $l \\times w$ unit cubes in each layer and $h$ layers, so $V = lwh$.",
        "Its six faces come in three identical pairs — top and bottom ($l \\times w$), front and back ($l \\times h$), and the two ends ($w \\times h$) — giving surface area $S = 2(lw + lh + wh)$.",
        "A cube with edge $s$ is the special case where all edges match: $V = s^3$ (which is why $s^3$ is read 's cubed') and $S = 6s^2$ for its six identical square faces.",
      ],
    },
    {
      kind: "formula",
      latex:
        "V_{\\text{cuboid}} = lwh \\qquad S_{\\text{cuboid}} = 2(lw + lh + wh) \\qquad V_{\\text{cube}} = s^3 \\qquad S_{\\text{cube}} = 6s^2",
      caption: "Cuboid and cube formulas.",
    },
    {
      kind: "theory",
      heading: "Nets: unfolding a solid",
      paragraphs: [
        "A net is the flat pattern you get by unfolding a solid along its edges — the way a cardboard box opens out. A cuboid's net shows all six rectangles side by side, which is why its surface area is just the sum of six rectangle areas.",
        "Nets turn every surface-area question into an area question from the previous lesson. A cylinder's net, for example, is two circles plus one rectangle whose width is the circle's circumference — which is exactly where the formula $S = 2\\pi r^2 + 2\\pi rh$ comes from.",
      ],
    },
    {
      kind: "theory",
      heading: "Prisms: one idea, many solids",
      paragraphs: [
        "A prism is a solid with the same cross-section all the way along its length — a Toblerone box (triangular), a tent, a metal girder. For every prism, $V = \\text{area of cross-section} \\times \\text{length}$.",
        "The cuboid is a prism with a rectangular cross-section, and a cylinder is a 'circular prism': its cross-section is a circle, so $V = \\pi r^2 h$.",
        "The surface area of a prism is the two end faces plus the faces that wrap around: for a cylinder, $S = 2\\pi r^2 + 2\\pi r h$.",
      ],
    },
    {
      kind: "formula",
      latex:
        "V_{\\text{prism}} = A_{\\text{cross}} \\times L \\qquad V_{\\text{cyl}} = \\pi r^2 h \\qquad S_{\\text{cyl}} = 2\\pi r^2 + 2\\pi r h",
      caption: "Every prism obeys cross-section × length; the cylinder is the circular case.",
    },
    {
      kind: "theory",
      heading: "Pyramids and cones: a first look",
      paragraphs: [
        "A pyramid tapers from a flat base to a point (apex); a cone is the circular version. Remarkably, a pyramid holds exactly one third of the prism with the same base and height: $V = \\tfrac{1}{3} \\times A_{\\text{base}} \\times h$, and likewise $V_{\\text{cone}} = \\tfrac{1}{3}\\pi r^2 h$.",
        "You can verify the one-third factor experimentally: a cone-shaped cup fills its matching cylinder in exactly three pours. Full surface-area work for pyramids and cones belongs to a later lesson.",
      ],
    },
    {
      kind: "theory",
      heading: "Cubic units and capacity",
      paragraphs: [
        "Cubic-unit conversions use the length factor three times, because volume has three dimensions. Since $1\\text{ m} = 100\\text{ cm}$, a cubic metre is $100 \\times 100 \\times 100 = 1{,}000{,}000$ cm³ — a million, not a hundred. Likewise $1\\text{ cm}^3 = 10 \\times 10 \\times 10 = 1000$ mm³.",
        "Capacity links volume to liquids: $1\\text{ cm}^3 = 1\\text{ ml}$, so $1000\\text{ cm}^3 = 1$ litre and $1\\text{ m}^3 = 1000$ litres. A tank's volume in cm³ is its capacity in millilitres.",
      ],
    },
    {
      kind: "table",
      heading: "Volume and capacity conversions",
      headers: ["Conversion", "Why"],
      rows: [
        ["$1\\text{ cm}^3 = 1000\\text{ mm}^3$", "$10^3 = 1000$"],
        ["$1\\text{ m}^3 = 1{,}000{,}000\\text{ cm}^3$", "$100^3 = 1{,}000{,}000$"],
        ["$1\\text{ ml} = 1\\text{ cm}^3$", "definition of the millilitre"],
        ["$1\\text{ l} = 1000\\text{ cm}^3$", "$1000 \\times 1\\text{ cm}^3$"],
        ["$1\\text{ m}^3 = 1000\\text{ l}$", "$1{,}000{,}000 \\div 1000$"],
      ],
      note: "Cube the length factor for volume conversions — this is the single most common source of errors.",
    },
    {
      kind: "volumeSurfaceExplorer",
      heading: "Interactive: volume and surface-area laboratory",
    },
    {
      kind: "example",
      prompt: "A shipping box measures 40 cm × 30 cm × 25 cm. Find its volume and surface area.",
      steps: [
        "Volume: $V = lwh = 40 \\times 30 \\times 25 = 30{,}000$ cm³.",
        "Face pairs: $lw = 1200$, $lh = 1000$, $wh = 750$.",
        "Surface area: $S = 2(1200 + 1000 + 750) = 2 \\times 2950 = 5900$ cm².",
      ],
      answer: "Volume 30,000 cm³ (30 litres); surface area 5,900 cm².",
    },
    {
      kind: "example",
      prompt:
        "A cylindrical water tank has radius 0.7 m and height 1.5 m. Taking $\\pi \\approx 3.14$, find its capacity in litres.",
      steps: [
        "Volume: $V = \\pi r^2 h \\approx 3.14 \\times 0.7^2 \\times 1.5$.",
        "$0.7^2 = 0.49$, so $V \\approx 3.14 \\times 0.49 \\times 1.5 \\approx 2.31$ m³.",
        "Convert: $1\\text{ m}^3 = 1000$ litres, so $2.31 \\times 1000 = 2310$ litres.",
      ],
      answer: "The tank holds approximately 2,310 litres.",
    },
    {
      kind: "example",
      prompt:
        "A tent is a triangular prism 3 m long. Its triangular cross-section has base 2.4 m and height 1.8 m. Find the volume inside.",
      steps: [
        "Cross-section area: $A = \\tfrac{1}{2} \\times 2.4 \\times 1.8 = 2.16$ m².",
        "Prism rule: $V = A \\times L = 2.16 \\times 3$.",
      ],
      answer: "The tent encloses 6.48 m³ of space.",
    },
    {
      kind: "example",
      prompt:
        "A cuboid juice carton has volume 1.2 litres, a 8 cm × 5 cm base, and unknown height. Find the height.",
      steps: [
        "Convert the volume: $1.2\\text{ l} = 1200$ cm³.",
        "Base area: $8 \\times 5 = 40$ cm².",
        "Reverse the prism rule: $h = V \\div A_{\\text{base}} = 1200 \\div 40 = 30$.",
      ],
      answer: "The carton is 30 cm tall.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Volume or surface area?",
      body: "Filling, pouring, storing and capacity questions are volume (cm³, litres). Painting, wrapping, coating and material questions are surface area (cm², m²). Reading the question's verb usually settles which formula you need.",
    },
    {
      kind: "realWorld",
      heading: "3-D measurement in real life",
      items: [
        {
          area: "Water storage",
          text: "Rooftop and underground tanks are sized by volume in litres; a family home tank is typically 1,000–2,000 l.",
        },
        {
          area: "Construction",
          text: "Concrete for foundations is ordered by the cubic metre — volume of the trench, not its surface.",
        },
        {
          area: "Air conditioning",
          text: "Cooling capacity depends on room volume: floor area times ceiling height.",
        },
        {
          area: "Packaging",
          text: "Manufacturers minimise surface area (cardboard used) for a required volume to cut costs.",
        },
        {
          area: "Swimming pools",
          text: "Chlorine dosing follows pool volume, while pool liner and paint follow surface area.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Volume of a cuboid?", back: "$V = lwh$." },
        { front: "Surface area of a cuboid?", back: "$S = 2(lw + lh + wh)$." },
        { front: "Volume of any prism?", back: "Cross-section area × length." },
        { front: "Volume of a cylinder?", back: "$V = \\pi r^2 h$." },
        { front: "1 m³ in cm³?", back: "$1{,}000{,}000$ cm³ — cube the factor 100." },
        { front: "1 litre in cm³?", back: "$1000$ cm³ (and $1\\text{ cm}^3 = 1\\text{ ml}$)." },
        {
          front: "Volume of a cone vs its cylinder?",
          back: "One third: $V = \\tfrac{1}{3}\\pi r^2 h$.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: volume and surface area",
      stepKey: "volumeSurfacePractice",
      questions: [
        {
          prompt: "Find the volume of a cuboid 6 cm × 4 cm × 5 cm.",
          options: ["15 cm³", "60 cm³", "120 cm³", "148 cm³"],
          answer: 2,
          explanation: "$V = 6 \\times 4 \\times 5 = 120$ cm³.",
        },
        {
          prompt: "Find the surface area of the same 6 cm × 4 cm × 5 cm cuboid.",
          options: ["74 cm²", "120 cm²", "148 cm²", "296 cm²"],
          answer: 2,
          explanation: "$S = 2(24 + 30 + 20) = 2 \\times 74 = 148$ cm².",
        },
        {
          prompt: "A cube has edge 7 cm. Its volume is",
          options: ["21 cm³", "49 cm³", "294 cm³", "343 cm³"],
          answer: 3,
          explanation: "$V = 7^3 = 343$ cm³.",
        },
        {
          prompt: "The surface area of that same 7 cm cube is",
          options: ["49 cm²", "294 cm²", "343 cm²", "168 cm²"],
          answer: 1,
          explanation: "$S = 6s^2 = 6 \\times 49 = 294$ cm².",
        },
        {
          prompt: "A prism is 12 cm long with a cross-section of area 9 cm². Its volume is",
          options: ["21 cm³", "54 cm³", "108 cm³", "1,296 cm³"],
          answer: 2,
          explanation: "$V = 9 \\times 12 = 108$ cm³.",
        },
        {
          prompt:
            "Taking $\\pi \\approx 3.14$, the volume of a cylinder with radius 3 cm and height 10 cm is about",
          options: ["94.2 cm³", "188.4 cm³", "282.6 cm³", "942 cm³"],
          answer: 2,
          explanation: "$V = \\pi r^2 h \\approx 3.14 \\times 9 \\times 10 = 282.6$ cm³.",
        },
        {
          prompt: "Convert 3.5 m³ into litres.",
          options: ["35 l", "350 l", "3,500 l", "35,000 l"],
          answer: 2,
          explanation: "$1\\text{ m}^3 = 1000$ l, so $3.5 \\times 1000 = 3500$ litres.",
        },
        {
          prompt: "A bottle holds 750 ml. Its volume in cm³ is",
          options: ["7.5 cm³", "75 cm³", "750 cm³", "7,500 cm³"],
          answer: 2,
          explanation: "$1\\text{ ml} = 1\\text{ cm}^3$, so 750 ml is 750 cm³.",
        },
        {
          prompt: "A cuboid tank has volume 1,800 cm³ and a base of 12 cm × 10 cm. Its height is",
          options: ["9 cm", "15 cm", "18 cm", "150 cm"],
          answer: 1,
          explanation: "$h = 1800 \\div (12 \\times 10) = 1800 \\div 120 = 15$ cm.",
        },
        {
          prompt: "A room is 5 m × 4 m with a 3 m ceiling. What volume of air does it contain?",
          options: ["12 m³", "35 m³", "60 m³", "94 m³"],
          answer: 2,
          explanation: "$V = 5 \\times 4 \\times 3 = 60$ m³.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Converting m³ to cm³ by multiplying by 100.",
          right: "Cube the length factor: $1\\text{ m}^3 = 100^3 = 1{,}000{,}000$ cm³.",
        },
        {
          wrong: "Using a volume formula for a painting or wrapping question.",
          right:
            "Covering the outside is surface area (square units); filling the inside is volume (cubic units).",
        },
        {
          wrong: "Only counting three faces of a cuboid when finding surface area.",
          right:
            "A cuboid has six faces in three pairs — hence the factor 2 in $S = 2(lw + lh + wh)$.",
        },
        {
          wrong: "Substituting the diameter into $V = \\pi r^2 h$.",
          right: "Halve the diameter first: a 10 cm-wide cylinder has $r = 5$ cm.",
        },
        {
          wrong: "Writing volume with square units, e.g. '120 cm²'.",
          right: "Volume takes cubic units: 120 cm³. Square units belong to surface area.",
        },
        {
          wrong: "Treating a pyramid as a prism with the same base and height.",
          right:
            "A pyramid holds only one third of the matching prism: $V = \\tfrac{1}{3} A_{\\text{base}} h$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Volume counts unit cubes inside (cm³, m³); surface area measures the faces outside (cm², m²).",
        "Cuboid: $V = lwh$ and $S = 2(lw + lh + wh)$; cube: $V = s^3$ and $S = 6s^2$.",
        "Every prism obeys $V = $ cross-section area × length; the cylinder gives $V = \\pi r^2 h$ and $S = 2\\pi r^2 + 2\\pi rh$.",
        "Pyramids and cones hold one third of their matching prism or cylinder.",
        "Nets unfold a solid flat, turning surface area into a sum of simple areas.",
        "Cube the length factor for unit conversions ($1\\text{ m}^3 = 10^6$ cm³), and use $1\\text{ cm}^3 = 1\\text{ ml}$ to link volume with capacity.",
        "Reverse $V = A_{\\text{base}} \\times h$ by dividing to find a missing dimension.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: volume and surface area",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "The volume of a cuboid 9 cm × 6 cm × 4 cm is",
          options: ["19 cm³", "108 cm³", "216 cm³", "228 cm³"],
          answer: 2,
          marks: 1,
          explanation: "$V = 9 \\times 6 \\times 4 = 216$ cm³.",
        },
        {
          type: "mc",
          prompt: "The surface area of a cube with edge 5 cm is",
          options: ["25 cm²", "125 cm²", "150 cm²", "100 cm²"],
          answer: 2,
          marks: 1,
          explanation: "$S = 6 \\times 5^2 = 150$ cm².",
        },
        {
          type: "tf",
          prompt: "One cubic metre is equal to 100 cubic centimetres.",
          answer: false,
          marks: 1,
          explanation: "The factor must be cubed: $1\\text{ m}^3 = 100^3 = 1{,}000{,}000$ cm³.",
        },
        {
          type: "mc",
          prompt:
            "A triangular-prism girder is 2 m long with a cross-section of area 150 cm². Its volume is",
          options: ["300 cm³", "3,000 cm³", "30,000 cm³", "300,000 cm³"],
          answer: 2,
          marks: 2,
          explanation:
            "Convert first: $2\\text{ m} = 200$ cm; then $V = 150 \\times 200 = 30{,}000$ cm³.",
        },
        {
          type: "matching",
          prompt: "Match each quantity to the correct unit.",
          left: [
            "Water in a tank",
            "Paint to coat the tank",
            "Length of pipe to fill it",
            "Concrete for a foundation",
          ],
          options: ["m²", "m³", "m", "litres"],
          answer: [3, 0, 2, 1],
          marks: 4,
          explanation:
            "Capacity in litres, coating in square metres, length in metres, and bulk concrete in cubic metres.",
        },
        {
          type: "mc",
          prompt:
            "Taking $\\pi \\approx 3.14$, a cylindrical can has radius 4 cm and height 12 cm. Its volume is about",
          options: ["150.7 cm³", "301.4 cm³", "602.9 cm³", "603.2 cm³"],
          answer: 2,
          marks: 2,
          explanation:
            "$V = \\pi r^2 h \\approx 3.14 \\times 16 \\times 12 = 602.88 \\approx 602.9$ cm³.",
        },
        {
          type: "multi",
          prompt: "Select every true statement.",
          options: [
            "1 litre equals 1,000 cm³.",
            "Doubling every edge of a cube doubles its volume.",
            "A cylinder's volume is its circular cross-section area times its height.",
            "Surface area is measured in square units.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation: "Doubling every edge multiplies volume by $2^3 = 8$, not 2.",
        },
        {
          type: "mc",
          prompt:
            "A swimming pool is a cuboid 25 m × 10 m filled to a depth of 1.6 m. How many litres of water does it hold?",
          options: ["400 l", "4,000 l", "40,000 l", "400,000 l"],
          answer: 3,
          marks: 2,
          explanation:
            "$V = 25 \\times 10 \\times 1.6 = 400$ m³, and $400 \\times 1000 = 400{,}000$ litres.",
        },
        {
          type: "mc",
          prompt:
            "A cube-shaped storage box must have a volume of 216,000 cm³. What edge length is required?",
          options: ["36 cm", "60 cm", "72 cm", "600 cm"],
          answer: 1,
          marks: 2,
          explanation:
            "$e = \\sqrt[3]{216{,}000} = \\sqrt[3]{216} \\times \\sqrt[3]{1000} = 6 \\times 10 = 60$ cm.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "volumeSurfaceExplorer",
          label: "Use the interactive volume and surface-area laboratory",
        },
        { key: "volumeSurfacePractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
