/*
Video Guide
2.2: Variables (Make your own) - The Coding Train
https://www.youtube.com/watch?v=Bn_B3T_Vbxs&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8

Follow along:
-------------
- Declare and initialize custom variable `circleX`
- Use the custom variable `circleX` in the `ellipse` function
- Change the initial value of `circleX`
- Update the value of `circleX` in the `draw` function
- Update the value of `circleX` so that the circle moves even faster

Check your understanding:
-------------------------
- What are the 3 main steps of working with custom variables?
- What is the value of a variable if you forget to initialize it?
- What is an assignment operation?
- Do you always have to declare and initialize a variable at the same time?

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(250, 250, 100);
  // ellipse
  fill(250, 200, 200);
  ellipse(50, 200, 80, 80);
}
