let tilesX = 20;
let tilesY = 20;
let gridX, gridY;

let diagonale;//maximale distanz zur Maus



function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  angleMode(DEGREES);
  //diagonale=round(sqrt(pow(width,2)+pow(height, 2)));

  diagonale=dist(0,0,width, height);//einfachere version der rechnung oben

}

function draw() {
  background(0);
  stroke(255)
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      //Distanz zur Maus
      let distanz=dist(mouseX, mouseY, (x*gridX), (y*gridY));
      push();
      translate(x*gridX+gridX/2, y*gridY+gridY/2);
      
      let f=map(distanz,0, diagonale, 0.1,1.0);

      //scale(0.5,1);
      rotate(sin(frameCount/10)*360);
      scale(f);
      for(let n=0;n<gridY;n+=3){
        push();
        translate(0,n);
        rect(0, 0, gridX, 1);
        pop();
      }
      

      pop();
    }

  }
}
