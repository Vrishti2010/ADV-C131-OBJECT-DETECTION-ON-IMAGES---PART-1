img = ""

function preload(){
    img = loadImage('bottles_img.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(450,230);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bottle", 100, 150);
    noFill();
    stroke("#FF0000");
    rect(200, 140, 100,200);
}