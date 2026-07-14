import type { LessonContent } from "@/lib/lesson-content-types";

export const sineCosineAndTangent: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "right-triangle-trigonometry",
  lessonSlug: "sine-cosine-and-tangent",
  title: "Sine, Cosine and Tangent",
  objectives: [
    "Name the sides of a right triangle relative to an angle",
    "Use SOHCAHTOA to write the three trigonometric ratios",
    "Find an unknown side using a trig ratio",
    "Find an unknown angle using an inverse trig function",
    "Recall exact values for 30°, 45° and 60°",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Trigonometry — from the Greek for 'triangle measure' — is the study of the relationship between the angles and sides of triangles. The star of the subject is the right-angled triangle, and three ratios built from its sides: sine, cosine and tangent. With them you can find a distance you cannot reach or an angle you cannot measure directly.",
      ],
    },
    {
      kind: "theory",
      heading: "Naming the sides",
      paragraphs: [
        "Pick one of the non-right angles and call it θ (theta). The three sides are then named in relation to it:",
        "The hypotenuse is always the longest side, opposite the right angle. The other two names depend on which angle you chose, so always fix θ first.",
      ],
      list: [
        "The opposite side is across from θ.",
        "The adjacent side is next to θ (and not the hypotenuse).",
        "The hypotenuse is opposite the right angle.",
      ],
    },
    {
      kind: "figure",
      caption: "The three sides of a right triangle, named relative to the angle θ.",
      figure: { type: "rightTriangle" },
    },
    {
      kind: "theory",
      heading: "SOHCAHTOA",
      paragraphs: [
        "Each trig ratio is simply one side divided by another. The mnemonic SOHCAHTOA records all three:",
        "For the same angle θ, these ratios are always the same no matter how big the triangle is — enlarge the triangle and both sides grow together, so the ratio does not change.",
      ],
      list: [
        String.raw`SOH: $\sin\theta = \dfrac{\text{Opposite}}{\text{Hypotenuse}}$`,
        String.raw`CAH: $\cos\theta = \dfrac{\text{Adjacent}}{\text{Hypotenuse}}$`,
        String.raw`TOA: $\tan\theta = \dfrac{\text{Opposite}}{\text{Adjacent}}$`,
      ],
    },
    {
      kind: "theory",
      heading: "Finding a side",
      paragraphs: [
        "To find an unknown side, choose the ratio that links the angle, the side you know and the side you want. Write the ratio, substitute the values, and solve. A calculator gives the value of sin, cos or tan for the angle.",
      ],
    },
    {
      kind: "theory",
      heading: "Finding an angle",
      paragraphs: [
        "If you know two sides but want the angle, use the inverse functions, written sin⁻¹, cos⁻¹ and tan⁻¹. For example, if the opposite and adjacent sides are known, then tan θ = opposite / adjacent, so θ = tan⁻¹(opposite / adjacent).",
      ],
    },
    {
      kind: "theory",
      heading: "Exact values for special angles",
      paragraphs: ["A few angles appear so often that their exact ratios are worth memorising:"],
      list: [
        String.raw`$30^\circ$: $\sin = \tfrac{1}{2}$, $\cos = \tfrac{\sqrt{3}}{2}$, $\tan = \tfrac{1}{\sqrt{3}}$`,
        String.raw`$45^\circ$: $\sin = \tfrac{\sqrt{2}}{2}$, $\cos = \tfrac{\sqrt{2}}{2}$, $\tan = 1$`,
        String.raw`$60^\circ$: $\sin = \tfrac{\sqrt{3}}{2}$, $\cos = \tfrac{1}{2}$, $\tan = \sqrt{3}$`,
      ],
    },
    {
      kind: "example",
      prompt:
        "A right triangle has an opposite side of 2.8 and a hypotenuse of 4.9 for the angle θ. What is sin θ?",
      steps: [
        "Choose the ratio linking opposite and hypotenuse: sine.",
        "sin θ = Opposite / Hypotenuse = 2.8 / 4.9.",
      ],
      answer: "sin θ ≈ 0.57. (Any triangle with this angle gives the same ratio.)",
    },
    {
      kind: "example",
      prompt:
        "A ramp rises at 45° and its length (hypotenuse) is 20 m. How high is the top (the opposite side)?",
      steps: [
        "The angle, hypotenuse and opposite are involved, so use sine: sin(45°) = Opposite / 20.",
        "From a calculator, sin(45°) ≈ 0.7071.",
        "Multiply both sides by 20: Opposite ≈ 0.7071 × 20.",
      ],
      answer: "The height is about 14.14 m.",
    },
    {
      kind: "example",
      prompt:
        "A right triangle has an opposite side of 5 and an adjacent side of 12. What is the angle θ?",
      steps: [
        "Opposite and adjacent are known, so use tangent: tan θ = 5 / 12.",
        "Apply the inverse: θ = tan⁻¹(5 / 12).",
      ],
      answer: "θ ≈ 22.6°.",
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Mixing up which side is opposite and which is adjacent.",
          right:
            "Fix the angle θ first: the opposite is across from it, the adjacent is beside it.",
        },
        {
          wrong: "Getting a strange answer because the calculator is in radian mode.",
          right:
            "When working in degrees, make sure the calculator is set to degrees, not radians.",
        },
        {
          wrong: "Using sine when the two sides involved are opposite and adjacent.",
          right: "Match the ratio to the sides you have: opposite and adjacent means tangent.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Name the sides relative to the chosen angle θ: opposite, adjacent, hypotenuse.",
        "SOHCAHTOA: sin = O/H, cos = A/H, tan = O/A.",
        "For a fixed angle the ratios stay the same at any size of triangle.",
        "Find a side by solving the ratio; find an angle with sin⁻¹, cos⁻¹ or tan⁻¹.",
        "Know the exact values for 30°, 45° and 60°.",
      ],
    },
    {
      kind: "history",
      paragraphs: [
        "The word trigonometry comes from the Greek trigonon (triangle) and metron (measure). The ideas are far older than the name: Babylonian and Greek astronomers built tables of chord lengths to track the stars, and Indian and Islamic mathematicians developed the sine and cosine we use today. Trigonometry now underpins navigation, engineering, physics and computer graphics.",
      ],
    },
  ],
};
