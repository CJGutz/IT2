var bodyEl = document.querySelector("body");
var navnEl = document.querySelector("#navn");
var alderEl = document.querySelector("#alder");
var outputEl = document.querySelector("h2");
var personer = [];

function registrer() {
    //sett inn navn og alder i objekt
    personer.push({navn: navnEl.value, alder: alderEl.value});
    //Sorter navn og alder  
    personer.sort(sammenlignTall)
    personer.sort(sammenlignNavn)
    // skriv ut navnene
    outputEl.innerHTML = "";
    for (var i = 0; i < personer.length; i++) {
        outputEl.innerHTML = outputEl.innerHTML + Number(i + 1) + "." + " " + personer[i].navn + ", " + personer[i].alder + "<br> ";
    }
}

function sammenlignTall(a, b) {
    if (a.alder > b.alder) {
        return 1;
    } else if (a.alder < b.alder) {
        return -1;
    } else {
        return 0;
    }
}

function sammenlignNavn(a, b) {
    if (a.navn > b.navn) {
        return 1;
    } else if (a.navn < b.navn) {
        return -1;
    } else {
        return 0;
    }
}