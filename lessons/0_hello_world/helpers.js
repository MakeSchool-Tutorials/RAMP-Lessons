// do not modify this file, make all changes in sketch.js
var backgroundColor;
var firstName = "?";
var cityName = "?";
var hobby = "?";
var food = "?";
var years = "?";
var catchphrase = "?";

function helloHelper() {
  var x = width / 2;
  var y = 50;
  var size = 25;
  textAlign(CENTER);
  textSize(size);
  text(firstName + " is from " + cityName, x, y + size * 2);
  text("They eat " + food, x, y + size * 4);
  text("and like to " + hobby + ".", x, y + size * 5.5);
  text("They have programed", x, y + size * 7.5);
  text("for " + years + " years.", x, y + size * 9);
  text("They often say", x, y + size * 11);
  text("\"" + catchphrase + "\"", x, y + size * 12.5);
}
