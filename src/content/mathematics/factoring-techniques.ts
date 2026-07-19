import type { LessonContent } from "@/lib/lesson-content-types";

export const factoringTechniques: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "polynomials-and-factoring",
  lessonSlug: "factoring-techniques",
  title: "Factoring Techniques",
  objectives: [
    "Factor out the greatest common factor (GCF) from a polynomial.",
    "Factor trinomials of the form $x^2 + bx + c$.",
    "Factor trinomials of the form $ax^2 + bx + c$ where $a \\neq 1$.",
    "Recognise and factor a difference of squares.",
    "Factor four-term polynomials by grouping.",
    "Recognise and factor a sum or difference of cubes.",
    "Check any factored result by expanding it back.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Factoring reverses multiplication: instead of expanding brackets into a polynomial, you start with a polynomial and rewrite it as a product of simpler factors. It is one of the most useful algebraic skills, underlying equation-solving, simplifying rational expressions, and graphing.",
        "There is no single universal factoring method — instead, there is a toolkit of techniques, each suited to a particular pattern. This lesson works through five of the most important: common factor, trinomial factoring, difference of squares, grouping, and sum or difference of cubes.",
      ],
    },
    {
      kind: "theory",
      heading: "Prior knowledge",
      paragraphs: [
        "This lesson depends heavily on Polynomials: Add, Subtract, Multiply, especially the FOIL method and the special product patterns — factoring is essentially running those patterns in reverse.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Factoring",
      body: "Factoring a polynomial means writing it as a product of two or more simpler polynomials. A polynomial is fully factored when none of its factors can be broken down any further.",
    },
    {
      kind: "theory",
      heading: "Always check for a common factor first",
      paragraphs: [
        "Before applying any other technique, check whether every term shares a common factor — a number, a variable, or both. Factoring this out first simplifies everything that follows and is a step that's easy to overlook.",
        "The greatest common factor (GCF) is the largest expression that divides every term evenly. Find it by taking the GCF of the coefficients and the lowest power of any variable common to every term.",
      ],
    },
    {
      kind: "example",
      prompt: "Factor $6x^2 + 9x$.",
      steps: [
        "Find the GCF of $6x^2$ and $9x$: the numbers share a factor of 3, and both terms have at least one $x$, so the GCF is $3x$.",
        "Divide each term by $3x$: $6x^2 \\div 3x = 2x$ and $9x \\div 3x = 3$.",
        "Write the result: $3x(2x + 3)$.",
      ],
      answer: "$3x(2x + 3)$. Check by expanding: $3x(2x+3) = 6x^2+9x$ ✓",
    },
    {
      kind: "theory",
      heading: "Factoring trinomials $x^2 + bx + c$",
      paragraphs: [
        "For a trinomial with a leading coefficient of 1, look for two numbers that multiply to give $c$ and add to give $b$. Those two numbers become the constants in two binomial factors.",
      ],
    },
    {
      kind: "example",
      prompt: "Factor $x^2 + 7x + 12$.",
      steps: [
        "Find two numbers that multiply to 12 and add to 7: 3 and 4 work, since $3 \\times 4 = 12$ and $3+4=7$.",
        "Write the factored form: $(x + 3)(x + 4)$.",
      ],
      answer: "$(x + 3)(x + 4)$. Check: $(x+3)(x+4) = x^2+7x+12$ ✓",
    },
    {
      kind: "example",
      prompt: "Factor $x^2 - 2x - 15$.",
      steps: [
        "Find two numbers that multiply to $-15$ and add to $-2$: $-5$ and $3$ work, since $-5 \\times 3 = -15$ and $-5+3=-2$.",
        "Write the factored form: $(x - 5)(x + 3)$.",
      ],
      answer: "$(x - 5)(x + 3)$. Check: $(x-5)(x+3) = x^2-2x-15$ ✓",
    },
    {
      kind: "theory",
      heading: "Factoring trinomials $ax^2 + bx + c$ with $a \\neq 1$",
      paragraphs: [
        "When the leading coefficient isn't 1, look for two numbers that multiply to $a \\times c$ and add to $b$. Use those numbers to split the middle term into two pieces, then factor by grouping.",
      ],
    },
    {
      kind: "example",
      prompt: "Factor $2x^2 + 7x + 3$.",
      steps: [
        "Multiply $a \\times c = 2 \\times 3 = 6$. Find two numbers multiplying to 6 and adding to 7: 6 and 1.",
        "Split the middle term: $2x^2 + 6x + x + 3$.",
        "Group and factor each pair: $2x(x + 3) + 1(x + 3)$.",
        "Factor out the common binomial: $(x + 3)(2x + 1)$.",
      ],
      answer: "$(x + 3)(2x + 1)$. Check: $(x+3)(2x+1) = 2x^2+x+6x+3 = 2x^2+7x+3$ ✓",
    },
    {
      kind: "theory",
      heading: "Difference of squares",
      paragraphs: [
        "A binomial where both terms are perfect squares, connected by subtraction, factors instantly using the pattern $a^2 - b^2 = (a+b)(a-b)$. A sum of squares like $x^2 + 25$, by contrast, cannot be factored over ordinary real numbers.",
      ],
    },
    {
      kind: "formula",
      latex: "a^2 - b^2 = (a + b)(a - b)",
      caption: "Recognise both terms as perfect squares before applying this pattern.",
    },
    {
      kind: "example",
      prompt: "Factor $x^2 - 49$.",
      steps: [
        "Recognise both terms as perfect squares: $x^2 = (x)^2$ and $49 = (7)^2$.",
        "Apply the pattern with $a=x$, $b=7$: $(x+7)(x-7)$.",
      ],
      answer: "$(x + 7)(x - 7)$. Check: $(x+7)(x-7) = x^2-49$ ✓",
    },
    {
      kind: "theory",
      heading: "Factoring by grouping",
      paragraphs: [
        "Grouping works on four-term polynomials. Split the polynomial into two pairs, factor the GCF from each pair separately, and if both pairs now share a common binomial factor, factor that binomial out.",
      ],
    },
    {
      kind: "example",
      prompt: "Factor $x^3 + 3x^2 + 2x + 6$ by grouping.",
      steps: [
        "Split into two pairs: $(x^3 + 3x^2) + (2x + 6)$.",
        "Factor each pair: $x^2(x + 3) + 2(x + 3)$.",
        "Factor out the shared binomial $(x+3)$: $(x + 3)(x^2 + 2)$.",
      ],
      answer: "$(x + 3)(x^2 + 2)$. Check: $(x+3)(x^2+2) = x^3+2x+3x^2+6 = x^3+3x^2+2x+6$ ✓",
    },
    {
      kind: "theory",
      heading: "Sum and difference of cubes",
      paragraphs: [
        "Two more memorable patterns handle binomials built from perfect cubes. Both leave a trinomial factor that cannot be factored further using real, rational coefficients.",
      ],
    },
    {
      kind: "formula",
      latex: "a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
      caption:
        "Notice the sign pattern: the binomial factor's sign matches the original; the trinomial's middle sign is always opposite.",
    },
    {
      kind: "example",
      prompt: "Factor $x^3 + 8$.",
      steps: [
        "Recognise perfect cubes: $x^3 = (x)^3$ and $8 = (2)^3$.",
        "Apply the sum of cubes pattern with $a=x$, $b=2$: $(x+2)(x^2 - 2x + 4)$.",
      ],
      answer:
        "$(x + 2)(x^2 - 2x + 4)$. Check: expanding gives back $x^3+8$ (the middle terms cancel).",
    },
    {
      kind: "example",
      prompt: "Factor $x^3 - 27$.",
      steps: [
        "Recognise perfect cubes: $x^3=(x)^3$ and $27=(3)^3$.",
        "Apply the difference of cubes pattern with $a=x$, $b=3$: $(x-3)(x^2+3x+9)$.",
      ],
      answer: "$(x - 3)(x^2 + 3x + 9)$.",
    },
    {
      kind: "factoringExplorer",
      heading: "Interactive: choose a technique, factor step by step, check by expanding",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "A general factoring strategy",
      body: "1) Factor out any common factor first. 2) Count the terms: two terms suggests difference of squares (or cubes); three terms suggests a trinomial pattern; four terms suggests grouping. 3) Always check your factored answer by expanding it back to confirm it matches the original.",
    },
    {
      kind: "realWorld",
      heading: "Where factoring is used",
      items: [
        {
          area: "Solving equations",
          text: "Setting a factored polynomial equal to zero lets you solve using the zero-product property.",
        },
        {
          area: "Simplifying fractions",
          text: "Rational expressions are simplified by factoring and cancelling shared factors.",
        },
        {
          area: "Graphing",
          text: "Factored form reveals a polynomial's roots directly, showing where its graph crosses the x-axis.",
        },
        {
          area: "Optimisation",
          text: "Factoring helps find maximum or minimum values in area, profit and design problems.",
        },
        {
          area: "Engineering",
          text: "Simplifying stress, motion or circuit equations often begins with factoring.",
        },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        {
          front: "What should you always check for first?",
          back: "A common factor (GCF) shared by every term.",
        },
        {
          front: "Two numbers strategy for $x^2+bx+c$?",
          back: "Find two numbers that multiply to $c$ and add to $b$.",
        },
        { front: "Difference of squares pattern?", back: "$a^2-b^2=(a+b)(a-b)$." },
        {
          front: "When does grouping work well?",
          back: "On four-term polynomials, split into two pairs.",
        },
        { front: "Sum of cubes pattern?", back: "$a^3+b^3=(a+b)(a^2-ab+b^2)$." },
        {
          front: "How do you check a factored answer?",
          back: "Expand it back out and confirm it matches the original polynomial.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: factoring techniques",
      stepKey: "factoringPractice",
      questions: [
        {
          prompt: "Factor $10x^2 + 15x$.",
          options: ["$5x(2x + 3)$", "$5(2x^2 + 3x)$", "$5x(2x + 15)$", "$10x(x + 15)$"],
          answer: 0,
          explanation: "GCF is $5x$: $10x^2+15x = 5x(2x+3)$.",
        },
        {
          prompt: "Factor $x^2 + 9x + 20$.",
          options: ["$(x+4)(x+5)$", "$(x+2)(x+10)$", "$(x+1)(x+20)$", "$(x-4)(x-5)$"],
          answer: 0,
          explanation: "4 and 5 multiply to 20 and add to 9: $(x+4)(x+5)$.",
        },
        {
          prompt: "Factor $x^2 - 8x + 15$.",
          options: ["$(x-3)(x-5)$", "$(x+3)(x+5)$", "$(x-3)(x+5)$", "$(x-15)(x+1)$"],
          answer: 0,
          explanation: "$-3$ and $-5$ multiply to 15 and add to $-8$: $(x-3)(x-5)$.",
        },
        {
          prompt: "Factor $3x^2 + 10x + 8$.",
          options: ["$(3x+4)(x+2)$", "$(3x+2)(x+4)$", "$(x+4)(3x+8)$", "$(3x+8)(x+1)$"],
          answer: 0,
          explanation:
            "$3 \\times 8=24$; two numbers multiplying to 24 and adding to 10 are 6 and 4: split middle term and group to get $(3x+4)(x+2)$.",
        },
        {
          prompt: "Factor $x^2 - 64$.",
          options: ["$(x+8)(x-8)$", "$(x-8)^2$", "$(x+8)^2$", "$(x-4)(x+16)$"],
          answer: 0,
          explanation: "$64=8^2$: difference of squares gives $(x+8)(x-8)$.",
        },
        {
          prompt: "Factor $x^3 + 2x^2 + 3x + 6$ by grouping.",
          options: ["$(x+2)(x^2+3)$", "$(x+3)(x^2+2)$", "$(x+2)(x^2+6)$", "$(x+6)(x^2+2)$"],
          answer: 0,
          explanation: "Group: $(x^3+2x^2)+(3x+6) = x^2(x+2)+3(x+2) = (x+2)(x^2+3)$.",
        },
        {
          prompt: "Factor $x^3 - 8$.",
          options: ["$(x-2)(x^2+2x+4)$", "$(x-2)(x^2-2x+4)$", "$(x-2)^3$", "$(x+2)(x^2-2x+4)$"],
          answer: 0,
          explanation: "Difference of cubes with $a=x,b=2$: $(x-2)(x^2+2x+4)$.",
        },
        {
          prompt: "Factor $2x^2 - 8$ completely (factor out the GCF first).",
          options: ["$2(x+2)(x-2)$", "$2(x-4)(x+2)$", "$(2x+4)(x-2)$", "$2(x^2-4)$"],
          answer: 0,
          explanation:
            "GCF is 2: $2(x^2-4)$, then difference of squares: $2(x+2)(x-2)$. Fully factored, not just $2(x^2-4)$.",
        },
        {
          prompt: "Factor $x^2 + x - 6$.",
          options: ["$(x+3)(x-2)$", "$(x-3)(x+2)$", "$(x+6)(x-1)$", "$(x-6)(x+1)$"],
          answer: 0,
          explanation: "3 and $-2$ multiply to $-6$ and add to 1: $(x+3)(x-2)$.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Skipping the common-factor check and jumping straight to trinomial factoring, e.g. leaving $2x^2-8$ 'fully factored' as $(2x+4)(x-2)$.",
          right:
            "Factor out the GCF first: $2(x^2-4) = 2(x+2)(x-2)$ — this is the fully factored form.",
        },
        {
          wrong:
            "Trying to factor a sum of squares like $x^2+49$ using the difference-of-squares pattern.",
          right:
            "A sum of squares does not factor over real numbers — only a difference of squares does.",
        },
        {
          wrong:
            "Choosing numbers that add correctly but multiply incorrectly (or vice versa) when factoring a trinomial.",
          right:
            "Both conditions must hold simultaneously: the numbers must multiply to $c$ (or $ac$) AND add to $b$.",
        },
        {
          wrong:
            "Forgetting to check the sign pattern in sum/difference of cubes, e.g. writing $x^3+8=(x+2)(x^2+2x+4)$.",
          right:
            "The trinomial's middle sign is always opposite the binomial's sign: $(x+2)(x^2-2x+4)$ for a sum of cubes.",
        },
        {
          wrong:
            "Stopping after one grouping step without checking whether the resulting binomial factors are truly identical.",
          right:
            "Grouping only works if both pairs produce the exact same binomial factor — if they don't match, try grouping the terms differently.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Always factor out the GCF first, before applying any other technique.",
        "For $x^2+bx+c$: find two numbers multiplying to $c$ and adding to $b$.",
        "For $ax^2+bx+c$ with $a \\neq 1$: find two numbers multiplying to $ac$ and adding to $b$, then split and group.",
        "Difference of squares: $a^2-b^2=(a+b)(a-b)$; a sum of squares does not factor this way.",
        "Grouping splits a four-term polynomial into two pairs, each factored, sharing a common binomial.",
        "Sum/difference of cubes: $a^3\\pm b^3=(a\\pm b)(a^2\\mp ab+b^2)$ — the trinomial's middle sign is always opposite.",
        "Always verify a factored result by expanding it back to the original polynomial.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: factoring techniques",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Factor $8x^2 + 12x$.",
          options: ["$4x(2x + 3)$", "$4(2x^2 + 3x)$", "$4x(2x + 12)$", "$8x(x + 12)$"],
          answer: 0,
          marks: 1,
          explanation: "GCF is $4x$: $8x^2+12x = 4x(2x+3)$.",
        },
        {
          type: "mc",
          prompt: "Factor $x^2 + 11x + 24$.",
          options: ["$(x+3)(x+8)$", "$(x+4)(x+6)$", "$(x+2)(x+12)$", "$(x+1)(x+24)$"],
          answer: 0,
          marks: 1,
          explanation: "3 and 8 multiply to 24 and add to 11.",
        },
        {
          type: "tf",
          prompt: "$x^2 + 16$ can be factored using the difference-of-squares pattern.",
          answer: false,
          marks: 1,
          explanation: "This is a sum of squares, which does not factor over the real numbers.",
        },
        {
          type: "mc",
          prompt: "Factor $x^2 - 5x - 24$.",
          options: ["$(x-8)(x+3)$", "$(x+8)(x-3)$", "$(x-4)(x+6)$", "$(x-24)(x+1)$"],
          answer: 0,
          marks: 2,
          explanation: "$-8$ and 3 multiply to $-24$ and add to $-5$.",
        },
        {
          type: "mc",
          prompt: "Factor $4x^2 + 4x - 3$.",
          options: ["$(2x+3)(2x-1)$", "$(2x-3)(2x+1)$", "$(4x-1)(x+3)$", "$(4x+3)(x-1)$"],
          answer: 0,
          marks: 2,
          explanation:
            "$4 \\times (-3) = -12$; numbers 6 and $-2$ multiply to $-12$ and add to 4: split and group to get $(2x+3)(2x-1)$.",
        },
        {
          type: "matching",
          prompt: "Match each expression to its factored form.",
          left: ["$x^2 - 36$", "$x^2 + 10x + 24$", "$x^3 + 27$", "$x^3 - 1$"],
          options: ["$(x-1)(x^2+x+1)$", "$(x+3)(x^2-3x+9)$", "$(x+4)(x+6)$", "$(x+6)(x-6)$"],
          answer: [3, 2, 1, 0],
          marks: 4,
          explanation:
            "Each expression matches its factored form via difference of squares, trinomial factoring, sum of cubes, and difference of cubes.",
        },
        {
          type: "mc",
          prompt: "Factor $x^3 + 4x^2 + 3x + 12$ by grouping.",
          options: ["$(x+4)(x^2+3)$", "$(x+3)(x^2+4)$", "$(x+4)(x^2+4)$", "$(x+12)(x^2+1)$"],
          answer: 0,
          marks: 2,
          explanation: "Group: $x^2(x+4) + 3(x+4) = (x+4)(x^2+3)$.",
        },
        {
          type: "multi",
          prompt: "Select every expression that is fully factored.",
          options: ["$3(x^2-4)$", "$3(x+2)(x-2)$", "$(2x+4)(x-1)$", "$2(x+2)(x-1)$"],
          answers: [1, 3],
          marks: 3,
          explanation:
            "$3(x^2-4)$ still has a factorable difference of squares inside; $(2x+4)(x-1)$ still has a common factor of 2 inside the first bracket.",
        },
        {
          type: "mc",
          prompt: "Factor $x^3 - 64$.",
          options: ["$(x-4)(x^2+4x+16)$", "$(x-4)(x^2-4x+16)$", "$(x+4)(x^2-4x+16)$", "$(x-4)^3$"],
          answer: 0,
          marks: 2,
          explanation: "Difference of cubes with $a=x,b=4$: $(x-4)(x^2+4x+16)$.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "factoringExplorer", label: "Use the factoring laboratory" },
        { key: "factoringPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
