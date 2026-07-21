export type Contributor = {
  name: string;
  years: string;
  nationality: string;
  biography: string;
  education: string;
  achievements: string[];
  role: string;
  interestingFact: string;
};

export type InventionArticle = {
  slug: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSummary: string;
  sections: { id: string; title: string; body: string[] }[];
  timeline: { year: string; event: string }[];
  contributors: Contributor[];
  generations: { title: string; technology: string; improvements: string; advantages: string; disadvantages: string; famousProducts: string; companies: string }[];
  milestones: { year: string; milestone: string }[];
  models: { model: string; company: string; year: string; features: string }[];
  decadeTimeline: { decade: string; development: string }[];
  interestingFacts: string[];
  myths: { myth: string; reality: string }[];
  faqs: { question: string; answer: string }[];
  didYouKnow: string[];
  quotes: { quote: string; attribution: string; note?: string }[];
  references: string[];
  imageSuggestions: { type: string; suggestion: string }[];
  interactiveIdeas: { title: string; description: string }[];
};

export const inventions: InventionArticle[] = [
  {
    slug: "steam-engine",
    title: "The Steam Engine",
    subtitle: "How controlled steam power transformed mining, factories, transportation, and the modern world.",
    seoTitle: "History of the Steam Engine: Invention, Inventors, Timeline, Impact, and Future",
    metaDescription: "Explore the complete history of the steam engine, from Hero's aeolipile and Newcomen's mine pump to James Watt's improvements, steam locomotives, turbines, and modern clean-energy steam systems.",
    keywords: ["steam engine history", "who invented the steam engine", "James Watt", "Thomas Newcomen", "Thomas Savery", "Richard Trevithick", "Industrial Revolution", "steam locomotive", "steam turbine", "history of human inventions"],
    heroSummary: "A steam engine is a heat engine that turns the energy of steam into useful mechanical work. It began as a solution to mine flooding and became one of the central technologies of the Industrial Revolution.",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        body: [
          "A steam engine is a machine that uses steam from heated water to produce mechanical power. Water is boiled in a boiler, the steam expands or creates pressure, and that pressure is used to move a piston, turn a wheel, drive a pump, power factory machinery, propel a ship, or move a locomotive.",
          "The steam engine is one of the most important inventions in human history because it gave people a powerful source of mechanical energy that was not limited by human muscles, animal strength, wind, or flowing water. Before steam power, most heavy work depended on natural forces. Factories often had to be built near rivers, mines flooded easily, and transport over land was slow and expensive.",
          "Steam power helped launch the Industrial Revolution. It powered pumps, textile mills, ironworks, railways, ships, and later electricity generation. The steam engine did not simply make machines stronger; it changed how people worked, where they lived, how goods moved, and how nations became industrial powers."
        ]
      },
      {
        id: "before",
        title: "2. Before the Invention",
        body: [
          "Before the steam engine, people relied mainly on human power, animal power, water wheels, and windmills. Farmers used people and animals to pull plows, carry loads, turn mills, and move carts. Workshops used hand tools, foot pedals, simple gears, pulleys, and water-powered machinery.",
          "The greatest limitation was that traditional power sources were weak, unreliable, or tied to geography. Human power was flexible but small. Animal power required food, rest, care, and space. Wind power depended on weather. Water power was strong but forced mills and factories to locate beside rivers and streams.",
          "Mines faced a severe problem: flooding. As miners dug deeper for coal, tin, copper, and other minerals, groundwater filled the shafts. Removing water by buckets, horse-powered pumps, or waterwheels became slow, expensive, and sometimes impossible. This mining problem became one of the strongest reasons to develop steam-powered pumping engines."
        ]
      },
      {
        id: "origin",
        title: "3. Origin of the Idea",
        body: [
          "The idea that steam could create motion is ancient. Hero of Alexandria, a Greek-Egyptian mathematician and engineer active in Roman Egypt, described a steam-powered device called the aeolipile. It used steam escaping from bent tubes to spin a small sphere. It was not a practical industrial engine, but it proved that steam could produce motion.",
          "The invention was inspired by observation of nature and by earlier machines. People noticed that boiling water created expanding vapor and pressure. Later scientists studied air pressure, vacuum, gases, pumps, boilers, and pistons. These ideas came together slowly through experiments by many people, including Denis Papin, Thomas Savery, Thomas Newcomen, and James Watt.",
          "The most important social and economic need came from mining. Britain needed more coal and metals, but deep mines flooded. Mine owners needed a machine that could pump water continuously. Thomas Savery even promoted his early steam pump as The Miner's Friend, although it had serious limitations."
        ]
      },
      {
        id: "research-development",
        title: "6. Research and Development",
        body: [
          "The steam engine developed through centuries of experiments, failed attempts, practical workshops, and scientific breakthroughs. Early inventors had to understand three important ideas: steam expands when heated, steam condenses into water when cooled, and condensation can create a vacuum.",
          "Thomas Savery used steam pressure and condensation directly to move water. His system could raise water, but it had limits and safety problems. Thomas Newcomen improved the concept by using steam to create a vacuum under a piston. Atmospheric pressure then pushed the piston down and operated a pump. James Watt later realized that Newcomen's engine wasted energy because the same cylinder was repeatedly heated and cooled. Watt's separate condenser kept the working cylinder hot while steam condensed in a different chamber.",
          "Engineers faced many technical challenges: making cylinders round and smooth, sealing pistons, controlling valves, preventing boiler explosions, converting up-and-down motion into rotary motion, reducing fuel consumption, building stronger metals, and keeping moving parts lubricated. They also faced funding problems because engines were large, costly, and risky. Watt's partnership with Matthew Boulton solved part of this problem by combining invention with capital, manufacturing, and business organization.",
          "Steam-engine development also helped create new science. Engineers needed to understand heat, pressure, expansion, condensation, and efficiency. This practical need encouraged the rise of thermodynamics, the science of heat and work."
        ]
      },
      {
        id: "first-successful-version",
        title: "7. First Successful Version",
        body: [
          "The first widely successful practical steam engine was Thomas Newcomen's atmospheric engine, first used in 1712 at a coal mine near Dudley, England. It was built to pump water from mines, not to drive trains or factories.",
          "The Newcomen engine worked by admitting steam into a cylinder and then spraying cold water into that cylinder. The steam condensed into water, creating a partial vacuum. Atmospheric pressure pushed the piston downward, a large beam rocked, and the beam operated a pump rod in the mine shaft.",
          "The machine included a boiler, steam pipe, vertical cylinder, piston, rocking beam, pump rods, valves, and an engine house. It was slow, large, and inefficient compared with later engines, but it solved a real industrial problem. Its biggest limitations were high coal consumption, low efficiency, large size, slow movement, and usefulness mainly for pumping."
        ]
      },
      {
        id: "impact",
        title: "10. Impact on Society",
        body: [
          "In transportation, steam locomotives changed land travel by moving people and goods faster and more cheaply than horse-drawn carts. Steamships changed rivers, oceans, trade routes, migration, and military movement by making travel less dependent on wind.",
          "In industry, steam engines allowed factories to grow larger and operate away from rivers. They powered textile mills, ironworks, flour mills, sawmills, and machine shops. In the economy, they lowered transport costs, increased production, expanded markets, and increased demand for coal, iron, skilled labor, and machine tools.",
          "In education, the steam engine encouraged technical schools, mechanics' institutes, and engineering societies. In medicine, it indirectly supported cleaner water pumping, transport of supplies, better instruments, and industrial production of hospital equipment. In military history, steamships changed naval warfare and railways helped armies move troops and supplies.",
          "Steam also affected agriculture by powering threshers and pumps and by allowing food to move by rail to cities. In daily life, steam power contributed to cheaper manufactured goods, faster travel, urban jobs, newspapers, tourism, and entertainment. It also created problems: pollution, dangerous labor conditions, crowded industrial cities, and dependence on coal."
        ]
      },
      {
        id: "global-adoption",
        title: "11. Global Adoption",
        body: [
          "Britain adopted steam power first because it had coal deposits, mining problems, skilled metalworkers, capital investment, growing markets, and strong scientific and engineering networks. From Britain, steam engines spread to Europe, North America, and eventually around the world.",
          "Steam power spread through mining companies, industrial machinery exports, railway construction, steamship trade, colonial infrastructure, engineering textbooks, patents, skilled workers, and international exhibitions. By the nineteenth century, steam engines were used across Europe, the United States, India, parts of Africa, Latin America, Russia, China, Japan, and the Middle East."
        ]
      },
      {
        id: "how-it-works",
        title: "13. How It Works",
        body: [
          "In simple language, a steam engine works by heating water until it becomes steam. Steam takes up much more space than liquid water, so it creates pressure. That pressure pushes a piston or spins a turbine. The movement is then used to do work.",
          "In a piston steam engine, a fire heats water in a boiler. Steam travels to a cylinder. The steam pushes a piston. The piston moves a rod. The rod turns a wheel or moves a pump. Used steam is released or condensed, and the cycle repeats.",
          "Technically, a steam engine is a heat engine. It converts thermal energy into mechanical work. Important parts include the boiler, steam pipe, valve gear, cylinder, piston, connecting rod, crankshaft or beam, condenser, governor, and flywheel. In a Newcomen engine, steam condensation created a vacuum and atmospheric pressure moved the piston. In a Watt engine, a separate condenser reduced heat loss. In a steam turbine, high-speed steam flows through blades and spins a rotor connected to a generator."
        ]
      },
      {
        id: "scientific-principles",
        title: "14. Scientific Principles",
        body: [
          "The physics of a steam engine includes heat transfer, pressure, expansion, condensation, force, motion, work, and energy. When water is heated, its molecules move faster. At boiling point, liquid water changes into steam. Steam can expand and push against surfaces.",
          "Chemistry appears through combustion. Traditional steam engines burned coal, wood, or oil. Fuel reacted with oxygen and released heat. That heat boiled water. Combustion also produced carbon dioxide, smoke, soot, and pollutants, which is why fossil-fuel steam systems have environmental consequences.",
          "Mathematics is used to calculate pressure, piston area, cylinder volume, work output, efficiency, gear ratios, rotational speed, and fuel consumption. A useful relationship is Force = Pressure × Area. Engineering concepts include boiler design, safety valves, lubrication, metal strength, valve timing, heat efficiency, condensers, turbine blades, and control systems."
        ]
      },
      {
        id: "modern-versions",
        title: "16. Modern Versions",
        body: [
          "Old piston-style steam engines are now mostly used for heritage railways, museums, demonstrations, and special industrial cases. However, steam technology is still very important. Modern steam turbines are used in coal power plants, nuclear power plants, geothermal power plants, biomass plants, concentrated solar thermal plants, and industrial combined heat and power systems.",
          "Modern steam systems use sensors, digital controls, and predictive maintenance. AI can analyze vibration, pressure, temperature, fuel use, water quality, and turbine performance. It can detect inefficiencies and predict failures before breakdowns happen.",
          "Sustainable steam systems may use biomass, solar thermal energy, geothermal heat, nuclear heat, waste heat recovery, electric boilers powered by renewable electricity, or high-temperature heat pumps. Steam itself is not dirty; the environmental impact depends on how the heat is produced."
        ]
      },
      {
        id: "future",
        title: "17. Future of the Invention",
        body: [
          "The future of steam technology is not mainly about returning to old steam locomotives. It is about using steam and heat cycles more cleanly, efficiently, and intelligently. Established research includes higher-efficiency turbines, better heat exchangers, waste heat recovery, digital twin models, predictive maintenance, AI-assisted plant control, renewable-powered industrial steam, nuclear steam cycles, and geothermal power.",
          "Informed predictions for the next fifty years include more low-carbon steam production, AI optimization of boilers and turbines, wider use of renewable electricity for industrial heat, robotic inspection of boilers and turbines, carbon capture for remaining fossil-fuel plants, and advanced materials that allow higher temperatures and better efficiency. The piston steam engine may remain mostly historical, but the steam cycle will likely remain important for global energy systems."
        ]
      }
    ],
    timeline: [
      { year: "1st century CE", event: "Hero of Alexandria describes steam-powered devices including the aeolipile." },
      { year: "1600s", event: "Scientists study air pressure, vacuum, and gases." },
      { year: "1670s–1690s", event: "Denis Papin experiments with pressure vessels and piston ideas." },
      { year: "1698", event: "Thomas Savery patents an early steam pump for raising water." },
      { year: "1702", event: "Savery promotes his machine as The Miner's Friend." },
      { year: "1712", event: "Thomas Newcomen builds the first practical atmospheric steam engine for mine pumping." },
      { year: "1765", event: "James Watt develops the idea of the separate condenser." },
      { year: "1769", event: "Watt receives a patent for his separate condenser." },
      { year: "1770s", event: "Boulton and Watt commercialize improved steam engines." },
      { year: "1802", event: "Richard Trevithick and Andrew Vivian patent high-pressure non-condensing steam engines." },
      { year: "1804", event: "Trevithick's locomotive operates at Penydarren in Wales." },
      { year: "1820s–1830s", event: "Steam railways expand rapidly in Britain." },
      { year: "1884", event: "Charles Parsons demonstrates an early steam turbine generator." },
      { year: "1900s", event: "Steam turbines become central to electric power generation." },
      { year: "Today", event: "Steam remains important in power generation, nuclear plants, geothermal systems, industrial heat, and heritage engineering." }
    ],
    contributors: [
      { name: "Hero of Alexandria", years: "1st century CE", nationality: "Greek-Egyptian / Roman Egypt", biography: "Hero worked in Alexandria, one of the ancient world's great centers of science and learning. He wrote about mathematics, mechanics, pneumatics, and automated devices.", education: "Exact education unknown; he belonged to the advanced Hellenistic scientific tradition of Alexandria.", achievements: ["Pneumatic devices", "Mechanical automata", "Mathematical works", "Aeolipile"], role: "Demonstrated that steam could create rotary motion, although not in an industrial engine.", interestingFact: "His aeolipile is often called an ancestor of the steam engine." },
      { name: "Denis Papin", years: "1647–c.1713", nationality: "French", biography: "Papin was a physicist, mathematician, and inventor who worked on pressure, steam, and mechanical devices.", education: "Studied medicine and science and worked with leading European scientists.", achievements: ["Steam digester", "Pressure experiments", "Piston concepts"], role: "Connected steam pressure, vacuum, and piston movement in ways that influenced later engine development.", interestingFact: "His steam digester was a forerunner of the pressure cooker." },
      { name: "Thomas Savery", years: "c.1650–1715", nationality: "English", biography: "Savery was an engineer and inventor interested in pumping water, especially from mines.", education: "Formal details are limited; he was a practical inventor and military engineer.", achievements: ["1698 patent for an early steam pump", "Promotion of The Miner's Friend"], role: "Created an early steam pump using pressure and condensation to raise water.", interestingFact: "His invention showed commercial interest in steam-powered mine drainage, even though it was limited." },
      { name: "Thomas Newcomen", years: "1664–1729", nationality: "English", biography: "Newcomen was a Dartmouth ironmonger and Baptist lay preacher who solved a serious mine-drainage problem.", education: "He was a practical engineer and craftsman rather than a university scientist.", achievements: ["First practical atmospheric steam engine", "Mine-pumping engine used widely for decades"], role: "Built the first practical steam engine in 1712.", interestingFact: "His engine used atmospheric pressure, not high-pressure steam, to do much of the work." },
      { name: "James Watt", years: "1736–1819", nationality: "Scottish", biography: "Watt was an instrument maker and engineer associated with the University of Glasgow before becoming one of the most important figures in industrial history.", education: "Trained as a maker of mathematical and scientific instruments.", achievements: ["Separate condenser", "Improved steam engine efficiency", "Rotary motion applications", "Engine indicator"], role: "Transformed the steam engine into a more efficient and versatile industrial machine.", interestingFact: "The unit of power, the watt, is named after him." },
      { name: "Matthew Boulton", years: "1728–1809", nationality: "English", biography: "Boulton was an industrialist and entrepreneur who owned the Soho Manufactory near Birmingham.", education: "Practical business and technical training.", achievements: ["Soho Manufactory", "Commercial partnership with James Watt"], role: "Provided manufacturing capacity, capital, business strategy, and customer networks.", interestingFact: "Boulton and Watt often charged customers based on fuel savings." },
      { name: "Richard Trevithick", years: "1771–1833", nationality: "British / Cornish", biography: "Trevithick was a mining engineer and inventor from Cornwall, where mining encouraged compact powerful engines.", education: "Practical engineering experience rather than elite academic training.", achievements: ["High-pressure engines", "Early road steam vehicles", "Early railway locomotives"], role: "Helped move steam from large stationary engines toward compact mobile engines.", interestingFact: "His 1804 Penydarren locomotive is a landmark in railway history." },
      { name: "George Stephenson", years: "1781–1848", nationality: "British", biography: "Stephenson was an engineer who became famous for railway development.", education: "Limited formal schooling; learned through practical mine work.", achievements: ["Improved steam locomotives", "Railway engineering", "Rocket locomotive with Robert Stephenson"], role: "Helped make steam railways practical and commercially successful.", interestingFact: "He is often called the Father of Railways, although many people contributed." },
      { name: "Charles Algernon Parsons", years: "1854–1931", nationality: "Anglo-Irish / British", biography: "Parsons was an engineer who developed steam turbine technology.", education: "Studied at Trinity College Dublin and Cambridge.", achievements: ["Steam turbine generator", "Marine turbine propulsion"], role: "Moved steam power from piston engines toward high-speed turbines.", interestingFact: "Steam turbines remain central to many modern power plants." }
    ],
    generations: [
      { title: "Ancient steam devices", technology: "Simple steam reaction devices such as the aeolipile.", improvements: "Demonstrated steam-driven motion.", advantages: "Showed an important principle.", disadvantages: "Not useful for industrial power.", famousProducts: "Hero's aeolipile", companies: "None" },
      { title: "Early steam pumps", technology: "Steam pressure and vacuum pumps.", improvements: "Attempted to raise water mechanically.", advantages: "Could pump water without animals or waterwheels.", disadvantages: "Limited height, danger, and inefficiency.", famousProducts: "Savery pump", companies: "Individual inventors and early investors" },
      { title: "Atmospheric engines", technology: "Steam condensation created vacuum; atmospheric pressure moved a piston.", improvements: "Practical mine pumping.", advantages: "Reliable for deep mines.", disadvantages: "Wasted heat by cooling the cylinder each cycle.", famousProducts: "Newcomen atmospheric engine", companies: "Regional engine builders and mine operators" },
      { title: "Watt improved engines", technology: "Separate condenser, better sealing, motion control, rotary power.", improvements: "Much better fuel efficiency.", advantages: "Useful in factories, mills, and many industries.", disadvantages: "Still large and expensive.", famousProducts: "Boulton & Watt beam engines", companies: "Boulton & Watt" },
      { title: "High-pressure engines", technology: "Higher-pressure steam directly moved pistons.", improvements: "Smaller and more powerful engines.", advantages: "Suitable for transport and compact machinery.", disadvantages: "Greater explosion risk.", famousProducts: "Trevithick high-pressure engines", companies: "Cornish engine builders and locomotive pioneers" },
      { title: "Steam locomotives", technology: "High-pressure boiler, cylinders, driving wheels, valve gear.", improvements: "Powered railway transport.", advantages: "Fast land transport and heavy freight movement.", disadvantages: "Smoke, maintenance, fuel stops, and water stops.", famousProducts: "Trevithick locomotive; Stephenson's Rocket", companies: "Robert Stephenson and Company; railway engineering firms" },
      { title: "Steam turbines", technology: "High-speed turbines using steam flow to spin blades.", improvements: "Efficient rotary power for electricity generation.", advantages: "Smooth, high-speed, ideal for generators.", disadvantages: "Complex manufacturing and high operating conditions.", famousProducts: "Parsons steam turbine generator", companies: "Parsons and later major turbine manufacturers" },
      { title: "Modern steam systems", technology: "Superheated steam, turbines, digital controls, nuclear, geothermal, solar thermal, and combined-cycle systems.", improvements: "Higher efficiency, automation, monitoring, and lower emissions when heat sources are low-carbon.", advantages: "Still useful in electricity generation and industrial heat.", disadvantages: "Fossil-fuel systems still produce emissions unless decarbonized.", famousProducts: "Modern steam turbines and power-plant systems", companies: "GE Vernova, Siemens Energy, Mitsubishi Power, Toshiba, Doosan, and others" }
    ],
    milestones: [
      { year: "1st century CE", milestone: "Hero's aeolipile demonstrates steam-driven motion." },
      { year: "1698", milestone: "Savery patents an early steam pump." },
      { year: "1712", milestone: "Newcomen engine becomes the first practical steam engine." },
      { year: "1765", milestone: "Watt develops the separate condenser idea." },
      { year: "1769", milestone: "Watt patents the separate condenser." },
      { year: "1770s", milestone: "Boulton and Watt commercialize improved engines." },
      { year: "1780s", milestone: "Rotary steam engines power factories." },
      { year: "1802", milestone: "Trevithick and Vivian patent a high-pressure engine." },
      { year: "1804", milestone: "Trevithick locomotive runs in Wales." },
      { year: "1829", milestone: "Stephenson's Rocket helps establish practical locomotive design." },
      { year: "1830s", milestone: "Public railways expand." },
      { year: "1884", milestone: "Parsons steam turbine generator appears." },
      { year: "1900s", milestone: "Steam turbines become key to electric power." },
      { year: "1950s onward", milestone: "Nuclear plants use steam turbines to generate electricity." },
      { year: "2000s onward", milestone: "Digital monitoring and AI-assisted maintenance improve steam systems." }
    ],
    models: [
      { model: "Aeolipile", company: "Hero of Alexandria", year: "1st century CE", features: "Steam reaction sphere; demonstration device" },
      { model: "Savery Pump", company: "Thomas Savery", year: "1698", features: "Steam pressure and condensation pump" },
      { model: "Newcomen Atmospheric Engine", company: "Thomas Newcomen", year: "1712", features: "Practical mine pumping engine" },
      { model: "Watt Separate Condenser Engine", company: "James Watt / Boulton & Watt", year: "1760s–1770s", features: "Improved efficiency using separate condenser" },
      { model: "Boulton & Watt Beam Engine", company: "Boulton & Watt", year: "Late 1700s", features: "Industrial stationary power" },
      { model: "Trevithick High-Pressure Engine", company: "Richard Trevithick / Andrew Vivian", year: "1802", features: "Compact high-pressure steam engine" },
      { model: "Penydarren Locomotive", company: "Richard Trevithick", year: "1804", features: "Early railway locomotive" },
      { model: "Stephenson's Rocket", company: "Robert Stephenson and Company", year: "1829", features: "Influential locomotive design" },
      { model: "Corliss Steam Engine", company: "George Henry Corliss", year: "1849", features: "Improved valve gear and efficiency" },
      { model: "Parsons Steam Turbine Generator", company: "Charles Parsons", year: "1884", features: "High-speed turbine for electricity generation" }
    ],
    decadeTimeline: [
      { decade: "1600s", development: "Air pressure and vacuum experiments prepare the science of steam power." },
      { decade: "1690s", development: "Savery patents an early steam pump." },
      { decade: "1710s", development: "Newcomen atmospheric engine becomes practical for mine pumping." },
      { decade: "1760s", development: "Watt develops the separate condenser." },
      { decade: "1770s", development: "Boulton and Watt begin commercial development." },
      { decade: "1780s", development: "Watt engines expand into factories." },
      { decade: "1800s", development: "High-pressure engines and early locomotives appear." },
      { decade: "1830s", development: "Public railways expand." },
      { decade: "1850s", development: "Steam power supports global industry and empire." },
      { decade: "1880s", development: "Steam turbines appear." },
      { decade: "1900s", development: "Steam turbines become central to power generation." },
      { decade: "1950s", development: "Diesel and electric locomotives replace steam locomotives in many countries; nuclear power uses steam turbines." },
      { decade: "1980s", development: "Digital monitoring enters industrial steam systems." },
      { decade: "2010s", development: "Smart sensors and predictive maintenance improve reliability." },
      { decade: "2020s", development: "Decarbonization drives interest in green steam, electrified boilers, geothermal steam, and AI optimization." }
    ],
    interestingFacts: [
      "The first practical steam engine was a mine pump, not a locomotive.", "Newcomen's engine used atmospheric pressure to move the piston.", "James Watt did not invent the steam engine; he greatly improved it.", "Watt's separate condenser saved fuel by keeping the main cylinder hot.", "The unit watt is named after James Watt.", "Early steam engines were often called fire engines.", "Savery's pump was advertised as The Miner's Friend.", "Hero's aeolipile spun using steam reaction force.", "Steam engines helped factories move away from rivers.", "Coal mining and steam engines supported each other.", "Early boilers could be dangerous.", "High-pressure steam made locomotives possible.", "Trevithick was a major pioneer of high-pressure steam.", "Steam locomotives needed both fuel and water.", "Steamships changed global trade routes.", "Steam power helped standardize time because railways needed schedules.", "Steam engines encouraged better metalworking.", "Precision boring of cylinders improved engine efficiency.", "Steam engines helped create mechanical engineering as a profession.", "Steam turbines still generate much of the world's electricity.", "Nuclear power plants usually use steam turbines.", "Geothermal plants can use natural steam or hot water.", "Steam engines made tourism easier through rail travel.", "Steam technology influenced thermodynamics.", "Many museums still operate historic steam engines.", "The Industrial Revolution was not caused by one invention alone, but steam power was one of its key drivers.", "Boulton and Watt's business model included charging for fuel savings.", "Steam engines were used in agriculture, mining, factories, ships, and trains."
    ],
    myths: [
      { myth: "James Watt invented the steam engine.", reality: "Watt greatly improved the steam engine, but Thomas Newcomen built the first practical engine decades earlier." },
      { myth: "The kettle story explains Watt's invention.", reality: "The kettle story is popular but unreliable. Watt's breakthrough came from engineering analysis of the Newcomen engine." },
      { myth: "Hero of Alexandria invented the Industrial Revolution.", reality: "Hero demonstrated steam motion, but his device was not an industrial engine." },
      { myth: "Steam engines were immediately used in trains.", reality: "Early steam engines were stationary pumps. Locomotives came much later." },
      { myth: "Steam power is completely obsolete.", reality: "Piston steam engines are mostly historical, but steam turbines remain vital in electricity generation." },
      { myth: "Steam engines were clean.", reality: "Steam itself is water vapor, but traditional steam engines often burned coal and caused pollution." },
      { myth: "One inventor created the steam engine alone.", reality: "The steam engine developed through many contributors over centuries." }
    ],
    faqs: [
      { question: "What is a steam engine?", answer: "A machine that uses steam pressure or steam condensation to create mechanical motion." },
      { question: "Who invented the steam engine?", answer: "There is no single inventor. Newcomen built the first practical engine; Watt improved it greatly." },
      { question: "What was the first practical steam engine used for?", answer: "It was used to pump water from mines." },
      { question: "What did James Watt invent?", answer: "He developed the separate condenser and other improvements that made engines more efficient." },
      { question: "What is a separate condenser?", answer: "A separate chamber where steam is cooled and condensed without cooling the main cylinder." },
      { question: "Why was the steam engine important?", answer: "It provided reliable power for mines, factories, transport, and electricity generation." },
      { question: "Did steam engines cause the Industrial Revolution?", answer: "They were one major cause, along with coal, iron, finance, labor, trade, and other inventions." },
      { question: "What fuel did early steam engines use?", answer: "Mostly coal, though wood and other fuels could also be used." },
      { question: "Why were mines important to steam engine development?", answer: "Mines flooded, and owners needed powerful pumps." },
      { question: "What is an atmospheric engine?", answer: "An engine that uses atmospheric pressure to push a piston after steam condensation creates a vacuum." },
      { question: "Was Hero's aeolipile a real steam engine?", answer: "It was a steam-powered device but not a practical industrial engine." },
      { question: "What is a boiler?", answer: "A vessel that heats water to produce steam." },
      { question: "What is a piston?", answer: "A moving part inside a cylinder that is pushed by pressure." },
      { question: "What is a steam turbine?", answer: "A turbine that uses fast-moving steam to spin blades and produce rotation." },
      { question: "Are steam engines still used today?", answer: "Old-style piston engines are rare, but steam turbines are widely used." },
      { question: "Do nuclear plants use steam?", answer: "Yes. Nuclear heat produces steam that drives turbines." },
      { question: "What made high-pressure steam important?", answer: "It allowed smaller and more powerful engines, useful for locomotives and vehicles." },
      { question: "Were early steam engines dangerous?", answer: "Yes. Boiler explosions were a real danger before better materials and safety systems." },
      { question: "What did Matthew Boulton contribute?", answer: "He helped Watt manufacture and commercialize improved steam engines." },
      { question: "Who was Richard Trevithick?", answer: "A Cornish engineer who pioneered high-pressure steam engines and early locomotives." },
      { question: "Why did steam locomotives decline?", answer: "Diesel and electric trains became cleaner, easier to operate, and more efficient." },
      { question: "How did steamships change history?", answer: "They made sea and river transport faster and more reliable." },
      { question: "What is thermodynamics?", answer: "The science of heat, energy, and work." },
      { question: "How did steam engines affect cities?", answer: "They encouraged factories, jobs, railways, and urban growth." },
      { question: "How did steam engines affect pollution?", answer: "Coal-burning engines produced smoke and soot." },
      { question: "What is a flywheel?", answer: "A heavy rotating wheel that helps smooth engine motion." },
      { question: "What is valve gear?", answer: "A mechanism that controls when steam enters and exits the cylinder." },
      { question: "Why were Watt engines more efficient?", answer: "They avoided repeatedly cooling and reheating the main cylinder." },
      { question: "What is the difference between a steam engine and a steam turbine?", answer: "A steam engine usually uses pistons; a turbine uses spinning blades." },
      { question: "What is the future of steam technology?", answer: "Steam will likely continue in power generation, industrial heat, nuclear energy, geothermal energy, and low-carbon systems." }
    ],
    didYouKnow: ["Steam engines were once called fire engines.", "The first practical steam engines pumped water, not trains.", "Steam power helped factories grow larger.", "Watt improved efficiency more than he increased pressure.", "Newcomen's engine was slow but useful.", "Steam locomotives helped create modern railway networks.", "Steamships made ocean travel more predictable.", "Steam turbines are still used in many power plants.", "The word horsepower was popularized by Watt to compare engines with horses.", "Coal and steam grew together during industrialization.", "Early engineers learned through workshops as much as schools.", "Boiler safety became a major engineering field.", "The steam engine influenced modern physics.", "Many historic engines still run in museums.", "Steam engines helped move heavy goods cheaply.", "Railways changed how people measured time.", "Steam power supported mass newspaper printing.", "Steam engines helped mines become deeper.", "The Industrial Revolution changed family life and work patterns.", "Steam remains important even in the age of AI."],
    quotes: [
      { quote: "I sell here, Sir, what all the world desires to have — power.", attribution: "Commonly attributed to Matthew Boulton", note: "Use as attributed unless verified from a primary source." },
      { quote: "Nature can be conquered if we can but find her weak side.", attribution: "Commonly associated with James Watt", note: "Wording varies in historical retellings." },
      { quote: "The steam engine is the mother of machines.", attribution: "Common historical expression", note: "Useful as a thematic classroom quote, not a single verified inventor quotation." }
    ],
    references: [
      "L. T. C. Rolt, Thomas Newcomen: The Prehistory of the Steam Engine.",
      "H. W. Dickinson, A Short History of the Steam Engine.",
      "Richard L. Hills, Power from Steam: A History of the Stationary Steam Engine.",
      "Robert Thurston, A History of the Growth of the Steam-Engine.",
      "Science Museum Group collection records for Newcomen Atmospheric Engine, Watt separate condenser, and Parsons steam turbine generator.",
      "ASME Engineering Landmarks and biographies of Thomas Newcomen and James Watt.",
      "American Physical Society historical article on Thomas Savery's steam engine patent.",
      "Museum Wales article on Richard Trevithick's steam locomotive.",
      "Thomas Savery's 1698 patent for raising water by fire.",
      "James Watt's 1769 patent for the separate condenser.",
      "Trevithick and Vivian's 1802 patent for high-pressure non-condensing steam engines."
    ],
    imageSuggestions: [
      { type: "Hero image", suggestion: "A dramatic educational illustration combining a beam engine, steam locomotive, factory, and modern steam turbine." },
      { type: "First prototype", suggestion: "A labeled Newcomen atmospheric engine pumping water from a mine." },
      { type: "Evolution timeline", suggestion: "Aeolipile, Savery pump, Newcomen engine, Watt engine, Trevithick locomotive, Stephenson's Rocket, steamship, Parsons turbine." },
      { type: "Cutaway diagram", suggestion: "Boiler, cylinder, piston, valve, condenser, flywheel, and connecting rod." },
      { type: "Inventor portraits", suggestion: "Hero, Papin, Savery, Newcomen, Watt, Boulton, Trevithick, Stephenson, Parsons." },
      { type: "Historical workshop", suggestion: "Eighteenth-century engineering workshop with metal parts, drawings, boiler, hand tools, and workers testing a model engine." },
      { type: "Modern version", suggestion: "Modern turbine hall with steam turbine, generator, control room screens, and digital monitoring." },
      { type: "Future concept", suggestion: "Clean-energy steam system powered by solar thermal mirrors, geothermal wells, or small modular reactor with AI monitoring." },
      { type: "Comparison infographic", suggestion: "Before and after steam: horse pump vs engine, river mill vs steam factory, sailing ship vs steamship, horse cart vs railway." }
    ],
    interactiveIdeas: [
      { title: "Timeline slider", description: "Drag from ancient Alexandria to modern power plants and reveal key inventions, inventors, and animations." },
      { title: "Before vs After comparison", description: "Split-screen comparisons of mine drainage, factory power, ships, and land transport before and after steam." },
      { title: "Interactive map", description: "Show how steam power spread from Britain to Europe, North America, Asia, and the world." },
      { title: "3D model viewer", description: "Rotatable Watt beam engine with clickable parts." },
      { title: "Animated evolution", description: "Aeolipile to piston engine to locomotive to turbine." },
      { title: "Quiz", description: "Multiple-choice and true/false checks for important concepts." },
      { title: "Flashcards", description: "Boiler, piston, condenser, atmospheric engine, high-pressure steam, turbine, horsepower, Industrial Revolution." },
      { title: "Mini documentary ideas", description: "Short video lessons: mine water to machine power, Watt's improvement, steam on the move, and steam today." },
      { title: "Classroom activity", description: "Students create a flowchart showing how heat becomes motion." },
      { title: "Debate topic", description: "Did the steam engine create progress, problems, or both?" }
    ]
  }
];

export function getInvention(slug: string) {
  return inventions.find((invention) => invention.slug === slug);
}
