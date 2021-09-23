//finner og definerer alle variabler
var regnerEl = document.querySelector("#regner");
var svarEl = document.querySelector("#svar");
var t1El = document.querySelector("#t1");
var t2El = document.querySelector("#t2");
var h1El = document.querySelector("h1");
var tipsEl = document.querySelector("#tips");
// holder operatører adskilt for struktur
var plussEl = document.querySelector("#pluss");
var minusEl = document.querySelector("#minus");
var gangeEl = document.querySelector("#gange");
var deleEl = document.querySelector("#dele");
var erlikEl = document.querySelector("#erlik");

var operatør;
var svar;
var plussEllerMinus;

//Lager lyttere for tips
tipsEl.innerHTML = "|"
h1El.addEventListener("mouseenter",visTips);
h1El.addEventListener("mouseleave",skjulTips);

function regnut() {
    plussEllerMinus = 1;
    // ser om bruker skal plusse
    if (plussEl.checked) {
        if (t2El.value >= 0) {
            operatør = "+"
            svar = Number(t1El.value) + Number(t2El.value);
        } else {
            plussEllerMinus = -1
            operatør = "-";
            svar = Number(t1El.value) + Number(t2El.value);
        }
    // skal bruker bruke -?
    } else if (minusEl.checked) {
        if (t2El.value >= 0) {
            operatør = "-"
            svar = t1El.value - t2El.value;
        } else {
            plussEllerMinus = -1;
            operatør = "+"
            svar = t1El.value - t2El.value;
        }
    // skal det ganges?
    } else if (gangeEl.checked) {
        operatør = "*"
        svar = t1El.value * t2El.value;
    // eller deles?
    } else {
        operatør = "/"
        svar = t1El.value / t2El.value
    }
    // hvis svaret blir for stort vil størrelsen på elementet bli mindre
    if (Math.abs(svar) < 10000000000000) {
        svarEl.style.fontSize = "25px";
    } else if (Math.abs(svar) >= 10000000000000 && Math.abs(svar) < 100000000000000000) {
        svarEl.style.fontSize = "20px";
    } else if (Math.abs(svar) >= 100000000000000000 && Math.abs(svar) < 1000000000000000000000) {
        svarEl.style.fontSize = "15px";
    } else {
        svarEl.style.fontSize = "10px";
    }
 
    regnerEl.innerHTML = t1El.value + " " + operatør + " " + (t2El.value * plussEllerMinus) + " =";
    svarEl.innerHTML = svar;
}

function visTips() {
    tipsEl.innerHTML = "Prøv å skrive inn ekstremt høye tall. Da vil tallene gå utenfor boksen så prøv å trykk på en av pilene i det høye tallet så vil det fikse seg:)"
}

function skjulTips() {
    tipsEl.innerHTML = "|"
}