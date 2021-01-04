class Drop{
    constructor(x,y){
        var options = {
        restitution: 1,
         friction: 0.2,
            
        }
        this.body = Bodies.circle(x,y,5,options)
    
        World.add(world,this.body)
    }
    



display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    ellipse(0,0,5,5)
    stroke(25,25,255)
    pop()
}

update(){
    if(this.body.position.y > 1000){
     Matter.Body.setPosition(this.body, {x:random(0,1000), y:random(0,1000)})
    }
    
}
}