
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,bin,ballimg,binimg;
function preload(){
	binimg=loadImage("bin.png");
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;
	rect1=createSprite(400, 640, 200,20);
	rect2=createSprite(300,590,20,100);
	rect3=createSprite(500,590,20,100);
rect1.shapeColor=105,105,105;
rect2.shapeColor=105,105,105;
rect3.shapeColor=105,105,105;

	//Create the Bodies Here.
ground=new Ground(250,680,3000,20);


r1=Bodies.rectangle(400,640,200,20,{isStatic:true});
	World.add(world,r1);

	r2=Bodies.rectangle(300,590,20,100,{isStatic:true});
	World.add(world,r2);
	r3=Bodies.rectangle(500,590,20,100,{isStatic:true});
	World.add(world,r3);
	
	ball = new Box (1200,200,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(105,105,105);
  image(binimg,300,420,200,200)
  drawSprites();
  
  ball.display();
 ground.display();



}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-300,y:500})
	}
}


