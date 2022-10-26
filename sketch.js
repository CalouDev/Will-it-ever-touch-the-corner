const fr = 60;
let img;
let direction = [3, 2];
let currentColor = 0;
let colors = [[1, 192, 252], [230, 222, 1], [252, 0, 2], [0, 219, 66]];
let touched = false;

function preload() {
  img = loadImage('img/dvd_logo.jpg');
}

function setup() {
  frameRate(fr);
  createCanvas(windowWidth, windowHeight - 1);
  pos = [int(displayWidth / 4) - 50, int(displayHeight / 4) - 25];
}

function draw() {
  background(220);
  
  image(img, pos[0], pos[1], 100, 50);
  tint(colors[currentColor][0], colors[currentColor][1], colors[currentColor][2]);
  
  if (pos[0] + 100 >= width) {
    direction[0] = -direction[0];
    touched = true;
  } else if (pos[0] <= 0) {
    direction[0] = -direction[0];
    touched = true;
  }
  
  if (pos[1] + 50 >= height) {
    direction[1] = -direction[1];
    touched = true;
  } else if (pos[1] <= 0) {
    direction[1] = -direction[1];
    touched = true;
  }
  
  if (touched) {
    if (currentColor < 3) {
      currentColor++;
    } else {
      currentColor = 0;
    }
    touched = false;
  }
  
  pos[0] += direction[0];
  pos[1] += direction[1];
}
