var HEIGHT_MAX = window.innerHeight;
var WIDTH_MAX = window.innerWidth;
var SIZE_MAX = 10;
var CIRCLES_MAX = 100;
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
}
drawCrime();