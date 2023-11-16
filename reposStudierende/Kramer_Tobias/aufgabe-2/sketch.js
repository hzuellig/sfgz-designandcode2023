let tilesX = 20;
let tilesY = 20;
let gridX, gridY;

function setup() {
  createCanvas(innerWidth, innerHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
}

function draw() {
  background(0);
  fill(255);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // Winkel zur Maus
      let angle = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

      // Umrechnung in Rotation JS
      if (angle < 0) {
        angle += 2 * PI;
      }

      push();
      translate(x * gridX, y * gridY);
      rotate(angle+10);
      scale(x/10)-(y/10);
      drawLetterT(gridX, 0, 20); // Verwenden Sie die drawLetterT-Funktion
      pop();
    }
  }
}

// Funktion zum Zeichnen des Buchstabens 'T'
function drawLetterT(x, y, size) {
  textSize(size);
  textAlign(CENTER, CENTER);
  text('T', x, y);
}
