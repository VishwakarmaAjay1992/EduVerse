import { ArrowDown, ArrowRight } from "lucide-react";

export function InventionDiagram({ slug }: { slug: string }) {
  if (slug === "steam-engine") return <SteamEngineDiagram />;
  if (slug === "printing-press") return <PrintingPressDiagram />;
  if (slug === "electrical-telegraph") return <ElectricalTelegraphDiagram />;
  if (slug === "electric-light") return <ElectricLightDiagram />;
  if (slug === "airplane") return <AirplaneDiagram />;
  return null;
}

function SteamEngineDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-amber-50 via-white to-sky-50 p-5 text-slate-950 shadow-sm dark:from-amber-950/30 dark:via-slate-950 dark:to-sky-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
            Concept diagram
          </p>
          <h3 className="mt-1 text-xl font-bold">The atmospheric cycle and Watt&apos;s key change</h3>
        </div>
        <span className="rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-semibold dark:border-white/15 dark:bg-white/5">
          Not to scale
        </span>
      </div>

      <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <DiagramBox title="Boiler" label="Heat in" detail="Fuel boils water and creates steam." accent="amber" />
        <FlowArrow />
        <DiagramBox
          title="Cylinder + piston"
          label="Pressure difference"
          detail="Steam fills the cylinder; condensation later creates low pressure."
          accent="rose"
        />
        <FlowArrow />
        <DiagramBox title="Beam + pump" label="Work out" detail="Piston motion rocks the beam and lifts mine water." accent="emerald" />
      </div>

      <div className="my-4 flex justify-center">
        <ArrowDown className="size-6 text-slate-500" aria-hidden="true" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-rose-300/60 bg-rose-50/80 p-5 dark:border-rose-900 dark:bg-rose-950/30">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
            Newcomen arrangement
          </p>
          <p className="mt-2 font-semibold">Cold water is injected into the working cylinder.</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            This makes a vacuum, but the cylinder becomes cold and must be reheated during the next cycle.
          </p>
        </div>
        <div className="rounded-xl border border-sky-300/60 bg-sky-50/80 p-5 dark:border-sky-900 dark:bg-sky-950/30">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
            Watt arrangement
          </p>
          <p className="mt-2 font-semibold">Steam condenses in a separate cold chamber.</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            The main cylinder stays hot, so much less newly generated steam is wasted reheating metal.
          </p>
        </div>
      </div>
    </div>
  );
}

