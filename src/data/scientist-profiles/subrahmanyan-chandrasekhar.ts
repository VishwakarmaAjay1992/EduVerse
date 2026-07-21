import type { ScientistProfile } from "./types";

export const subrahmanyanChandrasekhar: ScientistProfile = {
  slug: "subrahmanyan-chandrasekhar",
  seoDescription:
    "Subrahmanyan Chandrasekhar used quantum mechanics, relativity and mathematics to explain white dwarfs, stellar structure, radiative transfer and black holes.",
  timeline: [
    { year: "1910", title: "Born in Lahore", description: "Subrahmanyan Chandrasekhar is born on 19 October in British India." },
    { year: "1928", title: "Studies in Madras", description: "He studies physics at Presidency College, Madras." },
    { year: "1930", title: "Voyage to Cambridge", description: "While sailing to England, he begins calculations on relativistic white dwarfs.", pivotal: true },
    { year: "1931", title: "White dwarf mass limit", description: "He publishes work leading to the Chandrasekhar limit.", pivotal: true },
    { year: "1935", title: "Eddington criticism", description: "Arthur Eddington publicly rejects the mass-limit conclusion, causing a major setback.", pivotal: true },
    { year: "1937", title: "Moves to Chicago", description: "Chandrasekhar begins a long career at the University of Chicago." },
    { year: "1950", title: "Radiative Transfer", description: "He publishes a major monograph on radiation in stellar atmospheres." },
    { year: "1983", title: "Nobel Prize", description: "He shares the Nobel Prize in Physics for theoretical studies of stellar structure and evolution.", pivotal: true },
    { year: "1995", title: "Dies in Chicago", description: "Chandrasekhar dies on 21 August." },
  ],
  earlyLifeDetail: {
    childhood: "Chandrasekhar grew up in an educated family that valued music, mathematics and science. His uncle C. V. Raman's Nobel-level example showed that Indian scientists could work at the highest level.",
    family: "His father was a government official and his mother was intellectually active and supportive. The family environment encouraged disciplined study.",
    education: "He studied in Madras, read advanced physics early and moved to Cambridge just as quantum mechanics and relativity were reshaping astrophysics.",
    difficulties: "He faced racial and colonial barriers, isolation in Britain and the painful authority of Eddington's public opposition.",
    finances: "Scholarships and academic posts supported his research, followed by a stable career in Chicago.",
    personalLife: "He married Lalitha Doraiswamy, who became his lifelong partner through major moves and professional challenges.",
    influences: "Fowler's white dwarf work, Fermi-Dirac statistics, relativity, Eddington's stellar physics and Raman's example shaped him.",
    booksRead: "He mastered advanced texts in statistical mechanics, relativity, astrophysics, hydrodynamics and mathematical physics.",
    teachersAndMentors: "R. H. Fowler at Cambridge influenced his early white dwarf work, though Chandrasekhar's conclusions went beyond existing expectations.",
    stories: ["He began the mass-limit calculation on a ship.", "Eddington's criticism delayed acceptance.", "He often entered a field, wrote a definitive book, then moved to another."],
  },
  turningPoints: ["The Cambridge voyage gave time for the white dwarf calculation.", "Eddington's attack forced him to rebuild confidence and direction.", "Chicago provided intellectual independence.", "The Nobel Prize confirmed the importance of work first resisted decades earlier."],
  failures: ["His early white dwarf conclusions were rejected by Eddington and many listeners.", "Recognition of the limit took decades.", "Some of his work was so mathematically demanding that it reached specialists before general audiences."],
  studentLessons: ["Correct mathematics may need patience when authority resists it.", "A career can be built by mastering hard fields deeply.", "Microscopic physics can determine cosmic outcomes."],
  discoveries: [
    { name: "Chandrasekhar limit", period: "1930s", background: "White dwarfs are supported by electron degeneracy pressure.", problem: "Is there a maximum mass above which a white dwarf cannot remain stable?", method: "He combined Fermi-Dirac statistics, special relativity and stellar equilibrium.", discovery: "A white dwarf above about 1.4 solar masses must collapse further.", importance: "This became central to supernovae, neutron stars and black holes.", modernApplications: ["Stellar evolution", "Type Ia supernovae", "Cosmology", "Compact-object astrophysics"] },
    { name: "Mathematical astrophysics program", period: "1940s-1980s", background: "Astrophysics required precise theory for radiation, fluids, stability and relativity.", problem: "How can complex astronomical systems be treated with rigorous mathematics?", method: "Chandrasekhar developed monographs and technical papers field by field.", discovery: "He advanced radiative transfer, stellar dynamics, hydrodynamic stability and black-hole theory.", importance: "He helped define modern theoretical astrophysics.", modernApplications: ["Radiative-transfer codes", "Black-hole physics", "Stellar atmospheres", "Plasma astrophysics"] },
  ],
  works: [
    { title: "The Maximum Mass of Ideal White Dwarfs", year: "1931", kind: "Paper", description: "Early paper establishing the mass-limit idea." },
    { title: "An Introduction to the Study of Stellar Structure", year: "1939", kind: "Book", description: "Major synthesis of stellar structure theory." },
    { title: "Radiative Transfer", year: "1950", kind: "Book", description: "Classic monograph on radiation transport." },
    { title: "The Mathematical Theory of Black Holes", year: "1983", kind: "Book", description: "A rigorous treatment of black-hole solutions and perturbations." },
  ],
  equations: [
    {
      name: "Chandrasekhar limit",
      latex: "M_{Ch}\\approx1.4M_{\\odot}",
      explanation: "A carbon-oxygen white dwarf above roughly 1.4 solar masses cannot be supported by electron degeneracy pressure.",
      variables: [{ symbol: "M_{Ch}", meaning: "Chandrasekhar limiting mass" }, { symbol: "M_{\\odot}", meaning: "mass of the Sun" }],
      workedExample: { problem: "Can a 1.8 solar mass white dwarf remain stable by ordinary electron degeneracy pressure?", steps: [{ text: "Compare to the limit.", latex: "1.8M_{\\odot}>1.4M_{\\odot}" }], answer: "No; it exceeds the simplified Chandrasekhar limit." },
      modernUse: "Central to Type Ia supernovae and compact-star theory.",
    },
    {
      name: "Hydrostatic equilibrium",
      latex: "\\frac{dP}{dr}=-\\frac{Gm(r)\\rho(r)}{r^2}",
      explanation: "Pressure gradients inside a star balance gravity.",
      variables: [{ symbol: "P", meaning: "pressure" }, { symbol: "r", meaning: "radius" }, { symbol: "m(r)", meaning: "mass inside radius r" }, { symbol: "\\rho(r)", meaning: "density" }],
      workedExample: { problem: "What sign is dP/dr inside a star?", steps: [{ text: "The right side is negative for positive mass and density." }], answer: "Pressure decreases outward." },
      modernUse: "Basic equation in stellar-structure models.",
    },
  ],
  connections: [
    { field: "Physics", description: "His work joins quantum mechanics, relativity and gravitation." },
    { field: "Astronomy", description: "The Chandrasekhar limit explains compact stars and stellar death." },
    { field: "Mathematics", description: "He used rigorous analysis, differential equations and stability theory." },
  ],
  historicalContext: { worldEvents: "His career began under British colonial rule and developed through twentieth-century astrophysics.", politics: "Colonial and racial hierarchies shaped his early experience in Britain.", wars: "World War II and the Cold War affected scientific institutions and astrophysics funding.", universities: "Cambridge and Chicago formed the two main institutional settings.", scientificCommunity: "Eddington, Fowler, Fermi, Bethe and later relativists formed the context.", technology: "Spectroscopy, observatories, nuclear physics and later X-ray astronomy expanded the relevance of his work." },
  backlash: [
    { type: "Academic conflict", title: "Eddington opposition", description: "Arthur Eddington publicly rejected Chandrasekhar's white dwarf limit in 1935.", status: "Verified" },
    { type: "Discrimination", title: "Colonial scientific hierarchy", description: "As a young Indian scientist in Britain, he worked within unequal imperial academic structures.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Professional", description: "A senior authority's public criticism slowed acceptance of his result." },
    { category: "Scientific", description: "The work required combining quantum statistics and relativity." },
    { category: "Social", description: "He navigated racial and colonial barriers in elite science." },
    { category: "Personal", description: "The controversy was painful but did not end his productivity." },
  ],
  achievements: [
    { title: "Fellow of the Royal Society", year: "1944", description: "Major scientific recognition." },
    { title: "Nobel Prize in Physics", year: "1983", description: "Awarded for theoretical studies of stellar structure and evolution." },
    { title: "Chandra X-ray Observatory namesake", year: "1999", description: "NASA named a major space observatory in his honour." },
    { title: "National Medal of Science", year: "1966", description: "United States recognition for scientific contribution." },
  ],
  funFacts: ["C. V. Raman was his uncle.", "He edited The Astrophysical Journal for many years.", "He wrote major books in several different fields.", "His Nobel recognized work first developed when he was very young."],
  didYouKnow: [
    { title: "A shipboard calculation", content: "The white dwarf limit began during his voyage to Cambridge." },
    { title: "Small physics, huge stars", content: "Electron quantum behavior determines stellar fate." },
    { title: "Chandra in space", content: "NASA's Chandra Observatory studies high-energy cosmic objects." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Subrahmanyan Chandrasekhar with star diagrams, white dwarf mass curve, black-hole equations and observatory imagery." },
    { category: "Scientific diagram", prompt: "White dwarf mass-radius diagram showing the Chandrasekhar limit and collapse threshold." },
    { category: "Timeline infographic", prompt: "Chandrasekhar timeline from Lahore and Madras to Cambridge, Chicago and Nobel Prize." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Subrahmanyan Chandrasekhar.", suggestedSource: "Wikimedia Commons: Chandra.harvard.500pix.jpg" },
    { slot: "Notebooks", caption: "White dwarf mass-limit calculations or manuscript pages.", suggestedSource: "University of Chicago archives" },
    { slot: "Instruments", caption: "Chandra X-ray Observatory or astrophysics imagery.", suggestedSource: "NASA Chandra X-ray Center" },
    { slot: "Historic location", caption: "University of Chicago or Cambridge setting associated with Chandrasekhar.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "cv-raman", name: "C. V. Raman", reason: "Raman was Chandrasekhar's uncle and an Indian Nobel physics predecessor." },
    { slug: "albert-einstein", name: "Albert Einstein", reason: "Relativity is essential to the white dwarf limit and black-hole theory." },
    { slug: "isaac-newton", name: "Isaac Newton", reason: "Stellar equilibrium still rests on gravity and mechanics." },
  ],
  relatedTopics: [
    { title: "Gravity", href: "/subjects/physics/gravity", description: "Stellar collapse is a gravitational problem." },
    { title: "Quantum Physics", href: "/subjects/physics/quantum-physics", description: "Electron degeneracy pressure is quantum mechanical." },
    { title: "Astronomy", href: "/subjects/physics/astronomy", description: "The Chandrasekhar limit shapes stellar evolution." },
  ],
  quotes: [
    { text: "Science is a perception of the world around us.", source: "Chandrasekhar, widely quoted", status: "Widely attributed" },
    { text: "The pursuit of science has often been compared to the scaling of mountains.", source: "Truth and Beauty, paraphrased theme", status: "Paraphrase" },
    { text: "Beauty is that to which the human mind responds at its deepest and most profound.", source: "Truth and Beauty, widely cited", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What does the Chandrasekhar limit describe?", options: ["Maximum mass of a white dwarf", "Minimum computer memory", "DNA pitch", "Chimpanzee group size"], answer: 0, explanation: "It is the mass limit for white dwarf stability." },
      { question: "Who publicly opposed his early result?", options: ["Arthur Eddington", "Charles Babbage", "Louis Leakey", "Theon"], answer: 0, explanation: "Eddington rejected the conclusion in 1935." },
      { question: "Which observatory is named after him?", options: ["Chandra X-ray Observatory", "Kepler only", "Hubble only", "Bombe Observatory"], answer: 0, explanation: "NASA's Chandra X-ray Observatory honours him." },
    ],
    trueFalse: [
      { statement: "The Chandrasekhar limit combines quantum mechanics and relativity.", answer: true, explanation: "Both are needed for the result." },
      { statement: "His white dwarf work was instantly accepted without criticism.", answer: false, explanation: "It met strong resistance." },
      { statement: "He won the Nobel Prize in Physics.", answer: true, explanation: "He shared the 1983 Nobel Prize." },
    ],
    shortAnswer: [
      { question: "Why is the Chandrasekhar limit important?", modelAnswer: "It explains why white dwarfs above a critical mass collapse, connecting to supernovae and compact objects.", marks: 5 },
      { question: "What made Eddington's criticism significant?", modelAnswer: "Eddington was highly authoritative, so his public rejection delayed acceptance and affected Chandrasekhar's career.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Chandrasekhar's contribution to astrophysics.", modelAnswer: "Chandrasekhar showed that electron degeneracy pressure cannot support a white dwarf above about 1.4 solar masses when relativity is included. This connected quantum physics to stellar evolution and opened the path to understanding supernovae, neutron stars and black holes. He later built rigorous theories of radiative transfer, stellar dynamics and black holes, making mathematical astrophysics a central discipline.", marks: 12 },
    ],
  },
};
