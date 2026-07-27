import json, re
from pathlib import Path

OUT = Path('/mnt/data/eduverse_dictionary/src/data/physics-dictionary.json')

def rows(category, text):
    result=[]
    for raw in text.strip().splitlines():
        if not raw.strip() or raw.lstrip().startswith('#'):
            continue
        parts=[p.strip() for p in raw.split('|')]
        while len(parts)<5: parts.append('')
        title, definition, formula, unit, aliases = parts[:5]
        result.append({
            'title': title,
            'category': category,
            'definition': definition,
            **({'formula': formula} if formula else {}),
            **({'unit': unit} if unit else {}),
            'aliases': [a.strip() for a in aliases.split(';') if a.strip()],
        })
    return result

CONTEXT = {
'Measurement and Mathematical Tools': 'It is part of the language and measurement framework used to express physical laws clearly and check calculations.',
'Kinematics': 'It is used to describe how objects move, independent of the forces that produce the motion.',
'Dynamics and Forces': 'It helps connect forces and interactions to changes in an object’s motion or equilibrium.',
'Work, Energy and Power': 'It is used to track energy transfers and determine how forces produce physical change.',
'Momentum and Collisions': 'It is especially useful for interactions that occur over short times or within isolated systems.',
'Circular and Rotational Motion': 'It describes motion about an axis or along a curved path and connects linear and angular quantities.',
'Gravitation and Orbits': 'It is used to explain attraction between masses and the motion of planets, satellites and falling bodies.',
'Properties of Matter and Fluids': 'It describes how solids, liquids and gases respond to forces, pressure and deformation.',
'Oscillations, Waves and Sound': 'It helps explain repeating motion and the transfer of energy through waves and vibrations.',
'Thermal Physics and Thermodynamics': 'It relates temperature, heat, energy, matter and the direction of macroscopic processes.',
'Electrostatics and Capacitance': 'It describes electric charges at rest, their fields and the storage of electric energy.',
'Current Electricity and Circuits': 'It is used to analyze moving charge, electrical components and complete circuits.',
'Magnetism, Induction and AC': 'It connects magnetic fields, electric currents, induction and alternating-current systems.',
'Optics and Light': 'It explains how light propagates, forms images and interacts with matter and optical devices.',
'Modern, Quantum, Atomic and Nuclear Physics': 'It is used to describe matter and radiation at atomic, subatomic and high-energy scales.',
'Relativity': 'It becomes important at very high speeds, in strong gravitational fields or when describing spacetime.',
'Astrophysics and Cosmology': 'It applies physical laws to stars, galaxies, compact objects and the evolution of the universe.',
}

entries=[]
entries += rows('Measurement and Mathematical Tools', r'''
Physical quantity|A measurable property expressed by a numerical value and a unit.|||measurable quantity
SI unit|A unit belonging to the International System of Units, the standard system used in science and engineering.|||International System of Units;metric unit
Base quantity|A fundamental measured quantity from which other physical quantities are derived.|||fundamental quantity
Derived quantity|A physical quantity defined by combining base quantities mathematically.|||derived physical quantity
Scalar quantity|A physical quantity completely described by magnitude alone.|||scalar
Vector quantity|A physical quantity that has both magnitude and direction.|||vector
Magnitude|The size or numerical strength of a scalar or vector quantity, independent of direction.|||size of vector
Dimension|The dependence of a physical quantity on base quantities such as mass, length and time.|||physical dimension
Dimensional formula|A symbolic expression showing the powers of base dimensions in a physical quantity.|||dimensions of quantity
Dimensional analysis|A method of checking or deriving relations by comparing the dimensions of physical quantities.|||dimension checking
Significant figures|The meaningful digits in a measured or calculated value, including all certain digits and the first uncertain digit.|||significant digits;sig figs
Accuracy|How close a measured value is to the accepted or true value.|||measurement accuracy
Precision|How closely repeated measurements agree with one another.|||measurement precision
Measurement uncertainty|A quantified range that expresses reasonable doubt about a measured result.|||uncertainty;experimental uncertainty
Random error|Unpredictable variation that causes repeated measurements to scatter around a mean value.|||statistical error
Systematic error|A consistent bias that shifts measurements in the same direction because of calibration, method or equipment.|||measurement bias
Least count|The smallest measurement that an instrument scale can directly resolve.|||smallest division
Resolution|The smallest change in a quantity that a measuring instrument or detector can distinguish.|||instrument resolution
Order of magnitude|The nearest power of ten used to describe the approximate scale of a quantity.|||power of ten estimate
Scientific notation|A way of writing numbers as a coefficient multiplied by a power of ten.|||standard form
Gradient of a graph|The rate at which the vertical variable changes with the horizontal variable. |gradient = Δy/Δx||slope of graph
Area under a graph|The geometrical area between a curve and an axis, often representing an accumulated physical quantity.|||integral under graph
Direct proportionality|A relationship in which one quantity changes by the same factor as another. |y ∝ x||direct variation
Inverse proportionality|A relationship in which one quantity increases as another decreases so that their product remains constant. |y ∝ 1/x||inverse variation
Inverse-square law|A relationship in which an effect decreases in proportion to the square of the distance from a source. |I ∝ 1/r²||inverse square relationship
Reference frame|A coordinate system and clock relative to which positions and motions are measured.|||frame of reference
Coordinate system|A convention for locating points using numerical coordinates and chosen axes.|||coordinate frame
Vector component|The part of a vector resolved along a chosen direction or axis. |Aₓ = A cos θ||component of vector
Resultant vector|The single vector equal to the vector sum of two or more vectors.|||net vector;vector sum
Uncertainty propagation|The process of determining how measurement uncertainties combine in a calculated result.|||propagation of error
Percentage error|The absolute error divided by the accepted value, expressed as a percentage. |percentage error = abs(measured-accepted)/accepted × 100%|%|percent error
''')

entries += rows('Kinematics', r'''
Position|The location of an object relative to a chosen origin and coordinate system.|||location
Distance|The total length of the path travelled by an object, regardless of direction. |distance = total path length|m|path length
Displacement|The vector change in position from an initial point to a final point. |Δx = x_f - x_i|m|change in position
Speed|The rate at which distance is covered. |speed = distance/time|m/s
Average speed|Total distance travelled divided by total elapsed time. |v_avg = total distance/total time|m/s
Instantaneous speed|The speed of an object at a particular instant.|||speed at an instant
Velocity|The rate of change of displacement and therefore a vector quantity. |v = Δx/Δt|m/s
Average velocity|Total displacement divided by total elapsed time. |v_avg = Δx/Δt|m/s
Instantaneous velocity|The rate of change of position at a particular instant. |v = dx/dt|m/s
Acceleration|The rate of change of velocity with time. |a = Δv/Δt|m/s²
Uniform motion|Motion with constant velocity along a straight line.|||constant velocity motion
Non-uniform motion|Motion in which velocity changes in magnitude, direction or both.|||variable motion
Constant acceleration|Motion in which velocity changes by equal amounts in equal time intervals.|||uniform acceleration
Free fall|Motion under the influence of gravity alone, neglecting air resistance.|||falling under gravity
Gravitational acceleration|The acceleration produced by a gravitational field; near Earth’s surface its magnitude is about 9.81 m/s². |g ≈ 9.81 m/s²|m/s²|acceleration due to gravity
Terminal velocity|The constant maximum speed reached when drag balances the net driving force, usually weight.|||terminal speed
Motion graph|A graph that represents position, velocity or acceleration as a function of time.|||kinematics graph
Position-time graph|A graph of position against time whose gradient represents velocity.|||displacement-time graph;distance-time graph
Velocity-time graph|A graph of velocity against time whose gradient is acceleration and whose signed area is displacement.|||speed-time graph
Acceleration-time graph|A graph of acceleration against time whose signed area gives the change in velocity.|||acceleration graph
Kinematic equations|Equations connecting displacement, initial velocity, final velocity, acceleration and time for constant acceleration. |v=u+at; s=ut+½at²; v²=u²+2as||equations of motion;SUVAT equations
Projectile motion|Two-dimensional motion under gravity in which horizontal and vertical components can be analyzed separately.|||projectile
Trajectory|The path followed by a moving object through space.|||flight path
Horizontal range|The horizontal distance travelled by a projectile before returning to a specified vertical level. |R = u² sin 2θ/g|m|projectile range
Time of flight|The total time a projectile remains in motion between launch and landing. |T = 2u sin θ/g|s|flight time
Maximum height|The greatest vertical displacement reached by a projectile above its launch level. |H = u² sin²θ/(2g)|m|peak height
Relative velocity|The velocity of one object as measured from the frame of another object. |v_AB = v_A - v_B|m/s
Angular position|The angle locating an object relative to a reference direction about an axis. |θ|rad|angular coordinate
Angular velocity|The rate of change of angular position. |ω = dθ/dt|rad/s|angular speed
Angular acceleration|The rate of change of angular velocity. |α = dω/dt|rad/s²
Centripetal acceleration|The inward acceleration required for motion along a circular path. |a_c = v²/r = ω²r|m/s²|radial acceleration
Tangential acceleration|The acceleration tangent to a circular path that changes the object’s speed. |a_t = rα|m/s²
Relative motion|The description of an object’s position or velocity from a moving reference frame.|||motion relative to observer
Uniform circular motion|Motion at constant speed along a circular path, with continuously changing velocity direction.|||constant speed circular motion
''')

