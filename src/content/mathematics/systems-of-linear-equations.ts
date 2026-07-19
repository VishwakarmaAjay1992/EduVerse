import type { LessonContent } from "@/lib/lesson-content-types";

export const systemsOfLinearEquations: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "linear-equations-and-inequalities",
  lessonSlug: "systems-of-linear-equations",
  title: "Systems of Linear Equations",
  objectives: [
    "Explain what simultaneous equations are and what it means to solve a system.",
    "Interpret the solution of a system as the intersection point of two lines.",
    "Solve a system of two linear equations by substitution.",
    "Solve a system of two linear equations by elimination.",
    "Choose an efficient method based on the structure of a given system.",
    "Check a solution by substituting it into both original equations.",
    "Interpret a system graphically, including systems with no solution or infinitely many solutions.",
    "Set up and solve real-world problems involving two unknown quantities.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A single linear equation like $x + y = 10$ has infinitely many solutions — any pair of numbers that adds to 10. But when two such equations must both be true at once, the possibilities usually narrow down to a single pair of values. Two equations considered together like this are called simultaneous equations, or a system of equations.",
        "This lesson develops two algebraic methods for solving systems — substitution and elimination — and connects them to the graphical picture of two lines meeting at a point. It also covers the two special cases where a system has no solution or infinitely many.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson assumes confident equation-solving from Solving Linear Equations, including equations with brackets and variables on both sides, since both algebraic methods reduce a system down to exactly that kind of single-variable equation.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Simultaneous equations and their solution",
      body: "Simultaneous equations are two or more equations that share the same variables and must all be true at the same time. A solution to a system of two equations in $x$ and $y$ is a pair of values $(x, y)$ that satisfies both equations simultaneously.",
    },
    {
      kind: "theory",
      heading: "The solution as an intersection point",
      paragraphs: [
        "Every linear equation in two variables graphs as a straight line — every point on that line is a solution to that one equation. When you graph two such equations on the same axes, any point where the two lines cross is a solution to both equations at once, which is exactly the solution to the system.",
        "Two straight lines can relate to each other in exactly three ways, and each corresponds to a different type of solution.",
      ],
    },
    {
      kind: "table",
      heading: "Three cases for a system of two lines",
      headers: [
        "Relationship between lines",
        "Number of solutions",
        "What it looks like algebraically",
      ],
      rows: [
        [
          "Lines cross at one point",
          "Exactly one solution",
          "The two equations combine to give a single value for each variable.",
        ],
        [
          "Lines are parallel, never meet",
          "No solution",
          "Combining the equations leaves a false statement, like $0 = 4$.",
        ],
        [
          "Lines are identical (coincide)",
          "Infinitely many solutions",
          "Combining the equations leaves a true statement, like $0 = 0$.",
        ],
      ],
    },
    {
      kind: "simultaneousEquationsExplorer",
      heading: "Interactive: graph two lines, compare substitution and elimination",
    },
    {
      kind: "theory",
      heading: "Solving by substitution",
      paragraphs: [
        "Substitution works well when one equation is already solved for a variable, or can easily be rearranged that way. Rearrange one equation to isolate a variable, then substitute that expression into the other equation — this leaves a single equation in one variable, which you already know how to solve.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve the system $x + y = 10$ and $x - y = 2$ by substitution.",
      steps: [
        "Rearrange the first equation to isolate $x$: $x = 10 - y$.",
        "Substitute this into the second equation: $(10 - y) - y = 2$.",
        "Simplify: $10 - 2y = 2$.",
        "Subtract 10 from both sides: $-2y = -8$.",
        "Divide both sides by $-2$: $y = 4$.",
        "Substitute $y = 4$ back into $x = 10 - y$: $x = 10 - 4 = 6$.",
      ],
      answer: "$x = 6$, $y = 4$. Check: $6 + 4 = 10$ ✓ and $6 - 4 = 2$ ✓",
    },
    {
      kind: "theory",
      heading: "Solving by elimination",
      paragraphs: [
        "Elimination works well when the two equations are already arranged in the same form ($ax + by = c$). Multiply one or both equations so that a variable has matching or opposite coefficients, then add or subtract the equations to eliminate that variable entirely.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve the system $2x + 3y = 13$ and $x + y = 5$ by elimination.",
      steps: [
        "Multiply the second equation by 2 so the $x$-coefficients match: $2x + 2y = 10$.",
        "Subtract this from the first equation: $(2x + 3y) - (2x + 2y) = 13 - 10$.",
        "Simplify: $y = 3$.",
        "Substitute $y = 3$ into $x + y = 5$: $x + 3 = 5$, so $x = 2$.",
      ],
      answer: "$x = 2$, $y = 3$. Check: $2(2) + 3(3) = 4 + 9 = 13$ ✓ and $2 + 3 = 5$ ✓",
    },
    {
      kind: "theory",
      heading: "Choosing the most efficient method",
      paragraphs: [
        "Substitution is usually fastest when one equation already isolates a variable, or has a coefficient of 1 for one variable, making rearrangement easy. Elimination is usually fastest when both equations are in the same $ax + by = c$ form and the coefficients are easy to match with simple multiplication.",
        "Both methods always give the same correct answer for a given system — the choice is about efficiency, not correctness.",
      ],
    },
    {
      kind: "theory",
      heading: "Systems with no solution or infinitely many",
      paragraphs: [
        "If, during elimination or substitution, every variable cancels and you're left with a false numeric statement (like $0 = 6$), the two equations represent parallel lines, and the system has no solution.",
        "If instead every variable cancels and you're left with a true numeric statement (like $0 = 0$), the two equations represent the same line, and the system has infinitely many solutions — every point on that line satisfies both equations.",
      ],
    },
    {
      kind: "example",
      prompt: "Solve the system $x + y = 4$ and $x + y = 7$.",
      steps: [
        "Subtract the first equation from the second: $(x + y) - (x + y) = 7 - 4$.",
        "Simplify: $0 = 3$, which is false.",
      ],
      answer:
        "No solution — the two lines are parallel (both have the form $x+y=\\text{constant}$) and never meet.",
    },
    {
      kind: "example",
      prompt: "Solve the system $x + y = 4$ and $2x + 2y = 8$.",
      steps: [
        "Divide the second equation by 2: $x + y = 4$.",
        "This is identical to the first equation.",
      ],
      answer:
        "Infinitely many solutions — the second equation is just the first one scaled up, so both describe the same line.",
    },
    {
      kind: "theory",
      heading: "Checking a solution",
      paragraphs: [
        "A correct solution must satisfy both original equations, not just one. Substitute the $x$ and $y$ values into each equation separately and confirm both give true statements.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A cinema sells adult tickets for ₹25 and child tickets for ₹15. One group bought 8 tickets in total for ₹170. How many of each ticket type did they buy?",
      steps: [
        "Let $a$ = number of adult tickets and $c$ = number of child tickets.",
        "Total tickets: $a + c = 8$.",
        "Total cost: $25a + 15c = 170$.",
        "From the first equation, $c = 8 - a$. Substitute into the second: $25a + 15(8 - a) = 170$.",
        "Distribute: $25a + 120 - 15a = 170$.",
        "Combine like terms: $10a + 120 = 170$.",
        "Subtract 120 from both sides: $10a = 50$.",
        "Divide both sides by 10: $a = 5$.",
        "Substitute back: $c = 8 - 5 = 3$.",
      ],
      answer:
        "5 adult tickets and 3 child tickets. Check: $5+3=8$ ✓ and $25(5)+15(3)=125+45=170$ ✓",
    },
    {
      kind: "realWorld",
      heading: "Where systems of equations appear",
      items: [
        {
          area: "Pricing",
          text: "Finding two unknown item prices from two different combined-purchase totals.",
        },
        {
          area: "Tickets",
          text: "Splitting a mixed group of ticket types when the total count and total cost are known.",
        },
        {
          area: "Mixtures",
          text: "Finding how much of two ingredients to combine to reach a target amount and concentration.",
        },
        {
          area: "Ages",
          text: "Finding two people's ages from a relationship between them and a total or difference.",
        },
        {
          area: "Distance and speed",
          text: "Finding two speeds or distances from combined travel-time and distance information.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What does a solution to a system of two equations represent graphically?",
          back: "The point where the two lines intersect.",
        },
        {
          front: "When is substitution usually fastest?",
          back: "When one equation already isolates a variable, or has a coefficient of 1.",
        },
        {
          front: "When is elimination usually fastest?",
          back: "When both equations are in ax+by=c form with easy-to-match coefficients.",
        },
        {
          front: "What does it mean if both variables cancel leaving a false statement?",
          back: "No solution — the lines are parallel.",
        },
        {
          front: "What does it mean if both variables cancel leaving a true statement?",
          back: "Infinitely many solutions — the lines coincide.",
        },
        {
          front: "How do you check a system's solution?",
          back: "Substitute the values into both original equations and confirm both are true.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: systems of linear equations",
      stepKey: "systemsPractice",
      questions: [
        {
          prompt: "Solve $x + y = 9$ and $x - y = 3$.",
          options: ["$x=6, y=3$", "$x=3, y=6$", "$x=5, y=4$", "$x=4, y=5$"],
          answer: 0,
          explanation: "Adding the equations: $2x = 12 \\Rightarrow x = 6$. Then $y = 9 - 6 = 3$.",
        },
        {
          prompt: "Solve $2x + y = 11$ and $x - y = 1$.",
          options: ["$x=4, y=3$", "$x=3, y=4$", "$x=5, y=1$", "$x=2, y=7$"],
          answer: 0,
          explanation: "Adding: $3x = 12 \\Rightarrow x = 4$. Then $y = x - 1 = 3$.",
        },
        {
          prompt: "Solve $x = 2y$ and $x + y = 12$ by substitution.",
          options: ["$x=8, y=4$", "$x=4, y=8$", "$x=6, y=6$", "$x=9, y=3$"],
          answer: 0,
          explanation:
            "Substitute: $2y + y = 12 \\Rightarrow 3y = 12 \\Rightarrow y = 4$. Then $x = 2(4) = 8$.",
        },
        {
          prompt: "Solve $3x + 2y = 16$ and $x + 2y = 8$.",
          options: ["$x=4, y=2$", "$x=2, y=4$", "$x=4, y=4$", "$x=3, y=2.5$"],
          answer: 0,
          explanation:
            "Subtracting: $2x = 8 \\Rightarrow x = 4$. Then $4 + 2y = 8 \\Rightarrow y = 2$.",
        },
        {
          prompt: "What is the solution of $2x + y = 6$ and $4x + 2y = 20$?",
          options: ["$x=3, y=0$", "No solution", "Infinitely many solutions", "$x=5, y=-4$"],
          answer: 1,
          explanation:
            "Doubling the first equation gives $4x + 2y = 12$, which contradicts $4x+2y=20$ — the lines are parallel, so there is no solution.",
        },
        {
          prompt: "What is the solution of $x + 2y = 6$ and $2x + 4y = 12$?",
          options: ["$x=6, y=0$", "No solution", "Infinitely many solutions", "$x=2, y=2$"],
          answer: 2,
          explanation:
            "The second equation is exactly twice the first, so they describe the same line — infinitely many solutions.",
        },
        {
          prompt: "Two numbers have a sum of 20 and a difference of 4. Find the larger number.",
          options: ["8", "10", "12", "16"],
          answer: 2,
          explanation: "$x+y=20$, $x-y=4$. Adding: $2x=24 \\Rightarrow x=12$.",
        },
        {
          prompt:
            "A vending machine sells only ₹2 and ₹3 snacks. A customer bought 6 snacks for ₹16. How many ₹2 snacks did they buy?",
          options: ["2", "3", "4", "5"],
          answer: 0,
          explanation:
            "Let $a$ = ₹2 count, $b$ = ₹3 count. $a+b=6$, $2a+3b=16$. From the first, $a=6-b$. Substitute: $2(6-b)+3b=16 \\Rightarrow 12+b=16 \\Rightarrow b=4$, so $a=2$.",
        },
        {
          prompt: "Solve $y = 3x - 1$ and $y = -2x + 9$ by substitution (finding x).",
          options: ["$x=1$", "$x=2$", "$x=3$", "$x=4$"],
          answer: 1,
          explanation: "Set equal: $3x - 1 = -2x + 9 \\Rightarrow 5x = 10 \\Rightarrow x = 2$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Solving for only one variable and stopping there.",
          right:
            "A system's solution needs both values — always substitute back to find the second variable.",
        },
        {
          wrong:
            "Adding two equations without first matching coefficients, expecting a variable to cancel anyway.",
          right:
            "A variable only cancels through addition or subtraction if its coefficients in the two equations are equal (or opposite) — multiply one or both equations first if needed.",
        },
        {
          wrong: "Concluding a system has 'no solution' just because the numbers look complicated.",
          right:
            "Only conclude 'no solution' when both variables cancel and leave a false numeric statement, or 'infinitely many' when they leave a true one.",
        },
        {
          wrong: "Checking a solution in only one of the two original equations.",
          right: "A genuine solution must satisfy both equations — check each one separately.",
        },
        {
          wrong:
            "Sign errors when subtracting one whole equation from another, e.g. forgetting to distribute the minus sign across every term.",
          right:
            "When subtracting equations, subtract every term, including the constant on the right-hand side.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A system of two linear equations is solved by finding the pair of values that satisfies both at once — graphically, the intersection point of the two lines.",
        "Substitution: isolate one variable in one equation, then substitute into the other.",
        "Elimination: match coefficients of one variable (by multiplying), then add or subtract the equations to remove it.",
        "One solution: lines cross once. No solution: lines are parallel. Infinitely many solutions: lines coincide.",
        "Always check a solution by substituting into both original equations.",
        "Choose substitution when a variable is already isolated or easy to isolate; choose elimination when coefficients are easy to match.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: systems of linear equations",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Solve $x + y = 12$ and $x - y = 4$.",
          options: ["$x=8, y=4$", "$x=4, y=8$", "$x=6, y=6$", "$x=10, y=2$"],
          answer: 0,
          marks: 1,
          explanation: "Adding: $2x = 16 \\Rightarrow x = 8$. Then $y = 12 - 8 = 4$.",
        },
        {
          type: "mc",
          prompt: "Solve $y = x + 3$ and $2x + y = 15$.",
          options: ["$x=4, y=7$", "$x=6, y=9$", "$x=3, y=6$", "$x=5, y=8$"],
          answer: 0,
          marks: 2,
          explanation:
            "Substitute: $2x + (x+3) = 15 \\Rightarrow 3x + 3 = 15 \\Rightarrow x = 4$, so $y = 7$.",
        },
        {
          type: "tf",
          prompt:
            "If two equations in a system reduce to $0 = 0$, the system has infinitely many solutions.",
          answer: true,
          marks: 1,
          explanation:
            "A true statement with no variables left means the two equations describe the same line.",
        },
        {
          type: "mc",
          prompt: "Solve $3x + 2y = 12$ and $x - 2y = 4$ by elimination.",
          options: ["$x=4, y=0$", "$x=2, y=3$", "$x=6, y=-3$", "$x=3, y=1.5$"],
          answer: 0,
          marks: 2,
          explanation:
            "Adding the equations directly eliminates $y$: $4x = 16 \\Rightarrow x = 4$. Then $4 - 2y = 4 \\Rightarrow y = 0$.",
        },
        {
          type: "mc",
          prompt: "What kind of solution does the system $2x + y = 5$ and $4x + 2y = 20$ have?",
          options: [
            "One solution",
            "No solution",
            "Infinitely many solutions",
            "Cannot be determined",
          ],
          answer: 1,
          marks: 2,
          explanation:
            "Doubling the first equation gives $4x+2y=10$, which conflicts with $4x+2y=20$ — the lines are parallel with different intercepts.",
        },
        {
          type: "matching",
          prompt: "Match each system's graphical relationship to its solution type.",
          left: [
            "Lines cross once",
            "Parallel, distinct lines",
            "Identical lines",
            "Perpendicular, crossing lines",
          ],
          options: ["One solution", "Infinitely many solutions", "One solution", "No solution"],
          answer: [2, 3, 1, 0],
          marks: 4,
          explanation:
            "Any two distinct crossing lines (including perpendicular ones) give exactly one solution; parallel distinct lines give none; identical lines give infinitely many.",
        },
        {
          type: "mc",
          prompt:
            "A farm sells eggs in small boxes of 6 and large boxes of 12. A customer bought 10 boxes containing 90 eggs in total. How many small boxes did they buy?",
          options: ["3", "4", "5", "6"],
          answer: 2,
          marks: 2,
          explanation:
            "Let $s$ = small boxes, $l$ = large boxes. $s+l=10$, $6s+12l=90$. From the first, $l=10-s$. Substitute: $6s+12(10-s)=90 \\Rightarrow -6s+120=90 \\Rightarrow -6s=-30 \\Rightarrow s=5$.",
        },
        {
          type: "mc",
          prompt: "Which method is most efficient for $x = 4y$ and $3x + 2y = 28$?",
          options: [
            "Substitution, since x is already isolated",
            "Elimination, since coefficients match",
            "Neither method works",
            "Graphing only",
          ],
          answer: 0,
          marks: 1,
          explanation:
            "With $x$ already isolated in the first equation, substitution requires no extra rearranging.",
        },
        {
          type: "mc",
          prompt: "Solve for $x$: $x = 4y$ and $3x + 2y = 28$.",
          options: ["$x=6$", "$x=8$", "$x=10$", "$x=12$"],
          answer: 1,
          marks: 2,
          explanation:
            "Substitute: $3(4y) + 2y = 28 \\Rightarrow 14y = 28 \\Rightarrow y = 2$, so $x = 4(2) = 8$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        {
          key: "simultaneousEquationsExplorer",
          label: "Use the simultaneous-equations laboratory",
        },
        { key: "systemsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
