var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png",   "monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","_monkey7.png","monkey_8.pn")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 200);
  monkey = createSprite(80,315,20,20);
  monkey = addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  }

function draw() {
  createEdgeSprites();
  background(200);
  background("white");
  drawSprites();
}