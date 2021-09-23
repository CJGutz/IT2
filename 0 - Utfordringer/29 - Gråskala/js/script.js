var bodyEl = document.querySelector("body");
var divEl;

var i = 0
while (i < 10) {
    divEl = document.createElement("div");
    divEl.style.backgroundColor = "rgb(" + 255 * i / 10 + "," + 255 * i / 10 +"," + 255 * i / 10 + ")";
    bodyEl.appendChild(divEl);
    i++;
}

