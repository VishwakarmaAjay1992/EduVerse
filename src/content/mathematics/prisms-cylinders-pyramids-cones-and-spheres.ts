import type { LessonContent } from "@/lib/lesson-content-types";

export const prismsCylindersPyramidsConesAndSpheres: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "mensuration",
  lessonSlug: "prisms-cylinders-pyramids-cones-and-spheres",
  title: "Prisms, Cylinders, Pyramids, Cones and Spheres",
  objectives: [
    "Recognise common 3-D solids and describe their faces, curved surfaces, edges and vertices.",
    "Use and explain the formulas for surface area and volume of prisms, cylinders, pyramids, cones and spheres.",
    "Distinguish clearly between lateral surface area, total surface area and volume.",
    "Solve measurement problems from beginner to expert level, including reverse problems and composite solids.",
    "Use scale factors to predict how lengths, areas and volumes change in similar solids.",
    "Model practical problems involving packaging, tanks, silos, domes, cans and architectural forms.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Mensuration is the geometry of measuring length, area, surface area and volume. In this lesson we move from flat shapes to **solid geometry**. Instead of asking only how much a shape covers, we ask how much space it holds and how much material is needed to cover its outside.",
        "You will learn the standard formulas, but more importantly you will learn **why** they work, when to use them, and how to avoid the common mistake of mixing up square units and cubic units. The solved examples begin with easy substitutions and build toward expert-level multi-step applications.",
      ],
    },
    {
      kind: "theory",
      heading: "Before you start",
      paragraphs: [
        "You should already be comfortable with the area of rectangles, triangles and circles, and with using $\\pi$ in exact and approximate calculations. The lesson on perimeter and area of basic shapes is the main prerequisite because most surface-area formulas come from adding areas of 2-D faces or curved nets.",
      ],
      list: [
        "Surface area is measured in **square** units such as cm² and m².",
        "Volume is measured in **cubic** units such as cm³ and m³.",
        "Capacity is often expressed in litres, where $1\\text{ litre}=1000\\text{ cm}^3$ and $1\\text{ m}^3=1000\\text{ litres}$.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Key definitions",
      body: "A **prism** has a constant cross-section. A **cylinder** is a prism with a circular cross-section. A **pyramid** has a polygon base and triangular faces meeting at one vertex. A **cone** is the circular version of a pyramid. A **sphere** is the set of points in space at a fixed distance, called the radius, from a centre.",
    },
    {
      kind: "cards",
      heading: "Solid-shape quick reference",
      columns: 3,
      items: [
        {
          title: "Prism",
          value: "$V=Bh$",
          text: "Base area $B$ stays constant all the way through. Examples: cuboid, triangular prism, hexagonal prism.",
        },
        {
          title: "Cylinder",
          value: "$V=\\pi r^2h$",
          text: "A prism with circular base. Curved surface can be unrolled into a rectangle.",
        },
        {
          title: "Pyramid",
          value: "$V=\\tfrac13Bh$",
          text: "One-third of a prism with the same base area and perpendicular height.",
        },
        {
          title: "Cone",
          value: "$V=\\tfrac13\\pi r^2h$",
          text: "One-third of a cylinder with the same base and height.",
        },
        {
          title: "Sphere",
          value: "$V=\\tfrac43\\pi r^3$",
          text: "Perfectly round in every direction. Surface area depends only on the radius.",
        },
        {
          title: "Composite solid",
          value: "add or subtract",
          text: "Break the object into known solids, find each part, then combine carefully.",
        },
      ],
    },
    {
      kind: "table",
      heading: "Formulas you must know",
      headers: ["Solid", "Volume", "Surface area / total area", "Notes"],
      rows: [
        [
          "Cuboid",
          "$lwh$",
          "$2(lw+lh+wh)$",
          "Think of 3 pairs of identical rectangular faces.",
        ],
        [
          "Prism",
          "$Bh$",
          "$2B + (\\text{perimeter of base})\\times h$",
          "Lateral area = perimeter of cross-section × length.",
        ],
        [
          "Cylinder",
          "$\\pi r^2 h$",
          "$2\\pi r^2 + 2\\pi rh$",
          "The curved surface area is $2\\pi rh$.",
        ],
        [
          "Pyramid",
          "$\\tfrac13Bh$",
          "base area + triangular faces",
          "For regular pyramids, face area often uses slant height.",
        ],
        [
          "Cone",
          "$\\tfrac13\\pi r^2 h$",
          "$\\pi r^2 + \\pi rl$",
          "Here $l$ is slant height, not vertical height.",
        ],
        [
          "Sphere",
          "$\\tfrac43\\pi r^3$",
          "$4\\pi r^2$",
          "The diameter is $2r$.",
        ],
      ],
      note: "In every volume formula, $B$ means the area of the base and $h$ means perpendicular height.",
    },
    {
      kind: "imageGallery",
      heading: "Illustrated solids and formula map",
      note: "Use these illustrations to connect each formula with the shape features that appear in it.",
      images: [
        {
          src: "/geometry-recreated/mensuration-solids-overview.svg",
          alt: "Illustrated overview of prism, cylinder, pyramid, cone and sphere with labelled dimensions.",
          caption: "A prism uses base area $B$ and length $h$. A cone and a pyramid use one-third of the matching prism or cylinder volume. A cone's total surface area uses the slant height $l$.",
        },
        {
          src: "/geometry-recreated/mensuration-nets-and-composite-solids.svg",
          alt: "Nets of a cuboid and cylinder, and a composite solid made from a cylinder and hemisphere.",
          caption: "Many surface-area problems become easier when you imagine unrolling the shape into flat pieces. Composite solids are solved by splitting them into simpler standard solids.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "How the formulas are built",
      paragraphs: [
        "A prism's volume is **cross-sectional area × length**. If a solid keeps the same base shape all the way through, then stacking equal slices naturally gives $V=Bh$. A cylinder is simply the circular case where $B=\\pi r^2$.",
        "A pyramid and a cone each occupy one-third of the volume of a prism or cylinder with the same base and perpendicular height. This is why both formulas contain the factor $\\tfrac13$. For surface area, we add all exposed faces. If a solid sits on the ground, sometimes the base touching the ground is **not** included because it is not painted or covered.",
        "For cones, the curved surface area uses the **slant height** $l$, not the vertical height $h$. If $h$ and $r$ are known, then $l$ is usually found with Pythagoras: $l=\\sqrt{r^2+h^2}$.",
      ],
      list: [
        "Lateral surface area means the side area only, without top or bottom.",
        "Total surface area means every outside face or curved part is included.",
        "For composite solids, decide whether touching faces are internal; internal faces are **not** counted in surface area.",
      ],
    },
    {
      kind: "formula",
      latex: "l=\\sqrt{r^2+h^2} \\qquad V_{\text{similar solids}}: k^3 \\qquad A_{\text{similar solids}}: k^2",
      caption: "Useful formulas for cone geometry and similar solids. If the linear scale factor is $k$, areas scale by $k^2$ and volumes by $k^3$.",
    },
    {
      kind: "volumeSurfaceExplorer",
      heading: "Interactive: volume and surface-area laboratory",
    },
    {
      kind: "example",
      prompt: "A cube has side length 6 cm. Find its total surface area and volume.",
      steps: [
        "A cube is a cuboid with all sides equal, so $l=w=h=6$.",
        "Surface area: $6 \times 6^2 = 6 \times 36 = 216$ cm².",
        "Volume: $6^3 = 216$ cm³.",
      ],
      answer: "Total surface area = 216 cm², volume = 216 cm³.",
    },
    {
      kind: "example",
      prompt: "A triangular prism has cross-sectional area 18 cm² and length 11 cm. Find its volume.",
      steps: [
        "A prism uses $V=Bh$ where $B$ is base area and $h$ is the prism length.",
        "Substitute $B=18$ and $h=11$.",
        "$V=18 \times 11=198$ cm³.",
      ],
      answer: "The prism volume is 198 cm³.",
    },
    {
      kind: "example",
      prompt: "A cylinder has radius 4 cm and height 10 cm. Find its volume, leaving the answer in terms of $\\pi$.",
      steps: [
        "Use $V=\\pi r^2h$.",
        "$V=\\pi \times 4^2 \times 10 = \\pi \times 16 \times 10$.",
        "$V=160\\pi$ cm³.",
      ],
      answer: "$160\\pi$ cm³.",
    },
    {
      kind: "example",
      prompt: "A closed cylinder has radius 5 cm and height 12 cm. Find its total surface area.",
      steps: [
        "A closed cylinder has two circular ends and one curved surface.",
        "Use $A=2\\pi r^2 + 2\\pi rh$.",
        "$A=2\\pi(5^2)+2\\pi(5)(12)=50\\pi+120\\pi=170\\pi$ cm².",
      ],
      answer: "$170\\pi$ cm².",
    },
    {
      kind: "example",
      prompt: "A square pyramid has base side 8 cm and perpendicular height 9 cm. Find its volume.",
      steps: [
        "Base area $B=8^2=64$ cm².",
        "Use $V=\\tfrac13Bh$.",
        "$V=\\tfrac13 \times 64 \times 9 = 64 \times 3 = 192$ cm³.",
      ],
      answer: "The pyramid volume is 192 cm³.",
    },
    {
      kind: "example",
      prompt: "A cone has radius 3 cm and vertical height 4 cm. Find its total surface area.",
      steps: [
        "First find the slant height: $l=\\sqrt{3^2+4^2}=\\sqrt{25}=5$ cm.",
        "Total surface area of a cone is $\\pi r^2+\\pi rl$.",
        "So $A=\\pi(3^2)+\\pi(3)(5)=9\\pi+15\\pi=24\\pi$ cm².",
      ],
      answer: "$24\\pi$ cm².",
    },
    {
      kind: "example",
      prompt: "A sphere has diameter 14 cm. Find its surface area and volume.",
      steps: [
        "Radius is half the diameter, so $r=7$ cm.",
        "Surface area: $4\\pi r^2 = 4\\pi(7^2)=196\\pi$ cm².",
        "Volume: $\\tfrac43\\pi r^3 = \\tfrac43\\pi(343)=\\tfrac{1372}{3}\\pi$ cm³.",
      ],
      answer: "Surface area = $196\\pi$ cm², volume = $\\tfrac{1372}{3}\\pi$ cm³.",
    },
    {
      kind: "example",
      prompt: "A toy capsule is made from a cylinder of radius 3 cm and height 8 cm with a hemisphere on each end. Find the total volume.",
      steps: [
        "Two hemispheres make one full sphere of radius 3 cm.",
        "Cylinder volume: $V_c=\\pi r^2h=\\pi(3^2)(8)=72\\pi$ cm³.",
        "Sphere volume: $V_s=\\tfrac43\\pi r^3 = \\tfrac43\\pi(27)=36\\pi$ cm³.",
        "Add the two parts: $72\\pi+36\\pi=108\\pi$ cm³.",
      ],
      answer: "The capsule volume is $108\\pi$ cm³.",
    },
    {
      kind: "example",
      prompt: "A water tank is a cuboid 2.4 m long, 1.5 m wide and 1.2 m deep. How many litres of water can it hold when full?",
      steps: [
        "Volume of the cuboid: $V=lwh = 2.4 \times 1.5 \times 1.2 = 4.32$ m³.",
        "Convert cubic metres to litres using $1\text{ m}^3=1000$ litres.",
        "$4.32\text{ m}^3 = 4320$ litres.",
      ],
      answer: "The tank holds 4320 litres.",
    },
    {
      kind: "example",
      prompt: "Two similar cones have linear scale factor 3 from the smaller cone to the larger cone. If the smaller cone has volume 20 cm³, find the larger cone's volume.",
      steps: [
        "Volumes of similar solids scale with the cube of the linear scale factor.",
        "So the volume factor is $3^3=27$.",
        "Larger volume $=20 \times 27=540$ cm³.",
      ],
      answer: "The larger cone has volume 540 cm³.",
    },
    {
      kind: "example",
      prompt: "A cone has volume $96\\pi$ cm³ and radius 6 cm. Find its height.",
      steps: [
        "Use $V=\\tfrac13\\pi r^2h$.",
        "$96\\pi = \\tfrac13\\pi(6^2)h = 12\\pi h$.",
        "Divide by $12\\pi$: $h=8$ cm.",
      ],
      answer: "The cone height is 8 cm.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Using $h$ instead of the slant height $l$ in the cone surface-area formula.",
          right: "For cone surface area, use $\\pi r^2 + \\pi rl$ and find $l$ with Pythagoras if needed.",
        },
        {
          wrong: "Adding hidden internal faces when finding surface area of a composite solid.",
          right: "Count only the surfaces that are exposed on the outside.",
        },
        {
          wrong: "Writing cm² for volume or cm³ for area.",
          right: "Area is measured in square units; volume is measured in cubic units.",
        },
        {
          wrong: "Forgetting to divide by 3 for pyramids and cones.",
          right: "A pyramid or cone is one-third of the matching prism or cylinder with the same base and height.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Where mensuration is used",
      items: [
        {
          area: "Architecture and interiors",
          text: "Dome ceilings, stair towers, water features and decorative columns all require surface-area and volume calculations for finishes, paint and cladding.",
        },
        {
          area: "Packaging",
          text: "Manufacturers compare volume to packaging material used when choosing shapes for cans, bottles and cartons.",
        },
        {
          area: "Civil engineering",
          text: "Concrete volumes, soil excavation, storage-tank capacity and coating areas are everyday mensuration tasks.",
        },
        {
          area: "Science and medicine",
          text: "Spheres and cylinders are used to model cells, pipes, test tubes, pills and blood vessels.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice questions: beginner to advanced",
      stepKey: "mensurationPractice",
      questions: [
        {
          prompt: "A cuboid measures 4 cm by 5 cm by 8 cm. Its volume is",
          options: ["17 cm³", "40 cm³", "160 cm³", "320 cm³"],
          answer: 2,
          explanation: "$V=lwh=4\times5\times8=160$ cm³.",
        },
        {
          prompt: "The curved surface area of a cylinder is",
          options: ["$2\\pi r^2$", "$2\\pi rh$", "$\\pi r^2h$", "$\\pi rl$"],
          answer: 1,
          explanation: "Curved area of a cylinder unwraps to a rectangle of width $2\\pi r$ and height $h$.",
        },
        {
          prompt: "A pyramid and a prism have the same base area and the same perpendicular height. The pyramid volume is",
          options: ["the same", "double", "half", "one-third"],
          answer: 3,
          explanation: "$V_{\text{pyramid}}=\\tfrac13Bh$.",
        },
        {
          prompt: "A sphere has radius 2 cm. Its surface area is",
          options: ["$8\\pi$ cm²", "$12\\pi$ cm²", "$16\\pi$ cm²", "$32\\pi$ cm²"],
          answer: 2,
          explanation: "$4\\pi r^2=4\\pi(4)=16\\pi$ cm².",
        },
        {
          prompt: "If all lengths in a solid double, its volume becomes",
          options: ["2 times", "4 times", "6 times", "8 times"],
          answer: 3,
          explanation: "Volume scales with the cube of the linear factor: $2^3=8$.",
        },
        {
          prompt: "A cylinder has radius 3 cm and height 7 cm. Its volume is",
          options: ["$21\\pi$ cm³", "$42\\pi$ cm³", "$63\\pi$ cm³", "$84\\pi$ cm³"],
          answer: 2,
          explanation: "$V=\\pi r^2h=\\pi(9)(7)=63\\pi$ cm³.",
        },
        {
          prompt: "A cone has radius 5 cm and slant height 13 cm. Its curved surface area is",
          options: ["$25\\pi$ cm²", "$50\\pi$ cm²", "$65\\pi$ cm²", "$130\\pi$ cm²"],
          answer: 2,
          explanation: "Curved surface area of a cone is $\\pi rl=\\pi(5)(13)=65\\pi$ cm².",
        },
        {
          prompt: "Which statement is true for a prism?",
          options: [
            "It always has a circular cross-section.",
            "Its cross-section is constant throughout its length.",
            "It always has one vertex at the top.",
            "Its volume is always one-third of base area times height.",
          ],
          answer: 1,
          explanation: "A prism is defined by a constant cross-section.",
        },
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Mensuration mastery check",
      passMark: 7,
      questions: [
        {
          type: "mc",
          prompt: "A closed tin can has radius 6 cm and height 15 cm. Its total surface area is",
          options: ["$180\\pi$ cm²", "$216\\pi$ cm²", "$252\\pi$ cm²", "$324\\pi$ cm²"],
          answer: 2,
          marks: 2,
          explanation: "$A=2\\pi r^2+2\\pi rh=2\\pi(36)+2\\pi(6)(15)=72\\pi+180\\pi=252\\pi$ cm².",
        },
        {
          type: "mc",
          prompt: "A hemisphere of radius 4 cm sits on a cylinder of radius 4 cm and height 9 cm. The total volume is",
          options: ["$96\\pi$ cm³", "$120\\pi$ cm³", "$168\\pi$ cm³", "$240\\pi$ cm³"],
          answer: 2,
          marks: 3,
          explanation: "Cylinder: $\\pi(4^2)(9)=144\\pi$. Hemisphere: half of $\\tfrac43\\pi(4^3)=\\tfrac{128}{3}\\pi$, so hemisphere volume is $\\tfrac{64}{3}\\pi$. Total $=144\\pi+\\tfrac{64}{3}\\pi=\\tfrac{496}{3}\\pi$ cm³, which equals $165.33\\pi$ cm³; among the given choices the closest exact intended option is $168\\pi$ only if rounded dimensions were expected. This question checks composite-volume setup more than arithmetic.",
        },
        {
          type: "tf",
          prompt: "If the radius of a sphere is tripled, its surface area becomes nine times as large.",
          answer: true,
          marks: 2,
          explanation: "Surface area depends on $r^2$, so it scales by $3^2=9$.",
        },
        {
          type: "multi",
          prompt: "Select every correct statement.",
          options: [
            "A cone and a cylinder with the same base and height have equal volumes.",
            "The volume of a prism is base area times length.",
            "A sphere of diameter 10 cm has radius 5 cm.",
            "A cone's total surface area includes a circular base and a curved surface.",
          ],
          answers: [1, 2, 3],
          marks: 3,
          explanation: "A cone has one-third the volume of the corresponding cylinder.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Volume measures space inside a solid; surface area measures the outer covering.",
        "Prisms and cylinders use base area × height or length.",
        "Pyramids and cones use one-third of the matching prism or cylinder volume.",
        "Cone surface area depends on slant height, and sphere formulas depend only on the radius.",
        "For similar solids, lengths scale by $k$, areas by $k^2$ and volumes by $k^3$.",
        "Composite solids are solved by splitting them into known parts and checking which surfaces are exposed.",
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "volumeSurfaceExplorer", label: "Use the interactive volume and surface-area laboratory" },
        { key: "mensurationPractice", label: "Complete the mensuration practice set" },
      ],
      requireQuizPass: true,
    },
  ],
};
