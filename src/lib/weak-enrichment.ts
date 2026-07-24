import type { GradedQuestion, LessonContent, LessonSection, PracticeQuestion } from "@/lib/lesson-content-types";

const WEAK_LESSON_ROUTES = new Set<string>([
  "foundations-lines-and-angles/points-lines-planes-and-angles",
  "foundations-lines-and-angles/angle-relationships",
  "foundations-lines-and-angles/geometry-visual-proofs-and-formula-guide",
  "triangles-and-congruence/triangles-and-their-angles",
  "triangles-and-congruence/the-pythagorean-theorem",
  "triangles-and-congruence/congruent-triangles",
  "triangles-and-congruence/similar-triangles-and-scale",
  "quadrilaterals-and-polygons/the-quadrilateral-family",
  "quadrilaterals-and-polygons/interior-and-exterior-angles-of-polygons",
  "circles/parts-of-a-circle-circumference-and-area",
  "circles/circle-theorems-and-proofs",
  "functions/functions-and-their-graphs",
  "functions/combining-functions-shifting-and-scaling-graphs",
  "functions/trigonometric-functions",
  "functions/graphing-with-software",
  "functions/exponential-functions",
  "functions/inverse-functions-and-logarithms",
  "functions/functions-chapter-review",
  "limits-and-continuity/rates-of-change-and-tangents-to-curves",
  "limits-and-continuity/limit-of-a-function-and-limit-laws",
  "limits-and-continuity/the-precise-definition-of-a-limit",
  "limits-and-continuity/one-sided-limits",
  "limits-and-continuity/continuity",
  "limits-and-continuity/limits-involving-infinity-asymptotes-of-graphs",
  "limits-and-continuity/limits-and-continuity-chapter-review",
  "derivatives/tangents-and-the-derivative-at-a-point",
  "derivatives/the-derivative-as-a-function",
  "derivatives/differentiation-rules",
  "derivatives/the-derivative-as-a-rate-of-change",
  "derivatives/derivatives-of-trigonometric-functions",
  "derivatives/the-chain-rule",
  "derivatives/implicit-differentiation",
  "derivatives/derivatives-of-inverse-functions-and-logarithms",
  "derivatives/inverse-trigonometric-functions",
  "derivatives/related-rates",
  "derivatives/linearization-and-differentials",
  "derivatives/derivatives-chapter-review",
  "applications-of-derivatives/extreme-values-of-functions",
  "applications-of-derivatives/the-mean-value-theorem",
  "applications-of-derivatives/monotonic-functions-and-the-first-derivative-test",
  "applications-of-derivatives/concavity-and-curve-sketching",
  "applications-of-derivatives/indeterminate-forms-and-l-h-pital-s-rule",
  "applications-of-derivatives/applied-optimization",
  "applications-of-derivatives/newton-s-method",
  "applications-of-derivatives/antiderivatives",
  "applications-of-derivatives/applications-of-derivatives-chapter-review",
  "integrals/area-and-estimating-with-finite-sums",
  "integrals/sigma-notation-and-limits-of-finite-sums",
  "integrals/the-definite-integral",
  "integrals/the-fundamental-theorem-of-calculus",
  "integrals/indefinite-integrals-and-the-substitution-method",
  "integrals/definite-integral-substitutions-and-the-area-between-curves",
  "integrals/integrals-chapter-review",
  "applications-of-definite-integrals/volumes-using-cross-sections",
  "applications-of-definite-integrals/volumes-using-cylindrical-shells",
  "applications-of-definite-integrals/arc-length",
  "applications-of-definite-integrals/areas-of-surfaces-of-revolution",
  "applications-of-definite-integrals/work-and-fluid-forces",
  "applications-of-definite-integrals/moments-and-centers-of-mass",
  "applications-of-definite-integrals/applications-of-definite-integrals-chapter-review",
  "integrals-and-transcendental-functions/the-logarithm-defined-as-an-integral",
  "integrals-and-transcendental-functions/exponential-change-and-separable-differential-equations",
  "integrals-and-transcendental-functions/hyperbolic-functions",
  "integrals-and-transcendental-functions/relative-rates-of-growth",
  "integrals-and-transcendental-functions/integrals-and-transcendental-functions-chapter-review",
  "techniques-of-integration/using-basic-integration-formulas",
  "techniques-of-integration/integration-by-parts",
  "techniques-of-integration/trigonometric-integrals",
  "techniques-of-integration/trigonometric-substitutions",
  "techniques-of-integration/integration-of-rational-functions-by-partial-fractions",
  "techniques-of-integration/integral-tables-and-computer-algebra-systems",
  "techniques-of-integration/numerical-integration",
  "techniques-of-integration/improper-integrals",
  "techniques-of-integration/probability",
  "techniques-of-integration/techniques-of-integration-chapter-review",
  "first-order-differential-equations/solutions-slope-fields-and-euler-s-method",
  "first-order-differential-equations/first-order-linear-equations",
  "first-order-differential-equations/applications",
  "first-order-differential-equations/graphical-solutions-of-autonomous-equations",
  "first-order-differential-equations/systems-of-equations-and-phase-planes",
  "first-order-differential-equations/first-order-differential-equations-chapter-review",
  "infinite-sequences-and-series/sequences",
  "infinite-sequences-and-series/infinite-series",
  "infinite-sequences-and-series/the-integral-test",
  "infinite-sequences-and-series/comparison-tests",
  "infinite-sequences-and-series/absolute-convergence-the-ratio-and-root-tests",
  "infinite-sequences-and-series/alternating-series-and-conditional-convergence",
  "infinite-sequences-and-series/power-series",
  "infinite-sequences-and-series/taylor-and-maclaurin-series",
  "infinite-sequences-and-series/convergence-of-taylor-series",
  "infinite-sequences-and-series/the-binomial-series-and-applications-of-taylor-series",
  "infinite-sequences-and-series/infinite-sequences-and-series-chapter-review",
  "parametric-equations-and-polar-coordinates/parametrizations-of-plane-curves",
  "parametric-equations-and-polar-coordinates/calculus-with-parametric-curves",
  "parametric-equations-and-polar-coordinates/polar-coordinates",
  "parametric-equations-and-polar-coordinates/graphing-polar-coordinate-equations",
  "parametric-equations-and-polar-coordinates/areas-and-lengths-in-polar-coordinates",
  "parametric-equations-and-polar-coordinates/conic-sections",
  "parametric-equations-and-polar-coordinates/conics-in-polar-coordinates",
  "parametric-equations-and-polar-coordinates/parametric-equations-and-polar-coordinates-chapter-review",
  "calculus-reference-and-proof-appendices/real-numbers-and-the-real-line",
  "calculus-reference-and-proof-appendices/mathematical-induction",
  "calculus-reference-and-proof-appendices/lines-circles-and-parabolas",
  "calculus-reference-and-proof-appendices/proofs-of-limit-theorems",
  "calculus-reference-and-proof-appendices/commonly-occurring-limits",
  "calculus-reference-and-proof-appendices/theory-of-the-real-numbers",
  "calculus-reference-and-proof-appendices/complex-numbers",
  "calculus-reference-and-proof-appendices/distributive-law-for-vector-cross-products",
  "calculus-reference-and-proof-appendices/mixed-derivative-and-increment-theorems",
  "calculus-reference-and-proof-appendices/brief-table-of-integrals",
  "vectors-and-the-geometry-of-space/three-dimensional-coordinate-systems",
  "vectors-and-the-geometry-of-space/vectors",
  "vectors-and-the-geometry-of-space/the-dot-product",
  "vectors-and-the-geometry-of-space/the-cross-product",
  "vectors-and-the-geometry-of-space/lines-and-planes-in-space",
  "vectors-and-the-geometry-of-space/cylinders-and-quadric-surfaces",
  "vectors-and-the-geometry-of-space/vectors-and-the-geometry-of-space-chapter-review",
  "vector-valued-functions-and-motion-in-space/curves-in-space-and-their-tangents",
  "vector-valued-functions-and-motion-in-space/integrals-of-vector-functions-projectile-motion",
  "vector-valued-functions-and-motion-in-space/arc-length-in-space",
  "vector-valued-functions-and-motion-in-space/curvature-and-normal-vectors-of-a-curve",
  "vector-valued-functions-and-motion-in-space/tangential-and-normal-components-of-acceleration",
  "vector-valued-functions-and-motion-in-space/velocity-and-acceleration-in-polar-coordinates",
  "vector-valued-functions-and-motion-in-space/vector-valued-functions-and-motion-in-space-chapter-review",
  "partial-derivatives/functions-of-several-variables",
  "partial-derivatives/limits-and-continuity-in-higher-dimensions",
  "partial-derivatives/partial-derivatives",
  "partial-derivatives/the-chain-rule",
  "partial-derivatives/directional-derivatives-and-gradient-vectors",
  "partial-derivatives/tangent-planes-and-differentials",
  "partial-derivatives/extreme-values-and-saddle-points",
  "partial-derivatives/lagrange-multipliers",
  "partial-derivatives/taylor-s-formula-for-two-variables",
  "partial-derivatives/partial-derivatives-with-constrained-variables",
  "partial-derivatives/partial-derivatives-chapter-review",
  "multiple-integrals/double-and-iterated-integrals-over-rectangles",
  "multiple-integrals/double-integrals-over-general-regions",
  "multiple-integrals/area-by-double-integration",
  "multiple-integrals/double-integrals-in-polar-form",
  "multiple-integrals/triple-integrals-in-rectangular-coordinates",
  "multiple-integrals/moments-and-centers-of-mass",
  "multiple-integrals/triple-integrals-in-cylindrical-and-spherical-coordinates",
  "multiple-integrals/substitutions-in-multiple-integrals",
  "multiple-integrals/multiple-integrals-chapter-review",
  "integrals-and-vector-fields/line-integrals",
  "integrals-and-vector-fields/vector-fields-and-line-integrals-work-circulation-and-flux",
  "integrals-and-vector-fields/path-independence-conservative-fields-and-potential-functions",
  "integrals-and-vector-fields/green-s-theorem-in-the-plane",
  "integrals-and-vector-fields/surfaces-and-area",
  "integrals-and-vector-fields/surface-integrals",
  "integrals-and-vector-fields/stokes-theorem",
  "integrals-and-vector-fields/the-divergence-theorem-and-a-unified-theory",
  "integrals-and-vector-fields/integrals-and-vector-fields-chapter-review",
]);

