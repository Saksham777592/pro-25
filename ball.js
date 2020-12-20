class Ball {
    constructor(x, y, d) {
        var options = {
            isStatic: false,
            'resitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, d, options);
        this.x = x;
        this.y = y;
        this.d = d;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        image(this.image, pos.x, pos.y);

        push();
        fill(255,0,0);
        strokeWeight(4);
        //translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.d, this.d);
        pop();
    }
}