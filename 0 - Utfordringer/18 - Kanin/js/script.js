var input;
var orer;
var hode;
var bein;

input = prompt("Hva slags øyne vil du ha?");
orer = "(\\ (\\";
hode = "( " + input + "." + input + ")";
bein = "o_(\")(\")"

kanin();

function kanin() {
    document.getElementById("orer").innerHTML = orer;
    document.getElementById("hode").innerHTML = hode;
    document.getElementById("bein").innerHTML = bein;
}

