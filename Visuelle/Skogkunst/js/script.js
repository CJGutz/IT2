var canvas = document.querySelector("#c1");
var c = canvas.getContext("2d");

var horisont = canvas.height - 300
var pennX = 0;
var pennY = horisont;
var minne = [];

var musX = 0.1;
var musY = 0.1;
var fargeTreTeller = 0;
var fargeTre;

var treType;
var bladBredde;
var stammeBredde;
var stammeHoyde;

var maksBredde = 40;
var antallTraer = 5;

c.fillStyle = "rgb(29, 114, 22)"

canvas.addEventListener("mousemove", musPosisjon)

setInterval(lagSkog, 10)

function lagSkog() {
    //canvas midt på siden
    canvas.style.marginLeft = window.innerWidth / 2 + "px"
    canvas.style.marginTop = window.innerHeight / 2 + "px"
    canvas.style.width = window.innerWidth - 22 + "px"
    canvas.style.height = Number(canvas.style.width.replace("px", "")) * 9 / 17 + "px"

    // farge
    //canvas.style.backgroundColor = "rgb(" + 255 * musX + "," + musY * 255 + "," + musX * musY * 255 + ") ";
    canvas.style.backgroundColor = "hsl(" + 360 * musX + "," + musY * 100 + "% ," + Math.sqrt(musX * musY) * 100 + "% )";

    // nullstilling
    minne = []
    c.clearRect(0, horisont, canvas.width, - 100)

    // bakgrunn
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

    //masseproduksjon av trær
    for (var i = 0; i < minne.length; i++) {
        //bestemmer hvilket tre
        treType = Math.ceil(Math.random() * 3)
        if (treType == 1) {
            sirkelTre(minne[i][0], minne[i][1], minne[i][2]);
        } else if (treType == 2) {
            trekantTre(minne[i][0], minne[i][1], minne[i][2]);

        } else {
            firkantTre(minne[i][0], minne[i][1], minne[i][2]);
        }
    }
    c.fillStyle = "rgba(29, 114, 22,0.1)"
    c.fillRect(0, horisont, canvas.width, canvas.height - horisont)

    fargeTreTeller++;
    if (fargeTreTeller < 300) {
        fargeTre = 1;
    } else if (fargeTreTeller < 600) {
        fargeTre = 2;
    } else if (fargeTreTeller < 900) {
        fargeTre = 3;
    } else { fargeTreTeller = 0; }

    console.log("hsl(" + 360 * musX + "," + musY * 100 + "% ," + Math.sqrt(musX * musY) * 100 + "% )");
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
    if (fargeTre == 1) {
        c.fillStyle = "hsl(" + 360 * musX + "," + musY * 100 + "% ," + Math.sqrt(musX * musY) * 100 + "% )"
    } else { c.fillStyle = "rgb(53, 197, 40)" }
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
    if (fargeTre == 2) {
        c.fillStyle = "hsl(" + 360 * musX + "," + musY * 100 + "% ," + Math.sqrt(musX * musY) * 100 + "% )"
    } else { c.fillStyle = "rgb(61, 139, 56)" }
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
    if (fargeTre == 3) {
        c.fillStyle = "hsl(" + 360 * musX + "," + musY * 100 + "% ," + Math.sqrt(musX * musY) * 100 + "% )"
    } else { c.fillStyle = "rgb(86, 173, 80)"; }
    c.fillRect(x - stammeBredde, y + stammeHoyde * 4 / 9, b * 9 / 5, stammeHoyde * 7 / 9)
    c.strokeRect(x - stammeBredde, y + stammeHoyde * 4 / 9, b * 9 / 5, stammeHoyde * 7 / 9)
    c.fill()
    c.stroke()
}

function musPosisjon(e) {
    musX = e.offsetX / Number(canvas.style.width.replace("px", ""))
    musY = e.offsetY / Number(canvas.style.height.replace("px", ""))
}