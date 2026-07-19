import { addingAndSubtractingFractions } from "@/content/mathematics/adding-and-subtracting-fractions";
import { additionAndSubtraction } from "@/content/mathematics/addition-and-subtraction";
import { decimalNotationAndOperations } from "@/content/mathematics/decimal-notation-and-operations";
import { estimationAndApproximation } from "@/content/mathematics/estimation-and-approximation";
import { fractionsAsPartsOfAWhole } from "@/content/mathematics/fractions-as-parts-of-a-whole";
import { fractionsDecimalsAndRecurringDecimals } from "@/content/mathematics/fractions-decimals-and-recurring-decimals";
import { sineCosineAndTangent } from "@/content/mathematics/sine-cosine-and-tangent";
import { anglesOfElevationAndDepression } from "@/content/mathematics/angles-of-elevation-and-depression";
import { equationOfACircle } from "@/content/mathematics/equation-of-a-circle";
import { theParabolaAsAConic } from "@/content/mathematics/the-parabola-as-a-conic";
import { ellipseAndHyperbola } from "@/content/mathematics/ellipse-and-hyperbola";
import { pointsLinesPlanesAndAngles } from "@/content/mathematics/points-lines-planes-and-angles";
import { angleRelationships } from "@/content/mathematics/angle-relationships";
import { radiansAndTheUnitCircle } from "@/content/mathematics/radians-and-the-unit-circle";
import { fundamentalIdentities } from "@/content/mathematics/fundamental-identities";
import { compoundAndDoubleAngleFormulas } from "@/content/mathematics/compound-and-double-angle-formulas";
import { trigonometricEquations } from "@/content/mathematics/trigonometric-equations";
import { lawOfSinesAndCosines } from "@/content/mathematics/law-of-sines-and-law-of-cosines";
import { modelingWithTrigonometricFunctions } from "@/content/mathematics/modeling-with-trigonometric-functions";
import { introductionToPhysicalQuantities } from "@/content/physics/introduction-to-physical-quantities";
import { dimensionalAnalysis } from "@/content/physics/dimensional-analysis";
import { measurementUncertaintyAndSignificantFigures } from "@/content/physics/measurement-uncertainty-and-significant-figures";
import { distanceDisplacementSpeedVelocity } from "@/content/physics/distance-displacement-speed-and-velocity";
import { accelerationAndMotionGraphs } from "@/content/physics/acceleration-and-motion-graphs";
import { typesOfForces } from "@/content/physics/types-of-forces";
import { pressure } from "@/content/physics/pressure";
import { formsOfEnergyAndConservation } from "@/content/physics/forms-of-energy-and-conservation";
import { solidsLiquidsGasesAndDensity } from "@/content/physics/solids-liquids-gases-and-density";
import { equationsOfMotion } from "@/content/physics/equations-of-motion";
import { vectorsInKinematics } from "@/content/physics/vectors-in-kinematics";
import { projectileMotion } from "@/content/physics/projectile-motion";
import { mixedNumbersAndImproperFractions } from "@/content/mathematics/mixed-numbers-and-improper-fractions";
import { multiplicationAndDivision } from "@/content/mathematics/multiplication-and-division";
import { multiplyingAndDividingFractions } from "@/content/mathematics/multiplying-and-dividing-fractions";
import { orderOfOperations } from "@/content/mathematics/order-of-operations";
import { romanNumerals } from "@/content/mathematics/roman-numerals";
import { understandingPlaceValue } from "@/content/mathematics/understanding-place-value";
import { integersAndTheNumberLine } from "@/content/mathematics/integers-and-the-number-line";
import { multiplyingAndDividingIntegers } from "@/content/mathematics/multiplying-and-dividing-integers";
import { rationalAndIrrationalNumbers } from "@/content/mathematics/rational-and-irrational-numbers";
import { fromArithmeticToAlgebra } from "@/content/mathematics/from-arithmetic-to-algebra";
import { simplifyingExpressions } from "@/content/mathematics/simplifying-expressions";
import { solvingOneStepAndTwoStepEquations } from "@/content/mathematics/solving-one-step-and-two-step-equations";
import { factorsMultiplesAndDivisibilityRules } from "@/content/mathematics/factors-multiples-and-divisibility-rules";
import { primeNumbersAndPrimeFactorization } from "@/content/mathematics/prime-numbers-and-prime-factorization";
import { highestCommonFactorAndLowestCommonMultiple } from "@/content/mathematics/highest-common-factor-and-lowest-common-multiple";
import { theCartesianPlane } from "@/content/mathematics/the-cartesian-plane";
import { chartsTablesAndGraphs } from "@/content/mathematics/charts-tables-and-graphs";
import { understandingPercentages } from "@/content/mathematics/understanding-percentages";
import { percentageChangeAndApplications } from "@/content/mathematics/percentage-change-and-applications";
import { ratios } from "@/content/mathematics/ratios";
import { directAndInverseProportion } from "@/content/mathematics/direct-and-inverse-proportion";
import { exponentsAndTheLawsOfIndices } from "@/content/mathematics/exponents-and-the-laws-of-indices";
import { squareRootsAndCubeRoots } from "@/content/mathematics/square-roots-and-cube-roots";
import { standardForm } from "@/content/mathematics/standard-form";
import { metricAndImperialUnits } from "@/content/mathematics/metric-and-imperial-units";
import { perimeterAndAreaOfBasicShapes } from "@/content/mathematics/perimeter-and-area-of-basic-shapes";
import { volumeAndSurfaceAreaBasics } from "@/content/mathematics/volume-and-surface-area-basics";
import { solvingLinearEquations } from "@/content/mathematics/solving-linear-equations";
import { wordProblemsWithLinearEquations } from "@/content/mathematics/word-problems-with-linear-equations";
import { linearInequalities } from "@/content/mathematics/linear-inequalities";
import { systemsOfLinearEquations } from "@/content/mathematics/systems-of-linear-equations";
import { polynomialsAddSubtractMultiply } from "@/content/mathematics/polynomials-add-subtract-multiply";
import { polynomialDivision } from "@/content/mathematics/polynomial-division";
import { factoringTechniques } from "@/content/mathematics/factoring-techniques";
import { rationalExpressions } from "@/content/mathematics/rational-expressions";
import type { LessonContent } from "./lesson-content-types";

