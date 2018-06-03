var plant;
var grassColor;
var seedColor;
var sproutColor;
var bloomColor;

function setup () {
  createCanvas(400, 400);

  plant = {
    size: 0,
    growSpeed: 1,
    maxSize: 150,
    bloomSize: 0,
    bloomSpeed: 3,
    maxBloomSize: 100,
  }

  grassColor = color(122, 229, 80);
  seedColor = color(160, 104, 30);
  sproutColor = color(20, 102, 32);
  bloomColor = color(149, 73, 216);

  textSize(20);
}

function draw () {
  background(grassColor);

  print(plant.size);

  // growOrReset();

  // drawPlant(width/2 - 25, 3 * height/4);
  // drawPlant(width/2 + 25, 3 * height/4);

  // text(plantLabel(), 10, 20);
}

// ! Add your new functions below here !

// #2 Create the growOrReset function

// #3 Create the drawPlant function

// #4 Create the plantLabel function

// ! Add your new functions above here !

// ! Do not change the helper functions below unless you are completing the Bonus Challenge !
function plantReset() {
  plant.size = 0;
  plant.bloomSize = 0;
}

function plantGrow() {
  if (plant.size == plant.maxSize) {
   plantBloom();
  } else {
    var newSize = plant.size + plant.growSpeed;
    plant.size = min(newSize, plant.maxSize);
  }
}

function plantBloom() {
  var bloom = plant.bloomSize + plant.bloomSpeed;
  plant.bloomSize = min(bloom, plant.maxBloomSize);
}

function drawSeed(x, y) {
  fill(seedColor);
  ellipse(x, y, 12, 7);
}

function drawSprout(x, y) {
  fill(sproutColor);
  rect(x, y, 5, -plant.size);
}

function drawBloom(x, y) {
  fill(bloomColor);
  ellipse(x, y - plant.size, plant.bloomSize, plant.bloomSize);
}
