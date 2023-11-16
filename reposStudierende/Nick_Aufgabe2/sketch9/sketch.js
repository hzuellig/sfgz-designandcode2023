let tilesX = 20;
let tilesY = 20;
let gridX, gridY;
let letterSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  letterSize = 30;
  noStroke();
  textSize(letterSize);
}

function draw() {
  background(0);
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let eyeX = x * gridX;
      let eyeY = y * gridY;

      // Buchstabe positionieren und rotieren
      let angle = atan2(mouseY - eyeY, mouseX - eyeX);
      let distance = dist(mouseX, mouseY, eyeX, eyeY);
      let transparency = map(distance, 0, width, 255, 0);

      let letterX = eyeX - letterSize / 2;
      let letterY = eyeY + letterSize / 2;

      // Buchstaben zeichnen
      drawLetter(letterX, letterY, angle, transparency);
    }
  }
}

function drawLetter(x, y, angle, transparency) {
  push();
  translate(x, y);
  rotate(angle);
  
  // Buchstabe "N" zeichnen
  fill(255, transparency);
  text('N', 0, 0);
  
  pop();
}


