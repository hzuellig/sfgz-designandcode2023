let tilesX = 20;
let tilesY = 20;
let gridX, gridY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  strokeWeight(2); // Dicke der Linien
  strokeCap(SQUARE); // Eckige Enden für die Linien
}

function draw() {
  background(0);
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));
      if (winkel < 0) { winkel += 2 * PI; }
      
      push();
      translate(x * gridX, y * gridY);
      rotate(winkel);

      if ((x + y) % 3 === 0) {
        // Jedes dritte Dreieck hat eine zufällige Farbe
        fill(random(255), random(255), random(255));
      } else if ((x + y) % 2 === 0) {
        // Jedes zweite Dreieck ist blau
        fill(0, 0, 255);
      } else {
        // Alle anderen Dreiecke sind grün
        fill(0, 255, 0);
      }

      // Dreieck zeichnen
      triangle(0, -10, 10, 10, -10, 10);

      pop();
    }
  }
}




