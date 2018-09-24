/*
Video Guide
6.3: Constructor Arguments with Classes in JavaScript - The Coding Train
https://www.youtube.com/watch?v=rHiSsgFRgx4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=23

Follow along:
-------------
- In `setup()`, pass 3 number arguments to each `new Bubble` call
- Update `constructor()` to take 3 parameters, `x`, `y`, and `r`
- Use the new parameters to assign values to `this.x`, `this.y`, and `this.r`
- Update `show()` to use the new `this.r` value for the `ellipse`

Check your understanding:
-------------------------
- What does adding arguments to the Class constructor allow you to do?
- Why might someone use a naming convention like `tempX` for parameters?

*/

let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}
