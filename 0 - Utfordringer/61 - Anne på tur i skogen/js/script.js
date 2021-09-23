var bodyEl = document.querySelector("body")
var videoEl = document.querySelector("video")
var knappEl = document.querySelector("#visSkjul")
var lukkEl = document.querySelector("#lukk")
var vindu = document.querySelector("#vindu")

knappEl.addEventListener("click", visSkjul)
lukkEl.addEventListener("click", visSkjul)

function visSkjul() {
    if (knappEl.innerHTML == "Vis&nbsp;video") {
        console.log("hei")
        var topp = (window.innerHeight - 360) / 2
        var venstre = (window.innerWidth - 640) / 2
        vindu.style.top = topp + "px"
        vindu.style.left = venstre + "px"
        vindu.style.display = "initial";
        knappEl.innerHTML = "Skjul video"
        videoEl.play()
    } else {
        vindu.style.display = "none";
        knappEl.innerHTML = "Vis&nbsp;video"
        videoEl.pause()
    }
}