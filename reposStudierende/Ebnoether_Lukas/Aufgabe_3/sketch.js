let font;
let anzahl;
let fontGroesse = 136;
let LineHeight = fontGroesse * 0.12;


function preload() {
  font = loadFont("Assets/RepBd___.otf")
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  textFont(font);
  textSize(fontGroesse);
  textAlign(CENTER);
  angleMode(DEGREES);
  anzahl = height / LineHeight;

  noLoop();
}


function draw() {
  background(240);

  push();
  translate(width / 2, 94);
  text("BONJOUR", 0, 0);
  pop();



  drawWord1();
  drawWord2();


}


function drawWord1() {
  let h = 0;
  stroke(0, 80);
  strokeWeight(0.5);
  noFill();

  while (h < height / 2) {
    let y = map(h, 0, height, 1, 0);
    let s = easeInQuint(y);

    push();
    translate(width / 2, h);
    scale(1, s);
    text("BONJOUR", 0, 94);
    pop();
    h = h + 1 + LineHeight * s;

  }

}

function drawWord2() {
  let h2 = height;
  stroke(0, 80);
  strokeWeight(0.5);
  noFill();
  push();
  translate(0, -100);
  while (h2 > height / 2) {
    let y2 = map(h2, height, height / 2, 1, 0);
    let s = easeInQuint(y2);

    push();
    translate(width / 2, h2);
    scale(1, s);
    rotate(180);
    push();
    text("BONJOUR", 0, 0);
    pop();

    pop();
    h2 = h2 - 2 - LineHeight * s;
  }
  pop()
}


function easeInQuint(x) {
  return x * x * x * x * x;
}

function easeInExpo(x) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 8);
}