import type { LessonContent } from "@/lib/lesson-content-types";

export const dimensionalAnalysis: LessonContent = {
  subjectSlug: "physics",
  chapterSlug: "measurement-and-units",
  lessonSlug: "dimensional-analysis",
  title: "Dimensional Analysis",
  objectives: [
    "Explain the difference between a physical unit and a physical dimension",
    "Identify the seven SI base dimensions",
    "Write dimensional formulas for common physical quantities",
    "Determine the dimensions of derived quantities",
    "Check whether a physical equation is dimensionally homogeneous",
    "Use dimensional analysis to derive the possible form of a physical relationship",
    "Convert quantities between related unit systems using dimensions where appropriate",
    "Explain the limitations of dimensional analysis",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "A unit tells us how a quantity is measured; a dimension tells us what kind of physical quantity it is. Dimensional analysis uses this deeper description to check equations, connect derived quantities to base quantities and predict the possible form of physical relationships.",
        "It is a powerful checking tool because a physically meaningful equation must compare like with like. A length cannot be added to a velocity, just as three metres cannot sensibly be added to four seconds.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Unit and dimension",
      body: "A unit is an agreed measurement standard, such as metre or second. A dimension describes the physical nature of a quantity, such as length $[L]$ or time $[T]$.",
    },
    {
      kind: "theory",
      heading: "Units versus dimensions",
      paragraphs: [
        "Metre, kilometre and centimetre are different units, but each measures length and therefore has dimension $[L]$. Kilogram and gram are different units of mass, but both have dimension $[M]$.",
        "Changing a unit changes the numerical value of a measurement, but it does not change the dimension. For example, $2.5\\,\\text{m}=250\\,\\text{cm}$; both measurements still describe length.",
      ],
    },
    {
      kind: "comparison",
      heading: "Do not confuse these ideas",
      left: {
        title: "Units",
        items: [
          "Agreed measurement standards",
          "Examples: m, cm, kg, s and N",
          "A quantity may be expressed in many equivalent units",
          "Units carry scale information",
        ],
      },
      right: {
        title: "Dimensions",
        items: [
          "Describe the physical nature of a quantity",
          "Examples: $[L]$, $[M]$ and $[T]$",
          "Independent of the chosen unit system",
          "Dimensions show how base quantities combine",
        ],
      },
    },
    {
      kind: "theory",
      heading: "The seven SI base dimensions",
      paragraphs: [
        "The SI system defines seven base quantities. Introductory mechanics mainly uses mass, length and time, but all seven are needed across physics.",
      ],
    },
    {
      kind: "table",
      heading: "SI base quantities and dimensional symbols",
      headers: ["Base quantity", "SI base unit", "Unit symbol", "Dimension"],
      rows: [
        ["Length", "metre", "m", "$[L]$"],
        ["Mass", "kilogram", "kg", "$[M]$"],
        ["Time", "second", "s", "$[T]$"],
        ["Electric current", "ampere", "A", "$[I]$"],
        ["Thermodynamic temperature", "kelvin", "K", "$[\\Theta]$"],
        ["Amount of substance", "mole", "mol", "$[N]$"],
        ["Luminous intensity", "candela", "cd", "$[I_v]$"],
      ],
      note: "This lesson uses $[I_v]$ for luminous intensity so it is not confused with electric current $[I]$. Some textbooks use a different symbol; the meaning must always be stated.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Mechanics shorthand",
      body: "In mechanics, most dimensions can be written as $[M]^a[L]^b[T]^c$. A zero exponent means that base dimension is absent.",
    },
    {
      kind: "theory",
      heading: "Building dimensional formulas",
      paragraphs: [
        "A dimensional formula is found from the defining equation of the quantity. Replace every physical quantity by its dimensions, then combine the powers using ordinary algebra.",
        "Pure numbers such as $2$, $\\tfrac12$ and $\\pi$ are dimensionless. They do not appear in a dimensional formula.",
      ],
    },
    {
      kind: "table",
      heading: "Common derived quantities",
      headers: ["Quantity", "Defining relation", "Dimensional formula"],
      rows: [
        ["Area", "length × width", "$[L]^2$"],
        ["Volume", "length × width × height", "$[L]^3$"],
        ["Speed / velocity", "distance ÷ time", "$[L][T]^{-1}$"],
        ["Acceleration", "velocity ÷ time", "$[L][T]^{-2}$"],
        ["Momentum", "mass × velocity", "$[M][L][T]^{-1}$"],
        ["Force", "mass × acceleration", "$[M][L][T]^{-2}$"],
        ["Pressure", "force ÷ area", "$[M][L]^{-1}[T]^{-2}$"],
        ["Density", "mass ÷ volume", "$[M][L]^{-3}$"],
        ["Work / energy", "force × displacement", "$[M][L]^2[T]^{-2}$"],
        ["Power", "energy ÷ time", "$[M][L]^2[T]^{-3}$"],
        ["Frequency", "number of cycles ÷ time", "$[T]^{-1}$"],
        [
          "Gravitational constant $G$",
          "$F=Gm_1m_2/r^2$",
          "$[M]^{-1}[L]^3[T]^{-2}$",
        ],
        ["Spring constant $k$", "$F=kx$", "$[M][T]^{-2}$"],
      ],
    },
    {
      kind: "example",
      prompt: "Find the dimensions of acceleration.",
      steps: [
        "Acceleration is change in velocity divided by time: $a=\\Delta v/\\Delta t$.",
        "Velocity has dimensions $[L][T]^{-1}$.",
        "$[a]=[L][T]^{-1}/[T]$.",
        "Subtract the time exponents: $-1-1=-2$.",
      ],
      answer: "$[a]=[L][T]^{-2}$.",
    },
    {
      kind: "example",
      prompt: "Derive the dimensional formula of pressure.",
      steps: [
        "Pressure is force divided by area: $P=F/A$.",
        "$[F]=[M][L][T]^{-2}$ and $[A]=[L]^2$.",
        "$[P]=[M][L][T]^{-2}/[L]^2$.",
        "Combine length powers: $1-2=-1$.",
      ],
      answer: "$[P]=[M][L]^{-1}[T]^{-2}$.",
    },
    {
      kind: "example",
      prompt:
        "Find the dimensions of the gravitational constant $G$ from $F=Gm_1m_2/r^2$.",
      steps: [
        "Rearrange: $G=Fr^2/(m_1m_2)$.",
        "Substitute dimensions: $[G]=([M][L][T]^{-2})[L]^2/[M]^2$.",
        "Combine exponents: mass $1-2=-1$, length $1+2=3$, time $-2$.",
      ],
      answer: "$[G]=[M]^{-1}[L]^3[T]^{-2}$.",
    },
    {
      kind: "formula",
      latex: "[Q]=[M]^a[L]^b[T]^c",
      caption: "A general mechanics quantity written in base dimensions.",
    },
    {
      kind: "theory",
      heading: "The principle of dimensional homogeneity",
      paragraphs: [
        "Every term that is added or subtracted in a valid physical equation must have the same dimensions. The dimensions on the left-hand side must also match those on the right-hand side.",
        "Multiplication and division may combine different dimensions, but addition and subtraction require identical dimensions. This is called dimensional homogeneity.",
      ],
    },
    {
      kind: "example",
      prompt: "Check whether $v=u+at$ is dimensionally homogeneous.",
      steps: [
        "Left side: $[v]=[L][T]^{-1}$.",
        "First right-side term: $[u]=[L][T]^{-1}$.",
        "Second right-side term: $[at]=([L][T]^{-2})[T]=[L][T]^{-1}$.",
        "All three terms have the same dimensions.",
      ],
      answer: "The equation passes the dimensional test.",
    },
    {
      kind: "example",
      prompt:
        "Check whether $s=ut+\\tfrac12at^2$ is dimensionally homogeneous.",
      steps: [
        "Left side: $[s]=[L]$.",
        "$[ut]=([L][T]^{-1})[T]=[L]$.",
        "$[at^2]=([L][T]^{-2})[T]^2=[L]$.",
        "The factor $\\tfrac12$ is dimensionless.",
      ],
      answer: "Both right-side terms are lengths, so the equation passes.",
    },
    {
      kind: "example",
      prompt: "Explain why $v=u+at^2$ fails the dimensional test.",
      steps: [
        "$[v]=[u]=[L][T]^{-1}$.",
        "$[at^2]=([L][T]^{-2})[T]^2=[L]$.",
        "The equation attempts to add velocity $[L][T]^{-1}$ to length $[L]$.",
      ],
      answer:
        "The terms are dimensionally unlike, so the equation cannot be correct.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Passing is necessary, not sufficient",
      body: "An equation that fails dimensional analysis is wrong, but an equation that passes may still be wrong. For example, $s=ut+at^2$ is dimensionally homogeneous but misses the correct numerical factor $\\tfrac12$ for uniformly accelerated motion.",
    },
    {
      kind: "theory",
      heading: "Deriving a possible relationship",
      paragraphs: [
        "When theory suggests that one quantity depends on several others, dimensional analysis can determine the exponents in a power-law relationship. It cannot usually find a dimensionless numerical constant.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Assume the period $T$ of a simple pendulum depends only on length $L$ and gravitational acceleration $g$. Derive the relationship.",
      steps: [
        "Assume $T\\propto L^a g^b$.",
        "Write dimensions: $[T]=[L]^a([L][T]^{-2})^b$.",
        "Therefore $[T]=[L]^{a+b}[T]^{-2b}$.",
        "Equate time powers: $1=-2b$, giving $b=-\\tfrac12$.",
        "Equate length powers: $0=a+b$, giving $a=\\tfrac12$.",
      ],
      answer:
        "$T\\propto L^{1/2}g^{-1/2}=\\sqrt{L/g}$. Dimensional analysis cannot supply the actual factor $2\\pi$.",
    },
    {
      kind: "example",
      prompt:
        "Assume wave speed $v$ on a stretched string depends on tension $F$ and linear mass density $\\mu$ (mass per unit length). Find the possible relationship.",
      steps: [
        "Assume $v\\propto F^a\\mu^b$.",
        "$[v]=[L][T]^{-1}$, $[F]=[M][L][T]^{-2}$ and $[\\mu]=[M][L]^{-1}$.",
        "$[L][T]^{-1}=[M]^{a+b}[L]^{a-b}[T]^{-2a}$.",
        "Time powers: $-1=-2a$, so $a=\\tfrac12$.",
        "Mass powers: $0=a+b$, so $b=-\\tfrac12$.",
        "The length equation $1=a-b$ is then also satisfied.",
      ],
      answer: "$v\\propto F^{1/2}\\mu^{-1/2}=\\sqrt{F/\\mu}$.",
    },
    {
      kind: "dimensionalAnalysisExplorer",
      heading: "Interactive dimensional analysis laboratory",
    },
    {
      kind: "theory",
      heading: "Unit conversion through dimensional reasoning",
      paragraphs: [
        "A conversion factor is a ratio equal to one, so multiplying by it changes the unit without changing the physical quantity. Dimensions help reveal when the conversion factor must be squared or cubed.",
        "For area, every length factor is squared. For volume, every length factor is cubed. This is why $1\\,\\text{m}^2=10^4\\,\\text{cm}^2$ and $1\\,\\text{m}^3=10^6\\,\\text{cm}^3$.",
      ],
    },
    {
      kind: "example",
      prompt: "Convert $72\\,\\text{km h}^{-1}$ to $\\text{m s}^{-1}$.",
      steps: [
        "Use $1\\,\\text{km}=1000\\,\\text{m}$ and $1\\,\\text{h}=3600\\,\\text{s}$.",
        "$72\\,\\text{km h}^{-1}=72\\times(1000\\,\\text{m})/(3600\\,\\text{s})$.",
        "Simplify $72\\times1000/3600=20$.",
      ],
      answer: "$72\\,\\text{km h}^{-1}=20\\,\\text{m s}^{-1}$.",
    },
    {
      kind: "example",
      prompt: "Convert $2.70\\,\\text{g cm}^{-3}$ to $\\text{kg m}^{-3}$.",
      steps: [
        "$1\\,\\text{g}=10^{-3}\\,\\text{kg}$.",
        "$1\\,\\text{cm}^3=(10^{-2}\\,\\text{m})^3=10^{-6}\\,\\text{m}^3$.",
        "$2.70\\,\\text{g cm}^{-3}=2.70\\times10^{-3}\\,\\text{kg}/10^{-6}\\,\\text{m}^3$.",
      ],
      answer: "$2.70\\,\\text{g cm}^{-3}=2.70\\times10^3\\,\\text{kg m}^{-3}$.",
    },
    {
      kind: "theory",
      heading: "Limitations of dimensional analysis",
      paragraphs: [
        "Dimensional analysis is a consistency check and a relationship-finding tool, not a complete physical theory. It must be combined with definitions, experimental evidence and physical reasoning.",
      ],
      list: [
        "It cannot determine pure numerical constants such as $2$, $\\tfrac12$ or $2\\pi$.",
        "It cannot distinguish different quantities that share the same dimensions, such as work and torque.",
        "It cannot decide whether terms should be added or subtracted.",
        "It cannot fully verify equations containing trigonometric, exponential or logarithmic functions, although their arguments must be dimensionless.",
        "It cannot determine vector direction.",
        "A dimensionally correct equation may still be physically incorrect.",
        "It cannot replace experiment, observation or a physical model.",
      ],
    },
    {
      kind: "realWorld",
      heading: "Where dimensional analysis is useful",
      items: [
        {
          area: "Engineering calculations",
          text: "Checks that formulas and unit conversions remain consistent before designs are built.",
        },
        {
          area: "Computer simulations",
          text: "Catches input variables supplied in incompatible units and helps nondimensionalise models.",
        },
        {
          area: "Experimental physics",
          text: "Suggests which combinations of variables should be plotted to reveal a relationship.",
        },
        {
          area: "Astrophysics",
          text: "Provides scale estimates when a complete solution is difficult or impossible.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Writing newton or joule as a dimension.",
          right: "A newton is a unit; force has dimension $[M][L][T]^{-2}$.",
        },
        {
          wrong: "Keeping numerical constants in a dimensional formula.",
          right:
            "Numbers such as $2$ and $\\pi$ are dimensionless and are omitted.",
        },
        {
          wrong: "Adding exponents when dividing dimensions.",
          right: "Subtract exponents during division: $[L]/[L]^2=[L]^{-1}$.",
        },
        {
          wrong: "Checking only the two sides, but not every added term.",
          right:
            "Each term in a sum or difference must have the same dimensions.",
        },
        {
          wrong: "Assuming that passing the test proves an equation.",
          right:
            "Passing only shows dimensional consistency, not full physical correctness.",
        },
        {
          wrong: "Using a linear conversion factor for area or volume.",
          right: "Square the factor for area and cube it for volume.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice (not graded)",
      stepKey: "dimensionalPractice",
      questions: [
        {
          prompt: "What is the dimension of speed?",
          options: ["$[L][T]^{-1}$", "$[L][T]^{-2}$", "$[M][L][T]^{-1}$"],
          answer: 0,
          explanation: "Speed is distance divided by time.",
        },
        {
          prompt: "What is the dimension of density?",
          options: ["$[M][L]^{-2}$", "$[M][L]^{-3}$", "$[M]^{-1}[L]^3$"],
          answer: 1,
          explanation: "Density is mass divided by volume.",
        },
        {
          prompt: "Which equation is dimensionally invalid?",
          options: ["$F=ma$", "$v=u+at$", "$F=mv$"],
          answer: 2,
          explanation: "$mv$ is momentum, not force.",
        },
        {
          prompt: "What is the dimension of power?",
          options: [
            "$[M][L]^2[T]^{-3}$",
            "$[M][L]^2[T]^{-2}$",
            "$[M][L][T]^{-2}$",
          ],
          answer: 0,
          explanation: "Power is energy divided by time.",
        },
        {
          prompt:
            "A dimensionally correct equation is always physically correct.",
          options: ["True", "False"],
          answer: 1,
          explanation: "Dimensional agreement is necessary but not sufficient.",
        },
        {
          prompt: "Which is dimensionless?",
          options: ["Frequency", "Strain", "Momentum"],
          answer: 1,
          explanation: "Strain is a ratio of two lengths.",
        },
        {
          prompt: "If $T\\propto L^ag^b$, what is $b$?",
          options: ["$1/2$", "$-1/2$", "$-2$"],
          answer: 1,
          explanation: "Equating time powers gives $1=-2b$.",
        },
        {
          prompt: "How many square centimetres are in one square metre?",
          options: ["100", "1000", "10,000"],
          answer: 2,
          explanation: "The length factor 100 must be squared.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Units are measurement standards; dimensions describe physical nature.",
        "The most common mechanics dimensions are mass $[M]$, length $[L]$ and time $[T]$.",
        "Derived dimensions follow from a quantity's defining equation.",
        "Every term added or subtracted in a valid equation must have identical dimensions.",
        "Dimensional analysis can find exponents in power-law relationships but not pure numerical constants.",
        "Squared and cubed quantities require squared and cubed conversion factors.",
        "Dimensional consistency does not by itself prove physical correctness.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson Quiz: Dimensional Analysis",
      passMark: 60,
      questions: [
        {
          type: "mc",
          marks: 1,
          prompt:
            "Which statement correctly distinguishes a unit from a dimension?",
          options: [
            "A unit and a dimension are identical",
            "A unit gives a measurement standard; a dimension gives physical nature",
            "A dimension gives a numerical value",
            "Only base quantities have units",
          ],
          answer: 1,
          explanation:
            "Units specify standards such as metres; dimensions classify quantities such as length.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "What is the dimensional formula of acceleration?",
          options: [
            "$[L][T]^{-1}$",
            "$[L][T]^{-2}$",
            "$[M][L][T]^{-2}$",
            "$[M][L][T]^{-1}$",
          ],
          answer: 1,
          explanation: "Acceleration is velocity divided by time.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "What is the dimensional formula of pressure?",
          options: [
            "$[M][L][T]^{-2}$",
            "$[M][L]^{-1}[T]^{-2}$",
            "$[M][L]^2[T]^{-2}$",
            "$[M][L]^{-3}$",
          ],
          answer: 1,
          explanation: "Pressure is force divided by area.",
        },
        {
          type: "tf",
          marks: 1,
          prompt:
            "Every term in a dimensionally homogeneous sum must have the same dimensions.",
          answer: true,
          explanation:
            "Unlike physical quantities cannot be meaningfully added or subtracted.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Which equation fails the dimensional test?",
          options: [
            "$v=u+at$",
            "$s=ut+\\tfrac12at^2$",
            "$KE=\\tfrac12mv^2$",
            "$v=u+at^2$",
          ],
          answer: 3,
          explanation:
            "$at^2$ is a length, whereas $u$ and $v$ are velocities.",
        },
        {
          type: "tf",
          marks: 1,
          prompt:
            "Dimensional analysis can determine the factor $2\\pi$ in the pendulum-period formula.",
          answer: false,
          explanation:
            "Pure dimensionless numerical factors cannot normally be determined dimensionally.",
        },
        {
          type: "matching",
          marks: 2,
          prompt: "Match each quantity with its dimensional formula.",
          left: ["Momentum", "Force", "Energy", "Power"],
          options: [
            "$[M][L][T]^{-1}$",
            "$[M][L][T]^{-2}$",
            "$[M][L]^2[T]^{-2}$",
            "$[M][L]^2[T]^{-3}$",
          ],
          answer: [0, 1, 2, 3],
          explanation:
            "Each formula follows from the defining relation of the quantity.",
        },
        {
          type: "multi",
          marks: 2,
          prompt: "Select all valid limitations of dimensional analysis.",
          options: [
            "It cannot determine vector direction",
            "It always finds numerical constants",
            "It cannot prove full physical correctness",
            "It cannot distinguish all quantities with identical dimensions",
            "It replaces experiments",
          ],
          answers: [0, 2, 3],
          explanation:
            "Dimensions do not determine directions, complete physical validity or the identity of same-dimension quantities.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "For $T\\propto L^ag^b$, which exponents are obtained?",
          options: [
            "$a=1, b=-1$",
            "$a=1/2, b=-1/2$",
            "$a=-1/2, b=1/2$",
            "$a=2, b=-2$",
          ],
          answer: 1,
          explanation:
            "Equating the length and time exponents gives $a=1/2$ and $b=-1/2$.",
        },
        {
          type: "multi",
          marks: 2,
          prompt: "Select all quantities with dimensions $[M][L]^2[T]^{-2}$.",
          options: ["Work", "Energy", "Torque", "Power", "Pressure"],
          answers: [0, 1, 2],
          explanation:
            "Work, energy and torque share these dimensions, illustrating that dimensions do not identify a quantity uniquely.",
        },
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [
        {
          key: "dimensionalExplorer",
          label: "Use the dimensional analysis laboratory",
        },
        { key: "dimensionalPractice", label: "Complete the practice section" },
      ],
    },
  ],
};
