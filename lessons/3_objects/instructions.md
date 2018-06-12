## Watch Tutorials
From The Coding Train's p5,js Tutorial Playlist
https://www.youtube.com/watch?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&v=8j0UDiN7my4

2.3 Javascript Objects
https://www.youtube.com/watch?v=-e5h4IGKZRY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=8

2.5 The random() Function
https://www.youtube.com/watch?v=nfmV2kuQKwA&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=10

## Complete Code Challenges
### in index.html
*Step 1: Add your name*
- add your name, so that it says "YOURNAME's..."

### in sketch.js
*Step 2: Create two new objects*
- Declare 2 vars called `rightCreature` and `leftCreature`
- In `setup`, assign `rightCreature` and `leftCreature` to objects with the following 5 properties inside of them:
`color1` ,`color2` ,`height` ,`width` ,`xOffset`
- Give `rightCreature` a positive `xOffset` number and `leftCreature` a negative `xOffset`

*Step 3: Draw rightCreature and leftCreature on the cloud*
- Use `mouseX` and `xOffset` so that `rightCreature` and `leftCreature` both follow the mouse but to the left/right side by a distance of `xOffset`
- Use 2 or more shapes for each creature
- Use ALL 5 properties on each creature
- It should look like your two creatures are floating around on the cloud as you move the mouse around

*Step 4: Add the mousePressed() function and use random()*
- Add the `mousePressed()` function at the bottom of the file (be sure it's not inside of another function) and add `print("clicked")` in it so that you can see evidence in the console each time you trigger the function
- Use `setRed()` (https://p5js.org/reference/#/p5.Color/setRed) and `random()` to update `skyColor`
- Now the sky should change color when you click the mouse

*Bonus 1: Answer the questions*
Use `print()` inside of `setup` to answer:
- What is the difference between value == 5 and value = 5?
- Which one is used in conditional statements?

*Bonus 2: Make it a dance party!*
Make your creatures dance back and forth when you click the mouse. _Untz untz untz!_ :D
