// Initialisiere die Variablen für das Farbwähler-Element und die Radien der Ellipsen sowie den Rotationswinkel
let colorPicker;
let r1 = 200;
let r2 = 100;
let angle = 0;

// Steuerungsvariablen für die Pausierung und die Richtung der Rotation, Wachstumsrate der Ellipse und maximale Ellipsengröße
let rotationPaused = false;
let reverseRotation = false;
let ellipseGrowthRate = 0.01; // Faktor 8 langsameres Wachstum
let maxEllipseSize = 2000; // Maximale Größe der Ellipse

function setup() {
  // Erstelle einen Farbwähler und platziere ihn an der Position (10, 10)
  colorPicker = createColorPicker('#ffffff');
  colorPicker.position(10, 10);
  
  // Erstelle ein Canvas mit der Größe des Browserfensters und setze den Winkelmodus auf Grad
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // Wenn die Rotation pausiert ist, verlasse die draw() Funktion
  if (rotationPaused) {
    return;
  }
  
  // Setze den Hintergrund und zeichne keine Füllung, setze die Strichfarbe auf die des Farbwählers
  background(0, 10);
  noFill();
  stroke(colorPicker.color());

  // Schleife für die Rotation und Zeichnung der Formen
  for (let i = 0; i < 72; i++) {
    push();
    translate(width / 2, height / 2);

    // Je nach Richtung der Rotation, rotiere im oder gegen den Uhrzeigersinn
    if (!reverseRotation) {
      rotate(i * 5);
    } else {
      rotate(-i * 5);
    }

    // Skalierung bei spezifischen Schritten
    if (i % 12 === 6) {
      scale(0.333);
    }

    // Zeichne die erste Ellipse
    ellipse(100, 0, r1, r2);

    // Bei aktivierter Rückwärtsrotation:
    if (reverseRotation) {
      // Wenn die Ellipse kleiner als die maximale Größe ist, vergrößere sie
      if (r2 < maxEllipseSize) {
        r2 += ellipseGrowthRate;
      } else {
        r2 = 100; // Setze die Ellipse zurück auf ihre Ausgangsgröße
        angle = 0; // Starte die Rotation neu
      }
    }
    // Zeichne die zweite Ellipse
    stroke(255);
    ellipse(150, 0, r2, r2 * 0.75);
    stroke(colorPicker.color());

    // Dreieck zeichnen
    push();
    translate(150, r1);
    if (!reverseRotation) {
      rotate(-angle);
    } else {
      rotate(angle);
    }
    triangle(0, 0, 0, 100, 0, 150);
    pop();

    pop();
  }

  // Rotationswinkel erhöhen oder verringern, abhängig von der Richtung
  if (reverseRotation) {
    angle--;
  } else {
    angle++;
  }
}

// Mausklick-Event: Pausiert die Rotation und ändert die Richtung
function mousePressed() {
  rotationPaused = !rotationPaused;
  if (!rotationPaused) {
    reverseRotation = !reverseRotation;
  }
}
