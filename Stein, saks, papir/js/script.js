// Antall poeng for å vinne
var VINNERSUM = 5;

// Spillerens poeng
var spillerPoeng = 0;

// Maskinens poeng
var maskinPoeng = 0;

// Lager variabler for de tre p-elementene
var spillerPoengEl = document.querySelector("#spillerPoeng");
var maskinPoengEl = document.querySelector("#maskinPoeng");
var infoEl = document.querySelector("#info");

// Lager variabler for de fire img-elementene
var steinEl = document.querySelector("#stein");
var saksEl = document.querySelector("#saks");
var papirEl = document.querySelector("#papir");
var maskinEl = document.querySelector("#maskin");

// Legger til clickhendelser på spillerbildene
steinEl.addEventListener("click", sjekkResultat);
saksEl.addEventListener("click", sjekkResultat);
papirEl.addEventListener("click", sjekkResultat);

// Skriver ut bruksanvisning i info-elementet
infoEl.innerHTML = "Velg stein, saks eller papir. Førstemann til " + VINNERSUM + " poeng vinner spillet. ";

// Funksjonen som skal håndtere klikkene våre
function sjekkResultat(e) {
    console.log("Du klikket på et bilde.")

    // Finner først bildet som ble klikket
    var spillerValg = e.target.id;

    // Skriver valgt bilde til konsollen
    console.log("Spiller valgt " + spillerValg);

    // Velger tilfeldig for maskinen
    var tilfeldig = Math.floor(Math.random() * 3) + 1;

    // Lagrer maskinens valg 
    var maskinValg;

    // Gjør om maskinens valg til riktig bildefil
    if (tilfeldig == 1) {
        maskinValg = "stein";
    } else if (tilfeldig == 2) {
        maskinValg = "saks";
    } else if (tilfeldig == 3) {
        maskinValg = "papir";
    }

    // Tilbakestiller bildet
    setTimeout(tilbakestillMaskin, 1500);

    // Skriver maskinens valg i konsollen
    console.log("Maskinen valgte: " + maskinValg);

    // Endrer maskinens bilde
    maskinEl.src = "media/" + maskinValg + ".png";

    // Sammenligner for å avgjøre vinner
    if (spillerValg === maskinValg) {
        // ingen vant, gjør ingenting
    } else if (spillerValg === "stein") {
        if (maskinValg === "saks") {
            // Spiller vant
            spillerPoeng++;
        } else if (maskinValg === "papir") {
            // Maskin vant
            maskinPoeng++;
        }
    } else if (spillerValg === "saks") {
        if (maskinValg === "papir") {
            // Spiller vant
            spillerPoeng++;
        } else if (maskinValg === "stein") {
            // Maskin vant
            maskinPoeng++;
        }

    } else if (spillerValg === "papir") {
        if (maskinValg === "stein") {
            // Spiller vant
            spillerPoeng++;
        } else if (maskinValg === "saks") {
            // Maskin vant
            maskinPoeng++;
        }
    }

    // Endrer poengsummen på nettsiden
    spillerPoengEl.innerHTML = "<b> Spiller: </b>" + spillerPoeng;
    maskinPoengEl.innerHTML = "<b> Maskin: </b>" + maskinPoeng;

    // Sjekker om noen har vunnet
    if (spillerPoeng === VINNERSUM || maskinPoeng === VINNERSUM) {
        // Noen har vunnet
        //Fjerner hendelser, slik at man ikke kan klikke på bildene
        steinEl.removeEventListener("click", sjekkResultat);
        saksEl.removeEventListener("click", sjekkResultat);
        papirEl.removeEventListener("click", sjekkResultat);

        // Endrer musepekeren, slik at bildene virker "deaktiverte"
        steinEl.style.cursor = "auto";
        saksEl.style.cursor = "auto";
        papirEl.style.cursor = "auto";

        // Skriver ut en avslutningsbeskjed
        if (spillerPoeng === VINNERSUM) {
            infoEl.innerHTML = "Gratulerer! Du vant!";
        } else {
            infoEl.innerHTML = "Auda! Du ble slått av en maskin..."
        }
    }
}

function tilbakestillMaskin() {
    // Endrer maskinens bilde til spørsmålstegnet
    maskinEl.src = "media/sporsmalstegn.png";
}
