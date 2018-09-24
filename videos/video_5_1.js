/*
Video Guide
5.1: Function Basics - The Coding Train
https://www.youtube.com/watch?v=wRHAitGzBrg&index=18&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Add 3 new empty functions - `move()`, `bounce()`, and `display()` - after the `draw` function
- Cut and paste the code that updates `ball.x` and `ball.y` into `move()`
- Cut and paste the code that updates `ball.xspeed` and `ball.yspeed` into `bounce()`
- Cut and paste the code that draws the ball into `display()`
- Call `move()`, `bounce()`, and `display()` inside of `draw()`

Check your understanding:
-------------------------
- Where is the `ellipse` function defined?
- Why would you want to create your own functions?
- What is a key value pair?
- Is the keyword `function` used when defining or calling a function?
- How should you decide what to name a function?
- What are some benefits of making a modular program with custom functions?

*/

var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, 24, 24);

  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }

  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
