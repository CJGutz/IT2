var bodyEl = document.querySelector("body");
var hEl = document.querySelector("h1");

bodyEl.addEventListener("keypress", bokstav);

function bokstav(e) {
    if (e.keyCode == 115) {
        bodyEl.style.backgroundColor = "black";
        hEl.style.color = "white";
    }

    if (e.keyCode == 104) {
        bodyEl.style.backgroundColor = "white";
        hEl.style.color = "black";
    }
    //console.log(e);
}