entries += rows('Dynamics and Forces', r'''
Force|A vector interaction that can change an object’s motion or deform it. |F = ma|N|push or pull
Inertia|The tendency of an object to resist changes in its state of motion.|||resistance to motion change
Mass|A measure of an object’s inertia and amount of matter.|||inertial mass
Weight|The gravitational force acting on an object. |W = mg|N|gravitational force
Newton's first law|An object remains at rest or in uniform straight-line motion unless acted on by a net external force.|||law of inertia
Newton's second law|The net force on an object equals the rate of change of its momentum; for constant mass, F = ma. |ΣF = ma|N
Newton's third law|For every force exerted by one body on another, the second exerts an equal and opposite force on the first.|||action reaction law
Net force|The vector sum of all forces acting on an object. |F_net = ΣF|N|resultant force
Normal force|A contact force exerted perpendicular to a surface.|||normal reaction
Tension|A pulling force transmitted through a taut string, rope, cable or similar connector.|||tensile force
Friction|A contact force that opposes relative motion or the tendency of motion between surfaces.|||frictional force
Static friction|Friction that prevents surfaces from beginning to slide relative to each other. |f_s ≤ μ_sN|N
Limiting friction|The maximum static friction just before sliding begins. |f_lim = μ_sN|N|maximum static friction
Kinetic friction|Friction acting between surfaces that are sliding relative to each other. |f_k = μ_kN|N|sliding friction
Rolling resistance|A resistive force opposing rolling, mainly due to deformation of the rolling body and surface.|||rolling friction
Coefficient of friction|A dimensionless ratio relating frictional force to normal force. |μ = f/N||friction coefficient
Drag force|A resistive force exerted by a fluid on an object moving through it.|||air resistance;fluid resistance
Buoyant force|The upward force exerted by a fluid on an immersed or floating object. |F_B = ρVg|N|upthrust
Thrust|A reaction force that propels an object by accelerating mass in the opposite direction.|||propulsive force
Lift|A force perpendicular to the relative fluid flow, commonly supporting aircraft wings.|||aerodynamic lift
Spring force|The restoring force exerted by a stretched or compressed spring. |F = -kx|N|elastic force
Hooke's law|Within the elastic limit, a spring’s restoring force is proportional to displacement from equilibrium. |F = -kx|N
Spring constant|A measure of a spring’s stiffness, equal to force per unit extension. |k = F/x|N/m|force constant
Elastic limit|The greatest deformation from which a material can return fully to its original shape.|||limit of elasticity
Contact force|A force that acts only when bodies touch, such as friction or the normal force.|||surface force
Non-contact force|A force acting across a distance through a field, such as gravity or electrostatic force.|||field force
Field force|A non-contact force produced by a physical field.|||force at a distance
Free-body diagram|A diagram showing an isolated object and all external forces acting on it.|||force diagram;FBD
Mechanical equilibrium|A state in which net force and net torque are both zero. |ΣF=0 and Στ=0||static equilibrium
Center of mass|The mass-weighted average position of all the matter in a body or system. |r_cm = Σmᵢrᵢ/Σmᵢ||centre of mass;COM
Center of gravity|The point through which the resultant gravitational force on a body effectively acts.|||centre of gravity;COG
Pseudo force|An apparent force introduced in an accelerating reference frame to apply Newton’s laws in that frame.|||fictitious force;inertial force
Reaction force|A force exerted in response to another interaction, often referring to a support or Newton’s third-law partner.|||support reaction
Banking angle|The tilt angle of a road or track that allows part of the normal force to provide centripetal force. |tan θ = v²/(rg)||angle of banking;banked road
Conical pendulum|A pendulum whose bob moves in a horizontal circle while the string traces a cone.|||circular pendulum
Atwood machine|A system of two masses connected by a light string over a pulley, used to study acceleration and tension.|||two mass pulley system
Mechanical advantage|The ratio of output force to input force produced by a machine. |MA = output force/input force||force multiplication
''')

entries += rows('Work, Energy and Power', r'''
Work|Energy transferred when a force produces displacement. |W = Fd cos θ|J|mechanical work
Positive work|Work done when a force component acts in the same direction as displacement.|||work greater than zero
Negative work|Work done when a force component acts opposite to displacement.|||work less than zero
Zero work|Work equal to zero because there is no displacement or the force is perpendicular to displacement.|||no mechanical work
Energy|The capacity of a system to do work or produce change.|||physical energy
Kinetic energy|Energy associated with motion. |K = ½mv²|J|energy of motion
Near-Earth gravitational potential energy|Energy associated with height in an approximately uniform gravitational field near a planet’s surface. |U = mgh|J|gravitational potential energy near Earth;GPE
Elastic potential energy|Energy stored when an elastic object is stretched or compressed. |U = ½kx²|J|spring energy
Mechanical energy|The sum of a system’s kinetic and potential energies. |E_mech = K + U|J
Conservation of energy|Energy cannot be created or destroyed, only transferred or transformed, so total energy of an isolated system remains constant.|||law of conservation of energy
Power|The rate at which work is done or energy is transferred. |P = W/t = Fv|W|rate of energy transfer
Efficiency|The fraction of input energy or power converted into useful output. |η = useful output/input × 100%|%|energy efficiency
Work-energy theorem|The net work done on an object equals its change in kinetic energy. |W_net = ΔK|J
Conservative force|A force for which work depends only on initial and final positions and can be represented by potential energy.|||path independent force
Non-conservative force|A force whose work depends on the path and often converts mechanical energy into thermal energy.|||dissipative force
Potential energy curve|A graph of potential energy against position used to identify equilibrium and allowed motion.|||potential energy diagram
Potential well|A region of lower potential energy in which a particle or object may be bound.|||energy well
Binding energy|The energy required to separate a bound system completely into its components.|||separation energy
Energy density|Energy stored or carried per unit volume. |u = E/V|J/m³
Specific energy|Energy per unit mass. |e = E/m|J/kg
Dissipation|The conversion of organized mechanical or electrical energy into less recoverable forms, usually thermal energy.|||energy loss
Kilowatt-hour|A unit of energy equal to the energy used by one kilowatt of power in one hour. |1 kWh = 3.6×10⁶ J|kWh|electrical unit
Horsepower|A non-SI unit of power; mechanical horsepower is approximately 746 watts. |1 hp ≈ 746 W|hp
Renewable energy|Energy obtained from sources replenished naturally on human timescales.|||renewable resource
Non-renewable energy|Energy obtained from finite resources that are not replenished rapidly.|||nonrenewable resource
''')

entries += rows('Momentum and Collisions', r'''
Linear momentum|The product of mass and velocity, representing quantity of translational motion. |p = mv|kg·m/s|momentum
Impulse|The product of force and the time interval over which it acts, equal to change in momentum. |J = FΔt = Δp|N·s
Impulse-momentum theorem|The net impulse on an object equals its change in momentum. |J_net = Δp|N·s
Conservation of momentum|The total momentum of an isolated system remains constant. |Σp_before = Σp_after||momentum conservation
Isolated system|A system with negligible net external force or exchange with its surroundings for the process considered.|||closed mechanical system
Collision|A short-duration interaction in which objects exert large forces on one another.|||impact
Elastic collision|A collision in which both total momentum and total kinetic energy are conserved.|||perfectly elastic collision
Inelastic collision|A collision in which momentum is conserved but kinetic energy is not.|||nonelastic collision
Perfectly inelastic collision|A collision in which the objects stick together and move with a common velocity afterward.|||completely inelastic collision
Coefficient of restitution|The ratio of relative separation speed to relative approach speed along the line of impact. |e = relative speed of separation/relative speed of approach||restitution coefficient
Center-of-momentum frame|A reference frame in which the total momentum of the system is zero.|||center of mass frame;COM frame
Recoil|Backward motion produced when momentum is carried forward by another body or expelled mass.|||kickback
Explosion|An internal process that separates parts of a system while conserving total momentum if external impulse is negligible.|||fragmentation
Ballistic pendulum|A device that measures projectile speed using an inelastic collision followed by pendulum motion.|||projectile pendulum
Two-dimensional collision|A collision in which momentum must be conserved separately in two perpendicular directions.|||oblique collision
Impact force|The large force acting over the brief duration of a collision. |F_avg = Δp/Δt|N
Momentum flux|The rate at which momentum crosses an area or is transferred by a moving fluid.|||rate of momentum transfer
Rocket equation|A relation connecting a rocket’s change in velocity to exhaust speed and changing mass. |Δv = v_e ln(m_i/m_f)|m/s|Tsiolkovsky equation
Specific impulse|A measure of rocket-engine efficiency equal to thrust divided by propellant weight flow. |I_sp = F/(ṁg₀)|s
''')

entries += rows('Circular and Rotational Motion', r'''
Circular motion|Motion along a circular path about a fixed or moving center.|||motion in a circle
Centripetal force|The inward net force required to keep an object moving along a circular path. |F_c = mv²/r = mω²r|N|radial force
Centrifugal force|An apparent outward pseudo force observed in a rotating reference frame. |F_cf = mω²r|N
Radius of circular motion|The perpendicular distance from the center or axis to the moving object. |r|m
Period|The time required for one complete cycle or revolution. |T = 1/f|s
Frequency|The number of cycles or revolutions completed per unit time. |f = 1/T|Hz
Revolutions per minute|A rotational-speed unit giving the number of complete turns each minute. |rpm|rev/min|RPM
Angular displacement|The angle through which an object rotates about an axis. |θ = s/r|rad
Angular speed|The magnitude of angular velocity. |ω = Δθ/Δt|rad/s
Rotational kinematics|The description of angular displacement, velocity and acceleration, especially for constant angular acceleration. |ω=ω₀+αt; θ=ω₀t+½αt²||angular motion equations
Torque|The turning effect of a force about an axis. |τ = rF sin θ|N·m|moment of force
Moment arm|The perpendicular distance from the axis of rotation to the force’s line of action. |τ = F r_⊥|m|lever arm
Couple|A pair of equal, opposite and parallel forces separated by a distance, producing pure torque. |τ = Fd|N·m|force couple
Moment of inertia|A measure of resistance to angular acceleration, depending on mass distribution about an axis. |I = Σmr²|kg·m²|rotational inertia
Radius of gyration|The distance from an axis at which the whole mass could be concentrated without changing moment of inertia. |I = Mk²|m
Rotational kinetic energy|Energy associated with rotation about an axis. |K_rot = ½Iω²|J
Rotational work|Energy transferred by a torque through an angular displacement. |W = τθ|J
Rotational power|The rate at which rotational work is done. |P = τω|W
Angular momentum|The rotational analogue of linear momentum. |L = Iω; L = r×p|kg·m²/s
Conservation of angular momentum|Total angular momentum remains constant when net external torque is zero. |L_i = L_f||angular momentum conservation
Rolling motion|Combined translation of a body’s center of mass and rotation about its center.|||rolling body motion
Rolling without slipping|Rolling in which the point of contact is instantaneously at rest relative to the surface. |v_cm = ωR||pure rolling
Pure rotation|Motion in which all points of a rigid body move in circles around a fixed axis.|||rotation about fixed axis
Translational motion|Motion in which all points of a rigid body have the same displacement over a given time.|||translation
Axis of rotation|The line about which a body rotates.|||rotation axis
Center of rotation|The point about which planar rotation occurs.|||instantaneous center
Parallel-axis theorem|A theorem relating moment of inertia about a parallel axis to that through the center of mass. |I = I_cm + Md²||Steiner theorem
Perpendicular-axis theorem|For a planar lamina, the moment of inertia about a perpendicular axis equals the sum about two perpendicular in-plane axes. |I_z = I_x + I_y||perpendicular axes theorem
Gyroscope|A rapidly rotating system whose angular momentum makes its axis resist changes in orientation.|||gyro
Gyroscopic effect|The tendency of a rotating body to maintain its rotation axis because of angular momentum.|||gyroscopic stability
Precession|The slow rotation of a spinning body’s axis caused by an external torque. |Ω = τ/L|rad/s
a
Rigid body|An idealized object whose distances between all pairs of points remain constant.|||rigid object
Static rotational equilibrium|A condition in which the sum of torques about any point is zero. |Στ = 0||torque equilibrium
'''.replace('\na\n','\n'))

