let tilesX = 20;
let tilesY = 20;
let gridX, gridY;

let diagonale;



function setup() {
  let cvn=createCanvas(windowWidth, windowHeight);
  cvn.parent("p5sketch")
  
  gridX = width / tilesX;
  gridY = height / tilesY;

  diagonale = round(sqrt(pow(width, 2) + pow(height, 2)));

}

function draw() {
  background(0);
  stroke(255)
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));


      stroke(255);
      push();
      translate(x * gridX, y * gridY);


      if (winkel < 0) { winkel += 2 * PI; }
      rotate(winkel);

      line(0, 0, gridX, 0);

      pop();
    }

  }
}
