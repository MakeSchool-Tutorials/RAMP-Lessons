/*
Video Guide
7.3: Constructor Arguments with Classes in JavaScript - The Coding Train
https://www.youtube.com/watch?v=fBqaA7zRO58&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=26

Follow along:
-------------
- Replace the global variables `bubble1` and `bubble2` with an empty array named `bubbles`
- Update the existing code to use `bubbles[0]` and `bubbles[1]` instead of `bubble1` and `bubble2`
- Update `setup()` to use a for loop instead to add the two `Bubble` instances to the `bubbles`  array
- Update `draw()` to use a for loop to call `.move()` and `.show()` on each object in the array
- Add new local variables in the for loop in `setup` to give each `Bubble` a different `x` value
- Instead of creating just 2 objects, update the first loop to make 3
- Instead of drawing just 2 objects, update the second loop to cover all objects in the array, using `bubbles.length`
- Adjust the numbers in the first for loop so that you have 10 `Bubble`s across the canvas
- Update the local variables to give each `Bubble` random values for each argument
- Make the small update required to make 100, or 1000 `Bubble`s
- Remove/comment out the first for loop that creates and adds to the `bubbles` array
- Add the `mousePressed` function
- Use `push()` to add a new `Bubble` to `bubbles` each time the mouse is clicked
- Change `mousePressed` to `mouseDragged` and try it

Check your understanding:
-------------------------
- What is the index number of the first object in an array?
- What is the index number of the last object in an array with a size of 10?
- How can you check the size of an array?

*/

let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