entries += rows('Gravitation and Orbits', r'''
Gravitation|The universal attraction between objects that have mass-energy.|||gravity
Newton's law of universal gravitation|The gravitational force between two point masses is proportional to their masses and inversely proportional to separation squared. |F = Gm₁m₂/r²|N|universal gravitation law
Gravitational constant|The proportionality constant G in Newton’s law of gravitation. |G ≈ 6.67430×10⁻¹¹ N·m²/kg²|N·m²/kg²|universal gravitational constant
Gravitational field|A region in which a mass experiences gravitational force.|||gravity field
Gravitational field strength|Gravitational force per unit mass at a point. |g = F/m = GM/r²|N/kg
Gravitational potential|Potential energy per unit mass at a point in a gravitational field. |V = -GM/r|J/kg
Gravitational potential energy|Energy associated with the positions of masses in a gravitational field. |U = -GMm/r|J
Gravitational equipotential|A surface on which gravitational potential has the same value everywhere.|||equipotential surface
Shell theorem|A spherical shell attracts an external object as if all shell mass were at its center, and produces zero net field inside.|||Newton shell theorem
Orbital motion|Motion of one body around another under gravity.|||orbit
Satellite|A natural or artificial body that moves in orbit around a larger body.|||orbiting body
Orbital velocity|The tangential speed required for a specified orbit. |v = √(GM/r)|m/s|orbital speed
Escape velocity|The minimum launch speed needed to escape a gravitational field without further propulsion. |v_e = √(2GM/R)|m/s|escape speed
Geostationary orbit|A circular equatorial orbit with a period equal to Earth’s rotation, making the satellite appear fixed above one longitude.|||geosynchronous equatorial orbit
Polar orbit|An orbit passing near both poles, allowing a satellite to scan most of a planet’s surface.|||polar satellite orbit
Low Earth orbit|An Earth-centered orbit at relatively low altitude, commonly below about 2,000 km.|||LEO
Kepler's first law|Planets move in elliptical orbits with the Sun at one focus.|||law of ellipses
Kepler's second law|A line from a planet to the Sun sweeps out equal areas in equal times.|||law of equal areas
Kepler's third law|For bodies orbiting the same central mass, orbital period squared is proportional to orbital semi-major axis cubed. |T² ∝ a³||harmonic law
Ellipse|A closed curve for which the sum of distances to two fixed foci is constant.|||elliptical orbit
Periapsis|The point in an orbit closest to the central body.|||perihelion;perigee
Apoapsis|The point in an orbit farthest from the central body.|||aphelion;apogee
Weightlessness|The apparent absence of support force, typically during free fall.|||zero apparent weight
Microgravity|A condition of very small apparent weight, such as in an orbiting spacecraft.|||near weightlessness
Tidal force|A differential gravitational force across an extended body that can stretch or distort it.|||gravity gradient force
Roche limit|The closest distance at which a satellite held together mainly by self-gravity can orbit without tidal disruption.|||tidal disruption limit
Gravitational binding energy|The energy required to disperse a gravitationally bound object to infinite separation.|||gravity binding energy
''')

entries += rows('Properties of Matter and Fluids', r'''
Density|Mass per unit volume. |ρ = m/V|kg/m³|mass density
Relative density|The ratio of a substance’s density to the density of a reference substance, usually water for solids and liquids. |relative density = ρ/ρ_ref||specific gravity
Pressure|Normal force per unit area. |p = F/A|Pa
Stress|Internal restoring force per unit cross-sectional area in a deformed material. |stress = F/A|Pa
Strain|Fractional deformation, such as change in length divided by original length. |strain = ΔL/L||deformation ratio
Elasticity|The ability of a material to return to its original shape after the deforming force is removed.|||elastic behavior
Plasticity|The tendency of a material to retain permanent deformation after the load is removed.|||plastic deformation
Young's modulus|The ratio of tensile stress to tensile strain within the elastic region. |Y = tensile stress/tensile strain|Pa|modulus of elasticity
Bulk modulus|The ratio of pressure increase to fractional decrease in volume. |K = -Δp/(ΔV/V)|Pa
Shear modulus|The ratio of shear stress to shear strain in the elastic region. |G = shear stress/shear strain|Pa|modulus of rigidity
Poisson's ratio|The negative ratio of transverse strain to axial strain during uniaxial loading. |ν = - transverse strain/axial strain||Poisson ratio
Tensile strength|The maximum tensile stress a material can withstand before failure.|||ultimate tensile strength
Compressive strength|The maximum compressive stress a material can withstand before failure.|||compression strength
Yield point|The stress at which noticeable permanent deformation begins.|||yield stress
Fracture|The separation of a material into parts due to crack growth or excessive stress.|||material failure
Surface tension|Force per unit length acting along a liquid surface, arising from cohesive molecular forces. |γ = F/L|N/m
Surface energy|Energy required to create unit area of a surface. |surface energy = E/A|J/m²
Capillarity|The rise or fall of a liquid in a narrow tube due to surface tension and adhesion.|||capillary action
Contact angle|The angle at which a liquid interface meets a solid surface, indicating wetting behavior. |θ|degree|wetting angle
Viscosity|A fluid’s resistance to shear deformation or flow.|||internal friction of fluid
Dynamic viscosity|The proportionality constant between shear stress and velocity gradient in a Newtonian fluid. |τ = μ du/dy|Pa·s|absolute viscosity
Kinematic viscosity|Dynamic viscosity divided by fluid density. |ν = μ/ρ|m²/s
Laminar flow|Smooth fluid flow in orderly layers with little mixing.|||streamline flow
Turbulent flow|Irregular fluid flow containing eddies, fluctuations and strong mixing.|||turbulence
Reynolds number|A dimensionless ratio comparing inertial and viscous effects in fluid flow. |Re = ρvL/μ||Reynolds criterion
Continuity equation|A statement of mass conservation in fluid flow; for incompressible steady flow, area times speed is constant. |A₁v₁ = A₂v₂||flow continuity
Bernoulli's principle|For ideal steady flow, an increase in fluid speed is accompanied by a decrease in pressure or potential energy density. |p + ½ρv² + ρgh = constant||Bernoulli equation
Pascal's law|Pressure applied to a confined fluid is transmitted undiminished throughout the fluid.|||Pascal principle
Archimedes' principle|The buoyant force on an immersed object equals the weight of the displaced fluid. |F_B = ρ_fluid V_displaced g|N
Hydrostatic pressure|Pressure in a fluid at rest caused by the weight of fluid above. |p = p₀ + ρgh|Pa
Atmospheric pressure|Pressure exerted by the weight and molecular motion of the atmosphere.|||air pressure
Gauge pressure|Pressure measured relative to atmospheric pressure. |p_gauge = p_absolute - p_atm|Pa
Absolute pressure|Pressure measured relative to a perfect vacuum. |p_absolute = p_atm + p_gauge|Pa
Hydraulic press|A machine that multiplies force using equal pressure transmission through a confined fluid. |F₂/F₁ = A₂/A₁||hydraulic lift
Streamline|A curve whose tangent at every point gives the instantaneous fluid velocity direction.|||flow line
Stokes' law|For slow flow around a small sphere, viscous drag is proportional to radius, viscosity and speed. |F_d = 6πηrv|N
Terminal speed in a fluid|The steady speed reached when driving and resistive forces balance in a fluid.|||terminal velocity in fluid
Compressibility|The fractional change in volume produced by a pressure change. |κ = -(1/V)dV/dp|Pa⁻¹
Fluid statics|The study of fluids at rest and the pressures and forces within them.|||hydrostatics
Fluid dynamics|The study of fluids in motion.|||hydrodynamics
''')

