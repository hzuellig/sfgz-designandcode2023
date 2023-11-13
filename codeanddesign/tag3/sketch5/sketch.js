let tilesX = 20;
let tilesY = 20;
let gridX, gridY;





function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  angleMode(DEGREES);

}

function draw() {
  background(0);
  stroke(255)
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      //Winkel zur Maus
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

      //Umrechnung in Rotation JS
      if (winkel < 0) { winkel += 360; }

      
      push();
      translate(x * gridX, y * gridY);
      rotate(winkel);
      line(0, 0, gridX, 0);

      pop();
    }

  }
}
