var spots;

function setup () {
  createCanvas(400, 400);

  spots = [];
}

function draw () {
  background(currentColor());

  drawSpots();
  drawLastColor();
}

function mousePressed() {
  saveSpot();
  print(spots);
}

function saveSpot() {
  // #2 Add a new Spot from the mouse location and current color to the spots array
}

function drawSpots() {
  // #3 Loop over spots and call draw() on each Spot in the array
}

function lastColor() {
  var lastColor = color(255);

  // #4 Return the color of the most recently added Spot in the spots array

  return lastColor;
}

function drawLastColor() {
  fill(lastColor());
  textSize(50);
  text("L", 10, 50);
}

function currentColor() {
  return color(0, mouseX, mouseY);
}

class Spot {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 25;
  }

  draw() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
