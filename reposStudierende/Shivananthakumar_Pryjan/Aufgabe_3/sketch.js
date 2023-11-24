let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
}

function draw() {
  background(255);

  fill(0);
  noStroke();
  t += 0.001;
  let angle = t;

  let length = 400; // Anzahl der Buchstaben

  for (let i = 0; i < length; i++) {
    let displacement = angle * i;

    let y = map(sin(displacement), -1, 1, 200, height - 200);
    let x = map(i, 0, length - 1, 20, width - 20);
    let size = map(y, 200, height - 200, 32, 10);

    textSize(size);

    if (x > 0 && x < width && y > 0 && y < height) {
      text(String.fromCharCode(65 + i % 26), x, y);
    }
  }
}
