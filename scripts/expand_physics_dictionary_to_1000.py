#!/usr/bin/env python3
"""Expand EduVerse's curated Physics Dictionary from 692 to exactly 1,000 entries.

The script is intentionally idempotent: entries are merged by slug and the final
collection is validated for count, uniqueness, required fields and related links.
"""
from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "src/data/physics-dictionary.json"
TERM_LIST_PATH = ROOT / "documentation/PHYSICS-DICTIONARY-TERM-LIST.md"

CATEGORY_CONTEXT = {
    "Advanced Mechanics and Continuum Physics": "It extends classical mechanics to constrained systems, fields, deformable media and nonlinear motion.",
    "Fluid Dynamics and Aerodynamics": "It is used to describe fluid motion, aerodynamic forces and compressible-flow behavior.",
    "Materials and Solid-State Physics": "It connects atomic structure and collective behavior to the electrical, magnetic and mechanical properties of materials.",
    "Electronics and Semiconductor Devices": "It is used to understand semiconductor components, analog circuits and digital systems.",
    "Electromagnetic Waves, RF and Photonics": "It describes the generation, propagation, control and detection of electromagnetic radiation.",
    "Particle Physics and Field Theory": "It is part of the modern framework for describing elementary particles and fundamental interactions.",
    "Plasma Physics": "It describes ionized matter whose charged particles respond collectively to electric and magnetic fields.",
    "Geophysics, Atmospheric and Environmental Physics": "It applies physical laws to Earth, seismic processes and the structure of the atmosphere.",
    "Medical and Biological Physics": "It applies mechanics, electricity, waves and radiation to living systems and medical imaging.",
}

HIGH_INTEREST = {
    "degree-of-freedom", "phase-space", "lagrangian-mechanics", "principle-of-least-action",
    "euler-lagrange-equation", "hamiltonian-mechanics", "noether-theorem", "coupled-oscillator",
    "driven-oscillator", "damped-oscillator", "chaos-theory", "lyapunov-exponent",
    "navier-stokes-equation", "boundary-layer", "boundary-layer-separation", "drag-coefficient",
    "lift-coefficient", "angle-of-attack", "airfoil", "mach-number", "supersonic-flow", "shock-wave",
    "crystal-lattice", "unit-cell", "bravais-lattice", "miller-indices", "brillouin-zone",
    "band-theory", "fermi-level", "fermi-energy", "intrinsic-semiconductor", "extrinsic-semiconductor",
    "carrier-mobility", "depletion-region", "forward-bias", "reverse-bias", "diode-equation",
    "zener-diode", "photodiode", "solar-cell", "bipolar-junction-transistor", "field-effect-transistor",
    "mosfet", "logic-gate", "operational-amplifier", "low-pass-filter", "oscillator-circuit",
    "poynting-vector", "radiation-pressure", "brewster-angle", "fresnel-equations", "fiber-optic-cable",
    "single-mode-fiber", "laser-cavity", "population-inversion", "q-switching", "mode-locking",
    "elementary-particle", "fermion", "gauge-boson", "gluon", "neutrino-oscillation",
    "quantum-chromodynamics", "quantum-electrodynamics", "higgs-mechanism", "feynman-diagram",
    "antiparticle", "baryon", "meson", "hadron", "cp-violation", "plasma-state", "debye-length",
    "plasma-frequency", "alfven-wave", "magnetohydrodynamics", "tokamak", "magnetic-reconnection",
    "seismic-wave", "p-wave", "s-wave", "earthquake-magnitude", "epicenter", "plate-tectonics",
    "barometric-formula", "lapse-rate", "biomechanics", "membrane-potential", "action-potential",
    "nernst-potential", "blood-pressure", "ultrasound-imaging", "doppler-ultrasound",
    "x-ray-attenuation", "computed-tomography",
}


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def parse_rows(category: str, block: str) -> list[dict[str, Any]]:
    rows: list[dict[str, Any]] = []
    for raw in block.strip().splitlines():
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        parts = [part.strip() for part in raw.split("|")]
        if len(parts) > 6:
            raise ValueError(f"Too many fields in row: {raw}")
        parts += [""] * (6 - len(parts))
        title, definition, formula, unit, aliases, note = parts
        slug = slugify(title)
        explanation = definition
        context = CATEGORY_CONTEXT[category]
        if not explanation.endswith((".", "!", "?")):
            explanation += "."
        explanation += f" {context}"
        entry: dict[str, Any] = {
            "title": title,
            "category": category,
            "definition": definition,
            "aliases": [a.strip() for a in aliases.split(";") if a.strip()],
            "slug": slug,
            "categorySlug": slugify(category),
            "explanation": explanation,
            "priority": "high-interest" if slug in HIGH_INTEREST else "reference",
            "relatedTerms": [],
        }
        if formula:
            entry["formula"] = formula
        if unit:
            entry["unit"] = unit
        if note:
            entry["explanation"] += f" {note}"
        rows.append(entry)
    return rows


ADDITIONS: list[dict[str, Any]] = []

