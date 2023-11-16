let tilesX = 20;
let tilesY = 20;
let gridX, gridY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  noStroke();
}

function draw() {
  background(0);
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let eyeX = x * gridX;
      let eyeY = y * gridY;

      // Pupillenposition berechnen
      let pupilX = constrain(mouseX - eyeX, -5, 5);
      let pupilY = constrain(mouseY - eyeY, -5, 5);

      // Augen zeichnen
      drawEye(eyeX, eyeY, pupilX, pupilY);
    }
  }
}

function drawEye(x, y, pupilX, pupilY) {
  // Weißes Auge
  fill(255);
  ellipse(x, y, 30, 30);

  // Pupille
  fill(0);
  ellipse(x + pupilX, y + pupilY, 10, 10);
}
