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
      case "energyExplorer":
        items.push({ id, label: "Interactive energy explorer" });
        break;
      case "densityExplorer":
        items.push({ id, label: "Interactive matter and density explorer" });
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
