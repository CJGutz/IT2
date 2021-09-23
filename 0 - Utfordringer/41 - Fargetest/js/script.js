// alle variabler som er brukt
var bodyEl = document.querySelector("body");
var wrapperEl = document.createElement("main")
var poengEl;
var divEl;
const antallRuter = Math.pow(Number(prompt("Hvor bred skal rutenettet være?")), 2);
var hue = Math.random() * 360
var saturation = 100;
var light = 50;
var forskjell = 40;
var posisjon = Math.floor(Math.random() * antallRuter);
var poeng = 0;

//wrapper som er en konteiner for firkantene
wrapperEl.className = "wrapper";
wrapperEl.style.width = (50 + 5) * Math.sqrt(antallRuter) + "px";
wrapperEl.style.height = (50 + 5) * Math.sqrt(antallRuter) + "px";



//de første rutene
for (var i = 0; i < antallRuter; i++) {
    if (posisjon == i) {
        lagVinnerRute();
    } else {
        lagTaperRute();
    }
}

//element som skal vise poeng
poengEl = document.createElement("h2");
poengEl.innerHTML = poeng + " poeng";
bodyEl.appendChild(poengEl);

//funksjon som lager en vinnerrute som spiller skal trykke på
function lagVinnerRute() {
    divEl = document.createElement("div");
    divEl.style.backgroundColor = "hsl(" + hue + "," + saturation + "%," + Number(light + forskjell) + "%)"
    divEl.addEventListener("click", nesteRunde);
    divEl.className = "vinner"
    wrapperEl.appendChild(divEl);
    bodyEl.appendChild(wrapperEl);
    forskjell = Math.abs(forskjell)
}

// lager vanlige ruter som man ikke skal trykke på
function lagTaperRute() {
    divEl = document.createElement("div");
    divEl.style.backgroundColor = "hsl(" + hue + "," + saturation + "%," + light + "%)";
    divEl.addEventListener("click", gameOver);
    wrapperEl.appendChild(divEl);
    bodyEl.appendChild(wrapperEl);
}


// forbereder ruteark til neste runde
function nesteRunde() {

    //fjern tidligere ruter
    while (wrapperEl.firstChild) {
        wrapperEl.removeChild(wrapperEl.firstChild);
    }
    // Lag nytt ruteark
    hue = Math.random() * 360
    posisjon = Math.floor(Math.random() * antallRuter);
    for (var i = 0; i < antallRuter; i++) {
        if (posisjon == i) {
            if (Math.random() < 0.5) {
                forskjell = -forskjell
            }
            lagVinnerRute();
        } else {
            lagTaperRute();
        }
    }

    poeng++;
    poengEl.innerHTML = poeng + " poeng"
    bodyEl.appendChild(poengEl);

    // passer på at vansklighetsgraden forblir på et stadie
    if (forskjell >= 7) {
        forskjell -= 1;
    }

}

function gameOver() {
    alert("Game Over! Du fikk " + poeng + " poeng");
    var gammelVinnerRute = document.querySelector(".vinner");
    var hvit = 0;
    setInterval(function tilHvit() {
        gammelVinnerRute.style.backgroundColor = "hsl(" + hue + "," + saturation + "%," + Number(light + hvit) + "%)";
        hvit++;
    }, 15)
}

