class Ball{
constructor(x,y,width,height){
var ball_options = {
  restitution : 1.0,
  density : 1.0
}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);
ball.position.x = 220;
ball.position.y = 200;


  ball.velocityX = mouseX;
  ball.velocity = mouseY;
}

display(){
   fill("blue");
   ellipseMode(RADIUS);
   ellipse(220,200,40);
  strokeWeight(8);
  stroke("white");
  line(220,200,200,100);
}

}



