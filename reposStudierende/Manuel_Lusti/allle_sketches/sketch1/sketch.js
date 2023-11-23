function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  noLoop();
  rectMode(CENTER);
}

function draw() {
  //Save coordinates
  push();

  //Background
  background(222);

  //First Rect
  rect(150, 150, 100, 100)
  
  //Shift grid
  translate(150, 150);
  rotate(45);

  //Second rect
  fill(200, 90, 30);
  rect(0, 0, 100, 100);

  //center controll ellipse
  fill(90, 150, 73);
  ellipse(0,0,10, 10);

  //reset grid
  pop();

  //control square
  fill(5, 10, 223, 30);
  rect(150, 150, 150, 150);
}
