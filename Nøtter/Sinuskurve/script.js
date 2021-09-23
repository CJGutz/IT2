var canvas = document.querySelector("#c1")
var c = canvas.getContext("2d")

var bredde = canvas.width
var hoyde = canvas.height
var ruteBredde = 20;

// x-akse og y-akse
c.lineWidth = 5
c.moveTo(0, hoyde / 2)
c.lineTo(bredde, hoyde / 2)
c.moveTo(bredde / 2, 0)
c.lineTo(bredde / 2, hoyde)
c.stroke()

// rutenett
c.lineWidth = 1;
for (var i = 0; i < bredde; i++) {
    if (i % ruteBredde == 0) {
        c.moveTo(i, 0)
        c.lineTo(i, hoyde)
        c.stroke()
    }
}
for (var i = 0; i < hoyde; i++) {
    if (i % ruteBredde == 0) {
        c.moveTo(0, i)
        c.lineTo(bredde, i)
        c.stroke()
    }
}

// graf
c.fillStyle = "blue"
for (var i = - bredde / 2; i < bredde / 2; i = i + 1) {
    c.fillRect(i + bredde / 2, ((Math.sin(-i / 50) + 1) * 300 / 2) + 120, 5, 5)
}