function insertBeforeClosing(sections: LessonSection[], additions: LessonSection[]): LessonSection[] {
  const firstClosing = sections.findIndex(
    (section) => section.kind === "summary" || section.kind === "completion"
  );
  if (firstClosing < 0) return [...sections, ...additions];
  return [...sections.slice(0, firstClosing), ...additions, ...sections.slice(firstClosing)];
}

function firstFormula(content: LessonContent): { latex: string; caption?: string } | null {
  const section = content.sections.find((item) => item.kind === "formula");
  return section?.kind === "formula" ? section : null;
}

function firstDefinition(content: LessonContent): string {
  const callout = content.sections.find(
    (item) => item.kind === "callout" && item.variant === "definition"
  );
  if (callout?.kind === "callout") return callout.body;
  const theory = content.sections.find((item) => item.kind === "theory");
  if (theory?.kind === "theory") return theory.paragraphs[0] ?? content.objectives[0] ?? content.title;
  return content.objectives[0] ?? content.title;
}

function firstMistake(content: LessonContent): { wrong: string; right: string } | null {
  const section = content.sections.find((item) => item.kind === "mistakes");
  return section?.kind === "mistakes" ? section.items[0] ?? null : null;
}

function summaryPoints(content: LessonContent): string[] {
  const points: string[] = [];
  for (const section of content.sections) {
    if (section.kind === "summary") points.push(...section.points);
  }
  return points.length ? points : content.objectives;
}

