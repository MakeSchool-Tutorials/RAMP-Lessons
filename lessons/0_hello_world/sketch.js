/*
  HOW TO ASK QUESTIONS
  Sometimes you might get stuck or have additional questions about the code.

  Ask them at the top of this file by putting them in comments like this.

  This is a block comment.

  Single comments, using //, are also great for helping to organize your code
  and help others understand what the code is for. See the comments below
  for examples.
*/


// The setup function is called once
function setup () {
  createCanvas(400, 400); // make the canvas 400 x 400 pixels

  // Step 2: Update the color values
  backgroundColor = color(100, 150, 255); // Red Green Blue values, 0 to 255

  // Step 3: Fill in your personal info
  firstName = "?";
  cityName = "?";
  hobby = "?";
  food = "?";
  years = "?"
  catchphrase = "?";

  // Step 4
  print("your answer here");
}

// The draw function is a loop that runs forever
function draw () {
  background(backgroundColor); // sets the color of the background

  helloHelper(); // displays text using info from the variables above. view contents of this helper function in helpers.js
}
