var bodyEl = document.querySelector("body");
var bombe = document.querySelector("#bombe");
var lunte = document.querySelector("#lunte");
var eksplosjon = document.querySelector("#eksplosjon");
var knapp = document.querySelector("button")
var eksplodert = false;

bombe.addEventListener("click",tenn)
lunte.addEventListener("ended", eksploder)
knapp.addEventListener("click", lagBombe)

function tenn() {
    if (!eksplodert) {
        bombe.setAttribute("src","media/tent-bombe.png")
        lunte.play()
    }
}

function eksploder() {
    bombe.setAttribute("src","media/pang-(2).gif")
    eksplosjon.play()
    eksplodert = true;
}

function lagBombe() {
    if (eksplodert) {
        bombe.setAttribute("src","media/bombe.png")
        eksplodert = false;
    }
}