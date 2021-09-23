var canvas = document.querySelector("#c1");
var c = canvas.getContext("2d");
var klasseVelger = document.querySelector("#klasseVelger")

//Alle = 0, A = 1, B = 2...
var klasser = [[], [], [], [], [], []]
klasseTeller()

klasseVelger.addEventListener("change", oppdaterDiagram)
oppdaterDiagram()

function oppdaterDiagram() {
    //nullstill
    c.clearRect(0, 0, canvas.width, canvas.height)
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
    for (var i = 1; i <= klasser[klasseVelger.value].length; i++) {
        c.beginPath()
        c.lineWidth = 2;
        c.textAlign = "right"
        c.font = "15px Arial"
        c.moveTo(x - 5, y - i * yAkseHoyde / klasser[klasseVelger.value].length)
        c.lineTo(x + 5, y - i * yAkseHoyde / klasser[klasseVelger.value].length)
        c.stroke()
    }
    c.fillText(klasser[klasseVelger.value].length, x - 10, y - yAkseHoyde)
    //xAkse
    c.beginPath()
    c.lineWidth = 5;
    c.moveTo(x, y)
    c.lineTo(x + xAkseLengde + 50, y)
    c.stroke()
    //søyler
    var antallJenter = kjonnTeller(klasseVelger.value)
    var antallGutter = klasser[klasseVelger.value].length - antallJenter;
    x = xAkseLengde / 4 + 100
    c.beginPath()
    c.fillRect(x - 20, y, 40, -antallJenter * yAkseHoyde / (antallJenter + antallGutter));
    c.textAlign = "center"
    c.fillText(antallJenter, x, y - antallJenter * yAkseHoyde / (antallJenter + antallGutter) - 15)
    c.fillText("Jenter", x, y + 20)
    x = xAkseLengde * 3 / 4 + 100
    c.beginPath()
    c.fillRect(x - 20, y, 40, -antallGutter * yAkseHoyde / (antallJenter + antallGutter));
    c.fillText(antallGutter, x, y - antallGutter * yAkseHoyde / (antallJenter + antallGutter) - 15)
    c.fillText("Gutter", x, y + 20)
    c.stroke()
    c.fill()
    c.textAlign = "center"
    c.fillStyle = "black"
}

function klasseTeller() {
    for (var i = 0; i < elever.length; i++) {
        // Her kan du legge til flere klasser enkelt
        if (elever[i].klasse == "A") { klasser[1].push(elever[i]) }
        else if (elever[i].klasse == "B") { klasser[2].push(elever[i]) }
        else if (elever[i].klasse == "C") { klasser[3].push(elever[i]) }
        else if (elever[i].klasse == "D") { klasser[4].push(elever[i]) }
        else if (elever[i].klasse == "E") { klasser[5].push(elever[i]) }
        klasser[0].push(elever[i])
    }

}

function kjonnTeller(n) {
    var sum = 0;
    for (var i = 0; i < klasser[n].length; i++) {
        if (Number(klasser[n][i].pNr[2]) % 2 == 0) {
            sum = sum + 1;

        }
    }
    return sum;
}