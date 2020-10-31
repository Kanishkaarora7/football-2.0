class Circle {
    constructor(x,y,width,height){

     this.body = Bodies.rectangle(x,y,width,heigth);
        this.width=width;
        this.height=height;
       
        World.add(world,this.body);
    
    }
    
  Basedisplay(){
       push ()
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       rectMode(CENTER)
       fill('white')
      stroke ('red')
       rect(this.rectangle,0,0,this.width,this.height);
    pop ()
} 
}
