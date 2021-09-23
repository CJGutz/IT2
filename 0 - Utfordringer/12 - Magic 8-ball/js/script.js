var spoersmaal;
var svar;
var nummer;

spoersmaal = prompt("Spør et ja og nei spørsmål om hva du vil:");

svar = [
    "Ja, helt klart!",
    "Nei, ikke i det hele tatt",
    "Kanskje",
    "Tror ikke det",
    "Bare vent å se"
];

nummer = Math.floor(Math.random()*5)

document.getElementById("svar").innerHTML = svar[nummer]