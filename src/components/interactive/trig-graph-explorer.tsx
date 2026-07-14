"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Fn = "sin" | "cos" | "tan";

export function TrigGraphExplorer() {
  const [fn, setFn] = useState<Fn>("sin");
  const [amp, setAmp] = useState(1);
  const W = 480;
  const H = 240;
  const padX = 40;
  const padY = 20;
  const plotW = W - 2 * padX;
  const plotH = H - 2 * padY;
  const cy = padY + plotH / 2;
  const xScale = plotW / 360;

  const segments: string[][] = [[]];
  for (let deg = 0; deg <= 360; deg += 2) {
    const rad = (deg * Math.PI) / 180;
    let v: number;
    if (fn === "sin") v = amp * Math.sin(rad);
    else if (fn === "cos") v = amp * Math.cos(rad);
    else v = Math.tan(rad);
    if (fn === "tan" && Math.abs(v) > 4) {
      segments.push([]);
      continue;
    }
    const maxV = fn === "tan" ? 4 : Math.max(amp, 1);
    const x = padX + deg * xScale;
    const y2 = cy - (v / maxV) * (plotH / 2);
    segments[segments.length - 1]!.push(`${x},${y2}`);
  }

  const maxV = fn === "tan" ? 4 : Math.max(amp, 1);
  const eq = fn === "tan" ? "y = tan x" : amp === 1 ? `y = ${fn} x` : `y = ${amp} ${fn} x`;

  return (
    <div className="w-full max-w-lg">
      <div className="mb-3 flex items-center gap-2">
        {(["sin", "cos", "tan"] as Fn[]).map((f) => (
          <button
            key={f}
            onClick={() => setFn(f)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-sm",
              f === fn ? "border-primary bg-primary/10 font-medium" : "hover:border-primary/40"
            )}
          >
            {f}
          </button>
        ))}
        {fn !== "tan" && (
          <label className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
            Amp
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.5}
              value={amp}
              onChange={(e) => setAmp(Number(e.target.value))}
              className="w-20 accent-primary"
            />
            <span className="w-6 text-foreground">{amp}</span>
          </label>
        )}
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full rounded-lg border"
        role="img"
        aria-label={`Graph of ${eq}`}
      >
        <line x1={padX} y1={cy} x2={W - padX} y2={cy} className="stroke-border" strokeWidth="1" />
        <line
          x1={padX}
          y1={padY}
          x2={padX}
          y2={H - padY}
          className="stroke-border"
          strokeWidth="1"
        />
        {[0, 90, 180, 270, 360].map((d) => (
          <g key={d}>
            <line
              x1={padX + d * xScale}
              y1={cy - 3}
              x2={padX + d * xScale}
              y2={cy + 3}
              className="stroke-border"
              strokeWidth="1"
            />
            <text
              x={padX + d * xScale}
              y={cy + 16}
              textAnchor="middle"
              fontSize="10"
              className="fill-muted-foreground"
            >
              {d}°
            </text>
          </g>
        ))}
        {[-maxV, 0, maxV].map((v) => (
          <text
            key={v}
            x={padX - 6}
            y={cy - (v / maxV) * (plotH / 2) + 3}
            textAnchor="end"
            fontSize="10"
            className="fill-muted-foreground"
          >
            {v}
          </text>
        ))}
        {fn === "tan" &&
          [90, 270].map((d) => (
            <line
              key={d}
              x1={padX + d * xScale}
              y1={padY}
              x2={padX + d * xScale}
              y2={H - padY}
              className="stroke-destructive/40"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
          ))}
        {segments
          .filter((s) => s.length > 1)
          .map((s, i) => (
            <polyline
              key={i}
              points={s.join(" ")}
              className="fill-none stroke-primary"
              strokeWidth="2"
            />
          ))}
      </svg>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="font-medium">{eq}</span>
        <span className="text-muted-foreground">
          {fn !== "tan"
            ? `Amplitude ${amp} · Period 360°`
            : "Period 180° · Asymptotes at 90°, 270°"}
        </span>
      </div>
    </div>
  );
}
