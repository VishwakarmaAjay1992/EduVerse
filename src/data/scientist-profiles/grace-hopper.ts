import type { ScientistProfile } from "./types";

export const graceHopper: ScientistProfile = {
  slug: "grace-hopper",
  seoDescription: "Grace Hopper pioneered compilers, programming languages and COBOL, helping transform computing from machine coding into human-readable software.",
  timeline: [
    { year: "1906", title: "Born in New York", description: "Grace Brewster Murray is born on 9 December." },
    { year: "1934", title: "PhD in mathematics", description: "She earns a doctorate from Yale." },
    { year: "1944", title: "Harvard Mark I", description: "Hopper joins the Navy Reserve and programs the Mark I.", pivotal: true },
    { year: "1952", title: "A-0 compiler", description: "She develops an early compiler system.", pivotal: true },
    { year: "1959", title: "COBOL work", description: "Hopper helps shape business-oriented programming language design." },
    { year: "1986", title: "Retires from Navy", description: "She retires as a rear admiral." },
    { year: "1992", title: "Dies", description: "Hopper dies on 1 January." },
  ],
  earlyLifeDetail: {
    childhood: "Hopper was curious about how things worked, famously taking apart alarm clocks as a child.",
    family: "Her family encouraged education, and she entered Vassar before graduate study at Yale.",
    education: "She trained as a mathematician, which helped her think structurally about computation.",
    difficulties: "She entered computing before software engineering was a recognized profession and worked inside male-dominated military and technical settings.",
    finances: "Academic and Navy posts supported her career.",
    personalLife: "She married Vincent Hopper; the marriage ended, but she kept the surname professionally.",
    influences: "Mathematics, naval service, Howard Aiken's Mark I team and early business computing shaped her.",
    booksRead: "Her technical world included mathematics, machine manuals, programming reports and language specifications.",
    teachersAndMentors: "Howard Aiken influenced her early computing work, though Hopper developed her own software vision.",
    stories: ["She popularized nanosecond wire demonstrations.", "The famous computer bug was a real moth found in a relay.", "She pushed people to ask forgiveness rather than permission."],
  },
  turningPoints: ["The Navy assigned her to the Mark I.", "Compiler work convinced her programming could become more human-readable.", "COBOL spread her ideas into business computing.", "Her teaching made her a public face of computing."],
  failures: ["Many early programmers doubted that computers could understand English-like languages.", "Hardware changed quickly, making portability a major challenge.", "The bug story is often simplified beyond the real maintenance log."],
  studentLessons: ["Good tools make hard work repeatable.", "Programming languages are designed for humans as well as machines.", "Clear communication can be a technical breakthrough."],
  discoveries: [
    { name: "Compiler-based programming", period: "1950s", background: "Early programs were written close to machine code.", problem: "Could programmers write symbolic instructions and have software translate them?", method: "Hopper built systems connecting stored subroutines and symbolic calls to machine instructions.", discovery: "Compiler technology made higher-level programming practical.", importance: "It changed software development.", modernApplications: ["Programming languages", "Compilers", "Software engineering", "Business systems"] },
    { name: "Business-readable programming", period: "1950s-1960s", background: "Business computing needed maintainable programs.", problem: "Could programming language resemble ordinary business language?", method: "Hopper advocated English-like syntax and portability.", discovery: "COBOL became a durable business programming language.", importance: "It brought computing into administration, finance and government.", modernApplications: ["Enterprise systems", "Database applications", "Legacy modernization"] },
  ],
  works: [
    { title: "Harvard Mark I programming manual", year: "1946", kind: "Book", description: "Documentation for one of the earliest programmable computers." },
    { title: "A-0 system", year: "1952", kind: "Invention", description: "Early compiler system." },
    { title: "COBOL development", year: "1959", kind: "Project", description: "Language effort for business data processing." },
  ],
  equations: [
    { name: "Translation pipeline", latex: "S\\rightarrow C\\rightarrow M", explanation: "Source code is translated by a compiler into machine code.", variables: [{ symbol: "S", meaning: "source code" }, { symbol: "C", meaning: "compiler" }, { symbol: "M", meaning: "machine code" }], workedExample: { problem: "What does a compiler output?", steps: [{ text: "It processes source instructions." }], answer: "Machine-executable code." }, modernUse: "Basic model of programming language implementation." },
    { name: "Nanosecond distance", latex: "d=ct", explanation: "Hopper used wire lengths to demonstrate how far electricity travels in tiny times.", variables: [{ symbol: "d", meaning: "distance" }, { symbol: "c", meaning: "signal speed approximation" }, { symbol: "t", meaning: "time" }], workedExample: { problem: "Light travels about 30 cm in 1 ns.", steps: [{ text: "Use d=ct for t=1 ns." }], answer: "About 0.3 m in vacuum." }, modernUse: "Hardware timing and latency intuition." },
  ],
  connections: [
    { field: "Computer Science", description: "Hopper's work is foundational to compilers and programming languages." },
    { field: "Mathematics", description: "Her mathematical training shaped algorithmic thinking." },
    { field: "Engineering", description: "She connected software abstractions to real machines." },
  ],
  historicalContext: { worldEvents: "Her work began in World War II and expanded through the business-computing boom.", politics: "Military computing shaped early machines and careers.", wars: "World War II brought her into Navy computing.", universities: "Vassar, Yale and Harvard were central early settings.", scientificCommunity: "Aiken, Eckert-Mauchly teams and standards committees shaped the field.", technology: "Relays, vacuum tubes, UNIVAC systems and mainframes shaped her work." },
  backlash: [
    { type: "Gender bias", title: "Women in computing undervalued", description: "Early software work often lacked the status later attached to computing.", status: "Verified" },
    { type: "Academic conflict", title: "Compiler skepticism", description: "Some programmers doubted higher-level language translation would be efficient or feasible.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Military and computing institutions were male-dominated." },
    { category: "Scientific", description: "Compiler design was a new technical problem." },
    { category: "Professional", description: "She had to persuade organizations to trust higher-level languages." },
  ],
  achievements: [
    { title: "Rear Admiral", year: "1985", description: "High-ranking Navy recognition." },
    { title: "National Medal of Technology", year: "1991", description: "Recognized for computing leadership." },
    { title: "Presidential Medal of Freedom", year: "2016", description: "Posthumous recognition." },
  ],
  funFacts: ["She gave out wires representing nanoseconds.", "The moth in the relay helped popularize debugging.", "She worked into her seventies and eighties.", "COBOL code still runs major systems."],
  didYouKnow: [
    { title: "Compiler leap", content: "Compilers let humans write at a higher level than raw machine code." },
    { title: "Readable code", content: "Hopper wanted programs that more people could understand." },
    { title: "Navy educator", content: "She became famous for explaining computing clearly." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Grace Hopper with UNIVAC console, compiler flow diagram and naval computing setting." },
    { category: "Scientific diagram", prompt: "Compiler pipeline from source code to machine code with readable labels." },
    { category: "Timeline infographic", prompt: "Grace Hopper timeline from Yale and Mark I to compiler, COBOL and Navy honours." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Grace Hopper.", suggestedSource: "Wikimedia Commons: Grace Hopper and UNIVAC.jpg" },
    { slot: "Instruments", caption: "Harvard Mark I or UNIVAC computer.", suggestedSource: "Computer History Museum / Wikimedia Commons" },
    { slot: "Notebooks", caption: "Programming manual or COBOL specification.", suggestedSource: "Computer History Museum" },
    { slot: "Historic location", caption: "Harvard Computation Laboratory.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "ada-lovelace", name: "Ada Lovelace", reason: "Both shaped the history of programming." },
    { slug: "alan-turing", name: "Alan Turing", reason: "Turing defined computation; Hopper helped make programming practical." },
    { slug: "katherine-johnson", name: "Katherine Johnson", reason: "Both worked through the transition from human calculation to electronic computation." },
  ],
  relatedTopics: [
    { title: "Algorithms", href: "/subjects/computer-science/algorithms", description: "Compilers translate algorithmic instructions." },
    { title: "Functions", href: "/subjects/mathematics/functions", description: "Programming uses inputs, outputs and transformations." },
    { title: "Logic", href: "/subjects/mathematics/logic-and-proof", description: "Programming languages depend on formal logic." },
  ],
  quotes: [
    { text: "The most dangerous phrase in the language is, We've always done it this way.", source: "Grace Hopper, widely quoted", status: "Verified" },
    { text: "It is easier to ask forgiveness than it is to get permission.", source: "Grace Hopper, widely quoted", status: "Verified" },
    { text: "A ship in port is safe, but that is not what ships are for.", source: "Often attributed to Hopper", status: "Disputed" },
  ],
  quiz: {
    mcq: [
      { question: "What technology is Hopper strongly associated with?", options: ["Compilers", "Fission", "Cepheids", "Plesiosaurs"], answer: 0, explanation: "She pioneered compiler systems." },
      { question: "Which language did she help influence?", options: ["COBOL", "Latin", "Sanskrit", "FORTRAN only"], answer: 0, explanation: "She helped shape COBOL." },
      { question: "What computer did she program in World War II?", options: ["Harvard Mark I", "Bombe only", "Analytical Engine", "ENIAC only"], answer: 0, explanation: "She worked on the Harvard Mark I." },
    ],
    trueFalse: [
      { statement: "Compilers translate higher-level code.", answer: true, explanation: "That is their central role." },
      { statement: "Hopper believed programming should remain unreadable.", answer: false, explanation: "She pushed for readable languages." },
      { statement: "She served in the U.S. Navy.", answer: true, explanation: "She retired as a rear admiral." },
    ],
    shortAnswer: [
      { question: "What is a compiler?", modelAnswer: "Software that translates source code into machine-executable instructions.", marks: 4 },
      { question: "Why did COBOL matter?", modelAnswer: "It made business programming more readable and portable across machines.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Hopper's contribution to computing.", modelAnswer: "Hopper helped move programming away from machine-specific codes toward human-readable languages. Her compiler work showed that software could translate symbolic instructions into machine operations. Her advocacy for COBOL and readable programming influenced business computing, software engineering and the way programmers think about language design.", marks: 12 },
    ],
  },
};
