/*
Video Walkthrough
3.3: Else and Else if, AND and OR - The Coding Train
https://www.youtube.com/watch?v=r2S7j54I68c&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Add an `else` to the existing if statement
- Use `ellipse` in the if condition and `rect` in the `else`
- Update the if statement to include two `else if` conditions
- Re-order the conditions so that it correctly draws an `ellipse`, `rect`, `line`, or `point`
- Convert the conditions into separate if statements
- Create an if statement to change the `fill` color when the mouse is greater than 200 `&&` (and) less than 300
- Add an `||` (or) to the bouncing ball if statement (uncomment the code)
- When the bouncing ball if statement is `true` update `speed` to reverse directions

Check your understanding:
-------------------------
- What is the difference between `if`, `if else`, and `else`?
- How many `else if` can each if statement have?
- Why does the order of conditions in an if statement matter?
- What is the difference between using one big if else statement versus using separate if statements for each condition?

*/

var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 300) {
    fill(255, 0, 200);
  }

  ellipse(300, 200, 100, 100);

  // if (x > width) {
  //   speed = -3;
  // }
  // ellipse(x, 200, 100, 100);

  // x = x + speed;
}
