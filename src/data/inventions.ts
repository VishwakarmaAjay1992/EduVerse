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

const electricalTelegraph: Invention = {
  slug: "electrical-telegraph",
  title: "Electrical Telegraph",
  subtitle: "How coded electrical pulses made long-distance communication faster than transport",
  category: "Communication & Networks",
  era: "1820s–1870s",
  origin: "Developed through parallel European and American experiments, then expanded into international cable networks",
  statusLine: "A network system assembled from electromagnetism, codes, instruments, operators and wires",
  summary: [
    "The electrical telegraph separated the speed of communication from the speed of a horse, ship or railway. Instead of physically carrying a written message, an operator converted information into controlled electrical signals that travelled through a circuit and were reconstructed at a distant station.",
    "No single inventor created the complete system. Pavel Schilling, Carl Friedrich Gauss, Wilhelm Weber, William Fothergill Cooke, Charles Wheatstone, Samuel Morse, Alfred Vail, Joseph Henry and many instrument makers contributed different combinations of receivers, relays, codes, line practices and commercial organization. Cooke and Wheatstone developed a practical needle telegraph for British railways, while the Morse-Vail system became especially influential because it could send messages over long lines with a comparatively simple circuit and code.",
    "The telegraph became useful only when it grew beyond the laboratory. Insulators, batteries, relays, standardized time, trained operators, rights-of-way, maintenance crews, tariffs and submarine cables turned an instrument into a communications infrastructure. It accelerated news, finance, railway control, diplomacy and empire, while also concentrating power in governments and large network companies.",
  ],
  heroImage: {
    fileName: "Cooke and Wheatstone electric telegraph.jpg",
    alt: "A five-needle Cooke and Wheatstone electrical telegraph instrument from 1837",
    credit: "Geni",
    license: "CC BY-SA 3.0 / GFDL",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cooke_and_Wheatstone_electric_telegraph.jpg",
    caption:
      "A surviving Cooke and Wheatstone five-needle telegraph associated with the first practical railway installations in Britain. The display shows how deflecting needles could point directly to letters.",
    objectPosition: "50% 48%",
  },
  quickFacts: [
    { label: "Original necessity", value: "Send information faster than a messenger could travel" },
    { label: "Key scientific basis", value: "Electric current producing a magnetic effect" },
    { label: "Early commercial system", value: "Cooke and Wheatstone railway telegraph, 1837–1838" },
    { label: "Influential coded system", value: "Morse-Vail recording and sounder telegraph" },
    { label: "Famous public demonstration", value: "Washington to Baltimore, 24 May 1844" },
    { label: "Historical caution", value: "The instrument, code and worldwide network had different contributors" },
  ],
  necessity: {
    headline: "Necessity: decisions were moving faster than messages",
    introduction:
      "Industrial economies, railways, newspapers, armies and financial markets increasingly needed information before a courier could deliver it. A delayed warning could cause a railway collision, a missed price could cost a merchant heavily, and distant governments could wait weeks for reports from overseas.",
    pressures: [
      {
        title: "Railways needed traffic control",
        description:
          "Trains moved faster than traditional signalling systems and shared limited track. Station staff needed a method to report departures, arrivals, obstructions and emergencies along the line.",
      },
      {
        title: "Markets valued fresh information",
        description:
          "Commodity prices, exchange rates and shipping news changed before letters arrived. Faster information created a direct commercial advantage and justified network fees.",
      },
      {
        title: "Newspapers competed on speed",
        description:
          "Editors wanted distant political and military reports quickly enough to publish them while they were still news, encouraging pooled reporting and dedicated wire services.",
      },
      {
        title: "States needed command over distance",
        description:
          "Governments and armed forces sought rapid communication across national territory and, later, across oceans. This made the telegraph strategically important but also enabled surveillance and centralized control.",
      },
    ],
    before: [
      {
        method: "Mounted couriers and mail coaches",
        strength: "Could carry long, detailed documents without electrical infrastructure.",
        limit: "Speed was limited by terrain, animals, roads, weather and relay stations.",
      },
      {
        method: "Semaphore and optical telegraph towers",
        strength: "Could transmit coded messages rapidly across a prepared line of sight.",
        limit: "Required daylight or strong illumination, clear weather, many staffed towers and uninterrupted visibility.",
      },
      {
        method: "Flags, lamps, bells and signal guns",
        strength: "Effective for short-range signalling with simple agreed meanings.",
        limit: "Low information capacity and limited range; complex messages were difficult or impossible.",
      },
      {
        method: "Ships and packet services",
        strength: "Connected continents and carried original documents and physical goods.",
        limit: "Ocean communication still took days or weeks and could be interrupted by storms or war.",
      },
    ],
    decisiveConstraint:
      "The central engineering challenge was not merely detecting electricity at a distance. The system had to produce an unmistakable signal over resistive wire, encode language efficiently, operate reliably in poor weather, and be affordable enough to install and maintain across hundreds or thousands of kilometres.",
  },
  globalPrehistory: {
    introduction:
      "The telegraph emerged from earlier signalling systems and a rapidly developing science of electricity and magnetism. Its history includes parallel experiments rather than one straight line of invention.",
    entries: [
      {
        date: "Ancient to early modern eras",
        place: "Multiple regions",
        title: "Visual and acoustic signalling",
        description:
          "Beacon fires, drums, flags and other coded signals demonstrated that information could be represented and relayed without moving a written document.",
      },
      {
        date: "1790s",
        place: "France",
        title: "Chappe optical telegraph network",
        description:
          "Claude Chappe's semaphore towers formed a state-operated network that transmitted coded symbols rapidly between visible stations, proving the administrative value of high-speed communication.",
      },
      {
        date: "1800",
        place: "Italy and Britain",
        title: "Reliable electric current",
        description:
          "Alessandro Volta's pile supplied sustained current, making controlled electrical experiments and practical circuits more feasible than static-electricity demonstrations.",
      },
      {
        date: "1820",
        place: "Denmark and Europe",
        title: "Current linked to magnetism",
        description:
          "Hans Christian Ørsted showed that current deflected a magnetic needle. Researchers quickly explored electromagnets and instruments that could convert current into visible motion.",
      },
      {
        date: "1832–1833",
        place: "Russia and German states",
        title: "Experimental electromagnetic telegraphs",
        description:
          "Pavel Schilling built a needle-based telegraph, while Gauss and Weber operated an experimental line in Göttingen. These systems demonstrated workable long-distance electrical signalling before mass deployment.",
      },
    ],
  },
  people: [
    {
      name: "William Fothergill Cooke",
      life: "1806–1879",
      role: "Promoter, designer and commercial organizer",
      contribution:
        "Recognized the railway value of electrical signalling, partnered with Wheatstone and drove patents, demonstrations and early installations in Britain.",
      correction:
        "Cooke was not working alone; his practical urgency depended on Wheatstone's scientific and instrument expertise and on railway customers willing to install the system.",
    },
    {
      name: "Charles Wheatstone",
      life: "1802–1875",
      role: "Experimental scientist and instrument designer",
      contribution:
        "Developed sensitive needle arrangements, helped design the Cooke-Wheatstone instruments and investigated signal transmission through circuits.",
    },
    {
      name: "Samuel F. B. Morse",
      life: "1791–1872",
      role: "System inventor, promoter and patent holder",
      contribution:
        "Developed an influential single-circuit recording telegraph concept, secured support for a demonstration line and organized its public presentation in the United States.",
      correction:
        "Morse did not independently invent every essential element; relays, code refinements, mechanics, finance and line construction involved collaborators and prior research.",
    },
    {
      name: "Alfred Vail",
      life: "1807–1859",
      role: "Mechanician, financier and system developer",
      contribution:
        "Built and improved apparatus for the Morse partnership and played a major role in turning a laboratory concept into robust keys, registers and an efficient symbol system.",
    },
    {
      name: "Joseph Henry",
      life: "1797–1878",
      role: "Electromagnetism researcher",
      contribution:
        "Demonstrated powerful electromagnets, long-wire signalling and relay principles that informed practical telegraph engineering; he also advised Morse during development.",
    },
    {
      name: "Pavel Schilling",
      life: "1786–1837",
      role: "Early electromagnetic telegraph pioneer",
      contribution:
        "Constructed a working needle telegraph using coded deflections, helping establish that electromagnetic signalling could convey language.",
    },
    {
      name: "Line builders and telegraph operators",
      life: "19th century",
      role: "Infrastructure and operational workforce",
      contribution:
        "Selected routes, erected poles, maintained batteries and insulators, learned codes, repeated weak signals and created the working procedures that made networks dependable.",
    },
  ],
  experimentsAndFailures: [
    {
      period: "Early 1800s",
      title: "Many-wire electrochemical telegraphs",
      attempt:
        "Some inventors assigned a separate wire or electrochemical indicator to each letter or symbol.",
      failure:
        "The number of conductors, contacts and receivers made long-distance installation expensive and difficult to maintain.",
      lesson:
        "A commercially scalable system needed to encode many symbols through a small number of wires and repeatable time sequences.",
      evidence: "Documented",
    },
    {
      period: "1830s",
      title: "Complex multi-needle instruments",
      attempt:
        "Five-needle systems allowed pairs of needles to point directly at letters, reducing the need for operators to memorize a separate code.",
      failure:
        "They required multiple conductors, expensive instruments and careful adjustment; simpler one- or two-needle systems were cheaper for longer routes.",
      lesson:
        "Ease of reading had to be balanced against line cost and electrical reliability.",
      evidence: "Documented",
    },
    {
      period: "1830s–1840s",
      title: "Weak signals on long wires",
      attempt:
        "Early circuits tried to operate a distant receiver directly from a battery through long, resistive conductors.",
      failure:
        "Current weakened with distance, leakage and poor insulation, producing unreliable movement or marks.",
      lesson:
        "Relays, better batteries, improved insulation and line testing were system-level necessities, not optional refinements.",
      evidence: "Documented",
    },
    {
      period: "1850s",
      title: "The first Atlantic cable",
      attempt:
        "A submarine cable laid in 1858 briefly carried transatlantic messages.",
      failure:
        "The cable suffered from poor manufacture, handling damage and excessive operating voltage; service failed after only a short period.",
      lesson:
        "Submarine telegraphy required improved cable structure, careful electrical testing and an understanding of signal distortion in long cables.",
      evidence: "Documented",
    },
    {
      period: "Network expansion",
      title: "Weather, leakage and line breaks",
      attempt:
        "Operators treated overhead wire as if its electrical behaviour would remain constant.",
      failure:
        "Rain, dirty insulators, vegetation, corrosion and broken poles changed circuit resistance or grounded the line.",
      lesson:
        "Maintenance crews, sectional testing and standardized components were as important as the signalling instrument.",
      evidence: "Strongly supported",
    },
  ],
  milestones: [
    { year: "1794", title: "Chappe network enters service", description: "France demonstrates that a national high-speed coded communications network has military and administrative value." },
    { year: "1820", title: "Ørsted's observation", description: "Electric current is publicly linked to magnetic needle deflection, opening a practical route to electrical receivers." },
    { year: "1832", title: "Schilling telegraph demonstrated", description: "A coded electromagnetic needle system shows that multiple symbols can be transmitted electrically." },
    { year: "1833", title: "Gauss-Weber line operates", description: "A wire connection between scientific facilities in Göttingen carries experimental signals over distance." },
    { year: "1837", title: "Cooke-Wheatstone and Morse systems patented", description: "Distinct British and American approaches move toward practical deployment.", pivotal: true },
    { year: "1838", title: "Railway telegraph trials", description: "Cooke and Wheatstone instruments are tested and installed for railway operation in Britain." },
    { year: "1844", title: "Washington-Baltimore demonstration", description: "The Morse-Vail system sends a widely publicized message over a federally supported line.", pivotal: true },
    { year: "1851", title: "Submarine link across the Channel", description: "A durable cable connects Britain and France, proving the commercial value of undersea telegraphy." },
    { year: "1858", title: "First Atlantic cable briefly operates", description: "The achievement captures public attention but fails quickly, exposing major cable-engineering problems." },
    { year: "1866", title: "Reliable Atlantic service established", description: "Improved cable design, testing and laying methods create sustained transatlantic telegraph communication.", pivotal: true },
    { year: "1870s", title: "Duplex and quadruplex working", description: "Engineers transmit multiple messages on one wire, increasing network capacity without duplicating routes." },
  ],
  howItWorks: {
    introduction:
      "A basic telegraph converts a deliberate hand movement into a controlled change of electric current. The distant receiver converts that current back into motion, sound or a mark. A code maps the timing or direction of those signals to letters and numbers.",
    steps: [
      { title: "Compose and encode", explanation: "The sender translates words into an agreed symbol code, such as short and long signal elements." },
      { title: "Close the key", explanation: "Pressing the key completes the circuit so current flows from the battery into the line." },
      { title: "Transmit through the line", explanation: "The signal travels through conducting wire while insulation limits leakage into the ground or supporting structures." },
      { title: "Operate the receiver", explanation: "Current energizes an electromagnet, moving an armature, needle, sounder or recording mechanism." },
      { title: "Restore and space", explanation: "Releasing the key breaks the current; the pattern of energized and unenergized intervals carries the message." },
      { title: "Repeat when necessary", explanation: "On long routes, a relay uses a weak incoming signal to switch a fresh local circuit for the next section." },
      { title: "Decode and deliver", explanation: "An operator reads the marks or sounds, writes the text and routes the telegram to its recipient." },
    ],
    expertNotes: [
      { title: "Line resistance", explanation: "Longer and thinner conductors resist current more strongly, reducing receiver force unless voltage, wire size or relay spacing changes." },
      { title: "Earth return", explanation: "Many networks used the ground as one side of the circuit, reducing wire cost but introducing dependence on soil conditions and good earth connections." },
      { title: "Submarine capacitance", explanation: "A long insulated cable stores charge, smearing sharp pulses and limiting signalling speed unless instruments and codes are adapted." },
      { title: "Information layer", explanation: "The physical pulse is not the message by itself. Meaning comes from coding conventions, operator practice, addresses, timing and network routing." },
    ],
  },
  anatomy: [
    { part: "Battery", purpose: "Provides electrical potential for the signalling circuit.", designProblem: "Cells had to be stable, maintainable and sized for line resistance." },
    { part: "Key or transmitter", purpose: "Lets the operator make controlled current pulses.", designProblem: "Contacts had to switch repeatedly without sticking, burning or producing ambiguous timing." },
    { part: "Line wire", purpose: "Carries the electrical signal between stations.", designProblem: "Conductivity, mechanical strength, corrosion, cost and route length had to be balanced." },
    { part: "Insulators", purpose: "Prevent current leaking from the wire into poles or ground.", designProblem: "Rain, dirt, salt and cracked materials could sharply reduce insulation resistance." },
    { part: "Receiver electromagnet", purpose: "Converts current into mechanical movement.", designProblem: "It needed adequate sensitivity without responding to noise or remaining magnetized." },
    { part: "Sounder, needle or register", purpose: "Presents the signal in an audible, visual or recorded form.", designProblem: "The output had to be fast, distinct and easy for operators to interpret." },
    { part: "Relay", purpose: "Controls a fresh circuit using a weak incoming signal.", designProblem: "Contact adjustment and local battery condition determined whether distant sections remained reliable." },
    { part: "Code and operating rules", purpose: "Map signals to language and coordinate network traffic.", designProblem: "Codes had to be efficient, learnable and resistant to timing errors." },
  ],
  improvements: [
    { period: "1830s", inventor: "Cooke and Wheatstone", improvement: "Needle telegraph instruments and railway application", whyItMattered: "Created a practical commercial use case and direct visual letter indication." },
    { period: "1830s–1840s", inventor: "Morse, Vail and collaborators", improvement: "Single-circuit key, receiver and efficient code", whyItMattered: "Reduced conductor count and supported long-distance operation with trained operators." },
    { period: "1840s", inventor: "Multiple line engineers", improvement: "Electromagnetic relays", whyItMattered: "Allowed weak signals to control fresh local circuits and extend range." },
    { period: "1840s–1860s", inventor: "Cable makers and physicists", improvement: "Better gutta-percha insulation and armored submarine cable", whyItMattered: "Made durable underwater routes possible." },
    { period: "1850s–1870s", inventor: "Network operators", improvement: "Standardized poles, insulators, testing and maintenance", whyItMattered: "Raised service availability across large networks." },
    { period: "1870s", inventor: "J. B. Stearns and Thomas Edison", improvement: "Duplex and quadruplex telegraphy", whyItMattered: "Sent multiple messages simultaneously over one wire, multiplying capacity." },
    { period: "Late 1800s", inventor: "Émile Baudot and others", improvement: "Printing and multiplex telegraph systems", whyItMattered: "Reduced dependence on manual code copying and prepared the way for teletype networks." },
  ],
  gallery: [
    {
      fileName: "Morse Telegraph 1837.jpg",
      alt: "A reconstructed or preserved 1837 Morse telegraph instrument",
      credit: "Zubro",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Morse_Telegraph_1837.jpg",
      caption: "A museum-displayed Morse telegraph associated with the 1837 design stage, before the later public line and standardized operating practice.",
    },
    {
      fileName: "Cooke Wheatstone Telegraph 2.jpg",
      alt: "Five-needle Cooke and Wheatstone telegraph indicating a letter",
      credit: "Wrrglla",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cooke_Wheatstone_Telegraph_2.jpg",
      caption: "A five-needle receiver. Two deflected needles intersect at a printed letter, trading extra wires for direct readability.",
    },
    {
      fileName: "Samuel F.B. Morse, half-length portrait, posing with left hand on a telegraph apparatus, facing slightly left LCCN2001700118.jpg",
      alt: "Samuel Morse posed beside telegraph apparatus around 1850",
      credit: "Library of Congress",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Samuel_F.B._Morse,_half-length_portrait,_posing_with_left_hand_on_a_telegraph_apparatus,_facing_slightly_left_LCCN2001700118.jpg",
      caption: "Samuel Morse photographed with telegraph apparatus. The portrait reflects how the public story often centered one famous promoter despite a wider development network.",
    },
    {
      fileName: "Morse-telegraph-key-master-texture (Smithsonian Institution).png",
      alt: "Detailed Smithsonian image of a Morse-Vail telegraph key",
      credit: "Smithsonian Institution",
      license: "CC0 1.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Morse-telegraph-key-master-texture_(Smithsonian_Institution).png",
      caption: "A detailed record of the Morse-Vail key: a simple human interface whose contact quality and timing shaped every transmitted character.",
    },
    {
      fileName: "C&W telegraph circuit.svg",
      alt: "Circuit diagram for a Cooke and Wheatstone five-needle telegraph",
      credit: "Spinningspark",
      license: "CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:C%26W_telegraph_circuit.svg",
      caption: "A modern explanatory diagram of the conductor and needle arrangement in a five-needle telegraph circuit.",
    },
  ],
  consequences: {
    transformed: [
      { title: "Railway safety and scheduling", description: "Stations could coordinate train movements, communicate delays and support standardized railway time." },
      { title: "News and journalism", description: "Wire services and newspapers distributed reports rapidly across regions, changing what counted as current events." },
      { title: "Finance and trade", description: "Prices and orders moved faster, linking markets and rewarding those with privileged access to information." },
      { title: "Diplomacy and administration", description: "Central authorities could issue instructions and receive reports without waiting for physical mail." },
      { title: "Global communications infrastructure", description: "Submarine cables created the first near-instant intercontinental information network and a foundation for later telecommunications." },
    ],
    tradeoffs: [
      { title: "Centralized control", description: "Governments and corporations gained unprecedented ability to direct distant operations and monitor communications." },
      { title: "Unequal access", description: "Network routes and tariffs favored strategic cities, businesses and imperial centers before service became more widely available." },
      { title: "Labour pressure", description: "Operators performed highly skilled repetitive work under speed expectations, surveillance and occupational stress." },
      { title: "Military and colonial use", description: "Telegraph lines supported conquest, resource extraction and rapid coordination of coercive power as well as civilian communication." },
      { title: "Information advantage", description: "Those who controlled lines or received messages first could exploit markets and politics before others could respond." },
    ],
  },
  modernDescendants: [
    { title: "Telephone networks", connection: "Reused rights-of-way, poles, switching practices and the concept of converting information into electrical signals." },
    { title: "Telex and teleprinters", connection: "Automated the encoding and printing of messages over switched text networks." },
    { title: "Computer data links", connection: "Digital communication still represents information as discrete signal states governed by protocols." },
    { title: "Fiber-optic cables", connection: "Replace electrical pulses with light while retaining repeaters, routing, coding and long-haul network architecture." },
    { title: "Internet messaging", connection: "Separates message content from physical transport through layers of encoding, addressing, routing and reconstruction." },
  ],
  myths: [
    {
      claim: "Samuel Morse single-handedly invented the telegraph and Morse code.",
      verdict: "Misleading",
      explanation:
        "Morse was central to one influential system, but electromagnetic telegraphs were developed in several countries. Alfred Vail, Joseph Henry, instrument makers, line engineers and other code traditions were also important.",
    },
    {
      claim: "The 1844 message was the first electrical telegraph message ever sent.",
      verdict: "False",
      explanation:
        "It was a famous public demonstration on a substantial American line, not the first experimental electrical message. Earlier working systems included Schilling's and the Gauss-Weber line.",
    },
    {
      claim: "A telegraph signal travels perfectly and instantly through any wire.",
      verdict: "False",
      explanation:
        "Resistance, leakage, inductance and capacitance weaken or distort signals. Long lines and submarine cables required relays, specialized instruments and careful operating speeds.",
    },
    {
      claim: "The telegraph was only a faster form of mail.",
      verdict: "Incomplete",
      explanation:
        "It changed institutions as well as speed: railway dispatch, time coordination, wire journalism, financial arbitrage and centralized command all depended on the network's near-real-time character.",
    },
  ],
  glossary: [
    { term: "Circuit", definition: "A complete conducting path through which electric current can flow." },
    { term: "Key", definition: "A manually operated switch used to create timed telegraph pulses." },
    { term: "Electromagnet", definition: "A coil and magnetic core that produce magnetic force when current flows." },
    { term: "Armature", definition: "The movable iron component attracted by an energized electromagnet." },
    { term: "Relay", definition: "An electrically operated switch that lets a weak signal control a stronger local circuit." },
    { term: "Sounder", definition: "A receiver that produces distinct clicks which a trained operator interprets as code." },
    { term: "Register", definition: "A receiver that records incoming signal patterns on moving paper." },
    { term: "Insulator", definition: "A material and component that limits unwanted current leakage from the line." },
    { term: "Duplex", definition: "A method for sending two messages over the same wire, commonly in opposite directions at once." },
    { term: "Submarine cable", definition: "An insulated and protected communications cable laid beneath water." },
  ],
  researchQuestions: [
    "How should credit be divided among scientific discovery, instrument design, coding, finance and network construction?",
    "How did operator communities modify formal codes and procedures in daily practice?",
    "Which railway safety improvements can be directly attributed to telegraph installation rather than to broader signalling reforms?",
    "How did telegraph tariffs and route placement shape regional economic inequality?",
    "How did submarine cable ownership influence diplomacy, war reporting and colonial administration?",
  ],
  sources: [
    {
      label: "Samuel F. B. Morse Papers",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/collections/samuel-morse-papers-at-the-library-of-congress/about-this-collection/",
      note: "Primary manuscripts, correspondence, drawings and records documenting Morse's work and partnerships.",
    },
    {
      label: "Joseph Henry: Inventor of the Telegraph?",
      publisher: "Smithsonian Institution Archives",
      url: "https://siarchives.si.edu/collections/siris_sic_12604",
      note: "Institutional account of Henry's electromagnetic research and its relationship to telegraph development.",
    },
    {
      label: "Cooke and Wheatstone five-needle telegraph",
      publisher: "Science Museum Group Collection",
      url: "https://collection.sciencemuseumgroup.org.uk/objects/co32899/cooke-and-wheatstone-five-needle-telegraph",
      note: "Museum object record for an early British needle telegraph and its railway context.",
    },
    {
      label: "Morse-Vail Telegraph Key",
      publisher: "Smithsonian 3D",
      url: "https://3d.si.edu/object/3d/morse-vail-telegraph-key:ed99f44d-3c60-4111-b666-e2908e1b64ef",
      note: "High-resolution institutional model of a surviving transmitting key associated with the 1844 system.",
    },
    {
      label: "The Atlantic Cable",
      publisher: "Institution of Engineering and Technology Archives",
      url: "https://www.theiet.org/membership/library-and-archives/the-iet-archives/archives-highlights/the-transatlantic-telegraph-cables-1865-1866",
      note: "Engineering-history overview of early transatlantic cable attempts, failure and eventual success.",
    },
    {
      label: "What Hath God Wrought — Telegraph Centennial Plaque",
      publisher: "Architect of the Capitol",
      url: "https://www.aoc.gov/explore-capitol-campus/art/telegraph-centennial-plaque",
      note: "Official record of the commemorated 1844 Washington-Baltimore transmission.",
    },
  ],
};

