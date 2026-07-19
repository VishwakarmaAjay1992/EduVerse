"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, RefreshCcw } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

interface Highlight {
  phrase: string;
  meaning: string;
}

interface WordPreset {
  id: string;
  category: string;
  problem: string;
  highlights: Highlight[];
  unknownPrompt: string;
  unknownOptions: string[];
  unknownAnswer: number;
  matchPhrase: string;
  matchOptions: string[];
  matchAnswer: number;
  equation: string;
  steps: string[];
  answer: string;
  senseCheck: string;
}

const PRESETS: WordPreset[] = [
  {
    id: "money",
    category: "Money",
    problem:
      "A shirt costs 15 riyals more than a cap. Together they cost 55 riyals. Find the price of the cap.",
    highlights: [
      { phrase: "15 riyals more than", meaning: "Add 15 to the cap's price." },
      { phrase: "Together they cost 55", meaning: "The two prices sum to 55." },
    ],
    unknownPrompt: "What should x represent?",
    unknownOptions: ["The price of the shirt", "The price of the cap", "The total cost"],
    unknownAnswer: 1,
    matchPhrase: "\u201c15 riyals more than the cap\u201d",
    matchOptions: ["x \u2212 15", "x + 15", "15x"],
    matchAnswer: 1,
    equation: "x + (x + 15) = 55",
    steps: [
      "Combine like terms: 2x + 15 = 55",
      "Subtract 15 from both sides: 2x = 40",
      "Divide both sides by 2: x = 20",
    ],
    answer: "The cap costs 20 riyals (and the shirt costs 35 riyals).",
    senseCheck: "20 + 35 = 55 ✓ and 35 is 15 more than 20 ✓ — the answer fits both conditions.",
  },
  {
    id: "ages",
    category: "Ages",
    problem:
      "Layla is twice as old as her brother. In 4 years, the sum of their ages will be 32. Find their current ages.",
    highlights: [
      { phrase: "twice as old as", meaning: "Layla's age is 2 times her brother's age." },
      { phrase: "In 4 years", meaning: "Add 4 to each person's current age." },
      { phrase: "sum of their ages will be 32", meaning: "The two future ages add to 32." },
    ],
    unknownPrompt: "What should x represent?",
    unknownOptions: ["Layla's current age", "Her brother's current age", "Their age difference"],
    unknownAnswer: 1,
    matchPhrase: "\u201cLayla is twice as old\u201d",
    matchOptions: ["x + 2", "2x", "x/2"],
    matchAnswer: 1,
    equation: "(x + 4) + (2x + 4) = 32",
    steps: [
      "Combine like terms: 3x + 8 = 32",
      "Subtract 8 from both sides: 3x = 24",
      "Divide both sides by 3: x = 8",
    ],
    answer: "The brother is currently 8 years old, and Layla is 16.",
    senseCheck:
      "In 4 years they will be 12 and 20, and 12 + 20 = 32 ✓; also 16 is indeed twice 8 ✓.",
  },
  {
    id: "lengths",
    category: "Lengths and perimeter",
    problem:
      "A rectangular garden is 3 metres longer than it is wide. Its perimeter is 26 metres. Find the width.",
    highlights: [
      { phrase: "3 metres longer than it is wide", meaning: "Length = width + 3." },
      { phrase: "perimeter is 26", meaning: "2 × (length + width) = 26." },
    ],
    unknownPrompt: "What should x represent?",
    unknownOptions: ["The length", "The width", "The perimeter"],
    unknownAnswer: 1,
    matchPhrase: "\u201c3 metres longer than it is wide\u201d",
    matchOptions: ["x \u2212 3", "x + 3", "3x"],
    matchAnswer: 1,
    equation: "2(x + (x + 3)) = 26",
    steps: [
      "Simplify inside the bracket: 2(2x + 3) = 26",
      "Distribute the 2: 4x + 6 = 26",
      "Subtract 6 from both sides: 4x = 20",
      "Divide both sides by 4: x = 5",
    ],
    answer: "The width is 5 m (and the length is 8 m).",
    senseCheck: "Perimeter check: 2 × (5 + 8) = 2 × 13 = 26 ✓",
  },
  {
    id: "transport",
    category: "Transport",
    problem:
      "A taxi charges a fixed 6 riyal fee plus 2 riyals per kilometre. A ride costs 24 riyals. How many kilometres was the ride?",
    highlights: [
      { phrase: "fixed 6 riyal fee", meaning: "A constant charge added once." },
      { phrase: "2 riyals per kilometre", meaning: "2 times the number of kilometres." },
    ],
    unknownPrompt: "What should x represent?",
    unknownOptions: ["The number of kilometres", "The total fare", "The fixed fee"],
    unknownAnswer: 0,
    matchPhrase: "\u201c2 riyals per kilometre\u201d",
    matchOptions: ["x + 2", "2x", "x \u2212 2"],
    matchAnswer: 1,
    equation: "2x + 6 = 24",
    steps: ["Subtract 6 from both sides: 2x = 18", "Divide both sides by 2: x = 9"],
    answer: "The ride was 9 kilometres.",
    senseCheck: "Check: 2 × 9 + 6 = 18 + 6 = 24 ✓",
  },
  {
    id: "work",
    category: "Work and rates",
    problem:
      "A worker is paid 20 riyals for the day plus 8 riyals per completed task. He earned 92 riyals. How many tasks did he complete?",
    highlights: [
      { phrase: "20 riyals for the day", meaning: "A fixed payment added once." },
      { phrase: "8 riyals per completed task", meaning: "8 times the number of tasks." },
    ],
    unknownPrompt: "What should x represent?",
    unknownOptions: ["The number of tasks completed", "The daily fixed pay", "The total pay"],
    unknownAnswer: 0,
    matchPhrase: "\u201c8 riyals per completed task\u201d",
    matchOptions: ["8x", "x + 8", "x/8"],
    matchAnswer: 0,
    equation: "8x + 20 = 92",
    steps: ["Subtract 20 from both sides: 8x = 72", "Divide both sides by 8: x = 9"],
    answer: "He completed 9 tasks.",
    senseCheck: "Check: 8 × 9 + 20 = 72 + 20 = 92 ✓",
  },
  {
    id: "consecutive",
    category: "Consecutive numbers",
    problem: "Three consecutive whole numbers add up to 87. Find the numbers.",
    highlights: [
      {
        phrase: "consecutive whole numbers",
        meaning: "Numbers that follow each other: x, x+1, x+2.",
      },
      { phrase: "add up to 87", meaning: "The three numbers sum to 87." },
    ],
    unknownPrompt: "What should x represent?",
    unknownOptions: ["The middle number", "The smallest number", "The largest number"],
    unknownAnswer: 1,
    matchPhrase: "\u201cthe next consecutive number\u201d",
    matchOptions: ["x + 1", "2x", "x \u2212 1"],
    matchAnswer: 0,
    equation: "x + (x + 1) + (x + 2) = 87",
    steps: [
      "Combine like terms: 3x + 3 = 87",
      "Subtract 3 from both sides: 3x = 84",
      "Divide both sides by 3: x = 28",
    ],
    answer: "The numbers are 28, 29 and 30.",
    senseCheck: "Check: 28 + 29 + 30 = 87 ✓",
  },
];

