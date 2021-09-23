var alder;

alder = prompt("Hva er alderen din?");

if (alder >= 18 && alder < 120) {
    document.getElementById("svar").innerHTML = "Ja, du er gammel nok";
} else if (alder >= 120) {
    document.getElementById("svar").innerHTML = "Hvordan lever du fortsatt?";
} else {
    document.getElementById("svar").innerHTML = "Nei, du er for ung";
}
