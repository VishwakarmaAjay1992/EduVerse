import type { ScientistProfile } from "./types";

export const alKhwarizmi: ScientistProfile = {
  slug: "al-khwarizmi",
  seoDescription:
    "Al-Khwarizmi gave us the words algebra and algorithm. Explore completing the square, the six equation types, al-jabr and al-muqabala, Hindu-Arabic numerals, worked examples and a full quiz.",

  timeline: [
    {
      year: "c. 780",
      title: "Born",
      description:
        "Muhammad ibn Musa al-Khwarizmi is born, probably in Khwarazm south of the Aral Sea, though one early source places his family near Baghdad. The date is an estimate.",
    },
    {
      year: "762",
      title: "Baghdad founded",
      description:
        "The Abbasid caliph al-Mansur founds Baghdad as a circular planned city, which within decades becomes the intellectual centre of the world.",
    },
    {
      year: "c. 810",
      title: "The House of Wisdom",
      description:
        "Al-Khwarizmi joins the Bayt al-Hikma in Baghdad, a centre of translation and research funded by the caliphate, where Greek, Persian and Indian works are rendered into Arabic and extended.",
      pivotal: true,
    },
    {
      year: "813",
      title: "Al-Ma'mun becomes caliph",
      description:
        "Al-Ma'mun's reign begins. He supports the sciences actively, commissioning translations, observations and original research on a scale not seen before.",
    },
    {
      year: "c. 820",
      title: "The Algebra",
      description:
        "Al-Khwarizmi completes Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala, the book that gives algebra its name and its systematic method.",
      pivotal: true,
    },
    {
      year: "c. 825",
      title: "On Calculation with Hindu Numerals",
      description:
        "He writes the treatise transmitting the decimal positional system, including zero, from India into the Islamic world. The Arabic original is lost; only Latin translations survive.",
      pivotal: true,
    },
    {
      year: "c. 830",
      title: "Measuring the Earth",
      description:
        "Al-Ma'mun commissions a measurement of the Earth's circumference on the plain of Sinjar. Al-Khwarizmi is among the scholars associated with the project.",
    },
    {
      year: "c. 830",
      title: "Kitab surat al-ard",
      description:
        "His Book of the Description of the Earth revises Ptolemy's geography, giving coordinates for over two thousand localities and correcting the length of the Mediterranean.",
    },
    {
      year: "c. 840",
      title: "Zij al-Sindhind",
      description:
        "His astronomical tables combine Indian, Persian and Greek methods, and remain in use in revised forms for centuries across the Islamic world and in Spain.",
    },
    {
      year: "c. 850",
      title: "Dies",
      description:
        "Al-Khwarizmi dies, probably in Baghdad. As with his birth, the date is an estimate and no account of his death survives.",
    },
    {
      year: "1126",
      title: "Adelard translates the tables",
      description:
        "Adelard of Bath renders the astronomical tables into Latin, one of the earliest routes by which al-Khwarizmi's work reaches Europe.",
    },
    {
      year: "1145",
      title: "Robert of Chester translates the Algebra",
      description:
        "The Latin translation of the Algebra introduces the word algebra to European mathematics, followed shortly by Gerard of Cremona's version.",
      pivotal: true,
    },
    {
      year: "12th century",
      title: "Algoritmi becomes algorithm",
      description:
        "Latin versions of his arithmetic open with the words Dixit Algoritmi — thus spoke al-Khwarizmi. The name comes to mean the decimal calculating procedure, and eventually any step-by-step method.",
      pivotal: true,
    },
    {
      year: "1202",
      title: "Fibonacci spreads the numerals",
      description:
        "Leonardo of Pisa's Liber Abaci promotes Hindu-Arabic numerals to European merchants, accelerating the replacement of Roman numerals in commerce.",
    },
    {
      year: "1831",
      title: "Rosen's English edition",
      description:
        "Frederic Rosen publishes the Arabic text of the Algebra with an English translation, making it accessible to modern scholarship.",
    },
  ],

  earlyLifeDetail: {
    childhood:
      "Nothing is recorded. The name al-Khwarizmi indicates a connection to Khwarazm, the region south of the Aral Sea in modern Uzbekistan and Turkmenistan, and this is usually taken to mean he or his family came from there. The historian al-Tabari gives him an additional epithet suggesting origins near Baghdad instead, and the two accounts have never been reconciled.",
    family:
      "No family is recorded beyond his father's name, Musa, preserved in the patronymic. Whether he had a family of his own is unknown.",
    education:
      "Unrecorded. He appears in the historical record already established as a scholar at the House of Wisdom, competent in Greek geometry, Indian arithmetic and Persian astronomical traditions — a combination that suggests a thorough education in the translated literature available in Baghdad.",
    difficulties:
      "His central technical difficulty was the absence of any symbolic notation. He had no equals sign, no letters for unknowns, no exponents and no way to write a coefficient except as a word. Every step of every argument had to be expressed in ordinary Arabic prose, and even the numbers in his algebra are written out as words rather than figures — despite his having written a separate book advocating the numeral system.",
    finances:
      "The Abbasid caliphate funded the House of Wisdom directly, and al-Ma'mun in particular treated the support of scholarship as a matter of state policy. Al-Khwarizmi worked as a salaried scholar, which is why the work is dedicated to the caliph.",
    personalLife:
      "Nothing is known of his personal life, religious views or character. The dedication to al-Ma'mun in the Algebra is the closest thing to a personal statement that survives, and it is a formal court dedication.",
    influences:
      "Indian mathematics supplied the decimal positional numerals and, through the Brahmasphutasiddhanta of Brahmagupta, methods for quadratics. Greek geometry, principally Euclid, supplied the standard of proof he applied to his algebraic rules. Babylonian traditions, still alive in Mesopotamian practice, supplied a long history of solving quadratic problems computationally.",
    booksRead:
      "The Sanskrit astronomical work brought to Baghdad in the 770s, known in Arabic as the Sindhind, shaped his astronomical tables. Ptolemy's Geography underlies his own geographical work, which corrects it. Euclid's Elements, translated into Arabic in his lifetime, supplied his geometric proofs.",
    teachersAndMentors:
      "No teachers are named in any source. The House of Wisdom was a working community of translators and scholars, and his intellectual formation is visible only in what he used.",
    stories: [
      "The Algebra is explicitly a practical book. Al-Khwarizmi says in the preface that he wrote it for what people constantly need in matters of inheritance, legacies, partition, lawsuits and trade, and in surveying land, digging canals and making geometrical calculations. Roughly half the book is devoted to inheritance problems under Islamic law, which involve genuinely intricate fractional divisions.",
      "The Arabic original of his book on Hindu numerals is lost entirely. It survives only in Latin translation, which begins with the words Dixit Algoritmi. Readers who did not know it was a name took Algoritmi to mean the method itself, and the misunderstanding gave us the word algorithm.",
      "Al-jabr, the word that became algebra, means restoration or setting back together. The same word was used in medieval Spain for the setting of broken bones, and a barber-surgeon who did such work could be called an algebrista.",
    ],
  },

  turningPoints: [
    "Joining the House of Wisdom, which gave him access to Greek, Indian and Persian mathematics simultaneously.",
    "Deciding to treat equation-solving as a subject in itself rather than as a collection of tricks for particular problems.",
    "Choosing to prove his rules geometrically rather than merely assert that they work.",
    "Writing a separate treatise advocating Hindu-Arabic numerals, which reached Europe and displaced Roman numerals.",
    "The Latin translations of the twelfth century, which carried both his method and his name into European mathematics.",
  ],

  failures: [
    "He used no symbolic notation whatever, which made his general methods enormously harder to state and to apply than they needed to be. Symbolic algebra took another seven hundred years to develop.",
    "Refusing to admit negative numbers forced him to split what is really one quadratic equation into six separate cases, each with its own procedure.",
    "He gave no method for cubic equations, which were solved only later, notably by Omar Khayyam geometrically and by the Italian algebraists in the sixteenth century.",
    "Where a quadratic has two positive roots he does report both, but where the roots are negative or complex he simply records that the case is impossible, so his solutions are incomplete by modern standards.",
    "His geographical coordinates, though a real improvement on Ptolemy, still contained substantial errors, particularly in longitude, which was not accurately determinable with available methods.",
  ],

  studentLessons: [
    "Naming a subject can create it. Equation-solving existed before al-Khwarizmi; treating it as a field with its own methods is what made it grow.",
    "A general procedure beats a clever trick. His six cases each come with a fixed recipe that works every time, which is exactly what an algorithm is.",
    "Proof matters even for a practical book. He could have simply asserted his rules; demonstrating them geometrically is what made them trustworthy.",
    "Notation is not a detail. Everything he did in paragraphs of prose now fits on one line, and that compression is what let algebra advance.",
    "Synthesis is original work. His contribution was combining Greek proof, Indian arithmetic and Babylonian computation, and no one had done it.",
  ],

  discoveries: [
    {
      name: "Algebra as a systematic discipline",
      period: "c. 820",
      background:
        "Quadratic problems had been solved for two thousand years. Babylonian scribes worked them numerically, Diophantus handled particular cases with abbreviations, and Brahmagupta in seventh-century India gave rules including negative quantities. All of this was organised around problems, not around methods.",
      problem:
        "Can equation-solving be treated as a subject in its own right, with general procedures that apply to any problem of a given form rather than solutions to particular puzzles?",
      method:
        "Al-Khwarizmi reduced every linear and quadratic equation to one of six standard forms, since without negative numbers the terms had to be arranged so that all coefficients were positive. For each form he gave a fixed procedure, then justified it with a geometric demonstration using squares and rectangles.",
      discovery:
        "A complete and self-contained method: identify the form, apply the corresponding procedure, obtain the root. The book contains no unsolved cases within its scope.",
      importance:
        "This is the origin of algebra as a discipline. The idea that a class of problems has a general method fixed in advance, rather than requiring fresh ingenuity each time, is also the origin of algorithmic thinking.",
      modernApplications: [
        "All of school and university algebra",
        "Symbolic computation and computer algebra systems",
        "The concept of an algorithm as a fixed procedure",
        "Any modelling that reduces a situation to an equation",
      ],
    },
    {
      name: "Completing the square",
      period: "c. 820",
      background:
        "Solving a quadratic requires undoing the interaction between the squared term and the linear term. The Babylonians had a numerical recipe; what was missing was an explanation of why it works.",
      problem:
        "Given that a square and ten of its roots equal thirty-nine, what is the root — and why does the standard recipe produce the right answer?",
      method:
        "Draw the square of unknown side, then attach four rectangles of width one quarter of the coefficient to its four sides. The resulting cross-shaped figure has the area given in the problem. Adding four small corner squares completes it into a larger square whose area is now known, and whose side can therefore be found.",
      discovery:
        "Halve the coefficient of the root, square it, add to both sides, take the square root and subtract the half-coefficient. For a square plus ten roots equal to thirty-nine, the answer is three.",
      importance:
        "This is the derivation of the quadratic formula, and the geometric argument makes it a demonstration rather than a recipe. Completing the square remains the standard method for deriving the formula and for handling conic sections.",
      modernApplications: [
        "Deriving the quadratic formula",
        "Reducing conic sections to standard form",
        "Optimisation, by rewriting a quadratic to expose its vertex",
        "Gaussian integrals and the normal distribution in statistics",
      ],
    },
    {
      name: "Al-jabr and al-muqabala",
      period: "c. 820",
      background:
        "Equations as they arise from real problems are messy: quantities subtracted, like terms scattered on both sides, coefficients that are not one. Before anything can be solved the equation must be put into a recognisable form.",
      problem:
        "How can an arbitrary equation be reduced systematically to one of the standard solvable forms?",
      method:
        "Two operations. Al-jabr, restoration, removes a subtracted quantity by adding it to both sides. Al-muqabala, balancing, cancels equal terms appearing on both sides. A third step divides through to make the coefficient of the square equal to one.",
      discovery:
        "Any linear or quadratic equation can be brought to standard form by these operations alone, after which the appropriate procedure applies.",
      importance:
        "These are the fundamental moves of equation manipulation, still the first thing taught in algebra. The word al-jabr became the name of the whole subject.",
      modernApplications: [
        "Rearranging equations in every branch of mathematics and science",
        "Simplification routines in computer algebra systems",
        "The concept of equivalent equations and valid transformations",
      ],
    },
    {
      name: "Transmission of the Hindu-Arabic numerals",
      period: "c. 825",
      background:
        "Arabic-speaking scholars used several numeral systems, and Europe used Roman numerals, in which arithmetic beyond simple addition is extremely awkward. Indian mathematicians had developed a decimal positional system including a symbol for zero.",
      problem:
        "How should numbers be written so that calculation is practical?",
      method:
        "Al-Khwarizmi wrote a treatise explaining the Indian system: ten digits, value determined by position, and a zero to hold an empty place. He set out procedures for addition, subtraction, multiplication, division and the extraction of roots.",
      discovery:
        "A practical system in which arithmetic becomes mechanical. The Arabic original is entirely lost; the work survives only through Latin translations beginning with Dixit Algoritmi.",
      importance:
        "This is how the numerals now used worldwide reached Europe. It also gave us the word algorithm, from readers taking the Latinised form of his name as the name of the method.",
      modernApplications: [
        "The decimal system used universally today",
        "Positional notation in binary, hexadecimal and every computing base",
        "The concept of zero as both placeholder and number",
        "Mechanical and digital computation",
      ],
    },
  ],

  works: [
    {
      title: "Al-Kitab al-mukhtasar fi hisab al-jabr wa'l-muqabala",
      year: "c. 820",
      kind: "Book",
      description:
        "The Compendious Book on Calculation by Completion and Balancing. Six equation types with procedures and geometric proofs, followed by mensuration and an extensive treatment of inheritance division.",
    },
    {
      title: "On Calculation with Hindu Numerals",
      year: "c. 825",
      kind: "Book",
      description:
        "The treatise transmitting the decimal positional system. The Arabic text is lost; it survives only in Latin translation, which begins Dixit Algoritmi.",
    },
    {
      title: "Zij al-Sindhind",
      year: "c. 840",
      kind: "Book",
      description:
        "Astronomical tables synthesising Indian, Persian and Greek methods, covering planetary positions, eclipses and trigonometric functions. Revised versions circulated for centuries.",
    },
    {
      title: "Kitab surat al-ard",
      year: "c. 830",
      kind: "Book",
      description:
        "The Book of the Description of the Earth, revising Ptolemy's Geography with coordinates for over two thousand localities and a corrected length for the Mediterranean.",
    },
    {
      title: "Kitab al-tarikh",
      year: "c. 830",
      kind: "Book",
      description:
        "A chronicle, now lost, known through quotations in later historians.",
    },
    {
      title: "Treatises on the astrolabe and the sundial",
      year: "9th century",
      kind: "Paper",
      description:
        "Practical works on the construction and use of astronomical instruments, including tables for determining prayer times.",
    },
  ],

  equations: [
    {
      name: "Completing the square",
      latex: "x^{2} + 10x = 39",
      explanation:
        "Al-Khwarizmi's signature example, worked in his book entirely in words: a square and ten of its roots equal thirty-nine dirhams. The method halves the coefficient of the root, squares it, and adds that amount to both sides to make the left-hand side a perfect square.",
      variables: [
        { symbol: "x", meaning: "The root, or side of the square" },
        { symbol: "x^{2}", meaning: "The square itself" },
        { symbol: "10x", meaning: "Ten roots" },
      ],
      workedExample: {
        problem:
          "Solve x² + 10x = 39 by completing the square, and explain the geometric picture al-Khwarizmi used to justify it.",
        steps: [
          { text: "Halve the coefficient of x:" },
          { text: "", latex: "\\tfrac{10}{2} = 5" },
          { text: "Square that half and add it to both sides:" },
          { text: "", latex: "x^{2} + 10x + 25 = 39 + 25" },
          { text: "The left side is now a perfect square:" },
          { text: "", latex: "(x+5)^{2} = 64" },
          { text: "Take the square root:" },
          { text: "", latex: "x + 5 = 8" },
          { text: "Subtract the half-coefficient:" },
          { text: "", latex: "x = 3" },
          {
            text: "Geometrically: draw a square of side x, and attach four rectangles of width 5/2 to its sides. That cross has area x² + 10x = 39. Adding four corner squares of area 25/4 each — 25 in total — completes a large square of area 64 and side 8. The side is x + 5, so x = 3.",
          },
        ],
        answer:
          "x = 3. Al-Khwarizmi reports only this root, since −13 was not a number he recognised. Note that the geometric construction is not decoration: it is the proof that the recipe must work, and it is what distinguishes his treatment from the Babylonian one.",
      },
      modernUse:
        "The standard derivation of the quadratic formula, and the method used to reduce conic sections to standard form.",
    },
    {
      name: "Al-jabr and al-muqabala",
      latex: "\\text{restore, then balance, then normalise}",
      explanation:
        "The two operations that give algebra its name. Al-jabr removes a subtracted term by adding it to both sides; al-muqabala cancels like terms occurring on both sides. Dividing through to make the leading coefficient one completes the reduction to standard form.",
      variables: [
        { symbol: "\\text{al-jabr}", meaning: "Restoration: eliminate a subtraction" },
        { symbol: "\\text{al-muqabala}", meaning: "Balancing: cancel like terms" },
      ],
      workedExample: {
        problem:
          "Reduce 3x² + 12 − 5x = 2x² + 4x + 3 to standard form and solve it.",
        steps: [
          { text: "Apply al-jabr: the term −5x is subtracted, so add 5x to both sides:" },
          { text: "", latex: "3x^{2} + 12 = 2x^{2} + 9x + 3" },
          { text: "Apply al-muqabala: cancel 2x² from both sides:" },
          { text: "", latex: "x^{2} + 12 = 9x + 3" },
          { text: "Balance the constants by subtracting 3:" },
          { text: "", latex: "x^{2} + 9 = 9x" },
          { text: "This is the fifth of his six types: squares and number equal roots. Halve the coefficient of x:" },
          { text: "", latex: "\\tfrac{9}{2} = 4.5, \\qquad 4.5^{2} = 20.25" },
          { text: "Subtract the constant and take the root:" },
          { text: "", latex: "\\sqrt{20.25 - 9} = \\sqrt{11.25} = 3.354" },
          { text: "The two roots are the half-coefficient plus and minus this:" },
          { text: "", latex: "x = 4.5 \\pm 3.354" },
        ],
        answer:
          "x = 7.854 or x = 1.146. This type is the only one of the six with two positive roots, and al-Khwarizmi explicitly reports both — a genuine achievement given that he had no notation and no negative numbers to organise the cases for him.",
      },
      modernUse:
        "Every rearrangement of an equation performed in mathematics, science and engineering uses exactly these moves.",
    },
    {
      name: "The six types of equation",
      latex:
        "ax^{2}=bx,\\; ax^{2}=c,\\; bx=c,\\; ax^{2}+bx=c,\\; ax^{2}+c=bx,\\; bx+c=ax^{2}",
      explanation:
        "Without negative numbers, no single equation form can cover all cases, because terms must be arranged so every coefficient is positive. Al-Khwarizmi therefore classified all linear and quadratic equations into six types, each with its own procedure.",
      variables: [
        { symbol: "a,\\,b,\\,c", meaning: "Positive quantities only" },
        { symbol: "x^{2}", meaning: "The square, which he called mal" },
        { symbol: "x", meaning: "The root, which he called shay, meaning thing" },
      ],
      workedExample: {
        problem:
          "Classify and solve x² + 21 = 10x, the type-five example from his book.",
        steps: [
          { text: "The equation has a square and a number on one side, roots on the other: type five." },
          { text: "Halve the coefficient of the root:" },
          { text: "", latex: "\\tfrac{10}{2} = 5" },
          { text: "Square it:" },
          { text: "", latex: "5^{2} = 25" },
          { text: "Subtract the constant term:" },
          { text: "", latex: "25 - 21 = 4" },
          { text: "Take the square root:" },
          { text: "", latex: "\\sqrt{4} = 2" },
          { text: "Add and subtract from the half-coefficient:" },
          { text: "", latex: "x = 5 + 2 = 7 \\quad\\text{or}\\quad x = 5 - 2 = 3" },
          { text: "Check both: 49 + 21 = 70 = 10(7), and 9 + 21 = 30 = 10(3)." },
        ],
        answer:
          "Both x = 7 and x = 3 satisfy the equation. Al-Khwarizmi notes that if the squared half-coefficient is less than the constant, the problem is impossible — which is precisely the condition for a negative discriminant, correctly identified twelve hundred years ago.",
      },
      modernUse:
        "Modern notation collapses all six cases into one, but the classification is exactly the case analysis that the discriminant now handles automatically.",
    },
    {
      name: "The general quadratic solution",
      latex: "x = \\frac{-b + \\sqrt{b^{2}-4ac}}{2a}",
      explanation:
        "The modern quadratic formula is al-Khwarizmi's procedure written symbolically. His verbal recipe — halve the roots, square, add the number, take the root, subtract the half — is precisely this expression, and deriving it requires only completing the square in general.",
      variables: [
        { symbol: "a,\\,b,\\,c", meaning: "Coefficients of the square, root and constant" },
        { symbol: "b^{2}-4ac", meaning: "The discriminant, determining how many real roots exist" },
      ],
      workedExample: {
        problem:
          "Derive the quadratic formula from ax² + bx + c = 0 by al-Khwarizmi's method, then solve 2x² + 7x − 15 = 0.",
        steps: [
          { text: "Divide through by a to normalise:" },
          { text: "", latex: "x^{2} + \\frac{b}{a}x + \\frac{c}{a} = 0" },
          { text: "Move the constant and complete the square by adding the squared half-coefficient:" },
          {
            text: "",
            latex:
              "x^{2} + \\frac{b}{a}x + \\frac{b^{2}}{4a^{2}} = \\frac{b^{2}}{4a^{2}} - \\frac{c}{a}",
          },
          { text: "Write the left side as a square and combine the right over a common denominator:" },
          {
            text: "",
            latex:
              "\\left(x + \\frac{b}{2a}\\right)^{2} = \\frac{b^{2}-4ac}{4a^{2}}",
          },
          { text: "Take the square root and subtract the half-coefficient:" },
          { text: "", latex: "x = \\frac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}" },
          { text: "Now for 2x² + 7x − 15 = 0, compute the discriminant:" },
          { text: "", latex: "b^{2}-4ac = 49 - 4(2)(-15) = 49 + 120 = 169" },
          { text: "Apply the formula:" },
          { text: "", latex: "x = \\frac{-7 \\pm 13}{4}" },
        ],
        answer:
          "x = 1.5 or x = −5. Every step of the derivation is al-Khwarizmi's, expressed in symbols he did not have. The negative root is one he would have rejected as meaningless — the method was complete before the number system was.",
      },
      modernUse:
        "Taught universally, and used wherever a quadratic relationship must be inverted, from projectile motion to financial modelling.",
    },
    {
      name: "Positional value",
      latex: "N = \\sum_{k=0}^{n} d_{k}\\times 10^{k}",
      explanation:
        "In a positional system a digit's contribution depends on where it sits, and zero holds a place that would otherwise collapse. This is what makes written arithmetic mechanical, and what al-Khwarizmi's second treatise carried westward.",
      variables: [
        { symbol: "d_{k}", meaning: "The digit in position k, counting from the right" },
        { symbol: "10^{k}", meaning: "The place value of that position" },
        { symbol: "N", meaning: "The number represented" },
      ],
      workedExample: {
        problem:
          "Expand 4067 in place value, show why the zero is essential, and compare the effort of multiplying by 6 in this system against Roman numerals.",
        steps: [
          { text: "Decompose by position:" },
          {
            text: "",
            latex:
              "4067 = 4\\times10^{3} + 0\\times10^{2} + 6\\times10^{1} + 7\\times10^{0}",
          },
          { text: "Evaluate:" },
          { text: "", latex: "4000 + 0 + 60 + 7 = 4067" },
          { text: "Without a zero symbol, the hundreds place would close up and give 467 — a different number entirely." },
          { text: "Multiply by 6 digit by digit, carrying:" },
          { text: "", latex: "7\\times6 = 42,\\quad 6\\times6+4 = 40,\\quad 0\\times6+4 = 4,\\quad 4\\times6 = 24" },
          { text: "Assemble the result:" },
          { text: "", latex: "4067 \\times 6 = 24402" },
          { text: "The same number in Roman numerals is MMMMLXVII, and multiplying it has no comparable digit-by-digit procedure at all." },
        ],
        answer:
          "24402, obtained by four single-digit multiplications and some carrying. The point is not that the answer differs but that the procedure exists: positional notation turns arithmetic into a mechanical routine anyone can learn, which is exactly why it displaced every system it met.",
      },
      modernUse:
        "Every numeral system in use, including binary and hexadecimal in computing, works on this principle.",
    },
  ],

  connections: [
    {
      field: "Mathematics",
      description:
        "Algebra as a named discipline begins with his book, and the decimal system he transmitted underlies all subsequent arithmetic.",
    },
    {
      field: "Computer Science",
      description:
        "The word algorithm derives from his name, and his approach — classify the problem, apply a fixed procedure — is the concept an algorithm names.",
    },
    {
      field: "Astronomy",
      description:
        "His Zij tables synthesised Indian, Persian and Greek astronomy and remained in use, in revised forms, for centuries.",
    },
    {
      field: "Earth Science",
      description:
        "His Kitab surat al-ard corrected Ptolemy's coordinates for over two thousand places and fixed the badly overstated length of the Mediterranean.",
    },
    {
      field: "Engineering",
      description:
        "The Algebra was written for surveying, canal digging and mensuration, and its methods were applied directly to those problems.",
    },
    {
      field: "Statistics",
      description:
        "Inheritance division under Islamic law, to which half his book is devoted, is an early sustained application of proportional calculation to legal practice.",
    },
  ],

  historicalContext: {
    worldEvents:
      "Al-Khwarizmi worked at the height of the Abbasid caliphate, when Baghdad was the largest and wealthiest city in the world and the centre of a trading network reaching from Spain to China.",
    politics:
      "The caliph al-Ma'mun made the support of scholarship a policy of state, funding the House of Wisdom, commissioning translations from Greek, Sanskrit and Persian, and ordering original observations. Al-Khwarizmi's Algebra is dedicated to him.",
    wars:
      "Al-Ma'mun came to power after a civil war with his brother al-Amin during which Baghdad was besieged. The scientific programme began in the aftermath, as part of consolidating the new regime's prestige.",
    universities:
      "There were no universities. The House of Wisdom functioned as library, translation bureau and research institute at once, and was the model for later Islamic institutions of learning.",
    scientificCommunity:
      "The translation movement had made Greek, Indian and Persian science available in Arabic within a couple of generations. Scholars worked across astronomy, mathematics, medicine and geography rather than specialising, and al-Khwarizmi's range is typical rather than exceptional.",
    technology:
      "Paper, learned from Chinese prisoners taken at Talas in 751, had reached Baghdad and made books far cheaper than parchment allowed. Astronomical instruments including the astrolabe were being refined, and al-Khwarizmi wrote on their construction.",
  },

  backlash: [
    {
      type: "Priority dispute",
      title: "Was he the father of algebra?",
      description:
        "Babylonian scribes solved quadratics around 1800 BCE, Diophantus used abbreviated notation in the third century, and Brahmagupta gave rules including negative quantities in 628. The claim rests on his systematic treatment of the subject as a discipline, not on priority of technique.",
      status: "Disputed",
    },
    {
      type: "Controversy",
      title: "Where was he from?",
      description:
        "The name points to Khwarazm in Central Asia, but al-Tabari gives an additional epithet suggesting origins near Baghdad. Whether he should be described as Persian, Central Asian or simply as a scholar of the Abbasid world has been argued for over a century, sometimes for nationalist reasons.",
      status: "Disputed",
    },
    {
      type: "Academic conflict",
      title: "European resistance to the numerals",
      description:
        "Hindu-Arabic numerals took centuries to displace Roman ones in Europe. Florence banned them in banking in 1299, partly because the figures were easier to alter fraudulently than written-out words, and abacists argued against the new methods for generations.",
      status: "Verified",
    },
    {
      type: "Controversy",
      title: "How much did he take from Indian sources?",
      description:
        "His debt to Indian mathematics is undisputed for the numerals but debated for the algebra. Some historians see Brahmagupta's influence throughout; others emphasise the geometric proofs, which are Greek in character and absent from the Indian tradition.",
      status: "Disputed",
    },
    {
      type: "Controversy",
      title: "The lost original",
      description:
        "The Arabic text of his work on Hindu numerals — the book that gave us the word algorithm — does not survive in any manuscript. Everything known about it comes from Latin translations made three centuries later, so its exact contents are uncertain.",
      status: "Verified",
    },
  ],

  challengesDetailed: [
    {
      category: "Scientific",
      description:
        "He worked without symbolic notation of any kind, expressing every equation, coefficient and operation in ordinary prose.",
    },
    {
      category: "Educational",
      description:
        "Because negative numbers were not admitted, he had to present as six distinct cases what modern notation handles as a single equation.",
    },
    {
      category: "Professional",
      description:
        "His position depended entirely on caliphal patronage, and his major work is dedicated to al-Ma'mun accordingly.",
    },
    {
      category: "Personal",
      description:
        "Virtually nothing of his life is recorded — not his birthplace with certainty, not his teachers, not the date of his death.",
    },
  ],

  achievements: [
    {
      title: "The Algebra",
      year: "c. 820",
      description:
        "Established equation-solving as a systematic discipline with six standard forms, fixed procedures and geometric proofs.",
    },
    {
      title: "Completing the square",
      year: "c. 820",
      description:
        "Gave the method for solving quadratics together with a geometric demonstration of why it works.",
    },
    {
      title: "Transmission of the numerals",
      year: "c. 825",
      description:
        "Wrote the treatise that carried the decimal positional system, including zero, toward Europe.",
    },
    {
      title: "Kitab surat al-ard",
      year: "c. 830",
      description:
        "Revised Ptolemy's geography with coordinates for over two thousand localities and a corrected Mediterranean.",
    },
    {
      title: "Zij al-Sindhind",
      year: "c. 840",
      description:
        "Astronomical tables synthesising three traditions, used in revised forms across the Islamic world and in Spain for centuries.",
    },
    {
      title: "Two words in every language of science",
      year: "12th century",
      description:
        "Algebra from al-jabr in his title, and algorithm from Algoritmi, the Latin form of his name.",
    },
  ],

  funFacts: [
    "The word algebra comes from al-jabr, the Arabic for restoration, in the title of his book.",
    "The word algorithm comes from Algoritmi, the Latinised form of his own name.",
    "Latin translations of his arithmetic open with Dixit Algoritmi — thus spoke al-Khwarizmi.",
    "Readers who did not realise it was a name took Algoritmi to mean the method itself.",
    "In medieval Spain an algebrista was a bone-setter, since al-jabr also means restoring what is broken.",
    "He used no symbols at all — every equation is written out in words.",
    "Even the numbers in his algebra book are spelled out, despite his advocating numerals elsewhere.",
    "Because negative numbers were not recognised, he needed six separate equation types.",
    "He called the unknown shay, meaning thing, and the square mal, meaning wealth or property.",
    "The Spanish rendering of shay is thought to be one route by which x came to mean the unknown.",
    "Roughly half the Algebra is devoted to inheritance division under Islamic law.",
    "He wrote it explicitly for legacies, lawsuits, trade, surveying and canal digging.",
    "His most famous example is a square and ten roots equal to thirty-nine, giving the answer three.",
    "He correctly identified when a quadratic has no solution — the negative discriminant condition.",
    "For one of his six types he gives both positive roots, not just one.",
    "The Arabic original of his book on numerals is entirely lost.",
    "It survives only through Latin translations made some three centuries later.",
    "Florence banned Hindu-Arabic numerals in banking in 1299 as too easy to falsify.",
    "He was involved in al-Ma'mun's project to measure the circumference of the Earth.",
    "His geography gave coordinates for over two thousand places and fixed Ptolemy's overlong Mediterranean.",
    "A crater on the far side of the Moon is named after him.",
  ],

  didYouKnow: [
    {
      title: "Two words, one man",
      content:
        "Algebra comes from al-jabr in his book's title. Algorithm comes from his name. No other individual has given computing and mathematics two such fundamental terms.",
    },
    {
      title: "He wrote algebra without a single symbol",
      content:
        "No equals sign, no letters, no exponents. Everything in sentences, and the numbers spelled out as words. What now fits on one line took him a paragraph, and he still built a general method.",
    },
    {
      title: "Six equations instead of one",
      content:
        "Negative numbers were not accepted, so terms had to be arranged with every coefficient positive. That splits one quadratic into six cases, each needing its own recipe. The discriminant does this bookkeeping for us now.",
    },
    {
      title: "He proved it, he did not just assert it",
      content:
        "Babylonians had the recipe for quadratics a thousand years earlier. Al-Khwarizmi drew squares and rectangles and showed why it must work. That is the Greek influence, and it is what makes the book mathematics rather than a manual.",
    },
    {
      title: "It was written for lawyers and surveyors",
      content:
        "He says so in the preface: inheritance, legacies, partition, lawsuits, trade, surveying, canals. About half the book handles Islamic inheritance law, which involves genuinely awkward fractional divisions.",
    },
    {
      title: "The book that named algorithms is lost",
      content:
        "His treatise on Hindu numerals survives in no Arabic manuscript at all. Everything we know comes from Latin translations made three hundred years later, which is why its exact contents remain uncertain.",
    },
    {
      title: "Europe resisted the numerals for centuries",
      content:
        "Florence banned them in banking in 1299 — a written-out word cannot be altered as easily as a digit. Roman numerals held on in European accounting for hundreds of years after the better system arrived.",
    },
    {
      title: "He knew when a quadratic has no answer",
      content:
        "He states that if half the roots squared is less than the number, the problem is impossible. That is exactly the condition for a negative discriminant, identified correctly in the ninth century.",
    },
  ],

  visualPrompts: [
    {
      category: "Hero portrait",
      prompt:
        "Imagined portrait of a ninth-century Abbasid scholar in a plain robe and turban, seated with an astrolabe and papers of geometric figures, thoughtful expression, warm lamplight against a plastered wall with geometric tilework, historical illustration style in ochre and deep teal, no text.",
    },
    {
      category: "Young scientist",
      prompt:
        "A young man on a caravan road approaching a great circular walled city at dawn, laden camels and travellers around him, minarets and domes visible within the walls, wide desert horizon, warm golden light, narrative illustrative style.",
    },
    {
      category: "Laboratory",
      prompt:
        "Interior of a ninth-century Baghdad library: arched alcoves lined with bound manuscripts, low desks where scholars write and translate, an astrolabe and celestial globe on a stand, geometric tile floor, light falling through a carved wooden screen, warm sandstone and lapis palette, richly detailed.",
    },
    {
      category: "Major discovery",
      prompt:
        "Geometric proof diagram for completing the square: a central shaded square labelled with an unknown side, four equal rectangles attached to its sides forming a cross, four small corner squares in a contrasting colour completing the large square, clean vector style in terracotta and teal on cream, no text labels.",
    },
    {
      category: "Experiment",
      prompt:
        "Educational infographic showing the six classical equation types as six labelled panels in a two-by-three grid, each with a small balance-scale icon representing the arrangement of squares, roots and numbers, flat vector style, muted jewel tones on parchment.",
    },
    {
      category: "Equipment",
      prompt:
        "Technical illustration of a medieval brass astrolabe, front and back views with the rete, plates and alidade separated in an exploded arrangement, annotated part labels, blueprint style on cream paper.",
    },
    {
      category: "Timeline infographic",
      prompt:
        "Horizontal timeline from 762 to 1202 marking the founding of Baghdad, the House of Wisdom, the Algebra, the numerals treatise, the geography, the Latin translations of 1145, and Fibonacci's Liber Abaci, small icons per event, deep teal and gold on parchment.",
    },
    {
      category: "Mind map",
      prompt:
        "Radial mind map centred on 'Al-Khwarizmi' branching into Algebra, Arithmetic, Astronomy and Geography, each splitting into two or three sub-nodes, thin connectors, soft pastel fills on white, clean modern infographic style.",
    },
    {
      category: "Achievement infographic",
      prompt:
        "Three-panel infographic: panel one the completing-the-square construction, panel two a place-value column chart showing a four-digit number decomposed with a highlighted zero, panel three an etymology diagram tracing al-jabr to algebra and Algoritmi to algorithm, consistent colour coding, dark background, flat vector.",
    },
    {
      category: "Scientific diagram",
      prompt:
        "Side-by-side comparison of the same multiplication carried out in Hindu-Arabic positional notation with visible carries, and attempted in Roman numerals, arrows highlighting the digit-by-digit procedure on one side and its absence on the other, clean instructional diagram style, two-colour scheme on light background.",
    },
    {
      category: "Map",
      prompt:
        "Stylised map showing the transmission of the decimal numerals from India through Baghdad to Córdoba and then into Latin Europe, arrows annotated with approximate dates, medieval cartographic texture with decorative border, muted parchment and indigo palette.",
    },
    {
      category: "Portrait gallery",
      prompt:
        "Row of four framed stylised portraits in matching frames representing Brahmagupta, al-Khwarizmi, Omar Khayyam and Fibonacci, uniform lighting and scale, warm neutral gallery wall, name plaques left blank for typesetting.",
    },
    {
      category: "Quote card",
      prompt:
        "Elegant square quote card with a deep teal background, a faint gold geometric interlace pattern behind the text, generous margins, refined serif typography centred, small ornamental rule above the attribution, premium editorial feel.",
    },
  ],

  photoPlaceholders: [
    {
      slot: "Portrait",
      caption:
        "The statue of al-Khwarizmi in Urgench, Uzbekistan. No contemporary likeness exists.",
      suggestedSource:
        "Wikimedia Commons, File:Statue of Muhammad ibn Musa al-Khwarizmi in Urgench.jpg (CC BY-SA)",
    },
    {
      slot: "Notebooks",
      caption:
        "A page of the Algebra, showing the entirely verbal presentation without symbols.",
      suggestedSource:
        "Wikimedia Commons, File:The Algebra of Mohammed ben Musa (Arabic).png (public domain)",
    },
    {
      slot: "Historic location",
      caption:
        "Baghdad, capital of the Abbasid caliphate and site of the House of Wisdom.",
      suggestedSource: "Wikimedia Commons, Category:Round city of Baghdad (public domain)",
    },
    {
      slot: "University",
      caption:
        "Depictions of the House of Wisdom, the translation and research centre funded by the caliphate.",
      suggestedSource: "Wikimedia Commons, Category:House of Wisdom (public domain)",
    },
    {
      slot: "Instruments",
      caption:
        "A medieval Islamic astrolabe, an instrument on whose construction al-Khwarizmi wrote.",
      suggestedSource: "Wikimedia Commons, Category:Islamic astrolabes (CC BY-SA)",
    },
    {
      slot: "Laboratory",
      caption:
        "A Latin manuscript of the algorism tradition descending from his lost arithmetic.",
      suggestedSource: "Wikimedia Commons, Category:Algorismus (public domain)",
    },
    {
      slot: "Colleagues",
      caption:
        "Early forms of the Hindu-Arabic numerals as they travelled westward.",
      suggestedSource: "Wikimedia Commons, Category:Arabic numerals (public domain)",
    },
    {
      slot: "Childhood",
      caption:
        "Khwarazm, the Central Asian region from which his name derives.",
      suggestedSource: "Wikimedia Commons, Category:Khorezm Region (CC BY-SA)",
    },
    {
      slot: "Statue",
      caption:
        "The monument to al-Khwarizmi outside the Faculty of Mathematics in Tashkent.",
      suggestedSource: "Wikimedia Commons, Category:Muhammad ibn Musa al-Khwarizmi (CC BY-SA)",
    },
    {
      slot: "Memorial",
      caption:
        "The 1983 Soviet stamp marking the twelve-hundredth anniversary of his birth.",
      suggestedSource: "Wikimedia Commons, Category:Muhammad ibn Musa al-Khwarizmi (public domain)",
    },
  ],

  relatedScientists: [
    {
      slug: "euclid",
      name: "Euclid",
      reason:
        "Al-Khwarizmi's geometric proofs of his algebraic rules follow the Euclidean tradition, newly available in Arabic translation in his lifetime.",
    },
    {
      slug: "ibn-al-haytham",
      name: "Ibn al-Haytham",
      reason:
        "Both worked within the Islamic scientific tradition that al-Khwarizmi helped establish, and both combined mathematical rigour with practical investigation.",
    },
    {
      slug: "leonhard-euler",
      name: "Leonhard Euler",
      reason:
        "Euler brought to full symbolic maturity the notation whose absence al-Khwarizmi had to work around entirely.",
    },
    {
      slug: "carl-friedrich-gauss",
      name: "Carl Friedrich Gauss",
      reason:
        "Gauss's modular arithmetic and systematic number theory continue the project of turning computational practice into a structured discipline.",
    },
    {
      slug: "alan-turing",
      name: "Alan Turing",
      reason:
        "Turing formalised the notion of an algorithm — the word derived from al-Khwarizmi's name, and the concept his fixed procedures anticipated.",
    },
    {
      slug: "srinivasa-ramanujan",
      name: "Srinivasa Ramanujan",
      reason:
        "Both drew on the Indian mathematical tradition whose numerals al-Khwarizmi transmitted westward.",
    },
  ],

  relatedTopics: [
    {
      title: "Quadratic Equations",
      href: "/subjects/mathematics/quadratic-equations",
      description:
        "Completing the square and the quadratic formula, both descended directly from his method.",
    },
    {
      title: "Introduction to Algebraic Thinking",
      href: "/subjects/mathematics/introduction-to-algebraic-thinking",
      description:
        "Unknowns, expressions and the idea of a general method — the subject he founded.",
    },
    {
      title: "Linear Equations and Inequalities",
      href: "/subjects/mathematics/linear-equations-and-inequalities",
      description:
        "Al-jabr and al-muqabala as the basic moves of equation rearrangement.",
    },
    {
      title: "Whole Numbers and Arithmetic",
      href: "/subjects/mathematics/whole-numbers-and-arithmetic",
      description:
        "Place value, zero and the decimal system he carried from India westward.",
    },
    {
      title: "Polynomials and Factoring",
      href: "/subjects/mathematics/polynomials-and-factoring",
      description:
        "Manipulating expressions in the symbolic notation he had to do without.",
    },
    {
      title: "Numerical Methods",
      href: "/subjects/mathematics/numerical-methods",
      description:
        "Fixed procedures that terminate in an answer — the algorithmic idea that carries his name.",
    },
  ],

  quotes: [
    {
      text: "That fondness for science, by which God has distinguished the Imam al-Ma'mun, encouraged me to compose a short work on calculating by completion and balancing.",
      source: "Preface to the Algebra, c. 820, in Rosen's translation",
      status: "Verified",
    },
    {
      text: "confining it to what is easiest and most useful in arithmetic, such as men constantly require in cases of inheritance, legacies, partition, lawsuits, and trade",
      source: "Preface to the Algebra, c. 820, in Rosen's translation",
      status: "Verified",
    },
    {
      text: "Thus spoke al-Khwarizmi.",
      source: "Opening words of the Latin translation of his lost arithmetic",
      status: "Verified",
    },
  ],

  quiz: {
    mcq: [
      {
        question: "Which English word derives from the title of al-Khwarizmi's book?",
        options: ["Arithmetic", "Algebra", "Geometry", "Calculus"],
        answer: 1,
        explanation:
          "From al-jabr, meaning restoration or completion, one of the two operations in the title.",
      },
      {
        question: "Which English word derives from al-Khwarizmi's own name?",
        options: ["Algorithm", "Logarithm", "Axiom", "Theorem"],
        answer: 0,
        explanation:
          "From Algoritmi, the Latinised form of his name, which appears in the opening line of the Latin translation of his arithmetic.",
      },
      {
        question: "What does al-jabr mean?",
        options: [
          "Balancing",
          "Restoration — removing a subtracted term by adding it to both sides",
          "Multiplication",
          "Division",
        ],
        answer: 1,
        explanation:
          "Al-muqabala is the balancing operation, which cancels like terms on both sides.",
      },
      {
        question: "Solve al-Khwarizmi's example: x² + 10x = 39.",
        options: ["x = 3", "x = 5", "x = 4", "x = 13"],
        answer: 0,
        explanation:
          "Halve 10 to get 5, square it to get 25, add to both sides giving (x+5)² = 64, so x + 5 = 8 and x = 3.",
      },
      {
        question: "Why did he need six separate equation types?",
        options: [
          "He had six students",
          "Negative numbers were not accepted, so all coefficients had to be positive",
          "There are six kinds of number",
          "It was a religious requirement",
        ],
        answer: 1,
        explanation:
          "Terms had to be arranged so nothing was subtracted, which splits one modern equation into six cases.",
      },
      {
        question: "Solve x² + 21 = 10x, his type-five example.",
        options: ["x = 3 or 7", "x = 21 only", "x = 5 only", "No solution"],
        answer: 0,
        explanation:
          "Half of 10 is 5; 25 − 21 = 4; √4 = 2; so x = 5 ± 2. This type is the one with two positive roots, and he reports both.",
      },
      {
        question: "How did al-Khwarizmi justify his solution procedures?",
        options: [
          "By asserting them",
          "With geometric demonstrations using squares and rectangles",
          "By numerical testing only",
          "By citing scripture",
        ],
        answer: 1,
        explanation:
          "The geometric proofs reflect Greek influence and are what distinguish his treatment from earlier computational recipes.",
      },
      {
        question: "What notation did he use for the unknown?",
        options: [
          "The letter x",
          "None — he wrote everything in words, calling the unknown shay, meaning thing",
          "A dot",
          "A Greek letter",
        ],
        answer: 1,
        explanation:
          "He had no symbols at all. Even the numbers in the Algebra are spelled out as words.",
      },
      {
        question: "What condition did he identify for a quadratic having no solution?",
        options: [
          "The constant is negative",
          "Half the coefficient of the root, squared, is less than the number",
          "The coefficient of the square is zero",
          "The root is even",
        ],
        answer: 1,
        explanation:
          "That is precisely the condition for a negative discriminant, correctly identified in the ninth century.",
      },
      {
        question: "Where did al-Khwarizmi work?",
        options: [
          "The Library of Alexandria",
          "The House of Wisdom in Baghdad",
          "The University of Bologna",
          "The Academy in Athens",
        ],
        answer: 1,
        explanation:
          "The Bayt al-Hikma, funded by the Abbasid caliphate, where Greek, Indian and Persian works were translated and extended.",
      },
      {
        question: "What was his second major treatise about?",
        options: [
          "Cubic equations",
          "The Hindu-Arabic decimal positional numerals, including zero",
          "Optics",
          "Medicine",
        ],
        answer: 1,
        explanation:
          "The Arabic original is lost; it survives only through Latin translations beginning Dixit Algoritmi.",
      },
      {
        question: "What is the status of the Arabic text of that numerals treatise?",
        options: [
          "It survives in many manuscripts",
          "It is entirely lost; only Latin translations survive",
          "It was never written",
          "It survives in one copy in Baghdad",
        ],
        answer: 1,
        explanation:
          "The book that gave us the word algorithm exists today only at second hand, three centuries removed.",
      },
      {
        question: "Was al-Khwarizmi the first to solve quadratic equations?",
        options: [
          "Yes, he invented the method",
          "No — Babylonians, Diophantus and Brahmagupta preceded him",
          "Yes, but only for positive roots",
          "No, Euclid did it first",
        ],
        answer: 1,
        explanation:
          "His contribution was systematic treatment of the subject as a discipline, not priority of technique.",
      },
      {
        question: "What is 4067 in expanded place-value form?",
        options: [
          "4×10³ + 0×10² + 6×10 + 7",
          "4×10³ + 6×10² + 7×10",
          "4×10⁴ + 6×10 + 7",
          "40 + 67",
        ],
        answer: 0,
        explanation:
          "The zero is essential: without it the hundreds place closes up and the number becomes 467.",
      },
      {
        question: "Roughly what proportion of the Algebra concerns inheritance law?",
        options: ["None", "About half", "A single page", "About a tenth"],
        answer: 1,
        explanation:
          "He wrote it as a practical book, and Islamic inheritance division involves intricate fractional calculations.",
      },
      {
        question: "Why did Florence ban Hindu-Arabic numerals in banking in 1299?",
        options: [
          "They were considered foreign",
          "Digits were easier to alter fraudulently than written-out words",
          "They were harder to calculate with",
          "The Pope forbade them",
        ],
        answer: 1,
        explanation:
          "European resistance to the numerals lasted centuries despite their clear computational advantage.",
      },
      {
        question: "Which of these did al-Khwarizmi not treat?",
        options: [
          "Quadratic equations",
          "Cubic equations",
          "Linear equations",
          "Inheritance division",
        ],
        answer: 1,
        explanation:
          "Cubics were solved later, geometrically by Omar Khayyam and algebraically by the sixteenth-century Italians.",
      },
      {
        question: "What did his Kitab surat al-ard do?",
        options: [
          "Described the stars only",
          "Revised Ptolemy's geography with coordinates for over two thousand places",
          "Catalogued plants",
          "Described the astrolabe",
        ],
        answer: 1,
        explanation:
          "Among its corrections was the length of the Mediterranean, which Ptolemy had substantially overstated.",
      },
      {
        question: "In medieval Spain, what was an algebrista?",
        options: [
          "A mathematician",
          "A bone-setter",
          "A banker",
          "A translator",
        ],
        answer: 1,
        explanation:
          "Al-jabr means restoration, applicable equally to an equation and to a broken limb.",
      },
      {
        question: "What is al-Khwarizmi's most lasting methodological contribution?",
        options: [
          "A table of square roots",
          "The idea that a class of problems has a fixed general procedure",
          "The invention of zero",
          "A proof of the Pythagorean theorem",
        ],
        answer: 1,
        explanation:
          "Classify the form, apply the corresponding recipe. That is what an algorithm is, and the word carries his name.",
      },
    ],
    trueFalse: [
      {
        statement: "Al-Khwarizmi used symbolic notation such as x for the unknown.",
        answer: false,
        explanation:
          "He used no symbols at all. Everything, including the numbers, was written out in words.",
      },
      {
        statement: "The word algorithm derives from al-Khwarizmi's name.",
        answer: true,
        explanation:
          "From Algoritmi, the Latinised form, which opens the Latin translation of his arithmetic.",
      },
      {
        statement: "He was the first person ever to solve a quadratic equation.",
        answer: false,
        explanation:
          "Babylonians did so around 1800 BCE, and Brahmagupta gave rules in 628. His contribution was systematisation.",
      },
      {
        statement: "He justified his methods with geometric proofs.",
        answer: true,
        explanation:
          "Squares and rectangles are used to demonstrate why completing the square works, reflecting Greek influence.",
      },
      {
        statement: "Al-Khwarizmi accepted negative numbers as solutions.",
        answer: false,
        explanation:
          "He did not, which is why he needed six equation types instead of one general form.",
      },
      {
        statement: "The Arabic original of his book on Hindu numerals survives.",
        answer: false,
        explanation:
          "It is entirely lost. Only Latin translations made some three centuries later survive.",
      },
      {
        statement: "For one of his six equation types he gives two positive roots.",
        answer: true,
        explanation:
          "The type where a square and a number equal roots, such as x² + 21 = 10x, giving 3 and 7.",
      },
      {
        statement: "The Algebra was written as an abstract theoretical work.",
        answer: false,
        explanation:
          "He states in the preface it was for inheritance, legacies, lawsuits, trade, surveying and canal digging.",
      },
      {
        statement: "Europe adopted Hindu-Arabic numerals immediately upon learning of them.",
        answer: false,
        explanation:
          "Adoption took centuries, and Florence banned them in banking in 1299 as too easy to falsify.",
      },
      {
        statement: "He correctly identified when a quadratic equation has no real solution.",
        answer: true,
        explanation:
          "He states the problem is impossible when half the root coefficient squared is less than the number — the negative discriminant condition.",
      },
    ],
    shortAnswer: [
      {
        question: "Explain what al-jabr and al-muqabala mean and why they matter.",
        modelAnswer:
          "Al-jabr means restoration: if a quantity is subtracted on one side of an equation, it is added to both sides so that nothing is subtracted. Al-muqabala means balancing: like terms appearing on both sides are cancelled against each other. They matter because equations as they arise from real problems are not in solvable form, and these two operations reduce any linear or quadratic equation to one of the standard types. They are the basic moves of equation manipulation still taught today, and al-jabr gave algebra its name.",
        marks: 3,
      },
      {
        question: "Solve x² + 8x = 33 by completing the square, showing each step.",
        modelAnswer:
          "Halve the coefficient of x: 8/2 = 4. Square it: 16. Add to both sides: x² + 8x + 16 = 33 + 16 = 49. The left side is now (x + 4)². Taking the square root, x + 4 = 7. Subtracting, x = 3. Al-Khwarizmi would report only this root; the other, −11, was not a number he accepted.",
        marks: 3,
      },
      {
        question: "Describe the geometric argument for completing the square.",
        modelAnswer:
          "For x² + 10x = 39, draw a square of side x, representing x². Attach four rectangles, each of width 10/4 = 2.5 and length x, to the four sides; their combined area is 10x. The resulting cross-shaped figure therefore has area 39. The figure is not a square, but adding four small squares at the corners, each of area 2.5² = 6.25 and 25 in total, completes it into a large square. That square's area is 39 + 25 = 64, so its side is 8. The side also equals x + 2.5 + 2.5 = x + 5, so x = 3. The construction shows why the recipe works rather than merely that it does.",
        marks: 4,
      },
      {
        question: "Why did al-Khwarizmi need six equation types when we need only one?",
        modelAnswer:
          "He did not accept negative numbers, so every coefficient in every equation had to be positive and no term could be subtracted. This means terms must be distributed between the two sides in whichever way keeps them positive, and different distributions give genuinely different-looking equations requiring different procedures. Modern notation permits negative coefficients, so ax² + bx + c = 0 covers every case at once and the discriminant handles the case analysis automatically. His six types are exactly the cases that our sign conventions absorb.",
        marks: 3,
      },
      {
        question: "Reduce 5x² + 20 − 3x = 4x² + 6x + 8 to standard form.",
        modelAnswer:
          "Apply al-jabr to the subtracted term: add 3x to both sides, giving 5x² + 20 = 4x² + 9x + 8. Apply al-muqabala: cancel 4x² from both sides, giving x² + 20 = 9x + 8. Balance the constants by subtracting 8: x² + 12 = 9x. This is the type where a square and a number equal roots.",
        marks: 3,
      },
      {
        question: "Solve x² + 12 = 7x and check both roots.",
        modelAnswer:
          "Half of 7 is 3.5; squared, 12.25. Subtract the constant: 12.25 − 12 = 0.25. Its square root is 0.5. So x = 3.5 ± 0.5, giving x = 4 or x = 3. Checking: 16 + 12 = 28 = 7 × 4, and 9 + 12 = 21 = 7 × 3. Both roots are valid.",
        marks: 3,
      },
      {
        question: "Explain why positional notation with zero made arithmetic practical.",
        modelAnswer:
          "In a positional system a digit's value depends on its place, so a number decomposes as a sum of digits times powers of ten. This makes arithmetic mechanical: addition, multiplication and division reduce to single-digit operations plus carrying, performed in a fixed order that can be learned by anyone. Zero is essential because it holds a place that would otherwise collapse — without it, 4067 would be indistinguishable from 467. Systems without positional value, such as Roman numerals, have no comparable digit-by-digit procedure, which is why calculation in them required specialist skill or an abacus.",
        marks: 4,
      },
      {
        question: "Assess the claim that al-Khwarizmi was the father of algebra.",
        modelAnswer:
          "The claim needs qualification. Babylonian scribes solved quadratic problems around 1800 BCE, Diophantus used abbreviated notation for particular problems in the third century, and Brahmagupta stated rules for quadratics including negative quantities in 628. None of them was working with a subject called algebra. What al-Khwarizmi did was treat equation-solving as a discipline in itself: a complete classification of forms, a fixed procedure for each, geometric justification for the procedures, and a self-contained exposition intended to be applied to any problem of the right shape. That is a different kind of achievement from solving equations, and the word algebra comes from his title. The fair statement is that he founded algebra as a subject without inventing its techniques.",
        marks: 4,
      },
      {
        question: "What is the connection between al-Khwarizmi and modern computing?",
        modelAnswer:
          "Two connections. The direct one is etymological: Latin translations of his arithmetic begin Dixit Algoritmi, and readers who took the Latinised name for the name of the method gave us the word algorithm. The deeper one is conceptual. His method classifies a problem by form and then applies a procedure fixed in advance, guaranteed to terminate in an answer, requiring no ingenuity from the person carrying it out. That is precisely what an algorithm is, and the positional notation he transmitted is what makes mechanical calculation possible at all.",
        marks: 3,
      },
      {
        question: "Why is so little known about al-Khwarizmi's life?",
        modelAnswer:
          "No contemporary biography survives, and the sources that mention him are concerned with his works rather than his person. His birthplace is uncertain: the name points to Khwarazm in Central Asia, but al-Tabari records an additional epithet suggesting origins near Baghdad. His dates are estimates, no teachers are named, and nothing is recorded of his family, character or death. This is not unusual for the period — scholars were remembered through their books, and al-Khwarizmi's books were copied and translated for centuries while any account of the man was not.",
        marks: 3,
      },
    ],
    longAnswer: [
      {
        question:
          "Explain how al-Khwarizmi solved quadratic equations, and discuss why his treatment counts as founding a discipline.",
        modelAnswer:
          "Al-Khwarizmi's method has three components. First, reduction: any equation is brought into standard form by al-jabr, which removes subtracted terms by adding them to both sides, and al-muqabala, which cancels like terms occurring on both sides, followed by division to make the coefficient of the square equal to one. Second, classification: because negative numbers were not admitted, every coefficient had to be positive, which means the terms can be arranged in six distinct ways. These are squares equal roots, squares equal number, roots equal number, squares and roots equal number, squares and number equal roots, and roots and number equal squares. Third, solution: each type has a fixed procedure. For a square and ten roots equal to thirty-nine, the recipe is to halve the roots, square the half, add to the number, take the square root of the total and subtract the half — giving three. Crucially, he then proves it. Draw a square of side x and attach four rectangles of width 2.5 to its sides, giving a cross of area x² + 10x = 39. Adding four corner squares totalling 25 completes a square of area 64 and side 8, which equals x + 5. So x = 3. Several features make this the founding of a discipline rather than a set of solutions. The method is general: it applies to any problem of the right form, not to a list of particular puzzles, which is what distinguishes it from the Babylonian tablets. It is complete within its scope: no linear or quadratic case is left unhandled, and he correctly identifies when a problem is impossible, which is the negative discriminant condition. It is justified rather than asserted, applying the Greek standard of proof to material that had previously been transmitted as recipes. And it is self-contained and pedagogical, written to be learned and applied by people solving inheritance disputes and surveying land. The combination — general method, complete classification, proof, practical purpose — is what turned scattered technique into a subject, and the subject took its name from his title.",
        marks: 10,
      },
      {
        question:
          "Al-Khwarizmi had no symbolic notation. Discuss what this cost him and what it reveals about the role of notation in mathematics.",
        modelAnswer:
          "Al-Khwarizmi wrote without any symbols. There was no equals sign, no letter for the unknown, no exponents, no way of indicating an operation except by describing it. The unknown was called shay, meaning thing, and its square mal, meaning wealth. Even numerals are absent from the Algebra: the numbers are spelled out as words, despite his having written a separate treatise advocating the decimal figures. The cost was severe. What we write as x² + 10x = 39 required a sentence, and the general procedure required a paragraph of careful prose that must be read in order and held in the head. More importantly, the absence of notation obscured structure. Without symbols there is no visible pattern shared by the six equation types, so they appear to be six different problems rather than one problem in six arrangements. Manipulation is limited to what can be described, so the compact rearrangements that make algebra powerful — factoring, substituting, collecting terms across many variables — are effectively unavailable. And generalisation is blocked: cubic and higher equations, which follow naturally once expressions can be written and transformed, remained out of reach for centuries. This reveals something about notation generally. It is often treated as a convenience, a shorthand for ideas that exist independently. The historical evidence suggests something stronger: notation is a tool for thinking, and the absence of it limits what can be thought. Symbolic algebra developed slowly, through Diophantus's abbreviations, the Italian algebraists, Viète's use of letters for both knowns and unknowns in the 1590s, and Descartes's conventions in 1637, which are essentially ours. Each step made previously difficult things routine and previously impossible things merely difficult. Euler's contribution a century later was substantially one of notation, and it transformed the field. The lesson is not that al-Khwarizmi was hampered by primitive tools but that a good representation does part of the reasoning for you. Modern notation absorbs his six cases into one because the sign conventions handle the bookkeeping automatically. He had to do that bookkeeping himself, in words, and the fact that he did it completely and correctly is a measure of the achievement.",
        marks: 10,
      },
      {
        question:
          "Discuss the transmission of Hindu-Arabic numerals from India through the Islamic world to Europe, and why the process took so long.",
        modelAnswer:
          "The decimal positional system with zero was developed in India, appearing in Brahmagupta's work of 628 with rules for arithmetic including zero and negative quantities. It reached Baghdad through the Sanskrit astronomical text brought there in the 770s. Around 825 al-Khwarizmi wrote a treatise explaining the system and its procedures for calculation. That Arabic text is entirely lost, but Latin translations of it made in the twelfth century survive, opening with the words Dixit Algoritmi. From these the system entered Europe, promoted further by Leonardo of Pisa's Liber Abaci of 1202, which explained it to merchants. Despite obvious advantages, adoption in Europe took roughly four hundred years. Several factors explain the delay. Institutional inertia was substantial: an established profession of abacists could calculate competently with existing methods and had no incentive to devalue their skill. Practical objections were not frivolous — Florence banned the numerals in banking in 1299 partly because a digit can be altered into another digit with a stroke of a pen, whereas a written-out word cannot, and in an era before standardised auditing this was a real fraud risk. Zero itself was conceptually resisted, being a symbol that denotes nothing yet changes everything around it. There was also cultural suspicion of a system arriving from the Islamic world during centuries of conflict. And the older technology was genuinely adequate for its main use: Roman numerals are perfectly good for recording amounts, and calculation was done on an abacus or counting board, where positional value is physically present in the columns even if the written record does not show it. What eventually settled the matter was the combination of printing, which standardised the figures and made instructional books cheap, and the growth of commerce complex enough that written calculation with an audit trail became necessary. The episode is a useful corrective to the assumption that better technologies are adopted because they are better. The resistance was rational given the incentives, the risks and the existing infrastructure, and the transition happened when the surrounding conditions changed rather than when the argument was won.",
        marks: 10,
      },
      {
        question:
          "The word algorithm comes from al-Khwarizmi's name. Discuss how far his work genuinely anticipates the modern concept.",
        modelAnswer:
          "The etymology is accidental. Latin translations of his lost arithmetic begin Dixit Algoritmi — thus spoke al-Khwarizmi — and readers who did not recognise the personal name took Algoritmi to denote the calculating method itself. The word came to mean decimal computation, then any systematic procedure, and finally the central concept of computer science. The question is whether the accident landed on the right person. Several features of his work genuinely anticipate the modern notion. His procedures are fully specified: for each of the six equation types he gives a sequence of operations with no gaps requiring judgement, so that someone who does not understand why it works can still carry it out correctly. They are general: the procedure applies to every instance of its type rather than to a particular problem. They terminate: each is a finite sequence of steps producing an answer or an explicit statement that none exists. And the classification step is itself algorithmic — determine which of six forms you have, then dispatch to the corresponding routine, which is a case statement. His arithmetic treatise is even closer, since digit-by-digit multiplication and division are mechanical procedures in the fullest sense. There are also real gaps. He had no notion of an algorithm as an object of study rather than a tool for use, no way of asking whether a procedure is efficient, no concept of what problems admit procedures at all, and no formalisation of what counts as a step. These questions required Church and Turing in the 1930s, and Turing's machine is what made algorithm a precise term rather than an informal one. Al-Khwarizmi also had no notion that procedures might be executed by something other than a person. The fair conclusion is that he supplied the practice and the twentieth century supplied the theory. He demonstrated that important classes of problem yield to fixed procedures requiring no ingenuity, and he made the case by example rather than by argument. That is a real anticipation, and the accident of the name is a happier one than most.",
        marks: 10,
      },
      {
        question:
          "Al-Khwarizmi's work synthesised Greek, Indian and Babylonian mathematics. Discuss synthesis as a form of original contribution.",
        modelAnswer:
          "Al-Khwarizmi's algebra draws on at least three traditions. From Babylonian practice, still alive in Mesopotamia, came a long history of solving quadratic problems by computational recipe. From India, through the Sanskrit texts translated in Baghdad, came the decimal positional numerals and rules for quadratics of the kind Brahmagupta had set out. From Greece, through the Arabic Euclid produced in his own lifetime, came the requirement that a method be demonstrated rather than merely reported. None of these components is his. The combination is, and the combination is what produced something neither tradition had: a systematic discipline with general methods and geometric proofs, written for practical use. It is worth being clear about why this counts as original rather than derivative. First, the components were genuinely incompatible in presentation and had to be reconciled: Greek geometry treats magnitudes, Indian arithmetic treats numbers, and applying a geometric proof to an arithmetical recipe requires deciding what the objects of the theory actually are. Second, selecting what to combine is itself a judgement. Brahmagupta accepted negative numbers and al-Khwarizmi did not, a choice that cost him elegance but which he made deliberately in the interest of a treatment he could justify geometrically. Third, the synthesis suggested new questions. Once equation-solving is a subject, the natural next problem is cubics, which occupied Omar Khayyam and eventually the Italian algebraists. This pattern is common in the history of science and is chronically undervalued, partly because credit is more easily assigned for a discrete discovery than for an arrangement. Euclid discovered almost nothing in the Elements and is among the most influential mathematicians who ever lived. Newton's synthesis of Kepler, Galileo and his own mechanics is a more celebrated case of the same kind. Mendeleev's periodic table organised known elements. In each case the value lies in showing that scattered material forms a single structure, which changes what can be asked next. Two qualifications matter. Synthesis requires the components to exist, so it depends on transmission — al-Khwarizmi could do what he did because the Abbasid translation movement had made three traditions available in one language. And synthesis can be done badly, producing a compilation rather than a subject. The distinguishing feature of good synthesis is that the result supports questions none of the sources could have posed, and by that test al-Khwarizmi's work qualifies.",
        marks: 10,
      },
    ],
  },
};
