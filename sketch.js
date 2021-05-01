
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject,groundObject2	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(800,650);
	dustbinObj2=new dustbin(800,550);

	groundObject=new ground(width/2,695,width,20);
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
 
  dustbinObj.display();
  dustbinObj2.display();
  
  groundObject.display();
  groundObject2.display()
 
  
  
 
}





