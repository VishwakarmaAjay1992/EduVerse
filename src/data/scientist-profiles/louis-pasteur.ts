import type { ScientistProfile } from "./types";

export const louisPasteur: ScientistProfile = {
  slug: "louis-pasteur",
  seoDescription:
    "Louis Pasteur connected microorganisms with fermentation, spoilage and disease, disproved spontaneous generation under controlled conditions, developed pasteurisation, and advanced vaccination.",

  timeline: [
    { year: "1822", title: "Born in Dole", description: "Louis Pasteur is born on 27 December in Dole, France, the son of a tanner and Napoleonic veteran." },
    { year: "1843", title: "École Normale Supérieure", description: "Pasteur enters elite scientific training in Paris after a slow but determined educational rise.", pivotal: true },
    { year: "1848", title: "Molecular asymmetry", description: "He separates mirror-image tartrate crystals, showing that molecular handedness can have optical consequences.", pivotal: true },
    { year: "1854", title: "Dean at Lille", description: "At Lille, an industrial city, Pasteur turns toward fermentation problems important to alcohol and food production." },
    { year: "1857", title: "Fermentation papers", description: "He argues that specific microorganisms cause specific fermentations, challenging purely chemical explanations.", pivotal: true },
    { year: "1861", title: "Swan-neck flask experiments", description: "Pasteur shows sterilised broth remains clear when airborne dust is excluded, undermining spontaneous generation.", pivotal: true },
    { year: "1863", title: "Wine and pasteurisation", description: "He studies wine spoilage and develops controlled heating to reduce microbial contamination without ruining quality." },
    { year: "1865", title: "Silkworm disease mission", description: "Pasteur investigates diseases devastating the French silk industry and develops practical screening methods." },
    { year: "1879", title: "Chicken cholera attenuation", description: "Pasteur's group observes that weakened cultures can protect animals, strengthening the idea of laboratory vaccination.", pivotal: true },
    { year: "1881", title: "Anthrax vaccine demonstration", description: "The Pouilly-le-Fort public trial dramatically supports vaccination against anthrax in livestock." },
    { year: "1885", title: "Rabies treatment", description: "Joseph Meister receives Pasteur's post-exposure rabies treatment, making Pasteur internationally famous.", pivotal: true },
    { year: "1888", title: "Institut Pasteur opens", description: "The institute joins research, treatment and teaching, extending Pasteur's model of laboratory medicine." },
    { year: "1895", title: "Dies near Paris", description: "Pasteur dies on 28 September and is later entombed at the Institut Pasteur." },
  ],

  earlyLifeDetail: {
    childhood: "Pasteur grew up in a modest family in eastern France. He was not initially a brilliant science student; his rise came through persistence, discipline and exceptional laboratory focus.",
    family: "His father Jean-Joseph Pasteur had served in Napoleon's army and worked as a tanner. The household valued duty, patriotism and education, themes that remained visible in Pasteur's public identity.",
    education: "Pasteur trained at the École Normale Supérieure and became a chemist. His early crystallography was essential because it trained him to infer invisible structure from careful physical effects.",
    difficulties: "His claims challenged entrenched explanations in chemistry, medicine and agriculture. He also worked after a serious stroke in 1868 that left lasting physical weakness.",
    finances: "Pasteur's work often depended on state, industrial and public support because his research promised practical value for wine, silk, livestock and public health.",
    personalLife: "He married Marie Laurent in 1849. She managed correspondence and family life while Pasteur worked intensely. Several of their children died young from disease, giving personal gravity to medical research.",
    influences: "Jean-Baptiste Biot encouraged his optical work. Practical industrial problems at Lille redirected him from crystals to fermentation. Earlier vaccination work by Jenner supplied precedent for prevention.",
    booksRead: "Pasteur worked through chemistry, crystallography, physiology and medical literature. He read controversies as experimental problems to be settled by apparatus and controls.",
    teachersAndMentors: "Biot was a crucial early supporter. Dumas and Balard shaped his chemical formation. Later, Pasteur became the centre of a powerful laboratory school.",
    stories: [
      "Pasteur's swan-neck flask did not exclude air; it excluded dust, which made the experiment so elegant.",
      "He was a chemist, not a physician, yet changed medical practice profoundly.",
      "His rabies work was undertaken under urgent ethical pressure because untreated rabies was almost always fatal.",
    ],
  },
  turningPoints: [
    "Tartrate crystals taught him that invisible molecular structure can produce measurable effects.",
    "Lille's industrial problems made fermentation a scientific and economic question.",
    "The spontaneous-generation controversy forced him to design unusually clear controls.",
    "Animal disease work turned microbiology into preventive medicine.",
    "Rabies treatment made laboratory medicine a public institution.",
  ],
  failures: [
    "Pasteur sometimes overstated priority and underplayed collaborators.",
    "His anthrax vaccine work involved complicated preparation histories later debated by historians.",
    "The rabies treatment was ethically risky because the virus had not been seen and clinical testing standards were not modern.",
    "He was not the sole founder of germ theory; Semmelweis, Snow, Lister, Koch and others were essential.",
  ],
  studentLessons: [
    "Controls matter: the swan-neck flask separated air exposure from microbial contamination.",
    "Practical problems can lead to deep theory.",
    "Public health advances require persuasion as well as evidence.",
    "Scientific fame can simplify collaborative history too much.",
  ],
  discoveries: [
    { name: "Molecular chirality", period: "1848", background: "Certain tartrate solutions rotated polarized light while chemically similar ones did not.", problem: "What structural difference caused optical activity?", method: "Pasteur separated left- and right-handed crystals manually and tested optical rotation.", discovery: "Molecular asymmetry can produce optical activity.", importance: "This helped found stereochemistry.", modernApplications: ["Pharmaceutical chemistry", "Molecular biology", "Asymmetric synthesis", "Protein structure"] },
    { name: "Microbial fermentation", period: "1857-1860s", background: "Fermentation was often explained as a purely chemical decomposition.", problem: "Are living microorganisms responsible for specific fermentations and spoilage?", method: "Pasteur examined fermenting liquids microscopically and linked organisms to products.", discovery: "Specific microbes drive specific fermentations and contamination causes spoilage.", importance: "This connected microbiology with industry and medicine.", modernApplications: ["Brewing", "Food microbiology", "Biotechnology", "Quality control"] },
    { name: "Disproof of spontaneous generation under tested conditions", period: "1861", background: "Many believed microorganisms could arise spontaneously in nutrient broths.", problem: "Does sterilised broth develop life if protected from dust-borne microbes?", method: "He boiled broth in swan-neck flasks that allowed air but trapped dust.", discovery: "Broth remained sterile unless contaminated by trapped material.", importance: "The experiment strongly supported biogenesis and germ theory.", modernApplications: ["Sterile technique", "Aseptic surgery", "Microbial culture methods", "Food safety"] },
    { name: "Attenuated vaccination", period: "1879-1885", background: "Jenner had shown vaccination could prevent smallpox, but laboratory attenuation was not yet generalized.", problem: "Can weakened pathogens protect against dangerous disease?", method: "Pasteur's group used weakened cultures or treated infectious material in animal and human cases.", discovery: "Attenuated preparations could induce protection against diseases such as chicken cholera, anthrax and rabies.", importance: "This helped establish immunology and laboratory vaccine development.", modernApplications: ["Vaccinology", "Veterinary medicine", "Post-exposure prophylaxis", "Public health campaigns"] },
  ],
  works: [
    { title: "Mémoire sur la fermentation appelée lactique", year: "1857", kind: "Paper", description: "A foundational paper connecting lactic fermentation to microorganisms." },
    { title: "Swan-neck flask experiments", year: "1861", kind: "Experiment", description: "Controlled experiments separating air from airborne contamination." },
    { title: "Études sur le vin", year: "1866", kind: "Book", description: "Pasteur's study of wine diseases and preservation." },
    { title: "Studies on Beer", year: "1876", kind: "Book", description: "A microbiological treatment of brewing and spoilage." },
    { title: "Rabies treatment programme", year: "1885", kind: "Project", description: "A post-exposure vaccination programme developed with collaborators." },
  ],
  equations: [
    { name: "Thermal microbial reduction", latex: "N=N_0e^{-kt}", explanation: "Heating can reduce viable microbial counts approximately exponentially under fixed conditions.", variables: [{ symbol: "N", meaning: "remaining viable microbes" }, { symbol: "N_0", meaning: "initial viable microbes" }, { symbol: "k", meaning: "inactivation rate constant" }, { symbol: "t", meaning: "time" }], workedExample: { problem: "If k=0.7 per minute and N0=100000, estimate N after 5 min.", steps: [{ text: "Substitute.", latex: "N=100000e^{-0.7(5)}" }, { text: "Evaluate.", latex: "N\\approx3020" }], answer: "About 3.0 x 10^3 microbes remain." }, modernUse: "Food safety models, sterilisation and pasteurisation design use microbial reduction principles." },
    { name: "Log reduction", latex: "\\text{log reduction}=\\log_{10}\\frac{N_0}{N}", explanation: "A log reduction expresses how strongly treatment lowers microbial load.", variables: [{ symbol: "N_0", meaning: "initial count" }, { symbol: "N", meaning: "final count" }], workedExample: { problem: "A treatment reduces bacteria from 1,000,000 to 100. What is the log reduction?", steps: [{ text: "Calculate the ratio.", latex: "\\frac{N_0}{N}=10000" }, { text: "Take log base 10.", latex: "\\log_{10}(10000)=4" }], answer: "It is a 4-log reduction." }, modernUse: "Used in sterilisation, disinfectant testing and public-health standards." },
  ],
  connections: [
    { field: "Chemistry", description: "Pasteur began with molecular asymmetry and chemical fermentation." },
    { field: "Biology", description: "His work made microorganisms central biological agents." },
    { field: "Medicine", description: "Vaccination, asepsis and infection control drew strength from his experiments." },
    { field: "Engineering", description: "Pasteurisation is a controlled industrial heat-treatment process." },
  ],
  historicalContext: { worldEvents: "Pasteur worked in nineteenth-century France amid industrialization, public-health crises and national rivalry.", politics: "French state support and national prestige shaped his research programme.", wars: "The Franco-Prussian War intensified Pasteur's patriotism and institutional ambitions.", universities: "Elite French institutions linked teaching, state service and laboratory authority.", scientificCommunity: "Germ theory developed through many figures, including Pasteur, Koch, Lister, Semmelweis and Snow.", technology: "Microscopes, sterilisation, flasks, incubators, animal facilities and industrial heating enabled his work." },
  backlash: [
    { type: "Academic conflict", title: "Spontaneous generation debate", description: "Pasteur's experiments challenged naturalists who defended spontaneous generation.", status: "Verified" },
    { type: "Controversy", title: "Rabies ethics", description: "The first human rabies treatments involved urgent risk before modern clinical trial standards.", status: "Verified" },
    { type: "Priority dispute", title: "Germ theory was collaborative", description: "Popular accounts sometimes credit Pasteur alone, obscuring other major contributors.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Health", description: "A severe stroke in 1868 left Pasteur partly impaired." },
    { category: "Professional", description: "He had to persuade industries, doctors and public officials to change practice." },
    { category: "Scientific", description: "Microbes were invisible to ordinary experience and required careful indirect proof." },
    { category: "Personal", description: "Deaths of several children gave disease research personal weight." },
  ],
  achievements: [
    { title: "Rumford Medal", year: "1856", description: "Recognized optical and chemical work." },
    { title: "Institut Pasteur founded", year: "1888", description: "Established a lasting centre for microbiology and medicine." },
    { title: "Pasteurisation named for him", year: "19th century", description: "His preservation process became a global food-safety practice." },
    { title: "Rabies treatment success", year: "1885", description: "Made laboratory preventive medicine internationally visible." },
  ],
  funFacts: ["Pasteur began as a chemist, not a doctor.", "His swan-neck flask admitted air but trapped dust.", "Pasteurisation is named after him.", "He worked on wine, beer, silk, livestock and human disease."],
  didYouKnow: [
    { title: "Not just one field", content: "Pasteur moved from crystals to microbes to vaccines without abandoning experimental control." },
    { title: "A public scientist", content: "His demonstrations were designed to persuade farmers, doctors, industries and governments." },
    { title: "Germ theory had many builders", content: "Pasteur was central, but modern germ theory was collective." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Louis Pasteur in a nineteenth-century laboratory with swan-neck flasks, microscope and notebooks, realistic educational portrait." },
    { category: "Experiment", prompt: "Swan-neck flask experiment diagram showing sterilised broth, curved neck, dust trap and microbial contamination path." },
    { category: "Scientific diagram", prompt: "Pasteurisation temperature-time diagram with microbial reduction curve and food safety labels." },
    { category: "Timeline infographic", prompt: "Pasteur timeline from chirality to fermentation, swan-neck flasks, pasteurisation, anthrax and rabies vaccine." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Louis Pasteur by Paul Nadar.", suggestedSource: "Wikimedia Commons: Pasteur, Louis par Paul Nadar.jpg" },
    { slot: "Laboratory", caption: "Pasteur laboratory or Institut Pasteur historical room.", suggestedSource: "Institut Pasteur archives or Wikimedia Commons" },
    { slot: "Instruments", caption: "Swan-neck flask used in Pasteur's experiments.", suggestedSource: "Wellcome Collection / Wikimedia Commons" },
    { slot: "Notebooks", caption: "Pasteur manuscript or experimental notes.", suggestedSource: "Institut Pasteur collections" },
  ],
  relatedScientists: [
    { slug: "alexander-fleming", name: "Alexander Fleming", reason: "Fleming's antibiotics belong to the microbiological world Pasteur helped build." },
    { slug: "joseph-lister", name: "Joseph Lister", reason: "Lister applied germ theory to antiseptic surgery." },
    { slug: "robert-koch", name: "Robert Koch", reason: "Koch supplied bacteriological methods and disease-specific proof." },
    { slug: "marie-curie", name: "Marie Curie", reason: "Both connected laboratory science to medicine and public institutions." },
  ],
  relatedTopics: [
    { title: "Microbiology", href: "/subjects/biology/microbiology", description: "Pasteur made microorganisms central to fermentation and disease." },
    { title: "Immunity and Vaccination", href: "/subjects/biology/immunity-and-vaccination", description: "His attenuated vaccines helped create immunology." },
    { title: "Food Safety", href: "/learning-hub/food-safety", description: "Pasteurisation remains a core food-protection process." },
    { title: "Experimental Design", href: "/learning-hub/experimental-design", description: "His flasks are classic examples of controls." },
  ],
  quotes: [
    { text: "Chance favors only the prepared mind.", source: "Lecture at University of Lille, 1854", status: "Verified" },
    { text: "In the fields of observation chance favors only the prepared mind.", source: "University of Lille lecture, common translation", status: "Verified" },
    { text: "Science knows no country, because knowledge belongs to humanity.", source: "Often attributed to Pasteur", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What did the swan-neck flask experiment test?", options: ["Spontaneous generation", "Planetary motion", "Radioactive decay", "DNA replication"], answer: 0, explanation: "It tested whether sterilised broth developed microbes without contamination." },
      { question: "Pasteurisation is primarily a method of what?", options: ["Controlled heating to reduce microbes", "Freezing metals", "Measuring gravity", "Separating isotopes"], answer: 0, explanation: "It uses heat to reduce spoilage and harmful microorganisms." },
      { question: "Pasteur's earliest major work was in what area?", options: ["Crystallography and chirality", "Astronomy", "Quantum mechanics", "Computing"], answer: 0, explanation: "He worked on tartrate crystals and optical activity." },
      { question: "Which disease made Pasteur famous for post-exposure treatment?", options: ["Rabies", "Smallpox", "Malaria", "Scurvy"], answer: 0, explanation: "The rabies treatment of Joseph Meister became famous." },
      { question: "Which statement is most accurate?", options: ["Pasteur was one major builder of germ theory", "Pasteur alone created all germ theory", "Pasteur rejected microbes", "Pasteur discovered DNA"], answer: 0, explanation: "Germ theory was built by several scientists, with Pasteur central." },
    ],
    trueFalse: [
      { statement: "Pasteur's swan-neck flask allowed air to enter.", answer: true, explanation: "The neck trapped dust while admitting air." },
      { statement: "Pasteur was trained first as a chemist.", answer: true, explanation: "His early work was chemical and crystallographic." },
      { statement: "Pasteurisation sterilizes all foods completely under all conditions.", answer: false, explanation: "It reduces microbial load; it is not the same as absolute sterilisation." },
      { statement: "Pasteur's vaccine work raised ethical questions by modern standards.", answer: true, explanation: "Especially the early rabies treatments." },
    ],
    shortAnswer: [
      { question: "Why was the swan-neck design powerful?", modelAnswer: "It allowed air into the flask while trapping dust and microbes, separating air exposure from contamination.", marks: 4 },
      { question: "How did fermentation lead Pasteur toward germ theory?", modelAnswer: "He showed specific microorganisms caused specific fermentations and spoilage, making microbes active agents rather than incidental matter.", marks: 5 },
      { question: "Why should Pasteur not be called the only founder of germ theory?", modelAnswer: "Other figures such as Koch, Lister, Semmelweis and Snow supplied crucial evidence, methods and applications.", marks: 4 },
    ],
    longAnswer: [
      { question: "Explain Pasteur's contribution to public health.", modelAnswer: "Pasteur linked laboratory microbiology to practical prevention. His work on fermentation and spoilage led to pasteurisation, protecting food and drink. His experiments against spontaneous generation strengthened the case that microbes come from contamination. His vaccine work helped show that laboratory-modified infectious agents could prevent disease. Together these changed agriculture, surgery, medicine and public trust in laboratory science.", marks: 12 },
      { question: "Discuss the strengths and limits of Pasteur's scientific legacy.", modelAnswer: "Pasteur's strength was experimental clarity applied to urgent problems: wine spoilage, silk disease, anthrax and rabies. He designed memorable experiments and built institutions. The limits are also real: germ theory was collective, some vaccine histories are complicated, and the first rabies treatments do not meet modern clinical standards. His legacy is strongest when seen as rigorous, practical and institutional rather than solitary magic.", marks: 12 },
    ],
  },
};
