/*
Video Guide
4.1: while and for Loops - The Coding Train
https://www.youtube.com/watch?v=cnRD9o6odjk&index=16&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Create a local variable `x` set to 0
- Use `x` as the x-value for each `ellipse`
- Increase the value of `x` by 50 between each `ellipse`
- Use a single `while` loop to draw ellipses across the entire width of the canvas
- Add `for` loop that draws another row of ellipses across the canvas
- Use the shorthand for updating the value of `x` in the `for` loop

Check your understanding:
-------------------------
- What is the difference between an if statement control structure and a repeat control structure?
- How do local versus global variables differ? Where are they declared?
- What is an exit condition?
- What 3 key pieces are required to create a `while` loop?
- How do `for` loops and `while` loops differ?
- What is the shorthand way for writing `z = z + 75`?
- What is `x++`  shorthand for?

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  ellipse(0, 200, 25, 25);
  ellipse(50, 200, 25, 25);
  ellipse(100, 200, 25, 25);
  ellipse(150, 200, 25, 25);
  ellipse(200, 200, 25, 25);
  ellipse(250, 200, 25, 25);
}
