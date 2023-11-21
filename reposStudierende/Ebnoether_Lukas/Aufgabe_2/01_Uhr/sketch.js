let tilesX = 5;
let tilesY = 5;
let gridX, gridY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 255);
  stroke(255);

  // Schleife
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      // Winkel zur Maus
      let angleToMouse = atan2(mouseY - (y * gridY), mouseX - (x * gridX)); //Code aus Beispiel der Übung


      push();
      translate(x * gridX + gridX / 2, y * gridY + gridY / 2); // Verschiebung des Rasters

      // Ellipse zeichnen
      ellipse(0, 0, gridY, gridY);

      pop();


      push();
      translate(x * gridX + gridX / 2, y * gridY + gridY / 2); // Verschiebung des Rasters
      // Ellipse in diesem push ausgeblendet
      //ellipse(0, 0, gridY, gridY);

      // Rotation der gesamten Uhr
      rotate(angleToMouse);

      // Zeiger zeichnen
      stroke(0, 0, 255);
      strokeWeight(3);
      line(0, 0, 100, 0);

      pop();
    }
  }
}
