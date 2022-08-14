function preload() {

}

function setup() {
    canvas = createCanvas(1000, 1000);
    canvas.position(10, 30);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    fill(10, 110, 135);
    rect(150, 80, 750, 50);
    rect(150, 475, 750, 50);
    rect(130, 80, 50, 400);
    rect(875, 80, 50, 400);
    fill(120, 15, 130);
    circle(150, 100, 100);
    circle(900, 100, 100);
    circle(900, 500, 100);
    circle(150, 500, 100);
    image(video, 350, 175, 320, 240);
}

function take_snapshot() {
    save("Stdent.png");
}