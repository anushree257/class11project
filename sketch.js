var ship, ship_moving;
var sea, seaImage;

function preload(){
 ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  
  ship = createSprite(200,150,50,50);
  ship.addAnimation("sailing",ship_moving);
  ship.scale = 0.3;

  sea=createSprite(180,180);
  sea.addImage(seaImage);
  sea.scale = 0.2;
  sea.velocityX = -5;

}

function draw() {
  background("white");
  sea.depth = ship.depth;
  ship.depth = ship.depth+1;

  if(sea.x<0) {
    sea.x = 180;
  }
  

  drawSprites();
}