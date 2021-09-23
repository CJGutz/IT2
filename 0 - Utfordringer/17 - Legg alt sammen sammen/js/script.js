var input;
var output;

input = prompt("Skriv inn et tall:");
output = 0;

if (input >= 0) {
    for (var i = 1; i <= input; i++) {
        output = output + i;
    }   
} else {
    for (var i = -1; i >= input; i--) {
     output = output +i;
    }
}


document.getElementById("sum").innerHTML = output;