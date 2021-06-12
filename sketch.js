const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,600,1200,20);

  //level one
  block1 = new Block(900,100,70,70);
  block2 = new Block(900,100,70,70);
  block3 = new Block(900,100,70,70);
  block4 = new Block(900,100,70,70);
  block5 = new Block(900,100,70,70);
  block6 = new Block(900,100,70,70);
  block7 = new Block(800,100,70,70);
  //level two
  block8 = new Block(800,100,70,70);
  block9 = new Block(800,100,70,70);
  block10 = new Block(800,100,70,70);
  block11 = new Block(800,100,70,70);
  block12 = new Block(800,100,70,70);
  //level three
  block13 = new Block(700,100,70,70);
  block14 = new Block(700,100,70,70);
  block15 = new Block(700,100,70,70);
  //top
  block16 = new Block(700,100,70,70);

  //set 2 for second stand
  //level one
  blocks1 = new Block(700,100,70,70);
  blocks2 = new Block(700,100,70,70);
 

  //polygon holder with slings

  ball=new Ball(200,200,40,40)
  slingShot = new Slingshot(ball.body,{x:500,y:50});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  
  ground.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  ball.display();

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
