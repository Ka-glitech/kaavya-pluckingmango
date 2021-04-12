class Tree{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = 450;
        this.height = 600;
        this.thickness=10
        this.body = Bodies.rectangle(x, y, width, this.thickness, options);
        
        this.image = loadImage("tree.png");
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        // tree.scale=0.6;
      }
}