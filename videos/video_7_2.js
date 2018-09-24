/*
Video Guide
7.2: Arrays and Loops - The Coding Train
https://www.youtube.com/watch?v=RXWO3mFuW-I&index=25&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

Follow along:
-------------
- Remove `num` and the associated `ellipse`
- Add 3 more calls to `ellipse` using all the values of the `nums` array
- Update the canvas to be 500 wide
- Add a new `for loop` with a starting `i` value of 0, that increases by 1, and loops when `i` is less than 4
- Create an `ellipse` inside of the loop that uses `nums[i]` for the radius arguments
- Add `stroke()` and `noFill()` to help debug the ellipses
- Update the call to `ellipse` to use `i` so that each one is in a different `x` location

Check your understanding:
-------------------------
- Can you use the for loop's local variable `i` only once or more than once?

*/

var nums = [100, 25, 46, 72];

var num = 23;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  ellipse(100, 200, num, num);

  ellipse(200, 200, nums[2], nums[2]);
}
