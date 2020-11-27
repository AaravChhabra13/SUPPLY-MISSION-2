class Ground{

    constructor(x,y,width,height){

        var groundopts={
            isStatic:true
        }

        this.width=width;
        this.height=height;

        this.ground=Bodies.rectangle(x,y,width,height,groundopts);
        World.add(world,this.ground);
    }

    display(){
        rectMode(CENTER);

        var pos=this.ground.position;

        

        rect(pos.x,pos.y,this.width,this.height);
    }
}