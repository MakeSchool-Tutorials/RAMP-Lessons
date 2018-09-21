/*
Video Walkthrough
3.2: The Bouncing Ball - The Coding Train
https://www.youtube.com/watch?v=1Osb_iGDdjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12

Follow along:
-------------
- Add an if statement checking if `x` is greater than the canvas width
- Use `print` (or `println`) check when the `if` statement is `true`
- Inside the if statement, try updating the value of `x`
- Add a custom variable `speed` to use when updating `x`
- Update the value of `speed` inside of the if statement

Check your understanding:
-------------------------
- Why was `x = x - 3` not the correct solution?

*/

var x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);

  x = x + 3;
}
