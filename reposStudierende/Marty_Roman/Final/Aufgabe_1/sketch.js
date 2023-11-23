// Gewisse Teile dieses Codes habe ich mit Hilfe von ChatGPT erstellt.
// Da es schon etwas her ist, weiss ich nicht mehr ganz welche stellen genau.
// Da wo ich es noch wusste, habe ich dies natürlich angefügt.

let mic;
let angle = 1;
let meinBild;
let vol=0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  
  // Zugriff auf das Mikrofon
  mic = new Mic('Start Mic'); //Parameter übergibt Beschriftung des Buttons

  meinBild = loadImage('smileyface.png');

}

function draw() {
  // Mikrofonpegel abrufen
  
    /**
     * User muss mit der Seite interagieren, um Zugriff auf das Mikrofon zu erhalten
     */
    if (mic.started) {
      /**
       * In jedem Frame wird die aktuelle Lautstärke erfragt 
       * Werte die zurückkommen, gehen von 0 bis 255
       * allenfalls umwandeln
       */
      vol = mic.listenMic();

    }
  
  // Hintergrundfarbe basierend auf Mikrofonpegel anpassen
  // Dieser Code wurde von ChatGPT erstellt und ich habe die Werte angepasst
  let backgroundColor = lerpColor(color(10, 29, 70), color(150, 136, 149), vol/255);
  background(backgroundColor);
  
  noFill();
  stroke(255);
  
  // Größe des Mandala in Bezug auf das Zentrum basierend auf Mikrofonpegel anpassen
  let mandalaSize = map(vol, 0, 255, 1, 5);

  push();
  translate(width / 2, height / 2);
  rotate(angle * 0.2);
  mandala(mandalaSize);
  pop();

  angle = angle + 1;

  // Das Smiley Bild dreht in die entgegengesetzte Richtung des Mandalas
  push();
  translate(width / 2, height / 2);
  rotate(-angle * 1.5);
  image(meinBild, -meinBild.width / 2, -meinBild.height / 2);
  pop();

  angle = angle + 1;
}


function mandala(size) {
  for (let i = 0; i < 36; i = i + 1) {
    push();
    rotate(i * 10);
    stroke(238, 219, 173);
    ellipse(100 * size, 0, 200, 200);
    stroke(74, 130, 143);
    ellipse(150 * size, 0, 100, 100);
    pop();

    
    push();
    rotate(i * 10);
    rotate(-angle/3);
    fill (230, 168, 108);
    noStroke();
    ellipse (225 * size, 0, 20, 20);
    stroke (230, 168, 108);
    strokeWeight (0.5)
    rotate(-angle/8);
    line (20*size,200,650, 100)    
    pop();

  }
  for (let i = 0; i < 72; i = i + 1) {
    push();
    rotate(i * 5);
    if (i % 1 === 0) {
          }
    strokeWeight(2);
    stroke(215, 86, 45);
    ellipse(300 * size, 0, 100, 15);
    pop();
    
  }
}
