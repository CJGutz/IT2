var bodyEl = document.querySelector("body");
var divEl;
var boksEl =  document.createElement("div");
var bredde = 1300

boksEl.className = "boks"
boksEl.style.width = bredde + "px"

for (var i = 0; i < 10; i++) {
    divEl = document.createElement("div");
    divEl.className = "roed"
    divEl.addEventListener("click", forsvinn);
    boksEl.appendChild(divEl);
}

bodyEl.appendChild(boksEl)

function forsvinn(e) {
    console.log(e.target)
    bredde -= 130
    boksEl.style.width = bredde + "px"
    e.target.style.width = "0px"
    e.target.style.margin = "0px"
}