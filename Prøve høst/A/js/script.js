var bodyEl = document.querySelector("body");
var overskriftEl;
var divEl;
var sTall = Number(prompt("Hvor mange smittede per 100 000 i Sverige?"));
var fTall = Number(prompt("Hvor mange smittede per 100 000 i Finland?"));
var dTall = Number(prompt("Hvor mange smittede per 100 000 i Danmark?"));

if (sTall < 0 || fTall < 0 || dTall < 0) {
    alert("Et av tallene er mindre enn null og det går ikke! Prøv på nytt.")
    sTall = 0;
    fTall = 0;
    dTall = 0;
}

for (var i = 0; i < 3; i++) {
    overskriftEl = document.createElement("p");
    divEl = document.createElement("div");
    overskriftEl.style.fontSize = "30px";

    //Lager tre forskjellige: Sverige, Finland og Danmark
    if (i == 0) {
        overskriftEl.innerHTML = "<b>Sverige</b>";

        //Sjekker i hvert land hvor tallet ligger.
        if (sTall < 20 && sTall >= 0) {
            divEl.innerHTML = sTall + " (Grønt nivå)"
        } else if (sTall >= 20 && sTall <= 100) {
            divEl.innerHTML = sTall + " (Gult nivå)"
        } else  {
            divEl.innerHTML = sTall + " (Rødt nivå)"
        } 

    } else if (i == 1) {
        overskriftEl.innerHTML = "<b>Finland</b>";

        if (fTall < 20 && fTall >= 0) {
            divEl.innerHTML = fTall + " (Grønt nivå)"
        } else if (fTall >= 20 && fTall <= 100) {
            divEl.innerHTML = fTall + " (Gult nivå)"
        } else {
            divEl.innerHTML = fTall + " (Rødt nivå)"
        }

    } else {
        overskriftEl.innerHTML = "<b>Danmark</b>";

        if (dTall < 20 && dTall >= 0) {
            divEl.innerHTML = dTall + " (Grønt nivå)"
        } else if (dTall >= 20 && dTall <= 100) {
            divEl.innerHTML = dTall + " (Gult nivå)"
        } else {
            divEl.innerHTML = dTall + " (Rødt nivå)"
        }
    }
    bodyEl.appendChild(overskriftEl);
    bodyEl.appendChild(divEl);
}
