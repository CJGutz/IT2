var barn;
var polser;
var tilHver;
var tilOvers;

//Spør hvor mange 
barn = prompt("Hvor mange barn er det?")
polser = prompt("Hvor mange pølser er kjøpt?")

//regn ut
tilHver = Math.floor(polser / barn)
tilOvers = polser % barn

//log hvor mange pølser som er igjen og hvor mange til hver
console.log("Det er " + tilHver + " pølser til hver og " + tilOvers + " til overs.")