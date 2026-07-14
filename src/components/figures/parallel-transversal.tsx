type Rel = "corresponding" | "alternate" | "cointerior";

const HIGHLIGHT: Record<Rel, [number, number]> = {
  corresponding: [2, 6],
  alternate: [4, 5],
  cointerior: [4, 6],
};

// number -> position offset from its intersection
const CORNER: Record<number, [number, number]> = {
  1: [-16, -12],
  2: [16, -12],
  3: [-16, 16],
  4: [16, 16],
  5: [-16, -12],
  6: [16, -12],
  7: [-16, 16],
  8: [16, 16],
};

const I1 = { x: 150, y: 70 };
const I2 = { x: 250, y: 170 };

/** Two parallel lines cut by a transversal, highlighting an angle relationship. */
export function ParallelTransversal({ relationship }: { relationship: Rel }) {
  const [hA, hB] = HIGHLIGHT[relationship];

  const label = (n: number) => {
    const base = n <= 4 ? I1 : I2;
    const [dx, dy] = CORNER[n]!;
    const on = n === hA || n === hB;
    return (
      <text
        key={n}
        x={base.x + dx}
        y={base.y + dy}
        textAnchor="middle"
        fontSize="12"
        fontWeight={on ? "700" : "400"}
        className={on ? "fill-primary" : "fill-muted-foreground"}
      >
        {n}
      </text>
    );
  };

  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label={`Parallel lines and a transversal: ${relationship} angles`}
      className="h-auto w-full max-w-md"
    >
      {/* parallel lines */}
      <line x1="40" y1="70" x2="360" y2="70" className="stroke-foreground" strokeWidth="2" />
      <line x1="40" y1="170" x2="360" y2="170" className="stroke-foreground" strokeWidth="2" />
      {/* parallel tick marks */}
      <path d="M60 64 l6 6 l-6 6" className="fill-none stroke-muted-foreground" strokeWidth="1.5" />
      <path
        d="M60 164 l6 6 l-6 6"
        className="fill-none stroke-muted-foreground"
        strokeWidth="1.5"
      />
      {/* transversal */}
      <line x1="100" y1="20" x2="300" y2="220" className="stroke-primary" strokeWidth="2" />
      {/* intersection dots */}
      <circle cx={I1.x} cy={I1.y} r="3" className="fill-foreground" />
      <circle cx={I2.x} cy={I2.y} r="3" className="fill-foreground" />
      {[1, 2, 3, 4, 5, 6, 7, 8].map(label)}
    </svg>
  );
}
