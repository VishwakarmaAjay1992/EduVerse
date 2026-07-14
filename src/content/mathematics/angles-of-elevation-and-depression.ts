import type { LessonContent } from "@/lib/lesson-content-types";

export const anglesOfElevationAndDepression: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "right-triangle-trigonometry",
  lessonSlug: "angles-of-elevation-and-depression",
  title: "Angles of Elevation and Depression",
  objectives: [
    "Distinguish angles of elevation and depression",
    "Model a real situation with a right triangle",
    "Solve height and distance problems using trig ratios",
    "Work with three-figure bearings",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Right-triangle trigonometry becomes powerful the moment you point it at the real world. By measuring one angle and one distance, you can work out heights and distances that are impossible to measure directly — the height of a tree, the distance to a boat, the width of a river.",
      ],
    },
    {
      kind: "theory",
      heading: "Elevation and depression",
      paragraphs: [
        "Both angles are measured from the horizontal — an imaginary flat line at eye level.",
        "Because the two horizontals are parallel, the angle of depression from a high point equals the angle of elevation measured back up to it.",
      ],
      list: [
        "The angle of elevation is measured upward from the horizontal to an object above you.",
        "The angle of depression is measured downward from the horizontal to an object below you.",
      ],
    },
    {
      kind: "theory",
      heading: "Modelling with a right triangle",
      paragraphs: [
        "The method is always the same: sketch the situation as a right triangle, mark the known angle and the known side, label the side you want, and choose the ratio (sine, cosine or tangent) that connects them. Here the horizontal distance is the adjacent side and the height is the opposite side.",
      ],
    },
    {
      kind: "figure",
      caption:
        "Standing back a known distance and measuring the angle up to the top gives a right triangle: distance is adjacent, height is opposite.",
      figure: {
        type: "rightTriangle",
        opposite: "height",
        adjacent: "distance",
        hypotenuse: "line of sight",
        angle: "θ",
      },
    },
    {
      kind: "theory",
      heading: "Bearings",
      paragraphs: [
        "A bearing describes direction as a three-figure angle measured clockwise from north, so due east is 090° and south-west is 225°. Bearing problems combine a direction with a distance, and are often solved by dropping a right triangle onto a north–south line.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Standing 30 m from a tree, you measure the angle of elevation to its top as 40°. How tall is the tree?",
      steps: [
        "The distance (adjacent) is 30 m and the height (opposite) is unknown, so use tangent: tan(40°) = height / 30.",
        "From a calculator, tan(40°) ≈ 0.839.",
        "Multiply both sides by 30: height ≈ 0.839 × 30.",
      ],
      answer: "The tree is about 25.2 m tall.",
    },
    {
      kind: "example",
      prompt:
        "From the top of a 50 m cliff, the angle of depression to a boat is 25°. How far is the boat from the base of the cliff?",
      steps: [
        "The angle of depression equals the angle of elevation from the boat, so use 25° inside the right triangle.",
        "The height (opposite) is 50 m and the distance (adjacent) is unknown: tan(25°) = 50 / distance.",
        "Rearrange: distance = 50 / tan(25°), and tan(25°) ≈ 0.466.",
      ],
      answer: "The boat is about 107 m from the base of the cliff.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Confusing elevation with depression, or measuring from the vertical instead of the horizontal.",
          right:
            "Both angles are measured from the horizontal: elevation looks up, depression looks down.",
        },
        {
          wrong:
            "Forgetting that the angle of depression equals the angle of elevation from the other point.",
          right:
            "The two horizontals are parallel, so those alternate angles are equal — use that inside the triangle.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Angles of elevation and depression are measured from the horizontal.",
        "The angle of depression equals the angle of elevation from the lower point.",
        "Model the situation as a right triangle, then pick the ratio linking your known and unknown sides.",
        "Bearings are three-figure angles measured clockwise from north.",
      ],
    },
  ],
};
