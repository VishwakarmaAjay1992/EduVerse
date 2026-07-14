/** Scalar (magnitude only) versus vector (magnitude and direction). */
export function ScalarVector() {
  return (
    <svg
      viewBox="0 0 440 150"
      role="img"
      aria-label="A scalar has size only; a vector has size and direction"
      className="h-auto w-full max-w-lg"
    >
      <text
        x="110"
        y="24"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        className="fill-foreground"
      >
        Scalar
      </text>
      <text
        x="110"
        y="70"
        textAnchor="middle"
        fontSize="20"
        className="fill-primary"
        fontWeight="700"
      >
        20 m/s
      </text>
      <text x="110" y="96" textAnchor="middle" fontSize="11" className="fill-muted-foreground">
        magnitude only
      </text>

      <line x1="220" y1="20" x2="220" y2="130" className="stroke-border" strokeWidth="1" />

      <text
        x="330"
        y="24"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        className="fill-foreground"
      >
        Vector
      </text>
      <text
        x="330"
        y="66"
        textAnchor="middle"
        fontSize="20"
        className="fill-primary"
        fontWeight="700"
      >
        20 m/s east
      </text>
      <line
        x1="270"
        y1="90"
        x2="390"
        y2="90"
        className="stroke-primary"
        strokeWidth="2.5"
        markerEnd="url(#sv-a)"
      />
      <text x="330" y="112" textAnchor="middle" fontSize="11" className="fill-muted-foreground">
        magnitude + direction
      </text>
      <defs>
        <marker
          id="sv-a"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path
            d="M1 1L9 5L1 9"
            className="fill-none stroke-primary"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </marker>
      </defs>
    </svg>
  );
}
