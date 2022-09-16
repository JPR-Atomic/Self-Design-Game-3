var background_img
var soilder_img
var zombie
var gunshot

function preload() {
background_img1 = loadImage("background.png")
soilder_img = loadImage("soilder.jpeg")

gunshot = loadAnimation("gunshot1.png","gunshot2.png","gunshot3.png","gunshot4.png")
zombie = loadAnimation("zombie_walk1.png","zombie_walk2.png","zombie_walk3.png","zombie_walk4.png","zombie_walk5.png","zombie_walk6.png","zombie_walk7.png","zombie_walk8.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  soilder = createImg("soilder.jpeg")
  soilder.position(50,50)
  soilder.size(50,50)

  

}

function draw() {
background(background_img1)
  if(keyDown("space")){
    shoot()
  }

  drawSprites()
}

function shoot(){
  gunshot = createSprite(150, width/2, 50,20)
  gunshot.y= soilder.y-20
  gunshot.addAnimation("gun_shooting",gunshot)
  gunshot.scale=0.12
  gunshot.velocityX= 7
  gunshotGroup.add(gunshot)
}