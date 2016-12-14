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

	if(frameCount % 100 == 0){
		walls.push(new Wall());
	}

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
