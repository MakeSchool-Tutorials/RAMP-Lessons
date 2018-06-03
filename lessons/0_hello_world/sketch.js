// GET HELP
// Ask any question about the code below. Be sure to tell me what line number to look at
// #4 Ask me a question here

// QUESTIONS
// Q1: Based on the Success Metrics, what score would you currently give yourself in "Programming Experience and Desire", and why? (link to Success Metrics is at the top of the instructions)
// #3 Your answer here


var firstName;
var cityName;
var experience;
var hobby;
var food;

function setup () {
  createCanvas(400, 400);

  // #2 Update the values and uncomment the lines
  // firstName = "unknown";
  // cityName = "unknown";
  // experience = "unknown";
  // hobby = "unknown";
  // food = "unknown";
}

function draw () {
  background(200);
  text(introText(), 10, 10);
  text(experienceText(), 10, 30);
  text(funText(), 10, 50);
}

function introText() {
  return (firstName || "This person") + " is from " + (cityName || "somewhere") + ".";
}

function experienceText() {
  return "So far, they have " + (experience || "some amount of") + " programming experience."
}

function funText() {
  return "Sometimes they eat " + (food || "things") + " while " + (hobby || "doing stuff") + ".";
}