ADDITIONS += parse_rows("Advanced Mechanics and Continuum Physics", r'''
Generalized coordinate|An independent parameter used to specify the configuration of a mechanical system.|||generalised coordinate;configuration coordinate
Degree of freedom|One independent way in which a system can move or change configuration.|||DOF;independent motion
Configuration space|The multidimensional space whose coordinates represent every possible configuration of a system.|||configuration manifold
Phase space|The space formed by all generalized coordinates and their conjugate momenta.|||state space in mechanics
Lagrangian mechanics|A formulation of mechanics that derives motion from the Lagrangian and variational principles.|L = T - U||analytical mechanics
Lagrangian|A function, usually kinetic energy minus potential energy, used to determine a system's equations of motion.|L = T - U||Lagrange function
Action principle|The variational statement that physical motion makes the action stationary relative to nearby possible paths.|S = ∫L dt|J·s|stationary action principle
Principle of least action|The principle that the actual path of a system makes the action stationary, often a minimum.|δS = 0||Hamilton principle;least-action principle
Euler-Lagrange equation|The differential equation obtained by requiring stationary action for each generalized coordinate.|d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = 0||Lagrange equation
Hamiltonian mechanics|A formulation of mechanics using generalized coordinates, canonical momenta and the Hamiltonian.|||canonical mechanics
Hamiltonian|A function obtained by a Legendre transform of the Lagrangian and often equal to total energy.|H = Σpᵢq̇ᵢ - L|J|Hamilton function
Canonical coordinate|A generalized coordinate paired with a canonical momentum in Hamiltonian mechanics.|||canonical position
Canonical momentum|The momentum conjugate to a generalized coordinate, defined from the Lagrangian.|pᵢ = ∂L/∂q̇ᵢ||conjugate momentum
Poisson bracket|A bilinear operation that describes how two phase-space functions are related under Hamiltonian evolution.|{A,B} = Σ(∂A/∂qᵢ ∂B/∂pᵢ - ∂A/∂pᵢ ∂B/∂qᵢ)||canonical bracket
Noether theorem|The theorem that every continuous symmetry of the action corresponds to a conserved quantity.|||Noether's theorem
Holonomic constraint|A constraint expressible as an equation involving coordinates and possibly time.|||integrable constraint
Nonholonomic constraint|A constraint that cannot be reduced to a relation involving coordinates and time alone.|||non-integrable constraint
Virtual displacement|An infinitesimal displacement consistent with the system's constraints at a fixed instant.|||allowed virtual motion
D'Alembert principle|A principle that combines applied and inertial forces so their virtual work vanishes for allowed displacements.|Σ(Fᵢ - mᵢaᵢ)·δrᵢ = 0||d'Alembert's principle
Generalized force|The coefficient of a generalized displacement in the virtual-work expression.|δW = ΣQᵢδqᵢ||generalised force
Small-angle approximation|An approximation valid for angles near zero in radians, replacing trigonometric functions by simpler forms.|sin θ ≈ θ; cos θ ≈ 1||small-angle limit
Normal coordinate|A collective coordinate in which the linearized equations of coupled oscillation become independent.|||normal-mode coordinate
Coupled oscillator|A set of oscillators linked so that motion of one influences the others.|||coupled oscillation
Driven oscillator|An oscillator acted on by an external periodic force.|||forced oscillator
Damped oscillator|An oscillator whose amplitude decreases because energy is dissipated.|ẍ + 2βẋ + ω₀²x = 0||damped harmonic oscillator
Mechanical resonance curve|A graph showing the steady-state oscillation amplitude as a function of driving frequency.|||frequency-response curve
Nonlinear oscillator|An oscillator whose restoring force or damping is not proportional to displacement or velocity.|||anharmonic oscillator
Chaos theory|The study of deterministic systems whose long-term behavior is extremely sensitive to initial conditions.|||chaotic dynamics
Deterministic chaos|Irregular, apparently random behavior produced by deterministic nonlinear equations.|||chaotic motion
Lyapunov exponent|A rate measuring how quickly nearby trajectories in phase space separate or converge.|λ = lim(t→∞) (1/t) ln(δ(t)/δ₀)|s⁻¹|chaos exponent
Bifurcation|A qualitative change in a system's long-term behavior as a control parameter crosses a critical value.|||dynamical bifurcation
Strange attractor|A fractal attracting set in phase space associated with chaotic dynamics.|||chaotic attractor
Continuum mechanics|The mechanics of materials treated as continuously distributed matter rather than discrete particles.|||continuum physics
Stress tensor|A tensor describing normal and shear forces per unit area acting on all orientations at a point.|σᵢⱼ|Pa|Cauchy stress tensor
Strain tensor|A tensor describing local deformation, including changes of length and angle.|εᵢⱼ||deformation tensor
''')

