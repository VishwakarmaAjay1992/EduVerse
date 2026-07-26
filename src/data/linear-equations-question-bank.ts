import { oneMarkLinearEquationQuestions } from "./linear-equations-question-bank-1-mark";
import { twoMarkLinearEquationQuestions } from "./linear-equations-question-bank-2-mark";
import { threeMarkLinearEquationQuestions } from "./linear-equations-question-bank-3-mark";
import { fourMarkLinearEquationQuestions } from "./linear-equations-question-bank-4-mark";
import type { LinearEquationQuestion } from "./linear-equations-question-bank-types";

export type {
  CoordinateLine,
  LinearEquationQuestion,
  QuestionBankDiagram,
  QuestionBankDifficulty,
  QuestionBankMarks,
  QuestionBankType,
} from "./linear-equations-question-bank-types";

export const linearEquationQuestionBank: LinearEquationQuestion[] = [
  ...oneMarkLinearEquationQuestions,
  ...twoMarkLinearEquationQuestions,
  ...threeMarkLinearEquationQuestions,
  ...fourMarkLinearEquationQuestions,
].sort((a, b) => a.id - b.id);

if (linearEquationQuestionBank.length !== 132) {
  throw new Error(
    `Linear-equations question bank must contain 132 questions; found ${linearEquationQuestionBank.length}.`
  );
}
