img = ""

function preload(){
    img = loadImage('desk_img.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(450,230);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Laptop", 200, 110);
    noFill();
    stroke("#FF0000");
    rect(190, 120, 140, 90);
}