import { ArrowDown, ArrowRight } from "lucide-react";

export function InventionDiagram({ slug }: { slug: string }) {
  if (slug === "steam-engine") return <SteamEngineDiagram />;
  if (slug === "printing-press") return <PrintingPressDiagram />;
  if (slug === "electrical-telegraph") return <ElectricalTelegraphDiagram />;
  if (slug === "electric-light") return <ElectricLightDiagram />;
  if (slug === "airplane") return <AirplaneDiagram />;
  if (slug === "telephone") return <TelephoneDiagram />;
  if (slug === "automobile") return <AutomobileDiagram />;
  if (slug === "mechanical-refrigeration") return <RefrigerationDiagram />;
  if (slug === "transistor") return <TransistorDiagram />;
  if (slug === "programmable-computer") return <ProgrammableComputerDiagram />;
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

function TelephoneDiagram() {
  const stages = [
    ["Voice", "Air-pressure variations enter the transmitter"],
    ["Diaphragm", "A thin membrane vibrates with the sound"],
    ["Transducer", "Motion changes an electrical signal"],
    ["Line", "The varying current travels through the circuit"],
    ["Receiver", "An electromagnet moves a second diaphragm"],
    ["Sound", "The listener hears reconstructed pressure waves"],
  ];

  return (
    <ProcessDiagram
      eyebrow="Communication-system diagram"
      title="A telephone converts sound into an electrical pattern and back again"
      description="The invention is not merely a speaking tube with a wire. It requires matched transducers, a complete circuit, signalling, switching and a network that connects one subscriber to another."
      stages={stages}
      insights={[
        ["Transmitter", "Bell's early magnetic transmitter proved the principle; carbon transmitters later produced stronger signals."],
        ["Circuit", "A complete current path, suitable voltage and low-resistance connections determine intelligibility."],
        ["Network", "Switchboards, exchanges, numbering and automatic switching transformed a pair of instruments into a public system."],
      ]}
      accent="violet"
    />
  );
}

function AutomobileDiagram() {
  const stages = [
    ["Fuel + air", "A combustible mixture enters the cylinder"],
    ["Combustion", "Ignition produces high-pressure gas"],
    ["Piston", "Gas pressure creates reciprocating motion"],
    ["Crankshaft", "The mechanism converts motion into rotation"],
    ["Transmission", "Gears match engine speed to road demand"],
    ["Driven wheels", "Torque reaches the road through tyres"],
  ];

  return (
    <ProcessDiagram
      eyebrow="Powertrain diagram"
      title="The automobile is an integrated propulsion, control and road-contact system"
      description="A practical car must do more than make an engine turn. It must start, cool, steer, brake, transmit torque, carry passengers and survive uneven roads with predictable control."
      stages={stages}
      insights={[
        ["Steering", "Geometry must turn inner and outer wheels through different radii without excessive tyre scrub."],
        ["Braking", "Friction converts motion into heat, so brake size, cooling and tyre grip limit stopping performance."],
        ["Infrastructure", "Fuel supply, roads, repair skills, traffic law and mass production became part of the automobile system."],
      ]}
      accent="rose"
    />
  );
}

function RefrigerationDiagram() {
  const stages = [
    ["Compressor", "Raises refrigerant pressure and temperature"],
    ["Condenser", "Rejects heat and changes vapour to liquid"],
    ["Expansion device", "Drops pressure and meters refrigerant flow"],
    ["Evaporator", "Absorbs heat as the refrigerant boils"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-5 text-slate-950 shadow-sm dark:from-cyan-950/30 dark:via-slate-950 dark:to-blue-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
          Thermodynamic-cycle diagram
        </p>
        <h3 className="mt-1 text-xl font-bold">Refrigeration moves heat; it does not manufacture cold</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Work supplied to the compressor drives a closed refrigerant loop. Heat enters the refrigerant at the cold space and leaves it at the warmer condenser.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {stages.map(([title, detail], index) => (
          <div key={title} className="relative rounded-xl border border-cyan-200/80 bg-white/75 p-5 shadow-sm dark:border-cyan-900 dark:bg-white/5">
            <span className="flex size-8 items-center justify-center rounded-full bg-cyan-700 text-xs font-bold text-white dark:bg-cyan-300 dark:text-slate-950">
              {index + 1}
            </span>
            <p className="mt-4 font-bold">{title}</p>
            <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{detail}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
              {index === 0 ? "Work in" : index === 1 ? "Heat out" : index === 2 ? "Pressure drop" : "Heat in"}
            </p>
            {index < stages.length - 1 && (
              <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-muted-foreground lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-dashed border-cyan-300/80 bg-cyan-50/60 p-3 text-center text-xs font-semibold text-cyan-800 dark:border-cyan-800 dark:bg-cyan-950/25 dark:text-cyan-200">
        <span>Low-pressure vapour returns to the compressor</span>
        <span aria-hidden="true">↺</span>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Insight label="Phase change" text="Boiling and condensation transfer large amounts of heat at controlled temperatures." />
        <Insight label="Coefficient of performance" text="Useful cooling is compared with compressor work, not treated as an energy efficiency in the ordinary sense." />
        <Insight label="System boundary" text="Insulation, door seals, heat exchangers, controls and refrigerant choice all affect real performance." />
      </div>
    </div>
  );
}

function TransistorDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-fuchsia-50 via-white to-indigo-50 p-5 text-slate-950 shadow-sm dark:from-fuchsia-950/30 dark:via-slate-950 dark:to-indigo-950/30 dark:text-slate-50 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-700 dark:text-fuchsia-300">
          Semiconductor-control diagram
        </p>
        <h3 className="mt-1 text-xl font-bold">A small input controls a larger current path</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          In a bipolar junction transistor, a relatively small base current changes carrier flow between emitter and collector. In a field-effect transistor, voltage at a gate controls a conductive channel.
        </p>
      </div>

      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
        <DiagramBox title="Input signal" label="Control" detail="A small current or voltage represents information." accent="amber" />
        <FlowArrow />
        <div className="rounded-xl border border-fuchsia-300/70 bg-fuchsia-50/85 p-5 text-center dark:border-fuchsia-900 dark:bg-fuchsia-950/35">
          <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-700 dark:text-fuchsia-300">Semiconductor device</p>
          <p className="mt-2 text-lg font-bold">Carrier flow is controlled</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Junctions, electric fields and carefully doped material create switching or amplification.</p>
        </div>
        <FlowArrow />
        <DiagramBox title="Output circuit" label="Useful response" detail="The controlled current drives logic, sound, radio or another stage." accent="emerald" />
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Insight label="Amplifier" text="A small changing input produces a larger corresponding output without creating energy; the power comes from the supply." />
        <Insight label="Switch" text="Cutoff and conduction represent digital states used to construct logic gates and memory." />
        <Insight label="Manufacturing" text="Purity, surface passivation, lithography and repeatable junction dimensions made billions of devices possible." />
      </div>
    </div>
  );
}

function ProgrammableComputerDiagram() {
  const stages = [
    ["Input", "Data and instructions enter the machine"],
    ["Memory", "Numbers and instructions share addressable storage"],
    ["Control unit", "Fetches, decodes and sequences operations"],
    ["Arithmetic/logic", "Performs numerical and logical operations"],
    ["Output", "Results are stored, displayed or sent onward"],
  ];

  return (
    <div className="overflow-hidden rounded-2xl border bg-gradient-to-br from-emerald-50 via-white to-slate-100 p-5 text-slate-950 shadow-sm dark:from-emerald-950/30 dark:via-slate-950 dark:to-slate-900 dark:text-slate-50 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
          Stored-program architecture
        </p>
        <h3 className="mt-1 text-xl font-bold">A general-purpose computer changes tasks by changing stored instructions</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          The decisive abstraction is programmability: the same physical machine can perform many procedures because operations are represented, sequenced and stored as information.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {stages.map(([title, detail], index) => (
          <div key={title} className="relative rounded-xl border bg-white/75 p-4 text-center shadow-sm dark:bg-white/5">
            <span className="mx-auto flex size-7 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white dark:bg-emerald-300 dark:text-slate-950">
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

      <div className="mt-4 rounded-xl border border-dashed border-emerald-300/80 bg-emerald-50/60 p-4 text-center text-sm font-semibold text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/25 dark:text-emerald-100">
        Fetch → decode → execute → store → repeat
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <Insight label="Program" text="A finite sequence of encoded operations, addresses and control decisions." />
        <Insight label="Memory" text="Capacity, access time and reliability shape what programs can do and how fast they run." />
        <Insight label="Abstraction" text="Assemblers, compilers and operating systems translate human intentions into machine operations." />
      </div>
    </div>
  );
}

function ProcessDiagram({
  eyebrow,
  title,
  description,
  stages,
  insights,
  accent,
}: {
  eyebrow: string;
  title: string;
  description: string;
  stages: string[][];
  insights: string[][];
  accent: "violet" | "rose";
}) {
  const palette =
    accent === "violet"
      ? {
          wrap: "from-violet-50 via-white to-sky-50 dark:from-violet-950/30 dark:via-slate-950 dark:to-sky-950/30",
          text: "text-violet-700 dark:text-violet-300",
          badge: "bg-violet-800 dark:bg-violet-300 dark:text-slate-950",
        }
      : {
          wrap: "from-rose-50 via-white to-amber-50 dark:from-rose-950/30 dark:via-slate-950 dark:to-amber-950/30",
          text: "text-rose-700 dark:text-rose-300",
          badge: "bg-rose-800 dark:bg-rose-300 dark:text-slate-950",
        };

  return (
    <div className={`overflow-hidden rounded-2xl border bg-gradient-to-br ${palette.wrap} p-5 text-slate-950 shadow-sm dark:text-slate-50 sm:p-8`}>
      <div className="mb-6">
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${palette.text}`}>{eyebrow}</p>
        <h3 className="mt-1 text-xl font-bold">{title}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {stages.map(([stageTitle, detail], index) => (
          <div key={stageTitle} className="relative rounded-xl border bg-white/75 p-4 text-center shadow-sm dark:bg-white/5">
            <span className={`mx-auto flex size-7 items-center justify-center rounded-full text-xs font-bold text-white ${palette.badge}`}>
              {index + 1}
            </span>
            <p className="mt-3 font-bold">{stageTitle}</p>
            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-300">{detail}</p>
            {index < stages.length - 1 && (
              <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 rounded-full bg-background text-muted-foreground lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {insights.map(([label, text]) => (
          <Insight key={label} label={label} text={text} />
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
