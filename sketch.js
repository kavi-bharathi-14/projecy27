
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	/*var bobDiameter = 70;
	var posX = width/2;
	var posY = height/4 + 200;

	bob1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter,posY, bobDiameter);
	bob3 = new Bob(posX,posY,bobDiameter);
	bob4 = new Bob(posX +  bobDiameter, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter * 2, posY, bobDiameter);

	

	rope1 = new Rope(bob1.body,{x:260,y:-400});
	//rope2 = new Rope(bob2.body,roof.body,bobDiameter*2,0);
	//rope3 = new Rope(bob3.body,roof.body,70,0); 
 	//rope4 = new Rope(bob4.body,roof.body,bobDiameter*2,0); 
	//rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);
	*/
	bob1=new Bob (200,500,100);
	roof = new ground(width/2,400, 500, 15);
}


function draw() {
  rectMode(CENTER);
  background(50);
  Engine.update(engine);
  roof.display();
  bob1.display();
  //bob2.display();
  //bob3.display();
 // bob4.display();
  //bob5.display();
 
  
//rope1.display();
 //rope2.display();
 //rope3.display();
// rope4.display();
 //rope5.display();

 // rect(340,450-300,500,20);
  

 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	}
}


