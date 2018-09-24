/*
Video Guide
2.3: JavaScript Objects - The Coding Train
https://www.youtube.com/watch?v=-e5h4IGKZRY&index=9&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Use an object to store `circle` properties
- Remove the old `x`, `y`, and `diameter` variables
- Review the Uncaught ReferenceError
- Update all code to use values from the `circle` object

Check your understanding:
-------------------------
- What is one reason to use objects?
- What is the syntax for JavaScript objects called? (HINT: the acronym is JSON)
- How do you access values inside of an object? What is the syntax called?

*/

var x = 0;
var y = 200;
var diameter = 50;
var r = 218;
var g = 160;
var b = 221;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(x, y, diameter, diameter);

  x = x + 1;
}
