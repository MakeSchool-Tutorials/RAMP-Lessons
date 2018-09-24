/*
Video Guide
2.1: Variables (mouseX, mouseY) - The Coding Train
https://www.youtube.com/watch?v=RnS0YNuLfQQ&index=7&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Use `mouseX` and `mouseY` to draw the circle where the mouse is
- Call the `background` function in `setup` instead of `draw`
- Use `noStroke` to create a drawing program effect
- Add and use the `mousePressed` function

Check your understanding:
-------------------------
- When and how many times is the `setup` function called?
- When and how many times is the `draw` function called?
- Why does it matter where you call the `background` function?
- What is an event? When is it called?

*/

function setup() {
  createCanvas(600, 300);
}

function draw() {
  // background
  background(250, 250, 100);

  // ellipse
  fill(250, 200, 200);
  ellipse(100, 100, 100, 100);

  // rectangle
  fill(200, 250, 200);
  rect(400, 100, 50, 50);

}
