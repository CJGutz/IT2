var bodyEl = document.querySelector("body");
var navnEl = document.querySelector("#navn");
var alderEl = document.querySelector("#alder");
var outputEl = document.querySelector("h2");
var personer = [];

function registrer() {
    //sett inn navn og alder i array
    personer.push([navnEl.value.toUpperCase(), Number(alderEl.value)])
    //Sorter navn og alder  
    personer.sort()
    personer.sort(sammenlignTall)
    // skriv ut navnene
    outputEl.innerHTML = "";
    for (var i = 0; i < personer.length; i++) {
        outputEl.innerHTML = outputEl.innerHTML + Number(i + 1) + "." + " " + personer[i][0] + ", " + personer[i][1] + "<br> ";
    }
}

function sammenlignTall(a, b) {
    return a - b;
}