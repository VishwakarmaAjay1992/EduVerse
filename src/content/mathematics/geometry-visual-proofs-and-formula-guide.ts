import type { LessonContent } from "@/lib/lesson-content-types";

export const geometryVisualProofsAndFormulaGuide: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "foundations-lines-and-angles",
  lessonSlug: "geometry-visual-proofs-and-formula-guide",
  title: "Geometry Visual Proofs and Formula Guide",
  objectives: [
    "Use diagrams as mathematical arguments, not only decorations.",
    "Review the complete geometry formula guide from the uploaded PDFs.",
    "Connect coloured visual proofs to algebra, triangles, circles and trigonometry.",
    "Practise explaining each visual proof in your own words."
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "This lesson collects the two uploaded Geometry PDFs into one visual self-study chapter. The first PDF is a colourful proof-without-words collection; the second PDF is a compact geometry formula guide.",
        "A proof without words is not meant to be ignored as a picture. Study each colour block, equal length mark, angle mark and rearrangement, then write the relationship that the diagram proves."
      ]
    },
    {
      kind: "callout",
      variant: "definition",
      title: "What is a proof without words?",
      body: "A proof without words is a diagram that shows why a result is true by area, length, angle, symmetry, rearrangement or volume. Your job is to translate the picture into a mathematical explanation."
    },
    {
      kind: "theory",
      heading: "Where these two PDFs fit in your website",
      paragraphs: [
        "The black-and-white Geometry formula guide supports Foundations, Lines and Angles; Triangles and Congruence; Similarity; Quadrilaterals; Polygons; and Circles.",
        "The coloured proof-without-words PDF supports deeper visual understanding. Some pages connect directly to Geometry, such as circle area, Pythagoras, Viviani’s theorem, law of cosines and trigonometric identities. Other pages use geometry to prove algebraic identities such as square and cube formulas."
      ],
      list: [
        "Use the formula guide when you need a quick theorem or definition.",
        "Use the visual proof pages when you need to understand why the theorem works.",
        "Do not memorise diagrams blindly; redraw them and label each part."
      ]
    },
    {
      kind: "table",
      heading: "PDF-to-website mapping",
      headers: ["PDF content", "Best website lesson", "How it is used"],
      rows: [
        ["Points, lines, rays and angles", "Points, Lines, Planes and Angles", "Definitions and foundation vocabulary"],
        ["Parallel lines and transversals", "Angle Relationships", "Corresponding, alternate and co-interior angles"],
        ["Triangles, centres, congruency and similarity", "Triangles, Congruent Triangles, Similar Triangles", "Theorems, proof writing and problem solving"],
        ["Quadrilaterals and polygons", "The Quadrilateral Family and Polygons", "Properties, classification and angle facts"],
        ["Circles, arcs, sectors and tangents", "Circle Basics and Circle Theorems", "Formula guide and theorem reference"],
        ["Coloured algebra/geometry visual proofs", "This visual proof lesson", "Area, volume and rearrangement reasoning"],
        ["Trigonometry visual proofs", "Trigonometry lessons and this lesson", "Identity proof by geometry" ]
      ]
    },
    {
      kind: "imageGallery",
      heading: "Complete coloured visual proof PDF",
      note: "All pages from the uploaded coloured Geometry proof-without-words PDF are included here as visual study cards.",
      images: [
        { src: "/geometry-pdf/visual-proofs/visual-proof-01.webp", alt: "Visual proof page 1", caption: "Proof without words for $(a+b+c)^2$: one large square of side $a+b+c$ is divided into $a^2$, $b^2$, $c^2$ and the six rectangular parts $ab,ab,ac,ac,bc,bc$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-02.webp", alt: "Visual proof page 2", caption: "Area models for $(a+b)^2$, $(a-b)^2$, $a^2-b^2$ and $(x+a)(x+b)$ using coloured rectangles." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-03.webp", alt: "Visual proof page 3", caption: "Cube-number visualisation: $1^3,2^3,3^3,4^3,5^3$ and how stacked cubes build larger square patterns." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-04.webp", alt: "Visual proof page 4", caption: "Circle area idea: a circle split into sectors can be rearranged approximately into a rectangle of height $r$ and width $\\pi r$, giving $A=\\pi r^2$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-05.webp", alt: "Visual proof page 5", caption: "Difference of squares and cubes: $a^2-b^2=(a-b)(a+b)$ and $a^3-b^3=(a-b)(a^2+ab+b^2)$ shown with area and volume blocks." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-06.webp", alt: "Visual proof page 6", caption: "A colourful rearrangement proof of the Pythagorean theorem, showing the same pieces forming $c^2$ and $a^2+b^2$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-07.webp", alt: "Visual proof page 7", caption: "Angle proof without words using a transversal-like arrangement where coloured angles correspond and add to a straight angle." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-08.webp", alt: "Visual proof page 8", caption: "Viviani’s theorem: in an equilateral triangle, the sum of perpendicular distances from an interior point to the three sides equals the altitude." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-09.webp", alt: "Visual proof page 9", caption: "Visual proof of $1^3+2^3+\\cdots+n^3=(1+2+\\cdots+n)^2$ using cube blocks arranged into a square slab." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-10.webp", alt: "Visual proof page 10", caption: "General version of the sum-of-cubes identity with a square built from cube layers." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-11.webp", alt: "Visual proof page 11", caption: "Geometric proof of the cosine addition formula using a unit-length slanted segment and perpendicular projections." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-12.webp", alt: "Visual proof page 12", caption: "Proof without words for the Law of Cosines: $c^2=a^2+b^2-2ab\\cos\\theta$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-13.webp", alt: "Visual proof page 13", caption: "Geometric comparison of harmonic, geometric, arithmetic and root mean square quantities." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-14.webp", alt: "Visual proof page 14", caption: "Trigonometric identity visual proof involving $\\tan\\theta$, $\\cot\\theta$, $\\sec\\theta$ and $\\csc\\theta$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-15.webp", alt: "Visual proof page 15", caption: "Unit-circle construction for $\\sin^2\\theta+\\cos^2\\theta=1$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-16.webp", alt: "Visual proof page 16", caption: "Visual proof of the tangent addition formula $\\tan(x+y)=\\frac{\\tan x+\\tan y}{1-\\tan x\\tan y}$." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-17.webp", alt: "Visual proof page 17", caption: "Additional visual proof page 17: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-18.webp", alt: "Visual proof page 18", caption: "Additional visual proof page 18: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-19.webp", alt: "Visual proof page 19", caption: "Additional visual proof page 19: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-20.webp", alt: "Visual proof page 20", caption: "Additional visual proof page 20: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-21.webp", alt: "Visual proof page 21", caption: "Additional visual proof page 21: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-22.webp", alt: "Visual proof page 22", caption: "Additional visual proof page 22: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-23.webp", alt: "Visual proof page 23", caption: "Additional visual proof page 23: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." },
        { src: "/geometry-pdf/visual-proofs/visual-proof-24.webp", alt: "Visual proof page 24", caption: "Additional visual proof page 24: use the coloured diagram as a proof-without-words exercise and write the algebraic or geometric relationship shown by the picture." }
      ]
    },
    {
      kind: "imageGallery",
      heading: "Complete Geometry formula guide PDF",
      note: "All pages from the uploaded Geometry formula guide PDF are included here. Use this as a revision sheet while solving the Geometry lessons.",
      images: [
        { src: "/geometry-pdf/formula-guide/geometry-guide-01.webp", alt: "Geometry formula guide page 1", caption: "Point, line, line segment, ray and angle definitions, including important facts about lines and points." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-02.webp", alt: "Geometry formula guide page 2", caption: "Angles on a line and around a point, vertically opposite angles, and angle relations formed by parallel lines and a transversal." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-03.webp", alt: "Geometry formula guide page 3", caption: "Triangle definition and classification: acute, obtuse, scalene, isosceles, equilateral and right-angled triangles." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-04.webp", alt: "Geometry formula guide page 4", caption: "Important triangle properties and the circumcentre as a triangle centre." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-05.webp", alt: "Geometry formula guide page 5", caption: "Incentre, excircle, orthocentre and centroid, with diagrams showing angle bisectors, altitudes and medians." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-06.webp", alt: "Geometry formula guide page 6", caption: "Important points about triangle centres, and congruency criteria SSS, SAS, ASA/AAS and RHS." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-07.webp", alt: "Geometry formula guide page 7", caption: "Similarity of triangles and major triangle theorems: Pythagoras, angle bisector theorem, basic proportionality and midpoint theorem." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-08.webp", alt: "Geometry formula guide page 8", caption: "Additional triangle theorems including Apollonius theorem and area ratios of similar triangles, followed by quadrilateral basics and cyclic quadrilateral facts." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-09.webp", alt: "Geometry formula guide page 9", caption: "Parallelogram, rhombus and rectangle definitions with their side, angle and diagonal properties." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-10.webp", alt: "Geometry formula guide page 10", caption: "Square and trapezium definitions plus key area facts for figures on the same base and between the same parallel lines." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-11.webp", alt: "Geometry formula guide page 11", caption: "Polygon, convex polygon and concave polygon definitions and the exterior-angle result." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-12.webp", alt: "Geometry formula guide page 12", caption: "Circle terminology and theorems about arc, chord, perpendicular from centre to chord and tangent from an external point." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-13.webp", alt: "Geometry formula guide page 13", caption: "More circle theorems including equal chords, angles in the same segment and cyclic quadrilaterals." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-14.webp", alt: "Geometry formula guide page 14", caption: "Arc and sector formulas plus segment theorem illustration." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-15.webp", alt: "Geometry formula guide page 15", caption: "Important remembered results for circles, tangents, arcs and cyclic quadrilaterals." }
      ]
    },
    {
      kind: "practice",
      heading: "Self-study visual proof practice",
      questions: [
        { prompt: "In the visual proof of $(a+b+c)^2$, how many $ab$ rectangles appear?", options: ["1", "2", "3", "4"], answer: 1, explanation: "There are two rectangles of area $ab$, so the total contribution is $2ab$." },
        { prompt: "The circle-area rearrangement changes circle sectors into a near-rectangle. What is the approximate width of that rectangle?", options: ["$r$", "$2r$", "$\\pi r$", "$\\pi r^2$"], answer: 2, explanation: "Half the circumference is $\\pi r$, and the height is $r$, giving $A=\\pi r^2$." },
        { prompt: "Which theorem is shown by the colourful diagram where $c^2$ is rearranged into $a^2+b^2$?", options: ["Pythagorean theorem", "Angle bisector theorem", "Tangent theorem", "Midpoint theorem"], answer: 0, explanation: "The rearrangement proves $c^2=a^2+b^2$ for a right triangle." },
        { prompt: "In a triangle, the centroid divides each median in which ratio from vertex to side?", options: ["1:1", "2:1", "3:1", "1:2"], answer: 1, explanation: "The centroid divides the median in the ratio $2:1$, with the longer part near the vertex." },
        { prompt: "In a cyclic quadrilateral, opposite angles are:", options: ["equal", "complementary", "supplementary", "always right angles"], answer: 2, explanation: "Opposite angles of a cyclic quadrilateral add to $180^\circ$." }
      ]
    },
    {
      kind: "summary",
      points: [
        "The uploaded PDFs have been kept as complete visual resources inside this lesson.",
        "The same content is also connected to the individual Geometry lessons so students meet it in the correct topic area.",
        "Visual proofs are powerful because they show why an identity or theorem is true, not only what the formula is.",
        "The formula guide is useful for revision, but deep learning comes from redrawing and explaining the diagrams."
      ]
    },
    {
      kind: "completion",
      steps: [
        { key: "visuals", label: "Study the visual proof cards" },
        { key: "guide", label: "Review the formula guide" },
        { key: "practice", label: "Complete the visual proof practice" }
      ],
      requireQuizPass: false
    }
  ]
};
