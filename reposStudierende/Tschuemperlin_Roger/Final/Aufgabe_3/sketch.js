let f;
let fontGroesse=133;
let lineHeight = fontGroesse * 0.3;
let zeilen;
let skaliere=1;
let Wort = "GANDALF";
let skalierungfaktor =1;


function preload() {
  font = loadFont("assets/Teko-Bold.ttf")
}
function setup() {
  createCanvas(500, 600);
  background(115,0,0);
  fill(242,162,48)
  textFont(font);
  textSize(fontGroesse);
  textAlign(LEFT);
  zeilen=height/lineHeight;
  noLoop();
}
function draw() {
   drawText();
   drawText2();
   drawText3();


}
function drawText(){
  let h=0;
  while(h<height){
    let y=map(h,0,height,1,0);
    push();
    translate(15, h+fontGroesse/1.2);
    scale(1/skalierungfaktor, 1/skalierungfaktor);
    text(Wort,0,0);
    pop()

    
    Wort = Wort+"GANDALF";
    h=h+3+lineHeight*1/skalierungfaktor;
    skalierungfaktor = skalierungfaktor+1;
    }

  
}

function drawText2(){
  push();
  textAlign(CENTER);
  textSize(fontGroesse/1.3)
  translate(width/2,height/1.3);
  fill(115,0,0)
  text("THE GREY",0,0);
  pop();
}

function drawText3(){
  push();
  textAlign(CENTER);
  textSize(fontGroesse/3);
  translate(width/2,height/1.2);
  fill(242,162,48,150);
  text("WINTER 2023",0,0);
  pop();
}