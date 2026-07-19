import type { LessonContent } from "@/lib/lesson-content-types";

export const wordProblemsWithLinearEquations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "linear-equations-and-inequalities",
  lessonSlug: "word-problems-with-linear-equations",
  title: "Word Problems with Linear Equations",
  objectives: [
    "Convert everyday phrases into algebraic expressions.",
    "Identify the unknown quantity in a word problem and represent it with a variable.",
    "Translate common phrases such as 'increased by', 'twice', 'three more than' and 'the difference between' into algebra.",
    "Build a complete equation from a described real-world situation.",
    "Solve the resulting equation and interpret the answer in context.",
    "Check whether a solution makes sense against the original wording, not just the equation.",
    "Solve word problems involving money, ages, lengths, perimeter, transport and work.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Algebra becomes genuinely useful once you can turn a sentence into an equation. This lesson focuses entirely on that translation skill: reading a real situation, naming the unknown, converting key phrases into algebraic pieces, assembling a full equation, and finally solving and interpreting the result.",
        "The mechanical solving — the steps you apply once the equation exists — was covered in the previous lesson. Here, the challenge is different: understanding what the words are actually describing mathematically.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson builds directly on Solving Linear Equations. You should already be confident solving one-step, two-step, bracket and both-sides equations, since every word problem here ends with exactly that kind of solving.",
      ],
    },
    {
      kind: "theory",
      heading: "Identifying the unknown",
      paragraphs: [
        "Every word problem has one or more quantities you don't yet know. The first step is always to decide what to call $x$ (or another letter), and to state clearly what it represents — for example, 'let $x$ be the number of tickets bought', not just 'let $x$ be the answer'.",
        "A precise definition of $x$ prevents confusion later: if the problem asks for a width but you accidentally solved for a length, a vague variable definition is usually to blame.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Define your variable in words first",
      body: "Before writing any algebra, write a short sentence: 'Let $x$ represent ___.' This single habit prevents the most common word-problem mistake — solving for the wrong quantity.",
    },
    {
      kind: "theory",
      heading: "Translating common phrases",
      paragraphs: [
        "Certain English phrases appear again and again in word problems, and each has a consistent algebraic translation. Learning these translations turns unfamiliar sentences into familiar algebra.",
      ],
    },
    {
      kind: "table",
      heading: "Phrase-to-algebra dictionary",
      headers: ["Phrase", "Meaning", "Algebra (with unknown $x$)"],
      rows: [
        ["increased by 5", "add 5", "$x + 5$"],
        ["decreased by 5", "subtract 5", "$x - 5$"],
        ["twice a number", "multiply by 2", "$2x$"],
        ["three more than a number", "add 3", "$x + 3$"],
        ["five less than a number", "subtract 5 (from the number)", "$x - 5$"],
        ["the difference between $x$ and 4", "subtract in the stated order", "$x - 4$"],
        ["the total of $x$ and $y$", "add them", "$x + y$"],
        ["per (rate)", "multiply by the rate", "e.g. $3x$ for ₹3 per item"],
      ],
      note: "'Five less than a number' reverses the order you might expect: it's $x - 5$, not $5 - x$, because the number comes first and 5 is taken away from it.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Order matters for subtraction",
      body: "'The difference between $x$ and 4' means $x - 4$. 'Four less than $x$' also means $x - 4$. But 'four less $x$' or 'subtract $x$ from 4' means $4 - x$ — read subtraction phrases carefully to get the order right.",
    },
    {
      kind: "wordProblemTranslatorExplorer",
      heading: "Interactive: translate a word problem into algebra",
    },
    {
      kind: "theory",
      heading: "From situation to equation",
      paragraphs: [
        "Once you can translate individual phrases, building a full equation is a matter of joining the pieces together the same way the sentence joins its ideas — usually with an equals sign wherever the sentence says a total, a result, or 'is equal to'.",
        "A reliable process: (1) define the unknown in words, (2) translate each phrase into an algebraic piece, (3) combine the pieces using the relationship the sentence describes, (4) solve, (5) check the answer against the original sentence, not just the equation.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A book costs ₹8 more than a magazine. Together they cost ₹26. Find the price of the magazine.",
      steps: [
        "Let $x$ = the price of the magazine, in rupees.",
        "The book costs 8 more, so the book's price is $x + 8$.",
        "Together they cost 26: $x + (x + 8) = 26$.",
        "Combine like terms: $2x + 8 = 26$.",
        "Subtract 8 from both sides: $2x = 18$.",
        "Divide both sides by 2: $x = 9$.",
      ],
      answer:
        "The magazine costs ₹9 (and the book costs ₹17). Check: $9 + 17 = 26$ ✓, and $17$ is indeed $8$ more than $9$ ✓",
    },
    {
      kind: "example",
      prompt:
        "Ahmed is 5 years older than his sister. In 3 years, the sum of their ages will be 31. Find their current ages.",
      steps: [
        "Let $x$ = the sister's current age.",
        "Ahmed's current age is $x + 5$.",
        "In 3 years, their ages will be $x + 3$ and $(x + 5) + 3 = x + 8$.",
        "Their future ages sum to 31: $(x + 3) + (x + 8) = 31$.",
        "Combine like terms: $2x + 11 = 31$.",
        "Subtract 11 from both sides: $2x = 20$.",
        "Divide both sides by 2: $x = 10$.",
      ],
      answer:
        "The sister is 10 and Ahmed is 15. Check: in 3 years they are 13 and 18, and $13 + 18 = 31$ ✓",
    },
    {
      kind: "example",
      prompt:
        "A rectangular field is twice as long as it is wide. Its perimeter is 90 m. Find its width and length.",
      steps: [
        "Let $x$ = the width, in metres. The length is $2x$.",
        "Perimeter formula: $2(\\text{length} + \\text{width}) = 90$.",
        "Substitute: $2(2x + x) = 90$.",
        "Simplify inside the bracket: $2(3x) = 90$, so $6x = 90$.",
        "Divide both sides by 6: $x = 15$.",
      ],
      answer:
        "The width is 15 m and the length is 30 m. Check: perimeter $= 2(30 + 15) = 2(45) = 90$ ✓",
    },
    {
      kind: "example",
      prompt:
        "A train ticket costs a fixed ₹3 booking fee plus ₹0.50 per kilometre travelled. A ticket cost ₹18. How far did the passenger travel?",
      steps: [
        "Let $x$ = the distance travelled, in kilometres.",
        "Total cost: $0.5x + 3 = 18$.",
        "Subtract 3 from both sides: $0.5x = 15$.",
        "Divide both sides by 0.5: $x = 30$.",
      ],
      answer: "The passenger travelled 30 km. Check: $0.5(30) + 3 = 15 + 3 = 18$ ✓",
    },
    {
      kind: "example",
      prompt:
        "A plumber charges a ₹25 call-out fee plus ₹30 per hour worked. A repair cost ₹145. How many hours did the job take?",
      steps: [
        "Let $x$ = the number of hours worked.",
        "Total cost: $30x + 25 = 145$.",
        "Subtract 25 from both sides: $30x = 120$.",
        "Divide both sides by 30: $x = 4$.",
      ],
      answer: "The job took 4 hours. Check: $30(4) + 25 = 120 + 25 = 145$ ✓",
    },
    {
      kind: "example",
      prompt: "The sum of three consecutive even numbers is 96. Find the numbers.",
      steps: [
        "Let $x$ = the smallest even number. The next two are $x + 2$ and $x + 4$.",
        "Their sum is 96: $x + (x + 2) + (x + 4) = 96$.",
        "Combine like terms: $3x + 6 = 96$.",
        "Subtract 6 from both sides: $3x = 90$.",
        "Divide both sides by 3: $x = 30$.",
      ],
      answer: "The numbers are 30, 32 and 34. Check: $30 + 32 + 34 = 96$ ✓",
    },
    {
      kind: "theory",
      heading: "Checking whether the answer makes sense",
      paragraphs: [
        "Algebra can return a technically correct solution to the equation that still doesn't make sense in context — a negative number of people, a fractional number of tickets, or an age greater than the total lifespan implied by the problem. Always ask whether the number you found is realistic for the situation described.",
        "Two checks are worth doing every time: substitute the answer back into the equation (confirms the algebra), and substitute it back into the original sentences (confirms the translation was correct).",
      ],
    },
    {
      kind: "realWorld",
      heading: "Where these problems appear",
      items: [
        {
          area: "Money",
          text: "Splitting a bill, calculating change, or comparing prices with a fixed difference.",
        },
        {
          area: "Ages",
          text: "Family age puzzles relating a person's age now to their age in the future or past.",
        },
        {
          area: "Lengths and perimeter",
          text: "Finding missing dimensions of a room, garden or frame from a total measurement.",
        },
        {
          area: "Transport",
          text: "Working out distance or time from a fare structure with a fixed fee and a rate.",
        },
        {
          area: "Work",
          text: "Finding hours worked or tasks completed from a pay structure with a base amount and a rate.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "How do you translate 'increased by 5'?", back: "Add 5: $x + 5$." },
        { front: "How do you translate 'twice a number'?", back: "Multiply by 2: $2x$." },
        {
          front: "How do you translate 'five less than a number'?",
          back: "Subtract 5 from the number: $x - 5$.",
        },
        {
          front: "What's the first step in solving any word problem?",
          back: "Define the unknown clearly: 'Let $x$ represent ___.'",
        },
        {
          front: "What two checks confirm a word-problem answer?",
          back: "Substitute into the equation, and re-check against the original sentence.",
        },
        {
          front: "Perimeter of a rectangle in terms of length $l$ and width $w$?",
          back: "$P = 2(l + w)$.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: word problems with linear equations",
      stepKey: "wordProblemsPractice",
      questions: [
        {
          prompt: "A number increased by 9 equals 24. Find the number.",
          options: ["15", "33", "13", "24"],
          answer: 0,
          explanation: "$x + 9 = 24 \\Rightarrow x = 15$.",
        },
        {
          prompt: "Twice a number, decreased by 7, equals 15. Find the number.",
          options: ["4", "8", "11", "22"],
          answer: 2,
          explanation: "$2x - 7 = 15 \\Rightarrow 2x = 22 \\Rightarrow x = 11$.",
        },
        {
          prompt:
            "A pen costs ₹3 less than a notebook. Together they cost ₹17. Find the price of the notebook.",
          options: ["7", "10", "14", "20"],
          answer: 1,
          explanation:
            "Let $x$ = notebook price. Pen $= x - 3$. Then $x + (x-3) = 17 \\Rightarrow 2x = 20 \\Rightarrow x = 10$.",
        },
        {
          prompt:
            "Maria is 4 years older than her cousin. In 6 years, the sum of their ages will be 40. Find the cousin's current age.",
          options: ["10", "12", "14", "16"],
          answer: 1,
          explanation:
            "Let $x$ = cousin's age. $(x+6)+(x+4+6)=40 \\Rightarrow 2x+16=40 \\Rightarrow 2x=24 \\Rightarrow x=12$.",
        },
        {
          prompt:
            "A rectangular garden is 4 m longer than it is wide, with perimeter 36 m. Find the width.",
          options: ["4", "7", "9", "14"],
          answer: 1,
          explanation:
            "$2((x+4)+x)=36 \\Rightarrow 2(2x+4)=36 \\Rightarrow 4x+8=36 \\Rightarrow 4x=28 \\Rightarrow x=7$.",
        },
        {
          prompt:
            "A taxi charges a fixed ₹5 fee plus ₹2.5 per kilometre. A ride cost ₹27.5. Find the distance travelled.",
          options: ["8 km", "9 km", "10 km", "11 km"],
          answer: 1,
          explanation: "$2.5x + 5 = 27.5 \\Rightarrow 2.5x = 22.5 \\Rightarrow x = 9$.",
        },
        {
          prompt: "The sum of two consecutive whole numbers is 45. Find the smaller number.",
          options: ["21", "22", "23", "24"],
          answer: 1,
          explanation:
            "$x + (x+1) = 45 \\Rightarrow 2x+1=45 \\Rightarrow 2x=44 \\Rightarrow x=22$.",
        },
        {
          prompt:
            "A worker earns a fixed ₹40 plus ₹15 per item assembled. She earned ₹205. How many items did she assemble?",
          options: ["9", "10", "11", "12"],
          answer: 2,
          explanation: "$15x + 40 = 205 \\Rightarrow 15x = 165 \\Rightarrow x = 11$.",
        },
        {
          prompt:
            "Three times a number, increased by 8, equals the number increased by 24. Find the number.",
          options: ["6", "8", "10", "16"],
          answer: 1,
          explanation:
            "$3x + 8 = x + 24 \\Rightarrow 2x + 8 = 24 \\Rightarrow 2x = 16 \\Rightarrow x = 8$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Translating 'five less than a number' as $5 - x$.",
          right: "The number comes first: 'five less than a number' means $x - 5$.",
        },
        {
          wrong:
            "Solving for the wrong quantity, e.g. finding the book's price when the question asked for the magazine's price.",
          right:
            "Write 'let $x$ represent ___' clearly before starting, and check the question's exact wording before giving the final answer.",
        },
        {
          wrong:
            "Forgetting to add the fixed fee separately from the per-unit rate, e.g. writing $2.5x = 27.5$ for a taxi with both a fee and a rate.",
          right:
            "A fixed fee is added once; a rate is multiplied by the varying quantity: $2.5x + 5 = 27.5$.",
        },
        {
          wrong:
            "Reporting the value of $x$ as the final answer without checking what $x$ actually represents.",
          right:
            "If $x$ was defined as one quantity but the question asks for another (like the book's price when $x$ is the magazine's price), calculate that second quantity too.",
        },
        {
          wrong:
            "Accepting a negative or fractional answer for a quantity that must be a positive whole number, like a number of people.",
          right:
            "If the algebra gives an unrealistic answer, re-check the translation of the original sentence for an error.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Always begin by defining the unknown clearly in words: 'Let $x$ represent ___.'",
        "Learn the standard phrase translations: 'increased by' means $+$, 'twice' means $\\times 2$, 'less than' reverses the usual order.",
        "Build the equation by joining translated phrases the way the sentence joins its ideas.",
        "Solve using the same techniques from Solving Linear Equations.",
        "Check the answer both by substitution into the equation and by re-reading the original sentence.",
        "If $x$ represents one quantity but the question asks for a different one, calculate that quantity too before giving a final answer.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: word problems with linear equations",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Translate: 'seven more than a number'.",
          options: ["$7 - x$", "$x - 7$", "$x + 7$", "$7x$"],
          answer: 2,
          marks: 1,
          explanation: "'More than' means addition, and the number comes first: $x + 7$.",
        },
        {
          type: "mc",
          prompt: "A number decreased by 6 equals 19. Find the number.",
          options: ["13", "25", "114", "19"],
          answer: 1,
          marks: 1,
          explanation: "$x - 6 = 19 \\Rightarrow x = 25$.",
        },
        {
          type: "tf",
          prompt: "'The difference between 4 and a number' translates to $x - 4$.",
          answer: false,
          marks: 1,
          explanation:
            "The stated order matters: '4 and a number' puts 4 first, so it translates to $4 - x$.",
        },
        {
          type: "mc",
          prompt:
            "A shirt costs ₹12 less than a jacket. Together they cost ₹68. Find the jacket's price.",
          options: ["28", "34", "40", "56"],
          answer: 2,
          marks: 2,
          explanation:
            "Let $x$ = jacket price. $x + (x - 12) = 68 \\Rightarrow 2x - 12 = 68 \\Rightarrow 2x = 80 \\Rightarrow x = 40$.",
        },
        {
          type: "mc",
          prompt:
            "A rectangle is 3 times as long as it is wide, with perimeter 56 cm. Find the width.",
          options: ["6", "7", "8", "14"],
          answer: 1,
          marks: 2,
          explanation: "$2(3x + x) = 56 \\Rightarrow 8x = 56 \\Rightarrow x = 7$.",
        },
        {
          type: "matching",
          prompt: "Match each phrase to its correct algebraic translation.",
          left: [
            "increased by 4",
            "twice a number",
            "six less than a number",
            "the total of x and 5",
          ],
          options: ["$x + 5$", "$x + 4$", "$2x$", "$x - 6$"],
          answer: [1, 2, 3, 0],
          marks: 4,
          explanation:
            "Each phrase maps directly onto its listed translation using the standard phrase dictionary.",
        },
        {
          type: "mc",
          prompt:
            "A delivery service charges a fixed ₹8 fee plus ₹1.5 per kilometre. A delivery cost ₹26. Find the distance.",
          options: ["10 km", "12 km", "14 km", "18 km"],
          answer: 1,
          marks: 2,
          explanation: "$1.5x + 8 = 26 \\Rightarrow 1.5x = 18 \\Rightarrow x = 12$.",
        },
        {
          type: "multi",
          prompt: "Select every correct translation.",
          options: [
            "'three more than x' → $x + 3$",
            "'x decreased by 3' → $x - 3$",
            "'twice x, increased by 1' → $2(x + 1)$",
            "'the total of x and y' → $x + y$",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "'Twice x, increased by 1' means double x first, then add 1: $2x + 1$, not $2(x+1)$.",
        },
        {
          type: "mc",
          prompt:
            "A repair technician charges ₹20 plus ₹15 per hour. The bill was ₹95. How many hours did the repair take?",
          options: ["4", "5", "6", "7"],
          answer: 1,
          marks: 2,
          explanation: "$15x + 20 = 95 \\Rightarrow 15x = 75 \\Rightarrow x = 5$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "wordProblemTranslatorExplorer", label: "Use the word-problem translator" },
        { key: "wordProblemsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
