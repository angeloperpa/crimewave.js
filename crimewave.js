var HEIGHT_MAX = window.innerHeight;
var WIDTH_MAX = window.innerWidth;
var SIZE_MAX = 6;
var CIRCLES_MAX = 100;
var VELOCITY = 4;
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
for(var i = 0; i < CIRCLES_MAX; i++) {
	addCircle();
}
function drawCrime() {
	ctx.clearRect(0, 0, c.width, c.height);
	for(var i = 0; i < circles.length; i++) {
		ctx.beginPath();
		ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, 2*Math.PI);
		ctx.stroke();
		ctx.fill();
	}
	for(var i = 0; i < circles.length - 1; i++) {
		ctx.beginPath();
		ctx.moveTo(circles[i].x, circles[i].y);
		ctx.lineTo(circles[i + 1].x, circles[i + 1].y);
		ctx.stroke();
	}
	moveCrime();
	window.requestAnimationFrame(drawCrime);
}
function moveCrime() {
	var i = Math.floor((Math.random() * (CIRCLES_MAX - 1)) + 1);
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
window.requestAnimationFrame(drawCrime);