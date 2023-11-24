// Variabeln
let f;
let fontGroesse=150;
let lineHeight = fontGroesse * 0.55;
let zeilen;
let skaliere=1;
let Wort = "Zephyr";
let skalierungfaktor =1;
function preload() {
  font = loadFont("Ephesis/Ephesis-Regular.ttf") 
}
function setup() {
  // Zeichenfläche Grösse
  createCanvas(500, 600);
  // Hintergrundfarbe
  background(255,255,255);
  // Schrift
  textFont(font);
  // Schriftgrösse
  textSize(fontGroesse);
  // Schrift ausrichtung Links
  textAlign(LEFT);
  // Zeilen auf die Höhe anpassen
  zeilen=height/lineHeight;
  noLoop();
}
function draw() {
   drawText();
}
function drawText(){
  // h ist der Zähler für die Vertikale Position des Textes
  let h=0;
  while(h<height){
    // map führt eine lineare Umrechnung durch. Sie nimmt einen Wert h,
    // der im aktuellen Bereich zwischen 0 und height liegt, und übersetzt ihn in einen Wert,
    // der im neuen Bereich zwischen 1 und 0 liegt.
    let y=map(h,0,height,1,0);
    push();
    translate(15, h);
    // Verkleinert das Wort jedes Mal
    scale(1/skalierungfaktor, 1/skalierungfaktor);
    // bestimmt die Koordinaten x und y
    text(Wort,0,0);
    pop();
    Wort = Wort+"Zephyr";
    // Vertikale Position von h und addiert einen Wert von 3
    // bewirkt erhöhung der Vertikalen Position zum nächsten Text
    h=h+3+lineHeight*1/skalierungfaktor;
    // beeinflusst die Grösse zum nächsten Text
    skalierungfaktor = skalierungfaktor+1;
    }
}

/**
* https://p5js.org/
*/