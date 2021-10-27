var bg_img;
var web_img;
var treasure_img, treasure1_img;
var skeleton_img, skeleton2_img;
var pirate_img;
var pirate1_img;
var treasurebox;
var pirate;
var pirate_animation;
var skeleton;
var maze_img;
var sword=0;
var web1_destroyed=0;
var web2_destroyed=0;
var web3_destroyed=0;
var web4_destroyed=0;
var empty_img;
var lives=3;
var score=0;
var overSound;
function preload(){

  bg_img=loadImage("images/brownpath.jpg");
  web_img=loadImage("images/swb.png");
  treasure_img=loadImage("images/treasyre.png");
  treasure1_img=loadImage("images/uh.png");
  skeleton_img=loadImage("images/ghost11.png");
  skeleton2_img=loadImage("images/ghost22.png")
  pirate_img=loadImage("images/jake1.png");
  pirate1_img=loadImage("images/jake11.png");
  pirate_animation=loadAnimation(pirate_img, pirate1_img);
  maze_img=loadImage("images/grass1.png");
  empty_img=loadImage("images/empty.png");
  overSound=loadSound("bandvibrate.mp3")

}
function setup() {
  createCanvas(1500,800);
  treasurebox1=createSprite(70,70);
  treasurebox1.addImage(treasure1_img);
  treasurebox1.scale=0.4;
  
  
  treasurebox2=createSprite(width-90,height-750);
  treasurebox2.scale=0.4;
  treasurebox3=createSprite(width-70,height-330);
  treasurebox3.scale=0.4;
  treasurebox4=createSprite(50,550);
  treasurebox4.scale=0.4;

  
 treasurebox1.addImage(treasure1_img);
treasurebox2.addImage(treasure1_img);
treasurebox3.addImage(treasure1_img);
treasurebox4.addImage(treasure1_img);

  web1=createSprite(40,20,100,50);
  //web1.debug=false;
  web1.setCollider("circle",0,0,160);
  web2=createSprite(width-30,height-750,20,20);
  web2.debug=true;
  web2.setCollider("rectangle",0,0,330,270);
  
  web3=createSprite(width-70,height-300,20,20);
  web3.setCollider("circle",0,0,160);
  web4=createSprite(40,600,50,40);

  web1.addImage(web_img);
  web2.addImage(web_img);
  web3.addImage(web_img);
  web4.addImage(web_img);
 
  
  pirate=createSprite(850,225);
 pirate.addImage(pirate1_img)
 pirate.scale=0.4;

 

 pirate.debug=false;
 pirate.setCollider("rectangle",0,0,200,200);
 //treasurebox2.debug=true;
 treasurebox1.setCollider("rectangle",0,0,300,300);
 treasurebox2.setCollider("rectangle",0,0,200,200);


 wall1=createSprite(350,440,400,10);
 //wall1.addImage(maze_img);
 wall2=createSprite(300,350,10,170);
 wall3=createSprite(400,130,440,10);
 wall4=createSprite(370,600,350,10);
 wall5=createSprite(1070,610,420,10);
 wall6=createSprite(1000,20,450,10); 
 wall7=createSprite(1070,450,420,10); 
 wall8=createSprite(1000,160,450,10);
 wall9=createSprite(550,370,10,170);
 wall10=createSprite(600,280,240,10);
 wall11=createSprite(180,280,240,10);
 wall12=createSprite(200,210,10,150);
 //wall13=createSprite(950,90,10,160);
 wall14=createSprite(720,400,10,250);
 wall15=createSprite(970,310,500,10);
 wall16=createSprite(60,350,10,180);
 wall17=createSprite(790,160,30,10);
 wall18=createSprite(1400,430,300,10);
 wall19=createSprite(400,2,400,10);
wall1.shapeColor="black";
wall2.shapeColor="black";
wall3.shapeColor="black";
wall4.shapeColor="black";
wall5.shapeColor="black";
wall6.shapeColor="black";
wall7.shapeColor="black";
wall8.shapeColor="black";
wall9.shapeColor="black";
wall10.shapeColor="black";
wall11.shapeColor="black";
wall12.shapeColor="black";
//wall13.shapeColor="black";
wall14.shapeColor="black";
wall15.shapeColor="black";
wall16.shapeColor="black";
wall17.shapeColor="black";
wall18.shapeColor="black";
wall19.shapeColor="black";
skeleton=createSprite(965,85);
 skeleton.addImage(skeleton_img);
 skeleton.scale=0.2;
 skeleton.velocityY=3;

 skeleton1=createSprite(550,40);
 skeleton1.addImage(skeleton_img);
 skeleton1.scale=0.2;
 skeleton1.velocityY=3;

 skeleton2=createSprite(520,530);
 skeleton2.addImage(skeleton_img);
 skeleton2.scale=0.2;
 skeleton2.velocityY=3;

 skeleton3=createSprite(960,540);
 skeleton3.addImage(skeleton_img);
 skeleton3.scale=0.2;
 skeleton3.velocityY=3;
 skeleton3.debug=false;
 web2.debug=false;
 

}

