/*
Video Guide
2.5: The random() Function - The Coding Train
https://www.youtube.com/watch?v=nfmV2kuQKwA&index=11&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Comment out code to debug the "empty variable" error
- Fix the bug caused by the object name
- Update `spot.x` to be a random number between 0 and the canvas width
- Update `spot.y` to be a random number between 0 and the canvas height
- Update each of the `col` object properties using the `random` function
- Customize the stroke and transparency for `ellipse`

Check your understanding:
-------------------------
- How is the `random` function different from functions like `rect` and `line`?
- What are the two arguments you can pass to `random`?
- What kind of numbers does the `random` function return?
- Bonus: Explain the reason for the error you debugged (HINT: overrides)

*/

var point = {
  x: 100,
  y: 50
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  fill(col.r, col.g, col.b);
  ellipse(point.x, point. y, 24, 24);
}
