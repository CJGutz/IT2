var canvas = document.querySelector("#c1")
var c = canvas.getContext("2d");
var relativEl = document.querySelector("input")

var kurser = [
    [310, 315, 380, 377, 380, 450, 460, 468, 490, 485],
    [55, 50, 56, 70, 88, 99, 115, 110, 122, 135],
    [280, 290, 250, 350, 395, 460, 480, 515, 520, 490]
]

var x = 0;
var y = canvas.height - 50;

relativEl.addEventListener("change", relativ)

//finner max verdien av kursene
var max;
var maxer = [1];
var maxT = kurser[0][0];
for (var i = 0; i < kurser[0].length; i++) {
    if (maxT < kurser[0][i]) {
        maxT = kurser[0][i]
    }
}
var maxK = kurser[1][0];
for (var i = 0; i < kurser[0].length; i++) {
    if (maxK < kurser[1][i]) {
        maxK = kurser[1][i]
    }
}
var maxB = kurser[2][0];
for (var i = 0; i < kurser[0].length; i++) {
    if (maxB < kurser[2][i]) {
        maxB = kurser[2][i]
    }
}
if (maxB > maxT && maxB > maxK) { max = maxB }
else if (maxT > maxK && maxT > maxB) { max = maxT }
else { max = maxK }
maxer.push(max)
maxer.push(kurser[0][0] * 3)
maxer.push(kurser[1][0] * 3)
maxer.push(kurser[2][0] * 3)

c.textAlign = "center"
c.lineWidth = "3"

tegnGrafer()

function tegnGrafer() {
    // tegner T-graf
    c.beginPath()
    for (var i = 0; i < kurser[0].length; i++) {
        x = 25 + i * canvas.width / kurser[0].length;
        c.fillStyle = "black"
        c.fillText(i + 2011, x, y)
        c.lineTo(x, y - kurser[0][i] * canvas.height / maxer[1] * 0.75)
        c.strokeStyle = "blue"
        c.stroke()
    }

    // tegner K-graf
    c.beginPath()
    for (var i = 0; i < kurser[1].length; i++) {
        x = 25 + i * canvas.width / kurser[1].length;
        c.lineTo(x, y - kurser[1][i] * canvas.height / maxer[1] * 0.75)
        c.strokeStyle = "green"
        c.stroke()
    }
    // tegner B-graf
    c.beginPath()
    for (var i = 0; i < kurser[2].length; i++) {
        x = 25 + i * canvas.width / kurser[2].length;
        c.lineTo(x, y - kurser[2][i] * canvas.height / maxer[1] * 0.75)
        c.strokeStyle = "red"
        c.stroke()
    }
}


//lager relativ graf
function relativ() {
    if (relativEl.checked) {
    }
    tegnGrafer()
}