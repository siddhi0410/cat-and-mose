var bg,catimg1,catimg2,cat,mouse,mouseimg1,mouseimg2;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catimg1 = loadImage("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadImage("images/cat4.png");
    mouseimg1 = loadImage("images/mouse1.png");
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(870,600);
  cat.addImage(catimg1);
  cat.scale = 0.2;

  mouse = createSprite(200,600);
  mouse.addImage(mouseimg1);
  mouse.scale = 0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX = 0;
    cat.addImage(catimg3);
    cat.x = 300;
    
    mouse.addImage(mouseimg3);
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

}

}
