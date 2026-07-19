import type { LessonContent } from "@/lib/lesson-content-types";

export const integersAndTheNumberLine: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "integers-and-rational-numbers",
  lessonSlug: "integers-and-the-number-line",
  title: "Integers and the Number Line",
  objectives: [
    "Recognise positive integers, negative integers and zero",
    "Locate and compare integers on a number line",
    "Identify opposite integers and additive inverses",
    "Interpret absolute value as distance from zero",
    "Add integers using number-line movement and sign reasoning",
    "Subtract integers by adding the opposite",
    "Apply integers to temperature, elevation, money and scoring contexts",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Whole-number arithmetic describes quantities we have, but many real situations also need numbers below zero: temperatures below freezing, floors below ground, debts, losses and elevations below sea level. Integers extend the whole numbers in both directions and give us a precise language for these situations.",
        "The number line is the central picture for this lesson. It shows order, distance, opposites, addition and subtraction in one connected model.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Integer",
      body: "An integer is a whole number, its negative, or zero. The integers are $\ldots,-3,-2,-1,0,1,2,3,\ldots$ They do not include fractions or decimals such as $\frac12$, $2.7$ or $-0.4$.",
    },
    {
      kind: "cards",
      heading: "The three parts of the integer family",
      columns: 3,
      items: [
        {
          title: "Negative integers",
          icon: "ArrowDown",
          value: "… −3, −2, −1",
          text: "Numbers less than zero. A negative sign shows position below or to the left of zero.",
        },
        {
          title: "Zero",
          icon: "CircleDot",
          value: "0",
          text: "Neither positive nor negative. Zero is the boundary between the two directions.",
        },
        {
          title: "Positive integers",
          icon: "ArrowUp",
          value: "1, 2, 3 …",
          text: "Numbers greater than zero. The plus sign is usually omitted, so +5 is normally written 5.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "Reading a number line",
      paragraphs: [
        "A number line places numbers in increasing order from left to right. Every step has equal size. Moving right means the value increases; moving left means it decreases.",
        "The arrows at both ends remind us that the integers continue forever. There is no greatest or smallest integer: after any integer you can always find one more to the right and one more to the left.",
      ],
      list: [
        "Numbers to the right are greater.",
        "Numbers to the left are smaller.",
        "Zero is the origin and separates positive from negative integers.",
        "The spacing represents numerical distance, not the physical size of the printed labels.",
      ],
    },
    {
      kind: "figure",
      caption:
        "On a number line, −4 lies left of 0, so −4 < 0. The highlighted point is four units from zero.",
      figure: { type: "numberLine", min: -8, max: 8, step: 1, highlight: -4 },
    },
    {
      kind: "theory",
      heading: "Opposites and additive inverses",
      paragraphs: [
        "Two integers are opposites when they are the same distance from zero on opposite sides. For example, 6 and −6 are opposites. The opposite of a number $a$ is written $-a$.",
        "Opposites are also called additive inverses because their sum is zero. Thus $8+(-8)=0$ and $-13+13=0$.",
      ],
    },
    {
      kind: "formula",
      latex: "a+(-a)=0",
      caption: "Every integer plus its opposite equals zero.",
    },
    {
      kind: "theory",
      heading: "Absolute value: distance from zero",
      paragraphs: [
        "The absolute value of a number is its distance from zero on the number line. It is written with vertical bars. Distance is non-negative, so $|-7|=7$ and $|7|=7$.",
        "Absolute value removes information about direction but keeps information about size. A temperature change of −6°C has magnitude 6°C, even though its direction is downward.",
      ],
    },
    {
      kind: "formula",
      latex: "|a|=\begin{cases}a,&a\ge 0\\-a,&a<0\end{cases}",
      caption: "Absolute value returns the non-negative distance of $a$ from zero.",
    },
    {
      kind: "table",
      heading: "Integer language",
      headers: ["Statement", "Symbolic form", "Meaning"],
      rows: [
        ["5 is greater than −2", "$5>-2$", "5 is farther right on the number line"],
        ["−8 is less than −3", "$-8<-3$", "−8 is farther left"],
        ["The opposite of −11", "$-(-11)=11$", "Reflect −11 across zero"],
        ["Distance of −9 from zero", "$|-9|=9$", "Absolute value is 9"],
        ["Distance between −2 and 6", "$|6-(-2)|=8$", "The points are 8 units apart"],
      ],
    },
    {
      kind: "theory",
      heading: "Ordering negative integers",
      paragraphs: [
        "Negative numbers can feel reversed at first. Among negative integers, the number with the larger absolute value is actually smaller because it lies farther left. For example, $-12<-5$ even though 12 is greater than 5.",
        "A reliable method is to imagine or sketch the number line rather than comparing only the digits.",
      ],
    },
    {
      kind: "example",
      prompt: "Arrange $4,-7,0,-2,9$ from least to greatest.",
      steps: [
        "Place the values mentally on a number line.",
        "The farthest-left value is −7, followed by −2.",
        "Zero comes next, then the positive values 4 and 9.",
      ],
      answer: "$-7,-2,0,4,9$.",
    },
    {
      kind: "example",
      prompt: "Compare $-14$ and $-9$ using $<$ or $>$.",
      steps: [
        "Both numbers are negative.",
        "−14 lies farther left than −9 because it is farther below zero.",
      ],
      answer: "$-14<-9$.",
    },
    {
      kind: "example",
      prompt: "Evaluate $|-18|$, $|6|$ and $|0|$.",
      steps: [
        "−18 is 18 units from zero, so $|-18|=18$.",
        "6 is 6 units from zero, so $|6|=6$.",
        "Zero is 0 units from itself, so $|0|=0$.",
      ],
      answer: "The values are 18, 6 and 0.",
    },
    {
      kind: "theory",
      heading: "Adding integers",
      paragraphs: [
        "On a number line, adding a positive integer moves right and adding a negative integer moves left. For example, $-2+5$ starts at −2 and moves five units right to 3. The expression $4+(-7)$ starts at 4 and moves seven units left to −3.",
        "The same-sign and different-sign rules summarize this movement when the numbers are large.",
      ],
      list: [
        "Same signs: add the absolute values and keep the common sign.",
        "Different signs: subtract the smaller absolute value from the larger and keep the sign of the number with larger absolute value.",
        "Adding zero leaves a number unchanged: $a+0=a$.",
      ],
    },
    {
      kind: "comparison",
      heading: "Two addition patterns",
      left: {
        title: "Same signs",
        items: ["$6+4=10$", "$-6+(-4)=-10$", "Add magnitudes; keep the sign."],
      },
      right: {
        title: "Different signs",
        items: [
          "$9+(-4)=5$",
          "$-9+4=-5$",
          "Subtract magnitudes; keep the sign of the larger magnitude.",
        ],
      },
    },
    {
      kind: "theory",
      heading: "Subtracting integers",
      paragraphs: [
        "Subtraction can always be rewritten as addition of the opposite. This single rule avoids memorising separate cases: keep the first number, change subtraction to addition, and replace the second number with its opposite.",
      ],
    },
    {
      kind: "formula",
      latex: "a-b=a+(-b)",
      caption: "Subtracting a number is equivalent to adding its opposite.",
    },
    {
      kind: "integerNumberLineExplorer",
      heading: "Interactive integer number-line laboratory",
    },
    {
      kind: "example",
      prompt: "Calculate $-7+12$.",
      steps: [
        "The signs differ, so subtract absolute values: $12-7=5$.",
        "12 has the larger absolute value and is positive, so the result is positive.",
      ],
      answer: "$-7+12=5$.",
    },
    {
      kind: "example",
      prompt: "Calculate $-8+(-15)$.",
      steps: [
        "Both integers are negative, so add their absolute values: $8+15=23$.",
        "Keep the common negative sign.",
      ],
      answer: "$-8+(-15)=-23$.",
    },
    {
      kind: "example",
      prompt: "Calculate $6-(-9)$.",
      steps: [
        "Rewrite subtraction as addition of the opposite: $6-(-9)=6+(+9)$.",
        "Add: $6+9=15$.",
      ],
      answer: "$6-(-9)=15$.",
    },
    {
      kind: "example",
      prompt: "The temperature is −3°C and falls by 7°C. What is the new temperature?",
      steps: [
        "A fall of 7°C means subtract 7: $-3-7$.",
        "Rewrite or use the number line: $-3+(-7)=-10$.",
      ],
      answer: "The new temperature is −10°C.",
    },
    {
      kind: "realWorld",
      heading: "Integers in everyday decisions",
      items: [
        {
          area: "Temperature",
          text: "Temperatures below freezing are negative. A rise is addition; a fall is subtraction.",
        },
        {
          area: "Money",
          text: "A positive balance represents money available, while debt or overdraft can be represented by a negative balance.",
        },
        {
          area: "Elevation",
          text: "Locations above sea level use positive elevations; mines and trenches below sea level use negative elevations.",
        },
        {
          area: "Games and sport",
          text: "Penalties, gains and losses can be combined using signed scores.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Thinking −12 is greater than −5 because 12 is greater than 5.",
          right: "On the number line, −12 is farther left, so $-12<-5$.",
        },
        {
          wrong: "Writing $|-8|=-8$.",
          right: "Absolute value is distance, so $|-8|=8$.",
        },
        {
          wrong: "Treating $5-(-3)$ as $5-3$.",
          right: "Subtracting a negative means adding its opposite: $5-(-3)=5+3=8$.",
        },
        {
          wrong: "Adding magnitudes for every pair of signed numbers.",
          right:
            "With different signs, subtract the magnitudes and keep the sign of the larger magnitude.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Guided practice",
      stepKey: "integerNumberLinePractice",
      questions: [
        {
          prompt: "Which integer is farthest left on a number line?",
          options: ["−2", "5", "−9", "0"],
          answer: 2,
          explanation: "−9 is the smallest value, so it is farthest left.",
        },
        {
          prompt: "What is the opposite of −17?",
          options: ["−17", "17", "0", "1/17"],
          answer: 1,
          explanation: "17 is the same distance from zero on the opposite side.",
        },
        {
          prompt: "Evaluate $|-24|$.",
          options: ["−24", "24", "0", "1"],
          answer: 1,
          explanation: "−24 is 24 units from zero.",
        },
        {
          prompt: "Calculate $-5+13$.",
          options: ["−18", "−8", "8", "18"],
          answer: 2,
          explanation: "The signs differ: $13-5=8$, with the positive sign.",
        },
        {
          prompt: "Calculate $-11+(-6)$.",
          options: ["−17", "−5", "5", "17"],
          answer: 0,
          explanation: "Same negative signs: add 11 and 6, then keep the negative sign.",
        },
        {
          prompt: "Calculate $9-14$.",
          options: ["23", "5", "−5", "−23"],
          answer: 2,
          explanation: "$9-14=9+(-14)=-5$.",
        },
        {
          prompt: "Calculate $-4-(-10)$.",
          options: ["−14", "−6", "6", "14"],
          answer: 2,
          explanation: "$-4-(-10)=-4+10=6$.",
        },
        {
          prompt:
            "A lift moves from floor 3 to basement level −2. How many floors downward does it travel?",
          options: ["1", "3", "5", "6"],
          answer: 2,
          explanation: "The distance is $|3-(-2)|=5$ floors.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Integers are the positive whole numbers, their negatives and zero.",
        "Values increase from left to right on a number line.",
        "Opposite integers have equal absolute value and sum to zero.",
        "Absolute value is non-negative distance from zero.",
        "To add same signs, add magnitudes and keep the sign; for different signs, subtract magnitudes and keep the sign of the larger magnitude.",
        "Rewrite subtraction as addition of the opposite: $a-b=a+(-b)$.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Integers and number-line mastery quiz",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which list is in increasing order?",
          options: ["−8, −3, 0, 5", "−3, −8, 0, 5", "5, 0, −3, −8", "0, −8, −3, 5"],
          answer: 0,
          marks: 1,
          explanation: "Increasing order follows the number line from left to right.",
        },
        {
          type: "tf",
          prompt: "$|-12|=-12$.",
          answer: false,
          marks: 1,
          explanation: "Absolute value is distance from zero, so $|-12|=12$.",
        },
        {
          type: "mc",
          prompt: "What is $-16+9$?",
          options: ["−25", "−7", "7", "25"],
          answer: 1,
          marks: 1,
          explanation:
            "Different signs: $16-9=7$, and −16 has the larger magnitude, so the answer is −7.",
        },
        {
          type: "mc",
          prompt: "What is $7-(-8)$?",
          options: ["−1", "1", "15", "−15"],
          answer: 2,
          marks: 1,
          explanation: "$7-(-8)=7+8=15$.",
        },
        {
          type: "matching",
          prompt: "Match each expression to its value.",
          left: ["$|-6|$", "$-3+8$", "$4-11$", "$-5-(-2)$"],
          options: ["−7", "−3", "5", "6"],
          answer: [3, 2, 0, 1],
          marks: 4,
          explanation: "The values are 6, 5, −7 and −3 respectively.",
        },
        {
          type: "multi",
          prompt: "Select all statements that are true.",
          options: ["$-10<-4$", "$|-9|=9$", "$-2+(-5)=7$", "$3-(-4)=7$"],
          answers: [0, 1, 3],
          marks: 2,
          explanation: "The first, second and fourth statements are true; $-2+(-5)=-7$.",
        },
        {
          type: "tf",
          prompt: "Zero is a positive integer.",
          answer: false,
          marks: 1,
          explanation: "Zero is an integer but is neither positive nor negative.",
        },
        {
          type: "mc",
          prompt: "A bank balance changes from ₹25 to −₹10. What is the change?",
          options: ["A gain of ₹15", "A loss of ₹15", "A loss of ₹35", "A gain of ₹35"],
          answer: 2,
          marks: 1,
          explanation: "$-10-25=-35$, so the balance decreased by ₹35.",
        },
        {
          type: "mc",
          prompt: "Which expression represents moving 6 units left from −2?",
          options: ["$-2+6$", "$-2-6$", "$2-6$", "$6-(-2)$"],
          answer: 1,
          marks: 1,
          explanation: "Moving left means subtracting 6: $-2-6=-8$.",
        },
        {
          type: "tf",
          prompt: "Every integer has an opposite integer.",
          answer: true,
          marks: 1,
          explanation: "The opposite of $a$ is $-a$; zero is its own opposite.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "integerNumberLineExplorer",
          label: "Use both modes of the integer number-line explorer",
        },
        { key: "integerNumberLinePractice", label: "Answer all guided-practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
