//Breite angegeben und die Anzahl Kacheln
let rasterbreite;
let anzahlKacheln = 30;

function setup() {
  createCanvas(900, 900);
  rasterbreite = width / anzahlKacheln;
  angleMode(DEGREES);
  //frameRate(30)
}

function draw() {
  background(255);
 // fill(100, 150, 250);
  noStroke()

  //Schleife in y-Achse
  for (let i = 0; i < anzahlKacheln; i++) {
    //zeichneZeile(rasterbreite / 2 + rasterbreite * i);

    //Schleife in x-Achse
    for (let n = 0; n < anzahlKacheln; n++) {

      push();
      translate(rasterbreite * n + rasterbreite / 2, rasterbreite / 2 + rasterbreite * i);
      let w = floor(random(5)); //0,1;
      
      // Die Pinken Elemente
      console.log("wuerfel"+w);
      if (w == 0) {
        fill(100, 150, 250);
        rect(0, 0, rasterbreite/2, rasterbreite, 90);
      }
      if (w == 1) {
        rect(0, 0, rasterbreite/2, rasterbreite, 180);
      }

      if (w == 2) {
        fill(255, 100, 250);
        rect(0, 0, rasterbreite/2, rasterbreite, 0);

        if (w ==3) {
          fill(100, 150, 250);
          ellipse(0, 0, rasterbreite/2, rasterbreite, 270);
        }


      }
      pop();
    }
    
  }

  //noStroke();
  Loop(3);
}
function zeichneZeile(y) {
  Schleife in x-Achse
  for (let i = 0; i < anzahlKacheln; i++) {
    push();
    translate(rasterbreite * i + rasterbreite / 2, y);
    ellipse(0, 0, rasterbreite, rasterbreite);
    pop();
  }
}

/**
* https://p5js.org/
*/
