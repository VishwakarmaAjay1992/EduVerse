import type { LessonContent } from "@/lib/lesson-content-types";

export const solvingLinearEquations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "linear-equations-and-inequalities",
  lessonSlug: "solving-linear-equations",
  title: "Solving Linear Equations",
  objectives: [
    "Identify the variable, constants, coefficients and terms in a linear equation.",
    "Solve one-step and two-step linear equations using inverse operations.",
    "Solve equations that contain brackets by distributing first.",
    "Solve equations that contain fractions or decimals.",
    "Solve equations with the variable on both sides.",
    "Recognise equations with no solution and equations with infinitely many solutions.",
    "Check a solution by substituting it back into the original equation.",
    "Set up and solve linear equations from short real-life situations.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A linear equation is a statement that two expressions are equal, where the variable appears only to the first power — no $x^2$, no $\\sqrt{x}$, no $x$ in a denominator. Solving one means finding the value (or values) of the variable that make the statement true.",
        "This lesson builds a complete toolkit: undoing one and two operations, clearing brackets, clearing fractions and decimals, collecting variable terms from both sides, and recognising the two special cases where an equation has no solution or infinitely many. Every technique rests on a single idea — keep both sides equal by doing the same thing to each.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes comfort with directed numbers (adding, subtracting, multiplying and dividing positives and negatives), the order of operations, and simplifying expressions by collecting like terms — for example, knowing that $3x + 2x = 5x$ but $3x + 2$ cannot be simplified further.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Equation, variable, constant, coefficient, term",
      body: "An equation states that two expressions are equal, joined by an equals sign. A variable (commonly $x$) represents an unknown value. A constant is a fixed number with no variable attached. A coefficient is the number multiplying a variable. A term is any single piece of an expression — a number, a variable, or a number times a variable — separated from other terms by $+$ or $-$. In $3x + 7 = 22$, $x$ is the variable, $3$ is its coefficient, $7$ and $22$ are constants, and $3x$, $7$ and $22$ are each terms.",
    },
    {
      kind: "theory",
      heading: "Maintaining equality on both sides",
      paragraphs: [
        "An equation is like a balanced scale: the two sides have exactly the same value. If you add, subtract, multiply or divide only one side, the scale tips and the statement becomes false. To keep it balanced, whatever operation you apply to one side must be applied to the other side too.",
        "This single rule justifies every algebraic step in this lesson. Solving an equation is really the process of applying a sequence of matched operations to both sides until the variable stands alone.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\text{If } a = b, \\text{ then } a + k = b + k, \\quad a - k = b - k, \\quad ak = bk, \\quad \\dfrac{a}{k} = \\dfrac{b}{k} \\ (k \\neq 0)",
      caption:
        "Any of these four operations, applied identically to both sides, preserves equality.",
    },
    {
      kind: "linearEquationSolverExplorer",
      heading: "Interactive: balance scale, step-by-step solver and answer checker",
    },
    {
      kind: "theory",
      heading: "One-step equations",
      paragraphs: [
        "A one-step equation needs a single inverse operation to isolate the variable. Addition is undone by subtraction, subtraction by addition, multiplication by division, and division by multiplication.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $x - 9 = 14$.",
      steps: ["Add 9 to both sides: $x - 9 + 9 = 14 + 9$.", "Simplify: $x = 23$."],
      answer: "$x = 23$. Check: $23 - 9 = 14$ ✓",
    },
    {
      kind: "theory",
      heading: "Two-step equations",
      paragraphs: [
        "A two-step equation needs two inverse operations, applied in reverse order to how the expression was built. First undo any addition or subtraction, then undo any multiplication or division of the variable.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $3x + 7 = 22$.",
      steps: ["Subtract 7 from both sides: $3x = 15$.", "Divide both sides by 3: $x = 5$."],
      answer: "$x = 5$. Check: $3(5) + 7 = 15 + 7 = 22$ ✓",
    },
    {
      kind: "theory",
      heading: "Equations with brackets",
      paragraphs: [
        "When an equation contains a bracket, distribute (multiply out) the bracket first, before doing anything else. This turns the equation into an ordinary one- or two-step form you already know how to solve.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $5(x - 2) = 25$.",
      steps: [
        "Distribute the 5 across the bracket: $5x - 10 = 25$.",
        "Add 10 to both sides: $5x = 35$.",
        "Divide both sides by 5: $x = 7$.",
      ],
      answer: "$x = 7$. Check: $5(7 - 2) = 5(5) = 25$ ✓",
    },
    {
      kind: "theory",
      heading: "Equations with fractions and decimals",
      paragraphs: [
        "A fraction in an equation is cleared using the operation that undoes it: if $x$ is divided by a number, multiply both sides by that number. Decimals can be solved directly, or cleared by multiplying both sides by a power of 10 to turn them into whole numbers first — either approach gives the same answer.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $\\dfrac{x}{3} + 4 = 10$.",
      steps: [
        "Subtract 4 from both sides: $\\dfrac{x}{3} = 6$.",
        "Multiply both sides by 3: $x = 18$.",
      ],
      answer: "$x = 18$. Check: $\\dfrac{18}{3} + 4 = 6 + 4 = 10$ ✓",
    },
    {
      kind: "example",
      prompt: "Solve $0.5x + 1.5 = 4$.",
      steps: [
        "Subtract 1.5 from both sides: $0.5x = 2.5$.",
        "Divide both sides by 0.5 (the same as multiplying by 2): $x = 5$.",
      ],
      answer: "$x = 5$. Check: $0.5(5) + 1.5 = 2.5 + 1.5 = 4$ ✓",
    },
    {
      kind: "theory",
      heading: "Variables on both sides",
      paragraphs: [
        "When the variable appears on both sides, first move every variable term to one side by adding or subtracting it from both sides. This leaves an ordinary one- or two-step equation in the remaining variable terms and constants.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $4x + 9 = 2x + 21$.",
      steps: [
        "Subtract $2x$ from both sides: $2x + 9 = 21$.",
        "Subtract 9 from both sides: $2x = 12$.",
        "Divide both sides by 2: $x = 6$.",
      ],
      answer: "$x = 6$. Check: LHS $= 4(6)+9=33$; RHS $=2(6)+21=33$ ✓",
    },
    {
      kind: "theory",
      heading: "Equations with no solution, and equations with infinitely many solutions",
      paragraphs: [
        "Sometimes, after collecting the variable terms onto one side, the variable disappears completely. What happens next reveals which special case you have.",
        "If the variable cancels and you're left with a false statement (like $4 = 9$), the equation has no solution — no value of $x$ can ever make the two original sides equal.",
        "If the variable cancels and you're left with a true statement (like $6 = 6$), the equation has infinitely many solutions — every value of $x$ makes the two sides equal, because both sides were really the same expression all along.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve $2x + 4 = 2x + 9$.",
      steps: [
        "Subtract $2x$ from both sides: $4 = 9$.",
        "This is false for any value of $x$, since 4 never equals 9.",
      ],
      answer: "No solution — the equation is never true, whatever $x$ is.",
    },
    {
      kind: "example",
      prompt: "Solve $3(x + 2) = 3x + 6$.",
      steps: [
        "Distribute the 3: $3x + 6 = 3x + 6$.",
        "Both sides are identical, so this is true for every value of $x$.",
      ],
      answer: "Infinitely many solutions — every real number satisfies this equation.",
    },
    {
      kind: "theory",
      heading: "Checking answers by substitution",
      paragraphs: [
        "Substituting your solution back into the original equation (not a simplified version) is the most reliable way to catch mistakes. Replace every instance of the variable with your answer, evaluate each side separately, and confirm they match.",
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Substitute into the original equation",
      body: "Always check against the equation as it was first given, including any brackets or fractions — checking against a line partway through your working can hide an earlier mistake.",
    },
    {
      kind: "example",
      prompt:
        "A café charges 4 riyals for delivery plus 12 riyals per meal. A customer's total bill was 64 riyals. How many meals did they order?",
      steps: [
        "Let $x$ be the number of meals. The total is $12x + 4$.",
        "Set up the equation: $12x + 4 = 64$.",
        "Subtract 4 from both sides: $12x = 60$.",
        "Divide both sides by 12: $x = 5$.",
      ],
      answer: "The customer ordered 5 meals. Check: $12(5) + 4 = 60 + 4 = 64$ ✓",
    },
    {
      kind: "realWorld",
      heading: "Where linear equations appear",
      items: [
        {
          area: "Pricing",
          text: "Finding an item's price when a discount, tax or fee is added or removed.",
        },
        {
          area: "Ages",
          text: "Working out someone's current age from a statement about the future or past.",
        },
        {
          area: "Distance",
          text: "Finding travel time or speed when total distance and a starting offset are known.",
        },
        {
          area: "Measurement",
          text: "Finding a missing length or quantity when a total and a relationship are given.",
        },
        {
          area: "Finance",
          text: "Working out how many payments are needed to clear a fixed cost plus a per-unit rate.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What must you do to both sides of an equation?",
          back: "The exact same operation — this keeps the two sides equal.",
        },
        {
          front: "First step when solving $5(x-2)=25$?",
          back: "Distribute the 5 across the bracket: $5x - 10 = 25$.",
        },
        { front: "How do you clear $x/3$ from an equation?", back: "Multiply both sides by 3." },
        {
          front: "Equation with variable on both sides — first move?",
          back: "Add or subtract to bring every variable term to one side.",
        },
        {
          front: "Variable cancels, leaving a false statement — what does that mean?",
          back: "No solution.",
        },
        {
          front: "Variable cancels, leaving a true statement — what does that mean?",
          back: "Infinitely many solutions.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: solving linear equations",
      stepKey: "solvingLinearEquationsPractice",
      questions: [
        {
          prompt: "Solve $x + 6 = 11$.",
          options: ["$x = 5$", "$x = 17$", "$x = -5$", "$x = 6$"],
          answer: 0,
          explanation: "Subtract 6 from both sides: $x = 11 - 6 = 5$.",
        },
        {
          prompt: "Solve $5x = 35$.",
          options: ["$x = 30$", "$x = 40$", "$x = 7$", "$x = 175$"],
          answer: 2,
          explanation: "Divide both sides by 5: $x = 35 \\div 5 = 7$.",
        },
        {
          prompt: "Solve $2x - 5 = 13$.",
          options: ["$x = 4$", "$x = 9$", "$x = 8$", "$x = 6$"],
          answer: 1,
          explanation: "Add 5: $2x = 18$. Divide by 2: $x = 9$.",
        },
        {
          prompt: "Solve $4(x + 3) = 32$.",
          options: ["$x = 5$", "$x = 8$", "$x = 6.5$", "$x = 29$"],
          answer: 0,
          explanation: "Distribute: $4x + 12 = 32$. Subtract 12: $4x = 20$. Divide by 4: $x = 5$.",
        },
        {
          prompt: "Solve $\\dfrac{x}{4} - 2 = 3$.",
          options: ["$x = 4$", "$x = 12$", "$x = 20$", "$x = 5$"],
          answer: 2,
          explanation: "Add 2: $x/4 = 5$. Multiply by 4: $x = 20$.",
        },
        {
          prompt: "Solve $6x - 3 = 3x + 15$.",
          options: ["$x = 4$", "$x = 6$", "$x = 5$", "$x = 12$"],
          answer: 1,
          explanation: "Subtract $3x$: $3x - 3 = 15$. Add 3: $3x = 18$. Divide by 3: $x = 6$.",
        },
        {
          prompt: "Solve $0.2x + 3 = 7$.",
          options: ["$x = 20$", "$x = 2$", "$x = 8$", "$x = 0.8$"],
          answer: 0,
          explanation: "Subtract 3: $0.2x = 4$. Divide by 0.2: $x = 20$.",
        },
        {
          prompt: "What is the solution set of $5x + 2 = 5x + 9$?",
          options: ["$x = 0$", "No solution", "Infinitely many solutions", "$x = 7$"],
          answer: 1,
          explanation: "Subtracting $5x$ leaves $2 = 9$, which is false, so there is no solution.",
        },
        {
          prompt: "What is the solution set of $2(x + 4) = 2x + 8$?",
          options: ["$x = 0$", "No solution", "Infinitely many solutions", "$x = 4$"],
          answer: 2,
          explanation:
            "Distributing gives $2x + 8 = 2x + 8$, true for every $x$, so there are infinitely many solutions.",
        },
        {
          prompt:
            "A phone plan costs 15 riyals plus 2 riyals per gigabyte used. A bill was 33 riyals. How many gigabytes were used?",
          options: ["6", "9", "18", "24"],
          answer: 1,
          explanation: "$2x + 15 = 33 \\Rightarrow 2x = 18 \\Rightarrow x = 9$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Distributing only the first term of a bracket: $5(x-2) = 5x - 2$.",
          right: "The multiplier applies to every term inside the bracket: $5(x-2) = 5x - 10$.",
        },
        {
          wrong: "Applying an operation to only one side, e.g. adding 7 to the left side only.",
          right: "Every operation must be applied to both sides to keep the equation balanced.",
        },
        {
          wrong: "Dividing before subtracting in $3x + 7 = 22$, giving $x + 7/3 = 22/3$.",
          right:
            "Undo addition or subtraction first, then undo multiplication or division: subtract 7, then divide by 3.",
        },
        {
          wrong:
            "Concluding an equation like $2x+4=2x+9$ has solution $x=0$ because the numbers don't match.",
          right:
            "When the variable cancels and leaves a false numeric statement, the correct conclusion is 'no solution', not $x=0$.",
        },
        {
          wrong:
            "Checking a solution against a simplified line of working rather than the original equation.",
          right: "Always substitute back into the original equation exactly as it was given.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "An equation states that two expressions are equal; solving it means finding the variable value(s) that make this true.",
        "Whatever operation is applied to one side of an equation must be applied to the other side too.",
        "Two-step equations: undo addition/subtraction first, then undo multiplication/division.",
        "Equations with brackets: distribute first. Equations with fractions: multiply both sides to clear them.",
        "Variables on both sides: move every variable term to one side before isolating it.",
        "If the variable cancels leaving a false statement, there is no solution; if it leaves a true statement, there are infinitely many solutions.",
        "Always check a solution by substituting it into the original equation.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: solving linear equations",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Solve $x - 8 = 15$.",
          options: ["$x = 7$", "$x = 23$", "$x = -7$", "$x = 120$"],
          answer: 1,
          marks: 1,
          explanation: "Add 8 to both sides: $x = 23$.",
        },
        {
          type: "mc",
          prompt: "Solve $7x + 3 = 38$.",
          options: ["$x = 5$", "$x = 6$", "$x = 41/7$", "$x = 7$"],
          answer: 0,
          marks: 1,
          explanation: "Subtract 3: $7x = 35$. Divide by 7: $x = 5$.",
        },
        {
          type: "tf",
          prompt:
            "In the equation $6(x+1) = 30$, the first correct step is to subtract 1 from both sides.",
          answer: false,
          marks: 1,
          explanation:
            "The bracket must be distributed first: $6x + 6 = 30$, not simplified by removing the 1 directly.",
        },
        {
          type: "mc",
          prompt: "Solve $3(2x - 1) = 15$.",
          options: ["$x = 2$", "$x = 3$", "$x = 8/3$", "$x = 6$"],
          answer: 1,
          marks: 2,
          explanation: "Distribute: $6x - 3 = 15$. Add 3: $6x = 18$. Divide by 6: $x = 3$.",
        },
        {
          type: "mc",
          prompt: "Solve $\\dfrac{x}{5} + 3 = 3$.",
          options: ["$x = 0$", "$x = 5$", "$x = 15$", "No solution"],
          answer: 0,
          marks: 2,
          explanation: "Subtract 3: $x/5 = 0$. Multiply by 5: $x = 0$.",
        },
        {
          type: "matching",
          prompt: "Match each equation to its solution type.",
          left: ["$3x + 1 = 3x + 5$", "$2(x + 1) = 2x + 2$", "$x + 4 = 9$", "$5x = 5x + 0$"],
          options: [
            "$x = 5$",
            "No solution",
            "Infinitely many solutions",
            "Infinitely many solutions",
          ],
          answer: [1, 2, 0, 3],
          marks: 4,
          explanation:
            "The first cancels to $1=5$ (false, no solution); the second cancels to $2x+2=2x+2$ (true, infinite); the third solves normally to $x=5$; the fourth cancels to $0=0$ (true, infinite).",
        },
        {
          type: "multi",
          prompt: "Select every equation that has infinitely many solutions.",
          options: [
            "$4x + 8 = 4(x + 2)$",
            "$3x = 3x + 1$",
            "$2x - 6 = 2(x - 3)$",
            "$x + 1 = x - 1$",
          ],
          answers: [0, 2],
          marks: 3,
          explanation:
            "$4x+8=4(x+2)$ distributes to $4x+8=4x+8$ (infinite). $2x-6=2(x-3)$ distributes to $2x-6=2x-6$ (infinite). The other two cancel to false statements (no solution).",
        },
        {
          type: "mc",
          prompt:
            "A market stall charges a fixed 5 riyal stall fee plus 3 riyals per kilogram of fruit. A customer paid 32 riyals. How many kilograms did they buy?",
          options: ["7", "9", "11", "12"],
          answer: 1,
          marks: 2,
          explanation: "$3x + 5 = 32 \\Rightarrow 3x = 27 \\Rightarrow x = 9$.",
        },
        {
          type: "mc",
          prompt: "Which value of $x$ satisfies $9x - 4 = 5x + 16$?",
          options: ["$x = 3$", "$x = 4$", "$x = 5$", "$x = 20$"],
          answer: 2,
          marks: 2,
          explanation: "Subtract $5x$: $4x - 4 = 16$. Add 4: $4x = 20$. Divide by 4: $x = 5$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "linearEquationSolverExplorer", label: "Use the equation-solving laboratory" },
        { key: "solvingLinearEquationsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
