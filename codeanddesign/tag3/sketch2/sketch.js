let rasterbreite;
let anzahlKacheln = 15;

function setup() {
  createCanvas(600, 600);
  rasterbreite = width / anzahlKacheln;
  angleMode(DEGREES);
}

function draw() {
  background(255);

  fill(255, 150, 0);
  noStroke();

  //Studiert den Code: Was ändert sich und was nicht?

  /**Syntax Loop*/


  
  //Schleife in y-Achse
  for(let i=0;i<anzahlKacheln;i++){
    zeichneZeile(rasterbreite/2 + rasterbreite*i);
  }
  
  noLoop();
}


function zeichneZeile(y){

  //Schleife in x-Achse
  for (let i = 0; i < anzahlKacheln; i++) {
    push();
    translate(rasterbreite * i + rasterbreite / 2, y);

    //anza
    let w=floor(random(2));//0, 1
    //console.log(w);

    if(w==0){
      arc(0,0,rasterbreite,rasterbreite,0,180);
    }

    if(w==1){
      arc(0,0,rasterbreite,rasterbreite,180,360);
    }
    
    pop();
  }
}