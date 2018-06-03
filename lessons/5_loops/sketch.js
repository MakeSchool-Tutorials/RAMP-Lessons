var monster;
var grassColor;
var dirtColor;
var tileSize;

function setup () {
  createCanvas(400, 400);

  monster = {
    x: 0,
    y: 0,
    size: 30,
    spacing: 50,
    speed: 1,
    color: color(255),
    message: "Moving",
  }

  grassColor = color(122, 229, 80, 20);
  dirtColor = color(160, 104, 30);
  tileSize = 25;
}

function draw () {
  background(grassColor);
  stroke(dirtColor);

  // #4 Draw a tile floor // Bonus Challenge

  ellipse(monster.x, monster.y, monster.size, monster.size);

  // #3 Use a loop to draw copies of monster along the x-axis

  // #2 Make the monster move diagonally
}
