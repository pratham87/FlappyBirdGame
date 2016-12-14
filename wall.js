function Wall(){
	this.top = random(height/2);
	this.bottom = random(height/2);

	this.show(){
		fill(255);
		rect();
	}
}