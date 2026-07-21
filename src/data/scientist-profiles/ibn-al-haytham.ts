import type { ScientistProfile } from "./types";

export const ibnAlHaytham: ScientistProfile = {
  slug: "ibn-al-haytham",
  seoDescription:
    "Ibn al-Haytham, known as Alhazen, transformed optics through the Book of Optics, experimental reasoning, vision theory and camera obscura studies.",
  timeline: [
    { year: "c. 965", title: "Born in Basra", description: "Ibn al-Haytham is born in Basra during the Abbasid intellectual world." },
    { year: "Late 900s", title: "Mathematical training", description: "He studies mathematics, astronomy, philosophy and earlier Greek optical traditions." },
    { year: "c. 1000", title: "Moves toward Cairo", description: "Accounts connect him with a proposal to regulate Nile flooding." },
    { year: "Early 1000s", title: "Court danger", description: "After the Nile plan proves impractical, he lives under restriction in Fatimid Egypt.", pivotal: true },
    { year: "c. 1020s", title: "Book of Optics", description: "He writes Kitab al-Manazir, a major seven-book study of light and vision.", pivotal: true },
    { year: "11th century", title: "Camera obscura analysis", description: "He explains image formation through small apertures and straight-line light travel." },
    { year: "c. 1040", title: "Dies", description: "Ibn al-Haytham dies, leaving works that later circulate in Arabic and Latin." },
  ],
  earlyLifeDetail: {
    childhood: "Little secure evidence survives about his childhood, but Basra's scholarly setting gave access to mathematical, philosophical and medical traditions.",
    family: "Family details are sparse, a common problem for medieval scientific biography.",
    education: "He mastered Euclidean geometry, Ptolemaic astronomy, optics and philosophical argument before developing his own experimental program.",
    difficulties: "Court patronage could be dangerous. The story of the Nile project shows how political expectation could trap a scholar.",
    finances: "Like many scholars, he depended on patronage, copying, teaching and courtly or urban scholarly networks.",
    personalLife: "Later accounts emphasize withdrawal, study and writing during periods of restriction.",
    influences: "Euclid, Ptolemy, Galen, Aristotle and Islamic mathematical astronomy formed the background he criticized and extended.",
    booksRead: "His work engages Greek mathematical optics, medical anatomy of the eye, astronomy and philosophical methods.",
    teachersAndMentors: "No single teacher dominates the record; the broader translation and commentary culture was his intellectual school.",
    stories: ["He rejected the idea that eyes emit visual rays.", "His camera obscura work explained inverted images.", "Latin readers knew him as Alhazen."],
  },
  turningPoints: ["The Nile project story placed him in political danger.", "Confinement became associated with intense research and writing.", "Rejecting emission theories of vision redirected optics.", "Latin translation carried his optics into Europe."],
  failures: ["The Nile engineering proposal was reportedly impossible with available technology.", "Some biographical stories are hard to verify in detail.", "His work was later simplified into a single 'scientific method' myth, though the real history is richer."],
  studentLessons: ["Test old authorities, even when they are prestigious.", "Geometry and experiment can reinforce each other.", "Scientific transmission depends on translation and commentary."],
  discoveries: [
    { name: "Intromission theory of vision", period: "11th century", background: "Earlier theories often claimed that rays came out of the eyes.", problem: "Does sight happen because the eye emits rays or because light enters it?", method: "Ibn al-Haytham combined anatomy, geometry, light experiments and criticism of earlier theories.", discovery: "He argued that light from objects enters the eye, producing vision.", importance: "This became a foundation of later optics.", modernApplications: ["Vision science", "Optometry", "Camera design", "Geometrical optics"] },
    { name: "Camera obscura and experimental optics", period: "11th century", background: "Small apertures project images, but the cause required explanation.", problem: "Why does an image form upside down through a small hole?", method: "He studied straight-line propagation and controlled light entering dark rooms.", discovery: "He explained inverted image formation through rays traveling from object points through an aperture.", importance: "The principle later underlay cameras and projection.", modernApplications: ["Photography", "Imaging systems", "Pinhole cameras", "Optics education"] },
  ],
  works: [
    { title: "Kitab al-Manazir / Book of Optics", year: "c. 1020s", kind: "Book", description: "A seven-book study of light, sight, reflection, refraction and perception." },
    { title: "Doubts concerning Ptolemy", year: "11th century", kind: "Book", description: "A critical work on astronomical models and physical consistency." },
    { title: "On the Shape of the Eclipse", year: "11th century", kind: "Paper", description: "Optical reasoning connected to image formation and celestial events." },
  ],
  equations: [
    {
      name: "Law of reflection",
      latex: "\\theta_i=\\theta_r",
      explanation: "For reflection from a smooth surface, the angle of incidence equals the angle of reflection.",
      variables: [{ symbol: "\\theta_i", meaning: "angle of incidence" }, { symbol: "\\theta_r", meaning: "angle of reflection" }],
      workedExample: { problem: "If light strikes a mirror at 35 degrees to the normal, what is the reflection angle?", steps: [{ text: "Apply the law.", latex: "\\theta_r=35^\\circ" }], answer: "35 degrees." },
      modernUse: "Used in mirrors, telescopes, lasers and optical design.",
    },
    {
      name: "Pinhole magnification",
      latex: "\\frac{h_i}{h_o}=\\frac{d_i}{d_o}",
      explanation: "A simple camera obscura model relates image size to object distance and image distance.",
      variables: [{ symbol: "h_i", meaning: "image height" }, { symbol: "h_o", meaning: "object height" }, { symbol: "d_i", meaning: "distance to image plane" }, { symbol: "d_o", meaning: "distance to object" }],
      workedExample: { problem: "If d_i=1 m and d_o=10 m, what fraction of object height is the image?", steps: [{ text: "Divide distances.", latex: "\\frac{h_i}{h_o}=\\frac{1}{10}" }], answer: "The image is one tenth of the object height." },
      modernUse: "Introduces camera geometry and similar triangles.",
    },
  ],
  connections: [
    { field: "Physics", description: "His optics studies light propagation, reflection and refraction." },
    { field: "Mathematics", description: "Geometry structured his arguments about rays and images." },
    { field: "Astronomy", description: "Optical knowledge affected astronomical observation and instruments." },
  ],
  historicalContext: { worldEvents: "He worked during the Islamic Golden Age, when Arabic scholarship preserved and extended Greek science.", politics: "Fatimid court patronage could support or endanger scholars.", universities: "Learning occurred through libraries, private teaching, courts and scholarly circles rather than modern universities.", scientificCommunity: "Translation, commentary and debate connected Baghdad, Basra, Cairo and later Latin Europe.", technology: "Optical instruments, manuscripts and geometric diagrams carried scientific practice." },
  backlash: [
    { type: "Political pressure", title: "Court patronage danger", description: "The Nile engineering story shows the risk of making promises to rulers.", status: "Widely attributed" },
    { type: "Academic conflict", title: "Critique of ancient authorities", description: "His optics challenged earlier emission theories associated with Greek authorities.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Political", description: "Scholarship depended on unstable patronage and court expectations." },
    { category: "Scientific", description: "He had to overturn long-standing theories of vision." },
    { category: "Professional", description: "His work depended on manuscript transmission and later translation." },
  ],
  achievements: [
    { title: "Book of Optics", year: "c. 1020s", description: "One of the most influential works in the history of optics." },
    { title: "Latin influence as Alhazen", year: "Medieval period", description: "His optical work influenced European scholars." },
    { title: "Experimental optics legacy", year: "Modern", description: "Remembered for combining geometry, observation and controlled testing." },
  ],
  funFacts: ["His Latin name was Alhazen.", "Camera obscura means dark chamber.", "He wrote on astronomy as well as optics.", "His work travelled through translation into Latin Europe."],
  didYouKnow: [
    { title: "Vision reversed", content: "He argued that light enters the eye, replacing emission theories." },
    { title: "A dark room experiment", content: "Camera obscura studies made straight-line light travel visible." },
    { title: "Medieval science was connected", content: "His work linked Arabic, Greek and Latin scientific traditions." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Ibn al-Haytham in a medieval study with light entering a dark room, geometric diagrams and manuscripts." },
    { category: "Scientific diagram", prompt: "Camera obscura ray diagram showing inverted image formation through a small aperture." },
    { category: "Timeline infographic", prompt: "Ibn al-Haytham timeline from Basra to Cairo, Book of Optics and Latin influence." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Idealized portrait of Ibn al-Haytham.", suggestedSource: "Wikimedia Commons: Alhazen.jpg" },
    { slot: "Notebooks", caption: "Manuscript page from optical tradition.", suggestedSource: "Wikimedia Commons: Alhazen page.jpg" },
    { slot: "Instruments", caption: "Camera obscura or optical geometry diagram.", suggestedSource: "Public-domain manuscript sources" },
    { slot: "Historic location", caption: "Basra or Cairo historical setting associated with his life.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "johannes-kepler", name: "Johannes Kepler", reason: "Kepler built later optical theory on medieval optics." },
    { slug: "euclid", name: "Euclid", reason: "Ibn al-Haytham revised and extended Greek geometrical optics." },
    { slug: "galileo-galilei", name: "Galileo Galilei", reason: "Optics later enabled telescopic astronomy." },
  ],
  relatedTopics: [
    { title: "Light", href: "/subjects/physics/light", description: "His work is foundational for geometrical optics." },
    { title: "Reflection", href: "/subjects/physics/reflection", description: "Reflection laws appear in optical analysis." },
    { title: "Geometry", href: "/subjects/mathematics/geometry", description: "Ray diagrams depend on geometry." },
  ],
  quotes: [
    { text: "The seeker after truth is not one who studies the writings of the ancients and puts his trust in them.", source: "Attributed in discussions of his critical method", status: "Widely attributed" },
    { text: "Truth is sought for its own sake.", source: "Attributed to Ibn al-Haytham", status: "Widely attributed" },
    { text: "Light travels from visible objects to the eye.", source: "Book of Optics, summary of argument", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "What was Ibn al-Haytham's major optical work?", options: ["Book of Optics", "Silent Spring", "Principia", "On Floating Bodies"], answer: 0, explanation: "Kitab al-Manazir is the Book of Optics." },
      { question: "What theory of vision did he support?", options: ["Light enters the eye", "Eyes emit all light", "Sound creates sight", "Gravity causes vision"], answer: 0, explanation: "He argued for intromission." },
      { question: "What does a camera obscura demonstrate?", options: ["Image formation through an aperture", "DNA structure", "White dwarf collapse", "Animal tool use"], answer: 0, explanation: "A small opening projects an inverted image." },
    ],
    trueFalse: [
      { statement: "He criticized earlier authorities when evidence required it.", answer: true, explanation: "His work revised Greek optical theories." },
      { statement: "He worked only in modern laboratories.", answer: false, explanation: "He worked in medieval manuscript and scholarly settings." },
      { statement: "His optics influenced later European science.", answer: true, explanation: "Latin translations circulated as Alhazen's work." },
    ],
    shortAnswer: [
      { question: "What is intromission theory?", modelAnswer: "The view that vision occurs when light from objects enters the eye.", marks: 4 },
      { question: "Why is the camera obscura important?", modelAnswer: "It gives experimental evidence for straight-line light travel and image formation.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Ibn al-Haytham's importance in optics.", modelAnswer: "Ibn al-Haytham transformed optics by combining geometry, observation and experiment. He rejected emission theories of vision and argued that light reflected from objects enters the eye. His camera obscura analysis explained image formation through apertures, while the Book of Optics transmitted a rigorous optical tradition that influenced later Islamic and European science.", marks: 12 },
    ],
  },
};
