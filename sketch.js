const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1;
var dustbin1, dustbin2;
       
function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, 350, 1200, 25);

    dustbin1 = new Dustbin(1000, 325, 300, 25);
   

    ball1 = new Ball(50, 315, 10);
}

function draw() {
    background("grey");
    Engine.update(engine);

    ground1.display();

    dustbin1.display();
  
    ball1.display();
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x:115, y:-10});
    }
}

