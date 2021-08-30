const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		restituation: 0.8
	}
	rope1 = new rope(bob1,roof,-80,0)
	bob1 = Bodies.circle(320,300,10,ball_options);
	bob2 = Bodies.circle(361,300,10,ball_options);
	bob3 = Bodies.circle(402,300,10,ball_options);
	bob4 = Bodies.circle(443,300,10,ball_options);
	bob5 = Bodies.circle(484,300,10,ball_options);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  
  //call display() to show ropes here
	rope1.display()
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,40)
  ellipse(bob2.position.x,bob2.position.y,40)
  ellipse(bob3.position.x,bob3.position.y,40)
  ellipse(bob4.position.x,bob4.position.y,40)
  ellipse(bob5.position.x,bob5.position.y,40)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-55,y:-45}); } 