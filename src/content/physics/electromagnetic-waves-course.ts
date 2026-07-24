import type { LessonContent } from "@/lib/lesson-content-types";

const spectrumRows = [
  ["Radio", "> about 1 m", "accelerating charges in antennas and astronomical sources", "receiver aerials, radio telescopes", "broadcasting, communication, navigation, astronomy"],
  ["Microwave", "about 1 mm to 1 m", "magnetrons, klystrons, microwave antennas", "antennas and semiconductor detectors", "radar, satellites, mobile links, Wi-Fi, heating"],
  ["Infrared", "about 700 nm to 1 mm", "warm bodies, molecules, LEDs and lasers", "thermopiles, bolometers, photodiodes", "thermal imaging, heaters, remote controls, fibre links"],
  ["Visible", "about 400–700 nm", "the Sun, lamps, LEDs, lasers and hot matter", "eyes, cameras and photodiodes", "vision, lighting, photography, optical instruments"],
  ["Ultraviolet", "about 10–400 nm", "the Sun, arcs, UV lamps and LEDs", "photocells and fluorescent screens", "sterilization, fluorescence, security marking"],
  ["X-rays", "about 0.01–10 nm", "fast electrons striking targets; inner-shell transitions", "digital panels, films, scintillators", "medical imaging, crystallography, inspection"],
  ["Gamma rays", "shorter than about 0.01 nm", "nuclear transitions, radioactive decay, cosmic events", "scintillators and radiation counters", "radiotherapy, sterilization, tracers, astronomy"],
];

