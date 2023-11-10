function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  fill(0);

  rectMode(CORNER);
  rect(100,100,100,200);
  
  push();
  translate(150,200);
  rotate(-30);

  rectMode(CENTER);
  fill(255,0,0);
  rect(0,0,100,200);

  fill(0,0,255);
  ellipse(0,0,10,10)

  pop();

  fill(0,0,255,100);
  rectMode(CORNER);
  rect(100,100,100,200);
}  