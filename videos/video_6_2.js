/*
Video Guide
6.2: Classes in JavaScript - The Coding Train
https://www.youtube.com/watch?v=T-HGdc8L-7w&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=22

Follow along:
-------------
- Remove the existing `bubble` object
- Assign `bubble` to a new instance of the `Bubble` class inside of `setup()`
- Comment out the original `show()` and `move()` calls and functions
- Define the `Bubble` class after `draw()`
- Define the `constructor` function inside of the class and assign values for `this.x` and `this.y`
- Use `print` at the end of `setup()` to confirm the values on the `bubble` object
- Directly in the console, enter `bubble` to see the whole object
- Add `bubble.move()` and `bubble.show()` inside of `draw()`
- Define a `move` and `show` function insisde of the `Bubble` class
- Ensure the values inside of the class use `this.` instead of `bubble.`
- Add a `bubble2` variable with a new `Bubble` instance and call the two functions on it in `draw()`

Check your understanding:
-------------------------
- What is a good metaphor for describing the relationship between a class and an instance?
- What is the keyword `new` used for?
- Which special function does a class use for creating a new instance?
- What the keyword `this` refer to? When and where should you use it?

*/

var bubble = {
  x: 300,
  y: 200,
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  move();
  show();
}

function show() {
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(bubble.x, bubble.y, 24, 24);
}

function move() {
  bubble.x = bubble.x + random(-5, 5);
  bubble.y = bubble.y + random(-5, 5);
}
