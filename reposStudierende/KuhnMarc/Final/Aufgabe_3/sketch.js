let font;
let anzahl;
let fontGroesse=200;
let lineHeight= fontGroesse *0.4;
let skalieren=1;
let Name= "nord korea";
let NName="";
let skalierungsfaktor =1;
function preload() {
  font = loadFont("libraries/anon-Black.otf");
}

function setup() {
  createCanvas(800, 800);
  textFont(font);
  fill(255);
  textAlign(LEFT);
  strokeWeight(5);
  textSize(fontGroesse);
  textAlign(CENTER);
  anzahl=height/fontGroesse;
  noLoop();
}

function draw() {
  background(0);
  drawFont();
}

function drawFont() {

  let h=0;
  while(h<height) {
    let y=map(h,0,height,1,0);
    let s=easeInQuart(y);
  push();
  translate(width/2,h+lineHeight*1/skalierungsfaktor);
  scale(1/skalierungsfaktor,1/skalierungsfaktor);
  text(NName, 0, 0);
  pop();
  
  h=h+1+lineHeight*s;
  NName=NName+"nord korea";
  console.log(NName)
  skalierungsfaktor = skalierungsfaktor +1;
  


}
}

function easeInQuart(x) {
  return x * x * x * x;
  
  }