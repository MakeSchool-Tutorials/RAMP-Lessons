## Watch Tutorials
From The Coding Train's p5,js Tutorial Playlist
https://www.youtube.com/watch?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&v=8j0UDiN7my4

Watch:
3.1 Introduction to Conditional Statements
https://www.youtube.com/watch?v=1Osb_iGDdjk&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=11

3.2 The Bouncing Ball
https://www.youtube.com/watch?v=LO3Awjn_gyU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=12

3.3 Else and Else if, AND and OR
https://www.youtube.com/watch?v=r2S7j54I68c&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=13

3.4 Boolean Variables
https://www.youtube.com/watch?v=Rk-_syQluvc&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

## Complete Code Challenges
*in index.html*
### Step 1 - Add your name
add your name, so that it says "YOURNAME's..."

*in sketch.js*
### Step 2 - Make `beast` bounce horizontally
- first modify `beast.x` in the `draw` loop to get the `beast` moving
- next use an if statement to update `beast.speed` to create bouncing behavior
- `beast` should move right until it reaches the edge of the canvas, then change direction and move right until it reaches the edge of the canvas, then change direction again, etc
- Try to use only a single if statement, using `&&` and/or `||` as needed

### Step 3 - Give `beast` color-changing camoflage
- Change `beast.color` to match the color of the background as it moves
- `beast.color` should be `color1` while crossing the first third of the background, `color2` in the middle, and `color3` in the last third

### Step 4 - Determine relative motion of `beast` to the mouse
Let's find out when the beast is moving towards the mouse and when it is moving away from the mouse. This can be done using two pieces of information:
1. Is the beast moving to the left or to the right?
2. Is the mouse to the left or the right of the mouse?
Here are the four possible combinations of these two:
(images)

- Create a boolean variable called `movingTowardsMouse` and use an if statement:
- movingTowardsMouse should be set to `true` when:
`beast` is moving to the right and the mouse is to the right of the `beast`
OR `beast` is moving to the left and the mouse is to the left of the `beast`
- otherwise it should be set to `false`
- Hint: you can tell which direction `beast` is moving based on it's speed!

### Step 5 - Update `beast.message` based on `movingTowardsMouse`
- Use an if statement to update `beast.message` to say whether it is chasing or fleeing the mouse
- If `movingTowardsMouse` is `true`, the message should say "Chasing"
- If `movingTowardsMouse` is `false`, the message should say "Fleeing"

These are the two different combinations for fleeing

### Bonus 1 - Bounce both horizonally and vertically
- Ensure that `beast` still bounces the entire width of the canvas
- the `movingTowardMouse` boolean should still only care about the horizontal direction

### Bonus 2 - Draw what your `beast` is chasing or fleeing from
- Draw the object(s) at the mouse location
- Update `beast.message` to specify what it is chasing or fleeing in each case
