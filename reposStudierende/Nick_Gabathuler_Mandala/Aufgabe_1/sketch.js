let r1=200;
let r2=100;
let angle=0;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
 // noLoop();
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  
 


  for (let i = 0; i < 36; i=i+1) {
    console.log(i);
    push();
    translate(width / 2, height / 2);
    rotate(i * 10); 
    rotate(angle);
    ellipse(100, 0, r1, r1);
    stroke(120,30,188);
    ellipse(100, 0, 100, 200);
    
    stroke(255);
    ellipse(150, 0, 100, 100);
    rect(100,100,r2,r2);
    rect(150,150,100,100);
    stroke(120,130,88);
    rect(50,50,r1,r1);
    pop();
  }
  //push();
  //translate(width / 2, height / 2);
  //rotate(angle);
  //rect(150,150,100,100);
  //pop();

  angle = angle + 1;
  r1=r1+1;
r2=r2-1;

if(r1 > width){
  r1=200;
}
if(r2<1){
  r2=100;
}
}



