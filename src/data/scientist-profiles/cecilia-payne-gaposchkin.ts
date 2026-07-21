import type { ScientistProfile } from "./types";

export const ceciliaPayneGaposchkin: ScientistProfile = {
  slug: "cecilia-payne-gaposchkin",
  seoDescription: "Cecilia Payne-Gaposchkin proved that stars are composed mostly of hydrogen and helium, transforming stellar astrophysics through spectroscopy.",
  timeline: [
    { year: "1900", title: "Born in England", description: "Cecilia Payne is born in Wendover, Buckinghamshire." },
    { year: "1919", title: "Cambridge studies", description: "She studies science at Cambridge but cannot receive a degree because she is a woman." },
    { year: "1923", title: "Moves to Harvard", description: "Payne joins Harvard College Observatory." },
    { year: "1925", title: "Stellar Atmospheres", description: "Her PhD thesis shows stars are mostly hydrogen and helium.", pivotal: true },
    { year: "1934", title: "Marries Sergei Gaposchkin", description: "They collaborate on variable-star research." },
    { year: "1956", title: "Harvard professor", description: "She becomes Harvard's first woman full professor and department chair.", pivotal: true },
    { year: "1979", title: "Dies", description: "Payne-Gaposchkin dies in Cambridge, Massachusetts." },
  ],
  earlyLifeDetail: {
    childhood: "Payne grew up curious and intellectually intense, drawn first to natural history and later to physics and astronomy.",
    family: "Her father died when she was young, and education became a route to independence.",
    education: "Cambridge trained her but denied women degrees. Harvard offered the path to a doctorate in astronomy.",
    difficulties: "She faced institutional sexism and pressure to soften her most important conclusion.",
    finances: "Scholarships and observatory work supported her move to the United States.",
    personalLife: "She married astronomer Sergei Gaposchkin and combined family life with a major research career.",
    influences: "Eddington's lectures, Meghnad Saha's ionization theory and Harvard spectroscopy shaped her work.",
    booksRead: "Her reading joined quantum theory, spectroscopy, stellar physics and observational catalogues.",
    teachersAndMentors: "Harlow Shapley supported her move to Harvard; Henry Norris Russell influenced how her thesis conclusion was presented.",
    stories: ["Her thesis has been called one of astronomy's greatest PhD theses.", "She was right about hydrogen despite being urged to soften the claim.", "She later led Harvard astronomy."],
  },
  turningPoints: ["Eddington's lecture drew her to astronomy.", "Harvard gave access to stellar spectra.", "Saha's ionization theory unlocked the data.", "Her 1925 thesis changed stellar chemistry."],
  failures: ["Her thesis conclusion was initially muted under senior pressure.", "Cambridge denied her a degree because she was a woman.", "Recognition came slower than the importance of the result deserved."],
  studentLessons: ["Use new theory to reinterpret old data.", "A surprising result may be true even if authorities resist it.", "Spectra are physical evidence, not just coloured lines."],
  discoveries: [
    { name: "Hydrogen-rich stellar composition", period: "1925", background: "Astronomers thought stars might have roughly Earth-like composition.", problem: "What are stars actually made of?", method: "Payne applied ionization theory to stellar absorption spectra.", discovery: "Stars are overwhelmingly hydrogen and helium.", importance: "This became fundamental to astrophysics.", modernApplications: ["Stellar evolution", "Cosmology", "Spectroscopy", "Exoplanet host-star studies"] },
    { name: "Variable-star research", period: "1930s-1960s", background: "Variable stars trace stellar structure and galactic populations.", problem: "How can large samples of variables be classified and understood?", method: "Payne-Gaposchkin and collaborators catalogued and analyzed variable stars.", discovery: "They expanded knowledge of stellar variability.", importance: "Variable stars became tools for astrophysics.", modernApplications: ["Distance scale", "Stellar populations", "Time-domain surveys"] },
  ],
  works: [
    { title: "Stellar Atmospheres", year: "1925", kind: "Book", description: "Doctoral thesis on stellar spectra and composition." },
    { title: "Stars of High Luminosity", year: "1930", kind: "Book", description: "Research on luminous stars." },
    { title: "Variable Stars", year: "1938", kind: "Book", description: "Major work with Sergei Gaposchkin." },
  ],
  equations: [
    { name: "Spectral line wavelength", latex: "E=\\frac{hc}{\\lambda}", explanation: "Light wavelength relates to photon energy.", variables: [{ symbol: "E", meaning: "photon energy" }, { symbol: "h", meaning: "Planck constant" }, { symbol: "c", meaning: "speed of light" }, { symbol: "\\lambda", meaning: "wavelength" }], workedExample: { problem: "What happens when wavelength is shorter?", steps: [{ text: "Energy increases because lambda is in the denominator." }], answer: "Shorter wavelength means higher photon energy." }, modernUse: "Spectroscopy and astrophysics." },
    { name: "Abundance ratio", latex: "R=\\frac{N_H}{N_{He}}", explanation: "A simple ratio compares numbers of hydrogen and helium atoms.", variables: [{ symbol: "N_H", meaning: "number of hydrogen atoms" }, { symbol: "N_{He}", meaning: "number of helium atoms" }], workedExample: { problem: "If NH=90 and NHe=9, find R.", steps: [{ text: "Divide.", latex: "R=\\frac{90}{9}=10" }], answer: "Hydrogen is ten times as numerous." }, modernUse: "Chemical abundance analysis." },
  ],
  connections: [
    { field: "Astronomy", description: "Her work defines stellar composition." },
    { field: "Physics", description: "Ionization and spectra depend on atomic physics." },
    { field: "Chemistry", description: "She identified cosmic chemical abundances." },
  ],
  historicalContext: { worldEvents: "Her career unfolded as quantum physics transformed astronomy.", politics: "Women were denied equal degrees and posts.", universities: "Cambridge excluded women from degrees; Harvard became her scientific home.", scientificCommunity: "Saha, Eddington, Shapley and Russell formed the context.", technology: "Spectrographs and photographic plates supplied data." },
  backlash: [
    { type: "Gender bias", title: "Cambridge degree exclusion", description: "Cambridge did not award women full degrees at the time.", status: "Verified" },
    { type: "Academic conflict", title: "Hydrogen conclusion resisted", description: "Her claim that stars are mostly hydrogen was initially treated as too surprising.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "She faced barriers to degrees, titles and recognition." },
    { category: "Scientific", description: "She had to reinterpret spectra with new atomic theory." },
    { category: "Professional", description: "Harvard recognition came slowly." },
  ],
  achievements: [
    { title: "First Harvard astronomy PhD", year: "1925", description: "One of the landmark doctorates in astrophysics." },
    { title: "First woman full professor at Harvard", year: "1956", description: "Major institutional milestone." },
    { title: "Henry Norris Russell Lectureship", year: "1976", description: "Major astronomy honour." },
  ],
  funFacts: ["Her thesis changed what we think stars are made of.", "She moved countries to become an astronomer.", "She studied huge numbers of variable stars.", "Her conclusion is now basic textbook astronomy."],
  didYouKnow: [
    { title: "Stars are not Earth-like", content: "Stars are mostly hydrogen and helium, not heavy elements." },
    { title: "A thesis with consequences", content: "Her PhD reshaped astrophysics." },
    { title: "Spectra as fingerprints", content: "Absorption lines reveal chemical composition." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Cecilia Payne-Gaposchkin with stellar spectra, hydrogen lines and Harvard Observatory plates." },
    { category: "Scientific diagram", prompt: "Stellar spectrum diagram showing absorption lines and hydrogen abundance." },
    { category: "Timeline infographic", prompt: "Payne-Gaposchkin timeline from Cambridge to Harvard thesis and professorship." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Cecilia Payne-Gaposchkin.", suggestedSource: "Wikimedia Commons" },
    { slot: "Laboratory", caption: "Harvard Observatory spectroscopy setting.", suggestedSource: "Harvard archives" },
    { slot: "Instruments", caption: "Spectrograph or photographic spectrum plate.", suggestedSource: "Astronomy archives" },
    { slot: "Notebooks", caption: "Stellar Atmospheres thesis or spectral notes.", suggestedSource: "Harvard University archives" },
  ],
  relatedScientists: [
    { slug: "henrietta-leavitt", name: "Henrietta Leavitt", reason: "Both transformed Harvard astronomy." },
    { slug: "subrahmanyan-chandrasekhar", name: "Subrahmanyan Chandrasekhar", reason: "Both used physics to explain stars." },
    { slug: "max-planck", name: "Max Planck", reason: "Quantum theory underlies spectral interpretation." },
  ],
  relatedTopics: [
    { title: "Light", href: "/subjects/physics/light", description: "Spectra are light split by wavelength." },
    { title: "Atoms", href: "/subjects/chemistry/atomic-structure", description: "Spectral lines come from atoms." },
    { title: "Astronomy", href: "/subjects/physics/astronomy", description: "Her result is central to stellar astronomy." },
  ],
  quotes: [
    { text: "The reward of the young scientist is the emotional thrill of being the first person in the history of the world to see something.", source: "Payne-Gaposchkin, widely quoted", status: "Verified" },
    { text: "Your reward will be the widening of the horizon.", source: "Attributed to Payne-Gaposchkin", status: "Widely attributed" },
    { text: "Hydrogen is overwhelmingly abundant in stellar atmospheres.", source: "Summary of Stellar Atmospheres", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "What did Payne-Gaposchkin show?", options: ["Stars are mostly hydrogen and helium", "Genes jump", "Fossils are recent", "Parity is conserved"], answer: 0, explanation: "Her thesis established stellar composition." },
      { question: "What evidence did she use?", options: ["Stellar spectra", "Corn kernels", "Compiler logs", "Chimpanzee tools"], answer: 0, explanation: "She interpreted absorption spectra." },
      { question: "Where did she build her career?", options: ["Harvard", "Cold Spring Harbor", "Lyme Regis", "Trieste only"], answer: 0, explanation: "Harvard Observatory was her main institution." },
    ],
    trueFalse: [
      { statement: "Cambridge awarded her a full degree at the time.", answer: false, explanation: "Women were denied full Cambridge degrees." },
      { statement: "Her hydrogen conclusion was initially resisted.", answer: true, explanation: "It seemed too surprising to senior astronomers." },
      { statement: "Spectroscopy links light to chemical composition.", answer: true, explanation: "Absorption lines reveal atoms." },
    ],
    shortAnswer: [
      { question: "Why was her thesis important?", modelAnswer: "It showed that stars are composed mostly of hydrogen and helium, changing stellar astrophysics.", marks: 5 },
      { question: "What role did ionization theory play?", modelAnswer: "It explained how temperature affects spectral lines, allowing abundance estimates.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Payne-Gaposchkin's contribution to astrophysics.", modelAnswer: "Payne-Gaposchkin applied ionization theory to stellar spectra and showed that stars are overwhelmingly hydrogen and helium. This overturned the assumption of Earth-like stellar composition and made atomic physics central to astronomy. Her thesis helped create modern astrophysics by connecting observed spectra to physical conditions and chemical abundances in stars.", marks: 12 },
    ],
  },
};
