var canvas = document.querySelector("#c1");
var c = canvas.getContext("2d");

var minTraerEl = document.querySelector("#minTraer")
var maksTraerEl = document.querySelector("#maksTraer")
var maksBreddeEl = document.querySelector("#maksBredde")
var knappEl = document.querySelector("#lagSkog")

var sirkelAntallEl = document.querySelector("#sirkel")
var trekantAntallEl = document.querySelector("#trekant")
var firkantAntallEl = document.querySelector("#firkant")

var sirkelAntall = 0;
var trekantAntall = 0;
var firkantAntall = 0;


var horisont = canvas.height - 300
var pennX = 0;
var pennY = horisont;
var minne = [];

var treType;

var bladBredde;
var stammeBredde;
var stammeHoyde;

var maksBredde;

//knapp
knappEl.addEventListener("click", lagSkog)

function lagSkog() {
    // nullstilling
    canvas.style.backgroundColor = "rgb(37, 174, 219)"
    canvas.style.display = "initial"
    sirkelAntallEl.innerHTML = "Sirkeltrær: "
    trekantAntallEl.innerHTML = "Trekanttrær: "
    firkantAntallEl.innerHTML = "Firkanttrær: "
    minne = []
    sirkelAntall = 0;
    trekantAntall = 0;
    firkantAntall = 0;
    c.clearRect(0, 0, canvas.width, canvas.height)
    //informasjoninnkallelse
    var minTraer = Number(minTraerEl.value);
    var maksTraer = Number(maksTraerEl.value);
    maksBredde = Number(maksBreddeEl.value);
    var antallTraer = Math.ceil(Math.random() * (maksTraer - minTraer) + minTraer);


    // bakgrunn
    c.fillStyle = "green"
    c.strokeStyle = "black";
    c.lineWidth = 3;
    c.beginPath()
    c.fillRect(0, horisont, canvas.width, canvas.height - horisont)
    c.strokeRect(0, horisont, canvas.width, 0)
    c.lineWidth = 1;

    //materialehenting
    for (var i = 0; i < antallTraer; i++) {
        bladBredde = pennLokasjon()
        minne.push([pennY, pennX, bladBredde])
    }

    minne.sort();

    // filtrerer ut trær
    for (var i = 1; i < minne.length; i++) {
        if (minne[i][0] - minne[i - 1][0] < 40 && Math.abs(minne[i][1] - minne[i - 1][1]) < 40) {
            minne.splice(i - 1, 1)
        }
    }
    //masseproduksjon av trær
    for (var i = 0; i < minne.length; i++) {
        //bestemmer hvilket tre
        treType = Math.ceil(Math.random() * 3)
        if (treType == 1) {
            sirkelAntall++;
            sirkelTre(minne[i][0], minne[i][1], minne[i][2]);
        } else if (treType == 2) {
            trekantAntall++
            trekantTre(minne[i][0], minne[i][1], minne[i][2]);
        } else {
            firkantAntall++
            firkantTre(minne[i][0], minne[i][1], minne[i][2]);
        }
    }

    // printer ut antall trær av hver type
    sirkelAntallEl.innerHTML = sirkelAntallEl.innerHTML + sirkelAntall;
    trekantAntallEl.innerHTML = trekantAntallEl.innerHTML + trekantAntall;
    firkantAntallEl.innerHTML = firkantAntallEl.innerHTML + firkantAntall;
}

//ny pennlokasjon
function pennLokasjon() {
    pennX = Math.round(Math.random() * (canvas.width))
    pennY = Math.round(Math.random() * (canvas.height - 200) + horisont)
    return Math.round((pennY - horisont) / 300 * maksBredde + 10)
}

//ulike trær
function sirkelTre(y, x, b) {
    stammeBredde = b * 3 / 5;
    stammeHoyde = stammeBredde * -3;
    c.beginPath();
    c.fillStyle = "rgb(107, 71, 16)";
    c.fillRect(x, y, stammeBredde, stammeHoyde)
    c.strokeRect(x, y, stammeBredde, stammeHoyde)
    c.fillStyle = "rgb(53, 197, 40)"
    c.arc(x + b * 0.3, y + stammeHoyde, b, 0, Math.PI * 2)
    c.fill()
    c.stroke()
}

function trekantTre(y, x, b) {
    stammeBredde = b * 3 / 5;
    stammeHoyde = stammeBredde * -3;
    c.beginPath();
    c.fillStyle = "rgb(107, 71, 16)";
    c.fillRect(x, y, stammeBredde, stammeHoyde)
    c.strokeRect(x, y, stammeBredde, stammeHoyde)
    c.fillStyle = "rgb(61, 139, 56)"
    c.moveTo(x - stammeBredde, y + stammeHoyde / 3)
    c.lineTo(x + stammeBredde / 2, y + stammeHoyde * 4 / 3)
    c.lineTo(x + stammeBredde * 2, y + stammeHoyde / 3)
    c.fill()
    c.stroke()
}

function firkantTre(y, x, b) {
    stammeBredde = b * 3 / 5;
    stammeHoyde = stammeBredde * -3;
    c.beginPath();
    c.fillStyle = "rgb(107, 71, 16)";
    c.fillRect(x, y, stammeBredde, stammeHoyde)
    c.strokeRect(x, y, stammeBredde, stammeHoyde)
    c.fillStyle = "rgb(86, 173, 80)";
    c.fillRect(x - stammeBredde, y + stammeHoyde * 4 / 9, b * 9 / 5, stammeHoyde * 7 / 9)
    c.strokeRect(x - stammeBredde, y + stammeHoyde * 4 / 9, b * 9 / 5, stammeHoyde * 7 / 9)
    c.fill()
    c.stroke()
}