entries += rows('Oscillations, Waves and Sound', r'''
Oscillation|Repeated motion or variation about an equilibrium state.|||vibration
Periodic motion|Motion that repeats itself after equal time intervals.|||cyclic motion
Amplitude|The maximum displacement of an oscillating quantity from equilibrium.|||maximum displacement
Phase|A quantity indicating the position within a cycle of an oscillation or wave.|||phase angle
Phase difference|The difference in phase between two oscillations or waves. |Δφ|rad
Angular frequency|The rate of phase change, equal to 2π times ordinary frequency. |ω = 2πf|rad/s
Simple harmonic motion|Oscillation in which acceleration is proportional and opposite to displacement from equilibrium. |a = -ω²x||SHM
Restoring force|A force directed toward equilibrium that tends to reverse displacement.|||returning force
Spring-mass oscillator|A mass attached to a spring that can execute simple harmonic motion. |T = 2π√(m/k)|s
Simple pendulum|An ideal point mass suspended by a light string, oscillating under gravity for small angles. |T = 2π√(L/g)|s
Damping|The reduction of oscillation amplitude due to energy loss.|||damped motion
Underdamping|Damping weak enough that oscillations continue while amplitude decays.|||underdamped motion
Critical damping|The minimum damping that returns a system to equilibrium without oscillation.|||critically damped motion
Overdamping|Damping stronger than critical, producing a slow non-oscillatory return to equilibrium.|||overdamped motion
Forced oscillation|Oscillation maintained by an external periodic driving force.|||driven oscillation
Resonance|A large response that occurs when driving frequency is near a system’s natural frequency.|||mechanical resonance
Natural frequency|A frequency at which a system oscillates freely after being disturbed.|||eigenfrequency
Quality factor|A dimensionless measure of resonance sharpness and energy storage relative to energy loss. |Q = f₀/Δf||Q factor
Wave|A disturbance that transfers energy and momentum without net transport of matter over long distances.|||wave motion
Transverse wave|A wave in which oscillations are perpendicular to the direction of propagation.|||transverse disturbance
Longitudinal wave|A wave in which oscillations are parallel to the direction of propagation.|||compression wave
Mechanical wave|A wave that requires a material medium to propagate.|||matter wave in medium
Wavelength|The distance between successive points in the same phase of a wave. |λ|m
Wave speed|The speed at which a wave disturbance or phase propagates. |v = fλ|m/s
Wavefront|A surface joining points of equal phase in a wave.|||constant phase surface
Wave ray|A line perpendicular to wavefronts showing the direction of wave propagation.|||ray direction
Principle of superposition|When waves overlap in a linear medium, the resultant displacement is the sum of individual displacements.|||wave superposition
Interference|The combination of overlapping waves to produce a resultant pattern.|||wave interference
Constructive interference|Interference in which waves reinforce one another, producing greater amplitude.|||reinforcement
Destructive interference|Interference in which waves oppose one another, reducing or cancelling amplitude.|||cancellation
Standing wave|A stationary interference pattern formed by two waves of the same frequency travelling in opposite directions.|||stationary wave
Node|A point in a standing wave where displacement is always zero.|||wave node
Antinode|A point in a standing wave where oscillation amplitude is maximum.|||wave antinode
Harmonic|A frequency that is an integer multiple of a fundamental frequency.|||harmonic frequency
Fundamental frequency|The lowest natural frequency of a vibrating system.|||first harmonic
Overtone|Any natural frequency above the fundamental; its numbering need not match harmonic numbering.|||upper partial
Beat frequency|The rate of amplitude pulsation produced by two nearby frequencies. |f_beat = abs(f₁-f₂)|Hz|beats
Doppler effect|The observed change in frequency caused by relative motion between source and observer.|||Doppler shift
Sound wave|A mechanical pressure wave that can be perceived as sound within an appropriate frequency range.|||acoustic wave
Pitch|The perceptual quality mainly associated with sound frequency.|||highness or lowness of sound
Loudness|The subjective perception of sound strength, influenced mainly by intensity and frequency.|||perceived sound level
Sound intensity|Sound power transmitted per unit area. |I = P/A|W/m²
Sound intensity level|A logarithmic measure of sound intensity relative to a reference intensity. |β = 10 log₁₀(I/I₀)|dB|sound level
Decibel|A logarithmic unit used for ratios such as sound intensity level. |dB|dB
Timbre|The quality that distinguishes sounds with the same pitch and loudness due to their harmonic content and envelope.|||tone color
Ultrasound|Sound with frequency above the upper limit of typical human hearing, about 20 kHz.|||ultrasonic sound
Infrasound|Sound with frequency below the lower limit of typical human hearing, about 20 Hz.|||infrasonic sound
Echo|A reflected sound heard as a distinct repetition after sufficient delay.|||sound reflection
Reverberation|Persistence of sound caused by many closely spaced reflections after the source stops.|||room reverberation
Acoustic impedance|The ratio of sound pressure to particle velocity in a medium. |Z = ρv|Pa·s/m
''')

entries += rows('Thermal Physics and Thermodynamics', r'''
Temperature|A measure related to the average microscopic energy and thermal state of a system, determining the direction of heat flow.|||thermal temperature
Heat|Energy transferred between systems because of a temperature difference. |Q|J|thermal transfer
Thermal energy|The internal energy associated with microscopic random motion and interactions of particles.|||heat energy
Thermal equilibrium|A state in which systems in thermal contact have no net heat transfer and share the same temperature.|||same temperature state
Zeroth law of thermodynamics|If two systems are each in thermal equilibrium with a third, they are in thermal equilibrium with each other.|||zeroth law
Thermometer|An instrument that measures temperature through a reproducible temperature-dependent property.|||temperature sensor
Kelvin scale|An absolute temperature scale whose zero is absolute zero. |T(K) = t(°C) + 273.15|K|absolute temperature scale
Celsius scale|A temperature scale with water freezing near 0 °C and boiling near 100 °C at standard pressure.|||centigrade scale
Fahrenheit scale|A temperature scale with water freezing at 32 °F and boiling at 212 °F at standard pressure.|||Fahrenheit temperature
Absolute zero|The theoretical lowest temperature, 0 K, corresponding to minimum thermal energy allowed by quantum mechanics. |0 K = -273.15 °C|K
Heat capacity|The heat required to raise an object’s temperature by one kelvin. |C = Q/ΔT|J/K
Specific heat capacity|The heat required to raise the temperature of one kilogram of a substance by one kelvin. |c = Q/(mΔT)|J/(kg·K)|specific heat
Calorimetry|The measurement of heat transfer using temperature changes and known thermal properties.|||heat measurement
Latent heat|Energy absorbed or released during a phase change without temperature change. |Q = mL|J
Specific latent heat|Energy required per unit mass for a phase change at constant temperature. |L = Q/m|J/kg
Phase change|A transition between solid, liquid, gas or other phases of matter.|||change of state
Melting point|The temperature at which solid and liquid phases coexist in equilibrium at a specified pressure.|||fusion point
Boiling point|The temperature at which a liquid’s vapor pressure equals the surrounding pressure.|||boiling temperature
Evaporation|Vaporization occurring at a liquid surface below the boiling point.|||surface vaporization
Condensation|The phase change from gas or vapor to liquid.|||liquefaction
Sublimation|A direct phase change between solid and gas without passing through the liquid phase.|||solid gas transition
Conduction|Heat transfer through microscopic collisions and interactions without bulk movement of matter.|||thermal conduction
Convection|Heat transfer by bulk motion of a fluid.|||convective heat transfer
Thermal radiation|Energy transfer by electromagnetic waves emitted because of temperature.|||radiative heat transfer
Thermal conductivity|A material property measuring ability to conduct heat. |q/t = kAΔT/L|W/(m·K)
Blackbody|An ideal object that absorbs all incident radiation and emits the maximum possible thermal radiation at its temperature.|||perfect absorber
Emissivity|The ratio of radiation emitted by a real surface to that emitted by a blackbody at the same temperature. |0 ≤ ε ≤ 1||emission coefficient
Stefan-Boltzmann law|The radiant power emitted per area by a blackbody is proportional to the fourth power of absolute temperature. |P = εσAT⁴|W
Wien's displacement law|The wavelength of maximum blackbody emission is inversely proportional to absolute temperature. |λ_max T = b|m·K
Thermal expansion|The increase in dimensions of a material when its temperature rises.|||heat expansion
Linear expansion|Change in length proportional to original length and temperature change. |ΔL = αL₀ΔT|m
Volume expansion|Change in volume proportional to original volume and temperature change. |ΔV = βV₀ΔT|m³
Ideal gas|A model gas of point particles with negligible intermolecular forces except during elastic collisions.|||perfect gas
Ideal gas law|The equation relating pressure, volume, amount of substance and absolute temperature for an ideal gas. |pV = nRT||equation of state
Mole|The amount of substance containing exactly 6.02214076×10²³ specified entities. |1 mol = N_A entities|mol
Avogadro constant|The number of constituent particles in one mole. |N_A = 6.02214076×10²³ mol⁻¹|mol⁻¹
Kinetic theory of gases|A microscopic model explaining gas properties through random particle motion and collisions.|||molecular theory of gases
Root-mean-square speed|The square root of the mean squared molecular speed in a gas. |v_rms = √(3RT/M)|m/s|RMS speed
Internal energy|The total microscopic kinetic and potential energy within a system. |U|J
First law of thermodynamics|The change in internal energy equals heat added to the system minus work done by the system. |ΔU = Q - W|J
Second law of thermodynamics|A law stating that total entropy of an isolated system does not decrease and that heat naturally flows from hotter to colder bodies.|||second law
Entropy|A thermodynamic state function measuring energy dispersal and the number of accessible microscopic arrangements. |dS = δQ_rev/T|J/K
Heat engine|A device that converts part of heat absorbed from a hot reservoir into work while rejecting the remainder. |η = W_out/Q_hot||thermal engine
Refrigerator|A device that uses work to transfer heat from a colder region to a hotter region.|||cooling machine
Coefficient of performance|The ratio of desired heat transfer to work input for a refrigerator or heat pump. |COP = Q_cold/W||COP
Carnot cycle|An ideal reversible cycle that gives the maximum possible efficiency between two temperatures. |η_C = 1 - T_c/T_h||Carnot engine
Isothermal process|A thermodynamic process at constant temperature. |ΔT = 0||constant temperature process
Adiabatic process|A thermodynamic process with no heat transfer between system and surroundings. |Q = 0||thermally insulated process
Isobaric process|A thermodynamic process at constant pressure. |Δp = 0||constant pressure process
Isochoric process|A thermodynamic process at constant volume. |ΔV = 0||isovolumetric process
PV diagram|A graph of pressure against volume used to represent thermodynamic processes; enclosed area can represent net work.|||pressure volume diagram
''')

