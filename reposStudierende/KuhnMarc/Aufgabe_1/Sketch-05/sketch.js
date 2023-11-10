function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  //Beginn Zeichnen
  //Studiere mal den Code ab hier. Welche Blöcke wiederholen sich?
  //Welche Werte verändern sich?
  for (let i = 0; i < 36; i = i + 1) {

    console.log(i);
    push();
    translate(width / 2, height / 2);
    rotate(i * 10);
    //grid();
    ellipse(100, 0, 200, 200);
    stroke(255,0,0)
    ellipse(150, 0, 100, 100);
    rect(150, 0, 100, 100);
    stroke(150, 100, 255)
    rect(250, 0, 50, 50);
    rotate();
    pop();
  }s


  /*
  < kleiner als
  > grösser als
  == gleich
  >= grösser gleich
  <= kleiner gleich
  
  */
}
