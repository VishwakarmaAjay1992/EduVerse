export type QuestionBankMarks = 1 | 2 | 3 | 4;

export type QuestionBankType =
  | "multiple-choice"
  | "assertion-reason"
  | "fill-in-the-blank"
  | "very-short-answer"
  | "short-answer"
  | "long-answer";

export type QuestionBankDifficulty = "Foundation" | "Moderate" | "Advanced";

export type CoordinateLine = {
  label: string;
  a: number;
  b: number;
  c: number;
};

export type QuestionBankDiagram =
  | {
      kind: "coordinate-graph";
      lines: CoordinateLine[];
      points?: { x: number; y: number; label?: string }[];
      polygon?: { x: number; y: number }[];
      xRange?: [number, number];
      yRange?: [number, number];
      caption?: string;
    }
  | {
      kind: "rectangle";
      top: string;
      right: string;
      bottom: string;
      left: string;
      caption?: string;
    }
  | {
      kind: "house-pentagon";
      labels: { topLeft: string; topRight: string; middle: string; left: string; bottom: string };
      caption?: string;
    };

export interface LinearEquationQuestion {
  id: number;
  marks: QuestionBankMarks;
  type: QuestionBankType;
  difficulty: QuestionBankDifficulty;
  prompt: string;
  options?: string[];
  answer: string;
  solution: string[];
  source?: string;
  page: number;
  tags: string[];
  diagram?: QuestionBankDiagram;
  note?: string;
}
