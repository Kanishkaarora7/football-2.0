class Chain {
    constructor(a,b){
var option={
    bodyA:a,
    pointB:b,
    length:15,
    stiffness:0.1
}
this.chain=Matter.Constraint.create(option)
console.log(this.chain)
World.add(world,this.chain)
    }
   Show(){
       
  if (this.chain.bodyA!=null){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
  }
    }
}
