var HEIGHT_MAX = window.innerHeight - 10;
var WIDTH_MAX = window.innerWidth;
var INTERVAL = 20;
var c = document.getElementById('crimewave');
c.height = HEIGHT_MAX;
c.width = WIDTH_MAX;
var ctx = c.getContext('2d');
var circles = [];
function circle() {
	this.x = Math.floor((Math.random() * WIDTH_MAX) + 1);
	this.y = Math.floor((Math.random() * HEIGHT_MAX) + 1);
	this.r = 2;
}
function addCircle() {
	var cir = new circle;
	circles.push(cir);
}

addCircle();
addCircle();
addCircle();
addCircle();
addCircle();
addCircle();

for(var i = 0; i < circles.length; i++) {
	ctx.beginPath();
	ctx.arc(circles[i].x, circles[i].y, circles[i].r, 1, 2*Math.PI);
	ctx.fill();
}