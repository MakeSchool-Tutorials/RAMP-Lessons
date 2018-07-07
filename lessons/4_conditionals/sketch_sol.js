var beast;
var color1;
var color2;
var color3;
var oneThird;
var go;

function setup () {
  createCanvas(400, 200);
  helperVariables(); // assigns global variable values other than beast

  go = true;

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

  // #4 and #5 Update message if chasing or fleeing the mouse

  // Bonus 1 and 2

    // #4 Update message if chasing or fleeing the mouse
  var movingTowardsMouse = (beast.speed > 0 && beast.x < mouseX) || (beast.speed < 0 && beast.x > mouseX);
  if (movingTowardsMouse) {
    beast.message = "Chasing mouse";
  } else if (!movingTowardsMouse) {
    beast.message = "Fleeing mouse";
  }

  // #3 update the beast color to match the background
  if (beast.x < oneThird) {
    beast.color = color1;
  } else if (beast.x < oneThird * 2) {
    beast.color = color2;
  } else {
    beast.color = color3;
  }

  // #2 Finish the bouncing beast
  beast.x = beast.speed + beast.x;
  if (beast.x > width || beast.x < 0) {
    beast.speed = beast.speed * -1;
  }

  fill(255);
  text(beast.message, 10, 20);

  helperDrawBeast();
  helperText();
}

function mousePressed() {
  if (go) {
    go = false;
    noLoop();
  } else {
    go = true;
    loop();
  }
}
