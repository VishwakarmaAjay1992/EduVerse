import type { LinearEquationQuestion } from "./linear-equations-question-bank-types";

export const twoMarkLinearEquationQuestions: LinearEquationQuestion[] = [
  {
    "id": 38,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "Find the value(s) of $k$ so that the pair $x+2y=5$ and $3x+ky+15=0$ has a unique solution.",
    "answer": "$k\\ne6$",
    "solution": [
      "Write the first equation as $x+2y-5=0$.",
      "For a unique solution, $\\frac{a_1}{a_2}\\ne\\frac{b_1}{b_2}$.",
      "$\\frac13\\ne\\frac2k$, so $k\\ne6$."
    ],
    "page": 7,
    "tags": [
      "Unique solution",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board 2019 OD"
  },
  {
    "id": 39,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "If $2x+y=23$ and $4x-y=19$, find $(5y-2x)$ and $\\left(\\frac{y}{x}-2\\right)$.",
    "answer": "$5y-2x=31$ and $\\frac{y}{x}-2=-\\frac57$",
    "solution": [
      "Adding the equations gives $6x=42$, so $x=7$.",
      "From $2x+y=23$, $14+y=23$, hence $y=9$.",
      "$5y-2x=45-14=31$.",
      "$\\frac{y}{x}-2=\\frac97-2=-\\frac57$."
    ],
    "page": 8,
    "tags": [
      "Elimination",
      "Algebraic expressions"
    ],
    "source": "Board 2020 OD Standard"
  },
  {
    "id": 40,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Foundation",
    "prompt": "Determine whether the lines $2x+y=3$ and $4x+2y=6$ are parallel, coincident or intersecting.",
    "answer": "Coincident lines",
    "solution": [
      "Write them as $2x+y-3=0$ and $4x+2y-6=0$.",
      "$\\frac24=\\frac12=\\frac{-3}{-6}$.",
      "All three ratios are equal, so the equations represent the same line."
    ],
    "page": 8,
    "tags": [
      "Coincident lines",
      "Coefficient ratios",
      "Consistency"
    ],
    "source": "Board Term-I 2016, MV98HN3"
  },
  {
    "id": 41,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Foundation",
    "prompt": "Determine whether the pair $3x+2y=8$ and $6x-4y=9$ is consistent or inconsistent.",
    "answer": "Consistent; the pair has a unique solution",
    "solution": [
      "$\\frac{a_1}{a_2}=\\frac36=\\frac12$.",
      "$\\frac{b_1}{b_2}=\\frac2{-4}=-\\frac12$.",
      "Since the ratios are unequal, the lines intersect and the pair is consistent."
    ],
    "page": 8,
    "tags": [
      "Consistency",
      "Unique solution",
      "Coefficient ratios"
    ],
    "source": "Board Term-I 2016"
  },
  {
    "id": 42,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Foundation",
    "prompt": "Is the system $2x+3y-9=0$ and $4x+6y-18=0$ consistent? Justify.",
    "answer": "Yes; it is consistent and dependent, with infinitely many solutions",
    "solution": [
      "$\\frac{2}{4}=\\frac{3}{6}=\\frac{-9}{-18}=\\frac12$.",
      "The equations represent coincident lines.",
      "Therefore the system is consistent and dependent."
    ],
    "page": 8,
    "tags": [
      "Consistency",
      "Coincident lines",
      "Infinitely many solutions"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 43,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "Given $3x+4y=9$, write another equation so that the pair represents (1) intersecting lines and (2) coincident lines.",
    "answer": "Examples: (1) $3x-5y=10$; (2) $6x+8y=18$",
    "solution": [
      "For intersecting lines choose coefficients with $a_1/a_2\\ne b_1/b_2$; one example is $3x-5y=10$.",
      "For coincident lines multiply the original equation by the same non-zero constant.",
      "Multiplying by $2$ gives $6x+8y=18$."
    ],
    "page": 8,
    "tags": [
      "Forming equations",
      "Intersecting lines",
      "Coincident lines"
    ],
    "source": "Board Term-I 2016, Set-O4YP6G7"
  },
  {
    "id": 44,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "For what value of $p$ does $4x+py+8=0$ and $2x+2y+2=0$ have a unique solution?",
    "answer": "$p\\ne4$",
    "solution": [
      "For a unique solution, $\\frac42\\ne\\frac{p}{2}$.",
      "$2\\ne p/2$, hence $p\\ne4$."
    ],
    "page": 8,
    "tags": [
      "Unique solution",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 45,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "For what value of $k$ do $kx-4y=3$ and $6x-12y=9$ have infinitely many solutions?",
    "answer": "$k=2$",
    "solution": [
      "Write the equations as $kx-4y-3=0$ and $6x-12y-9=0$.",
      "For infinitely many solutions, $\\frac{k}{6}=\\frac{-4}{-12}=\\frac{-3}{-9}=\\frac13$.",
      "Thus $k/6=1/3$, so $k=2$."
    ],
    "page": 8,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 46,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "For what value of $k$ will $2x+3y=4$ and $(k+2)x+6y=3k+2$ have infinitely many solutions?",
    "answer": "$k=2$",
    "solution": [
      "For infinitely many solutions, $\\frac{2}{k+2}=\\frac36=\\frac4{3k+2}$.",
      "$\\frac{2}{k+2}=\\frac12$ gives $k+2=4$, so $k=2$.",
      "For $k=2$, $4/(3k+2)=4/8=1/2$, so the condition is satisfied."
    ],
    "page": 9,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 47,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Advanced",
    "prompt": "For what value of $k$ does the system $kx+3y=1$ and $12x+ky=2$ have no solution?",
    "answer": "$k=-6$",
    "solution": [
      "For no solution, $\\frac{k}{12}=\\frac3k\\ne\\frac12$.",
      "$k^2=36$, so $k=6$ or $k=-6$.",
      "When $k=6$, the common coefficient ratio is $1/2$, equal to the constant ratio, so the lines coincide.",
      "When $k=-6$, the coefficient ratio is $-1/2\\ne1/2$, so there is no solution."
    ],
    "page": 9,
    "tags": [
      "No solution",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2011, NCERT"
  },
  {
    "id": 48,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "Solve by cross multiplication: $x+2y=2$ and $x-3y=7$.",
    "answer": "$x=4,\\ y=-1$",
    "solution": [
      "Write $x+2y-2=0$ and $x-3y-7=0$.",
      "Using cross multiplication, $\\frac{x}{2(-7)-(-3)(-2)}=\\frac{y}{(-2)(1)-(-7)(1)}=\\frac1{1(-3)-1(2)}$.",
      "This gives $x/(-20)=y/5=1/(-5)$, hence $x=4$ and $y=-1$."
    ],
    "page": 9,
    "tags": [
      "Cross multiplication",
      "Solving equations"
    ],
    "source": "Board Term-I 2016"
  },
  {
    "id": 49,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "Solve by substitution: $3x+2y-7=0$ and $4x+y-6=0$.",
    "answer": "$x=1,\\ y=2$",
    "solution": [
      "From $4x+y-6=0$, $y=6-4x$.",
      "Substitute into the first equation: $3x+2(6-4x)-7=0$.",
      "$5-5x=0$, so $x=1$; then $y=6-4=2$."
    ],
    "page": 10,
    "tags": [
      "Substitution",
      "Solving equations"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 50,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "In rectangle $ABCD$, the top side is $x+y$, the left side is $x-y$, the bottom is $22$ and the right side is $16$. Find $x$ and $y$.",
    "answer": "$x=19,\\ y=3$",
    "solution": [
      "Opposite sides of a rectangle are equal, so $x+y=22$ and $x-y=16$.",
      "Adding gives $2x=38$, so $x=19$.",
      "Then $19+y=22$, hence $y=3$."
    ],
    "page": 10,
    "tags": [
      "Geometry",
      "Rectangle",
      "Elimination"
    ],
    "source": "Board Term-I 2012, Set-30",
    "diagram": {
      "kind": "rectangle",
      "top": "x + y",
      "right": "16",
      "bottom": "22",
      "left": "x - y",
      "caption": "Native recreation of the rectangle used in the question."
    }
  },
  {
    "id": 51,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $99x+101y=499$ and $101x+99y=501$.",
    "answer": "$x=3,\\ y=2$",
    "solution": [
      "Adding the equations gives $200x+200y=1000$, hence $x+y=5$.",
      "Subtracting the first equation from the second gives $2x-2y=2$, hence $x-y=1$.",
      "Adding these reduced equations gives $2x=6$, so $x=3$ and $y=2$."
    ],
    "page": 10,
    "tags": [
      "Elimination",
      "Solving equations"
    ],
    "source": "Board Term-I 2012, Set-55"
  },
  {
    "id": 52,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Moderate",
    "prompt": "Solve by substitution: $2x-y=2$ and $x+3y=15$.",
    "answer": "$x=3,\\ y=4$",
    "solution": [
      "From $2x-y=2$, $y=2x-2$.",
      "Substitute into $x+3y=15$: $x+3(2x-2)=15$.",
      "$7x=21$, so $x=3$ and $y=4$."
    ],
    "page": 10,
    "tags": [
      "Substitution",
      "Solving equations"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 53,
    "marks": 2,
    "type": "short-answer",
    "difficulty": "Advanced",
    "prompt": "Find the value(s) of $k$ for which $kx+y=k^2$ and $x+ky=1$ have infinitely many solutions.",
    "answer": "$k=\\pm1$",
    "solution": [
      "For infinitely many solutions, $\\frac{k}{1}=\\frac1k=\\frac{k^2}{1}$.",
      "$k=1/k$ gives $k^2=1$.",
      "Therefore $k=1$ or $k=-1$, and both satisfy the constant ratio condition."
    ],
    "page": 11,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2017"
  }
];