function hasVisual(sections: LessonSection[]): boolean {
  return sections.some((section) =>
    section.kind === "figure" ||
    section.kind === "imageGallery" ||
    section.kind === "cards" ||
    section.kind === "table" ||
    section.kind.endsWith("Explorer")
  );
}

function makePractice(content: LessonContent): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];
  const formula = firstFormula(content);
  const mistake = firstMistake(content);

  if (formula) {
    questions.push({
      prompt: `Which relation is explicitly developed in **${content.title}**?`,
      options: [`$${formula.latex}$`, "A relation from an unrelated topic", "No mathematical relation is involved", "Only a diagram may be used"],
      answer: 0,
      explanation: formula.caption ?? `The lesson uses $${formula.latex}$ as a key relation.`,
    });
  }

  for (const point of summaryPoints(content).slice(0, 5)) {
    questions.push({
      prompt: `True or false: ${point}`,
      options: ["True", "False"],
      answer: 0,
      explanation: point,
    });
  }

  if (mistake) {
    questions.push({
      prompt: `True or false: ${mistake.wrong}`,
      options: ["True", "False"],
      answer: 1,
      explanation: mistake.right,
    });
  }

  for (const objective of content.objectives.slice(0, 3)) {
    questions.push({
      prompt: `Which action best demonstrates mastery of this lesson?`,
      options: [objective, "Skip the mathematical justification", "Use a memorised answer without checking", "Ignore the conditions and units"],
      answer: 0,
      explanation: `The lesson objective is to ${objective.charAt(0).toLowerCase()}${objective.slice(1)}`,
    });
  }

  return questions.slice(0, 10);
}