function Highlighted({ problem, highlights }: { problem: string; highlights: Highlight[] }) {
  let remaining = problem;
  const parts: { text: string; meaning?: string }[] = [];
  for (const h of highlights) {
    const idx = remaining.indexOf(h.phrase);
    if (idx === -1) continue;
    if (idx > 0) parts.push({ text: remaining.slice(0, idx) });
    parts.push({ text: h.phrase, meaning: h.meaning });
    remaining = remaining.slice(idx + h.phrase.length);
  }
  parts.push({ text: remaining });
  return (
    <p className="text-lg leading-8">
      {parts.map((p, i) =>
        p.meaning ? (
          <mark
            key={i}
            title={p.meaning}
            className="rounded bg-amber-500/20 px-1 py-0.5 font-semibold text-foreground underline decoration-amber-500 decoration-2 underline-offset-4"
          >
            {p.text}
          </mark>
        ) : (
          <span key={i}>{p.text}</span>
        )
      )}
    </p>
  );
}

export function WordProblemTranslatorExplorer({ lessonId }: { lessonId: string }) {
  const [presetId, setPresetId] = useState("money");
  const [stage, setStage] = useState(0); // 0 read, 1 unknown, 2 match, 3 equation, 4 steps
  const [unknownChoice, setUnknownChoice] = useState<number | null>(null);
  const [matchChoice, setMatchChoice] = useState<number | null>(null);
  const [revealedSteps, setRevealedSteps] = useState(0);

  const preset = PRESETS.find((p) => p.id === presetId)!;

  function record() {
    markStep(lessonId, "wordProblemTranslatorExplorer");
  }

  function selectPreset(id: string) {
    setPresetId(id);
    setStage(0);
    setUnknownChoice(null);
    setMatchChoice(null);
    setRevealedSteps(0);
    record();
  }

  const stageLabels = [
    "Read & highlight",
    "Identify the unknown",
    "Match the phrase",
    "Build the equation",
    "Solve step by step",
  ];

  return (
    <div className="space-y-6 rounded-xl border bg-card p-4 sm:p-6">
      <div>
        <label className="block text-sm font-medium" htmlFor="word-preset">
          Choose a word problem
        </label>
        <select
          id="word-preset"
          value={presetId}
          onChange={(e) => selectPreset(e.target.value)}
          className="mt-2 w-full rounded-md border bg-background px-3 py-2 sm:max-w-md"
        >
          {PRESETS.slice(0, 5).map((p) => (
            <option key={p.id} value={p.id}>
              {p.category}
            </option>
          ))}
        </select>
      </div>

      <nav aria-label="Progress" className="flex flex-wrap gap-1.5 text-xs">
        {stageLabels.map((label, i) => (
          <span
            key={label}
            className={cn(
              "rounded-full border px-2.5 py-1",
              i === stage && "border-primary bg-primary/10 font-semibold text-primary",
              i < stage &&
                "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
            )}
          >
            {i + 1}. {label}
          </span>
        ))}
      </nav>

      {stage === 0 && (
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-4">
            <Highlighted problem={preset.problem} highlights={preset.highlights} />
          </div>
          <p className="text-xs text-muted-foreground">
            Highlighted phrases are the ones that translate directly into algebra — hover or tap
            each one to see what it means.
          </p>
          <button
            type="button"
            onClick={() => {
              setStage(1);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Identify the unknown <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {stage === 1 && (
        <div className="space-y-4">
          <p className="font-medium">{preset.unknownPrompt}</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {preset.unknownOptions.map((opt, i) => {
              const answered = unknownChoice !== null;
              const correct = i === preset.unknownAnswer;
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={answered}
                  onClick={() => {
                    setUnknownChoice(i);
                    record();
                  }}
                  className={cn(
                    "rounded-lg border p-3 text-left",
                    !answered && "hover:border-primary/50",
                    answered && correct && "border-emerald-500 bg-emerald-500/10",
                    unknownChoice === i && !correct && "border-destructive bg-destructive/10"
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {unknownChoice !== null && (
            <button
              type="button"
              onClick={() => {
                setStage(2);
                record();
              }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Match a phrase <ArrowRight className="size-4" />
            </button>
          )}
        </div>
      )}

      {stage === 2 && (
        <div className="space-y-4">
          <p className="font-medium">Which expression matches {preset.matchPhrase}?</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {preset.matchOptions.map((opt, i) => {
              const answered = matchChoice !== null;
              const correct = i === preset.matchAnswer;
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={answered}
                  onClick={() => {
                    setMatchChoice(i);
                    record();
                  }}
                  className={cn(
                    "rounded-lg border p-3 text-left font-mono",
                    !answered && "hover:border-primary/50",
                    answered && correct && "border-emerald-500 bg-emerald-500/10",
                    matchChoice === i && !correct && "border-destructive bg-destructive/10"
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {matchChoice !== null && (
            <button
              type="button"
              onClick={() => {
                setStage(3);
                record();
              }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Build the equation <ArrowRight className="size-4" />
            </button>
          )}
        </div>
      )}

      {stage === 3 && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Putting every highlighted phrase together gives the full equation:
          </p>
          <div className="rounded-lg border bg-muted/30 p-4 text-center text-xl font-bold text-primary">
            {preset.equation}
          </div>
          <button
            type="button"
            onClick={() => {
              setStage(4);
              record();
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Solve step by step <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {stage === 4 && (
        <div className="space-y-4">
          <div className="rounded-lg border bg-muted/30 p-4 text-center text-lg font-bold text-primary">
            {preset.equation}
          </div>
          <ol className="space-y-2">
            {preset.steps.slice(0, revealedSteps).map((s, i) => (
              <li key={i} className="rounded-md border p-3 text-sm">
                <span className="mr-2 font-semibold text-primary">Step {i + 1}:</span>
                {s}
              </li>
            ))}
          </ol>
          {revealedSteps < preset.steps.length ? (
            <button
              type="button"
              onClick={() => {
                setRevealedSteps((n) => n + 1);
                record();
              }}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Reveal next step <ArrowRight className="size-4" />
            </button>
          ) : (
            <div className="space-y-2">
              <p className="flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/5 p-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="size-4" /> {preset.answer}
              </p>
              <p className="rounded-md bg-muted/40 p-3 text-sm text-muted-foreground">
                <strong className="text-foreground">Does it make sense? </strong>
                {preset.senseCheck}
              </p>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => selectPreset(presetId)}
        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
      >
        <RefreshCcw className="size-4" /> Start this problem again
      </button>
    </div>
  );
}
