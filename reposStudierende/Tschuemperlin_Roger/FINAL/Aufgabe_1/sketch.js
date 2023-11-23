
let r1=200;
let r2=100;
let Mikrofon;
let micLevel;
let Blaetter=160
let angle=1



function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);

      /**
     * Im setup einmalig Zugriff auf das Mikrofon
     */
       Mikrofon = new Mic('Start Mic'); //Parameter übergibt Beschriftung des Buttons
}

function draw() {
  background(139,54,38,100);
  noFill();
  stroke(1);

 
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
    Blaetter=map(micLevel*5,0,255,160,0);

  }

push();
noStroke();
fill(53,125,18,100);
translate(0,400,0);
rectMode(CENTER);
rect(400,400,30,800,20)
pop();

  push();
  translate(width / 2, height / 2);
  rotate(angle/4);
  mandala();
  pop();

angle=angle+1

}

function mandala(){

  for (let i=0;i<36;i=i+1) {
    push();
    //translate(width / 2, height / 2);
    rotate(i*10);
  
    //innere Ellipse gold
    stroke(255,125,0);
    ellipse(100, 0, 200, 200);
  
    //Ellipse grau
    //strokeWeight(1);
    //stroke(238,232,205,150);
    //ellipse(200, 0, 110, 110);
  
    //Ellipse innen
    stroke(0,0,0,50);
    ellipse(20, 0, 300, 300);

    stroke(0,0,0,50);
    ellipse(20, 0, 250, 250);

    //Blumenblaetter aussen
    //stroke(218,165,32)
    noStroke();
    fill(218,165,32,100)
    strokeWeight(4);
    ellipse(250, 0, Blaetter, 70);
  
    pop();
  }

  r1=r1+1;
  r2=r2-0.245;

  if(r1>600){
    r1=200;
  }
  

  if(r2<1){
      r2=100;
  }

}
