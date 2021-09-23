var bodyEl = document.querySelector("body");
var divEl;

var i = 0
while (i < 10) {
    divEl = document.createElement("div");
    divEl.innerHTML = "";
    bodyEl.appendChild(divEl);
    i++;
}

