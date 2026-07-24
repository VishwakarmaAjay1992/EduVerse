import type { LessonContent } from "@/lib/lesson-content-types";

export const rulerAndCompassConstructions: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "transformations-and-symmetry",
  lessonSlug: "ruler-and-compass-constructions",
  title: "Ruler and Compass Constructions",
  objectives: [
    "Understand what counts as an exact geometric construction.",
    "Construct standard objects such as perpendicular bisectors, angle bisectors, perpendiculars and special angles.",
    "Use constructions to solve locus problems and triangle-building tasks.",
    "Explain why each construction works rather than simply memorising steps.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Geometric construction is the art of making an **exact** diagram using a straightedge and a compass. Unlike a sketch, a construction is based on geometric properties such as equal radii, perpendicularity and symmetry. This is why every arc you draw has a reason.",
        "In this lesson, you will learn the classic school constructions and the logic behind them. You will also see how loci — sets of points satisfying a condition — connect directly to perpendicular bisectors, angle bisectors and circles.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Construction and locus",
      body: "A **construction** is an exact geometric drawing made with a straightedge and compass. A **locus** is the set of all points that satisfy a given rule. Many standard constructions work because they create points belonging to one or more loci at the same time.",
    },
    {
      kind: "imageGallery",
      heading: "Construction illustrations",
      images: [
        {
          src: "/geometry-recreated/constructions-standard-steps.svg",
          alt: "Illustrated steps for perpendicular bisector, angle bisector and perpendicular construction.",
          caption: "Equal-radius arcs create equal distances. Intersections of arcs mark points that satisfy distance conditions exactly.",
        },
        {
          src: "/geometry-recreated/constructions-loci-map.svg",
          alt: "Locus examples showing points equidistant from endpoints, lines and fixed points.",
          caption: "A perpendicular bisector is the locus of points equidistant from two endpoints. An angle bisector is the locus of points equidistant from two rays.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "Construction tools and discipline",
      paragraphs: [
        "A straightedge is used to draw straight lines, but in pure geometry it is not used as a measuring scale. The compass copies distances exactly by keeping the radius fixed. That is why you must avoid changing the compass width in the middle of a step unless the method tells you to do so.",
        "Good constructions use light arcs, sharp intersections and clear final lines. Leave the construction arcs visible unless a question explicitly tells you to erase them, because they show the reasoning behind the result.",
      ],
      list: [
        "More than half the segment means the arcs from each endpoint will intersect.",
        "Equal radii imply equal distances from the chosen centre.",
        "Intersections of loci solve many geometry problems elegantly.",
      ],
    },
    {
      kind: "table",
      heading: "Standard constructions and why they work",
      headers: ["Construction", "Main idea", "Why it works"],
      rows: [
        [
          "Perpendicular bisector of a segment",
          "Draw equal-radius arcs from each endpoint.",
          "Arc intersections are equidistant from both endpoints, so the line through them is the locus of such points.",
        ],
        [
          "Angle bisector",
          "Mark equal distances on both arms, then intersect equal-radius arcs.",
          "The intersection is equidistant from both arms, so joining it to the vertex gives the angle bisector.",
        ],
        [
          "Perpendicular through a point on a line",
          "Create equal points on the line around the given point, then bisect.",
          "Symmetry forces the new line to meet the original at $90^\\circ$.",
        ],
        [
          "60° angle",
          "Use the equilateral triangle idea.",
          "Equal radii create equal side lengths, and equilateral triangles have all angles 60°.",
        ],
        [
          "Triangle with given side lengths",
          "Draw one side first, then use arcs from the endpoints.",
          "The arc intersection is exactly the distance required from both endpoints.",
        ],
      ],
    },
    {
      kind: "example",
      prompt: "Construct the perpendicular bisector of segment $AB$.",
      steps: [
        "Open the compass to a width greater than half of $AB$.",
        "With centre $A$, draw one arc above the segment and one below it.",
        "Without changing the compass width, repeat from centre $B$ so that the new arcs intersect the first pair.",
        "Join the two arc-intersection points with a straight line.",
        "This line cuts $AB$ at its midpoint and at $90^\\circ$, so it is the perpendicular bisector.",
      ],
      answer: "The line through the two arc intersections is the perpendicular bisector of $AB$.",
    },
    {
      kind: "example",
      prompt: "Construct the bisector of angle $AOB$.",
      steps: [
        "With centre $O$, draw an arc that cuts the two arms of the angle at points $P$ and $Q$.",
        "Using the same compass width, draw arcs from $P$ and $Q$ so they meet at a point $R$ inside the angle.",
        "Join $O$ to $R$.",
        "Because $R$ is equidistant from the two arms of the angle, $OR$ bisects the angle.",
      ],
      answer: "Ray $OR$ is the angle bisector.",
    },
    {
      kind: "example",
      prompt: "Construct a perpendicular to a line $l$ through a point $P$ lying on the line.",
      steps: [
        "With centre $P$, draw an arc cutting the line at points $A$ and $B$.",
        "With centres $A$ and $B$ and equal radius greater than $AP$, draw arcs on one side of the line to meet at $R$.",
        "Join $P$ to $R$.",
        "By symmetry, $PR$ is perpendicular to $AB$, and therefore perpendicular to $l$.",
      ],
      answer: "$PR$ is the required perpendicular.",
    },
    {
      kind: "example",
      prompt: "Construct a $60^\\circ$ angle at point $A$ on a ray $AB$.",
      steps: [
        "With centre $A$, draw an arc that meets the ray at $B$.",
        "With centre $B$ and the same compass width, draw an arc that intersects the first arc at $C$.",
        "Join $A$ to $C$.",
        "Triangle $ABC$ is equilateral, so $\\angle CAB=60^\\circ$.",
      ],
      answer: "The new ray $AC$ forms a $60^\\circ$ angle with $AB$.",
    },
    {
      kind: "example",
      prompt: "Construct a triangle with side lengths 5 cm, 6 cm and 7 cm.",
      steps: [
        "Draw a base segment $AB=7$ cm.",
        "With centre $A$, draw an arc of radius 5 cm.",
        "With centre $B$, draw an arc of radius 6 cm.",
        "Let the arcs meet at $C$. Join $AC$ and $BC$.",
        "Now $AC=5$ cm, $BC=6$ cm and $AB=7$ cm by construction.",
      ],
      answer: "Triangle $ABC$ is the required triangle.",
    },
    {
      kind: "example",
      prompt: "Describe the locus of points equidistant from two fixed points $A$ and $B$.",
      steps: [
        "A point equidistant from $A$ and $B$ satisfies $PA=PB$.",
        "The set of all such points is exactly the perpendicular bisector of segment $AB$.",
        "This is why the perpendicular bisector construction is a locus construction.",
      ],
      answer: "The locus is the perpendicular bisector of $AB$.",
    },
    {
      kind: "example",
      prompt: "A town needs a borehole placed so that it is equally distant from two roads that meet at an angle. Which locus should be used?",
      steps: [
        "Being equally distant from two roads means equal perpendicular distance from the two lines.",
        "The locus of points equidistant from the two arms of an angle is the angle bisector.",
        "In fact there are two angle bisectors, internal and external, but the practical region usually tells you which one is needed.",
      ],
      answer: "Use the angle bisector of the two roads.",
    },
    {
      kind: "example",
      prompt: "Construct the region of points that are within 4 cm of a fixed point $P$.",
      steps: [
        "Points exactly 4 cm from $P$ form a circle of radius 4 cm.",
        "Points within 4 cm are all points inside that circle, together with the boundary.",
        "Draw the circle first; the shaded interior represents the full region.",
      ],
      answer: "A circle of radius 4 cm centred at $P$, including its interior.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Changing the compass width between the two arcs in a step that needs equal distances.",
          right: "Keep the compass width fixed whenever equal distances are required.",
        },
        {
          wrong: "Choosing a radius less than half the segment when constructing a perpendicular bisector.",
          right: "Use a radius greater than half the segment, so the arcs intersect.",
        },
        {
          wrong: "Treating a rough sketch as an exact proof.",
          right: "A construction works because of distance and angle properties, not because the sketch ‘looks right’.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Applications of constructions and loci",
      items: [
        {
          area: "Surveying",
          text: "Loci help identify points equally distant from landmarks, roads or boundaries.",
        },
        {
          area: "Architecture and drafting",
          text: "Exact geometric layout is used in detailing, setting-out and decorative pattern work.",
        },
        {
          area: "Engineering and manufacturing",
          text: "Perpendiculars, angle bisectors and equal offsets appear in component layout and mechanical drawing.",
        },
        {
          area: "Classical geometry",
          text: "Much of Greek geometry was built from these straightedge-and-compass ideas.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Construction and loci practice",
      stepKey: "constructionPractice",
      questions: [
        {
          prompt: "The perpendicular bisector of a segment passes through",
          options: ["one endpoint", "the midpoint at $90^\\circ$", "the centre of a circle only", "any random point"],
          answer: 1,
          explanation: "It bisects the segment and is perpendicular to it.",
        },
        {
          prompt: "Points on the angle bisector are equidistant from",
          options: ["the angle arms", "the angle endpoints", "the origin", "two circles"],
          answer: 0,
          explanation: "Distance is measured perpendicularly to the two arms.",
        },
        {
          prompt: "A construction of a $60^\\circ$ angle relies on the fact that",
          options: ["a rectangle has right angles", "an equilateral triangle has equal angles", "all arcs are 90°", "a compass measures mass"],
          answer: 1,
          explanation: "Equal radii form an equilateral triangle.",
        },
        {
          prompt: "The locus of points 5 cm from a fixed point is",
          options: ["a line", "a segment", "a circle", "a triangle"],
          answer: 2,
          explanation: "All points at a fixed distance from one point form a circle.",
        },
        {
          prompt: "Why must the radius be greater than half the segment when constructing a perpendicular bisector?",
          options: [
            "To make the arcs intersect",
            "To make the line horizontal",
            "To double the length",
            "It is not necessary",
          ],
          answer: 0,
          explanation: "If the radius is too small, the arcs will not meet.",
        },
        {
          prompt: "Which tool is used to copy exact distances?",
          options: ["protractor", "compass", "calculator", "set square only"],
          answer: 1,
          explanation: "A compass preserves radius exactly.",
        },
        {
          prompt: "To construct a triangle from three side lengths, you should",
          options: [
            "guess the third vertex",
            "draw one side and use two arcs from its endpoints",
            "draw any triangle and label it",
            "start with a protractor",
          ],
          answer: 1,
          explanation: "The intersection of the two arcs gives the exact third vertex.",
        },
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Construction mastery check",
      passMark: 6,
      questions: [
        {
          type: "mc",
          prompt: "Which locus describes points equidistant from two fixed points?",
          options: ["circle", "angle bisector", "perpendicular bisector", "parallel line"],
          answer: 2,
          marks: 2,
          explanation: "That is the defining property of the perpendicular bisector.",
        },
        {
          type: "tf",
          prompt: "In a correct construction, the construction arcs may be erased before the work is checked.",
          answer: false,
          marks: 2,
          explanation: "The arcs often show how the construction was achieved and should remain visible unless told otherwise.",
        },
        {
          type: "matching",
          prompt: "Match the description to the construction.",
          left: [
            "set of points equidistant from a fixed point",
            "set of points equidistant from two endpoints",
            "set of points equidistant from two intersecting lines",
          ],
          options: ["circle", "perpendicular bisector", "angle bisector"],
          answer: [0, 1, 2],
          marks: 3,
          explanation: "Each locus has a standard geometric form.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Straightedge-and-compass constructions are exact, not approximate sketches.",
        "Perpendicular bisectors and angle bisectors are special loci.",
        "Equal-radius arcs are the engine behind many classical constructions.",
        "A triangle with given side lengths is constructed by arc intersection from a known base.",
        "Locus problems translate verbal conditions into geometric sets of points.",
      ],
    },
    {
      kind: "completion",
      steps: [{ key: "constructionPractice", label: "Complete the construction and loci practice set" }],
      requireQuizPass: true,
    },
  ],
};
