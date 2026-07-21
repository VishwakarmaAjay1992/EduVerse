import type { ScientistProfile } from "./types";

export const thomasEdison: ScientistProfile = {
  slug: "thomas-edison",
  seoDescription:
    "Thomas Edison built practical invention into organised industrial research. Explore the phonograph, incandescent lighting systems, Menlo Park, motion pictures, batteries, the war of currents, patent controversies and a full quiz.",

  timeline: [
    {
      year: "1847",
      title: "Born in Milan, Ohio",
      description:
        "Thomas Alva Edison is born on 11 February to Samuel Ogden Edison Jr. and Nancy Matthews Elliott Edison.",
    },
    {
      year: "1854",
      title: "Family moves to Port Huron",
      description:
        "The family relocates to Michigan, where Edison spends much of his childhood near railroads, canals, telegraph lines and growing commercial networks.",
    },
    {
      year: "1859",
      title: "Newsboy on the Grand Trunk Railway",
      description:
        "As a young teenager he sells newspapers and goods on trains, learning sales, printing and practical self-employment.",
      pivotal: true,
    },
    {
      year: "1862",
      title: "Learns telegraphy",
      description:
        "After saving a station agent's child from a train, Edison is taught telegraph operation. Telegraphy becomes his technical school.",
      pivotal: true,
    },
    {
      year: "1868",
      title: "First patent",
      description:
        "Edison receives his first patent, for an electric vote recorder. Legislators show little interest, teaching him that invention must meet a market.",
    },
    {
      year: "1869",
      title: "Moves into invention full time",
      description:
        "He moves through Boston and New York, working on stock tickers, telegraph improvements and electrical signalling devices.",
    },
    {
      year: "1874",
      title: "Quadruplex telegraph",
      description:
        "Edison develops a system for sending four telegraph messages over one wire, making his reputation and generating capital for further work.",
      pivotal: true,
    },
    {
      year: "1876",
      title: "Menlo Park laboratory opens",
      description:
        "Edison establishes his research laboratory at Menlo Park, New Jersey, bringing together machinists, experimenters, draftsmen and assistants in a purpose-built invention factory.",
      pivotal: true,
    },
    {
      year: "1877",
      title: "Phonograph",
      description:
        "He demonstrates the phonograph, the first machine to record and reproduce sound. The invention astonishes the public and makes him nationally famous.",
      pivotal: true,
    },
    {
      year: "1879",
      title: "Long-lasting incandescent lamp",
      description:
        "After thousands of tests, Edison and his team demonstrate a practical high-resistance carbon-filament lamp suitable for a central-station lighting system.",
      pivotal: true,
    },
    {
      year: "1882",
      title: "Pearl Street Station",
      description:
        "Edison's first permanent central power station begins operating in lower Manhattan, supplying direct-current electric lighting to customers.",
      pivotal: true,
    },
    {
      year: "1884",
      title: "First wife dies",
      description:
        "Mary Stilwell Edison dies at twenty-nine. Edison is left with three young children while his businesses are expanding rapidly.",
    },
    {
      year: "1886",
      title: "Marries Mina Miller",
      description:
        "Edison marries Mina Miller and begins building a new home and laboratory life around West Orange.",
    },
    {
      year: "1887",
      title: "West Orange laboratory",
      description:
        "The new West Orange complex opens. It is larger than Menlo Park and designed for multiple parallel research and manufacturing projects.",
      pivotal: true,
    },
    {
      year: "1888",
      title: "Motion-picture work begins",
      description:
        "Edison assigns W. K. L. Dickson and others to develop motion-picture recording and viewing technologies, leading to the Kinetograph and Kinetoscope.",
    },
    {
      year: "1888-1893",
      title: "War of currents",
      description:
        "Edison's direct-current system competes with alternating-current systems associated with Westinghouse and Tesla. The dispute becomes technical, commercial and public-relations warfare.",
      pivotal: true,
    },
    {
      year: "1892",
      title: "General Electric formed",
      description:
        "Edison General Electric merges with Thomson-Houston to form General Electric. Edison himself has diminishing control over the electrical industry he helped launch.",
    },
    {
      year: "1901",
      title: "Nickel-iron battery work",
      description:
        "Edison invests years in alkaline storage batteries, especially for electric vehicles and industrial uses. The work is slow and commercially uneven.",
    },
    {
      year: "1914",
      title: "West Orange fire",
      description:
        "A major fire damages parts of the West Orange complex. Edison, then in his late sixties, rebuilds and continues work.",
    },
    {
      year: "1915",
      title: "Naval Consulting Board",
      description:
        "During the First World War, Edison leads a board intended to connect invention and military preparedness, though results are mixed.",
    },
    {
      year: "1931",
      title: "Dies in West Orange",
      description:
        "Edison dies on 18 October. Lights are dimmed in parts of the United States in symbolic tribute.",
    },
  ],

  earlyLifeDetail: {
    childhood:
      "Edison had little formal schooling and did not fit comfortably into classroom discipline. His mother Nancy, a former teacher, encouraged his reading and experiments at home. The often-repeated story that a teacher called him addled cannot be verified in every detail, but the broader point is secure: Edison learned outside the normal school path, through books, work, repair, trial and commerce.",
    family:
      "Samuel Edison was a politically restless and entrepreneurial figure; Nancy Edison provided much of the structure in Thomas's early education. Edison married Mary Stilwell in 1871 and had three children with her: Marion, Thomas Jr. and William. After Mary's death he married Mina Miller in 1886, and they had Madeleine, Charles and Theodore. Several children struggled under the weight of the Edison name.",
    education:
      "Edison's real education was practical. Telegraph offices taught him circuits, batteries, relays, timing, fault-finding and the economics of communication. He read chemistry and electrical books hungrily but was never university trained. This gave him strong experimental instincts but sometimes weak theoretical patience.",
    difficulties:
      "Edison developed serious hearing loss as a young man. The cause is uncertain; later stories involving train accidents may be partly embellished. Deafness made conversation difficult, but he often framed it as an advantage because it let him concentrate. He also faced repeated business failures, patent litigation, unreliable materials and the problem of turning demonstrations into durable products.",
    finances:
      "Edison started with little capital and used telegraph inventions to finance larger projects. The sale and licensing of stock tickers and telegraph systems gave him the money to build Menlo Park. Later, large projects required investors, companies and financiers, which meant Edison increasingly shared control with business structures larger than himself.",
    personalLife:
      "Edison worked punishing hours and expected assistants to do the same. He cultivated a public image of tireless genius while also relying on teams. His family life often came second to work. He could be generous, funny and encouraging, but also stubborn, combative and willing to use publicity harshly against rivals.",
    influences:
      "Telegraphy was the central influence on his early career: it combined electricity, signalling, speed, infrastructure and profit. Michael Faraday's experimental electrical tradition, Joseph Henry's electromagnetism, existing arc lighting, earlier incandescent-lamp work and the practical needs of cities all formed the background to Edison's systems approach.",
    booksRead:
      "Edison read practical chemistry, electricity and mechanics texts, including works that gave him experimental procedures rather than abstract theory. His notebooks show a habit of recording tests, materials and variations, turning reading into immediate trial.",
    teachersAndMentors:
      "His mother was his earliest teacher. Telegraph operators trained him in the working electrical craft of the period. Later, his most important 'teachers' were skilled collaborators: Charles Batchelor, John Kruesi, Francis Upton, W. K. L. Dickson, Edward Johnson, Lewis Latimer and many other assistants whose work made Edison laboratories productive.",
    stories: [
      "Edison's first patent, the vote recorder, failed because politicians did not want votes recorded quickly. He later said he learned never to invent something unless people wanted to buy it.",
      "Menlo Park was called an invention factory, but that phrase can mislead. It was not a machine producing ideas automatically; it was a disciplined workshop where many skilled people tested materials and mechanisms at scale.",
      "The light bulb story is the classic myth. Edison did not invent the first incandescent lamp. His achievement was a practical lamp plus a complete electrical supply system that could serve customers reliably.",
    ],
  },

  turningPoints: [
    "Learning telegraphy, which turned electricity from curiosity into trade, income and identity.",
    "The failure of the vote recorder, which taught him to connect invention with demand.",
    "The quadruplex telegraph, which gave him money and credibility.",
    "Opening Menlo Park, where invention became organised group labour.",
    "The phonograph demonstration, which made Edison a public celebrity.",
    "Pearl Street Station, where the electric-light idea became a working urban service.",
    "The formation of General Electric, which showed that the industries he helped create were becoming too large for inventor control.",
  ],

  failures: [
    "The electric vote recorder was technically clever but commercially unwanted, an early lesson in market fit.",
    "Edison's direct-current distribution system could not transmit power efficiently over long distances compared with alternating current.",
    "The public-relations campaign against AC, including association with electrocution, was ethically ugly and did not stop AC from winning large-scale power distribution.",
    "His iron-ore milling project consumed enormous money and effort before failing commercially.",
    "His storage battery programme took far longer and cost far more than expected, and its biggest hoped-for market in electric cars did not arrive in his lifetime.",
    "His motion-picture business often tried to control the market through patents and litigation, encouraging competitors to move away from his influence.",
  ],

  studentLessons: [
    "A useful invention is often a system, not a single object. The bulb mattered because generators, wiring, switches, meters and business models worked with it.",
    "Testing many materials is not random guessing when records, criteria and iteration are disciplined.",
    "Public fame can hide team labour. Serious history asks who machined, measured, drew, tested and improved the device.",
    "A technically inferior system can survive for a time through business power, and a superior system still needs infrastructure to win.",
    "Failure can be expensive but informative. Edison often treated failed trials as data, though he did not always abandon weak commitments quickly enough.",
  ],

  discoveries: [
    {
      name: "The phonograph",
      period: "1877",
      background:
        "Telegraph and telephone work had shown that vibrations and electrical signals could be transmitted. No device had yet successfully recorded sound and reproduced it.",
      problem:
        "Could the vibrations of speech be captured physically and later made to vibrate air again as recognisable sound?",
      method:
        "Edison used a diaphragm and stylus to indent a rotating tinfoil cylinder. Playback reversed the process, making the recorded groove move the diaphragm.",
      discovery:
        "The phonograph could record and reproduce sound, turning sound into a storable and repeatable mechanical trace.",
      importance:
        "It opened the technologies of recorded music, dictation, sound archives and audio reproduction.",
      modernApplications: [
        "Audio recording",
        "Music industry",
        "Voice archives",
        "Speech technology",
      ],
    },
    {
      name: "Practical incandescent lighting system",
      period: "1879-1882",
      background:
        "Many inventors had demonstrated incandescent lamps, but short life, low resistance, poor vacuum, high current demand and lack of power infrastructure prevented broad use.",
      problem:
        "How can electric light be made safe, durable, economical and distributable to many customers from a central station?",
      method:
        "Edison and his team tested filaments, improved vacuum conditions, designed high-resistance lamps, built dynamos, fuses, switches, meters, sockets and underground conductors, then piloted the system in real buildings.",
      discovery:
        "A commercially practical lighting service required an integrated network: lamp, generator, distribution, measurement, protection and finance.",
      importance:
        "The work helped launch urban electric utilities and changed domestic, commercial and industrial life.",
      modernApplications: [
        "Electric utilities",
        "Building electrical systems",
        "Lighting engineering",
        "Power metering",
      ],
    },
    {
      name: "Industrial research laboratory",
      period: "From 1876",
      background:
        "Earlier invention often occurred in small shops, universities or individual workshops. Industrial capitalism needed faster, more organised development.",
      problem:
        "Could invention be made more reliable by assembling tools, materials, skilled workers, records and capital in one permanent research site?",
      method:
        "At Menlo Park and West Orange, Edison combined machine shops, chemical benches, libraries, drawing offices, testing rooms and teams working on multiple problems.",
      discovery:
        "The laboratory itself became an invention: an organisation for producing, testing, patenting and commercialising technologies.",
      importance:
        "This model anticipated corporate research and development laboratories of the twentieth century.",
      modernApplications: [
        "Corporate R&D",
        "Product engineering",
        "Prototype testing",
        "Patent strategy",
        "Interdisciplinary design teams",
      ],
    },
    {
      name: "Motion-picture technologies",
      period: "1888-1894",
      background:
        "Photography could freeze images, and many inventors were seeking ways to analyse and reproduce motion. Flexible film and faster shutters made moving pictures possible.",
      problem:
        "How can rapid sequential images be recorded and viewed as continuous motion?",
      method:
        "Edison directed a programme led especially by W. K. L. Dickson, combining film transport, intermittent motion, shutters, cameras and viewing machines.",
      discovery:
        "The Kinetograph camera and Kinetoscope viewer made motion-picture recording and commercial viewing practical, though not yet projected cinema in the later sense.",
      importance:
        "Edison's laboratory helped establish the technical and business foundations of the motion-picture industry.",
      modernApplications: [
        "Cinema",
        "Video technology",
        "Animation and frame-rate design",
        "Media distribution",
      ],
    },
    {
      name: "Nickel-iron alkaline storage battery",
      period: "1901-1910s",
      background:
        "Lead-acid batteries were heavy and chemically troublesome. Electric vehicles, rail signalling and industrial uses needed durable rechargeable batteries.",
      problem:
        "Could a rechargeable battery be made more rugged and longer-lived for transportation and industrial work?",
      method:
        "Edison tested electrode materials and electrolytes over many years, settling on nickel and iron electrodes in alkaline solution.",
      discovery:
        "The Edison storage battery was durable and useful in some industrial niches, though it did not transform automobiles as he hoped.",
      importance:
        "It illustrates both Edison's persistence and the difficulty of matching invention timing to market and infrastructure.",
      modernApplications: [
        "Rechargeable battery history",
        "Industrial backup power",
        "Electric vehicle development history",
      ],
    },
  ],

  works: [
    {
      title: "Electric vote recorder",
      year: "1868",
      kind: "Invention",
      description:
        "Edison's first patented invention. Its market failure shaped his later insistence that inventions answer a real demand.",
    },
    {
      title: "Quadruplex telegraph",
      year: "1874",
      kind: "Invention",
      description:
        "A telegraph system allowing two messages in each direction over the same wire, increasing the value of existing infrastructure.",
    },
    {
      title: "Menlo Park laboratory",
      year: "1876",
      kind: "Project",
      description:
        "A purpose-built industrial research site combining shop, laboratory, library and team organisation.",
    },
    {
      title: "Phonograph",
      year: "1877",
      kind: "Invention",
      description:
        "The first successful machine for recording and reproducing sound.",
    },
    {
      title: "Carbon-filament incandescent lamp",
      year: "1879",
      kind: "Invention",
      description:
        "A long-lasting high-resistance lamp developed as part of a larger electric-lighting system.",
    },
    {
      title: "Pearl Street central station",
      year: "1882",
      kind: "Project",
      description:
        "A permanent urban power station delivering direct-current electric lighting to paying customers.",
    },
    {
      title: "Kinetograph and Kinetoscope",
      year: "1891-1894",
      kind: "Invention",
      description:
        "Camera and viewing technologies developed in Edison's laboratory for motion pictures.",
    },
    {
      title: "Edison storage battery",
      year: "1901-1910s",
      kind: "Invention",
      description:
        "A nickel-iron alkaline rechargeable battery intended for vehicles and industrial service.",
    },
  ],

  equations: [
    {
      name: "Electrical power",
      latex: "P = VI",
      explanation:
        "Electrical power equals potential difference multiplied by current. Lighting systems had to deliver enough power safely and economically.",
      variables: [
        { symbol: "P", meaning: "power in watts" },
        { symbol: "V", meaning: "potential difference in volts" },
        { symbol: "I", meaning: "current in amperes" },
      ],
      workedExample: {
        problem: "A lamp operates at 110 V and draws 0.50 A. Find its power.",
        steps: [
          { text: "Use P = VI.", latex: "P = 110\\times0.50" },
          { text: "Calculate.", latex: "P=55\\,\\text{W}" },
        ],
        answer: "The lamp uses 55 W.",
      },
      modernUse:
        "Used in lighting design, appliance ratings, power supplies and electricity billing.",
    },
    {
      name: "Ohm's law",
      latex: "V = IR",
      explanation:
        "Voltage, current and resistance are linked. Edison needed high-resistance lamps so many lamps could operate in parallel from practical conductors.",
      variables: [
        { symbol: "V", meaning: "potential difference" },
        { symbol: "I", meaning: "current" },
        { symbol: "R", meaning: "resistance" },
      ],
      workedExample: {
        problem: "A lamp has resistance 220 ohms on a 110 V supply. Find the current.",
        steps: [
          { text: "Rearrange Ohm's law.", latex: "I=\\frac{V}{R}" },
          { text: "Substitute.", latex: "I=\\frac{110}{220}=0.50\\,\\text{A}" },
        ],
        answer: "The current is 0.50 A.",
      },
      modernUse:
        "Used in circuit analysis, electronics, lighting, motors and safety calculations.",
    },
    {
      name: "Energy used by a device",
      latex: "E = Pt",
      explanation:
        "Energy consumption equals power multiplied by operating time. This relation connects engineering design to billing and operating cost.",
      variables: [
        { symbol: "E", meaning: "energy" },
        { symbol: "P", meaning: "power" },
        { symbol: "t", meaning: "time" },
      ],
      workedExample: {
        problem: "A 60 W lamp runs for 5 hours. Find the energy in kilowatt-hours.",
        steps: [
          { text: "Convert watts to kilowatts.", latex: "60\\,\\text{W}=0.060\\,\\text{kW}" },
          { text: "Multiply by time.", latex: "E=0.060\\times5=0.30\\,\\text{kWh}" },
        ],
        answer: "The lamp uses 0.30 kWh.",
      },
      modernUse:
        "Used in energy audits, utility bills and appliance efficiency comparisons.",
    },
    {
      name: "Resistive heating",
      latex: "P = I^2R",
      explanation:
        "Current through resistance produces heat. Incandescent lamps use this deliberately in the filament, but power lines try to minimise it.",
      variables: [
        { symbol: "P", meaning: "heat power produced" },
        { symbol: "I", meaning: "current" },
        { symbol: "R", meaning: "resistance" },
      ],
      workedExample: {
        problem: "A conductor has resistance 2 ohms and carries 3 A. Find heat power.",
        steps: [
          { text: "Use P = I^2R.", latex: "P=3^2\\times2" },
          { text: "Calculate.", latex: "P=18\\,\\text{W}" },
        ],
        answer: "The conductor dissipates 18 W as heat.",
      },
      modernUse:
        "Used in filament lamps, heaters, fuses, cable sizing and power-loss calculations.",
    },
    {
      name: "Transformer relation",
      latex: "\\frac{V_s}{V_p}=\\frac{N_s}{N_p}",
      explanation:
        "AC voltage can be stepped up or down by transformers. This was a central advantage of AC systems over Edison's low-voltage DC distribution.",
      variables: [
        { symbol: "V_s", meaning: "secondary voltage" },
        { symbol: "V_p", meaning: "primary voltage" },
        { symbol: "N_s", meaning: "secondary coil turns" },
        { symbol: "N_p", meaning: "primary coil turns" },
      ],
      workedExample: {
        problem: "A transformer has 100 primary turns and 1000 secondary turns on 120 V AC. Find secondary voltage.",
        steps: [
          { text: "Use the turns ratio.", latex: "V_s=120\\times\\frac{1000}{100}" },
          { text: "Calculate.", latex: "V_s=1200\\,\\text{V}" },
        ],
        answer: "The secondary voltage is 1200 V.",
      },
      modernUse:
        "Used in power grids, chargers, adapters and electrical isolation.",
    },
    {
      name: "Transmission loss",
      latex: "P_{loss}=I^2R",
      explanation:
        "For a given delivered power, raising voltage lowers current and greatly reduces line losses. This explains why AC transmission gained the advantage.",
      variables: [
        { symbol: "P_{loss}", meaning: "power lost as heat in lines" },
        { symbol: "I", meaning: "line current" },
        { symbol: "R", meaning: "line resistance" },
      ],
      workedExample: {
        problem: "Compare losses for 10 A and 100 A through the same 1 ohm line.",
        steps: [
          { text: "At 10 A:", latex: "P=10^2\\times1=100\\,\\text{W}" },
          { text: "At 100 A:", latex: "P=100^2\\times1=10000\\,\\text{W}" },
        ],
        answer: "Ten times the current gives one hundred times the loss.",
      },
      modernUse:
        "Used in grid design, long-distance transmission and conductor sizing.",
    },
    {
      name: "Battery energy estimate",
      latex: "E \\approx VQ",
      explanation:
        "A rough battery energy estimate multiplies voltage by charge capacity. Edison's battery work required balancing energy, durability, weight and cost.",
      variables: [
        { symbol: "E", meaning: "stored energy" },
        { symbol: "V", meaning: "battery voltage" },
        { symbol: "Q", meaning: "charge capacity" },
      ],
      workedExample: {
        problem: "A 12 V battery stores 100 Ah. Estimate energy in kWh.",
        steps: [
          { text: "Multiply voltage by ampere-hours.", latex: "E=12\\times100=1200\\,\\text{Wh}" },
          { text: "Convert.", latex: "1200\\,\\text{Wh}=1.2\\,\\text{kWh}" },
        ],
        answer: "The battery stores about 1.2 kWh.",
      },
      modernUse:
        "Used in electric vehicles, backup power and portable electronics estimates.",
    },
    {
      name: "Frame rate",
      latex: "f = \\frac{N}{t}",
      explanation:
        "Motion pictures depend on displaying many frames per second so the eye perceives continuous movement.",
      variables: [
        { symbol: "f", meaning: "frame rate" },
        { symbol: "N", meaning: "number of frames" },
        { symbol: "t", meaning: "time interval" },
      ],
      workedExample: {
        problem: "A film shows 480 frames in 20 seconds. Find the frame rate.",
        steps: [
          { text: "Divide frames by time.", latex: "f=\\frac{480}{20}" },
          { text: "Calculate.", latex: "f=24\\,\\text{frames/s}" },
        ],
        answer: "The frame rate is 24 frames per second.",
      },
      modernUse:
        "Used in cinema, animation, video compression and display technology.",
    },
  ],

  connections: [
    {
      field: "Engineering",
      description:
        "Edison's work is a case study in systems engineering: components, infrastructure, reliability, maintenance and cost all had to fit together.",
    },
    {
      field: "Physics",
      description:
        "His inventions depend on electricity, magnetism, resistance, heat, sound vibration, optics and motion.",
    },
    {
      field: "Chemistry",
      description:
        "Lamp filaments, vacuum technology, battery electrodes, electrolytes and materials testing were chemical as well as electrical problems.",
    },
    {
      field: "Computer Science",
      description:
        "Recorded media, signal storage, frame sequences and system design connect Edison's technologies to later information technology.",
    },
    {
      field: "Mathematics",
      description:
        "Circuit calculations, cost modelling, frame rates, battery capacity and scaling laws all require quantitative reasoning.",
    },
    {
      field: "Statistics",
      description:
        "Large test programmes needed record keeping, comparison and selection from many trials, a practical form of experimental data management.",
    },
  ],

  historicalContext: {
    worldEvents:
      "Edison lived through the American Civil War, Reconstruction, rapid railroad expansion, urban electrification, the rise of corporations, mass media and the First World War.",
    politics:
      "His career unfolded in a United States increasingly shaped by patents, finance, monopoly disputes, public utilities and industrial regulation.",
    wars: "The Civil War expanded telegraphy and rail communication before Edison's career began. World War I later drew him into military consulting and chemical-supply projects.",
    universities:
      "Edison's world was not university science. It was shop science, patent science and industrial development, though it increasingly borrowed from trained engineers and chemists.",
    scientificCommunity:
      "Electrical invention in the late nineteenth century was crowded and competitive. Edison worked among Bell, Gray, Swan, Maxim, Brush, Thomson, Westinghouse, Tesla and many others.",
    technology:
      "Railroads, telegraphs, telephones, dynamos, improved machine tools, urban gas lighting, photography and flexible film created the conditions for Edison's inventions.",
  },

  backlash: [
    {
      type: "Priority dispute",
      title: "The incandescent lamp myth",
      description:
        "Edison is often said to have invented the light bulb. Earlier inventors made incandescent lamps; his achievement was a practical high-resistance lamp within a workable electric-lighting system.",
      status: "Verified",
    },
    {
      type: "Controversy",
      title: "War of currents",
      description:
        "Edison and his allies promoted direct current and attacked alternating current as dangerous. The campaign included public electrocutions of animals and association with the electric chair.",
      status: "Verified",
    },
    {
      type: "Academic conflict",
      title: "Edison versus Tesla narratives",
      description:
        "Popular accounts often turn Edison and Tesla into simple hero and villain. The real history involves companies, patents, investors, engineers, AC transformers, motors and market scale.",
      status: "Widely attributed",
    },
    {
      type: "Priority dispute",
      title: "Motion-picture patent control",
      description:
        "Edison's companies used patents aggressively in the early film industry. This pushed some filmmakers away from New Jersey and helped shape the geography of American cinema.",
      status: "Verified",
    },
    {
      type: "Public criticism",
      title: "Team labour hidden by celebrity",
      description:
        "Edison's public image as lone genius obscured the contributions of assistants, machinists, chemists and engineers at Menlo Park and West Orange.",
      status: "Verified",
    },
    {
      type: "Controversy",
      title: "Treatment of animals in AC demonstrations",
      description:
        "Public demonstrations of electrical danger sometimes involved killing animals. These events are ethically disturbing and were tied to public-relations strategy rather than neutral education.",
      status: "Verified",
    },
  ],

  challengesDetailed: [
    {
      category: "Educational",
      description:
        "Edison had little formal schooling and built expertise through work, reading and experiment.",
    },
    {
      category: "Health",
      description:
        "His hearing loss affected communication and shaped his work habits.",
    },
    {
      category: "Professional",
      description:
        "He had to convert prototypes into manufacturable products supported by patents, factories and investors.",
    },
    {
      category: "Scientific",
      description:
        "Many problems were materials problems: filaments, vacuums, electrodes, insulation and mechanical wear.",
    },
    {
      category: "Social",
      description:
        "His fame made him a symbol of invention, which helped business but distorted public understanding of collaboration.",
    },
    {
      category: "Political",
      description:
        "Electrification involved municipal permissions, utility regulation, safety fears and public trust.",
    },
  ],

  achievements: [
    {
      title: "First patent",
      year: "1869",
      description:
        "The electric vote recorder began a patent career that eventually included more than one thousand United States patents.",
    },
    {
      title: "Phonograph",
      year: "1877",
      description:
        "The phonograph made Edison famous as the Wizard of Menlo Park and created a new field of sound recording.",
    },
    {
      title: "Practical electric lighting",
      year: "1879-1882",
      description:
        "Edison and his teams moved electric lighting from experiment to service.",
    },
    {
      title: "Pearl Street Station",
      year: "1882",
      description:
        "One of the first permanent central power stations serving paying customers.",
    },
    {
      title: "West Orange laboratory",
      year: "1887",
      description:
        "A large industrial research complex supporting multiple invention and manufacturing programmes.",
    },
    {
      title: "Congressional Gold Medal",
      year: "1928",
      description:
        "Awarded by the United States Congress in recognition of his contributions to invention and industry.",
    },
  ],

  funFacts: [
    "Edison held 1,093 United States patents.",
    "His first successful business inventions were tied to telegraphy and stock tickers.",
    "The phonograph was so surprising that it made him famous almost overnight.",
    "He called sleep a waste of time but often took short naps.",
    "Menlo Park had a large library so workers could consult technical literature quickly.",
    "Edison did not invent the first light bulb.",
    "Pearl Street supplied DC power to a small district of lower Manhattan.",
    "The Edison effect in vacuum tubes was noticed by Edison but developed by others into electronics.",
    "His laboratories kept extensive notebooks recording trials and variations.",
    "Several important Edison motion-picture advances were led by W. K. L. Dickson.",
  ],

  didYouKnow: [
    {
      title: "The bulb was only one part",
      content:
        "A practical lighting system needed generators, distribution lines, switches, meters, fuses, sockets and paying customers. Edison understood the network problem.",
    },
    {
      title: "Failure taught market fit",
      content:
        "The vote recorder worked, but legislators did not want it. Edison learned that technical success is not the same as useful invention.",
    },
    {
      title: "The phonograph came before the light bulb",
      content:
        "Edison was already famous for recorded sound before his electric-lighting work became the centre of his public image.",
    },
    {
      title: "AC won for a reason",
      content:
        "Alternating current could be transformed to high voltage for efficient transmission and then stepped down for use, a decisive advantage over early DC systems.",
    },
    {
      title: "Edison was a manager of invention",
      content:
        "His greatest invention may have been the organised industrial laboratory, where many skilled people could work on related problems at once.",
    },
    {
      title: "Patents shaped the film industry",
      content:
        "Edison's aggressive motion-picture patent strategy helped push some filmmakers toward places where enforcement was harder.",
    },
    {
      title: "Batteries tested his patience",
      content:
        "The nickel-iron battery programme took years longer than Edison expected, showing that persistence cannot always control chemistry or markets.",
    },
    {
      title: "Celebrity simplified him",
      content:
        "The Wizard of Menlo Park image helped Edison sell invention, but it also hid assistants and made complex systems look like single flashes of genius.",
    },
  ],

  visualPrompts: [
    {
      category: "Hero portrait",
      prompt:
        "Formal early twentieth-century portrait of Thomas Edison, thoughtful older inventor with white hair, dark suit, seated beside a carbon filament lamp, phonograph cylinder and laboratory notebook, warm studio light, sepia monochrome, no text.",
    },
    {
      category: "Young scientist",
      prompt:
        "Teenage newsboy-inventor on a nineteenth-century railway carriage, newspapers stacked nearby, small telegraph key and battery on a wooden crate, curious expression, period clothing, warm daylight.",
    },
    {
      category: "Laboratory",
      prompt:
        "Menlo Park laboratory interior with wooden benches, glass bulbs, vacuum pumps, wire spools, notebooks, machinists and assistants working late by lamplight, historically accurate, no modern objects.",
    },
    {
      category: "Major discovery",
      prompt:
        "Educational systems diagram of Edison's electric lighting network: generator, wires, meter, switch, fuse and lamp connected as one service, clean vector style, labels left blank.",
    },
    {
      category: "Experiment",
      prompt:
        "Close view of carbon filament lamp testing: rows of experimental bulbs connected to measuring instruments, assistants recording results in notebooks, dark laboratory background with warm glowing filaments.",
    },
    {
      category: "Equipment",
      prompt:
        "Technical cutaway illustration of an early Edison phonograph with cylinder, stylus, diaphragm, crank and horn, blueprint style on cream paper.",
    },
    {
      category: "Timeline infographic",
      prompt:
        "Horizontal timeline from 1847 to 1931 showing telegraphy, first patent, Menlo Park, phonograph, incandescent lamp, Pearl Street, West Orange, motion pictures, batteries and death, black, cream and amber palette.",
    },
    {
      category: "Mind map",
      prompt:
        "Radial mind map centred on Edison branching into Sound, Light, Power, Motion Pictures, Batteries and Laboratory System, clean modern infographic style.",
    },
    {
      category: "Achievement infographic",
      prompt:
        "Four-panel infographic showing phonograph sound groove, carbon lamp filament, Pearl Street power network and Kinetoscope film strip, consistent flat vector style.",
    },
    {
      category: "Scientific diagram",
      prompt:
        "Diagram comparing DC and AC power distribution, showing low-voltage short-distance DC and transformer-based high-voltage AC transmission, simple educational vector, labels left blank.",
    },
    {
      category: "Map",
      prompt:
        "Stylised map of Edison's life and work: Milan Ohio, Port Huron, Boston, New York, Menlo Park and West Orange, dotted route line, parchment industrial palette.",
    },
    {
      category: "Portrait gallery",
      prompt:
        "Museum gallery row of portraits representing Edison, Tesla, Westinghouse and Latimer, matching frames and blank name plaques, warm neutral wall.",
    },
    {
      category: "Quote card",
      prompt:
        "Elegant square quote card with dark graphite background, faint glowing filament and phonograph groove motif, generous typography space, no readable text.",
    },
  ],

  photoPlaceholders: [
    {
      slot: "Portrait",
      caption: "Thomas Alva Edison, photographed by the Library of Congress era collections.",
      suggestedSource:
        "Wikimedia Commons, File:Thomas Alva Edison, 1847-1931 LCCN2002706622.jpg (public domain)",
    },
    {
      slot: "Childhood",
      caption: "Port Huron or Milan, connected with Edison's early life.",
      suggestedSource: "Wikimedia Commons, Category:Thomas Edison birthplace or Port Huron history",
    },
    {
      slot: "Laboratory",
      caption: "Menlo Park laboratory, the invention factory where the phonograph and lighting system were developed.",
      suggestedSource: "Wikimedia Commons, Category:Menlo Park laboratory (public domain)",
    },
    {
      slot: "Notebooks",
      caption: "Edison laboratory notebooks showing systematic trials and records.",
      suggestedSource: "Thomas Edison National Historical Park / Rutgers Edison Papers",
    },
    {
      slot: "Instruments",
      caption: "An original Edison carbon-filament lamp or early lamp test apparatus.",
      suggestedSource: "Smithsonian Institution or Wikimedia Commons, File:Edison Carbon Bulb.jpg",
    },
    {
      slot: "Historic location",
      caption: "Pearl Street Station or its historical marker in lower Manhattan.",
      suggestedSource: "Wikimedia Commons, Category:Pearl Street Station",
    },
    {
      slot: "Colleagues",
      caption: "Charles Batchelor, W. K. L. Dickson, Lewis Latimer or other Edison collaborators.",
      suggestedSource: "Wikimedia Commons, Edison laboratory staff categories",
    },
    {
      slot: "Museum exhibit",
      caption: "The phonograph or Kinetoscope in a museum collection.",
      suggestedSource: "Wikimedia Commons, Smithsonian, Library of Congress or NPS Edison collections",
    },
    {
      slot: "Statue",
      caption: "Public statue or memorial of Edison.",
      suggestedSource: "Wikimedia Commons, Category:Statues of Thomas Edison",
    },
    {
      slot: "Memorial",
      caption: "Thomas Edison National Historical Park at West Orange.",
      suggestedSource: "Wikimedia Commons, Category:Thomas Edison National Historical Park",
    },
  ],

  relatedScientists: [
    {
      slug: "nikola-tesla",
      name: "Nikola Tesla",
      reason:
        "Tesla's AC motors and polyphase system are central to understanding the current-war contrast with Edison's DC system.",
    },
    {
      slug: "michael-faraday",
      name: "Michael Faraday",
      reason:
        "Faraday's electromagnetic discoveries made generators, motors and much of electrical engineering possible.",
    },
    {
      slug: "james-clerk-maxwell",
      name: "James Clerk Maxwell",
      reason:
        "Maxwell supplied the theoretical electromagnetic framework behind the electrical age Edison commercialised.",
    },
    {
      slug: "albert-einstein",
      name: "Albert Einstein",
      reason:
        "Einstein's photoelectric work clarified light-matter interaction, while Edison noticed related vacuum-tube effects earlier in a practical context.",
    },
    {
      slug: "jagadish-chandra-bose",
      name: "Jagadish Chandra Bose",
      reason:
        "Both worked with electrical signalling and experimental devices, though Bose pursued scientific demonstration rather than commercial patents.",
    },
    {
      slug: "alan-turing",
      name: "Alan Turing",
      reason:
        "Turing's computing world grew from the same long history of signal processing, recording and machine organisation that Edison helped industrialise.",
    },
  ],

  relatedTopics: [
    {
      title: "Electric Circuits",
      href: "/subjects/physics/electric-circuits",
      description:
        "Voltage, current, resistance and power are the language of Edison's lighting systems.",
    },
    {
      title: "Electromagnetism",
      href: "/subjects/physics/electromagnetism",
      description:
        "Generators, motors, relays and telegraph systems depend on electromagnetic principles.",
    },
    {
      title: "Energy",
      href: "/subjects/physics/forms-of-energy-and-conservation",
      description:
        "Lighting and batteries are practical studies in energy conversion and efficiency.",
    },
    {
      title: "Waves and Sound",
      href: "/subjects/physics/wave-motion",
      description:
        "The phonograph records sound vibrations as mechanical traces.",
    },
    {
      title: "Measurement and Units",
      href: "/subjects/physics/measurement-and-units",
      description:
        "Watts, volts, amperes, ohms and kilowatt-hours connect invention to calculation and billing.",
    },
    {
      title: "Linear Equations",
      href: "/subjects/mathematics/linear-equations",
      description:
        "Circuit and cost calculations often reduce to proportional and linear relationships.",
    },
  ],

  quotes: [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      source: "Widely printed in Edison interviews and quote collections from the early twentieth century",
      status: "Widely attributed",
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      source: "Popular Edison attribution; exact original wording uncertain",
      status: "Widely attributed",
    },
    {
      text: "Anything that won't sell, I don't want to invent.",
      source: "Recalled statement consistent with Edison's account of the vote recorder lesson",
      status: "Widely attributed",
    },
    {
      text: "We will make electricity so cheap that only the rich will burn candles.",
      source: "Frequently attributed to Edison in electric-light publicity histories",
      status: "Widely attributed",
    },
  ],

  quiz: {
    mcq: [
      {
        question: "What was Edison's first patented invention?",
        options: ["Phonograph", "Electric vote recorder", "Carbon lamp", "Kinetoscope"],
        answer: 1,
        explanation:
          "The electric vote recorder was his first patent, but it failed commercially because legislators did not want faster voting.",
      },
      {
        question: "What invention made Edison famous in 1877?",
        options: ["Phonograph", "Radio", "Telephone", "Transformer"],
        answer: 0,
        explanation:
          "The phonograph was the first successful device to record and reproduce sound.",
      },
      {
        question: "What was Edison's main achievement in electric lighting?",
        options: [
          "Inventing the first light ever made",
          "Creating a practical lamp and complete lighting system",
          "Discovering electrons",
          "Inventing alternating current",
        ],
        answer: 1,
        explanation:
          "Earlier lamps existed; Edison made a practical lamp and the infrastructure around it.",
      },
      {
        question: "Where was Edison's famous invention factory?",
        options: ["Menlo Park", "Cambridge", "Copenhagen", "Alexandria"],
        answer: 0,
        explanation:
          "Menlo Park, New Jersey, housed the laboratory that made Edison famous as an organised inventor.",
      },
      {
        question: "What type of current did Edison promote for early power distribution?",
        options: ["Direct current", "Alternating current", "Radio current", "No current"],
        answer: 0,
        explanation:
          "Edison promoted DC systems, while Westinghouse and Tesla are associated with AC systems.",
      },
      {
        question: "Why did AC win long-distance power transmission?",
        options: [
          "It needs no wires",
          "It can be transformed to high voltage and low current",
          "It cannot shock people",
          "It uses no generators",
        ],
        answer: 1,
        explanation:
          "High voltage lowers current for the same power, reducing I squared R line losses.",
      },
      {
        question: "Who led much of the Edison laboratory's motion-picture work?",
        options: ["W. K. L. Dickson", "Isaac Newton", "Marie Curie", "Niels Bohr"],
        answer: 0,
        explanation:
          "Dickson was central to the Kinetograph and Kinetoscope programme.",
      },
      {
        question: "What was Pearl Street Station?",
        options: [
          "A railway telegraph office",
          "A central power station serving customers",
          "A movie studio",
          "A battery factory in Germany",
        ],
        answer: 1,
        explanation:
          "Pearl Street Station supplied DC electric lighting to customers in lower Manhattan.",
      },
      {
        question: "Which equation gives electrical power?",
        options: ["P = VI", "E = mc^2", "F = ma", "T^2 = a^3"],
        answer: 0,
        explanation:
          "Electrical power equals voltage times current.",
      },
      {
        question: "A 100 W lamp runs for 10 hours. How much energy is used?",
        options: ["0.1 kWh", "1.0 kWh", "10 kWh", "100 kWh"],
        answer: 1,
        explanation:
          "100 W is 0.1 kW, and 0.1 x 10 = 1.0 kWh.",
      },
      {
        question: "What did Edison's laboratories help define?",
        options: [
          "The industrial research and development model",
          "The periodic table",
          "General relativity",
          "Natural selection",
        ],
        answer: 0,
        explanation:
          "Menlo Park and West Orange helped define organised industrial R&D.",
      },
      {
        question: "What is the Edison effect related to?",
        options: ["Current flow in a vacuum tube", "Planetary motion", "DNA structure", "Radioactive half-life"],
        answer: 0,
        explanation:
          "Edison noticed current flow in evacuated lamps; others later developed vacuum-tube electronics from related effects.",
      },
      {
        question: "Which statement about Edison and the light bulb is accurate?",
        options: [
          "He invented the first incandescent lamp in history",
          "He improved the lamp and built a practical system around it",
          "He had no role in lighting",
          "He used only AC power",
        ],
        answer: 1,
        explanation:
          "The practical system is the historically accurate centre of his achievement.",
      },
      {
        question: "What was one ethical problem in the war of currents?",
        options: [
          "Use of public electrocution demonstrations to attack AC",
          "Too much university teaching",
          "Refusal to patent anything",
          "Use of solar panels",
        ],
        answer: 0,
        explanation:
          "The campaign against AC used fear and electrocution demonstrations, which are ethically troubling.",
      },
      {
        question: "What did Edison's hearing loss affect?",
        options: ["Communication and work habits", "Gravity", "The speed of light", "The periodic table"],
        answer: 0,
        explanation:
          "His deafness made communication harder but may have helped him concentrate in noisy settings.",
      },
      {
        question: "What storage battery did Edison develop?",
        options: ["Nickel-iron alkaline battery", "Lithium-ion battery", "Lead-acid battery", "Mercury button cell"],
        answer: 0,
        explanation:
          "Edison worked for years on nickel-iron alkaline storage batteries.",
      },
      {
        question: "What is the main lesson of the vote recorder failure?",
        options: [
          "Technical success must match user demand",
          "Electricity cannot count votes",
          "Patents are impossible",
          "Telegraphs do not work",
        ],
        answer: 0,
        explanation:
          "The device worked, but the intended users did not want it.",
      },
      {
        question: "Which collaborator is important in Edison's lighting work and African American invention history?",
        options: ["Lewis Latimer", "Euclid", "Pythagoras", "Johannes Kepler"],
        answer: 0,
        explanation:
          "Latimer was an important draftsman and inventor connected with carbon filament lamp improvement and electric lighting.",
      },
      {
        question: "What is a Kinetoscope?",
        options: ["A motion-picture viewing device", "A telescope", "A battery meter", "A radio receiver"],
        answer: 0,
        explanation:
          "The Kinetoscope was an early peephole motion-picture viewer.",
      },
      {
        question: "Which phrase best describes Edison's mature invention style?",
        options: [
          "Isolated theory only",
          "Organised testing, patents, teams and systems",
          "No experiments",
          "Pure astronomy",
        ],
        answer: 1,
        explanation:
          "Edison's mature work combined practical experiment, team organisation, patents, manufacturing and infrastructure.",
      },
    ],
    trueFalse: [
      {
        statement: "Edison invented the very first incandescent light bulb.",
        answer: false,
        explanation:
          "Earlier incandescent lamps existed; Edison made a practical lamp and system.",
      },
      {
        statement: "The phonograph recorded and reproduced sound.",
        answer: true,
        explanation:
          "That was its historic breakthrough.",
      },
      {
        statement: "Menlo Park was an organised industrial research laboratory.",
        answer: true,
        explanation:
          "It combined people, tools, records and experiments in a dedicated invention site.",
      },
      {
        statement: "Edison promoted alternating current over direct current.",
        answer: false,
        explanation:
          "He promoted direct current; AC was associated with Westinghouse and Tesla.",
      },
      {
        statement: "Pearl Street Station supplied electric power to customers.",
        answer: true,
        explanation:
          "It was a central station serving part of lower Manhattan.",
      },
      {
        statement: "Edison's work was always done alone.",
        answer: false,
        explanation:
          "His laboratories depended on teams of skilled assistants and collaborators.",
      },
      {
        statement: "The war of currents had both technical and public-relations dimensions.",
        answer: true,
        explanation:
          "It involved transmission engineering, business rivalry and public safety campaigns.",
      },
      {
        statement: "Edison worked on motion-picture technology.",
        answer: true,
        explanation:
          "His laboratory developed the Kinetograph and Kinetoscope.",
      },
      {
        statement: "Ohm's law is irrelevant to electric lighting.",
        answer: false,
        explanation:
          "Voltage, current and resistance are central to lamp and circuit design.",
      },
      {
        statement: "Edison's battery work succeeded exactly as quickly as he expected.",
        answer: false,
        explanation:
          "It took years, cost heavily and did not transform electric vehicles in his lifetime.",
      },
    ],
    shortAnswer: [
      {
        question: "Why is it misleading to say Edison invented the light bulb?",
        modelAnswer:
          "Earlier inventors had made incandescent lamps. Edison's achievement was improving lamp durability and resistance while developing the generator, wiring, switching, metering and business system needed for practical electric lighting.",
        marks: 4,
      },
      {
        question: "Explain why Menlo Park mattered.",
        modelAnswer:
          "Menlo Park organised invention as a team-based industrial process. It brought skilled workers, tools, materials, notebooks, a library and capital together so many trials could be run and turned into patents and products.",
        marks: 4,
      },
      {
        question: "What did Edison learn from the vote recorder?",
        modelAnswer:
          "He learned that a working device is not enough. If the intended users do not want the invention, it will fail commercially.",
        marks: 3,
      },
      {
        question: "Describe the basic working principle of the phonograph.",
        modelAnswer:
          "Sound vibrations move a diaphragm and stylus, cutting or indenting a trace on a rotating cylinder or disc. During playback, the trace moves the stylus and diaphragm again, reproducing sound.",
        marks: 3,
      },
      {
        question: "Why did AC systems beat early DC systems for large-scale distribution?",
        modelAnswer:
          "AC voltage can be raised with transformers for transmission, lowering current and reducing I squared R losses. It can then be stepped down near users. Early DC was practical only over shorter distances.",
        marks: 4,
      },
      {
        question: "Calculate the power of a device drawing 2 A from a 120 V supply.",
        modelAnswer:
          "Using P = VI, P = 120 x 2 = 240 W.",
        marks: 2,
      },
      {
        question: "Give two examples of Edison inventions or projects besides the light bulb.",
        modelAnswer:
          "Examples include the phonograph, quadruplex telegraph, Kinetograph, Kinetoscope, Pearl Street Station, nickel-iron storage battery and electric power meters.",
        marks: 3,
      },
      {
        question: "Why should Edison be studied as a systems inventor?",
        modelAnswer:
          "Many of his successes required networks of parts: devices, materials, manufacturing, patents, finance, installation and maintenance. The electric lamp mattered because the whole lighting service worked.",
        marks: 4,
      },
      {
        question: "What is ethically troubling about the war of currents?",
        modelAnswer:
          "The campaign against AC used fear, public electrocution demonstrations and association with execution to influence opinion, going beyond neutral technical comparison.",
        marks: 3,
      },
      {
        question: "How did Edison's deafness shape his work?",
        modelAnswer:
          "It made conversation and social exchange harder, but Edison often said it helped him concentrate in noisy environments. It became part of his work habits without explaining his achievements by itself.",
        marks: 3,
      },
    ],
    longAnswer: [
      {
        question:
          "Assess Edison's contribution to electric lighting. Why is the system more important than the bulb alone?",
        modelAnswer:
          "The popular story treats Edison's achievement as a single object: the light bulb. That is historically misleading. Incandescent lamps existed before Edison, but they were not yet practical, economical components of a broad service. Edison and his collaborators worked on filament material, vacuum quality, lamp resistance, sockets, switches, fuses, meters, dynamos, conductors, underground distribution and business organisation. A lamp that glows in a laboratory is not the same as a lighting system that customers can use safely every night. The Pearl Street Station made this systems approach visible: generation, distribution and consumption were engineered together. Edison's contribution was therefore not firstness but integration, reliability and commercial scaling.",
        marks: 10,
      },
      {
        question:
          "Discuss the idea of Edison as a lone genius. What does Menlo Park reveal about invention?",
        modelAnswer:
          "Edison had unusual energy, judgement and publicity skill, but the lone-genius image is incomplete. Menlo Park and West Orange were collaborative spaces filled with machinists, chemists, draftsmen, electricians and experimenters. Charles Batchelor, John Kruesi, Francis Upton, W. K. L. Dickson, Lewis Latimer and many others contributed to devices publicly associated with Edison. The laboratory model made invention cumulative and organised: notebooks recorded trials, machine shops made parts quickly, and multiple projects could run at once. Edison supplied direction, standards, finance and public identity, but invention happened through teams. Menlo Park therefore teaches that modern technology is usually institutional labour with a famous name attached.",
        marks: 10,
      },
      {
        question:
          "Compare Edison's DC system with the AC systems promoted by Westinghouse and Tesla.",
        modelAnswer:
          "Edison's DC system had advantages for early local lighting: it was understandable, compatible with his lamps and motors, and practical over short distances in dense districts. Its weakness was transmission. Low-voltage DC required high current for significant power, and line losses grow as I squared R. AC could be transformed to high voltage for transmission, lowering current and losses, then stepped down near customers. Tesla's polyphase AC motors and Westinghouse's system-building strengthened the case. The war of currents was therefore not just personality conflict. It was a struggle between system architectures. Edison was right that electricity could be dangerous, but wrong that DC was the future for large-scale distribution.",
        marks: 10,
      },
      {
        question:
          "Evaluate Edison's method of invention. Was trial and error enough?",
        modelAnswer:
          "Edison is often described as a trial-and-error inventor, and there is truth in that. His teams tested huge numbers of materials, especially for filaments and batteries. But calling it mere guessing understates the method. Trials were guided by requirements: resistance, durability, manufacturability, cost, safety and compatibility with the system. Results were recorded in notebooks and used to choose the next variation. Edison was weaker in abstract theory than some contemporaries, but strong in experimental organisation and product criteria. The limits also matter: persistence kept weak projects alive too long, as with iron-ore milling and parts of the battery programme. His method was powerful when the search space could be attacked experimentally, less powerful when theory or market timing mattered more.",
        marks: 10,
      },
      {
        question:
          "How did patents and business shape Edison's science and technology?",
        modelAnswer:
          "Patents were not an afterthought in Edison's career; they were part of the invention system. Early telegraph patents gave him income. Menlo Park existed partly to produce patentable improvements. Electric lighting required not only devices but companies, investors, municipal permissions and customer billing. Motion pictures show the darker side: patent control and litigation shaped the early industry and encouraged competitors to avoid Edison's reach. Business needs also guided what Edison chose to invent; the failed vote recorder taught him to ask whether users wanted a device. His career therefore shows that industrial invention is never pure technical work. Law, capital, manufacturing and markets are part of the technology itself.",
        marks: 10,
      },
    ],
  },
};
