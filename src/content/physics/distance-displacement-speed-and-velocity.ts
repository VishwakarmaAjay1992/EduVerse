import type { LessonContent } from "@/lib/lesson-content-types";

export const distanceDisplacementSpeedVelocity: LessonContent = {
  subjectSlug: "physics",
  chapterSlug: "motion-basics",
  lessonSlug: "distance-displacement-speed-and-velocity",
  title: "Distance, Displacement, Speed and Velocity",
  objectives: [
    "Describe motion relative to a reference point",
    "Distinguish distance from displacement",
    "Distinguish speed from velocity",
    "Calculate average speed and average velocity",
    "Interpret simple position–time graphs",
  ],
  sections: [
    { kind: "overview", paragraphs: [
      "A passenger sitting in a moving bus is at rest relative to the seat but moving relative to the road. This shows that motion must always be described using a reference point.",
      "In this lesson you will learn four closely related quantities: distance, displacement, speed and velocity. The first and third are scalars; the second and fourth are vectors.",
    ]},
    { kind: "callout", variant: "definition", title: "Motion", body: "An object is in motion when its position changes with time relative to a chosen reference point." },
    { kind: "theory", heading: "Distance and displacement", paragraphs: [
      "Distance is the total length of the path travelled. It has magnitude only, so it is a scalar quantity. Distance is never negative.",
      "Displacement is the straight-line change in position from start to finish, including direction. It is a vector quantity. A journey can have a large distance but zero displacement if it ends where it started.",
    ]},
    { kind: "comparison", heading: "Do not confuse these quantities", left: { title: "Distance", items: ["Total path length", "Scalar", "No direction", "Always zero or positive", "SI unit: metre (m)"] }, right: { title: "Displacement", items: ["Straight-line change from start to finish", "Vector", "Includes direction", "May be positive, negative or zero", "SI unit: metre (m)"] } },
    { kind: "example", prompt: "A student walks 30 m east and then 10 m west. Find the distance and displacement.", steps: [
      "Distance counts the complete path: $30+10=40$ m.",
      "Take east as positive. Displacement: $30-10=20$ m.",
      "Include direction because displacement is a vector.",
    ], answer: "Distance = 40 m; displacement = 20 m east." },
    { kind: "example", prompt: "A runner completes one 400 m lap and finishes at the starting line.", steps: ["The runner travelled the full track, so distance = 400 m.", "Start and finish positions are the same, so displacement = 0 m."], answer: "Distance = 400 m; displacement = 0 m." },
    { kind: "theory", heading: "Speed and velocity", paragraphs: [
      "Speed tells us how quickly distance is covered. Average speed uses the total distance and total time.",
      "Velocity tells us how quickly displacement changes and in what direction. Average velocity therefore uses displacement rather than distance.",
    ]},
    { kind: "formula", latex: "\\text{average speed}=\\frac{\\text{total distance}}{\\text{total time}}", caption: "SI unit: metre per second (m/s)" },
    { kind: "formula", latex: "\\text{average velocity}=\\frac{\\text{displacement}}{\\text{total time}}", caption: "Velocity must include direction." },
    { kind: "example", prompt: "A car travels 120 km in 2 hours. Find its average speed.", steps: ["Write the formula: average speed = distance ÷ time.", "Substitute: $120\\text{ km} \\div 2\\text{ h}$.", "Calculate: $60\\text{ km/h}$."], answer: "Average speed = 60 km/h." },
    { kind: "motionExplorer", heading: "Interactive activity — Explore a return journey" },
    { kind: "theory", heading: "Position–time graphs", paragraphs: [
      "A position–time graph shows where an object is at each moment. Time is on the horizontal axis and position is on the vertical axis.",
      "A straight rising line means constant positive velocity. A horizontal line means the object is stationary. A steeper line represents a larger speed. A falling line means motion back toward the reference point.",
    ], list: ["Gradient = change in position ÷ change in time", "Positive gradient: motion in the positive direction", "Zero gradient: stationary", "Negative gradient: motion in the opposite direction"] },
    { kind: "table", heading: "Reading motion descriptions", headers: ["Situation", "Distance", "Displacement"], rows: [
      ["10 m east", "10 m", "10 m east"],
      ["10 m east, then 10 m west", "20 m", "0 m"],
      ["One complete circular lap", "circumference of the track", "0 m"],
      ["5 m west", "5 m", "5 m west"],
    ]},
    { kind: "classifyActivity", heading: "Activity — Scalar or vector?", categories: ["Scalar", "Vector"], items: [
      { term: "Distance", category: "Scalar" }, { term: "Displacement", category: "Vector" }, { term: "Speed", category: "Scalar" }, { term: "Velocity", category: "Vector" }, { term: "Time", category: "Scalar" },
    ]},
    { kind: "mistakes", items: [
      { wrong: "Using distance when calculating average velocity.", right: "Average velocity uses displacement." },
      { wrong: "Writing velocity as 12 m/s without direction.", right: "A complete velocity is 12 m/s east, north, etc." },
      { wrong: "Assuming distance and displacement are always equal.", right: "They are equal only for straight motion in one direction." },
      { wrong: "Forgetting to make units consistent.", right: "Convert all distances and times before calculating." },
    ]},
    { kind: "practice", heading: "Practice (not graded)", questions: [
      { prompt: "A cyclist travels 100 m east and 40 m west. What distance is travelled?", options: ["60 m", "100 m", "140 m"], answer: 2, explanation: "Distance is the whole path: 100 + 40 = 140 m." },
      { prompt: "For the same journey, what is the displacement?", options: ["60 m east", "140 m east", "60 m west"], answer: 0, explanation: "100 m east − 40 m west = 60 m east." },
      { prompt: "Which is a vector quantity?", options: ["Speed", "Velocity", "Distance"], answer: 1, explanation: "Velocity includes magnitude and direction." },
      { prompt: "A bus covers 150 km in 3 h. What is its average speed?", options: ["50 km/h", "75 km/h", "450 km/h"], answer: 0, explanation: "150 ÷ 3 = 50 km/h." },
      { prompt: "What does a horizontal line on a position–time graph mean?", options: ["Constant speed", "Stationary", "Acceleration"], answer: 1, explanation: "Position is not changing, so the object is stationary." },
    ]},
    { kind: "summary", points: [
      "Motion is described relative to a reference point.", "Distance is total path length; displacement is straight-line change with direction.", "Speed is based on distance; velocity is based on displacement.", "Average speed equals total distance divided by total time.", "Average velocity equals displacement divided by total time.", "The gradient of a position–time graph represents velocity.",
    ]},
    { kind: "gradedQuiz", heading: "Lesson Quiz: Distance, Displacement, Speed and Velocity", passMark: 60, questions: [
      { type: "mc", marks: 1, prompt: "Which statement best defines displacement?", options: ["Total path length", "Straight-line change in position with direction", "Distance travelled each second", "Time taken to move"], answer: 1, explanation: "Displacement is the vector change from start to finish." },
      { type: "tf", marks: 1, prompt: "An object can travel a non-zero distance and have zero displacement.", answer: true, explanation: "This happens when it returns to its starting point." },
      { type: "mc", marks: 1, prompt: "A runner completes a 400 m lap. What is the displacement?", options: ["0 m", "200 m", "400 m", "800 m"], answer: 0, explanation: "The runner ends at the starting point." },
      { type: "mc", marks: 2, prompt: "A car travels 180 km in 3 h. What is its average speed?", options: ["60 km/h", "90 km/h", "183 km/h", "540 km/h"], answer: 0, explanation: "Average speed = 180 ÷ 3 = 60 km/h." },
      { type: "mc", marks: 2, prompt: "A person walks 50 m east then 20 m west in 10 s. What is the average velocity?", options: ["3 m/s east", "7 m/s east", "3 m/s west", "5 m/s east"], answer: 0, explanation: "Displacement = 30 m east; velocity = 30 ÷ 10 = 3 m/s east." },
      { type: "matching", marks: 2, prompt: "Match each quantity to its description.", left: ["Distance", "Displacement", "Speed", "Velocity"], options: ["Path length", "Change in position with direction", "Distance per time", "Displacement per time"], answer: [0,1,2,3], explanation: "Distance and speed are scalars; displacement and velocity are vectors." },
      { type: "multi", marks: 1, prompt: "Select all vector quantities.", options: ["Distance", "Displacement", "Speed", "Velocity"], answers: [1,3], explanation: "Displacement and velocity both include direction." },
      { type: "mc", marks: 1, prompt: "What does a horizontal position–time graph show?", options: ["The object is stationary", "The object accelerates", "The object moves backward", "The object has maximum speed"], answer: 0, explanation: "No change in position means zero velocity." },
    ]},
    { kind: "completion", steps: [
      { key: "motionExplorer", label: "Used the motion explorer" },
      { key: "classify", label: "Completed the scalar/vector activity" },
      { key: "practice", label: "Completed the practice questions" },
    ], requireQuizPass: true },
  ],
};
