let canvas;
let xPos = 0;
let yPos = 0;
let easing = .1;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    //background(225);
}

function windowResize(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();

    xPos = xPos +((mouseX - xPos) * easing);
    yPos = yPos +((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}

function drawThing(_x, _y){
    fill(255, 255, 240);
    stroke(0);
    strokeWeight(2);
    rectMode(CENTER);
    rect(_x, _y, 100, 140, 10);

    // Simple scribble (randomized lines)
    strokeWeight(1);
    for (let i = -20; i <= 20; i += 10) {
        line(_x - 30, _y + i, _x + 30, _y + i + random(-3, 3));
    }
}