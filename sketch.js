var mar,marImg;
var barco,barcoImg;

function preload(){
 marImg = loadImage("sea.png");
 barcoImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(800,400);
  
  mar= createSprite(200,200)
  mar.addImage(marImg)

  barco= createSprite(200,200)
  barco.addAnimation("barco navegando",barcoImg)
  barco.scale=0.5;

}

function draw() {
  background("blue");
    drawSprites();

 
}
