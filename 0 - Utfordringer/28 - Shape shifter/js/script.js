var bodyEl = document.querySelector("body");
var divEl;
var tilfeldigSirkel;

var i = 0
while (i < 10) {
    divEl = document.createElement("div");
    divEl.style.borderRadius = i * 3 + "px";
    bodyEl.appendChild(divEl);
    i++;
}

