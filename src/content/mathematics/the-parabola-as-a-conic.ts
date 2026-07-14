import type { LessonContent } from "@/lib/lesson-content-types";

export const theParabolaAsAConic: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "conic-sections",
  lessonSlug: "the-parabola-as-a-conic",
  title: "The Parabola as a Conic",
  objectives: [
    "Define a parabola by its focus and directrix",
    "Recognise the standard forms of a parabola",
    "Locate the focus and directrix from an equation",
    "Explain the reflective property and its uses",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "You have met the parabola as the graph of a quadratic. Seen as a conic section, it has a beautiful defining property involving a single point and a single line — and that property explains why parabolas turn up in satellite dishes, headlights and telescopes.",
      ],
    },
    {
      kind: "theory",
      heading: "Focus and directrix",
      paragraphs: [
        String.raw`A parabola is the set of all points equidistant from a fixed point, the focus, and a fixed line, the directrix. Every point on the curve is exactly as far from the focus as it is from the directrix.`,
      ],
    },
    {
      kind: "figure",
      caption: String.raw`A parabola: each point is equidistant from the focus $F$ and the directrix.`,
      figure: { type: "conic", kind: "parabola" },
    },
    {
      kind: "theory",
      heading: "Standard form",
      paragraphs: [
        String.raw`Placing the vertex at the origin with the axis vertical, the defining property leads to the standard equation below, where $p$ is the distance from the vertex to the focus.`,
      ],
    },
    {
      kind: "formula",
      latex: String.raw`x^2 = 4py`,
      caption: String.raw`Vertex at the origin, focus $(0, p)$, directrix $y = -p$.`,
    },
    {
      kind: "theory",
      heading: "Orientation",
      paragraphs: [
        String.raw`Swapping the roles of $x$ and $y$ gives $y^2 = 4px$, a parabola opening left or right. The sign of $p$ decides the direction: positive opens up (or right), negative opens down (or left). Shifting the vertex to $(h, k)$ replaces $x$ with $x - h$ and $y$ with $y - k$.`,
      ],
    },
    {
      kind: "theory",
      heading: "The reflective property",
      paragraphs: [
        "Any ray travelling parallel to the axis reflects off the parabola straight through the focus — and vice versa. A satellite dish uses this to gather weak parallel signals to a receiver at the focus; a car headlight runs it in reverse, turning a bulb at the focus into a parallel beam.",
      ],
    },
    {
      kind: "example",
      prompt: String.raw`Find the focus and directrix of $x^2 = 12y$.`,
      steps: [
        String.raw`Compare with $x^2 = 4py$, so $4p = 12$ and $p = 3$.`,
        String.raw`The focus is at $(0, p)$ and the directrix is $y = -p$.`,
      ],
      answer: String.raw`Focus $(0, 3)$, directrix $y = -3$.`,
    },
    {
      kind: "example",
      prompt: String.raw`A parabola has vertex at the origin and focus $(0, 2)$. Find its equation.`,
      steps: [
        String.raw`The focus is at $(0, p)$, so $p = 2$ and $4p = 8$.`,
        String.raw`Use the standard form $x^2 = 4py$.`,
      ],
      answer: String.raw`$x^2 = 8y$.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: String.raw`Treating the coefficient in $x^2 = 12y$ as $p$ rather than $4p$.`,
          right: String.raw`The standard form is $x^2 = 4py$, so set the coefficient equal to $4p$: here $p = 3$, not $12$.`,
        },
        {
          wrong: String.raw`Mixing up the axis: using $x^2 = 4py$ for a left/right parabola.`,
          right: String.raw`$x^2 = 4py$ opens up/down; $y^2 = 4px$ opens left/right.`,
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A parabola is the set of points equidistant from a focus and a directrix.",
        String.raw`Standard form $x^2 = 4py$: focus $(0, p)$, directrix $y = -p$.`,
        String.raw`$y^2 = 4px$ opens sideways; the sign of $p$ sets the direction.`,
        "The reflective property focuses parallel rays to the focus — the basis of dishes and headlights.",
      ],
    },
  ],
};
