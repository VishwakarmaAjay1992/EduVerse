import type { LessonContent } from "@/lib/lesson-content-types";

export const arithmeticSequencesAndSeries: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "sequences-and-series",
  lessonSlug: "arithmetic-sequences-and-series",
  title: "Arithmetic Sequences and Series",
  objectives: [
    "Identify an arithmetic sequence and its common difference.",
    "Find the nth term of an arithmetic sequence using a formula.",
    "Find the sum of the first n terms of an arithmetic series.",
    "Explain and apply Gauss's trick for summing an arithmetic series.",
    "Apply arithmetic sequences and series to real-world situations.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A sequence is simply an ordered list of numbers. An arithmetic sequence is the simplest and most common type: one where the same fixed amount is added to get from each term to the next. Once you know the first term and that fixed amount, you can find any term in the sequence — or the sum of any number of terms — without listing them all out.",
        "This lesson develops the nth-term formula and the sum formula for arithmetic sequences, including a famous shortcut discovered by a young Carl Friedrich Gauss that makes summing even enormous arithmetic series almost instant.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes comfort with substituting into formulas and solving simple linear equations.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Arithmetic sequence",
      body: "An arithmetic sequence is a list of numbers where each term after the first is found by adding a constant amount, called the common difference $d$, to the previous term. A sum of terms from a sequence is called a series.",
    },
    {
      kind: "theory",
      heading: "Finding the common difference",
      paragraphs: [
        "To find the common difference of an arithmetic sequence, subtract any term from the term that follows it — the result should be the same no matter which consecutive pair you choose.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Is $5, 9, 13, 17, 21, \\ldots$ an arithmetic sequence? If so, find the common difference.",
      steps: [
        "Check consecutive differences: $9-5=4$, $13-9=4$, $17-13=4$, $21-17=4$.",
        "Every difference is the same, 4.",
      ],
      answer: "Yes, this is arithmetic with common difference $d=4$.",
    },
    {
      kind: "theory",
      heading: "The nth term formula",
      paragraphs: [
        "To reach the nth term, you start at the first term and add the common difference $(n-1)$ times — one fewer time than the term number, since the first term needs zero additions.",
      ],
    },
    {
      kind: "formula",
      latex: "a_n = a_1 + (n-1)d",
      caption:
        "$a_1$ is the first term, $d$ is the common difference, $n$ is the term number you want.",
    },
    {
      kind: "arithmeticSequenceExplorer",
      heading: "Interactive: build an arithmetic sequence and its running sum",
    },
    {
      kind: "example",
      prompt: "Find the 12th term of the arithmetic sequence $7, 11, 15, 19, \\ldots$.",
      steps: [
        "Identify $a_1=7$ and $d=4$ (each term increases by 4).",
        "Substitute into the formula: $a_{12} = 7 + (12-1)(4)$.",
        "Simplify: $a_{12} = 7 + 44 = 51$.",
      ],
      answer: "$a_{12} = 51$.",
    },
    {
      kind: "example",
      prompt: "An arithmetic sequence has $a_1=10$ and $a_8=45$. Find the common difference.",
      steps: [
        "Substitute into the nth-term formula: $45 = 10 + (8-1)d$.",
        "Simplify: $45 = 10 + 7d$.",
        "Solve: $35 = 7d \\Rightarrow d = 5$.",
      ],
      answer: "$d = 5$.",
    },
    {
      kind: "theory",
      heading: "Gauss's trick and the sum formula",
      paragraphs: [
        "As a young student, Carl Friedrich Gauss was asked to add the numbers 1 to 100. Instead of adding them one at a time, he paired the first and last (1+100=101), the second and second-last (2+99=101), and so on — every pair summed to the same value, 101, and there were 50 such pairs, giving $50 \\times 101 = 5050$ instantly.",
        "This trick generalises to any arithmetic series: pairing the first and last term (and every symmetric pair in between) always gives the same sum, $a_1 + a_n$, and there are $n/2$ such pairs.",
      ],
    },
    {
      kind: "formula",
      latex: "S_n = \\dfrac{n}{2}(a_1 + a_n) = \\dfrac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)",
      caption:
        "Two equivalent forms: the first uses the last term directly; the second substitutes the nth-term formula in.",
    },
    {
      kind: "example",
      prompt: "Use Gauss's trick to find $1 + 2 + 3 + \\cdots + 100$.",
      steps: [
        "Identify $a_1=1$, $a_{100}=100$, $n=100$.",
        "Apply the sum formula: $S_{100} = \\dfrac{100}{2}(1+100)$.",
        "Simplify: $S_{100} = 50 \\times 101 = 5050$.",
      ],
      answer: "$S_{100} = 5050$.",
    },
    {
      kind: "example",
      prompt:
        "Find the sum of the first 20 terms of the arithmetic sequence $3, 8, 13, 18, \\ldots$.",
      steps: [
        "Identify $a_1=3$, $d=5$, $n=20$.",
        "Use the second sum formula: $S_{20} = \\dfrac{20}{2}\\bigl(2(3)+(20-1)(5)\\bigr)$.",
        "Simplify inside the brackets: $2(3)+19(5) = 6+95=101$.",
        "Multiply: $S_{20} = 10 \\times 101 = 1010$.",
      ],
      answer: "$S_{20} = 1010$.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Choosing which sum formula to use",
      body: "If you already know the last term $a_n$, use $S_n=\\dfrac{n}{2}(a_1+a_n)$ directly. If you only know $d$, use $S_n=\\dfrac{n}{2}(2a_1+(n-1)d)$, which finds the last term for you as part of the calculation.",
    },
    {
      kind: "theory",
      heading: "Applications",
      paragraphs: [
        "Arithmetic sequences model any situation with steady, constant-amount change: a savings plan with fixed regular deposits, seating arranged in rows that each gain the same number of extra seats, or a stack of objects that increases by the same count each layer.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A theatre's rows of seats increase by 3 seats per row: row 1 has 20 seats, row 2 has 23, and so on, for 15 rows. Find the total number of seats.",
      steps: [
        "Identify $a_1=20$, $d=3$, $n=15$.",
        "Use the sum formula: $S_{15} = \\dfrac{15}{2}\\bigl(2(20)+(15-1)(3)\\bigr)$.",
        "Simplify inside: $40+42=82$.",
        "Multiply: $S_{15} = 7.5 \\times 82 = 615$.",
      ],
      answer: "The theatre has 615 seats in total.",
    },
    {
      kind: "realWorld",
      heading: "Where arithmetic sequences appear",
      items: [
        { area: "Finance", text: "Fixed regular savings deposits or loan repayments." },
        {
          area: "Construction",
          text: "Stacking pipes or seating in rows that increase by a constant amount.",
        },
        { area: "Scheduling", text: "Evenly spaced appointment times or delivery intervals." },
        {
          area: "Sports",
          text: "Tournament brackets with a steady increase in matches per round.",
        },
        {
          area: "Manufacturing",
          text: "Production targets that increase by a fixed amount each period.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What defines an arithmetic sequence?",
          back: "A constant amount (common difference d) is added between consecutive terms.",
        },
        { front: "nth term formula?", back: "$a_n = a_1 + (n-1)d$." },
        { front: "Sum formula using the last term?", back: "$S_n = \\dfrac{n}{2}(a_1+a_n)$." },
        { front: "Sum formula using d?", back: "$S_n = \\dfrac{n}{2}(2a_1+(n-1)d)$." },
        {
          front: "What is Gauss's trick?",
          back: "Pairing first-and-last, second-and-second-last, etc., since every pair sums to the same value.",
        },
        {
          front: "How do you find d from two known terms?",
          back: "Substitute into the nth-term formula and solve for d.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: arithmetic sequences and series",
      stepKey: "arithmeticSequencesPractice",
      questions: [
        {
          prompt: "Find the common difference of $4, 10, 16, 22, \\ldots$.",
          options: ["6", "4", "5", "8"],
          answer: 0,
          explanation: "$10-4=6$.",
        },
        {
          prompt: "Find the 10th term of the sequence $2, 5, 8, 11, \\ldots$.",
          options: ["29", "26", "32", "23"],
          answer: 0,
          explanation: "$a_{10}=2+(9)(3)=29$.",
        },
        {
          prompt: "An arithmetic sequence has $a_1=6$ and $d=4$. Find $a_{15}$.",
          options: ["62", "58", "66", "54"],
          answer: 0,
          explanation: "$a_{15}=6+(14)(4)=62$.",
        },
        {
          prompt: "An arithmetic sequence has $a_1=3$ and $a_6=23$. Find $d$.",
          options: ["4", "5", "3", "6"],
          answer: 0,
          explanation: "$23=3+5d \\Rightarrow 20=5d \\Rightarrow d=4$.",
        },
        {
          prompt: "Find the sum of $1+2+3+\\cdots+50$.",
          options: ["1275", "1250", "2550", "1225"],
          answer: 0,
          explanation: "$S_{50}=\\dfrac{50}{2}(1+50)=25\\times51=1275$.",
        },
        {
          prompt: "Find the sum of the first 10 terms of $5, 9, 13, 17, \\ldots$.",
          options: ["230", "220", "225", "240"],
          answer: 0,
          explanation: "$S_{10}=\\dfrac{10}{2}(2(5)+9(4))=5\\times46=230$.",
        },
        {
          prompt:
            "A stack of logs has 25 logs on the bottom row, decreasing by 2 per row, for 8 rows. Find the total.",
          options: ["144", "152", "136", "160"],
          answer: 0,
          explanation: "$a_1=25,d=-2,n=8$: $S_8=\\dfrac{8}{2}(2(25)+7(-2))=4\\times36=144$.",
        },
        {
          prompt:
            "An arithmetic sequence has $a_1=8$ and $a_{10}=53$. Find the sum of the first 10 terms.",
          options: ["305", "300", "310", "295"],
          answer: 0,
          explanation: "$S_{10}=\\dfrac{10}{2}(8+53)=5\\times61=305$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Using $n$ instead of $(n-1)$ in the nth-term formula, e.g. computing $a_{12}=7+12(4)$.",
          right:
            "The formula uses $(n-1)$ additions, since the first term needs zero: $a_{12}=7+(12-1)(4)$.",
        },
        {
          wrong: "Forgetting the $n/2$ factor in the sum formula and just adding $a_1+a_n$.",
          right: "The sum needs the number of pairs too: $S_n = \\dfrac{n}{2}(a_1+a_n)$.",
        },
        {
          wrong:
            "Assuming every sequence is arithmetic without checking that the difference is constant.",
          right:
            "Verify the difference is the same between every consecutive pair before applying arithmetic formulas.",
        },
        {
          wrong: "Mixing up which term is $a_1$ and which is $a_n$ when a sequence is decreasing.",
          right:
            "$a_1$ is always the first term listed, even if $d$ is negative — the formulas work the same way.",
        },
        {
          wrong: "Using the sum formula for a general (non-arithmetic) sequence.",
          right:
            "These formulas apply ONLY to arithmetic sequences, where the difference between consecutive terms is constant.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "An arithmetic sequence adds a constant common difference $d$ between terms.",
        "nth term: $a_n = a_1+(n-1)d$.",
        "Sum of n terms: $S_n=\\dfrac{n}{2}(a_1+a_n) = \\dfrac{n}{2}(2a_1+(n-1)d)$.",
        "Gauss's trick: pairing terms from opposite ends of the series always gives equal pair sums.",
        "Arithmetic sequences model steady, constant-amount change in savings, seating, stacking and scheduling.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: arithmetic sequences and series",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Find the common difference of $9, 15, 21, 27, \\ldots$.",
          options: ["6", "5", "9", "3"],
          answer: 0,
          marks: 1,
          explanation: "$15-9=6$.",
        },
        {
          type: "mc",
          prompt: "Find the 8th term of $3, 7, 11, 15, \\ldots$.",
          options: ["31", "28", "34", "27"],
          answer: 0,
          marks: 1,
          explanation: "$a_8=3+(7)(4)=31$.",
        },
        {
          type: "tf",
          prompt: "The nth term formula for an arithmetic sequence is $a_n = a_1 + nd$.",
          answer: false,
          marks: 1,
          explanation: "The correct formula uses $(n-1)$, not $n$: $a_n=a_1+(n-1)d$.",
        },
        {
          type: "mc",
          prompt: "An arithmetic sequence has $a_1=5$ and $a_9=45$. Find $d$.",
          options: ["5", "4", "6", "10"],
          answer: 0,
          marks: 2,
          explanation: "$45=5+8d \\Rightarrow 40=8d \\Rightarrow d=5$.",
        },
        {
          type: "mc",
          prompt: "Find the sum $1+2+3+\\cdots+60$.",
          options: ["1830", "1800", "3660", "1770"],
          answer: 0,
          marks: 2,
          explanation: "$S_{60}=\\dfrac{60}{2}(1+60)=30\\times61=1830$.",
        },
        {
          type: "matching",
          prompt: "Match each formula to its use.",
          left: [
            "$a_n=a_1+(n-1)d$",
            "$S_n=\\dfrac{n}{2}(a_1+a_n)$",
            "$d = a_2-a_1$",
            "$S_n=\\dfrac{n}{2}(2a_1+(n-1)d)$",
          ],
          options: [
            "Sum using first and last term",
            "Finding the common difference",
            "Finding a specific term",
            "Sum using d instead of the last term",
          ],
          answer: [2, 0, 1, 3],
          marks: 4,
          explanation:
            "Each formula serves a distinct purpose in working with arithmetic sequences.",
        },
        {
          type: "mc",
          prompt: "Find the sum of the first 12 terms of $4, 9, 14, 19, \\ldots$.",
          options: ["378", "360", "384", "372"],
          answer: 0,
          marks: 2,
          explanation: "$S_{12}=\\dfrac{12}{2}(2(4)+11(5))=6\\times63=378$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement about arithmetic sequences.",
          options: [
            "The common difference can be negative.",
            "Every sequence is arithmetic.",
            "Gauss's trick pairs terms with equal sums.",
            "$S_n = \\dfrac{n}{2}(a_1+a_n)$ requires knowing the last term.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "Not every sequence is arithmetic — only those with a constant difference between terms.",
        },
        {
          type: "mc",
          prompt:
            "A concert hall has 18 seats in row 1, increasing by 4 per row, for 20 rows. Find the total number of seats.",
          options: ["1120", "1100", "1080", "1140"],
          answer: 0,
          marks: 2,
          explanation: "$S_{20}=\\dfrac{20}{2}(2(18)+19(4))=10\\times112=1120$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "arithmeticSequenceExplorer", label: "Use the arithmetic sequence laboratory" },
        { key: "arithmeticSequencesPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
