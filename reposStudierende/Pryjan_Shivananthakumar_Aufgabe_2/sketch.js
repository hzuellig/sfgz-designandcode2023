let tilesX = 10;
let tilesY = 100;
let gridX, gridY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
}

function draw() {
  background(0);
  
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      let winkel = noise(x * 0.1, y * 0.1, frameCount * 0.01) * TWO_PI;

      let gradientColor = lerpColor(color(255, 0, 0, 50), color(0, 0, 255, 50), mouseX / width);

      push();
      translate(x * gridX + gridX * 0.5, y * gridY + gridY * 0.5);
      rotate(winkel);

      stroke(gradientColor);
      strokeWeight(2);
      line(-gridX * 0.5, 0, gridX * 0.5, 0);

      pop();
    }
  }
}
