type Spec = { name: string; deg: number };

const TYPES: Spec[] = [
  { name: "Acute", deg: 45 },
  { name: "Right", deg: 90 },
  { name: "Obtuse", deg: 130 },
  { name: "Straight", deg: 180 },
  { name: "Reflex", deg: 300 },
];

function Glyph({ spec, cx }: { spec: Spec; cx: number }) {
  const cy = 70;
  const r = 34;
  const rad = (spec.deg * Math.PI) / 180;
  const ex = cx + r * Math.cos(rad);
  const ey = cy - r * Math.sin(rad);
  // arc polyline
  const pts: string[] = [];
  const arcR = 16;
  for (let a = 0; a <= spec.deg; a += 6) {
    const ar = (a * Math.PI) / 180;
    pts.push(`${cx + arcR * Math.cos(ar)},${cy - arcR * Math.sin(ar)}`);
  }
  return (
    <g>
      <line x1={cx} y1={cy} x2={cx + r} y2={cy} className="stroke-foreground" strokeWidth="2" />
      <line x1={cx} y1={cy} x2={ex} y2={ey} className="stroke-foreground" strokeWidth="2" />
      {spec.deg === 90 ? (
        <path
          d={`M ${cx + 12},${cy} L ${cx + 12},${cy - 12} L ${cx},${cy - 12}`}
          className="fill-none stroke-primary"
          strokeWidth="1.5"
        />
      ) : (
        <polyline points={pts.join(" ")} className="fill-none stroke-primary" strokeWidth="2" />
      )}
      <text x={cx} y={cy + 34} textAnchor="middle" fontSize="12" className="fill-foreground">
        {spec.name}
      </text>
      <text x={cx} y={cy + 48} textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        {spec.deg === 90
          ? "= 90°"
          : spec.deg === 180
            ? "= 180°"
            : spec.name === "Reflex"
              ? "180–360°"
              : spec.name === "Acute"
                ? "< 90°"
                : "90–180°"}
      </text>
    </g>
  );
}

/** Small multiples of the five angle types. */
export function AngleTypes() {
  const cols = [55, 155, 255, 355, 455];
  return (
    <svg
      viewBox="0 0 510 130"
      role="img"
      aria-label="The five angle types"
      className="h-auto w-full max-w-2xl"
    >
      {TYPES.map((t, i) => (
        <Glyph key={t.name} spec={t} cx={cols[i] as number} />
      ))}
    </svg>
  );
}
