let angle = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();

  for (let i = 0; i < 12; i++) {
    let x = cos(angle + i * TWO_PI / 12) * 50;
    let y = sin(angle + i * TWO_PI / 12) * 50;

    stroke(random(255), random(255), random(255));

    let size = 20 + 10 * sin(frameCount + i * PI / 6);
    ellipse(x, y, size, size);
  }

  let outerSize = 200 + 30 * sin(frameCount * 0.1);
  stroke(255, 100, 100); 
  ellipse(0, 0, outerSize, outerSize);

  angle += radians(1);

}