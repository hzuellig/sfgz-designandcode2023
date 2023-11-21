function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let y=0;

  stroke(255);

  while(y<height){

    let yy=map(y,0,height,0,1);
    let x=easeOutQuint(yy)*width;
    ellipse(x, y, 5,5);
    line(x,y,width,y);
    y=y+10;
  }

}

function easeOutQuint(y) {
  return 1 - Math.pow(1 - y, 5);
  
}