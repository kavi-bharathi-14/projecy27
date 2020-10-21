class Rope
{

    constructor(bodyA,pointB) {
    //                pointB
        var options={

            bodyA:bodyA,
            pointB:pointB,//pointB
            stiffness:0.04,
            length:10
        
        }

        this.body =Constraint.create(options);
        World.add(world,this.body);
    
      }
    display(){
       var pointA=this.body.bodyA.position;
       var pointB=this.body.pointB;
        line (pointA.x,pointA.y,pointB.x,pointB.y);



    }

}