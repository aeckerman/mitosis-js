function Cell() {
	this.pos = createVector(random(width), random(height));
	this.r = 80;
	this.co = color(0, random(100, 255), random(50, 100));

	this.move = function() {
		var vel = p5.Vector.random2D();
		this.pos.add(vel);
	}

	this.show = function() {
		noStroke();
		fill(this.co);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}
}