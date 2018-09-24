/*
Video Guide
3.1: Introduction to Conditional Statements - The Coding Train
https://www.youtube.com/watch?v=1Osb_iGDdjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12

Follow along:
-------------
- Add an if statement that changes the `fill` color if `mouseX` is greater than 300

Check your understanding:
-------------------------
- How does a program take different paths?
- What is a boolean expression?
- What is a relational operator? What are some examples?
- What is the difference between `=` and `==`?

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(300, 200, 100, 100);
}
