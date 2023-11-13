let rasterbreite;
let anzahlKacheln = 10;

function setup() {
  createCanvas(800, 800);
  rasterbreite = width / anzahlKacheln;
}

function draw() {
  background(255);
  
  fill(255,150,0);
  noStroke();
  
  //Studiert den Code: Was ändert sich und was nicht?
  
  //Zeile 1
 /*ellipse(rasterbreite*0+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
  ellipse(rasterbreite*1+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
  ellipse(rasterbreite*2+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
   ellipse(rasterbreite*3+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
   ellipse(rasterbreite*4+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
   ellipse(rasterbreite*5+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
   ellipse(rasterbreite*6+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
   ellipse(rasterbreite*7+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
   ellipse(rasterbreite*8+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);
  
  ellipse(rasterbreite*9+rasterbreite/2, rasterbreite/2, rasterbreite, rasterbreite);*/
  
  
  /**Syntax Loop */
  
  for(let i=0;i<anzahlKacheln;i++){
    //console.log(i)
    push();
    translate(rasterbreite*i+rasterbreite/2, rasterbreite/2);
    ellipse(0, 0, rasterbreite, rasterbreite);
    pop();
  }
  
 // noLoop();
 
}