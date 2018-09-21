/*
Video Walkthrough
1.5: Errors & Console - The Coding Train
https://www.youtube.com/watch?v=LuGsp5KeJMM&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=5

Follow along:
-------------
- Locate the console (NOTE: location depends on your code editor)
- Use the `print` function
- Create a SyntaxError
- Create an Uncaught ReferenceError

Check your understanding:
-------------------------
- Who or what is the console for?
- Is JavaScript case-sensitive? Why does it matter?
- What are semi-colons for? How important are they?

*/

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(100);

  rectMode(CENTER);

  fill(0, 255, 0);
  stroke(0, 0, 255);
  strokeWeight(4);
  rect(200, 150, 150, 150);

  fill(255, 0, 0, 175);
  noStroke();
  ellipse(150, 250, 100, 75);
}
