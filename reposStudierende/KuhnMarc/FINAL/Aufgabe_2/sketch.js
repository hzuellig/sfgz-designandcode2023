let tilesX = 10;
let tilesY = 10;
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
      let angle = atan2(mouseY - y * gridY, mouseX - x * gridX) + PI;

      let mouseDistance = dist(mouseX, mouseY, x * gridX, y * gridY);
      let maxDistance = dist(0, 0, width, height);
      let colorValue = map(mouseDistance, 0, maxDistance, 0, 255);

      let c = color(colorValue, 255 - colorValue, 0, 150); //farben ändern nach maus ort

      push();
      translate(x * gridX, y * gridY);
      rotate(angle);
      strokeWeight(5); 
      stroke(0); 

      let octagonSize = gridX * 0.3; // kleines oktagon

      drawOctagon(octagonSize, c);
      pop();
    }
  }
}

function drawOctagon(size, fillColor) {
  fill(fillColor); 
  beginShape();
  for (let i = 0; i < 8; i++) {
    let theta = map(i, 0, 8, 0, TWO_PI);
    let px = size * cos(theta);
    let py = size * sin(theta);
    vertex(px, py);
  }
  endShape(CLOSE);
}
