export interface GuideTopic {
  title: string;
  eyebrow: string;
  summary: string;
  keyIdeas: string[];
  question: string;
}

export const FEATURE_GUIDES: Record<string, GuideTopic[]> = {
  "physics-in-everyday-life": [
    {
      title: "How a refrigerator moves heat",
      eyebrow: "Thermal physics at home",
      summary:
        "A refrigerator does not create cold. A circulating refrigerant absorbs energy inside the cabinet and releases it to the room through coils or a heat exchanger.",
      keyIdeas: [
        "Evaporation inside absorbs thermal energy.",
        "A compressor raises the refrigerant pressure and temperature.",
        "Condensation outside releases energy to the room.",
        "The process requires electrical work, so the room receives more heat than the food loses.",
      ],
      question: "Why does leaving a refrigerator door open fail to cool a closed room?",
    },
    {
      title: "Why seat belts reduce injury",
      eyebrow: "Momentum and safety",
      summary:
        "During a collision, a passenger continues moving because of inertia. A seat belt applies a controlled force over more time and spreads it across stronger parts of the body.",
      keyIdeas: [
        "The passenger and vehicle initially share a velocity.",
        "Stopping requires a change in momentum.",
        "Increasing stopping time reduces average force for the same momentum change.",
        "A correctly worn belt also prevents impact with the cabin or ejection.",
      ],
      question: "How do airbags complement rather than replace seat belts?",
    },
    {
      title: "How speakers produce sound",
      eyebrow: "Electricity becomes vibration",
      summary:
        "An alternating electrical signal in a voice coil interacts with a permanent magnetic field, moving a cone back and forth and creating pressure variations in air.",
      keyIdeas: [
        "The audio signal changes direction and strength.",
        "Magnetic force moves the coil and attached cone.",
        "Cone motion produces compressions and rarefactions.",
        "Frequency mainly controls pitch; amplitude strongly influences loudness.",
      ],
      question: "Why does a larger speaker enclosure often improve low-frequency sound?",
    },
  ],
  "what-if-science": [
    {
      title: "What if Earth stopped rotating?",
      eyebrow: "A model with stated assumptions",
      summary:
        "An instantaneous stop would be catastrophic because the atmosphere, oceans and loose objects would retain their eastward velocity. A gradual stop would produce very different consequences.",
      keyIdeas: [
        "At the equator, Earth’s surface moves eastward at roughly 1,670 km/h.",
        "Inertia would preserve motion if the solid Earth stopped suddenly.",
        "A solar day would approach one year if Earth no longer rotated but still orbited.",
        "Long-term winds, climate patterns and the planet’s equatorial bulge would change.",
      ],
      question: "Which conclusions depend on whether the stop is sudden or gradual?",
    },
    {
      title: "What if the Moon disappeared?",
      eyebrow: "Changing one celestial body",
      summary:
        "Earth would continue orbiting the Sun, but tides, night illumination and the long-term stability of Earth’s axial tilt would be affected.",
      keyIdeas: [
        "Solar tides would remain, but typical tidal patterns would be weaker and different.",
        "Many coastal ecosystems are adapted to lunar-driven tidal cycles.",
        "There would be no solar or lunar eclipses caused by the Moon.",
        "The Moon helps limit large long-term variations in Earth’s axial tilt.",
      ],
      question: "Which effect would be immediate, and which would unfold over geological time?",
    },
    {
      title: "What if humans could see infrared?",
      eyebrow: "Changing the detector",
      summary:
        "Infrared spans a much wider wavelength range than visible light. Seeing some infrared would not automatically produce the thermal-camera view familiar from false-colour images.",
      keyIdeas: [
        "Warm objects emit thermal infrared, but human-temperature emission peaks far beyond visible wavelengths.",
        "Eyes would need suitable receptors and transparent eye tissues.",
        "False-colour thermal cameras translate invisible intensity into visible colours.",
        "Reflected near-infrared and emitted thermal infrared would reveal different information.",
      ],
      question:
        "Why is a thermal camera image a scientific visualization rather than literal infrared colour?",
    },
  ],
  "unsolved-science-mysteries": [
    {
      title: "What is dark matter?",
      eyebrow: "Evidence without an identified particle",
      summary:
        "Galaxies, galaxy clusters and gravitational lensing behave as though more gravitating matter exists than telescopes detect. The identity of that additional matter remains unknown.",
      keyIdeas: [
        "Galaxy rotation and cluster dynamics provide gravitational evidence.",
        "Gravitational lensing maps mass without requiring it to emit light.",
        "The standard cosmological model includes non-baryonic cold dark matter.",
        "No proposed dark-matter particle has yet been confirmed.",
      ],
      question: "How can scientists infer matter that does not emit visible light?",
    },
    {
      title: "What drives cosmic acceleration?",
      eyebrow: "Dark energy",
      summary:
        "Observations of distant supernovae and other cosmological measurements indicate that the expansion of the universe is accelerating, but the underlying physical explanation is unresolved.",
      keyIdeas: [
        "Dark energy is a label for the cause, not a directly identified substance.",
        "A cosmological constant is the simplest model consistent with current evidence.",
        "Large surveys compare expansion history and structure growth.",
        "Alternative models must match several independent observations.",
      ],
      question:
        "Why should dark energy be described as an open explanation rather than a discovered material?",
    },
    {
      title: "How did life begin?",
      eyebrow: "Origins research",
      summary:
        "Research investigates how non-living chemistry could produce self-maintaining, evolving systems. No single complete pathway has been demonstrated as Earth’s historical route.",
      keyIdeas: [
        "Experiments test plausible prebiotic chemical steps.",
        "Researchers study information-carrying molecules, membranes and metabolism.",
        "Early Earth environments are reconstructed from geological evidence and models.",
        "Evolution explains diversification after heritable replication exists; it does not by itself specify the first origin.",
      ],
      question:
        "What evidence would distinguish a plausible chemical pathway from the pathway that actually occurred?",
    },
  ],
  "great-inventions": [
    {
      title: "The electric battery",
      eyebrow: "From voltaic pile to modern cells",
      summary:
        "Alessandro Volta’s pile demonstrated sustained current from stacked electrochemical units, while later scientists and engineers improved chemistry, safety, rechargeability and energy density.",
      keyIdeas: [
        "A cell converts chemical potential into electrical energy.",
        "Volta’s device was historically important but impractical by modern standards.",
        "Rechargeable lead-acid, nickel-based and lithium-ion systems solved different needs.",
        "Modern batteries are products of many discoveries, patents and manufacturing advances.",
      ],
      question:
        "Why is the history of a technology better represented as a branching timeline than a single invention date?",
    },
    {
      title: "The telephone",
      eyebrow: "Networks, transmitters and switching",
      summary:
        "Speech transmission emerged from work by several inventors on acoustics, electricity and telegraphy. Later microphones, exchanges, electronic switching and digital networks transformed the original device.",
      keyIdeas: [
        "A transmitter converts sound variation into an electrical signal.",
        "A receiver converts the signal back into mechanical vibration.",
        "Patents document legal claims, not the complete history of contributing ideas.",
        "The usefulness of a telephone depends on a network, not only a handset.",
      ],
      question:
        "Which supporting inventions were necessary before telephones could become a mass communication system?",
    },
    {
      title: "The telescope",
      eyebrow: "Extending human vision",
      summary:
        "Early refracting telescopes combined lenses; later reflectors used mirrors to avoid some colour distortion and support much larger apertures.",
      keyIdeas: [
        "Aperture determines how much light an instrument collects.",
        "Magnification alone does not determine image quality.",
        "Galileo improved and used the telescope for influential astronomical observations but did not invent the first known telescope.",
        "Modern observatories detect radio, infrared, ultraviolet, X-ray and gamma-ray radiation as well as visible light.",
      ],
      question:
        "Why do astronomers value aperture and detector sensitivity more than extreme magnification?",
    },
  ],
  "science-timeline": [
    {
      title: "From measurement to classical mechanics",
      eyebrow: "Ancient world to the 1700s",
      summary:
        "Mathematical astronomy, improved instruments, systematic experiments and new descriptions of motion gradually produced classical mechanics.",
      keyIdeas: [
        "Earlier civilizations created precise calendars, geometry and astronomical records.",
        "Copernicus proposed a heliocentric mathematical system in the sixteenth century.",
        "Kepler derived empirical laws of planetary motion from accurate observations.",
        "Newton connected terrestrial and celestial motion through laws of mechanics and gravitation.",
      ],
      question: "How did better observations constrain mathematical models of the Solar System?",
    },
    {
      title: "Energy, heat and fields",
      eyebrow: "The 1800s",
      summary:
        "Industrial technology and laboratory science helped establish energy conservation, thermodynamics and the unification of electricity, magnetism and light.",
      keyIdeas: [
        "Heat came to be understood as energy transfer rather than a material fluid.",
        "Faraday emphasized fields through experiments on induction.",
        "Maxwell’s equations connected electric and magnetic phenomena with electromagnetic waves.",
        "Statistical mechanics linked bulk temperature and pressure to microscopic motion.",
      ],
      question: "Why did the field concept change explanations of forces acting across space?",
    },
    {
      title: "Relativity, quanta and the information age",
      eyebrow: "1900 to the present",
      summary:
        "New evidence at very high speed, small scale and cosmic scale required models beyond classical physics, while electronics and computing transformed experimentation.",
      keyIdeas: [
        "Relativity changed the relationship between space, time, energy and gravity.",
        "Quantum theory describes probabilities and discrete interactions at microscopic scales.",
        "Particle accelerators and space observatories became large international projects.",
        "Computers enabled numerical modelling, automated detection and analysis of enormous datasets.",
      ],
      question: "Why does modern physics retain classical mechanics for many everyday problems?",
    },
  ],
  "famous-experiments": [
    {
      title: "Newton’s prism investigations",
      eyebrow: "White light and colour",
      summary:
        "Newton used prisms and carefully arranged apertures to argue that white light contains rays with different refrangibility rather than the prism manufacturing colours from whiteness.",
      keyIdeas: [
        "A narrow beam produced a stretched spectrum.",
        "A second prism tested selected parts of the spectrum.",
        "Recombining spectral light supported the composition of white light.",
        "The interpretation developed through experiments and debate, not one casual observation.",
      ],
      question: "Why was passing an isolated colour through a second prism an important control?",
    },
    {
      title: "Young’s double-slit experiment",
      eyebrow: "Interference of light",
      summary:
        "Coherent light passing through two narrow openings produces alternating bright and dark regions, a pattern explained by superposition and path difference.",
      keyIdeas: [
        "Bright fringes correspond to constructive interference.",
        "Dark fringes correspond to destructive interference.",
        "Fringe spacing depends on wavelength, slit separation and screen distance.",
        "Modern single-particle versions reveal quantum behaviour that cannot be reduced to classical particles following known paths.",
      ],
      question: "Which variables would increase the separation between bright fringes?",
    },
    {
      title: "Rutherford scattering",
      eyebrow: "Discovering the atomic nucleus",
      summary:
        "Alpha particles directed at thin metal foil mostly passed through, while a small fraction deflected through large angles, contradicting a diffuse-charge atomic model.",
      keyIdeas: [
        "Most of an atom’s volume is relatively empty at the scale probed.",
        "Large deflections require concentrated positive charge and mass.",
        "Geiger and Marsden performed key scattering measurements under Rutherford’s direction.",
        "Later quantum models replaced the simple planetary picture of electrons orbiting a nucleus.",
      ],
      question:
        "Why were rare large-angle deflections more informative than the majority that passed nearly straight through?",
    },
  ],
  "science-around-qatar": [
    {
      title: "Mirages above hot roads and desert surfaces",
      eyebrow: "Atmospheric optics",
      summary:
        "Strong temperature gradients near a heated surface create refractive-index gradients. Light curves through the air and can form an inferior image of the sky that resembles water.",
      keyIdeas: [
        "Hot air near the surface is usually less dense than cooler air above.",
        "Refractive index changes continuously through the gradient.",
        "The apparent water is often displaced sky imagery, not reflection from liquid.",
        "Mirage strength changes with surface heating, viewing height and distance.",
      ],
      question: "Why does lowering your viewpoint change the apparent mirage?",
    },
    {
      title: "Humidity, condensation and cooling",
      eyebrow: "Coastal desert climate",
      summary:
        "Warm air can contain substantial water vapour. When a surface or air parcel cools below its dew point, vapour condenses on surfaces or into droplets.",
      keyIdeas: [
        "Relative humidity depends on both water-vapour amount and temperature.",
        "A cold glass cools adjacent air and can trigger condensation.",
        "Air-conditioning systems remove both sensible heat and moisture.",
        "High humidity reduces the effectiveness of sweat evaporation.",
      ],
      question:
        "Why can two days with the same air temperature feel different when humidity changes?",
    },
    {
      title: "Desalination and energy",
      eyebrow: "Water engineering",
      summary:
        "Qatar relies heavily on desalination. Thermal processes separate water through evaporation and condensation, while reverse osmosis uses pressure to drive water through selective membranes.",
      keyIdeas: [
        "Dissolved salts do not evaporate with water under normal distillation.",
        "Reverse osmosis must overcome the osmotic pressure of saline feedwater.",
        "Energy recovery devices can reduce reverse-osmosis energy demand.",
        "Intake design, pretreatment, brine management and water quality are part of the complete system.",
      ],
      question: "Why is desalination an engineering system rather than only a membrane or boiler?",
    },
  ],
  "space-exploration-hub": [
    {
      title: "Why planets remain in orbit",
      eyebrow: "Gravity and sideways motion",
      summary:
        "A planet’s velocity continually carries it forward while gravity accelerates it toward the Sun. The result is a curved path rather than a straight escape or direct fall.",
      keyIdeas: [
        "An orbit is continuous free fall around a body.",
        "Orbital speed depends on distance and the central mass.",
        "Elliptical orbits change speed along the path.",
        "Diagrams usually compress enormous differences in size and distance.",
      ],
      question: "What would happen to Earth’s path if the Sun’s gravity vanished instantaneously?",
    },
    {
      title: "How rockets accelerate in space",
      eyebrow: "Momentum conservation",
      summary:
        "A rocket expels propellant in one direction and gains momentum in the other. It does not need air to push against.",
      keyIdeas: [
        "Thrust follows from momentum carried by exhaust.",
        "A rocket must carry propellant but not necessarily an oxidizer for every propulsion system; chemical rockets do.",
        "Discarding empty stages improves the remaining vehicle’s mass ratio.",
        "Reaching orbit requires large horizontal speed, not merely reaching a height.",
      ],
      question: "Why is a high-altitude vertical flight not automatically an orbit?",
    },
    {
      title: "How astronomers detect exoplanets",
      eyebrow: "Evidence from distant systems",
      summary:
        "Most known exoplanets are detected indirectly through their effect on a star’s light or motion, rather than photographed as resolved worlds.",
      keyIdeas: [
        "Transit measurements look for repeated dips in starlight.",
        "Radial-velocity measurements detect the star’s line-of-sight wobble through Doppler shifts.",
        "Multiple methods can constrain mass, radius and density.",
        "Instrument effects and stellar activity must be rejected as false positives.",
      ],
      question: "What can be inferred when both transit and radial-velocity data are available?",
    },
  ],
};
