/*
Great question!

I'm not a full time JS programmer (I actually got most familiar with it when creating the RAMP program :D) so I don't have any very big feelings about it like a more experienced JS dev might. Overall I default to == since that works the way that I expect it to, and is most similar to the other programming languages that I do work with. I expect it to convert things for me, and that's the way I default to thinking about my programming logic. That said, I can definitely see the reasons behind why === exists, for when you want things to be 100% exact and not converted for you.

I put together a quick program that tries to show most of common situations in which the choice between == and === would give different results. I also added the plain if (someVariable) { ... } option to highlight that when not using an equality check, it will treat any variable that exists as "true" for the purposes of the if statement. The exception of course being when the variable is set to null, false or 0 as those are always treated as false for an if statement of course :)

Feel free to try other values, or add other checks to the helper function to explore more.
*/

function setup () {
  createCanvas(400, 400);

  // check equality of different values
  equalityCheck(0); // 0 is often treated as "false"
  equalityCheck(1); // 1 is often treated as "true"
  equalityCheck(5); // any other number
  equalityCheck(true);
  equalityCheck(false);
  equalityCheck("random string");
  equalityCheck(null);
  equalityCheck(); // undefined
}

function draw () {
  background(0, 255, 255);
}

function equalityCheck(value) {
  // is value equal to == or strictly equal t0 === true?
  print("~~~~ checking value: " + value);

  var result = (value == true);
  print("(" + value + " == true) is " + result.toString().toUpperCase());

  result = (value === true);
  print("(" + value + " === true) is " + result.toString().toUpperCase());

  // does value "exist"?
  if (value) {
    print(value + " PASSES the if exists check");
  } else {
    print(value + " FAILS the if exists check");
  }
  print(""); // newline
}