const electricLight: Invention = {
  slug: "electric-light",
  title: "Electric Light",
  subtitle: "How experiments with arcs, filaments, vacuum and power networks replaced flame illumination",
  category: "Electricity & Daily Life",
  era: "1800s–1910s",
  origin: "Developed internationally through British, American, European and Russian electrical research and industry",
  statusLine: "Not one bulb, but a lamp-and-power system refined by many teams",
  summary: [
    "Electric lighting did not begin with a single famous bulb. Early nineteenth-century experimenters produced brilliant electric arcs, but those lamps were too intense and demanding for ordinary rooms. Later inventors tried to heat a conductor until it glowed inside a partially evacuated glass envelope, creating the incandescent lamp.",
    "Joseph Swan and Thomas Edison are among the best-known developers, but they worked within a much wider field that included Humphry Davy, Warren de la Rue, Frederick de Moleyns, Alexander Lodygin, Hiram Maxim, William Sawyer, Albon Man, Lewis Latimer and many glassworkers, vacuum-pump specialists, chemists and electrical engineers. Edison’s major achievement was not merely a filament: his team designed a practical high-resistance lamp alongside generators, wiring, meters, switches, sockets and a distribution network.",
    "Electric light transformed working hours, streets, homes, factories and entertainment. It reduced some fire and smoke hazards associated with open flames, but created new risks, new monopolies and rising electricity demand. The modern story continues through tungsten filaments, fluorescent lamps, discharge lighting and LEDs, each improving efficiency while changing manufacturing and environmental trade-offs.",
  ],
  heroImage: {
    fileName: "Joseph Swan in his Laboratory (9672405514).jpg",
    alt: "Joseph Swan standing in his laboratory beside early electric lighting apparatus",
    credit: "Science Museum Group / Tyne & Wear Archives & Museums",
    license: "No known copyright restrictions",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Joseph_Swan_in_his_Laboratory_(9672405514).jpg",
    caption:
      "Joseph Swan in his laboratory. Swan demonstrated an incandescent lamp in Britain before he and Edison later combined commercial interests in the Edison & Swan United Electric Light Company.",
    objectPosition: "50% 40%",
  },
  quickFacts: [
    { label: "Original necessity", value: "Safer, cleaner and more controllable illumination than open flame" },
    { label: "Early electric method", value: "Arc lamps using an electrical discharge between carbon electrodes" },
    { label: "Incandescent principle", value: "Heat a filament until it emits visible light" },
    { label: "Key enclosure problem", value: "Keep oxygen away from the hot filament" },
    { label: "System breakthrough", value: "Lamp, generator, wiring, controls and distribution designed together" },
    { label: "Historical caution", value: "Edison commercialized a practical system; he did not invent electric light from nothing" },
  ],
  necessity: {
    headline: "Necessity: flame lighting was useful, dirty and dangerous",
    introduction:
      "Candles, oil lamps and gas lighting extended human activity after sunset, but they consumed oxygen, produced heat and soot, required fuel handling and could ignite buildings. Growing cities and factories demanded brighter, more controllable light that could be distributed without an open flame at every point of use.",
    pressures: [
      {
        title: "Fire and explosion risk",
        description:
          "Open flames could ignite curtains, timber, dust or leaking gas. Mines and industrial spaces made flame hazards especially severe.",
      },
      {
        title: "Smoke, heat and indoor air",
        description:
          "Oil and gas lighting produced combustion products and significant heat. Large illuminated interiors required ventilation and frequent cleaning.",
      },
      {
        title: "Industrial working hours",
        description:
          "Factories, workshops and shops wanted reliable illumination for evening work, inspection and public display without maintaining hundreds of individual fuel lamps.",
      },
      {
        title: "Urban streets and public spaces",
        description:
          "Cities needed brighter lighting for transport, policing and commercial life. Arc lighting could serve streets, while smaller incandescent lamps were better suited to interiors.",
      },
    ],
    before: [
      {
        method: "Candles",
        strength: "Portable, simple and usable without fixed infrastructure.",
        limit: "Dim, consumable, smoky and vulnerable to drafts and fire.",
      },
      {
        method: "Oil and kerosene lamps",
        strength: "Brighter than many candles and widely available as domestic lighting.",
        limit: "Required fuel storage, wick maintenance and cleaning; spills and flames created hazards.",
      },
      {
        method: "Coal-gas lighting",
        strength: "Could illuminate streets and buildings through a centralized pipe network.",
        limit: "Produced heat and fumes, leaked poisonous or explosive gas and blackened interiors.",
      },
      {
        method: "Electric arc lamps",
        strength: "Extremely bright and effective for streets, large halls and industrial sites.",
        limit: "Harsh, noisy and difficult to regulate; carbon electrodes wore away and the light was too intense for many rooms.",
      },
    ],
    decisiveConstraint:
      "A practical domestic lamp needed to glow brightly for many hours without burning up, operate at a voltage compatible with distribution, be manufacturable in large quantities and form part of a safe electrical supply system. Solving only the filament was not enough.",
  },
  globalPrehistory: {
    introduction:
      "Electric lighting grew from discoveries in batteries, resistance heating, vacuum technology, arc discharge and electrical generation. Researchers repeatedly produced light before they could make it durable or economical.",
    entries: [
      {
        date: "1800",
        place: "Italy and Britain",
        title: "The voltaic pile provides continuous current",
        description:
          "Volta's battery made sustained electrical experiments possible and supplied the early currents used in arc-light demonstrations.",
      },
      {
        date: "Early 1800s",
        place: "Britain",
        title: "Humphry Davy demonstrates electric light",
        description:
          "Davy produced intense light from current passing between carbon pieces, establishing the arc principle but not a convenient household lamp.",
      },
      {
        date: "1840",
        place: "Britain",
        title: "De la Rue uses a platinum coil in vacuum",
        description:
          "Warren de la Rue enclosed a platinum conductor in an evacuated tube. The approach worked technically but used an expensive material.",
      },
      {
        date: "1841",
        place: "Britain",
        title: "Frederick de Moleyns patents an incandescent lamp",
        description:
          "An early patent described electrically heating conductors in a vacuum, illustrating that incandescent concepts preceded later commercial systems.",
      },
      {
        date: "1870s",
        place: "Russia, Britain, United States and elsewhere",
        title: "Many inventors pursue durable filaments",
        description:
          "Lodygin, Swan, Edison, Maxim, Sawyer, Man and others tested carbon, platinum, paper, fibres and improved vacuum methods as electrical generation became more practical.",
      },
    ],
  },
  people: [
    {
      name: "Humphry Davy",
      life: "1778–1829",
      role: "Chemist and early electrical experimenter",
      contribution:
        "Demonstrated powerful electric arc lighting using large batteries, proving that electricity could create intense artificial light.",
      correction:
        "Arc light was a foundational demonstration, not a practical replacement for domestic lamps at the time.",
    },
    {
      name: "Joseph Swan",
      life: "1828–1914",
      role: "Chemist, physicist and lamp developer",
      contribution:
        "Developed carbon-filament incandescent lamps, improved vacuum conditions and publicly demonstrated working lamps in Britain in the late 1870s.",
    },
    {
      name: "Thomas Edison",
      life: "1847–1931",
      role: "Inventor, laboratory director and system entrepreneur",
      contribution:
        "Led a team that developed a high-resistance carbon lamp and coordinated it with generators, parallel distribution, switches, sockets, meters and a commercial utility model.",
      correction:
        "Edison did not create the first electric light or the first incandescent experiment; his significance lies in practical durability, manufacturability and system integration.",
    },
    {
      name: "Lewis Howard Latimer",
      life: "1848–1928",
      role: "Draftsman, patent specialist and electrical engineer",
      contribution:
        "Worked on electric-light patent drawings, developed improved carbon-filament manufacturing methods and helped install and explain lighting systems.",
    },
    {
      name: "Alexander Lodygin",
      life: "1847–1923",
      role: "Russian electrical inventor",
      contribution:
        "Patented and demonstrated incandescent lamps using carbon conductors and later explored refractory metal filaments.",
    },
    {
      name: "William Coolidge",
      life: "1873–1975",
      role: "Metallurgist and industrial researcher",
      contribution:
        "Developed ductile tungsten wire, enabling durable, efficient tungsten-filament lamps in the early twentieth century.",
    },
    {
      name: "Laboratory assistants and manufacturing workers",
      life: "19th–20th centuries",
      role: "Experimental, glassworking and production teams",
      contribution:
        "Prepared filaments, operated vacuum pumps, sealed glass, measured lamp life, built generators and standardized millions of components.",
    },
  ],
  experimentsAndFailures: [
    {
      period: "1800s–1870s",
      title: "Platinum filaments",
      attempt:
        "Inventors used platinum because it tolerated high temperature and could be formed into wire.",
      failure:
        "Platinum was expensive, and its electrical and thermal behaviour did not provide an economical mass-market lamp under available conditions.",
      lesson:
        "The best laboratory material is not always the best commercial material; cost, supply and operating temperature matter together.",
      evidence: "Documented",
    },
    {
      period: "Mid-1800s",
      title: "Poor vacuum and rapid oxidation",
      attempt:
        "Early lamps enclosed glowing carbon or metal conductors in glass bulbs evacuated with limited pumps.",
      failure:
        "Residual oxygen attacked the hot material, while gases released from the filament and glass shortened lamp life and darkened the bulb.",
      lesson:
        "Vacuum quality, material preparation and glass sealing were inseparable from filament design.",
      evidence: "Documented",
    },
    {
      period: "1870s",
      title: "Low-resistance lamps",
      attempt:
        "Some designs drew large current at low voltage to produce useful brightness.",
      failure:
        "Heavy current required thick copper conductors, making a distributed urban network prohibitively expensive.",
      lesson:
        "A lamp had to be designed for the economics of the entire electrical distribution system, not only for brightness.",
      evidence: "Documented",
    },
    {
      period: "1878–1880",
      title: "Hundreds of filament candidates",
      attempt:
        "Teams tested paper, cotton thread, wood fibres, grasses and other carbonizable materials for strength, resistance and life.",
      failure:
        "Many samples cracked during carbonization, varied in thickness, sagged, evaporated quickly or failed at the lead-in connection.",
      lesson:
        "Repeatable material processing and quality control were as important as finding a promising substance.",
      evidence: "Strongly supported",
    },
    {
      period: "Early distribution systems",
      title: "Unsafe wiring and inconsistent standards",
      attempt:
        "Rapid installations used competing voltages, improvised insulation and unfamiliar protection methods.",
      failure:
        "Short circuits, overheated conductors and poor workmanship created shocks and fires.",
      lesson:
        "Codes, fuses, standardized fittings and trained electricians were required for public trust and safe expansion.",
      evidence: "Documented",
    },
  ],
  milestones: [
    { year: "1800", title: "Voltaic pile announced", description: "A sustained electrical source makes controlled current experiments possible." },
    { year: "1800s", title: "Davy demonstrates arc light", description: "A carbon arc produces brilliant electric illumination, establishing a powerful but specialized lighting method." },
    { year: "1840", title: "De la Rue vacuum lamp", description: "A platinum coil glows inside an evacuated glass tube, combining incandescence with oxygen exclusion." },
    { year: "1841", title: "De Moleyns lamp patent", description: "An early incandescent-light patent documents the concept decades before mass commercialization." },
    { year: "1874", title: "Lodygin receives lamp patent", description: "Carbon conductors in an evacuated vessel advance the international incandescent-light field." },
    { year: "1878", title: "Swan public demonstration", description: "Joseph Swan demonstrates a practical carbon-filament lamp in Britain.", pivotal: true },
    { year: "1879", title: "Edison team achieves long-lived carbon lamp", description: "A high-resistance carbon filament operates for extended testing and supports a complete distribution strategy.", pivotal: true },
    { year: "1880", title: "Edison electric-lamp patent", description: "U.S. Patent 223,898 describes an incandescent lamp with a high-resistance carbon filament." },
    { year: "1882", title: "Pearl Street station begins service", description: "A central generating station supplies a commercial district with a coordinated direct-current lighting system.", pivotal: true },
    { year: "1883", title: "Edison and Swan interests combine", description: "The Edison & Swan United Electric Light Company consolidates British commercial activity after patent conflict." },
    { year: "1904–1911", title: "Tungsten lamp matures", description: "Powder metallurgy and ductile tungsten wire raise efficiency and life beyond carbon filaments." },
    { year: "1960s–2010s", title: "LED lighting becomes practical", description: "Semiconductor emitters progress from indicator lights to high-output, efficient general illumination." },
  ],
  howItWorks: {
    introduction:
      "An incandescent lamp sends current through a thin resistive filament. Electrical energy becomes heat; at a sufficiently high temperature the filament emits visible light. The envelope protects the filament from rapid chemical attack and controls the internal atmosphere.",
    steps: [
      { title: "Supply electrical potential", explanation: "A generator and distribution system create a voltage across the lamp terminals." },
      { title: "Drive current through resistance", explanation: "The filament resists electron flow and converts electrical energy into thermal energy." },
      { title: "Raise filament temperature", explanation: "The thin filament heats to thousands of degrees while supports keep it positioned inside the bulb." },
      { title: "Emit a spectrum", explanation: "The hot material radiates energy across infrared and visible wavelengths; only part becomes useful visible light." },
      { title: "Protect the filament", explanation: "A vacuum or inert gas prevents rapid oxidation and can reduce evaporation or heat loss." },
      { title: "Seal current leads", explanation: "Metal conductors pass through glass while maintaining a durable gas-tight seal despite thermal expansion." },
      { title: "Control the circuit", explanation: "Switches, fuses, wiring and meters make the individual lamp usable within a larger electrical system." },
    ],
    expertNotes: [
      { title: "Resistance and distribution", explanation: "Higher-resistance lamps draw less current for a given power, reducing copper conductor size and making parallel distribution more economical." },
      { title: "Blackbody trade-off", explanation: "A hotter filament emits a larger fraction of its energy as visible light but evaporates faster and becomes harder to support." },
      { title: "Bulb blackening", explanation: "Evaporated filament material can deposit on cooler glass, reducing light output and indicating material loss." },
      { title: "Gas filling", explanation: "Inert gas can slow evaporation and permit higher operating temperature, but it also increases convective heat loss, so pressure and filament geometry must be optimized." },
    ],
  },
  anatomy: [
    { part: "Filament", purpose: "Produces light by resistive heating.", designProblem: "Must combine high melting point, useful resistance, low evaporation and manufacturability." },
    { part: "Glass envelope", purpose: "Creates a controlled atmosphere around the filament.", designProblem: "Must be sealed, clean, heat resistant and inexpensive to form at scale." },
    { part: "Vacuum or fill gas", purpose: "Limits oxidation and influences evaporation and heat transfer.", designProblem: "Residual gases shorten life; gas choice and pressure affect efficiency." },
    { part: "Lead-in wires", purpose: "Carry current through the glass seal.", designProblem: "Thermal expansion must be compatible with glass to prevent cracks and leaks." },
    { part: "Filament supports", purpose: "Hold the hot, fragile filament in shape.", designProblem: "Supports must survive heat without conducting away excessive energy or causing shorts." },
    { part: "Base and contacts", purpose: "Mechanically locate the lamp and connect it to the circuit.", designProblem: "Fittings needed standard dimensions, safe polarity and repeatable replacement." },
    { part: "Generator", purpose: "Converts mechanical power into electrical power.", designProblem: "Voltage regulation and capacity had to match changing numbers of connected lamps." },
    { part: "Distribution network", purpose: "Carries power from station to lamps.", designProblem: "Copper cost, voltage drop, insulation, protection and service reliability governed economics." },
  ],
  improvements: [
    { period: "1870s", inventor: "Joseph Swan and others", improvement: "Better vacuum pumps and carbon filaments", whyItMattered: "Extended lamp life enough for public demonstrations and early installations." },
    { period: "1879–1882", inventor: "Edison laboratory team", improvement: "High-resistance lamp integrated with a parallel distribution system", whyItMattered: "Reduced conductor cost and allowed individual lamps to be switched independently." },
    { period: "1880s", inventor: "Lewis Latimer and manufacturing teams", improvement: "More consistent carbon-filament production", whyItMattered: "Improved repeatability, reduced breakage and supported mass manufacturing." },
    { period: "1890s", inventor: "Walther Nernst and gas-discharge researchers", improvement: "Alternative electric-light mechanisms", whyItMattered: "Expanded the field beyond carbon incandescence and influenced later discharge lamps." },
    { period: "1904–1911", inventor: "Sándor Just, Franjo Hanaman, William Coolidge and industry teams", improvement: "Tungsten filaments and ductile tungsten wire", whyItMattered: "Permitted higher temperatures, better efficacy and longer service life." },
    { period: "1930s–1940s", inventor: "General Electric and international lamp engineers", improvement: "Fluorescent lighting", whyItMattered: "Produced more visible light per unit of electricity for large interiors." },
    { period: "1990s–2010s", inventor: "Semiconductor researchers and manufacturers", improvement: "High-brightness white LEDs", whyItMattered: "Greatly reduced energy use and enabled long-lived, controllable solid-state lighting." },
  ],
  gallery: [
    {
      fileName: "Light bulb Edison 2.jpg",
      alt: "Thomas Edison's 1880 patent drawing for an electric lamp",
      credit: "United States Patent Office",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Light_bulb_Edison_2.jpg",
      caption: "The drawing associated with U.S. Patent 223,898. Patent images document a specific claimed design, not the entire international history of electric lighting.",
    },
    {
      fileName: "Early types of Electric lightning. Wellcome M0015309.jpg",
      alt: "Historical comparison of early Edison, Jablochkoff and Swan electric lamps",
      credit: "Wellcome Collection",
      license: "CC BY 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Early_types_of_Electric_lightning._Wellcome_M0015309.jpg",
      caption: "A historical comparison showing several competing electric-light forms: carbon incandescent lamps and an electric candle arc system.",
    },
    {
      fileName: "Edison incandescent lights.jpg",
      alt: "Early horseshoe-shaped carbon-filament Edison incandescent lamps",
      credit: "William J. Hammer collection",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Edison_incandescent_lights.jpg",
      caption: "Early carbon-filament lamps demonstrate how filament geometry, carbon processing and glass construction evolved through repeated tests.",
    },
    {
      fileName: "Drawing of the Incandescent Light Bulb by Thomas Edison, 01-27-1880 (Page 2 of 2) (5286032832).jpg",
      alt: "National Archives drawing of Edison's incandescent light bulb patent",
      credit: "U.S. National Archives and Records Administration",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Drawing_of_the_Incandescent_Light_Bulb_by_Thomas_Edison,_01-27-1880_(Page_2_of_2)_(5286032832).jpg",
      caption: "A National Archives reproduction of the patent drawing, preserving the geometry and annotations of the filed invention record.",
    },
    {
      fileName: "The conquest of nature (1911) (14763187261).jpg",
      alt: "Historical illustration of Edison with a dynamo used for commercial electric light",
      credit: "Internet Archive Book Images",
      license: "No known copyright restrictions",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:The_conquest_of_nature_(1911)_(14763187261).jpg",
      caption: "A period illustration linking the lamp to its dynamo. Commercial lighting depended on generation and distribution as much as on the glowing element.",
    },
  ],
  consequences: {
    transformed: [
      { title: "Homes and public interiors", description: "Lighting became cleaner at the point of use, easier to switch and less dependent on carrying fuel to each fixture." },
      { title: "Urban nightlife", description: "Streets, theatres, shops and transport systems operated later and used brightness as a sign of safety and modernity." },
      { title: "Industrial production", description: "Factories extended shifts and improved inspection, although longer working hours also increased labour exploitation." },
      { title: "Electrical utilities", description: "Lighting created a major early market for centralized generation, metering and urban distribution networks." },
      { title: "Architecture and design", description: "Buildings gained new fixture types, wiring routes, switches and lighting strategies independent of gas pipes and flames." },
    ],
    tradeoffs: [
      { title: "Energy consumption", description: "More efficient lamps often led to more total lighting, expanding electricity demand and light pollution." },
      { title: "Industrial concentration", description: "Patent pools, utilities and large manufacturers gained control over standards, supply and access." },
      { title: "Electrical hazards", description: "Poor wiring, exposed conductors and unfamiliar voltages introduced shock and fire risks requiring regulation." },
      { title: "Labour and extraction", description: "Copper, tungsten, coal generation and factory production shifted environmental and occupational burdens away from the illuminated room." },
      { title: "Night-time discipline", description: "Artificial light supported education and leisure but also enabled longer shifts, surveillance and erosion of natural darkness." },
    ],
  },
  modernDescendants: [
    { title: "Tungsten-halogen lamps", connection: "Refine thermal incandescence using a compact high-temperature filament and a halogen regeneration cycle." },
    { title: "Fluorescent lamps", connection: "Use electric discharge and phosphors rather than directly heating a filament to visible temperature." },
    { title: "High-intensity discharge lamps", connection: "Develop the arc principle for efficient streets, stadiums and industrial spaces." },
    { title: "Light-emitting diodes", connection: "Convert electrical energy to light in semiconductor junctions with far less waste heat than incandescent lamps." },
    { title: "Smart lighting networks", connection: "Combine efficient emitters with sensors, digital control, dimming and communication infrastructure." },
  ],
  myths: [
    {
      claim: "Thomas Edison invented the first light bulb.",
      verdict: "False",
      explanation:
        "Electric arcs and incandescent experiments existed decades earlier, and several inventors developed working lamps. Edison's team created an influential, durable high-resistance lamp and a coordinated commercial system.",
    },
    {
      claim: "The filament alone made electric lighting practical.",
      verdict: "False",
      explanation:
        "Vacuum quality, glass seals, generators, distribution voltage, copper cost, sockets, switches, meters, fuses and manufacturing consistency were all essential.",
    },
    {
      claim: "Electric light immediately replaced gas everywhere.",
      verdict: "False",
      explanation:
        "Gas and electric systems competed for decades. Cost, location, building wiring, utility access and lamp performance produced a gradual transition.",
    },
    {
      claim: "Electric lighting removed all fire risk.",
      verdict: "False",
      explanation:
        "It removed an open flame at the lamp but introduced overheating, short circuits and unsafe wiring. Codes and protective devices were necessary.",
    },
  ],
  glossary: [
    { term: "Incandescence", definition: "Light emitted by a material because it is heated to a high temperature." },
    { term: "Arc lamp", definition: "A lamp that produces light from an electrical discharge between electrodes." },
    { term: "Filament", definition: "A thin conductor heated by electric current until it emits light." },
    { term: "Resistance", definition: "Opposition to electric current that converts some electrical energy into heat." },
    { term: "Vacuum", definition: "A space from which much of the gas has been removed." },
    { term: "Efficacy", definition: "Visible light output per unit of electrical power, commonly measured in lumens per watt." },
    { term: "Dynamo", definition: "A generator that converts mechanical rotation into electrical energy." },
    { term: "Parallel circuit", definition: "A connection in which each lamp receives the supply voltage independently of other branches." },
    { term: "Lead-in wire", definition: "A conductor sealed through the glass envelope to carry current to the filament." },
    { term: "Tungsten", definition: "A metal with a very high melting point used in mature incandescent filaments." },
  ],
  researchQuestions: [
    "How should histories balance famous patent holders against laboratory assistants, glassworkers and manufacturing teams?",
    "Which early lamp designs were technically successful but commercially blocked by distribution economics?",
    "How did gas companies respond through pricing, mantle technology and public campaigns?",
    "How did electric lighting change shift work, sleep patterns and urban inequality?",
    "When efficiency improves, under what conditions does total lighting energy use still rise?",
  ],
  sources: [
    {
      label: "Edison's Electric Lamp Patent, US223898A",
      publisher: "United States Patent Office / Google Patents",
      url: "https://patents.google.com/patent/US223898A/en",
      note: "Primary patent text and drawings for Edison's 1880 electric-lamp patent.",
    },
    {
      label: "The Thomas A. Edison Papers",
      publisher: "Rutgers University",
      url: "https://edisondigital.rutgers.edu/",
      note: "Scholarly archive of notebooks, correspondence and records from Edison and his laboratories.",
    },
    {
      label: "Lighting a Revolution",
      publisher: "Smithsonian National Museum of American History",
      url: "https://americanhistory.si.edu/lighting/",
      note: "Institutional history of electric lighting as a technological system rather than a single object.",
    },
    {
      label: "Thomas Edison National Historical Park",
      publisher: "U.S. National Park Service",
      url: "https://www.nps.gov/edis/learn/historyculture/index.htm",
      note: "Official resources on Edison's laboratories, industrial research practice and surviving collections.",
    },
    {
      label: "Joseph Swan lamp collections",
      publisher: "Science Museum Group Collection",
      url: "https://collection.sciencemuseumgroup.org.uk/objects/co42487/swan-electric-lamp",
      note: "Museum object records for Swan lamps and the British development of incandescent lighting.",
    },
    {
      label: "Lewis Latimer Patent Drawing",
      publisher: "Smithsonian National Museum of American History",
      url: "https://americanhistory.si.edu/collections/object/nmah_1313353",
      note: "Institutional object record for a patent drawing created by Latimer during his electrical engineering and drafting career.",
    },
  ],
};