const REGISTRY: LessonContent[] = [
  understandingPlaceValue,
  romanNumerals,
  additionAndSubtraction,
  multiplicationAndDivision,
  orderOfOperations,
  estimationAndApproximation,
  fractionsAsPartsOfAWhole,
  mixedNumbersAndImproperFractions,
  addingAndSubtractingFractions,
  multiplyingAndDividingFractions,
  decimalNotationAndOperations,
  fractionsDecimalsAndRecurringDecimals,
  integersAndTheNumberLine,
  multiplyingAndDividingIntegers,
  rationalAndIrrationalNumbers,
  factorsMultiplesAndDivisibilityRules,
  primeNumbersAndPrimeFactorization,
  highestCommonFactorAndLowestCommonMultiple,
  theCartesianPlane,
  chartsTablesAndGraphs,
  understandingPercentages,
  percentageChangeAndApplications,
  ratios,
  directAndInverseProportion,
  exponentsAndTheLawsOfIndices,
  squareRootsAndCubeRoots,
  standardForm,
  metricAndImperialUnits,
  perimeterAndAreaOfBasicShapes,
  volumeAndSurfaceAreaBasics,
  solvingLinearEquations,
  wordProblemsWithLinearEquations,
  linearInequalities,
  systemsOfLinearEquations,
  polynomialsAddSubtractMultiply,
  polynomialDivision,
  factoringTechniques,
  rationalExpressions,
  fromArithmeticToAlgebra,
  simplifyingExpressions,
  solvingOneStepAndTwoStepEquations,
  sineCosineAndTangent,
  anglesOfElevationAndDepression,
  equationOfACircle,
  theParabolaAsAConic,
  ellipseAndHyperbola,
  pointsLinesPlanesAndAngles,
  angleRelationships,
  radiansAndTheUnitCircle,
  fundamentalIdentities,
  compoundAndDoubleAngleFormulas,
  trigonometricEquations,
  lawOfSinesAndCosines,
  modelingWithTrigonometricFunctions,
  introductionToPhysicalQuantities,
  dimensionalAnalysis,
  measurementUncertaintyAndSignificantFigures,
  distanceDisplacementSpeedVelocity,
  accelerationAndMotionGraphs,
  typesOfForces,
  pressure,
  formsOfEnergyAndConservation,
  solidsLiquidsGasesAndDensity,
  equationsOfMotion,
  vectorsInKinematics,
  projectileMotion,
];

export function getLessonContent(
  subjectSlug: string,
  chapterSlug: string,
  lessonSlug: string
): LessonContent | null {
  return (
    REGISTRY.find(
      (c) =>
        c.subjectSlug === subjectSlug &&
        c.chapterSlug === chapterSlug &&
        c.lessonSlug === lessonSlug
    ) ?? null
  );
}

export function hasLessonContent(subjectSlug: string, lessonSlug: string): boolean {
  return REGISTRY.some((c) => c.subjectSlug === subjectSlug && c.lessonSlug === lessonSlug);
}

export type { LessonContent } from "./lesson-content-types";

export interface OutlineItem {
  id: string;
  label: string;
}

