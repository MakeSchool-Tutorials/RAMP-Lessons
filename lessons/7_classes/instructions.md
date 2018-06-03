Watch Tutorials
From The Coding Train's p5,js Tutorial Playlist

Watch:
6.2 Classes in Javascript
6.3 Constructor Arguments with Classes in Javascript

Complete Code Challenges
in index.html
1- Add your name
add your name, so that it says "YOURNAME's..."

in sketch.js
2- Create a new class called FancyFlower
Use the PlainFlower class for inspiration
Your class should take the same constructor arguments as PlainFlower: x, y, and color
Adjust the randomness of the random default properties to your liking

3- Create two new flowers using your FancyFlower class
Don't forget to pass in the required constructor arguments
Remember to include your new flowers in the garden
Temporarily comment out drawPlants(garden) in the draw function, and check the console to check if they are being printed successfully as part of print(garden)

4- Add a custom drawBloom function to the FancyFlower class
The helper function that draws the garden expects each class to have it's own drawBloom function so that it can create it's own custom flower shape
Don't forget to use this.x, this.y, and this.bloomSize, etc to properly place the bloom relative to the sprout and
Don't draw a bloom when bloomSize is 0
Your new bloom must be fancier than just another ellipse. Add at least one other shape to drawBloom so that it looks different from the PlainFlower
Re-enable calling drawPlants(garden) in the draw function to see your full garden growing

Bonus Challenge
What if you wanted to have each flower type have different looking seeds and sprouts in addition to custom blooms?

This is an advanced challenge and requires making updates to the existing functions.