const airplane: Invention = {
  slug: "airplane",
  title: "Airplane",
  subtitle: "How experimenters combined lift, propulsion and three-axis control into sustained powered flight",
  category: "Transport & Aeronautics",
  era: "1790s–1910s",
  origin: "An international aeronautical tradition culminating in controlled powered flights by the Wright brothers in the United States",
  statusLine: "A controlled flying system—not merely an engine attached to wings",
  summary: [
    "The airplane emerged from more than a century of work on balloons, gliders, propellers, engines and aerodynamic measurement. Many experimenters could produce lift or brief hops; the decisive challenge was to create a heavier-than-air machine that could take off, remain under the pilot's control, sustain flight and land with enough reliability to be developed further.",
    "George Cayley separated the functions of lift, propulsion and control; Otto Lilienthal gathered practical gliding experience; Octave Chanute shared structural and experimental knowledge; Samuel Langley and Clément Ader pursued powered machines; and engine makers, fabric workers and mechanics provided essential enabling technologies. Wilbur and Orville Wright systematically tested wing shapes, built a wind tunnel, developed coordinated three-axis control and worked with Charlie Taylor on a lightweight engine.",
    "On 17 December 1903, the 1903 Flyer made four powered, controlled flights near Kitty Hawk, North Carolina. The first lasted 12 seconds and travelled 120 feet; the fourth covered 852 feet in 59 seconds. Those flights were a breakthrough, but the 1903 machine was still difficult to fly. The Wrights and many competitors then developed more practical aircraft, while aviation rapidly acquired military, commercial and political consequences.",
  ],
  heroImage: {
    fileName: "Wrightflyer.jpg",
    alt: "Orville Wright making the first flight of the 1903 Wright Flyer while Wilbur runs beside the wing",
    credit: "John T. Daniels / Library of Congress",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wrightflyer.jpg",
    caption:
      "The first flight of 17 December 1903. Orville Wright is at the controls and Wilbur runs beside the aircraft. The launch rail, restrained structure and prone pilot position reveal how experimental the machine remained.",
    objectPosition: "50% 50%",
  },
  quickFacts: [
    { label: "Original ambition", value: "Controlled heavier-than-air human flight" },
    { label: "Key conceptual separation", value: "Lift, propulsion and control treated as distinct functions" },
    { label: "Decisive control system", value: "Roll, pitch and yaw coordinated by the pilot" },
    { label: "First Wright flight", value: "17 December 1903 — 120 ft in 12 seconds" },
    { label: "Longest flight that day", value: "852 ft in 59 seconds" },
    { label: "Historical caution", value: "The 1903 Flyer was a research breakthrough, not yet a practical transport aircraft" },
  ],
  necessity: {
    headline: "Necessity and ambition: travel through the air under control",
    introduction:
      "Humans long imagined flight, but nineteenth-century industry turned the dream into an engineering program. Balloons could carry people, yet they drifted with the wind. A practical airplane had to move in a chosen direction, support its own weight, remain stable enough to control and carry a propulsion system light enough to leave the ground.",
    pressures: [
      {
        title: "Balloons lacked directional authority",
        description:
          "Lighter-than-air craft proved that people could fly, but ordinary balloons depended heavily on wind. Engineers sought powered flight with deliberate steering and repeatable routes.",
      },
      {
        title: "Transport networks rewarded speed",
        description:
          "Railways and steamships demonstrated the value of rapid movement. Aviation promised direct routes over mountains, deserts and oceans where surface infrastructure was slow or impossible.",
      },
      {
        title: "Military observation and mobility",
        description:
          "Governments funded balloons and experimental aircraft because aerial reconnaissance, communication and later attack offered strategic advantage.",
      },
      {
        title: "Scientific understanding was incomplete",
        description:
          "Available lift tables, propeller theories and stability assumptions were often inaccurate. Successful flight required new measurements rather than confidence in inherited formulas.",
      },
    ],
    before: [
      {
        method: "Kites",
        strength: "Demonstrated aerodynamic lift, bracing and controllable tethered surfaces.",
        limit: "Depended on a tether and external wind; they did not provide free piloted transport.",
      },
      {
        method: "Hot-air and gas balloons",
        strength: "Achieved sustained human flight and useful observation from the late eighteenth century.",
        limit: "Direction and landing point were strongly controlled by the wind unless additional propulsion was added.",
      },
      {
        method: "Ornithopters",
        strength: "Imitated bird wing motion and encouraged study of lift and propulsion.",
        limit: "Human muscle and early mechanisms could not efficiently reproduce the complex power and control of bird flight at useful scale.",
      },
      {
        method: "Unpowered gliders",
        strength: "Allowed direct testing of wing shape, balance and pilot control without carrying an engine.",
        limit: "Flight duration and route depended on launch height, wind and rising air; landing risk remained high.",
      },
    ],
    decisiveConstraint:
      "The central problem was simultaneous control. A machine could have enough lift and power yet still fail if the pilot could not correct roll, pitch and yaw quickly. The Wrights treated the airplane as a coupled control system and tested it through kites, gliders, a wind tunnel and repeated field trials.",
  },
  globalPrehistory: {
    introduction:
      "The airplane's prehistory crossed science, craft and geography. Balloons established human flight, gliders generated aerodynamic evidence, and new engines and materials made powered flight increasingly plausible.",
    entries: [
      {
        date: "1783",
        place: "France",
        title: "First crewed balloon flights",
        description:
          "Montgolfier hot-air balloons and hydrogen balloons carried people, proving that sustained flight was possible while highlighting the difficulty of directional control.",
      },
      {
        date: "1799–1850s",
        place: "Britain",
        title: "George Cayley's fixed-wing concept",
        description:
          "Cayley identified lift, drag, thrust and weight as distinct concerns and designed gliders with separate lifting surfaces and tail controls.",
      },
      {
        date: "1891–1896",
        place: "Germany",
        title: "Otto Lilienthal's repeated glides",
        description:
          "Lilienthal completed many piloted glides, published lift data and demonstrated that systematic practice could develop practical aeronautical knowledge, though his weight-shift control was limited.",
      },
      {
        date: "1890s",
        place: "France and United States",
        title: "Powered aircraft experiments",
        description:
          "Clément Ader and Samuel Langley built powered machines that achieved disputed or unpiloted successes but did not establish a repeatable controlled piloted airplane system.",
      },
      {
        date: "1896–1901",
        place: "United States and international correspondence",
        title: "Chanute shares structural knowledge",
        description:
          "Octave Chanute documented experiments, tested braced biplane gliders and communicated with aviation pioneers, helping circulate practical information across national boundaries.",
      },
    ],
  },
  people: [
    {
      name: "Sir George Cayley",
      life: "1773–1857",
      role: "Aeronautical theorist and glider designer",
      contribution:
        "Separated lift from propulsion, described the four forces of flight and developed fixed-wing arrangements with tail surfaces that strongly influenced later aircraft.",
    },
    {
      name: "Otto Lilienthal",
      life: "1848–1896",
      role: "Glider experimenter and aerodynamic recorder",
      contribution:
        "Built and flew multiple glider designs, gathered practical lift information and made human gliding a repeatable experimental practice.",
      correction:
        "Lilienthal's work was foundational, but weight-shift control did not fully solve the three-axis control problem.",
    },
    {
      name: "Octave Chanute",
      life: "1832–1910",
      role: "Engineer, author and knowledge broker",
      contribution:
        "Tested braced gliders, synthesized international experiments and exchanged technical information with the Wright brothers and other pioneers.",
    },
    {
      name: "Wilbur Wright",
      life: "1867–1912",
      role: "Aeronautical researcher, pilot and system designer",
      contribution:
        "Led theoretical analysis, field experimentation and the development of coordinated control, propeller design and the 1903 flying program with Orville.",
    },
    {
      name: "Orville Wright",
      life: "1871–1948",
      role: "Mechanician, researcher and pilot",
      contribution:
        "Co-developed the kites, gliders, wind-tunnel tests, control system and powered Flyers; piloted the first flight on 17 December 1903.",
    },
    {
      name: "Charlie Taylor",
      life: "1868–1956",
      role: "Mechanic and engine builder",
      contribution:
        "Built the lightweight four-cylinder engine for the 1903 Flyer in the Wright bicycle shop, translating performance requirements into a workable powerplant.",
    },
    {
      name: "Katharine Wright and local assistants",
      life: "Late 19th–early 20th centuries",
      role: "Family support, logistics and field assistance",
      contribution:
        "Katharine helped sustain the Wright household and later their public work, while Kitty Hawk residents and lifesaving-station personnel assisted launches, transport, photography and recovery.",
    },
  ],
  experimentsAndFailures: [
    {
      period: "1899–1901",
      title: "Inherited lift data proved inaccurate",
      attempt:
        "The Wrights designed wings using published coefficients and tables from respected predecessors.",
      failure:
        "Their 1900 and 1901 gliders produced less lift than expected and behaved unpredictably in pitch and control.",
      lesson:
        "Authoritative data still required verification. The brothers built a wind tunnel and measured many wing shapes themselves.",
      evidence: "Documented",
    },
    {
      period: "1901",
      title: "Wing warping created adverse yaw",
      attempt:
        "Twisting the wings increased lift on one side to roll the glider.",
      failure:
        "The higher-lift wing also produced more drag and could yaw backward, opposing the intended turn and risking loss of control.",
      lesson:
        "Roll and yaw controls had to be coordinated, leading to a movable rudder linked with wing warping.",
      evidence: "Documented",
    },
    {
      period: "1903",
      title: "Propeller theory was inadequate",
      attempt:
        "Available marine propeller rules were considered for the aircraft's twin propellers.",
      failure:
        "Air propellers operate as rotating wings in a moving flow; simple screw analogies did not predict useful efficiency.",
      lesson:
        "The Wrights developed their own blade calculations and shaped propellers as aerodynamic lifting surfaces.",
      evidence: "Documented",
    },
    {
      period: "October–December 1903",
      title: "Transmission and structure failures",
      attempt:
        "The powered Flyer used chain drives and lightweight wooden components under unfamiliar loads.",
      failure:
        "Propeller shafts cracked, sprockets and drive components required repair, and transport between Kitty Hawk and Dayton delayed testing.",
      lesson:
        "Low mass could not come at the expense of fatigue strength, alignment or maintainability.",
      evidence: "Documented",
    },
    {
      period: "17 December 1903",
      title: "The Flyer was damaged after the fourth flight",
      attempt:
        "After four successful flights, the machine rested on the ground while the team prepared to move it.",
      failure:
        "A gust overturned and badly damaged the aircraft, which never flew again.",
      lesson:
        "Ground handling, tie-downs and weather protection are part of aircraft safety even when the flying task is complete.",
      evidence: "Documented",
    },
  ],
  milestones: [
    { year: "1783", title: "Crewed balloon flight", description: "Humans achieve sustained flight, establishing aviation while leaving powered directional control unresolved." },
    { year: "1799", title: "Cayley sketches fixed-wing aircraft", description: "Lift, propulsion and control are conceptually separated in a recognizable airplane arrangement." },
    { year: "1853", title: "Cayley glider carries a person", description: "A full-scale glider demonstrates the viability of fixed-wing human carriage." },
    { year: "1891–1896", title: "Lilienthal's glider program", description: "Repeated piloted glides create practical evidence and public confidence in heavier-than-air flight." },
    { year: "1896", title: "Langley Aerodrome models fly", description: "Steam-powered uncrewed models demonstrate that a powered heavier-than-air craft can sustain flight." },
    { year: "1899", title: "Wright kite tests wing warping", description: "A small kite validates a method of lateral control before risking a pilot." },
    { year: "1901", title: "Wind-tunnel campaign", description: "The Wrights measure hundreds of wing combinations and correct flawed lift assumptions.", pivotal: true },
    { year: "1902", title: "Three-axis control demonstrated", description: "The 1902 glider combines wing warping, elevator and coordinated rudder into an effective control system.", pivotal: true },
    { year: "17 Dec 1903", title: "First powered controlled flights", description: "The Wright Flyer completes four sustained flights near Kitty Hawk.", pivotal: true },
    { year: "1905", title: "Flyer III becomes practical", description: "Longer, repeatable flights and improved control produce the first Wright aircraft capable of sustained maneuvering." },
    { year: "1906", title: "Santos-Dumont public European flights", description: "The 14-bis makes witnessed powered flights in France and accelerates public aviation development in Europe." },
    { year: "1909", title: "Channel crossing", description: "Louis Blériot flies across the English Channel, demonstrating aviation's transport and military significance." },
  ],
  howItWorks: {
    introduction:
      "An airplane remains aloft when its wings generate enough lift to balance weight while propulsion overcomes drag. Stable travel is not enough: the pilot must control rotation around the roll, pitch and yaw axes and coordinate those movements during turns, climbs and landings.",
    steps: [
      { title: "Create forward airflow", explanation: "The engine turns propellers that accelerate air backward, producing thrust that moves the aircraft forward." },
      { title: "Generate lift", explanation: "The moving wing redirects airflow and creates a pressure distribution whose net aerodynamic force includes an upward component." },
      { title: "Balance weight", explanation: "Lift must equal or exceed the aircraft's weight for level flight or climb, while structure carries the resulting loads." },
      { title: "Control pitch", explanation: "The forward elevator on the 1903 Flyer changed the nose-up or nose-down attitude and therefore angle of attack." },
      { title: "Control roll", explanation: "Wing warping increased lift on one wing and reduced it on the other, banking the aircraft." },
      { title: "Coordinate yaw", explanation: "The movable rudder countered adverse yaw and aligned the aircraft through turns." },
      { title: "Manage energy and landing", explanation: "The pilot adjusted attitude and engine operation while preserving sufficient airspeed to avoid a stall before touchdown." },
    ],
    expertNotes: [
      { title: "Lift is not one simple effect", explanation: "Pressure differences, flow turning, circulation and momentum change are complementary descriptions of the same aerodynamic interaction." },
      { title: "Static stability versus control", explanation: "A perfectly self-stable craft may resist maneuvering, while a highly responsive craft demands constant pilot correction. Designers choose a balance." },
      { title: "Propeller as rotating wing", explanation: "Each blade section meets the airflow at a local angle and produces an aerodynamic force whose forward component becomes thrust." },
      { title: "Reynolds-number sensitivity", explanation: "Small wind-tunnel models do not always reproduce full-scale flow exactly, so measurements must be interpreted with scale effects in mind." },
    ],
  },
  anatomy: [
    { part: "Wings", purpose: "Generate most of the lift.", designProblem: "Airfoil shape, area, aspect ratio, structure and control deformation had to work at low speed." },
    { part: "Forward elevator", purpose: "Controls pitch on the 1903 Flyer.", designProblem: "Too much sensitivity caused oscillation; too little prevented timely correction." },
    { part: "Wing-warping system", purpose: "Produces differential lift for roll control.", designProblem: "Flexible structure had to twist predictably without losing strength." },
    { part: "Twin rudders", purpose: "Control yaw and coordinate turns.", designProblem: "Rudder action had to counter drag differences caused by wing warping." },
    { part: "Engine", purpose: "Supplies mechanical power for sustained flight.", designProblem: "Power-to-weight ratio, cooling, vibration and reliability were severe constraints." },
    { part: "Propellers", purpose: "Convert engine torque into thrust.", designProblem: "Blade shape, twist and rotational speed needed aerodynamic rather than marine optimization." },
    { part: "Chain transmission", purpose: "Drives two propellers from one engine.", designProblem: "Alignment, vibration, shaft strength and opposite rotation had to be managed at low mass." },
    { part: "Wood-and-wire truss", purpose: "Carries flight loads while maintaining wing geometry.", designProblem: "The structure needed stiffness and strength with extremely limited available engine power." },
    { part: "Launch rail", purpose: "Guides the aircraft during acceleration before lift-off.", designProblem: "Sand prevented ordinary wheel takeoff and crosswind launch demanded careful alignment." },
  ],
  improvements: [
    { period: "1799–1850s", inventor: "George Cayley", improvement: "Fixed wing with separate propulsion and tail control", whyItMattered: "Established the conceptual architecture of the modern airplane." },
    { period: "1890s", inventor: "Otto Lilienthal and other glider pilots", improvement: "Repeated piloted glider experimentation", whyItMattered: "Generated practical knowledge of lift, balance, launch and landing." },
    { period: "1896", inventor: "Octave Chanute and Augustus Herring", improvement: "Braced biplane glider structure", whyItMattered: "Combined light weight with stiffness and influenced the Wright structural arrangement." },
    { period: "1901–1902", inventor: "Wilbur and Orville Wright", improvement: "Wind-tunnel data and coordinated three-axis control", whyItMattered: "Solved the central control problem and replaced unreliable published aerodynamic values." },
    { period: "1903", inventor: "Wright brothers and Charlie Taylor", improvement: "Integrated engine, transmission and efficient propellers", whyItMattered: "Provided enough thrust within the severe weight limit for sustained powered flight." },
    { period: "1905–1909", inventor: "Wrights, Santos-Dumont, Curtiss, Farman and others", improvement: "More practical controls, landing gear and sustained maneuvering", whyItMattered: "Moved aviation from experimental hops toward demonstrable transport machines." },
    { period: "1910s–1930s", inventor: "International aircraft industry", improvement: "Ailerons, enclosed fuselages, metal structures and reliable engines", whyItMattered: "Improved safety, speed, payload and manufacturability for military and civil aviation." },
  ],
  gallery: [
    {
      fileName: "1903-12 Wright-Flyer-side-view.jpg",
      alt: "Side view of the 1903 Wright Flyer on the ground at Kitty Hawk",
      credit: "Wright brothers / U.S. Air Force Historical Research Agency",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:1903-12_Wright-Flyer-side-view.jpg",
      caption: "A side view reveals the canard elevator, biplane truss, prone pilot position, twin rudders and compact engine installation.",
    },
    {
      fileName: "Wright Flyer 1903 3-view.svg",
      alt: "Three-view technical drawing of the 1903 Wright Flyer",
      credit: "Emoscopes",
      license: "CC0 1.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wright_Flyer_1903_3-view.svg",
      caption: "A three-view drawing makes the Flyer's geometry easier to compare than a single photograph and supports study of span, planform and control surfaces.",
    },
    {
      fileName: "Wright diary1.jpg",
      alt: "Orville Wright's diary entry recording the first successful powered flights",
      credit: "Orville Wright / Library of Congress",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Wright_diary1.jpg",
      caption: "Orville Wright's diary entry from 17 December 1903 is a primary record of the day's flights, weather and distances.",
    },
    {
      fileName: "1903 Wright Flyer engine section view 2.jpg",
      alt: "Front view of the Wright Flyer's engine and chain-drive section",
      credit: "Wright brothers",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:1903_Wright_Flyer_engine_section_view_2.jpg",
      caption: "The engine and transmission section shows how power, chain drives and twin propeller shafts were packed into the airframe.",
    },
    {
      fileName: "1903 Wright Flyer front view.jpg",
      alt: "Front view of the 1903 Wright Flyer showing its biplane structure",
      credit: "Library of Congress",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:1903_Wright_Flyer_front_view.jpg",
      caption: "The front view emphasizes the wide wingspan, dense bracing and slender structural members required to achieve enough lift with limited power.",
    },
  ],
  consequences: {
    transformed: [
      { title: "Global transport", description: "Aircraft eventually made intercontinental travel and high-value freight movement possible in hours rather than weeks." },
      { title: "Mapping and observation", description: "Aerial photography changed surveying, agriculture, disaster response, archaeology and military intelligence." },
      { title: "Emergency access", description: "Aircraft connected remote communities and enabled medical evacuation, search and rescue, and rapid disaster relief." },
      { title: "Industrial innovation", description: "Aviation accelerated work in engines, lightweight structures, weather forecasting, radio, navigation and materials science." },
      { title: "Cultural exchange", description: "Mass air travel increased tourism, migration and international business while compressing perceptions of distance." },
    ],
    tradeoffs: [
      { title: "Aerial warfare", description: "Aircraft quickly became tools for reconnaissance, bombing and air superiority, expanding the reach of violence." },
      { title: "Climate impact", description: "Jet fuel combustion emits carbon dioxide and high-altitude effects that contribute to warming." },
      { title: "Noise and land use", description: "Airports, flight paths and military operations impose noise, displacement and ecological impacts on nearby communities." },
      { title: "Unequal mobility", description: "Air travel connects the world but remains unequally accessible and can concentrate economic activity around major hubs." },
      { title: "Safety and regulation", description: "Early aviation's high accident rate required certification, traffic rules, maintenance systems and international standards." },
    ],
  },
  modernDescendants: [
    { title: "Commercial airliners", connection: "Retain the fixed-wing lift, propulsion and three-axis control architecture while adding pressurization, automation and turbine power." },
    { title: "Helicopters and rotorcraft", connection: "Use rotating wings to generate lift and control, addressing vertical takeoff rather than runway operation." },
    { title: "Uncrewed aerial vehicles", connection: "Replace the onboard pilot with remote or autonomous control while preserving the same aerodynamic and systems-engineering problems." },
    { title: "Space launch and re-entry vehicles", connection: "Use aircraft-derived guidance, structures and control surfaces during atmospheric phases, even though rocket propulsion dominates ascent." },
    { title: "Electric and hybrid aircraft", connection: "Apply new power sources to the same demanding balance of weight, thrust, range, cooling and safety." },
  ],
  myths: [
    {
      claim: "The Wright brothers were the first people to build anything that flew.",
      verdict: "False",
      explanation:
        "Kites, balloons, gliders and uncrewed powered models flew earlier. The Wright achievement was controlled, sustained, piloted powered flight in a heavier-than-air machine and its continued development.",
    },
    {
      claim: "A powerful engine was the only missing ingredient.",
      verdict: "False",
      explanation:
        "Several powered experiments failed because stability and control were inadequate. The Wrights prioritized aerodynamic data and coordinated control before propulsion.",
    },
    {
      claim: "The first flight proved the airplane was immediately practical.",
      verdict: "False",
      explanation:
        "The 1903 Flyer flew only four times, was difficult to control and was destroyed by wind after the final flight. Later Flyers made the concept practical.",
    },
    {
      claim: "The Wrights worked in isolation and owed nothing to earlier pioneers.",
      verdict: "False",
      explanation:
        "They studied Cayley, Lilienthal and Chanute, corresponded with experts and used existing engine, bicycle, structural and scientific knowledge while correcting important errors through their own experiments.",
    },
  ],
  glossary: [
    { term: "Lift", definition: "The aerodynamic force component perpendicular to the relative airflow, commonly supporting aircraft weight." },
    { term: "Drag", definition: "The aerodynamic force component opposing motion through the air." },
    { term: "Thrust", definition: "The propulsive force that drives an aircraft through the air." },
    { term: "Angle of attack", definition: "The angle between an airfoil's reference line and the incoming airflow." },
    { term: "Roll", definition: "Rotation around the aircraft's longitudinal nose-to-tail axis." },
    { term: "Pitch", definition: "Rotation that raises or lowers the nose around the lateral axis." },
    { term: "Yaw", definition: "Rotation of the nose left or right around the vertical axis." },
    { term: "Adverse yaw", definition: "Yaw opposite the intended turn, often caused by unequal drag during roll control." },
    { term: "Airfoil", definition: "A shaped surface designed to generate aerodynamic force as air flows around it." },
    { term: "Stall", definition: "A large loss of lift caused when airflow separates after the wing exceeds a critical angle of attack." },
  ],
  researchQuestions: [
    "How should historians define 'first flight' when comparing hops, assisted launches, witnesses, control and repeatability?",
    "Which parts of the Wright wind-tunnel data most directly changed their 1902 glider design?",
    "How much did bicycle manufacturing practice influence the Wrights' approach to lightweight mechanisms and control?",
    "How did patent disputes affect the pace and geography of early aviation development?",
    "How should the benefits of global air mobility be weighed against aviation's climate and noise impacts?",
  ],
  sources: [
    {
      label: "1903 Wright Flyer",
      publisher: "Smithsonian National Air and Space Museum",
      url: "https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000",
      note: "Authoritative object record for the original aircraft and its research-and-development context.",
    },
    {
      label: "Wilbur and Orville Wright Papers",
      publisher: "Library of Congress",
      url: "https://www.loc.gov/collections/wilbur-and-orville-wright-papers/about-this-collection/",
      note: "Primary diaries, photographs, notebooks, correspondence and technical records from the Wright family.",
    },
    {
      label: "First Flight",
      publisher: "Wright Brothers National Memorial, U.S. National Park Service",
      url: "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm",
      note: "Official site history of the December 1903 flights and the people present.",
    },
    {
      label: "Wright Brothers Collection",
      publisher: "Wright State University Libraries",
      url: "https://corescholar.libraries.wright.edu/special_ms1/",
      note: "Digitized primary documents and photographs from one of the major Wright archival collections.",
    },
    {
      label: "The Wright Brothers & The Invention of the Aerial Age",
      publisher: "Smithsonian National Air and Space Museum",
      url: "https://airandspace.si.edu/exhibitions/wright-brothers",
      note: "Museum interpretation of the Wright experimental program, predecessors, controls and public legacy.",
    },
    {
      label: "Beginner's Guide to Aeronautics",
      publisher: "NASA Glenn Research Center",
      url: "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/",
      note: "Technical explanations of lift, drag, propulsion, stability and control used to support the working-principle section.",
    },
  ],
};

export const INVENTIONS: readonly Invention[] = [
  steamEngine,
  printingPress,
  electricalTelegraph,
  electricLight,
  airplane,
];

export function getInvention(slug: string) {
  return INVENTIONS.find((invention) => invention.slug === slug);
}
