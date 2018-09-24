/*
Video Guide
1.4: Color - The Coding Train
https://www.youtube.com/watch?v=riiJTF5-N7c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=4

Follow along:
-------------
- Play with argument values in the `background` function
- Make a grayscale color
- Explore the p5 reference for color functions
- Use the `fill` and `stroke` functions to customize the rectangle
- Add an ellipse
- Set different colors for the ellipse
- Use the `noFill` and `noStroke` functions
- Use different transparency values
- Use the `strokeWeight` function

Check your understanding:
-------------------------
- What does RGB stand for?
- Which function in the starter code is already making a color?
- What is the range of values for RGB arguments?
- What happens when you pass 1 value instead of 3 to a color function?
- What does the optional Alpha argument (RGBA) do?
- What is the default value for `strokeWeight`?

*/

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220, 0, 200);

  line(0, 50, 400, 300);
  rectMode(CENTER);
  rect(200, 150, 150, 150);
}
