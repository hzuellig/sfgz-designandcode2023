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
  if (Mikrofon.started) {
    micLevel = Mikrofon.listenMic();

      background(0);
      stroke(255);
  
  
    noFill();
    r1 = micLevel * 20;
    r2 = micLevel * 10;

    for (let i = 0; i < 72; i++) {
      push();
      translate(mouseX, mouseY);
      rotate(i * 5);
      ellipse(100, 0, r1, r1);
      ellipse(150, 0, r2, r2);
      pop();
    }
  }
}
