## Watch Tutorials
From The Coding Train's p5,js Tutorial Playlist
https://www.youtube.com/watch?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&v=8j0UDiN7my4

2.1 Variables (mouseX, mouseY)
https://www.youtube.com/watch?v=RnS0YNuLfQQ&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=6

2.2 Variables (make your own)
https://www.youtube.com/watch?v=Bn_B3T_Vbxs&index=7&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

## Complete Code Challenges
### in index.html
*Step 1: Add your name*
- add your name, so that it says "YOURNAME's..."

### in sketch.js
*Step 2: Create a big arrow that follows the mouse*
- Add 3 more lines to create the triangle top of the arrow
- Arrow size and shape should be the same no matter where you move the mouse
- Customize the color and line size to your liking


*Step 3: Create a variable for the background color*
- Declare a custom variable name at the top of the file (`var backgroundColor;`)
- Assign a color inside of `setup` (`backgroundColor = color(...)`)
- Create your color with 3 values for Red, Green, Blue, not just a single grayscale value
- Pass your newly created color variable to the `background` function instead of `200`
- the `color` function doesn't work before the `setup` function, you will get an error if you try to do it all at the top

*Step 4: Create a creature that moves across the screen at a constant speed*
- Declare a custom variable name at the top of sketch.js and assign a starting value of `10`
- For numbers you can assign the starting value at the top because numbers are always available and don't need to wait until the `setup` function
- Use your custom variable as the `x` location for drawing your custom creature
- Your creature should be made of at least 2 shapes and 2 colors
- Increment your variable by some amount inside of `draw` so that it moves across the screen


- Ensure you keep the `background` function at the top of `draw`, we want the creature to move, not for it to smear color across the canvas (do not move it to the `mousePressed` function)

*Bonus 1: Draw a creature that changes color as you move the mouse*
- use 2 or more shape functions and 2 or more colors for your creature
- creature does not need to move
- the color(s) of the creature should change as you move the mouse
- colors should not flash (don't use the `random` function)
