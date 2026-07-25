import type { LessonContent, PracticeQuestion, GradedQuestion } from "@/lib/lesson-content-types";
import type { ThermalPhysicsMode } from "@/components/interactive/thermal-physics-explorer";

type WorkedExample = { prompt: string; steps: string[]; answer: string };

type ThermalSpec = {
  chapterSlug: string;
  slug: string;
  title: string;
  mode: ThermalPhysicsMode;
  extraModes?: ThermalPhysicsMode[];
  objectives: string[];
  introduction: string[];
  definitions: { title: string; text: string }[];
  theory: { heading: string; paragraphs: string[]; list?: string[] }[];
  formulae: { latex: string; caption: string }[];
  image?: { src: string; alt: string; caption: string };
  examples: WorkedExample[];
  applications: { area: string; text: string }[];
  mistakes: { wrong: string; right: string }[];
  practice: PracticeQuestion[];
  quiz: GradedQuestion[];
  summary: string[];
};

const specs: ThermalSpec[] = [
  {
    chapterSlug: "kinetic-theory-of-gases",
    slug: "brownian-motion-and-molecular-randomness",
    title: "Brownian Motion and Molecular Randomness",
    mode: "brownian-motion",
    objectives: [
      "Describe Brownian motion and explain why it is evidence for molecular motion.",
      "Explain how temperature, suspended-particle size and viscosity affect the visible motion.",
      "Distinguish the motion of the visible particle from the much faster motion of surrounding molecules.",
      "Connect Brownian motion with diffusion and microscopic models of matter.",
    ],
    introduction: [
      "Brownian motion is the irregular, never-ending zig-zag motion of small particles suspended in a fluid. The visible particle does not move because it is alive or because gravity repeatedly changes direction. It moves because the surrounding molecules strike it from different directions with unequal total impulse at each instant.",
      "Robert Brown reported the phenomenon while examining pollen grains in 1827. Albert Einstein later gave a quantitative molecular explanation, and Jean Perrin's experiments provided powerful evidence for the atomic theory of matter.",
    ],
    definitions: [
      { title: "Brownian motion", text: "Random, irregular motion of a small particle suspended in a liquid or gas, caused by unbalanced molecular collisions." },
      { title: "Diffusion", text: "Net spreading of particles from regions of higher concentration to lower concentration because of random molecular motion." },
      { title: "Microscopic model", text: "A description in terms of atoms or molecules rather than only bulk quantities such as pressure or temperature." },
    ],
    theory: [
      {
        heading: "Why the path is random",
        paragraphs: [
          "A suspended particle is much larger than an individual fluid molecule, but it is continually bombarded by enormous numbers of molecules. The impacts do not balance perfectly over very short time intervals, so the particle receives a fluctuating net impulse.",
          "Each collision changes the particle's velocity. Repeated changes of direction create a jagged path. The motion is statistically random even though each individual collision obeys mechanics.",
        ],
        list: [
          "The visible particle is not following the path of a single fluid molecule.",
          "The molecular collisions are rapid and approximately random in direction.",
          "At absolute zero in the classical model, thermal molecular motion would vanish.",
        ],
      },
      {
        heading: "Factors affecting the motion",
        paragraphs: [
          "Higher temperature produces faster fluid molecules and more energetic impacts. Smaller or lighter suspended particles respond more strongly to a given impulse. Greater viscosity resists the particle's motion and reduces the visible displacement between direction changes.",
        ],
        list: [
          "Temperature increases → Brownian activity increases.",
          "Particle radius increases → Brownian activity decreases.",
          "Fluid viscosity increases → Brownian activity decreases.",
          "Small particles in low-viscosity fluids show the most visible motion.",
        ],
      },
    ],
    formulae: [
      { latex: "D=\\frac{kT}{6\\pi\\eta r}", caption: "Einstein-Stokes diffusion coefficient for a spherical particle of radius r in a fluid of viscosity η. This extends the qualitative relationships into a quantitative model." },
      { latex: "\\langle x^2\\rangle=2Dt", caption: "In one dimension, the mean-square displacement grows linearly with time rather than as the square of time." },
    ],
    image: { src: "/physics/thermal/brownian-motion.svg", alt: "Suspended particle following a zig-zag path among moving fluid molecules", caption: "Unequal molecular impulses continually redirect the suspended particle." },
    examples: [
      {
        prompt: "Two identical pollen grains are suspended in water at 20°C and 60°C. Which shows stronger Brownian motion?",
        steps: ["The particles and fluid are otherwise identical.", "Higher temperature means greater average molecular kinetic energy.", "Collisions at 60°C transfer stronger and more frequent impulses."],
        answer: "The grain in the 60°C water shows stronger Brownian motion.",
      },
      {
        prompt: "A small particle and a particle with twice its radius are in the same fluid at the same temperature. Compare their diffusion coefficients.",
        steps: ["Use $D=kT/(6\\pi\\eta r)$.", "At fixed $T$ and $\\eta$, $D\\propto1/r$.", "Doubling $r$ halves $D$."],
        answer: "The larger particle has half the diffusion coefficient.",
      },
      {
        prompt: "Why is smoke in still air seen to jitter under a microscope even when there is no wind?",
        steps: ["Air molecules remain in rapid random thermal motion.", "Their impacts on a smoke particle are unequal over short intervals.", "The resulting fluctuating force changes the particle's direction."],
        answer: "The jitter is Brownian motion caused by random molecular bombardment.",
      },
      {
        prompt: "A dye drop spreads through water without stirring. Identify the microscopic mechanism.",
        steps: ["Water and dye molecules are in continuous thermal motion.", "Random collisions move dye molecules in all directions.", "Because concentration is initially greatest near the drop, the net result is spreading."],
        answer: "Diffusion driven by random molecular motion.",
      },
    ],
    applications: [
      { area: "Colloids", text: "Brownian agitation helps keep tiny particles suspended and slows gravitational settling." },
      { area: "Biology", text: "Diffusion transports molecules over microscopic distances inside cells." },
      { area: "Air quality", text: "Aerosol and smoke-particle motion influences filtration and atmospheric dispersion." },
      { area: "Evidence for atoms", text: "Quantitative Brownian measurements helped establish molecular reality and estimate Avogadro's constant." },
    ],
    mistakes: [
      { wrong: "The pollen grain moves because it is alive.", right: "Inert particles also show Brownian motion; the cause is molecular bombardment." },
      { wrong: "Higher viscosity increases the speed of Brownian motion.", right: "Higher viscosity produces greater drag and reduces the visible motion." },
      { wrong: "All molecular collisions cancel exactly.", right: "They cancel only on average over long times; short-time fluctuations produce motion." },
    ],
    practice: [
      { prompt: "Which change most strongly increases visible Brownian motion?", options: ["Lowering temperature", "Increasing viscosity", "Using a smaller particle", "Freezing the liquid"], answer: 2, explanation: "A smaller particle has less inertia and responds more strongly to fluctuating molecular impacts." },
      { prompt: "Brownian motion directly supports the idea that", options: ["molecules are stationary", "matter contains moving molecules", "gravity changes direction", "fluids have no viscosity"], answer: 1, explanation: "The irregular path is explained by incessant molecular collisions." },
      { prompt: "At fixed temperature, the diffusion coefficient in the Einstein-Stokes model is inversely proportional to", options: ["time", "particle radius", "Boltzmann constant", "absolute pressure"], answer: 1, explanation: "$D\\propto1/r$." },
      { prompt: "Diffusion differs from a steady wind because diffusion is caused by", options: ["bulk fluid flow", "random molecular motion", "a pressure gauge", "magnetic forces"], answer: 1, explanation: "Diffusion can occur even with no macroscopic flow." },
      { prompt: "Perrin's experiments were important because they", options: ["disproved atoms", "verified Einstein's molecular explanation", "showed light is a wave", "invented the thermometer"], answer: 1, explanation: "Perrin's measurements supported the statistical molecular theory." },
    ],
    quiz: [
      { type: "mc", prompt: "Which combination gives the greatest Brownian activity?", options: ["large particle, viscous liquid, low T", "small particle, low-viscosity liquid, high T", "large particle, low-viscosity liquid, low T", "small particle, viscous liquid, low T"], answer: 1, marks: 2, explanation: "Small size, low drag and high molecular speed all increase the effect." },
      { type: "tf", prompt: "Brownian motion is perfectly predictable for one suspended particle if its initial velocity is known.", answer: false, marks: 2, explanation: "The enormous number of unknown molecular collisions makes the observed path stochastic." },
      { type: "multi", prompt: "Select every correct statement.", options: ["Brownian motion is irregular", "Viscosity damps the motion", "Higher temperature generally strengthens it", "Only living particles show it"], answers: [0, 1, 2], marks: 3, explanation: "Inert particles also display Brownian motion." },
    ],
    summary: [
      "Brownian motion is random zig-zag motion caused by unequal molecular impacts.",
      "It becomes stronger at higher temperature and for smaller particles in less viscous fluids.",
      "The phenomenon provides direct evidence for the molecular model of matter.",
      "Diffusion is the large-scale statistical result of random molecular motion.",
    ],
  },
  {
    chapterSlug: "kinetic-theory-of-gases",
    slug: "ideal-gas-laws-and-kinetic-theory-postulates",
    title: "Ideal Gas Laws and Kinetic-Theory Postulates",
    mode: "gas-model",
    objectives: [
      "State the assumptions of the ideal-gas kinetic model.",
      "Use the forms $PV=nRT$ and $PV=NkT$ consistently.",
      "Relate Boyle's, Charles's and pressure laws to the ideal-gas equation.",
      "Distinguish microscopic and macroscopic properties of a gas.",
    ],
    introduction: [
      "Kinetic theory explains bulk gas properties in terms of large numbers of molecules in continuous random motion. Temperature, pressure and volume are macroscopic quantities, while molecular mass, speed and momentum belong to the microscopic description.",
      "An ideal gas is a model. It becomes a good approximation when molecules are far apart, intermolecular forces are negligible except during collisions, and the gas is not close to condensation.",
    ],
    definitions: [
      { title: "Macroscopic system", text: "A system containing an enormous number of particles, described by bulk variables such as pressure, volume and temperature." },
      { title: "Ideal gas", text: "A model gas of point-like molecules in random motion with negligible intermolecular forces and perfectly elastic collisions." },
      { title: "Avogadro constant", text: "$N_A=6.02214076\\times10^{23}\\text{ mol}^{-1}$, the number of particles per mole." },
    ],
    theory: [
      {
        heading: "Postulates of kinetic theory",
        paragraphs: ["The ideal-gas model replaces a complicated molecular system with a small set of assumptions that are powerful enough to predict pressure and energy relationships."],
        list: [
          "A gas contains a very large number of molecules whose own volume is negligible compared with the container volume.",
          "Molecules move continuously and randomly in straight lines between collisions.",
          "Collisions between molecules and with the container walls are perfectly elastic and of negligible duration.",
          "Intermolecular forces are negligible except during collisions.",
          "The mean translational kinetic energy depends only on absolute temperature.",
        ],
      },
      {
        heading: "Connecting the gas laws",
        paragraphs: [
          "For a fixed amount of ideal gas, $PV/T$ is constant. Holding temperature fixed gives Boyle's law, holding pressure fixed gives Charles's law, and holding volume fixed gives the pressure law.",
          "The molar form uses the amount $n$ in moles and the gas constant $R$. The molecular form uses the number of molecules $N$ and Boltzmann constant $k$, with $R=N_Ak$.",
        ],
      },
    ],
    formulae: [
      { latex: "PV=nRT", caption: "Molar ideal-gas equation." },
      { latex: "PV=NkT", caption: "Molecular ideal-gas equation." },
      { latex: "R=N_Ak", caption: "Connection between the molar and molecular descriptions." },
      { latex: "\\frac{P_1V_1}{T_1}=\\frac{P_2V_2}{T_2}", caption: "Combined gas law for a fixed amount of ideal gas." },
    ],
    examples: [
      { prompt: "One mole of ideal gas occupies 0.0246 m³ at 300 K. Find its pressure.", steps: ["Use $P=nRT/V$.", "$P=(1)(8.314)(300)/0.0246$.", "$P=1.014\\times10^5$ Pa."], answer: "Approximately $1.01\\times10^5$ Pa." },
      { prompt: "A sealed gas has pressure $2.0\\times10^5$ Pa at 300 K. Its volume is fixed and temperature rises to 450 K. Find the new pressure.", steps: ["At fixed volume and amount, $P/T$ is constant.", "$P_2=P_1T_2/T_1$.", "$P_2=2.0\\times10^5(450/300)=3.0\\times10^5$ Pa."], answer: "$3.0\\times10^5$ Pa." },
      { prompt: "How many molecules are in 3.0 mol of gas?", steps: ["Use $N=nN_A$.", "$N=3.0(6.022\\times10^{23})$.", "$N=1.81\\times10^{24}$."], answer: "$1.81\\times10^{24}$ molecules." },
      { prompt: "A gas at constant temperature is compressed to half its initial volume. What happens to its pressure?", steps: ["Boyle's law gives $PV=\\text{constant}$.", "$P_2/P_1=V_1/V_2$.", "If $V_2=V_1/2$, then $P_2=2P_1$."], answer: "The pressure doubles." },
    ],
    applications: [
      { area: "Tyres", text: "Heating raises molecular speeds and pressure when the tyre volume changes little." },
      { area: "Engines", text: "Compression and expansion of gases convert thermal energy and mechanical work." },
      { area: "Atmosphere", text: "Pressure and density profiles are interpreted using molecular motion and gas laws." },
      { area: "Vacuum systems", text: "Number density and pressure determine collision rates and mean free paths." },
    ],
    mistakes: [
      { wrong: "Use Celsius temperature directly in $PV=nRT$.", right: "Thermodynamic gas equations require absolute temperature in kelvin." },
      { wrong: "$N$ means number of moles.", right: "$N$ is number of molecules; $n$ is amount in moles." },
      { wrong: "The ideal-gas model assumes molecules are at rest between collisions.", right: "They move uniformly in straight lines between collisions." },
    ],
    practice: [
      { prompt: "Which collision assumption belongs to the ideal-gas model?", options: ["Perfectly inelastic", "Perfectly elastic", "No wall collisions", "Collisions last indefinitely"], answer: 1, explanation: "Kinetic energy is conserved in each idealized collision." },
      { prompt: "At constant temperature, doubling volume makes pressure", options: ["double", "half", "four times", "unchanged"], answer: 1, explanation: "Boyle's law: $P\\propto1/V$." },
      { prompt: "Which is microscopic?", options: ["Container pressure", "Gas temperature", "One molecule's momentum", "Gas volume"], answer: 2, explanation: "Momentum belongs to an individual molecule." },
      { prompt: "The equation $PV=NkT$ uses $N$ for", options: ["moles", "molecules", "newtons", "number density only"], answer: 1, explanation: "$N$ is the total molecular count." },
      { prompt: "A real gas behaves most ideally at", options: ["high pressure and low T", "low pressure and high T", "condensation", "very high density"], answer: 1, explanation: "Molecules are then relatively far apart and forces are less important." },
    ],
    quiz: [
      { type: "mc", prompt: "Which statement is not an ideal-gas postulate?", options: ["Random motion", "Negligible molecular volume", "Strong long-range attraction", "Elastic collisions"], answer: 2, marks: 2, explanation: "Long-range forces are neglected." },
      { type: "tf", prompt: "$R=N_Ak$ connects the molar and molecular gas equations.", answer: true, marks: 2, explanation: "Substituting $N=nN_A$ into $PV=NkT$ gives $PV=nRT$." },
      { type: "multi", prompt: "Select variables that must be fixed for Boyle's law.", options: ["Amount of gas", "Absolute temperature", "Pressure", "Volume"], answers: [0, 1], marks: 3, explanation: "Pressure and volume vary while amount and temperature remain fixed." },
    ],
    summary: [
      "Kinetic theory connects molecular motion with pressure and temperature.",
      "An ideal gas has point-like molecules, negligible forces and elastic collisions.",
      "$PV=nRT$ and $PV=NkT$ are equivalent descriptions.",
      "The traditional gas laws follow by holding selected variables constant.",
    ],
  },
  {
    chapterSlug: "kinetic-theory-of-gases",
    slug: "kinetic-theory-and-pressure-derivation",
    title: "Kinetic Theory and Pressure Derivation",
    mode: "gas-pressure",
    objectives: [
      "Derive gas pressure from molecular collisions with a container wall.",
      "Explain the origin of the factor one-third in the pressure equation.",
      "Use $P=\\tfrac13\\rho v_{rms}^2$ in quantitative problems.",
      "Relate pressure to translational kinetic-energy density.",
    ],
    introduction: [
      "Gas pressure is not a mysterious continuous push. Microscopically, it is the average effect of countless molecular impulses delivered to the container walls. The derivation converts one collision into a force, then sums over all molecules and uses the statistical symmetry of random motion.",
    ],
    definitions: [
      { title: "Impulse", text: "Change in momentum, equal to force multiplied by collision time for an average force." },
      { title: "RMS speed", text: "$v_{rms}=\\sqrt{\\langle v^2\\rangle}$, the square root of the mean of squared molecular speeds." },
      { title: "Isotropy", text: "No spatial direction is preferred, so the mean-square velocity components are equal." },
    ],
    theory: [
      {
        heading: "One molecule in a cubic container",
        paragraphs: [
          "Take a cube of side $L$. A molecule of mass $m$ moving with x-component $v_x$ strikes the x-wall elastically. Its x-momentum changes from $mv_x$ to $-mv_x$, so the magnitude of momentum change is $2mv_x$.",
          "The molecule returns to the same wall after travelling a distance $2L$, taking time $2L/v_x$. The average force due to this molecule is therefore $mv_x^2/L$.",
        ],
      },
      {
        heading: "Sum over all molecules",
        paragraphs: [
          "Adding the forces from $N$ molecules and dividing by the wall area $L^2$ gives pressure proportional to the sum of $v_x^2$. Random isotropic motion gives $\\langle v_x^2\\rangle=\\langle v_y^2\\rangle=\\langle v_z^2\\rangle=\\tfrac13\\langle v^2\\rangle$.",
          "Using mass density $\\rho=Nm/V$ yields the standard kinetic equation. The derivation assumes elastic collisions, negligible molecular size and no preferred direction.",
        ],
      },
    ],
    formulae: [
      { latex: "\\Delta p_x=-2mv_x", caption: "Momentum change of a molecule when its normal velocity component reverses." },
      { latex: "P=\\frac13\\rho\\langle v^2\\rangle=\\frac13\\rho v_{rms}^2", caption: "Kinetic equation of pressure." },
      { latex: "PV=\\frac13Nm\\langle v^2\\rangle", caption: "Microscopic pressure-volume relation." },
      { latex: "P=\\frac23\\frac{U_{trans}}V", caption: "Pressure equals two-thirds of translational kinetic-energy density." },
    ],
    image: { src: "/physics/thermal/kinetic-pressure.svg", alt: "Molecule colliding elastically with a wall and equations linking pressure to RMS speed", caption: "The wall experiences the reaction impulse from repeated molecular collisions." },
    examples: [
      { prompt: "A gas has density 4.5 kg m⁻³ and pressure $9.3\\times10^5$ Pa. Find its RMS speed.", steps: ["Use $P=\\tfrac13\\rho v_{rms}^2$.", "$v_{rms}=\\sqrt{3P/\\rho}$.", "$v_{rms}=\\sqrt{3(9.3\\times10^5)/4.5}=7.87\\times10^2$ m s⁻¹."], answer: "Approximately $7.9\\times10^2$ m s⁻¹." },
      { prompt: "A gas has density 3.0 kg m⁻³ and RMS speed 400 m s⁻¹. Calculate pressure.", steps: ["$P=\\tfrac13\\rho v_{rms}^2$.", "$P=\\tfrac13(3.0)(400)^2$.", "$P=1.6\\times10^5$ Pa."], answer: "$1.6\\times10^5$ Pa." },
      { prompt: "At constant RMS speed, gas density doubles. What happens to pressure?", steps: ["From $P=\\tfrac13\\rho v_{rms}^2$, pressure is directly proportional to density.", "Doubling $\\rho$ doubles $P$."], answer: "Pressure doubles." },
      { prompt: "The translational kinetic energy in 0.020 m³ of gas is 300 J. Find the pressure.", steps: ["Use $P=\\tfrac23(U/V)$.", "$U/V=300/0.020=1.5\\times10^4$ J m⁻³.", "$P=(2/3)(1.5\\times10^4)=1.0\\times10^4$ Pa."], answer: "$1.0\\times10^4$ Pa." },
    ],
    applications: [
      { area: "Pressure gauges", text: "Macroscopic readings represent a time average of molecular impulses." },
      { area: "Tyre heating", text: "Faster molecules strike the walls more often and transfer greater momentum." },
      { area: "Vacuum science", text: "At low number density, wall collision rates and mean free path become central." },
      { area: "Astrophysical gases", text: "Microscopic kinetic pressure contributes to supporting stars against gravity." },
    ],
    mistakes: [
      { wrong: "Average molecular velocity is used in the pressure formula.", right: "Random directions make average velocity zero; pressure depends on mean-square speed." },
      { wrong: "The molecule loses kinetic energy at an ideal wall.", right: "The collision is elastic; only the normal momentum component reverses." },
      { wrong: "The factor one-third is arbitrary.", right: "It follows from equal mean-square components in three dimensions." },
    ],
    practice: [
      { prompt: "Pressure in kinetic theory is caused by", options: ["gravity alone", "wall collisions", "molecular colour", "container mass"], answer: 1, explanation: "Repeated momentum transfer to walls creates pressure." },
      { prompt: "If RMS speed doubles at fixed density, pressure becomes", options: ["double", "four times", "half", "unchanged"], answer: 1, explanation: "$P\\propto v_{rms}^2$." },
      { prompt: "Why is average velocity not useful for gas pressure?", options: ["It is always infinite", "Vector directions cancel", "Molecules have no mass", "Pressure is scalar"], answer: 1, explanation: "Random velocity vectors average to approximately zero." },
      { prompt: "The units of $\\rho v^2$ are", options: ["joules", "pascals", "watts", "kelvin"], answer: 1, explanation: "kg m⁻³ × m² s⁻² = kg m⁻¹ s⁻² = Pa." },
      { prompt: "For isotropic motion, $\\langle v_x^2\\rangle$ equals", options: ["$\\langle v^2\\rangle$", "$\\tfrac13\\langle v^2\\rangle$", "zero", "$3\\langle v^2\\rangle$"], answer: 1, explanation: "The three equal components sum to the total mean-square speed." },
    ],
    quiz: [
      { type: "mc", prompt: "A molecule reverses its x-velocity from $v_x$ to $-v_x$. Its momentum change magnitude is", options: ["$mv_x$", "$2mv_x$", "$mv_x^2$", "zero"], answer: 1, marks: 2, explanation: "Final minus initial is $-mv_x-mv_x=-2mv_x$." },
      { type: "tf", prompt: "At fixed density, pressure is proportional to RMS speed rather than its square.", answer: false, marks: 2, explanation: "$P=\\tfrac13\\rho v_{rms}^2$." },
      { type: "multi", prompt: "Select assumptions used in the derivation.", options: ["Elastic wall collisions", "Random isotropic motion", "Large molecular volume", "Negligible intermolecular forces"], answers: [0, 1, 3], marks: 3, explanation: "The molecular volume is assumed negligible." },
    ],
    summary: [
      "Gas pressure is the average momentum transfer from molecules to walls.",
      "Elastic collisions reverse the velocity component normal to the wall.",
      "Isotropy produces the factor one-third.",
      "$P=\\tfrac13\\rho v_{rms}^2$ and $P=\\tfrac23(U/V)$ connect microscopic motion with macroscopic pressure.",
    ],
  },
  {
    chapterSlug: "kinetic-theory-of-gases",
    slug: "rms-speed-temperature-and-translational-kinetic-energy",
    title: "RMS Speed, Temperature and Translational Kinetic Energy",
    mode: "rms-energy",
    objectives: [
      "Derive the relation between temperature and mean translational kinetic energy.",
      "Calculate RMS molecular speeds from temperature and molar mass.",
      "Explain why different gases have equal mean kinetic energy but different RMS speeds at the same temperature.",
      "Use Boltzmann constant in joules and electron-volts.",
    ],
    introduction: [
      "Absolute temperature measures the average translational kinetic energy of ideal-gas molecules. It does not specify the speed of every molecule; gases contain a distribution of speeds. RMS speed is a convenient measure because pressure depends on the mean square of speed.",
    ],
    definitions: [
      { title: "Root-mean-square speed", text: "The square root of the average of $v^2$ over all molecules." },
      { title: "Boltzmann constant", text: "$k=1.380649\\times10^{-23}\\text{ J K}^{-1}=8.617333\\times10^{-5}\\text{ eV K}^{-1}$." },
      { title: "Electron-volt", text: "Energy gained by one elementary charge through 1 volt: $1\\text{ eV}=1.602176634\\times10^{-19}$ J." },
    ],
    theory: [
      {
        heading: "Derivation of mean translational energy",
        paragraphs: [
          "Equating the ideal-gas equation $PV=NkT$ with the kinetic equation $PV=\\tfrac13Nm\\langle v^2\\rangle$ gives $\\tfrac12m\\langle v^2\\rangle=\\tfrac32kT$.",
          "The result depends only on absolute temperature. Oxygen and hydrogen molecules at the same temperature have the same average translational kinetic energy, although hydrogen molecules move faster because their mass is smaller.",
        ],
      },
      {
        heading: "RMS speed",
        paragraphs: [
          "Writing $m=M/N_A$ and $R=N_Ak$ gives the molar form $v_{rms}=\\sqrt{3RT/M}$. Molar mass must be in kg mol⁻¹. The square-root dependence means a fourfold temperature increase doubles RMS speed.",
        ],
      },
    ],
    formulae: [
      { latex: "\\frac12m v_{rms}^2=\\frac32kT", caption: "Mean translational kinetic energy per molecule." },
      { latex: "v_{rms}=\\sqrt{\\frac{3kT}{m}}=\\sqrt{\\frac{3RT}{M}}", caption: "RMS speed in molecular and molar forms." },
      { latex: "\\langle K_{trans}\\rangle=\\frac32kT", caption: "The key temperature-energy relation for a monatomic ideal gas." },
    ],
    examples: [
      { prompt: "Find the RMS speed of nitrogen at 298 K. Take $M=0.0280$ kg mol⁻¹.", steps: ["Use $v_{rms}=\\sqrt{3RT/M}$.", "$v_{rms}=\\sqrt{3(8.314)(298)/0.0280}$.", "$v_{rms}=515$ m s⁻¹."], answer: "Approximately 515 m s⁻¹." },
      { prompt: "Compare RMS speeds of hydrogen and oxygen at the same temperature.", steps: ["At fixed $T$, $v_{rms}\\propto1/\\sqrt M$.", "$v_H/v_O=\\sqrt{M_O/M_H}=\\sqrt{32/2}=4$."], answer: "Hydrogen has four times the RMS speed of oxygen." },
      { prompt: "Calculate mean translational kinetic energy per molecule at 300 K.", steps: ["$K=\\tfrac32kT$.", "$K=1.5(1.380649\\times10^{-23})(300)$.", "$K=6.21\\times10^{-21}$ J."], answer: "$6.21\\times10^{-21}$ J per molecule." },
      { prompt: "At what temperature is the RMS speed three times its value at 273 K?", steps: ["Since $v_{rms}\\propto\\sqrt T$, $v_2/v_1=3$ gives $T_2/T_1=9$.", "$T_2=9(273)=2457$ K."], answer: "2457 K." },
    ],
    applications: [
      { area: "Atmosphere", text: "Molecular speed affects escape, diffusion and atmospheric composition." },
      { area: "Chemical reactions", text: "Temperature changes the fraction of molecules with enough energy to react." },
      { area: "Plasma physics", text: "Energy scales are often expressed using $kT$ in electron-volts." },
      { area: "Astrophysics", text: "Very high stellar temperatures imply enormous particle speeds and fusion-capable energies." },
    ],
    mistakes: [
      { wrong: "All molecules move at the RMS speed.", right: "RMS speed is a statistical measure; actual speeds are distributed." },
      { wrong: "Heavier molecules have more mean kinetic energy at the same temperature.", right: "Mean translational energy is the same; heavier molecules move more slowly." },
      { wrong: "Use molar mass in grams per mole in the SI formula.", right: "Convert molar mass to kg mol⁻¹." },
    ],
    practice: [
      { prompt: "If absolute temperature quadruples, RMS speed", options: ["quadruples", "doubles", "halves", "stays fixed"], answer: 1, explanation: "$v_{rms}\\propto\\sqrt T$." },
      { prompt: "At equal temperature, which gas has greatest RMS speed?", options: ["He", "Ne", "Ar", "Xe"], answer: 0, explanation: "Helium has the smallest molar mass." },
      { prompt: "Mean translational kinetic energy per molecule is", options: ["$kT$", "$\\tfrac12kT$", "$\\tfrac32kT$", "$3kT$"], answer: 2, explanation: "Three translational degrees each contribute $kT/2$." },
      { prompt: "One electron-volt equals", options: ["$1.60\\times10^{-19}$ J", "$1.38\\times10^{-23}$ J", "1 J", "$6.02\\times10^{23}$ J"], answer: 0, explanation: "This is the exact elementary-charge conversion." },
      { prompt: "At the same temperature, oxygen and nitrogen molecules have", options: ["equal RMS speed", "equal mean translational KE", "equal mass", "zero momentum"], answer: 1, explanation: "Mean translational KE depends only on temperature." },
    ],
    quiz: [
      { type: "mc", prompt: "A gas molecule's mass is halved while temperature stays fixed. RMS speed changes by", options: ["$1/2$", "$1/\\sqrt2$", "$\\sqrt2$", "2"], answer: 2, marks: 2, explanation: "$v_{rms}\\propto1/\\sqrt m$." },
      { type: "tf", prompt: "The vector average of molecular velocities can be zero while RMS speed is nonzero.", answer: true, marks: 2, explanation: "Opposite directions cancel in the vector average, but squared speeds remain positive." },
      { type: "multi", prompt: "Select quantities on which RMS speed depends for an ideal gas.", options: ["Absolute temperature", "Molecular mass", "Number of molecules", "Molar mass"], answers: [0, 1, 3], marks: 3, explanation: "The amount of gas does not appear in the RMS-speed formula." },
    ],
    summary: [
      "Absolute temperature is directly proportional to mean translational kinetic energy.",
      "$v_{rms}=\\sqrt{3RT/M}$, so lighter gases and hotter gases have greater RMS speeds.",
      "Different gases at the same temperature have equal mean translational kinetic energy.",
      "The constants $k$, $R$ and $N_A$ connect particle-scale and mole-scale descriptions.",
    ],
  },
  {
    chapterSlug: "statistical-foundations",
    slug: "boltzmann-distribution-and-statistical-physics",
    title: "Boltzmann Distribution and Statistical Physics",
    mode: "boltzmann-population",
    objectives: [
      "Explain why statistical methods are essential for macroscopic systems.",
      "Use the Boltzmann factor to compare populations of two energy states.",
      "Describe how temperature changes the distribution among energy levels.",
      "Interpret $kT$ as a characteristic thermal-energy scale.",
    ],
    introduction: [
      "A macroscopic gas contains far too many molecules to track individually. Statistical physics therefore predicts probabilities, average energies and populations. Maxwell developed the statistical distribution of molecular speeds, and Boltzmann related equilibrium populations to energy. Higher-energy states are exponentially less probable than lower-energy states at thermal equilibrium.",
    ],
    definitions: [
      { title: "Macrostate", text: "A bulk state specified by variables such as temperature, pressure and volume." },
      { title: "Microstate", text: "One detailed microscopic arrangement compatible with a macrostate." },
      { title: "Boltzmann factor", text: "$e^{-E/kT}$, the relative statistical weight associated with energy $E$ in thermal equilibrium." },
    ],
    theory: [
      {
        heading: "Population ratios",
        paragraphs: [
          "For two non-degenerate energy states $E_1$ and $E_2$, the equilibrium population ratio is $N_2/N_1=e^{-(E_2-E_1)/kT}$. A large positive energy gap produces a small upper-state population.",
          "Raising temperature increases $kT$, making the exponential suppression weaker. Populations become more evenly spread among accessible energy states, though the lower state remains more populated for a positive gap.",
        ],
      },
      {
        heading: "Statistical meaning of temperature",
        paragraphs: [
          "The scale $kT$ compares thermal agitation with an energy difference. If $\\Delta E\\ll kT$, both states can have comparable populations. If $\\Delta E\\gg kT$, the higher state is rarely occupied.",
        ],
      },
    ],
    formulae: [
      { latex: "\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}", caption: "Boltzmann population ratio for two states of equal degeneracy." },
      { latex: "P_i=\\frac{e^{-E_i/(kT)}}{Z}", caption: "Normalized probability, where $Z$ is the partition function." },
      { latex: "Z=\\sum_i e^{-E_i/(kT)}", caption: "Partition function for a discrete set of energy states." },
      { latex: "f(v)=4\\pi\\left(\\frac{m}{2\\pi kT}\\right)^{3/2}v^2e^{-mv^2/(2kT)}", caption: "Maxwell-Boltzmann speed distribution for an ideal gas in three dimensions." },
    ],
    image: { src: "/physics/thermal/boltzmann-distribution.svg", alt: "Exponential Boltzmann population curves at two temperatures", caption: "Higher temperature makes high-energy states relatively more populated." },
    examples: [
      { prompt: "At 300 K, two levels differ by 0.050 eV. Find $N_2/N_1$.", steps: ["Use $k=8.617\\times10^{-5}$ eV K⁻¹.", "$kT=0.02585$ eV.", "$N_2/N_1=e^{-0.050/0.02585}=0.145$."], answer: "The upper level has about 14.5% of the lower-level population." },
      { prompt: "For the same 0.050 eV gap at 600 K, find the population ratio.", steps: ["$kT=8.617\\times10^{-5}(600)=0.05170$ eV.", "$N_2/N_1=e^{-0.050/0.05170}=0.380$."], answer: "About 0.38; heating increases the relative upper-state population." },
      { prompt: "If $N_2/N_1=e^{-2}$, what is the ratio numerically?", steps: ["Evaluate $e^{-2}$.", "$e^{-2}=0.1353$."], answer: "Approximately 0.135." },
      { prompt: "A state lies far above the thermal scale, $\\Delta E=10kT$. Is it significantly populated?", steps: ["$N_2/N_1=e^{-10}$.", "$e^{-10}=4.54\\times10^{-5}$."], answer: "No. Its equilibrium population is extremely small relative to the lower state." },
    ],
    applications: [
      { area: "Spectroscopy", text: "Line intensities depend partly on populations of molecular or atomic energy levels." },
      { area: "Chemistry", text: "Thermally activated processes contain exponential Boltzmann factors." },
      { area: "Atmospheres", text: "Molecular populations and speeds are treated statistically over huge particle numbers." },
      { area: "Astrophysics", text: "Ionization, excitation and stellar spectra depend on thermal population distributions." },
    ],
    mistakes: [
      { wrong: "Higher-energy states are never occupied.", right: "They are less probable, not impossible, at finite temperature." },
      { wrong: "The exponent uses Celsius temperature.", right: "Use absolute temperature in kelvin." },
      { wrong: "A larger energy gap increases the upper-state population.", right: "It makes the exponent more negative and decreases the population." },
    ],
    practice: [
      { prompt: "At fixed energy gap, increasing temperature makes $N_2/N_1$", options: ["decrease toward zero", "increase toward one", "become negative", "remain exactly fixed"], answer: 1, explanation: "The magnitude of the negative exponent decreases." },
      { prompt: "The Boltzmann factor is", options: ["$e^{E/kT}$", "$e^{-E/kT}$", "$E/kT$", "$kT/E$"], answer: 1, explanation: "The negative exponent suppresses high-energy states." },
      { prompt: "Statistical physics is needed mainly because", options: ["molecules have no energy", "there are too many particles to track individually", "pressure is zero", "temperature is not measurable"], answer: 1, explanation: "Macroscopic systems contain enormous numbers of particles." },
      { prompt: "If $\\Delta E=0$, the population ratio for equal degeneracy is", options: ["0", "1", "$e$", "infinite"], answer: 1, explanation: "$e^0=1$." },
      { prompt: "The partition function is used to", options: ["normalize probabilities", "measure length", "create gravity", "remove all randomness"], answer: 0, explanation: "$Z$ is the sum of Boltzmann weights." },
    ],
    quiz: [
      { type: "mc", prompt: "Which condition makes two energy levels most equally populated?", options: ["$\\Delta E\\gg kT$", "$\\Delta E\\ll kT$", "$T=0$", "Very large positive gap and low T"], answer: 1, marks: 2, explanation: "A small gap compared with the thermal scale gives a ratio near one." },
      { type: "tf", prompt: "The Boltzmann distribution is a deterministic list of every molecule's trajectory.", answer: false, marks: 2, explanation: "It is a statistical population law." },
      { type: "multi", prompt: "Increasing which quantities reduces the upper-to-lower population ratio?", options: ["Energy gap", "Temperature", "Inverse temperature", "Boltzmann constant"], answers: [0, 2], marks: 3, explanation: "A larger gap or lower temperature makes the negative exponent more severe." },
    ],
    summary: [
      "Statistical physics describes macroscopic matter using probabilities and averages.",
      "The Boltzmann factor exponentially suppresses high-energy states.",
      "Temperature sets the characteristic energy scale $kT$.",
      "The partition function normalizes probabilities and organizes thermodynamic calculations.",
    ],
  },
  {
    chapterSlug: "astrophysics-and-cosmology",
    slug: "stellar-physics-and-evolution",
    title: "Stellar Physics and Evolution",
    mode: "stellar-equilibrium",
    extraModes: ["stellar-evolution"],
    objectives: [
      "Explain hydrostatic equilibrium as the balance of inward gravity and outward pressure gradients.",
      "Describe the formation of a protostar and the onset of nuclear fusion.",
      "Relate a star's initial mass to its evolutionary pathway and final remnant.",
      "Use a simplified gravitational-pressure estimate critically.",
    ],
    introduction: [
      "A stable star is neither exploding outward nor collapsing inward. Gravity pulls each layer toward the centre, while pressure decreases outward and produces an opposing force. This balance is hydrostatic equilibrium. The pressure is maintained by thermal particles, radiation and, in compact remnants, quantum effects.",
    ],
    definitions: [
      { title: "Hydrostatic equilibrium", text: "Local balance between the inward gravitational force per unit volume and the outward pressure-gradient force." },
      { title: "Protostar", text: "A contracting cloud fragment heated by gravitational energy before sustained hydrogen fusion begins." },
      { title: "Main sequence", text: "Long-lived stage in which core hydrogen fusion supplies energy and supports a star." },
    ],
    theory: [
      {
        heading: "Local balance inside a star",
        paragraphs: [
          "Pressure is greatest near the centre and falls toward the surface. A small spherical shell experiences a net outward pressure force because pressure on its inner face exceeds pressure on its outer face. Gravity acts inward.",
          "The exact stellar-structure equation is $dP/dr=-GM_r\\rho/r^2$. The negative sign means pressure decreases as radius increases. A rough whole-star pressure scale is proportional to $GM^2/R^4$, but real central pressure depends on density profile and composition.",
        ],
      },
      {
        heading: "Formation and evolution",
        paragraphs: [
          "Stars form in cold clouds of gas and dust. Gravitational contraction converts gravitational potential energy into thermal energy. When the central temperature becomes high enough, hydrogen fusion begins and the star settles onto the main sequence.",
          "After core hydrogen is depleted, the core contracts and outer layers expand. Low- and intermediate-mass stars end as white dwarfs after shedding outer layers. Massive stars develop successive fusion stages and can undergo core-collapse supernovae, leaving neutron stars or black holes.",
        ],
      },
    ],
    formulae: [
      { latex: "\\frac{dP}{dr}=-\\frac{GM_r\\rho}{r^2}", caption: "Hydrostatic-equilibrium equation." },
      { latex: "P_{grav}\\sim\\frac{GM^2}{8\\pi R^4}", caption: "Simplified pressure scale used for order-of-magnitude comparisons, not an exact universal central pressure." },
      { latex: "g=\\frac{GM}{R^2}", caption: "Surface gravitational field." },
    ],
    image: { src: "/physics/thermal/stellar-evolution.svg", alt: "Stellar life cycle from nebula through main sequence to white dwarf, neutron star or black hole", caption: "Initial mass largely determines the star's lifetime and final remnant." },
    examples: [
      { prompt: "A star has mass $2.0\\times10^{30}$ kg and radius $7.0\\times10^8$ m. Estimate $GM^2/(8\\pi R^4)$.", steps: ["Substitute into the pressure-scale expression.", "$P\\sim(6.67\\times10^{-11})(2.0\\times10^{30})^2/[8\\pi(7.0\\times10^8)^4]$.", "$P\\sim4.4\\times10^{13}$ Pa."], answer: "An order-of-magnitude gravitational pressure scale of about $4\\times10^{13}$ Pa." },
      { prompt: "What happens if inward gravity temporarily exceeds the pressure-gradient force?", steps: ["The star contracts.", "Contraction releases gravitational energy and raises central temperature and pressure.", "The response may restore balance or trigger a new fusion stage."], answer: "The star contracts and heats until a new balance or collapse outcome is reached." },
      { prompt: "Why do massive stars have shorter lifetimes despite containing more fuel?", steps: ["Greater mass creates much higher central pressure and temperature.", "Fusion rates and luminosity rise very steeply with mass.", "Fuel is consumed disproportionately faster."], answer: "Their much higher energy output outweighs their larger fuel supply." },
      { prompt: "A star has the Sun's mass but half the Sun's radius. Compare surface gravity.", steps: ["$g\\propto M/R^2$.", "Mass is unchanged and radius is halved.", "$g$ increases by $1/(1/2)^2=4$."], answer: "Surface gravity is four times as large." },
    ],
    applications: [
      { area: "Stellar models", text: "Hydrostatic equilibrium is one of the central equations solved in stellar-structure calculations." },
      { area: "Solar physics", text: "The Sun's pressure and fusion output determine its stable main-sequence lifetime." },
      { area: "Supernovae", text: "Loss of pressure support in a massive core can trigger catastrophic collapse." },
      { area: "Element formation", text: "Successive stellar fusion and supernovae create and disperse many chemical elements." },
    ],
    mistakes: [
      { wrong: "Hydrostatic equilibrium means no forces act.", right: "Large inward and outward forces act but balance locally." },
      { wrong: "Every star follows the same final path.", right: "Initial mass strongly controls whether the remnant is a white dwarf, neutron star or black hole." },
      { wrong: "The simplified pressure estimate is exact at every radius.", right: "It is only an order-of-magnitude whole-star scale." },
    ],
    practice: [
      { prompt: "Hydrostatic equilibrium balances", options: ["gravity and pressure gradient", "charge and current", "mass and temperature", "rotation and colour"], answer: 0, explanation: "Gravity acts inward while decreasing pressure produces an outward force." },
      { prompt: "A protostar is powered mainly by", options: ["sustained hydrogen fusion", "gravitational contraction", "radio waves", "chemical burning"], answer: 1, explanation: "Before stable fusion, contraction heats the protostar." },
      { prompt: "A low-mass star most commonly ends as", options: ["white dwarf", "black hole", "quasar", "planet"], answer: 0, explanation: "After envelope loss, the degenerate core remains as a white dwarf." },
      { prompt: "The negative sign in $dP/dr$ indicates", options: ["pressure increases outward", "pressure decreases outward", "mass is negative", "gravity is absent"], answer: 1, explanation: "Pressure is highest near the centre." },
      { prompt: "More massive main-sequence stars generally", options: ["live longer", "consume fuel faster", "have no fusion", "are colder"], answer: 1, explanation: "Their luminosities and fusion rates are much greater." },
    ],
    quiz: [
      { type: "mc", prompt: "If pressure support becomes too weak in a stellar core, the immediate tendency is", options: ["expansion", "contraction", "no change", "loss of gravity"], answer: 1, marks: 2, explanation: "Inward gravity then dominates." },
      { type: "tf", prompt: "Hydrogen fusion begins during the cold molecular-cloud stage.", answer: false, marks: 2, explanation: "The cloud must contract and heat into a protostar first." },
      { type: "multi", prompt: "Select likely outcomes of massive-star core collapse.", options: ["Neutron star", "Black hole", "White dwarf only", "Supernova explosion"], answers: [0, 1, 3], marks: 3, explanation: "White dwarfs are typical low/intermediate-mass remnants." },
    ],
    summary: [
      "Stable stars satisfy hydrostatic equilibrium between gravity and pressure gradients.",
      "Gravitational contraction forms a hot protostar and eventually ignites fusion.",
      "Initial mass controls luminosity, lifetime and final remnant.",
      "Low-mass stars form white dwarfs; massive stars can produce supernovae, neutron stars and black holes.",
    ],
  },
  {
    chapterSlug: "astrophysics-and-cosmology",
    slug: "neutron-stars-pulsars-and-the-life-cycle-of-the-sun",
    title: "Neutron Stars, Pulsars and the Life Cycle of the Sun",
    mode: "neutron-star-pulsar",
    objectives: [
      "Describe how neutron stars form and why they are extraordinarily dense.",
      "Explain pulsar radiation using rotation and magnetic-field geometry.",
      "Outline the major stages in the Sun's life cycle.",
      "Compare white dwarfs, neutron stars and black holes as compact remnants.",
    ],
    introduction: [
      "When a massive stellar core collapses, electrons and protons can combine to form neutron-rich matter. If the remnant mass is within the neutron-star stability range, neutron degeneracy and nuclear interactions halt further collapse. The resulting object packs roughly stellar mass into a sphere only tens of kilometres across.",
    ],
    definitions: [
      { title: "Neutron star", text: "A compact stellar remnant supported primarily by neutron degeneracy and nuclear forces." },
      { title: "Pulsar", text: "A rotating magnetized neutron star whose beams of radiation produce periodic pulses when they sweep across Earth." },
      { title: "Planetary nebula", text: "Glowing outer layers expelled by a low/intermediate-mass star near the end of its life; it is not a planet." },
      { title: "Chandrasekhar limit", text: "The approximate 1.4-solar-mass upper limit for a cold non-rotating white dwarf supported by electron degeneracy pressure." },
    ],
    theory: [
      {
        heading: "Why pulsars pulse",
        paragraphs: [
          "Core collapse conserves angular momentum, so the remnant spins rapidly. Magnetic flux is also compressed, creating an intense field. Charged particles are accelerated along magnetic-field regions and emit radiation in beams near the magnetic poles.",
          "If the magnetic axis is tilted relative to the rotation axis, a beam can sweep past the observer once or twice per rotation. The observed regularity makes pulsars exceptionally precise natural clocks.",
        ],
      },
      {
        heading: "The Sun's future",
        paragraphs: [
          "The Sun formed from a nebula, passed through a protostar stage and is now a main-sequence star powered by hydrogen fusion. After core hydrogen depletion, it will expand into a red giant, expel a planetary nebula and leave a white dwarf.",
          "The Sun is not massive enough to undergo an iron-core collapse or become a neutron star or black hole through ordinary single-star evolution.",
        ],
      },
    ],
    formulae: [
      { latex: "\\rho=\\frac{M}{\\frac43\\pi R^3}", caption: "Mean density of a compact remnant." },
      { latex: "g=\\frac{GM}{R^2}", caption: "Surface gravity grows enormously as radius shrinks." },
      { latex: "L=I\\omega", caption: "Conservation of angular momentum explains spin-up during collapse when moment of inertia decreases." },
    ],
    examples: [
      { prompt: "Estimate the mean density of a 1.4-solar-mass neutron star of radius 12 km.", steps: ["$M=1.4(1.989\\times10^{30})=2.78\\times10^{30}$ kg; $R=1.2\\times10^4$ m.", "$V=4\\pi R^3/3=7.24\\times10^{12}$ m³.", "$\\rho=M/V=3.84\\times10^{17}$ kg m⁻³."], answer: "Approximately $4\\times10^{17}$ kg m⁻³." },
      { prompt: "A pulsar rotates 20 times per second. Find its period.", steps: ["Period $T=1/f$.", "$T=1/20=0.050$ s."], answer: "0.050 s, or 50 ms." },
      { prompt: "Why does a collapsing stellar core spin faster?", steps: ["Angular momentum is approximately conserved.", "Collapse greatly reduces moment of inertia.", "Therefore angular speed must increase."], answer: "Conservation of angular momentum causes rotational spin-up." },
      { prompt: "Identify the Sun's final compact remnant.", steps: ["The Sun is a low/intermediate-mass star.", "It will shed its outer layers after the red-giant phase.", "The remaining degenerate core is below the neutron-star threshold."], answer: "A white dwarf." },
    ],
    applications: [
      { area: "Precision timing", text: "Stable pulsar periods are used to test gravity and search for gravitational-wave backgrounds." },
      { area: "Extreme-matter physics", text: "Neutron stars probe matter at densities unavailable in terrestrial laboratories." },
      { area: "Navigation research", text: "X-ray pulsars can serve as natural beacons for autonomous spacecraft navigation." },
      { area: "Solar evolution", text: "Understanding the Sun's life cycle provides the timescale for Earth's long-term habitability." },
    ],
    mistakes: [
      { wrong: "A pulsar physically turns its beam on and off.", right: "The beam is usually continuous; rotation sweeps it across the observer." },
      { wrong: "The Sun will become a black hole.", right: "Its mass is far too small for ordinary core-collapse black-hole formation." },
      { wrong: "A planetary nebula is a forming planetary system.", right: "It is expelled stellar gas surrounding a dying low-mass star." },
    ],
    practice: [
      { prompt: "Pulses are observed because", options: ["the star repeatedly explodes", "a radiation beam sweeps past Earth", "gravity switches off", "the star changes mass each second"], answer: 1, explanation: "The lighthouse geometry produces periodic signals." },
      { prompt: "A neutron star's high density results from", options: ["large radius", "stellar mass compressed into a tiny volume", "low gravity", "absence of matter"], answer: 1, explanation: "Its radius is only of order tens of kilometres." },
      { prompt: "The Sun's likely final remnant is", options: ["white dwarf", "neutron star", "black hole", "pulsar"], answer: 0, explanation: "The Sun is not massive enough for core collapse." },
      { prompt: "During collapse, angular speed generally", options: ["decreases", "increases", "becomes zero", "is unrelated to radius"], answer: 1, explanation: "Moment of inertia decreases while angular momentum is approximately conserved." },
      { prompt: "The magnetic and rotation axes of a visible pulsar are typically", options: ["exactly aligned", "misaligned", "absent", "always perpendicular"], answer: 1, explanation: "Misalignment allows the beam to sweep across space." },
    ],
    quiz: [
      { type: "mc", prompt: "Which remnant is supported primarily by electron degeneracy pressure?", options: ["White dwarf", "Neutron star", "Black hole", "Main-sequence star"], answer: 0, marks: 2, explanation: "Neutron stars involve neutron degeneracy; white dwarfs involve electron degeneracy." },
      { type: "tf", prompt: "A pulsar can be a neutron star.", answer: true, marks: 2, explanation: "Pulsars are rotating magnetized neutron stars observed through periodic beams." },
      { type: "multi", prompt: "Select stages in the Sun's expected evolution.", options: ["Red giant", "Planetary nebula", "White dwarf", "Core-collapse supernova"], answers: [0, 1, 2], marks: 3, explanation: "The Sun lacks sufficient mass for a core-collapse supernova." },
    ],
    summary: [
      "Neutron stars are ultradense remnants of massive-star core collapse.",
      "Pulsars are rotating neutron stars whose magnetic beams sweep past observers.",
      "Collapse produces rapid rotation and intense magnetic fields.",
      "The Sun will become a red giant, planetary nebula and white dwarf, not a neutron star or black hole.",
    ],
  },
  {
    chapterSlug: "kinetic-theory-of-gases",
    slug: "thermal-physics-comprehensive-review",
    title: "Thermal Physics Comprehensive Review",
    mode: "thermal-review",
    objectives: [
      "Integrate Brownian motion, ideal-gas laws, kinetic pressure, RMS speed and Boltzmann statistics.",
      "Solve mixed numerical problems with correct units and absolute temperature.",
      "Connect microscopic thermal physics with stellar structure and evolution.",
      "Prepare for conceptual, multiple-choice, short-answer and extended-response assessments.",
    ],
    introduction: [
      "This review connects the entire thermal-physics sequence. It begins with molecular randomness, builds the ideal-gas and pressure equations, relates temperature to kinetic energy, introduces statistical populations and finishes with thermal pressure in stars.",
    ],
    definitions: [
      { title: "Thermal model chain", text: "Random motion → collisions → pressure → energy-temperature relation → statistical populations → macroscopic and astrophysical behaviour." },
      { title: "Reasonableness check", text: "A final verification using units, limiting cases, proportionality and expected physical scale." },
      { title: "Absolute temperature", text: "Temperature measured from absolute zero; kelvin must be used in gas and Boltzmann equations." },
    ],
    theory: [
      {
        heading: "Core relationships",
        paragraphs: [
          "The ideal-gas equation and kinetic-pressure equation describe the same gas from macroscopic and microscopic viewpoints. Equating them produces the mean kinetic-energy relation. Boltzmann statistics then describe how this energy is distributed among states.",
          "In stars, particle and radiation pressure contribute to hydrostatic support. When pressure support changes because of fuel exhaustion or core transformations, the star contracts, expands or collapses into a compact remnant.",
        ],
      },
      {
        heading: "Problem-solving sequence",
        paragraphs: ["Identify the physical model, list SI values, convert temperature to kelvin, choose the appropriate equation, substitute with units, calculate, and interpret the result."],
        list: [
          "Use $PV=nRT$ or $PV=NkT$ for gas-state calculations.",
          "Use $P=\\tfrac13\\rho v_{rms}^2$ for pressure-speed-density problems.",
          "Use $v_{rms}=\\sqrt{3RT/M}$ for molecular-speed comparisons.",
          "Use $N_2/N_1=e^{-\\Delta E/kT}$ for equilibrium populations.",
          "Use hydrostatic balance qualitatively for stellar stability.",
        ],
      },
    ],
    formulae: [
      { latex: "PV=nRT=NkT", caption: "Ideal-gas descriptions." },
      { latex: "P=\\frac13\\rho v_{rms}^2", caption: "Kinetic pressure equation." },
      { latex: "\\langle K\\rangle=\\frac32kT", caption: "Average translational kinetic energy." },
      { latex: "\\frac{N_2}{N_1}=e^{-\\Delta E/(kT)}", caption: "Boltzmann population ratio." },
      { latex: "\\frac{dP}{dr}=-\\frac{GM_r\\rho}{r^2}", caption: "Stellar hydrostatic equilibrium." },
    ],
    examples: [
      { prompt: "A gas at 300 K and pressure $3.2\\times10^5$ Pa has density 6.0 kg m⁻³. Find RMS speed.", steps: ["Use $v_{rms}=\\sqrt{3P/\\rho}$.", "$v_{rms}=\\sqrt{3(3.2\\times10^5)/6.0}$.", "$v_{rms}=400$ m s⁻¹."], answer: "400 m s⁻¹." },
      { prompt: "A sealed rigid gas is heated from 300 K to 900 K. Find the pressure factor.", steps: ["Amount and volume are fixed.", "$P\\propto T$.", "$P_2/P_1=900/300=3$."], answer: "Pressure triples." },
      { prompt: "At room temperature, compare mean translational KE of O₂ and N₂.", steps: ["Both gases share the same absolute temperature.", "$\\langle K\\rangle=3kT/2$ does not contain molecular mass."], answer: "They have equal mean translational kinetic energy." },
      { prompt: "A star's representative internal pressure falls below the pressure required to balance gravity. Predict the immediate change.", steps: ["Gravity becomes the larger inward influence.", "The star or core contracts.", "Contraction raises temperature and may ignite a new reaction stage or lead to collapse."], answer: "Contraction and heating occur." },
    ],
    applications: [
      { area: "Engineering", text: "Gas laws and kinetic theory support engines, compressors, turbines and vacuum systems." },
      { area: "Meteorology", text: "Molecular motion underlies atmospheric pressure and diffusion." },
      { area: "Statistical science", text: "Boltzmann factors occur whenever systems exchange energy with a thermal environment." },
      { area: "Astrophysics", text: "Thermal and statistical physics explain stellar pressure, fusion and compact remnants." },
    ],
    mistakes: [
      { wrong: "Mixing molar mass in g mol⁻¹ with SI equations.", right: "Convert to kg mol⁻¹ before using $v_{rms}=\\sqrt{3RT/M}$." },
      { wrong: "Assuming average velocity equals RMS speed.", right: "Average velocity can vanish while RMS speed is positive." },
      { wrong: "Treating equilibrium as absence of forces.", right: "Equilibrium is a balance of competing forces or rates." },
    ],
    practice: [
      { prompt: "Which equation directly links pressure, density and RMS speed?", options: ["$PV=nRT$", "$P=\\tfrac13\\rho v_{rms}^2$", "$E=mc^2$", "$F=ma$"], answer: 1, explanation: "This is the kinetic pressure equation." },
      { prompt: "At fixed molar mass, RMS speed varies as", options: ["$T$", "$T^2$", "$\\sqrt T$", "$1/T$"], answer: 2, explanation: "It follows from the square-root formula." },
      { prompt: "A positive energy gap at finite temperature gives $N_2/N_1$", options: ["greater than 1", "between 0 and 1", "negative", "undefined"], answer: 1, explanation: "The exponential of a negative number lies between zero and one." },
      { prompt: "If gravity dominates pressure support in a star, it tends to", options: ["contract", "expand indefinitely", "lose mass instantly", "stop rotating"], answer: 0, explanation: "The net force is inward." },
      { prompt: "Which temperature scale must be used in thermal equations?", options: ["Celsius", "Fahrenheit", "Kelvin", "Any scale without conversion"], answer: 2, explanation: "The equations require absolute temperature." },
    ],
    quiz: [
      { type: "mc", prompt: "Which quantity is the same for different ideal gases at the same temperature?", options: ["RMS speed", "Molecular mass", "Mean translational KE", "Momentum of every molecule"], answer: 2, marks: 2, explanation: "$\\langle K\\rangle=3kT/2$." },
      { type: "tf", prompt: "Doubling the number of molecules in a fixed volume at fixed temperature doubles ideal-gas pressure.", answer: true, marks: 2, explanation: "$P=NkT/V$." },
      { type: "matching", prompt: "Match each concept with its key relation.", left: ["Ideal gas", "Kinetic pressure", "Boltzmann ratio", "Hydrostatic equilibrium"], options: ["$PV=nRT$", "$P=\\tfrac13\\rho v^2$", "$e^{-\\Delta E/kT}$", "$dP/dr=-GM_r\\rho/r^2$"], answer: [0, 1, 2, 3], marks: 4, explanation: "These equations connect the major sections of the course." },
    ],
    summary: [
      "Molecular randomness explains diffusion and Brownian motion.",
      "Ideal-gas pressure emerges from repeated elastic wall collisions.",
      "Temperature determines average translational kinetic energy and molecular speed scales.",
      "Boltzmann statistics predicts energy-state populations.",
      "Thermal pressure and gravity shape the lives and deaths of stars.",
    ],
  },
];

