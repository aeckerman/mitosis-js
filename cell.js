function Cell(pos, r, co) {
	if (pos) {
		this.pos = pos.copy();
	} else {
		this.pos = pos || createVector(random(width), random(height));
	}
	this.r = r || 80;
	this.co = co || color(0, random(100, 255), random(50, 100), 100);

	this.clicked = function(x, y) {
		var d = dist(this.pos.x, this.pos.y, x, y);

		if (d < this.r) {
			return true;
		} else {
			return false;
		}
	}

	this.mitosis = function() {
		this.pos.vel += random(10);
		var cell = new Cell(this.pos, this.r * 0.8, this.co);
		return cell;
	}

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
