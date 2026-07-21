import type { ScientistProfile } from "./types";

export const maryAnning: ScientistProfile = {
  slug: "mary-anning",
  seoDescription: "Mary Anning's fossil discoveries on the Jurassic Coast transformed paleontology, extinction studies and scientific understanding of deep time.",
  timeline: [
    { year: "1799", title: "Born in Lyme Regis", description: "Mary Anning is born on England's fossil-rich Jurassic Coast." },
    { year: "1811-1812", title: "Ichthyosaur discovery", description: "The Anning family uncovers a major ichthyosaur skeleton.", pivotal: true },
    { year: "1823", title: "Plesiosaur fossil", description: "Anning discovers a nearly complete plesiosaur.", pivotal: true },
    { year: "1828", title: "British pterosaur", description: "She finds the first pterosaur specimen recognized in Britain." },
    { year: "1830s", title: "Scientific reputation", description: "Leading geologists depend on her fossil knowledge." },
    { year: "1847", title: "Dies", description: "Anning dies of breast cancer in Lyme Regis." },
    { year: "2010", title: "Modern recognition", description: "The Royal Society names her among influential women in science history." },
  ],
  earlyLifeDetail: {
    childhood: "Anning grew up collecting fossils from unstable cliffs and beaches. Fossil hunting was both education and family income.",
    family: "Her father Richard taught her fossil collecting; after his death, the family depended heavily on fossil sales.",
    education: "She had little formal schooling but built deep expertise through fieldwork, preparation and reading scientific literature.",
    difficulties: "Poverty, dangerous cliffs, class prejudice and gender exclusion shaped her career.",
    finances: "She sold fossils to collectors and museums, often with unstable income.",
    personalLife: "Anning remained in Lyme Regis, building a reputation among geologists who travelled to consult her.",
    influences: "The Jurassic Coast, local fossil trade, comparative anatomy and geologists such as Henry De la Beche shaped her work.",
    booksRead: "She read geological and anatomical works to interpret the fossils she prepared.",
    teachersAndMentors: "Her father taught early fossil collecting; later scientific visitors expanded her network.",
    stories: ["She survived a lightning strike as a baby, according to local stories.", "Her dog Tray died in a cliff fall while fossil hunting.", "She found fossils that gentlemen scientists published about."],
  },
  turningPoints: ["Her father's death made fossil work economically necessary.", "The ichthyosaur drew scientific attention.", "The plesiosaur proved extinct marine reptiles were stranger than expected.", "Modern historians restored her place in paleontology."],
  failures: ["She was excluded from the Geological Society of London.", "Many publications based on her fossils did not credit her fully.", "Financial insecurity remained despite scientific importance."],
  studentLessons: ["Expertise can come from field practice as well as universities.", "Credit is a scientific responsibility.", "Fossils are evidence for extinction and deep time."],
  discoveries: [
    { name: "Marine reptile fossils", period: "1810s-1820s", background: "Extinction and ancient life were still debated.", problem: "What animals did large fossil skeletons represent?", method: "Anning found, prepared and interpreted fossils from Jurassic rocks.", discovery: "Her ichthyosaur and plesiosaur specimens revealed extinct marine reptiles.", importance: "They helped establish paleontology and deep-time biology.", modernApplications: ["Paleontology", "Evolutionary biology", "Museum science", "Stratigraphy"] },
    { name: "Jurassic Coast fossil practice", period: "1810s-1840s", background: "Fossil collecting required local geological expertise.", problem: "How could fragile fossils be found and prepared safely?", method: "Anning read cliffs, tides and rock layers while preparing specimens carefully.", discovery: "She became one of the best fossil experts of her time.", importance: "Her methods supplied museums and scientific debate.", modernApplications: ["Field geology", "Fossil preparation", "Geoconservation"] },
  ],
  works: [
    { title: "Ichthyosaur specimen", year: "1811-1812", kind: "Project", description: "Major fossil skeleton found near Lyme Regis." },
    { title: "Plesiosaur specimen", year: "1823", kind: "Project", description: "One of her most scientifically important finds." },
    { title: "Pterosaur specimen", year: "1828", kind: "Project", description: "First recognized pterosaur found in Britain." },
  ],
  equations: [
    { name: "Relative age principle", latex: "A_{lower}>A_{upper}", explanation: "In undisturbed sedimentary layers, lower layers are older than upper layers.", variables: [{ symbol: "A", meaning: "age of rock layer" }], workedExample: { problem: "If a fossil is below another in undisturbed rock, which is older?", steps: [{ text: "Apply superposition." }], answer: "The lower fossil is older." }, modernUse: "Basic stratigraphy and paleontology." },
    { name: "Fossil proportion", latex: "p=\\frac{n}{N}", explanation: "A simple fraction can describe how common a fossil type is in a collection.", variables: [{ symbol: "n", meaning: "number of a fossil type" }, { symbol: "N", meaning: "total fossils" }], workedExample: { problem: "If 12 of 60 fossils are ammonites, find p.", steps: [{ text: "Divide.", latex: "p=\\frac{12}{60}=0.2" }], answer: "20 percent." }, modernUse: "Used in fossil assemblage analysis." },
  ],
  connections: [
    { field: "Earth Science", description: "Her work depends on stratigraphy, geology and fossil-bearing rocks." },
    { field: "Biology", description: "Fossils reveal extinct organisms and evolutionary history." },
    { field: "Medicine", description: "Comparative anatomy helped interpret fossil bones." },
  ],
  historicalContext: { worldEvents: "Anning worked during early nineteenth-century debates over extinction, geology and biblical chronology.", politics: "Class and gender restricted scientific membership.", universities: "She worked outside universities and learned through practice.", scientificCommunity: "Gentlemen geologists used fossils she found and prepared.", technology: "Hand tools, coastal fieldwork and museum display shaped fossil science." },
  backlash: [
    { type: "Gender bias", title: "Excluded from societies", description: "Women could not fully participate in institutions such as the Geological Society.", status: "Verified" },
    { type: "Discrimination", title: "Class barriers", description: "Working-class status limited credit and security.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Financial", description: "Fossil sales were uncertain and necessary for survival." },
    { category: "Gender", description: "Scientific institutions excluded women." },
    { category: "Social", description: "Class status limited recognition." },
    { category: "Professional", description: "Others often published from her finds." },
  ],
  achievements: [
    { title: "Major ichthyosaur fossil", year: "1811-1812", description: "A landmark early marine reptile specimen." },
    { title: "Plesiosaur discovery", year: "1823", description: "A fossil that transformed understanding of extinct reptiles." },
    { title: "Royal Society recognition", year: "2010", description: "Named among influential women in science history." },
  ],
  funFacts: ["She worked on the Jurassic Coast.", "She sold fossils from a shop in Lyme Regis.", "Tongue stones were later understood as fossil teeth.", "She became expert without a university degree."],
  didYouKnow: [
    { title: "Dangerous science", content: "Cliff falls made fossil hunting risky." },
    { title: "Extinction evidence", content: "Her fossils showed animals unlike any living species." },
    { title: "Credit problem", content: "Scientists often studied her fossils without fully crediting her." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Mary Anning on the Lyme Regis coast with fossils, hammer, cliffs and Jurassic marine reptile skeleton outlines." },
    { category: "Scientific diagram", prompt: "Layered cliff stratigraphy diagram with fossil positions and relative ages." },
    { category: "Timeline infographic", prompt: "Mary Anning timeline of ichthyosaur, plesiosaur, pterosaur and later recognition." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Mary Anning.", suggestedSource: "Wikimedia Commons: Mary Anning painting.jpg" },
    { slot: "Historic location", caption: "Lyme Regis Jurassic Coast fossil cliffs.", suggestedSource: "Wikimedia Commons" },
    { slot: "Museum exhibit", caption: "Ichthyosaur or plesiosaur fossil specimen.", suggestedSource: "Natural History Museum" },
    { slot: "Instruments", caption: "Fossil hammer, field tools or prepared fossil slab.", suggestedSource: "Museum collections" },
  ],
  relatedScientists: [
    { slug: "charles-darwin", name: "Charles Darwin", reason: "Fossils and extinction shaped evolutionary thinking." },
    { slug: "rachel-carson", name: "Rachel Carson", reason: "Both connect life science with public understanding of nature." },
    { slug: "hypatia", name: "Hypatia", reason: "Both show how gender shaped scientific recognition." },
  ],
  relatedTopics: [
    { title: "Evolution", href: "/subjects/biology/evolution", description: "Fossils are evidence for evolutionary history." },
    { title: "Earth History", href: "/subjects/earth-science/geologic-time", description: "Her fossils belong to deep geological time." },
    { title: "Classification", href: "/subjects/biology/classification", description: "Fossils require anatomical classification." },
  ],
  quotes: [
    { text: "The world has used me so unkindly, I fear it has made me suspicious of everyone.", source: "Letter attributed to Anning", status: "Widely attributed" },
    { text: "She sells sea-shells on the sea-shore.", source: "Traditional tongue twister often linked to Anning", status: "Disputed" },
    { text: "Her finds changed the way people saw ancient life.", source: "Historical summary", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "Where did Mary Anning work?", options: ["Lyme Regis", "Harvard Observatory", "Columbia University", "Trieste"], answer: 0, explanation: "She worked on the Jurassic Coast around Lyme Regis." },
      { question: "Which fossils is she known for?", options: ["Marine reptiles", "Cepheid stars", "Transposons", "Weak bosons"], answer: 0, explanation: "Ichthyosaurs and plesiosaurs were key." },
      { question: "What barrier strongly affected her?", options: ["Class and gender exclusion", "Too many Nobel prizes", "No fossils nearby", "No public interest in geology"], answer: 0, explanation: "She was working-class and a woman." },
    ],
    trueFalse: [
      { statement: "Anning had full membership in scientific societies during her life.", answer: false, explanation: "She was excluded from formal institutions." },
      { statement: "Her fossils supported ideas of extinction and deep time.", answer: true, explanation: "They showed ancient extinct animals." },
      { statement: "Fossil hunting could be dangerous.", answer: true, explanation: "Cliff falls and tides were serious risks." },
    ],
    shortAnswer: [
      { question: "Why were Anning's fossils important?", modelAnswer: "They provided evidence of extinct ancient animals and helped build paleontology.", marks: 5 },
      { question: "What is deep time?", modelAnswer: "The vast geological timescale recorded by Earth's rocks and fossils.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain Mary Anning's role in paleontology.", modelAnswer: "Mary Anning found and prepared major fossils from the Jurassic Coast, including ichthyosaurs, plesiosaurs and a pterosaur. These specimens helped scientists understand extinction, ancient marine reptiles and deep geological time. Although excluded by class and gender from formal institutions, her field expertise supplied evidence that shaped early paleontology.", marks: 12 },
    ],
  },
};
