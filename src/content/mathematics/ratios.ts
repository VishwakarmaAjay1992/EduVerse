import type { LessonContent } from "@/lib/lesson-content-types";

export const ratios: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "percentages-ratio-and-proportion",
  lessonSlug: "ratios",
  title: "Ratios",
  objectives: [
    "State the meaning of a ratio and use both colon and fraction notation.",
    "Simplify a ratio to its lowest terms.",
    "Generate equivalent ratios and detect when two ratios are equal.",
    "Share a quantity in a given ratio.",
    "Convert ratios that mix different units into a comparable form.",
    "Apply ratios to recipes, maps, mixtures and other real-life situations.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A ratio compares two or more quantities of the same type. It tells you how one amount relates to another, without necessarily saying how big either one is.",
        "For example, if a fruit basket has apples and oranges in the ratio $2 : 3$, then for every 2 apples there are 3 oranges. The ratio does not say whether there are 5 pieces of fruit or 500 — only that the proportion is always the same.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Ratio",
      body: "A ratio compares two quantities of the same kind by division. The ratio of $a$ to $b$ is written $a : b$ and can also be interpreted as the fraction $\\dfrac{a}{b}$ when $b \\neq 0$.",
    },
    {
      kind: "theory",
      heading: "Reading and writing ratios",
      paragraphs: [
        "The most common notation is the colon: $3 : 4$ is read 'three to four'. It compares the first quantity to the second in the same units.",
        "Ratios can also be written as fractions. $3 : 4$ is the same relationship as $\\dfrac{3}{4}$, provided we remember that $3 : 4$ compares two parts of a whole while $\\dfrac{3}{4}$ can also be read as three parts out of four.",
        "The order matters: $3 : 4$ is not the same as $4 : 3$. Always read the ratio in the order that matches the words.",
      ],
    },
    {
      kind: "cards",
      heading: "Three ways to record the same ratio",
      columns: 3,
      items: [
        { title: "Colon", value: "3 : 4", text: "The most common form." },
        { title: "Words", value: "3 to 4", text: "Read aloud from the colon form." },
        { title: "Fraction", value: "$\\tfrac{3}{4}$", text: "Useful for algebraic work." },
      ],
    },
    {
      kind: "theory",
      heading: "Simplifying ratios",
      paragraphs: [
        "A ratio is in its lowest terms when the numbers share no common factor other than 1. To simplify, divide every part by the highest common factor.",
        "This is very similar to simplifying a fraction. The ratio $12 : 18$ becomes $2 : 3$ once both numbers are divided by 6.",
      ],
      list: [
        "Divide every quantity in the ratio by the same non-zero number.",
        "Keep dividing until no further common factor exists.",
        "A ratio with a common factor is still correct, but it is untidy.",
      ],
    },
    {
      kind: "example",
      prompt: "Simplify the ratio $24 : 36$.",
      steps: [
        "Find the highest common factor of 24 and 36. Both are divisible by 12.",
        "Divide each part by 12: $24 \\div 12 = 2$ and $36 \\div 12 = 3$.",
      ],
      answer: "$24 : 36 = 2 : 3$.",
    },
    {
      kind: "example",
      prompt: "Simplify the ratio $0.6 : 0.8$.",
      steps: [
        "Multiply both parts by 10 to clear the decimals: $6 : 8$.",
        "Divide by their highest common factor, 2: $3 : 4$.",
      ],
      answer: "$0.6 : 0.8 = 3 : 4$.",
    },
    {
      kind: "example",
      prompt: "Simplify the ratio $\\tfrac{1}{2} : \\tfrac{1}{3}$.",
      steps: [
        "Multiply both parts by 6 (the lowest common multiple of 2 and 3) to clear the fractions: $3 : 2$.",
        "There is no common factor greater than 1.",
      ],
      answer: "$\\tfrac{1}{2} : \\tfrac{1}{3} = 3 : 2$.",
    },
    {
      kind: "theory",
      heading: "Equivalent ratios",
      paragraphs: [
        "Two ratios are equivalent if you can obtain one from the other by multiplying or dividing every part by the same non-zero number.",
        "So $2 : 3$, $4 : 6$, $6 : 9$ and $20 : 30$ are all equivalent — they describe the same underlying relationship. In fractional form they all equal $\\tfrac{2}{3}$.",
        "A quick way to test whether $a : b$ and $c : d$ are equivalent is to cross-multiply: they are equivalent exactly when $a \\times d = b \\times c$.",
      ],
    },
    {
      kind: "example",
      prompt: "Are the ratios $8 : 12$ and $10 : 15$ equivalent?",
      steps: [
        "Cross-multiply: $8 \\times 15 = 120$ and $12 \\times 10 = 120$.",
        "The products are equal, so the ratios are equivalent.",
        "You could also simplify each: both simplify to $2 : 3$.",
      ],
      answer: "Yes, they are equivalent.",
    },
    {
      kind: "theory",
      heading: "Sharing an amount in a given ratio",
      paragraphs: [
        "Sharing a quantity in a ratio means splitting it into parts of the correct sizes. The trick is to think of the total in terms of 'parts'.",
        "For a ratio such as $2 : 3$, the whole is split into $2 + 3 = 5$ equal parts. Divide the total amount by 5 to find the value of one part, then multiply by 2 and 3 to find how much each person gets.",
      ],
    },
    {
      kind: "example",
      prompt: "Share 40 sweets between Ali and Bilal in the ratio $3 : 5$.",
      steps: [
        "Add the parts: $3 + 5 = 8$ equal parts in total.",
        "Divide the amount by the number of parts: $40 \\div 8 = 5$ sweets per part.",
        "Ali gets $3 \\times 5 = 15$ sweets; Bilal gets $5 \\times 5 = 25$ sweets.",
        "Check: $15 + 25 = 40$.",
      ],
      answer: "Ali gets 15 sweets and Bilal gets 25 sweets.",
    },
    {
      kind: "example",
      prompt:
        "A metal alloy is made from copper, tin and zinc in the ratio $4 : 3 : 1$. How much of each metal is in a 640-gram bar?",
      steps: [
        "Total parts: $4 + 3 + 1 = 8$.",
        "One part is $640 \\div 8 = 80$ grams.",
        "Copper: $4 \\times 80 = 320$ g. Tin: $3 \\times 80 = 240$ g. Zinc: $1 \\times 80 = 80$ g.",
        "Check: $320 + 240 + 80 = 640$ g.",
      ],
      answer: "320 g copper, 240 g tin and 80 g zinc.",
    },
    {
      kind: "theory",
      heading: "Ratios involving units",
      paragraphs: [
        "Sometimes a ratio compares quantities measured in different units. Before you can simplify, both quantities must be expressed in the same unit.",
        "For example, the ratio '30 minutes to 2 hours' is not really $30 : 2$. Convert the hours into minutes first: 2 hours is 120 minutes, so the ratio is $30 : 120 = 1 : 4$.",
      ],
    },
    {
      kind: "example",
      prompt: "Write the ratio '75 cm to 2 m' in its simplest form.",
      steps: [
        "Change both quantities into the same unit. 2 m equals 200 cm.",
        "The ratio in centimetres is $75 : 200$.",
        "Divide both parts by the highest common factor, 25.",
      ],
      answer: "$75 : 200 = 3 : 8$.",
    },
    {
      kind: "example",
      prompt:
        "A map has a scale of $1 : 50{,}000$. Two towns are 4 cm apart on the map. What is the true distance between them, in kilometres?",
      steps: [
        "$1$ cm on the map represents $50{,}000$ cm in real life.",
        "So $4$ cm represents $4 \\times 50{,}000 = 200{,}000$ cm.",
        "Convert to metres: $200{,}000 \\div 100 = 2{,}000$ m.",
        "Convert to kilometres: $2{,}000 \\div 1{,}000 = 2$ km.",
      ],
      answer: "The towns are 2 km apart.",
    },
    {
      kind: "table",
      heading: "Common ratio situations",
      headers: ["Situation", "Ratio idea", "Watch out for"],
      rows: [
        ["Recipes", "Cups of flour to cups of water", "Scale up or down while keeping the ratio"],
        ["Maps and scale drawings", "Map length : real length", "Units on both sides must match"],
        [
          "Mixtures and dilutions",
          "Concentrate : water",
          "Total volume equals the sum of the parts",
        ],
        ["Sharing prizes or costs", "Amount per person", "Sum the parts before dividing"],
        ["Aspect ratios", "Width : height of a screen", "Common ratios are 16 : 9 and 4 : 3"],
      ],
    },
    {
      kind: "realWorld",
      heading: "Ratios in daily life",
      items: [
        {
          area: "Cooking",
          text: "Recipes describe how ingredients relate, letting you cook for one person or twenty.",
        },
        {
          area: "Design",
          text: "Photos and screens use aspect ratios such as 16 : 9 to describe their shape.",
        },
        {
          area: "Sport",
          text: "Football pitches, tennis courts and basketball courts are built to fixed length : width ratios.",
        },
        {
          area: "Chemistry",
          text: "Solutions are mixed in fixed ratios of solute to solvent.",
        },
        {
          area: "Business",
          text: "Financial ratios such as debt : equity summarise the health of a company.",
        },
      ],
    },
    {
      kind: "classifyActivity",
      heading: "Activity — which ratios are already simplified?",
      categories: ["Simplified", "Not simplified"],
      items: [
        { term: "$1 : 3$", category: "Simplified" },
        { term: "$2 : 5$", category: "Simplified" },
        { term: "$7 : 9$", category: "Simplified" },
        { term: "$4 : 6$", category: "Not simplified" },
        { term: "$10 : 15$", category: "Not simplified" },
        { term: "$8 : 12$", category: "Not simplified" },
        { term: "$3 : 8$", category: "Simplified" },
        { term: "$9 : 12$", category: "Not simplified" },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Simplify $16 : 24$.", back: "Divide by 8: $2 : 3$." },
        { front: "Are $6 : 9$ and $8 : 12$ equivalent?", back: "Yes — both simplify to $2 : 3$." },
        {
          front: "Share 60 in the ratio $1 : 2 : 3$.",
          back: "Total parts $= 6$, so 10, 20 and 30.",
        },
        {
          front: "Express 250 g : 1 kg as a ratio.",
          back: "$250 : 1000 = 1 : 4$.",
        },
        {
          front: "In a $1 : 50$ scale drawing, 3 cm represents…",
          back: "$3 \\times 50 = 150$ cm, or 1.5 m.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: ratios",
      stepKey: "ratiosPractice",
      questions: [
        {
          prompt: "Simplify $12 : 20$.",
          options: ["$2 : 5$", "$3 : 5$", "$4 : 5$", "$6 : 10$"],
          answer: 1,
          explanation: "Divide both parts by 4.",
        },
        {
          prompt: "Simplify $45 : 27$.",
          options: ["$3 : 2$", "$5 : 3$", "$5 : 9$", "$9 : 5$"],
          answer: 1,
          explanation: "Divide by 9: $45 \\div 9 = 5$ and $27 \\div 9 = 3$.",
        },
        {
          prompt: "Which ratio is equivalent to $2 : 5$?",
          options: ["$4 : 15$", "$8 : 20$", "$5 : 12$", "$10 : 20$"],
          answer: 1,
          explanation: "Multiply both parts by 4.",
        },
        {
          prompt: "Which pair of ratios is equivalent?",
          options: [
            "$3 : 4$ and $6 : 9$",
            "$5 : 8$ and $15 : 24$",
            "$2 : 7$ and $6 : 14$",
            "$1 : 3$ and $4 : 9$",
          ],
          answer: 1,
          explanation: "$15 : 24$ divides by 3 to give $5 : 8$.",
        },
        {
          prompt: "Share 56 in the ratio $3 : 5$. The larger share is…",
          options: ["21", "24", "35", "42"],
          answer: 2,
          explanation: "Total parts $= 8$, so one part $= 7$. Larger share $= 5 \\times 7 = 35$.",
        },
        {
          prompt:
            "Divide ₹720 between three friends in the ratio $2 : 3 : 4$. How much does the friend with the smallest share receive?",
          options: ["₹120", "₹160", "₹180", "₹240"],
          answer: 1,
          explanation: "Total parts $= 9$; one part $= 80$; smallest share $= 2 \\times 80 = 160$.",
        },
        {
          prompt: "Express '400 g to 2 kg' as a ratio in its simplest form.",
          options: ["$1 : 2$", "$1 : 5$", "$2 : 5$", "$1 : 4$"],
          answer: 1,
          explanation: "$400 : 2000 = 1 : 5$ after dividing by 400.",
        },
        {
          prompt:
            "A map has a scale of $1 : 25{,}000$. If two points are 6 cm apart on the map, what is their true distance?",
          options: ["150 m", "1.5 km", "15 km", "150 km"],
          answer: 1,
          explanation: "$6 \\times 25{,}000 = 150{,}000$ cm $= 1.5$ km.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Adding a common number to both sides of a ratio to simplify it.",
          right:
            "You must multiply or divide, not add or subtract. $3 : 4$ is not the same as $4 : 5$.",
        },
        {
          wrong: "Assuming that $\\tfrac{a}{b}$ is the same as $a : b$ in every context.",
          right:
            "In a ratio $a : b$, $a$ and $b$ are parts of the whole $a + b$; the fraction $\\tfrac{a}{a+b}$ is what fraction of the whole $a$ represents.",
        },
        {
          wrong: "Simplifying '60 cm to 2 m' as $60 : 2$.",
          right: "Convert to the same unit first. It is $60 : 200 = 3 : 10$.",
        },
        {
          wrong: "Reversing the parts of a ratio and treating the answer as the same.",
          right: "$3 : 4$ and $4 : 3$ describe different relationships. Order always matters.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A ratio compares quantities of the same kind, in a specific order.",
        "Simplify a ratio by dividing every part by the highest common factor.",
        "Equivalent ratios come from multiplying or dividing all parts by the same non-zero number.",
        "To share in a ratio, add the parts, find the value of one part, then multiply.",
        "When units differ, convert to the same unit before comparing.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: ratios",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Simplify the ratio $30 : 48$.",
          options: ["$3 : 8$", "$5 : 6$", "$5 : 8$", "$6 : 10$"],
          answer: 2,
          marks: 1,
          explanation: "Divide by 6: $30 \\div 6 = 5$ and $48 \\div 6 = 8$.",
        },
        {
          type: "mc",
          prompt: "Which ratio is equivalent to $4 : 9$?",
          options: ["$8 : 15$", "$12 : 27$", "$16 : 32$", "$20 : 40$"],
          answer: 1,
          marks: 1,
          explanation: "Multiply both parts by 3: $4 \\times 3 : 9 \\times 3 = 12 : 27$.",
        },
        {
          type: "tf",
          prompt: "The ratio $2 : 3$ is equivalent to $6 : 9$.",
          answer: true,
          marks: 1,
          explanation: "Both simplify to $2 : 3$; equivalently, $2 \\times 9 = 3 \\times 6$.",
        },
        {
          type: "mc",
          prompt: "Share 84 in the ratio $2 : 5$. The larger share is",
          options: ["24", "42", "56", "60"],
          answer: 3,
          marks: 2,
          explanation:
            "Total parts $= 7$; one part $= 84 \\div 7 = 12$; larger share $= 5 \\times 12 = 60$.",
        },
        {
          type: "mc",
          prompt:
            "A necklace uses gold and silver in the ratio $3 : 7$. If the necklace uses 45 g of gold, how much silver does it use?",
          options: ["15 g", "63 g", "90 g", "105 g"],
          answer: 3,
          marks: 2,
          explanation:
            "One part of gold is $45 \\div 3 = 15$ g, so silver is $7 \\times 15 = 105$ g.",
        },
        {
          type: "mc",
          prompt: "Express '750 m to 2 km' as a ratio in its simplest form.",
          options: ["$1 : 2$", "$3 : 4$", "$3 : 8$", "$375 : 1000$"],
          answer: 2,
          marks: 2,
          explanation: "Convert to metres: $750 : 2000$, divide by 250 to get $3 : 8$.",
        },
        {
          type: "matching",
          prompt: "Match each ratio to its simplified form.",
          left: ["$18 : 24$", "$14 : 21$", "$40 : 25$", "$0.4 : 0.6$"],
          options: ["$2 : 3$", "$3 : 4$", "$8 : 5$", "$2 : 3$"],
          answer: [1, 0, 2, 3],
          marks: 4,
          explanation: "$18:24=3:4$, $14:21=2:3$, $40:25=8:5$, and $0.4:0.6=2:3$.",
        },
        {
          type: "multi",
          prompt: "Select every ratio that is equivalent to $5 : 8$.",
          options: ["$10 : 16$", "$15 : 24$", "$25 : 32$", "$40 : 64$", "$5 : 13$"],
          answers: [0, 1, 3],
          marks: 3,
          explanation:
            "$10:16$, $15:24$ and $40:64$ all simplify to $5:8$. $25:32$ and $5:13$ do not.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [{ key: "ratiosPractice", label: "Complete the practice questions" }],
      requireQuizPass: true,
    },
  ],
};
