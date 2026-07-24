export type CalculusDiagramKind =
  | "function"
  | "limit"
  | "derivative"
  | "mean-value"
  | "riemann-sum"
  | "volume"
  | "exponential"
  | "integral"
  | "slope-field"
  | "series"
  | "polar"
  | "vector-space"
  | "space-curve"
  | "surface"
  | "double-integral"
  | "vector-field";

const axis = "stroke-muted-foreground/60";
const curve = "stroke-primary";
const accent = "stroke-emerald-500";
const fill = "fill-primary/15";

function Axes({ threeD = false }: { threeD?: boolean }) {
  return (
    <>
      <line x1="28" y1="150" x2="292" y2="150" className={axis} strokeWidth="1.5" />
      <line x1="160" y1="18" x2="160" y2="282" className={axis} strokeWidth="1.5" />
      {threeD && (
        <line x1="160" y1="150" x2="55" y2="245" className={axis} strokeWidth="1.5" />
      )}
    </>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const size = 8;
  const p1 = `${x2 - size * Math.cos(angle - Math.PI / 6)},${y2 - size * Math.sin(angle - Math.PI / 6)}`;
  const p2 = `${x2 - size * Math.cos(angle + Math.PI / 6)},${y2 - size * Math.sin(angle + Math.PI / 6)}`;
  return (
    <g className={accent} fill="none" strokeWidth="2.5" strokeLinecap="round">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline points={`${p1} ${x2},${y2} ${p2}`} />
    </g>
  );
}

export function CalculusDiagram({ kind }: { kind: CalculusDiagramKind }) {
  const common = {
    viewBox: "0 0 320 300",
    role: "img" as const,
    className: "h-auto w-full max-w-xl text-foreground",
  };

  if (kind === "function") {
    return (
      <svg {...common} aria-label="Function graph with input-output points">
        <Axes />
        <path d="M35 238 C85 225 105 180 135 170 C175 156 202 75 286 55" fill="none" className={curve} strokeWidth="3" />
        {[70, 130, 205, 260].map((x, i) => {
          const y = [222, 174, 102, 65][i] ?? 150;
          return <circle key={x} cx={x} cy={y} r="4" className="fill-primary" />;
        })}
        <text x="268" y="45" className="fill-foreground text-[14px]">y=f(x)</text>
      </svg>
    );
  }

  if (kind === "limit") {
    return (
      <svg {...common} aria-label="Curve approaching a limit from both sides">
        <Axes />
        <path d="M35 225 C90 205 110 170 153 112" fill="none" className={curve} strokeWidth="3" />
        <path d="M167 112 C210 170 230 205 285 225" fill="none" className={curve} strokeWidth="3" />
        <circle cx="160" cy="106" r="7" className="fill-background stroke-primary" strokeWidth="3" />
        <line x1="160" y1="106" x2="160" y2="150" className="stroke-dashed stroke-muted-foreground" strokeDasharray="5 5" />
        <text x="148" y="170" className="fill-foreground text-[13px]">a</text>
        <Arrow x1={92} y1={188} x2={145} y2={120} />
        <Arrow x1={228} y1={188} x2={175} y2={120} />
      </svg>
    );
  }

  if (kind === "derivative") {
    return (
      <svg {...common} aria-label="Curve with a tangent line at a point">
        <Axes />
        <path d="M35 238 C92 236 119 212 150 165 C178 124 220 78 285 70" fill="none" className={curve} strokeWidth="3" />
        <line x1="82" y1="234" x2="245" y2="69" className={accent} strokeWidth="2.5" />
        <circle cx="158" cy="153" r="5" className="fill-emerald-500" />
        <text x="201" y="96" className="fill-foreground text-[13px]">tangent</text>
      </svg>
    );
  }

  if (kind === "mean-value") {
    return (
      <svg {...common} aria-label="Secant line and a parallel tangent illustrating the mean value theorem">
        <Axes />
        <path d="M45 225 C90 90 205 245 278 65" fill="none" className={curve} strokeWidth="3" />
        <line x1="48" y1="216" x2="278" y2="65" className="stroke-muted-foreground" strokeWidth="2" />
        <line x1="105" y1="199" x2="230" y2="117" className={accent} strokeWidth="2.5" />
        <circle cx="166" cy="157" r="5" className="fill-emerald-500" />
      </svg>
    );
  }

  if (kind === "riemann-sum") {
    const bars = [210, 185, 155, 120, 82];
    return (
      <svg {...common} aria-label="Riemann rectangles approximating area under a curve">
        <Axes />
        {bars.map((top, i) => (
          <rect key={i} x={55 + i * 43} y={top} width="42" height={150 - top} className={fill} stroke="currentColor" strokeOpacity="0.25" />
        ))}
        <path d="M48 235 C90 218 122 190 155 160 C198 120 230 90 282 57" fill="none" className={curve} strokeWidth="3" />
      </svg>
    );
  }

  if (kind === "volume") {
    return (
      <svg {...common} aria-label="Solid of revolution with representative cross sections">
        <ellipse cx="160" cy="58" rx="82" ry="22" className={fill} stroke="currentColor" strokeOpacity="0.35" />
        <path d="M78 58 C95 110 100 205 132 247 M242 58 C225 110 220 205 188 247" fill="none" className={curve} strokeWidth="3" />
        <ellipse cx="160" cy="247" rx="28" ry="10" className={fill} stroke="currentColor" strokeOpacity="0.35" />
        {[100,145,190].map((y, i) => <ellipse key={y} cx="160" cy={y} rx={65-i*13} ry={15-i*2} fill="none" className={accent} strokeWidth="1.8" />)}
        <line x1="160" y1="30" x2="160" y2="270" className={axis} strokeDasharray="5 5" />
      </svg>
    );
  }

  if (kind === "exponential") {
    return (
      <svg {...common} aria-label="Exponential growth and logarithmic inverse graphs">
        <Axes />
        <path d="M42 145 C105 144 150 142 185 125 C220 108 249 75 284 31" fill="none" className={curve} strokeWidth="3" />
        <path d="M165 265 C170 225 180 190 205 170 C230 154 258 151 290 150" fill="none" className={accent} strokeWidth="3" />
        <line x1="40" y1="270" x2="285" y2="25" className="stroke-muted-foreground" strokeDasharray="6 6" />
        <text x="246" y="48" className="fill-foreground text-[13px]">eˣ</text>
        <text x="250" y="177" className="fill-foreground text-[13px]">ln x</text>
      </svg>
    );
  }

  if (kind === "integral") {
    return (
      <svg {...common} aria-label="Signed area under a curve">
        <Axes />
        <path d="M58 150 C92 65 125 70 158 150 C193 225 228 220 270 150 L270 150 L58 150 Z" className={fill} />
        <path d="M58 150 C92 65 125 70 158 150 C193 225 228 220 270 150" fill="none" className={curve} strokeWidth="3" />
        <line x1="58" y1="145" x2="58" y2="157" className={axis} />
        <line x1="270" y1="145" x2="270" y2="157" className={axis} />
        <text x="53" y="174" className="fill-foreground text-[13px]">a</text>
        <text x="265" y="174" className="fill-foreground text-[13px]">b</text>
      </svg>
    );
  }

  if (kind === "slope-field") {
    const marks = [];
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 8; c++) {
        const x = 42 + c * 34;
        const y = 48 + r * 34;
        const slope = (c - 3.5) * 0.18 + (3 - r) * 0.12;
        const dx = 10 / Math.sqrt(1 + slope * slope);
        const dy = slope * dx;
        marks.push(<line key={`${r}-${c}`} x1={x-dx} y1={y+dy} x2={x+dx} y2={y-dy} className="stroke-muted-foreground" strokeWidth="1.6" />);
      }
    }
    return (
      <svg {...common} aria-label="Slope field with a solution curve">
        {marks}
        <path d="M38 235 C95 225 125 196 158 150 C195 100 232 75 286 70" fill="none" className={curve} strokeWidth="3" />
      </svg>
    );
  }

  if (kind === "series") {
    return (
      <svg {...common} aria-label="Partial sums converging to a limit">
        <Axes />
        <line x1="35" y1="82" x2="288" y2="82" className={accent} strokeWidth="2" strokeDasharray="6 6" />
        {[220,150,110,94,87,84,83].map((y,i)=><circle key={i} cx={65+i*32} cy={y} r="5" className="fill-primary" />)}
        <text x="270" y="72" className="fill-foreground text-[13px]">L</text>
        <text x="262" y="171" className="fill-foreground text-[13px]">n</text>
      </svg>
    );
  }

  if (kind === "polar") {
    return (
      <svg {...common} aria-label="Polar grid and rose curve">
        {[35,70,105].map(r=><circle key={r} cx="160" cy="150" r={r} fill="none" className={axis} strokeWidth="1" />)}
        {[0,30,60,90,120,150].map(a=>{
          const rad=a*Math.PI/180; const dx=120*Math.cos(rad), dy=120*Math.sin(rad);
          return <line key={a} x1={160-dx} y1={150-dy} x2={160+dx} y2={150+dy} className={axis} strokeWidth="1" />;
        })}
        <path d="M160 150 C195 65 250 75 160 150 C75 115 75 190 160 150 C125 235 70 225 160 150 C245 185 245 110 160 150" fill="none" className={curve} strokeWidth="3" />
      </svg>
    );
  }

  if (kind === "vector-space") {
    return (
      <svg {...common} aria-label="Three-dimensional axes with two vectors and a plane">
        <Axes threeD />
        <polygon points="75,205 185,235 263,155 152,126" className={fill} stroke="currentColor" strokeOpacity="0.3" />
        <Arrow x1={160} y1={150} x2={245} y2={84} />
        <Arrow x1={160} y1={150} x2={85} y2={108} />
        <text x="251" y="84" className="fill-foreground text-[13px]">u</text>
        <text x="72" y="104" className="fill-foreground text-[13px]">v</text>
      </svg>
    );
  }

  if (kind === "space-curve") {
    return (
      <svg {...common} aria-label="Helical space curve with tangent vector">
        <Axes threeD />
        <path d="M95 235 C230 235 230 195 95 195 C35 195 35 155 160 155 C285 155 285 115 160 115 C45 115 45 75 225 65" fill="none" className={curve} strokeWidth="3" />
        <Arrow x1={170} y1={116} x2={245} y2={86} />
        <circle cx="170" cy="116" r="5" className="fill-emerald-500" />
      </svg>
    );
  }

  if (kind === "surface") {
    return (
      <svg {...common} aria-label="Multivariable surface with contour curves and gradient">
        <path d="M55 210 C90 100 230 100 265 210 C225 250 95 250 55 210 Z" className={fill} stroke="currentColor" strokeOpacity="0.35" />
        {[0,1,2,3].map(i=><ellipse key={i} cx="160" cy={210-i*28} rx={92-i*18} ry={25-i*4} fill="none" className={curve} strokeWidth="1.7" />)}
        <Arrow x1={160} y1={175} x2={230} y2={110} />
        <text x="230" y="103" className="fill-foreground text-[13px]">∇f</text>
      </svg>
    );
  }

  if (kind === "double-integral") {
    return (
      <svg {...common} aria-label="Planar integration region with vertical slices">
        <Axes />
        <path d="M68 225 C110 110 205 88 268 195 L250 235 C185 200 120 245 68 225 Z" className={fill} stroke="currentColor" strokeOpacity="0.35" />
        {[105,130,155,180,205,230].map((x,i)=><line key={x} x1={x} y1={224-i*7} x2={x} y2={142-i*6} className={accent} strokeWidth="1.4" />)}
        <text x="205" y="250" className="fill-foreground text-[13px]">R</text>
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="Vector field with oriented surface and flux">
      {[0,1,2,3,4].flatMap(r=>[0,1,2,3,4,5].map(c=>{
        const x=45+c*45, y=55+r*48;
        return <Arrow key={`${r}-${c}`} x1={x} y1={y} x2={x+12+(r-2)*2} y2={y-10+(c-2)*2} />;
      }))}
      <ellipse cx="165" cy="165" rx="78" ry="38" className={fill} stroke="currentColor" strokeOpacity="0.4" />
      <Arrow x1={165} y1={165} x2={165} y2={82} />
      <text x="174" y="87" className="fill-foreground text-[13px]">n</text>
    </svg>
  );
}