entries += rows('Electrostatics and Capacitance', r'''
Electric charge|A fundamental property of matter responsible for electric interactions; charge can be positive or negative. |q|C|charge
Elementary charge|The magnitude of the charge carried by a proton or electron. |e = 1.602176634×10⁻¹⁹ C|C
Conservation of charge|The total electric charge of an isolated system remains constant.|||charge conservation
Quantization of charge|Electric charge occurs in discrete multiples of the elementary charge. |q = ne||discrete charge
Conductor|A material containing charge carriers that can move freely through it.|||electrical conductor
Insulator|A material in which electric charges are strongly bound and do not move freely.|||electrical insulator;dielectric material
Coulomb's law|The electrostatic force between point charges is proportional to the product of charges and inversely proportional to separation squared. |F = kq₁q₂/r²|N|electrostatic force law
Electric force|The force exerted on a charge by electric fields or other charges. |F = qE|N|electrostatic force
Electric field|Force per unit positive test charge at a point. |E = F/q|N/C|electrostatic field
Electric field line|An imaginary curve whose tangent gives electric-field direction and whose density indicates field strength.|||line of force
Electric flux|A measure of electric field passing through a surface. |Φ_E = ∫E·dA|N·m²/C
Gauss's law|The net electric flux through a closed surface equals enclosed charge divided by vacuum permittivity. |∮E·dA = Q_enclosed/ε₀||electric Gauss law
Electric potential|Electric potential energy per unit charge at a point. |V = U/q|V|electrostatic potential
Voltage|Electric potential difference between two points. |ΔV = W/q|V|potential difference
Electric potential energy|Energy associated with the configuration of charges in an electric field. |U = qV|J
Equipotential surface|A surface on which electric potential is constant; electric field is perpendicular to it.|||electric equipotential
Electric dipole|A pair of equal and opposite charges separated by a small distance.|||charge dipole
Electric dipole moment|A vector from negative to positive charge with magnitude charge times separation. |p = qd|C·m|dipole moment
Torque on an electric dipole|The turning effect on an electric dipole placed in an external electric field. |τ = pE sin θ|N·m
Electric polarization|Separation or alignment of bound positive and negative charges within a material.|||dielectric polarization
Dielectric|An insulating material that can be polarized by an electric field.|||insulating medium
Permittivity|A property describing how an electric field interacts with a medium. |ε|F/m
Vacuum permittivity|The permittivity constant of free space. |ε₀ ≈ 8.854×10⁻¹² F/m|F/m|electric constant
Relative permittivity|The ratio of a material’s permittivity to vacuum permittivity. |ε_r = ε/ε₀||dielectric constant
Capacitance|The amount of charge stored per unit potential difference. |C = Q/V|F
Capacitor|A component that stores separated electric charge and electric-field energy.|||condenser
Parallel-plate capacitor|A capacitor formed by two parallel conducting plates separated by an insulator. |C = εA/d|F
Capacitors in series|A connection in which capacitors carry equal charge and reciprocal capacitances add. |1/C_eq = Σ1/Cᵢ|F
Capacitors in parallel|A connection in which capacitors share voltage and capacitances add. |C_eq = ΣCᵢ|F
Energy stored in a capacitor|Electric potential energy stored in a capacitor’s electric field. |U = ½CV² = Q²/(2C)|J
Dielectric breakdown|Loss of insulating behavior when an electric field becomes strong enough to produce conduction.|||electrical breakdown
Electrostatic induction|Redistribution of charge in an object caused by a nearby charged body without direct contact.|||charging by induction
Grounding|Connecting an object to Earth so charge can flow to or from a large charge reservoir.|||earthing
Electrostatic shielding|Reduction of electric fields inside a conducting enclosure because charges redistribute on its surface.|||electric shielding
Faraday cage|A conducting enclosure that protects its interior from external static electric fields and some electromagnetic interference.|||conducting cage
Corona discharge|Ionization of air near a conductor where the electric field is especially strong.|||corona effect
Electroscope|An instrument used to detect electric charge or compare electric potentials.|||charge detector
''')

entries += rows('Current Electricity and Circuits', r'''
Electric current|The rate of flow of electric charge through a surface. |I = ΔQ/Δt|A|current
Conventional current|The assigned direction of positive charge flow, opposite to electron drift in metals.|||current direction
Drift velocity|The average directed velocity of charge carriers in an electric field. |I = nqAv_d|m/s|electron drift speed
Current density|Electric current per unit cross-sectional area, with direction of positive charge flow. |J = I/A|A/m²
Resistance|Opposition to electric current, equal to voltage divided by current for an element. |R = V/I|Ω|electrical resistance
Resistivity|A material property relating resistance to conductor length and cross-sectional area. |R = ρL/A|Ω·m|specific resistance
Electrical conductivity|A material’s ability to conduct current, equal to reciprocal resistivity. |σ = 1/ρ|S/m|conductivity
Ohm's law|For an ohmic conductor at constant physical conditions, current is proportional to voltage. |V = IR||Ohm law
Ohmic conductor|A conductor with a linear current-voltage relationship and approximately constant resistance.|||linear resistor
Non-ohmic device|A device whose current is not directly proportional to voltage.|||nonlinear electrical device
Electromotive force|Energy supplied per unit charge by a source such as a cell or generator. |ε = W/q|V|EMF
Terminal voltage|The potential difference across a source’s terminals while delivering or receiving current. |V = ε - Ir|V
Internal resistance|Resistance within a source that causes terminal voltage to differ from its emf when current flows. |r|Ω
Electric power|The rate at which electrical energy is transferred or converted. |P = VI = I²R = V²/R|W|electrical power
Electrical energy|Energy transferred by electric current over time. |E = VIt = Pt|J
Electric circuit|A connected path of electrical components through which charge can flow.|||circuit
Open circuit|A circuit with a break that prevents continuous current.|||broken circuit
Closed circuit|A complete conducting path that allows current to flow.|||complete circuit
Short circuit|A very low-resistance path that can produce dangerously large current.|||electrical short
Series circuit|A circuit connection in which components carry the same current along one path.|||series connection
Parallel circuit|A circuit connection in which components share the same voltage across separate branches.|||parallel connection
Kirchhoff's current law|At a junction, total current entering equals total current leaving. |ΣI_in = ΣI_out||junction rule;KCL
Kirchhoff's voltage law|Around a closed loop, the algebraic sum of potential changes is zero. |ΣΔV = 0||loop rule;KVL
Potential divider|A series-resistor arrangement that produces an output voltage equal to a chosen fraction of input voltage. |V_out = V_in R₂/(R₁+R₂)||voltage divider
Wheatstone bridge|A four-resistor network used to measure an unknown resistance by balancing two voltage-divider branches.|||resistance bridge
Meter bridge|A slide-wire form of Wheatstone bridge used to compare resistances.|||slide wire bridge
Potentiometer|A device or method using a uniform resistance wire or variable resistor to compare or adjust potential differences.|||voltage potentiometer
Galvanometer|A sensitive instrument that detects and measures small electric currents.|||current detector
Ammeter|An instrument connected in series to measure electric current and designed with very low resistance.|||current meter
Voltmeter|An instrument connected in parallel to measure potential difference and designed with very high resistance.|||voltage meter
Multimeter|An instrument combining measurements such as voltage, current, resistance and continuity.|||digital multimeter;DMM
Fuse|A safety device containing a conductor that melts when current exceeds a safe value.|||electrical fuse
Circuit breaker|A resettable protective switch that opens a circuit during excessive current or fault conditions.|||MCB;breaker
Resistor|A component designed to provide a specified electrical resistance.|||fixed resistor
Rheostat|A variable resistor commonly used to control current.|||variable resistor
Thermistor|A resistor whose resistance changes strongly with temperature.|||temperature dependent resistor
Light-dependent resistor|A resistor whose resistance changes with incident light intensity.|||LDR;photoresistor
Battery|One or more electrochemical cells connected to supply electrical energy.|||electric battery
Electric cell|A device that converts chemical or other energy into electrical energy between two terminals.|||electrochemical cell
Primary cell|A cell designed mainly for single-use discharge and not normal recharging.|||nonrechargeable cell
Secondary cell|A cell designed to be recharged by reversing its chemical reactions.|||rechargeable cell
RC circuit|A circuit containing resistance and capacitance, characterized by exponential charging or discharging. |τ = RC|s|resistor capacitor circuit
Time constant|The characteristic time for exponential change in circuits and other systems. |τ = RC or L/R|s
''')

