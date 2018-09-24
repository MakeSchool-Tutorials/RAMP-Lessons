/*
Video Guide
4.2: Nested Loops - The Coding Train
https://www.youtube.com/watch?v=1c1_TMdf8b8&index=17&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Explore looping effects with random `fill` colors
- Explore looping effects with global variable `offset` to change ellipse locations
- Remove `offset`
- Created a nested for loop using `x` and `y` variables
- Turn the nested loops into two separate loops and compare the outcome
- Use `mouseX` instead of `width` to control how many time the outermost for loop runs

Check your understanding:
-------------------------
- At which point in the `draw` loop is the canvas updated?
- Why do the colors flash when using random `fill` values inside of a loop?

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for (var x = 0; x <= width; x += 50) {
    fill(255, 0, 200);
    ellipse(x, 200, 25, 25);
  }
}
