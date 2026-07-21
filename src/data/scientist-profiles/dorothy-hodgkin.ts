import type { ScientistProfile } from "./types";

export const dorothyHodgkin: ScientistProfile = {
  slug: "dorothy-hodgkin",
  seoDescription:
    "Dorothy Hodgkin used X-ray crystallography to solve penicillin, vitamin B12 and insulin structures, transforming chemistry, medicine and structural biology.",
  timeline: [
    { year: "1910", title: "Born in Cairo", description: "Dorothy Mary Crowfoot is born on 12 May in Cairo, where her parents work in education and archaeology." },
    { year: "1920s", title: "School chemistry and crystals", description: "She becomes fascinated by crystals and chemistry as a schoolgirl." },
    { year: "1928", title: "Oxford chemistry", description: "Hodgkin studies chemistry at Somerville College, Oxford." },
    { year: "1932", title: "Cambridge crystallography", description: "She works with J. D. Bernal, entering X-ray crystallography when biological molecules are just becoming accessible.", pivotal: true },
    { year: "1934", title: "Returns to Oxford", description: "She establishes crystallographic research at Oxford and begins long-term work on insulin." },
    { year: "1945", title: "Penicillin structure", description: "Her team solves the structure of penicillin, confirming the beta-lactam ring.", pivotal: true },
    { year: "1956", title: "Vitamin B12 structure", description: "Hodgkin solves one of the most complex molecular structures of the period.", pivotal: true },
    { year: "1964", title: "Nobel Prize in Chemistry", description: "She receives the Nobel Prize for determining important biochemical substances by X-ray techniques." },
    { year: "1969", title: "Insulin structure solved", description: "After decades of work, her team determines insulin's structure.", pivotal: true },
    { year: "1994", title: "Dies in Warwickshire", description: "Hodgkin dies on 29 July, remembered as a founder of structural biology." },
  ],
  earlyLifeDetail: {
    childhood: "Hodgkin's childhood moved between Britain, North Africa and the Middle East. Archaeology, fieldwork and scientific curiosity were normal in her family environment.",
    family: "Her father John Crowfoot was an archaeologist and educator; her mother Grace was a botanist and archaeological illustrator. Both valued evidence, observation and visual detail.",
    education: "She studied at Oxford, then Cambridge with Bernal, learning to interpret diffraction patterns when the mathematics and instrumentation were demanding and slow.",
    difficulties: "Rheumatoid arthritis damaged her hands and mobility, but she adapted her working life around collaboration, students and sustained concentration.",
    finances: "She worked within university and grant-supported research, often dependent on equipment, computing access and patient team science.",
    personalLife: "She married Thomas Hodgkin in 1937 and raised three children while leading major research projects.",
    influences: "J. D. Bernal was central, showing that crystallography could solve biological molecules. Kathleen Lonsdale and the Braggs shaped the crystallographic tradition around her.",
    booksRead: "Her intellectual world included chemistry, Fourier methods, crystallography, biochemistry and medical literature on antibiotics and hormones.",
    teachersAndMentors: "Bernal was the decisive mentor; Oxford students and collaborators later became part of her own scientific school.",
    stories: ["She worked on insulin for more than thirty years.", "Her penicillin structure mattered directly to antibiotic chemistry.", "She was Margaret Thatcher's former tutor, though their politics diverged sharply."],
  },
  turningPoints: ["Discovering chemistry at school gave her direction.", "Bernal's Cambridge laboratory connected crystallography to biology.", "Penicillin proved crystallography could solve urgent medical molecules.", "Vitamin B12 showed the method could handle extreme complexity.", "Insulin completed a decades-long scientific promise."],
  failures: ["Early crystallography was slow and ambiguous because phase information is not directly measured.", "Insulin resisted solution for decades.", "Women crystallographers often faced limited recognition despite central work.", "Her arthritis made laboratory work physically difficult."],
  studentLessons: ["Structure explains function.", "Hard problems may require decades, not semesters.", "Team science is not lesser science.", "Medical chemistry depends on physical measurement."],
  discoveries: [
    { name: "Penicillin structure", period: "1940s", background: "Penicillin's activity was known, but its chemical structure was disputed.", problem: "What atomic arrangement gives penicillin its antibacterial power?", method: "Hodgkin used X-ray diffraction maps and chemical reasoning.", discovery: "The beta-lactam ring was confirmed.", importance: "This guided antibiotic chemistry and later drug development.", modernApplications: ["Antibiotic design", "Medicinal chemistry", "Beta-lactam resistance studies", "Pharmaceutical analysis"] },
    { name: "Vitamin B12 structure", period: "1950s", background: "Vitamin B12 was medically important but structurally enormous for its time.", problem: "Could crystallography solve a molecule of such complexity?", method: "Her team combined diffraction, heavy atoms, computation and chemical constraints.", discovery: "They determined the corrin-ring structure with cobalt at its centre.", importance: "It proved crystallography could solve complex biomolecules.", modernApplications: ["Structural biology", "Metalloprotein chemistry", "Vitamin metabolism", "Drug research"] },
    { name: "Insulin structure", period: "1930s-1969", background: "Insulin was central to diabetes treatment but structurally difficult.", problem: "What is the three-dimensional arrangement of insulin?", method: "Hodgkin's group improved crystals, collected diffraction data and refined models over decades.", discovery: "The structure of insulin was solved in 1969.", importance: "It linked hormone chemistry to molecular medicine.", modernApplications: ["Diabetes therapy", "Protein crystallography", "Biotechnology", "Protein engineering"] },
  ],
  works: [
    { title: "X-ray analysis of penicillin", year: "1945", kind: "Paper", description: "Research establishing penicillin's structure." },
    { title: "Structure of vitamin B12", year: "1956", kind: "Paper", description: "A landmark crystallographic solution of a highly complex biomolecule." },
    { title: "Insulin structure programme", year: "1930s-1969", kind: "Project", description: "A long-running project to solve insulin's molecular structure." },
    { title: "X-ray diffraction interpretation", year: "20th century", kind: "Experiment", description: "Use of diffraction patterns and Fourier maps to locate atoms." },
  ],
  equations: [
    { name: "Bragg's law", latex: "n\\lambda=2d\\sin\\theta", explanation: "Constructive X-ray diffraction occurs when path difference matches whole wavelengths.", variables: [{ symbol: "n", meaning: "diffraction order" }, { symbol: "\\lambda", meaning: "X-ray wavelength" }, { symbol: "d", meaning: "crystal plane spacing" }, { symbol: "\\theta", meaning: "diffraction angle" }], workedExample: { problem: "For lambda=0.154 nm and theta=15 degrees, n=1, find d.", steps: [{ text: "Rearrange.", latex: "d=\\frac{0.154}{2\\sin15^\\circ}" }, { text: "Calculate.", latex: "d\\approx0.298\\text{ nm}" }], answer: "The plane spacing is about 0.30 nm." }, modernUse: "Core equation in crystallography and materials science." },
    { name: "Resolution estimate", latex: "d\\approx\\frac{\\lambda}{2\\sin\\theta_{max}}", explanation: "Higher diffraction angle means finer structural resolution.", variables: [{ symbol: "d", meaning: "resolution" }, { symbol: "\\lambda", meaning: "wavelength" }, { symbol: "\\theta_{max}", meaning: "maximum observed angle" }], workedExample: { problem: "If lambda=0.10 nm and theta max=30 degrees, estimate d.", steps: [{ text: "Substitute.", latex: "d=\\frac{0.10}{2\\sin30^\\circ}" }, { text: "Calculate.", latex: "d=0.10\\text{ nm}" }], answer: "Resolution is about 0.10 nm." }, modernUse: "Used to judge structural detail in diffraction experiments." },
  ],
  connections: [
    { field: "Chemistry", description: "Hodgkin made atomic structure central to chemical explanation." },
    { field: "Biology", description: "Her work helped found structural biology." },
    { field: "Medicine", description: "Penicillin, vitamin B12 and insulin connect directly to treatment and physiology." },
    { field: "Mathematics", description: "Crystallography depends on geometry and Fourier analysis." },
  ],
  historicalContext: { worldEvents: "Her career spans World War II, the antibiotic era and the rise of molecular biology.", wars: "Penicillin structure work had wartime medical urgency.", universities: "Oxford and Cambridge crystallography became centres of molecular structure research.", scientificCommunity: "The Braggs, Bernal, Lonsdale, Franklin and Hodgkin formed a powerful crystallographic tradition.", technology: "X-ray tubes, photographic plates, early computers and Fourier maps were essential." },
  backlash: [
    { type: "Gender bias", title: "Women in crystallography", description: "Women made central contributions but often worked against institutional bias.", status: "Verified" },
    { type: "Public criticism", title: "Political criticism", description: "Hodgkin's peace activism and left politics drew criticism during the Cold War.", status: "Verified" },
    { type: "Academic conflict", title: "Structure disputes", description: "Penicillin's structure was chemically disputed before crystallography settled it.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Health", description: "Rheumatoid arthritis affected her hands and movement." },
    { category: "Gender", description: "She built authority in a male-dominated scientific world." },
    { category: "Scientific", description: "Large biomolecules stretched crystallographic methods." },
    { category: "Professional", description: "Complex structures required long-term teams and funding." },
  ],
  achievements: [
    { title: "Nobel Prize in Chemistry", year: "1964", description: "Awarded for X-ray determinations of important biochemical substances." },
    { title: "Order of Merit", year: "1965", description: "One of Britain's highest honours." },
    { title: "Copley Medal", year: "1976", description: "Royal Society recognition for exceptional scientific achievement." },
    { title: "Insulin structure", year: "1969", description: "Completion of a decades-long structural project." },
  ],
  funFacts: ["She solved penicillin before many chemists accepted its ring structure.", "She worked on insulin for over thirty years.", "She won the 1964 Nobel Prize in Chemistry.", "She combined science with peace activism."],
  didYouKnow: [
    { title: "Diffraction is indirect", content: "Crystallographers infer atoms from patterns, not microscope-like pictures." },
    { title: "Computers mattered", content: "Vitamin B12 required calculation at a scale that pushed early computing." },
    { title: "Structure changes medicine", content: "Knowing molecular shape lets chemists explain and improve drugs." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Dorothy Hodgkin in a crystallography laboratory with diffraction photographs, molecular models and early computing equipment." },
    { category: "Scientific diagram", prompt: "X-ray crystallography diagram showing crystal, X-ray beam, diffraction spots and electron-density map." },
    { category: "Major discovery", prompt: "Educational molecular diagram of penicillin beta-lactam ring and vitamin B12 corrin ring." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Dorothy Crowfoot Hodgkin.", suggestedSource: "Wikimedia Commons: Dorothy Crowfoot Hodgkin.jpg" },
    { slot: "Laboratory", caption: "Oxford crystallography laboratory or diffraction equipment.", suggestedSource: "Royal Society or Oxford archives" },
    { slot: "Notebooks", caption: "Diffraction photograph or electron-density map from Hodgkin's work.", suggestedSource: "Royal Society / Nobel Prize / archival collections" },
    { slot: "Instruments", caption: "X-ray crystallography camera or molecular model.", suggestedSource: "Science Museum or Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "alexander-fleming", name: "Alexander Fleming", reason: "Hodgkin solved the structure of Fleming's penicillin." },
    { slug: "rosalind-franklin", name: "Rosalind Franklin", reason: "Both used X-ray methods to reveal biological structure." },
    { slug: "marie-curie", name: "Marie Curie", reason: "Both transformed physical methods into chemically and medically important science." },
  ],
  relatedTopics: [
    { title: "Molecular Structure", href: "/subjects/chemistry/molecular-structure", description: "Her work made molecular shape visible." },
    { title: "Waves and Diffraction", href: "/subjects/physics/wave-motion", description: "Crystallography depends on wave interference." },
    { title: "Medicines and Antibiotics", href: "/subjects/chemistry/medicines-and-antibiotics", description: "Penicillin structure shaped antibiotic chemistry." },
  ],
  quotes: [
    { text: "I was captured for life by chemistry and by crystals.", source: "Autobiographical reflections, widely quoted", status: "Verified" },
    { text: "The detailed structure of a molecule is often the key to understanding its action.", source: "Paraphrase of Hodgkin's scientific position", status: "Paraphrase" },
    { text: "Science is international.", source: "Widely associated with Hodgkin's public views", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What method did Hodgkin use?", options: ["X-ray crystallography", "Radio telescopy", "Natural selection", "Penicillin culture"], answer: 0, explanation: "She used diffraction to solve structures." },
      { question: "Which structure did she solve in 1956?", options: ["Vitamin B12", "DNA double helix", "Oxygen", "The electron"], answer: 0, explanation: "Vitamin B12 was a landmark structure." },
      { question: "Which antibiotic structure did she determine?", options: ["Penicillin", "Streptomycin only", "Quinine", "Insulin"], answer: 0, explanation: "She solved penicillin's structure." },
    ],
    trueFalse: [
      { statement: "Hodgkin won the Nobel Prize in Chemistry.", answer: true, explanation: "She won in 1964." },
      { statement: "X-ray crystallography directly photographs atoms like a normal camera.", answer: false, explanation: "It reconstructs structure from diffraction." },
      { statement: "Hodgkin worked on insulin for decades.", answer: true, explanation: "The insulin project lasted more than thirty years." },
    ],
    shortAnswer: [
      { question: "Why did penicillin's structure matter?", modelAnswer: "It confirmed the beta-lactam ring and helped chemists understand and develop antibiotics.", marks: 4 },
      { question: "State Bragg's law.", modelAnswer: "n lambda equals 2 d sin theta; it describes constructive diffraction from crystal planes.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain Hodgkin's importance to structural biology.", modelAnswer: "Hodgkin showed that X-ray crystallography could solve medically important complex molecules. Penicillin, vitamin B12 and insulin connected atomic structure to biological function and drug action. Her work required chemistry, mathematics, instrumentation, computing and teamwork, making her a central builder of molecular structural science.", marks: 12 },
    ],
  },
};
