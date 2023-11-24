let fontGroesse=144;
let lineHeight = fontGroesse * 0.4;
let zeilen;
let Wort = "ZUERICH";
let skalierungfaktor = 1;

function preload() {
  font = loadFont("assets/Teko-Bold.ttf")
}
function setup() {
  createCanvas(500, 600);
  background(0);
  fill(255);
  textFont(font);
  textSize(fontGroesse);
  textAlign(LEFT);
  zeilen=height/lineHeight;
  noLoop();
}
function draw() {
   drawText();
   drawText2();
}
function drawText(){
  let h=0;
  while(h<height){
    let y=map(h,0,height,1,0);
    push();
    translate(15, h);
    scale(1/skalierungfaktor, 1/skalierungfaktor);
    text(Wort,0,0);
    pop();
    Wort = Wort+"ZUERICH";
    h=h+3+lineHeight*1/skalierungfaktor;
    skalierungfaktor = skalierungfaktor+1;
    }
}


/**
 * [...]
 
 * @coauthor Roman Marty, Patrick Stöckli, Roger Tschümperlin
 * 
 */