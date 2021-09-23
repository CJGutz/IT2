var resultatEl = document.querySelector("#resultatDiv");
//var bodyEl = document.querySelector("body")
var canvas = document.querySelector("#mittCanvas");
var c = canvas.getContext("2d");
var kakeCanvas = document.querySelector("#kake");
var ctx = kakeCanvas.getContext("2d")
var partiDiv;
var storstStemme;
var sideTall;
var antallStemmer;

data = [
    { navn: "Rødt", forkortelse: "r", stemmer: 25, farge: "#ff0000", side: "red" },
    { navn: "Sosialistisk Venstreparti", forkortelse: "sv", stemmer: 85, farge: "#ff4d4d", side: "red" },
    { navn: "Arbeiderpartiet", forkortelse: "ap", stemmer: 210, farge: "#ff471a", side: "red" },
    { navn: "Senterpartiet", forkortelse: "sp", stemmer: 6, farge: "#009933", side: "red" },
    { navn: "Miljøpartiet De Grønne", forkortelse: "mdg", stemmer: 127, farge: "#40bf40", side: "red" },
    { navn: "Kristelig Folkeparti", forkortelse: "krf", stemmer: 3, farge: "#ff1a1a", side: "blue" },
    { navn: "Venstre", forkortelse: "v", stemmer: 148, farge: "#009973", side: "blue" },
    { navn: "Høyre", forkortelse: "h", stemmer: 119, farge: "#0052cc", side: "blue" },
    { navn: "Fremskrittspartiet", forkortelse: "frp", stemmer: 36, farge: "#3399ff", side: "blue" }
];

lagDiagram()

function lagDiagram() {
    //finn største stemme
    storstStemme = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].stemmer > storstStemme) {
            storstStemme = data[i].stemmer
        }
    }

    //Vis logoer og resultater for alle partier
    for (var i = 0; i < data.length; i++) {
        partiDiv = document.createElement("div");
        partiDiv.className = "parti"
        partiDiv.addEventListener("click", leggTilStemme)
        partiDiv.id = i;
        var fork = data[i].forkortelse;
        partiDiv.innerHTML = "<img src='media/" + fork + ".png' unselectable='on'>"
        partiDiv.innerHTML += "<br>(" + data[i].stemmer + ")";
        resultatEl.appendChild(partiDiv);
    }

    //Søylediagram
    for (var i = 0; i < data.length; i++) {
        var x = 40;
        var y = canvas.height / data.length * i + 25;
        //Forkortelse
        c.fillStyle = "black"
        c.font = "20px Arial"
        c.textAlign = "end"
        c.fillText(data[i].forkortelse, x, y);
        //Søyler
        c.fillStyle = data[i].farge;
        c.fillRect(x + 10, y - canvas.height / data.length * 0.5, data[i].stemmer / storstStemme * canvas.width * 0.9, canvas.height / data.length * 0.5)
        c.fill()
    }

    //Kakediagram
    ctx.clearRect(0, 0, kakeCanvas.width, kakeCanvas.height)
    antallStemmer = 0;
    for (var i = 0; i < data.length; i++) {
        antallStemmer += data[i].stemmer;
    }
    //tegn
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.arc(kakeCanvas.width / 2, kakeCanvas.height - 10, 70, Math.PI, 0, false)
    ctx.lineTo(kakeCanvas.width / 2, kakeCanvas.height - 10)
    ctx.closePath()
    ctx.fill()
    sideTall = 0;
    for (var i = 5; i < 9; i++) {
        sideTall += data[i].stemmer
    }
    ctx.beginPath()
    ctx.fillStyle = "blue"
    ctx.arc(kakeCanvas.width / 2, kakeCanvas.height - 10, 70, 0, -sideTall * 2 / antallStemmer * Math.PI / 2, true)
    ctx.lineTo(kakeCanvas.width / 2, kakeCanvas.height - 10)
    ctx.closePath()
    ctx.fill()
}

function leggTilStemme(e) {
    //Slett 
    while (resultatEl.firstChild) {
        resultatEl.removeChild(resultatEl.firstChild);
    }
    c.clearRect(0, 0, canvas.width, canvas.height)
    //legg til stemme
    data[e.target.id].stemmer += 1;
    //lag nytt diagram
    lagDiagram()
}