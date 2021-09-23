var bodyEl = document.querySelector("body");
var holderEl = document.createElement("div")
var divEl;
var margin = 200;

holderEl.className = "holder";
holderEl.style.width = margin * 2 + 600 + "px"

for (var i = 0; i < 3; i++) {
    divEl = document.createElement("div");
    divEl.className = "terning";
    divEl.style.margin = "0 0 0 " + margin + "px";
    divEl.addEventListener("click", kast);
    divEl.innerHTML = "<img src='media/c" + Math.floor(Math.random() * 6 + 1) + ".png'>";

    if (i == 0) {
        divEl.style.margin = "0px"
    }

    holderEl.appendChild(divEl);
}

bodyEl.appendChild(holderEl);

function kast(e) {
    var tall = Math.floor(Math.random() * 6 + 1)
    /* e.target.innerHTML = "<img src='media/c4.png'>" */
    e.target.setAttribute("src", "media/c" + tall + ".png");
}