import type { LessonContent } from "@/lib/lesson-content-types";
import type { RayOpticsMode } from "@/components/interactive/ray-optics-explorer";

type Spec = {
  slug: string;
  title: string;
  mode: RayOpticsMode;
  topics: string[];
  formulae: string[];
  extraModes?: RayOpticsMode[];
  examples: { prompt: string; steps: string[]; answer: string }[];
};

const specs: Spec[] = [
  {
    slug: "foundations-sign-conventions-and-plane-mirrors",
    title: "Foundations, Sign Conventions and Plane Mirrors",
    mode: "plane-mirror",
    topics: ["ray model, beams and paraxial rays", "Cartesian sign convention", "real and virtual images", "laws of reflection", "plane mirrors, multiple reflections and mirror rotation"],
    extraModes: ["ray-practice"],
    formulae: ["i=r", "d_o=d_i", "\theta_{\text{reflected ray}}=2\theta_{\text{mirror}}"],
    examples: [
      { prompt: "An object stands 18 cm before a plane mirror. Find the image position.", steps: ["A plane mirror forms the image the same perpendicular distance behind the mirror.", "Image distance = 18 cm behind the mirror."], answer: "18 cm behind the mirror; virtual, upright and same size." },
      { prompt: "A person moves 2 m toward a plane mirror. How much does the object-image separation change?", steps: ["The object approaches by 2 m.", "Its image also approaches the mirror by 2 m from the other side.", "Total decrease = 4 m."], answer: "The separation decreases by 4 m." },
      { prompt: "Two plane mirrors are inclined at 60°. Estimate the number of images for a symmetric arrangement.", steps: ["Use $N=360^\circ/\theta-1$ when the quotient is an integer.", "$N=360/60-1=5$."], answer: "Five images." },
      { prompt: "A mirror turns through 7°. Through what angle does the reflected ray turn?", steps: ["For a fixed incident ray, reflected-ray rotation is twice mirror rotation.", "$2\times7^\circ=14^\circ$."], answer: "$14^\circ$." },
    ],
  },
  {
    slug: "spherical-mirrors-ray-diagrams-and-mirror-formula",
    title: "Spherical Mirrors, Ray Diagrams and Mirror Formula",
    mode: "spherical-mirror",
    topics: ["concave and convex mirrors", "pole, axis, focus and centre of curvature", "standard construction rays", "mirror formula and magnification", "applications of spherical mirrors"],
    extraModes: ["mirror-calculator"],
    formulae: ["\frac1f=\frac1v+\frac1u", "m=\frac{h_i}{h_o}=-\frac vu", "f=\frac R2"],
    examples: [
      { prompt: "A concave mirror has $f=-15$ cm and $u=-30$ cm. Find $v$.", steps: ["Use $1/f=1/v+1/u$.", "$-1/15=1/v-1/30$.", "$1/v=-1/30$, so $v=-30$ cm."], answer: "A real, inverted, same-size image forms 30 cm in front." },
      { prompt: "A convex mirror has $f=20$ cm and $u=-40$ cm. Find $v$ and $m$.", steps: ["$1/20=1/v-1/40$.", "$1/v=3/40$, so $v=13.33$ cm.", "$m=-v/u=0.333$."], answer: "Virtual, upright and diminished; $v\approx13.3$ cm, $m\approx0.33$." },
      { prompt: "An image is twice the object and inverted in a concave mirror. If $u=-18$ cm, find $v$.", steps: ["Inverted twice-size means $m=-2$.", "$m=-v/u$.", "$-2=-v/(-18)$, giving $v=-36$ cm."], answer: "$v=-36$ cm." },
      { prompt: "A spherical mirror has radius of curvature 50 cm. Find focal-length magnitude.", steps: ["Use $f=R/2$.", "$f=50/2=25$ cm."], answer: "25 cm; the sign depends on mirror type." },
    ],
  },
  {
    slug: "refraction-plane-surfaces-and-total-internal-reflection",
    title: "Refraction, Plane Surfaces and Total Internal Reflection",
    mode: "refraction-tir",
    topics: ["Snell's law", "absolute and relative refractive index", "apparent depth and glass slabs", "critical angle and total internal reflection", "optical fibres"],
    extraModes: ["glass-slab", "apparent-depth"],
    formulae: ["n_1\sin i=n_2\sin r", "n=\frac cv", "\sin C=\frac{n_2}{n_1}", "\text{apparent depth}=\frac{\text{real depth}}n"],
    examples: [
      { prompt: "Light enters glass of index 1.5 from air at $30^\circ$. Find $r$.", steps: ["Use $n_1\sin i=n_2\sin r$.", "$\sin r=(1/1.5)\sin30^\circ=1/3$.", "$r=19.47^\circ$."], answer: "$r\approx19.5^\circ$, toward the normal." },
      { prompt: "A pond is 2.4 m deep and water has $n=4/3$. Find apparent depth.", steps: ["Use apparent depth = real depth / $n$.", "$2.4\div(4/3)=1.8$ m."], answer: "1.8 m." },
      { prompt: "Find the critical angle for glass $n=1.5$ to air.", steps: ["$\sin C=1/1.5$.", "$C=\sin^{-1}(0.6667)$."], answer: "$C\approx41.8^\circ$." },
      { prompt: "A 4 cm glass slab of index 1.5 is viewed normally. Find apparent thickness.", steps: ["Apparent thickness = $t/n$.", "$4/1.5=2.67$ cm."], answer: "2.67 cm; apparent upward shift is 1.33 cm." },
    ],
  },
  {
    slug: "thin-lenses-lens-formula-lens-maker-and-power",
    title: "Thin Lenses, Lens Formula, Lens Maker and Power",
    mode: "thin-lens",
    topics: ["convex and concave lenses", "standard ray construction", "lens formula and magnification", "lens maker's formula", "power and lens combinations"],
    extraModes: ["lens-calculator", "lens-maker", "lens-combination"],
    formulae: ["\frac1f=\frac1v-\frac1u", "m=\frac vu", "P=\frac1{f(\mathrm m)}", "\frac1f=(\mu-1)\left(\frac1{R_1}-\frac1{R_2}\right)"],
    examples: [
      { prompt: "A convex lens has $f=15$ cm and $u=-30$ cm. Find $v$.", steps: ["Use $1/f=1/v-1/u$.", "$1/15=1/v+1/30$.", "$v=30$ cm."], answer: "Real, inverted, same-size image at 30 cm." },
      { prompt: "A concave lens has $f=-20$ cm and $u=-40$ cm. Find $v$.", steps: ["$-1/20=1/v+1/40$.", "$1/v=-3/40$.", "$v=-13.33$ cm."], answer: "Virtual, upright and diminished." },
      { prompt: "Find power of a lens with focal length 25 cm.", steps: ["Convert: $f=0.25$ m.", "$P=1/f=4$ D."], answer: "+4 D for a convex lens; -4 D for a concave lens of equal magnitude." },
      { prompt: "Two lenses of powers +3 D and -1 D are in contact. Find equivalent focal length.", steps: ["$P=P_1+P_2=2$ D.", "$f=1/P=0.5$ m."], answer: "0.50 m." },
    ],
  },
  {
    slug: "prisms-minimum-deviation-and-dispersion",
    title: "Prisms, Minimum Deviation and Dispersion",
    mode: "prism",
    topics: ["refraction through a prism", "angle of deviation", "minimum deviation", "thin-prism approximation", "dispersion and dispersive power"],
    formulae: ["\mu=\frac{\sin((A+\delta_m)/2)}{\sin(A/2)}", "\delta\approx(\mu-1)A", "\Delta\delta=\delta_v-\delta_r"],
    examples: [
      { prompt: "A prism has $A=60^\circ$ and $\delta_m=40^\circ$. Find $\mu$.", steps: ["Use the minimum-deviation relation.", "$\mu=\sin50^\circ/\sin30^\circ=1.532$."], answer: "$\mu\approx1.53$." },
      { prompt: "A thin prism has $A=5^\circ$ and $\mu=1.5$. Estimate deviation.", steps: ["$\delta\approx(\mu-1)A$.", "$\delta=0.5\times5^\circ=2.5^\circ$."], answer: "$2.5^\circ$." },
      { prompt: "Red and violet deviations are $3.0^\circ$ and $3.2^\circ$. Find angular dispersion.", steps: ["Angular dispersion = $\delta_v-\delta_r$.", "$3.2^\circ-3.0^\circ=0.2^\circ$."], answer: "$0.2^\circ$." },
      { prompt: "At minimum deviation for a $60^\circ$ prism, find $i$ if $\delta_m=30^\circ$.", steps: ["At minimum deviation, $i=e$ and $\delta_m=2i-A$.", "$i=(A+\delta_m)/2=45^\circ$."], answer: "$45^\circ$." },
    ],
  },
  {
    slug: "the-human-eye-and-defects-of-vision",
    title: "The Human Eye and Defects of Vision",
    mode: "human-eye",
    topics: ["eye structure and accommodation", "near and far points", "myopia and hypermetropia", "presbyopia and astigmatism", "corrective-lens power"],
    formulae: ["P=\frac1f", "\frac1f=\frac1v-\frac1u"],
    examples: [
      { prompt: "A myopic eye has far point 80 cm. Find spectacle power for distant vision.", steps: ["For a distant object, $u=-\infty$ and desired $v=-0.80$ m.", "$f=-0.80$ m.", "$P=1/f=-1.25$ D."], answer: "Use a -1.25 D concave lens." },
      { prompt: "A hypermetropic person's near point is 100 cm. Find power to read at 25 cm.", steps: ["Use $u=-0.25$ m and desired $v=-1.0$ m.", "$1/f=-1-(-4)=3$.", "$P=+3$ D."], answer: "Use a +3 D convex lens." },
      { prompt: "Why does presbyopia occur?", steps: ["The crystalline lens loses elasticity with age.", "Ciliary muscles also weaken.", "Accommodation decreases and near point recedes."], answer: "Age-related reduction in accommodation." },
      { prompt: "Which lens corrects astigmatism?", steps: ["Astigmatism gives unequal focusing in different meridians.", "A cylindrical lens supplies direction-dependent power."], answer: "A suitably oriented cylindrical lens." },
    ],
  },
  {
    slug: "simple-and-compound-microscopes",
    title: "Simple and Compound Microscopes",
    mode: "microscope",
    topics: ["angular magnification", "least distance of distinct vision", "simple microscope modes", "compound microscope ray diagram", "objective and eyepiece magnification"],
    formulae: ["M_{\infty}=\frac Df", "M_D=1+\frac Df", "M\approx\frac L{f_o}\frac D{f_e}"],
    examples: [
      { prompt: "A simple microscope has $f=5$ cm. Find magnifying power at infinity for $D=25$ cm.", steps: ["Use $M=D/f$.", "$M=25/5=5$."], answer: "5×." },
      { prompt: "For the same lens, find magnifying power at the near point.", steps: ["Use $M=1+D/f$.", "$M=1+25/5=6$."], answer: "6×." },
      { prompt: "A compound microscope has $L=16$ cm, $f_o=0.8$ cm and $f_e=4$ cm. Estimate $M$.", steps: ["Use $M\approx(L/f_o)(D/f_e)$.", "$M=(16/0.8)(25/4)=20\times6.25$."], answer: "About 125×." },
      { prompt: "Why is a microscope objective given short focal length?", steps: ["Objective magnification increases as focal length decreases.", "It creates a strongly magnified intermediate image."], answer: "To obtain high objective magnification." },
    ],
  },
  {
    slug: "astronomical-telescopes-and-ray-optics-review",
    title: "Astronomical Telescopes and Ray Optics Review",
    mode: "telescope",
    topics: ["refracting and reflecting telescopes", "normal adjustment", "final image at near point", "angular magnification", "resolving power and mixed review"],
    formulae: ["|M|=\frac{f_o}{f_e}", "L=f_o+f_e", "\theta_{\min}\approx1.22\frac\lambda D"],
    examples: [
      { prompt: "A telescope has $f_o=120$ cm and $f_e=5$ cm. Find magnifying power.", steps: ["In normal adjustment, $|M|=f_o/f_e$.", "$|M|=120/5=24$."], answer: "24×; the astronomical image is inverted." },
      { prompt: "Find telescope length in normal adjustment.", steps: ["Use $L=f_o+f_e$.", "$L=120+5=125$ cm."], answer: "125 cm." },
      { prompt: "Why do large telescopes use large objectives?", steps: ["A larger aperture collects more light.", "It also improves angular resolution by reducing the diffraction limit."], answer: "Greater light gathering and resolving power." },
      { prompt: "Compare reflecting and refracting telescopes.", steps: ["Reflectors avoid chromatic aberration and can use large supported mirrors.", "Large refracting lenses are heavy and dispersive."], answer: "Reflectors are preferred for very large astronomical instruments." },
    ],
  },
];

