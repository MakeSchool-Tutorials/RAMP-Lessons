/*
I'd like to see you make use of the if else conditional format instead of having everything as individual if statements.

The reason this is better is that when it's part of an if else format, as soon as one of the conditions is met it will skip all of the rest and not bother checking them too. In addition to saving time, it helps prevent accidentally overriding your own logic when multiple conditions might be true, since it will only check the first one.
*/

// Example:
var number = 10;

// all separate
if (number > 15) {
  print("first");
}
if (number > 5) {
  print("second");
}
if (number > 0) {
  print("third");
}

// using if else combined
if (number > 15) {
  print("firstfirst");
} else if (number > 5) {
  print("secondsecond");
}else if (number > 0) {
  print("thirdthird");
}

/*
If you try this inside of the setup function you'll see that the first section will print out twice:
second
third

but the if else statement will only print secondsecond and skip the rest of the conditional checks.
*/
