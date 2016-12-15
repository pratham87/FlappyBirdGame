var bird;
var walls = [];

function setup() {
	createCanvas(600, 600);
	bird = new Bird();
	walls.push(new Wall());
}

function draw(){
	background(51);

	//Keeping the walls array size 2
	for(var i = walls.length - 1; i >= 0; i--){
		walls[i].show();
		walls[i].update();

		if(walls[i].hit(bird)){
			console.log("Collision Occured");
		}
		// else{
		// 	fill('rgb(0,255,0)');
		// 	walls[i].score();
		// }

		//Once the wall is offscreen then delete it from walls array
		if(walls[i].offScreen()){
			walls.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if(frameCount % 100 == 0){
		walls.push(new Wall());
	}
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		bird.up();
	}
}
