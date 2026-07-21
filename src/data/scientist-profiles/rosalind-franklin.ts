import type { ScientistProfile } from "./types";

export const rosalindFranklin: ScientistProfile = {
  slug: "rosalind-franklin",
  seoDescription:
    "Rosalind Franklin used X-ray crystallography to reveal molecular structures, including crucial DNA evidence, carbon structures and important virus research.",
  timeline: [
    { year: "1920", title: "Born in London", description: "Rosalind Elsie Franklin is born on 25 July into an educated Anglo-Jewish family." },
    { year: "1938", title: "Studies at Cambridge", description: "She begins natural sciences at Newnham College, Cambridge." },
    { year: "1940s", title: "Coal and carbon research", description: "Franklin studies coal porosity and carbon structure during and after World War II." },
    { year: "1947", title: "Paris crystallography", description: "At the Laboratoire Central she becomes highly skilled in X-ray diffraction." },
    { year: "1951", title: "King's College London", description: "She joins the DNA research group and improves methods for DNA fibre diffraction.", pivotal: true },
    { year: "1952", title: "Photo 51", description: "Raymond Gosling produces the famous B-DNA diffraction image under Franklin's supervision.", pivotal: true },
    { year: "1953", title: "DNA papers published", description: "Franklin and Gosling publish DNA diffraction evidence in Nature." },
    { year: "1953", title: "Moves to Birkbeck", description: "She begins major work on tobacco mosaic virus and other biological structures." },
    { year: "1958", title: "Dies of cancer", description: "Franklin dies on 16 April at age thirty-seven." },
  ],
  earlyLifeDetail: {
    childhood: "Franklin grew up in a family that valued public service, argument and education. She showed early seriousness, independence and talent for exact subjects.",
    family: "Her family supported education and social responsibility. This background helped her enter scientific training at a time when women still faced narrowed professional paths.",
    education: "At Cambridge she trained in chemistry, then developed into an expert experimentalist through coal research and advanced X-ray diffraction work in Paris.",
    difficulties: "She faced gendered expectations, difficult institutional relationships, incomplete credit for DNA evidence and severe illness during her most productive years.",
    finances: "She worked in funded research posts rather than private wealth, moving between Cambridge, Paris, King's College London and Birkbeck.",
    personalLife: "Franklin was intensely private, loyal to friends and committed to travel and mountain walking as well as research.",
    influences: "Paris crystallographers taught her technical discipline; J. D. Bernal later supported her virus research at Birkbeck.",
    booksRead: "Her scientific reading centred on physical chemistry, crystallography, coal structure, nucleic acids and virus structure.",
    teachersAndMentors: "Adrienne Weill encouraged her in Paris, and J. D. Bernal recognized her talent for structural biology.",
    stories: ["Photo 51 became famous after her death.", "Her virus research was highly respected by colleagues.", "She insisted that DNA data be interpreted carefully rather than forced into a premature model."],
  },
  turningPoints: [
    "Paris training made her an exceptional crystallographer.",
    "The move to King's placed her at the centre of the DNA structure race.",
    "Photo 51 supplied clear evidence for helical B-DNA.",
    "Leaving King's allowed her to build an admired virus-research group.",
  ],
  failures: [
    "King's College failed to create a clear collaborative structure around DNA research.",
    "Franklin did not live to see the Nobel recognition connected to the double helix.",
    "Popular stories sometimes reduce her to Photo 51, ignoring carbon and virus research.",
  ],
  studentLessons: [
    "Good data requires patience, technique and scepticism.",
    "Credit matters because science is collaborative and historical.",
    "A cautious interpretation can be more scientific than a fast model.",
  ],
  discoveries: [
    {
      name: "DNA X-ray diffraction evidence",
      period: "1951-1953",
      background: "Scientists were trying to determine DNA's molecular structure.",
      problem: "What shape did DNA take, and what dimensions constrained any model?",
      method: "Franklin prepared DNA fibres, controlled hydration and analyzed X-ray diffraction patterns.",
      discovery: "Her B-DNA images and measurements supplied helical parameters used in understanding the double helix.",
      importance: "The evidence was central to molecular biology's structural revolution.",
      modernApplications: ["Genomics", "Molecular biology", "Biotechnology", "Structural biology"],
    },
    {
      name: "Carbon and virus structures",
      period: "1940s-1950s",
      background: "Coal, carbon and viruses required structural methods to explain physical and biological behavior.",
      problem: "How do molecular arrangements determine properties?",
      method: "She combined diffraction, chemical analysis and careful model constraints.",
      discovery: "She advanced carbon microstructure research and later mapped features of tobacco mosaic virus.",
      importance: "This showed the range of X-ray methods beyond DNA.",
      modernApplications: ["Materials science", "Virology", "Nanostructure analysis", "Vaccine research"],
    },
  ],
  works: [
    { title: "Coal and carbon papers", year: "1940s", kind: "Paper", description: "Research on coal porosity and carbon structure." },
    { title: "Molecular configuration in sodium thymonucleate", year: "1953", kind: "Paper", description: "Franklin and Gosling's Nature paper presenting DNA diffraction evidence." },
    { title: "Tobacco mosaic virus research", year: "1950s", kind: "Project", description: "Structural studies at Birkbeck on virus particles." },
  ],
  equations: [
    {
      name: "Bragg's law",
      latex: "n\\lambda=2d\\sin\\theta",
      explanation: "X-ray diffraction relates wavelength, crystal spacing and scattering angle.",
      variables: [{ symbol: "n", meaning: "diffraction order" }, { symbol: "\\lambda", meaning: "X-ray wavelength" }, { symbol: "d", meaning: "spacing between planes" }, { symbol: "\\theta", meaning: "diffraction angle" }],
      workedExample: { problem: "If n=1, lambda=0.154 nm and theta=15 degrees, estimate d.", steps: [{ text: "Rearrange.", latex: "d=\\frac{n\\lambda}{2\\sin\\theta}" }, { text: "Substitute.", latex: "d\\approx\\frac{0.154}{2\\sin15^\\circ}\\text{ nm}" }], answer: "About 0.30 nm." },
      modernUse: "Used across crystallography, materials science and structural biology.",
    },
    {
      name: "Helical repeat idea",
      latex: "P=m\\Delta z",
      explanation: "A simple helix repeats after m steps of vertical spacing Delta z.",
      variables: [{ symbol: "P", meaning: "pitch or repeat distance" }, { symbol: "m", meaning: "number of repeating steps" }, { symbol: "\\Delta z", meaning: "vertical rise per step" }],
      workedExample: { problem: "If Delta z=0.34 nm and m=10, find P.", steps: [{ text: "Multiply.", latex: "P=10(0.34)=3.4\\text{ nm}" }], answer: "The repeat is 3.4 nm." },
      modernUse: "Helical parameters are basic to DNA and protein structure.",
    },
  ],
  connections: [
    { field: "Chemistry", description: "Franklin interpreted molecular structure through physical chemistry." },
    { field: "Biology", description: "DNA and virus structures connect molecular shape to biological function." },
    { field: "Physics", description: "Diffraction depends on waves, interference and scattering." },
  ],
  historicalContext: {
    worldEvents: "Her career unfolded during World War II, postwar reconstruction and the rise of molecular biology.",
    politics: "War research made coal and materials important, while institutional sexism affected recognition.",
    universities: "Cambridge, King's and Birkbeck shaped different stages of her work.",
    scientificCommunity: "Watson, Crick, Wilkins, Gosling, Bernal and others formed the DNA and structural-biology context.",
    technology: "X-ray cameras, fibre preparation, photographic plates and crystallographic mathematics were essential.",
  },
  backlash: [
    { type: "Gender bias", title: "Unequal institutional treatment", description: "Franklin worked in male-dominated settings where authority and credit were uneven.", status: "Verified" },
    { type: "Controversy", title: "Use of DNA data", description: "Historians debate how her data were shared and used in Watson and Crick's modelling.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Women scientists often faced reduced authority and recognition." },
    { category: "Professional", description: "Relationships at King's were strained and poorly managed." },
    { category: "Health", description: "Cancer ended her career at thirty-seven." },
    { category: "Scientific", description: "DNA diffraction required exact sample preparation and interpretation." },
  ],
  achievements: [
    { title: "Photo 51", year: "1952", description: "One of the most important experimental images in biology." },
    { title: "DNA Nature paper", year: "1953", description: "Published experimental evidence for DNA structure." },
    { title: "Virus structure leadership", year: "1950s", description: "Built influential work at Birkbeck on tobacco mosaic virus." },
  ],
  funFacts: ["She was an experienced mountaineer.", "She worked on coal before DNA.", "Her notebooks show exceptional experimental discipline.", "Nobel rules prevented posthumous recognition."],
  didYouKnow: [
    { title: "Not only DNA", content: "Franklin made important contributions to carbon science and virology." },
    { title: "Photo 51 was supervised work", content: "The image was produced by Raymond Gosling under Franklin's supervision." },
    { title: "Careful hydration", content: "Distinguishing A-DNA and B-DNA was central to her analysis." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Rosalind Franklin in an X-ray crystallography laboratory with diffraction photographs and molecular models." },
    { category: "Scientific diagram", prompt: "Clean explanation of X-ray diffraction from DNA fibres with labelled angle, wavelength and spacing." },
    { category: "Major discovery", prompt: "Educational rendering of Photo 51 as a helical diffraction pattern with annotation." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Rosalind Franklin.", suggestedSource: "Wikimedia Commons: Rosalind Franklin.jpg" },
    { slot: "Laboratory", caption: "X-ray crystallography equipment or King's College laboratory context.", suggestedSource: "King's College London archives" },
    { slot: "Notebooks", caption: "DNA diffraction notes or Photo 51 reproduction.", suggestedSource: "National Library of Medicine / King's College" },
    { slot: "Historic location", caption: "Birkbeck or King's College building associated with Franklin.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "dorothy-hodgkin", name: "Dorothy Hodgkin", reason: "Both transformed structural science through X-ray crystallography." },
    { slug: "james-watson", name: "James Watson", reason: "Watson and Crick's DNA model depended on structural evidence from King's." },
    { slug: "marie-curie", name: "Marie Curie", reason: "Both are central women in physical science history." },
  ],
  relatedTopics: [
    { title: "DNA and Genetics", href: "/subjects/biology/dna-and-genetics", description: "Franklin's work helped reveal DNA structure." },
    { title: "Waves", href: "/subjects/physics/waves", description: "Diffraction is a wave phenomenon." },
    { title: "Molecular Structure", href: "/subjects/chemistry/molecular-structure", description: "Crystallography maps molecular arrangement." },
  ],
  quotes: [
    { text: "Science and everyday life cannot and should not be separated.", source: "Letter, widely cited", status: "Verified" },
    { text: "You look at science as a sort of demoralising invention of man.", source: "Letter to her father, paraphrased in biographies", status: "Paraphrase" },
    { text: "The results suggest a helical structure.", source: "Summary of Franklin and Gosling DNA evidence", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "What technique made Franklin famous?", options: ["X-ray crystallography", "Telescope observation", "Radio transmission", "Steam engineering"], answer: 0, explanation: "She used X-ray diffraction to study molecular structure." },
      { question: "What was Photo 51?", options: ["A DNA diffraction image", "A planet photo", "A coal mine map", "A telescope lens"], answer: 0, explanation: "It was an X-ray diffraction image of B-DNA." },
      { question: "What did Franklin study after DNA?", options: ["Viruses", "Comets", "Steam engines", "Bird migration only"], answer: 0, explanation: "She led virus-structure research at Birkbeck." },
    ],
    trueFalse: [
      { statement: "Franklin's work helped constrain the DNA double-helix model.", answer: true, explanation: "Her measurements and images were crucial evidence." },
      { statement: "She received a Nobel Prize during her lifetime.", answer: false, explanation: "She died before the 1962 Nobel Prize; Nobels are not awarded posthumously." },
      { statement: "Franklin also researched coal and carbon.", answer: true, explanation: "This was an important early part of her career." },
    ],
    shortAnswer: [
      { question: "Why was Photo 51 important?", modelAnswer: "Its cross-shaped diffraction pattern and dimensions provided strong evidence for helical DNA.", marks: 5 },
      { question: "Why is Franklin's career a credit case study?", modelAnswer: "Her data were crucial to DNA modelling, but her public recognition came mostly after her death.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Franklin's contribution to structural biology.", modelAnswer: "Franklin brought exceptional experimental discipline to X-ray crystallography. In DNA research she distinguished forms of DNA, produced and interpreted high-quality diffraction evidence, and supplied measurements essential to helical modelling. Her later virus work showed that she was not simply a DNA footnote but a leading structural biologist whose methods connected chemistry, physics and biology.", marks: 12 },
    ],
  },
};