entries += rows('Magnetism, Induction and AC', r'''
Magnetic field|A field that exerts forces on moving charges, currents and magnetic dipoles. |B|T|magnetic flux density
Magnetic field line|An imaginary curve tangent to the magnetic field direction.|||magnetic line of force
Magnetic flux|A measure of magnetic field passing through a surface. |Φ_B = ∫B·dA|Wb
Permeability|A material property describing how magnetic fields develop within a medium. |μ|H/m|magnetic permeability
Vacuum permeability|The magnetic permeability of free space. |μ₀ ≈ 1.25663706212×10⁻⁶ H/m|H/m|magnetic constant
Lorentz force|The total electric and magnetic force on a charged particle. |F = q(E + v×B)|N
Magnetic force on a charge|The force on a moving charge in a magnetic field, perpendicular to velocity and field. |F = qvB sin θ|N
Magnetic force on a wire|The force on a current-carrying conductor in a magnetic field. |F = BIL sin θ|N
Torque on a current loop|The turning effect on a current loop in a magnetic field. |τ = NIAB sin θ|N·m
Magnetic dipole moment|A vector measuring the strength and orientation of a current loop or magnetic dipole. |m = NIA|A·m²
Bar magnet|A permanent magnet with north and south poles.|||permanent magnet
Magnetic pole|A region of a magnet where its external magnetic field is strongest, labeled north or south.|||north pole;south pole
Earth's magnetic field|The magnetic field surrounding Earth, generated mainly by motion in its liquid outer core.|||geomagnetic field
Magnetic declination|The horizontal angle between geographic north and magnetic north.|||magnetic variation
Magnetic inclination|The angle Earth’s magnetic field makes with the horizontal.|||magnetic dip;dip angle
Ferromagnetism|Strong magnetic behavior caused by aligned atomic magnetic moments and domains.|||ferromagnetic material
Paramagnetism|Weak attraction to a magnetic field caused by partial alignment of atomic magnetic moments.|||paramagnetic material
Diamagnetism|Weak opposition to an applied magnetic field caused by induced magnetic moments.|||diamagnetic material
Magnetic domain|A region in a ferromagnetic material where many atomic magnetic moments align.|||domain
Magnetic hysteresis|Dependence of magnetization on the history of the applied magnetic field.|||hysteresis loop
Retentivity|The residual magnetization remaining after an external magnetizing field is removed.|||remanence
Coercivity|The reverse field required to reduce residual magnetization to zero.|||coercive field
Electromagnet|A magnet produced by electric current, commonly using a coil and magnetic core.|||temporary magnet
Solenoid|A long helical coil that produces an approximately uniform magnetic field inside when current flows. |B ≈ μnI|T
Toroid|A coil wound into a closed ring, confining much of its magnetic field within the core. |B = μNI/(2πr)|T
Biot-Savart law|A law giving the magnetic field contribution from a small current element. |dB = μ₀I dℓ×r̂/(4πr²)||Biot Savart law
Ampere's circuital law|The line integral of magnetic field around a closed path relates to enclosed current, with Maxwell’s correction for changing electric flux. |∮B·dℓ = μ₀I_enclosed||Ampere law
Electromagnetic induction|Production of an emf by changing magnetic flux through a circuit.|||magnetic induction
Faraday's law|The induced emf equals the negative rate of change of magnetic flux linkage. |ε = -N dΦ_B/dt|V
Lenz's law|The induced current flows in a direction that opposes the change in magnetic flux producing it.|||direction of induced current
Motional emf|An emf generated when a conductor moves through a magnetic field. |ε = Bℓv|V
Eddy current|A circulating current induced within a bulk conductor by changing magnetic flux.|||Foucault current
Self-inductance|The property by which changing current in a circuit induces an emf in the same circuit. |ε = -L dI/dt|H
Mutual inductance|The property by which changing current in one circuit induces an emf in another circuit. |ε₂ = -M dI₁/dt|H
Inductor|A component that stores energy in a magnetic field and opposes changes in current.|||coil
Energy stored in an inductor|Magnetic-field energy stored by current in an inductor. |U = ½LI²|J
Transformer|A device that transfers AC electrical energy between circuits by mutual induction, usually changing voltage and current. |V_s/V_p = N_s/N_p||electrical transformer
Step-up transformer|A transformer with more secondary turns than primary turns, producing higher secondary voltage.|||voltage step up
Step-down transformer|A transformer with fewer secondary turns than primary turns, producing lower secondary voltage.|||voltage step down
Electric generator|A machine that converts mechanical energy into electrical energy by electromagnetic induction.|||alternator;dynamo
Electric motor|A machine that converts electrical energy into mechanical rotation using magnetic forces.|||motor
Back emf|An induced emf in a motor or coil that opposes the applied voltage or change in current.|||counter emf
Alternating current|Electric current that reverses direction periodically. |i = I₀ sin ωt|A|AC
Direct current|Electric current that flows in one direction with constant or slowly varying magnitude.|||DC
Peak value|The maximum instantaneous magnitude of an alternating voltage or current. |V₀; I₀|V or A|amplitude of AC
Root-mean-square value|The effective AC value giving the same average heating as an equivalent DC value. |V_rms = V₀/√2; I_rms = I₀/√2|V or A|RMS
Reactance|Opposition to alternating current caused by capacitance or inductance, measured in ohms. |X|Ω
Inductive reactance|Opposition of an inductor to AC, increasing with frequency. |X_L = ωL|Ω
Capacitive reactance|Opposition of a capacitor to AC, decreasing with frequency. |X_C = 1/(ωC)|Ω
Impedance|The combined opposition of resistance and reactance to alternating current. |Z = √(R²+(X_L-X_C)²)|Ω
Phase angle|The angular difference between sinusoidal quantities such as AC voltage and current. |tan φ = (X_L-X_C)/R|rad
RLC resonance|The condition in a series RLC circuit when inductive and capacitive reactances are equal. |ω₀ = 1/√(LC)|rad/s
Power factor|The ratio of real power to apparent power in an AC circuit, equal to cosine of phase angle. |power factor = cos φ||PF
Electromagnetic wave|A self-propagating oscillation of electric and magnetic fields that can travel through vacuum. |c = fλ|m/s
Electromagnetic spectrum|The full range of electromagnetic radiation arranged by frequency or wavelength.|||EM spectrum
Displacement current|A term associated with changing electric flux that completes Ampere’s law in time-varying fields. |I_d = ε₀ dΦ_E/dt|A
''')

entries += rows('Optics and Light', r'''
Light|Electromagnetic radiation detectable by the human eye, commonly referring to wavelengths about 380–750 nm.|||visible light
Geometrical optics|The study of light propagation using rays, valid when wavelengths are small compared with objects and apertures.|||ray optics
Physical optics|The study of light as a wave, including interference, diffraction and polarization.|||wave optics
Reflection|The return of light or another wave from a boundary into the original medium.|||reflection of light
Law of reflection|The angle of incidence equals the angle of reflection, measured from the normal. |θ_i = θ_r||laws of reflection
Plane mirror|A flat reflecting surface that forms an upright virtual image of equal size.|||flat mirror
Spherical mirror|A mirror whose reflecting surface is part of a sphere.|||curved mirror
Concave mirror|A spherical mirror with an inward-curving reflecting surface that can converge parallel rays.|||converging mirror
Convex mirror|A spherical mirror with an outward-curving reflecting surface that diverges reflected rays.|||diverging mirror
Principal axis|The symmetry line passing through the pole and center of curvature of a spherical mirror or lens.|||optical axis
Pole of a mirror|The geometric center of a spherical mirror’s reflecting surface.|||mirror vertex
Center of curvature|The center of the sphere of which a spherical mirror is a part.|||centre of curvature
Radius of curvature|The distance from a spherical mirror’s pole to its center of curvature. |R|m
Focal point|A point where rays parallel to the principal axis converge, or appear to diverge from, after reflection or refraction.|||focus
Focal length|The distance between an optical element’s principal plane or pole and its focal point. |f|m
Mirror formula|A relation connecting object distance, image distance and focal length for a spherical mirror under the paraxial approximation. |1/f = 1/v + 1/u||mirror equation
Magnification|The ratio of image size to object size, with sign indicating orientation under a chosen convention. |m = h_i/h_o = -v/u||linear magnification
Real image|An image formed where light rays actually converge and which can be projected onto a screen.|||projectable image
Virtual image|An image formed where rays only appear to originate and which cannot be projected directly onto a screen.|||apparent image
Refraction|The change in direction and speed of a wave when it enters a medium in which its propagation speed differs.|||bending of light
Snell's law|The relation between incidence and refraction angles and the refractive indices of two media. |n₁ sin θ₁ = n₂ sin θ₂||law of refraction
Refractive index|The ratio of light speed in vacuum to its speed in a medium. |n = c/v||index of refraction
Optical density|A qualitative description of how strongly a medium slows light; it is related to refractive index, not mass density.|||optically denser medium
Total internal reflection|Complete reflection at a boundary when light travels from higher to lower refractive index above the critical angle.|||TIR
Critical angle|The incidence angle in the higher-index medium for which the refracted ray travels along the boundary. |sin θ_c = n₂/n₁||critical angle of refraction
Dispersion|Separation of light into component wavelengths because refractive index depends on wavelength.|||chromatic dispersion
Prism|A transparent optical element with nonparallel faces that refracts and can disperse light.|||optical prism
Rainbow|A spectrum produced mainly by refraction, internal reflection and dispersion of sunlight in water droplets.|||atmospheric rainbow
Lens|A transparent optical element with curved surfaces that refracts light to form images.|||optical lens
Convex lens|A lens thicker near the center that usually converges parallel rays.|||converging lens
Concave lens|A lens thinner near the center that diverges parallel rays.|||diverging lens
Optical center|A point near the center of a thin lens through which a paraxial ray passes approximately undeviated.|||optical centre
Lens formula|A relation connecting focal length, object distance and image distance for a thin lens. |1/f = 1/v - 1/u||thin lens equation
Power of a lens|The reciprocal of focal length in metres, indicating converging or diverging strength. |P = 1/f|D|lens power;diopter
Diopter|The SI-derived unit of optical power equal to one inverse metre. |1 D = 1 m⁻¹|D|dioptre
Lens maker's formula|A relation connecting a thin lens’s focal length to refractive index and surface curvatures. |1/f = (n-1)(1/R₁-1/R₂)||lens maker equation
Lenses in contact|A combination of thin lenses whose powers approximately add when placed together. |P_eq = ΣPᵢ||combined lenses
Spherical aberration|Image blur caused because rays far from an optical axis focus differently from paraxial rays.|||spherical optical aberration
Chromatic aberration|Color-dependent image blur caused by wavelength-dependent refraction in a lens.|||color aberration
Diffraction|Wave spreading and interference when light passes through an aperture or around an obstacle.|||bending around obstacle
Single-slit diffraction|A diffraction pattern formed when coherent light passes through one narrow slit. |a sin θ = mλ for minima||slit diffraction
Interference of light|Variation in intensity caused by superposition of coherent light waves.|||optical interference
Young's double-slit experiment|An experiment producing interference fringes from two coherent slits and demonstrating light’s wave nature. |fringe spacing β = λD/d||double slit experiment
Coherence|A stable phase relationship between waves, enabling sustained interference.|||coherent waves
Polarization|Restriction or organization of the electric-field vibration directions of a transverse wave.|||polarisation
Malus's law|The transmitted intensity through an analyzer varies as the square of cosine of the angle to the polarization direction. |I = I₀ cos²θ||Malus law
Brewster's angle|The incidence angle at which reflected light is fully linearly polarized and reflected and refracted rays are perpendicular. |tan θ_B = n₂/n₁||polarizing angle
Huygens' principle|Every point on a wavefront acts as a source of secondary wavelets whose envelope forms the later wavefront.|||Huygens principle
Resolving power|The ability of an optical instrument to distinguish closely spaced objects or spectral features.|||resolution of instrument
Rayleigh criterion|Two diffraction patterns are just resolved when the central maximum of one coincides with the first minimum of the other. |θ_min ≈ 1.22λ/D||diffraction resolution criterion
Microscope|An optical instrument that produces an enlarged view of small nearby objects.|||compound microscope
Telescope|An instrument that collects and magnifies radiation from distant objects.|||astronomical telescope
Human eye|The biological optical system that focuses light onto the retina and converts it into neural signals.|||eye optics
Accommodation|The eye’s adjustment of lens shape to focus objects at different distances.|||focusing by eye
Myopia|A vision condition in which distant objects focus in front of the retina, commonly corrected with a diverging lens.|||short-sightedness;nearsightedness
Hyperopia|A vision condition in which nearby objects tend to focus behind the retina, commonly corrected with a converging lens.|||long-sightedness;farsightedness
Astigmatism|Blur caused by unequal curvature or focusing power in different directions of the eye or an optical system.|||astigmatic vision
Optical fiber|A flexible transparent waveguide that carries light mainly by total internal reflection.|||fiber optics;optical fibre
Luminous flux|A photometric measure of visible-light power weighted by human visual sensitivity. |Φ_v|lm|lumens
Luminous intensity|Luminous flux emitted per unit solid angle in a given direction. |I_v = dΦ_v/dΩ|cd
Illuminance|Luminous flux incident per unit area. |E_v = Φ_v/A|lx|light level
''')

