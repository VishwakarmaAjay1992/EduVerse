export type HistoricalImage = {
  fileName: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
  caption: string;
  objectPosition?: string;
};

export type SourceEntry = {
  label: string;
  publisher: string;
  url: string;
  note: string;
};

export type Invention = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  era: string;
  origin: string;
  statusLine: string;
  summary: string[];
  heroImage: HistoricalImage;
  quickFacts: { label: string; value: string }[];
  necessity: {
    headline: string;
    introduction: string;
    pressures: { title: string; description: string }[];
    before: { method: string; strength: string; limit: string }[];
    decisiveConstraint: string;
  };
  globalPrehistory: {
    introduction: string;
    entries: { date: string; place: string; title: string; description: string }[];
  };
  people: {
    name: string;
    life: string;
    role: string;
    contribution: string;
    correction?: string;
  }[];
  experimentsAndFailures: {
    period: string;
    title: string;
    attempt: string;
    failure: string;
    lesson: string;
    evidence: "Documented" | "Strongly supported" | "Reconstructed from surviving evidence";
  }[];
  milestones: {
    year: string;
    title: string;
    description: string;
    pivotal?: boolean;
  }[];
  howItWorks: {
    introduction: string;
    steps: { title: string; explanation: string }[];
    expertNotes: { title: string; explanation: string }[];
  };
  anatomy: { part: string; purpose: string; designProblem: string }[];
  improvements: {
    period: string;
    inventor: string;
    improvement: string;
    whyItMattered: string;
  }[];
  gallery: HistoricalImage[];
  consequences: {
    transformed: { title: string; description: string }[];
    tradeoffs: { title: string; description: string }[];
  };
  modernDescendants: { title: string; connection: string }[];
  myths: { claim: string; verdict: string; explanation: string }[];
  glossary: { term: string; definition: string }[];
  researchQuestions: string[];
  sources: SourceEntry[];
};

