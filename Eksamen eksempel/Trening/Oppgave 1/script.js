var bodyEl = document.querySelector("body");
var armstrekkeren = document.querySelector("#arm");
var ryggmuskel = document.querySelector("#rygg");
var frame = 0;
var tekst;

var kroppEl = document.createElement("img")
kroppEl.setAttribute("src", "Vedlegg/kropp.gif")
kroppEl.addEventListener("click", velgMuskel)
bodyEl.appendChild(kroppEl)

function velgMuskel(e) {

    if (e.offsetX > 390 && e.offsetX < 570 && e.offsetY > 245 && e.offsetY < 265) {
        ryggmuskel.play()
        tekst = "Den brede ryggmuskelen"
        setInterval(tekstAnimasjon, 5)
    } else if (e.offsetX > 480 && e.offsetX < 580 && e.offsetY > 120 && e.offsetY < 180) {
        armstrekkeren.play()
        tekst = "Armestrekkeren"
        setInterval(tekstAnimasjon, 5)
    }
}

function tekstAnimasjon() {
    frame = frame + 1
    var animasjonstekst = document.createElement("p")
    animasjonstekst.style.left = frame + "px"
    animasjonstekst.innerHTML = tekst;
    bodyEl.appendChild(animasjonstekst)
    var elementArray = document.querySelectorAll("p")
    elementArray[frame - 2].innerHTML = " "
    if (frame > 500) {
        frame = 500
    }
}