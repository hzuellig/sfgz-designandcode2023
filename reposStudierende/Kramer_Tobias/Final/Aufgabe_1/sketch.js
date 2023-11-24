let Mikrofon; //Variable für Mikrofon
let micLevel;

let drawRectangles = false; //Variable für Mausklick-Effekt

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  Mikrofon = new Mic('Start Mic');
}

function draw() {
  if (Mikrofon.started) {
    micLevel = Mikrofon.listenMic();

    //Farbwechsel bei Mausklick; 

    //-> "!"-Bdeutung: Wenn der Wert der Variable "drawRectangles" entspricht nicht "false", zeichne:
    if(!drawRectangles){
      //Kreis
      background(0);
      stroke(255);
      noFill();
    } else {
      //Rechteck
      background(255);
      stroke(0);
      noFill();
    }

    let r1 = micLevel * 20;
    let r2 = micLevel * 10;

    if (!drawRectangles) {
      //Kreis
      for (let i = 0; i < 72; i++) {
        push();
        translate(mouseX, mouseY);
        rotate(i * 5);

        ellipse(100, 0, r1, r1);
        ellipse(150, 0, r2, r2);
        pop();
      }
    } else {
      //Rechteck
      for (let i = 0; i < 72; i++) {
        push();
        translate(mouseX, mouseY);
        rotate(i * 5);

        rect(100 - r1 / 4, -r1 / 4, r1/2, r1/2);
        rect(50 - r2 / 5, -r2 / 4, r2/2, r2/2);
        pop();
      }
    }
  }
}

function mouseClicked() {
  drawRectangles = !drawRectangles; // Umschalten durch Mausklick zwischen Kreis und Rechteck
}


/**
 * [...]
 
 * @coauthor Chat GPT
 * 
 */