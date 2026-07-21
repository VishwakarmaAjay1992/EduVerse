import type { ScientistProfile } from "./types";

export const abdAlRahmanAlSufi: ScientistProfile = {
  slug: "abd-al-rahman-al-sufi",
  seoDescription: "Abd al-Rahman al-Sufi wrote the Book of Fixed Stars, revising Ptolemy's star catalogue and preserving Arabic star names and constellation traditions.",
  timeline: [
    { year: "903", title: "Born in Ray", description: "Abd al-Rahman al-Sufi is born in the Abbasid world." },
    { year: "10th century", title: "Buyid patronage", description: "He works in courtly astronomical circles." },
    { year: "964", title: "Book of Fixed Stars", description: "Al-Sufi completes his famous star catalogue and constellation atlas.", pivotal: true },
    { year: "964", title: "Andromeda description", description: "He describes the Andromeda Galaxy as a small cloud.", pivotal: true },
    { year: "986", title: "Dies", description: "Al-Sufi dies, leaving a major astronomical legacy." },
    { year: "Medieval period", title: "Manuscript transmission", description: "Illustrated copies spread his constellation tradition." },
  ],
  earlyLifeDetail: {
    childhood: "Details of al-Sufi's childhood are limited, but he grew up in a scholarly world where Greek astronomy had been translated into Arabic.",
    family: "Family details are sparse; his intellectual identity is known mainly through his astronomical work.",
    education: "He mastered Ptolemaic astronomy, star catalogues, observation and Arabic star lore.",
    difficulties: "He had to reconcile inherited Greek catalogues with observed sky positions and Arabic naming traditions.",
    finances: "Court patronage supported scholarly astronomical work.",
    personalLife: "He is associated with the Buyid ruler Adud al-Dawla and court astronomy.",
    influences: "Ptolemy's Almagest, Arabic observational traditions and practical sky knowledge shaped his work.",
    booksRead: "His work engaged Ptolemy, star lore, mathematical astronomy and constellation descriptions.",
    teachersAndMentors: "The translation and commentary culture of Islamic astronomy was his broad intellectual school.",
    stories: ["He recorded Andromeda as a small cloud.", "Many Arabic star names passed into later astronomy.", "His constellation drawings show figures from both sky and globe perspectives."],
  },
  turningPoints: ["Ptolemy's catalogue provided the structure to revise.", "Court patronage supported astronomical writing.", "The Book of Fixed Stars joined catalogue, observation and illustration.", "Manuscripts carried his work across centuries."],
  failures: ["Manuscript copying created variations between versions.", "Some biography details remain uncertain.", "His work is often less known publicly than later European star atlases it influenced."],
  studentLessons: ["Science advances by checking inherited knowledge against observation.", "Catalogues can be creative scientific tools.", "Names and diagrams help knowledge travel."],
  discoveries: [
    { name: "Book of Fixed Stars", period: "964", background: "Ptolemy's star catalogue needed translation, revision and adaptation.", problem: "How could inherited star data be made useful for Arabic astronomy?", method: "Al-Sufi compared observations, magnitudes, Arabic names and constellation figures.", discovery: "He produced a revised star catalogue and illustrated atlas.", importance: "It became a major work of medieval astronomy.", modernApplications: ["Star catalogues", "History of astronomy", "Observational astronomy", "Cultural astronomy"] },
    { name: "Andromeda Galaxy observation", period: "10th century", background: "Some deep-sky objects are visible without telescopes under dark skies.", problem: "How should faint non-stellar objects be recorded?", method: "Al-Sufi described visible sky objects in his catalogue tradition.", discovery: "He recorded Andromeda as a small cloud.", importance: "It is an early written observation of a galaxy beyond the Milky Way.", modernApplications: ["Deep-sky astronomy", "Galaxy history", "Observational records"] },
  ],
  works: [
    { title: "Book of Fixed Stars", year: "964", kind: "Book", description: "A catalogue and illustrated atlas of stars and constellations." },
    { title: "Constellation illustrations", year: "964", kind: "Project", description: "Visual presentation of constellation figures and stars." },
    { title: "Star magnitude revisions", year: "10th century", kind: "Project", description: "Corrections and comparisons of stellar brightness." },
  ],
  equations: [
    { name: "Magnitude difference", latex: "m_2-m_1=-2.5\\log_{10}\\left(\\frac{F_2}{F_1}\\right)", explanation: "Modern magnitude scale compares star brightness logarithmically.", variables: [{ symbol: "m", meaning: "magnitude" }, { symbol: "F", meaning: "observed flux" }], workedExample: { problem: "If two stars have equal flux, what is magnitude difference?", steps: [{ text: "Flux ratio is 1.", latex: "\\log_{10}(1)=0" }], answer: "Magnitude difference is 0." }, modernUse: "Modern star catalogues." },
    { name: "Angular separation idea", latex: "\\theta\\approx\\frac{s}{r}", explanation: "Small-angle approximation relates apparent angle to size and distance.", variables: [{ symbol: "\\theta", meaning: "angle in radians" }, { symbol: "s", meaning: "apparent separation size" }, { symbol: "r", meaning: "distance" }], workedExample: { problem: "If s/r=0.01, what is theta?", steps: [{ text: "Use the approximation.", latex: "\\theta\\approx0.01" }], answer: "0.01 radians." }, modernUse: "Astronomical angular measurement." },
  ],
  connections: [
    { field: "Astronomy", description: "Al-Sufi's catalogue belongs to observational astronomy." },
    { field: "Mathematics", description: "Star positions and angular separations require geometry." },
    { field: "Physics", description: "Brightness and observation connect to light measurement." },
  ],
  historicalContext: { worldEvents: "Al-Sufi worked during the Islamic Golden Age and Buyid patronage.", politics: "Court support helped astronomical scholarship.", universities: "Learning occurred through courts, libraries and scholarly networks.", scientificCommunity: "Arabic astronomers preserved, revised and extended Greek astronomy.", technology: "Manuscripts, celestial globes and naked-eye observation shaped his practice." },
  backlash: [
    { type: "Academic conflict", title: "Revising Ptolemy", description: "Al-Sufi corrected and adapted ancient Greek star knowledge for his context.", status: "Verified" },
    { type: "Controversy", title: "Manuscript variation", description: "Different copies complicate exact reconstruction of some details.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Scientific", description: "He compared inherited catalogues with observed sky data." },
    { category: "Professional", description: "His work depended on patronage and manuscript copying." },
    { category: "Educational", description: "Star knowledge had to be transmitted across languages and cultures." },
  ],
  achievements: [
    { title: "Book of Fixed Stars", year: "964", description: "One of medieval astronomy's great star catalogues." },
    { title: "Andromeda record", year: "10th century", description: "Early description of the Andromeda Galaxy." },
    { title: "Arabic star names", year: "Medieval legacy", description: "Helped transmit names still used today." },
  ],
  funFacts: ["His Latinized name was Azophi.", "Many star names in modern astronomy have Arabic roots.", "Andromeda is visible to the naked eye under dark skies.", "His book included constellation illustrations."],
  didYouKnow: [
    { title: "A galaxy before telescopes", content: "Al-Sufi described Andromeda centuries before telescope astronomy." },
    { title: "Two views", content: "Constellation figures could be drawn as seen in the sky or on a globe." },
    { title: "Catalogue science", content: "A good catalogue can transform observation into reusable knowledge." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Abd al-Rahman al-Sufi with medieval star manuscript, constellation figures and dark-sky observation scene." },
    { category: "Scientific diagram", prompt: "Constellation map with star magnitudes and Arabic star names in educational style." },
    { category: "Timeline infographic", prompt: "Al-Sufi timeline from Ray to Book of Fixed Stars and Andromeda observation." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Illustration or manuscript image associated with al-Sufi.", suggestedSource: "Wikimedia Commons" },
    { slot: "Notebooks", caption: "Book of Fixed Stars manuscript page.", suggestedSource: "Public-domain manuscript collections" },
    { slot: "Instruments", caption: "Celestial globe or astrolabe from Islamic astronomy tradition.", suggestedSource: "Wikimedia Commons" },
    { slot: "Historic location", caption: "Ray or medieval observatory setting.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "ibn-al-haytham", name: "Ibn al-Haytham", reason: "Both worked in medieval Islamic science." },
    { slug: "henrietta-leavitt", name: "Henrietta Leavitt", reason: "Both contributed to star cataloguing and observational astronomy." },
    { slug: "nicolaus-copernicus", name: "Nicolaus Copernicus", reason: "Both belong to the long transmission of mathematical astronomy." },
  ],
  relatedTopics: [
    { title: "Astronomy", href: "/subjects/physics/astronomy", description: "His work is a star catalogue and constellation atlas." },
    { title: "Light", href: "/subjects/physics/light", description: "Magnitude is about observed brightness." },
    { title: "Angles", href: "/subjects/mathematics/angle-relationships", description: "Sky positions require angular measurement." },
  ],
  quotes: [
    { text: "A small cloud.", source: "Traditional summary of al-Sufi's Andromeda description", status: "Paraphrase" },
    { text: "The fixed stars are known by their positions and magnitudes.", source: "Book of Fixed Stars, summary", status: "Paraphrase" },
    { text: "Observation corrects what is inherited.", source: "Historical summary of his method", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "What was al-Sufi's major work?", options: ["Book of Fixed Stars", "Silent Spring", "Stellar Atmospheres", "A-0 compiler"], answer: 0, explanation: "His famous work is the Book of Fixed Stars." },
      { question: "Which galaxy did he describe as a small cloud?", options: ["Andromeda", "Milky Way centre", "Triangulum only", "No galaxy"], answer: 0, explanation: "He recorded Andromeda." },
      { question: "What did his book include?", options: ["Star catalogue and constellation illustrations", "Compiler code", "Fossil drawings only", "Nuclear reactors"], answer: 0, explanation: "It was a catalogue and atlas." },
    ],
    trueFalse: [
      { statement: "Al-Sufi worked before telescopes.", answer: true, explanation: "His observations were naked-eye and manuscript based." },
      { statement: "His work helped transmit Arabic star names.", answer: true, explanation: "Many star names have Arabic roots." },
      { statement: "The Book of Fixed Stars was a modern space telescope manual.", answer: false, explanation: "It was a medieval manuscript work." },
    ],
    shortAnswer: [
      { question: "Why was the Book of Fixed Stars important?", modelAnswer: "It revised Ptolemy's star catalogue and transmitted star positions, magnitudes, names and constellation drawings.", marks: 5 },
      { question: "Why is the Andromeda note significant?", modelAnswer: "It is an early recorded observation of a galaxy visible beyond the Milky Way.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain al-Sufi's role in astronomy.", modelAnswer: "Al-Sufi combined Ptolemaic astronomy, Arabic star lore and observation in the Book of Fixed Stars. His catalogue preserved star positions, magnitudes, names and constellation illustrations, while also recording objects such as Andromeda. The work shows how medieval Islamic astronomers revised inherited science and transmitted it to later cultures.", marks: 12 },
    ],
  },
};
