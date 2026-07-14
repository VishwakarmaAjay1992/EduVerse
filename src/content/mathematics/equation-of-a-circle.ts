import type { LessonContent } from "@/lib/lesson-content-types";

export const equationOfACircle: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "conic-sections",
  lessonSlug: "equation-of-a-circle",
  title: "Equation of a Circle",
  objectives: [
    "Write the equation of a circle in centre–radius form",
    "Find the centre and radius from a general equation",
    "Test whether a line is a tangent to a circle",
    "Find where a line meets a circle",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "The conic sections are the curves you get by slicing a cone: the circle, ellipse, parabola and hyperbola. We start with the simplest. A circle is the set of all points a fixed distance — the radius — from a fixed point, the centre. Turning that idea into an equation lets us do geometry with algebra.",
      ],
    },
    {
      kind: "figure",
      caption: String.raw`A circle: every point lies a fixed distance $r$ from the centre.`,
      figure: { type: "conic", kind: "circle" },
    },
    {
      kind: "theory",
      heading: "Centre–radius form",
      paragraphs: [
        String.raw`Apply the distance formula between a point $(x, y)$ on the circle and the centre $(h, k)$, and set it equal to the radius. Squaring both sides gives the standard equation.`,
      ],
    },
    {
      kind: "formula",
      latex: String.raw`(x - h)^2 + (y - k)^2 = r^2`,
      caption: String.raw`Centre $(h, k)$, radius $r$.`,
    },
    {
      kind: "theory",
      heading: "General form",
      paragraphs: [
        String.raw`Expanding the brackets gives the general form $x^2 + y^2 + Dx + Ey + F = 0$. To recover the centre and radius from this form, complete the square in $x$ and in $y$.`,
      ],
    },
    {
      kind: "theory",
      heading: "Tangents to a circle",
      paragraphs: [
        String.raw`A tangent touches the circle at exactly one point and is perpendicular to the radius drawn to that point. A useful test: a line is a tangent when the perpendicular distance from the centre to the line equals the radius $r$.`,
      ],
    },
    {
      kind: "theory",
      heading: "Intersections with a line",
      paragraphs: [
        String.raw`To find where a line meets a circle, substitute the line into the circle's equation. This produces a quadratic, and its discriminant tells the story: two solutions mean the line is a secant (two crossings), one means a tangent, and none means the line misses the circle.`,
      ],
    },
    {
      kind: "example",
      prompt: String.raw`Write the equation of the circle with centre $(2, -3)$ and radius $5$.`,
      steps: [
        String.raw`Substitute $h = 2$, $k = -3$, $r = 5$ into $(x-h)^2 + (y-k)^2 = r^2$.`,
        String.raw`Note that $y - (-3) = y + 3$.`,
      ],
      answer: String.raw`$(x - 2)^2 + (y + 3)^2 = 25$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.`,
      steps: [
        String.raw`Group and complete the square: $(x^2 - 6x) + (y^2 + 4y) = 12$.`,
        String.raw`Add the squares of half the coefficients: $(x - 3)^2 - 9 + (y + 2)^2 - 4 = 12$.`,
        String.raw`Tidy up: $(x - 3)^2 + (y + 2)^2 = 25$.`,
      ],
      answer: String.raw`Centre $(3, -2)$, radius $5$.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: String.raw`Reading the centre of $(x - 2)^2 + (y + 3)^2 = 25$ as $(-2, 3)$.`,
          right: String.raw`The form uses minus signs, so $(x - 2)$ gives $h = 2$ and $(y + 3) = (y - (-3))$ gives $k = -3$: centre $(2, -3)$.`,
        },
        {
          wrong: String.raw`Forgetting to subtract the added constants when completing the square.`,
          right: String.raw`Every square you complete adds a constant that must be subtracted from the same side to keep the equation balanced.`,
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`A circle is all points at distance $r$ from a centre $(h, k)$.`,
        String.raw`Centre–radius form: $(x-h)^2 + (y-k)^2 = r^2$.`,
        String.raw`Complete the square to convert the general form to centre–radius form.`,
        String.raw`A line is tangent when the centre-to-line distance equals $r$; substitute to find intersections.`,
      ],
    },
  ],
};
