class Rope {
    constructor(bodyA, bodyB,offsetX,offsetY) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope)
        this.offsetX=offsetX;
        this.offsetY=offsetY;
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB= this.rope.bodyB.position;
        stroke("white");
        line(pointA.x+this.offsetX,pointA.y+this.offsetY,pointB.x,pointB.y);
    }
}