ADDITIONS += parse_rows("Fluid Dynamics and Aerodynamics", r'''
Pathline|The actual trajectory followed by an individual fluid particle through space.|||particle trajectory
Streakline|The curve formed at an instant by all fluid particles that previously passed through one fixed point.|||injection line
Flow field|A spatial and temporal description of fluid variables such as velocity, pressure and density.|||fluid field
Velocity field|A vector field assigning the local fluid velocity to every point and time.|v = v(r,t)|m/s|flow velocity field
Material derivative|The rate of change experienced by a moving fluid element, combining local and convective changes.|D/Dt = ∂/∂t + v·∇|s⁻¹|substantial derivative;convective derivative
Incompressible flow|Flow in which the density of each moving fluid element remains effectively constant.|∇·v = 0||constant-density flow
Compressible flow|Flow in which density changes significantly because of pressure, temperature or velocity variations.|||variable-density flow
Steady flow|Flow whose properties at each fixed position do not change with time.|∂/∂t = 0||stationary flow
Unsteady flow|Flow whose velocity, pressure or other properties vary with time at fixed positions.|||transient flow
Vorticity|The curl of the velocity field, measuring local rotational motion of a fluid.|ω = ∇×v|s⁻¹|fluid rotation
Circulation|The line integral of fluid velocity around a closed curve.|Γ = ∮v·dl|m²/s|flow circulation
Irrotational flow|Flow with zero vorticity throughout the region considered.|∇×v = 0||curl-free flow
Potential flow|An idealized irrotational flow represented by the gradient of a velocity potential.|v = ∇φ||velocity-potential flow
Stream function|A scalar function whose contours are streamlines in two-dimensional incompressible flow.|u = ∂ψ/∂y; v = -∂ψ/∂x|m²/s|flow function
Velocity potential|A scalar function whose gradient gives the velocity field of irrotational flow.|v = ∇φ|m²/s|potential function
Navier-Stokes equation|The momentum-conservation equation for a viscous fluid.|ρDv/Dt = -∇p + μ∇²v + ρg||Navier–Stokes equations
Euler equation of fluid motion|The momentum equation for an inviscid fluid, obtained by neglecting viscosity.|ρDv/Dt = -∇p + ρg||Euler fluid equation
Boundary layer|A thin region next to a surface where viscous effects and velocity gradients are important.|||viscous boundary layer
Boundary-layer separation|Detachment of the near-wall flow from a surface, usually caused by an adverse pressure gradient.|||flow separation
No-slip condition|The condition that fluid touching a solid surface has the same velocity as that surface.|||no-slip boundary condition
Pressure gradient|The rate and direction of spatial change of pressure.|∇p|Pa/m
Adverse pressure gradient|A pressure increase in the direction of flow that slows the boundary layer and can cause separation.|||opposing pressure gradient
Drag coefficient|A dimensionless measure of drag normalized by dynamic pressure and reference area.|C_D = 2F_D/(ρv²A)||aerodynamic drag coefficient
Lift coefficient|A dimensionless measure of lift normalized by dynamic pressure and reference area.|C_L = 2F_L/(ρv²A)||aerodynamic lift coefficient
Skin-friction drag|Drag produced by viscous shear stress acting along a body's surface.|||friction drag
Pressure drag|Drag produced by an imbalance of pressure between the front and rear of a body.|||pressure resistance
Form drag|Pressure drag strongly influenced by the shape and frontal area of a body.|||shape drag
Induced drag|Drag associated with lift generation on a finite wing and the trailing vortex system.|||lift-induced drag
Wave drag|Drag caused by pressure waves, especially shock waves, in compressible flow.|||compressibility drag
Stall angle|The angle of attack beyond which lift decreases sharply because extensive flow separation occurs.|||critical angle of attack
Angle of attack|The angle between an airfoil's chord line and the incoming relative airflow.|||incidence angle
Airfoil|A streamlined cross-sectional shape designed to produce useful lift or control aerodynamic forces.|||aerofoil;wing section
Camber|The curvature of an airfoil's mean line relative to its chord.|||airfoil curvature
Chord line|The straight line joining an airfoil's leading and trailing edges.|||airfoil chord
Mach number|The ratio of flow speed to the local speed of sound.|M = v/c||Mach
Subsonic flow|Compressible flow with speed below the local speed of sound, normally with Mach number less than about 0.8.|||below-sonic flow
Transonic flow|Flow near the speed of sound in which subsonic and supersonic regions coexist.|||near-sonic flow
Supersonic flow|Flow faster than the local speed of sound.|M > 1||above-sonic flow
Hypersonic flow|Very high-speed flow, conventionally beginning near Mach 5, with strong thermal and chemical effects.|||very-high-Mach flow
Shock wave|A very thin compression region across which pressure, temperature, density and velocity change abruptly.|||compression shock
''')

ADDITIONS += parse_rows("Materials and Solid-State Physics", r'''
Crystal lattice|A periodic array of points representing the translational symmetry of a crystal.|||space lattice
Unit cell|The smallest repeating volume that can generate a crystal structure by translation.|||crystal unit cell
Bravais lattice|One of the fourteen distinct three-dimensional lattice types defined by translational symmetry.|||Bravais crystal lattice
Basis of a crystal|The atom or group of atoms attached to every lattice point to form the crystal structure.|||crystal basis;motif
Lattice constant|A parameter specifying unit-cell edge lengths and, where needed, interaxial angles.|||lattice parameter
Crystal system|One of seven classifications of crystals based on unit-cell geometry and symmetry.|||crystallographic system
Miller indices|Integer indices that specify the orientation of crystal planes or directions.|(hkl)||crystal-plane indices
Reciprocal lattice|A lattice in wave-vector space used to analyze diffraction and periodic structures.|||Fourier lattice
Brillouin zone|A primitive cell of the reciprocal lattice, especially the Wigner-Seitz cell around a reciprocal-lattice point.|||first Brillouin zone
Crystal plane|A plane passing through regularly spaced lattice points in a crystal.|||lattice plane
Coordination number|The number of nearest neighboring atoms or ions surrounding a selected particle.|||nearest-neighbor count
Packing fraction|The fraction of a unit cell's volume occupied by atoms modeled as hard spheres.|||atomic packing factor
Close packing|An arrangement of equal spheres with the greatest possible packing fraction.|||close-packed structure
Point defect|A localized imperfection involving one or a few lattice sites.|||zero-dimensional defect
Vacancy defect|A point defect created when an atom or ion is missing from its normal lattice site.|||lattice vacancy
Interstitial defect|A point defect in which an extra atom occupies a normally unoccupied space between lattice sites.|||interstitial atom
Substitutional defect|A defect in which a foreign atom replaces a host atom at a lattice site.|||substitutional impurity
Dislocation|A line defect in a crystal responsible for much plastic deformation.|||crystal dislocation
Edge dislocation|A dislocation associated with the termination of an extra half-plane of atoms.|||edge-type dislocation
Screw dislocation|A dislocation produced by shear so that atomic planes form a helical ramp around the defect line.|||screw-type dislocation
Grain boundary|The interface separating crystal grains with different orientations in a polycrystalline material.|||crystallite boundary
Polycrystalline material|A solid composed of many small crystals or grains with differing orientations.|||polycrystal
Single crystal|A solid whose crystal lattice is continuous and similarly oriented throughout the specimen.|||monocrystal
Amorphous solid|A solid lacking long-range periodic atomic order.|||noncrystalline solid;glassy solid
Quasicrystal|A solid with long-range ordered but nonperiodic atomic structure and unusual rotational symmetries.|||quasiperiodic crystal
Band theory|The theory describing allowed and forbidden electron-energy ranges in solids.|||electronic band theory
Fermi level|The electron chemical potential; at thermal equilibrium it sets the probability that states are occupied.|||chemical potential of electrons
Fermi energy|The highest occupied electron energy at absolute zero for a system of fermions.|E_F|eV
Density of states|The number of available quantum states per energy interval, often per unit volume.|g(E)|states/(eV·m³)|electronic density of states
Effective mass|A parameter describing how a charge carrier accelerates in a periodic crystal as if it had a modified mass.|m* = ħ²/(d²E/dk²)|kg|carrier effective mass
Hole conduction|Electrical conduction described using positively charged quasiparticles corresponding to missing valence electrons.|||hole transport
Intrinsic semiconductor|A chemically pure semiconductor in which electrons and holes are generated thermally in equal numbers.|||undoped semiconductor
Extrinsic semiconductor|A semiconductor whose carrier concentration is intentionally changed by impurities.|||doped semiconductor
Doping concentration|The number of intentionally introduced donor or acceptor atoms per unit volume.|N_D or N_A|m⁻³|dopant concentration
Donor impurity|A dopant that readily contributes electrons to a semiconductor's conduction band.|||n-type dopant
Acceptor impurity|A dopant that accepts electrons and thereby creates mobile holes in a semiconductor.|||p-type dopant
Degenerate semiconductor|A very heavily doped semiconductor whose Fermi level lies inside an allowed energy band.|||heavily doped semiconductor
Carrier mobility|The drift velocity produced per unit electric field.|μ = v_d/E|m²/(V·s)|charge-carrier mobility
Carrier concentration|The number of mobile electrons or holes per unit volume.|n or p|m⁻³|charge-carrier density
Drift-diffusion equation|An equation combining carrier motion caused by electric fields with motion caused by concentration gradients.|J_n = qnμ_nE + qD_n∇n||semiconductor transport equation
Hall coefficient|The proportionality constant connecting Hall electric field to current density and magnetic field.|R_H = E_H/(JB)|m³/C
Magnetoresistance|A change in a material's electrical resistance when a magnetic field is applied.|MR = [R(B)-R(0)]/R(0)||magnetic-field resistance
Superconducting gap|The energy gap separating the superconducting ground state from quasiparticle excitations.|Δ|eV|superconducting energy gap
Superconducting coherence length|The characteristic distance over which the superconducting order parameter changes appreciably.|ξ|m|coherence length in superconductors
London penetration depth|The characteristic distance over which an external magnetic field decays inside a superconductor.|λ_L|m|magnetic penetration depth
''')

