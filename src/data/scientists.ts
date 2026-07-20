export type ScientistImage = {
  fileName: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
  objectPosition?: string;
};

export type ScientistSource = {
  label: string;
  url: string;
  publisher: string;
};

export type ScientistContribution = {
  title: string;
  period: string;
  description: string;
};

export type Scientist = {
  rank: number;
  slug: string;
  fullName: string;
  life: string;
  birthplace: string;
  primaryFields: string[];
  headline: string;
  overview: string[];
  knownFor: string[];
  earlyLife: string[];
  inspiration: string[];
  challenges: string[];
  lawsAndIdeas: string[];
  contributions: ScientistContribution[];
  definingWork: {
    title: string;
    date: string;
    description: string;
    significance: string;
  };
  artifact: {
    title: string;
    date: string;
    kind: "Original" | "Historic document" | "Historic apparatus" | "Replica";
    description: string;
    significance: string;
    image: ScientistImage;
  };
  legacy: string[];
  portrait: ScientistImage;
  sources: ScientistSource[];
};

export function commonsImageUrl(fileName: string, width = 1600) {
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=${width}`;
}

export const SCIENTISTS: readonly Scientist[] = [
  {
    rank: 1,
    slug: "isaac-newton",
    fullName: "Sir Isaac Newton",
    life: "1642/43–1727",
    birthplace: "Woolsthorpe, Lincolnshire, England",
    primaryFields: ["Physics", "Mathematics", "Astronomy", "Optics"],
    headline: "The architect of classical mechanics and universal gravitation.",
    overview: [
      "Isaac Newton unified terrestrial and celestial motion under the same mathematical laws. His three laws of motion and law of universal gravitation gave scientists a predictive framework for falling bodies, projectiles, tides, planetary orbits and comets.",
      "He also made foundational contributions to calculus, studied the composition of white light and built a practical reflecting telescope. His work did not appear from nowhere: it drew on Galileo, Kepler, Descartes, Hooke and others, but Newton's synthesis was exceptionally powerful and durable.",
    ],
    knownFor: [
      "Three laws of motion",
      "Universal gravitation",
      "Development of calculus",
      "Experimental optics and the colour spectrum",
      "Newtonian reflecting telescope",
    ],
    earlyLife: [
      "Newton was born prematurely at Woolsthorpe during the English Civil War, after his father had died. His childhood was unsettled: his mother remarried and left him for several years with his grandmother, a separation that later biographers often connect with his intense independence and guarded personality. At school in Grantham he showed skill with mechanical models, sundials and notebooks before entering Trinity College, Cambridge.",
      "When plague closed Cambridge in 1665–1666, Newton returned to Woolsthorpe. This period, often called his annus mirabilis, gave him quiet time to think about motion, light, infinite series and gravity without the normal university routine.",
    ],
    inspiration: [
      "Newton was inspired by the mathematical astronomy of Kepler, Galileo's work on motion, Descartes' analytical geometry and debates with contemporaries such as Robert Hooke and Edmond Halley. Halley's encouragement was especially important: after discussing planetary motion with Newton, Halley persuaded him to write and publish the Principia.",
      "His approach was to search for universal rules. Instead of treating falling apples, thrown stones and orbiting planets as separate mysteries, he asked whether one mathematical law could connect them.",
    ],
    challenges: [
      "Newton worked in a politically and religiously tense England shaped by civil war, restoration politics and university orthodoxy. He also guarded many results for years, partly because scientific priority disputes were common and sometimes bitter.",
      "He faced major conflicts over credit, especially with Hooke regarding gravitation and with Leibniz over calculus. These disputes did not stop his work, but they shaped how carefully and sometimes aggressively he defended his discoveries.",
    ],
    lawsAndIdeas: [
      "Newton's First Law: a body remains at rest or continues in uniform straight-line motion unless acted on by a net external force. This is the law of inertia.",
      "Newton's Second Law: the net force on a body equals the rate of change of its momentum; for constant mass this is written F = ma.",
      "Newton's Third Law: for every action there is an equal and opposite reaction, meaning interacting bodies exert forces on each other in pairs.",
      "Law of Universal Gravitation: every mass attracts every other mass with a force proportional to the product of their masses and inversely proportional to the square of the distance between their centres: F = Gm1m2/r².",
    ],
    contributions: [
      {
        title: "Laws of motion",
        period: "Published 1687",
        description:
          "Newton formalised inertia, the relation between net force and change of motion, and action–reaction pairs. These principles became the foundation of classical mechanics.",
      },
      {
        title: "Universal gravitation",
        period: "Developed in the 1660s–1680s",
        description:
          "He argued that the force drawing an apple toward Earth and the force keeping the Moon in orbit were manifestations of the same inverse-square attraction.",
      },
      {
        title: "Optics",
        period: "Experiments from the 1660s; Opticks published 1704",
        description:
          "Prism experiments showed that white light contains a spectrum of colours and that a second prism could recombine them, challenging the idea that prisms created colour.",
      },
    ],
    definingWork: {
      title: "Philosophiæ Naturalis Principia Mathematica",
      date: "1687",
      description:
        "Usually called the Principia, this book expressed motion and gravitation mathematically and demonstrated how the same laws explain phenomena on Earth and in the heavens.",
      significance:
        "It established a model of mathematical physics in which a small set of general laws could generate precise, testable predictions.",
    },
    artifact: {
      title: "Newton's reflecting telescope",
      date: "Original design, 1668; pictured replica",
      kind: "Replica",
      description:
        "Newton replaced the large objective lens of a refracting telescope with a concave mirror. This reduced chromatic aberration and produced a compact instrument with substantial magnification.",
      significance:
        "The Newtonian reflector became one of the principal telescope designs and remains common in amateur and professional astronomy.",
      image: {
        fileName: "Newton telescope replica 1668.jpg",
        alt: "Replica of Isaac Newton's first reflecting telescope",
        credit: "Science Museum Group",
        license: "CC BY 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Newton_telescope_replica_1668.jpg",
      },
    },
    legacy: [
      "Classical mechanics still accurately describes most everyday engineering and astronomical problems where speeds are far below the speed of light and quantum effects are negligible.",
      "Newton's calculus and mathematical methods became essential tools throughout science and engineering.",
      "Modern physics revised rather than erased Newton: relativity and quantum theory show the boundaries of his framework while recovering it as an excellent approximation in its proper domain.",
    ],
    portrait: {
      fileName: "Portrait of Sir Isaac Newton, 1689.jpg",
      alt: "Portrait of Sir Isaac Newton painted in 1689",
      credit: "Godfrey Kneller / National Portrait Gallery",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg",
      objectPosition: "50% 25%",
    },
    sources: [
      {
        label: "Isaac Newton and the Principia",
        url: "https://explore.trin.cam.ac.uk/assets/isaac-newton-by-roubiliac/",
        publisher: "Trinity College, Cambridge",
      },
      {
        label: "Newton's reflecting telescope archive",
        url: "https://makingscience.royalsociety.org/people/na8414/isaac-newton",
        publisher: "The Royal Society",
      },
      {
        label: "Newton papers on gravitation",
        url: "https://cudl.lib.cam.ac.uk/view/MS-ADD-03958",
        publisher: "Cambridge Digital Library",
      },
    ],
  },
  {
    rank: 2,
    slug: "albert-einstein",
    fullName: "Albert Einstein",
    life: "1879–1955",
    birthplace: "Ulm, German Empire",
    primaryFields: ["Theoretical Physics", "Relativity", "Quantum Theory"],
    headline: "He transformed our understanding of space, time, light and gravity.",
    overview: [
      "Albert Einstein reshaped twentieth-century physics through a series of conceptual breakthroughs. In 1905 he explained Brownian motion, proposed light quanta to account for the photoelectric effect, formulated special relativity and derived mass–energy equivalence.",
      "A decade later, general relativity described gravity not as a conventional force but as the curvature of spacetime produced by matter and energy. Einstein also contributed to statistical physics and quantum theory, even while challenging parts of quantum mechanics' later interpretation.",
    ],
    knownFor: [
      "Special relativity",
      "General relativity",
      "Mass–energy equivalence",
      "Light quanta and the photoelectric effect",
      "Explanation of Brownian motion",
    ],
    earlyLife: [
      "Einstein grew up in a secular Jewish family in the German Empire and later Switzerland. He was curious about invisible forces from a young age; he later recalled being fascinated by a compass because something unseen made the needle move. He disliked rigid schooling but loved independent reading in mathematics and physics.",
      "Before becoming famous he worked at the Swiss patent office in Bern. The job exposed him to practical questions about clocks, signals and electrical devices, while giving him time outside work to think deeply about light, time and motion.",
    ],
    inspiration: [
      "Einstein was inspired by Maxwell's electromagnetism, thought experiments about chasing a beam of light, and the problem of making mechanics consistent with the constant speed of light. His work shows how imagination and strict logic can work together.",
      "His motivation was not only to calculate but to remove contradictions. When existing physics gave conflicting answers, he looked for simpler principles beneath them.",
    ],
    challenges: [
      "Einstein faced anti-Semitism, exile from Nazi Germany and political pressure because of his public views. He left Europe permanently after the Nazis came to power and later warned about the danger of nuclear weapons even though his own equation helped reveal the energy stored in mass.",
      "Scientifically, relativity initially seemed strange because it challenged everyday ideas of absolute time and space. Acceptance required careful experiments and astronomical observations.",
    ],
    lawsAndIdeas: [
      "Special relativity: the laws of physics are the same in all inertial frames and the speed of light in vacuum is constant for all observers.",
      "Mass-energy equivalence: E = mc² shows that mass and energy are two forms of the same physical quantity.",
      "General relativity: gravity is described by the curvature of spacetime caused by matter and energy, not merely by an invisible pulling force.",
      "Photoelectric effect: light can behave as packets of energy, later called photons, explaining why electrons are emitted only above a threshold frequency.",
    ],
    contributions: [
      {
        title: "Light quanta",
        period: "1905",
        description:
          "Einstein proposed that light energy is exchanged in discrete packets whose energy depends on frequency. This explained the threshold behaviour of the photoelectric effect.",
      },
      {
        title: "Special relativity",
        period: "1905",
        description:
          "Starting from the constancy of the speed of light and equivalence of inertial frames, he showed that measurements of time and length depend on relative motion.",
      },
      {
        title: "General relativity",
        period: "Completed 1915",
        description:
          "Einstein connected gravity with curved spacetime. The theory predicted effects including the bending of light, gravitational time dilation and gravitational waves.",
      },
    ],
    definingWork: {
      title: "The 1905 annus mirabilis papers and the 1915 field equations",
      date: "1905–1915",
      description:
        "Rather than one isolated discovery, Einstein's defining achievement was a sequence of papers that connected thermodynamics, electromagnetism, light, motion and gravitation through new physical principles.",
      significance:
        "Relativity underlies modern cosmology, black-hole physics, gravitational-wave astronomy and practical technologies such as satellite navigation, whose clocks require relativistic corrections.",
    },
    artifact: {
      title: "General relativity manuscript",
      date: "1915–1916",
      kind: "Historic document",
      description:
        "The surviving manuscript pages document Einstein's formulation of general relativity, showing the mathematical language used to connect spacetime geometry with matter and energy.",
      significance:
        "This theory replaced Newtonian gravity as the more general description of gravitation while reproducing Newton's results in ordinary conditions.",
      image: {
        fileName: "GeneralRelativityTheoryManuscript.jpg",
        alt: "First page of Albert Einstein's general relativity manuscript",
        credit: "Albert Einstein",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:GeneralRelativityTheoryManuscript.jpg",
      },
    },
    legacy: [
      "The photoelectric effect became foundational to quantum physics and to light-sensitive technologies.",
      "General relativity predicted black holes, expanding-universe models and gravitational waves long before direct observational confirmation.",
      "Einstein's work remains a model of how thought experiments, mathematical consistency and experimental evidence can jointly reshape science.",
    ],
    portrait: {
      fileName: "Albert Einstein 1921 by F Schmutzer.jpg",
      alt: "Albert Einstein during a lecture in Vienna in 1921",
      credit: "Ferdinand Schmutzer / Austrian National Library",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Albert_Einstein_1921_by_F_Schmutzer.jpg",
      objectPosition: "50% 20%",
    },
    sources: [
      {
        label: "Albert Einstein — facts and scientific work",
        url: "https://www.nobelprize.org/prizes/physics/1921/einstein/facts/",
        publisher: "Nobel Prize",
      },
      {
        label: "The Nobel Prize in Physics 1921",
        url: "https://www.nobelprize.org/prizes/physics/1921/summary/",
        publisher: "Nobel Prize",
      },
      {
        label: "Einstein's explanation of light quanta",
        url: "https://www.nobelprize.org/prizes/physics/1921/einstein/questions-and-answers/",
        publisher: "Nobel Prize",
      },
    ],
  },
  {
    rank: 3,
    slug: "thomas-edison",
    fullName: "Thomas Alva Edison",
    life: "1847–1931",
    birthplace: "Milan, Ohio, United States",
    primaryFields: ["Invention", "Electrical Engineering", "Industrial Research"],
    headline: "He built systems, laboratories and industries around practical invention.",
    overview: [
      "Thomas Edison was an inventor and industrial research organiser whose teams developed commercially successful systems for sound recording, electric lighting, power distribution, motion pictures and batteries.",
      "Edison did not invent the first incandescent lamp. His major achievement was developing a durable high-resistance lamp together with generators, wiring, switches, meters and a business system capable of delivering electric lighting at scale. His Menlo Park laboratory also helped establish the model of organised research and development.",
    ],
    knownFor: [
      "Practical incandescent lighting system",
      "Phonograph",
      "Electric power distribution",
      "Motion-picture technology",
      "Industrial research laboratory model",
    ],
    earlyLife: [
      "Edison grew up in Ohio and Michigan and had limited formal schooling. His mother encouraged his reading and experiments after teachers judged him difficult to teach. As a teenager he sold newspapers and worked as a telegraph operator, learning electricity through practical work rather than university training.",
      "His early deafness changed the way he worked; he later said it helped him concentrate in noisy environments, although it also isolated him socially.",
    ],
    inspiration: [
      "Edison was driven by useful invention and mass production. He wanted discoveries to become practical systems that people could buy, install and maintain, not just laboratory demonstrations.",
      "Telegraphy inspired much of his early thinking because it combined electricity, communication, business demand and fast technical improvement.",
    ],
    challenges: [
      "Edison worked in the intense industrial competition of the late nineteenth century. The 'war of currents' placed his direct-current system against alternating-current systems promoted by Westinghouse and Tesla, creating technical and public-relations battles.",
      "Many Edison inventions were team efforts in his laboratories. His fame sometimes hides the work of assistants, machinists and engineers, which is an important lesson about industrial science.",
    ],
    lawsAndIdeas: [
      "Edison is best understood through invention systems rather than a single scientific law: a practical lamp, generator, wiring network, switches, meters and business model had to function together.",
      "Key idea: an invention becomes powerful when it is reliable, affordable and connected to infrastructure.",
      "Phonograph principle: sound vibrations can be mechanically recorded and reproduced.",
      "Electric-lighting principle: a high-resistance filament in a controlled bulb can convert electrical energy into useful light for long periods.",
    ],
    contributions: [
      {
        title: "Recorded sound",
        period: "1877",
        description:
          "Edison's phonograph was the first device to record and reproduce sound successfully, opening a new technological and cultural field.",
      },
      {
        title: "Electric lighting as a system",
        period: "1879–1882",
        description:
          "His laboratory improved the lamp and created the surrounding infrastructure required for reliable central-station electric lighting.",
      },
      {
        title: "Research and development organisation",
        period: "From 1876",
        description:
          "Menlo Park assembled machinists, chemists, draftsmen and experimenters in a purpose-built facility, helping define the modern industrial laboratory.",
      },
    ],
    definingWork: {
      title: "The Menlo Park electric-light system",
      date: "1879–1882",
      description:
        "Edison and his collaborators treated lighting as a complete technical and commercial network rather than as a bulb alone. They developed generation, distribution, protection, switching and metering alongside the lamp.",
      significance:
        "This systems approach made indoor electric lighting practical and helped launch the modern electric-utility industry.",
    },
    artifact: {
      title: "Original Edison carbon-filament bulb",
      date: "1879",
      kind: "Original",
      description:
        "This surviving lamp represents Edison's long-duration carbon-filament experiments at Menlo Park. Earlier inventors had produced incandescent lamps, but reliability, resistance, vacuum quality and the surrounding power system were decisive.",
      significance:
        "The lamp is best understood as one component in a larger engineered network that converted an experimental effect into a widely usable service.",
      image: {
        fileName: "Edison Carbon Bulb.jpg",
        alt: "An original Edison carbon-filament light bulb from 1879",
        credit: "Terren",
        license: "CC BY 2.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Edison_Carbon_Bulb.jpg",
      },
    },
    legacy: [
      "Edison demonstrated the importance of integrating invention, manufacturing, finance and infrastructure.",
      "His 1,093 United States patents covered many fields, although the work was often collaborative and depended on skilled laboratory staff.",
      "The industrial laboratory model became central to twentieth-century technological development.",
    ],
    portrait: {
      fileName: "Thomas Alva Edison, 1847-1931 LCCN2002706622.jpg",
      alt: "Portrait of Thomas Alva Edison in 1913",
      credit: "Library of Congress",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Thomas_Alva_Edison,_1847-1931_LCCN2002706622.jpg",
      objectPosition: "50% 20%",
    },
    sources: [
      {
        label: "Edison biography and laboratory system",
        url: "https://www.nps.gov/edis/learn/historyculture/edison-biography.htm",
        publisher: "U.S. National Park Service",
      },
      {
        label: "What Edison did and did not invent",
        url: "https://www.nps.gov/edis/faqs.htm",
        publisher: "U.S. National Park Service",
      },
      {
        label: "Edison light bulb used in the 1879 demonstration",
        url: "https://www.si.edu/collections/snapshot/edison-light-bulb",
        publisher: "Smithsonian Institution",
      },
    ],
  },
  {
    rank: 4,
    slug: "nikola-tesla",
    fullName: "Nikola Tesla",
    life: "1856–1943",
    birthplace: "Smiljan, Austrian Empire (now Croatia)",
    primaryFields: ["Electrical Engineering", "Electromagnetism", "Invention"],
    headline: "A pioneer of polyphase alternating-current power and rotating magnetic fields.",
    overview: [
      "Nikola Tesla developed a practical polyphase alternating-current system, including motors that used rotating magnetic fields. These inventions helped make efficient long-distance transmission and flexible electric power distribution possible.",
      "Tesla also worked on high-frequency currents, resonant transformers, radio control and wireless communication. Popular accounts often attribute every AC technology to him, but electrical systems were the product of many inventors, scientists and industrial teams. Tesla's distinctive contribution was a powerful set of patents and demonstrations centred on polyphase power.",
    ],
    knownFor: [
      "Polyphase alternating-current system",
      "Induction motor",
      "Rotating magnetic field",
      "Tesla coil",
      "Early radio-control demonstrations",
    ],
    earlyLife: [
      "Tesla was born in Smiljan in the Austrian Empire, in a Serbian family. His father was a priest and his mother was known for mechanical ingenuity in household tools, which Tesla later credited as an influence. He studied engineering and developed an extraordinary ability to visualise machines mentally before building them.",
      "Illness, financial pressure and interrupted studies marked his early adulthood. He worked in telegraphy and electrical engineering in Europe before moving to the United States in 1884.",
    ],
    inspiration: [
      "Tesla was inspired by the rotating magnetic field and the possibility of transmitting power efficiently over long distances. He disliked inefficient commutator motors and imagined a smoother alternating-current system.",
      "His working style relied heavily on mental simulation: he claimed he could run a machine in his imagination, observe wear and correct the design before making a prototype.",
    ],
    challenges: [
      "Tesla faced business setbacks, patent conflicts and rivalry in the electrical industry. His partnership with Westinghouse helped AC power succeed, but later projects such as wireless power at Wardenclyffe lost funding.",
      "Public fascination with Tesla sometimes exaggerates his achievements, but the real historical Tesla was already remarkable: he combined brilliant engineering with poor business luck and periods of isolation.",
    ],
    lawsAndIdeas: [
      "Rotating magnetic field: properly phased alternating currents can create a magnetic field that rotates and drives an induction motor.",
      "AC power transmission: alternating voltage can be stepped up or down with transformers, making long-distance power distribution practical.",
      "Induction motor principle: current induced in a rotor by a changing magnetic field produces torque without direct electrical contact.",
      "Tesla coil: resonant transformers can generate very high voltages and high-frequency currents for experiments in lighting, radio and electrical discharge.",
    ],
    contributions: [
      {
        title: "Induction motor",
        period: "Patented 1887–1888",
        description:
          "Tesla's motor used phased alternating currents to create a rotating magnetic field, eliminating the commutator and brushes required by many earlier motor designs.",
      },
      {
        title: "Polyphase power",
        period: "Late 1880s–1890s",
        description:
          "His patents formed an important part of the Westinghouse AC system and were used in the development of large-scale generation and transmission.",
      },
      {
        title: "High-frequency experiments",
        period: "1890s",
        description:
          "The Tesla coil enabled spectacular high-voltage demonstrations and became useful in early radio, medical and laboratory technologies.",
      },
    ],
    definingWork: {
      title: "The polyphase AC induction-motor patents",
      date: "1887–1888",
      description:
        "Tesla described motors and transmission arrangements in which alternating currents out of phase with one another generated a rotating magnetic field.",
      significance:
        "The design enabled robust brushless motors and helped establish the architecture of modern alternating-current power systems.",
    },
    artifact: {
      title: "Tesla induction-motor patent model",
      date: "1887–1888 design",
      kind: "Historic apparatus",
      description:
        "This working model demonstrates the rotating magnetic field at the centre of Tesla's induction-motor concept. Two phased currents energise coils around the rotor.",
      significance:
        "Induction motors remain among the world's most widely used electrical machines, powering pumps, fans, compressors, appliances and industrial equipment.",
      image: {
        fileName: "Moteur à induction.jpg",
        alt: "Working model of Nikola Tesla's induction motor",
        credit: "Romain Ramier",
        license: "CC BY-SA 3.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Moteur_%C3%A0_induction.jpg",
      },
    },
    legacy: [
      "Polyphase AC remains fundamental to generation, transmission and industrial motor systems.",
      "Tesla's high-frequency work influenced radio engineering and the study of resonance.",
      "His career also illustrates the gap that can exist between inventive brilliance, commercial success and later public mythology.",
    ],
    portrait: {
      fileName: "Tesla circa 1890.jpeg",
      alt: "Portrait of Nikola Tesla around 1890",
      credit: "Napoleon Sarony / Nikola Tesla Museum",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tesla_circa_1890.jpeg",
      objectPosition: "50% 20%",
    },
    sources: [
      {
        label: "Tesla's alternating-current motor",
        url: "https://www.si.edu/object/electric-motor-alternating-current%3Anmah_739995",
        publisher: "Smithsonian Institution",
      },
      {
        label: "First commercial Tesla AC motor",
        url: "https://americanhistory.si.edu/collections/object/nmah_713594",
        publisher: "National Museum of American History",
      },
      {
        label: "Tesla papers and electrical work",
        url: "https://sova.si.edu/record/nmah.ac.0047",
        publisher: "Smithsonian Institution Archives",
      },
    ],
  },
  {
    rank: 5,
    slug: "marie-curie",
    fullName: "Marie Skłodowska Curie",
    life: "1867–1934",
    birthplace: "Warsaw, Russian Empire (now Poland)",
    primaryFields: ["Physics", "Chemistry", "Radioactivity"],
    headline: "She created a quantitative science of radioactivity and isolated new elements.",
    overview: [
      "Marie Curie made radioactivity a systematic field of research. Working with Pierre Curie, she measured the ionising activity of minerals, concluded that unusually active pitchblende contained unknown substances and discovered polonium and radium.",
      "She became the first woman awarded a Nobel Prize and the first person awarded Nobel Prizes in two different scientific fields. During the First World War she also helped organise mobile X-ray services for medical diagnosis.",
    ],
    knownFor: [
      "Research on radioactivity",
      "Discovery of polonium and radium",
      "Isolation and measurement of radioactive materials",
      "Nobel Prizes in Physics and Chemistry",
      "Mobile wartime radiography units",
    ],
    earlyLife: [
      "Maria Skłodowska grew up in Warsaw under Russian imperial rule, where Polish language and higher education were restricted. Her family valued learning, but women had limited access to universities, so she studied in informal underground classes before moving to Paris.",
      "In Paris she lived frugally while studying physics and mathematics at the Sorbonne. Her early hardship shaped her discipline and commitment to research.",
    ],
    inspiration: [
      "Curie was inspired by Henri Becquerel's discovery that uranium emitted mysterious rays. She asked whether the radiation was a property of atoms themselves, a question that opened a new field.",
      "Working with Pierre Curie, she pursued measurements patiently, treating tiny electrical effects as clues to hidden substances.",
    ],
    challenges: [
      "Curie faced sexism in education, science and public life. As a Polish woman in France, she had to earn recognition in institutions that were not designed to welcome her.",
      "The political situation in partitioned Poland shaped her identity; she named polonium after Poland. She also worked before the dangers of radiation were fully understood, suffering long-term exposure.",
    ],
    lawsAndIdeas: [
      "Radioactivity: Curie helped establish that radiation could come from atomic structure rather than chemical reactions.",
      "Isolation of polonium and radium: she showed that pitchblende contained unknown highly radioactive elements.",
      "Quantitative measurement: careful electrometer measurements allowed radioactivity to be compared scientifically.",
      "Medical radiology: during World War I she helped organise mobile X-ray units for battlefield medicine.",
    ],
    contributions: [
      {
        title: "Quantitative radioactivity research",
        period: "From 1897",
        description:
          "Curie used sensitive electrical measurements to compare samples and showed that radioactivity was linked to atoms rather than molecular arrangement.",
      },
      {
        title: "Polonium and radium",
        period: "1898",
        description:
          "The Curies announced two previously unknown elements after separating increasingly radioactive fractions from pitchblende ore.",
      },
      {
        title: "Medical radiography",
        period: "1914–1918",
        description:
          "Curie helped create mobile and fixed X-ray units and trained operators, improving the location of bullets and fractures in wounded soldiers.",
      },
    ],
    definingWork: {
      title: "Research on radioactive substances",
      date: "1897–1911",
      description:
        "Curie's programme combined careful electrical measurement, chemical separation and persistent processing of large quantities of ore to identify and characterise radioactive elements.",
      significance:
        "Her work transformed atomic physics and chemistry, leading toward nuclear science, radiation medicine and a deeper understanding of atomic structure.",
    },
    artifact: {
      title: "Curie ionisation-measurement apparatus",
      date: "Late 1890s",
      kind: "Historic apparatus",
      description:
        "The pictured laboratory setup used piezoelectric and electrometric methods to measure tiny currents caused by ionisation. Those measurements allowed the Curies to compare the activity of mineral samples quantitatively.",
      significance:
        "The instrument demonstrates that the discovery of radium depended not only on chemical separation but also on exceptionally sensitive measurement.",
      image: {
        fileName: "Pierre and Marie Curie.jpg",
        alt: "Pierre and Marie Curie demonstrating apparatus for measuring radioactivity",
        credit: "Unknown photographer",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg",
      },
    },
    legacy: [
      "Curie's methods helped establish nuclear physics and radiochemistry.",
      "Her work enabled later medical uses of radiation, while her own exposure also illustrates the serious hazards that were not yet understood.",
      "She opened institutional paths for women in science while insisting on rigorous experimental standards rather than symbolic recognition alone.",
    ],
    portrait: {
      fileName: "Marie Curie 1903.jpg",
      alt: "Portrait of Marie Curie in 1903",
      credit: "Nobel Foundation",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Marie_Curie_1903.jpg",
      objectPosition: "50% 15%",
    },
    sources: [
      {
        label: "Marie Curie — facts and scientific work",
        url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/",
        publisher: "Nobel Prize",
      },
      {
        label: "Marie Curie — biographical account",
        url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/biographical/",
        publisher: "Nobel Prize",
      },
      {
        label: "The Nobel Prize in Physics 1903",
        url: "https://www.nobelprize.org/prizes/physics/1903/summary/",
        publisher: "Nobel Prize",
      },
    ],
  },
  {
    rank: 6,
    slug: "galileo-galilei",
    fullName: "Galileo Galilei",
    life: "1564–1642",
    birthplace: "Pisa, Duchy of Florence",
    primaryFields: ["Astronomy", "Physics", "Mathematics"],
    headline:
      "He joined experiment, mathematics and telescopic observation to change natural science.",
    overview: [
      "Galileo did not invent the telescope, but he rapidly improved the instrument and recognised its astronomical potential. His observations of lunar mountains, Jupiter's moons, the phases of Venus, sunspots and countless stars challenged the traditional Aristotelian-Ptolemaic cosmos.",
      "In mechanics, his studies of falling bodies and accelerated motion helped replace qualitative explanations with mathematical relationships tested by experiment. His advocacy of Copernican astronomy brought him into conflict with Church authorities and resulted in his 1633 trial and house arrest.",
    ],
    knownFor: [
      "Telescopic astronomy",
      "Moons of Jupiter",
      "Phases of Venus",
      "Studies of falling bodies and acceleration",
      "Mathematical experimental method",
    ],
    earlyLife: [
      "Galileo was born in Pisa into a musical and intellectual family. He initially studied medicine but became drawn to mathematics after hearing a geometry lecture. He taught mathematics and investigated motion, instruments and astronomy.",
      "His skill was not only observation but also persuasion: he wrote in Italian as well as Latin, making scientific arguments accessible to educated readers beyond universities.",
    ],
    inspiration: [
      "Galileo was inspired by mathematical descriptions of nature and by the newly improved telescope. When he turned the telescope to the sky, he treated what he saw as evidence that could test old cosmological beliefs.",
      "He wanted to replace authority-based explanations with measurement, experiment and geometry.",
    ],
    challenges: [
      "Galileo's support for heliocentrism brought him into conflict with Church authorities in the Counter-Reformation era. In 1633 the Roman Inquisition tried him, found him 'vehemently suspected of heresy' and placed him under house arrest.",
      "The backlash was not simply a science-versus-religion cartoon; it involved theology, politics, patronage, interpretation of scripture and Galileo's own sharp public style.",
    ],
    lawsAndIdeas: [
      "Law of falling bodies: in ideal conditions, bodies accelerate uniformly under gravity regardless of mass.",
      "Inertia concept: moving bodies tend to continue moving unless something changes their motion, a key step toward Newton's first law.",
      "Telescopic evidence: mountains on the Moon, moons of Jupiter, phases of Venus and countless stars challenged the perfect-heavens and Earth-centred models.",
      "Mathematical experimentation: controlled measurement should decide between competing explanations of motion.",
    ],
    contributions: [
      {
        title: "Telescopic discoveries",
        period: "1609–1610",
        description:
          "Galileo showed that the Moon was mountainous, the Milky Way contained many stars and Jupiter had orbiting satellites, weakening the idea that all celestial motion centred on Earth.",
      },
      {
        title: "Motion and falling bodies",
        period: "Late sixteenth to early seventeenth century",
        description:
          "He investigated acceleration, inertia-like motion and projectile paths, providing important foundations for later classical mechanics.",
      },
      {
        title: "Scientific communication",
        period: "1610–1638",
        description:
          "Works such as Sidereus Nuncius and Two New Sciences combined observation, argument and mathematical analysis for a broad scholarly audience.",
      },
    ],
    definingWork: {
      title: "Sidereus Nuncius and Two New Sciences",
      date: "1610 and 1638",
      description:
        "The first announced revolutionary telescopic observations; the second gathered Galileo's mature ideas about motion, strength of materials and mathematical experimentation.",
      significance:
        "Together they helped establish observation and controlled reasoning as central tools for testing claims about nature.",
    },
    artifact: {
      title: "Galileo's surviving telescopes",
      date: "1609–1610",
      kind: "Original",
      description:
        "Museo Galileo preserves two telescopes designed and built by Galileo. Their narrow fields of view and modest optical quality make the precision of his observations especially remarkable.",
      significance:
        "With instruments of roughly 14× to 21× magnification, Galileo gathered evidence that permanently changed astronomy.",
      image: {
        fileName: "Galilei telescopes, Museo Galileo, Florence, Inv. 242, 2428, 224088.jpg",
        alt: "Two surviving telescopes designed and built by Galileo",
        credit: "Zde / Museo Galileo",
        license: "CC BY-SA 4.0",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Galilei_telescopes,_Museo_Galileo,_Florence,_Inv._242,_2428,_224088.jpg",
      },
    },
    legacy: [
      "Galileo's observations accelerated the shift from geocentric cosmology toward heliocentric astronomy.",
      "His treatment of motion strongly influenced Newton's later mechanics.",
      "His career remains central to discussions about evidence, authority, scientific institutions and freedom of inquiry.",
    ],
    portrait: {
      fileName: "Justus Sustermans - Portrait of Galileo Galilei, 1636.jpg",
      alt: "Portrait of Galileo Galilei by Justus Sustermans",
      credit: "Justus Sustermans",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Justus_Sustermans_-_Portrait_of_Galileo_Galilei,_1636.jpg",
      objectPosition: "50% 18%",
    },
    sources: [
      {
        label: "Galileo's original telescope",
        url: "https://catalogue.museogalileo.it/object/GalileosTelescope_n01.html",
        publisher: "Museo Galileo",
      },
      {
        label: "Galileo's astronomical discoveries",
        url: "https://catalogue.museogalileo.it/multimedia/GalileosAstronomyBis.html",
        publisher: "Museo Galileo",
      },
      {
        label: "The telescope as a measuring instrument",
        url: "https://catalogue.museogalileo.it/section/TelescopeObservingMeasuringAstronomicalPhenomena.html",
        publisher: "Museo Galileo",
      },
    ],
  },
  {
    rank: 7,
    slug: "charles-darwin",
    fullName: "Charles Robert Darwin",
    life: "1809–1882",
    birthplace: "Shrewsbury, England",
    primaryFields: ["Biology", "Natural History", "Evolution"],
    headline:
      "He assembled a powerful evidence-based explanation for evolution by natural selection.",
    overview: [
      "Charles Darwin transformed biology by arguing that species change over generations and that natural selection can produce adaptation. Individuals vary, some variation is heritable, and more offspring are produced than can survive; traits associated with reproductive success therefore become more common.",
      "Alfred Russel Wallace independently developed a similar theory, and their ideas were presented jointly in 1858. Darwin's distinctive achievement was the enormous synthesis of evidence from biogeography, fossils, domestication, anatomy, embryology and natural history presented in On the Origin of Species.",
    ],
    knownFor: [
      "Evolution by natural selection",
      "Common descent",
      "Biogeography and adaptation",
      "Evidence from domestication and variation",
      "Research from the HMS Beagle voyage",
    ],
    earlyLife: [
      "Darwin was born into a wealthy English family of doctors and reformers. He disliked medical training and later studied at Cambridge, where natural history, collecting and geology became his real passions.",
      "The voyage of HMS Beagle gave him five years of observation across South America, islands and oceans. He collected fossils, plants, animals and geological notes that later became evidence for evolutionary change.",
    ],
    inspiration: [
      "Darwin was inspired by Lyell's geology, which showed that small changes over long time could reshape Earth. He also studied artificial selection by breeders and asked whether nature could select in a similar way.",
      "The diversity of island species, fossil mammals and geographic patterns pushed him toward the idea that species were not fixed.",
    ],
    challenges: [
      "Victorian Britain connected natural history with religious and social beliefs, so Darwin delayed publishing for many years because he knew evolution would be controversial. Alfred Russel Wallace independently developed a similar idea, prompting joint presentation and then Darwin's book.",
      "Darwin also lived with chronic illness, which limited travel and public debate. Much of his mature work was done quietly from Down House.",
    ],
    lawsAndIdeas: [
      "Natural selection: individuals vary, some variations are heritable, and traits that improve survival or reproduction become more common over generations.",
      "Common descent: species share ancestors and diverge over long periods.",
      "Sexual selection: some traits spread because they improve mating success, even if they are costly for survival.",
      "Tree of life: biodiversity is best understood as branching history rather than a ladder of progress.",
    ],
    contributions: [
      {
        title: "Natural selection",
        period: "Developed from the late 1830s; published 1858–1859",
        description:
          "Darwin explained how inherited variation and differential reproductive success could generate adaptation without requiring fixed species.",
      },
      {
        title: "Common descent",
        period: "Nineteenth century",
        description:
          "He argued that the branching similarities among organisms reflect shared ancestry, giving biological classification a historical explanation.",
      },
      {
        title: "Broad empirical synthesis",
        period: "Decades of research",
        description:
          "Darwin tested his ideas through pigeons, plants, worms, barnacles, fossils, island species and extensive correspondence with breeders and naturalists.",
      },
    ],
    definingWork: {
      title: "On the Origin of Species",
      date: "1859",
      description:
        "Darwin presented natural selection as a mechanism for evolutionary change and supported it with evidence from many branches of biology.",
      significance:
        "Evolution became the unifying framework of modern biology, linking genetics, ecology, palaeontology, medicine and molecular science.",
    },
    artifact: {
      title: "Darwin's first evolutionary tree sketch",
      date: "1837",
      kind: "Historic document",
      description:
        "In Notebook B, Darwin wrote “I think” above a branching diagram. The sketch represented species as historical lineages that split, diversify and become extinct.",
      significance:
        "The page captures a fundamental shift from arranging life as a fixed ladder to understanding it as a branching history of descent.",
      image: {
        fileName: "Darwin Tree 1837 cropped.png",
        alt: "Charles Darwin's 1837 first sketch of an evolutionary tree",
        credit: "Charles Darwin / Cambridge University Library",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Darwin_Tree_1837_cropped.png",
      },
    },
    legacy: [
      "Natural selection remains a central mechanism of evolution and is supported by genetics, observed evolution and the fossil record.",
      "Modern evolutionary theory also includes genetic drift, gene flow, mutation, developmental constraints and other mechanisms beyond Darwin's original account.",
      "Darwin's work changed how humans understand biodiversity and their own place within nature.",
    ],
    portrait: {
      fileName: "Charles Robert Darwin by John Collier.jpg",
      alt: "Portrait of Charles Darwin by John Collier",
      credit: "John Collier",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Charles_Robert_Darwin_by_John_Collier.jpg",
      objectPosition: "50% 15%",
    },
    sources: [
      {
        label: "Charles Darwin — biography and scientific impact",
        url: "https://www.nhm.ac.uk/discover/charles-darwin-most-famous-biologist.html",
        publisher: "Natural History Museum",
      },
      {
        label: "Natural selection and Wallace's independent contribution",
        url: "https://www.nhm.ac.uk/discover/what-is-natural-selection.html",
        publisher: "Natural History Museum",
      },
      {
        label: "Darwin collections and Origin of Species",
        url: "https://www.nhm.ac.uk/discover/museum-highlights-charles-darwin.html",
        publisher: "Natural History Museum",
      },
    ],
  },
  {
    rank: 8,
    slug: "michael-faraday",
    fullName: "Michael Faraday",
    life: "1791–1867",
    birthplace: "Newington Butts, England",
    primaryFields: ["Physics", "Chemistry", "Electromagnetism"],
    headline: "The experimentalist who turned electricity and magnetism into motion and power.",
    overview: [
      "Michael Faraday was a largely self-educated experimental scientist whose discoveries connected electricity, magnetism, motion and light. He built the first electric motor, discovered electromagnetic induction and created early forms of the transformer and generator.",
      "Faraday's idea of lines of force encouraged a field-based view of electromagnetism. James Clerk Maxwell later translated many of these physical insights into mathematical equations.",
    ],
    knownFor: [
      "Electromagnetic induction",
      "First electric motor",
      "Early transformer and generator",
      "Faraday effect",
      "Electrolysis laws and field concepts",
    ],
    earlyLife: [
      "Faraday was born into a poor family in London and received little formal schooling. Apprenticed to a bookbinder, he read the books he bound, especially science texts, and attended public lectures by Humphry Davy.",
      "His careful notes from Davy's lectures helped him obtain work at the Royal Institution, where practical laboratory skill became his route into science.",
    ],
    inspiration: [
      "Faraday was inspired by experiments more than equations. He wanted to see how electricity, magnetism and chemical action were connected through observable effects.",
      "His religious seriousness and belief in the unity of nature encouraged him to look for deep connections between forces.",
    ],
    challenges: [
      "Faraday faced class barriers in British science because he lacked elite university training and came from a tradesman's background. He also had to move from assistant status to independent authority through exceptional experimental results.",
      "He was not a strong mathematician, so later physicists such as Maxwell translated Faraday's field ideas into equations.",
    ],
    lawsAndIdeas: [
      "Electromagnetic induction: a changing magnetic environment can induce an electric current in a conductor.",
      "Faraday's laws of electrolysis: the amount of chemical change in electrolysis is proportional to the quantity of electricity passed.",
      "Field concept: electric and magnetic effects can be represented as lines of force filling space.",
      "Faraday effect: magnetism can influence the polarization of light, linking electromagnetism and optics.",
    ],
    contributions: [
      {
        title: "Electromagnetic rotation",
        period: "1821",
        description:
          "Faraday produced continuous mechanical rotation from electrical and magnetic interaction, an essential conceptual step toward the electric motor.",
      },
      {
        title: "Electromagnetic induction",
        period: "1831",
        description:
          "He showed that changing magnetic conditions can induce electric current, establishing the operating principle of generators and transformers.",
      },
      {
        title: "Fields and light",
        period: "1840s–1850s",
        description:
          "Faraday's magneto-optical experiments and lines-of-force concept helped reveal that electricity, magnetism and light are deeply connected.",
      },
    ],
    definingWork: {
      title: "Experimental Researches in Electricity",
      date: "Published in parts from 1832",
      description:
        "Faraday documented a vast programme of experiments on induction, electrochemistry, dielectric effects, magnetism and fields with exceptional observational care.",
      significance:
        "His discoveries supply the physical principles behind modern electric generation, motors, transformers and much of electrical engineering.",
    },
    artifact: {
      title: "Faraday disk generator",
      date: "1831",
      kind: "Historic apparatus",
      description:
        "A conducting disk rotated between magnetic poles, generating a continuous voltage between its centre and rim. It was the first electromagnetic generator.",
      significance:
        "The apparatus demonstrated direct conversion of mechanical motion into electrical energy, the central principle of power stations today.",
      image: {
        fileName: "Faraday disk generator.jpg",
        alt: "Historic drawing of Michael Faraday's disk generator",
        credit: "Émile Alglave and J. Boulard",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Faraday_disk_generator.jpg",
      },
    },
    legacy: [
      "Nearly all large-scale electrical generation relies on electromagnetic induction.",
      "The SI unit of capacitance, the farad, honours his work.",
      "His public lectures, especially The Chemical History of a Candle, became a model for accessible science communication.",
    ],
    portrait: {
      fileName: "Faraday.jpg",
      alt: "Portrait of Michael Faraday",
      credit: "Thomas Phillips",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Faraday.jpg",
      objectPosition: "50% 18%",
    },
    sources: [
      {
        label: "The birth of electric motion",
        url: "https://www.rigb.org/explore-science/explore/blog/birth-electric-motion",
        publisher: "Royal Institution",
      },
      {
        label: "Faraday's original electric motor apparatus",
        url: "https://www.rigb.org/explore-science/explore/collection/michael-faradays-electric-magnetic-rotation-apparatus-motor",
        publisher: "Royal Institution",
      },
      {
        label: "Michael Faraday's generator",
        url: "https://www.rigb.org/explore-science/explore/collection/michael-faradays-generator",
        publisher: "Royal Institution",
      },
    ],
  },
  {
    rank: 9,
    slug: "louis-pasteur",
    fullName: "Louis Pasteur",
    life: "1822–1895",
    birthplace: "Dole, France",
    primaryFields: ["Chemistry", "Microbiology", "Immunology"],
    headline:
      "He linked microorganisms to fermentation, spoilage and disease, then turned that knowledge into prevention.",
    overview: [
      "Louis Pasteur's experimental work helped overturn spontaneous generation and establish microorganisms as agents of fermentation, spoilage and disease. He developed heat-treatment processes later called pasteurisation and advanced vaccination through attenuation of disease-causing organisms.",
      "Pasteur did not create germ theory alone; many researchers contributed. His exceptional impact came from connecting laboratory evidence with practical problems in food, agriculture, surgery and medicine.",
    ],
    knownFor: [
      "Experimental support for germ theory",
      "Pasteurisation",
      "Swan-neck flask experiments",
      "Vaccines for anthrax and rabies",
      "Foundations of microbiology and immunology",
    ],
    earlyLife: [
      "Pasteur was born in Dole, France, the son of a tanner. He was not a childhood prodigy in science, but he became a disciplined student and trained in chemistry and crystallography.",
      "His early work on molecular asymmetry prepared him to think carefully about invisible structure, which later helped in fermentation and disease research.",
    ],
    inspiration: [
      "Pasteur was inspired by practical problems: why wine spoiled, why silk-worm disease ruined industry and why infections spread. He moved between laboratory science and public health needs.",
      "He believed that careful experiments could defeat vague explanations such as spontaneous generation.",
    ],
    challenges: [
      "Pasteur worked in nineteenth-century France amid industrial competition, war and public-health crises. His germ theory challenged older medical habits and required doctors and industries to change practice.",
      "His vaccine work also raised ethical questions because some trials involved urgent human risk, most famously the rabies treatment of Joseph Meister.",
    ],
    lawsAndIdeas: [
      "Germ theory: many diseases and spoilage processes are caused by microorganisms.",
      "Pasteurization: controlled heating can kill harmful microbes without fully destroying food quality.",
      "Vaccination by attenuation: weakened forms of microbes can train the body to resist disease.",
      "Disproof of spontaneous generation: sterilized broth remains free of life unless exposed to microbes from the environment.",
    ],
    contributions: [
      {
        title: "Fermentation and microorganisms",
        period: "1850s–1860s",
        description:
          "Pasteur demonstrated that particular microorganisms drive particular fermentation processes and that contamination could spoil wine and other products.",
      },
      {
        title: "Swan-neck flask experiments",
        period: "1860s",
        description:
          "Sterilised broth remained uncontaminated when air could enter but airborne dust was trapped, providing strong evidence against spontaneous generation under those conditions.",
      },
      {
        title: "Vaccination",
        period: "1870s–1885",
        description:
          "Pasteur and collaborators developed attenuated preparations for animal diseases and a post-exposure treatment for rabies, helping establish laboratory immunology.",
      },
    ],
    definingWork: {
      title: "From fermentation to vaccination",
      date: "1857–1885",
      description:
        "Pasteur followed a connected research path: microbes explained fermentation; microbial contamination challenged spontaneous generation; disease-causing microbes suggested prevention through weakened forms.",
      significance:
        "This programme changed food safety, infection control, agriculture and preventive medicine.",
    },
    artifact: {
      title: "Pasteur's swan-neck flask",
      date: "Experiments, 1860s",
      kind: "Historic apparatus",
      description:
        "The curved neck admitted air but trapped dust and microorganisms before they reached sterilised broth. Broth remained clear until contact with trapped material occurred.",
      significance:
        "The design separated exposure to air from exposure to airborne contamination, turning a philosophical dispute into a controlled experiment.",
      image: {
        fileName: "Swan-necked flask used by Pasteur. Wellcome M0012521.jpg",
        alt: "Swan-necked flask used in Pasteur's experiments",
        credit: "Wellcome Collection",
        license: "CC BY 4.0",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Swan-necked_flask_used_by_Pasteur._Wellcome_M0012521.jpg",
      },
    },
    legacy: [
      "Pasteurisation remains a major food-safety process.",
      "His work helped make aseptic practice, microbiological testing and vaccination central to public health.",
      "The Institut Pasteur, opened in 1888, extended his model of linked research, treatment and education internationally.",
    ],
    portrait: {
      fileName: "Pasteur, Louis (1822-1895) par Paul Nadar.jpg",
      alt: "Portrait of Louis Pasteur by Paul Nadar",
      credit: "Paul Nadar",
      license: "Public domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Pasteur,_Louis_(1822-1895)_par_Paul_Nadar.jpg",
      objectPosition: "50% 15%",
    },
    sources: [
      {
        label: "History and chronology of Pasteur's work",
        url: "https://www.pasteur.fr/en/institut-pasteur/history",
        publisher: "Institut Pasteur",
      },
      {
        label: "The first human rabies vaccination",
        url: "https://www.pasteur.fr/en/research-journal/news/history-first-rabies-vaccination-1885",
        publisher: "Institut Pasteur",
      },
      {
        label: "Vaccines and the final period of Pasteur's research",
        url: "https://www.pasteur.fr/en/institut-pasteur/history/troisieme-epoque-1877-1887",
        publisher: "Institut Pasteur",
      },
    ],
  },
  {
    rank: 10,
    slug: "alexander-fleming",
    fullName: "Sir Alexander Fleming",
    life: "1881–1955",
    birthplace: "Lochfield, Scotland",
    primaryFields: ["Bacteriology", "Medicine", "Microbiology"],
    headline: "He recognised penicillin's antibacterial action and warned early about resistance.",
    overview: [
      "Alexander Fleming discovered lysozyme and, in 1928, observed that a Penicillium mould contaminating a culture plate inhibited nearby staphylococcal bacteria. He isolated the antibacterial substance and named it penicillin.",
      "Fleming did not by himself turn penicillin into a mass-produced medicine. Ernst Chain, Howard Florey and a wider team later purified, tested and developed it for clinical use. The 1945 Nobel Prize recognised Fleming, Chain and Florey jointly.",
    ],
    knownFor: [
      "Discovery of penicillin's antibacterial action",
      "Discovery of lysozyme",
      "Research in bacteriology and wound infection",
      "Early warning about antibiotic resistance",
    ],
    earlyLife: [
      "Fleming was born on a farm in Ayrshire, Scotland, and later moved to London. His rural childhood, military service and medical training all shaped his practical attitude to infection and wound treatment.",
      "He became a bacteriologist at St Mary's Hospital, where he studied antiseptics, immunity and bacterial cultures.",
    ],
    inspiration: [
      "Fleming was inspired by the problem of infected wounds, especially after seeing soldiers suffer in World War I. He noticed that strong antiseptics could damage tissue as well as kill microbes.",
      "His famous discovery came because he paid attention to an unexpected mould contaminating a bacterial plate instead of simply throwing it away.",
    ],
    challenges: [
      "Fleming discovered penicillin in 1928, but turning it into a reliable medicine required later purification and mass production by Florey, Chain and others. Scientific discovery alone was not enough; chemistry, funding and wartime urgency mattered.",
      "He also warned that careless use of antibiotics could encourage resistant bacteria, a challenge that remains serious today.",
    ],
    lawsAndIdeas: [
      "Penicillin principle: substances produced by some microorganisms can kill or inhibit other microorganisms.",
      "Selective toxicity: an antimicrobial medicine is most useful when it harms bacteria more than the patient.",
      "Antibiotic resistance warning: under-dosing or misuse can allow resistant microbes to survive and spread.",
      "Lysozyme discovery: natural body fluids contain enzymes that can attack bacterial cell walls.",
    ],
    contributions: [
      {
        title: "Lysozyme",
        period: "1921–1922",
        description:
          "Fleming identified an antibacterial enzyme present in tears, saliva and other secretions, showing that the body possesses natural chemical defences.",
      },
      {
        title: "Penicillin observation",
        period: "1928",
        description:
          "He noticed a clear zone around contaminating mould where bacteria had been destroyed and investigated the mould's antibacterial filtrate.",
      },
      {
        title: "Resistance warning",
        period: "1940s",
        description:
          "Fleming warned that exposing microbes to insufficient doses could select resistant organisms, anticipating a major modern public-health problem.",
      },
    ],
    definingWork: {
      title: "On the Antibacterial Action of Cultures of a Penicillium",
      date: "1929",
      description:
        "Fleming reported that filtrates from the mould inhibited several disease-causing bacteria and suggested possible value for isolating certain organisms.",
      significance:
        "The observation became the starting point for the development of penicillin, which transformed treatment of bacterial infection and wartime medicine.",
    },
    artifact: {
      title: "Fleming's first penicillin paper",
      date: "1929",
      kind: "Historic document",
      description:
        "The first page of Fleming's published report records the experimental evidence for an antibacterial substance produced by Penicillium mould.",
      significance:
        "The paper preserves the transition from an unusual culture-plate observation to a scientifically reported phenomenon that other researchers could investigate.",
      image: {
        fileName: "First page of Alexander Fleming's paper on penicillin Wellcome L0007150.jpg",
        alt: "First page of Alexander Fleming's 1929 paper on penicillin",
        credit: "Wellcome Collection",
        license: "CC BY 4.0",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:First_page_of_Alexander_Fleming%27s_paper_on_penicillin_Wellcome_L0007150.jpg",
      },
    },
    legacy: [
      "Penicillin initiated the antibiotic era and made many previously lethal infections treatable.",
      "The discovery also demonstrates the importance of careful observation: contamination became evidence rather than discarded failure.",
      "Fleming's resistance warning remains urgent as misuse and overuse of antibiotics accelerate antimicrobial resistance.",
    ],
    portrait: {
      fileName: "Alexander-fleming.jpg",
      alt: "Portrait of Sir Alexander Fleming",
      credit: "U.S. National Library of Medicine",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Alexander-fleming.jpg",
      objectPosition: "50% 18%",
    },
    sources: [
      {
        label: "Alexander Fleming — facts and penicillin discovery",
        url: "https://www.nobelprize.org/prizes/medicine/1945/fleming/facts/",
        publisher: "Nobel Prize",
      },
      {
        label: "The Nobel Prize in Physiology or Medicine 1945",
        url: "https://www.nobelprize.org/prizes/medicine/1945/summary/",
        publisher: "Nobel Prize",
      },
      {
        label: "Penicillin, resistance and Fleming's warning",
        url: "https://www.nobelprize.org/prizes/medicine/1945/fleming/questions-and-answers/",
        publisher: "Nobel Prize",
      },
    ],
  },

  {
    rank: 11,
    slug: "cv-raman",
    fullName: "Sir Chandrasekhara Venkata Raman",
    life: "1888–1970",
    birthplace: "Tiruchirappalli, British India",
    primaryFields: ["Physics", "Optics", "Acoustics"],
    headline: "He discovered the Raman effect, showing how light changes when it scatters from molecules.",
    overview: [
      "C. V. Raman used careful optical experiments to study how light interacts with matter.",
      "His discovery of inelastic light scattering gave scientists a new way to identify molecular structure and earned him the 1930 Nobel Prize in Physics.",
    ],
    knownFor: ["Raman effect", "Molecular spectroscopy", "Light scattering", "Acoustics research", "Indian science leadership"],
    earlyLife: [
      "C. V. Raman grew up in South India in a family that valued learning and music. He showed early brilliance in mathematics and physics, but took a government finance job because scientific research careers in colonial India were limited.",
      "He conducted experiments in his spare time at the Indian Association for the Cultivation of Science in Calcutta, often before and after office hours.",
    ],
    inspiration: [
      "Raman was inspired by light, colour, sound and Indian musical instruments. A sea voyage to Europe made him wonder why the Mediterranean looked intensely blue, deepening his interest in light scattering.",
      "He wanted to prove that high-quality physics could be done in India with resourceful apparatus and sharp questions.",
    ],
    challenges: [
      "Raman worked under colonial conditions where Indian scientists had fewer institutional resources and less international recognition. Building a research culture in India was part of his achievement.",
      "He faced skepticism because the Raman effect required precise observation of weak scattered light, but the result quickly became a powerful tool for identifying molecules.",
    ],
    lawsAndIdeas: [
      "Raman effect: light scattered by molecules can change wavelength because energy is exchanged with molecular vibrations or rotations.",
      "Molecular fingerprinting: the shifted light pattern reveals information about the structure of a substance.",
      "Light scattering: colour in transparent media can arise from how small particles or molecules scatter different wavelengths.",
      "Experimental minimalism: careful optics can reveal atomic-scale information without huge equipment.",
    ],
    contributions: [
      { title: "Raman effect", period: "1928", description: "Raman showed that a small part of scattered light changes wavelength after interacting with molecules." },
      { title: "Spectroscopy method", period: "1930s onward", description: "The effect became a powerful tool for identifying chemical bonds and molecular vibrations." },
      { title: "Scientific institutions", period: "1930s–1950s", description: "Raman helped develop research culture and institutions for physics in India." },
    ],
    definingWork: { title: "A New Radiation", date: "1928", description: "Raman and K. S. Krishnan reported a new scattering phenomenon observed in liquids.", significance: "It opened the field of Raman spectroscopy, now used in chemistry, physics, medicine and materials science." },
    artifact: { title: "Raman spectroscope", date: "1920s", kind: "Historic apparatus", description: "Optical filters, lenses and a spectrograph were used to observe faint shifted light from samples.", significance: "The apparatus shows how a precise tabletop experiment revealed molecular information hidden in light.", image: { fileName: "Chandrasekhara Venkata Raman 1930.jpg", alt: "Portrait of C. V. Raman", credit: "Nobel Foundation", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chandrasekhara_Venkata_Raman_1930.jpg", objectPosition: "50% 18%" } },
    legacy: ["Raman spectroscopy is widely used to study molecules and materials.", "Raman became the first Asian Nobel laureate in science.", "India celebrates National Science Day on the date of his discovery."],
    portrait: { fileName: "Chandrasekhara Venkata Raman 1930.jpg", alt: "Portrait of C. V. Raman", credit: "Nobel Foundation", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chandrasekhara_Venkata_Raman_1930.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "C. V. Raman — facts", url: "https://www.nobelprize.org/prizes/physics/1930/raman/facts/", publisher: "Nobel Prize" },
      { label: "C. V. Raman", url: "https://www.britannica.com/biography/C-V-Raman", publisher: "Encyclopaedia Britannica" },
      { label: "Raman effect", url: "https://www.britannica.com/science/Raman-effect", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 12,
    slug: "jagadish-chandra-bose",
    fullName: "Jagadish Chandra Bose",
    life: "1858–1937",
    birthplace: "Mymensingh, Bengal Presidency",
    primaryFields: ["Physics", "Biology", "Botany", "Radio Science"],
    headline: "He made early contributions to wireless science and studied electrical responses in plants.",
    overview: [
      "Jagadish Chandra Bose worked across physics and biology, designing sensitive instruments for studying waves and living tissues.",
      "His experiments with millimetre waves and plant response helped connect laboratory physics with questions about life processes.",
    ],
    knownFor: ["Millimetre-wave experiments", "Plant physiology", "Crescograph", "Bose Institute", "Interdisciplinary research"],
    earlyLife: [
      "Bose was born in Bengal and first studied in a vernacular school because his father wanted him to know his own language and culture before English education. He later studied at Calcutta and in Britain, where he encountered physics and natural science.",
      "Returning to India, he taught at Presidency College and built instruments despite racial discrimination and unequal pay under colonial rule.",
    ],
    inspiration: [
      "Bose was inspired by the continuity of nature. He explored whether plants and inorganic materials could show responses analogous to living systems, while also pioneering wireless experiments.",
      "His work combined physics, biology and instrument-making, showing that boundaries between disciplines can be crossed productively.",
    ],
    challenges: [
      "Bose faced colonial prejudice, limited laboratory support and delayed salary equality. He often had to build his own sensitive instruments rather than rely on imported equipment.",
      "Some of his wireless work was not commercialised aggressively because he was reluctant to patent early discoveries, which affected later recognition.",
    ],
    lawsAndIdeas: [
      "Millimetre-wave research: Bose generated and detected very short radio waves and studied their reflection, refraction and polarization.",
      "Crescograph: his instrument magnified tiny plant movements, allowing quantitative study of plant responses.",
      "Plant response theory: plants show measurable reactions to stimuli such as light, chemicals, heat and injury.",
      "Semiconductor detector work: Bose used crystal detectors in radio experiments before modern semiconductor electronics matured.",
    ],
    contributions: [
      { title: "Wireless wave experiments", period: "1890s", description: "Bose demonstrated transmission and detection of short radio waves and explored their reflection, refraction and polarization." },
      { title: "Plant response studies", period: "1900s", description: "He measured how plants respond to stimuli using highly sensitive recording instruments." },
      { title: "Crescograph", period: "Early 1900s", description: "Bose developed instruments that magnified tiny plant movements for experimental study." },
    ],
    definingWork: { title: "Response in the Living and Non-Living", date: "1902", description: "Bose compared electrical responses in metals and living tissues.", significance: "The work reflected his effort to study continuity between physical and biological systems." },
    artifact: { title: "Crescograph", date: "Early 1900s", kind: "Historic apparatus", description: "An instrument designed to record very small movements and growth changes in plants.", significance: "It made plant behaviour measurable and visible for students and researchers.", image: { fileName: "Jagadish Chandra Bose 1926.jpg", alt: "Portrait of Jagadish Chandra Bose", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jagadish_Chandra_Bose_1926.jpg", objectPosition: "50% 18%" } },
    legacy: ["Bose is remembered as a pioneer of radio science and biophysics.", "The Bose Institute became an important Indian research institution.", "His interdisciplinary style remains inspiring for learners."],
    portrait: { fileName: "Jagadish Chandra Bose 1926.jpg", alt: "Portrait of Jagadish Chandra Bose", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jagadish_Chandra_Bose_1926.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Jagadish Chandra Bose", url: "https://www.britannica.com/biography/Jagadish-Chandra-Bose", publisher: "Encyclopaedia Britannica" },
      { label: "Bose Institute", url: "https://www.jcbose.ac.in/", publisher: "Bose Institute" },
      { label: "J. C. Bose", url: "https://www.encyclopedia.com/people/science-and-technology/physics-biographies/jagadish-chandra-bose", publisher: "Encyclopedia.com" },
    ],
  },
  {
    rank: 13,
    slug: "katherine-johnson",
    fullName: "Katherine Johnson",
    life: "1918–2020",
    birthplace: "White Sulphur Springs, West Virginia, United States",
    primaryFields: ["Mathematics", "Space Science", "Computing"],
    headline: "Her precise calculations helped guide early human spaceflight.",
    overview: [
      "Katherine Johnson worked as a mathematician at NACA and NASA, calculating flight paths for crewed missions.",
      "Her work combined geometry, orbital mechanics and careful checking at a time when electronic computers were still new.",
    ],
    knownFor: ["NASA trajectory calculations", "Mercury missions", "Apollo 11 support", "Orbital mechanics", "Hidden Figures legacy"],
    earlyLife: [
      "Katherine Johnson grew up in West Virginia and showed extraordinary mathematical ability as a child. Because local schools for Black students did not continue to higher grades, her family moved so she and her siblings could continue education.",
      "She graduated from college at a young age and later joined NACA, the predecessor of NASA, as a human computer in a segregated workplace.",
    ],
    inspiration: [
      "Johnson loved counting and patterns from childhood. At NASA she was inspired by the practical challenge of making spaceflight safe: every trajectory had to be calculated correctly because astronauts' lives depended on it.",
      "She also pushed to attend technical briefings, turning a computing role into a mathematical research role.",
    ],
    challenges: [
      "Johnson worked through racial segregation and gender discrimination in mid-twentieth-century America. Black women mathematicians often received less credit despite doing mission-critical work.",
      "Her calculations had to be trusted in a high-pressure Cold War space race. John Glenn famously asked for her to verify computer calculations before his orbital flight.",
    ],
    lawsAndIdeas: [
      "Orbital mechanics: spacecraft paths are calculated using gravity, velocity, acceleration and coordinate geometry.",
      "Trajectory calculation: launch angle, speed and timing determine whether a capsule reaches orbit and returns safely.",
      "Re-entry mathematics: the landing point depends on Earth's rotation, capsule speed, drag and descent timing.",
      "Verification principle: human mathematical checking was essential before digital computers were fully trusted.",
    ],
    contributions: [
      { title: "Mercury mission calculations", period: "1960s", description: "Johnson calculated trajectories and launch windows for early American human spaceflight." },
      { title: "John Glenn orbit verification", period: "1962", description: "Glenn requested that Johnson check computer calculations before his orbital flight." },
      { title: "Apollo support", period: "1960s", description: "Her mathematical work contributed to mission planning for lunar exploration." },
    ],
    definingWork: { title: "Trajectory analysis for spaceflight", date: "1950s–1960s", description: "Johnson applied analytic geometry and orbital mechanics to predict spacecraft paths.", significance: "Her calculations helped make crewed missions safer and more reliable." },
    artifact: { title: "NASA trajectory worksheets", date: "1960s", kind: "Historic document", description: "Hand calculations and computer-checked tables were used to plan spacecraft movement.", significance: "They show the importance of mathematical accuracy in space exploration.", image: { fileName: "Katherine Johnson 1983.jpg", alt: "Portrait of Katherine Johnson", credit: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Katherine_Johnson_1983.jpg", objectPosition: "50% 18%" } },
    legacy: ["Johnson became a symbol of excellence in mathematics and space science.", "Her story highlighted the contributions of Black women at NASA.", "She received the Presidential Medal of Freedom in 2015."],
    portrait: { fileName: "Katherine Johnson 1983.jpg", alt: "Portrait of Katherine Johnson", credit: "NASA", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Katherine_Johnson_1983.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Katherine Johnson", url: "https://www.nasa.gov/people/katherine-johnson/", publisher: "NASA" },
      { label: "Katherine Johnson biography", url: "https://www.britannica.com/biography/Katherine-Johnson-mathematician", publisher: "Encyclopaedia Britannica" },
      { label: "NASA Hidden Figures", url: "https://www.nasa.gov/modernfigures/", publisher: "NASA" },
    ],
  },
  {
    rank: 14,
    slug: "dorothy-hodgkin",
    fullName: "Dorothy Crowfoot Hodgkin",
    life: "1910–1994",
    birthplace: "Cairo, Egypt",
    primaryFields: ["Chemistry", "Crystallography", "Biochemistry"],
    headline: "She used X-ray crystallography to reveal the structures of important biological molecules.",
    overview: [
      "Dorothy Hodgkin developed and applied X-ray crystallography to solve complex molecular structures.",
      "Her work on penicillin, vitamin B12 and insulin connected chemistry with medicine and helped scientists understand how molecules work in the body.",
    ],
    knownFor: ["X-ray crystallography", "Penicillin structure", "Vitamin B12 structure", "Insulin structure", "Nobel Prize in Chemistry"],
    earlyLife: [
      "Dorothy Crowfoot Hodgkin spent parts of her childhood in Britain and the Middle East, where her parents worked in education and archaeology. She became interested in crystals and chemistry as a schoolgirl and studied at Oxford and Cambridge.",
      "She entered X-ray crystallography when it was still a demanding young field requiring mathematics, chemistry, careful crystals and interpretation of diffraction patterns.",
    ],
    inspiration: [
      "Hodgkin was inspired by the possibility of seeing the architecture of life at molecular scale. She wanted to know not just what substances did but how their atoms were arranged.",
      "Her work was driven by medically important molecules such as penicillin, vitamin B12 and insulin.",
    ],
    challenges: [
      "Hodgkin built a major scientific career while dealing with rheumatoid arthritis, which affected her hands and mobility. She also worked in a period when women scientists often had to fight for recognition and positions.",
      "The molecules she studied were complex, and early computers were limited, so solving structures required patience, teamwork and mathematical ingenuity.",
    ],
    lawsAndIdeas: [
      "X-ray crystallography: X-rays scattered by a crystal produce diffraction patterns that can be used to reconstruct atomic structure.",
      "Penicillin structure: knowing the beta-lactam ring helped chemists understand and improve antibiotics.",
      "Vitamin B12 structure: one of the most complex molecular structures solved at the time.",
      "Insulin structure: her long-term work clarified the shape of a hormone central to diabetes treatment.",
    ],
    contributions: [
      { title: "Penicillin structure", period: "1940s", description: "Hodgkin determined the molecular structure of penicillin, helping explain its chemical behaviour." },
      { title: "Vitamin B12", period: "1950s", description: "She solved the structure of vitamin B12, one of the most complex molecules studied at the time." },
      { title: "Insulin research", period: "1930s–1960s", description: "Hodgkin's team worked for decades to determine the structure of insulin." },
    ],
    definingWork: { title: "Vitamin B12 structure", date: "1956", description: "Hodgkin used crystallographic data and computation to determine the architecture of vitamin B12.", significance: "It proved that X-ray crystallography could solve very complex biological molecules." },
    artifact: { title: "X-ray diffraction photograph", date: "Mid-1900s", kind: "Historic document", description: "Diffraction patterns from crystals were interpreted mathematically to locate atoms in molecules.", significance: "The method transformed biology and medicine by making molecular structures visible.", image: { fileName: "Dorothy Crowfoot Hodgkin.jpg", alt: "Portrait of Dorothy Hodgkin", credit: "Nobel Foundation", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dorothy_Crowfoot_Hodgkin.jpg", objectPosition: "50% 18%" } },
    legacy: ["Hodgkin's work advanced structural biology and drug chemistry.", "She remains one of the most important crystallographers in science history.", "Her career inspired generations of chemists and women scientists."],
    portrait: { fileName: "Dorothy Crowfoot Hodgkin.jpg", alt: "Portrait of Dorothy Hodgkin", credit: "Nobel Foundation", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Dorothy_Crowfoot_Hodgkin.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Dorothy Hodgkin — facts", url: "https://www.nobelprize.org/prizes/chemistry/1964/hodgkin/facts/", publisher: "Nobel Prize" },
      { label: "Dorothy Hodgkin", url: "https://www.britannica.com/biography/Dorothy-Hodgkin", publisher: "Encyclopaedia Britannica" },
      { label: "Royal Society biography", url: "https://royalsocietypublishing.org/doi/10.1098/rsbm.1997.0020", publisher: "Royal Society" },
    ],
  },
  {
    rank: 15,
    slug: "homi-bhabha",
    fullName: "Homi Jehangir Bhabha",
    life: "1909–1966",
    birthplace: "Bombay, British India",
    primaryFields: ["Nuclear Physics", "Cosmic Rays", "Theoretical Physics"],
    headline: "He helped build India's modern nuclear science programme and studied cosmic-ray particle showers.",
    overview: [
      "Homi Bhabha was a theoretical physicist whose work on cosmic rays contributed to particle physics.",
      "He also founded and guided major Indian scientific institutions, linking advanced research with national development.",
    ],
    knownFor: ["Bhabha scattering", "Cosmic-ray showers", "Tata Institute of Fundamental Research", "Indian nuclear programme", "Theoretical physics"],
    earlyLife: [
      "Homi Bhabha was born into a prominent Parsi family in Bombay and studied engineering at Cambridge, but his real interest was theoretical physics. The rise of quantum mechanics and cosmic-ray research shaped his early scientific career.",
      "World War II kept him in India, where he began building institutions rather than returning immediately to Europe.",
    ],
    inspiration: [
      "Bhabha was inspired by modern physics and by the idea that independent India needed strong scientific institutions. He believed advanced research, nuclear science and national development were linked.",
      "His vision combined pure science with institution-building, from cosmic rays to atomic energy.",
    ],
    challenges: [
      "Bhabha worked during the transition from colonial rule to independent India, when resources were limited but ambitions were high. Nuclear science also carried political and ethical weight after World War II.",
      "He had to convince political leaders to fund long-term research institutions in a newly independent country with many urgent needs.",
    ],
    lawsAndIdeas: [
      "Bhabha scattering: electron-positron scattering helped test quantum electrodynamics.",
      "Cosmic-ray showers: high-energy particles from space create cascades of secondary particles in the atmosphere.",
      "Institution building: Tata Institute of Fundamental Research and India's atomic energy programme were designed to support advanced science.",
      "Three-stage nuclear vision: India could use its resources, including thorium, for long-term nuclear energy development.",
    ],
    contributions: [
      { title: "Bhabha scattering", period: "1930s", description: "Bhabha studied electron-positron scattering, a process important in quantum electrodynamics." },
      { title: "Cosmic-ray cascade theory", period: "1930s", description: "With Walter Heitler, he described how high-energy particles create showers in matter." },
      { title: "Institution building", period: "1940s–1960s", description: "Bhabha founded TIFR and led India's atomic energy programme." },
    ],
    definingWork: { title: "The Passage of Fast Electrons and the Theory of Cosmic Showers", date: "1937", description: "Bhabha and Heitler explained the multiplication of energetic particles in cosmic-ray showers.", significance: "The work helped connect cosmic-ray observations with high-energy particle physics." },
    artifact: { title: "Cosmic-ray shower diagram", date: "1930s", kind: "Historic document", description: "Cascade diagrams showed how energetic particles could produce secondary particles in matter.", significance: "They helped students visualize invisible high-energy processes in the atmosphere and detectors.", image: { fileName: "Homi Jehangir Bhabha 1960s.jpg", alt: "Portrait of Homi J. Bhabha", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Homi_Jehangir_Bhabha_1960s.jpg", objectPosition: "50% 18%" } },
    legacy: ["Bhabha is often called the father of India's nuclear programme.", "TIFR became a major centre for fundamental science.", "His work connected cosmic rays, quantum theory and institution building."],
    portrait: { fileName: "Homi Jehangir Bhabha 1960s.jpg", alt: "Portrait of Homi J. Bhabha", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Homi_Jehangir_Bhabha_1960s.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Homi Bhabha", url: "https://www.britannica.com/biography/Homi-Bhabha", publisher: "Encyclopaedia Britannica" },
      { label: "TIFR history", url: "https://www.tifr.res.in/", publisher: "Tata Institute of Fundamental Research" },
      { label: "Atomic Energy Commission", url: "https://dae.gov.in/", publisher: "Department of Atomic Energy, India" },
    ],
  },
  {
    rank: 16,
    slug: "alan-turing",
    fullName: "Alan Turing",
    life: "1912–1954",
    birthplace: "London, England",
    primaryFields: ["Computer Science", "Mathematics", "Cryptography"],
    headline: "He founded key ideas of computation and helped break wartime codes.",
    overview: ["Alan Turing gave a precise mathematical model of computation and proved limits on what machines can decide.", "During the Second World War, his work at Bletchley Park contributed to methods for decrypting Enigma messages. He later explored machine intelligence and mathematical biology."],
    knownFor: ["Turing machine", "Computability", "Enigma codebreaking", "Turing test", "Morphogenesis"],
    earlyLife: [
      "Turing grew up in Britain and showed early fascination with numbers, puzzles and science. At Cambridge he studied mathematics and logic, then worked on the foundations of computation.",
      "His 1936 paper imagined an abstract machine that could follow instructions step by step, creating a foundation for computer science before electronic computers existed.",
    ],
    inspiration: [
      "Turing was inspired by Hilbert's decision problem and by the question of what it means for a calculation to be mechanical. During World War II, that abstract thinking became urgently practical in codebreaking.",
      "He was also interested in biology, asking how simple rules could produce patterns in living organisms.",
    ],
    challenges: [
      "Turing's wartime codebreaking at Bletchley Park was secret for decades, delaying public recognition. After the war he faced persecution because he was gay; in 1952 he was convicted under British laws against homosexual acts and subjected to chemical treatment.",
      "His death in 1954 is one of the major tragedies in scientific history, showing how social prejudice can destroy brilliant lives.",
    ],
    lawsAndIdeas: [
      "Turing machine: an abstract model of computation that defines what can be computed by a mechanical procedure.",
      "Computability: some problems cannot be solved by any algorithm, no matter how much time is allowed.",
      "Turing test: a proposed way to discuss machine intelligence through conversation and behaviour.",
      "Reaction-diffusion patterns: interacting chemicals diffusing at different rates can create biological patterns such as spots and stripes.",
    ],
    contributions: [
      { title: "Computable numbers", period: "1936", description: "Turing introduced an abstract machine model and used it to analyze which problems can be solved by mechanical procedures." },
      { title: "Bletchley Park codebreaking", period: "1939–1945", description: "He helped design cryptanalytic methods and machines that accelerated the reading of encrypted communications." },
      { title: "Machine intelligence", period: "1950", description: "Turing proposed an operational test for whether a machine's responses could be considered intelligent." },
    ],
    definingWork: { title: "On Computable Numbers", date: "1936", description: "The paper defined computation using an abstract automatic machine and proved the undecidability of the halting problem.", significance: "It became a theoretical foundation of computer science." },
    artifact: { title: "Bombe codebreaking machine", date: "1940", kind: "Historic apparatus", description: "The Bombe was an electromechanical machine used to test possible Enigma settings efficiently.", significance: "It shows how mathematical reasoning and engineering combined in wartime cryptanalysis.", image: { fileName: "Bombe-rebuild.jpg", alt: "Rebuilt Bombe codebreaking machine", credit: "Tom Yates", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bombe-rebuild.jpg" } },
    legacy: ["Turing's abstract model shaped programming languages, algorithms and computer architecture.", "His wartime contributions became central to the history of cryptography.", "His persecution for homosexuality is now widely recognized as a grave injustice."],
    portrait: { fileName: "Alan Turing aged 16.jpg", alt: "Portrait of Alan Turing as a teenager", credit: "Unknown", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Alan_Turing_aged_16.jpg", objectPosition: "50% 20%" },
    sources: [
      { label: "Alan Turing", url: "https://www.turing.org.uk/", publisher: "The Turing Archive" },
      { label: "Turing at Bletchley Park", url: "https://bletchleypark.org.uk/roll-of-honour/alan-mathison-turing/", publisher: "Bletchley Park" },
      { label: "On Computable Numbers", url: "https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf", publisher: "Proceedings of the London Mathematical Society" },
    ],
  },
  {
    rank: 17,
    slug: "srinivasa-ramanujan",
    fullName: "Srinivasa Ramanujan",
    life: "1887–1920",
    birthplace: "Erode, Madras Presidency, British India",
    primaryFields: ["Mathematics", "Number Theory", "Analysis"],
    headline: "His extraordinary formulas reshaped number theory, partitions and infinite series.",
    overview: ["Srinivasa Ramanujan developed thousands of mathematical results, many recorded in notebooks before he received formal academic recognition.", "His collaboration with G. H. Hardy in Cambridge brought deep work on partitions, modular forms, series and highly composite numbers to wider attention."],
    knownFor: ["Ramanujan notebooks", "Partition function", "Mock theta functions", "Infinite series", "Highly composite numbers"],
    earlyLife: [
      "Ramanujan was born in Erode and grew up in Kumbakonam, South India. He was largely self-taught in advanced mathematics after encountering a book of formulas that became a gateway into number theory and infinite series.",
      "Because he focused intensely on mathematics, he struggled with formal college requirements in other subjects and lost scholarships. Poverty and lack of institutional support made his path extremely difficult.",
    ],
    inspiration: [
      "Ramanujan was inspired by patterns in numbers, partitions, series and continued fractions. He often wrote results first and supplied proofs later, guided by a powerful intuition.",
      "His correspondence with G. H. Hardy at Cambridge changed his life because Hardy recognised that the notebooks contained original mathematics, not ordinary exercises.",
    ],
    challenges: [
      "Ramanujan faced colonial distance, poverty, illness and cultural adjustment when he moved to England during World War I. Food restrictions, cold weather and isolation likely worsened his health.",
      "Some contemporaries struggled to understand his methods because many results appeared without conventional proofs, yet later mathematicians confirmed and extended much of his work.",
    ],
    lawsAndIdeas: [
      "Partition function: Ramanujan found deep congruences and asymptotic formulas describing ways to write numbers as sums.",
      "Mock theta functions: mysterious q-series that later became important in modern number theory and modular forms.",
      "Infinite series for pi: some of his formulas converge extremely rapidly and influenced later computational mathematics.",
      "Ramanujan-Hardy number 1729: the smallest number expressible as the sum of two positive cubes in two different ways.",
    ],
    contributions: [
      { title: "Partition formulas", period: "1910s", description: "Ramanujan discovered congruences and asymptotic ideas for the number of ways integers can be partitioned." },
      { title: "Infinite series", period: "1910s", description: "He produced striking rapidly converging series, including formulas later useful in high-precision computation." },
      { title: "Mock theta functions", period: "1920", description: "His final letters introduced mysterious functions that became important in modern modular-form theory." },
    ],
    definingWork: { title: "Ramanujan's notebooks and collected papers", date: "1903–1920", description: "The notebooks preserve a huge collection of identities, formulas and conjectures, many stated without proof.", significance: "They provided decades of research problems and discoveries for later mathematicians." },
    artifact: { title: "Ramanujan manuscript pages", date: "1910s", kind: "Historic document", description: "Notebook pages show dense formulas and identities from Ramanujan's mathematical investigations.", significance: "They capture one of the most productive mathematical imaginations of the twentieth century.", image: { fileName: "Ramanujan manuscript.jpg", alt: "Ramanujan manuscript page", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ramanujan_manuscript.jpg" } },
    legacy: ["Ramanujan's formulas continue to influence number theory and mathematical physics.", "His life is a powerful example of talent emerging outside conventional institutions.", "The Ramanujan Journal and many awards keep his mathematical legacy active."],
    portrait: { fileName: "Srinivasa Ramanujan - OPC - 1.jpg", alt: "Portrait of Srinivasa Ramanujan", credit: "Oberwolfach Photo Collection", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Srinivasa_Ramanujan_-_OPC_-_1.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Srinivasa Ramanujan", url: "https://www.britannica.com/biography/Srinivasa-Ramanujan", publisher: "Encyclopaedia Britannica" },
      { label: "Ramanujan biography", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Ramanujan/", publisher: "MacTutor History of Mathematics" },
      { label: "Ramanujan notebooks", url: "https://www.imsc.res.in/~rao/ramanujan/", publisher: "Institute of Mathematical Sciences" },
    ],
  },
  {
    rank: 18,
    slug: "ada-lovelace",
    fullName: "Ada Lovelace",
    life: "1815–1852",
    birthplace: "London, England",
    primaryFields: ["Mathematics", "Computing", "Logic"],
    headline: "She saw that a calculating machine could manipulate symbols, not only numbers.",
    overview: ["Ada Lovelace wrote extensive notes on Charles Babbage's proposed Analytical Engine.", "Her notes included an algorithmic procedure for Bernoulli numbers and a broader vision that machines might operate on symbols according to rules."],
    knownFor: ["Analytical Engine notes", "Early computer algorithm", "Symbolic computing vision", "Bernoulli-number procedure"],
    earlyLife: [
      "Ada Lovelace was the daughter of poet Lord Byron and Annabella Milbanke. Her mother encouraged mathematics and logic partly to steer Ada away from what she saw as Byron's instability.",
      "She received unusual scientific tutoring for a woman of her class and era, including instruction from Mary Somerville and Augustus De Morgan.",
    ],
    inspiration: [
      "Lovelace was inspired by Charles Babbage's Analytical Engine, but she saw more than a calculating machine. She imagined that a machine manipulating symbols could one day work with music, text or other forms if they were represented logically.",
      "Her imagination joined mathematics with creativity, which is why her story is important for computing.",
    ],
    challenges: [
      "Victorian society limited women's formal scientific roles, so Lovelace worked through correspondence, translation and notes rather than a university post. Her health was also fragile.",
      "Babbage's machine was never completed in their lifetimes, so her program and vision remained theoretical for many years.",
    ],
    lawsAndIdeas: [
      "Algorithmic thinking: Lovelace described a step-by-step method for the Analytical Engine to compute Bernoulli numbers.",
      "General-purpose computing: she understood that a programmable machine could manipulate symbols, not only arithmetic quantities.",
      "Separation of machine and program: instructions could guide hardware to perform different tasks.",
      "Limits of machines: she argued that machines follow operations we know how to order, raising early questions about creativity and intelligence.",
    ],
    contributions: [
      { title: "Translation and notes", period: "1843", description: "Lovelace translated an article on Babbage's engine and added notes far longer than the original text." },
      { title: "Algorithmic table", period: "1843", description: "Her notes described steps the Analytical Engine could use to calculate Bernoulli numbers." },
      { title: "Computing vision", period: "1843", description: "She argued that the engine could act on any objects whose relations could be expressed symbolically." },
    ],
    definingWork: { title: "Notes on the Analytical Engine", date: "1843", description: "The notes explained the machine's design, operations and potential uses beyond ordinary arithmetic.", significance: "They are a landmark in the conceptual history of computing." },
    artifact: { title: "Analytical Engine diagram", date: "1840s", kind: "Historic document", description: "Drawings and descriptions of Babbage's proposed engine show the mechanical architecture Lovelace analyzed.", significance: "The design anticipated programmable computing concepts long before electronic computers existed.", image: { fileName: "AnalyticalMachine Babbage London.jpg", alt: "Portion of Babbage's Analytical Engine", credit: "Bruno Barral", license: "CC BY-SA 2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:AnalyticalMachine_Babbage_London.jpg" } },
    legacy: ["Lovelace is celebrated as an early thinker about programmable machines.", "Her writing highlights the connection between mathematics, symbols and creativity.", "Ada programming language and Ada Lovelace Day preserve her name in computing culture."],
    portrait: { fileName: "Ada Lovelace portrait.jpg", alt: "Portrait of Ada Lovelace", credit: "Alfred Edward Chalon", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Ada_Lovelace_portrait.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Ada Lovelace", url: "https://www.britannica.com/biography/Ada-Lovelace", publisher: "Encyclopaedia Britannica" },
      { label: "Lovelace and the Analytical Engine", url: "https://www.computerhistory.org/babbage/adalovelace/", publisher: "Computer History Museum" },
      { label: "Sketch of the Analytical Engine", url: "https://www.fourmilab.ch/babbage/sketch.html", publisher: "Fourmilab" },
    ],
  },
  {
    rank: 19,
    slug: "rosalind-franklin",
    fullName: "Rosalind Franklin",
    life: "1920–1958",
    birthplace: "London, England",
    primaryFields: ["Chemistry", "Molecular Biology", "X-ray Crystallography"],
    headline: "Her X-ray diffraction work supplied crucial evidence for the structure of DNA.",
    overview: ["Rosalind Franklin used X-ray crystallography to study carbon structures, DNA and viruses.", "At King's College London, her high-quality DNA diffraction images and analysis helped reveal the helical structure and dimensions of DNA."],
    knownFor: ["DNA X-ray diffraction", "Photo 51", "Coal and carbon research", "Virus structure studies", "Crystallography"],
    earlyLife: [
      "Franklin grew up in London in a family that valued public service and education. She studied chemistry at Cambridge and became highly skilled in X-ray diffraction through work on coal and carbon structures.",
      "Her technical discipline made her especially strong at extracting reliable information from difficult diffraction images.",
    ],
    inspiration: [
      "Franklin was inspired by molecular structure: understanding the physical arrangement of atoms could explain biological function. At King's College London she applied X-ray diffraction to DNA fibres.",
      "She insisted on careful evidence, distinguishing between different forms of DNA rather than rushing to a model.",
    ],
    challenges: [
      "Franklin worked in a male-dominated environment with difficult relationships at King's College. Data from her work, including Photo 51, influenced Watson and Crick's model, but she did not receive equal public credit during her lifetime.",
      "She died of ovarian cancer at 37, before the Nobel Prize for the DNA structure was awarded; Nobel Prizes are not awarded posthumously.",
    ],
    lawsAndIdeas: [
      "X-ray diffraction of DNA: the cross-shaped pattern indicated a helical structure.",
      "DNA forms: Franklin distinguished hydrated B-DNA from drier A-DNA, avoiding misleading conclusions.",
      "Structural biology principle: biological function can depend on precise molecular shape.",
      "Virus structure work: after DNA, she made important contributions to the study of tobacco mosaic virus.",
    ],
    contributions: [
      { title: "Carbon research", period: "1940s", description: "Franklin analyzed coal and carbon microstructures, improving understanding of their physical properties." },
      { title: "DNA diffraction", period: "1951–1953", description: "Her images and measurements showed features consistent with a helical molecule and informed DNA models." },
      { title: "Virus crystallography", period: "1950s", description: "She later studied the structure of tobacco mosaic virus and other biological materials." },
    ],
    definingWork: { title: "Molecular configuration in sodium thymonucleate", date: "1953", description: "Franklin and Raymond Gosling published X-ray evidence for DNA structure in the same journal issue as Watson and Crick's model.", significance: "The evidence was essential to the development and validation of the double-helix model." },
    artifact: { title: "Photo 51", date: "1952", kind: "Historic document", description: "The X-ray diffraction image produced by Franklin's student Raymond Gosling under her supervision showed a pattern characteristic of helical DNA.", significance: "It became one of the most famous experimental images in molecular biology." , image: { fileName: "Photo 51 x-ray diffraction image.jpg", alt: "X-ray diffraction image known as Photo 51", credit: "Raymond Gosling / King's College London", license: "Fair use referenced", sourceUrl: "https://commons.wikimedia.org/wiki/File:Photo_51_x-ray_diffraction_image.jpg" } },
    legacy: ["Franklin's work is central to the history of molecular biology.", "Her career highlights the importance of experimental evidence and proper recognition.", "Her later virus research also contributed to structural biology."],
    portrait: { fileName: "Rosalind Franklin.jpg", alt: "Portrait of Rosalind Franklin", credit: "MRC Laboratory of Molecular Biology", license: "CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rosalind_Franklin.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Rosalind Franklin", url: "https://profiles.nlm.nih.gov/spotlight/kr", publisher: "U.S. National Library of Medicine" },
      { label: "DNA double helix history", url: "https://www.nature.com/scitable/topicpage/discovery-of-dna-structure-and-function-watson-397/", publisher: "Nature Education" },
      { label: "Franklin biography", url: "https://www.britannica.com/biography/Rosalind-Franklin", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 20,
    slug: "jane-goodall",
    fullName: "Jane Goodall",
    life: "1934–present",
    birthplace: "London, England",
    primaryFields: ["Primatology", "Ethology", "Conservation"],
    headline: "Her chimpanzee research changed how scientists understand animal behavior and conservation.",
    overview: ["Jane Goodall began long-term field observations of chimpanzees at Gombe Stream in Tanzania.", "She documented tool use, social bonds, hunting, conflict and individual personalities, challenging assumptions about a sharp divide between humans and other animals."],
    knownFor: ["Gombe chimpanzee research", "Chimpanzee tool use", "Animal behavior", "Conservation advocacy", "Roots & Shoots"],
    earlyLife: [
      "Jane Goodall grew up in England with a strong love of animals and Africa. She did not begin with a university science degree; instead, her patience and observational talent led Louis Leakey to support her fieldwork at Gombe Stream in Tanzania.",
      "Her early life shows that scientific ability can also come from curiosity, discipline and direct observation, not only formal credentials.",
    ],
    inspiration: [
      "Goodall was inspired by animal behaviour and the possibility of understanding chimpanzees as individuals with social lives, emotions and cultures.",
      "She named chimpanzees rather than numbering them, a choice criticised by some scientists but important to her observational approach.",
    ],
    challenges: [
      "Goodall worked during colonial and post-colonial transitions in East Africa and faced skepticism as a young woman without a conventional academic path. Some objected to her methods because they seemed too personal.",
      "Habitat loss, hunting and disease later shifted her work from observation to conservation and activism.",
    ],
    lawsAndIdeas: [
      "Tool use in chimpanzees: Goodall observed chimpanzees making and using tools to fish for termites, challenging the idea that humans alone used tools.",
      "Primate social behaviour: long-term observation revealed dominance, bonding, hunting, conflict and care among chimpanzees.",
      "Animal culture: behaviours can be learned and passed through groups.",
      "Conservation science: protecting species requires protecting habitats and working with local communities.",
    ],
    contributions: [
      { title: "Tool use observations", period: "1960", description: "Goodall observed chimpanzees modifying and using sticks to fish for termites, altering definitions of human uniqueness." },
      { title: "Long-term field study", period: "1960 onward", description: "Her research program followed individuals and communities across generations." },
      { title: "Conservation education", period: "1970s onward", description: "Goodall expanded from research into habitat protection, animal welfare and youth environmental action." },
    ],
    definingWork: { title: "In the Shadow of Man", date: "1971", description: "Goodall's book brought detailed chimpanzee behavior and field science to a broad audience.", significance: "It helped reshape public understanding of primates and encouraged conservation awareness." },
    artifact: { title: "Gombe field notebooks", date: "1960s onward", kind: "Historic document", description: "Field notes recorded chimpanzee individuals, behaviors and social relationships over long periods.", significance: "They demonstrate the value of patient, continuous observation in behavioral science.", image: { fileName: "Jane Goodall 2015.jpg", alt: "Jane Goodall in 2015", credit: "Erik Hersman", license: "CC BY 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jane_Goodall_2015.jpg", objectPosition: "50% 18%" } },
    legacy: ["Goodall helped make long-term primate field research a model for behavioral science.", "Her work strengthened arguments for protecting chimpanzees and their habitats.", "Her education programs connect science learning with environmental responsibility."],
    portrait: { fileName: "Jane Goodall 2015.jpg", alt: "Jane Goodall in 2015", credit: "Erik Hersman", license: "CC BY 2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Jane_Goodall_2015.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Jane Goodall biography", url: "https://janegoodall.org/our-story/about-jane/", publisher: "Jane Goodall Institute" },
      { label: "Gombe research", url: "https://www.janegoodall.org/our-work/our-approach/research/", publisher: "Jane Goodall Institute" },
      { label: "Jane Goodall", url: "https://www.britannica.com/biography/Jane-Goodall", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 21,
    slug: "rachel-carson",
    fullName: "Rachel Carson",
    life: "1907–1964",
    birthplace: "Springdale, Pennsylvania, United States",
    primaryFields: ["Marine Biology", "Ecology", "Environmental Science"],
    headline: "She helped launch modern environmental awareness through science writing.",
    overview: ["Rachel Carson trained as a marine biologist and became an influential writer about oceans and ecology.", "Silent Spring connected pesticide use with ecological harm and public health concerns, encouraging environmental regulation and public debate."],
    knownFor: ["Silent Spring", "Marine biology writing", "Pesticide awareness", "Environmental movement", "Ecological interdependence"],
    earlyLife: [
      "Rachel Carson grew up in Pennsylvania and loved both writing and the natural world. She studied biology and worked for the U.S. Fish and Wildlife Service, where she learned to communicate science clearly to the public.",
      "Her early books on the sea made her a respected nature writer before Silent Spring made her a central environmental figure.",
    ],
    inspiration: [
      "Carson was inspired by ecology: the idea that living systems are connected and that chemicals released into one part of nature can move through food webs and affect many species.",
      "She investigated pesticides after evidence accumulated that chemicals such as DDT harmed birds, fish and possibly humans.",
    ],
    challenges: [
      "Chemical companies attacked Carson personally and professionally, sometimes portraying her as emotional or anti-progress. She was also seriously ill with cancer while completing Silent Spring.",
      "Her work appeared during the Cold War era, when technological optimism was strong and criticism of industry could be treated as suspicious.",
    ],
    lawsAndIdeas: [
      "Bioaccumulation: persistent chemicals can build up in organisms over time.",
      "Biomagnification: toxins can become more concentrated higher in the food chain.",
      "Ecological interdependence: harming insects, birds, soil or water can affect whole systems.",
      "Precautionary environmental thinking: new technologies should be judged by long-term ecological consequences, not only short-term benefits.",
    ],
    contributions: [
      { title: "Ocean science writing", period: "1940s–1950s", description: "Carson explained marine ecosystems in books that combined scientific accuracy with literary clarity." },
      { title: "Pesticide critique", period: "1962", description: "Silent Spring presented evidence that persistent chemicals could move through food webs and harm wildlife." },
      { title: "Public environmental science", period: "1960s", description: "Her work showed how scientific evidence could shape policy and citizen action." },
    ],
    definingWork: { title: "Silent Spring", date: "1962", description: "The book examined the ecological and health risks of indiscriminate pesticide use, especially DDT.", significance: "It is widely associated with the growth of modern environmental regulation and awareness." },
    artifact: { title: "Silent Spring first edition", date: "1962", kind: "Historic document", description: "Carson's book organized scientific evidence into a public argument about chemical pollution.", significance: "It demonstrated the power of science communication to affect policy and public values.", image: { fileName: "Rachel-Carson.jpg", alt: "Portrait of Rachel Carson", credit: "U.S. Fish and Wildlife Service", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rachel-Carson.jpg", objectPosition: "50% 18%" } },
    legacy: ["Carson helped make ecology part of everyday public conversation.", "Her work influenced pesticide regulation and environmental policy.", "She remains a model for science writing that is rigorous and accessible."],
    portrait: { fileName: "Rachel-Carson.jpg", alt: "Portrait of Rachel Carson", credit: "U.S. Fish and Wildlife Service", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Rachel-Carson.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Rachel Carson", url: "https://www.rachelcarson.org/", publisher: "Rachel Carson Council" },
      { label: "Rachel Carson biography", url: "https://www.britannica.com/biography/Rachel-Carson", publisher: "Encyclopaedia Britannica" },
      { label: "Silent Spring impact", url: "https://www.epa.gov/history/silent-spring", publisher: "U.S. Environmental Protection Agency" },
    ],
  },
  {
    rank: 22,
    slug: "ibn-al-haytham",
    fullName: "Ibn al-Haytham",
    life: "c. 965–c. 1040",
    birthplace: "Basra, Abbasid Caliphate",
    primaryFields: ["Optics", "Mathematics", "Astronomy"],
    headline: "He transformed optics with experiments on vision, light and the camera obscura.",
    overview: ["Ibn al-Haytham, also known as Alhazen, wrote a major Book of Optics that rejected emission theories of vision and argued that sight depends on light entering the eye.", "His work combined geometry, observation and controlled experiment, making him a central figure in medieval science."],
    knownFor: ["Book of Optics", "Vision theory", "Camera obscura", "Experimental optics", "Geometrical optics"],
    earlyLife: [
      "Ibn al-Haytham was born in Basra during the Islamic Golden Age, when scholarship in mathematics, medicine, astronomy and philosophy flourished across major cities. He later worked in Cairo and spent time under restricted conditions after a failed Nile engineering proposal.",
      "That period of confinement is traditionally linked to intense study and writing, including his major work on optics.",
    ],
    inspiration: [
      "He was inspired by problems in vision: do eyes send out rays, or does light enter the eye? He tested explanations using geometry, observation and experiment.",
      "His work combined Greek mathematical traditions with new experimental methods.",
    ],
    challenges: [
      "Ibn al-Haytham lived under powerful rulers, and stories about his failed promise to regulate the Nile show how dangerous court patronage could be. Scholars often depended on political protection but could suffer when expectations were not met.",
      "His conclusions challenged older emission theories of vision associated with authorities such as Euclid and Ptolemy.",
    ],
    lawsAndIdeas: [
      "Intromission theory of vision: sight occurs when light reflected from objects enters the eye.",
      "Camera obscura: light passing through a small opening projects an inverted image, demonstrating straight-line travel of light.",
      "Experimental method: hypotheses about light should be tested with controlled observations.",
      "Reflection and refraction studies: geometry can describe how light changes direction at surfaces and through media.",
    ],
    contributions: [
      { title: "Theory of vision", period: "11th century", description: "He argued that vision occurs when light from objects enters the eye, not because rays leave the eye." },
      { title: "Camera obscura", period: "11th century", description: "He analyzed image formation through small apertures, explaining why images appear inverted." },
      { title: "Experimental method", period: "11th century", description: "His optical investigations used tests, geometry and critical evaluation of earlier authorities." },
    ],
    definingWork: { title: "Kitab al-Manazir / Book of Optics", date: "c. 1020s", description: "A seven-volume study of light, vision, reflection, refraction and visual perception.", significance: "It influenced later Islamic and European optical science for centuries." },
    artifact: { title: "Latin manuscript of the Book of Optics", date: "Medieval copies", kind: "Historic document", description: "Manuscripts transmitted Ibn al-Haytham's optical theories across scholarly cultures.", significance: "They show how scientific ideas moved through translation, commentary and teaching.", image: { fileName: "Alhazen page.jpg", alt: "Manuscript page associated with Ibn al-Haytham's optics", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Alhazen_page.jpg" } },
    legacy: ["His optics influenced thinkers such as Roger Bacon and Kepler.", "He is often highlighted for experimental reasoning in medieval science.", "Camera obscura principles later contributed to photography and imaging."],
    portrait: { fileName: "Alhazen.jpg", alt: "Idealized portrait of Ibn al-Haytham", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Alhazen.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Ibn al-Haytham", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Haytham/", publisher: "MacTutor History of Mathematics" },
      { label: "Ibn al-Haytham and optics", url: "https://www.ibnalhaytham.com/", publisher: "1001 Inventions" },
      { label: "Book of Optics", url: "https://www.britannica.com/biography/Ibn-al-Haytham", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 23,
    slug: "archimedes",
    fullName: "Archimedes of Syracuse",
    life: "c. 287–212 BCE",
    birthplace: "Syracuse, Sicily",
    primaryFields: ["Mathematics", "Physics", "Engineering"],
    headline: "He joined geometry, mechanics and invention with extraordinary originality.",
    overview: ["Archimedes developed powerful results in geometry, hydrostatics and mechanics.", "His methods anticipated integral reasoning, and his work on levers, centres of gravity and buoyancy became foundational for mathematical physics."],
    knownFor: ["Archimedes' principle", "Law of the lever", "Approximation of pi", "Method of exhaustion", "Screw pump"],
    earlyLife: [
      "Archimedes lived in Syracuse, a Greek city in Sicily, and probably studied or communicated with scholars connected to Alexandria. His world combined mathematics, engineering, warfare and royal patronage.",
      "He became famous both for abstract geometry and for practical machines, a rare combination even in antiquity.",
    ],
    inspiration: [
      "Archimedes was inspired by exact reasoning. He wanted to prove results about areas, volumes, centres of gravity and mechanical advantage with unmatched rigour.",
      "Practical problems from Syracuse, including defence and measurement, also stimulated his engineering work.",
    ],
    challenges: [
      "Archimedes lived during the Punic Wars, when Syracuse became caught between Rome and Carthage. Ancient accounts say he designed defensive machines during the Roman siege and was killed after the city fell.",
      "His death symbolises how war can destroy knowledge even when rulers admire it.",
    ],
    lawsAndIdeas: [
      "Archimedes' principle: a body immersed in fluid experiences an upward buoyant force equal to the weight of the fluid it displaces.",
      "Law of the lever: magnitudes balance at distances inversely proportional to their weights.",
      "Method of exhaustion: areas and volumes can be found by bounding shapes with increasingly fine approximations, anticipating integral ideas.",
      "Approximation of pi: he bounded pi using polygons inscribed and circumscribed around a circle.",
    ],
    contributions: [
      { title: "Buoyancy", period: "3rd century BCE", description: "Archimedes explained that an immersed body experiences an upward force related to displaced fluid." },
      { title: "Geometry of circles and spheres", period: "3rd century BCE", description: "He calculated areas and volumes with methods close to later integral ideas." },
      { title: "Mechanics", period: "3rd century BCE", description: "His analysis of levers and centres of gravity connected mathematical proof with physical machines." },
    ],
    definingWork: { title: "On Floating Bodies", date: "3rd century BCE", description: "This treatise developed principles of hydrostatics and equilibrium for bodies in fluids.", significance: "It remains one of the earliest major works of mathematical physics." },
    artifact: { title: "Archimedes Palimpsest", date: "Medieval copy of ancient works", kind: "Historic document", description: "A reused parchment preserves unique copies of works by Archimedes, including The Method.", significance: "It revealed details of Archimedes' mathematical reasoning that had been lost for centuries.", image: { fileName: "Archimedes Palimpsest.jpg", alt: "Archimedes Palimpsest manuscript", credit: "Walters Art Museum", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Archimedes_Palimpsest.jpg" } },
    legacy: ["Archimedes is a central figure in the history of geometry and mechanics.", "His results are still taught in mathematics, physics and engineering.", "The Archimedes Palimpsest continues to illuminate ancient mathematical practice."],
    portrait: { fileName: "Archimedes (Ideal portrait).jpg", alt: "Idealized portrait of Archimedes", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Archimedes_(Ideal_portrait).jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Archimedes", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Archimedes/", publisher: "MacTutor History of Mathematics" },
      { label: "Archimedes Palimpsest", url: "https://www.archimedespalimpsest.org/", publisher: "The Archimedes Palimpsest" },
      { label: "Archimedes", url: "https://www.britannica.com/biography/Archimedes", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 24,
    slug: "hypatia",
    fullName: "Hypatia of Alexandria",
    life: "c. 350–415",
    birthplace: "Alexandria, Egypt",
    primaryFields: ["Mathematics", "Astronomy", "Philosophy"],
    headline: "She became one of late antiquity's most famous teachers of mathematics and philosophy.",
    overview: ["Hypatia taught mathematics, astronomy and philosophy in Alexandria during a period of religious and political tension.", "Although her own writings survive only indirectly, ancient sources associate her with commentaries, teaching and instruments such as the astrolabe."],
    knownFor: ["Teaching in Alexandria", "Mathematical commentaries", "Astronomy", "Philosophy", "Symbol of learning"],
    earlyLife: [
      "Hypatia was born in Alexandria, one of the ancient world's great centres of learning. Her father Theon was a mathematician and astronomer, and she became a teacher of philosophy, mathematics and astronomy.",
      "Because few writings under her own name survive, much of what is known comes through students, letters and later historical accounts.",
    ],
    inspiration: [
      "Hypatia was inspired by the mathematical and philosophical traditions of Alexandria. She taught difficult works by authors such as Euclid, Ptolemy and Diophantus, preserving and explaining them for students.",
      "Her role shows that teaching and commentary can be as important to science as discovery, because knowledge survives through transmission.",
    ],
    challenges: [
      "Hypatia lived during intense religious and political conflict in late Roman Alexandria. Her association with civic leaders placed her in the middle of factional struggles between political and church authorities.",
      "She was murdered by a mob in 415 CE, an unfortunate and violent incident that became a lasting symbol of attacks on learning and intellectual freedom.",
    ],
    lawsAndIdeas: [
      "Mathematical commentary: explaining and editing advanced texts helped preserve Greek mathematics.",
      "Astronomical instruments: accounts connect her circle with astrolabes and devices used to model the heavens.",
      "Neoplatonic teaching: mathematics was treated as part of a broader philosophical education.",
      "Scientific preservation: Hypatia's importance lies in sustaining a scholarly tradition during a period of institutional change.",
    ],
    contributions: [
      { title: "Mathematical teaching", period: "Late 4th–early 5th century", description: "Hypatia led an influential school where students studied mathematics, astronomy and philosophy." },
      { title: "Commentary tradition", period: "Late antiquity", description: "She is associated with preserving and explaining mathematical texts by authors such as Diophantus and Apollonius." },
      { title: "Scientific instruments", period: "Late antiquity", description: "Letters from her circle mention devices such as astrolabes and hydrometers used for observation and measurement." },
    ],
    definingWork: { title: "Teaching and commentaries in Alexandria", date: "c. 400", description: "Hypatia's influence is known through students and later writers rather than surviving signed books.", significance: "Her career shows the importance of teaching, commentary and preservation in scientific history." },
    artifact: { title: "Astrolabe tradition", date: "Late antiquity and later", kind: "Historic apparatus", description: "Astrolabes helped model the sky and solve astronomical problems; Hypatia's circle discussed such instruments.", significance: "The instrument represents the mathematical astronomy taught in Alexandria.", image: { fileName: "Astrolabe-Persian-18C.jpg", alt: "Historical astrolabe", credit: "Wikimedia Commons", license: "CC BY-SA", sourceUrl: "https://commons.wikimedia.org/wiki/File:Astrolabe-Persian-18C.jpg" } },
    legacy: ["Hypatia is remembered as a major woman intellectual of the ancient Mediterranean.", "Her life points to Alexandria's role as a centre of mathematics and learning.", "Her death became a lasting symbol of violence against scholarship."],
    portrait: { fileName: "Hypatia portrait.png", alt: "Idealized portrait of Hypatia", credit: "Wikimedia Commons", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Hypatia_portrait.png", objectPosition: "50% 18%" },
    sources: [
      { label: "Hypatia", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Hypatia/", publisher: "MacTutor History of Mathematics" },
      { label: "Hypatia of Alexandria", url: "https://www.britannica.com/biography/Hypatia", publisher: "Encyclopaedia Britannica" },
      { label: "Women in science history", url: "https://www.britannica.com/science/history-of-science/Women-in-science", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 25,
    slug: "subrahmanyan-chandrasekhar",
    fullName: "Subrahmanyan Chandrasekhar",
    life: "1910–1995",
    birthplace: "Lahore, British India",
    primaryFields: ["Astrophysics", "Physics", "Mathematics"],
    headline: "He showed how quantum physics sets a mass limit for white dwarf stars.",
    overview: ["Subrahmanyan Chandrasekhar applied relativity and quantum statistics to the structure of stars.", "His work on white dwarfs led to the Chandrasekhar limit, a mass threshold with deep consequences for supernovae, neutron stars and black holes."],
    knownFor: ["Chandrasekhar limit", "Stellar structure", "Radiative transfer", "Black-hole mathematics", "Nobel Prize in Physics"],
    earlyLife: [
      "Chandrasekhar was born in Lahore in British India into a highly educated family; C. V. Raman was his uncle. He studied physics in Madras and, while travelling by ship to Cambridge, began calculations about white dwarf stars.",
      "That early voyage became scientifically important because it gave him time to combine relativity with quantum statistics.",
    ],
    inspiration: [
      "He was inspired by the new physics of the twentieth century: quantum mechanics, relativity and astrophysics. He wanted to understand the life cycle of stars with precise mathematics.",
      "His career shows a pattern of mastering a field deeply, writing a major book, then moving to another difficult problem.",
    ],
    challenges: [
      "Chandrasekhar faced strong public criticism from Arthur Eddington, who rejected the white-dwarf mass limit at a major scientific meeting. The criticism was a painful professional setback, especially for a young Indian scientist in Britain.",
      "He continued the work despite resistance, and later generations recognised the Chandrasekhar limit as fundamental to stellar evolution.",
    ],
    lawsAndIdeas: [
      "Chandrasekhar limit: a white dwarf cannot be supported by electron degeneracy pressure above about 1.4 solar masses.",
      "Stellar evolution: stars above the limit must collapse further, leading toward neutron stars, black holes or supernova events.",
      "Radiative transfer: mathematical rules describe how radiation moves through and interacts with stellar matter.",
      "Black-hole mathematics: his later work clarified the stability and structure of black-hole solutions in general relativity.",
    ],
    contributions: [
      { title: "White dwarf theory", period: "1930s", description: "Chandrasekhar calculated that electron degeneracy pressure cannot support a white dwarf above a critical mass." },
      { title: "Radiative transfer", period: "1940s–1950s", description: "He developed mathematical treatments of how radiation moves through stellar atmospheres." },
      { title: "Black-hole theory", period: "1970s–1980s", description: "Chandrasekhar later wrote influential work on the mathematical theory of black holes." },
    ],
    definingWork: { title: "The Maximum Mass of Ideal White Dwarfs", date: "1931", description: "This research established a limiting mass for white dwarfs using quantum and relativistic physics.", significance: "The limit became essential for understanding stellar evolution and compact objects." },
    artifact: { title: "White dwarf mass-limit calculation", date: "1930s", kind: "Historic document", description: "Chandrasekhar's calculations connected microscopic electron physics to the fate of stars.", significance: "They showed that quantum mechanics can determine astronomical outcomes.", image: { fileName: "Chandra.harvard.500pix.jpg", alt: "Portrait of Subrahmanyan Chandrasekhar", credit: "Harvard-Smithsonian Center for Astrophysics", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chandra.harvard.500pix.jpg", objectPosition: "50% 18%" } },
    legacy: ["The Chandrasekhar limit is central to astrophysics and supernova theory.", "His books shaped generations of researchers in stellar dynamics and radiative transfer.", "NASA's Chandra X-ray Observatory is named in his honour."],
    portrait: { fileName: "Chandra.harvard.500pix.jpg", alt: "Portrait of Subrahmanyan Chandrasekhar", credit: "Harvard-Smithsonian Center for Astrophysics", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Chandra.harvard.500pix.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Subrahmanyan Chandrasekhar — facts", url: "https://www.nobelprize.org/prizes/physics/1983/chandrasekhar/facts/", publisher: "Nobel Prize" },
      { label: "Chandrasekhar biography", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Chandrasekhar/", publisher: "MacTutor History of Mathematics" },
      { label: "Chandra Observatory namesake", url: "https://chandra.harvard.edu/about/chandra.html", publisher: "NASA Chandra X-ray Center" },
    ],
  },
  {
    rank: 26,
    slug: "johannes-kepler",
    fullName: "Johannes Kepler",
    life: "1571–1630",
    birthplace: "Weil der Stadt, Duchy of Württemberg, Holy Roman Empire",
    primaryFields: ["Astronomy", "Mathematics", "Optics", "Physics"],
    headline: "The man who broke the circle and gave the planets their true shape.",
    overview: [
      "Johannes Kepler replaced two thousand years of circular planetary theory with three precise mathematical laws. Working from Tycho Brahe's observations, he showed that planets travel on ellipses, sweep equal areas in equal times, and obey a fixed relationship between orbital period and distance from the Sun.",
      "He was equally serious as an optician and a mathematician: he explained how the eye forms images, designed an improved telescope still called the Keplerian design, and posed a sphere-packing conjecture that remained open for nearly four centuries. He did all of this while being expelled from cities for his faith and defending his mother against a capital witchcraft charge.",
    ],
    knownFor: [
      "Three laws of planetary motion",
      "Elliptical orbits replacing circles",
      "The Keplerian refracting telescope",
      "Rudolphine Tables",
      "The Kepler conjecture on sphere packing",
    ],
    earlyLife: [
      "Kepler was born prematurely into a struggling family in the free imperial city of Weil der Stadt. His father Heinrich was a mercenary who left when Johannes was about five and never returned. His mother Katharina, an innkeeper's daughter and herbalist, showed him the Great Comet of 1577 and a lunar eclipse in 1580 — sights he still recalled vividly in adulthood.",
      "A childhood bout of smallpox left him with weakened eyesight and damaged hands, closing off practical observing but not mathematics. Scholarships carried him through Lutheran schools to the University of Tübingen, where he studied for the ministry until his teacher Michael Maestlin privately introduced him to Copernican astronomy.",
    ],
    inspiration: [
      "Kepler's driving conviction was theological as much as scientific: he believed God had built the cosmos on a geometric plan, and that finding the plan was an act of worship. His first book tried to explain planetary distances using the five Platonic solids nested inside one another — a beautiful idea that turned out to be wrong, but which won him the attention of Europe's leading astronomers.",
      "The decisive influence was Tycho Brahe's data. Tycho had spent decades recording planetary positions to an accuracy no one had matched, and Kepler recognised that this precision could settle questions that philosophy alone could not.",
    ],
    challenges: [
      "As a committed Lutheran in Counter-Reformation territory, Kepler was repeatedly expelled or threatened with expulsion. He also refused to sign the Formula of Concord, which cost him communion with his own Lutheran church — leaving him distrusted by both Catholics and Protestants.",
      "Between 1615 and 1621 his mother Katharina was accused of witchcraft. Kepler suspended much of his work to conduct her legal defence. She spent fourteen months imprisoned and was shown the instruments of torture before being released; she died months afterwards.",
    ],
    lawsAndIdeas: [
      "Kepler's First Law: the orbit of a planet is an ellipse with the Sun at one focus, not a circle or a combination of circles.",
      "Kepler's Second Law: a line joining a planet and the Sun sweeps out equal areas in equal intervals of time, so planets move faster when nearer the Sun.",
      "Kepler's Third Law: the square of a planet's orbital period is proportional to the cube of the semi-major axis of its orbit, written T² ∝ a³.",
      "Kepler's conjecture: no arrangement of equally sized spheres packs space more densely than the familiar face-centred cubic stacking used for oranges — proposed in 1611 and only proved in modern times.",
    ],
    contributions: [
      {
        title: "Laws of planetary motion",
        period: "1609 and 1619",
        description:
          "Kepler derived three quantitative laws from Tycho Brahe's observations, abandoning circular orbits and giving astronomy its first genuinely predictive physical model.",
      },
      {
        title: "Optics and vision",
        period: "1604–1611",
        description:
          "He explained that the eye's lens projects an inverted image onto the retina, analysed refraction, and described the two-convex-lens telescope design now named after him.",
      },
      {
        title: "Rudolphine Tables",
        period: "Published 1627",
        description:
          "Kepler completed Tycho's planetary tables using his own elliptical model, producing predictions roughly thirty times more accurate than anything previously available.",
      },
    ],
    definingWork: {
      title: "Astronomia Nova",
      date: "1609",
      description:
        "Kepler's account of his long struggle with the orbit of Mars, in which he abandoned circular motion and established his first two laws of planetary motion.",
      significance:
        "It is the first major work to treat planetary motion as a physical problem with real causes rather than a geometrical bookkeeping exercise.",
    },
    artifact: {
      title: "Rudolphine Tables frontispiece",
      date: "1627",
      kind: "Historic document",
      description:
        "The engraved frontispiece depicts a temple of astronomy whose pillars represent the observers Kepler built upon, with Tycho Brahe and Copernicus among them.",
      significance:
        "It is a deliberate public statement that modern astronomy stands on accumulated observation, and it contains one of the few contemporary depictions of Kepler himself.",
      image: {
        fileName: "Rudolphine Tables.jpg",
        alt: "Engraved frontispiece of Kepler's Rudolphine Tables of 1627",
        credit: "Johannes Kepler, 1627",
        license: "Public domain",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Rudolphine_Tables.jpg",
      },
    },
    legacy: [
      "Kepler's laws are still the working description of orbital motion for planets, moons, satellites and exoplanets.",
      "Newton showed that all three laws follow from universal gravitation, making Kepler's work the empirical foundation of classical mechanics.",
      "NASA's Kepler space telescope, which discovered thousands of exoplanets, was named in his honour.",
    ],
    portrait: {
      fileName: "JKepler.jpg",
      alt: "Portrait of Johannes Kepler",
      credit: "Unknown artist",
      license: "Public domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:JKepler.jpg",
      objectPosition: "50% 20%",
    },
    sources: [
      {
        label: "Johannes Kepler",
        url: "https://plato.stanford.edu/entries/kepler/",
        publisher: "Stanford Encyclopedia of Philosophy",
      },
      {
        label: "Kepler biography",
        url: "https://mathshistory.st-andrews.ac.uk/Biographies/Kepler/",
        publisher: "MacTutor History of Mathematics",
      },
      {
        label: "Kepler mission namesake",
        url: "https://science.nasa.gov/mission/kepler/",
        publisher: "NASA",
      },
    ],
  },
] as const;

export function getScientist(slug: string) {
  return SCIENTISTS.find((scientist) => scientist.slug === slug);
}
