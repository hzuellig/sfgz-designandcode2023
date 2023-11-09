let r1=200;
let r2=100;

let Mikrofon;
let micLevel=200;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  Mikrofon = new Mic('Start Mic');
 
}

function draw() {
  background(0);
  noFill();
  stroke(255);

     /**
     * User muss mit der Seite interagieren, um Zugriff auf das Mikrofon zu erhalten
     */
     if (Mikrofon.started) {
      /**
       * In jedem Frame wird die aktuelle Lautstärke erfragt 
       * Werte die zurückkommen, gehen von 0 bis 255
       * allenfalls umwandeln
       */
      micLevel = Mikrofon.listenMic();
     }
 

  for (let i = 0; i < 72; i = i + 1) {

    //console.log(i);
    push();
    translate(width / 2, height / 2);
    rotate(i*5);
    //grid();
    stroke(100,micLevel*5,micLevel*10)
    ellipse(100, 0, micLevel*10, micLevel);
    ellipse(150, 0, r2, r2);
    pop();
  }

  //r1=r1+1;
  //r2=r2-1;

  if(r1>width){
    r1=200;
  }

  if(r2<1){
    r2=200;
}
}
