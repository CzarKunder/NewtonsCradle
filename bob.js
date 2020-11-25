class Bob{
    constructor(x,y){
      var options={
        restitution:1.0,
        density:0.8,
        isStatic:true,
        }
        this.body=Bodies.circle(x,y,25,options)
         World.add(world,this.body)
         this.radius=25;
        
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}