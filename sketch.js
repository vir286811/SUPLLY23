var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxLeft,boxRight,boxBottom,boxLeftSprite,boxRightSprite,boxBottomSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxBottomSprite = createSprite(width/2,650,200,20);
	boxBottomSprite.shapeColor=color("red");
	boxLeftSprite = createSprite((width/2)-100,610,20,100);
	boxLeftSprite.shapeColor=color("blue");
	boxRightSprite = createSprite((width/2)+100,610,20,100);
	boxRightSprite.shapeColor=color("green");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxBottom = Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	boxLeft = Bodies.rectangle((width/2)-100,610,20,100,{isStatic:true});
	boxRight = Bodies.rectangle((width/2)+100,610,20,100,{isStatic:true});
	World.add(world, boxBottom);
	World.add(world, boxLeft);
	World.add(world, boxRight);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  boxBottomSprite.x=boxBottom.position.x;
  boxBottomSprite.y=boxBottom.position.y;
  boxLeftSprite.x=boxLeft.position.x;
  boxLeftSprite.y=boxLeft.position.y;
  boxRightSprite.x=boxRight.position.x;
  boxRightSprite.y=boxRight.position.y;
  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



