class Dustbin {
    constructor(x, y, width, height) {

        this.thickness = 5;
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 25;
        this.image = loadImage("dustbin.png");

        this.bottom = Bodies.rectangle(x, y, this.width, this.thickness, {isStatic: true});
        this.left = Bodies.rectangle(this.x - this.width/2, this.y - this.height/2, this.thickness, this.height, {isStatic: true});
        this.right = Bodies.rectangle(this.x + this.width/2, this.y + this.height/2, this.thickness, this.height, {isStatic: true});
        
        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);

    }
    display() {
        var bottomPos = this.bottom.position;
        var leftPos = this.left.position;
        var rightPos = this.right.position;

        push(); 
        translate(bottomPos.x, bottomPos.y);
        rectMode(CENTER);
        fill(255);
        pop();

        push(); 
        translate(leftPos.x, leftPos.y);
        fill(255);
        rectMode(CENTER);
        pop();

        push();
        translate(rightPos.x, rightPos.y);
        rectMode(CENTER);
        fill(255);
        pop();

        image(this.image, 1000, 250, this.width, this.height );
        
    }
}