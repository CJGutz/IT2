var bodyEl = document.querySelector("body");
var divEl = document.createElement("div");
var overskriftEl = document.createElement("h1");
var graaskala = "rgb(100,100,100)"

divEl.addEventListener("mousemove", endreGraaskala)
divEl.style.backgroundColor = graaskala;

overskriftEl.innerHTML = "Prøv å endre bredden til vinduet og test boksen"

bodyEl.appendChild(overskriftEl);
bodyEl.appendChild(divEl);


function endreGraaskala(e) {
    var bredde = window.innerWidth;
    var fargeNivaa = (e.clientX - 0.1 * bredde) * 255 /(0.8 * bredde)
    graaskala = "rgb(" + fargeNivaa + "," + fargeNivaa + "," + fargeNivaa + ")"
    divEl.style.backgroundColor = graaskala
}