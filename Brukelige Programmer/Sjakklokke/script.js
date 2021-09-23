var bodyEl = document.querySelector("body");
var inputTidEl = document.querySelector("#tidPerPers");
var timerEl = document.querySelector("#timer");
var spanEl = document.querySelector("span")
var spillereEl;
var rundeTidInputEl = document.querySelector("#rundeTidInput");
var rundeTidEl = document.querySelector("#rundeTid");
var turEl = document.querySelector("#tur");
var gjeldendeTurTid = [];
var rundeTid;
var tur = 0;
var hoyreDivEl = document.querySelector("#hoyre");
var hoyreInfoEl;
var buzzerEl = document.querySelector("audio")

bodyEl.addEventListener("keypress", nesteTur)

function start() {
    rundeTid = Number(rundeTidInputEl.value) * 10;
    spillereEl = document.querySelectorAll(".spillere");
    setInterval(timer, 100)
    for (var i = 0; i < spillereEl.length; i++) {
        gjeldendeTurTid.push(Number(inputTidEl.value) * 10);
        hoyreInfoEl = document.createElement("h2");
        hoyreDivEl.appendChild(hoyreInfoEl)
    }
    hoyreInfoEl = document.querySelectorAll("h2")
    document.querySelector("#start").style.display = "none"
}

function nesteTur(e) {
    if (document.querySelector("#start").style.display == "none") {
        buzzerEl.play()
        rundeTid = Number(rundeTidInputEl.value) * 10
        if (tur >= gjeldendeTurTid.length - 1) {
            tur = 0;
        } else {
            tur++;
        }
    }
}

function timer() {
    gjeldendeTurTid[tur]--;
    rundeTid--;
    timerEl.innerHTML = (gjeldendeTurTid[tur] / 10).toFixed(1) + " sekunder igjen av spillet";
    rundeTidEl.innerHTML = (rundeTid / 10).toFixed(1) + " sekunder igjen av runden";
    turEl.innerHTML = "Det er " + spillereEl[tur].value + " sin tur. Skynd deg!"
    for (var i = 0; i < spillereEl.length; i++) {
        hoyreInfoEl[i].innerHTML = spillereEl[i].value + " har " + (gjeldendeTurTid[i] / 10).toFixed(1) + " sekunder igjen";
        hoyreDivEl.appendChild(hoyreInfoEl[i])
    }
}

function leggTilSpiller() {
    spillereEl = document.createElement("input")
    spillereEl.className = "spillere";
    spillereEl.type = "text";
    spanEl.appendChild(spillereEl);
}