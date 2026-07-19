"use client";

import { useState } from "react";
import { markStep } from "@/lib/progress-store";

type Solid = "cuboid" | "cylinder" | "prism";

const SOLIDS: Record<Solid, string> = {
  cuboid: "Cuboid",
  cylinder: "Cylinder",
  prism: "Triangular prism",
};

/**
 * Interactive 3-D solids laboratory: cuboid, cylinder and triangular prism
 * with dimension sliders, live volume and surface-area calculations, and a
 * solid/net view toggle for the cuboid.
 */
export function VolumeSurfaceExplorer({ lessonId }: { lessonId: string }) {
  const [solid, setSolid] = useState<Solid>("cuboid");
  const [l, setL] = useState(6); // length / radius / base
  const [w, setW] = useState(4); // width / triangle height
  const [h, setH] = useState(3); // height / prism length
  const [showNet, setShowNet] = useState(false);

  function touched() {
    markStep(lessonId, "volumeSurfaceExplorer");
  }

  const model = computeSolid(solid, l, w, h);

  return (
    <div className="space-y-6 rounded-xl border p-5">
      <section className="space-y-3">
        <div>
          <h4 className="font-semibold">Volume and surface-area laboratory</h4>
          <p className="text-sm text-muted-foreground">
            Choose a solid and adjust its dimensions. Volume fills the inside (cm³); surface area
            covers the outside (cm²).
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(SOLIDS) as Solid[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setSolid(key);
                setShowNet(false);
                touched();
              }}
              className={`rounded-md border px-3 py-2 text-sm ${
                solid === key ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
            >
              {SOLIDS[key]}
            </button>
          ))}
          {solid === "cuboid" && (
            <button
              type="button"
              onClick={() => {
                setShowNet((s) => !s);
                touched();
              }}
              className="ml-auto rounded-md border px-3 py-2 text-sm"
              aria-pressed={showNet}
            >
              {showNet ? "Show solid" : "Open the net"}
            </button>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Slider
            label={model.lLabel}
            value={l}
            onChange={(v) => {
              setL(v);
              touched();
            }}
          />
          <Slider
            label={model.wLabel}
            value={w}
            onChange={(v) => {
              setW(v);
              touched();
            }}
          />
          <Slider
            label={model.hLabel}
            value={h}
            onChange={(v) => {
              setH(v);
              touched();
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-8">
          {solid === "cuboid" && showNet ? (
            <CuboidNet l={l} w={w} h={h} />
          ) : (
            <SolidSketch solid={solid} l={l} w={w} h={h} />
          )}
          <div className="grid w-full gap-3">
            <Result label="Volume formula" value={model.volumeFormula} />
            <Result label="Volume" value={`${round2(model.volume)} cm³`} />
            <Result label="Surface area" value={`${round2(model.surface)} cm²`} />
            <Result label="Capacity" value={`${round2(model.volume)} ml (1 cm³ = 1 ml)`} />
          </div>
        </div>
        <p className="rounded-md bg-muted/40 p-3 text-sm text-muted-foreground">
          <strong className="text-foreground">Volume vs surface area:</strong> volume counts the
          1&nbsp;cm cubes that fill the solid, while surface area counts the 1&nbsp;cm squares of
          wrapping needed to cover every face.
        </p>
      </section>
    </div>
  );
}

function computeSolid(solid: Solid, l: number, w: number, h: number) {
  switch (solid) {
    case "cuboid":
      return {
        lLabel: "Length (cm)",
        wLabel: "Width (cm)",
        hLabel: "Height (cm)",
        volume: l * w * h,
        volumeFormula: `V = l × w × h = ${l} × ${w} × ${h}`,
        surface: 2 * (l * w + l * h + w * h),
      };
    case "cylinder":
      return {
        lLabel: "Radius (cm)",
        wLabel: "— (unused)",
        hLabel: "Height (cm)",
        volume: Math.PI * l * l * h,
        volumeFormula: `V = πr²h = π × ${l}² × ${h}`,
        surface: 2 * Math.PI * l * l + 2 * Math.PI * l * h,
      };
    case "prism": {
      // Right triangular cross-section with legs l (base) and w (height).
      const hyp = Math.sqrt(l * l + w * w);
      const crossArea = (l * w) / 2;
      return {
        lLabel: "Triangle base (cm)",
        wLabel: "Triangle height (cm)",
        hLabel: "Prism length (cm)",
        volume: crossArea * h,
        volumeFormula: `V = area of cross-section × length = ½ × ${l} × ${w} × ${h}`,
        surface: 2 * crossArea + (l + w + hyp) * h,
      };
    }
  }
}

function SolidSketch({ solid, l, w, h }: { solid: Solid; l: number; w: number; h: number }) {
  const s = 13;
  const cls = "fill-primary/20 stroke-primary";
  const clsTop = "fill-primary/35 stroke-primary";
  const clsSide = "fill-primary/10 stroke-primary";
  const text = "fill-muted-foreground text-[11px]";

  if (solid === "cuboid") {
    const off = Math.round(w * s * 0.55);
    const x = 14;
    const y = 20 + off;
    const W = x + l * s + off + 60;
    const H = y + h * s + 26;
    return (
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="max-w-full shrink-0 rounded-lg border bg-muted/30"
        role="img"
        aria-label={`A cuboid ${l} by ${w} by ${h} centimetres.`}
      >
        <rect x={x} y={y} width={l * s} height={h * s} className={cls} strokeWidth="1.5" />
        <polygon
          points={`${x},${y} ${x + off},${y - off} ${x + off + l * s},${y - off} ${x + l * s},${y}`}
          className={clsTop}
          strokeWidth="1.5"
        />
        <polygon
          points={`${x + l * s},${y} ${x + off + l * s},${y - off} ${x + off + l * s},${y - off + h * s} ${x + l * s},${y + h * s}`}
          className={clsSide}
          strokeWidth="1.5"
        />
        <text x={x + (l * s) / 2} y={y + h * s + 14} textAnchor="middle" className={text}>
          {l} cm
        </text>
        <text x={x + l * s + off + 6} y={y + (h * s) / 2} className={text}>
          {h} cm
        </text>
        <text x={x + l * s + off / 2 + 8} y={y - off / 2 - 4} className={text}>
          {w} cm
        </text>
      </svg>
    );
  }

  if (solid === "cylinder") {
    const r = l * s * 0.6 + 10;
    const ry = Math.max(8, r * 0.3);
    const x = 20 + r;
    const y = 16 + ry;
    const W = x + r + 60;
    const H = y + h * s + ry + 24;
    return (
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="max-w-full shrink-0 rounded-lg border bg-muted/30"
        role="img"
        aria-label={`A cylinder with radius ${l} centimetres and height ${h} centimetres.`}
      >
        <path
          d={`M ${x - r} ${y} v ${h * s} a ${r} ${ry} 0 0 0 ${2 * r} 0 v ${-h * s}`}
          className={cls}
          strokeWidth="1.5"
        />
        <ellipse cx={x} cy={y} rx={r} ry={ry} className={clsTop} strokeWidth="1.5" />
        <line x1={x} y1={y} x2={x + r} y2={y} className="stroke-primary" strokeWidth="1.5" />
        <text x={x + r / 2} y={y - 6} textAnchor="middle" className={text}>
          r = {l} cm
        </text>
        <text x={x + r + 8} y={y + (h * s) / 2} className={text}>
          {h} cm
        </text>
      </svg>
    );
  }

  const off = Math.round(h * s * 0.5);
  const x = 16;
  const y = 20 + off;
  const W = x + l * s + off + 60;
  const H = y + w * s + 26;
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className="max-w-full shrink-0 rounded-lg border bg-muted/30"
      role="img"
      aria-label={`A triangular prism: cross-section base ${l} centimetres, height ${w} centimetres, length ${h} centimetres.`}
    >
      <polygon
        points={`${x},${y + w * s} ${x + l * s},${y + w * s} ${x},${y}`}
        className={cls}
        strokeWidth="1.5"
      />
      <polygon
        points={`${x},${y} ${x + off},${y - off} ${x + off + l * s},${y - off + w * s} ${x + l * s},${y + w * s}`}
        className={clsSide}
        strokeWidth="1.5"
      />
      <line
        x1={x}
        y1={y + w * s}
        x2={x + off}
        y2={y + w * s - off}
        className="stroke-primary"
        strokeWidth="1.5"
      />
      <line
        x1={x + off}
        y1={y - off}
        x2={x + off}
        y2={y + w * s - off}
        className="stroke-primary"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text x={x + (l * s) / 2} y={y + w * s + 14} textAnchor="middle" className={text}>
        {l} cm
      </text>
      <text x={x - 4} y={y + (w * s) / 2} textAnchor="end" className={text}>
        {w} cm
      </text>
      <text x={x + l * s + off / 2} y={y + w * s - off / 2 + 16} className={text}>
        {h} cm
      </text>
    </svg>
  );
}

/** Flat net of a cuboid: cross layout of the six faces. */
function CuboidNet({ l, w, h }: { l: number; w: number; h: number }) {
  const s = 9;
  const x0 = 10 + w * s;
  const y0 = 10 + w * s;
  const W = x0 + l * s + w * s + l * s + 12;
  const H = y0 + h * s + w * s + 22;
  const face = "fill-primary/20 stroke-primary";
  const cap = "fill-primary/35 stroke-primary";
  const text = "fill-muted-foreground text-[10px]";
  return (
    <svg
      width={W}
      height={H}
      viewBox={`0 0 ${W} ${H}`}
      className="max-w-full shrink-0 rounded-lg border bg-muted/30"
      role="img"
      aria-label={`The net of a cuboid ${l} by ${w} by ${h} centimetres: six rectangular faces unfolded flat.`}
    >
      {/* middle band: side, front, side, back */}
      <rect x={x0 - w * s} y={y0} width={w * s} height={h * s} className={face} strokeWidth="1.2" />
      <rect x={x0} y={y0} width={l * s} height={h * s} className={face} strokeWidth="1.2" />
      <rect x={x0 + l * s} y={y0} width={w * s} height={h * s} className={face} strokeWidth="1.2" />
      <rect
        x={x0 + l * s + w * s}
        y={y0}
        width={l * s}
        height={h * s}
        className={face}
        strokeWidth="1.2"
      />
      {/* top and bottom caps */}
      <rect x={x0} y={y0 - w * s} width={l * s} height={w * s} className={cap} strokeWidth="1.2" />
      <rect x={x0} y={y0 + h * s} width={l * s} height={w * s} className={cap} strokeWidth="1.2" />
      <text x={x0 + (l * s) / 2} y={y0 + h * s + w * s + 12} textAnchor="middle" className={text}>
        Net: 2 faces {l}×{w}, 2 faces {l}×{h}, 2 faces {w}×{h}
      </text>
    </svg>
  );
}

function Slider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const unused = label.startsWith("—");
  return (
    <label className={`block text-sm ${unused ? "opacity-40" : ""}`}>
      {label}: <strong>{value}</strong>
      <input
        className="mt-2 w-full"
        type="range"
        min={1}
        max={10}
        step={1}
        value={value}
        disabled={unused}
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
