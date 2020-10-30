var paperObj;
var dustbin1,dustbin2,dustbin3;
var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	Engine.run(engine);
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,690,1600,20);

	dustbin1 = new dustbin(1400,680,200,20);

	dustbin2 = new dustbin(1500,630,20,150);

	dustbin3 = new dustbin(1300,630,20,150);

	paperObj = new PaperClass(100,550,40,);


	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 	paperObj.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	
	
	//keyPressed();
	

}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:365,y:-505});
	}	
}

 

	



