
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   


	bobObject1 = new Bob(450,300,40);
	bobObject2 =new Bob(500,300,40);
	bobObject3=new Bob(550,300,40);

	bobObject4 	=new Bob(600,300,40);
	bobObject5 	=new Bob(650,300,40);
	
	ground1 = new Ground(500,100,300,40);
  rope1= new Rope(bobObject1.body,ground1.body,-50*2,0);
  rope2= new Rope(bobObject2.body,ground1.body,-25*2,0);
  rope3= new Rope(bobObject3.body,ground1.body,-0*2,0);
  rope4= new Rope(bobObject4.body,ground1.body,25*2,0);
  rope5= new Rope(bobObject5.body,ground1.body,50*2,0);





	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 // rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();

   ground1.display();
   
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display()

  // keyPressed();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});} 
} 



