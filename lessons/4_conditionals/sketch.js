var beast;
var color1;
var color2;
var color3;
var oneThird;

function setup () {
  createCanvas(400, 200);
  helperVariables(); // assigns global variable values other than beast

  beast = {
    x: 50,
    y: height * 2/3,
    size: 80,
    speed: 3,
    color: color1,
    message: "Hello world",
  }
}

function draw () {
  helperBackground();

  // #2 Update beast position variables

  // #3 update the beast color to match the background

  // #4 and 5 Update message if chasing or fleeing the mouse

  // Bonus 1 and 2

  helperDrawBeast();
  helperText();
}
