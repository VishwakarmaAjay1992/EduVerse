import type { LessonContent } from "@/lib/lesson-content-types";

export const angleRelationships: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "foundations-lines-and-angles",
  lessonSlug: "angle-relationships",
  title: "Angle Relationships",
  objectives: [
    "Use angles on a straight line and around a point",
    "Recognise vertically opposite angles",
    "Find angles formed when a transversal cuts parallel lines",
    "Give reasons when calculating unknown angles",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "When lines cross, the angles they make are not independent — they lock together in fixed relationships. Learn these relationships and you can find an unknown angle from a single known one, without measuring. This is where geometry starts to feel like solving puzzles.",
      ],
    },
    {
      kind: "theory",
      heading: "Angles on a line and around a point",
      paragraphs: [
        "Angles that sit together on a straight line always add to 180° — they form a straight angle. Angles that fill the space around a single point always add to 360° — a full turn.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Two key sums",
      body: "Angles on a straight line add to 180°. Angles around a point add to 360°. Almost every angle-chasing problem starts from one of these.",
    },
    {
      kind: "theory",
      heading: "Vertically opposite angles",
      paragraphs: [
        "When two straight lines cross, they form two pairs of angles facing each other across the crossing point. These vertically opposite angles are always equal. (You can see why: each shares a straight line with the same neighbouring angle, so both equal 180° minus that neighbour.)",
      ],
    },
    {
      kind: "theory",
      heading: "Parallel lines and a transversal",
      paragraphs: [
        "A transversal is a line that crosses two others. When the two lines are parallel, the eight angles formed fall into three famous relationships. Look for the shapes the highlighted angles make.",
      ],
    },
    {
      kind: "figure",
      caption:
        "Corresponding angles sit in the same position at each crossing (an F-shape) — they are equal.",
      figure: { type: "parallelTransversal", relationship: "corresponding" },
    },
    {
      kind: "figure",
      caption:
        "Alternate angles sit on opposite sides of the transversal, between the lines (a Z-shape) — they are equal.",
      figure: { type: "parallelTransversal", relationship: "alternate" },
    },
    {
      kind: "figure",
      caption:
        "Co-interior angles sit on the same side, between the lines (a C-shape) — they add to 180°.",
      figure: { type: "parallelTransversal", relationship: "cointerior" },
    },
    {
      kind: "callout",
      variant: "tip",
      body: "Spot the letter: F means corresponding (equal), Z means alternate (equal), C (or U) means co-interior (add to 180°). The letters can be drawn forwards or backwards.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Engineering",
          text: "Bridge trusses and railway crossings rely on parallel beams cut by diagonals — the same transversal angles you study here.",
        },
        {
          area: "Carpentry",
          text: "To cut two pieces that meet flush, a carpenter uses alternate and co-interior angles to transfer a slope accurately.",
        },
        {
          area: "Road design",
          text: "Lane markings and slip roads are laid out so that merging angles stay consistent, using corresponding angles.",
        },
      ],
    },
    {
      kind: "example",
      prompt: "Two lines cross. One of the four angles is 50°. Find the other three.",
      steps: [
        "The angle vertically opposite the 50° angle is also 50°.",
        "Each angle next to the 50° angle sits on a straight line with it, so it is 180° − 50° = 130°.",
        "The remaining angle is vertically opposite a 130° angle, so it is 130°.",
      ],
      answer: "The four angles are 50°, 130°, 50° and 130°.",
    },
    {
      kind: "example",
      prompt:
        "A transversal crosses two parallel lines. A corresponding angle to x is 72°. What is x, and what is its co-interior partner?",
      steps: [
        "Corresponding angles are equal, so x = 72°.",
        "Its co-interior partner adds to 180°: partner = 180° − 72°.",
      ],
      answer: "x = 72°, and the co-interior angle is 108°.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Assuming alternate or corresponding angles are equal even when the lines are not parallel.",
          right:
            "These equalities hold only when the two lines cut by the transversal are parallel.",
        },
        {
          wrong: "Adding co-interior angles as if they were equal.",
          right:
            "Co-interior (C-shape) angles are supplementary — they add to 180°, they are not equal.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Angles on a straight line add to…", back: "180°." },
        { front: "Angles around a point add to…", back: "360°." },
        { front: "Vertically opposite angles are…", back: "Equal." },
        { front: "Co-interior (C-shape) angles are…", back: "Supplementary — they add to 180°." },
        { front: "Alternate (Z-shape) angles are…", back: "Equal." },
      ],
    },
    {
      kind: "quiz",
      questions: [
        {
          prompt: "Two lines cross and one angle is 110°. Its vertically opposite angle is…",
          options: ["70°", "110°", "180°", "90°"],
          answer: 1,
          explanation: "Vertically opposite angles are equal, so it is 110°.",
        },
        {
          prompt: "Co-interior angles between parallel lines always…",
          options: ["are equal", "add to 90°", "add to 180°", "add to 360°"],
          answer: 2,
          explanation: "Co-interior (allied) angles are supplementary: they add to 180°.",
        },
        {
          prompt: "Alternate angles form which letter shape?",
          options: ["F", "Z", "C", "T"],
          answer: 1,
          explanation: "Alternate angles form a Z-shape and are equal.",
        },
      ],
    },
    {
      "kind": "imageGallery",
      "heading": "Visual connection: angle relationships",
      "note": "Use these diagrams to revise vertically opposite angles and angles made by a transversal cutting parallel lines.",
      "images": [
        { "src": "/geometry-pdf/formula-guide/geometry-guide-02.webp", "alt": "Parallel lines and transversal guide", "caption": "Alternate, corresponding and co-interior angle relationships from the uploaded formula guide." },
        { "src": "/geometry-recreated/visual-proofs/visual-proof-07.svg", "alt": "Recreated angle proof without words", "caption": "A recreated proof-without-words diagram showing angle transfer and angle sums by parallel-line reasoning." }
      ]
    },
    {
      kind: "summary",
      points: [
        "Angles on a straight line add to 180°; angles around a point add to 360°.",
        "Vertically opposite angles (formed by crossing lines) are equal.",
        "With parallel lines: corresponding (F) equal, alternate (Z) equal, co-interior (C) add to 180°.",
        "These relationships only hold when the lines are parallel — always give a reason.",
      ],
    },
  ],
};
