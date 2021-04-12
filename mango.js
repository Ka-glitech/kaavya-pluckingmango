class Mango{ 
    constructor(x,y,r) { 
      var options={ 
        isStatic:true,
        restitution:0,
         friction:1, 
           } 
         this.x=x;
         this.y=y;
          this.r=r
          this.image = loadImage("mango.png");
          this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options) 
          World.add(world, this.body);
        }
         display() {
            var rubberpos=this.body.position;
             push() 
             translate(rubberpos.x, rubberpos.y);
             // rectMode(CENTER) 
             imageMode(CENTER);
              strokeWeight(4);
               stroke("black");
                fill("darkblue"); 
                image(this.image,0,0,this.r, this.r);
                 pop() 
                } 
              }