var alder;

alder = prompt("Hvor gammel er du?");

if (alder >= 0 && alder <= 12) {
    document.getElementById("svar").innerHTML = "Barn";
} else if (alder >= 13 && alder <= 19) {
    document.getElementById("svar").innerHTML = "Tenåring";
} else if (alder > 19 && alder < 120) {
    document.getElementById("svar").innerHTML = "Voksen";
} else {
    document.getElementById("svar").innerHTML = "Død";
}