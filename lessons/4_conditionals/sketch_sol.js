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
  beast.x = beast.speed + beast.x;
  if (beast.x > width || beast.x < 0) {
    beast.speed = beast.speed * -1;
  }

  // #3 update the beast color to match the background
  if (beast.x < oneThird) {
    beast.color = color1;
  } else if (beast.x < oneThird * 2) {
    beast.color = color2;
  } else {
    beast.color = color3;
  }

  // #4 and #5 Update message if chasing or fleeing the mouse
  var movingTowardsMouse = (beast.speed > 0 && beast.x < mouseX) || (beast.speed < 0 && beast.x > mouseX);
  if (movingTowardsMouse) {
    beast.message = "Chasing mouse";
  } else if (!movingTowardsMouse) {
    beast.message = "Fleeing mouse";
  }

  // Bonus 1 and 2

  helperDrawBeast();
  helperText();
}
