let fontGroesse = 160;
let lineHeight = fontGroesse * 0.48;
let Wort = "Manuel";
let font;

function preload() {
  font = loadFont("font/Teko-Bold.ttf"); //Font
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  textFont(font);
  textSize(fontGroesse);
  textAlign(LEFT);
  frameRate(3); 
}

function draw() {
  background(10, 15, 40);
  drawText();
}

function drawText() {
  let h = 0;
  Wort = "Manuel"; 
  while (h - 100 < height) {
    let textW = textWidth(Wort);
    let scaleFact = width / textW;
    let textH = (textAscent() + textDescent()) * scaleFact;

    if (isHovered(h - 100, textH, scaleFact)) {
      fill(random(190, 235), random(110, 180), random(200, 220), 255);
    } else {
      fill(220, 210, 200);
    }

    push();
    translate(0, h - 100);
    scale(scaleFact, scaleFact);
    text(Wort, 0, 0);
    pop();

    Wort += "Manuel";
    h += (3 + lineHeight) * scaleFact;
  }
}

function isHovered(yPos, textH, scaleFact) {
  return mouseY +100 >= yPos && mouseY <= yPos + textH;
}

function mouseMoved() {
  redraw(); // Redraw on mouse movement for hover effect
}
