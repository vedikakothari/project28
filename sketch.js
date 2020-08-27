
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyIMG = loadImage("Plucking mangoes/boy.png");
	treeIMG = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 700);
	
	var tree_options = {
		isStatic: true
	}
	tree = Bodies.rectangle(600,650,50,20,tree_options);
	tree.addImage("tree",treeIMG);
	World.add(world,tree);

	var boy_options = {
		isStatic: true
	}
	boy = Bodies.rectangle(400,650,20,10,boy_options);
	boy.addImage("boy",boyIMG);
	World.add(world,boy);

	ground = new Ground(400,730,800,30);
	stone = new Stone(410,670,2,2);


	mango1 = new Mango(400,630,10,10);
	mango2 = new Mango(420,650,10,10);
	mango3 = new Mango(410,640,10,10);
	mango4 = new Mango(380,620,10,10);
	mango5 = new Mango(390,650,10,10);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);

  rectMode(CENTER);
  rect(boy.position.x,boy.position.y,20,10);

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  
  drawSprites();
 
}

function detectCollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=mango1+stone){
			Matter.Body.setStatic(mango1.body,false);
		}
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=mango2+stone){
			Matter.Body.setStatic(mango2.body,false);
		}
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=mango3+stone){
			Matter.Body.setStatic(mango3.body,false);
		}
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=mango4+stone){
			Matter.Body.setStatic(mango4.body,false);
		}
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=mango5+stone){
			Matter.Body.setStatic(mango5.body,false);
		}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  	elastic.fly();
    gameState = "launched";
}


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:235,y:420})
    }
}

