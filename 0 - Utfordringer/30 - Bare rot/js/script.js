var bodyEl = document.querySelector("body");
var divEl;
var r;
var g;
var b;
var rotasjon;
var storrelse;

for (var i = 1; i <= 10; i++) {
    divEl = document.createElement("div");
    r = Math.round(Math.random() * 255)
    g = Math.round(Math.random() * 255)
    b = Math.round(Math.random() * 255)
    rotasjon = Math.random()
    storrelse = Math.random() * 50
    divEl.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    divEl.style.transform = "rotate(" + rotasjon + "turn)"; 
    divEl.style.padding = storrelse + "px"
    bodyEl.appendChild(divEl);
}