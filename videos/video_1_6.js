/*
Video Walkthrough
1.6: Code Comments - The Coding Train
https://www.youtube.com/watch?v=xJcrPJuem5Q&index=6&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Add a note using a comment
- Disable a line of code using a comment

Check your understanding:
-------------------------
- Who are code comments for?
- What are code comments for?

*/

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(100);

  rectMode(CENTER);

  fill(0, 255, 0);
  stroke(0, 0, 255);
  strokeWeight(4);
  rect(200, 150, 150, 150);

  fill(255, 0, 0, 175);
  noStroke();
  ellipse(150, 250, 100, 75);
}
