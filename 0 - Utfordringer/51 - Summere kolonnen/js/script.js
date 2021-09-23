var bodyEl = document.querySelector("body");
var tallBoks;
var sumEl; 
var sum = 0;

for (var i = 0; i < 10; i++) {
    tallBoks = document.createElement("input")
    tallBoks.type = "number";
    tallBoks.addEventListener("input", summer)
    bodyEl.appendChild(tallBoks);
}

sumEl = document.createElement("h2");

function summer() {
    sum = 0;
    var bokserEl = document.querySelectorAll("input");
    for (var i = 0; i < bokserEl.length; i++) {
        sum = sum + Number(bokserEl[i].value);
    }
    sumEl.innerHTML = sum;
    bodyEl.appendChild(sumEl);
}