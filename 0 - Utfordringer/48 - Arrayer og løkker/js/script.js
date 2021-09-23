var bodyEl = document.querySelector("body");
var pEl;

var tall = [64, 34, 203, 82, 3, 33, 19, 26, 98, 5]

var sum = 0;
var snitt = 0;

var storst = tall[0];
var minst = tall[0];

for (var i = 0; i < tall.length; i++) {
    pEl = document.createElement("p");
    pEl.innerHTML = tall[i];
    bodyEl.appendChild(pEl);
    sum = sum + tall[i];

    if (storst < tall[i]) {
        storst = tall[i]
    }

    if (minst > tall[i]) {
        minst = tall[i]
    }

}

var sumEl = document.createElement("p")
sumEl.innerHTML = "Sum = <b>" + sum + "</b>";
bodyEl.appendChild(sumEl)

var snittEl = document.createElement("p")
snitt = sum/tall.length;
snittEl.innerHTML = "Snitt = <b>" + snitt.toFixed(2) + "</b>";
bodyEl.appendChild(snittEl);

var breddeEl = document.createElement("p")
breddeEl.innerHTML = "Det største tallet er:  <b>" + storst + "</b> <br> Det minste tallet er:  <b>" + minst + "</b>"
bodyEl.appendChild(breddeEl);

console.log(storst);
console.log(minst)