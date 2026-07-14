import type { LessonContent } from "@/lib/lesson-content-types";

export const introductionToPhysicalQuantities: LessonContent = {
  subjectSlug: "physics",
  chapterSlug: "measurement-and-units",
  lessonSlug: "what-physics-measures",
  title: "Introduction to Physical Quantities",
  objectives: [
    "Define a physical quantity",
    "Identify common physical quantities",
    "Distinguish between fundamental and derived quantities",
    "Distinguish between scalar and vector quantities",
    "Select suitable measuring instruments",
    "Explain the difference between accuracy and precision",
    "Identify basic sources of measurement error",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "When you measure the length of a table, check your body temperature, record the time of a race, or find the mass of an object, you are using physical quantities.",
        "Physics is built on observation and measurement. A physical quantity is simply something we can measure — and a measurement normally needs two parts: a number and a unit.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Key idea",
      body: "A number without a unit usually does not give a complete physical measurement. '5' means little; '5 metres' is a measurement.",
    },
    {
      kind: "theory",
      heading: "What is a physical quantity?",
      paragraphs: [
        "A physical quantity is a measurable property of an object, material, event or system. Every physical quantity normally has a numerical value and a unit — for example 5 metres, 10 seconds, or 25 kilograms.",
      ],
    },
    {
      kind: "cards",
      heading: "Everyday physical quantities",
      columns: 3,
      items: [
        {
          title: "Length",
          icon: "length",
          value: "2",
          unit: "m",
          text: "How long or far something is.",
        },
        {
          title: "Mass",
          icon: "mass",
          value: "5",
          unit: "kg",
          text: "How much matter an object contains.",
        },
        { title: "Time", icon: "time", value: "10", unit: "s", text: "How long an event lasts." },
        {
          title: "Temperature",
          icon: "temperature",
          value: "30",
          unit: "°C",
          text: "How hot or cold something is.",
        },
        {
          title: "Speed",
          icon: "speed",
          value: "20",
          unit: "m/s",
          text: "How fast something moves.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "Fundamental quantities",
      paragraphs: [
        "Fundamental (base) quantities are the basic quantities that are not defined using other physical quantities. The international system (SI) has seven, each with its own base unit.",
      ],
    },
    {
      kind: "table",
      headers: ["Quantity", "SI Unit", "Symbol", "Common Instrument"],
      rows: [
        ["Length", "metre", "m", "ruler or measuring tape"],
        ["Mass", "kilogram", "kg", "balance"],
        ["Time", "second", "s", "stopwatch or clock"],
        ["Temperature", "kelvin", "K", "thermometer"],
        ["Electric current", "ampere", "A", "ammeter"],
        ["Amount of substance", "mole", "mol", "laboratory measurement"],
        ["Luminous intensity", "candela", "cd", "photometric instrument"],
      ],
      note: "Degrees Celsius (°C) is common in daily life, but the kelvin (K) is the SI base unit for temperature.",
    },
    {
      kind: "theory",
      heading: "Derived quantities",
      paragraphs: [
        "Derived quantities are formed by combining fundamental quantities with multiplication or division. For example, speed is distance divided by time.",
      ],
    },
    {
      kind: "figure",
      caption: "Fundamental quantities combine mathematically to make derived quantities.",
      figure: { type: "derivedFlow" },
    },
    {
      kind: "cards",
      columns: 4,
      items: [
        { title: "Area", icon: "length", value: "", unit: "m²", text: "length × width" },
        { title: "Volume", icon: "volume", value: "", unit: "m³", text: "length × width × height" },
        { title: "Speed", icon: "speed", value: "", unit: "m/s", text: "distance ÷ time" },
        { title: "Density", icon: "mass", value: "", unit: "kg/m³", text: "mass ÷ volume" },
      ],
    },
    {
      kind: "theory",
      heading: "Scalars and vectors",
      paragraphs: [
        "A scalar quantity has magnitude (size) only. A vector quantity has both magnitude and direction. Saying '20 m/s' is a scalar; saying '20 m/s east' is a vector.",
      ],
    },
    {
      kind: "figure",
      caption:
        "A scalar states only a size; a vector also states a direction (shown by the arrow).",
      figure: { type: "scalarVector" },
    },
    {
      kind: "comparison",
      heading: "Scalar vs vector",
      left: {
        title: "Scalars (magnitude only)",
        items: ["Mass", "Time", "Distance", "Speed", "Temperature", "Energy"],
      },
      right: {
        title: "Vectors (magnitude + direction)",
        items: ["Displacement", "Velocity", "Acceleration", "Force", "Weight"],
      },
    },
    {
      kind: "callout",
      variant: "didyouknow",
      body: "Distance and displacement look similar but differ: walking 10 m north then 10 m south covers a distance of 20 m, yet the displacement is 0 m because you end where you started.",
    },
    {
      kind: "theory",
      heading: "Measuring instruments",
      paragraphs: [
        "Different quantities need different instruments. Choosing the right tool is the first step to a good measurement.",
      ],
    },
    {
      kind: "cards",
      columns: 3,
      items: [
        { title: "Ruler / tape", icon: "ruler", text: "Length — metres (m)" },
        { title: "Balance", icon: "balance", text: "Mass — kilograms (kg)" },
        { title: "Stopwatch", icon: "stopwatch", text: "Time — seconds (s)" },
        { title: "Thermometer", icon: "thermometer", text: "Temperature — °C or K" },
        { title: "Measuring cylinder", icon: "cylinder", text: "Volume — cubic metres or litres" },
        { title: "Ammeter", icon: "ammeter", text: "Electric current — amperes (A)" },
      ],
    },
    {
      kind: "theory",
      heading: "Accuracy and precision",
      paragraphs: [
        "Accuracy is how close a measurement is to the true value. Precision is how close repeated measurements are to each other. They are not the same — a measurement can be one without the other.",
        "True length 20.0 cm. Set A: 20.0, 20.1, 19.9 cm is accurate and precise. Set B: 18.5, 18.5, 18.6 cm is precise (values agree) but not accurate (far from 20.0 cm).",
      ],
    },
    {
      kind: "figure",
      caption:
        "Accuracy is closeness to the centre; precision is closeness of the shots to each other.",
      figure: { type: "accuracyPrecision" },
    },
    {
      kind: "theory",
      heading: "Measurement error",
      paragraphs: [
        "No measurement is perfectly exact. Common beginner error types are: instrument error, human reading error, parallax error, zero error, and environmental effects.",
        "Parallax error happens when you read a scale from an angle instead of straight on. Zero error happens when an instrument does not read zero before you start.",
      ],
    },
    {
      kind: "figure",
      caption: "Read a scale with your eye level and directly in front to avoid parallax error.",
      figure: { type: "parallax" },
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Good measurement habit",
      body: "Always check the instrument for zero error, read the scale at eye level, and record the unit with the number.",
    },
    {
      kind: "instrumentActivity",
      heading: "Activity 1 — Choose the correct instrument",
      scenarios: [
        {
          scenario: "Measure the length of a pencil.",
          icon: "length",
          options: ["Ruler", "Balance", "Thermometer"],
          answer: 0,
          why: "A ruler measures short lengths precisely.",
        },
        {
          scenario: "Measure the width of a classroom.",
          icon: "length",
          options: ["Ruler", "Tape", "Stopwatch"],
          answer: 1,
          why: "A measuring tape suits longer lengths.",
        },
        {
          scenario: "Measure the temperature of water.",
          icon: "temperature",
          options: ["Thermometer", "Ammeter", "Balance"],
          answer: 0,
          why: "A thermometer measures temperature.",
        },
        {
          scenario: "Measure the mass of a school bag.",
          icon: "mass",
          options: ["Balance", "Ruler", "Cylinder"],
          answer: 0,
          why: "A balance measures mass.",
        },
        {
          scenario: "Measure the time to run 100 m.",
          icon: "time",
          options: ["Stopwatch", "Thermometer", "Tape"],
          answer: 0,
          why: "A stopwatch measures time intervals.",
        },
        {
          scenario: "Measure the volume of water.",
          icon: "volume",
          options: ["Cylinder", "Balance", "Ruler"],
          answer: 0,
          why: "A measuring cylinder measures liquid volume.",
        },
      ],
    },
    {
      kind: "classifyActivity",
      heading: "Activity 2 — Scalar or vector?",
      categories: ["Scalar", "Vector"],
      items: [
        { term: "Mass", category: "Scalar" },
        { term: "Time", category: "Scalar" },
        { term: "Distance", category: "Scalar" },
        { term: "Speed", category: "Scalar" },
        { term: "Temperature", category: "Scalar" },
        { term: "Displacement", category: "Vector" },
        { term: "Velocity", category: "Vector" },
        { term: "Acceleration", category: "Vector" },
        { term: "Force", category: "Vector" },
        { term: "Weight", category: "Vector" },
      ],
    },
    {
      kind: "practice",
      heading: "Practice (not graded)",
      questions: [
        {
          prompt: "Which physical quantity is measured using a stopwatch?",
          options: ["Time", "Mass", "Length"],
          answer: 0,
          explanation: "A stopwatch measures time.",
        },
        {
          prompt: "Is speed a scalar or vector quantity?",
          options: ["Scalar", "Vector"],
          answer: 0,
          explanation: "Speed has magnitude only, so it is a scalar.",
        },
        {
          prompt: "Is force a scalar or vector quantity?",
          options: ["Scalar", "Vector"],
          answer: 1,
          explanation: "Force has magnitude and direction, so it is a vector.",
        },
        {
          prompt: "Is area a fundamental or derived quantity?",
          options: ["Fundamental", "Derived"],
          answer: 1,
          explanation: "Area = length × width, so it is derived.",
        },
        {
          prompt: "Which instrument measures the temperature of water?",
          options: ["Thermometer", "Balance", "Ruler"],
          answer: 0,
          explanation: "A thermometer measures temperature.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "A physical quantity is a measurable property.",
        "A complete measurement normally includes a number and a unit.",
        "Fundamental quantities are basic; derived quantities are built from them.",
        "Scalars have magnitude only; vectors have magnitude and direction.",
        "Different quantities need suitable measuring instruments.",
        "Accuracy (closeness to true value) and precision (repeatability) are not the same.",
        "Good technique reduces measurement error.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson 1 Quiz: Introduction to Physical Quantities",
      passMark: 60,
      questions: [
        {
          type: "mc",
          marks: 1,
          prompt: "What is a physical quantity?",
          options: [
            "Any number written in a notebook",
            "A measurable property of an object or event",
            "Only a value measured in metres",
            "A scientific drawing",
          ],
          answer: 1,
          explanation:
            "A physical quantity is a property that can be measured and expressed with a value and usually a unit.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Which represents a complete physical measurement?",
          options: ["15", "metres", "15 metres", "long distance"],
          answer: 2,
          explanation: "A complete measurement contains both a numerical value and a unit.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Which is a fundamental physical quantity?",
          options: ["Speed", "Area", "Time", "Density"],
          answer: 2,
          explanation: "Time is fundamental; speed, area and density are derived.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Which instrument best measures the mass of a school bag?",
          options: ["Stopwatch", "Thermometer", "Balance", "Measuring cylinder"],
          answer: 2,
          explanation: "A balance measures mass.",
        },
        {
          type: "tf",
          marks: 1,
          prompt: "Speed is a vector quantity.",
          answer: false,
          explanation:
            "Speed has magnitude only, so it is a scalar. Velocity includes direction and is a vector.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Which quantity is a vector?",
          options: ["Temperature", "Distance", "Mass", "Force"],
          answer: 3,
          explanation: "Force has both magnitude and direction, so it is a vector.",
        },
        {
          type: "matching",
          marks: 2,
          prompt: "Match each quantity with the most suitable instrument (0.5 mark each).",
          left: [
            "Length of a pencil",
            "Temperature of water",
            "Time of a race",
            "Mass of an object",
          ],
          options: ["Ruler", "Thermometer", "Stopwatch", "Balance"],
          answer: [0, 1, 2, 3],
          explanation:
            "Length → ruler, temperature → thermometer, time → stopwatch, mass → balance.",
        },
        {
          type: "multi",
          marks: 2,
          prompt: "Select all derived quantities.",
          options: ["Length", "Time", "Speed", "Area", "Mass", "Density"],
          answers: [2, 3, 5],
          explanation: "Speed, area and density are formed by combining fundamental quantities.",
        },
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [
        { key: "instrument", label: "Complete the instrument activity" },
        { key: "classify", label: "Complete the scalar/vector activity" },
        { key: "practice", label: "Complete the practice section" },
      ],
    },
  ],
};