entries += rows('Modern, Quantum, Atomic and Nuclear Physics', r'''
Photon|A quantum of electromagnetic radiation carrying energy and momentum. |E = hf; p = h/λ||light quantum
Quantum|The smallest discrete amount associated with a quantized physical quantity or excitation.|||energy packet
Planck constant|The fundamental constant linking photon energy to frequency and setting the scale of quantum effects. |h = 6.62607015×10⁻³⁴ J·s|J·s
Blackbody radiation|The characteristic thermal electromagnetic spectrum emitted by an ideal blackbody.|||thermal spectrum
Photoelectric effect|Emission of electrons from a material when incident photons have sufficient energy. |K_max = hf - φ||photoemission
Work function|The minimum energy required to remove an electron from a material’s surface. |φ|eV|surface binding energy
Threshold frequency|The minimum light frequency needed to produce photoelectric emission from a material. |f₀ = φ/h|Hz
Stopping potential|The reverse voltage needed to reduce photoelectric current to zero. |eV_s = K_max|V
Compton effect|Increase in photon wavelength caused by scattering from a nearly free charged particle, demonstrating photon momentum. |Δλ = h(1-cos θ)/(m_ec)||Compton scattering
De Broglie wavelength|The wavelength associated with a particle of momentum p. |λ = h/p|m|matter wavelength
Matter wave|The wave-like behavior associated with material particles.|||de Broglie wave
Wave-particle duality|The principle that quantum objects display both wave-like and particle-like behavior depending on measurement context.|||wave corpuscle duality
Uncertainty principle|A quantum limit on simultaneously sharp values of conjugate quantities such as position and momentum. |ΔxΔp ≥ ħ/2||Heisenberg uncertainty principle
Wavefunction|A complex mathematical function whose squared magnitude gives probability density for a quantum state. |ψ||quantum wave function
Probability density|Probability per unit position, volume or other variable; in quantum mechanics it is the squared magnitude of the wavefunction. |ρ = ψ̄ψ||quantum probability
Quantum state|A complete mathematical description of the measurable properties of a quantum system.|||state vector
Quantum number|A discrete label specifying allowed properties of a quantum state, such as energy, angular momentum or spin.|||quantized state label
Energy level|An allowed discrete energy value of a bound quantum system.|||quantized energy
Ground state|The lowest-energy quantum state of a system.|||minimum energy state
Excited state|A quantum state with energy above the ground state.|||higher energy state
Atomic orbital|A quantum state of an electron in an atom described by a wavefunction and quantum numbers.|||electron orbital
Electron spin|An intrinsic angular-momentum property of the electron with spin quantum number one-half.|||spin angular momentum
Pauli exclusion principle|No two identical fermions in the same system can occupy the same complete quantum state.|||Pauli principle
Schrodinger equation|The fundamental equation governing evolution or stationary states of a nonrelativistic quantum wavefunction. |iħ∂ψ/∂t = Ĥψ||Schrödinger equation
Quantum tunneling|Passage of a quantum particle through a classically forbidden potential barrier.|||tunnel effect
Atom|The smallest unit of an element retaining its chemical identity, consisting of a nucleus and electrons.|||atomic particle
Atomic nucleus|The compact positively charged central region of an atom containing protons and neutrons.|||nucleus
Proton|A positively charged baryon found in atomic nuclei.|||positive nucleon
Neutron|An electrically neutral baryon found in most atomic nuclei.|||neutral nucleon
Electron|A negatively charged elementary lepton that occupies atomic and molecular states.|||negative particle
Atomic number|The number of protons in an atomic nucleus, determining the chemical element. |Z||proton number
Mass number|The total number of protons and neutrons in a nucleus. |A = Z + N||nucleon number
Isotope|Atoms of the same element with the same proton number but different neutron numbers.|||nuclide variant
Ion|An atom or molecule with net electric charge because electrons have been gained or lost.|||charged atom
Bohr model|A historical atomic model with electrons in quantized circular orbits around the nucleus. |E_n = -13.6 eV/n²||Bohr atom
Atomic spectrum|The set of discrete wavelengths emitted or absorbed by atoms due to transitions between energy levels.|||line spectrum
Emission spectrum|A spectrum of wavelengths emitted by excited matter.|||bright line spectrum
Absorption spectrum|A spectrum containing reduced intensity at wavelengths absorbed by matter.|||dark line spectrum
Ionization energy|The minimum energy required to remove an electron from an isolated atom or ion in a specified state.|||ionisation energy
Mass defect|The difference between the sum of separated nucleon masses and the actual mass of a bound nucleus. |Δm||missing mass
Nuclear binding energy|The energy required to separate a nucleus completely into individual nucleons. |E_b = Δmc²|J or eV
Nuclear force|The short-range interaction binding protons and neutrons within nuclei, arising from the strong interaction.|||strong nuclear force
Radioactivity|Spontaneous transformation of unstable nuclei accompanied by emission of particles or radiation.|||radioactive decay
Alpha decay|Radioactive decay in which a nucleus emits an alpha particle containing two protons and two neutrons.|||α decay
Beta decay|Radioactive transformation involving emission of an electron or positron with a neutrino or antineutrino.|||β decay
Gamma decay|Emission of a high-energy photon as an excited nucleus moves to a lower energy state.|||γ decay
Half-life|The time required for half the undecayed nuclei in a sample to decay. |N = N₀(1/2)^(t/T₁/₂)|s
Decay constant|The probability per unit time that an unstable nucleus decays. |λ = ln2/T₁/₂|s⁻¹
Activity|The number of nuclear decays per unit time. |A = λN|Bq|radioactive activity
Nuclear fission|Splitting of a heavy nucleus into lighter nuclei, usually releasing neutrons and energy.|||atomic fission
Nuclear fusion|Combination of light nuclei into heavier nuclei with release of energy when binding energy increases.|||thermonuclear fusion
Chain reaction|A self-propagating sequence in which products of one reaction trigger further reactions.|||nuclear chain reaction
Critical mass|The minimum amount and configuration of fissile material needed to sustain a chain reaction under specified conditions.|||critical quantity
Nuclear reactor|A system designed to control and use a sustained nuclear fission chain reaction.|||fission reactor
Moderator|Material in a thermal reactor that slows neutrons, increasing the probability of further fission in suitable fuel.|||neutron moderator
Control rod|A neutron-absorbing component used to regulate a nuclear reactor’s chain reaction.|||reactor control rod
Radiation dose|A general measure of energy deposited by ionizing radiation and its biological significance, depending on the specific dose quantity.|||ionizing radiation dose
Absorbed dose|Ionizing-radiation energy deposited per unit mass. |D = E/m|Gy|gray
Equivalent dose|Absorbed dose weighted for radiation type to estimate biological effect. |H = w_R D|Sv|sievert
Background radiation|Ionizing radiation naturally or artificially present in the environment apart from a specific source under study.|||background count
Annihilation|A process in which a particle and antiparticle convert their mass-energy into other particles, often photons.|||particle annihilation
Pair production|Creation of a particle-antiparticle pair from sufficient energy, commonly a photon near a nucleus.|||pair creation
Antimatter|Matter composed of antiparticles with opposite conserved charges to corresponding particles.|||anti-matter
Positron|The electron’s antiparticle, with the same mass and positive charge.|||antielectron
Neutrino|A very light electrically neutral elementary particle that interacts mainly through the weak force and gravity.|||neutral lepton
Standard Model|The quantum field theory describing known elementary particles and electromagnetic, weak and strong interactions.|||standard model of particle physics
Quark|An elementary fermion carrying color charge and combining to form hadrons.|||quark particle
Lepton|An elementary fermion that does not participate in the strong interaction.|||leptonic particle
Boson|A particle with integer spin that can share a quantum state with identical particles.|||integer spin particle
Higgs boson|The quantum excitation of the Higgs field associated with the mechanism giving mass to fundamental particles.|||Higgs particle
Strong interaction|The fundamental interaction binding quarks and, residually, nucleons.|||strong nuclear interaction
Weak interaction|The fundamental interaction responsible for processes such as beta decay and neutrino interactions.|||weak nuclear interaction
Semiconductor|A material with electrical conductivity between that of conductors and insulators, controllable by doping, fields, light or temperature.|||semiconducting material
Band gap|The energy range between valence and conduction bands with no allowed electron states in an ideal solid. |E_g|eV|energy gap
Valence band|The highest range of electron energies normally occupied in a solid at low temperature.|||filled energy band
Conduction band|An energy band in which electrons can move through a solid and contribute to conduction.|||conducting energy band
Doping|Intentional addition of impurities to control charge-carrier concentration in a semiconductor.|||semiconductor doping
P-type semiconductor|A doped semiconductor in which holes are the majority mobile charge carriers.|||positive type semiconductor
N-type semiconductor|A doped semiconductor in which electrons are the majority mobile charge carriers.|||negative type semiconductor
PN junction|The boundary between p-type and n-type semiconductor regions, forming the basis of diodes and many electronic devices.|||p-n junction
Diode|A two-terminal electronic component that conducts much more readily in one direction than the other.|||semiconductor diode
Light-emitting diode|A semiconductor diode that emits light when carriers recombine under forward bias.|||LED
Rectifier|A device or circuit that converts alternating current into direct current.|||AC to DC converter
Transistor|A semiconductor device used to amplify or switch electrical signals.|||electronic transistor
''')

