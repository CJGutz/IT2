//definerer variabler
var input;
var boolean;
var primtallMellom;
var maks;

input = prompt("Er heltallet primtall?");

boolean = primtall(input);

console.log("Er tallet et primtall?");
console.log(boolean);

maks = prompt("Velg et maks tall som programmet skal finne primtall til:");
primtallMellom = 0;

for (var i = 2; i < maks; i++) {
    if (primtall(i)) {
        primtallMellom = primtallMellom + i + ", "
    }
}

console.log(primtallMellom + maks)

//definerer funksjon
function primtall(n) {
    for (var i = 2; i <= n; i++) {
        if (i == n && n != 1) {
            if (n % i == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            if (n % i == 0) {
                return false;
            }
        }
    }
}