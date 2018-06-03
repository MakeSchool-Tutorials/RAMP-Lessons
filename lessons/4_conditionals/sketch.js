var beast;
var color1;
var color2;
var color3;

function setup () {
  createCanvas(400, 200);

  var cStrength1 = random(100, 255);
  var cStrength2 = random(100, 255);
  var tStrength = 150;
  color1 = color(cStrength1, 50, cStrength2, tStrength);
  color2 = color(cStrength2, cStrength1, 50, tStrength);
  color3 = color(50, cStrength2, cStrength1, tStrength);

  beast = {
    x: 0,
    y: height/2,
    size: 50,
    speed: 4,
    color: color(255),
    message: "Moving",
  }
}

function draw () {
  background(255);

  var oneThird = width/3;
  stroke(255, 255, 255, 50);
  fill(color3);
  rect(0, 0, width, height);
  fill(color2);
  rect(0,0, oneThird * 2,height);
  fill(color1);
  rect(0,0, oneThird,height);

  // #4 Update message if chasing or fleeing the mouse

  // #3 update the beast color to match the background

  fill(beast.color);
  ellipse(beast.x, beast.y, beast.size, beast.size);

  // #2 Finish the bouncing beast

  fill(255);
  text(beast.message, 10, 20);

  // Bonus Challenge
}
