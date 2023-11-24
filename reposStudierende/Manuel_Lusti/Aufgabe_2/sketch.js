let tilesX = 50;
let tilesY = 50;
let gridX, gridY;

let maxDistance;

function setup() {
  createCanvas(innerWidth, innerHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;

  maxDistance = dist(0, 0, width, height);
}

function draw() {
  background(10,15,40,255);
  noStroke();
  strokeCap(SQUARE);

  fill(220,210,200,180);
  ellipse(mouseX,mouseY,30,30);

  

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      stroke(65, 110, 242, 200);
      //Winkel zur Maus
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

      //Umrechnung in Rotation JS
      if (winkel < 0) { winkel += 2 * PI; }

      //distanz berechnen
      let d = dist(mouseX, mouseY, x*gridX, y*gridY);
      let dm = map(d, 0, maxDistance, 0, gridY+1);
      let dsm = map(d, 0, maxDistance,3, gridX);

      push();
      translate(x * gridX + 3, y * gridY + 3);
      rotate(winkel);


      strokeWeight(dm);
      line(0, 0, dsm + 1, 0);

      pop();
    }

  }

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      stroke(191, 31, 44, 200);
      //Winkel zur Maus
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

      //Umrechnung in Rotation JS
      if (winkel < 0) { winkel += 2 * PI; }

      //distanz berechnen
      let d = dist(mouseX, mouseY, x*gridX, y*gridY);
      let dm = map(d, 0, maxDistance, 0, gridY+1);
      let dsm = map(d, 0, maxDistance,3, gridX);

      push();
      translate(x * gridX - 3, y * gridY - 3);
      rotate(winkel);


      strokeWeight(dm);
      line(0, 0, dsm + 1, 0);

      pop();
    }

  }

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      stroke(245, 245, 255, 255);
      //Winkel zur Maus
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

      //Umrechnung in Rotation JS
      if (winkel < 0) { winkel += 2 * PI; }

      //distanz berechnen
      let d = dist(mouseX, mouseY, x*gridX, y*gridY);
      let dm = map(d, 0, maxDistance, 0, gridY+1);
      let dsm = map(d, 0, maxDistance,3, gridX);

      push();
      translate(x * gridX, y * gridY);
      rotate(winkel);


      strokeWeight(dm);
      line(0, 0, dsm + 1, 0);

      pop();
    }

  }
}
