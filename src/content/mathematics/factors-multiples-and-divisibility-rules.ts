import type { LessonContent } from "@/lib/lesson-content-types";

export const factorsMultiplesAndDivisibilityRules: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "factors-multiples-and-primes",
  lessonSlug: "factors-multiples-and-divisibility-rules",
  title: "Factors, Multiples and Divisibility Rules",
  objectives: [
    "Explain the difference between a factor and a multiple.",
    "List every positive factor of a whole number using factor pairs.",
    "Generate multiples of a number and identify common multiples.",
    "Apply divisibility tests for 2, 3, 4, 5, 6, 8, 9, 10, 11 and 12.",
    "Use factors and multiples to solve simple real-life problems.",
    "Explain why every positive whole number has finitely many factors but infinitely many multiples.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Factors and multiples describe two sides of the same multiplication fact. If $a \\times b=n$, then $a$ and $b$ are factors of $n$, while $n$ is a multiple of both $a$ and $b$.",
        "These ideas help us simplify fractions, organize objects into equal groups, test divisibility quickly, and prepare for prime factorization, HCF and LCM.",
      ],
    },
    {
      kind: "comparison",
      heading: "Factor or multiple?",
      left: {
        title: "Factor",
        items: [
          "Divides a number exactly, with remainder 0.",
          "A positive whole number has only finitely many positive factors.",
          "Factors of 12 are 1, 2, 3, 4, 6 and 12.",
        ],
      },
      right: {
        title: "Multiple",
        items: [
          "Is produced by multiplying a number by a whole number.",
          "Every non-zero whole number has infinitely many positive multiples.",
          "Multiples of 12 begin 12, 24, 36, 48, ...",
        ],
      },
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Factor and multiple",
      body: "A whole number $f$ is a factor of $n$ when $n \\div f$ is a whole number. A number $m$ is a multiple of $n$ when $m=nk$ for some whole number $k$.",
    },
    {
      kind: "theory",
      heading: "Finding factors systematically",
      paragraphs: [
        "Use factor pairs so that no factor is missed. Begin with 1, then test 2, 3, 4 and so on. Once the smaller number in a pair passes $\\sqrt{n}$, every remaining pair has already appeared in reverse order.",
        "For 36, the pairs are $1\\times36$, $2\\times18$, $3\\times12$, $4\\times9$ and $6\\times6$. Therefore the positive factors are 1, 2, 3, 4, 6, 9, 12, 18 and 36.",
      ],
      list: [
        "1 is a factor of every positive whole number.",
        "Every positive whole number is a factor of itself.",
        "A square number has an odd number of positive factors because one factor pair repeats, such as $6\\times6$ for 36.",
      ],
    },
    {
      kind: "example",
      prompt: "List all positive factors of 48.",
      steps: [
        "Start with factor pairs: $1\\times48$ and $2\\times24$.",
        "$48\\div3=16$, so add $3\\times16$.",
        "$48\\div4=12$, so add $4\\times12$.",
        "$48\\div5$ is not whole, but $48\\div6=8$, so add $6\\times8$.",
        "The next test number, 7, is greater than $\\sqrt{48}\\approx6.9$, so stop.",
      ],
      answer: "The factors are $1,2,3,4,6,8,12,16,24,48$.",
    },
    {
      kind: "theory",
      heading: "Generating and recognizing multiples",
      paragraphs: [
        "To generate multiples of a number, multiply it by 1, 2, 3, and so on. For example, the positive multiples of 7 begin $7,14,21,28,35,\\ldots$.",
        "A common multiple belongs to the multiple lists of two or more numbers. For example, 24 is a common multiple of 6 and 8 because $24=6\\times4=8\\times3$.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Write the first six positive multiples of 9 and identify those that are also multiples of 6.",
      steps: [
        "Multiply 9 by 1 through 6: $9,18,27,36,45,54$.",
        "Test which results divide exactly by 6.",
        "$18\\div6=3$, $36\\div6=6$, and $54\\div6=9$.",
      ],
      answer:
        "The first six multiples are 9, 18, 27, 36, 45 and 54. The common multiples with 6 are 18, 36 and 54.",
    },
    {
      kind: "table",
      heading: "Useful divisibility rules",
      headers: ["Divisor", "Quick test", "Example"],
      rows: [
        ["2", "Last digit is 0, 2, 4, 6 or 8.", "4,738 is divisible by 2."],
        ["3", "Digit sum is divisible by 3.", "$4+7+3+8=22$, so 4,738 is not divisible by 3."],
        ["4", "Last two digits form a multiple of 4.", "3,516 works because 16 is divisible by 4."],
        ["5", "Last digit is 0 or 5.", "2,735 is divisible by 5."],
        ["6", "Divisible by both 2 and 3.", "2,574 is even and its digit sum is 18."],
        ["8", "Last three digits form a multiple of 8.", "12,136 works because $136\\div8=17$."],
        ["9", "Digit sum is divisible by 9.", "6,435 works because the digit sum is 18."],
        ["10", "Last digit is 0.", "8,920 is divisible by 10."],
        [
          "11",
          "Alternating digit sum is a multiple of 11, including 0.",
          "5,082 works because $(5+8)-(0+2)=11$.",
        ],
        ["12", "Divisible by both 3 and 4.", "2,364 has digit sum 15 and last two digits 64."],
      ],
      note: "A rule is a fast test. It does not change the meaning of divisibility: division must still give a whole-number quotient.",
    },
    {
      kind: "example",
      prompt: "Determine whether 7,452 is divisible by 3, 4, 6, 8, 9 and 12.",
      steps: [
        "Digit sum: $7+4+5+2=18$, so it is divisible by 3 and 9.",
        "The last two digits are 52, and $52\\div4=13$, so it is divisible by 4.",
        "It is even and divisible by 3, so it is divisible by 6.",
        "The last three digits are 452; $452\\div8=56.5$, so it is not divisible by 8.",
        "It is divisible by both 3 and 4, so it is divisible by 12.",
      ],
      answer: "7,452 is divisible by 3, 4, 6, 9 and 12, but not by 8.",
    },
    {
      kind: "example",
      prompt: "Find the missing digit in $53\\square4$ so that the number is divisible by 9.",
      steps: [
        "For divisibility by 9, the digit sum must be a multiple of 9.",
        "The known digits sum to $5+3+4=12$.",
        "We need $12+\\square$ to be 18, the next multiple of 9.",
        "$18-12=6$.",
      ],
      answer: "The missing digit is 6, giving 5,364.",
    },
    {
      kind: "example",
      prompt: "Is 31,592 divisible by 8?",
      steps: [
        "Only the last three digits are needed.",
        "The last three digits are 592.",
        "$592\\div8=74$, which is a whole number.",
      ],
      answer: "Yes. Therefore 31,592 is divisible by 8.",
    },
    {
      kind: "example",
      prompt: "Use the divisibility rule for 11 to test 84,293.",
      steps: [
        "Add alternating digits: $8+2+3=13$.",
        "Add the other alternating digits: $4+9=13$.",
        "The difference is $13-13=0$.",
        "Zero is a multiple of 11.",
      ],
      answer: "84,293 is divisible by 11.",
    },
    {
      kind: "factorPrimeExplorer",
      mode: "factors",
      heading: "Interactive factors and divisibility laboratory",
    },
    {
      kind: "theory",
      heading: "Common factors and common multiples",
      paragraphs: [
        "A common factor divides each number exactly. The common factors of 18 and 30 are 1, 2, 3 and 6.",
        "A common multiple appears in each multiple list. Common multiples of 4 and 6 include 12, 24, 36 and every later multiple of 12.",
      ],
    },
    {
      kind: "example",
      prompt: "Find the common factors of 24 and 40.",
      steps: [
        "Factors of 24: $1,2,3,4,6,8,12,24$.",
        "Factors of 40: $1,2,4,5,8,10,20,40$.",
        "Select the values that appear in both lists.",
      ],
      answer: "The common factors are 1, 2, 4 and 8.",
    },
    {
      kind: "example",
      prompt:
        "A teacher has 30 red counters and 42 blue counters. She wants identical groups with no counters left over. Which group counts are possible?",
      steps: [
        "The number of groups must divide both 30 and 42.",
        "Factors of 30: $1,2,3,5,6,10,15,30$.",
        "Factors of 42: $1,2,3,6,7,14,21,42$.",
        "The common factors are 1, 2, 3 and 6.",
      ],
      answer: "She can make 1, 2, 3 or 6 identical groups.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Packaging",
          text: "Factors identify equal row-and-column arrangements for boxes or products.",
        },
        {
          area: "Schedules",
          text: "Common multiples predict when repeating events occur together.",
        },
        { area: "Fractions", text: "Common factors help simplify a numerator and denominator." },
        {
          area: "Computer science",
          text: "Divisibility is used in hashing, cyclic processes and number algorithms.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Saying 24 is a factor of 6.",
          right: "6 is a factor of 24; 24 is a multiple of 6.",
        },
        {
          wrong: "Stopping a factor list before checking paired factors.",
          right: "Write factor pairs and include both numbers from each pair.",
        },
        {
          wrong: "Using only one part of a combined rule.",
          right: "For divisibility by 6, test both 2 and 3; for 12, test both 3 and 4.",
        },
        {
          wrong: "Assuming a large number has infinitely many factors.",
          right: "A positive whole number has finitely many factors but infinitely many multiples.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: factors, multiples and divisibility",
      stepKey: "factorsPractice",
      questions: [
        {
          prompt: "Which is a factor of 54?",
          options: ["7", "8", "9", "11"],
          answer: 2,
          explanation: "$54\\div9=6$, a whole number.",
        },
        {
          prompt: "Which is a multiple of 14?",
          options: ["42", "54", "62", "70"],
          answer: 3,
          explanation: "$14\\times5=70$.",
        },
        {
          prompt: "How many positive factors does 16 have?",
          options: ["4", "5", "6", "8"],
          answer: 1,
          explanation: "The factors are 1, 2, 4, 8 and 16.",
        },
        {
          prompt: "Which number is divisible by 3?",
          options: ["2,401", "2,403", "2,404", "2,405"],
          answer: 1,
          explanation: "The digit sum of 2,403 is $2+4+0+3=9$, a multiple of 3.",
        },
        {
          prompt: "Which number is divisible by 4?",
          options: ["3,414", "3,416", "3,418", "3,422"],
          answer: 1,
          explanation: "The last two digits, 16, are divisible by 4.",
        },
        {
          prompt: "Which number is divisible by 9?",
          options: ["4,563", "4,562", "4,561", "4,560"],
          answer: 0,
          explanation: "$4+5+6+3=18$, a multiple of 9.",
        },
        {
          prompt: "Which pair has 6 as a common factor?",
          options: ["18 and 25", "24 and 42", "20 and 32", "14 and 28"],
          answer: 1,
          explanation: "Both 24 and 42 divide exactly by 6.",
        },
        {
          prompt: "What is the seventh positive multiple of 8?",
          options: ["48", "54", "56", "64"],
          answer: 2,
          explanation: "$8\\times7=56$.",
        },
        {
          prompt: "Which number is divisible by 12?",
          options: ["234", "312", "426", "534"],
          answer: 1,
          explanation: "312 is divisible by 3 and its last two digits, 12, are divisible by 4.",
        },
        {
          prompt: "What are the common factors of 12 and 18?",
          options: ["1, 2, 3, 6", "1, 2, 6, 9", "2, 3, 4, 6", "1, 3, 6, 12"],
          answer: 0,
          explanation: "These and only these values divide both numbers.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A factor divides exactly; a multiple is produced by multiplication.",
        "Factor pairs provide a systematic way to list every factor.",
        "Divisibility rules test a number without performing long division.",
        "Combined tests are useful: 6 requires divisibility by 2 and 3, while 12 requires 3 and 4.",
        "Common factors divide all the chosen numbers, while common multiples belong to every chosen multiple list.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: factors and divisibility",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which list contains all positive factors of 20?",
          options: ["1, 2, 4, 5, 10, 20", "1, 2, 4, 5, 20", "2, 4, 5, 10", "1, 2, 5, 10, 20"],
          answer: 0,
          marks: 1,
          explanation: "The factor pairs are $1\\times20$, $2\\times10$ and $4\\times5$.",
        },
        {
          type: "tf",
          prompt: "Every positive multiple of 8 is even.",
          answer: true,
          marks: 1,
          explanation: "Every multiple of 8 contains a factor of 2.",
        },
        {
          type: "mc",
          prompt: "Which number is divisible by both 9 and 10?",
          options: ["360", "450", "540", "All three"],
          answer: 3,
          marks: 1,
          explanation: "Each ends in 0 and has a digit sum divisible by 9.",
        },
        {
          type: "multi",
          prompt: "Select all divisors of 2,376.",
          options: ["3", "4", "8", "9", "11"],
          answers: [0, 1, 2, 3, 4],
          marks: 2,
          explanation:
            "Digit sum 18 gives 3 and 9; 76 gives 4; 376 gives 8; the alternating sum is 0, giving 11.",
        },
        {
          type: "matching",
          prompt: "Match each divisor to its fastest test.",
          left: ["4", "5", "8", "9"],
          options: ["Digit sum", "Last digit 0 or 5", "Last two digits", "Last three digits"],
          answer: [2, 1, 3, 0],
          marks: 4,
          explanation: "Each standard test focuses on the indicated digits.",
        },
        {
          type: "mc",
          prompt: "A number is divisible by 6 exactly when it is divisible by...",
          options: ["2 and 3", "2 and 4", "3 and 6", "3 and 9"],
          answer: 0,
          marks: 1,
          explanation: "Because 2 and 3 are coprime and $6=2\\times3$.",
        },
        {
          type: "tf",
          prompt: "Zero is a multiple of every non-zero whole number.",
          answer: true,
          marks: 1,
          explanation: "$n\\times0=0$ for every non-zero whole number n.",
        },
        {
          type: "mc",
          prompt: "What is the smallest positive common multiple of 8 and 12?",
          options: ["16", "20", "24", "48"],
          answer: 2,
          marks: 1,
          explanation:
            "24 is in both multiple lists and no smaller positive common multiple exists.",
        },
        {
          type: "mc",
          prompt: "The digit □ makes 47□2 divisible by 9. What is it?",
          options: ["3", "5", "6", "8"],
          answer: 1,
          marks: 1,
          explanation: "$4+7+2=13$; adding 5 gives 18.",
        },
        {
          type: "multi",
          prompt: "Select all true statements.",
          options: [
            "Every number has factor 1.",
            "Every number has infinitely many positive factors.",
            "Every non-zero number has infinitely many positive multiples.",
            "A factor can be larger than the positive number it factors.",
          ],
          answers: [0, 2],
          marks: 2,
          explanation:
            "Positive factors are finite and cannot exceed the positive number; positive multiples continue indefinitely.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "factorPrimeExplorer", label: "Use the factors and divisibility laboratory" },
        { key: "factorsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
