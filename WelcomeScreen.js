class WelcomeScreen {

constructor(){
this.practiceMode=createButton("PRACTICE")
this.trainingMode=createButton("TRAINING")
this.gameMode=createButton("FINAL MATCH")
this.image1=loadImage("Images/Wbckgrnd.jpg")
}

display(){
    image(this.image1,0,0,1200,1000)
    this.practiceMode.position(260,500);
     this.practiceMode.style('width', '200px');
      this.practiceMode.style('height', '40px');
     this.practiceMode.style('background', 'lightpink');
     this.trainingMode.position(460,500);
     this.trainingMode.style('width', '200px');
      this.trainingMode.style('height', '40px');
     this.trainingMode.style('background', 'lightpink');
     this.gameMode.position(660,500);
     this.gameMode.style('width', '200px');
      this.gameMode.style('height', '40px');
     this.gameMode.style('background', 'lightpink');
     this.practiceMode.mousePressed(()=>{
         this.practiceMode.hide();
         this.trainingMode.hide();
         this.gameMode.hide();
        
         appState=1
     })
     this.trainingMode.mousePressed(()=>{ 
         this.practiceMode.hide();
        this.trainingMode.hide();
        appState=2;
        this.gameMode.hide();})
     this.gameMode.mousePressed(()=>{
        this.practiceMode.hide();
        this.trainingMode.hide();
        this.gameMode.hide();
     })
}

}