var bg, bgsprite
var heart1, heart2, heart3
var shooter1, shootershoot, zombie
var explosion, lose, win

function preload(){
  bg = loadImage("assets/bg.jpeg")
  heart1 = loadImage("assets/heart_1.png")
  heart2 = loadImage("assets/heart_2.png")
  heart3 = loadImage("assets/heart_3.png")
  shooter1 = loadAnimation("assets/shooter_1.png","assets/shooter_2.png")
  shootershoot = loadImage("assets/shooter_3.png")
  zombie = loadImage("assets/zombie.png")
  explosion = loadSound("assets/explosion.mp3")
  lose = loadSound("assets/lose.mp3")
  win = loadSound("assets/win.mp3")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  bgsprite = createSprite(displayWidth/2,displayHeight/2,50,50)
  bgsprite.addImage(bg)
  bgsprite.scale = 1.2
}

function draw(){
  drawSprites()
}