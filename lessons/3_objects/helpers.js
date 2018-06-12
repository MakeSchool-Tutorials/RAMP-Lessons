// Do not modify this file
function helperDrawCloud() {
  noStroke();
  fill(cloud.color);

  ellipse(mouseX - 120, mouseY + cloud.yOffset, cloud.height, cloud.height);
  ellipse(mouseX - 60, mouseY + cloud.yOffset - 10, cloud.height * 1.2, cloud.height * 1.2);
  ellipse(mouseX + 120, mouseY + cloud.yOffset, cloud.height, cloud.height);
  ellipse(mouseX + 60, mouseY + cloud.yOffset - 10, cloud.height * 1.2, cloud.height * 1.2);
  ellipse(mouseX, mouseY + cloud.yOffset - 10, cloud.height * 1.3, cloud.height * 1.3);
}
