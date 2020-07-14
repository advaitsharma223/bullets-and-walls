
var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random (223, 321);
  weight = random (30, 52);
  thickness = random (22, 83);

  bullet = createSprite(50, 200, 30, 15);
  bullet.velocityX = speed;
  console.log(weight);
  console.log(speed);  
  console.log(thickness);
  console.log(bullet.shapeColor);
  bullet.shapeColor = color("white");

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0);  
  
  bullet.collide(wall);

  if (wall.x - bullet.x < (bullet.width + wall.width)/2) {

    speed = 0;

    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness 

    if(damage > 10) {

      bullet.shapeColor = color("red");
    } else if (damage < 10) {

      bullet.shapecolor = color("green");
    }
    
  }

  drawSprites();
}