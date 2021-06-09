class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
           pointB : pointB,
            stiffness: 0.04,
            length: 10
        }
         this.pointB = pointB
        this.rubberband = Constraint.create(options);
        World.add(world, this.rubberband);
    }

    fly(){
        this.rubberband.bodyA = null
    }
    attach(x){
        this.rubberband.bodyA = x
    }
    display(){
        if(this.rubberband.bodyA){
            var pointA = this.rubberband.bodyA.position;
            var pointB = this.pointB
            
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
        
    }
    
}