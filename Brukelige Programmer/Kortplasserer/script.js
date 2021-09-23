// mange bilder fører til lang ventetid på starten.
// deklarerer variabler
// bodyEl er et div-element. Fikk problemer med å tracke mus på selve body.
var bodyEl = document.querySelector("#body")
// antall kort uten baksidene
var antallKort = 53;
// kortbredde er bestemt av input på nettsiden
var kortBredde = document.querySelector("#bredde").value;
// forholdet er kortets bredde delt på høyde
var forhold = 1131 / 825;
var musX;
var musY;

// tracker musens posisjon
bodyEl.addEventListener("mousemove", function musPos(e) {
    musX = e.clientX;
    musY = e.clientY;
})

// printer ut alle kort i bunken
for (var i = 1; i <= antallKort; i++) {
    var kortEl = document.createElement("img");
    kortEl.setAttribute("src", "brettspillKort/" + i + ".png");
    kortEl.setAttribute("id", i)
    kortEl.setAttribute("width", kortBredde + "px")
    kortEl.setAttribute("height", kortBredde * forhold + "px")
    kortEl.setAttribute("draggable", "false")
    kortEl.style.position = "absolute"
    kortEl.style.transform = "translate(-50%,-90%)"
    kortEl.addEventListener("click", holdKort);
    bodyEl.appendChild(kortEl);
}

// alle muligheter en kan gjøre med kortene. Man kan trykke mens man holder inne: Alt, shift og ctrl.
// bruker z indeks så kortene man holder ikke er i veien.
function holdKort(e) {
    if (e.altKey == 1) {
        snuKort();
    } else if (e.shiftKey == 1) {
        bland();
    } else if (e.ctrlKey == 1) {
        settNedStokk();
    } else if (e.target.className == "valgt") {
        e.target.className = ""
        e.target.style.zIndex = 100;
    } else {
        e.target.className = "valgt";
        e.target.style.zIndex = 0;

    }
}

// animerer kortenes utseende
setInterval(function intervall() {
    bodyEl.style.width = window.innerWidth + "px";
    bodyEl.style.height = window.innerHeight + "px";
    kortBredde = document.querySelector("#bredde").value;
    // går gjennom alle bilder/kort
    var kortEl = document.querySelectorAll("img");
    for (var i = 0; i < kortEl.length; i++) {
        // bestemmer kortets dimensjoner
        kortEl[i].setAttribute("width", kortBredde + "px")
        kortEl[i].setAttribute("height", kortBredde * forhold + "px")
        // valgte kort for rød kant
        if (kortEl[i].className == "valgt") {
            kortEl[i].style.border = "red solid 4px";
            beveg()
        } else {
            kortEl[i].style.border = "red solid 0px"
        }
    }

}, 10)

// blander kortene ved å endre på z-indeksen
function bland() {
    var blandeKort = document.querySelectorAll(".valgt")
    for (var i = 0; i < blandeKort.length; i++) {
        blandeKort[i].style.zIndex = Math.round(Math.random() * blandeKort.length + 1)
    }
}

// animerer kortenes bevegelse etter musen om de er valgt
function beveg() {
    var kortStokk = document.querySelectorAll(".valgt")
    for (var j = 0; j < kortStokk.length; j++) {
        // deler museposisjonen på 10 så man får en "snap to grid" bevegelse.
        kortStokk[j].style.marginLeft = 10 * Math.round(musX / 10) - j + "px";
        kortStokk[j].style.marginTop = 10 * Math.round(musY / 10) - j + kortBredde * forhold/2 + "px";


    }
}

// setter ned alle kortene som er valgt
function settNedStokk() {
    var kortStokk = document.querySelectorAll(".valgt");
    for (var i = 0; i < kortStokk.length; i++) {
        kortStokk[i].className = "";
        kortStokk[i].style.zIndex += 100;
    }
}

// snur kortene og viser baksiden som er et eget bilde.
function snuKort() {
    var kortStokk = document.querySelectorAll(".valgt");
    var bakside;
    for (var i = 0; i < kortStokk.length; i++) {
        if (kortStokk[i].id[kortStokk[i].id.indexOf("b")] != "b") {
            // Det er to ulike baksider så dette er en ikke-dynamisk endring av bakside
            if (Number(kortStokk[i].id) <= 27) {bakside = 55}
            else if (Number(kortStokk[i].id) <= 53) {bakside = 56}
            else {bakside = 27}
            kortStokk[i].setAttribute("src", "brettspillKort/" + bakside + ".png")
            kortStokk[i].id += "b";
        } else {
            // b står for bakside for å identifisere snudde kort. Så fjerner vi b når vi snur tilbake.
            kortStokk[i].id = kortStokk[i].id.replace("b", "")
            kortStokk[i].setAttribute("src", "brettSpillkort/" + kortStokk[i].id + ".png")
        }
    }
}

// Det er relativt lett å endre hvilke kort som brukes.
// Tall som må endres er variablene: forhold, antallKort, bakside.
// I tillegg må mappen kortene er hentet ut fra byttes. Se etter setAttribute("src",
// Merk også at bildemappen må ha bakside som høyeste tall og første bildet har navn 0.