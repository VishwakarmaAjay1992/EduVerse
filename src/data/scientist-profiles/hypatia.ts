import type { ScientistProfile } from "./types";

export const hypatia: ScientistProfile = {
  slug: "hypatia",
  seoDescription:
    "Hypatia of Alexandria was a late-antique mathematician, astronomer and philosopher whose teaching preserved scientific traditions amid political conflict.",
  timeline: [
    { year: "c. 350", title: "Born in Alexandria", description: "Hypatia is born in Alexandria, a major centre of ancient learning." },
    { year: "Late 300s", title: "Trained by Theon", description: "Her father Theon, a mathematician and astronomer, educates her in mathematics and philosophy." },
    { year: "c. 390", title: "Leads a school", description: "Hypatia becomes a respected teacher of philosophy, mathematics and astronomy.", pivotal: true },
    { year: "c. 400", title: "Commentary tradition", description: "She is associated with teaching and commentaries on mathematical and astronomical works." },
    { year: "Early 400s", title: "Public influence", description: "Students and civic leaders seek her counsel in Alexandria." },
    { year: "415", title: "Murdered", description: "Hypatia is killed by a mob during political and religious conflict in Alexandria.", pivotal: true },
  ],
  earlyLifeDetail: {
    childhood: "Details are limited, but Hypatia grew up inside Alexandria's mathematical culture and received an education rare for any person, especially a woman, in late antiquity.",
    family: "Her father Theon of Alexandria was a mathematician and commentator on Ptolemy and Euclid. His scholarly life shaped her training.",
    education: "Hypatia mastered mathematics, astronomy and Neoplatonic philosophy and became a public teacher with elite students.",
    difficulties: "Her writings survive only indirectly, and her life became entangled in Alexandria's civic and religious struggles.",
    finances: "She likely lived through teaching, family scholarly status and patronage from students and civic networks.",
    personalLife: "Ancient sources emphasize her public teaching, philosophical discipline and independence.",
    influences: "Theon, Plato, Euclid, Ptolemy, Diophantus and Alexandrian commentary traditions shaped her intellectual world.",
    booksRead: "She taught mathematical classics including Euclid, Ptolemy and works associated with Diophantus and Apollonius.",
    teachersAndMentors: "Theon was the central known teacher and scholarly collaborator.",
    stories: ["Students travelled to hear her lectures.", "Letters from Synesius mention scientific instruments.", "Her death became a symbol far beyond the surviving evidence."],
  },
  turningPoints: ["Theon trained her in Alexandria's scholarly tradition.", "Her school gave her public intellectual authority.", "Her association with civic leaders placed her in political danger.", "Her murder turned her into a lasting symbol of attacks on learning."],
  failures: ["No signed works by Hypatia survive intact.", "Later retellings often use her as a symbol while simplifying the history.", "The violence around her death shows the fragility of scholarship in political conflict."],
  studentLessons: ["Teaching can preserve science across centuries.", "Absence of surviving texts does not mean absence of influence.", "Historical symbols must be handled carefully and accurately."],
  discoveries: [
    { name: "Mathematical commentary and teaching", period: "Late 4th-early 5th century", background: "Ancient mathematics survived through copying, commentary and instruction.", problem: "How could difficult mathematical texts remain usable for new students?", method: "Hypatia taught, explained and possibly edited works in geometry, algebra and astronomy.", discovery: "Her school sustained advanced mathematical learning in Alexandria.", importance: "Transmission is a scientific contribution when it preserves methods and texts.", modernApplications: ["Mathematics education", "History of science", "Textual scholarship", "Astronomy education"] },
    { name: "Astronomical instruments and models", period: "Late antiquity", background: "Students used instruments to calculate and represent celestial motions.", problem: "How could astronomical positions and measurements be taught and applied?", method: "Her circle used mathematical astronomy and instruments such as astrolabes and hydrometers.", discovery: "She became associated with practical mathematical astronomy and instrument culture.", importance: "This links theory, teaching and measurement.", modernApplications: ["Astronomy education", "Navigation history", "Scientific instruments", "Planetarium modelling"] },
  ],
  works: [
    { title: "Commentary on Diophantus", year: "Attributed", kind: "Book", description: "Ancient and later sources associate Hypatia with commentary on arithmetic texts." },
    { title: "Commentary on Apollonius", year: "Attributed", kind: "Book", description: "She is associated with work on conic sections through commentary tradition." },
    { title: "Astronomical teaching", year: "c. 400", kind: "Project", description: "Teaching Ptolemaic astronomy and mathematical philosophy in Alexandria." },
  ],
  equations: [
    {
      name: "Circle circumference",
      latex: "C=2\\pi r",
      explanation: "A basic relation from Greek geometry used in mathematical astronomy and geometry.",
      variables: [{ symbol: "C", meaning: "circumference" }, { symbol: "r", meaning: "radius" }, { symbol: "\\pi", meaning: "circle constant" }],
      workedExample: { problem: "Find C when r=3.", steps: [{ text: "Substitute.", latex: "C=2\\pi(3)=6\\pi" }], answer: "6 pi units." },
      modernUse: "Basic in geometry, astronomy and measurement.",
    },
    {
      name: "Linear interpolation",
      latex: "y=y_1+\\frac{x-x_1}{x_2-x_1}(y_2-y_1)",
      explanation: "Astronomical tables often require estimating values between tabulated entries.",
      variables: [{ symbol: "x", meaning: "input value" }, { symbol: "y", meaning: "estimated output" }, { symbol: "x_1,x_2", meaning: "known input bounds" }],
      workedExample: { problem: "Estimate halfway between 10 and 20.", steps: [{ text: "Halfway gives the average.", latex: "y=10+\\frac{1}{2}(20-10)=15" }], answer: "15." },
      modernUse: "Used in tables, computation and data analysis.",
    },
  ],
  connections: [
    { field: "Mathematics", description: "Hypatia represents teaching and preservation of advanced ancient mathematics." },
    { field: "Astronomy", description: "Her circle taught mathematical astronomy and instruments." },
    { field: "Physics", description: "Ancient astronomy connected geometrical models to physical cosmology." },
  ],
  historicalContext: { worldEvents: "Hypatia lived in late Roman Alexandria amid religious and imperial change.", politics: "Conflict between civic and church authorities shaped the crisis around her death.", universities: "Alexandria functioned as a major teaching centre, though not a modern university.", scientificCommunity: "Students such as Synesius show her wide intellectual network.", technology: "Manuscripts, astronomical tables and instruments carried knowledge." },
  backlash: [
    { type: "Religious opposition", title: "Sectarian conflict", description: "Her murder occurred amid religious and political tensions in Alexandria.", status: "Verified" },
    { type: "Political pressure", title: "Association with civic authority", description: "Her friendship with Orestes placed her in a dangerous factional struggle.", status: "Verified" },
    { type: "Controversy", title: "Later mythmaking", description: "Modern retellings often exaggerate or simplify the causes of her death.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Her public authority as a woman teacher was exceptional and vulnerable." },
    { category: "Political", description: "Alexandrian factional conflict became deadly." },
    { category: "Professional", description: "Her work survives mostly through others, making reconstruction difficult." },
    { category: "Social", description: "Religious and civic identities shaped public life." },
  ],
  achievements: [
    { title: "Leader of an Alexandrian school", year: "c. 400", description: "Recognized as an influential teacher of philosophy and mathematics." },
    { title: "Preserver of mathematical tradition", year: "Late antiquity", description: "Associated with commentaries and advanced instruction." },
    { title: "Symbol of intellectual freedom", year: "After 415", description: "Her life and death became enduring historical symbols." },
  ],
  funFacts: ["Her father Theon edited mathematical texts.", "She is one of the best-known women intellectuals of antiquity.", "Synesius' letters are key evidence for her circle.", "Her own writings are lost or embedded in later traditions."],
  didYouKnow: [
    { title: "Teaching as science", content: "Hypatia's importance lies largely in education and preservation." },
    { title: "Evidence is fragmentary", content: "Historians must separate ancient testimony from later legend." },
    { title: "Instruments mattered", content: "Her circle discussed tools for astronomy and measurement." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Hypatia in ancient Alexandria with scrolls, geometric diagrams, astrolabe and lecture setting." },
    { category: "Scientific diagram", prompt: "Astrolabe teaching diagram with horizon, altitude circles and star position." },
    { category: "Timeline infographic", prompt: "Hypatia timeline showing Alexandria, Theon, teaching, students and 415 conflict." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Idealized portrait of Hypatia.", suggestedSource: "Wikimedia Commons: Hypatia portrait.png" },
    { slot: "Instruments", caption: "Astrolabe or hydrometer connected to late-antique instrument tradition.", suggestedSource: "Wikimedia Commons: Astrolabe-Persian-18C.jpg" },
    { slot: "Notebooks", caption: "Manuscript page of Euclid, Ptolemy or Diophantus tradition.", suggestedSource: "Public-domain manuscript collections" },
    { slot: "Historic location", caption: "Alexandria historical setting or library-related monument.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "euclid", name: "Euclid", reason: "Hypatia taught and preserved the Greek mathematical tradition." },
    { slug: "pythagoras", name: "Pythagoras", reason: "Her Neoplatonic teaching connected mathematics and philosophy." },
    { slug: "ada-lovelace", name: "Ada Lovelace", reason: "Both became symbols of women in mathematical history." },
  ],
  relatedTopics: [
    { title: "Geometry", href: "/subjects/mathematics/geometry", description: "Alexandrian teaching centered on geometry." },
    { title: "Astronomy", href: "/subjects/physics/astronomy", description: "Hypatia taught mathematical astronomy." },
    { title: "History of Science", href: "/learning-hub/history-of-science", description: "Her biography shows transmission and conflict." },
  ],
  quotes: [
    { text: "Reserve your right to think.", source: "Common modern attribution to Hypatia", status: "Disputed" },
    { text: "Fables should be taught as fables, myths as myths, and miracles as poetic fancies.", source: "Common modern attribution", status: "Disputed" },
    { text: "She was by nature more refined and talented than her father.", source: "Socrates Scholasticus, paraphrase", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "Where did Hypatia teach?", options: ["Alexandria", "Cambridge", "Gombe", "Syracuse only"], answer: 0, explanation: "She was associated with Alexandria." },
      { question: "Who was her father?", options: ["Theon", "Babbage", "Hardy", "Eddington"], answer: 0, explanation: "Theon of Alexandria was a mathematician." },
      { question: "Why is evidence about her work difficult?", options: ["Her signed writings do not survive intact", "She wrote only software", "She refused all teaching", "No students mentioned her"], answer: 0, explanation: "Her influence is known indirectly." },
    ],
    trueFalse: [
      { statement: "Hypatia was murdered during political and religious conflict.", answer: true, explanation: "Ancient sources connect her death to Alexandrian factional conflict." },
      { statement: "All famous quotes attributed to Hypatia are secure.", answer: false, explanation: "Many are disputed modern attributions." },
      { statement: "Teaching and commentary helped preserve ancient science.", answer: true, explanation: "This was central to scholarly transmission." },
    ],
    shortAnswer: [
      { question: "Why is Hypatia important despite lost writings?", modelAnswer: "Her teaching, commentary tradition and influence on students preserved advanced mathematics and astronomy.", marks: 5 },
      { question: "What makes her death historically significant?", modelAnswer: "It shows how intellectual life can become vulnerable during political and religious conflict.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Hypatia's role in the history of science.", modelAnswer: "Hypatia was a major teacher of mathematics, astronomy and philosophy in late-antique Alexandria. Although her writings do not survive securely, ancient testimony links her to commentary, instruction and instruments. Her life shows that scientific knowledge depends on teachers and preservers as well as discoverers, while her violent death illustrates the danger political conflict can pose to scholarship.", marks: 12 },
    ],
  },
};
