var c;

function setup() {
	createCanvas(400, 400);
	c = new Cell;
}

function draw() {
	background(51);
	c.move();
	c.show();
}