class Stone{
     constructor(x, y){
       var options = {
         isStatic: false, 
         restitution: 0,
         friction: 1,
         density: 1.2
       }
       this.body= Bodies.circle(x, y, 10, options);
       this.radius=30;
       this.image = loadImage("stone.png");
       World.add(world, this.body);
     }
     display(){
        var pos = this.body.position;
       
        translate(pos.x,pos.y);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        
     }
 }
 