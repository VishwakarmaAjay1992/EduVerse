import type { LessonContent } from "@/lib/lesson-content-types";

export const highestCommonFactorAndLowestCommonMultiple: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "factors-multiples-and-primes",
  lessonSlug: "highest-common-factor-and-lowest-common-multiple",
  title: "Highest Common Factor and Lowest Common Multiple",
  objectives: [
    "Explain the meanings of HCF and LCM.",
    "Find the HCF and LCM by listing factors and multiples.",
    "Use prime factorization to calculate the HCF and LCM efficiently.",
    "Represent shared and unshared prime factors using a Venn diagram.",
    "Recognize when two numbers are coprime.",
    "Use the relationship between HCF, LCM and the product of two numbers.",
    "Choose correctly between HCF and LCM in word problems.",
    "Solve grouping, cutting, scheduling and repeating-cycle problems.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "The highest common factor (HCF) is the greatest whole number that divides each chosen number exactly. The lowest common multiple (LCM) is the smallest positive number that is a multiple of each chosen number.",
        "HCF problems usually involve splitting, grouping or cutting into the largest equal size. LCM problems usually involve repeating events, schedules or finding the first time several cycles meet.",
      ],
    },
    {
      kind: "comparison",
      heading: "HCF and LCM at a glance",
      left: {
        title: "Highest common factor",
        items: [
          "Look among common factors.",
          "Choose the greatest shared divisor.",
          "Useful for largest equal groups or largest equal lengths.",
          "The HCF cannot exceed the smallest positive input number.",
        ],
      },
      right: {
        title: "Lowest common multiple",
        items: [
          "Look among common positive multiples.",
          "Choose the first shared multiple.",
          "Useful for repeating cycles and synchronized events.",
          "The LCM is at least as large as the largest positive input number.",
        ],
      },
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Coprime numbers",
      body: "Two whole numbers are coprime when their HCF is 1. They do not need to be prime themselves. For example, 8 and 15 are both composite, but they share no prime factor, so they are coprime.",
    },
    {
      kind: "theory",
      heading: "Method 1: listing factors and multiples",
      paragraphs: [
        "For small numbers, list all factors to find the HCF and list multiples until the first common value appears to find the LCM.",
        "This method makes the meaning visible, but it can become slow when the numbers are large.",
      ],
    },
    {
      kind: "example",
      prompt: "Find the HCF and LCM of 12 and 18 by listing.",
      steps: [
        "Factors of 12: $1,2,3,4,6,12$.",
        "Factors of 18: $1,2,3,6,9,18$.",
        "The greatest common factor is 6.",
        "Multiples of 12: $12,24,36,48,\\ldots$.",
        "Multiples of 18: $18,36,54,\\ldots$.",
        "The first common positive multiple is 36.",
      ],
      answer: "$\\operatorname{HCF}(12,18)=6$ and $\\operatorname{LCM}(12,18)=36$.",
    },
    {
      kind: "theory",
      heading: "Method 2: prime factorization",
      paragraphs: [
        "Write each number as a product of prime powers. For the HCF, use only primes present in every number and choose the smallest exponent. For the LCM, use every prime that appears and choose the largest exponent.",
        "Thinking in exponents prevents factors from being counted twice or omitted.",
      ],
    },
    {
      kind: "table",
      heading: "Prime-exponent rule",
      headers: ["Goal", "Which primes?", "Which exponent?"],
      rows: [
        ["HCF", "Only primes shared by all numbers", "Smallest exponent"],
        ["LCM", "Every prime appearing in any number", "Largest exponent"],
      ],
    },
    {
      kind: "example",
      prompt: "Use prime factors to find the HCF and LCM of 72 and 120.",
      steps: [
        "$72=2^3\\times3^2$.",
        "$120=2^3\\times3\\times5$.",
        "HCF: shared primes with smaller exponents give $2^3\\times3=24$.",
        "LCM: all primes with larger exponents give $2^3\\times3^2\\times5=360$.",
      ],
      answer: "$\\operatorname{HCF}=24$ and $\\operatorname{LCM}=360$.",
    },
    {
      kind: "example",
      prompt: "Find the HCF and LCM of 48, 72 and 180.",
      steps: [
        "$48=2^4\\times3$.",
        "$72=2^3\\times3^2$.",
        "$180=2^2\\times3^2\\times5$.",
        "For the HCF, the shared minimum exponents are $2^2$ and $3^1$.",
        "For the LCM, the maximum exponents are $2^4$, $3^2$ and $5^1$.",
      ],
      answer:
        "$\\operatorname{HCF}=2^2\\times3=12$ and $\\operatorname{LCM}=2^4\\times3^2\\times5=720$.",
    },
    {
      kind: "theory",
      heading: "Venn diagram method",
      paragraphs: [
        "A prime-factor Venn diagram places shared prime factors in the overlap. Extra factors belonging to only one number go in the separate parts of the circles.",
        "Multiply the overlap to obtain the HCF. Multiply every entry in the entire diagram to obtain the LCM.",
      ],
    },
    {
      kind: "example",
      prompt: "Represent 60 and 84 with a prime-factor Venn diagram and find the HCF and LCM.",
      steps: [
        "$60=2\\times2\\times3\\times5$ and $84=2\\times2\\times3\\times7$.",
        "Put the shared factors $2,2,3$ in the overlap.",
        "Place 5 in the 60-only region and 7 in the 84-only region.",
        "HCF is the overlap: $2\\times2\\times3=12$.",
        "LCM is every entry: $2\\times2\\times3\\times5\\times7=420$.",
      ],
      answer: "$\\operatorname{HCF}(60,84)=12$ and $\\operatorname{LCM}(60,84)=420$.",
    },
    {
      kind: "formula",
      latex: "\\operatorname{HCF}(a,b)\\times\\operatorname{LCM}(a,b)=a\\times b",
      caption: "This identity applies to two positive whole numbers.",
    },
    {
      kind: "example",
      prompt: "The HCF of 45 and a second number is 15. Their LCM is 180. Find the second number.",
      steps: [
        "Use $\\text{HCF}\\times\\text{LCM}=a\\times b$.",
        "$15\\times180=45\\times b$.",
        "$2700=45b$.",
        "$b=2700\\div45=60$.",
      ],
      answer: "The second number is 60.",
    },
    {
      kind: "factorPrimeExplorer",
      mode: "hcfLcm",
      heading: "Interactive HCF and LCM laboratory",
    },
    {
      kind: "theory",
      heading: "Choosing HCF or LCM in a word problem",
      paragraphs: [
        "Ask what the answer represents. If you are dividing quantities into the greatest possible equal units, use the HCF. If you are waiting for repeating events to coincide, use the LCM.",
      ],
      list: [
        "Largest identical group size or longest equal cut: HCF.",
        "Maximum number of identical groups with no leftovers: HCF.",
        "First time events happen together again: LCM.",
        "Smallest quantity that fits several pack sizes exactly: LCM.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Ribbons of length 84 cm and 126 cm are cut into equal pieces of the greatest possible length. Find the piece length and total number of pieces.",
      steps: [
        "The greatest equal length must divide both ribbon lengths, so use the HCF.",
        "$84=2^2\\times3\\times7$ and $126=2\\times3^2\\times7$.",
        "HCF $=2\\times3\\times7=42$ cm.",
        "$84\\div42=2$ pieces and $126\\div42=3$ pieces.",
      ],
      answer: "Each piece is 42 cm long, and there are 5 pieces altogether.",
    },
    {
      kind: "example",
      prompt:
        "Two warning lights flash every 18 seconds and 24 seconds. They flash together now. When will they next flash together?",
      steps: [
        "This is a repeating-cycle problem, so use the LCM.",
        "$18=2\\times3^2$ and $24=2^3\\times3$.",
        "LCM $=2^3\\times3^2=72$.",
      ],
      answer: "They next flash together after 72 seconds.",
    },
    {
      kind: "example",
      prompt:
        "A shop sells pencils in packs of 8 and erasers in packs of 12. What is the smallest equal number of pencils and erasers that can be bought using complete packs?",
      steps: [
        "The quantity must be a multiple of both pack sizes.",
        "$8=2^3$ and $12=2^2\\times3$.",
        "LCM $=2^3\\times3=24$.",
      ],
      answer: "Buy 24 pencils and 24 erasers: 3 pencil packs and 2 eraser packs.",
    },
    {
      kind: "example",
      prompt:
        "A baker has 48 chocolate cakes and 60 vanilla cakes. She makes the greatest possible number of identical trays with no cakes left. How many trays and how many cakes of each type per tray?",
      steps: [
        "The number of trays must divide both totals, so use the HCF.",
        "$48=2^4\\times3$ and $60=2^2\\times3\\times5$.",
        "HCF $=2^2\\times3=12$ trays.",
        "$48\\div12=4$ chocolate and $60\\div12=5$ vanilla cakes per tray.",
      ],
      answer: "She makes 12 trays, each containing 4 chocolate and 5 vanilla cakes.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Construction",
          text: "HCF finds the largest equal tile or panel dimension that fits several lengths exactly.",
        },
        {
          area: "Transport schedules",
          text: "LCM predicts when buses or trains with different intervals next arrive together.",
        },
        {
          area: "Manufacturing",
          text: "HCF creates identical batches; LCM coordinates repeating machine cycles.",
        },
        {
          area: "Fractions",
          text: "HCF simplifies fractions, while LCM produces the least common denominator.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Choosing HCF whenever the question says ‘greatest’. Without checking what is greatest.",
          right:
            "Identify whether you are finding a divisor/group size or a repeating/common quantity.",
        },
        {
          wrong: "Using the largest exponents for HCF.",
          right: "HCF uses minimum shared exponents; LCM uses maximum exponents.",
        },
        {
          wrong: "Multiplying every prime in a Venn diagram to get the HCF.",
          right: "Only the overlap gives the HCF; the whole diagram gives the LCM.",
        },
        {
          wrong: "Assuming coprime numbers must both be prime.",
          right: "Coprime means HCF 1; 8 and 15 are a composite coprime pair.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: HCF and LCM",
      stepKey: "hcfLcmPractice",
      questions: [
        {
          prompt: "What is the HCF of 18 and 30?",
          options: ["3", "6", "9", "12"],
          answer: 1,
          explanation: "The common factors are 1, 2, 3 and 6.",
        },
        {
          prompt: "What is the LCM of 10 and 15?",
          options: ["20", "25", "30", "150"],
          answer: 2,
          explanation: "30 is the first positive number divisible by both 10 and 15.",
        },
        {
          prompt: "Which pair is coprime?",
          options: ["8 and 15", "9 and 15", "12 and 18", "14 and 21"],
          answer: 0,
          explanation: "8 and 15 share only factor 1.",
        },
        {
          prompt: "For HCF using prime powers, which exponent is selected?",
          options: [
            "The sum",
            "The difference",
            "The smaller shared exponent",
            "The larger exponent",
          ],
          answer: 2,
          explanation: "A factor cannot contain more copies of a prime than either number.",
        },
        {
          prompt: "For LCM using prime powers, which exponent is selected?",
          options: ["The smaller", "The larger", "Always 1", "The average"],
          answer: 1,
          explanation: "The LCM must contain enough copies to be divisible by every input.",
        },
        {
          prompt: "Two bells ring every 12 and 20 minutes. When do they next ring together?",
          options: ["24 min", "32 min", "60 min", "240 min"],
          answer: 2,
          explanation: "$\\operatorname{LCM}(12,20)=60$.",
        },
        {
          prompt: "The longest equal pieces cut from 45 cm and 75 cm strips are...",
          options: ["5 cm", "10 cm", "15 cm", "25 cm"],
          answer: 2,
          explanation: "$\\operatorname{HCF}(45,75)=15$.",
        },
        {
          prompt: "If HCF = 4 and LCM = 84 for numbers 12 and n, what is n?",
          options: ["21", "24", "28", "36"],
          answer: 2,
          explanation: "$4\\times84=12n$, so $n=28$.",
        },
        {
          prompt: "What is the HCF of $2^4\\times3^2$ and $2^2\\times3^3\\times5$?",
          options: ["12", "36", "72", "180"],
          answer: 1,
          explanation: "$2^2\\times3^2=36$.",
        },
        {
          prompt: "What is the LCM of $2^4\\times3^2$ and $2^2\\times3^3\\times5$?",
          options: ["720", "1,080", "2,160", "4,320"],
          answer: 2,
          explanation: "$2^4\\times3^3\\times5=2160$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "The HCF is the greatest shared divisor; the LCM is the smallest shared positive multiple.",
        "Listing works well for small numbers; prime powers are more efficient for larger numbers.",
        "HCF uses shared primes with minimum exponents; LCM uses all primes with maximum exponents.",
        "For two positive numbers, HCF × LCM equals their product.",
        "Use HCF for largest equal groups or cuts and LCM for repeating cycles or smallest common quantities.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: HCF and LCM",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "What is $\\operatorname{HCF}(42,70)$?",
          options: ["7", "14", "21", "28"],
          answer: 1,
          marks: 1,
          explanation:
            "$42=2\\times3\\times7$ and $70=2\\times5\\times7$, so the shared product is 14.",
        },
        {
          type: "mc",
          prompt: "What is $\\operatorname{LCM}(18,24)$?",
          options: ["36", "48", "72", "144"],
          answer: 2,
          marks: 1,
          explanation: "$18=2\\times3^2$, $24=2^3\\times3$, so LCM $=2^3\\times3^2=72$.",
        },
        {
          type: "tf",
          prompt: "If two numbers are coprime, their LCM is their product.",
          answer: true,
          marks: 1,
          explanation: "Their HCF is 1, so the product identity gives LCM = product.",
        },
        {
          type: "multi",
          prompt: "Select all situations that normally require an LCM.",
          options: [
            "When two buses next arrive together",
            "Largest equal tile side",
            "Smallest number divisible by two pack sizes",
            "Greatest number of identical groups",
          ],
          answers: [0, 2],
          marks: 2,
          explanation:
            "Repeating meetings and smallest common quantities use LCM; equal splitting uses HCF.",
        },
        {
          type: "matching",
          prompt: "Match each description to HCF or LCM.",
          left: [
            "Largest equal cut",
            "First shared cycle",
            "Greatest number of identical groups",
            "Least common denominator",
          ],
          options: ["HCF", "LCM"],
          answer: [0, 1, 0, 1],
          marks: 4,
          explanation:
            "Dividing into equal parts uses a common factor; synchronizing or common denominators use a common multiple.",
        },
        {
          type: "mc",
          prompt: "The HCF of $2^5\\times3^2\\times7$ and $2^3\\times3^4\\times5$ is...",
          options: [
            "$2^3\\times3^2$",
            "$2^5\\times3^4$",
            "$2^3\\times3^2\\times5\\times7$",
            "$2^2\\times3^3$",
          ],
          answer: 0,
          marks: 1,
          explanation: "Use only shared primes 2 and 3 with the smaller exponents.",
        },
        {
          type: "mc",
          prompt: "The LCM of the same two numbers is...",
          options: [
            "$2^3\\times3^2$",
            "$2^5\\times3^4\\times5\\times7$",
            "$2^5\\times3^2\\times5$",
            "$2^3\\times3^4\\times7$",
          ],
          answer: 1,
          marks: 1,
          explanation: "Use every prime with its larger exponent.",
        },
        {
          type: "tf",
          prompt: "The HCF of two positive numbers can be larger than both numbers.",
          answer: false,
          marks: 1,
          explanation: "A shared factor cannot exceed the smaller positive number.",
        },
        {
          type: "mc",
          prompt: "HCF = 6 and LCM = 180 for 30 and n. Find n.",
          options: ["24", "30", "36", "54"],
          answer: 2,
          marks: 1,
          explanation: "$6\\times180=30n$, so $n=36$.",
        },
        {
          type: "multi",
          prompt: "Select all pairs with HCF 1.",
          options: ["8 and 21", "10 and 27", "14 and 35", "25 and 36"],
          answers: [0, 1, 3],
          marks: 2,
          explanation:
            "The first, second and fourth pairs share no prime factor; 14 and 35 share 7.",
        },
        {
          type: "matching",
          prompt: "Match each pair to its HCF.",
          left: ["16 and 24", "27 and 45", "32 and 48", "35 and 64"],
          options: ["1", "8", "9", "16"],
          answer: [1, 2, 3, 0],
          marks: 4,
          explanation: "Factor lists or prime powers give 8, 9, 16 and 1 respectively.",
        },
        {
          type: "mc",
          prompt: "Three lights flash every 6, 8 and 15 seconds. When do they next flash together?",
          options: ["60 s", "90 s", "120 s", "240 s"],
          answer: 2,
          marks: 1,
          explanation: "$\\operatorname{LCM}(6,8,15)=2^3\\times3\\times5=120$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "factorPrimeExplorer", label: "Use the HCF and LCM laboratory" },
        { key: "hcfLcmPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