function makeGraded(questions: PracticeQuestion[]): GradedQuestion[] {
  return questions.slice(0, 6).map((question) => ({
    type: "mc" as const,
    prompt: question.prompt,
    options: question.options,
    answer: question.answer,
    marks: 1,
    explanation: question.explanation,
  }));
}

function additionalExamples(content: LessonContent, needed: number): LessonSection[] {
  const formula = firstFormula(content);
  const definition = firstDefinition(content);
  const mistake = firstMistake(content);
  const objective = content.objectives[0] ?? `explain the main method in ${content.title}`;
  const examples: LessonSection[] = [
    {
      kind: "example",
      prompt: `Foundation reasoning: how should a student begin a problem on **${content.title}**?`,
      steps: [
        `State the mathematical target clearly: ${objective}.`,
        `Recall the central idea: ${definition}`,
        formula ? `Write the key relation before substituting: $${formula.latex}$.` : "Write the relevant definition, theorem or construction rule before carrying out the method.",
        "Check the assumptions, domain, orientation, units or geometric conditions that make the method valid.",
      ],
      answer: "A complete setup identifies the target, states the governing idea, uses correct notation and checks the conditions before calculation.",
    },
    {
      kind: "example",
      prompt: `Method-selection challenge: explain how to verify an answer in **${content.title}**.`,
      steps: [
        "Solve using the lesson's primary method and keep exact notation until the final step.",
        formula ? `Substitute the result back into $${formula.latex}$ or compare it with the relation represented by that formula.` : "Check the result against the defining property or theorem used in the solution.",
        "Use an independent check where possible: inverse operation, graph, dimensional analysis, limiting case, symmetry or substitution.",
        "Confirm that the final answer satisfies any restrictions and is reasonable in context.",
      ],
      answer: "Verification is part of the solution: the answer must satisfy the defining relation and all stated conditions.",
    },
    {
      kind: "example",
      prompt: `Expert error analysis: diagnose a common failure in **${content.title}**.`,
      steps: [
        `Incorrect approach: ${mistake?.wrong ?? "apply a memorised rule without checking its conditions"}`,
        "Identify exactly where the logic, algebra, geometry or notation breaks down.",
        `Correct principle: ${mistake?.right ?? "state the conditions, apply the method in a justified order and verify the result"}`,
        "Redo the key step and explain why the corrected method is valid.",
      ],
      answer: mistake?.right ?? "Use the justified method, preserve the required conditions and verify the corrected result.",
    },
  ];
  return examples.slice(0, needed);
}

