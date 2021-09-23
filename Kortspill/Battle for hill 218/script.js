var bodyEl = document.querySelector("body");
var tabellEl = document.createElement("table")
var celleBredde = 55;
var celleHoyde = 70;
var valgtKort = "";
var grid = [
    ["A1", "B1", "C1", "D1", "E1"],
    ["A2", "B2", "C2", "D2", "E2"],
    ["A3", "B3", "C3", "D3", "E3"],
    ["A4", "B4", "C4", "D4", "E4"],
    ["A5", "B5", "C5", "D5", "E5"]
]
var antallKort = [
    ["1r", "1r", "1r", "1r", "1r", "1r", "1r",
        "2r", "2r", "2r", "2r", "2r", "3r", "3r",
        "3r", "4r", "4r", "4r", "5r", "5r", "5r",
        "6r", "6r", "6r"],
    ["1b", "1b", "1b", "1b", "1b", "1b", "1b",
        "2b", "2b", "2b", "2b", "2b", "3b", "3b",
        "3b", "4b", "4b", "4b", "5b", "5b", "5b",
        "6b", "6b", "6b"]
]

var hand = [[], []]

//lag tabell
for (var i = 0; i < grid.length; i++) {
    var tabellRad = document.createElement("tr")
    for (var j = 0; j < grid[i].length; j++) {
        var tabellCelle = document.createElement("td")
        tabellCelle.addEventListener("click", velg)
        tabellRad.appendChild(tabellCelle)
        if (j == 2 && i == 2) {
            tabellCelle.style.padding = "0px";
            tabellCelle.innerHTML = "<img src='media/0.png' width='96px' height='121px'>"
        }
    }
    tabellEl.appendChild(tabellRad)
}
bodyEl.appendChild(tabellEl)

//blå kort
var blaBunke = document.createElement("img")
blaBunke.setAttribute("src", "media/bakside b.png");
blaBunke.className = "bunkeKort";
blaBunke.style.top = "10px"
blaBunke.style.left = "10px"
bodyEl.appendChild(blaBunke)

//rød kort
var rodBunke = document.createElement("img")
rodBunke.setAttribute("src", "media/bakside r.png");
rodBunke.className = "bunkeKort";
rodBunke.style.top = "10px"
rodBunke.style.left = window.innerWidth - 120 + "px"
bodyEl.appendChild(rodBunke)

function velgEgetKort(e) {
    var ikkeVelg = document.querySelectorAll(".bunkeKort")
    var valgt = false;
    if (e.target.style.border != "") { valgt = true }
    for (var i = 0; i < ikkeVelg.length; i++) {
        ikkeVelg[i].style.border = "";
    }
    if (!valgt) {
        e.target.style.border = "solid red 2px"
        valgtKort = e.target.id
    } else {
        e.target.style.border = "";
        valgtKort = ""
    }
}

function velg(e) {
    if (e.target.innerHTML = "<td>" && valgtKort != "") {
        e.target.style.padding = "0"
        e.target.innerHTML = "<img src='media/" + valgtKort + ".png' width='96px' height='121px'>"
        fjernKort(valgtKort, e.ctrlKey)
        e.target.addEventListener("click", fjernFraBrett(event, e.target))
        if (valgtKort[1] == "r") { hand[0].splice(hand[0].indexOf(valgtKort), 1) }
        else { hand[1].splice(hand[1].indexOf(valgtKort), 1) }
    } else {
        e.target.innerHTML = ""
    }
}

trekkBlaKort(3, 0)
trekkRodKort(3, 0)

function trekkRodKort(n, m) {
    for (var i = 0; i < n; i++) {
        var img = document.createElement("img")
        var kort = Math.floor(Math.random() * antallKort[0].length);
        img.setAttribute("src", "media/" + antallKort[0][kort] + ".png");
        hand[0].push(antallKort[0][kort])
        img.addEventListener("click", velgEgetKort)
        img.className = "bunkeKort";
        img.id = antallKort[0][kort]
        img.style.top = "200px";
        img.style.left = window.innerWidth - 120 - i * 130 + "px";
        if (m > 0) { img.style.left = m + "px" }
        bodyEl.appendChild(img)
        antallKort[0].splice(kort, 1);
    }
}

function trekkBlaKort(n, m) {
    for (var i = 0; i < n; i++) {
        var img = document.createElement("img")
        var kort = Math.floor(Math.random() * antallKort[1].length);
        img.setAttribute("src", "media/" + antallKort[1][kort] + ".png");
        hand[1].push(antallKort[1][kort])
        img.addEventListener("click", velgEgetKort)
        img.className = "bunkeKort";
        img.id = antallKort[1][kort]
        img.style.top = "200px";
        img.style.left = 10 + i * 130 + "px";
        if (m > 0) { img.style.left = m + "px" }
        bodyEl.appendChild(img)
        antallKort[1].splice(kort, 1);
    }
}

function fjernKort(n, m) {
    if (n != "" && m == false) {
        var fjernKort = document.querySelector(".bunkeKort[id = '" + n + "']")
        var pixler = fjernKort.style.left.replace("px", "");
        bodyEl.removeChild(fjernKort)
        if (n[1] == "r") { trekkRodKort(1, pixler) }
        else { trekkBlaKort(1, pixler) }
    }
}

function fjernFraBrett(e, n) {
    console.log(e);
    if (e.ctrlKey == true) {
        n.parentNode.removeChild(n.parentNode.firstChild)
    }
}