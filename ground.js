class ground {
    constructor(x,y,width,height){
        var ground_options ={
            isStatic:true
        }
    
        this.ground1 = Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width;
        this.height=height;
        
        World.add(world,this.ground1);
    
    }
    
   display(){
       fill('brown')
       rectMode(CENTER);
    rect(this.ground1.position.x,this.ground1.position.y,this.width,this.height);
} 
}
