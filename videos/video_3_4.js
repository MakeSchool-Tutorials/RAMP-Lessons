/*
Video Guide
3.4: Boolean Variables - The Coding Train
https://www.youtube.com/watch?v=Rk-_syQluvc&index=15&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Use `mouseIsPressed` in an if statement  to change the background color
- Move the `mouseIsPressed` if statement so that it's inside of the other if statement
- Temporarily comment out the existing if statements to disable the code
- Declare a boolean variable `on` and initialize as `false`
- Add an if else statement which sets background color based on the boolean value of `on`
- Add the `mousePressed` function to update the value of `on` to `true`
- Add an if statement inside of `mousePressed` to check if the mouse is over the square before updating `on`
- Write an if else statment that toggles `on` between `true` and `false`
- Use the ! (not) operator to toggle the value of `on`
- Uncomment the disabled if statements to re-enable the rollover feature

Check your understanding:
-------------------------
- What are all the possible boolean values?
- What is the difference between `mousePressed()` and `mouseIsPressed`?
- What are two ways to check if the boolean `mouseIsPressed` is `true`?
- What are two ways to check if the boolean `mouseIsPressed` is `false`?

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250 ) {
    fill(255, 0, 200);
  }

  rectMode(CENTER);
  rect(300, 200, 100, 100);
}
