/*
Video Guide
5.2: Function Parameters and Arguments - The Coding Train


Follow along:
-------------
- Define a `lollipop` function
- Move the code that draws the lollipop into `lollipop`
- Call `lollipop()` in `draw()`
- Add parameters - `x`, `y`, `diameter` - to `lollipop()`
- Update the `lollipop()` code to use the new parameters
- Call `lollipop()` two times with different arguments

Check your understanding:
-------------------------
- Name some functions that take parameters. Name some that don't.
- Why do some functions have parameters?

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);

  fill(0, 200, 255);
  rect(290, 200, 20, 150);

  fill(255, 0, 200);
  ellipse(300, 200, 100, 100);

}
