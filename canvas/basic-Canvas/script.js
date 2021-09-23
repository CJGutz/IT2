var canvas = document.querySelector("#mittCanvas");
var ctx = canvas.getContext("2d");

ctx.fillRect(20, 20, 100, 50);

ctx.fillStyle = "red";
ctx.fillRect(40, 40, 100, 50);

ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeRect(60, 60, 100, 50);

ctx.clearRect(80, 80, 100, 50);

// linje figur
ctx.beginPath();
ctx.moveTo(450, 20);
ctx.lineTo(480, 60);
ctx.lineTo(350, 100);
ctx.lineTo(410, 250);

ctx.stroke();
ctx.fill()

// ny figur
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = "green";
ctx.moveTo(250, 200);
ctx.lineTo(180, 250);
ctx.lineTo(300, 290);

ctx.stroke();
ctx.fill()

// sirkel
var x = canvas.width / 2
var y = canvas.height / 2

ctx.beginPath()
ctx.fillStyle = "red"
ctx.arc(x, y, 50, 0, Math.PI * 2)
ctx.fill()

x = canvas.width * 0.25
y = canvas.height * 0.75
ctx.strokeStyle = "black"
ctx.lineWidth = 5
ctx.fillStyle = "green"

ctx.beginPath()
ctx.arc(x, y, 50, 0, Math.PI / 2, true)
ctx.lineTo(x, y)
ctx.fill()