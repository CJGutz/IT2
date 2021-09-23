var tall1;
var tall2;

tall1 = Math.floor(Math.random()*10 + 1)
tall2 = Math.floor(Math.random()*10 + 1)


if (tall1 < tall2) {
    document.getElementById("svar").innerHTML = "Første tall er mindre enn det andre tallet";
} else if (tall1 > tall2) {
    document.getElementById("svar").innerHTML = "Første tall er større enn det andre tallet";
} else {
    document.getElementById("svar").innerHTML = "Tallene er like";
}