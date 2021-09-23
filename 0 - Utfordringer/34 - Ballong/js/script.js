var bodyEl = document.querySelector("body");
var ballEl = document.createElement("div");
var diameter = 100;

ballEl.addEventListener("click", endreDiameter);
bodyEl.appendChild(ballEl);

function endreDiameter(e) {
    if (e.altKey) {
        diameter -= 10;
    } else  {
        diameter += 10;
    }

    ballEl.style.width = diameter + "px";
    ballEl.style.height = diameter + "px";
    bodyEl.appendChild(ballEl);
}

