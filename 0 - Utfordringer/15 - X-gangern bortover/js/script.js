var tall;
var svar;

tall = prompt("Skriv et tilfeldig tall:")
svar = tall;

for (var i = 1; i < 10; i++) {
    svar = svar + ", " + tall * (i + 1)
}

document.getElementById("id").innerHTML = svar;