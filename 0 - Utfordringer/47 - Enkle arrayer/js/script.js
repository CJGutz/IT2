var bodyEl = document.querySelector("body");
var h1El = document.createElement("h1");

var tall = [64, 34, 23, 82, 3, 33, 19, 264, 98, 74]
var navn = ["Calle", "CJ", "Carl Johan", "Carl", "CJGutz"]

h1El.innerHTML = "Åpne konsollen (F12)";

bodyEl.appendChild(h1El);

console.log(tall, navn);

console.log(tall[2], navn[1]);

console.log(tall.indexOf(33));

navn[0] = navn[navn.length-1];

console.log(navn);