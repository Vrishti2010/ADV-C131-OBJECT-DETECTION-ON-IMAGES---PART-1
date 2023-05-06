img = ""

function preload(){
    img = loadImage('fruit basket_img.webp');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(450,230);
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Apple", 100, 150);
    noFill();
    stroke("#FF0000");
    rect(50, 150, 120,100);
}