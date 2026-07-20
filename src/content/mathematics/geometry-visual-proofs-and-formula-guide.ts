import type { LessonContent } from "@/lib/lesson-content-types";

export const geometryVisualProofsAndFormulaGuide: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "foundations-lines-and-angles",
  lessonSlug: "geometry-visual-proofs-and-formula-guide",
  title: "Geometry Visual Proofs and Quick Reference",
  objectives: [
    "Use diagrams as mathematical arguments, not only decorations.",
    "Study clean colour recreations of important visual proofs.",
    "Connect visual reasoning to algebra, triangles, circles and trigonometry.",
    "Use the quick-reference pages for revision while keeping the earlier Geometry lessons intact."
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "This lesson is a visual companion to your existing Geometry section. It keeps the earlier textbook-style content, then adds carefully organised proof cards and quick-reference pages for revision.",
        "A visual proof is not just a picture. Read the labels, notice the equal lengths, angle marks, colour blocks and rearrangements, then explain the result in your own words."
      ]
    },
    {
      kind: "callout",
      variant: "definition",
      title: "What is a visual proof?",
      body: "A visual proof shows why a statement is true by using area, length, symmetry, angle relationships, dissection or rearrangement. The learner should be able to translate the picture into a full mathematical explanation."
    },
    {
      kind: "theory",
      heading: "How to use this lesson",
      paragraphs: [
        "Use the colour proof cards when you want to understand why an identity or theorem works. Use the quick-reference pages when you need a fast reminder of definitions, properties and standard results.",
        "Most of these visuals also connect directly to your other Geometry lessons such as angles, triangles, congruency, similarity, quadrilaterals, circles and the Pythagorean theorem."
      ],
      list: [
        "Study one proof card at a time and rewrite the proof in words.",
        "Match each visual to the correct Geometry chapter.",
        "Use the quick-reference pages only after understanding the full lesson notes.",
        "Redraw the diagrams during self-study so that the result stays in memory."
      ]
    },
    {
      kind: "table",
      heading: "Topic connections",
      headers: ["Visual topic", "Best lesson to revise with it", "Main idea"],
      rows: [
        ["Points, lines, rays and angles", "Points, Lines, Planes and Angles", "Foundation vocabulary and angle facts"],
        ["Parallel lines and transversals", "Angle Relationships", "Corresponding, alternate and co-interior angles"],
        ["Triangles and centres", "Triangles and Their Angles", "Classification, centres and important properties"],
        ["Congruency and similarity", "Congruent Triangles / Similar Triangles and Scale", "Proof conditions and ratio reasoning"],
        ["Quadrilaterals and polygons", "The Quadrilateral Family / Interior and Exterior Angles of Polygons", "Properties, classification and angle sums"],
        ["Circle area and circle theorems", "Parts of a Circle / Circle Theorems and Proofs", "Area, arc, sector and theorem intuition"],
        ["Pythagorean and triangle identities", "The Pythagorean Theorem", "Rearrangement and area reasoning"],
        ["Trigonometric visual proofs", "Trigonometry lessons", "Identity proofs by geometry"]
      ]
    },
    {
      kind: "imageGallery",
      heading: "Colour visual proofs",
      note: "These cards are recreated visuals based on your uploaded pages, with cleaner headers and lesson-friendly captions.",
      images: [
        { src: "/geometry-recreated/visual-proofs/visual-proof-01.svg", alt: "Expansion of (a+b+c)^2", caption: "A large square of side $a+b+c$ is partitioned into $a^2$, $b^2$, $c^2$ and six rectangles. Adding the parts gives $(a+b+c)^2 = a^2+b^2+c^2+2ab+2ac+2bc$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-02.svg", alt: "Area identities with rectangles", caption: "Area models for $(a+b)^2$, $(a-b)^2$, $a^2-b^2$ and $(x+a)(x+b)$. Each coloured region turns an algebraic identity into a visible area statement." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-03.svg", alt: "Cube number growth", caption: "A visual build-up of $1^3, 2^3, 3^3, 4^3$ and beyond. This prepares the idea that sums of cubes create square patterns." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-04.svg", alt: "Why area of a circle is pi r squared", caption: "Circle sectors are rearranged into a nearly rectangular strip of height $r$ and width about $\pi r$. This gives the area formula $A=\pi r^2$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-05.svg", alt: "Difference of squares and cubes", caption: "Subtracting a smaller square or cube from a larger one reveals the factorised forms $a^2-b^2=(a-b)(a+b)$ and $a^3-b^3=(a-b)(a^2+ab+b^2)$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-06.svg", alt: "Pythagorean theorem by rearrangement", caption: "The same four right triangles can be arranged around either a central square $c^2$ or the two squares $a^2$ and $b^2$. Therefore $c^2=a^2+b^2$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-07.svg", alt: "Angle sum visual proof", caption: "Matching colours show equal angles in a parallel-line style arrangement. The top angles lie on a straight line, so the total is $180^\circ$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-08.svg", alt: "Viviani theorem", caption: "In an equilateral triangle, the sum of the perpendicular distances from any interior point to the three sides equals the altitude. This is Viviani’s theorem." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-09.svg", alt: "Sum of cubes visual proof", caption: "A square built from layers of cube numbers leads to $1^3+2^3+\cdots+n^3=(1+2+\cdots+n)^2$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-10.svg", alt: "General sum of cubes pattern", caption: "A more general layout of the same result, showing that the square of the running sum equals the sum of the cubes." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-11.svg", alt: "Cosine addition formula", caption: "A geometric layout of perpendicular projections gives the cosine addition identity $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-12.svg", alt: "Law of cosines", caption: "A diagram of labelled segments inside a circle gives the law of cosines $c^2=a^2+b^2-2ab\cos\theta$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-13.svg", alt: "Mean inequalities", caption: "This geometric arrangement compares the harmonic mean, geometric mean, arithmetic mean and root mean square in one picture." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-14.svg", alt: "Trigonometric identity with tan cot sec csc", caption: "A circle-and-tangent construction gives a rich trigonometric identity and visually links $\tan\theta$, $\cot\theta$, $\sec\theta$ and $\csc\theta$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-15.svg", alt: "Sine squared plus cosine squared equals one", caption: "A right triangle inside a unit quarter-circle shows that the horizontal and vertical components satisfy $\sin^2\theta+\cos^2\theta=1$." },
        { src: "/geometry-recreated/visual-proofs/visual-proof-16.svg", alt: "Tangent addition formula", caption: "A square-style construction gives the tangent addition formula $\tan(x+y)=\dfrac{\tan x+\tan y}{1-\tan x\tan y}$." }
      ]
    },
    {
      kind: "imageGallery",
      heading: "Geometry quick-reference pages",
      note: "Use these pages as revision support while working through the full Geometry lessons.",
      images: [
        { src: "/geometry-pdf/formula-guide/geometry-guide-01.webp", alt: "Geometry reference page 1", caption: "Point, line, line segment, ray and angle definitions, with key reminders about how lines and points behave." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-02.webp", alt: "Geometry reference page 2", caption: "Angles on a line and around a point, vertically opposite angles, and angle relationships formed by a transversal across parallel lines." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-03.webp", alt: "Geometry reference page 3", caption: "Triangle definitions and classification: acute, obtuse, scalene, isosceles, equilateral and right-angled triangles." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-04.webp", alt: "Geometry reference page 4", caption: "Important triangle properties and a circumcentre diagram." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-05.webp", alt: "Geometry reference page 5", caption: "Incentre, orthocentre, centroid and related construction diagrams." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-06.webp", alt: "Geometry reference page 6", caption: "Important facts about triangle centres and the congruency criteria SSS, SAS, ASA/AAS and RHS." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-07.webp", alt: "Geometry reference page 7", caption: "Similarity of triangles and core theorems such as Pythagoras, the angle bisector theorem and the midpoint theorem." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-08.webp", alt: "Geometry reference page 8", caption: "Further triangle theorems, area ratios of similar triangles, and quadrilateral basics including cyclic quadrilateral facts." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-09.webp", alt: "Geometry reference page 9", caption: "Definitions and properties of parallelograms, rhombuses and rectangles." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-10.webp", alt: "Geometry reference page 10", caption: "Square and trapezium properties, plus key area facts for figures on the same base and between the same parallels." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-11.webp", alt: "Geometry reference page 11", caption: "Polygon facts, including convex and concave polygons and the exterior-angle result." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-12.webp", alt: "Geometry reference page 12", caption: "Circle terminology and theorems about chords, tangents and radii." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-13.webp", alt: "Geometry reference page 13", caption: "More circle theorems, including same-segment angles and cyclic quadrilateral properties." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-14.webp", alt: "Geometry reference page 14", caption: "Arc and sector formulas with key diagram support." },
        { src: "/geometry-pdf/formula-guide/geometry-guide-15.webp", alt: "Geometry reference page 15", caption: "Important remembered results about circles, tangents, arcs and cyclic quadrilaterals." }
      ]
    },
    {
      kind: "practice",
      heading: "Self-study practice",
      questions: [
        { prompt: "In the visual proof of $(a+b+c)^2$, how many rectangles of area $ab$ appear?", options: ["1", "2", "3", "4"], answer: 1, explanation: "There are two separate $ab$ rectangles, so together they contribute $2ab$." },
        { prompt: "When circle sectors are rearranged into a near-rectangle, what is the approximate width?", options: ["$r$", "$2r$", "$\\pi r$", "$\\pi r^2$"], answer: 2, explanation: "The rearranged sectors form a strip whose width is about half the circumference, which is $\\pi r$." },
        { prompt: "Which theorem is shown by the rearrangement with four right triangles and the central squares?", options: ["Midpoint theorem", "Pythagorean theorem", "Tangent theorem", "Exterior angle theorem"], answer: 1, explanation: "It is the classic rearrangement proof of $c^2=a^2+b^2$." },
        { prompt: "In Viviani’s theorem, the sum of the three perpendicular distances from an interior point equals the:", options: ["perimeter", "base", "altitude", "semiperimeter"], answer: 2, explanation: "For an equilateral triangle, the sum of those three distances is exactly the altitude." },
        { prompt: "The identity $1^3+2^3+\cdots+n^3=(1+2+\cdots+n)^2$ links the sum of cubes to a:", options: ["circle area", "square pattern", "triangle angle sum", "chord theorem"], answer: 1, explanation: "The visual proof turns the sum of cubes into a square pattern." }
      ]
    },
    {
      kind: "summary",
      points: [
        "Your earlier Geometry content is still present; this lesson adds a visual layer rather than replacing it.",
        "The colour proof cards are recreated assets, not direct page screenshots.",
        "Visual proofs help students remember both the formula and the reason behind it.",
        "The quick-reference pages are best used alongside the deeper textbook-style lessons."
      ]
    },
    {
      kind: "completion",
      steps: [
        { key: "visuals", label: "Study the visual proof cards" },
        { key: "reference", label: "Review the quick-reference pages" },
        { key: "practice", label: "Complete the self-study practice" }
      ],
      requireQuizPass: false
    }
  ]
};
