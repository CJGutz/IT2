var canvas = document.querySelector("#c1");
var c = canvas.getContext("2d");
var navnEl = document.querySelector("#navn")
var hoydeEl = document.querySelector("#hoyde")
var bodyEl = document.querySelector("body")

var x = 0;
var y = 0;

var fjell = [
    ["Everest", 8848],
    ["Aconcagua", 6961],
    ["McKinley", 6194],
    ["Kilimanjaro", 5895],
    ["Elbrus", 5642],
    ["Vinson", 4892],
    ["Puncak Jaya", 4884],
    ["Kosciuszko", 2228]
]

var nyeFjell = [];


oppdaterDiagram()

function oppdaterDiagram() {
    //nullstill
    var listeEl = document.querySelectorAll("p")
    for (var i = 0; i < listeEl.length; i++) {
        listeEl[i].style.display = "none"
    }
    c.clearRect(0, 0, canvas.width, canvas.height)
    if (hoydeEl.value > 0 && navnEl.value != nyeFjell[nyeFjell.indexOf(navnEl.value)]) {
        nyeFjell.push(navnEl.value)
        fjell.push([navnEl.value, hoydeEl.value])
    }
    fjell.sort(sammenlign)
    //akser
    var yAkseHoyde = canvas.height * 0.8
    var xAkseLengde = canvas.width * 0.8
    x = 100;
    y = canvas.height - 50;
    c.strokeStyle = "black";
    c.lineWidth = 5
    //yAkse
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x, y - yAkseHoyde);
    c.stroke();
    //tall opp aksen
    for (var i = 1; i <= 10; i++) {
        c.beginPath()
        c.lineWidth = 2;
        c.textAlign = "right"
        c.font = "15px Arial"
        c.fillText((i / 10 * fjell[fjell.length - 1][1]).toFixed(), x - 10, y - i * yAkseHoyde / 10 + 5)
        c.moveTo(x - 5, y - i * yAkseHoyde / 10)
        c.lineTo(x + 5, y - i * yAkseHoyde / 10)
        c.stroke()
    }
    //xAkse
    c.beginPath()
    c.lineWidth = 5;
    c.moveTo(x, y)
    c.lineTo(x + xAkseLengde + 50, y)
    c.stroke()
    //fjell langs aksen
    for (var i = 1; i <= fjell.length; i++) {
        x = 100 + i * xAkseLengde / fjell.length
        c.fillStyle = "gray"
        c.beginPath()
        c.moveTo(x, y)
        c.lineTo(x - 20, y)
        c.lineTo(x, y - fjell[i - 1][1] / fjell[fjell.length - 1][1] * yAkseHoyde)
        c.lineTo(x + 20, y)
        c.stroke()
        c.fill()
        c.textAlign = "center"
        c.fillStyle = "black"
        c.fillText(fjell[i - 1][1] + " km", x, y + 20)
        c.fillText(fjell[i - 1][0], x, y - fjell[i - 1][1] / fjell[fjell.length - 1][1] * yAkseHoyde - 20)
        var fjellListeEl = document.createElement("p");
        fjellListeEl.innerHTML += fjell[i-1][0] +", " + fjell[i-1][1] + "<br>";
        fjellListeEl.addEventListener("click",slett);
        fjellListeEl.id = i-1;
        bodyEl.appendChild(fjellListeEl)

    }

}

function sammenlign(a, b) {
    if (a[1] < b[1]) {
        return -1;
    } else if (a[1] > b[1]) {
        return 1;
    } else {
        return 0;
    }
}

function slett(e) {
    e.target.style.display = "none"
    fjell.splice(e.target.id,1)
    oppdaterDiagram()
}