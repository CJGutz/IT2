var bodyEl = document.querySelector("body");
var knappEl = document.querySelector("button");
var tallEl;
var arrayEl = document.createElement("h1")
var forsteArray = [];
var andreArray = [];
var storsteTall = 0;

//.pop() -> tar ut siste
//.push(n) -> legger inn n sist
function lagNyArray() {
    andreArray = [];
    for (var i = 0; i < forsteArray.length; i++) {
        // vi resetter storstetall
        storsteTall = 0;
        // løkken finner det storste tallet og legger inn i en variabel
        for (var j = 0; j < forsteArray.length; j++) {
            if (storsteTall < forsteArray[j]) {
                storsteTall = forsteArray[j];

            } else {
                storsteTall = storsteTall
            }
        }
        // Vi finner hvor det største tallet ligger og får det bort og så legger inn det tallet til den andre arrayen.
        //console.log(forsteArray.indexOf(storsteTall))
        forsteArray[forsteArray.indexOf(storsteTall)] = 0;
        andreArray.push(storsteTall)
    }
}


function printArray() {
    var arrayTall = document.querySelectorAll("input");
    forsteArray = [];
    for (var i = 0; i < arrayTall.length; i++) {
        forsteArray.push(Number(arrayTall[i].value))
    }
    lagNyArray();
    arrayEl.innerHTML = "";
    for (var i = 0; i < forsteArray.length; i++) {
        arrayEl.innerHTML = arrayEl.innerHTML + andreArray[i] + ", ";
    }
    arrayEl.innerHTML[arrayEl.innerHTML.length] = "";
    bodyEl.appendChild(arrayEl)
}

function lagInput() {
    tallEl = document.createElement("input");
    tallEl.type = "Number"
    tallEl.addEventListener("input", printArray)
    bodyEl.appendChild(tallEl)
}