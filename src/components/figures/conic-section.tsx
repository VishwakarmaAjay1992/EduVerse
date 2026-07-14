/** Coordinate-plane illustrations of the four conic sections. */
export function ConicSection({ kind }: { kind: "circle" | "parabola" | "ellipse" | "hyperbola" }) {
  const S = 300;
  const c = S / 2; // centre

  const axes = (
    <>
      <line x1={10} y1={c} x2={S - 10} y2={c} className="stroke-border" strokeWidth="1" />
      <line x1={c} y1={10} x2={c} y2={S - 10} className="stroke-border" strokeWidth="1" />
    </>
  );

  let shape: React.ReactNode = null;

  if (kind === "circle") {
    const r = 90;
    shape = (
      <>
        <circle cx={c} cy={c} r={r} className="fill-primary/5 stroke-primary" strokeWidth="2" />
        <line x1={c} y1={c} x2={c + r} y2={c} className="stroke-foreground" strokeWidth="1.5" />
        <circle cx={c} cy={c} r={3} className="fill-foreground" />
        <text
          x={c + r / 2}
          y={c - 6}
          textAnchor="middle"
          fontSize="13"
          fontStyle="italic"
          className="fill-foreground"
        >
          r
        </text>
      </>
    );
  } else if (kind === "parabola") {
    const k = 0.02;
    const vy = c + 60;
    const pts: string[] = [];
    for (let t = -95; t <= 95; t += 5) pts.push(`${c + t},${vy - k * t * t}`);
    const f = 40;
    shape = (
      <>
        <polyline points={pts.join(" ")} className="fill-none stroke-primary" strokeWidth="2" />
        <line
          x1={c - 90}
          y1={vy + f}
          x2={c + 90}
          y2={vy + f}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <circle cx={c} cy={vy - f} r={4} className="fill-primary" />
        <text x={c + 8} y={vy - f + 4} fontSize="13" className="fill-foreground">
          F
        </text>
        <text
          x={c + 92}
          y={vy + f + 14}
          textAnchor="end"
          fontSize="12"
          className="fill-muted-foreground"
        >
          directrix
        </text>
      </>
    );
  } else if (kind === "ellipse") {
    const rx = 110;
    const ry = 66;
    const cf = Math.round(Math.sqrt(rx * rx - ry * ry));
    shape = (
      <>
        <ellipse
          cx={c}
          cy={c}
          rx={rx}
          ry={ry}
          className="fill-primary/5 stroke-primary"
          strokeWidth="2"
        />
        <circle cx={c - cf} cy={c} r={4} className="fill-primary" />
        <circle cx={c + cf} cy={c} r={4} className="fill-primary" />
        <text x={c - cf} y={c - 8} textAnchor="middle" fontSize="12" className="fill-foreground">
          F₁
        </text>
        <text x={c + cf} y={c - 8} textAnchor="middle" fontSize="12" className="fill-foreground">
          F₂
        </text>
      </>
    );
  } else {
    // hyperbola
    const a = 45;
    const b = 55;
    const right: string[] = [];
    const left: string[] = [];
    for (let y = -95; y <= 95; y += 5) {
      const x = a * Math.sqrt(1 + (y * y) / (b * b));
      right.push(`${c + x},${c - y}`);
      left.push(`${c - x},${c - y}`);
    }
    const slope = b / a;
    const dx = 100;
    shape = (
      <>
        <line
          x1={c - dx}
          y1={c + slope * dx}
          x2={c + dx}
          y2={c - slope * dx}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <line
          x1={c - dx}
          y1={c - slope * dx}
          x2={c + dx}
          y2={c + slope * dx}
          className="stroke-muted-foreground"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <polyline points={right.join(" ")} className="fill-none stroke-primary" strokeWidth="2" />
        <polyline points={left.join(" ")} className="fill-none stroke-primary" strokeWidth="2" />
      </>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${S} ${S}`}
      role="img"
      aria-label={`Diagram of a ${kind}`}
      className="h-auto w-full max-w-sm"
    >
      {axes}
      {shape}
    </svg>
  );
}
