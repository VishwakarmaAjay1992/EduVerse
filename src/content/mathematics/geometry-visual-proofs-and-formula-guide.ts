import type { LessonContent } from "@/lib/lesson-content-types";

export const geometryVisualProofsAndFormulaGuide: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "foundations-lines-and-angles",
  lessonSlug: "geometry-visual-proofs-and-formula-guide",
  title: "Geometry Visual Proofs and Quick Reference",
  objectives: [
    "Use diagrams as mathematical arguments, not only decorations.",
    "Study clean colour recreations of important visual proofs.",
    "Revise core Geometry facts in typed, textbook-style notes.",
    "Connect visual reasoning to angles, triangles, quadrilaterals, circles and trigonometry."
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "This lesson is a visual companion to the Geometry section. It keeps the earlier textbook-style lessons and adds clean proof cards together with typed revision notes.",
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
      kind: "imageGallery",
      heading: "Colour visual proofs",
      note: "These cards are recreated visuals with cleaner headers and lesson-friendly captions.",
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
      kind: "theory",
      heading: "Foundational geometry notes",
      paragraphs: [
        "A point shows an exact position and has no length, breadth or thickness. A line is a straight path extending infinitely in both directions. A line segment is a finite part of a line with two endpoints, while a ray starts at one endpoint and extends endlessly in one direction.",
        "An angle is formed by two rays from a common initial point. Acute angles are less than $90^\circ$, right angles equal $90^\circ$, obtuse angles lie between $90^\circ$ and $180^\circ$, straight angles equal $180^\circ$ and reflex angles lie between $180^\circ$ and $360^\circ$."
      ],
      list: [
        "Angles on a straight line sum to $180^\circ$.",
        "Angles around a point sum to $360^\circ$.",
        "Vertically opposite angles are equal.",
        "For parallel lines cut by a transversal: corresponding angles are equal, alternate angles are equal, and co-interior angles sum to $180^\circ$."
      ]
    },
    {
      kind: "table",
      heading: "Triangle quick-reference notes",
      headers: ["Topic", "Key fact"],
      rows: [
        ["Triangle types", "Triangles may be acute, obtuse, scalene, isosceles, equilateral or right-angled."],
        ["Angle sum", "The three interior angles of a triangle sum to $180^\circ$."],
        ["Exterior angle theorem", "An exterior angle equals the sum of the two opposite interior angles."],
        ["Side-angle relation", "The longest side lies opposite the greatest angle, and the shortest side lies opposite the smallest angle."],
        ["Centres", "Circumcentre is formed by perpendicular bisectors, incentre by angle bisectors, orthocentre by altitudes, and centroid by medians."],
        ["Centroid ratio", "The centroid divides each median in the ratio $2:1$ from vertex to side."]
      ]
    },
    {
      kind: "table",
      heading: "Congruency and similarity toolkit",
      headers: ["Idea", "Typed note"],
      rows: [
        ["Congruent triangles", "Congruent triangles are identical in shape and size. Use SSS, SAS, ASA/AAS and RHS."],
        ["Similar triangles", "Similar triangles have the same shape but not necessarily the same size. Use AA/AAA, SAS proportionality and SSS proportionality."],
        ["Pythagoras", "For a right triangle, $c^2=a^2+b^2$ where $c$ is the hypotenuse."],
        ["Midpoint theorem", "The segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length."],
        ["Basic proportionality theorem", "A line parallel to one side of a triangle divides the other two sides proportionally."],
        ["Area ratio", "The areas of similar triangles are in the ratio of the squares of corresponding sides."]
      ]
    },
    {
      kind: "table",
      heading: "Quadrilateral and polygon notes",
      headers: ["Figure", "Property summary"],
      rows: [
        ["Quadrilateral", "A quadrilateral has four sides, and its interior angles sum to $360^\circ$."],
        ["Cyclic quadrilateral", "If all four vertices lie on a circle, opposite angles are supplementary."],
        ["Parallelogram", "Opposite sides are parallel and equal, opposite angles are equal, and diagonals bisect each other."],
        ["Rhombus", "A rhombus is a parallelogram with all sides equal. Its diagonals are perpendicular bisectors."],
        ["Rectangle", "A rectangle is a parallelogram with four right angles. Its diagonals are equal."],
        ["Square", "A square is both a rectangle and a rhombus. Its diagonals are equal, perpendicular and bisect each other."],
        ["Trapezium", "A trapezium has one pair of parallel sides."],
        ["Polygon", "The sum of exterior angles of any polygon is $360^\circ$. The sum of interior angles of an $n$-gon is $(n-2)\times180^\circ$." ]
      ]
    },
    {
      kind: "table",
      heading: "Circle notes",
      headers: ["Circle idea", "Key fact"],
      rows: [
        ["Chord and radius", "The perpendicular from the centre to a chord bisects the chord."],
        ["Equal chords", "Equal chords are equidistant from the centre, and equal chords subtend equal angles at the centre."],
        ["Angles in the same segment", "Angles subtended by the same chord in the same segment are equal."],
        ["Cyclic quadrilateral", "Opposite angles in a cyclic quadrilateral sum to $180^\circ$."],
        ["Tangents", "A tangent is perpendicular to the radius at the point of contact, and tangents from the same external point are equal."],
        ["Arc length", "Arc length = $\dfrac{\theta}{360^\circ} \times 2\pi r$."],
        ["Sector area", "Sector area = $\dfrac{\theta}{360^\circ} \times \pi r^2$." ]
      ]
    },
    {
      kind: "practice",
      heading: "Self-study practice",
      questions: [
        { prompt: "In the visual proof of $(a+b+c)^2$, how many rectangles of area $ab$ appear?", options: ["1", "2", "3", "4"], answer: 1, explanation: "There are two separate $ab$ rectangles, so together they contribute $2ab$." },
        { prompt: "When circle sectors are rearranged into a near-rectangle, what is the approximate width?", options: ["$r$", "$2r$", "$\pi r$", "$\pi r^2$"], answer: 2, explanation: "The rearranged sectors form a strip whose width is about half the circumference, which is $\pi r$." },
        { prompt: "Which theorem is shown by the rearrangement with four right triangles and the central squares?", options: ["Midpoint theorem", "Pythagorean theorem", "Tangent theorem", "Exterior angle theorem"], answer: 1, explanation: "It is the classic rearrangement proof of $c^2=a^2+b^2$." },
        { prompt: "In Viviani’s theorem, the sum of the three perpendicular distances from an interior point equals the:", options: ["perimeter", "base", "altitude", "semiperimeter"], answer: 2, explanation: "For an equilateral triangle, the sum of those three distances is exactly the altitude." },
        { prompt: "The sum of the exterior angles of any polygon is:", options: ["$180^\circ$", "$270^\circ$", "$360^\circ$", "depends on the number of sides"], answer: 2, explanation: "No matter how many sides the polygon has, one full turn is $360^\circ$." }
      ]
    },
    {
      kind: "summary",
      points: [
        "Your earlier Geometry content is still present; this lesson adds typed revision notes and recreated visuals rather than scanned pages.",
        "The colour proof cards are recreated assets, not direct page screenshots.",
        "Visual proofs help students remember both the formula and the reason behind it.",
        "The typed quick-reference notes are best used alongside the deeper textbook-style lessons."
      ]
    },
    {
      kind: "completion",
      steps: [
        { key: "visuals", label: "Study the visual proof cards" },
        { key: "notes", label: "Revise the quick-reference notes" },
        { key: "practice", label: "Complete the self-study practice" }
      ],
      requireQuizPass: false
    }
  ]
};
