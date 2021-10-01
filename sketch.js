var i_jungle
 var ground;
 var i_monkey
function preload(){
i_jungle = loadImage("jungle.jpg");
i_monkey = loadImage("ali.png");
i_croc = loadImage("crocodile.png");
i_tiger= loadImage("tiger.png")
}

function setup() {
  createCanvas(1200,600);
  stroke("black")
 ground = createSprite(600,550,5000,100);
 ground.shapeColor ='green';
 monkey = createSprite(100,500);
 monkey.addImage('**%#',i_monkey);
 monkey.scale = 0.4
}

function draw() {
  background(i_jungle);  
  ground . velocityX = -10
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  Crocodile();
  Tiger();
  drawSprites();
}