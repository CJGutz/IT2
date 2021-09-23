var passord;
var alfabet;
var spesialtegn;

passord = prompt("Skriv inn et gyldig passord i forhold til passordhenvisningen");
alfabet = "abcdefghijklmnopqrstuvwxyzøæå"
storAlfabet = alfabet.toUpperCase();
spesialtegn = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


if (
    antallTegn(passord) &&
    småStore(passord) &&
    tall(passord) &&
    tegn(passord)
) {
    console.log("Passord lagret!");
    document.getElementById("lagret").innerHTML = "Passord lagret!";
} else {
    console.log("Passord oppnådde ikke kriterier");
    document.getElementById("lagret").innerHTML = "Passord oppnådde ikke kriterier";
}


function antallTegn(n) {
    if (n.length < 8) {
        return false;
    }
    return true;
}

function småStore(n) {
    for (var i = 0; i < storAlfabet.length; i++) {
        if (n.indexOf(storAlfabet[i]) != -1) {
            return true;
        }
    }
    return false;
}

function tall(n) {
    for (var i = 0; i <= 9; i++) {
        if (n.indexOf(String(i)) != -1) {
            return true;
        }

    }
    return false;
}

function tegn(n) {
    for (var i = 0; i < spesialtegn.length; i++) {
        if (n.indexOf(spesialtegn[i]) != -1) {
            return true;
        }
    }
    return false;
}