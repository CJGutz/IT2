var bodyEl = document.querySelector("body");
var gameOverEl = document.querySelector("#gameOver")
var dealerEl = document.querySelector("#dealer")
var spillerEl = document.querySelector("#spiller")
var dealerKortEl = document.createElement("img")
var spillerKortEnEl = document.createElement("img")
var spillerKortToEl = document.createElement("img")
var sumDEl = document.querySelector("#sumD");
var sumSEl = document.querySelector("#sumS");
var tall;
var farge;
var kortstokk = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
];
var spillerHand = [];
var dealerHand = [];
var sumD = 0;
var sumS = 0;
var tallD;
var tallS;

dealerKortEl.setAttribute("src", "media/" + nyttKort() + tall + ".png");
fjernKort(farge, tall);
leggIHand("d")
summer("d");
spillerKortEnEl.setAttribute("src", "media/" + nyttKort() + tall + ".png");
fjernKort(farge, tall);
leggIHand("s")
summer("s");
spillerKortToEl.setAttribute("src", "media/" + nyttKort() + tall + ".png");
fjernKort(farge, tall);
leggIHand("s")
summer("s");

if (sumS == 21) {
    gameOverEl.innerHTML = "Du vant!!"
    gameOver();
    stand();
}

dealerEl.appendChild(dealerKortEl);
spillerEl.appendChild(spillerKortEnEl);
spillerEl.appendChild(spillerKortToEl)

function hit() {
    var kortS = document.createElement("img")
    kortS.setAttribute("src", "media/" + nyttKort() + tall + ".png");
    fjernKort(farge, tall);
    leggIHand("s")
    summer("s");
    spillerEl.appendChild(kortS)
    if (sumS == 21) {
        gameOverEl.innerHTML = "Du vant!!"
        gameOver();
    } else if (sumS > 21) {
        gameOverEl.innerHTML = "Du tapte:("
        gameOver();
    }
}

function stand() {
    while (sumD < 17) {
        var kortD = document.createElement("img")
        kortD.setAttribute("src", "media/" + nyttKort() + tall + ".png");
        fjernKort(farge, tall);
        leggIHand("d")
        summer("d");
        dealerEl.appendChild(kortD)
        if (sumS <= 21 && sumS > sumD) {
            gameOverEl.innerHTML = "Du vant!!"
            gameOver();
        } else if (sumS <= 21 && sumD > 21) {
            gameOverEl.innerHTML = "Du vant!!"
            gameOver();
        } else {
            gameOverEl.innerHTML = "Du tapte:("
            gameOver();
        }
    }
}

function nyttKort() {
    farge = Math.floor(Math.random() * 4)
    tall = kortstokk[farge][Math.floor(Math.random() * kortstokk[farge].length)]
    if (farge == 0) {
        return "hjerter"
    } else if (farge == 1) {
        return "klover"
    } else if (farge == 2) {
        return "spar"
    } else {
        return "ruter"
    }
}

function fjernKort(n, m) {
    kortstokk[n].splice(kortstokk[n].indexOf(m), 1)
}

function summer(n) {
    if (n == "d") {
        sumD = 0;
        dealerHand.sort(sorter)
        for (var i = dealerHand.length - 1; i >= 0; i--) {
            if (dealerHand[i] > 9) {
                tallD = 10;
            } else if (dealerHand[i] == 1 && sumD >= 11) {
                tallD = 1;
            } else if (dealerHand[i] == 1 && sumD < 11) {
                tallD = 11;
            } else {
                tallD = dealerHand[i];
            }
            sumD = sumD + tallD
        }
        sumDEl.innerHTML = "Summen er " + sumD;
    } else {
        sumS = 0;
        spillerHand.sort(sorter)
        for (var i = spillerHand.length - 1; i >= 0; i--) {
            if (spillerHand[i] > 9) {
                tallS = 10;
            } else if (spillerHand[i] == 1 && sumS >= 11) {
                tallS = 1;
            } else if (spillerHand[i] == 1 && sumS < 11) {
                tallS = 11;
            } else {
                tallS = spillerHand[i];
            }
            sumS = sumS + tallS
        }
        sumSEl.innerHTML = "Summen er " + sumS;
    }
}

function leggIHand(n) {
    if (n == "d") {
        dealerHand.push(tall)
    } else {
        spillerHand.push(tall)
    }
}

function sorter(a, b) {
    return a - b
}

function gameOver() {
    document.querySelector("#hit").style.display = "none";
    document.querySelector("#stand").style.display = "none";
}