/*
  https://p5js.org/reference/#/p5/color

  Many p5 functions take/need colors as arguments, such as fill, stroke, and background.

  There are several ways you can pass values to functions that take colors.

  Look in the console to see the printed output for each of these ways of storing color variables. Each one is actually a different kind of object.

  Strings are good if you need to allow a user to type in a color name that you can use.

  Numbers are good if you only need grayscale values.

  Using the color object will allow you to be more precise with the individual values and make it easier to update those values later in the program. Try setRed(), setBlue(), setGreen(), and setAlpha().
*/

var stringColor;
var numberColor;
var colorColor;

function setup () {
  createCanvas(400, 400);

  stringColor = "magenta"; // can also use hexcode values like "#00ff00"
  print(stringColor);

  numberColor = 200; // any number from 0-255, will be a grayscale color
  print(numberColor);

  colorColor = color(150, 200, 250); // R, G, B
  print(colorColor);
}

function draw () {
  background(240);
  noStroke();

  fill(stringColor);
  rect(10, 10, 100, 100);

  fill(numberColor);
  ellipse(175, 175, 100, 100);

  fill(colorColor);
  triangle(200, 300, 250, 200, 300, 325);
}

function mousePressed() {
  var randomNumber = floor(random(255));

  // update the color of numberColor
  numberColor = randomNumber;
  print(numberColor);

  // update just the red value of colorColor
  colorColor.setRed(randomNumber);
  print(colorColor);
}

