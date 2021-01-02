class Baseclass{
    constructor(x,y,width,height,angle){
        //properties 
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(MyWorld,this.body);
    this.width=width;
    this.height=height;
    this.image=loadImage("sprites/Base.png")
    }
//functions
  display(){

    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS)
    
    rotate (angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height)
      
     
      pop ();
 
  }
}