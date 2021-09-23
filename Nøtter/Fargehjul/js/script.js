var bodyEl = document.querySelector("body");
var hjulEl = document.createElement("div");
var hslEl = document.createElement("h1");
var hue;
var lysverdi;

hjulEl.addEventListener("mousemove", endreFarge)
hjulEl.style.transform = "translate(-50%, -50%) rotate(-90deg)"



bodyEl.appendChild(hjulEl);
bodyEl.appendChild(hslEl);

function endreFarge(e) {
    hue = Math.atan((200 - e.offsetY)/(e.offsetX - 200)) * 180 / Math.PI; 

    if (hue < 0) {
        hue = 180 + hue;
    }
    if (e.offsetY > 200) {
        hue = 180 + hue;
    }

    lysverdi = Math.hypot(200 - e.offsetY, e.offsetX - 200) / 2;
    hjulEl.style.backgroundColor = "hsl(" + hue + ",100%, " + lysverdi + "%)";

    hslEl.innerHTML = "hsl(" + Math.round(hue) + ", 100%, " + Math.floor(lysverdi) +"%)"
}

