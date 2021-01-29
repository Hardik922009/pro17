
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup, obstacleGroup
var score
var ground
var survivalTime=0
var PLAY = 1;
var END = 0;
var gameState = PLAY;





function preload(){
   createCanvas(600, 600);
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey .addAnimation("running", monkey_running);
  monkey .scale = 0.1;
   
  ground = createSprite(400,350,900,10);
  ground.velocityX=-8 
  ground.x = ground.width /2;
  console.log(ground.x)
  
  
  obstaclesGroup = new Group();
  bananaGroup = new Group();
   
   
}

function draw() {
   background("white");
  
   if (gameState===PLAY){
  if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13 ;
  }
   monkey.velocityY =monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  
stroke("white");
textSize(20);
fill ("white")
text("Score:"+score,500,50);

stroke("black");
textSize(20);
fill ("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival time:"+survivalTime,100,50);
   drawSprites(); 
     
     spawnBnanas() ;
     spawnobstacle();
   }
  
  else if (gameState === END) {
  }
  
}
function spawnBnanas() {
if(frameCount % 80 === 0){
  banana = createSprite(200,60,30);
  banana.y = Math.round(random(120,220));
  banana .addImage("banana",bananaImage)
  banana.scale = 0.1;
  banana.velocityX=- 2
  banana.lifetime = 300;
  bananaGroup.add(banana);
  
  
  
   }
}
function spawnobstacle() {
if(frameCount % 300 === 0) {
  obstacle= createSprite(200,327);
  obstacle .addImage(obstaceImage)
  obstacle.scale = 0.2;
  obstacle.velocityX=- 2
  obstacle.lifetime = 300;
  obstaclesGroup.add(obstacle);
  
}
}
