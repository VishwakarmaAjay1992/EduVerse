import type { LessonContent } from "@/lib/lesson-content-types";

export const solvingOneStepAndTwoStepEquations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "introduction-to-algebraic-thinking",
  lessonSlug: "solving-one-step-and-two-step-equations",
  title: "Solving One-Step and Two-Step Equations",
  objectives: [
    "Explain an equation as a statement of equality",
    "Use a balance model to justify applying the same operation to both sides",
    "Solve one-step equations using inverse operations",
    "Solve two-step equations in a logical reverse order",
    "Solve equations involving negative coefficients and answers",
    "Check a solution by substitution into the original equation",
    "Form equations from short verbal and real-life problems",
    "Distinguish expressions, equations and solutions",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "An equation states that two expressions have the same value. Solving an equation means finding every value of the variable that makes that statement true.",
        "The central idea is balance: whatever operation you perform on one side of an equation must also be performed on the other. Inverse operations then allow you to undo the operations surrounding the variable.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Solution of an equation",
      body: "A solution is a value that makes an equation true. For example, $x=4$ is the solution of $x+3=7$ because substituting 4 gives the true statement $4+3=7$.",
    },
    {
      kind: "theory",
      heading: "Equations as balanced statements",
      paragraphs: [
        "The equals sign does not mean ‘the answer comes next’. It means that the complete expression on the left has the same value as the complete expression on the right.",
        "Imagine an equation as a balanced scale. Removing 5 from only one side would destroy the balance, but subtracting 5 from both sides preserves equality. This is why each algebraic step must act on both sides.",
      ],
    },
    {
      kind: "formula",
      latex: "a=b\;\Longrightarrow\;a+c=b+c",
      caption: "Adding the same quantity to both sides preserves equality.",
    },
    {
      kind: "formula",
      latex: "a=b\;\Longrightarrow\;ac=bc",
      caption:
        "Multiplying both sides by the same quantity preserves equality. For division, the divisor must not be zero.",
    },
    {
      kind: "table",
      heading: "Inverse operations",
      headers: ["Operation around the variable", "Inverse operation", "Example"],
      rows: [
        ["Add 7", "Subtract 7", "$x+7=12\Rightarrow x=5$"],
        ["Subtract 4", "Add 4", "$x-4=9\Rightarrow x=13$"],
        ["Multiply by 6", "Divide by 6", "$6x=30\Rightarrow x=5$"],
        ["Divide by 3", "Multiply by 3", "$x/3=8\Rightarrow x=24$"],
        ["Multiply by −2", "Divide by −2", "$-2x=10\Rightarrow x=-5$"],
      ],
      note: "Inverse operations undo one another. The operation is applied to both sides, not just to the side containing x.",
    },
    {
      kind: "theory",
      heading: "Solving one-step addition and subtraction equations",
      paragraphs: [
        "A one-step equation needs one inverse operation to isolate the variable. Write the same operation on both sides and simplify. Keeping the work aligned vertically makes the balance visible.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $x+9=17$.",
      steps: ["Subtract 9 from both sides: $x+9-9=17-9$.", "Simplify: $x=8$."],
      answer: "$x=8$. Check: $8+9=17$.",
    },
    {
      kind: "example",
      prompt: "Solve $y-6=11$.",
      steps: ["Add 6 to both sides: $y-6+6=11+6$.", "Simplify: $y=17$."],
      answer: "$y=17$. Check: $17-6=11$.",
    },
    {
      kind: "example",
      prompt: "Solve $-4+a=-10$.",
      steps: ["The equation is equivalent to $a-4=-10$.", "Add 4 to both sides: $a=-6$."],
      answer: "$a=-6$. Check: $-4+(-6)=-10$.",
    },
    {
      kind: "theory",
      heading: "Solving one-step multiplication and division equations",
      paragraphs: [
        "When a variable is multiplied by a coefficient, divide both sides by that coefficient. When it is divided by a number, multiply both sides by that number.",
        "Pay particular attention to negative coefficients. Dividing a positive number by a negative number gives a negative answer, and dividing two negative numbers gives a positive answer.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $7x=42$.",
      steps: ["Divide both sides by 7: $7x/7=42/7$.", "Simplify: $x=6$."],
      answer: "$x=6$.",
    },
    {
      kind: "example",
      prompt: "Solve $-3m=18$.",
      steps: [
        "Divide both sides by −3.",
        "$m=18/(-3)$.",
        "A positive divided by a negative is negative.",
      ],
      answer: "$m=-6$. Check: $-3(-6)=18$.",
    },
    {
      kind: "example",
      prompt: "Solve $p/5=-4$.",
      steps: ["Multiply both sides by 5: $5(p/5)=5(-4)$.", "Simplify: $p=-20$."],
      answer: "$p=-20$.",
    },
    {
      kind: "equationBalanceExplorer",
      heading: "Interactive equation balance laboratory",
    },
    {
      kind: "theory",
      heading: "Solving two-step equations",
      paragraphs: [
        "A two-step equation such as $3x+5=20$ contains two operations acting on x: multiplication by 3 and then addition of 5. To solve, undo the operations in reverse order: remove the added 5 first, then remove the multiplication by 3.",
        "A reliable goal is to isolate the variable term first, then isolate the variable itself. Simplify after each balanced operation.",
      ],
      list: [
        "First remove the constant added to or subtracted from the variable term.",
        "Then divide by the coefficient of the variable.",
        "If the equation is written in a different order, identify the operations rather than relying on appearance.",
        "Check the final value in the original equation.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $3x+5=20$.",
      steps: [
        "Subtract 5 from both sides: $3x=15$.",
        "Divide both sides by 3: $x=5$.",
        "Check: $3(5)+5=15+5=20$.",
      ],
      answer: "$x=5$.",
    },
    {
      kind: "example",
      prompt: "Solve $4y-7=21$.",
      steps: ["Add 7 to both sides: $4y=28$.", "Divide by 4: $y=7$.", "Check: $4(7)-7=28-7=21$."],
      answer: "$y=7$.",
    },
    {
      kind: "example",
      prompt: "Solve $6-2a=-8$.",
      steps: [
        "Subtract 6 from both sides: $-2a=-14$.",
        "Divide both sides by −2: $a=7$.",
        "Check: $6-2(7)=6-14=-8$.",
      ],
      answer: "$a=7$.",
    },
    {
      kind: "example",
      prompt: "Solve $x/4+3=8$.",
      steps: [
        "Subtract 3 from both sides: $x/4=5$.",
        "Multiply both sides by 4: $x=20$.",
        "Check: $20/4+3=5+3=8$.",
      ],
      answer: "$x=20$.",
    },
    {
      kind: "theory",
      heading: "Checking a solution",
      paragraphs: [
        "To check a solution, substitute it into the original equation—not a later simplified line. Evaluate the left and right sides separately. If they match, the value satisfies the equation.",
        "A check is especially valuable when negative signs or division are involved. It can expose an arithmetic error even if the algebraic method was correct.",
      ],
    },
    {
      kind: "table",
      heading: "A complete solution check",
      headers: ["Step", "For $5x-4=26$"],
      rows: [
        ["Proposed solution", "$x=6$"],
        ["Left side", "$5(6)-4=30-4=26$"],
        ["Right side", "$26$"],
        ["Conclusion", "Left side = right side, so $x=6$ is correct"],
      ],
    },
    {
      kind: "theory",
      heading: "Forming equations from words",
      paragraphs: [
        "Choose a variable for the unknown, translate the relationships into an equation, solve it, and finally interpret the answer in its original context.",
        "The equals sign normally comes from phrases such as ‘is’, ‘equals’, ‘gives’, ‘has a total of’ or ‘costs altogether’. Units belong in the final interpreted answer, even though they are often omitted during the algebraic steps.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A taxi charges a fixed fee of 8 riyals plus 3 riyals per kilometre. A trip costs 29 riyals. Find the distance.",
      steps: [
        "Let $d$ be the distance in kilometres.",
        "Fixed fee plus distance charge equals total: $8+3d=29$.",
        "Subtract 8: $3d=21$.",
        "Divide by 3: $d=7$.",
      ],
      answer: "The journey was 7 km.",
    },
    {
      kind: "example",
      prompt:
        "Three identical notebooks and a 2-riyal bag cost 26 riyals. Find the cost of one notebook.",
      steps: [
        "Let $n$ be the price of one notebook.",
        "The equation is $3n+2=26$.",
        "Subtract 2: $3n=24$.",
        "Divide by 3: $n=8$.",
      ],
      answer: "Each notebook costs 8 riyals.",
    },
    {
      kind: "realWorld",
      heading: "Where simple equations appear",
      items: [
        {
          area: "Shopping",
          text: "Find an unknown item price from a total bill and fixed delivery charge.",
        },
        { area: "Travel", text: "Find distance or time from a fixed starting fee plus a rate." },
        {
          area: "Temperature",
          text: "Rearrange a simple conversion rule to recover an original temperature.",
        },
        { area: "Geometry", text: "Use a perimeter equation to find an unknown side length." },
        {
          area: "Savings",
          text: "Find how many equal weekly deposits are needed after an initial amount.",
        },
        {
          area: "Science",
          text: "Substitute known quantities and solve formulas for an unknown measurement.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Changing one side only, such as $x+5=12\Rightarrow x=12-5$ without recognising the same subtraction on both sides.",
          right: "Think explicitly: subtract 5 from both sides to preserve equality.",
        },
        {
          wrong: "For $3x+4=19$, dividing by 3 before removing 4.",
          right: "Undo the final addition first: subtract 4, then divide by 3.",
        },
        { wrong: "Solving $-4x=20$ as $x=5$.", right: "Divide by −4, giving $x=-5$." },
        {
          wrong: "Checking in a simplified line only.",
          right: "Substitute into the original equation and compare both sides.",
        },
        {
          wrong: "Writing an expression when a word problem needs an equation.",
          right: "Use the total or equality statement to include an equals sign.",
        },
        {
          wrong: "Dropping units from the final contextual answer.",
          right: "State what the numerical solution represents, with appropriate units.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: solving and checking equations",
      stepKey: "equationPractice",
      questions: [
        {
          prompt: "Solve $x+7=15$.",
          options: ["x = 8", "x = 22", "x = −8", "x = 7"],
          answer: 0,
          explanation: "Subtract 7 from both sides: x = 8.",
        },
        {
          prompt: "Solve $a-9=-2$.",
          options: ["a = −11", "a = −7", "a = 7", "a = 11"],
          answer: 2,
          explanation: "Add 9 to both sides: a = 7.",
        },
        {
          prompt: "Solve $6m=54$.",
          options: ["m = 6", "m = 8", "m = 9", "m = 48"],
          answer: 2,
          explanation: "Divide both sides by 6: m = 9.",
        },
        {
          prompt: "Solve $-5p=35$.",
          options: ["p = −7", "p = 7", "p = −40", "p = 30"],
          answer: 0,
          explanation: "35 divided by −5 is −7.",
        },
        {
          prompt: "Solve $y/3=8$.",
          options: ["y = 5", "y = 11", "y = 24", "y = 8/3"],
          answer: 2,
          explanation: "Multiply both sides by 3: y = 24.",
        },
        {
          prompt: "Solve $2x+5=17$.",
          options: ["x = 5", "x = 6", "x = 8.5", "x = 11"],
          answer: 1,
          explanation: "Subtract 5 to get 2x = 12, then divide by 2.",
        },
        {
          prompt: "Solve $4a-3=25$.",
          options: ["a = 5.5", "a = 7", "a = 22", "a = 28"],
          answer: 1,
          explanation: "Add 3 to get 4a = 28, then divide by 4.",
        },
        {
          prompt: "Which equation represents ‘twice a number plus 4 is 18’?",
          options: ["2(x + 4) = 18", "2x + 4 = 18", "x + 8 = 18", "2x = 22"],
          answer: 1,
          explanation: "Twice the number is 2x, then 4 is added.",
        },
        {
          prompt: "Which value checks correctly in $3x-2=13$?",
          options: ["x = 3", "x = 4", "x = 5", "x = 6"],
          answer: 2,
          explanation: "$3(5)-2=15-2=13$.",
        },
        {
          prompt: "A number divided by 4, then increased by 2, equals 7. What is the number?",
          options: ["5", "12", "20", "36"],
          answer: 2,
          explanation: "$x/4+2=7$, so $x/4=5$ and x = 20.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "An equation states that its left and right expressions are equal.",
        "A solution makes the original equation true.",
        "Applying the same valid operation to both sides preserves equality.",
        "Inverse operations isolate the variable in one-step equations.",
        "For two-step equations, undo addition or subtraction before multiplication or division.",
        "Negative coefficients require careful sign arithmetic.",
        "Check solutions by substituting into the original equation.",
        "For word problems, define a variable, form an equation, solve and interpret the result.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: One-Step and Two-Step Equations",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Solve $x-12=5$.",
          options: ["x = −7", "x = 7", "x = 17", "x = 60"],
          answer: 2,
          marks: 2,
          explanation: "Add 12 to both sides, giving x = 17.",
        },
        {
          type: "mc",
          prompt: "Solve $-4y=28$.",
          options: ["y = −7", "y = 7", "y = −32", "y = 24"],
          answer: 0,
          marks: 2,
          explanation: "Divide both sides by −4: y = −7.",
        },
        {
          type: "tf",
          prompt: "Adding the same number to both sides of an equation preserves equality.",
          answer: true,
          marks: 1,
          explanation:
            "The balance remains unchanged when the same operation is applied to both sides.",
        },
        {
          type: "mc",
          prompt: "Solve $5x+3=23$.",
          options: ["x = 4", "x = 5", "x = 20", "x = 26/5"],
          answer: 0,
          marks: 3,
          explanation: "Subtract 3 to get 5x = 20, then divide by 5.",
        },
        {
          type: "mc",
          prompt: "Solve $7-3a=-11$.",
          options: ["a = −6", "a = 4/3", "a = 6", "a = 18"],
          answer: 2,
          marks: 3,
          explanation: "Subtract 7: −3a = −18. Divide by −3: a = 6.",
        },
        {
          type: "matching",
          prompt: "Match each equation to its solution.",
          left: ["$x+4=10$", "$3x=21$", "$x/5=3$", "$2x-1=9$"],
          options: ["$x=6$", "$x=7$", "$x=15$", "$x=5$"],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation: "Use the inverse operation or operations for each equation.",
        },
        {
          type: "multi",
          prompt: "Which values satisfy their stated equations?",
          options: [
            "$x=4$ for $2x+1=9$",
            "$x=-3$ for $5-x=8$",
            "$x=6$ for $x/2+1=4$",
            "$x=2$ for $3x-1=8$",
          ],
          answers: [0, 1, 2],
          marks: 3,
          explanation: "Substitution confirms the first three. For the last, 3(2) − 1 = 5, not 8.",
        },
        {
          type: "tf",
          prompt: "The first step in solving $4x+7=31$ should be to divide both sides by 4.",
          answer: false,
          marks: 1,
          explanation: "Undo the added 7 first, then divide by 4.",
        },
        {
          type: "mc",
          prompt:
            "Which equation models: ‘Four identical pens and a 3-riyal folder cost 27 riyals’?",
          options: ["4(p+3)=27", "4p+3=27", "p+12=27", "3p+4=27"],
          answer: 1,
          marks: 2,
          explanation: "Four pens cost 4p and the folder adds 3 once.",
        },
        {
          type: "mc",
          prompt: "Solve $x/6-2=3$.",
          options: ["x = 6", "x = 18", "x = 30", "x = 36"],
          answer: 2,
          marks: 3,
          explanation: "Add 2 to obtain x/6 = 5, then multiply by 6.",
        },
        {
          type: "multi",
          prompt: "Select every valid way to check the proposed solution $x=5$ for $3x+2=17$.",
          options: [
            "Substitute 5 into the original left side",
            "Calculate $3(5)+2$ and compare it with 17",
            "Check only that 5 is positive",
            "Verify that the left and right sides both equal 17",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "A check requires substitution and comparison of the two sides.",
        },
        {
          type: "mc",
          prompt:
            "A gym charges 15 riyals entry plus 5 riyals per activity. A visit costs 40 riyals. How many activities were completed?",
          options: ["3", "5", "8", "11"],
          answer: 1,
          marks: 3,
          explanation: "$15+5a=40$, so $5a=25$ and a = 5.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "equationBalanceExplorer",
          label: "Use the interactive equation balance laboratory",
        },
        { key: "equationPractice", label: "Answer every practice question" },
      ],
      requireQuizPass: true,
    },
  ],
};
