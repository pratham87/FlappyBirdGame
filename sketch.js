var bird;
var walls = [];

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	walls.push(new Wall());
}

function draw(){
	background(51);
	bird.update();
	bird.show();

	for(var i = 0; i < walls.length; i++){
		walls[i].show();
		walls[i].update();
	}
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		bird.up();
	}
}