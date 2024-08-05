let brushColor = "#000000"; // Default color
let brushSize = 5; // Default size
let isEraser = false; // Eraser mode

function setup() {
  let canvas = createCanvas(windowWidth - 256, windowHeight); // Adjust width for sidebar
  canvas.parent("canvas-container");
  background(255);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    if (isEraser) {
      stroke(255); // White color for the eraser
      strokeWeight(brushSize * 2); // Eraser size is larger
    } else {
      stroke(brushColor);
      strokeWeight(brushSize);
    }
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function setColor(color) {
  isEraser = false;
  brushColor = color;
}

function setSize(size) {
  brushSize = size;
}

function setEraser() {
  isEraser = true;
}

function clearCanvas() {
  background(255);
}
