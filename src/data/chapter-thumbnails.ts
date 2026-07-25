import { slugify } from "@/lib/slug";

const mathematicsChapterThumbnails: Record<string, string> = {
  "number-foundations/whole-numbers-and-arithmetic": "/mathematics-thumbnails/whole-numbers-and-arithmetic.webp",
  "number-foundations/fractions-and-decimals": "/mathematics-thumbnails/fractions-and-decimals.webp",
  "number-foundations/percentages-ratio-and-proportion": "/mathematics-thumbnails/percentages-ratio-and-proportion.webp",
  "number-foundations/exponents-roots-and-scientific-notation": "/mathematics-thumbnails/exponents-roots-and-scientific-notation.webp",
  "number-foundations/measurement-and-units": "/mathematics-thumbnails/measurement-and-units.webp",
  "pre-algebra/integers-and-rational-numbers": "/mathematics-thumbnails/integers-and-rational-numbers.webp",
  "pre-algebra/factors-multiples-and-primes": "/mathematics-thumbnails/factors-multiples-and-primes.webp",
  "pre-algebra/introduction-to-algebraic-thinking": "/mathematics-thumbnails/introduction-to-algebraic-thinking.webp",
  "pre-algebra/the-coordinate-plane-and-data-basics": "/mathematics-thumbnails/the-coordinate-plane-and-data-basics.webp",
  "algebra/linear-equations-and-inequalities": "/mathematics-thumbnails/linear-equations-and-inequalities.webp",
  "algebra/quadratic-equations": "/mathematics-thumbnails/quadratic-equations.webp",
  "algebra/sequences-and-series": "/mathematics-thumbnails/sequences-and-series.webp",
  "geometry/foundations-lines-and-angles": "/mathematics-thumbnails/foundations-lines-and-angles.webp",
  "geometry/circles": "/mathematics-thumbnails/circles.webp",
  "geometry/mensuration": "/mathematics-thumbnails/mensuration.webp",
  "geometry/transformations-and-symmetry": "/mathematics-thumbnails/transformations-and-symmetry.webp",
  "trigonometry/foundations-of-trigonometry": "/mathematics-thumbnails/foundations-of-trigonometry.webp",
  "trigonometry/trigonometric-graphs-and-applications-of-radian-measure": "/mathematics-thumbnails/trigonometric-graphs-and-applications-of-radian-measure.webp",
  "trigonometry/trigonometric-identities": "/mathematics-thumbnails/trigonometric-identities.webp",
  "trigonometry/trigonometric-equations": "/mathematics-thumbnails/trigonometric-equations.webp",
  "trigonometry/polar-coordinates-and-applications": "/mathematics-thumbnails/polar-coordinates-and-applications.webp",
  "trigonometry/parametric-equations": "/mathematics-thumbnails/parametric-equations.webp",
  "coordinate-and-analytic-geometry/straight-lines": "/mathematics-thumbnails/straight-lines.webp",
  "coordinate-and-analytic-geometry/conic-sections": "/mathematics-thumbnails/conic-sections.webp",
  "coordinate-and-analytic-geometry/vectors": "/mathematics-thumbnails/vectors-coordinate-analytic.webp",
  "pre-calculus/advanced-functions": "/mathematics-thumbnails/advanced-functions.webp",
  "pre-calculus/complex-numbers": "/mathematics-thumbnails/complex-numbers.webp",
  "pre-calculus/matrices-and-determinants": "/mathematics-thumbnails/matrices-and-determinants.webp",
  "pre-calculus/counting-and-combinatorics": "/mathematics-thumbnails/counting-and-combinatorics.webp",
  "pre-calculus/proof-induction-and-the-binomial-theorem": "/mathematics-thumbnails/proof-induction-and-the-binomial-theorem.webp",
  "calculus/functions": "/mathematics-thumbnails/functions.webp",
  "calculus/limits-and-continuity": "/mathematics-thumbnails/limits-and-continuity.webp",
  "calculus/derivatives": "/mathematics-thumbnails/derivatives.webp",
  "calculus/applications-of-derivatives": "/mathematics-thumbnails/applications-of-derivatives.webp",
  "calculus/integrals": "/mathematics-thumbnails/integrals.webp",
  "calculus/applications-of-definite-integrals": "/mathematics-thumbnails/applications-of-definite-integrals.webp",
  "calculus/infinite-sequences-and-series": "/mathematics-thumbnails/infinite-sequences-and-series.webp",
  "calculus/calculus-reference-and-proof-appendices": "/mathematics-thumbnails/calculus-reference-and-proof-appendices.webp",
  "multivariable-and-vector-calculus/partial-derivatives": "/mathematics-thumbnails/partial-derivatives.webp",
  "multivariable-and-vector-calculus/integrals-and-vector-fields": "/mathematics-thumbnails/integrals-and-vector-fields.webp",
  "linear-algebra/systems-matrices-and-determinants": "/mathematics-thumbnails/systems-matrices-and-determinants.webp",
  "linear-algebra/vector-spaces": "/mathematics-thumbnails/vector-spaces.webp",
  "linear-algebra/eigenvalues-and-eigenvectors": "/mathematics-thumbnails/eigenvalues-and-eigenvectors.webp",
  "linear-algebra/inner-products-and-applications": "/mathematics-thumbnails/inner-products-and-applications.webp",
  "differential-equations/first-order-equations": "/mathematics-thumbnails/first-order-equations.webp",
  "differential-equations/higher-order-linear-equations": "/mathematics-thumbnails/higher-order-linear-equations.webp",
  "differential-equations/transforms-and-systems": "/mathematics-thumbnails/transforms-and-systems.webp",
  "probability-and-combinatorics/counting-principles": "/mathematics-thumbnails/counting-principles.webp",
  "probability-and-combinatorics/probability-foundations": "/mathematics-thumbnails/probability-foundations.webp",
  "probability-and-combinatorics/random-variables-and-distributions": "/mathematics-thumbnails/random-variables-and-distributions.webp",
  "discrete-mathematics/logic-and-proof": "/mathematics-thumbnails/logic-and-proof.webp",
  "discrete-mathematics/graph-theory": "/mathematics-thumbnails/graph-theory.webp",
  "number-theory/primes-and-cryptography": "/mathematics-thumbnails/primes-and-cryptography.webp",
  "real-analysis/the-real-numbers-and-sequences": "/mathematics-thumbnails/the-real-numbers-and-sequences.webp",
  "abstract-algebra/group-theory": "/mathematics-thumbnails/group-theory.webp",
  "complex-analysis/complex-functions": "/mathematics-thumbnails/complex-functions.webp",
  "numerical-and-applied-methods/numerical-methods": "/mathematics-thumbnails/numerical-methods.webp",
  "numerical-and-applied-methods/optimization-and-modeling": "/mathematics-thumbnails/optimization-and-modeling.webp",
};

export function getChapterThumbnail(
  subjectSlug: string,
  categoryTitle: string,
  chapterTitle: string
): string | undefined {
  if (subjectSlug !== "mathematics") return undefined;
  const key = `${slugify(categoryTitle)}/${slugify(chapterTitle)}`;
  return mathematicsChapterThumbnails[key];
}

export const mathematicsThumbnailCount = Object.keys(mathematicsChapterThumbnails).length;
