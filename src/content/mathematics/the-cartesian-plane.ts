import type { LessonContent } from "@/lib/lesson-content-types";

export const theCartesianPlane: LessonContent = {
  subjectSlug: "mathematics",
  chapterSlug: "the-coordinate-plane-and-data-basics",
  lessonSlug: "the-cartesian-plane",
  title: "The Cartesian Plane",
  objectives: [
    "Identify the x-axis, y-axis, origin and four quadrants.",
    "Read and write ordered pairs in the form (x, y).",
    "Plot points accurately using horizontal movement followed by vertical movement.",
    "Determine the quadrant or axis on which a point lies.",
    "Describe reflections of points in the coordinate axes and the origin.",
    "Complete coordinate tables and recognize simple straight-line patterns.",
    "Use coordinates to solve simple geometric and real-world problems.",
  ],
  sections: [
    {
      kind: "overview",
      paragraphs: [
        "The Cartesian plane is a map made from two perpendicular number lines. It gives every point a precise address called an ordered pair.",
        "Coordinates are used in maps, computer graphics, games, engineering drawings, graphs and many later algebra topics. The essential habit is simple: read or move along the x-direction first, then the y-direction.",
      ],
    },
    {
      kind: "callout",
      variant: "definition",
      title: "Ordered pair",
      body: "An ordered pair is written $(x,y)$. The first coordinate tells the horizontal position and the second coordinate tells the vertical position. Because the order matters, $(3,2)$ and $(2,3)$ are different points.",
    },
    {
      kind: "theory",
      heading: "The axes and the origin",
      paragraphs: [
        "The horizontal number line is the x-axis. Values increase to the right and decrease to the left. The vertical number line is the y-axis. Values increase upward and decrease downward.",
        "The axes meet at the origin, written $(0,0)$. The origin is the reference point from which every coordinate movement begins.",
      ],
      list: [
        "A point on the x-axis has y-coordinate 0, such as $(4,0)$.",
        "A point on the y-axis has x-coordinate 0, such as $(0,-3)$.",
        "The origin lies on both axes and is not inside any quadrant.",
      ],
    },
    {
      kind: "table",
      heading: "Signs in the four quadrants",
      headers: ["Quadrant", "x-coordinate", "y-coordinate", "Example"],
      rows: [
        ["I", "Positive", "Positive", "$(4,2)$"],
        ["II", "Negative", "Positive", "$(-3,5)$"],
        ["III", "Negative", "Negative", "$(-4,-2)$"],
        ["IV", "Positive", "Negative", "$(5,-3)$"],
      ],
      note: "Quadrants are numbered anticlockwise, beginning in the upper-right region.",
    },
    {
      kind: "figure",
      caption: "A coordinate number line uses negative and positive values in both directions.",
      figure: { type: "numberLine", min: -5, max: 5, step: 1, highlight: 3 },
    },
    {
      kind: "theory",
      heading: "How to plot an ordered pair",
      paragraphs: [
        "Begin at the origin. Move horizontally according to x, then vertically according to y. A positive coordinate moves in the positive direction; a negative coordinate moves in the negative direction.",
        "A useful memory phrase is: along the corridor first, then up or down the stairs.",
      ],
    },
    {
      kind: "example",
      prompt: "Plot the point $A(4,3)$ and state its quadrant.",
      steps: [
        "Start at the origin $(0,0)$.",
        "The x-coordinate is 4, so move 4 units to the right.",
        "The y-coordinate is 3, so move 3 units upward.",
        "Both coordinates are positive.",
      ],
      answer: "$A(4,3)$ lies in Quadrant I.",
    },
    {
      kind: "example",
      prompt: "Plot $B(-5,2)$ and describe the movement from the origin.",
      steps: [
        "The x-coordinate is $-5$, so move 5 units left.",
        "The y-coordinate is 2, so move 2 units up.",
        "A negative x-value and positive y-value identify Quadrant II.",
      ],
      answer: "Move 5 left and 2 up. The point lies in Quadrant II.",
    },
    {
      kind: "example",
      prompt: "Where does the point $C(0,-4)$ lie?",
      steps: [
        "The x-coordinate is 0, so there is no horizontal movement.",
        "Move 4 units downward because the y-coordinate is $-4$.",
        "A point with x-coordinate 0 lies on the y-axis.",
      ],
      answer: "$C(0,-4)$ lies on the negative part of the y-axis, not in a quadrant.",
    },
    {
      kind: "coordinateDataExplorer",
      mode: "coordinates",
      heading: "Interactive Cartesian-plane laboratory",
    },
    {
      kind: "theory",
      heading: "Reading coordinates from a diagram",
      paragraphs: [
        "To read a plotted point, trace vertically to the x-axis to find x, then trace horizontally to the y-axis to find y. Write the values in that order.",
        "Do not assume that every grid line represents 1 unit. Check the numbered scale before reading the point.",
      ],
    },
    {
      kind: "example",
      prompt:
        "A point is 3 units left of the y-axis and 6 units above the x-axis. Write its coordinates.",
      steps: [
        "Left means the x-coordinate is negative: $x=-3$.",
        "Above means the y-coordinate is positive: $y=6$.",
        "Write x first and y second.",
      ],
      answer: "The point is $(-3,6)$.",
    },
    {
      kind: "theory",
      heading: "Reflections in the axes",
      paragraphs: [
        "A reflection creates a mirror image. Reflecting in the y-axis changes left to right, so the sign of x changes while y stays the same. Reflecting in the x-axis changes up to down, so the sign of y changes while x stays the same.",
      ],
    },
    {
      kind: "table",
      heading: "Coordinate reflection rules",
      headers: ["Transformation", "Rule", "Example from $(3,-2)$"],
      rows: [
        ["Reflection in the x-axis", "$(x,y)\rightarrow(x,-y)$", "$(3,2)$"],
        ["Reflection in the y-axis", "$(x,y)\rightarrow(-x,y)$", "$(-3,-2)$"],
        ["Reflection in the origin", "$(x,y)\rightarrow(-x,-y)$", "$(-3,2)$"],
      ],
    },
    {
      kind: "example",
      prompt: "Point $P(-4,5)$ is reflected in the x-axis. Find the image $P'$.",
      steps: [
        "A reflection in the x-axis keeps x unchanged.",
        "Change the sign of y: $5\rightarrow-5$.",
      ],
      answer: "$P'=(-4,-5)$.",
    },
    {
      kind: "example",
      prompt: "Reflect $Q(2,-7)$ in the y-axis and then in the origin.",
      steps: [
        "In the y-axis, change the sign of x: $(2,-7)\rightarrow(-2,-7)$.",
        "For the original point reflected in the origin, change both signs: $(2,-7)\rightarrow(-2,7)$.",
      ],
      answer: "The y-axis image is $(-2,-7)$; the origin image is $(-2,7)$.",
    },
    {
      kind: "theory",
      heading: "Simple straight-line patterns",
      paragraphs: [
        "A rule connecting x and y can produce a table of ordered pairs. Plotting those pairs often reveals a straight-line pattern.",
        "For $y=x+2$, each y-value is 2 more than x. As x increases by 1, y also increases by 1, so the plotted points rise at a constant rate.",
      ],
    },
    {
      kind: "table",
      heading: "Table for $y=2x-1$",
      headers: ["x", "Calculation", "y", "Ordered pair"],
      rows: [
        ["$-2$", "$2(-2)-1$", "$-5$", "$(-2,-5)$"],
        ["$-1$", "$2(-1)-1$", "$-3$", "$(-1,-3)$"],
        ["$0$", "$2(0)-1$", "$-1$", "$(0,-1)$"],
        ["$1$", "$2(1)-1$", "$1$", "$(1,1)$"],
        ["$2$", "$2(2)-1$", "$3$", "$(2,3)$"],
      ],
    },
    {
      kind: "example",
      prompt: "Complete the point for the rule $y=3x+1$ when $x=-2$.",
      steps: [
        "Substitute $x=-2$: $y=3(-2)+1$.",
        "Multiply first: $3(-2)=-6$.",
        "Then add 1: $y=-5$.",
      ],
      answer: "The ordered pair is $(-2,-5)$.",
    },
    {
      kind: "example",
      prompt: "Points $(0,4)$, $(1,6)$, $(2,8)$ and $(3,10)$ form a pattern. Predict y when $x=5$.",
      steps: [
        "Each time x rises by 1, y rises by 2.",
        "The rule is $y=2x+4$ because y is 4 when x is 0.",
        "Substitute $x=5$: $y=2(5)+4=14$.",
      ],
      answer: "When $x=5$, $y=14$, giving the point $(5,14)$.",
    },
    {
      kind: "theory",
      heading: "Coordinates and simple geometry",
      paragraphs: [
        "Horizontal points have equal y-coordinates. Vertical points have equal x-coordinates. This makes horizontal and vertical distances easy to find by subtracting the changing coordinates.",
      ],
    },
    {
      kind: "example",
      prompt: "Find the horizontal distance between $A(-3,2)$ and $B(5,2)$.",
      steps: [
        "The equal y-coordinates confirm that the segment is horizontal.",
        "Subtract the x-coordinates: $5-(-3)=5+3=8$.",
      ],
      answer: "The distance is 8 units.",
    },
    {
      kind: "example",
      prompt:
        "Three vertices of an axis-aligned rectangle are $(1,2)$, $(1,7)$ and $(6,2)$. Find the fourth vertex.",
      steps: [
        "The points $(1,2)$ and $(1,7)$ share x-coordinate 1, forming a vertical side.",
        "The points $(1,2)$ and $(6,2)$ share y-coordinate 2, forming a horizontal side.",
        "The missing corner must combine x-coordinate 6 with y-coordinate 7.",
      ],
      answer: "The fourth vertex is $(6,7)$.",
    },
    {
      kind: "realWorld",
      items: [
        {
          area: "Maps and navigation",
          text: "Grid references locate places using horizontal and vertical positions.",
        },
        {
          area: "Computer graphics",
          text: "Every pixel and game object is placed using coordinate values.",
        },
        {
          area: "Architecture",
          text: "Plans use reference grids to position walls, columns and equipment accurately.",
        },
        {
          area: "Science",
          text: "Graphs plot one measured quantity against another to reveal relationships.",
        },
      ],
    },
    {
      kind: "mistakes",
      items: [
        {
          wrong: "Reading $(x,y)$ as vertical first, then horizontal.",
          right: "Read or move horizontally for x first, then vertically for y.",
        },
        {
          wrong: "Calling a point on an axis part of a quadrant.",
          right: "If x or y equals 0, the point lies on an axis; the origin lies on both.",
        },
        {
          wrong: "Assuming one grid square always equals one unit.",
          right: "Read the numbered scale before identifying coordinates.",
        },
        {
          wrong: "Changing both coordinates in every reflection.",
          right: "In the x-axis change y; in the y-axis change x; in the origin change both.",
        },
      ],
    },
    {
      kind: "practice",
      heading: "Practice: the Cartesian plane",
      stepKey: "cartesianPractice",
      questions: [
        {
          prompt: "Which point lies in Quadrant II?",
          options: ["$(3,4)$", "$(-3,4)$", "$(-3,-4)$", "$(3,-4)$"],
          answer: 1,
          explanation: "Quadrant II has negative x and positive y.",
        },
        {
          prompt: "Where is $(0,6)$ located?",
          options: ["Quadrant I", "x-axis", "y-axis", "origin"],
          answer: 2,
          explanation: "An x-coordinate of 0 places the point on the y-axis.",
        },
        {
          prompt: "Starting at the origin, how do you reach $(-2,-5)$?",
          options: ["2 right, 5 down", "2 left, 5 up", "2 left, 5 down", "5 left, 2 down"],
          answer: 2,
          explanation: "Negative x means left and negative y means down.",
        },
        {
          prompt: "Reflect $(4,-3)$ in the x-axis.",
          options: ["$(-4,-3)$", "$(4,3)$", "$(-4,3)$", "$(3,4)$"],
          answer: 1,
          explanation: "Reflection in the x-axis changes the sign of y only.",
        },
        {
          prompt: "Reflect $(-6,2)$ in the y-axis.",
          options: ["$(6,2)$", "$(-6,-2)$", "$(6,-2)$", "$(-2,6)$"],
          answer: 0,
          explanation: "Reflection in the y-axis changes the sign of x only.",
        },
        {
          prompt: "For $y=x-4$, what is y when $x=7$?",
          options: ["3", "11", "$-3$", "28"],
          answer: 0,
          explanation: "$7-4=3$.",
        },
        {
          prompt: "Which pair forms a horizontal segment?",
          options: [
            "$(1,2)$ and $(1,8)$",
            "$(1,2)$ and $(7,2)$",
            "$(1,2)$ and $(7,8)$",
            "$(2,1)$ and $(7,8)$",
          ],
          answer: 1,
          explanation: "A horizontal segment has equal y-coordinates.",
        },
        {
          prompt: "Find the vertical distance from $(3,-4)$ to $(3,5)$.",
          options: ["1", "8", "9", "12"],
          answer: 2,
          explanation: "$5-(-4)=9$ units.",
        },
        {
          prompt: "Which ordered pair satisfies $y=2x+1$ when $x=3$?",
          options: ["$(3,5)$", "$(3,6)$", "$(3,7)$", "$(7,3)$"],
          answer: 2,
          explanation: "$y=2(3)+1=7$.",
        },
        {
          prompt: "What is the origin?",
          options: ["$(1,1)$", "$(0,1)$", "$(1,0)$", "$(0,0)$"],
          answer: 3,
          explanation: "The axes meet at $(0,0)$.",
        },
      ],
    },
    {
      kind: "summary",
      points: [
        "The x-axis is horizontal, the y-axis is vertical and their intersection is the origin.",
        "An ordered pair is written $(x,y)$: move horizontally first, then vertically.",
        "The signs of x and y identify the quadrant; points with a zero coordinate lie on an axis.",
        "Reflections change predictable coordinate signs.",
        "Tables of coordinate pairs can reveal straight-line patterns and simple rules.",
      ],
    },
    {
      kind: "gradedQuiz",
      heading: "Graded quiz: the Cartesian plane",
      passMark: 60,
      questions: [
        {
          type: "mc",
          prompt: "Which point is in Quadrant IV?",
          options: ["$(-5,2)$", "$(5,2)$", "$(-5,-2)$", "$(5,-2)$"],
          answer: 3,
          marks: 1,
          explanation: "Quadrant IV has positive x and negative y.",
        },
        {
          type: "tf",
          prompt: "The point $(-4,0)$ lies in Quadrant II.",
          answer: false,
          marks: 1,
          explanation: "Its y-coordinate is 0, so it lies on the x-axis.",
        },
        {
          type: "mc",
          prompt: "What is the reflection of $(2,7)$ in the y-axis?",
          options: ["$(2,-7)$", "$(-2,7)$", "$(-2,-7)$", "$(7,2)$"],
          answer: 1,
          marks: 1,
          explanation: "A y-axis reflection changes x only.",
        },
        {
          type: "matching",
          prompt: "Match each point to its location.",
          left: ["$(3,5)$", "$(-2,4)$", "$(-1,-6)$", "$(4,-3)$"],
          options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
          answer: [0, 1, 2, 3],
          marks: 4,
          explanation: "Use the signs of x and y in each ordered pair.",
        },
        {
          type: "mc",
          prompt: "For $y=3x-2$, what is y when $x=-1$?",
          options: ["$-5$", "$-1$", "1", "5"],
          answer: 0,
          marks: 1,
          explanation: "$3(-1)-2=-3-2=-5$.",
        },
        {
          type: "multi",
          prompt: "Select all points on an axis.",
          options: ["$(0,4)$", "$(3,0)$", "$(2,2)$", "$(0,0)$"],
          answers: [0, 1, 3],
          marks: 3,
          explanation: "A point is on an axis when x or y is 0; the origin is on both.",
        },
        {
          type: "tf",
          prompt: "The ordered pairs $(2,5)$ and $(5,2)$ name the same point.",
          answer: false,
          marks: 1,
          explanation: "The order of coordinates matters.",
        },
        {
          type: "mc",
          prompt: "The horizontal distance between $(-7,3)$ and $(2,3)$ is:",
          options: ["5", "9", "10", "12"],
          answer: 1,
          marks: 1,
          explanation: "$2-(-7)=9$.",
        },
        {
          type: "matching",
          prompt: "Match each transformation of $(4,-2)$ to its image.",
          left: ["Reflect in x-axis", "Reflect in y-axis", "Reflect in origin"],
          options: ["$(4,2)$", "$(-4,-2)$", "$(-4,2)$"],
          answer: [0, 1, 2],
          marks: 3,
          explanation: "Change y for x-axis, x for y-axis, and both for the origin.",
        },
        {
          type: "mc",
          prompt: "Which point belongs to the rule $y=x+4$?",
          options: ["$(2,4)$", "$(2,5)$", "$(2,6)$", "$(6,2)$"],
          answer: 2,
          marks: 1,
          explanation: "When x is 2, y is $2+4=6$.",
        },
        {
          type: "multi",
          prompt: "Select all true statements.",
          options: [
            "The x-axis is horizontal.",
            "Quadrants are numbered clockwise from the upper right.",
            "The origin is $(0,0)$.",
            "A vertical segment has equal x-coordinates.",
          ],
          answers: [0, 2, 3],
          marks: 3,
          explanation: "Quadrants are numbered anticlockwise, not clockwise.",
        },
        {
          type: "tf",
          prompt:
            "If two points have the same y-coordinate, the segment joining them is horizontal.",
          answer: true,
          marks: 1,
          explanation: "Equal y-values place both points at the same height.",
        },
      ],
    },
    {
      kind: "completion",
      steps: [
        { key: "coordinateExplorer", label: "Use the interactive coordinate laboratory" },
        { key: "cartesianPractice", label: "Answer all practice questions" },
      ],
      requireQuizPass: true,
    },
  ],
};
