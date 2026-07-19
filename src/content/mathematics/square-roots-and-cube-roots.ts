import type { LessonContent } from "@/lib/lesson-content-types";

export const squareRootsAndCubeRoots: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "exponents-roots-and-scientific-notation",
  lessonSlug: "square-roots-and-cube-roots",
  title: "Square Roots and Cube Roots",
  objectives: [
    "Explain what square roots and cube roots mean and how they undo squaring and cubing.",
    "Recognise perfect squares up to 400 and perfect cubes up to 1000.",
    "Evaluate square and cube roots of perfect powers mentally.",
    "Estimate the roots of numbers that are not perfect powers.",
    "Simplify square roots such as $\\sqrt{50}$ where appropriate.",
    "Solve simple equations of the form $x^2 = k$ and $x^3 = k$, including both square-root solutions.",
    "Apply roots to problems involving areas of squares and volumes of cubes.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Squaring a number and taking its square root are opposite operations, just as cubing and taking the cube root are. If a square has area 49 cm², the square root tells us the side length: $\\sqrt{49} = 7$, so each side is 7 cm.",
        "In this lesson you will connect roots to powers, learn to spot perfect squares and cubes instantly, estimate roots that are not exact, and solve equations that involve squares and cubes. This is also your first meeting with irrational numbers such as $\\sqrt{2}$, whose decimals never end and never repeat.",
      ],
    },
    {
      kind: "theory",
      heading: "Before you start",
      paragraphs: [
        "You should already be comfortable with powers and the laws of indices from the previous lesson, with multiplying whole numbers and decimals, and with the idea of area (in square units) and volume (in cubic units). If $5^2 = 25$ and $2^3 = 8$ feel familiar, you are ready.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Square root and cube root",
      body: "The square root of a non-negative number $n$, written $\\sqrt{n}$, is the non-negative number whose square is $n$. The cube root of any number $n$, written $\\sqrt[3]{n}$, is the number whose cube is $n$. So $\\sqrt{36} = 6$ because $6^2 = 36$, and $\\sqrt[3]{125} = 5$ because $5^3 = 125$.",
    },
    {
      kind: "theory",
      heading: "Key vocabulary",
      paragraphs: ["These words appear throughout the lesson:"],
      list: [
        "Perfect square — a whole number that is the square of a whole number, such as $1, 4, 9, 16, 25, \\ldots$",
        "Perfect cube — a whole number that is the cube of a whole number, such as $1, 8, 27, 64, 125, \\ldots$",
        "Radical symbol — the sign $\\sqrt{\\phantom{n}}$; the number underneath it is called the radicand.",
        "Principal square root — the non-negative square root; $\\sqrt{25}$ always means $+5$, never $-5$.",
        "Irrational number — a number whose decimal form never terminates and never repeats, such as $\\sqrt{2}$.",
      ],
    },
    {
      kind: "theory",
      heading: "Roots undo powers",
      paragraphs: [
        "Squaring and square-rooting are inverse operations: $\\sqrt{7^2} = 7$ and $(\\sqrt{7})^2 = 7$. The same holds for cubes: $\\sqrt[3]{4^3} = 4$.",
        "Using fractional indices from the previous lesson, $\\sqrt{n} = n^{1/2}$ and $\\sqrt[3]{n} = n^{1/3}$, so every rule you learned about exponents applies to roots too.",
        "One important difference between the two: you cannot take the square root of a negative number (no real number squares to give a negative), but you can take the cube root of a negative number, because a negative times a negative times a negative is negative: $\\sqrt[3]{-27} = -3$.",
      ],
    },
    {
      kind: "formula",
      latex: "\\sqrt{n} = n^{1/2} \\qquad \\sqrt[3]{n} = n^{1/3}",
      caption: "Roots are fractional powers, so the laws of indices apply to them.",
    },
    {
      kind: "table",
      heading: "Perfect squares and perfect cubes to memorise",
      headers: ["$n$", "$n^2$", "$n^3$"],
      rows: [
        ["1", "1", "1"],
        ["2", "4", "8"],
        ["3", "9", "27"],
        ["4", "16", "64"],
        ["5", "25", "125"],
        ["6", "36", "216"],
        ["7", "49", "343"],
        ["8", "64", "512"],
        ["9", "81", "729"],
        ["10", "100", "1,000"],
        ["11", "121", "—"],
        ["12", "144", "—"],
        ["13", "169", "—"],
        ["14", "196", "—"],
        ["15", "225", "—"],
      ],
      note: "Knowing these by heart makes root questions instant. Note that 64 is both a perfect square ($8^2$) and a perfect cube ($4^3$).",
    },
    {
      kind: "rootsExplorer",
      heading: "Interactive: squares, cubes and their roots",
    },
    {
      kind: "example",
      prompt: "Evaluate $\\sqrt{144}$ and $\\sqrt[3]{216}$ without a calculator.",
      steps: [
        "For the square root, ask: which number squared gives 144? From the table, $12^2 = 144$.",
        "For the cube root, ask: which number cubed gives 216? Since $6^3 = 216$, the answer is 6.",
      ],
      answer: "$\\sqrt{144} = 12$ and $\\sqrt[3]{216} = 6$.",
    },
    {
      kind: "example",
      prompt: "A square rug has an area of 2.25 m². What is its side length?",
      steps: [
        "The side length is the square root of the area: $\\sqrt{2.25}$.",
        "Look for a decimal whose square is 2.25. Try 1.5: $1.5 \\times 1.5 = 2.25$. ✓",
      ],
      answer: "The rug is 1.5 m along each side.",
    },
    {
      kind: "theory",
      heading: "Estimating roots that are not exact",
      paragraphs: [
        "Most numbers are not perfect squares or cubes, so their roots are irrational. To estimate, trap the number between two consecutive perfect powers.",
        "For $\\sqrt{40}$: since $36 < 40 < 49$, the root lies between 6 and 7. Because 40 is closer to 36 than to 49, expect an answer nearer to 6 — in fact $\\sqrt{40} \\approx 6.32$.",
        "For $\\sqrt[3]{100}$: since $64 < 100 < 125$, the cube root lies between 4 and 5 — approximately 4.64.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Between which two consecutive whole numbers does $\\sqrt{75}$ lie? Estimate it to one decimal place.",
      steps: [
        "Find the perfect squares either side of 75: $64 = 8^2$ and $81 = 9^2$.",
        "So $8 < \\sqrt{75} < 9$.",
        "75 is 11 above 64 and 6 below 81, so the root is closer to 9. Try 8.7: $8.7^2 = 75.69$, slightly too big. Try 8.6: $8.6^2 = 73.96$, slightly too small.",
        "75 is nearer to 75.69 than to 73.96, so 8.7 is the better one-decimal estimate.",
      ],
      answer: "$\\sqrt{75}$ lies between 8 and 9, and $\\sqrt{75} \\approx 8.7$.",
    },
    {
      kind: "theory",
      heading: "Simplifying square roots",
      paragraphs: [
        "Some square roots simplify because the radicand hides a perfect-square factor. The key identity is $\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}$ for non-negative $a$ and $b$.",
        "For example, $\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25}\\,\\sqrt{2} = 5\\sqrt{2}$. The simplified form $5\\sqrt{2}$ is exact, whereas any decimal such as 7.07 is only an approximation.",
        "Always look for the largest perfect-square factor: $\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$ in a single step.",
      ],
    },
    {
      kind: "example",
      prompt: "Simplify $\\sqrt{48}$.",
      steps: [
        "Find the largest perfect-square factor of 48: it is 16, since $48 = 16 \\times 3$.",
        "Split the root: $\\sqrt{48} = \\sqrt{16}\\,\\sqrt{3}$.",
        "Evaluate the exact part: $\\sqrt{16} = 4$.",
      ],
      answer: "$\\sqrt{48} = 4\\sqrt{3}$.",
    },
    {
      kind: "theory",
      heading: "Equations with squares and cubes",
      paragraphs: [
        "The equation $x^2 = 49$ has two solutions, because both $7^2 = 49$ and $(-7)^2 = 49$. We write $x = \\pm 7$. The radical symbol itself, however, always denotes only the positive root: $\\sqrt{49} = 7$.",
        "The equation $x^3 = 64$ has exactly one real solution, $x = 4$, and $x^3 = -64$ has the single solution $x = -4$. Cubing keeps the sign, so no $\\pm$ is needed.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "One root or two?",
      body: "Solving $x^2 = k$ (with $k > 0$) gives two answers: $x = \\pm\\sqrt{k}$. Evaluating the symbol $\\sqrt{k}$ gives one answer: the positive root only. Cube-root equations $x^3 = k$ always have exactly one real answer.",
    },
    {
      kind: "example",
      prompt: "Solve $x^2 = 81$ and $y^3 = -125$.",
      steps: [
        "For $x^2 = 81$: both $9$ and $-9$ square to 81, so $x = \\pm 9$.",
        "For $y^3 = -125$: only $-5$ cubes to $-125$, since $(-5)^3 = -125$.",
      ],
      answer: "$x = 9$ or $x = -9$, and $y = -5$.",
    },
    {
      kind: "example",
      prompt:
        "A cubical water tank holds 512 litres. Given that 1 litre occupies 1,000 cm³, find the internal edge length of the tank in centimetres.",
      steps: [
        "Convert the capacity to a volume: $512 \\times 1000 = 512{,}000$ cm³.",
        "The edge length is the cube root of the volume: $e = \\sqrt[3]{512{,}000}$.",
        "Split the radicand: $512{,}000 = 512 \\times 1000$, so $e = \\sqrt[3]{512} \\times \\sqrt[3]{1000} = 8 \\times 10$.",
      ],
      answer: "The tank's internal edge is 80 cm.",
    },
    {
      kind: "realWorld",
      heading: "Where roots appear",
      items: [
        {
          area: "Construction",
          text: "Builders take square roots to find the side of a square floor or plot from its area.",
        },
        {
          area: "Engineering",
          text: "Tank and container design uses cube roots to find an edge or radius from a required volume.",
        },
        {
          area: "Navigation",
          text: "The straight-line distance across a rectangular park comes from a square root via the Pythagorean theorem.",
        },
        {
          area: "Science",
          text: "Many physical laws involve square-root relationships, such as pendulum timing and wave speeds.",
        },
        {
          area: "Screens",
          text: "Display sizes are quoted by diagonal length, which is computed with a square root from width and height.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "$\\sqrt{81} = \\ ?$", back: "$9$." },
        { front: "$\\sqrt[3]{343} = \\ ?$", back: "$7$." },
        { front: "$\\sqrt[3]{-8} = \\ ?$", back: "$-2$ — cube roots of negatives are allowed." },
        { front: "Solve $x^2 = 100$.", back: "$x = \\pm 10$ (two solutions)." },
        { front: "Simplify $\\sqrt{50}$.", back: "$5\\sqrt{2}$." },
        {
          front: "Is $\\sqrt{2}$ rational?",
          back: "No — it is irrational; its decimals never end or repeat.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: square and cube roots",
      stepKey: "rootsPractice",
      questions: [
        {
          prompt: "Evaluate $\\sqrt{169}$.",
          options: ["11", "12", "13", "14"],
          answer: 2,
          explanation: "$13^2 = 169$.",
        },
        {
          prompt: "Evaluate $\\sqrt[3]{729}$.",
          options: ["7", "8", "9", "27"],
          answer: 2,
          explanation: "$9^3 = 729$.",
        },
        {
          prompt: "Which number is both a perfect square and a perfect cube?",
          options: ["16", "27", "36", "64"],
          answer: 3,
          explanation: "$64 = 8^2 = 4^3$. (It is $2^6$, a sixth power.)",
        },
        {
          prompt: "Between which whole numbers does $\\sqrt{30}$ lie?",
          options: ["4 and 5", "5 and 6", "6 and 7", "15 and 16"],
          answer: 1,
          explanation: "$25 < 30 < 36$, so the root is between 5 and 6.",
        },
        {
          prompt: "Evaluate $\\sqrt[3]{-64}$.",
          options: ["$-4$", "$4$", "$-8$", "No real answer"],
          answer: 0,
          explanation: "$(-4)^3 = -64$, so the cube root is $-4$.",
        },
        {
          prompt: "Simplify $\\sqrt{72}$.",
          options: ["$2\\sqrt{18}$", "$3\\sqrt{8}$", "$6\\sqrt{2}$", "$36\\sqrt{2}$"],
          answer: 2,
          explanation: "$72 = 36 \\times 2$, and $\\sqrt{36} = 6$, so $\\sqrt{72} = 6\\sqrt{2}$.",
        },
        {
          prompt: "Solve $x^2 = 121$.",
          options: ["$x = 11$ only", "$x = -11$ only", "$x = \\pm 11$", "$x = \\pm 12$"],
          answer: 2,
          explanation: "Both $11^2$ and $(-11)^2$ equal 121.",
        },
        {
          prompt: "A square garden has area 196 m². How much fencing is needed to surround it?",
          options: ["14 m", "28 m", "56 m", "196 m"],
          answer: 2,
          explanation: "Side $= \\sqrt{196} = 14$ m, so the perimeter is $4 \\times 14 = 56$ m.",
        },
        {
          prompt: "A cube has volume 343 cm³. What is the area of one face?",
          options: ["7 cm²", "21 cm²", "49 cm²", "343 cm²"],
          answer: 2,
          explanation: "Edge $= \\sqrt[3]{343} = 7$ cm, so one face has area $7^2 = 49$ cm².",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Halving the number to find its square root, e.g. saying $\\sqrt{16} = 8$.",
          right:
            "The square root asks which number multiplies by itself to give 16: $\\sqrt{16} = 4$.",
        },
        {
          wrong: "Writing $\\sqrt{25} = \\pm 5$.",
          right:
            "The radical symbol means the principal (positive) root: $\\sqrt{25} = 5$. Only the equation $x^2 = 25$ has two solutions.",
        },
        {
          wrong: "Claiming $\\sqrt[3]{-27}$ has no answer.",
          right: "Cube roots of negative numbers exist: $\\sqrt[3]{-27} = -3$.",
        },
        {
          wrong: "Splitting roots over addition: $\\sqrt{9 + 16} = 3 + 4 = 7$.",
          right: "Roots split over multiplication only. $\\sqrt{9 + 16} = \\sqrt{25} = 5$, not 7.",
        },
        {
          wrong:
            "Simplifying $\\sqrt{48}$ with a small factor: $\\sqrt{4 \\times 12} = 2\\sqrt{12}$ and stopping.",
          right:
            "$2\\sqrt{12}$ still contains a perfect-square factor. Use the largest one: $\\sqrt{16 \\times 3} = 4\\sqrt{3}$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "$\\sqrt{n}$ undoes squaring and $\\sqrt[3]{n}$ undoes cubing; as indices, $\\sqrt{n} = n^{1/2}$ and $\\sqrt[3]{n} = n^{1/3}$.",
        "Memorise squares to $15^2$ and cubes to $10^3$; 64 belongs to both lists.",
        "Trap non-perfect roots between consecutive perfect powers to estimate them.",
        "Simplify square roots by extracting the largest perfect-square factor: $\\sqrt{50} = 5\\sqrt{2}$.",
        "$x^2 = k$ gives $x = \\pm\\sqrt{k}$; cube-root equations give one real solution and negatives are allowed.",
        "Square roots recover side lengths from areas; cube roots recover edges from volumes.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: square and cube roots",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Evaluate $\\sqrt{225}$.",
          options: ["13", "14", "15", "16"],
          answer: 2,
          marks: 1,
          explanation: "$15^2 = 225$.",
        },
        {
          type: "mc",
          prompt: "Evaluate $\\sqrt[3]{512}$.",
          options: ["6", "7", "8", "9"],
          answer: 2,
          marks: 1,
          explanation: "$8^3 = 512$.",
        },
        {
          type: "tf",
          prompt: "$\\sqrt{49} = \\pm 7$.",
          answer: false,
          marks: 1,
          explanation:
            "The radical symbol denotes the principal root only, so $\\sqrt{49} = 7$. The equation $x^2 = 49$ is what has two solutions.",
        },
        {
          type: "mc",
          prompt: "$\\sqrt{60}$ lies between which pair of consecutive whole numbers?",
          options: ["6 and 7", "7 and 8", "8 and 9", "29 and 31"],
          answer: 1,
          marks: 2,
          explanation: "$49 < 60 < 64$, so $7 < \\sqrt{60} < 8$.",
        },
        {
          type: "mc",
          prompt: "Which is the fully simplified form of $\\sqrt{98}$?",
          options: ["$2\\sqrt{49}$", "$7\\sqrt{2}$", "$14\\sqrt{2}$", "$49\\sqrt{2}$"],
          answer: 1,
          marks: 2,
          explanation: "$98 = 49 \\times 2$, so $\\sqrt{98} = 7\\sqrt{2}$.",
        },
        {
          type: "matching",
          prompt: "Match each expression to its value.",
          left: ["$\\sqrt{121}$", "$\\sqrt[3]{27}$", "$\\sqrt[3]{-1}$", "$\\sqrt{400}$"],
          options: ["$-1$", "$3$", "$11$", "$20$"],
          answer: [2, 1, 0, 3],
          marks: 4,
          explanation: "$11^2 = 121$, $3^3 = 27$, $(-1)^3 = -1$ and $20^2 = 400$.",
        },
        {
          type: "multi",
          prompt: "Select every true statement.",
          options: [
            "Every positive number has two square roots.",
            "$\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$ for all positive $a, b$.",
            "The cube root of a negative number is negative.",
            "$\\sqrt{2}$ is irrational.",
            "A perfect square can end in the digit 7.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "Roots do not split over addition, and no perfect square ends in 2, 3, 7 or 8.",
        },
        {
          type: "mc",
          prompt:
            "A cube-shaped gift box must hold exactly 1,728 cm³. What edge length should it have?",
          options: ["10 cm", "11 cm", "12 cm", "13 cm"],
          answer: 2,
          marks: 2,
          explanation: "$12^3 = 1{,}728$, so the edge is 12 cm.",
        },
        {
          type: "mc",
          prompt: "Solve $x^2 = 0.36$.",
          options: ["$x = 0.6$ only", "$x = \\pm 0.6$", "$x = \\pm 0.06$", "$x = \\pm 6$"],
          answer: 1,
          marks: 2,
          explanation: "$0.6^2 = 0.36$ and $(-0.6)^2 = 0.36$, so $x = \\pm 0.6$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "rootsExplorer", label: "Use the interactive roots laboratory" },
        { key: "rootsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
