"use client";

import { useState } from "react";

function classify(deg: number): { name: string; color: string } {
  if (deg === 90) return { name: "Right angle", color: "text-primary" };
  if (deg === 180) return { name: "Straight angle", color: "text-primary" };
  if (deg < 90) return { name: "Acute angle", color: "text-emerald-500" };
  if (deg < 180) return { name: "Obtuse angle", color: "text-amber-500" };
  return { name: "Reflex angle", color: "text-sky-500" };
}

export function AngleExplorer() {
  const [deg, setDeg] = useState(40);
  const cx = 140;
  const cy = 130;
  const r = 90;
  const rad = (deg * Math.PI) / 180;
  const ex = cx + r * Math.cos(rad);
  const ey = cy - r * Math.sin(rad);

  const arc: string[] = [`${cx},${cy}`];
  for (let a = 0; a <= deg; a += 3) {
    const ar = (a * Math.PI) / 180;
    arc.push(`${cx + 26 * Math.cos(ar)},${cy - 26 * Math.sin(ar)}`);
  }
  const info = classify(deg);

  return (
    <div className="w-full max-w-md">
      <svg viewBox="0 0 280 200" className="h-auto w-full">
        <polygon points={arc.join(" ")} className="fill-primary/10" />
        <line
          x1={cx}
          y1={cy}
          x2={cx + r}
          y2={cy}
          className="stroke-muted-foreground"
          strokeWidth="2"
        />
        <line x1={cx} y1={cy} x2={ex} y2={ey} className="stroke-primary" strokeWidth="2.5" />
        <circle cx={cx} cy={cy} r="4" className="fill-foreground" />
        <text x={cx + 40} y={cy - 8} fontSize="16" fontWeight="700" className="fill-foreground">
          {deg}°
        </text>
      </svg>
      <input
        type="range"
        min={0}
        max={360}
        value={deg}
        onChange={(e) => setDeg(Number(e.target.value))}
        aria-label="Angle in degrees"
        className="mt-2 w-full accent-primary"
      />
      <p className="mt-2 text-center text-sm">
        <span className={`font-semibold ${info.color}`}>{info.name}</span>
        <span className="text-muted-foreground"> — drag to change the angle</span>
      </p>
    </div>
  );
}
