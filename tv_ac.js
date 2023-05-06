img = ""

function preload(){
    img = loadImage('TV and AC img.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(450,230);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Television", 100, 200);
    noFill();
    stroke("#FF0000");
    rect(50, 150, 350,200);
}