// Do not modify this file
function helperBackground() {
  background(250);
  line(width/2, 0, width/2, height);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Creature 1", width/4, 30);
  text("Creature 2", width/4 * 3, 30);
}

function mousePressed() {
  print("x: " + floor(mouseX) + ", " + "y: " + floor(mouseY));
}
