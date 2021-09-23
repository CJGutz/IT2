var bodyEl = document.querySelector("body");
var divEl;

var i = 1
while (i <= 10) {
    divEl = document.createElement("div");
    divEl.style.width =  i * "30" + "px";
    bodyEl.appendChild(divEl);
    i++;
}

