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

      // Pupillenposition und Größe berechnen
      let pupilSize = map(dist(mouseX, mouseY, eyeX, eyeY), 0, width, 2, 10);
      let pupilX = map(mouseX - eyeX, -width / 2, width / 2, -pupilSize / 2, pupilSize / 2);
      let pupilY = map(mouseY - eyeY, -height / 2, height / 2, -pupilSize / 2, pupilSize / 2);

      // Augen zeichnen
      drawEye(eyeX, eyeY, pupilX, pupilY, pupilSize);
    }
  }
}

function drawEye(x, y, pupilX, pupilY, pupilSize) {
  // Weißes Auge
  fill(255);
  ellipse(x, y, 30, 30);

  // Pupille
  fill(0);
  ellipse(x + pupilX, y + pupilY, pupilSize, pupilSize);
}
