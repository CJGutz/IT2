var canvas = document.querySelector("#c1")
var c = canvas.getContext("2d");

var T = [310, 315, 380, 377, 380, 450, 460, 468, 490, 485]
var x = 0;
var y = canvas.height - 50;

// tegner graf
c.textAlign = "center"
for (var i = 0; i < T.length; i++) {
    x = 25 + i * canvas.width / T.length;
    c.fillStyle = "black"
    c.fillText(i + 2011, x, y)
    c.fillStyle = "blue"
    c.fillRect(x - 5, y - 10, 10, -T[i] * canvas.height / T[T.length-1] + 100)
}