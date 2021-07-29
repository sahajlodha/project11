
function preload(){
  //pre-load images
Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");
bombImage = loadImage("bomb.png");
coinImage = loadImage("coin.png");
energyDrinkImage = loadImage("energyDrink.png");
powerImage = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  //for Runner
Runner = createSprite(100,100,30,15);
Runner.addAnimation("running",Runner_running);
Runner.scale=0.2;

//for road or path
path = createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4;
path.scale=1.2;

//creating invisible road
invisiblePath = createSprite(190,200,20,50);
invisiblePath.visible=false;
}

function draw() {
  background(0);
if(path.y > 400){
path.y=height/2;
}

drawSprites();
}
