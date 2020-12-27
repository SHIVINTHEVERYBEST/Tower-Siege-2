const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonImg;
var block1, block2, block3, block4, block5, block6;
var block7, block8, block9;
var block10, block11, block12, block13, block14, block15;
var block16, block17, block18;
var slingshot;
var stand1, stand2;

function preload(){

 polygonImg = loadImage("polygon.png");

}

function setup(){
createCanvas(800, 800);

engine = Engine.create();
world = engine.world;

polygon = Bodies.circle(50, 200, 20);
World.add(world, polygon);

block1 = new Box(325, 235, 30, 40);
block2 = new Box(355, 235, 30, 40);
block3 = new Box(385, 235, 30, 40);
block4 = new Box(415, 235, 30, 40);
block5 = new Box(445, 235, 30, 40);

block6 = new Box(355, 195, 30, 40);
block7 = new Box(385, 195, 30, 40);
block8 = new Box(415, 195, 30, 40);

block9 = new Box(385, 155, 30, 40);
stand1 = new Stand(385, 255, 200, 13);

block10 = new Box(325, 535, 30, 40);
block11 = new Box(375, 535, 30, 40);
block12 = new Box(385, 535, 30, 40);
block13 = new Box(415, 535, 30, 40);
block14 = new Box(445, 535, 30, 40);

block15 = new Box(355, 495, 30, 40);
block16 = new Box(385, 495, 30, 40);
block17 = new Box(415, 495, 30, 40);

block18 = new Box(385, 455, 30, 40);
stand2 = new Stand(385, 555, 200, 13);

slingshot = new SlingShot(this.polygon,{x:150, y:200});


}

function draw(){
background(0);

Engine.update(engine);

  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
  slingshot.display();
  stand1.display();
  stand2.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
