import type { LinearEquationQuestion } from "./linear-equations-question-bank-types";

export const threeMarkLinearEquationQuestions: LinearEquationQuestion[] = [
  {
    "id": 54,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $\\frac{21}{x}+\\frac{47}{y}=110$ and $\\frac{47}{x}+\\frac{21}{y}=162$, where $x,y\\ne0$.",
    "answer": "$x=\\frac13,\\ y=1$",
    "solution": [
      "Let $u=1/x$ and $v=1/y$. Then $21u+47v=110$ and $47u+21v=162$.",
      "Adding gives $68u+68v=272$, so $u+v=4$.",
      "Subtracting the first equation from the second gives $26u-26v=52$, so $u-v=2$.",
      "Hence $u=3$, $v=1$, so $x=1/3$ and $y=1$."
    ],
    "page": 11,
    "tags": [
      "Substitution",
      "Reciprocal equations",
      "Elimination"
    ]
  },
  {
    "id": 55,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A fraction becomes $\\frac13$ when $2$ is subtracted from its numerator, and becomes $\\frac12$ when $1$ is subtracted from its denominator. Find the fraction.",
    "answer": "$\\frac7{15}$",
    "solution": [
      "Let the fraction be $x/y$.",
      "$\\frac{x-2}{y}=\\frac13$ gives $y=3x-6$.",
      "$\\frac{x}{y-1}=\\frac12$ gives $y=2x+1$.",
      "Equating gives $x=7$ and then $y=15$."
    ],
    "page": 11,
    "tags": [
      "Fractions",
      "Forming equations",
      "Substitution"
    ],
    "source": "Board 2019 Delhi"
  },
  {
    "id": 56,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "In pentagon $ABCDE$, $BE\\parallel CD$, $BC\\parallel DE$, $BC\\perp CD$, $AB=AE=5$ cm, $BE=7$ cm, $BC=x-y$ and $CD=x+y$. If the perimeter is $27$ cm, find $x$ and $y$.",
    "answer": "$x=6,\\ y=1$",
    "solution": [
      "$BCDE$ is a rectangle, so $CD=BE$ and therefore $x+y=7$.",
      "Also $DE=BC=x-y$. The perimeter is $5+(x-y)+(x+y)+(x-y)+5=27$.",
      "Thus $3x-y=17$. Together with $x+y=7$, this gives $4x=24$.",
      "Hence $x=6$ and $y=1$."
    ],
    "page": 11,
    "tags": [
      "Geometry",
      "Pentagon",
      "Forming equations"
    ],
    "source": "Board 2020 SQP Standard",
    "diagram": {
      "kind": "house-pentagon",
      "labels": {
        "topLeft": "5 cm",
        "topRight": "5 cm",
        "middle": "7 cm",
        "left": "x - y",
        "bottom": "x + y"
      },
      "caption": "Native recreation of the pentagonal figure."
    }
  },
  {
    "id": 57,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Half the perimeter of a rectangular garden is $36$ m. Its length is $4$ m more than its width. Find its dimensions graphically.",
    "answer": "Length $=20$ m, width $=16$ m",
    "solution": [
      "Let length be $x$ and width be $y$. Half the perimeter gives $x+y=36$.",
      "The length condition gives $x-y=4$.",
      "The graphs of these lines intersect at $(20,16)$.",
      "Therefore the length is $20$ m and the width is $16$ m."
    ],
    "page": 12,
    "tags": [
      "Graphical method",
      "Rectangle",
      "Word problem"
    ],
    "source": "Board Term-I 2013",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x + y = 36",
          "a": 1,
          "b": 1,
          "c": 36
        },
        {
          "label": "x - y = 4",
          "a": 1,
          "b": -1,
          "c": 4
        }
      ],
      "points": [
        {
          "x": 20,
          "y": 16,
          "label": "(20, 16)"
        }
      ],
      "xRange": [
        0,
        38
      ],
      "yRange": [
        0,
        25
      ],
      "caption": "Native graph showing the intersection that gives the dimensions."
    }
  },
  {
    "id": 58,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Given $2x+3y-8=0$, write another equation so that the pair represents (a) intersecting lines, (b) parallel lines and (c) coincident lines.",
    "answer": "Examples: (a) $5x+2y-9=0$, (b) $6x+9y+7=0$, (c) $4x+6y-16=0$",
    "solution": [
      "For intersecting lines choose unequal coefficient ratios; $5x+2y-9=0$ is one example.",
      "For a distinct parallel line keep $a:b=2:3$ but change the constant ratio; $6x+9y+7=0$ works.",
      "For a coincident line multiply every term by the same number; multiplying by $2$ gives $4x+6y-16=0$."
    ],
    "page": 12,
    "tags": [
      "Forming equations",
      "Graphical interpretation",
      "Coefficient ratios"
    ],
    "source": "Board Term-I 2014, Set-B"
  },
  {
    "id": 59,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve graphically: $4x-y=4$ and $3x+2y=14$.",
    "answer": "$x=2,\\ y=4$",
    "solution": [
      "Rewrite the first line as $y=4x-4$ and the second as $y=(14-3x)/2$.",
      "Plot two points for each line and draw the lines.",
      "They intersect at $(2,4)$, so $x=2$ and $y=4$."
    ],
    "page": 13,
    "tags": [
      "Graphical method",
      "Unique solution"
    ],
    "source": "Board Term-I 2014",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "4x - y = 4",
          "a": 4,
          "b": -1,
          "c": 4
        },
        {
          "label": "3x + 2y = 14",
          "a": 3,
          "b": 2,
          "c": 14
        }
      ],
      "points": [
        {
          "x": 2,
          "y": 4,
          "label": "(2, 4)"
        }
      ],
      "xRange": [
        -2,
        8
      ],
      "yRange": [
        -6,
        12
      ],
      "caption": "Native graph of the two equations."
    }
  },
  {
    "id": 60,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Determine $m$ and $n$ so that $(2m-1)x+3y-5=0$ and $3x+(n-1)y-2=0$ have infinitely many solutions.",
    "answer": "$m=\\frac{17}{4},\\ n=\\frac{11}{5}$",
    "solution": [
      "For infinitely many solutions, $\\frac{2m-1}{3}=\\frac3{n-1}=\\frac{-5}{-2}=\\frac52$.",
      "$2(2m-1)=15$, so $4m=17$ and $m=17/4$.",
      "$5(n-1)=6$, so $n=11/5$."
    ],
    "page": 13,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2013, VKH6FFC; 2011, Set-66"
  },
  {
    "id": 61,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Find $\\alpha$ and $\\beta$ for which $2x+3y=7$ and $2\\alpha x+(\\alpha+\\beta)y=28$ have infinitely many solutions.",
    "answer": "$\\alpha=4,\\ \\beta=8$",
    "solution": [
      "For infinitely many solutions, $\\frac2{2\\alpha}=\\frac3{\\alpha+\\beta}=\\frac7{28}=\\frac14$.",
      "$2/(2\\alpha)=1/4$ gives $\\alpha=4$.",
      "$3/(\\alpha+\\beta)=1/4$ gives $\\alpha+\\beta=12$, hence $\\beta=8$."
    ],
    "page": 13,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2011"
  },
  {
    "id": 62,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Represent graphically $x-5y=6$ and $2x-10y=12$, and comment on consistency.",
    "answer": "Coincident lines; the pair is consistent with infinitely many solutions",
    "solution": [
      "The second equation is exactly twice the first.",
      "Therefore both equations produce the same line on the graph.",
      "Every point on the line satisfies both equations, so the pair is consistent with infinitely many solutions."
    ],
    "page": 13,
    "tags": [
      "Graphical method",
      "Coincident lines",
      "Consistency"
    ],
    "source": "Board Term-I 2011",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x - 5y = 6",
          "a": 1,
          "b": -5,
          "c": 6
        },
        {
          "label": "2x - 10y = 12",
          "a": 2,
          "b": -10,
          "c": 12
        }
      ],
      "xRange": [
        -6,
        14
      ],
      "yRange": [
        -4,
        4
      ],
      "caption": "The two equations overlap exactly."
    }
  },
  {
    "id": 63,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "For what value of $p$ does $(2p-1)x+(p-1)y=2p+1$ together with $y+3x-1=0$ have no solution?",
    "answer": "$p=2$",
    "solution": [
      "Write the equations in standard form. For no solution, $\\frac{2p-1}{3}=\\frac{p-1}{1}\\ne\\frac{-(2p+1)}{-1}$.",
      "$2p-1=3p-3$ gives $p=2$.",
      "At $p=2$, the common coefficient ratio is $1$, while the constant ratio is $5$, so the lines are parallel and distinct."
    ],
    "page": 14,
    "tags": [
      "No solution",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2011, Set-28"
  },
  {
    "id": 64,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Find $k$ for which $x+2y=3$ and $(k-1)x+(k+1)y=k+2$ have no solution.",
    "answer": "$k=3$",
    "solution": [
      "For no solution, $\\frac1{k-1}=\\frac2{k+1}\\ne\\frac3{k+2}$.",
      "$k+1=2k-2$, so $k=3$.",
      "For $k=3$, the coefficient ratio is $1/2$ while the constant ratio is $3/5$, so the lines are parallel and distinct."
    ],
    "page": 14,
    "tags": [
      "No solution",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board Term-I 2011, Set-52"
  },
  {
    "id": 65,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Foundation",
    "prompt": "The sum of the ages of a father and son is $40$ years. The father is three times as old as the son. Find their ages.",
    "answer": "Father $=30$ years; son $=10$ years",
    "solution": [
      "Let the father’s age be $x$ and the son’s age be $y$.",
      "$x+y=40$ and $x=3y$.",
      "Substitution gives $4y=40$, so $y=10$ and $x=30$."
    ],
    "page": 14,
    "tags": [
      "Ages",
      "Word problem",
      "Substitution"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 66,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve by cross multiplication: $5x+4y-4=0$ and $x-12y-20=0$.",
    "answer": "$x=2,\\ y=-\\frac32$",
    "solution": [
      "Use $a_1=5,b_1=4,c_1=-4$ and $a_2=1,b_2=-12,c_2=-20$.",
      "$\\frac{x}{4(-20)-(-12)(-4)}=\\frac{y}{(-4)(1)-(-20)(5)}=\\frac1{5(-12)-1(4)}$.",
      "$x/(-128)=y/96=1/(-64)$, hence $x=2$ and $y=-3/2$."
    ],
    "page": 14,
    "tags": [
      "Cross multiplication",
      "Solving equations"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 67,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A father’s present age is twice the sum of the ages of his two children. After $20$ years, his age will equal the sum of their ages. Find the father’s present age.",
    "answer": "$40$ years",
    "solution": [
      "Let $x$ be the present sum of the children’s ages and $y$ the father’s age.",
      "$y=2x$. After $20$ years, the children’s combined age increases by $40$, so $y+20=x+40$.",
      "Thus $x-y=-20$. Solving with $2x-y=0$ gives $x=20$ and $y=40$."
    ],
    "page": 15,
    "tags": [
      "Ages",
      "Word problem",
      "Forming equations"
    ],
    "source": "Board Term-I 2012, Set-39"
  },
  {
    "id": 68,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A hostel charge has a fixed part and a daily food charge. Swati pays Rs. $3,000$ for $20$ food days, while Mansi pays Rs. $3,500$ for $25$ food days. Find the fixed charge and food cost per day.",
    "answer": "Fixed charge $=$ Rs. $1,000$; food cost $=$ Rs. $100$ per day",
    "solution": [
      "Let fixed charge be $x$ and daily food cost be $y$.",
      "$x+20y=3000$ and $x+25y=3500$.",
      "Subtracting gives $5y=500$, so $y=100$.",
      "Then $x+2000=3000$, so $x=1000$."
    ],
    "page": 15,
    "tags": [
      "Money",
      "Word problem",
      "Elimination"
    ],
    "source": "Board Term-I 2016, 2015"
  },
  {
    "id": 69,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $\\frac{x}{2}+\\frac{2y}{3}=-1$ and $x-\\frac{y}{3}=3$.",
    "answer": "$x=2,\\ y=-3$",
    "solution": [
      "Multiply the first equation by $6$: $3x+4y=-6$.",
      "Multiply the second by $3$: $3x-y=9$.",
      "Subtracting gives $5y=-15$, so $y=-3$.",
      "Then $3x+4(-3)=-6$, hence $x=2$."
    ],
    "page": 15,
    "tags": [
      "Fractions in equations",
      "Elimination"
    ]
  },
  {
    "id": 70,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $8x+5y=9$ and $3x+2y=4$ by both substitution and cross multiplication.",
    "answer": "$x=-2,\\ y=5$",
    "solution": [
      "By substitution, $x=(4-2y)/3$. Substitution in $8x+5y=9$ gives $32-16y+15y=27$, so $y=5$ and $x=-2$.",
      "By cross multiplication on $8x+5y-9=0$ and $3x+2y-4=0$, the same values are obtained.",
      "Therefore $x=-2$ and $y=5$."
    ],
    "page": 15,
    "tags": [
      "Substitution",
      "Cross multiplication",
      "Solving equations"
    ],
    "source": "Board Term-I 2015, SYFH4D"
  },
  {
    "id": 71,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Two men and seven boys can complete a work in $4$ days. Four men and four boys can complete it in $3$ days. How long would one man alone or one boy alone take?",
    "answer": "One man: $15$ days; one boy: $60$ days",
    "solution": [
      "Let one man’s one-day work be $a=1/x$ and one boy’s be $b=1/y$.",
      "$2a+7b=1/4$ and $4a+4b=1/3$.",
      "Solving gives $a=1/15$ and $b=1/60$.",
      "Hence one man needs $15$ days and one boy needs $60$ days."
    ],
    "page": 16,
    "tags": [
      "Work and time",
      "Reciprocal equations",
      "Word problem"
    ],
    "source": "Board Term-I 2013"
  },
  {
    "id": 72,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "In an election between A and B, A obtained twice the number of votes not cast, and the number not cast was twice A’s majority over B. There were $18,000$ persons on the roll. How many votes did B receive?",
    "answer": "$6,000$ votes",
    "solution": [
      "Let A receive $x$ votes and B receive $y$ votes. Non-voters are $18000-x-y$.",
      "$x=2(18000-x-y)$ gives $3x+2y=36000$.",
      "$18000-x-y=2(x-y)$ gives $3x-y=18000$.",
      "Subtracting gives $3y=18000$, so $y=6000$."
    ],
    "page": 16,
    "tags": [
      "Elections",
      "Word problem",
      "Elimination"
    ],
    "source": "Board Term-I 2012, Set-56"
  },
  {
    "id": 73,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "In pentagon $ABCDE$, $BE\\parallel CD$, $BC\\parallel DE$, $BC\\perp DC$, $AB=AE=3$ cm, $BE=5$ cm, $BC=x-y$ and $CD=x+y$. If the perimeter is $21$ cm, find $x$ and $y$.",
    "answer": "$x=5,\\ y=0$",
    "solution": [
      "$BCDE$ is a rectangle, so $CD=BE$, hence $x+y=5$.",
      "Also $DE=BC=x-y$. The perimeter gives $3+(x-y)+(x+y)+(x-y)+3=21$.",
      "Thus $3x-y=15$. Adding this to $x+y=5$ gives $4x=20$.",
      "Hence $x=5$ and $y=0$."
    ],
    "page": 17,
    "tags": [
      "Geometry",
      "Pentagon",
      "Forming equations"
    ],
    "source": "Board Term-I 2011",
    "diagram": {
      "kind": "house-pentagon",
      "labels": {
        "topLeft": "3 cm",
        "topRight": "3 cm",
        "middle": "5 cm",
        "left": "x - y",
        "bottom": "x + y"
      },
      "caption": "Native recreation of the pentagonal figure."
    }
  },
  {
    "id": 74,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $\\frac{x+1}{2}+\\frac{y-1}{3}=9$ and $\\frac{x-1}{3}+\\frac{y+1}{2}=8$.",
    "answer": "$x=13,\\ y=7$",
    "solution": [
      "Multiplying the first equation by $6$ gives $3x+2y=53$.",
      "Multiplying the second by $6$ gives $2x+3y=47$.",
      "Multiply these by $3$ and $2$ respectively and subtract: $5x=65$, so $x=13$.",
      "Then $2(13)+3y=47$, so $y=7$."
    ],
    "page": 17,
    "tags": [
      "Fractions in equations",
      "Elimination"
    ],
    "source": "Board Term-I 2011, Set-52"
  },
  {
    "id": 75,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $\\frac6{x-1}-\\frac3{y-2}=1$ and $\\frac5{x-1}-\\frac1{y-2}=2$, where $x\\ne1$ and $y\\ne2$.",
    "answer": "$x=4,\\ y=5$",
    "solution": [
      "Let $p=1/(x-1)$ and $q=1/(y-2)$. Then $6p-3q=1$ and $5p-q=2$.",
      "Multiply the second equation by $3$ and combine with the first to obtain $21p=7$, so $p=1/3$.",
      "Then $2-3q=1$, so $q=1/3$.",
      "$x-1=3$ and $y-2=3$, giving $x=4$, $y=5$."
    ],
    "page": 17,
    "tags": [
      "Reciprocal equations",
      "Substitution",
      "Elimination"
    ],
    "source": "Board Term-I 2011"
  },
  {
    "id": 76,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Seven times a two-digit number equals four times the number obtained by reversing its digits. The difference of the digits is $3$. Determine the number.",
    "answer": "$36$",
    "solution": [
      "Let the tens digit be $y$ and the units digit be $x$. The number is $10y+x$.",
      "$7(10y+x)=4(10x+y)$ simplifies to $x=2y$.",
      "The digit difference gives $x-y=3$.",
      "Hence $y=3$, $x=6$, and the number is $36$."
    ],
    "page": 18,
    "tags": [
      "Two-digit numbers",
      "Word problem",
      "Forming equations"
    ],
    "source": "Board Term-I 2017"
  },
  {
    "id": 77,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $\\frac{a^2}{x}-\\frac{b^2}{y}=0$ and $\\frac{a^2b}{x}+\\frac{b^2a}{y}=a+b$, where $x,y\\ne0$.",
    "answer": "$x=a^2,\\ y=b^2$",
    "solution": [
      "Let $p=1/x$ and $q=1/y$. Then $a^2p-b^2q=0$ and $a^2bp+b^2aq=a+b$.",
      "Multiply the first equation by $a$ and add it to the second: $(a^3+a^2b)p=a+b$.",
      "Thus $p=1/a^2$. Substitution in the first equation gives $q=1/b^2$.",
      "Hence $x=a^2$ and $y=b^2$."
    ],
    "page": 18,
    "tags": [
      "Reciprocal equations",
      "Parameters",
      "Elimination"
    ],
    "source": "Board Term-I 2011"
  },
  {
    "id": 78,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $ax+by=\\frac{a+b}{2}$ and $3x+5y=4$.",
    "answer": "$x=\\frac12,\\ y=\\frac12$",
    "solution": [
      "Multiply the first equation by $2$: $2ax+2by=a+b$.",
      "Multiply this by $5$, and multiply $3x+5y=4$ by $2b$. Subtracting gives $(10a-6b)x=5a-3b$.",
      "Therefore $x=1/2$ (where the displayed system is non-degenerate).",
      "Substitution in $3x+5y=4$ gives $y=1/2$."
    ],
    "page": 18,
    "tags": [
      "Parameters",
      "Elimination",
      "Solving equations"
    ],
    "source": "Board Term-I 2011, Set-44"
  },
  {
    "id": 79,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $4x+\\frac6y=15$ and $6x-\\frac8y=14$. Also find $p$ if $y=px-2$.",
    "answer": "$x=3,\\ y=2,\\ p=\\frac43$",
    "solution": [
      "Let $z=1/y$. Then $4x+6z=15$ and $6x-8z=14$.",
      "Multiply the first equation by $4$ and the second by $3$, then add: $34x=102$, so $x=3$.",
      "Then $12+6z=15$, so $z=1/2$ and $y=2$.",
      "Finally $2=3p-2$, so $p=4/3$."
    ],
    "page": 19,
    "tags": [
      "Reciprocal equations",
      "Parameter",
      "Elimination"
    ],
    "source": "Board Term-I 2011, Set-60"
  },
  {
    "id": 80,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A chemist has a $50\\%$ acid solution and a $25\\%$ acid solution. How much of each should be mixed to make $10$ litres of a $40\\%$ acid solution?",
    "answer": "$6$ L of the $50\\%$ solution and $4$ L of the $25\\%$ solution",
    "solution": [
      "Let $x$ and $y$ be the litres of the $50\\%$ and $25\\%$ solutions.",
      "$x+y=10$. Acid content gives $0.50x+0.25y=0.40(10)$.",
      "Multiplying by $4$ gives $2x+y=16$.",
      "Subtracting $x+y=10$ gives $x=6$, and then $y=4$."
    ],
    "page": 19,
    "tags": [
      "Mixtures",
      "Percentages",
      "Word problem"
    ],
    "source": "Board Term-I 2015, JRTSY"
  },
  {
    "id": 81,
    "marks": 3,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Determine whether $7x-4y=49$ and $5x-6y=57$ have a unique solution. If yes, find it.",
    "answer": "Yes; $x=3,\\ y=-7$",
    "solution": [
      "$7/5\\ne(-4)/(-6)$, so the pair has a unique solution.",
      "Multiply the first equation by $5$ and the second by $7$: $35x-20y=245$ and $35x-42y=399$.",
      "Subtracting gives $22y=-154$, so $y=-7$.",
      "Then $5x+42=57$, so $x=3$."
    ],
    "page": 19,
    "tags": [
      "Unique solution",
      "Elimination",
      "Coefficient ratios"
    ],
    "source": "Board Term-I 2011"
  }
];
