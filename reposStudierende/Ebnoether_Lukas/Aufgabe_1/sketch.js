let angle = 0;
let ecken = 6;
let radius1 = 0;
let radius2 = 0;
let radius3 = 0;
let radius4 = 0;
let radius5 = 0;
let centerX;
let centerY;
let Mikrofon;
let micLevel;

function setup() {
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    centerX = 0; // Nullpunkt für X setzen
    centerY = 0; // Nullpunkt für Y setzen
    Mikrofon = new Mic('Start Mic'); // Button setzen

}

function draw() {
    background(0, 10);
    stroke(255);
    noFill();



    // Hexagon 1 
    push();
    stroke(20, 10, 220, 50)
    translate(width / 2, height / 2); // Koordinatensystem in die Mitte verschieben

    rotate(radius1);

    if (radius1 >= height) { // Radius ist grösser oder gleich gross, wie der Bildschirm, dann minmiere Radius zu 1
        radius1 = 1;
    }

    beginShape();
    for (let i = 0; i < 360; i += 360 / ecken) { //ChatGPT verhalf hier bei der Erstellung der Form
        let x = centerX + cos(i) * radius1;
        let y = centerY + sin(i) * radius1;
        vertex(x, y);
    }
    endShape(CLOSE);

    pop();

    radius1 = radius1 + 2;

    //Hexagon 2

    push();
    stroke(0, 0, 255, 255);
    translate(width / 2, height / 2); // Koordinatensystem in die Mitte verschieben

    rotate(radius2);

    if (radius2 >= height) { // Radius ist grösser oder gleich gross, wie der Bildschirm, dann minmiere Radius zu 1
        radius2 = 1;
    }


    beginShape();
    for (let i = 0; i < 360; i += 360 / ecken) {
        let x = centerX + cos(i) * radius2;
        let y = centerY + sin(i) * radius2;
        vertex(x, y);
    }
    endShape(CLOSE);

    pop();

    radius2 = radius2 + 1;

    //Hexagon 3 (Verlauf, um Tiefe zu erzeugen)

    push();
    stroke(200, 0, 70, 150);
    translate(width / 2, height / 2); // Koordinatensystem in die Mitte verschieben

    rotate(radius2);

    if (radius3 >= height) { // Radius ist grösser oder gleich gross, wie der Bildschirm, dann minmiere Radius zu 1
        radius3 = 1;
    }


    beginShape();
    for (let i = 0; i < 360; i += 360 / ecken) {
        let x = centerX + cos(i) * radius3;
        let y = centerY + sin(i) * radius3;
        vertex(x, y);
    }
    endShape(CLOSE);

    pop();

    radius3 = radius3 + 1;

    //Octagon 1 (Mikrofon relevant)


    if (Mikrofon.started) {
        micLevel = Mikrofon.listenMic();
        radius4 = map(micLevel, 0, 255, 0, 400); // Reset des Wertes, um intensivere Zahlen zu erreichen
        console.log(micLevel);
    }

    push();
    stroke(220, 175, 255, 240);
    translate(width / 2, height / 2); // Koordinatensystem in die Mitte verschieben

    rotate(radius4);

    beginShape();
    for (let i = 0; i < 360; i += 360 / 8) {
        let x = centerX + cos(i) * radius4;
        let y = centerY + sin(i) * radius4;
        vertex(x, y);
    }
    endShape(CLOSE);


    pop();

    radius4 = radius4 + 0.5;

    //Octagon 2 


    if (radius5 >= height) { // Radius ist grösser oder gleich gross, wie der Bildschirm, dann minmiere Radius zu 1
        radius5 = 1;
    }

    push();
    stroke(200, 0, 70, 80);
    translate(width / 2, height / 2); // Koordinatensystem in die Mitte verschieben

    rotate(radius5);

    beginShape();
    for (let i = 0; i < 360; i += 360 / 8) {
        let x = centerX + cos(i) * radius5;
        let y = centerY + sin(i) * radius5;
        vertex(x, y);
    }
    endShape(CLOSE);


    pop();

    radius5 = radius5 + 0.5;


}

//Funktion, um Bild mit Taste "s" zu speichern

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}
