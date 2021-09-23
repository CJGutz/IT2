var bodyEl = document.querySelector("body");
var spmEl = document.querySelector("#spm");
var olEl = document.querySelector("ol")
var feilGjettEl = document.querySelector("#feilGjett")
var antallFeilGjett = 0;
var spm = 0;
// oppgaver: kan være flere alternativer
oppgaver = [
    { sporsmal: "Hva heter hovedstaden i Spania?", alt: ["Barcelona", "Madrid", "Paris", "Roma"], riktig: "Madrid" },
    { sporsmal: "Hvor høy er Mount Everest?", alt: [8849, 7835, 10550], riktig: 8849 },
    { sporsmal: "Hva slags dyr er en dvergvedder?", alt: ["Kanin", "Katt", "Hund"], riktig: "Kanin" },
    { sporsmal: "Hvem fant opp relativitetsteorien?", alt: ["Hawking", "Newton", "Einstein"], riktig: "Einstein" },
    { sporsmal: "Omtrent hvor mange år siden skjedde den kognitive revolusjon?", alt: [2000000, 70000, 12000, 5000], riktig: 70000 }
]

stillSpm()

function stillSpm() {
    //Endre spørsmål
    spmEl.innerHTML = oppgaver[spm].sporsmal

    //fjern alternativer
    while (olEl.firstChild) {
        olEl.removeChild(olEl.firstChild);
    }

    //Lag nye alternativer
    for (var i = 0; i < oppgaver[spm].alt.length; i++) {
        var altEl = document.createElement("li")
        altEl.innerHTML = oppgaver[spm].alt[i]
        altEl.addEventListener("click", sjekkSvar)
        olEl.appendChild(altEl)
    }
}

function sjekkSvar(e) {
    if (e.target.innerHTML == oppgaver[spm].riktig) {
        //Om man fikk riktig svar
        //Grønt blink
        bodyEl.style.backgroundColor = "lightgreen"
        setTimeout(aqua, 100)
        //er man på siste spørsmål?
        if (spm < oppgaver.length - 1) {
            spm++;
            stillSpm();
        } else {
            //display gratulasjon
            var gratulasjonEl = document.createElement("h1")
            gratulasjonEl.innerHTML = "Grtaulerer du kom deg gjennom!"
            bodyEl.appendChild(gratulasjonEl);

            //fjern alternativer og spørsmål
            while (olEl.firstChild) {
                olEl.removeChild(olEl.firstChild);
            }
            spmEl.innerHTML = " "
        }
    } else {
        //endre på antall feilklikk
        antallFeilGjett++
        feilGjettEl.innerHTML = "Feilklikk: " + antallFeilGjett
        //Rødt blink
        bodyEl.style.backgroundColor = "red"
        setTimeout(aqua, 75)
    }
}

function aqua() {
    bodyEl.style.backgroundColor = "aqua";
}

