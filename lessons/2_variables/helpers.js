// Do not modify this file
function mousePressed() {
  print("x: " + floor(mouseX) + ", " + "y: " + floor(mouseY));
}

function drawBigMouse(x, y) {
  // quad(205, 210, 221, 205, 240, 250, 225, 258);
  // triangle(185, 136, 185, 225, 240, 195);

  x = x || 10;
  y = y || 10;
  quad(x + 20, y + 75, x + 36, y + 70, x + 55, y + 117, x + 40, y + 125);
  triangle(x, y, x, y + 90, x + 55, y + 60);
}
