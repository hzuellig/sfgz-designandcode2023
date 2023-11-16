let Mikrofon;
let micLevel;

let r1 = 0;
let r2 = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  Mikrofon = new Mic('Start Mic');
}

function draw() {
stroke (0);
background(230);
noFill();

  if (Mikrofon.started) {
    micLevel = Mikrofon.listenMic();

    r1 = micLevel*20;
    r2 = micLevel*10;
  }

  for (let i = 0; i < 72; i = i + 1) {
    push();
    translate(mouseX, mouseY);
    rotate(i * 5);
    stroke(0);
    ellipse(100, 0, r1, r1);
    ellipse(150, 0, r2, r2);
    pop();
  }
  fill(255, 0, 0);
  ellipse (mouseX, mouseY, 20, 20);

}
