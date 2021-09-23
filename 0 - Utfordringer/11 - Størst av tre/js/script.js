var A;
var B;
var C;
var fargelegg;

A = prompt("Skriv inn et tall A:");
B = prompt("Skriv inn et annet tall B:");
C = prompt("Skriv inn et siste tall C");

if (A > B && A > C) {
    fargelegg = "fargA";
} else if (B > A && B > C ) {
    fargelegg = "fargB";
} else if (C > A && C > B) {
    fargelegg = "fargC";
} else {
    document.getElementById("like").innerHTML = "Noen av tallene er like. Restart!"
}

document.getElementById("A").innerHTML = A;
document.getElementById("B").innerHTML = B;
document.getElementById("C").innerHTML = C;

document.getElementById(fargelegg).style.color = "red";