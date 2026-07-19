import type { LessonContent } from "@/lib/lesson-content-types";

export const metricAndImperialUnits: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "measurement-and-units",
  lessonSlug: "metric-and-imperial-units",
  title: "Metric and Imperial Units",
  objectives: [
    "Name the SI metric units for length, mass and capacity and their common multiples.",
    "Convert within the metric system by multiplying or dividing by powers of ten.",
    "Recognise everyday imperial units: inches, feet, yards, miles, ounces, pounds and gallons.",
    "Convert between metric and imperial units using standard conversion factors.",
    "Distinguish exact conversions from approximate ones and label answers accordingly.",
    "Choose sensible units for a given measurement task.",
    "Solve multi-step word problems that mix units, always stating units in the answer.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Every measurement is a number together with a unit — 3 on its own means nothing, but 3 metres, 3 kilograms or 3 litres each tell a complete story. Most of the world, including Qatar, uses the metric (SI) system, while imperial units such as feet, pounds and gallons still appear in aviation, some trades and countries such as the United States.",
        "This lesson teaches you to move confidently within the metric system, to translate between metric and imperial when needed, and to know which conversions are exact and which are only approximate.",
      ],
    },
    {
      kind: "theory",
      heading: "Before you start",
      paragraphs: [
        "You will need comfortable multiplication and division by 10, 100 and 1,000 (moving the decimal point), and the decimal skills from earlier chapters. Standard form helps for very large or small measurements but is not required.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Metric (SI) base units",
      body: "The SI base unit of length is the metre (m), of mass the kilogram (kg), and of time the second (s). Capacity is commonly measured in litres (l), where $1\\text{ l} = 1000\\text{ cm}^3$. Prefixes scale each unit: milli- means one thousandth, centi- one hundredth, and kilo- one thousand.",
    },
    {
      kind: "table",
      heading: "Metric conversions (all exact)",
      headers: ["Quantity", "Conversion", "In symbols"],
      rows: [
        ["Length", "10 millimetres = 1 centimetre", "$10\\text{ mm} = 1\\text{ cm}$"],
        ["Length", "100 centimetres = 1 metre", "$100\\text{ cm} = 1\\text{ m}$"],
        ["Length", "1,000 metres = 1 kilometre", "$1000\\text{ m} = 1\\text{ km}$"],
        ["Mass", "1,000 grams = 1 kilogram", "$1000\\text{ g} = 1\\text{ kg}$"],
        ["Mass", "1,000 kilograms = 1 tonne", "$1000\\text{ kg} = 1\\text{ t}$"],
        ["Capacity", "1,000 millilitres = 1 litre", "$1000\\text{ ml} = 1\\text{ l}$"],
        ["Capacity", "1 millilitre = 1 cubic centimetre", "$1\\text{ ml} = 1\\text{ cm}^3$"],
      ],
      note: "Metric conversions are exact because the system is built on powers of ten.",
    },
    {
      kind: "theory",
      heading: "Converting within the metric system",
      paragraphs: [
        "Going from a larger unit to a smaller one means more of them, so multiply. Going from a smaller unit to a larger one means fewer of them, so divide.",
        "Because every factor is a power of ten, the digits never change — only the decimal point moves. For example, $3.75\\text{ km} = 3750\\text{ m}$ (multiply by 1,000) and $860\\text{ g} = 0.86\\text{ kg}$ (divide by 1,000).",
      ],
      list: [
        "km → m: multiply by 1,000; m → km: divide by 1,000.",
        "m → cm: multiply by 100; cm → m: divide by 100.",
        "cm → mm: multiply by 10; mm → cm: divide by 10.",
        "kg → g and l → ml: multiply by 1,000 (and divide to go back).",
      ],
    },
    {
      kind: "example",
      prompt: "Convert 4.28 kilometres into metres, and 4,250 millilitres into litres.",
      steps: [
        "Kilometres to metres is large-to-small, so multiply by 1,000: $4.28 \\times 1000 = 4280$.",
        "Millilitres to litres is small-to-large, so divide by 1,000: $4250 \\div 1000 = 4.25$.",
      ],
      answer: "$4.28\\text{ km} = 4280\\text{ m}$ and $4250\\text{ ml} = 4.25\\text{ l}$.",
    },
    {
      kind: "theory",
      heading: "Imperial units",
      paragraphs: [
        "Imperial units grew from historical measures and do not use powers of ten. The relationships inside the system are exact but irregular: 12 inches make a foot, 3 feet make a yard, 1,760 yards make a mile, 16 ounces make a pound, and 14 pounds make a stone.",
        "You will still meet imperial units in daily life: television screens are sold by the inch, aircraft altitude is given in feet, running events sometimes quote miles, and recipes from the United States use ounces and pounds.",
      ],
    },
    {
      kind: "table",
      heading: "Metric ↔ imperial conversion factors",
      headers: ["Imperial unit", "Metric equivalent", "Exact or approximate?"],
      rows: [
        ["1 inch (in)", "2.54 cm", "Exact (by definition)"],
        ["1 foot (ft) = 12 in", "30.48 cm", "Exact"],
        ["1 yard (yd) = 3 ft", "0.9144 m", "Exact"],
        ["1 mile (mi)", "≈ 1.609 km", "Approximate (rounded)"],
        ["1 ounce (oz)", "≈ 28.35 g", "Approximate (rounded)"],
        ["1 pound (lb) = 16 oz", "≈ 453.6 g", "Approximate (rounded)"],
        ["1 UK gallon (gal)", "≈ 4.546 l", "Approximate (rounded)"],
        ["1 US gallon", "≈ 3.785 l", "Approximate (rounded)"],
      ],
      note: "The inch is defined as exactly 2.54 cm, so inch, foot and yard conversions are exact. The other factors above are rounded, so answers using them are approximate — write ≈, not =.",
    },
    {
      kind: "callout",
      variant: "remember",
      title: "Exact vs approximate",
      body: "Metric-to-metric conversions are always exact. Conversions through the inch (in, ft, yd) are exact because $1\\text{ in} = 2.54\\text{ cm}$ by definition. Conversions using rounded factors — miles, ounces, pounds, gallons — are approximate, and your answer should say so with the ≈ symbol.",
    },
    {
      kind: "unitConverterExplorer",
      heading: "Interactive: unit conversion laboratory",
    },
    {
      kind: "example",
      prompt: "A 65-inch television is advertised. What is the screen's diagonal in centimetres?",
      steps: [
        "Use the exact factor $1\\text{ in} = 2.54\\text{ cm}$.",
        "Multiply: $65 \\times 2.54 = 165.1$.",
      ],
      answer: "The diagonal is exactly $165.1\\text{ cm}$.",
    },
    {
      kind: "example",
      prompt:
        "A road sign in the US says the next town is 26 miles away. Roughly how far is that in kilometres?",
      steps: [
        "Use the approximate factor $1\\text{ mi} \\approx 1.609\\text{ km}$.",
        "Multiply: $26 \\times 1.609 = 41.834$.",
        "Round sensibly and label the answer as approximate.",
      ],
      answer: "The town is approximately $41.8\\text{ km}$ away ($\\approx 42\\text{ km}$).",
    },
    {
      kind: "example",
      prompt:
        "A recipe needs 2 lb of flour. A shop sells flour in 500 g bags. How many bags are needed?",
      steps: [
        "Convert pounds to grams with $1\\text{ lb} \\approx 453.6\\text{ g}$: $2 \\times 453.6 = 907.2\\text{ g}$.",
        "Each bag holds 500 g, so $907.2 \\div 500 = 1.81\\ldots$ bags.",
        "You cannot buy part of a bag, so round up.",
      ],
      answer: "Two 500 g bags are needed (about 907 g required in total).",
    },
    {
      kind: "theory",
      heading: "Choosing sensible units",
      paragraphs: [
        "A good unit gives numbers that are easy to picture: neither enormous nor microscopic. The thickness of a phone suits millimetres, a person's height suits centimetres or metres, a drive between cities suits kilometres.",
        "On a construction site, drawings are typically dimensioned in millimetres to avoid decimal points entirely — a 3.6 m wall is written as 3600. Concrete is ordered in cubic metres and steel bars by mass in kilograms or tonnes.",
      ],
    },
    {
      kind: "cards",
      heading: "Which unit would you choose?",
      columns: 3,
      items: [
        {
          title: "Grain of rice",
          value: "mm / mg",
          text: "A few millimetres long, tens of milligrams.",
        },
        { title: "Bottle of water", value: "ml or l", text: "A typical bottle is 500 ml." },
        { title: "Person's mass", value: "kg", text: "Adults are usually 50–100 kg." },
        { title: "Doha to Al Khor", value: "km", text: "Around 50 km by road." },
        { title: "Truck load of sand", value: "t", text: "Several tonnes at a time." },
        {
          title: "Aircraft altitude",
          value: "ft",
          text: "Aviation still uses feet: cruise ≈ 38,000 ft.",
        },
      ],
    },
    {
      kind: "theory",
      heading: "Compound units: a preview",
      paragraphs: [
        "Some quantities combine two units. Speed is distance per time (km/h or m/s) and density is mass per volume (g/cm³ or kg/m³). When converting compound units, convert each part separately: $72\\text{ km/h} = \\dfrac{72{,}000\\text{ m}}{3600\\text{ s}} = 20\\text{ m/s}$.",
        "A later lesson explores compound measures fully; for now, notice that the same multiply-or-divide logic applies to each unit in turn.",
      ],
    },
    {
      kind: "realWorld",
      heading: "Units at work",
      items: [
        {
          area: "Construction",
          text: "Site drawings in millimetres, concrete in cubic metres, rebar in tonnes — mixing these up is expensive.",
        },
        {
          area: "Travel",
          text: "Car speedometers in the Gulf show km/h, while US rentals show miles per hour; pilots use feet and nautical miles.",
        },
        {
          area: "Shopping",
          text: "Supermarket unit prices (per kg, per litre) let you compare packet sizes fairly.",
        },
        {
          area: "Cooking",
          text: "International recipes switch between grams, ounces and cups; accurate conversion keeps the dish right.",
        },
        {
          area: "Health",
          text: "Medicine doses are prescribed in milligrams per kilogram of body mass — unit errors are dangerous.",
        },
      ],
    },
    {
      kind: "classifyActivity",
      heading: "Activity — metric or imperial?",
      stepKey: "unitsClassify",
      categories: ["Metric", "Imperial"],
      items: [
        { term: "kilometre", category: "Metric" },
        { term: "mile", category: "Imperial" },
        { term: "kilogram", category: "Metric" },
        { term: "pound", category: "Imperial" },
        { term: "litre", category: "Metric" },
        { term: "gallon", category: "Imperial" },
        { term: "millimetre", category: "Metric" },
        { term: "inch", category: "Imperial" },
        { term: "tonne", category: "Metric" },
        { term: "ounce", category: "Imperial" },
      ],
    },
    {
      kind: "flashcards",
      cards: [
        { front: "How many metres in 2.4 km?", back: "$2400$ m — multiply by 1,000." },
        { front: "How many kilograms in 750 g?", back: "$0.75$ kg — divide by 1,000." },
        { front: "1 inch in centimetres?", back: "Exactly 2.54 cm." },
        { front: "1 mile in kilometres?", back: "Approximately 1.609 km (≈, rounded factor)." },
        { front: "1 litre in millilitres and cm³?", back: "1,000 ml, which is 1,000 cm³." },
        { front: "12 inches = ?", back: "1 foot (exactly 30.48 cm)." },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: metric and imperial units",
      stepKey: "unitsPractice",
      questions: [
        {
          prompt: "Convert 5.6 m into centimetres.",
          options: ["0.056 cm", "56 cm", "560 cm", "5,600 cm"],
          answer: 2,
          explanation: "Metres to centimetres multiplies by 100: $5.6 \\times 100 = 560$.",
        },
        {
          prompt: "Convert 3,400 g into kilograms.",
          options: ["0.34 kg", "3.4 kg", "34 kg", "340 kg"],
          answer: 1,
          explanation: "Divide by 1,000: $3400 \\div 1000 = 3.4$ kg.",
        },
        {
          prompt: "Convert 0.75 l into millilitres.",
          options: ["7.5 ml", "75 ml", "750 ml", "7,500 ml"],
          answer: 2,
          explanation: "Multiply by 1,000: $0.75 \\times 1000 = 750$ ml.",
        },
        {
          prompt: "How many millimetres are in 2.07 m?",
          options: ["20.7 mm", "207 mm", "2,070 mm", "20,700 mm"],
          answer: 2,
          explanation: "Metres to millimetres multiplies by 1,000: $2.07 \\times 1000 = 2070$.",
        },
        {
          prompt: "A photo frame is 8 inches wide. Its width in centimetres is",
          options: ["exactly 20.32 cm", "about 16 cm", "exactly 80 cm", "about 3.15 cm"],
          answer: 0,
          explanation: "$8 \\times 2.54 = 20.32$, and the inch factor is exact.",
        },
        {
          prompt: "A marathon is about 26.2 miles. Roughly how long is it in kilometres?",
          options: ["≈ 16 km", "≈ 26 km", "≈ 42 km", "≈ 52 km"],
          answer: 2,
          explanation: "$26.2 \\times 1.609 \\approx 42.2$ km — the famous 42 km distance.",
        },
        {
          prompt: "Which is the most sensible unit for the mass of a delivery truck's cargo?",
          options: ["grams", "kilograms", "tonnes", "ounces"],
          answer: 2,
          explanation:
            "Cargo loads run into thousands of kilograms, so tonnes keep the numbers small.",
        },
        {
          prompt: "A water tank holds 0.4 m³. Given $1\\text{ m}^3 = 1000$ litres, its capacity is",
          options: ["4 l", "40 l", "400 l", "4,000 l"],
          answer: 2,
          explanation: "$0.4 \\times 1000 = 400$ litres.",
        },
        {
          prompt: "A US recipe lists 12 oz of butter. Approximately how many grams is that?",
          options: ["≈ 240 g", "≈ 280 g", "≈ 340 g", "≈ 454 g"],
          answer: 2,
          explanation: "$12 \\times 28.35 \\approx 340$ g (approximate, rounded factor).",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong:
            "Multiplying when converting to a larger unit, e.g. $500\\text{ g} = 500{,}000\\text{ kg}$.",
          right: "Larger unit means fewer of them: divide. $500\\text{ g} = 0.5\\text{ kg}$.",
        },
        {
          wrong: "Using 100 for every metric conversion, e.g. $2\\text{ km} = 200\\text{ m}$.",
          right:
            "Each pair has its own factor: km–m is 1,000, m–cm is 100, cm–mm is 10. So $2\\text{ km} = 2000\\text{ m}$.",
        },
        {
          wrong: "Writing '26 miles = 41.834 km' as an exact equality.",
          right:
            "The mile factor is rounded, so write $26\\text{ mi} \\approx 41.8\\text{ km}$ and round sensibly.",
        },
        {
          wrong:
            "Adding measurements in different units directly: $1.2\\text{ m} + 45\\text{ cm} = 46.2$.",
          right:
            "Convert to a common unit first: $120\\text{ cm} + 45\\text{ cm} = 165\\text{ cm} = 1.65\\text{ m}$.",
        },
        {
          wrong: "Giving a bare number as the final answer.",
          right: "A measurement always needs its unit: write 165 cm, not just 165.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Metric units scale by powers of ten: mm → cm (×10 back), cm → m (×100 back), m → km (×1,000 back), g → kg → t and ml → l by 1,000.",
        "Convert large-to-small by multiplying and small-to-large by dividing; only the decimal point moves.",
        "Imperial units are irregular: 12 in = 1 ft, 3 ft = 1 yd, 1,760 yd = 1 mi, 16 oz = 1 lb.",
        "Inch-based conversions are exact ($1\\text{ in} = 2.54\\text{ cm}$); mile, ounce, pound and gallon factors are approximate — mark answers with ≈.",
        "Choose units that keep numbers easy to picture, and always convert to a common unit before adding or comparing.",
        "Never write a measurement without its unit.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: metric and imperial units",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Convert 7.25 km into metres.",
          options: ["72.5 m", "725 m", "7,250 m", "72,500 m"],
          answer: 2,
          marks: 1,
          explanation: "Multiply by 1,000: $7.25 \\times 1000 = 7250$ m.",
        },
        {
          type: "mc",
          prompt: "Convert castor sugar: 0.62 kg into grams.",
          options: ["6.2 g", "62 g", "620 g", "6,200 g"],
          answer: 2,
          marks: 1,
          explanation: "Multiply by 1,000: $0.62 \\times 1000 = 620$ g.",
        },
        {
          type: "tf",
          prompt: "The conversion 1 inch = 2.54 cm is exact.",
          answer: true,
          marks: 1,
          explanation: "The inch is defined internationally as exactly 2.54 cm, so no ≈ is needed.",
        },
        {
          type: "mc",
          prompt: "Which conversion is only approximate?",
          options: [
            "$1\\text{ ft} = 30.48\\text{ cm}$",
            "$1\\text{ m} = 100\\text{ cm}$",
            "$1\\text{ lb} \\approx 453.6\\text{ g}$",
            "$1\\text{ l} = 1000\\text{ ml}$",
          ],
          answer: 2,
          marks: 2,
          explanation: "The pound-to-gram factor is rounded; the others are exact by definition.",
        },
        {
          type: "matching",
          prompt: "Match each measurement task to the most sensible unit.",
          left: [
            "Thickness of a coin",
            "Distance between two cities",
            "Mass of an apple",
            "Capacity of a swimming pool",
          ],
          options: ["kilometres", "millimetres", "litres", "grams"],
          answer: [1, 0, 3, 2],
          marks: 4,
          explanation:
            "Coins are a few millimetres thick, city gaps span kilometres, apples weigh about 150–200 g, and pools hold thousands of litres.",
        },
        {
          type: "mc",
          prompt:
            "A fence is built from panels 180 cm long. How many panels are needed for a straight run of 27 m?",
          options: ["12", "15", "18", "150"],
          answer: 1,
          marks: 2,
          explanation:
            "Convert first: $27\\text{ m} = 2700\\text{ cm}$; then $2700 \\div 180 = 15$ panels.",
        },
        {
          type: "multi",
          prompt: "Select every true statement.",
          options: [
            "Converting cm to m divides by 100.",
            "A tonne is 1,000 kg.",
            "A US gallon and a UK gallon are the same size.",
            "1 ml of water occupies 1 cm³.",
          ],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "US and UK gallons differ: about 3.785 l versus about 4.546 l.",
        },
        {
          type: "mc",
          prompt: "A driver in the US sees a 55 mph speed limit. Roughly what is that in km/h?",
          options: ["≈ 34 km/h", "≈ 55 km/h", "≈ 70 km/h", "≈ 89 km/h"],
          answer: 3,
          marks: 2,
          explanation: "$55 \\times 1.609 \\approx 88.5$, so roughly 89 km/h (approximate factor).",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "unitConverterExplorer", label: "Use the interactive unit converter" },
        { key: "unitsClassify", label: "Sort the metric and imperial units" },
        { key: "unitsPractice", label: "Complete the practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