ADDITIONS += parse_rows("Electronics and Semiconductor Devices", r'''
Depletion region|The region around a semiconductor junction depleted of mobile carriers and containing fixed ionized dopants.|||space-charge region
Built-in potential|The equilibrium voltage across a junction caused by carrier diffusion and the resulting electric field.|V_bi|V|contact potential
Forward bias|A junction bias that lowers the potential barrier and permits substantial majority-carrier current.|||forward-biased condition
Reverse bias|A junction bias that raises the potential barrier and normally allows only a small leakage current.|||reverse-biased condition
Diode equation|The ideal relation between diode current and applied voltage.|I = I_S(e^(V_D/nV_T) - 1)|A|Shockley diode equation
Rectifier diode|A diode designed mainly to convert alternating current into unidirectional current.|||power diode
Zener diode|A diode designed to operate reliably in reverse breakdown for voltage regulation.|||voltage-regulator diode
Photodiode|A light-sensitive semiconductor diode that converts incident photons into electrical current.|||photo detector diode
Solar cell|A photovoltaic semiconductor device that converts light energy directly into electrical energy.|||photovoltaic cell
Avalanche breakdown|Reverse-junction breakdown caused by impact ionization and carrier multiplication.|||avalanche effect
Zener breakdown|Reverse-junction breakdown caused mainly by quantum tunneling through a strong electric field.|||field-ionization breakdown
Junction capacitance|Capacitance associated with charge separation across the depletion region of a reverse-biased junction.|C_j = εA/W|F|depletion capacitance
Diffusion capacitance|Effective capacitance caused by stored minority-carrier charge in a forward-biased junction.|C_d = dQ/dV|F|storage capacitance
Bipolar junction transistor|A three-terminal semiconductor device in which both electrons and holes participate in current control.|||BJT
Common-emitter configuration|A transistor circuit with the emitter common to input and output, providing useful voltage and current gain.|||CE configuration
Common-base configuration|A transistor circuit with the base common to input and output, offering low input resistance and high-frequency response.|||CB configuration
Common-collector configuration|A transistor circuit with the collector common to input and output, widely used as an emitter follower.|||CC configuration;emitter follower
Current gain|The ratio of output current change to input current change in a transistor circuit.|β = I_C/I_B||transistor beta
Transistor biasing|The establishment of steady DC voltages and currents that set a transistor's operating state.|||DC biasing
Operating point|The quiescent current and voltage values about which a transistor signal varies.|Q point||quiescent point
Load line|A graph representing the voltage-current combinations permitted by the external circuit.|||DC load line
Field-effect transistor|A transistor whose channel current is controlled primarily by an electric field.|||FET
Junction field-effect transistor|A field-effect transistor whose channel is controlled by a reverse-biased PN junction.|||JFET
MOSFET|A field-effect transistor with an insulated metal-oxide-semiconductor gate controlling channel conductivity.|||metal-oxide-semiconductor field-effect transistor
Threshold voltage|The gate voltage at which a MOSFET channel begins to conduct strongly.|V_TH|V|turn-on voltage
Channel-length modulation|The increase of MOSFET drain current with drain voltage because the effective channel shortens.|||MOSFET output-resistance effect
Transconductance|The change in output current per unit change in control voltage.|g_m = ∂I_out/∂V_in|S|mutual conductance
CMOS|A circuit technology using complementary n-channel and p-channel MOSFETs for low static power.|||complementary metal-oxide-semiconductor
Logic gate|A digital circuit that implements a Boolean operation on one or more binary inputs.|||digital gate
Truth table|A table listing the output of a logic function for every possible input combination.|||logic table
Boolean algebra|An algebra of binary variables and logical operations used to analyze digital circuits.|||switching algebra
Operational amplifier|A high-gain differential voltage amplifier used with feedback to perform analog operations.|||op amp;op-amp
Virtual ground|A circuit node held near ground potential by feedback even though it is not directly connected to ground.|||virtual earth
Negative feedback amplifier|An amplifier that returns an opposing fraction of the output to the input to stabilize gain and improve linearity.|||degenerative feedback amplifier
Comparator circuit|A circuit that switches its output according to which of two input voltages is larger.|||voltage comparator
Integrator circuit|A circuit whose output is proportional to the time integral of its input.|V_out = -(1/RC)∫V_in dt||op-amp integrator
Differentiator circuit|A circuit whose output is proportional to the time derivative of its input.|V_out = -RC dV_in/dt||op-amp differentiator
Active filter|A frequency-selective circuit using powered components such as operational amplifiers or transistors.|||electronic active filter
Passive filter|A frequency-selective circuit made only from passive components such as resistors, capacitors and inductors.|||RLC filter
Low-pass filter|A filter that passes frequencies below a cutoff while attenuating higher frequencies.|f_c = 1/(2πRC)|Hz|LPF
High-pass filter|A filter that passes frequencies above a cutoff while attenuating lower frequencies.|f_c = 1/(2πRC)|Hz|HPF
Band-pass filter|A filter that passes a selected range of frequencies and attenuates frequencies outside it.|||BPF
Notch filter|A filter that strongly attenuates a narrow band around one selected frequency.|||band-stop filter;rejector filter
Oscillator circuit|An electronic circuit that generates a periodic signal without a periodic external input.|||electronic oscillator
Crystal oscillator|An oscillator stabilized by the mechanical resonance of a piezoelectric crystal.|||quartz oscillator
''')

