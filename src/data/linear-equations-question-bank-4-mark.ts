import type { LinearEquationQuestion } from "./linear-equations-question-bank-types";

export const fourMarkLinearEquationQuestions: LinearEquationQuestion[] = [
  {
    "id": 82,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Determine graphically the coordinates of the vertices of the triangle whose sides are $2y-x=8$, $5y-x=14$ and $y-2x=1$.",
    "answer": "$(1,3),\\ (2,5)$ and $(-4,2)$",
    "solution": [
      "Plot each of the three straight lines using convenient pairs of points.",
      "$5y-x=14$ and $y-2x=1$ intersect at $(1,3)$.",
      "$2y-x=8$ and $y-2x=1$ intersect at $(2,5)$.",
      "$2y-x=8$ and $5y-x=14$ intersect at $(-4,2)$."
    ],
    "page": 20,
    "tags": [
      "Graphical method",
      "Coordinate geometry",
      "Triangle"
    ],
    "source": "Board 2020 Delhi Standard",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "2y - x = 8",
          "a": -1,
          "b": 2,
          "c": 8
        },
        {
          "label": "5y - x = 14",
          "a": -1,
          "b": 5,
          "c": 14
        },
        {
          "label": "y - 2x = 1",
          "a": -2,
          "b": 1,
          "c": 1
        }
      ],
      "points": [
        {
          "x": 1,
          "y": 3,
          "label": "A(1, 3)"
        },
        {
          "x": 2,
          "y": 5,
          "label": "B(2, 5)"
        },
        {
          "x": -4,
          "y": 2,
          "label": "C(-4, 2)"
        }
      ],
      "polygon": [
        {
          "x": 1,
          "y": 3
        },
        {
          "x": 2,
          "y": 5
        },
        {
          "x": -4,
          "y": 2
        }
      ],
      "xRange": [
        -9,
        8
      ],
      "yRange": [
        -4,
        8
      ],
      "caption": "Native graph of the three sides and their triangle."
    }
  },
  {
    "id": 83,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A man rows $20$ km downstream in $2$ hours and $4$ km upstream in $2$ hours. Find his speed in still water and the speed of the stream.",
    "answer": "Boat in still water $=6$ km/h; stream $=4$ km/h",
    "solution": [
      "Let the still-water speed be $x$ and stream speed be $y$.",
      "Downstream speed is $x+y=20/2=10$.",
      "Upstream speed is $x-y=4/2=2$.",
      "Adding gives $2x=12$, so $x=6$; then $y=4$."
    ],
    "page": 20,
    "tags": [
      "Boats and streams",
      "Speed and distance",
      "Word problem"
    ],
    "source": "Board 2020 Delhi Standard"
  },
  {
    "id": 84,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Two pipes together fill a swimming pool in $12$ hours. If the larger pipe works for $4$ hours and the smaller for $9$ hours, half the pool is filled. How long does each pipe take separately?",
    "answer": "Larger pipe $=20$ hours; smaller pipe $=30$ hours",
    "solution": [
      "Let the larger and smaller pipes take $x$ and $y$ hours respectively.",
      "$\\frac1x+\\frac1y=\\frac1{12}$ and $\\frac4x+\\frac9y=\\frac12$.",
      "Multiply the first equation by $9$ and subtract the second: $5/x=1/4$, so $x=20$.",
      "Then $1/y=1/12-1/20=1/30$, hence $y=30$."
    ],
    "page": 20,
    "tags": [
      "Pipes and cisterns",
      "Reciprocal equations",
      "Work and time"
    ],
    "source": "Board 2020 OD Standard"
  },
  {
    "id": 85,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "For what value of $k$ do $2x+3y=7$ and $(k+1)x+(2k-1)y=4k+1$ have infinitely many solutions?",
    "answer": "$k=5$",
    "solution": [
      "For infinitely many solutions, $\\frac2{k+1}=\\frac3{2k-1}=\\frac7{4k+1}$.",
      "Using $\\frac2{k+1}=\\frac7{4k+1}$ gives $8k+2=7k+7$.",
      "Thus $k=5$; it also satisfies the remaining ratio."
    ],
    "page": 21,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board 2019 Delhi Standard"
  },
  {
    "id": 86,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Find $c$ if $cx+3y+(3-c)=0$ and $12x+cy-c=0$ have infinitely many solutions.",
    "answer": "$c=6$",
    "solution": [
      "For infinitely many solutions, $\\frac{c}{12}=\\frac3c=\\frac{3-c}{-c}$.",
      "From $c/12=(3-c)/(-c)$, $c^2-12c+36=0$.",
      "$(c-6)^2=0$, so $c=6$.",
      "The other ratio is also satisfied for $c=6$."
    ],
    "page": 21,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board 2019 Delhi"
  },
  {
    "id": 87,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A father’s age is three times the sum of the ages of his two children. After $5$ years, his age will be twice the sum of their ages. Find the father’s present age.",
    "answer": "$45$ years",
    "solution": [
      "Let father’s age be $x$ and the present sum of the children’s ages be $y$. Then $x=3y$.",
      "After $5$ years, the children’s combined age becomes $y+10$, so $x+5=2(y+10)$.",
      "This gives $x-2y=15$. Substituting $x=3y$ gives $y=15$.",
      "Therefore $x=45$."
    ],
    "page": 21,
    "tags": [
      "Ages",
      "Word problem",
      "Forming equations"
    ],
    "source": "Board 2019 Delhi"
  },
  {
    "id": 88,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Two water taps together fill a tank in $1\\frac78$ hours. The larger tap takes $2$ hours less than the smaller tap to fill the tank alone. Find their individual times.",
    "answer": "Larger tap $=3$ hours; smaller tap $=5$ hours",
    "solution": [
      "Let the smaller tap take $t$ hours; the larger takes $t-2$ hours.",
      "$\\frac1t+\\frac1{t-2}=\\frac8{15}$.",
      "This simplifies to $4t^2-23t+15=0=(4t-3)(t-5)$.",
      "$t=3/4$ would make $t-2$ negative, so reject it. Thus $t=5$ and $t-2=3$."
    ],
    "page": 22,
    "tags": [
      "Pipes and cisterns",
      "Quadratic reduction",
      "Work and time"
    ],
    "source": "Board 2019 Delhi"
  },
  {
    "id": 89,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "A boat travels $30$ km upstream and $44$ km downstream in $10$ hours. In $13$ hours it travels $40$ km upstream and $55$ km downstream. Find the speed of the stream and the boat in still water.",
    "answer": "Boat in still water $=8$ km/h; stream $=3$ km/h",
    "solution": [
      "Let boat speed be $x$ and stream speed be $y$. Put $u=1/(x-y)$ and $v=1/(x+y)$.",
      "Then $30u+44v=10$ and $40u+55v=13$.",
      "Elimination gives $u=1/5$ and $v=1/11$.",
      "So $x-y=5$ and $x+y=11$, giving $x=8$ and $y=3$."
    ],
    "page": 22,
    "tags": [
      "Boats and streams",
      "Reciprocal equations",
      "Speed and distance"
    ],
    "source": "Board 2019 Delhi"
  },
  {
    "id": 90,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Sumit is three times as old as his son. Five years later he will be two and a half times as old as his son. How old is Sumit now?",
    "answer": "$45$ years",
    "solution": [
      "Let Sumit’s age be $x$ and his son’s age be $y$. Then $x=3y$.",
      "After five years, $x+5=\\frac52(y+5)$.",
      "$2x+10=5y+25$. Substituting $x=3y$ gives $y=15$.",
      "Therefore $x=45$."
    ],
    "page": 22,
    "tags": [
      "Ages",
      "Word problem",
      "Substitution"
    ],
    "source": "Board 2019 OD"
  },
  {
    "id": 91,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "For what value of $k$ do $2x+3y=7$ and $(k+2)x-3(1-k)y=5k+1$ have infinitely many solutions?",
    "answer": "$k=4$",
    "solution": [
      "For infinitely many solutions, $\\frac2{k+2}=\\frac3{-3(1-k)}=\\frac7{5k+1}$.",
      "Using the first two ratios: $2/[k+2]=-1/(1-k)$.",
      "$2(1-k)=-(k+2)$, so $k=4$.",
      "At $k=4$, all three ratios equal $1/3$."
    ],
    "page": 23,
    "tags": [
      "Infinitely many solutions",
      "Coefficient ratios",
      "Parameter"
    ],
    "source": "Board 2019 OD"
  },
  {
    "id": 92,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "The total cost of a piece of cloth is Rs. $200$. If it were $5$ m longer and each metre cost Rs. $2$ less, the total cost would be unchanged. Find the length and original rate per metre.",
    "answer": "Length $=20$ m; rate $=$ Rs. $10$ per metre",
    "solution": [
      "Let length be $x$ metres and rate be Rs. $y$ per metre. Then $xy=200$, so $y=200/x$.",
      "The changed condition gives $(x+5)(y-2)=200$.",
      "Substitution gives $x^2+5x-20x-500=0$, or $(x+25)(x-20)=0$.",
      "Reject $x=-25$; hence $x=20$ and $y=200/20=10$."
    ],
    "page": 23,
    "tags": [
      "Money",
      "Nonlinear substitution",
      "Word problem"
    ],
    "source": "Board 2019 OD"
  },
  {
    "id": 93,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "In rectangle $ABCD$, $CD=x+y$, $BC=x-y$, $AB=30$ cm and $AD=14$ cm. Find $x$ and $y$.",
    "answer": "$x=22$ cm, $y=8$ cm",
    "solution": [
      "Opposite sides are equal, so $x+y=30$ and $x-y=14$.",
      "Adding gives $2x=44$, hence $x=22$.",
      "Then $22+y=30$, so $y=8$."
    ],
    "page": 24,
    "tags": [
      "Geometry",
      "Rectangle",
      "Elimination"
    ],
    "source": "Board 2018",
    "diagram": {
      "kind": "rectangle",
      "top": "x + y",
      "right": "x - y",
      "bottom": "30 cm",
      "left": "14 cm",
      "caption": "Native recreation of the rectangle."
    }
  },
  {
    "id": 94,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "For Uttarakhand flood victims, sections X-A and X-B together contributed Rs. $1,500$. X-A contributed Rs. $100$ less than X-B. Find graphically the contribution of each section.",
    "answer": "X-A $=$ Rs. $700$; X-B $=$ Rs. $800$",
    "solution": [
      "Let X-A contribute $x$ and X-B contribute $y$. Then $x+y=1500$ and $y-x=100$.",
      "Plot $y=1500-x$ and $y=x+100$.",
      "The lines intersect at $(700,800)$.",
      "Therefore X-A contributed Rs. $700$ and X-B contributed Rs. $800$."
    ],
    "page": 24,
    "tags": [
      "Graphical method",
      "Money",
      "Word problem"
    ],
    "source": "Board Term-I 2016",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x + y = 1500",
          "a": 1,
          "b": 1,
          "c": 1500
        },
        {
          "label": "y - x = 100",
          "a": -1,
          "b": 1,
          "c": 100
        }
      ],
      "points": [
        {
          "x": 700,
          "y": 800,
          "label": "(700, 800)"
        }
      ],
      "xRange": [
        0,
        1600
      ],
      "yRange": [
        0,
        1600
      ],
      "caption": "Native graph of the two contribution equations."
    }
  },
  {
    "id": 95,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Determine graphically whether $3x-y=7$ and $2x+5y+1=0$ have a unique solution, infinitely many solutions or no solution.",
    "answer": "Unique solution: $x=2,\\ y=-1$",
    "solution": [
      "The coefficient ratios are $3/2$ and $-1/5$, which are unequal, so the lines intersect once.",
      "Plot $y=3x-7$ and $2x+5y=-1$.",
      "The intersection is $(2,-1)$."
    ],
    "page": 24,
    "tags": [
      "Graphical method",
      "Unique solution",
      "Consistency"
    ],
    "source": "Board Term-I 2015",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "3x - y = 7",
          "a": 3,
          "b": -1,
          "c": 7
        },
        {
          "label": "2x + 5y = -1",
          "a": 2,
          "b": 5,
          "c": -1
        }
      ],
      "points": [
        {
          "x": 2,
          "y": -1,
          "label": "(2, -1)"
        }
      ],
      "xRange": [
        -5,
        7
      ],
      "yRange": [
        -8,
        7
      ],
      "caption": "Native graph showing the unique intersection."
    }
  },
  {
    "id": 96,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Draw the graphs of $x+2y=5$ and $2x-3y=-4$. Also find where the lines meet the $x$-axis.",
    "answer": "The lines meet the $x$-axis at $(5,0)$ and $(-2,0)$; their intersection is $(1,2)$",
    "solution": [
      "For $x+2y=5$, putting $y=0$ gives the $x$-intercept $(5,0)$.",
      "For $2x-3y=-4$, putting $y=0$ gives $(-2,0)$.",
      "Plotting both lines shows that they intersect at $(1,2)$."
    ],
    "page": 25,
    "tags": [
      "Graphical method",
      "Intercepts",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2015",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x + 2y = 5",
          "a": 1,
          "b": 2,
          "c": 5
        },
        {
          "label": "2x - 3y = -4",
          "a": 2,
          "b": -3,
          "c": -4
        }
      ],
      "points": [
        {
          "x": 5,
          "y": 0,
          "label": "(5, 0)"
        },
        {
          "x": -2,
          "y": 0,
          "label": "(-2, 0)"
        },
        {
          "x": 1,
          "y": 2,
          "label": "(1, 2)"
        }
      ],
      "xRange": [
        -4,
        7
      ],
      "yRange": [
        -3,
        6
      ],
      "caption": "Native graph with the required intercepts."
    }
  },
  {
    "id": 97,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve graphically $3x-4y+3=0$ and $3x+4y-21=0$. Find the vertices and area of the triangle formed with the $x$-axis.",
    "answer": "Solution $(3,3)$; vertices $(-1,0),(7,0),(3,3)$; area $12$ square units",
    "solution": [
      "The two lines intersect at $(3,3)$.",
      "Their $x$-intercepts are $(-1,0)$ and $(7,0)$.",
      "The triangle has base $8$ and height $3$.",
      "Area $=\\frac12\\times8\\times3=12$ square units."
    ],
    "page": 25,
    "tags": [
      "Graphical method",
      "Area",
      "Triangle"
    ],
    "source": "Board Term-I 2015",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "3x - 4y + 3 = 0",
          "a": 3,
          "b": -4,
          "c": -3
        },
        {
          "label": "3x + 4y - 21 = 0",
          "a": 3,
          "b": 4,
          "c": 21
        }
      ],
      "points": [
        {
          "x": 3,
          "y": 3,
          "label": "(3, 3)"
        },
        {
          "x": -1,
          "y": 0,
          "label": "(-1, 0)"
        },
        {
          "x": 7,
          "y": 0,
          "label": "(7, 0)"
        }
      ],
      "polygon": [
        {
          "x": -1,
          "y": 0
        },
        {
          "x": 7,
          "y": 0
        },
        {
          "x": 3,
          "y": 3
        }
      ],
      "xRange": [
        -3,
        10
      ],
      "yRange": [
        -4,
        8
      ],
      "caption": "Native graph and triangular region."
    }
  },
  {
    "id": 98,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Aftab tells his daughter: “Seven years ago I was seven times as old as you were then. Three years from now I shall be three times as old as you will be.” Represent the situation algebraically and graphically.",
    "answer": "Aftab $=42$ years; daughter $=12$ years",
    "solution": [
      "Let their present ages be $x$ and $y$.",
      "$x-7=7(y-7)$ gives $x-7y=-42$.",
      "$x+3=3(y+3)$ gives $x-3y=6$.",
      "The graphs intersect at $(42,12)$, giving their present ages."
    ],
    "page": 26,
    "tags": [
      "Graphical method",
      "Ages",
      "Word problem"
    ],
    "source": "Board Term-I 2015, NCERT",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x - 7y = -42",
          "a": 1,
          "b": -7,
          "c": -42
        },
        {
          "label": "x - 3y = 6",
          "a": 1,
          "b": -3,
          "c": 6
        }
      ],
      "points": [
        {
          "x": 42,
          "y": 12,
          "label": "(42, 12)"
        }
      ],
      "xRange": [
        0,
        50
      ],
      "yRange": [
        0,
        22
      ],
      "caption": "Native age-equation graph."
    }
  },
  {
    "id": 99,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "The cost of $2$ kg of apples and $1$ kg of grapes was Rs. $160$. A month later, $4$ kg of apples and $2$ kg of grapes cost Rs. $300$. Represent the situation algebraically and geometrically.",
    "answer": "$2x+y=160$ and $4x+2y=300$ are parallel; there is no common solution",
    "solution": [
      "Let $x$ be the price per kg of apples and $y$ the price per kg of grapes.",
      "The equations are $2x+y=160$ and $4x+2y=300$, or $2x+y=150$.",
      "They have the same left-side coefficients but different constants.",
      "The graphs are distinct parallel lines, so the pair is inconsistent."
    ],
    "page": 26,
    "tags": [
      "Graphical method",
      "Money",
      "No solution"
    ],
    "source": "Board Term-I 2013, Set DDE-E, NCERT",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "2x + y = 160",
          "a": 2,
          "b": 1,
          "c": 160
        },
        {
          "label": "4x + 2y = 300",
          "a": 4,
          "b": 2,
          "c": 300
        }
      ],
      "xRange": [
        0,
        90
      ],
      "yRange": [
        0,
        180
      ],
      "caption": "Native graph of the distinct parallel price lines."
    }
  },
  {
    "id": 100,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Draw $x-y+1=0$ and $3x+2y-12=0$. Find the vertices of the triangle formed by these lines and the $x$-axis, and shade the region.",
    "answer": "Intersection $(2,3)$; triangle vertices $(-1,0),(4,0),(2,3)$",
    "solution": [
      "$x-y+1=0$ meets the $x$-axis at $(-1,0)$.",
      "$3x+2y-12=0$ meets the $x$-axis at $(4,0)$.",
      "Solving the pair gives their intersection $(2,3)$.",
      "These three points are the vertices of the required triangle."
    ],
    "page": 27,
    "tags": [
      "Graphical method",
      "Triangle",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2013, NCERT",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x - y + 1 = 0",
          "a": 1,
          "b": -1,
          "c": -1
        },
        {
          "label": "3x + 2y - 12 = 0",
          "a": 3,
          "b": 2,
          "c": 12
        }
      ],
      "points": [
        {
          "x": -1,
          "y": 0,
          "label": "(-1, 0)"
        },
        {
          "x": 4,
          "y": 0,
          "label": "(4, 0)"
        },
        {
          "x": 2,
          "y": 3,
          "label": "(2, 3)"
        }
      ],
      "polygon": [
        {
          "x": -1,
          "y": 0
        },
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 2,
          "y": 3
        }
      ],
      "xRange": [
        -3,
        7
      ],
      "yRange": [
        -2,
        8
      ],
      "caption": "Native graph with shaded triangular region."
    }
  },
  {
    "id": 101,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve graphically $2x+3y=12$ and $x-y=1$. Find the area bounded by the two lines and the $y$-axis.",
    "answer": "$x=3,\\ y=2$; bounded area $=7.5$ square units",
    "solution": [
      "The lines intersect at $(3,2)$.",
      "Their $y$-axis intercepts are $(0,4)$ and $(0,-1)$.",
      "The base on the $y$-axis has length $5$ and the perpendicular height is $3$.",
      "Area $=\\frac12\\times5\\times3=7.5$ square units."
    ],
    "page": 27,
    "tags": [
      "Graphical method",
      "Area",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2012, Set-58",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "2x + 3y = 12",
          "a": 2,
          "b": 3,
          "c": 12
        },
        {
          "label": "x - y = 1",
          "a": 1,
          "b": -1,
          "c": 1
        }
      ],
      "points": [
        {
          "x": 3,
          "y": 2,
          "label": "(3, 2)"
        },
        {
          "x": 0,
          "y": 4,
          "label": "(0, 4)"
        },
        {
          "x": 0,
          "y": -1,
          "label": "(0, -1)"
        }
      ],
      "polygon": [
        {
          "x": 0,
          "y": 4
        },
        {
          "x": 0,
          "y": -1
        },
        {
          "x": 3,
          "y": 2
        }
      ],
      "xRange": [
        -3,
        8
      ],
      "yRange": [
        -5,
        7
      ],
      "caption": "Native graph of the bounded triangular region."
    }
  },
  {
    "id": 102,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve graphically $x+3y=6$ and $2x-3y=12$. Also shade the region bounded by $2x-3y=12$ and both coordinate axes.",
    "answer": "Solution $(6,0)$; the axis-bounded triangle has vertices $(0,0),(6,0),(0,-4)$",
    "solution": [
      "The two lines intersect at $(6,0)$.",
      "For $2x-3y=12$, the $x$-intercept is $(6,0)$ and the $y$-intercept is $(0,-4)$.",
      "Together with the origin, these form the region bounded by the line and both axes."
    ],
    "page": 28,
    "tags": [
      "Graphical method",
      "Intercepts",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2013 FFC; 2012, Set-35, 48",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x + 3y = 6",
          "a": 1,
          "b": 3,
          "c": 6
        },
        {
          "label": "2x - 3y = 12",
          "a": 2,
          "b": -3,
          "c": 12
        }
      ],
      "points": [
        {
          "x": 6,
          "y": 0,
          "label": "(6, 0)"
        },
        {
          "x": 0,
          "y": -4,
          "label": "(0, -4)"
        },
        {
          "x": 0,
          "y": 0,
          "label": "O"
        }
      ],
      "polygon": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 0,
          "y": -4
        }
      ],
      "xRange": [
        -3,
        10
      ],
      "yRange": [
        -6,
        7
      ],
      "caption": "Native graph with the coordinate-axis region."
    }
  },
  {
    "id": 103,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve graphically $x-y=1$ and $2x+y=8$. Also find where each line intersects the $y$-axis.",
    "answer": "Solution $(3,2)$; $y$-axis intersections $(0,-1)$ and $(0,8)$",
    "solution": [
      "The graphs of $y=x-1$ and $y=8-2x$ intersect at $(3,2)$.",
      "For $x-y=1$, set $x=0$ to get $(0,-1)$.",
      "For $2x+y=8$, set $x=0$ to get $(0,8)$."
    ],
    "page": 28,
    "tags": [
      "Graphical method",
      "Intercepts",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2012, Set-56",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "x - y = 1",
          "a": 1,
          "b": -1,
          "c": 1
        },
        {
          "label": "2x + y = 8",
          "a": 2,
          "b": 1,
          "c": 8
        }
      ],
      "points": [
        {
          "x": 3,
          "y": 2,
          "label": "(3, 2)"
        },
        {
          "x": 0,
          "y": -1,
          "label": "(0, -1)"
        },
        {
          "x": 0,
          "y": 8,
          "label": "(0, 8)"
        }
      ],
      "xRange": [
        -2,
        7
      ],
      "yRange": [
        -3,
        10
      ],
      "caption": "Native graph with y-axis intercepts."
    }
  },
  {
    "id": 104,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Draw $2x-y=1$ and $x+2y=13$. Find the solution and shade the triangle formed by the lines and the $y$-axis.",
    "answer": "Solution $(3,5)$; triangle vertices $(0,-1),(0,6.5),(3,5)$",
    "solution": [
      "The lines intersect at $(3,5)$.",
      "$2x-y=1$ meets the $y$-axis at $(0,-1)$.",
      "$x+2y=13$ meets the $y$-axis at $(0,13/2)=(0,6.5)$.",
      "These points form the required triangular region."
    ],
    "page": 29,
    "tags": [
      "Graphical method",
      "Triangle",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2012, Set-52",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "2x - y = 1",
          "a": 2,
          "b": -1,
          "c": 1
        },
        {
          "label": "x + 2y = 13",
          "a": 1,
          "b": 2,
          "c": 13
        }
      ],
      "points": [
        {
          "x": 3,
          "y": 5,
          "label": "(3, 5)"
        },
        {
          "x": 0,
          "y": -1,
          "label": "(0, -1)"
        },
        {
          "x": 0,
          "y": 6.5,
          "label": "(0, 6.5)"
        }
      ],
      "polygon": [
        {
          "x": 0,
          "y": -1
        },
        {
          "x": 0,
          "y": 6.5
        },
        {
          "x": 3,
          "y": 5
        }
      ],
      "xRange": [
        -2,
        9
      ],
      "yRange": [
        -4,
        10
      ],
      "caption": "Native graph and y-axis triangle."
    }
  },
  {
    "id": 105,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve graphically $2x+3y=12$ and $x-y-1=0$. Shade the region between the lines and the $x$-axis.",
    "answer": "Solution $(3,2)$; triangle vertices $(1,0),(6,0),(3,2)$",
    "solution": [
      "The two lines intersect at $(3,2)$.",
      "$x-y-1=0$ meets the $x$-axis at $(1,0)$.",
      "$2x+3y=12$ meets the $x$-axis at $(6,0)$.",
      "These points form the required region."
    ],
    "page": 29,
    "tags": [
      "Graphical method",
      "Triangle",
      "Coordinate geometry"
    ],
    "source": "Board Term-I 2012, Set-48",
    "diagram": {
      "kind": "coordinate-graph",
      "lines": [
        {
          "label": "2x + 3y = 12",
          "a": 2,
          "b": 3,
          "c": 12
        },
        {
          "label": "x - y - 1 = 0",
          "a": 1,
          "b": -1,
          "c": 1
        }
      ],
      "points": [
        {
          "x": 3,
          "y": 2,
          "label": "(3, 2)"
        },
        {
          "x": 1,
          "y": 0,
          "label": "(1, 0)"
        },
        {
          "x": 6,
          "y": 0,
          "label": "(6, 0)"
        }
      ],
      "polygon": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 3,
          "y": 2
        }
      ],
      "xRange": [
        -2,
        9
      ],
      "yRange": [
        -3,
        7
      ],
      "caption": "Native graph of the shaded region."
    }
  },
  {
    "id": 106,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Four chairs and three tables cost Rs. $2,100$, while five chairs and two tables cost Rs. $1,750$. Find the cost of one chair and one table.",
    "answer": "Chair $=$ Rs. $150$; table $=$ Rs. $500$",
    "solution": [
      "Let chair cost be $x$ and table cost be $y$.",
      "$4x+3y=2100$ and $5x+2y=1750$.",
      "Multiply by $2$ and $3$: $8x+6y=4200$, $15x+6y=5250$.",
      "Subtracting gives $7x=1050$, so $x=150$ and then $y=500$."
    ],
    "page": 30,
    "tags": [
      "Money",
      "Word problem",
      "Elimination"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 107,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $\\frac2{\\sqrt{x}}+\\frac3{\\sqrt{y}}=2$ and $\\frac4{\\sqrt{x}}-\\frac9{\\sqrt{y}}=-1$.",
    "answer": "$x=4,\\ y=9$",
    "solution": [
      "Let $X=1/\\sqrt{x}$ and $Y=1/\\sqrt{y}$. Then $2X+3Y=2$ and $4X-9Y=-1$.",
      "Multiply the first by $2$ and subtract the second: $15Y=5$, so $Y=1/3$.",
      "Then $2X+1=2$, so $X=1/2$.",
      "Thus $\\sqrt{x}=2$ and $\\sqrt{y}=3$, giving $x=4$, $y=9$."
    ],
    "page": 30,
    "tags": [
      "Radicals",
      "Substitution",
      "Elimination"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 108,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $2x-y+3=0$ and $3x-5y+1=0$.",
    "answer": "$x=-2,\\ y=-1$",
    "solution": [
      "Multiply the first equation by $5$: $10x-5y+15=0$.",
      "Subtract $3x-5y+1=0$ to get $7x+14=0$, so $x=-2$.",
      "Substitute in $2x-y+3=0$: $-4-y+3=0$, hence $y=-1$."
    ],
    "page": 30,
    "tags": [
      "Elimination",
      "Solving equations"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 109,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $x+y=5$ and $2x-3y=4$ by both elimination and substitution.",
    "answer": "$x=\\frac{19}{5},\\ y=\\frac65$",
    "solution": [
      "Elimination: multiply $x+y=5$ by $3$ and add to $2x-3y=4$, giving $5x=19$.",
      "Thus $x=19/5$ and $y=5-19/5=6/5$.",
      "Substitution: put $y=5-x$ into $2x-3y=4$ to obtain the same values."
    ],
    "page": 31,
    "tags": [
      "Elimination",
      "Substitution",
      "Solving equations"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 110,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $3x+4y=10$ and $2x-2y=2$ by elimination and substitution.",
    "answer": "$x=2,\\ y=1$",
    "solution": [
      "Elimination: multiply the second equation by $2$ and add to the first, giving $7x=14$, so $x=2$.",
      "Then $4-2y=2$, hence $y=1$.",
      "Substitution using $y=x-1$ in the first equation gives the same result."
    ],
    "page": 31,
    "tags": [
      "Elimination",
      "Substitution",
      "Solving equations"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 111,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Solve $3x-5y-4=0$ and $9x=2y+7$ by elimination and substitution.",
    "answer": "$x=\\frac9{13},\\ y=-\\frac5{13}$",
    "solution": [
      "Write $3x-5y=4$ and $9x-2y=7$.",
      "Multiply the first by $3$: $9x-15y=12$. Subtract the second equation to get $-13y=5$.",
      "Thus $y=-5/13$ and substitution gives $x=9/13$.",
      "Solving by substitution produces the same pair."
    ],
    "page": 31,
    "tags": [
      "Elimination",
      "Substitution",
      "Solving equations"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 112,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A train covers a distance at uniform speed. At $10$ km/h faster it would take $2$ hours less; at $10$ km/h slower it would take $3$ hours more. Find the distance.",
    "answer": "$600$ km",
    "solution": [
      "Let actual speed be $s$ km/h and time be $t$ hours, so distance is $st$.",
      "$st=(s+10)(t-2)$ gives $s-5t=-10$.",
      "$st=(s-10)(t+3)$ gives $3s-10t=30$.",
      "Solving gives $t=12$, $s=50$, so distance $=50\\times12=600$ km."
    ],
    "page": 32,
    "tags": [
      "Trains",
      "Speed and distance",
      "Word problem"
    ],
    "source": "Board Term-I 2012, NCERT"
  },
  {
    "id": 113,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "The income ratio of two persons is $11:7$ and their expenditure ratio is $9:5$. Each saves Rs. $400$ per month. Find their monthly incomes.",
    "answer": "Rs. $2,200$ and Rs. $1,400$",
    "solution": [
      "Let incomes be $11x$ and $7x$, and expenditures be $9y$ and $5y$.",
      "$11x-9y=400$ and $7x-5y=400$.",
      "Multiplying by $5$ and $9$ respectively and subtracting gives $-8x=-1600$, so $x=200$.",
      "The incomes are $11(200)=2200$ and $7(200)=1400$."
    ],
    "page": 32,
    "tags": [
      "Money",
      "Ratio",
      "Word problem"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 114,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Points A and B are $150$ km apart. Two cars start simultaneously. In the same direction they meet after $15$ hours; in opposite directions they meet after $1$ hour. Find their speeds.",
    "answer": "$80$ km/h and $70$ km/h",
    "solution": [
      "Let the speeds be $x$ and $y$, with $x>y$.",
      "Same direction: $15(x-y)=150$, so $x-y=10$.",
      "Opposite direction: $x+y=150$.",
      "Solving gives $x=80$ and $y=70$."
    ],
    "page": 32,
    "tags": [
      "Speed and distance",
      "Cars",
      "Word problem"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 115,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "If $2$ is subtracted from a fraction’s numerator and $1$ added to its denominator, it becomes $\\frac12$. If $4$ is added to the numerator and $3$ subtracted from the denominator, it becomes $\\frac23$. Find the fraction.",
    "answer": "$\\frac8{11}$",
    "solution": [
      "Let the fraction be $x/y$.",
      "$\\frac{x-2}{y+1}=\\frac12$ gives $2x-y=5$.",
      "$\\frac{x+4}{y-3}=\\frac23$ gives $2x-3y=-17$.",
      "Subtracting gives $2y=22$, so $y=11$ and $x=8$."
    ],
    "page": 33,
    "tags": [
      "Fractions",
      "Word problem",
      "Elimination"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 116,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "In a bag of red and white balls, half the white balls equals one-third the red balls. Three times the total exceeds seven times the white balls by $6$. Find each colour count.",
    "answer": "$18$ red balls and $12$ white balls",
    "solution": [
      "Let red balls be $x$ and white balls be $y$.",
      "$y/2=x/3$ gives $2x-3y=0$.",
      "$3(x+y)-7y=6$ gives $3x-4y=6$.",
      "Solving gives $y=12$ and $x=18$."
    ],
    "page": 33,
    "tags": [
      "Counting",
      "Word problem",
      "Forming equations"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 117,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A two-digit number equals eight times the sum of its digits minus $5$. It also equals sixteen times the difference of its digits plus $3$. Find the number.",
    "answer": "$83$",
    "solution": [
      "Let tens digit be $x$ and units digit be $y$, so the number is $10x+y$.",
      "$8(x+y)-5=10x+y$ gives $2x-7y+5=0$.",
      "$16(x-y)+3=10x+y$ gives $6x-17y+3=0$.",
      "Solving gives $x=8$, $y=3$, so the number is $83$."
    ],
    "page": 33,
    "tags": [
      "Two-digit numbers",
      "Word problem",
      "Cross multiplication"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 118,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A rectangle’s area decreases by $9$ square units when its length is reduced by $5$ and breadth increased by $3$. Its area increases by $67$ when length is increased by $3$ and breadth by $2$. Find its perimeter.",
    "answer": "$52$ units",
    "solution": [
      "Let length be $x$ and breadth be $y$.",
      "$(x-5)(y+3)=xy-9$ simplifies to $3x-5y=6$.",
      "$(x+3)(y+2)=xy+67$ simplifies to $2x+3y=61$.",
      "Solving gives $x=17$, $y=9$, so perimeter $=2(17+9)=52$."
    ],
    "page": 34,
    "tags": [
      "Geometry",
      "Rectangle",
      "Word problem"
    ],
    "source": "Board Term-I 2012, Set-48"
  },
  {
    "id": 119,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Solve $2(3x-y)=5xy$ and $2(x+3y)=5xy$.",
    "answer": "$x=2,\\ y=1$",
    "solution": [
      "Divide both equations by $xy$ and let $a=1/x$, $b=1/y$.",
      "The equations become $6b-2a=5$ and $2b+6a=5$ (equivalently arranged as in the PDF).",
      "Solving the transformed pair gives $1/x=1/2$ and $1/y=1$.",
      "Therefore $x=2$ and $y=1$."
    ],
    "page": 34,
    "tags": [
      "Reciprocal equations",
      "Substitution",
      "Nonlinear equations"
    ],
    "source": "Board Term-I 2012, Set-25"
  },
  {
    "id": 120,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "Students stand in rows. With $3$ extra students per row there is one row fewer; with $3$ fewer per row there are two more rows. Find the class size.",
    "answer": "$36$ students",
    "solution": [
      "Let $x$ be students per row and $y$ the number of rows; total is $xy$.",
      "$(x+3)(y-1)=xy$ gives $-x+3y-3=0$.",
      "$(x-3)(y+2)=xy$ gives $2x-3y-6=0$.",
      "Solving gives $x=9$, $y=4$, so total $xy=36$."
    ],
    "page": 34,
    "tags": [
      "Counting",
      "Word problem",
      "Forming equations"
    ],
    "source": "Board Term-I 2012, Set-68, NCERT"
  },
  {
    "id": 121,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Ani and Biju’s ages differ by $3$ years. Ani’s father Dharam is twice Ani’s age, Biju is twice his sister Cathy’s age, and Dharam and Cathy differ by $30$ years. Find Ani and Biju’s ages.",
    "answer": "Ani/Biju are either $19/16$ years or $21/24$ years",
    "solution": [
      "Let Ani and Biju be $x$ and $y$. Their age difference gives $x-y=3$ or $x-y=-3$.",
      "Dharam is $2x$ and Cathy is $y/2$; $2x-y/2=30$ gives $4x-y=60$.",
      "With $x-y=3$, solve to obtain $x=19$, $y=16$.",
      "With $x-y=-3$, solve to obtain $x=21$, $y=24$."
    ],
    "page": 35,
    "tags": [
      "Ages",
      "Absolute difference",
      "Word problem"
    ],
    "source": "Board Term-I 2012, Set-64"
  },
  {
    "id": 122,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "One person says, “Give me a hundred and I shall be twice as rich as you.” The other says, “Give me ten and I shall be six times as rich as you.” Find their capitals.",
    "answer": "Rs. $40$ and Rs. $170$",
    "solution": [
      "Let their capitals be $x$ and $y$.",
      "$x+100=2(y-100)$ gives $x-2y=-300$.",
      "$6(x-10)=y+10$ gives $6x-y=70$.",
      "Solving gives $x=40$ and $y=170$."
    ],
    "page": 35,
    "tags": [
      "Money",
      "Word problem",
      "Forming equations"
    ],
    "source": "Board Term-I 2012, Set-54"
  },
  {
    "id": 123,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A fraction becomes $\\frac9{11}$ when $2$ is added to numerator and denominator, and $\\frac56$ when $3$ is added to both. Find the fraction.",
    "answer": "$\\frac79$",
    "solution": [
      "Let the fraction be $x/y$.",
      "$\\frac{x+2}{y+2}=\\frac9{11}$ gives $11x-9y+4=0$.",
      "$\\frac{x+3}{y+3}=\\frac56$ gives $6x-5y+3=0$.",
      "Solving gives $x=7$, $y=9$."
    ],
    "page": 35,
    "tags": [
      "Fractions",
      "Word problem",
      "Cross multiplication"
    ],
    "source": "Board Term-I 2012, Set-60"
  },
  {
    "id": 124,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "A motorboat travels $30$ km upstream and $28$ km downstream in $7$ hours. It also travels $21$ km upstream and returns $21$ km downstream in $5$ hours. Find boat and stream speeds.",
    "answer": "Boat in still water $=10$ km/h; stream $=4$ km/h",
    "solution": [
      "Let still-water speed be $x$ and stream speed be $y$. Put $a=1/(x-y)$ and $b=1/(x+y)$.",
      "$30a+28b=7$ and $21a+21b=5$.",
      "Elimination gives $a=1/6$ and $b=1/14$.",
      "Thus $x-y=6$ and $x+y=14$, giving $x=10$, $y=4$."
    ],
    "page": 36,
    "tags": [
      "Boats and streams",
      "Reciprocal equations",
      "Speed and distance"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 125,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "A boat covers $32$ km upstream and $36$ km downstream in $7$ hours; it covers $40$ km upstream and $48$ km downstream in $9$ hours. Find boat and stream speeds.",
    "answer": "Boat in still water $=10$ km/h; stream $=2$ km/h",
    "solution": [
      "Let $A=1/(x-y)$ and $B=1/(x+y)$.",
      "$32A+36B=7$ and $40A+48B=9$.",
      "Elimination gives $A=1/8$ and $B=1/12$.",
      "Hence $x-y=8$ and $x+y=12$, so $x=10$, $y=2$."
    ],
    "page": 36,
    "tags": [
      "Boats and streams",
      "Reciprocal equations",
      "Speed and distance"
    ],
    "source": "Board Term-I 2012, Set-48"
  },
  {
    "id": 126,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "For what values of $a$ and $b$ do $2x+3y=7$ and $a(x+y)-b(x-y)=3a+b-2$ have infinitely many solutions?",
    "answer": "$a=5,\\ b=1$",
    "solution": [
      "The second equation becomes $(a-b)x+(a+b)y-(3a+b-2)=0$.",
      "For coincident lines, $\\frac2{a-b}=\\frac3{a+b}=\\frac7{3a+b-2}$.",
      "Using the first and third gives $a-9b=-4$; using the second and third gives $a-2b=3$.",
      "Solving gives $b=1$ and $a=5$."
    ],
    "page": 37,
    "tags": [
      "Infinitely many solutions",
      "Parameters",
      "Coefficient ratios"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 127,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "In a park, deer and human visitors together have $39$ heads and $132$ legs. Find the number of deer and humans.",
    "answer": "$27$ deer and $12$ humans",
    "solution": [
      "Let deer be $x$ and humans be $y$.",
      "$x+y=39$ and $4x+2y=132$.",
      "Double the first equation: $2x+2y=78$. Subtract from the second to get $2x=54$.",
      "Thus $x=27$ and $y=12$."
    ],
    "page": 37,
    "tags": [
      "Counting",
      "Animals",
      "Word problem"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 128,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "Find $p$ and $q$ so that $2x+3y=7$ and $(p+q+1)x+(p+2q+2)y=4(p+q)+1$ represent coincident lines.",
    "answer": "$p=3,\\ q=2$",
    "solution": [
      "For coincident lines, $\\frac2{p+q+1}=\\frac3{p+2q+2}=\\frac7{4(p+q)+1}$.",
      "From the second and third ratios: $5p-2q-11=0$.",
      "From the first and third ratios: $p+q-5=0$.",
      "Solving gives $q=2$ and $p=3$."
    ],
    "page": 37,
    "tags": [
      "Coincident lines",
      "Parameters",
      "Coefficient ratios"
    ],
    "source": "Board Term-I 2012, Set-42"
  },
  {
    "id": 129,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "The sides of a triangle are $2x+\\frac y2$, $\\frac{5x}{3}+y+\\frac12$ and $\\frac{2x}{3}+2y+\\frac52$. If it is equilateral, find its perimeter.",
    "answer": "$19.5$ cm",
    "solution": [
      "Equating the first two sides gives $2x-3y=3$.",
      "Equating the first and third gives $8x-9y=15$.",
      "Multiply the first by $3$ and subtract from the second: $2x=6$, so $x=3$ and $y=1$.",
      "Each side is $2(3)+1/2=6.5$ cm, so perimeter $=3(6.5)=19.5$ cm."
    ],
    "page": 38,
    "tags": [
      "Geometry",
      "Equilateral triangle",
      "Parameters"
    ],
    "source": "Board Term-I 2012"
  },
  {
    "id": 130,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "When $6$ boys are admitted and $6$ girls leave, the percentage of boys rises from $60\\%$ to $75\\%$. Find the original numbers of boys and girls.",
    "answer": "$24$ boys and $16$ girls",
    "solution": [
      "Let boys be $x$ and girls be $y$.",
      "$x/(x+y)=60/100$ gives $2x=3y$.",
      "$(x+6)/(x+y)=75/100$ because total size remains unchanged, giving $x-3y=-24$.",
      "Using $3y=2x$ gives $x=24$ and $y=16$."
    ],
    "page": 38,
    "tags": [
      "Percentages",
      "Counting",
      "Word problem"
    ],
    "source": "Board Term-I 2015"
  },
  {
    "id": 131,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Advanced",
    "prompt": "A cyclist rides part of a $30$ km journey, stops half an hour for repairs, then completes the rest at half speed, taking $5$ hours total. If the breakdown occurred $10$ km farther on, the journey would take $4$ hours. Find the breakdown point and original speed.",
    "answer": "Breakdown after $10$ km; original speed $=10$ km/h",
    "solution": [
      "Let breakdown distance be $x$ km and original speed be $y$ km/h.",
      "First situation: $x/y+1/2+(30-x)/(y/2)=5$, which simplifies to $x+5y=60$.",
      "Second situation: $(x+10)/y+1/2+(20-x)/(y/2)=4$, giving $x+4y=50$.",
      "Subtracting gives $y=10$, and then $x=10$."
    ],
    "page": 39,
    "tags": [
      "Speed and distance",
      "Cyclist",
      "Word problem"
    ],
    "source": "Board Term-I 2013, Set-32"
  },
  {
    "id": 132,
    "marks": 4,
    "type": "long-answer",
    "difficulty": "Moderate",
    "prompt": "A village has population $5,000$. If males increase by $5\\%$ and females by $3\\%$, the population becomes $5,202$ after one year. Find current numbers of males and females.",
    "answer": "$2,600$ males and $2,400$ females",
    "solution": [
      "Let males be $x$ and females be $y$. Then $x+y=5000$.",
      "$1.05x+1.03y=5202$, or $5x+3y=20200$ after subtracting $x+y$ and multiplying by $100$.",
      "Multiply $x+y=5000$ by $3$: $3x+3y=15000$.",
      "Subtract to get $2x=5200$, so $x=2600$ and $y=2400$."
    ],
    "page": 39,
    "tags": [
      "Population",
      "Percentages",
      "Word problem"
    ],
    "source": "Board Term-I 2012, Set-60"
  }
];
