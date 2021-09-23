var bodyEl = document.querySelector("body")
var ballEl = document.createElement("div")
var posisjonX;
var posisjonY;
var fart;
var tast;
var ballDiameter = parseFloat(ballEl.style.height, 10);
console.log(ballDiameter)
/* var g = 0.3;
var vY = 1; */

ballEl.className = "ball";
ballEl.style.marginTop = "50px"
ballEl.style.marginLeft = "50px"
bodyEl.addEventListener("keydown", framover)
bodyEl.addEventListener("keyup", stopp)
//setInterval(gravitasjon, 50)
setInterval(beveg, 10)
bodyEl.appendChild(ballEl);



/* function gravitasjon() {
    vY = vY + vY * g
    ballEl.style.marginTop = parseFloat(ballEl.style.marginTop) + vY + "px"
    console.log("hei")
} */

function framover(e) {
    tast = " "
    fart = 10
    if (e.key == "w" || e.key == "W") {
        tast = "w";
    } else if (e.key == "s" || e.key == "S") {
        tast = "s";
    } else if (e.key == "a" || e.key == "A") {
        tast = "a";
    } else if (e.key == "d" || e.key == "D") {
        tast = "d";
    } else {
        tast = " "
    }
}

function stopp(e) {
    tast = " "
    fart = 0
}

function beveg() {
    //bevegelse
    posisjonY = parseFloat(ballEl.style.marginTop, 10);
    posisjonX = parseFloat(ballEl.style.marginLeft, 10);
    if (tast == "w") {
        posisjonY -= fart
    } else if (tast == "s") {
        posisjonY += fart
    } else if (tast == "a") {
        posisjonX -= fart
    } else if (tast == "d") {
        posisjonX += fart
    } else {
        fart = 0;
    }
    // Grenser
    if (posisjonY < 0) {
        posisjonY = 0;
    }
    if (posisjonY + 50 > window.innerHeight) {
        posisjonY = window.innerHeight - 50;
    }
    if (posisjonX < 0) {
        posisjonX = 0;
    }
    if (posisjonX + 50 > window.innerWidth) {
        posisjonX = window.innerWidth - 50;
    }

    ballEl.style.marginTop = posisjonY + "px";
    ballEl.style.marginLeft = posisjonX + "px";
}
