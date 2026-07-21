import type { ScientistProfile } from "./types";

export const henriettaLeavitt: ScientistProfile = {
  slug: "henrietta-leavitt",
  seoDescription: "Henrietta Swan Leavitt discovered the Cepheid period-luminosity relation, giving astronomers a powerful method for measuring cosmic distances.",
  timeline: [
    { year: "1868", title: "Born in Massachusetts", description: "Henrietta Swan Leavitt is born on 4 July." },
    { year: "1890s", title: "Studies astronomy", description: "She studies at what becomes Radcliffe College." },
    { year: "1893", title: "Harvard Observatory", description: "Leavitt begins work with the Harvard women computers." },
    { year: "1908", title: "Cepheid pattern noticed", description: "She reports that brighter Cepheids have longer periods.", pivotal: true },
    { year: "1912", title: "Period-luminosity law", description: "Her paper states the relationship more clearly.", pivotal: true },
    { year: "1921", title: "Dies", description: "Leavitt dies of cancer." },
    { year: "1920s", title: "Hubble uses her law", description: "Her discovery helps prove galaxies lie beyond the Milky Way." },
  ],
  earlyLifeDetail: {
    childhood: "Leavitt grew up in New England in an educated family and developed scientific interests at a time when women's astronomy work was often channelled into computation.",
    family: "Her family background supported education, though professional scientific opportunities for women remained limited.",
    education: "She studied at Oberlin and Radcliffe, where astronomy became her field.",
    difficulties: "She experienced illness, hearing loss, low pay and limited recognition.",
    finances: "The Harvard computers were paid modestly for demanding technical work.",
    personalLife: "Leavitt lived a quiet professional life shaped by careful observational labour rather than public fame.",
    influences: "Edward Pickering's observatory program and the photographic plate archive shaped her work.",
    booksRead: "Her work required stellar photometry, variable-star catalogues and observational astronomy.",
    teachersAndMentors: "The Harvard Observatory environment supplied data, methods and colleagues.",
    stories: ["Her law became a cosmic measuring stick.", "She worked from glass photographic plates.", "Her discovery helped make Hubble's work possible."],
  },
  turningPoints: ["Harvard gave her access to photographic plates.", "The Magellanic Clouds provided a clean distance comparison.", "The 1912 paper became a foundation of the distance scale.", "Later astronomers used the law to measure galaxies."],
  failures: ["Her low-status role limited recognition.", "She died before the full cosmological impact of her law became clear.", "The Harvard computers' work was often undervalued."],
  studentLessons: ["Careful measurement can change cosmology.", "Data archives can contain discoveries waiting for pattern recognition.", "Recognition is not always proportional to importance."],
  discoveries: [
    { name: "Cepheid period-luminosity relation", period: "1908-1912", background: "Variable stars changed brightness periodically.", problem: "Could their periods reveal intrinsic brightness?", method: "Leavitt compared Cepheids in the Magellanic Clouds, treating them as roughly the same distance away.", discovery: "Longer-period Cepheids are intrinsically brighter.", importance: "It made Cepheids standard candles for measuring space.", modernApplications: ["Cosmic distance ladder", "Galaxy distances", "Hubble constant studies", "Stellar astronomy"] },
    { name: "Variable star cataloguing", period: "1890s-1910s", background: "Photographic plates recorded enormous numbers of stars.", problem: "Which stars varied and by how much?", method: "She compared plates and measured brightness changes.", discovery: "She catalogued many variables, enabling statistical study.", importance: "It improved stellar astronomy.", modernApplications: ["Time-domain astronomy", "Variable-star surveys", "Photometric databases"] },
  ],
  works: [
    { title: "1777 variables in the Magellanic Clouds", year: "1908", kind: "Paper", description: "Reported variable stars and the first period-brightness pattern." },
    { title: "Periods of 25 variable stars", year: "1912", kind: "Paper", description: "Stated the Cepheid period-luminosity relation." },
    { title: "Harvard plate measurements", year: "1890s-1920s", kind: "Project", description: "Photometric work on stellar plates." },
  ],
  equations: [
    { name: "Distance modulus", latex: "m-M=5\\log_{10}(d)-5", explanation: "Apparent magnitude m, absolute magnitude M and distance d in parsecs are related.", variables: [{ symbol: "m", meaning: "apparent magnitude" }, { symbol: "M", meaning: "absolute magnitude" }, { symbol: "d", meaning: "distance in parsecs" }], workedExample: { problem: "If m-M=10, find d.", steps: [{ text: "Solve.", latex: "10=5\\log d-5\\Rightarrow \\log d=3" }], answer: "d=1000 parsecs." }, modernUse: "Used throughout observational astronomy." },
    { name: "Period-luminosity form", latex: "M=a\\log_{10}P+b", explanation: "Cepheid absolute magnitude relates to logarithm of pulsation period.", variables: [{ symbol: "M", meaning: "absolute magnitude" }, { symbol: "P", meaning: "period" }, { symbol: "a,b", meaning: "calibration constants" }], workedExample: { problem: "If period increases, what happens?", steps: [{ text: "Cepheids with longer periods are intrinsically brighter." }], answer: "Longer period means greater luminosity." }, modernUse: "Cepheid distance calibration." },
  ],
  connections: [
    { field: "Astronomy", description: "Leavitt's work underpins the cosmic distance ladder." },
    { field: "Physics", description: "Cepheid pulsation depends on stellar structure." },
    { field: "Statistics", description: "Her discovery came from comparing periods and brightness values." },
  ],
  historicalContext: { worldEvents: "Her work preceded the discovery of galaxies beyond the Milky Way.", politics: "Women computers did essential but low-status scientific labour.", universities: "Harvard Observatory was central to photographic astronomy.", scientificCommunity: "Pickering, Annie Jump Cannon and other Harvard computers formed the context.", technology: "Glass plates and photometry made large-scale stellar comparison possible." },
  backlash: [
    { type: "Gender bias", title: "Underpaid women computers", description: "Women at Harvard performed major astronomical work for low pay and limited status.", status: "Verified" },
    { type: "Public criticism", title: "Delayed recognition", description: "Her role became clearer after others used her law for major discoveries.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Gender", description: "Women's work was often treated as computation rather than discovery." },
    { category: "Health", description: "Illness and hearing loss affected her life." },
    { category: "Scientific", description: "She had to extract a law from painstaking plate measurements." },
  ],
  achievements: [
    { title: "Cepheid law", year: "1912", description: "A foundation of astronomical distance measurement." },
    { title: "Variable-star catalogues", year: "1900s", description: "Important observational astronomy work." },
    { title: "Legacy in cosmic distance scale", year: "1920s onward", description: "Her law made modern cosmology possible." },
  ],
  funFacts: ["She studied stars from glass plates.", "Cepheids are still used to calibrate distances.", "Her work helped Hubble prove Andromeda is another galaxy.", "She was considered for Nobel nomination, but died before it could proceed."],
  didYouKnow: [
    { title: "Same distance trick", content: "The Magellanic Clouds let her compare stars without large distance differences." },
    { title: "Standard candles", content: "Cepheids work like cosmic light bulbs of knowable brightness." },
    { title: "Quiet revolution", content: "A pattern in variable stars changed the scale of the universe." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Henrietta Leavitt at Harvard Observatory with glass plates, Cepheid light curves and star fields." },
    { category: "Scientific diagram", prompt: "Cepheid period-luminosity graph with longer periods linked to brighter stars." },
    { category: "Timeline infographic", prompt: "Leavitt timeline from Harvard computers to Cepheid law and Hubble's galaxy distances." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Henrietta Swan Leavitt.", suggestedSource: "Wikimedia Commons: Henrietta Swan Leavitt.jpg" },
    { slot: "Laboratory", caption: "Harvard College Observatory plate-measuring room.", suggestedSource: "Harvard archives" },
    { slot: "Instruments", caption: "Photographic plate or measuring device.", suggestedSource: "Harvard Observatory collections" },
    { slot: "Historic location", caption: "Harvard College Observatory.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "cecilia-payne-gaposchkin", name: "Cecilia Payne-Gaposchkin", reason: "Both transformed Harvard astronomy." },
    { slug: "johannes-kepler", name: "Johannes Kepler", reason: "Both gave astronomy mathematical laws from observation." },
    { slug: "abd-al-rahman-al-sufi", name: "Abd al-Rahman al-Sufi", reason: "Both advanced star cataloguing and observational astronomy." },
  ],
  relatedTopics: [
    { title: "Stars", href: "/subjects/physics/stars", description: "Cepheids are pulsating stars." },
    { title: "Logarithms", href: "/subjects/mathematics/logarithms-and-their-laws", description: "Magnitude and distance use logarithms." },
    { title: "Data Analysis", href: "/subjects/mathematics/charts-tables-and-graphs", description: "Her law came from graphing data." },
  ],
  quotes: [
    { text: "A straight line can readily be drawn among each of the two series of points.", source: "Leavitt 1912 paper, referring to period-luminosity data", status: "Verified" },
    { text: "The variables are probably at nearly the same distance from the Earth.", source: "Leavitt 1912 paper, paraphrase", status: "Paraphrase" },
    { text: "Her work opened the way to the scale of the universe.", source: "Historical summary", status: "Paraphrase" },
  ],
  quiz: {
    mcq: [
      { question: "What relation did Leavitt discover?", options: ["Cepheid period-luminosity relation", "Parity violation", "Transposons", "Electroweak unification"], answer: 0, explanation: "She discovered that Cepheid period reveals luminosity." },
      { question: "Where did she work?", options: ["Harvard Observatory", "Cold Spring Harbor", "Bletchley Park", "Lyme Regis only"], answer: 0, explanation: "She worked at Harvard College Observatory." },
      { question: "What are Cepheids used for?", options: ["Measuring distances", "Making compilers", "Splitting uranium", "Finding fossils"], answer: 0, explanation: "They are standard candles." },
    ],
    trueFalse: [
      { statement: "Longer-period Cepheids are intrinsically brighter.", answer: true, explanation: "That is Leavitt's law." },
      { statement: "Leavitt's work had no effect on cosmology.", answer: false, explanation: "It was crucial to cosmic distances." },
      { statement: "She worked with photographic plates.", answer: true, explanation: "Harvard's plate archive supplied the data." },
    ],
    shortAnswer: [
      { question: "What is a standard candle?", modelAnswer: "An object with known intrinsic brightness used to measure distance from apparent brightness.", marks: 4 },
      { question: "Why were the Magellanic Clouds useful?", modelAnswer: "Their Cepheids were roughly at the same distance, making period-brightness comparison clearer.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Leavitt's contribution to astronomy.", modelAnswer: "Leavitt measured variable stars on photographic plates and discovered that Cepheids with longer periods are intrinsically brighter. Because this allowed astronomers to infer true brightness, Cepheids became standard candles. Comparing true and apparent brightness made distances measurable beyond parallax and enabled later discoveries about galaxies and cosmic expansion.", marks: 12 },
    ],
  },
};
