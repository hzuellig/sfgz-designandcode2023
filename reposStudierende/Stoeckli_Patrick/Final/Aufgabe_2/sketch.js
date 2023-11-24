let startScreen = true; // Startbildschirm

let tilesX = 25; // Anzahl der Kacheln in horizontaler Richtung
let tilesY = 25; // Anzahl der Kacheln in vertikaler Richtung

let gridX, gridY; // Initialisierte Variablen für das Raster

let mic; // Variable für das Mikrofon

let clapThreshold = 0.1; // Schwellenwert für das Klatschen
let whistleThreshold = 0.01; // Schwellenwert für das Pfeifen

let showEllipse = false; // Variable, um die Ellipse standardmäßig nicht zu zeigen
let lastClapTime = 0; // Zeitpunkt des letzten Klatschens
const clapCooldown = 1000; // Zeit in Millisekunden, in der nach einem Klatschen die Ellipse sichtbar bleibt

function setup() {
  mic = new p5.AudioIn(); // Mikrofon initialisieren
  mic.start(); // Mikrofon starten

  createCanvas(windowWidth, windowHeight); // Erstellt die Zeichenfläche basierend auf der Fenstergröße
  gridX = width / tilesX; // Berechnet die Rastergröße in der horizontalen Richtung
  gridY = height / tilesY; // Berechnet die Rastergröße in der vertikalen Richtung
  colorMode(HSB, 360, 100, 100); // Setzt den Farbmodus auf HSB
}

function draw() {
  if (startScreen) {
    background(255); // Zeichnet einen weißen Startbildschirm
    let centerX = width / 2; // Mittelpunkt in horizontaler Richtung
    let centerY = height / 2; // Mittelpunkt in vertikaler Richtung
    drawStartHexagon(centerX, centerY); // Zeichnet das Start-Hexagon in der Mitte

    // Überprüft, ob die Maus innerhalb des Hexagons ist und deaktiviert den Startbildschirm
    if (mouseIsPressed && isMouseInsideHexagon(centerX, centerY, 100)) {
      startScreen = false;
    }
  } else {
    let micLevel = mic.getLevel(); // Ruft den Pegel des Mikrofons ab
    let isClapping = micLevel > clapThreshold; // Überprüft, ob geklatscht wird
    let isWhistling = micLevel > whistleThreshold; // Überprüft, ob gepfiffen wird

    if (isClapping && millis() - lastClapTime > clapCooldown) {
      showEllipse = !showEllipse; // Zeigt oder verbirgt die Ellipse je nach vorherigem Zustand
      lastClapTime = millis(); // Aktualisiert den Zeitpunkt des letzten Klatschens
    }

    // Berechnungen basierend auf dem Mikrofonpegel und der Mausposition
    let scaleAmount = map(micLevel, 0, 1, 1, 4);
    let mousePos = map(mouseY, 0, height, 100, 0);

    // Hintergrundfarbe basierend auf der Mausposition
    background(lerpColor(color(0), color(255), mousePos / 100));
    stroke(12); // Setzt den Strich auf eine bestimmte Dicke

    // Schleife zum Zeichnen des Musters
    for (let y = 0; y < tilesY; y++) {
      for (let x = 0; x < tilesX; x++) {
        let winkel = atan2(mouseY - (y * gridY), mouseX - (x * gridX)) + (2 * PI);
        let scaleFactor = map(abs(cos(winkel)), 0, 1, 1, 2);

        push(); // Speichert den aktuellen Zustand der Transformationen
        translate(x * gridX, y * gridY); // Verschiebt den Ursprung an die richtige Stelle
        rotate(winkel); // Rotiert basierend auf dem Winkel
        scale(scaleFactor); // Skaliert das Muster

        // Zeichnet entweder Linien oder farbige Hexagone, je nach Gitterposition
        if ((x + y) % 2 === 0) {
          rotateLine(0, 0, gridX, gridY, scaleFactor); // Zeichnet rotierende Linien
        } else {
          noStroke(); // Kein Strich für die folgenden Formen
          let hue = (x + y + frameCount) % 360; // Berechnet die Farbe basierend auf Gitterposition und Rahmenanzahl
          let sat = map(mousePos, 0, 100, 100, 0); // Saturation basierend auf Mausposition
          let bright = map(mousePos, 0, 100, 100, 50); // Helligkeit basierend auf Mausposition
          rainbowHexagon(0, 0, gridX, gridY, hue, sat, bright); // Zeichnet ein farbiges Hexagon
          blackHexagon(0, 0, gridX / 2, gridY / 2); // Zeichnet ein schwarzes Hexagon in der Mitte

          if (showEllipse) {
            drawEllipse(isWhistling, hue, scaleAmount, gridX, gridY); // Zeichnet die Ellipse
          }
        }

        pop(); // Stellt den vorherigen Transformationszustand wieder her
      }
    }
  }
}


