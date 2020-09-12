var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(100,200, 50,20);
  bullet.shapeColor="white";
  

  wall=createSprite(1500,200,thickness,200);
  wall.shapeColor=(90,90,90);
}

function draw() {
  background(50);

  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    textSize(50);
    fill("white");
    text("Press 'r' to restart",600,100);
    var damage=0.5 * weight * speed * speed/thickness * thickness * thickness;

    if(damage>10){
       wall.shapeColor=color(300,0,0);
    }

    if(damage<10){
      wall.shapeColor=(0,300,0)
    }

    
  }
  
  if(keyDown("space")&& bullet.x===100){
    bullet.velocityX=speed;
  }

  if(keyDown("r")&& bullet.isTouching(wall)){
    bullet.x=100;
    bullet.y=200;
    wall.shapeColor=(90,90,90);
    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83);
    wall.width=thickness;
  }


  drawSprites();
    
  if(bullet.x===100){
    textSize(50);
    fill("white");
    text("Press 'Space' to start",600,100);
  }
  textSize(40);
  text("Damage : "+round(damage),100,100);
  
}