//function für Bildexport
function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}



// bild einbetten
let img;
let img2;

function preload() {
  img = loadImage('images/bild_huegel.png');
  img2 = loadImage('images/bild_mond.png');
}

let r1=200;

let angle=0;
let angle2=0;
let angle3=0;
let angle4=0;
let angle5=0;

let Mikrofon;
let micLevel;

let r2=100;
let r3=100;


function setup() {
  createCanvas(800, 900);
  angleMode(DEGREES);

  /**
  * Im setup einmalig Zugriff auf das Mikrofons
  */
  Mikrofon = new Mic('Start Mic'); //Parameter übergibt Beschriftung des Buttons


}



function draw() {
  //background(255/r3, 0, 0,);
  background(0, 0, 0,);
  noFill();


 // ANFANG MIKROFON

  /**
  * User muss mit der Seite interagieren, um Zugriff auf das Mikrofon zu erhalten
  */
  if (Mikrofon.started) {
    /**
    * In jedem Frame wird die aktuelle Lautstärke erfragt 
    * Werte die zurückkommen, gehen von 0 bis 253, 244, 220
    * allenfalls umwandeln
    */
    micLevel = Mikrofon.listenMic();
  
    r2=micLevel;
    r3=micLevel;

    }

// ENDE MIKROFON
 
// ANFANG SCHLEIFE MUSTER GROESSTER KREIS

for (let i = 0; i < 200; i = i + 1) {

  console.log(i);
  push();
  
  translate(width / 2, height / 2);
  rotate(i*4);

  strokeWeight(6);
  stroke(185, 185, 185);

  rotate(angle4+10);
  ellipse(-80, 110, 0, 1000);

  pop();
}

// ENDE SCHLEIFE MUSTER GROESSTER KREIS

  // ANFANG KREIS SCHWARZ HINTER AEUSSERSTEM KREIS
  push();
 
  translate(width / 2, height / 2);
  noStroke();
  fill(0, 0, 0);
  ellipse(0, 0, 800, 800);

  pop();

  // ENDE KREIS SCHWARZ HINTER AEUSSERSTEM KREIS


// ANFANG SCHLEIFE MUSTER GROESSTER KREIS

for (let i = 0; i < 200; i = i + 1) {

  console.log(i);
  push();
  
  translate(width / 2, height / 2);
  rotate(i*4);

  strokeWeight(5);
  stroke(205, 205, 205);

  rotate(angle3+10);
  ellipse(100, 110, 0, 550);

  pop();
}

// ENDE SCHLEIFE MUSTER GROESSTER KREIS


  // ANFANG KREIS SCHWARZ HINTER MITTLEREM KREIS
  push();
 
  translate(width / 2, height / 2);
  noStroke();
  fill(0, 0, 0);
  ellipse(0, 0, 535, 530);

  pop();

  // ENDE KREIS SCHWARZ HINTER MITTLEREM KREIS


// ANFANG SCHLEIFE MUSTER MITTLERER KREIS

for (let i = 0; i < 100; i = i + 1) {

  console.log(i);
  push();
  
  translate(width / 2, height / 2);
  rotate(i*5);

  strokeWeight(4);
  stroke(225, 225, 225);

  rotate(angle2+10);
  ellipse(-100, 110, 0, 270);

  pop();
}

// ENDE SCHLEIFE MUSTER MITTLERER KREIS



// ANFANG KREIS SCHWARZ HINTER KLEINSTEM KREIS
  push();
 
  translate(width / 2, height / 2);
  noStroke();
  fill(0, 0, 0);
  ellipse(0, 0, 300, 300);

  pop();

  // ENDE KREIS SCHWARZ HINTER KLEINSTEM KREIS




// ANFANG SCHLEIFE MUSTER KLEINSTER KREIS

for (let i = 0; i < 100; i = i + 1) {

  console.log(i);
  push();
  
  translate(width / 2, height / 2);
  rotate(i*5);

  strokeWeight(3);
  stroke(245, 245, 245);

  rotate(angle-10);
  ellipse(50, 110, 0, 65);

  pop();
}

// ENDE SCHLEIFE MUSTER KLEINSTER KREIS



angle = angle - 1.5;
angle2 = angle2 + 1;
angle3 = angle3 - 0.7;
angle4 = angle4 + 0.4;
angle5 = angle5 + 0.1 ;




// ANFANG BILDER
push();
  image(img, 0, 100, width, height, 0, 0, img.width, img.height, CONTAIN);
  
  translate(width / 2, height / 2);

  rotate(angle5*r3);
  //(source, X, Y, Width, Height, 
  image(img2, -100, -100, 200, 200, 0, 0, img2.width, img2.height, CONTAIN);
pop();
// ENDE BILDER






// ANFANG ROTER KREIS UEBER MOND

push();
 
  translate(width / 2, height / 2);
  noStroke();
  fill(255, 0, 0, r2*1.8);
  ellipse(0, 0, 191, 191,);

pop();

// ENDE ROTER KREIS UEBER MOND




  
}