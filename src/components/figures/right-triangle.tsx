/**
 * A right-angled triangle with the right angle at the lower right and the angle
 * theta at the lower left. Sides are labelled Opposite, Adjacent and Hypotenuse
 * by default, or with any supplied text/values.
 */
export function RightTriangle({
  opposite = "Opposite",
  adjacent = "Adjacent",
  hypotenuse = "Hypotenuse",
  angle = "θ",
}: {
  opposite?: string;
  adjacent?: string;
  hypotenuse?: string;
  angle?: string;
}) {
  // Triangle vertices
  const A = { x: 40, y: 200 }; // angle theta (lower left)
  const B = { x: 300, y: 200 }; // right angle (lower right)
  const C = { x: 300, y: 40 }; // top

  return (
    <svg
      viewBox="0 0 360 240"
      role="img"
      aria-label="Right-angled triangle with opposite, adjacent and hypotenuse labelled"
      className="h-auto w-full max-w-md"
    >
      {/* triangle */}
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        className="fill-primary/5 stroke-foreground"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* right-angle marker at B */}
      <path
        d={`M ${B.x - 16},${B.y} L ${B.x - 16},${B.y - 16} L ${B.x},${B.y - 16}`}
        className="fill-none stroke-foreground"
        strokeWidth="2"
      />
      {/* angle arc at A */}
      <path
        d={`M ${A.x + 34},${A.y} A 34 34 0 0 0 ${A.x + 31},${A.y - 14}`}
        className="fill-none stroke-primary"
        strokeWidth="2"
      />
      <text x={A.x + 42} y={A.y - 16} fontSize="16" className="fill-primary" fontStyle="italic">
        {angle}
      </text>

      {/* side labels */}
      <text
        x={(A.x + B.x) / 2}
        y={B.y + 22}
        textAnchor="middle"
        fontSize="13"
        className="fill-muted-foreground"
      >
        {adjacent}
      </text>
      <text
        x={C.x + 10}
        y={(B.y + C.y) / 2}
        textAnchor="start"
        fontSize="13"
        className="fill-muted-foreground"
      >
        {opposite}
      </text>
      <text
        x={(A.x + C.x) / 2 - 6}
        y={(A.y + C.y) / 2 - 8}
        textAnchor="end"
        fontSize="13"
        className="fill-muted-foreground"
      >
        {hypotenuse}
      </text>
    </svg>
  );
}
