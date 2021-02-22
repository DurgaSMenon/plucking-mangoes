
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage("boy.png"); 
}

function setup() {
	createCanvas(800, 700);
	
	mango1=new Mango(400,100,30,30);
	mango2=new Mango(500,100,30,30);
	mango3=new Mango(600,100,30,30); 
	mango4=new Mango(700,100,30,30);
	mango5=new Mango(800,100,30,30);

	stoneObj=new Stone(100,200,30,30);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
  drawSprites();
 
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position;
	stoneBodyPositon=Lstone.body.position;
	
	var distance=dist(stoneBodyPositon.x,stoneBodyPositon.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone+r){
		Matter.body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(KeyCode===32){
	   Matter.Body.setPosition(stoneObj.body,{x:235,y:400})
	   launcherObject.attach(stoneObj.body);
	}
}





