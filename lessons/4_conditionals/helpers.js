// Do not modify this file
var whiteColor;

function helperVariables() {

  // create random values to use for RGB in colors
  var colorValue1 = random(100, 255);
  var colorValue2 = random(100, 255);
  var colorValue3 = random(100, 255);
  var alphaValue = 250;

  // assign colors using random values
  color1 = color(colorValue1, colorValue3, colorValue2, alphaValue);
  color2 = color(colorValue2, colorValue1, colorValue3, alphaValue);
  color3 = color(colorValue3, colorValue2, colorValue1, alphaValue);
  whiteColor = color(250, 250, 250, alphaValue);

  oneThird = width/3;
}

function helperBackground() {
  background(255);
  noStroke();

  // right color band (cover whole canvas first)
  fill(color3);
  rect(0, 0, width, height);

  // middle color band (cover 2/3 of canvas)
  fill(color2);
  rect(0,0, oneThird * 2,height);

  // left color band (cover 1/3 of canvas)
  fill(color1);
  rect(0,0, oneThird,height);
}

function helperDrawBeast() {
  stroke(whiteColor);
  fill(beast.color);

  // body
  arc(beast.x, beast.y, beast.size, beast.size, PI, TWO_PI, CHORD);

  // head
  ellipse(beast.x + (4 * beast.speed), beast.y - 30, beast.size / 2, beast.size / 2);

  // eye
  fill(255);
  ellipse(beast.x + (6 * beast.speed), beast.y - 35, beast.size / 6, beast.size / 6);
}

function helperText() {
  noStroke();
  fill(255);
  text(beast.message, 10, 20);
 }
