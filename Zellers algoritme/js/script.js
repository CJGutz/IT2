// Definerer alle variabler brukt
var dagnummer;
var manedsnummer;
var arstall;
var toForsteTallAr;
var toSisteTallAr;
var manedKonstant;
var arKonstant;
var s;
var ukedag;

dagnummer = Number(prompt("dagnummer"));
manedsnummer = prompt("månedsnummer");
arstall = prompt("Årstall")

toForsteTallAr = Number(String(arstall[0]) + String(arstall[1]));
toSisteTallAr = Number(String(arstall[2]) + String(arstall[3]));

/* toForsteTallAr = Math.floor(arstall / 100);
toSisteTallAr = arstall - (100 * toForsteTallAr); */

if (manedsnummer == 1 || manedsnummer == 2) {
    manedsnummer += 12;
    arstall -= 1;
}

manedKonstant = 2.6 * manedsnummer - 5.39

if (manedKonstant < 0) {
    manedKonstant = Math.ceil(manedKonstant);
} else {
    manedKonstant = Math.floor(manedKonstant);
}

arstall = Math.floor(toSisteTallAr / 4);
arKonstant = Math.floor(toForsteTallAr / 4);

s = manedKonstant + arstall + arKonstant + dagnummer + toSisteTallAr - (2 * toForsteTallAr);
ukedag = s % 7;

console.log(ukedag);

