
let rasterbreite;
let anzahlKacheln = 15;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rasterbreite = width / anzahlKacheln;
  angleMode(DEGREES);
}

function draw() {
  background(255);

  noFill();
  stroke(0, 0, 0);
  strokeWeight(3);

  //Schleife in y-Achse in Bezug auf Funktion zeichneZeile
  for(let j = 0; j < anzahlKacheln; j = j + 1) {
    zeichneZeile(rasterbreite*j+rasterbreite/2);
  }

  noLoop();
}
 
//Funktion die in der X-Achse zeichnet
function zeichneZeile(y){
  for (let i = 0; i < anzahlKacheln; i++) {
    push();
    translate(rasterbreite * i + rasterbreite / 2, y);

    let w=floor(random(4));//0, 1

    if(w==0){
      arc(-rasterbreite/2, -rasterbreite/2, rasterbreite*2, rasterbreite*2, 0, 90);
      arc(-rasterbreite/2, -rasterbreite/2, rasterbreite*1.6, rasterbreite*1.6, 0, 90);
      arc(-rasterbreite/2, -rasterbreite/2, rasterbreite*1.2, rasterbreite*1.2, 0, 90);
      arc(-rasterbreite/2, -rasterbreite/2, rasterbreite*0.8, rasterbreite*0.8, 0, 90);
    }

    if(w==1){
      arc(rasterbreite/2, rasterbreite/2, rasterbreite*2, rasterbreite*2, 180, 270);
      arc(rasterbreite/2, rasterbreite/2, rasterbreite*1.6, rasterbreite*1.6, 180, 270);
      arc(rasterbreite/2, rasterbreite/2, rasterbreite*1.2, rasterbreite*1.2, 180, 270);
      arc(rasterbreite/2, rasterbreite/2, rasterbreite*0.8, rasterbreite*0.8, 180, 270);
    }

    if(w==2){
      arc(rasterbreite/2, -rasterbreite/2, rasterbreite*2, rasterbreite*2, 90, 180);
      arc(rasterbreite/2, -rasterbreite/2, rasterbreite*1.6, rasterbreite*1.6, 90, 180);
      arc(rasterbreite/2, -rasterbreite/2, rasterbreite*1.2, rasterbreite*1.2, 90, 180);
      arc(rasterbreite/2, -rasterbreite/2, rasterbreite*0.8, rasterbreite*0.8, 90, 180);
    }

    if(w==3){
      arc(-rasterbreite/2, rasterbreite/2, rasterbreite*2, rasterbreite*2, 270, 360);
      arc(-rasterbreite/2, rasterbreite/2, rasterbreite*1.6, rasterbreite*1.6, 270, 360);
      arc(-rasterbreite/2, rasterbreite/2, rasterbreite*1.2, rasterbreite*1.2, 270, 360);
      arc(-rasterbreite/2, rasterbreite/2, rasterbreite*0.8, rasterbreite*0.8, 270, 360);
    }

    pop();

  
  }
}