import { anglesOfElevationAndDepression } from "@/content/mathematics/angles-of-elevation-and-depression";
import { compoundAndDoubleAngleFormulas } from "@/content/mathematics/compound-and-double-angle-formulas";
import { completeTrigonometryCourse } from "@/content/mathematics/complete-trigonometry-course";
import { fundamentalIdentities } from "@/content/mathematics/fundamental-identities";
import { lawOfSinesAndCosines } from "@/content/mathematics/law-of-sines-and-law-of-cosines";
import { modelingWithTrigonometricFunctions } from "@/content/mathematics/modeling-with-trigonometric-functions";
import { radiansAndTheUnitCircle } from "@/content/mathematics/radians-and-the-unit-circle";
import { sineCosineAndTangent } from "@/content/mathematics/sine-cosine-and-tangent";
import { trigonometricEquations } from "@/content/mathematics/trigonometric-equations";
import type { LessonContent } from "@/lib/lesson-content-types";

/**
 * One canonical Trigonometry registry. The 26 textbook-based lessons are combined
 * with the eight pre-existing EduVerse lessons so no earlier teaching material is lost.
 */
export const originalTrigonometryLessons: LessonContent[] = [
  sineCosineAndTangent,
  anglesOfElevationAndDepression,
  radiansAndTheUnitCircle,
  fundamentalIdentities,
  compoundAndDoubleAngleFormulas,
  trigonometricEquations,
  lawOfSinesAndCosines,
  modelingWithTrigonometricFunctions,
];

export const trigonometryCourse: LessonContent[] = [
  ...completeTrigonometryCourse,
  ...originalTrigonometryLessons,
];
