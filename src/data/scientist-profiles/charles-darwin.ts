import type { ScientistProfile } from "./types";

export const charlesDarwin: ScientistProfile = {
  slug: "charles-darwin",
  seoDescription:
    "Charles Darwin developed evolution by natural selection and common descent. Explore the Beagle voyage, Origin of Species, evidence, controversies, modern genetics connections, and a full quiz.",

  timeline: [
    {
      year: "1809",
      title: "Born at Shrewsbury",
      description:
        "Charles Robert Darwin is born on 12 February into a wealthy medical and intellectual family in Shropshire, England.",
    },
    {
      year: "1817",
      title: "Mother dies",
      description:
        "His mother Susannah dies when he is eight. Darwin later remembers little of her, but family loss and domestic stability both shape his childhood.",
    },
    {
      year: "1825",
      title: "Medical studies at Edinburgh",
      description:
        "Darwin begins medicine at the University of Edinburgh but dislikes surgery and lectures. He studies natural history more seriously than medicine.",
    },
    {
      year: "1828",
      title: "Cambridge for the clergy",
      description:
        "He enters Christ's College, Cambridge, intending a clerical career. Collecting beetles, studying natural theology and meeting scientific mentors become more important than formal plans.",
    },
    {
      year: "1831",
      title: "HMS Beagle voyage begins",
      description:
        "Darwin sails on HMS Beagle as gentleman naturalist and companion to Captain Robert FitzRoy. The voyage lasts almost five years.",
      pivotal: true,
    },
    {
      year: "1835",
      title: "Galapagos observations",
      description:
        "Darwin observes island species in the Galapagos, including mockingbirds, tortoises and finches, though he understands their significance more fully only after returning home.",
      pivotal: true,
    },
    {
      year: "1836",
      title: "Returns to England",
      description:
        "Darwin brings back notebooks, fossils, specimens and geological observations that quickly make him known in scientific circles.",
    },
    {
      year: "1837",
      title: "First evolutionary tree sketch",
      description:
        "In Notebook B he writes 'I think' above a branching diagram, capturing the idea that species are related by descent and divergence.",
      pivotal: true,
    },
    {
      year: "1838",
      title: "Reads Malthus",
      description:
        "Reading Thomas Malthus on population gives Darwin the key mechanism: competition for survival can make favourable variations spread.",
      pivotal: true,
    },
    {
      year: "1839",
      title: "Marries Emma Wedgwood",
      description:
        "Darwin marries his cousin Emma Wedgwood. Their marriage is affectionate but intellectually marked by religious differences over evolution and belief.",
    },
    {
      year: "1842",
      title: "Moves to Down House",
      description:
        "Darwin settles at Down House in Kent, where he conducts experiments, writes, raises a family and manages chronic illness.",
    },
    {
      year: "1844",
      title: "Private essay on evolution",
      description:
        "He writes a substantial private essay outlining natural selection and leaves instructions for publication if he dies.",
    },
    {
      year: "1858",
      title: "Wallace letter arrives",
      description:
        "Alfred Russel Wallace sends Darwin an essay independently proposing natural selection. Their ideas are presented jointly at the Linnean Society.",
      pivotal: true,
    },
    {
      year: "1859",
      title: "Origin of Species published",
      description:
        "On the Origin of Species presents evolution by natural selection with evidence from artificial selection, biogeography, fossils, classification, embryology and variation.",
      pivotal: true,
    },
    {
      year: "1871",
      title: "Descent of Man",
      description:
        "Darwin applies evolutionary reasoning to human ancestry and develops sexual selection in detail.",
    },
    {
      year: "1872",
      title: "Expression of the Emotions",
      description:
        "He compares emotional expression in humans and animals, extending evolutionary explanation into behaviour.",
    },
    {
      year: "1881",
      title: "Earthworms book",
      description:
        "Darwin's final book shows how earthworms transform soil, reflecting his lifelong interest in small causes acting over long periods.",
    },
    {
      year: "1882",
      title: "Dies and is buried at Westminster Abbey",
      description:
        "Darwin dies at Down House on 19 April and is buried near Isaac Newton in Westminster Abbey.",
    },
  ],

  earlyLifeDetail: {
    childhood:
      "Darwin's childhood was privileged, affectionate and outdoors. He collected shells, minerals, insects and eggs, showing the habit that later became scientific method: patient attention to small differences. He was not a prodigy in schoolwork, but he had a collector's eye and a strong memory for natural detail.",
    family:
      "His father Robert Waring Darwin was a successful physician; his mother Susannah Wedgwood came from the industrial Wedgwood family. The Darwins and Wedgwoods were wealthy, reform-minded and intellectually active, giving Charles financial independence and a network of educated support.",
    education:
      "Edinburgh exposed him to marine invertebrates, radical materialist ideas and scientific societies. Cambridge gave him friendship with the botanist John Stevens Henslow and exposure to natural theology. Darwin's real education combined universities, collecting, reading, correspondence and the Beagle voyage.",
    difficulties:
      "Darwin struggled with formal medicine, public controversy and chronic illness. His evolutionary theory also threatened beliefs about fixed species, design in nature and human uniqueness, making publication emotionally and socially difficult.",
    finances:
      "Unlike many scientists, Darwin did not need a salary from science. Family wealth allowed him to live at Down House, buy books, fund experiments and maintain correspondence. That independence helped him delay, investigate and write at extraordinary length.",
    personalLife:
      "Darwin married Emma Wedgwood in 1839. They had ten children, though several died young, including Annie in 1851, a loss that deepened Darwin's religious doubts. Emma remained loving and intellectually serious even when troubled by the implications of his work.",
    influences:
      "Charles Lyell's geology taught Darwin that small causes over immense time could transform Earth. Malthus supplied the population pressure that made natural selection intelligible. Henslow and Adam Sedgwick shaped his field habits, while breeders and gardeners taught him about variation under selection.",
    booksRead:
      "Key readings included Lyell's Principles of Geology, Paley's Natural Theology, Malthus's Essay on Population, travel narratives by Humboldt and the biological literature he mined for decades after the Beagle.",
    teachersAndMentors:
      "John Stevens Henslow recommended Darwin for the Beagle voyage and remained a crucial supporter. Adam Sedgwick trained him in geology shortly before the voyage. Lyell became both intellectual model and later ally.",
    stories: [
      "Darwin was not the ship's official naturalist in a modern job sense; he sailed as a gentleman companion to Captain FitzRoy and became the voyage's scientific force through work.",
      "The Galapagos finches were not instantly recognized as the key to evolution. Darwin's mockingbirds, tortoises and later expert classification of specimens mattered more at first.",
      "Darwin spent eight years dissecting barnacles. The work looked like a delay, but it gave him taxonomic authority and intimate knowledge of variation.",
    ],
  },

  turningPoints: [
    "Henslow's recommendation for the Beagle placed Darwin in the field for five years, giving him evidence no library could supply.",
    "Reading Lyell during the voyage trained him to think historically and gradually across deep time.",
    "South American fossils and living species suggested replacement, extinction and continuity rather than fixed independent creation.",
    "The Galapagos raised the problem of related island forms adapted to local conditions.",
    "Reading Malthus in 1838 supplied the mechanism of natural selection.",
    "Wallace's 1858 essay forced Darwin to publish after two decades of private development.",
  ],

  failures: [
    "Darwin lacked a correct theory of heredity. His later pangenesis hypothesis was wrong, and Mendelian genetics would only be integrated with evolution decades later.",
    "He underestimated the difficulty posed by blending inheritance, which would dilute variation if true.",
    "Some arguments in Origin relied on incomplete fossil evidence, a weakness critics noticed, though later palaeontology filled many gaps.",
    "Darwin's language about progress and race sometimes reflected Victorian assumptions that modern science rejects.",
    "He delayed publication so long that Wallace independently reached the central mechanism, creating a priority crisis.",
  ],

  studentLessons: [
    "Collect broadly before narrowing too fast. Darwin's argument worked because geology, fossils, domestication, islands and anatomy all converged.",
    "A theory can be powerful before every mechanism is known. Natural selection was correct even before DNA and Mendelian genetics explained inheritance.",
    "Correspondence is research infrastructure. Darwin's letters to breeders, gardeners, missionaries and naturalists supplied data at global scale.",
    "Treat exceptions as tests. Sterile insects, complex organs and gaps in the fossil record became problems Darwin addressed directly.",
    "Science changes self-understanding. Evolution altered biology and also changed how humans saw their place in nature.",
  ],

  discoveries: [
    {
      name: "Evolution by natural selection",
      period: "Developed 1838; published 1858-1859",
      background:
        "Before Darwin, many naturalists recognized species similarities and some accepted transformation, but no broadly persuasive natural mechanism explained adaptation and divergence.",
      problem:
        "How can organisms become adapted to their environments without assuming that species are fixed or separately created in their present forms?",
      method:
        "Darwin combined field observations, artificial selection by breeders, population pressure from Malthus, comparative anatomy, fossils, island distribution and long-term correspondence.",
      discovery:
        "Individuals vary, some variation is inherited, organisms produce more offspring than can survive, and variants that improve survival or reproduction leave more descendants. Over generations, populations change.",
      importance:
        "Natural selection gave biology a historical and mechanistic explanation for adaptation, replacing fixed species with evolving populations.",
      modernApplications: [
        "Antibiotic and pesticide resistance",
        "Evolutionary medicine",
        "Conservation biology",
        "Artificial selection and breeding",
      ],
    },
    {
      name: "Common descent",
      period: "1837-1859",
      background:
        "Classification grouped organisms by similarity, but those groups were often treated as static patterns of design rather than evidence of genealogy.",
      problem:
        "Why do organisms fall into nested groups, and why do extinct and living forms show both similarity and replacement through time?",
      method:
        "Darwin compared anatomy, embryology, fossils, geographic distribution and island species, asking whether similarity reflected shared ancestry.",
      discovery:
        "Species are connected through branching descent. New lineages split from older ones, diversify and go extinct, producing a tree-like history of life.",
      importance:
        "Common descent made classification historical and turned biodiversity into evidence of genealogy.",
      modernApplications: [
        "Phylogenetics and molecular evolution",
        "Comparative genomics",
        "Tracing pathogen evolution",
        "Biodiversity systematics",
      ],
    },
    {
      name: "Sexual selection",
      period: "1859-1871",
      background:
        "Many traits, such as peacock tails or elaborate displays, seemed costly for survival and difficult to explain by ordinary natural selection.",
      problem:
        "Why would traits evolve that appear burdensome or dangerous if survival alone is considered?",
      method:
        "Darwin compared animal behaviour, ornaments, mating competition and human variation, distinguishing survival advantage from mating advantage.",
      discovery:
        "Traits can spread because they improve success in competition for mates or attractiveness to mates, even when they carry survival costs.",
      importance:
        "Sexual selection expanded evolutionary theory beyond survival and remains central to behavioural ecology.",
      modernApplications: [
        "Mate choice and animal behaviour",
        "Evolution of signals and ornaments",
        "Sexual dimorphism studies",
        "Human evolutionary psychology debates",
      ],
    },
    {
      name: "Earthworm soil formation",
      period: "1837-1881",
      background:
        "Earthworms were often seen as minor garden creatures rather than agents of geological or agricultural change.",
      problem:
        "Can small organisms, acting over long times, measurably transform landscapes and soils?",
      method:
        "Darwin observed worm behaviour, measured soil movement, studied buried stones and ruins, and conducted experiments at Down House.",
      discovery:
        "Earthworms continually mix, aerate and form soil, showing how small biological actions accumulate into major environmental effects.",
      importance:
        "The work extended Darwin's gradualist thinking and became important for soil biology and ecology.",
      modernApplications: [
        "Soil ecology",
        "Agricultural sustainability",
        "Bioturbation studies",
        "Ecosystem engineering",
      ],
    },
  ],

  works: [
    {
      title: "Journal of Researches",
      year: "1839",
      kind: "Book",
      description:
        "Darwin's account of the Beagle voyage, later known as The Voyage of the Beagle, combining travel writing, geology and natural history.",
    },
    {
      title: "Notebook B tree sketch",
      year: "1837",
      kind: "Paper",
      description:
        "The private notebook page with 'I think' and a branching diagram, one of the earliest visual records of Darwin's evolutionary thinking.",
    },
    {
      title: "Essay on species",
      year: "1844",
      kind: "Paper",
      description:
        "A substantial private manuscript outlining natural selection, written long before Darwin publicly announced the theory.",
    },
    {
      title: "On the Origin of Species",
      year: "1859",
      kind: "Book",
      description:
        "The central work presenting natural selection and common descent through a large synthesis of evidence.",
    },
    {
      title: "Variation of Animals and Plants under Domestication",
      year: "1868",
      kind: "Book",
      description:
        "A detailed study of variation, breeding and inheritance, including Darwin's incorrect pangenesis hypothesis.",
    },
    {
      title: "The Descent of Man",
      year: "1871",
      kind: "Book",
      description:
        "Darwin applies evolutionary reasoning to humans and develops sexual selection in detail.",
    },
    {
      title: "The Expression of the Emotions in Man and Animals",
      year: "1872",
      kind: "Book",
      description:
        "A comparative study arguing that emotional expressions have evolutionary histories shared across humans and animals.",
    },
    {
      title: "The Formation of Vegetable Mould through the Action of Worms",
      year: "1881",
      kind: "Book",
      description:
        "Darwin's final book, showing how earthworms gradually transform soil and landscapes.",
    },
  ],

  equations: [
    {
      name: "Exponential population growth",
      latex: "N(t)=N_0e^{rt}",
      explanation:
        "Malthus's population pressure influenced Darwin. If unchecked, populations can grow exponentially, creating competition because resources are limited.",
      variables: [
        { symbol: "N(t)", meaning: "population size after time t" },
        { symbol: "N_0", meaning: "initial population size" },
        { symbol: "r", meaning: "intrinsic growth rate" },
        { symbol: "t", meaning: "time" },
      ],
      workedExample: {
        problem: "A population of 200 grows with r=0.05 per year. What is the size after 10 years if unchecked?",
        steps: [
          { text: "Substitute into the growth equation.", latex: "N=200e^{(0.05)(10)}" },
          { text: "Evaluate the exponent.", latex: "N=200e^{0.5}" },
          { text: "Use e^{0.5}\\approx1.65.", latex: "N\\approx330" },
        ],
        answer: "The unchecked population would be about 330 individuals.",
      },
      modernUse:
        "Population growth models are used in ecology, epidemiology, conservation and resource planning.",
    },
    {
      name: "Selection response",
      latex: "R=h^2S",
      explanation:
        "This modern quantitative-genetics equation, developed after Darwin, expresses a principle Darwin studied through artificial selection: inherited variation responds to selection.",
      variables: [
        { symbol: "R", meaning: "response to selection in the next generation" },
        { symbol: "h^2", meaning: "narrow-sense heritability" },
        { symbol: "S", meaning: "selection differential" },
      ],
      workedExample: {
        problem: "If h^2=0.40 and selected parents average 5 cm taller than the population mean, what is the expected response?",
        steps: [
          { text: "Use the breeder's equation.", latex: "R=(0.40)(5\\text{ cm})" },
          { text: "Calculate.", latex: "R=2\\text{ cm}" },
        ],
        answer: "The next generation is expected to average 2 cm taller.",
      },
      modernUse:
        "The breeder's equation is used in agriculture, evolutionary biology and conservation genetics.",
    },
    {
      name: "Allele frequency under simple selection",
      latex: "p'=\\frac{p(1+s)}{1+sp}",
      explanation:
        "This modern population-genetic model shows how a beneficial allele can increase in frequency under selection.",
      variables: [
        { symbol: "p", meaning: "current frequency of the allele" },
        { symbol: "p'", meaning: "frequency after selection" },
        { symbol: "s", meaning: "selection coefficient" },
      ],
      workedExample: {
        problem: "If p=0.20 and s=0.10, what is the allele frequency after one round of selection?",
        steps: [
          { text: "Substitute values.", latex: "p'=\\frac{0.20(1.10)}{1+(0.10)(0.20)}" },
          { text: "Calculate numerator and denominator.", latex: "p'=\\frac{0.22}{1.02}" },
          { text: "Divide.", latex: "p'\\approx0.216" },
        ],
        answer: "The frequency rises from 0.200 to about 0.216.",
      },
      modernUse:
        "Selection equations help model resistance evolution, adaptation and evolutionary change in genomes.",
    },
    {
      name: "Hardy-Weinberg genotype frequencies",
      latex: "p^2+2pq+q^2=1",
      explanation:
        "This later result gives the baseline for allele and genotype frequencies without selection, mutation, migration, drift or non-random mating.",
      variables: [
        { symbol: "p", meaning: "frequency of one allele" },
        { symbol: "q", meaning: "frequency of the other allele" },
        { symbol: "p^2", meaning: "homozygote frequency for the first allele" },
        { symbol: "2pq", meaning: "heterozygote frequency" },
        { symbol: "q^2", meaning: "homozygote frequency for the second allele" },
      ],
      workedExample: {
        problem: "If p=0.7 and q=0.3, what heterozygote frequency is expected?",
        steps: [
          { text: "Use the heterozygote term.", latex: "2pq=2(0.7)(0.3)" },
          { text: "Calculate.", latex: "2pq=0.42" },
        ],
        answer: "The expected heterozygote frequency is 0.42.",
      },
      modernUse:
        "Hardy-Weinberg reasoning is a baseline for detecting evolution in populations.",
    },
  ],

  connections: [
    {
      field: "Biology",
      description:
        "Darwin's theory made evolution the organizing framework for anatomy, ecology, behaviour, palaeontology and classification.",
    },
    {
      field: "Earth Science",
      description:
        "Lyellian geology shaped Darwin's sense of deep time, gradual change and the connection between fossils and living forms.",
    },
    {
      field: "Medicine",
      description:
        "Evolutionary reasoning helps explain antibiotic resistance, pathogen evolution, cancer evolution and trade-offs in human biology.",
    },
    {
      field: "Statistics",
      description:
        "Modern evolutionary biology measures variation, heritability, fitness and population change statistically, extending Darwin's qualitative insight.",
    },
    {
      field: "Mathematics",
      description:
        "Population genetics later gave mathematical form to selection, drift and inheritance, solving problems Darwin could not solve.",
    },
  ],

  historicalContext: {
    worldEvents:
      "Darwin lived in Victorian Britain, during rapid industrialisation, imperial expansion, global collecting, missionary travel and growth of museums and learned societies.",
    politics:
      "The British Empire made global specimen collection possible while also embedding science in colonial networks. Darwin's data came through voyages and correspondents shaped by that world.",
    wars:
      "Darwin's career did not centre on war, but naval surveying, imperial routes and global maritime power made the Beagle voyage possible.",
    universities:
      "Natural history was not yet a modern professional biology discipline. Clergymen, physicians, gentlemen collectors, museum curators and colonial correspondents all contributed.",
    scientificCommunity:
      "Darwin worked through letters, societies and specialist networks. Wallace, Lyell, Hooker, Huxley, Gray and many breeders and naturalists were crucial to the theory's reception and evidence.",
    technology:
      "Sailing ships, specimen preservation, printing, microscopy, museums, pigeon breeding, gardens and postal networks formed the practical technology of Darwinian science.",
  },

  backlash: [
    {
      type: "Religious opposition",
      title: "Challenge to special creation",
      description:
        "Darwin's theory challenged common readings of species as separately created and fixed, creating religious controversy in Victorian Britain and beyond.",
      status: "Verified",
    },
    {
      type: "Public criticism",
      title: "Human ancestry controversy",
      description:
        "Although Origin mostly avoided human evolution, the implication was obvious. Descent of Man made the issue explicit and intensified debate.",
      status: "Verified",
    },
    {
      type: "Priority dispute",
      title: "Wallace and natural selection",
      description:
        "Alfred Russel Wallace independently formulated natural selection. The 1858 joint presentation avoided a destructive dispute but remains central to the story of priority.",
      status: "Verified",
    },
    {
      type: "Controversy",
      title: "Social misuse of evolution",
      description:
        "Later thinkers misused evolutionary language to justify racism, imperialism and eugenics. These political ideologies should not be confused with Darwin's biological mechanism.",
      status: "Verified",
    },
    {
      type: "Academic conflict",
      title: "Scientific objections to mechanism",
      description:
        "Critics raised serious questions about inheritance, the fossil record, complex organs and geological time. Some objections were resolved only by later genetics and palaeontology.",
      status: "Verified",
    },
  ],

  challengesDetailed: [
    {
      category: "Health",
      description:
        "Darwin suffered long-term illness with nausea, fatigue, palpitations and anxiety-like symptoms. Its exact cause remains debated, but it shaped his work habits.",
    },
    {
      category: "Personal",
      description:
        "The death of his daughter Annie in 1851 affected him deeply and contributed to his distance from conventional Christian belief.",
    },
    {
      category: "Professional",
      description:
        "Darwin had to persuade specialists across many fields, not simply announce a theory. Origin was written as a long argument from converging evidence.",
    },
    {
      category: "Scientific",
      description:
        "He lacked Mendelian genetics, DNA, mutation theory and modern fossil evidence, leaving genuine explanatory gaps.",
    },
    {
      category: "Social",
      description:
        "Evolution touched public beliefs about morality, human uniqueness and divine design, so the debate extended far beyond biology.",
    },
  ],

  achievements: [
    {
      title: "Fellow of the Royal Society",
      year: "1839",
      description:
        "Darwin was elected to the Royal Society after his Beagle work established him as a serious naturalist and geologist.",
    },
    {
      title: "Royal Medal",
      year: "1853",
      description:
        "Awarded by the Royal Society for his work on barnacles and geology before Origin made him globally famous.",
    },
    {
      title: "Copley Medal",
      year: "1864",
      description:
        "The Royal Society's highest award recognized Darwin's broad scientific achievement.",
    },
    {
      title: "Origin of Species",
      year: "1859",
      description:
        "The book became one of the most influential scientific works ever published and made evolution central to biology.",
    },
    {
      title: "Westminster Abbey burial",
      year: "1882",
      description:
        "Darwin's burial near Newton marked national recognition of his scientific stature despite continuing controversy.",
    },
  ],

  funFacts: [
    "Darwin and Abraham Lincoln were born on the same day: 12 February 1809.",
    "He was an enthusiastic beetle collector at Cambridge and once put a beetle in his mouth when his hands were full.",
    "Darwin spent years studying barnacles before publishing Origin, partly to master species variation from the inside.",
    "He bred pigeons and attended pigeon shows to understand artificial selection.",
    "The phrase survival of the fittest was coined by Herbert Spencer, not Darwin, though Darwin later used it.",
    "Darwin's final book was about earthworms, not grand evolutionary controversy.",
  ],

  didYouKnow: [
    {
      title: "Finches were not instant proof",
      content:
        "The famous Galapagos finches became iconic later. Darwin's own early reasoning relied heavily on mockingbirds, tortoises, fossils and expert classification after the voyage.",
    },
    {
      title: "Wallace mattered",
      content:
        "Alfred Russel Wallace independently reached natural selection, prompting the joint 1858 presentation and Darwin's rapid writing of Origin.",
    },
    {
      title: "Darwin did experiments at home",
      content:
        "Down House was a working research station with plant experiments, pigeon breeding, worm studies and a vast correspondence network.",
    },
    {
      title: "Evolution is broader than selection",
      content:
        "Modern evolutionary theory includes selection, mutation, drift, gene flow, recombination and developmental constraints.",
    },
  ],

  visualPrompts: [
    {
      category: "Hero portrait",
      prompt:
        "Respectful portrait of Charles Darwin in his Down House study with notebooks, botanical specimens and a branching tree sketch, Victorian naturalist atmosphere, realistic educational style.",
    },
    {
      category: "Young scientist",
      prompt:
        "Young Charles Darwin collecting beetles and specimens near Cambridge, field notebook and specimen box, early nineteenth-century clothing, natural daylight.",
    },
    {
      category: "Major discovery",
      prompt:
        "Educational illustration of Darwin's branching tree of life with finches, fossils and island species around it, clean labels, natural history style.",
    },
    {
      category: "Map",
      prompt:
        "HMS Beagle voyage map showing route from England to South America, Galapagos, Pacific and return, concise dates and specimen icons.",
    },
    {
      category: "Scientific diagram",
      prompt:
        "Clean diagram of natural selection: variation, heritability, competition, differential survival and population change across generations.",
    },
    {
      category: "Laboratory",
      prompt:
        "Darwin at Down House conducting plant experiments with glasshouse, notebooks, seed trays and measuring tools, historically grounded.",
    },
  ],

  photoPlaceholders: [
    {
      slot: "Portrait",
      caption: "John Collier portrait of Charles Darwin.",
      suggestedSource: "Wikimedia Commons: Charles Robert Darwin by John Collier.jpg",
    },
    {
      slot: "Childhood",
      caption: "The Mount, Shrewsbury, Darwin's birthplace or a historical Shrewsbury setting.",
      suggestedSource: "Wikimedia Commons public-domain or CC-licensed Darwin birthplace images",
    },
    {
      slot: "University",
      caption: "Christ's College, Cambridge, connected to Darwin's student years.",
      suggestedSource: "Wikimedia Commons: Christ's College Cambridge public-domain or CC images",
    },
    {
      slot: "Historic location",
      caption: "Down House, Darwin's home and research base.",
      suggestedSource: "Wikimedia Commons: Down House Darwin images",
    },
    {
      slot: "Notebooks",
      caption: "Darwin's 1837 'I think' tree sketch from Notebook B.",
      suggestedSource: "Wikimedia Commons: Darwin Tree 1837 cropped.png",
    },
    {
      slot: "Museum exhibit",
      caption: "HMS Beagle model, Darwin specimens or Origin of Species first edition.",
      suggestedSource: "Natural History Museum, Cambridge University Library or Wikimedia Commons licensed images",
    },
    {
      slot: "Statue",
      caption: "Charles Darwin statue at the Natural History Museum, London.",
      suggestedSource: "Wikimedia Commons: Charles Darwin statue Natural History Museum",
    },
  ],

  relatedScientists: [
    {
      slug: "alfred-russel-wallace",
      name: "Alfred Russel Wallace",
      reason:
        "Wallace independently formulated natural selection and shared the 1858 presentation with Darwin.",
    },
    {
      slug: "gregor-mendel",
      name: "Gregor Mendel",
      reason:
        "Mendel's genetics later supplied the inheritance mechanism Darwin lacked.",
    },
    {
      slug: "jane-goodall",
      name: "Jane Goodall",
      reason:
        "Goodall's primate research continues Darwin's project of understanding humans and animals in evolutionary continuity.",
    },
    {
      slug: "rosalind-franklin",
      name: "Rosalind Franklin",
      reason:
        "Franklin's DNA work belongs to the molecular biology that later grounded heredity and evolution.",
    },
    {
      slug: "erwin-schrodinger",
      name: "Erwin Schrodinger",
      reason:
        "Schrodinger's What Is Life? influenced the molecular turn that connected genes, information and evolution.",
    },
  ],

  relatedTopics: [
    {
      title: "Evolution and Natural Selection",
      href: "/subjects/biology/evolution-and-natural-selection",
      description:
        "Darwin's central theory explains adaptation through heritable variation and differential reproductive success.",
    },
    {
      title: "Genetics and Inheritance",
      href: "/subjects/biology/genetics-and-inheritance",
      description:
        "Modern genetics solved the inheritance problems Darwin could not fully answer.",
    },
    {
      title: "Ecology",
      href: "/subjects/biology/ecology",
      description:
        "Selection acts in ecological contexts involving competition, predation, resources and environment.",
    },
    {
      title: "Classification and Phylogeny",
      href: "/subjects/biology/classification-and-phylogeny",
      description:
        "Common descent turns classification into a record of evolutionary relationships.",
    },
    {
      title: "Science and Society",
      href: "/learning-hub/science-and-society",
      description:
        "Darwin's reception shows how scientific theories can reshape culture, religion and public identity.",
    },
  ],

  quotes: [
    {
      text: "There is grandeur in this view of life.",
      source: "On the Origin of Species, closing paragraph, 1859",
      status: "Verified",
    },
    {
      text: "I think.",
      source: "Notebook B, 1837, above Darwin's first evolutionary tree sketch",
      status: "Verified",
    },
    {
      text: "From so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.",
      source: "On the Origin of Species, closing sentence, 1859",
      status: "Verified",
    },
    {
      text: "Ignorance more frequently begets confidence than does knowledge.",
      source: "The Descent of Man, 1871",
      status: "Verified",
    },
    {
      text: "It is not the strongest of the species that survives.",
      source: "Often attributed to Darwin but not found in his writings in this form",
      status: "Disputed",
    },
  ],

  quiz: {
    mcq: [
      {
        question: "What is natural selection?",
        options: [
          "Differential survival and reproduction of heritable variation",
          "The sudden creation of fixed species",
          "The inheritance of acquired habits exactly as learned",
          "The movement of planets around the Sun",
        ],
        answer: 0,
        explanation:
          "Natural selection acts when heritable variants differ in survival or reproductive success.",
      },
      {
        question: "Which voyage supplied much of Darwin's early evidence?",
        options: ["HMS Beagle", "Apollo 11", "Endeavour to Tahiti with Cook", "The Fram expedition"],
        answer: 0,
        explanation:
          "The Beagle voyage gave Darwin geological, fossil and biological observations from around the world.",
      },
      {
        question: "Who independently developed a theory of natural selection?",
        options: ["Alfred Russel Wallace", "Isaac Newton", "Antoine Lavoisier", "Galileo Galilei"],
        answer: 0,
        explanation:
          "Wallace sent Darwin an essay in 1858 outlining the same core mechanism.",
      },
      {
        question: "What did Darwin lack that later strengthened evolutionary theory?",
        options: ["A correct theory of genetics", "Any fossil evidence", "Any observations of variation", "Any interest in classification"],
        answer: 0,
        explanation:
          "Mendelian genetics and DNA were unknown to Darwin.",
      },
      {
        question: "What does common descent mean?",
        options: [
          "Species share ancestors through branching history",
          "All organisms are equally complex",
          "Every species appears independently",
          "Only fossils evolve",
        ],
        answer: 0,
        explanation:
          "Common descent explains biological similarity through shared ancestry.",
      },
      {
        question: "Which book made Darwin's theory famous in 1859?",
        options: ["On the Origin of Species", "Principia", "Silent Spring", "Traite de radioactivite"],
        answer: 0,
        explanation:
          "Origin presented the central argument for natural selection and common descent.",
      },
      {
        question: "Why was Malthus important to Darwin?",
        options: [
          "He emphasized population pressure and competition",
          "He discovered DNA",
          "He invented the microscope",
          "He mapped the Galapagos",
        ],
        answer: 0,
        explanation:
          "Malthus helped Darwin see how overproduction and limited resources could drive selection.",
      },
      {
        question: "Which area did Darwin study for eight years before Origin?",
        options: ["Barnacles", "Black holes", "Radio waves", "Semiconductors"],
        answer: 0,
        explanation:
          "Barnacle research gave Darwin taxonomic authority and experience with variation.",
      },
      {
        question: "What is artificial selection?",
        options: [
          "Human-guided breeding for chosen traits",
          "Random extinction by asteroids",
          "A chemical test for oxygen",
          "A telescope lens correction",
        ],
        answer: 0,
        explanation:
          "Darwin used domestic breeding as an analogy for selection in nature.",
      },
      {
        question: "What does R=h^2S describe in modern evolutionary biology?",
        options: [
          "Response to selection",
          "Radioactive decay",
          "Planetary acceleration",
          "Electric current",
        ],
        answer: 0,
        explanation:
          "The breeder's equation relates heritable variation and selection to evolutionary response.",
      },
      {
        question: "Which Darwin book focused strongly on human evolution?",
        options: ["The Descent of Man", "Sidereus Nuncius", "Opticks", "Dialogue"],
        answer: 0,
        explanation:
          "The Descent of Man applied evolutionary ideas to humans and sexual selection.",
      },
      {
        question: "What did Darwin's tree sketch represent?",
        options: [
          "Branching descent of species",
          "A family budget",
          "A map of London",
          "A telescope design",
        ],
        answer: 0,
        explanation:
          "The sketch visualized species splitting and sharing ancestry.",
      },
      {
        question: "Which phrase was coined by Herbert Spencer, not Darwin originally?",
        options: ["Survival of the fittest", "Natural selection", "Common descent", "Sexual selection"],
        answer: 0,
        explanation:
          "Spencer coined the phrase; Darwin later adopted it in later editions.",
      },
      {
        question: "Why were islands important to Darwin's thinking?",
        options: [
          "They showed related species differing by place",
          "They had no living organisms",
          "They eliminated all variation",
          "They disproved geology",
        ],
        answer: 0,
        explanation:
          "Island distributions helped suggest descent with modification and adaptation to local conditions.",
      },
      {
        question: "Which book influenced Darwin's deep-time thinking?",
        options: ["Lyell's Principles of Geology", "Euclid's Elements only", "The Assayer", "Micrographia only"],
        answer: 0,
        explanation:
          "Lyell's geology showed how small changes over immense time could reshape Earth.",
      },
      {
        question: "What is sexual selection?",
        options: [
          "Selection through mating success",
          "Selection by radioactive decay",
          "Selection of planets by gravity",
          "Selection of minerals by hardness",
        ],
        answer: 0,
        explanation:
          "Sexual selection explains traits that improve mating success, even if costly for survival.",
      },
      {
        question: "What did Darwin's final book study?",
        options: ["Earthworms and soil formation", "Quantum mechanics", "Electric lighting", "The periodic table"],
        answer: 0,
        explanation:
          "His 1881 book examined how worms transform soil.",
      },
      {
        question: "What does Hardy-Weinberg provide in modern evolution?",
        options: [
          "A no-evolution baseline for genotype frequencies",
          "A law of falling bodies",
          "A method for telescope grinding",
          "A chemical naming system",
        ],
        answer: 0,
        explanation:
          "It gives expected genotype frequencies under specific non-evolving conditions.",
      },
      {
        question: "What was one serious Victorian controversy around Darwin's theory?",
        options: [
          "Its challenge to fixed species and human uniqueness",
          "Its claim that Earth is flat",
          "Its rejection of all fossils",
          "Its invention of electricity",
        ],
        answer: 0,
        explanation:
          "Evolution challenged common religious and cultural ideas about species and humans.",
      },
      {
        question: "What made Darwin's argument in Origin unusually persuasive?",
        options: [
          "Converging evidence from many fields",
          "A single unsupported anecdote",
          "Mathematical proof of DNA structure",
          "The absence of any examples",
        ],
        answer: 0,
        explanation:
          "Origin synthesized evidence from domestication, fossils, biogeography, anatomy, embryology and classification.",
      },
    ],
    trueFalse: [
      {
        statement: "Darwin knew about DNA.",
        answer: false,
        explanation:
          "DNA's role in heredity was discovered long after Darwin's death.",
      },
      {
        statement: "Wallace independently developed natural selection.",
        answer: true,
        explanation:
          "Wallace's 1858 essay prompted the joint presentation with Darwin.",
      },
      {
        statement: "Darwin argued that species are fixed and never change.",
        answer: false,
        explanation:
          "His theory explained descent with modification over generations.",
      },
      {
        statement: "Artificial selection helped Darwin explain natural selection.",
        answer: true,
        explanation:
          "Breeding showed how selection on variation can change populations.",
      },
      {
        statement: "The famous Galapagos finch story was fully clear to Darwin during the voyage.",
        answer: false,
        explanation:
          "The finches became more important after expert classification and later interpretation.",
      },
      {
        statement: "Darwin's pangenesis hypothesis is accepted today.",
        answer: false,
        explanation:
          "Pangenesis was Darwin's incorrect attempt to explain heredity.",
      },
      {
        statement: "Origin of Species avoided making human evolution its central explicit topic.",
        answer: true,
        explanation:
          "Origin implied human evolution but treated it directly only briefly; Descent of Man later made it explicit.",
      },
      {
        statement: "Darwin's evidence included geology as well as biology.",
        answer: true,
        explanation:
          "Geology, fossils and deep time were central to his reasoning.",
      },
      {
        statement: "Natural selection requires heritable variation.",
        answer: true,
        explanation:
          "If variation is not inherited, selection cannot accumulate adaptive change across generations.",
      },
      {
        statement: "Modern evolutionary theory consists only of Darwin's original 1859 ideas.",
        answer: false,
        explanation:
          "Modern theory includes genetics, mutation, drift, gene flow and molecular evidence beyond Darwin.",
      },
    ],
    shortAnswer: [
      {
        question: "What are the core conditions for natural selection?",
        modelAnswer:
          "There must be variation among individuals, some of that variation must be heritable, organisms must produce more offspring than can survive, and variants must differ in survival or reproductive success.",
        marks: 5,
      },
      {
        question: "Why was the Beagle voyage important?",
        modelAnswer:
          "It gave Darwin direct evidence from geology, fossils, island species and geographic distribution. The observations became the raw material for his later theory of descent with modification.",
        marks: 5,
      },
      {
        question: "How did artificial selection influence Darwin?",
        modelAnswer:
          "Breeders showed that selecting small inherited differences could dramatically change domestic animals and plants. Darwin used this as an analogy for selection by natural conditions.",
        marks: 4,
      },
      {
        question: "What problem did Darwin have with heredity?",
        modelAnswer:
          "He did not know Mendelian genetics or DNA. His pangenesis hypothesis was wrong, and he could not fully explain how variation was preserved and transmitted.",
        marks: 5,
      },
      {
        question: "Why did Wallace's letter matter?",
        modelAnswer:
          "Wallace independently proposed natural selection and sent the essay to Darwin. This prompted the 1858 joint presentation and pushed Darwin to write Origin quickly.",
        marks: 4,
      },
      {
        question: "What is common descent?",
        modelAnswer:
          "Common descent is the idea that species share ancestors and have diversified through branching lineages over time, rather than being separately fixed creations.",
        marks: 4,
      },
      {
        question: "Give one example of modern evidence Darwin did not have.",
        modelAnswer:
          "Examples include DNA sequences, Mendelian inheritance, mutation mechanisms, radiometric dating, modern fossils, observed microbial evolution or phylogenetic genomics.",
        marks: 4,
      },
      {
        question: "Why is social Darwinism not the same as Darwinian biology?",
        modelAnswer:
          "Social Darwinism used evolutionary language to justify political and social hierarchies. Darwinian biology is a scientific explanation of heritable variation and differential reproduction in populations.",
        marks: 5,
      },
      {
        question: "Why did Darwin study barnacles?",
        modelAnswer:
          "Barnacle work gave him expertise in classification and variation. It also strengthened his reputation before Origin and helped him understand species boundaries.",
        marks: 4,
      },
      {
        question: "What does sexual selection explain?",
        modelAnswer:
          "It explains traits that spread because they improve mating success, such as ornaments, displays or competitive structures, even when those traits may be costly for survival.",
        marks: 4,
      },
    ],
    longAnswer: [
      {
        question:
          "Explain Darwin's argument for natural selection and why it was powerful.",
        modelAnswer:
          "Darwin's argument begins with ordinary observations: individuals vary, some variation is inherited, and organisms produce more offspring than can survive. In a world of limited resources, not all individuals leave the same number of descendants. If a heritable trait improves survival or reproduction, it will tend to become more common over generations. This mechanism was powerful because it explained adaptation without requiring species to be fixed or designed separately in their present form. Darwin made the argument persuasive by drawing evidence from many fields: artificial selection, fossils, biogeography, classification, embryology, comparative anatomy and island species. No single example carried the theory alone; the strength was convergence.",
        marks: 14,
      },
      {
        question:
          "Assess the role of the HMS Beagle voyage in Darwin's development.",
        modelAnswer:
          "The Beagle voyage transformed Darwin from a promising collector into a historical naturalist. In South America he saw fossils of extinct mammals resembling living forms, geological uplift, volcanic islands and distributions of species that made more sense historically than as isolated acts of creation. The Galapagos suggested that nearby islands could hold related but distinct forms. Reading Lyell during the voyage taught him to think in terms of deep time and small causes accumulating. Darwin did not return with the whole theory already complete, but the voyage gave him the evidence, habits and questions from which the theory grew.",
        marks: 12,
      },
      {
        question:
          "Discuss Darwin's limitations and how later biology addressed them.",
        modelAnswer:
          "Darwin's main limitation was heredity. He knew that variation could be inherited, but he did not know genes, chromosomes, DNA or mutation. His pangenesis hypothesis was incorrect, and blending inheritance would have threatened selection by diluting variation. Later Mendelian genetics showed that inheritance is particulate, preserving variation across generations. Population genetics then joined Mendel and Darwin mathematically, showing how allele frequencies change under selection, mutation, drift and migration. Molecular biology added DNA sequences as direct evidence of common descent. These later developments did not overthrow Darwin's central insight; they supplied the mechanism and mathematics he lacked.",
        marks: 14,
      },
      {
        question:
          "Explain why Darwin's theory was controversial in Victorian society.",
        modelAnswer:
          "Darwin's theory was controversial because it changed more than a technical field. It challenged fixed species, special creation and a sharp boundary between humans and other animals. Victorian natural history was intertwined with natural theology, so adaptation had often been read as evidence of divine design. Natural selection offered a natural mechanism that could produce adaptation without direct design of each trait. The human implication, though mostly implicit in Origin, was obvious and unsettling. At the same time, there were legitimate scientific objections about inheritance, fossils, complex organs and geological time. The controversy therefore combined religion, culture, scientific uncertainty and public identity.",
        marks: 14,
      },
      {
        question:
          "Compare Darwin's natural selection with artificial selection by breeders.",
        modelAnswer:
          "Artificial selection occurs when humans choose which organisms reproduce based on desired traits, as in pigeons, dogs or crops. Darwin saw that small inherited differences could accumulate quickly under this pressure. Natural selection removes the human chooser. Environmental conditions, competition, predation, disease and mating success affect which individuals leave more descendants. Both processes require variation and inheritance, and both can change populations over generations. The comparison was rhetorically powerful because readers already knew domestic breeds could be transformed. Darwin's radical step was to argue that nature could produce adaptation by an analogous but unguided process across far longer timescales.",
        marks: 12,
      },
    ],
  },
};
