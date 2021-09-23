var bodyEl = document.querySelector("body");
var ballEl = document.createElement("div");
var bakkeEl = document.createElement("div");

var g = 9.81;
var m = 2;
var v = 1;
var nullpunkt = window.innerHeight;
var h;

ballEl.className = "ball";
ballEl.style.marginTop = "100px"

nullpunkt = parseFloat(window.innerHeight, 10);
h = nullpunkt - parseFloat(ballEl.style.marginTop, 10);

var Etotal = m * g * h + 1 / 2 * m * v * v;
var Ek;
var Ep;

//  m/s -> px/ms. 
// Ek = 1/2 * m * v * v
// Ep = m * g * h
// Ek1 + Ep1 = Ek2 + Ep2
// Etotal = Ek + Ep


setInterval(Energi, 100);

function Energi() {
    nullpunkt = parseFloat(window.innerHeight, 10);

    h = nullpunkt - parseFloat(ballEl.style.marginTop, 10);
    v = Math.sqrt((Etotal - m * g * h) * 2 / m)
    Ek = Etotal - m * g * h
    
    console.log(ballEl.style.marginTop)
    console.log("h: " + h)
    console.log("v: " + v)
    console.log("Ek: " + Ek)

    if (h > 0 && Ek >= 0) {
        h = h + v;
    } else {
        h = h - v
    }

    ballEl.style.marginTop = nullpunkt - h + "px";
    bodyEl.appendChild(ballEl);
}




function stop() {

}

function start() {

}



