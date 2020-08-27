class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }

        this.mango = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world,this.mango);

    }
display(){
    var pos = this.mango.position;
    var angle = this.mango.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}