var color1;
var color2;
var color3;

function setup () {
  createCanvas(400, 400);

  color1 = color(200, 0, 0); // red
  color2 = color(0, 0, 200); // blue

  // print color1 (this is a color object, which has properties on it you can access)
  print(color1);

  // print red value of color1
  print(color1.levels[0]);


  // check if color1 is equal to color2
  var sameColorCheck1 = color1 == color2;
  print("color1 and color2 are the same:" + (sameColorCheck1));

  // check if color1 is equal to itself (this is to confirm if == works on colors at all)
  var sameColorCheck2 = color1 == color1;
  print("color1 and color1 are the same:" + (sameColorCheck2));

  // add color1 to color2
  color3 = color1 + color2;
  print(color3); // prints out a string value "rgba(200,0,0,1)rgba(0,0,200,1)"
}

function draw () {
  background(0, 255, 255);

  // use color1
  fill(color1);
  ellipse(100, 100, -50, -25);

  // use color2
  fill(color2);
  ellipse(200, 100, 50, 25);

  // use color3 - will be white since color3 is actually a string it can't understand
  fill(color3);
  ellipse(300, 100, 50, 25);

  // use a valid string - will be the color named
  fill("magenta")
  ellipse(100, 250, 50, 25);

  // use a random string - will be white
  fill("falfdasklnfklsd.nf")
  ellipse(200, 250, 50, 25);

}
