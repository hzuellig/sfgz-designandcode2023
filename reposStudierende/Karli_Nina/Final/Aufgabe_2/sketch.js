
//function für Bildexport
function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}



let tilesX = 6;
let tilesY = 6;
let gridX, gridY;

let img;

function preload() {
  img = loadImage('images/maus.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  
  angleMode(DEGREES);
  

}

function draw(){
  background(200);
  cursor ('images/kaese-3.png');

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      //Winkel zur Maus
      let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX));

      //Umrechnung in Rotation JS
      if (winkel < 0) { winkel += 2 * 360; }



      push();
      // pro tile o punkt verschieben
      translate(x * gridX, y * gridY);
      rotate(winkel);
      image(img, 0, 0, 100, 100)
      pop();
    }

}
}
