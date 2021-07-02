
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper = new Paper(200,650,10,10);
	paper.scale=0.1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if (keyCode === UP_ARROW){
	  paper.velocityX = 3;
	  paper.velocityY = 3;
  }

  var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });


  groundObject.display();
  dustbinObj.display();
  paper.display();
  drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper.body,paper.body.pos,{x:130,y:-145});

  
    }
}