/** Build the "on this page" outline from a lesson's sections. */
export function lessonOutline(content: LessonContent): OutlineItem[] {
  const items: OutlineItem[] = [];
  let exampleAdded = false;
  content.sections.forEach((section, i) => {
    const id = `s-${i}`;
    switch (section.kind) {
      case "overview":
        items.push({ id, label: "Overview" });
        break;
      case "theory":
        items.push({ id, label: section.heading });
        break;
      case "realWorld":
        items.push({ id, label: "Real-world uses" });
        break;
      case "motionExplorer":
        items.push({ id, label: "Interactive motion explorer" });
        break;
      case "motionGraphExplorer":
        items.push({ id, label: "Interactive graph explorer" });
        break;
      case "forceExplorer":
        items.push({ id, label: "Interactive force explorer" });
        break;
      case "pressureExplorer":
        items.push({ id, label: "Interactive pressure explorer" });
        break;
      case "dimensionalAnalysisExplorer":
        items.push({ id, label: "Interactive dimensional analysis lab" });
        break;
      case "measurementUncertaintyExplorer":
        items.push({ id, label: "Interactive measurement laboratory" });
        break;
      case "integerNumberLineExplorer":
        items.push({ id, label: "Interactive integer number line" });
        break;
      case "integerRulesExplorer":
        items.push({ id, label: "Interactive integer sign rules" });
        break;
      case "rationalNumberExplorer":
        items.push({ id, label: "Interactive real-number laboratory" });
        break;
      case "algebraExpressionExplorer":
        items.push({ id, label: "Interactive expression laboratory" });
        break;
      case "simplifyingExpressionsExplorer":
        items.push({ id, label: "Interactive simplification laboratory" });
        break;
      case "equationBalanceExplorer":
        items.push({ id, label: "Interactive equation balance" });
        break;
      case "factorPrimeExplorer":
        items.push({
          id,
          label:
            section.mode === "hcfLcm"
              ? "Interactive HCF and LCM laboratory"
              : section.mode === "primes"
                ? "Interactive prime laboratory"
                : "Interactive factors laboratory",
        });
        break;
      case "coordinateDataExplorer":
        items.push({
          id,
          label:
            section.mode === "coordinates"
              ? "Interactive Cartesian-plane laboratory"
              : "Interactive data-display laboratory",
        });
        break;
      case "energyExplorer":
        items.push({ id, label: "Interactive energy explorer" });
        break;
      case "densityExplorer":
        items.push({ id, label: "Interactive matter and density explorer" });
        break;
      case "rootsExplorer":
        items.push({ id, label: "Interactive roots laboratory" });
        break;
      case "standardFormExplorer":
        items.push({ id, label: "Interactive standard-form laboratory" });
        break;
      case "unitConverterExplorer":
        items.push({ id, label: "Interactive unit converter" });
        break;
      case "perimeterAreaExplorer":
        items.push({ id, label: "Interactive perimeter and area laboratory" });
        break;
      case "volumeSurfaceExplorer":
        items.push({ id, label: "Interactive volume and surface-area laboratory" });
        break;
      case "linearEquationSolverExplorer":
        items.push({ id, label: "Interactive equation-solving laboratory" });
        break;
      case "wordProblemTranslatorExplorer":
        items.push({ id, label: "Interactive word-problem translator" });
        break;
      case "inequalityExplorer":
        items.push({ id, label: "Interactive inequality laboratory" });
        break;
      case "simultaneousEquationsExplorer":
        items.push({ id, label: "Interactive simultaneous-equations laboratory" });
        break;
      case "polynomialMultiplyExplorer":
        items.push({ id, label: "Interactive polynomial multiplication laboratory" });
        break;
      case "polynomialDivisionExplorer":
        items.push({ id, label: "Interactive polynomial division laboratory" });
        break;
      case "factoringExplorer":
        items.push({ id, label: "Interactive factoring laboratory" });
        break;
      case "rationalExpressionExplorer":
        items.push({ id, label: "Interactive rational expressions laboratory" });
        break;
      case "unitCircleExplorer":
        items.push({ id, label: "Interactive unit circle" });
        break;
      case "trigGraphExplorer":
        items.push({ id, label: "Interactive graphs" });
        break;
      case "kinematicsExplorer":
        items.push({ id, label: "Interactive kinematics explorer" });
        break;
      case "instrumentActivity":
        items.push({ id, label: "Activity: instruments" });
        break;
      case "classifyActivity":
        items.push({ id, label: "Activity: classify" });
        break;
      case "practice":
        items.push({ id, label: "Practice" });
        break;
      case "gradedQuiz":
        items.push({ id, label: "Lesson quiz" });
        break;
      case "completion":
        items.push({ id, label: "Complete lesson" });
        break;
      case "flashcards":
        items.push({ id, label: "Flashcards" });
        break;
      case "quiz":
        items.push({ id, label: "Quick quiz" });
        break;
      case "example":
        if (!exampleAdded) {
          items.push({ id, label: "Worked examples" });
          exampleAdded = true;
        }
        break;
      case "mistakes":
        items.push({ id, label: "Common mistakes" });
        break;
      case "summary":
        items.push({ id, label: "Summary" });
        break;
      case "history":
        items.push({ id, label: "A little history" });
        break;
    }
  });
  return items;
}
