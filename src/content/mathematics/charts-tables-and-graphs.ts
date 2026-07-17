import type { LessonContent } from "@/lib/lesson-content-types";

export const chartsTablesAndGraphs: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "the-coordinate-plane-and-data-basics",
  lessonSlug: "charts-tables-and-graphs",
  title: "Charts, Tables and Graphs",
  objectives: [
    "Organize raw data in a frequency table.",
    "Choose an appropriate chart for categorical or time-based data.",
    "Read and construct bar charts using a consistent scale.",
    "Interpret pictograms, including keys representing more than one item.",
    "Read line graphs and describe changes over time.",
    "Interpret pie charts using fractions, percentages and angles.",
    "Calculate totals, differences, ranges and simple averages from data displays.",
    "Identify misleading scales, missing labels and other weaknesses in graphs.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "Data become useful when they are organized clearly. Tables preserve exact values, while charts and graphs help us see comparisons, trends and proportions quickly.",
        "A good display tells the truth without making the reader guess. It has a meaningful title, correctly labelled axes or categories, units, an appropriate scale and an accurate key when symbols or colours are used.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Data",
      body: "Data are collected facts, measurements or observations. Categorical data describe groups, such as favourite fruit. Numerical data are numbers, such as height, temperature or number of books read.",
    },
    {
      kind: "theory",
      heading: "From raw data to a frequency table",
      paragraphs: [
        "Raw data are the values in the order they were collected. A frequency table groups equal values or categories and records how often each occurs.",
        "Tally marks are useful while counting. The fifth tally crosses the previous four, making groups of five easy to recognize.",
      ],
    },
    {
      kind: "example",
      prompt: "Organize the survey responses A, B, A, C, B, A, D, B, A, C into a frequency table.",
      steps: [
        "List each distinct category: A, B, C and D.",
        "Count A: it occurs 4 times.",
        "Count B: it occurs 3 times.",
        "Count C: it occurs 2 times; D occurs once.",
        "Check the total: $4+3+2+1=10$, matching the 10 responses.",
      ],
      answer: "The frequencies are A: 4, B: 3, C: 2 and D: 1.",
    },
    {
      kind: "table",
      heading: "Choosing a suitable representation",
      headers: ["Display", "Best used for", "Important feature"],
      rows: [
        ["Table", "Exact values and organized records", "Clear headings and units"],
        ["Bar chart", "Comparing separate categories", "Bars have equal width and gaps"],
        ["Pictogram", "Small, simple categorical data", "A key states what each symbol represents"],
        [
          "Line graph",
          "Change over time or another continuous order",
          "Points are joined in sequence",
        ],
        ["Pie chart", "Parts of one whole", "All sectors total 100% or $360^\circ$"],
      ],
    },
    {
      kind: "theory",
      heading: "Bar charts",
      paragraphs: [
        "A bar chart compares categories. The categories are placed on one axis and frequency or value on the other. Bars should have equal width, equal gaps and heights matching the scale.",
        "The vertical axis should normally begin at zero. If it does not, the break or starting value must be made obvious because a shortened scale can exaggerate differences.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A bar chart shows 12 votes for red, 9 for blue, 15 for green and 4 for yellow. Find the total and the difference between the most and least popular colours.",
      steps: [
        "Add all bar heights: $12+9+15+4=40$ votes.",
        "The greatest value is 15 and the least is 4.",
        "Find the difference: $15-4=11$.",
      ],
      answer: "There are 40 votes in total, and the difference is 11 votes.",
    },
    {
      kind: "example",
      prompt:
        "A bar rises halfway between 20 and 30 on an axis marked every 10 units. What value does it represent?",
      steps: ["The interval from 20 to 30 has size 10.", "Half of 10 is 5.", "Add 5 to 20."],
      answer: "The bar represents 25.",
    },
    {
      kind: "theory",
      heading: "Pictograms and their keys",
      paragraphs: [
        "A pictogram uses repeated pictures or symbols. Never count the symbols until you have read the key. If one symbol represents 4 people, three symbols represent $3\times4=12$ people.",
        "A half-symbol represents half the key value. This only works when the part-symbol is drawn and explained clearly.",
      ],
    },
    {
      kind: "example",
      prompt:
        "In a pictogram, one star represents 6 books. Monday has 4 stars and Tuesday has 2.5 stars. How many books were read on each day?",
      steps: [
        "Monday: $4\times6=24$ books.",
        "Tuesday: $2.5\times6=15$ books.",
        "Check the half-symbol: half of 6 is 3, so 2 full stars plus a half-star give $12+3=15$.",
      ],
      answer: "Monday: 24 books; Tuesday: 15 books.",
    },
    {
      kind: "coordinateDataExplorer",
      mode: "data",
      heading: "Interactive charts, tables and graphs laboratory",
    },
    {
      kind: "theory",
      heading: "Line graphs",
      paragraphs: [
        "A line graph is useful when data are ordered, especially over time. Each point represents a pair such as (time, temperature), and consecutive points are joined to show the direction and rate of change.",
        "An upward segment means the value increased, a downward segment means it decreased, and a horizontal segment means it stayed constant. The steepness shows how quickly the change occurred, but only when the scales are understood.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A temperature line graph shows 18°C at 8:00, 24°C at 12:00 and 21°C at 16:00. Describe the changes.",
      steps: [
        "From 8:00 to 12:00, the temperature rises by $24-18=6$°C.",
        "From 12:00 to 16:00, it falls by $24-21=3$°C.",
        "The highest recorded value is 24°C at 12:00.",
      ],
      answer: "It rises 6°C, reaches a maximum at noon, then falls 3°C.",
    },
    {
      kind: "example",
      prompt:
        "A tank contains 40 L at 1 minute, 55 L at 2 minutes, 70 L at 3 minutes and 85 L at 4 minutes. What pattern does the line graph show?",
      steps: [
        "Calculate consecutive changes: $55-40=15$, $70-55=15$, $85-70=15$.",
        "The volume increases by the same amount each minute.",
        "Equal increases over equal time intervals produce a straight rising line.",
      ],
      answer: "The tank fills at a constant rate of 15 L per minute.",
    },
    {
      kind: "theory",
      heading: "Pie charts",
      paragraphs: [
        "A pie chart represents one total as a circle. Each sector's angle is proportional to its frequency. The complete circle represents 100%, or $360^\circ$.",
        "To calculate an angle, multiply the fraction of the total by $360^\circ$. To calculate a frequency from an angle, multiply the angle fraction by the total frequency.",
      ],
    },
    {
      kind: "formula",
      latex:
        "\\text{sector angle}=\\frac{\\text{category frequency}}{\\text{total frequency}}\\times360^\\circ",
      caption: "All sector angles should add to $360^\circ$.",
    },
    {
      kind: "example",
      prompt:
        "In a survey of 40 students, 10 choose football. Find football's pie-chart angle and percentage.",
      steps: [
        "Write the fraction: $\frac{10}{40}=\frac14$.",
        "Angle: $\frac14\times360^\circ=90^\circ$.",
        "Percentage: $\frac14\times100\%=25\%$.",
      ],
      answer: "The sector is $90^\circ$ and represents 25%.",
    },
    {
      kind: "example",
      prompt:
        "A $72^\circ$ sector represents students who walk to school. If 50 students were surveyed, how many walk?",
      steps: [
        "The sector fraction is $\frac{72}{360}=\frac15$.",
        "Find one fifth of 50: $50\div5=10$.",
      ],
      answer: "10 students walk to school.",
    },
    {
      kind: "example",
      prompt:
        "A pie chart has sectors of $120^\circ$, $90^\circ$, $60^\circ$ and one missing sector. Find the missing angle.",
      steps: [
        "Add the known angles: $120+90+60=270^\circ$.",
        "Subtract from the complete circle: $360-270=90^\circ$.",
      ],
      answer: "The missing sector is $90^\circ$.",
    },
    {
      kind: "theory",
      heading: "Calculations from data displays",
      paragraphs: [
        "Graphs often support calculations as well as visual comparisons. Read each value accurately before calculating totals, differences, range or mean.",
        "The range is maximum minus minimum. The arithmetic mean is the total of all values divided by the number of values.",
      ],
    },
    {
      kind: "formula",
      latex: "\\text{mean}=\\frac{\\text{sum of the values}}{\\text{number of values}}",
    },
    {
      kind: "example",
      prompt:
        "A line graph records daily sales of 18, 22, 15, 25 and 20 items. Find the range and mean.",
      steps: [
        "Range: $25-15=10$ items.",
        "Total: $18+22+15+25+20=100$.",
        "There are 5 days, so mean $=100\div5=20$.",
      ],
      answer: "Range = 10 items; mean = 20 items per day.",
    },
    {
      kind: "theory",
      heading: "Misleading graphs",
      paragraphs: [
        "A graph may use correct numbers but still create a misleading impression. Always inspect the scale and design rather than trusting the shape at first glance.",
      ],
      list: [
        "A vertical axis that starts above zero can exaggerate small differences in bar heights.",
        "Unequal intervals can distort how quickly values appear to change.",
        "Three-dimensional bars or pictures can make areas look larger than the values justify.",
        "Missing titles, units, labels, keys or data sources prevent reliable interpretation.",
        "Selecting only a convenient time period can hide the wider trend.",
      ],
    },
    {
      kind: "example",
      prompt:
        "Company A scores 82 and Company B scores 86. A bar chart begins at 80 instead of 0. Explain the possible misleading effect.",
      steps: [
        "The true difference is only $86-82=4$ points.",
        "With a zero baseline, the bars are similar in height.",
        "With an axis beginning at 80, one visible bar has height 2 and the other 6, making B appear three times as large.",
      ],
      answer:
        "The truncated axis exaggerates a small 4-point difference. The labels may be numerically correct, but the visual comparison is misleading.",
    },
    {
      kind: "callout",
      variant: "tip",
      title: "Five checks before answering",
      body: "Read the title, category labels, units, key and scale. Then identify exactly what the question asks before taking values from the graph.",
    },
    {
      kind: "realWorld",
      items: [
        { area: "Business", text: "Sales dashboards compare products and show changes over time." },
        {
          area: "Weather",
          text: "Line graphs display temperature, rainfall and wind measurements.",
        },
        {
          area: "Public health",
          text: "Charts communicate case counts, vaccination rates and survey results.",
        },
        {
          area: "Sport",
          text: "Tables and graphs summarize scores, rankings and player performance.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Counting pictogram symbols without reading the key.",
          right: "Multiply each whole or partial symbol by the key value.",
        },
        {
          wrong: "Joining bars together in a basic categorical bar chart.",
          right: "Use equal gaps because the categories are separate.",
        },
        {
          wrong: "Reading every grid line as one unit.",
          right: "Calculate the value of each interval from the numbered scale.",
        },
        {
          wrong: "Assuming the tallest-looking bar proves a huge difference.",
          right: "Check whether the vertical axis starts at zero and uses equal intervals.",
        },
        {
          wrong: "Using a pie chart for unrelated totals.",
          right: "A pie chart should show categories that form one meaningful whole.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: charts, tables and graphs",
      stepKey: "dataPractice",
      questions: [
        {
          prompt: "Which display is usually best for showing temperature changes every hour?",
          options: ["Pictogram", "Line graph", "Pie chart", "Unordered list"],
          answer: 1,
          explanation: "A line graph shows change across ordered time points.",
        },
        {
          prompt:
            "A pictogram key says one circle represents 5 people. What do 3 circles represent?",
          options: ["8", "10", "15", "20"],
          answer: 2,
          explanation: "$3\times5=15$.",
        },
        {
          prompt: "Which feature belongs to a well-drawn bar chart?",
          options: ["Unequal bar widths", "No labels", "Equal category gaps", "A random scale"],
          answer: 2,
          explanation: "Bars should have equal width and consistent gaps.",
        },
        {
          prompt: "What angle represents 30% of a pie chart?",
          options: ["$30^\circ$", "$90^\circ$", "$108^\circ$", "$120^\circ$"],
          answer: 2,
          explanation: "$0.30\times360^\circ=108^\circ$.",
        },
        {
          prompt: "Values are 4, 9, 7 and 10. What is the range?",
          options: ["3", "6", "7", "30"],
          answer: 1,
          explanation: "$10-4=6$.",
        },
        {
          prompt: "A line segment slopes downward from Monday to Tuesday. What does this mean?",
          options: [
            "The value increased",
            "The value decreased",
            "The value stayed equal",
            "No data were collected",
          ],
          answer: 1,
          explanation: "A downward segment shows a decrease.",
        },
        {
          prompt: "Why can a bar chart starting at 95 be misleading when values are near 100?",
          options: [
            "It removes all labels",
            "It exaggerates visual differences",
            "It changes the arithmetic values",
            "It creates a pie chart",
          ],
          answer: 1,
          explanation: "A truncated axis magnifies the apparent difference in bar lengths.",
        },
        {
          prompt: "A $45^\circ$ sector represents what fraction of a circle?",
          options: ["$\frac14$", "$\frac18$", "$\frac16$", "$\frac1{10}$"],
          answer: 1,
          explanation: "$45/360=1/8$.",
        },
        {
          prompt: "A table has frequencies 6, 8, 3 and 5. What is the total frequency?",
          options: ["16", "19", "22", "24"],
          answer: 2,
          explanation: "$6+8+3+5=22$.",
        },
        {
          prompt: "Which item is essential for interpreting a pictogram?",
          options: ["A diagonal axis", "A key", "A straight line", "A compass"],
          answer: 1,
          explanation: "The key states how much each symbol represents.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "Frequency tables organize raw data and make totals easy to check.",
        "Bar charts compare separate categories; pictograms require an accurate key.",
        "Line graphs show changes across ordered values, especially time.",
        "Pie-chart sectors are fractions of $360^\circ$ and percentages of one whole.",
        "Always inspect titles, labels, units, scales and keys before interpreting a display.",
        "Truncated or unequal axes and distorted pictures can make a graph misleading.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: charts, tables and graphs",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt:
            "Which graph is most suitable for showing a runner's distance at one-minute intervals?",
          options: ["Line graph", "Pictogram", "Pie chart", "Single tally"],
          answer: 0,
          marks: 1,
          explanation: "Distance is changing through ordered time intervals.",
        },
        {
          type: "tf",
          prompt: "In a standard categorical bar chart, the bars normally touch one another.",
          answer: false,
          marks: 1,
          explanation: "Separate categories normally have gaps between bars.",
        },
        {
          type: "mc",
          prompt: "One pictogram symbol represents 8 cars. What do 2.5 symbols represent?",
          options: ["10", "16", "20", "24"],
          answer: 2,
          marks: 1,
          explanation: "$2.5\times8=20$.",
        },
        {
          type: "matching",
          prompt: "Match each display to its main purpose.",
          left: ["Frequency table", "Bar chart", "Line graph", "Pie chart"],
          options: [
            "Record exact organized counts",
            "Compare separate categories",
            "Show change over time",
            "Show parts of one whole",
          ],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation: "Each display emphasizes a different structure in the data.",
        },
        {
          type: "mc",
          prompt: "A category has 15 out of 60 responses. What is its pie-chart angle?",
          options: ["$60^\circ$", "$75^\circ$", "$90^\circ$", "$120^\circ$"],
          answer: 2,
          marks: 1,
          explanation: "$15/60=1/4$, and $1/4\times360^\circ=90^\circ$.",
        },
        {
          type: "multi",
          prompt: "Select all features that help make a graph trustworthy.",
          options: [
            "A descriptive title",
            "Clearly labelled units",
            "Equal scale intervals",
            "A hidden axis break",
          ],
          answers: [0, 1, 2],
          marks: 3,
          explanation: "A hidden break can mislead; the other features support accurate reading.",
        },
        {
          type: "tf",
          prompt: "A pie chart's sectors should total $360^\circ$.",
          answer: true,
          marks: 1,
          explanation: "A full circle is $360^\circ$.",
        },
        {
          type: "mc",
          prompt: "Values 12, 15, 19, 14 and 20 have what mean?",
          options: ["14", "15", "16", "20"],
          answer: 2,
          marks: 1,
          explanation: "The total is 80; $80\div5=16$.",
        },
        {
          type: "matching",
          prompt: "Match the graph feature to the interpretation.",
          left: ["Rising line", "Horizontal line", "Falling line", "Tallest bar"],
          options: [
            "Value increases",
            "Value stays constant",
            "Value decreases",
            "Largest category value",
          ],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation: "The shape and height encode how the values compare or change.",
        },
        {
          type: "mc",
          prompt: "A $144^\circ$ sector represents what percentage?",
          options: ["20%", "30%", "40%", "60%"],
          answer: 2,
          marks: 1,
          explanation: "$144/360=0.4=40\%$.",
        },
        {
          type: "multi",
          prompt: "Which can make a graph misleading?",
          options: [
            "A truncated vertical axis",
            "Unequal scale intervals",
            "Missing units",
            "A clear source and title",
          ],
          answers: [0, 1, 2],
          marks: 3,
          explanation:
            "The first three can distort or obscure meaning; a clear source and title improve the display.",
        },
        {
          type: "tf",
          prompt:
            "Averaging repeated values means adding them and dividing by the number of values.",
          answer: true,
          marks: 1,
          explanation: "That is the arithmetic mean.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "dataExplorer", label: "Use the interactive data-display laboratory" },
        { key: "dataPractice", label: "Answer all practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
