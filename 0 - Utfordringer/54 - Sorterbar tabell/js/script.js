var bodyEl = document.querySelector("body");
var tbodyEl = document.querySelector("tbody");
var trEl;
var vareEl;
var leverandorEl;
var beholdningEl;
var varer = [
    { vare: "Kyllingfilet", leverandor: "Stange", beholdning: 184 },
    { vare: "Karbonadedeig", leverandor: "Nordfjord", beholdning: 36 },
    { vare: "Salmalaks", leverandor: "Fiskeriet", beholdning: 104 },
    { vare: "Banan", leverandor: "Bama", beholdning: 362 }
];

lagTabell()

function lagTabell() {
    for (var i = 0; i < varer.length; i++) {
        trEl = document.createElement("tr");
        vareEl = document.createElement("td");
        leverandorEl = document.createElement("td");
        beholdningEl = document.createElement("td");
        vareEl.innerHTML = varer[i].vare;
        leverandorEl.innerHTML = varer[i].leverandor;
        beholdningEl.innerHTML = varer[i].beholdning;
        trEl.appendChild(vareEl);
        trEl.appendChild(leverandorEl);
        trEl.appendChild(beholdningEl);
        tbodyEl.appendChild(trEl);
    }

}

function sorterVare() {
    varer.sort(vareSorter)
    function vareSorter(a, b) {
        if (a.vare > b.vare) {
            return 1;
        } else if (a.vare < b.vare) {
            return -1;
        } else {
            return 0;
        }
    }
    slett()
    lagTabell();
}

function sorterLeverandor() {
    varer.sort(leverandorSorter)
    function leverandorSorter(a, b) {
        if (a.leverandor > b.leverandor) {
            return 1;
        } else if (a.leverandor < b.leverandor) {
            return -1;
        } else {
            return 0;
        }
    }
    slett()
    lagTabell();
}

function sorterBeholdning() {
    varer.sort(beholdningSorter)
    function beholdningSorter(a, b) {
        if (a.beholdning > b.beholdning) {
            return 1;
        } else if (a.beholdning < b.beholdning) {
            return -1;
        } else {
            return 0;
        }
    }
    slett()
    lagTabell();
}

function slett() {
/*     for (var i = 0; i < varer.length * 3; i++) {
        var x = document.querySelector("td")
        x.parentNode.removeChild(x)
    } */
    tbodyEl.innerHTML = ""
}

