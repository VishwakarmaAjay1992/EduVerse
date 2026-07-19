import type { LessonContent } from "@/lib/lesson-content-types";

export const standardForm: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "exponents-roots-and-scientific-notation",
  lessonSlug: "standard-form",
  title: "Standard Form",
  objectives: [
    "Write very large and very small numbers in standard form $a \\times 10^n$ with $1 \\le a < 10$.",
    "Convert numbers in standard form back to ordinary numbers.",
    "Interpret positive and negative powers of ten as decimal-point movements.",
    "Multiply and divide numbers in standard form using the laws of indices.",
    "Add and subtract numbers in standard form by matching powers of ten.",
    "Round answers to a sensible number of significant figures.",
    "Use standard form for real scientific quantities such as planetary distances and atomic masses.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "The Sun is about 150,000,000 km from Earth. A hydrogen atom has a mass of about 0.00000000000000000000000000167 kg. Numbers like these are hard to read, hard to say, and easy to miscopy.",
        "Standard form (also called scientific notation) writes every number as $a \\times 10^n$, where $a$ is at least 1 but less than 10 and $n$ is an integer. The two examples above become $1.5 \\times 10^{8}$ km and $1.67 \\times 10^{-27}$ kg — compact, unambiguous and easy to compare.",
      ],
    },
    {
      kind: "theory",
      heading: "Before you start",
      paragraphs: [
        "This lesson leans on the laws of indices — especially $10^m \\times 10^n = 10^{m+n}$, $10^m \\div 10^n = 10^{m-n}$ and the meaning of negative exponents such as $10^{-3} = \\tfrac{1}{1000}$. Decimal place value (tenths, hundredths, thousandths) should also feel comfortable.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Standard form",
      body: "A number is in standard form when it is written as $a \\times 10^n$, where $1 \\le a < 10$ and $n$ is an integer. The number $a$ is sometimes called the mantissa or coefficient, and $n$ is the exponent or power.",
    },
    {
      kind: "table",
      heading: "Powers of ten",
      headers: ["Power", "Value", "Name"],
      rows: [
        ["$10^{6}$", "1,000,000", "million"],
        ["$10^{3}$", "1,000", "thousand"],
        ["$10^{2}$", "100", "hundred"],
        ["$10^{1}$", "10", "ten"],
        ["$10^{0}$", "1", "one"],
        ["$10^{-1}$", "0.1", "tenth"],
        ["$10^{-2}$", "0.01", "hundredth"],
        ["$10^{-3}$", "0.001", "thousandth"],
        ["$10^{-6}$", "0.000001", "millionth"],
      ],
      note: "Positive powers make numbers large; negative powers make them small. $10^0 = 1$ sits exactly in the middle.",
    },
    {
      kind: "theory",
      heading: "Writing large numbers in standard form",
      paragraphs: [
        "Place the decimal point after the first non-zero digit, then count how many places the point moved from its original position. That count is the (positive) exponent.",
        "For 63,000: the point sits after the 3 at the end; moving it to just after the 6 takes 4 jumps, so $63{,}000 = 6.3 \\times 10^{4}$.",
        "Check the range rule: 6.3 is between 1 and 10. Writing $63 \\times 10^{3}$ gives the same value but is not standard form, because 63 is not less than 10.",
      ],
    },
    {
      kind: "theory",
      heading: "Writing small numbers in standard form",
      paragraphs: [
        "For a number less than 1, move the decimal point to the right until it sits after the first non-zero digit. The number of jumps becomes a negative exponent.",
        "For 0.00082: the point must jump 4 places right to sit after the 8, so $0.00082 = 8.2 \\times 10^{-4}$.",
        "A quick sanity check: numbers smaller than 1 always get negative exponents, and numbers of 10 or more always get positive exponents.",
      ],
    },
    {
      kind: "standardFormExplorer",
      heading: "Interactive: build a number in standard form",
    },
    {
      kind: "example",
      prompt: "Write 4,570,000 in standard form.",
      steps: [
        "Put the decimal point after the first non-zero digit: 4.57.",
        "Count the jumps from the original position (after the final 0) back to after the 4: six places.",
        "The number is large, so the exponent is positive.",
      ],
      answer: "$4{,}570{,}000 = 4.57 \\times 10^{6}$.",
    },
    {
      kind: "example",
      prompt: "Write $0.0000306$ in standard form.",
      steps: [
        "Move the point right until it follows the first non-zero digit: 3.06.",
        "Count the jumps: five places to the right.",
        "The number is smaller than 1, so the exponent is negative.",
      ],
      answer: "$0.0000306 = 3.06 \\times 10^{-5}$.",
    },
    {
      kind: "example",
      prompt: "Write $7.04 \\times 10^{5}$ as an ordinary number.",
      steps: [
        "The exponent $+5$ moves the decimal point five places to the right.",
        "$7.04 \\to 70.4 \\to 704 \\to 7{,}040 \\to 70{,}400 \\to 704{,}000$.",
      ],
      answer: "$7.04 \\times 10^{5} = 704{,}000$.",
    },
    {
      kind: "theory",
      heading: "Multiplying and dividing in standard form",
      paragraphs: [
        "Multiply (or divide) the mantissas, and add (or subtract) the exponents using the laws of indices. Then check that the result is still in standard form — if the new mantissa drifts out of the range $[1, 10)$, adjust it by one more power of ten.",
        "For example, $(4 \\times 10^{3}) \\times (5 \\times 10^{6}) = 20 \\times 10^{9}$, but 20 is too big, so rewrite it: $2 \\times 10^{10}$.",
      ],
    },
    {
      kind: "formula",
      latex:
        "(a \\times 10^{m}) \\times (b \\times 10^{n}) = ab \\times 10^{m+n} \\qquad \\dfrac{a \\times 10^{m}}{b \\times 10^{n}} = \\dfrac{a}{b} \\times 10^{m-n}",
      caption:
        "Multiply or divide the mantissas; add or subtract the exponents; then re-standardise if needed.",
    },
    {
      kind: "example",
      prompt:
        "Calculate $(3 \\times 10^{4}) \\times (6 \\times 10^{5})$, giving the answer in standard form.",
      steps: [
        "Multiply the mantissas: $3 \\times 6 = 18$.",
        "Add the exponents: $10^{4} \\times 10^{5} = 10^{9}$.",
        "So far: $18 \\times 10^{9}$. But 18 is not less than 10, so write $18 = 1.8 \\times 10$.",
        "Combine: $1.8 \\times 10 \\times 10^{9} = 1.8 \\times 10^{10}$.",
      ],
      answer: "$1.8 \\times 10^{10}$.",
    },
    {
      kind: "example",
      prompt: "Calculate $(8.4 \\times 10^{-3}) \\div (2 \\times 10^{4})$ in standard form.",
      steps: [
        "Divide the mantissas: $8.4 \\div 2 = 4.2$.",
        "Subtract the exponents: $10^{-3} \\div 10^{4} = 10^{-3-4} = 10^{-7}$.",
        "4.2 is already between 1 and 10, so no adjustment is needed.",
      ],
      answer: "$4.2 \\times 10^{-7}$.",
    },
    {
      kind: "theory",
      heading: "Adding and subtracting in standard form",
      paragraphs: [
        "Addition and subtraction only work digit-by-digit when the powers of ten match. So first rewrite one number so both share the same exponent, then add or subtract the mantissas.",
        "For $3.2 \\times 10^{5} + 4 \\times 10^{4}$: rewrite the second as $0.4 \\times 10^{5}$. Then $3.2 + 0.4 = 3.6$, giving $3.6 \\times 10^{5}$.",
        "With very different exponents, the smaller number may vanish at the precision you are working to — that is expected, and it is why scientists quote answers to a stated number of significant figures.",
      ],
    },
    {
      kind: "example",
      prompt: "Calculate $5.1 \\times 10^{6} - 8 \\times 10^{5}$ in standard form.",
      steps: [
        "Match the powers: $8 \\times 10^{5} = 0.8 \\times 10^{6}$.",
        "Subtract the mantissas: $5.1 - 0.8 = 4.3$.",
        "Keep the shared power: $4.3 \\times 10^{6}$.",
      ],
      answer: "$4.3 \\times 10^{6}$.",
    },
    {
      kind: "theory",
      heading: "Significant figures and sensible rounding",
      paragraphs: [
        "Significant figures are the digits that carry information: all non-zero digits, zeros between them, and trailing zeros after a decimal point. In standard form, every digit of the mantissa is significant, which is one of the notation's quiet advantages.",
        "When multiplying or dividing measured quantities, round the final answer to the same number of significant figures as the least precise value used. Writing $2.5 \\times 10^{3} \\times 3.14159\\ldots$ to eight digits would claim precision the inputs never had.",
        "So $1.5 \\times 10^{8}$ km (2 s.f.) times some 4 s.f. factor should normally be reported to 2 significant figures.",
      ],
    },
    {
      kind: "cards",
      heading: "Standard form in science",
      columns: 3,
      items: [
        {
          title: "Earth–Sun distance",
          value: "1.5 × 10⁸ km",
          text: "About 150 million kilometres, defined as one astronomical unit.",
        },
        {
          title: "Speed of light",
          value: "3.0 × 10⁵ km/s",
          text: "Light crosses the Earth–Sun gap in roughly 8 minutes.",
        },
        {
          title: "Earth's mass",
          value: "5.97 × 10²⁴ kg",
          text: "A 25-digit number tamed into three significant figures.",
        },
        {
          title: "Hydrogen atom",
          value: "1.67 × 10⁻²⁷ kg",
          text: "The tiny mass of a single proton plus electron.",
        },
        {
          title: "Red blood cell",
          value: "7 × 10⁻⁶ m",
          text: "About seven millionths of a metre across.",
        },
        {
          title: "World population",
          value: "≈ 8 × 10⁹",
          text: "Roughly eight billion people.",
        },
      ],
    },
    {
      kind: "realWorld",
      heading: "Why scientists insist on standard form",
      items: [
        {
          area: "Astronomy",
          text: "Distances between stars and galaxies span dozens of powers of ten; standard form keeps them comparable.",
        },
        {
          area: "Chemistry",
          text: "Counting atoms means numbers like $6.02 \\times 10^{23}$ — impossible to handle as ordinary digits.",
        },
        {
          area: "Medicine",
          text: "Viral loads and bacterial counts are reported in standard form on lab results.",
        },
        {
          area: "Computing",
          text: "Floating-point numbers inside every computer are stored as a mantissa and an exponent — standard form in base 2.",
        },
        {
          area: "Engineering",
          text: "Tolerances such as $2.5 \\times 10^{-6}$ m keep micrometre precision readable on drawings.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "Write 52,000 in standard form.", back: "$5.2 \\times 10^{4}$." },
        { front: "Write 0.0047 in standard form.", back: "$4.7 \\times 10^{-3}$." },
        {
          front: "Is $12 \\times 10^{3}$ standard form?",
          back: "No — the mantissa must be less than 10. It is $1.2 \\times 10^{4}$.",
        },
        {
          front: "$(2 \\times 10^{3}) \\times (4 \\times 10^{5}) = \\ ?$",
          back: "$8 \\times 10^{8}$.",
        },
        { front: "$10^{-2}$ as a decimal?", back: "$0.01$." },
        {
          front: "How many significant figures in $3.20 \\times 10^{6}$?",
          back: "Three — every mantissa digit counts.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: standard form",
      stepKey: "standardFormPractice",
      questions: [
        {
          prompt: "Write 830,000 in standard form.",
          options: [
            "$8.3 \\times 10^{4}$",
            "$8.3 \\times 10^{5}$",
            "$83 \\times 10^{4}$",
            "$8.3 \\times 10^{6}$",
          ],
          answer: 1,
          explanation: "The point moves 5 places: $8.3 \\times 10^{5}$.",
        },
        {
          prompt: "Write 0.00061 in standard form.",
          options: [
            "$6.1 \\times 10^{-3}$",
            "$6.1 \\times 10^{-4}$",
            "$6.1 \\times 10^{4}$",
            "$61 \\times 10^{-5}$",
          ],
          answer: 1,
          explanation: "The point moves 4 places right: $6.1 \\times 10^{-4}$.",
        },
        {
          prompt: "Write $9.05 \\times 10^{3}$ as an ordinary number.",
          options: ["905", "9,050", "90,500", "9,005"],
          answer: 1,
          explanation: "Move the point 3 places right: 9,050.",
        },
        {
          prompt: "Write $2.4 \\times 10^{-2}$ as an ordinary number.",
          options: ["0.0024", "0.024", "0.24", "240"],
          answer: 1,
          explanation: "Move the point 2 places left: 0.024.",
        },
        {
          prompt: "Which of these is written in correct standard form?",
          options: [
            "$0.7 \\times 10^{5}$",
            "$71 \\times 10^{3}$",
            "$7.1 \\times 10^{4}$",
            "$7.1 \\times 10^{4.5}$",
          ],
          answer: 2,
          explanation:
            "The mantissa must satisfy $1 \\le a < 10$ and the exponent must be an integer.",
        },
        {
          prompt: "$(2 \\times 10^{6}) \\times (3.5 \\times 10^{2}) = \\ ?$",
          options: [
            "$7 \\times 10^{8}$",
            "$7 \\times 10^{12}$",
            "$5.5 \\times 10^{8}$",
            "$7 \\times 10^{4}$",
          ],
          answer: 0,
          explanation: "$2 \\times 3.5 = 7$ and $10^{6} \\times 10^{2} = 10^{8}$.",
        },
        {
          prompt: "$(9 \\times 10^{5}) \\div (3 \\times 10^{-2}) = \\ ?$",
          options: [
            "$3 \\times 10^{3}$",
            "$3 \\times 10^{7}$",
            "$6 \\times 10^{7}$",
            "$3 \\times 10^{-7}$",
          ],
          answer: 1,
          explanation: "$9 \\div 3 = 3$ and $10^{5-(-2)} = 10^{7}$.",
        },
        {
          prompt: "$4.6 \\times 10^{4} + 3 \\times 10^{3} = \\ ?$ (in standard form)",
          options: [
            "$7.6 \\times 10^{4}$",
            "$4.9 \\times 10^{4}$",
            "$4.63 \\times 10^{4}$",
            "$7.6 \\times 10^{7}$",
          ],
          answer: 1,
          explanation:
            "Match powers first: $3 \\times 10^{3} = 0.3 \\times 10^{4}$; then $4.6 + 0.3 = 4.9$.",
        },
        {
          prompt:
            "Light travels at $3 \\times 10^{5}$ km/s. How far does it travel in $5 \\times 10^{2}$ seconds?",
          options: [
            "$1.5 \\times 10^{7}$ km",
            "$1.5 \\times 10^{8}$ km",
            "$6 \\times 10^{7}$ km",
            "$8 \\times 10^{7}$ km",
          ],
          answer: 1,
          explanation:
            "$3 \\times 5 = 15$ and $10^{5+2} = 10^{7}$, giving $15 \\times 10^{7} = 1.5 \\times 10^{8}$ km.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Accepting $46 \\times 10^{3}$ as standard form.",
          right:
            "The mantissa must be at least 1 and less than 10. Re-standardise: $4.6 \\times 10^{4}$.",
        },
        {
          wrong:
            "Counting zeros instead of decimal-point jumps, e.g. writing 63,000 as $6.3 \\times 10^{3}$ because it has three zeros.",
          right:
            "Count how many places the decimal point moves — four places for 63,000, so $6.3 \\times 10^{4}$.",
        },
        {
          wrong: "Using a positive exponent for a small number: $0.005 = 5 \\times 10^{3}$.",
          right: "Numbers below 1 take negative exponents: $0.005 = 5 \\times 10^{-3}$.",
        },
        {
          wrong: "Adding exponents when adding numbers: $10^{3} + 10^{3} = 10^{6}$.",
          right: "Exponents add only under multiplication. $10^{3} + 10^{3} = 2 \\times 10^{3}$.",
        },
        {
          wrong:
            "Forgetting to re-standardise after multiplying: leaving $20 \\times 10^{9}$ as a final answer.",
          right: "Adjust the mantissa into range: $20 \\times 10^{9} = 2 \\times 10^{10}$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Standard form writes any number as $a \\times 10^{n}$ with $1 \\le a < 10$ and integer $n$.",
        "Large numbers take positive exponents; numbers below 1 take negative exponents; the exponent counts decimal-point jumps.",
        "Multiply or divide by combining mantissas and adding or subtracting exponents, then re-standardise the mantissa if needed.",
        "Add or subtract only after rewriting both numbers with the same power of ten.",
        "Every digit of the mantissa is significant; round final answers to match the least precise input.",
        "Science relies on standard form for quantities from atomic masses ($10^{-27}$ kg) to planetary distances ($10^{8}$ km).",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: standard form",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which is 3,200,000 in standard form?",
          options: [
            "$3.2 \\times 10^{5}$",
            "$3.2 \\times 10^{6}$",
            "$32 \\times 10^{5}$",
            "$3.2 \\times 10^{7}$",
          ],
          answer: 1,
          marks: 1,
          explanation: "The decimal point moves six places: $3.2 \\times 10^{6}$.",
        },
        {
          type: "mc",
          prompt: "Which is 0.000059 in standard form?",
          options: [
            "$5.9 \\times 10^{-4}$",
            "$5.9 \\times 10^{-5}$",
            "$5.9 \\times 10^{5}$",
            "$59 \\times 10^{-6}$",
          ],
          answer: 1,
          marks: 1,
          explanation: "Five jumps to the right of the point gives $5.9 \\times 10^{-5}$.",
        },
        {
          type: "tf",
          prompt: "$9.99 \\times 10^{0}$ is a correctly written standard-form number.",
          answer: true,
          marks: 1,
          explanation:
            "The mantissa 9.99 satisfies $1 \\le a < 10$ and $0$ is a valid integer exponent; the value is simply 9.99.",
        },
        {
          type: "mc",
          prompt: "$(6 \\times 10^{4}) \\times (5 \\times 10^{3})$ in standard form is",
          options: [
            "$30 \\times 10^{7}$",
            "$3 \\times 10^{8}$",
            "$3 \\times 10^{7}$",
            "$1.1 \\times 10^{8}$",
          ],
          answer: 1,
          marks: 2,
          explanation:
            "$6 \\times 5 = 30$ and $10^{4+3} = 10^{7}$; re-standardise $30 \\times 10^{7}$ to $3 \\times 10^{8}$.",
        },
        {
          type: "mc",
          prompt: "$(1.2 \\times 10^{-3}) \\div (4 \\times 10^{2})$ in standard form is",
          options: [
            "$3 \\times 10^{-6}$",
            "$3 \\times 10^{-5}$",
            "$0.3 \\times 10^{-5}$",
            "$3 \\times 10^{-1}$",
          ],
          answer: 0,
          marks: 2,
          explanation:
            "$1.2 \\div 4 = 0.3$ and $10^{-3-2} = 10^{-5}$, so $0.3 \\times 10^{-5} = 3 \\times 10^{-6}$.",
        },
        {
          type: "matching",
          prompt: "Match each ordinary number to its standard form.",
          left: ["45,000", "0.0045", "450", "0.45"],
          options: [
            "$4.5 \\times 10^{-1}$",
            "$4.5 \\times 10^{2}$",
            "$4.5 \\times 10^{-3}$",
            "$4.5 \\times 10^{4}$",
          ],
          answer: [3, 2, 1, 0],
          marks: 4,
          explanation:
            "Count decimal-point jumps: 4 left, 3 right, 2 left and 1 right respectively.",
        },
        {
          type: "multi",
          prompt: "Select every statement that is true.",
          options: [
            "In standard form, the mantissa is always less than 10.",
            "A negative exponent means the number itself is negative.",
            "To add standard-form numbers, first match the powers of ten.",
            "Every digit of the mantissa is a significant figure.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation:
            "A negative exponent makes the number small, not negative: $5 \\times 10^{-3} = 0.005 > 0$.",
        },
        {
          type: "mc",
          prompt:
            "The Earth is about $1.5 \\times 10^{8}$ km from the Sun, and Neptune about $4.5 \\times 10^{9}$ km. How many times further from the Sun is Neptune?",
          options: ["3 times", "30 times", "300 times", "0.03 times"],
          answer: 1,
          marks: 2,
          explanation: "$\\dfrac{4.5 \\times 10^{9}}{1.5 \\times 10^{8}} = 3 \\times 10^{1} = 30$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "standardFormExplorer", label: "Use the interactive standard-form laboratory" },
        { key: "standardFormPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
