var bodyEl = document.querySelector("body")
var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")
canvas.width = window.innerWidth * 0.6
canvas.height = window.innerHeight * 0.8
var tableEl = document.querySelector("table")
bodyEl.appendChild(tableEl)

var bunnEl = document.querySelector("#bunn");
var toppEl = document.querySelector("#topp");
var hoydeEl = document.querySelector("#hoyde");
var forskyvningEl = document.querySelector("#forskyvning");
var knappEl = document.querySelector("#leggTil")
knappEl.addEventListener("click", beregnFirkant)

var valgt;
var b;
var t;
var h;
var f;
var cm = 50;

var firkanter = [
    ["Kvadrat", 10, 10, 10, 0, 100],
    ["Rektangel", 20, 20, 5, 0, 100],
    ["Paralellogram", 20, 20, 10, 2, 200],
    ["Trapes", 20, 10, 5, 2, 75],
    ["Trapes", 5, 3, 10, 5, 40]
]

lagTabell();

function beregnFirkant(n) {
    hentVerdier()
    var areal = (t + b) * h / 2
    var navn;
    if (t == b) {
        if (h == b && f == 0) { navn = "Kvadrat" }
        else if (f == 0) { navn = "Rektangel" }
        else { navn = "Paralellogram" }
    } else { navn = "Trapes" }
    if (b == 0 || t == 0 || h == 0) { navn = "Ikke firkant" }
    if (n != "endre") {
        firkanter.push([navn, b, t, h, f, areal]);
    } else {
        firkanter[valgt.id] = [navn,b,t,h,f,areal]
    }

    lagTabell();
}

function lagTabell() {
    var dataEl = document.querySelectorAll(".data")

    for (var i = 0; i < dataEl.length; i++) {
        dataEl[i].parentNode.removeChild(dataEl[i])
    }
    for (var i = 0; i < firkanter.length; i++) {
        var trEl = document.createElement("tr")
        trEl.className = "data"
        trEl.addEventListener("click", velgFirkant)
        for (var j = 0; j < firkanter[i].length; j++) {
            var tdEl = document.createElement("td")
            tdEl.id = i;
            tdEl.innerHTML = firkanter[i][j]
            trEl.appendChild(tdEl)
        }
        tableEl.appendChild(trEl)
    }
}

function velgFirkant(e) {
    valgt = e.target
    valgt.style.border = "solid red 1px"
    var inputsEl = document.querySelectorAll("input")
    for (var i = 0; i < inputsEl.length; i++) {
        inputsEl[i].value = firkanter[valgt.id][i + 1]
        inputsEl[i].addEventListener("input", endreFirkant)
    }
    hentVerdier();
    tegn(b, t, h, f)
}

function endreFirkant() {
    tegn(b, t, h, f)
    beregnFirkant("endre")
}

function slett() {
    if (!valgt) { return 0; }
    firkanter.splice(valgt.id, 1)
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    lagTabell()
}

function tegn(b, t, h, f) {
    c.beginPath();
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "lightblue"
    c.moveTo(10 + f * cm, 10)
    c.lineTo(10 + f * cm + t * cm, 10)
    c.lineTo(10 + b * cm, 10 + h * cm)
    c.lineTo(10, 10 + h * cm)
    c.lineTo(10 + f * cm, 10)
    c.stroke()
    c.fill()
}

function hentVerdier() {
    b = Number(bunnEl.value);
    t = Number(toppEl.value);
    h = Number(hoydeEl.value);
    f = Number(forskyvningEl.value);
}