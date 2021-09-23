var bodyEl = document.querySelector("body")
var lyder = document.querySelectorAll("audio")
var bokstaver = ["C","D","E","F","G","A","H"]

for (var i = 0; i < lyder.length; i++) {
    var divEl = document.createElement("div")
    divEl.className = "hvitTangent"
    divEl.innerHTML = bokstaver[i]
    divEl.addEventListener("click", spillLyd)
    bodyEl.appendChild(divEl)
}

function spillLyd(e) {
    lyder[Number(bokstaver.indexOf(e.target.innerHTML))].play();
}