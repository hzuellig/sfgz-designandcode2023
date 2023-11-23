let angle=0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0,0,0,10);

  noFill();
  stroke(255,255,255,50);

  push();
  translate(width/2,height/2);
  
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
