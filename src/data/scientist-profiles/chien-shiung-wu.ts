import type { ScientistProfile } from "./types";

export const chienShiungWu: ScientistProfile = {
  slug: "chien-shiung-wu",
  seoDescription: "Chien-Shiung Wu designed the cobalt-60 experiment that proved parity violation in weak interactions, transforming modern particle physics.",
  timeline: [
    { year: "1912", title: "Born in Liuhe", description: "Chien-Shiung Wu is born in Jiangsu, China." },
    { year: "1936", title: "Moves to the United States", description: "She begins graduate study in physics at Berkeley." },
    { year: "1944", title: "Columbia University", description: "Wu joins Columbia and works on nuclear physics and wartime research." },
    { year: "1956", title: "Parity test proposed", description: "Lee and Yang ask whether parity is conserved in weak interactions." },
    { year: "1957", title: "Wu experiment", description: "Wu's cobalt-60 experiment demonstrates parity violation.", pivotal: true },
    { year: "1957", title: "Nobel controversy", description: "Lee and Yang receive the Nobel Prize; Wu is not included." },
    { year: "1975", title: "National Medal of Science", description: "Wu receives one of the United States' highest science honours." },
    { year: "1997", title: "Dies", description: "Wu dies in New York." },
  ],
  earlyLifeDetail: {
    childhood: "Wu grew up in a family that strongly supported girls' education. Her father founded a school for girls, giving her a serious academic foundation.",
    family: "Her family's commitment to education helped her move through Chinese and later American scientific institutions.",
    education: "She studied in China before graduate work at Berkeley, where she trained in experimental nuclear physics.",
    difficulties: "She faced sexism, racism, immigration barriers and wartime separation from family.",
    finances: "Her career developed through graduate study, wartime work and university appointments.",
    personalLife: "She married physicist Luke Yuan and balanced family life with an intense research career.",
    influences: "Ernest Lawrence's Berkeley environment, Enrico Fermi's beta decay theory and Lee-Yang's symmetry question shaped her work.",
    booksRead: "Her work drew on nuclear physics, quantum mechanics, beta decay and experimental methods.",
    teachersAndMentors: "Emilio Segre and the Berkeley physics community influenced her graduate training.",
    stories: ["She was called the First Lady of Physics.", "Her experiment worked under extreme low-temperature conditions.", "Her result shocked physicists who assumed mirror symmetry."],
  },
  turningPoints: ["Moving to Berkeley opened advanced nuclear physics.", "Columbia gave her a base for precision experiments.", "The parity question became the decisive test of her skill.", "The Nobel omission made her a symbol of experimental credit."],
  failures: ["The Nobel Prize did not include her experiment.", "Early American institutions often limited women and Asian scientists.", "Her work is sometimes reduced to one experiment despite a broad nuclear-physics career."],
  studentLessons: ["A single careful experiment can overturn a deep assumption.", "Theory needs experimental test.", "Credit should include the people who make decisive evidence possible."],
  discoveries: [
    { name: "Parity violation", period: "1956-1957", background: "Physicists assumed mirror-reflected processes obeyed the same laws.", problem: "Is parity conserved in weak beta decay?", method: "Wu aligned cobalt-60 nuclei at very low temperature and measured electron emission directions.", discovery: "Electrons were emitted asymmetrically, proving parity violation.", importance: "The weak interaction was shown to distinguish left from right.", modernApplications: ["Particle physics", "Weak interaction theory", "Neutrino physics", "Symmetry testing"] },
    { name: "Precision beta decay", period: "1940s-1960s", background: "Beta decay was central to understanding weak interactions.", problem: "How do nuclei emit beta particles under controlled conditions?", method: "Wu developed exacting detector and source techniques.", discovery: "Her measurements improved nuclear beta decay theory.", importance: "They made weak-interaction physics more precise.", modernApplications: ["Nuclear medicine", "Radiation detection", "Particle experiments"] },
  ],
  works: [
    { title: "Experimental test of parity conservation in beta decay", year: "1957", kind: "Paper", description: "The landmark parity-violation experiment." },
    { title: "Beta decay research", year: "1940s-1960s", kind: "Project", description: "Precision experimental work on nuclear beta decay." },
    { title: "Beta Decay", year: "1965", kind: "Book", description: "Authoritative text coauthored with Steven Moszkowski." },
  ],
  equations: [
    { name: "Parity operation", latex: "P:\\ (x,y,z)\\rightarrow(-x,-y,-z)", explanation: "Parity reflects spatial coordinates through the origin, equivalent to mirror reversal plus rotation.", variables: [{ symbol: "P", meaning: "parity operation" }], workedExample: { problem: "Apply parity to (2,-1,3).", steps: [{ text: "Change each coordinate sign.", latex: "(2,-1,3)\\rightarrow(-2,1,-3)" }], answer: "(-2, 1, -3)." }, modernUse: "Used in quantum mechanics and particle physics." },
    { name: "Asymmetry idea", latex: "A=\\frac{N_+-N_-}{N_++N_-}", explanation: "Emission asymmetry can be represented by comparing counts in two directions.", variables: [{ symbol: "N_+", meaning: "count in one direction" }, { symbol: "N_-", meaning: "count in opposite direction" }], workedExample: { problem: "If counts are 600 and 400, find A.", steps: [{ text: "Substitute.", latex: "A=\\frac{600-400}{600+400}=0.2" }], answer: "A=0.2." }, modernUse: "Used broadly in experimental physics." },
  ],
  connections: [
    { field: "Physics", description: "Wu's experiment reshaped nuclear and particle physics." },
    { field: "Engineering", description: "The experiment required low-temperature apparatus and precise detectors." },
    { field: "Statistics", description: "Directional count asymmetries require careful statistical interpretation." },
  ],
  historicalContext: { worldEvents: "Wu's career crossed World War II, the Cold War and the rise of particle physics.", politics: "Chinese immigration, wartime research and gender barriers shaped her life.", wars: "World War II separated her from family and involved her in wartime physics.", universities: "Berkeley and Columbia were central institutions.", scientificCommunity: "Lee, Yang, Fermi and nuclear physicists formed the intellectual context.", technology: "Cryogenics, radiation detectors and nuclear sources made the experiment possible." },
  backlash: [
    { type: "Gender bias", title: "Nobel exclusion", description: "The theorists received the 1957 Nobel Prize, while Wu's decisive experiment was excluded.", status: "Verified" },
    { type: "Discrimination", title: "Barriers for women and immigrants", description: "Wu worked through racism and sexism in American science.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Women experimentalists often received less recognition than male theorists." },
    { category: "Scientific", description: "The cobalt experiment demanded extreme control." },
    { category: "Social", description: "She navigated immigration and racial barriers." },
  ],
  achievements: [
    { title: "Wolf Prize in Physics", year: "1978", description: "Major recognition for physics." },
    { title: "National Medal of Science", year: "1975", description: "United States science honour." },
    { title: "First woman president of the APS", year: "1975", description: "Leadership in the American Physical Society." },
  ],
  funFacts: ["Her nickname was the First Lady of Physics.", "She worked on the Manhattan Project.", "Her experiment overturned mirror symmetry.", "A U.S. postage stamp later honoured her."],
  didYouKnow: [
    { title: "Left and right", content: "Weak interactions can distinguish mirror images." },
    { title: "Cold experiment", content: "Cobalt nuclei had to be aligned at very low temperature." },
    { title: "Experiment mattered", content: "Without Wu's test, the theory would not have been established." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Chien-Shiung Wu beside cobalt-60 apparatus, beta rays and mirror-symmetry diagrams." },
    { category: "Scientific diagram", prompt: "Parity operation and beta emission asymmetry diagram for cobalt-60." },
    { category: "Timeline infographic", prompt: "Wu timeline from Liuhe to Berkeley, Columbia, parity experiment and honours." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Chien-Shiung Wu.", suggestedSource: "Wikimedia Commons: Chien-Shiung Wu in 1963.jpg" },
    { slot: "Laboratory", caption: "Columbia nuclear physics laboratory or parity experiment setting.", suggestedSource: "Columbia University archives" },
    { slot: "Instruments", caption: "Cobalt-60 parity experiment diagram or detector apparatus.", suggestedSource: "American Physical Society / Wikimedia Commons" },
    { slot: "Notebooks", caption: "Beta decay notes or experiment records.", suggestedSource: "Physics archives" },
  ],
  relatedScientists: [
    { slug: "lise-meitner", name: "Lise Meitner", reason: "Both transformed nuclear physics and faced credit problems." },
    { slug: "marie-curie", name: "Marie Curie", reason: "Both worked in radioactivity and nuclear science." },
    { slug: "abdus-salam", name: "Abdus Salam", reason: "Parity violation shaped the weak-interaction theory Salam later helped unify." },
  ],
  relatedTopics: [
    { title: "Nuclear Physics", href: "/subjects/physics/nuclear-physics", description: "Beta decay is a nuclear process." },
    { title: "Symmetry", href: "/subjects/mathematics/symmetry", description: "Parity is a physical symmetry." },
    { title: "Quantum Physics", href: "/subjects/physics/quantum-physics", description: "Weak interactions are quantum processes." },
  ],
  quotes: [
    { text: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes.", source: "Commonly attributed to Wu", status: "Widely attributed" },
    { text: "I wonder whether the tiny atoms and nuclei have any preference.", source: "Attributed to Wu on symmetry", status: "Widely attributed" },
    { text: "Science is not static.", source: "Attributed interview statement", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What did the Wu experiment prove?", options: ["Parity violation", "Jumping genes", "Cepheid distances", "Compiler translation"], answer: 0, explanation: "It showed parity is violated in weak decay." },
      { question: "Which isotope was central to the experiment?", options: ["Cobalt-60", "Uranium-235", "Carbon-14", "Hydrogen-1"], answer: 0, explanation: "Aligned cobalt-60 nuclei were used." },
      { question: "Which interaction violates parity?", options: ["Weak interaction", "Everyday friction", "Classical gravity only", "Ideal gas pressure"], answer: 0, explanation: "The weak interaction violates parity." },
    ],
    trueFalse: [
      { statement: "Wu shared the 1957 Nobel Prize.", answer: false, explanation: "She was not included." },
      { statement: "Her experiment required precise experimental control.", answer: true, explanation: "Low temperatures and alignment were essential." },
      { statement: "Parity is related to mirror symmetry.", answer: true, explanation: "Parity reverses spatial coordinates." },
    ],
    shortAnswer: [
      { question: "What is parity?", modelAnswer: "A spatial symmetry operation that reverses coordinates, related to mirror reflection.", marks: 4 },
      { question: "Why was Wu's experiment important?", modelAnswer: "It supplied decisive evidence that weak interactions do not conserve parity.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain how Wu changed particle physics.", modelAnswer: "Wu designed and carried out the cobalt-60 beta decay experiment that tested whether weak interactions conserve parity. By aligning nuclei at low temperature and measuring electron emission, she showed a directional asymmetry incompatible with mirror symmetry. This overturned a deep assumption and confirmed the Lee-Yang proposal, reshaping the theory of weak interactions.", marks: 12 },
    ],
  },
};
