const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var welcomeScreen,appState=0;
var pPlayer1,pPlayer2, pPlayer3, pPlayer4, pPlayer5, pPlayer6, pPlayer7, pPlayer8, pPlayer9, pPlayer10, pPlayer11, pPlayer12, pPlayer13, pPlayer14, pPlayer15, pPlayer16, pPlayer17, pPlayer18, pPlayer19, pPlayer20, pPlayer21, pPlayer22,pBall
var practiceFootball,soccer
var football
var gameState="start"
function preload(){
  football=loadImage("Images/fb.png")
 
 
}


function setup() {
  createCanvas(1200,1000);
  engine = Engine.create();
  world = engine.world;
  pPlayer1=createSprite(70,500,20,20) 
  pPlayer2=createSprite(230,500,20,20) 
  pPlayer3=createSprite(250,250,20,20) 
  pPlayer4=createSprite(250,750,20,20) 
  pPlayer5=createSprite(350,380,20,20) 
  pPlayer6=createSprite(350,620,20,20) 
  pPlayer7=createSprite(450,300,20,20) 
  pPlayer8=createSprite(450,700,20,20) 
  pPlayer9=createSprite(460,500,20,20) 
  pPlayer10=createSprite(550,250,20,20) 
  pPlayer11=createSprite(550,750,20,20) 
  pPlayer12=createSprite(1130,500,20,20) 
  pPlayer13=createSprite(970,500,20,20) 
  pPlayer14=createSprite(950,250,20,20) 
  pPlayer15=createSprite(950,750,20,20) 
  pPlayer16=createSprite(850,380,20,20) 
  pPlayer17=createSprite(850,620,20,20) 
  pPlayer18=createSprite(750,300,20,20) 
  pPlayer19=createSprite(750,700,20,20) 
  pPlayer20=createSprite(760,500,20,20) 
  pPlayer21=createSprite(650,250,20,20) 
  pPlayer22=createSprite(650,750,20,20) 
 welcomeScreen = new WelcomeScreen() 
 practiceFootball=new PracticeFootball()
 soccer=createSprite(615,500,30,30)
 soccer.scale=0.4
 soccer.addImage(football)
 tTarget1=new tTarget(40,100,60,100)
tTarget2= new tTarget(100,40,60,100)
tTarget3=new tTarget(80,120,60,100)
trainingFootball=new TrainingFootball()

engine = Engine.create();
world = engine.world;
groundClass=new ground(600,390,1200,20)
trashClass=new Trash(20,20)
chainClass=new Chain(trashClass.body,{x:200,y:50})
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  
 if (appState===0){
   welcomeScreen.display()
 }
 else if(appState===1){
  practiceFootball.practiceGame()
 }
 else if(appState===2){
   trainingFootball.trainingGame()
 }

 
}

function mouseDragged(){
  trashClass.body.position.x=mouseX
 trashClass.body.position.y=mouseY  
}
function mouseReleased(){
  chainClass.chain.bodyA=null
}