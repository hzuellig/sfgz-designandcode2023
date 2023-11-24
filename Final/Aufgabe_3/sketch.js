let f;
let fontGroesse=160;
let lineHeight = fontGroesse * 0.45;
let zeilen;
let skaliere=1;
let Wort = "PATRICK";
let skalierungfaktor =1;
function preload() {
  font = loadFont("Font/Bodoni Ornaments.ttf") // hier musst du deinen Font einbinden, damit das so funktioniert musst du in deinem Aufgabeordner eien Ordner Namens Font erstellen.
}
function setup() {
  createCanvas(500, 600);
  background(255,255,255);
  textFont(font);
  textSize(fontGroesse);
  textAlign(LEFT);
  zeilen=height/lineHeight;
  noLoop();
}
function draw() {
   drawText();
}
function drawText(){
  let h=0;
  while(h<height){
    let y=map(h,0,height,1,0);
    //let s=easeInSine(y);
    push();
    translate(15, h);
    scale(1/skalierungfaktor, 1/skalierungfaktor);
    text(Wort,0,0);
    pop();
    Wort = Wort+"PATRICK";
    h=h+3+lineHeight*1/skalierungfaktor;
    //skaliere-=0.05;
    skalierungfaktor = skalierungfaktor+1;
    }
}
// im Team mit Roger,Roman und Tobias erstellt