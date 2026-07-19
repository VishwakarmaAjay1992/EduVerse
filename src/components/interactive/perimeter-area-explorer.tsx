"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

type Shape = "rectangle" | "triangle" | "parallelogram" | "trapezium" | "circle";

const SHAPES: Record<Shape, string> = {
  rectangle: "Rectangle",
  triangle: "Triangle",
  parallelogram: "Parallelogram",
  trapezium: "Trapezium",
  circle: "Circle",
};

/**
 * Interactive 2-D shape laboratory: pick a shape, drag sliders for its
 * dimensions, and watch the perimeter and area update live with the formula.
 */
export function PerimeterAreaExplorer({ lessonId }: { lessonId: string }) {
  const [shape, setShape] = useState<Shape>("rectangle");
  const [a, setA] = useState(8); // length / base / radius
  const [b, setB] = useState(5); // width / height
  const [c, setC] = useState(4); // second parallel side (trapezium)

  function touched() {
    markStep(lessonId, "perimeterAreaExplorer");
  }

  const model = computeShape(shape, a, b, c);

  return (
    <div className="space-y-6 rounded-xl border p-5">
      <section className="space-y-3">
        <div>
          <h4 className="font-semibold">Perimeter and area laboratory</h4>
          <p className="text-sm text-muted-foreground">
            Choose a shape, adjust its dimensions and watch the perimeter and area recalculate live.
            All lengths are in centimetres.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(SHAPES) as Shape[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setShape(key);
                touched();
              }}
              className={`rounded-md border px-3 py-2 text-sm ${
                shape === key ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              {SHAPES[key]}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Slider
            label={model.aLabel}
            value={a}
            min={1}
            max={12}
            onChange={(v) => {
              setA(v);
              touched();
            }}
          />
          {model.bLabel && (
            <Slider
              label={model.bLabel}
              value={b}
              min={1}
              max={12}
              onChange={(v) => {
                setB(v);
                touched();
              }}
            />
          )}
          {model.cLabel && (
            <Slider
              label={model.cLabel}
              value={c}
              min={1}
              max={12}
              onChange={(v) => {
                setC(v);
                touched();
              }}
            />
          )}
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
          <ShapeSketch shape={shape} a={a} b={b} c={c} />
          <div className="grid w-full gap-3">
            <Result label="Area formula" value={model.areaFormula} />
            <Result label="Area" value={`${round2(model.area)} cm²`} />
            <Result
              label={shape === "circle" ? "Circumference" : "Perimeter"}
              value={
                model.perimeter === null ? "Needs the slant sides" : `${round2(model.perimeter)} cm`
              }
            />
          </div>
        </div>
        {shape === "rectangle" && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Grid view: the area is the number of 1 cm × 1 cm squares that fit inside.
            </p>
            <div
              className="grid w-fit gap-px rounded-md border bg-border p-px"
              style={{ gridTemplateColumns: `repeat(${a}, 16px)` }}
              role="img"
              aria-label={`A rectangle ${a} centimetres by ${b} centimetres containing ${a * b} unit squares.`}
            >
              {Array.from({ length: a * b }).map((_, i) => (
                <span key={i} className="h-4 bg-primary/25" />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function computeShape(shape: Shape, a: number, b: number, c: number) {
  switch (shape) {
    case "rectangle":
      return {
        aLabel: "Length (cm)",
        bLabel: "Width (cm)",
        cLabel: null,
        area: a * b,
        areaFormula: `A = l × w = ${a} × ${b}`,
        perimeter: 2 * (a + b),
      };
    case "triangle": {
      // Right triangle with legs a (base) and b (height) so the perimeter is well defined.
      const hyp = Math.sqrt(a * a + b * b);
      return {
        aLabel: "Base (cm)",
        bLabel: "Height (cm)",
        cLabel: null,
        area: (a * b) / 2,
        areaFormula: `A = ½ × b × h = ½ × ${a} × ${b}`,
        perimeter: a + b + hyp,
      };
    }
    case "parallelogram":
      return {
        aLabel: "Base (cm)",
        bLabel: "Perpendicular height (cm)",
        cLabel: null,
        area: a * b,
        areaFormula: `A = b × h = ${a} × ${b}`,
        perimeter: null, // slant side not modelled; height is not the side length
      };
    case "trapezium":
      return {
        aLabel: "Parallel side a (cm)",
        bLabel: "Height (cm)",
        cLabel: "Parallel side b (cm)",
        area: ((a + c) / 2) * b,
        areaFormula: `A = ½(a + b) × h = ½(${a} + ${c}) × ${b}`,
        perimeter: null,
      };
    case "circle":
      return {
        aLabel: "Radius (cm)",
        bLabel: null,
        cLabel: null,
        area: Math.PI * a * a,
        areaFormula: `A = πr² = π × ${a}²`,
        perimeter: 2 * Math.PI * a,
      };
  }
}

function ShapeSketch({ shape, a, b, c }: { shape: Shape; a: number; b: number; c: number }) {
  const scale = 14;
  const pad = 22;
  const w = 12 * scale + pad * 2;
  const h = 12 * scale + pad * 2;
  const cls = "fill-primary/20 stroke-primary";
  const text = "fill-muted-foreground text-[11px]";
  let body: React.ReactNode = null;
  let label = "";

  if (shape === "rectangle") {
    label = `A rectangle ${a} by ${b} centimetres.`;
    body = (
      <>
        <rect
          x={pad}
          y={pad}
          width={a * scale}
          height={b * scale}
          className={cls}
          strokeWidth="1.5"
        />
        <text
          x={pad + (a * scale) / 2}
          y={pad + b * scale + 14}
          textAnchor="middle"
          className={text}
        >
          {a} cm
        </text>
        <text x={pad - 6} y={pad + (b * scale) / 2} textAnchor="end" className={text}>
          {b} cm
        </text>
      </>
    );
  } else if (shape === "triangle") {
    label = `A right triangle with base ${a} centimetres and height ${b} centimetres.`;
    body = (
      <>
        <polygon
          points={`${pad},${pad + b * scale} ${pad + a * scale},${pad + b * scale} ${pad},${pad}`}
          className={cls}
          strokeWidth="1.5"
        />
        <text
          x={pad + (a * scale) / 2}
          y={pad + b * scale + 14}
          textAnchor="middle"
          className={text}
        >
          {a} cm
        </text>
        <text x={pad - 6} y={pad + (b * scale) / 2} textAnchor="end" className={text}>
          {b} cm
        </text>
      </>
    );
  } else if (shape === "parallelogram") {
    label = `A parallelogram with base ${a} centimetres and perpendicular height ${b} centimetres.`;
    const shear = 2 * scale;
    body = (
      <>
        <polygon
          points={`${pad + shear},${pad} ${pad + shear + a * scale},${pad} ${pad + a * scale},${pad + b * scale} ${pad},${pad + b * scale}`}
          className={cls}
          strokeWidth="1.5"
        />
        <line
          x1={pad + shear}
          y1={pad}
          x2={pad + shear}
          y2={pad + b * scale}
          className="stroke-muted-foreground"
          strokeDasharray="4 3"
        />
        <text
          x={pad + (a * scale) / 2}
          y={pad + b * scale + 14}
          textAnchor="middle"
          className={text}
        >
          base {a} cm
        </text>
        <text x={pad + shear + 4} y={pad + (b * scale) / 2} className={text}>
          h = {b} cm
        </text>
      </>
    );
  } else if (shape === "trapezium") {
    label = `A trapezium with parallel sides ${a} and ${c} centimetres and height ${b} centimetres.`;
    const inset = Math.max(0, (a - c) / 2) * scale;
    body = (
      <>
        <polygon
          points={`${pad + inset},${pad} ${pad + inset + c * scale},${pad} ${pad + a * scale},${pad + b * scale} ${pad},${pad + b * scale}`}
          className={cls}
          strokeWidth="1.5"
        />
        <text x={pad + inset + (c * scale) / 2} y={pad - 6} textAnchor="middle" className={text}>
          {c} cm
        </text>
        <text
          x={pad + (a * scale) / 2}
          y={pad + b * scale + 14}
          textAnchor="middle"
          className={text}
        >
          {a} cm
        </text>
      </>
    );
  } else {
    label = `A circle with radius ${a} centimetres.`;
    const r = a * scale * 0.5 + 20;
    const cx = w / 2;
    const cy = h / 2;
    body = (
      <>
        <circle cx={cx} cy={cy} r={r} className={cls} strokeWidth="1.5" />
        <line x1={cx} y1={cy} x2={cx + r} y2={cy} className="stroke-primary" strokeWidth="1.5" />
        <text x={cx + r / 2} y={cy - 6} textAnchor="middle" className={text}>
          r = {a} cm
        </text>
      </>
    );
  }

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="max-w-full shrink-0 rounded-lg border bg-muted/30"
      role="img"
      aria-label={label}
    >
      {body}
    </svg>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block text-sm">
      {label}: <strong>{value}</strong>
      <input
        className="mt-2 w-full"
        type="range"
        min={min}
        max={max}
        step={1}
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

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
