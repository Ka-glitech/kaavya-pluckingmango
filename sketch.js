const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	stone=new Stone(235,420,30,30); 
  mango1=new Mango(1100,100,30); 
  mango2=new Mango(1170,130,30); 
  mango3=new Mango(1010,140,30);
  mango4=new Mango(1000,70,30); 
  mango5=new Mango(1100,70,30); 
  mango6=new Mango(1000,230,30); 
  mango7=new Mango(900,230,30); 
  mango8=new Mango(1140,150,30); 
  mango9=new Mango(1100,230,30); 
  mango10=new Mango(1200,200,30); 
  mango11=new Mango(1120,50,30); 
  mango12=new Mango(900,160,30); 
  tree=new Tree(1050,280); 
  ground=new Ground(650,580,1300,3);
  chain=new Chain(stone.body,{x:235,y:420})

  
 
	Engine.run(engine); 
}
function preload() {
  boyImg= loadImage("boy.png")
}

function draw() {
  rectMode(CENTER);
  // background(255);


  background("Gray")
  fill('black');
  textSize(24);
  text("Press Space to get a second Chance!", 150,100);
  ground.display();
  tree.display(20,20,5,5);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  
  image(boyImg,200,340,200,300)



  drawSprites();
 

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
// function detectCollision(lstone,lmango){
//   stoneBodyPosition = lstone.body.position;
//   mangoBodyPosition = lmango.body.position;

//   var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
//   if(distance <= lmango.r + lstone.r){
//     Matter.Body.setStatic(lmango.body,false);
//   }

// }

function detectCollision(lstone,lmango){

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
  
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.width)
{
console.log("hi")
Matter.Body.setStatic(lmango.body,false);
}
}
