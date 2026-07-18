export interface PeriodicElement {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: string;
}

const RAW = `
1|H|Hydrogen
2|He|Helium
3|Li|Lithium
4|Be|Beryllium
5|B|Boron
6|C|Carbon
7|N|Nitrogen
8|O|Oxygen
9|F|Fluorine
10|Ne|Neon
11|Na|Sodium
12|Mg|Magnesium
13|Al|Aluminium
14|Si|Silicon
15|P|Phosphorus
16|S|Sulfur
17|Cl|Chlorine
18|Ar|Argon
19|K|Potassium
20|Ca|Calcium
21|Sc|Scandium
22|Ti|Titanium
23|V|Vanadium
24|Cr|Chromium
25|Mn|Manganese
26|Fe|Iron
27|Co|Cobalt
28|Ni|Nickel
29|Cu|Copper
30|Zn|Zinc
31|Ga|Gallium
32|Ge|Germanium
33|As|Arsenic
34|Se|Selenium
35|Br|Bromine
36|Kr|Krypton
37|Rb|Rubidium
38|Sr|Strontium
39|Y|Yttrium
40|Zr|Zirconium
41|Nb|Niobium
42|Mo|Molybdenum
43|Tc|Technetium
44|Ru|Ruthenium
45|Rh|Rhodium
46|Pd|Palladium
47|Ag|Silver
48|Cd|Cadmium
49|In|Indium
50|Sn|Tin
51|Sb|Antimony
52|Te|Tellurium
53|I|Iodine
54|Xe|Xenon
55|Cs|Caesium
56|Ba|Barium
57|La|Lanthanum
58|Ce|Cerium
59|Pr|Praseodymium
60|Nd|Neodymium
61|Pm|Promethium
62|Sm|Samarium
63|Eu|Europium
64|Gd|Gadolinium
65|Tb|Terbium
66|Dy|Dysprosium
67|Ho|Holmium
68|Er|Erbium
69|Tm|Thulium
70|Yb|Ytterbium
71|Lu|Lutetium
72|Hf|Hafnium
73|Ta|Tantalum
74|W|Tungsten
75|Re|Rhenium
76|Os|Osmium
77|Ir|Iridium
78|Pt|Platinum
79|Au|Gold
80|Hg|Mercury
81|Tl|Thallium
82|Pb|Lead
83|Bi|Bismuth
84|Po|Polonium
85|At|Astatine
86|Rn|Radon
87|Fr|Francium
88|Ra|Radium
89|Ac|Actinium
90|Th|Thorium
91|Pa|Protactinium
92|U|Uranium
93|Np|Neptunium
94|Pu|Plutonium
95|Am|Americium
96|Cm|Curium
97|Bk|Berkelium
98|Cf|Californium
99|Es|Einsteinium
100|Fm|Fermium
101|Md|Mendelevium
102|No|Nobelium
103|Lr|Lawrencium
104|Rf|Rutherfordium
105|Db|Dubnium
106|Sg|Seaborgium
107|Bh|Bohrium
108|Hs|Hassium
109|Mt|Meitnerium
110|Ds|Darmstadtium
111|Rg|Roentgenium
112|Cn|Copernicium
113|Nh|Nihonium
114|Fl|Flerovium
115|Mc|Moscovium
116|Lv|Livermorium
117|Ts|Tennessine
118|Og|Oganesson`;

const groups = {
  "Noble gas": new Set([2, 10, 18, 36, 54, 86, 118]),
  Halogen: new Set([9, 17, 35, 53, 85, 117]),
  "Alkali metal": new Set([3, 11, 19, 37, 55, 87]),
  "Alkaline earth metal": new Set([4, 12, 20, 38, 56, 88]),
  Metalloid: new Set([5, 14, 32, 33, 51, 52]),
  "Reactive non-metal": new Set([1, 6, 7, 8, 15, 16, 34]),
  "Post-transition metal": new Set([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116]),
};

function category(atomicNumber: number): string {
  for (const [name, values] of Object.entries(groups)) if (values.has(atomicNumber)) return name;
  if (atomicNumber >= 57 && atomicNumber <= 71) return "Lanthanide";
  if (atomicNumber >= 89 && atomicNumber <= 103) return "Actinide";
  if (
    (atomicNumber >= 21 && atomicNumber <= 30) ||
    (atomicNumber >= 39 && atomicNumber <= 48) ||
    (atomicNumber >= 72 && atomicNumber <= 80) ||
    (atomicNumber >= 104 && atomicNumber <= 112)
  )
    return "Transition metal";
  return "Other";
}

export const PERIODIC_ELEMENTS: PeriodicElement[] = RAW.trim()
  .split("\n")
  .map((line) => {
    const [number, symbol, name] = line.split("|");
    const atomicNumber = Number(number);
    return { atomicNumber, symbol: symbol!, name: name!, category: category(atomicNumber) };
  });
