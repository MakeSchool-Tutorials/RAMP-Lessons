var skyColor;
var cloud;

function setup () {
  createCanvas(400, 400);

  skyColor = color(100, 200, 255);
  cloud = {
    color: color(255, 255, 255, 250),
    height: 100,
    yOffset: 50,
  }

  // #2a Create rightCreature object with properties

  // #2b Create leftCreature object with properties

  // Bonus 1
}

function draw () {
  background(skyColor);
  helperDrawCloud();

  // #3a Draw rightCreature on the right side of the cloud

  // #3b Draw leftCreature on the left side of the cloud

}

// #4a Add mousePressed()

// #4b Use random() and setRed() to change skyColor

// Bonus 2
