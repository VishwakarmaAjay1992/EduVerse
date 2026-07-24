import type { GradedQuestion, LessonContent, LessonSection, PracticeQuestion } from "@/lib/lesson-content-types";

const MODERATE_LESSON_ROUTES = new Set<string>([
  "whole-numbers-and-arithmetic/understanding-place-value",
  "whole-numbers-and-arithmetic/roman-numerals-and-historical-number-systems",
  "whole-numbers-and-arithmetic/addition-and-subtraction",
  "whole-numbers-and-arithmetic/multiplication-and-division",
  "whole-numbers-and-arithmetic/order-of-operations",
  "whole-numbers-and-arithmetic/estimation-and-approximation",
  "fractions-and-decimals/fractions-as-parts-of-a-whole",
  "fractions-and-decimals/mixed-numbers-and-improper-fractions",
  "fractions-and-decimals/adding-and-subtracting-fractions",
  "fractions-and-decimals/multiplying-and-dividing-fractions",
  "fractions-and-decimals/decimal-notation-and-operations",
  "fractions-and-decimals/fractions-decimals-and-recurring-decimals",
  "percentages-ratio-and-proportion/understanding-percentages",
  "percentages-ratio-and-proportion/percentage-change-and-applications",
  "percentages-ratio-and-proportion/ratios",
  "percentages-ratio-and-proportion/direct-and-inverse-proportion",
  "exponents-roots-and-scientific-notation/exponents-and-the-laws-of-indices",
  "exponents-roots-and-scientific-notation/square-roots-and-cube-roots",
  "exponents-roots-and-scientific-notation/standard-form",
  "measurement-and-units/metric-and-imperial-units",
  "measurement-and-units/perimeter-and-area-of-basic-shapes",
  "measurement-and-units/volume-and-surface-area-basics",
  "integers-and-rational-numbers/integers-and-the-number-line",
  "integers-and-rational-numbers/multiplying-and-dividing-integers",
  "integers-and-rational-numbers/rational-and-irrational-numbers",
  "factors-multiples-and-primes/factors-multiples-and-divisibility-rules",
  "factors-multiples-and-primes/prime-numbers-and-prime-factorization",
  "factors-multiples-and-primes/highest-common-factor-and-lowest-common-multiple",
  "introduction-to-algebraic-thinking/from-arithmetic-to-algebra",
  "introduction-to-algebraic-thinking/simplifying-expressions",
  "introduction-to-algebraic-thinking/solving-one-step-and-two-step-equations",
  "linear-equations-and-inequalities/solving-linear-equations",
  "linear-equations-and-inequalities/word-problems-with-linear-equations",
  "linear-equations-and-inequalities/linear-inequalities",
  "linear-equations-and-inequalities/systems-of-linear-equations",
  "polynomials-and-factoring/polynomials-add-subtract-multiply",
  "polynomials-and-factoring/polynomial-division",
  "polynomials-and-factoring/factoring-techniques",
  "polynomials-and-factoring/rational-expressions",
  "quadratic-equations/solving-by-factoring-and-square-roots",
  "quadratic-equations/completing-the-square-and-the-quadratic-formula",
  "quadratic-equations/parabolas",
  "functions-and-graphs/what-is-a-function",
  "functions-and-graphs/composite-and-inverse-functions",
  "functions-and-graphs/families-of-graphs",
  "functions-and-graphs/graph-transformations",
  "exponentials-and-logarithms/exponential-growth-and-decay",
  "exponentials-and-logarithms/logarithms-and-their-laws",
  "exponentials-and-logarithms/exponential-and-logarithmic-equations",
  "sequences-and-series/arithmetic-sequences-and-series",
  "sequences-and-series/geometric-sequences-and-series",
  "sequences-and-series/recursive-and-special-sequences",
  "foundations-of-trigonometry/degree-and-radian-measure-of-angles",
  "foundations-of-trigonometry/sine-cosine-and-tangent",
  "foundations-of-trigonometry/right-triangle-trigonometry",
  "foundations-of-trigonometry/angles-of-elevation-and-depression",
  "foundations-of-trigonometry/radians-and-the-unit-circle",
  "foundations-of-trigonometry/the-unit-circle",
  "foundations-of-trigonometry/the-six-trigonometric-functions",
  "foundations-of-trigonometry/foundational-trigonometric-identities",
  "foundations-of-trigonometry/beyond-the-unit-circle",
  "trigonometric-graphs-and-applications-of-radian-measure/graphs-of-sine-and-cosine-functions",
  "trigonometric-graphs-and-applications-of-radian-measure/graphs-of-the-other-trigonometric-functions",
  "trigonometric-graphs-and-applications-of-radian-measure/modeling-with-trigonometric-functions",
  "trigonometric-graphs-and-applications-of-radian-measure/applications-of-radian-measure",
  "trigonometric-identities/fundamental-identities",
  "trigonometric-identities/using-trigonometric-identities",
  "trigonometric-identities/multiple-angle-identities",
  "trigonometric-identities/compound-and-double-angle-formulas",
  "trigonometric-equations/inverse-sine-and-cosine-functions",
  "trigonometric-equations/the-other-inverse-trigonometric-functions",
  "trigonometric-equations/inverse-functions-and-trigonometric-equations",
  "trigonometric-equations/solving-general-trigonometric-equations",
  "trigonometric-equations/trigonometric-equations",
  "beyond-right-triangles/the-law-of-sines",
  "beyond-right-triangles/the-law-of-cosines",
  "beyond-right-triangles/law-of-sines-and-law-of-cosines",
  "polar-coordinates-and-applications/polar-coordinates-and-equations",
  "polar-coordinates-and-applications/graphing-polar-equations",
  "polar-coordinates-and-applications/polar-representations-of-complex-numbers",
  "polar-coordinates-and-applications/complex-products-powers-quotients-and-roots",
  "vectors/vector-properties-and-operations",
  "vectors/the-unit-vector-and-vector-applications",
  "vectors/the-dot-product",
  "parametric-equations/sketching-curves-described-by-parametric-equations",
  "parametric-equations/parametric-descriptions-for-oriented-curves",
  "conic-sections/equation-of-a-circle",
  "conic-sections/the-parabola-as-a-conic",
  "conic-sections/ellipse-and-hyperbola",
  "counting-and-combinatorics/permutations-and-combinations"
]);