function draw() {
  background("brown"); 
  textSize(20);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("Lives: " + lives,700,20);

  textSize(15);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("Score: " + score,700,40);

 // console.log(mouseX,mouseY);
  skeleton.bounceOff(web2);
  skeleton.bounceOff(wall6);
  skeleton.bounceOff(wall8);
  skeleton1.bounceOff(wall3);
  skeleton1.bounceOff(wall19);
  skeleton1.bounceOff(web1);
  skeleton2.bounceOff(web4);
  skeleton2.bounceOff(wall1);
  skeleton2.bounceOff(wall4);
  
  skeleton3.bounceOff(wall5);
  skeleton3.bounceOff(wall7);
  
  if(frameCount%100==0)
  {
  skeleton.x=Math.round(random(940,1200));
  }

  if(frameCount%100==0){
    skeleton1.x=Math.round(random(180,580))
  }

  if(frameCount%100==0){
    skeleton2.x=Math.round(random(350,500))
  }

  if(frameCount%100==0){
    skeleton3.x=Math.round(random(960,1000))
  }
  pirate.velocityX=0;
  pirate.velocityY=0;
  createEdgeSprites();
  //pirate.bounceOff(edges);
  pirate.bounceOff(wall1);
  pirate.bounceOff(wall2);
  pirate.bounceOff(wall3);
  pirate.bounceOff(wall4);
  pirate.bounceOff(wall5);
  pirate.bounceOff(wall6);
  pirate.bounceOff(wall7);
  pirate.bounceOff(wall8);
  pirate.bounceOff(wall9);
  pirate.bounceOff(wall10);
  pirate.bounceOff(wall11);
  pirate.bounceOff(wall12);
  //pirate.bounceOff(wall13);
  pirate.bounceOff(wall14);
  pirate.bounceOff(wall15);
  pirate.bounceOff(wall16);
  pirate.bounceOff(wall17);
  pirate.bounceOff(wall18);
  

  if(keyWentDown('a'))
  {
    pirate.addImage(pirate_img);
    pirate.scale=0.2;
    sword=1;
  }
  else if(keyWentUp('a'))
  {
    console.log("pirae")
    pirate.addImage(pirate1_img);
    pirate.scale=0.4;
    sword=0;
  }
  console.log('sword'+sword)
     /* if(keyDown(UP_ARROW))
      {
        pirate.y= pirate.y-10;
        
      }
      if(keyDown(DOWN_ARROW))
      {
        pirate.y= pirate.y+10;
        
      }
      */
     if(keyDown("space"))
     {
       pirate.velocityY=-5;
     }
     //gravity 
     pirate.velocityY=pirate.velocityY+1.4;
      if(keyDown(LEFT_ARROW))
      {
        pirate.x= pirate.x-10;
        
      }
      if(keyDown(RIGHT_ARROW))
      {
        pirate.x= pirate.x+10;
        
      }
  
  if(pirate.isTouching(web1) && sword==1)
    {
      web1.destroy();
    web1_destroyed=1;
    }
    if(pirate.isTouching(treasurebox1) && web1_destroyed==1 )
    {
      treasurebox1.addImage(treasure_img);
      score=score+10;
      pirate.x=850
      pirate.y=225
    } 
   


    if(pirate.isTouching(web2) && sword==1)
    {
      web2.destroy();
    web2_destroyed=1;
    }

    if(pirate.isTouching(treasurebox2) && web2_destroyed==1 )
    {
      treasurebox2.addImage(treasure_img);
      //treasurebox2.scale=0.3;
     
    
      score=score+10;
      pirate.x=850
      pirate.y=225
    
      
    } 
   

  if(pirate.isTouching(skeleton)){

    if(sword==1){

      skeleton.destroy();
      
    }
    
    else{
      lives=lives-1;
      pirate.x=850;
      pirate.y=225;
      overSound.play();
      
    }
    
  }

  if(pirate.isTouching(skeleton1)){

    if(sword==1){

      skeleton1.destroy();
    
    }
    
    else{
      lives=lives-1;
      pirate.x=850;
      pirate.y=225;
      overSound.play();
    }
    
  }

  if(pirate.isTouching(skeleton2)){

    if(sword==1){

      skeleton2.destroy();
    
    }
    
    else{
      lives=lives-1;
      pirate.x=850;
      pirate.y=225;
      overSound.play();
    }
    
  }
  if(pirate.isTouching(skeleton3)){

    if(sword==1){

      skeleton3.destroy();

    }
    
    else{
      lives=lives-1;
      pirate.x=850;
      pirate.y=225;
      overSound.play();
    }
    
  }
  
  if(pirate.isTouching(web3) && sword==1)
    {
      web3.destroy();
    web3_destroyed=1;
    }
    if(pirate.isTouching(treasurebox3) && web3_destroyed==1 )
    {
      treasurebox3.addImage(treasure_img);
      score=score+10;
      pirate.x=850
      pirate.y=225
    } 
    
    if(pirate.isTouching(web4) && sword==1)
    {
      web4.destroy();
    web4_destroyed=1;
   
    }

    if(pirate.isTouching(treasurebox4) && web4_destroyed==1 )
    {
      treasurebox4.addImage(treasure_img);
      treasurebox4.scale=0.4;
    
      score=score+10;
      pirate.x=850
      pirate.y=225
    } 

    if(pirate.isTouching(skeleton)){
      overSound.play();
    }

    if(pirate.isTouching(skeleton1)){
      overSound.play();
    }
    if(pirate.isTouching(skeleton2)){
      overSound.play();
    }
    if(pirate.isTouching(skeleton3)){
      overSound.play();
    }    

  if(keyDown('w')){
  skeleton.addImage(skeleton2_img);
  skeleton1.addImage(skeleton2_img);
  skeleton2.addImage(skeleton2_img);
  }
  else{
  skeleton.addImage(skeleton_img);
  skeleton1.addImage(skeleton_img);
  skeleton2.addImage(skeleton_img);
  }
 
  if(pirate.isTouching(skeleton)){

    lives=lives-1;
  }

  if(pirate.isTouching(skeleton1)){

    lives=lives-1;
  }
  if(pirate.isTouching(skeleton2)){

    lives=lives-1;
  }
  if(pirate.isTouching(skeleton3)){

    lives=lives-1;
  }

 
drawSprites();
if(lives<=0)
{
  background("black");
  textSize(50);
  stroke("white");
  strokeWeight(5);
  text("GAME OVER!!!!!!!",displayWidth/2,displayHeight/2);
}
}

