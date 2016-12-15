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

	//Keeping the walls array size 2
	for(var i = walls.length - 1; i >= 0; i--){
		walls[i].show();
		walls[i].update();

		if(walls[i].offScreen()){
			walls.splice(i, 1);
		}
	}
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		bird.up();
	}
}
