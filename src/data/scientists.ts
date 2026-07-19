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

  {
    rank: 11,
    slug: "marie-curie",
    fullName: "Marie Curie",
    life: "1867–1934",
    birthplace: "Warsaw, Congress Poland",
    primaryFields: ["Physics", "Chemistry", "Radioactivity"],
    headline: "She pioneered the science of radioactivity and became the first person to win two Nobel Prizes.",
    overview: [
      "Marie Curie developed methods for measuring radioactivity and used them to discover the elements polonium and radium with Pierre Curie.",
      "Her work connected invisible atomic processes with measurable physical effects, helping open the path toward nuclear physics, radiochemistry and medical uses of radiation.",
    ],
    knownFor: ["Radioactivity research", "Discovery of polonium", "Discovery of radium", "Mobile X-ray units", "Two Nobel Prizes"],
    contributions: [
      { title: "Radioactivity measurements", period: "1890s", description: "Curie used precise electrical measurements to compare radioactive minerals and identify activity stronger than uranium alone could explain." },
      { title: "New elements", period: "1898", description: "She and Pierre Curie announced polonium and radium after painstaking chemical separation of pitchblende residues." },
      { title: "Wartime radiology", period: "1914–1918", description: "Curie helped organize mobile X-ray units that allowed doctors to locate bullets and fractures near the battlefield." },
    ],
    definingWork: { title: "Research on Radioactive Substances", date: "1903", description: "Curie's doctoral work presented systematic evidence for radioactivity as an atomic property rather than a chemical effect.", significance: "It helped establish radioactivity as a new field and earned Curie a share of the 1903 Nobel Prize in Physics." },
    artifact: { title: "Radium standard and laboratory notebooks", date: "Early 1900s", kind: "Historic apparatus", description: "Curie's laboratory work depended on carefully prepared radioactive samples, balances and electroscopes for measurement.", significance: "These tools show how delicate measurement turned a mysterious radiation effect into a quantitative science.", image: { fileName: "Marie Curie c1920.jpg", alt: "Portrait of Marie Curie", credit: "Henri Manuel", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Marie_Curie_c1920.jpg", objectPosition: "50% 18%" } },
    legacy: ["Curie's work helped launch nuclear science and radiochemistry.", "Her career became a landmark for women in science and higher education.", "Radiation medicine and safety practices both grew from the field she helped create."],
    portrait: { fileName: "Marie Curie c1920.jpg", alt: "Portrait of Marie Curie", credit: "Henri Manuel", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Marie_Curie_c1920.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Marie Curie — facts", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/", publisher: "Nobel Prize" },
      { label: "Marie Curie — chemistry prize", url: "https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/facts/", publisher: "Nobel Prize" },
      { label: "Marie Curie and radium", url: "https://www.britannica.com/biography/Marie-Curie", publisher: "Encyclopaedia Britannica" },
    ],
  },
  {
    rank: 12,
    slug: "charles-darwin",
    fullName: "Charles Darwin",
    life: "1809–1882",
    birthplace: "Shrewsbury, England",
    primaryFields: ["Biology", "Evolution", "Natural History"],
    headline: "He explained biological diversity through evolution by natural selection.",
    overview: ["Charles Darwin gathered evidence from fossils, geography, breeding and living organisms to argue that species change over time.", "His theory of natural selection showed how heritable variation and differential survival can produce adaptation without requiring a fixed ladder of life."],
    knownFor: ["Evolution by natural selection", "The Voyage of the Beagle", "Origin of Species", "Common descent", "Sexual selection"],
    contributions: [
      { title: "Beagle observations", period: "1831–1836", description: "Darwin's voyage supplied evidence from island species, fossils and geological change that later shaped his evolutionary thinking." },
      { title: "Natural selection", period: "Developed 1830s–1850s", description: "He proposed that organisms with advantageous inherited traits tend to leave more offspring, gradually changing populations." },
      { title: "Human evolution and sexual selection", period: "1871", description: "Darwin extended evolutionary reasoning to humans and explored traits shaped by mate choice and competition." },
    ],
    definingWork: { title: "On the Origin of Species", date: "1859", description: "The book presented evidence for descent with modification and natural selection as a mechanism for adaptation.", significance: "It became a foundation of modern biology and changed how scientists understand life's history." },
    artifact: { title: "First edition of On the Origin of Species", date: "1859", kind: "Historic document", description: "The first edition introduced Darwin's argument to a wide scientific and public audience.", significance: "It transformed natural history into a historical science of branching descent and testable mechanisms.", image: { fileName: "Origin of Species title page.jpg", alt: "Title page of On the Origin of Species", credit: "Charles Darwin", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Origin_of_Species_title_page.jpg" } },
    legacy: ["Evolution is the organizing framework of modern biology.", "Darwin's ideas guide research in genetics, ecology, medicine and conservation.", "Modern evolutionary theory has expanded his work using genetics and population biology."],
    portrait: { fileName: "Charles Darwin seated crop.jpg", alt: "Portrait of Charles Darwin", credit: "Elliott & Fry", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Charles_Darwin_seated_crop.jpg", objectPosition: "50% 20%" },
    sources: [
      { label: "Charles Darwin", url: "https://www.nhm.ac.uk/discover/charles-darwin-most-famous-biologist.html", publisher: "Natural History Museum" },
      { label: "Darwin Online", url: "https://darwin-online.org.uk/", publisher: "University of Cambridge" },
      { label: "On the Origin of Species", url: "https://www.biodiversitylibrary.org/item/122307", publisher: "Biodiversity Heritage Library" },
    ],
  },
  {
    rank: 13,
    slug: "galileo-galilei",
    fullName: "Galileo Galilei",
    life: "1564–1642",
    birthplace: "Pisa, Duchy of Florence",
    primaryFields: ["Physics", "Astronomy", "Mathematics"],
    headline: "He joined experiment, mathematics and telescopic observation in the birth of modern science.",
    overview: ["Galileo investigated motion with experiments and mathematical reasoning, challenging older views of falling bodies and projectiles.", "With an improved telescope he observed mountains on the Moon, moons of Jupiter, the phases of Venus and countless stars, strengthening the case for heliocentric astronomy."],
    knownFor: ["Telescopic astronomy", "Kinematics", "Jupiter's moons", "Phases of Venus", "Experimental method"],
    contributions: [
      { title: "Motion studies", period: "Late 1500s–1630s", description: "Galileo explored acceleration and inertia-like ideas using inclined planes, pendulums and mathematical descriptions." },
      { title: "Astronomical discoveries", period: "1609–1610", description: "His telescope revealed celestial features that contradicted a perfect, Earth-centred cosmos." },
      { title: "Dialogue on world systems", period: "1632", description: "Galileo compared geocentric and heliocentric models in a work that became central to debates about astronomy and authority." },
    ],
    definingWork: { title: "Sidereus Nuncius", date: "1610", description: "The Starry Messenger reported Galileo's first telescopic discoveries, including Jupiter's satellites and the rough surface of the Moon.", significance: "It showed that instruments could reveal new evidence beyond unaided human senses." },
    artifact: { title: "Galileo's telescope", date: "c. 1609–1610", kind: "Historic apparatus", description: "Galileo's refracting telescope used lenses to magnify distant objects and transform astronomical observation.", significance: "The instrument made observation a powerful challenge to inherited cosmology.", image: { fileName: "Galileo's telescope.JPG", alt: "Galileo's telescope", credit: "Museo Galileo", license: "CC BY-SA 3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Galileo%27s_telescope.JPG" } },
    legacy: ["Galileo's work helped establish mathematical experiment as a scientific ideal.", "His observations accelerated the acceptance of heliocentric astronomy.", "His conflict with authorities remains a symbol of tension between evidence and established doctrine."],
    portrait: { fileName: "Justus Sustermans - Portrait of Galileo Galilei, 1636.jpg", alt: "Portrait of Galileo Galilei", credit: "Justus Sustermans", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Justus_Sustermans_-_Portrait_of_Galileo_Galilei,_1636.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Galileo Galilei", url: "https://galileo.rice.edu/", publisher: "Rice University" },
      { label: "Museo Galileo", url: "https://www.museogalileo.it/en/", publisher: "Museo Galileo" },
      { label: "Sidereus Nuncius", url: "https://www.loc.gov/item/2021667396/", publisher: "Library of Congress" },
    ],
  },
  {
    rank: 14,
    slug: "nikola-tesla",
    fullName: "Nikola Tesla",
    life: "1856–1943",
    birthplace: "Smiljan, Austrian Empire",
    primaryFields: ["Electrical Engineering", "Physics", "Invention"],
    headline: "He helped make alternating-current power practical and imagined wireless electrical technologies.",
    overview: ["Nikola Tesla developed motors, transformers and power-system ideas that supported the spread of alternating current.", "His inventions and demonstrations influenced electrical engineering, radio technology and the public image of scientific invention."],
    knownFor: ["AC induction motor", "Polyphase power systems", "Tesla coil", "High-voltage experiments", "Wireless transmission ideas"],
    contributions: [
      { title: "Induction motor", period: "1880s", description: "Tesla designed motors using rotating magnetic fields, allowing efficient AC operation without commutators." },
      { title: "Polyphase AC power", period: "1880s–1890s", description: "His patents contributed to systems for generating, transmitting and using alternating current at large scale." },
      { title: "High-frequency research", period: "1890s", description: "Tesla coils and demonstrations explored high voltage, resonance and wireless effects." },
    ],
    definingWork: { title: "Polyphase alternating-current patents", date: "1887–1888", description: "Tesla's patents described motors and power systems based on multiphase currents and rotating magnetic fields.", significance: "They became part of the technical foundation for practical AC power distribution." },
    artifact: { title: "Tesla coil", date: "1891", kind: "Historic apparatus", description: "A resonant transformer that produces high-voltage, high-frequency electricity for experiments and demonstrations.", significance: "It became an iconic instrument for studying resonance and high-voltage electrical phenomena.", image: { fileName: "Tesla coil 4.svg", alt: "Diagram of a Tesla coil", credit: "Wikimedia Commons contributors", license: "CC BY-SA", sourceUrl: "https://commons.wikimedia.org/wiki/File:Tesla_coil_4.svg" } },
    legacy: ["Modern AC power systems reflect principles that Tesla helped develop.", "His name remains attached to magnetic-field units, coils and electrical engineering culture.", "Tesla's mixture of practical patents and speculative visions continues to fascinate students."],
    portrait: { fileName: "Tesla circa 1890.jpeg", alt: "Portrait of Nikola Tesla", credit: "Napoleon Sarony", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Tesla_circa_1890.jpeg", objectPosition: "50% 18%" },
    sources: [
      { label: "Nikola Tesla", url: "https://www.britannica.com/biography/Nikola-Tesla", publisher: "Encyclopaedia Britannica" },
      { label: "Tesla patents", url: "https://patents.google.com/?inventor=Nikola+Tesla", publisher: "Google Patents" },
      { label: "Tesla Memorial Society", url: "https://teslasociety.com/", publisher: "Tesla Memorial Society" },
    ],
  },
  {
    rank: 15,
    slug: "michael-faraday",
    fullName: "Michael Faraday",
    life: "1791–1867",
    birthplace: "Newington Butts, England",
    primaryFields: ["Physics", "Chemistry", "Electromagnetism"],
    headline: "His experiments revealed electromagnetic induction and the field view of electricity and magnetism.",
    overview: ["Michael Faraday rose from bookbinder's apprentice to one of the most influential experimental scientists of the nineteenth century.", "He discovered electromagnetic induction, studied electrolysis and introduced powerful field concepts that later inspired Maxwell's equations."],
    knownFor: ["Electromagnetic induction", "Faraday cage", "Electrolysis laws", "Diamagnetism", "Lines of force"],
    contributions: [
      { title: "Electromagnetic rotation", period: "1821", description: "Faraday demonstrated continuous motion produced by electricity and magnetism, an early principle behind electric motors." },
      { title: "Electromagnetic induction", period: "1831", description: "He showed that changing magnetic conditions can produce electric current, enabling generators and transformers." },
      { title: "Electrochemistry", period: "1830s", description: "Faraday formulated quantitative laws of electrolysis and helped standardize terms such as electrode, anode and ion." },
    ],
    definingWork: { title: "Experimental Researches in Electricity", date: "1831 onward", description: "A long series of papers recorded Faraday's experiments on electricity, magnetism and electrochemistry.", significance: "The work supplied much of the experimental basis for modern electromagnetism." },
    artifact: { title: "Faraday disk generator", date: "1831", kind: "Historic apparatus", description: "A conducting disk rotating in a magnetic field produced electric current, demonstrating electromagnetic induction.", significance: "It was an early electrical generator and a direct link between mechanical motion and electricity." , image: { fileName: "Faraday disk generator.svg", alt: "Diagram of Faraday disk generator", credit: "Wikimedia Commons contributors", license: "CC BY-SA", sourceUrl: "https://commons.wikimedia.org/wiki/File:Faraday_disk_generator.svg" } },
    legacy: ["Electric generators and transformers depend on induction principles Faraday discovered.", "His field ideas prepared the ground for Maxwell's mathematical theory.", "Faraday remains a model of experimental clarity and public science communication."],
    portrait: { fileName: "Michael Faraday - Project Gutenberg eText 13103.jpg", alt: "Portrait of Michael Faraday", credit: "Project Gutenberg", license: "Public domain", sourceUrl: "https://commons.wikimedia.org/wiki/File:Michael_Faraday_-_Project_Gutenberg_eText_13103.jpg", objectPosition: "50% 18%" },
    sources: [
      { label: "Michael Faraday", url: "https://www.rigb.org/explore-science/explore/person/michael-faraday", publisher: "Royal Institution" },
      { label: "Faraday papers", url: "https://royalsociety.org/collections/", publisher: "The Royal Society" },
      { label: "Experimental Researches", url: "https://www.biodiversitylibrary.org/bibliography/152899", publisher: "Biodiversity Heritage Library" },
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
] as const;

export function getScientist(slug: string) {
  return SCIENTISTS.find((scientist) => scientist.slug === slug);
}
