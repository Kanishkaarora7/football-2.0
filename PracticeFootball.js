class PracticeFootball{

constructor(){
this.image=loadImage("Images/background.jpg")

}

practiceGame(){
    image(this.image,0,0,1200,1000)
  
if (keyWentDown("space")&&gameState==="start"){
soccer.velocityX=4
soccer.velocityY=0
gameState="play"
}
if(gameState==="play"){

if(soccer.isTouching(pPlayer20)) {

if(keyWentDown("UP_ARROW")){
pPlayer20.velocityY=-5
soccer.velocityY=-5
}
if(keyWentDown("DOWN_ARROW")){
    pPlayer20.velocityY=+5
    soccer.velocityY=+5
    }
    if(keyWentDown("LEFT_ARROW")){
        pPlayer20.velocityX=5
        soccer.velocityX=+5
        }
        if(keyWentDown("RIGHT_ARROW")){
            pPlayer20.velocityX=-5
            soccer.velocityX=-5
            }

}
                               
}




 drawSprites()
}

}