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
] as const;

export function getScientist(slug: string) {
  return SCIENTISTS.find((scientist) => scientist.slug === slug);
}
