function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();
}

function draw(){
    image( Video, 0, 0, 640, 480);
    ellipse(30, 30, 55, 55);
    fill("red");
    stroke("yellow");
    ellipse(610, 30, 55, 55);
    fill("cyan");
    stroke("orange");
    ellipse(30, 450, 55, 55);
    fill("green");
    stroke("blue");
    ellipse(610, 450, 55, 55);
    fill("orange");
    stroke("black");
    
}

function take_snapshot(){
    save('image.png');
}