/* Credits to @coauthor Hanna Züllig for providing sample Code
*/

let rasterbreite;
let anzahlKacheln = 30;
let gridX, gridY;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rasterbreite = width / anzahlKacheln;
  gridX = width / anzahlKacheln;
  gridY = height / anzahlKacheln;
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);
  noFill();
  stroke(70,60,0)
  //noLoop();
  //frameRate(2);
  randomSeed(5);


  //Schleife in Y-Achse (Nach unten)
  for (let p = 0; p < anzahlKacheln; p++) {
    //zeichneZeile(rasterbreite/2 + rasterbreite * p)

    //Schleife in X-Achse (Nach rechts)
    for (let i = 0; i < anzahlKacheln; i++) {
      let w=floor(random(4));
let winkel = atan2(mouseY - (rasterbreite/2 + rasterbreite * p), mouseX - (rasterbreite * i + rasterbreite / 2));

      console.log(w);


      push();
      translate(rasterbreite * i + rasterbreite / 2, rasterbreite/2 + rasterbreite * p);
      noFill();
      strokeWeight(2)
      arc(0, 0, rasterbreite, rasterbreite,90,270);

      if(w==0){
        arc(0, 0, rasterbreite, rasterbreite,0,180); 
      }
      if(w==1){
        arc(0, 0, rasterbreite, rasterbreite,180,360); 
      }

      if(w==2){
        //noStroke();
        fill(200,150,150, 100)
        line(0, 0, 15,0,rasterbreite, rasterbreite); 
      }

      if(w==3){
        if (winkel < 0) { winkel += 360; }

        fill(255,44,12)
        rotate(winkel);
        ellipse(0,0, rasterbreite/1, rasterbreite/1.7);
        fill(0)
        noStroke();
        ellipse(4,0, rasterbreite/2.5, rasterbreite/2.5);
        fill(184,244,196)
        noStroke();
        ellipse(6,0, rasterbreite/5, rasterbreite/5);
      }

     
      pop();

  
    }
  }
}