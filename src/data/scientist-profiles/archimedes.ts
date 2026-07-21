import type { ScientistProfile } from "./types";

export const archimedes: ScientistProfile = {
  slug: "archimedes",
  seoDescription:
    "Archimedes of Syracuse joined geometry, hydrostatics, mechanics and engineering, discovering buoyancy, lever principles and methods anticipating integral calculus.",
  timeline: [
    { year: "c. 287 BCE", title: "Born in Syracuse", description: "Archimedes is born in the Greek city of Syracuse in Sicily." },
    { year: "3rd century BCE", title: "Studies mathematics", description: "He likely connects with the mathematical world of Alexandria." },
    { year: "3rd century BCE", title: "Geometry and mechanics", description: "He writes on spheres, cylinders, spirals, centres of gravity and levers.", pivotal: true },
    { year: "3rd century BCE", title: "On Floating Bodies", description: "Archimedes develops principles of hydrostatics and buoyancy.", pivotal: true },
    { year: "214-212 BCE", title: "Siege of Syracuse", description: "Ancient accounts credit him with defensive machines during Rome's siege." },
    { year: "212 BCE", title: "Killed after city falls", description: "Archimedes is killed when Roman forces capture Syracuse." },
    { year: "1906", title: "Palimpsest rediscovered", description: "The Archimedes Palimpsest reveals lost works and details of The Method." },
  ],
  earlyLifeDetail: {
    childhood: "Little is known securely about his childhood, but Syracuse was wealthy, Greek-speaking and connected to Mediterranean scholarship.",
    family: "Ancient sources name his father as Phidias, an astronomer. Other family details remain uncertain.",
    education: "He probably studied or corresponded with mathematicians linked to Alexandria, the leading Hellenistic centre of mathematics.",
    difficulties: "He lived amid war and royal patronage. Practical engineering could become military work in a city under siege.",
    finances: "His relationship with King Hiero II suggests elite patronage supported some investigations.",
    personalLife: "Ancient stories portray him as absorbed in mathematics, sometimes neglecting ordinary affairs.",
    influences: "Euclidean geometry, Eudoxus' method of exhaustion and practical mechanics shaped his work.",
    booksRead: "He engaged the Greek mathematical tradition, especially geometry, conic sections, mechanics and astronomy.",
    teachersAndMentors: "Direct teachers are unknown; Alexandrian mathematical culture was the main influence.",
    stories: ["The crown story produced the famous Eureka legend.", "He asked for a sphere and cylinder on his tomb.", "Roman authors admired him even while describing his death in war."],
  },
  turningPoints: ["Royal measurement problems linked geometry to physical reality.", "His work on levers mathematized mechanical advantage.", "The method of exhaustion let him calculate curved areas and volumes.", "The Roman siege forced engineering into warfare."],
  failures: ["The burning mirrors story is doubtful or exaggerated.", "Many works survived only fragmentarily or through later copies.", "His military inventions could not ultimately save Syracuse."],
  studentLessons: ["Pure mathematics can explain real machines.", "Approximation can be rigorous when bounded carefully.", "War can destroy scientific lives and archives."],
  discoveries: [
    { name: "Archimedes' principle", period: "3rd century BCE", background: "Floating and sinking needed mathematical explanation.", problem: "What force acts on a body immersed in fluid?", method: "Archimedes reasoned about displaced fluid and equilibrium.", discovery: "The upward buoyant force equals the weight of the displaced fluid.", importance: "This founded hydrostatics.", modernApplications: ["Ship design", "Submarines", "Fluid mechanics", "Density measurement"] },
    { name: "Lever law and centres of gravity", period: "3rd century BCE", background: "Machines used levers, but mathematical rules were needed.", problem: "When do unequal weights balance?", method: "He treated distances and weights geometrically.", discovery: "Weights balance when moments are equal.", importance: "Mechanics became mathematical.", modernApplications: ["Engineering", "Statics", "Robotics", "Architecture"] },
    { name: "Method of exhaustion", period: "3rd century BCE", background: "Curved shapes resist simple measurement.", problem: "How can areas and volumes of circles, spheres and parabolas be calculated?", method: "He bounded shapes with increasingly fine polygons or slices.", discovery: "He obtained rigorous results that anticipate integral reasoning.", importance: "A milestone in geometry and calculus history.", modernApplications: ["Calculus", "Numerical integration", "Geometry", "Physics"] },
  ],
  works: [
    { title: "On Floating Bodies", year: "3rd century BCE", kind: "Book", description: "Treatise on hydrostatics and floating equilibrium." },
    { title: "On the Sphere and Cylinder", year: "3rd century BCE", kind: "Book", description: "Derives surface area and volume relations for spheres and cylinders." },
    { title: "The Method", year: "3rd century BCE", kind: "Book", description: "Explains heuristic mechanical reasoning behind geometric discoveries." },
    { title: "Archimedes screw", year: "3rd century BCE", kind: "Invention", description: "A screw pump associated with moving water upward." },
  ],
  equations: [
    {
      name: "Buoyant force",
      latex: "F_b=\\rho gV",
      explanation: "The buoyant force equals fluid density times gravity times displaced volume.",
      variables: [{ symbol: "F_b", meaning: "buoyant force" }, { symbol: "\\rho", meaning: "fluid density" }, { symbol: "g", meaning: "gravitational acceleration" }, { symbol: "V", meaning: "displaced volume" }],
      workedExample: { problem: "Find buoyant force for V=0.02 m^3 of water.", steps: [{ text: "Use rho=1000 kg/m^3 and g=9.8 m/s^2.", latex: "F_b=1000(9.8)(0.02)=196\\text{ N}" }], answer: "196 N upward." },
      modernUse: "Used in naval architecture and fluid mechanics.",
    },
    {
      name: "Lever balance",
      latex: "F_1d_1=F_2d_2",
      explanation: "Balanced torques require force times distance to match on both sides.",
      variables: [{ symbol: "F", meaning: "force or weight" }, { symbol: "d", meaning: "distance from pivot" }],
      workedExample: { problem: "A 20 N force at 3 m balances what force at 2 m?", steps: [{ text: "Set moments equal.", latex: "20(3)=F_2(2)" }, { text: "Solve.", latex: "F_2=30\\text{ N}" }], answer: "30 N." },
      modernUse: "Core idea in statics and mechanical design.",
    },
  ],
  connections: [
    { field: "Mathematics", description: "Archimedes advanced geometry, approximation and proof." },
    { field: "Physics", description: "Buoyancy and levers are foundational physical principles." },
    { field: "Engineering", description: "His machines and mechanics connect theory to design." },
  ],
  historicalContext: { worldEvents: "Archimedes lived during Hellenistic science and the Punic Wars.", politics: "Syracuse navigated power between Rome and Carthage.", wars: "The Roman siege of Syracuse shaped the final chapter of his life.", universities: "Alexandria was the great scholarly centre of the age.", scientificCommunity: "Greek mathematicians exchanged results by letters, treatises and schools.", technology: "Levers, pulleys, ships, pumps and siege machines linked mathematics to engineering." },
  backlash: [
    { type: "Political pressure", title: "War and siege", description: "His engineering was pulled into the defense of Syracuse.", status: "Verified" },
    { type: "Controversy", title: "Legendary inventions", description: "Some stories, especially burning mirrors, are historically disputed.", status: "Disputed" },
  ],
  challengesDetailed: [
    { category: "Political", description: "Syracuse's war context made scholarship vulnerable." },
    { category: "Scientific", description: "He pushed geometry beyond standard finite shapes." },
    { category: "Professional", description: "Practical patronage brought both opportunity and military pressure." },
  ],
  achievements: [
    { title: "Archimedes' principle", year: "3rd century BCE", description: "Foundational result in hydrostatics." },
    { title: "Approximation of pi", year: "3rd century BCE", description: "Bounded pi using inscribed and circumscribed polygons." },
    { title: "Archimedes Palimpsest", year: "Rediscovered 1906", description: "Preserved unique evidence of his mathematical methods." },
  ],
  funFacts: ["Eureka means I have found it.", "He requested a sphere and cylinder as his memorial symbol.", "He approximated pi without decimal notation.", "His palimpsest was hidden beneath later religious text."],
  didYouKnow: [
    { title: "Calculus before calculus", content: "His exhaustion methods anticipated later integral ideas." },
    { title: "Physics as geometry", content: "He treated balance and floating with mathematical proof." },
    { title: "Lost and recovered", content: "The palimpsest restored parts of works unknown for centuries." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Archimedes in ancient Syracuse with geometric diagrams, water vessel, lever and manuscript scrolls." },
    { category: "Scientific diagram", prompt: "Buoyancy diagram showing displaced water volume and upward force." },
    { category: "Equipment", prompt: "Archimedes screw pump educational cutaway with water rising through a tilted screw." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Idealized portrait of Archimedes.", suggestedSource: "Wikimedia Commons: Archimedes (Ideal portrait).jpg" },
    { slot: "Notebooks", caption: "Archimedes Palimpsest manuscript image.", suggestedSource: "Wikimedia Commons: Archimedes Palimpsest.jpg" },
    { slot: "Instruments", caption: "Archimedes screw, lever or buoyancy apparatus.", suggestedSource: "Wikimedia Commons" },
    { slot: "Historic location", caption: "Syracuse, Sicily, associated with Archimedes.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "euclid", name: "Euclid", reason: "Archimedes worked within and beyond Euclidean geometry." },
    { slug: "isaac-newton", name: "Isaac Newton", reason: "Newtonian mechanics later unified mathematical physics." },
    { slug: "galileo-galilei", name: "Galileo Galilei", reason: "Galileo admired Archimedes' mathematical mechanics." },
  ],
  relatedTopics: [
    { title: "Forces", href: "/subjects/physics/forces", description: "Buoyancy and levers are force problems." },
    { title: "Geometry", href: "/subjects/mathematics/geometry", description: "Archimedes' proofs are geometric." },
    { title: "Fluids", href: "/subjects/physics/fluids", description: "Hydrostatics begins with floating bodies." },
  ],
  quotes: [
    { text: "Give me a place to stand, and I will move the Earth.", source: "Ancient attribution about levers", status: "Widely attributed" },
    { text: "Do not disturb my circles.", source: "Traditional account of his death", status: "Widely attributed" },
    { text: "Eureka.", source: "Vitruvius' later account", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What does Archimedes' principle describe?", options: ["Buoyant force", "DNA structure", "Pesticide decay", "Computer programs"], answer: 0, explanation: "It relates buoyant force to displaced fluid." },
      { question: "Which method anticipated integral ideas?", options: ["Method of exhaustion", "Turing test", "X-ray diffraction", "Natural selection"], answer: 0, explanation: "The method of exhaustion approximated curved areas and volumes." },
      { question: "Where did Archimedes live?", options: ["Syracuse", "London", "Basra", "Lahore"], answer: 0, explanation: "He was associated with Syracuse in Sicily." },
    ],
    trueFalse: [
      { statement: "Archimedes worked on both pure geometry and practical machines.", answer: true, explanation: "His work spans both." },
      { statement: "All stories about his burning mirrors are securely verified.", answer: false, explanation: "That tradition is disputed." },
      { statement: "The Palimpsest preserved lost Archimedes material.", answer: true, explanation: "It revealed important texts." },
    ],
    shortAnswer: [
      { question: "State Archimedes' principle.", modelAnswer: "An immersed body experiences an upward buoyant force equal to the weight of the displaced fluid.", marks: 5 },
      { question: "Why is the lever law important?", modelAnswer: "It gives a mathematical rule for mechanical advantage and balance.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain why Archimedes is central to mathematical physics.", modelAnswer: "Archimedes connected rigorous geometry with physical problems such as floating bodies, levers and centres of gravity. He used proof and approximation to calculate areas and volumes, anticipated integral reasoning, and showed that machines could be understood mathematically. His work became a model for later physics and engineering.", marks: 12 },
    ],
  },
};
