import type { ScientistProfile } from "./types";

export const adaLovelace: ScientistProfile = {
  slug: "ada-lovelace",
  seoDescription:
    "Ada Lovelace wrote the landmark 1843 notes on Babbage's Analytical Engine, including an early algorithm and a vision of symbolic, general-purpose computing.",
  timeline: [
    { year: "1815", title: "Born in London", description: "Augusta Ada Byron is born on 10 December, the daughter of Lord Byron and Annabella Milbanke." },
    { year: "1820s", title: "Mathematical education", description: "Her mother arranges serious tutoring in mathematics, logic, languages and music." },
    { year: "1833", title: "Meets Babbage", description: "Ada meets Charles Babbage and sees a demonstration of the Difference Engine.", pivotal: true },
    { year: "1835", title: "Marries William King", description: "She becomes Lady King, later Countess of Lovelace." },
    { year: "1840", title: "Babbage lectures in Turin", description: "Luigi Menabrea writes a French account of Babbage's Analytical Engine after the lectures." },
    { year: "1843", title: "Notes on the Analytical Engine", description: "Lovelace translates Menabrea's article and adds notes much longer than the original.", pivotal: true },
    { year: "1843", title: "Bernoulli-number procedure", description: "Note G describes a stepwise procedure for calculating Bernoulli numbers using the engine.", pivotal: true },
    { year: "1852", title: "Dies in London", description: "Lovelace dies of uterine cancer at age thirty-six." },
  ],
  earlyLifeDetail: {
    childhood: "Ada's childhood was unusually structured around mathematics and self-control. Her mother feared the emotional turbulence associated with Byron and treated logical education almost as moral training.",
    family: "She was Byron's only legitimate child, though he left England shortly after her birth. Annabella Milbanke, educated and mathematically inclined, directed Ada's upbringing.",
    education: "Mary Somerville encouraged her scientific interests, and Augustus De Morgan guided her through advanced mathematics by correspondence. This was exceptional for a woman in Victorian Britain.",
    difficulties: "She faced fragile health, limited formal institutions for women, and a scientific culture in which publication and authorship were mediated through private networks.",
    personalLife: "Marriage and aristocratic duties did not remove her intellectual ambition. She worked through letters, translation, annotation and collaboration.",
    influences: "Babbage's machines, Somerville's mentorship, De Morgan's mathematical discipline and her own poetic imagination shaped her computing vision.",
    booksRead: "Her studies included algebra, calculus, mechanics, logic and contemporary writing on Babbage's engines.",
    teachersAndMentors: "Mary Somerville introduced her to elite scientific circles, while De Morgan helped correct and extend her mathematical training.",
    stories: ["She called her method 'poetical science'.", "Her notes were signed only with initials, A. A. L.", "She saw symbolic manipulation where many observers saw only arithmetic."],
  },
  turningPoints: [
    "Meeting Babbage gave her a concrete machine to think with.",
    "Menabrea's article created the opportunity for her most important publication.",
    "Note G made algorithmic procedure visible in printed form.",
    "Her broader notes separated the idea of a program from the machinery that executes it.",
  ],
  failures: [
    "The Analytical Engine was not completed in her lifetime, so her algorithm was never run on the intended machine.",
    "Some later accounts exaggerated her role into myth, while others minimized it unfairly.",
    "Her mathematical training was serious but uneven because women were excluded from normal university routes.",
  ],
  studentLessons: [
    "A machine's importance may lie in what it can represent, not only what it can calculate.",
    "Clear notes can become scientific work when they add interpretation and new structure.",
    "Imagination and technical precision are not opposites.",
  ],
  discoveries: [
    {
      name: "Symbolic general-purpose computing",
      period: "1843",
      background: "Most calculating machines were understood as devices for arithmetic tables.",
      problem: "Could a machine operate on symbols according to rules, beyond simple number calculation?",
      method: "Lovelace analyzed the Analytical Engine's cards, memory, operations and sequencing.",
      discovery: "She argued that the engine could manipulate any objects whose relationships could be expressed symbolically.",
      importance: "This anticipated general-purpose computing and the separation of data, symbols and operations.",
      modernApplications: ["Programming languages", "Computer algebra", "Music software", "Symbolic AI"],
    },
    {
      name: "Bernoulli-number algorithm",
      period: "1843",
      background: "Bernoulli numbers appear in series expansions and number theory.",
      problem: "How might the Analytical Engine be instructed to calculate them step by step?",
      method: "She organized operations, variables and repeated steps in tabular form.",
      discovery: "Note G presented a detailed procedure often discussed as an early published computer program.",
      importance: "It shows algorithmic thinking before electronic computers existed.",
      modernApplications: ["Algorithm design", "Pseudocode", "Computational mathematics", "History of programming"],
    },
  ],
  works: [
    { title: "Translation of Menabrea's Sketch", year: "1843", kind: "Paper", description: "Lovelace translated the French paper on Babbage's Analytical Engine." },
    { title: "Notes A-G on the Analytical Engine", year: "1843", kind: "Paper", description: "Her notes explained the machine and expanded its conceptual significance." },
    { title: "Bernoulli-number table", year: "1843", kind: "Project", description: "A structured sequence of operations for the proposed engine." },
  ],
  equations: [
    {
      name: "Algorithm as a sequence",
      latex: "x_{k+1}=F(x_k)",
      explanation: "A simplified way to show that a procedure transforms a current state into a next state.",
      variables: [{ symbol: "x_k", meaning: "current computational state" }, { symbol: "F", meaning: "ordered operation" }, { symbol: "x_{k+1}", meaning: "next state" }],
      workedExample: { problem: "Apply F(x)=x+3 starting at x_0=2.", steps: [{ text: "First step.", latex: "x_1=2+3=5" }, { text: "Second step.", latex: "x_2=5+3=8" }], answer: "The procedure produces 5, then 8." },
      modernUse: "Used to introduce iterative algorithms and state transitions.",
    },
    {
      name: "Bernoulli-number generating function",
      latex: "\\frac{x}{e^x-1}=\\sum_{n=0}^{\\infty}B_n\\frac{x^n}{n!}",
      explanation: "Bernoulli numbers can be defined by this generating function.",
      variables: [{ symbol: "B_n", meaning: "nth Bernoulli number" }, { symbol: "x", meaning: "formal variable" }, { symbol: "n!", meaning: "factorial" }],
      workedExample: { problem: "What is the role of the series?", steps: [{ text: "Expand the right side as powers of x." }, { text: "Read coefficients to obtain Bernoulli numbers." }], answer: "The coefficients define the sequence." },
      modernUse: "Bernoulli numbers appear in number theory, calculus and computational mathematics.",
    },
  ],
  connections: [
    { field: "Computer Science", description: "Lovelace's notes are central to the history of algorithms and programmable machines." },
    { field: "Mathematics", description: "Her work relied on algebra, series and formal procedures." },
    { field: "Engineering", description: "She interpreted Babbage's mechanical architecture as a programmable system." },
  ],
  historicalContext: {
    worldEvents: "Lovelace worked in Victorian Britain during rapid industrial and mechanical innovation.",
    politics: "Class privilege gave access to tutors, while gender norms blocked formal scientific careers.",
    universities: "Women were largely excluded from university mathematics.",
    scientificCommunity: "Science circulated through salons, correspondence, lectures and private patronage.",
    technology: "Babbage's engines represented the frontier of mechanical calculation before electronics.",
  },
  backlash: [
    { type: "Gender bias", title: "No formal scientific post", description: "Victorian institutions did not offer women normal routes into mathematics or engineering.", status: "Verified" },
    { type: "Controversy", title: "Disputed 'first programmer' label", description: "Historians debate how to phrase her role because the machine was incomplete and Babbage contributed heavily.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Scientific work had to happen through private correspondence and publication under initials." },
    { category: "Health", description: "Long-term illness restricted her life and work." },
    { category: "Scientific", description: "She interpreted a machine that existed mostly as plans and partial mechanisms." },
  ],
  achievements: [
    { title: "Notes on the Analytical Engine", year: "1843", description: "A landmark text in computing history." },
    { title: "Ada programming language namesake", year: "1980", description: "The U.S. Department of Defense named a programming language after her." },
    { title: "Ada Lovelace Day", year: "Modern", description: "An international celebration of women in STEM." },
  ],
  funFacts: ["She called herself an analyst and metaphysician.", "Her father Lord Byron died when she was eight.", "The Analytical Engine used punched-card ideas related to Jacquard looms.", "Her most famous work appeared as translator's notes."],
  didYouKnow: [
    { title: "More than a translation", content: "Her notes were longer and more original than the article she translated." },
    { title: "Music example", content: "She imagined machines composing complex music if symbolic rules could represent it." },
    { title: "No completed engine", content: "The program was theoretical because Babbage never finished the Analytical Engine." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Ada Lovelace beside Analytical Engine plans, punched cards, mathematical notes and Victorian study objects." },
    { category: "Scientific diagram", prompt: "Clean diagram showing input cards, store, mill and output for Babbage's Analytical Engine." },
    { category: "Timeline infographic", prompt: "Ada Lovelace timeline from mathematical education to Babbage meeting and 1843 notes." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Ada Lovelace.", suggestedSource: "Wikimedia Commons: Ada Lovelace portrait.jpg" },
    { slot: "Instruments", caption: "Babbage Analytical Engine or Difference Engine mechanism.", suggestedSource: "Science Museum / Wikimedia Commons" },
    { slot: "Notebooks", caption: "Printed notes on the Analytical Engine.", suggestedSource: "Fourmilab / public-domain scans" },
    { slot: "Historic location", caption: "London scientific setting associated with Babbage and Lovelace.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "alan-turing", name: "Alan Turing", reason: "Turing later formalized computation mathematically." },
    { slug: "charles-babbage", name: "Charles Babbage", reason: "Babbage designed the engine Lovelace analyzed." },
    { slug: "emmy-noether", name: "Emmy Noether", reason: "Both worked against gender barriers in mathematical culture." },
  ],
  relatedTopics: [
    { title: "Algorithms", href: "/subjects/computer-science/algorithms", description: "Lovelace's work is a historical entry point for algorithms." },
    { title: "Sequences and Series", href: "/subjects/mathematics/sequences-and-series", description: "Bernoulli numbers belong to series mathematics." },
    { title: "Logic and Proof", href: "/subjects/mathematics/logic-and-proof", description: "Her symbolic vision depends on formal rules." },
  ],
  quotes: [
    { text: "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.", source: "Notes on the Analytical Engine, 1843", status: "Verified" },
    { text: "That brain of mine is something more than merely mortal; as time will show.", source: "Letter, widely cited", status: "Widely attributed" },
    { text: "The science of operations, as derived from mathematics more especially, is a science of itself.", source: "Notes on the Analytical Engine, 1843", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "Which machine did Lovelace analyze?", options: ["Analytical Engine", "Bombe", "Crescograph", "Cyclotron"], answer: 0, explanation: "Her notes explained Babbage's proposed Analytical Engine." },
      { question: "What sequence appeared in her famous algorithm?", options: ["Bernoulli numbers", "DNA bases", "Planetary periods", "Prime gaps only"], answer: 0, explanation: "Note G concerned Bernoulli numbers." },
      { question: "Why is her vision important?", options: ["It included symbolic computing", "It rejected all machines", "It discovered radioactivity", "It measured gravity"], answer: 0, explanation: "She saw that machines could manipulate symbols under rules." },
    ],
    trueFalse: [
      { statement: "The Analytical Engine was completed and used by Lovelace.", answer: false, explanation: "It remained unfinished in her lifetime." },
      { statement: "Lovelace's notes were longer than the translated article.", answer: true, explanation: "Her notes greatly expanded the original." },
      { statement: "Victorian women had easy access to university mathematics.", answer: false, explanation: "They faced major institutional barriers." },
    ],
    shortAnswer: [
      { question: "Why is Note G famous?", modelAnswer: "It lays out a stepwise procedure for calculating Bernoulli numbers on the Analytical Engine.", marks: 4 },
      { question: "What did Lovelace mean by symbolic computing?", modelAnswer: "A machine could operate on symbols representing numbers, music or other relationships if rules encoded them.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Lovelace's contribution to computing.", modelAnswer: "Lovelace interpreted Babbage's Analytical Engine as more than a calculator. Her notes described operations, memory, sequencing and an algorithm for Bernoulli numbers. More importantly, she argued that the engine could manipulate symbols whenever their relationships could be expressed formally. That vision anticipates general-purpose computing, even though the machine was never completed.", marks: 12 },
    ],
  },
};
