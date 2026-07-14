import type { LessonContent } from "@/lib/lesson-content-types";

export const ellipseAndHyperbola: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "conic-sections",
  lessonSlug: "ellipse-and-hyperbola",
  title: "Ellipse and Hyperbola",
  objectives: [
    "Write the standard equations of an ellipse and a hyperbola",
    "Locate the foci and compute eccentricity",
    "Find the asymptotes of a hyperbola",
    "Recognise where these curves appear in nature",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "The last two conics are defined by two special points called foci. For an ellipse, the sum of the distances to the two foci is constant; for a hyperbola, the difference is constant. That single change — sum versus difference — turns a closed oval into a pair of open branches.",
      ],
    },
    {
      kind: "theory",
      heading: "The ellipse",
      paragraphs: [
        String.raw`An ellipse is the set of points whose distances to two foci add to a constant. With centre at the origin and the longer axis horizontal, it has the standard equation below, where $a > b$.`,
      ],
    },
    {
      kind: "figure",
      caption: String.raw`An ellipse with its two foci $F_1$ and $F_2$.`,
      figure: { type: "conic", kind: "ellipse" },
    },
    {
      kind: "formula",
      latex: String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`,
      caption: String.raw`Foci at $(\pm c, 0)$ with $c^2 = a^2 - b^2$.`,
    },
    {
      kind: "theory",
      heading: "The hyperbola",
      paragraphs: [
        String.raw`A hyperbola is the set of points whose distances to two foci differ by a constant. Its standard equation uses a minus sign, and its two branches approach straight lines called asymptotes.`,
      ],
    },
    {
      kind: "figure",
      caption: String.raw`A hyperbola: two branches approaching their asymptotes (dashed).`,
      figure: { type: "conic", kind: "hyperbola" },
    },
    {
      kind: "formula",
      latex: String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1`,
      caption: String.raw`Asymptotes $y = \pm\frac{b}{a}x$, foci at $(\pm c, 0)$ with $c^2 = a^2 + b^2$.`,
    },
    {
      kind: "theory",
      heading: "Eccentricity ties them together",
      paragraphs: [
        String.raw`Eccentricity $e = \dfrac{c}{a}$ measures how stretched a conic is, and it unifies all four curves: a circle has $e = 0$, an ellipse has $0 < e < 1$, a parabola has $e = 1$, and a hyperbola has $e > 1$.`,
      ],
    },
    {
      kind: "theory",
      heading: "Orbits and applications",
      paragraphs: [
        "Conics are written into the physical world. Planets travel in ellipses with the Sun at one focus (Kepler's first law); many comets follow long ellipses, and some objects swing past on hyperbolic paths. Whispering galleries, lithotripsy machines and some navigation systems all exploit the focal properties of these curves.",
      ],
    },
    {
      kind: "example",
      prompt: String.raw`Find the foci and eccentricity of $\frac{x^2}{25} + \frac{y^2}{9} = 1$.`,
      steps: [
        String.raw`Read off $a^2 = 25$ and $b^2 = 9$, so $a = 5$ and $b = 3$.`,
        String.raw`Use $c^2 = a^2 - b^2 = 25 - 9 = 16$, so $c = 4$.`,
        String.raw`Eccentricity is $e = \frac{c}{a} = \frac{4}{5}$.`,
      ],
      answer: String.raw`Foci $(\pm 4, 0)$, eccentricity $e = 0.8$.`,
    },
    {
      kind: "example",
      prompt: String.raw`Find the asymptotes of $\frac{x^2}{16} - \frac{y^2}{9} = 1$.`,
      steps: [
        String.raw`Here $a^2 = 16$ and $b^2 = 9$, so $a = 4$ and $b = 3$.`,
        String.raw`The asymptotes are $y = \pm\frac{b}{a}x$.`,
      ],
      answer: String.raw`$y = \pm\frac{3}{4}x$.`,
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: String.raw`Using $c^2 = a^2 - b^2$ for a hyperbola.`,
          right: String.raw`The ellipse uses $c^2 = a^2 - b^2$; the hyperbola uses $c^2 = a^2 + b^2$.`,
        },
        {
          wrong: "Confusing the ellipse and hyperbola equations.",
          right: "The ellipse adds the two terms; the hyperbola subtracts them.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        String.raw`Ellipse: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, foci with $c^2 = a^2 - b^2$.`,
        String.raw`Hyperbola: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, asymptotes $y = \pm\frac{b}{a}x$, $c^2 = a^2 + b^2$.`,
        String.raw`Eccentricity $e = \frac{c}{a}$ classifies every conic, from circle ($0$) to hyperbola ($>1$).`,
        "Orbits, optics and acoustics all rely on the focal properties of these curves.",
      ],
    },
    {
      kind: "history",
      paragraphs: [
        "The Greek mathematician Apollonius of Perga studied and named the ellipse, parabola and hyperbola around 200 BCE, long before any physical use was known. Nearly two thousand years later, Kepler discovered that planets move in ellipses, and Newton explained why — a striking case of pure mathematics waiting centuries for its application.",
      ],
    },
  ],
};
