import type { LessonContent } from "@/lib/lesson-content-types";

export const understandingPercentages: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "percentages-ratio-and-proportion",
  lessonSlug: "understanding-percentages",
  title: "Understanding Percentages",
  objectives: [
    "Explain what a percentage is and read the percent symbol correctly.",
    "Convert freely between fractions, decimals and percentages.",
    "Find a given percentage of a quantity using mental, written and calculator methods.",
    "Compare two or more quantities by converting them to percentages.",
    "Apply percentages to everyday contexts such as discounts, tips and test marks.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A percentage is simply a fraction whose denominator is fixed at 100. The symbol $\\%$ is shorthand for 'out of one hundred', so $37\\%$ means $\\tfrac{37}{100}$.",
        "Because everything is compared to the same denominator, percentages give us a common language for saying how much of something we have. That is why shops advertise discounts as percentages, teachers report marks as percentages, and news reports summarise data as percentages.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Percentage",
      body: "A percentage is a way of writing a number as parts per hundred. Formally, $p\\% = \\tfrac{p}{100}$ for any real number $p$.",
    },
    {
      kind: "theory",
      heading: "Where the percent symbol comes from",
      paragraphs: [
        "The word 'per cent' comes from the Latin phrase 'per centum', meaning 'by the hundred'. The symbol $\\%$ evolved from an abbreviation of 'cento', with the slash and two zeros suggesting the fraction over one hundred.",
        "Whenever you see $\\%$, replace it in your head with 'divide by 100'. That single habit turns most percentage questions into ordinary arithmetic.",
      ],
    },
    {
      kind: "theory",
      heading: "Fractions, decimals and percentages",
      paragraphs: [
        "Fractions, decimals and percentages are three ways of writing the same idea: a part of a whole. Being fluent in all three lets you choose whichever is easiest for the calculation in front of you.",
        "To convert between them, remember the following moves. To go from a percentage to a decimal, divide by 100 (move the decimal point two places to the left). To go from a decimal to a percentage, multiply by 100 (move the decimal point two places to the right). To go from a percentage to a fraction, write it over 100 and simplify. To go from a fraction to a percentage, first turn it into a decimal by dividing the numerator by the denominator, then multiply by 100.",
      ],
    },
    {
      kind: "table",
      heading: "The fraction, decimal and percentage triangle",
      headers: ["Fraction", "Decimal", "Percentage"],
      rows: [
        ["$\\tfrac{1}{2}$", "$0.5$", "$50\\%$"],
        ["$\\tfrac{1}{4}$", "$0.25$", "$25\\%$"],
        ["$\\tfrac{3}{4}$", "$0.75$", "$75\\%$"],
        ["$\\tfrac{1}{5}$", "$0.2$", "$20\\%$"],
        ["$\\tfrac{1}{10}$", "$0.1$", "$10\\%$"],
        ["$\\tfrac{1}{100}$", "$0.01$", "$1\\%$"],
        ["$\\tfrac{1}{3}$", "$0.333\\ldots$", "$33.\\overline{3}\\%$"],
        ["$\\tfrac{2}{3}$", "$0.666\\ldots$", "$66.\\overline{6}\\%$"],
      ],
      note: "Learning these by heart makes almost every percentage question quicker.",
    },
    {
      kind: "example",
      prompt: "Convert $\\tfrac{3}{8}$ into a percentage.",
      steps: [
        "Divide the numerator by the denominator: $3 \\div 8 = 0.375$.",
        "Multiply by 100 to change the decimal into a percentage: $0.375 \\times 100 = 37.5$.",
      ],
      answer: "$\\tfrac{3}{8} = 37.5\\%$.",
    },
    {
      kind: "example",
      prompt: "Write $6\\%$ as a fraction in its lowest terms.",
      steps: [
        "Put the number over 100: $6\\% = \\tfrac{6}{100}$.",
        "Divide the numerator and denominator by their highest common factor, 2.",
      ],
      answer: "$6\\% = \\tfrac{3}{50}$.",
    },
    {
      kind: "theory",
      heading: "Finding a percentage of an amount",
      paragraphs: [
        "'Of' in mathematics means 'multiply'. So finding $p\\%$ of a number $N$ means calculating $\\tfrac{p}{100}\\times N$.",
        "You can approach this in three main ways: convert the percentage to a decimal and multiply, use easy building blocks such as $10\\%$ and $1\\%$, or use a calculator's $\\%$ key. All three give the same answer; choose the fastest for the numbers in front of you.",
      ],
      list: [
        "$10\\%$ of a number is that number divided by 10.",
        "$1\\%$ of a number is that number divided by 100.",
        "$50\\%$ of a number is half of it.",
        "$25\\%$ of a number is a quarter of it.",
        "$5\\%$ is half of $10\\%$; $2.5\\%$ is a quarter of $10\\%$.",
      ],
    },
    {
      kind: "example",
      prompt: "Find $15\\%$ of 240 using easy building blocks.",
      steps: [
        "$10\\%$ of 240 is $240 \\div 10 = 24$.",
        "$5\\%$ is half of $10\\%$, so $5\\%$ of 240 is $24 \\div 2 = 12$.",
        "$15\\% = 10\\% + 5\\%$, so add the two parts: $24 + 12 = 36$.",
      ],
      answer: "$15\\%$ of 240 is 36.",
    },
    {
      kind: "example",
      prompt: "Find $18\\%$ of 250 using the decimal method.",
      steps: [
        "Convert $18\\%$ to a decimal: $18\\% = 0.18$.",
        "Multiply the decimal by 250: $0.18 \\times 250 = 45$.",
      ],
      answer: "$18\\%$ of 250 is 45.",
    },
    {
      kind: "example",
      prompt:
        "A jacket costs 320 riyals. A shop offers a $25\\%$ discount. How much is taken off, and what is the sale price?",
      steps: [
        "Find $25\\%$ of 320. Because $25\\% = \\tfrac{1}{4}$, divide 320 by 4: $320 \\div 4 = 80$.",
        "The discount is 80 riyals.",
        "Subtract the discount from the original price to find the sale price: $320 - 80 = 240$.",
      ],
      answer: "The discount is 80 riyals and the sale price is 240 riyals.",
    },
    {
      kind: "theory",
      heading: "Comparing quantities with percentages",
      paragraphs: [
        "Two scores that look very different can still describe the same performance if the totals differ. To compare fairly, turn each score into a percentage. That way both are measured out of 100 and can be compared directly.",
        "This trick is especially useful for test marks, poll results and product reviews, where the totals or sample sizes are not the same.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Amina scored 42 out of 60 on a science test. Layla scored 65 out of 90 on a longer version. Who did better?",
      steps: [
        "Turn each score into a percentage. Divide and multiply by 100.",
        "Amina: $\\tfrac{42}{60}\\times 100 = 70\\%$.",
        "Layla: $\\tfrac{65}{90}\\times 100 \\approx 72.2\\%$.",
        "Compare the percentages.",
      ],
      answer: "Layla did slightly better, at about $72.2\\%$ versus Amina's $70\\%$.",
    },
    {
      kind: "cards",
      heading: "Percentages in the wild",
      columns: 3,
      items: [
        {
          title: "Discounts",
          value: "20% off",
          text: "The shopper pays 80% of the original price.",
        },
        {
          title: "Sales tax",
          value: "5% VAT",
          text: "The customer pays 105% of the pre-tax price.",
        },
        {
          title: "Battery",
          value: "42%",
          text: "The device has 42 units of charge out of every 100.",
        },
        {
          title: "Test marks",
          value: "72%",
          text: "A student earned 72 marks for every 100 possible.",
        },
        { title: "Tips", value: "10%", text: "A tip of 10% adds one tenth to the bill." },
        {
          title: "Interest",
          value: "3% p.a.",
          text: "A bank pays 3 units of interest per 100 units saved each year.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Where percentages appear",
      items: [
        {
          area: "Shopping",
          text: "Discounts, seasonal sales and value-added tax are all expressed as percentages.",
        },
        {
          area: "School",
          text: "Report cards and standardised tests report performance as a percentage of the maximum score.",
        },
        {
          area: "Health",
          text: "Nutrition labels state the percentage of your daily intake supplied by a serving.",
        },
        {
          area: "Sport",
          text: "Basketball shooting accuracy and cricket batting statistics rely on percentages.",
        },
        {
          area: "Weather",
          text: "The chance of rain and the humidity are typically shown as percentages.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "What does the symbol $\\%$ mean?", back: "Divide by 100 — parts per hundred." },
        { front: "Convert $0.6$ to a percentage.", back: "$60\\%$." },
        { front: "Convert $\\tfrac{7}{20}$ to a percentage.", back: "$35\\%$." },
        { front: "Find $50\\%$ of 84.", back: "42 — half of the amount." },
        { front: "Find $10\\%$ of 350.", back: "35 — divide by 10." },
        { front: "Write $125\\%$ as a decimal.", back: "$1.25$." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: percentages",
      stepKey: "percentagesPractice",
      questions: [
        {
          prompt: "Which fraction is equal to $40\\%$?",
          options: ["$\\tfrac{2}{5}$", "$\\tfrac{4}{5}$", "$\\tfrac{1}{4}$", "$\\tfrac{3}{40}$"],
          answer: 0,
          explanation: "$40\\% = \\tfrac{40}{100} = \\tfrac{2}{5}$ after dividing by 20.",
        },
        {
          prompt: "Convert $0.08$ into a percentage.",
          options: ["$0.08\\%$", "$0.8\\%$", "$8\\%$", "$80\\%$"],
          answer: 2,
          explanation: "Multiply the decimal by 100: $0.08 \\times 100 = 8$.",
        },
        {
          prompt: "What is $25\\%$ of 160?",
          options: ["25", "32", "40", "64"],
          answer: 2,
          explanation: "$25\\% = \\tfrac{1}{4}$, so divide 160 by 4 to obtain 40.",
        },
        {
          prompt: "What is $10\\%$ of 45?",
          options: ["0.45", "4.5", "45", "450"],
          answer: 1,
          explanation: "Move the decimal point one place left: $45 \\to 4.5$.",
        },
        {
          prompt: "What is $30\\%$ of 90?",
          options: ["9", "18", "27", "36"],
          answer: 2,
          explanation: "$10\\%$ of 90 is 9, so $30\\%$ is $3 \\times 9 = 27$.",
        },
        {
          prompt: "A student scored 24 marks out of 30. What percentage did they achieve?",
          options: ["70%", "75%", "80%", "85%"],
          answer: 2,
          explanation: "$\\tfrac{24}{30}\\times 100 = 80\\%$.",
        },
        {
          prompt: "Write $\\tfrac{9}{25}$ as a percentage.",
          options: ["9%", "18%", "36%", "45%"],
          answer: 2,
          explanation: "Multiply top and bottom by 4 to get $\\tfrac{36}{100} = 36\\%$.",
        },
        {
          prompt:
            "A phone battery reads $75\\%$ and holds 3,000 mAh at full charge. How much charge remains?",
          options: ["1,500 mAh", "2,000 mAh", "2,250 mAh", "2,500 mAh"],
          answer: 2,
          explanation: "$75\\%$ of 3,000 is $\\tfrac{3}{4}\\times 3000 = 2250$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Reading $\\%$ as 'multiply by 100'.",
          right: "$\\%$ means 'divide by 100'. So $37\\% = 0.37$, not 3,700.",
        },
        {
          wrong: "Thinking that $50\\%$ of any amount is always 50.",
          right: "$50\\%$ means half of the amount. Half of 40 is 20; half of 80 is 40.",
        },
        {
          wrong: "Comparing raw scores such as 42 out of 60 and 65 out of 90 directly.",
          right:
            "Convert each to a percentage first, then compare, because the totals are different.",
        },
        {
          wrong: "Treating $150\\%$ as impossible.",
          right:
            "Percentages can be greater than 100. $150\\%$ means one-and-a-half times the whole.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A percentage is a fraction over 100; $p\\%$ means $\\tfrac{p}{100}$.",
        "To go from a percentage to a decimal, divide by 100; to go the other way, multiply by 100.",
        "Any percentage of an amount equals the decimal form multiplied by that amount.",
        "Percentages let you compare quantities fairly by putting everything out of the same total.",
        "Discounts, tax, marks, tips and interest are the most common everyday uses.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: understanding percentages",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which of these is equal to $\\tfrac{3}{5}$?",
          options: ["30%", "35%", "60%", "65%"],
          answer: 2,
          marks: 1,
          explanation: "$\\tfrac{3}{5} = 0.6 = 60\\%$.",
        },
        {
          type: "mc",
          prompt: "What is $12\\%$ of 250?",
          options: ["24", "26", "30", "32"],
          answer: 2,
          marks: 1,
          explanation: "$0.12 \\times 250 = 30$, or: $10\\% = 25$ and $2\\% = 5$; sum is 30.",
        },
        {
          type: "tf",
          prompt: "$0.4\\%$ and $40\\%$ mean the same thing.",
          answer: false,
          marks: 1,
          explanation: "$0.4\\% = 0.004$ but $40\\% = 0.4$. They differ by a factor of 100.",
        },
        {
          type: "mc",
          prompt:
            "A shirt originally costs 180 riyals and is reduced by $20\\%$. What is the sale price?",
          options: ["36 riyals", "144 riyals", "150 riyals", "160 riyals"],
          answer: 1,
          marks: 2,
          explanation: "$20\\%$ of 180 is 36, and $180 - 36 = 144$.",
        },
        {
          type: "matching",
          prompt: "Match each fraction to its equivalent percentage.",
          left: ["$\\tfrac{1}{2}$", "$\\tfrac{1}{4}$", "$\\tfrac{1}{5}$", "$\\tfrac{1}{10}$"],
          options: ["10%", "20%", "25%", "50%"],
          answer: [3, 2, 1, 0],
          marks: 4,
          explanation:
            "$\\tfrac{1}{2}=50\\%$, $\\tfrac{1}{4}=25\\%$, $\\tfrac{1}{5}=20\\%$, $\\tfrac{1}{10}=10\\%$.",
        },
        {
          type: "mc",
          prompt: "Yara scored 18 out of 24 on a maths test. What was her percentage score?",
          options: ["65%", "70%", "75%", "80%"],
          answer: 2,
          marks: 2,
          explanation: "$\\tfrac{18}{24}\\times 100 = 75\\%$.",
        },
        {
          type: "multi",
          prompt: "Select every statement that is true about percentages.",
          options: [
            "A percentage is a fraction with denominator 100.",
            "Percentages must be between 0 and 100.",
            "$1\\%$ of a number is one hundredth of that number.",
            "$0.5\\%$ and $50\\%$ have the same value.",
            "$'\\text{of}'$ in percentage questions means 'multiply'.",
          ],
          answers: [0, 2, 4],
          marks: 3,
          explanation:
            "Percentages can exceed 100 (for growth) and $0.5\\%$ is far smaller than $50\\%$.",
        },
        {
          type: "mc",
          prompt: "Write $0.045$ as a percentage.",
          options: ["0.045%", "0.45%", "4.5%", "45%"],
          answer: 2,
          marks: 1,
          explanation: "Multiply by 100: $0.045 \\times 100 = 4.5$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [{ key: "percentagesPractice", label: "Complete the practice questions" }],
      requireQuizPass: true,
    },
  ],
};
