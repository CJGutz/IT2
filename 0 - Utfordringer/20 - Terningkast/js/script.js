//Definerer variabler
var lik;
var terning = [];
var antallKast;
var sum;
var tall;
var antallLike;
var antallSum;

//antall kast er dynamisk
antallKast = prompt("Hvor mange terninger skal kastes per runde? (Over 0)");
antallSum = 0;

//starter loop for kast
while (!lik) {

    //bestemmer startverdier for hver runde
    sum = 0;
    tall = "";
    antallLike = 0;

    //Antall terninger må være over 0
    if (antallKast < 1) {
        alert("Tallet måtte være over 0");
        lik = true;
    }

    //kaster antall terninger definert før
    for (var i = 0; i < antallKast; i++) {
        terning[i] = kast();
        tall = tall + terning[i] + ", ";
        sum = sum + terning[i];
        if (i > 0 && terning[i] == terning[i - 1]) {
            antallLike++;
        }
        if (antallLike == antallKast - 1) {
            lik = true;
        }
    }

    //log tallene
    console.log(tall);
    console.log("Summen er " + sum);
    antallSum++
}

//printer ut resultatene på siden
document.getElementById("sum").innerHTML = sum;
document.getElementById("deler").innerHTML = sum / antallKast;
document.getElementById("antall").innerHTML = antallSum;

//funksjonen blir definert
function kast() {
    return Math.floor(Math.random() * 6 + 1)
}

/*
Veldig fornøyd med hvordan jeg løste 
denne oppgaven. Det tok lang tid, men
det å ha en dynamisk løsning på denne 
opgaven var verdt det.
*/