
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

var engine,world;
var boy,stone,tree, mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{
	BoiImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy(stone.body,{x:85, y:445});
	stone = new Stone(68,340);
	tree = new Tree(650,350);

  mango1 = new Mango(420, 250);
	mango2 = new Mango(700, 150);
	mango3 = new Mango(800, 300);
	mango4 = new Mango(600, 120);
	mango5 = new Mango(560, 230);
	mango6 = new Mango(660, 330);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(boiImage ,50,380,200,300);

  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  tree.display();
  ground.display();
  boy.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  drawSprites();
 
}

function keyPressed(){
if(keyCode===32){
	Mater.Body.setPosition(stone.body,{x:235,y:420})
	boy.attach(stone.body)
}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if( distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
     boy.fly();

}