// Zeichnet eine Ellipse abhängig davon, ob gepfiffen wird und passt ihre Eigenschaften an
function drawEllipse(isWhistling, hue, scaleAmount, gridX, gridY) {
  if (isWhistling) {
    hue = random(0, 360); // Zufällige Farbe bei jedem Pfeifen
    fill(hue, 100, 100); // Setzt die Farbe basierend auf dem Pfeifen
    scaleAmount *= 1.1; // Skaliert die Ellipse beim Pfeifen um den Faktor 1.1
    scale(scaleAmount); // Skaliert die Ellipse
    ellipse(0, 0, gridX / 4, gridY / 4); // Zeichnet die Ellipse
  }
}

// Zeichnet rotierende Linien basierend auf dem Skalierungsfaktor
function rotateLine(x, y, w, h, scaleFactor) {
  if (scaleFactor >= 1 && scaleFactor <= 1.5) {
    for (let i = 0; i < 2; i++) {
      let direction = (i % 2 === 0) ? 1 : -1; // Richtung der Linienrotation
      push(); // Speichert den aktuellen Zeichenzustand
      rotate(PI / 4 * direction); // Rotiert die Linien
      stroke(255); // Setzt die Strichfarbe auf Weiß
      line(x - w / 2, y, x + w / 2, y); // Zeichnet eine Linie
      pop(); // Stellt den vorherigen Zeichenzustand wieder her
    }
  } else {
    line(x - w / 2, y, x + w / 2, y); // Zeichnet eine Linie ohne Rotation
  }
}

// Zeichnet das Start-Hexagon in der Mitte des Startbildschirms
function drawStartHexagon(x, y) {
  let size = 100; // Größe des Hexagons
  fill(0); // Füllt das Hexagon mit Schwarz
  beginShape(); // Beginnt eine Formzeichnung
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i; // Berechnet den Winkel für die Ecken des Hexagons
    let xOffset = size * cos(angle); // Berechnet die x-Verschiebung
    let yOffset = size * sin(angle); // Berechnet die y-Verschiebung
    vertex(x + xOffset, y + yOffset); // Fügt eine Ecke zum Hexagon hinzu
  }
  endShape(CLOSE); // Beendet die Formzeichnung und schließt das Hexagon
  fill(255); // Setzt die Füllfarbe auf Weiß
  textAlign(CENTER, CENTER); // Zentriert den Text
  textSize(20); // Setzt die Textgröße
  text("START!", x, y); // Zeigt den Text "START!" im Hexagon an
}

// Überprüft, ob sich die Maus innerhalb des Hexagons befindet
function isMouseInsideHexagon(x, y, size) {
  let mouseToCenter = dist(mouseX, mouseY, x, y); // Berechnet die Distanz von Maus zum Zentrum
  return mouseToCenter < size; // Gibt zurück, ob die Maus innerhalb des Hexagons ist
}

// Zeichnet ein farbiges Hexagon basierend auf den übergebenen Parametern
function rainbowHexagon(x, y, w, h, hue, sat, bright) {
  noStroke(); // Kein Strich für das Hexagon
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= 10; j++) {
      let lerpBright = lerp(bright, 100, j / 10); // Berechnet die Helligkeit
      fill(hue, sat, lerpBright); // Setzt die Füllfarbe
      let angle = TWO_PI / 6 * i; // Winkel für die Hexagonecken
      let nextAngle = TWO_PI / 6 * (i + 1); // Winkel für die nächste Ecke
      beginShape(); // Beginnt die Formzeichnung
      vertex(x, y); // Setzt den Ursprung des Hexagons
      vertex(x + w / 2 * cos(angle), y + h / 2 * sin(angle)); // Setzt eine Ecke des Hexagons
      vertex(x + w / 2 * cos(nextAngle), y + h / 2 * sin(nextAngle)); // Setzt die nächste Ecke
      endShape(CLOSE); // Beendet die Formzeichnung und schließt das Hexagon
    }
  }
}

// Zeichnet ein schwarzes Hexagon basierend auf den übergebenen Parametern
function blackHexagon(x, y, w, h) {
  fill(0); // Füllt das Hexagon mit Schwarz
  beginShape(); // Beginnt die Formzeichnung
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i; // Winkel für die Hexagonecken
    vertex(x + w / 2 * cos(angle), y + h / 2 * sin(angle)); // Setzt eine Ecke des Hexagons
  }
  endShape(CLOSE); // Beendet die Formzeichnung und schließt das Hexagon
}
// mit Chat GPT zusammen erstellt