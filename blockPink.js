class BlockPink{
    constructor(x, y, width, height){

        var options= {
            isStatic: false,
        }

        this.body= Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width=width;
        this.height=height;
    }

    display(){

        var pos=this.body.position;
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height)
    }
}