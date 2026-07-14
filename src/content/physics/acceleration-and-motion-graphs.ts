import type { LessonContent } from "@/lib/lesson-content-types";

export const accelerationAndMotionGraphs: LessonContent = {
  subjectSlug: "physics",
  chapterSlug: "motion-basics",
  lessonSlug: "acceleration-and-motion-graphs",
  title: "Acceleration and Motion Graphs",
  objectives: [
    "Define acceleration and deceleration",
    "Calculate acceleration from a change in velocity",
    "Interpret velocity–time graphs",
    "Use graph gradient to find acceleration",
    "Use the area under a velocity–time graph to find displacement",
    "Describe free fall at an introductory level",
  ],
  sections: [
    { kind: "overview", paragraphs: [
      "A car leaving traffic lights speeds up, a bicycle approaching a corner slows down, and a lift changes velocity as it starts and stops. These are all examples of acceleration.",
      "Acceleration does not simply mean moving fast. It means that velocity is changing — in size, direction, or both.",
    ]},
    { kind: "callout", variant: "definition", title: "Acceleration", body: "Acceleration is the rate of change of velocity. Its SI unit is metre per second squared (m/s²)." },
    { kind: "formula", latex: "a=\\frac{v-u}{t}", caption: "$a$ = acceleration, $u$ = initial velocity, $v$ = final velocity, $t$ = time" },
    { kind: "theory", heading: "Positive and negative acceleration", paragraphs: [
      "When velocity increases in the chosen positive direction, acceleration is positive. When velocity decreases, the acceleration may be negative; this is often called deceleration.",
      "The sign depends on the chosen direction. For beginner problems, state the direction first and then keep the signs consistent.",
    ]},
    { kind: "example", prompt: "A car increases its velocity from 5 m/s to 20 m/s in 3 s. Find its acceleration.", steps: ["Identify $u=5$ m/s, $v=20$ m/s, $t=3$ s.", "Use $a=(v-u)/t$.", "Substitute: $a=(20-5)/3$.", "Calculate: $a=5$ m/s²."], answer: "Acceleration = 5 m/s²." },
    { kind: "example", prompt: "A vehicle slows from 25 m/s to 10 m/s in 5 s. Find its acceleration.", steps: ["Identify $u=25$ m/s, $v=10$ m/s, $t=5$ s.", "Substitute: $a=(10-25)/5$.", "Calculate: $a=-3$ m/s².", "The negative sign shows that velocity is decreasing."], answer: "Acceleration = −3 m/s² (deceleration of 3 m/s²)." },
    { kind: "motionGraphExplorer", heading: "Interactive velocity–time graph explorer" },
    { kind: "theory", heading: "Velocity–time graphs", paragraphs: [
      "A velocity–time graph has time on the horizontal axis and velocity on the vertical axis. Its gradient represents acceleration.",
      "A rising straight line means constant positive acceleration. A horizontal line means constant velocity and zero acceleration. A falling straight line means constant negative acceleration.",
    ], list: ["Gradient = change in velocity ÷ change in time", "Horizontal segment: constant velocity", "Line on the time axis: stationary", "Negative velocity: motion in the opposite direction"] },
    { kind: "formula", latex: "\\text{gradient}=\\frac{\\Delta v}{\\Delta t}=a", caption: "The gradient of a velocity–time graph is acceleration." },
    { kind: "theory", heading: "Area under a velocity–time graph", paragraphs: [
      "For motion in one direction, the area between a velocity–time graph and the time axis gives displacement.",
      "For a rectangular section, area = velocity × time. For a triangular section, area = ½ × base × height. Add simple shapes when the graph has several sections.",
    ]},
    { kind: "formula", latex: "\\text{displacement}=\\text{area under the velocity-time graph}", caption: "Use signed area when the graph goes below the time axis." },
    { kind: "example", prompt: "An object moves at a constant velocity of 8 m/s for 5 s. Find its displacement from the graph area.", steps: ["The region is a rectangle.", "Area = base × height.", "Displacement = $5\\text{ s} \\times 8\\text{ m/s}=40$ m."], answer: "Displacement = 40 m." },
    { kind: "example", prompt: "An object accelerates uniformly from rest to 12 m/s in 4 s. Find its displacement.", steps: ["The area under the graph is a triangle.", "Area = $\\frac12 \\times$ base $\\times$ height.", "Displacement = $\\frac12 \\times 4 \\times 12=24$ m."], answer: "Displacement = 24 m." },
    { kind: "theory", heading: "Introduction to free fall", paragraphs: [
      "Near Earth's surface, an object in free fall accelerates downward because of gravity. Ignoring air resistance, all objects have approximately the same gravitational acceleration, usually written $g$.",
      "For introductory calculations, $g$ is often taken as 9.8 m/s² or rounded to 10 m/s² when the question states this. Heavier objects do not fall faster in a vacuum.",
    ]},
    { kind: "callout", variant: "remember", title: "Gravity", body: "Near Earth's surface, $g \\approx 9.8\\text{ m/s}^2$ downward. Always use the value given in the question." },
    { kind: "classifyActivity", heading: "Activity — Identify the graph behaviour", categories: ["Accelerating", "Constant velocity", "Decelerating", "Stationary"], items: [
      { term: "Velocity rises from 2 m/s to 10 m/s", category: "Accelerating" },
      { term: "Velocity remains at 6 m/s", category: "Constant velocity" },
      { term: "Velocity falls from 15 m/s to 4 m/s", category: "Decelerating" },
      { term: "Velocity remains at 0 m/s", category: "Stationary" },
    ]},
    { kind: "mistakes", items: [
      { wrong: "Calculating acceleration as final velocity ÷ time.", right: "Use change in velocity: $(v-u)/t$." },
      { wrong: "Calling every negative acceleration 'slowing down'.", right: "A negative sign describes direction; compare it with the velocity direction." },
      { wrong: "Using graph height alone to find displacement.", right: "Displacement is the area under a velocity–time graph." },
      { wrong: "Confusing a horizontal velocity–time line with rest.", right: "A horizontal line above zero means constant non-zero velocity." },
    ]},
    { kind: "practice", heading: "Practice (not graded)", questions: [
      { prompt: "Velocity changes from 4 m/s to 16 m/s in 3 s. What is acceleration?", options: ["4 m/s²", "6 m/s²", "12 m/s²"], answer: 0, explanation: "(16 − 4) ÷ 3 = 4 m/s²." },
      { prompt: "What does the gradient of a velocity–time graph represent?", options: ["Distance", "Acceleration", "Velocity"], answer: 1, explanation: "Gradient is change in velocity divided by time." },
      { prompt: "What does the area under a velocity–time graph represent?", options: ["Displacement", "Acceleration", "Force"], answer: 0, explanation: "The signed area gives displacement." },
      { prompt: "A horizontal line at 10 m/s means:", options: ["Stationary", "Constant velocity", "Constant acceleration"], answer: 1, explanation: "Velocity is unchanged, so acceleration is zero." },
      { prompt: "Ignoring air resistance, which object falls faster in a vacuum?", options: ["The heavier object", "The lighter object", "Both accelerate equally"], answer: 2, explanation: "All objects have the same gravitational acceleration in a vacuum." },
    ]},
    { kind: "summary", points: [
      "Acceleration is the rate of change of velocity.", "Use $a=(v-u)/t$ and keep signs consistent.", "The gradient of a velocity–time graph is acceleration.", "The area under a velocity–time graph is displacement.", "A horizontal velocity–time line means constant velocity.", "Free-falling objects accelerate downward at approximately 9.8 m/s² near Earth when air resistance is ignored.",
    ]},
    { kind: "gradedQuiz", heading: "Lesson Quiz: Acceleration and Motion Graphs", passMark: 60, questions: [
      { type: "mc", marks: 1, prompt: "What is acceleration?", options: ["Distance per time", "Rate of change of velocity", "Total path length", "Area under a graph"], answer: 1, explanation: "Acceleration measures how quickly velocity changes." },
      { type: "mc", marks: 2, prompt: "Velocity changes from 6 m/s to 18 m/s in 4 s. Find acceleration.", options: ["3 m/s²", "4.5 m/s²", "6 m/s²", "12 m/s²"], answer: 0, explanation: "(18 − 6) ÷ 4 = 3 m/s²." },
      { type: "mc", marks: 2, prompt: "A car slows from 20 m/s to 5 m/s in 3 s. What is its acceleration?", options: ["−5 m/s²", "5 m/s²", "−15 m/s²", "8.3 m/s²"], answer: 0, explanation: "(5 − 20) ÷ 3 = −5 m/s²." },
      { type: "tf", marks: 1, prompt: "A horizontal line above zero on a velocity–time graph means the object is stationary.", answer: false, explanation: "It means constant non-zero velocity." },
      { type: "mc", marks: 1, prompt: "The gradient of a velocity–time graph gives:", options: ["Acceleration", "Displacement", "Distance", "Time"], answer: 0, explanation: "Gradient = change in velocity ÷ change in time." },
      { type: "mc", marks: 2, prompt: "An object moves at 7 m/s for 6 s. What displacement is represented by the rectangular graph area?", options: ["13 m", "42 m", "7 m", "84 m"], answer: 1, explanation: "Area = 7 × 6 = 42 m." },
      { type: "mc", marks: 2, prompt: "Velocity rises uniformly from 0 to 10 m/s in 4 s. What is the displacement?", options: ["20 m", "40 m", "14 m", "2.5 m"], answer: 0, explanation: "Triangle area = ½ × 4 × 10 = 20 m." },
      { type: "matching", marks: 2, prompt: "Match each graph feature to its meaning.", left: ["Rising straight line", "Horizontal line above zero", "Falling straight line", "Line at zero"], options: ["Constant positive acceleration", "Constant velocity", "Constant negative acceleration", "Stationary"], answer: [0,1,2,3], explanation: "The slope shows acceleration, while the vertical value shows velocity." },
      { type: "multi", marks: 1, prompt: "Select the correct statements about free fall without air resistance.", options: ["Acceleration is downward", "Heavier objects always accelerate faster", "Acceleration is about 9.8 m/s² near Earth", "Velocity can change with time"], answers: [0,2,3], explanation: "Free-fall acceleration is downward and approximately 9.8 m/s²; mass does not change it in a vacuum." },
    ]},
    { kind: "completion", steps: [
      { key: "graphExplorer", label: "Used the motion graph explorer" },
      { key: "classify", label: "Completed the graph behaviour activity" },
      { key: "practice", label: "Completed the practice questions" },
    ], requireQuizPass: true },
  ],
};
