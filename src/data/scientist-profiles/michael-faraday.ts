import type { ScientistProfile } from "./types";

export const michaelFaraday: ScientistProfile = {
  slug: "michael-faraday",
  seoDescription:
    "Michael Faraday discovered electromagnetic induction, built the first electric motor principles, founded electrochemistry laws, and introduced field ideas that Maxwell later mathematized.",

  timeline: [
    { year: "1791", title: "Born in Newington Butts", description: "Michael Faraday is born near London into a poor Sandemanian Christian family whose seriousness, discipline and modesty shape his later scientific character." },
    { year: "1805", title: "Bookbinder apprenticeship", description: "He is apprenticed to George Riebau, where reading the books he binds becomes his informal scientific education.", pivotal: true },
    { year: "1812", title: "Davy lectures", description: "Faraday attends Humphry Davy's Royal Institution lectures, takes careful notes and sends them to Davy as evidence of his ability.", pivotal: true },
    { year: "1813", title: "Royal Institution assistant", description: "Davy hires Faraday as chemical assistant. Faraday enters professional science through practical laboratory labour rather than university status." },
    { year: "1821", title: "Electromagnetic rotation", description: "Faraday demonstrates continuous rotation produced by electric and magnetic interaction, a first step toward the electric motor.", pivotal: true },
    { year: "1825", title: "Discovers benzene", description: "He isolates benzene from oily gas residues, adding an important result to organic chemistry." },
    { year: "1831", title: "Electromagnetic induction", description: "Faraday discovers that changing magnetic conditions induce electric current, the operating principle of generators and transformers.", pivotal: true },
    { year: "1834", title: "Laws of electrolysis", description: "He formulates quantitative laws linking electric charge to chemical decomposition and introduces much of the language of electrochemistry.", pivotal: true },
    { year: "1845", title: "Faraday effect", description: "He shows that magnetism can rotate the plane of polarized light, connecting electromagnetism and optics." },
    { year: "1850s", title: "Lines of force mature", description: "Faraday develops the physical idea of fields filling space, later translated into Maxwell's mathematical theory." },
    { year: "1867", title: "Dies at Hampton Court", description: "Faraday dies on 25 August, having refused a knighthood and burial in Westminster Abbey." },
  ],

  earlyLifeDetail: {
    childhood:
      "Faraday's childhood was materially poor but intellectually alive in a practical sense. He had little formal schooling and learned through work, reading, lectures and experiment. That background gave him unusual sympathy for public education and a suspicion of empty prestige.",
    family:
      "His father James Faraday was a blacksmith with fragile health; his mother Margaret provided emotional steadiness. The family belonged to the Sandemanian church, whose emphasis on humility, service and moral discipline remained central to Faraday's life.",
    education:
      "Faraday had no university degree. His bookbinding apprenticeship functioned as a private university: he read Encyclopaedia Britannica articles, Jane Marcet's Conversations on Chemistry and practical electrical texts, then repeated experiments with simple apparatus.",
    difficulties:
      "Class barriers were real. Faraday entered elite science as a servant-assistant, not as a gentleman scholar. He also lacked advanced mathematics, which meant later theorists had to translate his physical pictures into equations.",
    finances:
      "His early income was modest and insecure. Royal Institution employment gave him a laboratory but not wealth. He repeatedly chose independence and scientific service over profitable consulting or titles.",
    personalLife:
      "He married Sarah Barnard in 1821. They had no children, and Sarah supported the quiet domestic and religious life that allowed Faraday to work intensely without adopting aristocratic scientific manners.",
    influences:
      "Humphry Davy opened the door but later became uneasy about Faraday's independence. Marcet's chemistry book, Sandemanian discipline, Ampere's electromagnetism and Oersted's discovery of electromagnetism all shaped him.",
    booksRead:
      "Faraday read accessible chemistry, electricity and natural philosophy while binding books. He valued texts that could be converted into experiment, not decorative learning.",
    teachersAndMentors:
      "Davy was the crucial institutional mentor. William Brande and the Royal Institution community also mattered, but Faraday's deepest teacher was repeated experiment.",
    stories: [
      "Faraday's lecture notes were so careful that they became his job application to Davy.",
      "He refused a knighthood and twice declined the presidency of the Royal Society.",
      "His Christmas Lectures made serious science vivid for young audiences without diluting the science.",
    ],
  },

  turningPoints: [
    "The bookbinder apprenticeship turned poverty into access to books.",
    "Davy's lectures gave Faraday a route into the Royal Institution.",
    "Oersted's discovery that electric current affects a compass opened Faraday's lifelong electromagnetic programme.",
    "The 1831 induction experiments showed that changing fields, not static magnets alone, generate currents.",
    "The Faraday effect convinced him that light and electromagnetism were connected.",
  ],

  failures: [
    "Faraday's early electromagnetic rotation paper angered Davy and Wollaston because of perceived credit issues.",
    "He could not express his field ideas in the advanced mathematics that Maxwell later supplied.",
    "Some speculative claims about unity of forces were ahead of evidence and remained qualitative.",
    "Work pressure contributed to periods of memory trouble and exhaustion.",
  ],

  studentLessons: [
    "A powerful experiment can be simple if the question is exact.",
    "Conceptual pictures matter; Faraday's lines of force changed physics before they became equations.",
    "Scientific language can create a field: electrode, ion, anode and cathode helped organize electrochemistry.",
    "Lack of formal credentials need not prevent deep contribution, but access to institutions still matters.",
  ],

  discoveries: [
    {
      name: "Electromagnetic rotation",
      period: "1821",
      background: "Oersted had shown that electric current deflects a magnetic needle, suggesting a connection between electricity and magnetism.",
      problem: "Could electromagnetic interaction produce continuous mechanical motion rather than a one-time deflection?",
      method: "Faraday arranged a current-carrying wire and magnet so that the wire moved around the magnet under the electromagnetic force.",
      discovery: "He produced continuous circular motion from electricity and magnetism.",
      importance: "This was the conceptual ancestor of the electric motor.",
      modernApplications: ["Electric motors", "Fans and pumps", "Industrial drives", "Robotics"],
    },
    {
      name: "Electromagnetic induction",
      period: "1831",
      background: "If electricity could create magnetic effects, Faraday asked whether magnetism could create electricity.",
      problem: "What condition induces current in a conductor?",
      method: "He moved magnets and coils relative to one another and observed currents with galvanometers.",
      discovery: "Changing magnetic flux induces an electromotive force.",
      importance: "Induction made generators, transformers and large-scale electrification possible.",
      modernApplications: ["Power stations", "Transformers", "Induction charging", "Electric guitars"],
    },
    {
      name: "Laws of electrolysis",
      period: "1833-1834",
      background: "Electrochemical decomposition was known but lacked clear quantitative laws and standard vocabulary.",
      problem: "How is chemical change related to the amount of electricity passed?",
      method: "Faraday measured products of electrolysis under controlled electrical conditions.",
      discovery: "The amount of chemical change is proportional to charge, and equivalent quantities depend on ionic valence.",
      importance: "The laws connected chemistry to discrete electric charge long before the electron was known.",
      modernApplications: ["Electroplating", "Battery chemistry", "Industrial electrolysis", "Corrosion science"],
    },
    {
      name: "Faraday effect",
      period: "1845",
      background: "Faraday suspected that light, electricity and magnetism were connected aspects of nature.",
      problem: "Can magnetism influence light directly?",
      method: "He passed polarized light through materials in strong magnetic fields and observed rotation of polarization.",
      discovery: "A magnetic field can rotate the plane of polarized light in matter.",
      importance: "It was the first clear magneto-optical effect and a clue toward electromagnetic theories of light.",
      modernApplications: ["Optical isolators", "Magneto-optical sensors", "Plasma diagnostics", "Materials analysis"],
    },
  ],

  works: [
    { title: "Chemical Manipulation", year: "1827", kind: "Book", description: "A practical manual showing Faraday's mastery of laboratory technique." },
    { title: "Experimental Researches in Electricity", year: "1832-1855", kind: "Paper", description: "A long series of papers documenting induction, electrochemistry, dielectrics, magnetism and fields." },
    { title: "The Chemical History of a Candle", year: "1861", kind: "Book", description: "A public lecture series that became a classic of science communication." },
    { title: "Faraday disk generator", year: "1831", kind: "Instrument", description: "A rotating conducting disk generating continuous current between centre and rim." },
  ],

  equations: [
    {
      name: "Faraday's induction law",
      latex: "\\mathcal{E}=-N\\frac{d\\Phi_B}{dt}",
      explanation: "A changing magnetic flux through a circuit induces an emf; the minus sign expresses Lenz's law.",
      variables: [
        { symbol: "\\mathcal{E}", meaning: "induced emf" },
        { symbol: "N", meaning: "number of turns" },
        { symbol: "\\Phi_B", meaning: "magnetic flux" },
        { symbol: "t", meaning: "time" },
      ],
      workedExample: {
        problem: "A 50-turn coil changes flux from 0.020 Wb to 0 in 0.10 s. Find the emf magnitude.",
        steps: [
          { text: "Use the magnitude of Faraday's law.", latex: "|\\mathcal{E}|=50\\frac{0.020}{0.10}" },
          { text: "Calculate.", latex: "|\\mathcal{E}|=10\\text{ V}" },
        ],
        answer: "The induced emf is 10 V.",
      },
      modernUse: "Generators, transformers, induction cooktops and wireless charging all use this law.",
    },
    {
      name: "Magnetic flux",
      latex: "\\Phi_B=BA\\cos\\theta",
      explanation: "Flux measures how much magnetic field passes through a surface.",
      variables: [
        { symbol: "B", meaning: "magnetic field strength" },
        { symbol: "A", meaning: "area" },
        { symbol: "\\theta", meaning: "angle between field and surface normal" },
      ],
      workedExample: {
        problem: "Find flux for B=0.30 T, A=0.20 m^2 and theta=0.",
        steps: [
          { text: "Substitute values.", latex: "\\Phi_B=(0.30)(0.20)\\cos0" },
          { text: "Calculate.", latex: "\\Phi_B=0.060\\text{ Wb}" },
        ],
        answer: "The flux is 0.060 Wb.",
      },
      modernUse: "Flux is central to motors, generators, sensors and electromagnetic design.",
    },
    {
      name: "Faraday's electrolysis law",
      latex: "m=\\frac{Q M}{zF}",
      explanation: "Mass deposited in electrolysis is proportional to charge passed.",
      variables: [
        { symbol: "m", meaning: "mass deposited" },
        { symbol: "Q", meaning: "charge" },
        { symbol: "M", meaning: "molar mass" },
        { symbol: "z", meaning: "ionic charge number" },
        { symbol: "F", meaning: "Faraday constant" },
      ],
      workedExample: {
        problem: "Estimate copper deposited by 9650 C, with M=63.5 g/mol and z=2.",
        steps: [
          { text: "Use F=96500 C/mol.", latex: "m=\\frac{(9650)(63.5)}{(2)(96500)}" },
          { text: "Calculate.", latex: "m=3.18\\text{ g}" },
        ],
        answer: "About 3.2 g of copper is deposited.",
      },
      modernUse: "Used in electroplating, refining, batteries and electrochemical manufacturing.",
    },
  ],

  connections: [
    { field: "Physics", description: "Faraday established experimental electromagnetism and field concepts." },
    { field: "Chemistry", description: "His electrolysis laws helped make electrochemistry quantitative." },
    { field: "Engineering", description: "Motors, generators and transformers are applied Faraday." },
    { field: "Mathematics", description: "Maxwell later converted Faraday's physical field picture into mathematical field equations." },
  ],
  historicalContext: {
    worldEvents: "Faraday lived through industrial Britain, when steam power, gas lighting, telegraphy and public lectures changed science's social role.",
    politics: "Class hierarchy shaped access to science; Faraday's rise from tradesman's apprentice to Royal Institution professor was exceptional.",
    universities: "British science was split between universities, learned societies, public institutions and practical workshops.",
    scientificCommunity: "Oersted, Ampere, Davy, Wheatstone and Maxwell formed the chain around Faraday's electromagnetic work.",
    technology: "Galvanometers, batteries, magnets, coils, glassware and precision manual craft were his essential technologies.",
  },
  backlash: [
    { type: "Priority dispute", title: "Electromagnetic rotation credit", description: "Faraday's 1821 work caused tension because Wollaston and Davy had considered related ideas.", status: "Verified" },
    { type: "Academic conflict", title: "Mathematical limitation", description: "Some later physicists found his non-mathematical field language difficult, even when the physics was profound.", status: "Verified" },
    { type: "Public criticism", title: "Spiritualism investigation", description: "Faraday publicly exposed table-turning as physical pressure rather than supernatural force.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Financial", description: "Faraday's early poverty shaped his route through apprenticeship and assistant work." },
    { category: "Social", description: "He entered elite science across strong class boundaries." },
    { category: "Scientific", description: "He had to detect subtle electrical and magnetic effects with simple instruments." },
    { category: "Health", description: "Periods of exhaustion and memory trouble interrupted his work." },
  ],
  achievements: [
    { title: "Fullerian Professor of Chemistry", year: "1833", description: "Faraday became the first holder of this Royal Institution post." },
    { title: "Royal Medal", year: "1835 and 1846", description: "Recognized for electrical and magneto-optical discoveries." },
    { title: "Copley Medal", year: "1832 and 1838", description: "Awarded by the Royal Society for major experimental work." },
    { title: "Farad named in his honour", year: "1881", description: "The SI-derived unit of capacitance memorializes his electrical work." },
  ],
  funFacts: [
    "Faraday coined or helped popularize terms such as ion, electrode, anode and cathode.",
    "He refused a knighthood.",
    "Einstein reportedly kept portraits of Newton, Maxwell and Faraday in his study.",
    "The Royal Institution Christmas Lectures still continue in the tradition Faraday made famous.",
  ],
  didYouKnow: [
    { title: "Field thinking began visually", content: "Faraday imagined lines of force as physically meaningful, not merely drawing aids." },
    { title: "A motor before power grids", content: "His electromagnetic rotation came before practical electric power systems existed." },
    { title: "Chemistry and electricity met", content: "Electrolysis showed that electric charge and chemical change were quantitatively linked." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Michael Faraday in the Royal Institution laboratory with coils, magnets and glass apparatus, Victorian realism, warm lecture-room light." },
    { category: "Experiment", prompt: "Faraday induction experiment with coil, magnet, galvanometer and labelled changing magnetic flux arrows, clean educational diagram." },
    { category: "Equipment", prompt: "Faraday disk generator labelled with rotating copper disk, magnet poles, axle, brush contacts and induced voltage." },
    { category: "Timeline infographic", prompt: "Faraday timeline from bookbinder apprentice to induction, electrolysis, field lines and public lectures." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Michael Faraday.", suggestedSource: "Wikimedia Commons: Faraday.jpg" },
    { slot: "Laboratory", caption: "Royal Institution laboratory or lecture theatre associated with Faraday.", suggestedSource: "Royal Institution collections or Wikimedia Commons" },
    { slot: "Instruments", caption: "Faraday disk generator or electromagnetic rotation apparatus.", suggestedSource: "Royal Institution collection images" },
    { slot: "Notebooks", caption: "Page from Faraday's laboratory notebook or Experimental Researches.", suggestedSource: "Royal Institution archival material" },
  ],
  relatedScientists: [
    { slug: "james-clerk-maxwell", name: "James Clerk Maxwell", reason: "Maxwell mathematized Faraday's field ideas." },
    { slug: "nikola-tesla", name: "Nikola Tesla", reason: "Tesla's AC systems apply induction, motors and fields." },
    { slug: "thomas-edison", name: "Thomas Edison", reason: "Edison's power systems grew from the electrical world Faraday made possible." },
    { slug: "alessandro-volta", name: "Alessandro Volta", reason: "Volta's battery made sustained electrical experimentation possible." },
  ],
  relatedTopics: [
    { title: "Faraday's and Lenz's Laws", href: "/subjects/physics/faradays-and-lenzs-laws", description: "The central induction laws behind generators and transformers." },
    { title: "Magnetic Fields", href: "/subjects/physics/magnetic-fields", description: "Faraday's work made fields central to physics." },
    { title: "Alternating Current", href: "/subjects/physics/alternating-current", description: "AC machines depend on changing magnetic flux." },
    { title: "Electrochemistry", href: "/subjects/chemistry/electrochemistry", description: "Faraday's laws are foundational for electrolysis." },
  ],
  quotes: [
    { text: "Nothing is too wonderful to be true, if it be consistent with the laws of nature.", source: "Laboratory notebook and later recollections", status: "Verified" },
    { text: "Work. Finish. Publish.", source: "Often attributed to Faraday", status: "Widely attributed" },
    { text: "The lecturer should give the audience full reason to believe that all his powers have been exerted for their pleasure and instruction.", source: "Advice on lecturing attributed to Faraday", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "What did Faraday discover in 1831?", options: ["Electromagnetic induction", "DNA structure", "Natural selection", "Radium"], answer: 0, explanation: "He showed that changing magnetic conditions induce electric current." },
      { question: "What does Faraday's law relate?", options: ["Changing magnetic flux and induced emf", "Mass and acceleration", "Pressure and volume", "Half-life and decay"], answer: 0, explanation: "The induced emf depends on the rate of change of magnetic flux." },
      { question: "Which device depends directly on induction?", options: ["Transformer", "Optical microscope only", "Swan-neck flask", "Vaccination needle"], answer: 0, explanation: "Transformers work by induction between coils." },
      { question: "What was Faraday's formal university training?", options: ["He had none", "A Cambridge doctorate", "A Paris medical degree", "A law degree"], answer: 0, explanation: "Faraday was largely self-educated." },
      { question: "Who later mathematized Faraday's field ideas?", options: ["James Clerk Maxwell", "Charles Darwin", "Louis Pasteur", "John Dalton"], answer: 0, explanation: "Maxwell turned field insights into equations." },
    ],
    trueFalse: [
      { statement: "Faraday discovered electromagnetic induction.", answer: true, explanation: "This was his central 1831 discovery." },
      { statement: "Faraday was strongest as an abstract mathematician.", answer: false, explanation: "He was an experimental thinker, not an advanced mathematician." },
      { statement: "The farad is named after Faraday.", answer: true, explanation: "It is the unit of capacitance." },
      { statement: "Faraday's work has no connection to electric power generation.", answer: false, explanation: "Electric generators rely on induction." },
    ],
    shortAnswer: [
      { question: "Why was Faraday's bookbinding apprenticeship important?", modelAnswer: "It gave him access to books and allowed him to educate himself in chemistry and electricity while working.", marks: 4 },
      { question: "State Faraday's induction idea in words.", modelAnswer: "A changing magnetic flux through a circuit induces an electromotive force and possibly a current.", marks: 4 },
      { question: "Why did field lines matter?", modelAnswer: "They gave physical meaning to forces acting through space and prepared the field concept Maxwell later formalized.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Faraday's importance to modern electrical technology.", modelAnswer: "Faraday discovered the principles that allow mechanical energy and electrical energy to be converted into one another. Electromagnetic induction underlies generators, transformers, induction motors and much of the power grid. His electrolysis laws also connected charge with chemical change, while his field picture changed theoretical physics. Modern electrical civilization is therefore not just inspired by Faraday; it repeatedly implements his laboratory results.", marks: 12 },
      { question: "Assess Faraday's scientific method.", modelAnswer: "Faraday's method combined simple apparatus, precise observation, repeated trials and bold physical imagination. He was not an advanced mathematician, but he asked unusually clear experimental questions: can magnetism produce electricity, can electricity produce motion, can magnetism affect light? His strength was converting broad intuitions about unity in nature into experiments that forced nature to answer.", marks: 12 },
    ],
  },
};
