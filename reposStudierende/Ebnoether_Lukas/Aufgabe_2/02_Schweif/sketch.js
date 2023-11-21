let tilesX = 40;
let tilesY = 40;
let gridX, gridY;
let diagonale;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  diagonale = dist(0, 0, width, height);
}

function draw() {
  background(255,0,0);
  noStroke();

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // Distanz zur Maus
      let distanz = dist(mouseX, mouseY, x * gridX, y * gridY); //Code aus Beispiel der Übung
      push();
      translate(x * gridX, y * gridY);

      // Grösse basierend auf der Mausdistanz
      let groesse = map(distanz, 0, diagonale, 0, gridX * 3); 

      // Farbverlauf basierend auf der Mausdistanz
      let farbe = map(distanz, 0, diagonale, 255, 0);
      fill(farbe, farbe, 255);

      ellipse(0, 0, groesse, groesse); 

      pop();
    }
  }
}
