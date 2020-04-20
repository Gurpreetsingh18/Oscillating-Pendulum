class Holder {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
       holder = Bodies.rectangle(x,y,400,20,options)
       World.add(world,holder);
       holder.width = 400;
       holder.height = 20;
       holder.position.x = 200;
       holder.position.y = 100;
       holder.velocity.x = mouseX;
       holder.velocity.y = mouseY;
    }
    display(){
       fill ("brown");
       rectMode(CENTER);
       rect(200,100,400,20);  
    }
    
}