ADDITIONS += parse_rows("Electromagnetic Waves, RF and Photonics", r'''
Poynting vector|A vector giving the directional electromagnetic energy flux or power per unit area.|S = E×H|W/m²|electromagnetic power-flow vector
Electromagnetic energy density|The energy stored per unit volume in electric and magnetic fields.|u = ½(εE² + B²/μ)|J/m³|field energy density
Radiation pressure|Pressure exerted when electromagnetic radiation transfers momentum to matter.|p = I/c|Pa|light pressure
Plane electromagnetic wave|An ideal wave whose constant-phase surfaces are planes and whose fields are transverse to propagation.|||plane wave
Wave impedance|The ratio of electric-field amplitude to magnetic-field amplitude in a traveling electromagnetic wave.|Z = E/H|Ω|electromagnetic impedance
Intrinsic impedance|The characteristic wave impedance of a homogeneous medium.|η = √(μ/ε)|Ω|medium impedance
Polarization ellipse|The curve traced by the electric-field tip at a fixed point for a generally polarized wave.|||polarization state ellipse
Jones vector|A complex two-component vector representing the amplitude and phase of a fully polarized wave.|||Jones polarization vector
Stokes parameters|Four measurable quantities that completely describe the polarization state of a beam, including partial polarization.|S₀,S₁,S₂,S₃||polarization Stokes vector
Brewster angle|The incidence angle at which reflected light with electric field in the plane of incidence vanishes.|tan θ_B = n₂/n₁|rad|polarizing angle
Fresnel equations|Equations giving reflection and transmission amplitudes at an interface between two media.|||Fresnel relations
Optical path length|The refractive index integrated along the geometrical path traveled by light.|OPL = ∫n ds|m|optical distance
Coherence time|The characteristic time interval over which a wave maintains predictable phase correlation.|τ_c|s
Coherence length|The propagation distance over which a wave maintains substantial phase correlation.|L_c ≈ cτ_c|m|optical coherence length
Temporal coherence|Phase correlation between a wave and a time-delayed version of itself.|||longitudinal coherence
Spatial coherence|Phase correlation between different points across a wavefront at the same time.|||transverse coherence
Michelson interferometer|A two-beam interferometer that splits light into perpendicular paths and recombines it to measure phase differences.|||Michelson apparatus
Fabry-Perot interferometer|An interferometer using multiple reflections between parallel partially reflecting surfaces to produce sharp resonances.|||Fabry–Pérot etalon
Diffraction grating equation|The condition for principal maxima from a periodic array of slits or grooves.|d sin θ = mλ||grating formula
Numerical aperture|A measure of an optical system's ability to collect light and resolve detail.|NA = n sin θ||light-gathering power
Fiber-optic cable|A cable that guides light through transparent fibers for communication or sensing.|||optical fiber cable
Total internal reflection fiber|An optical fiber that confines light in a higher-index core through total internal reflection.|||step-index light guide
Single-mode fiber|An optical fiber with a small core that supports only the fundamental propagation mode.|||monomode fiber
Multimode fiber|An optical fiber with a larger core that supports many propagation modes.|||multi-mode fiber
Modal dispersion|Pulse spreading caused by different modes taking different paths or having different group velocities in a fiber.|||intermodal dispersion
Chromatic dispersion|Pulse spreading because different wavelengths propagate with different group velocities.|||wavelength dispersion
Attenuation coefficient|A measure of exponential reduction in wave intensity or amplitude per unit distance.|I = I₀e^(-αx)|m⁻¹|absorption coefficient
Optical amplifier|A device that increases optical signal power directly without first converting the signal to electricity.|||light amplifier
Laser cavity|The optical resonator containing a laser gain medium and mirrors that provide feedback.|||laser resonator
Population inversion|A nonequilibrium condition in which more particles occupy an upper laser level than a lower level.|||inverted population
Stimulated emission cross-section|An effective area quantifying the probability that a photon stimulates emission from an excited particle.|σ_e|m²|emission cross-section
Q-switching|A laser technique that stores energy and then rapidly increases cavity quality to produce a short intense pulse.|||giant-pulse operation
Mode locking|A laser technique that fixes the phases of longitudinal modes to produce a train of ultrashort pulses.|||phase locking of laser modes
Pulse broadening|An increase in pulse duration during propagation because of dispersion, modal delay or nonlinear effects.|||temporal pulse spreading
Group velocity dispersion|Variation of group velocity with frequency that causes different spectral components of a pulse to separate.|β₂ = d²β/dω²|s²/m|GVD
''')

