import type { ScientistProfile } from "./types";

export const liseMeitner: ScientistProfile = {
  slug: "lise-meitner",
  seoDescription: "Lise Meitner was a nuclear physicist who explained nuclear fission and became one of science history's central examples of exile, credit and moral responsibility.",
  timeline: [
    { year: "1878", title: "Born in Vienna", description: "Lise Meitner is born on 7 November." },
    { year: "1906", title: "Doctorate in physics", description: "She becomes one of the first women to earn a physics doctorate at the University of Vienna." },
    { year: "1907", title: "Moves to Berlin", description: "Meitner begins collaboration with Otto Hahn." },
    { year: "1918", title: "Protactinium work", description: "Meitner and Hahn publish important work on protactinium." },
    { year: "1938", title: "Flees Nazi Germany", description: "She escapes to Sweden because of Nazi racial laws.", pivotal: true },
    { year: "1939", title: "Fission explanation", description: "Meitner and Otto Frisch explain nuclear fission.", pivotal: true },
    { year: "1944", title: "Nobel excludes her", description: "The chemistry Nobel goes to Hahn alone." },
    { year: "1968", title: "Dies", description: "Meitner dies in Cambridge, England." },
  ],
  earlyLifeDetail: {
    childhood: "Meitner grew up in Vienna in a family that valued education, though girls' routes into university science were restricted.",
    family: "Her Jewish family later became vulnerable under Nazi rule, even though Meitner had converted to Protestantism.",
    education: "She studied privately to qualify for university and learned physics under Ludwig Boltzmann.",
    difficulties: "Gender exclusion, antisemitism, exile and Nobel omission shaped her career.",
    finances: "Early Berlin work had little pay or status; later positions in Sweden gave safety but not ideal support.",
    personalLife: "She never married and devoted her life to physics, friendship, mentorship and moral reflection.",
    influences: "Boltzmann, Max Planck, radioactivity research and collaboration with Hahn shaped her science.",
    booksRead: "Her work drew on thermodynamics, radioactivity, nuclear physics and quantum theory.",
    teachersAndMentors: "Ludwig Boltzmann was her most important teacher.",
    stories: ["She refused to work on the atomic bomb.", "Einstein called her a German Marie Curie.", "Element 109 is named meitnerium."],
  },
  turningPoints: ["Boltzmann's teaching gave her a physics identity.", "Berlin opened radioactivity research.", "Exile separated her from her laboratory.", "The fission interpretation changed world history."],
  failures: ["The Nobel committee failed to recognize her role in fission.", "Swedish exile left her scientifically isolated.", "Nuclear fission quickly became linked to weapons she opposed."],
  studentLessons: ["Scientific credit can be shaped by politics and prejudice.", "Theory and experiment often need each other.", "Moral responsibility does not end at discovery."],
  discoveries: [
    { name: "Nuclear fission interpretation", period: "1938-1939", background: "Hahn and Strassmann found barium after neutron bombardment of uranium.", problem: "How could uranium produce a much lighter element?", method: "Meitner and Frisch used the liquid-drop model and mass-energy equivalence.", discovery: "They explained that uranium nuclei split into lighter nuclei with energy release.", importance: "This opened nuclear energy and weapons physics.", modernApplications: ["Nuclear power", "Nuclear medicine", "Reactor physics", "Astrophysical nucleosynthesis"] },
    { name: "Radioactivity and protactinium", period: "1910s", background: "Radioactive decay chains were being mapped.", problem: "Which elements and isotopes appeared in decay processes?", method: "Meitner combined radiation physics with Hahn's radiochemistry.", discovery: "Their work helped identify protactinium and clarify decay behaviour.", importance: "It strengthened early nuclear science.", modernApplications: ["Radiochemistry", "Nuclear dating", "Isotope research"] },
  ],
  works: [
    { title: "Disintegration of uranium by neutrons", year: "1939", kind: "Paper", description: "Meitner and Frisch's fission explanation." },
    { title: "Protactinium research", year: "1918", kind: "Paper", description: "Important research with Hahn on radioactive elements." },
    { title: "Nuclear physics lectures", year: "1940s", kind: "Project", description: "Public and scientific communication after exile." },
  ],
  equations: [
    { name: "Mass-energy equivalence", latex: "E=mc^2", explanation: "Fission energy comes from a small mass difference converted into energy.", variables: [{ symbol: "E", meaning: "energy" }, { symbol: "m", meaning: "mass difference" }, { symbol: "c", meaning: "speed of light" }], workedExample: { problem: "What happens if a small mass is lost?", steps: [{ text: "Multiply by c squared, a huge number." }], answer: "A small mass defect releases large energy." }, modernUse: "Nuclear energy and particle physics." },
    { name: "Neutron-induced fission", latex: "{}^{235}U+n\\rightarrow \\text{fragments}+kn+E", explanation: "A uranium nucleus absorbs a neutron and splits into fragments, neutrons and energy.", variables: [{ symbol: "k", meaning: "number of released neutrons" }, { symbol: "E", meaning: "released energy" }], workedExample: { problem: "Why can a chain reaction occur?", steps: [{ text: "Released neutrons can trigger further fissions." }], answer: "One fission can lead to more fissions." }, modernUse: "Reactor physics and nuclear safety." },
  ],
  connections: [
    { field: "Physics", description: "Meitner's work is central to nuclear physics." },
    { field: "Chemistry", description: "Radiochemical evidence was essential to fission discovery." },
    { field: "Engineering", description: "Fission became the basis of nuclear reactors." },
  ],
  historicalContext: { worldEvents: "Her life crossed World War I, Nazi persecution, World War II and the atomic age.", politics: "Nazi racial laws forced her exile.", wars: "Fission became strategically important during World War II.", universities: "Vienna, Berlin and Stockholm shaped her career.", scientificCommunity: "Hahn, Strassmann, Frisch, Bohr and others formed the fission context.", technology: "Radiation detectors, neutron sources and radiochemistry drove discovery." },
  backlash: [
    { type: "Discrimination", title: "Nazi persecution", description: "Jewish ancestry forced Meitner to flee Germany.", status: "Verified" },
    { type: "Gender bias", title: "Nobel omission", description: "Her role in fission was not recognized by the 1944 Nobel Prize.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Political", description: "She lost her German laboratory through Nazi policy." },
    { category: "Gender", description: "Women physicists faced unequal status and recognition." },
    { category: "Personal", description: "Exile separated her from colleagues and home." },
    { category: "Scientific", description: "Fission required interpreting surprising chemical evidence physically." },
  ],
  achievements: [
    { title: "Max Planck Medal", year: "1949", description: "Recognition for physics contributions." },
    { title: "Element meitnerium", year: "1982", description: "Element 109 named in her honour." },
    { title: "Fission explanation", year: "1939", description: "One of nuclear physics' key theoretical insights." },
  ],
  funFacts: ["She was the first woman physics professor in Germany.", "She worked with Hahn for three decades.", "She rejected the label mother of the atomic bomb.", "Her gravestone says she never lost her humanity."],
  didYouKnow: [
    { title: "A winter walk", content: "Meitner and Frisch worked through the fission idea while in Sweden." },
    { title: "Chemistry plus physics", content: "Fission needed both chemical identification and physical explanation." },
    { title: "Delayed justice", content: "Historians now treat her Nobel exclusion as a serious error." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Lise Meitner with nuclear fission diagrams, uranium nucleus sketch and 1930s physics notes." },
    { category: "Scientific diagram", prompt: "Uranium nucleus splitting into two fragments and neutrons with energy release." },
    { category: "Timeline infographic", prompt: "Meitner timeline from Vienna and Berlin to exile, fission and later recognition." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Lise Meitner.", suggestedSource: "Wikimedia Commons" },
    { slot: "Laboratory", caption: "Berlin radioactivity laboratory setting.", suggestedSource: "Max Planck Society archives" },
    { slot: "Notebooks", caption: "Fission calculation or correspondence with Frisch.", suggestedSource: "Scientific archives" },
    { slot: "Historic location", caption: "Kaiser Wilhelm Institute or Swedish exile setting.", suggestedSource: "Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "marie-curie", name: "Marie Curie", reason: "Both worked in radioactivity and nuclear science." },
    { slug: "albert-einstein", name: "Albert Einstein", reason: "Mass-energy equivalence explains fission energy." },
    { slug: "chien-shiung-wu", name: "Chien-Shiung Wu", reason: "Both are major nuclear physicists affected by credit injustice." },
  ],
  relatedTopics: [
    { title: "Nuclear Physics", href: "/subjects/physics/nuclear-physics", description: "Fission is a nuclear process." },
    { title: "Energy", href: "/subjects/physics/forms-of-energy-and-conservation", description: "Fission converts mass into energy." },
    { title: "Atoms", href: "/subjects/chemistry/atomic-structure", description: "Nuclear reactions involve atomic nuclei." },
  ],
  quotes: [
    { text: "I will have nothing to do with a bomb.", source: "Widely attributed wartime statement", status: "Widely attributed" },
    { text: "A physicist who never lost her humanity.", source: "Inscription on Meitner's gravestone", status: "Verified" },
    { text: "Science makes people reach selflessly for truth and objectivity.", source: "Attributed to Meitner", status: "Widely attributed" },
  ],
  quiz: {
    mcq: [
      { question: "What did Meitner help explain?", options: ["Nuclear fission", "Transposons", "Cepheid variables", "Compilers"], answer: 0, explanation: "She and Frisch explained fission." },
      { question: "Why did she flee Germany?", options: ["Nazi persecution", "Volcanic eruption", "No interest in physics", "A comet"], answer: 0, explanation: "Nazi racial laws made her unsafe." },
      { question: "Which equation explains fission energy?", options: ["E=mc^2", "F=ma", "PV=nRT", "V=IR only"], answer: 0, explanation: "Mass-energy equivalence explains the energy release." },
    ],
    trueFalse: [
      { statement: "Meitner shared the 1944 Nobel Prize with Hahn.", answer: false, explanation: "Hahn received it alone." },
      { statement: "She refused to work on nuclear weapons.", answer: true, explanation: "She did not join bomb work." },
      { statement: "Fission can release neutrons.", answer: true, explanation: "Released neutrons can sustain chain reactions." },
    ],
    shortAnswer: [
      { question: "What is nuclear fission?", modelAnswer: "The splitting of a heavy nucleus into lighter fragments with energy release.", marks: 4 },
      { question: "Why was Meitner's Nobel omission controversial?", modelAnswer: "Her physical explanation was essential to the discovery but the prize recognized Hahn alone.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Meitner's role in fission.", modelAnswer: "After Hahn and Strassmann found unexpected barium products from uranium, Meitner and Frisch interpreted the result as a heavy nucleus splitting. They used the liquid-drop model and mass-energy equivalence to estimate the energy release. This transformed nuclear physics and helped launch the atomic age, while also exposing problems of exile, gender bias and scientific credit.", marks: 12 },
    ],
  },
};
