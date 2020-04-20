class String{
    constructor(){
        options = {
        bodyA : ball,
        bodyB : holder,
        stiffness: 0.004,
        length : 100
       
        }
        this.string= Constraint.create(options);
        World.add(world,this.string);
        
        }

    display(){
         var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            fill(White);
            stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling3,pointA.x -30, pointA.y -10,15,30);
        
    }
};