ADDITIONS += parse_rows("Particle Physics and Field Theory", r'''
Elementary particle|A particle with no known internal structure in the current Standard Model.|||fundamental particle
Fermion|A particle with half-integer spin that obeys Fermi-Dirac statistics and the Pauli exclusion principle.|||matter particle
Gauge boson|A boson that mediates a fundamental interaction associated with a gauge symmetry.|||force carrier
Gluon|The massless gauge boson that carries the strong interaction between color-charged particles.|||strong-force boson
W boson|A massive charged gauge boson that mediates charged-current weak interactions.|||W particle
Z boson|A massive neutral gauge boson that mediates neutral-current weak interactions.|||Z particle
Neutrino oscillation|The change of a neutrino's flavor during propagation because flavor states are mixtures of mass states.|||neutrino flavor oscillation
Flavor quantum number|A label distinguishing particle species such as electron, muon, tau or different quark types.|||particle flavor
Color charge|The three-valued strong-interaction charge carried by quarks and gluons.|||QCD color
Electroweak interaction|The unified description of electromagnetic and weak interactions at sufficiently high energy.|||electroweak force
Quantum chromodynamics|The quantum gauge theory of quarks, gluons and the strong interaction.|||QCD
Quantum electrodynamics|The relativistic quantum field theory of charged particles and electromagnetic interactions.|||QED
Gauge symmetry|A symmetry under position-dependent transformations that requires gauge fields and constrains interactions.|||local symmetry
Spontaneous symmetry breaking|A situation in which governing equations have a symmetry but the physical ground state does not.|||SSB
Higgs mechanism|The process by which electroweak gauge bosons and elementary fermions acquire mass through coupling to the Higgs field.|||electroweak symmetry breaking mechanism
Feynman diagram|A graphical bookkeeping representation of terms in a perturbative quantum-field calculation.|||interaction diagram
Virtual particle|An internal, generally off-shell excitation appearing in quantum-field calculations rather than as a directly detected free particle.|||off-shell particle
Cross section|An effective area measuring the probability of a specified scattering or reaction process.|σ|m²|reaction cross section
Scattering amplitude|A complex quantity whose magnitude and phase determine probabilities for a scattering process.|||transition amplitude
Decay rate|The probability per unit time that an unstable state decays.|Γ = 1/τ|s⁻¹|decay constant
Branching ratio|The fraction of decays that proceed through a particular final state.|BR = Γ_i/Γ_total||branching fraction
Particle lifetime|The mean time an unstable particle exists before decaying.|τ = 1/Γ|s|mean lifetime
Resonance particle|A short-lived state observed as a peak in reaction probability versus energy.|||particle resonance
Antiparticle|A particle with the same mass and spin as another particle but opposite additive quantum numbers.|||anti-particle
Pair production threshold|The minimum available energy required to create a particle-antiparticle pair.|E_min ≥ 2mc²|J|pair-creation threshold
Annihilation cross section|The effective area characterizing the probability of particle-antiparticle annihilation.|σ_ann|m²
Baryon|A hadron made of three valence quarks, such as a proton or neutron.|||three-quark hadron
Meson|A hadron whose valence structure is a quark-antiquark pair.|||quark-antiquark hadron
Hadron|A composite particle made of quarks bound by the strong interaction.|||strongly interacting composite particle
Baryon number|An additive quantum number equal to one for baryons, minus one for antibaryons and zero for nonbaryons.|B||baryonic charge
Lepton number|An additive quantum number used to count leptons minus antileptons, either in total or by flavor.|L||leptonic number
Strangeness|A flavor quantum number associated with the presence of strange quarks and antiquarks.|S||strange quantum number
Isospin|An approximate symmetry treating up and down quarks, or related hadrons, as states of one multiplet.|I||isotopic spin
Charge conjugation|A transformation that replaces particles with their antiparticles and reverses internal charges.|C||C transformation
Parity symmetry|Symmetry under inversion of all spatial coordinates.|P||spatial inversion symmetry
Time-reversal symmetry|Symmetry under reversal of the direction of time in the equations describing a process.|T||T symmetry
CPT symmetry|The fundamental symmetry of local Lorentz-invariant quantum field theory under combined charge conjugation, parity inversion and time reversal.|||CPT theorem
CP violation|A difference between a process and its combined charge-conjugated, parity-inverted counterpart.|||charge-parity violation
Neutrino mass hierarchy|The ordering of the three neutrino mass eigenvalues, commonly described as normal or inverted.|||neutrino mass ordering
Dark photon|A hypothetical gauge boson that could mediate interactions in a hidden sector and weakly mix with the ordinary photon.|||hidden photon
''')

ADDITIONS += parse_rows("Plasma Physics", r'''
Plasma state|A state of matter containing mobile charged particles and showing collective electromagnetic behavior.|||ionized gas
Ionization fraction|The fraction of atoms or molecules in a gas that are ionized.|||degree of ionization
Quasineutrality|The condition that positive and negative charge densities nearly cancel over distances much larger than the Debye length.|||quasi-neutral plasma
Debye length|The characteristic distance over which electric potentials are screened in a plasma.|λ_D = √(ε₀k_BT_e/(n_e e²))|m|Debye radius
Debye shielding|The redistribution of plasma charges that reduces the electric field of an inserted charge beyond a Debye length.|||electrostatic shielding in plasma
Plasma frequency|The natural collective oscillation frequency of a charged species in a plasma.|ω_p = √(nq²/(ε₀m))|rad/s
Electron plasma frequency|The natural frequency of collective electron oscillations against nearly stationary ions.|ω_pe = √(n_e e²/(ε₀m_e))|rad/s
Ion plasma frequency|The natural collective oscillation frequency associated with plasma ions.|ω_pi = √(n_i Z²e²/(ε₀m_i))|rad/s
Plasma parameter|The approximate number of charged particles inside a Debye sphere, indicating how collective the plasma is.|N_D = (4π/3)nλ_D³||particles per Debye sphere
Collective behavior|Plasma response governed by coordinated motion of many particles through self-consistent electric and magnetic fields.|||collective plasma effects
Langmuir wave|A high-frequency electrostatic wave involving electron-density oscillations in a plasma.|||electron plasma wave
Ion acoustic wave|A low-frequency compressional plasma wave in which ion inertia is balanced by electron pressure.|||ion sound wave
Alfven wave|A magnetohydrodynamic wave in which magnetic tension restores transverse disturbances along a magnetic field.|v_A = B/√(μ₀ρ)|m/s|Alfvén wave
Magnetohydrodynamics|A fluid description of electrically conducting media coupled to magnetic fields.|||MHD
Magnetic pressure|An effective pressure associated with magnetic-field energy density.|p_B = B²/(2μ₀)|Pa
Plasma beta|The ratio of thermal pressure to magnetic pressure in a plasma.|β = p/(B²/2μ₀)||beta parameter
Larmor radius|The radius of a charged particle's circular gyromotion around a magnetic-field line.|r_L = mv_⊥/(∣q∣B)|m|gyroradius
Gyrofrequency|The angular frequency of a charged particle's gyromotion in a magnetic field.|ω_c = ∣q∣B/m|rad/s|cyclotron frequency
Cyclotron resonance|Resonant interaction occurring when an applied wave frequency matches a particle's gyrofrequency.|||gyroresonance
Magnetic mirror|A magnetic-field configuration that reflects charged particles from regions of stronger field.|||mirror confinement
Magnetic confinement|The use of magnetic fields to restrict the motion of a hot plasma away from material walls.|||magnetic plasma confinement
Tokamak|A toroidal magnetic-confinement device using strong magnetic fields and a plasma current.|||toroidal fusion reactor
Stellarator|A toroidal confinement device whose twisted external coils provide the required magnetic geometry without a large plasma current.|||stellarator fusion device
Inertial confinement fusion|Fusion in which a small fuel target is rapidly compressed and heated so inertia confines it briefly.|||ICF
Magnetic reconnection|A process in which magnetic-field topology changes and stored magnetic energy is rapidly converted into particle and thermal energy.|||field-line reconnection
''')

