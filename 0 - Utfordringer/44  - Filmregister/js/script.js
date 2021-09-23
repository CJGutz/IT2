var bodyEl = document.querySelector("body");
var tittelEl = document.querySelector("#tittel");
var beskrivelseEl = document.querySelector("#omFilm");
var aarEl = document.querySelector("#aar");
var grenseEl = document.querySelector("#grense");
var velgKinoEl = document.querySelector("#kino");
var velgDvdEl = document.querySelector("#dvd");
var velgTvEl = document.querySelector("#tv");
var oscarJaEl = document.querySelector("#ja");
var oscarNeiEl = document.querySelector("#nei");
var knappEl = document.querySelector("#registrer");

var fTittelEl = document.querySelector("#fTittel");
var fBeskrivelseEl = document.querySelector("#fBeskrivelse");
var fAarEl = document.querySelector("#fAar");
var fGrenseEl = document.querySelector("#fGrense");
var fFormatEl = document.querySelector("#fFormat");
var fOscarEl = document.querySelector("#fOscar");

var tittel;
var beskrivelse;
var aar;
var grense;
var kino = "nei";
var dvd = "nei";
var tv = "nei";
var oscar;

knappEl.addEventListener("click", registrer);

function registrer() {
    tittel = tittelEl.value;
    beskrivelse = beskrivelseEl.value;
    aar = aarEl.value;
    grense = grenseEl.value;
    
    if (velgKinoEl.checked) {
        kino = "kino"
    } else {
        kino = ""
    }
    if (velgDvdEl.checked) {
        dvd = "DVD"
    } else {
        dvd = ""
    }
    if (velgTvEl.checked) {
        tv = "TV"
    } else {
        tv = ""
    }

    if (oscarJaEl.checked) {
        oscar = "Ja"
    } else {
        oscar = "Nei"
    }

    vis();
}

function vis() {
    fTittelEl.innerHTML = "Tittelsen på den registrerte filmen er " + tittel + "<br>";
    fBeskrivelseEl.innerHTML = "Beskrivelse av filmen: <br>" + beskrivelse + "<br>";
    fAarEl.innerHTML = "Filmen ble gitt ut i " + aar + "<br>";
    fGrenseEl.innerHTML = "og har aldersgrensen " + grense + ".<br>";
    fFormatEl.innerHTML = "Filmen er tilgjengelig på:  " + kino + "  " + dvd + "  " + tv + ".<br>"
    fOscarEl.innerHTML = "Har filmen fått en Oscar?  " + oscar;
}