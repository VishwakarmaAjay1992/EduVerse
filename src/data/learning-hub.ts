export type HubGroup = "Learn" | "Explore" | "Tools" | "Practice" | "Resources";

export interface HubSource {
  title: string;
  organization: string;
  url: string;
}

export interface HubFeature {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  group: HubGroup;
  tagline: string;
  description: string;
  accent: string;
  icon: string;
  interactive: boolean;
  outcomes: string[];
  collections: { title: string; description: string; examples: string[] }[];
  sources: HubSource[];
  related: string[];
}

const scienceSources: HubSource[] = [
  { title: "Science resources", organization: "NASA Science", url: "https://science.nasa.gov/" },
  {
    title: "Education resources",
    organization: "Institute of Physics",
    url: "https://www.iop.org/education",
  },
];

export const HUB_FEATURES: HubFeature[] = [
  {
    id: 1,
    slug: "virtual-science-laboratory",
    title: "Virtual Science Laboratory",
    shortTitle: "Virtual Lab",
    group: "Learn",
    icon: "flask",
    accent: "#0ea5e9",
    interactive: true,
    tagline: "Change one variable, observe the result and explain the evidence.",
    description:
      "A safe simulation space where learners investigate forces, light, energy, matter, waves and electricity through guided experiments.",
    outcomes: [
      "Plan a fair test",
      "Control variables",
      "Record observations",
      "Connect evidence to a scientific model",
    ],
    collections: [
      {
        title: "Motion and forces",
        description: "Explore how mass, force, acceleration and friction are connected.",
        examples: ["Force and acceleration", "Projectile motion", "Friction challenge"],
      },
      {
        title: "Light and waves",
        description: "Investigate refraction, reflection, colour, frequency and amplitude.",
        examples: ["Bending light", "Wave builder", "Sound reflection"],
      },
      {
        title: "Matter and energy",
        description: "Compare states of matter, density, pressure and energy transfer.",
        examples: ["Density tank", "Particle model", "Energy transformations"],
      },
    ],
    sources: [
      {
        title: "Interactive simulations",
        organization: "PhET, University of Colorado Boulder",
        url: "https://phet.colorado.edu/",
      },
      ...scienceSources,
    ],
    related: ["formula-explorer", "science-calculators", "ask-predict-reveal"],
  },
  {
    id: 2,
    slug: "physics-in-everyday-life",
    title: "Physics in Everyday Life",
    shortTitle: "Everyday Physics",
    group: "Learn",
    icon: "lightbulb",
    accent: "#f59e0b",
    interactive: false,
    tagline: "Discover the physical principles hiding inside ordinary objects.",
    description:
      "Short visual lessons connect classroom physics to appliances, transport, buildings, communication and personal safety.",
    outcomes: [
      "Recognize physics outside the classroom",
      "Explain familiar technology",
      "Connect principles across topics",
      "Ask testable questions",
    ],
    collections: [
      {
        title: "At home",
        description: "The physics behind appliances and comfortable buildings.",
        examples: [
          "How refrigerators move heat",
          "Why pressure cookers work",
          "How air conditioners cool rooms",
        ],
      },
      {
        title: "On the move",
        description: "Forces, energy and momentum in everyday transport.",
        examples: [
          "Why seat belts protect us",
          "How bicycles stay controllable",
          "How aircraft generate lift",
        ],
      },
      {
        title: "Connected world",
        description: "Waves and electricity in modern communication.",
        examples: [
          "How speakers make sound",
          "How touchscreens sense fingers",
          "How mobile signals carry information",
        ],
      },
    ],
    sources: scienceSources,
    related: ["great-inventions", "myth-vs-science", "science-around-qatar"],
  },
  {
    id: 3,
    slug: "myth-vs-science",
    title: "Myth vs Science",
    shortTitle: "Myth vs Science",
    group: "Learn",
    icon: "shield",
    accent: "#ef4444",
    interactive: true,
    tagline: "Test popular claims against measurements, models and repeatable evidence.",
    description:
      "A misconception clinic that explains not only what is wrong, but why the mistaken idea feels convincing.",
    outcomes: [
      "Separate claims from evidence",
      "Recognize missing conditions",
      "Correct misconceptions",
      "Explain why a myth persists",
    ],
    collections: [
      {
        title: "Motion myths",
        description: "Common mistakes about force, falling and movement.",
        examples: [
          "Heavy objects always fall faster",
          "A moving object needs a continuous force",
          "Centrifugal force is always an outward force",
        ],
      },
      {
        title: "Earth and space myths",
        description: "Misconceptions about seasons, gravity and lightning.",
        examples: [
          "Seasons come from Earth–Sun distance",
          "There is no gravity in space",
          "Lightning never strikes twice",
        ],
      },
      {
        title: "Matter myths",
        description: "Claims about water, glass, heat and energy.",
        examples: [
          "Water always boils at 100°C",
          "Cold objects contain coldness",
          "Glass is a slow liquid",
        ],
      },
    ],
    sources: scienceSources,
    related: ["ask-predict-reveal", "science-puzzle-room", "physics-in-everyday-life"],
  },
  {
    id: 4,
    slug: "what-if-science",
    title: "What If? Science",
    shortTitle: "What If?",
    group: "Explore",
    icon: "orbit",
    accent: "#8b5cf6",
    interactive: false,
    tagline: "Use real laws and clearly stated assumptions to explore imaginary worlds.",
    description:
      "Thought experiments turn spectacular questions into careful chains of scientific reasoning, estimates and consequences.",
    outcomes: [
      "State assumptions",
      "Estimate scale",
      "Follow cause and effect",
      "Distinguish a model from a prediction",
    ],
    collections: [
      {
        title: "Changing Earth",
        description: "Alter one planetary condition and trace the consequences.",
        examples: [
          "What if Earth stopped rotating?",
          "What if gravity were half as strong?",
          "What if the Moon disappeared?",
        ],
      },
      {
        title: "Changing our senses",
        description: "Imagine detecting a different part of nature.",
        examples: [
          "What if humans saw infrared?",
          "What if we heard ultrasound?",
          "What if magnetic fields were visible?",
        ],
      },
      {
        title: "Changing space",
        description: "Explore carefully bounded cosmic scenarios.",
        examples: [
          "What if Earth had two Suns?",
          "What if sound travelled through space?",
          "What if the Sun became cooler?",
        ],
      },
    ],
    sources: [
      {
        title: "Solar System Exploration",
        organization: "NASA Science",
        url: "https://science.nasa.gov/solar-system/",
      },
    ],
    related: ["unsolved-science-mysteries", "space-exploration-hub", "science-calculators"],
  },
  {
    id: 5,
    slug: "unsolved-science-mysteries",
    title: "Science Mysteries Still Unsolved",
    shortTitle: "Open Questions",
    group: "Explore",
    icon: "circle-help",
    accent: "#6366f1",
    interactive: false,
    tagline: "Learn where established knowledge ends and active research begins.",
    description:
      "Evidence-led introductions to major open questions, with confirmed observations separated from hypotheses and speculation.",
    outcomes: [
      "Identify an open question",
      "Separate evidence and hypothesis",
      "Understand scientific uncertainty",
      "Avoid false certainty",
    ],
    collections: [
      {
        title: "The hidden universe",
        description: "Questions raised by astronomical observations.",
        examples: [
          "What is dark matter?",
          "What drives cosmic acceleration?",
          "What happens to information in black holes?",
        ],
      },
      {
        title: "Matter and life",
        description: "Open problems across physics, chemistry and biology.",
        examples: [
          "Why is matter more common than antimatter?",
          "How did life begin?",
          "Can we design practical high-temperature superconductors?",
        ],
      },
      {
        title: "Life beyond Earth",
        description: "How scientists search without assuming an answer.",
        examples: [
          "Which worlds could support life?",
          "What counts as a biosignature?",
          "How can false positives be rejected?",
        ],
      },
    ],
    sources: [
      {
        title: "The dark universe",
        organization: "NASA Science",
        url: "https://science.nasa.gov/universe/dark-matter-dark-energy/",
      },
    ],
    related: ["space-exploration-hub", "what-if-science", "science-timeline"],
  },
  {
    id: 6,
    slug: "formula-explorer",
    title: "Interactive Formula Explorer",
    shortTitle: "Formula Explorer",
    group: "Tools",
    icon: "sigma",
    accent: "#2563eb",
    interactive: true,
    tagline: "Move a slider and watch each variable change the result.",
    description:
      "A visual formula workspace that explains symbols, units, proportional relationships and worked substitutions.",
    outcomes: [
      "Identify variables",
      "Use consistent units",
      "Read proportional relationships",
      "Check a calculated result",
    ],
    collections: [
      {
        title: "Mechanics",
        description: "Explore equations for motion, force and energy.",
        examples: ["F = ma", "v = d/t", "Eₖ = ½mv²"],
      },
      {
        title: "Waves and electricity",
        description: "Connect variables in wave and circuit equations.",
        examples: ["v = fλ", "V = IR", "P = VI"],
      },
      {
        title: "Geometry and mathematics",
        description: "Visualize formulas as changing shapes and graphs.",
        examples: ["Circle area", "Pythagorean theorem", "Quadratic functions"],
      },
    ],
    sources: [
      {
        title: "The International System of Units",
        organization: "BIPM",
        url: "https://www.bipm.org/en/measurement-units",
      },
    ],
    related: ["science-calculators", "unit-converter", "interactive-graph-laboratory"],
  },
  {
    id: 7,
    slug: "unit-converter",
    title: "Scientific Unit Converter",
    shortTitle: "Unit Converter",
    group: "Tools",
    icon: "ruler",
    accent: "#0891b2",
    interactive: true,
    tagline: "Convert values while seeing the conversion factor and working.",
    description:
      "A transparent converter for common scientific quantities that teaches the method instead of returning a number only.",
    outcomes: [
      "Choose compatible units",
      "Apply a conversion factor",
      "Track dimensions",
      "Recognize invalid conversions",
    ],
    collections: [
      {
        title: "Everyday quantities",
        description: "Length, area, volume, mass, time and temperature.",
        examples: ["Metres to feet", "Litres to cubic metres", "Celsius to Fahrenheit"],
      },
      {
        title: "Motion and mechanics",
        description: "Speed, force, pressure, energy and power.",
        examples: ["km/h to m/s", "newtons to kilonewtons", "joules to kilowatt-hours"],
      },
      {
        title: "Scientific notation",
        description: "Move confidently between prefixes and scales.",
        examples: ["Nanometres to metres", "Megapascals to pascals", "Microseconds to seconds"],
      },
    ],
    sources: [
      {
        title: "SI Units",
        organization: "National Institute of Standards and Technology",
        url: "https://www.nist.gov/pml/owm/si-units",
      },
    ],
    related: ["formula-explorer", "science-calculators", "science-dictionary"],
  },
  {
    id: 8,
    slug: "interactive-graph-laboratory",
    title: "Interactive Graph Laboratory",
    shortTitle: "Graph Lab",
    group: "Tools",
    icon: "chart",
    accent: "#10b981",
    interactive: true,
    tagline: "Change an equation and see its graph respond instantly.",
    description:
      "A graphing environment for motion data and mathematical functions, supported by interpretation prompts rather than plotting alone.",
    outcomes: [
      "Connect equations and shapes",
      "Interpret slope and intercept",
      "Read motion graphs",
      "Compare data sets",
    ],
    collections: [
      {
        title: "Functions",
        description: "Investigate linear, quadratic and trigonometric relationships.",
        examples: ["y = mx + c", "y = ax² + c", "y = A sin(x)"],
      },
      {
        title: "Motion graphs",
        description: "Connect position, velocity and acceleration.",
        examples: ["Distance–time", "Velocity–time", "Changing acceleration"],
      },
      {
        title: "Data skills",
        description: "Read tables, trends and uncertainty.",
        examples: ["Choose a scale", "Spot an outlier", "Estimate a gradient"],
      },
    ],
    sources: scienceSources,
    related: ["formula-explorer", "science-calculators", "study-paths"],
  },
  {
    id: 9,
    slug: "science-calculators",
    title: "Science Calculator Collection",
    shortTitle: "Calculators",
    group: "Tools",
    icon: "calculator",
    accent: "#14b8a6",
    interactive: true,
    tagline: "Calculate, inspect the formula and follow every substitution.",
    description:
      "Purpose-built calculators for mechanics, energy, matter, waves and electricity with units and interpretation.",
    outcomes: [
      "Select the correct equation",
      "Substitute known values",
      "Calculate with units",
      "Judge whether an answer is reasonable",
    ],
    collections: [
      {
        title: "Motion",
        description: "Speed, acceleration and projectile relationships.",
        examples: ["Speed–distance–time", "Acceleration", "Projectile range"],
      },
      {
        title: "Forces and energy",
        description: "Mechanics calculations with clear unit checks.",
        examples: ["Newton’s second law", "Kinetic energy", "Gravitational potential energy"],
      },
      {
        title: "Matter and electricity",
        description: "Common equations for material and circuit behaviour.",
        examples: ["Density", "Pressure", "Ohm’s law"],
      },
    ],
    sources: scienceSources,
    related: ["formula-explorer", "unit-converter", "interactive-graph-laboratory"],
  },
  {
    id: 10,
    slug: "periodic-table-explorer",
    title: "Periodic Table Explorer",
    shortTitle: "Periodic Table",
    group: "Tools",
    icon: "table",
    accent: "#22c55e",
    interactive: true,
    tagline: "Explore elements through structure, properties, discovery and uses.",
    description:
      "A searchable element guide that connects atomic number and electron structure to patterns in physical and chemical behaviour.",
    outcomes: [
      "Locate an element",
      "Read atomic information",
      "Recognize periodic patterns",
      "Connect properties to uses",
    ],
    collections: [
      {
        title: "Element profiles",
        description: "Concise, sourced information for each element.",
        examples: ["Atomic structure", "Natural occurrence", "Common uses"],
      },
      {
        title: "Periodic patterns",
        description: "See how properties change across periods and groups.",
        examples: ["Atomic radius", "Reactivity", "Metals and non-metals"],
      },
      {
        title: "Discovery stories",
        description: "Place element discoveries in historical context.",
        examples: ["Ancient elements", "Laboratory discoveries", "Synthetic elements"],
      },
    ],
    sources: [
      {
        title: "Periodic Table of Elements",
        organization: "IUPAC",
        url: "https://iupac.org/what-we-do/periodic-table-of-elements/",
      },
    ],
    related: ["science-dictionary", "great-inventions", "famous-experiments"],
  },
  {
    id: 11,
    slug: "daily-science-challenge",
    title: "Daily Science Challenge",
    shortTitle: "Daily Challenge",
    group: "Practice",
    icon: "calendar",
    accent: "#f97316",
    interactive: true,
    tagline: "One carefully explained question every day.",
    description:
      "A short daily habit with a hint, answer explanation, streak and links to the lesson behind the question.",
    outcomes: [
      "Recall a key idea",
      "Build a learning habit",
      "Explain an answer",
      "Track a streak",
    ],
    collections: [
      {
        title: "Daily rotation",
        description: "Questions rotate through the whole platform.",
        examples: ["Monday mathematics", "Physics challenge", "Weekend science mystery"],
      },
    ],
    sources: scienceSources,
    related: ["science-quiz-arena", "achievement-system", "mistake-analyzer"],
  },
  {
    id: 12,
    slug: "science-quiz-arena",
    title: "Science Quiz Arena",
    shortTitle: "Quiz Arena",
    group: "Practice",
    icon: "trophy",
    accent: "#eab308",
    interactive: true,
    tagline: "Practise by subject, difficulty and challenge mode.",
    description:
      "Flexible quizzes with immediate explanations, retry controls and a review list for incorrect answers.",
    outcomes: [
      "Test understanding",
      "Learn from feedback",
      "Retry weak concepts",
      "Monitor improvement",
    ],
    collections: [
      {
        title: "Quick quiz",
        description: "Five or ten questions for fast practice.",
        examples: ["Beginner", "Intermediate", "Advanced"],
      },
      {
        title: "Challenge modes",
        description: "Change the pressure without hiding learning feedback.",
        examples: ["Timed challenge", "Examination mode", "Perfect-score run"],
      },
    ],
    sources: scienceSources,
    related: ["daily-science-challenge", "mistake-analyzer", "achievement-system"],
  },
  {
    id: 13,
    slug: "achievement-system",
    title: "Learning Achievements",
    shortTitle: "Achievements",
    group: "Practice",
    icon: "award",
    accent: "#a855f7",
    interactive: true,
    tagline: "Celebrate meaningful learning milestones—not empty clicks.",
    description:
      "Private, browser-based badges recognize completed lessons, experiments, quiz improvement and consistent study.",
    outcomes: [
      "See completed work",
      "Set a next goal",
      "Build a study streak",
      "Celebrate mastery",
    ],
    collections: [
      {
        title: "Achievement families",
        description: "Badges connect to real learning actions.",
        examples: ["First Experiment", "Seven-Day Streak", "Perfect Quiz", "Nature Detective"],
      },
    ],
    sources: [],
    related: ["daily-science-challenge", "science-quiz-arena", "study-paths"],
  },
  {
    id: 14,
    slug: "ask-predict-reveal",
    title: "Ask, Predict, Reveal",
    shortTitle: "Predict & Reveal",
    group: "Practice",
    icon: "eye",
    accent: "#ec4899",
    interactive: true,
    tagline: "Commit to a prediction before seeing the scientific explanation.",
    description:
      "Concept questions expose intuitive ideas, then use an observation or animation to rebuild the explanation.",
    outcomes: [
      "Make a prediction",
      "Explain reasoning",
      "Compare with evidence",
      "Revise a mental model",
    ],
    collections: [
      {
        title: "Prediction prompts",
        description: "Short demonstrations with surprising but explainable results.",
        examples: [
          "Feather and hammer in vacuum",
          "Two balls on different tracks",
          "Ice floating in a full glass",
        ],
      },
    ],
    sources: scienceSources,
    related: ["myth-vs-science", "virtual-science-laboratory", "science-puzzle-room"],
  },
  {
    id: 15,
    slug: "science-puzzle-room",
    title: "Science Puzzle Room",
    shortTitle: "Puzzle Room",
    group: "Practice",
    icon: "puzzle",
    accent: "#d946ef",
    interactive: true,
    tagline: "Use evidence, patterns and scientific reasoning to unlock each room.",
    description:
      "Logic puzzles, optical challenges and mini escape rooms make learners apply concepts in unfamiliar situations.",
    outcomes: [
      "Recognize patterns",
      "Combine clues",
      "Reject impossible explanations",
      "Transfer knowledge",
    ],
    collections: [
      {
        title: "Visual puzzles",
        description: "Investigate perception, scale and optical geometry.",
        examples: ["Which line is longer?", "Find the hidden reflection", "Rebuild the spectrum"],
      },
      {
        title: "Evidence rooms",
        description: "Use measurements to identify what happened.",
        examples: ["The cooling cup", "The mystery circuit", "Footprints on the Moon"],
      },
    ],
    sources: scienceSources,
    related: ["ask-predict-reveal", "myth-vs-science", "science-quiz-arena"],
  },
  {
    id: 16,
    slug: "great-inventions",
    title: "Great Inventions and Their Evolution",
    shortTitle: "Great Inventions",
    group: "Explore",
    icon: "wrench",
    accent: "#78716c",
    interactive: false,
    tagline: "Follow inventions through prototypes, improvements and many contributors.",
    description:
      "Visual histories avoid the lone-genius myth and show how engineering develops through repeated testing and refinement.",
    outcomes: [
      "Trace design changes",
      "Recognize multiple contributors",
      "Connect needs to inventions",
      "Compare prototype and modern form",
    ],
    collections: [
      {
        title: "Power and machines",
        description: "Devices that transformed work and energy use.",
        examples: ["Steam engine", "Electric motor", "Battery"],
      },
      {
        title: "Communication",
        description: "From physical signals to global digital networks.",
        examples: ["Telegraph", "Telephone", "Radio"],
      },
      {
        title: "Seeing farther",
        description: "Instruments that extended human observation.",
        examples: ["Telescope", "Microscope", "Camera"],
      },
    ],
    sources: [
      {
        title: "Collections",
        organization: "Smithsonian Institution",
        url: "https://www.si.edu/collections",
      },
    ],
    related: ["science-timeline", "famous-experiments", "physics-in-everyday-life"],
  },
  {
    id: 17,
    slug: "science-timeline",
    title: "Timeline of Scientific Discovery",
    shortTitle: "Science Timeline",
    group: "Explore",
    icon: "history",
    accent: "#0f766e",
    interactive: false,
    tagline: "See discoveries in their historical, technological and cultural context.",
    description:
      "A connected chronology links observations, experiments, mathematical models, instruments and the people who contributed.",
    outcomes: [
      "Place discoveries in sequence",
      "Connect ideas across fields",
      "Recognize gradual development",
      "Open related scientist profiles",
    ],
    collections: [
      {
        title: "Foundations",
        description: "Early measurement, astronomy, mathematics and mechanics.",
        examples: ["Ancient astronomy", "Scientific revolution", "Classical mechanics"],
      },
      {
        title: "Modern physics",
        description: "From energy and fields to relativity and quantum theory.",
        examples: ["Thermodynamics", "Electromagnetism", "Twentieth-century physics"],
      },
      {
        title: "Contemporary science",
        description: "Spaceflight, computing, climate and large collaborations.",
        examples: ["Space exploration", "Information age", "Modern observatories"],
      },
    ],
    sources: [
      {
        title: "History of Science Collections",
        organization: "Royal Society",
        url: "https://royalsociety.org/journals-books-and-databases/library/",
      },
    ],
    related: ["great-inventions", "famous-experiments", "unsolved-science-mysteries"],
  },
  {
    id: 18,
    slug: "famous-experiments",
    title: "Famous Experiments",
    shortTitle: "Famous Experiments",
    group: "Explore",
    icon: "microscope",
    accent: "#0284c7",
    interactive: false,
    tagline: "Reconstruct the question, apparatus, evidence and conclusion.",
    description:
      "Accurate experiment stories emphasize what was actually tested, what the evidence supported and what later work refined.",
    outcomes: [
      "Identify the research question",
      "Understand the apparatus",
      "Interpret the observation",
      "Avoid exaggerated discovery stories",
    ],
    collections: [
      {
        title: "Light and matter",
        description: "Experiments that changed models of light and atoms.",
        examples: ["Newton’s prisms", "Young’s double slit", "Rutherford scattering"],
      },
      {
        title: "Forces and fields",
        description: "Measurements of gravity, charge and induction.",
        examples: ["Cavendish experiment", "Millikan oil drops", "Faraday induction"],
      },
      {
        title: "Space and motion",
        description: "Tests of movement, reference frames and the cosmos.",
        examples: [
          "Falling-body studies",
          "Michelson–Morley",
          "Modern gravitational-wave detection",
        ],
      },
    ],
    sources: [
      {
        title: "Science Museum Group Collection",
        organization: "Science Museum Group",
        url: "https://collection.sciencemuseumgroup.org.uk/",
      },
    ],
    related: ["virtual-science-laboratory", "science-timeline", "great-inventions"],
  },
  {
    id: 19,
    slug: "science-around-qatar",
    title: "Science Around Qatar",
    shortTitle: "Science in Qatar",
    group: "Explore",
    icon: "sun",
    accent: "#b45309",
    interactive: false,
    tagline: "Connect global science to Qatar’s climate, coast, energy and engineering.",
    description:
      "Locally relevant lessons explore desert optics, heat, humidity, dust, seawater, buildings, solar energy and traditional navigation.",
    outcomes: [
      "Observe local phenomena",
      "Connect science to Qatar",
      "Understand environmental applications",
      "Explore regional research",
    ],
    collections: [
      {
        title: "Desert and atmosphere",
        description: "Optics and weather in an arid coastal environment.",
        examples: ["Desert mirages", "Dust storms", "Humidity and condensation"],
      },
      {
        title: "Water and energy",
        description: "Scientific and engineering responses to local conditions.",
        examples: ["Desalination", "Solar energy", "District cooling"],
      },
      {
        title: "Design and heritage",
        description: "Science in buildings, materials and navigation.",
        examples: ["Thermal insulation", "Wind and high-rise buildings", "Navigation by stars"],
      },
    ],
    sources: [
      {
        title: "Research",
        organization: "Qatar Environment and Energy Research Institute",
        url: "https://www.hbku.edu.qa/en/qeeri",
      },
      {
        title: "Climate information",
        organization: "Qatar Civil Aviation Authority, Meteorology Department",
        url: "https://qweather.gov.qa/",
      },
    ],
    related: ["physics-in-everyday-life", "space-exploration-hub", "what-if-science"],
  },
  {
    id: 20,
    slug: "space-exploration-hub",
    title: "Space Exploration Hub",
    shortTitle: "Space Hub",
    group: "Explore",
    icon: "rocket",
    accent: "#4338ca",
    interactive: false,
    tagline: "Travel from the Solar System to exoplanets and the distant universe.",
    description:
      "Scale-aware visual guides connect planets, orbits, eclipses, rockets, missions and modern astronomical discoveries.",
    outcomes: [
      "Compare worlds",
      "Understand scale",
      "Explain orbital events",
      "Follow mission evidence",
    ],
    collections: [
      {
        title: "Solar System",
        description: "Worlds, small bodies and the physics connecting them.",
        examples: ["Planet comparison", "Moon phases", "Eclipses"],
      },
      {
        title: "Spaceflight",
        description: "How spacecraft launch, navigate and collect evidence.",
        examples: ["Rocket stages", "Satellites", "Space stations"],
      },
      {
        title: "Beyond the Sun",
        description: "Stars, black holes, galaxies and exoplanets.",
        examples: ["Stellar life cycles", "Finding exoplanets", "Observing black holes"],
      },
    ],
    sources: [
      {
        title: "Solar System Exploration",
        organization: "NASA Science",
        url: "https://science.nasa.gov/solar-system/",
      },
      {
        title: "Science and Exploration",
        organization: "European Space Agency",
        url: "https://www.esa.int/Science_Exploration",
      },
    ],
    related: ["what-if-science", "unsolved-science-mysteries", "science-timeline"],
  },
  {
    id: 21,
    slug: "study-paths",
    title: "Guided Study Paths",
    shortTitle: "Study Paths",
    group: "Learn",
    icon: "route",
    accent: "#16a34a",
    interactive: true,
    tagline: "Follow lessons in a sensible sequence for your level and goal.",
    description:
      "Curated routes turn a large content library into manageable journeys by subject, level, objective and available study time.",
    outcomes: [
      "Choose an appropriate starting point",
      "Follow prerequisites",
      "Track completed lessons",
      "Set a realistic next step",
    ],
    collections: [
      {
        title: "By foundation",
        description: "Start with the concepts later lessons depend on.",
        examples: ["Mathematics foundations", "Physics foundations", "Scientific measurement"],
      },
      {
        title: "By goal",
        description: "Choose a path based on what you want to accomplish.",
        examples: ["Exam revision", "Curious beginner", "Problem-solving practice"],
      },
    ],
    sources: [],
    related: ["downloadable-study-materials", "achievement-system", "mistake-analyzer"],
  },
  {
    id: 22,
    slug: "downloadable-study-materials",
    title: "Downloadable Study Materials",
    shortTitle: "Downloads",
    group: "Resources",
    icon: "download",
    accent: "#475569",
    interactive: true,
    tagline: "Print focused revision resources for study away from the screen.",
    description:
      "Teacher- and student-friendly worksheets, summaries, experiment sheets, formula cards and answer keys.",
    outcomes: [
      "Revise offline",
      "Practise with a worksheet",
      "Use a separate answer key",
      "Prepare an experiment",
    ],
    collections: [
      {
        title: "Revision",
        description: "Compact material for remembering and reviewing.",
        examples: ["Lesson summaries", "Formula sheets", "Revision cards"],
      },
      {
        title: "Practice",
        description: "Structured questions for independent or classroom use.",
        examples: ["Illustrated worksheets", "Exam practice", "Separate answer keys"],
      },
      {
        title: "Experiments",
        description: "Printable planning and observation sheets.",
        examples: ["Safety checklist", "Fair-test planner", "Results table"],
      },
    ],
    sources: [],
    related: ["study-paths", "science-dictionary", "science-quiz-arena"],
  },
  {
    id: 23,
    slug: "science-dictionary",
    title: "Illustrated Science Dictionary",
    shortTitle: "Dictionary",
    group: "Resources",
    icon: "book",
    accent: "#0369a1",
    interactive: true,
    tagline: "Search a term, understand it plainly and open the connected lesson.",
    description:
      "Definitions pair plain language with scientific meaning, examples, symbols and related concepts.",
    outcomes: [
      "Understand technical vocabulary",
      "Compare related terms",
      "Use a term correctly",
      "Open deeper lessons",
    ],
    collections: [
      {
        title: "Physics language",
        description: "Terms from mechanics, matter, waves and electricity.",
        examples: ["Acceleration", "Refraction", "Electric field"],
      },
      {
        title: "Scientific practice",
        description: "Vocabulary for experiments and evidence.",
        examples: ["Variable", "Uncertainty", "Model"],
      },
      {
        title: "Mathematical language",
        description: "Words and symbols used across quantitative science.",
        examples: ["Gradient", "Proportion", "Vector"],
      },
    ],
    sources: scienceSources,
    related: ["unit-converter", "downloadable-study-materials", "study-paths"],
  },
  {
    id: 24,
    slug: "mistake-analyzer",
    title: "Mistake Analyzer",
    shortTitle: "Mistake Analyzer",
    group: "Practice",
    icon: "search-check",
    accent: "#dc2626",
    interactive: true,
    tagline: "Turn every incorrect answer into a useful next step.",
    description:
      "Quiz feedback classifies the likely misconception, explains it and recommends a focused lesson plus a fresh practice question.",
    outcomes: [
      "Understand why an answer failed",
      "Identify the weak concept",
      "Review a targeted explanation",
      "Try a similar question",
    ],
    collections: [
      {
        title: "Diagnosis",
        description: "Look beyond right or wrong to the reasoning pattern.",
        examples: ["Unit mismatch", "Sign error", "Misread graph"],
      },
      {
        title: "Recovery",
        description: "Use the smallest useful revision step.",
        examples: ["Review concept", "Study worked example", "Try a transfer question"],
      },
    ],
    sources: [],
    related: ["science-quiz-arena", "study-paths", "daily-science-challenge"],
  },
  {
    id: 25,
    slug: "english-arabic-learning",
    title: "English–Arabic Learning Support",
    shortTitle: "English–Arabic",
    group: "Resources",
    icon: "languages",
    accent: "#059669",
    interactive: true,
    tagline: "Make scientific learning clearer for English and Arabic readers.",
    description:
      "A bilingual learning layer supports right-to-left reading while preserving equations, symbols, diagrams and scientific terminology.",
    outcomes: [
      "Switch reading language",
      "Compare scientific terms",
      "Keep equations correctly aligned",
      "Support learners in Qatar and beyond",
    ],
    collections: [
      {
        title: "Bilingual terminology",
        description: "Pair carefully reviewed scientific vocabulary.",
        examples: ["English term", "Arabic equivalent", "Pronunciation and context"],
      },
      {
        title: "Right-to-left design",
        description: "Adapt layouts without reversing mathematical meaning.",
        examples: ["RTL paragraphs", "Stable equations", "Mirrored navigation where appropriate"],
      },
    ],
    sources: [],
    related: ["science-dictionary", "science-around-qatar", "downloadable-study-materials"],
  },
];

export const HUB_GROUPS: HubGroup[] = ["Learn", "Explore", "Tools", "Practice", "Resources"];

export const HUB_GROUP_COPY: Record<HubGroup, { description: string; accent: string }> = {
  Learn: { description: "Structured lessons and guided journeys", accent: "#16a34a" },
  Explore: { description: "Stories, discoveries and big questions", accent: "#7c3aed" },
  Tools: { description: "Calculators, converters and visual models", accent: "#0891b2" },
  Practice: { description: "Challenges, quizzes and feedback", accent: "#ea580c" },
  Resources: { description: "Glossaries, downloads and language support", accent: "#475569" },
};

export function getHubFeature(slug: string) {
  return HUB_FEATURES.find((feature) => feature.slug === slug);
}
