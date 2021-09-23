//Definer variabler
var navn;
var lengde;
var forbokstav;
var resten;

//Får navn fra bruker
navn = prompt("Skriv inn navnet ditt feil");
lengde = navn.length

//Gjør om til stor forbokstav og resten små
forbokstav = navn[0].toUpperCase();
resten = navn.substring(1,lengde).toLowerCase();

//Gi navn tilbake
console.log(forbokstav + resten);