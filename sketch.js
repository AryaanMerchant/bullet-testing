
var  bullet,wall1;
var  speed,weight,thickness;
var car1;



function setup() {
  createCanvas(1200,400);

  
  

  bullet = createSprite(100, 200, 50, 10);
  bullet.shapeColor=("black");
  bullet.veloctyX=speed;

  wall1 = createSprite(900,200,thickness,height/2);
  wall1.shapeColor=("green");
  

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)


  boundary2 = createSprite(600, 10, 1200, 10);
  boundary3= createSprite(600, 390, 1200, 10);

boundary2.shapeColor=("green");
boundary3.shapeColor=("green");


}

function draw() {
  background("white");  
  drawSprites();
bullet.collide(wall1);

if(hascolided (bullet,wall1))
{                 
bullet.velocityX=0
var damage=0.5*weight*speed*speed/thickness*thickness*thickness

if(damage>0)
{
wall1.shapecolor=color(255,0,0);
}
if(damage<0)
{
wall.shapecolor=color(0,255,0)
}







}
}


function hascolided(lbullet,lwall){
bulletRightEdge= bullet.x+bullet.width
wall1.LeftEdge=wall.x
if(bulletRightEdge>=wall1LeftEdge)
{
return true
}
return false
}