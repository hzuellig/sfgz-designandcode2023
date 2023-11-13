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



function mandala(){
 //schleife: (anfangswert, endwert, veränderungswert/update)
 for (let i = 0; i < 36; i = i +1) 
}





function setup() {
  createCanvas(600, 600);
  background(0);
  stroke(255)
  angleMode(DEGREES);
  noLoop();
}


function draw() {

  
  noFill();
  push();
  translate(width/2, height/2);
  pop();

  //schleife: (anfangswert, endwert, veränderungswert/update)
 for (let i = 0; i < 36; i = i +1) {
  push();
    // Mittelpunkt in Mitte setzten (muss in Schleife und zwichen push und pop sein)
    translate(width/2, height/2);
    //console.log = Kontrolle in “Untersuchen”
    console.log(i*10);
    //rotate (i*5)
    rotate(i*10);
    ellipse(width/4, 0, width/2);
    ellipse(width/2, 0, width/1);
    ellipse(width/8, 0, width/4);
    pop();
  }

  /*
  push();
  //rotate(angle);
  translate(width/2, height/2);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +10);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +20);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +30);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +40);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +50);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +60);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +70);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +80);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +90);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +100);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +110);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +120);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +130);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +140);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +150);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +160);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +170);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +180);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +190);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +200);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +210);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +220);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +230);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +240);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +250);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +260);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +270);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +280);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +290);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +310);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +320);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +330);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +340);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +350);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

  push();
  translate(width/2, height/2);
  rotate(angle +360);
  ellipse(width/4, 0, width/2);
  ellipse(width/2, 0, width/1);
  ellipse(width/8, 0, width/4);
  pop();

*/
  


  // ANFANG BILDER
push();
image(img, 300 - 50, 300-50,);
image(img2,0,0,);
pop();
// ENDE BILDER

angle = angle + 1;




  
  //
  /*Koordinatensystem abspeichern*/
  //push();
  /* Koordinatensystem in die Mitte schieben */
  //translate(width/2, height/2);
  //rotate(0)
  //line(0,0,100,0)
  /* Koordinatensystem zurück setzen */
  //pop();
  
  /*Koordinatensystem abspeichern*/
  //push();
  /* Koordinatensystem in die Mitte schieben */
  //translate(width/2, height/2);
  //rotate(5)
  //line(0,0,100,0)
  /* Koordinatensystem zurück setzen */
 // pop();
  
  
  /*Koordinatensystem abspeichern*/
//  push();
  /* Koordinatensystem in die Mitte schieben */
 // translate(width/2, height/2);
 // rotate(10)
 // line(0,0,100,0)
  /* Koordinatensystem zurück setzen */
 // pop();
  
  
  
}