function PrintingPressDiagram() {
  const stages = [
    ["Punch", "Master letter"],
    ["Matrix", "Reusable mould"],
    ["Cast type", "Many identical sorts"],
    ["Compose", "Mirrored page forme"],
    ["Ink + press", "Controlled impression"],
    ["Sheet", "Repeatable copy"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-orange-50 via-white to-indigo-50 p-5 text-slate-950 shadow-sm dark:from-orange-950/30 dark:via-slate-950 dark:to-indigo-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
          System diagram
        </p>
        <h3 className="mt-1 text-xl font-bold">The press was a production chain, not one machine</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Gutenberg&apos;s advantage came from linking repeatable tooling, type manufacture, composition, ink and controlled pressure.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {stages.map(([title, detail], index) => (
          <div key={title} className="relative rounded-xl border bg-white/70 p-4 text-center shadow-sm dark:bg-white/5">
            <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
              {index + 1}
            </span>
            <p className="mt-3 font-bold">{title}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{detail}</p>
            {index < stages.length - 1 && (
              <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-muted-foreground lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Insight label="Reusable units" text="Letters are rearranged instead of carving a new page block." />
        <Insight label="Common plane" text="Every type face must meet the paper at nearly the same height." />
        <Insight label="Economics of copies" text="Composition is costly once; later impressions spread that cost." />
      </div>
    </div>
  );
}


function ElectricalTelegraphDiagram() {
  const stages = [
    ["Encode", "Words become timed signal elements"],
    ["Key", "A switch opens and closes the circuit"],
    ["Line", "Current travels through insulated wire"],
    ["Relay", "A weak signal controls a fresh circuit"],
    ["Receiver", "An electromagnet makes sound or marks"],
    ["Decode", "An operator reconstructs the message"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-5 text-slate-950 shadow-sm dark:from-cyan-950/30 dark:via-slate-950 dark:to-violet-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
          Signal-chain diagram
        </p>
        <h3 className="mt-1 text-xl font-bold">Information becomes pulses, then becomes information again</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          The wire carries electrical state changes, not written language. Code, timing, instruments and operators create the message layer.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {stages.map(([title, detail], index) => (
          <div key={title} className="relative rounded-xl border bg-white/70 p-4 text-center shadow-sm dark:bg-white/5">
            <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-slate-950 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
              {index + 1}
            </span>
            <p className="mt-3 font-bold">{title}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{detail}</p>
            {index < stages.length - 1 && (
              <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-muted-foreground lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Insight label="Physical layer" text="Battery, contacts, wire, insulation and electromagnets move the signal." />
        <Insight label="Code layer" text="Agreed timing patterns map pulses to letters, numbers and controls." />
        <Insight label="Network layer" text="Relays, stations, routing and operators move messages beyond one circuit." />
      </div>
    </div>
  );
}

function ElectricLightDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-yellow-50 via-white to-orange-50 p-5 text-slate-950 shadow-sm dark:from-yellow-950/30 dark:via-slate-950 dark:to-orange-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 dark:text-yellow-300">
            Energy-flow diagram
          </p>
          <h3 className="mt-1 text-xl font-bold">An incandescent lamp is part of a complete power system</h3>
        </div>
        <span className="rounded-full border border-slate-900/10 bg-white/60 px-3 py-1 text-xs font-semibold dark:border-white/15 dark:bg-white/5">
          Simplified
        </span>
      </div>

      <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        <DiagramBox title="Generator + grid" label="Electrical supply" detail="Mechanical energy is converted and distributed as controlled voltage." accent="amber" />
        <FlowArrow />
        <DiagramBox title="Resistive filament" label="Heat conversion" detail="Current heats a thin conductor to a very high temperature." accent="rose" />
        <FlowArrow />
        <DiagramBox title="Light + waste heat" label="Energy output" detail="Visible radiation is useful; most incandescent energy leaves as heat." accent="emerald" />
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Insight label="Vacuum or inert gas" text="Protects the hot filament from rapid oxidation and controls evaporation." />
        <Insight label="High resistance" text="Reduces current demand and makes distributed wiring more economical." />
        <Insight label="System integration" text="Sockets, switches, meters, fuses and generators are part of the invention." />
      </div>
    </div>
  );
}

function AirplaneDiagram() {
  const controls = [
    ["Roll", "Wing warping", "Bank left or right"],
    ["Pitch", "Forward elevator", "Raise or lower the nose"],
    ["Yaw", "Twin rudders", "Turn the nose left or right"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-5 text-slate-950 shadow-sm dark:from-sky-950/30 dark:via-slate-950 dark:to-emerald-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
          Flight-system diagram
        </p>
        <h3 className="mt-1 text-xl font-bold">Flight requires force balance and three-axis control</h3>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border bg-white/70 p-5 shadow-sm dark:bg-white/5">
          <p className="text-sm font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">Vertical balance</p>
          <div className="mt-4 flex flex-col items-center gap-2 text-center">
            <span className="rounded-full border bg-sky-50 px-4 py-2 text-sm font-bold dark:bg-sky-950/40">Lift ↑</span>
            <span className="text-xs text-muted-foreground">Wings redirect airflow and create pressure forces</span>
            <span className="text-2xl font-black">✈</span>
            <span className="text-xs text-muted-foreground">Gravity acts on total aircraft mass</span>
            <span className="rounded-full border bg-slate-100 px-4 py-2 text-sm font-bold dark:bg-slate-900">Weight ↓</span>
          </div>
        </div>
        <div className="rounded-xl border bg-white/70 p-5 shadow-sm dark:bg-white/5">
          <p className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Horizontal balance</p>
          <div className="mt-8 flex items-center justify-between gap-3 text-center">
            <span className="rounded-full border bg-rose-50 px-4 py-2 text-sm font-bold dark:bg-rose-950/40">← Drag</span>
            <span className="text-2xl font-black">✈</span>
            <span className="rounded-full border bg-emerald-50 px-4 py-2 text-sm font-bold dark:bg-emerald-950/40">Thrust →</span>
          </div>
          <p className="mt-7 text-center text-xs leading-5 text-muted-foreground">
            Propellers must produce enough thrust to overcome aerodynamic and mechanical losses.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {controls.map(([axis, device, result]) => (
          <div key={axis} className="rounded-xl border border-dashed bg-white/50 p-4 dark:bg-white/5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{axis}</p>
            <p className="mt-1 font-bold">{device}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagramBox({
  title,
  label,
  detail,
  accent,
}: {
  title: string;
  label: string;
  detail: string;
  accent: "amber" | "rose" | "emerald";
}) {
  const classes = {
    amber: "border-amber-300/70 bg-amber-50/85 dark:border-amber-900 dark:bg-amber-950/35",
    rose: "border-rose-300/70 bg-rose-50/85 dark:border-rose-900 dark:bg-rose-950/35",
    emerald: "border-emerald-300/70 bg-emerald-50/85 dark:border-emerald-900 dark:bg-emerald-950/35",
  };

  return (
    <div className={`rounded-xl border p-5 ${classes[accent]}`}>
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-lg font-bold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center">
      <ArrowRight className="hidden size-5 text-slate-500 lg:block" aria-hidden="true" />
      <ArrowDown className="size-5 text-slate-500 lg:hidden" aria-hidden="true" />
    </div>
  );
}

function Insight({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl border border-dashed bg-white/50 p-4 dark:bg-white/5">
      <p className="text-sm font-bold">{label}</p>
      <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}
