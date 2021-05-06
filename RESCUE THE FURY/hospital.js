class hospital{
    constructor(){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(100,50,80,80,options)
        this.width=80;
        this.height=80;
        this.image=loadImage("images/vetHospital.jpg")
World.add(world,this.body)

    }
    display () {
        image(this.image,this.body.position.x,this.body.position.y,80,80)
    }
}