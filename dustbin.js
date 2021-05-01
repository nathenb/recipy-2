class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=400;
		this.dustbinHeight=200;
		this.wallThickness=80;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.bottomBody2=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		
		
		
		World.add(world, this.bottomBody)
		World.add(world, this.bottomBody2)
		
	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posBottom=this.bottomBody2.position;
			
			

			

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke('red')
			angleMode(RADIANS)
			fill('red')
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke('blue')
			angleMode(RADIANS)
			fill('red')
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()

			
			
	}

}