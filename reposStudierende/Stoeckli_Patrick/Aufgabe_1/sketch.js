let colorPicker;
let r1 = 200;
let r2 = 100;
let angle = 0;

function setup() {
  colorPicker = createColorPicker('#ffffff');
  colorPicker.position(10, 10);
  createCanvas(windowHeight, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0, 10);
  noFill();
  stroke(colorPicker.color());

  for (let i = 0; i < 72; i = i + 1) {
    push();
    translate(width / 2, height / 2);
    rotate(i * 5);
    //grid();
    ellipse(100, 0, r1, r2);
    stroke(255);
    ellipse(150, 0, r2, r2 * 0.75);
    stroke(colorPicker.color());
    triangle(150, r1, 150, r1 + 100, 150, r1 + 150);
    pop();
  }

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  ellipse(width / 4, 0, width / 2);
  push();
  translate(width / 4, 0);
  rotate(angle * 2);
  ellipse(width / 8 * 1, 0, width / 4);
  pop();

  push();
  translate(width / 4, 0);
  rotate(angle * 3);
  ellipse(width / 16 * 1, 0, width / 8);
  pop();

  push();
  translate(width / 4, 0);
  rotate(angle * 4);
  ellipse(width / 32 * 1, 0, width / 16);
  pop();

  push();
  translate(width / 16, height / 4);
  rotate(angle);
  ellipse(width / 4, 0, width / 16);
  pop();

  angle = angle + 1;
}