ADDITIONS += parse_rows("Geophysics, Atmospheric and Environmental Physics", r'''
Geopotential|The gravitational potential energy per unit mass relative to a reference level in Earth's gravity field.|Φ = U/m|J/kg|geopotential energy
Geoid|An equipotential surface of Earth's gravity field that closely matches global mean sea level.|||gravity-reference surface
Gravity anomaly|The difference between measured gravity and a reference gravity model after specified corrections.|||gravitational anomaly
Bouguer anomaly|A gravity anomaly corrected for elevation and the gravitational effect of rock between the station and reference level.|||Bouguer gravity anomaly
Isostasy|The approximate gravitational equilibrium in which Earth's lithosphere floats at different elevations on the denser mantle.|||isostatic equilibrium
Seismic wave|An elastic wave that carries earthquake or artificial-source energy through Earth.|||earthquake wave
P wave|A compressional body wave in which particle motion is parallel to the direction of propagation.|||primary wave;compressional seismic wave
S wave|A shear body wave in which particle motion is perpendicular to propagation and which cannot travel through fluids.|||secondary wave;shear seismic wave
Surface seismic wave|A seismic wave that travels mainly along Earth's surface and generally decays with depth.|||surface wave
Rayleigh wave|A surface seismic wave with retrograde elliptical particle motion in a vertical plane.|||ground-roll wave
Love wave|A horizontally polarized shear surface wave guided near Earth's surface.|||Love-type surface wave
Seismic impedance|The product of rock density and seismic-wave speed, controlling reflection at boundaries.|Z = ρv|kg/(m²·s)|acoustic impedance of rock
Earthquake magnitude|A logarithmic measure of earthquake size derived from recorded ground motion or seismic moment.|||seismic magnitude
Moment magnitude scale|A magnitude scale based on seismic moment and suitable for earthquakes of all sizes.|M_w = (2/3)log₁₀M₀ - 6.07||Mw scale
Seismic moment|A physical measure of earthquake source strength based on rigidity, fault area and average slip.|M₀ = μA D|N·m|earthquake moment
Epicenter|The point on Earth's surface vertically above an earthquake's hypocenter.|||surface earthquake location
Hypocenter|The point within Earth where earthquake rupture begins.|||earthquake focus
Plate tectonics|The theory that Earth's lithosphere is divided into moving plates whose interactions shape geological activity.|||tectonic plate theory
Geomagnetic field|The magnetic field surrounding Earth, generated mainly by motion in the liquid outer core.|||Earth magnetic field
Dynamo theory|The theory that motion of an electrically conducting fluid can sustain a planetary or stellar magnetic field.|||geodynamo theory
Atmospheric pressure profile|The variation of atmospheric pressure with altitude.|||vertical pressure distribution
Barometric formula|The relation describing how atmospheric pressure decreases with height under specified temperature assumptions.|p = p₀e^(-Mgh/RT)|Pa|exponential atmosphere formula
Lapse rate|The rate at which atmospheric temperature changes with altitude.|Γ = -dT/dz|K/km|temperature lapse rate
Adiabatic lapse rate|The temperature-change rate of a rising or sinking air parcel when it exchanges no heat with its surroundings.|Γ_d = g/c_p|K/km|dry adiabatic lapse rate
Environmental lapse rate|The observed rate at which the surrounding atmospheric temperature changes with altitude at a given place and time.|Γ_env|K/km|ambient lapse rate
''')

