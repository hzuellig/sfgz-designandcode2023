// Dieser Code entstand im Zuge einer Gruppenarbeit mit 
// Patrick Stöckli, Roger Tschümperlin und Tobias Kramer

let f;
let fontGroesse=144;
let lineHeight = fontGroesse * 0.4;
let zeilen;
let skaliere=1;
let Wort = "ZUREICH";
let skalierungfaktor =1;
function preload() {
  font = loadFont("libraries/Teko-Bold.ttf")
}
function setup() {
  createCanvas(500, 750);
  background(0,112,180);
  textFont(font);
  fill(255)
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
    translate(15, h+fontGroesse/1.3);
    scale(1/skalierungfaktor, 1/skalierungfaktor);
    text(Wort,0,0);
    pop();

    Wort = Wort+"ZUREICH";
    h=h+3+lineHeight*1/skalierungfaktor;
    
    //skaliere-=0.05;
    skalierungfaktor = skalierungfaktor+1;
    }
}