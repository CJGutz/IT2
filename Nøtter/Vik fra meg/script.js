var bodyEl = document.querySelector("body");
var ringEl = document.createElement("div");
var prikkEl = document.createElement("div");
var bredde = window.innerWidth;
var hoyde = window.innerHeight;


ringEl.addEventListener("mouseover", forsvinn)
ringEl.className = "ring"
prikkEl.className = "prikk"

forsvinn();

function forsvinn() {
    ringEl.style.marginLeft = Math.random() * (bredde - 250) + "px"
    ringEl.style.marginTop = Math.random() * (hoyde - 250) + "px"
}

ringEl.appendChild(prikkEl);
bodyEl.appendChild(ringEl);