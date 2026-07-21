import type { ScientistProfile } from "./types";

export const abdusSalam: ScientistProfile = {
  slug: "abdus-salam",
  seoDescription: "Abdus Salam shared the 1979 Nobel Prize for electroweak unification and built institutions for theoretical physics in developing countries.",
  timeline: [
    { year: "1926", title: "Born in Jhang", description: "Abdus Salam is born in Punjab, British India." },
    { year: "1946", title: "Cambridge scholarship", description: "He goes to Cambridge after brilliant studies in Lahore." },
    { year: "1951", title: "Returns to Pakistan", description: "Salam teaches and works to build physics education." },
    { year: "1957", title: "Imperial College", description: "He becomes professor of theoretical physics in London." },
    { year: "1964", title: "ICTP founded", description: "Salam founds the International Centre for Theoretical Physics.", pivotal: true },
    { year: "1968", title: "Electroweak theory", description: "He presents a unified theory of weak and electromagnetic interactions.", pivotal: true },
    { year: "1979", title: "Nobel Prize", description: "Salam shares the Nobel Prize in Physics with Glashow and Weinberg.", pivotal: true },
    { year: "1996", title: "Dies", description: "Salam dies in Oxford." },
  ],
  earlyLifeDetail: {
    childhood: "Salam showed extraordinary mathematical ability as a student in Punjab and became a symbol of intellectual possibility for a newly independent region.",
    family: "He came from a modest but education-focused family in Jhang.",
    education: "Government College Lahore and Cambridge gave him a path into world theoretical physics.",
    difficulties: "He faced religious discrimination in Pakistan as an Ahmadi Muslim and the challenge of building science across unequal global systems.",
    finances: "Scholarships were crucial to his international education.",
    personalLife: "Salam maintained strong cultural and religious identity while working in global physics institutions.",
    influences: "Dirac, quantum field theory, gauge symmetry and the dream of unification shaped his work.",
    booksRead: "His research world included quantum mechanics, group theory, field theory and particle physics.",
    teachersAndMentors: "Cambridge theoretical physics shaped his mathematical style.",
    stories: ["He wore traditional dress to receive the Nobel Prize.", "He founded ICTP to support scientists from poorer countries.", "His gravestone in Pakistan became politically contested."],
  },
  turningPoints: ["Cambridge connected him to advanced theoretical physics.", "Imperial College gave him a major research base.", "ICTP turned his global science ideals into an institution.", "The Nobel Prize confirmed electroweak theory."],
  failures: ["Religious politics strained his relationship with Pakistan.", "Scientific infrastructure in developing countries remained difficult to build.", "His public memory has sometimes been distorted by sectarian prejudice."],
  studentLessons: ["Symmetry can unify apparently different forces.", "Science needs institutions, not just individuals.", "Global talent is wasted when opportunity is unequal."],
  discoveries: [
    { name: "Electroweak unification", period: "1960s", background: "Electromagnetism and weak nuclear interactions seemed distinct.", problem: "Could they be described by one gauge theory?", method: "Salam used quantum field theory, gauge symmetry and spontaneous symmetry breaking.", discovery: "He helped formulate a unified electroweak theory with massive weak bosons and the photon.", importance: "It became a pillar of the Standard Model.", modernApplications: ["Particle physics", "Collider experiments", "Higgs physics", "Standard Model calculations"] },
    { name: "Science institution building", period: "1960s onward", background: "Scientists in developing countries often lacked access to advanced research networks.", problem: "How could theoretical physicists remain connected globally?", method: "Salam founded ICTP as a centre for research and training.", discovery: "ICTP became a model for international scientific support.", importance: "It broadened participation in theoretical science.", modernApplications: ["Scientific training", "International research networks", "Physics education"] },
  ],
  works: [
    { title: "Weak and electromagnetic interactions", year: "1968", kind: "Paper", description: "Salam's presentation of electroweak unification." },
    { title: "ICTP", year: "1964", kind: "Project", description: "International Centre for Theoretical Physics." },
    { title: "Gauge theory research", year: "1950s-1980s", kind: "Project", description: "Research on symmetries and particle physics." },
  ],
  equations: [
    { name: "Electroweak symmetry", latex: "SU(2)_L\\times U(1)_Y", explanation: "The gauge symmetry structure of the electroweak theory.", variables: [{ symbol: "SU(2)_L", meaning: "weak isospin symmetry" }, { symbol: "U(1)_Y", meaning: "weak hypercharge symmetry" }], workedExample: { problem: "What does the expression represent?", steps: [{ text: "It names the symmetry groups used in the unified theory." }], answer: "The mathematical symmetry behind electroweak interactions." }, modernUse: "Standard Model particle physics." },
    { name: "Mass-energy scale", latex: "E=mc^2", explanation: "Particle masses and high-energy experiments are compared through mass-energy equivalence.", variables: [{ symbol: "E", meaning: "energy" }, { symbol: "m", meaning: "mass" }, { symbol: "c", meaning: "speed of light" }], workedExample: { problem: "Why do colliders need high energy?", steps: [{ text: "Energy can create massive particles." }], answer: "Higher energy probes heavier particles and shorter distances." }, modernUse: "Collider physics." },
  ],
  connections: [
    { field: "Physics", description: "Electroweak theory is fundamental particle physics." },
    { field: "Mathematics", description: "Gauge theory uses symmetry groups and field equations." },
    { field: "Engineering", description: "Particle accelerators test electroweak predictions." },
  ],
  historicalContext: { worldEvents: "Salam worked during decolonization, the Cold War and the rise of big-science particle physics.", politics: "Pakistani religious politics affected his public memory.", universities: "Lahore, Cambridge, Imperial College and ICTP shaped his career.", scientificCommunity: "Glashow, Weinberg, Higgs, Yang-Mills theory and CERN experiments formed the context.", technology: "Particle accelerators and detectors confirmed electroweak theory." },
  backlash: [
    { type: "Discrimination", title: "Religious discrimination", description: "As an Ahmadi Muslim, Salam faced exclusion and political hostility in Pakistan.", status: "Verified" },
    { type: "Political pressure", title: "Science and national identity", description: "His legacy has been affected by sectarian politics.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Political", description: "Religious law and national politics affected his recognition." },
    { category: "Scientific", description: "Unification required advanced gauge theory." },
    { category: "Professional", description: "He balanced research with institution building." },
    { category: "Social", description: "He argued for global scientific opportunity." },
  ],
  achievements: [
    { title: "Nobel Prize in Physics", year: "1979", description: "Shared for electroweak theory." },
    { title: "ICTP founder", year: "1964", description: "Built a major international physics centre." },
    { title: "Royal Society Fellowship", year: "1959", description: "Recognition by the Royal Society." },
  ],
  funFacts: ["He was Pakistan's first Nobel laureate in science.", "He carried his Nobel medal to honour his old teacher.", "ICTP is in Trieste, Italy.", "The W and Z bosons confirmed electroweak theory experimentally."],
  didYouKnow: [
    { title: "One force at high energy", content: "Electromagnetism and weak interaction unify at high energies." },
    { title: "Institution builder", content: "Salam treated access to science as a global justice issue." },
    { title: "Standard Model", content: "Electroweak theory is one of its central pillars." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Abdus Salam with gauge symmetry diagrams, particle tracks and ICTP lecture hall background." },
    { category: "Scientific diagram", prompt: "Electroweak unification diagram showing photon, W and Z bosons from symmetry breaking." },
    { category: "Timeline infographic", prompt: "Abdus Salam timeline from Jhang to Cambridge, ICTP and Nobel Prize." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Abdus Salam.", suggestedSource: "Wikimedia Commons: Abdus Salam 1987.jpg" },
    { slot: "University", caption: "ICTP or Imperial College setting.", suggestedSource: "ICTP archives" },
    { slot: "Notebooks", caption: "Gauge theory notes or electroweak lecture material.", suggestedSource: "Physics archives" },
    { slot: "Instruments", caption: "Particle detector or Standard Model diagram.", suggestedSource: "CERN / Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "chien-shiung-wu", name: "Chien-Shiung Wu", reason: "Parity violation shaped weak-interaction theory." },
    { slug: "albert-einstein", name: "Albert Einstein", reason: "Both pursued unifying principles in physics." },
    { slug: "max-planck", name: "Max Planck", reason: "Quantum theory underlies particle physics." },
  ],
  relatedTopics: [
    { title: "Quantum Physics", href: "/subjects/physics/quantum-physics", description: "Electroweak theory is quantum field theory." },
    { title: "Forces", href: "/subjects/physics/types-of-forces", description: "Weak and electromagnetic forces are fundamental interactions." },
    { title: "Symmetry", href: "/subjects/mathematics/symmetry", description: "Gauge symmetry organizes the theory." },
  ],
  quotes: [
    { text: "Scientific thought is the common heritage of mankind.", source: "Abdus Salam, widely quoted", status: "Verified" },
    { text: "The creation of physics is the shared heritage of all mankind.", source: "Abdus Salam, paraphrase of public addresses", status: "Paraphrase" },
    { text: "No nation can afford to be without science.", source: "Attributed to Salam", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What theory is Salam known for?", options: ["Electroweak unification", "Cepheid law", "Jumping genes", "Fossil reptiles"], answer: 0, explanation: "He shared the Nobel Prize for electroweak theory." },
      { question: "What institution did he found?", options: ["ICTP", "Harvard Observatory", "Cold Spring Harbor", "Bletchley Park"], answer: 0, explanation: "He founded the International Centre for Theoretical Physics." },
      { question: "Which particles carry the weak force?", options: ["W and Z bosons", "Cepheids", "Transposons", "Ammonites"], answer: 0, explanation: "W and Z bosons mediate weak interactions." },
    ],
    trueFalse: [
      { statement: "Salam shared the 1979 Nobel Prize in Physics.", answer: true, explanation: "He shared it with Glashow and Weinberg." },
      { statement: "Electroweak theory is unrelated to the Standard Model.", answer: false, explanation: "It is central to it." },
      { statement: "Salam worked to support scientists in developing countries.", answer: true, explanation: "ICTP was built for that mission." },
    ],
    shortAnswer: [
      { question: "What does electroweak unification mean?", modelAnswer: "It means electromagnetic and weak interactions are different low-energy forms of one unified gauge theory.", marks: 5 },
      { question: "Why was ICTP important?", modelAnswer: "It gave scientists from developing countries access to advanced research networks and training.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Salam's scientific and social legacy.", modelAnswer: "Salam helped formulate electroweak theory, showing that electromagnetism and the weak interaction emerge from one gauge framework. This became a core part of the Standard Model and was confirmed by the discovery of W and Z bosons. Beyond research, Salam founded ICTP to reduce global inequality in science, making his legacy both theoretical and institutional.", marks: 12 },
    ],
  },
};