function lessonFromSpec(spec: ThermalSpec): LessonContent {
  const completionKey = `thermal-${spec.slug}`;
  return {
    subjectSlug: "physics",
    chapterSlug: spec.chapterSlug,
    lessonSlug: spec.slug,
    title: spec.title,
    objectives: spec.objectives,
    sections: [
      { kind: "overview", paragraphs: spec.introduction },
      {
        kind: "cards",
        heading: "Key definitions",
        columns: 3,
        items: spec.definitions.map((item) => ({ title: item.title, text: item.text })),
      },
      ...spec.theory.map((section) => ({ kind: "theory" as const, ...section })),
      ...(spec.image ? [{ kind: "imageGallery" as const, heading: "Concept illustration", images: [spec.image] }] : []),
      { kind: "thermalPhysicsExplorer", heading: "Interactive thermal-physics laboratory", mode: spec.mode },
      ...(spec.extraModes ?? []).map((mode) => ({ kind: "thermalPhysicsExplorer" as const, heading: "Interactive concept extension", mode })),
      ...spec.formulae.map((formula) => ({ kind: "formula" as const, latex: formula.latex, caption: formula.caption })),
      { kind: "callout", variant: "remember", title: "Scientific reasoning", body: "Always use absolute temperature, SI units and a clear microscopic or macroscopic model. Check the final units and test whether the result follows the expected proportionality." },
      ...spec.examples.map((example) => ({ kind: "example" as const, ...example })),
      { kind: "realWorld", heading: "Applications", items: spec.applications },
      { kind: "mistakes", items: spec.mistakes },
      { kind: "practice", heading: "Practice questions", stepKey: completionKey, questions: spec.practice },
      { kind: "gradedQuiz", heading: "Mastery check", passMark: 5, questions: spec.quiz },
      { kind: "summary", points: spec.summary },
      { kind: "completion", steps: [{ key: completionKey, label: "Complete the practice questions" }], requireQuizPass: true },
    ],
  };
}

export const thermalPhysicsCourse: LessonContent[] = specs.map(lessonFromSpec);
