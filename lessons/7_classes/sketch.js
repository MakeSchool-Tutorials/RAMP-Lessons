var garden;

function setup () {
  createCanvas(400, 400);

  var color1 = color(240, 150, 30);
  var color2 = color(175, 100, 220);

  var flowerOne = new PlainFlower(width/2 - 40, 3 * height/4, color1);
  var flowerTwo = new PlainFlower(width/2 + 40, 3 * height/4, color2);

  // #3 Create 2 new flowers using your new FancyFlower class

  garden = [flowerOne, flowerTwo];
  // garden = [flowerOne, flowerTwo, flowerThree, flowerFour];

  print(garden);
}

function draw () {
  background(color(122, 229, 80));

  growOrChop(garden);
  drawPlants(garden);
}

// #2 Create a new class called FancyFlower

// #4 Add the drawBloom function and give your flowers a unique look

// ! Add your new functions above here !

// ! Do not change the helper functions below !

class PlainFlower {
  constructor(x, y, color) {
    // properties from arguments
    this.x = x,
    this.y = y,
    this.color = color,

    // default properties
    this.size = 0;
    this.bloomSize = 0;

    // random default properties
    this.growSpeed = random(.5, 1.5);
    this.maxSize = random(100,200);
    this.bloomSpeed = random(1, 3);
    this.maxBloomSize = random(50, 150);
  }

  drawBloom() {
    fill(this.color);
    ellipse(this.x, this.y - this.size, this.bloomSize, this.bloomSize);
  }
}

function growOrChop(garden) {
  for (var plant in garden) {
    if (mouseX > width/2) {
      grow(garden[plant]);
    } else {
      chop(garden[plant]);
    }
  }
}

function drawPlants(garden) {
  for (var plant in garden) {
    drawPlant(garden[plant]);
  }
}

function drawPlant(plant) {
  if (plant.size === 0) {
    fill(color(160, 104, 30));
    ellipse(plant.x, plant.y, 12, 7);
  } else {
    fill(color(20, 102, 32));
    rect(plant.x, plant.y, 5, -plant.size);

    plant.drawBloom();
  }
}

function chop(plant) {
  plant.size = 0;
  plant.bloomSize = 0;
}

function grow(plant) {
  if (plant.size == plant.maxSize) {
    var bloom = plant.bloomSize + plant.bloomSpeed;
    plant.bloomSize = min(bloom, plant.maxBloomSize);
  } else {
    var newSize = plant.size + plant.growSpeed;
    plant.size = min(newSize, plant.maxSize);
  }
}
