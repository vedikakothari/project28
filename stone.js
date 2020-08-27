class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.stone = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.stone);

    }
display(){
    var pos = this.stone.position;
    var angle = this.stone.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}