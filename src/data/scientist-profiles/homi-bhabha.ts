import type { ScientistProfile } from "./types";

export const homiBhabha: ScientistProfile = {
  slug: "homi-bhabha",
  seoDescription:
    "Homi J. Bhabha contributed to quantum electrodynamics and cosmic-ray shower theory, then built India's major institutions for fundamental physics and atomic energy.",
  timeline: [
    { year: "1909", title: "Born in Bombay", description: "Homi Jehangir Bhabha is born on 30 October into a prominent Parsi family." },
    { year: "1927", title: "Cambridge engineering", description: "He goes to Cambridge to study engineering, under family expectations, while physics increasingly draws him." },
    { year: "1930", title: "Turns to theoretical physics", description: "With family agreement, Bhabha shifts from engineering toward mathematics and physics.", pivotal: true },
    { year: "1935", title: "Bhabha scattering", description: "He publishes work on electron-positron scattering, important for quantum electrodynamics.", pivotal: true },
    { year: "1937", title: "Bhabha-Heitler cascade theory", description: "With Walter Heitler, he explains cosmic-ray showers through electromagnetic cascades.", pivotal: true },
    { year: "1939", title: "War keeps him in India", description: "World War II prevents his return to Cambridge, redirecting him toward Indian institution-building." },
    { year: "1945", title: "TIFR founded", description: "Bhabha founds the Tata Institute of Fundamental Research in Bombay.", pivotal: true },
    { year: "1948", title: "Atomic Energy Commission", description: "He becomes the first chair of India's Atomic Energy Commission." },
    { year: "1954", title: "Atomic energy establishment", description: "Bhabha leads the creation of the Trombay atomic energy establishment, later named for him." },
    { year: "1966", title: "Dies in air crash", description: "Bhabha dies on 24 January in an Air India crash near Mont Blanc." },
  ],
  earlyLifeDetail: {
    childhood: "Bhabha grew up in a wealthy, cosmopolitan Bombay family with access to books, art, music and elite education. His later institution-building retained this broad cultural confidence.",
    family: "His family belonged to the Parsi elite and had connections with law, commerce and public life. This gave him social access that later helped him negotiate with industrialists and political leaders.",
    education: "At Cambridge he studied engineering first, then theoretical physics. He entered physics during the explosive growth of quantum mechanics, positron theory and cosmic-ray research.",
    difficulties: "Bhabha had to persuade a newly independent country to invest in long-term fundamental research despite poverty, partition and urgent development needs.",
    finances: "His early privilege helped his education, while later institutions depended on Tata support and state funding.",
    personalLife: "Bhabha never married. He was known for art, architecture and music as well as physics, and he shaped the aesthetic culture of his institutions.",
    influences: "Dirac's relativistic quantum theory, cosmic-ray observations, Cambridge physics and Jawaharlal Nehru's developmental vision all shaped him.",
    booksRead: "His reading centred on quantum mechanics, relativity, nuclear physics, cosmic rays and later policy documents on energy and development.",
    teachersAndMentors: "Paul Dirac and the Cambridge theoretical environment were crucial scientific influences; Nehru became a political ally.",
    stories: ["World War II accidentally made him an Indian institution-builder.", "He believed first-rate science required first-rate architecture, libraries and art.", "The Trombay atomic centre was renamed Bhabha Atomic Research Centre after his death."],
  },
  turningPoints: ["Switching from engineering to physics defined his scientific life.", "The positron and cosmic-ray problems gave him an international research profile.", "War kept him in India at the decisive moment.", "TIFR turned his scientific vision into an institution.", "Leadership of atomic energy tied fundamental physics to national policy."],
  failures: ["Bhabha scattering was not a technological invention but is sometimes overshadowed by his administrative role.", "India's nuclear programme carried ethical and geopolitical tensions.", "His top-down institutional style depended heavily on elite political access.", "His early death left unfinished plans."],
  studentLessons: ["Institutions are scientific instruments at national scale.", "Theory can guide invisible high-energy processes.", "Scientific ambition needs political and financial architecture.", "Pure and applied science often grow together."],
  discoveries: [
    { name: "Bhabha scattering", period: "1935", background: "Dirac's theory predicted positrons, and electron-positron interactions needed relativistic quantum treatment.", problem: "How do electrons and positrons scatter according to quantum electrodynamics?", method: "Bhabha calculated the scattering cross-section using relativistic quantum theory.", discovery: "He described electron-positron scattering, now called Bhabha scattering.", importance: "It became a standard process for testing QED and calibrating particle colliders.", modernApplications: ["Particle physics", "Collider luminosity measurements", "Quantum electrodynamics tests", "Detector calibration"] },
    { name: "Cosmic-ray cascade theory", period: "1937", background: "Cosmic rays produced showers of secondary particles in the atmosphere and detectors.", problem: "How can high-energy particles multiply into cascades?", method: "Bhabha and Heitler applied pair production and bremsstrahlung processes.", discovery: "Electromagnetic showers arise from repeated photon and electron-positron interactions.", importance: "The theory connected cosmic rays to particle physics.", modernApplications: ["Calorimeters", "Astroparticle physics", "Radiation shielding", "Air-shower observatories"] },
    { name: "Indian atomic-science institution building", period: "1945-1960s", background: "Independent India needed scientific infrastructure in advanced fields.", problem: "How could India build capacity in fundamental physics and atomic energy?", method: "Bhabha combined Tata philanthropy, state support, recruitment and long-term planning.", discovery: "This was institutional rather than a single discovery: TIFR and atomic-energy agencies created a durable research ecosystem.", importance: "It shaped Indian physics, nuclear science and technical education.", modernApplications: ["Research policy", "Nuclear energy planning", "Scientific education", "Big-science administration"] },
  ],
  works: [
    { title: "The Scattering of Positrons by Electrons", year: "1935", kind: "Paper", description: "The paper associated with Bhabha scattering." },
    { title: "The Passage of Fast Electrons and the Theory of Cosmic Showers", year: "1937", kind: "Paper", description: "Bhabha and Heitler's cascade-theory work." },
    { title: "Tata Institute of Fundamental Research", year: "1945", kind: "Project", description: "A premier Indian institute for mathematics, physics and later computer science." },
    { title: "Indian Atomic Energy Programme", year: "1948-1966", kind: "Project", description: "A national programme for atomic research and energy policy." },
  ],
  equations: [
    { name: "Relativistic energy", latex: "E^2=(pc)^2+(mc^2)^2", explanation: "High-energy particle physics uses the relativistic relation between energy, momentum and mass.", variables: [{ symbol: "E", meaning: "energy" }, { symbol: "p", meaning: "momentum" }, { symbol: "m", meaning: "rest mass" }, { symbol: "c", meaning: "speed of light" }], workedExample: { problem: "For a photon with m=0, what relation remains?", steps: [{ text: "Set mass to zero.", latex: "E^2=(pc)^2" }, { text: "Take positive root.", latex: "E=pc" }], answer: "For a photon, E = pc." }, modernUse: "Used throughout particle physics and cosmic-ray analysis." },
    { name: "Mean free path", latex: "\\lambda=\\frac{1}{n\\sigma}", explanation: "A particle's average distance before interaction depends on target density and cross-section.", variables: [{ symbol: "\\lambda", meaning: "mean free path" }, { symbol: "n", meaning: "number density" }, { symbol: "\\sigma", meaning: "interaction cross-section" }], workedExample: { problem: "If n=10^20 m^-3 and sigma=10^-24 m^2, find lambda.", steps: [{ text: "Substitute.", latex: "\\lambda=\\frac{1}{10^{20}10^{-24}}" }, { text: "Calculate.", latex: "\\lambda=10^4\\text{ m}" }], answer: "The mean free path is 10 km." }, modernUse: "Used in particle transport, radiation shielding and detector design." },
  ],
  connections: [
    { field: "Physics", description: "Bhabha worked in quantum electrodynamics, cosmic rays and nuclear physics." },
    { field: "Engineering", description: "Atomic energy required reactors, accelerators, materials and instrumentation." },
    { field: "Mathematics", description: "His theoretical work used relativistic quantum calculations." },
    { field: "Computer Science", description: "TIFR became important in early Indian computing as well as physics." },
  ],
  historicalContext: { worldEvents: "Bhabha's career spans late colonial India, World War II, independence and the atomic age.", politics: "Nehruvian state-building and postwar nuclear politics shaped his programme.", wars: "World War II redirected him to India; nuclear weapons changed the meaning of atomic research.", universities: "India needed new research institutions beyond colonial university structures.", scientificCommunity: "Cosmic-ray physics connected Cambridge, Europe, India and later high-energy laboratories.", technology: "Cloud chambers, detectors, reactors, accelerators and computing supported the work." },
  backlash: [
    { type: "Political pressure", title: "Nuclear programme ethics", description: "Atomic energy after Hiroshima carried unavoidable military and ethical implications.", status: "Verified" },
    { type: "Academic conflict", title: "Basic research versus urgent development", description: "Funding elite research in a poor new nation required political defence.", status: "Verified" },
    { type: "Controversy", title: "Elite institution model", description: "Bhabha's top-down model produced excellence but also raised questions about centralization.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Political", description: "He built science during independence, partition and Cold War nuclear politics." },
    { category: "Professional", description: "He shifted from researcher to national institution-builder." },
    { category: "Scientific", description: "Cosmic-ray processes were indirect and high-energy." },
    { category: "Financial", description: "Large science required sustained state and philanthropic funding." },
  ],
  achievements: [
    { title: "Adams Prize", year: "1942", description: "Cambridge recognition for mathematical physics." },
    { title: "TIFR founded", year: "1945", description: "Founded India's premier fundamental research institute." },
    { title: "Atomic Energy Commission chair", year: "1948", description: "Led India's atomic-energy programme." },
    { title: "Padma Bhushan", year: "1954", description: "Received one of India's major civilian honours." },
  ],
  funFacts: ["Bhabha was deeply interested in painting and architecture.", "TIFR's art collection reflected his cultural vision.", "He began at Cambridge as an engineering student.", "His death in an air crash abruptly ended a major scientific career."],
  didYouKnow: [
    { title: "A scattering process bears his name", content: "Bhabha scattering is still used in particle-collider physics." },
    { title: "Institutions were his largest instrument", content: "TIFR and atomic-energy agencies extended his influence beyond papers." },
    { title: "Cosmic rays were particle physics before accelerators dominated", content: "Natural high-energy particles revealed processes laboratories could not yet produce." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Homi Bhabha in a mid-century theoretical physics office with cosmic-ray diagrams, Indian institute architecture and chalkboard equations." },
    { category: "Scientific diagram", prompt: "Cosmic-ray shower diagram showing primary particle, pair production, bremsstrahlung and secondary cascade." },
    { category: "Timeline infographic", prompt: "Homi Bhabha timeline from Cambridge physics to TIFR, atomic energy and Trombay." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Homi J. Bhabha.", suggestedSource: "Wikimedia Commons: Homi Jehangir Bhabha 1960s.jpg" },
    { slot: "Laboratory", caption: "TIFR or early Indian atomic-energy laboratory.", suggestedSource: "TIFR / Department of Atomic Energy archives" },
    { slot: "Historic location", caption: "TIFR Mumbai or Bhabha Atomic Research Centre.", suggestedSource: "TIFR / Wikimedia Commons" },
    { slot: "Notebooks", caption: "Cosmic-ray cascade diagrams or Bhabha-Heitler paper pages.", suggestedSource: "Royal Society / journal archives" },
  ],
  relatedScientists: [
    { slug: "cv-raman", name: "C. V. Raman", reason: "Both shaped modern Indian physics institutions." },
    { slug: "subrahmanyan-chandrasekhar", name: "Subrahmanyan Chandrasekhar", reason: "Both were Indian-born theorists working with relativistic physics." },
    { slug: "max-planck", name: "Max Planck", reason: "Quantum theory underlies Bhabha's particle calculations." },
  ],
  relatedTopics: [
    { title: "Nuclear Structure and Binding Energy", href: "/subjects/physics/nuclear-structure-and-binding-energy", description: "Bhabha's institutional work centred on nuclear science." },
    { title: "Relativistic Momentum and E = mc^2", href: "/subjects/physics/relativistic-momentum-and-e-mc2", description: "Particle physics depends on relativistic energy." },
    { title: "Quantum Physics", href: "/subjects/physics/quantum-physics", description: "Bhabha scattering is a quantum-electrodynamic process." },
  ],
  quotes: [
    { text: "No power is as expensive as no power.", source: "Widely attributed to Bhabha in Indian energy-policy discussions", status: "Widely attributed" },
    { text: "A scientific institution must have a cultural atmosphere.", source: "Paraphrase of Bhabha's institution-building views", status: "Paraphrase" },
    { text: "Science is the basis of modern civilization.", source: "Widely attributed public statement", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What is Bhabha scattering?", options: ["Electron-positron scattering", "Plant growth measurement", "Penicillin structure", "Spaceflight trajectory"], answer: 0, explanation: "It is electron-positron scattering in QED." },
      { question: "Which institute did Bhabha found?", options: ["TIFR", "Royal Institution", "Bletchley Park", "Pasteur Institute"], answer: 0, explanation: "He founded the Tata Institute of Fundamental Research." },
      { question: "What did Bhabha and Heitler explain?", options: ["Cosmic-ray showers", "DNA replication", "Natural selection", "Crystallographic phases"], answer: 0, explanation: "They explained electromagnetic cascades." },
    ],
    trueFalse: [
      { statement: "Bhabha worked in cosmic-ray physics.", answer: true, explanation: "It was central to his early research." },
      { statement: "Bhabha had no role in Indian scientific institutions.", answer: false, explanation: "Institution-building was one of his largest legacies." },
      { statement: "Nuclear science after World War II had political implications.", answer: true, explanation: "Atomic energy was tied to power, weapons and state policy." },
    ],
    shortAnswer: [
      { question: "Why did World War II matter for Bhabha's career?", modelAnswer: "It kept him in India, where he began building institutions rather than returning to Cambridge.", marks: 4 },
      { question: "What is a cosmic-ray shower?", modelAnswer: "A cascade of secondary particles produced when a high-energy cosmic particle interacts with matter or the atmosphere.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain Bhabha's dual legacy.", modelAnswer: "Bhabha's scientific legacy includes electron-positron scattering and cosmic-ray shower theory, both important in high-energy physics. His institutional legacy may be even larger: he founded TIFR and led India's atomic-energy programme, arguing that a new nation needed advanced fundamental science. His career shows how theoretical physics, state policy and institution-building can become inseparable.", marks: 12 },
    ],
  },
};