function insertBeforeClosing(sections: LessonSection[], additions: LessonSection[]): LessonSection[] {
  const firstClosing = sections.findIndex(
    (section) => section.kind === "summary" || section.kind === "completion"
  );
  if (firstClosing < 0) return [...sections, ...additions];
  return [...sections.slice(0, firstClosing), ...additions, ...sections.slice(firstClosing)];
}

function truthPractice(content: LessonContent): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];
  for (const section of content.sections) {
    if (section.kind === "summary") {
      for (const point of section.points) {
        questions.push({
          prompt: `True or false: ${point}`,
          options: ["True", "False"],
          answer: 0,
          explanation: point,
        });
      }
    }
    if (section.kind === "mistakes") {
      for (const item of section.items) {
        questions.push({
          prompt: `True or false: ${item.wrong}`,
          options: ["True", "False"],
          answer: 1,
          explanation: item.right,
        });
      }
    }
  }
  for (const objective of content.objectives) {
    questions.push({
      prompt: `True or false: A complete solution should be able to ${objective.charAt(0).toLowerCase()}${objective.slice(1)}`,
      options: ["True", "False"],
      answer: 0,
      explanation: `This is one of the lesson's stated learning objectives: ${objective}`,
    });
  }
  return questions.slice(0, 8);
}

function existingPractice(content: LessonContent): PracticeQuestion[] {
  const questions: PracticeQuestion[] = [];
  for (const section of content.sections) {
    if (section.kind === "practice" || section.kind === "quiz") {
      for (const question of section.questions) {
        questions.push({
          prompt: question.prompt,
          options: question.options,
          answer: question.answer,
          explanation: question.explanation ?? "Review the corresponding worked method and try again.",
        });
      }
    }
  }
  return questions;
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

/**
 * Raises the formerly Moderate lessons to the current EduVerse completion standard.
 * Existing authored content is preserved; missing visual summaries, practice, mastery
 * checks and completion tracking are added without replacing any original section.
 */
export function enrichModerateLesson(content: LessonContent): LessonContent {
  if (!MODERATE_LESSON_ROUTES.has(`${content.chapterSlug}/${content.lessonSlug}`)) return content;

  let sections = [...content.sections];
  const kinds = new Set(sections.map((section) => section.kind));

  if (
    ![...kinds].some(
      (kind) =>
        kind === "figure" ||
        kind === "imageGallery" ||
        kind === "cards" ||
        kind === "table" ||
        kind.endsWith("Explorer")
    )
  ) {
    const skillCards: LessonSection = {
      kind: "cards",
      heading: "Visual skill map",
      columns: content.objectives.length <= 4 ? 2 : 3,
      items: content.objectives.slice(0, 6).map((objective, index) => ({
        title: `Skill ${index + 1}`,
        text: objective,
      })),
    };
    const overviewIndex = sections.findIndex((section) => section.kind === "overview");
    sections =
      overviewIndex >= 0
        ? [...sections.slice(0, overviewIndex + 1), skillCards, ...sections.slice(overviewIndex + 1)]
        : [skillCards, ...sections];
  }

  const additions: LessonSection[] = [];
  let practice = existingPractice({ ...content, sections });
  if (practice.length === 0) {
    practice = truthPractice({ ...content, sections });
    additions.push({
      kind: "practice",
      heading: "Lesson mastery practice",
      questions: practice,
      stepKey: `${content.lessonSlug}Practice`,
    });
  }

  if (!sections.some((section) => section.kind === "gradedQuiz")) {
    const graded = makeGraded(practice.length ? practice : truthPractice({ ...content, sections }));
    additions.push({
      kind: "gradedQuiz",
      heading: "Lesson mastery check",
      questions: graded,
      passMark: Math.max(1, Math.ceil(graded.length * 0.6)),
    });
  }

  if (!sections.some((section) => section.kind === "completion")) {
    additions.push({
      kind: "completion",
      steps: [{ key: `${content.lessonSlug}Practice`, label: "Complete the lesson mastery practice" }],
      requireQuizPass: true,
    });
  }

  sections = insertBeforeClosing(
    sections,
    additions.filter((section) => section.kind !== "completion")
  );
  const completionAdditions = additions.filter((section) => section.kind === "completion");
  if (completionAdditions.length) sections = [...sections, ...completionAdditions];

  return { ...content, sections };
}

export const moderateLessonRoutes = [...MODERATE_LESSON_ROUTES];
