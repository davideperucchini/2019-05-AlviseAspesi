var capture;

function setup() {
	createCanvas(windowWidth, windowHeight);
	capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
	background(200);
  var myFeed = capture.loadPixels();
  imageMode(CENTER);
  image(myFeed, windowWidth/2, windowHeight/2, 640, 480);
}