entries += rows('Relativity', r'''
Special relativity|Einstein’s theory describing space and time in inertial frames, based on invariant physical laws and constant vacuum light speed.|||special theory of relativity
Principle of relativity|The laws of physics have the same form in all inertial reference frames.|||relativity principle
Speed of light|The invariant speed of electromagnetic radiation in vacuum and the maximum speed for causal influence. |c = 299792458 m/s|m/s|light speed
Time dilation|The elapsed time between events depends on relative motion or gravity; a moving clock is measured to run slower in special relativity. |Δt = γΔτ|s
Length contraction|The measured length of a moving object parallel to its motion is shorter than its proper length. |L = L₀/γ|m
Relativity of simultaneity|Events simultaneous in one inertial frame need not be simultaneous in another moving frame.|||nonabsolute simultaneity
Lorentz factor|A factor governing relativistic time, length, momentum and energy transformations. |γ = 1/√(1-v²/c²)||gamma factor
Lorentz transformation|Equations relating space and time coordinates between inertial frames moving at constant relative velocity.|||relativistic coordinate transformation
Proper time|The time interval measured by a clock present at both events. |Δτ|s
Proper length|The length of an object measured in the frame where the object is at rest. |L₀|m|rest length
Relativistic momentum|Momentum consistent with special relativity, increasing by the Lorentz factor. |p = γmv|kg·m/s
Relativistic energy|The total energy of a particle including rest energy and kinetic energy. |E = γmc²|J
Mass-energy equivalence|The principle that rest mass corresponds to rest energy. |E₀ = mc²|J
Spacetime|The four-dimensional framework combining three spatial dimensions with time.|||space-time
General relativity|Einstein’s theory describing gravity as curvature of spacetime caused by mass-energy.|||general theory of relativity
Equivalence principle|Locally, the effects of a uniform gravitational field are indistinguishable from those of uniform acceleration.|||Einstein equivalence principle
Spacetime curvature|The geometric deformation of spacetime associated with mass-energy in general relativity.|||curved spacetime
Gravitational time dilation|Clocks deeper in a gravitational field run slower relative to clocks at higher gravitational potential.|||gravity time dilation
Gravitational lensing|Bending and focusing of light by curved spacetime around mass.|||gravity lens
Event horizon|A boundary beyond which events cannot influence a distant external observer, as around a black hole.|||black hole horizon
''')

entries += rows('Astrophysics and Cosmology', r'''
Star|A self-gravitating luminous sphere of plasma powered mainly by nuclear fusion during much of its life.|||stellar object
Planet|A large body orbiting a star, massive enough to be nearly round but not massive enough for sustained stellar fusion.|||planetary body
Galaxy|A gravitationally bound system of stars, gas, dust, dark matter and other components.|||star system
Nebula|An interstellar cloud of gas and dust, sometimes associated with star formation or stellar remnants.|||interstellar cloud
Solar system|The Sun and all objects gravitationally bound to it.|||Sun planetary system
Astronomical unit|The defined mean Earth-Sun distance used as a length unit in astronomy. |1 AU = 149597870700 m|AU
Light-year|The distance light travels in vacuum in one Julian year. |1 ly ≈ 9.461×10¹⁵ m|ly
Parsec|The distance at which one astronomical unit subtends one arcsecond. |1 pc ≈ 3.086×10¹⁶ m|pc
Luminosity|The total power radiated by an astronomical object. |L|W|absolute brightness
Apparent magnitude|A logarithmic measure of how bright an astronomical object appears from Earth.|||observed magnitude
Absolute magnitude|The apparent magnitude an object would have at a standard distance of 10 parsecs.|||intrinsic magnitude scale
Stellar spectrum|The distribution of a star’s radiation with wavelength, containing information about temperature, composition and motion.|||star spectrum
Redshift|An increase in observed wavelength, often caused by recession, cosmic expansion or gravity. |z = (λ_obs-λ_emit)/λ_emit||red shift
Blueshift|A decrease in observed wavelength, often caused by approach motion.|||blue shift
Hubble's law|The recession speed of a sufficiently distant galaxy is approximately proportional to its distance. |v = H₀d||Hubble-Lemaître law
Expansion of the universe|The increase over cosmic time of distances between widely separated comoving regions of space.|||cosmic expansion
Big Bang model|The cosmological model in which the universe evolved from an earlier hot, dense state and has expanded and cooled.|||Big Bang theory
Cosmic microwave background|Relic thermal radiation from the early universe, observed today mainly in microwave wavelengths.|||CMB
Dark matter|Matter inferred from gravitational effects that does not emit, absorb or reflect enough electromagnetic radiation to be directly seen.|||invisible matter
Dark energy|A name for the component or effect associated with the observed accelerated expansion of the universe.|||cosmic acceleration energy
Exoplanet|A planet orbiting a star other than the Sun.|||extrasolar planet
Transit method|Detection of an exoplanet through periodic dimming as it passes in front of its star.|||planetary transit
Radial velocity method|Detection of an orbiting companion through Doppler shifts in a star’s spectral lines.|||Doppler exoplanet method
Main sequence|The long-lived stellar stage and band on the Hertzsprung-Russell diagram where stars fuse hydrogen in their cores.|||main sequence star
Hertzsprung-Russell diagram|A graph of stellar luminosity or absolute magnitude against temperature, spectral type or color.|||HR diagram
White dwarf|A compact stellar remnant supported mainly by electron degeneracy pressure.|||degenerate dwarf star
Neutron star|An extremely dense stellar remnant supported mainly by neutron degeneracy and nuclear interactions.|||compact neutron object
Pulsar|A rotating magnetized neutron star observed through regular pulses of radiation.|||pulsating radio star
Supernova|A powerful stellar explosion or disruption that greatly increases brightness and disperses material.|||exploding star
Black hole|A region where gravity is strong enough that an event horizon prevents light or matter from escaping to the exterior.|||collapsed object
Schwarzschild radius|The event-horizon radius of a nonrotating uncharged black hole of mass M. |r_s = 2GM/c²|m
Accretion disk|A rotating disk of matter spiraling toward a central object while losing energy and angular momentum.|||accretion disc
Gravitational wave|A propagating ripple in spacetime produced by accelerating asymmetric mass distributions.|||gravity wave in spacetime
Binary star|A pair of stars gravitationally bound and orbiting a common center of mass.|||double star system
Stellar nucleosynthesis|Production of atomic nuclei through nuclear reactions inside stars and stellar explosions.|||element formation in stars
Chandrasekhar limit|The maximum mass of a stable nonrotating white dwarf supported by electron degeneracy pressure, about 1.4 solar masses.|||white dwarf mass limit
Cosmological principle|The assumption that the universe is homogeneous and isotropic on sufficiently large scales.|||large scale uniformity
Observable universe|The region from which signals have had time to reach an observer since the early universe.|||visible universe
Cosmic inflation|A proposed brief period of extremely rapid expansion in the very early universe.|||inflationary universe
Gravitational redshift|Increase in photon wavelength as light climbs out of a gravitational potential.|||gravity redshift
Cosmic ray|A high-energy particle, mostly atomic nuclei and protons, arriving from space.|||space radiation particle
Solar wind|A stream of charged particles continuously emitted from the Sun’s outer atmosphere.|||heliospheric plasma
Magnetosphere|A region around a planet or star dominated by its magnetic field and interaction with charged particles.|||planetary magnetic cavity
Aurora|Atmospheric light produced when energetic charged particles excite atoms and molecules near a planet’s magnetic poles.|||northern lights;southern lights
''')

POPULAR = {
'Acceleration','Angle of banking','Banking angle','Center of gravity','Center of mass','Force','Friction','Weight','Mass',
'Newton\'s first law','Newton\'s second law','Newton\'s third law','Work','Energy','Kinetic energy','Power','Momentum','Impulse',
'Torque','Moment of inertia','Angular momentum','Centripetal force','Centrifugal force','Gravitation','Gravitational field',
'Orbital velocity','Escape velocity','Density','Pressure','Surface tension','Viscosity','Bernoulli\'s principle','Archimedes\' principle',
'Simple harmonic motion','Resonance','Frequency','Wavelength','Doppler effect','Sound wave','Heat','Temperature','Entropy',
'First law of thermodynamics','Second law of thermodynamics','Ideal gas law','Electric charge','Electric field','Electric potential',
'Voltage','Capacitance','Electric current','Resistance','Ohm\'s law','Kirchhoff\'s current law','Kirchhoff\'s voltage law',
'Magnetic field','Electromagnetic induction','Faraday\'s law','Lenz\'s law','Transformer','Alternating current','Electromagnetic wave',
'Reflection','Refraction','Refractive index','Total internal reflection','Lens','Mirror formula','Lens formula','Diffraction',
'Interference of light','Polarization','Photoelectric effect','Photon','Wave-particle duality','Uncertainty principle','Atom',
'Radioactivity','Half-life','Nuclear fission','Nuclear fusion','Special relativity','Time dilation','Mass-energy equivalence',
'Black hole','Gravitational wave','Dark matter','Dark energy','Big Bang model','Redshift'
}

CATEGORY_SLUGS = {}
def slugify(value):
    value = value.lower().replace("'", '')
    value = re.sub(r'[^a-z0-9]+', '-', value).strip('-')
    return value

# Deduplicate, enrich and create related-term links from neighboring terms in the same category.
seen = set()
clean=[]
for item in entries:
    key=item['title'].lower()
    if key in seen:
        raise ValueError(f'Duplicate dictionary term: {item["title"]}')
    seen.add(key)
    item['slug']=slugify(item['title'])
    item['categorySlug']=slugify(item['category'])
    item['explanation']=item['definition'] + ' ' + CONTEXT[item['category']]
    item['priority']='high-interest' if item['title'] in POPULAR else 'reference'
    clean.append(item)

by_category={}
for item in clean:
    by_category.setdefault(item['category'], []).append(item)
for category, group in by_category.items():
    for idx,item in enumerate(group):
        candidates=[]
        for offset in (1,-1,2,-2,3,-3,4,-4):
            if 0 <= idx+offset < len(group):
                candidates.append(group[idx+offset]['slug'])
        item['relatedTerms']=candidates[:6]

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(clean, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(f'Wrote {len(clean)} physics dictionary terms to {OUT}')
print('By category:')
for category, group in by_category.items():
    print(f'  {category}: {len(group)}')
