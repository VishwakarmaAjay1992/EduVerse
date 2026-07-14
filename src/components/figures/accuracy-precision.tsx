type Target = { label: string; dots: [number, number][] };

const R = 46;
function TargetSvg({ label, dots, cx }: Target & { cx: number }) {
  const cy = 60;
  return (
    <g>
      <circle cx={cx} cy={cy} r={R} className="fill-none stroke-border" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={R * 0.62} className="fill-none stroke-border" strokeWidth="1.5" />
      <circle
        cx={cx}
        cy={cy}
        r={R * 0.24}
        className="fill-primary/20 stroke-primary"
        strokeWidth="1.5"
      />
      {dots.map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={cy + dy} r={3.5} className="fill-primary" />
      ))}
      <text
        x={cx}
        y={cy + R + 18}
        textAnchor="middle"
        fontSize="10.5"
        className="fill-muted-foreground"
      >
        {label}
      </text>
    </g>
  );
}

/** Four dartboard targets contrasting accuracy and precision. */
export function AccuracyPrecision() {
  const targets: Target[] = [
    {
      label: "Accurate + precise",
      dots: [
        [2, -3],
        [-3, 2],
        [1, 4],
        [-1, -1],
      ],
    },
    {
      label: "Precise, not accurate",
      dots: [
        [24, -18],
        [27, -14],
        [22, -12],
        [26, -20],
      ],
    },
    {
      label: "Accurate, not precise",
      dots: [
        [-30, 6],
        [28, -8],
        [4, 30],
        [-6, -28],
      ],
    },
    {
      label: "Neither",
      dots: [
        [30, 20],
        [34, 24],
        [26, 28],
        [38, 18],
      ],
    },
  ];
  const cols = [70, 210, 350, 490];
  return (
    <svg
      viewBox="0 0 560 150"
      role="img"
      aria-label="Four targets showing accuracy versus precision"
      className="h-auto w-full max-w-2xl"
    >
      {targets.map((t, i) => (
        <TargetSvg key={i} {...t} cx={cols[i] as number} />
      ))}
    </svg>
  );
}
