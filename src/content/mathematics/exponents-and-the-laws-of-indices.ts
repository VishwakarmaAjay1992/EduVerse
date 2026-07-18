import type { LessonContent } from "@/lib/lesson-content-types";

export const exponentsAndTheLawsOfIndices: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "exponents-roots-and-scientific-notation",
  lessonSlug: "exponents-and-the-laws-of-indices",
  title: "Exponents and the Laws of Indices",
  objectives: [
    "Read and write powers using base and exponent notation.",
    "Apply the product, quotient and power-of-a-power laws of indices.",
    "Interpret zero and negative exponents.",
    "Interpret fractional exponents as roots.",
    "Combine several index laws in a single expression.",
    "Connect the laws of indices to scientific notation.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "An exponent (also called an index or a power) is a compact way of writing repeated multiplication. Instead of writing $2 \\times 2 \\times 2 \\times 2 \\times 2$ we write $2^5$.",
        "The rules that govern exponents — the laws of indices — turn long products into short algebra and make working with very large or very small numbers manageable. These are the same rules you will need for scientific notation, algebra, and eventually calculus.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Power, base and exponent",
      body: "In the expression $a^n$, the number $a$ is the base and the number $n$ is the exponent (or index). When $n$ is a positive integer, $a^n$ means $a$ multiplied by itself $n$ times.",
    },
    {
      kind: "theory",
      heading: "What a power really means",
      paragraphs: [
        "The exponent is a counter for how many copies of the base are being multiplied. So $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$, and $5^2 = 5 \\times 5 = 25$.",
        "$a^2$ is normally read 'a squared', $a^3$ is read 'a cubed', and higher powers are read 'a to the fourth', 'a to the fifth' and so on. The vocabulary matters because it appears in geometry (a square has side $s$ and area $s^2$; a cube has side $s$ and volume $s^3$).",
      ],
    },
    {
      kind: "table",
      heading: "The first few powers",
      headers: ["Base 2", "Base 3", "Base 10"],
      rows: [
        ["$2^1 = 2$", "$3^1 = 3$", "$10^1 = 10$"],
        ["$2^2 = 4$", "$3^2 = 9$", "$10^2 = 100$"],
        ["$2^3 = 8$", "$3^3 = 27$", "$10^3 = 1{,}000$"],
        ["$2^4 = 16$", "$3^4 = 81$", "$10^4 = 10{,}000$"],
        ["$2^5 = 32$", "$3^5 = 243$", "$10^5 = 100{,}000$"],
      ],
      note: "Powers of 10 are especially useful because our number system is base 10.",
    },
    {
      kind: "theory",
      heading: "Law 1 — Multiplication: same base, add the exponents",
      paragraphs: [
        "When you multiply two powers of the same base, count how many factors you have in total.",
        "For example, $2^3 \\times 2^4 = (2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2) = 2^7$. Three factors plus four factors equals seven factors.",
        "In general: $a^m \\times a^n = a^{m + n}$.",
      ],
    },
    {
      kind: "formula",
      latex: "a^m \\times a^n = a^{m+n}",
      caption: "The product law of indices, valid for the same base.",
    },
    {
      kind: "example",
      prompt: "Simplify $x^5 \\times x^3$.",
      steps: ["The base is the same, so add the exponents: $5 + 3 = 8$."],
      answer: "$x^5 \\times x^3 = x^8$.",
    },
    {
      kind: "theory",
      heading: "Law 2 — Division: same base, subtract the exponents",
      paragraphs: [
        "When you divide two powers of the same base, factors on the top cancel with factors on the bottom.",
        "For example, $\\dfrac{2^5}{2^2} = \\dfrac{2 \\times 2 \\times 2 \\times 2 \\times 2}{2 \\times 2} = 2^3$. Two factors cancel, leaving $5 - 2 = 3$.",
        "In general: $\\dfrac{a^m}{a^n} = a^{m - n}$, provided $a \\neq 0$.",
      ],
    },
    {
      kind: "formula",
      latex: "\\dfrac{a^m}{a^n} = a^{m-n}, \\quad a \\neq 0",
      caption: "The quotient law of indices.",
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{y^9}{y^4}$.",
      steps: ["Same base, so subtract exponents: $9 - 4 = 5$."],
      answer: "$\\dfrac{y^9}{y^4} = y^5$.",
    },
    {
      kind: "theory",
      heading: "Law 3 — Power of a power: multiply the exponents",
      paragraphs: [
        "When you raise a power to another power, count how many factors of the base you end up with.",
        "For example, $(2^3)^4$ means $2^3$ multiplied by itself four times, which is $2^3 \\times 2^3 \\times 2^3 \\times 2^3$. By Law 1 this equals $2^{3+3+3+3} = 2^{12}$. The exponents multiplied: $3 \\times 4 = 12$.",
        "In general: $(a^m)^n = a^{m \\, n}$.",
      ],
    },
    {
      kind: "formula",
      latex: "(a^m)^n = a^{m n}",
      caption: "The power-of-a-power law of indices.",
    },
    {
      kind: "example",
      prompt: "Simplify $(x^2)^5$.",
      steps: ["Multiply the exponents: $2 \\times 5 = 10$."],
      answer: "$(x^2)^5 = x^{10}$.",
    },
    {
      kind: "theory",
      heading: "Law 4 — Powers of a product and a quotient",
      paragraphs: [
        "A power distributes across multiplication and division. So $(ab)^n = a^n \\, b^n$ and $\\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}$, provided $b \\neq 0$.",
        "For example, $(2x)^3 = 2^3 \\, x^3 = 8x^3$ and $\\left(\\dfrac{3}{y}\\right)^2 = \\dfrac{9}{y^2}$.",
        "A common mistake is to try to distribute a power across addition. Powers do not distribute across sums: $(a + b)^2 \\neq a^2 + b^2$ in general.",
      ],
    },
    {
      kind: "formula",
      latex:
        "(ab)^n = a^n b^n \\quad \\text{and} \\quad \\left(\\dfrac{a}{b}\\right)^n = \\dfrac{a^n}{b^n}",
      caption: "Powers distribute over products and quotients, not over sums.",
    },
    {
      kind: "theory",
      heading: "Law 5 — The zero exponent",
      paragraphs: [
        "What should $a^0$ mean? The quotient law offers a natural answer. Since $\\dfrac{a^m}{a^m} = a^{m-m} = a^0$, and any non-zero number divided by itself is 1, we must have $a^0 = 1$ for every non-zero $a$.",
        "So $7^0 = 1$, $(-5)^0 = 1$, $x^0 = 1$ (whenever $x \\neq 0$). The expression $0^0$ is left undefined at this level.",
      ],
    },
    {
      kind: "formula",
      latex: "a^0 = 1, \\quad a \\neq 0",
      caption: "Every non-zero number to the power zero equals 1.",
    },
    {
      kind: "theory",
      heading: "Law 6 — Negative exponents",
      paragraphs: [
        "The quotient law also tells us what a negative exponent must mean. Consider $\\dfrac{a^0}{a^n} = a^{0 - n} = a^{-n}$. Since $a^0 = 1$, this gives $a^{-n} = \\dfrac{1}{a^n}$.",
        "A negative exponent is just a reciprocal. So $2^{-3} = \\dfrac{1}{2^3} = \\dfrac{1}{8}$ and $x^{-1} = \\dfrac{1}{x}$.",
        "Negative exponents let us extend the pattern of division to all whole numbers. They also let us write very small numbers compactly in scientific notation.",
      ],
    },
    {
      kind: "formula",
      latex: "a^{-n} = \\dfrac{1}{a^n}, \\quad a \\neq 0",
      caption: "A negative exponent flips the base into the denominator.",
    },
    {
      kind: "example",
      prompt: "Evaluate $10^{-3}$.",
      steps: [
        "Use the negative exponent rule: $10^{-3} = \\dfrac{1}{10^3}$.",
        "Compute $10^3 = 1000$.",
      ],
      answer: "$10^{-3} = \\dfrac{1}{1000} = 0.001$.",
    },
    {
      kind: "theory",
      heading: "Law 7 — Fractional exponents and roots",
      paragraphs: [
        "The power-of-a-power law also predicts what fractional exponents mean. If $a^{1/2}$ is to obey the rule $(a^{1/2})^2 = a^{1}$, then $a^{1/2}$ must be a number whose square is $a$ — in other words, a square root.",
        "More generally, $a^{1/n} = \\sqrt[n]{a}$ for a positive $a$ and a positive integer $n$, and $a^{m/n} = \\sqrt[n]{a^m} = \\left(\\sqrt[n]{a}\\right)^m$.",
        "So $9^{1/2} = 3$, $8^{1/3} = 2$, and $16^{3/4} = \\left(\\sqrt[4]{16}\\right)^3 = 2^3 = 8$.",
      ],
    },
    {
      kind: "formula",
      latex:
        "a^{1/n} = \\sqrt[n]{a} \\quad \\text{and} \\quad a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m",
      caption: "Fractional exponents behave like roots.",
    },
    {
      kind: "example",
      prompt: "Evaluate $27^{2/3}$.",
      steps: [
        "Rewrite as a root: $27^{2/3} = \\left(\\sqrt[3]{27}\\right)^2$.",
        "$\\sqrt[3]{27} = 3$.",
        "Square the result: $3^2 = 9$.",
      ],
      answer: "$27^{2/3} = 9$.",
    },
    {
      kind: "theory",
      heading: "Combining the laws",
      paragraphs: [
        "Most problems ask you to combine two or three laws. Work from the inside out, and after each step check that you are only combining terms with the same base.",
        "If the bases are different but the exponents are the same, you can sometimes rewrite one base in terms of another. For example, $4^n = (2^2)^n = 2^{2n}$, letting you compare $4^n$ with $2^{2n}$ or $8^n$ with $2^{3n}$.",
      ],
    },
    {
      kind: "example",
      prompt: "Simplify $\\dfrac{a^5 \\, b^3}{a^2 \\, b} \\times a^{-1} \\, b^4$.",
      steps: [
        "Handle each base separately.",
        "For $a$: $\\dfrac{a^5}{a^2} \\times a^{-1} = a^{5 - 2 - 1} = a^{2}$.",
        "For $b$: $\\dfrac{b^3}{b} \\times b^4 = b^{3 - 1 + 4} = b^{6}$.",
      ],
      answer: "$a^{2} \\, b^{6}$.",
    },
    {
      kind: "example",
      prompt: "Simplify $\\left(2 x^{3}\\right)^4 \\div \\left(4 x^{5}\\right)$.",
      steps: [
        "Expand the bracket: $(2 x^{3})^4 = 2^4 (x^3)^4 = 16 x^{12}$.",
        "Divide: $\\dfrac{16 x^{12}}{4 x^{5}} = \\dfrac{16}{4} \\times x^{12 - 5} = 4 x^{7}$.",
      ],
      answer: "$4 x^{7}$.",
    },
    {
      kind: "theory",
      heading: "Connection to scientific notation",
      paragraphs: [
        "Scientific notation uses powers of 10 to write very large or very small numbers compactly. A number in scientific notation looks like $a \\times 10^{n}$, where $1 \\leq a < 10$ and $n$ is an integer.",
        "For example, the mass of the Earth is about $5.97 \\times 10^{24}$ kilograms. The mass of a hydrogen atom is about $1.67 \\times 10^{-27}$ kilograms.",
        "The laws of indices are essential when you multiply or divide numbers in scientific notation: multiply the numerical parts and add or subtract the exponents. So $(3 \\times 10^{5}) \\times (2 \\times 10^{4}) = 6 \\times 10^{9}$.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Compute $(4 \\times 10^{6}) \\div (2 \\times 10^{-2})$ and give the answer in scientific notation.",
      steps: [
        "Divide the numerical parts: $4 \\div 2 = 2$.",
        "Divide the powers of 10: $10^{6} \\div 10^{-2} = 10^{6 - (-2)} = 10^{8}$.",
        "Combine: $2 \\times 10^{8}$.",
      ],
      answer: "$2 \\times 10^{8}$.",
    },
    {
      kind: "cards",
      heading: "The laws of indices at a glance",
      columns: 3,
      items: [
        { title: "Product", value: "$a^m a^n = a^{m+n}$", text: "Same base — add exponents." },
        {
          title: "Quotient",
          value: "$\\dfrac{a^m}{a^n} = a^{m-n}$",
          text: "Same base — subtract exponents.",
        },
        {
          title: "Power of a power",
          value: "$(a^m)^n = a^{mn}$",
          text: "Multiply the exponents.",
        },
        {
          title: "Product to a power",
          value: "$(ab)^n = a^n b^n$",
          text: "Distribute across multiplication.",
        },
        {
          title: "Zero exponent",
          value: "$a^0 = 1$",
          text: "For every non-zero $a$.",
        },
        {
          title: "Negative exponent",
          value: "$a^{-n} = \\dfrac{1}{a^n}$",
          text: "Reciprocal of the positive power.",
        },
        {
          title: "Fractional exponent",
          value: "$a^{1/n} = \\sqrt[n]{a}$",
          text: "The $n$-th root of $a$.",
        },
        {
          title: "Mixed fractional",
          value: "$a^{m/n} = \\sqrt[n]{a^m}$",
          text: "Root and power together.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Where exponents are used",
      items: [
        {
          area: "Science",
          text: "Distances in astronomy and sizes in chemistry are written in scientific notation with powers of 10.",
        },
        {
          area: "Computing",
          text: "Memory sizes are powers of 2: $2^{10}$ bytes is a kibibyte, $2^{20}$ is a mebibyte.",
        },
        {
          area: "Finance",
          text: "Compound interest formulas involve raising a growth factor to a power for each year.",
        },
        {
          area: "Biology",
          text: "Populations and cell counts often double at fixed intervals, growing as $2^{n}$.",
        },
        {
          area: "Geometry",
          text: "Area and volume formulas use exponents 2 and 3 to describe how a shape grows with its side length.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "$a^m \\times a^n = \\ ?$", back: "$a^{m+n}$." },
        { front: "$\\dfrac{a^m}{a^n} = \\ ?$", back: "$a^{m-n}$, provided $a \\neq 0$." },
        { front: "$(a^m)^n = \\ ?$", back: "$a^{mn}$." },
        { front: "$a^0 = \\ ?$", back: "$1$ for every non-zero $a$." },
        { front: "$a^{-n} = \\ ?$", back: "$\\tfrac{1}{a^n}$." },
        { front: "$a^{1/2} = \\ ?$", back: "$\\sqrt{a}$, for $a \\geq 0$." },
        { front: "$8^{2/3} = \\ ?$", back: "$4$ — cube root of 8 is 2, squared is 4." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: laws of indices",
      stepKey: "indicesPractice",
      questions: [
        {
          prompt: "Simplify $x^7 \\times x^{3}$.",
          options: ["$x^{4}$", "$x^{10}$", "$x^{21}$", "$2x^{10}$"],
          answer: 1,
          explanation: "Same base, add exponents: $7 + 3 = 10$.",
        },
        {
          prompt: "Simplify $\\dfrac{y^{8}}{y^{5}}$.",
          options: ["$y^{3}$", "$y^{13}$", "$y^{40}$", "$3y$"],
          answer: 0,
          explanation: "Same base, subtract exponents: $8 - 5 = 3$.",
        },
        {
          prompt: "Simplify $(z^{4})^{2}$.",
          options: ["$z^{2}$", "$z^{6}$", "$z^{8}$", "$z^{16}$"],
          answer: 2,
          explanation: "Multiply the exponents: $4 \\times 2 = 8$.",
        },
        {
          prompt: "Evaluate $5^{0}$.",
          options: ["0", "1", "5", "Undefined"],
          answer: 1,
          explanation: "Any non-zero base to the power zero is 1.",
        },
        {
          prompt: "Evaluate $3^{-2}$.",
          options: ["$-9$", "$-\\tfrac{1}{9}$", "$\\tfrac{1}{9}$", "$9$"],
          answer: 2,
          explanation: "$3^{-2} = \\tfrac{1}{3^{2}} = \\tfrac{1}{9}$.",
        },
        {
          prompt: "Evaluate $16^{1/2}$.",
          options: ["4", "8", "32", "256"],
          answer: 0,
          explanation: "$16^{1/2} = \\sqrt{16} = 4$.",
        },
        {
          prompt: "Simplify $(2 x^{3})^{2}$.",
          options: ["$2 x^{6}$", "$4 x^{5}$", "$4 x^{6}$", "$4 x^{9}$"],
          answer: 2,
          explanation: "$(2 x^{3})^{2} = 2^{2} (x^{3})^{2} = 4 x^{6}$.",
        },
        {
          prompt: "Simplify $\\dfrac{a^{5} \\, b^{2}}{a^{3} \\, b^{5}}$.",
          options: [
            "$\\dfrac{a^{2}}{b^{3}}$",
            "$a^{2} b^{3}$",
            "$\\dfrac{a^{3}}{b^{2}}$",
            "$a^{8} b^{7}$",
          ],
          answer: 0,
          explanation:
            "Subtract exponents by base: $a^{5-3} = a^{2}$; $b^{2-5} = b^{-3} = \\tfrac{1}{b^{3}}$.",
        },
        {
          prompt: "Write $\\dfrac{1}{81}$ as a power of 3.",
          options: ["$3^{-2}$", "$3^{-3}$", "$3^{-4}$", "$3^{4}$"],
          answer: 2,
          explanation: "$81 = 3^{4}$, so $\\tfrac{1}{81} = 3^{-4}$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Adding the bases when multiplying: $2^{3} \\times 2^{4} = 4^{7}$.",
          right:
            "The base stays the same and the exponents are added: $2^{3} \\times 2^{4} = 2^{7}$.",
        },
        {
          wrong: "Applying an index law across different bases: $2^{3} \\times 3^{3} = 6^{6}$.",
          right:
            "You can combine the bases when the exponents match: $2^{3} \\times 3^{3} = (2 \\times 3)^{3} = 6^{3}$.",
        },
        {
          wrong: "Distributing a power across a sum: $(a + b)^{2} = a^{2} + b^{2}$.",
          right: "Powers do not distribute over addition. $(a + b)^{2} = a^{2} + 2ab + b^{2}$.",
        },
        {
          wrong: "Reading $-3^{2}$ as $9$ because the number 3 is squared.",
          right:
            "Without brackets, only 3 is squared and the minus is applied afterwards: $-3^{2} = -9$. With brackets, $(-3)^{2} = 9$.",
        },
        {
          wrong: "Treating $a^{-1}$ as a negative number.",
          right: "$a^{-1}$ is the reciprocal $\\tfrac{1}{a}$; if $a$ is positive, so is $a^{-1}$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "$a^n$ is repeated multiplication of $n$ copies of $a$.",
        "Product law: $a^m \\, a^n = a^{m+n}$; Quotient law: $\\dfrac{a^m}{a^n} = a^{m-n}$.",
        "Power of a power: $(a^m)^n = a^{m n}$; powers distribute over products and quotients but not over sums.",
        "Zero exponent: $a^0 = 1$ for every non-zero $a$; negative exponent: $a^{-n} = \\dfrac{1}{a^n}$.",
        "Fractional exponents are roots: $a^{1/n} = \\sqrt[n]{a}$ and $a^{m/n} = \\sqrt[n]{a^m}$.",
        "The same laws are used to multiply and divide numbers in scientific notation.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: laws of indices",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Simplify $a^{6} \\times a^{-2}$.",
          options: ["$a^{-12}$", "$a^{4}$", "$a^{8}$", "$a^{12}$"],
          answer: 1,
          marks: 1,
          explanation: "$6 + (-2) = 4$.",
        },
        {
          type: "mc",
          prompt: "Simplify $\\dfrac{p^{5}}{p^{7}}$.",
          options: ["$p^{-2}$", "$p^{2}$", "$p^{12}$", "$p^{35}$"],
          answer: 0,
          marks: 1,
          explanation: "$5 - 7 = -2$, so the answer is $p^{-2} = \\tfrac{1}{p^{2}}$.",
        },
        {
          type: "mc",
          prompt: "Evaluate $2^{-4}$.",
          options: ["$-16$", "$-\\tfrac{1}{16}$", "$\\tfrac{1}{16}$", "$16$"],
          answer: 2,
          marks: 1,
          explanation: "$2^{-4} = \\tfrac{1}{2^{4}} = \\tfrac{1}{16}$.",
        },
        {
          type: "mc",
          prompt: "Evaluate $64^{1/3}$.",
          options: ["3", "4", "6", "8"],
          answer: 1,
          marks: 1,
          explanation: "The cube root of 64 is 4, because $4^{3} = 64$.",
        },
        {
          type: "mc",
          prompt: "Evaluate $32^{2/5}$.",
          options: ["2", "4", "8", "16"],
          answer: 1,
          marks: 2,
          explanation: "$32^{1/5} = 2$; squared gives $4$.",
        },
        {
          type: "tf",
          prompt: "$(a + b)^{2} = a^{2} + b^{2}$ for every choice of $a$ and $b$.",
          answer: false,
          marks: 1,
          explanation:
            "$(a + b)^{2} = a^{2} + 2ab + b^{2}$; the cross term is missing in the claim.",
        },
        {
          type: "mc",
          prompt: "Simplify $(3 x^{2})^{3}$.",
          options: ["$3 x^{6}$", "$9 x^{5}$", "$9 x^{6}$", "$27 x^{6}$"],
          answer: 3,
          marks: 2,
          explanation: "$(3 x^{2})^{3} = 3^{3} (x^{2})^{3} = 27 x^{6}$.",
        },
        {
          type: "matching",
          prompt: "Match each expression to its simplified form.",
          left: ["$x^{4} \\times x^{5}$", "$\\dfrac{y^{10}}{y^{6}}$", "$(z^{3})^{2}$", "$w^{0}$"],
          options: ["$1$", "$x^{9}$", "$y^{4}$", "$z^{6}$"],
          answer: [1, 2, 3, 0],
          marks: 4,
          explanation: "Each result follows directly from one law of indices.",
        },
        {
          type: "multi",
          prompt: "Select every correct statement.",
          options: [
            "$a^{m} \\times a^{n} = a^{m+n}$",
            "$a^{m} \\times b^{m} = (ab)^{m}$",
            "$a^{m} + a^{n} = a^{m+n}$",
            "$(a^{m})^{n} = a^{m+n}$",
            "$a^{0} = 1$ for every non-zero $a$",
          ],
          answers: [0, 1, 4],
          marks: 3,
          explanation:
            "Exponents do not combine through addition of powers, and $(a^{m})^{n} = a^{m n}$, not $a^{m+n}$.",
        },
        {
          type: "mc",
          prompt:
            "Compute $(2 \\times 10^{-3}) \\times (4 \\times 10^{5})$ in scientific notation.",
          options: [
            "$6 \\times 10^{2}$",
            "$6 \\times 10^{-15}$",
            "$8 \\times 10^{2}$",
            "$8 \\times 10^{-15}$",
          ],
          answer: 2,
          marks: 2,
          explanation: "$2 \\times 4 = 8$ and $10^{-3} \\times 10^{5} = 10^{2}$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [{ key: "indicesPractice", label: "Complete the practice questions" }],
      requireQuizPass: true,
    },
  ],
};
