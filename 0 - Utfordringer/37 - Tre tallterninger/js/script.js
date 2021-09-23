var bodyEl = document.querySelector("body");
var holderEl = document.createElement("div");
var divEl;
var marg = 150;
var tall = "";

holderEl.className = "holder";
holderEl.style.width = 450 + marg * 2 + (6 * 3) + "px"

for (var i = 0; i < 3; i++) {
    divEl = document.createElement("div");
    divEl.className = "terning";
    divEl.addEventListener("click", kast);
    divEl.style.marginRight = marg + "px";

    if (i == 2) {
        divEl.style.marginRight = "0px";
    }

    holderEl.appendChild(divEl);
}

bodyEl.appendChild(holderEl);

function kast(e) {
    e.target.innerHTML = Math.floor(Math.random() * 6 + 1)
}