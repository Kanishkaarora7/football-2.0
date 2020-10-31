class  Trash {
    constructor(x,y){
       
    
      
       
        var ground_options ={
            restitution:1.0
        }
    
        this.body = Bodies.rectangle(x,y,20,20,ground_options);
        this.width=20;
        this.height=20;
     
        World.add(world,this.body);
    
    }
    
  display(){
       push ()
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       rectMode(CENTER)
       fill('black')
      stroke ('red')
       rect(0,0,this.width,this.height);
    pop ()
} 
}
       
    
   