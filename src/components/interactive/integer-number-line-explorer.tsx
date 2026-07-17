"use client";

import { useMemo, useState } from "react";
import { ArrowLeftRight, MoveHorizontal } from "lucide-react";
import { markStep } from "@/lib/progress-store";
import { cn } from "@/lib/utils";

const MIN = -15;
const MAX = 15;
const WIDTH = 760;
const HEIGHT = 190;
const PAD = 34;

function xFor(value: number): number {
  return PAD + ((value - MIN) / (MAX - MIN)) * (WIDTH - PAD * 2);
}

function relation(a: number, b: number): string {
  if (a < b) return `${a} < ${b}`;
  if (a > b) return `${a} > ${b}`;
  return `${a} = ${b}`;
}

export function IntegerNumberLineExplorer({ lessonId }: { lessonId: string }) {
  const [tab, setTab] = useState<"compare" | "operate">("compare");
  const [a, setA] = useState(-4);
  const [b, setB] = useState(3);
  const [start, setStart] = useState(-2);
  const [operation, setOperation] = useState<"add" | "subtract">("add");
  const [amount, setAmount] = useState(5);

  const result = operation === "add" ? start + amount : start - amount;
  const direction = result >= start ? "right" : "left";
  const ticks = useMemo(() => Array.from({ length: MAX - MIN + 1 }, (_, i) => MIN + i), []);

  function record() {
    markStep(lessonId, "integerNumberLineExplorer");
  }

  return (
    <div className="space-y-5 rounded-xl border bg-card p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Integer explorer modes">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "compare"}
          onClick={() => {
            setTab("compare");
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            tab === "compare" ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Order and absolute value
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "operate"}
          onClick={() => {
            setTab("operate");
            record();
          }}
          className={cn(
            "rounded-md border px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            tab === "operate" ? "border-primary bg-primary/10" : "hover:bg-muted"
          )}
        >
          Add and subtract
        </button>
      </div>

      {tab === "compare" ? (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              Integer A: <span className="font-bold">{a}</span>
              <input
                type="range"
                min={-12}
                max={12}
                value={a}
                onChange={(event) => {
                  setA(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Integer B: <span className="font-bold">{b}</span>
              <input
                type="range"
                min={-12}
                max={12}
                value={b}
                onChange={(event) => {
                  setB(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
          </div>

          <NumberLineSvg
            ticks={ticks}
            points={[
              { value: a, label: "A" },
              { value: b, label: "B" },
            ]}
          />

          <div className="grid gap-3 sm:grid-cols-3">
            <ResultCard label="Comparison" value={relation(a, b)} />
            <ResultCard label={`Absolute value of ${a}`} value={`|${a}| = ${Math.abs(a)}`} />
            <ResultCard label={`Absolute value of ${b}`} value={`|${b}| = ${Math.abs(b)}`} />
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            The integer farther to the right is greater. Absolute value is distance from zero, so it
            is never negative.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="space-y-2 text-sm font-medium">
              Start at: <span className="font-bold">{start}</span>
              <input
                type="range"
                min={-8}
                max={8}
                value={start}
                onChange={(event) => {
                  setStart(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              Operation
              <select
                value={operation}
                onChange={(event) => {
                  setOperation(event.target.value as "add" | "subtract");
                  record();
                }}
                className="w-full rounded-md border bg-background px-3 py-2"
              >
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium">
              Amount: <span className="font-bold">{amount}</span>
              <input
                type="range"
                min={1}
                max={7}
                value={amount}
                onChange={(event) => {
                  setAmount(Number(event.target.value));
                  record();
                }}
                className="w-full accent-primary"
              />
            </label>
          </div>

          <OperationNumberLine ticks={ticks} start={start} result={result} />

          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <MoveHorizontal className="size-5 text-primary" />
              {start} {operation === "add" ? "+" : "−"} {amount} = {result}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Start at {start}. To {operation} {amount}, move {amount} unit{amount === 1 ? "" : "s"}{" "}
              to the {direction}. You land on {result}.
            </p>
          </div>

          <div className="rounded-lg border p-4 text-sm">
            <p className="flex items-center gap-2 font-medium">
              <ArrowLeftRight className="size-4 text-primary" /> Subtraction as adding the opposite
            </p>
            <p className="mt-1 text-muted-foreground">
              {start} − {amount} is the same as {start} + ({-amount}). Changing subtraction to
              addition of the opposite is especially useful when the second number is negative.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-3 text-center">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

function NumberLineSvg({
  ticks,
  points,
}: {
  ticks: number[];
  points: { value: number; label: string }[];
}) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Number line showing ${points.map((p) => `${p.label} at ${p.value}`).join(" and ")}`}
    >
      <line
        x1={PAD}
        y1={100}
        x2={WIDTH - PAD}
        y2={100}
        className="stroke-foreground"
        strokeWidth="2"
      />
      <path d={`M ${WIDTH - PAD} 100 l -10 -6 v 12 z`} className="fill-foreground" />
      <path d={`M ${PAD} 100 l 10 -6 v 12 z`} className="fill-foreground" />
      {ticks.map((tick) => {
        const x = xFor(tick);
        const major = tick % 5 === 0 || tick === 0;
        return (
          <g key={tick}>
            <line
              x1={x}
              y1={major ? 91 : 95}
              x2={x}
              y2={major ? 109 : 105}
              className="stroke-muted-foreground"
            />
            {(major || Math.abs(tick) <= 5) && (
              <text
                x={x}
                y={128}
                textAnchor="middle"
                fontSize="11"
                className="fill-muted-foreground"
              >
                {tick}
              </text>
            )}
          </g>
        );
      })}
      {points.map((point, index) => {
        const x = xFor(point.value);
        const y = index === 0 ? 63 : 45;
        return (
          <g key={point.label}>
            <line x1={x} y1={y + 8} x2={x} y2={94} className="stroke-primary" strokeWidth="2" />
            <circle cx={x} cy={100} r={6} className="fill-primary" />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              fontSize="13"
              className="fill-primary font-semibold"
            >
              {point.label} = {point.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function OperationNumberLine({
  ticks,
  start,
  result,
}: {
  ticks: number[];
  start: number;
  result: number;
}) {
  const xStart = xFor(start);
  const xResult = xFor(result);
  const left = Math.min(xStart, xResult);
  const width = Math.abs(xResult - xStart);
  const path = `M ${xStart} 78 Q ${(xStart + xResult) / 2} ${35 - Math.min(width / 10, 16)} ${xResult} 78`;
  const arrowDirection = xResult >= xStart ? 1 : -1;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="h-auto w-full"
      role="img"
      aria-label={`Movement on a number line from ${start} to ${result}`}
    >
      <line
        x1={PAD}
        y1={110}
        x2={WIDTH - PAD}
        y2={110}
        className="stroke-foreground"
        strokeWidth="2"
      />
      {ticks.map((tick) => {
        const x = xFor(tick);
        const major = tick % 5 === 0 || tick === 0;
        return (
          <g key={tick}>
            <line
              x1={x}
              y1={major ? 101 : 105}
              x2={x}
              y2={major ? 119 : 115}
              className="stroke-muted-foreground"
            />
            {(major || Math.abs(tick) <= 5) && (
              <text
                x={x}
                y={138}
                textAnchor="middle"
                fontSize="11"
                className="fill-muted-foreground"
              >
                {tick}
              </text>
            )}
          </g>
        );
      })}
      <path d={path} className="fill-none stroke-primary" strokeWidth="3" />
      <path d={`M ${xResult} 78 l ${-arrowDirection * 12} -5 l 2 10 z`} className="fill-primary" />
      <circle cx={xStart} cy={110} r={6} className="fill-muted-foreground" />
      <circle cx={xResult} cy={110} r={7} className="fill-primary" />
      <text x={xStart} y={161} textAnchor="middle" fontSize="12" className="fill-muted-foreground">
        start {start}
      </text>
      <text
        x={xResult}
        y={181}
        textAnchor="middle"
        fontSize="12"
        className="fill-primary font-semibold"
      >
        result {result}
      </text>
      {width > 0 && (
        <text
          x={left + width / 2}
          y={31}
          textAnchor="middle"
          fontSize="12"
          className="fill-primary"
        >
          {Math.abs(result - start)} unit{Math.abs(result - start) === 1 ? "" : "s"}
        </text>
      )}
    </svg>
  );
}
