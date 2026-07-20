import type { LessonContent } from "@/lib/lesson-content-types";

export const pointsLinesPlanesAndAngles: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "foundations-lines-and-angles",
  lessonSlug: "points-lines-planes-and-angles",
  title: "Points, Lines, Planes and Angles",
  objectives: [
    "Identify and name points, lines, rays, segments and planes",
    "Recognise and classify the five types of angle",
    "Measure and estimate angles in degrees",
    "Appreciate how geometry is built from a few simple assumptions",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "All of geometry is built from a handful of simple ideas. Before we can measure shapes or prove theorems, we need the basic building blocks — points, lines and planes — and the angles formed when lines meet. Master these and everything that follows has a firm foundation.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "The building blocks",
      body: "A point marks a position and has no size. A line is straight, has no thickness and extends forever in both directions. A plane is a flat surface extending forever in every direction. These are undefined terms — so basic we describe them rather than define them.",
    },
    {
      kind: "figure",
      caption:
        "A point, a line (extends both ways), a ray (one endpoint, extends one way) and a segment (two endpoints).",
      figure: { type: "geoPrimitives" },
    },
    {
      kind: "theory",
      heading: "Naming and notation",
      paragraphs: [
        "We label points with capital letters. A line through points A and B is written as line AB; the part from A onward is ray AB; the piece between A and B is segment AB. Two points are always enough to determine a line.",
      ],
    },
    {
      kind: "theory",
      heading: "Angle types",
      paragraphs: [
        "An angle is formed by two rays meeting at a common endpoint, the vertex, and is measured in degrees. There are five types, sorted by size:",
      ],
      list: [
        "Acute: less than 90°",
        "Right: exactly 90° (marked with a small square)",
        "Obtuse: between 90° and 180°",
        "Straight: exactly 180° (a straight line)",
        "Reflex: between 180° and 360°",
      ],
    },
    {
      kind: "figure",
      caption: "The five angle types at a glance.",
      figure: { type: "angleTypes" },
    },
    {
      kind: "figure",
      caption: "Explore it: drag the slider to change the angle and watch its type change.",
      figure: { type: "angleExplorer" },
    },
    {
      kind: "callout",
      variant: "tip",
      body: "To classify an angle fast, compare it to a right angle (90°) and a straight angle (180°). Smaller than the square corner? Acute. Past the straight line? Reflex.",
    },
    {
      kind: "theory",
      heading: "Measuring angles",
      paragraphs: [
        "A protractor measures angles in degrees, where a full turn is 360°. Line the protractor's centre on the vertex and its baseline along one ray, then read where the second ray crosses the scale. Estimating first — 'a bit less than a right angle' — guards against reading the wrong scale.",
      ],
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Architecture",
          text: "Right angles keep walls vertical and floors level; architects design rooflines and staircases around precise angles.",
        },
        {
          area: "Navigation",
          text: "A ship's or plane's heading is an angle measured from north — the same degrees you measure with a protractor.",
        },
        {
          area: "Sports",
          text: "A footballer picks the angle to shoot; a pool player uses reflection angles to sink a ball.",
        },
        {
          area: "Computer graphics",
          text: "Every rotation in a game or animation is an angle; game engines compute them thousands of times per second.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "didyouknow",
      body: "Why 360 degrees? The choice is about 4,000 years old: Babylonian astronomers counted in base 60 and split a circle to match the roughly 360 days in a year. We still divide each degree into 60 minutes and each minute into 60 seconds.",
    },
    {
      kind: "example",
      prompt: "An angle measures 137°. Classify it.",
      steps: ["Compare with 90° and 180°: 137° is more than 90° but less than 180°."],
      answer: "It is an obtuse angle.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Reading the wrong protractor scale (getting 43° instead of 137°).",
          right:
            "Estimate first: if the angle clearly looks obtuse, pick the scale that gives a value above 90°.",
        },
        {
          wrong: "Confusing a line, a ray and a segment.",
          right:
            "A line extends both ways forever, a ray one way from an endpoint, a segment has two endpoints.",
        },
      ],
    },
    {
      kind: "history",
      paragraphs: [
        "Around 300 BCE, the Greek mathematician Euclid organised geometry in his book the Elements. He started from a short list of self-evident assumptions — axioms — and derived hundreds of results by pure logic. This axiomatic method, building everything from a few agreed truths, became the model for all of mathematics.",
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "How many points determine a line?", back: "Two." },
        { front: "What is an acute angle?", back: "An angle less than 90°." },
        { front: "What is a reflex angle?", back: "An angle between 180° and 360°." },
        {
          front: "Difference between a ray and a segment?",
          back: "A ray has one endpoint and extends forever; a segment has two endpoints.",
        },
      ],
    },
    {
      kind: "quiz",
      questions: [
        {
          prompt: "An angle of exactly 90° is called…",
          options: ["Acute", "Right", "Obtuse", "Straight"],
          answer: 1,
          explanation: "A 90° angle is a right angle, marked with a small square.",
        },
        {
          prompt: "Which extends forever in only one direction?",
          options: ["Line", "Segment", "Ray", "Point"],
          answer: 2,
          explanation: "A ray starts at an endpoint and extends forever in one direction.",
        },
        {
          prompt: "An angle of 210° is…",
          options: ["Obtuse", "Straight", "Reflex", "Right"],
          answer: 2,
          explanation: "Between 180° and 360°, so it is reflex.",
        },
      ],
    },
    {
      "kind": "imageGallery",
      "heading": "PDF visual reference: Geometry foundations",
      "note": "These pages come from the uploaded Geometry formula guide and support this lesson's point, line, ray, line segment and angle definitions.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-01.webp", "alt": "Geometry guide page 1: point line ray angle", "caption": "Point, line, line segment, ray and basic angle definitions with small labelled diagrams." },
        { "src": "/geometry-pdf/formula-guide/geometry-guide-02.webp", "alt": "Geometry guide page 2: angle relationships", "caption": "Angles on a straight line, angles around a point, vertically opposite angles and parallel-line angle facts." }
      ]
    },
    {
      kind: "summary",
      points: [
        "Points, lines and planes are the undefined building blocks of geometry.",
        "Line extends both ways, ray one way from an endpoint, segment between two endpoints.",
        "Angles are measured in degrees: acute (<90), right (90), obtuse (90–180), straight (180), reflex (180–360).",
        "Euclid built geometry logically from a few axioms.",
      ],
    },
  ],
};
