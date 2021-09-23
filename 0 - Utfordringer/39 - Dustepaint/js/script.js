var bodyEl = document.querySelector("body");
var lengdeKvadrat = 100;
var ruteEl;
var selektor = ["black", "white", "red", "blue", "green", "yellow"];
var selektorEl;
var farge = "black"

// konstruerer rutenett
for (var i = 0; i < lengdeKvadrat; i++) {
    ruteEl = document.createElement("div");
    ruteEl.className = "loddrett";
    ruteEl.addEventListener("mouseover", fargelegg);
    bodyEl.appendChild(ruteEl);
    /*  console.log("lodd"); */
    for (var j = 0; j < lengdeKvadrat - 1; j++) {
        ruteEl = document.createElement("div");
        ruteEl.className = "vannrett";
        ruteEl.addEventListener("mouseover", fargelegg)
        bodyEl.appendChild(ruteEl);
        /* console.log("vann") */
    }
}

// viser ulike farger å velge mellom
for (var i = 0; i < selektor.length; i++) {
    selektorEl = document.createElement("div");
    selektorEl.className = "selektor";
    selektorEl.style.backgroundColor = selektor[i]
    selektorEl.addEventListener("click", velg);
    bodyEl.appendChild(selektorEl)
}

function fargelegg(e) {
    if (e.which == 1) {
        e.target.style.backgroundColor = farge;
    }
}

function velg(e) {
    for (var k = 0; k < selektor.length; k++) {
        if (e.target.style.backgroundColor == selektor[k]) {
            farge = selektor[k]
            console.log(selektor[k]);
        }
    }

    /* console.log(e.target.style.backgroundColor); */
}