let angle = 0;
let rectSizeSlider;
let ellipseSizeSlider;
let smallEllipseSizeSlider;
let smallRectColorSlider;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  // slider der formen
  rectSizeSlider = createSlider(50, 300, 200);
  rectSizeSlider.position(10, 10);
  rectSizeSlider.style('width', '80px');

  ellipseSizeSlider = createSlider(20, 150, 100);
  ellipseSizeSlider.position(10, 50);
  ellipseSizeSlider.style('width', '80px');

  smallEllipseSizeSlider = createSlider(10, 100, 50);
  smallEllipseSizeSlider.position(10, 90);
  smallEllipseSizeSlider.style('width', '80px');

  // slider für rechteck
  smallRectColorSlider = createSlider(0, 255, 128);
  smallRectColorSlider.position(10, 130);
  smallRectColorSlider.style('width', '80px');
}

function draw() {
  background(0, 0, 0, 10);
  noFill();
  stroke(255);
  rectMode(CENTER);

  push();
  translate(width / 2, height / 2);
  rotate(angle);

  // Slider werte
  let rectSize = rectSizeSlider.value();
  let ellipseSize = ellipseSizeSlider.value();
  let smallEllipseSize = smallEllipseSizeSlider.value();
  let smallRectColor = smallRectColorSlider.value();

  // Ellipse und rectangle
  rect(0, 0, rectSize, rectSize);
  ellipse(rectSize / 2, 0, ellipseSize, ellipseSize);

  
  fill(smallRectColor);
  rect(25, 0, smallEllipseSize, smallEllipseSize);

  pop();

  push();
  translate(width / 2, height / 2);
  rotate(-angle * 2);


  fill(smallRectColor);
  rect(0, 200, 10, 10);

  pop();

  // rotation
  angle = angle + 1;
}
