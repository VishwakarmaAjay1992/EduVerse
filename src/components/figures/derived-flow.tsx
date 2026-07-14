/** Fundamental quantities combine mathematically to form derived quantities. */
export function DerivedFlow() {
  return (
    <svg
      viewBox="0 0 460 130"
      role="img"
      aria-label="Fundamental quantities combine to form derived quantities"
      className="h-auto w-full max-w-lg"
    >
      <rect
        x="10"
        y="40"
        width="130"
        height="50"
        rx="8"
        className="fill-primary/10 stroke-primary"
        strokeWidth="1.5"
      />
      <text
        x="75"
        y="62"
        textAnchor="middle"
        fontSize="12"
        className="fill-foreground"
        fontWeight="600"
      >
        Fundamental
      </text>
      <text x="75" y="78" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        length, mass, time…
      </text>

      <rect
        x="170"
        y="45"
        width="110"
        height="40"
        rx="8"
        className="fill-muted stroke-border"
        strokeWidth="1.5"
      />
      <text x="225" y="63" textAnchor="middle" fontSize="11" className="fill-foreground">
        combine with
      </text>
      <text x="225" y="77" textAnchor="middle" fontSize="11" className="fill-foreground">
        × ÷
      </text>

      <rect
        x="310"
        y="40"
        width="140"
        height="50"
        rx="8"
        className="fill-primary/10 stroke-primary"
        strokeWidth="1.5"
      />
      <text
        x="380"
        y="62"
        textAnchor="middle"
        fontSize="12"
        className="fill-foreground"
        fontWeight="600"
      >
        Derived
      </text>
      <text x="380" y="78" textAnchor="middle" fontSize="10" className="fill-muted-foreground">
        area, speed, density…
      </text>

      <path
        d="M140 65 L170 65"
        className="stroke-foreground"
        strokeWidth="1.5"
        markerEnd="url(#df-a)"
      />
      <path
        d="M280 65 L310 65"
        className="stroke-foreground"
        strokeWidth="1.5"
        markerEnd="url(#df-a)"
      />
      <defs>
        <marker
          id="df-a"
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
          />
        </marker>
      </defs>
    </svg>
  );
}
