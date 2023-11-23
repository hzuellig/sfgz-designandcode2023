let angle=0;
let reverseAngle=0;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
  frameRate(60);
}

function draw() {


	background(0,0,0,5);
	noFill();
	stroke(random(0,255),random(0,255),random(0,255));
    rectMode(CENTER);
    
  
	push();
	translate(width/2,height/2);
	rotate(angle);
	ellipse(192,0,100,100);

  rotate(reverseAngle);
  fill(random(0,255),random(0,255),random(0,255));
  rect(0,0, 200,200);

	pop();



  reverseAngle=reverseAngle-2;
	angle=angle+1;
}