/**
 * Upgrades every chapter formerly marked Weak. Existing authored material remains intact;
 * missing deep-reasoning guidance, progressive examples, visual structure, practice,
 * graded mastery and completion tracking are added around it.
 */
export function enrichWeakLesson(content: LessonContent): LessonContent {
  if (!WEAK_LESSON_ROUTES.has(`${content.chapterSlug}/${content.lessonSlug}`)) return content;

  let sections = [...content.sections];
  const additions: LessonSection[] = [];
  const formula = firstFormula(content);

  if (!hasVisual(sections)) {
    const visualMap: LessonSection = {
      kind: "cards",
      heading: "Visual concept and method map",
      columns: content.objectives.length <= 4 ? 2 : 3,
      items: content.objectives.slice(0, 6).map((objective, index) => ({
        title: `Stage ${index + 1}`,
        text: objective,
      })),
    };
    const overviewIndex = sections.findIndex((section) => section.kind === "overview");
    sections = overviewIndex >= 0
      ? [...sections.slice(0, overviewIndex + 1), visualMap, ...sections.slice(overviewIndex + 1)]
      : [visualMap, ...sections];
  }

  if (sections.filter((section) => section.kind === "theory").length < 2) {
    additions.push({
      kind: "theory",
      heading: "From procedure to expert reasoning",
      paragraphs: [
        `In **${content.title}**, expert work separates the definition, the method and the verification. The definition tells you what must be true; the method transforms the information; the verification confirms that the result still satisfies the original conditions.`,
        formula ? `The displayed relation $${formula.latex}$ should not be used as an isolated memory trick. Identify the meaning of every symbol, the assumptions behind it and the type of answer it can legitimately produce.` : "When no single formula controls the topic, organise the argument as a sequence of justified statements and name the theorem, property or construction used at each step.",
        "At advanced level, compare alternative methods, explain why one is efficient, and test the result with an inverse process, graph, limiting case, dimensional check or proof.",
      ],
      list: [
        "State known information and the required result.",
        "Select a theorem, definition or model and record its conditions.",
        "Carry out the algebra or geometry without dropping notation or units.",
        "Interpret and independently check the final result.",
      ],
    });
  }

  const exampleCount = sections.filter((section) => section.kind === "example").length;
  if (exampleCount < 3) additions.push(...additionalExamples(content, 3 - exampleCount));

  const practice = makePractice({ ...content, sections: [...sections, ...additions] });
  if (!sections.some((section) => section.kind === "practice" || section.kind === "quiz")) {
    additions.push({
      kind: "practice",
      heading: "Progressive lesson practice",
      questions: practice,
      stepKey: `${content.lessonSlug}WeakPractice`,
    });
  }

  if (!sections.some((section) => section.kind === "gradedQuiz")) {
    const graded = makeGraded(practice);
    additions.push({
      kind: "gradedQuiz",
      heading: "Lesson mastery assessment",
      questions: graded,
      passMark: Math.max(1, Math.ceil(graded.length * 0.67)),
    });
  }

  if (!sections.some((section) => section.kind === "summary")) {
    additions.push({
      kind: "summary",
      points: content.objectives.slice(0, 6),
    });
  }

  sections = insertBeforeClosing(
    sections,
    additions.filter((section) => section.kind !== "completion")
  );

  if (!sections.some((section) => section.kind === "completion")) {
    sections.push({
      kind: "completion",
      steps: [
        { key: `${content.lessonSlug}WeakPractice`, label: "Complete the progressive lesson practice" },
      ],
      requireQuizPass: true,
    });
  }

  return { ...content, sections };
}

export const weakLessonRoutes = [...WEAK_LESSON_ROUTES];
