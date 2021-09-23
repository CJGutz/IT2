var bodyEl = document.querySelector("body")
var innpakningEl = document.createElement("div")
innpakningEl.id = "innpakning"
bodyEl.appendChild(innpakningEl)
var breddeInputEl = document.createElement("input")
breddeInputEl.setAttribute("type","number")
breddeInputEl.setAttribute("min",1)
breddeInputEl.setAttribute("max",9)
breddeInputEl.setAttribute("value",1)
innpakningEl.appendChild(breddeInputEl)
var kalkulerEl = document.createElement("button")
kalkulerEl.innerHTML = "Kalkuler"
kalkulerEl.addEventListener("click",kalkuler)
innpakningEl.appendChild(kalkulerEl)
var feilmeldingEl = document.createElement("h2")
innpakningEl.appendChild(feilmeldingEl)
var firkantEl = document.createElement("div")
firkantEl.id = "firkant"
innpakningEl.appendChild(firkantEl)
var lydEl = document.createElement("audio")
lydEl.setAttribute("src","lyd.mp3")
lydEl.setAttribute("type","audio/mp3")

var tilgjengeligeBredder = [1,2,3,4,5,6,7,8,9]
var hoyde;
var bredde;
var areal;

function kalkuler() {
    firkantEl.style.display = "block"
    bredde = breddeInputEl.value
    if (tilgjengeligeBredder.length == 0) {
        feilmeldingEl.innerHTML = "Det er ingen flere tilgjengelige bredder"
        return 0;
    }
    if (tilgjengeligeBredder.indexOf(Number(bredde)) == -1) {
        firkantEl.style.display = "none"
        feilmeldingEl.innerHTML = "Bredde ikke tilgjengelig"
    } else {
        feilmeldingEl.innerHTML = ""
        tilgjengeligeBredder.splice(tilgjengeligeBredder.indexOf(Number(bredde)),1)
        hoyde = 50 * 10 - bredde * 50;
        areal = bredde * hoyde/50;
        firkantEl.style.width = bredde * 50 + "px"
        firkantEl.style.height = hoyde + "px"
        feilmeldingEl.innerHTML = areal + "cm^2"
        lydEl.play()
    }

}