/**
 * [...]
 
 * @author  Lukas Ebnöther
 * @coauthor Hanna Züllig
 * 
 */


let font;
let anzahl;
let fontGroesse = 136;
let LineHeight = fontGroesse * 0.12;


function preload() {
  font = loadFont("Assets/ReplicaTrialTT-Heavy.ttf")
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


function draw() { //3 Wörter definiert
  background(240);

  push();
  translate(width / 2, 100);
  text("BONJOUR", 0, 0);
  pop();



  drawWord1();
  drawWord2();


}


function drawWord1() {
  let h = 0;
  stroke(0, 160);
  strokeWeight(0.5);
  noFill();

  while (h < height / 2) {
    let y = map(h, 0, height, 1, 0);
    let s = easeInQuint(y);

    push();
    translate(width / 2, h);
    scale(1, s);            //Sie wiederholen und skalieren sich, um das "Quetschen" zu erzeugen
    text("BONJOUR", 0, 100);
    pop();
    h = h + 1 + LineHeight * s;

  }

}

function drawWord2() {
  let h2 = height;
  stroke(0, 160);
  strokeWeight(0.7);
  noFill();
  push();
  textSize(143);
  translate(0, -100);
  while (h2 > height / 2) {
    let y2 = map(h2, height, height / 2, 1, 0);
    let s = easeInQuint(y2);

    push();
    translate(width / 2,480);
    scale(1, s);
    rotate(180);
    push();
    text("BONSOIR", 0, -240);
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