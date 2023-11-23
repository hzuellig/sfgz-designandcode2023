// Gewisse Teile dieses Codes habe ich mit Hilfe von ChatGPT erstellt.
// Da es schon etwas her ist, weiss ich nicht mehr ganz welche stellen genau.
// Da wo ich es noch wusste, habe ich dies natürlich angefügt.

let tilesX = 50;
let tilesY = 50;
let gridX, gridY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  angleMode(DEGREES);
}

function draw() {
  background(0);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // Position des Hexagons
      let posX = x * gridX;
      let posY = y * gridY;

      // Entfernung zur Maus
      let distance = dist(mouseX, mouseY, posX, posY);

      // Größe basierend auf der Entfernung zur Maus
      let maxSize = dist(0, 0, width, height);
      let size = map(distance, 0, maxSize/8, 6, 0);

      // Winkel zur Maus
      let angle = atan2(mouseY - posY, mouseX - posX);

      // Umrechnung in Rotation JS
      if (angle < 0) {
        angle += 360;
      }

      // Farbe basierend auf mouseX und mouseY setzen
      let r = map(mouseX, 0, width, 0, 255);
      let g = map(mouseY, 0, height, 0, 255);
      fill(r, g, 255);

      push();
      translate(posX, posY);
      rotate(angle);

      // Hexagon zeichnen
      // Dieser Code wurde mit Hilfe von ChatGPT erstellt und ich habe die Werte angepasst

      noStroke (0);
      beginShape();
      for (let i = 0; i < 6; i++) {
        let x = size * cos(i * 60);
        let y = size * sin(i * 60);
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }
  }
}