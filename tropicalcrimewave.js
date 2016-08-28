var HEIGHT_MAX = window.innerHeight;
var WIDTH_MAX = window.innerWidth;
var SIZE_MAX = 40;
var CIRCLES_MAX = 25;
var VELOCITY = 22;
var CICLOS = 0;
var c = document.getElementById('crimewave');
c.height = HEIGHT_MAX;
c.width = WIDTH_MAX;
var ctx = c.getContext('2d');
var circles = [];

function circle() {
	this.x = Math.floor((Math.random() * WIDTH_MAX) + 1);
	this.y = Math.floor((Math.random() * HEIGHT_MAX) + 1);
	this.r = Math.floor((Math.random() * SIZE_MAX) + 1);
}
function addCircle() {
	var cir = new circle;
	circles.push(cir);
}
function removeCircle() {
	for(var i = 0; i < (circles.length - CIRCLES_MAX); i++) {
		circles.pop();
	}
}
for(var i = 0; i < CIRCLES_MAX; i++) {
	addCircle();
}
function drawCrime() {
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	if(CICLOS == 10) {
		ctx.fillStyle = randColor(0, 0, 0, 255, 255, 255);
		CICLOS = 0;
	}
	ctx.rect(0, 0, WIDTH_MAX, HEIGHT_MAX);
	ctx.fill();
	CICLOS++;
	for(var i = 0; i < circles.length; i++) {
		ctx.beginPath();
		ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, 2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
	for(var i = 0; i < circles.length; i++) {
		ctx.beginPath();
		if(i == circles.length - 1) {
			var gradiente = ctx.createLinearGradient(10, 10, 10, HEIGHT_MAX);
			gradiente.addColorStop(0, randColor(0, 0, 0, 255, 255, 255));
			gradiente.addColorStop(1, randColor(0, 0, 0, 255, 255, 255));
			ctx.lineWidth = 2;
			ctx.strokeStyle = gradiente;
			ctx.moveTo(circles[0].x, circles[0].y);
			ctx.lineTo(circles[circles.length - 1].x, circles[circles.length - 1].y);
			ctx.stroke();
		}
		else {
			ctx.moveTo(circles[i].x, circles[i].y);
			ctx.lineTo(circles[i + 1].x, circles[i + 1].y);
			ctx.stroke();
		}
	}

	moveCrime();
	window.requestAnimationFrame(drawCrime);
}
function moveCrimeold() {
	var i = Math.floor((Math.random() * CIRCLES_MAX) + 0);
	var randDirection = Math.floor((Math.random() * 4) + 1);
			if(randDirection == 1)
				circles[i].x += VELOCITY;
			else if(randDirection == 2)
				circles[i].x -= VELOCITY;
			else if(randDirection == 3)
				circles[i].y += VELOCITY;
			else if(randDirection == 4)
				circles[i].y -= VELOCITY;
}
function moveCrime() {
	for(var i = 0; i < circles.length; i++) {
		var randDirection = Math.floor((Math.random() * 4) + 1);
		if(randDirection == 1)
			circles[i].x += VELOCITY;
		else if(randDirection == 2)
			circles[i].x -= VELOCITY;
		else if(randDirection == 3)
			circles[i].y += VELOCITY;
		else if(randDirection == 4)
			circles[i].y -= VELOCITY;
	}
}
function controls(circles_v) {
	CIRCLES_MAX = circles_v;
	removeCircle();
}
function randColor(rmin, gmin, bmin, rmax, gmax, bmax) {
	var r = Math.floor((Math.random() * rmax) + rmin);
	var g = Math.floor((Math.random() * gmax) + gmin);
	var b = Math.floor((Math.random() * bmax) + bmin);
	var color = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';

	return color;
}
window.requestAnimationFrame(drawCrime);