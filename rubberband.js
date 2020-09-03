class Rubberband{

constructor(body1,body2){

var op = {
bodyA : body1,
bodyB : body2,
length : 30,
stiffness : 0.1,
}
this.attachment = Matter.Constraint.create(op);
World.add(world,this.attachment);
}
display(){
var point1 = this.attachment.bodyA.position;
var point2 = this.attachment.bodyB.position;
push();
strokeWeight(5);
line(point1.x,point1.y,point2.x,point2.y);
 pop();   
}
}