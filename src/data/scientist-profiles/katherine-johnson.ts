import type { ScientistProfile } from "./types";

export const katherineJohnson: ScientistProfile = {
  slug: "katherine-johnson",
  seoDescription:
    "Katherine Johnson calculated NASA flight trajectories for Mercury, Apollo and early space missions, combining analytic geometry, orbital mechanics and extraordinary accuracy.",
  timeline: [
    { year: "1918", title: "Born in West Virginia", description: "Katherine Coleman is born on 26 August in White Sulphur Springs, West Virginia." },
    { year: "1920s", title: "Family moves for schooling", description: "Because local schools for Black children stop early, her family moves so she can continue education.", pivotal: true },
    { year: "1937", title: "Graduates from West Virginia State", description: "She graduates summa cum laude with degrees in mathematics and French at age eighteen." },
    { year: "1939", title: "Graduate school barrier", description: "She becomes one of the first Black students admitted to graduate study at West Virginia University." },
    { year: "1953", title: "Joins NACA", description: "Johnson joins the West Area Computing unit at Langley, working inside segregated research structures.", pivotal: true },
    { year: "1958", title: "NASA era begins", description: "NACA becomes NASA, and Johnson works increasingly on spaceflight trajectory analysis." },
    { year: "1961", title: "Alan Shepard mission", description: "She calculates trajectory work for America's first human spaceflight." },
    { year: "1962", title: "John Glenn verification", description: "Glenn asks for Johnson to personally verify electronic computer calculations before Friendship 7.", pivotal: true },
    { year: "1969", title: "Apollo 11 support", description: "Johnson contributes to calculations supporting the first Moon landing mission." },
    { year: "1986", title: "Retires from NASA", description: "She retires after more than three decades of aerospace mathematics." },
    { year: "2015", title: "Presidential Medal of Freedom", description: "President Barack Obama awards her the United States' highest civilian honour." },
    { year: "2020", title: "Dies at 101", description: "Johnson dies on 24 February, celebrated as a central figure in American space history." },
  ],
  earlyLifeDetail: {
    childhood:
      "Johnson counted everything from childhood: steps, dishes, stars, and the details of ordinary life. Her ability was obvious early, but the segregated school system meant talent alone was not enough; her family had to reorganize life around access to education.",
    family:
      "Her father Joshua Coleman worked as a farmer, handyman and hotel employee; her mother Joylette was a teacher. The family treated education as a collective investment and moved during school terms so the children could study.",
    education:
      "At West Virginia State College she studied under strong Black mathematicians including W. W. Schieffelin Claytor, who created advanced courses for her. She graduated at eighteen and later briefly entered graduate school after desegregation opened a narrow door.",
    difficulties:
      "Johnson worked through racial segregation, gender exclusion, classified technical cultures and the low status assigned to women computers, while doing calculations on which lives depended.",
    finances:
      "Her family made sacrifices for education, and Johnson first worked as a teacher before NACA offered a route into mathematical research.",
    personalLife:
      "She married James Goble, who died in 1956, and later married James Johnson. She raised three daughters while building a demanding technical career.",
    influences:
      "Claytor's mentoring, her mother's teaching background, the discipline of Black educational institutions and the practical urgency of spaceflight all shaped her work.",
    booksRead:
      "Her reading centred on analytic geometry, trigonometry, orbital mechanics, numerical methods and technical reports rather than a single famous textbook.",
    teachersAndMentors:
      "W. W. Schieffelin Claytor was decisive, recognizing that she needed advanced mathematical preparation beyond the standard curriculum.",
    stories: [
      "Johnson repeatedly asked to attend engineering briefings until she was included.",
      "John Glenn's request that she check the computer made her accuracy part of NASA legend.",
      "Her work was long known inside NASA before Hidden Figures brought broad public recognition.",
    ],
  },
  turningPoints: [
    "Her family's move for schooling turned ability into opportunity.",
    "Claytor's advanced teaching prepared her for research mathematics.",
    "NACA hiring opened a path from teaching into aerospace calculation.",
    "She moved from computing assigned calculations to authoring and checking trajectory analysis.",
    "The Glenn verification made human mathematical trust visible in the digital-computer age.",
  ],
  failures: [
    "Johnson's work was under-recognized publicly for decades because race, gender and classified institutional culture hid many contributions.",
    "Early electronic computers were not automatically trusted, so human and machine calculations had to be reconciled carefully.",
    "The phrase 'human computer' can make the role sound mechanical, but much of Johnson's work required judgement and mathematical modelling.",
  ],
  studentLessons: [
    "Precision is a moral responsibility when calculations affect human safety.",
    "Ask to enter the room where decisions are made.",
    "Mathematics becomes powerful when it is tied to real constraints: gravity, fuel, timing, drag and landing zones.",
    "Hidden labour is still scientific labour.",
  ],
  discoveries: [
    {
      name: "Crewed-spaceflight trajectory calculation",
      period: "1950s-1960s",
      background: "NASA needed accurate paths for launch, orbit, re-entry and recovery before digital systems were fully trusted.",
      problem: "How can a spacecraft be placed into orbit and brought back to a planned region safely?",
      method: "Johnson used analytic geometry, coordinate transformations, orbital mechanics and numerical checking.",
      discovery: "Her calculations helped define reliable trajectory procedures for Mercury and Apollo-era missions.",
      importance: "They made mathematical verification part of human spaceflight safety.",
      modernApplications: ["Space mission design", "Satellite tracking", "Re-entry planning", "Navigation software verification"],
    },
    {
      name: "Human verification of machine computation",
      period: "1960s",
      background: "Electronic computers were powerful but still new, and astronauts wanted confidence in their outputs.",
      problem: "How could teams trust machine-calculated trajectories for crewed flight?",
      method: "Johnson independently checked calculations and compared mathematical results with machine output.",
      discovery: "Human expertise and digital computation could be combined into a verification workflow.",
      importance: "This remains central to safety-critical engineering.",
      modernApplications: ["Aerospace validation", "Software testing", "Independent verification", "Mission assurance"],
    },
  ],
  works: [
    { title: "Determination of Azimuth Angle at Burnout for Placing a Satellite Over a Selected Earth Position", year: "1960", kind: "Paper", description: "A technical report coauthored with T. H. Skopinski; Johnson was one of the first women in her division credited as author." },
    { title: "Mercury trajectory calculations", year: "1961-1962", kind: "Project", description: "Trajectory work for Shepard and Glenn missions." },
    { title: "Apollo lunar mission calculations", year: "1960s", kind: "Project", description: "Mathematical support for lunar navigation and mission planning." },
  ],
  equations: [
    {
      name: "Circular orbital speed",
      latex: "v=\\sqrt{\\frac{GM}{r}}",
      explanation: "A simplified circular-orbit speed follows from balancing gravity with centripetal motion.",
      variables: [{ symbol: "G", meaning: "gravitational constant" }, { symbol: "M", meaning: "Earth mass" }, { symbol: "r", meaning: "orbital radius from Earth's centre" }],
      workedExample: { problem: "Estimate speed for r=6.78 x 10^6 m using GM=3.986 x 10^14 m^3/s^2.", steps: [{ text: "Substitute.", latex: "v=\\sqrt{\\frac{3.986\\times10^{14}}{6.78\\times10^6}}" }, { text: "Evaluate.", latex: "v\\approx7.67\\times10^3\\text{ m/s}" }], answer: "About 7.7 km/s." },
      modernUse: "Used as a first estimate in orbital mechanics.",
    },
    {
      name: "Range without air resistance",
      latex: "R=\\frac{v^2\\sin2\\theta}{g}",
      explanation: "A simplified projectile formula illustrates how angle and speed affect landing point.",
      variables: [{ symbol: "R", meaning: "range" }, { symbol: "v", meaning: "initial speed" }, { symbol: "\\theta", meaning: "launch angle" }, { symbol: "g", meaning: "gravitational acceleration" }],
      workedExample: { problem: "If v=100 m/s and theta=45 degrees, estimate range.", steps: [{ text: "Since sin 90 degrees is 1.", latex: "R=\\frac{100^2}{9.8}" }, { text: "Calculate.", latex: "R\\approx1020\\text{ m}" }], answer: "About 1.0 km in this simplified model." },
      modernUse: "Real spacecraft calculations add drag, rotation, changing gravity and guidance.",
    },
  ],
  connections: [
    { field: "Mathematics", description: "Johnson used analytic geometry, trigonometry and numerical checking." },
    { field: "Physics", description: "Her work applied gravitation, motion and re-entry dynamics." },
    { field: "Engineering", description: "Trajectory mathematics became mission engineering." },
    { field: "Computer Science", description: "Her work bridged human calculation and electronic computation." },
  ],
  historicalContext: {
    worldEvents: "Johnson worked during the Cold War space race and the American civil-rights era.",
    politics: "Segregation and federal desegregation shaped her workplace and recognition.",
    universities: "Historically Black colleges trained mathematicians excluded elsewhere.",
    scientificCommunity: "NASA's achievements depended on teams of engineers, computers, programmers and mathematicians.",
    technology: "Slide rules, mechanical calculators, IBM computers, tracking networks and telemetry all supported mission calculation.",
  },
  backlash: [
    { type: "Racism", title: "Segregated computing units", description: "Johnson entered NACA through segregated structures for Black women mathematicians.", status: "Verified" },
    { type: "Gender bias", title: "Women computers under-credited", description: "Women often performed mission-critical technical work without equal status or recognition.", status: "Verified" },
    { type: "Public criticism", title: "Delayed recognition", description: "Her public fame came decades after the work itself.", status: "Verified" },
  ],
  challengesDetailed: [
    { category: "Social", description: "Segregation shaped education and employment." },
    { category: "Gender", description: "Technical briefings and authorship were not automatically open to women." },
    { category: "Professional", description: "She had to earn trust in high-pressure aerospace teams." },
    { category: "Scientific", description: "Trajectory calculations had little tolerance for error." },
  ],
  achievements: [
    { title: "NASA technical authorship", year: "1960", description: "Coauthored a major trajectory report." },
    { title: "Presidential Medal of Freedom", year: "2015", description: "Recognized for spaceflight mathematics and national service." },
    { title: "Congressional Gold Medal", year: "2019", description: "Honoured with fellow Hidden Figures contributors." },
    { title: "NASA facility named for her", year: "2017", description: "NASA named the Katherine Johnson Computational Research Facility at Langley." },
  ],
  funFacts: ["She graduated college at eighteen.", "She loved counting as a child.", "John Glenn specifically asked for her verification.", "She lived to age 101."],
  didYouKnow: [
    { title: "The room mattered", content: "Johnson pushed to attend technical meetings because calculation without context was not enough." },
    { title: "Computers needed checking", content: "Early digital computers were powerful but still required expert validation." },
    { title: "Hidden Figures was late recognition", content: "The public story arrived long after NASA colleagues knew her value." },
  ],
  visualPrompts: [
    { category: "Hero portrait", prompt: "Katherine Johnson at a NASA desk with trajectory diagrams, chalkboard equations and early computer printouts, respectful 1960s documentary style." },
    { category: "Scientific diagram", prompt: "Clean diagram of launch, orbit, re-entry and splashdown trajectory around Earth with labelled vectors." },
    { category: "Timeline infographic", prompt: "Katherine Johnson timeline from West Virginia schooling to NACA, Mercury, Apollo and Presidential Medal of Freedom." },
  ],
  photoPlaceholders: [
    { slot: "Portrait", caption: "Portrait of Katherine Johnson at NASA.", suggestedSource: "Wikimedia Commons: Katherine Johnson 1983.jpg" },
    { slot: "Laboratory", caption: "NASA Langley computing workspace or research room.", suggestedSource: "NASA Image and Video Library" },
    { slot: "Notebooks", caption: "Trajectory worksheets, reports or mission calculation pages.", suggestedSource: "NASA archives" },
    { slot: "Historic location", caption: "Katherine Johnson Computational Research Facility or Langley Research Center.", suggestedSource: "NASA / Wikimedia Commons" },
  ],
  relatedScientists: [
    { slug: "alan-turing", name: "Alan Turing", reason: "Both worked at the boundary between human calculation and machine computation." },
    { slug: "isaac-newton", name: "Isaac Newton", reason: "Orbital mechanics rests on Newtonian gravitation." },
    { slug: "emmy-noether", name: "Emmy Noether", reason: "Both show how abstract mathematics powers modern physics." },
  ],
  relatedTopics: [
    { title: "Projectile Motion", href: "/subjects/physics/projectile-motion", description: "Launch and re-entry calculations extend projectile reasoning." },
    { title: "Newton's Law of Gravitation", href: "/subjects/physics/newtons-law-of-gravitation", description: "Orbital motion depends on gravitation." },
    { title: "Coordinate Geometry", href: "/subjects/mathematics/the-cartesian-plane", description: "Trajectory work uses coordinates and transformations." },
  ],
  quotes: [
    { text: "We wrote our own textbook, because there was no other text about space.", source: "NASA oral-history recollections", status: "Verified" },
    { text: "I counted everything.", source: "NASA biography and interviews", status: "Verified" },
    { text: "Girls are capable of doing everything men are capable of doing.", source: "Commonly quoted Johnson interview statement", status: "Verified" },
  ],
  quiz: {
    mcq: [
      { question: "What was Katherine Johnson known for at NASA?", options: ["Trajectory calculations", "Penicillin purification", "Radioactivity", "X-ray crystallography"], answer: 0, explanation: "She calculated and checked spacecraft trajectories." },
      { question: "Which astronaut asked for her verification?", options: ["John Glenn", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard only"], answer: 0, explanation: "Glenn asked for Johnson to check the computer." },
      { question: "What social barriers shaped her career?", options: ["Racism and gender bias", "Only medieval censorship", "No mathematics existed", "No space race"], answer: 0, explanation: "She worked through segregation and sexism." },
    ],
    trueFalse: [
      { statement: "Johnson's work connected mathematics to astronaut safety.", answer: true, explanation: "Trajectory accuracy was mission-critical." },
      { statement: "Johnson worked only after electronic computers disappeared.", answer: false, explanation: "She worked during the transition to digital computers." },
      { statement: "She received the Presidential Medal of Freedom.", answer: true, explanation: "She received it in 2015." },
    ],
    shortAnswer: [
      { question: "Why did Johnson's family move during her childhood?", modelAnswer: "They moved so she and her siblings could continue schooling beyond the grades available to Black children locally.", marks: 4 },
      { question: "Why did Glenn's request matter?", modelAnswer: "It showed the trust placed in Johnson's mathematical judgement at a time when electronic computers were still being validated.", marks: 5 },
    ],
    longAnswer: [
      { question: "Explain Johnson's contribution to spaceflight.", modelAnswer: "Johnson applied analytic geometry and orbital mechanics to launch, orbit and re-entry problems. Her work helped calculate where spacecraft would go and where they would return. Because early digital computers were new, her human verification gave engineers and astronauts confidence. Her career also reveals the hidden labour of Black women mathematicians in major technological achievements.", marks: 12 },
    ],
  },
};
