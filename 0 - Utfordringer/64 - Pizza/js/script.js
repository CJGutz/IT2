var canvas = document.querySelector("#c1");
var c = canvas.getContext("2d");

var x = canvas.width / 2
var y = canvas.height / 2

//deig
c.beginPath()
c.strokeStyle = "rgb(121, 80, 34)"
c.lineWidth = 20
c.fillStyle = "sandybrown"
c.arc(x, y, 150, 0, Math.PI / 4)
c.stroke()
c.lineWidth = 1
c.lineTo(x, y)
c.lineTo(x + 150, y)
c.stroke()
c.fill()

//pepperoni
c.beginPath()
c.fillStyle = "brown    ";
c.arc(x + 50, y + 20, 10, 0, Math.PI * 2);
c.fill();
c.beginPath()
c.arc(x + 120, y + 30, 10, 0, Math.PI * 2);
c.fill();
c.beginPath()
c.arc(x + 80, y + 60, 10, 0, Math.PI * 2);
c.fill()