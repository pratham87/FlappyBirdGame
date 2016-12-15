function Bird(){
	this.y = height/2;
	this.x = 50;
	this.gravity = 1;
	this.velocity = 0;
	this.jump = 5;

	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 20, 20);
	}

	this.update = function(){
		this.velocity = this.velocity + this.gravity/10;
		this.y = this.y + this.velocity;
		// this.velocity++;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}

		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}

	}

	this.up = function(){
		this.velocity = this.velocity - this.jump;
		// this.y = this.y + 50;
	}
}
