var bodyEl = document.querySelector("body");
var menyEl = document.querySelector("#meny")
var menyKnappEl = document.querySelector("#menyknapp")
var forBildeEl = document.querySelector("#forBilde")

menyKnappEl.addEventListener("click", visMeny)

function visMeny() {
    if (menyEl.style.display == "block") {
        menyEl.style.display = "none";
        forBildeEl.style.backgroundColor = "white"
        menyKnappEl.style.transform = "rotate(0deg)"
    } else {
        menyEl.style.display = "block"
        forBildeEl.style.backgroundColor = "lightblue"
        menyKnappEl.style.transform = "rotate(90deg)"
    }
}

