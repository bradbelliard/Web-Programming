let song;

function setup() {
  song = loadSound('silence.mp3');
  bg = loadImage('silence1.jpg');
  createCanvas(938, 666);
}

function draw() {
  background(bg);
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();

  }
}
