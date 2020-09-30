function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('green');
  rect(10,150,10,80);
  rect(380,mouseY,10,80);
  rect(200,200,10,10);
}