export type ScienceQaCategory =
  | "Earth, Environment and Climate"
  | "Animals, Plants and Biology"
  | "Human Body and Health"
  | "Physics and Everyday Science"
  | "Chemistry and Materials";

export const SCIENCE_QA_CATEGORIES: ScienceQaCategory[] = [
  "Earth, Environment and Climate",
  "Animals, Plants and Biology",
  "Human Body and Health",
  "Physics and Everyday Science",
  "Chemistry and Materials",
];

export interface QaDiagramLabel {
  label: string;
  explanation: string;
}

/**
 * A lightweight, generic labelled diagram. `type` picks the layout the
 * QaDiagram component uses to arrange `labels`:
 *  - "cycle": labels arranged in a circular loop with connecting arrows
 *  - "process": labels arranged left-to-right as sequential steps
 *  - "structure": labels arranged as stacked/parallel parts of one system
 *  - "comparison": labels arranged as two or more side-by-side columns
 */
export interface QaDiagram {
  type: "cycle" | "process" | "structure" | "comparison";
  title: string;
  description: string;
  labels: QaDiagramLabel[];
}

export interface ScienceQuestion {
  id: number;
  question: string;
  category: ScienceQaCategory;
  shortAnswer: string;
  explanation: string;
  example?: string;
  keyFacts?: string[];
  diagram?: QaDiagram;
  relatedQuestions?: number[];
}

