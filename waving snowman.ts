function setup(): void {
    createCanvas(400, 400);
}

var angle = 40;
var dir = false;

function draw(): void {
    background(220);
    rect(0, 350, 400, 50);
    ellipse(200, 300, 150, 150);
    ellipse(200, 200, 100, 100);
    ellipse(200, 120, 75, 75);
    line(160, 200, 100, 150);

    let [x, y] = vector_math.vectorToXY(240, 200, angle, 78)
    line(240, 200, x, y);

    if (dir) {
        if (angle >= 40) {dir=false;} else {angle += 1;}
    } else {
        if (angle <= 0) {dir=true;} else {angle -= 1;}
    }
}
