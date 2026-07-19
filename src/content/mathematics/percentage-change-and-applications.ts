import type { LessonContent } from "@/lib/lesson-content-types";

export const percentageChangeAndApplications: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "percentages-ratio-and-proportion",
  lessonSlug: "percentage-change-and-applications",
  title: "Percentage Change and Applications",
  objectives: [
    "Calculate the percentage change between an original value and a final value.",
    "Use multipliers to increase or decrease a quantity by a given percentage.",
    "Apply percentage change to discounts, profit, loss, tax and simple interest.",
    "Reverse a percentage change to recover the original amount from the final one.",
    "Solve multi-step problems that combine several percentage changes.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Very often we do not just need a percentage of a number — we need the number after it has been increased or decreased by a percentage. Prices go up with tax, down with discounts; salaries rise with pay increases; populations grow year on year.",
        "The key idea in this lesson is the percentage multiplier: instead of finding the change and then adding or subtracting it, you multiply by a single number that does the whole job at once. Multipliers make even complicated multi-step questions manageable.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Percentage change",
      body: "Percentage change $= \\dfrac{\\text{final value} - \\text{original value}}{\\text{original value}} \\times 100\\%$. A positive result is an increase; a negative result is a decrease.",
    },
    {
      kind: "theory",
      heading: "The idea of a multiplier",
      paragraphs: [
        "To increase a value by $p\\%$, you keep the whole (which is $100\\%$) and add another $p\\%$, giving $(100 + p)\\%$ of the original. As a decimal, that is $1 + \\tfrac{p}{100}$.",
        "To decrease a value by $p\\%$, you keep the whole and remove $p\\%$, giving $(100 - p)\\%$ of the original. As a decimal, that is $1 - \\tfrac{p}{100}$.",
        "Either way, one multiplication takes you straight from the original value to the final value.",
      ],
    },
    {
      kind: "table",
      heading: "Common percentage multipliers",
      headers: ["Change", "Multiplier", "Meaning"],
      rows: [
        ["Increase by 5%", "$1.05$", "Add $5\\%$ to the whole."],
        ["Increase by 20%", "$1.20$", "Add $20\\%$ to the whole."],
        ["Increase by 100%", "$2.00$", "Double the amount."],
        ["Decrease by 10%", "$0.90$", "Keep $90\\%$ of the whole."],
        ["Decrease by 25%", "$0.75$", "Keep $75\\%$ of the whole."],
        ["No change", "$1.00$", "Keep the amount as it is."],
      ],
      note: "If the multiplier is greater than 1 the amount grows; less than 1 the amount shrinks.",
    },
    {
      kind: "example",
      prompt: "A monthly salary of ₹4,000 is increased by $8\\%$. Find the new salary.",
      steps: [
        "Write the multiplier for an $8\\%$ increase: $1 + 0.08 = 1.08$.",
        "Multiply the original salary by the multiplier: $4000 \\times 1.08 = 4320$.",
      ],
      answer: "The new salary is ₹4,320.",
    },
    {
      kind: "example",
      prompt:
        "A television costs ₹2,500. In a sale it is reduced by $15\\%$. Find the sale price.",
      steps: [
        "Write the multiplier for a $15\\%$ decrease: $1 - 0.15 = 0.85$.",
        "Multiply the original price by the multiplier: $2500 \\times 0.85 = 2125$.",
      ],
      answer: "The sale price is ₹2,125.",
    },
    {
      kind: "theory",
      heading: "Percentage change from original and final values",
      paragraphs: [
        "If you know the starting amount and the finishing amount, the change is the difference. Divide that difference by the original amount and multiply by 100 to express it as a percentage.",
        "Always divide by the original value — not the final value. Percentage change measures how far the amount has moved compared with where it started.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A shop bought a jacket for ₹200 and sold it for ₹250. Find the percentage profit.",
      steps: [
        "Find the change: $250 - 200 = 50$ rupees of profit.",
        "Divide by the original value: $\\tfrac{50}{200} = 0.25$.",
        "Multiply by 100 to convert to a percentage.",
      ],
      answer: "The shop made a $25\\%$ profit.",
    },
    {
      kind: "example",
      prompt:
        "A car worth ₹60,000 is now worth ₹51,000 a year later. Find the percentage loss.",
      steps: [
        "Find the change: $51{,}000 - 60{,}000 = -9{,}000$ rupees.",
        "Divide by the original value: $\\tfrac{-9000}{60000} = -0.15$.",
        "The negative sign indicates a decrease.",
      ],
      answer: "The car has lost $15\\%$ of its value.",
    },
    {
      kind: "comparison",
      heading: "Profit and loss at a glance",
      left: {
        title: "Profit",
        items: [
          "Selling price is greater than the cost price.",
          "$\\text{Profit} = \\text{selling price} - \\text{cost price}$.",
          "$\\text{Profit \\%} = \\dfrac{\\text{profit}}{\\text{cost price}} \\times 100$.",
        ],
      },
      right: {
        title: "Loss",
        items: [
          "Selling price is less than the cost price.",
          "$\\text{Loss} = \\text{cost price} - \\text{selling price}$.",
          "$\\text{Loss \\%} = \\dfrac{\\text{loss}}{\\text{cost price}} \\times 100$.",
        ],
      },
    },
    {
      kind: "theory",
      heading: "Discounts, tax and simple interest",
      paragraphs: [
        "A discount is a percentage decrease applied to the price. If the discount is $d\\%$, the customer pays $(100 - d)\\%$ of the original price.",
        "Sales tax or VAT is a percentage increase on the pre-tax price. If the tax rate is $t\\%$, the customer pays $(100 + t)\\%$ of the pre-tax price.",
        "Simple interest is the amount earned on savings or owed on a loan when the interest each year is calculated on the original amount only. If the principal is $P$, the annual rate is $r\\%$ and the time is $t$ years, the interest earned is $I = \\dfrac{P \\, r \\, t}{100}$ and the total balance is $P + I$.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A book has a list price of ₹80. The shop offers a $10\\%$ discount, but VAT at $5\\%$ is then added to the discounted price. How much does the customer pay?",
      steps: [
        "Apply the discount: multiplier is $0.90$, so the discounted price is $80 \\times 0.9 = 72$ rupees.",
        "Apply VAT to the discounted price: multiplier is $1.05$, so the final price is $72 \\times 1.05 = 75.60$ rupees.",
      ],
      answer: "The customer pays ₹75.60.",
    },
    {
      kind: "example",
      prompt:
        "Sara deposits ₹5,000 in a savings account paying $4\\%$ simple interest per year. How much interest does she earn after 3 years, and what is her balance?",
      steps: [
        "Use the formula $I = \\dfrac{P \\, r \\, t}{100}$ with $P = 5000$, $r = 4$ and $t = 3$.",
        "Substitute: $I = \\dfrac{5000 \\times 4 \\times 3}{100} = \\dfrac{60000}{100} = 600$.",
        "Balance is principal plus interest: $5000 + 600 = 5600$.",
      ],
      answer: "She earns ₹600 in interest and has ₹5,600 in the account.",
    },
    {
      kind: "theory",
      heading: "Reverse percentages: finding the original amount",
      paragraphs: [
        "Reverse percentage problems give you the final value and the percentage change and ask you to find the original value. The mistake most people make is to apply the same percentage to the final value — but that changes the wrong number.",
        "Instead, undo the multiplier. If the final value came from multiplying the original by $M$, then the original is the final value divided by $M$. This is the golden rule for reverse percentages.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Reverse percentage rule",
      body: "$\\text{Original value} = \\dfrac{\\text{final value}}{\\text{multiplier}}$. Never apply the percentage directly to the final value.",
    },
    {
      kind: "example",
      prompt:
        "After a $20\\%$ pay rise, an employee earns ₹6,000 per month. What was the salary before the rise?",
      steps: [
        "A $20\\%$ increase corresponds to a multiplier of $1.20$.",
        "The original salary satisfies $\\text{original} \\times 1.20 = 6000$.",
        "Divide the final salary by the multiplier: $\\text{original} = \\tfrac{6000}{1.20} = 5000$.",
      ],
      answer: "The salary before the rise was ₹5,000.",
    },
    {
      kind: "example",
      prompt: "In a $25\\%$ off sale, a coat costs ₹300. What was the original price?",
      steps: [
        "A $25\\%$ decrease corresponds to a multiplier of $0.75$.",
        "Set up the equation $\\text{original} \\times 0.75 = 300$.",
        "Solve for the original: $\\text{original} = \\tfrac{300}{0.75} = 400$.",
      ],
      answer: "The original price was ₹400.",
    },
    {
      kind: "theory",
      heading: "Multi-step percentage problems",
      paragraphs: [
        "When several percentage changes act one after the other, do not add the percentages. Multiply the individual multipliers to get one overall multiplier.",
        "For example, an increase of $10\\%$ followed by a decrease of $10\\%$ gives an overall multiplier of $1.10 \\times 0.90 = 0.99$. That is a net decrease of $1\\%$, not zero.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A share price falls by $20\\%$, then rises by $25\\%$. Is the final price higher, lower or the same as the original?",
      steps: [
        "The two multipliers are $0.80$ and $1.25$.",
        "Combine them: $0.80 \\times 1.25 = 1.00$.",
        "The overall multiplier is 1, so the price returns exactly to where it started.",
      ],
      answer: "The final price equals the original price.",
    },
    {
      kind: "example",
      prompt:
        "A phone's price is first increased by $10\\%$ for a limited edition, then reduced by $15\\%$ in a clearance sale. What is the overall percentage change?",
      steps: [
        "The multipliers are $1.10$ and $0.85$.",
        "Combine them: $1.10 \\times 0.85 = 0.935$.",
        "This is a multiplier of $0.935$, so the final price is $93.5\\%$ of the original.",
        "The overall change is $93.5\\% - 100\\% = -6.5\\%$.",
      ],
      answer: "The phone's price decreases by $6.5\\%$ overall.",
    },
    {
      kind: "realWorld",
      heading: "Where percentage change is used",
      items: [
        {
          area: "Retail",
          text: "Shops use percentage discounts, mark-ups and VAT calculations every day.",
        },
        {
          area: "Personal finance",
          text: "Salary rises, savings interest and loan repayments are all percentage changes.",
        },
        {
          area: "Business",
          text: "Companies report profit, loss and revenue growth as percentages to compare years fairly.",
        },
        {
          area: "Economics",
          text: "Inflation, unemployment and gross domestic product are almost always quoted as percentage changes.",
        },
        {
          area: "Health",
          text: "Weight loss, resting heart-rate improvement and body-fat change are tracked as percentages.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "Multiplier for a $30\\%$ increase?",
          back: "$1.30$.",
        },
        {
          front: "Multiplier for a $30\\%$ decrease?",
          back: "$0.70$.",
        },
        {
          front: "Formula for percentage change?",
          back: "$\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
        },
        {
          front: "Reverse a $25\\%$ increase from a final value of 500.",
          back: "$500 \\div 1.25 = 400$.",
        },
        {
          front: "A $50\\%$ rise followed by a $50\\%$ fall — overall change?",
          back: "$1.50 \\times 0.50 = 0.75$, a $25\\%$ decrease.",
        },
        {
          front: "Simple interest formula?",
          back: "$I = \\dfrac{P r t}{100}$.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: percentage change",
      stepKey: "percentageChangePractice",
      questions: [
        {
          prompt: "Which multiplier represents a $40\\%$ increase?",
          options: ["0.40", "0.60", "1.40", "4.00"],
          answer: 2,
          explanation: "$100\\% + 40\\% = 140\\% = 1.40$.",
        },
        {
          prompt: "Which multiplier represents a $12\\%$ decrease?",
          options: ["0.12", "0.88", "1.12", "1.88"],
          answer: 1,
          explanation: "$100\\% - 12\\% = 88\\% = 0.88$.",
        },
        {
          prompt: "A price of ₹60 is increased by $25\\%$. Find the new price.",
          options: ["₹15", "₹45", "₹75", "₹85"],
          answer: 2,
          explanation: "$60 \\times 1.25 = 75$.",
        },
        {
          prompt: "A price of ₹200 is reduced by $30\\%$. Find the new price.",
          options: ["₹60", "₹140", "₹170", "₹260"],
          answer: 1,
          explanation: "Multiplier is $0.70$; $200 \\times 0.70 = 140$.",
        },
        {
          prompt: "Find the percentage change from 80 to 100.",
          options: ["20% increase", "25% increase", "20% decrease", "125% increase"],
          answer: 1,
          explanation: "Change is 20; $\\tfrac{20}{80} = 0.25 = 25\\%$ increase.",
        },
        {
          prompt: "After a $20\\%$ increase, a bill is ₹96. What was the original bill?",
          options: ["₹76.80", "₹80", "₹115.20", "₹120"],
          answer: 1,
          explanation: "Divide by the multiplier: $\\tfrac{96}{1.20} = 80$.",
        },
        {
          prompt:
            "A trader buys goods for ₹500 and sells them for ₹620. What is the percentage profit?",
          options: ["12%", "20%", "24%", "80%"],
          answer: 2,
          explanation: "Profit is 120; $\\tfrac{120}{500} = 0.24 = 24\\%$.",
        },
        {
          prompt:
            "₹5,000 is invested at $6\\%$ simple interest per year. How much interest is earned after 4 years?",
          options: ["₹120", "₹240", "₹600", "₹1,200"],
          answer: 3,
          explanation: "$I = \\tfrac{5000 \\times 6 \\times 4}{100} = 1200$.",
        },
        {
          prompt:
            "An item rises by $10\\%$ and then falls by $10\\%$. What is the overall percentage change?",
          options: ["0% (no change)", "1% decrease", "1% increase", "2% decrease"],
          answer: 1,
          explanation: "$1.10 \\times 0.90 = 0.99$, a $1\\%$ decrease.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Dividing by the final value instead of the original value when finding percentage change.",
          right:
            "Always divide the change by the original value, because it represents the starting point.",
        },
        {
          wrong:
            "Applying the discount percentage to the sale price to recover the original price.",
          right:
            "To reverse a change, divide the final value by the multiplier (for example, $\\tfrac{\\text{final}}{0.75}$ for a $25\\%$ discount).",
        },
        {
          wrong: "Adding percentages when they are applied one after the other.",
          right:
            "Multiply the multipliers instead. A $10\\%$ increase followed by a $10\\%$ decrease is not zero.",
        },
        {
          wrong:
            "Forgetting to add the interest to the principal when asked for the final balance.",
          right: "The balance in simple interest is $P + I$, not just $I$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A $p\\%$ increase multiplies the amount by $1 + \\tfrac{p}{100}$; a $p\\%$ decrease multiplies it by $1 - \\tfrac{p}{100}$.",
        "Percentage change $= \\tfrac{\\text{change}}{\\text{original value}} \\times 100\\%$.",
        "Discounts, tax and simple interest are all percentage changes in disguise.",
        "Reverse a percentage change by dividing the final value by its multiplier.",
        "Combine several percentage changes by multiplying the multipliers, not by adding the percentages.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: percentage change and applications",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Increase 240 by $15\\%$.",
          options: ["36", "204", "255", "276"],
          answer: 3,
          marks: 2,
          explanation: "$240 \\times 1.15 = 276$.",
        },
        {
          type: "mc",
          prompt: "Decrease 400 by $18\\%$.",
          options: ["72", "328", "382", "418"],
          answer: 1,
          marks: 2,
          explanation: "$400 \\times 0.82 = 328$.",
        },
        {
          type: "mc",
          prompt: "The percentage change from 150 to 180 is",
          options: ["10%", "15%", "20%", "30%"],
          answer: 2,
          marks: 2,
          explanation: "Change is 30; $\\tfrac{30}{150} = 0.20 = 20\\%$ increase.",
        },
        {
          type: "tf",
          prompt:
            "If a price falls by $50\\%$ and then rises by $50\\%$, it returns to its original value.",
          answer: false,
          marks: 1,
          explanation:
            "The multipliers multiply to $0.50 \\times 1.50 = 0.75$, a $25\\%$ overall decrease.",
        },
        {
          type: "mc",
          prompt: "A watch is on sale at $30\\%$ off for ₹315. What was the original price?",
          options: ["₹345", "₹409.50", "₹450", "₹1,050"],
          answer: 2,
          marks: 2,
          explanation: "The multiplier is $0.70$; divide: $\\tfrac{315}{0.70} = 450$.",
        },
        {
          type: "mc",
          prompt:
            "A shopkeeper buys apples for ₹40 per kilogram and sells them for ₹34 per kilogram. What is the percentage loss?",
          options: ["6%", "10%", "15%", "17.6%"],
          answer: 2,
          marks: 2,
          explanation: "Loss is 6; $\\tfrac{6}{40} = 0.15 = 15\\%$.",
        },
        {
          type: "mc",
          prompt:
            "A loan of ₹8,000 is charged at $5\\%$ simple interest per year for 2 years. How much interest is owed?",
          options: ["₹200", "₹400", "₹800", "₹1,600"],
          answer: 2,
          marks: 2,
          explanation: "$I = \\tfrac{8000 \\times 5 \\times 2}{100} = 800$.",
        },
        {
          type: "multi",
          prompt: "Select every correct statement.",
          options: [
            "A multiplier greater than 1 always corresponds to an increase.",
            "A multiplier of $0.5$ corresponds to a $50\\%$ decrease.",
            "The multiplier for a $200\\%$ increase is $2.00$.",
            "To reverse a $10\\%$ increase, divide the final value by $1.10$.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "$200\\%$ increase means $300\\% = 3.00$, not $2.00$.",
        },
        {
          type: "mc",
          prompt:
            "The pre-tax price of a laptop is ₹2,400. VAT is charged at $5\\%$ and then a $10\\%$ loyalty discount is applied to the tax-inclusive price. What is the final price?",
          options: ["₹2,268", "₹2,280", "₹2,376", "₹2,400"],
          answer: 0,
          marks: 3,
          explanation: "$2400 \\times 1.05 = 2520$, then $2520 \\times 0.90 = 2268$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "percentageChangePractice",
          label: "Complete the practice questions",
        },
      ],
      requireQuizPass: true,
    },
  ],
};