export const SCIENCE_QA: ScienceQuestion[] = [
  {
    id: 1,
    question: "What is the greenhouse effect?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "It's the natural warming of Earth caused by gases that trap heat in the atmosphere.",
    explanation:
      "Sunlight passes through the atmosphere and warms the ground. The warm ground radiates heat back outward, but greenhouse gases absorb some of that heat and re-emit it in all directions, including back down. This keeps Earth's surface warmer than it would be with no atmosphere at all.",
    example:
      "Without the greenhouse effect, Earth's average temperature would be about -18°C instead of the actual +15°C — too cold for most life.",
    keyFacts: [
      "Greenhouse gas — a gas that absorbs and re-emits heat energy (infrared radiation).",
    ],
    diagram: {
      type: "process",
      title: "How the greenhouse effect traps heat",
      description:
        "Sunlight enters, warms the surface, and some outgoing heat is trapped by greenhouse gases.",
      labels: [
        {
          label: "Sunlight arrives",
          explanation: "Solar energy passes through the atmosphere to the ground.",
        },
        { label: "Surface warms", explanation: "The ground absorbs sunlight and heats up." },
        {
          label: "Heat radiates up",
          explanation: "The warm surface emits infrared heat back toward space.",
        },
        {
          label: "Gases trap heat",
          explanation: "Greenhouse gases absorb some heat and send part of it back down.",
        },
      ],
    },
    relatedQuestions: [2, 4],
  },
  {
    id: 2,
    question: "Which gases are known as greenhouse gases?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "The main ones are carbon dioxide, methane, water vapour, nitrous oxide and ozone.",
    explanation:
      "These gases share a property: their molecules absorb infrared heat energy. Water vapour and carbon dioxide are the most abundant; methane and nitrous oxide are far less common but trap heat much more strongly per molecule.",
    keyFacts: [
      "Carbon dioxide (CO₂) — released by burning fossil fuels and breathing.",
      "Methane (CH₄) — released by livestock, rice paddies and landfill waste.",
    ],
    diagram: {
      type: "structure",
      title: "The main greenhouse gases",
      description: "Several gases in the atmosphere trap heat, in different amounts and strengths.",
      labels: [
        {
          label: "Carbon dioxide (CO\u2082)",
          explanation: "The most abundant greenhouse gas from burning fuels.",
        },
        {
          label: "Methane (CH\u2084)",
          explanation: "From livestock, rice paddies and landfills; traps heat strongly.",
        },
        {
          label: "Water vapour",
          explanation: "The most common greenhouse gas, varying naturally with weather.",
        },
        {
          label: "Nitrous oxide",
          explanation: "Released from fertilisers and some industrial processes.",
        },
      ],
    },
    relatedQuestions: [1, 3],
  },
  {
    id: 3,
    question: "Why is carbon dioxide important for Earth?",
    category: "Earth, Environment and Climate",
    shortAnswer: "It helps keep Earth warm enough for life and is essential for plant growth.",
    explanation:
      "As a greenhouse gas, carbon dioxide (CO₂) helps trap the heat that keeps the planet's average temperature liveable. Plants also absorb CO₂ during photosynthesis to build sugars, so it is a vital raw material for nearly all food chains — even though too much of it in the atmosphere causes excess warming.",
    example:
      "Farmers sometimes add extra CO₂ inside greenhouses because it speeds up plant growth.",
    diagram: {
      type: "comparison",
      title: "Two roles of carbon dioxide",
      description: "CO\u2082 supports life in two very different ways.",
      labels: [
        {
          label: "Warms the planet",
          explanation: "Traps heat as a greenhouse gas, keeping Earth liveable.",
        },
        {
          label: "Feeds plants",
          explanation: "Absorbed during photosynthesis to build sugars and growth.",
        },
      ],
    },
    relatedQuestions: [1, 6],
  },
  {
    id: 4,
    question: "What is global warming?",
    category: "Earth, Environment and Climate",
    shortAnswer: "It's the ongoing rise in Earth's average surface temperature.",
    explanation:
      "Human activities such as burning coal, oil and gas release extra greenhouse gases, strengthening the natural greenhouse effect. This traps more heat than usual, gradually raising average temperatures across the globe, melting ice and warming oceans.",
    keyFacts: [
      "Fossil fuels — coal, oil and natural gas formed from ancient organisms, burned for energy.",
    ],
    diagram: {
      type: "process",
      title: "How global warming happens",
      description: "Extra greenhouse gases strengthen the natural warming effect over time.",
      labels: [
        {
          label: "Fuels burned",
          explanation: "Coal, oil and gas release extra CO\u2082 and other gases.",
        },
        { label: "Gases build up", explanation: "Greenhouse gas levels in the atmosphere rise." },
        {
          label: "More heat trapped",
          explanation: "The strengthened greenhouse effect holds in more heat.",
        },
        {
          label: "Temperatures rise",
          explanation: "Average global temperatures increase over decades.",
        },
      ],
    },
    relatedQuestions: [1, 5],
  },
  {
    id: 5,
    question: "What is climate change?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "It's the long-term shift in temperature and typical weather patterns across the planet.",
    explanation:
      "Climate change includes global warming but is broader: it covers shifts in rainfall patterns, storm intensity, sea levels and seasonal timing, largely driven by rising greenhouse gas levels. 'Climate' describes average weather over decades, so these changes are measured over long timescales, not single storms or heatwaves.",
    diagram: {
      type: "comparison",
      title: "Weather vs climate",
      description: "Climate change is measured over decades, not single events.",
      labels: [
        { label: "Weather", explanation: "Conditions on a single day, changing hour to hour." },
        { label: "Climate", explanation: "The average pattern of weather over many years." },
      ],
    },
    relatedQuestions: [4],
  },
  {
    id: 6,
    question: "How do trees help reduce carbon dioxide?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Trees absorb CO₂ from the air during photosynthesis and store the carbon in their wood.",
    explanation:
      "As trees grow, they pull in carbon dioxide through tiny pores in their leaves and use it, along with water and sunlight, to build sugars and wood. The carbon stays locked inside the tree for as long as it lives (and often after, in furniture or buildings), removing it from the atmosphere.",
    example: "A single mature tree can absorb roughly 20 kg of CO₂ per year.",
    diagram: {
      type: "process",
      title: "How a tree removes carbon dioxide",
      description: "Trees pull carbon out of the air and lock it away as they grow.",
      labels: [
        {
          label: "CO\u2082 absorbed",
          explanation: "Leaves take in carbon dioxide through tiny pores.",
        },
        {
          label: "Sugars built",
          explanation: "Photosynthesis turns CO\u2082 and water into sugar.",
        },
        {
          label: "Carbon stored",
          explanation: "Carbon becomes part of the wood, roots and branches.",
        },
        {
          label: "Oxygen released",
          explanation: "Oxygen is released back into the air as a byproduct.",
        },
      ],
    },
    relatedQuestions: [3, 33],
  },
  {
    id: 7,
    question: "Why is the ozone layer important?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "It absorbs most of the Sun's harmful ultraviolet (UV) radiation before it reaches the ground.",
    explanation:
      "The ozone layer sits high in the stratosphere and is made of ozone molecules (O₃) that absorb UV-B and UV-C radiation. Without it, much more UV light would reach Earth's surface, increasing skin cancer, eye damage and harm to crops and marine life.",
    keyFacts: [
      "Ozone (O₃) — a molecule of three oxygen atoms, different from the oxygen we breathe (O₂).",
    ],
    diagram: {
      type: "structure",
      title: "Where the ozone layer sits",
      description: "The ozone layer is a protective band high in Earth's atmosphere.",
      labels: [
        { label: "Ground level", explanation: "Where we live, breathe and experience weather." },
        {
          label: "Troposphere",
          explanation: "The lowest atmospheric layer, where clouds and weather form.",
        },
        {
          label: "Ozone layer (stratosphere)",
          explanation: "Absorbs most of the Sun's harmful UV radiation.",
        },
        { label: "Outer space", explanation: "Beyond the atmosphere, with no protective ozone." },
      ],
    },
    relatedQuestions: [8],
  },
  {
    id: 8,
    question: "What causes air pollution?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Mainly the burning of fuels in vehicles, factories and power plants, plus dust and chemical fumes.",
    explanation:
      "Burning fossil fuels releases smoke, soot and gases such as sulphur dioxide, nitrogen oxides and carbon monoxide. Industrial processes, construction dust, and even natural sources like wildfires add particles and gases that make the air unhealthy to breathe.",
    example: "Heavy traffic during rush hour raises nitrogen dioxide levels noticeably in cities.",
    diagram: {
      type: "comparison",
      title: "Main sources of air pollution",
      description: "Air pollution comes from several different everyday and industrial sources.",
      labels: [
        { label: "Vehicles", explanation: "Exhaust fumes release smoke and harmful gases." },
        { label: "Factories", explanation: "Industrial burning releases smoke and chemicals." },
        {
          label: "Power plants",
          explanation: "Burning coal and gas for electricity releases pollutants.",
        },
        {
          label: "Dust and fires",
          explanation: "Construction dust and wildfires add particles to the air.",
        },
      ],
    },
    relatedQuestions: [9, 19],
  },
  {
    id: 9,
    question: "How does acid rain form?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Sulphur dioxide and nitrogen oxides from burning fuel react with water in the air to form acids.",
    explanation:
      "When fossil fuels burn, they release sulphur dioxide and nitrogen oxides into the air. These gases react with water vapour, oxygen and other chemicals to form sulphuric and nitric acid droplets, which then fall as acid rain, damaging forests, lakes and stone buildings.",
    diagram: {
      type: "process",
      title: "Formation of acid rain",
      description:
        "Polluting gases rise, react with water in clouds, and fall back down as acidic rain.",
      labels: [
        {
          label: "Gases released",
          explanation: "Sulphur dioxide and nitrogen oxides enter the air from burning fuel.",
        },
        { label: "Gases rise", explanation: "Wind carries them up into the atmosphere." },
        {
          label: "Acids form",
          explanation: "The gases react with water vapour to form acidic droplets.",
        },
        {
          label: "Acid rain falls",
          explanation: "The droplets fall as rain, snow or fog, sometimes far away.",
        },
      ],
    },
    relatedQuestions: [8],
  },
  {
    id: 10,
    question: "What is renewable energy?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Energy from sources that naturally replenish and won't run out, such as sunlight and wind.",
    explanation:
      "Renewable energy sources are continuously renewed by nature — sunlight, wind, flowing water, and heat from inside the Earth. Because they don't get used up and produce little or no greenhouse gas while generating power, they are a cleaner alternative to fossil fuels.",
    keyFacts: [
      "Non-renewable — the opposite: a resource that takes millions of years to form and can run out.",
    ],
    diagram: {
      type: "structure",
      title: "Common renewable energy sources",
      description: "Renewable sources are naturally replenished and produce little pollution.",
      labels: [
        { label: "Solar", explanation: "Captures energy directly from sunlight." },
        { label: "Wind", explanation: "Captures energy from moving air." },
        { label: "Hydropower", explanation: "Captures energy from flowing or falling water." },
        { label: "Geothermal", explanation: "Captures heat energy from inside the Earth." },
      ],
    },
    relatedQuestions: [11, 12, 13],
  },
  {
    id: 11,
    question: "What is non-renewable energy?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Energy from sources that exist in limited amounts and take millions of years to form, like fossil fuels.",
    explanation:
      "Coal, oil and natural gas formed from the remains of ancient plants and animals compressed underground over millions of years. Because we use them far faster than nature creates them, they are considered non-renewable, and burning them also releases greenhouse gases.",
    diagram: {
      type: "comparison",
      title: "The three main fossil fuels",
      description: "Fossil fuels formed over millions of years and exist in limited supply.",
      labels: [
        { label: "Coal", explanation: "Formed from ancient plants compressed underground." },
        { label: "Oil", explanation: "Formed from ancient marine organisms under pressure." },
        { label: "Natural gas", explanation: "Often found alongside oil deposits underground." },
      ],
    },
    relatedQuestions: [10],
  },
  {
    id: 12,
    question: "How does solar energy work?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Solar panels convert sunlight directly into electricity using special materials called semiconductors.",
    explanation:
      "Solar panels are made of photovoltaic cells containing silicon. When sunlight hits the silicon, it knocks electrons loose, creating a flow of electric current. This direct current is then converted into the alternating current used in homes and the electrical grid.",
    keyFacts: [
      "Photovoltaic — literally 'light-electricity', describing the direct conversion of sunlight into current.",
    ],
    diagram: {
      type: "process",
      title: "From sunlight to electricity",
      description: "A solar panel converts light energy directly into usable electric current.",
      labels: [
        {
          label: "Sunlight hits panel",
          explanation: "Photons strike the silicon cells in the panel.",
        },
        {
          label: "Electrons freed",
          explanation: "Light energy knocks electrons loose in the silicon.",
        },
        {
          label: "Current flows",
          explanation: "Freed electrons create a flow of direct current (DC).",
        },
        {
          label: "Power converted",
          explanation: "An inverter changes DC into usable AC electricity.",
        },
      ],
    },
    relatedQuestions: [10, 13],
  },
  {
    id: 13,
    question: "How does wind energy generate electricity?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Moving air spins turbine blades, which turn a generator that produces electricity.",
    explanation:
      "Wind pushes against the angled blades of a turbine, making the rotor spin. The rotor is connected to a shaft that turns a generator, where spinning magnets near coils of wire produce an electric current through electromagnetic induction.",
    diagram: {
      type: "process",
      title: "From wind to electricity",
      description:
        "Energy transforms from moving air into spinning motion and finally into electric current.",
      labels: [
        { label: "Wind blows", explanation: "Moving air pushes on the turbine's angled blades." },
        { label: "Blades spin", explanation: "The rotor turns, driven by the force of the wind." },
        {
          label: "Shaft turns generator",
          explanation: "The spinning shaft rotates magnets inside the generator.",
        },
        {
          label: "Electricity produced",
          explanation: "The moving magnets create current in surrounding coils of wire.",
        },
      ],
    },
    relatedQuestions: [10, 12],
  },
  {
    id: 14,
    question: "Why is recycling important?",
    category: "Earth, Environment and Climate",
    shortAnswer: "It saves raw materials and energy, and reduces waste and pollution.",
    explanation:
      "Recycling turns used materials like paper, glass, metal and plastic back into new products instead of extracting fresh raw materials. This uses less energy than making items from scratch, reduces landfill waste, and cuts down on pollution from mining and manufacturing.",
    example:
      "Recycling aluminium cans uses about 95% less energy than producing new aluminium from ore.",
    diagram: {
      type: "cycle",
      title: "The recycling loop",
      description: "Recycling turns used materials back into new products, again and again.",
      labels: [
        {
          label: "Waste collected",
          explanation: "Used paper, glass, metal or plastic is gathered.",
        },
        {
          label: "Materials processed",
          explanation: "Waste is sorted and broken down at a recycling facility.",
        },
        {
          label: "New products made",
          explanation: "Recycled material is remanufactured into new items.",
        },
        {
          label: "Products used again",
          explanation: "New products are sold and eventually recycled once more.",
        },
      ],
    },
    relatedQuestions: [15],
  },
  {
    id: 15,
    question: "What causes water pollution?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Chemicals, sewage, plastic waste and farm runoff entering rivers, lakes and oceans.",
    explanation:
      "Water pollution happens when harmful substances — industrial chemicals, untreated sewage, oil, plastic litter, and fertiliser or pesticide runoff from farms — enter water sources. These pollutants can poison wildlife, spread disease and make water unsafe to drink.",
    diagram: {
      type: "comparison",
      title: "Main sources of water pollution",
      description: "Harmful substances enter water from several different sources.",
      labels: [
        { label: "Sewage", explanation: "Untreated waste water entering rivers and seas." },
        { label: "Industrial chemicals", explanation: "Factory waste discharged into waterways." },
        {
          label: "Farm runoff",
          explanation: "Fertiliser and pesticide washed off farmland by rain.",
        },
        {
          label: "Plastic litter",
          explanation: "Discarded plastic waste entering oceans and rivers.",
        },
      ],
    },
    relatedQuestions: [14],
  },
  {
    id: 16,
    question: "What is the water cycle?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "The continuous movement of water between the oceans, air and land through evaporation, condensation and precipitation.",
    explanation:
      "The Sun heats water in oceans, lakes and rivers, causing it to evaporate into water vapour. This vapour rises, cools and condenses into clouds. Eventually it falls back to Earth as precipitation (rain or snow), flows into rivers and oceans, and the cycle repeats.",
    diagram: {
      type: "cycle",
      title: "The water cycle",
      description: "Water continuously moves between the surface, the air and back again.",
      labels: [
        {
          label: "Evaporation",
          explanation: "The Sun heats water, turning it into invisible water vapour.",
        },
        {
          label: "Condensation",
          explanation: "Rising vapour cools and forms tiny water droplets in clouds.",
        },
        {
          label: "Precipitation",
          explanation: "Droplets combine and fall as rain, snow, sleet or hail.",
        },
        {
          label: "Collection",
          explanation: "Water gathers in rivers, lakes and oceans, ready to evaporate again.",
        },
      ],
    },
    relatedQuestions: [17, 18],
  },
  {
    id: 17,
    question: "How do clouds form?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Warm, moist air rises, cools, and its water vapour condenses into tiny droplets around dust particles.",
    explanation:
      "As air rises, it moves into regions of lower pressure and expands, which causes it to cool. Cooler air holds less water vapour, so the vapour condenses onto tiny particles of dust or salt in the air, forming the small water droplets or ice crystals that make up a cloud.",
    diagram: {
      type: "process",
      title: "How a cloud forms",
      description: "Rising air cools until its water vapour condenses into visible droplets.",
      labels: [
        { label: "Warm moist air rises", explanation: "Air heated near the ground rises upward." },
        { label: "Air cools", explanation: "Rising air expands and drops in temperature." },
        { label: "Vapour condenses", explanation: "Cooled water vapour turns into tiny droplets." },
        {
          label: "Cloud forms",
          explanation:
            "Billions of droplets gather around dust particles, forming a visible cloud.",
        },
      ],
    },
    relatedQuestions: [16, 18],
  },
  {
    id: 18,
    question: "Why does rain fall?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Water droplets in clouds combine and grow until they become too heavy for rising air to support.",
    explanation:
      "Inside a cloud, tiny water droplets constantly collide and merge into bigger drops. Once a droplet becomes heavy enough that gravity overcomes the upward air currents holding it aloft, it falls to the ground as rain.",
    diagram: {
      type: "process",
      title: "Why raindrops fall",
      description: "Cloud droplets merge and grow until gravity pulls them down as rain.",
      labels: [
        {
          label: "Droplets collide",
          explanation: "Tiny water droplets inside a cloud bump into each other.",
        },
        { label: "Droplets merge", explanation: "Colliding droplets combine into larger drops." },
        {
          label: "Drop becomes heavy",
          explanation: "The growing drop becomes too heavy for rising air to support.",
        },
        { label: "Rain falls", explanation: "Gravity pulls the heavy drop down to the ground." },
      ],
    },
    relatedQuestions: [16, 17],
  },
  {
    id: 19,
    question: "What causes thunder and lightning?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Static electricity builds up in storm clouds and releases suddenly as a lightning bolt; thunder is the shockwave it creates.",
    explanation:
      "Inside a storm cloud, ice particles and water droplets collide, building up electric charge — negative charge low in the cloud, positive higher up and on the ground. When the charge difference gets big enough, it discharges as a lightning bolt. The bolt superheats the air along its path to about 30,000°C, making the air expand explosively — that shockwave is the thunder we hear.",
    example:
      "Because light travels far faster than sound, you see lightning before you hear its thunder.",
    diagram: {
      type: "process",
      title: "How thunder and lightning happen",
      description: "Electric charge builds up in a storm cloud and discharges suddenly.",
      labels: [
        {
          label: "Charge builds",
          explanation: "Ice and water particles colliding build up electric charge.",
        },
        {
          label: "Charge discharges",
          explanation: "A lightning bolt releases the built-up charge.",
        },
        {
          label: "Air superheats",
          explanation: "The bolt heats the surrounding air to about 30,000\u00b0C.",
        },
        {
          label: "Thunder heard",
          explanation: "The superheated air expands explosively, producing thunder.",
        },
      ],
    },
    relatedQuestions: [20, 49],
  },
  {
    id: 20,
    question: "Why do some places receive more rainfall than others?",
    category: "Earth, Environment and Climate",
    shortAnswer:
      "Rainfall depends on factors like closeness to oceans, wind patterns, mountains and latitude.",
    explanation:
      "Places near warm oceans or in the path of moist winds tend to get more rain, since there is more water vapour available to condense. Mountains force air to rise and cool on one side (causing rain) while leaving the other side dry. Areas near the equator generally get more rain than desert regions where dry air sinks.",
    example:
      "The windward side of a mountain range is often lush and rainy, while the leeward side can be a dry 'rain shadow' desert.",
    diagram: {
      type: "comparison",
      title: "Windward vs leeward rainfall",
      description: "Mountains split rainfall unevenly between their two sides.",
      labels: [
        {
          label: "Windward side",
          explanation: "Faces incoming moist wind, forcing air to rise, cool and rain heavily.",
        },
        {
          label: "Leeward side",
          explanation:
            "Sheltered from the wind, often dry, sometimes forming a rain shadow desert.",
        },
      ],
    },
    relatedQuestions: [16],
  },
  {
    id: 21,
    question: "Why do insects make loud chirping sounds at night?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Male insects like crickets chirp to attract mates and defend territory, and it's louder at night when it's cooler and quieter.",
    explanation:
      "Many insects, especially crickets and katydids, rub specialised body parts together (a process called stridulation) to produce sound. They are most active at night to avoid daytime predators and heat, and the calmer night air carries their calls further, helping them attract mates or warn off rivals.",
    keyFacts: [
      "Stridulation — producing sound by rubbing one body part against another, like a wing against a leg.",
    ],
    diagram: {
      type: "process",
      title: "How a cricket chirps",
      description: "Chirping is made mechanically, not with a voice.",
      labels: [
        {
          label: "Wing rubbed",
          explanation: "The male rubs a ridged wing edge against the other wing.",
        },
        {
          label: "Sound produced",
          explanation: "The rubbing motion produces a chirping sound (stridulation).",
        },
        { label: "Sound travels", explanation: "Calm night air carries the sound further." },
        { label: "Mate attracted", explanation: "Females and rival males respond to the call." },
      ],
    },
    relatedQuestions: [28],
  },
  {
    id: 22,
    question: "How do birds fly?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Their wings are shaped to create lift as air flows over and under them, while flight muscles power the flapping.",
    explanation:
      "A bird's wing is curved on top and flatter underneath — this shape makes air travel faster over the top, lowering pressure there and creating upward lift. Powerful chest muscles flap the wings to generate thrust, and lightweight hollow bones keep the bird light enough to stay airborne.",
    keyFacts: ["Lift — the upward force that opposes gravity and keeps a flying object airborne."],
    diagram: {
      type: "structure",
      title: "Why a wing generates lift",
      description:
        "The wing's curved shape and flapping motion work together to keep a bird in the air.",
      labels: [
        {
          label: "Curved upper surface",
          explanation: "Air moves faster over the curve, lowering pressure above the wing.",
        },
        {
          label: "Flatter lower surface",
          explanation: "Higher pressure below pushes the wing upward.",
        },
        {
          label: "Hollow bones",
          explanation: "Lightweight bones reduce the bird's overall weight.",
        },
        {
          label: "Flight muscles",
          explanation: "Strong chest muscles power the flapping motion for thrust.",
        },
      ],
    },
    relatedQuestions: [23],
  },
  {
    id: 23,
    question: "Why do birds migrate?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "They travel to find better food, warmer weather and safer places to breed as seasons change.",
    explanation:
      "As seasons change, food supplies like insects, seeds or fish can become scarce and temperatures drop. Many birds migrate — sometimes thousands of kilometres — to regions with more food and milder climates, returning later to breed where conditions are best for raising chicks.",
    example:
      "The Arctic tern migrates from the Arctic to the Antarctic and back each year, covering roughly 70,000 km.",
    diagram: {
      type: "comparison",
      title: "Why birds migrate",
      description: "Migration balances two changing needs across the seasons.",
      labels: [
        { label: "Food availability", explanation: "Birds move to follow seasonal food supplies." },
        {
          label: "Breeding conditions",
          explanation: "Birds return to the best regions for raising chicks.",
        },
      ],
    },
    relatedQuestions: [22],
  },
  {
    id: 24,
    question: "How do fish breathe underwater?",
    category: "Animals, Plants and Biology",
    shortAnswer: "Fish use gills to extract dissolved oxygen directly from the water.",
    explanation:
      "Water flows in through a fish's mouth and passes over its gills, thin feathery structures filled with blood vessels. Oxygen dissolved in the water diffuses into the blood through the gill membranes, while carbon dioxide diffuses out, and the water then exits through gill slits.",
    keyFacts: [
      "Gills — organs with a large surface area specialised for absorbing oxygen from water.",
    ],
    diagram: {
      type: "process",
      title: "How gills extract oxygen",
      description: "Water flows over the gills, delivering oxygen into the fish's blood.",
      labels: [
        { label: "Water enters mouth", explanation: "The fish takes water in through its mouth." },
        {
          label: "Water passes gills",
          explanation: "Water flows over the thin, feathery gill filaments.",
        },
        {
          label: "Oxygen absorbed",
          explanation: "Dissolved oxygen diffuses from water into the blood.",
        },
        { label: "Water exits", explanation: "Used water leaves through the gill slits." },
      ],
    },
    relatedQuestions: [34],
  },
  {
    id: 25,
    question: "Why do camels survive in deserts?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Their humps store fat for energy and water, and their bodies are adapted to conserve water and endure heat.",
    explanation:
      "A camel's hump stores fat, which can be broken down for energy and produces water as a byproduct when metabolised. Camels also sweat very little, produce concentrated urine to save water, and can tolerate large swings in body temperature — all adaptations that let them survive for long periods without drinking.",
    diagram: {
      type: "structure",
      title: "Camel desert adaptations",
      description:
        "Several features work together to help camels survive extreme heat and dryness.",
      labels: [
        {
          label: "Fat-storing hump",
          explanation: "Stores energy that can be broken down for water and fuel.",
        },
        { label: "Minimal sweating", explanation: "Conserves water even in intense heat." },
        { label: "Concentrated urine", explanation: "Reduces water lost through waste." },
        {
          label: "Wide temperature tolerance",
          explanation: "Body temperature can vary without harm.",
        },
      ],
    },
    relatedQuestions: [26],
  },
  {
    id: 26,
    question: "Why do polar bears have thick fur and fat?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Thick fur and a layer of blubber insulate them against the extreme cold of the Arctic.",
    explanation:
      "Polar bears live in one of the coldest environments on Earth. Their dense double-layered fur traps warm air close to the skin, while a thick layer of fat (blubber) underneath provides insulation and an energy reserve, keeping their body heat in even in icy water.",
    diagram: {
      type: "structure",
      title: "Polar bear cold-weather adaptations",
      description: "Thick fur and fat work together to keep polar bears warm.",
      labels: [
        { label: "Dense outer fur", explanation: "Traps a layer of warm air close to the skin." },
        {
          label: "Underfur layer",
          explanation: "A second, finer fur layer adds extra insulation.",
        },
        {
          label: "Blubber",
          explanation: "A thick fat layer under the skin insulates and stores energy.",
        },
      ],
    },
    relatedQuestions: [25],
  },
  {
    id: 27,
    question: "How do snakes move without legs?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Snakes use their muscles and scales to push against the ground, creating wave-like or straight-line motion.",
    explanation:
      "Snakes have hundreds of muscles connected to their ribs and belly scales. By contracting these muscles in a wave pattern, they push their scales against bumps and surfaces to propel themselves forward — a movement called lateral undulation, though some snakes move in a straight line using a caterpillar-like technique.",
    diagram: {
      type: "process",
      title: "How a snake moves",
      description: "Muscles create a travelling wave that pushes the snake forward.",
      labels: [
        { label: "Muscles contract", explanation: "Muscles along the body tighten in sequence." },
        { label: "Wave forms", explanation: "The contractions create a side-to-side wave shape." },
        { label: "Scales grip", explanation: "Belly scales catch on rough or uneven ground." },
        { label: "Body propelled", explanation: "The snake pushes itself forward along the wave." },
      ],
    },
    relatedQuestions: [28],
  },
  {
    id: 28,
    question: "Why do insects have six legs?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Six legs give insects excellent stability and balance, always keeping at least three feet on the ground.",
    explanation:
      "Having six legs lets an insect walk using a stable tripod gait — three legs on the ground at any moment while the other three move — giving constant balance even on rough or vertical surfaces. This body plan evolved early in insect ancestors and has proven very successful.",
    diagram: {
      type: "comparison",
      title: "Why six legs helps an insect",
      description: "Six legs enable a stable walking pattern called the tripod gait.",
      labels: [
        {
          label: "Tripod A",
          explanation: "Front-left, middle-right and back-left legs touch the ground.",
        },
        { label: "Tripod B", explanation: "The other three legs move forward, then swap roles." },
      ],
    },
    relatedQuestions: [21, 27],
  },
  {
    id: 29,
    question: "How do bees make honey?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Bees collect flower nectar, break it down with enzymes, and evaporate the water to leave thick honey.",
    explanation:
      "Worker bees drink sweet nectar from flowers and store it in a special 'honey stomach'. Back at the hive, they pass the nectar to other bees mouth-to-mouth, adding enzymes that break down its sugars. The bees then fan the nectar with their wings to evaporate excess water, thickening it into honey, which they store in wax honeycomb cells.",
    diagram: {
      type: "process",
      title: "From nectar to honey",
      description: "Nectar is transformed step by step into stored honey inside the hive.",
      labels: [
        {
          label: "Nectar collected",
          explanation: "A bee drinks nectar from flowers and stores it in its honey stomach.",
        },
        {
          label: "Enzymes added",
          explanation: "Nectar is passed between bees, mixing in enzymes that break down sugars.",
        },
        {
          label: "Water evaporated",
          explanation: "Bees fan the nectar with their wings to thicken it.",
        },
        {
          label: "Honey stored",
          explanation: "The finished honey is sealed inside wax honeycomb cells.",
        },
      ],
    },
    relatedQuestions: [30],
  },
  {
    id: 30,
    question: "Why are bees important for plants?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Bees pollinate flowers as they collect nectar, helping plants reproduce and produce fruit and seeds.",
    explanation:
      "As bees move from flower to flower gathering nectar, pollen grains stick to their fuzzy bodies and rub off onto the next flower they visit. This transfer of pollen, called pollination, fertilises the plant and allows it to produce seeds and fruit — a huge share of food crops depend on this process.",
    example:
      "Crops like apples, almonds and blueberries rely heavily on bee pollination for their harvest.",
    diagram: {
      type: "process",
      title: "How bees pollinate flowers",
      description: "Pollen travels between flowers as bees search for nectar.",
      labels: [
        { label: "Bee visits flower", explanation: "A bee lands on a flower to collect nectar." },
        { label: "Pollen sticks", explanation: "Pollen grains stick to the bee's furry body." },
        { label: "Bee moves on", explanation: "The bee flies to the next flower for more nectar." },
        {
          label: "Pollen transferred",
          explanation: "Pollen rubs off, fertilising the new flower.",
        },
      ],
    },
    relatedQuestions: [29, 37],
  },
  {
    id: 31,
    question: "How do plants make their own food?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Plants use sunlight, water and carbon dioxide to produce their own sugar through photosynthesis.",
    explanation:
      "Plants are unique in that they can capture energy from sunlight and use it to build their own food. Using a green pigment called chlorophyll, they combine carbon dioxide from the air with water from the soil to produce glucose (sugar) for energy, releasing oxygen as a byproduct.",
    diagram: {
      type: "process",
      title: "How a plant builds its own food",
      description: "Sunlight, water and carbon dioxide combine inside the leaf.",
      labels: [
        { label: "Light captured", explanation: "Chlorophyll absorbs energy from sunlight." },
        {
          label: "Ingredients combined",
          explanation: "Carbon dioxide and water are combined using that energy.",
        },
        {
          label: "Glucose produced",
          explanation: "The reaction produces glucose (sugar) for the plant.",
        },
        { label: "Oxygen released", explanation: "Oxygen gas is released as a byproduct." },
      ],
    },
    relatedQuestions: [32, 33],
  },
  {
    id: 32,
    question: "What is photosynthesis?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "It's the process plants use to convert sunlight, water and carbon dioxide into food (glucose) and oxygen.",
    explanation:
      "Photosynthesis takes place mainly in the leaves, inside cell structures called chloroplasts. Chlorophyll captures light energy and uses it to combine carbon dioxide (taken in through leaf pores) with water (drawn up from the roots), producing glucose the plant uses for energy and growth, and releasing oxygen into the air as a waste product.",
    example:
      "The oxygen we breathe is largely produced by photosynthesis in plants and ocean algae.",
    keyFacts: [
      "Chlorophyll — the green pigment in plant cells that absorbs light energy for photosynthesis.",
    ],
    diagram: {
      type: "process",
      title: "Photosynthesis: inputs to outputs",
      description:
        "Sunlight drives a chemical reaction that turns simple ingredients into food and oxygen.",
      labels: [
        {
          label: "Carbon dioxide in",
          explanation: "CO₂ enters the leaf through tiny pores called stomata.",
        },
        {
          label: "Water in",
          explanation: "Water is absorbed by the roots and carried up to the leaves.",
        },
        {
          label: "Light energy captured",
          explanation: "Chlorophyll absorbs sunlight to power the reaction.",
        },
        {
          label: "Glucose and oxygen out",
          explanation: "The plant produces sugar for energy and releases oxygen.",
        },
      ],
    },
    relatedQuestions: [31, 33],
  },
  {
    id: 33,
    question: "Why are leaves usually green?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Leaves look green because chlorophyll absorbs red and blue light but reflects green light.",
    explanation:
      "Chlorophyll, the pigment plants use to capture light for photosynthesis, is very effective at absorbing red and blue wavelengths of sunlight but reflects most green light back to our eyes. That reflected green light is what we see, making leaves appear green.",
    diagram: {
      type: "comparison",
      title: "How chlorophyll handles light",
      description: "Chlorophyll absorbs some colours of light and reflects others.",
      labels: [
        {
          label: "Red and blue light",
          explanation: "Strongly absorbed and used for photosynthesis.",
        },
        { label: "Green light", explanation: "Mostly reflected, which is why leaves look green." },
      ],
    },
    relatedQuestions: [32],
  },
  {
    id: 34,
    question: "How do plants absorb water?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Roots absorb water from the soil, which then travels up through the stem to the leaves.",
    explanation:
      "Tiny root hairs on a plant's roots have a large surface area for soaking up water and dissolved minerals from the soil. The water then moves upward through narrow tubes called xylem, pulled partly by capillary action and partly by evaporation from the leaves, which creates a continuous upward pull.",
    keyFacts: ["Xylem — the plant tissue that transports water and minerals from roots to leaves."],
    diagram: {
      type: "process",
      title: "How water moves through a plant",
      description: "Water travels from the soil, up the stem, to the leaves.",
      labels: [
        {
          label: "Root hairs absorb",
          explanation: "Tiny root hairs soak up water and minerals from soil.",
        },
        { label: "Water enters xylem", explanation: "Water moves into narrow tubes called xylem." },
        {
          label: "Water rises",
          explanation: "Capillary action and evaporation pull water upward.",
        },
        {
          label: "Water reaches leaves",
          explanation: "Water arrives at the leaves for photosynthesis.",
        },
      ],
    },
    relatedQuestions: [31],
  },
  {
    id: 35,
    question: "Why do some plants have thorns?",
    category: "Animals, Plants and Biology",
    shortAnswer: "Thorns are a defence mechanism that discourages animals from eating the plant.",
    explanation:
      "Sharp thorns, spines or prickles make it painful or difficult for herbivores to bite into a plant's stems and leaves. This protects the plant's tissue and, in fruit-bearing plants, can also help ensure fruit isn't eaten before its seeds are ready to spread.",
    example:
      "Desert plants like cacti often have thorns both for defence and to reduce water loss from their surface.",
    diagram: {
      type: "comparison",
      title: "Why plants grow thorns",
      description: "Thorns serve more than one protective purpose.",
      labels: [
        {
          label: "Deter herbivores",
          explanation: "Sharp points make the plant painful or difficult to eat.",
        },
        {
          label: "Protect resources",
          explanation: "In some plants, thorns also help protect scarce water or fruit.",
        },
      ],
    },
    relatedQuestions: [40],
  },
  {
    id: 36,
    question: "How do seeds grow into plants?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "A seed absorbs water, its embryo begins to grow, and a root and shoot emerge in a process called germination.",
    explanation:
      "Inside a seed is a tiny plant embryo along with a store of food. When conditions are right — enough water, warmth and oxygen — the seed absorbs water and swells, triggering the embryo to grow. A root pushes down into the soil first for water and stability, then a shoot grows upward toward light to begin photosynthesis.",
    diagram: {
      type: "process",
      title: "Stages of germination",
      description: "A dormant seed develops step by step into a young seedling.",
      labels: [
        {
          label: "Water absorbed",
          explanation: "The seed takes in water and swells, softening its outer coat.",
        },
        {
          label: "Embryo activates",
          explanation: "Stored food fuels the first growth of the tiny plant inside.",
        },
        {
          label: "Root emerges",
          explanation: "A root grows downward to anchor the plant and absorb water.",
        },
        {
          label: "Shoot emerges",
          explanation: "A shoot grows upward, reaching sunlight to begin photosynthesis.",
        },
      ],
    },
    relatedQuestions: [31],
  },
  {
    id: 37,
    question: "Why do flowers have different colours and smells?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Bright colours and scents attract pollinators like bees, butterflies and birds to help the plant reproduce.",
    explanation:
      "Flowers advertise themselves to pollinators using colour and scent, much like a signboard. Different pollinators are attracted to different cues — bees favour blue and yellow flowers, while some moths are drawn to strong scents released at night — so a flower's appearance often matches the pollinator it relies on.",
    diagram: {
      type: "comparison",
      title: "Flower signals for pollinators",
      description: "Different pollinators are attracted by different cues.",
      labels: [
        {
          label: "Bright colour",
          explanation: "Attracts bees and butterflies that see well in daylight.",
        },
        {
          label: "Strong scent",
          explanation: "Attracts moths and other pollinators active at night.",
        },
      ],
    },
    relatedQuestions: [30],
  },
  {
    id: 38,
    question: "What is the difference between mammals, birds, reptiles and amphibians?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "They differ mainly in body covering, temperature control, reproduction and where they can live.",
    explanation:
      "Mammals have fur or hair, are warm-blooded, and usually give birth to live young that feed on milk. Birds have feathers, are warm-blooded, and lay hard-shelled eggs. Reptiles have dry scaly skin, are cold-blooded, and lay leathery or hard-shelled eggs. Amphibians have moist skin, are cold-blooded, and typically start life in water before developing the ability to live on land.",
    keyFacts: [
      "Cold-blooded — an animal whose body temperature changes with its surroundings, unlike warm-blooded animals.",
    ],
    diagram: {
      type: "comparison",
      title: "Four groups of vertebrate animals",
      description:
        "Each animal group has a distinct combination of skin, temperature control and reproduction.",
      labels: [
        {
          label: "Mammals",
          explanation: "Fur or hair, warm-blooded, usually live birth and milk-feeding.",
        },
        { label: "Birds", explanation: "Feathers, warm-blooded, lay hard-shelled eggs." },
        {
          label: "Reptiles",
          explanation: "Dry scaly skin, cold-blooded, lay leathery or hard eggs.",
        },
        {
          label: "Amphibians",
          explanation: "Moist skin, cold-blooded, often begin life in water.",
        },
      ],
    },
    relatedQuestions: [],
  },
  {
    id: 39,
    question: "Why do animals hibernate?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Hibernation lets animals conserve energy and survive winter months when food is scarce and it's cold.",
    explanation:
      "During hibernation, an animal's heart rate, breathing and body temperature drop dramatically, putting it into a deep, energy-saving sleep. This allows it to survive for months on stored body fat without needing to find food, which is especially valuable in winter when food is hard to come by and the cold demands extra energy just to stay warm.",
    example:
      "A hibernating ground squirrel's heart rate can drop from around 200 to just a few beats per minute.",
    diagram: {
      type: "process",
      title: "What happens during hibernation",
      description: "An animal's body slows down dramatically to save energy.",
      labels: [
        {
          label: "Heart rate drops",
          explanation: "The heartbeat slows to just a few beats per minute.",
        },
        {
          label: "Temperature falls",
          explanation: "Body temperature drops close to the surroundings.",
        },
        { label: "Fat reserves used", explanation: "Stored body fat slowly fuels the animal." },
        {
          label: "Animal survives winter",
          explanation: "Energy is conserved until food becomes available again.",
        },
      ],
    },
    relatedQuestions: [40],
  },
  {
    id: 40,
    question: "How do animals protect themselves from predators?",
    category: "Animals, Plants and Biology",
    shortAnswer:
      "Animals use camouflage, speed, defensive weapons, warning colours or group behaviour to avoid being eaten.",
    explanation:
      "Different animals rely on different survival strategies. Camouflage helps them blend into their surroundings; speed and agility help them flee; claws, spines, shells or venom can be used to fight back; bright warning colours signal that an animal is dangerous or poisonous; and some animals rely on living and moving in groups, making it harder for a predator to target one individual.",
    example: "A poison dart frog's bright colours warn predators that it is toxic to eat.",
    diagram: {
      type: "comparison",
      title: "Ways animals avoid predators",
      description: "Different species rely on different survival strategies.",
      labels: [
        { label: "Camouflage", explanation: "Blending into the surroundings to avoid detection." },
        { label: "Speed", explanation: "Outrunning or outmanoeuvring a predator." },
        { label: "Defence", explanation: "Claws, spines, shells or venom used to fight back." },
        { label: "Warning colours", explanation: "Bright colours signal danger or toxicity." },
      ],
    },
    relatedQuestions: [25, 26, 35],
  },
  {
    id: 41,
    question: "Why does the human heart beat?",
    category: "Human Body and Health",
    shortAnswer:
      "The heart beats to pump blood around the body, delivering oxygen and nutrients to every cell.",
    explanation:
      "The heart is a muscular pump with four chambers. Special cells generate electrical signals that make the heart muscle contract in a coordinated rhythm, squeezing blood out to the lungs and the rest of the body, then relaxing to refill before the next beat.",
    example: "A resting adult heart typically beats 60–100 times per minute.",
    diagram: {
      type: "process",
      title: "How a heartbeat is triggered",
      description: "An electrical signal makes the heart contract in a steady rhythm.",
      labels: [
        { label: "Signal generated", explanation: "Special cells create an electrical impulse." },
        { label: "Signal spreads", explanation: "The impulse travels through the heart muscle." },
        { label: "Heart contracts", explanation: "Chambers squeeze, pushing blood outward." },
        {
          label: "Heart relaxes",
          explanation: "The heart refills with blood before the next beat.",
        },
      ],
    },
    relatedQuestions: [42],
  },
  {
    id: 42,
    question: "How does blood circulate around the body?",
    category: "Human Body and Health",
    shortAnswer:
      "The heart pumps blood through a network of blood vessels — arteries, veins and capillaries — in a continuous loop.",
    explanation:
      "The heart pumps oxygen-rich blood out through arteries to reach every organ and tissue. Tiny capillaries let oxygen and nutrients pass into cells while collecting waste and carbon dioxide. The now oxygen-poor blood returns to the heart through veins, is pumped to the lungs to pick up fresh oxygen, and the cycle repeats.",
    keyFacts: [
      "Arteries — vessels carrying blood away from the heart.",
      "Veins — vessels carrying blood back toward the heart.",
    ],
    diagram: {
      type: "cycle",
      title: "The circulatory loop",
      description: "Blood travels in a continuous circuit between the heart, lungs and body.",
      labels: [
        {
          label: "Heart pumps out",
          explanation: "Oxygen-rich blood leaves the heart through arteries.",
        },
        {
          label: "Reaches body cells",
          explanation: "Capillaries deliver oxygen and nutrients to tissues.",
        },
        { label: "Returns to heart", explanation: "Oxygen-poor blood flows back through veins." },
        {
          label: "Goes to lungs",
          explanation: "The heart pumps blood to the lungs to collect fresh oxygen.",
        },
      ],
    },
    relatedQuestions: [41, 43],
  },
  {
    id: 43,
    question: "Why do humans need oxygen?",
    category: "Human Body and Health",
    shortAnswer:
      "Cells use oxygen to release energy from food through a process called cellular respiration.",
    explanation:
      "Every cell in the body needs a steady supply of energy to function. Cells combine oxygen with glucose from digested food in a process called cellular respiration, releasing usable energy along with carbon dioxide and water as waste products. Without oxygen, cells cannot produce enough energy to survive.",
    diagram: {
      type: "process",
      title: "How cells use oxygen",
      description: "Cellular respiration converts food and oxygen into usable energy.",
      labels: [
        {
          label: "Oxygen delivered",
          explanation: "Blood carries oxygen to cells throughout the body.",
        },
        { label: "Glucose combined", explanation: "Cells combine oxygen with glucose from food." },
        {
          label: "Energy released",
          explanation: "The reaction releases usable energy for the cell.",
        },
        { label: "Waste removed", explanation: "Carbon dioxide and water are produced as waste." },
      ],
    },
    relatedQuestions: [44],
  },
  {
    id: 44,
    question: "How do the lungs work?",
    category: "Human Body and Health",
    shortAnswer:
      "Lungs bring air into contact with blood so oxygen can enter and carbon dioxide can leave the body.",
    explanation:
      "When you inhale, air travels down the windpipe into the lungs, branching into smaller tubes that end in tiny air sacs called alveoli. These sacs are surrounded by capillaries, allowing oxygen to pass from the air into the blood, while carbon dioxide passes from the blood into the air to be exhaled.",
    keyFacts: ["Alveoli — tiny air sacs in the lungs where gas exchange with the blood happens."],
    diagram: {
      type: "process",
      title: "How the lungs exchange gases",
      description: "Air and blood meet at the alveoli to exchange oxygen and carbon dioxide.",
      labels: [
        { label: "Air inhaled", explanation: "Air travels down the windpipe into the lungs." },
        {
          label: "Reaches alveoli",
          explanation: "Air fills tiny sacs surrounded by blood vessels.",
        },
        { label: "Oxygen absorbed", explanation: "Oxygen passes from air into the blood." },
        {
          label: "CO\u2082 exhaled",
          explanation: "Carbon dioxide passes from blood into air and is breathed out.",
        },
      ],
    },
    relatedQuestions: [43, 45],
  },
  {
    id: 45,
    question: "Why do we breathe faster during exercise?",
    category: "Human Body and Health",
    shortAnswer:
      "Muscles need more oxygen during exercise, so breathing speeds up to supply it and remove extra carbon dioxide.",
    explanation:
      "Exercising muscles work harder and need extra energy, which means they use more oxygen and produce more carbon dioxide. The brain detects rising carbon dioxide levels in the blood and signals the lungs and heart to work faster, increasing both breathing rate and heart rate to keep up with demand.",
    diagram: {
      type: "process",
      title: "Why breathing speeds up during exercise",
      description: "The body reacts automatically to rising energy demands.",
      labels: [
        { label: "Muscles work harder", explanation: "Exercising muscles need more energy." },
        {
          label: "CO\u2082 increases",
          explanation: "Extra carbon dioxide builds up in the blood.",
        },
        { label: "Brain detects change", explanation: "Sensors signal the brain to respond." },
        {
          label: "Breathing speeds up",
          explanation: "Faster breathing supplies more oxygen and removes CO\u2082.",
        },
      ],
    },
    relatedQuestions: [44],
  },
  {
    id: 46,
    question: "How does digestion occur?",
    category: "Human Body and Health",
    shortAnswer:
      "Food is broken down step by step in the digestive system into nutrients the body can absorb and use.",
    explanation:
      "Digestion begins in the mouth, where chewing and saliva start breaking food down. The stomach uses acid and enzymes to further break it apart, and the small intestine absorbs the resulting nutrients into the bloodstream. Whatever remains passes to the large intestine, where water is absorbed before waste is eliminated.",
    diagram: {
      type: "process",
      title: "The digestive journey",
      description: "Food passes through several organs, each breaking it down further.",
      labels: [
        { label: "Mouth", explanation: "Chewing and saliva begin breaking down food." },
        { label: "Stomach", explanation: "Acid and enzymes break food into smaller pieces." },
        { label: "Small intestine", explanation: "Nutrients are absorbed into the bloodstream." },
        {
          label: "Large intestine",
          explanation: "Water is absorbed and remaining waste is prepared for removal.",
        },
      ],
    },
    relatedQuestions: [47],
  },
  {
    id: 47,
    question: "Why do we need vitamins and minerals?",
    category: "Human Body and Health",
    shortAnswer:
      "Vitamins and minerals support essential body functions like immunity, bone strength and energy production.",
    explanation:
      "Although needed only in small amounts, vitamins and minerals play crucial roles the body can't easily replace — vitamin C supports the immune system, calcium builds strong bones, and iron helps blood carry oxygen. A lack of any one of them can cause specific health problems.",
    example:
      "A long-term lack of vitamin C can cause scurvy, a disease that weakens connective tissue.",
    diagram: {
      type: "comparison",
      title: "What vitamins and minerals do",
      description: "Different nutrients support different essential body functions.",
      labels: [
        { label: "Vitamin C", explanation: "Supports the immune system." },
        { label: "Calcium", explanation: "Builds strong bones and teeth." },
        { label: "Iron", explanation: "Helps blood carry oxygen around the body." },
      ],
    },
    relatedQuestions: [46],
  },
  {
    id: 48,
    question: "How do bones support the body?",
    category: "Human Body and Health",
    shortAnswer:
      "Bones form a rigid internal framework (the skeleton) that holds the body's shape and protects organs.",
    explanation:
      "The skeleton gives the body its structure, allowing us to stand upright and hold our shape. Bones also act as anchor points for muscles to pull against for movement, protect delicate organs like the brain and heart, and store minerals such as calcium.",
    diagram: {
      type: "structure",
      title: "What the skeleton does",
      description: "Bones serve several roles beyond simply holding the body up.",
      labels: [
        { label: "Support", explanation: "Gives the body its shape and holds it upright." },
        { label: "Protection", explanation: "Shields organs like the brain and heart." },
        { label: "Movement", explanation: "Provides anchor points for muscles to pull against." },
        { label: "Mineral storage", explanation: "Stores calcium and other minerals." },
      ],
    },
    relatedQuestions: [49],
  },
  {
    id: 49,
    question: "Why do muscles become tired?",
    category: "Human Body and Health",
    shortAnswer:
      "During intense activity, muscles use up energy and oxygen faster than the body can resupply them, causing fatigue.",
    explanation:
      "During hard exercise, muscles burn through their fuel and oxygen supply quickly. When oxygen can't keep up with demand, muscles switch to a process that produces energy without oxygen, which also creates byproducts that contribute to the burning, tired feeling and temporarily reduced performance.",
    diagram: {
      type: "process",
      title: "Why muscles get tired",
      description: "Intense activity outpaces the muscle's normal energy supply.",
      labels: [
        {
          label: "Demand rises",
          explanation: "Hard exercise increases the muscle's energy needs.",
        },
        { label: "Oxygen runs short", explanation: "Oxygen supply can't keep up with demand." },
        {
          label: "Alternative energy used",
          explanation: "Muscles produce energy without oxygen instead.",
        },
        {
          label: "Fatigue felt",
          explanation: "Byproducts build up, causing a tired, burning feeling.",
        },
      ],
    },
    relatedQuestions: [48],
  },
  {
    id: 50,
    question: "How does the brain control the body?",
    category: "Human Body and Health",
    shortAnswer:
      "The brain sends and receives electrical signals through nerves to control movement, senses and organ function.",
    explanation:
      "The brain is the body's control centre, connected to every part of the body through the nervous system. It constantly receives sensory information (sight, touch, sound) through nerves, processes it, and sends out electrical signals through the spinal cord and nerves to direct muscles and organs.",
    keyFacts: [
      "Nerves — bundles of fibres that carry electrical signals between the brain and the rest of the body.",
    ],
    diagram: {
      type: "process",
      title: "How the brain controls the body",
      description: "Signals travel constantly between the brain and the rest of the body.",
      labels: [
        {
          label: "Senses gather information",
          explanation: "Eyes, ears, skin and other senses detect signals.",
        },
        {
          label: "Nerves carry signals",
          explanation: "Information travels to the brain through nerves.",
        },
        {
          label: "Brain processes",
          explanation: "The brain interprets the information and decides a response.",
        },
        { label: "Body responds", explanation: "Signals travel back out to muscles and organs." },
      ],
    },
    relatedQuestions: [51, 52],
  },
  {
    id: 51,
    question: "Why do we sleep?",
    category: "Human Body and Health",
    shortAnswer:
      "Sleep allows the brain and body to rest, repair tissues, and process memories from the day.",
    explanation:
      "During sleep, the body repairs muscles and tissues, and the brain organises and stores memories formed during the day. Sleep also helps regulate hormones, supports the immune system, and clears waste products from brain cells — all essential for healthy functioning.",
    diagram: {
      type: "comparison",
      title: "What sleep does for the body",
      description: "Sleep supports several different repair and maintenance processes.",
      labels: [
        { label: "Physical repair", explanation: "Muscles and tissues are repaired." },
        {
          label: "Memory processing",
          explanation: "The brain organises and stores the day's memories.",
        },
        { label: "Immune support", explanation: "The immune system is strengthened." },
      ],
    },
    relatedQuestions: [52],
  },
  {
    id: 52,
    question: "Why do we dream?",
    category: "Human Body and Health",
    shortAnswer:
      "Dreams likely happen as the brain processes memories and emotions during a stage of sleep called REM sleep.",
    explanation:
      "Dreams occur mostly during REM (rapid eye movement) sleep, when brain activity resembles being awake even though the body stays still. Scientists believe dreaming may help the brain sort through memories, process emotions, and even rehearse responses to challenging situations, though the exact purpose is still studied.",
    diagram: {
      type: "process",
      title: "Where dreams happen",
      description: "Dreaming is linked to a specific stage of the sleep cycle.",
      labels: [
        { label: "Falling asleep", explanation: "The body relaxes and enters light sleep." },
        { label: "Deep sleep", explanation: "Brain activity slows for physical restoration." },
        {
          label: "REM sleep begins",
          explanation: "Brain activity rises again, resembling wakefulness.",
        },
        {
          label: "Dreaming occurs",
          explanation: "Vivid dreams typically happen during REM sleep.",
        },
      ],
    },
    relatedQuestions: [51],
  },
  {
    id: 53,
    question: "How do our eyes see?",
    category: "Human Body and Health",
    shortAnswer:
      "Light enters the eye, is focused onto the retina, and converted into signals the brain interprets as images.",
    explanation:
      "Light enters through the cornea and pupil, and the lens focuses it onto the retina at the back of the eye. The retina contains light-sensitive cells that convert the light into electrical signals, which travel along the optic nerve to the brain, where they are interpreted as the images we see.",
    keyFacts: [
      "Retina — the light-sensitive layer at the back of the eye that converts light into nerve signals.",
    ],
    diagram: {
      type: "process",
      title: "How the eye creates an image",
      description: "Light passes through several eye structures before becoming a signal.",
      labels: [
        { label: "Light enters", explanation: "Light passes through the cornea and pupil." },
        { label: "Lens focuses", explanation: "The lens focuses the light onto the retina." },
        {
          label: "Retina detects",
          explanation: "Light-sensitive cells convert light into signals.",
        },
        {
          label: "Brain interprets",
          explanation: "Signals travel via the optic nerve and become an image.",
        },
      ],
    },
    relatedQuestions: [50],
  },
  {
    id: 54,
    question: "How do our ears hear sound?",
    category: "Human Body and Health",
    shortAnswer:
      "Sound waves make the eardrum vibrate, and these vibrations are converted into nerve signals the brain interprets as sound.",
    explanation:
      "Sound waves travel into the ear and cause the eardrum to vibrate. These vibrations pass through tiny bones in the middle ear and into the fluid-filled cochlea, where thousands of tiny hair cells convert the vibrations into electrical signals sent to the brain via the auditory nerve.",
    diagram: {
      type: "process",
      title: "How the ear turns sound into hearing",
      description: "Vibrations are converted step by step into a signal the brain understands.",
      labels: [
        { label: "Sound enters ear", explanation: "Sound waves travel into the ear canal." },
        { label: "Eardrum vibrates", explanation: "The vibrations make the eardrum move." },
        { label: "Bones amplify", explanation: "Tiny middle-ear bones pass on the vibration." },
        {
          label: "Cochlea signals brain",
          explanation: "Hair cells convert vibration into nerve signals.",
        },
      ],
    },
    relatedQuestions: [50, 68],
  },
  {
    id: 55,
    question: "Why do we sneeze?",
    category: "Human Body and Health",
    shortAnswer:
      "Sneezing is a reflex that forcefully expels irritants like dust, pollen or germs from the nose.",
    explanation:
      "When something irritates the lining of the nose — dust, pollen, a tickle, or a virus — nerve signals trigger a reflex. The body takes a deep breath and forcefully expels air through the nose and mouth, clearing the irritant at speeds that can exceed 150 km/h.",
    diagram: {
      type: "process",
      title: "The sneeze reflex",
      description: "Sneezing quickly clears an irritant from the nose.",
      labels: [
        {
          label: "Irritant detected",
          explanation: "Dust, pollen or germs irritate the nasal lining.",
        },
        { label: "Nerve signal sent", explanation: "Nerves alert the brain's reflex centre." },
        { label: "Deep breath taken", explanation: "The body inhales sharply." },
        { label: "Air expelled", explanation: "Air is forced out fast, clearing the irritant." },
      ],
    },
    relatedQuestions: [56, 57],
  },
  {
    id: 56,
    question: "Why do we cough?",
    category: "Human Body and Health",
    shortAnswer:
      "Coughing is a reflex that clears the airway of mucus, dust or irritants to protect the lungs.",
    explanation:
      "When irritants, mucus or foreign particles are detected in the throat or airway, sensors trigger a reflex: the body takes a deep breath, closes the vocal cords briefly, then forces air out suddenly, clearing the airway and protecting the lungs from blockage or infection.",
    diagram: {
      type: "process",
      title: "The cough reflex",
      description: "Coughing protects the airway from blockage or irritation.",
      labels: [
        { label: "Irritant sensed", explanation: "Mucus or particles are detected in the airway." },
        {
          label: "Deep breath taken",
          explanation: "The body inhales to prepare a forceful cough.",
        },
        { label: "Vocal cords close", explanation: "The vocal cords briefly seal the airway." },
        { label: "Air forced out", explanation: "Air bursts out suddenly, clearing the airway." },
      ],
    },
    relatedQuestions: [55, 57],
  },
  {
    id: 57,
    question: "How does the immune system fight disease?",
    category: "Human Body and Health",
    shortAnswer:
      "White blood cells detect and destroy harmful germs like bacteria and viruses to keep the body healthy.",
    explanation:
      "The immune system is a network of cells and organs that defends the body against infection. White blood cells patrol the bloodstream, recognising and attacking bacteria, viruses and other harmful invaders. Some immune cells also 'remember' past infections, helping the body respond faster if the same germ appears again.",
    diagram: {
      type: "process",
      title: "How the immune system responds",
      description: "White blood cells detect and eliminate harmful invaders.",
      labels: [
        { label: "Germ detected", explanation: "White blood cells recognise a harmful invader." },
        { label: "Cells respond", explanation: "Immune cells attack and destroy the invader." },
        { label: "Infection cleared", explanation: "The threat is removed from the body." },
        {
          label: "Memory formed",
          explanation: "Some cells 'remember' the germ for faster future response.",
        },
      ],
    },
    relatedQuestions: [58, 59],
  },
  {
    id: 58,
    question: "Why does body temperature increase during a fever?",
    category: "Human Body and Health",
    shortAnswer:
      "A fever is the body deliberately raising its temperature to help fight off infection more effectively.",
    explanation:
      "When the immune system detects an infection, it releases chemical signals that reset the brain's temperature control centre to a higher setting. This raised body temperature helps the immune system work more efficiently and makes conditions less favourable for many bacteria and viruses to multiply.",
    diagram: {
      type: "process",
      title: "Why fever happens",
      description: "The body deliberately raises its temperature to fight infection.",
      labels: [
        { label: "Infection detected", explanation: "The immune system senses a harmful germ." },
        {
          label: "Signal sent",
          explanation: "Chemical signals reach the brain's temperature centre.",
        },
        {
          label: "Set-point raised",
          explanation: "The brain resets the body's target temperature higher.",
        },
        {
          label: "Fever develops",
          explanation: "Body temperature rises, helping fight the infection.",
        },
      ],
    },
    relatedQuestions: [57],
  },
  {
    id: 59,
    question: "How do vaccines protect us?",
    category: "Human Body and Health",
    shortAnswer:
      "Vaccines train the immune system to recognise a specific germ, so it can respond quickly if exposed later.",
    explanation:
      "A vaccine contains a harmless piece or weakened form of a germ, or instructions for the body to make one, that trains the immune system without causing the actual disease. The immune system learns to recognise it and creates memory cells, so if the real germ appears later, the body can fight it off quickly, often before symptoms even develop.",
    diagram: {
      type: "process",
      title: "How a vaccine trains the immune system",
      description: "Vaccines prepare the body to fight a germ before real exposure.",
      labels: [
        {
          label: "Vaccine given",
          explanation: "A harmless piece or weakened form of a germ is introduced.",
        },
        {
          label: "Immune system responds",
          explanation: "White blood cells learn to recognise it.",
        },
        { label: "Memory cells form", explanation: "The body keeps a 'memory' of the germ." },
        {
          label: "Fast defence ready",
          explanation: "Future exposure is fought off quickly, often before symptoms.",
        },
      ],
    },
    relatedQuestions: [57],
  },
  {
    id: 60,
    question: "Why is drinking water important?",
    category: "Human Body and Health",
    shortAnswer:
      "Water is essential for nearly every body function, including regulating temperature, digestion and transporting nutrients.",
    explanation:
      "The human body is roughly 60% water, and it relies on water to carry nutrients and oxygen to cells, remove waste through urine, cushion joints and organs, and regulate body temperature through sweating. Without enough water, these processes can't work properly, leading to dehydration.",
    example:
      "Even mild dehydration of just 1–2% of body weight can affect concentration and physical performance.",
    diagram: {
      type: "structure",
      title: "What water does in the body",
      description: "Water supports several vital functions at once.",
      labels: [
        { label: "Transport", explanation: "Carries nutrients and oxygen to cells." },
        { label: "Waste removal", explanation: "Helps remove waste through urine." },
        {
          label: "Temperature control",
          explanation: "Regulates body temperature through sweating.",
        },
        { label: "Cushioning", explanation: "Protects joints and organs." },
      ],
    },
    relatedQuestions: [46],
  },
  {
    id: 61,
    question: "What is force?",
    category: "Physics and Everyday Science",
    shortAnswer: "A force is a push or pull that can change an object's speed, direction or shape.",
    explanation:
      "Whenever something speeds up, slows down, changes direction, or gets squashed or stretched, a force is involved. Forces always act on an object, and every force is either a push or a pull, whether it's your hand pushing a door or gravity pulling an apple down.",
    example: "Kicking a football applies a force that changes its speed and direction.",
    diagram: {
      type: "comparison",
      title: "Two kinds of force",
      description: "Every force is fundamentally either a push or a pull.",
      labels: [
        { label: "Push", explanation: "Force applied away from the source, e.g. kicking a ball." },
        {
          label: "Pull",
          explanation: "Force applied toward the source, e.g. gravity pulling objects down.",
        },
      ],
    },
    relatedQuestions: [62, 65],
  },
  {
    id: 62,
    question: "What is gravity?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Gravity is the force of attraction that pulls objects with mass toward each other, keeping us on the ground.",
    explanation:
      "Every object with mass exerts a gravitational pull on every other object. Earth's enormous mass means its gravitational pull is strong enough to hold you, the atmosphere, and the Moon in place. The more massive an object, and the closer you are to it, the stronger the gravitational pull.",
    diagram: {
      type: "structure",
      title: "What affects gravitational pull",
      description: "Two main factors determine how strong gravity's pull is.",
      labels: [
        {
          label: "Mass",
          explanation: "More massive objects pull with greater gravitational force.",
        },
        {
          label: "Distance",
          explanation: "Closer objects experience a stronger gravitational pull.",
        },
      ],
    },
    relatedQuestions: [63],
  },
  {
    id: 63,
    question: "Why do objects fall toward Earth?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Earth's gravity pulls objects toward its centre, so anything not supported falls downward.",
    explanation:
      "Earth's mass creates a gravitational field that pulls every nearby object toward its centre. When you drop something and remove whatever was holding it up, gravity is the only significant force left acting on it, so it accelerates downward until something stops it.",
    diagram: {
      type: "process",
      title: "Why a dropped object falls",
      description: "Gravity acts on any unsupported object, pulling it downward.",
      labels: [
        { label: "Support removed", explanation: "Nothing is left holding the object up." },
        {
          label: "Gravity acts",
          explanation: "Earth's gravity pulls the object toward its centre.",
        },
        { label: "Object accelerates", explanation: "The object speeds up as it falls." },
        { label: "Object lands", explanation: "The fall ends when something stops it." },
      ],
    },
    relatedQuestions: [62],
  },
  {
    id: 64,
    question: "Why do we feel lighter in water?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Water pushes back with an upward force called buoyancy, which partly supports your weight.",
    explanation:
      "When you enter water, it pushes up on you with a force equal to the weight of the water your body displaces — this is called buoyant force. Since this upward push works against gravity pulling you down, it reduces how much your muscles need to work to support your body, making you feel lighter.",
    keyFacts: ["Buoyancy — the upward force a fluid exerts on an object placed in it."],
    diagram: {
      type: "comparison",
      title: "Two forces acting in water",
      description: "Buoyancy works against gravity, making you feel lighter.",
      labels: [
        { label: "Gravity", explanation: "Pulls your body downward." },
        {
          label: "Buoyant force",
          explanation: "Water pushes upward, supporting some of your weight.",
        },
      ],
    },
    relatedQuestions: [67],
  },
  {
    id: 65,
    question: "What is friction?",
    category: "Physics and Everyday Science",
    shortAnswer: "Friction is a force that resists motion between two surfaces in contact.",
    explanation:
      "When two surfaces touch and try to slide past each other, tiny irregularities on each surface catch and grip one another, creating a resisting force called friction. Rougher surfaces generally create more friction than smooth ones, and friction can slow moving objects or prevent stationary ones from starting to move.",
    diagram: {
      type: "structure",
      title: "What creates friction",
      description: "Friction arises from surfaces gripping against each other.",
      labels: [
        {
          label: "Surface irregularities",
          explanation: "Microscopic bumps on each surface catch on each other.",
        },
        {
          label: "Resisting force",
          explanation: "The grip creates a force that opposes sliding motion.",
        },
      ],
    },
    relatedQuestions: [66],
  },
  {
    id: 66,
    question: "Why does friction help us walk?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Friction between your shoes and the ground stops your feet from sliding, letting you push off and move forward.",
    explanation:
      "When you walk, your foot pushes backward against the ground. Friction resists this sliding motion, gripping your shoe to the surface, and by Newton's third law the ground pushes back forward on you — that reaction force is what propels you ahead. Without friction, like on ice, your feet would simply slip.",
    diagram: {
      type: "process",
      title: "How friction helps you walk",
      description: "Friction and a reaction force work together to move you forward.",
      labels: [
        { label: "Foot pushes back", explanation: "Your foot pushes backward against the ground." },
        { label: "Friction grips", explanation: "Friction stops your foot from sliding." },
        {
          label: "Ground pushes forward",
          explanation: "The ground pushes back on you (Newton's third law).",
        },
        { label: "You move forward", explanation: "That forward push propels your body ahead." },
      ],
    },
    relatedQuestions: [65],
  },
  {
    id: 67,
    question: "Why do some objects float while others sink?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Objects float if they are less dense than the fluid around them, and sink if they are denser.",
    explanation:
      "An object floats when the upward buoyant force from the displaced fluid is strong enough to support its weight, which happens when the object's overall density is lower than the fluid's. A solid steel ball sinks because steel is denser than water, but a hollow steel ship floats because its overall shape displaces enough water to support its weight.",
    example:
      "A large steel ship floats because its hollow shape makes its average density lower than water.",
    keyFacts: [
      "Density — how much mass is packed into a given volume, calculated as mass divided by volume.",
    ],
    diagram: {
      type: "comparison",
      title: "Why objects float or sink",
      description: "Density compared to the surrounding fluid decides the outcome.",
      labels: [
        { label: "Less dense than water", explanation: "The object floats." },
        { label: "Denser than water", explanation: "The object sinks." },
      ],
    },
    relatedQuestions: [64],
  },
  {
    id: 68,
    question: "What is pressure?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Pressure is the amount of force pushing on a certain area — the same force spread over a smaller area creates more pressure.",
    explanation:
      "Pressure measures how concentrated a force is. Applying the same force over a smaller area increases pressure, while spreading it over a larger area decreases pressure. This is why a sharp needle can pierce skin with little force, while a flat hand pressing just as hard does not.",
    diagram: {
      type: "comparison",
      title: "How area changes pressure",
      description: "The same force creates different pressure depending on the contact area.",
      labels: [
        {
          label: "Small area",
          explanation: "The same force creates high pressure, e.g. a needle point.",
        },
        {
          label: "Large area",
          explanation: "The same force creates low pressure, e.g. a flat palm.",
        },
      ],
    },
    relatedQuestions: [69],
  },
  {
    id: 69,
    question: "Why does a sharp knife cut more easily?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "A sharp knife concentrates force onto a very thin edge, creating much higher pressure that cuts through material easily.",
    explanation:
      "A knife's edge focuses the force you apply onto an extremely small area. Because pressure equals force divided by area, shrinking the contact area dramatically increases the pressure at the blade's edge, allowing it to slice through material with much less effort than a blunt edge would need.",
    diagram: {
      type: "process",
      title: "Why a sharp edge cuts easily",
      description: "A thin blade concentrates force into intense pressure.",
      labels: [
        { label: "Force applied", explanation: "You press down on the knife handle." },
        { label: "Force focused", explanation: "The thin blade edge concentrates the force." },
        {
          label: "Pressure spikes",
          explanation: "A tiny contact area creates very high pressure.",
        },
        {
          label: "Material parts",
          explanation: "The concentrated pressure slices through the material.",
        },
      ],
    },
    relatedQuestions: [68],
  },
  {
    id: 70,
    question: "How does a lever make work easier?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "A lever multiplies force by letting you apply a smaller effort over a longer distance to move a heavier load.",
    explanation:
      "A lever pivots around a fixed point called a fulcrum. By pushing down on the long end of a lever, you can lift a much heavier load on the short end, because the force you apply is multiplied in exchange for moving your end a greater distance — the total work done stays balanced, but less muscle force is needed.",
    example:
      "A crowbar lets you lift a heavy rock by pushing down on the long handle with modest effort.",
    keyFacts: ["Fulcrum — the fixed pivot point a lever rotates around."],
    diagram: {
      type: "structure",
      title: "Parts of a simple lever",
      description: "A lever multiplies force using a pivot point and two arms.",
      labels: [
        { label: "Effort arm", explanation: "Where you apply your push or pull force." },
        { label: "Fulcrum", explanation: "The fixed pivot point the lever rotates around." },
        { label: "Load arm", explanation: "Where the weight being lifted sits." },
      ],
    },
    relatedQuestions: [61],
  },
  {
    id: 71,
    question: "What is energy?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Energy is the ability to do work or cause change, and it exists in many forms like heat, light and motion.",
    explanation:
      "Energy can't be created or destroyed, only transformed from one form to another. Moving objects have kinetic energy, stored objects have potential energy, and energy also appears as heat, light, sound and electricity. Every action, from a car driving to a plant growing, involves energy changing form.",
    diagram: {
      type: "comparison",
      title: "Common forms of energy",
      description: "Energy appears in many forms that can transform into one another.",
      labels: [
        { label: "Kinetic energy", explanation: "Energy of a moving object." },
        { label: "Potential energy", explanation: "Stored energy, ready to be released." },
        { label: "Heat energy", explanation: "Energy from the motion of particles." },
        { label: "Light energy", explanation: "Energy carried by electromagnetic waves." },
      ],
    },
    relatedQuestions: [72],
  },
  {
    id: 72,
    question: "What is the difference between heat and temperature?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Heat is the total energy transferred between objects, while temperature measures how hot or cold something is on average.",
    explanation:
      "Temperature measures the average energy of moving particles in a substance, while heat is the actual energy that flows from a hotter object to a cooler one. A bathtub of warm water has more total heat energy than a lit match, even though the match has a far higher temperature, because it contains vastly more particles.",
    diagram: {
      type: "comparison",
      title: "Heat vs temperature",
      description: "These related but different ideas are often confused.",
      labels: [
        { label: "Heat", explanation: "The total energy transferred between objects." },
        {
          label: "Temperature",
          explanation: "A measure of average particle energy (hot or cold).",
        },
      ],
    },
    relatedQuestions: [73],
  },
  {
    id: 73,
    question: "How does heat travel?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Heat travels by conduction (through direct contact), convection (through moving fluids) and radiation (through waves).",
    explanation:
      "Conduction transfers heat through direct contact, as fast-moving particles bump into slower ones, like heat spreading through a metal spoon. Convection carries heat through moving liquids or gases, as warm fluid rises and cooler fluid sinks. Radiation transfers heat as electromagnetic waves that can travel through empty space, like sunlight warming Earth.",
    diagram: {
      type: "comparison",
      title: "Three ways heat travels",
      description: "Conduction, convection and radiation move heat in different ways.",
      labels: [
        {
          label: "Conduction",
          explanation: "Heat passes directly between touching particles, as in a heated metal rod.",
        },
        {
          label: "Convection",
          explanation: "Heat moves as warm fluid rises and cooler fluid sinks, circulating.",
        },
        {
          label: "Radiation",
          explanation: "Heat travels as waves and can cross empty space, like sunlight.",
        },
      ],
    },
    relatedQuestions: [72, 74],
  },
  {
    id: 74,
    question: "Why does metal feel colder than wood?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Metal conducts heat away from your skin much faster than wood, even if both are at the same temperature.",
    explanation:
      "Metal is an excellent conductor of heat, so when you touch it, it quickly draws heat energy away from your warmer hand. Wood is a poor conductor, so it removes heat much more slowly. Even though both objects might be at the same room temperature, metal feels colder because of how fast it pulls heat from your skin.",
    diagram: {
      type: "comparison",
      title: "Why metal feels colder than wood",
      description: "Both may be room temperature, but they conduct heat differently.",
      labels: [
        { label: "Metal", explanation: "Conducts heat away from skin quickly, feeling cold." },
        { label: "Wood", explanation: "Conducts heat away slowly, feeling warmer." },
      ],
    },
    relatedQuestions: [73],
  },
  {
    id: 75,
    question: "Why does ice float on water?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Ice is less dense than liquid water because its molecules form an open crystal structure with more space between them.",
    explanation:
      "Most substances become denser as they cool and their molecules pack closer together, but water is unusual. As it freezes, water molecules arrange into a hexagonal crystal lattice that actually takes up more space than in liquid form, making ice about 9% less dense than liquid water — so it floats.",
    example: "This is why icebergs and ice cubes float instead of sinking to the bottom.",
    diagram: {
      type: "comparison",
      title: "Why ice floats",
      description: "Water is unusual: it becomes less dense when it freezes.",
      labels: [
        { label: "Liquid water", explanation: "Molecules are packed closely together." },
        {
          label: "Ice",
          explanation: "Molecules form an open crystal structure, taking up more space.",
        },
      ],
    },
    relatedQuestions: [67],
  },
  {
    id: 76,
    question: "How does sound travel?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Sound travels as vibrations that move through a medium like air, water or solids as pressure waves.",
    explanation:
      "When something vibrates, like a guitar string or your vocal cords, it pushes nearby air molecules, which bump into the next molecules, and so on. This creates a chain of pressure waves that spread outward from the source until they reach your ear, where they are converted into signals your brain interprets as sound.",
    diagram: {
      type: "process",
      title: "How sound reaches your ear",
      description: "Sound spreads outward as a chain reaction of vibrating particles.",
      labels: [
        {
          label: "Source vibrates",
          explanation: "Something vibrates, like a guitar string or vocal cords.",
        },
        {
          label: "Particles bump",
          explanation: "Nearby air molecules are pushed and bump the next ones.",
        },
        {
          label: "Wave spreads outward",
          explanation: "The vibration travels outward as a pressure wave.",
        },
        {
          label: "Ear receives it",
          explanation: "The wave reaches your ear and is heard as sound.",
        },
      ],
    },
    relatedQuestions: [54, 77],
  },
  {
    id: 77,
    question: "Why can sound not travel through space?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Sound needs particles to travel through, and space is a near-total vacuum with almost no matter to carry vibrations.",
    explanation:
      "Sound is a mechanical wave that moves by making particles bump into each other. Outer space is an almost perfect vacuum, containing far too few particles for vibrations to pass through, so sound simply cannot travel there — unlike light, which is an electromagnetic wave and doesn't need a medium.",
    diagram: {
      type: "comparison",
      title: "Sound vs light in space",
      description: "One kind of wave needs matter to travel; the other doesn't.",
      labels: [
        {
          label: "Sound",
          explanation: "Needs particles to travel through; cannot cross a vacuum.",
        },
        {
          label: "Light",
          explanation: "An electromagnetic wave that travels fine through a vacuum.",
        },
      ],
    },
    relatedQuestions: [76],
  },
  {
    id: 78,
    question: "Why does an echo happen?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "An echo happens when sound waves bounce off a hard, distant surface and return to your ears with a delay.",
    explanation:
      "When sound waves hit a hard surface like a cliff wall or an empty hall's walls, some of the sound energy reflects back rather than being absorbed. If the surface is far enough away, the reflected sound arrives back at your ears noticeably later than the original, and your brain perceives it as a distinct repeated sound — an echo.",
    diagram: {
      type: "process",
      title: "How an echo forms",
      description: "Sound waves reflect off a distant hard surface and return.",
      labels: [
        { label: "Sound produced", explanation: "A sound wave travels outward from its source." },
        {
          label: "Hits hard surface",
          explanation: "The wave strikes a distant hard surface, like a cliff.",
        },
        { label: "Sound reflects", explanation: "Part of the sound energy bounces back." },
        { label: "Echo heard", explanation: "The delayed reflected sound reaches your ears." },
      ],
    },
    relatedQuestions: [76],
  },
  {
    id: 79,
    question: "Why does thunder come after lightning?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "Light travels far faster than sound, so we see the lightning flash before we hear the resulting thunder.",
    explanation:
      "Lightning and thunder actually happen at the same instant — the flash superheats the air, creating a shockwave that becomes thunder. But light travels at about 300,000 km per second, almost instantly reaching our eyes, while sound travels much slower, at roughly 343 metres per second, so the thunder arrives noticeably later, especially from a distant storm.",
    example:
      "Counting the seconds between a lightning flash and its thunder (roughly 3 seconds per kilometre) estimates how far away the storm is.",
    diagram: {
      type: "comparison",
      title: "Why we see lightning before thunder",
      description: "Light and sound travel at very different speeds.",
      labels: [
        { label: "Light", explanation: "Travels almost instantly, about 300,000 km per second." },
        { label: "Sound", explanation: "Travels much slower, about 343 metres per second." },
      ],
    },
    relatedQuestions: [19, 76],
  },
  {
    id: 80,
    question: "How does a simple electric circuit work?",
    category: "Physics and Everyday Science",
    shortAnswer:
      "A circuit provides a complete loop for electric current to flow from a power source, through a device, and back again.",
    explanation:
      "A basic circuit needs a power source (like a battery), a conducting path (wires), and a device that uses the electricity (like a bulb). Electrons flow from the negative terminal of the battery, through the wire and device, and back to the positive terminal, forming a closed loop — if the loop is broken anywhere, the current stops flowing.",
    diagram: {
      type: "cycle",
      title: "A simple closed circuit",
      description:
        "Current flows in a continuous loop from the power source, through the device, and back.",
      labels: [
        {
          label: "Battery",
          explanation: "The power source that pushes electrons around the circuit.",
        },
        {
          label: "Wire out",
          explanation: "A conducting path carries current away from the battery.",
        },
        {
          label: "Bulb (or device)",
          explanation: "The device uses the electrical energy to do work, such as producing light.",
        },
        {
          label: "Wire back",
          explanation: "Current returns to the battery, completing the closed loop.",
        },
      ],
    },
    relatedQuestions: [61],
  },
  {
    id: 81,
    question: "What is matter?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Matter is anything that has mass and takes up space — it's what everything physical is made of.",
    explanation:
      "Matter includes everything from air and water to rocks and living things. Every piece of matter is made of tiny particles, and matter can exist in different states — solid, liquid or gas — depending on how those particles are arranged and how much energy they have.",
    diagram: {
      type: "comparison",
      title: "What counts as matter",
      description: "Matter is defined by two simple properties.",
      labels: [
        { label: "Has mass", explanation: "It weighs something and resists movement." },
        { label: "Takes up space", explanation: "It occupies a volume in the physical world." },
      ],
    },
    relatedQuestions: [82],
  },
  {
    id: 82,
    question: "What are solids, liquids and gases?",
    category: "Chemistry and Materials",
    shortAnswer:
      "They are the three common states of matter, distinguished by how tightly and freely their particles move.",
    explanation:
      "In a solid, particles are packed tightly in fixed positions and only vibrate in place, giving it a fixed shape and volume. In a liquid, particles are close together but can slide past each other, so it has a fixed volume but takes the shape of its container. In a gas, particles are far apart and move freely and rapidly, so it has neither a fixed shape nor volume.",
    diagram: {
      type: "comparison",
      title: "The three common states of matter",
      description: "Particle arrangement and movement differ between solids, liquids and gases.",
      labels: [
        {
          label: "Solid",
          explanation: "Particles are tightly packed in fixed positions, only vibrating.",
        },
        {
          label: "Liquid",
          explanation: "Particles stay close but can slide past one another freely.",
        },
        {
          label: "Gas",
          explanation: "Particles are far apart and move quickly in random directions.",
        },
      ],
    },
    relatedQuestions: [81],
  },
  {
    id: 83,
    question: "What is an atom?",
    category: "Chemistry and Materials",
    shortAnswer:
      "An atom is the smallest basic unit of an element that still has the properties of that element.",
    explanation:
      "Atoms are the building blocks of all matter. Each atom has a nucleus made of protons and neutrons, surrounded by orbiting electrons. Different elements are made of atoms with different numbers of protons — for example, every hydrogen atom has exactly one proton.",
    keyFacts: [
      "Proton — a positively charged particle in an atom's nucleus.",
      "Electron — a negatively charged particle that orbits the nucleus.",
    ],
    diagram: {
      type: "structure",
      title: "Parts of an atom",
      description: "An atom is built from three types of particles.",
      labels: [
        { label: "Proton", explanation: "Positively charged, found in the nucleus." },
        { label: "Neutron", explanation: "No charge, found in the nucleus alongside protons." },
        { label: "Electron", explanation: "Negatively charged, orbits the nucleus." },
      ],
    },
    relatedQuestions: [84, 85],
  },
  {
    id: 84,
    question: "What is a molecule?",
    category: "Chemistry and Materials",
    shortAnswer:
      "A molecule is two or more atoms bonded together, forming the smallest unit of a chemical compound.",
    explanation:
      "Atoms often join together through chemical bonds to form molecules. Some molecules contain only one type of atom, like oxygen gas (O₂), while others combine different elements, like water (H₂O), which has two hydrogen atoms bonded to one oxygen atom.",
    example:
      "A water molecule (H₂O) always has exactly two hydrogen atoms and one oxygen atom bonded together.",
    diagram: {
      type: "process",
      title: "From atoms to a molecule",
      description: "Atoms bond together to form the molecules of everyday substances.",
      labels: [
        { label: "Separate atoms", explanation: "Individual atoms exist on their own." },
        { label: "Atoms bond", explanation: "Atoms join together through chemical bonds." },
        {
          label: "Molecule forms",
          explanation: "A specific, fixed group of atoms forms, e.g. H\u2082O.",
        },
      ],
    },
    relatedQuestions: [83],
  },
  {
    id: 85,
    question: "What is an element?",
    category: "Chemistry and Materials",
    shortAnswer:
      "An element is a pure substance made of only one type of atom, and cannot be broken down into simpler substances.",
    explanation:
      "Elements are the fundamental substances that everything else is built from — there are about 118 known elements, each with a unique number of protons in its atoms. Oxygen, gold, and carbon are all examples of elements, listed together on the periodic table.",
    diagram: {
      type: "comparison",
      title: "Element vs compound",
      description: "Elements are pure; molecules can combine elements together.",
      labels: [
        { label: "Element", explanation: "Made of only one type of atom, like oxygen or gold." },
        {
          label: "Compound",
          explanation: "Made of two or more different elements bonded together, like water.",
        },
      ],
    },
    relatedQuestions: [83],
  },
  {
    id: 86,
    question: "What is a chemical reaction?",
    category: "Chemistry and Materials",
    shortAnswer:
      "A chemical reaction is a process where substances change into new substances with different chemical properties.",
    explanation:
      "In a chemical reaction, the atoms of starting substances (reactants) rearrange their bonds to form entirely new substances (products) with different properties. Signs of a chemical reaction include colour change, gas bubbles, temperature change, or the formation of a solid precipitate.",
    example:
      "Burning wood is a chemical reaction that turns wood and oxygen into ash, smoke and carbon dioxide.",
    diagram: {
      type: "process",
      title: "What happens in a chemical reaction",
      description: "Starting substances rearrange their bonds into new substances.",
      labels: [
        { label: "Reactants start", explanation: "Original substances begin the reaction." },
        { label: "Bonds break", explanation: "Chemical bonds in the reactants are broken." },
        { label: "Bonds reform", explanation: "Atoms rearrange and form new bonds." },
        { label: "Products form", explanation: "New substances with different properties result." },
      ],
    },
    relatedQuestions: [87, 93],
  },
  {
    id: 87,
    question: "What is the difference between a physical and chemical change?",
    category: "Chemistry and Materials",
    shortAnswer:
      "A physical change alters an object's form without changing its substance, while a chemical change creates a new substance entirely.",
    explanation:
      "In a physical change, matter changes shape, size or state, but its chemical makeup stays the same and it can often be reversed — like ice melting into water. In a chemical change, the substance's molecular structure is transformed into something new, usually irreversibly — like paper burning into ash and smoke.",
    diagram: {
      type: "comparison",
      title: "Physical change vs chemical change",
      description: "Physical changes alter form; chemical changes create new substances.",
      labels: [
        {
          label: "Physical change",
          explanation:
            "Only shape, size or state changes; the substance itself stays the same, e.g. melting ice.",
        },
        {
          label: "Chemical change",
          explanation:
            "A new substance forms with different properties, e.g. burning paper into ash.",
        },
      ],
    },
    relatedQuestions: [86],
  },
  {
    id: 88,
    question: "Why does iron rust?",
    category: "Chemistry and Materials",
    shortAnswer: "Iron rusts when it reacts chemically with oxygen and water to form iron oxide.",
    explanation:
      "Rusting is a chemical reaction in which iron combines with oxygen in the presence of water (or moisture in the air) to form iron oxide, the reddish-brown flaky substance known as rust. This weakens the metal over time because the newly formed iron oxide is a different, more brittle substance.",
    keyFacts: ["Oxidation — a chemical reaction in which a substance combines with oxygen."],
    diagram: {
      type: "process",
      title: "How iron rusts",
      description: "Iron reacts with oxygen and water to slowly form rust.",
      labels: [
        { label: "Iron exposed", explanation: "Bare iron is exposed to air and moisture." },
        { label: "Oxygen reacts", explanation: "Oxygen combines chemically with the iron." },
        { label: "Water speeds it up", explanation: "Moisture helps the reaction proceed faster." },
        { label: "Rust forms", explanation: "Reddish-brown iron oxide builds up on the surface." },
      ],
    },
    relatedQuestions: [86],
  },
  {
    id: 89,
    question: "Why does salt dissolve in water?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Water molecules pull apart salt's charged particles, surrounding and separating them so the salt spreads evenly through the water.",
    explanation:
      "Salt is made of positively and negatively charged particles called ions held together by attraction. Water molecules are also slightly charged (positive on one side, negative on the other), so they surround and pull apart the salt's ions, allowing them to spread evenly throughout the water — this is dissolving.",
    diagram: {
      type: "process",
      title: "How salt dissolves in water",
      description: "Water molecules pull apart the charged particles in salt.",
      labels: [
        { label: "Salt added", explanation: "Salt crystals are placed in water." },
        {
          label: "Water molecules attract ions",
          explanation: "Charged water molecules surround the salt's ions.",
        },
        {
          label: "Ions pulled apart",
          explanation: "Water separates the salt's positive and negative ions.",
        },
        { label: "Salt dissolves", explanation: "Ions spread evenly throughout the water." },
      ],
    },
    relatedQuestions: [90],
  },
  {
    id: 90,
    question: "What is an acid?",
    category: "Chemistry and Materials",
    shortAnswer:
      "An acid is a substance that releases hydrogen ions in water and tastes sour, typically with a pH below 7.",
    explanation:
      "Acids are substances that, when dissolved in water, release hydrogen ions (H⁺), giving them a sour taste and the ability to react with metals and bases. Common acids include vinegar (acetic acid), lemon juice (citric acid) and stomach acid (hydrochloric acid).",
    diagram: {
      type: "comparison",
      title: "Acids in daily life",
      description: "Several common substances are acids.",
      labels: [
        { label: "Vinegar", explanation: "Contains acetic acid, giving it a sour taste." },
        { label: "Lemon juice", explanation: "Contains citric acid." },
        { label: "Stomach acid", explanation: "Contains hydrochloric acid for digestion." },
      ],
    },
    relatedQuestions: [91, 92],
  },
  {
    id: 91,
    question: "What is a base or alkali?",
    category: "Chemistry and Materials",
    shortAnswer:
      "A base is a substance that can neutralise acids and typically has a pH above 7; an alkali is a base that dissolves in water.",
    explanation:
      "Bases react with acids in a neutralisation reaction, often producing water and a salt. Alkalis are bases that are soluble in water, releasing hydroxide ions (OH⁻) and typically feeling slippery, like soap. Common examples include baking soda, soap and household ammonia.",
    diagram: {
      type: "comparison",
      title: "Acid vs base",
      description: "Acids and bases have opposite chemical behaviour.",
      labels: [
        { label: "Acid", explanation: "Releases hydrogen ions; tastes sour; pH below 7." },
        { label: "Base", explanation: "Can neutralise acids; often feels slippery; pH above 7." },
      ],
    },
    relatedQuestions: [90, 92],
  },
  {
    id: 92,
    question: "What is the pH scale?",
    category: "Chemistry and Materials",
    shortAnswer:
      "The pH scale measures how acidic or alkaline a substance is, ranging from 0 (strongly acidic) to 14 (strongly alkaline).",
    explanation:
      "The pH scale runs from 0 to 14, with 7 representing neutral (like pure water). Values below 7 indicate an acid, becoming more strongly acidic as the number decreases, while values above 7 indicate a base, becoming more strongly alkaline as the number increases.",
    example:
      "Lemon juice has a pH of about 2 (acidic), while household bleach has a pH of about 13 (alkaline).",
    diagram: {
      type: "comparison",
      title: "The pH scale",
      description: "pH values range from strongly acidic to neutral to strongly alkaline.",
      labels: [
        {
          label: "Acidic (0–6)",
          explanation: "Lower numbers mean stronger acids, such as lemon juice or stomach acid.",
        },
        { label: "Neutral (7)", explanation: "Neither acidic nor alkaline, like pure water." },
        {
          label: "Alkaline (8–14)",
          explanation: "Higher numbers mean stronger bases, such as soap or bleach.",
        },
      ],
    },
    relatedQuestions: [90, 91],
  },
  {
    id: 93,
    question: "Why does baking soda react with vinegar?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Baking soda (a base) and vinegar (an acid) neutralise each other, producing carbon dioxide gas, water and a salt.",
    explanation:
      "Baking soda (sodium bicarbonate) is a mild base, and vinegar contains acetic acid. When they mix, they undergo a neutralisation reaction that produces carbon dioxide gas — the bubbling and fizzing you see — along with water and sodium acetate.",
    example: "This reaction is often used in simple science-fair volcanoes to create foamy 'lava'.",
    diagram: {
      type: "process",
      title: "Baking soda and vinegar reaction",
      description: "An acid and a base neutralise each other, producing gas.",
      labels: [
        {
          label: "Baking soda (base) added",
          explanation: "Sodium bicarbonate is mixed with vinegar.",
        },
        { label: "Acid reacts", explanation: "The vinegar's acetic acid reacts with the base." },
        { label: "Gas produced", explanation: "Carbon dioxide gas bubbles out." },
        {
          label: "Water and salt remain",
          explanation: "Water and sodium acetate are left behind.",
        },
      ],
    },
    relatedQuestions: [86, 90, 91],
  },
  {
    id: 94,
    question: "Why do metals conduct electricity?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Metals have loosely bound electrons that move freely, allowing electric current to flow easily through them.",
    explanation:
      "In a metal, outer electrons are not tightly held by individual atoms — instead, they form a 'sea' of freely moving electrons shared across the whole material. When a voltage is applied, these free electrons drift through the metal, carrying electric current with very little resistance.",
    diagram: {
      type: "process",
      title: "How metals conduct electricity",
      description: "Loosely held electrons carry current through a metal.",
      labels: [
        {
          label: "Free electrons present",
          explanation: "Outer electrons are not tightly bound to atoms.",
        },
        {
          label: "Voltage applied",
          explanation: "An electrical push is applied across the metal.",
        },
        { label: "Electrons drift", explanation: "Free electrons begin moving through the metal." },
        { label: "Current flows", explanation: "The moving electrons form an electric current." },
      ],
    },
    relatedQuestions: [80],
  },
  {
    id: 95,
    question: "Why is glass transparent?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Glass is transparent because its structure allows visible light to pass through without being absorbed or scattered.",
    explanation:
      "Glass is made mainly of silicon dioxide arranged in a disordered, non-crystalline structure. This structure lacks the features that typically absorb or scatter visible light, so most light wavelengths pass straight through rather than bouncing off or being absorbed, letting us see clearly through it.",
    diagram: {
      type: "comparison",
      title: "Why glass is transparent",
      description: "Light behaves differently in glass than in most solid materials.",
      labels: [
        {
          label: "Ordered crystal (e.g. metal)",
          explanation: "Tightly packed structure often blocks or reflects light.",
        },
        {
          label: "Glass structure",
          explanation: "Disordered structure lets visible light pass straight through.",
        },
      ],
    },
    relatedQuestions: [],
  },
  {
    id: 96,
    question: "Why do some materials absorb water?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Absorbent materials have tiny pores or fibres that draw in and hold water through capillary action.",
    explanation:
      "Materials like paper towels, sponges and cotton contain networks of tiny gaps and fibres. Water is drawn into these narrow spaces by capillary action — the attraction between water molecules and the material's surface — pulling liquid inward and holding it in place.",
    keyFacts: [
      "Capillary action — the tendency of a liquid to be drawn into narrow spaces without external force.",
    ],
    diagram: {
      type: "process",
      title: "How absorbent materials soak up water",
      description: "Capillary action draws water into narrow spaces.",
      labels: [
        {
          label: "Material touches water",
          explanation: "A fibre or pore comes into contact with water.",
        },
        {
          label: "Attraction occurs",
          explanation: "Water molecules are attracted to the material's surface.",
        },
        { label: "Water drawn in", explanation: "Capillary action pulls water into narrow gaps." },
        { label: "Water held", explanation: "The material retains the absorbed water." },
      ],
    },
    relatedQuestions: [],
  },
  {
    id: 97,
    question: "What is evaporation?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Evaporation is when a liquid turns into a gas, usually as molecules at its surface gain enough energy to escape.",
    explanation:
      "At any temperature, some molecules at the surface of a liquid have enough energy to break free and escape as vapour — this is evaporation. It happens faster with more heat, more surface area, or lower humidity, since drier air can hold more escaping vapour.",
    diagram: {
      type: "process",
      title: "How evaporation happens",
      description: "Surface molecules gain enough energy to escape as vapour.",
      labels: [
        {
          label: "Heat energy added",
          explanation: "Sunlight or warmth adds energy to the liquid.",
        },
        {
          label: "Surface molecules speed up",
          explanation: "Molecules at the surface gain extra energy.",
        },
        {
          label: "Molecules escape",
          explanation: "Fast molecules break free from the liquid surface.",
        },
        { label: "Vapour forms", explanation: "Escaped molecules become gas in the air." },
      ],
    },
    relatedQuestions: [16, 98],
  },
  {
    id: 98,
    question: "What is condensation?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Condensation is when a gas turns back into a liquid, usually as water vapour cools and molecules slow down enough to stick together.",
    explanation:
      "Condensation is the opposite of evaporation. When water vapour cools — for example, by touching a cold surface — its molecules lose energy and slow down enough for attractive forces to pull them together into liquid droplets.",
    example:
      "Water droplets forming on the outside of a cold glass on a warm day are condensation from the humid air.",
    diagram: {
      type: "process",
      title: "How condensation happens",
      description: "Cooling water vapour turns back into liquid droplets.",
      labels: [
        { label: "Vapour cools", explanation: "Water vapour meets a cooler surface or air." },
        {
          label: "Molecules slow down",
          explanation: "Cooling reduces the energy of vapour molecules.",
        },
        { label: "Molecules attract", explanation: "Slower molecules stick together more easily." },
        { label: "Droplets form", explanation: "Liquid water droplets appear." },
      ],
    },
    relatedQuestions: [16, 97],
  },
  {
    id: 99,
    question: "Why does food spoil?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Food spoils when bacteria, mould or natural chemical reactions break down its structure, often producing harmful substances.",
    explanation:
      "Microorganisms like bacteria and mould feed on the nutrients in food, breaking it down and producing waste products that change its smell, taste and texture, sometimes making it unsafe to eat. Chemical reactions such as oxidation can also spoil food even without microbes, which is why refrigeration (slowing microbial growth) and airtight storage (limiting oxygen) help preserve food longer.",
    diagram: {
      type: "comparison",
      title: "Two causes of food spoilage",
      description: "Food can spoil through living organisms or through chemistry alone.",
      labels: [
        {
          label: "Microorganisms",
          explanation: "Bacteria and mould break down food and produce waste.",
        },
        {
          label: "Chemical reactions",
          explanation: "Oxidation and other reactions spoil food without microbes.",
        },
      ],
    },
    relatedQuestions: [86],
  },
  {
    id: 100,
    question: "How does soap remove dirt and oil?",
    category: "Chemistry and Materials",
    shortAnswer:
      "Soap molecules attach to oily dirt on one end and to water on the other, allowing water to rinse the dirt away.",
    explanation:
      "Soap molecules have two different ends: one end is attracted to water, and the other is attracted to oil and grease (and repelled by water). When you wash with soap, the oil-loving ends surround and trap grease and dirt particles, forming tiny clusters called micelles, while the water-loving ends let the whole cluster be rinsed away with water.",
    diagram: {
      type: "process",
      title: "How soap lifts away oily dirt",
      description: "Soap molecules trap oil on one end and let water carry it away on the other.",
      labels: [
        {
          label: "Soap meets oil",
          explanation: "The oil-attracting end of each soap molecule surrounds grease and dirt.",
        },
        {
          label: "Micelle forms",
          explanation: "Soap molecules cluster around the oil droplet, trapping it inside.",
        },
        {
          label: "Water-loving ends face out",
          explanation: "The outer surface of the cluster is attracted to water.",
        },
        {
          label: "Rinsed away",
          explanation: "Rinsing with water carries the whole cluster off the surface.",
        },
      ],
    },
    relatedQuestions: [89],
  },
];
