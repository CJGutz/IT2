var bodyEl = document.querySelector("body");
var divEl;

var i = 1
while (i <= 10) {
    divEl = document.createElement("div");
    
    if (i == 3) {
        divEl.className = "gul";
    }

    bodyEl.appendChild(divEl);
    i++;
}