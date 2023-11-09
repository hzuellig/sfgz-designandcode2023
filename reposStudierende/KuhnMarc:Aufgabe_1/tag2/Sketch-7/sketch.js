let elemente = 200;
let drehwinkel=360/elemente;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(0);
  noStroke();
  for(let i=0;i<elemente;i++){
    push();
    translate(width/2, height/2);
    rotate(i*drehwinkel);
    let laenge=random(0,300);
    rect(0,0,laenge,2);
    pop();
  }
}
