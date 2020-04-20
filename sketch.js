const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,holder,ground;
var string;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(200,100,200,20);
    holder = new Holder(200,100,200,20);
    ground = new Ground(ball.body,{x:100, y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display();
    holder.display(); 
    ground.display();
    strokeWeight(4);       
}


function mouseDragged(){
    if(keyDown("space")){
        ball.body.position.x = mouseX;
        ball.body.position.y = mouseY;
    }
}

function mouseReleased(){
    if(KEY_DOWN("enter")){
    ball.body.position.x =mouseX;
    ball.body.position.y = mouseY;
    }
}

   