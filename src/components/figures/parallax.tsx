/** Correct (eye level) versus incorrect (angled) reading of a scale. */
export function Parallax() {
  return (
    <svg
      viewBox="0 0 400 170"
      role="img"
      aria-label="Correct eye position is level with the scale; an angled view causes parallax error"
      className="h-auto w-full max-w-md"
    >
      {/* scale */}
      <rect
        x="170"
        y="30"
        width="60"
        height="110"
        rx="4"
        className="fill-muted stroke-border"
        strokeWidth="1.5"
      />
      {[50, 70, 90, 110].map((y) => (
        <line key={y} x1="170" y1={y} x2="200" y2={y} className="stroke-border" strokeWidth="1.5" />
      ))}
      <line x1="170" y1="85" x2="230" y2="85" className="stroke-primary" strokeWidth="2" />

      {/* correct eye */}
      <circle
        cx="330"
        cy="85"
        r="10"
        className="fill-emerald-500/20 stroke-emerald-500"
        strokeWidth="1.5"
      />
      <line
        x1="230"
        y1="85"
        x2="320"
        y2="85"
        className="stroke-emerald-500"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x="330" y="110" textAnchor="middle" fontSize="10" className="fill-emerald-500">
        correct
      </text>

      {/* wrong eye */}
      <circle
        cx="330"
        cy="30"
        r="10"
        className="fill-destructive/20 stroke-destructive"
        strokeWidth="1.5"
      />
      <line
        x1="230"
        y1="85"
        x2="320"
        y2="33"
        className="stroke-destructive"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x="330" y="20" textAnchor="middle" fontSize="10" className="fill-destructive">
        angled = error
      </text>
    </svg>
  );
}
