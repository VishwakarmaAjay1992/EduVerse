import type { LessonContent, PracticeQuestion, GradedQuestion } from "@/lib/lesson-content-types";
import type { CurrentElectricityMode } from "@/components/interactive/current-electricity-explorer";

type WorkedExample = { prompt: string; steps: string[]; answer: string };

type CurrentSpec = {
  chapterSlug: "current-and-resistance" | "circuits";
  slug: string;
  title: string;
  mode: CurrentElectricityMode;
  extraModes?: CurrentElectricityMode[];
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

const specs: CurrentSpec[] = [
  {
    chapterSlug: "current-and-resistance",
    slug: "electric-current-charge-flow-and-current-density",
    title: "Electric Current, Charge Flow and Current Density",
    mode: "current-flow",
    objectives: [
      "Define average and instantaneous current and use the correct SI units.",
      "Explain conventional-current direction and distinguish current from electron drift.",
      "Calculate current produced by translational or circular charge motion.",
      "Use current density as a vector field and relate it to current through an oriented area.",
      "Identify charge carriers in metals, electrolytes, gases and semiconductors.",
    ],
    introduction: [
      "Electric current measures how rapidly charge crosses a chosen surface. It is one of the central rate quantities in physics: the same current can flow through every cross-section of a steady series circuit even when the wire thickness changes.",
      "Although a current is assigned a conventional direction, circuit current is treated as a scalar because branch currents combine algebraically. Current density is the associated vector quantity that describes both magnitude and local direction of charge transport.",
    ],
    definitions: [
      { title: "Average current", text: "Charge transferred per time interval: $I_{av}=\Delta Q/\Delta t$." },
      { title: "Instantaneous current", text: "The limiting charge-flow rate at one instant: $I=dQ/dt$." },
      { title: "Current density", text: "A vector whose normal flux through a surface gives the current: $I=\int \mathbf J\cdot d\mathbf A$." },
      { title: "Conventional current", text: "Direction in which positive charge would move; in a metal it is opposite to electron drift." },
      { title: "Charge carrier", text: "A mobile charged particle: electrons in metals, ions in electrolytes, and electrons plus holes in semiconductors." },
      { title: "Direct current", text: "Current whose direction remains fixed; its magnitude may be constant or pulsating." },
    ],
    theory: [
      {
        heading: "Current as a rate of charge transfer",
        paragraphs: [
          "If $\Delta Q$ crosses a conductor cross-section in time $\Delta t$, the average current is $I_{av}=\Delta Q/\Delta t$. For a varying flow, the instantaneous current is the derivative $dQ/dt$. One ampere is one coulomb per second.",
          "A current-carrying metal remains electrically neutral overall. Current is produced by a tiny organized drift superimposed on enormous random thermal motion, not by a net accumulation of charge throughout the wire.",
        ],
        list: [
          "Current is the same at successive cross-sections in steady state because charge does not continuously accumulate.",
          "For $N$ identical particles of charge $q$ crossing in time $t$, $I=Nq/t$.",
          "A charge $q$ circulating with frequency $f$ produces an equivalent current $I=qf=q/T$.",
        ],
      },
      {
        heading: "Current density and oriented area",
        paragraphs: [
          "For uniform current normal to area $A$, $J=I/A$. If the surface normal makes angle $\theta$ with $\mathbf J$, the current is $I=JA\cos\theta$. This is a flux relation and explains why current density, unlike current, is a vector.",
          "For moving charge with number density $n$, carrier charge $q$ and mean directed velocity $\mathbf v$, $\mathbf J=nq\mathbf v$. The sign of $q$ automatically gives the correct direction of conventional current density.",
        ],
      },
    ],
    formulae: [
      { latex: "I_{av}=\frac{\Delta Q}{\Delta t},\qquad I=\frac{dQ}{dt}", caption: "Average and instantaneous electric current." },
      { latex: "I=\int \mathbf J\cdot d\mathbf A,\qquad I=JA\cos\theta\ \text{for uniform }\mathbf J", caption: "Current is the flux of current density." },
      { latex: "\mathbf J=nq\mathbf v,\qquad I=nqAv", caption: "Microscopic charge-transport relation for uniform directed motion." },
      { latex: "I=qf=\frac{q}{T}=\frac{q\omega}{2\pi}", caption: "Equivalent current for one charge completing repeated circular revolutions." },
    ],
    image: { src: "/physics/current-electricity/current-and-density.svg", alt: "Conventional current, electron motion and current density through a wire", caption: "Current is conserved through a steady conductor while current density and drift speed change when cross-sectional area changes." },
    examples: [
      { prompt: "A charge of 18 C crosses a section in 6 s. Find the average current.", steps: ["Use $I=Q/t$.", "$I=18/6$ A."], answer: "$I=3.0$ A." },
      { prompt: "The charge passing a surface is $Q(t)=4t^2+3t$ coulombs. Find the current at $t=2$ s.", steps: ["Instantaneous current is $I=dQ/dt$.", "$I=8t+3$.", "At $t=2$ s, $I=19$ A."], answer: "$19$ A." },
      { prompt: "A 2.0 A current flows through a wire of area $0.50\text{ mm}^2$. Find current density.", steps: ["Convert area: $0.50\text{ mm}^2=5.0\times10^{-7}\text{ m}^2$.", "$J=I/A=2.0/(5.0\times10^{-7})$."], answer: "$J=4.0\times10^6\text{ A m}^{-2}$." },
      { prompt: "An electron completes $6.8\times10^{15}$ revolutions each second. Find the magnitude of the equivalent current.", steps: ["Use $I=ef$.", "$I=(1.602\times10^{-19})(6.8\times10^{15})$ A."], answer: "$I\approx1.09\times10^{-3}$ A." },
    ],
    applications: [
      { area: "Particle beams", text: "Beam current measures the number of charged particles arriving per second in accelerators and X-ray tubes." },
      { area: "Electrochemistry", text: "Ions carry current through batteries, electroplating cells and electrolyzers." },
      { area: "Semiconductors", text: "Electrons and holes both contribute to current density in electronic devices." },
      { area: "Circuit safety", text: "Current ratings specify how much charge flow a wire or component can carry without excessive heating." },
    ],
    mistakes: [
      { wrong: "Treating conventional current as the direction electrons move.", right: "In metals, electrons drift opposite to conventional current." },
      { wrong: "Using square millimetres directly in an SI calculation.", right: "Convert $1\text{ mm}^2$ to $10^{-6}\text{ m}^2$." },
      { wrong: "Calling current density a scalar.", right: "$\mathbf J$ is a vector; current is its surface flux." },
    ],
    practice: [
      { prompt: "One ampere is equivalent to", options: ["1 J s⁻¹", "1 C s⁻¹", "1 V C⁻¹", "1 Ω V⁻¹"], answer: 1, explanation: "Current is charge per unit time." },
      { prompt: "In a steady wire whose area decreases, the current", options: ["increases", "decreases", "remains the same", "becomes zero"], answer: 2, explanation: "Charge conservation requires the same steady current through each cross-section." },
      { prompt: "For fixed current, current density is greatest where area is", options: ["largest", "smallest", "zero only", "unrelated"], answer: 1, explanation: "$J=I/A$." },
      { prompt: "The current carriers in an electrolyte are", options: ["only electrons", "positive and negative ions", "only holes", "photons"], answer: 1, explanation: "Both cations and anions transport charge." },
      { prompt: "A charge moving in a circle with period $T$ produces current", options: ["$qT$", "$T/q$", "$q/T$", "$2\pi qT$"], answer: 2, explanation: "One charge crosses a reference point once each period." },
    ],
    quiz: [
      { type: "mc", prompt: "A wire carries 4 A through area $2\times10^{-6}$ m². Its current density is", options: ["$2\times10^{-6}$", "$2\times10^6$", "$8\times10^{-6}$", "$8\times10^6$"], answer: 1, marks: 2, explanation: "$J=4/(2\times10^{-6})=2\times10^6$ A m⁻²." },
      { type: "tf", prompt: "Current is a vector because it has a conventional direction.", answer: false, marks: 2, explanation: "Circuit currents add algebraically; current density is the vector quantity." },
      { type: "multi", prompt: "Select every valid current carrier.", options: ["Free electrons in metal", "Ions in solution", "Holes in semiconductor", "Stationary lattice ions in a metal"], answers: [0,1,2], marks: 3, explanation: "Stationary lattice ions do not provide the mobile charge transport." },
    ],
    summary: [
      "Current is the rate at which charge crosses a surface.",
      "Conventional current is opposite to electron drift in a metal.",
      "Current density is a vector and current is its area flux.",
      "Charge carriers depend on the conducting medium.",
      "Steady current remains continuous through a series path even when area changes.",
    ],
  },
  {
    chapterSlug: "current-and-resistance",
    slug: "drift-velocity-mobility-and-microscopic-ohm-s-law",
    title: "Drift Velocity, Mobility and Microscopic Ohm's Law",
    mode: "drift-mobility",
    objectives: [
      "Explain random thermal electron motion, mean free path and relaxation time.",
      "Derive drift velocity from electric force and relaxation time.",
      "Relate current, number density, area and drift velocity.",
      "Define mobility, conductivity and microscopic Ohm's law.",
      "Explain why a small drift speed can still produce a large current.",
    ],
    introduction: [
      "Free electrons in a metal move rapidly and randomly, repeatedly colliding with the vibrating ionic lattice. Without an electric field, their vector-average velocity is zero and no net current flows.",
      "Applying an electric field adds a tiny average drift opposite to the field for electrons. The drift is slow, but the enormous carrier density makes the resulting current macroscopically large.",
    ],
    definitions: [
      { title: "Mean free path", text: "Average distance travelled by a carrier between successive collisions." },
      { title: "Relaxation time", text: "Average time interval between collisions, usually denoted $\tau$." },
      { title: "Drift velocity", text: "Small average directed velocity acquired by carriers in an applied field." },
      { title: "Mobility", text: "Drift speed per unit electric field: $\mu=|v_d|/E$." },
      { title: "Conductivity", text: "Proportionality constant in $\mathbf J=\sigma\mathbf E$." },
      { title: "Resistivity", text: "Reciprocal of conductivity: $\rho=1/\sigma$." },
    ],
    theory: [
      {
        heading: "From force to drift velocity",
        paragraphs: [
          "An electron in electric field $\mathbf E$ experiences force $-e\mathbf E$ and acceleration $\mathbf a=-e\mathbf E/m$. Between collisions it accelerates for an average time $\tau$. Averaging the random initial velocities gives $\mathbf v_d=-e\tau\mathbf E/m$.",
          "The minus sign gives electron drift opposite to the field. Conventional current density is in the field direction because the electron charge is also negative.",
        ],
      },
      {
        heading: "Microscopic Ohm's law",
        paragraphs: [
          "Substituting drift velocity into $\mathbf J=nq\mathbf v_d$ gives $\mathbf J=(ne^2\tau/m)\mathbf E$. Thus $\sigma=ne^2\tau/m$ and $\rho=m/(ne^2\tau)$.",
          "Increasing temperature in a metal generally increases lattice vibration, decreases relaxation time and therefore increases resistivity. This microscopic picture explains the positive temperature coefficient of ordinary metals.",
        ],
        list: [
          "Drift speed is proportional to electric field while the material remains ohmic.",
          "For a fixed steady current, $v_d\propto1/A$.",
          "The signal that establishes the field propagates rapidly; electrons do not travel from the switch to the lamp at light speed.",
        ],
      },
    ],
    formulae: [
      { latex: "\mathbf v_d=-\frac{e\tau}{m}\mathbf E", caption: "Electron drift velocity in the relaxation-time model." },
      { latex: "I=neAv_d,\qquad \mathbf J=ne\mathbf v_d", caption: "Current and current density in a metal, using drift-speed magnitude where appropriate." },
      { latex: "\mu=\frac{|v_d|}{E}=\frac{e\tau}{m}", caption: "Electron mobility." },
      { latex: "\mathbf J=\sigma\mathbf E,\qquad \sigma=\frac{ne^2\tau}{m},\qquad \rho=\frac{m}{ne^2\tau}", caption: "Microscopic Ohm's law and Drude conductivity." },
    ],
    image: { src: "/physics/current-electricity/drift-and-collisions.svg", alt: "Electron thermal motion, collisions and net drift in a metal", caption: "Random thermal motion averages to zero; an applied field creates a much smaller net drift." },
    examples: [
      { prompt: "A wire carries 2.0 A, has carrier density $8.5\times10^{28}$ m⁻³ and area $1.0\text{ mm}^2$. Find drift speed.", steps: ["Use $v_d=I/(neA)$.", "Convert $A=1.0\times10^{-6}$ m².", "$v_d=2/[8.5\times10^{28}(1.602\times10^{-19})(10^{-6})]$."], answer: "$v_d\approx1.47\times10^{-4}$ m s⁻¹." },
      { prompt: "An electron relaxation time is $2.5\times10^{-14}$ s. Find mobility.", steps: ["Use $\mu=e\tau/m$.", "$\mu=(1.602\times10^{-19})(2.5\times10^{-14})/(9.11\times10^{-31})$."], answer: "$\mu\approx4.40\times10^{-3}$ m² V⁻¹ s⁻¹." },
      { prompt: "A wire narrows to half its original area while carrying steady current. Compare drift speeds.", steps: ["Use $I=neAv_d$.", "For the same material and current, $Av_d$ is constant.", "Halving area doubles drift speed."], answer: "The drift speed doubles in the narrow section." },
      { prompt: "Why does increasing temperature usually increase metallic resistance?", steps: ["Lattice ions vibrate more strongly.", "Electron collisions become more frequent.", "Relaxation time and mobility decrease, so resistivity rises."], answer: "Greater lattice scattering reduces conductivity." },
    ],
    applications: [
      { area: "Metal wiring", text: "Carrier density and mobility determine the current a conductor carries for a given field." },
      { area: "Semiconductor transport", text: "Mobility is a key material parameter for transistors, sensors and integrated circuits." },
      { area: "Temperature sensors", text: "Changes in carrier scattering or carrier density allow resistive temperature measurement." },
      { area: "Material science", text: "Relaxation time links microscopic scattering to measured conductivity." },
    ],
    mistakes: [
      { wrong: "Assuming drift speed is comparable to electron thermal speed.", right: "Drift is typically many orders of magnitude smaller." },
      { wrong: "Dropping the electron-direction sign without explaining it.", right: "Electron drift is opposite $\mathbf E$; conventional current is along $\mathbf E$." },
      { wrong: "Believing a thicker wire always gives faster drift.", right: "For fixed current, larger area gives smaller drift speed." },
    ],
    practice: [
      { prompt: "Relaxation time is approximately", options: ["time between successive collisions", "time to cross the whole wire", "period of AC supply", "battery lifetime"], answer: 0, explanation: "It is the mean collision interval." },
      { prompt: "Electron drift direction in a metal is", options: ["along the electric field", "opposite the electric field", "always upward", "random only"], answer: 1, explanation: "Electrons have negative charge." },
      { prompt: "At fixed material and area, doubling electric field makes drift speed", options: ["half", "unchanged", "double", "four times"], answer: 2, explanation: "$v_d=\mu E$." },
      { prompt: "Microscopic Ohm's law is", options: ["$V=IR$", "$\mathbf J=\sigma\mathbf E$", "$P=VI$", "$Q=It$"], answer: 1, explanation: "It relates local current density to local electric field." },
      { prompt: "Metal resistivity increases when relaxation time", options: ["increases", "decreases", "is infinite", "does not matter"], answer: 1, explanation: "$\rho=m/(ne^2\tau)$." },
    ],
    quiz: [
      { type: "mc", prompt: "For fixed current and carrier density, doubling wire radius changes drift speed by factor", options: ["2", "1/2", "4", "1/4"], answer: 3, marks: 2, explanation: "Area increases by four, so drift speed becomes one quarter." },
      { type: "tf", prompt: "The rapid response of a lamp means individual electrons drift through the complete circuit almost at light speed.", answer: false, marks: 2, explanation: "The electromagnetic field is established rapidly; electron drift is slow." },
      { type: "matching", prompt: "Match the quantity with its relation.", left: ["Drift velocity", "Mobility", "Conductivity", "Resistivity"], options: ["$e\tau E/m$", "$e\tau/m$", "$ne^2\tau/m$", "$m/(ne^2\tau)$"], answer: [0,1,2,3], marks: 4, explanation: "These follow from the relaxation-time model." },
    ],
    summary: [
      "Thermal electron velocities cancel on average when no field is applied.",
      "An electric field creates a small net electron drift opposite to the field.",
      "$I=neAv_d$ connects microscopic motion to macroscopic current.",
      "Mobility measures drift response per unit field.",
      "Microscopic Ohm's law explains conductivity through carrier density and collision time.",
    ],
  },
  {
    chapterSlug: "current-and-resistance",
    slug: "ohm-s-law-resistance-resistivity-and-temperature",
    title: "Ohm's Law, Resistance, Resistivity and Temperature",
    mode: "ohms-law",
    extraModes: ["resistance-temperature"],
    objectives: [
      "Apply Ohm's law and interpret current-voltage graphs.",
      "Distinguish resistance, resistivity, conductance and conductivity.",
      "Calculate resistance from geometry and material resistivity.",
      "Model temperature dependence for metals, semiconductors, alloys and superconductors.",
      "Analyse stretched wires and select materials for electrical applications.",
    ],
    introduction: [
      "Ohm's law states that for a conductor kept under fixed physical conditions, current is proportional to potential difference. The constant ratio $V/I$ is its resistance. The qualification about fixed conditions matters because temperature, strain and material state can all change resistance.",
      "Resistance belongs to a particular object and depends on its dimensions. Resistivity is an intrinsic material property and is independent of the chosen length and cross-section at fixed temperature.",
    ],
    definitions: [
      { title: "Resistance", text: "Opposition of a particular component to current: $R=V/I$, measured in ohms." },
      { title: "Resistivity", text: "Intrinsic material property in $R=\rho L/A$, measured in $\Omega\,\text m$." },
      { title: "Conductance", text: "Reciprocal of resistance: $G=1/R$, measured in siemens." },
      { title: "Conductivity", text: "Reciprocal of resistivity: $\sigma=1/\rho$." },
      { title: "Ohmic conductor", text: "Conductor with a linear $V-I$ relation at fixed physical conditions." },
      { title: "Dynamic resistance", text: "Local slope $dV/dI$ for a nonlinear device." },
    ],
    theory: [
      {
        heading: "Geometry and material dependence",
        paragraphs: [
          "For a uniform wire, $R=\rho L/A$. Doubling length doubles resistance; doubling radius increases area by four and reduces resistance to one quarter if the length is unchanged.",
          "When a wire is stretched without changing volume, $AL$ remains constant. Therefore $R\propto L^2$ and also $R\propto1/r^4$. These results appear frequently in exam problems.",
        ],
      },
      {
        heading: "Temperature dependence and materials",
        paragraphs: [
          "For a moderate temperature range, $R_T=R_0[1+\alpha(T-T_0)]$. Metals normally have positive $\alpha$ because stronger lattice vibration increases scattering. Semiconductor and electrolyte resistance often decreases as temperature rises because carrier number or ion mobility increases.",
          "Alloys such as manganin and constantan have small temperature coefficients and are useful for standard resistors. Nichrome combines high resistivity and high melting point for heating elements. Superconductors undergo a transition to zero DC resistance below a critical temperature.",
        ],
      },
    ],
    formulae: [
      { latex: "V=IR,\qquad R=\frac{V}{I}", caption: "Macroscopic Ohm's law under fixed physical conditions." },
      { latex: "R=\rho\frac{L}{A},\qquad G=\frac1R,\qquad \sigma=\frac1\rho", caption: "Resistance, conductance and intrinsic material properties." },
      { latex: "R_T=R_{T_0}[1+\alpha(T-T_0)]", caption: "Linear temperature approximation." },
      { latex: "A_1L_1=A_2L_2\Rightarrow\frac{R_2}{R_1}=\left(\frac{L_2}{L_1}\right)^2=\left(\frac{r_1}{r_2}\right)^4", caption: "Resistance change when a wire is stretched at constant volume and resistivity." },
    ],
    image: { src: "/physics/current-electricity/resistance-materials.svg", alt: "Ohmic and non-ohmic current-voltage graphs and resistance-temperature curves", caption: "Linear slope represents resistance for an ohmic conductor; temperature trends depend on the material." },
    examples: [
      { prompt: "A 12 V supply drives 3.0 A through a resistor. Find resistance and power.", steps: ["$R=V/I=12/3=4\,\Omega$.", "$P=VI=12\times3$."], answer: "$R=4\,\Omega$ and $P=36$ W." },
      { prompt: "A copper wire has $\rho=1.7\times10^{-8}\,\Omega\text m$, length 5 m and area $0.50\text{ mm}^2$. Find resistance.", steps: ["Convert area to $5.0\times10^{-7}$ m².", "$R=\rho L/A$.", "$R=(1.7\times10^{-8})(5)/(5.0\times10^{-7})$."], answer: "$R=0.17\,\Omega$." },
      { prompt: "A wire of resistance $R$ is stretched to twice its length without volume change. Find its new resistance.", steps: ["For constant volume, $R\propto L^2$.", "$R_2/R_1=(2)^2=4$."], answer: "$R_2=4R$." },
      { prompt: "A metal resistor is 20 Ω at 20°C with $\alpha=0.004\,°\text C^{-1}$. Find resistance at 120°C.", steps: ["$\Delta T=100°C$.", "$R=20[1+0.004(100)]$."], answer: "$R=28\,\Omega$." },
    ],
    applications: [
      { area: "Heating elements", text: "Nichrome is selected for high resistivity, oxidation resistance and high melting point." },
      { area: "Standard resistors", text: "Manganin and constantan provide stable resistance over ordinary temperature changes." },
      { area: "Thermistors", text: "Strong temperature dependence enables sensitive temperature sensing and compensation." },
      { area: "Superconductivity", text: "Zero-resistance states enable high-field magnets and very low-loss current transport under controlled conditions." },
    ],
    mistakes: [
      { wrong: "Treating resistivity as dependent on wire length.", right: "Resistance depends on geometry; resistivity is a material property at fixed conditions." },
      { wrong: "Reading resistance as the slope of an $I$ versus $V$ graph without checking axes.", right: "For $V$ vertical versus $I$ horizontal, slope is $R$; reversing axes gives conductance." },
      { wrong: "Assuming every material has positive temperature coefficient.", right: "Semiconductors and electrolytes commonly have negative coefficients." },
    ],
    practice: [
      { prompt: "The SI unit of resistivity is", options: ["Ω", "Ω m", "S", "A m⁻²"], answer: 1, explanation: "From $R=\rho L/A$, resistivity has unit ohm metre." },
      { prompt: "A wire's length doubles at unchanged area. Its resistance", options: ["halves", "doubles", "quadruples", "is unchanged"], answer: 1, explanation: "$R\propto L$." },
      { prompt: "A metal generally has temperature coefficient", options: ["positive", "negative", "exactly zero", "imaginary"], answer: 0, explanation: "Lattice scattering increases with temperature." },
      { prompt: "The reciprocal of resistivity is", options: ["conductance", "conductivity", "current density", "mobility"], answer: 1, explanation: "$\sigma=1/\rho$." },
      { prompt: "For a nonlinear device, $dV/dI$ is", options: ["static resistance", "dynamic resistance", "power", "charge"], answer: 1, explanation: "It is the local differential resistance." },
    ],
    quiz: [
      { type: "mc", prompt: "A wire radius is halved while volume remains constant. Resistance becomes", options: ["2R", "4R", "8R", "16R"], answer: 3, marks: 2, explanation: "$R\propto1/r^4$." },
      { type: "tf", prompt: "Ohm's law is universal for all devices at every operating condition.", answer: false, marks: 2, explanation: "Many devices are nonlinear and even ohmic materials change if temperature changes." },
      { type: "multi", prompt: "Select materials commonly chosen for stable or high-temperature resistive applications.", options: ["Manganin", "Constantan", "Nichrome", "Pure silver only"], answers: [0,1,2], marks: 3, explanation: "Alloys are selected for useful resistivity and temperature behaviour." },
    ],
    summary: [
      "Ohm's law applies under fixed physical conditions.",
      "Resistance depends on material, length and cross-sectional area.",
      "Resistivity is intrinsic and conductivity is its reciprocal.",
      "Temperature dependence reflects microscopic carrier and scattering changes.",
      "Stretching problems require constant-volume geometry when that condition is stated.",
    ],
  },
  {
    chapterSlug: "current-and-resistance",
    slug: "resistor-combinations-colour-codes-and-network-reduction",
    title: "Resistor Combinations, Colour Codes and Network Reduction",
    mode: "resistor-network",
    objectives: [
      "Find equivalent resistance for series and parallel combinations.",
      "Use voltage division and current division correctly.",
      "Decode four-band resistor colour markings and tolerances.",
      "Reduce symmetric, balanced and infinite resistor networks.",
      "Check equivalent-resistance results using limiting and comparison tests.",
    ],
    introduction: [
      "Real circuits contain many resistors. Their combined effect is often replaced by one equivalent resistance that draws the same current from the same terminals.",
      "Straight series and parallel combinations are the foundation, but symmetry, equipotential points, balanced bridges and self-similarity are essential for more difficult networks.",
    ],
    definitions: [
      { title: "Series", text: "Components carry the same current and their potential drops add." },
      { title: "Parallel", text: "Components share the same terminal voltage and branch currents add." },
      { title: "Equivalent resistance", text: "Single resistance producing the same terminal $V-I$ relation as the network." },
      { title: "Voltage divider", text: "Series voltage fraction $V_k=V R_k/R_{eq}$." },
      { title: "Current divider", text: "Parallel branch current is inversely related to branch resistance." },
      { title: "Tolerance", text: "Permitted percentage deviation of a marked resistor value." },
    ],
    theory: [
      {
        heading: "Series and parallel rules",
        paragraphs: [
          "In series, $R_{eq}=\sum R_i$. The equivalent must exceed the largest individual value. In parallel, reciprocals add, so the equivalent is smaller than the smallest branch resistance.",
          "Identical resistors give especially useful results: $n$ in series produce $nR$, while $n$ in parallel produce $R/n$.",
        ],
      },
      {
        heading: "Difficult networks",
        paragraphs: [
          "Successive reduction works when series and parallel groups are visible. If not, identify equipotential points using symmetry. A balanced Wheatstone bridge carries no current through its central branch, allowing it to be removed for equivalent-resistance calculation.",
          "An infinite ladder is solved by self-similarity: after removing one repeated cell, the remaining network still has the same equivalent resistance. This creates an algebraic equation for the unknown equivalent.",
        ],
      },
      {
        heading: "Four-band colour code",
        paragraphs: [
          "The first two bands give significant digits, the third gives a power-of-ten multiplier and the fourth gives tolerance. Black through white represent digits 0 through 9; gold and silver commonly indicate ±5% and ±10% tolerance.",
        ],
      },
    ],
    formulae: [
      { latex: "R_s=R_1+R_2+\cdots", caption: "Equivalent resistance in series." },
      { latex: "\frac1{R_p}=\frac1{R_1}+\frac1{R_2}+\cdots", caption: "Equivalent resistance in parallel." },
      { latex: "V_k=V\frac{R_k}{\sum R},\qquad I_1=I\frac{R_2}{R_1+R_2}", caption: "Voltage division and two-branch current division." },
      { latex: "R_{eq}=R+\frac{RR_{eq}}{R+R_{eq}}", caption: "Typical self-similarity equation for an infinite ladder made from repeated equal resistors." },
    ],
    image: { src: "/physics/current-electricity/resistor-networks.svg", alt: "Series, parallel, Wheatstone and colour-code resistor diagrams", caption: "Equivalent-resistance methods depend on shared current, shared voltage, symmetry and balance." },
    examples: [
      { prompt: "Find the equivalent of 3 Ω, 5 Ω and 7 Ω in series.", steps: ["Series resistances add.", "$R_{eq}=3+5+7$."], answer: "$15\,\Omega$." },
      { prompt: "Find the equivalent of 6 Ω and 3 Ω in parallel.", steps: ["$R_{eq}=R_1R_2/(R_1+R_2)$.", "$R_{eq}=18/9$."], answer: "$2\,\Omega$." },
      { prompt: "A 12 V source is across 2 Ω and 4 Ω in series. Find voltage across 4 Ω.", steps: ["Total resistance is 6 Ω.", "Use voltage division: $V_4=12(4/6)$."], answer: "$8$ V." },
      { prompt: "Decode bands brown-black-red-gold.", steps: ["Brown = 1, black = 0.", "Red multiplier is $10^2$.", "Gold tolerance is ±5%."], answer: "$10\times10^2=1000\,\Omega=1.0\text{ k}\Omega$, ±5%." },
    ],
    applications: [
      { area: "Electronic design", text: "Networks set bias currents, divide voltages and limit device currents." },
      { area: "Household wiring", text: "Appliances are placed in parallel so each receives the supply voltage independently." },
      { area: "Lighting strings", text: "Series connections share voltage but one open component can interrupt the complete path." },
      { area: "Sensor bridges", text: "Balanced bridge circuits detect very small resistance changes." },
    ],
    mistakes: [
      { wrong: "Adding parallel resistances directly.", right: "Add reciprocals or use product-over-sum for two branches." },
      { wrong: "Accepting a parallel equivalent larger than the smallest branch.", right: "Use this comparison as a fast error check." },
      { wrong: "Joining points that merely look close on a drawing.", right: "Only ideal-wire-connected or symmetry-proven points are equipotential." },
    ],
    practice: [
      { prompt: "Three identical resistors R in series have equivalent", options: ["R/3", "R", "2R", "3R"], answer: 3, explanation: "Series values add." },
      { prompt: "Three identical resistors R in parallel have equivalent", options: ["R/3", "R", "3R", "9R"], answer: 0, explanation: "Equal parallel branches divide resistance by their number." },
      { prompt: "A balanced bridge has current through its detector branch", options: ["maximum", "zero", "equal to source current", "undefined"], answer: 1, explanation: "The detector endpoints are at equal potential." },
      { prompt: "The tolerance band gold means", options: ["±1%", "±2%", "±5%", "±20%"], answer: 2, explanation: "Gold conventionally denotes ±5%." },
      { prompt: "A parallel equivalent must be", options: ["greater than every branch", "smaller than the smallest branch", "the arithmetic sum", "always zero"], answer: 1, explanation: "Adding an additional current path reduces equivalent resistance." },
    ],
    quiz: [
      { type: "mc", prompt: "A 4 Ω and 12 Ω pair in parallel equals", options: ["3 Ω", "4 Ω", "8 Ω", "16 Ω"], answer: 0, marks: 2, explanation: "$48/16=3\,\Omega$." },
      { type: "tf", prompt: "Potential difference is the same across every resistor connected in parallel.", answer: true, marks: 2, explanation: "All branches share the same two nodes." },
      { type: "matching", prompt: "Match each arrangement with its property.", left: ["Series", "Parallel", "Balanced bridge", "Infinite ladder"], options: ["Same current", "Same voltage", "Zero detector current", "Self-similarity"], answer: [0,1,2,3], marks: 4, explanation: "These are the key structural ideas." },
    ],
    summary: [
      "Series resistors share current and add directly.",
      "Parallel resistors share voltage and add by reciprocals.",
      "Voltage and current division follow from these rules.",
      "Colour bands encode significant digits, multiplier and tolerance.",
      "Symmetry, bridge balance and self-similarity solve more advanced networks.",
    ],
  },
  {
    chapterSlug: "circuits",
    slug: "emf-internal-resistance-and-grouping-of-cells",
    title: "EMF, Internal Resistance and Grouping of Cells",
    mode: "cells",
    objectives: [
      "Distinguish electromotive force from terminal potential difference.",
      "Model a real cell as an ideal EMF source with internal resistance.",
      "Analyse discharging, charging, open-circuit and short-circuit conditions.",
      "Combine identical cells in series, parallel and mixed arrangements.",
      "Use the maximum-power-transfer condition appropriately.",
    ],
    introduction: [
      "A cell converts chemical energy into electrical energy. Its electromotive force is energy supplied per coulomb, not a mechanical force. A real cell also contains internal resistance, so its terminal voltage changes with current.",
      "Grouping cells changes both total EMF and effective internal resistance. The best arrangement depends on the external load and on how many cells are available.",
    ],
    definitions: [
      { title: "EMF", text: "Energy supplied by a source per unit charge; equal to open-circuit terminal voltage for an ideal measurement." },
      { title: "Internal resistance", text: "Effective opposition to current inside a real source." },
      { title: "Terminal voltage", text: "Potential difference measured across the source terminals under operating conditions." },
      { title: "Short-circuit current", text: "Current $I_{sc}=\mathcal E/r$ when external resistance is negligibly small." },
      { title: "Cells in series", text: "EMFs and internal resistances add when cells aid one another." },
      { title: "Cells in parallel", text: "Identical cells retain EMF $\mathcal E$ while effective internal resistance becomes $r/n$." },
    ],
    theory: [
      {
        heading: "Real-cell terminal equations",
        paragraphs: [
          "For a discharging cell, $\mathcal E=V+Ir$, so $V=\mathcal E-Ir$. The internal voltage drop grows with current. In open circuit, $I=0$ and $V=\mathcal E$. In a short circuit, the small internal resistance limits an otherwise very large current.",
          "During charging, current is forced into the positive terminal and the external voltage must exceed the EMF: $V=\mathcal E+Ir$ under the usual magnitude convention.",
        ],
      },
      {
        heading: "Grouping and maximum power",
        paragraphs: [
          "For $n$ cells in each series row and $m$ identical rows in parallel, equivalent EMF is $n\mathcal E$ and internal resistance is $nr/m$. The load current is $I=n\mathcal E/[R+nr/m]$.",
          "For a fixed source, load power is maximum when $R=r_{eq}$. This does not mean efficiency is maximum; at maximum power, half the generated power is lost internally.",
        ],
      },
    ],
    formulae: [
      { latex: "I=\frac{\mathcal E}{R+r},\qquad V=\mathcal E-Ir=IR", caption: "Discharging real cell connected to load R." },
      { latex: "I_{sc}=\frac{\mathcal E}{r},\qquad r=R\left(\frac{\mathcal E}{V}-1\right)", caption: "Short circuit and internal-resistance determination." },
      { latex: "\mathcal E_{eq}=n\mathcal E,\qquad r_{eq}=\frac{nr}{m}", caption: "Mixed grouping with n series cells per row and m parallel rows." },
      { latex: "P_R=\frac{\mathcal E^2R}{(R+r)^2},\qquad P_{max}=\frac{\mathcal E^2}{4r}\ \text{at }R=r", caption: "Load power and maximum-power-transfer result." },
    ],
    image: { src: "/physics/current-electricity/cells-and-terminal-voltage.svg", alt: "Cell with EMF and internal resistance in open, loaded and charging conditions", caption: "Terminal voltage equals EMF only at zero current; internal voltage drop depends on current direction and magnitude." },
    examples: [
      { prompt: "A 12 V cell with internal resistance 1 Ω supplies a 5 Ω load. Find current and terminal voltage.", steps: ["$I=\mathcal E/(R+r)=12/6=2$ A.", "$V=IR=2\times5$."], answer: "$I=2$ A and $V=10$ V." },
      { prompt: "A 1.5 V cell gives a short-circuit current of 3 A. Find internal resistance.", steps: ["Use $I_{sc}=\mathcal E/r$.", "$r=1.5/3$."], answer: "$0.50\,\Omega$." },
      { prompt: "Four identical 1.5 V cells of internal resistance 0.5 Ω are in series with a 6 Ω load. Find current.", steps: ["Equivalent EMF is 6 V.", "Equivalent internal resistance is 2 Ω.", "$I=6/(6+2)$."], answer: "$0.75$ A." },
      { prompt: "A source has EMF 10 V and internal resistance 2 Ω. Find maximum load power.", steps: ["Maximum occurs at $R=r=2\,\Omega$.", "$P_{max}=\mathcal E^2/(4r)=100/8$."], answer: "$12.5$ W." },
    ],
    applications: [
      { area: "Battery packs", text: "Series cells raise voltage; parallel strings raise current capacity and reduce effective internal resistance." },
      { area: "Automotive starting", text: "Low internal resistance allows a battery to provide very large current briefly." },
      { area: "Source testing", text: "Comparing open-circuit EMF and loaded terminal voltage reveals internal resistance." },
      { area: "Power matching", text: "Maximum-power ideas are useful in source-load matching, though efficiency and thermal limits must also be considered." },
    ],
    mistakes: [
      { wrong: "Calling EMF a mechanical force.", right: "It is energy supplied per unit charge and has unit volt." },
      { wrong: "Using $V=\mathcal E-Ir$ while the cell is charging without checking direction.", right: "Charging requires an external terminal voltage larger than the EMF." },
      { wrong: "Assuming maximum power means maximum efficiency.", right: "At $R=r$, source efficiency is 50%." },
    ],
    practice: [
      { prompt: "Open-circuit terminal voltage of a cell is approximately", options: ["0", "$\mathcal E$", "$Ir$", "$R/r$"], answer: 1, explanation: "With no current there is no internal voltage drop." },
      { prompt: "For a discharging cell", options: ["$V>\mathcal E$", "$V=\mathcal E+Ir$", "$V=\mathcal E-Ir$", "$V=0$ always"], answer: 2, explanation: "Part of the EMF is lost across internal resistance." },
      { prompt: "n identical cells in parallel have effective internal resistance", options: ["nr", "$r/n$", "r", "zero"], answer: 1, explanation: "Equal internal resistances are in parallel." },
      { prompt: "Maximum power is delivered when load resistance is", options: ["zero", "infinite", "equal to internal resistance", "twice the EMF"], answer: 2, explanation: "This is the maximum-power-transfer condition." },
      { prompt: "Short-circuiting a practical cell is dangerous because current is limited mainly by", options: ["large load resistance", "small internal resistance", "zero EMF", "voltmeter resistance"], answer: 1, explanation: "Small total resistance produces large current and heating." },
    ],
    quiz: [
      { type: "mc", prompt: "A 6 V cell with r=1 Ω supplies R=2 Ω. Terminal voltage is", options: ["2 V", "4 V", "6 V", "9 V"], answer: 1, marks: 2, explanation: "$I=6/3=2$ A and $V=IR=4$ V." },
      { type: "tf", prompt: "Identical cells in parallel increase the combined EMF above the EMF of one cell.", answer: false, marks: 2, explanation: "They retain the same EMF but reduce effective internal resistance." },
      { type: "multi", prompt: "Select every factor that can affect internal resistance of a cell.", options: ["Electrode spacing", "Electrode area", "Electrolyte properties", "Printed battery colour"], answers: [0,1,2], marks: 3, explanation: "Geometry and electrolyte state matter." },
    ],
    summary: [
      "EMF is energy supplied per coulomb.",
      "Internal resistance causes terminal voltage to depend on current.",
      "Series and parallel cell groupings change EMF and internal resistance differently.",
      "Short circuits can produce destructive currents.",
      "Maximum load power occurs when load and source resistances match.",
    ],
  },
  {
    chapterSlug: "circuits",
    slug: "kirchhoff-s-laws-and-multiloop-circuits",
    title: "Kirchhoff's Laws and Multiloop Circuits",
    mode: "kirchhoff",
    objectives: [
      "Apply Kirchhoff's junction rule using a consistent current-sign convention.",
      "Apply Kirchhoff's loop rule with correct resistor and source signs.",
      "Solve simultaneous equations for multiloop currents.",
      "Interpret a negative current as direction reversal rather than a failed calculation.",
      "Connect Kirchhoff's laws to conservation of charge and energy.",
    ],
    introduction: [
      "Simple series and parallel rules are insufficient for networks containing several sources and interconnected loops. Kirchhoff's laws provide a systematic method that works for any lumped DC circuit.",
      "The junction rule expresses charge conservation. The loop rule expresses energy conservation: after traversing a closed loop, the algebraic sum of potential changes is zero.",
    ],
    definitions: [
      { title: "Node or junction", text: "Point where two or more circuit branches meet." },
      { title: "Branch", text: "Single path between adjacent nodes containing one or more elements." },
      { title: "Loop", text: "Closed path through a circuit." },
      { title: "KCL", text: "Kirchhoff's current law: algebraic sum of currents at a junction is zero." },
      { title: "KVL", text: "Kirchhoff's voltage law: algebraic sum of potential changes around a loop is zero." },
      { title: "Assumed current", text: "A chosen reference direction; a negative answer means the actual direction is opposite." },
    ],
    theory: [
      {
        heading: "Junction rule",
        paragraphs: [
          "Choose incoming currents as positive and outgoing as negative, or use the reverse convention consistently. At a node, $\sum I=0$. This prevents continuous accumulation of charge in a steady circuit.",
        ],
      },
      {
        heading: "Loop sign convention",
        paragraphs: [
          "Across a resistor in the assumed current direction, potential changes by $-IR$; against current, it changes by $+IR$. Across a source from negative to positive terminal, use $+\mathcal E$; from positive to negative, use $-\mathcal E$.",
          "Write independent loop equations only. Solve them simultaneously, then check each junction and loop by substitution. Negative branch current is physically acceptable and simply reverses the chosen arrow.",
        ],
      },
    ],
    formulae: [
      { latex: "\sum_{junction} I=0", caption: "Kirchhoff's junction rule from conservation of charge." },
      { latex: "\sum_{closed\ loop}\Delta V=0", caption: "Kirchhoff's loop rule from conservation of energy." },
      { latex: "\begin{aligned}(R_1+R_3)I_1-R_3I_2&=\mathcal E_1\\-R_3I_1+(R_2+R_3)I_2&=\mathcal E_2\end{aligned}", caption: "Typical pair of equations for two loops sharing resistor $R_3$." },
    ],
    image: { src: "/physics/current-electricity/kirchhoff-circuit.svg", alt: "Two-loop circuit showing current directions and sign conventions", caption: "Assign currents first, then traverse each loop consistently and solve the resulting simultaneous equations." },
    examples: [
      { prompt: "At a junction, 5 A and 3 A enter while 2 A leaves. Find the remaining outgoing current.", steps: ["Incoming total is 8 A.", "Outgoing total must also be 8 A.", "$2+I=8$."], answer: "$I=6$ A outgoing." },
      { prompt: "A loop contains a 12 V source and series resistors 2 Ω and 4 Ω. Find current.", steps: ["KVL: $+12-2I-4I=0$.", "$6I=12$."], answer: "$I=2$ A." },
      { prompt: "A calculated branch current is -0.40 A relative to the assumed arrow. Interpret it.", steps: ["The sign is relative to the arbitrary reference direction.", "Magnitude is 0.40 A.", "Actual direction is opposite to the drawn arrow."], answer: "0.40 A opposite to the assumed direction." },
      { prompt: "For equations $5I_1-2I_2=10$ and $-2I_1+7I_2=4$, find currents.", steps: ["Solve the simultaneous equations.", "The determinant is $35-4=31$.", "$I_1=(70+8)/31$, $I_2=(20+20)/31$."], answer: "$I_1\approx2.52$ A and $I_2\approx1.29$ A." },
    ],
    applications: [
      { area: "Automotive circuits", text: "Multiple sources, loads and chassis-ground branches require junction and loop analysis." },
      { area: "Electronic networks", text: "Kirchhoff equations form the basis of nodal and mesh analysis used in circuit simulation." },
      { area: "Battery systems", text: "Opposing or aiding sources can be handled without special-case guessing." },
      { area: "Fault diagnosis", text: "Measured node voltages and branch currents can be checked against conservation laws." },
    ],
    mistakes: [
      { wrong: "Changing current directions halfway through the calculation.", right: "Keep assumed arrows fixed and let algebra determine the sign." },
      { wrong: "Using $-IR$ for every resistor crossing.", right: "The sign depends on whether the traversal follows or opposes assumed current." },
      { wrong: "Treating a negative current as impossible.", right: "It means the actual direction is opposite to the original assumption." },
    ],
    practice: [
      { prompt: "Kirchhoff's junction rule follows conservation of", options: ["energy", "charge", "momentum", "mass only"], answer: 1, explanation: "No steady net charge accumulates at a node." },
      { prompt: "Traversing a resistor in the current direction gives potential change", options: ["+IR", "-IR", "+E", "zero"], answer: 1, explanation: "Potential falls along conventional current through a resistor." },
      { prompt: "Traversing a cell from negative to positive terminal gives", options: ["+EMF", "-EMF", "-IR", "zero"], answer: 0, explanation: "It is a potential rise." },
      { prompt: "A negative solution for a branch current means", options: ["the circuit is impossible", "actual direction is opposite", "resistance is negative", "the source is open"], answer: 1, explanation: "The reference direction was arbitrary." },
      { prompt: "KVL states that around a closed loop", options: ["currents multiply", "sum of potential changes is zero", "resistors vanish", "charge is created"], answer: 1, explanation: "It is energy conservation per unit charge." },
    ],
    quiz: [
      { type: "mc", prompt: "Currents 2 A and 7 A enter a node; 4 A and I leave. I equals", options: ["1 A", "3 A", "5 A", "13 A"], answer: 2, marks: 2, explanation: "$2+7=4+I$, so $I=5$ A." },
      { type: "tf", prompt: "Every geometrically drawn loop necessarily gives an independent equation.", answer: false, marks: 2, explanation: "Some loop equations are linear combinations of others." },
      { type: "matching", prompt: "Match traversal with potential change.", left: ["Resistor along current", "Resistor against current", "Cell - to +", "Cell + to -"], options: ["-IR", "+IR", "+E", "-E"], answer: [0,1,2,3], marks: 4, explanation: "These signs make KVL consistent." },
    ],
    summary: [
      "KCL is conservation of charge at a junction.",
      "KVL is conservation of energy around a loop.",
      "A consistent sign convention is more important than guessing current directions correctly.",
      "Multiloop currents are found by simultaneous equations.",
      "Negative current solutions reverse the assumed direction.",
    ],
  },
  {
    chapterSlug: "circuits",
    slug: "wheatstone-bridge-meter-bridge-and-resistance-measurement",
    title: "Wheatstone Bridge, Meter Bridge and Resistance Measurement",
    mode: "bridge-meter",
    objectives: [
      "Explain the null condition of a balanced Wheatstone bridge.",
      "Calculate an unknown resistance using bridge ratios.",
      "Derive and apply the meter-bridge balance relation.",
      "Identify sources of experimental error and improve sensitivity.",
      "Use bridge symmetry as a circuit-analysis tool.",
    ],
    introduction: [
      "A bridge circuit compares resistances by detecting when two points reach the same potential. At balance, the detector current is zero, so the result does not depend on the detector resistance.",
      "The meter bridge is a practical slide-wire form of Wheatstone bridge. A movable contact locates a null point along a uniform resistance wire, converting resistance ratio into length ratio.",
    ],
    definitions: [
      { title: "Wheatstone bridge", text: "Four-resistor network used to compare or determine resistance." },
      { title: "Balanced bridge", text: "Condition in which detector current is zero because detector endpoints are equipotential." },
      { title: "Meter bridge", text: "One-metre uniform wire used as two bridge ratio arms." },
      { title: "Null point", text: "Contact position giving zero galvanometer deflection." },
      { title: "End correction", text: "Error caused by resistance of end connections and copper strips." },
      { title: "Sensitivity", text: "Ability of the detector arrangement to reveal small departure from balance." },
    ],
    theory: [
      {
        heading: "Bridge balance",
        paragraphs: [
          "At balance, no current flows through the galvanometer. Applying voltage division to the two arms gives $P/Q=R/S$, or equivalently $PS=QR$. The bridge is most sensitive when all four resistances are of comparable magnitude.",
        ],
      },
      {
        heading: "Meter-bridge relation",
        paragraphs: [
          "A uniform wire has resistance proportional to length. If the balance point divides the wire into lengths $l$ and $L-l$, then $X/R=l/(L-l)$ for the conventional placement of unknown $X$ and standard $R$.",
          "Interchanging the unknown and standard and averaging can reduce end errors. Keep current low to avoid heating the wire, and choose a standard resistance that gives a central balance point.",
        ],
      },
    ],
    formulae: [
      { latex: "\frac{P}{Q}=\frac{R}{S}\qquad\text{or}\qquad PS=QR", caption: "Balanced Wheatstone-bridge condition." },
      { latex: "\frac{X}{R}=\frac{l}{L-l}", caption: "Meter-bridge relation for a uniform wire." },
      { latex: "X=R\frac{l}{100-l}\quad\text{for a 100 cm bridge wire}", caption: "Common laboratory form." },
    ],
    image: { src: "/physics/current-electricity/bridge-and-meter.svg", alt: "Balanced Wheatstone bridge and one-metre slide-wire bridge", caption: "A null detector identifies equal potentials and therefore an exact resistance ratio." },
    examples: [
      { prompt: "A bridge has P=4 Ω, Q=6 Ω and R=8 Ω. Find S for balance.", steps: ["Use $P/Q=R/S$.", "$4/6=8/S$.", "$S=12\,\Omega$."], answer: "$12\,\Omega$." },
      { prompt: "In a meter bridge, standard R=5 Ω and balance length is 60 cm measured on the unknown side. Find X.", steps: ["$X/R=l/(100-l)$.", "$X=5(60/40)$."], answer: "$X=7.5\,\Omega$." },
      { prompt: "Why is a balance point near 50 cm preferred?", steps: ["Length-ratio sensitivity is greatest away from the extreme ends.", "End-connection resistance becomes a smaller relative error.", "The detector responds more clearly to small resistance changes."], answer: "A central balance improves accuracy and sensitivity." },
      { prompt: "A balanced bridge central resistor is replaced by another value. Does terminal equivalent resistance change?", steps: ["At balance, no current flows through the central branch.", "Its voltage drop and power are zero.", "Changing its resistance does not alter the terminal behaviour while balance is maintained."], answer: "No, not while the bridge remains balanced." },
    ],
    applications: [
      { area: "Strain gauges", text: "Tiny resistance changes caused by deformation are measured with bridge circuits." },
      { area: "Temperature sensing", text: "RTDs and thermistors are often placed in bridges for precise comparison." },
      { area: "Laboratory metrology", text: "Null methods measure unknown resistance without relying on calibrated detector deflection." },
      { area: "Network analysis", text: "Bridge balance identifies equipotential nodes and simplifies complex circuits." },
    ],
    mistakes: [
      { wrong: "Assuming the central branch has zero current in every bridge.", right: "It is zero only when the bridge ratio is balanced." },
      { wrong: "Using $l/(100-l)$ without checking which gap contains the unknown.", right: "Write the bridge-arm correspondence before substituting." },
      { wrong: "Allowing large current to heat the meter wire.", right: "Heating changes resistance per unit length and shifts the null point." },
    ],
    practice: [
      { prompt: "At Wheatstone balance, detector current is", options: ["zero", "maximum", "source current", "infinite"], answer: 0, explanation: "Detector endpoints are equipotential." },
      { prompt: "The bridge balance condition is", options: ["P+Q=R+S", "P/Q=R/S", "PR=QS always", "P=Q=R=S only"], answer: 1, explanation: "Equal ratios, not necessarily equal individual values, give balance." },
      { prompt: "A meter bridge uses resistance proportional to", options: ["wire length", "wire colour", "galvanometer angle only", "battery mass"], answer: 0, explanation: "For uniform area and material, $R\propto L$." },
      { prompt: "A balance at 2 cm is generally", options: ["more accurate than 50 cm", "susceptible to end error", "independent of wire uniformity", "impossible"], answer: 1, explanation: "Extreme balance positions magnify end effects." },
      { prompt: "Interchanging known and unknown resistances can help reduce", options: ["EMF", "end correction", "charge", "wire length"], answer: 1, explanation: "Averaging reciprocal placements reduces systematic error." },
    ],
    quiz: [
      { type: "mc", prompt: "P=3 Ω, Q=5 Ω, R=6 Ω. Balanced S is", options: ["2 Ω", "4 Ω", "10 Ω", "14 Ω"], answer: 2, marks: 2, explanation: "$3/5=6/S$, so $S=10\,\Omega$." },
      { type: "tf", prompt: "At balance, the galvanometer resistance affects the calculated bridge ratio.", answer: false, marks: 2, explanation: "No current flows through the detector at null." },
      { type: "multi", prompt: "Select practices that improve meter-bridge accuracy.", options: ["Use a central balance", "Limit heating", "Use clean contacts", "Choose an extreme end balance deliberately"], answers: [0,1,2], marks: 3, explanation: "Extreme positions are normally avoided." },
    ],
    summary: [
      "A balanced bridge is a null method based on equal detector potentials.",
      "The resistance ratio is $P/Q=R/S$.",
      "A meter bridge converts resistance ratios to wire-length ratios.",
      "Central null points and low heating improve accuracy.",
      "Bridge balance also simplifies symmetric circuit networks.",
    ],
  },
  {
    chapterSlug: "circuits",
    slug: "galvanometer-ammeter-and-voltmeter",
    title: "Galvanometer, Ammeter and Voltmeter",
    mode: "instruments",
    objectives: [
      "Describe the purpose and response of a moving-coil galvanometer.",
      "Convert a galvanometer into an ammeter using a shunt.",
      "Convert a galvanometer into a voltmeter using a series resistance.",
      "Explain loading errors and ideal-instrument resistance.",
      "Solve instrument-range and sensitivity calculations.",
    ],
    introduction: [
      "A galvanometer detects small currents through a proportional deflection. Practical ammeters and voltmeters are constructed by adding carefully chosen resistances to a sensitive galvanometer movement.",
      "Instrument resistance changes the circuit being measured. Good instrument design minimizes this loading: ammeters need very low resistance, while voltmeters need very high resistance.",
    ],
    definitions: [
      { title: "Galvanometer", text: "Sensitive current detector whose deflection is proportional to coil current in its linear range." },
      { title: "Full-scale current", text: "Maximum coil current $I_g$ that gives full-scale deflection." },
      { title: "Shunt", text: "Low resistance connected in parallel to bypass most current around a galvanometer." },
      { title: "Ammeter", text: "Current-measuring instrument connected in series; ideal resistance is zero." },
      { title: "Voltmeter", text: "Potential-difference instrument connected in parallel; ideal resistance is infinite." },
      { title: "Loading effect", text: "Change in the circuit caused by the measuring instrument's finite resistance." },
    ],
    theory: [
      {
        heading: "Galvanometer to ammeter",
        paragraphs: [
          "To measure a current $I$ much larger than the full-scale galvanometer current $I_g$, connect a low shunt $S$ in parallel. Equal branch voltage gives $I_gG=(I-I_g)S$, hence $S=I_gG/(I-I_g)$.",
          "The ammeter combination is placed in series. Its equivalent resistance should be as small as practical to avoid reducing the circuit current.",
        ],
      },
      {
        heading: "Galvanometer to voltmeter",
        paragraphs: [
          "To measure voltage $V$, connect a large multiplier resistance $R$ in series with the galvanometer. At full scale, $V=I_g(G+R)$, so $R=V/I_g-G$.",
          "A voltmeter is connected across the component. Higher total resistance draws less current and gives a measurement closer to the undisturbed potential difference.",
        ],
      },
    ],
    formulae: [
      { latex: "S=\frac{I_gG}{I-I_g}", caption: "Required shunt to convert a galvanometer of resistance G and full-scale current $I_g$ into range I." },
      { latex: "R=\frac{V}{I_g}-G", caption: "Required series resistance for voltmeter range V." },
      { latex: "R_A=\frac{GS}{G+S},\qquad R_V=G+R", caption: "Actual instrument resistances." },
      { latex: "\text{voltmeter sensitivity}=\frac{1}{I_g}\ \Omega\text{ per volt}", caption: "Resistance-per-volt rating of an analogue voltmeter." },
    ],
    image: { src: "/physics/current-electricity/measuring-instruments.svg", alt: "Galvanometer converted into ammeter and voltmeter", caption: "A low parallel shunt produces an ammeter; a high series multiplier produces a voltmeter." },
    examples: [
      { prompt: "A galvanometer has G=100 Ω and $I_g=1$ mA. Find shunt for a 5 A ammeter.", steps: ["$S=I_gG/(I-I_g)$.", "$S=(0.001)(100)/(5-0.001)$."], answer: "$S\approx0.0200\,\Omega$." },
      { prompt: "The same galvanometer is converted to a 10 V voltmeter. Find series resistance.", steps: ["$R=V/I_g-G$.", "$R=10/0.001-100$."], answer: "$R=9900\,\Omega$." },
      { prompt: "Why must an ammeter never be connected directly across a battery?", steps: ["An ammeter has very low resistance.", "Parallel connection would approximate a short circuit.", "The resulting current could damage the meter and source."], answer: "It must be connected in series with a load." },
      { prompt: "A voltmeter of 20 kΩ is connected across a 10 kΩ resistor. Explain the loading.", steps: ["The voltmeter forms a parallel combination with the resistor.", "Equivalent resistance becomes less than 10 kΩ.", "The measured circuit voltage can differ from the unloaded value."], answer: "Finite voltmeter resistance draws current and changes the circuit." },
    ],
    applications: [
      { area: "Analogue multimeters", text: "Switchable shunts and multipliers create multiple current and voltage ranges." },
      { area: "Circuit diagnostics", text: "Correct series or parallel connection prevents measurement errors and instrument damage." },
      { area: "Sensor readout", text: "Sensitive galvanometer movements historically displayed bridge and potentiometer nulls." },
      { area: "Instrument design", text: "Input resistance and burden voltage remain key specifications in modern digital meters." },
    ],
    mistakes: [
      { wrong: "Connecting an ammeter in parallel.", right: "An ammeter belongs in series and must have very low resistance." },
      { wrong: "Connecting a voltmeter in series.", right: "A voltmeter belongs in parallel and must have high resistance." },
      { wrong: "Using full-scale current in milliamperes without converting to amperes.", right: "Convert units before applying the shunt or multiplier formula." },
    ],
    practice: [
      { prompt: "An ideal ammeter has resistance", options: ["zero", "infinite", "1 Ω", "equal to load"], answer: 0, explanation: "It should not change circuit current." },
      { prompt: "An ideal voltmeter has resistance", options: ["zero", "infinite", "equal to source", "negative"], answer: 1, explanation: "It should draw no current." },
      { prompt: "A shunt is connected", options: ["in series with galvanometer", "in parallel with galvanometer", "across the battery only", "nowhere"], answer: 1, explanation: "It bypasses most of the current." },
      { prompt: "A voltmeter multiplier is", options: ["small and parallel", "large and series", "small and series", "zero"], answer: 1, explanation: "It limits current to the galvanometer full-scale value." },
      { prompt: "Finite voltmeter resistance causes", options: ["loading", "zero current always", "infinite EMF", "charge creation"], answer: 0, explanation: "The meter alters the network resistance." },
    ],
    quiz: [
      { type: "mc", prompt: "G=50 Ω, $I_g=2$ mA, desired voltmeter range 5 V. Series R is", options: ["2450 Ω", "2500 Ω", "25 Ω", "0.02 Ω"], answer: 0, marks: 2, explanation: "$R=5/0.002-50=2450\,\Omega$." },
      { type: "tf", prompt: "A lower-resistance voltmeter generally causes less loading.", answer: false, marks: 2, explanation: "Higher resistance draws less current and causes less loading." },
      { type: "matching", prompt: "Match instrument feature.", left: ["Ammeter", "Voltmeter", "Shunt", "Multiplier"], options: ["Series connection", "Parallel connection", "Low parallel resistance", "High series resistance"], answer: [0,1,2,3], marks: 4, explanation: "These connections define the practical instruments." },
    ],
    summary: [
      "A galvanometer is a sensitive current detector.",
      "A low parallel shunt converts it to an ammeter.",
      "A high series multiplier converts it to a voltmeter.",
      "Ammeters are series devices; voltmeters are parallel devices.",
      "Finite instrument resistance produces loading error.",
    ],
  },
  {
    chapterSlug: "circuits",
    slug: "potentiometer-principle-and-applications",
    title: "Potentiometer Principle and Applications",
    mode: "potentiometer",
    objectives: [
      "Explain the potentiometer as a null method based on uniform potential gradient.",
      "Relate balance length to EMF or potential difference.",
      "Compare the EMFs of two cells accurately.",
      "Determine the internal resistance of a cell using loaded and unloaded balance lengths.",
      "Explain sensitivity, calibration and practical limitations.",
    ],
    introduction: [
      "A potentiometer measures potential difference by balancing it against the known drop along a uniform resistance wire. At the null point, no current is drawn from the test cell, so the result is not reduced by the cell's internal resistance.",
      "This makes the potentiometer more accurate than a deflection voltmeter for comparing EMFs and determining internal resistance.",
    ],
    definitions: [
      { title: "Potential gradient", text: "Potential drop per unit length of the potentiometer wire: $k=V/L$." },
      { title: "Balance length", text: "Wire length at which the galvanometer shows zero deflection." },
      { title: "Primary circuit", text: "Driver cell, rheostat and potentiometer wire that establish a steady gradient." },
      { title: "Secondary circuit", text: "Test cell, galvanometer and jockey used to locate the null point." },
      { title: "Null method", text: "Measurement based on zero detector current rather than calibrated deflection." },
      { title: "Sensitivity", text: "Ability to distinguish small potential differences; improved by a smaller potential gradient." },
    ],
    theory: [
      {
        heading: "Working principle",
        paragraphs: [
          "For a uniform wire carrying steady current, resistance and potential drop are proportional to length. Thus $V=kl$. A balance exists only if the test EMF is less than the total potential drop available along the wire and its polarity is connected correctly.",
          "At balance, the secondary circuit current is zero. The measured EMF is therefore independent of test-cell internal resistance and galvanometer resistance.",
        ],
      },
      {
        heading: "Comparisons and internal resistance",
        paragraphs: [
          "For two cells measured with the same gradient, $E_1/E_2=l_1/l_2$. To determine internal resistance, first measure open-circuit balance length $l_1$, then connect a known load $R$ and measure terminal-voltage balance length $l_2$. Since $E/V=l_1/l_2$, $r=R(l_1/l_2-1)$.",
          "Sensitivity increases when the wire is longer or the driving current is reduced, provided the available total potential drop remains sufficient for the unknown EMF.",
        ],
      },
    ],
    formulae: [
      { latex: "k=\frac{V_{AB}}{L}=\frac{IR_{wire}}{L},\qquad E=kl", caption: "Potential gradient and null-balance relation." },
      { latex: "\frac{E_1}{E_2}=\frac{l_1}{l_2}", caption: "Comparison of two cell EMFs using one unchanged potentiometer setup." },
      { latex: "r=R\left(\frac{l_1}{l_2}-1\right)", caption: "Internal resistance from open-circuit and loaded balance lengths." },
    ],
    image: { src: "/physics/current-electricity/potentiometer.svg", alt: "Potentiometer primary and secondary circuits with a movable jockey", caption: "At the correct jockey position, the galvanometer current is zero and the test EMF equals the calibrated wire drop." },
    examples: [
      { prompt: "A 10 m wire has 5.0 V across it. Find the potential gradient.", steps: ["$k=V/L$.", "$k=5.0/10$."], answer: "$0.50$ V m⁻¹." },
      { prompt: "With gradient 0.40 V m⁻¹, a cell balances at 3.5 m. Find EMF.", steps: ["Use $E=kl$.", "$E=0.40\times3.5$."], answer: "$1.40$ V." },
      { prompt: "Two cells balance at 75 cm and 50 cm. Find $E_1/E_2$.", steps: ["Same gradient means EMF ratio equals length ratio.", "$E_1/E_2=75/50$."], answer: "$E_1:E_2=3:2$." },
      { prompt: "A cell balances at 100 cm open circuit and 80 cm with a 4 Ω load. Find internal resistance.", steps: ["$r=R(l_1/l_2-1)$.", "$r=4(100/80-1)$."], answer: "$r=1.0\,\Omega$." },
    ],
    applications: [
      { area: "Cell comparison", text: "EMFs are compared without drawing current from the cells at balance." },
      { area: "Internal resistance", text: "Open and loaded balance lengths quantify the source's internal voltage drop." },
      { area: "Instrument calibration", text: "Ammeters and voltmeters can be calibrated against accurately known potential drops." },
      { area: "Thermoelectric measurement", text: "Small thermocouple EMFs can be measured with a sensitive low-gradient wire." },
    ],
    mistakes: [
      { wrong: "Assuming any test EMF will produce a null point.", right: "The total wire drop must exceed the unknown EMF and polarity must be correct." },
      { wrong: "Changing the driver current between two EMF comparisons.", right: "The potential gradient must remain unchanged for $E_1/E_2=l_1/l_2$." },
      { wrong: "Confusing balance length with total wire length.", right: "Use the actual null distance from the designated wire end." },
    ],
    practice: [
      { prompt: "At potentiometer balance, test-cell current is", options: ["zero", "maximum", "equal to driver current", "infinite"], answer: 0, explanation: "It is a null method." },
      { prompt: "Potential gradient has unit", options: ["V m⁻¹", "A m⁻²", "Ω m", "C s⁻¹"], answer: 0, explanation: "It is voltage per unit length." },
      { prompt: "For fixed EMF, reducing gradient makes balance length", options: ["shorter", "longer", "zero", "unchanged"], answer: 1, explanation: "$l=E/k$." },
      { prompt: "A potentiometer measures EMF more accurately because at null it", options: ["draws no current from test cell", "has zero wire resistance", "uses AC", "short-circuits the cell"], answer: 0, explanation: "No loading occurs at balance." },
      { prompt: "For unchanged gradient, EMF ratio equals", options: ["inverse length ratio", "balance-length ratio", "resistance sum", "current product"], answer: 1, explanation: "$E=kl$." },
    ],
    quiz: [
      { type: "mc", prompt: "A wire gradient is 0.02 V cm⁻¹. Balance at 60 cm gives EMF", options: ["0.12 V", "1.2 V", "12 V", "30 V"], answer: 1, marks: 2, explanation: "$E=0.02\times60=1.2$ V." },
      { type: "tf", prompt: "At null, potentiometer reading depends strongly on galvanometer resistance.", answer: false, marks: 2, explanation: "Detector current is zero at balance." },
      { type: "multi", prompt: "Select ways to improve sensitivity.", options: ["Use a longer wire", "Reduce potential gradient", "Keep contact clean", "Increase gradient without limit"], answers: [0,1,2], marks: 3, explanation: "A smaller stable gradient and good contact improve null resolution." },
    ],
    summary: [
      "A potentiometer is an accurate null instrument.",
      "Uniform wire drop gives $E=kl$.",
      "EMF comparison uses the ratio of balance lengths.",
      "Internal resistance follows from open and loaded null positions.",
      "Sensitivity improves with a smaller stable potential gradient.",
    ],
  },
  {
    chapterSlug: "circuits",
    slug: "electric-power-heating-effect-and-current-electricity-review",
    title: "Electric Power, Heating Effect and Current Electricity Review",
    mode: "power-heating",
    extraModes: ["current-review"],
    objectives: [
      "Calculate electrical power and energy using equivalent forms of the power equation.",
      "Apply Joule's heating law and convert between joules and kilowatt-hours.",
      "Explain the operation of heating elements, fuses and circuit breakers.",
      "Integrate current, resistance, cells, networks, instruments and potentiometers in mixed problems.",
      "Evaluate answers using units, limiting cases and physical reasonableness.",
    ],
    introduction: [
      "Electrical energy transferred to a resistor becomes internal energy and heat. The rate is electrical power, while the total transferred energy depends on the operating time.",
      "This final lesson consolidates the complete Current Electricity course: microscopic charge transport, material resistance, resistor networks, real cells, Kirchhoff analysis, null bridges and measuring instruments.",
    ],
    definitions: [
      { title: "Electrical power", text: "Rate of electrical energy transfer: $P=VI$." },
      { title: "Joule heating", text: "Thermal energy produced in a resistor: $H=I^2Rt$." },
      { title: "Kilowatt-hour", text: "Commercial energy unit equal to $3.6\times10^6$ J." },
      { title: "Power rating", text: "Normal voltage and power for safe intended operation of a device." },
      { title: "Fuse", text: "Series safety element designed to melt and open a circuit when current is excessive." },
      { title: "Circuit breaker", text: "Resettable protective switch that interrupts overcurrent or fault current." },
    ],
    theory: [
      {
        heading: "Equivalent power forms",
        paragraphs: [
          "Starting from $P=VI$, use Ohm's law to obtain $P=I^2R$ when current and resistance are known, or $P=V^2/R$ when voltage and resistance are known. Choose the form matching the quantities held fixed.",
          "At fixed voltage, a smaller resistance draws more power. At fixed current, a larger resistance dissipates more power. Confusing these conditions is a common source of contradictory conclusions.",
        ],
      },
      {
        heading: "Heating and safety",
        paragraphs: [
          "The heat generated over time $t$ is $H=Pt=VIt=I^2Rt=V^2t/R$. Heating elements use high-resistivity, high-temperature materials. Fuse wires use a low melting point and are placed in series so all load current passes through them.",
          "A correctly rated protective device must interrupt dangerous current without nuisance operation during normal use. Household circuits place appliances in parallel so each receives rated voltage and can be switched independently.",
        ],
      },
      {
        heading: "Whole-course problem strategy",
        paragraphs: [
          "First identify whether the problem is microscopic transport, material resistance, circuit topology, source behaviour, null measurement or power. Draw a simplified circuit, mark polarities and current directions, convert every value to SI units, then select equations.",
          "After solving, check that parallel equivalents are below the smallest branch, terminal voltage is below EMF while discharging, instrument connections are correct and calculated powers are consistent with energy conservation.",
        ],
      },
    ],
    formulae: [
      { latex: "P=VI=I^2R=\frac{V^2}{R}", caption: "Electrical power in a resistive element." },
      { latex: "E=Pt=VIt=I^2Rt=\frac{V^2t}{R}", caption: "Electrical energy and Joule heat." },
      { latex: "1\ \text{kWh}=3.6\times10^6\ \text J", caption: "Commercial energy conversion." },
      { latex: "\eta=\frac{P_{useful}}{P_{input}}\times100\%", caption: "Efficiency of an electrical energy-conversion device." },
    ],
    image: { src: "/physics/current-electricity/power-and-safety.svg", alt: "Resistive heating, appliance power and fuse protection", caption: "Current transfers energy to loads; protective devices interrupt unsafe current before wires overheat." },
    examples: [
      { prompt: "A 12 V heater has resistance 6 Ω. Find current and power.", steps: ["$I=V/R=12/6=2$ A.", "$P=V^2/R=144/6$."], answer: "$I=2$ A and $P=24$ W." },
      { prompt: "A 2.0 kW heater runs for 30 minutes. Find energy in kWh and joules.", steps: ["Time is 0.50 h.", "$E=2.0\times0.50=1.0$ kWh.", "Multiply by $3.6\times10^6$."], answer: "$1.0$ kWh = $3.6\times10^6$ J." },
      { prompt: "Two resistors use the same current. One has twice the resistance. Compare powers.", steps: ["At fixed current, use $P=I^2R$.", "Doubling R doubles power."], answer: "The larger resistance dissipates twice the power." },
      { prompt: "Two heaters are connected to the same voltage. Heater A has half the resistance of B. Compare powers.", steps: ["At fixed voltage, use $P=V^2/R$.", "Halving resistance doubles power."], answer: "Heater A uses twice the power of B." },
    ],
    applications: [
      { area: "Electric heating", text: "Kettles, ovens, irons and water heaters convert electrical energy into heat through resistive elements." },
      { area: "Energy billing", text: "Utilities charge for kilowatt-hours, not instantaneous power alone." },
      { area: "Electrical protection", text: "Fuses and breakers protect wiring from overcurrent and fault heating." },
      { area: "Device ratings", text: "Voltage and power labels specify intended operating conditions and help determine resistance and current." },
    ],
    mistakes: [
      { wrong: "Using kilowatts as an energy unit.", right: "Kilowatt is power; kilowatt-hour is energy." },
      { wrong: "Using $P=I^2R$ to compare devices at fixed voltage without allowing current to change.", right: "At fixed voltage use $P=V^2/R$." },
      { wrong: "Replacing a fuse with a thicker arbitrary wire.", right: "Use the specified protective rating and approved device." },
    ],
    practice: [
      { prompt: "A 100 W lamp uses energy at rate", options: ["100 J", "100 J s⁻¹", "100 C s⁻¹", "100 Ω s⁻¹"], answer: 1, explanation: "One watt is one joule per second." },
      { prompt: "At fixed voltage, decreasing resistance makes power", options: ["decrease", "increase", "unchanged", "zero"], answer: 1, explanation: "$P=V^2/R$." },
      { prompt: "Joule heating is", options: ["$I^2Rt$", "$IR/t$", "$Q/V$", "$R/V$"], answer: 0, explanation: "It is electrical energy dissipated by a resistor." },
      { prompt: "One kWh equals", options: ["3600 J", "$3.6\times10^5$ J", "$3.6\times10^6$ J", "$3.6\times10^9$ J"], answer: 2, explanation: "$1000\times3600$ J." },
      { prompt: "A fuse is connected", options: ["in parallel with load", "in series with load", "only across voltmeter", "outside the circuit"], answer: 1, explanation: "All load current must pass through the fuse." },
    ],
    quiz: [
      { type: "mc", prompt: "A 240 V, 1200 W heater draws current", options: ["0.2 A", "5 A", "120 A", "288 A"], answer: 1, marks: 2, explanation: "$I=P/V=1200/240=5$ A." },
      { type: "tf", prompt: "Two parallel household appliances receive the same supply voltage.", answer: true, marks: 2, explanation: "Parallel branches share the same pair of supply nodes." },
      { type: "multi", prompt: "Select correct review checks.", options: ["Parallel equivalent below smallest branch", "Discharging terminal voltage below EMF", "Ammeter connected in series", "Voltmeter ideally zero resistance"], answers: [0,1,2], marks: 3, explanation: "An ideal voltmeter has infinite resistance." },
    ],
    summary: [
      "Electrical power is the rate of energy transfer and has several equivalent resistive forms.",
      "Joule heat equals power multiplied by time.",
      "Kilowatt-hour is an energy unit.",
      "Heating materials and protective devices are selected using resistivity, melting point and safe-current considerations.",
      "A complete solution checks circuit topology, signs, SI units and physical limits.",
    ],
  },
];

function lessonFromSpec(spec: CurrentSpec): LessonContent {
  const completionKey = `current-${spec.slug}`;
  return {
    subjectSlug: "physics",
    chapterSlug: spec.chapterSlug,
    lessonSlug: spec.slug,
    title: spec.title,
    objectives: spec.objectives,
    sections: [
      { kind: "overview", paragraphs: spec.introduction },
      { kind: "cards", heading: "Key definitions", columns: 3, items: spec.definitions.map((item) => ({ title: item.title, text: item.text })) },
      ...spec.theory.map((section) => ({ kind: "theory" as const, ...section })),
      ...(spec.image ? [{ kind: "imageGallery" as const, heading: "Concept and circuit diagrams", images: [spec.image] }] : []),
      { kind: "currentElectricityExplorer", heading: "Interactive current-electricity laboratory", mode: spec.mode },
      ...(spec.extraModes ?? []).map((mode) => ({ kind: "currentElectricityExplorer" as const, heading: "Interactive concept extension", mode })),
      ...spec.formulae.map((formula) => ({ kind: "formula" as const, latex: formula.latex, caption: formula.caption })),
      { kind: "callout", variant: "remember", title: "Circuit-solving discipline", body: "Draw the circuit, label polarities and assumed current directions, convert all quantities to SI units, state the governing law, and check the result against conservation, limiting cases and realistic instrument connections." },
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

export const currentElectricityCourse: LessonContent[] = specs.map(lessonFromSpec);
