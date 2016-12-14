function Wall(){
	this.top = random(height/2);
	this.bottom = random(height/2);
	this.x = width;
	this.speed = 5;

	this.show = function(){
		fill(255);
		rect(this.x, 0, 20, this.top);
		rect(this.x, height - this.bottom, 20, this.bottom);
	}

	this.update = function(){
		this.x = this.x - this.speed;
	}
}