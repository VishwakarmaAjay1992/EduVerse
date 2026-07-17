import type { LessonContent } from "@/lib/lesson-content-types";

export const primeNumbersAndPrimeFactorization: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "factors-multiples-and-primes",
  lessonSlug: "prime-numbers-and-prime-factorization",
  title: "Prime Numbers and Prime Factorization",
  objectives: [
    "Distinguish prime, composite and unit numbers.",
    "Explain why 1 is neither prime nor composite.",
    "Use the Sieve of Eratosthenes to identify primes.",
    "Test whether a number is prime by checking possible divisors up to its square root.",
    "Write a composite number as a product of prime factors.",
    "Use factor trees and repeated division to obtain the same unique prime factorization.",
    "Write repeated prime factors using index notation.",
    "Apply prime factorization to recognize square and cube numbers.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Prime numbers are the indivisible building blocks of the positive whole numbers. Every whole number greater than 1 is either prime or can be built by multiplying primes.",
        "Prime factorization reveals this hidden structure. It is the foundation for simplifying fractions, finding HCF and LCM, studying patterns, and modern encryption.",
      ],
    },
    {
      kind: "cards",
      heading: "Three important classifications",
      columns: 3,
      items: [
        {
          title: "Prime",
          value: "Exactly 2",
          unit: "positive factors",
          text: "The factors are 1 and the number itself. Examples: 2, 3, 5, 7, 11.",
        },
        {
          title: "Composite",
          value: "More than 2",
          unit: "positive factors",
          text: "It can be written as a product of smaller positive whole numbers. Examples: 4, 6, 8, 9.",
        },
        {
          title: "Unit",
          value: "1",
          unit: "positive factor",
          text: "The number 1 has only one positive factor, so it is neither prime nor composite.",
        },
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "The first prime is 2",
      body: "2 is the only even prime number. Every other even number is divisible by 2 and therefore has at least three positive factors: 1, 2 and itself.",
    },
    {
      kind: "theory",
      heading: "The Sieve of Eratosthenes",
      paragraphs: [
        "A sieve identifies many primes at once. Write the whole numbers from 2 to a chosen limit. Circle 2 and cross out its later multiples. Then circle the next uncrossed number, 3, and cross out its later multiples. Continue with 5, 7 and later uncrossed numbers.",
        "You only need to use sieving primes up to the square root of the limit. If a composite number had no factor at or below that square root, both factors would be too large and their product would exceed the number.",
      ],
      list: [
        "Never cross out the prime itself; cross out its later multiples.",
        "A crossed number may be crossed by more than one prime, which is expected.",
        "After the required stages, every uncrossed number is prime.",
      ],
    },
    {
      kind: "example",
      prompt: "Use a sieve argument to list the primes below 30.",
      steps: [
        "Keep 2 and cross out later multiples of 2.",
        "Keep 3 and cross out later multiples of 3.",
        "Keep 5 and cross out later multiples of 5.",
        "Because $\\sqrt{30}\\approx5.48$, no larger sieving prime is required.",
        "Read the uncrossed values.",
      ],
      answer: "The primes below 30 are $2,3,5,7,11,13,17,19,23,29$.",
    },
    {
      kind: "theory",
      heading: "Testing one number for primality",
      paragraphs: [
        "To decide whether a number $n$ is prime, test prime divisors no greater than $\\sqrt{n}$. If none divides exactly, $n$ is prime.",
        "Divisibility rules remove many candidates quickly. After checking 2, 3 and 5, only a few possible prime divisors may remain.",
      ],
    },
    {
      kind: "example",
      prompt: "Determine whether 97 is prime.",
      steps: [
        "$\\sqrt{97}\\approx9.85$, so test primes 2, 3, 5 and 7.",
        "97 is odd, so it is not divisible by 2.",
        "Its digit sum is 16, so it is not divisible by 3.",
        "It does not end in 0 or 5, so it is not divisible by 5.",
        "$97\\div7$ is not a whole number.",
      ],
      answer: "97 is prime because no prime at or below $\\sqrt{97}$ divides it.",
    },
    {
      kind: "example",
      prompt: "Show that 143 is composite.",
      steps: [
        "$\\sqrt{143}\\approx11.96$, so possible prime divisors include 2, 3, 5, 7 and 11.",
        "143 is not divisible by 2, 3, 5 or 7.",
        "$143\\div11=13$.",
      ],
      answer: "$143=11\\times13$, so it is composite.",
    },
    {
      kind: "theory",
      heading: "Prime factorization",
      paragraphs: [
        "A prime factorization writes a positive whole number greater than 1 as a product containing only prime numbers. Repeated factors are usually written with exponents.",
        "For example, $72=2\\times2\\times2\\times3\\times3=2^3\\times3^2$.",
      ],
    },
    {
      kind: "formula",
      latex: "n=p_1^{a_1}p_2^{a_2}\\cdots p_k^{a_k}",
      caption:
        "Each $p_i$ is a different prime and each exponent $a_i$ is a positive whole number.",
    },
    {
      kind: "theory",
      heading: "Method 1: factor trees",
      paragraphs: [
        "Split a composite number into any convenient factor pair. If a branch is composite, split it again. Continue until every leaf is prime, then multiply the prime leaves.",
        "Different first splits can create different-looking trees, but they always end with the same collection of prime factors.",
      ],
    },
    {
      kind: "example",
      prompt: "Prime-factorize 180 using a factor tree.",
      steps: [
        "Split $180=18\\times10$.",
        "Split $18=2\\times9=2\\times3\\times3$.",
        "Split $10=2\\times5$.",
        "Collect the prime leaves: $2,2,3,3,5$.",
        "Write repeated factors with exponents.",
      ],
      answer: "$180=2^2\\times3^2\\times5$.",
    },
    {
      kind: "theory",
      heading: "Method 2: repeated prime division",
      paragraphs: [
        "Divide by the smallest prime that works, and continue dividing the quotient. Stop when the quotient is 1. The divisors used are the prime factors.",
        "This method is systematic and is particularly useful when the number has repeated small prime factors.",
      ],
    },
    {
      kind: "example",
      prompt: "Prime-factorize 756 by repeated division.",
      steps: [
        "$756\\div2=378$.",
        "$378\\div2=189$.",
        "$189\\div3=63$, then $63\\div3=21$, then $21\\div3=7$.",
        "$7\\div7=1$.",
        "The divisors were 2, 2, 3, 3, 3 and 7.",
      ],
      answer: "$756=2^2\\times3^3\\times7$.",
    },
    {
      kind: "callout",
      variant: "didyouknow",
      title: "Fundamental theorem of arithmetic",
      body: "Every whole number greater than 1 has exactly one prime factorization, apart from the order of the factors. For example, $2\\times3\\times5$ and $5\\times2\\times3$ represent the same unique factorization of 30.",
    },
    {
      kind: "factorPrimeExplorer",
      mode: "primes",
      heading: "Interactive prime sieve and factorization laboratory",
    },
    {
      kind: "theory",
      heading: "Using exponents to recognize squares and cubes",
      paragraphs: [
        "A positive whole number is a perfect square exactly when every exponent in its prime factorization is even. It is a perfect cube exactly when every exponent is a multiple of 3.",
        "This works because squaring doubles every exponent and cubing triples every exponent.",
      ],
    },
    {
      kind: "example",
      prompt: "Decide whether 1,764 is a perfect square.",
      steps: [
        "Prime-factorize: $1764=2^2\\times3^2\\times7^2$.",
        "Every exponent is 2, which is even.",
        "Take one factor from each pair: $\\sqrt{1764}=2\\times3\\times7$.",
      ],
      answer: "Yes. $1764=42^2$.",
    },
    {
      kind: "example",
      prompt: "What smallest whole number must multiply 540 to make a perfect square?",
      steps: [
        "$540=2^2\\times3^3\\times5$.",
        "The exponent of 2 is already even.",
        "The exponent of 3 needs one more factor of 3, and the exponent of 5 needs one more factor of 5.",
        "Multiply by $3\\times5=15$.",
      ],
      answer: "$540\\times15=8100=90^2$, so the smallest multiplier is 15.",
    },
    {
      kind: "example",
      prompt: "Determine whether 13,824 is a perfect cube.",
      steps: [
        "$13824=2^9\\times3^3$.",
        "Both exponents, 9 and 3, are multiples of 3.",
        "$\\sqrt[3]{13824}=2^3\\times3=24$.",
      ],
      answer: "Yes. $13,824=24^3$.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Cryptography",
          text: "Modern public-key systems rely on arithmetic involving very large prime numbers.",
        },
        {
          area: "Computer algorithms",
          text: "Prime tests and factorization are classic examples for studying algorithm efficiency.",
        },
        {
          area: "Fractions",
          text: "Prime factors expose exactly which factors can cancel from a numerator and denominator.",
        },
        {
          area: "Tiling and geometry",
          text: "Prime exponents reveal whether an area or volume has a whole-number side length.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Calling 1 a prime because it is divisible by 1.",
          right: "A prime has exactly two positive factors; 1 has only one.",
        },
        {
          wrong: "Calling every odd number prime.",
          right: "Many odd numbers are composite, such as $9=3^2$ and $15=3\\times5$.",
        },
        {
          wrong: "Leaving a composite number in a prime factorization.",
          right: "Continue until every factor is prime.",
        },
        {
          wrong: "Believing a different factor tree gives a different answer.",
          right:
            "Reorder the leaves and combine equal primes; the final prime factorization is unique.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: primes and prime factorization",
      stepKey: "primePractice",
      questions: [
        {
          prompt: "Which number is prime?",
          options: ["39", "41", "51", "57"],
          answer: 1,
          explanation: "41 has no divisors among 2, 3 or 5, the primes up to $\\sqrt{41}$.",
        },
        {
          prompt: "Which statement about 1 is correct?",
          options: [
            "It is prime.",
            "It is composite.",
            "It is neither prime nor composite.",
            "It has two factors.",
          ],
          answer: 2,
          explanation: "1 has exactly one positive factor.",
        },
        {
          prompt: "What is the prime factorization of 84?",
          options: [
            "$2\\times42$",
            "$2^2\\times3\\times7$",
            "$2\\times3\\times14$",
            "$4\\times3\\times7$",
          ],
          answer: 1,
          explanation: "$84=4\\times21=2^2\\times3\\times7$.",
        },
        {
          prompt: "What is the largest prime needed to test whether 113 is prime?",
          options: ["5", "7", "11", "13"],
          answer: 1,
          explanation: "$\\sqrt{113}\\approx10.63$, so test primes only through 7.",
        },
        {
          prompt: "Which is a perfect square?",
          options: ["$2^3\\times3^2$", "$2^4\\times3^2$", "$2^2\\times3^3$", "$2\\times3^4$"],
          answer: 1,
          explanation: "Every exponent is even.",
        },
        {
          prompt: "Which is a perfect cube?",
          options: ["$2^3\\times5^6$", "$2^2\\times5^6$", "$2^3\\times5^4$", "$2^6\\times5^2$"],
          answer: 0,
          explanation: "Every exponent is a multiple of 3.",
        },
        {
          prompt: "How many distinct prime factors does 360 have?",
          options: ["2", "3", "4", "6"],
          answer: 1,
          explanation: "$360=2^3\\times3^2\\times5$ has distinct primes 2, 3 and 5.",
        },
        {
          prompt: "Which number is composite?",
          options: ["53", "59", "61", "63"],
          answer: 3,
          explanation: "$63=3^2\\times7$.",
        },
        {
          prompt: "What smallest factor makes $2^3\\times3^2$ a square?",
          options: ["2", "3", "6", "9"],
          answer: 0,
          explanation: "One additional factor 2 changes the odd exponent 3 to 4.",
        },
        {
          prompt: "Which factor tree endpoint is not allowed?",
          options: ["2", "3", "5", "15"],
          answer: 3,
          explanation: "15 is composite and must be split into 3 and 5.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A prime has exactly two positive factors; a composite has more than two; 1 is neither.",
        "The sieve removes multiples of primes and leaves the prime numbers.",
        "To test one number, check prime divisors only up to its square root.",
        "Prime factorization ends with prime factors only and is unique apart from order.",
        "Even prime exponents characterize perfect squares; exponents divisible by 3 characterize perfect cubes.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: primes and factorization",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which number is prime?",
          options: ["87", "89", "91", "93"],
          answer: 1,
          marks: 1,
          explanation: "89 has no prime divisor at or below $\\sqrt{89}<10$.",
        },
        {
          type: "tf",
          prompt: "2 is the only even prime number.",
          answer: true,
          marks: 1,
          explanation: "Every larger even number has factor 2 in addition to 1 and itself.",
        },
        {
          type: "mc",
          prompt: "What is $420$ in prime-factor form?",
          options: [
            "$2^2\\times3\\times5\\times7$",
            "$2\\times3^2\\times5\\times7$",
            "$2^2\\times3\\times5^2$",
            "$4\\times3\\times5\\times7$",
          ],
          answer: 0,
          marks: 1,
          explanation: "$420=42\\times10=(2\\times3\\times7)(2\\times5)$.",
        },
        {
          type: "multi",
          prompt: "Select all prime numbers.",
          options: ["2", "17", "27", "31", "51"],
          answers: [0, 1, 3],
          marks: 2,
          explanation: "27 and 51 are divisible by 3; the others are prime.",
        },
        {
          type: "matching",
          prompt: "Match the number to its classification.",
          left: ["1", "2", "49", "97"],
          options: ["Composite", "Even prime", "Neither prime nor composite", "Odd prime"],
          answer: [2, 1, 0, 3],
          marks: 4,
          explanation: "1 is the unit, 2 is the even prime, 49 is $7^2$, and 97 is prime.",
        },
        {
          type: "mc",
          prompt: "Which prime divisors must be checked to test 137?",
          options: ["2, 3, 5, 7, 11", "2, 3, 5, 7, 11, 13", "2, 3, 5, 7", "All primes below 137"],
          answer: 0,
          marks: 1,
          explanation: "$\\sqrt{137}\\approx11.7$, so test primes through 11.",
        },
        {
          type: "tf",
          prompt:
            "Two different factor trees for the same number may produce different prime factorizations.",
          answer: false,
          marks: 1,
          explanation:
            "The fundamental theorem of arithmetic guarantees uniqueness apart from order.",
        },
        {
          type: "mc",
          prompt: "What is the smallest multiplier that makes $2^5\\times3^2\\times7$ a square?",
          options: ["2", "7", "14", "42"],
          answer: 2,
          marks: 1,
          explanation: "The odd exponents belong to 2 and 7, so multiply by $2\\times7=14$.",
        },
        {
          type: "multi",
          prompt: "Select all perfect cubes.",
          options: ["$2^3\\times3^6$", "$2^6\\times5^3$", "$2^4\\times3^3$", "$7^9$"],
          answers: [0, 1, 3],
          marks: 2,
          explanation: "All exponents must be divisible by 3.",
        },
        {
          type: "mc",
          prompt:
            "In a sieve to 100, what is the largest prime whose multiples must be crossed out deliberately?",
          options: ["5", "7", "11", "13"],
          answer: 1,
          marks: 1,
          explanation:
            "$\\sqrt{100}=10$, so use primes through 7. Multiples of 11 have already been crossed by smaller factors or exceed 100 when squared.",
        },
        {
          type: "matching",
          prompt: "Match each number to its prime factorization.",
          left: ["72", "90", "125", "196"],
          options: ["$5^3$", "$2^3\\times3^2$", "$2^2\\times7^2$", "$2\\times3^2\\times5$"],
          answer: [1, 3, 0, 2],
          marks: 4,
          explanation: "Each product expands to the corresponding number.",
        },
        {
          type: "tf",
          prompt: "If a whole number greater than 1 is not prime, it is composite.",
          answer: true,
          marks: 1,
          explanation: "These categories exhaust the whole numbers greater than 1.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "factorPrimeExplorer", label: "Use the prime sieve and factorization laboratory" },
        { key: "primePractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
