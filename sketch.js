var movingRect;
var fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400,800,50,80);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;
  movingRect.velocityY = -4
  fixedRect.velocityY = 4

}

function draw() {
  background("black");  

  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;


  // if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  //   && fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.width/2
  //   && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  //   fixedRect.y-movingRect.y <fixedRect.height/2 + movingRect.height/2 ){
  //   movingRect.shapeColor = "green";
  // fixedRect.shapeColor = "green";
  // } else{
  //   movingRect.shapeColor = "blue";
  //   fixedRect.shapeColor = "blue";
  // }
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x-movingRect.x <fixedRect.width/2 + movingRect.width/2){
        movingRect.velocityX = movingRect.velocityX * (-1)
        fixedRect.velocityX = fixedRect.velocityX * (-1)
      }
      if(movingRect.y- fixedRect.y < fixedRect.height/2 + movingRect.height/2
        && fixedRect.y-movingRect.x <fixedRect.height/2 + movingRect.height/2){
          movingRect.velocityY = movingRect.velocityY * (-1)
          fixedRect.velocityY = fixedRect.velocityY * (-1)
        }
      

  drawSprites();
}