const sharedPractice = [
  { prompt: "Which line should be dashed in a ray diagram?", options: ["An actual incident ray", "A reflected ray", "A virtual backward extension", "The principal axis"], answer: 2, explanation: "Virtual rays are represented by backward extensions, not actual light paths." },
  { prompt: "Optical power is measured in", options: ["metres", "radians", "dioptres", "newtons"], answer: 2, explanation: "One dioptre equals one inverse metre." },
  { prompt: "When light enters a higher-index medium it generally bends", options: ["toward the normal", "away from the normal", "along the interface", "without changing direction in every case"], answer: 0, explanation: "Snell's law gives a smaller refracted angle for the higher-index medium." },
  { prompt: "A negative magnification generally indicates", options: ["upright image", "inverted image", "no image", "zero focal length"], answer: 1, explanation: "The sign of magnification indicates orientation under the adopted convention." },
  { prompt: "The focal-length magnitude of a spherical mirror is", options: ["R", "R/2", "2R", "R²"], answer: 1, explanation: "For paraxial rays, $f=R/2$." },
];

export const rayOpticsCourse: LessonContent[] = specs.map((spec) => ({
  subjectSlug: "physics",
  chapterSlug: "geometrical-optics",
  lessonSlug: spec.slug,
  title: spec.title,
  objectives: spec.topics.map((topic) => `Explain and apply ${topic}.`),
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Ray optics models light as narrow rays travelling through optical systems. This lesson develops the geometry, sign convention, equations, diagrams and applications needed for reliable problem solving.",
        "Use the interactive laboratory to connect each equation with a visible ray path. Numerical work should always state the convention, units and physical meaning of the result.",
      ],
    },
    {
      kind: "theory",
      heading: "Core ideas",
      paragraphs: spec.topics.map((topic) => `${topic[0]?.toUpperCase() ?? ""}${topic.slice(1)}.`),
      list: [
        "Draw the principal axis and label all reference points before calculating.",
        "Use solid lines for real rays and dashed backward extensions for virtual rays.",
        "Convert centimetres to metres before calculating optical power in dioptres.",
      ],
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Scientific sign discipline",
      body: "A correct formula with inconsistent signs gives a physically wrong image. State the Cartesian sign convention before substitution and interpret the signs of image distance and magnification after solving.",
    },
    {
      kind: "table",
      heading: "Formula map",
      headers: ["Relation", "Use"],
      rows: spec.formulae.map((formula) => [`$${formula}$`, "Apply with the stated Cartesian convention and consistent units."]),
    },
    { kind: "rayOpticsExplorer", heading: `Interactive ${spec.title} laboratory`, mode: spec.mode },
    ...(spec.extraModes ?? []).map((mode) => ({ kind: "rayOpticsExplorer" as const, heading: "Additional interactive investigation", mode })),
    ...spec.examples.map((example) => ({ kind: "example" as const, ...example })),
    {
      kind: "mistakes",
      items: [
        { wrong: "Substituting unsigned distances.", right: "Assign signs from the chosen Cartesian convention before using the equation." },
        { wrong: "Calling every upright image real.", right: "Real or virtual depends on whether actual rays meet; many upright images are virtual." },
        { wrong: "Ignoring units and reasonableness.", right: "Keep one unit system and check that the result agrees with the ray diagram." },
      ],
    },
    {
      kind: "realWorld",
      items: [
        { area: "Vision and imaging", text: "The same geometric principles govern spectacles, cameras, projectors and medical instruments." },
        { area: "Communication", text: "Total internal reflection guides light through optical fibres with low loss." },
        { area: "Astronomy", text: "Telescopes use lenses or mirrors to collect light and increase angular detail." },
      ],
    },
    { kind: "practice", heading: "Progressive practice", stepKey: "practice", questions: sharedPractice },
    {
      kind: "gradedQuiz",
      heading: "Mastery check",
      passMark: 5,
      questions: [
        { type: "mc", prompt: "What is essential before numerical substitution?", options: ["Ignore signs", "Choose and apply a sign convention", "Round every value", "Assume every image is real"], answer: 1, marks: 2, explanation: "Optical equations require consistent signed distances." },
        { type: "tf", prompt: "A virtual image is formed by actual convergence of rays.", answer: false, marks: 2, explanation: "A virtual image is formed by apparent intersection of ray extensions." },
        { type: "multi", prompt: "Select valid ray-diagram checks.", options: ["Label F and 2F or C", "Show arrow orientation", "Use dashed virtual extensions", "Remove all units"], answers: [0, 1, 2], marks: 3, explanation: "Reference points, orientation and virtual-ray notation are required." },
      ],
    },
    { kind: "summary", points: [...spec.topics.map((topic) => `${topic[0]?.toUpperCase() ?? ""}${topic.slice(1)}.`), "Equations, ray diagrams and physical interpretation must agree."] },
    { kind: "completion", steps: [{ key: "practice", label: "Complete the practice questions" }], requireQuizPass: true },
  ],
}));
