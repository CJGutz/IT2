var bodyEl = document.querySelector("body");
var overskriftEl = document.createElement("h1");
var avsnitt1El = document.createElement("p");
var avsnitt2El = document.createElement("p");

overskriftEl.innerHTML = "Overskrift";
avsnitt1El.innerHTML = "Dette avsnittet er gult";
avsnitt2El.innerHTML = "Dette avsnittet er rødt";

avsnitt1El.className = "gul";
avsnitt2El.className = "rød";

bodyEl.appendChild(overskriftEl);
bodyEl.appendChild(avsnitt1El);
bodyEl.appendChild(avsnitt2El);