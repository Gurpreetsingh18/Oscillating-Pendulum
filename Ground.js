
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,100,20,options);
      this.width = 100;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
        fill(0);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,100,20);
    }
  };