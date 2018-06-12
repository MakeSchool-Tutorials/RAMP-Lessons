/*

The way I like to describe it is that the canvas is a plain sheet of paper. Then there's an invisible layer above that that holds the grid information, like a piece of grid paper. This is where the x and y values are looked up when other functions indicate where they should be drawn.

When the draw function starts, these two pieces of paper are always lined up so that the top left corner of the canvas is at 0, 0.

But when you use translate, what that does is move the invisible grid paper so that 0, 0 is now at the new location.

Rotate will always rotate the grid around it's current 0, 0 position.
*/

function setup () {
  createCanvas(400, 400);
}

function draw () {
  drawGrid("1 default", color(0, 0, 200));

  translate(width / 2, height / 2);
  drawGrid("2 translated", color(200, 0, 0));

  rotate(PI/2);
  drawGrid("3 then rotated", color(0, 200, 0));

  rotate(PI/1.7);
  drawGrid("4 rotated again", color(0, 200, 200));
}

function drawGrid(words, color) {
  // draw text
  noStroke();
  text(words, 15, 10);

  stroke(color);
  // draw point at 10, 10
  strokeWeight(5);
  point(10, 10);

  // draw grid lines
  strokeWeight(1);
  for (var x = 0; x < width; x += 50) {
    line(x, 0, x, height);
  }
  for (var y = 0; y < height; y += 50) {
    line(0, y, width, y);
  }
 }
