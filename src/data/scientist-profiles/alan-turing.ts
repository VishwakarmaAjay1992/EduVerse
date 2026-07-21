import type { ScientistProfile } from "./types";

export const alanTuring: ScientistProfile = {
  slug: "alan-turing",
  seoDescription:
    "Alan Turing founded computability theory, proved limits of algorithms, contributed to Enigma codebreaking, proposed the imitation game and modelled biological pattern formation.",
  timeline: [
    { year: "1912", title: "Born in London", description: "Alan Mathison Turing is born on 23 June in Maida Vale, London." },
    { year: "1931", title: "King's College, Cambridge", description: "Turing studies mathematics and becomes interested in logic, probability and foundations." },
    { year: "1936", title: "Computable numbers", description: "He defines an abstract machine model of computation and proves the Entscheidungsproblem unsolvable.", pivotal: true },
    { year: "1936-1938", title: "Princeton", description: "Turing studies with Alonzo Church and completes a PhD on ordinal logics." },
    { year: "1939", title: "Bletchley Park", description: "At the outbreak of war, Turing joins British codebreaking work.", pivotal: true },
    { year: "1940", title: "Bombe development", description: "He helps design methods and machines to attack Enigma settings.", pivotal: true },
    { year: "1945", title: "ACE design", description: "Turing works on the Automatic Computing Engine at the National Physical Laboratory." },
    { year: "1950", title: "Computing Machinery and Intelligence", description: "He proposes the imitation game as a way to discuss machine intelligence.", pivotal: true },
    { year: "1952", title: "Conviction and chemical treatment", description: "Turing is convicted under laws criminalising homosexual acts and subjected to hormonal treatment.", pivotal: true },
    { year: "1952", title: "Morphogenesis paper", description: "He publishes a mathematical theory of reaction-diffusion pattern formation." },
    { year: "1954", title: "Dies in Wilmslow", description: "Turing dies on 7 June at age forty-one." },
    { year: "2013", title: "Royal pardon", description: "Turing receives a posthumous royal pardon; broader pardons later recognize many others convicted under similar laws." },
  ],
  earlyLifeDetail: {
    childhood: "Turing showed early independence, fascination with science and a willingness to think from first principles. School did not always reward his style, but mathematics and chemistry absorbed him.",
    family: "His father Julius worked in the Indian Civil Service; his mother Sara supported his education. Turing and his brother spent much childhood time in Britain while their parents travelled.",
    education: "At Sherborne he was remembered as brilliant but unconventional. At King's College, Cambridge, he flourished mathematically. Princeton placed him near Church and the new logic of computability.",
    difficulties: "His wartime work was secret, his computing plans were institutionally constrained, and his sexuality made him vulnerable to prosecution in postwar Britain.",
    finances: "Turing had academic and government posts rather than wealth. His projects depended on state laboratories and university support.",
    personalLife: "His close school friend Christopher Morcom died young, a loss often seen as emotionally formative. In 1952 Turing reported a burglary and thereby became exposed to prosecution for homosexuality.",
    influences: "Hilbert's decision problem, Gödel's incompleteness results, Church's lambda calculus and wartime cryptanalytic pressure shaped his work.",
    booksRead: "He read mathematical logic, probability, cryptography, engineering, neurology and biology, moving easily across fields.",
    teachersAndMentors: "Max Newman introduced him to Hilbert's problem. Alonzo Church supervised him at Princeton. At Bletchley, collaboration with Welchman and others mattered deeply.",
    stories: ["Turing's 1936 machine was imaginary, but it defined real computation.", "Much of his wartime contribution remained classified for decades.", "He was a serious runner and nearly Olympic standard."],
  },
  turningPoints: ["Max Newman's lectures directed him to the decision problem.", "The universal machine transformed calculation into a general concept.", "War turned abstract logic into practical cryptanalysis.", "Postwar computer design shifted him from theory to engineering.", "Persecution cut short work in computation and biology."],
  failures: ["ACE was delayed and not built as Turing originally envisioned.", "The imitation game was often simplified into a crude chatbot test.", "His morphogenesis work was early and incomplete, though influential later.", "British law and institutions failed him catastrophically."],
  studentLessons: ["Define the problem precisely before solving it.", "Some limits are mathematical, not technological.", "Abstract models can become machines.", "A society can benefit from genius and still treat the person unjustly."],
  discoveries: [
    { name: "Turing machine and computability", period: "1936", background: "Mathematicians wanted to know whether every mathematical question could be decided mechanically.", problem: "What exactly is an algorithm, and are there problems no algorithm can solve?", method: "Turing imagined a machine reading and writing symbols according to rules on an infinite tape.", discovery: "He defined computability and proved the halting-type decision problem impossible in general.", importance: "This founded theoretical computer science.", modernApplications: ["Programming languages", "Compiler theory", "Algorithm analysis", "Limits of computation"] },
    { name: "Enigma cryptanalysis", period: "1939-1945", background: "German military communications used Enigma encryption with enormous setting possibilities.", problem: "How could codebreakers reduce and test possible Enigma keys quickly enough for intelligence use?", method: "Turing developed logical methods and helped design Bombe machines to exploit cribs and contradictions.", discovery: "Bletchley teams could read large amounts of encrypted traffic under changing conditions.", importance: "This contributed materially to Allied intelligence.", modernApplications: ["Cryptanalysis", "Cybersecurity", "Signals intelligence", "Automated search"] },
    { name: "Machine intelligence and morphogenesis", period: "1950-1952", background: "Electronic computers raised questions about intelligence, while biology raised questions about pattern formation.", problem: "Can machines imitate intelligent behaviour, and can simple chemical rules generate biological patterns?", method: "Turing proposed behavioural tests for intelligence and reaction-diffusion equations for pattern formation.", discovery: "He opened two fields: AI philosophy and mathematical biology.", importance: "Both remain active research areas.", modernApplications: ["Artificial intelligence", "Developmental biology", "Pattern simulation", "Complex systems"] },
  ],
  works: [
    { title: "On Computable Numbers", year: "1936", kind: "Paper", description: "The foundational computability paper." },
    { title: "Bombe cryptanalytic methods", year: "1939-1945", kind: "Project", description: "Wartime codebreaking methods and machines." },
    { title: "Computing Machinery and Intelligence", year: "1950", kind: "Paper", description: "The paper introducing the imitation game." },
    { title: "The Chemical Basis of Morphogenesis", year: "1952", kind: "Paper", description: "A mathematical model of biological pattern formation." },
  ],
  equations: [
    { name: "Halting undecidability statement", latex: "\\nexists H(P,x)\\text{ deciding all halting cases}", explanation: "No general algorithm can decide for every program and input whether it halts.", variables: [{ symbol: "P", meaning: "program" }, { symbol: "x", meaning: "input" }, { symbol: "H", meaning: "hypothetical halting decider" }], workedExample: { problem: "What does the theorem say about a perfect bug detector?", steps: [{ text: "A detector deciding all infinite loops would solve halting.", latex: "H(P,x)\\Rightarrow\\text{halts or loops}" }, { text: "Turing proves such a general H cannot exist." }], answer: "A perfect general halting detector is impossible." }, modernUse: "Defines limits of static analysis, verification and automated reasoning." },
    { name: "Reaction-diffusion form", latex: "\\frac{\\partial u}{\\partial t}=D_u\\nabla^2u+f(u,v)", explanation: "Turing's morphogenesis models use diffusion plus local reactions.", variables: [{ symbol: "u,v", meaning: "chemical concentrations" }, { symbol: "D_u", meaning: "diffusion coefficient" }, { symbol: "f(u,v)", meaning: "reaction term" }], workedExample: { problem: "If diffusion is zero, what remains?", steps: [{ text: "Set D_u=0.", latex: "\\frac{\\partial u}{\\partial t}=f(u,v)" }], answer: "Only local reaction changes concentration." }, modernUse: "Used in pattern formation, developmental biology and complex systems." },
  ],
  connections: [
    { field: "Computer Science", description: "Turing defined computation and influenced programming, AI and verification." },
    { field: "Mathematics", description: "His work belongs to logic, decidability and probability." },
    { field: "Engineering", description: "Bombe and ACE connected mathematics to machines." },
    { field: "Biology", description: "Morphogenesis brought mathematical modelling into developmental biology." },
  ],
  historicalContext: { worldEvents: "Turing lived through World War I aftermath, World War II and the early Cold War.", politics: "Secrecy and anti-gay laws shaped his life and delayed recognition.", wars: "World War II made cryptanalysis urgent.", universities: "Cambridge and Princeton were centres of mathematical logic.", scientificCommunity: "Church, Gödel, Newman, Welchman and von Neumann form key context.", technology: "Electromechanical Bombes, early stored-program computers and postwar electronics shaped his work." },
  backlash: [
    { type: "Government restriction", title: "Prosecution for homosexuality", description: "Turing was convicted under British laws criminalising homosexual acts.", status: "Verified" },
    { type: "Government restriction", title: "Security consequences", description: "His conviction affected his security clearance and official work.", status: "Verified" },
    { type: "Public criticism", title: "Delayed public recognition", description: "Wartime secrecy kept major contributions hidden for decades.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Political", description: "State secrecy and discriminatory law shaped his career." },
    { category: "Personal", description: "His conviction and treatment were devastating." },
    { category: "Scientific", description: "He worked at the edge of logic, engineering and biology." },
    { category: "Professional", description: "His computer designs depended on institutional support that was often slow." },
  ],
  achievements: [
    { title: "Smith's Prize", year: "1936", description: "Cambridge recognition in mathematics." },
    { title: "Officer of the Order of the British Empire", year: "1946", description: "Awarded for wartime service, though details remained secret." },
    { title: "Foundational AI paper", year: "1950", description: "Computing Machinery and Intelligence shaped AI debate." },
    { title: "Royal pardon", year: "2013", description: "Posthumous recognition of injustice." },
  ],
  funFacts: ["Turing was an excellent distance runner.", "The Turing Award is often called computing's Nobel Prize.", "His universal machine was a thought experiment before modern computers.", "His biology paper anticipated later pattern-formation research."],
  didYouKnow: [
    { title: "The universal machine", content: "One machine can simulate any other computable procedure if given the right description." },
    { title: "The test was a conversation game", content: "The imitation game was a careful philosophical proposal, not a simple claim that chat equals thought." },
    { title: "Secrecy hid history", content: "Bletchley work could not be publicly understood for decades." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Alan Turing in a 1940s codebreaking office with Bombe machine details, papers, logic symbols and subdued wartime lighting." },
    { category: "Scientific diagram", prompt: "Turing machine diagram with tape, head, state table and arrows, clean computer science educational style." },
    { category: "Equipment", prompt: "Bombe codebreaking machine with rotors and wiring, labelled historical engineering illustration." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Alan Turing as a young man.", suggestedSource: "Wikimedia Commons: Alan Turing aged 16.jpg" },
    { slot: "Laboratory", caption: "Bletchley Park Hut or codebreaking workspace.", suggestedSource: "Bletchley Park / Wikimedia Commons" },
    { slot: "Instruments", caption: "Bombe machine or rebuild.", suggestedSource: "Wikimedia Commons: Bombe-rebuild.jpg" },
    { slot: "Notebooks", caption: "Turing paper, ACE notes or morphogenesis manuscript.", suggestedSource: "Turing Archive" },
  ],
  relatedScientists: [
    { slug: "katherine-johnson", name: "Katherine Johnson", reason: "Both connect human calculation to machine computation." },
    { slug: "ada-lovelace", name: "Ada Lovelace", reason: "Lovelace anticipated programmable machines; Turing defined computation." },
    { slug: "emmy-noether", name: "Emmy Noether", reason: "Both reshaped abstract mathematics with deep physical and technical consequences." },
  ],
  relatedTopics: [
    { title: "Algorithms", href: "/subjects/computer-science/algorithms", description: "Turing defined the limits of algorithmic procedures." },
    { title: "Logic and Proof", href: "/subjects/mathematics/logic-and-proof", description: "Computability grew from mathematical logic." },
    { title: "Cryptography", href: "/subjects/computer-science/cryptography", description: "Bletchley Park was applied cryptanalysis." },
  ],
  quotes: [
    { text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.", source: "Computing Machinery and Intelligence, 1950", status: "Verified" },
    { text: "Those who can imagine anything, can create the impossible.", source: "Often attributed to Turing", status: "Disputed" },
    { text: "The original question, Can machines think?, I believe to be too meaningless to deserve discussion.", source: "Computing Machinery and Intelligence, 1950", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "What did Turing's 1936 paper define?", options: ["A model of computation", "Penicillin structure", "Raman scattering", "Vitamin B12"], answer: 0, explanation: "It defined computable numbers through abstract machines." },
      { question: "Where did Turing work in wartime codebreaking?", options: ["Bletchley Park", "NASA Langley", "TIFR", "Institut Pasteur"], answer: 0, explanation: "Bletchley Park was Britain's codebreaking centre." },
      { question: "What is the halting problem about?", options: ["Whether programs stop or run forever", "Whether rockets launch", "Whether crystals diffract", "Whether bacteria grow"], answer: 0, explanation: "It asks whether arbitrary programs halt on inputs." },
    ],
    trueFalse: [
      { statement: "Turing proved some problems cannot be solved by any algorithm.", answer: true, explanation: "That is a central result of computability theory." },
      { statement: "Turing was treated justly by the British legal system.", answer: false, explanation: "His prosecution is now widely recognized as a grave injustice." },
      { statement: "Turing also worked on biological pattern formation.", answer: true, explanation: "His 1952 morphogenesis paper did this." },
    ],
    shortAnswer: [
      { question: "What is a Turing machine?", modelAnswer: "An abstract machine that reads and writes symbols on a tape according to rules, used to define computation.", marks: 4 },
      { question: "Why was Bletchley Park secret important historically?", modelAnswer: "Secrecy delayed public recognition of Turing's and others' wartime cryptanalytic contributions.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain Turing's importance to computing.", modelAnswer: "Turing gave a precise definition of mechanical computation and showed that some problems are undecidable. This created the theoretical foundation for computer science before modern computers existed. His wartime work showed how logical procedures could be mechanized, and his postwar writing shaped computer design and artificial intelligence. His influence spans theory, engineering, cryptography and philosophy.", marks: 12 },
    ],
  },
};
