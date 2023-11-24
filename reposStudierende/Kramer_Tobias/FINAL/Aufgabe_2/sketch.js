let tilesX = 20; // Grid erstellen
let tilesY = 20;
let gridX, gridY;

function setup() {
  createCanvas(innerWidth, innerHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
}

function draw() {

  if (mouseX < width / 2) {
    background(255); // Weißer Hintergrund
    fill(0); // Schwarze Buchstaben
  } else {
    background(0); // Schwarzer Hintergrund
    fill(255); // Weiße Buchstaben
  }


  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // Winkel zur Maus
      let angle = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

  
      if (angle < 0) {
        angle += 2 * PI;
      }

      push();
      translate(x * gridX, y * gridY);
      rotate(angle+10);
      scale(x/10)-(y/10);
      drawLetterT(gridX, 0, 20); 
      pop();
    }
  }
}

// Funktion zum Zeichnen des Buchstabens 'T'
function drawLetterT(x, y, size) {
  textSize(25);
  textFont('Helvetica');
  textAlign(CENTER, CENTER);
  text('T', x, y);
}



/**
 * [...]
 
 * @coauthor Chat GPT
 * 
 */