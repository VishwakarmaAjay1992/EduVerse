import type { ScientistProfile } from "./types";

export const srinivasaRamanujan: ScientistProfile = {
  slug: "srinivasa-ramanujan",
  seoDescription:
    "Srinivasa Ramanujan was a self-taught Indian mathematician whose notebooks transformed number theory, partitions, modular forms, continued fractions and infinite series.",
  timeline: [
    { year: "1887", title: "Born in Erode", description: "Srinivasa Ramanujan is born on 22 December in Erode, Madras Presidency, British India." },
    { year: "1890s", title: "Childhood in Kumbakonam", description: "He grows up in Kumbakonam, where temple culture, school mathematics and intense self-study shape his imagination." },
    { year: "1903", title: "Carr's Synopsis", description: "Ramanujan obtains G. S. Carr's Synopsis of Pure Mathematics, a dense list of results that becomes his private syllabus.", pivotal: true },
    { year: "1904", title: "Scholarship lost", description: "He wins a college scholarship but loses it after neglecting non-mathematical subjects." },
    { year: "1909", title: "Marries Janaki", description: "Ramanujan marries Janaki Ammal while still struggling financially and searching for mathematical employment." },
    { year: "1911", title: "First publication", description: "He publishes in the Journal of the Indian Mathematical Society and begins receiving local attention." },
    { year: "1913", title: "Letter to Hardy", description: "Ramanujan sends G. H. Hardy a letter filled with extraordinary formulae, beginning one of mathematics' most famous collaborations.", pivotal: true },
    { year: "1914", title: "Travels to Cambridge", description: "He arrives at Trinity College, Cambridge, where Hardy and Littlewood help place his discoveries in formal mathematical context.", pivotal: true },
    { year: "1916", title: "BA by research", description: "Cambridge grants him a Bachelor of Arts by research for his work on highly composite numbers." },
    { year: "1918", title: "Royal Society and Trinity", description: "Ramanujan becomes a Fellow of the Royal Society and a Fellow of Trinity College.", pivotal: true },
    { year: "1919", title: "Returns to India", description: "Ill health forces him to return to India after years of difficult conditions in England." },
    { year: "1920", title: "Mock theta functions", description: "In his final letter to Hardy he describes the mysterious mock theta functions." },
    { year: "1920", title: "Dies in Kumbakonam", description: "Ramanujan dies on 26 April at age thirty-two, leaving notebooks that mathematicians would study for generations." },
  ],
  earlyLifeDetail: {
    childhood:
      "Ramanujan's childhood was marked by religious devotion, intellectual intensity and unusual mathematical memory. He did not simply learn school mathematics quickly; he began experimenting with identities, series and transformations as if mathematics were a language he already heard internally.",
    family:
      "His father K. Srinivasa Iyengar worked as a clerk in a sari shop, and his mother Komalatammal was connected to temple singing and local religious life. The family was not wealthy, but his mother strongly shaped his discipline, faith and daily routines.",
    education:
      "Ramanujan performed brilliantly in mathematics but repeatedly failed or abandoned formal programs because he devoted nearly all his energy to one subject. This made him academically fragile even while he was mathematically extraordinary.",
    difficulties:
      "He faced poverty, weak health, limited access to advanced books, colonial academic distance and a mismatch between his intuitive style and university requirements for rigorous proof.",
    finances:
      "For years he depended on family support, small clerical work and patrons. The Madras mathematical community eventually helped him receive support, but his route to research was precarious.",
    personalLife:
      "His marriage to Janaki Ammal began while he was still seeking stable employment. During the Cambridge years he was separated from family, diet, climate and familiar religious life, which intensified the hardship of illness.",
    influences:
      "Carr's Synopsis, Indian mathematical society mentors, Hardy, Littlewood and Ramanujan's own devotional imagination all shaped his work. He often said mathematical insight was connected to the goddess Namagiri.",
    booksRead:
      "The central book was Carr's Synopsis of Pure Mathematics, which listed thousands of results with few proofs. Ramanujan also read journals and problem columns from the Indian Mathematical Society.",
    teachersAndMentors:
      "Local supporters such as R. Ramachandra Rao and S. Narayana Iyer helped him before Hardy recognized the full force of his letters. Hardy and Littlewood then became his most important mathematical collaborators in Cambridge.",
    stories: [
      "Ramanujan filled notebooks with results that were often stated without conventional proofs.",
      "Hardy later said his collaboration with Ramanujan was the one romantic incident of his life.",
      "The taxi-cab number 1729 became famous because Ramanujan instantly recognized its arithmetic structure.",
    ],
  },
  turningPoints: [
    "Finding Carr's Synopsis gave Ramanujan a compressed map of higher mathematics.",
    "Losing scholarships exposed how poorly ordinary academic systems fit his one-subject genius.",
    "Publication in the Indian Mathematical Society connected him to local patrons.",
    "The 1913 letter to Hardy moved him from isolation to international mathematics.",
    "Cambridge collaboration turned many of his insights into publishable research.",
    "His final mock theta letter opened questions that lasted through the twentieth century.",
  ],
  failures: [
    "He failed formal examinations because he neglected subjects outside mathematics.",
    "Many notebook entries lacked proofs, making later verification slow and difficult.",
    "Some formulae were incomplete, conditional or required interpretation in modern language.",
    "His health collapsed before he could develop much of his late work himself.",
  ],
  studentLessons: [
    "Deep originality can begin outside elite institutions, but communication and proof matter.",
    "A powerful example is not the same as a complete theorem.",
    "Mentorship can protect unusual talent without forcing it to become ordinary.",
    "Mathematical intuition becomes durable when later generations can verify and extend it.",
  ],
  discoveries: [
    {
      name: "Partition formulae and congruences",
      period: "1910s",
      background: "The partition function p(n) counts the ways a number can be written as a sum of positive integers without regard to order.",
      problem: "How fast does p(n) grow, and why do striking divisibility patterns appear?",
      method: "Ramanujan combined numerical experimentation, modular-function insight and collaboration with Hardy on analytic methods.",
      discovery: "He found remarkable congruences such as p(5n+4) divisible by 5 and helped create an asymptotic formula for p(n).",
      importance: "Partitions became a central bridge between number theory, analysis and modular forms.",
      modernApplications: ["Combinatorics", "Modular forms", "Statistical mechanics", "String theory counting problems"],
    },
    {
      name: "Mock theta functions",
      period: "1920",
      background: "Theta functions were already important in analysis and number theory, but Ramanujan's final examples behaved like relatives that did not fit the known theory.",
      problem: "What are these new q-series, and why do they imitate modular behaviour without being classical modular forms?",
      method: "Ramanujan listed examples and transformation-like behaviour in his final correspondence with Hardy.",
      discovery: "He introduced mock theta functions, whose modern explanation uses harmonic Maass forms.",
      importance: "The subject became one of the deepest afterlives of his notebooks.",
      modernApplications: ["Number theory", "Moonshine phenomena", "Black-hole entropy mathematics", "Representation theory"],
    },
    {
      name: "Infinite series, continued fractions and highly composite numbers",
      period: "1900s-1910s",
      background: "Ramanujan explored identities involving pi, gamma functions, continued fractions and divisor functions.",
      problem: "Could hidden patterns produce fast computation and new classifications of integers?",
      method: "He used intense numerical experimentation and transformation formulae from elliptic and modular theory.",
      discovery: "He produced rapidly convergent series, striking continued fractions and a systematic study of highly composite numbers.",
      importance: "Many results anticipated later computational and theoretical developments.",
      modernApplications: ["High-precision computation", "Analytic number theory", "Special functions", "Algorithmic mathematics"],
    },
  ],
  works: [
    { title: "Some properties of Bernoulli's numbers", year: "1911", kind: "Paper", description: "One of Ramanujan's first published papers, appearing in the Journal of the Indian Mathematical Society." },
    { title: "Notebooks", year: "1903-1914", kind: "Project", description: "Thousands of formulae on series, products, continued fractions, partitions and special functions." },
    { title: "Highly composite numbers", year: "1915", kind: "Paper", description: "A major work developing a theory of integers with unusually many divisors." },
    { title: "Modular equations and approximations to pi", year: "1914", kind: "Paper", description: "Research containing identities that later influenced rapid computation of pi." },
    { title: "Final letter to Hardy", year: "1920", kind: "Paper", description: "The source of Ramanujan's mock theta functions." },
  ],
  equations: [
    {
      name: "Hardy-Ramanujan partition asymptotic",
      latex: "p(n)\\sim \\frac{1}{4n\\sqrt{3}}e^{\\pi\\sqrt{2n/3}}",
      explanation: "This estimates how rapidly the number of partitions of n grows.",
      variables: [
        { symbol: "p(n)", meaning: "number of partitions of n" },
        { symbol: "n", meaning: "positive integer being partitioned" },
        { symbol: "\\sim", meaning: "asymptotically equivalent for large n" },
      ],
      workedExample: {
        problem: "Use the formula qualitatively for n=100.",
        steps: [
          { text: "Substitute n=100.", latex: "p(100)\\approx \\frac{1}{400\\sqrt{3}}e^{\\pi\\sqrt{200/3}}" },
          { text: "The exponential term dominates the growth." },
        ],
        answer: "The estimate gives a large value close in scale to the exact p(100)=79270.",
      },
      modernUse: "Used in analytic number theory and as a model for asymptotic counting.",
    },
    {
      name: "Ramanujan partition congruence",
      latex: "p(5n+4)\\equiv 0 \\pmod{5}",
      explanation: "Whenever the input is 4 more than a multiple of 5, the partition number is divisible by 5.",
      variables: [
        { symbol: "p(k)", meaning: "partition number of k" },
        { symbol: "n", meaning: "nonnegative integer" },
        { symbol: "\\pmod{5}", meaning: "modulo 5" },
      ],
      workedExample: {
        problem: "Check n=1.",
        steps: [
          { text: "Compute the input.", latex: "5n+4=9" },
          { text: "The exact value is.", latex: "p(9)=30" },
          { text: "30 is divisible by 5." },
        ],
        answer: "The congruence holds for n=1.",
      },
      modernUse: "A gateway example for modular forms and arithmetic congruences.",
    },
    {
      name: "Taxicab number",
      latex: "1729=1^3+12^3=9^3+10^3",
      explanation: "1729 is the smallest positive integer expressible as the sum of two positive cubes in two different ways.",
      variables: [
        { symbol: "1729", meaning: "Hardy-Ramanujan taxicab number" },
        { symbol: "a^3+b^3", meaning: "sum of two cubes" },
      ],
      workedExample: {
        problem: "Verify the two decompositions.",
        steps: [
          { text: "First pair.", latex: "1^3+12^3=1+1728=1729" },
          { text: "Second pair.", latex: "9^3+10^3=729+1000=1729" },
        ],
        answer: "Both sums equal 1729.",
      },
      modernUse: "Often used to introduce Diophantine equations and computational number theory.",
    },
  ],
  connections: [
    { field: "Mathematics", description: "Ramanujan's work spans number theory, analysis, special functions and combinatorics." },
    { field: "Statistics", description: "Partition methods and asymptotic thinking influence counting models and probability." },
    { field: "Computer Science", description: "His series and identities influence high-precision algorithms and symbolic computation." },
    { field: "Physics", description: "Modern modular and partition mathematics appears in statistical mechanics and quantum theory." },
  ],
  historicalContext: {
    worldEvents: "Ramanujan lived under British colonial rule and during World War I, which complicated travel, communication and academic life.",
    politics: "Colonial distance made it harder for an Indian mathematician outside formal European networks to be recognized.",
    wars: "World War I shaped conditions in Cambridge, including food, travel and academic disruption.",
    universities: "Madras institutions gave some local support, while Cambridge gave international visibility but also cultural hardship.",
    scientificCommunity: "Hardy, Littlewood and the Indian Mathematical Society were decisive in translating isolated genius into recognized research.",
    technology: "His work depended on paper, notebooks, letters and mental calculation rather than laboratories or machines.",
  },
  backlash: [
    { type: "Academic conflict", title: "Lack of conventional proofs", description: "Many mathematicians could not evaluate his claims quickly because he supplied formulae without standard proofs.", status: "Verified" },
    { type: "Discrimination", title: "Colonial academic distance", description: "His location and background made access to European mathematical networks unusually difficult.", status: "Verified" },
    { type: "Controversy", title: "Myth of pure miracle", description: "Popular accounts sometimes reduce his work to mystery and ignore labour, memory, notebooks and community support.", status: "Widely attributed" },
  ],
  challengesDetailed: [
    { category: "Financial", description: "He struggled for stable income before receiving patronage and academic support." },
    { category: "Educational", description: "Formal degrees were blocked by his failure in non-mathematical subjects." },
    { category: "Health", description: "Illness severely limited his Cambridge years and final work." },
    { category: "Scientific", description: "His intuitive style had to be converted into rigorous proof for international mathematics." },
    { category: "Social", description: "Cultural distance, diet and isolation in England increased personal difficulty." },
  ],
  achievements: [
    { title: "Fellow of the Royal Society", year: "1918", description: "One of the youngest Fellows and among the first Indian mathematicians so honoured." },
    { title: "Fellow of Trinity College", year: "1918", description: "Recognition by one of Cambridge's most prestigious colleges." },
    { title: "BA by research", year: "1916", description: "Awarded by Cambridge for his research, especially highly composite numbers." },
    { title: "Ramanujan Prize and legacy honours", year: "Modern", description: "Many prizes, institutes and annual events now carry his name." },
  ],
  funFacts: [
    "He wrote thousands of results in notebooks.",
    "Hardy rated Ramanujan's mathematical ability at the highest level in his personal scale.",
    "His birthday, 22 December, is celebrated in India as National Mathematics Day.",
    "The number 1729 became famous because of his hospital-bed conversation with Hardy.",
  ],
  didYouKnow: [
    { title: "The lost notebook", content: "A collection of late Ramanujan material was rediscovered in the twentieth century and became a major research source." },
    { title: "Not just intuition", content: "His results came from relentless calculation, pattern recognition and deep familiarity with special functions." },
    { title: "Mock theta afterlife", content: "A modern framework for his mock theta functions emerged decades after his death." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Srinivasa Ramanujan seated with notebooks, ink calculations, Cambridge papers and Kumbakonam temple-inspired background, respectful historical portrait style." },
    { category: "Scientific diagram", prompt: "Educational diagram explaining integer partitions of 5 and Ramanujan congruence, clean university textbook style." },
    { category: "Major discovery", prompt: "Close view of handwritten number theory formulae, q-series and continued fractions on aged notebook pages." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Srinivasa Ramanujan.", suggestedSource: "Wikimedia Commons: Srinivasa Ramanujan - OPC - 1.jpg" },
    { slot: "Notebooks", caption: "Ramanujan notebook or manuscript page.", suggestedSource: "Wikimedia Commons: Ramanujan manuscript.jpg" },
    { slot: "University", caption: "Trinity College, Cambridge, where Ramanujan worked with Hardy.", suggestedSource: "Wikimedia Commons / Trinity College archives" },
    { slot: "Historic location", caption: "Ramanujan's home or memorial in Kumbakonam.", suggestedSource: "Government of Tamil Nadu / Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "leonhard-euler", name: "Leonhard Euler", reason: "Euler's series and partitions form part of Ramanujan's mathematical ancestry." },
    { slug: "carl-friedrich-gauss", name: "Carl Friedrich Gauss", reason: "Both reshaped number theory with unusual depth and range." },
    { slug: "alan-turing", name: "Alan Turing", reason: "Both show how abstract mathematics can transform later computational thought." },
  ],
  relatedTopics: [
    { title: "Sequences and Series", href: "/subjects/mathematics/sequences-and-series", description: "Ramanujan's work is rich in infinite series and q-series." },
    { title: "Number Theory", href: "/subjects/mathematics/number-theory", description: "Partitions, congruences and divisor functions are number-theory themes." },
    { title: "Functions", href: "/subjects/mathematics/functions", description: "Special functions and transformations appear throughout his notebooks." },
  ],
  quotes: [
    { text: "An equation for me has no meaning unless it expresses a thought of God.", source: "Widely attributed to Ramanujan", status: "Widely attributed" },
    { text: "Every positive integer was one of his personal friends.", source: "G. H. Hardy, tribute to Ramanujan", status: "Verified" },
    { text: "I have not trodden through the conventional regular course which is followed in a University course.", source: "Ramanujan letter to Hardy, 1913", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "Which book strongly shaped Ramanujan's self-study?", options: ["Carr's Synopsis", "Principia Mathematica", "Origin of Species", "Opticks"], answer: 0, explanation: "Carr's Synopsis supplied thousands of results with few proofs." },
      { question: "Who recognized Ramanujan's 1913 letter as extraordinary?", options: ["G. H. Hardy", "Alan Turing", "Dorothy Hodgkin", "Homi Bhabha"], answer: 0, explanation: "Hardy brought the letter to serious attention in Cambridge." },
      { question: "What are mock theta functions associated with?", options: ["Ramanujan's final work", "NASA trajectories", "X-ray diffraction only", "Radio transmitters"], answer: 0, explanation: "They appeared in his final letter to Hardy." },
    ],
    trueFalse: [
      { statement: "Ramanujan's notebooks continued to generate research after his death.", answer: true, explanation: "Mathematicians studied and proved many notebook entries for decades." },
      { statement: "Ramanujan had an easy path through formal university examinations.", answer: false, explanation: "He repeatedly struggled in formal programs because he focused almost entirely on mathematics." },
      { statement: "1729 is famous because it is a sum of two cubes in two different ways.", answer: true, explanation: "That is the Hardy-Ramanujan taxicab anecdote." },
    ],
    shortAnswer: [
      { question: "Why did Ramanujan's work need later verification?", modelAnswer: "He often wrote results without standard proofs, so later mathematicians had to supply rigorous arguments and interpret some formulae in modern terms.", marks: 5 },
      { question: "What made Hardy's support important?", modelAnswer: "Hardy recognized the originality of Ramanujan's formulae, brought him to Cambridge and helped translate his insights into internationally accepted research.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain why Ramanujan matters to modern mathematics.", modelAnswer: "Ramanujan expanded number theory and analysis through discoveries about partitions, congruences, continued fractions, special functions and q-series. His collaboration with Hardy produced foundational asymptotic work, while his notebooks and final mock theta functions created problems that lasted for generations. His career also shows how originality can emerge outside formal institutions, while still needing proof, mentorship and scholarly communication to become part of shared mathematics.", marks: 12 },
    ],
  },
};
