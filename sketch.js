let angle = 0;


function preload() {
  hand = loadModel('hand.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    setShakeThreshold(2);

}

function draw() {
background(0);

var aX = rotationX/2;
var aY = rotationY/2;
  directionalLight(240, 240, 240, aX, aY, -1);
  ambientMaterial(250);
  scale(50,50,50);
  rotateY(angle * 0.05);
  translate(0, 0, 0);
  model(hand);
  angle += 0.03;
}
