let font;
let anzahl;
let fontGroesse = 180;
let lineHight = fontGroesse * 0.03;
let skaliere = 1;

let noiseS = 0;
let noiseW = 0;
let noiseI = 0;
let noiseR = 0;
let noiseL = 0;

function preload() {
  font = loadFont("FordAntenna Black.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  textFont(font);
  textSize(fontGroesse);
  textAlign(CENTER);
  anzahl = height / lineHight;

  //noLoop();
}

function draw() {

  background(0);

  drawFont();

  push();
  fill(255);
  text("SWIRL", width / 2, fontGroesse);
  pop();

  noiseS = noiseS + 0.02;
  noiseW = noiseW + 0.04;
  noiseI = noiseI + 0.06;
  noiseR = noiseR + 0.04;
  noiseL = noiseL + 0.02;

}


function drawFont() {

  // S

  let h = 0;
  while (h < height) {

    let x = map(h, 0, width, 0, 1);
    let s = easeInOutQuad2(x); // scale auf y-richtung auf die easing funktion setzen
    let t = map(h, 255, 0, 170, 255);

    push();
    translate(width / 2 + width / 2 * s, h + fontGroesse);
    noFill();
    stroke(240, 100, 240, t);
    strokeWeight(0.5);
    //noise verschiebung
    /*push();
    translate(nx,ny);*/
    text("S", -256, 0);
    //pop();
    pop();

    h = h + 1 + lineHight;
  }

  // W

  let h2 = 0;
  while (h2 < height) {

    let x = map(h2, 0, width, 0, 1);
    let s = easeInOutQuad(x); // scale auf y-richtung auf die easing funktion setzen
    let t = map(h2, 255, 0, 170, 255);

    push();
    translate(width / 2 + width / 2 * s, h2 + fontGroesse);
    noFill();
    stroke(120, 80, 240, t);
    strokeWeight(0.5);
    text("W", -90, 0);
    pop();

    h2 = h2 + 1 + lineHight;
  }

  // I 

  let h3 = 0;
  while (h3 < height) {

    let x = map(h3, 0, width, 0, 1);
    let s = easeInOutQuad5(x); // scale auf y-richtung auf die easing funktion setzen
    let t = map(h3, 255, 0, 150, 230);

    push();
    translate(width / 2 + width / 2 * s, h3 + fontGroesse);
    noFill();
    stroke(60, 60, 240, t);
    strokeWeight(0.5);
    text("I", 40, 0);
    pop();

    h3 = h3 + 1 + lineHight;
  }


  // R

  let h4 = 0;
  while (h4 < height) {

    let x = map(h4, 0, width, 0, 1);
    let s = easeInOutQuad3(x); // scale auf y-richtung auf die easing funktion setzen
    let t = map(h4, 255, 0, 170, 255);

    push();
    translate(width / 2 + width / 2 * s, h4 + fontGroesse);
    noFill();
    stroke(120, 80, 240, t);
    strokeWeight(0.5);
    text("R", 145, 0);
    pop();

    h4 = h4 + 1 + lineHight;
  }

  // L

  let h5 = 0;
  while (h5 < height) {

    let x = map(h5, 0, width, 0, 1);
    let s = easeInOutQuad4(x); // scale auf y-richtung auf die easing funktion setzen
    let t = map(h5, 255, 0, 170, 255);

    push();
    translate(width / 2 + width / 2 * s, h5 + fontGroesse);
    noFill();
    stroke(240, 100, 240, t);
    strokeWeight(0.5);
    text("L", 274, 0);
    pop();

    h5 = h5 + 1 + lineHight;
  }
}


// Mathfunction von Kurve aus https://easings.net/

// S

function easeInOutQuad2(x) {

  const scaleFactor = 1.2 * noise(noiseS);

  return x < 0.5 ? scaleFactor * 2 * x * x : scaleFactor * (1 - Math.pow(-2 * x + 2, 2) / 2);

}

// W
function easeInOutQuad(x) {

  const scaleFactor = 0.5 * noise(noiseW);

  return x < 0.5 ? scaleFactor * 2 * x * x : scaleFactor * (1 - Math.pow(-2 * x + 2, 2) / 2);

}

// I

function easeInOutQuad5(x) {

  const scaleFactor = -0.1 * noise(noiseI);

  return x < 0.5 ? scaleFactor * 2 * x * x : scaleFactor * (1 - Math.pow(-2 * x + 2, 2) / 2);

}

//R
function easeInOutQuad3(x) {

  const scaleFactor = -0.5 * noise(noiseR);

  return x < 0.5 ? scaleFactor * 2 * x * x : scaleFactor * (1 - Math.pow(-2 * x + 2, 2) / 2);

}

// L
function easeInOutQuad4(x) {

  const scaleFactor = -1.2 * noise(noiseL);

  return x < 0.5 ? scaleFactor * 2 * x * x : scaleFactor * (1 - Math.pow(-2 * x + 2, 2) / 2);

}






// easing-functions beispiele: https://easings.net/