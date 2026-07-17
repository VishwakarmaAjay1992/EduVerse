import type { LessonContent } from "@/lib/lesson-content-types";

export const measurementUncertaintyAndSignificantFigures: LessonContent = {
  subjectSlug: "physics",
  chapterSlug: "measurement-and-units",
  lessonSlug: "measurement-uncertainty-and-significant-figures",
  title: "Measurement, Uncertainty and Significant Figures",
  objectives: [
    "Explain instrument resolution and least count",
    "Read a ruler, vernier caliper and micrometer screw gauge",
    "Identify zero error and apply zero correction",
    "Distinguish between accuracy, precision, resolution and sensitivity",
    "Distinguish between random and systematic errors",
    "Estimate uncertainty from a measuring instrument",
    "Calculate a mean value and uncertainty from repeated measurements",
    "Calculate absolute, fractional and percentage uncertainty",
    "Identify and correctly use significant figures",
    "Round calculated answers appropriately",
    "Apply introductory uncertainty-propagation rules",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Every measurement is limited by the instrument, the method and the conditions in which it is made. Reporting a measurement responsibly means giving a sensible number of digits and, when appropriate, an estimate of its uncertainty.",
        "This lesson develops practical measurement skills: reading precision instruments, recognising error, combining repeated readings and presenting calculated results without claiming more certainty than the evidence supports.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "A measured value is an estimate",
      body: "A measurement such as $(12.42\\pm0.03)\\,\\text{cm}$ states a best estimate and an uncertainty interval. It does not claim that the exact value is known.",
    },
    {
      kind: "theory",
      heading: "Measurement quality",
      paragraphs: [
        "Several words describe measurement quality. They are related but not interchangeable. A precise set of readings may still be inaccurate if every reading is shifted by the same calibration error.",
      ],
    },
    {
      kind: "table",
      heading: "Key measurement terms",
      headers: ["Term", "Meaning", "Example"],
      rows: [
        [
          "Accuracy",
          "Closeness to the accepted or true value",
          "A balance gives 100.0 g for a certified 100.0 g mass",
        ],
        [
          "Precision",
          "Closeness of repeated readings to one another",
          "Five readings all lie between 9.98 cm and 10.00 cm",
        ],
        [
          "Resolution",
          "Smallest change the instrument display or scale can show",
          "A ruler marked every 1 mm has 1 mm resolution",
        ],
        [
          "Sensitivity",
          "How strongly the instrument output responds to an input change",
          "A sensitive thermometer shows a noticeable rise for a small temperature increase",
        ],
        [
          "Repeatability",
          "Agreement when the same person repeats the method under the same conditions",
          "One student repeats a timing procedure",
        ],
        [
          "Reproducibility",
          "Agreement when conditions, operators or equipment change",
          "Different laboratories obtain compatible results",
        ],
      ],
    },
    {
      kind: "figure",
      caption:
        "Accuracy describes closeness to the target; precision describes closeness of repeated results to one another.",
      figure: { type: "accuracyPrecision" },
    },
    {
      kind: "theory",
      heading: "Least count and instrument resolution",
      paragraphs: [
        "The least count is the smallest value that can be read directly from an instrument's scale. For many simple instruments, least count and resolution are used in nearly the same practical sense.",
        "An instrument should match the quantity being measured. A metre rule may be suitable for a desk but not for the diameter of a thin wire. Writing extra decimal places beyond the instrument's capability creates false precision.",
        "Digital instruments normally change in steps equal to the last displayed digit. An analogue reading must be estimated between visible scale marks only when the method and instrument justify doing so.",
      ],
    },
    {
      kind: "table",
      heading: "Choosing a suitable instrument",
      headers: ["Instrument", "Typical resolution", "Suitable use"],
      rows: [
        ["Metre rule", "1 mm", "Length of a book or table"],
        ["Measuring tape", "1 mm or 1 cm", "Room dimensions or long distances"],
        [
          "Digital stopwatch",
          "0.01 s shown",
          "Timed events, though human reaction time may dominate",
        ],
        ["Digital balance", "0.1 g or 0.01 g", "Mass, depending on the model"],
        [
          "Thermometer",
          "Often 1 °C, 0.1 °C or finer",
          "Temperature within its calibrated range",
        ],
        [
          "Vernier caliper",
          "Commonly 0.1 mm or 0.02 mm",
          "External, internal and depth measurements",
        ],
        [
          "Micrometer screw gauge",
          "Commonly 0.01 mm",
          "Thin wire, sheet or small diameter",
        ],
      ],
      note: "Always read the actual scale specification. Not every vernier caliper or micrometer has the same least count.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Recording rule",
      body: "Record all digits justified by the instrument, but do not add unsupported digits. A 1 mm ruler reading should not normally be reported as 12.34726 cm.",
    },
    {
      kind: "theory",
      heading: "Reading a ruler correctly",
      paragraphs: [
        "Place the zero mark at one end of the object, keep the scale parallel to the measured length and view the mark directly from above. If the ruler edge is damaged, use two clear scale positions and subtract the initial reading from the final reading.",
      ],
    },
    {
      kind: "figure",
      caption:
        "A scale should be viewed perpendicular to its markings to avoid parallax error.",
      figure: { type: "parallax" },
    },
    {
      kind: "example",
      prompt:
        "An object begins at the 1.3 cm mark and ends at the 8.7 cm mark of a ruler. Find its length.",
      steps: [
        "Use length = final reading − initial reading.",
        "$l=8.7\\,\\text{cm}-1.3\\,\\text{cm}$.",
      ],
      answer: "$l=7.4\\,\\text{cm}$.",
    },
    {
      kind: "theory",
      heading: "The vernier caliper",
      paragraphs: [
        "A vernier caliper has a fixed jaw, sliding jaw, main scale and vernier scale. It can measure external dimensions, internal dimensions and depths.",
        "First read the last main-scale mark completely to the left of the vernier zero. Then find the vernier division that aligns with a main-scale mark. Multiply its number by the instrument's least count.",
      ],
      list: [
        "Close the jaws gently and check the zero position before measuring.",
        "Keep the object square between the jaws; do not tilt it.",
        "Do not force the sliding jaw against the object.",
        "State the least count used by the instrument.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\text{Observed reading}=\\text{main-scale reading}+(\\text{vernier coincidence})(\\text{least count})",
      caption: "Apply zero correction after finding the observed reading.",
    },
    {
      kind: "example",
      prompt:
        "A vernier caliper has least count $0.01\\,\\text{cm}$. The vernier zero lies just beyond $2.3\\,\\text{cm}$ and the sixth vernier division coincides. Find the reading.",
      steps: [
        "Main-scale reading = $2.30\\,\\text{cm}$.",
        "Vernier contribution = $6\\times0.01\\,\\text{cm}=0.06\\,\\text{cm}$.",
        "Observed reading = $2.30+0.06\\,\\text{cm}$.",
      ],
      answer: "$2.36\\,\\text{cm}$, before any zero correction.",
    },
    {
      kind: "theory",
      heading: "Zero error and zero correction",
      paragraphs: [
        "Zero error exists when an instrument does not read zero when it should. A positive zero error makes observed readings too large; a negative zero error makes them too small.",
        "Zero correction has the opposite sign to zero error. The corrected reading is the observed reading minus the zero error.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\text{corrected reading}=\\text{observed reading}-\\text{zero error}",
      caption:
        "Equivalently, corrected reading = observed reading + zero correction.",
    },
    {
      kind: "example",
      prompt:
        "A caliper gives an observed reading of $2.36\\,\\text{cm}$ and has a positive zero error of $+0.03\\,\\text{cm}$. Find the corrected value.",
      steps: [
        "Positive zero error means the instrument over-reads.",
        "$\\text{corrected}=2.36-(+0.03)\\,\\text{cm}$.",
      ],
      answer: "$2.33\\,\\text{cm}$.",
    },
    {
      kind: "example",
      prompt:
        "A caliper gives $4.18\\,\\text{cm}$ and has a negative zero error of $-0.02\\,\\text{cm}$. Find the corrected value.",
      steps: [
        "$\\text{corrected}=4.18-(-0.02)\\,\\text{cm}$.",
        "Subtracting a negative error adds the correction.",
      ],
      answer: "$4.20\\,\\text{cm}$.",
    },
    {
      kind: "theory",
      heading: "The micrometer screw gauge",
      paragraphs: [
        "A micrometer measures small thicknesses and diameters. Its key parts are the anvil, spindle, sleeve or pitch scale, thimble or circular scale and ratchet.",
        "The pitch is the distance advanced by the spindle in one complete turn. Dividing the pitch by the number of circular-scale divisions gives the least count.",
        "Use the ratchet to apply a repeatable gentle force. Excessive tightening can compress the object or damage the instrument.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\text{least count}=\\frac{\\text{pitch}}{\\text{number of circular-scale divisions}}",
    },
    {
      kind: "formula",
      latex:
        "\\text{observed reading}=\\text{pitch-scale reading}+(\\text{circular-scale reading})(\\text{least count})",
    },
    {
      kind: "example",
      prompt:
        "A micrometer has pitch $0.50\\,\\text{mm}$ and 50 thimble divisions. Find its least count.",
      steps: [
        "$\\text{least count}=0.50\\,\\text{mm}/50$.",
        "Divide the distance moved in one turn by the number of divisions.",
      ],
      answer: "$0.01\\,\\text{mm}$.",
    },
    {
      kind: "example",
      prompt:
        "The sleeve reading is $5.00\\,\\text{mm}$ and thimble division 37 aligns with the reference line. The least count is $0.01\\,\\text{mm}$. Find the observed reading.",
      steps: [
        "Circular contribution = $37\\times0.01\\,\\text{mm}=0.37\\,\\text{mm}$.",
        "Observed reading = $5.00+0.37\\,\\text{mm}$.",
      ],
      answer: "$5.37\\,\\text{mm}$.",
    },
    {
      kind: "theory",
      heading: "Sources and types of error",
      paragraphs: [
        "Random errors vary unpredictably from reading to reading. Systematic errors shift readings consistently in one direction. Repetition can reduce the influence of random variation, but it does not remove a systematic bias.",
      ],
    },
    {
      kind: "table",
      heading: "Common measurement errors",
      headers: ["Error", "Type or source", "How to reduce or detect it"],
      rows: [
        [
          "Random fluctuation",
          "Random",
          "Repeat readings and use an appropriate average",
        ],
        [
          "Calibration offset",
          "Systematic",
          "Compare with a standard and recalibrate",
        ],
        [
          "Zero error",
          "Systematic instrument error",
          "Check zero and apply correction",
        ],
        [
          "Parallax",
          "Reading technique",
          "View the scale perpendicular to its markings",
        ],
        [
          "Reaction time",
          "Human timing limitation",
          "Use automated timing or repeat longer intervals",
        ],
        [
          "Environmental effect",
          "Temperature, vibration, air currents or humidity",
          "Control or record conditions",
        ],
        [
          "Instrument resolution",
          "Instrument limitation",
          "Use a more suitable instrument when necessary",
        ],
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Averaging has limits",
      body: "A mean can reduce random scatter. It cannot correct a balance that is always 0.5 g too high or a ruler whose zero edge is damaged.",
    },
    {
      kind: "theory",
      heading: "Estimating uncertainty",
      paragraphs: [
        "Uncertainty conventions depend on the instrument, method and course. The following are common introductory conventions, not universal laws.",
      ],
      list: [
        "For an analogue instrument, uncertainty is often estimated as approximately half the smallest scale division.",
        "For a digital instrument, uncertainty is often estimated as approximately one unit in the last displayed digit.",
        "For repeated readings, half the range is often used as an introductory estimate of random uncertainty.",
        "The chosen convention should be stated and used consistently.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A ruler has 1 mm divisions. Using the common half-division convention, estimate the reading uncertainty.",
      steps: [
        "Smallest division = $1\\,\\text{mm}$.",
        "Half of the smallest division = $0.5\\,\\text{mm}$.",
      ],
      answer:
        "Estimated uncertainty $\\approx\\pm0.5\\,\\text{mm}$ for one direct reading under this convention.",
    },
    {
      kind: "theory",
      heading: "Repeated measurements",
      paragraphs: [
        "Repeated readings reveal random spread. Calculate the mean as the best estimate, then use the stated uncertainty convention. Half the range is simple and useful at introductory level, although more advanced courses use statistical measures such as standard deviation.",
      ],
    },
    {
      kind: "formula",
      latex: "\\bar{x}=\\frac{x_1+x_2+\\cdots+x_n}{n}",
      caption: "Arithmetic mean of repeated readings.",
    },
    {
      kind: "formula",
      latex: "\\text{half-range uncertainty}=\\frac{x_{\\max}-x_{\\min}}{2}",
    },
    {
      kind: "example",
      prompt:
        "Five length readings are $12.39$, $12.43$, $12.45$, $12.41$ and $12.42\\,\\text{cm}$. Report the mean with half-range uncertainty.",
      steps: [
        "Mean $=(12.39+12.43+12.45+12.41+12.42)/5=12.42\\,\\text{cm}$.",
        "Maximum = $12.45\\,\\text{cm}$; minimum = $12.39\\,\\text{cm}$.",
        "Range = $12.45-12.39=0.06\\,\\text{cm}$.",
        "Half-range = $0.06/2=0.03\\,\\text{cm}$.",
      ],
      answer: "$l=(12.42\\pm0.03)\\,\\text{cm}$.",
    },
    {
      kind: "theory",
      heading: "Absolute, fractional and percentage uncertainty",
      paragraphs: [
        "Absolute uncertainty has the same unit as the measured value. Fractional uncertainty compares the absolute uncertainty with the value and has no unit. Percentage uncertainty is the fractional uncertainty multiplied by 100%.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\text{fractional uncertainty}=\\frac{\\text{absolute uncertainty}}{\\text{measured value}}",
    },
    {
      kind: "formula",
      latex:
        "\\text{percentage uncertainty}=\\text{fractional uncertainty}\\times100\\%",
    },
    {
      kind: "example",
      prompt:
        "A length is $(50.0\\pm0.5)\\,\\text{cm}$. Find the fractional and percentage uncertainty.",
      steps: [
        "Fractional uncertainty = $0.5/50.0=0.010$.",
        "Percentage uncertainty = $0.010\\times100\\%=1.0\\%$.",
      ],
      answer:
        "Fractional uncertainty $0.010$; percentage uncertainty $1.0\\%$.",
    },
    {
      kind: "example",
      prompt:
        "A time is $(2.40\\pm0.06)\\,\\text{s}$. Find its percentage uncertainty.",
      steps: [
        "Fractional uncertainty = $0.06/2.40=0.025$.",
        "$0.025\\times100\\%=2.5\\%$.",
      ],
      answer: "Percentage uncertainty = $2.5\\%$.",
    },
    {
      kind: "example",
      prompt:
        "A mass is $250\\,\\text{g}$ with $0.8\\%$ uncertainty. Find the absolute uncertainty.",
      steps: [
        "Convert percentage to a fraction: $0.8\\%=0.008$.",
        "Absolute uncertainty = $0.008\\times250\\,\\text{g}$.",
      ],
      answer:
        "Absolute uncertainty = $2\\,\\text{g}$, so $m=(250\\pm2)\\,\\text{g}$.",
    },
    {
      kind: "theory",
      heading: "Significant figures",
      paragraphs: [
        "Significant figures communicate which digits are meaningful in a measured or calculated value. They begin at the first non-zero digit and include justified zeros according to their position.",
      ],
    },
    {
      kind: "table",
      heading: "Rules for counting significant figures",
      headers: ["Rule", "Example", "Significant figures"],
      rows: [
        ["All non-zero digits count", "$347$", "3"],
        ["Zeros between non-zero digits count", "$100.20$", "5"],
        ["Leading zeros do not count", "$0.00450$", "3"],
        ["Trailing zeros after a decimal point count", "$1.0200$", "5"],
        [
          "Trailing zeros in a whole number may be ambiguous",
          "$3000$",
          "Not clear without context",
        ],
        [
          "Scientific notation makes the count explicit",
          "$3.000\\times10^3$",
          "4",
        ],
        [
          "Exact counted values do not limit precision",
          "12 students",
          "Exact count",
        ],
      ],
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Use scientific notation to remove ambiguity",
      body: "Write $3\\times10^3$, $3.0\\times10^3$, $3.00\\times10^3$ or $3.000\\times10^3$ to show one, two, three or four significant figures explicitly.",
    },
    {
      kind: "theory",
      heading: "Rounding correctly",
      paragraphs: [
        "Locate the last digit to be kept and inspect the first discarded digit. If it is 0–4, leave the kept digit unchanged; if it is 5–9, increase it by one.",
        "Keep guard digits during intermediate work and round only the final answer whenever possible. Always retain the unit.",
      ],
    },
    {
      kind: "example",
      prompt: "Round $0.006784$ to three significant figures.",
      steps: [
        "The first significant digit is 6.",
        "Keep 6, 7 and 8. The next digit is 4, so do not round 8 upward.",
      ],
      answer: "$0.00678$.",
    },
    {
      kind: "example",
      prompt: "Round $58.975$ to four significant figures.",
      steps: [
        "Keep 5, 8, 9 and 7.",
        "The next digit is 5, so round the 7 upward to 8.",
      ],
      answer: "$58.98$.",
    },
    {
      kind: "theory",
      heading: "Significant figures in calculations",
      paragraphs: [
        "For multiplication and division, the final answer generally follows the smallest number of significant figures in the measured inputs.",
        "For addition and subtraction, the final answer generally follows the least precise decimal place, not the smallest number of significant figures.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Calculate $2.4\\,\\text{m}\\times3.15\\,\\text{m}$ and report an appropriate result.",
      steps: [
        "Calculator result: $2.4\\times3.15=7.56\\,\\text{m}^2$.",
        "$2.4$ has two significant figures; $3.15$ has three.",
        "Round the final product to two significant figures.",
      ],
      answer: "$7.6\\,\\text{m}^2$.",
    },
    {
      kind: "example",
      prompt:
        "Calculate $12.43\\,\\text{cm}+0.8\\,\\text{cm}+3.216\\,\\text{cm}$.",
      steps: [
        "Unrounded sum = $16.446\\,\\text{cm}$.",
        "The least precise input is given to the tenths place: $0.8\\,\\text{cm}$.",
        "Round the result to the tenths place.",
      ],
      answer: "$16.4\\,\\text{cm}$.",
    },
    {
      kind: "theory",
      heading: "Introductory uncertainty propagation",
      paragraphs: [
        "The rules below estimate a conservative maximum uncertainty. More advanced statistical methods may combine independent random uncertainties differently.",
      ],
      list: [
        "For addition or subtraction, add absolute uncertainties.",
        "For multiplication or division, add fractional or percentage uncertainties.",
        "For a power $Q=x^n$, multiply the fractional or percentage uncertainty in $x$ by $|n|$.",
      ],
    },
    {
      kind: "formula",
      latex:
        "Q=A\\pm B\\quad\\Rightarrow\\quad\\Delta Q\\approx\\Delta A+\\Delta B",
      caption:
        "Introductory maximum-uncertainty rule for addition and subtraction.",
    },
    {
      kind: "formula",
      latex:
        "Q=AB\\text{ or }A/B\\quad\\Rightarrow\\quad\\frac{\\Delta Q}{Q}\\approx\\frac{\\Delta A}{A}+\\frac{\\Delta B}{B}",
    },
    {
      kind: "example",
      prompt:
        "A rectangle has $l=(20.0\\pm0.1)\\,\\text{cm}$ and $w=(10.0\\pm0.1)\\,\\text{cm}$. Find the perimeter with maximum uncertainty.",
      steps: [
        "$P=2l+2w=2(20.0)+2(10.0)=60.0\\,\\text{cm}$.",
        "$\\Delta P=2\\Delta l+2\\Delta w=2(0.1)+2(0.1)=0.4\\,\\text{cm}$.",
      ],
      answer: "$P=(60.0\\pm0.4)\\,\\text{cm}$.",
    },
    {
      kind: "example",
      prompt: "Using the same rectangle, estimate the area uncertainty.",
      steps: [
        "$A=lw=20.0\\times10.0=200\\,\\text{cm}^2$.",
        "Percentage uncertainty in $l$ = $0.1/20.0\\times100=0.5\\%$.",
        "Percentage uncertainty in $w$ = $0.1/10.0\\times100=1.0\\%$.",
        "Percentage uncertainty in area $\\approx0.5\\%+1.0\\%=1.5\\%$.",
        "Absolute uncertainty = $0.015\\times200=3\\,\\text{cm}^2$.",
      ],
      answer: "$A\\approx(200\\pm3)\\,\\text{cm}^2$.",
    },
    {
      kind: "example",
      prompt:
        "Distance is $(100.0\\pm0.5)\\,\\text{m}$ and time is $(12.0\\pm0.2)\\,\\text{s}$. Estimate speed and percentage uncertainty.",
      steps: [
        "$v=100.0/12.0=8.333...\\,\\text{m s}^{-1}$.",
        "Distance percentage uncertainty = $0.5/100.0\\times100=0.5\\%$.",
        "Time percentage uncertainty = $0.2/12.0\\times100=1.67\\%$.",
        "Speed percentage uncertainty $\\approx2.17\\%$, rounded sensibly to $2.2\\%$.",
        "Absolute uncertainty $\\approx0.022\\times8.33=0.18\\,\\text{m s}^{-1}$.",
      ],
      answer: "$v\\approx(8.33\\pm0.18)\\,\\text{m s}^{-1}$.",
    },
    {
      kind: "example",
      prompt:
        "Mass is $(78.0\\pm0.2)\\,\\text{g}$ and volume is $(10.0\\pm0.1)\\,\\text{cm}^3$. Estimate density and uncertainty.",
      steps: [
        "$\\rho=78.0/10.0=7.80\\,\\text{g cm}^{-3}$.",
        "Mass percentage uncertainty = $0.2/78.0\\times100=0.26\\%$.",
        "Volume percentage uncertainty = $0.1/10.0\\times100=1.0\\%$.",
        "Density percentage uncertainty $\\approx1.26\\%$.",
        "Absolute uncertainty $\\approx0.0126\\times7.80=0.098\\,\\text{g cm}^{-3}$, about $0.10\\,\\text{g cm}^{-3}$.",
      ],
      answer: "$\\rho\\approx(7.80\\pm0.10)\\,\\text{g cm}^{-3}$.",
    },
    {
      kind: "measurementUncertaintyExplorer",
      heading: "Interactive measurement and uncertainty laboratory",
    },
    {
      kind: "realWorld",
      heading: "Why uncertainty matters",
      items: [
        {
          area: "Construction and manufacturing",
          text: "Parts must fit within tolerances; an unsupported extra digit can misrepresent whether a component is acceptable.",
        },
        {
          area: "Medicine",
          text: "Clinical decisions depend on instrument calibration, repeatability and uncertainty in measured values.",
        },
        {
          area: "Environmental monitoring",
          text: "Temperature, pollution and rainfall trends require comparable instruments and reproducible methods.",
        },
        {
          area: "Laboratory science",
          text: "Uncertainty shows whether two results genuinely disagree or overlap within experimental limits.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Calling a tightly grouped set accurate without checking the true value.",
          right:
            "Tight grouping shows precision; accuracy requires closeness to a reference value.",
        },
        {
          wrong: "Assuming every vernier caliper has least count 0.01 cm.",
          right: "Read and state the least count of the specific instrument.",
        },
        {
          wrong: "Adding a positive zero error to the observed value.",
          right:
            "Subtract the zero error, or add a correction with the opposite sign.",
        },
        {
          wrong: "Believing repeated readings remove calibration bias.",
          right:
            "Repetition reduces random influence but not systematic error.",
        },
        {
          wrong: "Counting leading zeros as significant.",
          right: "Leading zeros only locate the decimal point.",
        },
        {
          wrong:
            "Using significant-figure rules for addition based only on digit count.",
          right:
            "Addition and subtraction are rounded according to decimal place.",
        },
        {
          wrong: "Rounding every intermediate step.",
          right: "Keep guard digits and round the final result.",
        },
        {
          wrong: "Reporting uncertainty with no unit.",
          right:
            "Absolute uncertainty carries the same unit as the measured value.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice (not graded)",
      stepKey: "measurementPractice",
      questions: [
        {
          prompt: "A ruler is marked every 1 mm. What is its scale resolution?",
          options: ["0.1 mm", "1 mm", "10 mm"],
          answer: 1,
          explanation: "Resolution is the smallest displayed scale step.",
        },
        {
          prompt: "Which error is most clearly systematic?",
          options: [
            "Readings fluctuate around a mean",
            "A balance always reads 0.4 g high",
            "A stopwatch user reacts differently each time",
          ],
          answer: 1,
          explanation: "A constant calibration offset shifts all readings.",
        },
        {
          prompt: "What is the zero correction for a +0.03 cm zero error?",
          options: ["+0.03 cm", "−0.03 cm", "0 cm"],
          answer: 1,
          explanation: "Correction has the opposite sign to error.",
        },
        {
          prompt:
            "A micrometer pitch is 0.50 mm with 50 divisions. What is its least count?",
          options: ["0.10 mm", "0.01 mm", "0.001 mm"],
          answer: 1,
          explanation: "$0.50/50=0.01\\,\\text{mm}$.",
        },
        {
          prompt: "Which number has three significant figures?",
          options: ["0.00450", "0.0045", "0.004500"],
          answer: 0,
          explanation:
            "The digits 4, 5 and the trailing decimal zero are significant.",
        },
        {
          prompt: "Round 6.784 to three significant figures.",
          options: ["6.78", "6.79", "6.8"],
          answer: 0,
          explanation:
            "The next digit is 4, so the third digit stays unchanged.",
        },
        {
          prompt:
            "What is the percentage uncertainty in $(20.0\\pm0.4)\\,\\text{cm}$?",
          options: ["0.5%", "2.0%", "4.0%"],
          answer: 1,
          explanation: "$0.4/20.0\\times100=2.0\\%$.",
        },
        {
          prompt:
            "For repeated values 5.2, 5.4 and 5.3, what is the half-range?",
          options: ["0.1", "0.2", "5.3"],
          answer: 0,
          explanation: "Half-range = $(5.4-5.2)/2=0.1$.",
        },
        {
          prompt: "Which operation generally uses decimal-place precision?",
          options: ["Multiplication", "Division", "Addition"],
          answer: 2,
          explanation:
            "Addition and subtraction follow the least precise decimal place.",
        },
        {
          prompt:
            "If $A=l^2$, a 3% uncertainty in $l$ gives approximately what uncertainty in $A$?",
          options: ["1.5%", "3%", "6%"],
          answer: 2,
          explanation:
            "For a power of two, multiply percentage uncertainty by 2.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Accuracy, precision, resolution and sensitivity describe different properties of measurement.",
        "Least count is determined from the actual instrument scale.",
        "Vernier and micrometer readings combine a main or pitch scale with a finer scale contribution.",
        "Corrected reading equals observed reading minus zero error.",
        "Repetition reduces random variation but does not remove systematic bias.",
        "Uncertainty may be expressed in absolute, fractional or percentage form.",
        "Significant figures prevent results from claiming unsupported precision.",
        "Multiplication and division use significant figures; addition and subtraction use decimal-place precision.",
        "Introductory propagation adds absolute uncertainties for sums and fractional uncertainties for products.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Lesson Quiz: Measurement, Uncertainty and Significant Figures",
      passMark: 60,
      questions: [
        {
          type: "mc",
          marks: 1,
          prompt: "What does instrument resolution describe?",
          options: [
            "Closeness to the true value",
            "Smallest change the instrument can display",
            "Agreement between laboratories",
            "Size of systematic error",
          ],
          answer: 1,
          explanation:
            "Resolution is the smallest scale or display increment that can be distinguished.",
        },
        {
          type: "mc",
          marks: 1,
          prompt:
            "A vernier main-scale reading is 3.20 cm, coincidence is 7 and least count is 0.01 cm. What is the observed reading?",
          options: ["3.07 cm", "3.27 cm", "3.70 cm", "3.21 cm"],
          answer: 1,
          explanation: "$3.20+7(0.01)=3.27\\,\\text{cm}$.",
        },
        {
          type: "mc",
          marks: 1,
          prompt:
            "An observed reading is 2.48 cm with zero error +0.04 cm. What is the corrected reading?",
          options: ["2.44 cm", "2.48 cm", "2.52 cm", "2.40 cm"],
          answer: 0,
          explanation: "Corrected reading = $2.48-(+0.04)=2.44\\,\\text{cm}$.",
        },
        {
          type: "tf",
          marks: 1,
          prompt: "A precise group of readings must also be accurate.",
          answer: false,
          explanation:
            "A systematic error can make tightly grouped readings inaccurate.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Which method best reduces the influence of random error?",
          options: [
            "Apply the same zero correction twice",
            "Repeat readings and average appropriately",
            "Add extra decimal places",
            "Ignore unusual conditions",
          ],
          answer: 1,
          explanation:
            "Repeated measurements reveal and reduce the influence of random fluctuations.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "How many significant figures are in 0.005060?",
          options: ["3", "4", "5", "6"],
          answer: 1,
          explanation:
            "The significant digits are 5, the captive zero, 6 and the trailing decimal zero: four figures.",
        },
        {
          type: "mc",
          marks: 1,
          prompt: "Round 12.846 to four significant figures.",
          options: ["12.84", "12.85", "12.8", "12.8460"],
          answer: 1,
          explanation:
            "Keep 1, 2, 8 and 4; the next digit 6 rounds 4 upward to 5.",
        },
        {
          type: "mc",
          marks: 1,
          prompt:
            "What is the percentage uncertainty in $(80.0\\pm1.2)\\,\\text{g}$?",
          options: ["0.67%", "1.5%", "6.7%", "15%"],
          answer: 1,
          explanation: "$1.2/80.0\\times100=1.5\\%$.",
        },
        {
          type: "matching",
          marks: 2,
          prompt: "Match each term with its description.",
          left: ["Accuracy", "Precision", "Random error", "Systematic error"],
          options: [
            "Closeness to accepted value",
            "Agreement among repeated readings",
            "Unpredictable reading-to-reading variation",
            "Consistent bias in one direction",
          ],
          answer: [0, 1, 2, 3],
          explanation:
            "These distinctions are essential when evaluating measurements.",
        },
        {
          type: "multi",
          marks: 2,
          prompt: "Select all statements that are correct.",
          options: [
            "Leading zeros are significant",
            "Trailing zeros after a decimal point are significant",
            "Scientific notation can show significant figures explicitly",
            "Exact counted values limit measured precision",
            "Round only the final result when possible",
          ],
          answers: [1, 2, 4],
          explanation:
            "Leading zeros are placeholders, exact counts do not limit measured significant figures, and guard digits should be retained.",
        },
        {
          type: "mc",
          marks: 1,
          prompt:
            "A rectangle's length uncertainty is 2% and width uncertainty is 3%. What is the introductory maximum percentage uncertainty in area?",
          options: ["1%", "2.5%", "5%", "6%"],
          answer: 2,
          explanation:
            "For multiplication, add percentage uncertainties: $2\\%+3\\%=5\\%$.",
        },
        {
          type: "multi",
          marks: 2,
          prompt:
            "Select all errors that repeated averaging does not automatically remove.",
          options: [
            "Calibration offset",
            "Positive zero error",
            "Random reading fluctuation",
            "Consistent scale mis-marking",
            "Small reaction-time variations",
          ],
          answers: [0, 1, 3],
          explanation:
            "Calibration, zero and scale errors are systematic; averaging does not remove them.",
        },
      ],
    },
    {
      kind: "completion",
      requireQuizPass: true,
      steps: [
        {
          key: "measurementExplorer",
          label: "Use all four measurement laboratory activities",
        },
        { key: "measurementPractice", label: "Complete the practice section" },
      ],
    },
  ],
};
