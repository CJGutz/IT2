var bodyEl = document.querySelector("body")
var divEl;

for (var i = 1; i < 64; i++) {
    divEl = document.createElement("div");

    if (i % 9 != 0) {
        divEl.className = "fortsettRad"
    }

    if (i % 2 == 0) {
        divEl.style.backgroundColor = "white";
    }

    bodyEl.appendChild(divEl);
}