ADDITIONS += parse_rows("Medical and Biological Physics", r'''
Biomechanics|The application of mechanics to forces, motion and deformation in living systems.|||biological mechanics
Bioelectric potential|An electric potential produced by charge separation and ionic currents in biological tissue.|||biopotential
Membrane potential|The electric-potential difference across a biological cell membrane.|V_m|V|transmembrane potential
Action potential|A rapid, temporary change in membrane potential that propagates along excitable cells.|||nerve impulse
Nernst potential|The equilibrium membrane potential for one ion species determined by its concentration ratio.|E = (RT/zF) ln(c_out/c_in)|V|equilibrium potential
Goldman equation|An equation estimating membrane voltage when several ion species with different permeabilities contribute.|V_m = (RT/F) ln[(ΣP_c c_out + ΣP_a a_in)/(ΣP_c c_in + ΣP_a a_out)]|V|Goldman-Hodgkin-Katz equation
Diffusion across membrane|Net molecular transport across a membrane from higher chemical potential or concentration toward lower values.|||transmembrane diffusion
Osmosis pressure|The pressure required to stop solvent flow through a semipermeable membrane caused by a concentration difference.|π = iCRT|Pa|osmotic pressure
Blood pressure|The force per unit area exerted by circulating blood on vessel walls.|p = F/A|Pa|vascular pressure
Poiseuille flow|Steady laminar flow through a long cylindrical tube, with flow rate strongly dependent on radius.|Q = πΔPr⁴/(8ηL)|m³/s|Hagen-Poiseuille flow
Compliance of blood vessel|The change in vessel volume per unit change in internal pressure.|C = ΔV/ΔP|m³/Pa|vascular compliance
Surface tension in alveoli|The contractile effect at the air-liquid interface in lung alveoli, reduced by pulmonary surfactant.|||alveolar surface tension
Laplace law in physiology|The relation connecting pressure difference, wall tension and radius in curved biological structures.|ΔP = 2γ/r|Pa|Laplace pressure law
Ultrasound imaging|Medical imaging that forms pictures from echoes of high-frequency sound waves.|||diagnostic sonography
Acoustic impedance matching|The reduction of sound reflection by making acoustic impedances at an interface more similar.|Z = ρc|Pa·s/m|ultrasound coupling
Doppler ultrasound|Ultrasound measurement of blood or tissue velocity using the frequency shift of reflected waves.|Δf = 2f₀v cosθ/c|Hz|Doppler sonography
X-ray attenuation|The reduction of X-ray intensity by absorption and scattering as radiation passes through matter.|I = I₀e^(-μx)||X-ray absorption
Computed tomography|Imaging that reconstructs cross-sectional maps of X-ray attenuation from many projection measurements.|||CT scan;CAT scan;computerized tomography
''')

EXPECTED_ADDITIONS = 308
EXPECTED_TOTAL = 1000


def validate_basic(entries: list[dict[str, Any]]) -> None:
    if len(entries) != EXPECTED_ADDITIONS:
        raise ValueError(f"Expected {EXPECTED_ADDITIONS} additions, found {len(entries)}")
    slugs = [entry["slug"] for entry in entries]
    if len(slugs) != len(set(slugs)):
        duplicates = sorted({slug for slug in slugs if slugs.count(slug) > 1})
        raise ValueError(f"Duplicate addition slugs: {duplicates}")


def assign_related_terms(entries: list[dict[str, Any]], all_slugs: set[str]) -> None:
    by_category: dict[str, list[dict[str, Any]]] = {}
    for entry in entries:
        by_category.setdefault(entry["category"], []).append(entry)
    for category_entries in by_category.values():
        for index, entry in enumerate(category_entries):
            candidates: list[str] = []
            for offset in (1, -1, 2, -2, 3, -3):
                other_index = index + offset
                if 0 <= other_index < len(category_entries):
                    candidates.append(category_entries[other_index]["slug"])
            entry["relatedTerms"] = [slug for slug in candidates if slug in all_slugs][:4]


def write_term_list(entries: list[dict[str, Any]]) -> None:
    categories: dict[str, list[dict[str, Any]]] = {}
    for entry in entries:
        categories.setdefault(entry["category"], []).append(entry)
    lines = [
        "# Physics Dictionary Term List",
        "",
        f"Total concepts: **{len(entries)}**",
        "",
        "This index is generated from `src/data/physics-dictionary.json`.",
        "",
    ]
    for category, category_entries in categories.items():
        lines += [f"## {category} ({len(category_entries)})", ""]
        for entry in sorted(category_entries, key=lambda item: item["title"].lower()):
            lines.append(f"- [{entry['title']}](/physics-dictionary/{entry['slug']})")
        lines.append("")
    TERM_LIST_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    validate_basic(ADDITIONS)
    existing: list[dict[str, Any]] = json.loads(DATA_PATH.read_text(encoding="utf-8"))
    addition_slugs = {entry["slug"] for entry in ADDITIONS}
    base_entries = [entry for entry in existing if entry["slug"] not in addition_slugs]
    anticipated_slugs = {entry["slug"] for entry in base_entries}.union(addition_slugs)
    assign_related_terms(ADDITIONS, anticipated_slugs)
    merged = base_entries + ADDITIONS
    if len(existing) <= EXPECTED_TOTAL and len(merged) != EXPECTED_TOTAL:
        raise ValueError(f"Expected final total {EXPECTED_TOTAL}, found {len(merged)}")
    if len(merged) < EXPECTED_TOTAL:
        raise ValueError(f"Dictionary must contain at least {EXPECTED_TOTAL} entries, found {len(merged)}")

    all_slugs = {entry["slug"] for entry in merged}

    required = {"title", "slug", "category", "categorySlug", "definition", "explanation", "aliases", "relatedTerms", "priority"}
    for entry in merged:
        missing = required.difference(entry)
        if missing:
            raise ValueError(f"{entry.get('title', '<untitled>')} is missing {sorted(missing)}")
        invalid_related = [slug for slug in entry["relatedTerms"] if slug not in all_slugs]
        if invalid_related:
            raise ValueError(f"{entry['title']} has invalid related terms: {invalid_related}")

    merged.sort(key=lambda entry: (entry["category"].lower(), entry["title"].lower()))
    DATA_PATH.write_text(json.dumps(merged, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_term_list(merged)

    categories = len({entry["category"] for entry in merged})
    formulas = sum(bool(entry.get("formula")) for entry in merged)
    units = sum(bool(entry.get("unit")) for entry in merged)
    aliases = sum(bool(entry.get("aliases")) for entry in merged)
    high_interest = sum(entry["priority"] == "high-interest" for entry in merged)
    print(json.dumps({
        "concepts": len(merged),
        "newConcepts": len(ADDITIONS),
        "categories": categories,
        "formulas": formulas,
        "units": units,
        "entriesWithAliases": aliases,
        "highInterest": high_interest,
    }, indent=2))


if __name__ == "__main__":
    main()
