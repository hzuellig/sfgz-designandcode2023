let angle=0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
}

function draw() {
  background(0, 10);
  stroke(255);
  noFill();

  push();
  translate(width / 2, height / 2);
  //rotate(angle);
  ellipse(width / 4, 0, width / 2);
  push()
  pop();


  push();
  translate(width / 4*3, height / 2);
  rotate(angle);
  ellipse(width / 8 * 3, 0 / 2, width / 4);
  pop();

  /*push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(width / 4, 0 / 2, width / 2);
  pop();


  push();
  translate(width / 2, height / 2);
  rotate(-angle);
  ellipse(width / 8 * 3, 0 / 2, width / 4);
  pop();*/

  angle = angle + 1;
}
