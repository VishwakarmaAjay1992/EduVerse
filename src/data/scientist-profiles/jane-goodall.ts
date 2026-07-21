import type { ScientistProfile } from "./types";

export const janeGoodall: ScientistProfile = {
  slug: "jane-goodall",
  seoDescription:
    "Jane Goodall transformed primatology through long-term chimpanzee field research at Gombe and global conservation education.",
  timeline: [
    { year: "1934", title: "Born in London", description: "Valerie Jane Morris-Goodall is born on 3 April." },
    { year: "1957", title: "Travels to Kenya", description: "Goodall meets Louis Leakey, who recognizes her observational talent." },
    { year: "1960", title: "Arrives at Gombe", description: "She begins field observations of chimpanzees in what is now Tanzania.", pivotal: true },
    { year: "1960", title: "Tool use observed", description: "Goodall observes chimpanzees modifying and using sticks to fish for termites.", pivotal: true },
    { year: "1965", title: "PhD from Cambridge", description: "She earns a doctorate in ethology despite beginning without a conventional undergraduate degree." },
    { year: "1971", title: "In the Shadow of Man", description: "Her book brings Gombe research to a wide audience." },
    { year: "1977", title: "Jane Goodall Institute", description: "She founds an institute to support research, conservation and education." },
    { year: "1991", title: "Roots & Shoots", description: "Goodall launches a youth environmental program." },
  ],
  earlyLifeDetail: {
    childhood: "Goodall grew up fascinated by animals and stories of Africa. Her patience, memory and curiosity became central scientific tools long before she held credentials.",
    family: "Her mother Vanne supported her ambitions and even accompanied her to Gombe in the early period, which helped make the work socially acceptable.",
    education: "She did not follow the normal route into science. Leakey helped her enter fieldwork, and Cambridge later formalized her training through doctoral study.",
    difficulties: "She faced skepticism as a young woman without standard academic qualifications and later criticism for naming chimpanzees and describing personality.",
    finances: "Early work depended on patronage, grants and institutional support connected to Leakey and National Geographic.",
    personalLife: "Her life moved from field research to global advocacy as conservation pressures grew.",
    influences: "Louis Leakey, long-term natural history, animal behaviour and local field assistants shaped the research program.",
    booksRead: "Childhood reading included animal stories and adventure literature; scientific reading later focused on ethology and primatology.",
    teachersAndMentors: "Louis Leakey was decisive in opening the Gombe opportunity and connecting her work to academic science.",
    stories: ["She named chimpanzees such as David Greybeard.", "Tool use forced scientists to rethink human uniqueness.", "Her field notebooks became a multi-generation record."],
  },
  turningPoints: ["Meeting Leakey opened the route to Gombe.", "David Greybeard's tool use observation changed primatology.", "Long-term study revealed social complexity across generations.", "Habitat loss shifted her toward conservation activism."],
  failures: ["Some early methods, such as provisioning, later raised methodological concerns.", "Naming individuals was criticized as anthropomorphic by some scientists.", "Conservation success proved impossible without addressing human poverty and local communities."],
  studentLessons: ["Observation over time can reveal what short experiments miss.", "Methods should evolve when evidence shows unintended effects.", "Conservation is both biological and social."],
  discoveries: [
    { name: "Chimpanzee tool use", period: "1960", background: "Tool use was often treated as a defining human trait.", problem: "Could non-human animals make and use tools deliberately?", method: "Goodall conducted patient field observation of individual chimpanzees.", discovery: "Chimpanzees stripped leaves from twigs and used them to fish termites.", importance: "The finding changed definitions of human uniqueness.", modernApplications: ["Animal cognition", "Evolutionary anthropology", "Behavioural ecology", "Conservation education"] },
    { name: "Long-term chimpanzee social behaviour", period: "1960 onward", background: "Short field studies could not reveal stable social relations.", problem: "How do chimpanzee communities change across years and generations?", method: "Researchers tracked named individuals, kinship, dominance, hunting, aggression and care.", discovery: "Gombe revealed complex social bonds, conflict, hunting and learned behaviours.", importance: "It made long-term primate study a model for behavioural science.", modernApplications: ["Primatology", "Animal welfare", "Human evolution", "Wildlife management"] },
  ],
  works: [
    { title: "Gombe field study", year: "1960 onward", kind: "Project", description: "Long-term research on chimpanzee individuals and communities." },
    { title: "In the Shadow of Man", year: "1971", kind: "Book", description: "A major public account of chimpanzee life and field research." },
    { title: "The Chimpanzees of Gombe", year: "1986", kind: "Book", description: "A detailed scientific synthesis of decades of research." },
    { title: "Roots & Shoots", year: "1991", kind: "Project", description: "Youth conservation and community action program." },
  ],
  equations: [
    {
      name: "Observation rate",
      latex: "r=\\frac{N}{T}",
      explanation: "Behavioural fieldwork often reports how often an observed behaviour occurs per unit time.",
      variables: [{ symbol: "r", meaning: "rate" }, { symbol: "N", meaning: "number of observations" }, { symbol: "T", meaning: "observation time" }],
      workedExample: { problem: "If tool use is seen 12 times in 6 hours, find the rate.", steps: [{ text: "Divide observations by time.", latex: "r=\\frac{12}{6}=2" }], answer: "2 observations per hour." },
      modernUse: "Used in ethology, ecology and behavioural data analysis.",
    },
    {
      name: "Population growth factor",
      latex: "N_{t+1}=N_t+B-D",
      explanation: "A simple conservation model updates population by births and deaths.",
      variables: [{ symbol: "N_t", meaning: "population at time t" }, { symbol: "B", meaning: "births" }, { symbol: "D", meaning: "deaths" }],
      workedExample: { problem: "If N=80, B=5 and D=3, find next population.", steps: [{ text: "Substitute.", latex: "N_{t+1}=80+5-3=82" }], answer: "82 individuals." },
      modernUse: "Basic framework for population ecology and conservation planning.",
    },
  ],
  connections: [
    { field: "Biology", description: "Goodall's work transformed ethology, primatology and conservation biology." },
    { field: "Statistics", description: "Long-term field data require careful sampling and behavioural coding." },
    { field: "Earth Science", description: "Habitat protection connects animal behaviour to ecosystems and land use." },
  ],
  historicalContext: { worldEvents: "Goodall began work during decolonization in East Africa and continued through modern conservation crises.", politics: "Field science in Tanzania required local permissions, institutional partnerships and community relationships.", universities: "Cambridge gave formal academic status to field discoveries.", scientificCommunity: "Leakey supported women primatologists including Goodall, Dian Fossey and Birute Galdikas.", technology: "Film, notebooks, photography, radio collars, genetics and GIS later expanded primate research." },
  backlash: [
    { type: "Academic conflict", title: "Naming animals", description: "Some scientists criticized naming chimpanzees and discussing personality as too subjective.", status: "Verified" },
    { type: "Controversy", title: "Provisioning effects", description: "Feeding stations used in early studies later raised concerns about altered behaviour.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Educational", description: "She began without the conventional undergraduate science path." },
    { category: "Gender", description: "She had to prove herself in a male-dominated scientific culture." },
    { category: "Scientific", description: "Field observation required patience under uncertain conditions." },
    { category: "Political", description: "Conservation depends on policy, local livelihoods and protected areas." },
  ],
  achievements: [
    { title: "Chimpanzee tool-use discovery", year: "1960", description: "A landmark observation in animal behaviour." },
    { title: "Jane Goodall Institute", year: "1977", description: "Institution supporting research and conservation." },
    { title: "Dame Commander of the Order of the British Empire", year: "2004", description: "Recognition for science and conservation." },
    { title: "UN Messenger of Peace", year: "2002", description: "International recognition of advocacy." },
  ],
  funFacts: ["Her toy chimpanzee Jubilee encouraged her childhood interest.", "She identified chimpanzees as individuals, not numbers.", "Gombe is one of the longest-running field studies.", "She shifted from scientist to global conservation advocate."],
  didYouKnow: [
    { title: "Tool use changed language", content: "Leakey reportedly said scientists now had to redefine tool, redefine human, or accept chimpanzees as closer relatives." },
    { title: "Long-term value", content: "Many Gombe findings required decades of observation." },
    { title: "People and habitats", content: "Goodall's later conservation work emphasizes local communities." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Jane Goodall in a Gombe forest research setting with binoculars, field notebook and chimpanzee habitat." },
    { category: "Scientific diagram", prompt: "Chimpanzee tool-use sequence: select twig, strip leaves, insert into termite mound, eat termites." },
    { category: "Map", prompt: "Map-style educational graphic locating Gombe Stream and chimpanzee habitat in East Africa." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Jane Goodall.", suggestedSource: "Wikimedia Commons: Jane Goodall 2015.jpg" },
    { slot: "Laboratory", caption: "Gombe field station or forest research setting.", suggestedSource: "Jane Goodall Institute / Wikimedia Commons" },
    { slot: "Notebooks", caption: "Field notebooks or observation records.", suggestedSource: "Jane Goodall Institute archives" },
    { slot: "Historic location", caption: "Gombe Stream National Park.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "charles-darwin", name: "Charles Darwin", reason: "Goodall's work deepened evidence for continuity between humans and other animals." },
    { slug: "rachel-carson", name: "Rachel Carson", reason: "Both linked science to public conservation ethics." },
    { slug: "louis-leakey", name: "Louis Leakey", reason: "Leakey supported Goodall's entry into primate fieldwork." },
  ],
  relatedTopics: [
    { title: "Evolution", href: "/subjects/biology/evolution", description: "Chimpanzee behaviour informs human evolutionary questions." },
    { title: "Ecology", href: "/subjects/biology/ecology", description: "Conservation depends on habitats and ecosystems." },
    { title: "Data Collection", href: "/subjects/mathematics/data-collection", description: "Field science depends on systematic observation." },
  ],
  quotes: [
    { text: "Only if we understand, can we care.", source: "Jane Goodall, widely quoted conservation statement", status: "Verified" },
    { text: "Every individual matters. Every individual has a role to play.", source: "Jane Goodall, widely quoted", status: "Verified" },
    { text: "What you do makes a difference.", source: "Jane Goodall, widely quoted", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "Where did Goodall begin her famous chimpanzee research?", options: ["Gombe", "Cambridge only", "Bletchley Park", "Paris"], answer: 0, explanation: "Her long-term research began at Gombe Stream." },
      { question: "What behaviour changed ideas about human uniqueness?", options: ["Chimpanzee tool use", "DNA diffraction", "Planetary ellipses", "Radioactivity"], answer: 0, explanation: "Chimpanzees made and used tools." },
      { question: "Who helped launch Goodall's field career?", options: ["Louis Leakey", "G. H. Hardy", "Arthur Eddington", "Charles Babbage"], answer: 0, explanation: "Leakey supported her Gombe work." },
    ],
    trueFalse: [
      { statement: "Goodall named individual chimpanzees.", answer: true, explanation: "This was part of her observational approach." },
      { statement: "Her work remained only laboratory based.", answer: false, explanation: "It was field research." },
      { statement: "Conservation became a major part of her later career.", answer: true, explanation: "Habitat loss shifted her toward advocacy." },
    ],
    shortAnswer: [
      { question: "Why was tool use important?", modelAnswer: "It challenged the idea that tool making and use uniquely separated humans from other animals.", marks: 4 },
      { question: "Why are long-term studies useful?", modelAnswer: "They reveal life histories, social changes and generational patterns that short studies miss.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Goodall's influence on primatology and conservation.", modelAnswer: "Goodall's Gombe observations showed chimpanzees as complex social individuals capable of tool use, hunting, bonds and conflict. Her long-term data reshaped ethology and evolutionary anthropology. As threats to chimpanzees grew, she extended her work into conservation, education and community action, showing that animal behaviour science cannot be separated from habitat protection.", marks: 12 },
    ],
  },
};
