let font;
let anzahl;
let fontGroesse=150;
let lineHeight = fontGroesse * 0.55;
let skaliere=1;
let textausgabe="MORISAWA";

function preload(){
  font=loadFont("assets/GT-Ultra-Ultra-Trial-VF.ttf")
}


function setup() {
  createCanvas(windowHeight, windowHeight);
  textFont(font);
  textSize(fontGroesse);
  textAlign(CENTER);
  anzahl=height/lineHeight;
}

function draw() {
  background(255);

 
  drawMaeda();
  //noLoop();
}


function drawMaeda(){
  

  push();
  translate(0, fontGroesse*0.7);
  let h=0;
  while(h<height){
    let y=map(h,0,height,1,0);
    let s=easeInQuart(y) + sin(frameCount/100);
    push();
    
    translate(width/2,h);
    scale(s, s);
    text(textausgabe,0, 0);
    pop();
    h=h+1+lineHeight*s;
    textausgabe=textausgabe+"MORISAWA";
  }
  pop();
}


function easeInQuart(x){
  return x * x ;
  
  }