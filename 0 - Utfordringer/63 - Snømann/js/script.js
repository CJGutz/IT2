var canvas = document.querySelector("#c1");
var c = canvas.getContext("2d");

var x = canvas.width / 2
var y = canvas.height / 2

c.fillStyle = "white";
c.strokeStyle = "black";
c.lineWidth = 3;

// bakgrunn
c.beginPath()
c.fillRect(0, 300, canvas.width, canvas.height)
c.strokeRect(0, 300, canvas.width, canvas.height)
c.stroke()

// nedre del
c.beginPath()
c.arc(x, y + 100, 60, 0, Math.PI * 2)
c.fill()
c.stroke()

// midtre del
c.beginPath()
c.arc(x, y + 50, 50, 0, Math.PI * 2)
c.fill()
c.stroke()

// hode
c.beginPath()
c.arc(x, y, 40, 0, Math.PI * 2)
c.fill()
c.stroke()

// Øyne
c.fillStyle = "black"
c.beginPath()
c.arc(x - 20, y - 5, 4, 0, Math.PI * 2)
c.fill()
c.stroke()
c.beginPath()
c.arc(x + 10, y - 10, 4, 0, Math.PI * 2)
c.fill()
c.stroke()

// gulrot
c.fillStyle = "orange"
c.beginPath()
c.arc(x, y + 15, 10, Math.PI * 2/3, Math.PI * 7/4)
c.lineTo(x+15,y+30)
c.lineTo(x - 6,y + 24)
c.fill()
c.stroke()