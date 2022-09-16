let words = 'Art is love, hate, and everything in between.'
let words2 = 'Above all, art is power'
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);
  fill('white');
  textSize(16);
  text(words, 75, 250);
  text(words2, 150, 285);
  fill('red');
  triangle(165, 220, 230, 125, 295, 220)
  fill('blue')
  noStroke();
  triangle(165, 315, 230, 400, 295, 315)
  noStroke();
  fill('red')
  triangle(230, 400, 295, 315, 350, 400)
  triangle(110, 400, 165, 315, 230, 400)
}