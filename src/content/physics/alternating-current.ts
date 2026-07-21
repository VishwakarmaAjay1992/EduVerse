import type { LessonContent } from "@/lib/lesson-content-types";

export const alternatingCurrent: LessonContent = {
  "subjectSlug": "physics",
  "chapterSlug": "electromagnetic-induction",
  "lessonSlug": "ac-circuits-and-transformers",
  "title": "AC Circuits and Transformers",
  "objectives": [
    "Define alternating current, time period, frequency, peak value, instantaneous value, rms value and average value",
    "Use rms, average, peak factor and form factor relations for sinusoidal AC",
    "Analyse purely resistive, inductive and capacitive AC circuits using phase relationships and reactance",
    "Solve series LCR circuit problems using impedance, phase angle, resonance and power factor",
    "Explain wattless current, average AC power and maximum power at resonance",
    "Apply transformer relations to step-up and step-down transformers, efficiency and transmission losses",
    "Describe the working principle of an AC generator and derive the instantaneous emf",
    "Practise MCQ, assertion-reason, fill-in-the-blank, case-study, short-answer and long-answer questions"
  ],
  "sections": [
    {
      "kind": "overview",
      "paragraphs": [
        "Study it like a textbook chapter: first learn the definitions and formulas, then compare R, L and C circuits, then solve LCR resonance and transformer questions, and finally attempt the practice exercise and chapter test."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Alternating current (AC)",
      "body": "Alternating current is a current whose magnitude and direction vary periodically with time. For a sinusoidal AC, $I=I_0\\sin \\omega t$ or $I=I_0\\cos \\omega t$, where $I_0$ is peak current and $\\omega$ is angular frequency."
    },
    {
      "kind": "cards",
      "heading": "Basic AC quantities",
      "columns": 3,
      "items": [
        {
          "title": "Time period",
          "text": "Time for one complete cycle: $T=\\frac{2\\pi}{\\omega}$."
        },
        {
          "title": "Frequency",
          "text": "Number of cycles per second: $f=\\frac{1}{T}=\\frac{\\omega}{2\\pi}$. SI unit: hertz (Hz)."
        },
        {
          "title": "Angular frequency",
          "text": "$\\omega=2\\pi f$. It tells how fast the sinusoidal quantity rotates in phase."
        },
        {
          "title": "Peak value",
          "text": "Maximum value of alternating voltage or current. Also called amplitude: $V_0$ or $I_0$."
        },
        {
          "title": "Instantaneous value",
          "text": "Value at a particular instant, such as $v=V_0\\sin\\omega t$."
        },
        {
          "title": "RMS value",
          "text": "Equivalent DC value that produces the same heating effect in a resistor."
        }
      ]
    },
    {
      "kind": "formula",
      "latex": "I_{\\rm rms}=\\frac{I_0}{\\sqrt2}=0.707I_0,\\qquad V_{\\rm rms}=\\frac{V_0}{\\sqrt2}=0.707V_0",
      "caption": "RMS values of sinusoidal current and voltage."
    },
    {
      "kind": "formula",
      "latex": "I_{\\rm avg}=\\frac{2I_0}{\\pi}=0.637I_0",
      "caption": "Average value of sinusoidal AC over one half-cycle. Over a complete cycle the average is zero."
    },
    {
      "kind": "table",
      "heading": "Peak factor and form factor",
      "headers": [
        "Quantity",
        "Meaning",
        "For sinusoidal AC"
      ],
      "rows": [
        [
          "Peak factor",
          "$\\frac{\\text{peak value}}{\\text{rms value}}$",
          "$\\frac{I_0}{I_{rms}}=\\sqrt2=1.414$"
        ],
        [
          "Form factor",
          "$\\frac{\\text{rms value}}{\\text{average value over half-cycle}}$",
          "$\\frac{I_{rms}}{I_{avg}}=1.11$"
        ]
      ]
    },
    {
      "kind": "example",
      "prompt": "An alternating voltage is given by $V=140\\sin(314t)$ and is connected across a 50 Ω resistor. Find the rms current.",
      "steps": [
        "Compare with $V=V_0\\sin\\omega t$: $V_0=140$ V.",
        "$V_{rms}=V_0/\\sqrt2=0.707\\times140=98.98$ V.",
        "For a pure resistor, $I_{rms}=V_{rms}/R=98.98/50$ A."
      ],
      "answer": "$I_{rms}=1.98$ A."
    },
    {
      "kind": "theory",
      "heading": "Purely resistive AC circuit",
      "paragraphs": [
        "A purely resistive AC circuit contains only resistance. Voltage and current are in the same phase, so the phase angle is zero and the power factor is one."
      ],
      "list": [
        "Voltage: $V=V_0\\sin\\omega t$",
        "Current: $I=I_0\\sin\\omega t$",
        "Current amplitude: $I_0=V_0/R$",
        "Average power is maximum because $\\cos\\phi=1$."
      ]
    },
    {
      "kind": "theory",
      "heading": "Purely inductive AC circuit",
      "paragraphs": [
        "A pure inductor opposes change in current. In an ideal inductive circuit, current lags the voltage by $\\pi/2$ or 90° and the average power over a full cycle is zero."
      ],
      "list": [
        "Voltage: $V=V_0\\sin\\omega t$",
        "Current: $I=I_0\\sin(\\omega t-\\pi/2)$",
        "Inductive reactance: $X_L=\\omega L=2\\pi fL$",
        "$I_0=V_0/X_L$",
        "Power factor: $\\cos90^\\circ=0$."
      ]
    },
    {
      "kind": "theory",
      "heading": "Purely capacitive AC circuit",
      "paragraphs": [
        "A capacitor alternately stores and releases energy in its electric field. In a pure capacitive circuit, current leads the voltage by $\\pi/2$ or 90° and the average power over a full cycle is zero."
      ],
      "list": [
        "Voltage: $V=V_0\\sin\\omega t$",
        "Current: $I=I_0\\sin(\\omega t+\\pi/2)$",
        "Capacitive reactance: $X_C=\\frac{1}{\\omega C}=\\frac{1}{2\\pi fC}$",
        "$I_0=V_0/X_C$",
        "As frequency increases, $X_C$ decreases."
      ]
    },
    {
      "kind": "comparison",
      "heading": "Phase memory rule",
      "left": {
        "title": "Inductor",
        "items": [
          "Current lags voltage by 90°.",
          "$X_L$ increases with frequency.",
          "Mnemonic: L for lag."
        ]
      },
      "right": {
        "title": "Capacitor",
        "items": [
          "Current leads voltage by 90°.",
          "$X_C$ decreases with frequency.",
          "Capacitor can pass rapidly changing AC more easily."
        ]
      }
    },
    {
      "kind": "table",
      "heading": "R, L and C comparison",
      "headers": [
        "Circuit",
        "Reactance/impedance",
        "Phase relation",
        "Power factor",
        "Average power"
      ],
      "rows": [
        [
          "Pure R",
          "$Z=R$",
          "$V$ and $I$ in phase",
          "1",
          "Maximum"
        ],
        [
          "Pure L",
          "$Z=X_L=\\omega L$",
          "$I$ lags $V$ by 90°",
          "0",
          "Zero"
        ],
        [
          "Pure C",
          "$Z=X_C=1/\\omega C$",
          "$I$ leads $V$ by 90°",
          "0",
          "Zero"
        ]
      ]
    },
    {
      "kind": "theory",
      "heading": "Series LCR circuit",
      "paragraphs": [
        "A series LCR circuit contains a resistor, inductor and capacitor in series with an AC source. The same current passes through all three elements, but the voltages across R, L and C are not in the same phase."
      ],
      "list": [
        "Resistance voltage $V_R=IR$ is in phase with current.",
        "Inductor voltage $V_L=IX_L$ leads current by 90°.",
        "Capacitor voltage $V_C=IX_C$ lags current by 90°.",
        "The net reactive voltage is $V_L-V_C$."
      ]
    },
    {
      "kind": "formula",
      "latex": "Z=\\sqrt{R^2+(X_L-X_C)^2}=\\sqrt{R^2+\\left(\\omega L-\\frac{1}{\\omega C}\\right)^2}",
      "caption": "Impedance of a series LCR circuit."
    },
    {
      "kind": "formula",
      "latex": "\\tan\\phi=\\frac{X_L-X_C}{R},\\qquad I_{rms}=\\frac{V_{rms}}{Z}",
      "caption": "Phase angle and current in a series LCR circuit."
    },
    {
      "kind": "theory",
      "heading": "Predominantly inductive or capacitive",
      "paragraphs": [
        "The sign of $X_L-X_C$ tells whether the circuit behaves more like an inductor or a capacitor."
      ],
      "list": [
        "If $X_L>X_C$, the circuit is predominantly inductive and current lags voltage.",
        "If $X_C>X_L$, the circuit is predominantly capacitive and current leads voltage.",
        "If $X_L=X_C$, the circuit is at resonance."
      ]
    },
    {
      "kind": "theory",
      "heading": "Resonance in series LCR circuit",
      "paragraphs": [
        "Resonance occurs when inductive reactance equals capacitive reactance. The impedance becomes minimum and equal to R, current becomes maximum, power factor becomes one and maximum power is dissipated in the resistor."
      ],
      "list": [
        "At resonance: $X_L=X_C$.",
        "$\\omega_0L=1/(\\omega_0C)$.",
        "$\\omega_0=1/\\sqrt{LC}$.",
        "$f_0=1/(2\\pi\\sqrt{LC})$.",
        "At resonance, voltages across L and C cancel in the supply-voltage phasor even though each may be large."
      ]
    },
    {
      "kind": "formula",
      "latex": "f_0=\\frac{1}{2\\pi\\sqrt{LC}}",
      "caption": "Resonant frequency of a series LCR circuit."
    },
    {
      "kind": "theory",
      "heading": "Average power and power factor",
      "paragraphs": [
        "Average power in an AC circuit depends on voltage, current and the cosine of the phase angle between them. The quantity $\\cos\\phi$ is called the power factor."
      ],
      "list": [
        "$P=V_{rms}I_{rms}\\cos\\phi$",
        "In a pure resistor, $\\phi=0$, so power is maximum.",
        "In a pure inductor or capacitor, $\\phi=90°$, so average power is zero.",
        "In an LCR circuit, power is dissipated only in the resistance."
      ]
    },
    {
      "kind": "callout",
      "variant": "definition",
      "title": "Wattless current",
      "body": "Current in a purely inductive or purely capacitive AC circuit is called wattless current because the average power consumed over a complete cycle is zero, even though current flows."
    },
    {
      "kind": "example",
      "prompt": "A series LCR circuit has $R=300Ω$, $L=1H$, $C=20µF$ and supply frequency $f=50/π$ Hz. Find the impedance.",
      "steps": [
        "$X_L=2πfL=2π(50/π)(1)=100Ω$.",
        "$X_C=1/(2πfC)=1/[2π(50/π)(20×10^{-6})]=500Ω$.",
        "$Z=\\sqrt{R^2+(X_C-X_L)^2}=\\sqrt{300^2+400^2}$ Ω."
      ],
      "answer": "$Z=500Ω$."
    },
    {
      "kind": "theory",
      "heading": "Transformer",
      "paragraphs": [
        "A transformer converts AC voltage from one value to another by mutual induction. It has a primary coil, secondary coil and usually a soft-iron laminated core. Transformers work only with changing current, so they work with AC and not steady DC."
      ],
      "list": [
        "Step-up transformer: secondary turns greater than primary turns; voltage increases and current decreases.",
        "Step-down transformer: secondary turns fewer than primary turns; voltage decreases and current increases.",
        "For an ideal transformer, input power equals output power."
      ]
    },
    {
      "kind": "formula",
      "latex": "\\frac{E_s}{E_p}=\\frac{N_s}{N_p},\\qquad \\frac{I_p}{I_s}=\\frac{N_s}{N_p}",
      "caption": "Ideal transformer voltage, current and turns relation."
    },
    {
      "kind": "formula",
      "latex": "\\eta=\\frac{\\text{output power}}{\\text{input power}}=\\frac{E_sI_s}{E_pI_p}",
      "caption": "Transformer efficiency."
    },
    {
      "kind": "theory",
      "heading": "Energy losses in transformers",
      "paragraphs": [
        "Real transformers are not 100% efficient because some input energy is converted into heat or lost through imperfect magnetic coupling."
      ],
      "list": [
        "Resistance of windings causes copper loss.",
        "Flux leakage means not all magnetic flux links both coils.",
        "Eddy currents are reduced by laminating the iron core.",
        "Hysteresis loss occurs due to repeated magnetisation and demagnetisation of the core.",
        "Thick copper wire reduces resistance loss in windings."
      ]
    },
    {
      "kind": "example",
      "prompt": "A step-down transformer converts 11000 V to 220 V. The primary has 6000 turns and efficiency is 60%. If output power is 9 kW, find input power.",
      "steps": [
        "Efficiency $η=P_o/P_i$.",
        "$0.60=9\\,\\text{kW}/P_i$.",
        "$P_i=9/0.60$ kW."
      ],
      "answer": "Input power = 15 kW."
    },
    {
      "kind": "theory",
      "heading": "Power transmission idea",
      "paragraphs": [
        "Large-scale electrical energy is transmitted at high voltage to reduce current. Since line loss is $I^2R$, reducing current greatly reduces heating loss in transmission wires. This is why step-up transformers are used near power stations and step-down transformers are used near consumers."
      ]
    },
    {
      "kind": "theory",
      "heading": "AC generator",
      "paragraphs": [
        "An AC generator converts mechanical energy into electrical energy by electromagnetic induction. A coil rotates in a magnetic field; the magnetic flux linked with the coil changes, inducing an alternating emf."
      ],
      "list": [
        "Rotor coil: rotating part of the generator.",
        "Stator: stationary magnetic-field system.",
        "Slip rings and carbon brushes maintain electrical connection while allowing rotation.",
        "If $N$ is number of turns, $B$ magnetic field, $A$ area and $ω$ angular speed, the flux is $Φ=NBA\\cosωt$."
      ]
    },
    {
      "kind": "formula",
      "latex": "e=-\\frac{d\\Phi}{dt}=NBA\\omega\\sin\\omega t=E_0\\sin\\omega t",
      "caption": "Instantaneous emf generated by an AC generator."
    },
    {
      "kind": "mistakes",
      "items": [
        {
          "wrong": "Using average value over a complete AC cycle as a non-zero value.",
          "right": "For a complete sinusoidal cycle, average current/voltage is zero; use half-cycle average when asked for AC average value."
        },
        {
          "wrong": "Thinking rms value means maximum value.",
          "right": "For sinusoidal AC, $V_{rms}=V_0/\\sqrt2$, so rms is smaller than peak."
        },
        {
          "wrong": "Adding $V_R$, $V_L$ and $V_C$ like ordinary numbers in LCR circuits.",
          "right": "They are phasors; use $V=\\sqrt{V_R^2+(V_L-V_C)^2}$."
        },
        {
          "wrong": "Saying current is zero in wattless current.",
          "right": "Current flows, but average power over one cycle is zero."
        },
        {
          "wrong": "Forgetting to convert rpm into rad/s for AC generator problems.",
          "right": "Use $\\omega=(\\text{rpm}/60)\\times2\\pi$."
        }
      ]
    },
    {
      "kind": "practice",
      "heading": "Practice Exercise — Multiple Choice Questions (Q1–Q34)",
      "questions": [
        {
          "prompt": "The sum of average current values over one complete cycle is:",
          "options": [
            "negative",
            "positive",
            "zero",
            "Both a and b"
          ],
          "answer": 2,
          "explanation": "The average current over a full sinusoidal cycle is zero."
        },
        {
          "prompt": "A voltage signal is $v=V_0$ for $0≤t≤T/2$ and $v=0$ for $T/2≤t≤T$. Its rms value is:",
          "options": [
            "$V_0/\\sqrt2$",
            "$V_0$",
            "$V_0/2$",
            "$\\sqrt2V_0$"
          ],
          "answer": 0,
          "explanation": "For half-cycle constant pulse, $V_{rms}=V_0/\\sqrt2$."
        },
        {
          "prompt": "For $V=140\\sin314t$ across $50Ω$, rms current is:",
          "options": [
            "1.98 A",
            "5.63 A",
            "8.43 A",
            "2.39 A"
          ],
          "answer": 0,
          "explanation": "$V_{rms}=0.707(140)$ V and $I=V/R=1.98$ A."
        },
        {
          "prompt": "If rms current in a 50 Hz AC circuit is 5 A, current after $1/300$ s from zero is:",
          "options": [
            "$5\\sqrt2$ A",
            "$5\\sqrt3/2$ A",
            "$5/6$ A",
            "$5/\\sqrt2$ A"
          ],
          "answer": 1,
          "explanation": "Use $I_0=5\\sqrt2$ and $i=I_0\\sin(2πft)$."
        },
        {
          "prompt": "If rms current is 15 A and $t=1/600$ s after zero in a 50 Hz circuit, current is:",
          "options": [
            "$15/\\sqrt2$ A",
            "$15\\sqrt2$ A",
            "$\\sqrt2/15$ A",
            "8 A"
          ],
          "answer": 0,
          "explanation": "Substitute in $i=I_0\\sin2πft$."
        },
        {
          "prompt": "The equation of AC is $I=100\\sin314t$. Frequency is:",
          "options": [
            "314 Hz",
            "100 Hz",
            "50 Hz",
            "150 Hz"
          ],
          "answer": 2,
          "explanation": "$ω=314=2πf$, so $f≈50$ Hz."
        },
        {
          "prompt": "An AC mains voltmeter showing 220 V reads:",
          "options": [
            "DC voltage",
            "maximum voltage",
            "rms value and is calibrated to rms",
            "mechanical defect"
          ],
          "answer": 2,
          "explanation": "AC meters generally indicate rms value."
        },
        {
          "prompt": "A phasor is a:",
          "options": [
            "scalar quantity",
            "vector quantity",
            "tensor quantity",
            "none of these"
          ],
          "answer": 0,
          "explanation": "Phasors rotate like vectors but represent sinusoidal quantities, so the expected answer is scalar quantity in this question set."
        },
        {
          "prompt": "In a purely resistive AC circuit, current:",
          "options": [
            "is in phase with emf",
            "leads by π",
            "leads by π/2",
            "lags by π/4"
          ],
          "answer": 0,
          "explanation": "In pure R, phase difference is zero."
        },
        {
          "prompt": "Graph of inductive reactance $X_L$ with frequency is:",
          "options": [
            "constant",
            "straight line increasing",
            "vertical line",
            "decreasing line"
          ],
          "answer": 1,
          "explanation": "$X_L=2πfL$, directly proportional to f."
        },
        {
          "prompt": "Graph of capacitive reactance $X_C$ with frequency is:",
          "options": [
            "inverted arch",
            "increasing curve",
            "decreasing hyperbola",
            "triangle"
          ],
          "answer": 2,
          "explanation": "$X_C=1/(2πfC)$ decreases with f."
        },
        {
          "prompt": "When 220 V AC is applied to a capacitor, which statement is correct?",
          "options": [
            "maximum voltage is 220 V",
            "current is in phase",
            "charge is not in phase with voltage",
            "power delivered per cycle is zero"
          ],
          "answer": 3,
          "explanation": "Average power in ideal capacitor is zero."
        },
        {
          "prompt": "A 20 V AC source is applied to a resistor and coil in series. If voltage across R is 12 V, voltage across coil is:",
          "options": [
            "16 V",
            "10 V",
            "8 V",
            "6 V"
          ],
          "answer": 0,
          "explanation": "Use phasor relation $V^2=V_R^2+V_L^2$."
        },
        {
          "prompt": "If $E=E_0\\sinωt$ and $I=I_0\\sin(ωt+π/3)$, the circuit is:",
          "options": [
            "necessarily RL",
            "necessarily RC",
            "necessarily LCR",
            "RC or LCR"
          ],
          "answer": 3,
          "explanation": "Current leads voltage, so circuit may be capacitive: RC or LCR."
        },
        {
          "prompt": "Variable frequency source with capacitor and bulb: when frequency increases, bulb:",
          "options": [
            "glows dimmer",
            "glows brighter",
            "impedance unchanged",
            "total impedance increases"
          ],
          "answer": 1,
          "explanation": "As f increases, $X_C$ decreases and current increases."
        },
        {
          "prompt": "Iron-cored coil in series with bulb: removing iron piece makes brightness:",
          "options": [
            "decrease",
            "increase",
            "unchanged",
            "fluctuate"
          ],
          "answer": 1,
          "explanation": "Inductance decreases, opposition decreases and current increases."
        },
        {
          "prompt": "Impedance of series LCR circuit is:",
          "options": [
            "$R+X_L+X_C$",
            "$\\sqrt{1/X_C^2+1/X_L^2+R^2}$",
            "$\\sqrt{X_L^2-X_C^2+R^2}$",
            "$\\sqrt{R^2+(X_L-X_C)^2}$"
          ],
          "answer": 3,
          "explanation": "Use the phasor impedance formula."
        },
        {
          "prompt": "A 15Ω resistor, 80 mH inductor and capacitor are in series at 50 Hz. If voltage and current are in phase, capacitance is:",
          "options": [
            "100 µF",
            "127 µF",
            "142 µF",
            "160 µF"
          ],
          "answer": 1,
          "explanation": "At resonance, $C=1/ω^2L$."
        },
        {
          "prompt": "Voltages across R, L and C are 20 V, 15 V and 30 V. Resultant voltage is:",
          "options": [
            "5 V",
            "20 V",
            "25 V",
            "65 V"
          ],
          "answer": 2,
          "explanation": "$V=\\sqrt{V_R^2+(V_C-V_L)^2}=25$ V."
        },
        {
          "prompt": "For $L=1H$, $C=20µF$, $R=300Ω$, $f=50/π$ Hz, series LCR impedance is:",
          "options": [
            "200Ω",
            "100Ω",
            "300Ω",
            "500Ω"
          ],
          "answer": 3,
          "explanation": "$X_L=100Ω$, $X_C=500Ω$, so $Z=500Ω$."
        },
        {
          "prompt": "An LCR circuit is predominantly capacitive if:",
          "options": [
            "$X_L>X_C$",
            "$X_L<X_C$",
            "$X_L=X_C$",
            "none"
          ],
          "answer": 1,
          "explanation": "Capacitive behaviour means $X_C$ is greater."
        },
        {
          "prompt": "To reduce resonant frequency in LCR series circuit:",
          "options": [
            "reduce generator frequency",
            "add capacitor in parallel to first",
            "remove iron core",
            "remove dielectric"
          ],
          "answer": 1,
          "explanation": "Adding parallel capacitor increases C, reducing $f_0$."
        },
        {
          "prompt": "As source frequency is decreased gradually in series LCR, reactance of:",
          "options": [
            "both decrease",
            "inductor decreases and capacitor increases",
            "both increase",
            "inductor increases and capacitor decreases"
          ],
          "answer": 1,
          "explanation": "$X_L∝f$, $X_C∝1/f$."
        },
        {
          "prompt": "At resonance with $R=22Ω$ and 220 V supply, average power in one cycle is:",
          "options": [
            "2000 W",
            "2200 W",
            "2400 W",
            "2500 W"
          ],
          "answer": 1,
          "explanation": "At resonance $Z=R$, so $I=10$ A and $P=VI=2200$ W."
        },
        {
          "prompt": "Ratio of inductive to capacitive reactance is:",
          "options": [
            "$ω^2LC$",
            "$LC^2/ω^2$",
            "$LC/ω^2$",
            "$ω^2L$"
          ],
          "answer": 0,
          "explanation": "$X_L/X_C=ωL/(1/ωC)=ω^2LC$."
        },
        {
          "prompt": "A resonant LCR circuit with peak voltage 283 V, $R=3Ω$, $L=25.48mH$, $C=796µF$ has power dissipated:",
          "options": [
            "39.70 kW",
            "26.70 kW",
            "13.35 kW",
            "zero"
          ],
          "answer": 2,
          "explanation": "At resonance, current rms leads to $P=I^2R=13.35$ kW."
        },
        {
          "prompt": "If $E=E_0\\sinωt$ and $I=I_0\\sin(ωt+π/2)$, average power is:",
          "options": [
            "$E_{rms}I_{rms}$",
            "$E_0I_0$",
            "$E_0I_0/\\sqrt2$",
            "zero"
          ],
          "answer": 3,
          "explanation": "Phase difference is 90°, so $\\cosφ=0$."
        },
        {
          "prompt": "A transformer works on the principle of:",
          "options": [
            "self induction",
            "electrical inertia",
            "mutual induction",
            "magnetic effect of current"
          ],
          "answer": 2,
          "explanation": "Transformer action is mutual induction between coils."
        },
        {
          "prompt": "Output of a step-down transformer is 24 V with 12 W bulb. Peak current is:",
          "options": [
            "$1/\\sqrt2$ A",
            "$\\sqrt2$ A",
            "2 A",
            "$2\\sqrt2$ A"
          ],
          "answer": 0,
          "explanation": "$I_{rms}=P/V=0.5$ A and $I_0=\\sqrt2 I_{rms}=1/\\sqrt2$ A."
        },
        {
          "prompt": "A 60 W load is connected to secondary of ideal transformer. Primary is 220 V and secondary current is 0.54 A. Primary current is:",
          "options": [
            "0.27 mA",
            "2.7 A",
            "0.27 A",
            "10 A"
          ],
          "answer": 2,
          "explanation": "Ideal input power equals output power."
        },
        {
          "prompt": "Step-down transformer converts 11000 V to 220 V, primary 6000 turns, efficiency 60%, output 9 kW. Input power is:",
          "options": [
            "11 kW",
            "12 kW",
            "14 kW",
            "15 kW"
          ],
          "answer": 3,
          "explanation": "$P_i=P_o/η=9/0.6=15$ kW."
        },
        {
          "prompt": "Which is not a cause of transformer power loss?",
          "options": [
            "eddy currents",
            "electric flux sharing not properly done",
            "humming sound",
            "very thick copper primary wire"
          ],
          "answer": 3,
          "explanation": "Thick copper wire reduces resistance loss."
        },
        {
          "prompt": "Large-scale transmission uses transformers. Generator voltage is stepped up because of:",
          "options": [
            "reduction of current",
            "reduction of current and voltage",
            "power loss is cut down",
            "both a and c"
          ],
          "answer": 3,
          "explanation": "High voltage reduces current and hence $I^2R$ loss."
        },
        {
          "prompt": "AC generator works on the principle of:",
          "options": [
            "Lenz law",
            "energy conservation",
            "momentum conservation",
            "electromagnetic induction"
          ],
          "answer": 3,
          "explanation": "Changing flux induces emf. "
        }
      ]
    },
    {
      "kind": "table",
      "heading": "Practice Exercise — Assertion and Reason (Q35–Q43)",
      "headers": [
        "Q",
        "Assertion and reason focus",
        "Correct choice / key idea"
      ],
      "rows": [
        [
          "35",
          "Average value of AC over complete cycle is always zero; average value is defined over half-cycle.",
          "Both true; reason explains assertion."
        ],
        [
          "36",
          "AC is more dangerous than DC; frequency of AC is dangerous for human body.",
          "Both true; reason explains assertion."
        ],
        [
          "37",
          "In pure L or C circuit current is wattless; no power dissipated though current flows.",
          "Both true; reason explains assertion."
        ],
        [
          "38",
          "If $X_C<X_L$ in LCR circuit, emf leads current; phase angle is between voltage and current.",
          "Both true; reason explains assertion."
        ],
        [
          "39",
          "Bulb in series with capacitor gets brighter as capacitance increases; $X_C$ decreases with capacitance.",
          "Both true; reason explains assertion."
        ],
        [
          "40",
          "Step-down transformer increases current; transformer obeys conservation of energy.",
          "Both true; reason explains assertion."
        ],
        [
          "41",
          "Core is laminated to increase eddy currents.",
          "False; lamination reduces eddy currents."
        ],
        [
          "42",
          "Step-up transformer cannot be used as step-down; transformer works only in one direction.",
          "False; winding used as primary decides action."
        ],
        [
          "43",
          "AC generator works on self induction; flux during rotation is always zero.",
          "False; generator works on electromagnetic induction and changing flux."
        ]
      ]
    },
    {
      "kind": "table",
      "heading": "Practice Exercise — Fill in the Blanks (Q44–Q51)",
      "headers": [
        "Q",
        "Question",
        "Answer"
      ],
      "rows": [
        [
          "44",
          "The maximum value of ______ is called peak value or amplitude.",
          "alternating current or voltage"
        ],
        [
          "45",
          "Peak factor = ______.",
          "peak value / rms value"
        ],
        [
          "46",
          "The opposing nature of ______ to the flow of current is called inductive reactance.",
          "inductor"
        ],
        [
          "47",
          "In an AC circuit, average power consumed by a pure capacitor during one cycle is ______.",
          "zero"
        ],
        [
          "48",
          "Capacitive reactance is inversely proportional to ______ and frequency of the current.",
          "capacitance"
        ],
        [
          "49",
          "$Z=\\sqrt{R^2+______}$.",
          "$(X_L-X_C)^2$"
        ],
        [
          "50",
          "If power loss is zero, the current is called ______.",
          "wattless current"
        ],
        [
          "51",
          "Stator is a ______ part of an AC alternator.",
          "stationary"
        ]
      ]
    },
    {
      "kind": "theory",
      "heading": "Case Study 1 — Pure capacitive circuit",
      "paragraphs": [
        "A source $E=E_0\\sinωt$ is connected to capacitor C. The current is $I=(E_0/(1/ωC))\\sin(ωt+π/2)$ and $X_C=1/ωC$.",
        "Key answers: unit of capacitive reactance is ohm; for 5 µF and $10^6$ Hz, $X_C≈0.032Ω$; in a capacitive circuit resistance to AC is offered by the capacitor; current leads emf by 90°; a 1 µF capacitor joined to 200 V, 50 Hz gives rms current $6.28×10^{-2}$ A."
      ]
    },
    {
      "kind": "theory",
      "heading": "Case Study 2 — Transformers in transmission",
      "paragraphs": [
        "Power from the generator is stepped up for long-distance transmission and stepped down near consumers. Transformer action changes voltage and current but ideally not power.",
        "Key answers: a step-down transformer decreases AC voltage; if secondary turns are greater than primary turns it is step-up; stepping up voltage reduces current and hence cuts $I^2R$ loss; for 2300 V to 230 V with 4000 primary turns, secondary turns are 400."
      ]
    },
    {
      "kind": "theory",
      "heading": "Case Study 3 — Town power supply and line loss",
      "paragraphs": [
        "A town demands 800 kW at 220 V, is 15 km from a 440 V plant, and wire resistance is 0.5 Ω per km. The town gets power through a 4000–220 V step-down transformer.",
        "Key answers: total line resistance is 15 Ω; line power loss is 600 kW; plant must supply 1400 kW; voltage drop is 3000 V; total transmitted voltage from plant is 7000 V."
      ]
    },
    {
      "kind": "theory",
      "heading": "Case Study 4 — Ideal LC circuit",
      "paragraphs": [
        "An LC circuit with a 20 mH inductor and 50 µF capacitor is initially charged to 10 mC. It is an ideal resonant circuit with negligible resistance.",
        "Key answers: initial energy $=\\frac12Q^2/C=1$ J; natural frequency $f=1/(2π√{LC})≈159.24$ Hz; time period $T≈6.28$ ms; electrical energy is fully stored in capacitor at $t=0,T/2,3T/2,...$; magnetic energy is maximum at $T/4,3T/4,...$; $X_L≈20Ω$ at natural frequency."
      ]
    },
    {
      "kind": "theory",
      "heading": "Case Study 5 — Resonant LCR circuit",
      "paragraphs": [
        "At resonance in a series LCR circuit, $X_L=X_C$ and impedance equals R. Current is maximum, power factor is 1 and maximum power is dissipated in the resistor.",
        "For $L=0.12$ H, $C=480$ nF, $R=23Ω$ and 230 V source, resonant angular frequency is about 4166.67 rad/s, resonant frequency is about 663.48 Hz, peak source voltage is 325.22 V, maximum current is about 14.14 A and maximum power is about 2299.3 W."
      ]
    },
    {
      "kind": "table",
      "heading": "Very Short Answer Questions",
      "headers": [
        "Q",
        "Question",
        "Answer"
      ],
      "rows": [
        [
          "1",
          "Why is AC voltage preferred over DC voltage?",
          "AC can be stepped up/down using transformers; high-voltage transmission reduces loss."
        ],
        [
          "2",
          "Define capacitive reactance and its SI unit.",
          "Opposition offered by a capacitor to AC: $X_C=1/ωC=1/(2πfC)$; unit ohm."
        ],
        [
          "3",
          "Plot variation of capacitive reactance with frequency.",
          "$X_C∝1/f$, so the graph is a decreasing rectangular hyperbola."
        ],
        [
          "4",
          "Define wattless current.",
          "Current flowing with zero average power consumption over a complete cycle."
        ],
        [
          "5",
          "In series LCR, if $V_L=V_C≠V_R$, what is power factor?",
          "At resonance, $Z=R$ and power factor is 1."
        ],
        [
          "6",
          "If power factor is 0.5, what is phase difference?",
          "$\\phi=\\cos^{-1}(0.5)=60°$."
        ],
        [
          "7",
          "Why is transformer core laminated?",
          "To reduce eddy currents and increase efficiency."
        ],
        [
          "8",
          "Two properties for transformer core material.",
          "Low retentivity/coercivity and low hysteresis loss or high permeability."
        ],
        [
          "9",
          "Name two main parts of an AC generator.",
          "Stator and rotor."
        ],
        [
          "10",
          "On what principle does a generator work?",
          "Faraday's law of electromagnetic induction."
        ]
      ]
    },
    {
      "kind": "table",
      "heading": "Short Answer Type-I / Type-II Questions",
      "headers": [
        "Q",
        "Question focus",
        "Solution idea"
      ],
      "rows": [
        [
          "1",
          "Given $V=200\\sin300t$ and $I=8\\cos300t$, decide whether circuit is capacitive or inductive.",
          "Rewrite $I=8\\sin(300t+π/2)$, so current leads voltage; circuit is capacitive."
        ],
        [
          "2",
          "Lamp in series with inductor: effect of inserting iron rod.",
          "Inductance increases, $X_L$ increases, current decreases; bulb brightness decreases."
        ],
        [
          "3",
          "Bulb with variable capacitor: effect of reducing capacitance and reducing frequency.",
          "Both increase $X_C=1/(2πfC)$, reduce current and decrease brightness."
        ],
        [
          "4",
          "Parallel R and L arms with identical bulbs; which lights earlier and final brightness?",
          "Resistive branch bulb glows earlier; after steady state/self-induction effect reduces, both may become equally bright if currents become equal."
        ],
        [
          "5",
          "Compare power factor before and after adding capacitor in series to make $X_L=X_C$.",
          "Before: $P_1=R/Z$; after resonance $P_2=1$; in the given problem $P_1/P_2=1/√2$."
        ],
        [
          "6",
          "Can voltage across L or C be greater than supply in series LCR?",
          "Yes. $V_L$ and $V_C$ are phase-opposed and can be individually large; phasor sum equals supply."
        ],
        [
          "7",
          "Define power factor and conditions for maximum/minimum.",
          "$\\cosφ=R/Z$. Maximum = 1 for pure R or resonance; minimum = 0 for pure L or pure C."
        ],
        [
          "8",
          "Transformer: 2200 V primary, 3000 primary turns, output 220 V. Find secondary turns.",
          "$V_s/V_p=N_s/N_p$, so $N_s=300$ turns."
        ],
        [
          "9",
          "AC generator output $E=170\\sin377t$. Find frequency.",
          "$ω=377=2πf$, so $f≈60$ Hz."
        ]
      ]
    },
    {
      "kind": "table",
      "heading": "Long Answer Questions — Topics to Master",
      "headers": [
        "Q",
        "Task",
        "Important result"
      ],
      "rows": [
        [
          "1",
          "Device with $I=I_0\\sin(ωt+π/2)$: identify device, graphs, reactance variation and phasor.",
          "Device is capacitor; $X_C=1/(2πfC)$; current leads voltage by 90°."
        ],
        [
          "2",
          "Draw $X_L$ and $X_C$ vs frequency; draw series LCR phasor; identify devices X and Y from phase data.",
          "$X_L$ increases linearly; $X_C$ decreases hyperbolically; phasor uses $V_R$, $V_L$ and $V_C$."
        ],
        [
          "3",
          "Series LCR: derive impedance and current; resonance phase; inductor connected to DC and AC.",
          "$Z=√{R^2+(X_L-X_C)^2}$. At resonance $V_L$ and $V_C$ differ by 180°; in DC current is larger because only R remains after steady state."
        ],
        [
          "4",
          "Use phasor diagram to derive impedance and plot current-frequency curve for two resistances.",
          "Current peak occurs at resonance; lower resistance gives sharper and higher resonance peak."
        ],
        [
          "5",
          "Explain transformer working with labelled diagram; explain laminated core and thick copper wire; state AC generator principle and derive emf.",
          "Transformer works on mutual induction; generator emf $e=NBAω\\sinωt$."
        ],
        [
          "6",
          "Step-up transformer power transmission problem for a town.",
          "Use transformer ratio and line loss $I^2R$; for the stated 20 km, 0.5Ω/km and 1200 kW problem, the line loss is 1800 kW."
        ],
        [
          "7",
          "AC generator labelled diagram and induced emf; numerical coil problem.",
          "Use $E_0=NBAω$ and $I_0=E_0/R$."
        ]
      ]
    },
    {
      "kind": "gradedQuiz",
      "heading": "Chapter Test — Alternating Current",
      "passMark": 60,
      "questions": [
        {
          "type": "mc",
          "marks": 1,
          "prompt": "In the case of an inductor:",
          "options": [
            "voltage lags current by π/2",
            "voltage leads current by π/2",
            "voltage leads by π/3",
            "voltage leads by π/4"
          ],
          "answer": 1,
          "explanation": "For an ideal inductor, voltage leads current by 90°."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "When power is drawn from secondary coil of transformer, dynamic resistance:",
          "options": [
            "increases",
            "decreases",
            "remains unchanged",
            "changes erratically"
          ],
          "answer": 1,
          "explanation": "The effective/dynamic resistance seen changes so that power transfer occurs."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Assertion: inductive reactance limits current in pure inductive circuit. Reason: inductive reactance is independent of frequency.",
          "options": [
            "Both true and reason explains",
            "Both true but reason not explanation",
            "Assertion true, reason false",
            "Both false"
          ],
          "answer": 2,
          "explanation": "$X_L=2πfL$, so reason is false."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Assertion: laminated core is used to increase eddy currents. Reason: efficiency increases with eddy currents.",
          "options": [
            "Both true and reason explains",
            "Both true but not explanation",
            "Assertion true, reason false",
            "Both false"
          ],
          "answer": 3,
          "explanation": "Lamination reduces eddy currents; eddy currents reduce efficiency."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Projection of phasor on any axis always represents the ______ value of a quantity.",
          "options": [
            "average",
            "instantaneous",
            "rms",
            "peak"
          ],
          "answer": 1,
          "explanation": "Projection gives instantaneous value."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "An alternator is based on the principle of:",
          "options": [
            "Coulomb's law",
            "Joule heating",
            "electromagnetic induction",
            "thermionic emission"
          ],
          "answer": 2,
          "explanation": "Changing magnetic flux produces alternating emf."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "In an ideal transformer, which quantity remains constant?",
          "options": [
            "current",
            "voltage",
            "power",
            "all of these"
          ],
          "answer": 2,
          "explanation": "Ideal transformer conserves power."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Transformer is used to:",
          "options": [
            "convert AC to DC",
            "convert DC to AC",
            "obtain desired DC power",
            "obtain desired AC voltage and current"
          ],
          "answer": 3,
          "explanation": "Transformer changes AC voltage/current levels."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Primary turns 20, secondary turns 10, primary voltage 220 V. Secondary voltage is:",
          "options": [
            "100 AC V",
            "120 AC V",
            "110 AC V",
            "220 AC V"
          ],
          "answer": 2,
          "explanation": "$V_s/V_p=N_s/N_p=10/20$, so $V_s=110$ V."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Primary turns are four times secondary turns. Secondary voltage is:",
          "options": [
            "about four times primary",
            "about half primary",
            "about two times primary",
            "about one fourth primary"
          ],
          "answer": 3,
          "explanation": "$V_s/V_p=N_s/N_p=1/4$."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Transformer lights 100 W–110 V lamp from 220 V mains. Main current is 0.5 A. Efficiency is:",
          "options": [
            "95%",
            "99%",
            "90%",
            "96%"
          ],
          "answer": 2,
          "explanation": "Output power 100 W; input $220×0.5=110$ W; efficiency≈90%."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "At resonance in LCR, what happens to impedance?",
          "options": [
            "maximum",
            "minimum and equals R",
            "zero always",
            "infinite"
          ],
          "answer": 1,
          "explanation": "At resonance $X_L=X_C$, so $Z=R$."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Which machine converts mechanical energy into electrical energy?",
          "options": [
            "transformer",
            "AC generator",
            "rectifier",
            "capacitor"
          ],
          "answer": 1,
          "explanation": "Generator converts mechanical work into electrical energy."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Power factor maximum condition is:",
          "options": [
            "pure L",
            "pure C",
            "resonance or pure R",
            "open circuit"
          ],
          "answer": 2,
          "explanation": "$\\cosφ=1$ when phase angle is zero."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "Low power factor causes:",
          "options": [
            "smaller current for same power",
            "large current and more line loss",
            "no line loss",
            "zero voltage"
          ],
          "answer": 1,
          "explanation": "$P=VI\\cosφ$; low $\\cosφ$ needs larger current."
        },
        {
          "type": "mc",
          "marks": 1,
          "prompt": "AC generator coil has 100 turns, area 0.5 m², resistance 100Ω, B=0.8T and 60 rad/s. Maximum emf is:",
          "options": [
            "240 V",
            "1200 V",
            "2400 V",
            "600 V"
          ],
          "answer": 2,
          "explanation": "$E_0=NBAω=100×0.8×0.5×60=2400$ V."
        }
      ]
    },
    {
      "kind": "flashcards",
      "cards": [
        {
          "front": "AC",
          "back": "Current whose magnitude and direction vary periodically with time."
        },
        {
          "front": "RMS value",
          "back": "DC equivalent value that produces the same heating effect in a resistor."
        },
        {
          "front": "$X_L$",
          "back": "Inductive reactance: $X_L=ωL=2πfL$."
        },
        {
          "front": "$X_C$",
          "back": "Capacitive reactance: $X_C=1/(ωC)=1/(2πfC)$."
        },
        {
          "front": "Resonance",
          "back": "Condition $X_L=X_C$, so $Z=R$ and current is maximum."
        },
        {
          "front": "Power factor",
          "back": "$\\cosφ=R/Z$ in a series LCR circuit."
        },
        {
          "front": "Transformer principle",
          "back": "Mutual induction."
        },
        {
          "front": "AC generator principle",
          "back": "Electromagnetic induction due to changing magnetic flux."
        }
      ]
    },
    {
      "kind": "summary",
      "points": [
        "Sinusoidal AC can be written as $I=I_0\\sinωt$ or $V=V_0\\sinωt$.",
        "$I_{rms}=I_0/√2$ and $V_{rms}=V_0/√2$ for sinusoidal AC.",
        "In pure R, voltage and current are in phase; in pure L, current lags by 90°; in pure C, current leads by 90°.",
        "For series LCR, $Z=√{R^2+(X_L-X_C)^2}$ and $tanφ=(X_L-X_C)/R$.",
        "Resonance occurs when $X_L=X_C$ and $f_0=1/(2π√{LC})$.",
        "AC power is $P=V_{rms}I_{rms}cosφ$.",
        "Transformers use mutual induction and obey $E_s/E_p=N_s/N_p$ ideally.",
        "AC generators produce $e=NBAωsinωt$ by electromagnetic induction."
      ]
    },
    {
      "kind": "completion",
      "steps": [
        {
          "key": "notes",
          "label": "Studied AC definitions and formulas"
        },
        {
          "key": "practice",
          "label": "Completed practice exercise questions"
        },
        {
          "key": "chapterTest",
          "label": "Passed the chapter test"
        }
      ],
      "requireQuizPass": true
    }
  ]
};