export function commonsImageUrl(fileName: string, width = 1800) {
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=${width}`;
}

const steamEngine: Invention = {
  slug: "steam-engine",
  title: "Steam Engine",
  subtitle: "How a mine-drainage problem became a general-purpose power system",
  category: "Power & Industry",
  era: "1690s–1800s",
  origin: "Britain, built on a wider European history of vacuum, pressure and piston experiments",
  statusLine: "A chain of inventions—not a single eureka moment",
  summary: [
    "The steam engine was not invented once. It emerged through a sequence of attempts to turn heat into controlled mechanical work. The earliest commercially important machines were built to remove water from deep mines, where flooding stopped miners from reaching coal and metal ores.",
    "Thomas Savery created a steam-powered pumping device in the 1690s. Thomas Newcomen and John Calley then produced the first widely practical atmospheric engine in 1712. James Watt's separate condenser, developed in the 1760s, attacked the Newcomen engine's largest waste: repeatedly heating and cooling the same cylinder. Later engineers added accurate boring, rotary motion, double-acting cylinders, governors and high-pressure operation.",
    "Its history is also a lesson in systems engineering. Boilers, cylinders, valves, seals, metallurgy, machine tools, finance, patents, skilled labour and fuel supply all had to mature together. A brilliant idea without reliable manufacturing was not yet a useful engine.",
  ],
  heroImage: {
    fileName: "Power Up - Thinktank Birmingham Science Museum - Smethwick Engine.jpg",
    alt: "The preserved 1779 Smethwick Boulton and Watt steam engine",
    credit: "Elliott Brown",
    license: "CC BY-SA 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Power_Up_-_Thinktank_Birmingham_Science_Museum_-_Smethwick_Engine.jpg",
    caption:
      "The Smethwick Engine, installed in 1779 by Boulton & Watt and preserved at Thinktank Birmingham Science Museum. It is an original industrial machine, not a modern illustration.",
    objectPosition: "50% 45%",
  },
  quickFacts: [
    { label: "Original necessity", value: "Drain water from mines" },
    { label: "First practical atmospheric engine", value: "Newcomen and Calley, 1712" },
    { label: "Decisive efficiency improvement", value: "Watt's separate condenser, 1765–1769" },
    { label: "Key manufacturing enabler", value: "John Wilkinson's precision cylinder boring" },
    { label: "Energy conversion", value: "Heat → pressure/vacuum → reciprocating motion → useful work" },
    { label: "Historical caution", value: "No one person invented the complete modern steam engine" },
  ],
  necessity: {
    headline: "Necessity: deeper mines were filling with water",
    introduction:
      "As mines became deeper, groundwater entered shafts and workings faster than traditional pumps could remove it. A flooded mine was not merely inconvenient: it could halt production, destroy equipment and make valuable seams unreachable. The need was therefore economic, mechanical and urgent.",
    pressures: [
      {
        title: "Mining depth exceeded muscle power",
        description:
          "Hand pumps, buckets, horse gins and chains of pumps could work, but their cost and complexity rose sharply with depth. Horses consumed land, feed and labour even when the mine produced nothing.",
      },
      {
        title: "Water wheels depended on geography",
        description:
          "Water power was efficient where a reliable stream and useful fall existed. Many mines were not located beside suitable flowing water, and drought or freezing could interrupt supply.",
      },
      {
        title: "Coal created both the problem and the opportunity",
        description:
          "Deeper coal mining encountered more water, but mines also supplied cheap fuel. Early engines could be wasteful and still make economic sense at coal pits where low-grade coal was available nearby.",
      },
      {
        title: "A controllable source of power was missing",
        description:
          "Wind, water, animals and humans were location-dependent, variable or limited. Engineers wanted a machine that could operate when and where fuel and water were available.",
      },
    ],
    before: [
      {
        method: "Buckets, windlasses and chain pumps",
        strength: "Simple, familiar and repairable with local craft skills.",
        limit: "Labour-intensive and increasingly impractical as depth and water flow increased.",
      },
      {
        method: "Horse-powered pumps",
        strength: "Could deliver steady mechanical work without needing a river.",
        limit: "Required animals, handlers, feed, space and continuous operating expense.",
      },
      {
        method: "Water wheels",
        strength: "Efficient and capable of substantial continuous power.",
        limit: "Restricted to sites with suitable water flow and elevation; sometimes water had to be diverted over long distances.",
      },
      {
        method: "Suction pumps",
        strength: "Useful for lifting water over modest heights.",
        limit: "Atmospheric pressure imposes a hard suction-lift limit; a pump at the surface cannot simply suck water from an arbitrarily deep shaft.",
      },
    ],
    decisiveConstraint:
      "The crucial insight was to stop asking only how to improve an existing pump and instead create a heat-powered prime mover that could repeatedly operate a pump. Even then, the engine had to be cheap enough in fuel, safe enough in pressure and manufacturable with available tools.",
  },
  globalPrehistory: {
    introduction:
      "Steam power depended on earlier knowledge of air pressure, vacuum, boiling, condensation and pistons. These discoveries were distributed across people and countries; the industrial engine was a synthesis.",
    entries: [
      {
        date: "1st century CE",
        place: "Roman Egypt",
        title: "Hero's aeolipile",
        description:
          "Hero of Alexandria described a rotating steam reaction device. It demonstrated that steam could cause motion, but it was not developed into an industrial power machine.",
      },
      {
        date: "1640s–1650s",
        place: "Italy and the German states",
        title: "Atmospheric pressure and vacuum become measurable",
        description:
          "Evangelista Torricelli's barometer and Otto von Guericke's vacuum experiments showed that the atmosphere exerted substantial force. This made the later atmospheric engine concept intellectually possible.",
      },
      {
        date: "1670s–1690s",
        place: "France, Germany and England",
        title: "Papin explores steam, pressure and pistons",
        description:
          "Denis Papin developed the steam digester and proposed piston arrangements in which steam condensed to create a vacuum. His work supplied concepts, but not a robust mine engine business.",
      },
      {
        date: "1698",
        place: "England",
        title: "Savery patents a fire engine",
        description:
          "Thomas Savery patented a pump that alternately used condensation to draw water and steam pressure to force it upward. It had no piston and was constrained by lift, pressure and efficiency.",
      },
    ],
  },
  people: [
    {
      name: "Denis Papin",
      life: "1647–c.1713",
      role: "Pressure and piston experimenter",
      contribution:
        "Explored steam pressure, safety valves and the idea of condensing steam beneath a piston to let atmospheric pressure perform work.",
      correction:
        "Papin helped establish principles and proposals; he did not deliver the first successful commercial mine engine.",
    },
    {
      name: "Thomas Savery",
      life: "c.1650–1715",
      role: "Inventor of a steam pumping device",
      contribution:
        "Patented a 1698 apparatus known through his 1702 book The Miner's Friend. It used vessels, valves, steam pressure and condensation to raise water.",
      correction:
        "It is often called an engine, but it did not use a piston and was not a general rotary prime mover.",
    },
    {
      name: "Thomas Newcomen",
      life: "1664–1729",
      role: "Builder of the first practical atmospheric engine",
      contribution:
        "Combined a piston-cylinder, rocking beam, boiler, valves and in-cylinder condensation into a workable pumping engine first documented near Dudley in 1712.",
    },
    {
      name: "John Calley",
      life: "1663–1717",
      role: "Newcomen's working partner",
      contribution:
        "A plumber and glazier who worked with Newcomen on early engines. Popular accounts often understate his practical contribution to construction and installation.",
    },
    {
      name: "James Watt",
      life: "1736–1819",
      role: "Efficiency and system redesign",
      contribution:
        "Separated condensation from the hot working cylinder, then developed steam jackets, improved sealing, double action, rotary mechanisms, indicator work and control systems.",
      correction:
        "Watt did not invent the first steam engine; he transformed an established atmospheric engine into a far more economical and versatile system.",
    },
    {
      name: "Matthew Boulton",
      life: "1728–1809",
      role: "Manufacturer, financier and commercial strategist",
      contribution:
        "Provided capital, manufacturing networks, customers and organisation. The Boulton & Watt partnership turned experimental improvements into a repeatable industrial product and service business.",
    },
    {
      name: "John Wilkinson",
      life: "1728–1808",
      role: "Precision manufacturing enabler",
      contribution:
        "His improved boring machine produced much more accurate large cylinders. Better geometry reduced leakage and made Watt's engine practical at full scale.",
    },
    {
      name: "Richard Trevithick",
      life: "1771–1833",
      role: "High-pressure pioneer",
      contribution:
        "Used stronger boilers and higher-pressure steam to create smaller, more powerful engines suitable for vehicles and locomotion, opening a path beyond giant stationary beam engines.",
    },
  ],
  experimentsAndFailures: [
    {
      period: "1690s–early 1700s",
      title: "Papin's concepts lacked an industrial package",
      attempt:
        "Papin proposed steam and atmospheric piston cycles and experimented with pressure vessels, pistons and boats.",
      failure:
        "The surviving record does not show a reliable, commercially deployed mine engine. Cylinder manufacture, sealing, valve control, finance and institutional support were all difficult.",
      lesson:
        "A thermodynamic principle is not enough. An invention succeeds only when mechanisms, materials, production and a use case are integrated.",
      evidence: "Reconstructed from surviving evidence",
    },
    {
      period: "1698–1710s",
      title: "Savery's pump met physical and safety limits",
      attempt:
        "Condense steam in a vessel to draw water in, then admit steam pressure to push the water upward.",
      failure:
        "Atmospheric pressure limited the suction stage, so the machine had to be placed near the water. Forcing water higher demanded pressure in soldered vessels and boilers, increasing danger. It also consumed large amounts of steam because the vessels were repeatedly heated and cooled.",
      lesson:
        "Designs must respect pressure limits, phase-change heat losses and material strength—not just prove that motion occurs.",
      evidence: "Strongly supported",
    },
    {
      period: "1712 onward",
      title: "Newcomen solved reliability but accepted fuel waste",
      attempt:
        "Fill a cylinder with low-pressure steam, inject cold water into that same cylinder, create a vacuum and let atmospheric pressure drive the piston down.",
      failure:
        "Each cycle cooled the cylinder that the next steam charge had to reheat. The engine was large and slow, and much fuel was spent heating metal rather than doing useful work.",
      lesson:
        "A machine can be commercially successful in one environment—coal mines with cheap fuel—while still containing a major efficiency defect.",
      evidence: "Documented",
    },
    {
      period: "1763–1766",
      title: "Watt's early models exposed hidden subsystem problems",
      attempt:
        "Keep the main cylinder hot and condense steam in a separate cold chamber connected by a pipe.",
      failure:
        "Small models and early full-size trials struggled with leakage, imperfect valves, air and water removal, poor cylinder accuracy and the difficulty of maintaining a strong vacuum.",
      lesson:
        "Changing one component creates new requirements elsewhere. The separate condenser also needed an air pump, better seals, better machining and careful operating practice.",
      evidence: "Documented",
    },
    {
      period: "1760s–1770s",
      title: "Scale-up was harder than the laboratory idea",
      attempt:
        "Translate a promising model into a full-size engine at sites such as Kinneil and later commercial installations.",
      failure:
        "Large cylinders were irregular, joints leaked, costs rose and development took years. Watt's concept waited for manufacturing capability and sustained finance.",
      lesson:
        "Prototype success does not guarantee production success. Tolerances, repeatability, installation and maintenance are part of the invention.",
      evidence: "Documented",
    },
    {
      period: "1800s",
      title: "High pressure brought mobility—and explosions",
      attempt:
        "Increase steam pressure so engines could be smaller and deliver more power per unit mass.",
      failure:
        "Early boiler design, inspection and operator practice were uneven. Boiler explosions demonstrated that stronger performance without safety engineering could be fatal.",
      lesson:
        "Progress often shifts the limiting problem. High pressure solved size and power-density constraints but made materials, joints, relief valves and regulation critical.",
      evidence: "Documented",
    },
  ],
  milestones: [
    {
      year: "c.50 CE",
      title: "Hero describes the aeolipile",
      description: "Steam reaction produces rotation, but without an industrial transmission or economic application.",
    },
    {
      year: "1679–1690",
      title: "Papin develops pressure-vessel and piston ideas",
      description: "Safety-valve and condensation concepts become part of the technical vocabulary.",
    },
    {
      year: "1698",
      title: "Savery receives his patent",
      description: "A steam-powered device is proposed for raising water and supplying towns.",
      pivotal: true,
    },
    {
      year: "1712",
      title: "First documented Newcomen engine",
      description: "The atmospheric piston engine near Dudley proves practical for mine pumping.",
      pivotal: true,
    },
    {
      year: "1713–1718",
      title: "Automatic valve gear improves operation",
      description: "Mechanisms replace much manual valve timing and make repeated cycles more regular.",
    },
    {
      year: "1765",
      title: "Watt conceives and models the separate condenser",
      description: "The cylinder can remain hot while condensation occurs in a separate cold vessel.",
      pivotal: true,
    },
    {
      year: "1769",
      title: "Watt's patent is granted",
      description: "The patent describes methods for reducing steam and fuel consumption in fire engines.",
    },
    {
      year: "1775",
      title: "Boulton & Watt partnership and Wilkinson boring",
      description: "Commercial organisation and accurate cylinders make the improved system scalable.",
      pivotal: true,
    },
    {
      year: "1781–1782",
      title: "Rotary and double-acting engines",
      description: "Steam power moves beyond pumping and becomes suitable for mills, workshops and factories.",
    },
    {
      year: "1784–1788",
      title: "Parallel motion and centrifugal governor",
      description: "Better guidance and automatic speed control strengthen the engine as a general power source.",
    },
    {
      year: "1801–1804",
      title: "Trevithick demonstrates high-pressure engines",
      description: "Compact engines begin powering road and rail vehicles.",
      pivotal: true,
    },
    {
      year: "1849",
      title: "Corliss valve gear",
      description: "More precise steam admission and cut-off improve efficiency and speed regulation in factories.",
    },
    {
      year: "1884",
      title: "Parsons steam turbine",
      description: "Continuous rotary expansion provides a new route to high-speed electrical generation and marine propulsion.",
    },
  ],
  howItWorks: {
    introduction:
      "The classic Newcomen engine is atmospheric: steam prepares a vacuum, but atmospheric pressure supplies the main downward force. Watt retained the condensation principle while preventing the working cylinder from being cooled every cycle.",
    steps: [
      {
        title: "1. Boil water",
        explanation:
          "Fuel heats a boiler. Liquid water absorbs energy and becomes steam. Early atmospheric engines used steam only slightly above atmospheric pressure; later high-pressure engines operated very differently.",
      },
      {
        title: "2. Fill the working cylinder",
        explanation:
          "Steam enters beneath the piston and displaces air or residual vapour. In a Newcomen engine, the pump-side weight lifts the piston during this part of the cycle.",
      },
      {
        title: "3. Condense the steam",
        explanation:
          "Newcomen injected cold water into the cylinder. Watt instead opened a path to a separate cold condenser. Steam collapses into a much smaller volume of liquid water, reducing pressure.",
      },
      {
        title: "4. Pressure difference moves the piston",
        explanation:
          "With low pressure beneath the piston and atmospheric pressure above it, the atmosphere pushes the piston down. The beam transfers this motion to a pump rod.",
      },
      {
        title: "5. Remove condensate and non-condensing air",
        explanation:
          "Water and leaked air weaken the vacuum. Watt's system used an air pump to clear the condenser and maintain performance.",
      },
      {
        title: "6. Repeat and transmit the motion",
        explanation:
          "Valves reset for the next stroke. Later engines converted the beam's reciprocating motion into rotation for machinery, or used steam on both sides of the piston for power in both directions.",
      },
    ],
    expertNotes: [
      {
        title: "Latent heat dominates the cycle",
        explanation:
          "Turning water into steam requires large energy input. Condensing that steam rejects comparable latent heat. Unwanted condensation in the cylinder therefore wastes fuel and reduces mean effective pressure.",
      },
      {
        title: "Vacuum quality matters",
        explanation:
          "Air leakage and hot condensate raise condenser pressure. The smaller the pressure difference across the piston, the less force the engine can develop.",
      },
      {
        title: "Cylinder geometry is performance",
        explanation:
          "An out-of-round bore forces loose sealing or high friction. Precision boring increased both vacuum retention and mechanical reliability.",
      },
      {
        title: "Efficiency is a system property",
        explanation:
          "Boiler losses, steam-pipe condensation, cylinder condensation, valve timing, friction, pump load and condenser temperature all affect fuel consumption. No single component determines the result.",
      },
    ],
  },
  anatomy: [
    { part: "Boiler", purpose: "Converts water into steam.", designProblem: "Heat transfer, pressure containment, scaling, corrosion and explosion risk." },
    { part: "Cylinder and piston", purpose: "Convert pressure difference into linear force.", designProblem: "Roundness, surface finish, sealing, friction and thermal cycling." },
    { part: "Beam", purpose: "Transfers piston motion to a pump or transmission.", designProblem: "Strength, alignment, bearing wear and changing geometry through the stroke." },
    { part: "Valves and valve gear", purpose: "Control steam, injection water and exhaust timing.", designProblem: "Leakage, timing accuracy, operator workload and durability." },
    { part: "Condenser", purpose: "Turns exhaust steam into water and creates low pressure.", designProblem: "Cooling surface, air leakage, condensate removal and vacuum maintenance." },
    { part: "Air pump", purpose: "Removes condensate and non-condensing gases.", designProblem: "Reliability and parasitic power consumption." },
    { part: "Parallel motion / linkage", purpose: "Guides piston rod while beam moves in an arc.", designProblem: "Converting curved beam motion into nearly straight piston-rod motion." },
    { part: "Governor", purpose: "Automatically regulates speed as load changes.", designProblem: "Stable feedback without hunting, overspeed or sluggish response." },
  ],
  improvements: [
    {
      period: "1698",
      inventor: "Thomas Savery",
      improvement: "Steam-driven water lifting without a piston",
      whyItMattered: "Proved a market existed for fire-powered pumping and exposed the limits of suction, pressure vessels and thermal cycling.",
    },
    {
      period: "1712",
      inventor: "Thomas Newcomen and John Calley",
      improvement: "Atmospheric piston engine with beam-driven pump",
      whyItMattered: "Delivered the first widely practical engine for draining deep mines.",
    },
    {
      period: "1710s",
      inventor: "Newcomen-era operators and mechanics",
      improvement: "Self-acting valve gear",
      whyItMattered: "Regular automatic cycling reduced the need for a person to operate every valve by hand.",
    },
    {
      period: "1765–1769",
      inventor: "James Watt",
      improvement: "Separate condenser and hot cylinder",
      whyItMattered: "Reduced the repeated heating and cooling that consumed much of a Newcomen engine's fuel.",
    },
    {
      period: "1770s",
      inventor: "John Wilkinson",
      improvement: "Precision-bored large cylinders",
      whyItMattered: "Made tighter seals and dependable full-size Watt engines possible.",
    },
    {
      period: "1781–1788",
      inventor: "Boulton & Watt team",
      improvement: "Rotary drive, double action, parallel motion and governing",
      whyItMattered: "Turned a mine pump into a controlled prime mover for factories and mills.",
    },
    {
      period: "1800s",
      inventor: "Richard Trevithick and others",
      improvement: "High-pressure, non-condensing compact engines",
      whyItMattered: "Raised power-to-weight ratio enough for locomotives, road vehicles and mobile machinery.",
    },
    {
      period: "1849 onward",
      inventor: "George Corliss and later designers",
      improvement: "Efficient valve timing and expansive operation",
      whyItMattered: "Reduced fuel use and kept factory speed steadier under changing loads.",
    },
  ],
  gallery: [
    {
      fileName: "Savery's Steam-Engine from Savery-PlateIV.jpg",
      alt: "Thomas Savery steam pumping engine engraving",
      credit: "Thomas Savery, The Miner's Friend",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Savery%27s_Steam-Engine_from_Savery-PlateIV.jpg",
      caption:
        "A historical plate of Savery's pumping apparatus. It alternated condensation and steam pressure in vessels rather than driving a piston.",
    },
    {
      fileName: "Replica Newcomen engine, Black Country Living Museum - geograph.org.uk - 601063.jpg",
      alt: "Working replica of the 1712 Newcomen atmospheric engine",
      credit: "Chris Allen",
      license: "CC BY-SA 2.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Replica_Newcomen_engine,_Black_Country_Living_Museum_-_geograph.org.uk_-_601063.jpg",
      caption:
        "A working full-scale replica near the site of the first documented 1712 Newcomen engine. The projecting beam operated mine pumps.",
    },
    {
      fileName: "Newcomen engine model (Hunterian museum).jpg",
      alt: "Newcomen engine model associated with James Watt at the Hunterian Museum",
      credit: "Andy Dingley",
      license: "CC BY-SA 4.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Newcomen_engine_model_(Hunterian_museum).jpg",
      caption:
        "One of the teaching models associated with Watt's repair work at the University of Glasgow. Studying its waste led him toward a separate condenser.",
    },
    {
      fileName: "SteamEngine Boulton&Watt 1784.png",
      alt: "Historical drawing of a Boulton and Watt steam engine from 1784",
      credit: "Robert Henry Thurston / historical engraving",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:SteamEngine_Boulton%26Watt_1784.png",
      caption:
        "A historical diagram of a mature Boulton & Watt beam engine, showing how the cylinder, beam, flywheel and transmission formed one system.",
    },
  ],
  consequences: {
    transformed: [
      {
        title: "Mining and fuel supply",
        description:
          "Steam pumps enabled deeper extraction of coal and ores. More coal then supplied more engines, creating a reinforcing relationship between mining and industrial power.",
      },
      {
        title: "Factories independent of river sites",
        description:
          "Rotary steam engines allowed mills and workshops to locate near labour, markets, ports and coal rather than only beside fast-flowing water.",
      },
      {
        title: "Transport",
        description:
          "High-pressure engines powered locomotives and steamships, compressing travel times and reorganising trade, migration, warfare and imperial administration.",
      },
      {
        title: "Machine-tool development",
        description:
          "Demand for accurate cylinders, shafts, valves and bearings accelerated precision engineering. Better machine tools then enabled better engines.",
      },
      {
        title: "Thermodynamics",
        description:
          "Trying to understand and improve heat engines helped inspire the scientific study of heat, work, energy, entropy and efficiency.",
      },
      {
        title: "Modern power generation",
        description:
          "Most thermal power stations still boil a working fluid and use expansion to turn machinery. The turbine replaced the piston in many applications, but the energy-conversion lineage remains visible.",
      },
    ],
    tradeoffs: [
      {
        title: "Coal consumption and climate legacy",
        description:
          "Steam power greatly expanded fossil-fuel use. Industrial growth, urban pollution and today's accumulated carbon emissions are inseparable from that energy transition.",
      },
      {
        title: "Dangerous workplaces",
        description:
          "Mines, boiler rooms, factories and railways exposed workers to explosions, heat, dust, crushing machinery and long hours before modern safety standards.",
      },
      {
        title: "Industrial discipline",
        description:
          "Centralised machines encouraged fixed shifts, factory time and large concentrations of labour. Productivity rose, but work became more tightly controlled.",
      },
      {
        title: "Imperial and military power",
        description:
          "Steamships, railways and industrial production strengthened states and empires. Technology amplified both civilian welfare and coercive capacity.",
      },
    ],
  },
  modernDescendants: [
    { title: "Steam turbines", connection: "Use expansion of steam for continuous rotation in power stations and ships." },
    { title: "Internal-combustion piston engines", connection: "Retain cylinder, piston, valves, crank and controlled pressure cycles, but combustion occurs inside the engine." },
    { title: "Refrigeration and heat pumps", connection: "Use phase change, pressure and heat transfer in reverse-purpose thermodynamic cycles." },
    { title: "Industrial control systems", connection: "The centrifugal governor is an early automatic feedback controller, conceptually linked to modern control engineering." },
    { title: "Precision manufacturing", connection: "Engine cylinders helped drive boring, metrology, interchangeable parts and machine-tool culture." },
    { title: "Combined-cycle power plants", connection: "Still pursue the same systems goal: extract more useful work from each unit of heat while controlling losses." },
  ],
  myths: [
    {
      claim: "James Watt invented the steam engine.",
      verdict: "Misleading",
      explanation:
        "Practical Newcomen engines operated decades before Watt. Watt invented crucial improvements—especially the separate condenser—and helped make steam power efficient and versatile.",
    },
    {
      claim: "The steam itself pushed every early piston down.",
      verdict: "False for Newcomen atmospheric engines",
      explanation:
        "Condensation lowered pressure beneath the piston; atmospheric pressure above the piston supplied the main downward force.",
    },
    {
      claim: "One successful experiment immediately launched the Industrial Revolution.",
      verdict: "False",
      explanation:
        "Development took decades and depended on mines, customers, patents, finance, manufacturing, installers, maintenance and complementary machines.",
    },
    {
      claim: "Early engines replaced water power everywhere.",
      verdict: "False",
      explanation:
        "Water wheels remained competitive for a long time. Sites often combined technologies, and engine adoption depended on fuel price, location and task.",
    },
  ],
  glossary: [
    { term: "Atmospheric engine", definition: "An engine in which atmospheric pressure performs the main working stroke after steam is condensed to create low pressure." },
    { term: "Condenser", definition: "A chamber or surface that removes heat from steam so it becomes liquid water, lowering pressure." },
    { term: "Separate condenser", definition: "Watt's arrangement that condenses steam outside the working cylinder so the cylinder can remain hot." },
    { term: "Prime mover", definition: "A machine that converts an energy source into mechanical power for other machinery." },
    { term: "Reciprocating motion", definition: "Back-and-forth linear motion, such as a piston moving through a cylinder." },
    { term: "Mean effective pressure", definition: "A calculated average pressure that would produce the same work over a piston stroke; useful for comparing engine performance." },
    { term: "Cut-off", definition: "Closing steam admission before the end of the stroke so trapped steam continues expanding and doing work." },
    { term: "Governor", definition: "A feedback mechanism that senses speed and adjusts steam admission to keep speed near a target." },
  ],
  researchQuestions: [
    "How did local coal prices determine whether a Newcomen or Watt engine was economically attractive?",
    "Which parts of Watt's success came from thermodynamic insight, and which came from Wilkinson, Boulton, installers and skilled workshop practice?",
    "How should historians compare patent records, promotional claims, surviving machines and later recollections when reconstructing invention?",
    "Did steam power cause industrialisation, or did growing industrial markets create the conditions that made steam power profitable?",
    "How did boiler-inspection law and engineering institutions respond to high-pressure accidents?",
  ],
  sources: [
    {
      label: "Newcomen Atmospheric Engine collection record",
      publisher: "Science Museum Group",
      url: "https://collection.sciencemuseumgroup.org.uk/objects/co50900/newcomen-atmospheric-engine",
      note: "Museum record on the first practical atmospheric engine and its industrial significance.",
    },
    {
      label: "James Watt and the separate condenser",
      publisher: "Science Museum",
      url: "https://blog.sciencemuseum.org.uk/james-watt-and-the-separate-condenser/",
      note: "Curatorial account of Watt's 1769 patent and the fuel-saving significance of separate condensation.",
    },
    {
      label: "Watt's second separate condenser, 1765",
      publisher: "Science Museum Group Collection",
      url: "https://collection.sciencemuseumgroup.org.uk/objects/co50928/watts-second-separate-condenser-1765",
      note: "Object record for Watt's surviving model and the heat-loss problem it addressed.",
    },
    {
      label: "The Newcomen engine and Britain's industrial revolution",
      publisher: "National Museums Scotland",
      url: "https://www.nms.ac.uk/discover-catalogue/the-newcomen-engine-and-its-role-in-britains-industrial-revolution",
      note: "Museum explanation of mine flooding, coal extraction and Newcomen's role.",
    },
    {
      label: "Thomas Savery and his steam pump",
      publisher: "Linda Hall Library",
      url: "https://www.lindahall.org/about/news/scientist-of-the-day/thomas-savery/",
      note: "Uses Savery's 1702 publication and Royal Society demonstration record to explain the apparatus.",
    },
    {
      label: "Watt's workshop: craft and philosophy",
      publisher: "Science Museum Group Journal",
      url: "https://journal.sciencemuseum.ac.uk/article/watts-workshop/",
      note: "Research article on Watt's workshop, instruments and the craft environment behind invention.",
    },
  ],
};

const printingPress: Invention = {
  slug: "printing-press",
  title: "Printing Press",
  subtitle: "How type, ink, pressure and workflow turned copying into reproduction",
  category: "Communication & Knowledge",
  era: "c.1040–1900s",
  origin: "East Asian printing traditions and a European mechanical printing system centred on Mainz",
  statusLine: "A global history with multiple independent traditions",
  summary: [
    "The printing press should not be reduced to the sentence 'Gutenberg invented printing.' Woodblock printing flourished in East Asia centuries earlier. Bi Sheng described ceramic movable type in eleventh-century China, and Korean printers used movable metal type before Gutenberg; Jikji, printed in 1377, is the oldest surviving book made with movable metal type.",
    "Johannes Gutenberg's decisive European achievement was a complete production system: repeatable metal type, punches and matrices, a hand mould, ink suited to metal, a press capable of strong even impressions, and an organised workflow for composing, correcting, printing and reusing type. The system matched alphabetic scripts and Europe's paper, book, commercial and urban networks.",
    "The invention did not simply make books faster. It changed the economics of copying, enabled many nearly identical copies, widened access, accelerated argument and discovery, strengthened propaganda and censorship, and made errors reproducible at scale. It is an ancestor of today's software publishing platforms and networked information systems.",
  ],
  heroImage: {
    fileName: "PrintMus 038.jpg",
    alt: "A working reconstruction of a Gutenberg-style wooden printing press",
    credit: "vlasta2",
    license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:PrintMus_038.jpg",
    caption:
      "A real demonstration of a reconstructed Gutenberg-style press at the International Printing Museum. No original press built by Gutenberg is known to survive.",
    objectPosition: "50% 44%",
  },
  quickFacts: [
    { label: "Central necessity", value: "Reproduce texts faster, more consistently and at lower cost per copy" },
    { label: "Earlier movable type", value: "Bi Sheng in China; metal type in Korea" },
    { label: "Oldest surviving metal-type book", value: "Jikji, Korea, 1377" },
    { label: "European system breakthrough", value: "Gutenberg and collaborators, c.1440s–1450s" },
    { label: "Famous early product", value: "42-line Gutenberg Bible, completed around 1455" },
    { label: "Historical caution", value: "Gutenberg's exact experimental sequence is only partly documented" },
  ],
  necessity: {
    headline: "Necessity: manuscript culture could not scale with demand",
    introduction:
      "Before mechanical printing, texts were copied by hand or printed from carved blocks. Manuscripts could be beautiful and durable, but production was slow, skilled and expensive. As universities, cities, administrations, merchants and religious institutions expanded, demand increasingly exceeded the copying capacity of scribes.",
    pressures: [
      {
        title: "Universities needed textbooks",
        description:
          "Growing communities of students and scholars required grammar, law, medicine, theology and philosophy texts. Hand copying created delays, scarcity and variation between copies.",
      },
      {
        title: "States and churches needed repeatable documents",
        description:
          "Indulgences, proclamations, forms, calendars and devotional material rewarded a process that could produce many consistent copies quickly.",
      },
      {
        title: "Merchants needed information",
        description:
          "Urban trade increased demand for contracts, price information, practical manuals and literacy. Paper production and commercial credit made larger print runs more feasible.",
      },
      {
        title: "Woodblocks were reusable but text-specific",
        description:
          "A carved page could print many impressions, yet correcting it was difficult and every new page required another full block. Movable type promised reusable units.",
      },
    ],
    before: [
      {
        method: "Handwritten manuscripts",
        strength: "Flexible, prestigious and capable of rich illumination and local adaptation.",
        limit: "Slow, costly and vulnerable to accumulated copying variation.",
      },
      {
        method: "Woodblock printing",
        strength: "Excellent for repeated pages and images; deeply developed in East Asia.",
        limit: "Each page or image requires a newly carved block, and corrections can be difficult.",
      },
      {
        method: "Block books and stamped text",
        strength: "Useful for short devotional or visual works and repeated marks.",
        limit: "Less flexible than a reusable inventory of individual characters.",
      },
      {
        method: "Scribal stationer systems",
        strength: "Universities could divide exemplar texts into sections for parallel copying.",
        limit: "Parallel labour improved throughput but did not create mechanically identical copies.",
      },
    ],
    decisiveConstraint:
      "The winning system had to make thousands of small characters nearly identical in height, hold them firmly in lines, apply ink that adhered to metal, press paper evenly without smearing and then release every piece of type for reuse. The press alone was only one part.",
  },
  globalPrehistory: {
    introduction:
      "Printing developed through several regional traditions. A responsible history distinguishes printing, movable type and the European press system rather than treating them as the same invention.",
    entries: [
      {
        date: "7th–9th centuries",
        place: "China and East Asia",
        title: "Woodblock printing becomes established",
        description:
          "Texts and images were carved in reverse on wooden blocks, inked and transferred to paper. The dated 868 Diamond Sutra is a famous surviving complete printed scroll, not the beginning of the tradition.",
      },
      {
        date: "c.1040",
        place: "Northern Song China",
        title: "Bi Sheng's ceramic movable type",
        description:
          "Shen Kuo later described Bi Sheng making individual characters from baked clay, arranging them on an iron plate and reusing them. It was a genuine movable-type system.",
      },
      {
        date: "13th–14th centuries",
        place: "Goryeo Korea",
        title: "Movable metal type",
        description:
          "Korean printers developed cast metal type. Jikji, printed at Heungdeoksa Temple in 1377, is the oldest surviving evidence of a book printed with movable metal type.",
      },
      {
        date: "c.1440s–1450s",
        place: "Mainz, Holy Roman Empire",
        title: "Gutenberg's European production system",
        description:
          "Gutenberg combined metalworking, type casting, oil-based ink, screw-press mechanics and workshop organisation into a commercially powerful alphabetic printing method.",
      },
    ],
  },
  people: [
    {
      name: "Bi Sheng",
      life: "fl. c.1040",
      role: "Early movable-type inventor",
      contribution:
        "Created individual ceramic characters that could be arranged, printed and reused. The method is known from Shen Kuo's eleventh-century written account.",
      correction:
        "Bi Sheng predates Gutenberg by roughly four centuries, although the materials, scripts, presses and production contexts differed.",
    },
    {
      name: "Korean metal-type artisans",
      life: "13th–14th centuries",
      role: "Developers of cast metal movable type",
      contribution:
        "Produced metal-type books in Goryeo Korea. The surviving Jikji volume demonstrates a mature tradition by 1377.",
      correction:
        "The achievement belongs to workshops, patrons, monks and metalworkers, not to one securely identified inventor.",
    },
    {
      name: "Johannes Gutenberg",
      life: "c.1400–1468",
      role: "European printing-system developer",
      contribution:
        "Applied goldsmith and metalworking knowledge to punches, matrices, type casting and press production in Mainz. He is associated with the 42-line Bible workshop.",
      correction:
        "No original Gutenberg press survives, and many biographical details and workshop sequences remain uncertain.",
    },
    {
      name: "Johann Fust",
      life: "c.1400–1466",
      role: "Financier and later printer-publisher",
      contribution:
        "Provided major loans for Gutenberg's workshop. Their 1455 legal dispute reveals how capital-intensive experimental printing had become.",
    },
    {
      name: "Peter Schoeffer",
      life: "c.1425–1503",
      role: "Scribe, type designer, printer and publisher",
      contribution:
        "Worked with Fust and is associated with refined typography, colour printing, colophons and the successful continuation of Mainz printing.",
      correction:
        "The familiar lone-genius story often hides Schoeffer and the skilled compositors, punchcutters, pressmen and rubricators who made books possible.",
    },
    {
      name: "William Caxton",
      life: "c.1422–1491",
      role: "Printer who established a press in England",
      contribution:
        "Set up printing at Westminster in 1476 and published works in English, helping shape distribution, spelling choices and literary culture.",
    },
    {
      name: "Friedrich Koenig",
      life: "1774–1833",
      role: "Steam-powered press pioneer",
      contribution:
        "Developed mechanised presses using cylinders and steam power. The Times used a Koenig press in 1814, greatly increasing newspaper output.",
    },
    {
      name: "Ottmar Mergenthaler",
      life: "1854–1899",
      role: "Linotype inventor",
      contribution:
        "Mechanised composition by casting an entire line of type at once, transforming newspaper and book production in the late nineteenth century.",
    },
  ],
  experimentsAndFailures: [
    {
      period: "11th century",
      title: "Movable type did not automatically replace woodblocks",
      attempt:
        "Bi Sheng's individual ceramic characters could be arranged and reused instead of carving a whole page.",
      failure:
        "For texts using very large character sets, sorting, storing and retrieving thousands of symbols could outweigh the benefits. Woodblocks remained efficient for many long print runs and could combine text and image naturally.",
      lesson:
        "The best technology depends on language, run length, labour organisation, materials and the cost of searching an inventory—not only on abstract flexibility.",
      evidence: "Strongly supported",
    },
    {
      period: "Before the 1450s",
      title: "Gutenberg's exact failed trials are mostly hidden",
      attempt:
        "Court records from Strasbourg and Mainz show secretive technical work, partnerships, borrowing and equipment, but no laboratory notebook survives.",
      failure:
        "Historians cannot honestly list every prototype that broke. Claims about specific early presses, mirror schemes or exact dates often go beyond the evidence.",
      lesson:
        "Absence of documentation is itself important. Research-grade history must separate confirmed facts, reasonable reconstruction and later legend.",
      evidence: "Documented",
    },
    {
      period: "1440s–1450s",
      title: "Type consistency was a manufacturing problem",
      attempt:
        "Cast many copies of letters so they could align in a line and print with even pressure.",
      failure:
        "If types varied in height, only the tallest printed; if widths or bodies were inconsistent, lines loosened or spacing failed. Soft alloys wore quickly, while hard or brittle alloys were difficult to cast and finish.",
      lesson:
        "The punch–matrix–mould chain mattered because it converted hand craft into repeatable production tooling.",
      evidence: "Reconstructed from surviving evidence",
    },
    {
      period: "1440s–1450s",
      title: "Traditional writing ink did not behave on metal type",
      attempt:
        "Transfer dense black text from raised metal surfaces to paper or vellum.",
      failure:
        "Water-based inks suitable for pens or woodblocks did not necessarily coat metal evenly and could bead, spread or print weakly.",
      lesson:
        "Gutenberg's system required a viscous oil-based ink engineered for adhesion, opacity and controlled transfer.",
      evidence: "Strongly supported",
    },
    {
      period: "1450s",
      title: "The Bible project consumed extraordinary capital",
      attempt:
        "Produce a large, prestigious multi-volume Bible with hundreds of pages, large type inventories, paper or vellum, presses, workers and hand finishing.",
      failure:
        "Gutenberg borrowed heavily from Johann Fust. Their lawsuit ended with a judgment favouring Fust on important financial claims; the exact transfer of equipment and stock is debated.",
      lesson:
        "A technically successful invention can still fail its inventor financially. Scale-up, working capital and ownership structure shape who benefits.",
      evidence: "Documented",
    },
    {
      period: "15th century onward",
      title: "Mechanical sameness did not eliminate human error",
      attempt:
        "Create many consistent copies from one composed forme.",
      failure:
        "Compositors could select the wrong sort, reverse letters, omit lines or introduce corrections while a print run was already underway. Different states of the same edition may therefore exist.",
      lesson:
        "Printing changes error from repeated copying drift to high-speed replication of whatever the forme contains. Quality control becomes a workflow problem.",
      evidence: "Documented",
    },
  ],
  milestones: [
    {
      year: "c.700s",
      title: "Woodblock printing spreads in East Asia",
      description: "Carved blocks make repeated text and image impressions practical on paper.",
      pivotal: true,
    },
    {
      year: "868",
      title: "The Diamond Sutra is dated",
      description: "A celebrated complete surviving woodblock-printed scroll demonstrates mature printing culture.",
    },
    {
      year: "c.1040",
      title: "Bi Sheng's ceramic movable type",
      description: "Individual characters are made, arranged, printed and reused.",
      pivotal: true,
    },
    {
      year: "13th century",
      title: "Metal movable type in Korea",
      description: "Korean workshops develop cast metal type before the surviving Jikji volume.",
    },
    {
      year: "1377",
      title: "Jikji is printed",
      description: "The oldest surviving book printed with movable metal type is produced at Heungdeoksa Temple.",
      pivotal: true,
    },
    {
      year: "c.1440s",
      title: "Gutenberg develops his integrated process",
      description: "Metal type, casting tools, ink, press and workshop practices converge in the Rhineland.",
      pivotal: true,
    },
    {
      year: "1454–1455",
      title: "Indulgences and the 42-line Bible",
      description: "The Mainz workshop produces dated job printing and a monumental Bible in movable metal type.",
      pivotal: true,
    },
    {
      year: "1455",
      title: "Fust–Gutenberg lawsuit",
      description: "The financial dispute reveals the high capital requirements and uncertain ownership behind the workshop.",
    },
    {
      year: "1462",
      title: "Mainz conflict disperses printers",
      description: "Political violence contributes to the movement of trained printers and techniques into other European cities.",
    },
    {
      year: "1476",
      title: "Caxton establishes a Westminster press",
      description: "Printing in England expands vernacular publishing and book distribution.",
    },
    {
      year: "1500",
      title: "Printing is established across Europe",
      description: "Thousands of editions circulate from presses in many cities, creating a new information economy.",
    },
    {
      year: "1814",
      title: "Steam-powered newspaper press",
      description: "Koenig's machine prints The Times faster than hand presses and links printing to industrial power.",
      pivotal: true,
    },
    {
      year: "1840s–1860s",
      title: "Rotary and web presses",
      description: "Continuous rolls of paper and rotating cylinders enable mass-circulation newspapers.",
    },
    {
      year: "1886",
      title: "Linotype demonstrated",
      description: "Keyboard-operated line casting mechanises composition for newspapers and books.",
      pivotal: true,
    },
    {
      year: "20th–21st centuries",
      title: "Phototypesetting, offset, digital and network publishing",
      description: "Physical type gives way to photographic and electronic representations, while the logic of reusable symbols and reproducible layouts survives.",
    },
  ],
  howItWorks: {
    introduction:
      "A Gutenberg-style workshop is a chain. The typefounder makes reusable letters; the compositor assembles them into mirrored pages; the press crew inks and presses; finishers add rubrication, binding or decoration. Bottlenecks anywhere reduce the entire shop's output.",
    steps: [
      {
        title: "1. Cut a punch",
        explanation:
          "A hard metal punch carries a raised, correctly oriented letterform. Punchcutting determines the design and must be accurate enough to survive repeated striking.",
      },
      {
        title: "2. Strike a matrix",
        explanation:
          "The punch is driven into softer metal to create a recessed mould of the character. One matrix can generate many nearly identical types.",
      },
      {
        title: "3. Cast individual type",
        explanation:
          "The matrix is fitted into an adjustable hand mould. Molten type metal fills the body and character face. The type is removed, finished and checked for consistent height.",
      },
      {
        title: "4. Compose mirrored lines",
        explanation:
          "A compositor selects sorts from cases and sets them into a composing stick. Spaces, punctuation and abbreviations are physical objects. Lines are transferred into a page forme and locked tightly.",
      },
      {
        title: "5. Ink the raised surfaces",
        explanation:
          "Ink balls or rollers distribute a tacky oil-based ink across the type faces without filling the recessed spaces.",
      },
      {
        title: "6. Position paper and apply pressure",
        explanation:
          "The sheet is held in a frame, moved over the forme and pressed by a platen driven through a screw and lever. Even pressure transfers the inked image.",
      },
      {
        title: "7. Dry, inspect and print the reverse",
        explanation:
          "Sheets are checked, dried and later perfected on the other side with correct imposition and registration so pages appear in the right order after folding.",
      },
      {
        title: "8. Distribute and reuse the type",
        explanation:
          "After a run, the forme is unlocked and each sort returned to its case. The same inventory can compose an entirely different text.",
      },
    ],
    expertNotes: [
      {
        title: "Type height creates a common printing plane",
        explanation:
          "Every printable face must meet the paper under the platen. Small height errors cause light characters, damaged type or uneven impression.",
      },
      {
        title: "Imposition is spatial computation",
        explanation:
          "Pages are not placed in reading order on the forme. They are arranged so folding the printed sheet creates the correct sequence and orientation.",
      },
      {
        title: "Paper moisture changes transfer",
        explanation:
          "Slightly damp paper accepts ink and impression differently from dry paper. Press crews balanced moisture, ink tack, packing and pressure.",
      },
      {
        title: "Edition does not mean perfect identity",
        explanation:
          "Printers corrected formes during production, mixed sheets and used hand rubrication. Bibliographers distinguish issues, states and variants within what appears to be one edition.",
      },
    ],
  },
  anatomy: [
    { part: "Punch", purpose: "Creates the master raised letterform.", designProblem: "Letter design, hardness, carving accuracy and repeatability." },
    { part: "Matrix", purpose: "Carries the recessed character used for casting.", designProblem: "Alignment, depth and compatibility with the mould." },
    { part: "Hand mould", purpose: "Forms the body of each piece of type around the matrix.", designProblem: "Fast opening, adjustable width, heat resistance and constant type height." },
    { part: "Type alloy", purpose: "Produces sharp, durable, castable sorts.", designProblem: "Flow, shrinkage, hardness, brittleness, cooling speed and cost." },
    { part: "Composing stick", purpose: "Holds individual sorts while a line is assembled.", designProblem: "Line measure, justification and secure handling." },
    { part: "Forme and chase", purpose: "Lock an entire page or sheet arrangement into a rigid unit.", designProblem: "Maintaining alignment under repeated pressure." },
    { part: "Ink balls / rollers", purpose: "Apply a controlled film of ink to raised surfaces.", designProblem: "Uniformity, tack, wear and contamination." },
    { part: "Screw, lever and platen", purpose: "Multiply human force and press paper evenly onto type.", designProblem: "Pressure distribution, frame stiffness, speed and operator effort." },
    { part: "Tympan and frisket", purpose: "Hold and mask the sheet for alignment and clean margins.", designProblem: "Registration, sheet handling and avoiding ink on blank areas." },
  ],
  improvements: [
    {
      period: "c.1040",
      inventor: "Bi Sheng",
      improvement: "Reusable ceramic characters",
      whyItMattered: "Demonstrated the core logic of decomposing text into rearrangeable physical symbols.",
    },
    {
      period: "13th–14th centuries",
      inventor: "Korean printers and metalworkers",
      improvement: "Cast metal movable type",
      whyItMattered: "Improved durability and established a sophisticated metal-type tradition before European typography.",
    },
    {
      period: "c.1440s–1450s",
      inventor: "Gutenberg workshop",
      improvement: "Punch–matrix–mould production with press and ink system",
      whyItMattered: "Created a repeatable European alphabetic printing system capable of large, commercially valuable works.",
    },
    {
      period: "late 1400s",
      inventor: "European printers and publishers",
      improvement: "Roman and italic types, title pages, page numbers, printer's marks and distribution networks",
      whyItMattered: "The printed book acquired conventions different from the manuscript it initially imitated.",
    },
    {
      period: "1810s",
      inventor: "Friedrich Koenig and Andreas Bauer",
      improvement: "Steam-powered cylinder press",
      whyItMattered: "Mechanised impression and raised output for newspapers far beyond hand-press rates.",
    },
    {
      period: "1840s–1860s",
      inventor: "Richard March Hoe and others",
      improvement: "Rotary presses and continuous paper webs",
      whyItMattered: "Enabled very high-speed mass circulation and industrial newspaper production.",
    },
    {
      period: "1886",
      inventor: "Ottmar Mergenthaler",
      improvement: "Linotype line casting",
      whyItMattered: "Reduced the composition bottleneck by converting keyboard input into cast lines of type.",
    },
    {
      period: "20th century",
      inventor: "Many firms and engineers",
      improvement: "Offset lithography, phototypesetting and digital prepress",
      whyItMattered: "Separated image formation from physical movable type while preserving repeatable page composition.",
    },
  ],
  gallery: [
    {
      fileName: "Jikji movable type (replica), 1377 - Korean Culture Museum, Incheon Airport, Seoul, South Korea - DSC00787.JPG",
      alt: "Replica of metal movable type associated with the 1377 Jikji",
      credit: "Daderot",
      license: "CC0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Jikji_movable_type_(replica),_1377_-_Korean_Culture_Museum,_Incheon_Airport,_Seoul,_South_Korea_-_DSC00787.JPG",
      caption:
        "A museum replica representing the metal movable type used for Jikji in Korea in 1377, decades before Gutenberg's Bible.",
    },
    {
      fileName: "Metal movable type.jpg",
      alt: "Metal movable type in cases and a composing stick",
      credit: "Willi Heidelbach",
      license: "CC BY-SA 3.0 / CC BY 2.5",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Metal_movable_type.jpg",
      caption:
        "Individual metal sorts and composed lines. The physical inventory, mirrored letterforms and manual sorting make visible what digital fonts now hide.",
    },
    {
      fileName: "PrintMus 038.jpg",
      alt: "Demonstration of a Gutenberg-style printing press",
      credit: "vlasta2",
      license: "CC BY 2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:PrintMus_038.jpg",
      caption:
        "A reconstructed wooden press in use. The platen applies pressure to a sheet positioned over inked type.",
    },
    {
      fileName: "Gutenberg Bible B42 Genesis.JPG",
      alt: "Genesis page from the 42-line Gutenberg Bible",
      credit: "Johannes Gutenberg workshop / scan by Jossi",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gutenberg_Bible_B42_Genesis.JPG",
      caption:
        "A page from the 42-line Bible, around 1455. Printed black text was often completed with hand-added colour and decoration, showing continuity with manuscript culture.",
    },
  ],
  consequences: {
    transformed: [
      {
        title: "Cost per copy and scale",
        description:
          "Composition and type were expensive upfront, but additional impressions cost far less than commissioning another manuscript. Larger runs could spread fixed costs.",
      },
      {
        title: "Standardisation with visible variants",
        description:
          "Readers could consult substantially similar copies across distances. This supported shared references, while corrections and mixed sheets still produced bibliographic variants.",
      },
      {
        title: "Science and scholarship",
        description:
          "Tables, diagrams, observations and arguments circulated more widely. Scholars could criticise the same text, build cumulative literature and establish priority through publication.",
      },
      {
        title: "Religion and political argument",
        description:
          "Vernacular scripture, pamphlets and polemics amplified reform movements and public controversy. Authorities responded with licensing, censorship and punishment.",
      },
      {
        title: "Language and literacy",
        description:
          "Print expanded reading markets and encouraged spelling, grammar and vocabulary conventions, though spoken and written diversity did not disappear.",
      },
      {
        title: "News and public spheres",
        description:
          "Periodicals and newspapers created recurring information markets, eventually making rapid mass communication part of ordinary political and commercial life.",
      },
    ],
    tradeoffs: [
      {
        title: "Misinformation at scale",
        description:
          "The same system that spread scholarship also multiplied rumours, forged texts, propaganda and defamatory claims faster than face-to-face correction.",
      },
      {
        title: "Censorship and surveillance",
        description:
          "Governments and religious authorities registered printers, licensed books, seized presses and punished forbidden publication. Print expanded control as well as freedom.",
      },
      {
        title: "Commercial gatekeeping",
        description:
          "Presses, type, paper and distribution required capital. Printers and publishers became powerful intermediaries deciding what was economically worth reproducing.",
      },
      {
        title: "Labour displacement and restructuring",
        description:
          "Scribes did not vanish overnight, but copying, illumination, composition, presswork, binding and bookselling were reorganised into new specialised trades.",
      },
      {
        title: "Standardisation can erase variation",
        description:
          "Dominant languages, spellings and editions gained reach. Local versions and minority traditions could be marginalised when markets rewarded uniform products.",
      },
    ],
  },
  modernDescendants: [
    { title: "Digital fonts", connection: "Store reusable character designs as data rather than metal sorts, but still separate glyph design from text composition." },
    { title: "Page-layout software", connection: "Performs digital composition, spacing, imposition and preflight that once required physical type and formes." },
    { title: "Laser and inkjet printers", connection: "Create impressions without a permanent physical page forme, enabling low-cost variable output." },
    { title: "Web publishing", connection: "Makes one encoded source reproducible across devices and locations, extending the economics of near-zero-copy distribution." },
    { title: "Version control", connection: "Tracks corrections and states explicitly—the digital answer to variants that bibliographers reconstruct from printed sheets." },
    { title: "Search engines and social media", connection: "Scale discovery and distribution far beyond print while inheriting its central tension between access, authority and misinformation." },
  ],
  myths: [
    {
      claim: "Gutenberg invented printing.",
      verdict: "False",
      explanation:
        "Woodblock printing and movable type existed in East Asia earlier. Gutenberg developed an extraordinarily influential European metal-type press system.",
    },
    {
      claim: "The Gutenberg Bible was the first printed book.",
      verdict: "False",
      explanation:
        "It was the first great Western European book printed with movable metal type, not the first printed book in world history.",
    },
    {
      claim: "A wine press was simply repurposed and the invention was finished.",
      verdict: "Misleading",
      explanation:
        "Screw-press mechanics were important, but repeatable type casting, alloy, ink, composition, registration and workflow were equally essential.",
    },
    {
      claim: "Printed copies were perfectly identical.",
      verdict: "False",
      explanation:
        "Printers corrected formes during runs, used different papers and hand finishing, and sometimes mixed sheets. Surviving copies can differ.",
    },
    {
      claim: "The press automatically created literacy and democracy.",
      verdict: "Too deterministic",
      explanation:
        "Print lowered barriers and expanded circulation, but education, wealth, language, law, censorship, distribution and politics determined who could read and speak.",
    },
  ],
  glossary: [
    { term: "Movable type", definition: "Individual reusable characters or symbols assembled into a temporary printing surface." },
    { term: "Sort", definition: "One physical piece of type carrying a letter, number, punctuation mark or space." },
    { term: "Punch", definition: "A hard metal master bearing a raised character used to strike a matrix." },
    { term: "Matrix", definition: "A recessed character mould used in casting many copies of a type." },
    { term: "Forme", definition: "A locked arrangement of type and other printing elements ready for the press." },
    { term: "Imposition", definition: "Arranging pages on a sheet so they appear in the correct sequence after printing, folding and cutting." },
    { term: "Platen", definition: "The flat pressing surface that forces paper against inked type in a common press." },
    { term: "Incunable", definition: "A book printed in Europe during the earliest period of movable-type printing, conventionally before 1501." },
    { term: "Rubrication", definition: "Hand addition of coloured headings, initials or marks to a printed page." },
    { term: "State", definition: "A distinguishable form of printed material created by an alteration during production." },
  ],
  researchQuestions: [
    "How should world histories compare technologies that use different scripts, materials, page formats and labour systems without ranking them by a single European standard?",
    "Which technical features of Gutenberg's type-casting process can be demonstrated from surviving type and pages, and which remain reconstruction?",
    "How did paper supply, credit and urban trade networks influence where early presses succeeded?",
    "Did print standardise knowledge, or did it first multiply competing versions and controversies?",
    "What can ink chemistry, watermarks, type damage and page variants reveal about workshop organisation?",
    "Which parallels between the printing revolution and today's internet are useful, and where do they become misleading?",
  ],
  sources: [
    {
      label: "The Gutenberg Bible",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/exhibits/bibles/the-gutenberg-bible.html",
      note: "Collection overview describing the Bible as the first great Western European book printed from movable metal type.",
    },
    {
      label: "Interactive Gutenberg Bible",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/exhibits/bibles/interactives/gutenberg/index.html",
      note: "Explicitly distinguishes Gutenberg's achievement from earlier Korean movable metal type.",
    },
    {
      label: "Baegun hwasang chorok buljo jikji simche yojeol",
      publisher: "UNESCO Memory of the World",
      url: "https://www.unesco.org/en/memory-world/baegun-hwasang-chorok-buljo-jikji-simche-yojeol-volii-second-volume-anthology-great-buddhist-priests",
      note: "Official record for Jikji as the oldest surviving evidence of movable metal-type printing.",
    },
    {
      label: "From Jikji to Gutenberg",
      publisher: "Library of Congress Preservation",
      url: "https://blogs.loc.gov/preservation/2023/05/jikji-gutenberg/",
      note: "Scholarly project linking Korean and European print history without assuming a simplistic single origin.",
    },
    {
      label: "Alphabet Venture",
      publisher: "Library of Congress",
      url: "https://blogs.loc.gov/international-collections/2018/06/alphabet-venture/",
      note: "Discusses Gutenberg's financing, goldsmith skill and large inventory of type designs.",
    },
    {
      label: "Birth of Korean Metal Type Culture",
      publisher: "Printing Museum, Tokyo",
      url: "https://www.printing-museum.org/en/collection/exhibition/p20140426.php",
      note: "Museum exhibition record on Korean metal type before Gutenberg and the wider history of printing.",
    },
  ],
};

export const INVENTIONS: readonly Invention[] = [steamEngine, printingPress];

export function getInvention(slug: string) {
  return INVENTIONS.find((invention) => invention.slug === slug);
}
