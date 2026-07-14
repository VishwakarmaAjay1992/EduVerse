"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const STANDARD = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];

function quadrant(d: number): string {
  const n = ((d % 360) + 360) % 360;
  if (n === 0 || n === 90 || n === 180 || n === 270 || n === 360) return "Axis";
  if (n < 90) return "I";
  if (n < 180) return "II";
  if (n < 270) return "III";
  return "IV";
}

export function UnitCircleExplorer() {
  const [deg, setDeg] = useState(45);
  const S = 300;
  const c = S / 2;
  const R = 120;
  const rad = (deg * Math.PI) / 180;
  const px = c + R * Math.cos(rad);
  const py = c - R * Math.sin(rad);
  const cosV = Math.cos(rad);
  const sinV = Math.sin(rad);
  const tanDef = Math.abs(cosV) > 0.0001;
  const tanV = tanDef ? sinV / cosV : undefined;
  const refAngle = (() => {
    const n = ((deg % 360) + 360) % 360;
    if (n <= 90) return n;
    if (n <= 180) return 180 - n;
    if (n <= 270) return n - 180;
    return 360 - n;
  })();

  return (
    <div className="w-full max-w-lg">
      <svg
        viewBox={`0 0 ${S} ${S}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Unit circle at ${deg} degrees`}
      >
        <line x1={10} y1={c} x2={S - 10} y2={c} className="stroke-border" strokeWidth="1" />
        <line x1={c} y1={10} x2={c} y2={S - 10} className="stroke-border" strokeWidth="1" />
        <circle
          cx={c}
          cy={c}
          r={R}
          className="fill-none stroke-muted-foreground"
          strokeWidth="1.5"
        />
        {STANDARD.filter((a) => a < 360).map((a) => {
          const ar = (a * Math.PI) / 180;
          return (
            <circle
              key={a}
              cx={c + R * Math.cos(ar)}
              cy={c - R * Math.sin(ar)}
              r="2.5"
              className="fill-muted-foreground/40"
            />
          );
        })}
        <line
          x1={px}
          y1={py}
          x2={px}
          y2={c}
          className="stroke-primary/40"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <line
          x1={c}
          y1={c}
          x2={px}
          y2={c}
          className="stroke-primary/40"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <line x1={c} y1={c} x2={px} y2={py} className="stroke-primary" strokeWidth="2" />
        <circle cx={px} cy={py} r="5" className="fill-primary" />
        {(() => {
          const pts: string[] = [];
          const arcR = 24;
          const steps = Math.max(2, Math.abs(deg) / 3);
          for (let i = 0; i <= steps; i++) {
            const a = (deg * i * Math.PI) / (180 * steps);
            pts.push(`${c + arcR * Math.cos(a)},${c - arcR * Math.sin(a)}`);
          }
          return (
            <polyline
              points={pts.join(" ")}
              className="fill-none stroke-primary"
              strokeWidth="1.5"
            />
          );
        })()}
        <text x={c + 34} y={c - 10} fontSize="12" className="fill-primary">
          {deg}°
        </text>
        <text x={S - 14} y={c - 4} fontSize="10" className="fill-muted-foreground">
          0°
        </text>
        <text x={c + 4} y={18} fontSize="10" className="fill-muted-foreground">
          90°
        </text>
        <text x={8} y={c - 4} fontSize="10" className="fill-muted-foreground">
          180°
        </text>
        <text x={c + 4} y={S - 8} fontSize="10" className="fill-muted-foreground">
          270°
        </text>
        <text x={c + 50} y={c - 50} fontSize="10" className="fill-muted-foreground/50">
          I
        </text>
        <text x={c - 60} y={c - 50} fontSize="10" className="fill-muted-foreground/50">
          II
        </text>
        <text x={c - 60} y={c + 58} fontSize="10" className="fill-muted-foreground/50">
          III
        </text>
        <text x={c + 50} y={c + 58} fontSize="10" className="fill-muted-foreground/50">
          IV
        </text>
      </svg>
      <input
        type="range"
        min={0}
        max={360}
        value={deg}
        onChange={(e) => setDeg(Number(e.target.value))}
        className="mt-2 w-full accent-primary"
        aria-label="Angle in degrees"
      />
      <div className="mt-2 flex flex-wrap gap-1">
        {STANDARD.filter((a) => a <= 360).map((a) => (
          <button
            key={a}
            onClick={() => setDeg(a)}
            className={cn(
              "rounded border px-1.5 py-0.5 text-xs",
              a === deg ? "border-primary bg-primary/10" : "hover:border-primary/40"
            )}
          >
            {a}°
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg border p-3">
          <p className="text-xs text-muted-foreground">Values</p>
          <p>
            cos θ = <strong>{cosV.toFixed(4)}</strong>
          </p>
          <p>
            sin θ = <strong>{sinV.toFixed(4)}</strong>
          </p>
          {tanDef ? (
            <p>
              tan θ = <strong>{tanV!.toFixed(4)}</strong>
            </p>
          ) : (
            <p>
              tan θ = <strong>undefined</strong>
            </p>
          )}
        </div>
        <div className="rounded-lg border p-3">
          <p className="text-xs text-muted-foreground">Properties</p>
          <p>
            Quadrant: <strong>{quadrant(deg)}</strong>
          </p>
          <p>
            Reference: <strong>{refAngle}°</strong>
          </p>
          <p>
            Radians: <strong>{rad.toFixed(3)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
