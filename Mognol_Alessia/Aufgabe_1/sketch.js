let angle=0;
let tangle=0;

let Mikrofon;
let micLevel;

let r1=100;
let r2=100;
let r3=100;

let isMouseMoved = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  Mikrofon = new Mic('Start Mic'); //Parameter übergibt Beschriftung des Buttons
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  if (Mikrofon.started) {
    /**
    * In jedem Frame wird die aktuelle Lautstärke erfragt 
    * Werte die zurückkommen, gehen von 0 bis 255
    * allenfalls umwandeln
    */
    micLevel = Mikrofon.listenMic();
  
    r1=micLevel;
    r2=micLevel*5;
    r3=micLevel*10;
  }


  // 6 statische Kreise
  for(let a = 100; a < 400; a = a + 50) {
    stroke(255, 255, 255, 50*r1);
    strokeWeight(1);
    noFill();
    ellipse(0, 0, a);
  }

  // 3 Arcs die sich im Uhrzeigersinn drehen
  for (let b = 0; b < 36; b = b+1) {
    push();
    stroke(255);
    strokeWeight(4);
    noFill();
    rotate(b+angle);
    arc(0, 0, 100, 100, 300, 90);
    arc(0, 0, 200, 200, 250, 50);
    arc(0, 0, 300, 300, 70, 160);
    pop();
  }

  // 3 Arcs die sich im Uhrzeigersinn drehen
  for (let c = 0; c < 36; c = c+1) {
    push();
    stroke(255);
    strokeWeight(4);
    noFill();
    rotate(c+tangle);
    arc(0, 0, 150, 150, 30, 200);
    arc(0, 0, 250, 250, 170,330);
    arc(0, 0, 350, 350, 200, 30);
    pop();
  }

  for (let d = 0; d < 36; d = d+3){
    push();
    stroke(255);
    strokeWeight(1)
    noFill();
    rotate(d*10);
    line(200, 0, 350, 0);
    pop();

    push();
    stroke(255);
    strokeWeight(1)
    noFill();
    rotate(d*10+10);
    line(200, 0, 210, 0);
    line(220, 0, 230, 0);
    line(240, 0, 250, 0);
    line(260, 0, 270, 0);
    pop();
  }


  
  angle=angle+1;
  tangle=tangle-1;
}

function mouseDragged(){  
  isMouseMoved = true;
  noLoop(); // Stop the draw loop
  //(distanz, altes min., altes max., neues min., neues max.)
  let f=map(mouseX, 0, innerWidth, 0, 255);
  let g=map(mouseY, 0, innerHeight, 0, 255);
  //background(0);
  for (let e = 0; e < 36; e = e+3){

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(2);
    point(200,0);
    pop();

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(3);
    point(220,0);
    pop();

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(4);
    point(240,0);
    pop();

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(5);
    point(260,0);
    pop();

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(6);
    point(280,0);
    pop();

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(7);
    point(300,0);
    pop();

    push();
    stroke(f, g, 180);
    noFill();
    rotate(e*10+20);
    strokeWeight(8);
    point(320,0);
    pop();
  }

}

function mouseReleased() {
  isMouseMoved = false;
  loop(); // Resume the draw loop
}