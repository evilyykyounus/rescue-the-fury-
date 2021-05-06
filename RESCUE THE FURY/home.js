class home{
    constructor(){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(50,50,80,80,options)
this.image=loadImage("images/download.png")
World.add(world,this.body)
    }
    display () {
       image(this.image,this.body.position.x,this.body.position.y,80,80)
    }
}