let radius = 150;
let nPoints = 60;
let elemente = 175;
let drehWinkel = 360/elemente;
let angle = 0;

let xOff = 0;
let yOff = 0;
let xInc = 0.03;
let yInc = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  frameRate(12);
}

function draw() {
  
  background(5, 4, 20, 50);
  for(let i = 0; i < elemente; i++){
    push();
    translate(width/2, height/2);
    rotate(drehWinkel * i);
    let length = noise(xOff)*200;
    rect(0,0,length, 2);
    pop();
    xOff = xOff + xInc;
    yOff = yOff + yInc;
  }
  drawCircle();
  stroke(255);
  fill(255);
  radius = radius + random(-25,25);
  if(radius > 500){
    radius = radius + random(-35,10);
  }
  while(radius < 20){
    radius = radius + random(-10,35);
  }

  background(0,0,0,10);

  noFill();
  stroke(255,255,255,50);

  push();
  
  rotate(angle);
  ellipse(150, 0,300,300);
  ellipse(250,0, 100, 100);

  push();
  rotate(angle);
  ellipse(50,50,100,100);
  pop();
  pop();
  angle++;

  
}

function drawCircle() {
  stroke(255);
  noFill();
  console.log(mouseX);
  if(mouseX>0){
    translate(mouseX, mouseY);
  }
  else{
    translate(width/2,height/2);
  }
  beginShape();
  let startx=0;
  let starty=0;
  let x = cos(nPoints * 6) * (radius + random(1,30));
  let y = sin(nPoints * 6) * (radius + random(1,30));
  curveVertex(x, y);
  for (let i = 0; i <= nPoints; i++) {
    let x = cos(i * 6) * (radius + random(1,30));
    let y = sin(i * 6) * (radius + random(1,30));
    if(i==0){
      startx=x;
      starty=y;
    }

    curveVertex(x, y);
  }
  curveVertex(startx, starty);
  
  endShape();

  fill(255,0,0);
}
