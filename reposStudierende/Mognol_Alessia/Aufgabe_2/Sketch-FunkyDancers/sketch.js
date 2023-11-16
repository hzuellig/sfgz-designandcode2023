let tilesX = 20;
let tilesY = 20;
let gridX, gridY;

let diagonale;//maximale distanz zur Maus

const svgFilePath = "dancer.svg"; //PATH TO YOUR FILE
let shape;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridX = width / tilesX;
  gridY = height / tilesY;
  angleMode(DEGREES);
  //diagonale=round(sqrt(pow(width,2)+pow(height, 2)));

  diagonale=dist(0, 0, width, height);//einfachere Version der Rechnung oben

  shape=loadSVGFile(svgFilePath);
}

function draw() {
  background(0);
  stroke(255)
  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      //Distanz zur Maus
      let distanz=abs(dist(mouseX, mouseY, (x*gridX), (y*gridY)));
      
      //Winkel zur Maus
      let winkel = atan2(mouseY - (y*gridY), mouseX - (x*gridX));

      //Umrechnung in Rotation JS
      if (winkel < 0) { winkel += 360; }

      push();
      translate(x*gridX+gridX/2, y*gridY+gridY/2);
      
      //(distanz, altes min., altes max., neues min., neues max.)
      let f=map(distanz,0, diagonale, 0.01,0.1);
      
      scale(f);
      rotate(winkel);
      
      /*----display shapes using importSVG class methods ----*/
      shape.fill(255);
      shape.drawShapes(0, 0);
      /*----end display shapes using importSVG class methods ----*/
      pop();
    }
  }

   /*----display shapes using importSVG class methods ----*/
  
   //shape.fill(fillColorRed, 100,0,100); //red, green, blue, alpha
   //shape.stroke(fillColorRed, 0, 0, 255); //red, green, blue, alpha
   //shape.strokeWidth(0.5);
   //shape.drawShapes(50, 50);
  
   /*----end display shapes using importSVG class methods ----*/
}
