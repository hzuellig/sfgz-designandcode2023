//define stuff
let repeater = 12; 
let angle = 360 / repeater;

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  frameRate(120);
  background(5, 4, 20, 255);
  stroke(148, 137, 78);

  //for resetting
  let button = select('#reseter');
  button.mousePressed(clearCanvas);
}

function draw() {
  translate(width / 2, height / 2);

  //check mousepreessed
  if (mouseIsPressed) {
    let mx = mouseX - innerWidth / 2;
    let my = mouseY - innerHeight / 2;
    let pmx = pmouseX - innerWidth / 2;
    let pmy = pmouseY - innerHeight / 2;

    //check mouse taste
    if (mouseButton === LEFT) {
      for (let i = 0; i < repeater; i++) {
        rotate(angle);
        //calc stroke width
        let distance = dist(mx, my, pmx, pmy);
        let strWidth = map(distance, 0, 100, 4, 2);
        strokeWeight(strWidth);
        //draw line
        line(mx, my, pmx, pmy);
        //mirror
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}

//resetting
function clearCanvas() {
  background(5, 4, 20, 255);
}

function keyPressed() {
  // if you wnt to save the mandela
  if (key == 's' || key == 'S') {
    saveCanvas('mandela', 'png');
  }
}

//resize window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
