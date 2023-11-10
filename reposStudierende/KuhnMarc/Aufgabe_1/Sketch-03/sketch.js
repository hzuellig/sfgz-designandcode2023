let slider;
let slider2;
let slider3;
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');

  slider2 = createSlider(50, 200, 100);
  slider2.position(10, 50);
  slider2.style('width', '80px');

  slider3 = createSlider(50, 300, 100);
  slider3.position(10, 90);
  slider3.style('width', '80px');
}

function draw() {
  background(255);
  let val = slider.value();
  fill(val);
  let val2 = slider2.value();
  position (300,300,val2,val2);
  let val3 = slider3.value();
  ellipse(300,200,val2,val2);
  ellipse (300,200,100,100);

}


