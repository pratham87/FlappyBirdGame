var bird;

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
}

function draw(){
	background(51);
	bird.update();
	bird.show();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		bird.up();
	}
}