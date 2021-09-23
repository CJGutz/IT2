var inputEl = document.querySelector("#input");
var baklengsEl = document.querySelector("#baklengs");

var input;
var baklengs = "";

function skrivUt() {
    input = inputEl.value;
    baklengsEl.innerHTML = "";
    baklengs = "";
    for (var i = input.length - 1; i > -1; i--) {
        baklengs = baklengs + input[i];
    }
    baklengsEl.innerHTML = baklengs;
}