class Bob{

    constructor(x,y,r){
    
    
        var options = { 
             isStatic : false ,
            restitution :  1.2 , 
            friction : 0.5, 
            density: 2
            
        }
    
     this.x = x;
     this.y = y;
    this.r = r;
    
    
    
    
    this.body = Bodies.circle(this.x,this.y, this.r/2,options);
    
    //this.image = loadImage("paper.png")
   // this.r = 70;
    
    World.add(world,this.body);
        
        
    
    
    
    
    
    
    
    
    
    
    
    }
    
    display(){
    
        var pos = this.body.position
    
        push();
        translate(pos.x,pos.y)
        fill("red");
        ellipseMode(CENTER);
       // strokeWeight(3)
       ellipse(0,0,this.width,this.height)
    
        
    
    pop();
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }
    
    