class ground{

    constructor(x,y,width,height)
	{
        this.width=this.width;
        this.height=this.height;
       
        this.body=Bodies.rectangle(x,y,width,20,{isStatic:true});
        this.body.shapColor=color(0,250,250);
        
		World.add(world,this.body);

    }

    display(){

        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        rect(0,0,this.width,this.height);
        pop ()


    }




}