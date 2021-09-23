var bodyEl = document.querySelector("body");
var p1El = document.createElement("p");
var p2El = document.createElement("p");
var h1El = document.createElement("h1")

var tall = [64, 34, 203, 82, 3, 33, 19, 26, 98, 5]
var navn = ["Calle", "CJGutz", "Carl Johan", "Carl", "CJ"]

p1El.innerHTML = navn.sort();
p2El.innerHTML = tall.sort();

h1El.innerHTML = "Når man sorterer tall, blir de bare sortert etter første siffer og ikke hele tallet"

bodyEl.appendChild(p1El);
bodyEl.appendChild(p2El);
bodyEl.appendChild(h1El)