import type { LessonContent } from "@/lib/lesson-content-types";

export const multiplyingAndDividingIntegers: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "integers-and-rational-numbers",
  lessonSlug: "multiplying-and-dividing-integers",
  title: "Multiplying and Dividing Integers",
  objectives: [
    "Explain integer multiplication using repeated groups and patterns",
    "Apply the sign rules for multiplication and division",
    "Recognise that division by zero is undefined",
    "Evaluate powers with negative bases correctly",
    "Distinguish between expressions such as $(-3)^2$ and $-3^2$",
    "Use order of operations with signed numbers",
    "Model repeated gains, losses, temperature changes and debts with integer operations",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Multiplication and division with integers use the same magnitude calculations you already know. The new skill is deciding the sign of the result. A simple pattern—same signs give a positive result, different signs give a negative result—works for both operations.",
        "This lesson develops the sign rules instead of treating them as unexplained facts. It also shows why parentheses matter when a negative number is raised to a power.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "The sign rule in one sentence",
      body: "For multiplication or division of two non-zero integers: same signs give a positive answer; different signs give a negative answer.",
    },
    {
      kind: "theory",
      heading: "Multiplication as equal groups",
      paragraphs: [
        "For positive multipliers, multiplication can be read as repeated addition. The expression $4\times(-3)$ means four groups of −3: $(-3)+(-3)+(-3)+(-3)=-12$.",
        "Changing the order gives the same product because multiplication is commutative: $4\times(-3)=(-3)\times4=-12$.",
      ],
    },
    {
      kind: "example",
      prompt: "Use repeated addition to calculate $5\times(-4)$.",
      steps: [
        "Write five groups of −4: $(-4)+(-4)+(-4)+(-4)+(-4)$.",
        "Add the magnitudes: $4+4+4+4+4=20$.",
        "Every group is negative, so the total is negative.",
      ],
      answer: "$5\times(-4)=-20$.",
    },
    {
      kind: "theory",
      heading: "Why a negative times a negative is positive",
      paragraphs: [
        "Look at the pattern while the second factor decreases by 1: $3\times2=6$, $3\times1=3$, $3\times0=0$, $3\times(-1)=-3$. Each product falls by 3.",
        "Now repeat with −3 as the first factor: $(-3)\times2=-6$, $(-3)\times1=-3$, $(-3)\times0=0$. To continue the same pattern by adding 3 each time, $(-3)\times(-1)$ must equal 3 and $(-3)\times(-2)$ must equal 6.",
        "This is not an arbitrary rule. It is required for arithmetic patterns and the distributive property to remain consistent.",
      ],
    },
    {
      kind: "table",
      heading: "Sign rules for two factors",
      headers: ["Signs", "Product sign", "Example"],
      rows: [
        ["Positive × positive", "Positive", "$6\times4=24$"],
        ["Positive × negative", "Negative", "$6\times(-4)=-24$"],
        ["Negative × positive", "Negative", "$(-6)\times4=-24$"],
        ["Negative × negative", "Positive", "$(-6)\times(-4)=24$"],
      ],
      note: "The identical sign pattern applies to division, provided the divisor is not zero.",
    },
    {
      kind: "theory",
      heading: "A useful two-step method",
      paragraphs: [
        "Separate sign from magnitude. First decide whether the signs are the same or different. Then multiply or divide the absolute values. This reduces sign mistakes and makes working easy to check.",
      ],
      list: [
        "Step 1: Decide the sign from the sign rule.",
        "Step 2: Calculate with absolute values.",
        "Step 3: Attach the sign and check whether the result is reasonable.",
      ],
    },
    {
      kind: "example",
      prompt: "Calculate $(-12)\times7$.",
      steps: [
        "The signs are different, so the product is negative.",
        "Multiply the magnitudes: $12\times7=84$.",
      ],
      answer: "$(-12)\times7=-84$.",
    },
    {
      kind: "example",
      prompt: "Calculate $(-15)\times(-8)$.",
      steps: [
        "The signs are the same, so the product is positive.",
        "Multiply the magnitudes: $15\times8=120$.",
      ],
      answer: "$(-15)\times(-8)=120$.",
    },
    {
      kind: "theory",
      heading: "Division is the inverse of multiplication",
      paragraphs: [
        "Division asks for a missing factor. Since $(-7)\times6=-42$, it follows that $-42\div6=-7$ and $-42\div(-7)=6$.",
        "The same-sign/different-sign rule is therefore inherited from multiplication.",
      ],
    },
    {
      kind: "comparison",
      heading: "Division sign patterns",
      left: {
        title: "Positive quotients",
        items: ["$24\div6=4$", "$(-24)\div(-6)=4$", "The dividend and divisor have the same sign."],
      },
      right: {
        title: "Negative quotients",
        items: [
          "$(-24)\div6=-4$",
          "$24\div(-6)=-4$",
          "The dividend and divisor have different signs.",
        ],
      },
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Division by zero",
      body: "Division by zero is undefined. There is no number $x$ for which $0\times x=5$, so $5\div0$ cannot have a value. Zero divided by a non-zero number is allowed: $0\div7=0$.",
    },
    {
      kind: "example",
      prompt: "Calculate $-96\div12$.",
      steps: [
        "The signs are different, so the quotient is negative.",
        "Divide the magnitudes: $96\div12=8$.",
      ],
      answer: "$-96\div12=-8$.",
    },
    {
      kind: "example",
      prompt: "Calculate $-144\div(-12)$.",
      steps: [
        "The signs are the same, so the quotient is positive.",
        "Divide the magnitudes: $144\div12=12$.",
      ],
      answer: "$-144\div(-12)=12$.",
    },
    {
      kind: "integerRulesExplorer",
      heading: "Interactive sign-rule and negative-power laboratory",
    },
    {
      kind: "theory",
      heading: "More than two negative factors",
      paragraphs: [
        "For a product containing several non-zero factors, count the negative signs. An even number of negative factors produces a positive result because the negatives pair up. An odd number leaves one unpaired negative and produces a negative result.",
      ],
    },
    {
      kind: "formula",
      latex: "(-1)^n=\begin{cases}1,&n\text{ even}\\-1,&n\text{ odd}\end{cases}",
      caption: "The parity of the number of negative factors determines the final sign.",
    },
    {
      kind: "example",
      prompt: "Calculate $(-2)(-3)(-5)(4)$.",
      steps: [
        "There are three negative factors, an odd number, so the product is negative.",
        "Multiply the magnitudes: $2\times3\times5\times4=120$.",
      ],
      answer: "$(-2)(-3)(-5)(4)=-120$.",
    },
    {
      kind: "theory",
      heading: "Powers of negative numbers",
      paragraphs: [
        "A power represents repeated multiplication. In $(-4)^3$, the base is −4 because the negative sign is inside the parentheses. Thus $(-4)^3=(-4)(-4)(-4)=-64$.",
        "When the exponent is even, a negative base produces a positive value. When the exponent is odd, it produces a negative value.",
        "Without parentheses, standard order of operations evaluates the exponent before the leading negative sign. Therefore $-4^2=-(4^2)=-16$, whereas $(-4)^2=16$.",
      ],
    },
    {
      kind: "table",
      heading: "Parentheses change the base",
      headers: ["Expression", "Repeated form", "Value"],
      rows: [
        ["$(-3)^2$", "$(-3)(-3)$", "$9$"],
        ["$-3^2$", "$-(3\times3)$", "$-9$"],
        ["$(-2)^3$", "$(-2)(-2)(-2)$", "$-8$"],
        ["$-2^3$", "$-(2\times2\times2)$", "$-8$"],
        ["$(-1)^8$", "Eight negative factors", "$1$"],
      ],
    },
    {
      kind: "theory",
      heading: "Order of operations with integers",
      paragraphs: [
        "Use the normal order of operations: brackets, exponents, multiplication and division from left to right, then addition and subtraction from left to right. Signed values do not create a new order; they only require careful reading of signs and parentheses.",
      ],
    },
    {
      kind: "example",
      prompt: "Evaluate $18\div(-3)+2(-5)$.",
      steps: [
        "Perform division and multiplication first: $18\div(-3)=-6$ and $2(-5)=-10$.",
        "Then add: $-6+(-10)=-16$.",
      ],
      answer: "$18\div(-3)+2(-5)=-16$.",
    },
    {
      kind: "example",
      prompt: "Evaluate $-3^2+(-2)^3$.",
      steps: [
        "Exponent first: $-3^2=-(3^2)=-9$.",
        "The negative base is inside parentheses: $(-2)^3=-8$.",
        "Add: $-9+(-8)=-17$.",
      ],
      answer: "$-3^2+(-2)^3=-17$.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Repeated financial changes",
          text: "A fee of ₹12 charged for 6 months can be modelled as $6\times(-12)=-72$ rupees.",
        },
        {
          area: "Temperature",
          text: "A drop of 3°C each hour for 5 hours is $5\times(-3)=-15$°C overall.",
        },
        {
          area: "Depth and motion",
          text: "A diver descending 4 metres per minute for 7 minutes changes elevation by $7\times(-4)=-28$ metres.",
        },
        {
          area: "Rate sharing",
          text: "A total loss can be divided equally across periods or accounts using signed division.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Assuming every product containing a negative number is negative.",
          right:
            "Two negative factors give a positive product; count how many negative factors appear.",
        },
        {
          wrong: "Writing $(-5)^2=-25$.",
          right: "$(-5)^2=(-5)(-5)=25$ because the exponent is even.",
        },
        {
          wrong: "Treating $-5^2$ and $(-5)^2$ as identical.",
          right:
            "$-5^2=-25$, while $(-5)^2=25$. Parentheses determine whether the sign belongs to the base.",
        },
        {
          wrong: "Saying $0\div0=0$ because zero divided by a number is zero.",
          right: "The divisor must be non-zero. $0\div0$ is undefined.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Guided practice",
      stepKey: "integerRulesPractice",
      questions: [
        {
          prompt: "Calculate $(-7)\times8$.",
          options: ["−56", "−15", "15", "56"],
          answer: 0,
          explanation: "Different signs give a negative result; $7\times8=56$.",
        },
        {
          prompt: "Calculate $(-9)\times(-6)$.",
          options: ["−54", "−15", "15", "54"],
          answer: 3,
          explanation: "Same signs give a positive result; $9\times6=54$.",
        },
        {
          prompt: "Calculate $84\div(-7)$.",
          options: ["−12", "−7", "7", "12"],
          answer: 0,
          explanation: "Different signs give a negative quotient; $84\div7=12$.",
        },
        {
          prompt: "Calculate $-132\div(-11)$.",
          options: ["−12", "−11", "11", "12"],
          answer: 3,
          explanation: "Same signs give a positive quotient; $132\div11=12$.",
        },
        {
          prompt: "Evaluate $(-4)^2$.",
          options: ["−16", "−8", "8", "16"],
          answer: 3,
          explanation: "The negative base is multiplied twice: $(-4)(-4)=16$.",
        },
        {
          prompt: "Evaluate $-4^2$.",
          options: ["−16", "−8", "8", "16"],
          answer: 0,
          explanation: "The exponent applies to 4 before the leading negative: $-(4^2)=-16$.",
        },
        {
          prompt: "What is the sign of $(-2)(-3)(-4)(-5)$?",
          options: ["Positive", "Negative", "Zero", "Undefined"],
          answer: 0,
          explanation: "Four negative factors is an even number, so the product is positive.",
        },
        {
          prompt: "Evaluate $24\div(-6)+(-3)(2)$.",
          options: ["−10", "−2", "2", "10"],
          answer: 0,
          explanation: "$24\div(-6)=-4$ and $(-3)(2)=-6$, so the total is −10.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "For multiplication and division, same signs give positive results and different signs give negative results.",
        "Calculate the sign separately from the absolute-value calculation.",
        "Division by zero is undefined, while zero divided by a non-zero number is zero.",
        "An even number of negative factors gives a positive product; an odd number gives a negative product.",
        "For a negative base in parentheses, even powers are positive and odd powers are negative.",
        "Parentheses matter: $(-a)^2=a^2$, but $-a^2=-(a^2)$.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Integer multiplication and division mastery quiz",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "What is $(-13)(5)$?",
          options: ["−65", "−18", "18", "65"],
          answer: 0,
          marks: 1,
          explanation: "Different signs give a negative product, and $13\times5=65$.",
        },
        {
          type: "mc",
          prompt: "What is $(-12)(-9)$?",
          options: ["−108", "−21", "21", "108"],
          answer: 3,
          marks: 1,
          explanation: "Two negative factors give a positive product: 108.",
        },
        {
          type: "tf",
          prompt: "$-72\div(-8)=-9$.",
          answer: false,
          marks: 1,
          explanation: "Same signs give a positive quotient, so the value is 9.",
        },
        {
          type: "mc",
          prompt: "Which expression is undefined?",
          options: ["$0\div5$", "$5\div0$", "$0\times5$", "$5\times0$"],
          answer: 1,
          marks: 1,
          explanation: "Division by zero is undefined.",
        },
        {
          type: "matching",
          prompt: "Match each expression to its value.",
          left: ["$(-3)^2$", "$-3^2$", "$(-2)^3$", "$-2^4$"],
          options: ["−16", "−9", "−8", "9"],
          answer: [3, 1, 2, 0],
          marks: 4,
          explanation: "Parentheses decide whether the negative sign is part of the base.",
        },
        {
          type: "multi",
          prompt: "Select all expressions with positive values.",
          options: ["$(-4)(-5)$", "$(-4)(5)$", "$-30\div(-6)$", "$(-2)^5$"],
          answers: [0, 2],
          marks: 2,
          explanation:
            "The first has two negatives and the third divides two negatives; both are positive.",
        },
        {
          type: "tf",
          prompt: "A product of five negative non-zero factors is negative.",
          answer: true,
          marks: 1,
          explanation: "Five is odd, so one negative sign remains unpaired.",
        },
        {
          type: "mc",
          prompt: "Evaluate $(-2)^4-3(-5)$.",
          options: ["1", "16", "31", "−31"],
          answer: 2,
          marks: 1,
          explanation: "$(-2)^4=16$ and $3(-5)=-15$, so $16-(-15)=31$.",
        },
        {
          type: "mc",
          prompt: "A temperature falls 4°C each hour for 6 hours. What is the total change?",
          options: ["−24°C", "−10°C", "10°C", "24°C"],
          answer: 0,
          marks: 1,
          explanation: "$6\times(-4)=-24$°C.",
        },
        {
          type: "tf",
          prompt: "Multiplication of integers is commutative: $ab=ba$.",
          answer: true,
          marks: 1,
          explanation:
            "Changing the factor order does not change the product, including with signed integers.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "integerRulesExplorer", label: "Use both modes of the sign-rule laboratory" },
        { key: "integerRulesPractice", label: "Answer all guided-practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
