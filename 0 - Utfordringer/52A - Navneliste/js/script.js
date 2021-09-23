var bodyEl = document.querySelector("body");
var inputEl = document.querySelector("input");
var outputEl = document.querySelector("h2"); 
var navn = [];

function registrer() {
    //sett inn navn i array
    navn.push(inputEl.value)
    // skriv ut navnene
    outputEl.innerHTML = ""
    navn.sort();
    for (var i = 0; i < navn.length; i++) {
        outputEl.innerHTML = outputEl.innerHTML + navn[i] + ", "
    }
}

