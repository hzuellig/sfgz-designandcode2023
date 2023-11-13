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
  //noStroke();

  //Studiert den Code: Was ändert sich und was nicht?

  /**Syntax Loop*/



  //Schleife in y-Achse
  for (let i = 0; i < anzahlKacheln; i++) {
    //zeichneZeile(rasterbreite/2 + rasterbreite*i);

    //Schleife in x-Achse
    for (let n = 0; n < anzahlKacheln; n++) {
      push();
      translate(rasterbreite * n + rasterbreite / 2, rasterbreite/2 + rasterbreite*i);
      ellipse(
        0,
        0,
        rasterbreite,
        rasterbreite
      );
      pop();
    }


  }

  //noLoop();
}


function zeichneZeile(y) {

  //Schleife in x-Achse
  for (let i = 0; i < anzahlKacheln; i++) {
    push();
    translate(rasterbreite * i + rasterbreite / 2, y);
    ellipse(
      0,
      0,
      rasterbreite,
      rasterbreite
    );
    pop();
  }
}