var bodyEl = document.querySelector("body");
var budsjettKnappEl = document.querySelector("#budsjettknapp");
var skoleoppgaverKnappEl = document.querySelector("#skoleoppgaverknapp")
var budsjettSkjemaEl = document.querySelector("#budsjett");
var skoleoppgaverSkjemaEl = document.querySelector("#skoleoppgaver");

budsjettKnappEl.addEventListener("click", budsjett())
skoleoppgaverKnappEl.addEventListener("click", skoleoppgaver())

budsjett("skjulB");
skoleoppgaver("skjulS");


function budsjett(n) {
    if (n == "skjulB") {
        budsjettSkjemaEl.setAttribute("height", "0px");
        budsjettSkjemaEl.setAttribute("width", "0px");
        console.log("skjulB")
        n = "visB"
    } else {
        budsjettSkjemaEl.setAttribute("height", "1000px")
        budsjettSkjemaEl.setAttribute("width", "1000px")
        console.log("visB")
        n = "skjulB"
    }
}

function skoleoppgaver(n) {
    if (n == "skjulS") {
        skoleoppgaverSkjemaEl.setAttribute("height", "0px")
        skoleoppgaverSkjemaEl.setAttribute("width", "0px")
        n = "visS"
        console.log("skjulS")
    } else {
        skoleoppgaverSkjemaEl.setAttribute("height", "1000px")
        skoleoppgaverSkjemaEl.setAttribute("width", "1500px")
        console.log("visS")
        n = "skjulS"
    }
}

