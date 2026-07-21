import type { ScientistProfile } from "./types";

export const barbaraMcclintock: ScientistProfile = {
  slug: "barbara-mcclintock",
  seoDescription: "Barbara McClintock discovered transposable elements in maize, revealing that genomes are dynamic, regulated systems rather than fixed instruction lists.",
  timeline: [
    { year: "1902", title: "Born in Connecticut", description: "Barbara McClintock is born on 16 June in Hartford, Connecticut." },
    { year: "1927", title: "Doctorate at Cornell", description: "She completes a PhD and becomes a specialist in maize cytogenetics." },
    { year: "1930s", title: "Chromosome maps", description: "McClintock links maize traits to visible chromosome structures." },
    { year: "1941", title: "Cold Spring Harbor", description: "She joins Cold Spring Harbor Laboratory, which becomes her main research home.", pivotal: true },
    { year: "1950", title: "Controlling elements", description: "She publishes evidence for mobile genetic elements in maize.", pivotal: true },
    { year: "1960s-1970s", title: "Molecular confirmation", description: "Molecular genetics confirms that mobile DNA is widespread." },
    { year: "1983", title: "Nobel Prize", description: "She receives the Nobel Prize in Physiology or Medicine for transposable elements.", pivotal: true },
    { year: "1992", title: "Dies", description: "McClintock dies on 2 September." },
  ],
  earlyLifeDetail: {
    childhood: "McClintock grew up independent, observant and comfortable working alone. Those habits later suited the long patience required for maize genetics.",
    family: "Her family moved to Brooklyn, and her education eventually took her to Cornell, where plant genetics became her scientific language.",
    education: "Cornell gave her training in botany, cytology and genetics, though women were not always welcomed into formal agricultural genetics tracks.",
    difficulties: "She faced gender barriers, institutional uncertainty and years when colleagues did not understand her mobile-element theory.",
    finances: "Her career depended on fellowships and research appointments rather than a conventional early faculty path.",
    personalLife: "She never married and built a life around research, field seasons and laboratory observation.",
    influences: "Cornell maize genetics, chromosome microscopy and the work of Rollins Emerson shaped her scientific style.",
    booksRead: "Her core literature included genetics, cytology, botany and chromosome behaviour.",
    teachersAndMentors: "Rollins Emerson and the Cornell genetics community were decisive early influences.",
    stories: ["She could identify maize chromosomes by sight.", "She described the genome as responsive to stress.", "Her Nobel came more than thirty years after the central discovery."],
  },
  turningPoints: ["Cornell introduced her to maize cytogenetics.", "Cold Spring Harbor gave her long-term independence.", "Kernel colour patterns led her to controlling elements.", "Molecular biology later confirmed her insight."],
  failures: ["Many contemporaries could not follow her explanation of mobile genetic elements.", "Her findings were sometimes treated as maize oddities rather than general genome principles.", "Recognition arrived late."],
  studentLessons: ["Look closely before forcing data into accepted theory.", "A model organism can reveal general laws.", "Scientific truth may require a long delay before recognition."],
  discoveries: [
    { name: "Transposable elements", period: "1940s-1950s", background: "Genes were usually treated as fixed positions on chromosomes.", problem: "Why did maize kernels show unstable colour patterns?", method: "McClintock followed maize inheritance and chromosome changes through generations.", discovery: "She found controlling elements that moved and changed gene expression.", importance: "This revealed genome mobility and regulation.", modernApplications: ["Genome evolution", "Gene regulation", "Cancer genetics", "Genetic engineering"] },
    { name: "Breakage-fusion-bridge cycle", period: "1930s-1940s", background: "Broken chromosomes produced unusual inheritance patterns.", problem: "How do chromosome breaks create instability?", method: "She observed chromosome behaviour microscopically across cell divisions.", discovery: "Broken ends could fuse, break again and repeat instability.", importance: "It became a major concept in chromosome biology.", modernApplications: ["Cancer cytogenetics", "Genome instability", "Cell division research"] },
  ],
  works: [
    { title: "The origin and behavior of mutable loci in maize", year: "1950", kind: "Paper", description: "The key paper on controlling elements." },
    { title: "Maize cytogenetic maps", year: "1930s", kind: "Project", description: "Mapped visible chromosomes to inherited traits." },
    { title: "Cold Spring Harbor maize research", year: "1940s-1980s", kind: "Project", description: "Long-term investigation of chromosome behaviour and gene regulation." },
  ],
  equations: [
    { name: "Recombination frequency", latex: "RF=\\frac{\\text{recombinant offspring}}{\\text{total offspring}}\\times100\\%", explanation: "Geneticists estimate distance between loci from recombinant offspring.", variables: [{ symbol: "RF", meaning: "recombination frequency" }], workedExample: { problem: "If 18 of 200 offspring are recombinant, find RF.", steps: [{ text: "Divide and multiply.", latex: "RF=\\frac{18}{200}\\times100\\%=9\\%" }], answer: "9 percent." }, modernUse: "Used in linkage mapping and genetics education." },
    { name: "Gene expression change", latex: "\\Delta E=E_{on}-E_{off}", explanation: "A simple way to represent the change when a regulatory element activates a gene.", variables: [{ symbol: "E", meaning: "expression level" }], workedExample: { problem: "If on expression is 12 and off expression is 2, find change.", steps: [{ text: "Subtract.", latex: "\\Delta E=12-2=10" }], answer: "Expression increases by 10 units." }, modernUse: "Introduces regulation and expression data." },
  ],
  connections: [
    { field: "Biology", description: "Her work transformed genetics, chromosome biology and genome evolution." },
    { field: "Medicine", description: "Genome instability and mobile DNA matter in disease research." },
    { field: "Statistics", description: "Genetic mapping depends on counting inheritance patterns." },
  ],
  historicalContext: { worldEvents: "Her career spanned classical genetics, World War II and the rise of molecular biology.", politics: "Women scientists often lacked equal status in universities.", universities: "Cornell and Cold Spring Harbor shaped American genetics.", scientificCommunity: "Classical cytogeneticists worked before DNA sequencing made genomes directly readable.", technology: "Microscopes, maize breeding and later molecular methods were central." },
  backlash: [
    { type: "Gender bias", title: "Restricted career paths", description: "Women in genetics faced limited appointments and recognition.", status: "Verified" },
    { type: "Academic conflict", title: "Mobile elements doubted", description: "Many colleagues did not accept the broad importance of controlling elements at first.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Institutional structures were not built for women scientists." },
    { category: "Scientific", description: "Her interpretation required seeing the genome as dynamic." },
    { category: "Professional", description: "She worked for long periods outside ordinary faculty status." },
  ],
  achievements: [
    { title: "National Academy of Sciences", year: "1944", description: "Elected for major genetic research." },
    { title: "Nobel Prize", year: "1983", description: "Awarded for discovery of transposable elements." },
    { title: "National Medal of Science", year: "1970", description: "United States recognition for scientific achievement." },
  ],
  funFacts: ["She studied corn for most of her career.", "Her field notebooks were central research tools.", "Transposons make up large portions of many genomes.", "She was the sole winner of the 1983 medicine Nobel."],
  didYouKnow: [
    { title: "Jumping genes", content: "Transposons can move within genomes and alter gene activity." },
    { title: "Ahead of its time", content: "Her idea became clearer after molecular biology caught up." },
    { title: "Visible genetics", content: "Maize kernel colours made gene regulation visible." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Barbara McClintock in a maize field and cytogenetics laboratory with chromosomes and kernel colour patterns." },
    { category: "Scientific diagram", prompt: "Diagram showing a transposable element moving into a gene and changing expression." },
    { category: "Timeline infographic", prompt: "McClintock timeline from Cornell to controlling elements and Nobel Prize." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Barbara McClintock.", suggestedSource: "Wikimedia Commons: Barbara McClintock (1902-1992).jpg" },
    { slot: "Laboratory", caption: "Maize genetics laboratory or Cold Spring Harbor setting.", suggestedSource: "Cold Spring Harbor Laboratory archives" },
    { slot: "Instruments", caption: "Microscope used for chromosome cytology.", suggestedSource: "Public-domain microscopy collections" },
    { slot: "Notebooks", caption: "Maize field notes or chromosome drawings.", suggestedSource: "National Library of Medicine profiles" },
  ],
  relatedScientists: [
    { slug: "charles-darwin", name: "Charles Darwin", reason: "Genome variation supplies material for evolution." },
    { slug: "rosalind-franklin", name: "Rosalind Franklin", reason: "Both changed understanding of hereditary material." },
    { slug: "gregor-mendel", name: "Gregor Mendel", reason: "McClintock extended classical inheritance into chromosome behaviour." },
  ],
  relatedTopics: [
    { title: "DNA and Genetics", href: "/subjects/biology/dna-and-genetics", description: "Transposons are part of genome biology." },
    { title: "Cell Division", href: "/subjects/biology/cell-division", description: "Chromosome behaviour matters during division." },
    { title: "Evolution", href: "/subjects/biology/evolution", description: "Mobile DNA contributes to genome evolution." },
  ],
  quotes: [
    { text: "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off.", source: "McClintock interview, widely quoted", status: "Verified" },
    { text: "I never thought of stopping.", source: "McClintock interview, widely quoted", status: "Verified" },
    { text: "The prize was such an extraordinary surprise.", source: "Nobel interview, paraphrase", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "What did McClintock discover?", options: ["Transposable elements", "Cepheid variables", "Parity violation", "Compiler design"], answer: 0, explanation: "She discovered mobile genetic elements." },
      { question: "What organism did she study most?", options: ["Maize", "Chimpanzees", "Mold", "Fruit flies only"], answer: 0, explanation: "Maize was her main research system." },
      { question: "Why was her work initially hard to accept?", options: ["It made genomes dynamic", "It denied chromosomes", "It used telescopes", "It rejected inheritance"], answer: 0, explanation: "Mobile gene regulation was far ahead of the standard view." },
    ],
    trueFalse: [
      { statement: "Transposons can move within genomes.", answer: true, explanation: "That is the central idea." },
      { statement: "McClintock received rapid Nobel recognition in 1950.", answer: false, explanation: "The Nobel came in 1983." },
      { statement: "Her work linked chromosomes and traits.", answer: true, explanation: "That is cytogenetics." },
    ],
    shortAnswer: [
      { question: "What is a transposable element?", modelAnswer: "A DNA sequence that can move to a new genomic position and sometimes affect gene expression.", marks: 4 },
      { question: "Why were maize kernels useful?", modelAnswer: "Their colour patterns visibly reflected genetic changes during development.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain McClintock's importance to genetics.", modelAnswer: "McClintock showed that genes and regulatory elements are not always fixed at one chromosomal position. Through maize cytogenetics she discovered controlling elements that moved and changed kernel colour patterns. This changed genetics by revealing genome regulation, genome instability and mobile DNA, ideas later confirmed by molecular biology and now central to genomics.", marks: 12 },
    ],
  },
};