export const electromagneticWavesCourse: LessonContent[] = [
  {
    subjectSlug: "physics",
    chapterSlug: "electromagnetic-waves",
    lessonSlug: "maxwell-s-equations-and-electromagnetic-waves",
    title: "Maxwell's Equations and Electromagnetic Waves",
    objectives: [
      "Explain why Maxwell introduced displacement current and relate it to a changing electric flux.",
      "State the physical meaning of Maxwell's four equations in integral form.",
      "Explain how changing electric and magnetic fields sustain an electromagnetic wave.",
      "Use $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ and distinguish conduction current from displacement current.",
      "Solve derivation-style and numerical questions involving a charging capacitor.",
    ],
    sections: [
      {
        kind: "overview",
        paragraphs: [
          "Electromagnetic waves are not an extra idea added to electricity and magnetism; they emerge naturally from Maxwell's unified field equations. A changing magnetic field produces an electric field, and a changing electric field produces a magnetic field. Once created, this coupled disturbance can travel through empty space.",
          "This lesson begins with the problem Maxwell solved: Ampère's law seemed inconsistent around a charging capacitor. His displacement-current correction completed the symmetry of the field equations and led directly to the prediction that light is an electromagnetic wave.",
        ],
      },
      {
        kind: "theory",
        heading: "Prerequisites",
        paragraphs: [
          "You should know electric charge, current, electric field, magnetic field and magnetic flux. The existing Electromagnetic Induction chapter provides the essential Faraday-law background.",
        ],
      },
      {
        kind: "callout",
        variant: "definition",
        title: "Displacement current",
        body: "Displacement current is the magnetic-field-producing effect associated with a changing electric flux. In vacuum, $I_d=\\varepsilon_0\\,d\\Phi_E/dt$. It is not a stream of charges crossing the capacitor gap; it is the field contribution needed to make Ampère's law consistent.",
      },
      {
        kind: "formula",
        latex: "I_d=\\varepsilon_0\\frac{d\\Phi_E}{dt},\\qquad \\oint\\vec B\\cdot d\\vec l=\\mu_0 I_c+\\mu_0\\varepsilon_0\\frac{d\\Phi_E}{dt}",
        caption: "Maxwell's correction to Ampère's law. $I_c$ is conduction current and $I_d$ is displacement current.",
      },
      {
        kind: "comparison",
        heading: "Conduction and displacement current",
        left: {
          title: "Conduction current",
          items: [
            "Produced by actual motion of charge carriers through a conductor.",
            "Measured directly as charge flow per unit time, $I=dq/dt$.",
            "Occurs in wires, electrolytes and other conducting paths.",
          ],
        },
        right: {
          title: "Displacement current",
          items: [
            "Associated with a time-varying electric field or electric flux.",
            "Can exist in vacuum or dielectric between capacitor plates.",
            "Produces magnetic effects just as conduction current does.",
          ],
        },
      },
      {
        kind: "table",
        heading: "Maxwell's equations: physical meaning",
        headers: ["Equation", "Integral form", "Meaning"],
        rows: [
          ["Gauss's law for electricity", "$\\oint\\vec E\\cdot d\\vec A=Q_{enc}/\\varepsilon_0$", "Electric charge is the source or sink of electric flux."],
          ["Gauss's law for magnetism", "$\\oint\\vec B\\cdot d\\vec A=0$", "No isolated magnetic monopoles have been observed; magnetic field lines form closed loops."],
          ["Faraday's law", "$\\oint\\vec E\\cdot d\\vec l=-d\\Phi_B/dt$", "A changing magnetic flux creates a circulating electric field."],
          ["Ampère-Maxwell law", "$\\oint\\vec B\\cdot d\\vec l=\\mu_0I_c+\\mu_0\\varepsilon_0d\\Phi_E/dt$", "Current and changing electric flux create a circulating magnetic field."],
        ],
      },
      {
        kind: "imageGallery",
        heading: "How Maxwell's correction closes the field cycle",
        images: [
          {
            src: "/physics-recreated/em-waves/maxwell-field-cycle.svg",
            alt: "Diagram showing changing electric fields producing magnetic fields and changing magnetic fields producing electric fields.",
            caption: "Faraday's law and the Ampère-Maxwell law form a self-sustaining cycle. The wave travels while the fields remain perpendicular to one another.",
          },
          {
            src: "/physics-recreated/em-waves/charging-capacitor.svg",
            alt: "Charging capacitor with conduction current in wires and displacement current between plates.",
            caption: "The same magnetic circulation is obtained whether the chosen surface cuts the wire or spans the capacitor gap.",
          },
        ],
      },
      {
        kind: "theory",
        heading: "Why the original Ampère law was incomplete",
        paragraphs: [
          "For a steady current, the original law $\\oint\\vec B\\cdot d\\vec l=\\mu_0I$ works well. Around a charging capacitor, however, one surface bounded by the same loop cuts the wire and encloses conduction current, while another surface bulges between the plates and encloses no charge crossing it. Without a correction, the predicted magnetic field would depend on the imaginary surface chosen.",
          "Maxwell recognized that the electric field between the plates changes as the capacitor charges. Adding the term $\\mu_0\\varepsilon_0d\\Phi_E/dt$ makes the result independent of the surface and preserves charge conservation.",
        ],
      },
      {
        kind: "example",
        prompt: "A parallel-plate capacitor is charged by a current $I$. Show that the displacement current between the plates equals the conduction current in the wires.",
        steps: [
          "For plate area $A$, the electric field is $E=Q/(\\varepsilon_0A)$, neglecting edge effects.",
          "Electric flux is $\\Phi_E=EA=Q/\\varepsilon_0$.",
          "Differentiate: $d\\Phi_E/dt=(1/\\varepsilon_0)dQ/dt$.",
          "$I_d=\\varepsilon_0d\\Phi_E/dt=dQ/dt=I$.",
        ],
        answer: "The displacement current equals the charging conduction current: $I_d=I$.",
      },
      {
        kind: "example",
        prompt: "The electric flux through a surface changes at $2.5\\times10^{11}\ \text{N m}^2\text{/C per second}$. Find the displacement current.",
        steps: [
          "Use $I_d=\\varepsilon_0d\\Phi_E/dt$.",
          "Substitute $\\varepsilon_0=8.854\\times10^{-12}\ \text{F/m}$.",
          "$I_d=(8.854\\times10^{-12})(2.5\\times10^{11})$ A.",
        ],
        answer: "$I_d\\approx2.21$ A.",
      },
      {
        kind: "theory",
        heading: "Maxwell predicts the speed of light",
        paragraphs: [
          "Combining the source-free Maxwell equations produces a wave equation whose speed is $1/\\sqrt{\\mu_0\\varepsilon_0}$. Substituting the measured electrical constants gives approximately $3.00\\times10^8$ m/s, the known speed of light. This agreement was the decisive clue that light itself is electromagnetic radiation.",
        ],
      },
      {
        kind: "formula",
        latex: "c=\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}\\approx2.998\\times10^8\ \text{m s}^{-1}",
        caption: "Electromagnetic waves travel at this speed in vacuum.",
      },
      {
        kind: "history",
        paragraphs: [
          "James Clerk Maxwell published the electromagnetic theory of light in the nineteenth century. Heinrich Hertz later generated and detected radio waves in the laboratory, demonstrating reflection, refraction and interference and confirming Maxwell's prediction experimentally.",
        ],
      },
      {
        kind: "experiment",
        heading: "Historical experiment: Hertz detects radio waves",
        aim: "To show that an oscillating electrical circuit produces electromagnetic radiation that can cross space and induce a spark in a separate receiver.",
        apparatus: ["spark-gap transmitter", "loop receiver with a small gap", "reflecting plates or conductors"],
        method: [
          "Create rapidly oscillating charge in the transmitter spark gap.",
          "Place the receiving loop at different positions and orientations.",
          "Look for tiny induced sparks at the receiver gap and investigate reflection and standing-wave positions.",
        ],
        observations: [
          "The receiver responds without a connecting wire.",
          "The detected signal changes with orientation, showing polarization.",
          "Reflection and interference resemble the behaviour of light waves.",
        ],
        safety: ["This is a historical description. High-voltage spark experiments must not be attempted without specialist laboratory supervision."],
      },
      {
        kind: "mistakes",
        items: [
          { wrong: "Saying displacement current is charge jumping through the dielectric.", right: "It is the effect of changing electric flux; no conduction charge must cross the gap." },
          { wrong: "Treating Maxwell's equations as unrelated laws.", right: "Together they describe a unified electric-and-magnetic field system." },
          { wrong: "Using $c=1/\\sqrt{\\mu_0\\varepsilon_0}$ for a material without modification.", right: "In a material, wave speed depends on the material permittivity and permeability." },
        ],
      },
      {
        kind: "practice",
        heading: "Knowledge check",
        stepKey: "maxwellPractice",
        questions: [
          { prompt: "Displacement current is associated with", options: ["steady charge only", "changing electric flux", "constant magnetic flux", "mass flow"], answer: 1, explanation: "The defining term is $I_d=\\varepsilon_0d\\Phi_E/dt$." },
          { prompt: "Which equation says a changing magnetic flux produces an electric field?", options: ["Gauss-electric", "Gauss-magnetic", "Faraday", "Newton"], answer: 2, explanation: "Faraday's law contains $-d\\Phi_B/dt$." },
          { prompt: "The predicted vacuum wave speed depends on", options: ["charge and current", "$\\mu_0$ and $\\varepsilon_0$", "temperature only", "amplitude only"], answer: 1, explanation: "$c=1/\\sqrt{\\mu_0\\varepsilon_0}$." },
          { prompt: "For an ideal charging capacitor, displacement current is", options: ["zero", "half the wire current", "equal to the wire current", "infinite"], answer: 2, explanation: "Charge conservation requires $I_d=I_c$." },
        ],
      },
      {
        kind: "gradedQuiz",
        heading: "Maxwell mastery check",
        passMark: 6,
        questions: [
          { type: "mc", prompt: "Which Maxwell equation was modified by adding displacement current?", options: ["Gauss-electric", "Gauss-magnetic", "Faraday", "Ampère"], answer: 3, marks: 2, explanation: "The corrected equation is the Ampère-Maxwell law." },
          { type: "tf", prompt: "A changing electric field can produce a magnetic field even in vacuum.", answer: true, marks: 2, explanation: "That is the role of Maxwell's displacement-current term." },
          { type: "multi", prompt: "Select every correct statement.", options: ["Electric charge is a source of electric flux.", "Magnetic monopoles are required by Gauss's magnetic law.", "A changing magnetic field can create electric circulation.", "Maxwell's equations predict electromagnetic waves."], answers: [0, 2, 3], marks: 3, explanation: "Gauss's magnetic law states zero net magnetic flux, not the existence of isolated poles." },
        ],
      },
      {
        kind: "summary",
        points: [
          "Maxwell added displacement current to make Ampère's law compatible with charging capacitors and charge conservation.",
          "Changing magnetic flux creates electric circulation, while current and changing electric flux create magnetic circulation.",
          "The four Maxwell equations predict electromagnetic waves with vacuum speed $c=1/\\sqrt{\\mu_0\\varepsilon_0}$.",
          "The agreement with the measured speed of light identifies light as an electromagnetic wave.",
        ],
      },
      { kind: "completion", steps: [{ key: "maxwellPractice", label: "Complete the Maxwell knowledge check" }], requireQuizPass: true },
    ],
  },
  {
    subjectSlug: "physics",
    chapterSlug: "electromagnetic-waves",
    lessonSlug: "production-and-propagation-of-electromagnetic-waves",
    title: "Production and Propagation of Electromagnetic Waves",
    objectives: [
      "Explain why accelerated charges radiate and why steady charges or steady currents do not produce travelling electromagnetic waves.",
      "Describe radiation from an oscillating electric dipole or antenna.",
      "Show that $\\vec E$, $\\vec B$ and the propagation direction are mutually perpendicular.",
      "Use sinusoidal field equations, $E_0/B_0=c$, $k=2\\pi/\\lambda$ and $\\omega=2\\pi f$.",
      "Calculate field amplitudes, wavelength, wave number and angular frequency.",
    ],
    sections: [
      {
        kind: "overview",
        paragraphs: [
          "Electromagnetic waves are produced when charges accelerate. A charge at rest creates a static electric field, and a charge moving steadily creates a steady magnetic contribution, but an oscillating charge continually changes the surrounding field. Those changes propagate outward at finite speed.",
          "A practical transmitter uses alternating current to make charges oscillate in an antenna. The frequency of the radiation matches the frequency of the electrical oscillation that drives the antenna.",
        ],
      },
      {
        kind: "callout",
        variant: "remember",
        title: "Production rule",
        body: "Electromagnetic radiation is produced by accelerated charges. An oscillating charge is continuously accelerating, even when its speed is momentarily zero at the ends of its motion.",
      },
      {
        kind: "imageGallery",
        heading: "Oscillating dipole and field orientation",
        images: [
          { src: "/physics-recreated/em-waves/dipole-radiation.svg", alt: "Oscillating dipole antenna with radiation spreading outward.", caption: "Radiation is strongest perpendicular to an ideal short dipole and weakest along its axis. The diagram is a simplified conceptual model." },
          { src: "/physics-recreated/em-waves/em-field-orientation.svg", alt: "Electric field, magnetic field and propagation direction shown mutually perpendicular.", caption: "For a plane wave, $\\vec E\\times\\vec B$ points in the direction of energy propagation." },
        ],
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive electromagnetic-wave animation",
        mode: "field-wave",
      },
      {
        kind: "theory",
        heading: "Sinusoidal plane-wave model",
        paragraphs: [
          "For a wave travelling in the positive x-direction, the electric and magnetic fields can be represented by sinusoidal functions with the same phase. A convenient orientation is electric field along y and magnetic field along z.",
        ],
        list: [
          "$\\vec E(x,t)=E_0\\sin(kx-\\omega t)\\,\\hat{j}$",
          "$\\vec B(x,t)=B_0\\sin(kx-\\omega t)\\,\\hat{k}$",
          "$\\hat{j}\\times\\hat{k}=\\hat{i}$, so the wave travels along positive x.",
          "The maxima and zeros of $E$ and $B$ occur together: the fields are in phase in a plane wave in vacuum.",
        ],
      },
      {
        kind: "formula",
        latex: "\\frac{E_0}{B_0}=c,\\qquad \\omega=2\\pi f,\\qquad k=\\frac{2\\pi}{\\lambda},\\qquad \\omega=ck",
        caption: "Amplitude and wave-parameter relations in vacuum.",
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive dipole-radiation model",
        mode: "dipole",
      },
      {
        kind: "theory",
        heading: "How a dipole launches radiation",
        paragraphs: [
          "In an oscillating dipole, positive and negative charges move back and forth. Near the antenna, the field pattern is strongly influenced by the charge distribution and current. Farther away, the changing transverse components dominate and carry energy outward as radiation.",
          "It is misleading to imagine static field lines physically snapping off. A more accurate statement is that changes in the electromagnetic field propagate through space according to Maxwell's equations.",
        ],
      },
      {
        kind: "example",
        prompt: "An electromagnetic wave has electric-field amplitude $E_0=120$ V/m. Find the magnetic-field amplitude in vacuum.",
        steps: [
          "Use $E_0/B_0=c$.",
          "$B_0=E_0/c=120/(3.00\\times10^8)$ T.",
        ],
        answer: "$B_0=4.00\\times10^{-7}$ T.",
      },
      {
        kind: "example",
        prompt: "A radio wave has frequency 50 MHz. Find its wavelength, angular frequency and wave number in vacuum.",
        steps: [
          "Convert: $f=50\\times10^6$ Hz.",
          "$\\lambda=c/f=(3.00\\times10^8)/(5.0\\times10^7)=6.0$ m.",
          "$\\omega=2\\pi f=3.14\\times10^8$ rad/s.",
          "$k=2\\pi/\\lambda=1.05$ rad/m.",
        ],
        answer: "$\\lambda=6.0$ m, $\\omega\\approx3.14\\times10^8$ rad/s and $k\\approx1.05$ rad/m.",
      },
      {
        kind: "example",
        prompt: "At one instant, a plane wave travelling along positive z has electric field along positive x. What is the magnetic-field direction?",
        steps: [
          "Energy propagation follows $\\vec E\\times\\vec B$.",
          "We need $\\hat{i}\\times\\vec B=\\hat{k}$.",
          "Since $\\hat{i}\\times\\hat{j}=\\hat{k}$, the magnetic field points along positive y.",
        ],
        answer: "The magnetic field is along the positive y-direction.",
      },
      {
        kind: "example",
        prompt: "A wave is described by $E_y=6.0\\sin(4x-1.2\\times10^9t)$ V/m. Find the propagation direction, wavelength and frequency.",
        steps: [
          "The form $kx-\\omega t$ represents propagation in the positive x-direction.",
          "$k=4$ rad/m, so $\\lambda=2\\pi/k=1.57$ m.",
          "$\\omega=1.2\\times10^9$ rad/s, so $f=\\omega/(2\\pi)=1.91\\times10^8$ Hz.",
        ],
        answer: "Positive x-direction, $\\lambda\\approx1.57$ m and $f\\approx191$ MHz.",
      },
      {
        kind: "experiment",
        heading: "Antenna orientation demonstration",
        aim: "To observe that received signal strength depends on the relative orientation of transmitting and receiving antennas.",
        apparatus: ["low-power classroom radio transmitter or approved demonstration source", "receiving aerial and signal-strength display"],
        method: [
          "Keep source and receiver positions fixed.",
          "Rotate the receiving aerial gradually through 90°.",
          "Record the signal indication at several angles.",
        ],
        observations: [
          "Maximum response occurs when the receiving aerial is aligned with the transmitted electric-field polarization.",
          "The response decreases as the aerial becomes perpendicular to that direction.",
        ],
        safety: ["Use only approved low-power educational equipment and comply with local radio regulations."],
      },
      {
        kind: "mistakes",
        items: [
          { wrong: "Saying a charge moving at constant velocity continuously radiates in its own inertial frame.", right: "Radiation is associated with acceleration or time-varying current distributions." },
          { wrong: "Drawing $E$ and $B$ parallel.", right: "In a plane wave, $E$, $B$ and propagation direction are mutually perpendicular." },
          { wrong: "Using $E_0=B_0$ numerically.", right: "They have different units and obey $E_0=cB_0$ in vacuum." },
        ],
      },
      {
        kind: "practice",
        heading: "Production and propagation practice",
        stepKey: "productionPractice",
        questions: [
          { prompt: "Which charge motion produces electromagnetic radiation?", options: ["charge at rest", "constant-velocity charge only", "accelerated charge", "neutral object only"], answer: 2, explanation: "Accelerated charges create time-varying fields that can radiate." },
          { prompt: "If $E$ points along y and the wave travels along x, $B$ must point along", options: ["x", "y", "z or -z depending on travel sign", "the same direction as E"], answer: 2, explanation: "The cross product $E\\times B$ fixes the propagation direction." },
          { prompt: "A 100 MHz wave in vacuum has wavelength closest to", options: ["0.3 m", "3 m", "30 m", "300 m"], answer: 1, explanation: "$\\lambda=c/f=3\\times10^8/10^8=3$ m." },
          { prompt: "For a vacuum EM wave, doubling $E_0$ makes $B_0$", options: ["half", "unchanged", "double", "four times"], answer: 2, explanation: "$E_0=cB_0$, so the amplitudes scale linearly." },
        ],
      },
      {
        kind: "gradedQuiz",
        heading: "Propagation mastery check",
        passMark: 6,
        questions: [
          { type: "mc", prompt: "A wave $\\sin(kx+\\omega t)$ travels in which x-direction?", options: ["positive", "negative", "neither", "both equally"], answer: 1, marks: 2, explanation: "A plus sign between $kx$ and $\\omega t$ represents negative x propagation." },
          { type: "tf", prompt: "In a vacuum plane wave, the electric and magnetic fields are in phase.", answer: true, marks: 2, explanation: "Their maxima and zeros occur together." },
          { type: "multi", prompt: "Select quantities that determine the wave phase $kx-\\omega t$.", options: ["wave number", "angular frequency", "mass density only", "position and time"], answers: [0, 1, 3], marks: 3, explanation: "Phase depends on $k$, $\\omega$, position and time." },
        ],
      },
      {
        kind: "summary",
        points: [
          "Accelerated charges and time-varying currents produce electromagnetic radiation.",
          "A dipole antenna converts electrical oscillations into radiation with the same frequency.",
          "In a plane wave, $E$, $B$ and the direction of propagation are mutually perpendicular and $E_0/B_0=c$.",
          "Wave parameters obey $\\omega=2\\pi f$, $k=2\\pi/\\lambda$ and $c=f\\lambda$.",
        ],
      },
      { kind: "completion", steps: [{ key: "productionPractice", label: "Complete the production and propagation practice" }], requireQuizPass: true },
    ],
  },
  {
    subjectSlug: "physics",
    chapterSlug: "electromagnetic-waves",
    lessonSlug: "properties-interactions-and-energy-of-electromagnetic-waves",
    title: "Properties, Interactions and Energy of Electromagnetic Waves",
    objectives: [
      "Describe the transverse nature and medium-independent propagation of electromagnetic waves.",
      "Explain reflection, refraction, diffraction, interference, absorption, scattering, dispersion and polarization.",
      "Use electric and magnetic energy density, intensity, momentum and radiation-pressure relationships.",
      "Apply Snell's law and polarization ideas using interactive simulations.",
      "Distinguish power, intensity, energy and photon energy.",
    ],
    sections: [
      {
        kind: "overview",
        paragraphs: [
          "Electromagnetic waves share a common set of wave behaviours: they reflect, refract, diffract, interfere and can be polarized. They can also be absorbed or scattered by matter. The amount of each effect depends on wavelength, material structure and geometry.",
          "Unlike mechanical waves, electromagnetic waves do not require a material medium. In vacuum they travel at $c$, while in materials interactions with charges reduce the effective propagation speed and may cause absorption or dispersion.",
        ],
      },
      {
        kind: "cards",
        heading: "Core properties",
        columns: 3,
        items: [
          { title: "Transverse", text: "$\\vec E$ and $\\vec B$ oscillate perpendicular to the propagation direction." },
          { title: "No material medium", text: "They can cross vacuum because the fields themselves carry the disturbance." },
          { title: "Fixed vacuum speed", text: "All spectrum regions travel at $c$ in vacuum, regardless of frequency." },
          { title: "Energy transfer", text: "The wave carries energy and momentum through space." },
          { title: "Superposition", text: "Overlapping fields add vectorially, producing interference." },
          { title: "Polarizable", text: "The electric-field oscillation can be restricted to a preferred direction." },
        ],
      },
      {
        kind: "table",
        heading: "Wave interactions with matter and boundaries",
        headers: ["Interaction", "What happens", "Typical example"],
        rows: [
          ["Reflection", "The wave returns into the original medium; angle of reflection equals angle of incidence.", "radio reflection from the ionosphere; visible reflection from a mirror"],
          ["Refraction", "Speed and direction change when the wave enters a material with different refractive index.", "light bending in glass or water"],
          ["Diffraction", "The wave spreads around an obstacle or through an opening, especially when dimensions are comparable to wavelength.", "radio signals bending around buildings"],
          ["Interference", "Superposed waves reinforce or cancel depending on phase difference.", "fringes and standing waves"],
          ["Absorption", "Wave energy is transferred to matter, often becoming internal energy or causing excitation.", "microwave heating of water-rich food"],
          ["Scattering", "Radiation is redirected by particles or irregularities.", "blue-sky scattering and radar echoes"],
          ["Dispersion", "Refractive index depends on frequency, separating wavelengths.", "a prism spreading visible light"],
        ],
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive reflection and refraction simulator",
        mode: "refraction",
      },
      {
        kind: "formula",
        latex: "n_1\\sin i=n_2\\sin r,\\qquad v=\\frac{c}{n}",
        caption: "Snell's law and wave speed in a simple non-magnetic transparent medium.",
      },
      {
        kind: "example",
        prompt: "Light travels from air into glass of refractive index 1.50 at an incidence angle of 30°. Find the refraction angle.",
        steps: [
          "Use $n_1\\sin i=n_2\\sin r$ with $n_1\\approx1.00$.",
          "$\\sin r=(1.00/1.50)\\sin30^\\circ=1/3$.",
          "$r=\\sin^{-1}(1/3)\\approx19.5^\\circ$.",
        ],
        answer: "The refraction angle is approximately $19.5^\\circ$.",
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive polarization simulator",
        mode: "polarization",
      },
      {
        kind: "theory",
        heading: "Polarization confirms transverse character",
        paragraphs: [
          "An unpolarized beam has electric-field directions distributed across many transverse orientations. A polarizer transmits one preferred component, producing linearly polarized radiation. A second polarizer, called an analyzer, transmits an amount depending on the angle between its axis and the incoming polarization.",
          "Longitudinal waves cannot be polarized in this way. Therefore polarization is strong evidence that electromagnetic waves are transverse.",
        ],
      },
      {
        kind: "formula",
        latex: "u_E=\\frac12\\varepsilon_0E^2,\\qquad u_B=\\frac{B^2}{2\\mu_0},\\qquad \\langle I\\rangle=\\frac12c\\varepsilon_0E_0^2=\\frac{cB_0^2}{2\\mu_0}",
        caption: "Instantaneous field energy densities and average intensity of a sinusoidal plane wave in vacuum.",
      },
      {
        kind: "theory",
        heading: "Energy, momentum and radiation pressure",
        paragraphs: [
          "The electric and magnetic parts of a vacuum plane wave carry equal average energy. The Poynting vector points in the direction of propagation and represents power crossing unit area. Intensity is average power per unit area, not total energy and not photon energy.",
          "Electromagnetic radiation also carries momentum. Absorption transfers momentum $U/c$ for energy $U$, while ideal reflection reverses the radiation momentum and can transfer twice as much. The resulting force per area is radiation pressure.",
        ],
        list: [
          "For complete absorption at normal incidence: $p_{rad}=I/c$.",
          "For ideal reflection at normal incidence: $p_{rad}=2I/c$.",
          "Momentum carried by energy $U$ in vacuum: $p=U/c$.",
        ],
      },
      {
        kind: "example",
        prompt: "An EM wave has peak electric field 200 V/m. Find its average intensity in vacuum.",
        steps: [
          "Use $I=\\tfrac12c\\varepsilon_0E_0^2$.",
          "$I=0.5(3.00\\times10^8)(8.854\\times10^{-12})(200)^2$.",
        ],
        answer: "$I\\approx53.1$ W/m².",
      },
      {
        kind: "example",
        prompt: "A perfectly absorbing surface receives radiation intensity 900 W/m². Find the radiation pressure.",
        steps: [
          "For absorption, $p_{rad}=I/c$.",
          "$p_{rad}=900/(3.00\\times10^8)$ Pa.",
        ],
        answer: "$p_{rad}=3.0\\times10^{-6}$ Pa.",
      },
      {
        kind: "example",
        prompt: "At one point in a vacuum wave, $E=60$ V/m. Find the instantaneous total energy density.",
        steps: [
          "For a plane wave, electric and magnetic energy densities are equal.",
          "Total $u=u_E+u_B=\\varepsilon_0E^2$.",
          "$u=(8.854\\times10^{-12})(60)^2$ J/m³.",
        ],
        answer: "$u\\approx3.19\\times10^{-8}$ J/m³.",
      },
      {
        kind: "callout",
        variant: "tip",
        title: "Do not mix these quantities",
        body: "Power is energy transferred per second (W). Intensity is power per area (W/m²). Energy density is energy per volume (J/m³). Photon energy is $hf$ for one quantum. These quantities answer different questions.",
      },
      {
        kind: "mistakes",
        items: [
          { wrong: "Claiming all EM waves travel at different speeds in vacuum because their frequencies differ.", right: "All travel at the same vacuum speed; frequency and wavelength adjust so $c=f\\lambda$." },
          { wrong: "Saying diffraction occurs only for sound or water waves.", right: "Every wave can diffract; the effect is strongest when dimensions are comparable to wavelength." },
          { wrong: "Calling all high-intensity radiation ionizing.", right: "Ionization depends primarily on photon energy/frequency; intensity controls the number and rate of photons and heating." },
        ],
      },
      {
        kind: "practice",
        heading: "Properties and energy practice",
        stepKey: "propertiesPractice",
        questions: [
          { prompt: "Which property most directly demonstrates that EM waves are transverse?", options: ["reflection", "polarization", "absorption", "speed"], answer: 1, explanation: "Only transverse oscillations have a selectable transverse orientation." },
          { prompt: "At a boundary, the reflected angle equals", options: ["the refracted angle", "twice incidence", "the incidence angle", "zero"], answer: 2, explanation: "The law of reflection gives $i=r$." },
          { prompt: "If a wave enters a higher-index medium, its frequency", options: ["increases", "decreases", "stays the same", "becomes zero"], answer: 2, explanation: "Frequency is fixed by the source; speed and wavelength change." },
          { prompt: "For an ideal vacuum plane wave, electric and magnetic energy contributions are", options: ["equal", "unrelated", "electric only", "magnetic only"], answer: 0, explanation: "Using $E=cB$ makes $u_E=u_B$." },
        ],
      },
      {
        kind: "gradedQuiz",
        heading: "Properties mastery check",
        passMark: 6,
        questions: [
          { type: "mc", prompt: "A radio wave bends noticeably around a building mainly because of", options: ["dispersion", "diffraction", "polarization", "ionization"], answer: 1, marks: 2, explanation: "Long wavelengths diffract around obstacles of comparable size." },
          { type: "tf", prompt: "An electromagnetic wave carries momentum even though photons have zero rest mass.", answer: true, marks: 2, explanation: "Radiation momentum is related to energy by $p=U/c$ or $p=h/\\lambda$ per photon." },
          { type: "multi", prompt: "Select interactions that may occur at a material boundary.", options: ["reflection", "refraction", "absorption", "creation of rest mass in every case"], answers: [0, 1, 2], marks: 3, explanation: "A boundary can reflect, transmit/refract and absorb portions of the incident energy." },
        ],
      },
      {
        kind: "summary",
        points: [
          "EM waves are transverse, need no medium and travel at $c$ in vacuum.",
          "They exhibit reflection, refraction, interference, diffraction, absorption, scattering, dispersion and polarization.",
          "Wave intensity depends on the square of field amplitude.",
          "Radiation carries energy and momentum and can exert pressure.",
        ],
      },
      { kind: "completion", steps: [{ key: "propertiesPractice", label: "Complete the properties and energy practice" }], requireQuizPass: true },
    ],
  },
  {
    subjectSlug: "physics",
    chapterSlug: "electromagnetic-waves",
    lessonSlug: "the-electromagnetic-spectrum",
    title: "The Electromagnetic Spectrum",
    objectives: [
      "Order the electromagnetic spectrum by wavelength, frequency and photon energy.",
      "Compare radio, microwave, infrared, visible, ultraviolet, X-ray and gamma radiation.",
      "Identify typical sources, detectors, applications and hazards for every spectrum region.",
      "Use $c=f\\lambda$ and $E=hf$ to classify radiation.",
      "Interpret visible-light wavelength and colour ranges as approximate rather than perfectly fixed boundaries.",
    ],
    sections: [
      {
        kind: "overview",
        paragraphs: [
          "The electromagnetic spectrum is one continuous family of waves. The named regions are convenient human classifications, not sharp physical walls. Adjacent ranges overlap depending on how the radiation is generated or detected.",
          "From radio toward gamma, wavelength decreases while frequency and photon energy increase. Every region has the same vacuum speed, but interaction with matter changes dramatically because wavelength and photon energy differ.",
        ],
      },
      {
        kind: "formula",
        latex: "c=f\\lambda,\\qquad E_{photon}=hf=\\frac{hc}{\\lambda}",
        caption: "Higher frequency means shorter wavelength and greater photon energy.",
      },
      {
        kind: "imageGallery",
        heading: "Spectrum map",
        images: [
          { src: "/physics-recreated/em-waves/electromagnetic-spectrum.svg", alt: "Electromagnetic spectrum ordered from radio to gamma with wavelength and frequency trends.", caption: "The ranges are approximate. Production method often helps distinguish overlapping regions such as ultraviolet, X-rays and gamma rays." },
        ],
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive electromagnetic-spectrum explorer",
        mode: "spectrum",
      },
      {
        kind: "table",
        heading: "Spectrum reference: production, detection and uses",
        headers: ["Region", "Approximate wavelength", "Typical production", "Typical detection", "Common uses"],
        rows: spectrumRows,
        note: "Ranges are approximate and may overlap. Gamma rays are normally classified by nuclear or particle origin, while X-rays commonly arise from electron processes.",
      },
      {
        kind: "theory",
        heading: "Radio waves",
        paragraphs: [
          "Radio waves have the longest wavelengths in the standard spectrum classification. They are generated efficiently by alternating currents in antennas and are detected by receiver aerials. Longer wavelengths diffract well and can travel beyond direct line of sight through ground-wave, ionospheric or satellite paths depending on frequency.",
        ],
      },
      {
        kind: "theory",
        heading: "Microwaves",
        paragraphs: [
          "Microwaves are short-wavelength radio waves used for radar, satellite communication, mobile networks and heating. Their relatively short wavelengths allow directional beams and compact antennas. In ovens, the electromagnetic field transfers energy to polar molecules and ions, producing dielectric heating; the oven does not make the food radioactive.",
        ],
      },
      {
        kind: "theory",
        heading: "Infrared and visible radiation",
        paragraphs: [
          "Infrared is emitted strongly by warm bodies and is closely associated with thermal radiation. It is used in remote controls, thermal imaging, heaters and some communication systems. Visible light is the narrow part detected by the human eye, roughly from violet at shorter wavelengths to red at longer wavelengths.",
        ],
      },
      {
        kind: "theory",
        heading: "Ultraviolet, X-rays and gamma rays",
        paragraphs: [
          "Ultraviolet has enough photon energy to drive photochemical effects; the shorter-wavelength part can ionize matter. X-rays and gamma rays are ionizing and highly penetrating, although penetration also depends on material and energy. X-rays are commonly produced by fast electrons or atomic electron transitions, while gamma rays usually originate in nuclear or particle processes.",
        ],
      },
      {
        kind: "example",
        prompt: "Calculate the wavelength of a mobile-communication signal at 900 MHz and identify its spectrum region.",
        steps: [
          "$f=900\\times10^6$ Hz.",
          "$\\lambda=c/f=(3.00\\times10^8)/(9.00\\times10^8)=0.333$ m.",
          "A wavelength of about 33 cm lies in the microwave/radio region used for communication.",
        ],
        answer: "$\\lambda\\approx0.333$ m; microwave-band radio frequency.",
      },
      {
        kind: "example",
        prompt: "A photon has energy 6.2 eV. Find its wavelength and identify the approximate spectrum region.",
        steps: [
          "Convert energy: $E=6.2(1.602\\times10^{-19})=9.93\\times10^{-19}$ J.",
          "$\\lambda=hc/E$.",
          "$\\lambda=(6.626\\times10^{-34})(3.00\\times10^8)/(9.93\\times10^{-19})\\approx2.00\\times10^{-7}$ m.",
          "$2.00\\times10^{-7}$ m = 200 nm, which is ultraviolet.",
        ],
        answer: "Approximately 200 nm, ultraviolet.",
      },
      {
        kind: "example",
        prompt: "Arrange infrared, ultraviolet, radio and X-rays in increasing frequency.",
        steps: [
          "Use the spectrum order from longest wavelength/lowest frequency to shortest wavelength/highest frequency.",
          "Radio comes before infrared, then ultraviolet, then X-rays.",
        ],
        answer: "Radio < infrared < ultraviolet < X-rays.",
      },
      {
        kind: "comparison",
        heading: "Ionizing and non-ionizing radiation",
        left: {
          title: "Mainly non-ionizing",
          items: ["radio", "microwave", "infrared", "visible", "most lower-frequency ultraviolet"],
        },
        right: {
          title: "Ionizing or potentially ionizing",
          items: ["short-wavelength ultraviolet", "X-rays", "gamma rays", "classification depends on photon energy, not only total beam power"],
        },
      },
      {
        kind: "callout",
        variant: "warning",
        title: "Spectrum safety",
        body: "Risk depends on frequency, intensity, exposure time, distance, shielding and the tissue or material involved. Do not describe all electromagnetic radiation as equally dangerous. Ionizing radiation can damage molecules directly; intense non-ionizing radiation can still cause heating or eye injury.",
      },
      {
        kind: "mistakes",
        items: [
          { wrong: "Treating spectrum boundaries as exact universal numbers.", right: "Use approximate ranges and consider how the radiation is produced." },
          { wrong: "Saying gamma rays travel faster than radio waves in vacuum.", right: "All spectrum regions travel at $c$ in vacuum." },
          { wrong: "Assuming longer wavelength means higher photon energy.", right: "Photon energy increases with frequency and decreases with wavelength." },
        ],
      },
      {
        kind: "practice",
        heading: "Spectrum practice",
        stepKey: "spectrumPractice",
        questions: [
          { prompt: "Which sequence is correct from lower to higher frequency?", options: ["radio, infrared, visible, X-ray", "gamma, X-ray, visible, radio", "infrared, radio, gamma, visible", "X-ray, UV, microwave, radio"], answer: 0, explanation: "Frequency rises from radio toward gamma." },
          { prompt: "Which region is commonly detected by a thermopile or bolometer?", options: ["infrared", "gamma", "radio only", "X-ray"], answer: 0, explanation: "These detectors respond to heating from infrared radiation." },
          { prompt: "Which source distinction is most useful between X-rays and gamma rays?", options: ["speed", "origin", "ability to diffract", "transverse nature"], answer: 1, explanation: "X-rays are generally electron-origin radiation; gamma rays are nuclear/particle-origin radiation." },
          { prompt: "A wavelength of 500 nm lies in", options: ["microwave", "visible", "X-ray", "gamma"], answer: 1, explanation: "500 nm is approximately green visible light." },
        ],
      },
      {
        kind: "gradedQuiz",
        heading: "Spectrum mastery check",
        passMark: 7,
        questions: [
          { type: "mc", prompt: "Which radiation generally has the greatest photon energy?", options: ["radio", "infrared", "X-ray", "gamma"], answer: 3, marks: 2, explanation: "Gamma rays occupy the highest-frequency part of the standard spectrum." },
          { type: "matching", prompt: "Match the radiation to a typical use.", left: ["microwave", "infrared", "X-ray", "gamma"], options: ["thermal imaging", "radar", "medical bone imaging", "radiotherapy"], answer: [1, 0, 2, 3], marks: 4, explanation: "These are representative uses; many regions have several applications." },
          { type: "tf", prompt: "Visible red light has a longer wavelength than visible violet light.", answer: true, marks: 2, explanation: "Red is near 700 nm and violet near 400 nm." },
        ],
      },
      {
        kind: "summary",
        points: [
          "The spectrum is continuous and ordered radio → microwave → infrared → visible → ultraviolet → X-ray → gamma.",
          "Across that order, wavelength decreases while frequency and photon energy increase.",
          "Sources, detectors, uses and hazards differ because radiation interacts with matter differently at different frequencies.",
          "Spectrum boundaries are approximate and classification can depend on origin.",
        ],
      },
      { kind: "completion", steps: [{ key: "spectrumPractice", label: "Complete the spectrum practice" }], requireQuizPass: true },
    ],
  },
  {
    subjectSlug: "physics",
    chapterSlug: "electromagnetic-waves",
    lessonSlug: "applications-communication-and-radiation-safety",
    title: "Applications, Communication and Radiation Safety",
    objectives: [
      "Explain the operating principles behind broadcasting, mobile communication, radar, microwave heating, thermal imaging and medical imaging.",
      "Trace the stages of a simple electromagnetic communication system.",
      "Evaluate application choices using wavelength, diffraction, penetration, directionality and energy.",
      "Distinguish scientifically supported safety principles from common misconceptions.",
      "Analyse case studies involving microwave ovens, mobile phones, atmospheric transmission and coral colour.",
    ],
    sections: [
      {
        kind: "overview",
        paragraphs: [
          "Electromagnetic technologies work because engineers select a frequency range whose wavelength, interaction with matter, available sources and detectors suit the task. Long radio waves can diffract over obstacles; microwaves support narrow beams and high data rates; infrared reveals temperature; X-rays penetrate soft tissue more than bone; gamma radiation can deliver controlled high-energy doses.",
          "Application does not automatically mean danger or safety. A responsible analysis asks: Is the radiation ionizing? What is the intensity? How long is the exposure? What shielding and distance controls are used? What tissue or material is exposed?",
        ],
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive communication-system visualization",
        mode: "communication",
      },
      {
        kind: "theory",
        heading: "Broadcasting and mobile communication",
        paragraphs: [
          "A transmitter converts information into an electrical signal, modulates a high-frequency carrier and drives an antenna. The receiving antenna responds to the arriving electric field, producing a small alternating signal that is amplified and demodulated.",
          "Mobile systems reuse frequency bands across cells, direct signals through base stations and encode information digitally. The radio-frequency photons are non-ionizing. Safety evaluation therefore focuses mainly on absorbed power and heating rather than direct ionization.",
        ],
      },
      {
        kind: "theory",
        heading: "Radar and navigation",
        paragraphs: [
          "Radar sends a microwave pulse and measures the echo from an object. The round-trip time gives range, while a frequency shift can reveal radial speed through the Doppler effect. Short microwave wavelengths support narrow beams and good directional resolution, making radar useful for aircraft, weather, ships and speed measurement.",
        ],
      },
      {
        kind: "formula",
        latex: "R=\\frac{ct}{2}",
        caption: "Radar distance from round-trip travel time $t$. The factor 2 accounts for the outward and return journeys.",
      },
      {
        kind: "example",
        prompt: "A radar pulse returns 160 microseconds after transmission. Find the target distance.",
        steps: [
          "$t=160\\times10^{-6}$ s.",
          "$R=ct/2=(3.00\\times10^8)(160\\times10^{-6})/2$.",
        ],
        answer: "$R=2.40\\times10^4$ m = 24.0 km.",
      },
      {
        kind: "theory",
        heading: "Microwave ovens: how heating occurs",
        paragraphs: [
          "The oven's magnetron produces microwaves inside a metal cavity. The alternating electric field drives rotational motion and collisions involving polar molecules and ions, distributing energy as heat. The exact heating mechanism is dielectric loss, not a single resonance that heats only water.",
          "Microwaves do not make food radioactive. Metal objects can concentrate electric fields at sharp points and cause arcing; closed metal containers may also be dangerous. Use microwave-safe vessels and follow the manufacturer's guidance.",
        ],
      },
      {
        kind: "experiment",
        heading: "Case study: microwave heating pattern",
        aim: "To understand that a microwave cavity can contain standing-wave regions and that food motion improves heating uniformity.",
        apparatus: ["teacher-provided microwave demonstration data or thermal image", "turntable-on and turntable-off temperature map"],
        method: [
          "Compare temperature maps after equal heating times.",
          "Identify hotter and cooler regions.",
          "Relate uneven heating to field patterns and limited thermal conduction during short heating intervals.",
        ],
        observations: [
          "Rotating or stirring moves material through different field regions and improves uniformity.",
          "Standing-wave patterns can create hot and cold spots.",
        ],
        safety: ["Do not operate an empty or modified microwave oven. Do not place unsuitable metal objects or sealed containers inside."],
      },
      {
        kind: "theory",
        heading: "Infrared, ultraviolet, X-ray and gamma applications",
        paragraphs: [
          "Infrared cameras infer surface temperature from detected thermal radiation. Ultraviolet can sterilize surfaces and reveal fluorescent security markings. X-rays provide internal images because different tissues attenuate them differently. Gamma rays can sterilize equipment, trace processes and treat cancers under carefully planned conditions.",
          "Medical benefit depends on optimized dose and justified use. Ionizing-radiation procedures are performed by trained professionals with shielding, monitoring and dose control.",
        ],
      },
      {
        kind: "table",
        heading: "Application choice and the physical reason",
        headers: ["Application", "Region", "Why it is suitable"],
        rows: [
          ["Long-range broadcasting", "radio", "large wavelengths diffract and can follow atmospheric or ground paths"],
          ["Satellite communication", "microwave", "directional beams pass through suitable atmospheric windows"],
          ["Aircraft radar", "microwave", "short pulses and narrow beams provide range and direction"],
          ["Remote control", "infrared", "inexpensive LEDs and detectors; short-range line-of-sight operation"],
          ["Thermal imaging", "infrared", "warm objects emit strongly in infrared bands"],
          ["Bone imaging", "X-ray", "different attenuation by bone and soft tissue creates contrast"],
          ["Cancer radiotherapy", "high-energy X-ray or gamma", "controlled ionizing dose can damage tumour cells"],
        ],
      },
      {
        kind: "theory",
        heading: "Atmospheric windows and colour",
        paragraphs: [
          "Earth's atmosphere does not transmit every wavelength equally. Visible light and many radio bands pass relatively well, while ozone absorbs much ultraviolet and atmospheric gases absorb broad infrared bands. These windows shape astronomy, climate and communication technology.",
          "Objects and organisms appear coloured because they absorb some visible wavelengths and reflect or transmit others. A coral reef's colour, for example, depends on pigments, symbiotic organisms and the spectral composition of the illumination reaching it through water.",
        ],
      },
      {
        kind: "callout",
        variant: "warning",
        title: "Mobile-phone safety: careful wording",
        body: "Mobile-phone radio waves are non-ionizing. Exposure guidelines are designed to limit energy absorption and heating. Current health guidance should be taken from recognized public-health and radiation-protection authorities; avoid unsupported claims that ordinary phone use either certainly causes or certainly prevents disease.",
      },
      {
        kind: "comparison",
        heading: "Safety control principles",
        left: {
          title: "Non-ionizing high-power sources",
          items: ["control intensity and exposure time", "use screening and interlocks", "avoid direct eye exposure to powerful lasers", "maintain equipment correctly"],
        },
        right: {
          title: "Ionizing sources",
          items: ["justify each exposure", "minimize time", "maximize distance", "use shielding, monitoring and trained supervision"],
        },
      },
      {
        kind: "example",
        prompt: "Why are microwaves useful for satellite communication but very-long-wave radio is less suitable for a narrow satellite beam?",
        steps: [
          "Antenna directionality depends on antenna size relative to wavelength.",
          "Microwaves have shorter wavelength, allowing practical dishes to form narrow beams.",
          "A very long wavelength would require an impractically large antenna for comparable directivity.",
        ],
        answer: "Microwave wavelengths allow compact, highly directional antennas and efficient point-to-point links.",
      },
      {
        kind: "example",
        prompt: "Explain why a microwave oven should use a rotating turntable or stirring mechanism.",
        steps: [
          "Reflections inside the cavity can form standing-wave patterns.",
          "These patterns have regions of stronger and weaker electric field.",
          "Moving the food samples several regions and averages the deposited energy.",
        ],
        answer: "Movement reduces hot and cold spots and improves heating uniformity.",
      },
      {
        kind: "mistakes",
        items: [
          { wrong: "Saying microwave-heated food becomes radioactive.", right: "Microwave photons are non-ionizing and do not create radioactive nuclei." },
          { wrong: "Calling X-ray and gamma classification purely a wavelength distinction.", right: "Their ranges overlap; production mechanism is an important distinction." },
          { wrong: "Assuming more penetrating always means more biologically damaging in every situation.", right: "Risk depends on photon energy, dose, exposure geometry and biological context." },
        ],
      },
      {
        kind: "practice",
        heading: "Applications and safety practice",
        stepKey: "applicationsPractice",
        questions: [
          { prompt: "Radar determines distance mainly from", options: ["colour", "round-trip time", "mass", "temperature"], answer: 1, explanation: "$R=ct/2$." },
          { prompt: "Microwave ovens heat food mainly through", options: ["nuclear fission", "dielectric energy absorption", "gamma emission", "making atoms radioactive"], answer: 1, explanation: "Alternating fields transfer energy to polar molecules and ions through dielectric loss." },
          { prompt: "Which control is most appropriate for ionizing radiation?", options: ["increase time", "reduce distance", "shielding and dose monitoring", "remove all labels"], answer: 2, explanation: "Time, distance, shielding and monitoring are standard protection principles." },
          { prompt: "Why are microwaves useful for radar?", options: ["they are longitudinal", "they permit directional beams", "they travel faster than light", "they have zero wavelength"], answer: 1, explanation: "Their wavelengths allow practical narrow-beam antennas." },
        ],
      },
      {
        kind: "gradedQuiz",
        heading: "Applications mastery check",
        passMark: 7,
        questions: [
          { type: "mc", prompt: "A radar echo delay of 20 microseconds corresponds to a target distance of", options: ["3 km", "6 km", "30 km", "60 km"], answer: 0, marks: 2, explanation: "$R=(3\\times10^8)(20\\times10^{-6})/2=3000$ m." },
          { type: "tf", prompt: "Microwave radiation in a properly operating oven makes food radioactive.", answer: false, marks: 2, explanation: "It deposits energy through non-ionizing electromagnetic heating." },
          { type: "multi", prompt: "Select valid reasons for using infrared.", options: ["thermal imaging", "remote controls", "deep ionizing radiotherapy", "night-vision sensors"], answers: [0, 1, 3], marks: 3, explanation: "Infrared is useful for thermal detection and short-range optical signalling, not ionizing radiotherapy." },
          { type: "mc", prompt: "The best general distinction between ionizing and non-ionizing radiation is based on", options: ["wave colour", "photon energy", "whether it is artificial", "whether it is visible"], answer: 1, marks: 2, explanation: "Ionization requires sufficient energy per photon to remove electrons." },
        ],
      },
      {
        kind: "summary",
        points: [
          "Communication systems use modulation, antennas, propagation, reception and demodulation.",
          "Radar uses microwave echoes and round-trip travel time.",
          "Microwave heating is dielectric energy absorption, not radioactivity.",
          "Safety analysis must distinguish ionizing from non-ionizing radiation and consider intensity, time, distance, shielding and dose.",
          "Application choice follows wavelength, directionality, penetration, atmospheric transmission and detector technology.",
        ],
      },
      { kind: "completion", steps: [{ key: "applicationsPractice", label: "Complete the applications and safety practice" }], requireQuizPass: true },
    ],
  },
  {
    subjectSlug: "physics",
    chapterSlug: "electromagnetic-waves",
    lessonSlug: "electromagnetic-wave-calculations-and-chapter-review",
    title: "Electromagnetic-Wave Calculations and Chapter Review",
    objectives: [
      "Use $c=f\\lambda$, $E=hf$, $E_0=cB_0$, intensity and energy-density equations accurately.",
      "Convert units involving MHz, GHz, THz, nanometres and electronvolts.",
      "Solve mixed questions covering Maxwell's correction, propagation, spectrum, applications and safety.",
      "Answer multiple-choice, assertion-reason, fill-in, case-study, short-answer and long-answer questions.",
      "Diagnose common errors and verify numerical results with units and spectrum classification.",
    ],
    sections: [
      {
        kind: "overview",
        paragraphs: [
          "This review consolidates the complete chapter. Use the interactive calculator first, then work through the examples, case studies and assessment. Every numerical answer should include unit conversion, equation selection, substitution and a reasonableness check.",
        ],
      },
      {
        kind: "electromagneticWaveExplorer",
        heading: "Interactive wavelength, frequency and photon-energy calculator",
        mode: "energy",
      },
      {
        kind: "table",
        heading: "Essential equations",
        headers: ["Purpose", "Equation", "Notes"],
        rows: [
          ["Wave relation", "$c=f\\lambda$", "Use SI units: Hz and metres."],
          ["Photon energy", "$E=hf=hc/\\lambda$", "One photon's energy; convert J to eV using $1\text{ eV}=1.602\\times10^{-19}$ J."],
          ["Field amplitudes", "$E_0=cB_0$", "Vacuum plane wave."],
          ["Average intensity", "$I=\\tfrac12c\\varepsilon_0E_0^2$", "Sinusoidal vacuum wave."],
          ["Displacement current", "$I_d=\\varepsilon_0d\\Phi_E/dt$", "Vacuum form."],
          ["Wave parameters", "$\\omega=2\\pi f$, $k=2\\pi/\\lambda$", "Phase equation uses radians."],
        ],
      },
      {
        kind: "example",
        prompt: "Find the wavelength of a 5.0×10¹⁴ Hz electromagnetic wave.",
        steps: [
          "$\\lambda=c/f$.",
          "$\\lambda=(3.00\\times10^8)/(5.0\\times10^{14})=6.0\\times10^{-7}$ m.",
          "Convert to nanometres: $6.0\\times10^{-7}$ m = 600 nm.",
        ],
        answer: "600 nm, visible light near the orange-red region.",
      },
      {
        kind: "example",
        prompt: "An X-ray has wavelength 0.10 nm. Find its frequency and photon energy in keV.",
        steps: [
          "$0.10$ nm $=1.0\\times10^{-10}$ m.",
          "$f=c/\\lambda=3.00\\times10^{18}$ Hz.",
          "$E=hf=(6.626\\times10^{-34})(3.00\\times10^{18})=1.99\\times10^{-15}$ J.",
          "Convert: $E/(1.602\\times10^{-19})=1.24\\times10^4$ eV = 12.4 keV.",
        ],
        answer: "$f=3.00\\times10^{18}$ Hz and $E\\approx12.4$ keV.",
      },
      {
        kind: "example",
        prompt: "The average intensity of a plane EM wave is 1000 W/m². Find its peak electric field.",
        steps: [
          "$I=\\tfrac12c\\varepsilon_0E_0^2$.",
          "$E_0=\\sqrt{2I/(c\\varepsilon_0)}$.",
          "$E_0=\\sqrt{2000/[(3.00\\times10^8)(8.854\\times10^{-12})]}$.",
        ],
        answer: "$E_0\\approx868$ V/m.",
      },
      {
        kind: "example",
        prompt: "A wave has magnetic amplitude $2.0\\times10^{-8}$ T. Find its electric amplitude.",
        steps: [
          "Use $E_0=cB_0$.",
          "$E_0=(3.00\\times10^8)(2.0\\times10^{-8})$ V/m.",
        ],
        answer: "$E_0=6.0$ V/m.",
      },
      {
        kind: "example",
        prompt: "A radiation source emits 100 W uniformly in all directions. Estimate the intensity 2.0 m away.",
        steps: [
          "The power is spread over a sphere of area $4\\pi r^2$.",
          "$I=P/(4\\pi r^2)=100/[4\\pi(2.0)^2]$.",
        ],
        answer: "$I\\approx1.99$ W/m².",
      },
      {
        kind: "theory",
        heading: "Case study 1: microwave oven",
        paragraphs: [
          "A microwave oven uses a magnetron and a metal cavity. The field transfers energy to the food through dielectric losses. A rotating turntable or mode stirrer reduces uneven heating. Suitable containers are important, and sealed containers can build pressure. The radiation remains inside when the door and interlocks are functioning correctly.",
        ],
      },
      {
        kind: "theory",
        heading: "Case study 2: mobile communication",
        paragraphs: [
          "Mobile devices communicate using non-ionizing radio-frequency waves. A meaningful exposure discussion distinguishes photon energy from intensity and absorbed power. Claims must be based on recognized health authorities rather than isolated anecdotes or alarmist comparisons with X-rays.",
        ],
      },
      {
        kind: "theory",
        heading: "Case study 3: atmosphere and biological colour",
        paragraphs: [
          "The atmosphere transmits some wavelengths and absorbs others. Ozone is crucial because it absorbs much harmful ultraviolet radiation. Greenhouse gases interact strongly with infrared. Biological pigments and structures create colour by selectively absorbing, reflecting and scattering visible wavelengths.",
        ],
      },
      {
        kind: "comparison",
        heading: "Assertion-reason strategy",
        left: { title: "Check the assertion", items: ["Is the scientific statement true?", "Watch for absolute words such as always and only.", "Test units and spectrum order."] },
        right: { title: "Check the reason", items: ["Is the reason independently true?", "Does it logically explain the assertion?", "Two true statements are not automatically an explanation pair."] },
      },
      {
        kind: "practice",
        heading: "Mixed chapter practice",
        stepKey: "emReviewPractice",
        questions: [
          { prompt: "Displacement current depends on", options: ["charge only", "change of electric flux", "constant electric field", "mass density"], answer: 1, explanation: "$I_d=\\varepsilon_0d\\Phi_E/dt$." },
          { prompt: "The laboratory confirmation of Maxwell's electromagnetic-wave prediction is associated with", options: ["Hertz", "Bohr", "Rutherford", "Chadwick"], answer: 0, explanation: "Hertz generated and detected radio waves." },
          { prompt: "The direction of propagation is parallel to", options: ["$\\vec E$", "$\\vec B$", "$\\vec E\\times\\vec B$", "$\\vec E+\\vec B$ only"], answer: 2, explanation: "The Poynting direction follows $E\\times B$." },
          { prompt: "Which radiation is commonly used in aircraft radar?", options: ["microwave", "infrared", "gamma", "ultraviolet"], answer: 0, explanation: "Microwave wavelengths support narrow beams and echoes." },
          { prompt: "Which radiation is emitted strongly by warm bodies?", options: ["infrared", "X-ray", "gamma", "ultraviolet only"], answer: 0, explanation: "Thermal emission from ordinary-temperature bodies is mainly infrared." },
          { prompt: "Which pair is ionizing under ordinary classification?", options: ["radio and microwave", "infrared and visible", "X-ray and gamma", "microwave and infrared"], answer: 2, explanation: "X-ray and gamma photons have enough energy to ionize atoms." },
          { prompt: "If frequency doubles in vacuum, wavelength", options: ["doubles", "halves", "stays fixed", "becomes zero"], answer: 1, explanation: "$c=f\\lambda$ with fixed $c$." },
          { prompt: "A wave of wavelength 3 m has frequency", options: ["10 MHz", "100 MHz", "1 GHz", "3 GHz"], answer: 1, explanation: "$f=3\\times10^8/3=10^8$ Hz = 100 MHz." },
          { prompt: "The maximum electric and magnetic fields are related by", options: ["$E_0=B_0$", "$E_0=cB_0$", "$B_0=cE_0$", "$E_0B_0=0$"], answer: 1, explanation: "Vacuum plane-wave amplitude relation." },
          { prompt: "Which property distinguishes transverse waves?", options: ["speed", "polarization", "reflection", "frequency"], answer: 1, explanation: "Polarization selects a transverse direction." },
          { prompt: "A source wavelength of 250 nm belongs to", options: ["visible", "ultraviolet", "microwave", "radio"], answer: 1, explanation: "250 nm is ultraviolet." },
          { prompt: "Microwave-heated food becomes radioactive.", options: ["true", "false", "only when wet", "only in glass"], answer: 1, explanation: "Microwave photons are non-ionizing and do not activate nuclei." },
        ],
      },
      {
        kind: "gradedQuiz",
        heading: "Electromagnetic Waves chapter test",
        passMark: 14,
        questions: [
          { type: "mc", prompt: "Which sequence is descending wavelength?", options: ["radio, microwave, infrared, visible", "gamma, X-ray, visible, radio", "visible, infrared, microwave, gamma", "UV, radio, X-ray, infrared"], answer: 0, marks: 2, explanation: "Radio has the longest wavelength among the listed regions." },
          { type: "mc", prompt: "A wave has $f=2.5\\times10^{15}$ Hz. Its wavelength is closest to", options: ["120 m", "120 nm", "12 nm", "1.2 mm"], answer: 1, marks: 2, explanation: "$\\lambda=3\\times10^8/(2.5\\times10^{15})=1.2\\times10^{-7}$ m = 120 nm." },
          { type: "tf", prompt: "Electric and magnetic fields in a vacuum plane wave have the same phase.", answer: true, marks: 2, explanation: "Their peaks and zeros coincide." },
          { type: "tf", prompt: "All electromagnetic waves need a material medium.", answer: false, marks: 2, explanation: "They travel through vacuum." },
          { type: "multi", prompt: "Select all correct uses.", options: ["microwave—radar", "infrared—thermal imaging", "X-ray—crystal structure", "gamma—radio broadcasting"], answers: [0, 1, 2], marks: 3, explanation: "Gamma rays are not used for ordinary radio broadcasting." },
          { type: "matching", prompt: "Match source to radiation.", left: ["oscillating antenna current", "warm molecular matter", "fast electrons striking metal", "nuclear transition"], options: ["radio", "infrared", "X-ray", "gamma"], answer: [0, 1, 2, 3], marks: 4, explanation: "The production mechanism is central to spectrum classification." },
          { type: "mc", prompt: "For complete absorption, radiation pressure equals", options: ["$Ic$", "$I/c$", "$2I/c$", "$I^2/c$"], answer: 1, marks: 2, explanation: "Absorbed momentum flux gives $p=I/c$." },
          { type: "multi", prompt: "Select true safety statements.", options: ["Ionizing risk depends on dose.", "Power and photon energy are the same quantity.", "Shielding can reduce exposure.", "Non-ionizing sources can never cause heating."], answers: [0, 2], marks: 3, explanation: "Power and photon energy differ, and intense non-ionizing fields can heat tissue." },
        ],
      },
      {
        kind: "flashcards",
        cards: [
          { front: "Displacement current", back: "$I_d=\\varepsilon_0d\\Phi_E/dt$; magnetic effect of changing electric flux." },
          { front: "Vacuum wave speed", back: "$c=1/\\sqrt{\\mu_0\\varepsilon_0}=f\\lambda$." },
          { front: "Field amplitude relation", back: "$E_0=cB_0$." },
          { front: "Photon energy", back: "$E=hf=hc/\\lambda$." },
          { front: "Spectrum order", back: "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma." },
          { front: "Radiation pressure", back: "$I/c$ for absorption and $2I/c$ for ideal reflection." },
        ],
      },
      {
        kind: "summary",
        points: [
          "Maxwell's displacement-current correction predicts electromagnetic waves and the speed of light.",
          "Accelerated charges produce radiation; $E$, $B$ and propagation are mutually perpendicular.",
          "All spectrum regions travel at $c$ in vacuum and obey $c=f\\lambda$.",
          "Frequency controls photon energy, while amplitude controls intensity.",
          "Applications and hazards must be explained using wavelength, energy, intensity, exposure and material interaction.",
        ],
      },
      { kind: "completion", steps: [{ key: "emReviewPractice", label: "Complete the mixed chapter practice" }], requireQuizPass: true },
    ],
  },
];
