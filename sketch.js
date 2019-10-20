var speech = new p5.Speech();
var capture;
var myIphone = [];
var photoB;
var rSlider, gSlider, bSlider;
var button;

function preload() {
  myIphone = loadImage("./assets/iphone.png");
  font = loadFont('assets/gt-walsheim-bold.ttf');
  angleMode(DEGREES);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //webcam
  capture = createCapture(VIDEO);
  capture.size(510, 450);
  capture.hide();

  //photobutton
  photoB = new photoButton(windowWidth / 2 + 306, windowHeight / 2, 65);

  //speech voice
  speech.start;


  //sliders
  push();
  rSlider = createSlider(0, 255, 0);
  rSlider.position(windowWidth / 2 - 100, windowHeight / 2 + 300);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(windowWidth / 2 - 100, windowHeight / 2 + 350);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(windowWidth / 2 - 100, windowHeight / 2 + 400);
  pop();

  //introduction siri button
  button = createButton("hey siri!");
  button.position(windowWidth / 2 - 50, windowHeight / 5);
  button.mousePressed(intro);

  //how to take a photo siri
  button = createButton("take a pic");
  button.position(windowWidth / 2 + 450, windowHeight / 2 - 10);
  button.mousePressed(pic);

  //change the slider siri
  button = createButton("make your filter");
  button.position(windowWidth / 2 - 250, windowHeight / 2 + 350);
  button.mousePressed(cc);
}

function intro() {
  //speech.setVoice("Alice");
  speech.speak("hi, i'm the new siri, let's try the new i phone zs max's selfie camera");
}

function pic() {
  //speech.setVoice("Alice");
  speech.speak("click the white circle to take a selfie!");
}

function cc() {
  //speech.setVoice("Alice");
  speech.speak("change the parameters of the sliders to create your filter");
}

function draw() {
  background(125);

  //webcam
  var myImage = capture.loadPixels();
  push();
  translate(width, 0);
  scale(-1, 1);
  imageMode(CENTER);
  image(myImage, windowWidth / 2 + 30, windowHeight / 2, 510, 450);
  pop();

  //photobutton
  photoB.display();

  //png iphone
  push();
  imageMode(CENTER);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-90);
  image(myIphone, 0, 0, myIphone.width / 10, myIphone.height / 10);
  pop();

  //draw the text
  push();
  textAlign(CENTER, CENTER);
  textSize(20);
  noStroke();
  fill("white");
  textFont(font);
  text("have fun with the new ifon zs max's camera", windowWidth / 2, windowHeight / 7);
  pop();

  //filtro
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  noStroke();
  fill(color(r, g, b, 75));
  rectMode(CENTER);
  rect(windowWidth / 2 - 39, windowHeight / 2, 491, 450);
}

function mousePressed() {
  photoB.click();
}

function photoButton(_x, _y, _r, _c) {
  this.x = _x;
  this.y = _y;
  this.r = _r;
  this.c = color(255);

  this.display = function() {
    fill(this.c);
    ellipse(this.x, this.y, this.r);
  }

  this.click = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.r) {
      save("ciao.png");
    }
  }
}
