import type { LessonContent } from "@/lib/lesson-content-types";

export const translationRotationReflectionAndEnlargement: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "transformations-and-symmetry",
  lessonSlug: "translation-rotation-reflection-and-enlargement",
  title: "Translation, Rotation, Reflection and Enlargement",
  objectives: [
    "Describe translations, rotations, reflections and enlargements precisely using correct mathematical language.",
    "Apply coordinate rules to transform points and shapes accurately.",
    "Distinguish between congruence transformations and enlargements that create similar figures.",
    "Solve transformation questions from beginner to expert level, including combined transformations and centre of enlargement problems.",
    "Use illustrations, coordinates and vectors to justify answers.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A **transformation** changes the position, orientation or size of a shape according to a rule. It might slide the shape, turn it, reflect it in a mirror line, or enlarge it from a centre. These ideas are essential in geometry, design, computer graphics and technical drawing.",
        "In this lesson you will not only use the standard rules but also learn how to describe each transformation **exactly**. A good geometry answer is precise: for example, a rotation is not just a turn — it needs a centre, an angle and a direction.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Core definitions",
      body: "A **translation** slides every point by the same vector. A **rotation** turns a figure about a fixed centre. A **reflection** flips a figure in a mirror line. An **enlargement** changes the size of a figure from a centre using a scale factor. The original shape is the **object** and the new shape is the **image**.",
    },
    {
      kind: "cards",
      heading: "What changes and what stays the same?",
      columns: 2,
      items: [
        {
          title: "Translation",
          text: "Position changes, but lengths, angles, orientation and area stay the same.",
        },
        {
          title: "Rotation",
          text: "Position and orientation may change, but lengths, angles and area stay the same.",
        },
        {
          title: "Reflection",
          text: "Shape and size stay the same, but orientation reverses. Mirror-image effect appears.",
        },
        {
          title: "Enlargement",
          text: "Shape is preserved, but lengths and area change unless the scale factor is 1. The image is similar to the object.",
        },
      ],
    },
    {
      kind: "table",
      heading: "Coordinate rules to remember",
      headers: ["Transformation", "Rule", "Notes"],
      rows: [
        ["Translation by vector $(a,b)$", "$(x,y) \\to (x+a,y+b)$", "Add the vector components to every coordinate."],
        ["Reflection in x-axis", "$(x,y) \\to (x,-y)$", "x-coordinate stays, y-coordinate changes sign."],
        ["Reflection in y-axis", "$(x,y) \\to (-x,y)$", "y-coordinate stays, x-coordinate changes sign."],
        ["Reflection in $y=x$", "$(x,y) \\to (y,x)$", "Coordinates swap places."],
        ["Rotation $90^\\circ$ anticlockwise about origin", "$(x,y) \\to (-y,x)$", "Distance from origin stays the same."],
        ["Rotation $180^\\circ$ about origin", "$(x,y) \\to (-x,-y)$", "Equivalent to turning upside down through the origin."],
        ["Rotation $270^\\circ$ anticlockwise about origin", "$(x,y) \\to (y,-x)$", "Same as $90^\\circ$ clockwise."],
        ["Enlargement scale factor $k$ from origin", "$(x,y) \\to (kx,ky)$", "If $k<0$, the image lies on the opposite side of the centre."],
      ],
    },
    {
      kind: "imageGallery",
      heading: "Transformation illustrations",
      images: [
        {
          src: "/geometry-recreated/transformations-coordinate-rules.svg",
          alt: "Coordinate-plane illustrations for translation, reflection, rotation and enlargement.",
          caption: "Each transformation can be seen on a coordinate grid. Matching points should be tracked in a consistent order, such as $A, B, C$ to $A', B', C'$.",
        },
        {
          src: "/geometry-recreated/transformations-combined-example.svg",
          alt: "Illustration of a shape being reflected and then translated on a coordinate grid.",
          caption: "Combined transformations are performed one step at a time. Order matters: reflecting and then translating may give a different result from translating and then reflecting.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "Describing transformations accurately",
      paragraphs: [
        "A correct description of a transformation must contain all essential information. A translation needs a vector. A reflection needs the mirror line. A rotation needs the centre, the size of the angle and whether it is clockwise or anticlockwise. An enlargement needs its centre and scale factor.",
        "Translations, rotations and reflections are all **isometries** or **congruence transformations**, because they preserve length and angle. Enlargements preserve shape but not size, so the object and image are **similar** rather than congruent unless the scale factor is 1 or -1.",
        "A **negative scale factor** in enlargement sends the image to the opposite side of the centre. For example, scale factor $-2$ doubles all distances from the centre and reverses the direction through the centre.",
      ],
      list: [
        "The notation $A'$ is read as ‘A prime’, meaning the image of point $A$.",
        "To transform a polygon, transform each vertex, then join the image points in the same order.",
        "In exam questions, write the transformation name first, then the extra detail.",
      ],
    },
    {
      kind: "example",
      prompt: "Translate point $A(3,-2)$ by the vector $\\begin{pmatrix}5\\\\1\\end{pmatrix}$.",
      steps: [
        "Add 5 to the x-coordinate and 1 to the y-coordinate.",
        "$A'=(3+5,-2+1)$.",
        "$A'=(8,-1)$.",
      ],
      answer: "$A'=(8,-1)$.",
    },
    {
      kind: "example",
      prompt: "Reflect point $P(-4,7)$ in the y-axis.",
      steps: [
        "Reflection in the y-axis changes the sign of the x-coordinate.",
        "The y-coordinate remains the same.",
        "So $P'=(4,7)$.",
      ],
      answer: "$P'=(4,7)$.",
    },
    {
      kind: "example",
      prompt: "Rotate the point $(2,5)$ through $90^\\circ$ anticlockwise about the origin.",
      steps: [
        "Use the rule $(x,y)\\to(-y,x)$.",
        "Substitute $x=2$ and $y=5$.",
        "The image is $(-5,2)$.",
      ],
      answer: "$(-5,2)$.",
    },
    {
      kind: "example",
      prompt: "Enlarge the point $(-3,4)$ from the origin with scale factor 3.",
      steps: [
        "Multiply each coordinate by 3.",
        "$(-3,4)\\to(-9,12)$.",
        "The image lies on the same ray from the origin and is three times as far away.",
      ],
      answer: "$(-9,12)$.",
    },
    {
      kind: "example",
      prompt: "Triangle $ABC$ has vertices $A(1,1)$, $B(4,1)$ and $C(2,3)$. Reflect the triangle in the x-axis.",
      steps: [
        "Reflection in the x-axis maps $(x,y)$ to $(x,-y)$.",
        "$A'=(1,-1)$, $B'=(4,-1)$ and $C'=(2,-3)$.",
        "Join the three image points in the order $A'B'C'$.",
      ],
      answer: "The reflected triangle has vertices $(1,-1)$, $(4,-1)$ and $(2,-3)$.",
    },
    {
      kind: "example",
      prompt: "Describe the single transformation that maps a shape to its image when every point moves 6 units right and 2 units down.",
      steps: [
        "A move with the same displacement for every point is a translation.",
        "Right 6 means x increases by 6, and down 2 means y decreases by 2.",
        "So the translation vector is $\\begin{pmatrix}6\\\\-2\\end{pmatrix}$.",
      ],
      answer: "A translation by vector $\\begin{pmatrix}6\\\\-2\\end{pmatrix}$.",
    },
    {
      kind: "example",
      prompt: "A square with side 4 cm is enlarged by scale factor $1.5$. Find the new side length, the new perimeter and the new area.",
      steps: [
        "Lengths scale by 1.5, so the new side length is $4 \times 1.5=6$ cm.",
        "Perimeter also scales by 1.5, so new perimeter is $4 \times 6=24$ cm.",
        "Area scales by the square of the factor: $1.5^2=2.25$.",
        "Original area is $4^2=16$ cm², so new area is $16 \times 2.25=36$ cm².",
      ],
      answer: "New side length 6 cm, perimeter 24 cm, area 36 cm².",
    },
    {
      kind: "example",
      prompt: "The point $A(2,1)$ is enlarged to $A'(8,4)$ from the origin. Find the scale factor.",
      steps: [
        "Compare corresponding coordinates: $8 \div 2 = 4$ and $4 \div 1 = 4$.",
        "Both coordinates are multiplied by 4.",
        "Therefore the scale factor is 4.",
      ],
      answer: "Scale factor 4.",
    },
    {
      kind: "example",
      prompt: "The image of point $P(3,2)$ under an enlargement with scale factor $-2$ about the origin is required. Find $P'$.",
      steps: [
        "Multiply each coordinate by $-2$.",
        "$P' = (-6,-4)$.",
        "The negative sign shows that the image lies on the opposite side of the origin from the original point.",
      ],
      answer: "$P'=(-6,-4)$.",
    },
    {
      kind: "example",
      prompt: "A shape is first reflected in the y-axis and then translated by vector $\\begin{pmatrix}2\\\\-1\\end{pmatrix}$. Find the final image of the point $(4,3)$.",
      steps: [
        "First reflect in the y-axis: $(4,3)\\to(-4,3)$.",
        "Then translate by adding $(2,-1)$: $(-4,3)\\to(-2,2)$.",
        "Always do combined transformations in the stated order.",
      ],
      answer: "The final image is $(-2,2)$.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Writing ‘rotation 90°’ without giving centre or direction.",
          right: "State the full description, for example ‘rotation $90^\\circ$ anticlockwise about the origin’.",
        },
        {
          wrong: "Using the reflection rule for the wrong axis.",
          right: "x-axis changes the sign of $y$; y-axis changes the sign of $x$.",
        },
        {
          wrong: "Multiplying the area by the scale factor instead of its square.",
          right: "If lengths scale by $k$, areas scale by $k^2$.",
        },
        {
          wrong: "Changing the order of combined transformations.",
          right: "Carry out each transformation exactly in the order given.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Why transformations matter",
      items: [
        {
          area: "Interior design and architecture",
          text: "Tiling layouts, mirrored elevations, rotated plans and scaled drawings all use transformations.",
        },
        {
          area: "Computer graphics",
          text: "Every movement, flip, rotation and resize of a digital image uses transformation ideas.",
        },
        {
          area: "Engineering drawing",
          text: "Scaled parts, reflected profiles and rotated views are standard in technical diagrams.",
        },
        {
          area: "Art and pattern design",
          text: "Repeated motifs in wallpaper, Islamic geometry and textile design depend on symmetry and transformations.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice questions",
      stepKey: "transformationPractice",
      questions: [
        {
          prompt: "Translation by vector $\\begin{pmatrix}-3\\\\4\\end{pmatrix}$ sends $(5,1)$ to",
          options: ["$(2,5)$", "$(8,-3)$", "$(2,-3)$", "$(1,4)$"],
          answer: 0,
          explanation: "Add the vector components: $(5-3,1+4)=(2,5)$.",
        },
        {
          prompt: "Reflection in the x-axis sends $(-2,-7)$ to",
          options: ["$(2,-7)$", "$(-2,7)$", "$(7,-2)$", "$(-7,-2)$"],
          answer: 1,
          explanation: "Only the y-coordinate changes sign.",
        },
        {
          prompt: "The rule $(x,y)\\to(-y,x)$ is",
          options: [
            "reflection in y-axis",
            "rotation $90^\\circ$ anticlockwise about origin",
            "rotation $90^\\circ$ clockwise about origin",
            "reflection in $y=x$",
          ],
          answer: 1,
          explanation: "This is the standard $90^\\circ$ anticlockwise rule.",
        },
        {
          prompt: "An enlargement with scale factor 2 changes area by a factor of",
          options: ["2", "4", "6", "8"],
          answer: 1,
          explanation: "Area scales by $2^2=4$.",
        },
        {
          prompt: "Which transformation reverses orientation?",
          options: ["translation", "rotation", "reflection", "enlargement scale 2"],
          answer: 2,
          explanation: "Only reflection creates a mirror image.",
        },
        {
          prompt: "The image of $(3,-1)$ after a $180^\\circ$ rotation about the origin is",
          options: ["$(-3,1)$", "$(1,-3)$", "$(-1,3)$", "$(3,1)$"],
          answer: 0,
          explanation: "$180^\\circ$ rotation uses $(x,y)\\to(-x,-y)$.",
        },
        {
          prompt: "A shape enlarged by scale factor $-1$ is equivalent to",
          options: [
            "a translation",
            "a half turn about the centre",
            "a reflection in the x-axis",
            "no change at all",
          ],
          answer: 1,
          explanation: "Scale factor $-1$ keeps lengths but puts points on the opposite side of the centre.",
        },
        {
          prompt: "To describe an enlargement fully, you need",
          options: [
            "a centre and a scale factor",
            "a centre and an angle",
            "a vector only",
            "a line of reflection only",
          ],
          answer: 0,
          explanation: "Those are the two essential pieces of information.",
        },
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Transformation mastery check",
      passMark: 7,
      questions: [
        {
          type: "mc",
          prompt: "Triangle $ABC$ with vertices $(1,0)$, $(3,0)$ and $(2,2)$ is translated by $\\begin{pmatrix}-2\\\\5\\end{pmatrix}$. The image of $C$ is",
          options: ["$(0,7)$", "$(4,7)$", "$(0,3)$", "$(-4,7)$"],
          answer: 0,
          marks: 2,
          explanation: "$(2,2)\\to(0,7)$.",
        },
        {
          type: "tf",
          prompt: "All enlargements preserve angle size.",
          answer: true,
          marks: 2,
          explanation: "Enlargements produce similar figures, so corresponding angles are unchanged.",
        },
        {
          type: "matching",
          prompt: "Match each description to its transformation.",
          left: [
            "mirror image in a line",
            "slide by same displacement",
            "turn about a centre",
            "resize from a centre",
          ],
          options: ["translation", "rotation", "reflection", "enlargement"],
          answer: [2, 0, 1, 3],
          marks: 4,
          explanation: "Each transformation has a distinct defining action.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Translations slide, rotations turn, reflections mirror and enlargements resize.",
        "Translations, rotations and reflections preserve size and shape; enlargements preserve shape but change size.",
        "Coordinate rules allow fast and accurate transformations on a grid.",
        "A complete description of a transformation must include the right extra details such as vector, mirror line, centre, angle or scale factor.",
        "For enlargements, lengths scale by $k$, areas by $k^2$ and volumes by $k^3$.",
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "transformationPractice", label: "Complete the transformation practice set" },
      ],
      requireQuizPass: true,
    },
  ],
};
