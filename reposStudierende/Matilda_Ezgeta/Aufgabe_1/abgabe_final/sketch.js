//function für Bildexport
function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}

//Rotation
let angle=0;

// bild einbetten
let img;
let img2;

function preload() {
  img = loadImage('images/gold100.png');
  img2 = loadImage('images/rahmen2.png')
}






function setup() {
  createCanvas(600, 600);

  angleMode(DEGREES);
//noLoop();
}



function draw() {
  background(0);
  noFill();
  stroke(255);

  push();
  translate(width/2, height/2);
  pop();

  push();
  //setzt Nullkoordinaten in Mitte
  translate(width / 2, height / 2);
  rotate(angle);
  mandala();
  pop();

    // ANFANG BILDER
push();
image(img, 300 - 50, 300-50,);
image(img2,0,0,);
pop();
// ENDE BILDER

angle = angle + 1;



 
}

//zeichnet mein Mandala in statisch

function mandala(){
 //schleife: (anfangswert, endwert, veränderungswert/update)
 for (let i = 0; i < 36; i = i +1) {

  // Zeichnen
 
  push();
  
  //rotate (i*Gradangabe)
  rotate(i*12);
  //grid();
  ellipse(width/4, 0, width/2);

  ellipse(width/2, 0, width/1);

  ellipse(width/8, 0, width/4);

  pop();

 }

 


}




