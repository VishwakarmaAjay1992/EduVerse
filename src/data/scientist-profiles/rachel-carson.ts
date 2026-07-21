import type { ScientistProfile } from "./types";

export const rachelCarson: ScientistProfile = {
  slug: "rachel-carson",
  seoDescription:
    "Rachel Carson was a marine biologist and science writer whose book Silent Spring helped launch modern environmental awareness and pesticide regulation.",
  timeline: [
    { year: "1907", title: "Born in Pennsylvania", description: "Rachel Louise Carson is born on 27 May in Springdale, Pennsylvania." },
    { year: "1929", title: "Graduates from college", description: "She completes studies at Pennsylvania College for Women." },
    { year: "1932", title: "Master's degree", description: "Carson earns a master's degree in zoology from Johns Hopkins University." },
    { year: "1936", title: "Government science writing", description: "She begins work with the U.S. Bureau of Fisheries, later Fish and Wildlife Service." },
    { year: "1951", title: "The Sea Around Us", description: "Her ocean book becomes a major success and establishes her as a leading science writer." },
    { year: "1962", title: "Silent Spring", description: "Carson publishes her evidence-based critique of indiscriminate pesticide use.", pivotal: true },
    { year: "1963", title: "Congressional testimony", description: "She testifies on pesticides and environmental health while seriously ill." },
    { year: "1964", title: "Dies in Maryland", description: "Carson dies of cancer on 14 April." },
  ],
  earlyLifeDetail: {
    childhood: "Carson grew up exploring fields, streams and woods near her home. She loved writing as much as biology, a combination that later made her science unusually powerful to general readers.",
    family: "Her mother Maria encouraged nature study and reading. Carson later carried major family responsibilities while building her career.",
    education: "She studied biology, zoology and genetics, but financial pressure and family obligations made graduate study difficult beyond her master's degree.",
    difficulties: "Carson faced economic pressure, sexism in science, family caregiving responsibilities, industry attacks and cancer while writing Silent Spring.",
    finances: "Government work gave stability, and book success later allowed independent writing.",
    personalLife: "She cared for family members and eventually adopted her grand-nephew, balancing private responsibility with public scientific work.",
    influences: "Marine ecology, literary nature writing, government science communication and evidence from biologists about pesticide harm shaped her work.",
    booksRead: "Her reading joined biology, oceanography, ecology, toxicology, public health and literary nonfiction.",
    teachersAndMentors: "Mary Scott Skinker at Johns Hopkins encouraged her scientific development.",
    stories: ["She first became famous for ocean writing, not pesticides.", "She wrote Silent Spring while undergoing cancer treatment.", "Industry attacks often targeted her personally rather than answering the evidence."],
  },
  turningPoints: ["Government radio scripts trained her to explain science clearly.", "The Sea Around Us gave her independence as a writer.", "Reports of pesticide damage led to the investigation behind Silent Spring.", "Public controversy pushed environmental science into policy debate."],
  failures: ["Silent Spring was sometimes misrepresented as calling for a ban on all pesticides.", "Public debate became polarized, obscuring Carson's careful argument for responsible use.", "She did not live to see many policy consequences of her work."],
  studentLessons: ["Scientific writing can change public policy.", "Ecology studies relationships, not isolated facts.", "Industry criticism should be answered with evidence and transparency."],
  discoveries: [
    { name: "Public ecology of pesticides", period: "1950s-1960s", background: "Synthetic pesticides were widely promoted as technological progress.", problem: "What happens when persistent chemicals move through ecosystems?", method: "Carson synthesized toxicology, field reports, wildlife studies and public-health evidence.", discovery: "She showed that indiscriminate pesticide use could harm birds, fish, insects, soil, water and potentially humans.", importance: "The work helped make ecology a public concern.", modernApplications: ["Environmental regulation", "Ecotoxicology", "Public health", "Integrated pest management"] },
    { name: "Science communication for marine ecology", period: "1940s-1950s", background: "Ocean science was often technical and inaccessible to the public.", problem: "How could readers understand the sea as a living system?", method: "Carson combined scientific accuracy with literary narrative.", discovery: "Her sea books taught ecological interdependence through vivid prose.", importance: "They built public respect for marine science.", modernApplications: ["Science writing", "Ocean literacy", "Environmental education", "Conservation policy"] },
  ],
  works: [
    { title: "Under the Sea-Wind", year: "1941", kind: "Book", description: "A lyrical natural-history book about marine life." },
    { title: "The Sea Around Us", year: "1951", kind: "Book", description: "A bestselling account of ocean science." },
    { title: "The Edge of the Sea", year: "1955", kind: "Book", description: "A coastal ecology book." },
    { title: "Silent Spring", year: "1962", kind: "Book", description: "A landmark critique of pesticide misuse." },
  ],
  equations: [
    {
      name: "Biomagnification factor",
      latex: "BMF=\\frac{C_{predator}}{C_{prey}}",
      explanation: "A simple ratio showing how toxin concentration can increase up a food chain.",
      variables: [{ symbol: "BMF", meaning: "biomagnification factor" }, { symbol: "C_{predator}", meaning: "concentration in predator" }, { symbol: "C_{prey}", meaning: "concentration in prey" }],
      workedExample: { problem: "If fish contain 2 ppm and birds contain 20 ppm, find BMF.", steps: [{ text: "Divide predator concentration by prey concentration.", latex: "BMF=\\frac{20}{2}=10" }], answer: "The toxin is magnified by a factor of 10." },
      modernUse: "Used in ecotoxicology and environmental risk assessment.",
    },
    {
      name: "Exponential decay",
      latex: "C(t)=C_0e^{-kt}",
      explanation: "Chemical concentration can decline over time, though persistent chemicals have small k values.",
      variables: [{ symbol: "C(t)", meaning: "concentration at time t" }, { symbol: "C_0", meaning: "initial concentration" }, { symbol: "k", meaning: "decay constant" }],
      workedExample: { problem: "If C0=100 and k is small, what happens?", steps: [{ text: "A small k makes the exponential decline slow." }], answer: "Persistent chemicals remain for long periods." },
      modernUse: "Models pollutant persistence, drug elimination and radioactive decay.",
    },
  ],
  connections: [
    { field: "Biology", description: "Carson explained food webs, species interactions and ecological harm." },
    { field: "Chemistry", description: "Pesticide persistence and toxicity are chemical problems." },
    { field: "Earth Science", description: "Environmental contamination involves soil, water and atmosphere." },
  ],
  historicalContext: { worldEvents: "Carson wrote during postwar chemical expansion and Cold War technological optimism.", politics: "Environmental regulation was still developing, and industry influence was strong.", universities: "Her scientific training came through women's college education and Johns Hopkins graduate work.", scientificCommunity: "Ecologists, toxicologists, wildlife biologists and public-health researchers supplied evidence.", technology: "Synthetic pesticides, aerial spraying and chemical manufacturing changed agriculture and public health." },
  backlash: [
    { type: "Public criticism", title: "Chemical industry attacks", description: "Industry groups attacked Silent Spring and Carson personally.", status: "Verified" },
    { type: "Gender bias", title: "Dismissed as emotional", description: "Critics used gendered language to undermine her scientific credibility.", status: "Verified" },
    { type: "Controversy", title: "Pesticide policy debate", description: "Her work sparked major debate over risk, benefit and regulation.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Health", description: "She completed Silent Spring while seriously ill with cancer." },
    { category: "Professional", description: "She had to defend science in a highly public policy fight." },
    { category: "Gender", description: "Critics often used sexist stereotypes against her." },
    { category: "Scientific", description: "She synthesized evidence across ecology, chemistry and medicine." },
  ],
  achievements: [
    { title: "National Book Award", year: "1952", description: "Awarded for The Sea Around Us." },
    { title: "Silent Spring", year: "1962", description: "A defining work of environmental science communication." },
    { title: "Presidential Medal of Freedom", year: "1980", description: "Posthumously awarded in the United States." },
  ],
  funFacts: ["She published stories as a child.", "She worked as a government science writer before becoming a famous author.", "Silent Spring first appeared partly in The New Yorker.", "Her sea trilogy remains admired for prose style."],
  didYouKnow: [
    { title: "Not anti-science", content: "Carson argued for careful, evidence-based use of chemicals, not rejection of science." },
    { title: "Ecology for everyone", content: "She helped make ecological interdependence understandable to non-specialists." },
    { title: "Policy afterlife", content: "Her work influenced pesticide review and environmental institutions." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Rachel Carson at a writing desk with marine specimens, field notes, bird silhouettes and ecological diagrams." },
    { category: "Scientific diagram", prompt: "Food chain biomagnification diagram showing pesticide concentration increasing from water to fish to birds." },
    { category: "Timeline infographic", prompt: "Rachel Carson timeline from marine biology writing to Silent Spring and environmental policy." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Rachel Carson.", suggestedSource: "Wikimedia Commons: Rachel-Carson.jpg" },
    { slot: "Laboratory", caption: "Marine biology or U.S. Fish and Wildlife Service research setting.", suggestedSource: "U.S. Fish and Wildlife Service archives" },
    { slot: "Notebooks", caption: "Silent Spring manuscript, notes or first edition.", suggestedSource: "Rachel Carson Council / Library of Congress" },
    { slot: "Historic location", caption: "Rachel Carson Homestead or coastal research setting.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "jane-goodall", name: "Jane Goodall", reason: "Both used science to build public conservation ethics." },
    { slug: "charles-darwin", name: "Charles Darwin", reason: "Carson's ecological thinking builds on biological interdependence and evolution." },
    { slug: "louis-pasteur", name: "Louis Pasteur", reason: "Both show science reshaping public health policy, though in different fields." },
  ],
  relatedTopics: [
    { title: "Ecology", href: "/subjects/biology/ecology", description: "Carson's central idea was ecological interdependence." },
    { title: "Chemical Reactions", href: "/subjects/chemistry/chemical-reactions", description: "Pesticide chemistry affects persistence and toxicity." },
    { title: "Food Chains", href: "/subjects/biology/food-chains", description: "Biomagnification moves toxins through food webs." },
  ],
  quotes: [
    { text: "In nature nothing exists alone.", source: "Silent Spring, 1962", status: "Verified" },
    { text: "The question is whether any civilization can wage relentless war on life without destroying itself.", source: "Silent Spring, paraphrased from argument", status: "Paraphrase" },
    { text: "Those who contemplate the beauty of the earth find reserves of strength.", source: "The Sense of Wonder, widely quoted", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "Which book made Carson central to environmental history?", options: ["Silent Spring", "On Floating Bodies", "Book of Optics", "The Analytical Engine"], answer: 0, explanation: "Silent Spring addressed pesticide risks." },
      { question: "What chemical is strongly associated with the book?", options: ["DDT", "Penicillin", "Radium", "Insulin"], answer: 0, explanation: "DDT was a major focus of pesticide debate." },
      { question: "What was Carson trained in?", options: ["Marine biology and zoology", "Cryptography only", "Pure astronomy", "Mechanical computing"], answer: 0, explanation: "She trained in biology and worked as a marine science writer." },
    ],
    trueFalse: [
      { statement: "Carson argued that ecological systems are interconnected.", answer: true, explanation: "That is central to her work." },
      { statement: "Silent Spring received no criticism from industry.", answer: false, explanation: "Industry attacks were intense." },
      { statement: "She wrote major ocean books before Silent Spring.", answer: true, explanation: "The Sea Around Us was a major success." },
    ],
    shortAnswer: [
      { question: "What is biomagnification?", modelAnswer: "It is the increase of toxin concentration at higher levels of a food chain.", marks: 4 },
      { question: "Why did Silent Spring matter?", modelAnswer: "It connected scientific evidence about pesticides to public policy and environmental awareness.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Carson's influence on environmental science.", modelAnswer: "Carson combined marine biology, ecology, toxicology and literary science writing. Silent Spring argued that persistent pesticides could move through ecosystems and harm wildlife and health. By translating technical evidence into a public argument, she helped make ecology a political and ethical concern and influenced later environmental regulation.", marks: 12 },
    ],
  },
};
