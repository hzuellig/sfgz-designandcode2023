function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  //Beginn Zeichnen
  //Studiere mal den Code ab hier. Welche Blöcke wiederholen sich?
  //Welche Werte verändern sich?
  for(let i = 0; i <= 36; i++){
    push();
    translate(width / 2, height / 2);
    rotate(i * 10);
    //grid();
    ellipse(100, 0, 200, 200);
    ellipse(150, 0, 100, 100);
    pop();
  
  }


  /*
  < kleiner als
  > grösser als
  == gleich
  >= grösser gleich
  <= kleiner gleich
  
  */
}
