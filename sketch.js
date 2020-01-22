// References found at p5js.org

// Add your variables here
var numberOfRect = 20


// initialize your program here
function setup() {
    createCanvas(500, 500);
    
}




// Essentially a repeat command
function draw() {
    background(50);
    for (var i = 0; i < numberOfRect; i++) {
  var step = 255/numberOfRect
  var green = 0+i*step
  var blue = 255-i*step
  strokeWeight(0);

  fill(0,green,blue)
  var my_rect = rect(0, i * height/numberOfRect, width, height/numberOfRect);
}
    let value = 255;
    fill(value);
    square(220, 220, 60, 25);
function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
    
}