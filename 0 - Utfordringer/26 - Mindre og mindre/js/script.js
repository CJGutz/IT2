var bodyEl = document.querySelector("body");
var divEl;

var i = 10
while (i > 0) {
    divEl = document.createElement("div");
    divEl.style.width =  i * i * "10" + "px";
    bodyEl.appendChild(divEl);
    i--;
}