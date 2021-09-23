//Definerer variabler
var alfabet;
var bokstav;
var plass;

//Lager et alfabet
alfabet="abcdefghijklmnopqrstuvwxyzæøå"

//Får bokstav fra bruker
bokstav = prompt("Skriv in en tilfeldig bokstav her...");

//bokstav blir til lite bokstav
bokstav = bokstav.toLowerCase();

//gjør om bokstaven til et tall
plass = alfabet.indexOf(bokstav)+1

//skriv ut plassen til bokstaven
console.log("Bokstaven er nr. " + plass + " i alfabetet.");

