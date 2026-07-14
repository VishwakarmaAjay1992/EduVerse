/** Point, line, ray and segment shown together with notation. */
export function GeoPrimitives() {
  return (
    <svg
      viewBox="0 0 360 220"
      role="img"
      aria-label="A point, line, ray and segment"
      className="h-auto w-full max-w-md"
    >
      <defs>
        <marker
          id="gp-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1L9 5L1 9"
            className="fill-none stroke-foreground"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* Point */}
      <text x="10" y="34" fontSize="12" className="fill-muted-foreground">
        Point
      </text>
      <circle cx="150" cy="30" r="4" className="fill-primary" />
      <text x="160" y="26" fontSize="13" className="fill-foreground" fontStyle="italic">
        A
      </text>

      {/* Line */}
      <text x="10" y="94" fontSize="12" className="fill-muted-foreground">
        Line
      </text>
      <line
        x1="120"
        y1="90"
        x2="330"
        y2="90"
        className="stroke-foreground"
        strokeWidth="2"
        markerStart="url(#gp-arrow)"
        markerEnd="url(#gp-arrow)"
      />
      <circle cx="170" cy="90" r="3" className="fill-primary" />
      <text x="166" y="80" fontSize="12" className="fill-foreground" fontStyle="italic">
        A
      </text>
      <circle cx="280" cy="90" r="3" className="fill-primary" />
      <text x="276" y="80" fontSize="12" className="fill-foreground" fontStyle="italic">
        B
      </text>

      {/* Ray */}
      <text x="10" y="144" fontSize="12" className="fill-muted-foreground">
        Ray
      </text>
      <line
        x1="120"
        y1="140"
        x2="330"
        y2="140"
        className="stroke-foreground"
        strokeWidth="2"
        markerEnd="url(#gp-arrow)"
      />
      <circle cx="120" cy="140" r="4" className="fill-primary" />
      <text x="112" y="130" fontSize="12" className="fill-foreground" fontStyle="italic">
        A
      </text>

      {/* Segment */}
      <text x="10" y="194" fontSize="12" className="fill-muted-foreground">
        Segment
      </text>
      <line x1="150" y1="190" x2="300" y2="190" className="stroke-foreground" strokeWidth="2" />
      <circle cx="150" cy="190" r="4" className="fill-primary" />
      <text x="142" y="180" fontSize="12" className="fill-foreground" fontStyle="italic">
        A
      </text>
      <circle cx="300" cy="190" r="4" className="fill-primary" />
      <text x="296" y="180" fontSize="12" className="fill-foreground" fontStyle="italic">
        B
      </text>
    </svg>
  );
}
