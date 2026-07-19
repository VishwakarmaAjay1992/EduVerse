"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

const PERFECT_SQUARES = new Set(
  Array.from({ length: 32 }, (_, i) => (i + 1) * (i + 1)).filter((n) => n <= 1000)
);
const PERFECT_CUBES = new Set(
  Array.from({ length: 10 }, (_, i) => (i + 1) ** 3).filter((n) => n <= 1000)
);

/**
 * Interactive laboratory for square and cube roots: a square-area model,
 * a cube-volume model, and a perfect-square / perfect-cube checker.
 */
export function RootsExplorer({ lessonId }: { lessonId: string }) {
  const [side, setSide] = useState(5);
  const [edge, setEdge] = useState(3);
  const [checkValue, setCheckValue] = useState(36);

  function touched() {
    markStep(lessonId, "rootsExplorer");
  }

  const area = side * side;
  const volume = edge * edge * edge;
  const sqrtCheck = Math.sqrt(checkValue);
  const cbrtCheck = Math.cbrt(checkValue);
  const isSquare = PERFECT_SQUARES.has(checkValue);
  const isCube = PERFECT_CUBES.has(checkValue);

  const squareCells = Array.from({ length: side * side });
  const squarePx = 176 / side;

  return (
    <div className="space-y-6 rounded-xl border p-5">
      <section className="space-y-3">
        <div>
          <h4 className="font-semibold">Square-area model</h4>
          <p className="text-sm text-muted-foreground">
            A square with side length s has area s × s. Move the slider and watch the area grid
            change: the square root asks the question in reverse.
          </p>
        </div>
        <Slider
          label="Side length"
          value={side}
          unit="units"
          min={1}
          max={12}
          step={1}
          onChange={(v) => {
            setSide(v);
            touched();
          }}
        />
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-6">
          <div
            className="grid shrink-0 gap-px rounded-md border bg-border p-px"
            style={{ gridTemplateColumns: `repeat(${side}, ${squarePx}px)` }}
            role="img"
            aria-label={`A ${side} by ${side} square made of ${area} unit squares.`}
          >
            {squareCells.map((_, i) => (
              <span key={i} className="bg-primary/25" style={{ height: squarePx }} />
            ))}
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-1">
            <Result label="Area" value={`${side} × ${side} = ${area} square units`} />
            <Result label="Square root" value={`√${area} = ${side}`} />
          </div>
        </div>
      </section>

      <section className="space-y-3 border-t pt-5">
        <div>
          <h4 className="font-semibold">Cube-volume model</h4>
          <p className="text-sm text-muted-foreground">
            A cube with edge length e has volume e × e × e. The cube root recovers the edge from the
            volume.
          </p>
        </div>
        <Slider
          label="Edge length"
          value={edge}
          unit="units"
          min={1}
          max={8}
          step={1}
          onChange={(v) => {
            setEdge(v);
            touched();
          }}
        />
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-6">
          <CubeSketch edge={edge} />
          <div className="grid w-full gap-3 sm:grid-cols-1">
            <Result label="Volume" value={`${edge} × ${edge} × ${edge} = ${volume} cubic units`} />
            <Result label="Cube root" value={`∛${volume} = ${edge}`} />
          </div>
        </div>
      </section>

      <section className="space-y-3 border-t pt-5">
        <div>
          <h4 className="font-semibold">Perfect-square and perfect-cube checker</h4>
          <p className="text-sm text-muted-foreground">
            Pick a whole number and see whether its square root or cube root is a whole number.
          </p>
        </div>
        <Slider
          label="Number to test"
          value={checkValue}
          unit=""
          min={1}
          max={1000}
          step={1}
          onChange={(v) => {
            setCheckValue(v);
            touched();
          }}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div
            className={`rounded-lg border p-3 ${isSquare ? "border-emerald-500/40 bg-emerald-500/5" : ""}`}
          >
            <p className="text-xs text-muted-foreground">Square root</p>
            <p className="font-semibold">
              √{checkValue} ≈ {sqrtCheck.toFixed(3)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {isSquare
                ? `${checkValue} is a perfect square: ${Math.round(sqrtCheck)} × ${Math.round(sqrtCheck)} = ${checkValue}.`
                : `${checkValue} is not a perfect square, so its square root is irrational.`}
            </p>
          </div>
          <div
            className={`rounded-lg border p-3 ${isCube ? "border-emerald-500/40 bg-emerald-500/5" : ""}`}
          >
            <p className="text-xs text-muted-foreground">Cube root</p>
            <p className="font-semibold">
              ∛{checkValue} ≈ {cbrtCheck.toFixed(3)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {isCube
                ? `${checkValue} is a perfect cube: ${Math.round(cbrtCheck)}³ = ${checkValue}.`
                : `${checkValue} is not a perfect cube.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function CubeSketch({ edge }: { edge: number }) {
  const size = 40 + edge * 14;
  const off = Math.round(size * 0.36);
  const w = size + off + 12;
  const h = size + off + 12;
  const x = 6;
  const y = 6 + off;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="shrink-0"
      role="img"
      aria-label={`A cube with edge length ${edge} units.`}
    >
      <rect
        x={x}
        y={y}
        width={size}
        height={size}
        className="fill-primary/20 stroke-primary"
        strokeWidth="1.5"
      />
      <polygon
        points={`${x},${y} ${x + off},${y - off} ${x + off + size},${y - off} ${x + size},${y}`}
        className="fill-primary/30 stroke-primary"
        strokeWidth="1.5"
      />
      <polygon
        points={`${x + size},${y} ${x + off + size},${y - off} ${x + off + size},${y - off + size} ${x + size},${y + size}`}
        className="fill-primary/10 stroke-primary"
        strokeWidth="1.5"
      />
      <text
        x={x + size / 2}
        y={y + size + 4}
        dominantBaseline="hanging"
        textAnchor="middle"
        className="fill-muted-foreground text-[11px]"
      >
        {edge} units
      </text>
    </svg>
  );
}

function Slider({
  label,
  value,
  unit,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block text-sm">
      {label}:{" "}
      <strong>
        {value}
        {unit ? ` ${unit}` : ""}
      </strong>
      <input
        className="mt-2 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
